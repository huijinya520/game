"""Full click-through acceptance tests for the first-person game; start its server first."""
import json, os
from pathlib import Path
from playwright.sync_api import sync_playwright
BASE=os.environ.get('GAME_URL','http://127.0.0.1:3013/')
OUT=Path(os.environ.get('QA_DIR','/tmp/redline-v5-qa'));OUT.mkdir(exist_ok=True,parents=True)
KEY='redline-story-v5'
DAYS=[['build0','build1','supply'],['check0','check1','build2'],['check2']]
ROUTES={
 'relay':{'name':'接力的人','score':100},
 'steady':{'policy':['technical','rest'],'name':'稳稳起飞','score':90},
 'silent':{'report':'quiet','policy':['technical','rest'],'name':'没有来电的夜晚','score':70},
 'hollow':{'policy':['rest','reward'],'budget':['cuts','reserve','supplier','support'],'days':[['build0','build1'],['check0','check1'],['supply']],'name':'空出来的工位','score':84},
 'pledge':{'union':'promise','name':'太重的承诺','score':85},
 'quarter':{'final':'numbers','name':'漂亮的季度','score':90},
 'unfinished':{'days':[['supply'],['supply'],['build0']],'name':'还没写完的清单','score':80},
}
def state(p):return p.evaluate('(k)=>JSON.parse(localStorage.getItem(k))',KEY)
def context(p):
 if p.locator('#context-go').is_visible():p.locator('#context-go').click()
def resume(p):
 old=state(p);p.reload();p.locator('[data-action="resume"]').click();assert state(p)==old
 p.locator('[data-action="skip"]').click()
def interact(p,route,exercise=False):
 s=state(p);node=s['node']
 if node=='brief':p.locator('#transcribe').click()
 elif node=='walk':
  for i,id in enumerate(route.get('walk',['engine','tools','ledger'])):
   p.locator('[data-place="'+id+'"]').click()
   if exercise and i==1:resume(p)
  assert p.locator('[data-place="locker"]').is_disabled()
 elif node in ['dispatch','canteen','lockdown']:
  name,default={'dispatch':('dispatch',['field','tools']),'canteen':('policy',['technical','voice']),'lockdown':('budget',['workshare','mentor','reserve'])}[node]
  for id in route.get(name,default):p.locator('[data-task="'+id+'"]').click()
  if exercise and node=='lockdown':
   p.locator('[data-task="support"]').click();assert len(state(p)['ops']['lockdown']['selected'])==3;assert p.locator('#op-feedback').is_visible()
   p.screenshot(path=str(OUT/'budget.png'))
 elif node=='restart':
  if exercise:p.screenshot(path=str(OUT/'dispatch-before.png'))
  for i,day in enumerate(route.get('days',DAYS)):
   for job in day:p.locator('[data-job="'+job+'"]').click()
   p.locator('#execute-day').click()
   if exercise and i==0:resume(p)
  if exercise:p.screenshot(path=str(OUT/'dispatch-after.png'))
 p.locator('#take-note').click()
def play(p,route,exercise=False):
 p.goto(BASE);p.locator('[data-action="start"]').click();context(p)
 for _ in range(65):
  context(p);s=state(p)
  if s['node']=='END':break
  if s['phase']=='dialogue':
   p.locator('[data-action="skip"]').click()
   if p.locator('#modal').evaluate('(m)=>m.open'):interact(p,route,exercise)
  elif s['phase']=='action':
   choice=route.get(s['node'])
   (p.locator('[data-choice="'+choice+'"]') if choice else p.locator('[data-choice]:not(:disabled)').first).click()
  else:p.locator('[data-action="advance"]').click()
 else:raise AssertionError('Route did not terminate')
 assert p.locator('.end h1').inner_text()==route['name']
 assert int(p.locator('.ending-score strong').inner_text())==route['score']
 assert p.locator('.ending-score.perfect').count()==int(route['score']==100)
 p.locator('.score-details summary').click()
 assert p.locator('.score-row').count()==6
 assert not p.evaluate('document.documentElement.scrollWidth>innerWidth')
 if exercise:p.screenshot(path=str(OUT/'perfect-ending.png'),full_page=True)
with sync_playwright() as pw:
 browser=pw.chromium.launch(executable_path=os.environ.get('CHROMIUM','/usr/bin/chromium'),headless=True,args=['--no-sandbox'])
 all_errors=[]
 for key,route in ROUTES.items():
  ctx=browser.new_context(viewport={'width':1366,'height':900});p=ctx.new_page();errors=[]
  p.add_init_script("localStorage.setItem('redline-story-prefs-v5',JSON.stringify({instant:true,motion:false,large:false,sound:false}))")
  p.on('pageerror',lambda e:errors.append(str(e)))
  play(p,route,key=='relay');assert not errors,errors
  print('PASS',key,route['score'],flush=True);ctx.close()
 # Touch and large print, throughout a complete route.
 ctx=browser.new_context(viewport={'width':390,'height':844},is_mobile=True,has_touch=True);p=ctx.new_page()
 p.add_init_script("localStorage.setItem('redline-story-prefs-v5',JSON.stringify({instant:true,motion:false,large:true,sound:false}))")
 p.on('pageerror',lambda e:all_errors.append(str(e)))
 play(p,ROUTES['relay']);p.screenshot(path=str(OUT/'mobile-ending.png'),full_page=True)
 assert not all_errors,all_errors;ctx.close()
 # Storage disabled: the story and investigation still work.
 ctx=browser.new_context();p=ctx.new_page()
 p.add_init_script("Object.defineProperty(window,'localStorage',{get(){throw new DOMException('blocked','SecurityError')}})")
 p.goto(BASE);p.locator('[data-action="start"]').click();context(p);p.locator('[data-action="skip"]').click();p.locator('#transcribe').click();p.locator('#take-note').click()
 p.locator('[data-action="skip"]').click();p.locator('[data-place="engine"]').click();assert '无法保存' in p.locator('#top').inner_text();ctx.close()
 # Corrupted save and missing artwork do not prevent text play.
 ctx=browser.new_context();p=ctx.new_page();p.add_init_script("localStorage.setItem('redline-story-v5','{bad')")
 p.route('**/assets/*',lambda r:r.abort());p.goto(BASE);p.locator('#asset-notice').wait_for(state='visible');p.locator('[data-action="start"]').click();context(p);assert p.locator('.dialogue').count()==1
 ctx.close();browser.close();print('PASS: mobile, storage unavailable, broken save, missing art',flush=True)
