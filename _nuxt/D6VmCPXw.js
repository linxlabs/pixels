import{s as V,V as b}from"./uMYhr8K_.js";import{m as k,q as x,r as C,s as _,t as y,v as I,j as c,e as w,d as G,V as f}from"./CK2GyviE.js";import{u as E}from"./CJbUupEe.js";import{L as N,ah as P,a9 as S,ai as T,z as i,_ as B,v as p,A as m,t as h,ac as j,aj as D,B as v,x as U,ak as A,y as z}from"./3saTICxt.js";const g=Symbol.for("vuetify:v-item-group"),F=N({...k(),...x({selectedClass:"v-item--selected"}),...C(),...P()},"VItemGroup"),L=S()({name:"VItemGroup",props:F(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:l}=e;const{themeClasses:u}=T(t),{isSelected:s,select:o,next:a,prev:n,selected:d}=_(t,g);return()=>i(t.tag,{class:["v-item-group",u.value,t.class],style:t.style},{default:()=>{var r;return[(r=l.default)==null?void 0:r.call(l,{isSelected:s,select:o,next:a,prev:n,selected:d.value})]}})}}),M=S()({name:"VItem",props:y(),emits:{"group:selected":t=>!0},setup(t,e){let{slots:l}=e;const{isSelected:u,select:s,toggle:o,selectedClass:a,value:n,disabled:d}=I(t,g);return()=>{var r;return(r=l.default)==null?void 0:r.call(l,{isSelected:u.value,selectedClass:a.value,select:s,toggle:o,value:n.value,disabled:d.value})}}}),$={data(){return{store:E(),e:1,model:0,fxspeed:0,run:!1,effects:Array.from({length:25}).map((t,e)=>({title:`Step ${e+1}`,subtitle:`Step ${e+1} subtitle`,value:e+1})),timer:null,timeout:null}},mounted(){this.receiveSettings()},methods:{onChange(){this.store.btStat&&(this.timer||(this.timer=V(()=>{this.$espconfig.writeEffect(c(this.store.apName,{fxspeed:this.fxspeed}))},300)),this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{clearInterval(this.timer),this.timer=null,this.timeout=null},800))},onClick(t){this.store.btStat&&this.$espconfig.writeEffect(c(this.store.apName,{effect:t}))},onSave(t){console.log("Save"),this.$espconfig.writeEffect(c(this.store.apName,{saveeffect:""}))},async receiveSettings(){if(this.$espconfig.effectUuid){const t=new TextDecoder("windows-1252");let e=await this.$espconfig.readEffect();if(e=w(this.store.apName,e),e=t.decode(e),console.log(e),e)return e=JSON.parse(e),this.fxspeed=e.fxspeed,this.model=e.effect-1,console.log(e.effect),e;this.dropdownMessage="-- SSID from ESP32 --"}}}},q=U("h2",null,"Effect",-1);function J(t,e,l,u,s,o){return h(),p("div",null,[i(G,null,{default:m(()=>[i(L,{mandatory:"","selected-class":"bg-purple",modelValue:s.model,"onUpdate:modelValue":e[0]||(e[0]=a=>s.model=a),disabled:!s.store.btStat},{default:m(()=>[q,(h(),p(j,null,D(25,a=>i(M,{key:a},{default:m(({selectedClass:n,select:d})=>[i(f,{minWidth:"55",disabled:!s.store.btStat,class:A(n),onClick:r=>{d(),o.onClick(a)}},{default:m(()=>[v(z(a),1)]),_:2},1032,["disabled","class","onClick"])]),_:2},1024)),64))]),_:1},8,["modelValue","disabled"]),i(b,{class:"pt-10",min:"0",max:"255",step:"1","thumb-label":"",modelValue:s.fxspeed,"onUpdate:modelValue":[e[1]||(e[1]=a=>s.fxspeed=a),o.onChange]},null,8,["modelValue","onUpdate:modelValue"]),i(f,{onClick:o.onSave,disabled:!s.store.btStat},{default:m(()=>[v("Save")]),_:1},8,["onClick","disabled"])]),_:1})])}const Q=B($,[["render",J]]);export{Q as default};
