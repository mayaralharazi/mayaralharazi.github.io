;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="e5e08426-685c-64f1-5491-99e8c54ebce2")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,927196,845411,e=>{"use strict";var t=e.i(276385),r=e.i(389959),i=e.i(973245),a=e.i(613141);let l={},s=i.gql`
    subscription CurrentUserReplAgentStatuses {
  currentUserReplAgentStatuses {
    replId
    statusV2
    label
    updatedAt
    appImageUrl
  }
}
    `;e.i(242933);var n=e.i(279606);e.i(925218);var o=e.i(112077);let d=(0,r.createContext)(null);function u({children:e}){let i,u=(0,o.useCreateObservable)(new Map);i={...l,onData:({data:{data:e}})=>{(e=>{if(!e?.currentUserReplAgentStatuses)return;let t=new Map(e.currentUserReplAgentStatuses.map(e=>[e.replId,{statusV2:e.statusV2,label:e.label,updatedAt:e.updatedAt,appImageUrl:e.appImageUrl}]));u.set(t)})(e)}},a.useSubscription(s,i);let p=(0,r.useMemo)(()=>n.Observable.from(u),[u]);return(0,t.jsx)(d.Provider,{value:p,children:e})}function p(){let e=(0,r.useContext)(d);if(null===e)throw Error("useCurrentUserAgentStatus must be used within an AgentStatusProvider");return e}e.s(["AgentStatusContext",0,d,"AgentStatusProvider",()=>u,"default",()=>p],927196);var c=e.i(992785);function g(e){let t=p();return(0,r.useMemo)(()=>t.select(t=>{let r=t.get(e.id);return r?{status:r.statusV2,label:r.label,appImageUrl:r.appImageUrl}:e.latestAgentStatus?{status:e.latestAgentStatus.statusV2,label:e.latestAgentStatus.label,appImageUrl:e.latestAgentStatus.appImageUrl}:null},c.default),[t,e.id,e.latestAgentStatus])}e.s(["useReplAgentStatus",()=>g],845411)},976606,444876,498695,e=>{"use strict";var t=e.i(973245),r=e.i(564203),i=e.i(951262);let a={},l=t.gql`
    fragment AppCardApp on Repl {
  id
  title
  iconUrl
  url
  isCurrentUserStarred
  user {
    id
    ...OrgReplCreator
  }
  deploymentMetadata {
    ... on DeploymentMetadata {
      id
      url
      timeDeployed
    }
  }
}
    ${r.OrgReplCreatorFragmentDoc}`,s=t.gql`
    mutation UpdateStarredApps($input: UpdateStarredAppsInput!) {
  updateStarredApps(input: $input) {
    ... on Org {
      __typename
      id
      currentUserStarredApps {
        ... on StarredApp {
          id
          repl {
            id
            ...AppCardApp
          }
        }
      }
      currentUserRecentOrgApps {
        id
        ...AppCardApp
      }
    }
    ... on NotFoundError {
      message
    }
    ... on UserError {
      message
    }
    ... on UnauthorizedError {
      message
    }
    ... on Error {
      message
    }
  }
}
    ${l}`;function n(e){let t={...a,...e};return i.useMutation(s,t)}e.s(["AppCardAppFragmentDoc",0,l,"useUpdateStarredAppsMutation",()=>n],444876);let o=t.gql`
    fragment CurrentUserRecentApps on Org {
  currentUserRecentOrgApps {
    ... on Repl {
      id
      ...AppCardApp
    }
  }
}
    ${l}`;e.s(["CurrentUserRecentAppsFragmentDoc",0,o],498695);let d={},u=t.gql`
    mutation TrackOrgAppOpen($input: TrackOrgAppOpenInput!) {
  trackOrgAppOpen(input: $input) {
    ... on Org {
      id
      ...CurrentUserRecentApps
    }
  }
}
    ${o}`;var p=e.i(709485),c=e.i(968783),g=e.i(858248);e.s(["default",0,()=>{let e,{orgId:t,orgRole:r}=(0,c.useCurrentUserStoredOrgContext)(),[a]=(e={...d,...void 0},i.useMutation(u,e));return{trackAppOpen:e=>{t&&(a({variables:{input:{orgId:t,replId:e}}}),(0,g.track)(p.events.ORG_APP_VIEWED,{replId:e,context:(0,c.getOrgTrackingContext)({id:t}),orgRole:r}))}}}],976606)},564203,e=>{"use strict";var t=e.i(973245),r=e.i(304277);e.i(566901);let i={},a=t.gql`
    fragment OrgReplCreator on User {
  id
  displayName
  username
  image
}
    `,l=t.gql`
    query UserSelectorSearch($orgId: String!, $searchInput: OrgMembersInput!) {
  currentUser {
    __typename
    id
    org(orgId: $orgId) {
      __typename
      ... on Org {
        id
        members(input: $searchInput) {
          __typename
          ... on Error {
            message
          }
          ... on OrgMemberConnection {
            __typename
            items {
              member {
                id
                user {
                  id
                  ...OrgReplCreator
                }
              }
              type
            }
          }
        }
      }
    }
  }
}
    ${a}`;function s(e){let t={...i,...e};return r.useQuery(l,t)}let n=t.gql`
    query UserSelectorGetUser($id: Int!) {
  user(id: $id) {
    id
    ...OrgReplCreator
  }
}
    ${a}`;e.s(["OrgReplCreatorFragmentDoc",0,a,"UserSelectorGetUserDocument",0,n,"useUserSelectorSearchQuery",()=>s])},651739,e=>{"use strict";var t=e.i(973245),r=e.i(951262);let i={},a=t.gql`
    fragment DeleteReplDialogRepl on Repl {
  id
  title
}
    `,l=t.gql`
    mutation DeleteReplDialogReplDelete($id: String!) {
  deleteRepl(id: $id) {
    id
  }
}
    `;function s(e){let t={...i,...e};return r.useMutation(l,t)}e.s(["DeleteReplDialogReplFragmentDoc",0,a,"useDeleteReplDialogReplDeleteMutation",()=>s])},997931,e=>{"use strict";var t=e.i(973245),r=e.i(651739),i=e.i(312087),a=e.i(532049),l=e.i(17009),s=e.i(951262);let n={},o=t.gql`
    fragment ComponentsReplActionsFeaturedRepl on Repl {
  id
  isPrivate
  isFeaturedRepl
  publicForkCount
  timeUpdated
  org {
    id
  }
}
    `,d=t.gql`
    fragment ComponentsReplActions on Repl {
  id
  url
  title
  slug
  user {
    id
    username
  }
  ...DeleteReplDialogRepl
  ...EditReplFormRepl
  ...ComponentsReplActionsFeaturedRepl
  ...TransferReplToOrgDialogRepl
  ...LeaveMultiplayerReplDialogRepl
  owner {
    __typename
    ... on Team {
      id
    }
    ... on User {
      id
    }
  }
  org {
    id
  }
  isStarred
  isStackTemplate
  authorizations {
    deleteRepl {
      isAuthorized
    }
    editFolder {
      isAuthorized
    }
    fork {
      isAuthorized
    }
    removeSelf {
      isAuthorized
    }
    star {
      isAuthorized
    }
  }
}
    ${r.DeleteReplDialogReplFragmentDoc}
${i.EditReplFormReplFragmentDoc}
${o}
${a.TransferReplToOrgDialogReplFragmentDoc}
${l.LeaveMultiplayerReplDialogReplFragmentDoc}`,u=t.gql`
    mutation ReplActionsUpdateRepl($input: UpdateReplInput!) {
  updateRepl(input: $input) {
    repl {
      id
      isStarred
    }
  }
}
    `;function p(e){let t={...n,...e};return s.useMutation(u,t)}let c=t.gql`
    mutation AddOrgStackTemplate($orgId: String!, $replId: String!, $order: Float) {
  addOrgStackTemplate(orgId: $orgId, replId: $replId, order: $order) {
    success
    message
    repl {
      id
      isStackTemplate
    }
  }
}
    `;function g(e){let t={...n,...e};return s.useMutation(c,t)}let m=t.gql`
    mutation RemoveOrgStackTemplate($orgId: String!, $replId: String!) {
  removeOrgStackTemplate(orgId: $orgId, replId: $replId) {
    success
    message
    repl {
      id
      isStackTemplate
    }
  }
}
    `;function h(e){let t={...n,...e};return s.useMutation(m,t)}let f=t.gql`
    mutation ReplActionsMoveToFolder($replIds: [String!]!, $folderIds: [String!]!, $destFolderId: String!) {
  moveItemsToFolder(
    replIds: $replIds
    folderIds: $folderIds
    destFolderId: $destFolderId
  ) {
    ... on Repl {
      __typename
      id
      folderId
    }
  }
}
    `;function x(e){let t={...n,...e};return s.useMutation(f,t)}e.s(["ComponentsReplActionsFragmentDoc",0,d,"useAddOrgStackTemplateMutation",()=>g,"useRemoveOrgStackTemplateMutation",()=>h,"useReplActionsMoveToFolderMutation",()=>x,"useReplActionsUpdateReplMutation",()=>p])},26124,e=>{"use strict";var t=e.i(276385),r=e.i(651739),i=e.i(222342),a=e.i(557862);function l({repl:e,onDeleteRequested:l,onDone:s}){let{showConfirm:n,showError:o}=(0,i.default)(),[d,u]=(0,r.useDeleteReplDialogReplDeleteMutation)({onCompleted:e=>{"Repl"===e.deleteRepl.__typename?(n("App scheduled for deletion"),l?.(),s?.()):o("Something went wrong")},onError:e=>o(e.message),variables:{id:e.id},update:(e,t)=>{t.data?.deleteRepl.id&&(e.evict({id:e.identify(t.data.deleteRepl)}),e.gc())}});return(0,t.jsx)(a.default,{name:e.title,entityType:"App",isDeleting:u.loading,delete:()=>{u.loading||d()},hideModal:()=>s?.()})}e.s(["DeleteReplDialog",()=>l])},236379,49578,e=>{"use strict";var t=e.i(276385),r=e.i(389959),i=e.i(312087),a=e.i(183035),l=e.i(399245),s=e.i(269848),n=e.i(995691),o=e.i(416298),d=e.i(322823),u=e.i(222342),p=e.i(200527),c=e.i(973245),g=e.i(951262);let m={},h=c.gql`
    mutation ReplCoverImageUpdate($input: UpdateReplInput!) {
  updateRepl(input: $input) {
    repl {
      id
      imageUrl
    }
  }
}
    `;var f=e.i(349597),x=e.i(422025),v=e.i(971072),j=e.i(473497),R=e.i(446530),b=e.i(613355),S=e.i(428596),y=e.i(140487),T=e.i(965710),k=e.i(960178),C=e.i(751273),A=e.i(625484);let I=(0,R.cssRecord)({button:[b.rcss.width("100%")]}),_=({replId:e,authz:i,initialImageUrl:a,originImageUrl:l})=>{var s;let n,{showError:o,showConfirm:d}=(0,u.default)(),p=(0,S.useIdSeed)()("cover-image"),[c,R]=(0,r.useState)(a),[b,{loading:_}]=(s={onError:()=>{o("Something unexpected happened")},onCompleted:e=>{e.updateRepl.repl&&d("App cover image updated successfully")}},n={...m,...s},g.useMutation(h,n)),w=c!==l,D=(0,x.default)({onUpload:async({url:t})=>{await b({variables:{input:{id:e,imageUrl:t}}}),R(t)},onUploadPreview:()=>{d("Uploading repl cover image")},onError:e=>o(e.message)});(0,r.useEffect)(()=>{R(a)},[a]);let O=async()=>{await b({variables:{input:{id:e,imageUrl:null}}})};return(0,t.jsxs)(A.View,{gap:4,children:[(0,t.jsx)("label",{htmlFor:p,children:(0,t.jsx)(k.Text,{variant:"small",color:"dimmer",multiline:!1,children:"Cover image"})}),(0,t.jsxs)(A.View,{row:!0,gap:16,align:"center",children:[(0,t.jsx)(j.default,{alt:"",width:64,height:64,imageUrl:c}),(0,t.jsxs)(A.View,{grow:!0,shrink:!0,row:!0,gap:16,children:[(0,t.jsx)(A.View,{grow:!0,shrink:!0,basis:0,children:(0,t.jsx)(T.FileUploadInput,{onSelect:e=>{e&&e.length>0&&D.uploadImage(e[0],f.ImageUploadContexts.ReplCoverImage)},acceptedFileTypes:v.ACCEPTABLE_IMAGE_UPLOAD_TYPES,dropZoneDisabled:!0,children:(0,t.jsx)(C.Tooltip,{tooltip:"Not allowed to update image",isDisabled:i.isAuthorized,children:(0,t.jsx)(y.Button,{"aria-labelledby":p,text:w?"Replace image":"Upload image",disabled:!i.isAuthorized,css:I.button,size:"small",loading:_})})})}),w?(0,t.jsx)(A.View,{grow:!0,shrink:!0,basis:0,children:(0,t.jsx)(y.Button,{text:"Reset",size:"small",disabled:!i.isAuthorized,onClick:O,css:I.button,loading:_})}):null]})]})]})};e.s(["default",0,_],49578);var w=e.i(445016),D=e.i(420802),O=e.i(721321),U=e.i(607278),F=e.i(836224);let M=e=>0===e.length?{message:"Title cannot be blank"}:e.length>60?{message:"Title cannot be greater than 60 characters"}:void 0,P=e=>{if(e.length>D.REPL_DESCRIPTION_MAX_LENGTH)return{message:`Description cannot be greater than ${D.REPL_DESCRIPTION_MAX_LENGTH} characters`}},E=(0,R.cssRecord)({inputLabel:[b.rcss.flex.row,b.rcss.justify.spaceBetween,b.rcss.align.end],descriptionInput:[b.rcss.minHeight(96),b.rcss.maxHeight(256),{resize:"vertical"}],inputErrorIcon:[b.rcss.color.accentNegativeStronger],inputErrorMessage:[b.rcss.flex.growAndShrink(1),b.rcss.color.accentNegativeStronger]});function z({error:e,id:r}){return e?(0,t.jsxs)(A.View,{id:r,row:!0,gap:4,align:"center",children:[(0,t.jsx)(o.default,{css:E.inputErrorIcon}),(0,t.jsx)(k.Text,{css:E.inputErrorMessage,children:e.message})]}):null}function $({repl:e,onDone:l}){let{showConfirm:n,showError:o}=(0,u.default)(),[p,{loading:c}]=(0,i.useEditReplFormEditMutation)({onCompleted:()=>{n("App edited"),l()},onError:e=>{o(e.message)}}),[g,{loading:m}]=(0,i.useEditReplFormEditMutation)({onCompleted:()=>{n("Updated privacy")},onError:e=>{o(e.message)}}),h=e.org?.type!=="team"&&e.authorizations.editVisibility.isAuthorized,f=(0,d.useFormField)(e.title,M),x=(0,d.useFormField)(e.description??"",P),v=(0,r.useId)(),j=(0,r.useId)(),R=(0,r.useId)(),b=(0,r.useId)(),S=!!f.error||!!x.error,T=e.owner?.__typename==="Team",C=async()=>{if(m)return;let t=!e.isPrivate;if(e.authorizations.editVisibility.isAuthorized||!1===t)return g({variables:{input:{id:e.id,isPrivate:!e.isPrivate}},optimisticResponse:{__typename:"RootMutationType",updateRepl:{__typename:"UpdateReplPayload",repl:{...e,isPrivate:!e.isPrivate}}}});o(e.authorizations.editVisibility.message)};return(0,t.jsxs)(A.View,{gap:32,children:[(0,t.jsxs)(A.View,{tag:"form",gap:24,onSubmit:t=>{t.preventDefault(),c||null==f.validate()&&null==x.validate()&&p({variables:{input:{id:e.id,title:f.value,description:x.value}}})},children:[(0,t.jsx)(k.Header,{variant:"headerDefault",level:2,children:"Edit App"}),(0,t.jsxs)(A.View,{gap:4,children:[(0,t.jsxs)(A.View,{css:E.inputLabel,children:[(0,t.jsx)("label",{htmlFor:v,children:(0,t.jsx)(k.Text,{variant:"small",color:"dimmer",multiline:!1,children:"Name"})}),(0,t.jsx)(F.default,{maxLength:60,value:f.value,hideLabel:!0})]}),(0,t.jsx)(U.Input,{style:{cursor:e.authorizations.editMetadata.isAuthorized?"auto":"not-allowed"},disabled:!e.authorizations.editMetadata.isAuthorized,maxLength:60,value:f.value,onChange:e=>f.setValue(e.target.value),spellCheck:!1,id:v,"aria-describedby":j}),(0,t.jsx)(z,{id:j,error:f.error})]}),(0,t.jsxs)(A.View,{gap:4,children:[(0,t.jsxs)(A.View,{css:E.inputLabel,children:[(0,t.jsx)("label",{htmlFor:R,children:(0,t.jsx)(k.Text,{variant:"small",color:"dimmer",multiline:!1,children:"Description"})}),(0,t.jsx)(F.default,{maxLength:D.REPL_DESCRIPTION_MAX_LENGTH,value:x.value,hideLabel:!0})]}),(0,t.jsx)(U.MultiLineInput,{disabled:!e.authorizations.editMetadata.isAuthorized,maxLength:D.REPL_DESCRIPTION_MAX_LENGTH,value:x.value,onChange:e=>x.setValue(e.target.value),placeholder:"What does this App do?",css:E.descriptionInput,id:R,"aria-describedby":b}),(0,t.jsx)(z,{id:b,error:x.error})]}),(0,t.jsxs)(A.View,{row:!0,gap:12,justify:"end",children:[(0,t.jsx)(y.Button,{type:"button",text:"Cancel",onClick:l}),(0,t.jsx)(y.Button,{type:"submit",iconLeft:c?(0,t.jsx)(s.default,{}):(0,t.jsx)(a.default,{}),disabled:c||S||!e.authorizations.editMetadata.isAuthorized,text:"Save",colorway:"primary"})]})]}),(0,t.jsxs)(A.View,{gap:16,children:[(0,t.jsx)(w.default,{replId:e.id,authz:e.authorizations.editMetadata,initialIconUrl:e.iconUrl,originIconUrl:e.templateInfo?.iconUrl}),(0,t.jsx)(_,{replId:e.id,authz:e.authorizations.editMetadata,initialImageUrl:e.imageUrl??e.templateInfo?.imageUrl,originImageUrl:e.templateInfo?.imageUrl})]}),h?(0,t.jsx)(L,{isPrivate:e.isPrivate,onChange:C,isTeam:T}):null]})}function L(e){let r=(0,S.useIdSeed)();return(0,t.jsxs)(A.View,{gap:8,children:[(0,t.jsxs)(O.ButtonGroup,{tag:"fieldset",name:r("privacy"),value:e.isPrivate.toString(),onChange:t=>{e.onChange("true"===t)},row:!0,primary:!0,stretch:!0,children:[(0,t.jsx)(O.ButtonGroupItem,{id:r("false"),value:"false",text:"Public",icon:(0,t.jsx)(l.default,{})}),(0,t.jsx)(O.ButtonGroupItem,{id:r("true"),value:"true",text:"Private",icon:(0,t.jsx)(n.default,{})})]}),(0,t.jsx)(k.Text,{variant:"small",color:"dimmest",children:(0,p.default)(e.isPrivate,e.isTeam)})]})}e.s(["EditReplForm",()=>$,"PrivacyToggle",()=>L],236379)},851231,e=>{"use strict";var t=e.i(276385),r=e.i(368964),i=e.i(399245),a=e.i(414761),l=e.i(976606),s=e.i(848969);function n({deployment:e,icon:n=(0,t.jsx)(i.default,{})}){let{trackAppOpen:o}=(0,l.default)(),d=(0,a.useDeploymentLink)(e);return e.repl.config.isAgentStack?(0,t.jsx)(s.IconButtonLink,{href:d.href,alt:"Automation: no accessible url",disabled:!0,children:n}):e.currentBuild.provider===r.HostingBuildProvider.Cron?(0,t.jsx)(s.IconButtonLink,{href:d.href,alt:"Scheduled Jobs have no accessible url",disabled:!0,children:n}):(0,t.jsx)(s.IconButtonLink,{onClick:()=>{o(e.repl.id)},href:d.href,alt:"Go to site",target:"_blank",children:n})}e.s(["DeploymentSiteLink",()=>n])},2343,e=>{"use strict";var t=e.i(276385),r=e.i(327516),i=e.i(368964),a=e.i(182409),l=e.i(399245),s=e.i(995691),n=e.i(379334),o=e.i(928838),d=e.i(446530),u=e.i(613355),p=e.i(960178),c=e.i(751273),g=e.i(625484);let m=(0,d.cssRecord)({dim:[u.rcss.color.foregroundDimmer]});function h({deployment:e,isPrivate:d=!1,isOrg:u=!1,small:h=!0}){if(!e)if(d)return(0,t.jsx)(c.Tooltip,{tooltip:u?"Internal to your organization":"Only you can see and edit this App",children:(0,t.jsxs)(g.View,{css:m.dim,row:!0,gap:4,align:"center",children:[(0,t.jsx)(s.default,{size:h?12:16}),(0,t.jsx)(p.Text,{variant:h?"small":void 0,multiline:!1,children:"Private"})]})});else return(0,t.jsx)(c.Tooltip,{tooltip:"Anyone on Replit can view and remix this App",children:(0,t.jsxs)(g.View,{css:m.dim,row:!0,gap:4,align:"center",children:[(0,t.jsx)(l.default,{size:h?12:16}),(0,t.jsx)(p.Text,{variant:h?"small":void 0,multiline:!1,children:"Public"})]})});let{currentBuild:f}=e,{title:x,color:v}=o.buildStatuses[f.status],j=(0,r.default)(new Date(f.timeCreated),Date.now(),{addSuffix:!0}),R=`Published ${j} by ${f.user?.displayName??n.DELETED_USER_DISPLAY_NAME}`,b=f.status===i.HostingBuildStatus.Success?"Published":x;return(0,t.jsx)(c.Tooltip,{tooltip:R,children:(0,t.jsxs)(g.View,{row:!0,gap:4,align:"center",children:[(0,t.jsx)(a.default,{size:h?12:16,color:v}),(0,t.jsx)(p.Text,{color:"dimmer",variant:h?"small":void 0,multiline:!1,children:b})]})})}e.s(["StatusBadge",()=>h])},52715,e=>{"use strict";var t=e.i(276385),r=e.i(17009),i=e.i(122400),a=e.i(452412),l=e.i(222342),s=e.i(960178);function n({repl:e,onLeave:n,onCancel:o}){let{showConfirm:d,showError:u}=(0,l.default)(),[p,{loading:c}]=(0,r.useLeaveMultiplayerReplDialogRemoveMutation)({variables:{id:e.id},refetchQueries:["CurrentUserRepls"],onCompleted(){d("App removed"),n()},onError(e){u(e.message)}});return(0,t.jsx)(a.default,{title:"Leave multiplayer App",confirmLabel:"Yes, leave this App",isDestructive:!0,loading:c,confirmIcon:(0,t.jsx)(i.default,{}),onCancel:o,onConfirm:()=>{c||p()},children:(0,t.jsxs)(s.Text,{children:["Are you sure you want to leave this multiplayer App (",e.title,")? You will no longer be able to access its content."]})})}e.s(["LeaveMultiplayerReplDialog",()=>n])},532195,e=>{"use strict";var t=e.i(276385),r=e.i(750854),i=e.i(389959),a=e.i(368964),l=e.i(973245),s=e.i(304277);e.i(566901);let n={},o=l.gql`
    fragment ReplsDashboardMoveItemReplFolder on ReplFolder {
  id
  pathnames
  folderType
  name
  parentId
  timeCreated
}
    `,d=l.gql`
    query ReplsDashboardMoveItemModalFolder($id: String!, $teamId: Int) {
  currentUser {
    id
    replFolder(id: $id, teamId: $teamId) {
      id
      folders {
        id
        ...ReplsDashboardMoveItemReplFolder
      }
    }
  }
}
    ${o}`;var u=e.i(657929),p=e.i(302905),c=e.i(143524),g=e.i(269848),m=e.i(46654),h=e.i(967629),f=e.i(480028),x=e.i(446530),v=e.i(613355),j=e.i(140487),R=e.i(960178),b=e.i(625484);let S={__typename:"ReplFolder",id:"__ROOT_ID__",name:"(home)/",pathnames:["(home)/"],canEdit:!1,timeCreated:null},y=(0,x.cssRecord)({folderPicker:[v.rcss.height(250),v.rcss.overflow("auto"),v.rcss.borderRadius(4),v.rcss.border({color:f.tokens.outlineDimmest})]}),T=(0,h.css)({"&":{height:"40px",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 10px"},"&:hover":{cursor:"pointer",backgroundColor:f.tokens.backgroundRoot},".small-folder-icon-container":{height:"20px",width:"20px",display:"flex",justifyContent:"center",alignItems:"center"},".small-back-folder-icon":{transform:"rotate(90deg)",width:"17px"},".small-folder-icon":{width:"20px"},".small-folder-title":{display:"flex",alignItems:"center"},".small-folder-title a":{marginLeft:"20px",borderBottom:"none",color:"inherit"},".small-folder-time":{fontSize:"12px",color:f.tokens.foregroundDimmer},"&.is-selected:hover,.is-selected":{backgroundColor:f.tokens.accentPrimaryDefault,color:f.tokens.backgroundHigher},".is-selected .small-folder-time":{color:"inherit"}}),k=({folder:e,onSelect:r,onNavigate:i,isSelected:a,isBack:l=!1})=>(0,t.jsxs)("div",{clsx:[{"is-selected":a}],onClick:()=>{r&&r(e)},css:T,children:[(0,t.jsxs)("div",{className:"small-folder-title",children:[(0,t.jsx)("div",{className:"small-folder-icon-container",children:l?(0,t.jsx)("div",{className:"small-back-folder-icon",children:(0,t.jsx)(u.default,{})}):(0,t.jsx)("div",{className:"small-folder-icon",children:(0,t.jsx)(p.default,{})})}),(0,t.jsx)("a",{onClick:t=>i?i(e,t):()=>{},children:e.name})]}),(0,t.jsx)("div",{className:"small-folder-time",children:e.timeCreated?(0,m.ago)(e.timeCreated):""})]});e.s(["default",0,e=>{var l;let o,{item:u,isRepl:p,teamId:m,hideModal:h}=e,f=/\/@([^/]*)/.exec(r.default.asPath||""),x=f?f[1]:null,v=m&&x?{__typename:"ReplFolder",id:`__TEAM__${m}__`,name:`@${x}`,pathnames:[`@${x}`],canEdit:!1,timeCreated:null}:S,[T,C]=(0,i.useState)(null),[A,I]=(0,i.useState)(v),[_,w]=(0,i.useState)([]),{data:D,loading:O}=(l={fetchPolicy:"cache-and-network",variables:{id:A.id,teamId:m},ssr:!1,notifyOnNetworkStatusChange:!0},o={...n,...l},s.useQuery(d,o)),U=e=>{e===T?C(null):C(e)},F=(e,t)=>{t.stopPropagation(),e.pathnames.length>A.pathnames.length?_.push(A):_.pop(),I(e),C(e),w(_)},M=async()=>{let t=[],r=[];p?t.push(u.id):r.push(u.id),e.onSubmit({variables:{destFolderId:T?T.id:"",replIds:t,folderIds:r,teamId:m}}),h()},P=(D?.currentUser?.replFolder?.folders||[]).filter(e=>("Unnamed"!==e.name||null!==e.parentId)&&e.folderType===a.ReplFolderTypes.Default&&(!!p||e.id!==u.id)).map(e=>({...e,pathnames:e.pathnames.slice(1)})),E=_[_.length-1]||v,z=T?T.id:"",$="name"in u?u.name:u.title;return(0,t.jsxs)(b.View,{gap:8,tag:"form",onSubmit:e=>{e.preventDefault(),M()},children:[(0,t.jsxs)(R.Text,{children:["Move ",$," to:"]}),(0,t.jsxs)(b.View,{css:y.folderPicker,children:[A.pathnames&&A.pathnames.join()!==v.pathnames.join()?(0,t.jsx)(k,{folder:{...E,name:"(up one level)"},isBack:!0,onNavigate:F,isSelected:z===E.id}):null,P?P.map(e=>(0,t.jsx)(k,{folder:e,onSelect:U,onNavigate:F,isSelected:e.id===z},`move-folder-${e.id}`)):null]}),(0,t.jsxs)(R.Text,{children:["Moving to:"," ",T?T.pathnames[T.pathnames.length-1]:A.pathnames[A.pathnames.length-1]||"(home)/"]}),(0,t.jsxs)(b.View,{row:!0,gap:8,justify:"end",children:[O?null:(0,t.jsx)(j.Button,{text:"Cancel",onClick:()=>h()}),(0,t.jsx)(j.Button,{colorway:"primary",iconLeft:O?(0,t.jsx)(g.default,{}):(0,t.jsx)(c.default,{}),disabled:O,text:p?"Move App":"Move folder",type:"submit"})]})]})}],532195)},847253,e=>{"use strict";var t=e.i(276385),r=e.i(389959),i=e.i(368964),a=e.i(973245),l=e.i(951262);let s={},n=a.gql`
    mutation TransferReplWithinOrgDialogTransfer($input: TransferReplWithinOrgInput!) {
  transferReplWithinOrg(input: $input) {
    ... on Repl {
      id
      user {
        id
      }
    }
    ... on NotFoundError {
      message
    }
    ... on UnauthorizedError {
      message
    }
    ... on UserError {
      message
    }
  }
}
    `;var o=e.i(269848),d=e.i(612343),u=e.i(222342),p=e.i(306694),c=e.i(140487),g=e.i(960178),m=e.i(625484);function h({repl:e,orgId:a,hideModal:h}){let f,x=`group-search-${(0,r.useId)()}`,[v,j]=(0,r.useState)(),[R,b]=(0,r.useState)(""),{showError:S,showConfirm:y}=(0,u.default)(),[T,{loading:k}]=(f={...s,...void 0},l.useMutation(n,f)),C=async()=>{if(!v)return;let t=await T({variables:{input:{replId:e.id,newOwnerOrgGroupId:v.id}}});t.data?.transferReplWithinOrg.__typename==="Repl"?(y("Repl transferred successfully"),h()):S(t.data?.transferReplWithinOrg.message)};return(0,t.jsxs)(m.View,{gap:24,children:[(0,t.jsxs)(g.Header,{variant:"subheadDefault",level:2,children:["Transfer ownership of ",e.title]}),(0,t.jsxs)(m.View,{gap:8,children:[(0,t.jsxs)(g.Text,{children:["Select another member of your workspace to transfer to. The selected user will become the primary owner of ",e.title," and will be displayed as the app creator in your workspace's app directory."]}),(0,t.jsx)(m.View,{grow:!0,shrink:!0,children:(0,t.jsx)(p.default,{inputId:x,orgId:a,types:[i.OrgGroupType.SystemIndividual],selectedGroups:v?[v]:[],value:R,setValue:b,onSelect:e=>{j(e),b(e.name)},onClear:()=>j(void 0),placeholder:"Select a user"})})]}),(0,t.jsxs)(m.View,{row:!0,gap:12,justify:"end",children:[(0,t.jsx)(c.Button,{text:"Cancel",onClick:h}),(0,t.jsx)(c.Button,{dataCy:"transfer-repl-dialog-confirm-button",disabled:k||!v,iconLeft:k?(0,t.jsx)(o.default,{}):(0,t.jsx)(d.default,{}),onClick:C,text:"Transfer app",colorway:"primary"})]})]})}e.s(["TransferReplWithinOrgDialog",()=>h],847253)},972777,e=>{"use strict";var t=e.i(276385),r=e.i(389959),i=e.i(532049),a=e.i(269848),l=e.i(450265),s=e.i(416298),n=e.i(222342),o=e.i(664152),d=e.i(714165),u=e.i(140487),p=e.i(85742),c=e.i(12034),g=e.i(396776),m=e.i(960178),h=e.i(625484);function f({repl:e,onDone:f}){let x=`org-select-${(0,r.useId)()}`,[v,j]=(0,r.useState)(""),{showError:R,showConfirm:b}=(0,n.default)(),{data:S,loading:y,error:T}=(0,i.useTransferReplToOrgDialogOrgsQuery)(),[k,{loading:C}]=(0,i.useTransferReplToOrgDialogTransferMutation)(),A=S?.currentUser?.orgs?.__typename==="CurrentUserOrganizationConnection"?S.currentUser.orgs.items.map(e=>({id:e.org.id,name:e.org.name,slug:e.org.slug,image:e.org.image??null})):[],I=A.find(e=>e.id===v),_=async()=>{if(!I)return void R("Please select a workspace");try{let t=await k({variables:{orgId:I.id,replIds:[e.id]}}),r=t.data?.transferReplToOrganization;r?.__typename==="TransferReplToOrganizationSuccess"?(b(`Successfully started transfer of "${e.title}" to ${I.name}.`),f()):r?.__typename==="UserError"||r?.__typename==="TooManyRequestsError"?R(r.message||"Failed to transfer repl"):R("Unexpected response from server")}catch(e){R("Failed to transfer repl. Please try again."),o.logger.error("Replit TransferReplToOrgDialog error:",e)}},w=()=>{f()};if(y)return(0,t.jsxs)(h.View,{gap:24,align:"center",children:[(0,t.jsxs)(m.Header,{variant:"subheadDefault",level:2,children:["Transfer ",e.title," to Organization"]}),(0,t.jsx)(a.default,{})]});if(T||S?.currentUser?.orgs?.__typename!=="CurrentUserOrganizationConnection"&&S?.currentUser?.orgs?.__typename){let r=T?.message||(S?.currentUser?.orgs?.__typename==="NotFoundError"||S?.currentUser?.orgs?.__typename==="UserError"?S.currentUser.orgs.message:"Failed to load workspaces");return(0,t.jsxs)(h.View,{gap:24,children:[(0,t.jsxs)(m.Header,{variant:"subheadDefault",level:2,children:["Transfer ",e.title," to Organization"]}),(0,t.jsx)(m.Text,{children:r}),(0,t.jsx)(h.View,{row:!0,gap:12,justify:"end",children:(0,t.jsx)(u.Button,{text:"Close",onClick:w})})]})}return 0===A.length?(0,t.jsxs)(h.View,{gap:24,children:[(0,t.jsxs)(m.Header,{variant:"subheadDefault",level:2,children:["Transfer ",e.title," to Organization"]}),(0,t.jsx)(m.Text,{children:"You don't belong to any organizations. You need to be a member of an organization to transfer repls to it."}),(0,t.jsx)(h.View,{row:!0,gap:12,justify:"end",children:(0,t.jsx)(u.Button,{text:"Close",onClick:w})})]}):(0,t.jsxs)(h.View,{gap:24,children:[(0,t.jsxs)(m.Header,{variant:"subheadDefault",level:2,children:["Transfer ",e.title," to Organization"]}),(0,t.jsxs)(h.View,{gap:8,children:[(0,t.jsxs)(m.Text,{children:['Select an organization to transfer "',e.title,'" to. This action is irreversible and the app will no longer belong to you.']}),(0,t.jsx)(g.StatusBanner,{colorway:"warning",text:"Linked account secrets will not be transferred. You'll need to re-link them in the destination workspace.",icon:(0,t.jsx)(s.default,{})}),(0,t.jsxs)(h.View,{gap:4,children:[(0,t.jsx)("label",{htmlFor:x,children:(0,t.jsx)(m.Text,{color:"dimmer",variant:"small",children:"Destination Organization"})}),(0,t.jsx)(c.Select,{id:x,"aria-label":"Select workspace",placeholder:"Choose a workspace...",selectedKey:v,onSelectionChange:e=>j(e),isDisabled:C,children:A.map(e=>(0,t.jsx)(p.ListBoxItem,{id:e.id,label:`${e.name} (@${e.slug})`,icon:(0,t.jsx)(d.Avatar,{src:e.image,size:16,username:e.name})},e.id))})]}),(0,t.jsx)(m.Text,{color:"dimmer",variant:"small",children:"The transfer occurs in the background and may take some time to complete."})]}),(0,t.jsxs)(h.View,{row:!0,gap:12,justify:"end",children:[(0,t.jsx)(u.Button,{text:"Cancel",onClick:w,disabled:C}),(0,t.jsx)(u.Button,{dataCy:"transfer-repl-to-org-dialog-confirm-button",disabled:C||!v,iconLeft:C?(0,t.jsx)(a.default,{}):(0,t.jsx)(l.default,{}),onClick:_,text:"Transfer to Workspace",colorway:"primary"})]})]})}e.s(["TransferReplToOrgDialog",()=>f])},732955,e=>{"use strict";var t,r,i=e.i(276385),a=e.i(389959),l=e.i(997931),s=e.i(368964),n=e.i(122400),o=e.i(204977),d=e.i(712771),u=e.i(143524),p=e.i(75916),c=e.i(828322),g=e.i(869472),m=e.i(898039),h=e.i(908628),f=e.i(491194),x=e.i(612343),v=e.i(450265),j=e.i(47503),R=e.i(968783),b=e.i(222342),S=e.i(187505),y=e.i(773240),T=e.i(26124),k=e.i(236379),C=e.i(52715),A=e.i(532195),I=e.i(847253),_=e.i(136540),w=e.i(119274),D=e.i(739521),O=e.i(464092),U=e.i(185591),F=e.i(972777),M=((t=M||{}).CoverPage="CoverPage",t.Delete="Delete",t.Edit="Edit",t.Leave="Leave",t.TransferWithinOrg="TransferWithinOrg",t.TransferPersonalToOrg="TransferPersonalToOrg",t.MoveToFolder="MoveToFolder",t.Fork="Fork",t.Feature="Feature",t.Pin="Pin",t.Unpin="Unpin",t.MarkAsStack="MarkAsStack",t.UnmarkAsStack="UnmarkAsStack",t),P=((r=P||{}).Delete="Delete",r.Edit="Edit",r.Fork="Fork",r.Feature="Feature",r.Leave="Leave",r.TransferWithinOrg="TransferWithinOrg",r.TransferPersonalToOrg="TransferPersonalToOrg",r.MoveToFolder="MoveToFolder",r.MarkAsStack="MarkAsStack",r.UnmarkAsStack="UnmarkAsStack",r);function E({repl:e,deleteAction:t}){let{trackClick:r}=(0,S.useTrackClick)(),[M,P]=(0,a.useState)(null),E=(0,j.useCurrentUserId)(),{fork:z,isForking:$}=(0,O.useForkContext)(),{orgRole:L}=(0,R.useCurrentUserStoredOrgContext)(),{showNotice:V,showError:q}=(0,b.default)(),B=(0,R.useIsCurrentOrgEnterprise)(),[N,{loading:G}]=(0,l.useReplActionsUpdateReplMutation)(),[W]=(0,l.useReplActionsMoveToFolderMutation)(),[H,{loading:Y}]=(0,l.useAddOrgStackTemplateMutation)({onCompleted:e=>{e.addOrgStackTemplate?.success?V(e.addOrgStackTemplate.message||"Successfully pinned template"):q(e.addOrgStackTemplate?.message||"Failed to pin template")},onError:e=>{q(`Error pinning template: ${e.message}`)}}),[Q,{loading:X}]=(0,l.useRemoveOrgStackTemplateMutation)({onCompleted:e=>{e.removeOrgStackTemplate?.success?V(e.removeOrgStackTemplate?.message||"Successfully removed pinned template"):q(e.removeOrgStackTemplate?.message||"Failed to remove pinned template")},onError:e=>{q(`Error removing pinned template: ${e.message}`)}}),K=e.authorizations,J=e.org?.__typename==="Org",Z=e.owner?.id===E,ee=L===s.SystemOrgGroupType.SystemAdmins,et=K.editFolder.isAuthorized,er=J&&B&&ee,ei=t?.type==="hidden",ea=t?.type==="visible"?t.onDeleteRequested:void 0,el=[{label:"Cover page",value:"CoverPage",link:(0,U.replViewLinkProps)(e),icon:(0,i.jsx)(d.default,{})},...K.star.isAuthorized&&e.isStarred?[{label:"Unpin from top",value:"Unpin",icon:(0,i.jsx)(g.default,{})}]:[],...K.star.isAuthorized&&!e.isStarred?[{label:"Pin to top",value:"Pin",icon:(0,i.jsx)(g.default,{})}]:[],...K.editMetadata.isAuthorized?[{label:"Edit details",value:"Edit",icon:(0,i.jsx)(o.default,{})}]:[],...J&&(Z||ee)?[{label:"Transfer Owner",value:"TransferWithinOrg",icon:(0,i.jsx)(x.default,{})}]:[],...Z&&!J?[{label:"Transfer To Workspace",value:"TransferPersonalToOrg",icon:(0,i.jsx)(v.default,{})}]:[],...et?[{label:"Move to folder",value:"MoveToFolder",icon:(0,i.jsx)(u.default,{})}]:[],...K.fork.isAuthorized?[{label:"Remix",value:"Fork",icon:(0,i.jsx)(m.default,{})}]:[],...J&&!e.isPrivate?[{label:e.isFeaturedRepl?"Remove from Featured Apps":"Feature on Profile",value:"Feature",icon:(0,i.jsx)(h.default,{})}]:[],...er&&!e.isStackTemplate?[{label:"Pin to Agent input box",value:"MarkAsStack",icon:(0,i.jsx)(p.default,{})}]:[],...er&&e.isStackTemplate?[{label:"Unpin from Agent input box",value:"UnmarkAsStack",icon:(0,i.jsx)(p.default,{})}]:[],...K.removeSelf.isAuthorized?[{label:"Leave",value:"Leave",isDestructive:!0,icon:(0,i.jsx)(n.default,{})}]:[],...K.deleteRepl.isAuthorized&&!ei?[{label:"Delete",value:"Delete",isDestructive:!0,icon:(0,i.jsx)(f.default,{})}]:[]];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(w.PopupMenu,{trigger:(0,i.jsx)(_.IconButton,{tooltipBehavior:"hidden",size:24,alt:"App Actions",children:(0,i.jsx)(c.default,{size:16})}),onAction:t=>{switch(t){case"CoverPage":break;case"Edit":P("Edit");break;case"TransferWithinOrg":P("TransferWithinOrg");break;case"TransferPersonalToOrg":P("TransferPersonalToOrg");break;case"MoveToFolder":P("MoveToFolder");break;case"Leave":P("Leave");break;case"Delete":P("Delete");break;case"Fork":$||z();break;case"Feature":P("Feature");break;case"Pin":case"Unpin":{if(G)break;let t=!e.isStarred;N({variables:{input:{id:e.id,isStarred:t}},optimisticResponse:{__typename:"RootMutationType",updateRepl:{__typename:"UpdateReplPayload",repl:{__typename:"Repl",id:e.id,isStarred:t}}},refetchQueries:["CurrentUserRepls"],onError:e=>{q(e.message)}});break}case"MarkAsStack":e.org?.id&&!Y&&(r({productArea:"design_systems",target:"pin_app_to_agent_input_menu_item"}),H({variables:{orgId:e.org.id,replId:e.id}}));break;case"UnmarkAsStack":e.org?.id&&!X&&(r({productArea:"design_systems",target:"unpin_app_from_agent_input_menu_item"}),Q({variables:{orgId:e.org.id,replId:e.id}}))}},children:el.map(e=>(0,i.jsx)(w.MenuItem,{id:e.value,label:e.label,icon:e.icon,isDestructive:e.isDestructive,...e.link?{href:e.link.href,as:e.link.as}:{}},e.value))}),(0,i.jsx)(D.Modal,{isOpen:"Leave"===M,onRequestClose:()=>P(null),children:(0,i.jsx)(C.LeaveMultiplayerReplDialog,{repl:e,onCancel:()=>P(null),onLeave:()=>{P(null),ea?.()}})}),(0,i.jsx)(D.Modal,{isOpen:"Delete"===M,onRequestClose:()=>P(null),children:(0,i.jsx)(T.DeleteReplDialog,{repl:e,onDone:()=>P(null),onDeleteRequested:ea})}),(0,i.jsx)(D.Modal,{isOpen:"Edit"===M,onRequestClose:()=>P(null),children:(0,i.jsx)(k.EditReplForm,{repl:e,onDone:()=>P(null)})}),e.org?.id?(0,i.jsx)(D.Modal,{isOpen:"TransferWithinOrg"===M,onRequestClose:()=>P(null),children:(0,i.jsx)(I.TransferReplWithinOrgDialog,{repl:e,orgId:e.org?.id,hideModal:()=>P(null)})}):null,(0,i.jsx)(D.Modal,{isOpen:"TransferPersonalToOrg"===M,onRequestClose:()=>P(null),children:(0,i.jsx)(F.TransferReplToOrgDialog,{repl:e,onDone:()=>P(null)})}),(0,i.jsx)(D.Modal,{isOpen:"MoveToFolder"===M,onRequestClose:()=>P(null),children:(0,i.jsx)(A.default,{isRepl:!0,item:e,teamId:void 0,hideModal:()=>P(null),onSubmit:e=>{W({variables:{replIds:e.variables.replIds,folderIds:e.variables.folderIds,destFolderId:e.variables.destFolderId},refetchQueries:["CurrentUserRepls","ReplsFiltersFolderList"],onCompleted:()=>{V("App moved successfully")},onError:e=>{q(e.message)}})}})}),(0,i.jsx)(D.Modal,{isOpen:"Feature"===M,onRequestClose:()=>P(null),centered:!0,maxWidth:650,children:(0,i.jsx)(y.default,{isFeatured:e.isFeaturedRepl,repl:e,orgId:e.org?.id,onCompleted:()=>P(null)})})]})}function z({repl:e,trackingContext:t,deleteAction:r}){return(0,i.jsx)(O.ForkContextProvider,{forkParams:{trackingData:{forkSource:t}},repl:e,children:(0,i.jsx)(E,{repl:e,deleteAction:r})})}e.s(["ReplActions",()=>z])},166404,e=>{e.v({appImage:"ShadesReplCard-module__iEL5tG__appImage",iconContainer:"ShadesReplCard-module__iEL5tG__iconContainer",overlayedClickTargets:"ShadesReplCard-module__iEL5tG__overlayedClickTargets",pinBadge:"ShadesReplCard-module__iEL5tG__pinBadge",root:"ShadesReplCard-module__iEL5tG__root",smallIconContainer:"ShadesReplCard-module__iEL5tG__smallIconContainer",title:"ShadesReplCard-module__iEL5tG__title"})},482434,e=>{"use strict";e.s(["ShadesReplCard",()=>T]);var t=e.i(276385),r=e.i(612866),i=e.i(368964);e.i(925218);var a=e.i(641555),l=e.i(252204),s=e.i(757053),n=e.i(546833),o=e.i(851231),d=e.i(46654),u=e.i(228108),p=e.i(732729),c=e.i(2343),g=e.i(826516),m=e.i(173703),h=e.i(714165),f=e.i(136540),x=e.i(624782),v=e.i(960178),j=e.i(751273),R=e.i(625484),b=e.i(732955),S=e.i(185591),y=e.i(166404);function T({repl:e,isOrg:i=!1,showPinBadge:a=!1,onTogglePin:l,agentStatus:s,trackingContext:o,onDeleteRequested:u,hideDelete:p}){let c=(0,S.replLinkProps)(e,{initialPaneType:null!=e.project?"project":void 0}),m=(0,g.usePressedProps)();return(0,t.jsxs)(R.View,{tag:"li",clsx:[y.default.root,n.shades.button("halfElevated")],...m,children:[(0,t.jsx)(k,{repl:e,agentStatus:s,isStarred:a&&e.isStarred&&e.authorizations.star.isAuthorized,onTogglePin:l}),(0,t.jsxs)(R.View,{grow:!0,shrink:!0,gap:6,p:12,children:[(0,t.jsxs)(R.View,{row:!0,gap:8,align:"start",justify:"space-between",children:[(0,t.jsx)(R.View,{grow:!0,shrink:!0,row:!0,gap:8,align:"center",children:(0,t.jsxs)(R.View,{grow:!0,shrink:!0,children:[(0,t.jsx)(r.default,{...c,clsx:y.default.title,children:(0,t.jsx)(v.Text,{multiline:!1,translate:"no",children:e.title})}),(0,t.jsx)(v.Text,{multiline:!1,variant:"small",color:"dimmest",children:(0,d.ago)(e.timeUpdated)})]})}),(0,t.jsx)(R.View,{clsx:y.default.overlayedClickTargets,children:(0,t.jsx)(b.ReplActions,{repl:e,trackingContext:o,deleteAction:p?{type:"hidden"}:{type:"visible",onDeleteRequested:u?()=>u(e.id):void 0}})})]}),i&&e.user?(0,t.jsx)(r.default,{href:`/@${e.user.username}`,clsx:y.default.overlayedClickTargets,children:(0,t.jsxs)(R.View,{row:!0,align:"center",gap:4,children:[(0,t.jsx)(h.Avatar,{size:16,username:e.user.username,src:"image"in e.user?e.user.image:null}),(0,t.jsx)(v.Text,{variant:"small",color:"dimmer",multiline:!1,children:e.user.username})]})}):null,(0,t.jsx)(C,{repl:e,isOrg:i,agentStatus:s})]})]})}function k({repl:e,agentStatus:r,isStarred:i,onTogglePin:l}){let n=(0,a.useObservableMemo)(()=>r?.select(e=>e?.appImageUrl),[r])||e.latestAgentScreenshotUrl;return(0,t.jsxs)(m.ShadesSurface,{clsx:y.default.appImage,style:n?{backgroundImage:`url(${n})`}:void 0,border:!0,children:[i?(0,t.jsx)(R.View,{clsx:y.default.pinBadge,children:(0,t.jsx)(f.IconButton,{alt:"Unpin from top",size:24,onClick:()=>l?.(e.id,!1),children:(0,t.jsx)(s.default,{size:16})})}):null,(0,t.jsx)(R.View,{align:"center",justify:"center",clsx:{[y.default.smallIconContainer]:n,[y.default.iconContainer]:!n},children:(0,t.jsx)(u.ReplIconWithPlaceholder,{alt:e.title,size:n?24:64,iconUrl:e.iconUrl,isLoading:!e.iconUrl})})]})}function C({repl:e,isOrg:a,...s}){return(0,t.jsxs)(R.View,{row:!0,gap:4,align:"center",justify:"space-between",children:[e.hostingDeployment?.__typename==="HostingDeployment"?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.default,{clsx:y.default.overlayedClickTargets,...(0,S.replLinkProps)(e,{initialPaneType:"deployments"}),children:(0,t.jsx)(c.StatusBadge,{deployment:e.hostingDeployment,isPrivate:e.isPrivate,isOrg:a})}),(0,t.jsx)(R.View,{clsx:y.default.overlayedClickTargets,children:(0,t.jsx)(o.DeploymentSiteLink,{deployment:e.hostingDeployment,icon:(0,t.jsx)(l.default,{})})})]}):(0,t.jsx)(c.StatusBadge,{isPrivate:e.isPrivate,isOrg:a}),a&&"viewFileContents"in e.authorizations&&e.authorizations.viewFileContents.isAuthorized&&!e.authorizations.editFileContents.isAuthorized?(0,t.jsx)(j.Tooltip,{clsx:y.default.overlayedClickTargets,tooltip:e.authorizations.editFileContents.code===i.ReplAuthorizationCode.InsufficientPermissions?"You don't have permission to edit this App. To open it in the project editor, request permissions from the creator or an admin.":e.authorizations.editFileContents.message,children:(0,t.jsx)(x.Pill,{colorway:"blurple",text:"Read-only"})}):(0,t.jsx)(t.Fragment,{children:s.agentStatus?(0,t.jsx)(p.AgentStatus,{agentStatus:s.agentStatus}):null})]})}},603934,e=>{e.v({agentRunningPill:"ReplCard-module__E-1cRq__agentRunningPill","pulse-blurple":"ReplCard-module__E-1cRq__pulse-blurple"})},732729,e=>{"use strict";e.s(["AgentStatus",()=>h,"ReplCard",()=>g]);var t=e.i(276385),r=e.i(389959),i=e.i(368964);e.i(925218);var a=e.i(267103),l=e.i(752539),s=e.i(416298),n=e.i(482434),o=e.i(927196),d=e.i(845411),u=e.i(480028),p=e.i(624782),c=e.i(603934);function g(e){return(0,r.useContext)(o.AgentStatusContext)?(0,t.jsx)(m,{...e}):(0,t.jsx)(n.ShadesReplCard,{...e})}function m(e){let r=(0,d.useReplAgentStatus)(e.repl);return(0,t.jsx)(n.ShadesReplCard,{...e,agentStatus:r})}function h(e){let r,n,o=(0,a.useObservable)(e.agentStatus);if(!o)return null;let d=o?.label,g=u.tokens.foregroundDimmest;switch(o?.status){case i.AgentStatusV2.Running:n="blurple";break;case i.AgentStatusV2.PausedWithRequest:n="primary",r=(0,t.jsx)(l.default,{color:g,size:12});break;case i.AgentStatusV2.PausedWithError:n="red",g=u.tokens.foregroundDefault,r=(0,t.jsx)(s.default,{color:g,size:12})}return(0,t.jsx)(p.Pill,{colorway:n,text:d,iconRight:r,clsx:o?.status===i.AgentStatusV2.Running?c.default.agentRunningPill:void 0})}}]);

//# debugId=e5e08426-685c-64f1-5491-99e8c54ebce2
//# sourceMappingURL=12e044a25ab96072.js.map