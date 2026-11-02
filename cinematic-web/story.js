// Narrative and deterministic game systems. All internal scenes and game resources are fictional.
export const chapters=['第一幕 · 留在地面','第二幕 · 灯熄以后','第三幕 · 重返蓝天'];
export const cast={you:{name:'我',role:'工业协调员 · 第一次走进机库',portrait:0},mathieu:{name:'马修',role:'资深工程师 · 想继续留在工位',portrait:1},victor:{name:'维克多',role:'财务负责人 · 每个日期都要兑现',portrait:2},erin:{name:'艾琳',role:'质量工程师 · 拿着未完成的记录',portrait:3},claire:{name:'克莱尔',role:'员工代表 · 记得每一个名字',portrait:4},faury:{name:'福里（Faury）',role:'集团负责人 · 基于真实人物的虚构对白',portrait:5},narrator:{name:'',role:''},client:{name:'客户',role:'已经安排好机组的人'}};
function asMe(text){return text.split(/(“[^”]*”)/g).map((part,i)=>i%2?part:part.replaceAll('你','我')).join('')}
const l=(who,text)=>({who,text:['you','narrator'].includes(who)?asMe(text):text});
const c=(id,label,next,reply,flags=[],requires=null)=>({id,label,next,reply:asMe(reply),flags,requires});
const op=(type,label,title,body)=>({type,label,title,body});
export const scenes={
brief:{chapter:0,title:'那架没离开机库的飞机',place:'图卢兹 · 2019 年',time:'07:20',bg:0,lead:'先听完这条语音。',history:'公开背景：Guillaume Faury 于 2019 年 4 月出任空客 CEO。本次交付、角色关系与对白为虚构。',lines:[l('narrator','我是刚到空客工厂的协调员。我的工作，是把人和他们需要的东西接到一起。今天，一架飞机的最后检查还没做完，客户却已经在门外等了。'),l('erin','最后一项复核没有完成。每个人都在问什么时候能走，还没有人问我们缺什么。'),l('faury','先去现场。把挡住他们的事情带回来，不用给我一个好听的答案。')],interaction:op('phone','接听艾琳的留言','机库传来的声音','艾琳：工具车旁边有张便笺。马修昨晚一直在等供应商的数据。\n客户九点到，你能先过来看看吗？\n\n你把外套搭在椅背上，重新拿起来。'),next:'walk',continue:'走进机库'},
walk:{chapter:0,title:'三次走访的时间',place:'晨光里的维修机库',time:'08:00',bg:1,lead:'听得到的事，比汇报里多一点。',lines:[l('mathieu','别紧张，你不用会修飞机。帮我们找对需要支援的地方就行。'),l('narrator','客户到达前，你能走访三个地方。墙上的钟不会逼你读快一点；每次走访才推进故事。')],interaction:op('explore','走到工位之间','在机库里走一圈','点击一个地点，听那里的声音。共有四处，你有三次走访机会；没有现实倒计时。'),next:'dispatch',continue:'把发现带回调度桌'},
dispatch:{chapter:0,title:'两支工程队',place:'机库调度桌',time:'08:45',bg:1,lead:'你不能同时答应所有人。',lines:[l('victor','我给你调来了两支支援队。你决定他们今天先去哪。'),l('erin','放行检查由技术团队负责。没有完成复核，飞机就不会交付。你能帮他们把路上的石头搬走。')],interaction:op('dispatch','把支援牌放到任务上','今天，先帮谁','点选两个任务，放下两枚支援牌。再次点击可以取回。确认以前，可以一直调整。'),next:'supplier',continue:'让大家出发'},
supplier:{chapter:0,title:'电话接到了生产线上',place:'供应商联合工作间',time:'10:10',bg:2,lead:'背景里传来机器停下的声音。',lines:[l('mathieu','他们也被交期追着跑。我们带去的人，终于把两边的数据放到了同一张桌上。'),l('erin','这是未完成的检查清单。不是谁写一封催促邮件，它就会自动消失。'),l('client','我可以改安排。但你得告诉我，我等的是检查结果，还是另一个承诺？')],choices:[c('open','把未完成的清单发给客户，约好下一次回电','report','客户划掉了原定日期。“四点，我等你。还没查完也要告诉我。”',['honest']),c('date','先答应明天交付，再回头想办法','report','客户开始通知机组。马修在纸上圈住“明天”，没有说话。',['deadline'])]},
waiting:{chapter:0,title:'空着的交付大厅',place:'客户休息区',time:'10:10',bg:2,lead:'咖啡已经续过两次。',lines:[l('client','我不是来找你吵架。我只想知道，要不要让机组回去。'),l('victor','供应商那边还缺完整数据。我们的支援人手去了别处，那里得再等一轮。'),l('you','我去打这通电话。')],choices:[c('open','坐到客户旁边，把尚未查完的事情讲清楚','report','她把行程表推过来。“你告诉我下一次什么时候有消息，我来改安排。”',['honest']),c('date','留下一个明天的日期，先让他们安心','report','她把日期写进手机。你看着她的屏幕，知道这句话已经很难收回。',['deadline'])]},
report:{chapter:0,title:'报告上的名字',place:'质量资料室',time:'16:00',bg:0,lead:'问题进了门，人会不会被留在门外？',lines:[l('narrator','四点，你回了客户电话：复核还在继续。晚上，完整数据终于送到。飞机会在技术团队确认后，重新安排交付。'),l('erin','我还想把今天缺的数据和工具写进记录。可他们会先问，是谁让交付慢下来的。'),l('claire','问事实，和找一个人扛下来，是两件事。你准备把这页纸交给谁？')],choices:[c('protect','和艾琳一起署名，保留她的原始记录','canteen','她把笔递给你。报告写下事实，也写下复核负责人和回访日期。',['protected']),c('blame','圈出最后经手人的名字，让事情快点结束','canteen','报告很快被收走。艾琳把还想说的话咽了回去。',['blame']),c('quiet','先把记录锁进抽屉，避免新的争论','canteen','抽屉合上时没有多大声音。下一次会议也没有提起这页纸。',['silence'])]},
canteen:{chapter:0,title:'晚饭还没凉',place:'几周后 · 工厂食堂',time:'19:12',bg:3,lead:'把答应过的事，变成明天真的会发生的事。',lines:[l('claire','今天别去楼上了。我们给你留了把椅子。'),l('mathieu','我不想为了往前走，就再也不碰工具。桌下的纸箱，是打算带走的。'),l('erin','我想下次看到不对劲的事情，还敢把门敲响。'),l('victor','这一轮，我们能推动两项改变。事情要有人做，不能只写在口号里。')],interaction:op('policy','展开餐巾纸上的请求','留下哪两件事','把两枚承诺牌放到你愿意推动的事情上。它们会改变疫情来临时谁愿意留下，以及复工时能调动多少人。'),next:'lockdown',continue:'把名字写在回访栏'},
lockdown:{chapter:1,title:'灯一盏盏熄下去',place:'2020 年 · 空机库',time:'2020',bg:4,lead:'这一次，问题不在交付门口。',history:'公开背景：2020 年航空业受疫情冲击。空客于 6 月宣布拟调整约 15,000 个岗位，并与社会合作伙伴协商；“全部员工完全保留”并非本作采用的历史结论。',lines:[l('narrator','航班大幅减少，客户不断来信调整计划。同一个机库，忽然听得见自己的脚步。'),l('victor','订单变慢，工资和账单不会跟着停下。我们得撑过这段时间。'),l('claire','有人刚签了房贷。也有人说，只要知道下个月会怎样，少上几天班也能一起商量。')],interaction:op('budget','把应急筹码摆上白板','这一次，钱先放在哪里','你有 7 枚应急筹码。先选一种用工安排，再留出至少一项支持。筹码只是游戏资源，不对应真实金额或补贴比例。'),next:'shock',continue:'把方案带到下一封邮件前'},
shock:{chapter:1,title:'原定到账的那一天',place:'临时协调办公室',time:'08:15',bg:2,lead:'邮件里只有一句：还需要补充材料。',lines:[l('victor','一笔原本预期的支持款延后了。账单却在今天到期。'),l('claire','我们昨天才告诉大家接下来怎么办。你要改哪一部分，得亲口跟他们讲。')],choices:[c('reserve','拆开预留的信封，先把今天撑过去','union','维克多把到期账单一张张移开。“预备的钱，今天有了名字。”',['bridged'],'reserve'),c('credit','拿出当初收好的账册，争取一笔短期借款','union','资料完整，短期借款终于有了谈判基础。代价是一笔需要在恢复后偿还的债务。',['bridged','debt'],'ledger'),c('parts','请供应商把一笔付款往后挪','union','今天的账单过了关。供应商答应等待，也暂缓了原计划为你预留的配件。',['parts_delayed']),c('cut','缩减原方案中的保留岗位','union','现金压力减轻。克莱尔拿着修订后的名单，久久没有坐下。',['emergency_cuts'])]},
union:{chapter:1,title:'再拉过一把椅子',place:'员工协商室',time:'10:30',bg:2,lead:'人们要知道自己答应的是什么。',lines:[l('claire','我可以跟大家一起面对困难。但我不能拿一句“相信我们”，替他们决定接下来几个月。'),l('victor','把钱从哪里来、哪些事暂时做不到，都写下来。'),l('you','我们就从这张桌子开始。')],choices:[c('share','摊开预算，约好一起回来复审的日期','return','克莱尔坐下来，把一张空白的回访表推到中间。“这次，我和你一起回去说。”',['shared']),c('promise','先向大家保证，每个人都会像以前一样','return','有人松了一口气。克莱尔看着纸上已经改变的工时和岗位，没有跟着鼓掌。',['overpromise']),c('announce','把定好的方案念完，先执行再说','return','会议很快结束。你站在门口，听见走廊里还有很多没问出来的问题。',['announced'])]},
return:{chapter:2,title:'有人把灯打开了',place:'复苏阶段 · 同一座机库',time:'第 1 天',bg:1,lead:'过去留下的东西，现在都回来了。',lines:[l('narrator','新的订单终于来了。这三架飞机已经接近完工，还有最后的装配和检查要做。客户三天后来接飞机，而我们的人手和配件都不充足。'),l('erin','独立复核，就是让另一组人再检查一遍。每架飞机装好后都要过这一关；没检查完，就不能交付。')],interaction:op('letters','看看工位上留下了什么','他们有没有回来','这些消息，来自你前面做过的事。'),next:'restart',continue:'走到复工调度板前'},
restart:{chapter:2,title:'让生产线重新动起来',place:'复工调度台',time:'三天',bg:1,lead:'把一件件做完的事，接到下一件事上。',lines:[l('mathieu','先有配件，再装配，下一天才能独立复核。别急，我们一步一步来。'),l('victor','三天后客户会来。能交几架，就如实交几架；没做完的，给出新的安排。')],interaction:op('restart','安排今天的工位','三天的复工调度','点任务，把它放进今天的班次，再点“执行这一天”。采购的配件和完成装配的飞机，到下一天才可用于下一步。没有现实倒计时。'),next:'final',continue:'去见等在门口的人'},
final:{chapter:2,title:'把机库的门打开',place:'董事会与交付区',time:'后来',bg:5,lead:'你带进来的，不只有一个数字。',lines:[l('faury','你现在已经知道，把人留在地面上照顾好，有多难。'),l('claire','我们做到了哪些，还有哪些没兑现，都该让大家听见。'),l('victor','你用过的每一枚筹码，每一个借来的明天，都还在这张桌上。')],choices:[c('people','让现场的人把做完和没做完的事讲清楚','END','你打开记录。交付数字、待办事项和下次复审的日期，被放在同一页上。',['final_people']),c('numbers','先展示交付数字，留下最漂亮的一页','END','掌声响起来。有些人低头看着那几行没有上屏幕的文字。',['final_numbers']),c('continue','把未完成的清单留给下一班，约好回来','END','会议结束后，你又走回机库。还有几把椅子没有摆好，还有人等着你回来。',['final_continue'])]}
};
export const places=[
 {id:'engine',label:'发动机旁的马修',x:21,y:34,title:'还缺一份数据',text:'“供应商给的是摘要。把两边工程师放到一张桌子上，我们才能核对。”你记下了对方工程师的直拨电话。',flag:'engine_note'},
 {id:'tools',label:'空了一格的工具车',x:66,y:61,title:'被借走的工具',text:'三个班组共用一套工具。夜班为找它多走了四十分钟。那张延期记录上，没有写下这四十分钟。',flag:'tool_note'},
 {id:'locker',label:'休息区的纸箱',x:75,y:24,title:'还没寄出的辞职信',text:'马修想继续做技术，却看不到升迁的路。纸箱里放的不是纪念品，而是每天要用的尺子。',flag:'career_note'},
 {id:'ledger',label:'维克多留下的账册',x:32,y:75,title:'每一笔要到期的钱',text:'账册附有应收款与备用融资的联系人。“留着，哪天钱晚到，我们还有东西能拿去谈。”',flag:'ledger'}
];
export const dispatchTasks=[
 {id:'field',label:'到供应商现场一起复核',detail:'供应商就是给工厂供零件的公司。帮双方补齐数据，也维护以后的配件安排。',flag:'supplier_help'},
 {id:'tools',label:'把工具和轮班补位送到工位',detail:'今天少一点无谓等待；留下能带新人的老员工。',flag:'tools_fixed'},
 {id:'customer',label:'陪客户重新安排机组',detail:'有人负责解释、回电和改签；减少一段被浪费的行程。',flag:'customer_help'},
 {id:'trace',label:'整理原始数据与交接记录',detail:'让后续复核有据可查；给愿意报告问题的人撑腰。',flag:'traceable'}
];
export const policies=[
 {id:'technical',label:'让技术人员继续做技术也能成长',detail:'公开技术晋升路径。马修会留下，也愿意带新人。',flag:'technical'},
 {id:'voice',label:'保护报告者，把复核结果带回现场',detail:'建立保密反馈和回访。愿意开口的人会回来。',flag:'voice'},
 {id:'rest',label:'补齐工具，保障轮班休息',detail:'把食堂里的清单落实。保住一支熟悉工位的班组。',flag:'rest'},
 {id:'reward',label:'把发现问题也记进奖励',detail:'不只奖励交付速度。让班组愿意为长期质量花时间。',flag:'balanced'}
];
for(const place of places)place.text=asMe(place.text);
export const budgetItems=[
 {id:'workshare',label:'协商短工时，保留核心班组',cost:3,detail:'工作时间与收入需要共同调整。保留两支基础班组。',group:'employment'},
 {id:'cuts',label:'缩减岗位，压低固定支出',cost:1,detail:'眼前能多留些筹码；复工时基础班组减少到一支。',group:'employment'},
 {id:'mentor',label:'带薪保留培训与师徒时间',cost:2,detail:'如果马修留下，会多培养出一支能独立工作的新班组。'},
 {id:'supplier',label:'维护供应商的配件安排',cost:2,detail:'复工时多一份可用配件，不等于绕过质量检查。'},
 {id:'reserve',label:'预留一笔不动的钱',cost:2,detail:'暂时帮不到眼前的工位，但能应对下一次付款变化。'},
 {id:'support',label:'提供沟通与员工支持',cost:1,detail:'让遇到困难的人找得到联系人，修复协商中的信任。'}
];
export const endings={
relay:{name:'接力的人',en:'THE RELAY',bg:5,chapter:'尾声 · 下一班',quote:'你离开时，灯还亮着。',paras:['三架飞机按计划完成了复核。机库里没有庆功标语，只有下一班已经接过来的工作表。','马修身边站着新来的工程师。艾琳把一条新的疑问放到桌上，没有先问“这样说会不会不好”。','你曾经搬来的一把椅子，已经不再属于某一个人。人们知道下一次该去找谁，也知道可以说“还没做完”。'],last:'真正留下来的，是一群能继续把事情做下去的人。'},
steady:{name:'稳稳起飞',en:'A STEADY RETURN',bg:1,chapter:'尾声 · 重新排好的日历',quote:'没有奇迹，只有一班又一班。',paras:['有人改过行程，有人少拿过收入。你把能交付的飞机交出去，把未完成的事项放进下一次安排。','克莱尔的回访表上仍有空白，但她知道这些问题会再回到桌面。','航班重新变得密集。那座工厂没有在一夜之间恢复，却在一次次回电和复核里站稳了。'],last:'日历终于可以往后翻。'},
hollow:{name:'空出来的工位',en:'EMPTY STATIONS',bg:4,chapter:'尾声 · 一张旧便笺',quote:'订单回来了，熟悉那道工序的人没有。',paras:['缩减支出帮助工厂熬过了最困难的一段时间。现在，新的订单排到门外。','一名新人举着维修便笺，问以前是谁负责这个环节。大家看向同一张空桌子。','你开始重新招聘，也开始重新等待。纸上的人数可以加回来，经验却需要重新长出来。'],last:'有些支出省在昨天，代价留给了明天。'},
pledge:{name:'太重的承诺',en:'THE WEIGHT OF A PROMISE',bg:3,chapter:'尾声 · 第二次宣布',quote:'他们还记得你第一次站到台前的样子。',paras:['你说过生活不会改变。后来，工时、收入或岗位真的变了。','克莱尔陪你回到食堂。这次她没有替你说话。你必须自己解释那些本该提前说清楚的代价。','方案还能重新谈，信任也许能慢慢修复。但下一次，人们会先等你把整句话说完。'],last:'希望不能替代一张能兑现的安排表。'},
silent:{name:'没有来电的夜晚',en:'THE QUIET LINE',bg:0,chapter:'尾声 · 静音',quote:'后来，电话真的很少响了。',paras:['汇报越来越简洁，交付表越来越整齐。没有多少人再问那些让会议延长的问题。','艾琳仍然保存着原始记录。只是她再也没有在凌晨给你发过语音。','你站在亮着灯的办公室里，忽然不知道，这样的安静是不是自己想要的。'],last:'没有人说话，不等于没有事情发生。'},
quarter:{name:'漂亮的季度',en:'A BEAUTIFUL QUARTER',bg:2,chapter:'尾声 · 屏幕上的曲线',quote:'那一页简报，做得很好看。',paras:['你把完成的交付放在最显眼的地方。几项尚未兑现的安排，被留到了附件里。','会后有人握住你的手，也有人直接回到了工位。两种脚步声走向不同的方向。','这个季度有了一个清晰的故事。下一个季度，要面对的仍是那些没有完成的事情。'],last:'被省略的部分，还在等一个回访日期。'},
unfinished:{name:'还没写完的清单',en:'WORK IN PROGRESS',bg:1,chapter:'尾声 · 灯下的第二页',quote:'这次，你没有替空白处写上“完成”。',paras:['配件、人手和时间没能一起到位。部分交付需要重新安排，客户也需要一个诚实的解释。','你走回调度台，把没完成的任务移到下一班。有人叹气，也有人拉了把椅子坐下来。','故事没有把所有事情解决。但那张清单还在桌上，没有被藏进抽屉。'],last:'下一次行动，可以从这里开始。'}
};
export function initial(){return {version:5,node:'brief',line:0,phase:'dialogue',choice:null,history:[],seen:[],journal:[],flags:[],ops:{},events:[]}}
const clone=s=>structuredClone(s);
const addFlags=(s,...flags)=>{for(const f of flags)if(!s.flags.includes(f))s.flags.push(f)};
export function operationData(s){return s.ops[s.node]||{}}
export function budgetCost(ids){return ids.reduce((sum,id)=>sum+(budgetItems.find(x=>x.id===id)?.cost||0),0)}
export function crewCount(s){let n=s.flags.includes('workshare')?2:1;if(s.flags.includes('emergency_cuts'))n=1;if(s.flags.includes('technical')&&s.flags.includes('mentor'))n++;if(n<2&&(s.flags.includes('rest')||s.flags.includes('tools_fixed')))n++;return Math.min(3,n)}
export function initialShift(s){return {day:0,parts:s.flags.includes('parts_delayed')?1:1+Number(s.flags.includes('supplier_help')||s.flags.includes('supplier')),planes:[0,0,0],plan:[],log:[],crews:crewCount(s)}}
export function shiftData(s){return s.ops.restart||initialShift(s)}
export function jobsFor(s){const d=shiftData(s);return [{id:'supply',label:'采购一份配件',detail:'明天到货。',kind:'supply'},...d.planes.map((stage,i)=>({id:(stage===0?'build':'check')+i,label:(stage===0?'装配':stage===1?'独立复核':'已完成复核')+' '+['曙光号','信风号','远航号'][i],detail:stage===0?'使用一份现有配件，完成剩余装配；下一天可复核。':stage===1?'复核完成即可交付。':'已经可以交付。',kind:stage===0?'build':stage===1?'check':'done'}))]}
export function operationReady(s){const type=scenes[s.node]?.interaction?.type,d=operationData(s);if(type==='explore')return (d.visited||[]).length===3;if(type==='dispatch'||type==='policy')return (d.selected||[]).length===2;if(type==='budget'){const a=d.selected||[];return a.length>=2&&a.filter(x=>['workshare','cuts'].includes(x)).length===1&&budgetCost(a)<=7}if(type==='restart'){const a=shiftData(s);return a.day>=3||a.planes.every(x=>x===2)}return true}
export function operate(state,action,value,record=true){const s=clone(state),type=scenes[s.node]?.interaction?.type;if(s.seen.includes(s.node))throw Error('这一段行动已经完成');let d=s.ops[s.node]||{};
 if(type==='explore'&&action==='visit'){const p=places.find(p=>p.id===value);if(!p)throw Error('这里没有这个地点');d.visited||=[];if(d.visited.includes(value))throw Error('已经来过这里了');if(d.visited.length>=3)throw Error('客户已经到场，该回调度桌了');d.visited.push(value)}
 else if(['dispatch','policy','budget'].includes(type)&&action==='toggle'){const items=type==='dispatch'?dispatchTasks:type==='policy'?policies:budgetItems;if(!items.some(p=>p.id===value))throw Error('没有这项安排');d.selected||=[];if(d.selected.includes(value))d.selected=d.selected.filter(x=>x!==value);else{let ids=[...d.selected,value];if(type==='budget'){if(['workshare','cuts'].includes(value))ids=ids.filter(x=>!['workshare','cuts'].includes(x)||x===value);if(budgetCost(ids)>7)throw Error('筹码不够，先取回一项安排再试试')}else if(ids.length>2)throw Error('两枚牌都用完了。先点一张已放好的牌，把它取回。');d.selected=ids}}
 else if(type==='restart'){d=s.ops.restart||initialShift(s);if(d.day>=3||d.planes.every(x=>x===2))throw Error('这轮调度已经结束');if(action==='job'){const job=jobsFor(s).find(j=>j.id===value);if(!job||job.kind==='done')throw Error('这项工作已经完成');if(d.plan.includes(value))d.plan=d.plan.filter(x=>x!==value);else{if(d.plan.length>=d.crews)throw Error('今天的人手已经排满，先取回一项任务');if(job.kind==='build'&&d.plan.filter(x=>x.startsWith('build')).length>=d.parts)throw Error('现有配件不足。采购的配件下一天到货。');d.plan.push(value)}}else if(action==='day'){if(!d.plan.length)throw Error('先给今天安排一项任务');const today=[...d.plan];for(const id of today){if(id==='supply')d.parts++;else if(id.startsWith('build')){d.parts--;d.planes[Number(id.slice(5))]=1}else d.planes[Number(id.slice(5))]=2}d.log.push({day:d.day+1,tasks:today});d.day++;d.plan=[]}else throw Error('不能这样操作调度板')}
 else throw Error('此处没有这项操作');s.ops[s.node]=d;if(record)s.events.push({t:'operate',node:s.node,action,value:value??null});return s}
