import{M as m,I as p,d as c,a9 as i,r as l,N as e,l as u}from"./entry.BJhbV0vX.js";import{u as d}from"./asyncData.BXvaSf5r.js";import f from"./Ellipsis.CHXfH5_Z.js";import y from"./ComponentPlaygroundData.DVGxRhGq.js";import"./TabsHeader.BeO_4u1B.js";import"./ComponentPlaygroundProps.DByYvRyb.js";import"./ProseH4.pl_d5lWG.js";import"./ProseCodeInline.B5PJpGFA.js";import"./Badge.CiVJKIeV.js";import"./MDCSlot.B4j690Qn.js";import"./slot.D9XGlclR.js";import"./ProseP.BAdOtNfM.js";import"./index.ZxEAa375.js";import"./ComponentPlaygroundSlots.vue.BYeYuUjb.js";import"./ComponentPlaygroundTokens.vue.Df8ekafa.js";async function g(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=l({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),V=u(h,[["__scopeId","data-v-f32a5a03"]]);export{V as default};
