(this.webpackJsonpdev_challenge=this.webpackJsonpdev_challenge||[]).push([[0],{15:function(n,e,t){n.exports=t(24)},20:function(n,e,t){},24:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(9),c=t.n(o),i=(t(20),t(3)),u=t.n(i),l=t(4),s=t(14),f=t(1),m=t(2);function d(){var n=Object(f.a)([" \n      height: 25px;\n      max-width: 280px;"]);return d=function(){return n},n}function p(){var n=Object(f.a)(["margin-left: auto;"]);return p=function(){return n},n}function v(){var n=Object(f.a)(["margin-left: auto;"]);return v=function(){return n},n}function g(){var n=Object(f.a)([" \n      display: flex;\n      flex-direction: row;"]);return g=function(){return n},n}function h(){var n=Object(f.a)([" \n      display: flex;\n      flex-direction: row;\n      justify-content: stretch;"]);return h=function(){return n},n}function x(){var n=Object(f.a)(["\n      opacity: 0.5;\n      padding: 5px 10px;\n      color: #0a1603;\n      display:flex;\n      gap: 20px;\n      flex-direction: column;"]);return x=function(){return n},n}function w(){var n=Object(f.a)(["\n      border-radius: 10px 10px 0px 0px;\n      width: 300px;\n      height: 300px;"]);return w=function(){return n},n}function b(){var n=Object(f.a)(["\n      margin: 10px;\n      border-radius: 10px;\n      box-shadow: 0px 5px 20px 0px #000000a6;\n      background: ","\n      "]);return b=function(){return n},n}var E=m.a.div(b(),(function(n){return B(n.score)})),j=m.a.img(w()),k=m.a.div(x()),O=m.a.div(h()),y=m.a.div(g()),_=m.a.div(v()),B=function(n){return n%2?"linear-gradient(#F5B041, #EB984E)":"linear-gradient(#7FB3D5, #85C1E9)"},C=m.a.div(p()),F=m.a.div(d()),H=function(n){window.open("".concat("https://www.reddit.com/").concat(n),"_blank")};function J(n){var e=n.posts,t=e.author,r=e.num_comments,o=e.title,c=e.permalink,i=e.ups,u=e.url,l=e.score,s=n.rank;return a.a.createElement(E,{score:l,onClick:function(){return H(c)}},a.a.createElement(j,{alt:"tumbnail",src:u,onError:function(n){n.target.onerror=null,n.target.src="/images/snoo.jpg"}}),a.a.createElement(k,null,a.a.createElement(y,null,a.a.createElement("div",null,"#",s+1),a.a.createElement(C,null,t)),a.a.createElement(F,{onClick:function(){return H(c)}},o),a.a.createElement(O,null,a.a.createElement("span",null,r," comments"),a.a.createElement(_,null,i," ups"))))}function P(){var n=Object(f.a)(["position: fixed;\n    display: flex;\n    justify-content: center;\n    text-align: center;\n    align-items: center;\n    width: 100%;\n    z-index: 100;\n    left: 0;\n    right: 0;\n    background-color: white;\n    background-image: url('/images/bg-header.png');\n"]);return P=function(){return n},n}var S=m.a.div(P());function W(){return a.a.createElement(S,null,a.a.createElement("h1",null,'Top 20 topics for "/r/ProgrammerHumor"'))}var z=t(13),D=t.n(z),I=function(){var n=Object(l.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",D()("https://www.reddit.com/r/ProgrammerHumor/top.json?limit=20").then((function(n){return n.json()})).then((function(n){var e,t;return(null===n||void 0===n||null===(e=n.data)||void 0===e||null===(t=e.children)||void 0===t?void 0:t.length)?n.data.children:[]}),(function(n){throw new Error(n.message)})).catch((function(n){return n.message})));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();function M(){var n=Object(f.a)(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-items: center;\n    justify-content: center;\n    position: relative;\n    top:150px;\n"]);return M=function(){return n},n}var T=m.a.div(M()),$=function(n){return n.sort((function(n,e){return n.data.num_comments<e.data.num_comments?1:-1}))},q=function(){var n=Object(r.useState)([]),e=Object(s.a)(n,2),t=e[0],o=e[1];return Object(r.useEffect)((function(){Object(l.a)(u.a.mark((function n(){var e,t;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,I();case 2:e=n.sent,t=$(e),o(t);case 5:case"end":return n.stop()}}),n)})))()}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(W,null),a.a.createElement(T,null,t.map((function(n,e){return a.a.createElement(J,{key:e,posts:n.data,rank:e})}))))};var A=function(){return a.a.createElement(q,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.1a110d3b.chunk.js.map