"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),f=require("./props.js");require("./style/index.css");const d={key:0,class:"f-infinite-scrolling__loading"},p=e.defineComponent({name:"ol-infinite"}),_=e.defineComponent({...p,props:f.Props,setup(i){const l=i,u=()=>({run:(o,...r)=>{o&&o(...r)}}),{run:s}=u(),t=e.ref(!1),c=e.ref(),a=()=>{if(l.loading)return;const n=c.value;if(!n)return;const o=Math.ceil(n.scrollTop+n.clientHeight+l.distance);s(l.onScrollWhen,Math.ceil(n.scrollTop)),o>=n.scrollHeight&&!t.value&&(t.value=!0,s(r=>{l.onScrollEnd(r),t.value=!1},o))};return(n,o)=>(e.openBlock(),e.createElementBlock("div",{ref_key:"scrollEl",ref:c,class:"f-infinite-scrolling",style:e.normalizeStyle(n.styles),onScroll:a},[e.renderSlot(n.$slots,"default"),n.loading?(e.openBlock(),e.createElementBlock("div",d,"加载中...")):e.createCommentVNode("",!0)],36))}});exports.default=_;
