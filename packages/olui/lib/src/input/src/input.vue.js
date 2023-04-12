"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),a=require("./input.js");require("./style/index.css");const C={class:"ol-input__inner",tabindex:"1"},h=["placeholder"],V={key:1,class:"after-inner"},g=e.defineComponent({name:"ol-input"}),k=e.defineComponent({...g,props:a.InputProps,emits:a.Emits,setup(c,{emit:l}){const r=c,u=e.ref(),s=e.ref(!1),i=o=>{const n=o.target;l("change",n.value)},t=e.computed({get(){return r.modelValue},set(o){l("update:modelValue",o)}}),p=e.computed(()=>["ol-input-wrapper",{"ol-input__focus":s.value,"ol-input__hasClear":r.hasClear}]),d=()=>{console.log("clear"),l("update:modelValue",""),u.value.focus(),u.value.value=""},m=()=>{s.value=!0},_=()=>{s.value=!1};return(o,n)=>{const f=e.resolveComponent("ol-icon");return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(e.unref(p))},[e.createCommentVNode("",!0),e.createElementVNode("div",C,[e.withDirectives(e.createElementVNode("input",{"onUpdate:modelValue":n[0]||(n[0]=v=>e.isRef(t)?t.value=v:null),onFocus:m,onBlur:_,onInput:i,class:"ol-input",placeholder:o.placeholder,type:"text",ref_key:"inputRef",ref:u},null,40,h),[[e.vModelText,e.unref(t)]])]),o.hasClear&&e.unref(t)?(e.openBlock(),e.createElementBlock("div",V,[e.createVNode(f,{size:18,name:"#icon-guanbi2",onClick:d})])):e.createCommentVNode("",!0)],2)}}});exports.default=k;
