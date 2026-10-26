// Adapted from the supplied screenplay. Additional branch reactions are fictional.
export const metrics = [
  "安全",
  "信任",
  "现金流",
  "人才",
  "透明度"
];

export const chapters = [
  {
    "title": "凌晨 02:17",
    "tag": "PROLOGUE",
    "place": "图卢兹 · 总部办公区",
    "time": "02:17",
    "lead": "一份报告，两个结论。",
    "intro": "厂房的机械声还未停歇。手机在桌上亮起，一段来自质量工程师的语音打破了夜晚。正式摘要写着「已处理」，原始记录却显示「仍需核实」。",
    "lines": [
      [
        "艾琳·杜邦",
        "质量工程师 · 语音消息",
        "我不确定这代表技术故障。我只知道，摘要里的结论比我看到的记录更确定。"
      ],
      [
        "维克多·莫罗",
        "财务负责人 · 短信",
        "九点前必须有方案。延误会影响客户，也会加重现金流压力。"
      ],
      [
        "马修·勒鲁瓦",
        "资深工程师 · 短信",
        "先别签。至少有一项信息需要重新核实。"
      ],
      [
        "Guillaume Faury",
        "CEO · 戏剧化呈现",
        "我不需要一个让我安心的答案。我需要知道我们知道什么、不知道什么。你先决定从哪里开始。"
      ]
    ],
    "question": "天亮之前，你先相信哪一条线索？",
    "choices": [
      [
        "先见工程师马修",
        "从技术证据入手，听听签字之前的顾虑。",
        [
          2,
          1,
          -1,
          0,
          0
        ],
        "马修把未完成的检查清单放到你面前。「谢谢你愿意先听完。」",
        "engineer"
      ],
      [
        "先见财务负责人维克多",
        "先弄清楚延误的代价和可用的时间。",
        [
          0,
          -1,
          2,
          0,
          0
        ],
        "维克多打开现金计划。「我们不是没有选择，但每一天都有成本。」",
        "finance"
      ],
      [
        "寻找艾琳的原始记录",
        "回到未经归纳的事实，追踪结论的来源。",
        [
          0,
          1,
          0,
          0,
          2
        ],
        "艾琳发来原始记录。「请把它和摘要放在一起看。」",
        "original"
      ]
    ],
    "history": "虚构剧情 · 以下报告差异、语音与内部事件均为虚构悬疑设定。真实人物的台词为戏剧化创作。"
  },
  {
    "title": "一份不一致的报告",
    "tag": "THE DISCREPANCY",
    "place": "工程会议室 · 清晨",
    "time": "06:40",
    "lead": "差异不是答案，证据才是。",
    "intro": "会议室里，两个版本并排投在墙上。「安排复核」在流转中变成了「复核通过」。是版本未同步，还是流程出了问题？目前没有证据指向蓄意篡改。",
    "lines": [
      [
        "马修·勒鲁瓦",
        "资深工程师",
        "我不是说一定发生了故障。我说的是，摘要写得比证据更确定。可能是版本没同步，也可能是有人把‘安排复核’写成‘复核通过’。"
      ],
      [
        "维克多·莫罗",
        "财务负责人",
        "我们不能无限期调查。客户需要计划，团队也需要知道接下来做什么。"
      ],
      [
        "艾琳·杜邦",
        "质量工程师",
        "我没有证据证明有人故意改了文件。我只希望有人把原始记录看完。"
      ],
      [
        "你",
        "危机应对总监",
        "所以现在我们有一个差异，但还没有原因。我们不能先认定有人有罪，也不能假装什么都没发生。"
      ],
      [
        "Guillaume Faury",
        "CEO · 戏剧化呈现",
        "给我一个可执行的复核计划。不是猜测，也不是保证。"
      ]
    ],
    "question": "你将怎样处理这份报告？",
    "choices": [
      [
        "组织独立技术复核",
        "核对原始记录与版本历史，让结论重新接受检验。",
        [
          2,
          0,
          -1,
          0,
          1
        ],
        "独立复核组成立。原始记录被保全，每项差异都有了核查负责人。",
        "review"
      ],
      [
        "向董事会汇报，并行调查",
        "让风险进入正式议程，争取治理层的支持。",
        [
          0,
          0,
          -1,
          0,
          1
        ],
        "董事会要求定期更新。问题进入正式记录，调查继续推进。",
        "board"
      ],
      [
        "先私下解决",
        "缩小知情范围，争取在更多人注意前结束问题。",
        [
          0,
          0,
          1,
          0,
          -2
        ],
        "会议纪要没有提及差异。艾琳收回了准备补充说明的手。",
        "suppress"
      ]
    ],
    "history": "虚构剧情 · 文件差异与人物行为为虚构。当前证据不足以证明发生技术故障或有人蓄意篡改。"
  },
  {
    "title": "交付倒计时",
    "tag": "DELIVERY COUNTDOWN",
    "place": "项目作战室 · 日间",
    "time": "09:00",
    "lead": "你能承诺的，究竟是什么？",
    "history": "真实历史背景 · 2018 年，空客与普惠曾公开评估部分 A320neo GTF 发动机问题并协调支持受影响客户。此处作为行业背景资料回顾；以下会议、角色和调查为虚构，并非事件实录。",
    "intro": "屏幕上的交付排期一格格变红。客户等着一个日期，工程团队等着检查结果，财务团队等着一份能够执行的成本方案。",
    "lines": [
      [
        "维克多·莫罗",
        "财务负责人",
        "我需要知道我们能承受多长时间的延误。"
      ],
      [
        "马修·勒鲁瓦",
        "资深工程师",
        "技术复核可以有时间表，但不能把未完成的检查写成通过。"
      ],
      [
        "供应商联络人",
        "供应链协调",
        "问题如果涉及供应链技术信息，就应该共同核对，不能只靠互相指责。"
      ],
      [
        "你",
        "危机应对总监",
        "我们需要两条并行路线：技术问题必须查清，客户沟通和成本预案也必须同步进行。"
      ],
      [
        "航空公司代表",
        "客户 · 视频连线",
        "我理解检查需要时间。但请不要每天给我一个新的交付日期。你们能承诺什么？"
      ],
      [
        "你",
        "危机应对总监",
        "我们能承诺下一次更新时间、已确认的事实和恢复交付所需满足的条件。我们不会承诺尚未验证的结果。"
      ]
    ],
    "question": "交付压力之下，你划下哪条线？",
    "choices": [
      [
        "联合核查，向客户透明沟通",
        "成立技术工作组，区分已确认事实与待核实事项。",
        [
          2,
          2,
          -1,
          0,
          0
        ],
        "供应商同意联合核查。客户接受定时更新，等待可验证的恢复条件。",
        "joint"
      ],
      [
        "压缩复核时间，守住交付",
        "以原定目标为先，让团队加速完成检查。",
        [
          -3,
          0,
          2,
          0,
          -1
        ],
        "交付表暂时恢复正常。马修提醒你：「时间变短，不代表未知变少。」",
        "compressed"
      ],
      [
        "将问题全部归给供应商",
        "把对外压力转移给合作方。",
        [
          0,
          -1,
          0,
          0,
          0
        ],
        "供应商停止共享非必要信息。下一次会议，比这一次更安静。",
        "blame"
      ]
    ]
  },
  {
    "title": "谁敢说真话",
    "tag": "THE COST OF SPEAKING",
    "place": "一线安全圆桌 · 午后",
    "time": "14:30",
    "lead": "沉默，也会成为一种制度。",
    "intro": "这一次没有讲台。工程、质量、财务与员工代表围坐一桌。艾琳展示了版本时间线：措辞越来越确定，证据却没有相应增加。",
    "lines": [
      [
        "艾琳·杜邦",
        "质量工程师",
        "我以前报告过问题。后来大家问的不是问题是什么，而是为什么现在才说。"
      ],
      [
        "马修·勒鲁瓦",
        "资深工程师",
        "如果每次报告都变成找一个人承担全部责任，大家会学会少说一点。"
      ],
      [
        "维克多·莫罗",
        "财务负责人",
        "但如果完全不追责，对认真工作的人也不公平。"
      ],
      [
        "你",
        "危机应对总监",
        "我们要保护诚实报告、合理停线和提出异议的权利，同时调查故意违规与蓄意隐瞒。"
      ],
      [
        "克莱尔·贝尔纳",
        "员工代表",
        "那就把规则写清楚。员工需要知道发声之后会发生什么。"
      ],
      [
        "Guillaume Faury",
        "CEO · 戏剧化呈现",
        "公正文化不是没人负责，而是先查事实，再区分诚实失误、流程缺陷与故意违规。"
      ]
    ],
    "question": "下一次出现异常时，人们会怎么做？",
    "choices": [
      [
        "保护报告，明确问责边界",
        "建立匿名安全反馈与反报复规则，区分失误和故意违规。",
        [
          0,
          2,
          0,
          0,
          2
        ],
        "艾琳同意留下完整时间线。员工代表开始共同拟定反报复规则。",
        "protect"
      ],
      [
        "只追究最接近文件的人",
        "迅速确定责任人，尽快结束调查。",
        [
          0,
          -2,
          0,
          0,
          -2
        ],
        "调查迅速结束。但原始版本为何变化，仍没有人解释。",
        "suppress"
      ],
      [
        "不记录问题，避免紧张",
        "让团队回到工作，不留下正式记录。",
        [
          0,
          1,
          0,
          0,
          -3
        ],
        "圆桌在平静中结束。下一次异常，没有人再主动递交材料。",
        "suppress"
      ]
    ],
    "history": "虚构剧情 · 本章以报告保护与公正文化为主题；圆桌、记录及人物对白不代表真实内部事件。"
  },
  {
    "title": "停摆",
    "tag": "THE SHUTDOWN",
    "place": "危机会议室 · 2020 年",
    "time": "2020",
    "lead": "每一个数字后面，都是一个家庭。",
    "history": "真实背景 · 2020 年，空客公开宣布计划因疫情冲击调整约 15,000 个岗位，并与社会合作伙伴协商。具体会议和选项为虚构。",
    "intro": "航空需求骤降。交付排期不再是最紧迫的问题，生存才是。现金压力、岗位与多年积累的技能，被同时放到了会议桌上。",
    "lines": [
      [
        "维克多·莫罗",
        "财务负责人",
        "公司必须活下来。我们需要降低成本，而且要有明确的执行方案。"
      ],
      [
        "克莱尔·贝尔纳",
        "员工代表",
        "每个数字后面都是一个家庭。你们需要调整，我们需要知道自己是否还有工作。"
      ],
      [
        "马修·勒鲁瓦",
        "资深工程师",
        "如果失去太多有经验的人，需求恢复时，我们可能没有能力迅速恢复生产。"
      ],
      [
        "你",
        "危机应对总监",
        "我们应该同时评估短工时、政府支持、自愿方案、关键技能保留和必要的岗位调整。不能假装没有危机，也不能假装每种选择都没有代价。"
      ],
      [
        "Guillaume Faury",
        "CEO · 戏剧化呈现",
        "不要承诺无法保证的结果。请说明哪些岗位和技能必须尽量保留，以及我们如何与员工代表共同复审方案。"
      ]
    ],
    "question": "面对停摆，你将保留什么？",
    "choices": [
      [
        "协商降本，保留关键技能",
        "评估短工时、可用政府支持、自愿方案与必要岗位调整。",
        [
          0,
          2,
          -1,
          2,
          0
        ],
        "克莱尔加入方案复审。维克多开始测算支持政策与短工时的实际成本。",
        "skills"
      ],
      [
        "立即大规模裁员",
        "优先释放现金，快速缩减固定成本。",
        [
          0,
          -3,
          3,
          -3,
          0
        ],
        "现金压力暂时缓解。马修递来一份名单，上面有几位无法轻易替代的人。",
        "layoff"
      ],
      [
        "承诺绝不裁员",
        "先给员工确定的承诺，暂不提出成本计划。",
        [
          0,
          2,
          -3,
          0,
          0
        ],
        "掌声过后，维克多留了下来。「承诺的资金来源，我们还没有答案。」",
        "promise"
      ]
    ]
  },
  {
    "title": "最后一道红线",
    "tag": "THE FINAL LINE",
    "place": "董事会会议室 · 终局",
    "time": "终局",
    "lead": "如果明天你不在这里呢？",
    "intro": "你走进董事会。曾经的选择已经改变了愿意出席的人、能够提交的证据，以及这家公司面对未知时的反应。现在，需要一份最终方案。",
    "lines": [
      [
        "董事会主席",
        "最终审议",
        "你建议公司怎样继续？"
      ],
      [
        "你",
        "危机应对总监",
        "我可以交出一个看起来漂亮的短期数字，也可以交出一份写明风险、代价、责任人和复核时间的方案。后者不能让所有人满意，但每项承诺都可以被检查。"
      ],
      [
        "维克多·莫罗",
        "财务负责人",
        "如果你要保留人才、提高安全标准和透明度，就必须解释资金从哪里来。"
      ],
      [
        "克莱尔·贝尔纳",
        "员工代表",
        "如果你要求员工一起承担困难，我们也必须看见管理层承担责任。"
      ],
      [
        "马修·勒鲁瓦",
        "资深工程师",
        "下一次我们发现问题时，停下来复核不能取决于谁坐在会议室里。"
      ],
      [
        "Guillaume Faury",
        "CEO · 戏剧化呈现",
        "最后一个问题：如果明天你不在这里，这家公司还能做出正确的决定吗？"
      ]
    ],
    "question": "这一次，你的名字将签在哪里？",
    "choices": [
      [
        "提交平衡方案",
        "安全底线、透明沟通、财务约束与人才保留并行。",
        [
          0,
          0,
          0,
          0,
          0
        ],
        "你的方案写明了风险、代价、责任人与复核时间。",
        "balance"
      ],
      [
        "提交短期业绩优先方案",
        "以近期现金流和交付表现作为首要目标。",
        [
          0,
          0,
          0,
          0,
          0
        ],
        "你提交了一份以近期经营指标为核心的方案。",
        "quarter"
      ],
      [
        "拒绝未经验证的保证",
        "要求继续复核，明确责任，保留未解决事项。",
        [
          0,
          0,
          0,
          0,
          0
        ],
        "你在签字前，列出了所有尚未得到验证的前提。",
        "account"
      ]
    ],
    "history": "虚构剧情 · 董事会审议及全部结局为戏剧化创作。最终分数代表本游戏中的选择轨迹。"
  }
];

