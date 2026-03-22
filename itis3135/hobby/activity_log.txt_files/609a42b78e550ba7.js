;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="4a8e4464-0213-a676-df8f-ef4889de274d")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,80116,e=>{e.v({buttonGroupContainer:"List-module__McZJ6W__buttonGroupContainer",compact:"List-module__McZJ6W__compact",emptyState:"List-module__McZJ6W__emptyState",emptyStateContainer:"List-module__McZJ6W__emptyStateContainer",list:"List-module__McZJ6W__list",loadMoreContainer:"List-module__McZJ6W__loadMoreContainer"})},149860,e=>{e.v({count:"NotificationsItem-module__mjNz4W__count"})},805518,371816,995045,344718,841412,988072,346606,e=>{"use strict";var t=e.i(276385),i=e.i(389959),o=e.i(973245);let n=o.gql`
    fragment NotificationItemCreator on User {
  id
  image
  username
  fullName
  url
}
    `,a=o.gql`
    fragment NotificationItemRepliedToPostNotification on RepliedToPostNotification {
  id
  text
  url
  timeCreated
  seen
  creator {
    id
    ...NotificationItemCreator
  }
}
    ${n}`,r=o.gql`
    fragment NotificationItemRepliedToCommentNotification on RepliedToCommentNotification {
  id
  text
  url
  timeCreated
  seen
  creator {
    id
    ...NotificationItemCreator
  }
}
    ${n}`,s=o.gql`
    fragment NotificationItemMentionedInPostNotification on MentionedInPostNotification {
  id
  text
  url
  timeCreated
  seen
  creator {
    id
    ...NotificationItemCreator
  }
}
    ${n}`,c=o.gql`
    fragment NotificationItemMentionedInCommentNotification on MentionedInCommentNotification {
  id
  text
  url
  timeCreated
  seen
  creator {
    id
    ...NotificationItemCreator
  }
}
    ${n}`,l=o.gql`
    fragment NotificationItemAnswerAcceptedNotification on AnswerAcceptedNotification {
  id
  text
  url
  timeCreated
  seen
  creator {
    id
    ...NotificationItemCreator
  }
}
    ${n}`,m=o.gql`
    fragment NotificationItemMultiplayerJoinedEmailNotification on MultiplayerJoinedEmailNotification {
  id
  text
  url
  timeCreated
  seen
  creator {
    id
    ...NotificationItemCreator
  }
}
    ${n}`,d=o.gql`
    fragment NotificationItemMultiplayerJoinedLinkNotification on MultiplayerJoinedLinkNotification {
  id
  text
  url
  timeCreated
  seen
  creator {
    id
    ...NotificationItemCreator
  }
}
    ${n}`,u=o.gql`
    fragment NotificationItemMultiplayerInvitedNotification on MultiplayerInvitedNotification {
  id
  text
  url
  timeCreated
  seen
  creator {
    id
    ...NotificationItemCreator
  }
}
    ${n}`,f=o.gql`
    fragment NotificationItemMultiplayerOverlimitNotification on MultiplayerOverlimitNotification {
  id
  text
  url
  timeCreated
  seen
  creator {
    id
    ...NotificationItemCreator
  }
}
    ${n}`,p=o.gql`
    fragment NotificationItemWarningNotification on WarningNotification {
  id
  text
  url
  timeCreated
  seen
}
    `,x=o.gql`
    fragment NotificationItemTeamInvite on TeamInvite {
  id
  team {
    id
    displayName
    username
  }
}
    `,N=o.gql`
    fragment NotificationItemTeamInviteNotification on TeamInviteNotification {
  id
  text
  url
  timeCreated
  seen
  invite {
    id
    ...NotificationItemTeamInvite
  }
}
    ${x}`,g=o.gql`
    fragment NotificationItemTeamOrganizationInvite on TeamOrganizationInvite {
  id
  organization {
    id
    name
  }
}
    `,h=o.gql`
    fragment NotificationItemTeamOrganizationInviteNotification on TeamOrganizationInviteNotification {
  id
  text
  url
  timeCreated
  seen
  invite {
    id
    ...NotificationItemTeamOrganizationInvite
  }
}
    ${g}`,j=o.gql`
    fragment NotificationTeamTemplateSubmittedNotification on TeamTemplateSubmittedNotification {
  id
  text
  url
  timeCreated
  seen
  repl {
    id
    url
  }
}
    `,C=o.gql`
    fragment NotificationTeamTemplateReviewedStatusNotification on TeamTemplateReviewedStatusNotification {
  id
  text
  url
  timeCreated
  seen
  repl {
    id
    url
  }
}
    `,I=o.gql`
    fragment NotificationReplCommentCreatedNotification on ReplCommentCreatedNotification {
  id
  url
  timeCreated
  seen
  creator {
    id
    ...NotificationItemCreator
  }
}
    ${n}`,v=o.gql`
    fragment NotificationReplCommentReplyCreatedNotification on ReplCommentReplyCreatedNotification {
  id
  timeCreated
  seen
  creator {
    id
    ...NotificationItemCreator
  }
}
    ${n}`,y=o.gql`
    fragment NotificationReplCommentMentionNotification on ReplCommentMentionNotification {
  id
  timeCreated
  seen
  creator {
    id
    ...NotificationItemCreator
  }
}
    ${n}`,w=o.gql`
    fragment NotificationItemNewFollower on NewFollowerNotification {
  id
  timeCreated
  seen
  url
  creator {
    ...NotificationItemCreator
  }
}
    ${n}`,_=o.gql`
    fragment BasicNotificationItemNotification on BasicNotification {
  id
  text
  url
  timeCreated
  seen
  context
}
    `,T=o.gql`
    fragment NotificationItemEgressLimitNotification on EgressLimitNotification {
  id
  url
  timeCreated
  seen
  variant
  limitGib
  percentage
}
    `,M=o.gql`
    fragment NotificationItemOrgUpgradeRequestReviewedNotification on OrgUpgradeRequestReviewedNotification {
  id
  timeCreated
  seen
  url
  creator {
    ...NotificationItemCreator
  }
  isAccepted
  orgId
}
    ${n}`;var R=e.i(304277);e.i(566901);let k={},b=o.gql`
    fragment NotificationItems on Notification {
  ... on BasicNotification {
    id
    ...BasicNotificationItemNotification
  }
  ... on MentionedInPostNotification {
    id
    ...NotificationItemMentionedInPostNotification
  }
  ... on RepliedToPostNotification {
    id
    ...NotificationItemRepliedToPostNotification
  }
  ... on MentionedInCommentNotification {
    id
    ...NotificationItemMentionedInCommentNotification
  }
  ... on RepliedToCommentNotification {
    id
    ...NotificationItemRepliedToCommentNotification
  }
  ... on AnswerAcceptedNotification {
    id
    ...NotificationItemAnswerAcceptedNotification
  }
  ... on MultiplayerInvitedNotification {
    id
    ...NotificationItemMultiplayerInvitedNotification
  }
  ... on MultiplayerJoinedEmailNotification {
    id
    ...NotificationItemMultiplayerJoinedEmailNotification
  }
  ... on MultiplayerJoinedLinkNotification {
    id
    ...NotificationItemMultiplayerJoinedLinkNotification
  }
  ... on MultiplayerOverlimitNotification {
    id
    ...NotificationItemMultiplayerOverlimitNotification
  }
  ... on WarningNotification {
    id
    ...NotificationItemWarningNotification
  }
  ... on TeamInviteNotification {
    id
    ...NotificationItemTeamInviteNotification
  }
  ... on TeamOrganizationInviteNotification {
    id
    ...NotificationItemTeamOrganizationInviteNotification
  }
  ... on TeamTemplateSubmittedNotification {
    id
    ...NotificationTeamTemplateSubmittedNotification
  }
  ... on TeamTemplateReviewedStatusNotification {
    id
    ...NotificationTeamTemplateReviewedStatusNotification
  }
  ... on ReplCommentCreatedNotification {
    id
    ...NotificationReplCommentCreatedNotification
  }
  ... on ReplCommentReplyCreatedNotification {
    id
    ...NotificationReplCommentReplyCreatedNotification
  }
  ... on ReplCommentMentionNotification {
    id
    ...NotificationReplCommentMentionNotification
  }
  ... on NewFollowerNotification {
    id
    ...NotificationItemNewFollower
  }
  ... on OrgUpgradeRequestReviewedNotification {
    id
    ...NotificationItemOrgUpgradeRequestReviewedNotification
  }
  ... on EgressLimitNotification {
    id
    ...NotificationItemEgressLimitNotification
  }
  ... on OrgUpgradeRequestReviewedNotification {
    id
    ...NotificationItemOrgUpgradeRequestReviewedNotification
  }
}
    ${_}
${s}
${a}
${c}
${r}
${l}
${u}
${m}
${d}
${f}
${p}
${N}
${h}
${j}
${C}
${I}
${v}
${y}
${w}
${M}
${T}`,L=o.gql`
    query notifications($after: String, $count: Int, $seen: Boolean) {
  currentUser {
    id
  }
  notifications(after: $after, count: $count, seen: $seen) {
    items {
      ...NotificationItems
    }
    pageInfo {
      nextCursor
    }
  }
}
    ${b}`;var A=e.i(951262);let S={},O=o.gql`
    mutation MarkAllNotificationsAsSeen {
  markAllNotificationsAsSeen {
    id
    notificationCount
  }
}
    `;var $=e.i(183035),q=e.i(612866),P=e.i(927600),E=e.i(858248),z=e.i(709485),U=e.i(480028),W=e.i(446530),V=e.i(754873),B=e.i(613355);let D=(0,W.cssRecord)({root:[B.rcss.display.flex,B.rcss.align.center,B.rcss.p(12),{'&[data-has-link="true"]':[{pointerEvents:"none","a, button":{pointerEvents:"all"}}],'&[data-last-item="true"]':[B.rcss.border({width:1,color:U.tokens.outlineDimmest,direction:"bottom"})]}],notificationLinkWrapper:[[{borderWidth:0,":nth-last-child(2)>a":{borderBottomLeftRadius:U.tokens.space8,borderBottomRightRadius:U.tokens.space8,"::after":{borderBottomLeftRadius:U.tokens.space8,borderBottomRightRadius:U.tokens.space8}}}]],notificationLink:[V.interactive.listItem,B.rcss.color.foregroundDefault,B.rcss.display.block,B.rcss.focusRingOnAfter,B.rcss.position.relative,{":focus-visible":{boxShadow:"none !important"},"::after":{content:'""',position:"absolute",top:0,right:0,bottom:0,left:0,display:"block",zIndex:1}}],content:[B.rcss.flex.grow(1),B.rcss.pr(12)],indicatorLink:[B.rcss.display.flex,B.rcss.align.center],indicator:[B.rcss.width(6),B.rcss.height(6),B.rcss.backgroundColor.blueStronger,B.rcss.borderRadius("full"),B.rcss.mr(2)]}),F=({condition:e,children:t,wrap:o})=>e?(0,i.cloneElement)(o(t)):t;function J({children:e,seen:i,href:o,as:n,isLastItem:a=!1}){let r=!!(o||n);return(0,t.jsx)(F,{condition:r,wrap:e=>(0,t.jsxs)("div",{css:D.notificationLinkWrapper,children:[n&&o?(0,t.jsx)(q.default,{as:n,href:o,css:D.notificationLink,children:e}):null,!n&&o&&"object"==typeof o?(0,t.jsx)(q.default,{href:o,css:D.notificationLink,children:e}):null,n||"string"!=typeof o?null:(0,t.jsx)("a",{css:D.notificationLink,href:o,children:e})]}),children:(0,t.jsxs)("div",{onClick:()=>{r&&(0,E.track)(z.events.NOTIFICATION_ITEM_CLICKED,{seen:i})},css:D.root,"data-has-link":r,"data-last-item":a,children:[(0,t.jsx)("div",{css:D.content,children:e}),r?(0,t.jsxs)("div",{css:D.indicatorLink,children:[!i&&(0,t.jsx)("div",{css:D.indicator}),(0,t.jsx)(P.default,{color:U.tokens.foregroundDimmest})]}):null]})})}var G=e.i(674918),H=e.i(967629),Y=e.i(714165),Z=e.i(960178),K=e.i(257811),Q=e.i(625484);let X=(0,H.css)([B.rcss.position.relative,B.rcss.display.flex,{flex:"1 1 auto"}]),ee=(0,W.cssRecord)({content:X,contentContainer:[X,B.rcss.rowWithGap(12),B.rcss.align.center],itemText:[B.rcss.pb(4),{overflowWrap:"break-word"}],itemTextNewFollowerWrapper:[B.rcss.display.flex,B.rcss.flex.column],usernameLink:[B.rcss.borderRadius(4),B.rcss.focusRing,{":focus":{outlineOffset:0}}],userAvatarLink:[B.rcss.width(32),B.rcss.height(32),B.rcss.minWidth(32),B.rcss.minHeight(32),B.rcss.borderRadius(16),B.rcss.focusRing,{":focus":{outlineOffset:0}}]}),et=({seen:e,url:i,as:o,href:n,text:a,timeCreated:r,creator:s,invite:c,orgInvite:l,isLastItem:m=!1,...d})=>{let u,f;return i&&((u=new URL("/"===i[0]?`https://replit.com${i}`:i)).searchParams.set("from","notifications"),f=(i.startsWith("http")&&"https:"===u.protocol?u.protocol+"//"+u.hostname:"")+u.pathname+u.search+u.hash),(0,t.jsx)(J,{seen:e,compact:d.compact,isLastItem:m,as:o,href:n||f,children:(0,t.jsxs)("div",{css:ee.contentContainer,children:[s?(0,t.jsx)(q.default,{...(0,G.userLinkProps)(s),css:ee.userAvatarLink,children:(0,t.jsx)(Y.Avatar,{size:32,src:s.image,username:s.username,fullName:s.fullName})}):null,(0,t.jsxs)(Q.View,{shrink:!0,children:[(0,t.jsxs)("div",{css:ee.itemText,children:[s?(0,t.jsx)(q.default,{...(0,G.userLinkProps)(s),css:ee.usernameLink,children:s.username}):null," ",a,c?(0,t.jsx)(t.Fragment,{children:` ${c.team.displayName}. Click here to join`}):null,l?(0,t.jsx)(t.Fragment,{children:` the ${l.organization.name} workspace. Click here to join`}):null]}),(0,t.jsx)(Z.Text,{variant:"small",color:"dimmer",multiline:!1,children:(0,t.jsx)(K.Timestamp,{date:r})})]})]})})},ei=({notification:e,isLastItem:i,setAsSeen:o,...n})=>{if("ReplCommentCreatedNotification"===e.__typename||"ReplCommentReplyCreatedNotification"===e.__typename||"ReplCommentMentionNotification"===e.__typename){let a={ReplCommentCreatedNotification:"commented on your repl",ReplCommentReplyCreatedNotification:"replied to your comment on your repl",ReplCommentMentionNotification:"mentioned you in your repl"}[e.__typename];return(0,t.jsx)(et,{isLastItem:i,text:a||void 0,seen:o||e.seen,compact:n.compact,timeCreated:e.timeCreated,creator:e.creator||void 0})}if("BasicNotification"===e.__typename)return(0,t.jsx)(et,{isLastItem:i,text:e.text||void 0,seen:o||e.seen,compact:n.compact,timeCreated:e.timeCreated,url:e.url});if("MentionedInPostNotification"===e.__typename)return(0,t.jsx)(et,{isLastItem:i,text:"mentioned you in their post",creator:e.creator||void 0,seen:o||e.seen,compact:n.compact,timeCreated:e.timeCreated,url:e.url});if("MentionedInCommentNotification"===e.__typename)return(0,t.jsx)(et,{isLastItem:i,text:"mentioned you in their comment",creator:e.creator||void 0,seen:o||e.seen,compact:n.compact,timeCreated:e.timeCreated,url:e.url});if("RepliedToPostNotification"===e.__typename)return(0,t.jsx)(et,{isLastItem:i,text:"replied to your post",creator:e.creator||void 0,seen:o||e.seen,compact:n.compact,timeCreated:e.timeCreated,url:e.url});if("RepliedToCommentNotification"===e.__typename)return(0,t.jsx)(et,{isLastItem:i,text:"replied to your comment",creator:e.creator||void 0,seen:o||e.seen,compact:n.compact,timeCreated:e.timeCreated,url:e.url});if("AnswerAcceptedNotification"===e.__typename)return(0,t.jsx)(et,{isLastItem:i,text:"accepted your answer (you earned 5 cycles!)",creator:e.creator||void 0,seen:o||e.seen,compact:n.compact,timeCreated:e.timeCreated,url:e.url});if("WarningNotification"===e.__typename)return(0,t.jsx)(et,{isLastItem:i,text:"You have been warned by a moderator.  Click here to learn more.",seen:o||e.seen,compact:n.compact,timeCreated:e.timeCreated,url:e.url});if("TeamInviteNotification"===e.__typename)return(0,t.jsx)(et,{isLastItem:i,text:"You have been invited to join",invite:e.invite||void 0,seen:o||e.seen,compact:n.compact,timeCreated:e.timeCreated,url:e.url});if("TeamOrganizationInviteNotification"===e.__typename)return(0,t.jsx)(et,{isLastItem:i,text:"You have been invited to join",orgInvite:e.invite||void 0,seen:o||e.seen,compact:n.compact,timeCreated:e.timeCreated,url:e.url});if("MultiplayerJoinedEmailNotification"===e.__typename||"MultiplayerJoinedLinkNotification"===e.__typename||"MultiplayerInvitedNotification"===e.__typename||"MultiplayerOverlimitNotification"===e.__typename)return(0,t.jsx)(et,{isLastItem:i,text:e.text?e.text.split(" ").slice(1).join(" "):"",creator:e.creator||void 0,seen:o||e.seen,compact:n.compact,timeCreated:e.timeCreated,url:e.url});if("TeamTemplateSubmittedNotification"===e.__typename||"TeamTemplateReviewedStatusNotification"===e.__typename)return(0,t.jsx)(et,{isLastItem:i,text:e.text,seen:o||e.seen,compact:n.compact,timeCreated:e.timeCreated,url:e.repl?.url||e.url});if("NewFollowerNotification"===e.__typename){let a=e.creator?(0,G.userLinkProps)(e.creator):null;return(0,t.jsx)(J,{seen:o||e.seen,compact:n.compact,as:a?.as,href:a?.href,isLastItem:i,children:(0,t.jsxs)("div",{css:ee.contentContainer,children:[(0,t.jsx)(Y.Avatar,{size:32,src:e.creator?.image??null,username:e.creator?.username??"",fullName:e.creator?.fullName}),(0,t.jsx)("div",{css:ee.content,children:(0,t.jsx)("div",{css:ee.itemTextNewFollowerWrapper,children:(0,t.jsxs)("div",{css:ee.itemText,children:[(0,t.jsxs)("div",{children:[e.creator?(0,t.jsx)(q.default,{...(0,G.userLinkProps)(e.creator),children:e.creator.username}):"[deleted]"," started following you"]}),(0,t.jsx)(Z.Text,{variant:"small",color:"dimmer",multiline:!1,children:(0,t.jsx)(K.Timestamp,{date:e.timeCreated})})]})})})]})})}return"OrgUpgradeRequestReviewedNotification"===e.__typename?(0,t.jsx)(et,{creator:e.creator||void 0,isLastItem:i,text:e.isAccepted?"approved your request to join the workspace":"rejected your request to join the workspace",seen:o||e.seen,compact:n.compact,timeCreated:e.timeCreated,url:e.url}):"EgressLimitNotification"===e.__typename?(0,t.jsx)(et,{creator:void 0,isLastItem:i,text:"egress_reached_limit"===e.variant?"You have reached your data transfer limit for the month. Your Apps' data transfer is being throttled, and will be shut off. Upgrade your plan or purchase additional data transfer with Cycles to resume normal speeds.":`You have used ${e.percentage}% of your monthly data transfer limit. If you reach the limit, your Apps data transfer will be throttled and eventually shut off. Upgrade your plan or purchase additional data transfer with Cycles to prevent disruptions to your Apps.`,seen:o||e.seen,compact:n.compact,timeCreated:e.timeCreated,url:e.url}):null},eo={},en=o.gql`
    mutation MarkNotificationsAsSeen($ids: [Int!]) {
  markNotificationsAsSeen(ids: $ids)
}
    `;var ea=e.i(935267);let er=e=>{var t;let o,[n,a]=(0,i.useState)([]),{count:r,setUnreadCount:s}=(0,ea.default)(),c=e.notificationIds.filter(e=>-1===n.indexOf(e)),[l,{data:m}]=(t={variables:{ids:c}},o={...eo,...t},A.useMutation(en,o));return(0,i.useEffect)(()=>{0!==c.length&&(a([...n,...c]),l())},[c,l]),(0,i.useEffect)(()=>{m?.markNotificationsAsSeen&&s(Math.max(0,r-m.markNotificationsAsSeen))},[m,s]),null};var es=e.i(428596),ec=e.i(140487),el=e.i(721321),em=e.i(269848);let ed=()=>(0,t.jsx)(Q.View,{p:64,align:"center",children:(0,t.jsx)(em.default,{})});var eu=e.i(80116);e.s(["default",0,e=>{var o,n;let a,r,[s,c]=(0,i.useState)(!0),{count:l}=(0,ea.default)(),[m,d]=(0,i.useState)(!1),{data:u,loading:f,fetchMore:p}=(o={fetchPolicy:"cache-and-network",ssr:!1,notifyOnNetworkStatusChange:!0,variables:{...e.count?{count:e.count}:{},...s?{seen:!1}:{}}},a={...k,...o},R.useQuery(L,a)),x=(u?.notifications?.items??[]).filter(e=>"AnnotationNotification"!==e.__typename&&"ThreadNotification"!==e.__typename),[N]=(n={onCompleted(){d(!1)},optimisticResponse:{__typename:"RootMutationType",markAllNotificationsAsSeen:{__typename:"CurrentUser",id:u?.currentUser?.id,notificationCount:0}}},r={...S,...n},A.useMutation(O,r)),g=(0,es.useIdSeed)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(Q.View,{row:!0,gap:16,justify:"space-between",clsx:[eu.default.list,{[eu.default.compact]:e.compact}],children:[(0,t.jsx)("div",{clsx:[eu.default.buttonGroupContainer,{[eu.default.compact]:e.compact&&l>0}],children:(0,t.jsxs)(el.ButtonGroup,{name:g("visibility"),value:s.toString(),primary:!0,onChange:()=>c(!s),row:!0,stretch:!0,children:[(0,t.jsx)(el.ButtonGroupItem,{id:g("true"),value:"true",text:"Unread"}),(0,t.jsx)(el.ButtonGroupItem,{id:g("false"),value:"false",text:"All"})]})}),l>0&&(0,t.jsx)(ec.Button,{text:m?"Marking all...":"Mark as read",disabled:f,iconLeft:(0,t.jsx)($.default,{}),stretch:!0,onClick:()=>{d(!0),N()}})]}),(0,t.jsxs)(Q.View,{children:[!f||u&&u.notifications?null:(0,t.jsx)(ed,{}),0===x.length&&(0,t.jsx)("div",{clsx:[eu.default.emptyStateContainer,{[eu.default.compact]:e.compact}],children:(0,t.jsx)(Q.View,{clsx:[eu.default.emptyState,{[eu.default.compact]:e.compact}],children:(0,t.jsx)(Z.Text,{variant:"text",color:"dimmer",multiline:!1,css:B.rcss.textAlign.center,children:s?"You're all caught up!":"No notifications"})})}),x.length?(0,t.jsxs)(t.Fragment,{children:[x.map((i,o)=>(0,t.jsx)(ei,{compact:e.compact,notification:i,isLastItem:o===x.length-1,setAsSeen:!0},i.id)),e.markAsSeen&&(0,t.jsx)(er,{notificationIds:x.filter(e=>"seen"in e&&!e.seen).map(e=>e.id)})]}):null,e.loadMore&&u?.notifications.pageInfo.nextCursor?(0,t.jsx)("div",{clsx:[eu.default.loadMoreContainer,{[eu.default.compact]:e.compact}],children:(0,t.jsx)(ec.Button,{text:f?"Loading...":"Load more",onClick:()=>{f||p({variables:{after:u&&u.notifications&&!s?u.notifications.pageInfo.nextCursor:null},updateQuery:(e,t)=>{if(!t||!t.fetchMoreResult)return e;let{fetchMoreResult:i}=t,o=e?e.notifications.items:[],n={...i};return n.notifications.items=[...o,...i.notifications.items],n}})},disabled:f})}):null]})]})}],805518);var ef=e.i(750854),ep=e.i(368964),ex=e.i(712903),eN=e.i(255701),eg=e.i(195206),eh=e.i(334028),ej=e.i(612343),eC=e.i(177037),eI=e.i(596139),ev=e.i(230227),ey=e.i(956111),ew=e.i(370995),e_=e.i(341126),eT=e.i(116235),eM=e.i(119274);function eR({right:e,label:i,...o}){return(0,t.jsxs)(eM.BaseMenuItem,{textValue:i,...o,children:[(0,t.jsxs)(Q.View,{gap:6,pl:2,row:!0,align:"center",grow:!0,shrink:!0,children:[(0,t.jsx)(eT.IconProvider,{size:16,children:o.icon}),(0,t.jsx)(eM.MenuItemLabel,{children:i})]}),e??null]})}var ek=e.i(648880),eb=e.i(173703),eL=e.i(149860);function eA({count:e,onAction:i}){return(0,t.jsx)(eM.BaseMenuItem,{textValue:"Notifications",onAction:i,children:(0,t.jsxs)(Q.View,{align:"center",row:!0,gap:6,justify:"space-between",grow:!0,shrink:!0,children:[(0,t.jsxs)(Q.View,{align:"center",grow:!0,shrink:!0,row:!0,gap:6,children:[(0,t.jsx)(ek.default,{}),(0,t.jsx)(Z.Text,{children:"Notifications"})]}),e?(0,t.jsx)(eb.ShadesSurface,{clsx:eL.default.count,colorShade:"error",align:"center",justify:"center",children:(0,t.jsx)(Z.Text,{variant:"small",children:e})}):null]})})}function eS({currentUser:e,setActiveModal:i,notificationCount:o,isUnifiedPlanEnabled:n,isUnifiedPlanEnabledForAnyOrg:a,onClose:r}){let s=(0,ef.useRouter)(),c=(0,G.userLinkProps)(e),{shouldHidePersonalWorkspace:l}=(0,ev.usePersonalWorkspacesDisabled)();return(0,t.jsxs)(t.Fragment,{children:[n?(0,t.jsx)(eM.MenuItem,{label:"Settings",icon:(0,t.jsx)(eN.default,{}),onAction:()=>{(0,ey.updatePathWithQueryParams)({router:s,params:[{mode:"add",key:ew.SETTINGS_SHOW_PARAM,value:"true"}]}),r?.()}}):(0,t.jsx)(eR,{label:"Account",as:"/account",href:"/account",dataCy:"avatar-dropdown-account-link",icon:e.isMemberOfAnyOrg?(0,t.jsx)(eN.default,{}):(0,t.jsx)(Y.Avatar,{size:16,src:e.image,username:e.username,fullName:e.fullName}),right:e.userSubscriptionType===ep.UserSubscriptionTypeEnum.HackerPro?(0,t.jsxs)(Q.View,{row:!0,align:"center",gap:4,children:[(0,t.jsx)(ex.default,{size:12,color:eC.brandOrange}),(0,t.jsx)(Z.Text,{variant:"small",color:"dimmer",translate:"no",children:eI.corePlanName})]}):null}),l||n?null:(0,t.jsx)(eM.MenuItem,{label:"Profile",as:c.as,href:c.href,dataCy:"avatar-dropdown-account-link",icon:(0,t.jsx)(eh.default,{})}),(0,t.jsx)(eA,{count:o,onAction:()=>{i("notifications")}}),(0,t.jsx)(eM.Separator,{}),a?null:(0,t.jsx)(eM.MenuItem,{label:"Create Team",href:e_.newOrgLink.href,icon:(0,t.jsx)(ej.default,{})}),(0,t.jsx)(eM.MenuItem,{label:"CLUI",as:"/~/cli",href:"/~/cli",icon:(0,t.jsx)(eg.default,{})}),(0,t.jsx)(eM.Separator,{})]})}e.s(["AccountItems",()=>eS],371816),e.i(221042);var eO=e.i(222342);function e$({currentUser:e}){let{showConfirm:i}=(0,eO.default)();return(0,t.jsx)(t.Fragment,{children:null})}e.i(610357),e.s(["DevCopyUsernameItem",()=>e$],995045);var eq=e.i(625251),eP=e.i(787527),eE=e.i(399245),ez=e.i(222878),eU=e.i(735362),eW=e.i(761201),eV=e.i(519979);function eB(){return(0,t.jsx)(eM.MenuItem,{icon:(0,t.jsx)(eV.default,{}),label:"Status",href:"https://status.replit.com"})}var eD=e.i(604963);function eF({setActiveModal:e,children:i}){return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(eq.SubmenuTrigger,{children:[(0,t.jsx)(eM.BaseMenuItem,{textValue:"Help",children:(0,t.jsxs)(Q.View,{align:"center",row:!0,gap:6,justify:"space-between",grow:!0,shrink:!0,children:[(0,t.jsxs)(Q.View,{align:"center",grow:!0,shrink:!0,row:!0,gap:6,children:[(0,t.jsx)(ez.default,{}),(0,t.jsx)(Z.Text,{children:"Help"})]}),(0,t.jsx)(P.default,{size:12})]})}),(0,t.jsx)(eD.RawPopover,{offset:4,children:(0,t.jsx)(Q.View,{p:4,children:(0,t.jsxs)(eM.Menu,{"aria-label":"Help",children:[(0,t.jsx)(eB,{}),(0,t.jsx)(eM.MenuItem,{label:"Get help",icon:(0,t.jsx)(ez.default,{size:16}),onAction:()=>{e("support"),(0,E.track)(z.events.HELP_FORM_OPENED,{type:"New Help Form"})}}),(0,t.jsx)(eM.MenuItem,{icon:(0,t.jsx)(eE.default,{}),label:"Community Hub",href:eW.COMMUNITY_URL}),(0,t.jsx)(eM.MenuItem,{icon:(0,t.jsx)(eU.default,{}),label:"View updates",href:eW.LINKS_DOCS.CHANGELOG,onAction:()=>{(0,E.track)(z.events.CHANGELOG_OPENED)}}),(0,t.jsx)(eM.MenuItem,{icon:(0,t.jsx)(eP.default,{}),label:"Read the docs",href:eW.LINKS_DOCS.HOME,onAction:()=>{(0,E.track)(z.events.DOCS_OPENED,{source:"help_menu"})}}),i]})})})]})})}e.s(["HelpItem",()=>eF],344718);var eJ=e.i(442121),eG=e.i(98346),eH=e.i(294426);function eY(){let e=(0,eJ.useApolloClient)();return(0,t.jsx)(eM.MenuItem,{label:"Log out",icon:(0,t.jsx)(eG.default,{}),onAction:async()=>{await (0,eH.signOut)(e),window.location.href="/logout"}})}e.s(["LogoutItem",()=>eY],841412);var eZ=e.i(968783),eK=e.i(783509);function eQ({currentUser:e}){let i=(0,eZ.useCurrentUserStoredOrgContext)(),{switchOrg:o,loading:n}=i,{shouldHidePersonalWorkspace:a}=(0,ev.usePersonalWorkspacesDisabled)(),r="CurrentUserOrganizationConnection"===e.orgs.__typename?e.orgs.items:null,{showError:s}=(0,eO.default)(),c=(0,ef.useRouter)();return!r?.length||n?null:(0,t.jsxs)(eq.MenuSection,{children:[(0,t.jsx)(eM.MenuHeader,{text:"Switch Workspace"}),a?null:(0,t.jsx)(eR,{icon:(0,t.jsx)(Y.Avatar,{size:16,src:e.image,username:e.username}),label:"Personal",onAction:()=>{i.switchOrg({type:ep.OrgType.Personal}),c.push("/home","/~",{shallow:!1})},right:void 0===i.orgId?(0,t.jsx)($.default,{}):void 0,selected:void 0===i.orgId}),r.map(({org:e,type:n})=>(0,t.jsxs)(eM.BaseMenuItem,{textValue:e.name,onAction:()=>(e=>{if(!e.currentUserRole)return void s("Something went wrong, please try again.");o({type:ep.OrgType.Team,id:e.id,slug:e.slug,orgRole:e.currentUserRole,orgDealContext:e.dealContext});let{home:t}=(0,e_.orgLinks)({slug:e.slug});c.push(t.href,t.as)})(e),children:[(0,t.jsxs)(Q.View,{grow:!0,shrink:!0,row:!0,gap:6,align:"center",children:[(0,t.jsx)(Y.Avatar,{size:16,src:e.image??null,username:e.name,fullName:e.name}),(0,t.jsx)(Z.Text,{translate:"no",children:e.name}),n?(0,t.jsx)(Z.Text,{variant:"small",color:"dimmest",children:(0,eK.orgGroupToDisplayName)(n)}):null]}),e.id===i.orgId?(0,t.jsx)($.default,{}):null]},e.id)),(0,t.jsx)(eM.Separator,{})]})}e.s(["TeamsItem",()=>eQ],988072);var eX=e.i(131967),e0=e.i(759317),e1=e.i(393428),e6=e.i(308521),e2=e.i(703774);function e4(){let{currentTheme:e,setActiveTheme:i,isSystemTheme:o}=(0,e2.useTheme)(),n="Custom";return o?n="System":"replitDark"===e.id?n="Dark":"replitLight"===e.id&&(n="Light"),(0,t.jsxs)(eq.SubmenuTrigger,{children:[(0,t.jsx)(eM.BaseMenuItem,{textValue:"Theme",children:(0,t.jsxs)(Q.View,{align:"center",row:!0,gap:6,justify:"space-between",grow:!0,shrink:!0,children:[(0,t.jsxs)(Q.View,{align:"center",grow:!0,shrink:!0,row:!0,gap:6,children:[(0,t.jsx)(e1.default,{}),(0,t.jsx)(Z.Text,{multiline:!1,children:"Theme"})]}),(0,t.jsxs)(Q.View,{row:!0,gap:4,align:"center",children:[(0,t.jsx)(Z.Text,{color:"dimmer",children:n}),(0,t.jsx)(P.default,{size:12})]})]})}),(0,t.jsx)(eD.RawPopover,{offset:4,children:(0,t.jsx)(Q.View,{p:4,children:(0,t.jsxs)(eM.Menu,{"aria-label":"Theme",children:[(0,t.jsx)(eM.MenuItem,{label:"Light",icon:(0,t.jsx)(e6.default,{size:16}),onAction:()=>i("replitLight")}),(0,t.jsx)(eM.MenuItem,{label:"Dark",icon:(0,t.jsx)(e0.default,{size:16}),onAction:()=>i("replitDark")}),(0,t.jsx)(eM.MenuItem,{label:"System",icon:(0,t.jsx)(eX.default,{size:16}),onAction:()=>i("system")})]})})})]})}e.s(["ThemeItem",()=>e4],346606)}]);

//# debugId=4a8e4464-0213-a676-df8f-ef4889de274d
//# sourceMappingURL=e02d9ec5c9fd4634.js.map