export function confirmOperation(state,record=true){if(!scenes[state.node]?.interaction||!operationReady(state)||state.seen.includes(state.node))throw Error('先完成眼前的行动');const s=clone(state),type=scenes[s.node].interaction.type,d=operationData(s);if(type==='explore')for(const id of d.visited)addFlags(s,places.find(p=>p.id===id).flag);if(type==='dispatch'||type==='policy')for(const id of d.selected)addFlags(s,(type==='dispatch'?dispatchTasks:policies).find(p=>p.id===id).flag);if(type==='budget')addFlags(s,...d.selected);s.seen.push(s.node);s.journal.push({node:s.node,title:scenes[s.node].interaction.title});if(record)s.events.push({t:'inspect',node:s.node});return s}
export function choiceEnabled(s,c){return !c.requires||s.flags.includes(c.requires)}
export function choose(state,id,record=true){const n=scenes[state.node],c=n?.choices?.find(c=>c.id===id);if(state.choice!==null||!c||!choiceEnabled(state,c))throw Error('这条路还没有准备好');const s=clone(state);s.choice=id;s.phase='response';s.history.push({node:s.node,id,label:c.label});addFlags(s,...c.flags);if(record)s.events.push({t:'choose',node:s.node,id});return s}
export function move(state,record=true){const n=scenes[state.node];if(!n)throw Error('故事已经结束');let next;if(n.choices){const c=n.choices.find(c=>c.id===state.choice);if(!c)throw Error('先决定下一步');next=c.next}else{if(n.interaction&&!state.seen.includes(state.node))throw Error('先完成眼前的行动');next=n.next}if(state.node==='dispatch')next=state.flags.includes('supplier_help')?'supplier':'waiting';const s={...clone(state),node:next,line:0,phase:'dialogue',choice:null};if(record)s.events.push({t:'move',node:state.node});return s}
for(const ending of Object.values(endings)){ending.quote=asMe(ending.quote);ending.paras=ending.paras.map(asMe);ending.last=asMe(ending.last)}
export function endingFor(s){const has=f=>s.flags.includes(f),delivered=shiftData(s).planes.filter(x=>x===2).length;
 if((has('silence')||has('blame'))&&!has('voice'))return 'silent';
 if(has('overpromise'))return 'pledge';
 if((has('cuts')||has('emergency_cuts'))&&!has('technical'))return 'hollow';
 if(has('final_numbers')&&!has('balanced'))return 'quarter';
 if(delivered===3&&has('protected')&&has('technical')&&has('mentor')&&has('workshare')&&has('shared')&&(has('voice')||has('balanced'))&&has('bridged')&&!has('final_numbers')&&!has('emergency_cuts'))return 'relay';
 if(delivered>=2&&has('shared')&&(has('protected')||has('voice')))return 'steady';
 return 'unfinished';}
