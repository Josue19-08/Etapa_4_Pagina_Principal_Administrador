"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6521],{6521:(P,l,i)=>{i.r(l),i.d(l,{ion_input_password_toggle:()=>e});var r=i(8393),c=i(4929),u=i(333),d=i(3992),p=i(4921);const e=(()=>{let a=class{constructor(n){(0,r.r)(this,n),this.togglePasswordVisibility=()=>{const{inputElRef:s}=this;s&&(s.type="text"===s.type?"password":"text")},this.color=void 0,this.showIcon=void 0,this.hideIcon=void 0,this.type="password"}onTypeChange(n){"text"===n||"password"===n||(0,c.p)(`ion-input-password-toggle only supports inputs of type "text" or "password". Input of type "${n}" is not compatible.`,this.el)}connectedCallback(){const{el:n}=this,s=this.inputElRef=n.closest("ion-input");s?this.type=s.type:(0,c.p)("No ancestor ion-input found for ion-input-password-toggle. This component must be slotted inside of an ion-input.",n)}disconnectedCallback(){this.inputElRef=null}render(){var n,s;const{color:h,type:E}=this,g=(0,p.b)(this),I=null!==(n=this.showIcon)&&void 0!==n?n:d.x,C=null!==(s=this.hideIcon)&&void 0!==s?s:d.y,y="text"===E;return(0,r.h)(r.f,{key:"ed1c29726ce0c91548f0e2ada61e3f8b5c813d2d",class:(0,u.c)(h,{[g]:!0})},(0,r.h)("ion-button",{key:"9698eccdaedb86cf12d20acc53660371b3af3c55",mode:g,color:h,fill:"clear",shape:"round","aria-checked":y?"true":"false","aria-label":"show password",role:"switch",type:"button",onPointerDown:w=>{w.preventDefault()},onClick:this.togglePasswordVisibility},(0,r.h)("ion-icon",{key:"1f2119c30b56c800d9af44e6499445a0ebb466cf",slot:"icon-only","aria-hidden":"true",icon:y?C:I})))}get el(){return(0,r.i)(this)}static get watchers(){return{type:["onTypeChange"]}}};return a.style={ios:"",md:""},a})()},333:(P,l,i)=>{i.d(l,{c:()=>u,g:()=>p,h:()=>c,o:()=>_});var r=i(467);const c=(o,t)=>null!==t.closest(o),u=(o,t)=>"string"==typeof o&&o.length>0?Object.assign({"ion-color":!0,[`ion-color-${o}`]:!0},t):t,p=o=>{const t={};return(o=>void 0!==o?(Array.isArray(o)?o:o.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e):[])(o).forEach(e=>t[e]=!0),t},f=/^[a-z][a-z0-9+\-.]*:/,_=function(){var o=(0,r.A)(function*(t,e,a,n){if(null!=t&&"#"!==t[0]&&!f.test(t)){const s=document.querySelector("ion-router");if(s)return null!=e&&e.preventDefault(),s.push(t,a,n)}return!1});return function(e,a,n,s){return o.apply(this,arguments)}}()}}]);