(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(t,e,n){t.exports={form:"TaskForm_form__31W-N","control-group":"TaskForm_control-group__m6T2w","error-text":"TaskForm_error-text__3RoZq"}},,,,function(t,e,n){t.exports={section:"Section_section__3QN43"}},function(t,e,n){t.exports={task:"TaskItem_task__1rhm-"}},function(t,e,n){t.exports={container:"Tasks_container__2nBq5"}},,,,,function(t,e,n){},,,function(t,e,n){"use strict";n.r(e);var r=n(7),c=n.n(r),a=(n(15),n(2)),o=n(1),s=n.n(o),i=n(8),u=n.n(i),d=n(0),l=function(t){return Object(d.jsx)("section",{className:u.a.section,children:t.children})},j=n(9),b=n.n(j),f=function(t){return Object(d.jsx)("li",{className:b.a.task,children:t.children})},h=n(10),p=n.n(h),m=function(t){var e=Object(d.jsx)("h2",{children:"No tasks found. Start adding some!"});t.items.length>0&&(e=Object(d.jsx)("ul",{children:t.items.map((function(t){return Object(d.jsx)(f,{children:t.text},t.id)}))}));var n=e;return t.error&&(n=Object(d.jsx)("button",{onClick:t.onFetch,children:"Try again"})),t.loading&&(n="Loading tasks..."),Object(d.jsx)(l,{children:Object(d.jsx)("div",{className:p.a.container,children:n})})},x=n(5),O=n(3),g=n.n(O),k=n(4),v=n.n(k),_=function(t){var e=Object(o.useState)(""),n=Object(a.a)(e,2),r=n[0],c=n[1],s=Object(o.useState)(!1),i=Object(a.a)(s,2),u=i[0],l=i[1],j=0===r.trim().length,b=j&&u,f=!1;r&&(f=!0);var h=b?"".concat(v.a.form," invalid"):"".concat(v.a.form);return Object(d.jsxs)("form",{className:h,onSubmit:function(e){e.preventDefault(),l(!0),j||(t.onEnterTask(r),c(""),l(!1))},children:[Object(d.jsxs)("div",{className:v.a["control-group"],children:[Object(d.jsx)("input",{type:"text",onChange:function(t){c(t.target.value)},onBlur:function(){l(!0)},value:r}),b&&Object(d.jsx)("p",{className:v.a["error-text"],children:"Your Input is Empty"})]}),Object(d.jsx)("button",{disabled:!f,children:t.loading?"Sending...":"Add Task"})]})},T=function(){var t=Object(o.useState)(!1),e=Object(a.a)(t,2),n=e[0],r=e[1],c=Object(o.useState)(null),s=Object(a.a)(c,2),i=s[0],u=s[1],d=Object(o.useCallback)(function(){var t=Object(x.a)(g.a.mark((function t(e,n){var c,a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(!0),u(null),t.prev=2,t.next=5,fetch(e.url,{method:e.method?e.method:"GET",body:e.body?JSON.stringify(e.body):null,header:e.header?e.header:{}});case 5:if((c=t.sent).ok){t.next=8;break}throw new Error("Request failed!");case 8:return t.next=10,c.json();case 10:a=t.sent,n(a),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),u(t.t0.message||"Something went wrong!");case 17:r(!1);case 18:case"end":return t.stop()}}),t,null,[[2,14]])})));return function(e,n){return t.apply(this,arguments)}}(),[]);return{isLoading:n,error:i,sendHttp:d}},y=function(t){var e=T(),n=e.isLoading,r=e.error,c=e.sendHttp,a=function(e){var n={id:e.name,text:e};t.onAddTask(n)},o=function(){var t=Object(x.a)(g.a.mark((function t(e){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c({url:"https://react-http-request-proje-bdcd3-default-rtdb.firebaseio.com/tasks.json",method:"POST",body:{text:e},headers:{"Content-Type":"application/json"}},a.bind(null,e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsxs)(l,{children:[Object(d.jsx)(_,{onEnterTask:o,loading:n}),r&&Object(d.jsx)("p",{children:r})]})};var S=function(){var t=Object(o.useState)([]),e=Object(a.a)(t,2),n=e[0],r=e[1],c=T(),i=c.isLoading,u=c.error,l=c.sendHttp;return Object(o.useEffect)((function(){l({url:"https://react-http-request-proje-bdcd3-default-rtdb.firebaseio.com/tasks.json"},(function(t){var e=[];for(var n in t)e.push({id:n,text:t[n].text});r(e)}))}),[l]),Object(d.jsxs)(s.a.Fragment,{children:[Object(d.jsx)(y,{onAddTask:function(t){r((function(e){return e.concat(t)}))}}),Object(d.jsx)(m,{items:n,loading:i,error:u,onFetch:l})]})};c.a.render(Object(d.jsx)(S,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.b87d0ccb.chunk.js.map