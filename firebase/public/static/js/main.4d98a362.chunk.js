(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{102:function(e){e.exports=JSON.parse('{"a":"https://web.alveehawak.xyz:2000/"}')},108:function(e,t,a){},116:function(e,t,a){},235:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(43),s=a.n(r),i=(a(108),a(17)),l=a(2),o=a(3),j=a(7),d=a(9),u=a(5),b=a(6),m=a(23),h=a(94),O=a(0),g=function(e){var t=e.style,a=e.lang,n=e.onLangChange,c=e.className;return Object(O.jsxs)("div",{onClick:n,style:t,className:c,children:["Currency:"," ",Object(O.jsx)("span",{style:{padding:".4em .9em",backgroundColor:"#00000047",borderRadius:"1rem"},children:"en"==a?"$Dollar":"BDT"})]})},x=function(e){var t=e.style,a=e.cartCount,n=e.className;return Object(O.jsxs)(u.b,{to:"/cart",style:t,className:n,children:["Cart:"," ",Object(O.jsx)("span",{style:{padding:".4em .9em",backgroundColor:"#00000047",borderRadius:"1rem"},children:a})]})},p=function(e){var t=e.lang,a=e.onLangChange,c=e.cartCount,r=Object(n.useState)(),s=Object(m.a)(r,2),i=s[0],l=s[1],o=Object(n.useState)(),j=Object(m.a)(o,2),d=j[0],b=j[1];return Object(h.useScrollPosition)((function(e){e.prevPos;var t=e.currPos;-t.y/265-1>0&&b("block"),-t.y/265-1<0&&b("none"),-t.y/265-1>0&&-t.y/265-1<1&&l(-t.y/265-1),-t.y/265-1>1&&l(1)})),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("nav",{style:{opacity:i,display:d},className:"nav",children:[Object(O.jsx)("img",{src:"logo.svg",className:"logo",alt:"",srcset:""}),Object(O.jsxs)("span",{className:"nav-icon",children:[Object(O.jsx)(g,{className:"nav-link",lang:t,style:{fontSize:"1rem"},onLangChange:a}),Object(O.jsx)(x,{style:{fontSize:"1rem"},className:"nav-link",cartCount:c})]}),Object(O.jsxs)("div",{className:"nav-links",children:[Object(O.jsx)(u.b,{to:"/",className:"nav-link active",children:"Home"}),Object(O.jsx)(u.b,{to:"/packages",className:"nav-link",children:"Packages"}),Object(O.jsx)("a",{href:"https://discord.gg/9WAWV6qaAE",className:"nav-link",children:"Discord"}),Object(O.jsx)(g,{className:"nav-link",lang:t,onLangChange:a}),Object(O.jsx)(x,{className:"nav-link",cartCount:c})]})]})})},v=function(e){var t=e.en,a=e.title,n=e.ram,c=e.core,r=e.price,s=e.onBuy;return void 0==t&&(t=!1),Object(O.jsxs)("div",{className:"card",children:[Object(O.jsx)("div",{className:"card-title",children:Object(O.jsx)("h3",{children:a})}),Object(O.jsxs)("div",{className:"card-content",children:[Object(O.jsxs)("h3",{className:"ram",children:[Object(O.jsx)("span",{className:"count",children:n}),"GB Ram"]}),Object(O.jsxs)("h4",{className:"cpu",children:[c," Core"]}),Object(O.jsxs)("h4",{className:"price",children:["Recurring Price"," ",Object(O.jsx)("span",{className:"taka",children:t?"$"+r:r+" taka"})]}),Object(O.jsx)("h4",{className:"price",children:"Billed Monthly"}),Object(O.jsxs)("h4",{className:"price",children:["Default Ports are additional ",t?"$5":"400 taka"]}),Object(O.jsxs)("h4",{className:"price",children:["5GB Storage Free(",t?"$1":"100 taka"," per 5GB Extra)"]})]}),Object(O.jsx)("a",{onClick:function(){return s({en:t,title:a,ram:n,core:c,price:r})},className:"btn buy",children:"Buy Now"})]})},f=function(){return Object(O.jsxs)("footer",{children:[Object(O.jsx)("div",{className:"row center",children:Object(O.jsxs)("div",{className:"column",children:[Object(O.jsx)("h3",{className:"title",children:"IMPORTANT LINKS"}),Object(O.jsx)("a",{className:"gray",href:"https://www.pixeledgebd.com",children:"Pixeledge Website"}),Object(O.jsx)("a",{className:"gray",href:"https://discord.gg/32p9RSxsCb",children:"Pixeledge Discord"}),Object(O.jsx)("a",{className:"gray",href:"https://discord.gg/9WAWV6qaAE",children:"CodeHub Discord"})]})}),Object(O.jsxs)("div",{className:"credits",children:[Object(O.jsx)("p",{id:"left",children:"Powered by PixeledgeBD"}),Object(O.jsx)("p",{id:"right",children:"Owned by AlveeHawak"})]})]})},N=function(e){var t=e.onBuyProduct,a=e.lang,n=e.containerStyle;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"container",style:n,children:[Object(O.jsx)("h1",{className:"headline",children:"Our Packages"}),"en"==a&&Object(O.jsxs)("div",{className:"packages",children:[Object(O.jsxs)("div",{className:"row center",children:[Object(O.jsx)(v,{onBuy:function(e){return t(e)},en:!0,title:"Dirt-1",ram:"1",core:"1",price:"4.99"}),Object(O.jsx)(v,{onBuy:function(e){return t(e)},en:!0,title:"Dirt-2",ram:"2",core:"1",price:"7.99"})]}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)(v,{onBuy:function(e){return t(e)},en:!0,title:"Iron-1",ram:"3",core:"2",price:"12.99"}),Object(O.jsx)(v,{onBuy:function(e){return t(e)},en:!0,title:"Iron-2",ram:"4",core:"2",price:"15.99"}),Object(O.jsx)(v,{onBuy:function(e){return t(e)},en:!0,title:"Iron-3",ram:"5",core:"2",price:"19.99"})]}),Object(O.jsxs)("div",{className:"row center",children:[Object(O.jsx)(v,{onBuy:function(e){return t(e)},en:!0,title:"Gold-1",ram:"5",core:"3",price:"21.99"}),Object(O.jsx)(v,{onBuy:function(e){return t(e)},en:!0,title:"Gold-2",ram:"6",core:"3",price:"24.99"})]}),Object(O.jsxs)("div",{className:"row center",children:[Object(O.jsx)(v,{onBuy:function(e){return t(e)},en:!0,title:"Diamond-1",ram:"6",core:"4",price:"26"}),Object(O.jsx)(v,{onBuy:function(e){return t(e)},en:!0,title:"Diamond-2",ram:"7",core:"4",price:"30"})]})]}),"bd"==a&&Object(O.jsxs)("div",{className:"packages",children:[Object(O.jsxs)("div",{className:"row center",children:[Object(O.jsx)(v,{onBuy:function(e){return t(e)},title:"Dirt-1",ram:"1",core:"1",price:"400"}),Object(O.jsx)(v,{onBuy:function(e){return t(e)},title:"Dirt-2",ram:"2",core:"1",price:"650"})]}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)(v,{onBuy:function(e){return t(e)},title:"Iron-1",ram:"3",core:"2",price:"1050"}),Object(O.jsx)(v,{onBuy:function(e){return t(e)},title:"Iron-2",ram:"4",core:"2",price:"1300"}),Object(O.jsx)(v,{onBuy:function(e){return t(e)},title:"Iron-3",ram:"5",core:"2",price:"1550"})]}),Object(O.jsxs)("div",{className:"row center",children:[Object(O.jsx)(v,{onBuy:function(e){return t(e)},title:"Gold-1",ram:"5",core:"3",price:"1700"}),Object(O.jsx)(v,{onBuy:function(e){return t(e)},title:"Gold-2",ram:"6",core:"3",price:"1950"})]}),Object(O.jsxs)("div",{className:"row center",children:[Object(O.jsx)(v,{onBuy:function(e){return t(e)},title:"Diamond-1",ram:"6",core:"4",price:"2100"}),Object(O.jsx)(v,{onBuy:function(e){return t(e)},title:"Diamond-2",ram:"7",core:"4",price:"2350"})]})]})]})})};function y(){document.getElementById("mobile-nav1").classList.toggle("active")}var k=function(e){var t=e.lang,a=e.onLangChange,n=e.onBuyProduct,c=e.cartCount;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("header",{children:[Object(O.jsxs)("nav",{children:[Object(O.jsxs)("div",{style:{display:"flex",flexDirection:"row-reverse",marginBottom:"1rem",fontSize:".8rem"},children:[Object(O.jsx)("a",{href:"https://panel.alveehawak.xyz",className:"nav-link",children:"Panel"}),Object(O.jsx)(u.b,{to:"/login",className:"nav-link",children:"Login"}),Object(O.jsx)(u.b,{to:"/register",className:"nav-link",children:"Register"})]}),Object(O.jsx)("img",{src:"logo.svg",className:"logo",alt:"",srcset:""}),Object(O.jsx)("span",{className:"material-icons nav-icon",onClick:y,children:"reorder"}),Object(O.jsxs)("div",{className:"nav-links",children:[Object(O.jsx)(u.b,{to:"/",className:"nav-link active",children:"Home"}),Object(O.jsx)("a",{href:"#packages",className:"nav-link",children:"Packages"}),Object(O.jsx)("a",{href:"https://discord.gg/9WAWV6qaAE",className:"nav-link",children:"Discord"}),Object(O.jsx)(g,{className:"nav-link",lang:t,onLangChange:a}),Object(O.jsx)(x,{className:"nav-link",cartCount:c})]})]}),Object(O.jsxs)("div",{className:"header-box",children:[Object(O.jsxs)("div",{id:"mobile-nav1",className:"nav-links mobile",children:[Object(O.jsx)(u.b,{to:"/",className:"nav-link active",children:"Home"}),Object(O.jsx)("a",{href:"#packages",className:"nav-link",children:"Packages"}),Object(O.jsx)("a",{href:"https://discord.gg/9WAWV6qaAE",className:"nav-link",children:"Discord"}),Object(O.jsx)(g,{className:"nav-link",lang:t,onLangChange:a}),Object(O.jsx)(x,{className:"nav-link",cartCount:c})]}),Object(O.jsx)("div",{className:"logo-box-container",children:Object(O.jsxs)("div",{className:"logo-box",children:[Object(O.jsx)("h1",{className:"logo lower",children:"Pixeledge"}),Object(O.jsx)("h1",{className:"logo",children:"Hosting"}),Object(O.jsx)("p",{className:"tagline",children:"Buy the most affordable minecraft server hosting and development from the best in Bangladesh. Our service starts at 400 taka monthly."}),Object(O.jsx)("a",{href:"#packages",style:{marginRight:"2rem"},className:"btn btn-wide btn-secondary",children:"Buy Now"})]})}),Object(O.jsx)("img",{src:"server.png",className:"hero",alt:"",srcset:""})]})]}),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"quote",children:"DDOS Protected Network"}),"en"==t&&Object(O.jsxs)("div",{className:"quote",children:["Paypal ",Object(O.jsx)("br",{})," Payment Method"]}),"bd"==t&&Object(O.jsxs)("div",{className:"quote",children:["Bkash, Nogod, Rocket ",Object(O.jsx)("br",{})," Payment Method"]}),Object(O.jsx)("div",{className:"quote",children:"4 Years Of Experience"})]}),Object(O.jsx)("a",{name:"packages"}),Object(O.jsx)(N,{onBuyProduct:n,lang:t})]})]})},C=a(95),w=function(e){return Object(C.a)(e),Object(O.jsxs)("div",{className:"top-bar",children:[Object(O.jsx)(u.b,{to:"/login",children:"login"}),Object(O.jsx)(u.b,{to:"/register",children:"register"}),Object(O.jsx)("a",{href:"https://panel.alveehawak.xyz",children:"panel"})]})},B=function(e){var t=e.lang,a=e.onLangChange,n=e.cartCount,c=e.location;return"/"==c.pathname?Object(O.jsx)(O.Fragment,{}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(w,{}),Object(O.jsxs)("nav",{style:{backgroundColor:"rgba(244, 92, 67, 1)"},children:[Object(O.jsx)("img",{src:"logo.svg",className:"logo",alt:"",srcset:""}),Object(O.jsx)("span",{className:"material-icons nav-icon",onClick:function(){document.getElementById("mobile-nav1").classList.toggle("active")},children:"reorder"}),Object(O.jsxs)("div",{className:"nav-links",children:[Object(O.jsx)(u.b,{to:"/",className:"nav-link active",children:"Home"}),Object(O.jsx)(u.b,{to:"/packages",className:"nav-link",children:"Packages"}),Object(O.jsx)("a",{href:"https://discord.gg/9WAWV6qaAE",className:"nav-link",children:"Discord"}),"/cart"==c.pathname?Object(O.jsx)(O.Fragment,{}):Object(O.jsx)(g,{className:"nav-link",lang:t,onLangChange:a}),Object(O.jsx)(x,{className:"nav-link",cartCount:n})]})]}),Object(O.jsx)("div",{className:"header-box",children:Object(O.jsxs)("div",{id:"mobile-nav1",className:"nav-links mobile",children:[Object(O.jsx)(u.b,{to:"/",className:"nav-link active",children:"Home"}),Object(O.jsx)(u.b,{to:"/packages",className:"nav-link",children:"Packages"}),Object(O.jsx)("a",{href:"https://discord.gg/9WAWV6qaAE",className:"nav-link",children:"Discord"}),"/cart"==c.pathname?Object(O.jsx)(O.Fragment,{}):Object(O.jsx)(g,{className:"nav-link",lang:t,onLangChange:a}),Object(O.jsx)(x,{className:"nav-link",cartCount:n})]})})]})},P=(a(116),function(e){e.lang,e.cart;return Object(O.jsx)("h1",{children:"Under Construction"})}),S=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(O.jsx)("h1",{children:"Under Construction"})}}]),a}(n.Component),L=function(e){var t=e.onBuyProduct,a=e.lang;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(N,{onBuyProduct:t,lang:a,containerStyle:{marginTop:"5rem"}})})},A=a(32),D=a.n(A),q=a(46),I=a(24),R=a(29),F=a(103),W=a(101),E=a.n(W),H=a(102),_=function(){var e=Object(q.a)(D.a.mark((function e(t){var a,n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post(H.a+"user/register",t);case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=R.a().shape({first_name:R.b().max(50,"Too Long!").required("Required"),last_name:R.b().max(50,"Too Long!").required("Required"),username:R.b().max(50,"Too Long!").required("Required"),email:R.b().email("Invalid email").max(255).required("Required"),password:R.b().min(8,"Has to be Atleast 8 Characters").max(1024,"Max 1024 Char").required("Required")}),T=c.a.createRef(),G=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleVerify=function(t){e.setState({recaptcha:t})},e.state={registered:!1,recaptcha:""},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{style:{paddingTop:"3rem",paddingBottom:"3rem"},className:"container",children:Object(O.jsxs)("div",{className:"form",children:[this.state.registered&&Object(O.jsxs)("h1",{style:{color:"#6cff00",textAlign:"center",padding:"1em",fontSize:"3rem"},children:["Successfully",Object(O.jsx)("br",{})," Registered"]}),!this.state.registered&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:"Register"}),Object(O.jsx)(I.c,{initialValues:{username:"",email:"",password:"",last_name:"",first_name:""},validationSchema:V,onSubmit:function(){var t=Object(q.a)(D.a.mark((function t(a,n){var c,r;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=n.setFieldError,""!=e.state.recaptcha){t.next=3;break}return t.abrupt("return",c("username","Complete Captcha"));case 3:return t.next=5,_(Object(i.a)(Object(i.a)({},a),{},{recaptcha:e.state.recaptcha}));case 5:"OK"==(r=t.sent)?e.setState({registered:!0}):c("username",r);case 7:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),children:function(t){var a=t.errors,n=t.touched;return Object(O.jsxs)(I.b,{children:[Object(O.jsx)(I.a,{placeholder:"username",className:"form-input",name:"username"}),a.username&&n.username?Object(O.jsx)("div",{className:"form-error",children:a.username}):null,Object(O.jsx)(I.a,{placeholder:"first name",className:"form-input",name:"first_name"}),a.first_name&&n.first_name?Object(O.jsx)("div",{className:"form-error",children:a.first_name}):null,Object(O.jsx)(I.a,{placeholder:"last name",className:"form-input",name:"last_name"}),a.last_name&&n.last_name?Object(O.jsx)("div",{className:"form-error",children:a.last_name}):null,Object(O.jsx)(I.a,{placeholder:"email",className:"form-input",name:"email",type:"email"}),a.email&&n.email?Object(O.jsx)("div",{className:"form-error",children:a.email}):null,Object(O.jsx)(I.a,{placeholder:"password",className:"form-input",name:"password",type:"password"}),a.password&&n.password?Object(O.jsx)("div",{className:"form-error",children:a.password}):null,Object(O.jsx)(F.a,{ref:T,sitekey:"6LdVnqAbAAAAAIiFHQps4veSkiwqYx0bMGRI61OH",onChange:e.handleVerify}),Object(O.jsx)("button",{className:"btn btn-wide btn-black",type:"submit",children:"Register"})]})}})]})]})})})}}]),a}(n.Component),M=(a(234),function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).componentDidMount=function(){null===localStorage.getItem("lang")?fetch("https://extreme-ip-lookup.com/json/").then((function(e){return e.json()})).then((function(e){localStorage.setItem("lang","bd"===e.countryCode.toLowerCase()?"bd":"en")})).then((function(){return e.setState({lang:localStorage.getItem("lang")})})).catch((function(e,t){})):e.setState({lang:localStorage.getItem("lang")})},e.handleLangChange=function(){e.setState({lang:"bd"===e.state.lang?"en":"bd"},(function(){return localStorage.setItem("lang",e.state.lang)})),e.resetCart()},e.resetCart=function(){e.setState({cart:[]})},e.handleBuyProduct=function(e){window.confirm("Website is under construction. Please use our discord server to contact us. Open a ticket there. Hit Ok to go to our discord server.")&&(window.location.href="https://discord.com/invite/9WAWV6qaAE")},e.state={lang:"",cart:[],open:!1},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(u.a,{children:[Object(O.jsx)(p,{cartCount:this.state.cart.length,onLangChange:this.handleLangChange,lang:this.state.lang}),Object(O.jsx)(b.a,{path:"/",render:function(t){return Object(O.jsx)(B,Object(i.a)({cartCount:e.state.cart.length,lang:e.state.lang,onLangChange:e.handleLangChange},t))}}),Object(O.jsxs)(b.c,{children:[Object(O.jsx)(b.a,{path:"/packages",render:function(t){return Object(O.jsx)(L,Object(i.a)({cartCount:e.state.cart.length,onBuyProduct:function(t){return e.handleBuyProduct(t)},lang:e.state.lang,onLangChange:e.handleLangChange},t))}}),Object(O.jsx)(b.a,{path:"/cart",render:function(t){return Object(O.jsx)(P,Object(i.a)({cartCount:e.state.cart.length,onBuyProduct:function(t){return e.handleBuyProduct(t)},lang:e.state.lang,cart:e.state.cart},t))}}),Object(O.jsx)(b.a,{path:"/login",render:function(e){return Object(O.jsx)(S,Object(i.a)({},e))}}),Object(O.jsx)(b.a,{path:"/register",render:function(e){return Object(O.jsx)(G,Object(i.a)({},e))}}),Object(O.jsx)(b.a,{path:"/",render:function(t){return Object(O.jsx)(k,Object(i.a)({cartCount:e.state.cart.length,onBuyProduct:function(t){return e.handleBuyProduct(t)},onLangChange:e.handleLangChange,lang:e.state.lang},t))}})]}),Object(O.jsx)(f,{})]})})}}]),a}(n.Component)),z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,236)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(M,{})}),document.getElementById("root")),z()}},[[235,1,2]]]);
//# sourceMappingURL=main.4d98a362.chunk.js.map