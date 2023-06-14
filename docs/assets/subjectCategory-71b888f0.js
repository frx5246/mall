import{_ as V,d as E,o as k,c as v,a as c,b as t,w as l,F as I,e as s,t as F}from"./index-bd1b4222.js";import{c as P,E as r,a as S,b as z,d as $,e as j,f as U,g as L}from"./el-table-column-cc507da5.js";import{E as O,a as W,b as B,c as N}from"./el-form-item-3b1dc9d4.js";import{E as D}from"./el-input-number-735c365c.js";import{g as T,a as A,d as M,b as q,u as G}from"./subjectCategory-26e5eb10.js";import"./el-message-95f39548.js";const H=E({data(){return{categories:[],page:{total:0,current:1,size:10},searchId:null,dialogFormVisible:!1,category:{categoryId:0,commentCount:0,content:"",description:"",forwardCount:0,id:0,showStatus:1,title:""},formLabelWidth:80}},mounted(){this.getCategoriesPage(1)},methods:{search(){if(this.searchId==null||this.searchId==""){alert("请输入专题分类后查询");return}T(this.searchId).then(e=>{e.data==null?this.categories=[]:(this.categories=[],this.categories.push(e.data.help))}).catch(e=>{console.log(e)})},research(){this.searchId=null,this.getCategoriesPage(1)},toEdit(e){this.dialogFormVisible=!0,this.category=P(e)},getCategoriesPage(e){A({current:e,size:10}).then(d=>{console.log(d);const g=d.data.page;this.categories=g.records,this.page=g}).catch(d=>{console.log(d)})},currentchange(e){this.getCategoriesPage(e),this.page.current=e},del(e){confirm("是否删除")==!0&&console.log(e),console.log(e),M(e).then(a=>{if(a.success)this.getCategoriesPage(this.page.current);else return!1}).catch(a=>{})},toAdd(){this.dialogFormVisible=!0,this.category={categoryId:0,commentCount:0,content:"",description:"",forwardCount:0,id:0,showStatus:1,title:""}},save(){const e=this.category;e.id==0?q(e).then(a=>{if(a.success)this.dialogFormVisible=!1,this.getCategoriesPage(this.page.current),r(a.msg);else return r(a.msg),!1}).catch(a=>{r("网络错误联系管理员")}):G(e).then(a=>{if(a.success)this.dialogFormVisible=!1,this.getCategoriesPage(this.page.current),r(a.msg);else return r(a.msg),!1}).catch(a=>{r("网络错误联系管理员")})}}}),J={style:{"margin-top":"10px"}},K={style:{width:"95%",margin:"0 auto"}},Q={class:"dialog-footer"};function R(e,a,d,g,X,Y){const m=B,u=O,i=W,n=j,f=S,b=z,p=D,h=U,y=L,_=N,C=$;return k(),v(I,null,[c("div",J,[c("div",K,[t(u,{label:"专题分类编号","label-width":110,style:{display:"inline-flex","margin-right":"10px"}},{default:l(()=>[t(m,{modelValue:e.searchId,"onUpdate:modelValue":a[0]||(a[0]=o=>e.searchId=o),placeholder:"请输入专题分类编号"},null,8,["modelValue"])]),_:1}),t(i,{type:"primary",onClick:e.search},{default:l(()=>[s("查询")]),_:1},8,["onClick"]),t(i,{type:"info",onClick:e.research},{default:l(()=>[s("重置")]),_:1},8,["onClick"]),t(i,{type:"success",onClick:e.toAdd,style:{float:"right","margin-right":"40px"}},{default:l(()=>[s("添加 ")]),_:1},8,["onClick"])]),t(f,{data:e.categories,"default-sort":{prop:"sort",order:"descending"},style:{width:"95%",margin:"0 auto"}},{default:l(()=>[t(n,{prop:"id",label:"编号",width:"80"}),t(n,{prop:"name",label:"类型名称",width:"120"}),t(n,{prop:"sort",label:"排序",sortable:"",width:"120"}),t(n,{prop:"subjectCount",label:"专题数量",width:"120"}),t(n,{label:"显示状态",width:"120"},{default:l(o=>[s(F(o.row.showStatus==0?"不显示":"显示"),1)]),_:1}),t(n,{fixed:"right",label:"功能管理",width:"140"},{default:l(o=>[t(i,{type:"warning",size:"small",onClick:w=>e.toEdit(o.row)},{default:l(()=>[s("更新")]),_:2},1032,["onClick"]),t(i,{type:"danger",size:"small",onClick:w=>e.del(o.row.id)},{default:l(()=>[s("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),t(b,{layout:"prev, pager, next","page-size":e.page.size,total:e.page.total,style:{width:"95%",margin:"0 auto"},onCurrentChange:e.currentchange},null,8,["page-size","total","onCurrentChange"])]),t(C,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":a[6]||(a[6]=o=>e.dialogFormVisible=o),title:"专题编辑"},{footer:l(()=>[c("span",Q,[t(i,{onClick:a[5]||(a[5]=o=>e.dialogFormVisible=!1)},{default:l(()=>[s("取消")]),_:1}),t(i,{type:"primary",onClick:e.save},{default:l(()=>[s("保存 ")]),_:1},8,["onClick"])])]),default:l(()=>[t(_,{model:e.category},{default:l(()=>[t(u,{label:"类型名称","label-width":e.formLabelWidth},{default:l(()=>[t(m,{modelValue:e.category.name,"onUpdate:modelValue":a[1]||(a[1]=o=>e.category.name=o),placeholder:"请输入类型名称",style:{width:"80%"}},null,8,["modelValue"])]),_:1},8,["label-width"]),t(u,{label:"排序","label-width":e.formLabelWidth},{default:l(()=>[t(p,{modelValue:e.category.sort,"onUpdate:modelValue":a[2]||(a[2]=o=>e.category.sort=o),placeholder:"请输入排序",style:{width:"80%"}},null,8,["modelValue"])]),_:1},8,["label-width"]),t(u,{label:"专题数量","label-width":e.formLabelWidth},{default:l(()=>[t(p,{modelValue:e.category.subjectCount,"onUpdate:modelValue":a[3]||(a[3]=o=>e.category.subjectCount=o),placeholder:"请输入专题数量",style:{width:"80%"}},null,8,["modelValue"])]),_:1},8,["label-width"]),t(u,{label:"显示状态","label-width":e.formLabelWidth},{default:l(()=>[t(y,{modelValue:e.category.showStatus,"onUpdate:modelValue":a[4]||(a[4]=o=>e.category.showStatus=o),placeholder:"请选择显示状态",style:{width:"80%"}},{default:l(()=>[t(h,{label:"不显示",value:0}),t(h,{label:"显示",value:1})]),_:1},8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const oe=V(H,[["render",R],["__scopeId","data-v-2fede460"]]);export{oe as default};
