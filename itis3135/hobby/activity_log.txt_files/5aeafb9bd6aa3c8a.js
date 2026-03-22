;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="8df2bc11-8d3b-d01b-2793-6f6d30d46466")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,972777,e=>{"use strict";var t=e.i(276385),r=e.i(389959),i=e.i(532049),a=e.i(269848),l=e.i(450265),s=e.i(416298),n=e.i(222342),o=e.i(664152),d=e.i(714165),u=e.i(140487),p=e.i(85742),c=e.i(12034),g=e.i(396776),m=e.i(960178),f=e.i(625484);function h({repl:e,onDone:h}){let x=`org-select-${(0,r.useId)()}`,[v,R]=(0,r.useState)(""),{showError:j,showConfirm:b}=(0,n.default)(),{data:y,loading:S,error:C}=(0,i.useTransferReplToOrgDialogOrgsQuery)(),[w,{loading:k}]=(0,i.useTransferReplToOrgDialogTransferMutation)(),T=y?.currentUser?.orgs?.__typename==="CurrentUserOrganizationConnection"?y.currentUser.orgs.items.map(e=>({id:e.org.id,name:e.org.name,slug:e.org.slug,image:e.org.image??null})):[],I=T.find(e=>e.id===v),F=async()=>{if(!I)return void j("Please select a workspace");try{let t=await w({variables:{orgId:I.id,replIds:[e.id]}}),r=t.data?.transferReplToOrganization;r?.__typename==="TransferReplToOrganizationSuccess"?(b(`Successfully started transfer of "${e.title}" to ${I.name}.`),h()):r?.__typename==="UserError"||r?.__typename==="TooManyRequestsError"?j(r.message||"Failed to transfer repl"):j("Unexpected response from server")}catch(e){j("Failed to transfer repl. Please try again."),o.logger.error("Replit TransferReplToOrgDialog error:",e)}},_=()=>{h()};if(S)return(0,t.jsxs)(f.View,{gap:24,align:"center",children:[(0,t.jsxs)(m.Header,{variant:"subheadDefault",level:2,children:["Transfer ",e.title," to Organization"]}),(0,t.jsx)(a.default,{})]});if(C||y?.currentUser?.orgs?.__typename!=="CurrentUserOrganizationConnection"&&y?.currentUser?.orgs?.__typename){let r=C?.message||(y?.currentUser?.orgs?.__typename==="NotFoundError"||y?.currentUser?.orgs?.__typename==="UserError"?y.currentUser.orgs.message:"Failed to load workspaces");return(0,t.jsxs)(f.View,{gap:24,children:[(0,t.jsxs)(m.Header,{variant:"subheadDefault",level:2,children:["Transfer ",e.title," to Organization"]}),(0,t.jsx)(m.Text,{children:r}),(0,t.jsx)(f.View,{row:!0,gap:12,justify:"end",children:(0,t.jsx)(u.Button,{text:"Close",onClick:_})})]})}return 0===T.length?(0,t.jsxs)(f.View,{gap:24,children:[(0,t.jsxs)(m.Header,{variant:"subheadDefault",level:2,children:["Transfer ",e.title," to Organization"]}),(0,t.jsx)(m.Text,{children:"You don't belong to any organizations. You need to be a member of an organization to transfer repls to it."}),(0,t.jsx)(f.View,{row:!0,gap:12,justify:"end",children:(0,t.jsx)(u.Button,{text:"Close",onClick:_})})]}):(0,t.jsxs)(f.View,{gap:24,children:[(0,t.jsxs)(m.Header,{variant:"subheadDefault",level:2,children:["Transfer ",e.title," to Organization"]}),(0,t.jsxs)(f.View,{gap:8,children:[(0,t.jsxs)(m.Text,{children:['Select an organization to transfer "',e.title,'" to. This action is irreversible and the app will no longer belong to you.']}),(0,t.jsx)(g.StatusBanner,{colorway:"warning",text:"Linked account secrets will not be transferred. You'll need to re-link them in the destination workspace.",icon:(0,t.jsx)(s.default,{})}),(0,t.jsxs)(f.View,{gap:4,children:[(0,t.jsx)("label",{htmlFor:x,children:(0,t.jsx)(m.Text,{color:"dimmer",variant:"small",children:"Destination Organization"})}),(0,t.jsx)(c.Select,{id:x,"aria-label":"Select workspace",placeholder:"Choose a workspace...",selectedKey:v,onSelectionChange:e=>R(e),isDisabled:k,children:T.map(e=>(0,t.jsx)(p.ListBoxItem,{id:e.id,label:`${e.name} (@${e.slug})`,icon:(0,t.jsx)(d.Avatar,{src:e.image,size:16,username:e.name})},e.id))})]}),(0,t.jsx)(m.Text,{color:"dimmer",variant:"small",children:"The transfer occurs in the background and may take some time to complete."})]}),(0,t.jsxs)(f.View,{row:!0,gap:12,justify:"end",children:[(0,t.jsx)(u.Button,{text:"Cancel",onClick:_,disabled:k}),(0,t.jsx)(u.Button,{dataCy:"transfer-repl-to-org-dialog-confirm-button",disabled:k||!v,iconLeft:k?(0,t.jsx)(a.default,{}):(0,t.jsx)(l.default,{}),onClick:F,text:"Transfer to Workspace",colorway:"primary"})]})]})}e.s(["TransferReplToOrgDialog",()=>h])},532195,e=>{"use strict";var t=e.i(276385),r=e.i(750854),i=e.i(389959),a=e.i(368964),l=e.i(973245),s=e.i(304277);e.i(566901);let n={},o=l.gql`
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
    ${o}`;var u=e.i(657929),p=e.i(302905),c=e.i(143524),g=e.i(269848),m=e.i(46654),f=e.i(967629),h=e.i(480028),x=e.i(446530),v=e.i(613355),R=e.i(140487),j=e.i(960178),b=e.i(625484);let y={__typename:"ReplFolder",id:"__ROOT_ID__",name:"(home)/",pathnames:["(home)/"],canEdit:!1,timeCreated:null},S=(0,x.cssRecord)({folderPicker:[v.rcss.height(250),v.rcss.overflow("auto"),v.rcss.borderRadius(4),v.rcss.border({color:h.tokens.outlineDimmest})]}),C=(0,f.css)({"&":{height:"40px",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 10px"},"&:hover":{cursor:"pointer",backgroundColor:h.tokens.backgroundRoot},".small-folder-icon-container":{height:"20px",width:"20px",display:"flex",justifyContent:"center",alignItems:"center"},".small-back-folder-icon":{transform:"rotate(90deg)",width:"17px"},".small-folder-icon":{width:"20px"},".small-folder-title":{display:"flex",alignItems:"center"},".small-folder-title a":{marginLeft:"20px",borderBottom:"none",color:"inherit"},".small-folder-time":{fontSize:"12px",color:h.tokens.foregroundDimmer},"&.is-selected:hover,.is-selected":{backgroundColor:h.tokens.accentPrimaryDefault,color:h.tokens.backgroundHigher},".is-selected .small-folder-time":{color:"inherit"}}),w=({folder:e,onSelect:r,onNavigate:i,isSelected:a,isBack:l=!1})=>(0,t.jsxs)("div",{clsx:[{"is-selected":a}],onClick:()=>{r&&r(e)},css:C,children:[(0,t.jsxs)("div",{className:"small-folder-title",children:[(0,t.jsx)("div",{className:"small-folder-icon-container",children:l?(0,t.jsx)("div",{className:"small-back-folder-icon",children:(0,t.jsx)(u.default,{})}):(0,t.jsx)("div",{className:"small-folder-icon",children:(0,t.jsx)(p.default,{})})}),(0,t.jsx)("a",{onClick:t=>i?i(e,t):()=>{},children:e.name})]}),(0,t.jsx)("div",{className:"small-folder-time",children:e.timeCreated?(0,m.ago)(e.timeCreated):""})]});e.s(["default",0,e=>{var l;let o,{item:u,isRepl:p,teamId:m,hideModal:f}=e,h=/\/@([^/]*)/.exec(r.default.asPath||""),x=h?h[1]:null,v=m&&x?{__typename:"ReplFolder",id:`__TEAM__${m}__`,name:`@${x}`,pathnames:[`@${x}`],canEdit:!1,timeCreated:null}:y,[C,k]=(0,i.useState)(null),[T,I]=(0,i.useState)(v),[F,_]=(0,i.useState)([]),{data:A,loading:D}=(l={fetchPolicy:"cache-and-network",variables:{id:T.id,teamId:m},ssr:!1,notifyOnNetworkStatusChange:!0},o={...n,...l},s.useQuery(d,o)),O=e=>{e===C?k(null):k(e)},U=(e,t)=>{t.stopPropagation(),e.pathnames.length>T.pathnames.length?F.push(T):F.pop(),I(e),k(e),_(F)},P=async()=>{let t=[],r=[];p?t.push(u.id):r.push(u.id),e.onSubmit({variables:{destFolderId:C?C.id:"",replIds:t,folderIds:r,teamId:m}}),f()},E=(A?.currentUser?.replFolder?.folders||[]).filter(e=>("Unnamed"!==e.name||null!==e.parentId)&&e.folderType===a.ReplFolderTypes.Default&&(!!p||e.id!==u.id)).map(e=>({...e,pathnames:e.pathnames.slice(1)})),M=F[F.length-1]||v,z=C?C.id:"",$="name"in u?u.name:u.title;return(0,t.jsxs)(b.View,{gap:8,tag:"form",onSubmit:e=>{e.preventDefault(),P()},children:[(0,t.jsxs)(j.Text,{children:["Move ",$," to:"]}),(0,t.jsxs)(b.View,{css:S.folderPicker,children:[T.pathnames&&T.pathnames.join()!==v.pathnames.join()?(0,t.jsx)(w,{folder:{...M,name:"(up one level)"},isBack:!0,onNavigate:U,isSelected:z===M.id}):null,E?E.map(e=>(0,t.jsx)(w,{folder:e,onSelect:O,onNavigate:U,isSelected:e.id===z},`move-folder-${e.id}`)):null]}),(0,t.jsxs)(j.Text,{children:["Moving to:"," ",C?C.pathnames[C.pathnames.length-1]:T.pathnames[T.pathnames.length-1]||"(home)/"]}),(0,t.jsxs)(b.View,{row:!0,gap:8,justify:"end",children:[D?null:(0,t.jsx)(R.Button,{text:"Cancel",onClick:()=>f()}),(0,t.jsx)(R.Button,{colorway:"primary",iconLeft:D?(0,t.jsx)(g.default,{}):(0,t.jsx)(c.default,{}),disabled:D,text:p?"Move App":"Move folder",type:"submit"})]})]})}],532195)},52715,e=>{"use strict";var t=e.i(276385),r=e.i(17009),i=e.i(122400),a=e.i(452412),l=e.i(222342),s=e.i(960178);function n({repl:e,onLeave:n,onCancel:o}){let{showConfirm:d,showError:u}=(0,l.default)(),[p,{loading:c}]=(0,r.useLeaveMultiplayerReplDialogRemoveMutation)({variables:{id:e.id},refetchQueries:["CurrentUserRepls"],onCompleted(){d("App removed"),n()},onError(e){u(e.message)}});return(0,t.jsx)(a.default,{title:"Leave multiplayer App",confirmLabel:"Yes, leave this App",isDestructive:!0,loading:c,confirmIcon:(0,t.jsx)(i.default,{}),onCancel:o,onConfirm:()=>{c||p()},children:(0,t.jsxs)(s.Text,{children:["Are you sure you want to leave this multiplayer App (",e.title,")? You will no longer be able to access its content."]})})}e.s(["LeaveMultiplayerReplDialog",()=>n])},851231,e=>{"use strict";var t=e.i(276385),r=e.i(368964),i=e.i(399245),a=e.i(414761),l=e.i(976606),s=e.i(848969);function n({deployment:e,icon:n=(0,t.jsx)(i.default,{})}){let{trackAppOpen:o}=(0,l.default)(),d=(0,a.useDeploymentLink)(e);return e.repl.config.isAgentStack?(0,t.jsx)(s.IconButtonLink,{href:d.href,alt:"Automation: no accessible url",disabled:!0,children:n}):e.currentBuild.provider===r.HostingBuildProvider.Cron?(0,t.jsx)(s.IconButtonLink,{href:d.href,alt:"Scheduled Jobs have no accessible url",disabled:!0,children:n}):(0,t.jsx)(s.IconButtonLink,{onClick:()=>{o(e.repl.id)},href:d.href,alt:"Go to site",target:"_blank",children:n})}e.s(["DeploymentSiteLink",()=>n])},2343,e=>{"use strict";var t=e.i(276385),r=e.i(327516),i=e.i(368964),a=e.i(182409),l=e.i(399245),s=e.i(995691),n=e.i(379334),o=e.i(928838),d=e.i(446530),u=e.i(613355),p=e.i(960178),c=e.i(751273),g=e.i(625484);let m=(0,d.cssRecord)({dim:[u.rcss.color.foregroundDimmer]});function f({deployment:e,isPrivate:d=!1,isOrg:u=!1,small:f=!0}){if(!e)if(d)return(0,t.jsx)(c.Tooltip,{tooltip:u?"Internal to your organization":"Only you can see and edit this App",children:(0,t.jsxs)(g.View,{css:m.dim,row:!0,gap:4,align:"center",children:[(0,t.jsx)(s.default,{size:f?12:16}),(0,t.jsx)(p.Text,{variant:f?"small":void 0,multiline:!1,children:"Private"})]})});else return(0,t.jsx)(c.Tooltip,{tooltip:"Anyone on Replit can view and remix this App",children:(0,t.jsxs)(g.View,{css:m.dim,row:!0,gap:4,align:"center",children:[(0,t.jsx)(l.default,{size:f?12:16}),(0,t.jsx)(p.Text,{variant:f?"small":void 0,multiline:!1,children:"Public"})]})});let{currentBuild:h}=e,{title:x,color:v}=o.buildStatuses[h.status],R=(0,r.default)(new Date(h.timeCreated),Date.now(),{addSuffix:!0}),j=`Published ${R} by ${h.user?.displayName??n.DELETED_USER_DISPLAY_NAME}`,b=h.status===i.HostingBuildStatus.Success?"Published":x;return(0,t.jsx)(c.Tooltip,{tooltip:j,children:(0,t.jsxs)(g.View,{row:!0,gap:4,align:"center",children:[(0,t.jsx)(a.default,{size:f?12:16,color:v}),(0,t.jsx)(p.Text,{color:"dimmer",variant:f?"small":void 0,multiline:!1,children:b})]})})}e.s(["StatusBadge",()=>f])},847253,e=>{"use strict";var t=e.i(276385),r=e.i(389959),i=e.i(368964),a=e.i(973245),l=e.i(951262);let s={},n=a.gql`
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
    `;var o=e.i(269848),d=e.i(612343),u=e.i(222342),p=e.i(306694),c=e.i(140487),g=e.i(960178),m=e.i(625484);function f({repl:e,orgId:a,hideModal:f}){let h,x=`group-search-${(0,r.useId)()}`,[v,R]=(0,r.useState)(),[j,b]=(0,r.useState)(""),{showError:y,showConfirm:S}=(0,u.default)(),[C,{loading:w}]=(h={...s,...void 0},l.useMutation(n,h)),k=async()=>{if(!v)return;let t=await C({variables:{input:{replId:e.id,newOwnerOrgGroupId:v.id}}});t.data?.transferReplWithinOrg.__typename==="Repl"?(S("Repl transferred successfully"),f()):y(t.data?.transferReplWithinOrg.message)};return(0,t.jsxs)(m.View,{gap:24,children:[(0,t.jsxs)(g.Header,{variant:"subheadDefault",level:2,children:["Transfer ownership of ",e.title]}),(0,t.jsxs)(m.View,{gap:8,children:[(0,t.jsxs)(g.Text,{children:["Select another member of your workspace to transfer to. The selected user will become the primary owner of ",e.title," and will be displayed as the app creator in your workspace's app directory."]}),(0,t.jsx)(m.View,{grow:!0,shrink:!0,children:(0,t.jsx)(p.default,{inputId:x,orgId:a,types:[i.OrgGroupType.SystemIndividual],selectedGroups:v?[v]:[],value:j,setValue:b,onSelect:e=>{R(e),b(e.name)},onClear:()=>R(void 0),placeholder:"Select a user"})})]}),(0,t.jsxs)(m.View,{row:!0,gap:12,justify:"end",children:[(0,t.jsx)(c.Button,{text:"Cancel",onClick:f}),(0,t.jsx)(c.Button,{dataCy:"transfer-repl-dialog-confirm-button",disabled:w||!v,iconLeft:w?(0,t.jsx)(o.default,{}):(0,t.jsx)(d.default,{}),onClick:k,text:"Transfer app",colorway:"primary"})]})]})}e.s(["TransferReplWithinOrgDialog",()=>f],847253)},732955,e=>{"use strict";var t,r,i=e.i(276385),a=e.i(389959),l=e.i(997931),s=e.i(368964),n=e.i(122400),o=e.i(204977),d=e.i(712771),u=e.i(143524),p=e.i(75916),c=e.i(828322),g=e.i(869472),m=e.i(898039),f=e.i(908628),h=e.i(491194),x=e.i(612343),v=e.i(450265),R=e.i(47503),j=e.i(968783),b=e.i(222342),y=e.i(187505),S=e.i(773240),C=e.i(26124),w=e.i(236379),k=e.i(52715),T=e.i(532195),I=e.i(847253),F=e.i(136540),_=e.i(119274),A=e.i(739521),D=e.i(464092),O=e.i(185591),U=e.i(972777),P=((t=P||{}).CoverPage="CoverPage",t.Delete="Delete",t.Edit="Edit",t.Leave="Leave",t.TransferWithinOrg="TransferWithinOrg",t.TransferPersonalToOrg="TransferPersonalToOrg",t.MoveToFolder="MoveToFolder",t.Fork="Fork",t.Feature="Feature",t.Pin="Pin",t.Unpin="Unpin",t.MarkAsStack="MarkAsStack",t.UnmarkAsStack="UnmarkAsStack",t),E=((r=E||{}).Delete="Delete",r.Edit="Edit",r.Fork="Fork",r.Feature="Feature",r.Leave="Leave",r.TransferWithinOrg="TransferWithinOrg",r.TransferPersonalToOrg="TransferPersonalToOrg",r.MoveToFolder="MoveToFolder",r.MarkAsStack="MarkAsStack",r.UnmarkAsStack="UnmarkAsStack",r);function M({repl:e,deleteAction:t}){let{trackClick:r}=(0,y.useTrackClick)(),[P,E]=(0,a.useState)(null),M=(0,R.useCurrentUserId)(),{fork:z,isForking:$}=(0,D.useForkContext)(),{orgRole:L}=(0,j.useCurrentUserStoredOrgContext)(),{showNotice:V,showError:B}=(0,b.default)(),q=(0,j.useIsCurrentOrgEnterprise)(),[W,{loading:N}]=(0,l.useReplActionsUpdateReplMutation)(),[G]=(0,l.useReplActionsMoveToFolderMutation)(),[H,{loading:Q}]=(0,l.useAddOrgStackTemplateMutation)({onCompleted:e=>{e.addOrgStackTemplate?.success?V(e.addOrgStackTemplate.message||"Successfully pinned template"):B(e.addOrgStackTemplate?.message||"Failed to pin template")},onError:e=>{B(`Error pinning template: ${e.message}`)}}),[Y,{loading:Z}]=(0,l.useRemoveOrgStackTemplateMutation)({onCompleted:e=>{e.removeOrgStackTemplate?.success?V(e.removeOrgStackTemplate?.message||"Successfully removed pinned template"):B(e.removeOrgStackTemplate?.message||"Failed to remove pinned template")},onError:e=>{B(`Error removing pinned template: ${e.message}`)}}),X=e.authorizations,K=e.org?.__typename==="Org",J=e.owner?.id===M,ee=L===s.SystemOrgGroupType.SystemAdmins,et=X.editFolder.isAuthorized,er=K&&q&&ee,ei=t?.type==="hidden",ea=t?.type==="visible"?t.onDeleteRequested:void 0,el=[{label:"Cover page",value:"CoverPage",link:(0,O.replViewLinkProps)(e),icon:(0,i.jsx)(d.default,{})},...X.star.isAuthorized&&e.isStarred?[{label:"Unpin from top",value:"Unpin",icon:(0,i.jsx)(g.default,{})}]:[],...X.star.isAuthorized&&!e.isStarred?[{label:"Pin to top",value:"Pin",icon:(0,i.jsx)(g.default,{})}]:[],...X.editMetadata.isAuthorized?[{label:"Edit details",value:"Edit",icon:(0,i.jsx)(o.default,{})}]:[],...K&&(J||ee)?[{label:"Transfer Owner",value:"TransferWithinOrg",icon:(0,i.jsx)(x.default,{})}]:[],...J&&!K?[{label:"Transfer To Workspace",value:"TransferPersonalToOrg",icon:(0,i.jsx)(v.default,{})}]:[],...et?[{label:"Move to folder",value:"MoveToFolder",icon:(0,i.jsx)(u.default,{})}]:[],...X.fork.isAuthorized?[{label:"Remix",value:"Fork",icon:(0,i.jsx)(m.default,{})}]:[],...K&&!e.isPrivate?[{label:e.isFeaturedRepl?"Remove from Featured Apps":"Feature on Profile",value:"Feature",icon:(0,i.jsx)(f.default,{})}]:[],...er&&!e.isStackTemplate?[{label:"Pin to Agent input box",value:"MarkAsStack",icon:(0,i.jsx)(p.default,{})}]:[],...er&&e.isStackTemplate?[{label:"Unpin from Agent input box",value:"UnmarkAsStack",icon:(0,i.jsx)(p.default,{})}]:[],...X.removeSelf.isAuthorized?[{label:"Leave",value:"Leave",isDestructive:!0,icon:(0,i.jsx)(n.default,{})}]:[],...X.deleteRepl.isAuthorized&&!ei?[{label:"Delete",value:"Delete",isDestructive:!0,icon:(0,i.jsx)(h.default,{})}]:[]];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(_.PopupMenu,{trigger:(0,i.jsx)(F.IconButton,{tooltipBehavior:"hidden",size:24,alt:"App Actions",children:(0,i.jsx)(c.default,{size:16})}),onAction:t=>{switch(t){case"CoverPage":break;case"Edit":E("Edit");break;case"TransferWithinOrg":E("TransferWithinOrg");break;case"TransferPersonalToOrg":E("TransferPersonalToOrg");break;case"MoveToFolder":E("MoveToFolder");break;case"Leave":E("Leave");break;case"Delete":E("Delete");break;case"Fork":$||z();break;case"Feature":E("Feature");break;case"Pin":case"Unpin":{if(N)break;let t=!e.isStarred;W({variables:{input:{id:e.id,isStarred:t}},optimisticResponse:{__typename:"RootMutationType",updateRepl:{__typename:"UpdateReplPayload",repl:{__typename:"Repl",id:e.id,isStarred:t}}},refetchQueries:["CurrentUserRepls"],onError:e=>{B(e.message)}});break}case"MarkAsStack":e.org?.id&&!Q&&(r({productArea:"design_systems",target:"pin_app_to_agent_input_menu_item"}),H({variables:{orgId:e.org.id,replId:e.id}}));break;case"UnmarkAsStack":e.org?.id&&!Z&&(r({productArea:"design_systems",target:"unpin_app_from_agent_input_menu_item"}),Y({variables:{orgId:e.org.id,replId:e.id}}))}},children:el.map(e=>(0,i.jsx)(_.MenuItem,{id:e.value,label:e.label,icon:e.icon,isDestructive:e.isDestructive,...e.link?{href:e.link.href,as:e.link.as}:{}},e.value))}),(0,i.jsx)(A.Modal,{isOpen:"Leave"===P,onRequestClose:()=>E(null),children:(0,i.jsx)(k.LeaveMultiplayerReplDialog,{repl:e,onCancel:()=>E(null),onLeave:()=>{E(null),ea?.()}})}),(0,i.jsx)(A.Modal,{isOpen:"Delete"===P,onRequestClose:()=>E(null),children:(0,i.jsx)(C.DeleteReplDialog,{repl:e,onDone:()=>E(null),onDeleteRequested:ea})}),(0,i.jsx)(A.Modal,{isOpen:"Edit"===P,onRequestClose:()=>E(null),children:(0,i.jsx)(w.EditReplForm,{repl:e,onDone:()=>E(null)})}),e.org?.id?(0,i.jsx)(A.Modal,{isOpen:"TransferWithinOrg"===P,onRequestClose:()=>E(null),children:(0,i.jsx)(I.TransferReplWithinOrgDialog,{repl:e,orgId:e.org?.id,hideModal:()=>E(null)})}):null,(0,i.jsx)(A.Modal,{isOpen:"TransferPersonalToOrg"===P,onRequestClose:()=>E(null),children:(0,i.jsx)(U.TransferReplToOrgDialog,{repl:e,onDone:()=>E(null)})}),(0,i.jsx)(A.Modal,{isOpen:"MoveToFolder"===P,onRequestClose:()=>E(null),children:(0,i.jsx)(T.default,{isRepl:!0,item:e,teamId:void 0,hideModal:()=>E(null),onSubmit:e=>{G({variables:{replIds:e.variables.replIds,folderIds:e.variables.folderIds,destFolderId:e.variables.destFolderId},refetchQueries:["CurrentUserRepls","ReplsFiltersFolderList"],onCompleted:()=>{V("App moved successfully")},onError:e=>{B(e.message)}})}})}),(0,i.jsx)(A.Modal,{isOpen:"Feature"===P,onRequestClose:()=>E(null),centered:!0,maxWidth:650,children:(0,i.jsx)(S.default,{isFeatured:e.isFeaturedRepl,repl:e,orgId:e.org?.id,onCompleted:()=>E(null)})})]})}function z({repl:e,trackingContext:t,deleteAction:r}){return(0,i.jsx)(D.ForkContextProvider,{forkParams:{trackingData:{forkSource:t}},repl:e,children:(0,i.jsx)(M,{repl:e,deleteAction:r})})}e.s(["ReplActions",()=>z])},166404,e=>{e.v({appImage:"ShadesReplCard-module__iEL5tG__appImage",iconContainer:"ShadesReplCard-module__iEL5tG__iconContainer",overlayedClickTargets:"ShadesReplCard-module__iEL5tG__overlayedClickTargets",pinBadge:"ShadesReplCard-module__iEL5tG__pinBadge",root:"ShadesReplCard-module__iEL5tG__root",smallIconContainer:"ShadesReplCard-module__iEL5tG__smallIconContainer",title:"ShadesReplCard-module__iEL5tG__title"})},482434,e=>{"use strict";e.s(["ShadesReplCard",()=>C]);var t=e.i(276385),r=e.i(612866),i=e.i(368964);e.i(925218);var a=e.i(641555),l=e.i(252204),s=e.i(757053),n=e.i(546833),o=e.i(851231),d=e.i(46654),u=e.i(228108),p=e.i(732729),c=e.i(2343),g=e.i(826516),m=e.i(173703),f=e.i(714165),h=e.i(136540),x=e.i(624782),v=e.i(960178),R=e.i(751273),j=e.i(625484),b=e.i(732955),y=e.i(185591),S=e.i(166404);function C({repl:e,isOrg:i=!1,showPinBadge:a=!1,onTogglePin:l,agentStatus:s,trackingContext:o,onDeleteRequested:u,hideDelete:p}){let c=(0,y.replLinkProps)(e,{initialPaneType:null!=e.project?"project":void 0}),m=(0,g.usePressedProps)();return(0,t.jsxs)(j.View,{tag:"li",clsx:[S.default.root,n.shades.button("halfElevated")],...m,children:[(0,t.jsx)(w,{repl:e,agentStatus:s,isStarred:a&&e.isStarred&&e.authorizations.star.isAuthorized,onTogglePin:l}),(0,t.jsxs)(j.View,{grow:!0,shrink:!0,gap:6,p:12,children:[(0,t.jsxs)(j.View,{row:!0,gap:8,align:"start",justify:"space-between",children:[(0,t.jsx)(j.View,{grow:!0,shrink:!0,row:!0,gap:8,align:"center",children:(0,t.jsxs)(j.View,{grow:!0,shrink:!0,children:[(0,t.jsx)(r.default,{...c,clsx:S.default.title,children:(0,t.jsx)(v.Text,{multiline:!1,translate:"no",children:e.title})}),(0,t.jsx)(v.Text,{multiline:!1,variant:"small",color:"dimmest",children:(0,d.ago)(e.timeUpdated)})]})}),(0,t.jsx)(j.View,{clsx:S.default.overlayedClickTargets,children:(0,t.jsx)(b.ReplActions,{repl:e,trackingContext:o,deleteAction:p?{type:"hidden"}:{type:"visible",onDeleteRequested:u?()=>u(e.id):void 0}})})]}),i&&e.user?(0,t.jsx)(r.default,{href:`/@${e.user.username}`,clsx:S.default.overlayedClickTargets,children:(0,t.jsxs)(j.View,{row:!0,align:"center",gap:4,children:[(0,t.jsx)(f.Avatar,{size:16,username:e.user.username,src:"image"in e.user?e.user.image:null}),(0,t.jsx)(v.Text,{variant:"small",color:"dimmer",multiline:!1,children:e.user.username})]})}):null,(0,t.jsx)(k,{repl:e,isOrg:i,agentStatus:s})]})]})}function w({repl:e,agentStatus:r,isStarred:i,onTogglePin:l}){let n=(0,a.useObservableMemo)(()=>r?.select(e=>e?.appImageUrl),[r])||e.latestAgentScreenshotUrl;return(0,t.jsxs)(m.ShadesSurface,{clsx:S.default.appImage,style:n?{backgroundImage:`url(${n})`}:void 0,border:!0,children:[i?(0,t.jsx)(j.View,{clsx:S.default.pinBadge,children:(0,t.jsx)(h.IconButton,{alt:"Unpin from top",size:24,onClick:()=>l?.(e.id,!1),children:(0,t.jsx)(s.default,{size:16})})}):null,(0,t.jsx)(j.View,{align:"center",justify:"center",clsx:{[S.default.smallIconContainer]:n,[S.default.iconContainer]:!n},children:(0,t.jsx)(u.ReplIconWithPlaceholder,{alt:e.title,size:n?24:64,iconUrl:e.iconUrl,isLoading:!e.iconUrl})})]})}function k({repl:e,isOrg:a,...s}){return(0,t.jsxs)(j.View,{row:!0,gap:4,align:"center",justify:"space-between",children:[e.hostingDeployment?.__typename==="HostingDeployment"?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.default,{clsx:S.default.overlayedClickTargets,...(0,y.replLinkProps)(e,{initialPaneType:"deployments"}),children:(0,t.jsx)(c.StatusBadge,{deployment:e.hostingDeployment,isPrivate:e.isPrivate,isOrg:a})}),(0,t.jsx)(j.View,{clsx:S.default.overlayedClickTargets,children:(0,t.jsx)(o.DeploymentSiteLink,{deployment:e.hostingDeployment,icon:(0,t.jsx)(l.default,{})})})]}):(0,t.jsx)(c.StatusBadge,{isPrivate:e.isPrivate,isOrg:a}),a&&"viewFileContents"in e.authorizations&&e.authorizations.viewFileContents.isAuthorized&&!e.authorizations.editFileContents.isAuthorized?(0,t.jsx)(R.Tooltip,{clsx:S.default.overlayedClickTargets,tooltip:e.authorizations.editFileContents.code===i.ReplAuthorizationCode.InsufficientPermissions?"You don't have permission to edit this App. To open it in the project editor, request permissions from the creator or an admin.":e.authorizations.editFileContents.message,children:(0,t.jsx)(x.Pill,{colorway:"blurple",text:"Read-only"})}):(0,t.jsx)(t.Fragment,{children:s.agentStatus?(0,t.jsx)(p.AgentStatus,{agentStatus:s.agentStatus}):null})]})}},603934,e=>{e.v({agentRunningPill:"ReplCard-module__E-1cRq__agentRunningPill","pulse-blurple":"ReplCard-module__E-1cRq__pulse-blurple"})},732729,e=>{"use strict";e.s(["AgentStatus",()=>f,"ReplCard",()=>g]);var t=e.i(276385),r=e.i(389959),i=e.i(368964);e.i(925218);var a=e.i(267103),l=e.i(752539),s=e.i(416298),n=e.i(482434),o=e.i(927196),d=e.i(845411),u=e.i(480028),p=e.i(624782),c=e.i(603934);function g(e){return(0,r.useContext)(o.AgentStatusContext)?(0,t.jsx)(m,{...e}):(0,t.jsx)(n.ShadesReplCard,{...e})}function m(e){let r=(0,d.useReplAgentStatus)(e.repl);return(0,t.jsx)(n.ShadesReplCard,{...e,agentStatus:r})}function f(e){let r,n,o=(0,a.useObservable)(e.agentStatus);if(!o)return null;let d=o?.label,g=u.tokens.foregroundDimmest;switch(o?.status){case i.AgentStatusV2.Running:n="blurple";break;case i.AgentStatusV2.PausedWithRequest:n="primary",r=(0,t.jsx)(l.default,{color:g,size:12});break;case i.AgentStatusV2.PausedWithError:n="red",g=u.tokens.foregroundDefault,r=(0,t.jsx)(s.default,{color:g,size:12})}return(0,t.jsx)(p.Pill,{colorway:n,text:d,iconRight:r,clsx:o?.status===i.AgentStatusV2.Running?c.default.agentRunningPill:void 0})}},564203,e=>{"use strict";var t=e.i(973245),r=e.i(304277);e.i(566901);let i={},a=t.gql`
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
    `;function f(e){let t={...n,...e};return s.useMutation(m,t)}let h=t.gql`
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
    `;function x(e){let t={...n,...e};return s.useMutation(h,t)}e.s(["ComponentsReplActionsFragmentDoc",0,d,"useAddOrgStackTemplateMutation",()=>g,"useRemoveOrgStackTemplateMutation",()=>f,"useReplActionsMoveToFolderMutation",()=>x,"useReplActionsUpdateReplMutation",()=>p])},26124,e=>{"use strict";var t=e.i(276385),r=e.i(651739),i=e.i(222342),a=e.i(557862);function l({repl:e,onDeleteRequested:l,onDone:s}){let{showConfirm:n,showError:o}=(0,i.default)(),[d,u]=(0,r.useDeleteReplDialogReplDeleteMutation)({onCompleted:e=>{"Repl"===e.deleteRepl.__typename?(n("App scheduled for deletion"),l?.(),s?.()):o("Something went wrong")},onError:e=>o(e.message),variables:{id:e.id},update:(e,t)=>{t.data?.deleteRepl.id&&(e.evict({id:e.identify(t.data.deleteRepl)}),e.gc())}});return(0,t.jsx)(a.default,{name:e.title,entityType:"App",isDeleting:u.loading,delete:()=>{u.loading||d()},hideModal:()=>s?.()})}e.s(["DeleteReplDialog",()=>l])},236379,49578,e=>{"use strict";var t=e.i(276385),r=e.i(389959),i=e.i(312087),a=e.i(183035),l=e.i(399245),s=e.i(269848),n=e.i(995691),o=e.i(416298),d=e.i(322823),u=e.i(222342),p=e.i(200527),c=e.i(973245),g=e.i(951262);let m={},f=c.gql`
    mutation ReplCoverImageUpdate($input: UpdateReplInput!) {
  updateRepl(input: $input) {
    repl {
      id
      imageUrl
    }
  }
}
    `;var h=e.i(349597),x=e.i(422025),v=e.i(971072),R=e.i(473497),j=e.i(446530),b=e.i(613355),y=e.i(428596),S=e.i(140487),C=e.i(965710),w=e.i(960178),k=e.i(751273),T=e.i(625484);let I=(0,j.cssRecord)({button:[b.rcss.width("100%")]}),F=({replId:e,authz:i,initialImageUrl:a,originImageUrl:l})=>{var s;let n,{showError:o,showConfirm:d}=(0,u.default)(),p=(0,y.useIdSeed)()("cover-image"),[c,j]=(0,r.useState)(a),[b,{loading:F}]=(s={onError:()=>{o("Something unexpected happened")},onCompleted:e=>{e.updateRepl.repl&&d("App cover image updated successfully")}},n={...m,...s},g.useMutation(f,n)),_=c!==l,A=(0,x.default)({onUpload:async({url:t})=>{await b({variables:{input:{id:e,imageUrl:t}}}),j(t)},onUploadPreview:()=>{d("Uploading repl cover image")},onError:e=>o(e.message)});(0,r.useEffect)(()=>{j(a)},[a]);let D=async()=>{await b({variables:{input:{id:e,imageUrl:null}}})};return(0,t.jsxs)(T.View,{gap:4,children:[(0,t.jsx)("label",{htmlFor:p,children:(0,t.jsx)(w.Text,{variant:"small",color:"dimmer",multiline:!1,children:"Cover image"})}),(0,t.jsxs)(T.View,{row:!0,gap:16,align:"center",children:[(0,t.jsx)(R.default,{alt:"",width:64,height:64,imageUrl:c}),(0,t.jsxs)(T.View,{grow:!0,shrink:!0,row:!0,gap:16,children:[(0,t.jsx)(T.View,{grow:!0,shrink:!0,basis:0,children:(0,t.jsx)(C.FileUploadInput,{onSelect:e=>{e&&e.length>0&&A.uploadImage(e[0],h.ImageUploadContexts.ReplCoverImage)},acceptedFileTypes:v.ACCEPTABLE_IMAGE_UPLOAD_TYPES,dropZoneDisabled:!0,children:(0,t.jsx)(k.Tooltip,{tooltip:"Not allowed to update image",isDisabled:i.isAuthorized,children:(0,t.jsx)(S.Button,{"aria-labelledby":p,text:_?"Replace image":"Upload image",disabled:!i.isAuthorized,css:I.button,size:"small",loading:F})})})}),_?(0,t.jsx)(T.View,{grow:!0,shrink:!0,basis:0,children:(0,t.jsx)(S.Button,{text:"Reset",size:"small",disabled:!i.isAuthorized,onClick:D,css:I.button,loading:F})}):null]})]})]})};e.s(["default",0,F],49578);var _=e.i(445016),A=e.i(420802),D=e.i(721321),O=e.i(607278),U=e.i(836224);let P=e=>0===e.length?{message:"Title cannot be blank"}:e.length>60?{message:"Title cannot be greater than 60 characters"}:void 0,E=e=>{if(e.length>A.REPL_DESCRIPTION_MAX_LENGTH)return{message:`Description cannot be greater than ${A.REPL_DESCRIPTION_MAX_LENGTH} characters`}},M=(0,j.cssRecord)({inputLabel:[b.rcss.flex.row,b.rcss.justify.spaceBetween,b.rcss.align.end],descriptionInput:[b.rcss.minHeight(96),b.rcss.maxHeight(256),{resize:"vertical"}],inputErrorIcon:[b.rcss.color.accentNegativeStronger],inputErrorMessage:[b.rcss.flex.growAndShrink(1),b.rcss.color.accentNegativeStronger]});function z({error:e,id:r}){return e?(0,t.jsxs)(T.View,{id:r,row:!0,gap:4,align:"center",children:[(0,t.jsx)(o.default,{css:M.inputErrorIcon}),(0,t.jsx)(w.Text,{css:M.inputErrorMessage,children:e.message})]}):null}function $({repl:e,onDone:l}){let{showConfirm:n,showError:o}=(0,u.default)(),[p,{loading:c}]=(0,i.useEditReplFormEditMutation)({onCompleted:()=>{n("App edited"),l()},onError:e=>{o(e.message)}}),[g,{loading:m}]=(0,i.useEditReplFormEditMutation)({onCompleted:()=>{n("Updated privacy")},onError:e=>{o(e.message)}}),f=e.org?.type!=="team"&&e.authorizations.editVisibility.isAuthorized,h=(0,d.useFormField)(e.title,P),x=(0,d.useFormField)(e.description??"",E),v=(0,r.useId)(),R=(0,r.useId)(),j=(0,r.useId)(),b=(0,r.useId)(),y=!!h.error||!!x.error,C=e.owner?.__typename==="Team",k=async()=>{if(m)return;let t=!e.isPrivate;if(e.authorizations.editVisibility.isAuthorized||!1===t)return g({variables:{input:{id:e.id,isPrivate:!e.isPrivate}},optimisticResponse:{__typename:"RootMutationType",updateRepl:{__typename:"UpdateReplPayload",repl:{...e,isPrivate:!e.isPrivate}}}});o(e.authorizations.editVisibility.message)};return(0,t.jsxs)(T.View,{gap:32,children:[(0,t.jsxs)(T.View,{tag:"form",gap:24,onSubmit:t=>{t.preventDefault(),c||null==h.validate()&&null==x.validate()&&p({variables:{input:{id:e.id,title:h.value,description:x.value}}})},children:[(0,t.jsx)(w.Header,{variant:"headerDefault",level:2,children:"Edit App"}),(0,t.jsxs)(T.View,{gap:4,children:[(0,t.jsxs)(T.View,{css:M.inputLabel,children:[(0,t.jsx)("label",{htmlFor:v,children:(0,t.jsx)(w.Text,{variant:"small",color:"dimmer",multiline:!1,children:"Name"})}),(0,t.jsx)(U.default,{maxLength:60,value:h.value,hideLabel:!0})]}),(0,t.jsx)(O.Input,{style:{cursor:e.authorizations.editMetadata.isAuthorized?"auto":"not-allowed"},disabled:!e.authorizations.editMetadata.isAuthorized,maxLength:60,value:h.value,onChange:e=>h.setValue(e.target.value),spellCheck:!1,id:v,"aria-describedby":R}),(0,t.jsx)(z,{id:R,error:h.error})]}),(0,t.jsxs)(T.View,{gap:4,children:[(0,t.jsxs)(T.View,{css:M.inputLabel,children:[(0,t.jsx)("label",{htmlFor:j,children:(0,t.jsx)(w.Text,{variant:"small",color:"dimmer",multiline:!1,children:"Description"})}),(0,t.jsx)(U.default,{maxLength:A.REPL_DESCRIPTION_MAX_LENGTH,value:x.value,hideLabel:!0})]}),(0,t.jsx)(O.MultiLineInput,{disabled:!e.authorizations.editMetadata.isAuthorized,maxLength:A.REPL_DESCRIPTION_MAX_LENGTH,value:x.value,onChange:e=>x.setValue(e.target.value),placeholder:"What does this App do?",css:M.descriptionInput,id:j,"aria-describedby":b}),(0,t.jsx)(z,{id:b,error:x.error})]}),(0,t.jsxs)(T.View,{row:!0,gap:12,justify:"end",children:[(0,t.jsx)(S.Button,{type:"button",text:"Cancel",onClick:l}),(0,t.jsx)(S.Button,{type:"submit",iconLeft:c?(0,t.jsx)(s.default,{}):(0,t.jsx)(a.default,{}),disabled:c||y||!e.authorizations.editMetadata.isAuthorized,text:"Save",colorway:"primary"})]})]}),(0,t.jsxs)(T.View,{gap:16,children:[(0,t.jsx)(_.default,{replId:e.id,authz:e.authorizations.editMetadata,initialIconUrl:e.iconUrl,originIconUrl:e.templateInfo?.iconUrl}),(0,t.jsx)(F,{replId:e.id,authz:e.authorizations.editMetadata,initialImageUrl:e.imageUrl??e.templateInfo?.imageUrl,originImageUrl:e.templateInfo?.imageUrl})]}),f?(0,t.jsx)(L,{isPrivate:e.isPrivate,onChange:k,isTeam:C}):null]})}function L(e){let r=(0,y.useIdSeed)();return(0,t.jsxs)(T.View,{gap:8,children:[(0,t.jsxs)(D.ButtonGroup,{tag:"fieldset",name:r("privacy"),value:e.isPrivate.toString(),onChange:t=>{e.onChange("true"===t)},row:!0,primary:!0,stretch:!0,children:[(0,t.jsx)(D.ButtonGroupItem,{id:r("false"),value:"false",text:"Public",icon:(0,t.jsx)(l.default,{})}),(0,t.jsx)(D.ButtonGroupItem,{id:r("true"),value:"true",text:"Private",icon:(0,t.jsx)(n.default,{})})]}),(0,t.jsx)(w.Text,{variant:"small",color:"dimmest",children:(0,p.default)(e.isPrivate,e.isTeam)})]})}e.s(["EditReplForm",()=>$,"PrivacyToggle",()=>L],236379)},976606,444876,498695,e=>{"use strict";var t=e.i(973245),r=e.i(564203),i=e.i(951262);let a={},l=t.gql`
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
    ${o}`;var p=e.i(709485),c=e.i(968783),g=e.i(858248);e.s(["default",0,()=>{let e,{orgId:t,orgRole:r}=(0,c.useCurrentUserStoredOrgContext)(),[a]=(e={...d,...void 0},i.useMutation(u,e));return{trackAppOpen:e=>{t&&(a({variables:{input:{orgId:t,replId:e}}}),(0,g.track)(p.events.ORG_APP_VIEWED,{replId:e,context:(0,c.getOrgTrackingContext)({id:t}),orgRole:r}))}}}],976606)},927196,845411,e=>{"use strict";var t=e.i(276385),r=e.i(389959),i=e.i(973245),a=e.i(613141);let l={},s=i.gql`
    subscription CurrentUserReplAgentStatuses {
  currentUserReplAgentStatuses {
    replId
    statusV2
    label
    updatedAt
    appImageUrl
  }
}
    `;e.i(242933);var n=e.i(279606);e.i(925218);var o=e.i(112077);let d=(0,r.createContext)(null);function u({children:e}){let i,u=(0,o.useCreateObservable)(new Map);i={...l,onData:({data:{data:e}})=>{(e=>{if(!e?.currentUserReplAgentStatuses)return;let t=new Map(e.currentUserReplAgentStatuses.map(e=>[e.replId,{statusV2:e.statusV2,label:e.label,updatedAt:e.updatedAt,appImageUrl:e.appImageUrl}]));u.set(t)})(e)}},a.useSubscription(s,i);let p=(0,r.useMemo)(()=>n.Observable.from(u),[u]);return(0,t.jsx)(d.Provider,{value:p,children:e})}function p(){let e=(0,r.useContext)(d);if(null===e)throw Error("useCurrentUserAgentStatus must be used within an AgentStatusProvider");return e}e.s(["AgentStatusContext",0,d,"AgentStatusProvider",()=>u,"default",()=>p],927196);var c=e.i(992785);function g(e){let t=p();return(0,r.useMemo)(()=>t.select(t=>{let r=t.get(e.id);return r?{status:r.statusV2,label:r.label,appImageUrl:r.appImageUrl}:e.latestAgentStatus?{status:e.latestAgentStatus.statusV2,label:e.latestAgentStatus.label,appImageUrl:e.latestAgentStatus.appImageUrl}:null},c.default),[t,e.id,e.latestAgentStatus])}e.s(["useReplAgentStatus",()=>g],845411)},445016,e=>{"use strict";var t=e.i(276385),r=e.i(389959),i=e.i(973245),a=e.i(951262);let l={},s=i.gql`
    mutation ReplIconUpdate($input: UpdateReplInput!) {
  updateRepl(input: $input) {
    repl {
      id
      iconUrl
    }
  }
}
    `;var n=e.i(349597),o=e.i(422025),d=e.i(222342),u=e.i(971072),p=e.i(446530),c=e.i(613355),g=e.i(428596),m=e.i(140487),f=e.i(965710),h=e.i(960178),x=e.i(751273),v=e.i(625484),R=e.i(418944);let j=(0,p.cssRecord)({button:[c.rcss.width("100%")]});e.s(["default",0,({replId:e,authz:i,initialIconUrl:p,originIconUrl:c})=>{var b;let y,{showError:S,showConfirm:C}=(0,d.default)(),w=(0,g.useIdSeed)()("repl-icon"),[k,T]=(0,r.useState)(p),[I,{loading:F}]=(b={onError:()=>{S("Something unexpected happened")},onCompleted:e=>{e.updateRepl.repl&&C("App icon updated successfully")}},y={...l,...b},a.useMutation(s,y)),_=k!==c,A=(0,o.default)({onUpload:async({url:t})=>{await I({variables:{input:{id:e,iconUrl:t}}}),T(t)},onUploadPreview:()=>{C("Uploading App icon")},onError:e=>S(e.message)});return(0,r.useEffect)(()=>{T(p)},[p]),(0,t.jsxs)(v.View,{gap:4,children:[(0,t.jsx)("label",{htmlFor:w,children:(0,t.jsx)(h.Text,{variant:"small",color:"dimmer",multiline:!1,children:"App icon"})}),(0,t.jsxs)(v.View,{row:!0,gap:16,align:"center",children:[(0,t.jsx)(R.default,{alt:"",size:32,iconUrl:k??""}),(0,t.jsx)(v.View,{grow:!0,shrink:!0,row:!0,gap:16,children:(0,t.jsx)(v.View,{grow:!0,shrink:!0,basis:0,children:(0,t.jsx)(f.FileUploadInput,{onSelect:e=>{e&&e.length>0&&A.uploadImage(e[0],n.ImageUploadContexts.ReplIcon)},acceptedFileTypes:u.ACCEPTABLE_IMAGE_UPLOAD_TYPES,dropZoneDisabled:!0,children:(0,t.jsx)(x.Tooltip,{tooltip:"Not allowed to update icon",isDisabled:i.isAuthorized,children:(0,t.jsx)(m.Button,{text:_?"Replace icon":"Upload icon",disabled:!i.isAuthorized,css:j.button,size:"small",loading:F})})})})})]})]})}],445016)},334938,729422,e=>{"use strict";var t=e.i(932200),r=e.i(2800),i=e.i(248033),a=e.i(493800),l=e.i(167768),s=e.i(138715),n=e.i(99906),o=e.i(990998),d=e.i(434080),u=e.i(593678),p=e.i(352019),c=e.i(389959),g=e.i(48309);let m=new Map;function f(e,t){let r=m.get(e);if(!r){let t=new Set,i=e=>{for(let r of t)r(e)};r={listener:i,handlers:t},m.set(e,r),document.addEventListener(e,i)}return r.handlers.add(t),()=>{r.handlers.delete(t),0===r.handlers.size&&(document.removeEventListener(e,r.listener),m.delete(e))}}var h=e.i(624071),x=e.i(330666),v=e.i(649239),R=e.i(780673),j=e.i(58646),b=e.i(716768),y=e.i(896346);let S=(0,c.createContext)(null),C=(0,c.forwardRef)(function(e,m){var C;let{isDisabled:w=!1}=e;[e,m]=(0,t.useContextProps)(e,m,S);let k=(0,v.useObjectRef)(m),T=(0,c.useRef)(null),{dropProps:I,dropButtonProps:F,isDropTarget:_}=(0,a.useDrop)({...e,ref:T,hasDropButton:!0}),{buttonProps:A}=(0,l.useButton)(F||{},T),{hoverProps:D,isHovered:O}=(0,s.useHover)(e),{focusProps:U,isFocused:P,isFocusVisible:E}=(0,n.useFocusRing)(),M=(0,o.useLocalizedStringFormatter)((C=r.default)&&C.__esModule?C.default:C,"react-aria-components"),z=(0,R.useSlotId)(),$=e["aria-label"]||M.format("dropzoneLabel"),L=[z,e["aria-labelledby"]].filter(Boolean).join(" "),V=(0,j.useLabels)({"aria-label":$,"aria-labelledby":L}),{clipboardProps:B}=function(e){let{isDisabled:t}=e,r=(0,c.useRef)(!1),{focusProps:i}=(0,g.useFocus)({onFocusChange:e=>{r.current=e}}),a=(0,u.useEffectEvent)(t=>{r.current&&e.getItems&&t.preventDefault()}),l=(0,u.useEffectEvent)(t=>{if(r.current&&e.getItems&&(t.preventDefault(),t.clipboardData)){var i;(0,d.writeToDataTransfer)(t.clipboardData,e.getItems({action:"copy"})),null==(i=e.onCopy)||i.call(e)}}),s=(0,u.useEffectEvent)(t=>{r.current&&e.onCut&&e.getItems&&t.preventDefault()}),n=(0,u.useEffectEvent)(t=>{r.current&&e.onCut&&e.getItems&&(t.preventDefault(),t.clipboardData&&((0,d.writeToDataTransfer)(t.clipboardData,e.getItems({action:"cut"})),e.onCut()))}),o=(0,u.useEffectEvent)(t=>{r.current&&e.onPaste&&t.preventDefault()}),m=(0,u.useEffectEvent)(t=>{if(r.current&&e.onPaste&&(t.preventDefault(),t.clipboardData)){let r=(0,d.readFromDataTransfer)(t.clipboardData);e.onPaste(r)}});return(0,c.useEffect)(()=>{if(!t)return(0,p.chain)(f("beforecopy",a),f("copy",l),f("beforecut",s),f("cut",n),f("beforepaste",o),f("paste",m))},[t,a,l,s,n,o,m]),{clipboardProps:i}}({isDisabled:w,onPaste:t=>{var r;return null==(r=e.onDrop)?void 0:r.call(e,{type:"drop",items:t,x:0,y:0,dropOperation:"copy"})}}),q=(0,t.useRenderProps)({...e,values:{isHovered:O,isFocused:P,isFocusVisible:E,isDropTarget:_,isDisabled:w},defaultClassName:"react-aria-DropZone"}),W=(0,b.filterDOMProps)(e);return delete W.id,c.default.createElement(t.Provider,{values:[[i.TextContext,{id:z,slot:"label"}]]},c.default.createElement("div",{...(0,h.mergeProps)(I,D,W),...q,slot:e.slot||void 0,ref:k,onClick:e=>{var t,r;let i=e.target;for(;i&&(null==(t=k.current)?void 0:t.contains(i))&&!(0,y.isFocusable)(i);){if(i===k.current){null==(r=T.current)||r.focus();break}i=i.parentElement}},"data-hovered":O||void 0,"data-focused":P||void 0,"data-focus-visible":E||void 0,"data-drop-target":_||void 0,"data-disabled":w||void 0},c.default.createElement(x.VisuallyHidden,null,c.default.createElement("button",{...(0,h.mergeProps)(A,U,B,V),ref:T})),q.children))});e.s(["DropZone",()=>C],334938);var w=e.i(964304),k=e.i(867711);let T=(0,c.forwardRef)(function(e,t){let{onSelect:r,acceptedFileTypes:i,allowsMultiple:a,defaultCamera:l,children:s,acceptDirectory:n,...o}=e,d=(0,v.useObjectRef)(t),u=(0,b.filterDOMProps)(o);return c.default.createElement(c.default.Fragment,null,c.default.createElement(k.PressResponder,{onPress:()=>{var e,t;(null==(e=d.current)?void 0:e.value)&&(d.current.value=""),null==(t=d.current)||t.click()}},s),c.default.createElement(w.Input,{...u,type:"file",ref:d,style:{display:"none"},accept:null==i?void 0:i.toString(),onChange:e=>null==r?void 0:r(e.target.files),capture:l,multiple:a,webkitdirectory:n?"":void 0}))});e.s(["FileTrigger",()=>T],729422)},964701,e=>{e.v({dropZone:"FileUploadInput-module__9Ex1JG__dropZone"})},965710,e=>{"use strict";var t=e.i(276385),r=e.i(389959),i=e.i(334938),a=e.i(729422),l=e.i(964701);let s=(0,r.forwardRef)(function(e,r){return(0,t.jsx)(i.DropZone,{ref:r,...e,className:l.default.dropZone})});e.s(["FileUploadInput",0,({acceptedFileTypes:e,allowsMultiple:r=!1,acceptDirectory:i=!1,dropZoneDisabled:l=!1,children:n,onDrop:o,onSelect:d,...u})=>(0,t.jsx)(s,{onDrop:o,isDisabled:l,children:(0,t.jsx)(a.FileTrigger,{acceptedFileTypes:e,allowsMultiple:r,acceptDirectory:i,onSelect:d,...u,children:n})})])},429190,e=>{"use strict";var t=e.i(973245);let r=t.gql`
    fragment FeaturedReplCardRepl on Repl {
  id
  title
  description
  iconUrl
  timeUpdated
  imageUrl
  url
  templateInfo {
    imageUrl
  }
  publicForkCount
}
    `;e.i(304277);var i=e.i(566901);let a={},l=t.gql`
    fragment FeaturedReplPreviewRepl on Repl {
  id
  ...FeaturedReplCardRepl
}
    ${r}`,s=t.gql`
    query FeaturedReplPreviewReplInfo($replId: String!) {
  getRepl(id: $replId) {
    ... on Repl {
      id
      isFeaturedRepl
    }
  }
}
    `;function n(e){let t={...a,...e};return i.useLazyQuery(s,t)}e.s(["FeaturedReplPreviewReplFragmentDoc",0,l,"useFeaturedReplPreviewReplInfoLazyQuery",()=>n],429190)},773240,e=>{"use strict";var t=e.i(276385),r=e.i(429190),i=e.i(140959),a=e.i(222342),l=e.i(220897),s=e.i(140487),n=e.i(960178),o=e.i(625484);e.s(["default",0,({isFeatured:e,repl:d,orgId:u,onCompleted:p})=>{let{showError:c,showConfirm:g}=(0,a.default)(),[m,{loading:f}]=(0,i.useOrgFeaturedReplsUpdateMutation)({onError:()=>{c("Something unexpected happened")},onCompleted:e=>{"Org"===e.updateOrgFeaturedRepl.__typename?(g("Profile updated successfully"),v()):c(e.updateOrgFeaturedRepl.message)}}),[h,{loading:x}]=(0,i.useOrgFeaturedReplsDeleteMutation)({onError:()=>{c("Something unexpected happened")},onCompleted:e=>{"Org"===e.removeOrgFeaturedRepl.__typename?(g("Removed featured App"),v()):c(e.removeOrgFeaturedRepl.message)}}),[v]=(0,r.useFeaturedReplPreviewReplInfoLazyQuery)({variables:{replId:d.id},fetchPolicy:"network-only",ssr:!1});return u?(0,t.jsxs)(o.View,{justify:"center",gap:16,children:[(0,t.jsx)(n.Text,{variant:"headerDefault",children:e?"Remove from featured repls":"Feature App on your profile"}),(0,t.jsx)(n.Text,{variant:"text",children:e?"Do you want to remove this App from the Featured section?":"Display this App at the top of your workspace's profile. Only public Apps can be featured."}),(0,t.jsx)(l.FeaturedReplCard,{repl:d,index:0,hideForkButton:!0}),(0,t.jsxs)(o.View,{row:!0,justify:"space-between",align:"center",children:[(0,t.jsx)(s.Button,{text:"Cancel",onClick:p}),(0,t.jsx)(s.Button,{colorway:"primary",text:e?"Remove":"Feature on profile",onClick:()=>{e?h({variables:{input:{orgId:u,replId:d.id}}}):m({variables:{input:{orgId:u,replId:d.id}}}),p()},loading:f||x})]})]}):null}])},957353,e=>{"use strict";var t=e.i(973245);let r=t.gql`
    fragment ReplListBoxItemRepl on Repl {
  id
  title
  iconUrl
  isFeaturedRepl
  description(plainText: true)
}
    `;e.s(["ReplListBoxItemReplFragmentDoc",0,r])},140959,e=>{"use strict";var t=e.i(973245),r=e.i(957353),i=e.i(951262),a=e.i(304277);e.i(566901);let l={},s=t.gql`
    fragment OrgFeaturedReplsSearchReplItem on Repl {
  __typename
  id
  ...ReplListBoxItemRepl
  org {
    id
  }
}
    ${r.ReplListBoxItemReplFragmentDoc}`,n=t.gql`
    fragment OrgFeaturedReplsSearchInputRepls on ReplConnection {
  items {
    ...OrgFeaturedReplsSearchReplItem
  }
  pageInfo {
    hasNextPage
    nextCursor
  }
}
    ${s}`,o=t.gql`
    mutation OrgFeaturedReplsUpdate($input: UpdateOrgFeaturedReplInput!) {
  updateOrgFeaturedRepl(input: $input) {
    ... on Org {
      id
      __typename
      featuredRepls {
        __typename
        ... on OrgFeaturedReplConnection {
          items {
            repl {
              ...OrgFeaturedReplsSearchReplItem
            }
          }
        }
      }
    }
    ... on Error {
      __typename
      message
    }
  }
}
    ${s}`;function d(e){let t={...l,...e};return i.useMutation(o,t)}let u=t.gql`
    mutation OrgFeaturedReplsDelete($input: RemoveOrgFeaturedReplInput!) {
  removeOrgFeaturedRepl(input: $input) {
    ... on Org {
      id
      __typename
      featuredRepls {
        __typename
        ... on OrgFeaturedReplConnection {
          items {
            repl {
              ...OrgFeaturedReplsSearchReplItem
            }
          }
        }
      }
    }
    ... on Error {
      __typename
      message
    }
  }
}
    ${s}`;function p(e){let t={...l,...e};return i.useMutation(u,t)}let c=t.gql`
    query OrgFeaturedReplsSearchInputList($searchTerm: String!, $orgId: String!, $cursor: String) {
  currentUser {
    __typename
    id
    org(orgId: $orgId) {
      __typename
      ... on Org {
        id
        repls(
          input: {filters: {title: {search: $searchTerm}, visibility: public}, cursor: $cursor}
        ) {
          __typename
          ... on ReplConnection {
            ...OrgFeaturedReplsSearchInputRepls
          }
          ... on UserError {
            message
          }
        }
      }
      ... on NotFoundError {
        message
      }
    }
  }
}
    ${n}`;function g(e){let t={...l,...e};return a.useQuery(c,t)}e.s(["useOrgFeaturedReplsDeleteMutation",()=>p,"useOrgFeaturedReplsSearchInputListQuery",()=>g,"useOrgFeaturedReplsUpdateMutation",()=>d])},220897,473497,e=>{"use strict";var t=e.i(276385),r=e.i(612866),i=e.i(898039),a=e.i(46654),l=e.i(389959),s=e.i(116235),n=e.i(967629),o=e.i(446530),d=e.i(173703),u=e.i(613355),p=e.i(211397);let c=(0,n.css)([u.rcss.overflow("hidden"),u.rcss.position.relative]);function g({width:e,height:r,alt:i,imageUrl:a,style:n}){let o=(0,l.useContext)(s.IconContext),{width:u=o.size??32,height:c=o.size??32,alt:g=o.alt??""}={width:e,height:r,alt:i},f=u<32?4:8;return(0,t.jsx)(d.ShadesSurface,{css:m.imageSurface,style:{borderRadius:f,width:u,height:c,...n},p:8,children:(0,t.jsx)(p.default,{alt:g,src:a,width:u,height:c,objectFit:"contain"})})}let m=(0,o.cssRecord)({imageSurface:[c]});e.s(["default",()=>g],473497);var f=e.i(480028),h=e.i(754873),x=e.i(140487),v=e.i(960178),R=e.i(625484),j=e.i(464092),b=e.i(418944);let y=({repl:e,hideForkButton:l})=>{let s=(0,j.useForkContext)(),{title:n,description:o,iconUrl:u,timeUpdated:p,publicForkCount:c,url:m}=e,f=`${m}/view`;return(0,t.jsxs)(d.ShadesSurface,{css:w.featureCardWrapper,tabIndex:-1,elevate:!1,children:[(0,t.jsx)(R.View,{css:w.imageWrapper,children:(0,t.jsx)(g,{alt:e.title,imageUrl:e.imageUrl??e.templateInfo?.imageUrl,width:135,height:135,style:{borderRadius:"4px 0px 0px 4px"}})}),(0,t.jsxs)(R.View,{css:w.detailsColumn,grow:!0,shrink:!0,children:[(0,t.jsxs)(R.View,{grow:!0,pt:8,row:!0,align:"start",justify:"space-between",children:[(0,t.jsx)(r.default,{href:f,css:k.link,target:"_blank",children:(0,t.jsxs)(R.View,{css:w.titleWithIcon,grow:!0,shrink:!0,row:!0,gap:12,align:"center",children:[(0,t.jsx)(b.default,{surface:!0,alt:n,size:32,iconUrl:u}),(0,t.jsxs)(R.View,{css:S.titleTimeWrapper,children:[(0,t.jsx)(v.Text,{variant:"headerDefault",color:"default",multiline:!1,children:n}),(0,t.jsxs)(v.Text,{variant:"small",color:"dimmest",multiline:!1,children:["Updated ",(0,a.ago)(p)]})]})]})}),l?null:(0,t.jsxs)(R.View,{css:w.forkCount,pt:8,row:!0,gap:8,align:"center",children:[(0,t.jsx)(R.View,{children:c}),(0,t.jsx)(x.Button,{className:"forkButton",variant:"nofill",css:w.forkButton,text:s.isForking?"Remixing...":"Remix",isDisabled:s.isForking,onClick:()=>{s.isForking||s.fork()},disabled:s.isForking,iconLeft:(0,t.jsx)(i.default,{})})]})]}),(0,t.jsx)(R.View,{grow:2,children:(0,t.jsx)(v.Text,{color:"dimmer",maxLines:2,children:o})})]})]})},S=(0,o.cssRecord)({titleTimeWrapper:[u.rcss.color.foregroundDefault,u.rcss.flex.column,u.rcss.flex.shrink(1),u.rcss.minWidth(0)]}),C=(0,n.css)({"::after":{borderRadius:f.tokens.space8,content:'""',position:"absolute",top:0,right:0,bottom:0,left:0,display:"block",zIndex:1}}),w=(0,o.cssRecord)({featureCardWrapper:[u.rcss.position.relative,u.rcss.rowWithGap(16),u.rcss.height(135),u.rcss.overflow("hidden"),h.interactive.filledAndOutlined,u.rcss.pr(16),{width:"100%"}],detailsColumn:[{width:"100%"}],titleWithIcon:[u.rcss.minWidth(0),u.rcss.mr(8)],forkCount:[u.rcss.color.foregroundDimmer],forkButton:[u.rcss.zIndex(2),u.rcss.hover({backgroundColor:f.tokens.interactiveBackgroundActive})],imageWrapper:[u.rcss.width(135),{[u.media.max(550)]:[u.rcss.width(110)]}]}),k=(0,o.cssRecord)({link:[C,u.rcss.focusRingOnAfter,u.rcss.flex.growAndShrink(1),u.rcss.minWidth(0)]});e.s(["FeaturedReplCard",0,y,"default",0,({featuredRepls:e})=>e?(0,t.jsxs)(R.View,{gap:8,children:[(0,t.jsx)(v.Text,{variant:"subheadBig",color:"default",children:"Featured Apps"}),(0,t.jsx)(R.View,{gap:16,children:e.items.map((e,r)=>(0,t.jsx)(j.ForkContextProvider,{forkParams:{trackingData:{forkSource:"orgFeaturedRepl"}},repl:e.repl,children:(0,t.jsx)(y,{repl:e.repl,index:r})},e.repl.id))})]}):null],220897)}]);

//# debugId=8df2bc11-8d3b-d01b-2793-6f6d30d46466
//# sourceMappingURL=fb9b92fd4657075f.js.map