export const endings = {
  "successor": [
    "接班人",
    "THE SUCCESSOR",
    "你建立的，不是对自己的依赖。",
    "新的异常出现时，团队自行召集复核、共享事实、提出成本预案。你没有参加那场会议，但他们知道应该怎样做。最后一道红线，已经成为组织的一部分。"
  ],
  "normal": [
    "一切正常",
    "ALL SYSTEMS GREEN",
    "仪表板一片绿色，房间却越来越安静。",
    "所有报告按时提交，每个问题都有一个漂亮的摘要。但当你问起原始记录，没有人能够说明真正发生了什么。沉默成为了最顺畅的流程。"
  ],
  "nobody": [
    "没有人负责",
    "NO ONE RESPONSIBLE",
    "每个人都证明了，责任在别处。",
    "文件在部门之间流转，调查在边界处停下。没有人承认自己知道全部情况，也没有人再去寻找那个根本问题。"
  ],
  "survivors": [
    "幸存者名单",
    "THE SURVIVORS",
    "公司活了下来，一些能力却没有。",
    "需求恢复时，生产线重新亮起灯。那些曾经能够解决难题的人已经离开，而经验无法像订单一样迅速补回。"
  ],
  "factory": [
    "被保护的工厂",
    "THE PROTECTED FACTORY",
    "你守住了岗位，却没能守住承诺。",
    "员工记得你曾经站在他们身边。但当现金耗尽，更严厉的重组被迫到来。善意需要一份能够持续执行的方案。"
  ],
  "quarter": [
    "季度冠军",
    "QUARTERLY CHAMPION",
    "数字赢得了掌声，信任悄然离场。",
    "短期业绩获得认可，交付目标写进了汇报。但工程师陆续离开，基层报告越来越少。下一份漂亮的报告，比以前更难让人安心。"
  ],
  "redline": [
    "红线之上",
    "ABOVE THE RED LINE",
    "有些代价，值得被清楚地写下来。",
    "公司承受了短期成本，却开始建立可信的复核与报告流程。又一名员工主动报告异常。这一次，管理者问：「我们需要什么信息才能弄清楚？」"
  ]
};

