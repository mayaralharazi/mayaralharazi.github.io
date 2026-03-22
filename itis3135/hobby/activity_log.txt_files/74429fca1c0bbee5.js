;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="0fdb03ee-061b-02d4-ebf7-96c188e95423")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,791729,e=>{"use strict";var t=e.i(968323);function r(e,r){let i,n;return(null!==e&&e<.01&&(i="Usage alert value must be at least 0.01 or unset."),null!==r&&r<.01&&(n="Usage limit value must be at least 0.01 or unset."),null!==e&&null!==r&&r<=e&&(i=`Usage alert ($${e}) must be less than the usage budget ($${r}).`,n=`Usage budget ($${r}) must be greater than the usage alert ($${e}).`),i||n)?(0,t.Err)({softAlertError:i,hardAlertError:n}):(0,t.Ok)({softAlertValue:e,hardAlertValue:r})}e.s(["isEligibleForUsageExplanationDetail",0,{NEEDS_PAYMENT_METHOD:"A payment method is required. Navigate to Account > Billing to resolve.",NEEDS_SUBSCRIPTION:"A subscription is required. Navigate to Account > Billing to resolve.",NEEDS_SUBSCRIPTION_OR_PAYMENT_METHOD:"Either a subscription or payment method is required. Navigate to Account > Billing to resolve.",NEEDS_SMS_VERIFICATION:"A verified phone number is required. Navigate to Account > Verification to resolve.",NEEDS_UNBANNING:"Your account currently has restrictions in place. Please reach out to support@replit.com for assistance.",INCLUDED_IN_SUBSCRIPTION:"Plan found.",HAS_PAYMENT_METHOD:"Payment method found.",INSUFFICIENT_BUDGET:"You've reached your monthly usage budget. Navigate to Account > Billing to increase your budget.",PAYMENT_DELINQUENT:"Your payment is past due. Please update your payment method to continue using Replit.",ENTERPRISE_EXEMPTION:"Enterprise deal orgs are exempt from suspension, banning, and payment method requirements.",USER_USAGE_ALERT_THRESHOLD_EXCEEDED:"You have reached your team's usage budget. Request a budget increase from your team admin.",GROUP_USAGE_ALERT_THRESHOLD_EXCEEDED:"You have reached your group's usage budget. Request a budget increase from your team admin."},"validateAlertThresholds",()=>r])},27845,e=>{e.v({budgetInput:"BudgetInput-module__3bKthq__budgetInput",closeButton:"BudgetInput-module__3bKthq__closeButton",inputContainer:"BudgetInput-module__3bKthq__inputContainer",inputIcon:"BudgetInput-module__3bKthq__inputIcon"})},814629,e=>{"use strict";var t=e.i(276385),r=e.i(389959),i=e.i(330666),n=e.i(602686),a=e.i(116235),s=e.i(706323),o=e.i(416298),l=e.i(607278),u=e.i(818503),d=e.i(396776),c=e.i(625484),g=e.i(27845);e.s(["BudgetInput",0,({type:e,value:m,label:p,error:f,onChange:h})=>{let y=(0,r.useId)(),x=(0,r.useId)();return(0,t.jsxs)(c.View,{gap:8,children:[p?(0,t.jsx)(u.Label,{color:"dimmer",htmlFor:y,children:p}):null,(0,t.jsxs)(c.View,{clsx:g.default.inputContainer,children:[(0,t.jsxs)(a.default,{alt:"Dollars",clsx:g.default.inputIcon,children:[(0,t.jsx)(s.default,{size:24}),(0,t.jsx)(i.VisuallyHidden,{children:"Dollars"})]}),(0,t.jsx)(l.Input,{id:y,type:"number",min:0,value:m,clsx:g.default.budgetInput,"aria-describedby":x,onChange:e=>h(e.target.value)}),m?(0,t.jsx)(c.View,{clsx:g.default.closeButton,onClick:()=>h(""),role:"button",tabIndex:0,"aria-label":`Clear monthly usage ${"hard"===e?"limit":"alert"}`,onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),h(""))},children:(0,t.jsx)(n.default,{size:16})}):null]}),f?(0,t.jsx)(d.StatusBanner,{id:x,icon:(0,t.jsx)(o.default,{}),text:f,colorway:"negative"}):null]})}])},322823,e=>{"use strict";var t=e.i(389959),r=e.i(223808),i=e.i(98816);let n={default:200,long:1e3};function a(e,s,{debounceDelay:o="default"}={}){let[l,u]=(0,t.useState)(!1),[d,c]=(0,t.useState)(e),[g,m]=(0,t.useState)(null),[p,f]=(0,t.useState)(!1),h=(0,t.useRef)(d),y=(0,i.default)(s),x=(0,i.default)(e=>{if(!e){m(null),f(!0);return}m(e),"warning"===e.severity&&f(!0)}),v=(0,t.useCallback)(function(){let e=h.current,t=y.current(e);return t instanceof Promise?t.then(t=>{h.current===e&&x.current(t)}):x.current(t),t},[y,x]),S=(0,t.useRef)((0,r.default)(()=>v(),n[o])),b=(0,t.useCallback)(function(e,{preventTouch:t=!1,preventValidation:r=!1}={}){e!==h.current&&(h.current=e,f(!1),m(null),c(e),r||S.current(),t||u(!0))},[]),E=(0,t.useCallback)(function(e){S.current(),S.current.flush()},[]);return(0,t.useEffect)(()=>S.current.cancel,[]),{value:d,error:g?.severity&&"error"!==g.severity?null:g,warning:g?.severity==="warning"?g:null,touched:l,setValue:b,handleBlur:E,validate:v,isValid:p,setTouched:u}}e.s(["useFormField",()=>a])},713436,e=>{"use strict";var t=e.i(973245);let r=t.gql`
    fragment CoreSubscriptionPlanStatus on CurrentUser {
  hasCore: subscriptionIsType(subscriptionType: HACKER_PRO)
}
    `;e.s(["CoreSubscriptionPlanStatusFragmentDoc",0,r])},696683,e=>{"use strict";var t=e.i(973245),r=e.i(951262);let i={},n=t.gql`
    fragment EditUsageBasedBillingAlertsFormOrg on Org {
  id
  name
}
    `,a=t.gql`
    fragment EditUsageBasedBillingAlertsFormInitialConfig on CustomerAlerts {
  hardAlert {
    id
    threshold
  }
  softAlert {
    id
    threshold
  }
}
    `,s=t.gql`
    fragment EditUsageBasedBillingAlertsFormCustomerAlerts on Customer {
  id
  usageInterval {
    spendingControls {
      ... on CustomerSpendingControls {
        alerts {
          ...EditUsageBasedBillingAlertsFormInitialConfig
        }
      }
    }
  }
}
    ${a}`,o=t.gql`
    mutation EditUsageBasedBillingAlertsFormOrgUpdateAlerts($input: UpdateCustomerSpendingAlertsInput!) {
  updateCustomerSpendingAlerts(input: $input) {
    ... on Customer {
      id
      name
    }
    ... on Error {
      message
    }
  }
}
    `;function l(e){let t={...i,...e};return r.useMutation(o,t)}e.s(["EditUsageBasedBillingAlertsFormCustomerAlertsFragmentDoc",0,s,"EditUsageBasedBillingAlertsFormOrgFragmentDoc",0,n,"useEditUsageBasedBillingAlertsFormOrgUpdateAlertsMutation",()=>l])},315793,e=>{"use strict";var t=e.i(973245),r=e.i(696683);let i=t.gql`
    fragment TotalUsageOrg on Org {
  id
  ...EditUsageBasedBillingAlertsFormOrg
  customer {
    ... on Customer {
      ...EditUsageBasedBillingAlertsFormCustomerAlerts
    }
    ... on Error {
      message
    }
  }
}
    ${r.EditUsageBasedBillingAlertsFormOrgFragmentDoc}
${r.EditUsageBasedBillingAlertsFormCustomerAlertsFragmentDoc}`;var n=e.i(304277);e.i(566901);let a={},s=t.gql`
    fragment OrgUsageBillingAlertsConfig on UsageBasedBillingAlertsConfig {
  hardAlert {
    id
    threshold
  }
  softAlert {
    id
    threshold
  }
  globalAlert {
    id
    threshold
  }
  groupAlerts {
    id
    groupId
    threshold
  }
}
    `,o=t.gql`
    fragment OrgUsagePeriodInformation on UsageInterval {
  startDate
  endDate
  totalAmountUsd
  subtotalAmountUsd
  credits {
    ... on Credits {
      availableAdditionalCredits
      availableSubscriptionCredits
      totalGrantedAdditionalCredits
      totalGrantedSubscriptionCredits
    }
    ... on Error {
      message
    }
  }
}
    `,l=t.gql`
    fragment OrgUsageAuthorizations on OrgAuthorizations {
  viewSubscription {
    isAuthorized
    message
  }
  viewUsage {
    isAuthorized
    message
  }
  viewUsageAlerts {
    isAuthorized
    message
  }
  editUsageAlerts {
    isAuthorized
    message
  }
  editUsageLimit {
    isAuthorized
    message
  }
}
    `,u=t.gql`
    fragment OrgUsageBasedBillingBudget on UsageBasedBillingBudget {
  id
  hasReachedBudget
}
    `,d=t.gql`
    query OrgUsagePeriodInformation($orgId: String!) {
  currentUser {
    id
    org(orgId: $orgId) {
      __typename
      ... on Org {
        id
        ...TotalUsageOrg
        usageInterval {
          ... on UsageInterval {
            ...OrgUsagePeriodInformation
          }
          ... on Error {
            message
          }
        }
        paymentMethod {
          ... on PaymentMethod {
            __typename
            id
          }
          ... on Error {
            message
          }
        }
        usageBasedBillingBudget {
          ... on UsageBasedBillingBudget {
            ...OrgUsageBasedBillingBudget
          }
          ... on Error {
            message
          }
        }
        usageBasedBillingAlerts {
          ... on UsageBasedBillingAlertsConfig {
            ...OrgUsageBillingAlertsConfig
          }
          ... on Error {
            message
          }
        }
        planInfo {
          __typename
          ... on OrgPlanInfo {
            name
            planId
            planEndDate
            planStartDate
          }
          ... on Error {
            message
          }
        }
        authorizations {
          ...OrgUsageAuthorizations
        }
      }
    }
  }
}
    ${i}
${o}
${u}
${s}
${l}`;function c(e){let t={...a,...e};return n.useQuery(d,t)}let g=t.gql`
    query OrgDetailedCredits($orgId: String!) {
  currentUser {
    id
    org(orgId: $orgId) {
      __typename
      ... on Org {
        id
        usageInterval {
          ... on UsageInterval {
            __typename
            detailedCredits {
              ... on DetailedCredits {
                totalRemainingCredits
                totalUsedCredits
                remainingCreditsByType {
                  subscription
                  creditPackPurchase
                  referral
                  gift
                  additional
                }
                usedCreditsByType {
                  subscription
                  creditPackPurchase
                  referral
                  gift
                  additional
                }
                creditBlocksByType {
                  creditPackPurchase {
                    blockId
                    creditType
                    currentBalance
                    effectiveDate
                    expiryDate
                    initialBalance
                  }
                  referral {
                    blockId
                    creditType
                    currentBalance
                    effectiveDate
                    expiryDate
                    initialBalance
                  }
                  gift {
                    blockId
                    creditType
                    currentBalance
                    effectiveDate
                    expiryDate
                    initialBalance
                  }
                }
              }
              ... on Error {
                message
              }
            }
          }
        }
      }
    }
  }
}
    `;function m(e){let t={...a,...e};return n.useQuery(g,t)}e.s(["OrgUsageBillingAlertsConfigFragmentDoc",0,s,"OrgUsagePeriodInformationDocument",0,d,"useOrgDetailedCreditsQuery",()=>m,"useOrgUsagePeriodInformationQuery",()=>c],315793)},744610,e=>{"use strict";var t=e.i(973245),r=e.i(713436),i=e.i(696683),n=e.i(304277);e.i(566901);let a={},s=t.gql`
    fragment UsageOverviewCurrentUserPlanStatus on CurrentUser {
  id
  ...CoreSubscriptionPlanStatus
}
    ${r.CoreSubscriptionPlanStatusFragmentDoc}`,o=t.gql`
    fragment UsageOverviewCurrentUser on CurrentUser {
  id
  ...UsageOverviewCurrentUserPlanStatus
  customer {
    ...EditUsageBasedBillingAlertsFormCustomerAlerts
  }
  paymentMethod {
    ... on PaymentMethod {
      id
      last4
      expirationMonth
      expirationYear
    }
  }
  billingInfo {
    planInfo {
      amount
      interval
    }
  }
  usageBasedBillingBudget {
    ... on UsageBasedBillingBudget {
      id
      hasReachedBudget
    }
    ... on UnauthorizedError {
      message
    }
  }
  usageBasedBilling {
    __typename
    ... on UserUsageBasedBillingSummary {
      capabilities {
        hasOrbCustomer
      }
    }
  }
  usageInterval {
    ... on UsageInterval {
      __typename
      startDate
      endDate
      totalAmountUsd
      subtotalAmountUsd
      planDiscountUsd
      credits {
        ... on Credits {
          availableAdditionalCredits
          availableSubscriptionCredits
          totalGrantedAdditionalCredits
          totalGrantedSubscriptionCredits
        }
        ... on Error {
          message
        }
      }
    }
  }
}
    ${s}
${i.EditUsageBasedBillingAlertsFormCustomerAlertsFragmentDoc}`,l=t.gql`
    query UsageOverviewCurrentUser {
  currentUser {
    id
    username
    timeCreated
    isSubscribed
    ...UsageOverviewCurrentUser
  }
}
    ${o}`;function u(e){let t={...a,...e};return n.useQuery(l,t)}let d=t.gql`
    query UserDetailedCredits {
  currentUser {
    id
    usageInterval {
      ... on UsageInterval {
        __typename
        detailedCredits {
          ... on DetailedCredits {
            totalRemainingCredits
            totalUsedCredits
            remainingCreditsByType {
              subscription
              creditPackPurchase
              referral
              gift
              additional
            }
            usedCreditsByType {
              subscription
              creditPackPurchase
              referral
              gift
              additional
            }
            creditBlocksByType {
              creditPackPurchase {
                blockId
                creditType
                currentBalance
                effectiveDate
                expiryDate
                initialBalance
              }
              referral {
                blockId
                creditType
                currentBalance
                effectiveDate
                expiryDate
                initialBalance
              }
              gift {
                blockId
                creditType
                currentBalance
                effectiveDate
                expiryDate
                initialBalance
              }
            }
          }
          ... on Error {
            message
          }
        }
      }
    }
  }
}
    `;function c(e){let t={...a,...e};return n.useQuery(d,t)}e.s(["UsageOverviewCurrentUserDocument",0,l,"useUsageOverviewCurrentUserQuery",()=>u,"useUserDetailedCreditsQuery",()=>c])},664961,e=>{"use strict";var t=e.i(750854),r=e.i(389959),i=e.i(427232),n=e.i(134628),a=e.i(441329),s=e.i(479407);function o(){let e=(0,t.useRouter)(),o=(0,a.isInBonsaiWebview)(e)&&(0,a.doesBonsaiWebviewSupportFeature)(e,"supportsUpsellBridge"),l=(0,r.useCallback)(e=>{if(!o)return;let t={messageType:n.BridgeMessageType.UPSELL_REQUEST_OPEN,showcasedFeature:e};(0,s.sendMessage)(t,(0,i.v4)())},[o]);return o?{showUpsell:l}:null}e.s(["default",()=>o])},884151,e=>{"use strict";var t=e.i(389959),r=e.i(441329),i=e.i(479407);function n({onChange:e}){let n=(0,r.useIsInBonsaiWebview)();(0,t.useEffect)(()=>{if(!n)return;let t=t=>(0,i.payingStatusChangedBridgeMessageHandler)(t,()=>{e()});return window.addEventListener("message",t),()=>{window.removeEventListener("message",t)}},[n,e])}e.s(["default",()=>n])},900130,e=>{"use strict";var t=e.i(973245),r=e.i(951262),i=e.i(304277),n=e.i(566901);let a={},s=t.gql`
    fragment CurrentUserPaymentMethod on CurrentUser {
  paymentMethod {
    ... on PaymentMethod {
      id
      externalId
      last4
      expirationMonth
      expirationYear
    }
    ... on UnauthorizedError {
      message
    }
  }
}
    `,o=t.gql`
    mutation CreateStripeSetupIntent($input: CreateSetupIntentInput!) {
  createSetupIntent(input: $input) {
    ... on CreateSetupIntentResult {
      clientSecret
    }
    ... on UnauthorizedError {
      message
    }
    ... on UserError {
      message
    }
    ... on TooManyRequestsError {
      message
    }
  }
}
    `;function l(e){let t={...a,...e};return r.useMutation(o,t)}let u=t.gql`
    query SetupIntentFormCurrentUserEmailVerification {
  currentUser {
    id
    isVerified
  }
}
    `;function d(e){let t={...a,...e};return i.useQuery(u,t)}let c=t.gql`
    query PollPaymentMethod {
  currentUser {
    id
    ...CurrentUserPaymentMethod
  }
}
    ${s}`;function g(e){let t={...a,...e};return n.useLazyQuery(c,t)}e.s(["useCreateStripeSetupIntentMutation",()=>l,"usePollPaymentMethodLazyQuery",()=>g,"useSetupIntentFormCurrentUserEmailVerificationQuery",()=>d])},911928,e=>{"use strict";var t=e.i(368964),r=e.i(973245),i=e.i(304277);e.i(566901);let n={},a=r.gql`
    query IsOnTrialPlan {
  currentUser {
    id
    userSubscriptionType
    userSubscription {
      isTrial
    }
    billingInfo {
      planInfo {
        cancelAt
      }
    }
  }
}
    `;e.s(["useIsOnTrialPlan",0,e=>{let r,{data:s,...o}=(r={...n,...e},i.useQuery(a,r)),l=s?.currentUser?.userSubscriptionType===t.UserSubscriptionTypeEnum.HackerPro,u=s?.currentUser?.userSubscription?.isTrial??!1,d=u&&!!s?.currentUser?.billingInfo?.planInfo?.cancelAt;return{...o,isOnTrialPlan:u,trialWillCancel:d,isPro:l}}],911928)},417939,e=>{"use strict";var t=e.i(913243);function r(e){return("card_error"===e.type||"validation_error"===e.type||"invalid_request_error"===e.type)&&e.message?e.message:((0,t.captureSentryException)(`Stripe Elements error: ${e.message??"unknown"}`,{extra:{message:e.message,type:e.type,code:e.code,declineCode:e.decline_code,docUrl:e.doc_url,paymentIntent:e.payment_intent,paymentMethod:e.payment_method,setupIntent:e.setup_intent,source:e.source}}),"Something went wrong. Please contact support.")}let i={return_url:window.location.href};function n(e){return e?{return_url:e}:i}e.s(["basicStripeElementsOptions",0,{currency:"usd",payment_method_types:["card"]},"generateStripeErrorMessage",()=>r,"getStripeElementsConfirmParams",()=>n,"stripeElementsConfirmParams",0,i])},845228,284325,e=>{"use strict";var t=e.i(276385),r=e.i(900130),i=e.i(416746),n=e.i(596139),a=e.i(82464),s=e.i(441329),o=e.i(858248),l=e.i(709485),u=e.i(913243),d=e.i(333342),c=e.i(911928),g=e.i(417939),m=e.i(884151),p=e.i(750854),f=e.i(389959),h=e.i(179104),y=e.i(134628),x=e.i(479407);function v(){let e=(0,p.useRouter)(),t=(0,s.doesBonsaiWebviewSupportFeature)(e,"stripePayment")&&(0,s.isInBonsaiWebview)(e);return{showPaymentFlow:(0,f.useCallback)(e=>{let r={messageType:y.BridgeMessageType.SHOW_PAYMENT_FLOW,flow:e};switch(e.type){case"setup":if(!t)break;(0,x.sendMessage)(r,(0,h.nanoid)());break;case"setUsageLimits":(0,x.sendMessage)(r,(0,h.nanoid)())}},[t])}}e.s(["default",()=>v],284325);var S=e.i(613355),b=e.i(396776),E=e.i(625484);function U({onClose:e,context:p,powerUpCategory:f,children:h,buttonText:y,buttonIcon:x,returnUrl:U}){let B=(0,s.useDoesBonsaiWebviewSupportFeature)("stripePayment"),{data:C}=(0,r.useSetupIntentFormCurrentUserEmailVerificationQuery)({skip:B}),{showPaymentFlow:I}=v(),{isOnTrialPlan:_,isPro:w,trialWillCancel:P}=(0,c.useIsOnTrialPlan)(),[A]=(0,r.useCreateStripeSetupIntentMutation)(),[T,{stopPolling:D}]=(0,r.usePollPaymentMethodLazyQuery)();if((0,m.default)({onChange:T}),B)return I({type:"setup",source:p??"new_payment_method_form"}),e(),null;async function O({stripe:t,elements:r,onError:i,onSubmitComplete:n}){let{error:a}=await r.submit();a?i((0,g.generateStripeErrorMessage)(a)):A({variables:{input:{}},onError:e=>{i(e.message),(0,u.captureSentryException)("Error in NewPaymentMethodForm when creating Setup Intent: "+e.message)},onCompleted:async({createSetupIntent:a})=>{if("CreateSetupIntentResult"!==a.__typename)return void i(a.message);let{error:s,setupIntent:u}=await t.confirmSetup({elements:r,clientSecret:a.clientSecret,confirmParams:(0,g.getStripeElementsConfirmParams)(U),redirect:"if_required"});s?i((0,g.generateStripeErrorMessage)(s)):null===u.payment_method||"string"!=typeof u.payment_method?i("Something went wrong. Please try again."):function({onError:t,onSubmitComplete:r,newPaymentMethod:i}){D(),T({fetchPolicy:"cache-and-network",ssr:!1,pollInterval:1500,onCompleted:n=>{n?.currentUser?.paymentMethod?.__typename==="UnauthorizedError"&&(D(),t(n.currentUser.paymentMethod.message)),n?.currentUser?.paymentMethod?.__typename==="PaymentMethod"&&n?.currentUser?.paymentMethod?.externalId===i&&(D(),(0,o.track)(l.events.PAYMENT_METHOD_FORM_USED,{action:"payment_method_saved",context:p,powerUpCategory:f}),r(),setTimeout(()=>{e()},1e3))},onError:e=>{D(),t(e.message)}})}({onSubmitComplete:n,onError:i,newPaymentMethod:u.payment_method})}})}return C?.currentUser?.isVerified===!1?(0,t.jsx)(E.View,{css:[S.rcss.height("100%"),S.rcss.center],children:(0,t.jsx)(a.default,{})}):(0,t.jsxs)(E.View,{gap:8,children:[_&&!P?(0,t.jsx)(b.StatusBanner,{colorway:"primary",icon:(0,t.jsx)(i.default,{}),text:(0,t.jsxs)(t.Fragment,{children:["Adding a payment method will set your Replit"," ",w?n.corePlanName:n.hackerPlanName," membership to auto-renew at the end of the trial. Cancel anytime from your"," ",(0,t.jsx)("a",{href:"/account#billing",target:"_blank",children:"account settings"}),"."]})}):null,(0,t.jsx)(d.default,{elementsOptions:{...g.basicStripeElementsOptions,mode:"setup"},isPayment:!1,onSubmit:O,submitButtonText:y??"Save payment method",submitButtonIcon:x,disclaimerTextAction:"adding this payment method",context:p,powerUpCategory:f,children:h})]})}e.s(["NewPaymentMethodForm",()=>U],845228)},333342,e=>{"use strict";var t=e.i(276385),r=e.i(389959),i=e.i(719335),n=e.i(761201),a=e.i(858248),s=e.i(709485),o=e.i(183035),l=e.i(549645),u=e.i(269848),d=e.i(480028),c=e.i(6338),g=e.i(140487);function m({isMakingPayment:e,showProcessingState:r,showSuccessState:i,initialStateTextOverride:n,processingStateTextOverride:a,initialIconOverride:s,...m}){let p=n??"Submit";i?p="Success":r&&(p=a??"Processing...");let f=s??(0,t.jsx)(l.default,{});i?f=(0,t.jsx)(o.default,{}):r&&(f=(0,t.jsx)(u.default,{}));let h=e||i?d.tokens.accentPositiveDimmest:d.tokens.accentPrimaryDimmest,y=e||i?d.tokens.accentPositiveDimmer:d.tokens.accentPrimaryDimmer;return(0,t.jsx)(g.Button,{text:p,iconRight:f,colorway:e||i?"positive":"primary",css:[r&&c.loadingStyle.backgroundPulse(h,y)],...m})}var p=e.i(604999),f=e.i(442966),h=e.i(664961),y=e.i(960178),x=e.i(625484);let v={google_play_pwa:(0,t.jsx)(S,{disallowedLocation:"the Google Play Store"}),mobile_webview:(0,t.jsx)(S,{disallowedLocation:"mobile devices"}),privacy_user:"Unfortunately, making purchases is not currently available for education accounts.",via_upsell_bridge:"Continuing to mobile checkout…"};function S({disallowedLocation:e}){return(0,t.jsxs)(y.Text,{children:["Unfortunately, this is not currently available for purchase through"," ",e,". Manage on"," ",(0,t.jsx)("a",{href:"https://replit.com",children:"replit.com"}),"."]})}function b({reason:e}){let i=(0,h.default)();return(0,r.useEffect)(()=>{"via_upsell_bridge"===e&&i&&i.showUpsell()},[e,i]),(0,t.jsxs)(x.View,{css:[{minWidth:256}],p:16,children:["via_upsell_bridge"!==e?(0,t.jsxs)(x.View,{row:!0,gap:8,pb:16,align:"center",children:[(0,t.jsx)(f.default,{size:20}),(0,t.jsx)(y.Text,{variant:"subheadBig",multiline:!1,children:"Oops!"})]}):null,(0,t.jsx)(x.View,{children:v[e]})]})}var E=e.i(959910),U=e.i(703774);e.i(375581);var B=e.i(169099),C=e.i(584426),I=e.i(446530),_=e.i(613355),w=e.i(988676);let P=(0,I.cssRecord)({form:[{height:"100%",flex:1,display:"flex",flexDirection:"column"}],termsLink:[_.rcss.color.foregroundDimmest,{textDecoration:"underline"}],errorText:[_.rcss.color.accentNegativeDefault]});function A(e){let{isDarkColorScheme:r}=(0,U.useTheme)(),i=r?B.replitDark:C.replitLight,n={theme:r?"night":"stripe",variables:{colorPrimary:i.values.global.foregroundDefault,colorBackground:i.values.global.backgroundHigher,colorText:i.values.global.foregroundDefault,colorTextPlaceholder:i.values.global.foregroundDimmest,focusOutline:`2px solid ${i.values.global.accentPrimaryDefault}`,colorDanger:i.values.global.accentNegativeDefault,colorDangerText:i.values.global.accentNegativeDefault,fontFamily:"'IBM Plex Sans', sans-serif",spacingUnit:"0px",fontSizeBase:d.values.fontSizeDefault,focusBoxShadow:"0",borderRadius:d.values.space4,gridRowSpacing:d.values.space8},rules:{".AccordionItem":{boxShadow:"0px"},".Action":{boxShadow:"0px"},".Block":{boxShadow:"0px"},".BlockAction":{boxShadow:"0px"},".Button":{boxShadow:"0px"},".CheckboxInput":{boxShadow:"0px"},".CodeInput":{boxShadow:"0px"},".CodeInputField":{boxShadow:"0px"},".Dropdown":{boxShadow:"0px"},".DropdownItem":{boxShadow:"0px"},".Error":{boxShadow:"0px"},".InputCloseIcon":{boxShadow:"0px"},".Link":{boxShadow:"0px"},".MenuAction":{boxShadow:"0px"},".MenuIcon":{boxShadow:"0px"},".PasscodeCloseIcon":{boxShadow:"0px"},".PasscodeShowIcon":{boxShadow:"0px"},".PickerAction":{boxShadow:"0px"},".PickerItem":{boxShadow:"0px"},".SecondaryLink":{boxShadow:"0px"},".Switch":{boxShadow:"0px"},".SwitchControl":{boxShadow:"0px"},".Tab":{boxShadow:"0px"},".TermsLink":{boxShadow:"0px"},".Toggle":{boxShadow:"0px"},".ToggleItem":{boxShadow:"0px"},".Menu":{boxShadow:"0px"},".Input":{boxShadow:"0px",fontSize:d.values.fontSizeDefault,lineHeight:d.values.lineHeightDefault,padding:`${d.values.space4} ${d.values.space8}`,outlineOffset:_.sharedFocusStyles.outlineOffset},".Label":{paddingBottom:d.values.space4,marginBottom:"0px",fontSize:d.values.fontSizeSmall,lineHeight:d.values.lineHeightSmall},".FieldLabel":{fontSize:d.values.fontSizeSmall,lineHeight:d.values.lineHeightSmall}}};return(0,t.jsx)(x.View,{grow:!0,children:(0,t.jsx)(p.default,{options:{appearance:n,...e.elementsOptions},children:(0,t.jsx)(D,{...e})})})}let T=({disclaimerTextAction:e,teamsTerms:r=!1})=>{let i=r?(0,t.jsxs)(t.Fragment,{children:["By ",e,", you agree to the"," ",(0,t.jsx)("a",{href:n.LINKS_LEGAL.REPLIT_TEAMS_TERMS,target:"_blank",css:P.termsLink,children:"Teams Agreement"}),","]}):(0,t.jsxs)(t.Fragment,{children:["By ",e,", you agree to our"," ",(0,t.jsx)("a",{href:n.LINKS_LEGAL.REPLIT_TERMS,target:"_blank",css:P.termsLink,children:"Terms"})," ","and"," ",(0,t.jsx)("a",{href:n.LINKS_LEGAL.PRIVACY_POLICY,target:"_blank",css:P.termsLink,children:"Privacy Policy"}),","]});return(0,t.jsxs)(y.Text,{variant:"small",children:[i," as well as our payment provider's"," ",(0,t.jsx)("a",{href:"https://stripe.com/legal/end-users",target:"_blank",css:P.termsLink,children:"Terms"})," ","and"," ",(0,t.jsx)("a",{href:"https://stripe.com/privacy",target:"_blank",css:P.termsLink,children:"Privacy Policy"}),"."]})};function D({submitButtonText:e,submitButtonIcon:n,isPayment:o,onSubmit:l,disclaimerTextAction:u,purchaseItemDetails:d,context:c,powerUpCategory:g,children:p,teamsTerms:f,onAddressChange:h,submitDisabled:v}){let S=(0,i.useStripe)(),U=(0,i.useElements)(),[B,C]=(0,r.useState)(!1),[I,_]=(0,r.useState)(!1),[A,D]=(0,r.useState)(!1),[O,j]=(0,r.useState)(),[k,M]=(0,r.useState)(null),F=d?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(w.DividerH,{}),d]}):null,{isPurchaseAllowed:R,reasonPurchaseNotAllowed:q}=(0,E.useIsPurchaseAllowed)();return!R&&q?(0,t.jsx)(b,{reason:q}):(0,t.jsx)("form",{name:"credit-card-form",autoComplete:"on",onSubmit:e=>{e.preventDefault(),S&&U&&((0,a.track)(s.events.PAYMENT_METHOD_FORM_USED,{action:"submit_clicked",context:c,powerUpCategory:g}),_(!0),j(""),l({stripe:S,elements:U,onError:e=>{_(!1),setTimeout(()=>{j(e)},500)},onSubmitComplete:()=>{_(!1),D(!0)}}))},css:P.form,children:(0,t.jsxs)(x.View,{grow:!0,justify:"end",gap:16,children:[(0,t.jsx)(x.View,{gap:8,grow:!0,children:!1!==k?(0,t.jsxs)(x.View,{gap:8,children:[(0,t.jsx)(i.PaymentElement,{onLoadError:()=>M(!0),onReady:()=>{C(!0),(0,a.track)(s.events.PAYMENT_METHOD_FORM_USED,{action:"viewed",context:c,powerUpCategory:g})},options:{terms:{card:"never"},paymentMethodOrder:["google_pay","apple_pay","card"]}}),(0,t.jsx)(i.AddressElement,{onLoadError:()=>M(!0),options:{mode:"billing",fields:{phone:"never"}},onChange:e=>{e.complete&&h?.(e.value.address)}})]}):(0,t.jsxs)(y.Text,{children:["Something went wrong. Please contact us at"," ",(0,t.jsx)("a",{href:"mailto:support@replit.com",children:"support@replit.com"}),"."]})}),B?(0,t.jsxs)(t.Fragment,{children:[F,(0,t.jsxs)(x.View,{gap:8,children:[(0,t.jsx)(m,{initialStateTextOverride:e,isMakingPayment:o,type:"submit",disabled:I||!S||!U||A||v,showProcessingState:I,showSuccessState:A,initialIconOverride:n}),p]})]}):null,O?(0,t.jsx)(y.Text,{css:P.errorText,children:O}):null,B?(0,t.jsx)(T,{teamsTerms:f,disclaimerTextAction:u}):null]})})}e.s(["StripePaymentTerms",0,T,"default",()=>A],333342)},737250,e=>{"use strict";var t=e.i(389959),r=e.i(830675),i=e.i(222342),n=e.i(344188),a=e.i(282453);let s="email-verification-resend-timestamp";function o(){let[e,o]=(0,t.useState)(!1),[l,u]=(0,t.useState)(0),{showConfirm:d,showError:c}=(0,i.default)();return(0,t.useEffect)(()=>{try{let e=a.default.get(s,"number");if(e){let t=Date.now()-e;t<6e4?(o(!0),u(Math.ceil((6e4-t)/1e3))):a.default.remove(s)}}catch(e){r.captureException(e)}},[]),(0,t.useEffect)(()=>{if(!e||l<=0)return;let t=setInterval(()=>{u(e=>{let i=e-1;if(i<=0){o(!1);try{a.default.remove(s)}catch(e){r.captureException(e)}return clearInterval(t),0}return i})},1e3);return()=>clearInterval(t)},[e,l]),{resendVerification:(0,t.useCallback)(async()=>{if(!e)try{await (0,n.postJson)("/data/user/resend_verification",{}),d("Verification email sent"),o(!0),u(60);try{a.default.set(s,Date.now())}catch(e){r.captureException(e)}}catch(t){let{message:e}=t;c(`Failed to resend verification email: ${e}`),r.captureException(t)}},[e,d,c]),isInCooldown:e,cooldownTimeRemaining:l}}e.s(["useEmailVerificationResend",()=>o])},891628,e=>{"use strict";var t=e.i(389959),r=e.i(973245),i=e.i(304277);e.i(566901);let n={},a=r.gql`
    query PollEmailVerification {
  currentUser {
    id
    isVerified
  }
}
    `;e.s(["default",0,e=>{let r,s=(0,t.useRef)(e?.onEmailVerified),o=(0,t.useRef)(e?.onError),l=(0,t.useCallback)(()=>{s.current&&s.current()},[]),u=(0,t.useCallback)(e=>{o.current&&o.current(e)},[]),{loading:d,data:c,error:g,startPolling:m,stopPolling:p}=(r={...n,...void 0},i.useQuery(a,r));return(0,t.useEffect)(()=>(m(2e3),()=>p()),[m,p]),(0,t.useEffect)(()=>{if(g){p(),u&&u(g);return}c&&c.currentUser?.isVerified&&(p(),l&&l())},[c,g,p,u,l]),{loading:d,error:g,isVerified:c?.currentUser?.isVerified}}],891628)},837596,e=>{"use strict";var t=e.i(973245),r=e.i(304277);e.i(566901);let i={},n=t.gql`
    query EmailVerificationContent {
  currentUser {
    id
    email
  }
}
    `;function a(e){let t={...i,...e};return r.useQuery(n,t)}e.s(["useEmailVerificationContentQuery",()=>a])},82464,e=>{"use strict";var t=e.i(276385);e.i(221042);var r=e.i(837596),i=e.i(269848),n=e.i(11029),a=e.i(737250);e.i(344188);var s=e.i(446530),o=e.i(173703),l=e.i(613355),u=e.i(140487),d=e.i(960178),c=e.i(751273),g=e.i(625484);let m=(0,s.cssRecord)({cooldownText:[l.rcss.p(8)]}),p=({title:e="Please verify your email address",subtitle:s}={})=>{let{loading:p,data:f}=(0,r.useEmailVerificationContentQuery)(),{resendVerification:h,isInCooldown:y,cooldownTimeRemaining:x}=(0,a.useEmailVerificationResend)();return(0,t.jsxs)(g.View,{gap:24,align:"center","data-cy":"email-verification-widget",children:[(0,t.jsxs)(g.View,{gap:8,align:"center",children:[(0,t.jsx)(d.Header,{level:2,variant:"headerDefault",css:l.rcss.textAlign.center,children:e}),s?(0,t.jsx)(d.Text,{css:l.rcss.textAlign.center,variant:"small",children:s}):null]}),(0,t.jsxs)(d.Text,{css:l.rcss.textAlign.center,children:["We sent an email to"," ",p?(0,t.jsx)(i.default,{}):(0,t.jsx)(d.Text,{style:{textDecoration:"underline",textUnderlineOffset:"3px"},children:f?.currentUser?.email}),"."]}),(0,t.jsxs)(g.View,{row:!0,gap:8,children:[(0,t.jsxs)(o.ShadesSurface,{children:[(0,t.jsx)(c.Tooltip,{tooltip:`You can resend in ${x} seconds`,placement:"bottom",isDisabled:!y,children:(0,t.jsx)(u.Button,{iconLeft:(0,t.jsx)(n.default,{}),onClick:h,text:"Resend email",variant:"outlined",disabled:y})}),y?(0,t.jsxs)(d.Text,{variant:"small",color:"dimmer",css:m.cooldownText,children:["You can resend in ",x," seconds"]}):null]}),!1]}),(0,t.jsx)(d.Text,{css:l.rcss.textAlign.center,variant:"small",textWrap:"balance",children:"Don't see an email? Check your spam or other filtered folders."})]})};var f=e.i(891628),h=e.i(222342);e.s(["default",0,({onEmailVerified:e,...r})=>{let{showConfirm:i,showError:n}=(0,h.default)();return(0,f.default)({onEmailVerified:()=>{i("Email verified!"),e?.()},onError:e=>{n(e.message)}}),(0,t.jsx)(p,{...r})}],82464)}]);

//# debugId=0fdb03ee-061b-02d4-ebf7-96c188e95423
//# sourceMappingURL=90b6fdc5bda45765.js.map