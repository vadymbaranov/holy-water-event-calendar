(this["webpackJsonpevent-calendar"]=this["webpackJsonpevent-calendar"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(10),o=n.n(r),i=(n(18),n(19),n(6)),s=n(4),l=n(3),u=n.n(l),d=n(0),b=function(e){var t=e.isFormShown,n=e.onFormShown,c=e.onNextMonth,a=e.onPrevMonth,r=e.onToday;return Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)("button",{type:"button",className:"button is-link is-outlined",onClick:function(){n(!t)},children:"+"}),Object(d.jsx)("h2",{className:"subtitle is-3",children:"Month Year"}),Object(d.jsx)("button",{type:"button",className:"button is-primary is-outlined",onClick:r,children:"Today"}),Object(d.jsx)("button",{type:"button",className:"button is-primary is-outlined",onClick:a,children:"<"}),Object(d.jsx)("button",{type:"button",className:"button is-primary is-outlined",onClick:c,children:">"})]})},j=n(11),m=n.n(j),O={get:function(){return JSON.parse(localStorage.getItem("events")||"[]")},post:function(e){var t=O.get();localStorage.setItem("events",JSON.stringify([].concat(Object(i.a)(t),[e])))},delete:function(e){var t=O.get().filter((function(t){return t.createdAt!==e}));localStorage.setItem("events",JSON.stringify([t]))},patch:function(e){var t=O.get(),n=t.find((function(t){return e.createdAt===t.createdAt})),c=t.filter((function(e){return e.createdAt!==(null===n||void 0===n?void 0:n.createdAt)}));localStorage.setItem("events",JSON.stringify([].concat(Object(i.a)(c),[e])))}};var h=function(e){var t=e.day,n=e.onFormShown,c=e.onSelectedEvent,a=t.dayNumber,r=t.weekNumber,o=O.get().filter((function(e){return t.id===e.createdAt}));return Object(d.jsx)("article",{className:m()("calendar__cell",{}),children:Object(d.jsxs)("div",{className:"cell__row",children:[Object(d.jsx)("p",{className:"week__number",children:r}),Object(d.jsx)("p",{className:"day__number",children:a}),Object(d.jsx)("div",{className:"box",children:o.map((function(e){return Object(d.jsx)("span",{"aria-label":"Save",role:"textbox",tabIndex:0,onClick:function(){n(!0),c(e)},onKeyPress:function(){n(!0),c(e)},children:e.title},e.createdAt)}))})]})})},f=n(9),v=n(13),x=n(12),p=function(e){var t=e.selectedEvent,n=e.onFormShown,a=Object(c.useState)(""),r=Object(s.a)(a,2),o=r[0],i=r[1],l=Object(c.useState)(""),b=Object(s.a)(l,2),j=b[0],m=b[1],h=Object(c.useState)(""),p=Object(s.a)(h,2),N=p[0],y=p[1],S=Object(c.useState)(""),_=Object(s.a)(S,2),g=_[0],Y=_[1];return Object(d.jsxs)("form",{className:"event__form",children:[Object(d.jsxs)("div",{className:"event__title",children:[Object(d.jsx)("h2",{className:"subtitle is-3",children:"Add new idea item"}),t&&Object(d.jsx)("p",{children:"Created at ".concat(null===t||void 0===t?void 0:t.createdAt)}),Object(d.jsx)("button",{onClick:function(){return n(!1)},type:"button",className:"event__close-form",children:"X"})]}),Object(d.jsx)("h3",{className:"subtitle is-4",children:"Title*"}),Object(d.jsx)("input",{name:"title",required:!0,placeholder:"Title goes here",value:o,onChange:function(e){return i(e.target.value)}}),Object(d.jsx)("input",{name:"description",placeholder:"Description",value:j,onChange:function(e){return m(e.target.value)}}),Object(d.jsx)("input",{type:"date",required:!0,className:"event__dateField",value:N,onChange:function(e){return y(e.target.value)}}),Object(d.jsx)("input",{type:"time",required:!0,className:"event__timeField",value:N,onChange:function(e){return Y(e.target.value)}}),t&&Object(d.jsx)("button",{"aria-label":"Save",type:"submit",className:"button is-danger is-outlined",children:Object(d.jsx)(v.a,{icon:x.a})}),Object(d.jsx)("button",{type:"submit",className:"button is-success is-outlined",disabled:!o||!N,onClick:function(){var e,c,a={createdAt:u()().format("DD.MM.YYYY HH:MM"),title:o,description:j,date:N,time:g};t?(e=Object(f.a)(Object(f.a)({},t),{},{title:o,date:N,time:g,description:j}),O.patch(e)):(c=a,O.post(c)),n(!1)},children:"Save"})]})},N=function(){var e=Object(c.useState)(u()()),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),o=Object(s.a)(r,2),l=o[0],j=o[1],m=Object(c.useState)(null),O=Object(s.a)(m,2),f=O[0],v=O[1];u.a.updateLocale("en",{week:{dow:1}});var x=u()().clone().startOf("month").startOf("week").clone().subtract(1,"day"),N=Object(i.a)(Array(42)).map((function(){return x.add(1,"day").clone()})).map((function(e){return{id:u()(e).format("DDMMYYYY"),date:"".concat(u()(e).format("YYYY"),"-").concat(u()(e).format("MM"),"-").concat(u()(e).format("DD")),dayNumber:u()(e).format("D"),weekNumber:u()(e).format("dd"),month:u()(e).format("M"),year:u()(e).format("YYYY")}}));return Object(d.jsx)("section",{className:"section",children:Object(d.jsxs)("div",{className:"calendar__container",children:[Object(d.jsxs)("div",{className:"calendar__header",children:[Object(d.jsx)("h1",{className:"title is-1",children:"Welcome to my calendar app!"}),Object(d.jsx)(b,{isFormShown:l,onFormShown:j,onNextMonth:function(){return a((function(e){return e.clone().add(1,"month")}))},onPrevMonth:function(){return a((function(e){return e.clone().subtract(1,"month")}))},onToday:function(){return a(u()())}})]}),Object(d.jsxs)("div",{className:"calendar__body",children:[l&&Object(d.jsx)(p,{selectedEvent:f,onFormShown:j}),N.map((function(e){return Object(d.jsx)(h,{day:e,onFormShown:j,onSelectedEvent:v},e.id)})),Object(d.jsx)("p",{children:n.format("DD-MMMM-YYYY")})]})]})})},y=function(){return Object(d.jsx)("main",{className:"main",children:Object(d.jsx)("div",{className:"main__container",children:Object(d.jsx)(N,{})})})};o.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.2b58fbaf.chunk.js.map