/** History is a prefix of six choices, each an integer 0, 1, or 2. */
function assertHistory(history) {
  if (!Array.isArray(history) || history.length > chapters.length || history.some(c => !Number.isInteger(c) || c < 0 || c > 2)) {
    throw new TypeError('Invalid decision history');
  }
}

export function calculate(history) {
  assertHistory(history);
  const scores = [50, 50, 50, 50, 50];
  const flags = [];
  let board = 0, supplier = 0;
  history.forEach((choice, chapter) => {
    const entry = chapters[chapter].choices[choice];
    entry[2].forEach((delta, index) => scores[index] = Math.max(0, Math.min(100, scores[index] + delta)));
    if (entry[4]) flags.push(entry[4]);
    // Secondary counters explicitly specified in the supplied screenplay.
    if (chapter === 1 && choice === 1) board += 1;
    if (chapter === 2 && choice === 0) supplier += 1;
    if (chapter === 2 && choice === 2) { board += 1; supplier -= 2; }
    if (chapter === 3 && choice === 1) board += 1;
    if (chapter === 4 && choice === 2) board -= 2;
  });
  return { scores, flags, board, supplier };
}

/** Material available for the dossier and the final board review. No invented numeric gains. */
export function getCaseState(history) {
  const { flags, board, supplier } = calculate(history);
  const has = key => flags.includes(key);
  const evidence = [];
  const institutions = [];
  const witnesses = [];
  if (has('original')) evidence.push('艾琳提供的原始记录副本');
  if (has('review')) { evidence.push('原始记录与版本历史的独立复核清单'); institutions.push('独立技术复核'); witnesses.push('马修·勒鲁瓦'); }
  if (has('board')) evidence.push('提交董事会的风险通报与更新要求');
  if (has('joint')) { evidence.push('供应商联合核查与客户更新计划'); institutions.push('跨组织技术工作组'); witnesses.push('供应商联络人'); }
  if (has('protect')) { evidence.push('艾琳同意提交的完整版本时间线'); institutions.push('匿名反馈与反报复规则'); witnesses.push('艾琳·杜邦'); }
  if (has('skills')) { evidence.push('关键技能清单与共同降本复审方案'); institutions.push('员工参与的技能保留与成本复审'); witnesses.push('克莱尔·贝尔纳'); }
  return { evidence, institutions, witnesses, board, supplier };
}