export function lettersFor(s){const h=f=>s.flags.includes(f);return [h('technical')?'马修把纸箱搬回工位。他说：“这次，新人的座位也留好了。”':'马修的纸箱已经带走。原来的位置上，贴着重新招聘的便笺。',h('protected')||h('voice')?'艾琳的留言：我把尚未完成的复核列出来了，我们一起看。':'艾琳把材料放在门口，没有留下第二条语音。',h('tools_fixed')||h('rest')?'工具车终于有了固定位置。有人在把手上贴了张“谢谢”。':'那张工具清单还夹在工作簿里。熟悉工位的人还在轮班等待。',h('shared')?'克莱尔带着上次的预算回来：“我们说好，一起回来看看。”':'克莱尔发来了一份问题清单。今天，还需要给出一些回答。']}
export function linesFor(s){const n=scenes[s.node],a=n.lines.map(x=>({...x})),h=f=>s.flags.includes(f);
 if(s.node==='dispatch'&&h('engine_note'))a.push(l('you','我拿到了供应商工程师的直拨电话。他们也在等我们。'));
 if(s.node==='report'&&h('deadline'))a[0]=l('narrator','四点，你不得不收回“明天交付”的保证。客户问为什么早上不把未知的事情说清楚。当天夜里完整数据才到，放行仍需技术团队复核。');
 if(s.node==='canteen')a.unshift(l('claire',h('tools_fixed')?'工具已经到了，他们让我跟你说声谢谢。今晚坐下来吧。':'那张工具清单还没解决。有人说，你来吃饭时，想再问问。'));
 if(s.node==='shock')a.push(l('victor',h('reserve')?'还好，白板上那笔没动的钱还在。':h('ledger')?'你第一天带走的账册还在吗？备用融资联系人，也许现在用得上。':'我们没有留出缓冲，也缺融资材料。得和供应商或者员工重新谈安排。'));
 if(s.node==='return'){a.splice(1,0,l('narrator',lettersFor(s)[0]));a.push(l('victor',`这次能调动 ${crewCount(s)} 支班组。先做最需要的事，我们只有三个工作日。`))}
 if(s.node==='restart'&&!h('technical'))a[0]=l('erin','马修已经离开了。我们按他留下的清单来：先备料，再装配，下一天独立复核。');
 if(s.node==='final'){const count=shiftData(s).planes.filter(x=>x===2).length;a.unshift(l('narrator',`${count} 架飞机完成了独立复核。${count<3?'剩下的交付，需要重新安排。':'客户的机组正在走进机库。'}`));if(h('debt'))a.push(l('victor','那笔过桥融资要慢慢还。至少，今天我们能把这件事说清楚。'))}
 return a;}
