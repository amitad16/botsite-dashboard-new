(this["webpackJsonpbotsite-dashboard-2"]=this["webpackJsonpbotsite-dashboard-2"]||[]).push([[6],{145:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return c}));var r=function(t){localStorage.setItem("currentProject",JSON.stringify(t))},a=function(){localStorage.removeItem("currentProject")},c=function(){var t=localStorage.getItem("currentProject");return t?JSON.parse(t):null}},147:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return l}));var r=n(8),a=n.n(r),c=n(15),o=n(3),u=n(26),i=n(6),s=function(){var t=Object(c.a)(a.a.mark((function t(e){var n,r,c,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(i.c)(),r="/api/".concat("v1","/project/").concat(e,"/details"),t.next=4,u.a.get(r,{headers:{Authorization:"Bearer ".concat(n)}});case 4:return c=t.sent,o=c.data,t.abrupt("return",o);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=n(145),f=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n({type:o.i.TRIGGER}),n({type:o.i.REQUEST}),"string"!==typeof t){e.next=11;break}return e.next=6,s(t);case 6:r=e.sent,Object(p.c)(r),n({type:o.i.SUCCESS,payload:r}),e.next=12;break;case 11:n({type:o.i.SUCCESS,payload:t});case 12:e.next=19;break;case 14:e.prev=14,e.t0=e.catch(0),c={},e.t0.response?c=e.t0.response.data:c.message=e.t0.message?e.t0.message:e.t0,n({type:o.i.FAILURE,payload:c});case 19:return e.prev=19,n({type:o.i.FULFIL}),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[0,14,19,22]])})));return function(t){return e.apply(this,arguments)}}()},l=function(){return function(t){t({type:o.j}),Object(p.b)()}}},149:function(t,e,n){"use strict";var r=n(0),a=n.n(r),c=n(21),o=n(4),u=(n(163),n(147)),i=n(145),s={setCurrentProject:u.a};e.a=Object(c.connect)(null,s)((function(t){var e=t.children,n=t.setCurrentProject,c=Object(o.h)().projectId;return Object(r.useEffect)((function(){var t=Object(i.a)();t&&t._id===c?n(t):n(c)}),[]),a.a.createElement("div",{className:"py-12 px-4 min-h-screen bg-secondary-1"},e)}))},163:function(t,e,n){},226:function(t,e,n){},245:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=(n(226),n(149)),o=function(){return a.a.createElement(c.a,null,a.a.createElement("div",{className:"ProjectHome ProjectHome--banner"},a.a.createElement("p",{className:"text-6xl text-primary-2 font-bold w-3/5"},"BotSite - An Interactive Video Platform")))};e.default=o}}]);
//# sourceMappingURL=6.95cc5dce.chunk.js.map