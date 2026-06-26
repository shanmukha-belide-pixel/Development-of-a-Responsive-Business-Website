(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,9928,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={cancelIdleCallback:function(){return l},requestIdleCallback:function(){return n}};for(var s in a)Object.defineProperty(r,s,{enumerable:!0,get:a[s]});let n="u">typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},l="u">typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},64936,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={ESCAPE_REGEX:function(){return l},htmlEscapeAttributeString:function(){return c},htmlEscapeJsonString:function(){return d}};for(var s in a)Object.defineProperty(r,s,{enumerable:!0,get:a[s]});let n={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},l=/[&><\u2028\u2029]/g,o={"&":"&amp;",'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;"},i=/[&"'<>]/g;function d(e){return e.replace(l,e=>n[e])}function c(e){return e.replace(i,e=>o[e])}},38517,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={default:function(){return w},handleClientScriptLoad:function(){return h},initScriptLoader:function(){return p}};for(var s in a)Object.defineProperty(r,s,{enumerable:!0,get:a[s]});let n=e.r(17577),l=e.r(54866),o=e.r(96696),i=n._(e.r(90590)),d=l._(e.r(46390)),c=e.r(23891),u=e.r(28396),g=e.r(9928),m=e.r(64936),f=new Map,x=new Set,b=e=>{let{src:t,id:r,onLoad:a=()=>{},onReady:s=null,dangerouslySetInnerHTML:n,children:l="",strategy:o="afterInteractive",onError:d,stylesheets:c}=e,g=r||t;if(g&&x.has(g))return;if(f.has(t)){x.add(g),f.get(t).then(a,d);return}let m=()=>{s&&s(),x.add(g)},b=document.createElement("script"),h=new Promise((e,t)=>{b.addEventListener("load",function(t){e(),a&&a.call(this,t),m()}),b.addEventListener("error",function(e){t(e)})}).catch(function(e){d&&d(e)});n?(b.innerHTML=n.__html||"",m()):l?(b.textContent="string"==typeof l?l:Array.isArray(l)?l.join(""):"",m()):t&&(b.src=t,f.set(t,h)),(0,u.setAttributesFromProps)(b,e),"worker"===o&&b.setAttribute("type","text/partytown"),b.setAttribute("data-nscript",o),c&&(e=>{if(i.default.preinit)return e.forEach(e=>{i.default.preinit(e,{as:"style"})});if("u">typeof window){let t=document.head;e.forEach(e=>{let r=document.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,t.appendChild(r)})}})(c),document.body.appendChild(b)};function h(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,g.requestIdleCallback)(()=>b(e))}):b(e)}function p(e){e.forEach(h),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");x.add(t)})}function y(e){let{id:t,src:r="",onLoad:a=()=>{},onReady:s=null,strategy:n="afterInteractive",onError:l,stylesheets:u,...f}=e,{updateScripts:h,scripts:p,getIsSsr:y,appDir:w,nonce:v}=(0,d.useContext)(c.HeadManagerContext);v=f.nonce||v;let k=(0,d.useRef)(!1);(0,d.useEffect)(()=>{let e=t||r;k.current||(s&&e&&x.has(e)&&s(),k.current=!0)},[s,t,r]);let j=(0,d.useRef)(!1);if((0,d.useEffect)(()=>{if(!j.current){if("afterInteractive"===n)b(e);else"lazyOnload"===n&&("complete"===document.readyState?(0,g.requestIdleCallback)(()=>b(e)):window.addEventListener("load",()=>{(0,g.requestIdleCallback)(()=>b(e))}));j.current=!0}},[e,n]),("beforeInteractive"===n||"worker"===n)&&(h?(p[n]=(p[n]||[]).concat([{id:t,src:r,onLoad:a,onReady:s,onError:l,...f,nonce:v}]),h(p)):y&&y()?x.add(t||r):y&&!y()&&b({...e,nonce:v})),w){if(u&&u.forEach(e=>{i.default.preinit(e,{as:"style"})}),"beforeInteractive"===n)if(!r)return f.dangerouslySetInnerHTML&&(f.children=f.dangerouslySetInnerHTML.__html,delete f.dangerouslySetInnerHTML),(0,o.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:`(self.__next_s=self.__next_s||[]).push(${(0,m.htmlEscapeJsonString)(JSON.stringify([0,{...f,id:t}]))})`}});else return i.default.preload(r,f.integrity?{as:"script",integrity:f.integrity,nonce:v,crossOrigin:f.crossOrigin}:{as:"script",nonce:v,crossOrigin:f.crossOrigin}),(0,o.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:`(self.__next_s=self.__next_s||[]).push(${(0,m.htmlEscapeJsonString)(JSON.stringify([r,{...f,id:t}]))})`}});"afterInteractive"===n&&r&&i.default.preload(r,f.integrity?{as:"script",integrity:f.integrity,nonce:v,crossOrigin:f.crossOrigin}:{as:"script",nonce:v,crossOrigin:f.crossOrigin})}return null}Object.defineProperty(y,"__nextScript",{value:!0});let w=y;("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},55510,(e,t,r)=>{t.exports=e.r(38517)},72978,e=>{"use strict";var t=e.i(29167),r=e.i(96696),a=e.i(46390),s=e.i(58559),n=e.i(15103),l=e.i(7887);let o=(0,l.default)("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),i=(0,l.default)("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);var d=e.i(97236),c=e.i(41416),u=e.i(98189);let g=(0,l.default)("shield-alert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);var m=e.i(70598),f=e.i(74735),x=e.i(55510);e.s(["default",0,function(){(0,s.useRouter)();let[e,l]=(0,a.useState)("signin"),[b,h]=(0,a.useState)(""),[p,y]=(0,a.useState)(""),[w,v]=(0,a.useState)(""),[k,j]=(0,a.useState)(""),[S,N]=(0,a.useState)(!1),[E,C]=(0,a.useState)({}),[I,B]=(0,a.useState)("idle"),[L,M]=(0,a.useState)(""),[T,_]=(0,a.useState)(!1),[A,F]=(0,a.useState)(""),[P,V]=(0,a.useState)(""),[O,U]=(0,a.useState)(!1),[z,H]=(0,a.useState)(!1),q=e=>{try{let t=(e=>{try{let t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),r=decodeURIComponent(atob(t).split("").map(e=>"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)).join(""));return JSON.parse(r)}catch(e){return console.error("Error decoding Google JWT token",e),null}})(e.credential);t&&t.name&&t.email?J(t.name,t.email):(B("error"),M("Unable to retrieve profile information from Google."))}catch(e){console.error(e),B("error"),M("Google Authentication failed.")}};(0,a.useEffect)(()=>{H(!0);let e=t.default.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;if(e&&1){let t=0,r=()=>{let a=window;if(a.google?.accounts?.id)try{a.google.accounts.id.initialize({client_id:e,callback:q}),a.google.accounts.id.renderButton(document.getElementById("btn-google-login-container"),{theme:"outline",size:"large",width:380}),document.getElementById("btn-google-login")?.classList.add("hidden"),document.getElementById("btn-google-login-container-wrapper")?.classList.remove("hidden")}catch(e){console.error("Failed to initialize Google Sign In SDK:",e)}else t<30&&(t++,setTimeout(r,100))};r()}},[]);let D=async e=>{let t;e.preventDefault();let r=(t={},p.trim()||(t.username="Username is required"),w||(t.password="Password is required"),t);if(Object.keys(r).length>0)return void C(r);C({}),B("loading"),await new Promise(e=>setTimeout(e,1200));let a=p.trim(),s=JSON.parse(localStorage.getItem("registeredUsers")||"[]").find(e=>e.username.toLowerCase()===a.toLowerCase()&&e.pass===w);if("Shanmukha"===a&&"Shanmukha29*"===w||s){localStorage.setItem("isLoggedIn","true");let e=s?s.name:"Shanmukha";localStorage.setItem("currentUser",JSON.stringify({name:e,username:a})),B("success"),setTimeout(()=>{window.location.href="../"},1500)}else B("error"),M("Invalid username or password.")},R=async e=>{let t;e.preventDefault();let r=(t={},b.trim()||(t.name="Full Name is required"),p.trim()||(t.username="Username or Email is required"),w?w.length<6&&(t.password="Password must be at least 6 characters"):t.password="Password is required",w!==k&&(t.confirmPassword="Passwords do not match"),t);if(Object.keys(r).length>0)return void C(r);C({}),B("loading"),await new Promise(e=>setTimeout(e,1200));let a=JSON.parse(localStorage.getItem("registeredUsers")||"[]");if("shanmukha"===p.trim().toLowerCase()||a.some(e=>e.username.toLowerCase()===p.trim().toLowerCase())){B("error"),M("Username or Email is already registered. Please sign in instead.");return}a.push({name:b.trim(),username:p.trim(),pass:w}),localStorage.setItem("registeredUsers",JSON.stringify(a)),localStorage.setItem("isLoggedIn","true"),localStorage.setItem("currentUser",JSON.stringify({name:b.trim(),username:p.trim()})),B("success"),setTimeout(()=>{window.location.href="../"},1500)},J=async(e,t)=>{_(!1),B("loading"),await new Promise(e=>setTimeout(e,1200)),localStorage.setItem("isLoggedIn","true"),localStorage.setItem("currentUser",JSON.stringify({name:e,username:t})),B("success"),setTimeout(()=>{window.location.href="../"},1500)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x.default,{src:"https://accounts.google.com/gsi/client",strategy:"afterInteractive"}),(0,r.jsxs)("main",{className:"relative min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center p-4 overflow-hidden",children:[(0,r.jsx)("div",{className:"absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/5 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"}),(0,r.jsx)("div",{className:"absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/5 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none translate-x-1/2 translate-y-1/2"}),(0,r.jsx)("div",{className:"absolute top-6 left-6 flex items-center gap-4 z-10",children:(0,r.jsxs)(n.default,{href:"/",className:"inline-flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",children:[(0,r.jsx)(d.ArrowLeft,{size:16})," Back to Home"]})}),(0,r.jsx)("div",{className:"absolute top-6 right-6 z-10",children:(0,r.jsx)(f.ThemeToggle,{})}),(0,r.jsxs)("div",{className:"relative w-full max-w-md bg-white dark:bg-gray-900/60 border border-gray-200 dark:border-white/5 rounded-3xl p-8 md:p-10 shadow-xl shadow-blue-900/5 backdrop-blur-xl",children:[(0,r.jsxs)("div",{className:"flex flex-col items-center text-center mb-6",children:[(0,r.jsx)(n.default,{href:"/",className:"inline-block mb-4 hover:scale-105 transition-transform duration-300",children:(0,r.jsx)("img",{src:(0,m.getAssetPath)("/images/logo.png"),alt:"Teja Suppliers Logo",className:"w-16 h-16 rounded-2xl object-contain bg-white p-1.5 border border-gray-200 dark:border-white/10 shadow-md shadow-blue-500/10"})}),(0,r.jsx)("h1",{className:"font-sans font-black text-2xl text-gray-900 dark:text-white",children:"signin"===e?"Welcome Back":"Create Account"}),(0,r.jsx)("p",{className:"text-gray-500 dark:text-gray-400 text-sm mt-1",children:"signin"===e?"Sign in to your supplier dashboard":"Register to access chemical dashboard"})]}),(0,r.jsxs)("div",{className:"flex border-b border-gray-100 dark:border-white/5 mb-6",children:[(0,r.jsx)("button",{id:"tab-signin",type:"button",onClick:()=>{l("signin"),C({}),M("")},className:`flex-1 pb-3 text-sm font-bold border-b-2 transition-colors ${"signin"===e?"border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400":"border-transparent text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"}`,children:"Sign In"}),(0,r.jsx)("button",{id:"tab-signup",type:"button",onClick:()=>{l("signup"),C({}),M("")},className:`flex-1 pb-3 text-sm font-bold border-b-2 transition-colors ${"signup"===e?"border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400":"border-transparent text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"}`,children:"Sign Up"})]}),"success"===I?(0,r.jsxs)("div",{className:"flex flex-col items-center text-center py-8 gap-4",children:[(0,r.jsx)("div",{className:"w-16 h-16 rounded-full bg-green-500/15 border-2 border-green-500 flex items-center justify-center",children:(0,r.jsx)(u.CheckCircle2,{size:28,className:"text-green-500 dark:text-green-400 animate-pulse"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"font-bold text-lg text-gray-900 dark:text-white",children:"signin"===e?"Login Successful!":"Account Created Successfully!"}),(0,r.jsx)("p",{className:"text-gray-500 dark:text-gray-400 text-sm mt-1",children:"Redirecting you to the portal..."})]})]}):(0,r.jsxs)("form",{onSubmit:"signin"===e?D:R,className:"space-y-4",noValidate:!0,children:["error"===I&&(0,r.jsxs)("div",{className:"flex gap-3 items-start bg-red-500/10 border border-red-500/20 rounded-2xl p-4 text-xs text-red-500 dark:text-red-400",children:[(0,r.jsx)(g,{size:16,className:"shrink-0 mt-0.5"}),(0,r.jsx)("p",{className:"leading-relaxed",children:L})]}),(0,r.jsxs)("div",{className:`flex flex-col gap-1.5 ${"signup"===e?"":"hidden"}`,id:"signup-name-field",children:[(0,r.jsx)("label",{htmlFor:"name",className:"text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400",children:"Full Name"}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("input",{id:"name",type:"text",value:b,placeholder:"Shanmukha Belide",onChange:e=>h(e.target.value),className:`w-full bg-gray-50 dark:bg-gray-800/60 border rounded-xl pl-11 pr-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 dark:focus:border-blue-400 ${E.name?"border-red-400 dark:border-red-500":"border-gray-200 dark:border-white/10"}`}),(0,r.jsx)(o,{size:16,className:"absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"})]}),E.name&&(0,r.jsx)("p",{className:"text-red-500 dark:text-red-400 text-xs mt-0.5",children:E.name})]}),(0,r.jsxs)("div",{className:"flex flex-col gap-1.5",children:[(0,r.jsx)("label",{htmlFor:"username",className:"text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400",children:"signin"===e?"Username":"Username or Email"}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("input",{id:"username",type:"text",value:p,placeholder:"signin"===e?"Shanmukha":"shanmukha@gmail.com",onChange:e=>y(e.target.value),className:`w-full bg-gray-50 dark:bg-gray-800/60 border rounded-xl pl-11 pr-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 dark:focus:border-blue-400 ${E.username?"border-red-400 dark:border-red-500":"border-gray-200 dark:border-white/10"}`}),(0,r.jsx)(o,{size:16,className:"absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"})]}),E.username&&(0,r.jsx)("p",{className:"text-red-500 dark:text-red-400 text-xs mt-0.5",children:E.username})]}),(0,r.jsxs)("div",{className:"flex flex-col gap-1.5",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsx)("label",{htmlFor:"password",className:"text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400",children:"Password"}),"signin"===e&&(0,r.jsx)("a",{href:"#",onClick:e=>{e.preventDefault(),alert("Please contact the administrator to reset your password.")},className:"text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline",children:"Forgot Password?"})]}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("input",{id:"password",type:"password",value:w,placeholder:"••••••••",onChange:e=>v(e.target.value),className:`w-full bg-gray-50 dark:bg-gray-800/60 border rounded-xl pl-11 pr-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 dark:focus:border-blue-400 ${E.password?"border-red-400 dark:border-red-500":"border-gray-200 dark:border-white/10"}`}),(0,r.jsx)(i,{size:16,className:"absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"})]}),E.password&&(0,r.jsx)("p",{className:"text-red-500 dark:text-red-400 text-xs mt-0.5",children:E.password})]}),(0,r.jsxs)("div",{className:`flex flex-col gap-1.5 ${"signup"===e?"":"hidden"}`,id:"signup-confirm-field",children:[(0,r.jsx)("label",{htmlFor:"confirmPassword",className:"text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400",children:"Confirm Password"}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("input",{id:"confirmPassword",type:"password",value:k,placeholder:"••••••••",onChange:e=>j(e.target.value),className:`w-full bg-gray-50 dark:bg-gray-800/60 border rounded-xl pl-11 pr-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 dark:focus:border-blue-400 ${E.confirmPassword?"border-red-400 dark:border-red-500":"border-gray-200 dark:border-white/10"}`}),(0,r.jsx)(i,{size:16,className:"absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"})]}),E.confirmPassword&&(0,r.jsx)("p",{className:"text-red-500 dark:text-red-400 text-xs mt-0.5",children:E.confirmPassword})]}),(0,r.jsx)("div",{className:"signin"===e?"":"hidden",id:"remember-me-field",children:(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("input",{id:"remember",type:"checkbox",checked:S,onChange:e=>N(e.target.checked),className:"w-4 h-4 text-blue-600 border-gray-300 dark:border-white/10 rounded focus:ring-blue-500/40"}),(0,r.jsx)("label",{htmlFor:"remember",className:"ml-2 text-xs font-medium text-gray-600 dark:text-gray-400 select-none",children:"Remember me on this device"})]})}),(0,r.jsx)("button",{type:"submit",id:"btn-submit",disabled:"loading"===I,className:"w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-sm transition-all duration-300 btn-glow disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.01]",children:"loading"===I?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Loader2,{size:16,className:"animate-spin"}),(0,r.jsx)("span",{className:"signin"===e?"":"hidden",id:"btn-loading-signin-text",children:"Signing In..."}),(0,r.jsx)("span",{className:"signup"===e?"":"hidden",id:"btn-loading-signup-text",children:"Creating Account..."})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"signin"===e?"":"hidden",id:"btn-signin-text",children:"Sign In"}),(0,r.jsx)("span",{className:"signup"===e?"":"hidden",id:"btn-signup-text",children:"Create Account"})]})}),(0,r.jsxs)("div",{className:"relative my-5 flex items-center justify-center",children:[(0,r.jsx)("div",{className:"absolute inset-0 flex items-center",children:(0,r.jsx)("div",{className:"w-full border-t border-gray-200 dark:border-white/5"})}),(0,r.jsx)("span",{className:"relative bg-white dark:bg-gray-900 px-4 text-[10px] uppercase tracking-wider text-gray-400 font-bold",children:"Or continue with"})]}),(0,r.jsx)("div",{id:"btn-google-login-container-wrapper",className:"hidden flex justify-center w-full min-h-[44px]",children:(0,r.jsx)("div",{id:"btn-google-login-container",className:"w-full"})}),(0,r.jsxs)("button",{type:"button",id:"btn-google-login",onClick:e=>{e.preventDefault(),_(!0),U(!1),F(""),V("")},className:"w-full flex items-center justify-center gap-2.5 py-3 border border-gray-200 dark:border-white/10 rounded-xl bg-gray-50 dark:bg-gray-800/40 hover:bg-gray-100 dark:hover:bg-gray-800/60 text-gray-700 dark:text-gray-200 font-bold text-sm transition-all duration-300",children:[(0,r.jsxs)("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",children:[(0,r.jsx)("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),(0,r.jsx)("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),(0,r.jsx)("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.22-.66-.35-1.36-.35-2.09z"}),(0,r.jsx)("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),"Google"]})]})]}),(0,r.jsx)("div",{id:"google-modal",className:`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 ${T?"":"hidden"}`,children:(0,r.jsxs)("div",{className:"w-full max-w-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-2xl p-6 shadow-2xl relative flex flex-col gap-6",children:[(0,r.jsx)("button",{id:"google-modal-close",onClick:()=>_(!1),className:"absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 font-bold text-base","aria-label":"Close modal",children:"✕"}),(0,r.jsxs)("div",{className:"flex flex-col items-center text-center",children:[(0,r.jsxs)("svg",{className:"w-10 h-10 mb-3",viewBox:"0 0 24 24",children:[(0,r.jsx)("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),(0,r.jsx)("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),(0,r.jsx)("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.22-.66-.35-1.36-.35-2.09z"}),(0,r.jsx)("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),(0,r.jsx)("h2",{className:"font-bold text-lg text-gray-900 dark:text-white",children:"Choose an account"}),(0,r.jsx)("p",{className:"text-gray-500 dark:text-gray-400 text-xs",children:"to continue to Teja Suppliers"})]}),(0,r.jsxs)("div",{className:O?"hidden":"flex flex-col gap-2.5",id:"google-select-view",children:[[{name:"Shanmukha Belide",email:"shanmukha.belide@gmail.com",initial:"S",bg:"bg-blue-500"},{name:"Teja Suppliers Admin",email:"admin@tejasuppliers.com",initial:"T",bg:"bg-green-600"}].map(e=>(0,r.jsxs)("button",{type:"button","data-google-name":e.name,"data-google-email":e.email,onClick:()=>J(e.name,e.email),className:"google-account-btn flex items-center gap-3 w-full p-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/60 border border-transparent hover:border-gray-200 dark:hover:border-white/10 text-left transition-all duration-200",children:[(0,r.jsx)("div",{className:`w-8 h-8 rounded-full ${e.bg} flex items-center justify-center text-white font-bold text-sm shrink-0`,children:e.initial}),(0,r.jsxs)("div",{className:"flex flex-col leading-tight overflow-hidden",children:[(0,r.jsx)("span",{className:"text-xs font-bold text-gray-900 dark:text-white truncate",children:e.name}),(0,r.jsx)("span",{className:"text-[10px] text-gray-500 dark:text-gray-400 truncate",children:e.email})]})]},e.email)),(0,r.jsxs)("button",{type:"button",id:"google-another-account",onClick:()=>U(!0),className:"flex items-center gap-3 w-full p-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/60 border border-transparent hover:border-gray-200 dark:hover:border-white/10 text-left text-xs font-semibold text-blue-600 dark:text-blue-400 transition-all duration-200",children:[(0,r.jsx)("div",{className:"w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 font-bold text-sm shrink-0",children:"+"}),"Use another account"]})]}),(0,r.jsxs)("form",{onSubmit:e=>{e.preventDefault(),A&&P&&J(A,P)},className:`space-y-4 ${O?"":"hidden"}`,id:"google-custom-form",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,r.jsx)("label",{htmlFor:"gName",className:"text-[10px] font-bold text-gray-400 uppercase",children:"Your Name"}),(0,r.jsx)("input",{id:"gName",type:"text",required:!0,value:A,placeholder:"Shanmukha Belide",onChange:e=>F(e.target.value),className:"w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl px-3 py-2.5 text-xs text-gray-900 dark:text-white outline-none focus:border-blue-500"})]}),(0,r.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,r.jsx)("label",{htmlFor:"gEmail",className:"text-[10px] font-bold text-gray-400 uppercase",children:"Google Email"}),(0,r.jsx)("input",{id:"gEmail",type:"email",required:!0,value:P,placeholder:"name@gmail.com",onChange:e=>V(e.target.value),className:"w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl px-3 py-2.5 text-xs text-gray-900 dark:text-white outline-none focus:border-blue-500"})]}),(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsx)("button",{type:"button",id:"google-custom-back",onClick:()=>U(!1),className:"flex-1 py-2 text-xs font-bold border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400",children:"Back"}),(0,r.jsx)("button",{type:"submit",className:"flex-1 py-2 text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-xl",children:"Continue"})]})]})]})}),(0,r.jsx)("script",{dangerouslySetInnerHTML:{__html:`
            (function() {
              function initFallback() {
                if (!document.body.classList.contains('no-hydration')) return;
                if (window.__vanilla_fallback_initialized) return;

                const tabSignIn = document.getElementById('tab-signin');
                const tabSignUp = document.getElementById('tab-signup');
                if (!tabSignIn || !tabSignUp) {
                  setTimeout(initFallback, 50);
                  return;
                }

                window.__vanilla_fallback_initialized = true;
                console.log('Next.js hydration inactive. Running vanilla JS fallback for login page.');

                let currentMode = 'signin';

                function setMode(mode) {
                  currentMode = mode;
                  const elSignIn = document.getElementById('tab-signin');
                  const elSignUp = document.getElementById('tab-signup');
                  const elNameField = document.getElementById('signup-name-field');
                  const elConfirmField = document.getElementById('signup-confirm-field');
                  const elRememberMeField = document.getElementById('remember-me-field');
                  const elBtnSignInText = document.getElementById('btn-signin-text');
                  const elBtnSignUpText = document.getElementById('btn-signup-text');
                  const elTitle = document.querySelector('h1');
                  const elDesc = document.querySelector('h1 + p');

                  // Clear any existing errors
                  const elError = document.getElementById('fallback-error-msg');
                  if (elError) elError.remove();

                  if (mode === 'signin') {
                    if (elSignIn) elSignIn.className = "flex-1 pb-3 text-sm font-bold border-b-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400";
                    if (elSignUp) elSignUp.className = "flex-1 pb-3 text-sm font-bold border-b-2 border-transparent text-gray-400 hover:text-gray-600 dark:hover:text-gray-200";
                    if (elNameField) elNameField.classList.add('hidden');
                    if (elConfirmField) elConfirmField.classList.add('hidden');
                    if (elRememberMeField) elRememberMeField.classList.remove('hidden');
                    if (elBtnSignInText) elBtnSignInText.classList.remove('hidden');
                    if (elBtnSignUpText) elBtnSignUpText.classList.add('hidden');
                    if (elTitle) elTitle.textContent = "Welcome Back";
                    if (elDesc) elDesc.textContent = "Sign in to your supplier dashboard";
                  } else {
                    if (elSignIn) elSignIn.className = "flex-1 pb-3 text-sm font-bold border-b-2 border-transparent text-gray-400 hover:text-gray-600 dark:hover:text-gray-200";
                    if (elSignUp) elSignUp.className = "flex-1 pb-3 text-sm font-bold border-b-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400";
                    if (elNameField) elNameField.classList.remove('hidden');
                    if (elConfirmField) elConfirmField.classList.remove('hidden');
                    if (elRememberMeField) elRememberMeField.classList.add('hidden');
                    if (elBtnSignInText) elBtnSignInText.classList.add('hidden');
                    if (elBtnSignUpText) elBtnSignUpText.classList.remove('hidden');
                    if (elTitle) elTitle.textContent = "Create Account";
                    if (elDesc) elDesc.textContent = "Register to access chemical dashboard";
                  }
                }

                tabSignIn.addEventListener('click', () => setMode('signin'));
                tabSignUp.addEventListener('click', () => setMode('signup'));

                // Google Simulator Modals and views
                const googleBtn = document.getElementById('btn-google-login');
                const googleModal = document.getElementById('google-modal');
                const googleCloseBtn = document.getElementById('google-modal-close');
                const googleSelectView = document.getElementById('google-select-view');
                const googleCustomForm = document.getElementById('google-custom-form');
                const googleAnotherAccBtn = document.getElementById('google-another-account');
                const googleBackBtn = document.getElementById('google-custom-back');

                if (googleBtn && googleModal) {
                  googleBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    googleModal.classList.remove('hidden');
                    if (googleSelectView) googleSelectView.classList.remove('hidden');
                    if (googleCustomForm) googleCustomForm.classList.add('hidden');
                  });
                }

                if (googleCloseBtn && googleModal) {
                  googleCloseBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    googleModal.classList.add('hidden');
                  });
                }

                if (googleAnotherAccBtn && googleSelectView && googleCustomForm) {
                  googleAnotherAccBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    googleSelectView.classList.add('hidden');
                    googleCustomForm.classList.remove('hidden');
                  });
                }

                if (googleBackBtn && googleSelectView && googleCustomForm) {
                  googleBackBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    googleCustomForm.classList.add('hidden');
                    googleSelectView.classList.remove('hidden');
                  });
                }

                // Handle account click
                const accountButtons = document.querySelectorAll('.google-account-btn');
                accountButtons.forEach(function(btn) {
                  btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    const name = btn.getAttribute('data-google-name');
                    const email = btn.getAttribute('data-google-email');
                    if (name && email) {
                      triggerSuccess(name, email, true);
                    }
                  });
                });

                // Google Custom Form Submit
                if (googleCustomForm) {
                  googleCustomForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    const nameVal = document.getElementById('gName').value.trim();
                    const emailVal = document.getElementById('gEmail').value.trim();
                    if (nameVal && emailVal) {
                      triggerSuccess(nameVal, emailVal, true);
                    }
                  });
                }

                function triggerSuccess(name, username, isGoogle) {
                  const form = document.querySelector('form');
                  if (!form) return;

                  if (googleModal) googleModal.classList.add('hidden');

                  localStorage.setItem("isLoggedIn", "true");
                  localStorage.setItem("currentUser", JSON.stringify({ name: name, username: username }));

                  // Inject success element inside the card
                  const successDiv = document.createElement('div');
                  successDiv.className = "flex flex-col items-center text-center py-8 gap-4";
                  successDiv.innerHTML = '<div class="w-16 h-16 rounded-full bg-green-500/15 border-2 border-green-500 flex items-center justify-center">' +
                      '<svg class="text-green-500 dark:text-green-400 animate-pulse w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
                        '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>' +
                        '<polyline points="22 4 12 14.01 9 11.01"></polyline>' +
                      '</svg>' +
                    '</div>' +
                    '<div>' +
                      '<h3 class="font-bold text-lg text-gray-900 dark:text-white">' +
                        (isGoogle ? 'Google Login Successful!' : (currentMode === 'signin' ? 'Login Successful!' : 'Account Created Successfully!')) +
                      '</h3>' +
                      '<p class="text-gray-500 dark:text-gray-400 text-sm mt-1">Redirecting you to the portal...</p>' +
                    '</div>';

                  form.replaceWith(successDiv);

                  setTimeout(function() {
                    window.location.href = "../";
                  }, 1500);
                }

                // Regular Email/Password Form Submit
                const form = document.querySelector('form');
                if (form) {
                  form.addEventListener('submit', function(e) {
                    e.preventDefault();

                    // Clear previous errors
                    const elError = document.getElementById('fallback-error-msg');
                    if (elError) elError.remove();

                    const inputs = form.querySelectorAll('input');
                    inputs.forEach(function(input) {
                      input.classList.remove('border-red-400', 'dark:border-red-500');
                      input.classList.add('border-gray-200', 'dark:border-white/10');
                    });

                    const errTexts = form.querySelectorAll('.text-red-500');
                    errTexts.forEach(function(el) { el.remove(); });

                    const usernameVal = document.getElementById('username').value.trim();
                    const passwordVal = document.getElementById('password').value;

                    function showError(fieldId, msg) {
                      const inputEl = document.getElementById(fieldId);
                      if (inputEl) {
                        inputEl.classList.remove('border-gray-200', 'dark:border-white/10');
                        inputEl.classList.add('border-red-400', 'dark:border-red-500');

                        const wrapper = inputEl.closest('.relative');
                        if (wrapper) {
                          const p = document.createElement('p');
                          p.className = "text-red-500 dark:text-red-400 text-xs mt-0.5";
                          p.textContent = msg;
                          wrapper.parentNode.insertBefore(p, wrapper.nextSibling);
                        }
                      }
                    }

                    if (currentMode === 'signin') {
                      let hasError = false;
                      if (!usernameVal) {
                        showError('username', 'Username is required');
                        hasError = true;
                      }
                      if (!passwordVal) {
                        showError('password', 'Password is required');
                        hasError = true;
                      }
                      if (hasError) return;

                      // Simulated loading
                      const submitBtn = document.getElementById('btn-submit');
                      const originalBtnHTML = submitBtn.innerHTML;
                      submitBtn.disabled = true;
                      submitBtn.innerHTML = '<svg class="animate-spin h-4 w-4 mr-2 inline-block text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
                        '<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" class="opacity-25" style="fill:none;"></circle>' +
                        '<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>' +
                      '</svg>' +
                      '<span>Signing In...</span>';

                      setTimeout(function() {
                        const usersStr = localStorage.getItem("registeredUsers") || "[]";
                        const users = JSON.parse(usersStr);
                        const matchingUser = users.find(function(u) {
                          return u.username.toLowerCase() === usernameVal.toLowerCase() && u.pass === passwordVal;
                        });

                        if ((usernameVal === "Shanmukha" && passwordVal === "Shanmukha29*") || matchingUser) {
                          const loggedInName = matchingUser ? matchingUser.name : "Shanmukha";
                          triggerSuccess(loggedInName, usernameVal);
                        } else {
                          submitBtn.disabled = false;
                          submitBtn.innerHTML = originalBtnHTML;

                          const errorAlert = document.createElement('div');
                          errorAlert.id = "fallback-error-msg";
                          errorAlert.className = "flex gap-3 items-start bg-red-500/10 border border-red-500/20 rounded-2xl p-4 text-xs text-red-500 dark:text-red-400";
                          errorAlert.innerHTML = '<svg class="shrink-0 mt-0.5 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
                              '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>' +
                              '<line x1="12" y1="9" x2="12" y2="13"></line>' +
                              '<line x1="12" y1="17" x2="12.01" y2="17"></line>' +
                            '</svg>' +
                            '<p class="leading-relaxed">Invalid username or password.</p>';
                          form.insertBefore(errorAlert, form.firstChild);
                        }
                      }, 1200);

                    } else {
                      // Signup mode
                      const nameVal = document.getElementById('name').value.trim();
                      const confirmPasswordVal = document.getElementById('confirmPassword').value;

                      let hasError = false;
                      if (!nameVal) {
                        showError('name', 'Full Name is required');
                        hasError = true;
                      }
                      if (!usernameVal) {
                        showError('username', 'Username or Email is required');
                        hasError = true;
                      }
                      if (!passwordVal) {
                        showError('password', 'Password is required');
                        hasError = true;
                      } else if (passwordVal.length < 6) {
                        showError('password', 'Password must be at least 6 characters');
                        hasError = true;
                      }
                      if (passwordVal !== confirmPasswordVal) {
                        showError('confirmPassword', 'Passwords do not match');
                        hasError = true;
                      }
                      if (hasError) return;

                      // Simulated loading
                      const submitBtn = document.getElementById('btn-submit');
                      const originalBtnHTML = submitBtn.innerHTML;
                      submitBtn.disabled = true;
                      submitBtn.innerHTML = '<svg class="animate-spin h-4 w-4 mr-2 inline-block text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
                        '<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" class="opacity-25" style="fill:none;"></circle>' +
                        '<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>' +
                      '</svg>' +
                      '<span>Creating Account...</span>';

                      setTimeout(function() {
                        const usersStr = localStorage.getItem("registeredUsers") || "[]";
                        const users = JSON.parse(usersStr);

                        if (usernameVal.toLowerCase() === "shanmukha" || users.some(function(u) {
                          return u.username.toLowerCase() === usernameVal.toLowerCase();
                        })) {
                          submitBtn.disabled = false;
                          submitBtn.innerHTML = originalBtnHTML;

                          const errorAlert = document.createElement('div');
                          errorAlert.id = "fallback-error-msg";
                          errorAlert.className = "flex gap-3 items-start bg-red-500/10 border border-red-500/20 rounded-2xl p-4 text-xs text-red-500 dark:text-red-400";
                          errorAlert.innerHTML = '<svg class="shrink-0 mt-0.5 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
                              '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>' +
                              '<line x1="12" y1="9" x2="12" y2="13"></line>' +
                              '<line x1="12" y1="17" x2="12.01" y2="17"></line>' +
                            '</svg>' +
                            '<p class="leading-relaxed">Username or Email is already registered. Please sign in instead.</p>';
                          form.insertBefore(errorAlert, form.firstChild);
                          return;
                        }

                        users.push({ name: nameVal, username: usernameVal, pass: passwordVal });
                        localStorage.setItem("registeredUsers", JSON.stringify(users));
                        triggerSuccess(nameVal, usernameVal);
                      }, 1200);
                    }
                  });
                }
              }

              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initFallback);
              } else {
                initFallback();
              }
              setTimeout(initFallback, 500);
            })();
          `}})]})]})}],72978)}]);