(this["webpackJsonpmemorycard-game"]=this["webpackJsonpmemorycard-game"]||[]).push([[0],{11:function(t,e,c){},12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var o=c(1),n=c.n(o),r=c(6),l=c.n(r),s=(c(11),c(12),c(2)),i=c(3),a=c(4),p=[{id:0,url:"https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=010",name:"Bitcoin",ticker:"BTC"},{id:1,url:"https://cryptologos.cc/logos/ethereum-eth-logo.png?v=010",name:"Ethereum",ticker:"ETH"},{id:2,url:"https://cryptologos.cc/logos/xrp-xrp-logo.png?v=010",name:"Ripple",ticker:"XRP"},{id:3,url:"https://cryptologos.cc/logos/binance-coin-bnb-logo.png?v=010",name:"Binance",ticker:"BNB"},{id:4,url:"https://cryptologos.cc/logos/tether-usdt-logo.png?v=010",name:"Tether",ticker:"USDT"},{id:5,url:"https://cryptologos.cc/logos/cardano-ada-logo.png?v=010",name:"Cardano",ticker:"ADA"},{id:6,url:"https://cryptologos.cc/logos/polkadot-new-dot-logo.png?v=010",name:"Polkadot",ticker:"DOT"},{id:7,url:"https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=010",name:"Litecoin",ticker:"LTC"},{id:8,url:"https://cryptologos.cc/logos/chainlink-link-logo.png?v=010",name:"Chainlink",ticker:"LINK"},{id:9,url:"https://cryptologos.cc/logos/stellar-xlm-logo.png?v=010",name:"Stellar",ticker:"XLM"}],g=c(0),d=function(t){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{class:"bg-white-100 h40 flex flex-col  text-center mt-10 pt-5 pb-5 rounded text-white ",children:[Object(g.jsx)("span",{class:" text-5xl font-bold mb-5 ",children:"Coin Cards"}),Object(g.jsx)("span",{class:"pb-10",children:"Don't select a coin more than once, see if you can get to 10."}),Object(g.jsxs)("div",{class:"flex justify-center align-center",children:[Object(g.jsxs)("span",{class:" text-xl pr-10",children:["Current Score: ",t.currentScore]}),Object(g.jsxs)("span",{class:"text-xl pl-10",children:["High Score: ",t.highScore]})]})]})})},j=function(t){var e=Object(o.useState)({0:!1,1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1}),c=Object(a.a)(e,2),n=c[0],r=c[1],l=Object(o.useState)(0),j=Object(a.a)(l,2),u=j[0],b=j[1],h=Object(o.useState)(0),x=Object(a.a)(h,2),m=x[0],O=x[1];function f(t){!0===n[t]?(!function(){for(var t=function(t){r((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(s.a)({},t,!1))})),b(0)},e=0;e<10;e++)t(e)}(),u>m&&O(u)):r((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(s.a)({},t,!0))}),b(u+1))}return Object(o.useEffect)((function(){!function(){for(var t=p.length-1;t>0;t--){var e=Math.floor(Math.random()*(t+1)),c=[p[e],p[t]];p[t]=c[0],p[e]=c[1]}}()}),[n]),Object(g.jsxs)("div",{class:"flex flex-col w-1/2",children:[Object(g.jsx)(d,{highScore:m,currentScore:u}),",",Object(g.jsx)("div",{class:"grid gap-x-1 grid-cols-5 place-items-center gap-.1",children:p.map((function(t,e){return Object(g.jsx)("div",{onClick:function(){return f(t.id)},children:Object(g.jsxs)("div",{class:"bg-gray-100 m-5 pl-5 pr-5 pt-5 pb-5 rounded text-center",children:[Object(g.jsx)("img",{class:"max-w-38 max-h-24px mb-5",src:t.url,alt:"CoinLogo"}),Object(g.jsx)("span",{id:e,children:t.name}),Object(g.jsx)("br",{}),Object(g.jsx)("span",{children:t.ticker})]})})}))})]})};var u=function(){return Object(g.jsx)("div",{class:"flex flex-col items-center",children:Object(g.jsx)(j,{})})};l.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(u,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.7c204056.chunk.js.map