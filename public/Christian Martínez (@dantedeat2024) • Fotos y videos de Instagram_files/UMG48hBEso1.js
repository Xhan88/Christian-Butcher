;/*FB_PKG_DELIM*/

__d("PolarisDynamicExploreLoadingSpinner.react",["IGDSSpinner.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(){var a=i(1),b;a[0]===Symbol["for"]("react.memo_cache_sentinel")?(b=j.jsx(c("IGDSSpinner.react"),{position:"absolute",size:"medium"}),a[0]=b):b=a[0];return b}g["default"]=a}),98);
__d("PolarisDynamicExploreGridItemOverlay.react",["PolarisDynamicExploreMediaHelpers","PolarisPostsGridItemStatsOverlay.react","PolarisShouldHideLikeCountsWithControls","nullthrows","polarisDynamicExploreSelectors","react","usePolarisSelector","usePolarisViewer"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){var b=i(19),e=a.exploreGridQuery,f=a.exploreGridType,g=a.postId;a=c("usePolarisViewer")();var h;b[0]!==g||b[1]!==f||b[2]!==e?(h=function(a){return d("polarisDynamicExploreSelectors").getGridItemFromPostId(a,g,f,e)},b[0]=g,b[1]=f,b[2]=e,b[3]=h):h=b[3];h=c("usePolarisSelector")(h);var k,l,m,n,o;b[4]!==h||b[5]!==a?(o=c("nullthrows")(h),k=c("PolarisPostsGridItemStatsOverlay.react"),l=o.comments_disabled,m=d("PolarisShouldHideLikeCountsWithControls").shouldHideLikeCountsWithControls(a==null?void 0:a.hideLikeAndViewCounts,o.like_and_view_counts_disabled),n=d("PolarisDynamicExploreMediaHelpers").getIsVideo(o),b[4]=h,b[5]=a,b[6]=k,b[7]=l,b[8]=m,b[9]=n,b[10]=o):(k=b[6],l=b[7],m=b[8],n=b[9],o=b[10]);b[11]!==k||b[12]!==l||b[13]!==m||b[14]!==n||b[15]!==o.comment_count||b[16]!==o.like_count||b[17]!==o.view_count?(h=j.jsx(k,{commentsDisabled:l,hideLikes:m,isVideo:n,numComments:o.comment_count,numPreviewLikes:o.like_count,videoViews:o.view_count}),b[11]=k,b[12]=l,b[13]=m,b[14]=n,b[15]=o.comment_count,b[16]=o.like_count,b[17]=o.view_count,b[18]=h):h=b[18];return h}g["default"]=a}),98);
__d("PolarisDynamicExploreGridItem.react",["CometErrorBoundary.react","IGDSBox.react","IGDSText.react","PolarisConfig","PolarisDynamicExploreGridItemOverlay.react","PolarisDynamicExploreMediaHelpers","PolarisFastLink.react","PolarisGridItemVideoPreview.react","PolarisMediaConstants","PolarisMediaTypes","PolarisPhoto.react","PolarisPostsGridQEHelpers","PolarisReactRedux.react","PolarisSizing","PolarisUA","PolarisViewpointReact.react","getPolarisVideoSourceByVersions","nullthrows","polarisDynamicExploreSelectors","qex","react","stylex","usePolarisDisplayProperties"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));b=i;b.useCallback;var k=b.useEffect,l=b.useState,m=b.c,n={oneByTwoPlaceholder:{paddingBottom:"x1hgrsv6","@media (min-width: 736px)_paddingBottom":"x1azhor3",$$css:!0},oneByTwoPlaceholder4px:{paddingBottom:"x1hgrsv6","@media (min-width: 736px)_paddingBottom":"xw0xz5u",$$css:!0},videoPreviewWrapper:{paddingBottom:"xs9ks74",$$css:!0},videoPreviewWrapper28px:{"@media (min-width: 736px)_paddingBottom":"x1azhor3",$$css:!0},videoPreviewWrapper4px:{"@media (min-width: 736px)_paddingBottom":"xw0xz5u",$$css:!0}};function a(a){var b=m(56),e=a.constructedLink,f=a.enablePostCaptionsInGrid,g=a.exploreGridQuery,i=a.exploreGridType,p=a.id,q=a.onClick,r=a.onMediaRendered,s=a.size;a=a.viewpointActions;f=f===void 0?!1:f;var t=l(!1),u=t[0],v=t[1];t=l(!1);var w=t[0],x=t[1];t=l(!1);var y=t[0],z=t[1];b[0]!==p||b[1]!==i||b[2]!==g?(t=function(a){return d("polarisDynamicExploreSelectors").getGridItemFromPostId(a,p,i,g)},b[0]=p,b[1]=i,b[2]=g,b[3]=t):t=b[3];t=c("nullthrows")(d("PolarisReactRedux.react").useSelector(t));var A=d("PolarisDynamicExploreMediaHelpers").getSrcSet(t),B=t.media_type===d("PolarisMediaConstants").MediaTypes.VIDEO,C=c("getPolarisVideoSourceByVersions")(t.video_versions,[d("PolarisMediaTypes").MediaVersionType.VIDEO_480_HIGH,d("PolarisMediaTypes").MediaVersionType.VIDEO_480_LOW]),D;b[4]!==r||b[5]!==p?(D=function(a,b){r&&r(p,b)},b[4]=r,b[5]=p,b[6]=D):D=b[6];D=D;var E=c("usePolarisDisplayProperties")();E=E.viewportWidth;E=E>d("PolarisSizing").MEDIUM_SCREEN_MIN;var F;b[7]!==u||b[8]!==y||b[9]!==w?(F=d("PolarisUA").isDesktop()&&(u&&!y||w),b[7]=u,b[8]=y,b[9]=w,b[10]=F):F=b[10];u=F;b[11]!==a||b[12]!==p?(y={action:a,id:p},b[11]=a,b[12]=p,b[13]=y):y=b[13];var G=d("PolarisViewpointReact.react").useViewpoint(y);b[14]===Symbol["for"]("react.memo_cache_sentinel")?(w=function(){z(!1)},b[14]=w):w=b[14];var H=w;F=d("PolarisDynamicExploreMediaHelpers").getPostIcon(t);a=d("PolarisPostsGridQEHelpers").getMarginForPostsGridItems();b[15]!==G.current?(y=function(){var a=G.current;if(!a)return function(){};a.addEventListener("keyup",H);return function(){a.removeEventListener("keyup",H)}},b[15]=G.current,b[16]=y):y=b[16];b[17]!==G?(w=[H,G],b[17]=G,b[18]=w):w=b[18];k(y,w);y=f&&t.caption!=null;w=c("IGDSBox.react");f="dynamic-explore-grid-item";f="block";var I="relative",J="100%",K=c("PolarisFastLink.react"),L;b[19]===Symbol["for"]("react.memo_cache_sentinel")?(L="x4gyw5p",b[19]=L):L=b[19];var M;b[20]===Symbol["for"]("react.memo_cache_sentinel")?(M=function(){return v(!1)},b[20]=M):M=b[20];var N;b[21]!==q?(N=function(a){a.detail===1&&z(!0),q&&q(a)},b[21]=q,b[22]=N):N=b[22];var O,P,Q,R;b[23]===Symbol["for"]("react.memo_cache_sentinel")?(O=function(){return v(!0)},P=function(){return x(!0)},Q=function(){return x(!1)},R=d("PolarisUA").isDesktop()&&d("PolarisConfig").isLoggedIn(),b[23]=O,b[24]=P,b[25]=Q,b[26]=R):(O=b[23],P=b[24],Q=b[25],R=b[26]);B=B&&s===d("PolarisDynamicExploreMediaHelpers").GRID_ITEM_SIZE.ONE_BY_TWO&&C!=null&&c("qex")._("35")===!0?j.jsx("div",{className:(h||(h=c("stylex")))([n.videoPreviewWrapper,a===28&&n.videoPreviewWrapper28px,a===4&&n.videoPreviewWrapper4px]),children:j.jsx("div",{className:"x5yr21d x10l6tqk x17qophe x13vifvy xh8yej3",children:j.jsx(c("PolarisGridItemVideoPreview.react"),{coverPhoto:t==null?void 0:(B=t.image_versions2)==null?void 0:(B=B.additional_candidates)==null?void 0:(B=B.first_frame)==null?void 0:B.url,videoID:p,videoSrc:C})})}):j.jsx(c("PolarisPhoto.react"),{accessibilityCaption:d("PolarisDynamicExploreMediaHelpers").getAccessibilityCaption(t),caption:d("PolarisDynamicExploreMediaHelpers").getPostCaption(t),onPhotoRendered:D,placeholderClassName:(h||(h=c("stylex")))(s===d("PolarisDynamicExploreMediaHelpers").GRID_ITEM_SIZE.ONE_BY_TWO&&a===28&&n.oneByTwoPlaceholder,s===d("PolarisDynamicExploreMediaHelpers").GRID_ITEM_SIZE.ONE_BY_TWO&&a===4&&n.oneByTwoPlaceholder4px),rich:!0,src:c("nullthrows")(A[0]).src,srcSet:A});b[27]!==F||b[28]!==E?(C=F&&j.jsx("div",{className:"xuk3077 x1ey2m1c x9f619 x78zum5 xds687c xdt5ytf x2lah0s x1nhvcw1 x1ok221b x1t4t16n xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x47corl x10l6tqk x17qophe x13vifvy x11njtxf x1rxg9gp x11sgtky xsybdxg x1bzgcud",children:j.jsx(F.icon,{alt:F.alt,color:"ig-stroke-on-media",shadow:!0,size:E?24:18})}),b[27]=F,b[28]=E,b[29]=C):C=b[29];b[30]!==u||b[31]!==g||b[32]!==i||b[33]!==p?(D=u&&j.jsx(c("CometErrorBoundary.react"),{fallback:o,children:j.jsx(c("PolarisDynamicExploreGridItemOverlay.react"),{exploreGridQuery:g,exploreGridType:i,postId:p})}),b[30]=u,b[31]=g,b[32]=i,b[33]=p,b[34]=D):D=b[34];if(b[35]!==y||b[36]!==t){a=y&&j.jsx("div",{className:"x1s85apg",children:j.jsx(c("IGDSText.react").Footnote,{elementType:"h2",maxLines:1,zeroMargin:!0,children:(s=t.caption)==null?void 0:s.text})});b[35]=y;b[36]=t;b[37]=a}else a=b[37];b[38]!==K||b[39]!==L||b[40]!==e||b[41]!==M||b[42]!==N||b[43]!==O||b[44]!==P||b[45]!==Q||b[46]!==R||b[47]!==B||b[48]!==C||b[49]!==D||b[50]!==a?(A=j.jsxs(K,{className:L,href:e,onBlur:M,onClick:N,onFocus:O,onMouseEnter:P,onMouseLeave:Q,shouldOpenModal:R,children:[B,C,D,a]}),b[38]=K,b[39]=L,b[40]=e,b[41]=M,b[42]=N,b[43]=O,b[44]=P,b[45]=Q,b[46]=R,b[47]=B,b[48]=C,b[49]=D,b[50]=a,b[51]=A):A=b[51];b[52]!==w||b[53]!==G||b[54]!==A?(F=j.jsx(w,{containerRef:G,"data-testid":void 0,display:f,position:I,width:J,children:A}),b[52]=w,b[53]=G,b[54]=A,b[55]=F):F=b[55];return F}function o(){return null}g["default"]=a}),98);
__d("PolarisPPRLoggedDynamicExploreGridItem",["PolarisDynamicExploreGridItem.react","polarisWithPPRLogging"],(function(a,b,c,d,e,f,g){"use strict";a=c("polarisWithPPRLogging")(c("PolarisDynamicExploreGridItem.react"));g["default"]=a}),98);
__d("PolarisDynamicExploreSectionalItem.react",["IGDSBox.react","PolarisDynamicExploreMediaHelpers","PolarisPPRLoggedDynamicExploreGridItem","PolarisPostsGridQEHelpers","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||(i=d("react"))).c,k=i,l={baseItem:{alignItems:"x1qjc9v5",borderTopWidth:"x972fbf",borderEndWidth:"xcfux6l",borderBottomWidth:"x1qhh985",borderStartWidth:"xm0m39n",boxSizing:"x9f619",display:"x1lliihq",flexDirection:"xdt5ytf",flexShrink:"x2lah0s","float":"xrbpyxo",marginTop:"x1a7h2tk",marginEnd:"x14miiyz",marginBottom:"xat24cr",marginStart:"x1mh8g0r",paddingTop:"xexx8yu",paddingEnd:"x4uap5",paddingBottom:"x18d9i69",paddingStart:"xkhd6sd",position:"x1n2onr6",verticalAlign:"x11njtxf",width:"x1bfs520",$$css:!0},item:{"@media (min-width: 736px)_marginTop":"xph46j","@media (min-width: 736px)_marginEnd":"x1wrihxl","@media (min-width: 736px)_marginBottom":"x1xo4fhm","@media (min-width: 736px)_marginStart":"x1bzgcud","@media (min-width: 736px)_width":"x15uqtui",$$css:!0},item4px:{"@media (min-width: 736px)_marginTop":"xph46j","@media (min-width: 736px)_marginEnd":"x9i3mqj","@media (min-width: 736px)_marginBottom":"xcghwft","@media (min-width: 736px)_marginStart":"x1bzgcud","@media (min-width: 736px)_width":"xhdunbi",$$css:!0},itemLeft:{"float":"xrbpyxo",$$css:!0},itemRight:{"float":"x1guec7k",$$css:!0},oneByTwoItem:{width:"x1bfs520","@media (min-width: 736px)_width":"x15uqtui",$$css:!0},oneByTwoItem4px:{width:"x1bfs520","@media (min-width: 736px)_width":"xhdunbi",$$css:!0},twoByTwoItem:{width:"xgczaz5","@media (min-width: 736px)_width":"xibe6o0",$$css:!0},twoByTwoItem4px:{width:"xgczaz5","@media (min-width: 736px)_width":"x1rzo0p5",$$css:!0}};function a(a){var b=j(53),e=a.analyticsContext,f=a.enablePostCaptionsInGrid,g=a.exploreGridQuery,i=a.exploreGridType,m=a.isVisible,n=a.logGridItemImpression,o=a.mediaLinkBuilder,p=a.onGridItemClick;a=a.sectionalItem;var q=a.layout_content,r=a.layout_type;b[0]!==p?(a=function(a){return function(b){p&&p(b,a,a.row,a.column)}},b[0]=p,b[1]=a):a=b[1];var s=a;b[2]!==o?(a=function(a){return!o?null:o(a)},b[2]=o,b[3]=a):a=b[3];var t=a;b[4]!==n?(a=function(a){var b=a.item;a=a.size;return n!=null?[n(b,a)]:[]},b[4]=n,b[5]=a):a=b[5];var u=a,v,w,x;if(b[6]!==r||b[7]!==q||b[8]!==t||b[9]!==s||b[10]!==u||b[11]!==e||b[12]!==f||b[13]!==g||b[14]!==i||b[15]!==m||b[16]!==o){a=d("PolarisDynamicExploreMediaHelpers").getGridItemPlacement(r);var y=a.position;a=a.size;var z=q.fill_items,A=q.primary_item;z=z;var B;b[23]===Symbol["for"]("react.memo_cache_sentinel")?(B=d("PolarisPostsGridQEHelpers").getMarginForPostsGridItems(),b[23]=B):B=b[23];v=B;B=c("IGDSBox.react");w="block";x="relative";y=A!=null&&k.jsx("div",{className:(h||(h=c("stylex")))(l.baseItem,v===28&&l.item,v===4&&l.item4px,a===d("PolarisDynamicExploreMediaHelpers").GRID_ITEM_SIZE.ONE_BY_TWO&&v===28&&l.oneByTwoItem,a===d("PolarisDynamicExploreMediaHelpers").GRID_ITEM_SIZE.ONE_BY_TWO&&v===4&&l.oneByTwoItem4px,a===d("PolarisDynamicExploreMediaHelpers").GRID_ITEM_SIZE.TWO_BY_TWO&&v===28&&l.twoByTwoItem,a===d("PolarisDynamicExploreMediaHelpers").GRID_ITEM_SIZE.TWO_BY_TWO&&v===4&&l.twoByTwoItem4px,y===d("PolarisDynamicExploreMediaHelpers").GRID_ITEM_POSITION.LEFT&&l.itemLeft,y===d("PolarisDynamicExploreMediaHelpers").GRID_ITEM_POSITION.RIGHT&&l.itemRight),children:k.jsx(c("PolarisPPRLoggedDynamicExploreGridItem"),{analyticsContext:e,constructedLink:t(A),enablePostCaptionsInGrid:f,exploreGridQuery:g,exploreGridType:i,id:d("PolarisDynamicExploreMediaHelpers").getPostId(A),isGridView:!0,isVisible:m,mediaLinkBuilder:o,onClick:s(A),size:a,viewpointActions:u({item:A,size:a})})});b[6]=r;b[7]=q;b[8]=t;b[9]=s;b[10]=u;b[11]=e;b[12]=f;b[13]=g;b[14]=i;b[15]=m;b[16]=o;b[17]=v;b[18]=z;b[19]=B;b[20]=w;b[21]=x;b[22]=y}else v=b[17],z=b[18],B=b[19],w=b[20],x=b[21],y=b[22];if(b[24]!==v||b[25]!==e||b[26]!==t||b[27]!==g||b[28]!==i||b[29]!==m||b[30]!==o||b[31]!==s||b[32]!==r||b[33]!==u||b[34]!==z){b[36]!==v||b[37]!==e||b[38]!==t||b[39]!==g||b[40]!==i||b[41]!==m||b[42]!==o||b[43]!==s||b[44]!==r||b[45]!==u?(A=function(a){return k.jsx("div",{className:(h||(h=c("stylex")))(l.baseItem,v===28&&l.item,v===4&&l.item4px),children:k.jsx(c("PolarisPPRLoggedDynamicExploreGridItem"),{analyticsContext:e,constructedLink:t(a),exploreGridQuery:g,exploreGridType:i,id:d("PolarisDynamicExploreMediaHelpers").getPostId(a),isGridView:!0,isVisible:m,mediaLinkBuilder:o,onClick:s(a),size:d("PolarisDynamicExploreMediaHelpers").getGridFillItemsSize(r),viewpointActions:u({item:a,size:d("PolarisDynamicExploreMediaHelpers").GRID_ITEM_SIZE.ONE_BY_ONE})})},a.id)},b[36]=v,b[37]=e,b[38]=t,b[39]=g,b[40]=i,b[41]=m,b[42]=o,b[43]=s,b[44]=r,b[45]=u,b[46]=A):A=b[46];a=z.map(A);b[24]=v;b[25]=e;b[26]=t;b[27]=g;b[28]=i;b[29]=m;b[30]=o;b[31]=s;b[32]=r;b[33]=u;b[34]=z;b[35]=a}else a=b[35];b[47]!==B||b[48]!==w||b[49]!==x||b[50]!==y||b[51]!==a?(q=k.jsxs(B,{display:w,position:x,children:[y,a]}),b[47]=B,b[48]=w,b[49]=x,b[50]=y,b[51]=a,b[52]=q):q=b[52];return q}g["default"]=a}),98);
__d("PolarisDynamicExploreGrid.react",["PolarisDynamicExploreLoadingSpinner.react","PolarisDynamicExploreSectionalItem.react","PolarisErrorRetrySection.react","PolarisGenericVirtualFeed.react","PolarisSizeCache","PolarisUA","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||(i=d("react"))).c,k=i;b=800;var l=1,m=1,n=1.5,o=6,p={list:{display:"x78zum5",flexDirection:"xdt5ytf",marginEnd:"xwrv7xz",marginLeft:null,marginRight:null,position:"x1n2onr6","@media (min-width: 736px)_marginTop":"xph46j","@media (min-width: 736px)_marginEnd":"xfcsdxf","@media (min-width: 736px)_marginBottom":"xsybdxg","@media (min-width: 736px)_marginStart":"x1bzgcud",$$css:!0},listLoggedOut:{display:"x78zum5",flexDirection:"xdt5ytf",marginEnd:"xwrv7xz",marginLeft:null,marginRight:null,position:"x1n2onr6",$$css:!0}},q=new(c("PolarisSizeCache"))({estimatedSize:b});function a(a){var b=j(24),e=a.analyticsContext,f=a.enablePostCaptionsInGrid,g=a.exploreGridQuery,i=a.exploreGridType,r=a.hasNextPage,s=a.isFetching,t=a.isLoggedOut,u=a.logGridItemImpression,v=a.mediaLinkBuilder,w=a.onGridItemClick,x=a.onNextPage,y=a.onRetry,z=a.sectionalItems;a=t===void 0?!1:t;b[0]!==w?(t=function(a){return function(b,c,d,e){w&&w(b,c,a,d,e)}},b[0]=w,b[1]=t):t=b[1];var A=t;b[2]!==z||b[3]!==e||b[4]!==f||b[5]!==g||b[6]!==i||b[7]!==u||b[8]!==v||b[9]!==A?(t=function(a){var b=a.index;a=a.isVisible;var d=z[b];return k.jsx(c("PolarisDynamicExploreSectionalItem.react"),{analyticsContext:e,enablePostCaptionsInGrid:f,exploreGridQuery:g,exploreGridType:i,isVisible:a,logGridItemImpression:u,mediaLinkBuilder:v,onGridItemClick:A(d),sectionalItem:d},b)},b[2]=z,b[3]=e,b[4]=f,b[5]=g,b[6]=i,b[7]=u,b[8]=v,b[9]=A,b[10]=t):t=b[10];t=t;if(z.length===0){if(s){var B;b[11]===Symbol["for"]("react.memo_cache_sentinel")?(B=k.jsx(c("PolarisDynamicExploreLoadingSpinner.react"),{}),b[11]=B):B=b[11];return B}b[12]!==y?(B=k.jsx(c("PolarisErrorRetrySection.react"),{onRetry:y}),b[12]=y,b[13]=B):B=b[13];return B}y=a?p.listLoggedOut:p.list;b[14]!==y?(B=(h||(h=c("stylex")))(y),b[14]=y,b[15]=B):B=b[15];b[16]!==e||b[17]!==B||b[18]!==r||b[19]!==s||b[20]!==z||b[21]!==x||b[22]!==t?(a=k.jsx(c("PolarisGenericVirtualFeed.react"),{allowSampledScrollLogging:!0,analyticsContext:e,className:B,"data-testid":void 0,enablePrefetch:d("PolarisUA").isMobile()!==!0,enablePriorityFetching:!1,hasNextPage:r,initialRenderCount:l,isFetching:s,items:z,nextPageThreshold:m,onNextPage:x,overscanCount:o,prefetchNextPageThreshold:n,renderFeedItem:t,sizeCache:q,visibleCount:z.length}),b[16]=e,b[17]=B,b[18]=r,b[19]=s,b[20]=z,b[21]=x,b[22]=t,b[23]=a):a=b[23];return a}g["default"]=a}),98);
__d("PolarisDynamicExplorePageContentWrapper.react",["CometErrorBoundary.react","PolarisNavigationLayoutContext","PolarisSearchResultDisplayTypes","PolarisUA","cr:4474","cr:6698","react","stylex","usePolarisIsOnExplorePage"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||(i=d("react"))).c,k=i,l={root:{display:"x78zum5",flexDirection:"xdt5ytf",flexGrow:"x1iyjqo2",marginTop:"xdj266r",marginEnd:"xkrivgy",marginBottom:"x4n8cb0",marginStart:"x1gryazu",maxWidth:"x1fawyso",width:"xh8yej3","@media (max-width: 735px)_backgroundColor":"x19b80pe","@media (max-width: 735px)_marginBottom":"xhae0no","@media (min-width: 736px)_boxSizing":"xmjrnx3","@media (min-width: 736px)_paddingTop":"x103t36t","@media (min-width: 736px)_paddingEnd":"x16mfq2j","@media (min-width: 736px)_paddingBottom":"x1e49onv","@media (min-width: 736px)_paddingStart":"x7flfwp","@media (min-width: 736px)_width":"x1ugxg0y",$$css:!0},rootDesktop:{"@media (max-width: 735px)_paddingTop":"x1oqrbt2","@media (min-width: 736px)_paddingTop":"xgzdhx4",$$css:!0}};function a(a){var e=j(11),f=a.children;a=a.pageId;var g=d("PolarisNavigationLayoutContext").usePolarisNavigationLayoutContext();g=g.navigationPosition;g=c("usePolarisIsOnExplorePage")()&&d("PolarisUA").isDesktop()&&g==="bottom";var i;e[0]===Symbol["for"]("react.memo_cache_sentinel")?(i=(h||(h=c("stylex")))(l.root,d("PolarisUA").isDesktop()&&l.rootDesktop),e[0]=i):i=e[0];var m;e[1]!==g||e[2]!==a?(m=g&&b("cr:4474")!=null&&k.jsx(b("cr:4474"),{analyticsContext:a,searchBoxOnExplore:!0,useHistory:!1}),e[1]=g,e[2]=a,e[3]=m):m=e[3];var n;e[4]!==g||e[5]!==a?(n=g&&b("cr:6698")!=null&&k.jsx(c("CometErrorBoundary.react"),{children:k.jsx(b("cr:6698"),{analyticsContext:a,resultDisplayType:c("PolarisSearchResultDisplayTypes").Popover})}),e[4]=g,e[5]=a,e[6]=n):n=e[6];e[7]!==m||e[8]!==n||e[9]!==f?(g=k.jsxs("div",{className:i,"data-testid":void 0,children:[m,n,f]}),e[7]=m,e[8]=n,e[9]=f,e[10]=g):g=e[10];return g}g["default"]=a}),98);
__d("PolarisKeywordExploreStrings",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a=h._("__JHASH__CdKcEifxFn-__JHASH__");b=h._("__JHASH__p3XTyV2187D__JHASH__");c=h._("__JHASH__olQZtTO0Zl4__JHASH__");d=h._("__JHASH__IEYBqphYb44__JHASH__");e=h._("__JHASH__Uu4Dg54Se_q__JHASH__");f=h._("__JHASH__8EIUUA8XAQc__JHASH__");g.NO_KEYWORD_GRID_RESULTS_BODY=a;g.NO_KEYWORD_GRID_RESULTS_HEADER=b;g.NO_KEYWORD_GRID_RESULTS_SEARCH_ICON=c;g.FOR_YOU=d;g.NOT_PERSONALIZED=e;g.DOWN_CHEVRON=f}),226);
__d("PolarisKeywordSearchExploreHeaderContent.react",["IGDSBox.react","IGDSText.react","PolarisDsaQEHelpers","PolarisGenericMobileHeader.react","PolarisNavBackButton.react","PolarisStringUtils","PolarisUA","cr:8705","isStringNullOrEmpty","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h,k={bottomMargin:{marginBottom:"x1e56ztr",$$css:!0},container:{alignItems:"x1pha0wt",display:"x78zum5",flexDirection:"x1q0g3np",justifyContent:"x1qughib",$$css:!0},extraBottomMargin:{marginBottom:"xieb3on",$$css:!0}};function a(a){var e=i(15),f=a.hashtagHeaderButtonsQueryReference;a=a.keyword;var g=d("PolarisDsaQEHelpers").hasNonProfiledExperienceEnabled(),h=!c("isStringNullOrEmpty")(a);if(d("PolarisUA").isMobile()&&h&&a!=null){var l;e[0]===Symbol["for"]("react.memo_cache_sentinel")?(l=j.jsx(c("PolarisNavBackButton.react"),{}),e[0]=l):l=e[0];var m;e[1]!==a?(m=d("PolarisStringUtils").lowercaseAndCapitalizeFirst(a),e[1]=a,e[2]=m):m=e[2];e[3]!==m?(l=j.jsx(c("PolarisGenericMobileHeader.react"),{leftActions:l,title:m}),e[3]=m,e[4]=l):l=e[4];return l}e[5]===Symbol["for"]("react.memo_cache_sentinel")?(m=[k.container,g?k.bottomMargin:k.extraBottomMargin],e[5]=m):m=e[5];e[6]!==h||e[7]!==a?(l=h&&a!=null&&j.jsx(c("IGDSBox.react"),{children:j.jsx(c("IGDSText.react"),{size:"title",weight:"semibold",children:d("PolarisStringUtils").lowercaseAndCapitalizeFirst(a)})}),e[6]=h,e[7]=a,e[8]=l):l=e[8];e[9]!==f||e[10]!==a?(g=f&&b("cr:8705")&&j.jsx(b("cr:8705"),{hashtagHeaderButtonsQueryReference:f,keyword:a}),e[9]=f,e[10]=a,e[11]=g):g=e[11];e[12]!==l||e[13]!==g?(h=j.jsxs(c("IGDSBox.react"),{xstyle:m,children:[l,g]}),e[12]=l,e[13]=g,e[14]=h):h=e[14];return h}g["default"]=a}),98);
__d("PolarisKeywordSearchExploreHeader.react",["IGDSBox.react","PolarisDsaQEHelpers","PolarisExplorePagePersonalizationPopoverHeaderItem.react","PolarisKeywordSearchExploreHeaderContent.react","PolarisNavigationLayoutContext","react","usePolarisNonPersonalizedTabsImpressionLogger"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h,k={emptyGridHeader:{marginTop:"xqui205",marginEnd:"xqmxbcd",marginBottom:"x1hq5gj4",marginStart:"xmupa6y",$$css:!0},header:{backgroundColor:"xvbhtw8",paddingTop:"x1p5oq8j",position:"x7wzq59",top:"x13vifvy",zIndex:"x1vjfegm","@media (min-width: 736px)_marginTop":"xph46j","@media (min-width: 736px)_marginEnd":"x1pca17w","@media (min-width: 736px)_marginBottom":"xsybdxg","@media (min-width: 736px)_marginStart":"x1bzgcud",$$css:!0}};function a(a){var b=i(12),e=a.hashtagHeaderButtonsQueryReference,f=a.hasMedia;a=a.keyword;f=f===void 0?!0:f;var g;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(g=d("PolarisDsaQEHelpers").hasNonProfiledExperienceEnabled(),b[0]=g):g=b[0];g=g;var h=d("PolarisNavigationLayoutContext").usePolarisNavigationLayoutContext();h=h.navigationPosition;h=h==="bottom";var l=c("usePolarisNonPersonalizedTabsImpressionLogger")("exploreLandingPage");if(h)return null;h=f?k.header:k.emptyGridHeader;var m;b[1]!==e||b[2]!==a?(m=j.jsx(c("PolarisKeywordSearchExploreHeaderContent.react"),{hashtagHeaderButtonsQueryReference:e,keyword:a}),b[1]=e,b[2]=a,b[3]=m):m=b[3];b[4]!==f||b[5]!==a?(e=f&&g&&j.jsx(d("PolarisExplorePagePersonalizationPopoverHeaderItem.react").PolarisExplorePagePersonalizationPopoverHeaderItem,{currentKeyword:a}),b[4]=f,b[5]=a,b[6]=e):e=b[6];b[7]!==l||b[8]!==h||b[9]!==m||b[10]!==e?(g=j.jsxs(c("IGDSBox.react"),{containerRef:l,xstyle:h,children:[m,e]}),b[7]=l,b[8]=h,b[9]=m,b[10]=e,b[11]=g):g=b[11];return g}g["default"]=a}),98);
__d("PolarisDynamicExplorePageSharedGrid.react",["CometPlaceholder.react","FBLogger","IGRouter_DO_NOT_USE.react","PolarisDynamicExploreGrid.react","PolarisDynamicExploreMediaHelpers","PolarisKeywordSearchExploreHeader.react","PolarisUA","deferredLoadComponent","logPolarisPostModalOpen","polarisDynamicExploreSelectors","polarisLogAction","react","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useEffect,k=b.useState,l=c("deferredLoadComponent")(c("requireDeferred")("PolarisDynamicExplorePostModal.react").__setRef("PolarisDynamicExplorePageSharedGrid.react")),m=1;function a(a){var b=a.exploreGridQuery,e=a.exploreGridType,f=a.hashtagHeaderButtonsQueryReference,g=a.logGridItemClick,h=a.logGridItemImpression,n=a.mediaLinkBuilder,o=a.modalEntryPath,p=a.onNextPage,q=a.pageID,r=a.pagination,s=a.requestInitialGrid,t=a.sectionalItems;a=k(!1);var u=a[0],v=a[1];a=k(null);var w=a[0],x=a[1],y=d("IGRouter_DO_NOT_USE.react").useIGHistory();a=function(a,b,e,f,h){var i=e.layout_content,j=e.layout_type;i=i.fill_items.find(function(a){return a.id===b.id});i=i?d("PolarisDynamicExploreMediaHelpers").GRID_ITEM_SIZE.ONE_BY_ONE:d("PolarisDynamicExploreMediaHelpers").getGridItemPlacement(j).size;g&&g(b,i,e,f,h);c("polarisLogAction")("exploreGridItemClicked");d("PolarisUA").isDesktop()&&(a.preventDefault(),z(d("PolarisDynamicExploreMediaHelpers").getPostId(b)))};function z(a){v(!0);x(a);var b=t.findIndex(function(b){return d("polarisDynamicExploreSelectors").getGridItemsFromSectionalItem(b).some(function(b){return b.pk===a})}),e=d("polarisDynamicExploreSelectors").getGridItemsFromSectionalItem(t[b]).find(function(b){return b.pk===a});e=(e=e==null?void 0:e.media_type)!=null?e:0;e===0&&c("FBLogger")("ig_web").mustfix("DynamicExplorePageSharedContent: missing media type for post modal log event");c("logPolarisPostModalOpen")(q,e,"explore_page");e=t.length-b-1;(r==null?void 0:r.moreAvailable)===!0&&!r.isLoading&&e<m&&p()}var A=function(){v(!1),x(null)};j(function(){return y.listen(function(a){y.action==="POP"&&A()})},[y]);return i.jsxs(i.Fragment,{children:[i.jsx(c("CometPlaceholder.react"),{fallback:null,children:i.jsx(c("PolarisKeywordSearchExploreHeader.react"),{hashtagHeaderButtonsQueryReference:f,keyword:b})}),i.jsx(c("PolarisDynamicExploreGrid.react"),{analyticsContext:q,exploreGridQuery:b,exploreGridType:e,hasNextPage:(f=r==null?void 0:r.moreAvailable)!=null?f:!1,isFetching:(f=r==null?void 0:r.isLoading)!=null?f:!1,logGridItemImpression:h,mediaLinkBuilder:n,onGridItemClick:a,onNextPage:p,onRetry:s,sectionalItems:t}),u&&w!=null&&i.jsx(l,{analyticsContext:q,exploreGridQuery:b,exploreGridType:e,modalEntryPath:o,onClose:A,onOpen:z,postId:w})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);