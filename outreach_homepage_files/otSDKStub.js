var OneTrustStub=function(t){"use strict";var c=new function(){this.optanonCookieName="OptanonConsent",this.optanonHtmlGroupData=[],this.IABCookieValue="",this.oneTrustIABCookieName="eupubconsent",this.oneTrustIsIABCrossConsentEnableParam="isIABGlobal",this.isStubReady=!0,this.geolocationCookiesParam="geolocation",this.EUCOUNTRIES=["BE","BG","CZ","DK","DE","EE","IE","GR","ES","FR","IT","CY","LV","LT","LU","HU","MT","NL","AT","PL","PT","RO","SI","SK","FI","SE","GB","HR","LI","NO","IS"],this.stubFileName="otSDKStub",this.DATAFILEATTRIBUTE="data-domain-script",this.bannerScriptName="otBannerSdk.js",this.mobileOnlineURL=[],this.isMigratedURL=!1,this.migratedCCTID="[[OldCCTID]]",this.migratedDomainId="[[NewDomainId]]",this.userLocation={country:"",state:""}},e=(a.prototype.initConsentSDK=function(){this.initCustomEventPolyfill(),this.ensureHtmlGroupDataInitialised(),this.updateGtmMacros(),this.fetchBannerSDKDependency()},a.prototype.fetchBannerSDKDependency=function(){this.setDomainDataFileURL(),this.otFetch(c.bannerDataParentURL,this.getLocation.bind(this))},a.prototype.getLocation=function(t){if(!t.RuleSet[0].Type)return this.iabTypeAdded=!1,window.__cmp=this.executeCmpApi,window.__tcfapi=this.executeTcfApi,this.intializeIabStub(),this.addBannerSDKScript(t);var e=window;if(e.OneTrust&&e.OneTrust.geolocationResponse){var a=e.OneTrust.geolocationResponse;this.setGeoLocation(a.countryCode,a.stateCode),this.addBannerSDKScript(t)}else{var i=this.readCookieParam(c.optanonCookieName,c.geolocationCookiesParam);if(i||t.SkipGeolocation){var o=i.split(";")[0],n=i.split(";")[1];this.setGeoLocation(o,n),this.addBannerSDKScript(t)}else this.getGeoLocation(t)}},a.prototype.getGeolocationURL=function(t){var e=""+c.stubScriptElement.getAttribute("src").split(c.stubFileName)[0]+t.Version;return new RegExp("^file://","i").test(e)&&t.MobileSDK?"./"+t.GeolocationUrl.replace(/^(http|https):\/\//,"").split("/").slice(1).join("/")+".js":t.GeolocationUrl},a.prototype.getGeoLocation=function(t){var e=this;window.jsonFeed=function(t){e.setGeoLocation(t.country,t.state)},this.jsonp(this.getGeolocationURL(t),this.addBannerSDKScript.bind(this,t))},a.prototype.setGeoLocation=function(t,e){void 0===e&&(e=""),c.userLocation={country:t,state:e}},a.prototype.otFetch=function(t,e){if(new RegExp("^file://","i").test(t))this.otFetchOfflineFile(t,e);else{c.mobileOnlineURL.push(t);var a=new XMLHttpRequest;a.onload=function(){e(JSON.parse(this.responseText))},a.open("GET",t),a.send()}},a.prototype.otFetchOfflineFile=function(t,e){var a=(t=t.replace(".json",".js")).split("/"),i=a[a.length-1].split(".js")[0];this.jsonp(t,function(){e(window[i])})},a.prototype.jsonp=function(t,e){var a=document.createElement("script");a.setAttribute("src",t),a.async=!0,a.type="text/javascript",document.getElementsByTagName("head")[0].appendChild(a),new RegExp("^file://","i").test(t)||c.mobileOnlineURL.push(t),e&&(a.onload=function(){e()})},a.prototype.getRegionSet=function(t){var e,a,i,o=c.userLocation,n=t.RuleSet.filter(function(t){return!0===t.Default});if(!o.country&&!o.state)return n&&0<n.length?n[0]:null;for(var s=o.state.toLowerCase(),r=o.country.toLowerCase(),p=0;p<t.RuleSet.length;p++)if(!0===t.RuleSet[p].Global)i=t.RuleSet[p];else{var l=t.RuleSet[p].States;if(l[r]&&0<=l[r].indexOf(s)){a=t.RuleSet[p];break}0<=t.RuleSet[p].Countries.indexOf(r)&&(e=t.RuleSet[p])}return a||e||i},a.prototype.ensureHtmlGroupDataInitialised=function(){this.initializeIABData(),this.initializeGroupData()},a.prototype.initializeGroupData=function(){this.readCookieParam(c.optanonCookieName,"groups")&&(c.optanonHtmlGroupData=this.deserialiseStringToArray(this.readCookieParam(c.optanonCookieName,"groups")))},a.prototype.initializeIABData=function(){this.validateIABGDPRApplied(),this.validateIABGlobalScope()},a.prototype.validateIABGlobalScope=function(){var t=this.readCookieParam(c.optanonCookieName,c.oneTrustIsIABCrossConsentEnableParam);t?"true"===t?(c.hasIABGlobalScope=!0,c.isStubReady=!1):(c.hasIABGlobalScope=!1,c.IABCookieValue=this.getCookie(c.oneTrustIABCookieName)):c.isStubReady=!1},a.prototype.validateIABGDPRApplied=function(){var t=this.readCookieParam(c.optanonCookieName,c.geolocationCookiesParam).split(";")[0];t?this.isBoolean(t)?c.oneTrustIABgdprAppliesGlobally="true"===t:c.oneTrustIABgdprAppliesGlobally=0<=c.EUCOUNTRIES.indexOf(t):c.isStubReady=!1},a.prototype.isBoolean=function(t){return"true"===t||"false"===t},a.prototype.readCookieParam=function(t,e){var a,i,o,n,s=this.getCookie(t);if(s){for(i={},o=s.split("&"),a=0;a<o.length;a+=1)n=o[a].split("="),i[decodeURIComponent(n[0])]=decodeURIComponent(n[1]).replace(/\+/g," ");return e&&i[e]?i[e]:e&&!i[e]?"":i}return""},a.prototype.getCookie=function(t){var e,a,i=t+"=",o=document.cookie.split(";");for(e=0;e<o.length;e+=1){for(a=o[e];" "==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(i))return a.substring(i.length,a.length)}return null},a.prototype.updateGtmMacros=function(){var t,e=[];for(t=0;t<c.optanonHtmlGroupData.length;t++)this.endsWith(c.optanonHtmlGroupData[t],":1")&&e.push(c.optanonHtmlGroupData[t].replace(":1",""));var a=","+this.serialiseArrayToString(e)+",";window.OnetrustActiveGroups=a,window.OptanonActiveGroups=a,void 0!==window.dataLayer?window.dataLayer.constructor===Array&&(window.dataLayer.push({OnetrustActiveGroups:a}),window.dataLayer.push({OptanonActiveGroups:a})):window.dataLayer=[{event:"OneTrustLoaded",OnetrustActiveGroups:a},{event:"OptanonLoaded",OptanonActiveGroups:a}],setTimeout(function(){var t=new CustomEvent("consent.onetrust",{detail:e});window.dispatchEvent(t)})},a.prototype.deserialiseStringToArray=function(t){return t?t.split(","):[]},a.prototype.endsWith=function(t,e){return-1!==t.indexOf(e,t.length-e.length)},a.prototype.serialiseArrayToString=function(t){return t.toString()},a.prototype.setStubScriptElement=function(){c.stubScriptElement=document.querySelector("script[src*='"+c.stubFileName+"']"),c.stubScriptElement&&c.stubScriptElement.hasAttribute(c.DATAFILEATTRIBUTE)?c.domainDataFileName=c.stubScriptElement.getAttribute(c.DATAFILEATTRIBUTE).trim():c.stubScriptElement||(c.stubScriptElement=document.querySelector("script[src*='"+c.migratedCCTID+"']"),c.stubScriptElement&&(c.isMigratedURL=!0,c.domainDataFileName=c.migratedDomainId.trim()))},a.prototype.setDomainDataFileURL=function(){this.setStubScriptElement();var t=c.stubScriptElement.getAttribute("src");t&&(c.isMigratedURL?c.storageBaseURL=t.split("/consent/"+c.migratedCCTID)[0]:c.storageBaseURL=t.split("/scripttemplates/"+c.stubFileName)[0]),c.bannerBaseDataURL=c.storageBaseURL&&c.storageBaseURL+"/consent/"+c.domainDataFileName,c.bannerDataParentURL=c.bannerBaseDataURL+"/"+c.domainDataFileName+".json"},a.prototype.initCustomEventPolyfill=function(){if("function"==typeof window.CustomEvent)return!1;function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var a=document.createEvent("CustomEvent");return a.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),a}t.prototype=window.Event.prototype,window.CustomEvent=t},a);function a(){var l=this;this.iabType=null,this.iabTypeAdded=!0,this.addBannerSDKScript=function(t){var e=null;l.iabTypeAdded&&("IAB"!==(e=l.getRegionSet(t)).Type&&"IAB2"!==e.Type||(l.iabType=e.Type,l.intializeIabStub()));var a=c.stubScriptElement.cloneNode(!0),i="";i=t.UseSDKRefactor?(c.isMigratedURL&&(a.src=c.storageBaseURL+"/scripttemplates/new/scripttemplates/"+c.stubFileName+".js"),c.storageBaseURL+"/scripttemplates/new/scripttemplates/"+t.Version+"/"+c.bannerScriptName):"5.11.0"===t.Version?(c.isMigratedURL&&(a.src=c.storageBaseURL+"/scripttemplates/old/scripttemplates/"+c.stubFileName+".js"),c.storageBaseURL+"/scripttemplates/old/scripttemplates/5.11.0/"+c.bannerScriptName):(c.isMigratedURL&&(a.src=c.storageBaseURL+"/scripttemplates/"+c.stubFileName+".js"),c.storageBaseURL+"/scripttemplates/"+t.Version+"/"+c.bannerScriptName);["charset","data-language","data-domain-script"].forEach(function(t){c.stubScriptElement.getAttribute(t)&&a.setAttribute(t,c.stubScriptElement.getAttribute(t))}),window.otStubData={domainData:t,stubElement:a,bannerBaseDataURL:c.bannerBaseDataURL,mobileOnlineURL:c.mobileOnlineURL,userLocation:c.userLocation,regionRule:e},l.jsonp(i,null)},this.intializeIabStub=function(){var t=window;l.iabTypeAdded?("IAB"===l.iabType?void 0===t.__cmp&&(window.__cmp=l.executeCmpApi):void 0===t.__tcfapi&&(window.__tcfapi=l.executeTcfApi),l.addIabFrame()):l.addBackwardIabFrame(),t.receiveOTMessage=l.receiveIabMessage,(t.attachEvent||window.addEventListener)("message",t.receiveOTMessage,!1)},this.addIabFrame=function(){var t=window,e="IAB"===l.iabType?"__cmpLocator":"__tcfapiLocator";!t.frames[e]&&(t.document.body?l.addLocator(e,"CMP"):setTimeout(l.addIabFrame,5))},this.addBackwardIabFrame=function(){var t=window,e="__cmpLocator";!t.frames[e]&&(t.document.body?l.addLocator(e,"CMP"):setTimeout(l.addIabFrame,5));var a="__tcfapiLocator";!t.frames[a]&&(t.document.body?l.addLocator(a,"TCF"):setTimeout(l.addIabFrame,5))},this.addLocator=function(t,e){var a=window,i=a.document.createElement("iframe");i.style.cssText="display:none",i.name=t,i.setAttribute("title",e+" Locator"),a.document.body.appendChild(i)},this.receiveIabMessage=function(i){var o="string"==typeof i.data,t={};try{t=o?JSON.parse(i.data):i.data}catch(t){}if(t.__cmpCall&&"IAB"===l.iabType){var n=t.__cmpCall.callId,s=t.__cmpCall.command,e=t.__cmpCall.parameter;l.executeCmpApi(s,e,function(t,e){var a={__cmpReturn:{returnValue:t,success:e,callId:n,command:s}};i.source.postMessage(o?JSON.stringify(a):a,i.origin)})}else t.__cmpCall&&"IAB2"===l.iabType&&console.log("Expecting IAB TCF v2.0 vendor iFrame call; Received IAB TCF v1.1");if(t.__tcfapiCall&&"IAB2"===l.iabType){var r=t.__tcfapiCall.callId,p=t.__tcfapiCall.command,a=(e=t.__tcfapiCall.parameter,t.__tcfapiCall.version);l.executeTcfApi(p,e,function(t,e){var a={__tcfapiReturn:{returnValue:t,success:e,callId:r,command:p}};i.source.postMessage(o?JSON.stringify(a):a,i.origin)},a)}else t.__tcfapiCall&&"IAB"===l.iabType&&console.log("Expecting IAB TCF v1.1 vendor iFrame call; Received IAB TCF v2.0")},this.executeCmpApi=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];l.iabType="IAB";var a=t[0],i=t[1],o=t[2];if("function"==typeof o&&a)if(c.isStubReady&&c.IABCookieValue)switch(a){case"ping":l.getPingRequest(o,!0);break;case"getConsentData":l.getConsentDataRequest(o);break;default:l.addToQueue(a,i,o)}else l.addToQueue(a,i,o)},this.executeTcfApi=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(l.iabType="IAB2",!t.length)return window.__tcfapi.a||[];var a=t[0],i=t[1],o=t[2],n=t[3];"function"==typeof o&&a&&(c.isStubReady&&c.IABCookieValue&&"ping"===a?l.getPingRequest(o):l.addToQueue(a,i,o,n))},this.addToQueue=function(t,e,a,i){var o=window,n="IAB"===l.iabType?"__cmp":"__tcfapi";o[n].a=o[n].a||[],"ping"===t?l.getPingRequest(a):o[n].a.push([t,e,a,i])},this.getPingRequest=function(t,e){if(void 0===e&&(e=!1),t){var a={},i=!1;"IAB"===l.iabType?(a={gdprAppliesGlobally:c.oneTrustIABgdprAppliesGlobally,cmpLoaded:e},i=!0):"IAB2"===l.iabType&&(a={gdprApplies:c.oneTrustIABgdprAppliesGlobally,cmpLoaded:!1,cmpStatus:"stub",displayStatus:"stub",apiVersion:"2.0",cmpVersion:void 0,cmpId:void 0,gvlVersion:void 0,tcfPolicyVersion:void 0},i=!0),t(a,i)}},this.getConsentDataRequest=function(t){t&&c.IABCookieValue&&t({gdprApplies:c.oneTrustIABgdprAppliesGlobally,hasGlobalScope:c.hasIABGlobalScope,consentData:c.IABCookieValue},!0)},this.initConsentSDK()}var i=new e;return t.OtSDKStub=e,t.otSdkStub=i,t}({});
