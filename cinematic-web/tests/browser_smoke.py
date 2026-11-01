"""Browser acceptance checks. Needs Playwright Python and Chromium; run the local server first."""
import json, os
from pathlib import Path
from playwright.sync_api import sync_playwright
BASE = os.environ.get('GAME_URL', 'http://127.0.0.1:3012/')
OUT = Path(os.environ.get('QA_DIR', '/tmp/redline-qa')); OUT.mkdir(parents=True, exist_ok=True)
KEY = 'redline-story-v4'
ROUTES = {
 '接班人': {},
 '一切正常': {'desk':'leave','engineer':'name','timeline':'quiet','protection':'hide','bonus':'keep_bonus','lunch':'photo'},
 '没有人负责': {'timeline':'quiet','protection':'blame'},
 '幸存者名单': {'talent':'let_go','lockdown':'cut'},
 '被保护的工厂': {'lockdown':'promise_jobs'},
 '季度冠军': {'bonus':'keep_bonus','final':'numbers'},
 '红线之上': {'talent':'raise'},
}
PREFS="localStorage.setItem('redline-story-prefs-v4',JSON.stringify({instant:true,motion:false,large:false,sound:false}))"
def setup(page):
 page.add_init_script(PREFS)
 page.goto(BASE)
 page.wait_for_selector('[data-action="start"]')
 page.locator('[data-action="start"]').click()
def state(page): return page.evaluate('(k)=>JSON.parse(localStorage.getItem(k))',KEY)
def interact(page):
 if not page.locator('#modal').evaluate('(m)=>m.open'): return
 for sel in ['#transcribe','#reveal-compare']:
  if page.locator(sel).count():
   assert not page.locator('#take-note').is_visible(), 'object reveal gate'
   page.locator(sel).click()
 page.locator('#take-note').click()
def play(page,route,check_resume=False):
 visited=[]
 for _ in range(100):
  s=state(page)
  if s['node']=='END': break
  if s['node'] not in visited: visited.append(s['node'])
  if s['phase']=='dialogue':
   page.locator('[data-action="skip"]').click(); interact(page)
  elif s['phase']=='action':
   cs=page.locator('[data-choice]')
   (page.locator('[data-choice="'+route[s['node']]+'"]') if s['node'] in route else cs.first).click()
   if check_resume and s['node']=='signature':
    before=state(page);page.reload();page.locator('[data-action="resume"]').click()
    assert state(page)==before,'response resumes exactly'
  else:
   if check_resume and s['node']=='engineer': page.screenshot(path=str(OUT/'engineer.png'))
   page.locator('[data-action="advance"]').click()
 else: raise AssertionError('route did not end')
 assert state(page)['node']=='END'
 assert len(state(page)['history'])==13
 return page.locator('.end h1').inner_text(), visited
with sync_playwright() as p:
 browser=p.chromium.launch(executable_path=os.environ.get('CHROMIUM','/usr/bin/chromium'),headless=True,args=['--no-sandbox'])
 all_errors=[]; results=[]
 for expected,route in ROUTES.items():
  ctx=browser.new_context(viewport={'width':1366,'height':768});page=ctx.new_page()
  errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
  setup(page)
  actual,visited=play(page,route,expected=='接班人')
  assert actual==expected, (expected,actual)
  results.append({'expected':expected,'actual':actual,'scenes':len(visited),'errors':errors})
  if expected=='接班人':
   page.screenshot(path=str(OUT/'ending.png'))
   page.reload();page.locator('[data-action="resume"]').click();assert page.locator('.end h1').inner_text()==actual
   page.locator('[data-action="collection"]').click();assert page.locator('.end-card:not(.locked)').count()==1
  all_errors+=errors;ctx.close()
 print(json.dumps(results,ensure_ascii=False),flush=True)
 assert not all_errors,all_errors
 # Portrait screens and large text: controls remain within the horizontal viewport.
 ctx=browser.new_context(viewport={'width':390,'height':844},is_mobile=True,has_touch=True)
 page=ctx.new_page();setup(page)
 page.locator('[data-action="settings"]').click();page.locator('[data-pref="large"]').click();page.locator('#close-modal').click()
 page.locator('[data-action="skip"]').click();page.locator('#transcribe').click()
 page.screenshot(path=str(OUT/'mobile-phone.png'),full_page=True)
 assert not page.evaluate('document.documentElement.scrollWidth>innerWidth'),'mobile horizontal overflow'
 page.locator('#take-note').click();page.locator('[data-action="skip"]').click();page.locator('#reveal-compare').click();page.locator('#take-note').click()
 page.screenshot(path=str(OUT/'mobile-choices.png'),full_page=True)
 assert page.locator('[data-choice="keep"]').is_visible()
 assert not page.evaluate('document.documentElement.scrollWidth>innerWidth')
 ctx.close()
 # Browser storage unavailable: users can still progress, with honest persistence status.
 ctx=browser.new_context();page=ctx.new_page()
 page.add_init_script("Object.defineProperty(window,'localStorage',{get(){throw new DOMException('blocked','SecurityError')}})")
 page.goto(BASE);page.locator('[data-action="start"]').click();page.locator('[data-action="skip"]').click()
 page.locator('#transcribe').click();page.locator('#take-note').click()
 assert '无法保存' in page.locator('#top').inner_text();assert page.locator('.scene-heading h2').inner_text()=='同一件事，两种说法'
 ctx.close()
 # Broken save and missing art do not stop the text story.
 ctx=browser.new_context();page=ctx.new_page()
 page.add_init_script("localStorage.setItem('redline-story-v4','{broken')")
 page.route('**/assets/*',lambda r:r.abort());page.goto(BASE)
 page.locator('#asset-notice').wait_for(state='visible')
 page.locator('[data-action="start"]').click();assert page.locator('.dialogue').count()==1
 ctx.close();browser.close()
 print('PASS: browser routes, reload, mobile, blocked storage, missing art and malformed saves',flush=True)
