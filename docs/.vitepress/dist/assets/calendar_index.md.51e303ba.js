import{r as o,D as p,h as v,i as _,G as m,u as n,z as r,l as h}from"./chunks/framework.1d3d0452.js";const u=r("h1",{id:"日历组件",tabindex:"-1"},[h("日历组件 "),r("a",{class:"header-anchor",href:"#日历组件","aria-label":'Permalink to "日历组件"'},"​")],-1),C=JSON.parse('{"title":"日历组件","description":"","frontmatter":{},"headers":[],"relativePath":"calendar/index.md"}'),x={name:"calendar/index.md"},k=Object.assign(x,{setup(f){let l=o([{title:"购物",start:"2021-11-11 10:00:00",end:"2021-11-11 12:00:00",editable:!0},{title:"学习",start:"2021-11-15 08:00:00",end:"2021-11-15 16:00:00"}]),s=e=>{let t={start:`${e.dateStr} 12:00:00`,end:`${e.dateStr} 13:00:00`,title:"吃饭"};l.value.push(t),console.log(e)},d=e=>{let t=document.createElement("div"),a=e.timeText.split(" - "),c=a[0].replace("上午","").replace("下午","").replace("时",""),i=a[1].replace("上午","").replace("下午","").replace("时","");return t.innerHTML=`
        <img src="src/assets/logo.png" style="width:20px;height:20px;">
         <div>开始时间: ${c}</div>
         <div>结束时间: ${i}</div>
         <div>标题: ${e.event._def.title}</div>
        `,{domNodes:[t]}};return(e,t)=>{const a=p("xc-calendar");return v(),_("div",null,[u,m(a,{style:{width:"800px",height:"600px"},events:n(l),eventContent:n(d),onDateClick:n(s)},null,8,["events","eventContent","onDateClick"])])}}});export{C as __pageData,k as default};
