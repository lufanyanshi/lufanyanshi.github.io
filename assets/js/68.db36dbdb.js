(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{448:function(t,r,e){"use strict";e.r(r);var a=e(41),s=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"var-a-second-look"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#var-a-second-look"}},[t._v("#")]),t._v(" VAR: a second look")]),t._v(" "),e("h4",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("p",[t._v("一年前，英超刚引入VAR不久就出现了几例毫厘之间的越位判罚。我在"),e("a",{attrs:{href:"https://github.com/King-of-Infinite-Space/thoughts/issues/26",target:"_blank",rel:"noopener noreferrer"}},[t._v("VAR: has it gone too far?"),e("OutboundLink")],1),t._v("一文中讨论了VAR越位判罚的误差问题。当然，这一年来五大联赛出现了不少类似的情况，而VAR也受到了许多抨击。不过，大多数球迷、球员、教练以及俱乐部人员的抱怨是不值得听的，因为他们显然偏向自己的球队。自己吃亏的时候就埋怨VAR，自己得利的时候就闷声发大财。这无助于改善情况。批评也要批评到点上。")]),t._v(" "),e("p",[t._v("去年的文章只提到了VAR存在误差，最近又重新思考了一下误差具体体现在哪里。随即在默西塞德德比中马内越位助攻被吹掉又引发了一波大讨论。于是在此再次总结一下，这回应该能解释清楚了。（顺便又起了个双关的标题。）")]),t._v(" "),e("h4",{attrs:{id:"问题所在"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题所在"}},[t._v("#")]),t._v(" 问题所在")]),t._v(" "),e("p",[t._v("首先，强烈推荐阅读这个"),e("a",{attrs:{href:"https://twitter.com/DaleJohnsonESPN/status/1318143868462911490",target:"_blank",rel:"noopener noreferrer"}},[t._v("Twitter thread"),e("OutboundLink")],1),t._v("。这是我至今见过的对VAR判罚越位过程的最清晰的解释。作者指出，目前VAR的不确定性基本来自以下两方面。")]),t._v(" "),e("p",[t._v("第一，手臂的位置是人工判定的。去年，有效部位是以腋窝为边界，手臂不计入越位。而今年，由于手球规则的修改，上臂连接肩膀的部分算作有效部位。在VAR操作过程中，这条界线是人工划定的，所以具有一定任意性。")]),t._v(" "),e("p",[t._v("第二，以球刚出脚的帧作为传球时刻。这一帧画面里球必须离脚。那么实际的传球时刻很可能在这一帧与上一帧之间。这带来了一定的不一致性。")]),t._v(" "),e("h4",{attrs:{id:"宁错杀-不放过"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#宁错杀-不放过"}},[t._v("#")]),t._v(" 宁错杀，不放过")]),t._v(" "),e("p",[t._v("关于第二点，我的建议是这两帧都要考虑。如果这两帧里进攻球员都越位或都不越位，那并没有什么争议。问题出现在一帧越位一帧不越位的情况（如"),e("a",{attrs:{href:"https://www.dailymail.co.uk/sport/football/article-7367673/THE-GREAT-VAR-DEBATE-Tech-said-Sterling-2-4cm-offside-allowed-13cm-margin-error.html#i-5c6b49d3f4f00366",target:"_blank",rel:"noopener noreferrer"}},[t._v("dailymail"),e("OutboundLink")],1),t._v("的下图所示）"),e("br"),t._v(" "),e("img",{attrs:{src:"https://user-images.githubusercontent.com/27502578/96530615-cdd8f500-1255-11eb-9648-34b6c259112d.png",alt:""}})]),t._v(" "),e("p",[t._v("下面引用一下我前几天在去年那篇文章评论区补充的内容。")]),t._v(" "),e("blockquote",[e("p",[t._v("问题大概只出现在以下情况：帧1传球者未触球，帧2传球者触球，接球者在其中一帧越位其中一帧不越位。我们知道定格的两个瞬间的情况，但不知道中间的过程。理论上我们可以用插值法计算触球时间以及在那一刻的球员位置，但复杂的身体运动和触球大概很难用线性插值来计算。"),e("br"),t._v("\n如果我们假定触球可能发生在t1和t2之间的任一时刻，且球员的位置在这个时间段内随时间线性变化，因而进攻队员相对于防守球员的位置也随时间线性变化，那么触球一刻的相对位置D取自均匀分布U(d1, d2)。均值μ=(d1+d2)/2，宽度d=d2-d1为两帧之间相对位置之差。"),e("br"),t._v("\n那么越位的标准是什么？现行的标准是只看帧2，d2>0即越位。这一标准可以说是“宁错杀，不放过”，消灭了假阴性但会出现不少假阳性，即不会漏判越位但会扼杀一些进球。因为在d2比0略大一点点的时候，不越位的概率P(D<0|d2)是相当大的。假设d1<0，d2=δ>0，那么：P(越位|δ) = P(D>0|δ) = δ/d。正文图示的情况大概δ≈1cm, d≈10cm, 越位的概率只有10%。如果想鼓励进攻，那么大可以给进攻方让出几厘米。")])]),t._v(" "),e("p",[t._v("分析过程图如下。"),e("br"),t._v(" "),e("img",{attrs:{src:"https://user-images.githubusercontent.com/27502578/96353453-41360780-109a-11eb-8d32-504bba513c50.png",width:"700"}})]),t._v(" "),e("p",[t._v("在这种情况下判越位不能说是错误，但确实不利于进攻方。这一年来不知冤枉了多少好球、制造了多少空欢喜，这实在不是什么功德之事。可以考虑把标准放宽些，比如用两帧间相对距离的平均值计算越位，这意味着至少有50%可能性越位才判越位。尽管边界情况总会存在，或许50%与51%的差别带来的争议会小于0%与1%的差别。")]),t._v(" "),e("p",[t._v("上述方法理论上更完善，但难以付诸实践。因为现在VAR的判断过程已经相当慢了，再看前一帧的话耗时要加倍。好不容易进了球不能立即庆祝能把人急死。")]),t._v(" "),e("p",[t._v("提高录像的帧率可以更精确地确定传球时刻并减少这种不确定的情况出现的可能性。当然，时间分辨率足够高之后，空间分辨率也可能成为制约因素。目前的VAR系统在判断球员三维位置方面还是非常精确的，所以不必担心这个问题。（"),e("a",{attrs:{href:"https://www.youtube.com/watch?v=PCOK7-kc_8o",target:"_blank",rel:"noopener noreferrer"}},[t._v("FIFA的这个视频"),e("OutboundLink")],1),t._v("展示了VAR系统的校准过程。英超官网的"),e("a",{attrs:{href:"https://www.premierleague.com/news/1488423",target:"_blank",rel:"noopener noreferrer"}},[t._v("这篇文章"),e("OutboundLink")],1),t._v("也介绍了VAR如何判断越位并解释了一些相关问题。）")]),t._v(" "),e("h4",{attrs:{id:"技术的问题-还是人的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#技术的问题-还是人的问题"}},[t._v("#")]),t._v(" 技术的问题，还是人的问题？")]),t._v(" "),e("p",[t._v("判罚的精确度是逐步提升的，VAR并不是历史的倒退。尽管存在一定的误差，它总好过边裁的凡胎肉眼吧。（一边看传球者一边看越位线，我不知道边裁怎么做到的。）令人高兴的是，上面那个Twitter帖子提到FIFA正在试验一种半自动的越位判断系统。看起来这项新技术利用了身体姿态识别并考虑了运动轨迹，可以自动判断越位且不需要定格在某一帧。只要愿意搞，想必这对现今的技术来说不是什么难事。（搞自动驾驶的公司早就开始研究人体运动姿态识别了。）")]),t._v(" "),e("p",[t._v("在技术之路上越走越远的同时，不能忘了初衷是什么。如果觉得在越位线上斤斤计较没有意义，为了鼓励进攻不妨让出几厘米。（温格甚至建议让出一个身位。）另外，不论技术多么先进，只要不是自动运行，它就还是由人操作的。当技术变得越来越精确，人的问题就更加凸显出来。越位的判罚倒还好，红牌的判罚还是有相当大的主观因素。从前的判罚最多在回放镜头中出现，而如今会被放到放大镜下反复观察，因而任何不公都更容易被人发现、使人愤慨。裁判还是会有犹豫不决的时候，也可能会有避重就轻的情况，甚至还可能产生对技术的依赖。正如许多评论员强调的，VAR最终是由人决定的。人们在抨击VAR的时候，或许真正应该抨击的是裁判的水平。")])])}),[],!1,null,null,null);r.default=s.exports}}]);