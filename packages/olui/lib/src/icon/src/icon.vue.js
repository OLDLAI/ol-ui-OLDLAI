"use strict";var c=Object.create;var i=Object.defineProperty;var l=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var a=Object.getPrototypeOf,d=Object.prototype.hasOwnProperty;var p=(n,e,r,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of u(e))!d.call(n,t)&&t!==r&&i(n,t,{get:()=>e[t],enumerable:!(s=l(e,t))||s.enumerable});return n};var m=(n,e,r)=>(r=n!=null?c(a(n)):{},p(e||!n||!n.__esModule?i(r,"default",{value:n,enumerable:!0}):r,n));Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const o=require("vue"),f=require("./icon.js");require("./style/index.css");require("https:////at.alicdn.com/t/font_3439532_mj2vbrlosb.js");const _=["xlink:href"],h=o.defineComponent({name:"ol-icon"}),z=o.defineComponent({...h,props:f.iconProps,setup(n){const e=n;o.onMounted(()=>{import("https:////at.alicdn.com/t/c/font_3653999_v9boqzux0j.js")});const r=o.computed(()=>{const t=typeof e.size=="string"?e.size:`${e.size}px`;return{fill:e.color,width:t,height:t}}),s=o.computed(()=>["ol-icon",e.class]);return(t,g)=>(o.openBlock(),o.createElementBlock("svg",{class:o.normalizeClass(o.unref(s)),style:o.normalizeStyle(o.unref(r)),"aria-hidden":"true"},[o.createElementVNode("use",{"xlink:href":`#icon-${e.name}`},null,8,_)],6))}});exports.default=z;
