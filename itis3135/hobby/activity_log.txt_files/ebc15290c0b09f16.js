;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="e434d7ce-2489-3ad4-1735-02b392a0319c")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,929423,e=>{"use strict";let t=async({dbName:e,version:t,onUpgrade:r})=>new Promise((i,n)=>{let a=indexedDB.open(e,t);a.onerror=()=>n(Error(`Failed to open database: ${a.error?.message}`)),a.onsuccess=()=>i(a.result),r&&(a.onupgradeneeded=e=>{let{target:t}=e;t instanceof IDBOpenDBRequest&&t.result?r(t.result):n(Error("Invalid target during upgrade."))})}),r=async({db:e,storeName:t,mode:r,operation:i})=>new Promise((n,a)=>{if(!e.objectStoreNames.contains(t))return a(Error(`Object store "${t}" does not exist in the database.`));let s=e.transaction([t],r),o=i(s.objectStore(t));o.onsuccess=()=>n(o.result),o.onerror=()=>a(Error(`Transaction error: ${o.error?.message}`)),s.onabort=()=>a(Error("Transaction was aborted.")),s.onerror=()=>a(Error("Transaction encountered an error."))}),i="LandingPageAgentAttachments",n=null,a=async()=>n||(n=t({dbName:"ReplitAgentAttachments",version:1,onUpgrade:e=>{e.objectStoreNames.contains(i)||e.createObjectStore(i,{keyPath:"id",autoIncrement:!0})}})),s=async e=>{let t=await a(),n={file:e,name:e.name,type:e.type,lastModified:e.lastModified};return await (({db:e,storeName:t,data:i})=>r({db:e,storeName:t,mode:"readwrite",operation:e=>e.add(i)}))({db:t,storeName:i,data:n})},o=async()=>(({db:e,storeName:t})=>r({db:e,storeName:t,mode:"readonly",operation:e=>e.getAll()}))({db:await a(),storeName:i}),d=async e=>(({db:e,storeName:t,key:i})=>i?r({db:e,storeName:t,mode:"readwrite",operation:e=>e.delete(i)}):Promise.reject(Error("Key is required for delete operation.")))({db:await a(),storeName:i,key:e}),l=async()=>(({db:e,storeName:t})=>r({db:e,storeName:t,mode:"readwrite",operation:e=>e.clear()}))({db:await a(),storeName:i}),u=async()=>{try{await l()}catch(e){return}};e.s(["addFile",0,s,"clearAllIndexedDbAttachments",0,u,"deleteFile",0,d,"getAllFiles",0,o],929423)},364674,e=>{"use strict";var t=e.i(435106),r=e.i(910951),i=e.i(576106),n=e.i(82259);e.i(877212);var a=e.i(600637),s=e.i(267710),o=e.i(805763),d=e.i(629536),l=e.i(952098);e.i(242933);var u=e.i(790164),c=e.i(709485),g=e.i(483322),p=e.i(993796),m=e.i(441329),A=e.i(858248),h=e.i(112942),y=e.i(709867),_=e.i(509908);function x({currentUserUsername:e,currentUserEmail:x,currentUserTimeCreated:E,updatePromptConnectionStatus:S}){let T=(0,m.useIsInBonsaiWebview)(),U=(0,p.useFlag)({controlName:"flag-everything-everywhere",default:!1});return async function({prompt:p,uploadedFiles:m,requestedStackBlueprint:B,newOutputsRequested:R,replId:C,currentUserId:f,orgId:I,customStackReplId:v,themeConfig:w,initialBuildMode:P,agentChatMode:N,agentInitialBuildTier:O,autonomyLevel:b,modelProfile:D,webSearchEnabled:j,imageGenerationEnabled:L,enableAutomatedTesting:M,source:F,selectedSkills:k}){let K=(0,t.createClientId)({currentUserId:f}),q=new t.ChatConnection({clientId:K,serverId:a.AI_CHAT_SERVER_ID,isClientActiveObservable:new u.ObservableState(!0),getEndpoint:async()=>{let e=await (0,s.auth)(C,K,I),t=new URL((0,l.getCurrentChatProxyEndpoint)());return t.searchParams.set("auth_token",e),t},onProtocolError:e=>{throw Error(`Failed to send agent prompt. Protocol error: ${e.message}`)},onRetriesExceeded:()=>{throw Error("Unable to connect. Please try again later.")}});q.status.subscribe(e=>{S(e)});let G=(0,i.createSessionRequest)({sessionType:n.SessionType.AGENT_SESSION,replId:C}),W=await q.service.createSession.rpc(G);if(!W.ok)throw Error("Failed to send agent prompt. Session creation failed.");let $=W.payload.sessionId,V=W.payload.sessionCreationEventId,z=(0,r.createEventRequest)({session:$,parent:V,model:n.ModelType.ADVANCED,sender:{id:f,membership:n.MembershipType.CORE,timeCreated:new Date(E)},addToChild:!0,data:{kind:"message",message:p,uploadedFiles:m,requestedStackBlueprint:B,newOutputsRequested:U?R:void 0,isReplCreationMessage:!!U||void 0,intent:n.MessageAction.AGENT,selectedSkills:k,customStackReplId:v,themeConfig:w,agentConfig:{webSearchEnabled:j??!0,imageGenerationEnabled:L??!0,initialBuildMode:P,agentMode:N,agentInitialBuildTier:O,autonomyLevel:b,modelProfile:D,...void 0!==M&&{enableAutomatedTesting:M}}}});q.service.createEvent.rpc(z.request);let H=B?(0,d.getStackOptionFromBlueprint)(B):void 0,Q=R?[...new Set(R.map(g.serializeOutputRequestKindForAnalytics))].sort():[];(0,A.track)(c.events.START_WITH_AI_USED,{action:"created_agent_session",prompt:p,attachments:m,repl_id:C,username:e,email:x,is_mobile:T,has_agent:!0,session_id:$,langsmith_url:(0,o.generateAiSessionLangSmithUrl)($,n.SessionType.AGENT_SESSION),agent_chat_mode:(0,y.getAgentModeForAnalytics)(N),autonomy_level:b?h.autonomyLevelMapFromAiChatEnum[b]:void 0,model_profile:(0,h.getModelProfileForAnalytics)(D),automated_testing_enabled:M,...F&&{source:F},...H&&{selected_stack:{key:H,customStackReplId:v}},...Q.length>0?{requested_artifact_type:Q.join(",")}:{},...k&&k.length>0?{selected_skills:[...k].sort().join(",")}:{}}),(0,_.trackAgentAnalyticsEvent)({action:"created_new_session",sessionId:$})}}e.s(["useSendAgentPrompt",()=>x])},2e3,e=>{"use strict";var t=e.i(750854),r=e.i(389959),i=e.i(973245),n=e.i(279042),a=e.i(655366),s=e.i(951262),o=e.i(304277);e.i(566901);let d={},l=i.gql`
    mutation CreateAgentReplCreateRepl($input: CreateReplInput!) {
  createRepl(input: $input, isTitleAutoGenerated: false) {
    __typename
    ... on Repl {
      id
      title
      ...ReplLinkRepl
      ...CrosisContextRepl
    }
    ... on UserError {
      message
    }
  }
}
    ${n.ReplLinkReplFragmentDoc}
${a.CrosisContextReplFragmentDoc}`,u=i.gql`
    query CreateAgentReplCurrentUser {
  currentUser {
    id
    username
    ...CrosisContextCurrentUser
    replCount {
      ... on ReplCount {
        count
      }
    }
  }
}
    ${a.CrosisContextCurrentUserFragmentDoc}`;var c=e.i(368964),g=e.i(82259),p=e.i(634759),m=e.i(377772),A=e.i(830675);let h={},y=i.gql`
    mutation GenerateAgentReplIcon($prompt: String!, $replId: String!) {
  generateReplIcon(input: {prompt: $prompt, replId: $replId}) {
    ... on GenerateReplIconResult {
      repl {
        id
        iconUrl
      }
    }
  }
}
    `;var _=e.i(364674),x=e.i(993796),E=e.i(650587),S=e.i(222342),T=e.i(929423),U=e.i(441329),B=e.i(221586),R=e.i(956111),C=e.i(858248),f=e.i(709485),I=e.i(1324),v=e.i(792e3),w=e.i(170784),P=e.i(122965),N=e.i(534518),O=e.i(399978);e.i(377085);var b=e.i(357167),D=e.i(170710),j=e.i(185591);function L({currentUser:e}){let i,[n,a]=(0,r.useState)("idle"),N=(0,R.useQueryParam)("folderId","string"),O=(0,U.useIsInBonsaiWebview)(),{showError:b}=(0,S.default)(),[L]=(i={...d,...void 0},s.useMutation(l,i)),{currentUser:F}=function(){let e,{data:t,error:r,loading:i}=(e={...d,...void 0},o.useQuery(u,e));return r?{loading:!1,currentUser:null,errorCode:500}:t?.currentUser?{loading:!1,currentUser:t.currentUser,errorCode:null}:i?{loading:!0,currentUser:null,errorCode:null}:{loading:!1,currentUser:null,errorCode:403}}(),k=(0,P.useFlaggedRetrier)(),K=(0,t.useRouter)(),q=(0,I.default)(),G=(0,x.useFlag)({controlName:"flag-killswitch-agent"}),W=(0,x.useFlag)({controlName:"flag-agent-teamwork",default:!1}),$=(0,x.useFlag)({controlName:"flag-everything-everywhere",default:!1}),V=(0,D.useWorkspaceLoadingState)(),z=e=>{a("idle"),b(e.message),(0,m.sendErrorToSentry)(e),V?.remove()},[H,Q]=(0,r.useState)("disconnected"),J=(0,_.useSendAgentPrompt)({currentUserUsername:e.username,currentUserEmail:e.email,currentUserTimeCreated:e.timeCreated,updatePromptConnectionStatus:e=>{Q(e)}}),Y=function(){var e;let t,[r]=(e={onError:e=>{A.captureException(e)}},t={...h,...e},s.useMutation(y,t));return({prompt:e,attachments:t,replId:i})=>{r({variables:{prompt:e+(t.length>0?`

With attachments: ${t.map(e=>e.path).join(", ")}`:""),replId:i}})}}(),X="flag-electron-orbital-dance-party",Z=(0,x.useFlag)({controlName:X}),ee=(0,E.useIsMobile)();return{createAgentRepl:async function({prompt:t,attachments:r,requestedStackBlueprint:i,newOutputsRequested:n,isPrivate:s,orgId:o,customStackReplId:d,isExpertMode:l=!1,themeConfig:u,initialBuildMode:m,appThemeId:A,agentInitialBuildTier:h,autonomyLevel:y,modelProfile:_,webSearchEnabled:x,imageGenerationEnabled:E,enableAutomatedTesting:S,source:U,grabbyExtensionVersion:R,isInAgent4PlanMode:I,selectedSkills:P,...D}){if(G){b("This feature is currently unavailable."),a("idle");return}(0,B.clearAiPromptLocalStorage)(),await (0,T.clearAllIndexedDbAttachments)(),a("creating_repl");let H=m===g.AgentInitialBuildMode.AGENT_INITIAL_BUILD_MODE_DESIGN,Q=D.isInPlanningPhase??(!d&&!l&&!H),et=I??Q,er=r&&r.length>0,ei=c.AgentChatMode.General;W?ei=et?c.AgentChatMode.Discussion:c.AgentChatMode.General:Q&&(ei=c.AgentChatMode.InitialPlanning);let en=(Q||W)&&!ee&&!er;en&&(Z&&V?.start({text:t,attachments:r}),(0,C.track)(f.events.EXPERIMENT_VARIANT_ASSIGNED,{experimentName:X,variant:Z}));let ea=i===p.StackBlueprint.STACK_BLUEPRINT_AGENT,es=await L({variables:{input:{aiPromptText:t,aiPromptAttachmentPaths:r.map(e=>e.path),folderId:N,isPrivate:s,orgId:o,originId:d,detachFromProject:!!d,isInPlanningPhase:!!W||Q,isExpertMode:!!$||l,isAgentStack:ea,agentChatMode:ei,initialStackBlueprint:void 0!==i?({[p.StackBlueprint.STACK_BLUEPRINT_NONE]:"STACK_BLUEPRINT_NONE",[p.StackBlueprint.STACK_BLUEPRINT_FLASK_VANILLA_JS]:"STACK_BLUEPRINT_FLASK_VANILLA_JS",[p.StackBlueprint.STACK_BLUEPRINT_PYTHON_API]:"STACK_BLUEPRINT_PYTHON_API",[p.StackBlueprint.STACK_BLUEPRINT_STREAMLIT]:"STACK_BLUEPRINT_STREAMLIT",[p.StackBlueprint.STACK_BLUEPRINT_FULLSTACK_JS]:"STACK_BLUEPRINT_FULLSTACK_JS",[p.StackBlueprint.STACK_BLUEPRINT_GAMESTACK_JS]:"STACK_BLUEPRINT_GAMESTACK_JS",[p.StackBlueprint.STACK_BLUEPRINT_CUSTOM]:"STACK_BLUEPRINT_CUSTOM",[p.StackBlueprint.STACK_BLUEPRINT_EXPO]:"STACK_BLUEPRINT_EXPO",[p.StackBlueprint.STACK_BLUEPRINT_AGENT]:"STACK_BLUEPRINT_AGENT",[p.StackBlueprint.STACK_BLUEPRINT_MOCKUP_JS]:"STACK_BLUEPRINT_MOCKUP_JS",[p.StackBlueprint.STACK_BLUEPRINT_BEST_EFFORT_FALLBACK]:"STACK_BLUEPRINT_BEST_EFFORT_FALLBACK",[p.StackBlueprint.STACK_BLUEPRINT_VIDEO_JS]:"STACK_BLUEPRINT_VIDEO_JS",[p.StackBlueprint.STACK_BLUEPRINT_PNPM_WORKSPACE]:"STACK_BLUEPRINT_PNPM_WORKSPACE"})[i]:void 0,isWebDesignMockup:H,grabbyExtensionVersion:R}}});if(es.errors)return void z(Error(es.errors.map(e=>e.message).join(", ")));if(!es.data)return void z(Error("Expected data from createRepl graphql mutation"));if("Repl"!==es.data.createRepl.__typename)return void z(Error(es.data.createRepl.message));let eo=es.data.createRepl;if(Y({prompt:t,attachments:r,replId:eo.id}),Z&&en&&V?.update(eo),er){let e=(0,w.createConnectContext)({repl:eo,currentUser:F}),t=(0,v.default)({onUnrecoverableError:e=>{a("idle"),b(e.message)}});t.connect({context:e,getMinimumRetryDelayMs:k}),a("configuring_repl"),await M({hasAttachments:er,attachments:r,container:t,handleError:z})}let ed=et?g.AgentMode.AGENT_MODE_DISCUSSION:g.AgentMode.AGENT_MODE_GENERAL,el=Q?g.AgentMode.AGENT_MODE_INITIAL_PLANNING:g.AgentMode.AGENT_MODE_GENERAL,eu=function({requestedStackBlueprint:e,hasFlagEverythingEverywhere:t}){return t&&void 0===e?p.StackBlueprint.STACK_BLUEPRINT_PNPM_WORKSPACE:e}({requestedStackBlueprint:i,hasFlagEverythingEverywhere:$});try{await J({prompt:t,uploadedFiles:r.map(({path:e,file:t})=>({path:e,mimeType:t.type})),requestedStackBlueprint:eu,newOutputsRequested:n,replId:eo.id,currentUserId:e.id,orgId:o,customStackReplId:d,themeConfig:u,initialBuildMode:W?void 0:m,agentChatMode:W?ed:el,agentInitialBuildTier:h,autonomyLevel:y,modelProfile:_,webSearchEnabled:x,imageGenerationEnabled:E,enableAutomatedTesting:S,source:U,selectedSkills:P})}catch(e){z(e instanceof Error?e:Error(String(e)));return}a("opening_repl");let ec={enterInAgentMode:Q,enterInExpertMode:!!$||l,appThemeId:A},eg=(0,j.replLinkProps)(eo,ec);O?window.location.href=(0,j.replLinkFullUrl)(eo,ec):await K.push({...eg.href,pathname:q},eg.as),a("idle")},status:n,agentPromptRiverConnectionStatus:H}}async function M({hasAttachments:e,container:t,attachments:r,handleError:i}){if(!e)return;let n=(0,N.default)({container:t});await (0,O.uploadFiles)({parentPath:b.ATTACHED_ASSETS_PATH,files:r.map(({file:e})=>e),fs:n,onError:e=>{i(Error(`Error uploading ${e.path}: ${e.error}`))}})}e.s(["useCreateAgentRepl",()=>L],2e3)},508536,e=>{"use strict";var t=e.i(276385),r=e.i(389959),i=e.i(368964),n=e.i(549645),a=e.i(706323),s=e.i(765219),o=e.i(78433),d=e.i(446530),l=e.i(173703),u=e.i(613355),c=e.i(140487),g=e.i(91720),p=e.i(739521),m=e.i(960178),A=e.i(625484);let h=(0,d.cssRecord)({ubbBannedContainer:[u.rcss.textAlign.center],buttonContainer:[{"@media (max-width: 600px)":{flexDirection:"column"}}]});function y({context:e}){let[d,u]=(0,r.useState)(!1),y="org"===e.type&&e.orgDealContext?.dealType!==i.OrgDealType.Trial&&e.orgDealContext?.dealType!==i.OrgDealType.EnterpriseTrial&&e?.canEditPaymentMethod||"user"===e.type,{headingText:_,subheadingText:x}=(0,o.getUbbSuspensionDescription)("org"===e.type?{type:"org",isAdmin:e.isAdmin,isSuspended:e.isSuspended,orgDealContext:e.orgDealContext}:{type:"user",isSuspended:e.isSuspended});return(0,t.jsxs)(A.View,{gap:12,align:"center",css:h.ubbBannedContainer,children:[(0,t.jsx)(m.Text,{variant:"subheadDefault",children:_}),(0,t.jsx)(m.Text,{children:x}),y?(0,t.jsx)(l.ShadesSurface,{children:(0,t.jsxs)(A.View,{row:!0,css:h.buttonContainer,gap:12,children:[(0,t.jsx)(A.View,{gap:8,children:(0,t.jsx)(g.ButtonLink,{iconLeft:(0,t.jsx)(a.default,{}),text:"View and pay invoices",href:"org"===e.type?`/orb-customer-portal/org/${e.orgId}`:"/orb-customer-portal",target:"_blank"})}),(0,t.jsx)(A.View,{gap:8,children:(0,t.jsx)(c.Button,{iconLeft:(0,t.jsx)(n.default,{}),text:"Update payment method",colorway:"primary",onClick:()=>u(!0)})})]})}):null,(0,t.jsx)(p.Modal,{isOpen:d,onRequestClose:()=>u(!1),children:(0,t.jsx)(s.PaymentMethodForm,{onDone:()=>{u(!1)},onBack:async()=>u(!1)})})]})}e.s(["default",()=>y])},516308,e=>{"use strict";var t=e.i(276385),r=e.i(417751),i=e.i(310158),n=e.i(760129),a=e.i(973245),s=e.i(304277);e.i(566901);let o={},d=a.gql`
    query AgentInputReachedHardLimit($orgId: String) {
  currentUser {
    id
    usageInterval {
      ... on UsageInterval {
        endDate
      }
      ... on Error {
        message
      }
    }
    org(orgId: $orgId) {
      ... on Org {
        id
        usageInterval {
          ... on UsageInterval {
            endDate
          }
          ... on Error {
            message
          }
        }
      }
    }
  }
}
    `;var l=e.i(269848),u=e.i(40916),c=e.i(446530),g=e.i(613355),p=e.i(140487),m=e.i(396776),A=e.i(960178),h=e.i(625484);let y=({isOrg:e})=>(0,t.jsx)(A.Text,{css:x.overlayTitle,variant:"subheadDefault",children:e?"Your workspace has hit its monthly usage budget.":"You've hit your monthly usage budget."}),_=({isOrg:e,isOrgMemberWithoutEditPermission:a,endOfBillingPeriod:s})=>{let o=(0,n.parseISO)(s),d=(0,i.isValid)(o)?` on ${(0,r.format)(o,"MMM do, hh:mm aaa")}`:"";return e?a?(0,t.jsxs)(A.Text,{variant:"small",children:["To continue using the Agent now, please contact your admin to request an increase in the usage budget. Otherwise, your usage will reset",d," when the next billing period begins."]}):(0,t.jsxs)(A.Text,{variant:"small",children:["To continue using the Agent now, increase your budget. Otherwise, your workspace's usage will reset",d," when the next billing period begins."]}):(0,t.jsxs)(A.Text,{children:["To continue using the Agent now, increase your budget. Otherwise, your usage will reset",d," when the next billing period begins."]})},x=(0,c.cssRecord)({overlayContainer:[g.rcss.maxWidth("100%")],overlayText:[g.rcss.textAlign.center,g.rcss.maxWidth(800),g.rcss.colWithGap(8)],overlayTitle:[g.rcss.fontWeight.bold],loadingAndErrorWrapper:[g.rcss.display.flex,g.rcss.flex.growAndShrink(1),g.rcss.center,g.rcss.minHeight(200)]});e.s(["AgentInputReachedHardLimit",0,({onIncreaseBudget:e,canEditUsageLimit:r,orgId:i})=>{var n;let a,c,g=void 0!==i,A=g&&!r,{data:E,loading:S,error:T}=(n={variables:{orgId:i}},c={...o,...n},s.useQuery(d,c));return(a=g?E?.currentUser?.org.__typename==="Org"&&"UsageInterval"===E.currentUser.org.usageInterval.__typename?E.currentUser.org.usageInterval.endDate:"":E?.currentUser?.usageInterval?.__typename==="UsageInterval"?E.currentUser.usageInterval.endDate:"",S)?(0,t.jsx)(h.View,{css:x.loadingAndErrorWrapper,children:(0,t.jsx)(l.default,{})}):T?(0,t.jsx)(h.View,{css:x.loadingAndErrorWrapper,children:(0,t.jsx)(h.View,{children:(0,t.jsx)(m.StatusBanner,{colorway:"red",text:"Something went wrong."})})}):(0,t.jsxs)(h.View,{css:x.overlayContainer,gap:16,align:"center",justify:"center",children:[(0,t.jsxs)(h.View,{css:x.overlayText,children:[(0,t.jsx)(y,{isOrg:g}),(0,t.jsx)(_,{isOrg:g,isOrgMemberWithoutEditPermission:A,endOfBillingPeriod:a})]}),A?null:(0,t.jsx)(p.Button,{text:"Increase usage budget",onClick:e,iconLeft:(0,t.jsx)(u.default,{}),colorway:"primary"})]})}],516308)},813190,e=>{"use strict";var t=e.i(973245),r=e.i(850176),i=e.i(23293),n=e.i(696683),a=e.i(304277);e.i(566901);let s={},o=t.gql`
    fragment StartWithAiOrgMetadata on Org {
  id
  name
}
    `,d=t.gql`
    fragment StartWithAiUsageBudget on UsageBasedBillingBudget {
  id
  hasReachedBudget
}
    `,l=t.gql`
    fragment StartWithAiOrgUsageLimitAuthorization on OrgAuthorizations {
  editUsageLimit {
    isAuthorized
    message
  }
}
    `,u=t.gql`
    query StartWithAi {
  currentUser {
    id
    username
    firstName
    email
    isVerified
    ...AiProviderCurrentUser
    ...ReplOwnerCurrentUser
  }
}
    ${r.AiProviderCurrentUserFragmentDoc}
${i.ReplOwnerCurrentUserFragmentDoc}`;function c(e){let t={...s,...e};return a.useQuery(u,t)}let g=t.gql`
    query StartWithAiUsageLimits($orgId: String) {
  currentUser {
    id
    usageBasedBillingBudget {
      __typename
      ... on UsageBasedBillingBudget {
        ...StartWithAiUsageBudget
      }
      ... on Error {
        message
      }
    }
    customer {
      ...EditUsageBasedBillingAlertsFormCustomerAlerts
    }
    org(orgId: $orgId) {
      __typename
      ... on Org {
        ...StartWithAiOrgMetadata
        authorizations {
          ...StartWithAiOrgUsageLimitAuthorization
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
        usageBasedBillingBudget {
          __typename
          ... on UsageBasedBillingBudget {
            ...StartWithAiUsageBudget
          }
          ... on Error {
            message
          }
        }
        customer {
          ... on Customer {
            ...EditUsageBasedBillingAlertsFormCustomerAlerts
          }
          ... on Error {
            message
          }
        }
      }
      ... on Error {
        message
      }
    }
  }
}
    ${d}
${n.EditUsageBasedBillingAlertsFormCustomerAlertsFragmentDoc}
${o}
${l}`;function p(e){let t={...s,...e};return a.useQuery(g,t)}e.s(["StartWithAiDocument",0,u,"StartWithAiUsageLimitsDocument",0,g,"useStartWithAiQuery",()=>c,"useStartWithAiUsageLimitsQuery",()=>p])},673573,473822,986905,132728,183662,e=>{"use strict";var t=e.i(276385),r=e.i(396776),i=e.i(625484);e.s(["AgentInputErrorDeterminingBudget",0,()=>(0,t.jsx)(i.View,{children:(0,t.jsx)(i.View,{children:(0,t.jsx)(r.StatusBanner,{colorway:"red",text:"Error determining remaining budget. Please try again later."})})})],673573);var n=e.i(629536),a=e.i(596139),s=e.i(418725),o=e.i(960178);e.s(["AgentInputFreemiumTemporarilyUnavailable",0,()=>(0,t.jsxs)(i.View,{gap:12,align:"center",children:[(0,t.jsxs)(o.Text,{variant:"subheadDefault",children:[n.AGENT_NAME," is currently experiencing high demand and is temporarily unavailable for ",a.freePlanName," plan users."]}),(0,t.jsxs)(o.Text,{children:["Please try again later, or upgrade to ",a.corePlanName," for immediate access."]}),(0,t.jsx)(s.default,{context:"agent_freemium_quota",colorway:"primary",variant:"default",text:`Upgrade to ${a.corePlanName} to continue using ${n.AGENT_NAME}`,modalHeadingText:`Upgrade to ${a.corePlanName} to continue using ${n.AGENT_NAME}`,modalSubHeadingText:`${n.AGENT_NAME} is currently experiencing high demand and is temporarily unavailable for ${a.freePlanName} plan users.`})]})],473822);var d=e.i(755748);e.s(["AgentInputFreeReplLimitExceeded",0,()=>(0,t.jsxs)(i.View,{gap:12,align:"center",children:[(0,t.jsx)(d.default,{size:32}),(0,t.jsx)(o.Text,{variant:"subheadDefault",children:"You've hit your limit of free Apps"}),(0,t.jsx)(s.default,{context:"repl_limit_upsell",colorway:"primary",variant:"default",text:`Upgrade to ${a.corePlanName} for unlimited Apps`,modalHeadingText:`Upgrade to ${a.corePlanName} for unlimited Apps`,modalSubHeadingText:"You've hit your limit for Apps"})]})],986905),e.s(["AgentInputKillswitch",0,()=>(0,t.jsx)(i.View,{children:(0,t.jsx)(r.StatusBanner,{colorway:"red",text:"This feature is currently unavailable. Please try again later."})})],132728);var l=e.i(389959),u=e.i(414779),c=e.i(269848),g=e.i(995691),p=e.i(541508),m=e.i(446530),A=e.i(613355),h=e.i(140487),y=e.i(751273);let _=()=>(0,t.jsx)(i.View,{children:(0,t.jsx)(r.StatusBanner,{colorway:"warning",text:"You do not have permission to create an app"})}),x=({orgId:e,orgName:n,currentUserId:a})=>{let[s,d]=(0,l.useState)(!1),{data:m,loading:A,error:_}=(0,u.useOrgViewerUpgradeRequestQuery)({variables:{orgId:e,upgradeRequestInput:{userId:a,status:"PENDING"}}}),x=m?.currentUser?.org.__typename==="Org"&&null!==m.currentUser.org.upgradeRequest;return A?(0,t.jsx)(i.View,{css:E.loadingAndErrorWrapper,children:(0,t.jsx)(c.default,{})}):_?(0,t.jsx)(i.View,{css:E.loadingAndErrorWrapper,children:(0,t.jsx)(i.View,{children:(0,t.jsx)(r.StatusBanner,{colorway:"red",text:"Something went wrong."})})}):(0,t.jsxs)(i.View,{css:E.overlayContainer,gap:16,justify:"center",align:"center",children:[(0,t.jsx)(g.default,{size:24}),(0,t.jsx)(o.Text,{css:E.overlayText,children:"As a viewer you can access apps but you can't create them. To create apps, you need to request an upgrade to a full seat from your workspace admin."}),(0,t.jsx)(y.Tooltip,{tooltip:"You already have a pending upgrade request. Please wait for your admin to respond.",isDisabled:!x,children:(0,t.jsx)(h.Button,{text:"Request upgrade from admin",isDisabled:x,variant:"default",colorway:"primary",onClick:()=>d(!0)})}),(0,t.jsx)(p.default,{isOpen:s,orgId:e,orgName:n,onClose:()=>d(!1),onSuccess:()=>d(!1)})]})},E=(0,m.cssRecord)({loadingAndErrorWrapper:[A.rcss.display.flex,A.rcss.flex.growAndShrink(1),A.rcss.center],overlayContainer:[A.rcss.maxWidth("100%")],overlayText:[A.rcss.textAlign.center,A.rcss.maxWidth(600),A.rcss.colWithGap(8)]});e.s(["AgentInputNoCreationPermission",0,({owner:e,currentUserId:r})=>{let i="Org"===e.__typename;return"Org"===e.__typename&&"OrgGroupConnection"===e.groups.__typename&&void 0!==e.groups.items.find(e=>"system_viewers"===e.type&&e.isMember)?(0,t.jsx)(x,{orgId:i?e.id:"",orgName:e.name,currentUserId:r}):(0,t.jsx)(_,{})}],183662)},135958,175195,e=>{"use strict";var t,r=e.i(368964),i=e.i(813190),n=e.i(968783),a=e.i(312782);function s(){let e,t,r,s,{orgId:o}=(0,n.useCurrentUserStoredOrgContext)(),d=void 0!==o,{data:l,loading:u,error:c}=(0,i.useStartWithAiUsageLimitsQuery)({variables:{orgId:o},context:{noBatch:!0},ssr:!1});if(u)return{status:"loading"};let g=!0;if(d){e=!!l?.currentUser&&"Org"===l.currentUser.org.__typename&&l.currentUser.org.usageBasedBillingBudget?.__typename==="UsageBasedBillingBudget"&&l.currentUser.org.usageBasedBillingBudget.hasReachedBudget,g=!!l?.currentUser&&"Org"===l.currentUser.org.__typename&&l.currentUser.org.authorizations?.__typename==="OrgAuthorizations"&&l.currentUser.org.authorizations.editUsageLimit.isAuthorized,t=l?.currentUser?.org.__typename==="Org"?l.currentUser.org:void 0;let i=l?.currentUser?.org.__typename==="Org"&&"Customer"===l.currentUser.org.customer.__typename?l.currentUser.org.customer:void 0;if(i){let e=(0,a.extractCustomerAlerts)(i);s=e.customerId,r=e.alerts}}else{e=!!l?.currentUser&&l.currentUser.usageBasedBillingBudget?.__typename==="UsageBasedBillingBudget"&&l.currentUser.usageBasedBillingBudget.hasReachedBudget;let t=l?.currentUser?.customer;if(t){let e=(0,a.extractCustomerAlerts)(t);s=e.customerId,r=e.alerts}}let p=c?"Failed to load usage data":void 0;return p?{status:"error",error:p}:{status:"success",hasReachedBudget:e,canEditUsageLimit:g,org:t,usageBasedBillingAlerts:r,customerId:s}}function o(e){return"CurrentUser"===e.__typename?"OrgAuthorizations"===e.personalOrgAuthorizations.__typename?e.personalOrgAuthorizations:void 0:"Org"===e.__typename?e.authorizations:void 0}e.s(["getAgentAuthorizationsForOwner",()=>o,"useBillingBudgetStatus",()=>s],175195);var d=e.i(173532),l=e.i(993796),u=e.i(882029),c=e.i(573605),g=((t={}).AgentKillswitch="Agent killswitch",t.ErrorDeterminingBudget="Error determining budget",t.BudgetExceeded="Budget exceeded",t.EmailVerificationRequired="Email verification required",t.FreeAgentUsageQuotaExceeded="Free Agent usage quota exceeded",t.FreeReplLimitExceeded="Free Repl limit exceeded",t.FreemiumTemporarilyUnavailable="Freemium temporarily unavailable",t.NoReplCreationPermissions="No Repl creation permissions",t.UserUBBBanned="User is UBB Banned",t.RequiresPaymentMethod="Requires payment method",t.PaymentDelinquent="Failed payment. Update payment method to continue using Agent.",t.UserUsageAlertThresholdExceeded="User usage alert threshold exceeded",t.GroupUsageAlertThresholdExceeded="Group usage alert threshold exceeded",t);function p(e,t){let{agentUsage:i,agentUsageV2:n,loading:a}=(0,c.useGetAgentFreeUsage)(),s="Org"===e.__typename?e.id:void 0,g=o(e),{loading:p,isUBBBanned:m}=(0,u.useIsUBBBanned)({orgId:s}),A=(0,d.useReplLimit)(),h=(0,l.useFlag)({controlName:"flag-killswitch-agent"}),y=(0,l.useFlag)({controlName:"flag-freemium-ai-load-shedder"}),_="CurrentUser"===e.__typename&&!e.isSubscribed,x="Org"===e.__typename&&!e.authorizations.createPrivateRepl.isAuthorized&&!e.authorizations.createPublicRepl.isAuthorized;if(!g||a||"loading"===t.status||"loading"===A.type||p)return{loading:!0,hasAccess:!1};if(h)return{loading:!1,hasAccess:!1,accessDeniedReason:"Agent killswitch"};if(m)return{loading:!1,hasAccess:!1,accessDeniedReason:"User is UBB Banned"};if("error"===t.status)return{loading:!1,hasAccess:!1,accessDeniedReason:"Error determining budget"};if(!g.paidAgent.isAuthorized&&g.paidAgent.code===r.OrgAuthorizationCode.InsufficientBudget)return{loading:!1,hasAccess:!1,accessDeniedReason:"Budget exceeded"};if(!g.paidAgent.isAuthorized&&!g.freeAgent.isAuthorized&&x)return{loading:!1,hasAccess:!1,accessDeniedReason:"No Repl creation permissions"};if(!g.freeAgent.isAuthorized&&g.freeAgent.code===r.OrgAuthorizationCode.RequiresEmailVerification)return{loading:!1,hasAccess:!1,accessDeniedReason:"Email verification required"};let E=n?n.isUnderQuota:i?.isUnderQuota;return _&&!E?{loading:!1,hasAccess:!1,accessDeniedReason:"Free Agent usage quota exceeded"}:"data"===A.type&&A.shouldBlockReplForm?{loading:!1,hasAccess:!1,accessDeniedReason:"Free Repl limit exceeded"}:y&&_?{loading:!1,hasAccess:!1,accessDeniedReason:"Freemium temporarily unavailable"}:g.paidAgent.code===r.OrgAuthorizationCode.RequiresPaymentMethod?{loading:!1,hasAccess:!1,accessDeniedReason:"Requires payment method"}:g.paidAgent.code===r.OrgAuthorizationCode.PaymentDelinquent?{loading:!1,hasAccess:!1,accessDeniedReason:"Failed payment. Update payment method to continue using Agent."}:g.paidAgent.code===r.OrgAuthorizationCode.UserUsageAlertThresholdExceeded?{loading:!1,hasAccess:!1,accessDeniedReason:"User usage alert threshold exceeded"}:g.paidAgent.code===r.OrgAuthorizationCode.GroupUsageAlertThresholdExceeded?{loading:!1,hasAccess:!1,accessDeniedReason:"Group usage alert threshold exceeded"}:{loading:!1,hasAccess:!0}}e.s(["AgentAccessDeniedReason",()=>g,"useAgentReplCreationAccess",()=>p],135958)},398973,e=>{"use strict";var t=e.i(276385),r=e.i(750854),i=e.i(389959),n=e.i(368964),a=e.i(569910),s=e.i(673573),o=e.i(383737),d=e.i(473822),l=e.i(986905),u=e.i(132728),c=e.i(183662),g=e.i(516308),p=e.i(508536),m=e.i(135958),A=e.i(82464),h=e.i(968783),y=e.i(201411),_=e.i(78116),x=e.i(739521),E=e.i(871318);function S({agentAccessDeniedReason:e,owner:S,usageInfo:T,currentUserId:U,onEmailVerified:B}){let[R,C]=(0,i.useState)(!1),{orgRole:f,orgDealContext:I}=(0,h.useCurrentUserStoredOrgContext)(),v=(0,r.useRouter)();return e===m.AgentAccessDeniedReason.BudgetExceeded?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(g.AgentInputReachedHardLimit,{orgId:"Org"===S.__typename?S.id:void 0,canEditUsageLimit:"success"===T.status&&T.canEditUsageLimit,onIncreaseBudget:()=>C(!0)}),(0,t.jsx)(x.Modal,{isOpen:R,onRequestClose:()=>C(!1),children:"success"===T.status&&void 0!==T.customerId?(0,t.jsx)(y.EditUsageBasedBillingAlertsForm,{org:T.org,customerId:T.customerId,initialSettings:T.usageBasedBillingAlerts,onDone:()=>C(!1)}):null})]}):e===m.AgentAccessDeniedReason.FreeAgentUsageQuotaExceeded?(0,t.jsx)(o.AgentInputFreemiumQuotaExceeded,{}):e===m.AgentAccessDeniedReason.ErrorDeterminingBudget?(0,t.jsx)(s.AgentInputErrorDeterminingBudget,{}):e===m.AgentAccessDeniedReason.AgentKillswitch?(0,t.jsx)(u.AgentInputKillswitch,{}):e===m.AgentAccessDeniedReason.PaymentDelinquent?(0,t.jsx)(p.default,{context:"Org"===S.__typename?{type:"org",orgId:S.id,isAdmin:f===n.SystemOrgGroupType.SystemAdmins,canEditPaymentMethod:f===n.SystemOrgGroupType.SystemAdmins,isSuspended:!1,orgDealContext:I}:{type:"user",isSuspended:!1}}):e===m.AgentAccessDeniedReason.FreeReplLimitExceeded?(0,t.jsx)(l.AgentInputFreeReplLimitExceeded,{}):e===m.AgentAccessDeniedReason.EmailVerificationRequired?(0,t.jsx)(A.default,{onEmailVerified:B??(()=>{v.reload()})}):e===m.AgentAccessDeniedReason.FreemiumTemporarilyUnavailable?(0,t.jsx)(d.AgentInputFreemiumTemporarilyUnavailable,{}):e===m.AgentAccessDeniedReason.NoReplCreationPermissions?(0,t.jsx)(c.AgentInputNoCreationPermission,{owner:S,currentUserId:U}):e===m.AgentAccessDeniedReason.UserUBBBanned?(0,t.jsx)(p.default,{context:"Org"===S.__typename?{type:"org",orgId:S.id,isAdmin:f===n.SystemOrgGroupType.SystemAdmins,canEditPaymentMethod:S.authorizations.editPaymentMethod.isAuthorized,isSuspended:!0,orgDealContext:I}:{type:"user",isSuspended:!0}}):e===m.AgentAccessDeniedReason.RequiresPaymentMethod?(0,t.jsx)(E.default,{owner:"Org"===S.__typename?{type:"org",slug:S.slug}:void 0}):e===m.AgentAccessDeniedReason.UserUsageAlertThresholdExceeded?(0,t.jsx)(_.OrgAlertThresholdExceededMessage,{type:"user",orgSlug:"Org"===S.__typename?S.slug:void 0}):e===m.AgentAccessDeniedReason.GroupUsageAlertThresholdExceeded?(0,t.jsx)(_.OrgAlertThresholdExceededMessage,{type:"group",orgSlug:"Org"===S.__typename?S.slug:void 0}):void(0,a.default)(e)}e.s(["AgentAccessDeniedContent",()=>S])},688975,e=>{"use strict";var t=e.i(276385),r=e.i(398973);function i(e){return(0,t.jsx)(r.AgentAccessDeniedContent,{...e})}e.s(["AgentAccessDeniedBanner",()=>i])}]);

//# debugId=e434d7ce-2489-3ad4-1735-02b392a0319c
//# sourceMappingURL=3787800b6a852ee1.js.map