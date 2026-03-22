;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="2f57a569-10ee-2840-cca4-19bb8350a80e")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,501033,e=>{"use strict";var t=e.i(276385),a=e.i(596139),s=e.i(173703),r=e.i(534842);e.s(["default",0,({shouldBlockReplForm:e,onClose:n,context:i})=>(0,t.jsx)(s.ShadesSurface,{py:10,elevate:!1,children:(0,t.jsx)(r.default,{analyticsContext:{upgrade:{context:i??"create_repl_modal"}},headingText:"Need to create more Apps?",subHeadingText:`Upgrade to Replit ${a.corePlanName} for unlimited Apps`,isFullscreen:!1,onBack:e?void 0:n})})])},23293,e=>{"use strict";var t=e.i(973245);let a=t.gql`
    fragment CreateReplAuthorizations on OrgAuthorizations {
  __typename
  createPrivateRepl: createRepl(private: true) {
    __typename
    isAuthorized
    message
    code
  }
  createPublicRepl: createRepl(private: false) {
    __typename
    isAuthorized
    message
    code
  }
  paidAgent: useAiAgent(tier: paid) {
    __typename
    isAuthorized
    message
    code
  }
  freeAgent: useAiAgent(tier: free) {
    __typename
    isAuthorized
    message
    code
  }
  turboAgentModel: useTurbo {
    __typename
    isAuthorized
    message
    code
  }
  defaultAdvancedAgentModel: defaultAdvancedAgentModel {
    __typename
    isAuthorized
    message
    code
  }
}
    `,s=t.gql`
    fragment OrgReplOwnerOrg on Org {
  id
  name
  type
  slug
  image
  authorizations {
    ...CreateReplAuthorizations
    ... on OrgAuthorizations {
      editPaymentMethod {
        isAuthorized
      }
      deleteOrg {
        isAuthorized
      }
    }
  }
  groups(input: {types: [system_viewers]}) {
    ... on OrgGroupConnection {
      items {
        id
        type
        isMember
      }
    }
  }
}
    ${a}`,r=t.gql`
    fragment ReplOwnerTeam on Team {
  id
  username
  image
  archived
  capabilities {
    isEducationPlan
  }
  authorizations {
    ...CreateReplAuthorizations
  }
}
    ${a}`,n=t.gql`
    fragment ReplOwnerCurrentUser on CurrentUser {
  id
  username
  image
  isSubscribed
  timeCreated
  personalOrgAuthorizations {
    ...CreateReplAuthorizations
  }
  orgs(count: 50) {
    __typename
    ... on CurrentUserOrganizationConnection {
      items {
        org {
          ...OrgReplOwnerOrg
        }
        type
      }
    }
    ... on Error {
      message
    }
  }
  teams {
    id
    ...ReplOwnerTeam
  }
}
    ${a}
${s}
${r}`;e.s(["CreateReplAuthorizationsFragmentDoc",0,a,"ReplOwnerCurrentUserFragmentDoc",0,n,"ReplOwnerTeamFragmentDoc",0,r])},27503,e=>{"use strict";var t=e.i(276385),a=e.i(116235);function s(e){return(0,t.jsx)(a.default,{...e,children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M13 1.25a.75.75 0 0 1 0 1.5.25.25 0 0 0-.25.25v2.086a6.744 6.744 0 0 1 10 5.911l-.003.361a15.75 15.75 0 0 1-3.948 10.14l-.003.002a3.75 3.75 0 0 1-4.56.81 4.753 4.753 0 0 0-4.472 0 3.75 3.75 0 0 1-4.56-.81l-.004-.005A15.85 15.85 0 0 1 1.25 11 6.75 6.75 0 0 1 9.04 4.33c.778.122 1.526.38 2.21.756V3A1.75 1.75 0 0 1 13 1.25Zm5.144 4.957a5.252 5.252 0 0 0-5.644.88c-.013.011-.028.019-.041.03-.019.014-.037.03-.058.042a.748.748 0 0 1-.061.034c-.022.011-.043.023-.066.032-.023.009-.047.014-.07.021-.024.006-.046.014-.07.019h-.003a.752.752 0 0 1-.263 0h-.004c-.023-.005-.045-.012-.068-.019-.024-.007-.048-.012-.071-.021-.023-.01-.044-.02-.066-.032a.732.732 0 0 1-.061-.034c-.02-.013-.039-.028-.058-.043-.013-.01-.028-.018-.04-.03A5.25 5.25 0 0 0 2.75 11a14.353 14.353 0 0 0 3.572 9.5l.131.135a2.25 2.25 0 0 0 2.605.351l.344-.17a6.25 6.25 0 0 1 5.54.17 2.248 2.248 0 0 0 2.736-.486 14.25 14.25 0 0 0 3.572-9.497V11a5.25 5.25 0 0 0-3.106-4.793Z",clipRule:"evenodd"})})}e.s(["default",()=>s])},755748,e=>{"use strict";var t=e.i(276385),a=e.i(116235);function s(e){return(0,t.jsxs)(a.default,{...e,children:[(0,t.jsx)("path",{d:"M8 17.25a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5h2ZM18 17.25a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5h6Z"}),(0,t.jsx)("path",{fillRule:"evenodd",d:"M20 13.25A2.75 2.75 0 0 1 22.75 16v4A2.75 2.75 0 0 1 20 22.75H4A2.75 2.75 0 0 1 1.25 20v-4A2.75 2.75 0 0 1 4 13.25h16Zm-16 1.5c-.69 0-1.25.56-1.25 1.25v4c0 .69.56 1.25 1.25 1.25h16c.69 0 1.25-.56 1.25-1.25v-4c0-.69-.56-1.25-1.25-1.25H4ZM17 1.25A2.75 2.75 0 0 1 19.75 4v4A2.75 2.75 0 0 1 17 10.75H7A2.75 2.75 0 0 1 4.25 8V4A2.75 2.75 0 0 1 7 1.25h10ZM7 2.75c-.69 0-1.25.56-1.25 1.25v4c0 .69.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25V4c0-.69-.56-1.25-1.25-1.25H7Z",clipRule:"evenodd"})]})}e.s(["default",()=>s])},11541,e=>{"use strict";var t=e.i(276385),a=e.i(116235);function s(e){return(0,t.jsxs)(a.default,{...e,children:[(0,t.jsx)("path",{d:"M12 14.25A4.75 4.75 0 0 1 16.75 19v2a.75.75 0 0 1-1.5 0v-2a3.25 3.25 0 0 0-3.089-3.246L12 15.75H6A3.25 3.25 0 0 0 2.75 19v2a.75.75 0 0 1-1.5 0v-2A4.75 4.75 0 0 1 6 14.25h6ZM21.47 8.47a.75.75 0 0 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06L18 11.94l3.47-3.47Z"}),(0,t.jsx)("path",{fillRule:"evenodd",d:"M9 2.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5Zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Z",clipRule:"evenodd"})]})}e.s(["default",()=>s])},735876,e=>{"use strict";var t=e.i(276385),a=e.i(116235);function s(e){return(0,t.jsxs)(a.default,{...e,children:[(0,t.jsx)("path",{d:"M16.47 14.47a.75.75 0 0 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 0 1 1.06-1.06l1.97 1.97 4.97-4.97Z"}),(0,t.jsx)("path",{d:"M7.85 4.335a7.753 7.753 0 0 1 6.735 2.29 7.749 7.749 0 0 1 1.66 2.624h1.256l.232.006A5.251 5.251 0 0 1 19.25 19.45a.75.75 0 0 1-.501-1.414 3.75 3.75 0 0 0-.92-7.27l-.33-.016h-1.79a.75.75 0 0 1-.719-.535 6.252 6.252 0 0 0-9.651-3.28 6.254 6.254 0 0 0-1.865 7.982 6.25 6.25 0 0 0 1.954 2.211.75.75 0 0 1-.858 1.23A7.75 7.75 0 0 1 7.85 4.336Z"})]})}e.s(["default",()=>s])},600894,e=>{"use strict";var t=e.i(276385),a=e.i(116235);function s(e){return(0,t.jsx)(a.default,{...e,children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M11.444 1.264c.63.062 1.221.34 1.672.792l8.706 8.706c.591.595.923 1.4.923 2.238l-.004.157a3.176 3.176 0 0 1-.919 2.081l-6.584 6.584c-.557.554-1.3.88-2.08.92l-.158.003a3.176 3.176 0 0 1-2.238-.923l-8.706-8.706a2.75 2.75 0 0 1-.792-1.672l-.014-.272V4A2.75 2.75 0 0 1 4 1.25h7.172l.272.014ZM7.5 6.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z",clipRule:"evenodd"})})}e.s(["default",()=>s])},190362,e=>{e.v({blueText:"PlanToggle-module__N-TNpG__blueText"})},328745,e=>{"use strict";var t=e.i(276385),a=e.i(600894),s=e.i(480028),r=e.i(721321),n=e.i(960178),i=e.i(625484),c=e.i(190362);e.s(["default",0,({planPeriod:e,onChange:l,primary:o,highestYearlyDiscountPercent:u})=>{let d=(0,t.jsxs)(i.View,{row:!0,gap:8,align:"center",children:[(0,t.jsx)(n.Text,{children:"Yearly"}),(0,t.jsxs)(i.View,{row:!0,gap:4,align:"center",children:[(0,t.jsx)(i.View,{children:(0,t.jsx)(a.default,{color:s.tokens.accentPrimaryStronger})}),(0,t.jsxs)(n.Text,{variant:"small",clsx:c.default.blueText,children:["Up to ",u,"% off"]})]})]});return(0,t.jsxs)(r.ButtonGroup,{onChange:l,row:!0,value:e,name:"periodToggle",primary:o,children:[(0,t.jsx)(r.ButtonGroupItem,{id:"monthly",text:"Monthly",value:"monthly"}),(0,t.jsx)(r.ButtonGroupItem,{id:"yearly",text:u?d:"Yearly",value:"yearly"})]})}])},435209,e=>{"use strict";var t=e.i(973245),a=e.i(304277);e.i(566901);let s={},r=t.gql`
    query CheckoutCurrentUser {
  currentUser {
    id
    billingInfo {
      planInfo {
        interval
      }
    }
  }
}
    `;function n(e){let t={...s,...e};return a.useQuery(r,t)}e.s(["useCheckoutCurrentUserQuery",()=>n])},548137,e=>{"use strict";var t=e.i(750854),a=e.i(389959),s=e.i(973245),r=e.i(951262);let n={},i=s.gql`
    mutation ConfirmRazorpayCheckoutForUpgrade($input: ConfirmRazorpayCheckoutInput!) {
  confirmRazorpayCheckout(input: $input)
}
    `,c=s.gql`
    mutation StartRazorpayUpgrade($input: StartRazorpayUpgradeInput!) {
  startRazorpayUpgrade(input: $input) {
    __typename
    ... on StartRazorpayUpgradeSuccess {
      checkoutToken
      keyId
      amount
      currency
      prefillName
      prefillEmail
      checkoutSessionId
    }
    ... on UpgradeBlockedPastDue {
      hostedInvoiceUrl
    }
    ... on UpgradeBlockedPendingUpdate {
      hostedInvoiceUrl
    }
    ... on UserError {
      message
    }
    ... on UnauthorizedError {
      message
    }
  }
}
    `;var l=e.i(596139),o=e.i(222342),u=e.i(438073);function d({onBeforeOpen:e,onDismiss:s}={}){let p,h,[m,f]=(0,a.useState)(!1),{showError:g}=(0,o.default)(),b=(0,t.useRouter)(),k=(0,a.useRef)(b);k.current=b;let[j]=(p={...n,...void 0},r.useMutation(c,p)),[v]=(h={...n,...void 0},r.useMutation(i,h));return{openUpgrade:(0,a.useCallback)(async({customerId:t,fromPriceId:a,targetPriceId:r})=>{f(!0);let n=!1;try{let{data:i}=await j({variables:{input:{customerId:t,fromPriceId:a,targetPriceId:r}}}),c=i?.startRazorpayUpgrade;if(c?.__typename==="UpgradeBlockedPastDue")return void g("Your account has a past-due invoice. Please pay it before upgrading.");if(c?.__typename==="UpgradeBlockedPendingUpdate")return void g("A previous plan change is still processing. Please try again shortly.");if(c?.__typename==="UserError"||c?.__typename==="UnauthorizedError")return void g(c.message??"Unable to start upgrade. Please try again.");if(c?.__typename!=="StartRazorpayUpgradeSuccess"||!c.keyId||!c.checkoutToken||null==c.amount||!c.currency)return void g("Unable to start upgrade. Please try again.");if(await (0,u.loadRazorpayScript)(),!window.RZPCrossBorderPrePay)return void g("Unable to load payment provider. Please try again.");e&&(e(),n=!0,await new Promise(e=>setTimeout(e,250))),new window.RZPCrossBorderPrePay({key:c.keyId,amount:c.amount??void 0,currency:c.currency??void 0,name:u.MERCHANT_NAME,image:u.MERCHANT_IMAGE,theme:u.MERCHANT_THEME,checkout_session_id:c.checkoutToken,prefill:{name:c.prefillName??void 0,email:c.prefillEmail??void 0}},{onPaymentEvent:e=>{if("payment.success"!==e.event)return;let t=e.payment,a=e.razorpay_payment_id??t?.razorpay_payment_id;a&&c.checkoutSessionId&&v({variables:{input:{checkoutSessionId:c.checkoutSessionId,razorpayPaymentId:a}}}).catch(()=>{});let s=(0,l.getCheckoutablePriceByExternalId)(r),n=s?.planPrefix===l.proPlanPrefix?"welcomeToPro":"welcomeToCore";k.current.push({pathname:"/stripe-upgrade-success",query:{targetPriceId:r,welcome:n}})},onError:()=>{g("Payment failed. Please try again."),s?.()},onDismiss:()=>{s?.()}}).open()}catch{g("Upgrade failed. Please try again."),n&&s?.()}finally{f(!1)}},[v,j,e,s,g]),isLoading:m}}e.s(["useRazorpayUpgrade",()=>d],548137)},40192,e=>{e.v({container:"Checkout-module__LWYusG__container",fullscreen:"Checkout-module__LWYusG__fullscreen",header:"Checkout-module__LWYusG__header",regionSelectorHeader:"Checkout-module__LWYusG__regionSelectorHeader",taxContainer:"Checkout-module__LWYusG__taxContainer",taxText:"Checkout-module__LWYusG__taxText",titleRow:"Checkout-module__LWYusG__titleRow",titleText:"Checkout-module__LWYusG__titleText"})},534842,e=>{"use strict";var t=e.i(276385),a=e.i(389959),s=e.i(435209),r=e.i(138716),n=e.i(596139),i=e.i(858248),c=e.i(709485),l=e.i(548137),o=e.i(236319),u=e.i(613355),d=e.i(972152),p=e.i(85742),h=e.i(12034),m=e.i(960178),f=e.i(625484);let g={[d.CHECKOUT_PAYMENT_PROVIDER_RAZORPAY]:"🇮🇳 India"};function b({provider:e,isGlobalSelected:a,onChange:s,onOpenChange:r,isDisabled:n}){let i=[{id:"regional",label:g[e]??e},{id:"global",label:"🌍 Global"}],c=a?"global":"regional",l=i.find(e=>e.id===c)?.label??"";return(0,t.jsxs)(f.View,{row:!0,gap:8,align:"center",justify:"end",children:[(0,t.jsx)(m.Text,{color:"dimmer",variant:"small",children:"Select region:"}),(0,t.jsx)(h.Select,{"aria-label":"Payment region",selectedKey:c,onSelectionChange:e=>s("global"===e),onOpenChange:r,isDisabled:n,selectValue:()=>(0,t.jsx)(m.Text,{variant:"small",children:l}),children:i.map(e=>(0,t.jsx)(p.BaseListBoxItem,{id:e.id,textValue:e.label,children:(0,t.jsx)(m.Text,{children:e.label})},e.id))})]})}var k=e.i(140487),j=e.i(328111),v=e.i(61965),R=e.i(328745),x=e.i(40192);e.s(["default",0,({defaultSelectedPlanPeriod:e,highlightedPlan:d,defaultSelectedTier:p,analyticsContext:h,headingText:g="Compare Replit plans",subHeadingText:y="Autonomy for all. Choose the best plan for you.",isFullscreen:C=!0,onBack:_,onFreeClick:w,onProClick:P,onTeamsClick:T,redirectPath:A,onBeforeRegionalCheckout:S,onRegionalCheckoutDismiss:U,hideHeader:F,overrideOpenRazorpayUpgrade:I,overrideIsRazorpayUpgradeLoading:z})=>{let{data:E}=(0,s.useCheckoutCurrentUserQuery)(),D=(0,n.toPlanPeriod)(E?.currentUser?.billingInfo?.planInfo?.interval),[O,B]=(0,a.useState)(e??D??"monthly");(0,a.useEffect)(()=>{null!=e?B(e):D&&B(D)},[e,D]);let M=(0,j.usePlanCTAs)(),{regionSelector:$,openCheckout:q,isLoading:L}=function({onSuccess:e,onBeforeOpen:s,onDismiss:r,onRegionSelectOpenChange:n}={}){let[i,c]=(0,a.useState)(!1),{openCheckout:l,isLoading:d,provider:p}=(0,o.useRegionalCheckout)({onSuccess:e,onBeforeOpen:s,onDismiss:r}),h=i?null:l,m=u.DefaultModalZIndex+3e3;return{regionSelector:null!==p?(0,t.jsx)(b,{provider:p,isGlobalSelected:i,onChange:c,onOpenChange:e=>{n?.(e),e&&requestAnimationFrame(()=>{let e=document.querySelectorAll("[data-rac-popover]"),t=e[e.length-1];t&&(t.style.zIndex=String(m));let a=t?.previousElementSibling;a?.getAttribute("aria-hidden")==="true"&&(a.style.zIndex=String(m-1))})},isDisabled:d}):null,openCheckout:h,isLoading:d}}({onBeforeOpen:S,onDismiss:U}),{openUpgrade:V,isLoading:H}=(0,l.useRazorpayUpgrade)({onBeforeOpen:I?void 0:S,onDismiss:I?void 0:U});return(0,a.useEffect)(()=>{(0,i.track)(c.events.CORE_MEMBERSHIP_MODAL_USED,{action:"modal_viewed",source:h.upgrade.context,surface:h.upgrade.surface,planType:O}),(0,i.track)(c.events.SEEN_YEARLY_PRICE,{surface:h.upgrade.surface??"membership-modal",context:h.upgrade.context})},[h.upgrade.context,h.upgrade.surface,O]),(0,t.jsxs)(t.Fragment,{children:[_?(0,t.jsx)(f.View,{row:!0,children:(0,t.jsx)(k.Button,{onClick:_,text:"Back",iconLeft:(0,t.jsx)(r.default,{})})}):null,(0,t.jsxs)(f.View,{dataCy:"core-modal",clsx:[x.default.container,C&&x.default.fullscreen],align:"center",gap:C?36:24,children:[!F&&(0,t.jsxs)(f.View,{clsx:x.default.header,children:[(0,t.jsxs)("div",{clsx:x.default.titleRow,children:[(0,t.jsx)("div",{clsx:x.default.titleText,children:(0,t.jsx)(m.Header,{variant:"headerDefault",level:1,children:g})}),null!==$&&null==D?(0,t.jsx)("div",{clsx:x.default.regionSelectorHeader,children:$}):null]}),(0,t.jsx)(m.Text,{color:"dimmer",children:y})]}),F&&null!==$&&null==D?(0,t.jsx)(f.View,{row:!0,width:"100%",justify:"end",children:$}):null,(0,t.jsx)(f.View,{row:!0,gap:8,children:(0,t.jsx)(R.default,{planPeriod:O,onChange:B,highestYearlyDiscountPercent:M.Core.highestYearlyDiscountPercent})}),(0,t.jsxs)(f.View,{px:12,children:[(0,t.jsx)(v.default,{planPeriod:O,highlightedPlan:d,defaultSelectedTier:p,analyticsContext:h,onFreeClick:w,onProClick:P,onTeamsClick:T,redirectPath:A,regionalOpenCheckout:q,isRegionalCheckoutLoading:L,openRazorpayUpgrade:I??V,isRazorpayUpgradeLoading:z??H}),(0,t.jsx)(f.View,{align:"center",justify:"center",clsx:x.default.taxContainer,children:(0,t.jsx)(m.Text,{color:"dimmer",clsx:x.default.taxText,variant:"small",children:"*Prices are subject to tax depending on your location. Replit Agent is powered by large language models. While it can produce powerful results, its behavior is probabilistic - meaning it may occasionally make mistakes."})})]})]})]})}],534842)},49755,529737,351713,e=>{"use strict";var t=e.i(973245),a=e.i(23293);let s=t.gql`
    fragment TemplateReplCardFooterUser on User {
  id
  username
  image
  url
}
    `,r=t.gql`
    fragment TemplateReplCardFooterTeam on Team {
  id
  username
  image
  url
}
    `,n=t.gql`
    fragment TemplateReplCardRepl on Repl {
  id
  iconUrl
  title
  description(plainText: true)
  releasesForkCount
  templateLabel
  likeCount
  url
  owner {
    ... on User {
      id
      ...TemplateReplCardFooterUser
    }
    ... on Team {
      id
      ...TemplateReplCardFooterTeam
    }
  }
  deployment {
    id
    activeRelease {
      id
    }
  }
  publishedAs
  templateCategories {
    id
    title
  }
}
    ${s}
${r}`;e.s(["TemplateReplCardReplFragmentDoc",0,n],529737);let i=t.gql`
    fragment TemplateSelector2Repl on Repl {
  id
  url
  title
  iconUrl
  templateLabel
  nixedLanguage
  isPrivate
  isRenamed
  likeCount
  description(plainText: true)
  deployment {
    id
    activeRelease {
      id
    }
  }
  owner {
    ... on User {
      id
      username
    }
    ... on Team {
      id
      username
    }
  }
  slug
  ...TemplateReplCardRepl
}
    ${n}`;e.s(["TemplateSelector2ReplFragmentDoc",0,i],351713);var c=e.i(304277);e.i(566901);var l=e.i(951262);let o={},u=t.gql`
    fragment CreateReplFormRepl on Repl {
  id
  ...TemplateSelector2Repl
}
    ${i}`,d=t.gql`
    fragment CreateReplFormCurrentUser on CurrentUser {
  id
  url
  image
  username
  fullName
  isStaff: hasRole(role: REPLIT_STAFF)
  hasAgentRepl {
    ... on HasAgentRepl {
      hasAgentRepl
    }
  }
  replCount {
    ... on ReplCount {
      count
    }
  }
  ...ReplOwnerCurrentUser
  teams {
    id
    ...ReplOwnerTeam
  }
  favoriteCreateReplOptions {
    ... on Repl {
      id
      ...CreateReplFormRepl
    }
  }
}
    ${a.ReplOwnerCurrentUserFragmentDoc}
${a.ReplOwnerTeamFragmentDoc}
${u}`,p=t.gql`
    query CreateReplForm {
  currentUser {
    id
    ...CreateReplFormCurrentUser
  }
}
    ${d}`;function h(e){let t={...o,...e};return c.useQuery(p,t)}let m=t.gql`
    query CreateReplFormInitialRepl($replId: String!) {
  getRepl(id: $replId) {
    ... on Repl {
      id
      ...CreateReplFormRepl
    }
  }
}
    ${u}`;function f(e){let t={...o,...e};return c.useQuery(m,t)}let g=t.gql`
    mutation CreateReplFormCreateRepl($input: CreateReplInput!, $isTitleAutoGenerated: Boolean!) {
  createRepl(input: $input, isTitleAutoGenerated: $isTitleAutoGenerated) {
    ... on Repl {
      ...CreateReplFormRepl
    }
    ... on UserError {
      message
    }
  }
}
    ${u}`;function b(e){let t={...o,...e};return l.useMutation(g,t)}e.s(["CreateReplFormCurrentUserFragmentDoc",0,d,"CreateReplFormReplFragmentDoc",0,u,"useCreateReplFormCreateReplMutation",()=>b,"useCreateReplFormInitialReplQuery",()=>f,"useCreateReplFormQuery",()=>h],49755)},358752,(e,t,a)=>{"use strict";var s=e.r(971131);a.createRoot=s.createRoot,a.hydrateRoot=s.hydrateRoot},782586,e=>{"use strict";var t=e.i(276385),a=e.i(416746),s=e.i(396776),r=e.i(960178);function n(){return(0,t.jsx)(s.StatusBanner,{colorway:"warning",icon:(0,t.jsx)(a.default,{}),text:(0,t.jsxs)(r.Text,{variant:"small",children:["Developer Frameworks is being removed soon. You can start with any idea or language by prompting our agent in a new app."," ",(0,t.jsx)("a",{href:"https://docs.replit.com/replitai/general-agent",target:"_blank",rel:"noopener noreferrer",children:"Learn more"})]})})}e.s(["DeveloperFrameworksDeprecationBanner",()=>n])},748976,e=>{"use strict";var t=e.i(276385),a=e.i(750854),s=e.i(973245),r=e.i(304277);e.i(566901);let n={},i=s.gql`
    query NewPage($language: String!) {
  language(id: $language) {
    id
    templateRepl {
      id
    }
  }
}
    `;var c=e.i(341048),l=e.i(389959),o=e.i(49755),u=e.i(269848),d=e.i(501033),p=e.i(173532),h=e.i(993796),m=e.i(956111),f=e.i(782586),g=e.i(446530),b=e.i(173703),k=e.i(613355),j=e.i(396776),v=e.i(960178),R=e.i(625484);let x=(0,c.default)(()=>e.A(988766),{loadableGenerated:{modules:[48693]},ssr:!1,loading:()=>(0,t.jsx)(b.ShadesSurface,{css:y.loadingStyle,elevate:!1,children:(0,t.jsx)(u.default,{})})}),y=(0,g.cssRecord)({container:[k.rcss.colWithGap(16)],loadingStyle:[k.rcss.minHeight(250),k.rcss.align.center,k.rcss.justify.center]});function C({initialSelectedReplId:e}){let{query:s}=(0,a.useRouter)(),r=s.template?s.template.toString():void 0,[n,i]=(0,l.useState)(!1),[c,g]=(0,l.useState)(null),k=r||e,C=(0,o.useCreateReplFormInitialReplQuery)({variables:{replId:k??""},skip:!k}),_=C.data?.getRepl.__typename==="Repl"?C.data?.getRepl:void 0,w=parseInt((0,m.useQueryParam)("teamId","string")??"",10),P=isNaN(w)?void 0:w,T=(0,p.useReplLimit)(),A="data"===T.type&&T.shouldBlockReplForm,S=(0,h.useFlag)({controlName:"flag-agent-everywhere"});return((0,l.useEffect)(()=>{k&&g(null)},[k]),(0,l.useEffect)(()=>{_&&g(_)},[_]),C.loading||_&&!c)?(0,t.jsxs)(R.View,{css:y.container,children:[(0,t.jsx)(v.Header,{variant:"headerBig",level:1,children:"Developer Frameworks"}),(0,t.jsx)(f.DeveloperFrameworksDeprecationBanner,{}),(0,t.jsx)(b.ShadesSurface,{css:y.loadingStyle,elevate:!1,children:(0,t.jsx)(u.default,{})})]}):n||A?(0,t.jsxs)(R.View,{css:y.container,children:[(0,t.jsx)(v.Header,{variant:"headerBig",level:1,children:"Developer Frameworks"}),(0,t.jsx)(f.DeveloperFrameworksDeprecationBanner,{}),(0,t.jsx)(d.default,{onClose:()=>i(!1),shouldBlockReplForm:A,context:A?"create_repl_modal_limit_reached":"create_repl_modal"})]}):(0,t.jsxs)(R.View,{css:y.container,children:[(0,t.jsx)(v.Header,{variant:"headerBig",level:1,children:"Developer Frameworks"}),(0,t.jsx)(v.Text,{variant:"subheadBig",color:"dimmer",children:"Developer frameworks are advanced coding stacks that can be used to start your next project."}),(0,t.jsx)(f.DeveloperFrameworksDeprecationBanner,{}),S?(0,t.jsx)(j.StatusBanner,{colorway:"yellow",text:(0,t.jsx)(R.View,{children:(0,t.jsxs)(v.Text,{children:["When starting from a developer framework or template, Agent provides fewer guardrails and automated workflows. You may encounter unexpected issues that require manual troubleshooting or code editing."," ",(0,t.jsx)("a",{href:"https://docs.replit.com/replitai/general-agent",target:"_blank",children:"Learn more"})]})})}):(0,t.jsx)(j.StatusBanner,{colorway:"warning",text:"Repls created using developer frameworks currently do not have Agent functionality enabled. These frameworks are designed for advanced users who prefer to work directly with code without Agent assistance."}),(0,t.jsx)(b.ShadesSurface,{gap:16,elevate:!1,children:(0,t.jsx)(x,{initialSelectedReplId:k,initialSelectedTeamOwnerId:P,selectedTemplate:c,setSelectedTemplate:g,onUpsell:i,trackingSource:"developerFrameworks"})})]})}var _=e.i(578134);let w=(0,g.cssRecord)({container:[k.rcss.pageContent]});e.s(["default",0,()=>{var e;let s,{query:c}=(0,a.useRouter)(),l=c.language?c.language.toString():void 0,o=c.template?c.template.toString():void 0,u=(e={variables:{language:l??""},skip:void 0!==o||void 0===l},s={...n,...e},r.useQuery(i,s)),d=o||(u.data?.language?.templateRepl?.id??void 0);return(0,t.jsx)(_.default,{title:"Developer Frameworks",children:(0,t.jsx)(R.View,{css:w.container,children:(0,t.jsx)(C,{initialSelectedReplId:d})})})}],748976)},199998,(e,t,a)=>{let s="/developer-frameworks";(window.__NEXT_P=window.__NEXT_P||[]).push([s,()=>e.r(748976)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([s])})},150484,e=>{e.v(t=>Promise.all(["static/chunks/3c6f43efd52bb398.js"].map(t=>e.l(t))).then(()=>t(682192)))},159525,e=>{e.v(t=>Promise.all(["static/chunks/5a5795dd11acefd1.js"].map(t=>e.l(t))).then(()=>t(15350)))},42823,e=>{e.v(t=>Promise.all(["static/chunks/4b1c9b20cc79f735.js"].map(t=>e.l(t))).then(()=>t(838768)))},519623,e=>{e.v(t=>Promise.all(["static/chunks/b6aab2004a17ed43.js"].map(t=>e.l(t))).then(()=>t(183081)))},458778,e=>{e.v(t=>Promise.all(["static/chunks/d1233ee03757b0a8.js"].map(t=>e.l(t))).then(()=>t(668771)))},580775,e=>{e.v(t=>Promise.all(["static/chunks/ac854305d560e517.js"].map(t=>e.l(t))).then(()=>t(973145)))},249871,e=>{e.v(t=>Promise.all(["static/chunks/77f8adb127c221df.css","static/chunks/c020b6c5b7cd8363.js"].map(t=>e.l(t))).then(()=>t(467669)))},14461,e=>{e.v(t=>Promise.all(["static/chunks/072e0045c9d2fe5b.js","static/chunks/02c20895e05cc4fb.js","static/chunks/5d0b1b5c91009c38.js","static/chunks/7b44286520fd1415.js","static/chunks/bb8370f7ed67b049.js","static/chunks/0aafaf1ce5f2b6b0.js","static/chunks/52de2dfeef8eb8be.js","static/chunks/757e6aa58b34c4ce.js","static/chunks/078a0861fd477eea.js","static/chunks/63d06763fd67f98d.js","static/chunks/6dceddb66025303a.js","static/chunks/c241f54ebec74072.css","static/chunks/bd451b188f5f16bb.css"].map(t=>e.l(t))).then(()=>t(687786)))},775631,e=>{e.v(t=>Promise.all(["static/chunks/a8438eb499184539.js","static/chunks/aa721256d27bcef7.css"].map(t=>e.l(t))).then(()=>t(764028)))},695762,e=>{e.v(t=>Promise.all(["static/chunks/5fc7c8233b78b6d8.css","static/chunks/a53a6099d3f5d9a7.js"].map(t=>e.l(t))).then(()=>t(906666)))},854872,e=>{e.v(t=>Promise.all(["static/chunks/9f0c571ef4c698dc.js","static/chunks/bd451b188f5f16bb.css","static/chunks/c241f54ebec74072.css","static/chunks/da9b4400bc1e210d.css","static/chunks/cdc43879afcbe574.css"].map(t=>e.l(t))).then(()=>t(939957)))},808500,e=>{e.v(t=>Promise.all(["static/chunks/35e963c0f4b8d1af.css","static/chunks/d1f970428036a41b.js"].map(t=>e.l(t))).then(()=>t(378751)))},296376,e=>{e.v(t=>Promise.all(["static/chunks/68a3f54d2f09ead0.js","static/chunks/2f26d0a0f6e2d485.css"].map(t=>e.l(t))).then(()=>t(138492)))},14925,e=>{e.v(t=>Promise.all(["static/chunks/22a3fe911b741d5e.js","static/chunks/a7add5411c58d7fd.css"].map(t=>e.l(t))).then(()=>t(648898)))},541130,e=>{e.v(t=>Promise.all(["static/chunks/b8822271f0fc4811.css","static/chunks/7953187bca24c471.js"].map(t=>e.l(t))).then(()=>t(330973)))},715029,e=>{e.v(t=>Promise.all(["static/chunks/5b7baa0b8d7ab340.js","static/chunks/7407a060d442656c.js","static/chunks/838b5f6b40b7a5e2.css","static/chunks/44f9cf4bc00cec91.css"].map(t=>e.l(t))).then(()=>t(262211)))},900884,e=>{e.v(t=>Promise.all(["static/chunks/f272e5dd9647cd2e.js","static/chunks/072e0045c9d2fe5b.js","static/chunks/8bd2d837f40da42b.js","static/chunks/078a0861fd477eea.js","static/chunks/4363fd625846533c.js","static/chunks/757e6aa58b34c4ce.js","static/chunks/7b44286520fd1415.js","static/chunks/b46b59a09cea7bba.js","static/chunks/c241f54ebec74072.css","static/chunks/bd451b188f5f16bb.css"].map(t=>e.l(t))).then(()=>t(32357)))},115472,e=>{e.v(t=>Promise.all(["static/chunks/edb9b21815b337b7.js","static/chunks/b46b59a09cea7bba.js","static/chunks/078a0861fd477eea.js","static/chunks/c241f54ebec74072.css","static/chunks/bd451b188f5f16bb.css"].map(t=>e.l(t))).then(()=>t(626125)))},391412,e=>{e.v(t=>Promise.all(["static/chunks/a6c80ae50fccb281.js"].map(t=>e.l(t))).then(()=>t(779087)))},890763,e=>{e.v(t=>Promise.all(["static/chunks/66f871ade19b7cef.js"].map(t=>e.l(t))).then(()=>t(846977)))},752534,e=>{e.v(t=>Promise.all(["static/chunks/5d0b1b5c91009c38.js","static/chunks/b84754192c41820b.js","static/chunks/3e8ed773a9c674ec.css"].map(t=>e.l(t))).then(()=>t(310882)))},645973,e=>{e.v(t=>Promise.all(["static/chunks/adfdc9926a12afa1.js","static/chunks/128f2f5594eef1cc.css","static/chunks/8ec65d175133b684.css"].map(t=>e.l(t))).then(()=>t(856085)))},3033,e=>{e.v(t=>Promise.all(["static/chunks/072e0045c9d2fe5b.js","static/chunks/b563df70c84dceae.js","static/chunks/39e1e3165ced0683.js","static/chunks/078a0861fd477eea.js","static/chunks/dca16eddc566a513.js","static/chunks/b45db885e8c192b9.js","static/chunks/f3b2d32c8a80d8fb.js","static/chunks/f1c8a9877225be0c.js","static/chunks/478cb3e2f1c69b2d.js","static/chunks/938606d4714eaf36.js","static/chunks/ce7e52b5288b968a.js","static/chunks/b776c72fc370a12c.js","static/chunks/ae255ccdabb44b35.js","static/chunks/52de2dfeef8eb8be.js","static/chunks/c80ef38c104f4abb.js","static/chunks/68cd0b06cc94faa1.js","static/chunks/2029b83d144d4d95.js","static/chunks/b46b59a09cea7bba.js","static/chunks/c13009dd7083dcb4.js","static/chunks/5460f26e0839ddba.js","static/chunks/757e6aa58b34c4ce.js","static/chunks/de2385152982b44e.js","static/chunks/7b44286520fd1415.js","static/chunks/1b50dd4111a0762e.js","static/chunks/0aafaf1ce5f2b6b0.js","static/chunks/3d117e0b8e33ddee.js","static/chunks/95f0fb2a7a303da1.js","static/chunks/c241f54ebec74072.css","static/chunks/bd451b188f5f16bb.css","static/chunks/ce67bcf62d01af46.css","static/chunks/2f26d0a0f6e2d485.css","static/chunks/cb9eb799f41f0fdc.css"].map(t=>e.l(t))).then(()=>t(485551)))},20067,e=>{e.v(t=>Promise.all(["static/chunks/0a1d14cc57e6e7df.js","static/chunks/c241f54ebec74072.css"].map(t=>e.l(t))).then(()=>t(776781)))},431594,e=>{e.v(t=>Promise.all(["static/chunks/725fd0fe483c43e0.js"].map(t=>e.l(t))).then(()=>t(915242)))},183493,e=>{e.v(t=>Promise.all(["static/chunks/72fb7b71685f52bf.js","static/chunks/da9b4400bc1e210d.css"].map(t=>e.l(t))).then(()=>t(849620)))},300530,e=>{e.v(t=>Promise.all(["static/chunks/50154f37fa3b3d30.js","static/chunks/a3bc213628aa1d45.css"].map(t=>e.l(t))).then(()=>t(11358)))},684220,e=>{e.v(t=>Promise.all(["static/chunks/d702e3f911dfbceb.js"].map(t=>e.l(t))).then(()=>t(49842)))},418512,e=>{e.v(t=>Promise.all(["static/chunks/640ff221fe824bca.js","static/chunks/434e6d37e374f61a.js","static/chunks/a33770c70019ff85.js"].map(t=>e.l(t))).then(()=>t(423592)))},988766,e=>{e.v(t=>Promise.all(["static/chunks/072e0045c9d2fe5b.js","static/chunks/02c20895e05cc4fb.js","static/chunks/5d0b1b5c91009c38.js","static/chunks/7b44286520fd1415.js","static/chunks/77a4fb4e6007934a.js","static/chunks/0aafaf1ce5f2b6b0.js","static/chunks/757e6aa58b34c4ce.js","static/chunks/52de2dfeef8eb8be.js","static/chunks/078a0861fd477eea.js","static/chunks/63d06763fd67f98d.js","static/chunks/0ae7de55039cf73d.js","static/chunks/bd451b188f5f16bb.css","static/chunks/c241f54ebec74072.css"].map(t=>e.l(t))).then(()=>t(48693)))},142750,e=>{e.v(t=>Promise.all(["static/chunks/d29576e5767c7665.js"].map(t=>e.l(t))).then(()=>t(775382)))},305302,e=>{e.v(t=>Promise.all(["static/chunks/f0e7ca9f96053e8d.css","static/chunks/99bc725187794162.js"].map(t=>e.l(t))).then(()=>t(284790)))},857715,e=>{e.v(t=>Promise.all(["static/chunks/c4a520ff5d04dae1.js"].map(t=>e.l(t))).then(()=>t(885179)))}]);

//# debugId=2f57a569-10ee-2840-cca4-19bb8350a80e
//# sourceMappingURL=fba710a9f2da2611.js.map