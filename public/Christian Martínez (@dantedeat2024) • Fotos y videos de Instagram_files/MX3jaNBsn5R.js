;/*FB_PKG_DELIM*/

__d("PolarisAccountSettingsRoot.entrypoint",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{}},root:c("JSResourceForInteraction")("PolarisAccountSettingsRoot.react").__setRef("PolarisAccountSettingsRoot.entrypoint")};g["default"]=a}),98);
__d("PolarisArchivePageRoot.entrypoint",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{}}},root:c("JSResourceForInteraction")("PolarisArchivePageRoot.react").__setRef("PolarisArchivePageRoot.entrypoint")};g["default"]=a}),98);
__d("useCustomGenderConsentedQuery_instagramRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7190883307679310"}),null);
__d("useCustomGenderConsentedQuery$Parameters",["useCustomGenderConsentedQuery_instagramRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("useCustomGenderConsentedQuery_instagramRelayOperation"),metadata:{},name:"useCustomGenderConsentedQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("usePolarisSettingsIsElevationV1EnabledQuery_instagramRelayOperation",[],(function(a,b,c,d,e,f){e.exports="24254004114213357"}),null);
__d("usePolarisSettingsIsElevationV1EnabledQuery$Parameters",["usePolarisSettingsIsElevationV1EnabledQuery_instagramRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("usePolarisSettingsIsElevationV1EnabledQuery_instagramRelayOperation"),metadata:{},name:"usePolarisSettingsIsElevationV1EnabledQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("PolarisProfileEditRoot.entrypoint",["JSResourceForInteraction","useCustomGenderConsentedQuery$Parameters","usePolarisSettingsIsElevationV1EnabledQuery$Parameters"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{polarisCustomGenderQuery:{options:{},parameters:c("useCustomGenderConsentedQuery$Parameters"),variables:{}},polarisProfileEditRootQuery:{options:{},parameters:c("usePolarisSettingsIsElevationV1EnabledQuery$Parameters"),variables:{}}}}},root:c("JSResourceForInteraction")("PolarisProfileEditRoot.react").__setRef("PolarisProfileEditRoot.entrypoint")};g["default"]=a}),98);
__d("PolarisProfileSavedPostsTabContentQuery_instagramRelayOperation",[],(function(a,b,c,d,e,f){e.exports="8230876643638577"}),null);
__d("PolarisProfileSavedPostsTabContentQuery$Parameters",["PolarisProfileSavedPostsTabContentQuery_instagramRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("PolarisProfileSavedPostsTabContentQuery_instagramRelayOperation"),metadata:{is_distillery:!0},name:"PolarisProfileSavedPostsTabContentQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("PolarisProfileSavedPostsTabRoot.entrypoint",["JSResourceForInteraction","PolarisProfileSavedPostsTabContentQuery$Parameters","buildPolarisProfileRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildPolarisProfileRoute.entrypoint")(c("JSResourceForInteraction")("PolarisProfileSavedPostsTabRoot.react").__setRef("PolarisProfileSavedPostsTabRoot.entrypoint"),function(){return{queries:{contentQuery:{options:{},parameters:c("PolarisProfileSavedPostsTabContentQuery$Parameters"),variables:{}}}}});g["default"]=a}),98);
__d("PolarisProfileSavedTabContentQuery_instagramRelayOperation",[],(function(a,b,c,d,e,f){e.exports="8024393177605784"}),null);
__d("PolarisProfileSavedTabContentQuery$Parameters",["PolarisProfileSavedTabContentQuery_instagramRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("PolarisProfileSavedTabContentQuery_instagramRelayOperation"),metadata:{is_distillery:!0},name:"PolarisProfileSavedTabContentQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("PolarisProfileSavedTabRoot.entrypoint",["JSResourceForInteraction","PolarisProfileSavedTabContentQuery$Parameters","PolarisProfileSavedTabEntryPointVariables","buildPolarisProfileRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildPolarisProfileRoute.entrypoint")(c("JSResourceForInteraction")("PolarisProfileSavedTabRoot.react").__setRef("PolarisProfileSavedTabRoot.entrypoint"),function(){return{queries:{contentQuery:{options:{},parameters:c("PolarisProfileSavedTabContentQuery$Parameters"),variables:{collection_types:[d("PolarisProfileSavedTabEntryPointVariables").SAVED_COLLECTION_TYPE.ALL_MEDIA_AUTO_COLLECTION,d("PolarisProfileSavedTabEntryPointVariables").SAVED_COLLECTION_TYPE.MEDIA,d("PolarisProfileSavedTabEntryPointVariables").SAVED_COLLECTION_TYPE.AUDIO_AUTO_COLLECTION],count:12,get_cover_media_lists:!0}}}}});g["default"]=a}),98);