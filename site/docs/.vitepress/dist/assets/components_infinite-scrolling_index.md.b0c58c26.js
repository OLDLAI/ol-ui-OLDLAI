import{f as D,g as i,c as n,b as l,w as y,a,d as F,r,o,F as C,h as A,p as h,i as u,e as p,t as g,_ as b}from"./app.83c446f7.js";import"https:////at.alicdn.com/t/c/font_3439532_oigkay6g43f.js";const t=s=>(h("data-v-046a1f04"),s=s(),u(),s),_=t(()=>a("h1",{id:"infinite-scrolling-无限滚动",tabindex:"-1"},[p("Infinite Scrolling 无限滚动 "),a("a",{class:"header-anchor",href:"#infinite-scrolling-无限滚动","aria-hidden":"true"},"#")],-1)),m=t(()=>a("p",null,"永远不会到底吗？确实",-1)),k=t(()=>a("h2",{id:"基本使用",tabindex:"-1"},[p("基本使用 "),a("a",{class:"header-anchor",href:"#基本使用","aria-hidden":"true"},"#")],-1)),E=t(()=>a("p",null,[a("code",null,"on-scroll-end"),p(" 滚动到底触发执行函数")],-1)),x=F(`<div class="language-html" data-v-046a1f04><button title="Copy Code" class="copy" data-v-046a1f04></button><span class="lang" data-v-046a1f04>html</span><pre class="shiki material-theme-palenight" tabindex="0" data-v-046a1f04><code data-v-046a1f04><span class="line" data-v-046a1f04><span style="color:#89DDFF;" data-v-046a1f04>&lt;</span><span style="color:#F07178;" data-v-046a1f04>template</span><span style="color:#89DDFF;" data-v-046a1f04>&gt;</span></span>
<span class="line" data-v-046a1f04><span style="color:#A6ACCD;" data-v-046a1f04>  </span><span style="color:#89DDFF;" data-v-046a1f04>&lt;</span><span style="color:#F07178;" data-v-046a1f04>f-infinite-scrolling</span><span style="color:#89DDFF;" data-v-046a1f04> </span><span style="color:#C792EA;" data-v-046a1f04>:on-scroll-end</span><span style="color:#89DDFF;" data-v-046a1f04>=</span><span style="color:#89DDFF;" data-v-046a1f04>&quot;</span><span style="color:#C3E88D;" data-v-046a1f04>onScrollEnd</span><span style="color:#89DDFF;" data-v-046a1f04>&quot;</span><span style="color:#89DDFF;" data-v-046a1f04>&gt;</span></span>
<span class="line" data-v-046a1f04><span style="color:#A6ACCD;" data-v-046a1f04>    </span><span style="color:#89DDFF;" data-v-046a1f04>&lt;</span><span style="color:#F07178;" data-v-046a1f04>div</span><span style="color:#89DDFF;" data-v-046a1f04> </span><span style="color:#C792EA;" data-v-046a1f04>v-for</span><span style="color:#89DDFF;" data-v-046a1f04>=</span><span style="color:#89DDFF;" data-v-046a1f04>&quot;</span><span style="color:#C3E88D;" data-v-046a1f04>item in length</span><span style="color:#89DDFF;" data-v-046a1f04>&quot;</span><span style="color:#89DDFF;" data-v-046a1f04> </span><span style="color:#C792EA;" data-v-046a1f04>:key</span><span style="color:#89DDFF;" data-v-046a1f04>=</span><span style="color:#89DDFF;" data-v-046a1f04>&quot;</span><span style="color:#C3E88D;" data-v-046a1f04>item</span><span style="color:#89DDFF;" data-v-046a1f04>&quot;</span><span style="color:#89DDFF;" data-v-046a1f04> </span><span style="color:#C792EA;" data-v-046a1f04>class</span><span style="color:#89DDFF;" data-v-046a1f04>=</span><span style="color:#89DDFF;" data-v-046a1f04>&quot;</span><span style="color:#C3E88D;" data-v-046a1f04>item</span><span style="color:#89DDFF;" data-v-046a1f04>&quot;</span><span style="color:#89DDFF;" data-v-046a1f04> </span><span style="color:#C792EA;" data-v-046a1f04>style</span><span style="color:#89DDFF;" data-v-046a1f04>=</span><span style="color:#89DDFF;" data-v-046a1f04>&quot;&quot;</span><span style="color:#89DDFF;" data-v-046a1f04>&gt;</span><span style="color:#A6ACCD;" data-v-046a1f04>{{ item }}</span><span style="color:#89DDFF;" data-v-046a1f04>&lt;/</span><span style="color:#F07178;" data-v-046a1f04>div</span><span style="color:#89DDFF;" data-v-046a1f04>&gt;</span></span>
<span class="line" data-v-046a1f04><span style="color:#A6ACCD;" data-v-046a1f04>  </span><span style="color:#89DDFF;" data-v-046a1f04>&lt;/</span><span style="color:#F07178;" data-v-046a1f04>f-infinite-scrolling</span><span style="color:#89DDFF;" data-v-046a1f04>&gt;</span></span>
<span class="line" data-v-046a1f04><span style="color:#89DDFF;" data-v-046a1f04>&lt;/</span><span style="color:#F07178;" data-v-046a1f04>template</span><span style="color:#89DDFF;" data-v-046a1f04>&gt;</span></span>
<span class="line" data-v-046a1f04></span>
<span class="line" data-v-046a1f04><span style="color:#89DDFF;" data-v-046a1f04>&lt;</span><span style="color:#F07178;" data-v-046a1f04>script</span><span style="color:#89DDFF;" data-v-046a1f04> </span><span style="color:#C792EA;" data-v-046a1f04>lang</span><span style="color:#89DDFF;" data-v-046a1f04>=</span><span style="color:#89DDFF;" data-v-046a1f04>&quot;</span><span style="color:#C3E88D;" data-v-046a1f04>ts</span><span style="color:#89DDFF;" data-v-046a1f04>&quot;</span><span style="color:#89DDFF;" data-v-046a1f04> </span><span style="color:#C792EA;" data-v-046a1f04>setup</span><span style="color:#89DDFF;" data-v-046a1f04>&gt;</span></span>
<span class="line" data-v-046a1f04><span style="color:#A6ACCD;" data-v-046a1f04>  </span><span style="color:#89DDFF;font-style:italic;" data-v-046a1f04>import</span><span style="color:#A6ACCD;" data-v-046a1f04> </span><span style="color:#89DDFF;" data-v-046a1f04>{</span><span style="color:#F07178;" data-v-046a1f04> </span><span style="color:#A6ACCD;" data-v-046a1f04>ref</span><span style="color:#F07178;" data-v-046a1f04> </span><span style="color:#89DDFF;" data-v-046a1f04>}</span><span style="color:#A6ACCD;" data-v-046a1f04> </span><span style="color:#89DDFF;font-style:italic;" data-v-046a1f04>from</span><span style="color:#A6ACCD;" data-v-046a1f04> </span><span style="color:#89DDFF;" data-v-046a1f04>&#39;</span><span style="color:#C3E88D;" data-v-046a1f04>vue</span><span style="color:#89DDFF;" data-v-046a1f04>&#39;</span></span>
<span class="line" data-v-046a1f04></span>
<span class="line" data-v-046a1f04><span style="color:#A6ACCD;" data-v-046a1f04>  </span><span style="color:#C792EA;" data-v-046a1f04>const</span><span style="color:#A6ACCD;" data-v-046a1f04> length </span><span style="color:#89DDFF;" data-v-046a1f04>=</span><span style="color:#A6ACCD;" data-v-046a1f04> </span><span style="color:#82AAFF;" data-v-046a1f04>ref</span><span style="color:#A6ACCD;" data-v-046a1f04>(</span><span style="color:#F78C6C;" data-v-046a1f04>20</span><span style="color:#A6ACCD;" data-v-046a1f04>)</span></span>
<span class="line" data-v-046a1f04></span>
<span class="line" data-v-046a1f04><span style="color:#A6ACCD;" data-v-046a1f04>  </span><span style="color:#C792EA;" data-v-046a1f04>const</span><span style="color:#A6ACCD;" data-v-046a1f04> onScrollEnd </span><span style="color:#89DDFF;" data-v-046a1f04>=</span><span style="color:#A6ACCD;" data-v-046a1f04> </span><span style="color:#89DDFF;" data-v-046a1f04>():</span><span style="color:#A6ACCD;" data-v-046a1f04> </span><span style="color:#FFCB6B;" data-v-046a1f04>void</span><span style="color:#A6ACCD;" data-v-046a1f04> </span><span style="color:#C792EA;" data-v-046a1f04>=&gt;</span><span style="color:#A6ACCD;" data-v-046a1f04> </span><span style="color:#89DDFF;" data-v-046a1f04>{</span></span>
<span class="line" data-v-046a1f04><span style="color:#F07178;" data-v-046a1f04>    </span><span style="color:#A6ACCD;" data-v-046a1f04>length</span><span style="color:#89DDFF;" data-v-046a1f04>.</span><span style="color:#A6ACCD;" data-v-046a1f04>value</span><span style="color:#F07178;" data-v-046a1f04> </span><span style="color:#89DDFF;" data-v-046a1f04>+=</span><span style="color:#F07178;" data-v-046a1f04> </span><span style="color:#F78C6C;" data-v-046a1f04>10</span></span>
<span class="line" data-v-046a1f04><span style="color:#F07178;" data-v-046a1f04>  </span><span style="color:#89DDFF;" data-v-046a1f04>}</span></span>
<span class="line" data-v-046a1f04><span style="color:#89DDFF;" data-v-046a1f04>&lt;/</span><span style="color:#F07178;" data-v-046a1f04>script</span><span style="color:#89DDFF;" data-v-046a1f04>&gt;</span></span>
<span class="line" data-v-046a1f04></span>
<span class="line" data-v-046a1f04><span style="color:#89DDFF;" data-v-046a1f04>&lt;</span><span style="color:#F07178;" data-v-046a1f04>style</span><span style="color:#89DDFF;" data-v-046a1f04> </span><span style="color:#C792EA;" data-v-046a1f04>scoped</span><span style="color:#89DDFF;" data-v-046a1f04>&gt;</span></span>
<span class="line" data-v-046a1f04><span style="color:#A6ACCD;" data-v-046a1f04>  </span><span style="color:#89DDFF;" data-v-046a1f04>.</span><span style="color:#FFCB6B;" data-v-046a1f04>item</span><span style="color:#A6ACCD;" data-v-046a1f04> </span><span style="color:#89DDFF;" data-v-046a1f04>{</span></span>
<span class="line" data-v-046a1f04><span style="color:#A6ACCD;" data-v-046a1f04>    </span><span style="color:#B2CCD6;" data-v-046a1f04>width</span><span style="color:#89DDFF;" data-v-046a1f04>:</span><span style="color:#A6ACCD;" data-v-046a1f04> </span><span style="color:#F78C6C;" data-v-046a1f04>100%</span><span style="color:#89DDFF;" data-v-046a1f04>;</span></span>
<span class="line" data-v-046a1f04><span style="color:#A6ACCD;" data-v-046a1f04>    </span><span style="color:#B2CCD6;" data-v-046a1f04>height</span><span style="color:#89DDFF;" data-v-046a1f04>:</span><span style="color:#A6ACCD;" data-v-046a1f04> </span><span style="color:#F78C6C;" data-v-046a1f04>40px</span><span style="color:#89DDFF;" data-v-046a1f04>;</span></span>
<span class="line" data-v-046a1f04><span style="color:#A6ACCD;" data-v-046a1f04>    </span><span style="color:#B2CCD6;" data-v-046a1f04>background-color</span><span style="color:#89DDFF;" data-v-046a1f04>:</span><span style="color:#A6ACCD;" data-v-046a1f04> </span><span style="color:#89DDFF;" data-v-046a1f04>#</span><span style="color:#A6ACCD;" data-v-046a1f04>96acf8</span><span style="color:#89DDFF;" data-v-046a1f04>;</span></span>
<span class="line" data-v-046a1f04><span style="color:#A6ACCD;" data-v-046a1f04>    </span><span style="color:#B2CCD6;" data-v-046a1f04>color</span><span style="color:#89DDFF;" data-v-046a1f04>:</span><span style="color:#A6ACCD;" data-v-046a1f04> </span><span style="color:#89DDFF;" data-v-046a1f04>#</span><span style="color:#A6ACCD;" data-v-046a1f04>fff</span><span style="color:#89DDFF;" data-v-046a1f04>;</span></span>
<span class="line" data-v-046a1f04><span style="color:#A6ACCD;" data-v-046a1f04>    </span><span style="color:#B2CCD6;" data-v-046a1f04>margin</span><span style="color:#89DDFF;" data-v-046a1f04>:</span><span style="color:#A6ACCD;" data-v-046a1f04> </span><span style="color:#F78C6C;" data-v-046a1f04>5px</span><span style="color:#A6ACCD;" data-v-046a1f04> </span><span style="color:#F78C6C;" data-v-046a1f04>0</span><span style="color:#89DDFF;" data-v-046a1f04>;</span></span>
<span class="line" data-v-046a1f04><span style="color:#A6ACCD;" data-v-046a1f04>    </span><span style="color:#B2CCD6;" data-v-046a1f04>text-align</span><span style="color:#89DDFF;" data-v-046a1f04>:</span><span style="color:#A6ACCD;" data-v-046a1f04> center</span><span style="color:#89DDFF;" data-v-046a1f04>;</span></span>
<span class="line" data-v-046a1f04><span style="color:#A6ACCD;" data-v-046a1f04>    </span><span style="color:#B2CCD6;" data-v-046a1f04>line-height</span><span style="color:#89DDFF;" data-v-046a1f04>:</span><span style="color:#A6ACCD;" data-v-046a1f04> </span><span style="color:#F78C6C;" data-v-046a1f04>40px</span><span style="color:#89DDFF;" data-v-046a1f04>;</span></span>
<span class="line" data-v-046a1f04><span style="color:#A6ACCD;" data-v-046a1f04>  </span><span style="color:#89DDFF;" data-v-046a1f04>}</span></span>
<span class="line" data-v-046a1f04><span style="color:#89DDFF;" data-v-046a1f04>&lt;/</span><span style="color:#F07178;" data-v-046a1f04>style</span><span style="color:#89DDFF;" data-v-046a1f04>&gt;</span></span>
<span class="line" data-v-046a1f04></span></code></pre></div><h2 id="attributes" tabindex="-1" data-v-046a1f04>Attributes <a class="header-anchor" href="#attributes" aria-hidden="true" data-v-046a1f04>#</a></h2><table data-v-046a1f04><thead data-v-046a1f04><tr data-v-046a1f04><th data-v-046a1f04>参数</th><th data-v-046a1f04>说明</th><th data-v-046a1f04>类型</th><th data-v-046a1f04>可选值</th><th data-v-046a1f04>默认值</th></tr></thead><tbody data-v-046a1f04><tr data-v-046a1f04><td data-v-046a1f04><code data-v-046a1f04>distance</code></td><td data-v-046a1f04>触发距离</td><td data-v-046a1f04>number</td><td data-v-046a1f04>——</td><td data-v-046a1f04>0</td></tr><tr data-v-046a1f04><td data-v-046a1f04><code data-v-046a1f04>loading</code></td><td data-v-046a1f04>开启加载</td><td data-v-046a1f04>boolean</td><td data-v-046a1f04>——</td><td data-v-046a1f04>false</td></tr><tr data-v-046a1f04><td data-v-046a1f04><code data-v-046a1f04>styles</code></td><td data-v-046a1f04>滚动组件样式</td><td data-v-046a1f04><a href="https://cn.vuejs.org/api/utility-types.html#cssproperties" target="_blank" rel="noreferrer" data-v-046a1f04>CSSProperties</a></td><td data-v-046a1f04>——</td><td data-v-046a1f04>——</td></tr><tr data-v-046a1f04><td data-v-046a1f04><code data-v-046a1f04>on-scroll-end</code></td><td data-v-046a1f04>滚动到底触发的回调</td><td data-v-046a1f04><a href="#scrollcallback" data-v-046a1f04>ScrollCallback</a></td><td data-v-046a1f04>——</td><td data-v-046a1f04>——</td></tr><tr data-v-046a1f04><td data-v-046a1f04><code data-v-046a1f04>on-scroll-when</code></td><td data-v-046a1f04>滚动时触发的回调</td><td data-v-046a1f04><a href="#scrollcallback" data-v-046a1f04>ScrollCallback</a></td><td data-v-046a1f04>——</td><td data-v-046a1f04>——</td></tr></tbody></table><h2 id="interface" tabindex="-1" data-v-046a1f04>Interface <a class="header-anchor" href="#interface" aria-hidden="true" data-v-046a1f04>#</a></h2><p data-v-046a1f04>组件导出以下类型定义：</p><div class="language-ts" data-v-046a1f04><button title="Copy Code" class="copy" data-v-046a1f04></button><span class="lang" data-v-046a1f04>ts</span><pre class="shiki material-theme-palenight" tabindex="0" data-v-046a1f04><code data-v-046a1f04><span class="line" data-v-046a1f04><span style="color:#89DDFF;font-style:italic;" data-v-046a1f04>import</span><span style="color:#A6ACCD;" data-v-046a1f04> </span><span style="color:#89DDFF;font-style:italic;" data-v-046a1f04>type</span><span style="color:#A6ACCD;" data-v-046a1f04> </span><span style="color:#89DDFF;" data-v-046a1f04>{</span></span>
<span class="line" data-v-046a1f04><span style="color:#F07178;" data-v-046a1f04>  </span><span style="color:#A6ACCD;" data-v-046a1f04>InfiniteScrollingInstance</span><span style="color:#89DDFF;" data-v-046a1f04>,</span></span>
<span class="line" data-v-046a1f04><span style="color:#F07178;" data-v-046a1f04>  </span><span style="color:#A6ACCD;" data-v-046a1f04>InfiniteScrollingProps</span><span style="color:#89DDFF;" data-v-046a1f04>,</span></span>
<span class="line" data-v-046a1f04><span style="color:#F07178;" data-v-046a1f04>  </span><span style="color:#A6ACCD;" data-v-046a1f04>ScrollCallback</span></span>
<span class="line" data-v-046a1f04><span style="color:#89DDFF;" data-v-046a1f04>}</span><span style="color:#A6ACCD;" data-v-046a1f04> </span><span style="color:#89DDFF;font-style:italic;" data-v-046a1f04>from</span><span style="color:#A6ACCD;" data-v-046a1f04> </span><span style="color:#89DDFF;" data-v-046a1f04>&#39;</span><span style="color:#C3E88D;" data-v-046a1f04>fighting-design</span><span style="color:#89DDFF;" data-v-046a1f04>&#39;</span></span>
<span class="line" data-v-046a1f04></span></code></pre></div><h3 id="scrollcallback" tabindex="-1" data-v-046a1f04>ScrollCallback <a class="header-anchor" href="#scrollcallback" aria-hidden="true" data-v-046a1f04>#</a></h3><div class="language-ts" data-v-046a1f04><button title="Copy Code" class="copy" data-v-046a1f04></button><span class="lang" data-v-046a1f04>ts</span><pre class="shiki material-theme-palenight" tabindex="0" data-v-046a1f04><code data-v-046a1f04><span class="line" data-v-046a1f04><span style="color:#C792EA;" data-v-046a1f04>type</span><span style="color:#A6ACCD;" data-v-046a1f04> </span><span style="color:#FFCB6B;" data-v-046a1f04>ScrollCallback</span><span style="color:#A6ACCD;" data-v-046a1f04> </span><span style="color:#89DDFF;" data-v-046a1f04>=</span><span style="color:#A6ACCD;" data-v-046a1f04> </span><span style="color:#89DDFF;" data-v-046a1f04>(</span><span style="color:#A6ACCD;font-style:italic;" data-v-046a1f04>distance</span><span style="color:#89DDFF;" data-v-046a1f04>:</span><span style="color:#A6ACCD;" data-v-046a1f04> </span><span style="color:#FFCB6B;" data-v-046a1f04>number</span><span style="color:#89DDFF;" data-v-046a1f04>)</span><span style="color:#A6ACCD;" data-v-046a1f04> </span><span style="color:#C792EA;" data-v-046a1f04>=&gt;</span><span style="color:#A6ACCD;" data-v-046a1f04> </span><span style="color:#FFCB6B;" data-v-046a1f04>void</span></span>
<span class="line" data-v-046a1f04></span></code></pre></div><h2 id="contributors" tabindex="-1" data-v-046a1f04>Contributors <a class="header-anchor" href="#contributors" aria-hidden="true" data-v-046a1f04>#</a></h2>`,9),S={href:"https://github.com/Tyh2001",target:"_blank"},B={href:"https://github.com/HoldingTheGhostAtTheGrave",target:"_blank"},P=JSON.parse('{"title":"Infinite Scrolling 无限滚动","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本使用","slug":"基本使用","link":"#基本使用","children":[]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[{"level":3,"title":"ScrollCallback","slug":"scrollcallback","link":"#scrollcallback","children":[]}]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"components/infinite-scrolling/index.md"}'),q={name:"components/infinite-scrolling/index.md"},I=D({...q,setup(s){const e=i(20),f=()=>{e.value+=10};return(w,N)=>{const v=r("ol-infinite"),d=r("f-avatar");return o(),n("div",null,[_,m,k,E,l(v,{"on-scroll-end":f},{default:y(()=>[(o(!0),n(C,null,A(e.value,c=>(o(),n("div",{key:c,class:"item",style:{}},g(c),1))),128))]),_:1}),x,a("a",S,[l(d,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})]),a("a",B,[l(d,{round:"",src:"https://avatars.githubusercontent.com/u/76578532?v=4"})])])}}});const G=b(I,[["__scopeId","data-v-046a1f04"]]);export{P as __pageData,G as default};