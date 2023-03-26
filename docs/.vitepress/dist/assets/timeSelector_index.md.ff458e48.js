import{D as a,h as F,i as g,z as t,G as n,B as h,l as o,O as C,u as l}from"./chunks/framework.1d3d0452.js";const x=t("h1",{id:"时间选择器",tabindex:"-1"},[o("时间选择器 "),t("a",{class:"header-anchor",href:"#时间选择器","aria-label":'Permalink to "时间选择器"'},"​")],-1),f=t("p",null,"提供开始时间和结束时间选择联动，开始日期和结束日期联动",-1),A=t("h2",{id:"基础用法",tabindex:"-1"},[o("基础用法 "),t("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),u=t("br",null,null,-1),b=t("br",null,null,-1),_=t("br",null,null,-1),m=t("br",null,null,-1),E=C(`<h3 id="代码示例" tabindex="-1">代码示例 <a class="header-anchor" href="#代码示例" aria-label="Permalink to &quot;代码示例&quot;">​</a></h3><details><summary>展开查看</summary><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">el-card</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">br</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">br</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xc-choose-time</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:startOptions</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">startOptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@startChange</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">startChange</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@endChange</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">endChange</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">xc-choose-time</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">br</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">br</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xc-choose-date</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:disableToday</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">false</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:startOptions</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">startOptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@startChange</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dateStartChange</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@endChange</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dateEndChange</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">xc-choose-date</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">el-card</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  let startChange = (val) =&gt; </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">startChange</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> val)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  let endChange = (val) =&gt; </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">endChange</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> val)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  let dateStartChange = (val) =&gt; </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(val)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  let dateEndChange = (val) =&gt; </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(val)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  let startOptions = </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// size: &#39;mini&#39;,</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// clearable: false</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div> <br></details><h2 id="时间选择器api" tabindex="-1">时间选择器API <a class="header-anchor" href="#时间选择器api" aria-label="Permalink to &quot;时间选择器API&quot;">​</a></h2><h3 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">可选择</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">startPlaceholder</td><td style="text-align:left;">开始时间的占位符</td><td style="text-align:left;">String</td><td style="text-align:left;"></td><td style="text-align:left;">请选择开始时间</td></tr><tr><td style="text-align:left;">endPlaceholder</td><td style="text-align:left;">结束时间的占位符</td><td style="text-align:left;">String</td><td style="text-align:left;"></td><td style="text-align:left;">请选择结束时间</td></tr><tr><td style="text-align:left;">startTimeStart</td><td style="text-align:left;">开始时间的开始选择</td><td style="text-align:left;">String</td><td style="text-align:left;"></td><td style="text-align:left;">08:00</td></tr><tr><td style="text-align:left;">startStep</td><td style="text-align:left;">开始时间的步进</td><td style="text-align:left;">String</td><td style="text-align:left;"></td><td style="text-align:left;">00:30</td></tr><tr><td style="text-align:left;">startTimeEnd</td><td style="text-align:left;">开始时间的结束选择</td><td style="text-align:left;">String</td><td style="text-align:left;"></td><td style="text-align:left;">08:00</td></tr><tr><td style="text-align:left;">endStep</td><td style="text-align:left;">结束时间的步进</td><td style="text-align:left;">String</td><td style="text-align:left;"></td><td style="text-align:left;">00:30</td></tr><tr><td style="text-align:left;">endTimeEnd</td><td style="text-align:left;">结束时间的结束选择</td><td style="text-align:left;">String</td><td style="text-align:left;"></td><td style="text-align:left;">24:00</td></tr></tbody></table><h3 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">事件名</th><th style="text-align:left;">说明</th><th style="text-align:left;">参数</th></tr></thead><tbody><tr><td style="text-align:left;">startChange</td><td style="text-align:left;">开始时间变化时触发</td><td style="text-align:left;">val:string,开始时间</td></tr><tr><td style="text-align:left;">endChange</td><td style="text-align:left;">结束时间变化时触发</td><td style="text-align:left;">val:string, 结束时间</td></tr></tbody></table><h2 id="日期选择器api" tabindex="-1">日期选择器API <a class="header-anchor" href="#日期选择器api" aria-label="Permalink to &quot;日期选择器API&quot;">​</a></h2><h3 id="props-1" tabindex="-1">props <a class="header-anchor" href="#props-1" aria-label="Permalink to &quot;props&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">可选择</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">startPlaceholder</td><td style="text-align:left;">开始时间的占位符</td><td style="text-align:left;">String</td><td style="text-align:left;"></td><td style="text-align:left;">请选择开始时间</td></tr><tr><td style="text-align:left;">endPlaceholder</td><td style="text-align:left;">结束时间的占位符</td><td style="text-align:left;">String</td><td style="text-align:left;"></td><td style="text-align:left;">请选择结束时间</td></tr><tr><td style="text-align:left;">disableToday</td><td style="text-align:left;">是否禁用选择今天之前的日期</td><td style="text-align:left;">Boolean</td><td style="text-align:left;"></td><td style="text-align:left;">true</td></tr></tbody></table><h3 id="事件-1" tabindex="-1">事件 <a class="header-anchor" href="#事件-1" aria-label="Permalink to &quot;事件&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">事件名</th><th style="text-align:left;">说明</th><th style="text-align:left;">参数</th></tr></thead><tbody><tr><td style="text-align:left;">startChange</td><td style="text-align:left;">开始时间变化时触发</td><td style="text-align:left;">val:string,开始时间</td></tr><tr><td style="text-align:left;">endChange</td><td style="text-align:left;">结束时间变化时触发</td><td style="text-align:left;">val:string, 结束时间</td></tr></tbody></table>`,12),k=JSON.parse('{"title":"时间选择器","description":"","frontmatter":{},"headers":[],"relativePath":"timeSelector/index.md"}'),q={name:"timeSelector/index.md"},O=Object.assign(q,{setup(S){let p=s=>{console.log("startChange",s)},r=s=>{console.log("endChange",s)},c=s=>{console.log(s)},d=s=>{console.log(s)},e={};return(s,v)=>{const y=a("xc-choose-time"),i=a("xc-choose-date"),D=a("el-card");return F(),g("div",null,[x,f,A,t("div",null,[n(D,null,{default:h(()=>[u,b,n(y,{startOptions:l(e),onStartChange:l(p),onEndChange:l(r)},null,8,["startOptions","onStartChange","onEndChange"]),_,m,n(i,{disableToday:!1,startOptions:l(e),onStartChange:l(c),onEndChange:l(d)},null,8,["startOptions","onStartChange","onEndChange"])]),_:1})]),E])}}});export{k as __pageData,O as default};
