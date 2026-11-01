// Fictional narrative adaptation of the two user-supplied documents.
export const chapters=['一通没挂断的电话','天亮以前','九点的来客','没有人删掉那句话','留下的人','空下来的厂房','你离开之后'];
export const cast={you:{name:'你',role:'刚接手协调工作的人',portrait:0},mathieu:{name:'马修',role:'工程师 · 习惯最后一个离开',portrait:1},victor:{name:'维克多',role:'财务负责人 · 也在担心明天',portrait:2},erin:{name:'艾琳',role:'质量工程师 · 那条语音的主人',portrait:3},claire:{name:'克莱尔',role:'员工代表 · 记得每一个名字',portrait:4},faury:{name:'Faury',role:'CEO · 戏剧化角色',portrait:5},narrator:{name:'',role:''},client:{name:'客户',role:'机场另一端的电话'},worker:{name:'食堂里的工人',role:'夜班刚结束'}};
const l=(who,text)=>({who,text});
const c=(id,label,next,reply,delta={},flags=[])=>({id,label,next,reply,delta,flags});
export const scenes={
phone:{chapter:0,title:'凌晨 02:17',place:'办公室 · 雨夜',time:'02:17',bg:0,lead:'手机第三次亮起来。',lines:[l('narrator','你接手这份工作的第一晚，办公室里只剩下一盏灯。今天早上九点，一架飞机要交到客户手里。'),l('narrator','你的工作很简单：把各部门的消息问清楚，再交给负责签字的人。至少，昨天他们是这样说的。')],interaction:{type:'phone',label:'拿起手机',title:'一条还没说完的语音',body:'艾琳：你睡了吗？我知道早上九点要签字……但你先看一下桌上的两份记录。\n\n语音末尾传来关门声。她没有挂断，过了几秒，又补了一句：\n“也许只是我多心了。”'},next:'desk',continue:'看看她说的文件'},
desk:{chapter:0,title:'同一件事，两种说法',place:'办公桌前',time:'02:21',bg:0,lead:'纸上的字，不像电话里那么犹豫。',lines:[l('narrator','一张纸盖着“已处理”的章，另一张边角卷起，写着“已安排复核”。'),l('you','安排了检查，和检查已经通过……应该不是一回事。')],interaction:{type:'compare',label:'把两份记录放到一起',title:'结论从哪里变了？',body:'你对齐了两张纸的日期和编号。它们说的是同一件事。\n\n目前只能确认措辞不同。还不能证明飞机出了故障，也不能证明有人故意隐瞒。'},choices:[c('keep','把两份记录都带走','corridor','你把卷起的纸角压平，将两份记录一起放进外套内侧。',{transparency:2},['evidence']),c('leave','先拿走已经签过的摘要','corridor','你留下了手写记录。也许，早班的人能解释清楚。',{transparency:-2},['omit'])]},
corridor:{chapter:1,title:'两扇亮着灯的门',place:'总部走廊',time:'05:46',bg:0,lead:'你还有时间，先去见一个人。',lines:[l('narrator','雨小了。马修的工位在厂房里，维克多的办公室在走廊尽头。手机上各有一条未读消息。'),l('mathieu','我还在。咖啡也还在，不过已经凉了。'),l('victor','我没有催你。只是想让你看一眼，如果今天交不了，我们接下来会遇到什么。')],interaction:{type:'route',label:'走到亮灯的门前',title:'从哪里开始',body:'门没有锁。你只需要决定先跟谁说话。'},choices:[c('workshop','推开厂房的门','engineer','你循着工具碰撞的声音，找到了马修。',{},['first_engineer']),c('office','敲一敲维克多的门','finance','门内传来一句“进来”。维克多把对面的椅子往外拉了拉。',{},['first_finance'])]},
engineer:{chapter:1,title:'凉掉的咖啡',place:'维修工位',time:'06:03',bg:1,lead:'他盯着纸，没有看你。',lines:[l('mathieu','我不是说一定有故障。我是说，我们还没有查完。'),l('you','那为什么最后写成了“已处理”？'),l('mathieu','可能只是传错了版本。也可能有人以为，安排了检查就算处理过了。'),l('narrator','他的手机震了一下：家里发来一张早餐照片。他看了看，又把手机扣下。'),l('mathieu','你要查，我把东西都给你。但别先选好一个人，再问我要证据。')],choices:[c('listen','拉过椅子：“从头跟我讲。”','signature','马修终于坐下。他把那杯冷咖啡推到一边，拿出了完整的检查清单。',{trust:2,transparency:1},['listened','evidence']),c('name','“先告诉我，是谁最后碰过它？”','signature','他把清单收回一半。“我能给你一个名字。但那不是原因。”',{trust:-2,transparency:-1},['pressure'])]},
finance:{chapter:1,title:'纸背面的字',place:'财务办公室',time:'06:03',bg:2,lead:'三张表格的背面，有一张孩子的画。',lines:[l('victor','延期不是世界末日。没有计划才是。'),l('narrator','维克多把画翻回去，露出客户排班、仓库占用和本月付款的清单。'),l('you','如果必须停下来呢？'),l('victor','那就停。我只想知道，下一次什么时候能收到消息。我得让别人也有办法安排明天。')],choices:[c('cost','“帮我算算，怎样撑过这几天。”','signature','他拿起笔，在每一项支出旁写下可以再谈的人。“现在我们有事可做了。”',{cash:2,trust:1},['cost_plan']),c('promise_date','“先告诉他们，九点照常。”','signature','维克多没有立刻打电话。“这句话，我会当成你的承诺。”',{cash:1,safety:-2},['rush'])]},
signature:{chapter:2,title:'签字笔停在半空',place:'交付协调室',time:'08:32',bg:2,lead:'客户的车已经到门口了。',lines:[l('narrator','Faury 把签字页转向你。隔着玻璃，能看见一辆车慢慢停下。'),l('faury','技术团队说，还有一项没查完。你昨晚拿到的信息，能解释它吗？'),l('victor','如果要改安排，我现在就去接客户。别让他们在门口干等。'),l('mathieu','我需要完整数据。还有一个不因为九点到了，就自动结束的检查。')],choices:[c('wait','合上签字页：“等他查完。”','customer','维克多拿起外套下楼了。马修第一次抬起头，认真看了你一眼。',{safety:3,transparency:1,cash:-2},['review']),c('schedule','把日程表推过去：“先往下安排。”','customer','交付准备继续。技术部门仍保留最后放行权，但他们手里的时间变得更紧了。',{cash:2,safety:-3},['rush'])]},
customer:{chapter:2,title:'电话另一端也有明天',place:'机库外的玻璃会议室',time:'09:10',bg:2,lead:'她没有发火，只翻了一页日历。',lines:[l('client','我的机组明早出发。你们改一次日期，我就得重新安排很多人。'),l('you','抱歉。'),l('client','先不用道歉。告诉我，我今天等到的是消息，还是又一个猜测？'),l('narrator','维克多站在门口，等你决定这通电话怎么结束。')],choices:[c('honest','“四点我再打来，把查到的都告诉你。”','timeline','她停了一会儿。“好。四点，我等你。没有结果也要打。”',{trust:2,transparency:1,cash:-1},['customer_truth']),c('assure','“不会影响你们明天的安排。”','timeline','她开始通知机组。你忽然意识到，刚才那句话已经变成了别人的行程。',{cash:1,trust:-2,safety:-1},['rush'])]},
timeline:{chapter:3,title:'一句话走过三张桌子',place:'质量资料室',time:'13:24',bg:0,lead:'你以为会找到一个被删掉的句子。',lines:[l('erin','原话在这里。“已经安排检查”。'),l('mathieu','第二份写的是“检查已安排，问题处理中”。'),l('erin','到了摘要，就只剩“已处理”了。没有证据证明是谁故意改的。'),l('you','每个人都以为，下一个人知道还没查完。'),l('narrator','房间安静下来。你终于找到了差异，却没找到一个足够简单的坏人。')],interaction:{type:'timeline',label:'顺着时间看一遍',title:'措辞的流转',body:'昨天 06:10 · 原始记录：已安排检查。\n昨天 07:05 · 部门汇总：检查已安排，问题处理中。\n昨天 07:40 · 正式摘要：已处理。\n\n还没有人写下“检查通过”。一个未完成的动作，变成了完成的结论。'},choices:[c('record','在空白处写下：“尚未完成。”','protection','艾琳把新的一页放进档案袋。这一次，没有人替未知的事情画上句号。',{transparency:2},['accountability']),c('quiet','把三张纸收进抽屉，先结束争论','protection','抽屉轻轻合上。记录还在，只是下一次会议不会看到它们。',{transparency:-3},['omit'])]},
protection:{chapter:3,title:'名字写在哪一行',place:'员工休息室',time:'16:02',bg:3,lead:'艾琳站在门口，手里还拿着那只档案袋。',lines:[l('erin','报告交上去以后，大家会先问谁提出来的，对吗？'),l('narrator','你想说“不会”。话到嘴边，又停住了。你无法替所有人保证。'),l('claire','你可以写清楚：报告问题的人不会因此受罚。真正做错了什么，再按事实查。'),l('erin','我不需要你保证我永远没错。我只想下次还敢来敲门。')],choices:[c('protect','签下自己的名字，把规则和记录一起交上去','bonus','艾琳松开档案袋。克莱尔说：“留一份给我，我们一起盯着它落实。”',{trust:2,transparency:2},['protect']),c('blame','把最后经手人的名字圈出来','bonus','报告很快有了一个负责人。艾琳没有再问第二个问题。',{trust:-3,transparency:-2},['scapegoat']),c('hide','“先别交了，我不想把你卷进去。”','bonus','她点点头，把档案袋带走了。你保护了这一次的安静。',{transparency:-2},['omit'])]},
bonus:{chapter:4,title:'那张没有奖金的表',place:'一个月后 · 办公室',time:'一个月后',bg:2,lead:'飞机后来完成了复核。可是那张表留下来了。',lines:[l('narrator','新的奖金表摆在桌上。按时交付的人有奖励，发现问题、让大家停下来的人，名字旁边却是空白。'),l('victor','大家每天看这些表，比听我们开会多。'),l('you','所以，我们嘴上说的和纸上奖励的，并不是一件事。'),l('faury','那就让纸上的东西，也经得起检查。')],choices:[c('change','把那张空白的停线记录，也放进考核材料','talent','表格被退回来两次，修改了三次。终于，发现问题和完成交付一起被记录下来。',{safety:2,transparency:1,cash:-1},['fair_rewards']),c('keep_bonus','先按旧表发放，等忙完再改','talent','奖金准时到账。那张空白的表，被压在了新一批交付计划下面。',{cash:1,transparency:-1},['speed_rewards'])]},
talent:{chapter:4,title:'门边的纸箱',place:'维修工位',time:'18:40',bg:1,lead:'马修的桌上，比平时整齐。',lines:[l('narrator','常用的尺子已经装进纸箱。马修发现你在看，笑了一下。'),l('mathieu','不是因为那天。我只是……不想为了涨工资，去做一个不会修东西的经理。'),l('you','你还想留在工位上？'),l('mathieu','我喜欢这个。但我也想有机会往前走。别只给我换一个好听的头衔。')],choices:[c('career','把纸箱放回桌下：“我们把这条路写出来。”','lunch','他没有马上收起辞职信。“标准要公开，不能只给我一个人。”你答应把方案拿去评审。',{talent:3,trust:1,cash:-1},['technical']),c('raise','“先留下，我给你申请一次加薪。”','lunch','他把纸箱往里推了一点。辞职信仍夹在笔记本里。',{talent:1,trust:-1},['retention_patch']),c('let_go','替他把纸箱搬到门边','lunch','他和你握了握手。门关上后，工位上只剩下一张别人还看不懂的维修便笺。',{talent:-3,cash:1},['lost_expert'])]},
lunch:{chapter:4,title:'食堂的餐巾纸',place:'工厂食堂',time:'19:12',bg:3,lead:'克莱尔把一张餐巾纸推到你的餐盘旁。',lines:[l('worker','这个工具，我们三个班轮着找。有人来参观，它总能准时出现。'),l('claire','他说了三次。这是第四次。'),l('narrator','你的手机同时亮起：楼上的晚餐在等你。餐巾纸上画着工具的样子，还有一个电话号码。'),l('you','你们今晚还要用？'),l('worker','明早也要。之后每一天都要。')],interaction:{type:'note',label:'展开餐巾纸',title:'一张不太正式的清单',body:'借工具，来回四十分钟。\n下班后的消息，分不清是不是真的紧急。\n上次提的问题，还不知道谁在处理。\n\n最下面留了一行空白：“下次谁回来告诉我们？”'},choices:[c('return','留下电话号码：“明天下午，我回来找你。”','lockdown','你取消了楼上的晚餐。第二天，工具的问题有了负责人；没解决的几项，也约好了下一次见面。',{trust:2,transparency:1,cash:-1},['followup']),c('photo','拍下照片，赶去楼上的晚餐','lockdown','你说“我记下了”。手机相册里，这张照片慢慢被新的照片推到了后面。',{trust:-1,cash:1},['unanswered'])]},
lockdown:{chapter:5,title:'九个月以后，灯熄了一半',place:'2020 年 · 空下来的厂房',time:'2020',bg:4,lead:'之前，你担心交不出飞机。现在，几乎没人来接了。',history:'历史背景：2020 年 6 月，空客公开宣布计划调整约 15,000 个岗位，并与社会合作伙伴协商。下面的人物、具体方案和对白均为虚构。',lines:[l('narrator','疫情让航班大幅减少。你走过同一条走廊，这次连工具碰撞的声音都听不见。'),l('victor','钱正在变少，比我们原先想的快。'),l('claire','他们在问，下个月还有没有班可上。有人刚签了房贷。'),l('you','我知道。'),l('claire','那就别只说“我知道”。我们把办法摆出来。')],choices:[c('share','坐下来，一起算短工时和能申请的支持','negotiation','计算一直做到深夜。方案保留了关键技能，也写下必须承担的收入变化和岗位调整。没有一张轻松的表。',{talent:3,trust:2,cash:-2},['funded_plan']),c('cut','把准备好的裁员名单交出去','negotiation','现金压力开始减轻。第二天，厂门口有人抱着纸箱站了很久。',{cash:5,talent:-5,trust:-3},['cuts']),c('promise_jobs','站到大家面前：“一个人都不会走。”','negotiation','人群安静下来，有人流下眼泪。维克多没有鼓掌。他把还没填完的资金表放在你的椅子上。',{trust:3,cash:-5},['unfunded_promise'])]},
negotiation:{chapter:5,title:'桌子另一边的椅子',place:'员工协商室',time:'次日 10:00',bg:2,lead:'克莱尔没有坐下。她先看了看门。',lines:[l('claire','我今天来，不只是听你宣布结果。'),l('victor','我们不能每件事都无限期讨论。'),l('claire','我也不需要无限期。我需要看到数字，知道谁承担什么，然后约好什么时候重新看。'),l('narrator','空椅子就在你旁边。你伸手，碰到了椅背。')],choices:[c('invite','拉开椅子，把预算摊到两人中间','before_board','克莱尔终于坐下。你们约定定期回来审视方案，管理层也承担明确的责任。',{trust:2,transparency:1},['shared_review']),c('announce','把已经决定的名单递给她','before_board','她接过名单，逐个读了一遍。“我会转告他们。但这不是我们一起作出的决定。”',{cash:1,trust:-2},['notice_only']),c('delegate','“你来决定吧，我尊重你们。”','before_board','她把笔放回你面前。“我可以一起承担。但你不能把你的那一份，也留给我。”',{cash:-3,trust:1},['abdicate'])]},
before_board:{chapter:6,title:'会议开始以前',place:'董事会门外',time:'08:58',bg:5,lead:'有人来见你，也有人没有来。',lines:[l('narrator','你摸到外套里的旧纸页。最初那条语音，已经是很久以前的事了。')],interaction:{type:'letters',label:'看看门前留下的东西',title:'一路留下的回声',body:'这些东西，来自你之前做过的决定。'},next:'final',continue:'推开会议室的门'},
final:{chapter:6,title:'最后一道红线',place:'董事会会议室',time:'09:00',bg:5,lead:'今天，没有人替你填写空白处。',lines:[l('victor','不管说什么，都记得把钱从哪里来，也写上。'),l('claire','还有那些要一起承担的人。'),l('faury','我只问最后一个问题。'),l('faury','如果明天你不在这里，他们还会把真话说出来吗？'),l('narrator','桌上有一支笔。你把它拿了起来。')],choices:[c('voices','打开记录，让愿意说话的人把话说完','END','你将风险、代价和每个人要做的事写在同一份方案里。',{},['final_open']),c('numbers','先展示恢复交付和省下的钱','END','大屏幕亮起，一条曲线缓缓向上。房间里响起了掌声。',{},['final_numbers']),c('unsigned','放下笔：“没查清的地方，我不能保证。”','END','你把未完成的事项留在桌面上，等待有人接下下一步。',{},['final_review'])]}
};
export const endings={
successor:{name:'接班人',en:'THE SUCCESSOR',chapter:'尾声 · 你没有参加的会议',bg:5,quote:'那天，你没有接到电话。',paras:['新的异常出现在早班。艾琳把原始记录发给所有相关的人，工程师提出复核范围，维克多开始准备成本预案。','克莱尔把一把椅子拉到桌边。有人提出异议，有人说“我还不知道”。没有人急着把那句话改成“已处理”。','你经过玻璃门，停了一会儿，又继续向前走。他们知道该怎么做。'],last:'最初那条语音，终于不再需要只打给一个人。'},
normal:{name:'一切正常',en:'ALL CLEAR',chapter:'尾声 · 整齐的文件',bg:0,quote:'后来，你再也没在凌晨接到电话。',paras:['摘要每天准时到达。每一栏都填得整整齐齐，每个问题都被标记为已处理。','你问为什么异常变少了，没有人回答。质量档案室的抽屉里，还有几份没被带进会议的原始记录。','手机安静地躺在桌上。你已经分不清，这究竟是不是好消息。'],last:'没有声音，不代表没有事情发生。'},
nobody:{name:'没有人负责',en:'PASS IT ON',chapter:'尾声 · 往返的文件夹',bg:2,quote:'文件走过了所有人的桌子。',paras:['工程部门说自己已经提醒过，财务说技术判断不归他们负责。每个部门都找到了一张能证明自己的纸。','克莱尔问下一步谁来做。会议又延长了半个小时。','你看着签名栏。它仍然是空白。'],last:'有了很多解释，却没有人走出会议室去解决问题。'},
survivors:{name:'幸存者名单',en:'THOSE WHO REMAIN',chapter:'尾声 · 灯重新亮起来',bg:1,quote:'订单回来了，那张工位却还空着。',paras:['公司度过了最困难的日子。现金终于不再以同样的速度减少。','一个新来的工程师举着维修便笺，问以前是谁负责这个环节。大家指向同一个空工位。','你翻开联系人，发现有些号码已经很久没拨过了。'],last:'名单上少掉的名字，不会自动长回生产线上。'},
factory:{name:'被保护的工厂',en:'A PROMISE TOO LARGE',chapter:'尾声 · 第二次宣布',bg:4,quote:'他们记得你第一次站在台上的样子。',paras:['你保住了许多人的希望，却没找到足够的钱兑现所有承诺。成本表上的空白，一直没有填完。','更严格的重组方案被送来。克莱尔陪你走到厂门口，这次她没有替你说话。','你知道有人仍然感激你。你也知道，感激不能支付下个月的工资。'],last:'那句最动听的保证，最终变成了最难解释的一句。'},
quarter:{name:'季度冠军',en:'A GOOD QUARTER',chapter:'尾声 · 掌声之后',bg:2,quote:'你的照片出现在本季度的简报里。',paras:['交付和成本数字都很好看。有人握住你的手，说你让公司重新动了起来。','回到办公室，你看见一封告别邮件。一位工程师离开了，邮件写得很客气。','楼下照常忙碌。只是最近，再没人拉住你，说“我还有一件事”。'],last:'你得到了一个漂亮的季度。之后的事，还没有人写出来。'},
redline:{name:'红线之上',en:'ABOVE THE LINE',chapter:'尾声 · 又一次敲门',bg:5,quote:'门外的人，先问会不会耽误你。',paras:['那次交付最终晚了一些。公司付出了代价，有些承诺还需要继续兑现。','新来的员工把一张记录放在桌上。你没有问“为什么现在才说”，而是把旁边的椅子拉了出来。','“坐。先告诉我，你看到了什么。”'],last:'你没能让所有事情变好。但这一次，问题进了门。'}
};
export function initial(){return {version:4,node:'phone',line:0,phase:'dialogue',choice:null,history:[],seen:[],journal:[],metrics:{safety:50,trust:50,cash:50,talent:50,transparency:50},flags:[]}}
export function choose(state,id){const node=scenes[state.node];const choice=node?.choices?.find(c=>c.id===id);if(!choice)throw Error('Unknown choice');const s=structuredClone(state);s.choice=id;s.phase='response';s.history.push({node:state.node,id,label:choice.label});for(const [k,v]of Object.entries(choice.delta))s.metrics[k]=Math.max(0,Math.min(100,s.metrics[k]+v));s.flags.push(...choice.flags);return s}
export function move(state){const node=scenes[state.node];const next=node.choices?node.choices.find(c=>c.id===state.choice)?.next:node.next;if(!next)throw Error('No next scene');return {...state,node:next,line:0,phase:'dialogue',choice:null}}
export function endingFor(s){const f=s.flags,has=x=>f.includes(x),m=s.metrics;const foundations=['review','protect','fair_rewards','technical','followup','shared_review'].filter(has).length;
 if(has('evidence')&&has('protect')&&has('technical')&&has('funded_plan')&&has('shared_review')&&foundations>=5&&m.safety>=54&&m.trust>=59&&m.transparency>=58&&m.cash>=38&&!has('final_numbers'))return 'successor';
 if(f.filter(x=>x==='omit').length>=3&&m.transparency<=44)return 'normal';
 if((has('scapegoat')&&!has('accountability'))||(has('abdicate')&&has('final_review')&&!has('accountability')))return 'nobody';
 if(has('cuts')&&m.talent<=48&&!has('technical'))return 'survivors';
 if(has('unfunded_promise')&&!has('cost_plan')&&m.cash<=42)return 'factory';
 if((f.filter(x=>x==='rush').length>=2&&!has('protect'))||(has('final_numbers')&&!has('fair_rewards')))return 'quarter';
 return 'redline';}