/** Base dialogue is retained verbatim; new branching reactions are clearly part of the adaptation. */
export function getLines(chapterIndex, history = []) {
  assertHistory(history);
  if (!Number.isInteger(chapterIndex) || !chapters[chapterIndex]) throw new RangeError('Invalid chapter');
  const previous = history.slice(0, chapterIndex);
  const { flags, board, supplier } = calculate(previous);
  const has = key => flags.includes(key);
  const lines = chapters[chapterIndex].lines.map(line => [...line]);
  if (chapterIndex === 1 && previous.length >= 1) {
    const openers = [
      ['马修·勒鲁瓦', '资深工程师', '你昨夜先来找我，我把未完成的检查清单带来了。它能告诉我们该核查什么，不能替代检查结果。'],
      ['维克多·莫罗', '财务负责人', '我们昨夜谈过延误的成本。现在请把可验证的技术条件和更新时间一起放进计划。'],
      ['艾琳·杜邦', '质量工程师', '这是你要的原始记录。先看结论形成的过程，再判断差异来自哪里。']
    ];
    lines.unshift(openers[previous[0]]);
  }
  if (chapterIndex === 2 && previous.length >= 2) {
    lines.unshift(has('review')
      ? ['马修·勒鲁瓦', '资深工程师', '独立复核已经分配负责人。我们可以给出下一次更新时间，但还没有足够依据宣布全部通过。']
      : has('board')
        ? ['维克多·莫罗', '财务负责人', '董事会已经收到风险通报，愿意给并行调查留出讨论空间。接下来仍需要清楚的成本与交付安排。']
        : ['艾琳·杜邦', '质量工程师', '这份差异仍只在少数人之间流转。如果它影响交付，客户需要知道还有哪些问题没得到验证。']);
  }
  if (chapterIndex === 3 && previous.length >= 3) {
    lines.unshift(supplier > 0
      ? ['供应商联络人', '供应链协调', '联合核查的信息可以共享。我们愿意一起说明哪些事实已确认、哪些判断仍需验证。']
      : supplier < 0
        ? ['马修·勒鲁瓦', '资深工程师', '把责任全推给供应商之后，信息共享变少了。我们更需要把内部记录保留下来。']
        : ['马修·勒鲁瓦', '资深工程师', '复核时间已经被压缩。请让工程师能够如实报告还没有完成的工作，而不是把沉默当作通过。']);
  }
  if (chapterIndex === 4 && previous.length >= 4) {
    lines.unshift(has('protect')
      ? ['克莱尔·贝尔纳', '员工代表', '员工已经看见报告保护规则。我们愿意参与这次方案，但需要清楚的复审安排和管理层责任。']
      : ['克莱尔·贝尔纳', '员工代表', '上次会议之后，大家仍担心发声的后果。现在讨论岗位，我们需要知道提出异议会不会受到惩罚。']);
  }
  if (chapterIndex === 5 && previous.length >= 5) {
    const response = [
      has('review')
        ? ['马修·勒鲁瓦', '资深工程师 · 复核陈述', '我愿意说明复核清单与版本历史。它让未完成事项有了负责人，也让大家知道什么条件才算通过。']
        : ['马修·勒鲁瓦', '资深工程师 · 复核陈述', '我们没有建立独立复核机制。现有摘要不能代替原始证据，也不能让我替未完成的检查作保证。'],
      has('protect')
        ? ['艾琳·杜邦', '质量工程师 · 报告者陈述', '在反报复规则下，我同意提交完整时间线。我无法证明有人蓄意篡改，但愿意配合把事实查清。']
        : ['艾琳·杜邦', '质量工程师 · 报告者陈述', '报告保护规则还没有建立。我可以确认措辞存在差异，但不能保证每个知情人都愿意站出来。'],
      has('skills')
        ? ['克莱尔·贝尔纳', '员工代表 · 方案复审', '关键技能清单与降本方案已进入共同复审。我愿意支持继续核查成本，而不是承诺没有代价。']
        : has('layoff')
          ? ['克莱尔·贝尔纳', '员工代表 · 方案复审', '人员已经开始离开。你需要说明需求恢复时，谁来承担这些岗位留下的能力缺口。']
          : ['维克多·莫罗', '财务负责人 · 资金复审', '不裁员的承诺还没有成本计划。我需要一份可以执行的资金安排，而不是又一次保证。'],
      supplier > 0
        ? ['供应商联络人', '供应链协调 · 联合核查', '联合工作组愿意提交核查进展，也愿意明确下一次信息更新时间。']
        : supplier < 0
          ? ['维克多·莫罗', '财务负责人 · 协作情况', '供应商合作已经受损。即便短期有人认可归责方案，也不能据此补齐缺失的技术信息。']
          : ['维克多·莫罗', '财务负责人 · 协作情况', '交付目标被优先保住，但联合核查机制还没有形成。下一次问题出现时，仍需要重新协调。']
    ];
    if (board > 0) response.push(['董事会主席', '最终审议 · 治理支持', '此前的汇报或快速处置获得过短期支持。最终决定仍必须接受安全、责任与成本的共同检验。']);
    if (board < 0) response.push(['董事会主席', '最终审议 · 资金质询', '没有成本计划的承诺削弱了董事会支持。请解释资金缺口由谁负责，以及何时复审。']);
    lines.splice(1, 0, ...response);
  }
  return lines;
}

// Thresholds are calibrated to the screenplay's 1–3 point changes.
export function resolve(history) {
  const { scores: [safety, trust, cash, talent, transparency], flags } = calculate(history);
  const has = key => flags.includes(key);
  if (safety >= 54 && trust >= 56 && talent >= 52 && transparency >= 54 && cash >= 45 &&
      ['review', 'joint', 'protect', 'skills'].filter(has).length >= 3 && !has('quarter')) return 'successor';
  if (transparency <= 46 && flags.filter(key => key === 'suppress').length >= 2) return 'normal';
  if ((transparency <= 48 && !has('review') && !has('protect')) || (has('blame') && !has('protect'))) return 'nobody';
  if (cash >= 52 && talent <= 47 && has('layoff')) return 'survivors';
  if (trust >= 53 && talent >= 50 && cash <= 47 && has('promise')) return 'factory';
  if ((cash >= 51 && (safety < 52 || trust < 51 || transparency < 51)) || has('quarter')) return 'quarter';
  return 'redline';
}
