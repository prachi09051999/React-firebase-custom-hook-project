(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={section:"Section_section__3QN43"}},function(e,t,n){e.exports={task:"TaskItem_task__1rhm-"}},function(e,t,n){e.exports={container:"Tasks_container__2nBq5"}},function(e,t,n){e.exports={form:"TaskForm_form__31W-N"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var r=n(6),c=n.n(r),a=(n(15),n(3)),s=n(1),o=n.n(s),i=n(7),u=n.n(i),d=n(0),l=function(e){return Object(d.jsx)("section",{className:u.a.section,children:e.children})},j=n(8),f=n.n(j),b=function(e){return Object(d.jsx)("li",{className:f.a.task,children:e.children})},h=n(9),p=n.n(h),m=function(e){var t=Object(d.jsx)("h2",{children:"No tasks found. Start adding some!"});e.items.length>0&&(t=Object(d.jsx)("ul",{children:e.items.map((function(e){return Object(d.jsx)(b,{children:e.text},e.id)}))}));var n=t;return e.error&&(n=Object(d.jsx)("button",{onClick:e.onFetch,children:"Try again"})),e.loading&&(n="Loading tasks..."),Object(d.jsx)(l,{children:Object(d.jsx)("div",{className:p.a.container,children:n})})},x=n(4),O=n(2),k=n.n(O),v=n(10),g=n.n(v),T=function(e){var t=Object(s.useRef)();return Object(d.jsxs)("form",{className:g.a.form,onSubmit:function(n){n.preventDefault();var r=t.current.value;r.trim().length>0&&e.onEnterTask(r),t.current.value=""},children:[Object(d.jsx)("input",{type:"text",ref:t}),Object(d.jsx)("button",{children:e.loading?"Sending...":"Add Task"})]})},_=function(){var e=Object(s.useState)(!1),t=Object(a.a)(e,2),n=t[0],r=t[1],c=Object(s.useState)(null),o=Object(a.a)(c,2),i=o[0],u=o[1],d=Object(s.useCallback)(function(){var e=Object(x.a)(k.a.mark((function e(t,n){var c,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),u(null),e.prev=2,e.next=5,fetch(t.url,{method:t.method?t.method:"GET",body:t.body?JSON.stringify(t.body):null,header:t.header?t.header:{}});case 5:if((c=e.sent).ok){e.next=8;break}throw new Error("Request failed!");case 8:return e.next=10,c.json();case 10:a=e.sent,n(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),u(e.t0.message||"Something went wrong!");case 17:r(!1);case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t,n){return e.apply(this,arguments)}}(),[]);return{isLoading:n,error:i,sendHttp:d}},y=function(e){var t=_(),n=t.isLoading,r=t.error,c=t.sendHttp,a=function(t){var n={id:t.name,text:t};e.onAddTask(n)},s=function(){var e=Object(x.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c({url:"https://react-http-request-proje-bdcd3-default-rtdb.firebaseio.com/tasks.json",method:"POST",body:{text:t},headers:{"Content-Type":"application/json"}},a.bind(null,t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(l,{children:[Object(d.jsx)(T,{onEnterTask:s,loading:n}),r&&Object(d.jsx)("p",{children:r})]})};var w=function(){var e=Object(s.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1],c=_(),i=c.isLoading,u=c.error,l=c.sendHttp;return Object(s.useEffect)((function(){l({url:"https://react-http-request-proje-bdcd3-default-rtdb.firebaseio.com/tasks.json"},(function(e){var t=[];for(var n in e)t.push({id:n,text:e[n].text});r(t)}))}),[l]),Object(d.jsxs)(o.a.Fragment,{children:[Object(d.jsx)(y,{onAddTask:function(e){r((function(t){return t.concat(e)}))}}),Object(d.jsx)(m,{items:n,loading:i,error:u,onFetch:l})]})};c.a.render(Object(d.jsx)(w,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.aff65c59.chunk.js.map