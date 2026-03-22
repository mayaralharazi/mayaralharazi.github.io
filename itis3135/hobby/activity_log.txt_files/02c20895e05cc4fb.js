;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="7c4108c5-770e-fa17-a41d-453de8499f56")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,58261,e=>{"use strict";var t=e.i(389959),n=e.i(507491),o=e.i(520112),r=e.i(882793),s=e.i(968783);let i={};function a(){let{orgId:e}=(0,s.useCurrentUserStoredOrgContext)(),a=!!e,{data:l,loading:c,error:u,refetch:d}=(0,o.useGetConnectorContextQuery)({skip:a,context:i}),{data:m,loading:p,error:f,refetch:g}=(0,o.useGetConnectorContextByOrgQuery)({variables:{orgId:e??""},skip:!a,context:i}),C=l?.currentUser?.__typename==="CurrentUser"?l?.currentUser?.connectorContext:null,y=m?.currentUser?.__typename==="CurrentUser"&&m?.currentUser?.org?.__typename==="Org"?m?.currentUser?.org?.connectorContext:null,h=a?y:C,x=a?f:u,_=a?p:c,b=a?g:d,[S,{loading:v}]=(0,n.useCreateConnectionMutation)(),O=(0,t.useCallback)(async t=>S({...t,refetchQueries:a?[{query:o.GetConnectorContextByOrgDocument,variables:{orgId:e??""}}]:[{query:o.GetConnectorContextDocument}]}),[S,a,e]),N=h&&(a?"OrgConnectorContext"===h.__typename:"CurrentUserConnectorContext"===h.__typename),E=a?m?.currentUser?.__typename==="CurrentUser"&&m.currentUser.isSubscribed:l?.currentUser?.__typename==="CurrentUser"&&l.currentUser.isSubscribed,A=(0,t.useMemo)(()=>{if(!N||"CurrentUserConnectorContext"!==h.__typename&&"OrgConnectorContext"!==h.__typename)return[];let e=[],t=h.connectorWhitelist??[],n=h.connections??[],o=h.connectorConfigs??[],s=n.filter(e=>(t.includes(e.connectorName)||r.MCP_CONNECTORS.has(e.connectorName))&&!r.APP_SCOPED_CONNECTORS.has(e.connectorName)),i=new Set(s.map(e=>e.connectorName)),a=new Map;o.forEach(e=>{e.connectorName&&e.webhookEvents&&e.webhookEvents.length>0&&a.set(e.connectorName,e.webhookEvents)});let l=o.filter(e=>e.connectorName&&t.includes(e.connectorName)&&!i.has(e.connectorName)&&"CUSTOM_MCP"!==e.connectorName);return s.forEach(t=>{e.push({id:t.connectionId,displayName:t.displayName,iconPath:t.iconPath,connectorName:t.connectorName,connectorType:"connection",type:t.type,webhookEvents:a.get(t.connectorName)})}),l.forEach(t=>{t.connectorName&&e.push({id:t.id,displayName:t.displayName??"Untitled",iconPath:t.iconPath,connectorName:t.connectorName,connectorType:"connectorConfig",type:t.type,webhookEvents:a.get(t.connectorName)})}),e},[N,h]);return x||!N||"CurrentUserConnectorContext"!==h.__typename&&"OrgConnectorContext"!==h.__typename?{token:null,connections:[],connectorConfigs:[],connectorWhitelist:[],slashCommandConnectorItems:[],createConnection:O,loading:_,createConnectionLoading:v,error:x,refetch:b,isSubscribed:E??!1,isOrgContext:a}:{token:h.openIntClientToken,connections:h.connections??[],connectorConfigs:h.connectorConfigs??[],connectorWhitelist:h.connectorWhitelist??[],slashCommandConnectorItems:A,createConnection:O,loading:_,createConnectionLoading:v,error:x,refetch:b,isSubscribed:E??!1,isOrgContext:a}}e.s(["useConnectorContext",()=>a])},887178,(e,t,n)=>{var o=e.r(346012),r=e.r(386457);t.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==o(e)}},70234,(e,t,n)=>{t.exports=function(e,t){for(var n=-1,o=null==e?0:e.length,r=Array(o);++n<o;)r[n]=t(e[n],n,e);return r}},296438,(e,t,n)=>{var o=e.r(220259),r=e.r(70234),s=e.r(372797),i=e.r(887178),a=1/0,l=o?o.prototype:void 0,c=l?l.toString:void 0;t.exports=function e(t){if("string"==typeof t)return t;if(s(t))return r(t,e)+"";if(i(t))return c?c.call(t):"";var n=t+"";return"0"==n&&1/t==-a?"-0":n}},669135,(e,t,n)=>{var o=e.r(296438);t.exports=function(e){return null==e?"":o(e)}},910612,(e,t,n)=>{"use strict";t.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;if(Array.isArray(t)){if((o=t.length)!=n.length)return!1;for(r=o;0!=r--;)if(!e(t[r],n[r]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((o=(s=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(r=o;0!=r--;)if(!Object.prototype.hasOwnProperty.call(n,s[r]))return!1;for(r=o;0!=r--;){var o,r,s,i=s[r];if(!e(t[i],n[i]))return!1}return!0}return t!=t&&n!=n}},794404,e=>{"use strict";var t=e.i(276385),n=e.i(269848),o=e.i(446530),r=e.i(613355),s=e.i(625484);let i=(0,o.cssRecord)({container:[r.rcss.width("100%"),r.rcss.height(200),r.rcss.center]});e.s(["default",0,()=>(0,t.jsx)(s.View,{css:i.container,children:(0,t.jsx)(n.default,{size:24})})])},89078,e=>{"use strict";var t=e.i(276385),n=e.i(416298),o=e.i(446530),r=e.i(613355),s=e.i(396776),i=e.i(625484);let a=(0,o.cssRecord)({styles1:[r.rcss.pr(8)]});function l({children:e}){return"string"!=typeof e?null:(0,t.jsx)(i.View,{align:"start",children:(0,t.jsx)(s.StatusBanner,{icon:(0,t.jsx)(n.default,{}),colorway:"negative",text:e,css:a.styles1})})}e.s(["default",()=>l])},957715,e=>{e.v({input:"PasswordInput-module__FmP1wq__input",toggleButton:"PasswordInput-module__FmP1wq__toggleButton",wrapper:"PasswordInput-module__FmP1wq__wrapper"})},630795,e=>{"use strict";var t=e.i(276385),n=e.i(389959),o=e.i(712771),r=e.i(979530),s=e.i(136540),i=e.i(607278),a=e.i(625484),l=e.i(957715);function c({showToggle:e=!0,toggleButtonProps:c,disablePasswordManagers:u=!0,...d}){let[m,p]=(0,n.useState)(!1),f=u?{autoComplete:"off","data-1p-ignore":!0,"data-lpignore":"true","data-protonpass-ignore":"true",...d}:d;return e?(0,t.jsxs)(a.View,{className:l.default.wrapper,children:[(0,t.jsx)(i.Input,{...f,type:m?"text":"password",className:l.default.input,style:d.style}),(0,t.jsx)(s.IconButton,{alt:m?"Hide password":"Show password",onClick:()=>p(e=>!e),className:l.default.toggleButton,...c,children:m?(0,t.jsx)(r.default,{}):(0,t.jsx)(o.default,{})})]}):(0,t.jsx)(i.Input,{...f,type:"password"})}e.s(["PasswordInput",()=>c])},200966,e=>{e.v({$id:"https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",description:"Meta-schema for $data reference (JSON AnySchema extension proposal)",type:"object",required:["$data"],properties:{$data:{type:"string",anyOf:[{format:"relative-json-pointer"},{format:"json-pointer"}]}},additionalProperties:!1})},180338,e=>{e.v({$schema:"http://json-schema.org/draft-07/schema#",$id:"http://json-schema.org/draft-07/schema#",title:"Core schema meta-schema",definitions:{schemaArray:{type:"array",minItems:1,items:{$ref:"#"}},nonNegativeInteger:{type:"integer",minimum:0},nonNegativeIntegerDefault0:{allOf:[{$ref:"#/definitions/nonNegativeInteger"},{default:0}]},simpleTypes:{enum:["array","boolean","integer","null","number","object","string"]},stringArray:{type:"array",items:{type:"string"},uniqueItems:!0,default:[]}},type:["object","boolean"],properties:{$id:{type:"string",format:"uri-reference"},$schema:{type:"string",format:"uri"},$ref:{type:"string",format:"uri-reference"},$comment:{type:"string"},title:{type:"string"},description:{type:"string"},default:!0,readOnly:{type:"boolean",default:!1},examples:{type:"array",items:!0},multipleOf:{type:"number",exclusiveMinimum:0},maximum:{type:"number"},exclusiveMaximum:{type:"number"},minimum:{type:"number"},exclusiveMinimum:{type:"number"},maxLength:{$ref:"#/definitions/nonNegativeInteger"},minLength:{$ref:"#/definitions/nonNegativeIntegerDefault0"},pattern:{type:"string",format:"regex"},additionalItems:{$ref:"#"},items:{anyOf:[{$ref:"#"},{$ref:"#/definitions/schemaArray"}],default:!0},maxItems:{$ref:"#/definitions/nonNegativeInteger"},minItems:{$ref:"#/definitions/nonNegativeIntegerDefault0"},uniqueItems:{type:"boolean",default:!1},contains:{$ref:"#"},maxProperties:{$ref:"#/definitions/nonNegativeInteger"},minProperties:{$ref:"#/definitions/nonNegativeIntegerDefault0"},required:{$ref:"#/definitions/stringArray"},additionalProperties:{$ref:"#"},definitions:{type:"object",additionalProperties:{$ref:"#"},default:{}},properties:{type:"object",additionalProperties:{$ref:"#"},default:{}},patternProperties:{type:"object",additionalProperties:{$ref:"#"},propertyNames:{format:"regex"},default:{}},dependencies:{type:"object",additionalProperties:{anyOf:[{$ref:"#"},{$ref:"#/definitions/stringArray"}]}},propertyNames:{$ref:"#"},const:!0,enum:{type:"array",items:!0,minItems:1,uniqueItems:!0},type:{anyOf:[{$ref:"#/definitions/simpleTypes"},{type:"array",items:{$ref:"#/definitions/simpleTypes"},minItems:1,uniqueItems:!0}]},format:{type:"string"},contentMediaType:{type:"string"},contentEncoding:{type:"string"},if:{$ref:"#"},then:{$ref:"#"},else:{$ref:"#"},allOf:{$ref:"#/definitions/schemaArray"},anyOf:{$ref:"#/definitions/schemaArray"},oneOf:{$ref:"#/definitions/schemaArray"},not:{$ref:"#"}},default:!0})},836418,e=>{e.v({comboBox:"MultiSelectComboBox-module__HEavuq__comboBox",disabledButtonContent:"MultiSelectComboBox-module__HEavuq__disabledButtonContent",disabledContainer:"MultiSelectComboBox-module__HEavuq__disabledContainer",emptyState:"MultiSelectComboBox-module__HEavuq__emptyState",inlineTag:"MultiSelectComboBox-module__HEavuq__inlineTag",input:"MultiSelectComboBox-module__HEavuq__input",inputContainer:"MultiSelectComboBox-module__HEavuq__inputContainer",inputGroup:"MultiSelectComboBox-module__HEavuq__inputGroup",listBox:"MultiSelectComboBox-module__HEavuq__listBox",listBoxItem:"MultiSelectComboBox-module__HEavuq__listBoxItem",popover:"MultiSelectComboBox-module__HEavuq__popover",removeButton:"MultiSelectComboBox-module__HEavuq__removeButton",selectedItemsContainer:"MultiSelectComboBox-module__HEavuq__selectedItemsContainer",srOnly:"MultiSelectComboBox-module__HEavuq__srOnly",tag:"MultiSelectComboBox-module__HEavuq__tag",tagText:"MultiSelectComboBox-module__HEavuq__tagText",triggerButton:"MultiSelectComboBox-module__HEavuq__triggerButton"})},177332,e=>{"use strict";var t=e.i(276385),n=e.i(389959),o=e.i(474453),r=e.i(654647),s=e.i(255615),i=e.i(964304),a=e.i(785240),l=e.i(413309),c=e.i(167392),u=e.i(602686),d=e.i(960178),m=e.i(625484),p=e.i(836418);function f({items:e,selectedItems:f,onChange:g,getItemId:C,getItemLabel:y,placeholder:h="Type to search or add...",isDisabled:x=!1,allowCustomValues:_=!0,renderItem:b,filterItems:S,createCustomItem:v}){let[O,N]=(0,n.useState)(""),E=(0,n.useRef)(null),A=(0,n.useMemo)(()=>new Set(f.map(C)),[f,C]),I=(0,n.useMemo)(()=>{let t=e.filter(e=>!A.has(C(e))),n=O.trim();if(!n)return t;if(S)return S(t,n);let o=n.toLowerCase();return t.filter(e=>y(e).toLowerCase().includes(o))},[e,O,A,S,C,y]),w=(0,n.useMemo)(()=>I.map((e,t)=>({_id:`${C(e)}-${t}`,_value:e})),[I,C]);if(x)return(0,t.jsx)(m.View,{className:p.default.disabledContainer,children:(0,t.jsx)(m.View,{className:p.default.disabledButtonContent,children:0===f.length?(0,t.jsx)(d.Text,{children:"No items selected"}):(0,t.jsx)("div",{className:p.default.selectedItemsContainer,children:f.map(e=>(0,t.jsx)("div",{className:p.default.tag,children:(0,t.jsx)(d.Text,{variant:"small",className:p.default.tagText,children:y(e)})},C(e)))})})});let T=_?I.length>0||""!==O.trim():I.length>0;return(0,t.jsxs)(o.ComboBox,{className:p.default.comboBox,inputValue:O,onInputChange:e=>{N(e)},onSelectionChange:e=>{if(!e)return;let t=w.find(t=>t._id===e.toString());t&&(g([...f,t._value]),N(""))},selectedKey:null,shouldFocusWrap:!0,menuTrigger:T?"input":"manual",allowsEmptyCollection:!0,children:[(0,t.jsx)(a.Label,{className:p.default.srOnly,children:"Select items"}),(0,t.jsxs)("div",{className:p.default.inputGroup,children:[(0,t.jsxs)("div",{className:p.default.inputContainer,onClick:()=>E.current?.focus(),onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&E.current?.focus()},role:"presentation",children:[f.map(e=>(0,t.jsxs)("div",{className:p.default.inlineTag,children:[(0,t.jsx)(d.Text,{variant:"small",className:p.default.tagText,children:y(e)}),(0,t.jsx)("button",{type:"button",className:p.default.removeButton,onClick:t=>{t.stopPropagation(),g(f.filter(t=>C(t)!==C(e)))},"aria-label":`Remove ${y(e)}`,children:(0,t.jsx)(u.default,{size:12})})]},C(e))),(0,t.jsx)(i.Input,{ref:E,className:p.default.input,placeholder:0===f.length?h:"",onKeyDown:e=>{if("ArrowDown"!==e.key&&"ArrowUp"!==e.key)if("Enter"===e.key&&_){if(I.length>0)return;let t=O.trim();t&&!f.some(e=>y(e)===t)&&(e.preventDefault(),g([...f,v?v(t):t]),N(""))}else"Backspace"===e.key&&!O&&f.length>0&&g(f.slice(0,-1))}})]}),(0,t.jsx)(s.Button,{className:p.default.triggerButton,"aria-label":"Show items",children:(0,t.jsx)(c.default,{size:12})})]}),(0,t.jsx)(l.Popover,{className:p.default.popover,placement:"bottom start",children:(0,t.jsx)(r.ListBox,{className:p.default.listBox,items:w,renderEmptyState:()=>_&&O.trim()?(0,t.jsx)(m.View,{className:p.default.emptyState,onClick:()=>{let e=O.trim();f.some(t=>y(t)===e)||(g([...f,v?v(e):e]),N(""))},onKeyDown:e=>{if("Enter"===e.key){let e=O.trim();f.some(t=>y(t)===e)||(g([...f,v?v(e):e]),N(""))}},role:"button",tabIndex:0,children:(0,t.jsxs)(d.Text,{variant:"small",children:['Press Enter to add "',O.trim(),'"']})}):(0,t.jsx)(m.View,{className:p.default.emptyState,children:(0,t.jsx)(d.Text,{variant:"small",children:_?"Type to search or add custom items":"No matching items found"})}),children:e=>{let n=e._value;return(0,t.jsx)(r.ListBoxItem,{id:e._id,className:p.default.listBoxItem,textValue:y(n),children:b?b(n):(0,t.jsx)(d.Text,{variant:"small",children:y(n)})},e._id)}})})]})}e.s(["MultiSelectComboBox",()=>f])},507491,520112,e=>{"use strict";var t=e.i(973245),n=e.i(304277);e.i(566901);let o={},r=t.gql`
    fragment ConnectorContextReplInfo on Repl {
  id
  title
  iconUrl
  url
  timeCreated
  user {
    id
    username
    image
  }
}
    `,s=t.gql`
    fragment ConnectorContextConnectionInfo on OintConnection {
  connectionId
  connectorName
  displayName
  iconPath
  status
  type
  environment
  webhookProvider
  repls {
    ...ConnectorContextReplInfo
  }
  predefinedProvider {
    id
    displayName
    description
    baseUrl
    iconPath
  }
}
    ${r}`,i=t.gql`
    fragment ConnectorContext on CurrentUserConnectorContext {
  openIntClientToken
  connectorWhitelist
  connections {
    ...ConnectorContextConnectionInfo
  }
  connectorConfigs {
    id
    type
    connectorName
    displayName
    iconPath
    webhookEvents {
      name
      model
      description
    }
  }
}
    ${s}`,a=t.gql`
    fragment OrgConnectorContext on OrgConnectorContext {
  openIntClientToken
  connectorWhitelist
  connections {
    ...ConnectorContextConnectionInfo
  }
  connectorConfigs {
    id
    type
    connectorName
    displayName
    iconPath
    webhookEvents {
      name
      model
      description
    }
  }
}
    ${s}`,l=t.gql`
    query GetConnectorContext {
  currentUser {
    ... on CurrentUser {
      id
      isSubscribed
      connectorContext {
        ...ConnectorContext
      }
    }
  }
}
    ${i}`;function c(e){let t={...o,...e};return n.useQuery(l,t)}let u=t.gql`
    query GetConnectorContextByOrg($orgId: String!) {
  currentUser {
    ... on CurrentUser {
      id
      isSubscribed
      org(orgId: $orgId) {
        __typename
        ... on Org {
          id
          connectorContext {
            ...OrgConnectorContext
          }
        }
        ... on Error {
          __typename
          message
        }
      }
    }
  }
}
    ${a}`;function d(e){let t={...o,...e};return n.useQuery(u,t)}e.s(["ConnectorContextConnectionInfoFragmentDoc",0,s,"ConnectorContextFragmentDoc",0,i,"ConnectorContextReplInfoFragmentDoc",0,r,"GetConnectorContextByOrgDocument",0,u,"GetConnectorContextDocument",0,l,"OrgConnectorContextFragmentDoc",0,a,"useGetConnectorContextByOrgQuery",()=>d,"useGetConnectorContextQuery",()=>c],520112);var m=e.i(951262);let p={},f=t.gql`
    query UserConnectorsPage {
  currentUser {
    id
    __typename
    isSubscribed
    connectorContext {
      __typename
      ...ConnectorContext
      ... on Error {
        message
      }
    }
  }
}
    ${i}`;function g(e){let t={...p,...e};return n.useQuery(f,t)}let C=t.gql`
    mutation CreateConnection($input: CreateConnectionInput!) {
  createConnection(input: $input) {
    ... on CreateConnection {
      connectionId
    }
    ... on Error {
      message
    }
  }
}
    `;function y(e){let t={...p,...e};return m.useMutation(C,t)}let h=t.gql`
    mutation DeleteConnection($input: DeleteConnectionInput!) {
  deleteConnection(input: $input) {
    ... on DeleteConnection {
      success
    }
  }
}
    `;function x(e){let t={...p,...e};return m.useMutation(h,t)}let _=t.gql`
    mutation RequestNewConnector($input: RequestNewConnectorInput!) {
  requestNewConnector(input: $input) {
    ... on RequestNewConnectorResult {
      success
    }
  }
}
    `;function b(e){let t={...p,...e};return m.useMutation(_,t)}e.s(["UserConnectorsPageDocument",0,f,"useCreateConnectionMutation",()=>y,"useDeleteConnectionMutation",()=>x,"useRequestNewConnectorMutation",()=>b,"useUserConnectorsPageQuery",()=>g],507491)},882793,e=>{"use strict";var t=e.i(276385),n=e.i(368964),o=e.i(917736),r=e.i(882848),s=e.i(995691),i=e.i(146432),a=e.i(480028);let l=new Set(["FIGMA","CUSTOM_MCP"]),c=new Set(["BITBUCKET_SOURCE_CONTROL","GITHUB_SOURCE_CONTROL","GITLAB_SOURCE_CONTROL"]),u=new Set(["STRIPE"]),d=new Set(["disconnected","error"]),m=new Set(["YOUTUBE"]);function p(e){if(!e)return null;let t=e.toUpperCase();return Object.values(n.ConnectorName).includes(t)?t:null}let f=[{id:"replit-database",name:"Replit Database",type:"PostgreSQL",icon:(0,t.jsx)(o.default,{size:16,color:a.tokens.blueStronger}),link:"https://docs.replit.com/cloud-services/storage-and-databases/sql-database",pane:{type:"neon"}},{id:"replit-app-storage",name:"Replit App Storage",type:"Object Storage",icon:(0,t.jsx)(i.default,{size:16,color:a.tokens.greenStronger}),link:"https://docs.replit.com/cloud-services/storage-and-databases/object-storage",pane:{type:"objectStorage"}},{id:"replit-auth",name:"Replit Auth",type:"Authentication",icon:(0,t.jsx)(s.default,{size:16,color:a.tokens.orangeStronger}),link:"https://docs.replit.com/replit-workspace/replit-auth#replit-auth",pane:{type:"replitAuth"}},{id:"replit-domains",name:"Replit Domains",type:"Domains",icon:(0,t.jsx)(r.default,{size:16,color:a.tokens.tealStronger}),link:"https://docs.replit.com/cloud-services/deployments/domain-purchasing",pane:{type:"deployments"}}];e.s(["APP_SCOPED_CONNECTORS",0,u,"CONNECTOR_DESCRIPTIONS",0,{AGENTMAIL:"Send, receive, and reply to emails using the AgentMail email inbox API.",AMPLITUDE:"Query analytics data, manage event taxonomy, and trigger project runs in Amplitude",ASHBY:"Access job postings, candidates, and applications from your Ashby ATS",ASANA:"Read tasks and project data from Asana workspaces",SPROUTSOCIAL:"Manage social media profiles, posts, messages, and cases from Sprout Social",BITBUCKET:"Access Bitbucket repositories, users, and organizations from Replit",BITBUCKET_SOURCE_CONTROL:"Sync code to Bitbucket repositories from your Replit apps",GITHUB_SOURCE_CONTROL:"Sync code to GitHub repositories from your Replit apps",GITLAB_SOURCE_CONTROL:"Sync code to GitLab projects from your Replit apps",DATABRICKS_M2M:"Execute SQL queries and manage data workflows in Databricks using a service account",BIGQUERY:"Execute SQL queries on Google BigQuery datasets from your Replit apps",BOX:"Access Box files and folders from Replit",CALENDLY:"View Calendly events and event types",CONFLUENCE:"Read users and groups, create and edit content in Confluence spaces",CLICKUP:"Access tasks, projects, and workflows in ClickUp",DATABRICKS:"Execute SQL queries and manage data workflows in Databricks",DISCORD:"Access Discord guild information and user profiles",DROPBOX:"Access Dropbox files, content, and metadata",ELEVENLABS:"AI voice generation and text-to-speech",HEX:"Run data notebooks, manage projects, and trigger Hex project runs via API",OPENAI:"Access your own OpenAI API key instead of default Replit-managed AI integrations",FACEBOOK:"View Facebook profiles, posts, photos, and manage pages",GITHUB:"Access GitHub repositories, users, and organizations from your Replit apps",GOOGLE_CALENDAR:"Read and write Google Calendar events and settings",GOOGLE_DOCS:"Create, read, and edit Google Docs",GOOGLE_DRIVE:"Access and manage Google Drive files and folders",GOOGLE_MAIL:"Send, receive, and manage Gmail messages",GOOGLE_SHEET:"Read and write data in Google Sheets",GOOGLE_SLIDES:"Create, read, and edit Google Slides presentations",HUBSPOT:"Access HubSpot CRM objects, contacts, and deals from Replit",INSTAGRAM:"Manage Instagram business content, messages, and insights",JIRA:"View users and manage Jira work items and issues",LINEAR:"Create and manage Linear issues, comments, and schedules",MONDAY:"Access Monday.com boards and user information",MOBILE_MAPS:"Access mobile maps and locations from Replit",NOTION:"Read and write to Notion workspaces and pages",ONEDRIVE:"Access and manage OneDrive files and folders",OUTLOOK:"Send and receive emails, manage Outlook calendar events",PLAID:"Access Plaid connected bank accounts and transactions",POSTGRES:"Execute read-only SQL queries on PostgreSQL databases",RESEND:"Send transactional emails using the Resend API",REVENUECAT:"Monetize your mobile apps built on Replit",SALESFORCE:"Access Salesforce CRM data and perform operations via REST API",SEGMENT:"Manage Segment sources, destinations, and tracking plans via the Public API",SENDGRID:"Send transactional emails using the SendGrid API",SHAREPOINT:"Read, write, and manage SharePoint sites and documents",SLACK:"Send messages and interact with Slack workspaces",SLACK_AGENT:"Integrate Slack agent capabilities from Replit",SLACK_AGENT_BUILDER:"Build and manage custom Slack agents",STRIPE:"Connect to Stripe to enable seamless and secure payments for your apps",SNOWFLAKE:"Execute SQL queries on Snowflake data warehouses",SPOTIFY:"Access and manage Spotify playlists and libraries",TODOIST:"Read and write to your Todoist tasks and projects",TWILIO:"Send SMS messages and make voice calls using the Twilio API",YOUTUBE:"Upload and manage YouTube videos, channels, and analytics",ZENDESK:"Access Zendesk users and support tickets from Replit",FIGMA:"Allow Replit Agent to view and rapidly build your designs from Figma",CUSTOM_MCP:"Allows Replit Agent to access external MCP servers",ZOOM:"Access Zoom meetings, users, settings, and webinars with admin privileges",WORKATO:"Trigger Workato recipes and call Workato APIs",X:"Access X posts, users, and search using the X API v2 with pay-per-usage pricing",AZURE_FABRIC:"Access Azure Fabric workspaces and resources"},"DISCONNECTED_STATUSES",0,d,"MCP_CONNECTORS",0,l,"REPLIT_MANAGED_SERVICES",0,f,"VERSION_CONTROL_CONNECTORS",0,c,"isAppScopedConnector",0,e=>u.has(e),"isConnectionHealthy",0,e=>!d.has(e??""),"isHiddenUnlessConnected",0,e=>m.has(e),"isMCPConnector",0,e=>l.has(e),"toConnectorName",()=>p])},806114,e=>{e.v({modalContent:"EmbedModal-module__N_DY2W__modalContent",overlay:"EmbedModal-module__N_DY2W__overlay",overlayTopAligned:"EmbedModal-module__N_DY2W__overlayTopAligned"})},379846,e=>{"use strict";var t=e.i(276385),n=e.i(389959),o=e.i(486597),r=e.i(624071),s=e.i(342942),i=e.i(739261),a=e.i(781230),l=e.i(918542),c=e.i(613355),u=e.i(625484),d=e.i(806114);function m({isOpen:e,onRequestClose:m,children:p,maxWidth:f=800,maxHeight:g,centered:C=!0,zIndex:y,className:h,portalContainer:x}){let _=(0,a.useIsSSR)(),b=(0,n.useRef)(null),S=(0,o.useOverlayTriggerState)({isOpen:e,onOpenChange:e=>{e||m()}}),{modalProps:v,underlayProps:O}=(0,l.useModalOverlay)({isDismissable:!0,isKeyboardDismissDisabled:!1,shouldCloseOnInteractOutside:e=>!(e.tagName.toLowerCase().includes("1password")||e.tagName.toLowerCase().includes("com-1password")||e.hasAttribute("data-op-target")||e.hasAttribute("data-op-id")||Array.from(e.attributes).some(e=>e.name.startsWith("data-1p-"))||e.className?.toString().includes("op-")||null!==e.closest('[class*="1password"]')||null!==e.closest('[class*="op-"]')||null!==e.closest("[data-op-target]"))},S,b),{dialogProps:N}=(0,i.useDialog)({"aria-label":"Embed content"},b);return((0,n.useEffect)(()=>{let t=t=>{"Escape"===t.key&&e&&m()};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[e,m]),_||!e)?null:(0,t.jsx)(s.Overlay,{portalContainer:x??document.body,children:(0,t.jsx)("div",{...O,className:C?d.default.overlay:`${d.default.overlay} ${d.default.overlayTopAligned}`,style:{zIndex:y??c.DefaultModalZIndex},children:(0,t.jsx)("div",{...(0,r.mergeProps)(v,N),ref:b,className:`${d.default.modalContent} ${h||""}`,style:{maxWidth:f,maxHeight:g??"calc(100vh - 64px)"},children:(0,t.jsx)(u.View,{children:p})})})})}e.s(["EmbedModal",()=>m])},137074,e=>{"use strict";var t=e.i(929702),n=e.i(389959);function o(e){let o=(0,t.useCollator)({usage:"search",...e}),r=(0,n.useCallback)((e,t)=>0===t.length||(e=e.normalize("NFC"),t=t.normalize("NFC"),0===o.compare(e.slice(0,t.length),t)),[o]),s=(0,n.useCallback)((e,t)=>0===t.length||(e=e.normalize("NFC"),t=t.normalize("NFC"),0===o.compare(e.slice(-t.length),t)),[o]),i=(0,n.useCallback)((e,t)=>{if(0===t.length)return!0;e=e.normalize("NFC");let n=0,r=(t=t.normalize("NFC")).length;for(;n+r<=e.length;n++){let s=e.slice(n,n+r);if(0===o.compare(t,s))return!0}return!1},[o]);return(0,n.useMemo)(()=>({startsWith:r,endsWith:s,contains:i}),[r,s,i])}e.s(["useFilter",()=>o])},795581,e=>{"use strict";var t=e.i(276385),n=e.i(389959),o=e.i(624071),r=e.i(756841),s=e.i(248033),i=e.i(932200),a=e.i(783211),l=e.i(960178);let c=(0,n.forwardRef)(function({dataCy:e,...n},o){return(0,t.jsx)(r.TextField,{...(0,a.useView)({gap:4}),...n,"data-cy":e,ref:o})}),u=(0,n.forwardRef)(function({variant:e="small",color:n="dimmer",...r},a){let c=(0,i.useSlottedContext)(s.TextContext,"description");return(0,t.jsx)(l.Text,{...(0,o.mergeProps)(r,{variant:e,color:n},c),ref:a})});e.s(["TextField",0,c,"TextFieldDescription",0,u])},482640,e=>{e.v({background:"Switch-module__A3gb8a__background",button:"Switch-module__A3gb8a__button",label:"Switch-module__A3gb8a__label",svg:"Switch-module__A3gb8a__svg"})},112767,e=>{"use strict";e.i(221042);var t=e.i(276385),n=e.i(389959),o=e.i(497953),r=e.i(99906),s=e.i(138715),i=e.i(104394),a=e.i(330666),l=e.i(480028),c=e.i(960178),u=e.i(625484),d=e.i(482640);let m=u.SpecializedView.label;e.s(["Switch",0,({colorway:e="primary",dataCy:u,size:p="default",fillColor:f,focusRingColor:g,...C})=>{let y=l.colormap[e],h=(0,n.useRef)(null),x=(0,o.useToggleState)(C),{inputProps:_}=function(e,t,n){let{labelProps:o,inputProps:r,isSelected:s,isPressed:a,isDisabled:l,isReadOnly:c}=(0,i.useToggle)(e,t,n);return{labelProps:o,inputProps:{...r,role:"switch",checked:s},isSelected:s,isPressed:a,isDisabled:l,isReadOnly:c}}(C,x,h),{focusProps:b,isFocusVisible:S}=(0,r.useFocusRing)(C),{hoverProps:v,isHovered:O}=(0,s.useHover)(C),{isSelected:N}=x,E=C.isDisabled||!1,A=C.isReadOnly||!1,I=n.Children.count(C.children)>0;void 0!==C["aria-label"]||C["aria-labelledby"];let w="small"===p,T=w?26:38,R=w?16:24,j=w?8:12,k=w?12:16,B=T-1,P=R-1,M=T+2,D=R+2,U=j+1,$=(0,t.jsxs)("svg",{"aria-hidden":"true",...v,width:T,height:R,viewBox:`0 0 ${T} ${R}`,fill:"none",xmlns:"http://www.w3.org/2000/svg",overflow:S?"visible":"hidden",style:{cursor:E||A?"auto":"pointer",opacity:E?.4:1},className:d.default.svg,children:[(0,t.jsx)("rect",{x:"0",y:"0",width:T,height:R,rx:j,fill:f??(N?E||A?y.dimmer:y.default:l.tokens.interactiveBorder),className:d.default.background}),(0,t.jsx)("rect",{x:N?w?12:18:w?2:4,y:w?2:4,width:k,height:k,rx:w?6:8,fill:l.tokens.white,className:d.default.button}),(0,t.jsx)("rect",{x:"0.5",y:"0.5",width:B,height:P,rx:j,stroke:!O||E||A?"transparent":N?y.strongest:l.tokens.interactiveBorderHover,"data-switch-outline":!0}),(0,t.jsx)("rect",{x:"-1",y:"-1",stroke:S?g??(N?y.strongest:y.default):"transparent",width:M,height:D,rx:U,strokeWidth:"2"})]});return I?(0,t.jsxs)(m,{clsx:d.default.label,"data-cy":u,children:[(0,t.jsx)(a.VisuallyHidden,{children:(0,t.jsx)("input",{..._,...b,ref:h})}),$,(0,t.jsx)(c.Text,{multiline:!1,variant:w?"small":"text",children:C.children})]}):(0,t.jsxs)(m,{clsx:d.default.label,"data-cy":u,children:[(0,t.jsx)(a.VisuallyHidden,{children:(0,t.jsx)("input",{..._,...b,ref:h})}),$]})}],112767)},854760,e=>{"use strict";function t(e){return e.replace(/([a-z])([A-Z])/g,"$1_$2").split(/[_.:-]+/g).map(e=>e.toLowerCase()).filter(Boolean)}function n(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function o(e,o){let r=t(e);if(!o||0===r.length)return r.map(n).join(" ");let s=t(o).join(""),i="",a=0;for(let e of r){let t=i+e;if(!s.startsWith(t)||(i=t,a++,i===s))break}return i===s&&a<r.length?r.slice(a).map(n).join(" "):r.map(n).join(" ")}function r(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function s(e){return e.toLowerCase().replaceAll("_","-")}e.s(["formatConnectorName",()=>r,"formatOpenIntWebhookEventName",()=>o,"normalizeConnectorName",()=>s])},524445,e=>{"use strict";var t=e.i(365669);function n(){let e=t.publicEnv.OPENINT_URL;if(e)if(/^https?:\/\//.test(e))return e;else if(/^localhost(:\d+)?$/.test(e))return`http://${e}`;else return`https://${e}`;return"https://connectors.replit.com"}e.s(["useOpenintUrl",()=>n])}]);

//# debugId=7c4108c5-770e-fa17-a41d-453de8499f56
//# sourceMappingURL=12f957080a38b7b2.js.map