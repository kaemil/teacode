(this.webpackJsonpteacode=this.webpackJsonpteacode||[]).push([[0],{14:function(t,e,c){},17:function(t,e,c){"use strict";c.r(e);var a=c(1),n=c(8),s=c.n(n),r=(c(14),c(7)),i=c(6),o=c.n(i),u=c(9),l=c(2),d=c(0);var j=function(t){return Object(d.jsxs)("div",{className:"contact__pagesSwitch",children:[Object(d.jsx)("button",{className:"contact__buttonSwitch",onClick:t.pageDown,children:"<"}),Object(d.jsx)("div",{className:"contact__displayValue",children:t.switchPage}),Object(d.jsx)("button",{className:"contact__buttonSwitch",onClick:t.pageUp,children:">"})]})};var h=function(t){return Object(d.jsx)("div",{className:"contact__searchInput",children:Object(d.jsx)("input",{type:"text",placeholder:"Search...",value:t.filterText,onChange:function(e){t.filteredText(e.target.value),t.filteredList(e.target.value),t.resetSwitch()}})})};var f=function(t){var e=[];if(null!==t.avatar)e.push(Object(d.jsx)("img",{src:t.avatar,alt:t.avatar},t.name));else{var c=t.name.charAt(0)+t.surname.charAt(0);e.push(c)}return Object(d.jsxs)("div",{className:"contact__listItem",onClick:function(){var e=document.getElementById(t.userID);e.hasAttribute("checked")?(e.removeAttribute("checked",""),t.deleteID(t.userID)):(e.setAttribute("checked",""),t.addID(t.userID))},children:[Object(d.jsx)("div",{className:"contact__avatar",children:e}),Object(d.jsxs)("div",{className:"contact__fullName",children:[t.name," ",t.surname]}),Object(d.jsx)("div",{className:"contact__checkbox",children:Object(d.jsx)("input",{type:"checkbox",id:t.userID})})]})};var b=function(t){var e=[];if(t.contactList.length>0)if(""===t.filterText){for(var c=20*(t.switchPage-1);c<=20*t.switchPage-1;c++)if(void 0!==t.contactList[c]){var a=t.contactList[c].first_name,n=t.contactList[c].last_name,s=t.contactList[c].avatar;e.push(Object(d.jsx)(f,{name:a,contactList:t.contactList,listFullLength:t.listFullLength,surname:n,avatar:s,userID:t.contactList[c].id,addID:t.addID,deleteID:t.deleteID},t.contactList[c].id))}}else for(var r=20*(t.switchPage-1);r<=20*t.switchPage-1;r++)if(void 0!==t.filterList[r]){var i=t.filterList[r].first_name,o=t.filterList[r].last_name,u=t.filterList[r].avatar;e.push(Object(d.jsx)(f,{name:i,surname:o,avatar:u,addID:t.addID,deleteID:t.deleteID,userID:t.contactList[r].id},t.contactList[r].id))}return Object(d.jsx)("div",{className:"contact__contactsList",children:e})};var v=function(){var t,e=Object(a.useState)([]),c=Object(l.a)(e,2),n=c[0],s=c[1],i=Object(a.useState)(1),f=Object(l.a)(i,2),v=f[0],m=f[1],O=Object(a.useState)(""),x=Object(l.a)(O,2),p=x[0],_=x[1],g=Object(a.useState)([]),L=Object(l.a)(g,2),w=L[0],I=L[1],D=Object(a.useState)(0),N=Object(l.a)(D,2),S=N[0],k=N[1],C=Object(a.useState)([]),P=Object(l.a)(C,2),y=P[0],A=P[1],E=function(){var t=Object(u.a)(o.a.mark((function t(){var e,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json");case 2:return e=t.sent,t.next=5,e.json();case 5:return c=t.sent,k(c.length),t.abrupt("return",s(c));case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(a.useEffect)((function(){E()}),[]),n.sort((t="last_name",function(e,c){return e[t]>c[t]?1:e[t]<c[t]?-1:0}));var T=function(){m(1),console.log(v)};return Object(a.useEffect)((function(){0!==y.length&&console.log(y)})),Object(d.jsxs)("div",{className:"contact__container",children:[Object(d.jsx)("div",{className:"contact__header",children:Object(d.jsx)("h2",{children:"List of Contacts"})}),Object(d.jsx)(h,{contactList:n,filteredText:function(t){_(t)},filteredList:function(t){var e=[];n.forEach((function(c){(c.first_name.toLowerCase().includes(t.toLowerCase())||c.last_name.toLowerCase().includes(t.toLowerCase()))&&e.push(c)})),""===t?k(n.length):(I(e),k(e.length))},resetSwitch:T}),Object(d.jsx)(b,{contactList:n,switchPage:v,filterText:p,filterList:w,addID:function(t){A([].concat(Object(r.a)(y),[t]))},deleteID:function(t){var e=y.indexOf(t);y.splice(e,1),A(Object(r.a)(y))},resetSwitch:T}),Object(d.jsx)(j,{switchPage:v,pageDown:function(){v>1&&m(v-1)},pageUp:function(){v<Math.round(S/20)&&m(v+1)}})]})};s.a.render(Object(d.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.4b3a5d97.chunk.js.map