export function linesFor(s){const lines=scenes[s.node].lines.map(x=>({...x}));const has=x=>s.flags.includes(x);
 if(s.node==='signature')lines.splice(1,0,l('you',has('evidence')?'我带来了原始记录。它和摘要不是同一个意思。':'我手里只有摘要。原始记录，我还没有拿到。'));
 if(s.node==='timeline')lines.unshift(l('narrator',has('customer_truth')?'下午四点之前，你答应过要回那个电话。艾琳把三份记录摊到了灯下。':'客户已经按你说的日期安排了机组。艾琳看着你，把三份记录摊到了灯下。'));
 if(s.node==='protection')lines.unshift(l('narrator',has('customer_truth')?'四点，你准时打了那通电话，说明复核还没有结束。她说：“谢谢你至少没有消失。”':'四点，技术部门告知复核仍未结束。你拨通客户的电话，收回了早上的承诺。她沉默了一会儿：“机组已经安排好了。你知道现在要重新通知多少人吗？”'));
 if(s.node==='lunch')lines.unshift(l('claire',has('protect')?'艾琳说，你把自己的名字也签在了报告上。今晚坐我们这桌吧。':'艾琳最近很少来这里吃饭。她说，想找个安静一点的地方。'));
 if(s.node==='before_board'){
  lines.push(l('narrator',has('technical')?'马修把那张辞职信折成纸飞机，放在窗台。他说，今天带的是检查清单。':has('lost_expert')?'马修没有来。原来的工位旁，多了一张待招聘的便笺。':'马修仍在，但他把那个纸箱留在桌下。'));
  lines.push(l('erin',has('protect')?'我把完整记录带来了。你不用替我说，我自己来。':'我的原始记录还在。只是有些话，我还没想好能不能在里面说。'));
  lines.push(l('claire',has('shared_review')?'我们的预算和复审安排都带来了。我和你一起进去。':'我会听你说完。之后，我也有话要讲。'));
 }
 if(s.node==='final'&&has('lost_expert'))lines.unshift(l('narrator','你在通讯录里滑过马修的名字，没有拨出去。'));
 return lines;}