export function operationSummary(s,node=s.node){const d=s.ops[node]||{},type=scenes[node]?.interaction?.type;if(type==='explore')return (d.visited||[]).map(id=>places.find(x=>x.id===id).title).join(' / ');if(['dispatch','policy','budget'].includes(type)){const list=type==='dispatch'?dispatchTasks:type==='policy'?policies:budgetItems;return (d.selected||[]).map(id=>list.find(x=>x.id===id).label).join(' / ')}if(type==='restart'){const a=shiftData(s);return `${a.day} 个工作日，${a.planes.filter(x=>x===2).length} 架飞机完成复核。`}if(type==='letters')return lettersFor(s).join('\n');return scenes[node]?.interaction?.body||''}
export function validSave(s){try{if(!s||s.version!==5||!Array.isArray(s.events)||s.events.length>300||!['dialogue','action','response'].includes(s.phase))return false;let r=initial();for(const e of s.events){if(e.node!==r.node)return false;if(e.t==='operate')r=operate(r,e.action,e.value,false);else if(e.t==='inspect')r=confirmOperation(r,false);else if(e.t==='choose')r=choose(r,e.id,false);else if(e.t==='move')r=move(r,false);else return false}for(const k of ['node','choice','history','seen','journal','flags','ops'])if(JSON.stringify(r[k])!==JSON.stringify(s[k]))return false;if(s.node==='END')return s.phase==='dialogue'&&s.line===0;if(!Number.isInteger(s.line)||s.line<0||s.line>=linesFor(r).length)return false;if(s.phase==='response')return r.phase==='response';if(r.phase==='response')return false;if(s.phase==='action'&&!scenes[s.node].choices)return false;return true}catch{return false}}

