;/*FB_PKG_DELIM*/

__d("usePolarisPageTitle.react",["useCometRouterState"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=c("useCometRouterState")(),b;if(a!=null){var d=a.main;a=a.pushViewStack;b=(d=d.route.meta)==null?void 0:d.title;if(a!=null&&a.length>0){b=(d=a[a.length-1].route.meta)==null?void 0:d.title}}return b}g["default"]=a}),98);
__d("withPolarisShell.react",["CometErrorBoundary.react","CometPlaceholder.react","PolarisGenericMobileHeader.react","PolarisHttp500UnexpectedErrorPage.react","PolarisInstagramMobileLogoTitle.react","PolarisNavBackButton.react","PolarisPageMetadata.react","PolarisShell.react","react","usePolarisPageTitle.react","usePolarisRouteConfig"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){function b(b){var e=i(24),f=c("usePolarisRouteConfig")();if(e[0]!==f){f.collapseNav;var g=f.mobileHeaderTitle,h=f.mobileHeaderVariant,k=f.pageID,l=babelHelpers.objectWithoutPropertiesLoose(f,["collapseNav","mobileHeaderTitle","mobileHeaderVariant","pageID"]);g=g;h=h;k=k;l=l;e[0]=f;e[1]=h;e[2]=k;e[3]=g;e[4]=l}else h=e[1],k=e[2],g=e[3],l=e[4];f=c("usePolarisPageTitle.react")();var m=null;if(h==="page_title"){var n;e[5]!==k?(n=j.jsx(c("PolarisNavBackButton.react"),{analyticsContext:k}),e[5]=k,e[6]=n):n=e[6];var o;e[7]!==n||e[8]!==g?(o=j.jsx(c("PolarisGenericMobileHeader.react"),{leftActions:n,title:g}),e[7]=n,e[8]=g,e[9]=o):o=e[9];m=o}else if(h==="instagram"){e[10]===Symbol["for"]("react.memo_cache_sentinel")?(n=j.jsx(c("PolarisGenericMobileHeader.react"),{title:j.jsx(c("PolarisInstagramMobileLogoTitle.react"),{isLink:!0})}),e[10]=n):n=e[10];m=n}o=(g=b.queries)==null?void 0:g.seoCrawlingPoolQuery;h=f!=null;e[11]!==k||e[12]!==h||e[13]!==f?(n=j.jsx(c("PolarisPageMetadata.react"),{id:k,skipAppTitleBreadcrumb:h,title:f}),e[11]=k,e[12]=h,e[13]=f,e[14]=n):n=e[14];e[15]!==b?(g=j.jsx(c("CometErrorBoundary.react"),{fallback:d,children:j.jsx(c("CometPlaceholder.react"),{fallback:null,children:j.jsx(a,babelHelpers["extends"]({},b))})}),e[15]=b,e[16]=g):g=e[16];e[17]!==m||e[18]!==k||e[19]!==l||e[20]!==o||e[21]!==n||e[22]!==g?(h=j.jsxs(c("PolarisShell.react"),babelHelpers["extends"]({mobileHeader:m,pageIdentifier:k},l,{seoCrawlingPoolQuery:o,children:[n,g]})),e[17]=m,e[18]=k,e[19]=l,e[20]=o,e[21]=n,e[22]=g,e[23]=h):h=e[23];return h}function d(){return j.jsx(c("PolarisHttp500UnexpectedErrorPage.react"),{})}d.displayName=d.name+" [from "+f.id+"]";return b}g["default"]=a}),98);
__d("PolarisMobilePostRoot.react",["PolarisIsLoggedIn","PolarisMobilePostPageHeader.next.react","PolarisRoutePropUtils","cr:2586","cr:2651","deferredLoadComponent","react","requireDeferredForDisplay","usePolarisCentralizedUpsellState","withPolarisShell.react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));e=h;var j=e.useEffect,k=e.c,l=c("deferredLoadComponent")(c("requireDeferredForDisplay")("PolarisRulingForMediaContentLoggedOut.next.react").__setRef("PolarisMobilePostRoot.react"));function a(a){var e,f,g=k(16),h=a.props;a=a.queries;e=((e=h.routeParams)==null?void 0:e.chaining)===!0;f=((f=h.routeProps)==null?void 0:f.is_crawler_relay)===!0;var m=c("usePolarisCentralizedUpsellState")(),n=m[1],o;g[0]!==n||g[1]!==h.routeProps.owner_id?(m=function(){n(h.routeProps.owner_id)},o=[n,h.routeProps.owner_id],g[0]=n,g[1]=h.routeProps.owner_id,g[2]=m,g[3]=o):(m=g[2],o=g[3]);j(m,o);if(g[4]!==a||g[5]!==h||g[6]!==e||g[7]!==f){o=(m=b("cr:2586")&&i.jsx(b("cr:2586"),{polarisCommentsQuery:a.polarisCommentsQuery,polarisPostRootQuery:a.polarisPostRootQuery,polarisRelatedMediaQuery:a.polarisRelatedMediaQuery,postId:h.routeProps.media_id}))!=null?m:b("cr:2651")&&i.jsx(b("cr:2651"),{hasChaining:e,isCrawler:f,polarisAYMLFollowChainingListLoggedOutQuery:a.polarisAYMLFollowChainingListLoggedOutQuery,polarisChainedPostsCrawlingPoolQuery:a.polarisChainedPostsCrawlingPoolQuery,polarisLoggedOutExploreModuleQuery:a.polarisLoggedOutExploreModuleQuery,polarisOwnerToTimelineMediaLoggedOutQuery:a.polarisOwnerToTimelineMediaLoggedOutQuery,polarisPostChainingRootQuery:a.polarisPostChainingRootQuery,polarisPostRootQuery:a.polarisPostRootQuery,postId:h.routeProps.media_id,renderAllSidecarChildren:h.routeProps.render_all_sidecar_children});g[4]=a;g[5]=h;g[6]=e;g[7]=f;g[8]=o}else o=g[8];m=o;g[9]===Symbol["for"]("react.memo_cache_sentinel")?(e=d("PolarisIsLoggedIn").isLoggedIn()&&i.jsx(c("PolarisMobilePostPageHeader.next.react"),{}),g[9]=e):e=g[9];g[10]!==h.routeProps||g[11]!==a||g[12]!==m?(f=h.routeProps.is_crawler_relay===!0&&a.polarisRulingForMediaContentLoggedOutQuery?m&&i.jsx(l,{polarisRulingForMediaContentLoggedOutQuery:a.polarisRulingForMediaContentLoggedOutQuery,postId:h.routeProps.media_id,children:m}):m,g[10]=h.routeProps,g[11]=a,g[12]=m,g[13]=f):f=g[13];g[14]!==f?(o=i.jsxs(d("PolarisRoutePropUtils").PolarisRoutePropContextProvider,{children:[e,f]}),g[14]=f,g[15]=o):o=g[15];return o}f=c("withPolarisShell.react")(a);g["default"]=f}),98);
__d("PolarisMobilePostsSection.react",["CometErrorBoundary.react","CometPlaceholder.react","IGDSBox.react","PolarisFeedContext.react","PolarisMorePostsLikeThisHeader.react","PolarisPostGlimmer.react","deferredLoadComponent","emptyFunction","react","requireDeferredForDisplay","usePolarisGetFeedContainerWidth","usePolarisGetFeedMediaWidthBasedOnReelHeight"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h,k=c("deferredLoadComponent")(c("requireDeferredForDisplay")("PolarisMobilePostPage.next.react").__setRef("PolarisMobilePostsSection.react")),l=c("deferredLoadComponent")(c("requireDeferredForDisplay")("PolarisMobileChainedPostsContainer.next.react").__setRef("PolarisMobilePostsSection.react")),m=c("deferredLoadComponent")(c("requireDeferredForDisplay")("PolarisMobileChainedMediaOwnerTimelinePosts.next.react").__setRef("PolarisMobilePostsSection.react")),n=c("deferredLoadComponent")(c("requireDeferredForDisplay")("PolarisMobileChainedMediaCrawlingPoolPosts.react").__setRef("PolarisMobilePostsSection.react"));function a(a){var b=i(26),e=a.hasChaining,f=a.isCrawler,g=a.polarisAYMLFollowChainingListLoggedOutQuery,h=a.polarisChainedPostsCrawlingPoolQuery,o=a.polarisLoggedOutExploreModuleQuery,p=a.polarisOwnerToTimelineMediaLoggedOutQuery,q=a.polarisPostChainingRootQuery,r=a.polarisPostRootQuery,s=a.postId;a=a.renderAllSidecarChildren;f=f===void 0?!1:f;var t=c("usePolarisGetFeedContainerWidth")(),u=c("usePolarisGetFeedMediaWidthBasedOnReelHeight")(!1),v;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(v=j.jsx(c("PolarisPostGlimmer.react"),{}),b[0]=v):v=b[0];b[1]!==f||b[2]!==r||b[3]!==s||b[4]!==a?(v=j.jsx(c("CometPlaceholder.react"),{fallback:v,children:j.jsx(k,{isCrawler:f,polarisPostRootQuery:r,postId:s,renderAllSidecarChildren:a})}),b[1]=f,b[2]=r,b[3]=s,b[4]=a,b[5]=v):v=b[5];var w;b[6]!==e||b[7]!==q?(w=e&&q!=null&&j.jsxs(j.Fragment,{children:[j.jsx(c("PolarisMorePostsLikeThisHeader.react"),{}),j.jsx(c("IGDSBox.react"),{marginTop:4,children:j.jsx(c("CometPlaceholder.react"),{fallback:j.jsx(c("PolarisPostGlimmer.react"),{}),children:j.jsx(l,{polarisPostChainingRootQuery:q})})})]}),b[6]=e,b[7]=q,b[8]=w):w=b[8];b[9]!==p||b[10]!==g||b[11]!==f||b[12]!==o||b[13]!==r||b[14]!==s||b[15]!==a?(e=p!=null&&g!=null&&j.jsx(c("IGDSBox.react"),{marginTop:4,children:j.jsx(c("CometPlaceholder.react"),{fallback:j.jsx(c("PolarisPostGlimmer.react"),{}),children:j.jsx(c("CometErrorBoundary.react"),{fallback:c("emptyFunction").thatReturnsNull,children:j.jsx(m,{isCrawler:f,polarisAYMLFollowChainingListLoggedOutQuery:g,polarisLoggedOutExploreModuleQuery:o,polarisOwnerToTimelineMediaLoggedOutQuery:p,polarisPostRootQuery:r,postId:s,renderAllSidecarChildren:a})})})}),b[9]=p,b[10]=g,b[11]=f,b[12]=o,b[13]=r,b[14]=s,b[15]=a,b[16]=e):e=b[16];b[17]!==h?(q=h!=null&&j.jsx(c("CometPlaceholder.react"),{fallback:j.jsx(c("PolarisPostGlimmer.react"),{}),children:j.jsx(c("CometErrorBoundary.react"),{fallback:c("emptyFunction").thatReturnsNull,children:j.jsx(n,{polarisChainedPostsCrawlingPoolQuery:h})})}),b[17]=h,b[18]=q):q=b[18];b[19]!==t||b[20]!==u||b[21]!==v||b[22]!==w||b[23]!==e||b[24]!==q?(p=j.jsxs(d("PolarisFeedContext.react").PolarisFeedContextProvider,{feedContainerWidth:t,feedMediaWidth:u,setShowEmptyFeed:c("emptyFunction"),showEmptyFeed:!1,children:[v,w,e,q]}),b[19]=t,b[20]=u,b[21]=v,b[22]=w,b[23]=e,b[24]=q,b[25]=p):p=b[25];return p}g["default"]=a}),98);