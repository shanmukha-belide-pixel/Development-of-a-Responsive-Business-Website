(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,58559,(e,t,r)=>{t.exports=e.r(77810)},85889,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={formatUrl:function(){return o},formatWithValidation:function(){return d},urlObjectKeys:function(){return i}};for(var s in a)Object.defineProperty(r,s,{enumerable:!0,get:a[s]});let n=e.r(54866)._(e.r(75617)),l=/https?|ftp|gopher|file/;function o(e){let{auth:t,hostname:r}=e,a=e.protocol||"",s=e.pathname||"",o=e.hash||"",i=e.query||"",d=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?d=t+e.host:r&&(d=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(d+=":"+e.port)),i&&"object"==typeof i&&(i=String(n.urlQueryToSearchParams(i)));let c=e.search||i&&`?${i}`||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||l.test(a))&&!1!==d?(d="//"+(d||""),s&&"/"!==s[0]&&(s="/"+s)):d||(d=""),o&&"#"!==o[0]&&(o="#"+o),c&&"?"!==c[0]&&(c="?"+c),s=s.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${a}${d}${s}${c}${o}`}let i=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function d(e){return o(e)}},93568,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return s}});let a=e.r(46390);function s(e,t){let r=(0,a.useRef)(null),s=(0,a.useRef)(null);return(0,a.useCallback)(a=>{if(null===a){let e=r.current;e&&(r.current=null,e());let t=s.current;t&&(s.current=null,t())}else e&&(r.current=n(e,a)),t&&(s.current=n(t,a))},[e,t])}function n(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},15004,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return n}});let a=e.r(57905),s=e.r(84450);function n(e){if(!(0,a.isAbsoluteUrl)(e))return!0;try{let t=(0,a.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,s.hasBasePath)(r.pathname)}catch(e){return!1}}},53783,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},15103,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={default:function(){return b},useLinkStatus:function(){return y}};for(var s in a)Object.defineProperty(r,s,{enumerable:!0,get:a[s]});let n=e.r(54866),l=e.r(96696),o=n._(e.r(46390)),i=e.r(85889),d=e.r(50143),c=e.r(93568),u=e.r(57905),m=e.r(57001);e.r(56917);let g=e.r(99720),h=e.r(21752),f=e.r(15004),x=e.r(44066);function b(t){var r,a;let s,n,b,[y,k]=(0,o.useOptimistic)(h.IDLE_LINK_STATUS),v=(0,o.useRef)(null),{href:w,as:j,children:S,prefetch:N=null,passHref:C,replace:E,shallow:B,scroll:L,onClick:I,onMouseEnter:M,onTouchStart:T,legacyBehavior:A=!1,onNavigate:P,transitionTypes:F,ref:U,unstable_dynamicOnHover:V,..._}=t;s=S,A&&("string"==typeof s||"number"==typeof s)&&(s=(0,l.jsx)("a",{children:s}));let z=o.default.useContext(d.AppRouterContext),O=!1!==N,R=!1!==N?null===(a=N)||"auto"===a?x.FetchStrategy.PPR:x.FetchStrategy.Full:x.FetchStrategy.PPR,D="string"==typeof(r=j||w)?r:(0,i.formatUrl)(r);if(A){if(s?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});n=o.default.Children.only(s)}let H=A?n&&"object"==typeof n&&n.ref:U,$=o.default.useCallback(e=>(null!==z&&(v.current=(0,h.mountLinkInstance)(e,D,z,R,O,k)),()=>{v.current&&((0,h.unmountLinkForCurrentNavigation)(v.current),v.current=null),(0,h.unmountPrefetchableInstance)(e)}),[O,D,z,R,k]),q={ref:(0,c.useMergedRef)($,H),onClick(t){A||"function"!=typeof I||I(t),A&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(t),!z||t.defaultPrevented||function(t,r,a,s,n,l,i){if("u">typeof window){let d,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((d=t.currentTarget.getAttribute("target"))&&"_self"!==d||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,f.isLocalURL)(r)){s&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:u}=e.r(22219);o.default.startTransition(()=>{u(r,s?"replace":"push",!1===n?g.ScrollBehavior.NoScroll:g.ScrollBehavior.Default,a.current,i)})}}(t,D,v,E,L,P,F)},onMouseEnter(e){A||"function"!=typeof M||M(e),A&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),z&&O&&(0,h.onNavigationIntent)(e.currentTarget,!0===V)},onTouchStart:function(e){A||"function"!=typeof T||T(e),A&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),z&&O&&(0,h.onNavigationIntent)(e.currentTarget,!0===V)}};return(0,u.isAbsoluteUrl)(D)?q.href=D:A&&!C&&("a"!==n.type||"href"in n.props)||(q.href=(0,m.addBasePath)(D)),b=A?o.default.cloneElement(n,q):(0,l.jsx)("a",{..._,...q,children:s}),(0,l.jsx)(p.Provider,{value:y,children:b})}e.r(53783);let p=(0,o.createContext)(h.IDLE_LINK_STATUS),y=()=>(0,o.useContext)(p);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},7887,e=>{"use strict";var t=e.i(46390);let r=(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim(),a=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)};var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let n=(0,t.createContext)({}),l=(0,t.forwardRef)(({color:e,size:a,strokeWidth:l,absoluteStrokeWidth:o,className:i="",children:d,iconNode:c,...u},m)=>{let{size:g=24,strokeWidth:h=2,absoluteStrokeWidth:f=!1,color:x="currentColor",className:b=""}=(0,t.useContext)(n)??{},p=o??f?24*Number(l??h)/Number(a??g):l??h;return(0,t.createElement)("svg",{ref:m,...s,width:a??g??s.width,height:a??g??s.height,stroke:e??x,strokeWidth:p,className:r("lucide",b,i),...!d&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1})(u)&&{"aria-hidden":"true"},...u},[...c.map(([e,r])=>(0,t.createElement)(e,r)),...Array.isArray(d)?d:[d]])});e.s(["default",0,(e,s)=>{let n=(0,t.forwardRef)(({className:n,...o},i)=>(0,t.createElement)(l,{ref:i,iconNode:s,className:r(`lucide-${a(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,n),...o}));return n.displayName=a(e),n}],7887)},70598,e=>{"use strict";e.s(["getAssetPath",0,function(e){if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;let t=e.startsWith("/")?e:"/"+e;if("file:"===window.location.protocol){let e=window.location.pathname,r="";return(e.includes("/login/")||e.endsWith("/login")||e.includes("/privacy/")||e.endsWith("/privacy")||e.includes("/terms/")||e.endsWith("/terms")||e.includes("/_not-found/")||e.endsWith("/_not-found"))&&(r="../"),r+t.slice(1)}let r="/Development-of-a-Responsive-Business-Website";return t.startsWith(r)?t:r+t}])},74735,e=>{"use strict";var t=e.i(96696),r=e.i(59106),a=e.i(7887);let s=(0,a.default)("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),n=(0,a.default)("moon",[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]);var l=e.i(46390);e.s(["ThemeToggle",0,function(){let{theme:e,setTheme:a}=(0,r.useTheme)(),[o,i]=(0,l.useState)(!1);return((0,l.useEffect)(()=>i(!0),[]),o)?(0,t.jsx)("button",{onClick:()=>a("dark"===e?"light":"dark"),className:"w-9 h-9 flex items-center justify-center rounded-full bg-white/10 dark:bg-white/10 hover:bg-blue-500/20 border border-white/20 dark:border-white/10 transition-all duration-300 hover:scale-110","aria-label":"Toggle theme",children:"dark"===e?(0,t.jsx)(s,{size:16,className:"text-yellow-400"}):(0,t.jsx)(n,{size:16,className:"text-blue-400"})}):(0,t.jsx)("div",{className:"w-9 h-9"})}],74735)},97236,e=>{"use strict";let t=(0,e.i(7887).default)("arrow-left",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);e.s(["ArrowLeft",0,t],97236)},41416,e=>{"use strict";let t=(0,e.i(7887).default)("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);e.s(["Loader2",0,t],41416)},98189,e=>{"use strict";let t=(0,e.i(7887).default)("circle-check",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);e.s(["CheckCircle2",0,t],98189)},72978,e=>{"use strict";var t=e.i(96696),r=e.i(46390),a=e.i(58559),s=e.i(15103),n=e.i(7887);let l=(0,n.default)("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),o=(0,n.default)("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);var i=e.i(97236),d=e.i(41416),c=e.i(98189);let u=(0,n.default)("shield-alert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);var m=e.i(70598),g=e.i(74735);e.s(["default",0,function(){(0,a.useRouter)();let[e,n]=(0,r.useState)("signin"),[h,f]=(0,r.useState)(""),[x,b]=(0,r.useState)(""),[p,y]=(0,r.useState)(""),[k,v]=(0,r.useState)(""),[w,j]=(0,r.useState)(!1),[S,N]=(0,r.useState)({}),[C,E]=(0,r.useState)("idle"),[B,L]=(0,r.useState)(""),[I,M]=(0,r.useState)(!1),[T,A]=(0,r.useState)(""),[P,F]=(0,r.useState)(""),[U,V]=(0,r.useState)(!1),[_,z]=(0,r.useState)(!1);(0,r.useEffect)(()=>{z(!0)},[]);let O=async e=>{let t;e.preventDefault();let r=(t={},x.trim()||(t.username="Username is required"),p||(t.password="Password is required"),t);if(Object.keys(r).length>0)return void N(r);N({}),E("loading"),await new Promise(e=>setTimeout(e,1200));let a=x.trim(),s=JSON.parse(localStorage.getItem("registeredUsers")||"[]").find(e=>e.username.toLowerCase()===a.toLowerCase()&&e.pass===p);if("Shanmukha"===a&&"Shanmukha29*"===p||s){localStorage.setItem("isLoggedIn","true");let e=s?s.name:"Shanmukha";localStorage.setItem("currentUser",JSON.stringify({name:e,username:a})),E("success"),setTimeout(()=>{window.location.href="../"},1500)}else E("error"),L("Invalid username or password.")},R=async e=>{let t;e.preventDefault();let r=(t={},h.trim()||(t.name="Full Name is required"),x.trim()||(t.username="Username or Email is required"),p?p.length<6&&(t.password="Password must be at least 6 characters"):t.password="Password is required",p!==k&&(t.confirmPassword="Passwords do not match"),t);if(Object.keys(r).length>0)return void N(r);N({}),E("loading"),await new Promise(e=>setTimeout(e,1200));let a=JSON.parse(localStorage.getItem("registeredUsers")||"[]");if("shanmukha"===x.trim().toLowerCase()||a.some(e=>e.username.toLowerCase()===x.trim().toLowerCase())){E("error"),L("Username or Email is already registered. Please sign in instead.");return}a.push({name:h.trim(),username:x.trim(),pass:p}),localStorage.setItem("registeredUsers",JSON.stringify(a)),localStorage.setItem("isLoggedIn","true"),localStorage.setItem("currentUser",JSON.stringify({name:h.trim(),username:x.trim()})),E("success"),setTimeout(()=>{window.location.href="../"},1500)},D=async(e,t)=>{M(!1),E("loading"),await new Promise(e=>setTimeout(e,1200)),localStorage.setItem("isLoggedIn","true"),localStorage.setItem("currentUser",JSON.stringify({name:e,username:t})),E("success"),setTimeout(()=>{window.location.href="../"},1500)};return(0,t.jsxs)("main",{className:"relative min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center p-4 overflow-hidden",children:[(0,t.jsx)("div",{className:"absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/5 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"}),(0,t.jsx)("div",{className:"absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/5 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none translate-x-1/2 translate-y-1/2"}),(0,t.jsx)("div",{className:"absolute top-6 left-6 flex items-center gap-4 z-10",children:(0,t.jsxs)(s.default,{href:"/",className:"inline-flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",children:[(0,t.jsx)(i.ArrowLeft,{size:16})," Back to Home"]})}),(0,t.jsx)("div",{className:"absolute top-6 right-6 z-10",children:(0,t.jsx)(g.ThemeToggle,{})}),(0,t.jsxs)("div",{className:"relative w-full max-w-md bg-white dark:bg-gray-900/60 border border-gray-200 dark:border-white/5 rounded-3xl p-8 md:p-10 shadow-xl shadow-blue-900/5 backdrop-blur-xl",children:[(0,t.jsxs)("div",{className:"flex flex-col items-center text-center mb-6",children:[(0,t.jsx)(s.default,{href:"/",className:"inline-block mb-4 hover:scale-105 transition-transform duration-300",children:(0,t.jsx)("img",{src:(0,m.getAssetPath)("/images/logo.png"),alt:"Teja Suppliers Logo",className:"w-16 h-16 rounded-2xl object-contain bg-white p-1.5 border border-gray-200 dark:border-white/10 shadow-md shadow-blue-500/10"})}),(0,t.jsx)("h1",{className:"font-sans font-black text-2xl text-gray-900 dark:text-white",children:"signin"===e?"Welcome Back":"Create Account"}),(0,t.jsx)("p",{className:"text-gray-500 dark:text-gray-400 text-sm mt-1",children:"signin"===e?"Sign in to your supplier dashboard":"Register to access chemical dashboard"})]}),(0,t.jsxs)("div",{className:"flex border-b border-gray-100 dark:border-white/5 mb-6",children:[(0,t.jsx)("button",{id:"tab-signin",type:"button",onClick:()=>{n("signin"),N({}),L("")},className:`flex-1 pb-3 text-sm font-bold border-b-2 transition-colors ${"signin"===e?"border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400":"border-transparent text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"}`,children:"Sign In"}),(0,t.jsx)("button",{id:"tab-signup",type:"button",onClick:()=>{n("signup"),N({}),L("")},className:`flex-1 pb-3 text-sm font-bold border-b-2 transition-colors ${"signup"===e?"border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400":"border-transparent text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"}`,children:"Sign Up"})]}),"success"===C?(0,t.jsxs)("div",{className:"flex flex-col items-center text-center py-8 gap-4",children:[(0,t.jsx)("div",{className:"w-16 h-16 rounded-full bg-green-500/15 border-2 border-green-500 flex items-center justify-center",children:(0,t.jsx)(c.CheckCircle2,{size:28,className:"text-green-500 dark:text-green-400 animate-pulse"})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"font-bold text-lg text-gray-900 dark:text-white",children:"signin"===e?"Login Successful!":"Account Created Successfully!"}),(0,t.jsx)("p",{className:"text-gray-500 dark:text-gray-400 text-sm mt-1",children:"Redirecting you to the portal..."})]})]}):(0,t.jsxs)("form",{onSubmit:"signin"===e?O:R,className:"space-y-4",noValidate:!0,children:["error"===C&&(0,t.jsxs)("div",{className:"flex gap-3 items-start bg-red-500/10 border border-red-500/20 rounded-2xl p-4 text-xs text-red-500 dark:text-red-400",children:[(0,t.jsx)(u,{size:16,className:"shrink-0 mt-0.5"}),(0,t.jsx)("p",{className:"leading-relaxed",children:B})]}),(0,t.jsxs)("div",{className:`flex flex-col gap-1.5 ${"signup"===e?"":"hidden"}`,id:"signup-name-field",children:[(0,t.jsx)("label",{htmlFor:"name",className:"text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400",children:"Full Name"}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)("input",{id:"name",type:"text",value:h,placeholder:"Shanmukha Belide",onChange:e=>f(e.target.value),className:`w-full bg-gray-50 dark:bg-gray-800/60 border rounded-xl pl-11 pr-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 dark:focus:border-blue-400 ${S.name?"border-red-400 dark:border-red-500":"border-gray-200 dark:border-white/10"}`}),(0,t.jsx)(l,{size:16,className:"absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"})]}),S.name&&(0,t.jsx)("p",{className:"text-red-500 dark:text-red-400 text-xs mt-0.5",children:S.name})]}),(0,t.jsxs)("div",{className:"flex flex-col gap-1.5",children:[(0,t.jsx)("label",{htmlFor:"username",className:"text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400",children:"signin"===e?"Username":"Username or Email"}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)("input",{id:"username",type:"text",value:x,placeholder:"signin"===e?"Shanmukha":"shanmukha@gmail.com",onChange:e=>b(e.target.value),className:`w-full bg-gray-50 dark:bg-gray-800/60 border rounded-xl pl-11 pr-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 dark:focus:border-blue-400 ${S.username?"border-red-400 dark:border-red-500":"border-gray-200 dark:border-white/10"}`}),(0,t.jsx)(l,{size:16,className:"absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"})]}),S.username&&(0,t.jsx)("p",{className:"text-red-500 dark:text-red-400 text-xs mt-0.5",children:S.username})]}),(0,t.jsxs)("div",{className:"flex flex-col gap-1.5",children:[(0,t.jsxs)("div",{className:"flex justify-between items-center",children:[(0,t.jsx)("label",{htmlFor:"password",className:"text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400",children:"Password"}),"signin"===e&&(0,t.jsx)("a",{href:"#",onClick:e=>{e.preventDefault(),alert("Please contact the administrator to reset your password.")},className:"text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline",children:"Forgot Password?"})]}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)("input",{id:"password",type:"password",value:p,placeholder:"••••••••",onChange:e=>y(e.target.value),className:`w-full bg-gray-50 dark:bg-gray-800/60 border rounded-xl pl-11 pr-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 dark:focus:border-blue-400 ${S.password?"border-red-400 dark:border-red-500":"border-gray-200 dark:border-white/10"}`}),(0,t.jsx)(o,{size:16,className:"absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"})]}),S.password&&(0,t.jsx)("p",{className:"text-red-500 dark:text-red-400 text-xs mt-0.5",children:S.password})]}),(0,t.jsxs)("div",{className:`flex flex-col gap-1.5 ${"signup"===e?"":"hidden"}`,id:"signup-confirm-field",children:[(0,t.jsx)("label",{htmlFor:"confirmPassword",className:"text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400",children:"Confirm Password"}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)("input",{id:"confirmPassword",type:"password",value:k,placeholder:"••••••••",onChange:e=>v(e.target.value),className:`w-full bg-gray-50 dark:bg-gray-800/60 border rounded-xl pl-11 pr-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 dark:focus:border-blue-400 ${S.confirmPassword?"border-red-400 dark:border-red-500":"border-gray-200 dark:border-white/10"}`}),(0,t.jsx)(o,{size:16,className:"absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"})]}),S.confirmPassword&&(0,t.jsx)("p",{className:"text-red-500 dark:text-red-400 text-xs mt-0.5",children:S.confirmPassword})]}),(0,t.jsx)("div",{className:"signin"===e?"":"hidden",id:"remember-me-field",children:(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("input",{id:"remember",type:"checkbox",checked:w,onChange:e=>j(e.target.checked),className:"w-4 h-4 text-blue-600 border-gray-300 dark:border-white/10 rounded focus:ring-blue-500/40"}),(0,t.jsx)("label",{htmlFor:"remember",className:"ml-2 text-xs font-medium text-gray-600 dark:text-gray-400 select-none",children:"Remember me on this device"})]})}),(0,t.jsx)("button",{type:"submit",id:"btn-submit",disabled:"loading"===C,className:"w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-sm transition-all duration-300 btn-glow disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.01]",children:"loading"===C?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.Loader2,{size:16,className:"animate-spin"}),(0,t.jsx)("span",{className:"signin"===e?"":"hidden",id:"btn-loading-signin-text",children:"Signing In..."}),(0,t.jsx)("span",{className:"signup"===e?"":"hidden",id:"btn-loading-signup-text",children:"Creating Account..."})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"signin"===e?"":"hidden",id:"btn-signin-text",children:"Sign In"}),(0,t.jsx)("span",{className:"signup"===e?"":"hidden",id:"btn-signup-text",children:"Create Account"})]})}),(0,t.jsxs)("div",{className:"relative my-5 flex items-center justify-center",children:[(0,t.jsx)("div",{className:"absolute inset-0 flex items-center",children:(0,t.jsx)("div",{className:"w-full border-t border-gray-200 dark:border-white/5"})}),(0,t.jsx)("span",{className:"relative bg-white dark:bg-gray-900 px-4 text-[10px] uppercase tracking-wider text-gray-400 font-bold",children:"Or continue with"})]}),(0,t.jsxs)("button",{type:"button",id:"btn-google-login",onClick:e=>{e.preventDefault(),M(!0),V(!1),A(""),F("")},className:"w-full flex items-center justify-center gap-2.5 py-3 border border-gray-200 dark:border-white/10 rounded-xl bg-gray-50 dark:bg-gray-800/40 hover:bg-gray-100 dark:hover:bg-gray-800/60 text-gray-700 dark:text-gray-200 font-bold text-sm transition-all duration-300",children:[(0,t.jsxs)("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",children:[(0,t.jsx)("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),(0,t.jsx)("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),(0,t.jsx)("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.22-.66-.35-1.36-.35-2.09z"}),(0,t.jsx)("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),"Google"]})]})]}),(0,t.jsx)("div",{id:"google-modal",className:`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 ${I?"":"hidden"}`,children:(0,t.jsxs)("div",{className:"w-full max-w-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-2xl p-6 shadow-2xl relative flex flex-col gap-6",children:[(0,t.jsx)("button",{id:"google-modal-close",onClick:()=>M(!1),className:"absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 font-bold text-base","aria-label":"Close modal",children:"✕"}),(0,t.jsxs)("div",{className:"flex flex-col items-center text-center",children:[(0,t.jsxs)("svg",{className:"w-10 h-10 mb-3",viewBox:"0 0 24 24",children:[(0,t.jsx)("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),(0,t.jsx)("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),(0,t.jsx)("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.22-.66-.35-1.36-.35-2.09z"}),(0,t.jsx)("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),(0,t.jsx)("h2",{className:"font-bold text-lg text-gray-900 dark:text-white",children:"Choose an account"}),(0,t.jsx)("p",{className:"text-gray-500 dark:text-gray-400 text-xs",children:"to continue to Teja Suppliers"})]}),(0,t.jsxs)("div",{className:U?"hidden":"flex flex-col gap-2.5",id:"google-select-view",children:[[{name:"Shanmukha Belide",email:"shanmukha.belide@gmail.com",initial:"S",bg:"bg-blue-500"},{name:"Teja Suppliers Admin",email:"admin@tejasuppliers.com",initial:"T",bg:"bg-green-600"}].map(e=>(0,t.jsxs)("button",{type:"button","data-google-name":e.name,"data-google-email":e.email,onClick:()=>D(e.name,e.email),className:"google-account-btn flex items-center gap-3 w-full p-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/60 border border-transparent hover:border-gray-200 dark:hover:border-white/10 text-left transition-all duration-200",children:[(0,t.jsx)("div",{className:`w-8 h-8 rounded-full ${e.bg} flex items-center justify-center text-white font-bold text-sm shrink-0`,children:e.initial}),(0,t.jsxs)("div",{className:"flex flex-col leading-tight overflow-hidden",children:[(0,t.jsx)("span",{className:"text-xs font-bold text-gray-900 dark:text-white truncate",children:e.name}),(0,t.jsx)("span",{className:"text-[10px] text-gray-500 dark:text-gray-400 truncate",children:e.email})]})]},e.email)),(0,t.jsxs)("button",{type:"button",id:"google-another-account",onClick:()=>V(!0),className:"flex items-center gap-3 w-full p-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/60 border border-transparent hover:border-gray-200 dark:hover:border-white/10 text-left text-xs font-semibold text-blue-600 dark:text-blue-400 transition-all duration-200",children:[(0,t.jsx)("div",{className:"w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 font-bold text-sm shrink-0",children:"+"}),"Use another account"]})]}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),T&&P&&D(T,P)},className:`space-y-4 ${U?"":"hidden"}`,id:"google-custom-form",children:[(0,t.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,t.jsx)("label",{htmlFor:"gName",className:"text-[10px] font-bold text-gray-400 uppercase",children:"Your Name"}),(0,t.jsx)("input",{id:"gName",type:"text",required:!0,value:T,placeholder:"Shanmukha Belide",onChange:e=>A(e.target.value),className:"w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl px-3 py-2.5 text-xs text-gray-900 dark:text-white outline-none focus:border-blue-500"})]}),(0,t.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,t.jsx)("label",{htmlFor:"gEmail",className:"text-[10px] font-bold text-gray-400 uppercase",children:"Google Email"}),(0,t.jsx)("input",{id:"gEmail",type:"email",required:!0,value:P,placeholder:"name@gmail.com",onChange:e=>F(e.target.value),className:"w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl px-3 py-2.5 text-xs text-gray-900 dark:text-white outline-none focus:border-blue-500"})]}),(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)("button",{type:"button",id:"google-custom-back",onClick:()=>V(!1),className:"flex-1 py-2 text-xs font-bold border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400",children:"Back"}),(0,t.jsx)("button",{type:"submit",className:"flex-1 py-2 text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-xl",children:"Continue"})]})]})]})}),(0,t.jsx)("script",{dangerouslySetInnerHTML:{__html:`
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
          `}})]})}],72978)}]);