export const backgrounds={
 brief:{when:'2019 · 交付受阻',story:'空客是一家制造客机的公司。福里刚接任负责人，行业更加关注飞行安全。我是协调员，要帮助工程师完成检查，也给等在门口的客户一个交代。',goal:'先到现场找出大家缺什么。',next:'点开语音，然后走进机库。'},
 lockdown:{when:'2020 · 疫情让航班减少',story:'飞机需求突然减少。工厂收入变少，员工却还有房贷和生活。我得和同事一起安排有限的钱，争取让熟悉工作的人留下。',goal:'用 7 枚筹码安排接下来的日子。',next:'先选择怎样安排员工，再点选支持项目。'},
 return:{when:'复苏阶段 · 订单回来了',story:'客户开始回来，但人手和配件不会自动回来。我之前留下的人、兑现的承诺，会变成现在能用的力量。',goal:'三天内，让三架接近完工的飞机完成最后检查。',next:'点任务，再执行一天；检查没做完就不交付。'}
};
export function scoreFor(s){const h=f=>s.flags.includes(f),count=shiftData(s).planes.filter(x=>x===2).length;
 const rows=[
 {title:'让问题被听见',points:h('protected')?20:h('voice')?10:0,max:20,note:h('protected')?'我和艾琳一起保留了原始记录。':'报告者需要更明确的保护。'},
 {title:'让熟手留下，带出新人',points:h('technical')&&h('mentor')&&h('workshare')&&!h('emergency_cuts')?20:h('technical')||h('rest')?10:0,max:20,note:h('technical')&&h('mentor')?'技术成长与培训一起落地。':'留下经验，需要职业空间和培训时间。'},
 {title:'让承担代价的人参与',points:h('shared')?15:0,max:15,note:h('shared')?'我和员工约定了共同复审的日期。':'需要让员工参与，而不只是听宣布。'},
 {title:'让承诺有钱兑现',points:h('bridged')?15:0,max:15,note:h('bridged')?'预备金或完整融资材料撑过了到账延迟。':'临时转移代价，削弱了原来的安排。'},
 {title:'完成安全交付',points:[0,7,14,20][count],max:20,note:`${count} 架飞机走完了装配与独立复核。`},
 {title:'把好的做法留给下一班',points:(h('voice')||h('balanced'))&&!h('final_numbers')?10:0,max:10,note:(h('voice')||h('balanced'))&&!h('final_numbers')?'保护反馈或改进奖励，也如实交代未完成的事。':'需要留下可持续的做法，并完整说明结果。'}
 ];return {total:rows.reduce((n,r)=>n+r.points,0),perfect:endingFor(s)==='relay',rows};
}
