import{f as r,g as b,c as t,b as v,w as D,d as y,r as F,o as n,F as i,h as C,p as A,i as h,a,e as c,t as u,_ as g}from"./app.ab693fa4.js";const s=d=>(A("data-v-db74c6d0"),d=d(),h(),d),_=s(()=>a("h1",{id:"infinite-scrolling-无限滚动",tabindex:"-1"},[c("Infinite Scrolling 无限滚动 "),a("a",{class:"header-anchor",href:"#infinite-scrolling-无限滚动","aria-hidden":"true"},"#")],-1)),f=s(()=>a("p",null,"永远不会到底吗？确实",-1)),m=s(()=>a("h2",{id:"基本使用",tabindex:"-1"},[c("基本使用 "),a("a",{class:"header-anchor",href:"#基本使用","aria-hidden":"true"},"#")],-1)),E=s(()=>a("p",null,[a("code",null,"on-scroll-end"),c(" 滚动到底触发执行函数")],-1)),x=y(`<div class="language-html" data-v-db74c6d0><button title="Copy Code" class="copy" data-v-db74c6d0></button><span class="lang" data-v-db74c6d0>html</span><pre class="shiki material-theme-palenight" tabindex="0" data-v-db74c6d0><code data-v-db74c6d0><span class="line" data-v-db74c6d0><span style="color:#89DDFF;" data-v-db74c6d0>&lt;</span><span style="color:#F07178;" data-v-db74c6d0>template</span><span style="color:#89DDFF;" data-v-db74c6d0>&gt;</span></span>
<span class="line" data-v-db74c6d0><span style="color:#A6ACCD;" data-v-db74c6d0>  </span><span style="color:#89DDFF;" data-v-db74c6d0>&lt;</span><span style="color:#F07178;" data-v-db74c6d0>f-infinite-scrolling</span><span style="color:#89DDFF;" data-v-db74c6d0> </span><span style="color:#C792EA;" data-v-db74c6d0>:on-scroll-end</span><span style="color:#89DDFF;" data-v-db74c6d0>=</span><span style="color:#89DDFF;" data-v-db74c6d0>&quot;</span><span style="color:#C3E88D;" data-v-db74c6d0>onScrollEnd</span><span style="color:#89DDFF;" data-v-db74c6d0>&quot;</span><span style="color:#89DDFF;" data-v-db74c6d0>&gt;</span></span>
<span class="line" data-v-db74c6d0><span style="color:#A6ACCD;" data-v-db74c6d0>    </span><span style="color:#89DDFF;" data-v-db74c6d0>&lt;</span><span style="color:#F07178;" data-v-db74c6d0>div</span><span style="color:#89DDFF;" data-v-db74c6d0> </span><span style="color:#C792EA;" data-v-db74c6d0>v-for</span><span style="color:#89DDFF;" data-v-db74c6d0>=</span><span style="color:#89DDFF;" data-v-db74c6d0>&quot;</span><span style="color:#C3E88D;" data-v-db74c6d0>item in length</span><span style="color:#89DDFF;" data-v-db74c6d0>&quot;</span><span style="color:#89DDFF;" data-v-db74c6d0> </span><span style="color:#C792EA;" data-v-db74c6d0>:key</span><span style="color:#89DDFF;" data-v-db74c6d0>=</span><span style="color:#89DDFF;" data-v-db74c6d0>&quot;</span><span style="color:#C3E88D;" data-v-db74c6d0>item</span><span style="color:#89DDFF;" data-v-db74c6d0>&quot;</span><span style="color:#89DDFF;" data-v-db74c6d0> </span><span style="color:#C792EA;" data-v-db74c6d0>class</span><span style="color:#89DDFF;" data-v-db74c6d0>=</span><span style="color:#89DDFF;" data-v-db74c6d0>&quot;</span><span style="color:#C3E88D;" data-v-db74c6d0>item</span><span style="color:#89DDFF;" data-v-db74c6d0>&quot;</span><span style="color:#89DDFF;" data-v-db74c6d0> </span><span style="color:#C792EA;" data-v-db74c6d0>style</span><span style="color:#89DDFF;" data-v-db74c6d0>=</span><span style="color:#89DDFF;" data-v-db74c6d0>&quot;&quot;</span><span style="color:#89DDFF;" data-v-db74c6d0>&gt;</span><span style="color:#A6ACCD;" data-v-db74c6d0>{{ item }}</span><span style="color:#89DDFF;" data-v-db74c6d0>&lt;/</span><span style="color:#F07178;" data-v-db74c6d0>div</span><span style="color:#89DDFF;" data-v-db74c6d0>&gt;</span></span>
<span class="line" data-v-db74c6d0><span style="color:#A6ACCD;" data-v-db74c6d0>  </span><span style="color:#89DDFF;" data-v-db74c6d0>&lt;/</span><span style="color:#F07178;" data-v-db74c6d0>f-infinite-scrolling</span><span style="color:#89DDFF;" data-v-db74c6d0>&gt;</span></span>
<span class="line" data-v-db74c6d0><span style="color:#89DDFF;" data-v-db74c6d0>&lt;/</span><span style="color:#F07178;" data-v-db74c6d0>template</span><span style="color:#89DDFF;" data-v-db74c6d0>&gt;</span></span>
<span class="line" data-v-db74c6d0></span>
<span class="line" data-v-db74c6d0><span style="color:#89DDFF;" data-v-db74c6d0>&lt;</span><span style="color:#F07178;" data-v-db74c6d0>script</span><span style="color:#89DDFF;" data-v-db74c6d0> </span><span style="color:#C792EA;" data-v-db74c6d0>lang</span><span style="color:#89DDFF;" data-v-db74c6d0>=</span><span style="color:#89DDFF;" data-v-db74c6d0>&quot;</span><span style="color:#C3E88D;" data-v-db74c6d0>ts</span><span style="color:#89DDFF;" data-v-db74c6d0>&quot;</span><span style="color:#89DDFF;" data-v-db74c6d0> </span><span style="color:#C792EA;" data-v-db74c6d0>setup</span><span style="color:#89DDFF;" data-v-db74c6d0>&gt;</span></span>
<span class="line" data-v-db74c6d0><span style="color:#A6ACCD;" data-v-db74c6d0>  </span><span style="color:#89DDFF;font-style:italic;" data-v-db74c6d0>import</span><span style="color:#A6ACCD;" data-v-db74c6d0> </span><span style="color:#89DDFF;" data-v-db74c6d0>{</span><span style="color:#F07178;" data-v-db74c6d0> </span><span style="color:#A6ACCD;" data-v-db74c6d0>ref</span><span style="color:#F07178;" data-v-db74c6d0> </span><span style="color:#89DDFF;" data-v-db74c6d0>}</span><span style="color:#A6ACCD;" data-v-db74c6d0> </span><span style="color:#89DDFF;font-style:italic;" data-v-db74c6d0>from</span><span style="color:#A6ACCD;" data-v-db74c6d0> </span><span style="color:#89DDFF;" data-v-db74c6d0>&#39;</span><span style="color:#C3E88D;" data-v-db74c6d0>vue</span><span style="color:#89DDFF;" data-v-db74c6d0>&#39;</span></span>
<span class="line" data-v-db74c6d0></span>
<span class="line" data-v-db74c6d0><span style="color:#A6ACCD;" data-v-db74c6d0>  </span><span style="color:#C792EA;" data-v-db74c6d0>const</span><span style="color:#A6ACCD;" data-v-db74c6d0> length </span><span style="color:#89DDFF;" data-v-db74c6d0>=</span><span style="color:#A6ACCD;" data-v-db74c6d0> </span><span style="color:#82AAFF;" data-v-db74c6d0>ref</span><span style="color:#A6ACCD;" data-v-db74c6d0>(</span><span style="color:#F78C6C;" data-v-db74c6d0>20</span><span style="color:#A6ACCD;" data-v-db74c6d0>)</span></span>
<span class="line" data-v-db74c6d0></span>
<span class="line" data-v-db74c6d0><span style="color:#A6ACCD;" data-v-db74c6d0>  </span><span style="color:#C792EA;" data-v-db74c6d0>const</span><span style="color:#A6ACCD;" data-v-db74c6d0> onScrollEnd </span><span style="color:#89DDFF;" data-v-db74c6d0>=</span><span style="color:#A6ACCD;" data-v-db74c6d0> </span><span style="color:#89DDFF;" data-v-db74c6d0>():</span><span style="color:#A6ACCD;" data-v-db74c6d0> </span><span style="color:#FFCB6B;" data-v-db74c6d0>void</span><span style="color:#A6ACCD;" data-v-db74c6d0> </span><span style="color:#C792EA;" data-v-db74c6d0>=&gt;</span><span style="color:#A6ACCD;" data-v-db74c6d0> </span><span style="color:#89DDFF;" data-v-db74c6d0>{</span></span>
<span class="line" data-v-db74c6d0><span style="color:#F07178;" data-v-db74c6d0>    </span><span style="color:#A6ACCD;" data-v-db74c6d0>length</span><span style="color:#89DDFF;" data-v-db74c6d0>.</span><span style="color:#A6ACCD;" data-v-db74c6d0>value</span><span style="color:#F07178;" data-v-db74c6d0> </span><span style="color:#89DDFF;" data-v-db74c6d0>+=</span><span style="color:#F07178;" data-v-db74c6d0> </span><span style="color:#F78C6C;" data-v-db74c6d0>10</span></span>
<span class="line" data-v-db74c6d0><span style="color:#F07178;" data-v-db74c6d0>  </span><span style="color:#89DDFF;" data-v-db74c6d0>}</span></span>
<span class="line" data-v-db74c6d0><span style="color:#89DDFF;" data-v-db74c6d0>&lt;/</span><span style="color:#F07178;" data-v-db74c6d0>script</span><span style="color:#89DDFF;" data-v-db74c6d0>&gt;</span></span>
<span class="line" data-v-db74c6d0></span>
<span class="line" data-v-db74c6d0><span style="color:#89DDFF;" data-v-db74c6d0>&lt;</span><span style="color:#F07178;" data-v-db74c6d0>style</span><span style="color:#89DDFF;" data-v-db74c6d0> </span><span style="color:#C792EA;" data-v-db74c6d0>scoped</span><span style="color:#89DDFF;" data-v-db74c6d0>&gt;</span></span>
<span class="line" data-v-db74c6d0><span style="color:#A6ACCD;" data-v-db74c6d0>  </span><span style="color:#89DDFF;" data-v-db74c6d0>.</span><span style="color:#FFCB6B;" data-v-db74c6d0>item</span><span style="color:#A6ACCD;" data-v-db74c6d0> </span><span style="color:#89DDFF;" data-v-db74c6d0>{</span></span>
<span class="line" data-v-db74c6d0><span style="color:#A6ACCD;" data-v-db74c6d0>    </span><span style="color:#B2CCD6;" data-v-db74c6d0>width</span><span style="color:#89DDFF;" data-v-db74c6d0>:</span><span style="color:#A6ACCD;" data-v-db74c6d0> </span><span style="color:#F78C6C;" data-v-db74c6d0>100%</span><span style="color:#89DDFF;" data-v-db74c6d0>;</span></span>
<span class="line" data-v-db74c6d0><span style="color:#A6ACCD;" data-v-db74c6d0>    </span><span style="color:#B2CCD6;" data-v-db74c6d0>height</span><span style="color:#89DDFF;" data-v-db74c6d0>:</span><span style="color:#A6ACCD;" data-v-db74c6d0> </span><span style="color:#F78C6C;" data-v-db74c6d0>40px</span><span style="color:#89DDFF;" data-v-db74c6d0>;</span></span>
<span class="line" data-v-db74c6d0><span style="color:#A6ACCD;" data-v-db74c6d0>    </span><span style="color:#B2CCD6;" data-v-db74c6d0>background-color</span><span style="color:#89DDFF;" data-v-db74c6d0>:</span><span style="color:#A6ACCD;" data-v-db74c6d0> </span><span style="color:#89DDFF;" data-v-db74c6d0>#</span><span style="color:#A6ACCD;" data-v-db74c6d0>96acf8</span><span style="color:#89DDFF;" data-v-db74c6d0>;</span></span>
<span class="line" data-v-db74c6d0><span style="color:#A6ACCD;" data-v-db74c6d0>    </span><span style="color:#B2CCD6;" data-v-db74c6d0>color</span><span style="color:#89DDFF;" data-v-db74c6d0>:</span><span style="color:#A6ACCD;" data-v-db74c6d0> </span><span style="color:#89DDFF;" data-v-db74c6d0>#</span><span style="color:#A6ACCD;" data-v-db74c6d0>fff</span><span style="color:#89DDFF;" data-v-db74c6d0>;</span></span>
<span class="line" data-v-db74c6d0><span style="color:#A6ACCD;" data-v-db74c6d0>    </span><span style="color:#B2CCD6;" data-v-db74c6d0>margin</span><span style="color:#89DDFF;" data-v-db74c6d0>:</span><span style="color:#A6ACCD;" data-v-db74c6d0> </span><span style="color:#F78C6C;" data-v-db74c6d0>5px</span><span style="color:#A6ACCD;" data-v-db74c6d0> </span><span style="color:#F78C6C;" data-v-db74c6d0>0</span><span style="color:#89DDFF;" data-v-db74c6d0>;</span></span>
<span class="line" data-v-db74c6d0><span style="color:#A6ACCD;" data-v-db74c6d0>    </span><span style="color:#B2CCD6;" data-v-db74c6d0>text-align</span><span style="color:#89DDFF;" data-v-db74c6d0>:</span><span style="color:#A6ACCD;" data-v-db74c6d0> center</span><span style="color:#89DDFF;" data-v-db74c6d0>;</span></span>
<span class="line" data-v-db74c6d0><span style="color:#A6ACCD;" data-v-db74c6d0>    </span><span style="color:#B2CCD6;" data-v-db74c6d0>line-height</span><span style="color:#89DDFF;" data-v-db74c6d0>:</span><span style="color:#A6ACCD;" data-v-db74c6d0> </span><span style="color:#F78C6C;" data-v-db74c6d0>40px</span><span style="color:#89DDFF;" data-v-db74c6d0>;</span></span>
<span class="line" data-v-db74c6d0><span style="color:#A6ACCD;" data-v-db74c6d0>  </span><span style="color:#89DDFF;" data-v-db74c6d0>}</span></span>
<span class="line" data-v-db74c6d0><span style="color:#89DDFF;" data-v-db74c6d0>&lt;/</span><span style="color:#F07178;" data-v-db74c6d0>style</span><span style="color:#89DDFF;" data-v-db74c6d0>&gt;</span></span>
<span class="line" data-v-db74c6d0></span></code></pre></div><h2 id="attributes" tabindex="-1" data-v-db74c6d0>Attributes <a class="header-anchor" href="#attributes" aria-hidden="true" data-v-db74c6d0>#</a></h2><table data-v-db74c6d0><thead data-v-db74c6d0><tr data-v-db74c6d0><th data-v-db74c6d0>参数</th><th data-v-db74c6d0>说明</th><th data-v-db74c6d0>类型</th><th data-v-db74c6d0>可选值</th><th data-v-db74c6d0>默认值</th></tr></thead><tbody data-v-db74c6d0><tr data-v-db74c6d0><td data-v-db74c6d0><code data-v-db74c6d0>distance</code></td><td data-v-db74c6d0>触发距离</td><td data-v-db74c6d0>number</td><td data-v-db74c6d0>——</td><td data-v-db74c6d0>0</td></tr><tr data-v-db74c6d0><td data-v-db74c6d0><code data-v-db74c6d0>loading</code></td><td data-v-db74c6d0>开启加载</td><td data-v-db74c6d0>boolean</td><td data-v-db74c6d0>——</td><td data-v-db74c6d0>false</td></tr><tr data-v-db74c6d0><td data-v-db74c6d0><code data-v-db74c6d0>styles</code></td><td data-v-db74c6d0>滚动组件样式</td><td data-v-db74c6d0><a href="https://cn.vuejs.org/api/utility-types.html#cssproperties" target="_blank" rel="noreferrer" data-v-db74c6d0>CSSProperties</a></td><td data-v-db74c6d0>——</td><td data-v-db74c6d0>——</td></tr><tr data-v-db74c6d0><td data-v-db74c6d0><code data-v-db74c6d0>on-scroll-end</code></td><td data-v-db74c6d0>滚动到底触发的回调</td><td data-v-db74c6d0><a href="#scrollcallback" data-v-db74c6d0>ScrollCallback</a></td><td data-v-db74c6d0>——</td><td data-v-db74c6d0>——</td></tr><tr data-v-db74c6d0><td data-v-db74c6d0><code data-v-db74c6d0>on-scroll-when</code></td><td data-v-db74c6d0>滚动时触发的回调</td><td data-v-db74c6d0><a href="#scrollcallback" data-v-db74c6d0>ScrollCallback</a></td><td data-v-db74c6d0>——</td><td data-v-db74c6d0>——</td></tr></tbody></table>`,3),w=JSON.parse('{"title":"Infinite Scrolling 无限滚动","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本使用","slug":"基本使用","link":"#基本使用","children":[]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]}],"relativePath":"components/infinite-scrolling/index.md"}'),S={name:"components/infinite-scrolling/index.md"},B=r({...S,setup(d){const l=b(20),p=()=>{l.value+=10};return(k,q)=>{const e=F("ol-infinite");return n(),t("div",null,[_,f,m,E,v(e,{"on-scroll-end":p},{default:D(()=>[(n(!0),t(i,null,C(l.value,o=>(n(),t("div",{key:o,class:"item",style:{}},u(o),1))),128))]),_:1}),x])}}});const N=g(B,[["__scopeId","data-v-db74c6d0"]]);export{w as __pageData,N as default};