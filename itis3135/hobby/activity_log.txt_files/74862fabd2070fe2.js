;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="4d68986f-63be-a6ec-a72f-e7daba8bc066")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,439647,e=>{e.v({button:"index-module__R_xbPa__button",container:"index-module__R_xbPa__container",menu:"index-module__R_xbPa__menu",notificationIndicator:"index-module__R_xbPa__notificationIndicator",popover:"index-module__R_xbPa__popover"})},751299,935267,e=>{"use strict";var t=e.i(276385),r=e.i(389959),i=e.i(167392),n=e.i(532764),a=e.i(993796),o=e.i(973245),l=e.i(304277);e.i(566901);var s=e.i(613141);let u={},c=o.gql`
    query notificationCount {
  currentUser {
    id
    notificationCount
  }
}
    `,d=o.gql`
    subscription notificationCountChanges {
  notificationCount
}
    `;function p(){var e;let t,i,{data:n,refetch:a,client:o}=(t={...u,...void 0},l.useQuery(c,t)),p=(0,r.useCallback)(e=>{n?.currentUser&&o.writeQuery({query:c,data:{...n,currentUser:{...n.currentUser,notificationCount:e}}})},[n?.currentUser?.id]);return e={onData:({data:{data:e}})=>{"number"==typeof e?.notificationCount&&p(e.notificationCount)}},i={...u,...e},s.useSubscription(d,i),{count:Math.max(0,n?.currentUser?.notificationCount||0),refetch:a,setUnreadCount:p}}e.s(["default",()=>p],935267);var f=e.i(140487),m=e.i(136540),g=e.i(604963),h=e.i(625484),y=e.i(439647);function v(e){let[o,l]=(0,r.useState)(!1),{count:s}=p(),u=(0,a.useFlag)({controlName:"flag-agent-teamwork"});return(0,t.jsxs)(h.View,{clsx:y.default.container,children:[(0,t.jsxs)(g.PopoverTrigger,{isOpen:o,onOpenChange:t=>{l(t),e.onOpenChange?.(t)},label:"Menu",placement:"bottom start",clsx:y.default.popover,offset:2,containerPadding:2,children:[u?(0,t.jsx)(m.IconButton,{alt:"Menu",size:28,tooltipBehavior:"hidden",children:(0,t.jsx)(n.default,{})}):(0,t.jsx)(f.Button,{variant:"nofill",clsx:y.default.button,text:"",iconLeft:(0,t.jsx)(n.default,{}),iconRight:(0,t.jsx)(i.default,{size:12})}),(0,t.jsx)(h.View,{p:4,clsx:y.default.menu,children:"function"==typeof e.children?e.children(()=>l(!1)):e.children})]}),s>0?(0,t.jsx)(h.View,{clsx:y.default.notificationIndicator}):null]})}e.s(["NavMenu",()=>v],751299)},26289,e=>{e.v({divider:"DividerV-module__sMUe4W__divider"})},764848,e=>{"use strict";var t=e.i(276385),r=e.i(26289);function i({className:e}){return(0,t.jsx)("div",{clsx:[r.default.divider,e]})}e.s(["DividerV",()=>i])},187505,e=>{"use strict";var t=e.i(389959),r=e.i(673920),i=e.i(441329),n=e.i(858248),a=e.i(709485),o=e.i(782514);function l(){let e=(0,o.useTrackingHierarchy)(),r=(0,i.useIsInBonsaiWebview)();return{trackClick:(0,t.useCallback)(t=>{let i={...e,...t,isBonsai:r};(0,n.track)(a.events.CLICK,i)},[e,r])}}function s(){let e=(0,o.useTrackingHierarchy)(),r=(0,i.useIsInBonsaiWebview)();return{trackImpression:(0,t.useCallback)(t=>{let i={...e,...t,isBonsai:r};(0,n.track)(a.events.IMPRESSION,i)},[e,r])}}function u(e){let{trackImpression:t}=s();(0,r.useEffectOnce)(()=>{t(e)})}e.s(["useTrackClick",()=>l,"useTrackImpression",()=>s,"useTrackImpressionOnce",()=>u])},754873,e=>{"use strict";var t=e.i(480028),r=e.i(877249),i=e.i(613355);let n=t.tokens.accentPrimaryDefault,a={":focus":i.sharedFocusStyles},o={nofill:{transitionProperty:"background-color, box-shadow",transitionDuration:r.TRANSITIONS.duration,transitionTimingFunction:r.TRANSITIONS.timingFunction,borderRadius:t.tokens.borderRadiusDefault,backgroundColor:"transparent",borderWidth:1,borderStyle:"solid",borderColor:"transparent","@media (hover: hover)":{":not([disabled], [aria-disabled])":{...a,cursor:"pointer",":hover":{backgroundColor:t.tokens.interactiveBackground,transitionDuration:"0ms"},":not(textarea):active":{backgroundColor:t.tokens.interactiveBackground,"html[data-focus-visible] &:focus":{borderColor:n}}}},":not([disabled], [aria-disabled])":{...a,":not(textarea):active":{backgroundColor:t.tokens.interactiveBackground,"html[data-focus-visible] &:focus":{borderColor:n}}}},filled:{transitionProperty:"background-color, box-shadow",transitionDuration:r.TRANSITIONS.duration,transitionTimingFunction:r.TRANSITIONS.timingFunction,borderRadius:t.tokens.borderRadiusDefault,backgroundColor:t.tokens.interactiveBackground,borderWidth:1,borderStyle:"solid",borderColor:"transparent","@media (hover: hover)":{":not([disabled], [aria-disabled])":{...a,cursor:"pointer",":hover":{backgroundColor:t.tokens.interactiveBackgroundActive,transitionDuration:"0ms"},":active":{backgroundColor:t.tokens.interactiveBackgroundActive,"html[data-focus-visible] &:focus":{borderColor:n}}}}},outlined:{transitionProperty:"background-color, box-shadow",transitionDuration:r.TRANSITIONS.duration,transitionTimingFunction:r.TRANSITIONS.timingFunction,borderRadius:t.tokens.borderRadiusDefault,backgroundColor:"transparent",borderWidth:1,borderStyle:"solid",borderColor:t.tokens.interactiveBorder,"@media (hover: hover)":{":not([disabled], [aria-disabled])":{...a,cursor:"pointer",":hover":{backgroundColor:t.tokens.interactiveBackground,transitionDuration:"0ms"},":not(textarea):active":{"html[data-focus-visible] &:focus":{borderColor:n}}}}},filledAndOutlined:{transitionProperty:"border-color, box-shadow",transitionDuration:r.TRANSITIONS.duration,transitionTimingFunction:r.TRANSITIONS.timingFunction,borderRadius:t.tokens.borderRadiusDefault,backgroundColor:t.tokens.interactiveBackground,borderWidth:1,borderStyle:"solid",borderColor:"transparent","@media (hover: hover)":{":not([disabled], [aria-disabled])":{borderColor:t.tokens.interactiveBorder,...a,cursor:"pointer",":hover":{borderColor:t.tokens.interactiveBorderHover,transitionDuration:"0ms"},":not(textarea):active":{transition:"none","html[data-focus-visible] &:focus":{borderColor:n}}}}},listItem:{transitionProperty:"box-shadow",transitionDuration:r.TRANSITIONS.duration,transitionTimingFunction:r.TRANSITIONS.timingFunction,borderWidth:1,borderStyle:"solid",borderColor:"transparent","@media (hover: hover)":{":not([disabled], [aria-disabled])":{...a,cursor:"pointer",":hover":{backgroundColor:t.tokens.interactiveBackground,transitionDuration:"0ms"},":not(textarea):active":{backgroundColor:t.tokens.interactiveBackgroundActive,"html[data-focus-visible] &:focus":{borderColor:n}}}}}};e.s(["interactive",0,o])},337761,e=>{"use strict";class t{map=new Map;getOrInit(e){let t=this.map.get(e);return t||(t=new Map,this.map.set(e,t)),t}add(e,t,r){this.getOrInit(e).set(t,r)}flush(){for(let[e,t]of this.map)if(e&&"current"in e&&(e=e.current),e)for(let[r,i]of t)e.style.setProperty(r,i);this.map.clear()}flushNode(e){if(!e)return;let t=e,r=this.map.get(t);if(r&&(e&&"current"in e&&(e=e.current),e)){for(let[t,i]of r)e.style.setProperty(t,i);this.map.delete(t)}}}let r=new t,i=!1;function n(e,t,n){if(null!==e){if("string"==typeof t){if(void 0===n)throw Error("value is undefined when prop is string");r.add(e,t,n)}else for(let i in t)r.add(e,i,t[i]);i||(i=!0,requestAnimationFrame(()=>{r.flush(),i=!1}))}}function a(e){r.flushNode(e)}e.s(["styleSet",()=>n,"styleSetFlushNodeImmediately",()=>a])},869226,e=>{"use strict";var t=e.i(389959);e.i(242933);var r=e.i(424360),i=e.i(377930),n=e.i(98816),a=e.i(337761);function o(e,o,l,s){let u=("function"==typeof l?s:l)??[],c=(0,n.default)("function"==typeof l?l:void 0);(0,t.useLayoutEffect)(()=>{function t(t){let r=c.current?c.current(t):t;null!==r&&(0,a.styleSet)(e,r)}return"current"in o?(t(o.current),(0,a.styleSetFlushNodeImmediately)(e)):o instanceof r.Multicast&&r.Multicast.getLastValueEscapeHatch(o)!==i.None&&(t(r.Multicast.getLastValueEscapeHatch(o)),(0,a.styleSetFlushNodeImmediately)(e)),o.subscribe(t)},[e,o,c,...u])}e.s(["useStyleSet",()=>o])},532764,e=>{"use strict";var t=e.i(276385),r=e.i(116235);function i(e){return(0,t.jsx)(r.default,{...e,children:(0,t.jsx)("path",{d:"M12.532 7.726c0 .082 0 .123.002.164a1.244 1.244 0 0 0 .392.815c.218.22.515.34.823.34h3.343c.668 0 1.002 0 1.257.131.224.116.407.3.521.527.13.258.13.596.13 1.271v2.04c0 .675 0 1.013-.13 1.27a1.199 1.199 0 0 1-.521.528c-.255.131-.59.131-1.257.131H13.74c-.305 0-.6.119-.815.337-.05.05-.074.074-.101.106a1.244 1.244 0 0 0-.29.709c-.003.041-.003.082-.003.163v2.813c0 .675 0 1.013-.13 1.27a1.2 1.2 0 0 1-.522.528c-.255.131-.589.131-1.257.131H7.908c-.668 0-1.002 0-1.257-.131a1.2 1.2 0 0 1-.521-.527C6 20.084 6 19.746 6 19.07v-2.18c0-.675 0-1.012.13-1.27a1.2 1.2 0 0 1 .521-.527c.255-.132.59-.132 1.257-.132H11.301a1.21 1.21 0 0 0 .81-.339l.017-.017c.058-.059.087-.088.118-.124.16-.19.263-.441.282-.69.004-.046.004-.093.004-.187V10.38c0-.093 0-.14-.004-.187-.02-.248-.123-.5-.282-.69-.03-.035-.06-.065-.118-.124a1.157 1.157 0 0 0-.824-.34H7.908c-.668 0-1.002 0-1.257-.132a1.2 1.2 0 0 1-.521-.527C6 8.121 6 7.784 6 7.11v-2.18c0-.675 0-1.013.13-1.27a1.2 1.2 0 0 1 .521-.528C6.906 3 7.241 3 7.908 3h2.715c.668 0 1.002 0 1.257.131.225.116.407.3.522.527.13.258.13.596.13 1.271v2.797Z"})})}e.s(["default",()=>i])},346781,e=>{"use strict";var t=e.i(276385),r=e.i(116235);function i(e){return(0,t.jsx)(r.default,{...e,children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M11 2.25a8.75 8.75 0 0 1 6.693 14.383l3.837 3.837a.75.75 0 0 1-1.06 1.06l-3.837-3.837A8.75 8.75 0 1 1 11 2.25Zm0 1.5a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5Z",clipRule:"evenodd"})})}e.s(["default",()=>i])},167392,e=>{"use strict";var t=e.i(276385),r=e.i(116235);function i(e){return(0,t.jsx)(r.default,{...e,children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M12.53 15.53a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 0 1 1.06-1.06L12 13.94l5.47-5.47a.75.75 0 1 1 1.06 1.06l-6 6Z",clipRule:"evenodd"})})}e.s(["default",()=>i])},712903,e=>{"use strict";var t=e.i(276385),r=e.i(116235);function i(e){return(0,t.jsx)(r.default,{...e,children:(0,t.jsx)("path",{d:"M12.554.492c.49 3.288 1.307 7.363 2.448 8.505 1.142 1.142 5.22 1.959 8.51 2.449.651.097.65 1.01 0 1.107-3.29.49-7.367 1.307-8.51 2.448-1.143 1.143-1.96 5.227-2.45 8.518-.096.642-1.009.641-1.104 0-.49-3.291-1.308-7.374-2.45-8.517-1.142-1.143-5.217-1.959-8.506-2.45a.558.558 0 0 1 0-1.107c3.289-.49 7.363-1.307 8.505-2.448 1.142-1.142 1.959-5.216 2.45-8.505a.558.558 0 0 1 1.107 0Z"})})}e.s(["default",()=>i])},40916,e=>{"use strict";var t=e.i(276385),r=e.i(116235);function i(e){return(0,t.jsx)(r.default,{...e,children:(0,t.jsx)("path",{d:"M12 4.25a.75.75 0 0 1 .75.75v6.25H19a.75.75 0 0 1 0 1.5h-6.25V19a.75.75 0 0 1-1.5 0v-6.25H5a.75.75 0 0 1 0-1.5h6.25V5a.75.75 0 0 1 .75-.75Z"})})}e.s(["default",()=>i])},568430,e=>{"use strict";var t=e.i(276385),r=e.i(116235);function i(e){return(0,t.jsx)(r.default,{...e,children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M11.47 8.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 1 1-1.06 1.06L12 10.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06l6-6Z",clipRule:"evenodd"})})}e.s(["default",()=>i])},813707,e=>{"use strict";var t=e.i(276385),r=e.i(116235);function i(e){return(0,t.jsx)(r.default,{...e,children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M14.017 1.543a6.752 6.752 0 0 1 3.77-.056l.192.068c.91.39.97 1.556.36 2.17l-3.104 3.1a.25.25 0 0 0 0 .35l1.594 1.593a.25.25 0 0 0 .17.068.25.25 0 0 0 .171-.068l3.106-3.104c.654-.655 1.937-.538 2.236.55l.06.232a6.75 6.75 0 0 1-8.863 7.905l-7.56 7.56A2.872 2.872 0 0 1 2.09 17.85l7.559-7.56a6.752 6.752 0 0 1 4.368-8.747ZM17.08 2.86a5.25 5.25 0 0 0-2.622.117 5.251 5.251 0 0 0-3.244 7.183.75.75 0 0 1-.153.84l-7.91 7.91a1.372 1.372 0 0 0 1.938 1.94L13 12.94a.75.75 0 0 1 .84-.154 5.25 5.25 0 0 0 7.3-5.864l-2.914 2.913a1.752 1.752 0 0 1-2.45 0l-1.606-1.604-.004-.006a1.75 1.75 0 0 1 0-2.45L17.08 2.86Z",clipRule:"evenodd"})})}e.s(["default",()=>i])},219577,e=>{"use strict";e.s(["APP_HEADER_HEIGHT",0,40,"HEADER_HEIGHT",0,48,"HEADER_Z_INDEX",0,1002,"SIDEBAR_OVERLAY_Z_INDEX",0,1e3,"SIDEBAR_WIDTH",0,240,"SIDEBAR_Z_INDEX",0,1001])},390252,e=>{"use strict";var t=e.i(973245),r=e.i(202068),i=e.i(304277);e.i(566901);let n={},a=t.gql`
    query UpgradeButton {
  currentUser {
    id
    ...UserPlanStateCurrentUser
  }
}
    ${r.UserPlanStateCurrentUserFragmentDoc}`;function o(e){let t={...n,...e};return i.useQuery(a,t)}e.s(["useUpgradeButtonQuery",()=>o])},838515,e=>{"use strict";e.i(368964),e.i(569910),e.s(["planPeriodFromInterval",0,e=>"month"===e?"monthly":"year"===e?"yearly":null])},71271,e=>{"use strict";var t=e.i(368964),r=e.i(596139),i=e.i(838515);let n=e=>{let{billingInfo:t,userSubscription:r,paymentMethod:i}=e,n=i?.__typename==="PaymentMethod"&&i.isSaved;if(!r?.isTrial)return null;let a=t?.planInfo?.cancelAt??(n?null:r?.timeRemainingInTrial??null);return a?new Date(a):null};function a({user:e}){let{userSubscriptionType:a,billingInfo:o,userSubscription:l}=e;if(null==l||null==a)return{showUpgradeCta:!0,plan:{name:r.freePlanName}};let s=n(e),u=a===t.UserSubscriptionTypeEnum.Pro?r.proPlanName:r.corePlanName,c=!1===l.isTrial,d=!0===l.isTrial&&null===s;return{showUpgradeCta:!c&&!d,plan:{name:u,period:(0,i.planPeriodFromInterval)(o?.planInfo?.interval),trial:l?.isTrial?{cancelsAt:s,isManuallyCancelled:(e=>{let{billingInfo:t}=e;return!!t?.planInfo?.cancelAt})(e)}:null,provider:o?.planInfo?.provider??t.PaymentProviderEnum.Stripe}}}e.s(["getCurrentPlanState",()=>a,"trialWillCancelAt",0,n])},418725,e=>{"use strict";var t,r=e.i(276385),i=e.i(389959),n=e.i(390252),a=e.i(712903),o=e.i(596139);e.i(537010);var l=e.i(82048),s=e.i(717931),u=e.i(858248),c=e.i(709485),d=e.i(236319),p=e.i(973519),f=e.i(71271),m=e.i(140487),g=e.i(91720),h=e.i(136540),y=((t=y||{}).TrialUpgrade="trial_upgrade",t.Default="default",t);e.s(["default",0,({context:e,variant:t="outlined",onCancel:y,onClickCallback:v,text:C,surface:b,onPlanCheckoutComplete:k,iconButton:R,redirectPath:P,modalHeadingText:U,modalSubHeadingText:x,directCheckout:I=!1,planPeriod:_="monthly",...T})=>{let{isGooglePlayStoreTWA:S}=(0,i.useContext)(l.GooglePlayContext),{loading:A}=(()=>{let{data:e,loading:t}=(0,n.useUpgradeButtonQuery)();if(t)return{loading:!0,upgradeType:null};let r=e?.currentUser?(0,f.getCurrentPlanState)({user:e.currentUser}):null;return r?.plan.name===o.corePlanName&&null!==r.plan.trial?{loading:!1,upgradeType:"trial_upgrade"}:{loading:!1,upgradeType:"default"}})(),{show:E}=(0,p.useGlobalModal)(),{openCheckout:N,isLoading:F}=(0,d.useRegionalCheckout)(),M=(0,s.usePlanCheckoutUrl)({prefix:o.corePlanPrefix,interval:_,source:e,successRedirectPath:P,cancelRedirectPath:P});if(S)return null;let D=C||`Join Replit ${o.corePlanName}`,w=()=>{(0,u.track)(c.events.UPGRADE_SELECTED,{source:e}),v&&v()},L=async()=>{w();try{await E("MembershipPurchaseModal",{analyticsContext:{upgrade:{context:e,surface:b}},onPurchaseComplete:k,redirectPath:P,headingText:U,subHeadingText:x})}finally{y&&y()}};if(R)return(0,r.jsx)(h.IconButton,{alt:D,onClick:L,disabled:A,children:(0,r.jsx)(a.default,{})});if(I){let{hideCoreIcon:e,className:i,clsx:n,disabled:l,slot:s,...u}=T;if(N){let e=A||F;return(0,r.jsx)(m.Button,{...u,iconLeft:T.hideCoreIcon?void 0:(0,r.jsx)(a.default,{}),variant:t,clsx:[i,n,{loading:e,loaded:!e}],disabled:e||l,loading:e,onClick:()=>{w(),N({planPrefix:o.corePlanPrefix,planPeriod:_})},text:D})}return(0,r.jsx)(g.ButtonLink,{...u,iconLeft:T.hideCoreIcon?void 0:(0,r.jsx)(a.default,{}),variant:t,clsx:[i,n,{loading:A,loaded:!A}],disabled:A||l,href:M,onClick:w,text:D})}return(0,r.jsx)(m.Button,{...T,iconLeft:T.hideCoreIcon?void 0:(0,r.jsx)(a.default,{}),variant:t,clsx:[T.className,T.clsx,{loading:A,loaded:!A}],loading:A,onClick:L,text:D})}])},397670,e=>{"use strict";var t=e.i(993796);function r(){return{"flag-cheaper-core":(0,t.useFlag)({controlName:"flag-cheaper-core",default:!1})}}e.s(["usePricingFlags",()=>r])},717931,e=>{"use strict";var t=e.i(596139),r=e.i(993796),i=e.i(397670);function n(e){return function({path:e,coupon:t,source:r,successRedirectPath:i,cancelRedirectPath:n}){let a=new URLSearchParams;t&&a.set("coupon",t),r&&a.set("source",r),i&&a.set("successRedirectPath",i),n&&a.set("cancelRedirectPath",n);let o=a.toString();return`/${e}${o?`?${o}`:""}`}({path:function(e,r,i){if(e.prefix===t.corePlanPrefix){if(!i)return`stripe-checkout/${e.interval}`;let n=(0,t.getCheckoutablePriceOption)({...e,flags:r});if(!n)throw Error(`Core price not found for interval ${e.interval}`);return`stripe-checkout-by-price/${n.externalId}`}let n=(0,t.getCheckoutablePriceOption)({...e,flags:r});if(!n)throw Error(`Pro price not found for interval ${e.interval}, tier ${e.tier}`);return`stripe-checkout-by-price/${n.externalId}`}(e,(0,i.usePricingFlags)(),(0,r.useFlag)({controlName:"flag-core-checkout-by-price",default:!1})),source:e.source,coupon:e.coupon,successRedirectPath:e.successRedirectPath,cancelRedirectPath:e.cancelRedirectPath})}e.s(["usePlanCheckoutUrl",()=>n],717931)},972152,e=>{"use strict";let t="razorpay";e.s(["CHECKOUT_PAYMENT_PROVIDER_RAZORPAY",0,t,"COUNTRY_PROVIDER_MAP",0,{IN:t}])},438073,e=>{"use strict";function t(){if(document.getElementById("razorpay-color-scheme-fix"))return;let e=document.createElement("style");e.id="razorpay-color-scheme-fix",e.textContent='iframe[src*="razorpay"] { color-scheme: light; }\n#rzp-sdk-root, .rzp-sdk-root { color-scheme: light; }',document.head.appendChild(e)}let r=new Map;function i(e){let t=r.get(e);if(t)return t;document.querySelector(`script[src="${e}"]`)?.remove();let i=new Promise((t,i)=>{let n=document.createElement("script");n.src=e,n.onload=()=>{r.delete(e),t()},n.onerror=()=>{r.delete(e),i(Error(`Failed to load script: ${e}`))},document.head.appendChild(n)});return r.set(e,i),i}async function n(){t(),window.RZPCrossBorderPrePay||(await i("https://checkout.razorpay.com/v1/checkout.js"),await i("https://cross-border-cdn.razorpay.com/custom-pre-payment-module/build/browser/rzp-xb-pre-pay-module.min.js"))}e.s(["MERCHANT_IMAGE",0,"https://replit.com/public/images/replit-logo.png","MERCHANT_NAME",0,"Replit","MERCHANT_THEME",0,{color:"#232430"},"injectRazorpayColorSchemeFix",()=>t,"loadRazorpayScript",()=>n,"loadScript",()=>i])},293544,e=>{"use strict";var t=e.i(750854),r=e.i(389959),i=e.i(973245),n=e.i(951262);let a={},o=i.gql`
    mutation ConfirmRazorpayCheckout($input: ConfirmRazorpayCheckoutInput!) {
  confirmRazorpayCheckout(input: $input)
}
    `,l=i.gql`
    mutation CreateReplitPlanCheckoutSessionForRazorpay($input: CreateReplitPlanCheckoutSessionInput!) {
  createReplitPlanCheckoutSession(input: $input) {
    ... on RazorpayCheckoutSessionResult {
      checkoutToken
      keyId
      checkoutSessionId
      currency
      prefillName
      prefillEmail
      amount
    }
    ... on UserError {
      message
    }
    ... on UnauthorizedError {
      message
    }
    ... on TooManyRequestsError {
      message
    }
  }
}
    `;var s=e.i(222342),u=e.i(438073);function c({onSuccess:e,onBeforeOpen:i,onDismiss:d}={}){let p,f,[m,g]=(0,r.useState)(!1),{showError:h}=(0,s.default)(),y=(0,t.useRouter)(),[v]=(p={...a,...void 0},n.useMutation(l,p)),[C]=(f={...a,...void 0},n.useMutation(o,f));return{openCheckout:(0,r.useCallback)(async({planPrefix:t,planPeriod:r,promoCodeExternalId:n,priceExternalId:a})=>{g(!0);let o=!1;try{let{data:l}=await v({variables:{input:{planPrefix:t,planPeriod:r,promoCodeExternalId:n,priceExternalId:a}}}),s=l?.createReplitPlanCheckoutSession;if(s?.__typename!=="RazorpayCheckoutSessionResult"||!s.keyId||!s.checkoutToken||null==s.amount||!s.currency)return void h("Unable to start checkout. Please try again.");if(await (0,u.loadRazorpayScript)(),!window.RZPCrossBorderPrePay)return void h("Unable to load payment provider. Please try again.");i&&(i(),o=!0,await new Promise(e=>setTimeout(e,250))),new window.RZPCrossBorderPrePay({key:s.keyId,amount:s.amount,currency:s.currency,name:u.MERCHANT_NAME,image:u.MERCHANT_IMAGE,theme:u.MERCHANT_THEME,checkout_session_id:s.checkoutToken,prefill:{name:s.prefillName??void 0,email:s.prefillEmail??void 0}},{onPaymentEvent:t=>{if("payment.success"!==t.event)return;let r=t.payment,i=t.razorpay_payment_id??r?.razorpay_payment_id;i&&s.checkoutSessionId&&C({variables:{input:{checkoutSessionId:s.checkoutSessionId,razorpayPaymentId:i}}}).catch(()=>{}),e?.(),y.push(`/stripe-checkout-success?sessionId=${s.checkoutSessionId}`)},onError:()=>{h("Payment failed. Please try again."),d?.()},onDismiss:()=>{d?.()}}).open()}catch{h("Checkout failed. Please try again."),o&&d?.()}finally{g(!1)}},[C,v,i,d,e,y,h]),isLoading:m}}e.s(["useRazorpayCheckout",()=>c],293544)},876340,e=>{"use strict";var t=e.i(389959),r=e.i(973245),i=e.i(304277);e.i(566901);let n={},a=r.gql`
    query RegionalPaymentProviderCountry {
  country
}
    `;function o(e){let t={...n,...e};return i.useQuery(a,t)}var l=e.i(972152),s=e.i(993796),u=e.i(956111);function c(){let e=(0,s.useFlag)({controlName:"flag-razorpay-checkout",default:!1}),r=(0,u.useQueryParam)("payment_region","string"),{data:i,refetch:n}=o({skip:!e}),a=(0,t.useRef)(null);if((0,t.useEffect)(()=>{e&&a.current!==r&&(a.current=r,n())},[e,r,n]),!e)return null;let c=i?.country??"";return l.COUNTRY_PROVIDER_MAP[c]??null}function d(){let{data:e}=o();return e?.country??null}e.s(["useRegionalPaymentProvider",()=>c,"useUserCountry",()=>d],876340)},236319,e=>{"use strict";var t=e.i(972152),r=e.i(293544),i=e.i(876340);function n({onSuccess:e,onBeforeOpen:a,onDismiss:o}={}){let l=(0,i.useRegionalPaymentProvider)(),{openCheckout:s,isLoading:u}=(0,r.useRazorpayCheckout)({onSuccess:e,onBeforeOpen:a,onDismiss:o});return l===t.CHECKOUT_PAYMENT_PROVIDER_RAZORPAY?{openCheckout:s,isLoading:u,provider:l}:{openCheckout:null,isLoading:!1,provider:l}}e.s(["useRegionalCheckout",()=>n])},202068,e=>{"use strict";var t=e.i(973245);let r=t.gql`
    fragment TrialWillCancelAtCurrentUser on CurrentUser {
  id
  isSubscribed
  paymentMethod {
    __typename
    ... on PaymentMethod {
      id
      isSaved
    }
  }
  billingInfo {
    planInfo {
      cancelAt
    }
  }
  userSubscription {
    isTrial
    timeRemainingInTrial
  }
}
    `,i=t.gql`
    fragment UserPlanStateCurrentUser on CurrentUser {
  id
  ...TrialWillCancelAtCurrentUser
  userSubscriptionType
  billingInfo {
    planInfo {
      interval
      provider
    }
  }
  userSubscription {
    isTrial
  }
}
    ${r}`;e.s(["TrialWillCancelAtCurrentUserFragmentDoc",0,r,"UserPlanStateCurrentUserFragmentDoc",0,i])},573605,402880,e=>{"use strict";var t=e.i(973245),r=e.i(304277),i=e.i(566901);let n={},a=t.gql`
    query GetAgentFreeUsageV1 {
  currentUser {
    id
    aiFreeUsageLimits {
      ... on UserAiFreeUsageLimitResult {
        agentUsage {
          limit
          usage
          isUnderQuota
        }
      }
    }
  }
}
    `;function o(e){let t={...n,...e};return r.useQuery(a,t)}function l(e){let t={...n,...e};return i.useLazyQuery(a,t)}let s=t.gql`
    query GetAgentFreeUsageV2($incremental: Boolean) {
  currentUser {
    id
    aiFreeUsageLimits {
      ... on UserAiFreeUsageLimitResult {
        agentUsageV2(incremental: $incremental) {
          ... on FreemiumAiUsageLimitsV2 {
            dailyUsage
            dailyLimit
            monthlyUsage
            monthlyLimit
            isUnderQuota
            isUnderDailyQuota
            isUnderMonthlyQuota
            nextCreditsAt
          }
          ... on UnauthorizedError {
            message
          }
        }
      }
    }
  }
}
    `;function u(e){let t={...n,...e};return r.useQuery(s,t)}function c(e){let t={...n,...e};return i.useLazyQuery(s,t)}e.s(["useGetAgentFreeUsageV1LazyQuery",()=>l,"useGetAgentFreeUsageV1Query",()=>o,"useGetAgentFreeUsageV2LazyQuery",()=>c,"useGetAgentFreeUsageV2Query",()=>u],402880);var d=e.i(993796);function p({skip:e}={}){let t=(0,d.useFlag)({controlName:"flag-free-plan",default:!1}),{data:r,loading:i,error:n,refetch:a}=o({skip:t||e}),{data:l,loading:s,error:c,refetch:f}=u({skip:!t||e});if(!t){let e=r?.currentUser?.aiFreeUsageLimits.__typename==="UserAiFreeUsageLimitResult"?r.currentUser.aiFreeUsageLimits:null;return{loading:i,error:n,agentUsage:e?.agentUsage??null,agentUsageV2:null,refetch:a}}let m=l?.currentUser?.aiFreeUsageLimits.__typename==="UserAiFreeUsageLimitResult"?l.currentUser.aiFreeUsageLimits:null,g=m?.agentUsageV2??null,h=null;if(g?.__typename==="FreemiumAiUsageLimitsV2"){var y;let e,t,{dailyUsage:r,dailyLimit:i,monthlyUsage:n,monthlyLimit:a,...o}=g,{usage:l,limit:s}=(e=(y={dailyUsage:r,dailyLimit:i,monthlyUsage:n,monthlyLimit:a}).monthlyLimit-y.monthlyUsage,t=Math.min(y.dailyLimit,y.dailyUsage+e),e<=0?{usage:1,limit:1}:{usage:y.dailyUsage,limit:t});h={...o,usage:l,limit:s}}return{loading:s,error:c,agentUsage:null,agentUsageV2:h,refetch:f}}e.s(["useGetAgentFreeUsage",()=>p],573605)}]);

//# debugId=4d68986f-63be-a6ec-a72f-e7daba8bc066
//# sourceMappingURL=06385a2e28f0131b.js.map