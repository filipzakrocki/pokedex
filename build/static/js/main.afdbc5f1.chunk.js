(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],[,,,,,function(e,t,n){e.exports=n.p+"static/media/pokeball.f7b41b0b.png"},,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.7bbe3170.png"},,,,,,function(e,t,n){e.exports=n(72)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(4),c=n.n(l),o=(n(31),n(32),n(33),n(20)),u=n.n(o),s=(n(34),function(){return a.a.createElement("div",{className:"Searchbar-logo__wrapper"},a.a.createElement("img",{className:"Searchbar-logo",src:u.a,alt:"logo"}))}),i=n(1),m=(n(41),Object(i.b)((function(e){return{results:e.search.results}}),null)((function(e){return a.a.createElement("div",{className:"poke-circle"},a.a.createElement("div",{className:"poke-circle2"},a.a.createElement("div",{className:"poke-circle3"},e.results&&e.results.length>0?e.results.length:"")))}))),d=(n(42),function(){return a.a.createElement("div",{className:"Searchbar-label__wrapper"},a.a.createElement("label",{className:"Searchbar-label"},"What pokemon card are you looking for?"))}),p=(n(43),n(44),function(){return a.a.createElement("button",{className:"Searchbar-button Searchbar-tooltip"},"?",a.a.createElement("span",{className:"Searchbar-tooltiptext"},a.a.createElement("p",null,"Tip: You can add filters to your search with: hp, attackDamage, attackCost, retreatCost."),a.a.createElement("p",null,"Example: 'Pikachu hp>70 attackDamage=80'")))}),E=n(10),f=n.n(E),h=n(22),g=n(23),b=n.n(g),y=function(e){return function(){var t=Object(h.a)(f.a.mark((function t(n){var r,a,l,c,o;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="https://api.pokemontcg.io/v1/cards",document.title="Pokedex".concat(": "+e),n({type:"FETCH_STARTED"}),n({type:"CLEAR_LOADED_IMAGES"}),e&&(l=e.split(" ").map((function(e,t){var n=e.replace(">","=gt").replace("<","=lt");return t>0?"&".concat(n):n.includes("=")?n:"name=".concat(e)})),r="?".concat(l.join("")),a="https://api.pokemontcg.io/v1/cards"+r),t.prev=5,t.next=8,b.a.get(a);case 8:return c=t.sent,t.next=11,c.data.cards;case 11:o=t.sent,n((s=o,console.log(s),{type:"SET_RESULTS",results:s})),n({type:"FETCH_FINISHED"}),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(5),n((u=t.t0,console.log(u),{type:"SET_ERROR",error:u})),n({type:"FETCH_FINISHED"});case 20:case"end":return t.stop()}var u,s}),t,null,[[5,16]])})));return function(e){return t.apply(this,arguments)}}()},O=(n(63),Object(i.b)((function(e){return{query:e.search.query,results:e.search.results}}),(function(e){return{setQuery:function(t){return e(function(e){return{type:"SET_SEARCH_QUERY",query:e}}(t))},fetchPokemon:function(t){return e(y(t))}}}))((function(e){return a.a.createElement("input",{className:"Searchbar-input",type:"text",placeholder:"Search for Pokemon TCG cards!",onChange:function(t){return e.setQuery(t.target.value)},onKeyPress:function(t){return"Enter"===t.key?e.fetchPokemon(e.query):null}})}))),v=(n(64),n(5)),S=n.n(v),_=Object(i.b)((function(e){return{query:e.search.query}}),(function(e){return{fetchPokemon:function(t){return e(y(t))}}}))((function(e){return a.a.createElement("button",{className:"Searchbar-button",onClick:function(){return e.fetchPokemon(e.query)}},a.a.createElement("img",{src:S.a,alt:"Search",className:"Searchbar-buttonImg"}))})),k=function(e){return a.a.createElement("div",{className:"Searchbar-input__wrapper"},a.a.createElement(p,null),a.a.createElement(O,null),a.a.createElement(_,null))},C=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"Search-wrapper"},a.a.createElement(s,null),a.a.createElement(d,null),a.a.createElement(k,null)),a.a.createElement("div",{style:{position:"absolute"}},a.a.createElement(m,null)))},N=(n(65),function(){return a.a.createElement("img",{alt:"spinner",className:"rotate",src:S.a})}),j=n(6),P=(n(66),Object(i.b)(null,(function(e){return{openModal:function(t){return e({type:"OPEN_MODAL",selectedCard:t})},setLoadedImages:function(){return e({type:"SET_LOADED_IMAGES"})}}}))((function(e){var t=Object(r.useState)(!1),n=Object(j.a)(t,2),l=n[0],c=n[1],o=l?a.a.createElement("img",{className:"Card",alt:e.name,src:e.imageUrl,title:e.name,id:e.id,onClick:function(){return e.openModal(e.index)}}):null;return a.a.createElement(a.a.Fragment,null,o,a.a.createElement("div",{style:{display:"none"}},a.a.createElement("img",{src:e.imageUrl,alt:"placeholder",onLoad:function(){c(!0),e.setLoadedImages()}})))}))),I=(n(67),Object(i.b)((function(e){return{results:e.search.results,loading:e.search.loading,error:e.search.error,loadedImages:e.search.loadedImages}}),null)((function(e){var t=null,n=null,r=null,l={display:"none"};return e.loading?(n=a.a.createElement(N,null),t=null):e.error?(n=null,r=a.a.createElement("h3",null,"ERROR: ",e.error.message,"!")):e.results&&0!==e.results.length?(n=a.a.createElement(N,null),e.results.length===e.loadedImages&&(l={display:"block"},n=null),t=e.results.map((function(e,t){return a.a.createElement(P,{key:e.id,id:e.id,index:t,name:e.name,imageUrl:e.imageUrl})}))):e.results&&0===e.results.length&&(r=a.a.createElement("h3",null,"No results found....")),a.a.createElement("div",{className:"Results"},n,r,a.a.createElement("div",{style:l},t))}))),D=(n(68),n(69),n(70),function(e){var t=e.card;return a.a.createElement("div",{className:"leftPanel",onClick:function(e){return e.stopPropagation()}},a.a.createElement("img",{title:t.name,alt:t.name,src:t.imageUrlHiRes}),a.a.createElement("p",null,"Artist: ",t.artist))}),R=(n(71),function(e){var t=e.card;return a.a.createElement("div",{className:"rightPanel",onClick:function(e){return e.stopPropagation()}},a.a.createElement("h3",{className:"rightPanel_title"},"Card information for ",t.name),a.a.createElement("div",{className:"rightPanel_details"},a.a.createElement("p",null,"Hit Points: ",t.hp),a.a.createElement("p",null,"Pokemon type(s): ",t.types?t.types.join(" "):null),a.a.createElement("p",null,"Subtype: ",t.subtype),a.a.createElement("p",null,"Reatreat Cost: ",t.retreatCost?t.retreatCost.join(" "):"0"),a.a.createElement("h4",null,"Card data"),a.a.createElement("p",null,"Set: ",t.set),a.a.createElement("p",null,"Series: ",t.series),a.a.createElement("p",null,"Card's Rarity: ",t.rarity),a.a.createElement("p",null,"Unique ID: ",t.id)))}),w=Object(i.b)((function(e){return{selectedCard:e.search.zoomedCardIndex,results:e.search.results}}))((function(e){var t=e.results[e.selectedCard],n=Object(r.useState)(!1),l=Object(j.a)(n,2),c=l[0],o=l[1];document.title=t.name;var u=c?a.a.createElement("div",{className:"zoomedWrapper"},a.a.createElement(D,{card:t}),a.a.createElement(R,{card:t})):a.a.createElement(N,null);return a.a.createElement(a.a.Fragment,null,u,a.a.createElement("div",{style:{display:"none"}},a.a.createElement("img",{src:t.imageUrlHiRes,alt:"placeholder",onLoad:function(){return o(!0)}})))})),T=Object(i.b)((function(e){return{modalOpen:e.search.modalOpen,query:e.search.query}}),(function(e){return{closeModal:function(){return e({type:"CLOSE_MODAL"})}}}))((function(e){return e.modalOpen?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"Modal",onClick:function(){e.closeModal(),document.title="Pokedex: ".concat(e.query)}},a.a.createElement(w,null))):null}));var x=function(e){return a.a.createElement("div",{className:"App"},a.a.createElement(T,null),a.a.createElement(C,null),a.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=n(24);function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var q=function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(n,!0).forEach((function(t){Object(A.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},t)},M={query:null,results:null,loading:!1,modalOpen:!1,zoomedCardIndex:null,loadedImages:0,error:null},H=function(e,t){return q(e,{query:t.query})},F=function(e,t){return q(e,{results:t.results})},U=function(e,t){return q(e,{error:t.error})},z=function(e,t){return q(e,{loadedImages:e.loadedImages+1})},G=function(e,t){return q(e,{loadedImages:0})},Q=function(e,t){return q(e,{loading:!0})},W=function(e,t){return q(e,{loading:!1})},Y=function(e,t){return q(e,{modalOpen:!1,zoomedCardIndex:null})},B=function(e,t){return q(e,{modalOpen:!0,zoomedCardIndex:t.selectedCard})},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SEARCH_QUERY":return H(e,t);case"SET_RESULTS":return F(e,t);case"SET_ERROR":return U(e,t);case"SET_LOADED_IMAGES":return z(e);case"CLEAR_LOADED_IMAGES":return G(e);case"FETCH_STARTED":return Q(e);case"FETCH_FINISHED":return W(e);case"CLOSE_MODAL":return Y(e);case"OPEN_MODAL":return B(e,t);default:return e}},X=n(3),K=n(25),V=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||X.d,$=Object(X.c)({search:J}),Z=Object(X.e)($,V(Object(X.a)(K.a))),ee=a.a.createElement(i.a,{store:Z},a.a.createElement(x,null));c.a.render(ee,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[26,1,2]]]);
//# sourceMappingURL=main.afdbc5f1.chunk.js.map