import{l as b,n as V,o as x,p as C,j as c,b as k,V as f}from"./mGIYyGnK.js";import{m as y,c as I,b as w,V as G}from"./BOJ3csCV.js";import{s as E,V as N}from"./BOioV9Bs.js";import{J as P,ag as T,a7 as g,ah as _,z as i,_ as B,v as p,A as d,t as v,x as j,ab as D,ai as U,B as h,aj as A,y as z}from"./CUd5fla0.js";const S=Symbol.for("vuetify:v-item-group"),F=P({...y(),...b({selectedClass:"v-item--selected"}),...I(),...T()},"VItemGroup"),J=g()({name:"VItemGroup",props:F(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:l}=e;const{themeClasses:u}=_(t),{isSelected:s,select:o,next:a,prev:n,selected:m}=V(t,S);return()=>i(t.tag,{class:["v-item-group",u.value,t.class],style:t.style},{default:()=>{var r;return[(r=l.default)==null?void 0:r.call(l,{isSelected:s,select:o,next:a,prev:n,selected:m.value})]}})}}),M=g()({name:"VItem",props:x(),emits:{"group:selected":t=>!0},setup(t,e){let{slots:l}=e;const{isSelected:u,select:s,toggle:o,selectedClass:a,value:n,disabled:m}=C(t,S);return()=>{var r;return(r=l.default)==null?void 0:r.call(l,{isSelected:u.value,selectedClass:a.value,select:s,toggle:o,value:n.value,disabled:m.value})}}}),$={data(){return{store:w(),e:1,model:0,fxspeed:0,run:!1,effects:Array.from({length:25}).map((t,e)=>({title:`Step ${e+1}`,subtitle:`Step ${e+1} subtitle`,value:e+1})),timer:null,timeout:null}},mounted(){this.receiveSettings()},methods:{onChange(){this.store.btStat&&(this.timer||(this.timer=E(()=>{this.$espconfig.writeEffect(c(this.store.apName,{fxspeed:this.fxspeed}))},300)),this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{clearInterval(this.timer),this.timer=null,this.timeout=null},800))},onClick(t){this.store.btStat&&this.$espconfig.writeEffect(c(this.store.apName,{effect:t}))},onSave(t){console.log("Save"),this.$espconfig.writeEffect(c(this.store.apName,{saveeffect:""}))},async receiveSettings(){if(this.$espconfig.effectUuid){const t=new TextDecoder("windows-1252");let e=await this.$espconfig.readEffect();if(e=k(this.store.apName,e),e=t.decode(e),console.log(e),e)return e=JSON.parse(e),this.fxspeed=e.fxspeed,this.model=e.effect-1,console.log(e.effect),e;this.dropdownMessage="-- SSID from ESP32 --"}}}};function L(t,e,l,u,s,o){return v(),p("div",null,[i(G,{class:"mb-5"},{default:d(()=>[i(J,{mandatory:"","selected-class":"bg-purple",modelValue:s.model,"onUpdate:modelValue":e[0]||(e[0]=a=>s.model=a),disabled:!s.store.btStat},{default:d(()=>[e[2]||(e[2]=j("h2",null,"Effect",-1)),(v(),p(D,null,U(25,a=>i(M,{key:a},{default:d(({selectedClass:n,select:m})=>[i(f,{minWidth:"55",disabled:!s.store.btStat,class:A(n),onClick:r=>{m(),o.onClick(a)}},{default:d(()=>[h(z(a),1)]),_:2},1032,["disabled","class","onClick"])]),_:2},1024)),64))]),_:1},8,["modelValue","disabled"]),i(N,{class:"pt-10",min:"0",max:"255",step:"1","thumb-label":"",modelValue:s.fxspeed,"onUpdate:modelValue":[e[1]||(e[1]=a=>s.fxspeed=a),o.onChange]},null,8,["modelValue","onUpdate:modelValue"]),i(f,{onClick:o.onSave,disabled:!s.store.btStat},{default:d(()=>e[3]||(e[3]=[h("Save")])),_:1},8,["onClick","disabled"])]),_:1})])}const K=B($,[["render",L]]);export{K as default};