export function lettersFor(s){const h=x=>s.flags.includes(x);return [h('evidence')?'那两份最早的记录，纸角已经磨软。':'你最初拿走的摘要，章依然很清楚。',h('protect')?'艾琳的短信：我到了。在门口等你。':'艾琳的短信：材料发给你了。',h('followup')?'一张新的工具清单，下面写着：这次真的有人回来。':'手机相册里，那张餐巾纸还没有删。',h('technical')?'马修留下的纸飞机，折痕上压着完整检查清单。':h('lost_expert')?'一封来自马修的告别邮件。':'马修的便笺：我还在等那条技术成长的路。'];}
export function validSave(s) {
 try {
  if(!s || s.version!==4 || !Array.isArray(s.history) || s.history.length>20 || !Array.isArray(s.seen) || !Array.isArray(s.journal) || !['dialogue','action','response'].includes(s.phase)) return false;
  let r=initial(),i=0;
  const visited=new Set(['phone']);
  for(let guard=0;guard<35;guard++) {
   if(r.node===s.node && i===s.history.length) break;
   const n=scenes[r.node];
   if(!n) return false;
   if(n.choices) {
    const e=s.history[i++],choice=n.choices.find(c=>c.id===e?.id);
    if(!e || e.node!==r.node || !choice || e.label!==choice.label) return false;
    r=choose(r,e.id);
    if(r.node===s.node && i===s.history.length) break;
   }
   r=move(r); visited.add(r.node);
  }
  if(r.node!==s.node || i!==s.history.length) return false;
  if(JSON.stringify(r.metrics)!==JSON.stringify(s.metrics) || JSON.stringify(r.flags)!==JSON.stringify(s.flags)) return false;
  if(new Set(s.seen).size!==s.seen.length || s.journal.length!==s.seen.length) return false;
  if(s.seen.some(id=>!visited.has(id)||!scenes[id]?.interaction)) return false;
  if(s.journal.some((j,i)=>j.node!==s.seen[i]||j.title!==scenes[j.node].interaction.title)) return false;
  if(s.node==='END') return s.phase==='dialogue' && s.line===0 && s.choice===null;
  if(!Number.isInteger(s.line) || s.line<0 || s.line>=linesFor(r).length) return false;
  if(s.phase==='response') return r.phase==='response' && s.choice===r.choice;
  if(r.phase==='response' || s.choice!==null) return false;
  if(s.phase==='action' && !scenes[s.node].choices) return false;
  return true;
 } catch {return false}
}
