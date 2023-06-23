var Jg=Object.defineProperty;var em=(t,e,n)=>e in t?Jg(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var M=(t,e,n)=>(em(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function tm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var N={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qs=Symbol.for("react.element"),nm=Symbol.for("react.portal"),im=Symbol.for("react.fragment"),sm=Symbol.for("react.strict_mode"),rm=Symbol.for("react.profiler"),om=Symbol.for("react.provider"),lm=Symbol.for("react.context"),am=Symbol.for("react.forward_ref"),cm=Symbol.for("react.suspense"),um=Symbol.for("react.memo"),dm=Symbol.for("react.lazy"),ou=Symbol.iterator;function hm(t){return t===null||typeof t!="object"?null:(t=ou&&t[ou]||t["@@iterator"],typeof t=="function"?t:null)}var Bh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vh=Object.assign,Hh={};function Ii(t,e,n){this.props=t,this.context=e,this.refs=Hh,this.updater=n||Bh}Ii.prototype.isReactComponent={};Ii.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ii.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Wh(){}Wh.prototype=Ii.prototype;function Ga(t,e,n){this.props=t,this.context=e,this.refs=Hh,this.updater=n||Bh}var Za=Ga.prototype=new Wh;Za.constructor=Ga;Vh(Za,Ii.prototype);Za.isPureReactComponent=!0;var lu=Array.isArray,$h=Object.prototype.hasOwnProperty,qa={current:null},Uh={key:!0,ref:!0,__self:!0,__source:!0};function Yh(t,e,n){var i,s={},r=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(r=""+e.key),e)$h.call(e,i)&&!Uh.hasOwnProperty(i)&&(s[i]=e[i]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var a=Array(l),c=0;c<l;c++)a[c]=arguments[c+2];s.children=a}if(t&&t.defaultProps)for(i in l=t.defaultProps,l)s[i]===void 0&&(s[i]=l[i]);return{$$typeof:Qs,type:t,key:r,ref:o,props:s,_owner:qa.current}}function fm(t,e){return{$$typeof:Qs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ja(t){return typeof t=="object"&&t!==null&&t.$$typeof===Qs}function pm(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var au=/\/+/g;function nl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?pm(""+t.key):e.toString(36)}function zr(t,e,n,i,s){var r=typeof t;(r==="undefined"||r==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(r){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Qs:case nm:o=!0}}if(o)return o=t,s=s(o),t=i===""?"."+nl(o,0):i,lu(s)?(n="",t!=null&&(n=t.replace(au,"$&/")+"/"),zr(s,e,n,"",function(c){return c})):s!=null&&(Ja(s)&&(s=fm(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(au,"$&/")+"/")+t)),e.push(s)),1;if(o=0,i=i===""?".":i+":",lu(t))for(var l=0;l<t.length;l++){r=t[l];var a=i+nl(r,l);o+=zr(r,e,n,a,s)}else if(a=hm(t),typeof a=="function")for(t=a.call(t),l=0;!(r=t.next()).done;)r=r.value,a=i+nl(r,l++),o+=zr(r,e,n,a,s);else if(r==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function rr(t,e,n){if(t==null)return t;var i=[],s=0;return zr(t,i,"","",function(r){return e.call(n,r,s++)}),i}function gm(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Le={current:null},Ir={transition:null},mm={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:Ir,ReactCurrentOwner:qa};j.Children={map:rr,forEach:function(t,e,n){rr(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return rr(t,function(){e++}),e},toArray:function(t){return rr(t,function(e){return e})||[]},only:function(t){if(!Ja(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};j.Component=Ii;j.Fragment=im;j.Profiler=rm;j.PureComponent=Ga;j.StrictMode=sm;j.Suspense=cm;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mm;j.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Vh({},t.props),s=t.key,r=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(r=e.ref,o=qa.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)$h.call(e,a)&&!Uh.hasOwnProperty(a)&&(i[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){l=Array(a);for(var c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}return{$$typeof:Qs,type:t.type,key:s,ref:r,props:i,_owner:o}};j.createContext=function(t){return t={$$typeof:lm,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:om,_context:t},t.Consumer=t};j.createElement=Yh;j.createFactory=function(t){var e=Yh.bind(null,t);return e.type=t,e};j.createRef=function(){return{current:null}};j.forwardRef=function(t){return{$$typeof:am,render:t}};j.isValidElement=Ja;j.lazy=function(t){return{$$typeof:dm,_payload:{_status:-1,_result:t},_init:gm}};j.memo=function(t,e){return{$$typeof:um,type:t,compare:e===void 0?null:e}};j.startTransition=function(t){var e=Ir.transition;Ir.transition={};try{t()}finally{Ir.transition=e}};j.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};j.useCallback=function(t,e){return Le.current.useCallback(t,e)};j.useContext=function(t){return Le.current.useContext(t)};j.useDebugValue=function(){};j.useDeferredValue=function(t){return Le.current.useDeferredValue(t)};j.useEffect=function(t,e){return Le.current.useEffect(t,e)};j.useId=function(){return Le.current.useId()};j.useImperativeHandle=function(t,e,n){return Le.current.useImperativeHandle(t,e,n)};j.useInsertionEffect=function(t,e){return Le.current.useInsertionEffect(t,e)};j.useLayoutEffect=function(t,e){return Le.current.useLayoutEffect(t,e)};j.useMemo=function(t,e){return Le.current.useMemo(t,e)};j.useReducer=function(t,e,n){return Le.current.useReducer(t,e,n)};j.useRef=function(t){return Le.current.useRef(t)};j.useState=function(t){return Le.current.useState(t)};j.useSyncExternalStore=function(t,e,n){return Le.current.useSyncExternalStore(t,e,n)};j.useTransition=function(){return Le.current.useTransition()};j.version="18.2.0";(function(t){t.exports=j})(N);const _=tm(N.exports);var Xh={exports:{}},qe={},Kh={exports:{}},Qh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,L){var A=P.length;P.push(L);e:for(;0<A;){var Y=A-1>>>1,G=P[Y];if(0<s(G,L))P[Y]=L,P[A]=G,A=Y;else break e}}function n(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var L=P[0],A=P.pop();if(A!==L){P[0]=A;e:for(var Y=0,G=P.length,xt=G>>>1;Y<xt;){var We=2*(Y+1)-1,Tt=P[We],$e=We+1,sr=P[$e];if(0>s(Tt,A))$e<G&&0>s(sr,Tt)?(P[Y]=sr,P[$e]=A,Y=$e):(P[Y]=Tt,P[We]=A,Y=We);else if($e<G&&0>s(sr,A))P[Y]=sr,P[$e]=A,Y=$e;else break e}}return L}function s(P,L){var A=P.sortIndex-L.sortIndex;return A!==0?A:P.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;t.unstable_now=function(){return r.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],c=[],u=1,d=null,h=3,f=!1,m=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(P){for(var L=n(c);L!==null;){if(L.callback===null)i(c);else if(L.startTime<=P)i(c),L.sortIndex=L.expirationTime,e(a,L);else break;L=n(c)}}function k(P){if(y=!1,v(P),!m)if(n(a)!==null)m=!0,U(w);else{var L=n(c);L!==null&&Q(k,L.startTime-P)}}function w(P,L){m=!1,y&&(y=!1,g(E),E=-1),f=!0;var A=h;try{for(v(L),d=n(a);d!==null&&(!(d.expirationTime>L)||P&&!R());){var Y=d.callback;if(typeof Y=="function"){d.callback=null,h=d.priorityLevel;var G=Y(d.expirationTime<=L);L=t.unstable_now(),typeof G=="function"?d.callback=G:d===n(a)&&i(a),v(L)}else i(a);d=n(a)}if(d!==null)var xt=!0;else{var We=n(c);We!==null&&Q(k,We.startTime-L),xt=!1}return xt}finally{d=null,h=A,f=!1}}var S=!1,b=null,E=-1,D=5,T=-1;function R(){return!(t.unstable_now()-T<D)}function I(){if(b!==null){var P=t.unstable_now();T=P;var L=!0;try{L=b(!0,P)}finally{L?ie():(S=!1,b=null)}}else S=!1}var ie;if(typeof p=="function")ie=function(){p(I)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,H=Se.port2;Se.port1.onmessage=I,ie=function(){H.postMessage(null)}}else ie=function(){x(I,0)};function U(P){b=P,S||(S=!0,ie())}function Q(P,L){E=x(function(){P(t.unstable_now())},L)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){m||f||(m=!0,U(w))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(P){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var A=h;h=L;try{return P()}finally{h=A}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,L){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var A=h;h=P;try{return L()}finally{h=A}},t.unstable_scheduleCallback=function(P,L,A){var Y=t.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?Y+A:Y):A=Y,P){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=A+G,P={id:u++,callback:L,priorityLevel:P,startTime:A,expirationTime:G,sortIndex:-1},A>Y?(P.sortIndex=A,e(c,P),n(a)===null&&P===n(c)&&(y?(g(E),E=-1):y=!0,Q(k,A-Y))):(P.sortIndex=G,e(a,P),m||f||(m=!0,U(w))),P},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(P){var L=h;return function(){var A=h;h=L;try{return P.apply(this,arguments)}finally{h=A}}}})(Qh);(function(t){t.exports=Qh})(Kh);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gh=N.exports,Ze=Kh.exports;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zh=new Set,Ss={};function ti(t,e){Mi(t,e),Mi(t+"Capture",e)}function Mi(t,e){for(Ss[t]=e,t=0;t<e.length;t++)Zh.add(e[t])}var Yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bl=Object.prototype.hasOwnProperty,ym=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cu={},uu={};function vm(t){return Bl.call(uu,t)?!0:Bl.call(cu,t)?!1:ym.test(t)?uu[t]=!0:(cu[t]=!0,!1)}function _m(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function xm(t,e,n,i){if(e===null||typeof e>"u"||_m(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Re(t,e,n,i,s,r,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=r,this.removeEmptyString=o}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){we[t]=new Re(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];we[e]=new Re(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){we[t]=new Re(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){we[t]=new Re(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){we[t]=new Re(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){we[t]=new Re(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){we[t]=new Re(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){we[t]=new Re(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){we[t]=new Re(t,5,!1,t.toLowerCase(),null,!1,!1)});var ec=/[\-:]([a-z])/g;function tc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ec,tc);we[e]=new Re(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ec,tc);we[e]=new Re(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ec,tc);we[e]=new Re(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){we[t]=new Re(t,1,!1,t.toLowerCase(),null,!1,!1)});we.xlinkHref=new Re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){we[t]=new Re(t,1,!1,t.toLowerCase(),null,!0,!0)});function nc(t,e,n,i){var s=we.hasOwnProperty(e)?we[e]:null;(s!==null?s.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(xm(e,n,s,i)&&(n=null),i||s===null?vm(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,i=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Gt=Gh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,or=Symbol.for("react.element"),ai=Symbol.for("react.portal"),ci=Symbol.for("react.fragment"),ic=Symbol.for("react.strict_mode"),Vl=Symbol.for("react.profiler"),qh=Symbol.for("react.provider"),Jh=Symbol.for("react.context"),sc=Symbol.for("react.forward_ref"),Hl=Symbol.for("react.suspense"),Wl=Symbol.for("react.suspense_list"),rc=Symbol.for("react.memo"),nn=Symbol.for("react.lazy"),ef=Symbol.for("react.offscreen"),du=Symbol.iterator;function Bi(t){return t===null||typeof t!="object"?null:(t=du&&t[du]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,il;function Ji(t){if(il===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);il=e&&e[1]||""}return`
`+il+t}var sl=!1;function rl(t,e){if(!t||sl)return"";sl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),r=i.stack.split(`
`),o=s.length-1,l=r.length-1;1<=o&&0<=l&&s[o]!==r[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==r[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==r[l]){var a=`
`+s[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{sl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ji(t):""}function km(t){switch(t.tag){case 5:return Ji(t.type);case 16:return Ji("Lazy");case 13:return Ji("Suspense");case 19:return Ji("SuspenseList");case 0:case 2:case 15:return t=rl(t.type,!1),t;case 11:return t=rl(t.type.render,!1),t;case 1:return t=rl(t.type,!0),t;default:return""}}function $l(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ci:return"Fragment";case ai:return"Portal";case Vl:return"Profiler";case ic:return"StrictMode";case Hl:return"Suspense";case Wl:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Jh:return(t.displayName||"Context")+".Consumer";case qh:return(t._context.displayName||"Context")+".Provider";case sc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rc:return e=t.displayName||null,e!==null?e:$l(t.type)||"Memo";case nn:e=t._payload,t=t._init;try{return $l(t(e))}catch{}}return null}function wm(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $l(e);case 8:return e===ic?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Sn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function tf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Sm(t){var e=tf(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,r=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){i=""+o,r.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function lr(t){t._valueTracker||(t._valueTracker=Sm(t))}function nf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=tf(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function io(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ul(t,e){var n=e.checked;return oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function hu(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Sn(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function sf(t,e){e=e.checked,e!=null&&nc(t,"checked",e,!1)}function Yl(t,e){sf(t,e);var n=Sn(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Xl(t,e.type,n):e.hasOwnProperty("defaultValue")&&Xl(t,e.type,Sn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function fu(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Xl(t,e,n){(e!=="number"||io(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var es=Array.isArray;function xi(t,e,n,i){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Sn(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,i&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Kl(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pu(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(es(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Sn(n)}}function rf(t,e){var n=Sn(e.value),i=Sn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function gu(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function of(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ql(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?of(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ar,lf=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ar=ar||document.createElement("div"),ar.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ar.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function bs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var cs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bm=["Webkit","ms","Moz","O"];Object.keys(cs).forEach(function(t){bm.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),cs[e]=cs[t]})});function af(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||cs.hasOwnProperty(t)&&cs[t]?(""+e).trim():e+"px"}function cf(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,s=af(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,s):t[n]=s}}var Em=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gl(t,e){if(e){if(Em[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function Zl(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ql=null;function oc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jl=null,ki=null,wi=null;function mu(t){if(t=qs(t)){if(typeof Jl!="function")throw Error(C(280));var e=t.stateNode;e&&(e=Bo(e),Jl(t.stateNode,t.type,e))}}function uf(t){ki?wi?wi.push(t):wi=[t]:ki=t}function df(){if(ki){var t=ki,e=wi;if(wi=ki=null,mu(t),e)for(t=0;t<e.length;t++)mu(e[t])}}function hf(t,e){return t(e)}function ff(){}var ol=!1;function pf(t,e,n){if(ol)return t(e,n);ol=!0;try{return hf(t,e,n)}finally{ol=!1,(ki!==null||wi!==null)&&(ff(),df())}}function Es(t,e){var n=t.stateNode;if(n===null)return null;var i=Bo(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var ea=!1;if(Yt)try{var Vi={};Object.defineProperty(Vi,"passive",{get:function(){ea=!0}}),window.addEventListener("test",Vi,Vi),window.removeEventListener("test",Vi,Vi)}catch{ea=!1}function Cm(t,e,n,i,s,r,o,l,a){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var us=!1,so=null,ro=!1,ta=null,Mm={onError:function(t){us=!0,so=t}};function Pm(t,e,n,i,s,r,o,l,a){us=!1,so=null,Cm.apply(Mm,arguments)}function Tm(t,e,n,i,s,r,o,l,a){if(Pm.apply(this,arguments),us){if(us){var c=so;us=!1,so=null}else throw Error(C(198));ro||(ro=!0,ta=c)}}function ni(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function gf(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yu(t){if(ni(t)!==t)throw Error(C(188))}function Dm(t){var e=t.alternate;if(!e){if(e=ni(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,i=e;;){var s=n.return;if(s===null)break;var r=s.alternate;if(r===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===r.child){for(r=s.child;r;){if(r===n)return yu(s),t;if(r===i)return yu(s),e;r=r.sibling}throw Error(C(188))}if(n.return!==i.return)n=s,i=r;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,i=r;break}if(l===i){o=!0,i=s,n=r;break}l=l.sibling}if(!o){for(l=r.child;l;){if(l===n){o=!0,n=r,i=s;break}if(l===i){o=!0,i=r,n=s;break}l=l.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==i)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function mf(t){return t=Dm(t),t!==null?yf(t):null}function yf(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=yf(t);if(e!==null)return e;t=t.sibling}return null}var vf=Ze.unstable_scheduleCallback,vu=Ze.unstable_cancelCallback,Om=Ze.unstable_shouldYield,Nm=Ze.unstable_requestPaint,de=Ze.unstable_now,Lm=Ze.unstable_getCurrentPriorityLevel,lc=Ze.unstable_ImmediatePriority,_f=Ze.unstable_UserBlockingPriority,oo=Ze.unstable_NormalPriority,Rm=Ze.unstable_LowPriority,xf=Ze.unstable_IdlePriority,zo=null,Ct=null;function Am(t){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(zo,t,void 0,(t.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:Fm,zm=Math.log,Im=Math.LN2;function Fm(t){return t>>>=0,t===0?32:31-(zm(t)/Im|0)|0}var cr=64,ur=4194304;function ts(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function lo(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,s=t.suspendedLanes,r=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?i=ts(l):(r&=o,r!==0&&(i=ts(r)))}else o=n&~s,o!==0?i=ts(o):r!==0&&(i=ts(r));if(i===0)return 0;if(e!==0&&e!==i&&(e&s)===0&&(s=i&-i,r=e&-e,s>=r||s===16&&(r&4194240)!==0))return e;if((i&4)!==0&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-gt(e),s=1<<n,i|=t[n],e&=~s;return i}function jm(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bm(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,r=t.pendingLanes;0<r;){var o=31-gt(r),l=1<<o,a=s[o];a===-1?((l&n)===0||(l&i)!==0)&&(s[o]=jm(l,e)):a<=e&&(t.expiredLanes|=l),r&=~l}}function na(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function kf(){var t=cr;return cr<<=1,(cr&4194240)===0&&(cr=64),t}function ll(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Gs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-gt(e),t[e]=n}function Vm(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-gt(n),r=1<<s;e[s]=0,i[s]=-1,t[s]=-1,n&=~r}}function ac(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-gt(n),s=1<<i;s&e|t[i]&e&&(t[i]|=e),n&=~s}}var $=0;function wf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Sf,cc,bf,Ef,Cf,ia=!1,dr=[],fn=null,pn=null,gn=null,Cs=new Map,Ms=new Map,rn=[],Hm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _u(t,e){switch(t){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":pn=null;break;case"mouseover":case"mouseout":gn=null;break;case"pointerover":case"pointerout":Cs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ms.delete(e.pointerId)}}function Hi(t,e,n,i,s,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[s]},e!==null&&(e=qs(e),e!==null&&cc(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function Wm(t,e,n,i,s){switch(e){case"focusin":return fn=Hi(fn,t,e,n,i,s),!0;case"dragenter":return pn=Hi(pn,t,e,n,i,s),!0;case"mouseover":return gn=Hi(gn,t,e,n,i,s),!0;case"pointerover":var r=s.pointerId;return Cs.set(r,Hi(Cs.get(r)||null,t,e,n,i,s)),!0;case"gotpointercapture":return r=s.pointerId,Ms.set(r,Hi(Ms.get(r)||null,t,e,n,i,s)),!0}return!1}function Mf(t){var e=Bn(t.target);if(e!==null){var n=ni(e);if(n!==null){if(e=n.tag,e===13){if(e=gf(n),e!==null){t.blockedOn=e,Cf(t.priority,function(){bf(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fr(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=sa(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ql=i,n.target.dispatchEvent(i),ql=null}else return e=qs(n),e!==null&&cc(e),t.blockedOn=n,!1;e.shift()}return!0}function xu(t,e,n){Fr(t)&&n.delete(e)}function $m(){ia=!1,fn!==null&&Fr(fn)&&(fn=null),pn!==null&&Fr(pn)&&(pn=null),gn!==null&&Fr(gn)&&(gn=null),Cs.forEach(xu),Ms.forEach(xu)}function Wi(t,e){t.blockedOn===e&&(t.blockedOn=null,ia||(ia=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,$m)))}function Ps(t){function e(s){return Wi(s,t)}if(0<dr.length){Wi(dr[0],t);for(var n=1;n<dr.length;n++){var i=dr[n];i.blockedOn===t&&(i.blockedOn=null)}}for(fn!==null&&Wi(fn,t),pn!==null&&Wi(pn,t),gn!==null&&Wi(gn,t),Cs.forEach(e),Ms.forEach(e),n=0;n<rn.length;n++)i=rn[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<rn.length&&(n=rn[0],n.blockedOn===null);)Mf(n),n.blockedOn===null&&rn.shift()}var Si=Gt.ReactCurrentBatchConfig,ao=!0;function Um(t,e,n,i){var s=$,r=Si.transition;Si.transition=null;try{$=1,uc(t,e,n,i)}finally{$=s,Si.transition=r}}function Ym(t,e,n,i){var s=$,r=Si.transition;Si.transition=null;try{$=4,uc(t,e,n,i)}finally{$=s,Si.transition=r}}function uc(t,e,n,i){if(ao){var s=sa(t,e,n,i);if(s===null)yl(t,e,i,co,n),_u(t,i);else if(Wm(s,t,e,n,i))i.stopPropagation();else if(_u(t,i),e&4&&-1<Hm.indexOf(t)){for(;s!==null;){var r=qs(s);if(r!==null&&Sf(r),r=sa(t,e,n,i),r===null&&yl(t,e,i,co,n),r===s)break;s=r}s!==null&&i.stopPropagation()}else yl(t,e,i,null,n)}}var co=null;function sa(t,e,n,i){if(co=null,t=oc(i),t=Bn(t),t!==null)if(e=ni(t),e===null)t=null;else if(n=e.tag,n===13){if(t=gf(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return co=t,null}function Pf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lm()){case lc:return 1;case _f:return 4;case oo:case Rm:return 16;case xf:return 536870912;default:return 16}default:return 16}}var ln=null,dc=null,jr=null;function Tf(){if(jr)return jr;var t,e=dc,n=e.length,i,s="value"in ln?ln.value:ln.textContent,r=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===s[r-i];i++);return jr=s.slice(t,1<i?1-i:void 0)}function Br(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function hr(){return!0}function ku(){return!1}function Je(t){function e(n,i,s,r,o){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(r):r[l]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?hr:ku,this.isPropagationStopped=ku,this}return oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hr)},persist:function(){},isPersistent:hr}),e}var Fi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hc=Je(Fi),Zs=oe({},Fi,{view:0,detail:0}),Xm=Je(Zs),al,cl,$i,Io=oe({},Zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$i&&($i&&t.type==="mousemove"?(al=t.screenX-$i.screenX,cl=t.screenY-$i.screenY):cl=al=0,$i=t),al)},movementY:function(t){return"movementY"in t?t.movementY:cl}}),wu=Je(Io),Km=oe({},Io,{dataTransfer:0}),Qm=Je(Km),Gm=oe({},Zs,{relatedTarget:0}),ul=Je(Gm),Zm=oe({},Fi,{animationName:0,elapsedTime:0,pseudoElement:0}),qm=Je(Zm),Jm=oe({},Fi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),e0=Je(Jm),t0=oe({},Fi,{data:0}),Su=Je(t0),n0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},i0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},s0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function r0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=s0[t])?!!e[t]:!1}function fc(){return r0}var o0=oe({},Zs,{key:function(t){if(t.key){var e=n0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Br(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?i0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fc,charCode:function(t){return t.type==="keypress"?Br(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Br(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),l0=Je(o0),a0=oe({},Io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bu=Je(a0),c0=oe({},Zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fc}),u0=Je(c0),d0=oe({},Fi,{propertyName:0,elapsedTime:0,pseudoElement:0}),h0=Je(d0),f0=oe({},Io,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),p0=Je(f0),g0=[9,13,27,32],pc=Yt&&"CompositionEvent"in window,ds=null;Yt&&"documentMode"in document&&(ds=document.documentMode);var m0=Yt&&"TextEvent"in window&&!ds,Df=Yt&&(!pc||ds&&8<ds&&11>=ds),Eu=String.fromCharCode(32),Cu=!1;function Of(t,e){switch(t){case"keyup":return g0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ui=!1;function y0(t,e){switch(t){case"compositionend":return Nf(e);case"keypress":return e.which!==32?null:(Cu=!0,Eu);case"textInput":return t=e.data,t===Eu&&Cu?null:t;default:return null}}function v0(t,e){if(ui)return t==="compositionend"||!pc&&Of(t,e)?(t=Tf(),jr=dc=ln=null,ui=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Df&&e.locale!=="ko"?null:e.data;default:return null}}var _0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_0[t.type]:e==="textarea"}function Lf(t,e,n,i){uf(i),e=uo(e,"onChange"),0<e.length&&(n=new hc("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var hs=null,Ts=null;function x0(t){$f(t,0)}function Fo(t){var e=fi(t);if(nf(e))return t}function k0(t,e){if(t==="change")return e}var Rf=!1;if(Yt){var dl;if(Yt){var hl="oninput"in document;if(!hl){var Pu=document.createElement("div");Pu.setAttribute("oninput","return;"),hl=typeof Pu.oninput=="function"}dl=hl}else dl=!1;Rf=dl&&(!document.documentMode||9<document.documentMode)}function Tu(){hs&&(hs.detachEvent("onpropertychange",Af),Ts=hs=null)}function Af(t){if(t.propertyName==="value"&&Fo(Ts)){var e=[];Lf(e,Ts,t,oc(t)),pf(x0,e)}}function w0(t,e,n){t==="focusin"?(Tu(),hs=e,Ts=n,hs.attachEvent("onpropertychange",Af)):t==="focusout"&&Tu()}function S0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fo(Ts)}function b0(t,e){if(t==="click")return Fo(e)}function E0(t,e){if(t==="input"||t==="change")return Fo(e)}function C0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var vt=typeof Object.is=="function"?Object.is:C0;function Ds(t,e){if(vt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Bl.call(e,s)||!vt(t[s],e[s]))return!1}return!0}function Du(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ou(t,e){var n=Du(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Du(n)}}function zf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?zf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function If(){for(var t=window,e=io();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=io(t.document)}return e}function gc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function M0(t){var e=If(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&zf(n.ownerDocument.documentElement,n)){if(i!==null&&gc(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,r=Math.min(i.start,s);i=i.end===void 0?r:Math.min(i.end,s),!t.extend&&r>i&&(s=i,i=r,r=s),s=Ou(n,r);var o=Ou(n,i);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),r>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var P0=Yt&&"documentMode"in document&&11>=document.documentMode,di=null,ra=null,fs=null,oa=!1;function Nu(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;oa||di==null||di!==io(i)||(i=di,"selectionStart"in i&&gc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),fs&&Ds(fs,i)||(fs=i,i=uo(ra,"onSelect"),0<i.length&&(e=new hc("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=di)))}function fr(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var hi={animationend:fr("Animation","AnimationEnd"),animationiteration:fr("Animation","AnimationIteration"),animationstart:fr("Animation","AnimationStart"),transitionend:fr("Transition","TransitionEnd")},fl={},Ff={};Yt&&(Ff=document.createElement("div").style,"AnimationEvent"in window||(delete hi.animationend.animation,delete hi.animationiteration.animation,delete hi.animationstart.animation),"TransitionEvent"in window||delete hi.transitionend.transition);function jo(t){if(fl[t])return fl[t];if(!hi[t])return t;var e=hi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ff)return fl[t]=e[n];return t}var jf=jo("animationend"),Bf=jo("animationiteration"),Vf=jo("animationstart"),Hf=jo("transitionend"),Wf=new Map,Lu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mn(t,e){Wf.set(t,e),ti(e,[t])}for(var pl=0;pl<Lu.length;pl++){var gl=Lu[pl],T0=gl.toLowerCase(),D0=gl[0].toUpperCase()+gl.slice(1);Mn(T0,"on"+D0)}Mn(jf,"onAnimationEnd");Mn(Bf,"onAnimationIteration");Mn(Vf,"onAnimationStart");Mn("dblclick","onDoubleClick");Mn("focusin","onFocus");Mn("focusout","onBlur");Mn(Hf,"onTransitionEnd");Mi("onMouseEnter",["mouseout","mouseover"]);Mi("onMouseLeave",["mouseout","mouseover"]);Mi("onPointerEnter",["pointerout","pointerover"]);Mi("onPointerLeave",["pointerout","pointerover"]);ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ns="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),O0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ns));function Ru(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Tm(i,e,void 0,t),t.currentTarget=null}function $f(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],s=i.event;i=i.listeners;e:{var r=void 0;if(e)for(var o=i.length-1;0<=o;o--){var l=i[o],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==r&&s.isPropagationStopped())break e;Ru(s,l,c),r=a}else for(o=0;o<i.length;o++){if(l=i[o],a=l.instance,c=l.currentTarget,l=l.listener,a!==r&&s.isPropagationStopped())break e;Ru(s,l,c),r=a}}}if(ro)throw t=ta,ro=!1,ta=null,t}function Z(t,e){var n=e[da];n===void 0&&(n=e[da]=new Set);var i=t+"__bubble";n.has(i)||(Uf(e,t,2,!1),n.add(i))}function ml(t,e,n){var i=0;e&&(i|=4),Uf(n,t,i,e)}var pr="_reactListening"+Math.random().toString(36).slice(2);function Os(t){if(!t[pr]){t[pr]=!0,Zh.forEach(function(n){n!=="selectionchange"&&(O0.has(n)||ml(n,!1,t),ml(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[pr]||(e[pr]=!0,ml("selectionchange",!1,e))}}function Uf(t,e,n,i){switch(Pf(e)){case 1:var s=Um;break;case 4:s=Ym;break;default:s=uc}n=s.bind(null,e,n,t),s=void 0,!ea||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),i?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function yl(t,e,n,i,s){var r=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var l=i.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=i.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===s||a.nodeType===8&&a.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Bn(l),o===null)return;if(a=o.tag,a===5||a===6){i=r=o;continue e}l=l.parentNode}}i=i.return}pf(function(){var c=r,u=oc(n),d=[];e:{var h=Wf.get(t);if(h!==void 0){var f=hc,m=t;switch(t){case"keypress":if(Br(n)===0)break e;case"keydown":case"keyup":f=l0;break;case"focusin":m="focus",f=ul;break;case"focusout":m="blur",f=ul;break;case"beforeblur":case"afterblur":f=ul;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=wu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=Qm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=u0;break;case jf:case Bf:case Vf:f=qm;break;case Hf:f=h0;break;case"scroll":f=Xm;break;case"wheel":f=p0;break;case"copy":case"cut":case"paste":f=e0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=bu}var y=(e&4)!==0,x=!y&&t==="scroll",g=y?h!==null?h+"Capture":null:h;y=[];for(var p=c,v;p!==null;){v=p;var k=v.stateNode;if(v.tag===5&&k!==null&&(v=k,g!==null&&(k=Es(p,g),k!=null&&y.push(Ns(p,k,v)))),x)break;p=p.return}0<y.length&&(h=new f(h,m,null,n,u),d.push({event:h,listeners:y}))}}if((e&7)===0){e:{if(h=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",h&&n!==ql&&(m=n.relatedTarget||n.fromElement)&&(Bn(m)||m[Xt]))break e;if((f||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,f?(m=n.relatedTarget||n.toElement,f=c,m=m?Bn(m):null,m!==null&&(x=ni(m),m!==x||m.tag!==5&&m.tag!==6)&&(m=null)):(f=null,m=c),f!==m)){if(y=wu,k="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=bu,k="onPointerLeave",g="onPointerEnter",p="pointer"),x=f==null?h:fi(f),v=m==null?h:fi(m),h=new y(k,p+"leave",f,n,u),h.target=x,h.relatedTarget=v,k=null,Bn(u)===c&&(y=new y(g,p+"enter",m,n,u),y.target=v,y.relatedTarget=x,k=y),x=k,f&&m)t:{for(y=f,g=m,p=0,v=y;v;v=si(v))p++;for(v=0,k=g;k;k=si(k))v++;for(;0<p-v;)y=si(y),p--;for(;0<v-p;)g=si(g),v--;for(;p--;){if(y===g||g!==null&&y===g.alternate)break t;y=si(y),g=si(g)}y=null}else y=null;f!==null&&Au(d,h,f,y,!1),m!==null&&x!==null&&Au(d,x,m,y,!0)}}e:{if(h=c?fi(c):window,f=h.nodeName&&h.nodeName.toLowerCase(),f==="select"||f==="input"&&h.type==="file")var w=k0;else if(Mu(h))if(Rf)w=E0;else{w=S0;var S=w0}else(f=h.nodeName)&&f.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(w=b0);if(w&&(w=w(t,c))){Lf(d,w,n,u);break e}S&&S(t,h,c),t==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&Xl(h,"number",h.value)}switch(S=c?fi(c):window,t){case"focusin":(Mu(S)||S.contentEditable==="true")&&(di=S,ra=c,fs=null);break;case"focusout":fs=ra=di=null;break;case"mousedown":oa=!0;break;case"contextmenu":case"mouseup":case"dragend":oa=!1,Nu(d,n,u);break;case"selectionchange":if(P0)break;case"keydown":case"keyup":Nu(d,n,u)}var b;if(pc)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else ui?Of(t,n)&&(E="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Df&&n.locale!=="ko"&&(ui||E!=="onCompositionStart"?E==="onCompositionEnd"&&ui&&(b=Tf()):(ln=u,dc="value"in ln?ln.value:ln.textContent,ui=!0)),S=uo(c,E),0<S.length&&(E=new Su(E,t,null,n,u),d.push({event:E,listeners:S}),b?E.data=b:(b=Nf(n),b!==null&&(E.data=b)))),(b=m0?y0(t,n):v0(t,n))&&(c=uo(c,"onBeforeInput"),0<c.length&&(u=new Su("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=b))}$f(d,e)})}function Ns(t,e,n){return{instance:t,listener:e,currentTarget:n}}function uo(t,e){for(var n=e+"Capture",i=[];t!==null;){var s=t,r=s.stateNode;s.tag===5&&r!==null&&(s=r,r=Es(t,n),r!=null&&i.unshift(Ns(t,r,s)),r=Es(t,e),r!=null&&i.push(Ns(t,r,s))),t=t.return}return i}function si(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Au(t,e,n,i,s){for(var r=e._reactName,o=[];n!==null&&n!==i;){var l=n,a=l.alternate,c=l.stateNode;if(a!==null&&a===i)break;l.tag===5&&c!==null&&(l=c,s?(a=Es(n,r),a!=null&&o.unshift(Ns(n,a,l))):s||(a=Es(n,r),a!=null&&o.push(Ns(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var N0=/\r\n?/g,L0=/\u0000|\uFFFD/g;function zu(t){return(typeof t=="string"?t:""+t).replace(N0,`
`).replace(L0,"")}function gr(t,e,n){if(e=zu(e),zu(t)!==e&&n)throw Error(C(425))}function ho(){}var la=null,aa=null;function ca(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ua=typeof setTimeout=="function"?setTimeout:void 0,R0=typeof clearTimeout=="function"?clearTimeout:void 0,Iu=typeof Promise=="function"?Promise:void 0,A0=typeof queueMicrotask=="function"?queueMicrotask:typeof Iu<"u"?function(t){return Iu.resolve(null).then(t).catch(z0)}:ua;function z0(t){setTimeout(function(){throw t})}function vl(t,e){var n=e,i=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(i===0){t.removeChild(s),Ps(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=s}while(n);Ps(e)}function mn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fu(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ji=Math.random().toString(36).slice(2),Et="__reactFiber$"+ji,Ls="__reactProps$"+ji,Xt="__reactContainer$"+ji,da="__reactEvents$"+ji,I0="__reactListeners$"+ji,F0="__reactHandles$"+ji;function Bn(t){var e=t[Et];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Xt]||n[Et]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fu(t);t!==null;){if(n=t[Et])return n;t=Fu(t)}return e}t=n,n=t.parentNode}return null}function qs(t){return t=t[Et]||t[Xt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function Bo(t){return t[Ls]||null}var ha=[],pi=-1;function Pn(t){return{current:t}}function J(t){0>pi||(t.current=ha[pi],ha[pi]=null,pi--)}function K(t,e){pi++,ha[pi]=t.current,t.current=e}var bn={},Te=Pn(bn),Be=Pn(!1),Kn=bn;function Pi(t,e){var n=t.type.contextTypes;if(!n)return bn;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var s={},r;for(r in n)s[r]=e[r];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Ve(t){return t=t.childContextTypes,t!=null}function fo(){J(Be),J(Te)}function ju(t,e,n){if(Te.current!==bn)throw Error(C(168));K(Te,e),K(Be,n)}function Yf(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var s in i)if(!(s in e))throw Error(C(108,wm(t)||"Unknown",s));return oe({},n,i)}function po(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||bn,Kn=Te.current,K(Te,t),K(Be,Be.current),!0}function Bu(t,e,n){var i=t.stateNode;if(!i)throw Error(C(169));n?(t=Yf(t,e,Kn),i.__reactInternalMemoizedMergedChildContext=t,J(Be),J(Te),K(Te,t)):J(Be),K(Be,n)}var It=null,Vo=!1,_l=!1;function Xf(t){It===null?It=[t]:It.push(t)}function j0(t){Vo=!0,Xf(t)}function Tn(){if(!_l&&It!==null){_l=!0;var t=0,e=$;try{var n=It;for($=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}It=null,Vo=!1}catch(s){throw It!==null&&(It=It.slice(t+1)),vf(lc,Tn),s}finally{$=e,_l=!1}}return null}var gi=[],mi=0,go=null,mo=0,nt=[],it=0,Qn=null,Bt=1,Vt="";function zn(t,e){gi[mi++]=mo,gi[mi++]=go,go=t,mo=e}function Kf(t,e,n){nt[it++]=Bt,nt[it++]=Vt,nt[it++]=Qn,Qn=t;var i=Bt;t=Vt;var s=32-gt(i)-1;i&=~(1<<s),n+=1;var r=32-gt(e)+s;if(30<r){var o=s-s%5;r=(i&(1<<o)-1).toString(32),i>>=o,s-=o,Bt=1<<32-gt(e)+s|n<<s|i,Vt=r+t}else Bt=1<<r|n<<s|i,Vt=t}function mc(t){t.return!==null&&(zn(t,1),Kf(t,1,0))}function yc(t){for(;t===go;)go=gi[--mi],gi[mi]=null,mo=gi[--mi],gi[mi]=null;for(;t===Qn;)Qn=nt[--it],nt[it]=null,Vt=nt[--it],nt[it]=null,Bt=nt[--it],nt[it]=null}var Ge=null,Qe=null,te=!1,ft=null;function Qf(t,e){var n=rt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Vu(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ge=t,Qe=mn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ge=t,Qe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qn!==null?{id:Bt,overflow:Vt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=rt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ge=t,Qe=null,!0):!1;default:return!1}}function fa(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pa(t){if(te){var e=Qe;if(e){var n=e;if(!Vu(t,e)){if(fa(t))throw Error(C(418));e=mn(n.nextSibling);var i=Ge;e&&Vu(t,e)?Qf(i,n):(t.flags=t.flags&-4097|2,te=!1,Ge=t)}}else{if(fa(t))throw Error(C(418));t.flags=t.flags&-4097|2,te=!1,Ge=t}}}function Hu(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ge=t}function mr(t){if(t!==Ge)return!1;if(!te)return Hu(t),te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ca(t.type,t.memoizedProps)),e&&(e=Qe)){if(fa(t))throw Gf(),Error(C(418));for(;e;)Qf(t,e),e=mn(e.nextSibling)}if(Hu(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Qe=mn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Qe=null}}else Qe=Ge?mn(t.stateNode.nextSibling):null;return!0}function Gf(){for(var t=Qe;t;)t=mn(t.nextSibling)}function Ti(){Qe=Ge=null,te=!1}function vc(t){ft===null?ft=[t]:ft.push(t)}var B0=Gt.ReactCurrentBatchConfig;function dt(t,e){if(t&&t.defaultProps){e=oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var yo=Pn(null),vo=null,yi=null,_c=null;function xc(){_c=yi=vo=null}function kc(t){var e=yo.current;J(yo),t._currentValue=e}function ga(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function bi(t,e){vo=t,_c=yi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(je=!0),t.firstContext=null)}function lt(t){var e=t._currentValue;if(_c!==t)if(t={context:t,memoizedValue:e,next:null},yi===null){if(vo===null)throw Error(C(308));yi=t,vo.dependencies={lanes:0,firstContext:t}}else yi=yi.next=t;return e}var Vn=null;function wc(t){Vn===null?Vn=[t]:Vn.push(t)}function Zf(t,e,n,i){var s=e.interleaved;return s===null?(n.next=n,wc(e)):(n.next=s.next,s.next=n),e.interleaved=n,Kt(t,i)}function Kt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var sn=!1;function Sc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qf(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ut(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function yn(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(B&2)!==0){var s=i.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),i.pending=e,Kt(t,n)}return s=i.interleaved,s===null?(e.next=e,wc(i)):(e.next=s.next,s.next=e),i.interleaved=e,Kt(t,n)}function Vr(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ac(t,n)}}function Wu(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};r===null?s=r=o:r=r.next=o,n=n.next}while(n!==null);r===null?s=r=e:r=r.next=e}else s=r=e;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:r,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function _o(t,e,n,i){var s=t.updateQueue;sn=!1;var r=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var a=l,c=a.next;a.next=null,o===null?r=c:o.next=c,o=a;var u=t.alternate;u!==null&&(u=u.updateQueue,l=u.lastBaseUpdate,l!==o&&(l===null?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=a))}if(r!==null){var d=s.baseState;o=0,u=c=a=null,l=r;do{var h=l.lane,f=l.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:f,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=t,y=l;switch(h=e,f=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){d=m.call(f,d,h);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,h=typeof m=="function"?m.call(f,d,h):m,h==null)break e;d=oe({},d,h);break e;case 2:sn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=s.effects,h===null?s.effects=[l]:h.push(l))}else f={eventTime:f,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},u===null?(c=u=f,a=d):u=u.next=f,o|=h;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;h=l,l=h.next,h.next=null,s.lastBaseUpdate=h,s.shared.pending=null}}while(1);if(u===null&&(a=d),s.baseState=a,s.firstBaseUpdate=c,s.lastBaseUpdate=u,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else r===null&&(s.shared.lanes=0);Zn|=o,t.lanes=o,t.memoizedState=d}}function $u(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],s=i.callback;if(s!==null){if(i.callback=null,i=n,typeof s!="function")throw Error(C(191,s));s.call(i)}}}var Jf=new Gh.Component().refs;function ma(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ho={isMounted:function(t){return(t=t._reactInternals)?ni(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Ne(),s=_n(t),r=Ut(i,s);r.payload=e,n!=null&&(r.callback=n),e=yn(t,r,s),e!==null&&(mt(e,t,s,i),Vr(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Ne(),s=_n(t),r=Ut(i,s);r.tag=1,r.payload=e,n!=null&&(r.callback=n),e=yn(t,r,s),e!==null&&(mt(e,t,s,i),Vr(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ne(),i=_n(t),s=Ut(n,i);s.tag=2,e!=null&&(s.callback=e),e=yn(t,s,i),e!==null&&(mt(e,t,i,n),Vr(e,t,i))}};function Uu(t,e,n,i,s,r,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,r,o):e.prototype&&e.prototype.isPureReactComponent?!Ds(n,i)||!Ds(s,r):!0}function ep(t,e,n){var i=!1,s=bn,r=e.contextType;return typeof r=="object"&&r!==null?r=lt(r):(s=Ve(e)?Kn:Te.current,i=e.contextTypes,r=(i=i!=null)?Pi(t,s):bn),e=new e(n,r),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ho,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=r),e}function Yu(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ho.enqueueReplaceState(e,e.state,null)}function ya(t,e,n,i){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs=Jf,Sc(t);var r=e.contextType;typeof r=="object"&&r!==null?s.context=lt(r):(r=Ve(e)?Kn:Te.current,s.context=Pi(t,r)),s.state=t.memoizedState,r=e.getDerivedStateFromProps,typeof r=="function"&&(ma(t,e,r,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Ho.enqueueReplaceState(s,s.state,null),_o(t,n,s,i),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Ui(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var i=n.stateNode}if(!i)throw Error(C(147,t));var s=i,r=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===r?e.ref:(e=function(o){var l=s.refs;l===Jf&&(l=s.refs={}),o===null?delete l[r]:l[r]=o},e._stringRef=r,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function yr(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Xu(t){var e=t._init;return e(t._payload)}function tp(t){function e(g,p){if(t){var v=g.deletions;v===null?(g.deletions=[p],g.flags|=16):v.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function i(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function s(g,p){return g=xn(g,p),g.index=0,g.sibling=null,g}function r(g,p,v){return g.index=v,t?(v=g.alternate,v!==null?(v=v.index,v<p?(g.flags|=2,p):v):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function l(g,p,v,k){return p===null||p.tag!==6?(p=Cl(v,g.mode,k),p.return=g,p):(p=s(p,v),p.return=g,p)}function a(g,p,v,k){var w=v.type;return w===ci?u(g,p,v.props.children,k,v.key):p!==null&&(p.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===nn&&Xu(w)===p.type)?(k=s(p,v.props),k.ref=Ui(g,p,v),k.return=g,k):(k=Xr(v.type,v.key,v.props,null,g.mode,k),k.ref=Ui(g,p,v),k.return=g,k)}function c(g,p,v,k){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=Ml(v,g.mode,k),p.return=g,p):(p=s(p,v.children||[]),p.return=g,p)}function u(g,p,v,k,w){return p===null||p.tag!==7?(p=Un(v,g.mode,k,w),p.return=g,p):(p=s(p,v),p.return=g,p)}function d(g,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Cl(""+p,g.mode,v),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case or:return v=Xr(p.type,p.key,p.props,null,g.mode,v),v.ref=Ui(g,null,p),v.return=g,v;case ai:return p=Ml(p,g.mode,v),p.return=g,p;case nn:var k=p._init;return d(g,k(p._payload),v)}if(es(p)||Bi(p))return p=Un(p,g.mode,v,null),p.return=g,p;yr(g,p)}return null}function h(g,p,v,k){var w=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return w!==null?null:l(g,p,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case or:return v.key===w?a(g,p,v,k):null;case ai:return v.key===w?c(g,p,v,k):null;case nn:return w=v._init,h(g,p,w(v._payload),k)}if(es(v)||Bi(v))return w!==null?null:u(g,p,v,k,null);yr(g,v)}return null}function f(g,p,v,k,w){if(typeof k=="string"&&k!==""||typeof k=="number")return g=g.get(v)||null,l(p,g,""+k,w);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case or:return g=g.get(k.key===null?v:k.key)||null,a(p,g,k,w);case ai:return g=g.get(k.key===null?v:k.key)||null,c(p,g,k,w);case nn:var S=k._init;return f(g,p,v,S(k._payload),w)}if(es(k)||Bi(k))return g=g.get(v)||null,u(p,g,k,w,null);yr(p,k)}return null}function m(g,p,v,k){for(var w=null,S=null,b=p,E=p=0,D=null;b!==null&&E<v.length;E++){b.index>E?(D=b,b=null):D=b.sibling;var T=h(g,b,v[E],k);if(T===null){b===null&&(b=D);break}t&&b&&T.alternate===null&&e(g,b),p=r(T,p,E),S===null?w=T:S.sibling=T,S=T,b=D}if(E===v.length)return n(g,b),te&&zn(g,E),w;if(b===null){for(;E<v.length;E++)b=d(g,v[E],k),b!==null&&(p=r(b,p,E),S===null?w=b:S.sibling=b,S=b);return te&&zn(g,E),w}for(b=i(g,b);E<v.length;E++)D=f(b,g,E,v[E],k),D!==null&&(t&&D.alternate!==null&&b.delete(D.key===null?E:D.key),p=r(D,p,E),S===null?w=D:S.sibling=D,S=D);return t&&b.forEach(function(R){return e(g,R)}),te&&zn(g,E),w}function y(g,p,v,k){var w=Bi(v);if(typeof w!="function")throw Error(C(150));if(v=w.call(v),v==null)throw Error(C(151));for(var S=w=null,b=p,E=p=0,D=null,T=v.next();b!==null&&!T.done;E++,T=v.next()){b.index>E?(D=b,b=null):D=b.sibling;var R=h(g,b,T.value,k);if(R===null){b===null&&(b=D);break}t&&b&&R.alternate===null&&e(g,b),p=r(R,p,E),S===null?w=R:S.sibling=R,S=R,b=D}if(T.done)return n(g,b),te&&zn(g,E),w;if(b===null){for(;!T.done;E++,T=v.next())T=d(g,T.value,k),T!==null&&(p=r(T,p,E),S===null?w=T:S.sibling=T,S=T);return te&&zn(g,E),w}for(b=i(g,b);!T.done;E++,T=v.next())T=f(b,g,E,T.value,k),T!==null&&(t&&T.alternate!==null&&b.delete(T.key===null?E:T.key),p=r(T,p,E),S===null?w=T:S.sibling=T,S=T);return t&&b.forEach(function(I){return e(g,I)}),te&&zn(g,E),w}function x(g,p,v,k){if(typeof v=="object"&&v!==null&&v.type===ci&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case or:e:{for(var w=v.key,S=p;S!==null;){if(S.key===w){if(w=v.type,w===ci){if(S.tag===7){n(g,S.sibling),p=s(S,v.props.children),p.return=g,g=p;break e}}else if(S.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===nn&&Xu(w)===S.type){n(g,S.sibling),p=s(S,v.props),p.ref=Ui(g,S,v),p.return=g,g=p;break e}n(g,S);break}else e(g,S);S=S.sibling}v.type===ci?(p=Un(v.props.children,g.mode,k,v.key),p.return=g,g=p):(k=Xr(v.type,v.key,v.props,null,g.mode,k),k.ref=Ui(g,p,v),k.return=g,g=k)}return o(g);case ai:e:{for(S=v.key;p!==null;){if(p.key===S)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(g,p.sibling),p=s(p,v.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=Ml(v,g.mode,k),p.return=g,g=p}return o(g);case nn:return S=v._init,x(g,p,S(v._payload),k)}if(es(v))return m(g,p,v,k);if(Bi(v))return y(g,p,v,k);yr(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(g,p.sibling),p=s(p,v),p.return=g,g=p):(n(g,p),p=Cl(v,g.mode,k),p.return=g,g=p),o(g)):n(g,p)}return x}var Di=tp(!0),np=tp(!1),Js={},Mt=Pn(Js),Rs=Pn(Js),As=Pn(Js);function Hn(t){if(t===Js)throw Error(C(174));return t}function bc(t,e){switch(K(As,e),K(Rs,t),K(Mt,Js),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ql(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ql(e,t)}J(Mt),K(Mt,e)}function Oi(){J(Mt),J(Rs),J(As)}function ip(t){Hn(As.current);var e=Hn(Mt.current),n=Ql(e,t.type);e!==n&&(K(Rs,t),K(Mt,n))}function Ec(t){Rs.current===t&&(J(Mt),J(Rs))}var se=Pn(0);function xo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var xl=[];function Cc(){for(var t=0;t<xl.length;t++)xl[t]._workInProgressVersionPrimary=null;xl.length=0}var Hr=Gt.ReactCurrentDispatcher,kl=Gt.ReactCurrentBatchConfig,Gn=0,re=null,fe=null,ye=null,ko=!1,ps=!1,zs=0,V0=0;function be(){throw Error(C(321))}function Mc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!vt(t[n],e[n]))return!1;return!0}function Pc(t,e,n,i,s,r){if(Gn=r,re=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Hr.current=t===null||t.memoizedState===null?U0:Y0,t=n(i,s),ps){r=0;do{if(ps=!1,zs=0,25<=r)throw Error(C(301));r+=1,ye=fe=null,e.updateQueue=null,Hr.current=X0,t=n(i,s)}while(ps)}if(Hr.current=wo,e=fe!==null&&fe.next!==null,Gn=0,ye=fe=re=null,ko=!1,e)throw Error(C(300));return t}function Tc(){var t=zs!==0;return zs=0,t}function St(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?re.memoizedState=ye=t:ye=ye.next=t,ye}function at(){if(fe===null){var t=re.alternate;t=t!==null?t.memoizedState:null}else t=fe.next;var e=ye===null?re.memoizedState:ye.next;if(e!==null)ye=e,fe=t;else{if(t===null)throw Error(C(310));fe=t,t={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},ye===null?re.memoizedState=ye=t:ye=ye.next=t}return ye}function Is(t,e){return typeof e=="function"?e(t):e}function wl(t){var e=at(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var i=fe,s=i.baseQueue,r=n.pending;if(r!==null){if(s!==null){var o=s.next;s.next=r.next,r.next=o}i.baseQueue=s=r,n.pending=null}if(s!==null){r=s.next,i=i.baseState;var l=o=null,a=null,c=r;do{var u=c.lane;if((Gn&u)===u)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(l=a=d,o=i):a=a.next=d,re.lanes|=u,Zn|=u}c=c.next}while(c!==null&&c!==r);a===null?o=i:a.next=l,vt(i,e.memoizedState)||(je=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=a,n.lastRenderedState=i}if(t=n.interleaved,t!==null){s=t;do r=s.lane,re.lanes|=r,Zn|=r,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Sl(t){var e=at(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var i=n.dispatch,s=n.pending,r=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do r=t(r,o.action),o=o.next;while(o!==s);vt(r,e.memoizedState)||(je=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),n.lastRenderedState=r}return[r,i]}function sp(){}function rp(t,e){var n=re,i=at(),s=e(),r=!vt(i.memoizedState,s);if(r&&(i.memoizedState=s,je=!0),i=i.queue,Dc(ap.bind(null,n,i,t),[t]),i.getSnapshot!==e||r||ye!==null&&ye.memoizedState.tag&1){if(n.flags|=2048,Fs(9,lp.bind(null,n,i,s,e),void 0,null),_e===null)throw Error(C(349));(Gn&30)!==0||op(n,e,s)}return s}function op(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=re.updateQueue,e===null?(e={lastEffect:null,stores:null},re.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function lp(t,e,n,i){e.value=n,e.getSnapshot=i,cp(e)&&up(t)}function ap(t,e,n){return n(function(){cp(e)&&up(t)})}function cp(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!vt(t,n)}catch{return!0}}function up(t){var e=Kt(t,1);e!==null&&mt(e,t,1,-1)}function Ku(t){var e=St();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Is,lastRenderedState:t},e.queue=t,t=t.dispatch=$0.bind(null,re,t),[e.memoizedState,t]}function Fs(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=re.updateQueue,e===null?(e={lastEffect:null,stores:null},re.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function dp(){return at().memoizedState}function Wr(t,e,n,i){var s=St();re.flags|=t,s.memoizedState=Fs(1|e,n,void 0,i===void 0?null:i)}function Wo(t,e,n,i){var s=at();i=i===void 0?null:i;var r=void 0;if(fe!==null){var o=fe.memoizedState;if(r=o.destroy,i!==null&&Mc(i,o.deps)){s.memoizedState=Fs(e,n,r,i);return}}re.flags|=t,s.memoizedState=Fs(1|e,n,r,i)}function Qu(t,e){return Wr(8390656,8,t,e)}function Dc(t,e){return Wo(2048,8,t,e)}function hp(t,e){return Wo(4,2,t,e)}function fp(t,e){return Wo(4,4,t,e)}function pp(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function gp(t,e,n){return n=n!=null?n.concat([t]):null,Wo(4,4,pp.bind(null,e,t),n)}function Oc(){}function mp(t,e){var n=at();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Mc(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function yp(t,e){var n=at();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Mc(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function vp(t,e,n){return(Gn&21)===0?(t.baseState&&(t.baseState=!1,je=!0),t.memoizedState=n):(vt(n,e)||(n=kf(),re.lanes|=n,Zn|=n,t.baseState=!0),e)}function H0(t,e){var n=$;$=n!==0&&4>n?n:4,t(!0);var i=kl.transition;kl.transition={};try{t(!1),e()}finally{$=n,kl.transition=i}}function _p(){return at().memoizedState}function W0(t,e,n){var i=_n(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},xp(t))kp(e,n);else if(n=Zf(t,e,n,i),n!==null){var s=Ne();mt(n,t,i,s),wp(n,e,i)}}function $0(t,e,n){var i=_n(t),s={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(xp(t))kp(e,s);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var o=e.lastRenderedState,l=r(o,n);if(s.hasEagerState=!0,s.eagerState=l,vt(l,o)){var a=e.interleaved;a===null?(s.next=s,wc(e)):(s.next=a.next,a.next=s),e.interleaved=s;return}}catch{}finally{}n=Zf(t,e,s,i),n!==null&&(s=Ne(),mt(n,t,i,s),wp(n,e,i))}}function xp(t){var e=t.alternate;return t===re||e!==null&&e===re}function kp(t,e){ps=ko=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function wp(t,e,n){if((n&4194240)!==0){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ac(t,n)}}var wo={readContext:lt,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},U0={readContext:lt,useCallback:function(t,e){return St().memoizedState=[t,e===void 0?null:e],t},useContext:lt,useEffect:Qu,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wr(4194308,4,pp.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wr(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wr(4,2,t,e)},useMemo:function(t,e){var n=St();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=St();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=W0.bind(null,re,t),[i.memoizedState,t]},useRef:function(t){var e=St();return t={current:t},e.memoizedState=t},useState:Ku,useDebugValue:Oc,useDeferredValue:function(t){return St().memoizedState=t},useTransition:function(){var t=Ku(!1),e=t[0];return t=H0.bind(null,t[1]),St().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=re,s=St();if(te){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),_e===null)throw Error(C(349));(Gn&30)!==0||op(i,e,n)}s.memoizedState=n;var r={value:n,getSnapshot:e};return s.queue=r,Qu(ap.bind(null,i,r,t),[t]),i.flags|=2048,Fs(9,lp.bind(null,i,r,n,e),void 0,null),n},useId:function(){var t=St(),e=_e.identifierPrefix;if(te){var n=Vt,i=Bt;n=(i&~(1<<32-gt(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=zs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=V0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Y0={readContext:lt,useCallback:mp,useContext:lt,useEffect:Dc,useImperativeHandle:gp,useInsertionEffect:hp,useLayoutEffect:fp,useMemo:yp,useReducer:wl,useRef:dp,useState:function(){return wl(Is)},useDebugValue:Oc,useDeferredValue:function(t){var e=at();return vp(e,fe.memoizedState,t)},useTransition:function(){var t=wl(Is)[0],e=at().memoizedState;return[t,e]},useMutableSource:sp,useSyncExternalStore:rp,useId:_p,unstable_isNewReconciler:!1},X0={readContext:lt,useCallback:mp,useContext:lt,useEffect:Dc,useImperativeHandle:gp,useInsertionEffect:hp,useLayoutEffect:fp,useMemo:yp,useReducer:Sl,useRef:dp,useState:function(){return Sl(Is)},useDebugValue:Oc,useDeferredValue:function(t){var e=at();return fe===null?e.memoizedState=t:vp(e,fe.memoizedState,t)},useTransition:function(){var t=Sl(Is)[0],e=at().memoizedState;return[t,e]},useMutableSource:sp,useSyncExternalStore:rp,useId:_p,unstable_isNewReconciler:!1};function Ni(t,e){try{var n="",i=e;do n+=km(i),i=i.return;while(i);var s=n}catch(r){s=`
Error generating stack: `+r.message+`
`+r.stack}return{value:t,source:e,stack:s,digest:null}}function bl(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function va(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var K0=typeof WeakMap=="function"?WeakMap:Map;function Sp(t,e,n){n=Ut(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){bo||(bo=!0,Pa=i),va(t,e)},n}function bp(t,e,n){n=Ut(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var s=e.value;n.payload=function(){return i(s)},n.callback=function(){va(t,e)}}var r=t.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(n.callback=function(){va(t,e),typeof i!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Gu(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new K0;var s=new Set;i.set(e,s)}else s=i.get(e),s===void 0&&(s=new Set,i.set(e,s));s.has(n)||(s.add(n),t=ay.bind(null,t,e,n),e.then(t,t))}function Zu(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qu(t,e,n,i,s){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ut(-1,1),e.tag=2,yn(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=s,t)}var Q0=Gt.ReactCurrentOwner,je=!1;function Oe(t,e,n,i){e.child=t===null?np(e,null,n,i):Di(e,t.child,n,i)}function Ju(t,e,n,i,s){n=n.render;var r=e.ref;return bi(e,s),i=Pc(t,e,n,i,r,s),n=Tc(),t!==null&&!je?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Qt(t,e,s)):(te&&n&&mc(e),e.flags|=1,Oe(t,e,i,s),e.child)}function ed(t,e,n,i,s){if(t===null){var r=n.type;return typeof r=="function"&&!jc(r)&&r.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=r,Ep(t,e,r,i,s)):(t=Xr(n.type,null,i,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,(t.lanes&s)===0){var o=r.memoizedProps;if(n=n.compare,n=n!==null?n:Ds,n(o,i)&&t.ref===e.ref)return Qt(t,e,s)}return e.flags|=1,t=xn(r,i),t.ref=e.ref,t.return=e,e.child=t}function Ep(t,e,n,i,s){if(t!==null){var r=t.memoizedProps;if(Ds(r,i)&&t.ref===e.ref)if(je=!1,e.pendingProps=i=r,(t.lanes&s)!==0)(t.flags&131072)!==0&&(je=!0);else return e.lanes=t.lanes,Qt(t,e,s)}return _a(t,e,n,i,s)}function Cp(t,e,n){var i=e.pendingProps,s=i.children,r=t!==null?t.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(_i,Xe),Xe|=n;else{if((n&1073741824)===0)return t=r!==null?r.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,K(_i,Xe),Xe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=r!==null?r.baseLanes:n,K(_i,Xe),Xe|=i}else r!==null?(i=r.baseLanes|n,e.memoizedState=null):i=n,K(_i,Xe),Xe|=i;return Oe(t,e,s,n),e.child}function Mp(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _a(t,e,n,i,s){var r=Ve(n)?Kn:Te.current;return r=Pi(e,r),bi(e,s),n=Pc(t,e,n,i,r,s),i=Tc(),t!==null&&!je?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Qt(t,e,s)):(te&&i&&mc(e),e.flags|=1,Oe(t,e,n,s),e.child)}function td(t,e,n,i,s){if(Ve(n)){var r=!0;po(e)}else r=!1;if(bi(e,s),e.stateNode===null)$r(t,e),ep(e,n,i),ya(e,n,i,s),i=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=lt(c):(c=Ve(n)?Kn:Te.current,c=Pi(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==i||a!==c)&&Yu(e,o,i,c),sn=!1;var h=e.memoizedState;o.state=h,_o(e,i,o,s),a=e.memoizedState,l!==i||h!==a||Be.current||sn?(typeof u=="function"&&(ma(e,n,u,i),a=e.memoizedState),(l=sn||Uu(e,n,l,i,h,a,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=a),o.props=i,o.state=a,o.context=c,i=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,qf(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:dt(e.type,l),o.props=c,d=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=lt(a):(a=Ve(n)?Kn:Te.current,a=Pi(e,a));var f=n.getDerivedStateFromProps;(u=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==a)&&Yu(e,o,i,a),sn=!1,h=e.memoizedState,o.state=h,_o(e,i,o,s);var m=e.memoizedState;l!==d||h!==m||Be.current||sn?(typeof f=="function"&&(ma(e,n,f,i),m=e.memoizedState),(c=sn||Uu(e,n,c,i,h,m,a)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=a,i=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return xa(t,e,n,i,r,s)}function xa(t,e,n,i,s,r){Mp(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return s&&Bu(e,n,!1),Qt(t,e,r);i=e.stateNode,Q0.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Di(e,t.child,null,r),e.child=Di(e,null,l,r)):Oe(t,e,l,r),e.memoizedState=i.state,s&&Bu(e,n,!0),e.child}function Pp(t){var e=t.stateNode;e.pendingContext?ju(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ju(t,e.context,!1),bc(t,e.containerInfo)}function nd(t,e,n,i,s){return Ti(),vc(s),e.flags|=256,Oe(t,e,n,i),e.child}var ka={dehydrated:null,treeContext:null,retryLane:0};function wa(t){return{baseLanes:t,cachePool:null,transitions:null}}function Tp(t,e,n){var i=e.pendingProps,s=se.current,r=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(r=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),K(se,s&1),t===null)return pa(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=i.children,t=i.fallback,r?(i=e.mode,r=e.child,o={mode:"hidden",children:o},(i&1)===0&&r!==null?(r.childLanes=0,r.pendingProps=o):r=Yo(o,i,0,null),t=Un(t,i,n,null),r.return=e,t.return=e,r.sibling=t,e.child=r,e.child.memoizedState=wa(n),e.memoizedState=ka,t):Nc(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return G0(t,e,o,i,l,s,n);if(r){r=i.fallback,o=e.mode,s=t.child,l=s.sibling;var a={mode:"hidden",children:i.children};return(o&1)===0&&e.child!==s?(i=e.child,i.childLanes=0,i.pendingProps=a,e.deletions=null):(i=xn(s,a),i.subtreeFlags=s.subtreeFlags&14680064),l!==null?r=xn(l,r):(r=Un(r,o,n,null),r.flags|=2),r.return=e,i.return=e,i.sibling=r,e.child=i,i=r,r=e.child,o=t.child.memoizedState,o=o===null?wa(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},r.memoizedState=o,r.childLanes=t.childLanes&~n,e.memoizedState=ka,i}return r=t.child,t=r.sibling,i=xn(r,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Nc(t,e){return e=Yo({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function vr(t,e,n,i){return i!==null&&vc(i),Di(e,t.child,null,n),t=Nc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function G0(t,e,n,i,s,r,o){if(n)return e.flags&256?(e.flags&=-257,i=bl(Error(C(422))),vr(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(r=i.fallback,s=e.mode,i=Yo({mode:"visible",children:i.children},s,0,null),r=Un(r,s,o,null),r.flags|=2,i.return=e,r.return=e,i.sibling=r,e.child=i,(e.mode&1)!==0&&Di(e,t.child,null,o),e.child.memoizedState=wa(o),e.memoizedState=ka,r);if((e.mode&1)===0)return vr(t,e,o,null);if(s.data==="$!"){if(i=s.nextSibling&&s.nextSibling.dataset,i)var l=i.dgst;return i=l,r=Error(C(419)),i=bl(r,i,void 0),vr(t,e,o,i)}if(l=(o&t.childLanes)!==0,je||l){if(i=_e,i!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=(s&(i.suspendedLanes|o))!==0?0:s,s!==0&&s!==r.retryLane&&(r.retryLane=s,Kt(t,s),mt(i,t,s,-1))}return Fc(),i=bl(Error(C(421))),vr(t,e,o,i)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=cy.bind(null,t),s._reactRetry=e,null):(t=r.treeContext,Qe=mn(s.nextSibling),Ge=e,te=!0,ft=null,t!==null&&(nt[it++]=Bt,nt[it++]=Vt,nt[it++]=Qn,Bt=t.id,Vt=t.overflow,Qn=e),e=Nc(e,i.children),e.flags|=4096,e)}function id(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ga(t.return,e,n)}function El(t,e,n,i,s){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s)}function Dp(t,e,n){var i=e.pendingProps,s=i.revealOrder,r=i.tail;if(Oe(t,e,i.children,n),i=se.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&id(t,n,e);else if(t.tag===19)id(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(K(se,i),(e.mode&1)===0)e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&xo(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),El(e,!1,s,n,r);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&xo(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}El(e,!0,n,null,r);break;case"together":El(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $r(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Qt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Zn|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=xn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=xn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Z0(t,e,n){switch(e.tag){case 3:Pp(e),Ti();break;case 5:ip(e);break;case 1:Ve(e.type)&&po(e);break;case 4:bc(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,s=e.memoizedProps.value;K(yo,i._currentValue),i._currentValue=s;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(K(se,se.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?Tp(t,e,n):(K(se,se.current&1),t=Qt(t,e,n),t!==null?t.sibling:null);K(se,se.current&1);break;case 19:if(i=(n&e.childLanes)!==0,(t.flags&128)!==0){if(i)return Dp(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),K(se,se.current),i)break;return null;case 22:case 23:return e.lanes=0,Cp(t,e,n)}return Qt(t,e,n)}var Op,Sa,Np,Lp;Op=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sa=function(){};Np=function(t,e,n,i){var s=t.memoizedProps;if(s!==i){t=e.stateNode,Hn(Mt.current);var r=null;switch(n){case"input":s=Ul(t,s),i=Ul(t,i),r=[];break;case"select":s=oe({},s,{value:void 0}),i=oe({},i,{value:void 0}),r=[];break;case"textarea":s=Kl(t,s),i=Kl(t,i),r=[];break;default:typeof s.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ho)}Gl(n,i);var o;n=null;for(c in s)if(!i.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ss.hasOwnProperty(c)?r||(r=[]):(r=r||[]).push(c,null));for(c in i){var a=i[c];if(l=s!=null?s[c]:void 0,i.hasOwnProperty(c)&&a!==l&&(a!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(r||(r=[]),r.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(r=r||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(r=r||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ss.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&Z("scroll",t),r||l===a||(r=[])):(r=r||[]).push(c,a))}n&&(r=r||[]).push("style",n);var c=r;(e.updateQueue=c)&&(e.flags|=4)}};Lp=function(t,e,n,i){n!==i&&(e.flags|=4)};function Yi(t,e){if(!te)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ee(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&14680064,i|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function q0(t,e,n){var i=e.pendingProps;switch(yc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(e),null;case 1:return Ve(e.type)&&fo(),Ee(e),null;case 3:return i=e.stateNode,Oi(),J(Be),J(Te),Cc(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(mr(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,ft!==null&&(Oa(ft),ft=null))),Sa(t,e),Ee(e),null;case 5:Ec(e);var s=Hn(As.current);if(n=e.type,t!==null&&e.stateNode!=null)Np(t,e,n,i,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(C(166));return Ee(e),null}if(t=Hn(Mt.current),mr(e)){i=e.stateNode,n=e.type;var r=e.memoizedProps;switch(i[Et]=e,i[Ls]=r,t=(e.mode&1)!==0,n){case"dialog":Z("cancel",i),Z("close",i);break;case"iframe":case"object":case"embed":Z("load",i);break;case"video":case"audio":for(s=0;s<ns.length;s++)Z(ns[s],i);break;case"source":Z("error",i);break;case"img":case"image":case"link":Z("error",i),Z("load",i);break;case"details":Z("toggle",i);break;case"input":hu(i,r),Z("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!r.multiple},Z("invalid",i);break;case"textarea":pu(i,r),Z("invalid",i)}Gl(n,r),s=null;for(var o in r)if(r.hasOwnProperty(o)){var l=r[o];o==="children"?typeof l=="string"?i.textContent!==l&&(r.suppressHydrationWarning!==!0&&gr(i.textContent,l,t),s=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(r.suppressHydrationWarning!==!0&&gr(i.textContent,l,t),s=["children",""+l]):Ss.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Z("scroll",i)}switch(n){case"input":lr(i),fu(i,r,!0);break;case"textarea":lr(i),gu(i);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(i.onclick=ho)}i=s,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=of(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Et]=e,t[Ls]=i,Op(t,e,!1,!1),e.stateNode=t;e:{switch(o=Zl(n,i),n){case"dialog":Z("cancel",t),Z("close",t),s=i;break;case"iframe":case"object":case"embed":Z("load",t),s=i;break;case"video":case"audio":for(s=0;s<ns.length;s++)Z(ns[s],t);s=i;break;case"source":Z("error",t),s=i;break;case"img":case"image":case"link":Z("error",t),Z("load",t),s=i;break;case"details":Z("toggle",t),s=i;break;case"input":hu(t,i),s=Ul(t,i),Z("invalid",t);break;case"option":s=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},s=oe({},i,{value:void 0}),Z("invalid",t);break;case"textarea":pu(t,i),s=Kl(t,i),Z("invalid",t);break;default:s=i}Gl(n,s),l=s;for(r in l)if(l.hasOwnProperty(r)){var a=l[r];r==="style"?cf(t,a):r==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&lf(t,a)):r==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&bs(t,a):typeof a=="number"&&bs(t,""+a):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(Ss.hasOwnProperty(r)?a!=null&&r==="onScroll"&&Z("scroll",t):a!=null&&nc(t,r,a,o))}switch(n){case"input":lr(t),fu(t,i,!1);break;case"textarea":lr(t),gu(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Sn(i.value));break;case"select":t.multiple=!!i.multiple,r=i.value,r!=null?xi(t,!!i.multiple,r,!1):i.defaultValue!=null&&xi(t,!!i.multiple,i.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=ho)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ee(e),null;case 6:if(t&&e.stateNode!=null)Lp(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(C(166));if(n=Hn(As.current),Hn(Mt.current),mr(e)){if(i=e.stateNode,n=e.memoizedProps,i[Et]=e,(r=i.nodeValue!==n)&&(t=Ge,t!==null))switch(t.tag){case 3:gr(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&gr(i.nodeValue,n,(t.mode&1)!==0)}r&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Et]=e,e.stateNode=i}return Ee(e),null;case 13:if(J(se),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(te&&Qe!==null&&(e.mode&1)!==0&&(e.flags&128)===0)Gf(),Ti(),e.flags|=98560,r=!1;else if(r=mr(e),i!==null&&i.dehydrated!==null){if(t===null){if(!r)throw Error(C(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(C(317));r[Et]=e}else Ti(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ee(e),r=!1}else ft!==null&&(Oa(ft),ft=null),r=!0;if(!r)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(se.current&1)!==0?pe===0&&(pe=3):Fc())),e.updateQueue!==null&&(e.flags|=4),Ee(e),null);case 4:return Oi(),Sa(t,e),t===null&&Os(e.stateNode.containerInfo),Ee(e),null;case 10:return kc(e.type._context),Ee(e),null;case 17:return Ve(e.type)&&fo(),Ee(e),null;case 19:if(J(se),r=e.memoizedState,r===null)return Ee(e),null;if(i=(e.flags&128)!==0,o=r.rendering,o===null)if(i)Yi(r,!1);else{if(pe!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=xo(t),o!==null){for(e.flags|=128,Yi(r,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)r=n,t=i,r.flags&=14680066,o=r.alternate,o===null?(r.childLanes=0,r.lanes=t,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,t=o.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return K(se,se.current&1|2),e.child}t=t.sibling}r.tail!==null&&de()>Li&&(e.flags|=128,i=!0,Yi(r,!1),e.lanes=4194304)}else{if(!i)if(t=xo(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Yi(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!te)return Ee(e),null}else 2*de()-r.renderingStartTime>Li&&n!==1073741824&&(e.flags|=128,i=!0,Yi(r,!1),e.lanes=4194304);r.isBackwards?(o.sibling=e.child,e.child=o):(n=r.last,n!==null?n.sibling=o:e.child=o,r.last=o)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=de(),e.sibling=null,n=se.current,K(se,i?n&1|2:n&1),e):(Ee(e),null);case 22:case 23:return Ic(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(Xe&1073741824)!==0&&(Ee(e),e.subtreeFlags&6&&(e.flags|=8192)):Ee(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function J0(t,e){switch(yc(e),e.tag){case 1:return Ve(e.type)&&fo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Oi(),J(Be),J(Te),Cc(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Ec(e),null;case 13:if(J(se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));Ti()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return J(se),null;case 4:return Oi(),null;case 10:return kc(e.type._context),null;case 22:case 23:return Ic(),null;case 24:return null;default:return null}}var _r=!1,Me=!1,ey=typeof WeakSet=="function"?WeakSet:Set,O=null;function vi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){le(t,e,i)}else n.current=null}function ba(t,e,n){try{n()}catch(i){le(t,e,i)}}var sd=!1;function ty(t,e){if(la=ao,t=If(),gc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var f;d!==n||s!==0&&d.nodeType!==3||(l=o+s),d!==r||i!==0&&d.nodeType!==3||(a=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(f=d.firstChild)!==null;)h=d,d=f;for(;;){if(d===t)break t;if(h===n&&++c===s&&(l=o),h===r&&++u===i&&(a=o),(f=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=f}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(aa={focusedElem:t,selectionRange:n},ao=!1,O=e;O!==null;)if(e=O,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,O=t;else for(;O!==null;){e=O;try{var m=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,x=m.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?y:dt(e.type,y),x);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(k){le(e,e.return,k)}if(t=e.sibling,t!==null){t.return=e.return,O=t;break}O=e.return}return m=sd,sd=!1,m}function gs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var r=s.destroy;s.destroy=void 0,r!==void 0&&ba(e,n,r)}s=s.next}while(s!==i)}}function $o(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ea(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Rp(t){var e=t.alternate;e!==null&&(t.alternate=null,Rp(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Et],delete e[Ls],delete e[da],delete e[I0],delete e[F0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ap(t){return t.tag===5||t.tag===3||t.tag===4}function rd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ap(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ca(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ho));else if(i!==4&&(t=t.child,t!==null))for(Ca(t,e,n),t=t.sibling;t!==null;)Ca(t,e,n),t=t.sibling}function Ma(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ma(t,e,n),t=t.sibling;t!==null;)Ma(t,e,n),t=t.sibling}var xe=null,ht=!1;function Zt(t,e,n){for(n=n.child;n!==null;)zp(t,e,n),n=n.sibling}function zp(t,e,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(zo,n)}catch{}switch(n.tag){case 5:Me||vi(n,e);case 6:var i=xe,s=ht;xe=null,Zt(t,e,n),xe=i,ht=s,xe!==null&&(ht?(t=xe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(ht?(t=xe,n=n.stateNode,t.nodeType===8?vl(t.parentNode,n):t.nodeType===1&&vl(t,n),Ps(t)):vl(xe,n.stateNode));break;case 4:i=xe,s=ht,xe=n.stateNode.containerInfo,ht=!0,Zt(t,e,n),xe=i,ht=s;break;case 0:case 11:case 14:case 15:if(!Me&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){s=i=i.next;do{var r=s,o=r.destroy;r=r.tag,o!==void 0&&((r&2)!==0||(r&4)!==0)&&ba(n,e,o),s=s.next}while(s!==i)}Zt(t,e,n);break;case 1:if(!Me&&(vi(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(l){le(n,e,l)}Zt(t,e,n);break;case 21:Zt(t,e,n);break;case 22:n.mode&1?(Me=(i=Me)||n.memoizedState!==null,Zt(t,e,n),Me=i):Zt(t,e,n);break;default:Zt(t,e,n)}}function od(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ey),e.forEach(function(i){var s=uy.bind(null,t,i);n.has(i)||(n.add(i),i.then(s,s))})}}function ut(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];try{var r=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:xe=l.stateNode,ht=!1;break e;case 3:xe=l.stateNode.containerInfo,ht=!0;break e;case 4:xe=l.stateNode.containerInfo,ht=!0;break e}l=l.return}if(xe===null)throw Error(C(160));zp(r,o,s),xe=null,ht=!1;var a=s.alternate;a!==null&&(a.return=null),s.return=null}catch(c){le(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ip(e,t),e=e.sibling}function Ip(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ut(e,t),kt(t),i&4){try{gs(3,t,t.return),$o(3,t)}catch(y){le(t,t.return,y)}try{gs(5,t,t.return)}catch(y){le(t,t.return,y)}}break;case 1:ut(e,t),kt(t),i&512&&n!==null&&vi(n,n.return);break;case 5:if(ut(e,t),kt(t),i&512&&n!==null&&vi(n,n.return),t.flags&32){var s=t.stateNode;try{bs(s,"")}catch(y){le(t,t.return,y)}}if(i&4&&(s=t.stateNode,s!=null)){var r=t.memoizedProps,o=n!==null?n.memoizedProps:r,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&r.type==="radio"&&r.name!=null&&sf(s,r),Zl(l,o);var c=Zl(l,r);for(o=0;o<a.length;o+=2){var u=a[o],d=a[o+1];u==="style"?cf(s,d):u==="dangerouslySetInnerHTML"?lf(s,d):u==="children"?bs(s,d):nc(s,u,d,c)}switch(l){case"input":Yl(s,r);break;case"textarea":rf(s,r);break;case"select":var h=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!r.multiple;var f=r.value;f!=null?xi(s,!!r.multiple,f,!1):h!==!!r.multiple&&(r.defaultValue!=null?xi(s,!!r.multiple,r.defaultValue,!0):xi(s,!!r.multiple,r.multiple?[]:"",!1))}s[Ls]=r}catch(y){le(t,t.return,y)}}break;case 6:if(ut(e,t),kt(t),i&4){if(t.stateNode===null)throw Error(C(162));s=t.stateNode,r=t.memoizedProps;try{s.nodeValue=r}catch(y){le(t,t.return,y)}}break;case 3:if(ut(e,t),kt(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ps(e.containerInfo)}catch(y){le(t,t.return,y)}break;case 4:ut(e,t),kt(t);break;case 13:ut(e,t),kt(t),s=t.child,s.flags&8192&&(r=s.memoizedState!==null,s.stateNode.isHidden=r,!r||s.alternate!==null&&s.alternate.memoizedState!==null||(Ac=de())),i&4&&od(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Me=(c=Me)||u,ut(e,t),Me=c):ut(e,t),kt(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&(t.mode&1)!==0)for(O=t,u=t.child;u!==null;){for(d=O=u;O!==null;){switch(h=O,f=h.child,h.tag){case 0:case 11:case 14:case 15:gs(4,h,h.return);break;case 1:vi(h,h.return);var m=h.stateNode;if(typeof m.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(y){le(i,n,y)}}break;case 5:vi(h,h.return);break;case 22:if(h.memoizedState!==null){ad(d);continue}}f!==null?(f.return=h,O=f):ad(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{s=d.stateNode,c?(r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=af("display",o))}catch(y){le(t,t.return,y)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){le(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ut(e,t),kt(t),i&4&&od(t);break;case 21:break;default:ut(e,t),kt(t)}}function kt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ap(n)){var i=n;break e}n=n.return}throw Error(C(160))}switch(i.tag){case 5:var s=i.stateNode;i.flags&32&&(bs(s,""),i.flags&=-33);var r=rd(t);Ma(t,r,s);break;case 3:case 4:var o=i.stateNode.containerInfo,l=rd(t);Ca(t,l,o);break;default:throw Error(C(161))}}catch(a){le(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ny(t,e,n){O=t,Fp(t)}function Fp(t,e,n){for(var i=(t.mode&1)!==0;O!==null;){var s=O,r=s.child;if(s.tag===22&&i){var o=s.memoizedState!==null||_r;if(!o){var l=s.alternate,a=l!==null&&l.memoizedState!==null||Me;l=_r;var c=Me;if(_r=o,(Me=a)&&!c)for(O=s;O!==null;)o=O,a=o.child,o.tag===22&&o.memoizedState!==null?cd(s):a!==null?(a.return=o,O=a):cd(s);for(;r!==null;)O=r,Fp(r),r=r.sibling;O=s,_r=l,Me=c}ld(t)}else(s.subtreeFlags&8772)!==0&&r!==null?(r.return=s,O=r):ld(t)}}function ld(t){for(;O!==null;){var e=O;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Me||$o(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Me)if(n===null)i.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:dt(e.type,n.memoizedProps);i.componentDidUpdate(s,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var r=e.updateQueue;r!==null&&$u(e,r,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}$u(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Ps(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Me||e.flags&512&&Ea(e)}catch(h){le(e,e.return,h)}}if(e===t){O=null;break}if(n=e.sibling,n!==null){n.return=e.return,O=n;break}O=e.return}}function ad(t){for(;O!==null;){var e=O;if(e===t){O=null;break}var n=e.sibling;if(n!==null){n.return=e.return,O=n;break}O=e.return}}function cd(t){for(;O!==null;){var e=O;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{$o(4,e)}catch(a){le(e,n,a)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var s=e.return;try{i.componentDidMount()}catch(a){le(e,s,a)}}var r=e.return;try{Ea(e)}catch(a){le(e,r,a)}break;case 5:var o=e.return;try{Ea(e)}catch(a){le(e,o,a)}}}catch(a){le(e,e.return,a)}if(e===t){O=null;break}var l=e.sibling;if(l!==null){l.return=e.return,O=l;break}O=e.return}}var iy=Math.ceil,So=Gt.ReactCurrentDispatcher,Lc=Gt.ReactCurrentOwner,ot=Gt.ReactCurrentBatchConfig,B=0,_e=null,he=null,ke=0,Xe=0,_i=Pn(0),pe=0,js=null,Zn=0,Uo=0,Rc=0,ms=null,Ie=null,Ac=0,Li=1/0,zt=null,bo=!1,Pa=null,vn=null,xr=!1,an=null,Eo=0,ys=0,Ta=null,Ur=-1,Yr=0;function Ne(){return(B&6)!==0?de():Ur!==-1?Ur:Ur=de()}function _n(t){return(t.mode&1)===0?1:(B&2)!==0&&ke!==0?ke&-ke:B0.transition!==null?(Yr===0&&(Yr=kf()),Yr):(t=$,t!==0||(t=window.event,t=t===void 0?16:Pf(t.type)),t)}function mt(t,e,n,i){if(50<ys)throw ys=0,Ta=null,Error(C(185));Gs(t,n,i),((B&2)===0||t!==_e)&&(t===_e&&((B&2)===0&&(Uo|=n),pe===4&&on(t,ke)),He(t,i),n===1&&B===0&&(e.mode&1)===0&&(Li=de()+500,Vo&&Tn()))}function He(t,e){var n=t.callbackNode;Bm(t,e);var i=lo(t,t===_e?ke:0);if(i===0)n!==null&&vu(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&vu(n),e===1)t.tag===0?j0(ud.bind(null,t)):Xf(ud.bind(null,t)),A0(function(){(B&6)===0&&Tn()}),n=null;else{switch(wf(i)){case 1:n=lc;break;case 4:n=_f;break;case 16:n=oo;break;case 536870912:n=xf;break;default:n=oo}n=Yp(n,jp.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function jp(t,e){if(Ur=-1,Yr=0,(B&6)!==0)throw Error(C(327));var n=t.callbackNode;if(Ei()&&t.callbackNode!==n)return null;var i=lo(t,t===_e?ke:0);if(i===0)return null;if((i&30)!==0||(i&t.expiredLanes)!==0||e)e=Co(t,i);else{e=i;var s=B;B|=2;var r=Vp();(_e!==t||ke!==e)&&(zt=null,Li=de()+500,$n(t,e));do try{oy();break}catch(l){Bp(t,l)}while(1);xc(),So.current=r,B=s,he!==null?e=0:(_e=null,ke=0,e=pe)}if(e!==0){if(e===2&&(s=na(t),s!==0&&(i=s,e=Da(t,s))),e===1)throw n=js,$n(t,0),on(t,i),He(t,de()),n;if(e===6)on(t,i);else{if(s=t.current.alternate,(i&30)===0&&!sy(s)&&(e=Co(t,i),e===2&&(r=na(t),r!==0&&(i=r,e=Da(t,r))),e===1))throw n=js,$n(t,0),on(t,i),He(t,de()),n;switch(t.finishedWork=s,t.finishedLanes=i,e){case 0:case 1:throw Error(C(345));case 2:In(t,Ie,zt);break;case 3:if(on(t,i),(i&130023424)===i&&(e=Ac+500-de(),10<e)){if(lo(t,0)!==0)break;if(s=t.suspendedLanes,(s&i)!==i){Ne(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=ua(In.bind(null,t,Ie,zt),e);break}In(t,Ie,zt);break;case 4:if(on(t,i),(i&4194240)===i)break;for(e=t.eventTimes,s=-1;0<i;){var o=31-gt(i);r=1<<o,o=e[o],o>s&&(s=o),i&=~r}if(i=s,i=de()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*iy(i/1960))-i,10<i){t.timeoutHandle=ua(In.bind(null,t,Ie,zt),i);break}In(t,Ie,zt);break;case 5:In(t,Ie,zt);break;default:throw Error(C(329))}}}return He(t,de()),t.callbackNode===n?jp.bind(null,t):null}function Da(t,e){var n=ms;return t.current.memoizedState.isDehydrated&&($n(t,e).flags|=256),t=Co(t,e),t!==2&&(e=Ie,Ie=n,e!==null&&Oa(e)),t}function Oa(t){Ie===null?Ie=t:Ie.push.apply(Ie,t)}function sy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var s=n[i],r=s.getSnapshot;s=s.value;try{if(!vt(r(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function on(t,e){for(e&=~Rc,e&=~Uo,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-gt(e),i=1<<n;t[n]=-1,e&=~i}}function ud(t){if((B&6)!==0)throw Error(C(327));Ei();var e=lo(t,0);if((e&1)===0)return He(t,de()),null;var n=Co(t,e);if(t.tag!==0&&n===2){var i=na(t);i!==0&&(e=i,n=Da(t,i))}if(n===1)throw n=js,$n(t,0),on(t,e),He(t,de()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,In(t,Ie,zt),He(t,de()),null}function zc(t,e){var n=B;B|=1;try{return t(e)}finally{B=n,B===0&&(Li=de()+500,Vo&&Tn())}}function qn(t){an!==null&&an.tag===0&&(B&6)===0&&Ei();var e=B;B|=1;var n=ot.transition,i=$;try{if(ot.transition=null,$=1,t)return t()}finally{$=i,ot.transition=n,B=e,(B&6)===0&&Tn()}}function Ic(){Xe=_i.current,J(_i)}function $n(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,R0(n)),he!==null)for(n=he.return;n!==null;){var i=n;switch(yc(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&fo();break;case 3:Oi(),J(Be),J(Te),Cc();break;case 5:Ec(i);break;case 4:Oi();break;case 13:J(se);break;case 19:J(se);break;case 10:kc(i.type._context);break;case 22:case 23:Ic()}n=n.return}if(_e=t,he=t=xn(t.current,null),ke=Xe=e,pe=0,js=null,Rc=Uo=Zn=0,Ie=ms=null,Vn!==null){for(e=0;e<Vn.length;e++)if(n=Vn[e],i=n.interleaved,i!==null){n.interleaved=null;var s=i.next,r=n.pending;if(r!==null){var o=r.next;r.next=s,i.next=o}n.pending=i}Vn=null}return t}function Bp(t,e){do{var n=he;try{if(xc(),Hr.current=wo,ko){for(var i=re.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}ko=!1}if(Gn=0,ye=fe=re=null,ps=!1,zs=0,Lc.current=null,n===null||n.return===null){pe=1,js=e,he=null;break}e:{var r=t,o=n.return,l=n,a=e;if(e=ke,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,u=l,d=u.tag;if((u.mode&1)===0&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var f=Zu(o);if(f!==null){f.flags&=-257,qu(f,o,l,r,e),f.mode&1&&Gu(r,c,e),e=f,a=c;var m=e.updateQueue;if(m===null){var y=new Set;y.add(a),e.updateQueue=y}else m.add(a);break e}else{if((e&1)===0){Gu(r,c,e),Fc();break e}a=Error(C(426))}}else if(te&&l.mode&1){var x=Zu(o);if(x!==null){(x.flags&65536)===0&&(x.flags|=256),qu(x,o,l,r,e),vc(Ni(a,l));break e}}r=a=Ni(a,l),pe!==4&&(pe=2),ms===null?ms=[r]:ms.push(r),r=o;do{switch(r.tag){case 3:r.flags|=65536,e&=-e,r.lanes|=e;var g=Sp(r,a,e);Wu(r,g);break e;case 1:l=a;var p=r.type,v=r.stateNode;if((r.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(vn===null||!vn.has(v)))){r.flags|=65536,e&=-e,r.lanes|=e;var k=bp(r,l,e);Wu(r,k);break e}}r=r.return}while(r!==null)}Wp(n)}catch(w){e=w,he===n&&n!==null&&(he=n=n.return);continue}break}while(1)}function Vp(){var t=So.current;return So.current=wo,t===null?wo:t}function Fc(){(pe===0||pe===3||pe===2)&&(pe=4),_e===null||(Zn&268435455)===0&&(Uo&268435455)===0||on(_e,ke)}function Co(t,e){var n=B;B|=2;var i=Vp();(_e!==t||ke!==e)&&(zt=null,$n(t,e));do try{ry();break}catch(s){Bp(t,s)}while(1);if(xc(),B=n,So.current=i,he!==null)throw Error(C(261));return _e=null,ke=0,pe}function ry(){for(;he!==null;)Hp(he)}function oy(){for(;he!==null&&!Om();)Hp(he)}function Hp(t){var e=Up(t.alternate,t,Xe);t.memoizedProps=t.pendingProps,e===null?Wp(t):he=e,Lc.current=null}function Wp(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=q0(n,e,Xe),n!==null){he=n;return}}else{if(n=J0(n,e),n!==null){n.flags&=32767,he=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{pe=6,he=null;return}}if(e=e.sibling,e!==null){he=e;return}he=e=t}while(e!==null);pe===0&&(pe=5)}function In(t,e,n){var i=$,s=ot.transition;try{ot.transition=null,$=1,ly(t,e,n,i)}finally{ot.transition=s,$=i}return null}function ly(t,e,n,i){do Ei();while(an!==null);if((B&6)!==0)throw Error(C(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var r=n.lanes|n.childLanes;if(Vm(t,r),t===_e&&(he=_e=null,ke=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||xr||(xr=!0,Yp(oo,function(){return Ei(),null})),r=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||r){r=ot.transition,ot.transition=null;var o=$;$=1;var l=B;B|=4,Lc.current=null,ty(t,n),Ip(n,t),M0(aa),ao=!!la,aa=la=null,t.current=n,ny(n),Nm(),B=l,$=o,ot.transition=r}else t.current=n;if(xr&&(xr=!1,an=t,Eo=s),r=t.pendingLanes,r===0&&(vn=null),Am(n.stateNode),He(t,de()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],i(s.value,{componentStack:s.stack,digest:s.digest});if(bo)throw bo=!1,t=Pa,Pa=null,t;return(Eo&1)!==0&&t.tag!==0&&Ei(),r=t.pendingLanes,(r&1)!==0?t===Ta?ys++:(ys=0,Ta=t):ys=0,Tn(),null}function Ei(){if(an!==null){var t=wf(Eo),e=ot.transition,n=$;try{if(ot.transition=null,$=16>t?16:t,an===null)var i=!1;else{if(t=an,an=null,Eo=0,(B&6)!==0)throw Error(C(331));var s=B;for(B|=4,O=t.current;O!==null;){var r=O,o=r.child;if((O.flags&16)!==0){var l=r.deletions;if(l!==null){for(var a=0;a<l.length;a++){var c=l[a];for(O=c;O!==null;){var u=O;switch(u.tag){case 0:case 11:case 15:gs(8,u,r)}var d=u.child;if(d!==null)d.return=u,O=d;else for(;O!==null;){u=O;var h=u.sibling,f=u.return;if(Rp(u),u===c){O=null;break}if(h!==null){h.return=f,O=h;break}O=f}}}var m=r.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var x=y.sibling;y.sibling=null,y=x}while(y!==null)}}O=r}}if((r.subtreeFlags&2064)!==0&&o!==null)o.return=r,O=o;else e:for(;O!==null;){if(r=O,(r.flags&2048)!==0)switch(r.tag){case 0:case 11:case 15:gs(9,r,r.return)}var g=r.sibling;if(g!==null){g.return=r.return,O=g;break e}O=r.return}}var p=t.current;for(O=p;O!==null;){o=O;var v=o.child;if((o.subtreeFlags&2064)!==0&&v!==null)v.return=o,O=v;else e:for(o=p;O!==null;){if(l=O,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:$o(9,l)}}catch(w){le(l,l.return,w)}if(l===o){O=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,O=k;break e}O=l.return}}if(B=s,Tn(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(zo,t)}catch{}i=!0}return i}finally{$=n,ot.transition=e}}return!1}function dd(t,e,n){e=Ni(n,e),e=Sp(t,e,1),t=yn(t,e,1),e=Ne(),t!==null&&(Gs(t,1,e),He(t,e))}function le(t,e,n){if(t.tag===3)dd(t,t,n);else for(;e!==null;){if(e.tag===3){dd(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(vn===null||!vn.has(i))){t=Ni(n,t),t=bp(e,t,1),e=yn(e,t,1),t=Ne(),e!==null&&(Gs(e,1,t),He(e,t));break}}e=e.return}}function ay(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Ne(),t.pingedLanes|=t.suspendedLanes&n,_e===t&&(ke&n)===n&&(pe===4||pe===3&&(ke&130023424)===ke&&500>de()-Ac?$n(t,0):Rc|=n),He(t,e)}function $p(t,e){e===0&&((t.mode&1)===0?e=1:(e=ur,ur<<=1,(ur&130023424)===0&&(ur=4194304)));var n=Ne();t=Kt(t,e),t!==null&&(Gs(t,e,n),He(t,n))}function cy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),$p(t,n)}function uy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(C(314))}i!==null&&i.delete(e),$p(t,n)}var Up;Up=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Be.current)je=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return je=!1,Z0(t,e,n);je=(t.flags&131072)!==0}else je=!1,te&&(e.flags&1048576)!==0&&Kf(e,mo,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;$r(t,e),t=e.pendingProps;var s=Pi(e,Te.current);bi(e,n),s=Pc(null,e,i,t,s,n);var r=Tc();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ve(i)?(r=!0,po(e)):r=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Sc(e),s.updater=Ho,e.stateNode=s,s._reactInternals=e,ya(e,i,t,n),e=xa(null,e,i,!0,r,n)):(e.tag=0,te&&r&&mc(e),Oe(null,e,s,n),e=e.child),e;case 16:i=e.elementType;e:{switch($r(t,e),t=e.pendingProps,s=i._init,i=s(i._payload),e.type=i,s=e.tag=hy(i),t=dt(i,t),s){case 0:e=_a(null,e,i,t,n);break e;case 1:e=td(null,e,i,t,n);break e;case 11:e=Ju(null,e,i,t,n);break e;case 14:e=ed(null,e,i,dt(i.type,t),n);break e}throw Error(C(306,i,""))}return e;case 0:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:dt(i,s),_a(t,e,i,s,n);case 1:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:dt(i,s),td(t,e,i,s,n);case 3:e:{if(Pp(e),t===null)throw Error(C(387));i=e.pendingProps,r=e.memoizedState,s=r.element,qf(t,e),_o(e,i,null,n);var o=e.memoizedState;if(i=o.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){s=Ni(Error(C(423)),e),e=nd(t,e,i,n,s);break e}else if(i!==s){s=Ni(Error(C(424)),e),e=nd(t,e,i,n,s);break e}else for(Qe=mn(e.stateNode.containerInfo.firstChild),Ge=e,te=!0,ft=null,n=np(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ti(),i===s){e=Qt(t,e,n);break e}Oe(t,e,i,n)}e=e.child}return e;case 5:return ip(e),t===null&&pa(e),i=e.type,s=e.pendingProps,r=t!==null?t.memoizedProps:null,o=s.children,ca(i,s)?o=null:r!==null&&ca(i,r)&&(e.flags|=32),Mp(t,e),Oe(t,e,o,n),e.child;case 6:return t===null&&pa(e),null;case 13:return Tp(t,e,n);case 4:return bc(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Di(e,null,i,n):Oe(t,e,i,n),e.child;case 11:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:dt(i,s),Ju(t,e,i,s,n);case 7:return Oe(t,e,e.pendingProps,n),e.child;case 8:return Oe(t,e,e.pendingProps.children,n),e.child;case 12:return Oe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,s=e.pendingProps,r=e.memoizedProps,o=s.value,K(yo,i._currentValue),i._currentValue=o,r!==null)if(vt(r.value,o)){if(r.children===s.children&&!Be.current){e=Qt(t,e,n);break e}}else for(r=e.child,r!==null&&(r.return=e);r!==null;){var l=r.dependencies;if(l!==null){o=r.child;for(var a=l.firstContext;a!==null;){if(a.context===i){if(r.tag===1){a=Ut(-1,n&-n),a.tag=2;var c=r.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?a.next=a:(a.next=u.next,u.next=a),c.pending=a}}r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),ga(r.return,n,e),l.lanes|=n;break}a=a.next}}else if(r.tag===10)o=r.type===e.type?null:r.child;else if(r.tag===18){if(o=r.return,o===null)throw Error(C(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ga(o,n,e),o=r.sibling}else o=r.child;if(o!==null)o.return=r;else for(o=r;o!==null;){if(o===e){o=null;break}if(r=o.sibling,r!==null){r.return=o.return,o=r;break}o=o.return}r=o}Oe(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,i=e.pendingProps.children,bi(e,n),s=lt(s),i=i(s),e.flags|=1,Oe(t,e,i,n),e.child;case 14:return i=e.type,s=dt(i,e.pendingProps),s=dt(i.type,s),ed(t,e,i,s,n);case 15:return Ep(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:dt(i,s),$r(t,e),e.tag=1,Ve(i)?(t=!0,po(e)):t=!1,bi(e,n),ep(e,i,s),ya(e,i,s,n),xa(null,e,i,!0,t,n);case 19:return Dp(t,e,n);case 22:return Cp(t,e,n)}throw Error(C(156,e.tag))};function Yp(t,e){return vf(t,e)}function dy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(t,e,n,i){return new dy(t,e,n,i)}function jc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function hy(t){if(typeof t=="function")return jc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sc)return 11;if(t===rc)return 14}return 2}function xn(t,e){var n=t.alternate;return n===null?(n=rt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Xr(t,e,n,i,s,r){var o=2;if(i=t,typeof t=="function")jc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ci:return Un(n.children,s,r,e);case ic:o=8,s|=8;break;case Vl:return t=rt(12,n,e,s|2),t.elementType=Vl,t.lanes=r,t;case Hl:return t=rt(13,n,e,s),t.elementType=Hl,t.lanes=r,t;case Wl:return t=rt(19,n,e,s),t.elementType=Wl,t.lanes=r,t;case ef:return Yo(n,s,r,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case qh:o=10;break e;case Jh:o=9;break e;case sc:o=11;break e;case rc:o=14;break e;case nn:o=16,i=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=rt(o,n,e,s),e.elementType=t,e.type=i,e.lanes=r,e}function Un(t,e,n,i){return t=rt(7,t,i,e),t.lanes=n,t}function Yo(t,e,n,i){return t=rt(22,t,i,e),t.elementType=ef,t.lanes=n,t.stateNode={isHidden:!1},t}function Cl(t,e,n){return t=rt(6,t,null,e),t.lanes=n,t}function Ml(t,e,n){return e=rt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function fy(t,e,n,i,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ll(0),this.expirationTimes=ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ll(0),this.identifierPrefix=i,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Bc(t,e,n,i,s,r,o,l,a){return t=new fy(t,e,n,l,a),e===1?(e=1,r===!0&&(e|=8)):e=0,r=rt(3,null,null,e),t.current=r,r.stateNode=t,r.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sc(r),t}function py(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ai,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Xp(t){if(!t)return bn;t=t._reactInternals;e:{if(ni(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ve(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(Ve(n))return Yf(t,n,e)}return e}function Kp(t,e,n,i,s,r,o,l,a){return t=Bc(n,i,!0,t,s,r,o,l,a),t.context=Xp(null),n=t.current,i=Ne(),s=_n(n),r=Ut(i,s),r.callback=e!=null?e:null,yn(n,r,s),t.current.lanes=s,Gs(t,s,i),He(t,i),t}function Xo(t,e,n,i){var s=e.current,r=Ne(),o=_n(s);return n=Xp(n),e.context===null?e.context=n:e.pendingContext=n,e=Ut(r,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=yn(s,e,o),t!==null&&(mt(t,s,o,r),Vr(t,s,o)),o}function Mo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Vc(t,e){hd(t,e),(t=t.alternate)&&hd(t,e)}function gy(){return null}var Qp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Hc(t){this._internalRoot=t}Ko.prototype.render=Hc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));Xo(t,e,null,null)};Ko.prototype.unmount=Hc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qn(function(){Xo(null,t,null,null)}),e[Xt]=null}};function Ko(t){this._internalRoot=t}Ko.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ef();t={blockedOn:null,target:t,priority:e};for(var n=0;n<rn.length&&e!==0&&e<rn[n].priority;n++);rn.splice(n,0,t),n===0&&Mf(t)}};function Wc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Qo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function fd(){}function my(t,e,n,i,s){if(s){if(typeof i=="function"){var r=i;i=function(){var c=Mo(o);r.call(c)}}var o=Kp(e,i,t,0,null,!1,!1,"",fd);return t._reactRootContainer=o,t[Xt]=o.current,Os(t.nodeType===8?t.parentNode:t),qn(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof i=="function"){var l=i;i=function(){var c=Mo(a);l.call(c)}}var a=Bc(t,0,!1,null,null,!1,!1,"",fd);return t._reactRootContainer=a,t[Xt]=a.current,Os(t.nodeType===8?t.parentNode:t),qn(function(){Xo(e,a,n,i)}),a}function Go(t,e,n,i,s){var r=n._reactRootContainer;if(r){var o=r;if(typeof s=="function"){var l=s;s=function(){var a=Mo(o);l.call(a)}}Xo(e,o,t,s)}else o=my(n,e,t,s,i);return Mo(o)}Sf=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ts(e.pendingLanes);n!==0&&(ac(e,n|1),He(e,de()),(B&6)===0&&(Li=de()+500,Tn()))}break;case 13:qn(function(){var i=Kt(t,1);if(i!==null){var s=Ne();mt(i,t,1,s)}}),Vc(t,1)}};cc=function(t){if(t.tag===13){var e=Kt(t,134217728);if(e!==null){var n=Ne();mt(e,t,134217728,n)}Vc(t,134217728)}};bf=function(t){if(t.tag===13){var e=_n(t),n=Kt(t,e);if(n!==null){var i=Ne();mt(n,t,e,i)}Vc(t,e)}};Ef=function(){return $};Cf=function(t,e){var n=$;try{return $=t,e()}finally{$=n}};Jl=function(t,e,n){switch(e){case"input":if(Yl(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var s=Bo(i);if(!s)throw Error(C(90));nf(i),Yl(i,s)}}}break;case"textarea":rf(t,n);break;case"select":e=n.value,e!=null&&xi(t,!!n.multiple,e,!1)}};hf=zc;ff=qn;var yy={usingClientEntryPoint:!1,Events:[qs,fi,Bo,uf,df,zc]},Xi={findFiberByHostInstance:Bn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},vy={bundleType:Xi.bundleType,version:Xi.version,rendererPackageName:Xi.rendererPackageName,rendererConfig:Xi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=mf(t),t===null?null:t.stateNode},findFiberByHostInstance:Xi.findFiberByHostInstance||gy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kr.isDisabled&&kr.supportsFiber)try{zo=kr.inject(vy),Ct=kr}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yy;qe.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wc(e))throw Error(C(200));return py(t,e,null,n)};qe.createRoot=function(t,e){if(!Wc(t))throw Error(C(299));var n=!1,i="",s=Qp;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Bc(t,1,!1,null,null,n,!1,i,s),t[Xt]=e.current,Os(t.nodeType===8?t.parentNode:t),new Hc(e)};qe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=mf(e),t=t===null?null:t.stateNode,t};qe.flushSync=function(t){return qn(t)};qe.hydrate=function(t,e,n){if(!Qo(e))throw Error(C(200));return Go(null,t,e,!0,n)};qe.hydrateRoot=function(t,e,n){if(!Wc(t))throw Error(C(405));var i=n!=null&&n.hydratedSources||null,s=!1,r="",o=Qp;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Kp(e,null,t,1,n!=null?n:null,s,!1,r,o),t[Xt]=e.current,Os(t),i)for(t=0;t<i.length;t++)n=i[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Ko(e)};qe.render=function(t,e,n){if(!Qo(e))throw Error(C(200));return Go(null,t,e,!1,n)};qe.unmountComponentAtNode=function(t){if(!Qo(t))throw Error(C(40));return t._reactRootContainer?(qn(function(){Go(null,null,t,!1,function(){t._reactRootContainer=null,t[Xt]=null})}),!0):!1};qe.unstable_batchedUpdates=zc;qe.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Qo(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return Go(t,e,n,!1,i)};qe.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=qe})(Xh);var Gp,pd=Xh.exports;Gp=pd.createRoot,pd.hydrateRoot;var er=N.exports.createContext(null);er.Consumer;var Na=function(t,e){return Na=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(n[s]=i[s])},Na(t,e)};function _y(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Na(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var st=function(){return st=Object.assign||function(e){for(var n,i=1,s=arguments.length;i<s;i++){n=arguments[i];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},st.apply(this,arguments)};/*! js-cookie v3.0.5 | MIT */function wr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)t[i]=n[i]}return t}var xy={read:function(t){return t[0]==='"'&&(t=t.slice(1,-1)),t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(t){return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function La(t,e){function n(s,r,o){if(!(typeof document>"u")){o=wr({},e,o),typeof o.expires=="number"&&(o.expires=new Date(Date.now()+o.expires*864e5)),o.expires&&(o.expires=o.expires.toUTCString()),s=encodeURIComponent(s).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var l="";for(var a in o)!o[a]||(l+="; "+a,o[a]!==!0&&(l+="="+o[a].split(";")[0]));return document.cookie=s+"="+t.write(r,s)+l}}function i(s){if(!(typeof document>"u"||arguments.length&&!s)){for(var r=document.cookie?document.cookie.split("; "):[],o={},l=0;l<r.length;l++){var a=r[l].split("="),c=a.slice(1).join("=");try{var u=decodeURIComponent(a[0]);if(o[u]=t.read(c,u),s===u)break}catch{}}return s?o[s]:o}}return Object.create({set:n,get:i,remove:function(s,r){n(s,"",wr({},r,{expires:-1}))},withAttributes:function(s){return La(this.converter,wr({},this.attributes,s))},withConverter:function(s){return La(wr({},this.converter,s),this.attributes)}},{attributes:{value:Object.freeze(e)},converter:{value:Object.freeze(t)}})}var me=La(xy,{path:"/"}),ky=function(){function t(e,n,i,s,r){this.authStorageType=n,this.authStorageName=e,this.authTimeStorageName="".concat(e,"_storage"),this.stateStorageName="".concat(e,"_state"),this.refreshTokenName=i,this.cookieDomain=s,this.cookieSecure=r,this.authStorageTypeName="".concat(this.authStorageName,"_type"),this.isUsingRefreshToken=!!this.refreshTokenName,this.refreshTokenTimeName=this.refreshTokenName?"".concat(this.refreshTokenName,"_time"):null}return t.prototype.initialToken=function(){return this.authStorageType==="cookie"?this.initialCookieToken_():this.initialLSToken_()},t.prototype.initialCookieToken_=function(){var e=me.get(this.authStorageName),n=me.get(this.authStorageTypeName),i=me.get(this.authTimeStorageName),s=me.get(this.stateStorageName),r=this.isUsingRefreshToken&&this.refreshTokenName!=null?me.get(this.refreshTokenName):null,o=this.isUsingRefreshToken&&this.refreshTokenTimeName!=null?me.get(this.refreshTokenTimeName):null;return this.checkTokenExist(e,n,i,s,r,o)},t.prototype.initialLSToken_=function(){var e=localStorage.getItem(this.authStorageName),n=localStorage.getItem(this.authStorageTypeName),i=localStorage.getItem(this.authTimeStorageName),s=localStorage.getItem(this.stateStorageName),r=this.isUsingRefreshToken&&this.refreshTokenName!=null?localStorage.getItem(this.refreshTokenName):null,o=this.isUsingRefreshToken&&this.refreshTokenTimeName!=null?localStorage.getItem(this.refreshTokenTimeName):null;return this.checkTokenExist(e,n,i,s,r,o)},t.prototype.checkTokenExist=function(e,n,i,s,r,o){if(!!e&&!!n&&!!i&&!!s){var l=new Date(i);try{var a=JSON.parse(s),c={auth:{token:e,type:n,expiresAt:l},userState:a,isSignIn:!0,isUsingRefreshToken:this.isUsingRefreshToken,refresh:void 0};if(this.isUsingRefreshToken&&!!r&&!!o){var u=new Date(o);return st(st({},c),{refresh:{token:r,expiresAt:u}})}else return st(st({},c),{refresh:null})}catch{return{auth:null,refresh:null,userState:null,isUsingRefreshToken:this.isUsingRefreshToken,isSignIn:!1}}}else return{auth:null,refresh:null,userState:null,isUsingRefreshToken:this.isUsingRefreshToken,isSignIn:!1}},t.prototype.syncTokens=function(e){e.auth?this.isUsingRefreshToken&&e.refresh?this.setToken(e.auth.token,e.auth.type,e.refresh.token,e.refresh.expiresAt,e.auth.expiresAt,e.userState):this.setToken(e.auth.token,e.auth.type,null,null,e.auth.expiresAt,e.userState):this.removeToken()},t.prototype.setToken=function(e,n,i,s,r,o){this.authStorageType==="cookie"?this.setCookieToken_(e,n,i,r,s,o):this.setLSToken_(e,n,i,r,s,o)},t.prototype.setCookieToken_=function(e,n,i,s,r,o){me.set(this.authStorageName,e,{expires:s,domain:this.cookieDomain,secure:this.cookieSecure}),me.set(this.authStorageTypeName,n,{expires:s,domain:this.cookieDomain,secure:this.cookieSecure}),me.set(this.authTimeStorageName,s.toISOString(),{expires:s,domain:this.cookieDomain,secure:this.cookieSecure}),o&&me.set(this.stateStorageName,JSON.stringify(o),{expires:s,domain:this.cookieDomain,secure:this.cookieSecure}),this.isUsingRefreshToken&&!!this.refreshTokenName&&!!i&&me.set(this.refreshTokenName,i,{expires:s,domain:this.cookieDomain,secure:this.cookieSecure}),this.isUsingRefreshToken&&!!this.refreshTokenTimeName&&!!r&&me.set(this.refreshTokenTimeName,r.toISOString(),{expires:s,domain:this.cookieDomain,secure:this.cookieSecure})},t.prototype.setLSToken_=function(e,n,i,s,r,o){localStorage.setItem(this.authStorageName,e),localStorage.setItem(this.authStorageTypeName,n),localStorage.setItem(this.authTimeStorageName,s.toISOString()),o&&localStorage.setItem(this.stateStorageName,JSON.stringify(o)),this.isUsingRefreshToken&&!!this.refreshTokenName&&!!i&&localStorage.setItem(this.refreshTokenName,i),this.isUsingRefreshToken&&!!this.refreshTokenTimeName&&!!r&&localStorage.setItem(this.refreshTokenTimeName,r.toISOString())},t.prototype.removeToken=function(){this.authStorageType==="cookie"?this.removeCookieToken_():this.removeLSToken_()},t.prototype.removeCookieToken_=function(){me.remove(this.authStorageName,{domain:this.cookieDomain,secure:this.cookieSecure}),me.remove(this.authTimeStorageName,{domain:this.cookieDomain,secure:this.cookieSecure}),me.remove(this.authStorageTypeName,{domain:this.cookieDomain,secure:this.cookieSecure}),me.remove(this.stateStorageName,{domain:this.cookieDomain,secure:this.cookieSecure}),this.isUsingRefreshToken&&!!this.refreshTokenName&&me.remove(this.refreshTokenName,{domain:this.cookieDomain,secure:this.cookieSecure}),this.isUsingRefreshToken&&!!this.refreshTokenTimeName&&me.remove(this.refreshTokenTimeName,{domain:this.cookieDomain,secure:this.cookieSecure})},t.prototype.removeLSToken_=function(){localStorage.removeItem(this.authStorageName),localStorage.removeItem(this.authTimeStorageName),localStorage.removeItem(this.authStorageTypeName),localStorage.removeItem(this.stateStorageName),this.isUsingRefreshToken&&!!this.refreshTokenName&&localStorage.removeItem(this.refreshTokenName),this.isUsingRefreshToken&&!!this.refreshTokenTimeName&&localStorage.removeItem(this.refreshTokenTimeName)},t}(),kn;(function(t){t[t.SignIn=0]="SignIn",t[t.SignOut=1]="SignOut",t[t.RefreshToken=2]="RefreshToken"})(kn||(kn={}));function wy(t,e){switch(e.type){case kn.SignIn:return st(st({},t),{auth:e.payload.auth,refresh:e.payload.refresh,userState:e.payload.userState,isSignIn:!0});case kn.SignOut:return st(st({},t),{auth:null,refresh:null,userState:null,isSignIn:!1});case kn.RefreshToken:return t.isSignIn&&t.auth&&t.refresh?st(st({},t),{auth:{token:e.payload.newAuthToken?e.payload.newAuthToken:t.auth.token,type:t.auth.type,expiresAt:e.payload.newAuthTokenExpireIn?new Date(new Date().getTime()+e.payload.newAuthTokenExpireIn*60*1e3):t.auth.expiresAt},refresh:{token:e.payload.newRefreshToken?e.payload.newRefreshToken:t.refresh.token,expiresAt:e.payload.newRefreshTokenExpiresIn?new Date(new Date().getTime()+e.payload.newRefreshTokenExpiresIn*60*1e3):t.refresh.expiresAt},userState:e.payload.newAuthUserState?e.payload.newAuthUserState:t.userState}):t}}function gd(t){return{type:kn.SignIn,payload:t}}function Sy(t){return{type:kn.RefreshToken,payload:t}}function by(){return{type:kn.SignOut}}function Ey(t,e){var n=N.exports.useRef(t),i=N.exports.useRef(null);return N.exports.useEffect(function(){n.current=t},[t]),N.exports.useEffect(function(){var s=function(){return n.current()};return typeof e=="number"&&(i.current=window.setInterval(s,e*60*1e3)),function(){i.current&&window.clearTimeout(i.current)}},[e]),i}var Bs=function(t){_y(e,t);function e(n){return t.call(this,n)||this}return e}(Error),Zp=function(t){var e=t.children,n=t.authType,i=t.authName,s=t.cookieDomain,r=t.cookieSecure,o=t.refresh;if(n==="cookie"&&!s)throw new Bs("authType 'cookie' requires 'cookieDomain' and 'cookieSecure' props in AuthProvider");var l=o?"".concat(i,"_refresh"):null,a=new ky(i,n,l,s,r),c=N.exports.useReducer(wy,a.initialToken()),u=c[0],d=c[1];return o&&Ey(function(){var h,f,m,y;o.refreshApiCallback({authToken:(h=u.auth)===null||h===void 0?void 0:h.token,authTokenExpireAt:(f=u.auth)===null||f===void 0?void 0:f.expiresAt,authUserState:u.userState,refreshToken:(m=u.refresh)===null||m===void 0?void 0:m.token,refreshTokenExpiresAt:(y=u.refresh)===null||y===void 0?void 0:y.expiresAt}).then(function(x){x.isSuccess&&d(Sy(x))}).catch(function(){})},u.isSignIn?o.interval:null),N.exports.useEffect(function(){a.syncTokens(u)},[u]),N.exports.createElement(er.Provider,{value:{authState:u,dispatch:d}},e)};function Cy(t){return t.auth?new Date(t.auth.expiresAt)>new Date:!1}/**
 *@author Arkadip Bhattacharya <in2arkadipb13@gmail.com>
 *@fileoverview Sign In functionality <hook>
 *@copyright Arkadip Bhattacharya 2020
 *@license Apache-2.0
 *
 * Copyright 2020 Arkadip Bhattacharya
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(){var t=N.exports.useContext(er);if(t===null)throw new Bs("Auth Provider is missing. Please add the AuthProvider before Router");return function(e){var n=e.token,i=e.tokenType,s=e.authState,r=e.expiresIn,o=e.refreshToken,l=e.refreshTokenExpireIn,a=new Date(new Date().getTime()+r*60*1e3);if(t.authState.isUsingRefreshToken)if(!!o&&!!l){var c=new Date(new Date().getTime()+l*60*1e3);return t.dispatch(gd({auth:{token:n,type:i,expiresAt:a},userState:s||null,refresh:{token:o,expiresAt:c}})),!0}else throw new Bs('Make sure you given "refreshToken" and  "refreshTokenExpireIn" parameter');else{if(!!o&&!!l)throw new Error(`The app doesn't implement 'refreshToken' feature.
So you have to implement refresh token feature from 'AuthProvider' before using it.`);return t.dispatch(gd({auth:{token:n,type:i,expiresAt:a},userState:s||null,refresh:null})),!0}}}function Py(){var t=N.exports.useContext(er);if(t===null)throw new Bs("Auth Provider is missing. Please add the AuthProvider before Router");return function(){try{return t?(t.dispatch(by()),!0):!1}catch{return!1}}}function Ty(){var t=N.exports.useContext(er);if(t===null)throw new Bs("Auth Provider is missing. Please add the AuthProvider before Router");return function(){return!!Cy(t.authState)}}Zp.defaultProps={cookieDomain:window.location.hostname,cookieSecure:window.location.protocol==="https:"};const Dy=({showReg:t,userAuth:e})=>{const[n,i]=N.exports.useState(""),s=My();function r(a){return/\S+@\S+\.\S+/.test(a)}async function o(){try{const a=document.getElementById("email-login"),c=document.getElementById("password-login"),u=r(a.value);if(!a.value||!c.value){i("Username and password must be provided.");return}else if(!u){i("Invalid email");return}let d={};d.email=a.value,d.password=c.value;const h=await fetch("blueoceanapi-ucyq.onrender.comlogin",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)}),f=await h.json();if(h.status===404){i("User email not found.");return}else if(h.status===409){i("Incorrect password, please try again.");return}else h.status===200&&f.token&&(s({token:f.token,expiresIn:7200,tokenType:"Bearer",authState:{email:f.user.email}}),i("Login successful!"),e(!0))}catch(a){console.log(a)}}function l(){t(!0)}return _.createElement("div",{id:"login-root"},_.createElement("div",{className:"login-container"},_.createElement("div",{className:"login-image-container"},_.createElement("img",{className:"login-image",id:"logo",src:"https://dotcom-files.s3.us-west-2.amazonaws.com/galvanize_logo_full-color_light-background.png",alt:"logo"})),_.createElement("h2",{className:"login-sign-in-text"},"Sign In"),_.createElement("div",null,_.createElement("form",{className:"sign-in-form"},_.createElement("h3",{className:"error-text"},n),_.createElement("input",{type:"email",name:"username",className:"login-input",id:"email-login",placeholder:"Email Address"}),_.createElement("br",null),_.createElement("input",{type:"password",name:"password",className:"login-input",id:"password-login",placeholder:"Password"}),_.createElement("br",null))),_.createElement("div",{className:"login-button-container"},_.createElement("button",{className:"login-button",onClick:o},"Sign In"),_.createElement("button",{className:"login-button",onClick:l},"Register"),_.createElement("span",{className:"forgetYourPW"},"Forgot your password?"),_.createElement("br",null),_.createElement("span",{className:"or-sign-in-text"},"or sign in using a service"),_.createElement("div",{className:"login-github-container"},_.createElement("a",{className:"login-github-link",href:"https://github.com"},"GITHUB")))))},Oy=({showReg:t})=>{const[e,n]=N.exports.useState("");function i(o){return/\S+@\S+\.\S+/.test(o)}async function s(){try{const o=document.getElementById("name-register"),l=document.getElementById("password-register"),a=document.getElementById("password-verify"),c=document.getElementById("email-register"),u=i(c.value);if(!o.value||!l.value||!a.value||!c.value){n("Please fill out all fields before submitting");return}else if(l.value!==a.value){n("Passwords must match");return}else if(!u){n("Invalid email");return}let d={};d.name=o.value,d.password=l.value,d.email=c.value,d.admin=!0;const h=await fetch("blueoceanapi-ucyq.onrender.comregister",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)}),f=await h.json();if(h.status===409){n("Email already exists.");return}else if(h.status===500){n("Internal Error");return}else h.status===201&&(alert("Account successfully registered!"),t(!1))}catch(o){console.log(o)}}function r(){t(!1)}return _.createElement("div",{id:"register-root"},_.createElement("div",{className:"login-container"},_.createElement("div",{className:"login-image-container"},_.createElement("img",{className:"login-image",id:"logo",src:"https://dotcom-files.s3.us-west-2.amazonaws.com/galvanize_logo_full-color_light-background.png",alt:"logo"})),_.createElement("h2",{className:"login-sign-in-text"},"Register"),_.createElement("div",{className:"register-form-container"},_.createElement("form",null,_.createElement("h3",{className:"error-text"},e),_.createElement("input",{type:"text",name:"nameReg",className:"login-input",id:"name-register",placeholder:"First and Last Name"}),_.createElement("br",null),_.createElement("input",{type:"email",name:"emailReg",className:"login-input",id:"email-register",placeholder:"Email address"}),_.createElement("br",null),_.createElement("input",{type:"password",name:"passwordReg",className:"login-input",id:"password-register",placeholder:"Set Password"}),_.createElement("br",null),_.createElement("input",{type:"password",name:"passwordVerify",className:"login-input",id:"password-verify",placeholder:"Verify Password"}),_.createElement("br",null))),_.createElement("div",{className:"login-button-container"},_.createElement("button",{className:"login-button",onClick:s},"Register"),_.createElement("button",{className:"login-button",onClick:r},"Cancel"))))},Ny=({userAuth:t})=>{const[e,n]=N.exports.useState(!1);return Ty()()&&t(!0),_.createElement("div",null,e?_.createElement(Oy,{showReg:n}):_.createElement(Dy,{showReg:n,userAuth:t}))};const qt={"nav-container":"_nav-container_1htz0_1","nav-bar":"_nav-bar_1htz0_10","instructor-title-cont":"_instructor-title-cont_1htz0_17","instructor-title":"_instructor-title_1htz0_17","currently-viewing":"_currently-viewing_1htz0_31","wanna-change-cont":"_wanna-change-cont_1htz0_43","wanna-change":"_wanna-change_1htz0_43","change-cohort-btn":"_change-cohort-btn_1htz0_63"},Ly="_overlay_gv8lc_1",Ry="_open_gv8lc_17",Jt={overlay:Ly,open:Ry,"modal-cont":"_modal-cont_gv8lc_23","current-view-cont":"_current-view-cont_gv8lc_43","dropdown-cont":"_dropdown-cont_gv8lc_67","exit-btn-cont":"_exit-btn-cont_gv8lc_109","exit-btn":"_exit-btn_gv8lc_109"},ct=N.exports.createContext(),qp=({children:t})=>{const[e,n]=N.exports.useState("19"),[i,s]=N.exports.useState("main");return _.createElement(ct.Provider,{value:{cohort:e,setCohort:n,bodyDisplay:i,setBodyDisplay:s}},t)},Ay=({isOpen:t,onClose:e})=>{const{cohort:n,setCohort:i,setBodyDisplay:s}=N.exports.useContext(ct),[r,o]=N.exports.useState([]);N.exports.useEffect(()=>{fetch("blueoceanapi-ucyq.onrender.comcohorts").then(a=>a.json()).then(a=>o(a)).catch(a=>console.log(a))},[]);const l=a=>{i(a.cohort_number)};return _.createElement("div",{className:`${Jt.overlay} ${t?Jt.open:""}`,onClick:e},_.createElement("div",{className:`${Jt["modal-cont"]} ${t?Jt.active:""}`,onClick:a=>a.stopPropagation()},_.createElement("div",{className:Jt["current-view-cont"]},_.createElement("span",null,"You are currently viewing",_.createElement("b",null,`MCSP-${n}`))),_.createElement("div",{className:Jt["dropdown-cont"]},_.createElement("h5",null,"Change to a different cohort"),_.createElement("ul",null,r.map(a=>_.createElement("li",{key:a.cohort_number,onClick:()=>l(a)},`MCSP - ${a.cohort_number}`))),_.createElement("div",{className:Jt["exit-btn-cont"]},_.createElement("button",{onClick:e,className:Jt["exit-btn"]},"Exit")))))},zy=()=>{const{cohort:t}=N.exports.useContext(ct),[e,n]=N.exports.useState(!1),i=()=>{n(!0)},s=()=>{n(!1)};return _.createElement("div",{className:qt["nav-container"]},_.createElement(Ay,{isOpen:e,onClose:s}),_.createElement("nav",{className:qt["nav-bar"]},_.createElement("div",{className:qt["instructor-title-cont"]},_.createElement("h2",{className:qt["instructor-title"]},"Hello, Instructor"),_.createElement("span",{className:qt["currently-viewing"]},"You're currently viewing ",_.createElement("b",null,`MCSP-${t}`))),_.createElement("div",{className:qt["wanna-change-cont"]},_.createElement("span",{className:qt["wanna-change"]},"Want to change cohorts?"," ",_.createElement("button",{className:`${qt["change-cohort-btn"]}`,onClick:i},"Change Cohorts")))))},Iy="_visible_118ey_11",Fy="_overlay_118ey_17",et={"sidemenu-container":"_sidemenu-container_118ey_1",visible:Iy,overlay:Fy,"menu-container":"_menu-container_118ey_28","menu-title":"_menu-title_118ey_36","select-container":"_select-container_118ey_42","options-btn-cont":"_options-btn-cont_118ey_60","options-btn":"_options-btn_118ey_60","logo-and-title":"_logo-and-title_118ey_99","galv-logo":"_galv-logo_118ey_106","nav-title":"_nav-title_118ey_118","sign-out-button-container":"_sign-out-button-container_118ey_124","sign-out-btn":"_sign-out-btn_118ey_128"},jy=({logout:t})=>{const{setBodyDisplay:e}=N.exports.useContext(ct),n=Py(),i=()=>{n(),t(),localStorage.removeItem("hasSeenSplash")};return _.createElement(_.Fragment,null,_.createElement("div",{className:et["sidemenu-container"]},_.createElement("div",{className:et["menu-container"]},_.createElement("span",{className:et["logo-and-title"]},_.createElement("img",{className:et["galv-logo"],src:"https://coursereport-production.imgix.net/uploads/school/logo/10/original/galvanize_logomark_full-color_light-background.png",alt:""}),_.createElement("h3",{className:et["nav-title"]},"Instructor Hub")),_.createElement("ul",{className:et["select-container"]},_.createElement("li",{className:et["students-li"],onClick:()=>{e("main")}},"Home"),_.createElement("li",{className:et["students-li"],onClick:()=>{e("student")}},"Students"),_.createElement("li",{className:et["projects-li"],onClick:()=>{e("project")}},"Projects"),_.createElement("li",{className:et["assessments-li"],onClick:()=>{e("assessment")}},"Assessments")),_.createElement("span",{className:et["sign-out-button-container"]},_.createElement("button",{className:et["sign-out-btn"],onClick:i},"Sign Out")))))},en={"student-container":"_student-container_uxig9_1","student-title":"_student-title_uxig9_6","table-container":"_table-container_uxig9_22","student-container-bar":"_student-container-bar_uxig9_34","page-header":"_page-header_uxig9_41","add-btn":"_add-btn_uxig9_50","table-cont":"_table-cont_uxig9_22"},By="_tableContainer_13hki_1",Vy="_tableHeader_13hki_7",Hy="_tableBody_13hki_21",Wy="_column1_13hki_26",$y="_column2_13hki_27",Uy="_column3_13hki_28",Yy="_column4_13hki_29",Xy="_column5_13hki_30",Ky="_column6_13hki_31",tn={tableContainer:By,tableHeader:Vy,tableBody:Hy,column1:Wy,column2:$y,column3:Uy,column4:Yy,column5:Xy,column6:Ky,"no-information":"_no-information_13hki_70"},Qy=({studs:t})=>_.createElement("div",{className:tn.tableContainer},_.createElement("div",{className:tn.tableHeader},_.createElement("table",null,_.createElement("thead",null,_.createElement("tr",null,_.createElement("th",{className:tn.column1},"Name"),_.createElement("th",{className:tn.column2},"Email"),_.createElement("th",{className:tn.column3},"Github"),_.createElement("th",{className:tn.column4},"Grad Date"),_.createElement("th",{className:tn.column5},"Cohort"))))),_.createElement("div",{className:tn.tableBody},_.createElement("table",null,_.createElement("tbody",null,t.map((e,n)=>(console.log(e),_.createElement("tr",{key:`Student_${n}`},_.createElement("td",null,e.stu_name),_.createElement("td",null,e.email),_.createElement("td",null,e.github),_.createElement("td",null,e.graduation),_.createElement("td",null,e.cohort_number)))))))),Gy=()=>{const[t,e]=N.exports.useState([]),{cohort:n}=N.exports.useContext(ct);return N.exports.useEffect(()=>((async()=>{const s=await(await fetch(`blueoceanapi-ucyq.onrender.comstudents/${n}`)).json();e(s)})(),()=>{}),[n]),_.createElement("div",{className:en["student-container"]},_.createElement("div",{className:en["student-title"]},_.createElement("span",{className:en.title},"Students Dashboard")),_.createElement("div",{className:en["table-container"]},_.createElement("div",{className:en["student-container-bar"]},_.createElement("div",{className:en["page-header"]},`MCSP-${n} Students`),_.createElement("div",{className:en["add-button-container"]}),_.createElement("button",{className:en["add-btn"]},"Add Student")),_.createElement(Qy,{studs:t})))},Dt={"student-container":"_student-container_1dd5m_1","student-title":"_student-title_1dd5m_6","table-container":"_table-container_1dd5m_22","student-container-bar":"_student-container-bar_1dd5m_34","page-header":"_page-header_1dd5m_41","add-btn":"_add-btn_1dd5m_50"},Zy="_tableContainer_f9tnz_2",qy="_tableHeader_f9tnz_9",Jy="_tableBody_f9tnz_23",ev="_column1_f9tnz_28",tv="_column2_f9tnz_29",nv="_column3_f9tnz_30",iv="_column4_f9tnz_31",Ue={tableContainer:Zy,tableHeader:qy,tableBody:Jy,column1:ev,column2:tv,column3:nv,column4:iv,"no-information":"_no-information_f9tnz_62","project-members":"_project-members_f9tnz_74","project-member-row":"_project-member-row_f9tnz_85","project-member":"_project-member_f9tnz_74","project-member-dot":"_project-member-dot_f9tnz_94","group-name-arrow":"_group-name-arrow_f9tnz_100"},sv=({projects:t})=>{const[e,n]=N.exports.useState({key:"",direction:""}),i=r=>{let o="ascending";e.key===r&&e.direction==="ascending"&&(o="descending"),n({key:r,direction:o})},s=[...t].sort((r,o)=>{const l=e.key,a=e.direction==="ascending"?1:-1;if(l==="group_name"||l==="project_name"){const c=r[l]||"",u=o[l]||"";return c.localeCompare(u)*a}else if(l==="grade")return(r[l]-o[l])*a;return 0});return _.createElement("div",{className:Ue.tableContainer},_.createElement("div",{className:Ue.tableHeader},_.createElement("table",null,_.createElement("thead",null,_.createElement("tr",null,_.createElement("th",{className:Ue.column1},"Group name"," ",_.createElement("img",{src:"../../../../../../../img/arrow-up.png",className:Ue["group-name-arrow"],onClick:()=>i("group_name")})),_.createElement("th",{className:Ue.column2},"Student"," ",_.createElement("img",{src:"../../../../../../../img/arrow-up.png",className:Ue["group-name-arrow"],onClick:()=>i("group_name")})),_.createElement("th",{className:Ue.column3},"Project"," ",_.createElement("img",{src:"../../../../../../../img/arrow-up.png",className:Ue["group-name-arrow"],onClick:()=>i("project_name")})),_.createElement("th",{className:Ue.column4},"Score"," ",_.createElement("img",{src:"../../../../../../../img/arrow-up.png",className:Ue["group-name-arrow"],onClick:()=>i("grade")})))))),_.createElement("div",{className:Ue.tableBody},_.createElement("table",null,t&&t.length>0?_.createElement("tbody",null,s.map((r,o)=>_.createElement("tr",{key:`Project_${o}`},_.createElement("td",null,r.group_name),_.createElement("td",null,r.stu_name),_.createElement("td",null,r.project_name),_.createElement("td",{className:Ue["project-score"]},r.grade)))):_.createElement("tbody",null,_.createElement("tr",null,_.createElement("td",{colSpan:4,className:Ue["no-information"]},"No information to display"))))))},rv=()=>{const[t,e]=N.exports.useState([]),{cohort:n}=N.exports.useContext(ct);return N.exports.useEffect(()=>((async()=>{const s=await(await fetch(`blueoceanapi-ucyq.onrender.comstudent_project_scores/${n}`)).json();e(s)})(),()=>{}),[n]),_.createElement("div",{className:Dt["student-container"]},_.createElement("div",{className:Dt["student-title"]},_.createElement("span",{className:Dt.title},"Projects Dashboard")),_.createElement("div",{className:Dt["table-container"]},_.createElement("div",{className:Dt["student-container-bar"]},_.createElement("div",{className:Dt["page-header"]},`MCSP-${n} Projects`),_.createElement("div",{className:Dt["add-button-container"]}),_.createElement("button",{className:Dt["add-btn"]},"Add Project")),_.createElement("div",{className:Dt["table-cont"]},_.createElement(sv,{projects:t}))))},Ot={"student-container":"_student-container_ubbxf_1","student-title":"_student-title_ubbxf_6","table-container":"_table-container_ubbxf_22","student-container-bar":"_student-container-bar_ubbxf_34","page-header":"_page-header_ubbxf_41","add-btn":"_add-btn_ubbxf_50"},ov="_complete_b0kyo_67",lv="_close_b0kyo_74",Nt={"card-container":"_card-container_b0kyo_1","card-container-bar":"_card-container-bar_b0kyo_13","card-content":"_card-content_b0kyo_20","student-basic":"_student-basic_b0kyo_26","completion-status":"_completion-status_b0kyo_37","card-page-header":"_card-page-header_b0kyo_41","add-card-btn":"_add-card-btn_b0kyo_50",complete:ov,close:lv},Jp=({assessment:t,closeModal:e})=>{const{setBodyDisplay:n}=N.exports.useContext(ct),[i,s]=N.exports.useState({grade:t.grade||"",student_id:t.student_id||"",assess_id:t.assess_id||"",cohort_id:t.cohort_id||""}),[r,o]=N.exports.useState(t),[l,a]=N.exports.useState(!1),c=f=>{s({...i,[f.target.name]:f.target.value})},u=async f=>{f.preventDefault();try{const m=Object.fromEntries(Object.entries(i).filter(([x,g])=>g!==""));(await fetch(`blueoceanapi-ucyq.onrender.comstudent_assessment_scores/${t.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)})).ok?(o({...r,...m}),console.log("Assessment updated successfully"),a(!0)):console.log("Error updating assessment")}catch(m){console.error(m)}};N.exports.useEffect(()=>{l&&(n("assessmentTable"),a(!1))},[l,n]);const d=!!t.grade,h=()=>{e()};return _.createElement("div",{className:Nt["card-container"]},_.createElement("span",{className:Nt.close,onClick:h},"\xD7"),_.createElement("div",{className:Nt["card-container-bar"]},_.createElement("div",{className:Nt["card-content"]},_.createElement("div",{className:Nt["student-basic"]},_.createElement("div",null,"Student Name: ",r.student_name),_.createElement("div",null,"Assessment Name: ",r.assess_name),_.createElement("div",null,"Grade: ",r.grade),_.createElement("div",null,"Cohort Number: ",r.cohort_number)),_.createElement("div",{className:Nt["student-other"]},_.createElement("div",{className:Nt["completion-status"]},"Completion Status:"," ",_.createElement("span",{className:d?Nt.complete:Nt.incomplete},d?"Complete":"Incomplete")))),_.createElement("form",{onSubmit:u},_.createElement("div",null,_.createElement("label",null,"Grade:"),_.createElement("input",{type:"text",name:"grade",value:i.grade,onChange:c})),_.createElement("div",null,_.createElement("label",null,"Student ID:"),_.createElement("input",{type:"text",name:"student_id",value:i.student_id,onChange:c})),_.createElement("div",null,_.createElement("label",null,"Assessment ID:"),_.createElement("input",{type:"text",name:"assess_id",value:i.assess_id,onChange:c})),_.createElement("div",null,_.createElement("label",null,"Cohort ID:"),_.createElement("input",{type:"text",name:"cohort_id",value:i.cohort_id,onChange:c})),_.createElement("button",{type:"submit"},"Update Assessment"))))},av="_tableContainer_1jbj2_1",cv="_tableHeader_1jbj2_7",uv="_tableBody_1jbj2_21",dv="_column1_1jbj2_26",hv="_column2_1jbj2_27",fv="_column3_1jbj2_28",pv="_column4_1jbj2_29",gv="_column5_1jbj2_30",mv="_column6_1jbj2_31",yv="_modal_1jbj2_82",vv="_modalContent_1jbj2_95",Ae={tableContainer:av,tableHeader:cv,tableBody:uv,column1:dv,column2:hv,column3:fv,column4:pv,column5:gv,column6:mv,"no-information":"_no-information_1jbj2_70",modal:yv,modalContent:vv},eg=({assessments:t})=>{N.exports.useContext(ct);const[e,n]=N.exports.useState({key:"",direction:""}),[i,s]=N.exports.useState(null);N.exports.useState(!1);const r=c=>{let u="ascending";e.key===c&&e.direction==="ascending"&&(u="descending"),n({key:c,direction:u})},o=[...t].sort((c,u)=>{const d=e.key,h=e.direction==="ascending"?1:-1;return d==="student_name"||d==="assess_name"?c[d].localeCompare(u[d])*h:d==="grade"||d==="cohort_number"?(c[d]-u[d])*h:0}),l=c=>{s(c===i?null:c)},a=()=>{s(null)};return _.createElement("div",{className:Ae.tableContainer},_.createElement("div",{className:Ae.tableHeader},_.createElement("table",null,_.createElement("thead",null,_.createElement("tr",null,_.createElement("th",{className:Ae.column1},"Name"," ",_.createElement("img",{src:"../../../../../../../img/arrow-up.png",className:Ae["name-arrow"],onClick:()=>r("student_name")})),_.createElement("th",{className:Ae.column5},"Assessment"," ",_.createElement("img",{src:"../../../../../../../img/arrow-up.png",className:Ae["name-arrow"],onClick:()=>r("assess_name")})),_.createElement("th",{className:Ae.column6},"Grade"," ",_.createElement("img",{src:"../../../../../../../img/arrow-up.png",className:Ae["name-arrow"],onClick:()=>r("grade")})),_.createElement("th",{className:Ae.column6},"Cohort"," ",_.createElement("img",{src:"../../../../../../../img/arrow-up.png",className:Ae["name-arrow"],onClick:()=>r("cohort_number")})))))),_.createElement("div",{className:Ae.tableBody},_.createElement("table",null,_.createElement("tbody",null,o.map((c,u)=>_.createElement(_.Fragment,{key:`Assessment_${u}`},_.createElement("tr",{className:i===u?Ae.selectedRow:"",onClick:()=>l(u)},_.createElement("td",null,c.student_name),_.createElement("td",null,c.assess_name),_.createElement("td",null,c.grade),_.createElement("td",null,c.cohort_number))))))),i!==null&&_.createElement("div",{className:Ae.modal},_.createElement("div",{className:Ae.modalContent},_.createElement(Jp,{assessment:t[i],closeModal:a}))))},_v=()=>{const[t,e]=N.exports.useState([]),{cohort:n}=N.exports.useContext(ct);return N.exports.useEffect(()=>((async()=>{const s=await(await fetch(`blueoceanapi-ucyq.onrender.comstudent_assessment_scores/${n}`)).json();e(s)})(),()=>{}),[n]),_.createElement("div",{className:Ot["student-container"]},_.createElement("div",{className:Ot["student-title"]},_.createElement("span",{className:Ot.title},"Assessments Dashboard")),_.createElement("div",{className:Ot["table-container"]},_.createElement("div",{className:Ot["student-container-bar"]},_.createElement("div",{className:Ot["page-header"]},"MCSP Assessments"),_.createElement("div",{className:Ot["add-button-container"]}),_.createElement("button",{className:Ot["add-btn"]},"Add Assessment")),_.createElement("div",{className:Ot["table-cont"]},_.createElement(qp,null,_.createElement(eg,{assessments:t})))))},ri={"student-container":"_student-container_gzq3t_1","student-title":"_student-title_gzq3t_6","table-container":"_table-container_gzq3t_22","student-container-bar":"_student-container-bar_gzq3t_34","page-header":"_page-header_gzq3t_41","add-btn":"_add-btn_gzq3t_50","chart-container":"_chart-container_gzq3t_66"};/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function tr(t){return t+.5|0}const cn=(t,e,n)=>Math.max(Math.min(t,n),e);function is(t){return cn(tr(t*2.55),0,255)}function wn(t){return cn(tr(t*255),0,255)}function Ft(t){return cn(tr(t/2.55)/100,0,1)}function md(t){return cn(tr(t*100),0,100)}const tt={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Ra=[..."0123456789ABCDEF"],xv=t=>Ra[t&15],kv=t=>Ra[(t&240)>>4]+Ra[t&15],Sr=t=>(t&240)>>4===(t&15),wv=t=>Sr(t.r)&&Sr(t.g)&&Sr(t.b)&&Sr(t.a);function Sv(t){var e=t.length,n;return t[0]==="#"&&(e===4||e===5?n={r:255&tt[t[1]]*17,g:255&tt[t[2]]*17,b:255&tt[t[3]]*17,a:e===5?tt[t[4]]*17:255}:(e===7||e===9)&&(n={r:tt[t[1]]<<4|tt[t[2]],g:tt[t[3]]<<4|tt[t[4]],b:tt[t[5]]<<4|tt[t[6]],a:e===9?tt[t[7]]<<4|tt[t[8]]:255})),n}const bv=(t,e)=>t<255?e(t):"";function Ev(t){var e=wv(t)?xv:kv;return t?"#"+e(t.r)+e(t.g)+e(t.b)+bv(t.a,e):void 0}const Cv=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function tg(t,e,n){const i=e*Math.min(n,1-n),s=(r,o=(r+t/30)%12)=>n-i*Math.max(Math.min(o-3,9-o,1),-1);return[s(0),s(8),s(4)]}function Mv(t,e,n){const i=(s,r=(s+t/60)%6)=>n-n*e*Math.max(Math.min(r,4-r,1),0);return[i(5),i(3),i(1)]}function Pv(t,e,n){const i=tg(t,1,.5);let s;for(e+n>1&&(s=1/(e+n),e*=s,n*=s),s=0;s<3;s++)i[s]*=1-e-n,i[s]+=e;return i}function Tv(t,e,n,i,s){return t===s?(e-n)/i+(e<n?6:0):e===s?(n-t)/i+2:(t-e)/i+4}function $c(t){const n=t.r/255,i=t.g/255,s=t.b/255,r=Math.max(n,i,s),o=Math.min(n,i,s),l=(r+o)/2;let a,c,u;return r!==o&&(u=r-o,c=l>.5?u/(2-r-o):u/(r+o),a=Tv(n,i,s,u,r),a=a*60+.5),[a|0,c||0,l]}function Uc(t,e,n,i){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,n,i)).map(wn)}function Yc(t,e,n){return Uc(tg,t,e,n)}function Dv(t,e,n){return Uc(Pv,t,e,n)}function Ov(t,e,n){return Uc(Mv,t,e,n)}function ng(t){return(t%360+360)%360}function Nv(t){const e=Cv.exec(t);let n=255,i;if(!e)return;e[5]!==i&&(n=e[6]?is(+e[5]):wn(+e[5]));const s=ng(+e[2]),r=+e[3]/100,o=+e[4]/100;return e[1]==="hwb"?i=Dv(s,r,o):e[1]==="hsv"?i=Ov(s,r,o):i=Yc(s,r,o),{r:i[0],g:i[1],b:i[2],a:n}}function Lv(t,e){var n=$c(t);n[0]=ng(n[0]+e),n=Yc(n),t.r=n[0],t.g=n[1],t.b=n[2]}function Rv(t){if(!t)return;const e=$c(t),n=e[0],i=md(e[1]),s=md(e[2]);return t.a<255?`hsla(${n}, ${i}%, ${s}%, ${Ft(t.a)})`:`hsl(${n}, ${i}%, ${s}%)`}const yd={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},vd={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function Av(){const t={},e=Object.keys(vd),n=Object.keys(yd);let i,s,r,o,l;for(i=0;i<e.length;i++){for(o=l=e[i],s=0;s<n.length;s++)r=n[s],l=l.replace(r,yd[r]);r=parseInt(vd[o],16),t[l]=[r>>16&255,r>>8&255,r&255]}return t}let br;function zv(t){br||(br=Av(),br.transparent=[0,0,0,0]);const e=br[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const Iv=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function Fv(t){const e=Iv.exec(t);let n=255,i,s,r;if(!!e){if(e[7]!==i){const o=+e[7];n=e[8]?is(o):cn(o*255,0,255)}return i=+e[1],s=+e[3],r=+e[5],i=255&(e[2]?is(i):cn(i,0,255)),s=255&(e[4]?is(s):cn(s,0,255)),r=255&(e[6]?is(r):cn(r,0,255)),{r:i,g:s,b:r,a:n}}}function jv(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${Ft(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}const Pl=t=>t<=.0031308?t*12.92:Math.pow(t,1/2.4)*1.055-.055,oi=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function Bv(t,e,n){const i=oi(Ft(t.r)),s=oi(Ft(t.g)),r=oi(Ft(t.b));return{r:wn(Pl(i+n*(oi(Ft(e.r))-i))),g:wn(Pl(s+n*(oi(Ft(e.g))-s))),b:wn(Pl(r+n*(oi(Ft(e.b))-r))),a:t.a+n*(e.a-t.a)}}function Er(t,e,n){if(t){let i=$c(t);i[e]=Math.max(0,Math.min(i[e]+i[e]*n,e===0?360:1)),i=Yc(i),t.r=i[0],t.g=i[1],t.b=i[2]}}function ig(t,e){return t&&Object.assign(e||{},t)}function _d(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=wn(t[3]))):(e=ig(t,{r:0,g:0,b:0,a:1}),e.a=wn(e.a)),e}function Vv(t){return t.charAt(0)==="r"?Fv(t):Nv(t)}class Vs{constructor(e){if(e instanceof Vs)return e;const n=typeof e;let i;n==="object"?i=_d(e):n==="string"&&(i=Sv(e)||zv(e)||Vv(e)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var e=ig(this._rgb);return e&&(e.a=Ft(e.a)),e}set rgb(e){this._rgb=_d(e)}rgbString(){return this._valid?jv(this._rgb):void 0}hexString(){return this._valid?Ev(this._rgb):void 0}hslString(){return this._valid?Rv(this._rgb):void 0}mix(e,n){if(e){const i=this.rgb,s=e.rgb;let r;const o=n===r?.5:n,l=2*o-1,a=i.a-s.a,c=((l*a===-1?l:(l+a)/(1+l*a))+1)/2;r=1-c,i.r=255&c*i.r+r*s.r+.5,i.g=255&c*i.g+r*s.g+.5,i.b=255&c*i.b+r*s.b+.5,i.a=o*i.a+(1-o)*s.a,this.rgb=i}return this}interpolate(e,n){return e&&(this._rgb=Bv(this._rgb,e._rgb,n)),this}clone(){return new Vs(this.rgb)}alpha(e){return this._rgb.a=wn(e),this}clearer(e){const n=this._rgb;return n.a*=1-e,this}greyscale(){const e=this._rgb,n=tr(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=n,this}opaquer(e){const n=this._rgb;return n.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return Er(this._rgb,2,e),this}darken(e){return Er(this._rgb,2,-e),this}saturate(e){return Er(this._rgb,1,e),this}desaturate(e){return Er(this._rgb,1,-e),this}rotate(e){return Lv(this._rgb,e),this}}/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */function Lt(){}const Hv=(()=>{let t=0;return()=>t++})();function V(t){return t===null||typeof t>"u"}function q(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function F(t){return t!==null&&Object.prototype.toString.call(t)==="[object Object]"}function ae(t){return(typeof t=="number"||t instanceof Number)&&isFinite(+t)}function Ye(t,e){return ae(t)?t:e}function z(t,e){return typeof t>"u"?e:t}const Wv=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100:+t/e,sg=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100*e:+t;function X(t,e,n){if(t&&typeof t.call=="function")return t.apply(n,e)}function W(t,e,n,i){let s,r,o;if(q(t))if(r=t.length,i)for(s=r-1;s>=0;s--)e.call(n,t[s],s);else for(s=0;s<r;s++)e.call(n,t[s],s);else if(F(t))for(o=Object.keys(t),r=o.length,s=0;s<r;s++)e.call(n,t[o[s]],o[s])}function Po(t,e){let n,i,s,r;if(!t||!e||t.length!==e.length)return!1;for(n=0,i=t.length;n<i;++n)if(s=t[n],r=e[n],s.datasetIndex!==r.datasetIndex||s.index!==r.index)return!1;return!0}function To(t){if(q(t))return t.map(To);if(F(t)){const e=Object.create(null),n=Object.keys(t),i=n.length;let s=0;for(;s<i;++s)e[n[s]]=To(t[n[s]]);return e}return t}function rg(t){return["__proto__","prototype","constructor"].indexOf(t)===-1}function $v(t,e,n,i){if(!rg(t))return;const s=e[t],r=n[t];F(s)&&F(r)?Hs(s,r,i):e[t]=To(r)}function Hs(t,e,n){const i=q(e)?e:[e],s=i.length;if(!F(t))return t;n=n||{};const r=n.merger||$v;let o;for(let l=0;l<s;++l){if(o=i[l],!F(o))continue;const a=Object.keys(o);for(let c=0,u=a.length;c<u;++c)r(a[c],t,o,n)}return t}function vs(t,e){return Hs(t,e,{merger:Uv})}function Uv(t,e,n){if(!rg(t))return;const i=e[t],s=n[t];F(i)&&F(s)?vs(i,s):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=To(s))}const xd={"":t=>t,x:t=>t.x,y:t=>t.y};function Yv(t){const e=t.split("."),n=[];let i="";for(const s of e)i+=s,i.endsWith("\\")?i=i.slice(0,-1)+".":(n.push(i),i="");return n}function Xv(t){const e=Yv(t);return n=>{for(const i of e){if(i==="")break;n=n&&n[i]}return n}}function En(t,e){return(xd[e]||(xd[e]=Xv(e)))(t)}function Xc(t){return t.charAt(0).toUpperCase()+t.slice(1)}const Ws=t=>typeof t<"u",Cn=t=>typeof t=="function",kd=(t,e)=>{if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0};function Kv(t){return t.type==="mouseup"||t.type==="click"||t.type==="contextmenu"}const ne=Math.PI,ee=2*ne,Qv=ee+ne,Do=Number.POSITIVE_INFINITY,Gv=ne/180,ce=ne/2,On=ne/4,wd=ne*2/3,un=Math.log10,Pt=Math.sign;function _s(t,e,n){return Math.abs(t-e)<n}function Sd(t){const e=Math.round(t);t=_s(t,e,t/1e3)?e:t;const n=Math.pow(10,Math.floor(un(t))),i=t/n;return(i<=1?1:i<=2?2:i<=5?5:10)*n}function Zv(t){const e=[],n=Math.sqrt(t);let i;for(i=1;i<n;i++)t%i===0&&(e.push(i),e.push(t/i));return n===(n|0)&&e.push(n),e.sort((s,r)=>s-r).pop(),e}function Ri(t){return!isNaN(parseFloat(t))&&isFinite(t)}function qv(t,e){const n=Math.round(t);return n-e<=t&&n+e>=t}function og(t,e,n){let i,s,r;for(i=0,s=t.length;i<s;i++)r=t[i][n],isNaN(r)||(e.min=Math.min(e.min,r),e.max=Math.max(e.max,r))}function pt(t){return t*(ne/180)}function Kc(t){return t*(180/ne)}function bd(t){if(!ae(t))return;let e=1,n=0;for(;Math.round(t*e)/e!==t;)e*=10,n++;return n}function lg(t,e){const n=e.x-t.x,i=e.y-t.y,s=Math.sqrt(n*n+i*i);let r=Math.atan2(i,n);return r<-.5*ne&&(r+=ee),{angle:r,distance:s}}function Aa(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function Jv(t,e){return(t-e+Qv)%ee-ne}function Ke(t){return(t%ee+ee)%ee}function $s(t,e,n,i){const s=Ke(t),r=Ke(e),o=Ke(n),l=Ke(r-s),a=Ke(o-s),c=Ke(s-r),u=Ke(s-o);return s===r||s===o||i&&r===o||l>a&&c<u}function ve(t,e,n){return Math.max(e,Math.min(n,t))}function e_(t){return ve(t,-32768,32767)}function Ht(t,e,n,i=1e-6){return t>=Math.min(e,n)-i&&t<=Math.max(e,n)+i}function Qc(t,e,n){n=n||(o=>t[o]<e);let i=t.length-1,s=0,r;for(;i-s>1;)r=s+i>>1,n(r)?s=r:i=r;return{lo:s,hi:i}}const Wt=(t,e,n,i)=>Qc(t,n,i?s=>{const r=t[s][e];return r<n||r===n&&t[s+1][e]===n}:s=>t[s][e]<n),t_=(t,e,n)=>Qc(t,n,i=>t[i][e]>=n);function n_(t,e,n){let i=0,s=t.length;for(;i<s&&t[i]<e;)i++;for(;s>i&&t[s-1]>n;)s--;return i>0||s<t.length?t.slice(i,s):t}const ag=["push","pop","shift","splice","unshift"];function i_(t,e){if(t._chartjs){t._chartjs.listeners.push(e);return}Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),ag.forEach(n=>{const i="_onData"+Xc(n),s=t[n];Object.defineProperty(t,n,{configurable:!0,enumerable:!1,value(...r){const o=s.apply(this,r);return t._chartjs.listeners.forEach(l=>{typeof l[i]=="function"&&l[i](...r)}),o}})})}function Ed(t,e){const n=t._chartjs;if(!n)return;const i=n.listeners,s=i.indexOf(e);s!==-1&&i.splice(s,1),!(i.length>0)&&(ag.forEach(r=>{delete t[r]}),delete t._chartjs)}function cg(t){const e=new Set(t);return e.size===t.length?t:Array.from(e)}const ug=function(){return typeof window>"u"?function(t){return t()}:window.requestAnimationFrame}();function dg(t,e){let n=[],i=!1;return function(...s){n=s,i||(i=!0,ug.call(window,()=>{i=!1,t.apply(e,n)}))}}function s_(t,e){let n;return function(...i){return e?(clearTimeout(n),n=setTimeout(t,e,i)):t.apply(this,i),e}}const Gc=t=>t==="start"?"left":t==="end"?"right":"center",Ce=(t,e,n)=>t==="start"?e:t==="end"?n:(e+n)/2,r_=(t,e,n,i)=>t===(i?"left":"right")?n:t==="center"?(e+n)/2:e;function hg(t,e,n){const i=e.length;let s=0,r=i;if(t._sorted){const{iScale:o,_parsed:l}=t,a=o.axis,{min:c,max:u,minDefined:d,maxDefined:h}=o.getUserBounds();d&&(s=ve(Math.min(Wt(l,o.axis,c).lo,n?i:Wt(e,a,o.getPixelForValue(c)).lo),0,i-1)),h?r=ve(Math.max(Wt(l,o.axis,u,!0).hi+1,n?0:Wt(e,a,o.getPixelForValue(u),!0).hi+1),s,i)-s:r=i-s}return{start:s,count:r}}function fg(t){const{xScale:e,yScale:n,_scaleRanges:i}=t,s={xmin:e.min,xmax:e.max,ymin:n.min,ymax:n.max};if(!i)return t._scaleRanges=s,!0;const r=i.xmin!==e.min||i.xmax!==e.max||i.ymin!==n.min||i.ymax!==n.max;return Object.assign(i,s),r}const Cr=t=>t===0||t===1,Cd=(t,e,n)=>-(Math.pow(2,10*(t-=1))*Math.sin((t-e)*ee/n)),Md=(t,e,n)=>Math.pow(2,-10*t)*Math.sin((t-e)*ee/n)+1,xs={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>-Math.cos(t*ce)+1,easeOutSine:t=>Math.sin(t*ce),easeInOutSine:t=>-.5*(Math.cos(ne*t)-1),easeInExpo:t=>t===0?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>t===1?1:-Math.pow(2,-10*t)+1,easeInOutExpo:t=>Cr(t)?t:t<.5?.5*Math.pow(2,10*(t*2-1)):.5*(-Math.pow(2,-10*(t*2-1))+2),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>Cr(t)?t:Cd(t,.075,.3),easeOutElastic:t=>Cr(t)?t:Md(t,.075,.3),easeInOutElastic(t){return Cr(t)?t:t<.5?.5*Cd(t*2,.1125,.45):.5+.5*Md(t*2-1,.1125,.45)},easeInBack(t){return t*t*((1.70158+1)*t-1.70158)},easeOutBack(t){return(t-=1)*t*((1.70158+1)*t+1.70158)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:t=>1-xs.easeOutBounce(1-t),easeOutBounce(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:t=>t<.5?xs.easeInBounce(t*2)*.5:xs.easeOutBounce(t*2-1)*.5+.5};function Zc(t){if(t&&typeof t=="object"){const e=t.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function Pd(t){return Zc(t)?t:new Vs(t)}function Tl(t){return Zc(t)?t:new Vs(t).saturate(.5).darken(.1).hexString()}const o_=["x","y","borderWidth","radius","tension"],l_=["color","borderColor","backgroundColor"];function a_(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),t.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),t.set("animations",{colors:{type:"color",properties:l_},numbers:{type:"number",properties:o_}}),t.describe("animations",{_fallback:"animation"}),t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function c_(t){t.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Td=new Map;function u_(t,e){e=e||{};const n=t+JSON.stringify(e);let i=Td.get(n);return i||(i=new Intl.NumberFormat(t,e),Td.set(n,i)),i}function nr(t,e,n){return u_(e,n).format(t)}const pg={values(t){return q(t)?t:""+t},numeric(t,e,n){if(t===0)return"0";const i=this.chart.options.locale;let s,r=t;if(n.length>1){const c=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(c<1e-4||c>1e15)&&(s="scientific"),r=d_(t,n)}const o=un(Math.abs(r)),l=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),a={notation:s,minimumFractionDigits:l,maximumFractionDigits:l};return Object.assign(a,this.options.ticks.format),nr(t,i,a)},logarithmic(t,e,n){if(t===0)return"0";const i=n[e].significand||t/Math.pow(10,Math.floor(un(t)));return[1,2,3,5,10,15].includes(i)||e>.8*n.length?pg.numeric.call(this,t,e,n):""}};function d_(t,e){let n=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(n)>=1&&t!==Math.floor(t)&&(n=t-Math.floor(t)),n}var Zo={formatters:pg};function h_(t){t.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,n)=>n.lineWidth,tickColor:(e,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Zo.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),t.route("scale.ticks","color","","color"),t.route("scale.grid","color","","borderColor"),t.route("scale.border","color","","borderColor"),t.route("scale.title","color","","color"),t.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),t.describe("scales",{_fallback:"scale"}),t.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}const Jn=Object.create(null),za=Object.create(null);function ks(t,e){if(!e)return t;const n=e.split(".");for(let i=0,s=n.length;i<s;++i){const r=n[i];t=t[r]||(t[r]=Object.create(null))}return t}function Dl(t,e,n){return typeof e=="string"?Hs(ks(t,e),n):Hs(ks(t,""),e)}class f_{constructor(e,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,s)=>Tl(s.backgroundColor),this.hoverBorderColor=(i,s)=>Tl(s.borderColor),this.hoverColor=(i,s)=>Tl(s.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(n)}set(e,n){return Dl(this,e,n)}get(e){return ks(this,e)}describe(e,n){return Dl(za,e,n)}override(e,n){return Dl(Jn,e,n)}route(e,n,i,s){const r=ks(this,e),o=ks(this,i),l="_"+n;Object.defineProperties(r,{[l]:{value:r[n],writable:!0},[n]:{enumerable:!0,get(){const a=this[l],c=o[s];return F(a)?Object.assign({},c,a):z(a,c)},set(a){this[l]=a}}})}apply(e){e.forEach(n=>n(this))}}var ue=new f_({_scriptable:t=>!t.startsWith("on"),_indexable:t=>t!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[a_,c_,h_]);function p_(t){return!t||V(t.size)||V(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function Oo(t,e,n,i,s){let r=e[s];return r||(r=e[s]=t.measureText(s).width,n.push(s)),r>i&&(i=r),i}function g_(t,e,n,i){i=i||{};let s=i.data=i.data||{},r=i.garbageCollect=i.garbageCollect||[];i.font!==e&&(s=i.data={},r=i.garbageCollect=[],i.font=e),t.save(),t.font=e;let o=0;const l=n.length;let a,c,u,d,h;for(a=0;a<l;a++)if(d=n[a],d!=null&&!q(d))o=Oo(t,s,r,o,d);else if(q(d))for(c=0,u=d.length;c<u;c++)h=d[c],h!=null&&!q(h)&&(o=Oo(t,s,r,o,h));t.restore();const f=r.length/2;if(f>n.length){for(a=0;a<f;a++)delete s[r[a]];r.splice(0,f)}return o}function Nn(t,e,n){const i=t.currentDevicePixelRatio,s=n!==0?Math.max(n/2,.5):0;return Math.round((e-s)*i)/i+s}function Dd(t,e){e=e||t.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore()}function Ia(t,e,n,i){gg(t,e,n,i,null)}function gg(t,e,n,i,s){let r,o,l,a,c,u,d,h;const f=e.pointStyle,m=e.rotation,y=e.radius;let x=(m||0)*Gv;if(f&&typeof f=="object"&&(r=f.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){t.save(),t.translate(n,i),t.rotate(x),t.drawImage(f,-f.width/2,-f.height/2,f.width,f.height),t.restore();return}if(!(isNaN(y)||y<=0)){switch(t.beginPath(),f){default:s?t.ellipse(n,i,s/2,y,0,0,ee):t.arc(n,i,y,0,ee),t.closePath();break;case"triangle":u=s?s/2:y,t.moveTo(n+Math.sin(x)*u,i-Math.cos(x)*y),x+=wd,t.lineTo(n+Math.sin(x)*u,i-Math.cos(x)*y),x+=wd,t.lineTo(n+Math.sin(x)*u,i-Math.cos(x)*y),t.closePath();break;case"rectRounded":c=y*.516,a=y-c,o=Math.cos(x+On)*a,d=Math.cos(x+On)*(s?s/2-c:a),l=Math.sin(x+On)*a,h=Math.sin(x+On)*(s?s/2-c:a),t.arc(n-d,i-l,c,x-ne,x-ce),t.arc(n+h,i-o,c,x-ce,x),t.arc(n+d,i+l,c,x,x+ce),t.arc(n-h,i+o,c,x+ce,x+ne),t.closePath();break;case"rect":if(!m){a=Math.SQRT1_2*y,u=s?s/2:a,t.rect(n-u,i-a,2*u,2*a);break}x+=On;case"rectRot":d=Math.cos(x)*(s?s/2:y),o=Math.cos(x)*y,l=Math.sin(x)*y,h=Math.sin(x)*(s?s/2:y),t.moveTo(n-d,i-l),t.lineTo(n+h,i-o),t.lineTo(n+d,i+l),t.lineTo(n-h,i+o),t.closePath();break;case"crossRot":x+=On;case"cross":d=Math.cos(x)*(s?s/2:y),o=Math.cos(x)*y,l=Math.sin(x)*y,h=Math.sin(x)*(s?s/2:y),t.moveTo(n-d,i-l),t.lineTo(n+d,i+l),t.moveTo(n+h,i-o),t.lineTo(n-h,i+o);break;case"star":d=Math.cos(x)*(s?s/2:y),o=Math.cos(x)*y,l=Math.sin(x)*y,h=Math.sin(x)*(s?s/2:y),t.moveTo(n-d,i-l),t.lineTo(n+d,i+l),t.moveTo(n+h,i-o),t.lineTo(n-h,i+o),x+=On,d=Math.cos(x)*(s?s/2:y),o=Math.cos(x)*y,l=Math.sin(x)*y,h=Math.sin(x)*(s?s/2:y),t.moveTo(n-d,i-l),t.lineTo(n+d,i+l),t.moveTo(n+h,i-o),t.lineTo(n-h,i+o);break;case"line":o=s?s/2:Math.cos(x)*y,l=Math.sin(x)*y,t.moveTo(n-o,i-l),t.lineTo(n+o,i+l);break;case"dash":t.moveTo(n,i),t.lineTo(n+Math.cos(x)*(s?s/2:y),i+Math.sin(x)*y);break;case!1:t.closePath();break}t.fill(),e.borderWidth>0&&t.stroke()}}function $t(t,e,n){return n=n||.5,!e||t&&t.x>e.left-n&&t.x<e.right+n&&t.y>e.top-n&&t.y<e.bottom+n}function qo(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function Jo(t){t.restore()}function m_(t,e,n,i,s){if(!e)return t.lineTo(n.x,n.y);if(s==="middle"){const r=(e.x+n.x)/2;t.lineTo(r,e.y),t.lineTo(r,n.y)}else s==="after"!=!!i?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y);t.lineTo(n.x,n.y)}function y_(t,e,n,i){if(!e)return t.lineTo(n.x,n.y);t.bezierCurveTo(i?e.cp1x:e.cp2x,i?e.cp1y:e.cp2y,i?n.cp2x:n.cp1x,i?n.cp2y:n.cp1y,n.x,n.y)}function v_(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),V(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}function __(t,e,n,i,s){if(s.strikethrough||s.underline){const r=t.measureText(i),o=e-r.actualBoundingBoxLeft,l=e+r.actualBoundingBoxRight,a=n-r.actualBoundingBoxAscent,c=n+r.actualBoundingBoxDescent,u=s.strikethrough?(a+c)/2:c;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=s.decorationWidth||2,t.moveTo(o,u),t.lineTo(l,u),t.stroke()}}function x_(t,e){const n=t.fillStyle;t.fillStyle=e.color,t.fillRect(e.left,e.top,e.width,e.height),t.fillStyle=n}function ei(t,e,n,i,s,r={}){const o=q(e)?e:[e],l=r.strokeWidth>0&&r.strokeColor!=="";let a,c;for(t.save(),t.font=s.string,v_(t,r),a=0;a<o.length;++a)c=o[a],r.backdrop&&x_(t,r.backdrop),l&&(r.strokeColor&&(t.strokeStyle=r.strokeColor),V(r.strokeWidth)||(t.lineWidth=r.strokeWidth),t.strokeText(c,n,i,r.maxWidth)),t.fillText(c,n,i,r.maxWidth),__(t,n,i,c,r),i+=Number(s.lineHeight);t.restore()}function Us(t,e){const{x:n,y:i,w:s,h:r,radius:o}=e;t.arc(n+o.topLeft,i+o.topLeft,o.topLeft,-ce,ne,!0),t.lineTo(n,i+r-o.bottomLeft),t.arc(n+o.bottomLeft,i+r-o.bottomLeft,o.bottomLeft,ne,ce,!0),t.lineTo(n+s-o.bottomRight,i+r),t.arc(n+s-o.bottomRight,i+r-o.bottomRight,o.bottomRight,ce,0,!0),t.lineTo(n+s,i+o.topRight),t.arc(n+s-o.topRight,i+o.topRight,o.topRight,0,-ce,!0),t.lineTo(n+o.topLeft,i)}const k_=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,w_=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function S_(t,e){const n=(""+t).match(k_);if(!n||n[1]==="normal")return e*1.2;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100;break}return e*t}const b_=t=>+t||0;function qc(t,e){const n={},i=F(e),s=i?Object.keys(e):e,r=F(t)?i?o=>z(t[o],t[e[o]]):o=>t[o]:()=>t;for(const o of s)n[o]=b_(r(o));return n}function mg(t){return qc(t,{top:"y",right:"x",bottom:"y",left:"x"})}function Yn(t){return qc(t,["topLeft","topRight","bottomLeft","bottomRight"])}function De(t){const e=mg(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function ge(t,e){t=t||{},e=e||ue.font;let n=z(t.size,e.size);typeof n=="string"&&(n=parseInt(n,10));let i=z(t.style,e.style);i&&!(""+i).match(w_)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const s={family:z(t.family,e.family),lineHeight:S_(z(t.lineHeight,e.lineHeight),n),size:n,style:i,weight:z(t.weight,e.weight),string:""};return s.string=p_(s),s}function ss(t,e,n,i){let s=!0,r,o,l;for(r=0,o=t.length;r<o;++r)if(l=t[r],l!==void 0&&(e!==void 0&&typeof l=="function"&&(l=l(e),s=!1),n!==void 0&&q(l)&&(l=l[n%l.length],s=!1),l!==void 0))return i&&!s&&(i.cacheable=!1),l}function E_(t,e,n){const{min:i,max:s}=t,r=sg(e,(s-i)/2),o=(l,a)=>n&&l===0?0:l+a;return{min:o(i,-Math.abs(r)),max:o(s,r)}}function Dn(t,e){return Object.assign(Object.create(t),e)}function Jc(t,e=[""],n,i,s=()=>t[0]){const r=n||t;typeof i>"u"&&(i=xg("_fallback",t));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:r,_fallback:i,_getTarget:s,override:l=>Jc([l,...t],e,r,i)};return new Proxy(o,{deleteProperty(l,a){return delete l[a],delete l._keys,delete t[0][a],!0},get(l,a){return vg(l,a,()=>L_(a,e,t,l))},getOwnPropertyDescriptor(l,a){return Reflect.getOwnPropertyDescriptor(l._scopes[0],a)},getPrototypeOf(){return Reflect.getPrototypeOf(t[0])},has(l,a){return Nd(l).includes(a)},ownKeys(l){return Nd(l)},set(l,a,c){const u=l._storage||(l._storage=s());return l[a]=u[a]=c,delete l._keys,!0}})}function Ai(t,e,n,i){const s={_cacheable:!1,_proxy:t,_context:e,_subProxy:n,_stack:new Set,_descriptors:yg(t,i),setContext:r=>Ai(t,r,n,i),override:r=>Ai(t.override(r),e,n,i)};return new Proxy(s,{deleteProperty(r,o){return delete r[o],delete t[o],!0},get(r,o,l){return vg(r,o,()=>M_(r,o,l))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(t,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,o)},getPrototypeOf(){return Reflect.getPrototypeOf(t)},has(r,o){return Reflect.has(t,o)},ownKeys(){return Reflect.ownKeys(t)},set(r,o,l){return t[o]=l,delete r[o],!0}})}function yg(t,e={scriptable:!0,indexable:!0}){const{_scriptable:n=e.scriptable,_indexable:i=e.indexable,_allKeys:s=e.allKeys}=t;return{allKeys:s,scriptable:n,indexable:i,isScriptable:Cn(n)?n:()=>n,isIndexable:Cn(i)?i:()=>i}}const C_=(t,e)=>t?t+Xc(e):e,eu=(t,e)=>F(e)&&t!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function vg(t,e,n){if(Object.prototype.hasOwnProperty.call(t,e))return t[e];const i=n();return t[e]=i,i}function M_(t,e,n){const{_proxy:i,_context:s,_subProxy:r,_descriptors:o}=t;let l=i[e];return Cn(l)&&o.isScriptable(e)&&(l=P_(e,l,t,n)),q(l)&&l.length&&(l=T_(e,l,t,o.isIndexable)),eu(e,l)&&(l=Ai(l,s,r&&r[e],o)),l}function P_(t,e,n,i){const{_proxy:s,_context:r,_subProxy:o,_stack:l}=n;if(l.has(t))throw new Error("Recursion detected: "+Array.from(l).join("->")+"->"+t);l.add(t);let a=e(r,o||i);return l.delete(t),eu(t,a)&&(a=tu(s._scopes,s,t,a)),a}function T_(t,e,n,i){const{_proxy:s,_context:r,_subProxy:o,_descriptors:l}=n;if(typeof r.index<"u"&&i(t))return e[r.index%e.length];if(F(e[0])){const a=e,c=s._scopes.filter(u=>u!==a);e=[];for(const u of a){const d=tu(c,s,t,u);e.push(Ai(d,r,o&&o[t],l))}}return e}function _g(t,e,n){return Cn(t)?t(e,n):t}const D_=(t,e)=>t===!0?e:typeof t=="string"?En(e,t):void 0;function O_(t,e,n,i,s){for(const r of e){const o=D_(n,r);if(o){t.add(o);const l=_g(o._fallback,n,s);if(typeof l<"u"&&l!==n&&l!==i)return l}else if(o===!1&&typeof i<"u"&&n!==i)return null}return!1}function tu(t,e,n,i){const s=e._rootScopes,r=_g(e._fallback,n,i),o=[...t,...s],l=new Set;l.add(i);let a=Od(l,o,n,r||n,i);return a===null||typeof r<"u"&&r!==n&&(a=Od(l,o,r,a,i),a===null)?!1:Jc(Array.from(l),[""],s,r,()=>N_(e,n,i))}function Od(t,e,n,i,s){for(;n;)n=O_(t,e,n,i,s);return n}function N_(t,e,n){const i=t._getTarget();e in i||(i[e]={});const s=i[e];return q(s)&&F(n)?n:s||{}}function L_(t,e,n,i){let s;for(const r of e)if(s=xg(C_(r,t),n),typeof s<"u")return eu(t,s)?tu(n,i,t,s):s}function xg(t,e){for(const n of e){if(!n)continue;const i=n[t];if(typeof i<"u")return i}}function Nd(t){let e=t._keys;return e||(e=t._keys=R_(t._scopes)),e}function R_(t){const e=new Set;for(const n of t)for(const i of Object.keys(n).filter(s=>!s.startsWith("_")))e.add(i);return Array.from(e)}function kg(t,e,n,i){const{iScale:s}=t,{key:r="r"}=this._parsing,o=new Array(i);let l,a,c,u;for(l=0,a=i;l<a;++l)c=l+n,u=e[c],o[l]={r:s.parse(En(u,r),c)};return o}const A_=Number.EPSILON||1e-14,zi=(t,e)=>e<t.length&&!t[e].skip&&t[e],wg=t=>t==="x"?"y":"x";function z_(t,e,n,i){const s=t.skip?e:t,r=e,o=n.skip?e:n,l=Aa(r,s),a=Aa(o,r);let c=l/(l+a),u=a/(l+a);c=isNaN(c)?0:c,u=isNaN(u)?0:u;const d=i*c,h=i*u;return{previous:{x:r.x-d*(o.x-s.x),y:r.y-d*(o.y-s.y)},next:{x:r.x+h*(o.x-s.x),y:r.y+h*(o.y-s.y)}}}function I_(t,e,n){const i=t.length;let s,r,o,l,a,c=zi(t,0);for(let u=0;u<i-1;++u)if(a=c,c=zi(t,u+1),!(!a||!c)){if(_s(e[u],0,A_)){n[u]=n[u+1]=0;continue}s=n[u]/e[u],r=n[u+1]/e[u],l=Math.pow(s,2)+Math.pow(r,2),!(l<=9)&&(o=3/Math.sqrt(l),n[u]=s*o*e[u],n[u+1]=r*o*e[u])}}function F_(t,e,n="x"){const i=wg(n),s=t.length;let r,o,l,a=zi(t,0);for(let c=0;c<s;++c){if(o=l,l=a,a=zi(t,c+1),!l)continue;const u=l[n],d=l[i];o&&(r=(u-o[n])/3,l[`cp1${n}`]=u-r,l[`cp1${i}`]=d-r*e[c]),a&&(r=(a[n]-u)/3,l[`cp2${n}`]=u+r,l[`cp2${i}`]=d+r*e[c])}}function j_(t,e="x"){const n=wg(e),i=t.length,s=Array(i).fill(0),r=Array(i);let o,l,a,c=zi(t,0);for(o=0;o<i;++o)if(l=a,a=c,c=zi(t,o+1),!!a){if(c){const u=c[e]-a[e];s[o]=u!==0?(c[n]-a[n])/u:0}r[o]=l?c?Pt(s[o-1])!==Pt(s[o])?0:(s[o-1]+s[o])/2:s[o-1]:s[o]}I_(t,s,r),F_(t,r,e)}function Mr(t,e,n){return Math.max(Math.min(t,n),e)}function B_(t,e){let n,i,s,r,o,l=$t(t[0],e);for(n=0,i=t.length;n<i;++n)o=r,r=l,l=n<i-1&&$t(t[n+1],e),r&&(s=t[n],o&&(s.cp1x=Mr(s.cp1x,e.left,e.right),s.cp1y=Mr(s.cp1y,e.top,e.bottom)),l&&(s.cp2x=Mr(s.cp2x,e.left,e.right),s.cp2y=Mr(s.cp2y,e.top,e.bottom)))}function V_(t,e,n,i,s){let r,o,l,a;if(e.spanGaps&&(t=t.filter(c=>!c.skip)),e.cubicInterpolationMode==="monotone")j_(t,s);else{let c=i?t[t.length-1]:t[0];for(r=0,o=t.length;r<o;++r)l=t[r],a=z_(c,l,t[Math.min(r+1,o-(i?0:1))%o],e.tension),l.cp1x=a.previous.x,l.cp1y=a.previous.y,l.cp2x=a.next.x,l.cp2y=a.next.y,c=l}e.capBezierPoints&&B_(t,n)}function Sg(){return typeof window<"u"&&typeof document<"u"}function nu(t){let e=t.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function No(t,e,n){let i;return typeof t=="string"?(i=parseInt(t,10),t.indexOf("%")!==-1&&(i=i/100*e.parentNode[n])):i=t,i}const el=t=>t.ownerDocument.defaultView.getComputedStyle(t,null);function H_(t,e){return el(t).getPropertyValue(e)}const W_=["top","right","bottom","left"];function Xn(t,e,n){const i={};n=n?"-"+n:"";for(let s=0;s<4;s++){const r=W_[s];i[r]=parseFloat(t[e+"-"+r+n])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const $_=(t,e,n)=>(t>0||e>0)&&(!n||!n.shadowRoot);function U_(t,e){const n=t.touches,i=n&&n.length?n[0]:t,{offsetX:s,offsetY:r}=i;let o=!1,l,a;if($_(s,r,t.target))l=s,a=r;else{const c=e.getBoundingClientRect();l=i.clientX-c.left,a=i.clientY-c.top,o=!0}return{x:l,y:a,box:o}}function Fn(t,e){if("native"in t)return t;const{canvas:n,currentDevicePixelRatio:i}=e,s=el(n),r=s.boxSizing==="border-box",o=Xn(s,"padding"),l=Xn(s,"border","width"),{x:a,y:c,box:u}=U_(t,n),d=o.left+(u&&l.left),h=o.top+(u&&l.top);let{width:f,height:m}=e;return r&&(f-=o.width+l.width,m-=o.height+l.height),{x:Math.round((a-d)/f*n.width/i),y:Math.round((c-h)/m*n.height/i)}}function Y_(t,e,n){let i,s;if(e===void 0||n===void 0){const r=nu(t);if(!r)e=t.clientWidth,n=t.clientHeight;else{const o=r.getBoundingClientRect(),l=el(r),a=Xn(l,"border","width"),c=Xn(l,"padding");e=o.width-c.width-a.width,n=o.height-c.height-a.height,i=No(l.maxWidth,r,"clientWidth"),s=No(l.maxHeight,r,"clientHeight")}}return{width:e,height:n,maxWidth:i||Do,maxHeight:s||Do}}const Pr=t=>Math.round(t*10)/10;function X_(t,e,n,i){const s=el(t),r=Xn(s,"margin"),o=No(s.maxWidth,t,"clientWidth")||Do,l=No(s.maxHeight,t,"clientHeight")||Do,a=Y_(t,e,n);let{width:c,height:u}=a;if(s.boxSizing==="content-box"){const h=Xn(s,"border","width"),f=Xn(s,"padding");c-=f.width+h.width,u-=f.height+h.height}return c=Math.max(0,c-r.width),u=Math.max(0,i?c/i:u-r.height),c=Pr(Math.min(c,o,a.maxWidth)),u=Pr(Math.min(u,l,a.maxHeight)),c&&!u&&(u=Pr(c/2)),(e!==void 0||n!==void 0)&&i&&a.height&&u>a.height&&(u=a.height,c=Pr(Math.floor(u*i))),{width:c,height:u}}function Ld(t,e,n){const i=e||1,s=Math.floor(t.height*i),r=Math.floor(t.width*i);t.height=Math.floor(t.height),t.width=Math.floor(t.width);const o=t.canvas;return o.style&&(n||!o.style.height&&!o.style.width)&&(o.style.height=`${t.height}px`,o.style.width=`${t.width}px`),t.currentDevicePixelRatio!==i||o.height!==s||o.width!==r?(t.currentDevicePixelRatio=i,o.height=s,o.width=r,t.ctx.setTransform(i,0,0,i,0,0),!0):!1}const K_=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch{}return t}();function Rd(t,e){const n=H_(t,e),i=n&&n.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function jn(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:t.y+n*(e.y-t.y)}}function Q_(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:i==="middle"?n<.5?t.y:e.y:i==="after"?n<1?t.y:e.y:n>0?e.y:t.y}}function G_(t,e,n,i){const s={x:t.cp2x,y:t.cp2y},r={x:e.cp1x,y:e.cp1y},o=jn(t,s,n),l=jn(s,r,n),a=jn(r,e,n),c=jn(o,l,n),u=jn(l,a,n);return jn(c,u,n)}const Z_=function(t,e){return{x(n){return t+t+e-n},setWidth(n){e=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,i){return n-i},leftForLtr(n,i){return n-i}}},q_=function(){return{x(t){return t},setWidth(t){},textAlign(t){return t},xPlus(t,e){return t+e},leftForLtr(t,e){return t}}};function Ci(t,e,n){return t?Z_(e,n):q_()}function bg(t,e){let n,i;(e==="ltr"||e==="rtl")&&(n=t.canvas.style,i=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",e,"important"),t.prevTextDirection=i)}function Eg(t,e){e!==void 0&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function Cg(t){return t==="angle"?{between:$s,compare:Jv,normalize:Ke}:{between:Ht,compare:(e,n)=>e-n,normalize:e=>e}}function Ad({start:t,end:e,count:n,loop:i,style:s}){return{start:t%n,end:e%n,loop:i&&(e-t+1)%n===0,style:s}}function J_(t,e,n){const{property:i,start:s,end:r}=n,{between:o,normalize:l}=Cg(i),a=e.length;let{start:c,end:u,loop:d}=t,h,f;if(d){for(c+=a,u+=a,h=0,f=a;h<f&&o(l(e[c%a][i]),s,r);++h)c--,u--;c%=a,u%=a}return u<c&&(u+=a),{start:c,end:u,loop:d,style:t.style}}function Mg(t,e,n){if(!n)return[t];const{property:i,start:s,end:r}=n,o=e.length,{compare:l,between:a,normalize:c}=Cg(i),{start:u,end:d,loop:h,style:f}=J_(t,e,n),m=[];let y=!1,x=null,g,p,v;const k=()=>a(s,v,g)&&l(s,v)!==0,w=()=>l(r,g)===0||a(r,v,g),S=()=>y||k(),b=()=>!y||w();for(let E=u,D=u;E<=d;++E)p=e[E%o],!p.skip&&(g=c(p[i]),g!==v&&(y=a(g,s,r),x===null&&S()&&(x=l(g,s)===0?E:D),x!==null&&b()&&(m.push(Ad({start:x,end:E,loop:h,count:o,style:f})),x=null),D=E,v=g));return x!==null&&m.push(Ad({start:x,end:d,loop:h,count:o,style:f})),m}function Pg(t,e){const n=[],i=t.segments;for(let s=0;s<i.length;s++){const r=Mg(i[s],t.points,e);r.length&&n.push(...r)}return n}function ex(t,e,n,i){let s=0,r=e-1;if(n&&!i)for(;s<e&&!t[s].skip;)s++;for(;s<e&&t[s].skip;)s++;for(s%=e,n&&(r+=s);r>s&&t[r%e].skip;)r--;return r%=e,{start:s,end:r}}function tx(t,e,n,i){const s=t.length,r=[];let o=e,l=t[e],a;for(a=e+1;a<=n;++a){const c=t[a%s];c.skip||c.stop?l.skip||(i=!1,r.push({start:e%s,end:(a-1)%s,loop:i}),e=o=c.stop?a:null):(o=a,l.skip&&(e=a)),l=c}return o!==null&&r.push({start:e%s,end:o%s,loop:i}),r}function nx(t,e){const n=t.points,i=t.options.spanGaps,s=n.length;if(!s)return[];const r=!!t._loop,{start:o,end:l}=ex(n,s,r,i);if(i===!0)return zd(t,[{start:o,end:l,loop:r}],n,e);const a=l<o?l+s:l,c=!!t._fullLoop&&o===0&&l===s-1;return zd(t,tx(n,o,a,c),n,e)}function zd(t,e,n,i){return!i||!i.setContext||!n?e:ix(t,e,n,i)}function ix(t,e,n,i){const s=t._chart.getContext(),r=Id(t.options),{_datasetIndex:o,options:{spanGaps:l}}=t,a=n.length,c=[];let u=r,d=e[0].start,h=d;function f(m,y,x,g){const p=l?-1:1;if(m!==y){for(m+=a;n[m%a].skip;)m-=p;for(;n[y%a].skip;)y+=p;m%a!==y%a&&(c.push({start:m%a,end:y%a,loop:x,style:g}),u=g,d=y%a)}}for(const m of e){d=l?d:m.start;let y=n[d%a],x;for(h=d+1;h<=m.end;h++){const g=n[h%a];x=Id(i.setContext(Dn(s,{type:"segment",p0:y,p1:g,p0DataIndex:(h-1)%a,p1DataIndex:h%a,datasetIndex:o}))),sx(x,u)&&f(d,h-1,m.loop,u),y=g,u=x}d<h-1&&f(d,h-1,m.loop,u)}return c}function Id(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function sx(t,e){if(!e)return!1;const n=[],i=function(s,r){return Zc(r)?(n.includes(r)||n.push(r),n.indexOf(r)):r};return JSON.stringify(t,i)!==JSON.stringify(e,i)}/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */class rx{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,n,i,s){const r=n.listeners[s],o=n.duration;r.forEach(l=>l({chart:e,initial:n.initial,numSteps:o,currentStep:Math.min(i-n.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=ug.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let n=0;this._charts.forEach((i,s)=>{if(!i.running||!i.items.length)return;const r=i.items;let o=r.length-1,l=!1,a;for(;o>=0;--o)a=r[o],a._active?(a._total>i.duration&&(i.duration=a._total),a.tick(e),l=!0):(r[o]=r[r.length-1],r.pop());l&&(s.draw(),this._notify(s,i,e,"progress")),r.length||(i.running=!1,this._notify(s,i,e,"complete"),i.initial=!1),n+=r.length}),this._lastDate=e,n===0&&(this._running=!1)}_getAnims(e){const n=this._charts;let i=n.get(e);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(e,i)),i}listen(e,n,i){this._getAnims(e).listeners[n].push(i)}add(e,n){!n||!n.length||this._getAnims(e).items.push(...n)}has(e){return this._getAnims(e).items.length>0}start(e){const n=this._charts.get(e);!n||(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((i,s)=>Math.max(i,s._duration),0),this._refresh())}running(e){if(!this._running)return!1;const n=this._charts.get(e);return!(!n||!n.running||!n.items.length)}stop(e){const n=this._charts.get(e);if(!n||!n.items.length)return;const i=n.items;let s=i.length-1;for(;s>=0;--s)i[s].cancel();n.items=[],this._notify(e,n,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var Rt=new rx;const Fd="transparent",ox={boolean(t,e,n){return n>.5?e:t},color(t,e,n){const i=Pd(t||Fd),s=i.valid&&Pd(e||Fd);return s&&s.valid?s.mix(i,n).hexString():e},number(t,e,n){return t+(e-t)*n}};class lx{constructor(e,n,i,s){const r=n[i];s=ss([e.to,s,r,e.from]);const o=ss([e.from,r,s]);this._active=!0,this._fn=e.fn||ox[e.type||typeof o],this._easing=xs[e.easing]||xs.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=n,this._prop=i,this._from=o,this._to=s,this._promises=void 0}active(){return this._active}update(e,n,i){if(this._active){this._notify(!1);const s=this._target[this._prop],r=i-this._start,o=this._duration-r;this._start=i,this._duration=Math.floor(Math.max(o,e.duration)),this._total+=r,this._loop=!!e.loop,this._to=ss([e.to,n,s,e.from]),this._from=ss([e.from,s,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){const n=e-this._start,i=this._duration,s=this._prop,r=this._from,o=this._loop,l=this._to;let a;if(this._active=r!==l&&(o||n<i),!this._active){this._target[s]=l,this._notify(!0);return}if(n<0){this._target[s]=r;return}a=n/i%2,a=o&&a>1?2-a:a,a=this._easing(Math.min(1,Math.max(0,a))),this._target[s]=this._fn(r,l,a)}wait(){const e=this._promises||(this._promises=[]);return new Promise((n,i)=>{e.push({res:n,rej:i})})}_notify(e){const n=e?"res":"rej",i=this._promises||[];for(let s=0;s<i.length;s++)i[s][n]()}}class Tg{constructor(e,n){this._chart=e,this._properties=new Map,this.configure(n)}configure(e){if(!F(e))return;const n=Object.keys(ue.animation),i=this._properties;Object.getOwnPropertyNames(e).forEach(s=>{const r=e[s];if(!F(r))return;const o={};for(const l of n)o[l]=r[l];(q(r.properties)&&r.properties||[s]).forEach(l=>{(l===s||!i.has(l))&&i.set(l,o)})})}_animateOptions(e,n){const i=n.options,s=cx(e,i);if(!s)return[];const r=this._createAnimations(s,i);return i.$shared&&ax(e.options.$animations,i).then(()=>{e.options=i},()=>{}),r}_createAnimations(e,n){const i=this._properties,s=[],r=e.$animations||(e.$animations={}),o=Object.keys(n),l=Date.now();let a;for(a=o.length-1;a>=0;--a){const c=o[a];if(c.charAt(0)==="$")continue;if(c==="options"){s.push(...this._animateOptions(e,n));continue}const u=n[c];let d=r[c];const h=i.get(c);if(d)if(h&&d.active()){d.update(h,u,l);continue}else d.cancel();if(!h||!h.duration){e[c]=u;continue}r[c]=d=new lx(h,e,c,u),s.push(d)}return s}update(e,n){if(this._properties.size===0){Object.assign(e,n);return}const i=this._createAnimations(e,n);if(i.length)return Rt.add(this._chart,i),!0}}function ax(t,e){const n=[],i=Object.keys(e);for(let s=0;s<i.length;s++){const r=t[i[s]];r&&r.active()&&n.push(r.wait())}return Promise.all(n)}function cx(t,e){if(!e)return;let n=t.options;if(!n){t.options=e;return}return n.$shared&&(t.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function jd(t,e){const n=t&&t.options||{},i=n.reverse,s=n.min===void 0?e:0,r=n.max===void 0?e:0;return{start:i?r:s,end:i?s:r}}function ux(t,e,n){if(n===!1)return!1;const i=jd(t,n),s=jd(e,n);return{top:s.end,right:i.end,bottom:s.start,left:i.start}}function dx(t){let e,n,i,s;return F(t)?(e=t.top,n=t.right,i=t.bottom,s=t.left):e=n=i=s=t,{top:e,right:n,bottom:i,left:s,disabled:t===!1}}function Dg(t,e){const n=[],i=t._getSortedDatasetMetas(e);let s,r;for(s=0,r=i.length;s<r;++s)n.push(i[s].index);return n}function Bd(t,e,n,i={}){const s=t.keys,r=i.mode==="single";let o,l,a,c;if(e!==null){for(o=0,l=s.length;o<l;++o){if(a=+s[o],a===n){if(i.all)continue;break}c=t.values[a],ae(c)&&(r||e===0||Pt(e)===Pt(c))&&(e+=c)}return e}}function hx(t){const e=Object.keys(t),n=new Array(e.length);let i,s,r;for(i=0,s=e.length;i<s;++i)r=e[i],n[i]={x:r,y:t[r]};return n}function Vd(t,e){const n=t&&t.options.stacked;return n||n===void 0&&e.stack!==void 0}function fx(t,e,n){return`${t.id}.${e.id}.${n.stack||n.type}`}function px(t){const{min:e,max:n,minDefined:i,maxDefined:s}=t.getUserBounds();return{min:i?e:Number.NEGATIVE_INFINITY,max:s?n:Number.POSITIVE_INFINITY}}function gx(t,e,n){const i=t[e]||(t[e]={});return i[n]||(i[n]={})}function Hd(t,e,n,i){for(const s of e.getMatchingVisibleMetas(i).reverse()){const r=t[s.index];if(n&&r>0||!n&&r<0)return s.index}return null}function Wd(t,e){const{chart:n,_cachedMeta:i}=t,s=n._stacks||(n._stacks={}),{iScale:r,vScale:o,index:l}=i,a=r.axis,c=o.axis,u=fx(r,o,i),d=e.length;let h;for(let f=0;f<d;++f){const m=e[f],{[a]:y,[c]:x}=m,g=m._stacks||(m._stacks={});h=g[c]=gx(s,u,y),h[l]=x,h._top=Hd(h,o,!0,i.type),h._bottom=Hd(h,o,!1,i.type);const p=h._visualValues||(h._visualValues={});p[l]=x}}function Ol(t,e){const n=t.scales;return Object.keys(n).filter(i=>n[i].axis===e).shift()}function mx(t,e){return Dn(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function yx(t,e,n){return Dn(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:n,index:e,mode:"default",type:"data"})}function Ki(t,e){const n=t.controller.index,i=t.vScale&&t.vScale.axis;if(!!i){e=e||t._parsed;for(const s of e){const r=s._stacks;if(!r||r[i]===void 0||r[i][n]===void 0)return;delete r[i][n],r[i]._visualValues!==void 0&&r[i]._visualValues[n]!==void 0&&delete r[i]._visualValues[n]}}}const Nl=t=>t==="reset"||t==="none",$d=(t,e)=>e?t:Object.assign({},t),vx=(t,e,n)=>t&&!e.hidden&&e._stacked&&{keys:Dg(n,!0),values:null};class yt{constructor(e,n){this.chart=e,this._ctx=e.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=Vd(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&Ki(this._cachedMeta),this.index=e}linkScales(){const e=this.chart,n=this._cachedMeta,i=this.getDataset(),s=(d,h,f,m)=>d==="x"?h:d==="r"?m:f,r=n.xAxisID=z(i.xAxisID,Ol(e,"x")),o=n.yAxisID=z(i.yAxisID,Ol(e,"y")),l=n.rAxisID=z(i.rAxisID,Ol(e,"r")),a=n.indexAxis,c=n.iAxisID=s(a,r,o,l),u=n.vAxisID=s(a,o,r,l);n.xScale=this.getScaleForId(r),n.yScale=this.getScaleForId(o),n.rScale=this.getScaleForId(l),n.iScale=this.getScaleForId(c),n.vScale=this.getScaleForId(u)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const n=this._cachedMeta;return e===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&Ed(this._data,this),e._stacked&&Ki(e)}_dataCheck(){const e=this.getDataset(),n=e.data||(e.data=[]),i=this._data;if(F(n))this._data=hx(n);else if(i!==n){if(i){Ed(i,this);const s=this._cachedMeta;Ki(s),s._parsed=[]}n&&Object.isExtensible(n)&&i_(n,this),this._syncList=[],this._data=n}}addElements(){const e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){const n=this._cachedMeta,i=this.getDataset();let s=!1;this._dataCheck();const r=n._stacked;n._stacked=Vd(n.vScale,n),n.stack!==i.stack&&(s=!0,Ki(n),n.stack=i.stack),this._resyncElements(e),(s||r!==n._stacked)&&Wd(this,n._parsed)}configure(){const e=this.chart.config,n=e.datasetScopeKeys(this._type),i=e.getOptionScopes(this.getDataset(),n,!0);this.options=e.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,n){const{_cachedMeta:i,_data:s}=this,{iScale:r,_stacked:o}=i,l=r.axis;let a=e===0&&n===s.length?!0:i._sorted,c=e>0&&i._parsed[e-1],u,d,h;if(this._parsing===!1)i._parsed=s,i._sorted=!0,h=s;else{q(s[e])?h=this.parseArrayData(i,s,e,n):F(s[e])?h=this.parseObjectData(i,s,e,n):h=this.parsePrimitiveData(i,s,e,n);const f=()=>d[l]===null||c&&d[l]<c[l];for(u=0;u<n;++u)i._parsed[u+e]=d=h[u],a&&(f()&&(a=!1),c=d);i._sorted=a}o&&Wd(this,h)}parsePrimitiveData(e,n,i,s){const{iScale:r,vScale:o}=e,l=r.axis,a=o.axis,c=r.getLabels(),u=r===o,d=new Array(s);let h,f,m;for(h=0,f=s;h<f;++h)m=h+i,d[h]={[l]:u||r.parse(c[m],m),[a]:o.parse(n[m],m)};return d}parseArrayData(e,n,i,s){const{xScale:r,yScale:o}=e,l=new Array(s);let a,c,u,d;for(a=0,c=s;a<c;++a)u=a+i,d=n[u],l[a]={x:r.parse(d[0],u),y:o.parse(d[1],u)};return l}parseObjectData(e,n,i,s){const{xScale:r,yScale:o}=e,{xAxisKey:l="x",yAxisKey:a="y"}=this._parsing,c=new Array(s);let u,d,h,f;for(u=0,d=s;u<d;++u)h=u+i,f=n[h],c[u]={x:r.parse(En(f,l),h),y:o.parse(En(f,a),h)};return c}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,n,i){const s=this.chart,r=this._cachedMeta,o=n[e.axis],l={keys:Dg(s,!0),values:n._stacks[e.axis]._visualValues};return Bd(l,o,r.index,{mode:i})}updateRangeFromParsed(e,n,i,s){const r=i[n.axis];let o=r===null?NaN:r;const l=s&&i._stacks[n.axis];s&&l&&(s.values=l,o=Bd(s,r,this._cachedMeta.index)),e.min=Math.min(e.min,o),e.max=Math.max(e.max,o)}getMinMax(e,n){const i=this._cachedMeta,s=i._parsed,r=i._sorted&&e===i.iScale,o=s.length,l=this._getOtherScale(e),a=vx(n,i,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:u,max:d}=px(l);let h,f;function m(){f=s[h];const y=f[l.axis];return!ae(f[e.axis])||u>y||d<y}for(h=0;h<o&&!(!m()&&(this.updateRangeFromParsed(c,e,f,a),r));++h);if(r){for(h=o-1;h>=0;--h)if(!m()){this.updateRangeFromParsed(c,e,f,a);break}}return c}getAllParsedValues(e){const n=this._cachedMeta._parsed,i=[];let s,r,o;for(s=0,r=n.length;s<r;++s)o=n[s][e.axis],ae(o)&&i.push(o);return i}getMaxOverflow(){return!1}getLabelAndValue(e){const n=this._cachedMeta,i=n.iScale,s=n.vScale,r=this.getParsed(e);return{label:i?""+i.getLabelForValue(r[i.axis]):"",value:s?""+s.getLabelForValue(r[s.axis]):""}}_update(e){const n=this._cachedMeta;this.update(e||"default"),n._clip=dx(z(this.options.clip,ux(n.xScale,n.yScale,this.getMaxOverflow())))}update(e){}draw(){const e=this._ctx,n=this.chart,i=this._cachedMeta,s=i.data||[],r=n.chartArea,o=[],l=this._drawStart||0,a=this._drawCount||s.length-l,c=this.options.drawActiveElementsOnTop;let u;for(i.dataset&&i.dataset.draw(e,r,l,a),u=l;u<l+a;++u){const d=s[u];d.hidden||(d.active&&c?o.push(d):d.draw(e,r))}for(u=0;u<o.length;++u)o[u].draw(e,r)}getStyle(e,n){const i=n?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(e||0,i)}getContext(e,n,i){const s=this.getDataset();let r;if(e>=0&&e<this._cachedMeta.data.length){const o=this._cachedMeta.data[e];r=o.$context||(o.$context=yx(this.getContext(),e,o)),r.parsed=this.getParsed(e),r.raw=s.data[e],r.index=r.dataIndex=e}else r=this.$context||(this.$context=mx(this.chart.getContext(),this.index)),r.dataset=s,r.index=r.datasetIndex=this.index;return r.active=!!n,r.mode=i,r}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,n){return this._resolveElementOptions(this.dataElementType.id,n,e)}_resolveElementOptions(e,n="default",i){const s=n==="active",r=this._cachedDataOpts,o=e+"-"+n,l=r[o],a=this.enableOptionSharing&&Ws(i);if(l)return $d(l,a);const c=this.chart.config,u=c.datasetElementScopeKeys(this._type,e),d=s?[`${e}Hover`,"hover",e,""]:[e,""],h=c.getOptionScopes(this.getDataset(),u),f=Object.keys(ue.elements[e]),m=()=>this.getContext(i,s,n),y=c.resolveNamedOptions(h,f,m,d);return y.$shared&&(y.$shared=a,r[o]=Object.freeze($d(y,a))),y}_resolveAnimations(e,n,i){const s=this.chart,r=this._cachedDataOpts,o=`animation-${n}`,l=r[o];if(l)return l;let a;if(s.options.animation!==!1){const u=this.chart.config,d=u.datasetAnimationScopeKeys(this._type,n),h=u.getOptionScopes(this.getDataset(),d);a=u.createResolver(h,this.getContext(e,i,n))}const c=new Tg(s,a&&a.animations);return a&&a._cacheable&&(r[o]=Object.freeze(c)),c}getSharedOptions(e){if(!!e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,n){return!n||Nl(e)||this.chart._animationsDisabled}_getSharedOptions(e,n){const i=this.resolveDataElementOptions(e,n),s=this._sharedOptions,r=this.getSharedOptions(i),o=this.includeOptions(n,r)||r!==s;return this.updateSharedOptions(r,n,i),{sharedOptions:r,includeOptions:o}}updateElement(e,n,i,s){Nl(s)?Object.assign(e,i):this._resolveAnimations(n,s).update(e,i)}updateSharedOptions(e,n,i){e&&!Nl(n)&&this._resolveAnimations(void 0,n).update(e,i)}_setStyle(e,n,i,s){e.active=s;const r=this.getStyle(n,s);this._resolveAnimations(n,i,s).update(e,{options:!s&&this.getSharedOptions(r)||r})}removeHoverStyle(e,n,i){this._setStyle(e,i,"active",!1)}setHoverStyle(e,n,i){this._setStyle(e,i,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const n=this._data,i=this._cachedMeta.data;for(const[l,a,c]of this._syncList)this[l](a,c);this._syncList=[];const s=i.length,r=n.length,o=Math.min(r,s);o&&this.parse(0,o),r>s?this._insertElements(s,r-s,e):r<s&&this._removeElements(r,s-r)}_insertElements(e,n,i=!0){const s=this._cachedMeta,r=s.data,o=e+n;let l;const a=c=>{for(c.length+=n,l=c.length-1;l>=o;l--)c[l]=c[l-n]};for(a(r),l=e;l<o;++l)r[l]=new this.dataElementType;this._parsing&&a(s._parsed),this.parse(e,n),i&&this.updateElements(r,e,n,"reset")}updateElements(e,n,i,s){}_removeElements(e,n){const i=this._cachedMeta;if(this._parsing){const s=i._parsed.splice(e,n);i._stacked&&Ki(i,s)}i.data.splice(e,n)}_sync(e){if(this._parsing)this._syncList.push(e);else{const[n,i,s]=e;this[n](i,s)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){const e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,n){n&&this._sync(["_removeElements",e,n]);const i=arguments.length-2;i&&this._sync(["_insertElements",e,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}M(yt,"defaults",{}),M(yt,"datasetElementType",null),M(yt,"dataElementType",null);function _x(t,e){if(!t._cache.$bar){const n=t.getMatchingVisibleMetas(e);let i=[];for(let s=0,r=n.length;s<r;s++)i=i.concat(n[s].controller.getAllParsedValues(t));t._cache.$bar=cg(i.sort((s,r)=>s-r))}return t._cache.$bar}function xx(t){const e=t.iScale,n=_x(e,t.type);let i=e._length,s,r,o,l;const a=()=>{o===32767||o===-32768||(Ws(l)&&(i=Math.min(i,Math.abs(o-l)||i)),l=o)};for(s=0,r=n.length;s<r;++s)o=e.getPixelForValue(n[s]),a();for(l=void 0,s=0,r=e.ticks.length;s<r;++s)o=e.getPixelForTick(s),a();return i}function kx(t,e,n,i){const s=n.barThickness;let r,o;return V(s)?(r=e.min*n.categoryPercentage,o=n.barPercentage):(r=s*i,o=1),{chunk:r/i,ratio:o,start:e.pixels[t]-r/2}}function wx(t,e,n,i){const s=e.pixels,r=s[t];let o=t>0?s[t-1]:null,l=t<s.length-1?s[t+1]:null;const a=n.categoryPercentage;o===null&&(o=r-(l===null?e.end-e.start:l-r)),l===null&&(l=r+r-o);const c=r-(r-Math.min(o,l))/2*a;return{chunk:Math.abs(l-o)/2*a/i,ratio:n.barPercentage,start:c}}function Sx(t,e,n,i){const s=n.parse(t[0],i),r=n.parse(t[1],i),o=Math.min(s,r),l=Math.max(s,r);let a=o,c=l;Math.abs(o)>Math.abs(l)&&(a=l,c=o),e[n.axis]=c,e._custom={barStart:a,barEnd:c,start:s,end:r,min:o,max:l}}function Og(t,e,n,i){return q(t)?Sx(t,e,n,i):e[n.axis]=n.parse(t,i),e}function Ud(t,e,n,i){const s=t.iScale,r=t.vScale,o=s.getLabels(),l=s===r,a=[];let c,u,d,h;for(c=n,u=n+i;c<u;++c)h=e[c],d={},d[s.axis]=l||s.parse(o[c],c),a.push(Og(h,d,r,c));return a}function Ll(t){return t&&t.barStart!==void 0&&t.barEnd!==void 0}function bx(t,e,n){return t!==0?Pt(t):(e.isHorizontal()?1:-1)*(e.min>=n?1:-1)}function Ex(t){let e,n,i,s,r;return t.horizontal?(e=t.base>t.x,n="left",i="right"):(e=t.base<t.y,n="bottom",i="top"),e?(s="end",r="start"):(s="start",r="end"),{start:n,end:i,reverse:e,top:s,bottom:r}}function Cx(t,e,n,i){let s=e.borderSkipped;const r={};if(!s){t.borderSkipped=r;return}if(s===!0){t.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:l,reverse:a,top:c,bottom:u}=Ex(t);s==="middle"&&n&&(t.enableBorderRadius=!0,(n._top||0)===i?s=c:(n._bottom||0)===i?s=u:(r[Yd(u,o,l,a)]=!0,s=c)),r[Yd(s,o,l,a)]=!0,t.borderSkipped=r}function Yd(t,e,n,i){return i?(t=Mx(t,e,n),t=Xd(t,n,e)):t=Xd(t,e,n),t}function Mx(t,e,n){return t===e?n:t===n?e:t}function Xd(t,e,n){return t==="start"?e:t==="end"?n:t}function Px(t,{inflateAmount:e},n){t.inflateAmount=e==="auto"?n===1?.33:0:e}class Kr extends yt{parsePrimitiveData(e,n,i,s){return Ud(e,n,i,s)}parseArrayData(e,n,i,s){return Ud(e,n,i,s)}parseObjectData(e,n,i,s){const{iScale:r,vScale:o}=e,{xAxisKey:l="x",yAxisKey:a="y"}=this._parsing,c=r.axis==="x"?l:a,u=o.axis==="x"?l:a,d=[];let h,f,m,y;for(h=i,f=i+s;h<f;++h)y=n[h],m={},m[r.axis]=r.parse(En(y,c),h),d.push(Og(En(y,u),m,o,h));return d}updateRangeFromParsed(e,n,i,s){super.updateRangeFromParsed(e,n,i,s);const r=i._custom;r&&n===this._cachedMeta.vScale&&(e.min=Math.min(e.min,r.min),e.max=Math.max(e.max,r.max))}getMaxOverflow(){return 0}getLabelAndValue(e){const n=this._cachedMeta,{iScale:i,vScale:s}=n,r=this.getParsed(e),o=r._custom,l=Ll(o)?"["+o.start+", "+o.end+"]":""+s.getLabelForValue(r[s.axis]);return{label:""+i.getLabelForValue(r[i.axis]),value:l}}initialize(){this.enableOptionSharing=!0,super.initialize();const e=this._cachedMeta;e.stack=this.getDataset().stack}update(e){const n=this._cachedMeta;this.updateElements(n.data,0,n.data.length,e)}updateElements(e,n,i,s){const r=s==="reset",{index:o,_cachedMeta:{vScale:l}}=this,a=l.getBasePixel(),c=l.isHorizontal(),u=this._getRuler(),{sharedOptions:d,includeOptions:h}=this._getSharedOptions(n,s);for(let f=n;f<n+i;f++){const m=this.getParsed(f),y=r||V(m[l.axis])?{base:a,head:a}:this._calculateBarValuePixels(f),x=this._calculateBarIndexPixels(f,u),g=(m._stacks||{})[l.axis],p={horizontal:c,base:y.base,enableBorderRadius:!g||Ll(m._custom)||o===g._top||o===g._bottom,x:c?y.head:x.center,y:c?x.center:y.head,height:c?x.size:Math.abs(y.size),width:c?Math.abs(y.size):x.size};h&&(p.options=d||this.resolveDataElementOptions(f,e[f].active?"active":s));const v=p.options||e[f].options;Cx(p,v,g,o),Px(p,v,u.ratio),this.updateElement(e[f],f,p,s)}}_getStacks(e,n){const{iScale:i}=this._cachedMeta,s=i.getMatchingVisibleMetas(this._type).filter(a=>a.controller.options.grouped),r=i.options.stacked,o=[],l=a=>{const c=a.controller.getParsed(n),u=c&&c[a.vScale.axis];if(V(u)||isNaN(u))return!0};for(const a of s)if(!(n!==void 0&&l(a))&&((r===!1||o.indexOf(a.stack)===-1||r===void 0&&a.stack===void 0)&&o.push(a.stack),a.index===e))break;return o.length||o.push(void 0),o}_getStackCount(e){return this._getStacks(void 0,e).length}_getStackIndex(e,n,i){const s=this._getStacks(e,i),r=n!==void 0?s.indexOf(n):-1;return r===-1?s.length-1:r}_getRuler(){const e=this.options,n=this._cachedMeta,i=n.iScale,s=[];let r,o;for(r=0,o=n.data.length;r<o;++r)s.push(i.getPixelForValue(this.getParsed(r)[i.axis],r));const l=e.barThickness;return{min:l||xx(n),pixels:s,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:e.grouped,ratio:l?1:e.categoryPercentage*e.barPercentage}}_calculateBarValuePixels(e){const{_cachedMeta:{vScale:n,_stacked:i,index:s},options:{base:r,minBarLength:o}}=this,l=r||0,a=this.getParsed(e),c=a._custom,u=Ll(c);let d=a[n.axis],h=0,f=i?this.applyStack(n,a,i):d,m,y;f!==d&&(h=f-d,f=d),u&&(d=c.barStart,f=c.barEnd-c.barStart,d!==0&&Pt(d)!==Pt(c.barEnd)&&(h=0),h+=d);const x=!V(r)&&!u?r:h;let g=n.getPixelForValue(x);if(this.chart.getDataVisibility(e)?m=n.getPixelForValue(h+f):m=g,y=m-g,Math.abs(y)<o){y=bx(y,n,l)*o,d===l&&(g-=y/2);const p=n.getPixelForDecimal(0),v=n.getPixelForDecimal(1),k=Math.min(p,v),w=Math.max(p,v);g=Math.max(Math.min(g,w),k),m=g+y,i&&!u&&(a._stacks[n.axis]._visualValues[s]=n.getValueForPixel(m)-n.getValueForPixel(g))}if(g===n.getPixelForValue(l)){const p=Pt(y)*n.getLineWidthForValue(l)/2;g+=p,y-=p}return{size:y,base:g,head:m,center:m+y/2}}_calculateBarIndexPixels(e,n){const i=n.scale,s=this.options,r=s.skipNull,o=z(s.maxBarThickness,1/0);let l,a;if(n.grouped){const c=r?this._getStackCount(e):n.stackCount,u=s.barThickness==="flex"?wx(e,n,s,c):kx(e,n,s,c),d=this._getStackIndex(this.index,this._cachedMeta.stack,r?e:void 0);l=u.start+u.chunk*d+u.chunk/2,a=Math.min(o,u.chunk*u.ratio)}else l=i.getPixelForValue(this.getParsed(e)[i.axis],e),a=Math.min(o,n.min*n.ratio);return{base:l-a/2,head:l+a/2,center:l,size:a}}draw(){const e=this._cachedMeta,n=e.vScale,i=e.data,s=i.length;let r=0;for(;r<s;++r)this.getParsed(r)[n.axis]!==null&&i[r].draw(this._ctx)}}M(Kr,"id","bar"),M(Kr,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),M(Kr,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class Qr extends yt{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(e,n,i,s){const r=super.parsePrimitiveData(e,n,i,s);for(let o=0;o<r.length;o++)r[o]._custom=this.resolveDataElementOptions(o+i).radius;return r}parseArrayData(e,n,i,s){const r=super.parseArrayData(e,n,i,s);for(let o=0;o<r.length;o++){const l=n[i+o];r[o]._custom=z(l[2],this.resolveDataElementOptions(o+i).radius)}return r}parseObjectData(e,n,i,s){const r=super.parseObjectData(e,n,i,s);for(let o=0;o<r.length;o++){const l=n[i+o];r[o]._custom=z(l&&l.r&&+l.r,this.resolveDataElementOptions(o+i).radius)}return r}getMaxOverflow(){const e=this._cachedMeta.data;let n=0;for(let i=e.length-1;i>=0;--i)n=Math.max(n,e[i].size(this.resolveDataElementOptions(i))/2);return n>0&&n}getLabelAndValue(e){const n=this._cachedMeta,i=this.chart.data.labels||[],{xScale:s,yScale:r}=n,o=this.getParsed(e),l=s.getLabelForValue(o.x),a=r.getLabelForValue(o.y),c=o._custom;return{label:i[e]||"",value:"("+l+", "+a+(c?", "+c:"")+")"}}update(e){const n=this._cachedMeta.data;this.updateElements(n,0,n.length,e)}updateElements(e,n,i,s){const r=s==="reset",{iScale:o,vScale:l}=this._cachedMeta,{sharedOptions:a,includeOptions:c}=this._getSharedOptions(n,s),u=o.axis,d=l.axis;for(let h=n;h<n+i;h++){const f=e[h],m=!r&&this.getParsed(h),y={},x=y[u]=r?o.getPixelForDecimal(.5):o.getPixelForValue(m[u]),g=y[d]=r?l.getBasePixel():l.getPixelForValue(m[d]);y.skip=isNaN(x)||isNaN(g),c&&(y.options=a||this.resolveDataElementOptions(h,f.active?"active":s),r&&(y.options.radius=0)),this.updateElement(f,h,y,s)}}resolveDataElementOptions(e,n){const i=this.getParsed(e);let s=super.resolveDataElementOptions(e,n);s.$shared&&(s=Object.assign({},s,{$shared:!1}));const r=s.radius;return n!=="active"&&(s.radius=0),s.radius+=z(i&&i._custom,r),s}}M(Qr,"id","bubble"),M(Qr,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),M(Qr,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function Tx(t,e,n){let i=1,s=1,r=0,o=0;if(e<ee){const l=t,a=l+e,c=Math.cos(l),u=Math.sin(l),d=Math.cos(a),h=Math.sin(a),f=(v,k,w)=>$s(v,l,a,!0)?1:Math.max(k,k*n,w,w*n),m=(v,k,w)=>$s(v,l,a,!0)?-1:Math.min(k,k*n,w,w*n),y=f(0,c,d),x=f(ce,u,h),g=m(ne,c,d),p=m(ne+ce,u,h);i=(y-g)/2,s=(x-p)/2,r=-(y+g)/2,o=-(x+p)/2}return{ratioX:i,ratioY:s,offsetX:r,offsetY:o}}class Wn extends yt{constructor(e,n){super(e,n),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(e,n){const i=this.getDataset().data,s=this._cachedMeta;if(this._parsing===!1)s._parsed=i;else{let r=a=>+i[a];if(F(i[e])){const{key:a="value"}=this._parsing;r=c=>+En(i[c],a)}let o,l;for(o=e,l=e+n;o<l;++o)s._parsed[o]=r(o)}}_getRotation(){return pt(this.options.rotation-90)}_getCircumference(){return pt(this.options.circumference)}_getRotationExtents(){let e=ee,n=-ee;for(let i=0;i<this.chart.data.datasets.length;++i)if(this.chart.isDatasetVisible(i)&&this.chart.getDatasetMeta(i).type===this._type){const s=this.chart.getDatasetMeta(i).controller,r=s._getRotation(),o=s._getCircumference();e=Math.min(e,r),n=Math.max(n,r+o)}return{rotation:e,circumference:n-e}}update(e){const n=this.chart,{chartArea:i}=n,s=this._cachedMeta,r=s.data,o=this.getMaxBorderWidth()+this.getMaxOffset(r)+this.options.spacing,l=Math.max((Math.min(i.width,i.height)-o)/2,0),a=Math.min(Wv(this.options.cutout,l),1),c=this._getRingWeight(this.index),{circumference:u,rotation:d}=this._getRotationExtents(),{ratioX:h,ratioY:f,offsetX:m,offsetY:y}=Tx(d,u,a),x=(i.width-o)/h,g=(i.height-o)/f,p=Math.max(Math.min(x,g)/2,0),v=sg(this.options.radius,p),k=Math.max(v*a,0),w=(v-k)/this._getVisibleDatasetWeightTotal();this.offsetX=m*v,this.offsetY=y*v,s.total=this.calculateTotal(),this.outerRadius=v-w*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-w*c,0),this.updateElements(r,0,r.length,e)}_circumference(e,n){const i=this.options,s=this._cachedMeta,r=this._getCircumference();return n&&i.animation.animateRotate||!this.chart.getDataVisibility(e)||s._parsed[e]===null||s.data[e].hidden?0:this.calculateCircumference(s._parsed[e]*r/ee)}updateElements(e,n,i,s){const r=s==="reset",o=this.chart,l=o.chartArea,c=o.options.animation,u=(l.left+l.right)/2,d=(l.top+l.bottom)/2,h=r&&c.animateScale,f=h?0:this.innerRadius,m=h?0:this.outerRadius,{sharedOptions:y,includeOptions:x}=this._getSharedOptions(n,s);let g=this._getRotation(),p;for(p=0;p<n;++p)g+=this._circumference(p,r);for(p=n;p<n+i;++p){const v=this._circumference(p,r),k=e[p],w={x:u+this.offsetX,y:d+this.offsetY,startAngle:g,endAngle:g+v,circumference:v,outerRadius:m,innerRadius:f};x&&(w.options=y||this.resolveDataElementOptions(p,k.active?"active":s)),g+=v,this.updateElement(k,p,w,s)}}calculateTotal(){const e=this._cachedMeta,n=e.data;let i=0,s;for(s=0;s<n.length;s++){const r=e._parsed[s];r!==null&&!isNaN(r)&&this.chart.getDataVisibility(s)&&!n[s].hidden&&(i+=Math.abs(r))}return i}calculateCircumference(e){const n=this._cachedMeta.total;return n>0&&!isNaN(e)?ee*(Math.abs(e)/n):0}getLabelAndValue(e){const n=this._cachedMeta,i=this.chart,s=i.data.labels||[],r=nr(n._parsed[e],i.options.locale);return{label:s[e]||"",value:r}}getMaxBorderWidth(e){let n=0;const i=this.chart;let s,r,o,l,a;if(!e){for(s=0,r=i.data.datasets.length;s<r;++s)if(i.isDatasetVisible(s)){o=i.getDatasetMeta(s),e=o.data,l=o.controller;break}}if(!e)return 0;for(s=0,r=e.length;s<r;++s)a=l.resolveDataElementOptions(s),a.borderAlign!=="inner"&&(n=Math.max(n,a.borderWidth||0,a.hoverBorderWidth||0));return n}getMaxOffset(e){let n=0;for(let i=0,s=e.length;i<s;++i){const r=this.resolveDataElementOptions(i);n=Math.max(n,r.offset||0,r.hoverOffset||0)}return n}_getRingWeightOffset(e){let n=0;for(let i=0;i<e;++i)this.chart.isDatasetVisible(i)&&(n+=this._getRingWeight(i));return n}_getRingWeight(e){return Math.max(z(this.chart.data.datasets[e].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}M(Wn,"id","doughnut"),M(Wn,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),M(Wn,"descriptors",{_scriptable:e=>e!=="spacing",_indexable:e=>e!=="spacing"&&!e.startsWith("borderDash")&&!e.startsWith("hoverBorderDash")}),M(Wn,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){const n=e.data;if(n.labels.length&&n.datasets.length){const{labels:{pointStyle:i,color:s}}=e.legend.options;return n.labels.map((r,o)=>{const a=e.getDatasetMeta(0).controller.getStyle(o);return{text:r,fillStyle:a.backgroundColor,strokeStyle:a.borderColor,fontColor:s,lineWidth:a.borderWidth,pointStyle:i,hidden:!e.getDataVisibility(o),index:o}})}return[]}},onClick(e,n,i){i.chart.toggleDataVisibility(n.index),i.chart.update()}}}});class Gr extends yt{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){const n=this._cachedMeta,{dataset:i,data:s=[],_dataset:r}=n,o=this.chart._animationsDisabled;let{start:l,count:a}=hg(n,s,o);this._drawStart=l,this._drawCount=a,fg(n)&&(l=0,a=s.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!r._decimated,i.points=s;const c=this.resolveDatasetElementOptions(e);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(i,void 0,{animated:!o,options:c},e),this.updateElements(s,l,a,e)}updateElements(e,n,i,s){const r=s==="reset",{iScale:o,vScale:l,_stacked:a,_dataset:c}=this._cachedMeta,{sharedOptions:u,includeOptions:d}=this._getSharedOptions(n,s),h=o.axis,f=l.axis,{spanGaps:m,segment:y}=this.options,x=Ri(m)?m:Number.POSITIVE_INFINITY,g=this.chart._animationsDisabled||r||s==="none",p=n+i,v=e.length;let k=n>0&&this.getParsed(n-1);for(let w=0;w<v;++w){const S=e[w],b=g?S:{};if(w<n||w>=p){b.skip=!0;continue}const E=this.getParsed(w),D=V(E[f]),T=b[h]=o.getPixelForValue(E[h],w),R=b[f]=r||D?l.getBasePixel():l.getPixelForValue(a?this.applyStack(l,E,a):E[f],w);b.skip=isNaN(T)||isNaN(R)||D,b.stop=w>0&&Math.abs(E[h]-k[h])>x,y&&(b.parsed=E,b.raw=c.data[w]),d&&(b.options=u||this.resolveDataElementOptions(w,S.active?"active":s)),g||this.updateElement(S,w,b,s),k=E}}getMaxOverflow(){const e=this._cachedMeta,n=e.dataset,i=n.options&&n.options.borderWidth||0,s=e.data||[];if(!s.length)return i;const r=s[0].size(this.resolveDataElementOptions(0)),o=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(i,r,o)/2}draw(){const e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}}M(Gr,"id","line"),M(Gr,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),M(Gr,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class ws extends yt{constructor(e,n){super(e,n),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(e){const n=this._cachedMeta,i=this.chart,s=i.data.labels||[],r=nr(n._parsed[e].r,i.options.locale);return{label:s[e]||"",value:r}}parseObjectData(e,n,i,s){return kg.bind(this)(e,n,i,s)}update(e){const n=this._cachedMeta.data;this._updateRadius(),this.updateElements(n,0,n.length,e)}getMinMax(){const e=this._cachedMeta,n={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return e.data.forEach((i,s)=>{const r=this.getParsed(s).r;!isNaN(r)&&this.chart.getDataVisibility(s)&&(r<n.min&&(n.min=r),r>n.max&&(n.max=r))}),n}_updateRadius(){const e=this.chart,n=e.chartArea,i=e.options,s=Math.min(n.right-n.left,n.bottom-n.top),r=Math.max(s/2,0),o=Math.max(i.cutoutPercentage?r/100*i.cutoutPercentage:1,0),l=(r-o)/e.getVisibleDatasetCount();this.outerRadius=r-l*this.index,this.innerRadius=this.outerRadius-l}updateElements(e,n,i,s){const r=s==="reset",o=this.chart,a=o.options.animation,c=this._cachedMeta.rScale,u=c.xCenter,d=c.yCenter,h=c.getIndexAngle(0)-.5*ne;let f=h,m;const y=360/this.countVisibleElements();for(m=0;m<n;++m)f+=this._computeAngle(m,s,y);for(m=n;m<n+i;m++){const x=e[m];let g=f,p=f+this._computeAngle(m,s,y),v=o.getDataVisibility(m)?c.getDistanceFromCenterForValue(this.getParsed(m).r):0;f=p,r&&(a.animateScale&&(v=0),a.animateRotate&&(g=p=h));const k={x:u,y:d,innerRadius:0,outerRadius:v,startAngle:g,endAngle:p,options:this.resolveDataElementOptions(m,x.active?"active":s)};this.updateElement(x,m,k,s)}}countVisibleElements(){const e=this._cachedMeta;let n=0;return e.data.forEach((i,s)=>{!isNaN(this.getParsed(s).r)&&this.chart.getDataVisibility(s)&&n++}),n}_computeAngle(e,n,i){return this.chart.getDataVisibility(e)?pt(this.resolveDataElementOptions(e,n).angle||i):0}}M(ws,"id","polarArea"),M(ws,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),M(ws,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){const n=e.data;if(n.labels.length&&n.datasets.length){const{labels:{pointStyle:i,color:s}}=e.legend.options;return n.labels.map((r,o)=>{const a=e.getDatasetMeta(0).controller.getStyle(o);return{text:r,fillStyle:a.backgroundColor,strokeStyle:a.borderColor,fontColor:s,lineWidth:a.borderWidth,pointStyle:i,hidden:!e.getDataVisibility(o),index:o}})}return[]}},onClick(e,n,i){i.chart.toggleDataVisibility(n.index),i.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class Fa extends Wn{}M(Fa,"id","pie"),M(Fa,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class Zr extends yt{getLabelAndValue(e){const n=this._cachedMeta.vScale,i=this.getParsed(e);return{label:n.getLabels()[e],value:""+n.getLabelForValue(i[n.axis])}}parseObjectData(e,n,i,s){return kg.bind(this)(e,n,i,s)}update(e){const n=this._cachedMeta,i=n.dataset,s=n.data||[],r=n.iScale.getLabels();if(i.points=s,e!=="resize"){const o=this.resolveDatasetElementOptions(e);this.options.showLine||(o.borderWidth=0);const l={_loop:!0,_fullLoop:r.length===s.length,options:o};this.updateElement(i,void 0,l,e)}this.updateElements(s,0,s.length,e)}updateElements(e,n,i,s){const r=this._cachedMeta.rScale,o=s==="reset";for(let l=n;l<n+i;l++){const a=e[l],c=this.resolveDataElementOptions(l,a.active?"active":s),u=r.getPointPositionForValue(l,this.getParsed(l).r),d=o?r.xCenter:u.x,h=o?r.yCenter:u.y,f={x:d,y:h,angle:u.angle,skip:isNaN(d)||isNaN(h),options:c};this.updateElement(a,l,f,s)}}}M(Zr,"id","radar"),M(Zr,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),M(Zr,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class qr extends yt{getLabelAndValue(e){const n=this._cachedMeta,i=this.chart.data.labels||[],{xScale:s,yScale:r}=n,o=this.getParsed(e),l=s.getLabelForValue(o.x),a=r.getLabelForValue(o.y);return{label:i[e]||"",value:"("+l+", "+a+")"}}update(e){const n=this._cachedMeta,{data:i=[]}=n,s=this.chart._animationsDisabled;let{start:r,count:o}=hg(n,i,s);if(this._drawStart=r,this._drawCount=o,fg(n)&&(r=0,o=i.length),this.options.showLine){const{dataset:l,_dataset:a}=n;l._chart=this.chart,l._datasetIndex=this.index,l._decimated=!!a._decimated,l.points=i;const c=this.resolveDatasetElementOptions(e);c.segment=this.options.segment,this.updateElement(l,void 0,{animated:!s,options:c},e)}this.updateElements(i,r,o,e)}addElements(){const{showLine:e}=this.options;!this.datasetElementType&&e&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(e,n,i,s){const r=s==="reset",{iScale:o,vScale:l,_stacked:a,_dataset:c}=this._cachedMeta,u=this.resolveDataElementOptions(n,s),d=this.getSharedOptions(u),h=this.includeOptions(s,d),f=o.axis,m=l.axis,{spanGaps:y,segment:x}=this.options,g=Ri(y)?y:Number.POSITIVE_INFINITY,p=this.chart._animationsDisabled||r||s==="none";let v=n>0&&this.getParsed(n-1);for(let k=n;k<n+i;++k){const w=e[k],S=this.getParsed(k),b=p?w:{},E=V(S[m]),D=b[f]=o.getPixelForValue(S[f],k),T=b[m]=r||E?l.getBasePixel():l.getPixelForValue(a?this.applyStack(l,S,a):S[m],k);b.skip=isNaN(D)||isNaN(T)||E,b.stop=k>0&&Math.abs(S[f]-v[f])>g,x&&(b.parsed=S,b.raw=c.data[k]),h&&(b.options=d||this.resolveDataElementOptions(k,w.active?"active":s)),p||this.updateElement(w,k,b,s),v=S}this.updateSharedOptions(d,s,u)}getMaxOverflow(){const e=this._cachedMeta,n=e.data||[];if(!this.options.showLine){let l=0;for(let a=n.length-1;a>=0;--a)l=Math.max(l,n[a].size(this.resolveDataElementOptions(a))/2);return l>0&&l}const i=e.dataset,s=i.options&&i.options.borderWidth||0;if(!n.length)return s;const r=n[0].size(this.resolveDataElementOptions(0)),o=n[n.length-1].size(this.resolveDataElementOptions(n.length-1));return Math.max(s,r,o)/2}}M(qr,"id","scatter"),M(qr,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),M(qr,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var Dx=Object.freeze({__proto__:null,BarController:Kr,BubbleController:Qr,DoughnutController:Wn,LineController:Gr,PieController:Fa,PolarAreaController:ws,RadarController:Zr,ScatterController:qr});function Ln(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class iu{constructor(e){M(this,"options");this.options=e||{}}static override(e){Object.assign(iu.prototype,e)}init(){}formats(){return Ln()}parse(){return Ln()}format(){return Ln()}add(){return Ln()}diff(){return Ln()}startOf(){return Ln()}endOf(){return Ln()}}var Ox={_date:iu};function Nx(t,e,n,i){const{controller:s,data:r,_sorted:o}=t,l=s._cachedMeta.iScale;if(l&&e===l.axis&&e!=="r"&&o&&r.length){const a=l._reversePixels?t_:Wt;if(i){if(s._sharedOptions){const c=r[0],u=typeof c.getRange=="function"&&c.getRange(e);if(u){const d=a(r,e,n-u),h=a(r,e,n+u);return{lo:d.lo,hi:h.hi}}}}else return a(r,e,n)}return{lo:0,hi:r.length-1}}function ir(t,e,n,i,s){const r=t.getSortedVisibleDatasetMetas(),o=n[e];for(let l=0,a=r.length;l<a;++l){const{index:c,data:u}=r[l],{lo:d,hi:h}=Nx(r[l],e,o,s);for(let f=d;f<=h;++f){const m=u[f];m.skip||i(m,c,f)}}}function Lx(t){const e=t.indexOf("x")!==-1,n=t.indexOf("y")!==-1;return function(i,s){const r=e?Math.abs(i.x-s.x):0,o=n?Math.abs(i.y-s.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function Rl(t,e,n,i,s){const r=[];return!s&&!t.isPointInArea(e)||ir(t,n,e,function(l,a,c){!s&&!$t(l,t.chartArea,0)||l.inRange(e.x,e.y,i)&&r.push({element:l,datasetIndex:a,index:c})},!0),r}function Rx(t,e,n,i){let s=[];function r(o,l,a){const{startAngle:c,endAngle:u}=o.getProps(["startAngle","endAngle"],i),{angle:d}=lg(o,{x:e.x,y:e.y});$s(d,c,u)&&s.push({element:o,datasetIndex:l,index:a})}return ir(t,n,e,r),s}function Ax(t,e,n,i,s,r){let o=[];const l=Lx(n);let a=Number.POSITIVE_INFINITY;function c(u,d,h){const f=u.inRange(e.x,e.y,s);if(i&&!f)return;const m=u.getCenterPoint(s);if(!(!!r||t.isPointInArea(m))&&!f)return;const x=l(e,m);x<a?(o=[{element:u,datasetIndex:d,index:h}],a=x):x===a&&o.push({element:u,datasetIndex:d,index:h})}return ir(t,n,e,c),o}function Al(t,e,n,i,s,r){return!r&&!t.isPointInArea(e)?[]:n==="r"&&!i?Rx(t,e,n,s):Ax(t,e,n,i,s,r)}function Kd(t,e,n,i,s){const r=[],o=n==="x"?"inXRange":"inYRange";let l=!1;return ir(t,n,e,(a,c,u)=>{a[o](e[n],s)&&(r.push({element:a,datasetIndex:c,index:u}),l=l||a.inRange(e.x,e.y,s))}),i&&!l?[]:r}var zx={evaluateInteractionItems:ir,modes:{index(t,e,n,i){const s=Fn(e,t),r=n.axis||"x",o=n.includeInvisible||!1,l=n.intersect?Rl(t,s,r,i,o):Al(t,s,r,!1,i,o),a=[];return l.length?(t.getSortedVisibleDatasetMetas().forEach(c=>{const u=l[0].index,d=c.data[u];d&&!d.skip&&a.push({element:d,datasetIndex:c.index,index:u})}),a):[]},dataset(t,e,n,i){const s=Fn(e,t),r=n.axis||"xy",o=n.includeInvisible||!1;let l=n.intersect?Rl(t,s,r,i,o):Al(t,s,r,!1,i,o);if(l.length>0){const a=l[0].datasetIndex,c=t.getDatasetMeta(a).data;l=[];for(let u=0;u<c.length;++u)l.push({element:c[u],datasetIndex:a,index:u})}return l},point(t,e,n,i){const s=Fn(e,t),r=n.axis||"xy",o=n.includeInvisible||!1;return Rl(t,s,r,i,o)},nearest(t,e,n,i){const s=Fn(e,t),r=n.axis||"xy",o=n.includeInvisible||!1;return Al(t,s,r,n.intersect,i,o)},x(t,e,n,i){const s=Fn(e,t);return Kd(t,s,"x",n.intersect,i)},y(t,e,n,i){const s=Fn(e,t);return Kd(t,s,"y",n.intersect,i)}}};const Ng=["left","top","right","bottom"];function Qi(t,e){return t.filter(n=>n.pos===e)}function Qd(t,e){return t.filter(n=>Ng.indexOf(n.pos)===-1&&n.box.axis===e)}function Gi(t,e){return t.sort((n,i)=>{const s=e?i:n,r=e?n:i;return s.weight===r.weight?s.index-r.index:s.weight-r.weight})}function Ix(t){const e=[];let n,i,s,r,o,l;for(n=0,i=(t||[]).length;n<i;++n)s=t[n],{position:r,options:{stack:o,stackWeight:l=1}}=s,e.push({index:n,box:s,pos:r,horizontal:s.isHorizontal(),weight:s.weight,stack:o&&r+o,stackWeight:l});return e}function Fx(t){const e={};for(const n of t){const{stack:i,pos:s,stackWeight:r}=n;if(!i||!Ng.includes(s))continue;const o=e[i]||(e[i]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return e}function jx(t,e){const n=Fx(t),{vBoxMaxWidth:i,hBoxMaxHeight:s}=e;let r,o,l;for(r=0,o=t.length;r<o;++r){l=t[r];const{fullSize:a}=l.box,c=n[l.stack],u=c&&l.stackWeight/c.weight;l.horizontal?(l.width=u?u*i:a&&e.availableWidth,l.height=s):(l.width=i,l.height=u?u*s:a&&e.availableHeight)}return n}function Bx(t){const e=Ix(t),n=Gi(e.filter(c=>c.box.fullSize),!0),i=Gi(Qi(e,"left"),!0),s=Gi(Qi(e,"right")),r=Gi(Qi(e,"top"),!0),o=Gi(Qi(e,"bottom")),l=Qd(e,"x"),a=Qd(e,"y");return{fullSize:n,leftAndTop:i.concat(r),rightAndBottom:s.concat(a).concat(o).concat(l),chartArea:Qi(e,"chartArea"),vertical:i.concat(s).concat(a),horizontal:r.concat(o).concat(l)}}function Gd(t,e,n,i){return Math.max(t[n],e[n])+Math.max(t[i],e[i])}function Lg(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function Vx(t,e,n,i){const{pos:s,box:r}=n,o=t.maxPadding;if(!F(s)){n.size&&(t[s]-=n.size);const d=i[n.stack]||{size:0,count:1};d.size=Math.max(d.size,n.horizontal?r.height:r.width),n.size=d.size/d.count,t[s]+=n.size}r.getPadding&&Lg(o,r.getPadding());const l=Math.max(0,e.outerWidth-Gd(o,t,"left","right")),a=Math.max(0,e.outerHeight-Gd(o,t,"top","bottom")),c=l!==t.w,u=a!==t.h;return t.w=l,t.h=a,n.horizontal?{same:c,other:u}:{same:u,other:c}}function Hx(t){const e=t.maxPadding;function n(i){const s=Math.max(e[i]-t[i],0);return t[i]+=s,s}t.y+=n("top"),t.x+=n("left"),n("right"),n("bottom")}function Wx(t,e){const n=e.maxPadding;function i(s){const r={left:0,top:0,right:0,bottom:0};return s.forEach(o=>{r[o]=Math.max(e[o],n[o])}),r}return i(t?["left","right"]:["top","bottom"])}function rs(t,e,n,i){const s=[];let r,o,l,a,c,u;for(r=0,o=t.length,c=0;r<o;++r){l=t[r],a=l.box,a.update(l.width||e.w,l.height||e.h,Wx(l.horizontal,e));const{same:d,other:h}=Vx(e,n,l,i);c|=d&&s.length,u=u||h,a.fullSize||s.push(l)}return c&&rs(s,e,n,i)||u}function Tr(t,e,n,i,s){t.top=n,t.left=e,t.right=e+i,t.bottom=n+s,t.width=i,t.height=s}function Zd(t,e,n,i){const s=n.padding;let{x:r,y:o}=e;for(const l of t){const a=l.box,c=i[l.stack]||{count:1,placed:0,weight:1},u=l.stackWeight/c.weight||1;if(l.horizontal){const d=e.w*u,h=c.size||a.height;Ws(c.start)&&(o=c.start),a.fullSize?Tr(a,s.left,o,n.outerWidth-s.right-s.left,h):Tr(a,e.left+c.placed,o,d,h),c.start=o,c.placed+=d,o=a.bottom}else{const d=e.h*u,h=c.size||a.width;Ws(c.start)&&(r=c.start),a.fullSize?Tr(a,r,s.top,h,n.outerHeight-s.bottom-s.top):Tr(a,r,e.top+c.placed,h,d),c.start=r,c.placed+=d,r=a.right}}e.x=r,e.y=o}var Pe={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(n){e.draw(n)}}]},t.boxes.push(e)},removeBox(t,e){const n=t.boxes?t.boxes.indexOf(e):-1;n!==-1&&t.boxes.splice(n,1)},configure(t,e,n){e.fullSize=n.fullSize,e.position=n.position,e.weight=n.weight},update(t,e,n,i){if(!t)return;const s=De(t.options.layout.padding),r=Math.max(e-s.width,0),o=Math.max(n-s.height,0),l=Bx(t.boxes),a=l.vertical,c=l.horizontal;W(t.boxes,y=>{typeof y.beforeLayout=="function"&&y.beforeLayout()});const u=a.reduce((y,x)=>x.box.options&&x.box.options.display===!1?y:y+1,0)||1,d=Object.freeze({outerWidth:e,outerHeight:n,padding:s,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/u,hBoxMaxHeight:o/2}),h=Object.assign({},s);Lg(h,De(i));const f=Object.assign({maxPadding:h,w:r,h:o,x:s.left,y:s.top},s),m=jx(a.concat(c),d);rs(l.fullSize,f,d,m),rs(a,f,d,m),rs(c,f,d,m)&&rs(a,f,d,m),Hx(f),Zd(l.leftAndTop,f,d,m),f.x+=f.w,f.y+=f.h,Zd(l.rightAndBottom,f,d,m),t.chartArea={left:f.left,top:f.top,right:f.left+f.w,bottom:f.top+f.h,height:f.h,width:f.w},W(l.chartArea,y=>{const x=y.box;Object.assign(x,t.chartArea),x.update(f.w,f.h,{left:0,top:0,right:0,bottom:0})})}};class Rg{acquireContext(e,n){}releaseContext(e){return!1}addEventListener(e,n,i){}removeEventListener(e,n,i){}getDevicePixelRatio(){return 1}getMaximumSize(e,n,i,s){return n=Math.max(0,n||e.width),i=i||e.height,{width:n,height:Math.max(0,s?Math.floor(n/s):i)}}isAttached(e){return!0}updateConfig(e){}}class $x extends Rg{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}}const Jr="$chartjs",Ux={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},qd=t=>t===null||t==="";function Yx(t,e){const n=t.style,i=t.getAttribute("height"),s=t.getAttribute("width");if(t[Jr]={initial:{height:i,width:s,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",qd(s)){const r=Rd(t,"width");r!==void 0&&(t.width=r)}if(qd(i))if(t.style.height==="")t.height=t.width/(e||2);else{const r=Rd(t,"height");r!==void 0&&(t.height=r)}return t}const Ag=K_?{passive:!0}:!1;function Xx(t,e,n){t.addEventListener(e,n,Ag)}function Kx(t,e,n){t.canvas.removeEventListener(e,n,Ag)}function Qx(t,e){const n=Ux[t.type]||t.type,{x:i,y:s}=Fn(t,e);return{type:n,chart:e,native:t,x:i!==void 0?i:null,y:s!==void 0?s:null}}function Lo(t,e){for(const n of t)if(n===e||n.contains(e))return!0}function Gx(t,e,n){const i=t.canvas,s=new MutationObserver(r=>{let o=!1;for(const l of r)o=o||Lo(l.addedNodes,i),o=o&&!Lo(l.removedNodes,i);o&&n()});return s.observe(document,{childList:!0,subtree:!0}),s}function Zx(t,e,n){const i=t.canvas,s=new MutationObserver(r=>{let o=!1;for(const l of r)o=o||Lo(l.removedNodes,i),o=o&&!Lo(l.addedNodes,i);o&&n()});return s.observe(document,{childList:!0,subtree:!0}),s}const Ys=new Map;let Jd=0;function zg(){const t=window.devicePixelRatio;t!==Jd&&(Jd=t,Ys.forEach((e,n)=>{n.currentDevicePixelRatio!==t&&e()}))}function qx(t,e){Ys.size||window.addEventListener("resize",zg),Ys.set(t,e)}function Jx(t){Ys.delete(t),Ys.size||window.removeEventListener("resize",zg)}function e1(t,e,n){const i=t.canvas,s=i&&nu(i);if(!s)return;const r=dg((l,a)=>{const c=s.clientWidth;n(l,a),c<s.clientWidth&&n()},window),o=new ResizeObserver(l=>{const a=l[0],c=a.contentRect.width,u=a.contentRect.height;c===0&&u===0||r(c,u)});return o.observe(s),qx(t,r),o}function zl(t,e,n){n&&n.disconnect(),e==="resize"&&Jx(t)}function t1(t,e,n){const i=t.canvas,s=dg(r=>{t.ctx!==null&&n(Qx(r,t))},t);return Xx(i,e,s),s}class n1 extends Rg{acquireContext(e,n){const i=e&&e.getContext&&e.getContext("2d");return i&&i.canvas===e?(Yx(e,n),i):null}releaseContext(e){const n=e.canvas;if(!n[Jr])return!1;const i=n[Jr].initial;["height","width"].forEach(r=>{const o=i[r];V(o)?n.removeAttribute(r):n.setAttribute(r,o)});const s=i.style||{};return Object.keys(s).forEach(r=>{n.style[r]=s[r]}),n.width=n.width,delete n[Jr],!0}addEventListener(e,n,i){this.removeEventListener(e,n);const s=e.$proxies||(e.$proxies={}),o={attach:Gx,detach:Zx,resize:e1}[n]||t1;s[n]=o(e,n,i)}removeEventListener(e,n){const i=e.$proxies||(e.$proxies={}),s=i[n];if(!s)return;({attach:zl,detach:zl,resize:zl}[n]||Kx)(e,n,s),i[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,n,i,s){return X_(e,n,i,s)}isAttached(e){const n=nu(e);return!!(n&&n.isConnected)}}function i1(t){return!Sg()||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas?$x:n1}class _t{constructor(){M(this,"x");M(this,"y");M(this,"active",!1);M(this,"options");M(this,"$animations")}tooltipPosition(e){const{x:n,y:i}=this.getProps(["x","y"],e);return{x:n,y:i}}hasValue(){return Ri(this.x)&&Ri(this.y)}getProps(e,n){const i=this.$animations;if(!n||!i)return this;const s={};return e.forEach(r=>{s[r]=i[r]&&i[r].active()?i[r]._to:this[r]}),s}}M(_t,"defaults",{}),M(_t,"defaultRoutes");function s1(t,e){const n=t.options.ticks,i=r1(t),s=Math.min(n.maxTicksLimit||i,i),r=n.major.enabled?l1(e):[],o=r.length,l=r[0],a=r[o-1],c=[];if(o>s)return a1(e,c,r,o/s),c;const u=o1(r,e,s);if(o>0){let d,h;const f=o>1?Math.round((a-l)/(o-1)):null;for(Dr(e,c,u,V(f)?0:l-f,l),d=0,h=o-1;d<h;d++)Dr(e,c,u,r[d],r[d+1]);return Dr(e,c,u,a,V(f)?e.length:a+f),c}return Dr(e,c,u),c}function r1(t){const e=t.options.offset,n=t._tickSize(),i=t._length/n+(e?0:1),s=t._maxLength/n;return Math.floor(Math.min(i,s))}function o1(t,e,n){const i=c1(t),s=e.length/n;if(!i)return Math.max(s,1);const r=Zv(i);for(let o=0,l=r.length-1;o<l;o++){const a=r[o];if(a>s)return a}return Math.max(s,1)}function l1(t){const e=[];let n,i;for(n=0,i=t.length;n<i;n++)t[n].major&&e.push(n);return e}function a1(t,e,n,i){let s=0,r=n[0],o;for(i=Math.ceil(i),o=0;o<t.length;o++)o===r&&(e.push(t[o]),s++,r=n[s*i])}function Dr(t,e,n,i,s){const r=z(i,0),o=Math.min(z(s,t.length),t.length);let l=0,a,c,u;for(n=Math.ceil(n),s&&(a=s-i,n=a/Math.floor(a/n)),u=r;u<0;)l++,u=Math.round(r+l*n);for(c=Math.max(r,0);c<o;c++)c===u&&(e.push(t[c]),l++,u=Math.round(r+l*n))}function c1(t){const e=t.length;let n,i;if(e<2)return!1;for(i=t[0],n=1;n<e;++n)if(t[n]-t[n-1]!==i)return!1;return i}const u1=t=>t==="left"?"right":t==="right"?"left":t,eh=(t,e,n)=>e==="top"||e==="left"?t[e]+n:t[e]-n,th=(t,e)=>Math.min(e||t,t);function nh(t,e){const n=[],i=t.length/e,s=t.length;let r=0;for(;r<s;r+=i)n.push(t[Math.floor(r)]);return n}function d1(t,e,n){const i=t.ticks.length,s=Math.min(e,i-1),r=t._startPixel,o=t._endPixel,l=1e-6;let a=t.getPixelForTick(s),c;if(!(n&&(i===1?c=Math.max(a-r,o-a):e===0?c=(t.getPixelForTick(1)-a)/2:c=(a-t.getPixelForTick(s-1))/2,a+=s<e?c:-c,a<r-l||a>o+l)))return a}function h1(t,e){W(t,n=>{const i=n.gc,s=i.length/2;let r;if(s>e){for(r=0;r<s;++r)delete n.data[i[r]];i.splice(0,s)}})}function Zi(t){return t.drawTicks?t.tickLength:0}function ih(t,e){if(!t.display)return 0;const n=ge(t.font,e),i=De(t.padding);return(q(t.text)?t.text.length:1)*n.lineHeight+i.height}function f1(t,e){return Dn(t,{scale:e,type:"scale"})}function p1(t,e,n){return Dn(t,{tick:n,index:e,type:"tick"})}function g1(t,e,n){let i=Gc(t);return(n&&e!=="right"||!n&&e==="right")&&(i=u1(i)),i}function m1(t,e,n,i){const{top:s,left:r,bottom:o,right:l,chart:a}=t,{chartArea:c,scales:u}=a;let d=0,h,f,m;const y=o-s,x=l-r;if(t.isHorizontal()){if(f=Ce(i,r,l),F(n)){const g=Object.keys(n)[0],p=n[g];m=u[g].getPixelForValue(p)+y-e}else n==="center"?m=(c.bottom+c.top)/2+y-e:m=eh(t,n,e);h=l-r}else{if(F(n)){const g=Object.keys(n)[0],p=n[g];f=u[g].getPixelForValue(p)-x+e}else n==="center"?f=(c.left+c.right)/2-x+e:f=eh(t,n,e);m=Ce(i,o,s),d=n==="left"?-ce:ce}return{titleX:f,titleY:m,maxWidth:h,rotation:d}}class ii extends _t{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,n){return e}getUserBounds(){let{_userMin:e,_userMax:n,_suggestedMin:i,_suggestedMax:s}=this;return e=Ye(e,Number.POSITIVE_INFINITY),n=Ye(n,Number.NEGATIVE_INFINITY),i=Ye(i,Number.POSITIVE_INFINITY),s=Ye(s,Number.NEGATIVE_INFINITY),{min:Ye(e,i),max:Ye(n,s),minDefined:ae(e),maxDefined:ae(n)}}getMinMax(e){let{min:n,max:i,minDefined:s,maxDefined:r}=this.getUserBounds(),o;if(s&&r)return{min:n,max:i};const l=this.getMatchingVisibleMetas();for(let a=0,c=l.length;a<c;++a)o=l[a].controller.getMinMax(this,e),s||(n=Math.min(n,o.min)),r||(i=Math.max(i,o.max));return n=r&&n>i?i:n,i=s&&n>i?n:i,{min:Ye(n,Ye(i,n)),max:Ye(i,Ye(n,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){X(this.options.beforeUpdate,[this])}update(e,n,i){const{beginAtZero:s,grace:r,ticks:o}=this.options,l=o.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=n,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=E_(this,r,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const a=l<this.ticks.length;this._convertTicksToLabels(a?nh(this.ticks,l):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=s1(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),a&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,n,i;this.isHorizontal()?(n=this.left,i=this.right):(n=this.top,i=this.bottom,e=!e),this._startPixel=n,this._endPixel=i,this._reversePixels=e,this._length=i-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){X(this.options.afterUpdate,[this])}beforeSetDimensions(){X(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){X(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),X(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){X(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const n=this.options.ticks;let i,s,r;for(i=0,s=e.length;i<s;i++)r=e[i],r.label=X(n.callback,[r.value,i,e],this)}afterTickToLabelConversion(){X(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){X(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this.options,n=e.ticks,i=th(this.ticks.length,e.ticks.maxTicksLimit),s=n.minRotation||0,r=n.maxRotation;let o=s,l,a,c;if(!this._isVisible()||!n.display||s>=r||i<=1||!this.isHorizontal()){this.labelRotation=s;return}const u=this._getLabelSizes(),d=u.widest.width,h=u.highest.height,f=ve(this.chart.width-d,0,this.maxWidth);l=e.offset?this.maxWidth/i:f/(i-1),d+6>l&&(l=f/(i-(e.offset?.5:1)),a=this.maxHeight-Zi(e.grid)-n.padding-ih(e.title,this.chart.options.font),c=Math.sqrt(d*d+h*h),o=Kc(Math.min(Math.asin(ve((u.highest.height+6)/l,-1,1)),Math.asin(ve(a/c,-1,1))-Math.asin(ve(h/c,-1,1)))),o=Math.max(s,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){X(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){X(this.options.beforeFit,[this])}fit(){const e={width:0,height:0},{chart:n,options:{ticks:i,title:s,grid:r}}=this,o=this._isVisible(),l=this.isHorizontal();if(o){const a=ih(s,n.options.font);if(l?(e.width=this.maxWidth,e.height=Zi(r)+a):(e.height=this.maxHeight,e.width=Zi(r)+a),i.display&&this.ticks.length){const{first:c,last:u,widest:d,highest:h}=this._getLabelSizes(),f=i.padding*2,m=pt(this.labelRotation),y=Math.cos(m),x=Math.sin(m);if(l){const g=i.mirror?0:x*d.width+y*h.height;e.height=Math.min(this.maxHeight,e.height+g+f)}else{const g=i.mirror?0:y*d.width+x*h.height;e.width=Math.min(this.maxWidth,e.width+g+f)}this._calculatePadding(c,u,x,y)}}this._handleMargins(),l?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,n,i,s){const{ticks:{align:r,padding:o},position:l}=this.options,a=this.labelRotation!==0,c=l!=="top"&&this.axis==="x";if(this.isHorizontal()){const u=this.getPixelForTick(0)-this.left,d=this.right-this.getPixelForTick(this.ticks.length-1);let h=0,f=0;a?c?(h=s*e.width,f=i*n.height):(h=i*e.height,f=s*n.width):r==="start"?f=n.width:r==="end"?h=e.width:r!=="inner"&&(h=e.width/2,f=n.width/2),this.paddingLeft=Math.max((h-u+o)*this.width/(this.width-u),0),this.paddingRight=Math.max((f-d+o)*this.width/(this.width-d),0)}else{let u=n.height/2,d=e.height/2;r==="start"?(u=0,d=e.height):r==="end"&&(u=n.height,d=0),this.paddingTop=u+o,this.paddingBottom=d+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){X(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:n}=this.options;return n==="top"||n==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let n,i;for(n=0,i=e.length;n<i;n++)V(e[n].label)&&(e.splice(n,1),i--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){const n=this.options.ticks.sampleSize;let i=this.ticks;n<i.length&&(i=nh(i,n)),this._labelSizes=e=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,n,i){const{ctx:s,_longestTextCache:r}=this,o=[],l=[],a=Math.floor(n/th(n,i));let c=0,u=0,d,h,f,m,y,x,g,p,v,k,w;for(d=0;d<n;d+=a){if(m=e[d].label,y=this._resolveTickFontOptions(d),s.font=x=y.string,g=r[x]=r[x]||{data:{},gc:[]},p=y.lineHeight,v=k=0,!V(m)&&!q(m))v=Oo(s,g.data,g.gc,v,m),k=p;else if(q(m))for(h=0,f=m.length;h<f;++h)w=m[h],!V(w)&&!q(w)&&(v=Oo(s,g.data,g.gc,v,w),k+=p);o.push(v),l.push(k),c=Math.max(v,c),u=Math.max(k,u)}h1(r,n);const S=o.indexOf(c),b=l.indexOf(u),E=D=>({width:o[D]||0,height:l[D]||0});return{first:E(0),last:E(n-1),widest:E(S),highest:E(b),widths:o,heights:l}}getLabelForValue(e){return e}getPixelForValue(e,n){return NaN}getValueForPixel(e){}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);const n=this._startPixel+e*this._length;return e_(this._alignToPixels?Nn(this.chart,n,0):n)}getDecimalForPixel(e){const n=(e-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:n}=this;return e<0&&n<0?n:e>0&&n>0?e:0}getContext(e){const n=this.ticks||[];if(e>=0&&e<n.length){const i=n[e];return i.$context||(i.$context=p1(this.getContext(),e,i))}return this.$context||(this.$context=f1(this.chart.getContext(),this))}_tickSize(){const e=this.options.ticks,n=pt(this.labelRotation),i=Math.abs(Math.cos(n)),s=Math.abs(Math.sin(n)),r=this._getLabelSizes(),o=e.autoSkipPadding||0,l=r?r.widest.width+o:0,a=r?r.highest.height+o:0;return this.isHorizontal()?a*i>l*s?l/i:a/s:a*s<l*i?a/i:l/s}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const n=this.axis,i=this.chart,s=this.options,{grid:r,position:o,border:l}=s,a=r.offset,c=this.isHorizontal(),d=this.ticks.length+(a?1:0),h=Zi(r),f=[],m=l.setContext(this.getContext()),y=m.display?m.width:0,x=y/2,g=function(U){return Nn(i,U,y)};let p,v,k,w,S,b,E,D,T,R,I,ie;if(o==="top")p=g(this.bottom),b=this.bottom-h,D=p-x,R=g(e.top)+x,ie=e.bottom;else if(o==="bottom")p=g(this.top),R=e.top,ie=g(e.bottom)-x,b=p+x,D=this.top+h;else if(o==="left")p=g(this.right),S=this.right-h,E=p-x,T=g(e.left)+x,I=e.right;else if(o==="right")p=g(this.left),T=e.left,I=g(e.right)-x,S=p+x,E=this.left+h;else if(n==="x"){if(o==="center")p=g((e.top+e.bottom)/2+.5);else if(F(o)){const U=Object.keys(o)[0],Q=o[U];p=g(this.chart.scales[U].getPixelForValue(Q))}R=e.top,ie=e.bottom,b=p+x,D=b+h}else if(n==="y"){if(o==="center")p=g((e.left+e.right)/2);else if(F(o)){const U=Object.keys(o)[0],Q=o[U];p=g(this.chart.scales[U].getPixelForValue(Q))}S=p-x,E=S-h,T=e.left,I=e.right}const Se=z(s.ticks.maxTicksLimit,d),H=Math.max(1,Math.ceil(d/Se));for(v=0;v<d;v+=H){const U=this.getContext(v),Q=r.setContext(U),P=l.setContext(U),L=Q.lineWidth,A=Q.color,Y=P.dash||[],G=P.dashOffset,xt=Q.tickWidth,We=Q.tickColor,Tt=Q.tickBorderDash||[],$e=Q.tickBorderDashOffset;k=d1(this,v,a),k!==void 0&&(w=Nn(i,k,L),c?S=E=T=I=w:b=D=R=ie=w,f.push({tx1:S,ty1:b,tx2:E,ty2:D,x1:T,y1:R,x2:I,y2:ie,width:L,color:A,borderDash:Y,borderDashOffset:G,tickWidth:xt,tickColor:We,tickBorderDash:Tt,tickBorderDashOffset:$e}))}return this._ticksLength=d,this._borderValue=p,f}_computeLabelItems(e){const n=this.axis,i=this.options,{position:s,ticks:r}=i,o=this.isHorizontal(),l=this.ticks,{align:a,crossAlign:c,padding:u,mirror:d}=r,h=Zi(i.grid),f=h+u,m=d?-u:f,y=-pt(this.labelRotation),x=[];let g,p,v,k,w,S,b,E,D,T,R,I,ie="middle";if(s==="top")S=this.bottom-m,b=this._getXAxisLabelAlignment();else if(s==="bottom")S=this.top+m,b=this._getXAxisLabelAlignment();else if(s==="left"){const H=this._getYAxisLabelAlignment(h);b=H.textAlign,w=H.x}else if(s==="right"){const H=this._getYAxisLabelAlignment(h);b=H.textAlign,w=H.x}else if(n==="x"){if(s==="center")S=(e.top+e.bottom)/2+f;else if(F(s)){const H=Object.keys(s)[0],U=s[H];S=this.chart.scales[H].getPixelForValue(U)+f}b=this._getXAxisLabelAlignment()}else if(n==="y"){if(s==="center")w=(e.left+e.right)/2-f;else if(F(s)){const H=Object.keys(s)[0],U=s[H];w=this.chart.scales[H].getPixelForValue(U)}b=this._getYAxisLabelAlignment(h).textAlign}n==="y"&&(a==="start"?ie="top":a==="end"&&(ie="bottom"));const Se=this._getLabelSizes();for(g=0,p=l.length;g<p;++g){v=l[g],k=v.label;const H=r.setContext(this.getContext(g));E=this.getPixelForTick(g)+r.labelOffset,D=this._resolveTickFontOptions(g),T=D.lineHeight,R=q(k)?k.length:1;const U=R/2,Q=H.color,P=H.textStrokeColor,L=H.textStrokeWidth;let A=b;o?(w=E,b==="inner"&&(g===p-1?A=this.options.reverse?"left":"right":g===0?A=this.options.reverse?"right":"left":A="center"),s==="top"?c==="near"||y!==0?I=-R*T+T/2:c==="center"?I=-Se.highest.height/2-U*T+T:I=-Se.highest.height+T/2:c==="near"||y!==0?I=T/2:c==="center"?I=Se.highest.height/2-U*T:I=Se.highest.height-R*T,d&&(I*=-1),y!==0&&!H.showLabelBackdrop&&(w+=T/2*Math.sin(y))):(S=E,I=(1-R)*T/2);let Y;if(H.showLabelBackdrop){const G=De(H.backdropPadding),xt=Se.heights[g],We=Se.widths[g];let Tt=I-G.top,$e=0-G.left;switch(ie){case"middle":Tt-=xt/2;break;case"bottom":Tt-=xt;break}switch(b){case"center":$e-=We/2;break;case"right":$e-=We;break}Y={left:$e,top:Tt,width:We+G.width,height:xt+G.height,color:H.backdropColor}}x.push({label:k,font:D,textOffset:I,options:{rotation:y,color:Q,strokeColor:P,strokeWidth:L,textAlign:A,textBaseline:ie,translation:[w,S],backdrop:Y}})}return x}_getXAxisLabelAlignment(){const{position:e,ticks:n}=this.options;if(-pt(this.labelRotation))return e==="top"?"left":"right";let s="center";return n.align==="start"?s="left":n.align==="end"?s="right":n.align==="inner"&&(s="inner"),s}_getYAxisLabelAlignment(e){const{position:n,ticks:{crossAlign:i,mirror:s,padding:r}}=this.options,o=this._getLabelSizes(),l=e+r,a=o.widest.width;let c,u;return n==="left"?s?(u=this.right+r,i==="near"?c="left":i==="center"?(c="center",u+=a/2):(c="right",u+=a)):(u=this.right-l,i==="near"?c="right":i==="center"?(c="center",u-=a/2):(c="left",u=this.left)):n==="right"?s?(u=this.left+r,i==="near"?c="right":i==="center"?(c="center",u-=a/2):(c="left",u-=a)):(u=this.left+l,i==="near"?c="left":i==="center"?(c="center",u+=a/2):(c="right",u=this.right)):c="right",{textAlign:c,x:u}}_computeLabelArea(){if(this.options.ticks.mirror)return;const e=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){const{ctx:e,options:{backgroundColor:n},left:i,top:s,width:r,height:o}=this;n&&(e.save(),e.fillStyle=n,e.fillRect(i,s,r,o),e.restore())}getLineWidthForValue(e){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const s=this.ticks.findIndex(r=>r.value===e);return s>=0?n.setContext(this.getContext(s)).lineWidth:0}drawGrid(e){const n=this.options.grid,i=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e));let r,o;const l=(a,c,u)=>{!u.width||!u.color||(i.save(),i.lineWidth=u.width,i.strokeStyle=u.color,i.setLineDash(u.borderDash||[]),i.lineDashOffset=u.borderDashOffset,i.beginPath(),i.moveTo(a.x,a.y),i.lineTo(c.x,c.y),i.stroke(),i.restore())};if(n.display)for(r=0,o=s.length;r<o;++r){const a=s[r];n.drawOnChartArea&&l({x:a.x1,y:a.y1},{x:a.x2,y:a.y2},a),n.drawTicks&&l({x:a.tx1,y:a.ty1},{x:a.tx2,y:a.ty2},{color:a.tickColor,width:a.tickWidth,borderDash:a.tickBorderDash,borderDashOffset:a.tickBorderDashOffset})}}drawBorder(){const{chart:e,ctx:n,options:{border:i,grid:s}}=this,r=i.setContext(this.getContext()),o=i.display?r.width:0;if(!o)return;const l=s.setContext(this.getContext(0)).lineWidth,a=this._borderValue;let c,u,d,h;this.isHorizontal()?(c=Nn(e,this.left,o)-o/2,u=Nn(e,this.right,l)+l/2,d=h=a):(d=Nn(e,this.top,o)-o/2,h=Nn(e,this.bottom,l)+l/2,c=u=a),n.save(),n.lineWidth=r.width,n.strokeStyle=r.color,n.beginPath(),n.moveTo(c,d),n.lineTo(u,h),n.stroke(),n.restore()}drawLabels(e){if(!this.options.ticks.display)return;const i=this.ctx,s=this._computeLabelArea();s&&qo(i,s);const r=this.getLabelItems(e);for(const o of r){const l=o.options,a=o.font,c=o.label,u=o.textOffset;ei(i,c,0,u,a,l)}s&&Jo(i)}drawTitle(){const{ctx:e,options:{position:n,title:i,reverse:s}}=this;if(!i.display)return;const r=ge(i.font),o=De(i.padding),l=i.align;let a=r.lineHeight/2;n==="bottom"||n==="center"||F(n)?(a+=o.bottom,q(i.text)&&(a+=r.lineHeight*(i.text.length-1))):a+=o.top;const{titleX:c,titleY:u,maxWidth:d,rotation:h}=m1(this,a,n,l);ei(e,i.text,0,0,r,{color:i.color,maxWidth:d,rotation:h,textAlign:g1(l,n,s),textBaseline:"middle",translation:[c,u]})}draw(e){!this._isVisible()||(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){const e=this.options,n=e.ticks&&e.ticks.z||0,i=z(e.grid&&e.grid.z,-1),s=z(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==ii.prototype.draw?[{z:n,draw:r=>{this.draw(r)}}]:[{z:i,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:s,draw:()=>{this.drawBorder()}},{z:n,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(e){const n=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",s=[];let r,o;for(r=0,o=n.length;r<o;++r){const l=n[r];l[i]===this.id&&(!e||l.type===e)&&s.push(l)}return s}_resolveTickFontOptions(e){const n=this.options.ticks.setContext(this.getContext(e));return ge(n.font)}_maxDigits(){const e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class Or{constructor(e,n,i){this.type=e,this.scope=n,this.override=i,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const n=Object.getPrototypeOf(e);let i;_1(n)&&(i=this.register(n));const s=this.items,r=e.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+e);return r in s||(s[r]=e,y1(e,o,i),this.override&&ue.override(e.id,e.overrides)),o}get(e){return this.items[e]}unregister(e){const n=this.items,i=e.id,s=this.scope;i in n&&delete n[i],s&&i in ue[s]&&(delete ue[s][i],this.override&&delete Jn[i])}}function y1(t,e,n){const i=Hs(Object.create(null),[n?ue.get(n):{},ue.get(e),t.defaults]);ue.set(e,i),t.defaultRoutes&&v1(e,t.defaultRoutes),t.descriptors&&ue.describe(e,t.descriptors)}function v1(t,e){Object.keys(e).forEach(n=>{const i=n.split("."),s=i.pop(),r=[t].concat(i).join("."),o=e[n].split("."),l=o.pop(),a=o.join(".");ue.route(r,s,a,l)})}function _1(t){return"id"in t&&"defaults"in t}class x1{constructor(){this.controllers=new Or(yt,"datasets",!0),this.elements=new Or(_t,"elements"),this.plugins=new Or(Object,"plugins"),this.scales=new Or(ii,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,n,i){[...n].forEach(s=>{const r=i||this._getRegistryForType(s);i||r.isForType(s)||r===this.plugins&&s.id?this._exec(e,r,s):W(s,o=>{const l=i||this._getRegistryForType(o);this._exec(e,l,o)})})}_exec(e,n,i){const s=Xc(e);X(i["before"+s],[],i),n[e](i),X(i["after"+s],[],i)}_getRegistryForType(e){for(let n=0;n<this._typedRegistries.length;n++){const i=this._typedRegistries[n];if(i.isForType(e))return i}return this.plugins}_get(e,n,i){const s=n.get(e);if(s===void 0)throw new Error('"'+e+'" is not a registered '+i+".");return s}}var bt=new x1;class k1{constructor(){this._init=[]}notify(e,n,i,s){n==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install"));const r=s?this._descriptors(e).filter(s):this._descriptors(e),o=this._notify(r,e,n,i);return n==="afterDestroy"&&(this._notify(r,e,"stop"),this._notify(this._init,e,"uninstall")),o}_notify(e,n,i,s){s=s||{};for(const r of e){const o=r.plugin,l=o[i],a=[n,s,r.options];if(X(l,a,o)===!1&&s.cancelable)return!1}return!0}invalidate(){V(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),n}_createDescriptors(e,n){const i=e&&e.config,s=z(i.options&&i.options.plugins,{}),r=w1(i);return s===!1&&!n?[]:b1(e,r,s,n)}_notifyStateChanges(e){const n=this._oldCache||[],i=this._cache,s=(r,o)=>r.filter(l=>!o.some(a=>l.plugin.id===a.plugin.id));this._notify(s(n,i),e,"stop"),this._notify(s(i,n),e,"start")}}function w1(t){const e={},n=[],i=Object.keys(bt.plugins.items);for(let r=0;r<i.length;r++)n.push(bt.getPlugin(i[r]));const s=t.plugins||[];for(let r=0;r<s.length;r++){const o=s[r];n.indexOf(o)===-1&&(n.push(o),e[o.id]=!0)}return{plugins:n,localIds:e}}function S1(t,e){return!e&&t===!1?null:t===!0?{}:t}function b1(t,{plugins:e,localIds:n},i,s){const r=[],o=t.getContext();for(const l of e){const a=l.id,c=S1(i[a],s);c!==null&&r.push({plugin:l,options:E1(t.config,{plugin:l,local:n[a]},c,o)})}return r}function E1(t,{plugin:e,local:n},i,s){const r=t.pluginScopeKeys(e),o=t.getOptionScopes(i,r);return n&&e.defaults&&o.push(e.defaults),t.createResolver(o,s,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function ja(t,e){const n=ue.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||n.indexAxis||"x"}function C1(t,e){let n=t;return t==="_index_"?n=e:t==="_value_"&&(n=e==="x"?"y":"x"),n}function M1(t,e){return t===e?"_index_":"_value_"}function sh(t){if(t==="x"||t==="y"||t==="r")return t}function P1(t){if(t==="top"||t==="bottom")return"x";if(t==="left"||t==="right")return"y"}function Ba(t,...e){if(sh(t))return t;for(const n of e){const i=n.axis||P1(n.position)||t.length>1&&sh(t[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)}function rh(t,e,n){if(n[e+"AxisID"]===t)return{axis:e}}function T1(t,e){if(e.data&&e.data.datasets){const n=e.data.datasets.filter(i=>i.xAxisID===t||i.yAxisID===t);if(n.length)return rh(t,"x",n[0])||rh(t,"y",n[0])}return{}}function D1(t,e){const n=Jn[t.type]||{scales:{}},i=e.scales||{},s=ja(t.type,e),r=Object.create(null);return Object.keys(i).forEach(o=>{const l=i[o];if(!F(l))return console.error(`Invalid scale configuration for scale: ${o}`);if(l._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const a=Ba(o,l,T1(o,t),ue.scales[l.type]),c=M1(a,s),u=n.scales||{};r[o]=vs(Object.create(null),[{axis:a},l,u[a],u[c]])}),t.data.datasets.forEach(o=>{const l=o.type||t.type,a=o.indexAxis||ja(l,e),u=(Jn[l]||{}).scales||{};Object.keys(u).forEach(d=>{const h=C1(d,a),f=o[h+"AxisID"]||h;r[f]=r[f]||Object.create(null),vs(r[f],[{axis:h},i[f],u[d]])})}),Object.keys(r).forEach(o=>{const l=r[o];vs(l,[ue.scales[l.type],ue.scale])}),r}function Ig(t){const e=t.options||(t.options={});e.plugins=z(e.plugins,{}),e.scales=D1(t,e)}function Fg(t){return t=t||{},t.datasets=t.datasets||[],t.labels=t.labels||[],t}function O1(t){return t=t||{},t.data=Fg(t.data),Ig(t),t}const oh=new Map,jg=new Set;function Nr(t,e){let n=oh.get(t);return n||(n=e(),oh.set(t,n),jg.add(n)),n}const qi=(t,e,n)=>{const i=En(e,n);i!==void 0&&t.add(i)};class N1{constructor(e){this._config=O1(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=Fg(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),Ig(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return Nr(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,n){return Nr(`${e}.transition.${n}`,()=>[[`datasets.${e}.transitions.${n}`,`transitions.${n}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,n){return Nr(`${e}-${n}`,()=>[[`datasets.${e}.elements.${n}`,`datasets.${e}`,`elements.${n}`,""]])}pluginScopeKeys(e){const n=e.id,i=this.type;return Nr(`${i}-plugin-${n}`,()=>[[`plugins.${n}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,n){const i=this._scopeCache;let s=i.get(e);return(!s||n)&&(s=new Map,i.set(e,s)),s}getOptionScopes(e,n,i){const{options:s,type:r}=this,o=this._cachedScopes(e,i),l=o.get(n);if(l)return l;const a=new Set;n.forEach(u=>{e&&(a.add(e),u.forEach(d=>qi(a,e,d))),u.forEach(d=>qi(a,s,d)),u.forEach(d=>qi(a,Jn[r]||{},d)),u.forEach(d=>qi(a,ue,d)),u.forEach(d=>qi(a,za,d))});const c=Array.from(a);return c.length===0&&c.push(Object.create(null)),jg.has(n)&&o.set(n,c),c}chartOptionScopes(){const{options:e,type:n}=this;return[e,Jn[n]||{},ue.datasets[n]||{},{type:n},ue,za]}resolveNamedOptions(e,n,i,s=[""]){const r={$shared:!0},{resolver:o,subPrefixes:l}=lh(this._resolverCache,e,s);let a=o;if(R1(o,n)){r.$shared=!1,i=Cn(i)?i():i;const c=this.createResolver(e,i,l);a=Ai(o,i,c)}for(const c of n)r[c]=a[c];return r}createResolver(e,n,i=[""],s){const{resolver:r}=lh(this._resolverCache,e,i);return F(n)?Ai(r,n,void 0,s):r}}function lh(t,e,n){let i=t.get(e);i||(i=new Map,t.set(e,i));const s=n.join();let r=i.get(s);return r||(r={resolver:Jc(e,n),subPrefixes:n.filter(l=>!l.toLowerCase().includes("hover"))},i.set(s,r)),r}const L1=t=>F(t)&&Object.getOwnPropertyNames(t).reduce((e,n)=>e||Cn(t[n]),!1);function R1(t,e){const{isScriptable:n,isIndexable:i}=yg(t);for(const s of e){const r=n(s),o=i(s),l=(o||r)&&t[s];if(r&&(Cn(l)||L1(l))||o&&q(l))return!0}return!1}var A1="4.3.0";const z1=["top","bottom","left","right","chartArea"];function ah(t,e){return t==="top"||t==="bottom"||z1.indexOf(t)===-1&&e==="x"}function ch(t,e){return function(n,i){return n[t]===i[t]?n[e]-i[e]:n[t]-i[t]}}function uh(t){const e=t.chart,n=e.options.animation;e.notifyPlugins("afterRender"),X(n&&n.onComplete,[t],e)}function I1(t){const e=t.chart,n=e.options.animation;X(n&&n.onProgress,[t],e)}function Bg(t){return Sg()&&typeof t=="string"?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const eo={},dh=t=>{const e=Bg(t);return Object.values(eo).filter(n=>n.canvas===e).pop()};function F1(t,e,n){const i=Object.keys(t);for(const s of i){const r=+s;if(r>=e){const o=t[s];delete t[s],(n>0||r>e)&&(t[r+n]=o)}}}function j1(t,e,n,i){return!n||t.type==="mouseout"?null:i?e:t}function B1(t){const{xScale:e,yScale:n}=t;if(e&&n)return{left:e.left,right:e.right,top:n.top,bottom:n.bottom}}class jt{static register(...e){bt.add(...e),hh()}static unregister(...e){bt.remove(...e),hh()}constructor(e,n){const i=this.config=new N1(n),s=Bg(e),r=dh(s);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const o=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||i1(s)),this.platform.updateConfig(i);const l=this.platform.acquireContext(s,o.aspectRatio),a=l&&l.canvas,c=a&&a.height,u=a&&a.width;if(this.id=Hv(),this.ctx=l,this.canvas=a,this.width=u,this.height=c,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new k1,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=s_(d=>this.update(d),o.resizeDelay||0),this._dataChanges=[],eo[this.id]=this,!l||!a){console.error("Failed to create chart: can't acquire context from the given item");return}Rt.listen(this,"complete",uh),Rt.listen(this,"progress",I1),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:n},width:i,height:s,_aspectRatio:r}=this;return V(e)?n&&r?r:s?i/s:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return bt}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Ld(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Dd(this.canvas,this.ctx),this}stop(){return Rt.stop(this),this}resize(e,n){Rt.running(this)?this._resizeBeforeDraw={width:e,height:n}:this._resize(e,n)}_resize(e,n){const i=this.options,s=this.canvas,r=i.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(s,e,n,r),l=i.devicePixelRatio||this.platform.getDevicePixelRatio(),a=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,Ld(this,l,!0)&&(this.notifyPlugins("resize",{size:o}),X(i.onResize,[this,o],this),this.attached&&this._doResize(a)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};W(n,(i,s)=>{i.id=s})}buildOrUpdateScales(){const e=this.options,n=e.scales,i=this.scales,s=Object.keys(i).reduce((o,l)=>(o[l]=!1,o),{});let r=[];n&&(r=r.concat(Object.keys(n).map(o=>{const l=n[o],a=Ba(o,l),c=a==="r",u=a==="x";return{options:l,dposition:c?"chartArea":u?"bottom":"left",dtype:c?"radialLinear":u?"category":"linear"}}))),W(r,o=>{const l=o.options,a=l.id,c=Ba(a,l),u=z(l.type,o.dtype);(l.position===void 0||ah(l.position,c)!==ah(o.dposition))&&(l.position=o.dposition),s[a]=!0;let d=null;if(a in i&&i[a].type===u)d=i[a];else{const h=bt.getScale(u);d=new h({id:a,type:u,ctx:this.ctx,chart:this}),i[d.id]=d}d.init(l,e)}),W(s,(o,l)=>{o||delete i[l]}),W(i,o=>{Pe.configure(this,o,o.options),Pe.addBox(this,o)})}_updateMetasets(){const e=this._metasets,n=this.data.datasets.length,i=e.length;if(e.sort((s,r)=>s.index-r.index),i>n){for(let s=n;s<i;++s)this._destroyDatasetMeta(s);e.splice(n,i-n)}this._sortedMetasets=e.slice(0).sort(ch("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:n}}=this;e.length>n.length&&delete this._stacks,e.forEach((i,s)=>{n.filter(r=>r===i._dataset).length===0&&this._destroyDatasetMeta(s)})}buildOrUpdateControllers(){const e=[],n=this.data.datasets;let i,s;for(this._removeUnreferencedMetasets(),i=0,s=n.length;i<s;i++){const r=n[i];let o=this.getDatasetMeta(i);const l=r.type||this.config.type;if(o.type&&o.type!==l&&(this._destroyDatasetMeta(i),o=this.getDatasetMeta(i)),o.type=l,o.indexAxis=r.indexAxis||ja(l,this.options),o.order=r.order||0,o.index=i,o.label=""+r.label,o.visible=this.isDatasetVisible(i),o.controller)o.controller.updateIndex(i),o.controller.linkScales();else{const a=bt.getController(l),{datasetElementType:c,dataElementType:u}=ue.datasets[l];Object.assign(a,{dataElementType:bt.getElement(u),datasetElementType:c&&bt.getElement(c)}),o.controller=new a(this,i),e.push(o.controller)}}return this._updateMetasets(),e}_resetElements(){W(this.data.datasets,(e,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const n=this.config;n.update();const i=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let c=0,u=this.data.datasets.length;c<u;c++){const{controller:d}=this.getDatasetMeta(c),h=!s&&r.indexOf(d)===-1;d.buildOrUpdateElements(h),o=Math.max(+d.getMaxOverflow(),o)}o=this._minPadding=i.layout.autoPadding?o:0,this._updateLayout(o),s||W(r,c=>{c.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(ch("z","_idx"));const{_active:l,_lastEvent:a}=this;a?this._eventHandler(a,!0):l.length&&this._updateHoverStyles(l,l,!0),this.render()}_updateScales(){W(this.scales,e=>{Pe.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,n=new Set(Object.keys(this._listeners)),i=new Set(e.events);(!kd(n,i)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,n=this._getUniformDataChanges()||[];for(const{method:i,start:s,count:r}of n){const o=i==="_removeElements"?-r:r;F1(e,s,o)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const n=this.data.datasets.length,i=r=>new Set(e.filter(o=>o[0]===r).map((o,l)=>l+","+o.splice(1).join(","))),s=i(0);for(let r=1;r<n;r++)if(!kd(s,i(r)))return;return Array.from(s).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Pe.update(this,this.width,this.height,e);const n=this.chartArea,i=n.width<=0||n.height<=0;this._layers=[],W(this.boxes,s=>{i&&s.position==="chartArea"||(s.configure&&s.configure(),this._layers.push(...s._layers()))},this),this._layers.forEach((s,r)=>{s._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let n=0,i=this.data.datasets.length;n<i;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,i=this.data.datasets.length;n<i;++n)this._updateDataset(n,Cn(e)?e({datasetIndex:n}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,n){const i=this.getDatasetMeta(e),s={meta:i,index:e,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",s)!==!1&&(i.controller._update(n),s.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",s))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Rt.has(this)?this.attached&&!Rt.running(this)&&Rt.start(this):(this.draw(),uh({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:i,height:s}=this._resizeBeforeDraw;this._resize(i,s),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(e=0;e<n.length&&n[e].z<=0;++e)n[e].draw(this.chartArea);for(this._drawDatasets();e<n.length;++e)n[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const n=this._sortedMetasets,i=[];let s,r;for(s=0,r=n.length;s<r;++s){const o=n[s];(!e||o.visible)&&i.push(o)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let n=e.length-1;n>=0;--n)this._drawDataset(e[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const n=this.ctx,i=e._clip,s=!i.disabled,r=B1(e)||this.chartArea,o={meta:e,index:e.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",o)!==!1&&(s&&qo(n,{left:i.left===!1?0:r.left-i.left,right:i.right===!1?this.width:r.right+i.right,top:i.top===!1?0:r.top-i.top,bottom:i.bottom===!1?this.height:r.bottom+i.bottom}),e.controller.draw(),s&&Jo(n),o.cancelable=!1,this.notifyPlugins("afterDatasetDraw",o))}isPointInArea(e){return $t(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,n,i,s){const r=zx.modes[n];return typeof r=="function"?r(this,e,i,s):[]}getDatasetMeta(e){const n=this.data.datasets[e],i=this._metasets;let s=i.filter(r=>r&&r._dataset===n).pop();return s||(s={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:e,_dataset:n,_parsed:[],_sorted:!1},i.push(s)),s}getContext(){return this.$context||(this.$context=Dn(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const n=this.data.datasets[e];if(!n)return!1;const i=this.getDatasetMeta(e);return typeof i.hidden=="boolean"?!i.hidden:!n.hidden}setDatasetVisibility(e,n){const i=this.getDatasetMeta(e);i.hidden=!n}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,n,i){const s=i?"show":"hide",r=this.getDatasetMeta(e),o=r.controller._resolveAnimations(void 0,s);Ws(n)?(r.data[n].hidden=!i,this.update()):(this.setDatasetVisibility(e,i),o.update(r,{visible:i}),this.update(l=>l.datasetIndex===e?s:void 0))}hide(e,n){this._updateVisibility(e,n,!1)}show(e,n){this._updateVisibility(e,n,!0)}_destroyDatasetMeta(e){const n=this._metasets[e];n&&n.controller&&n.controller._destroy(),delete this._metasets[e]}_stop(){let e,n;for(this.stop(),Rt.remove(this),e=0,n=this.data.datasets.length;e<n;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:n}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),Dd(e,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete eo[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,n=this.platform,i=(r,o)=>{n.addEventListener(this,r,o),e[r]=o},s=(r,o,l)=>{r.offsetX=o,r.offsetY=l,this._eventHandler(r)};W(this.options.events,r=>i(r,s))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,n=this.platform,i=(a,c)=>{n.addEventListener(this,a,c),e[a]=c},s=(a,c)=>{e[a]&&(n.removeEventListener(this,a,c),delete e[a])},r=(a,c)=>{this.canvas&&this.resize(a,c)};let o;const l=()=>{s("attach",l),this.attached=!0,this.resize(),i("resize",r),i("detach",o)};o=()=>{this.attached=!1,s("resize",r),this._stop(),this._resize(0,0),i("attach",l)},n.isAttached(this.canvas)?l():o()}unbindEvents(){W(this._listeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._listeners={},W(this._responsiveListeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,n,i){const s=i?"set":"remove";let r,o,l,a;for(n==="dataset"&&(r=this.getDatasetMeta(e[0].datasetIndex),r.controller["_"+s+"DatasetHoverStyle"]()),l=0,a=e.length;l<a;++l){o=e[l];const c=o&&this.getDatasetMeta(o.datasetIndex).controller;c&&c[s+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const n=this._active||[],i=e.map(({datasetIndex:r,index:o})=>{const l=this.getDatasetMeta(r);if(!l)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:l.data[o],index:o}});!Po(i,n)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,n))}notifyPlugins(e,n,i){return this._plugins.notify(this,e,n,i)}isPluginEnabled(e){return this._plugins._cache.filter(n=>n.plugin.id===e).length===1}_updateHoverStyles(e,n,i){const s=this.options.hover,r=(a,c)=>a.filter(u=>!c.some(d=>u.datasetIndex===d.datasetIndex&&u.index===d.index)),o=r(n,e),l=i?e:r(e,n);o.length&&this.updateHoverStyle(o,s.mode,!1),l.length&&s.mode&&this.updateHoverStyle(l,s.mode,!0)}_eventHandler(e,n){const i={event:e,replay:n,cancelable:!0,inChartArea:this.isPointInArea(e)},s=o=>(o.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",i,s)===!1)return;const r=this._handleEvent(e,n,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,s),(r||i.changed)&&this.render(),this}_handleEvent(e,n,i){const{_active:s=[],options:r}=this,o=n,l=this._getActiveElements(e,s,i,o),a=Kv(e),c=j1(e,this._lastEvent,i,a);i&&(this._lastEvent=null,X(r.onHover,[e,l,this],this),a&&X(r.onClick,[e,l,this],this));const u=!Po(l,s);return(u||n)&&(this._active=l,this._updateHoverStyles(l,s,n)),this._lastEvent=c,u}_getActiveElements(e,n,i,s){if(e.type==="mouseout")return[];if(!i)return n;const r=this.options.hover;return this.getElementsAtEventForMode(e,r.mode,r,s)}}M(jt,"defaults",ue),M(jt,"instances",eo),M(jt,"overrides",Jn),M(jt,"registry",bt),M(jt,"version",A1),M(jt,"getChart",dh);function hh(){return W(jt.instances,t=>t._plugins.invalidate())}function V1(t,e,n){const{startAngle:i,pixelMargin:s,x:r,y:o,outerRadius:l,innerRadius:a}=e;let c=s/l;t.beginPath(),t.arc(r,o,l,i-c,n+c),a>s?(c=s/a,t.arc(r,o,a,n+c,i-c,!0)):t.arc(r,o,s,n+ce,i-ce),t.closePath(),t.clip()}function H1(t){return qc(t,["outerStart","outerEnd","innerStart","innerEnd"])}function W1(t,e,n,i){const s=H1(t.options.borderRadius),r=(n-e)/2,o=Math.min(r,i*e/2),l=a=>{const c=(n-Math.min(r,a))*i/2;return ve(a,0,Math.min(r,c))};return{outerStart:l(s.outerStart),outerEnd:l(s.outerEnd),innerStart:ve(s.innerStart,0,o),innerEnd:ve(s.innerEnd,0,o)}}function li(t,e,n,i){return{x:n+t*Math.cos(e),y:i+t*Math.sin(e)}}function Ro(t,e,n,i,s,r){const{x:o,y:l,startAngle:a,pixelMargin:c,innerRadius:u}=e,d=Math.max(e.outerRadius+i+n-c,0),h=u>0?u+i+n+c:0;let f=0;const m=s-a;if(i){const H=u>0?u-i:0,U=d>0?d-i:0,Q=(H+U)/2,P=Q!==0?m*Q/(Q+i):m;f=(m-P)/2}const y=Math.max(.001,m*d-n/ne)/d,x=(m-y)/2,g=a+x+f,p=s-x-f,{outerStart:v,outerEnd:k,innerStart:w,innerEnd:S}=W1(e,h,d,p-g),b=d-v,E=d-k,D=g+v/b,T=p-k/E,R=h+w,I=h+S,ie=g+w/R,Se=p-S/I;if(t.beginPath(),r){const H=(D+T)/2;if(t.arc(o,l,d,D,H),t.arc(o,l,d,H,T),k>0){const L=li(E,T,o,l);t.arc(L.x,L.y,k,T,p+ce)}const U=li(I,p,o,l);if(t.lineTo(U.x,U.y),S>0){const L=li(I,Se,o,l);t.arc(L.x,L.y,S,p+ce,Se+Math.PI)}const Q=(p-S/h+(g+w/h))/2;if(t.arc(o,l,h,p-S/h,Q,!0),t.arc(o,l,h,Q,g+w/h,!0),w>0){const L=li(R,ie,o,l);t.arc(L.x,L.y,w,ie+Math.PI,g-ce)}const P=li(b,g,o,l);if(t.lineTo(P.x,P.y),v>0){const L=li(b,D,o,l);t.arc(L.x,L.y,v,g-ce,D)}}else{t.moveTo(o,l);const H=Math.cos(D)*d+o,U=Math.sin(D)*d+l;t.lineTo(H,U);const Q=Math.cos(T)*d+o,P=Math.sin(T)*d+l;t.lineTo(Q,P)}t.closePath()}function $1(t,e,n,i,s){const{fullCircles:r,startAngle:o,circumference:l}=e;let a=e.endAngle;if(r){Ro(t,e,n,i,a,s);for(let c=0;c<r;++c)t.fill();isNaN(l)||(a=o+(l%ee||ee))}return Ro(t,e,n,i,a,s),t.fill(),a}function U1(t,e,n,i,s){const{fullCircles:r,startAngle:o,circumference:l,options:a}=e,{borderWidth:c,borderJoinStyle:u,borderDash:d,borderDashOffset:h}=a,f=a.borderAlign==="inner";if(!c)return;t.setLineDash(d||[]),t.lineDashOffset=h,f?(t.lineWidth=c*2,t.lineJoin=u||"round"):(t.lineWidth=c,t.lineJoin=u||"bevel");let m=e.endAngle;if(r){Ro(t,e,n,i,m,s);for(let y=0;y<r;++y)t.stroke();isNaN(l)||(m=o+(l%ee||ee))}f&&V1(t,e,m),r||(Ro(t,e,n,i,m,s),t.stroke())}class os extends _t{constructor(n){super();M(this,"circumference");M(this,"endAngle");M(this,"fullCircles");M(this,"innerRadius");M(this,"outerRadius");M(this,"pixelMargin");M(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,n&&Object.assign(this,n)}inRange(n,i,s){const r=this.getProps(["x","y"],s),{angle:o,distance:l}=lg(r,{x:n,y:i}),{startAngle:a,endAngle:c,innerRadius:u,outerRadius:d,circumference:h}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],s),f=(this.options.spacing+this.options.borderWidth)/2,y=z(h,c-a)>=ee||$s(o,a,c),x=Ht(l,u+f,d+f);return y&&x}getCenterPoint(n){const{x:i,y:s,startAngle:r,endAngle:o,innerRadius:l,outerRadius:a}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],n),{offset:c,spacing:u}=this.options,d=(r+o)/2,h=(l+a+u+c)/2;return{x:i+Math.cos(d)*h,y:s+Math.sin(d)*h}}tooltipPosition(n){return this.getCenterPoint(n)}draw(n){const{options:i,circumference:s}=this,r=(i.offset||0)/4,o=(i.spacing||0)/2,l=i.circular;if(this.pixelMargin=i.borderAlign==="inner"?.33:0,this.fullCircles=s>ee?Math.floor(s/ee):0,s===0||this.innerRadius<0||this.outerRadius<0)return;n.save();const a=(this.startAngle+this.endAngle)/2;n.translate(Math.cos(a)*r,Math.sin(a)*r);const c=1-Math.sin(Math.min(ne,s||0)),u=r*c;n.fillStyle=i.backgroundColor,n.strokeStyle=i.borderColor,$1(n,this,u,o,l),U1(n,this,u,o,l),n.restore()}}M(os,"id","arc"),M(os,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0}),M(os,"defaultRoutes",{backgroundColor:"backgroundColor"}),M(os,"descriptors",{_scriptable:!0,_indexable:n=>n!=="borderDash"});function Vg(t,e,n=e){t.lineCap=z(n.borderCapStyle,e.borderCapStyle),t.setLineDash(z(n.borderDash,e.borderDash)),t.lineDashOffset=z(n.borderDashOffset,e.borderDashOffset),t.lineJoin=z(n.borderJoinStyle,e.borderJoinStyle),t.lineWidth=z(n.borderWidth,e.borderWidth),t.strokeStyle=z(n.borderColor,e.borderColor)}function Y1(t,e,n){t.lineTo(n.x,n.y)}function X1(t){return t.stepped?m_:t.tension||t.cubicInterpolationMode==="monotone"?y_:Y1}function Hg(t,e,n={}){const i=t.length,{start:s=0,end:r=i-1}=n,{start:o,end:l}=e,a=Math.max(s,o),c=Math.min(r,l),u=s<o&&r<o||s>l&&r>l;return{count:i,start:a,loop:e.loop,ilen:c<a&&!u?i+c-a:c-a}}function K1(t,e,n,i){const{points:s,options:r}=e,{count:o,start:l,loop:a,ilen:c}=Hg(s,n,i),u=X1(r);let{move:d=!0,reverse:h}=i||{},f,m,y;for(f=0;f<=c;++f)m=s[(l+(h?c-f:f))%o],!m.skip&&(d?(t.moveTo(m.x,m.y),d=!1):u(t,y,m,h,r.stepped),y=m);return a&&(m=s[(l+(h?c:0))%o],u(t,y,m,h,r.stepped)),!!a}function Q1(t,e,n,i){const s=e.points,{count:r,start:o,ilen:l}=Hg(s,n,i),{move:a=!0,reverse:c}=i||{};let u=0,d=0,h,f,m,y,x,g;const p=k=>(o+(c?l-k:k))%r,v=()=>{y!==x&&(t.lineTo(u,x),t.lineTo(u,y),t.lineTo(u,g))};for(a&&(f=s[p(0)],t.moveTo(f.x,f.y)),h=0;h<=l;++h){if(f=s[p(h)],f.skip)continue;const k=f.x,w=f.y,S=k|0;S===m?(w<y?y=w:w>x&&(x=w),u=(d*u+k)/++d):(v(),t.lineTo(k,w),m=S,d=0,y=x=w),g=w}v()}function Va(t){const e=t.options,n=e.borderDash&&e.borderDash.length;return!t._decimated&&!t._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!n?Q1:K1}function G1(t){return t.stepped?Q_:t.tension||t.cubicInterpolationMode==="monotone"?G_:jn}function Z1(t,e,n,i){let s=e._path;s||(s=e._path=new Path2D,e.path(s,n,i)&&s.closePath()),Vg(t,e.options),t.stroke(s)}function q1(t,e,n,i){const{segments:s,options:r}=e,o=Va(e);for(const l of s)Vg(t,r,l.style),t.beginPath(),o(t,e,l,{start:n,end:n+i-1})&&t.closePath(),t.stroke()}const J1=typeof Path2D=="function";function ek(t,e,n,i){J1&&!e.options.segment?Z1(t,e,n,i):q1(t,e,n,i)}class dn extends _t{constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,n){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const s=i.spanGaps?this._loop:this._fullLoop;V_(this._points,i,e,s,n),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=nx(this,this.options.segment))}first(){const e=this.segments,n=this.points;return e.length&&n[e[0].start]}last(){const e=this.segments,n=this.points,i=e.length;return i&&n[e[i-1].end]}interpolate(e,n){const i=this.options,s=e[n],r=this.points,o=Pg(this,{property:n,start:s,end:s});if(!o.length)return;const l=[],a=G1(i);let c,u;for(c=0,u=o.length;c<u;++c){const{start:d,end:h}=o[c],f=r[d],m=r[h];if(f===m){l.push(f);continue}const y=Math.abs((s-f[n])/(m[n]-f[n])),x=a(f,m,y,i.stepped);x[n]=e[n],l.push(x)}return l.length===1?l[0]:l}pathSegment(e,n,i){return Va(this)(e,this,n,i)}path(e,n,i){const s=this.segments,r=Va(this);let o=this._loop;n=n||0,i=i||this.points.length-n;for(const l of s)o&=r(e,this,l,{start:n,end:n+i-1});return!!o}draw(e,n,i,s){const r=this.options||{};(this.points||[]).length&&r.borderWidth&&(e.save(),ek(e,this,i,s),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}M(dn,"id","line"),M(dn,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),M(dn,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),M(dn,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"});function fh(t,e,n,i){const s=t.options,{[n]:r}=t.getProps([n],i);return Math.abs(e-r)<s.radius+s.hitRadius}class to extends _t{constructor(n){super();M(this,"parsed");M(this,"skip");M(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,i,s){const r=this.options,{x:o,y:l}=this.getProps(["x","y"],s);return Math.pow(n-o,2)+Math.pow(i-l,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(n,i){return fh(this,n,"x",i)}inYRange(n,i){return fh(this,n,"y",i)}getCenterPoint(n){const{x:i,y:s}=this.getProps(["x","y"],n);return{x:i,y:s}}size(n){n=n||this.options||{};let i=n.radius||0;i=Math.max(i,i&&n.hoverRadius||0);const s=i&&n.borderWidth||0;return(i+s)*2}draw(n,i){const s=this.options;this.skip||s.radius<.1||!$t(this,i,this.size(s)/2)||(n.strokeStyle=s.borderColor,n.lineWidth=s.borderWidth,n.fillStyle=s.backgroundColor,Ia(n,s,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}M(to,"id","point"),M(to,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),M(to,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function Wg(t,e){const{x:n,y:i,base:s,width:r,height:o}=t.getProps(["x","y","base","width","height"],e);let l,a,c,u,d;return t.horizontal?(d=o/2,l=Math.min(n,s),a=Math.max(n,s),c=i-d,u=i+d):(d=r/2,l=n-d,a=n+d,c=Math.min(i,s),u=Math.max(i,s)),{left:l,top:c,right:a,bottom:u}}function hn(t,e,n,i){return t?0:ve(e,n,i)}function tk(t,e,n){const i=t.options.borderWidth,s=t.borderSkipped,r=mg(i);return{t:hn(s.top,r.top,0,n),r:hn(s.right,r.right,0,e),b:hn(s.bottom,r.bottom,0,n),l:hn(s.left,r.left,0,e)}}function nk(t,e,n){const{enableBorderRadius:i}=t.getProps(["enableBorderRadius"]),s=t.options.borderRadius,r=Yn(s),o=Math.min(e,n),l=t.borderSkipped,a=i||F(s);return{topLeft:hn(!a||l.top||l.left,r.topLeft,0,o),topRight:hn(!a||l.top||l.right,r.topRight,0,o),bottomLeft:hn(!a||l.bottom||l.left,r.bottomLeft,0,o),bottomRight:hn(!a||l.bottom||l.right,r.bottomRight,0,o)}}function ik(t){const e=Wg(t),n=e.right-e.left,i=e.bottom-e.top,s=tk(t,n/2,i/2),r=nk(t,n/2,i/2);return{outer:{x:e.left,y:e.top,w:n,h:i,radius:r},inner:{x:e.left+s.l,y:e.top+s.t,w:n-s.l-s.r,h:i-s.t-s.b,radius:{topLeft:Math.max(0,r.topLeft-Math.max(s.t,s.l)),topRight:Math.max(0,r.topRight-Math.max(s.t,s.r)),bottomLeft:Math.max(0,r.bottomLeft-Math.max(s.b,s.l)),bottomRight:Math.max(0,r.bottomRight-Math.max(s.b,s.r))}}}}function Il(t,e,n,i){const s=e===null,r=n===null,l=t&&!(s&&r)&&Wg(t,i);return l&&(s||Ht(e,l.left,l.right))&&(r||Ht(n,l.top,l.bottom))}function sk(t){return t.topLeft||t.topRight||t.bottomLeft||t.bottomRight}function rk(t,e){t.rect(e.x,e.y,e.w,e.h)}function Fl(t,e,n={}){const i=t.x!==n.x?-e:0,s=t.y!==n.y?-e:0,r=(t.x+t.w!==n.x+n.w?e:0)-i,o=(t.y+t.h!==n.y+n.h?e:0)-s;return{x:t.x+i,y:t.y+s,w:t.w+r,h:t.h+o,radius:t.radius}}class no extends _t{constructor(e){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,e&&Object.assign(this,e)}draw(e){const{inflateAmount:n,options:{borderColor:i,backgroundColor:s}}=this,{inner:r,outer:o}=ik(this),l=sk(o.radius)?Us:rk;e.save(),(o.w!==r.w||o.h!==r.h)&&(e.beginPath(),l(e,Fl(o,n,r)),e.clip(),l(e,Fl(r,-n,o)),e.fillStyle=i,e.fill("evenodd")),e.beginPath(),l(e,Fl(r,n)),e.fillStyle=s,e.fill(),e.restore()}inRange(e,n,i){return Il(this,e,n,i)}inXRange(e,n){return Il(this,e,null,n)}inYRange(e,n){return Il(this,null,e,n)}getCenterPoint(e){const{x:n,y:i,base:s,horizontal:r}=this.getProps(["x","y","base","horizontal"],e);return{x:r?(n+s)/2:n,y:r?i:(i+s)/2}}getRange(e){return e==="x"?this.width/2:this.height/2}}M(no,"id","bar"),M(no,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),M(no,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var ok=Object.freeze({__proto__:null,ArcElement:os,BarElement:no,LineElement:dn,PointElement:to});const Ha=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],ph=Ha.map(t=>t.replace("rgb(","rgba(").replace(")",", 0.5)"));function $g(t){return Ha[t%Ha.length]}function Ug(t){return ph[t%ph.length]}function lk(t,e){return t.borderColor=$g(e),t.backgroundColor=Ug(e),++e}function ak(t,e){return t.backgroundColor=t.data.map(()=>$g(e++)),e}function ck(t,e){return t.backgroundColor=t.data.map(()=>Ug(e++)),e}function uk(t){let e=0;return(n,i)=>{const s=t.getDatasetMeta(i).controller;s instanceof Wn?e=ak(n,e):s instanceof ws?e=ck(n,e):s&&(e=lk(n,e))}}function gh(t){let e;for(e in t)if(t[e].borderColor||t[e].backgroundColor)return!0;return!1}function dk(t){return t&&(t.borderColor||t.backgroundColor)}var hk={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(t,e,n){if(!n.enabled)return;const{data:{datasets:i},options:s}=t.config,{elements:r}=s;if(!n.forceOverride&&(gh(i)||dk(s)||r&&gh(r)))return;const o=uk(t);i.forEach(o)}};function fk(t,e,n,i,s){const r=s.samples||i;if(r>=n)return t.slice(e,e+n);const o=[],l=(n-2)/(r-2);let a=0;const c=e+n-1;let u=e,d,h,f,m,y;for(o[a++]=t[u],d=0;d<r-2;d++){let x=0,g=0,p;const v=Math.floor((d+1)*l)+1+e,k=Math.min(Math.floor((d+2)*l)+1,n)+e,w=k-v;for(p=v;p<k;p++)x+=t[p].x,g+=t[p].y;x/=w,g/=w;const S=Math.floor(d*l)+1+e,b=Math.min(Math.floor((d+1)*l)+1,n)+e,{x:E,y:D}=t[u];for(f=m=-1,p=S;p<b;p++)m=.5*Math.abs((E-x)*(t[p].y-D)-(E-t[p].x)*(g-D)),m>f&&(f=m,h=t[p],y=p);o[a++]=h,u=y}return o[a++]=t[c],o}function pk(t,e,n,i){let s=0,r=0,o,l,a,c,u,d,h,f,m,y;const x=[],g=e+n-1,p=t[e].x,k=t[g].x-p;for(o=e;o<e+n;++o){l=t[o],a=(l.x-p)/k*i,c=l.y;const w=a|0;if(w===u)c<m?(m=c,d=o):c>y&&(y=c,h=o),s=(r*s+l.x)/++r;else{const S=o-1;if(!V(d)&&!V(h)){const b=Math.min(d,h),E=Math.max(d,h);b!==f&&b!==S&&x.push({...t[b],x:s}),E!==f&&E!==S&&x.push({...t[E],x:s})}o>0&&S!==f&&x.push(t[S]),x.push(l),u=w,r=0,m=y=c,d=h=f=o}}return x}function Yg(t){if(t._decimated){const e=t._data;delete t._decimated,delete t._data,Object.defineProperty(t,"data",{configurable:!0,enumerable:!0,writable:!0,value:e})}}function mh(t){t.data.datasets.forEach(e=>{Yg(e)})}function gk(t,e){const n=e.length;let i=0,s;const{iScale:r}=t,{min:o,max:l,minDefined:a,maxDefined:c}=r.getUserBounds();return a&&(i=ve(Wt(e,r.axis,o).lo,0,n-1)),c?s=ve(Wt(e,r.axis,l).hi+1,i,n)-i:s=n-i,{start:i,count:s}}var mk={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(t,e,n)=>{if(!n.enabled){mh(t);return}const i=t.width;t.data.datasets.forEach((s,r)=>{const{_data:o,indexAxis:l}=s,a=t.getDatasetMeta(r),c=o||s.data;if(ss([l,t.options.indexAxis])==="y"||!a.controller.supportsDecimation)return;const u=t.scales[a.xAxisID];if(u.type!=="linear"&&u.type!=="time"||t.options.parsing)return;let{start:d,count:h}=gk(a,c);const f=n.threshold||4*i;if(h<=f){Yg(s);return}V(o)&&(s._data=c,delete s.data,Object.defineProperty(s,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(y){this._data=y}}));let m;switch(n.algorithm){case"lttb":m=fk(c,d,h,i,n);break;case"min-max":m=pk(c,d,h,i);break;default:throw new Error(`Unsupported decimation algorithm '${n.algorithm}'`)}s._decimated=m})},destroy(t){mh(t)}};function yk(t,e,n){const i=t.segments,s=t.points,r=e.points,o=[];for(const l of i){let{start:a,end:c}=l;c=su(a,c,s);const u=Wa(n,s[a],s[c],l.loop);if(!e.segments){o.push({source:l,target:u,start:s[a],end:s[c]});continue}const d=Pg(e,u);for(const h of d){const f=Wa(n,r[h.start],r[h.end],h.loop),m=Mg(l,s,f);for(const y of m)o.push({source:y,target:h,start:{[n]:yh(u,f,"start",Math.max)},end:{[n]:yh(u,f,"end",Math.min)}})}}return o}function Wa(t,e,n,i){if(i)return;let s=e[t],r=n[t];return t==="angle"&&(s=Ke(s),r=Ke(r)),{property:t,start:s,end:r}}function vk(t,e){const{x:n=null,y:i=null}=t||{},s=e.points,r=[];return e.segments.forEach(({start:o,end:l})=>{l=su(o,l,s);const a=s[o],c=s[l];i!==null?(r.push({x:a.x,y:i}),r.push({x:c.x,y:i})):n!==null&&(r.push({x:n,y:a.y}),r.push({x:n,y:c.y}))}),r}function su(t,e,n){for(;e>t;e--){const i=n[e];if(!isNaN(i.x)&&!isNaN(i.y))break}return e}function yh(t,e,n,i){return t&&e?i(t[n],e[n]):t?t[n]:e?e[n]:0}function Xg(t,e){let n=[],i=!1;return q(t)?(i=!0,n=t):n=vk(t,e),n.length?new dn({points:n,options:{tension:0},_loop:i,_fullLoop:i}):null}function vh(t){return t&&t.fill!==!1}function _k(t,e,n){let s=t[e].fill;const r=[e];let o;if(!n)return s;for(;s!==!1&&r.indexOf(s)===-1;){if(!ae(s))return s;if(o=t[s],!o)return!1;if(o.visible)return s;r.push(s),s=o.fill}return!1}function xk(t,e,n){const i=bk(t);if(F(i))return isNaN(i.value)?!1:i;let s=parseFloat(i);return ae(s)&&Math.floor(s)===s?kk(i[0],e,s,n):["origin","start","end","stack","shape"].indexOf(i)>=0&&i}function kk(t,e,n,i){return(t==="-"||t==="+")&&(n=e+n),n===e||n<0||n>=i?!1:n}function wk(t,e){let n=null;return t==="start"?n=e.bottom:t==="end"?n=e.top:F(t)?n=e.getPixelForValue(t.value):e.getBasePixel&&(n=e.getBasePixel()),n}function Sk(t,e,n){let i;return t==="start"?i=n:t==="end"?i=e.options.reverse?e.min:e.max:F(t)?i=t.value:i=e.getBaseValue(),i}function bk(t){const e=t.options,n=e.fill;let i=z(n&&n.target,n);return i===void 0&&(i=!!e.backgroundColor),i===!1||i===null?!1:i===!0?"origin":i}function Ek(t){const{scale:e,index:n,line:i}=t,s=[],r=i.segments,o=i.points,l=Ck(e,n);l.push(Xg({x:null,y:e.bottom},i));for(let a=0;a<r.length;a++){const c=r[a];for(let u=c.start;u<=c.end;u++)Mk(s,o[u],l)}return new dn({points:s,options:{}})}function Ck(t,e){const n=[],i=t.getMatchingVisibleMetas("line");for(let s=0;s<i.length;s++){const r=i[s];if(r.index===e)break;r.hidden||n.unshift(r.dataset)}return n}function Mk(t,e,n){const i=[];for(let s=0;s<n.length;s++){const r=n[s],{first:o,last:l,point:a}=Pk(r,e,"x");if(!(!a||o&&l)){if(o)i.unshift(a);else if(t.push(a),!l)break}}t.push(...i)}function Pk(t,e,n){const i=t.interpolate(e,n);if(!i)return{};const s=i[n],r=t.segments,o=t.points;let l=!1,a=!1;for(let c=0;c<r.length;c++){const u=r[c],d=o[u.start][n],h=o[u.end][n];if(Ht(s,d,h)){l=s===d,a=s===h;break}}return{first:l,last:a,point:i}}class Kg{constructor(e){this.x=e.x,this.y=e.y,this.radius=e.radius}pathSegment(e,n,i){const{x:s,y:r,radius:o}=this;return n=n||{start:0,end:ee},e.arc(s,r,o,n.end,n.start,!0),!i.bounds}interpolate(e){const{x:n,y:i,radius:s}=this,r=e.angle;return{x:n+Math.cos(r)*s,y:i+Math.sin(r)*s,angle:r}}}function Tk(t){const{chart:e,fill:n,line:i}=t;if(ae(n))return Dk(e,n);if(n==="stack")return Ek(t);if(n==="shape")return!0;const s=Ok(t);return s instanceof Kg?s:Xg(s,i)}function Dk(t,e){const n=t.getDatasetMeta(e);return n&&t.isDatasetVisible(e)?n.dataset:null}function Ok(t){return(t.scale||{}).getPointPositionForValue?Lk(t):Nk(t)}function Nk(t){const{scale:e={},fill:n}=t,i=wk(n,e);if(ae(i)){const s=e.isHorizontal();return{x:s?i:null,y:s?null:i}}return null}function Lk(t){const{scale:e,fill:n}=t,i=e.options,s=e.getLabels().length,r=i.reverse?e.max:e.min,o=Sk(n,e,r),l=[];if(i.grid.circular){const a=e.getPointPositionForValue(0,r);return new Kg({x:a.x,y:a.y,radius:e.getDistanceFromCenterForValue(o)})}for(let a=0;a<s;++a)l.push(e.getPointPositionForValue(a,o));return l}function jl(t,e,n){const i=Tk(e),{line:s,scale:r,axis:o}=e,l=s.options,a=l.fill,c=l.backgroundColor,{above:u=c,below:d=c}=a||{};i&&s.points.length&&(qo(t,n),Rk(t,{line:s,target:i,above:u,below:d,area:n,scale:r,axis:o}),Jo(t))}function Rk(t,e){const{line:n,target:i,above:s,below:r,area:o,scale:l}=e,a=n._loop?"angle":e.axis;t.save(),a==="x"&&r!==s&&(_h(t,i,o.top),xh(t,{line:n,target:i,color:s,scale:l,property:a}),t.restore(),t.save(),_h(t,i,o.bottom)),xh(t,{line:n,target:i,color:r,scale:l,property:a}),t.restore()}function _h(t,e,n){const{segments:i,points:s}=e;let r=!0,o=!1;t.beginPath();for(const l of i){const{start:a,end:c}=l,u=s[a],d=s[su(a,c,s)];r?(t.moveTo(u.x,u.y),r=!1):(t.lineTo(u.x,n),t.lineTo(u.x,u.y)),o=!!e.pathSegment(t,l,{move:o}),o?t.closePath():t.lineTo(d.x,n)}t.lineTo(e.first().x,n),t.closePath(),t.clip()}function xh(t,e){const{line:n,target:i,property:s,color:r,scale:o}=e,l=yk(n,i,s);for(const{source:a,target:c,start:u,end:d}of l){const{style:{backgroundColor:h=r}={}}=a,f=i!==!0;t.save(),t.fillStyle=h,Ak(t,o,f&&Wa(s,u,d)),t.beginPath();const m=!!n.pathSegment(t,a);let y;if(f){m?t.closePath():kh(t,i,d,s);const x=!!i.pathSegment(t,c,{move:m,reverse:!0});y=m&&x,y||kh(t,i,u,s)}t.closePath(),t.fill(y?"evenodd":"nonzero"),t.restore()}}function Ak(t,e,n){const{top:i,bottom:s}=e.chart.chartArea,{property:r,start:o,end:l}=n||{};r==="x"&&(t.beginPath(),t.rect(o,i,l-o,s-i),t.clip())}function kh(t,e,n,i){const s=e.interpolate(n,i);s&&t.lineTo(s.x,s.y)}var zk={id:"filler",afterDatasetsUpdate(t,e,n){const i=(t.data.datasets||[]).length,s=[];let r,o,l,a;for(o=0;o<i;++o)r=t.getDatasetMeta(o),l=r.dataset,a=null,l&&l.options&&l instanceof dn&&(a={visible:t.isDatasetVisible(o),index:o,fill:xk(l,o,i),chart:t,axis:r.controller.options.indexAxis,scale:r.vScale,line:l}),r.$filler=a,s.push(a);for(o=0;o<i;++o)a=s[o],!(!a||a.fill===!1)&&(a.fill=_k(s,o,n.propagate))},beforeDraw(t,e,n){const i=n.drawTime==="beforeDraw",s=t.getSortedVisibleDatasetMetas(),r=t.chartArea;for(let o=s.length-1;o>=0;--o){const l=s[o].$filler;!l||(l.line.updateControlPoints(r,l.axis),i&&l.fill&&jl(t.ctx,l,r))}},beforeDatasetsDraw(t,e,n){if(n.drawTime!=="beforeDatasetsDraw")return;const i=t.getSortedVisibleDatasetMetas();for(let s=i.length-1;s>=0;--s){const r=i[s].$filler;vh(r)&&jl(t.ctx,r,t.chartArea)}},beforeDatasetDraw(t,e,n){const i=e.meta.$filler;!vh(i)||n.drawTime!=="beforeDatasetDraw"||jl(t.ctx,i,t.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const wh=(t,e)=>{let{boxHeight:n=e,boxWidth:i=e}=t;return t.usePointStyle&&(n=Math.min(n,e),i=t.pointStyleWidth||Math.min(i,e)),{boxWidth:i,boxHeight:n,itemHeight:Math.max(e,n)}},Ik=(t,e)=>t!==null&&e!==null&&t.datasetIndex===e.datasetIndex&&t.index===e.index;class Sh extends _t{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n,i){this.maxWidth=e,this.maxHeight=n,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const e=this.options.labels||{};let n=X(e.generateLabels,[this.chart],this)||[];e.filter&&(n=n.filter(i=>e.filter(i,this.chart.data))),e.sort&&(n=n.sort((i,s)=>e.sort(i,s,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:e,ctx:n}=this;if(!e.display){this.width=this.height=0;return}const i=e.labels,s=ge(i.font),r=s.size,o=this._computeTitleHeight(),{boxWidth:l,itemHeight:a}=wh(i,r);let c,u;n.font=s.string,this.isHorizontal()?(c=this.maxWidth,u=this._fitRows(o,r,l,a)+10):(u=this.maxHeight,c=this._fitCols(o,s,l,a)+10),this.width=Math.min(c,e.maxWidth||this.maxWidth),this.height=Math.min(u,e.maxHeight||this.maxHeight)}_fitRows(e,n,i,s){const{ctx:r,maxWidth:o,options:{labels:{padding:l}}}=this,a=this.legendHitBoxes=[],c=this.lineWidths=[0],u=s+l;let d=e;r.textAlign="left",r.textBaseline="middle";let h=-1,f=-u;return this.legendItems.forEach((m,y)=>{const x=i+n/2+r.measureText(m.text).width;(y===0||c[c.length-1]+x+2*l>o)&&(d+=u,c[c.length-(y>0?0:1)]=0,f+=u,h++),a[y]={left:0,top:f,row:h,width:x,height:s},c[c.length-1]+=x+l}),d}_fitCols(e,n,i,s){const{ctx:r,maxHeight:o,options:{labels:{padding:l}}}=this,a=this.legendHitBoxes=[],c=this.columnSizes=[],u=o-e;let d=l,h=0,f=0,m=0,y=0;return this.legendItems.forEach((x,g)=>{const{itemWidth:p,itemHeight:v}=Fk(i,n,r,x,s);g>0&&f+v+2*l>u&&(d+=h+l,c.push({width:h,height:f}),m+=h+l,y++,h=f=0),a[g]={left:m,top:f,col:y,width:p,height:v},h=Math.max(h,p),f+=v+l}),d+=h,c.push({width:h,height:f}),d}adjustHitBoxes(){if(!this.options.display)return;const e=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:i,labels:{padding:s},rtl:r}}=this,o=Ci(r,this.left,this.width);if(this.isHorizontal()){let l=0,a=Ce(i,this.left+s,this.right-this.lineWidths[l]);for(const c of n)l!==c.row&&(l=c.row,a=Ce(i,this.left+s,this.right-this.lineWidths[l])),c.top+=this.top+e+s,c.left=o.leftForLtr(o.x(a),c.width),a+=c.width+s}else{let l=0,a=Ce(i,this.top+e+s,this.bottom-this.columnSizes[l].height);for(const c of n)c.col!==l&&(l=c.col,a=Ce(i,this.top+e+s,this.bottom-this.columnSizes[l].height)),c.top=a,c.left+=this.left+s,c.left=o.leftForLtr(o.x(c.left),c.width),a+=c.height+s}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const e=this.ctx;qo(e,this),this._draw(),Jo(e)}}_draw(){const{options:e,columnSizes:n,lineWidths:i,ctx:s}=this,{align:r,labels:o}=e,l=ue.color,a=Ci(e.rtl,this.left,this.width),c=ge(o.font),{padding:u}=o,d=c.size,h=d/2;let f;this.drawTitle(),s.textAlign=a.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=c.string;const{boxWidth:m,boxHeight:y,itemHeight:x}=wh(o,d),g=function(S,b,E){if(isNaN(m)||m<=0||isNaN(y)||y<0)return;s.save();const D=z(E.lineWidth,1);if(s.fillStyle=z(E.fillStyle,l),s.lineCap=z(E.lineCap,"butt"),s.lineDashOffset=z(E.lineDashOffset,0),s.lineJoin=z(E.lineJoin,"miter"),s.lineWidth=D,s.strokeStyle=z(E.strokeStyle,l),s.setLineDash(z(E.lineDash,[])),o.usePointStyle){const T={radius:y*Math.SQRT2/2,pointStyle:E.pointStyle,rotation:E.rotation,borderWidth:D},R=a.xPlus(S,m/2),I=b+h;gg(s,T,R,I,o.pointStyleWidth&&m)}else{const T=b+Math.max((d-y)/2,0),R=a.leftForLtr(S,m),I=Yn(E.borderRadius);s.beginPath(),Object.values(I).some(ie=>ie!==0)?Us(s,{x:R,y:T,w:m,h:y,radius:I}):s.rect(R,T,m,y),s.fill(),D!==0&&s.stroke()}s.restore()},p=function(S,b,E){ei(s,E.text,S,b+x/2,c,{strikethrough:E.hidden,textAlign:a.textAlign(E.textAlign)})},v=this.isHorizontal(),k=this._computeTitleHeight();v?f={x:Ce(r,this.left+u,this.right-i[0]),y:this.top+u+k,line:0}:f={x:this.left+u,y:Ce(r,this.top+k+u,this.bottom-n[0].height),line:0},bg(this.ctx,e.textDirection);const w=x+u;this.legendItems.forEach((S,b)=>{s.strokeStyle=S.fontColor,s.fillStyle=S.fontColor;const E=s.measureText(S.text).width,D=a.textAlign(S.textAlign||(S.textAlign=o.textAlign)),T=m+h+E;let R=f.x,I=f.y;a.setWidth(this.width),v?b>0&&R+T+u>this.right&&(I=f.y+=w,f.line++,R=f.x=Ce(r,this.left+u,this.right-i[f.line])):b>0&&I+w>this.bottom&&(R=f.x=R+n[f.line].width+u,f.line++,I=f.y=Ce(r,this.top+k+u,this.bottom-n[f.line].height));const ie=a.x(R);if(g(ie,I,S),R=r_(D,R+m+h,v?R+T:this.right,e.rtl),p(a.x(R),I,S),v)f.x+=T+u;else if(typeof S.text!="string"){const Se=c.lineHeight;f.y+=Qg(S,Se)}else f.y+=w}),Eg(this.ctx,e.textDirection)}drawTitle(){const e=this.options,n=e.title,i=ge(n.font),s=De(n.padding);if(!n.display)return;const r=Ci(e.rtl,this.left,this.width),o=this.ctx,l=n.position,a=i.size/2,c=s.top+a;let u,d=this.left,h=this.width;if(this.isHorizontal())h=Math.max(...this.lineWidths),u=this.top+c,d=Ce(e.align,d,this.right-h);else{const m=this.columnSizes.reduce((y,x)=>Math.max(y,x.height),0);u=c+Ce(e.align,this.top,this.bottom-m-e.labels.padding-this._computeTitleHeight())}const f=Ce(l,d,d+h);o.textAlign=r.textAlign(Gc(l)),o.textBaseline="middle",o.strokeStyle=n.color,o.fillStyle=n.color,o.font=i.string,ei(o,n.text,f,u,i)}_computeTitleHeight(){const e=this.options.title,n=ge(e.font),i=De(e.padding);return e.display?n.lineHeight+i.height:0}_getLegendItemAt(e,n){let i,s,r;if(Ht(e,this.left,this.right)&&Ht(n,this.top,this.bottom)){for(r=this.legendHitBoxes,i=0;i<r.length;++i)if(s=r[i],Ht(e,s.left,s.left+s.width)&&Ht(n,s.top,s.top+s.height))return this.legendItems[i]}return null}handleEvent(e){const n=this.options;if(!Vk(e.type,n))return;const i=this._getLegendItemAt(e.x,e.y);if(e.type==="mousemove"||e.type==="mouseout"){const s=this._hoveredItem,r=Ik(s,i);s&&!r&&X(n.onLeave,[e,s,this],this),this._hoveredItem=i,i&&!r&&X(n.onHover,[e,i,this],this)}else i&&X(n.onClick,[e,i,this],this)}}function Fk(t,e,n,i,s){const r=jk(i,t,e,n),o=Bk(s,i,e.lineHeight);return{itemWidth:r,itemHeight:o}}function jk(t,e,n,i){let s=t.text;return s&&typeof s!="string"&&(s=s.reduce((r,o)=>r.length>o.length?r:o)),e+n.size/2+i.measureText(s).width}function Bk(t,e,n){let i=t;return typeof e.text!="string"&&(i=Qg(e,n)),i}function Qg(t,e){const n=t.text?t.text.length+.5:0;return e*n}function Vk(t,e){return!!((t==="mousemove"||t==="mouseout")&&(e.onHover||e.onLeave)||e.onClick&&(t==="click"||t==="mouseup"))}var Hk={id:"legend",_element:Sh,start(t,e,n){const i=t.legend=new Sh({ctx:t.ctx,options:n,chart:t});Pe.configure(t,i,n),Pe.addBox(t,i)},stop(t){Pe.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,n){const i=t.legend;Pe.configure(t,i,n),i.options=n},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,n){const i=e.datasetIndex,s=n.chart;s.isDatasetVisible(i)?(s.hide(i),e.hidden=!0):(s.show(i),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:n,pointStyle:i,textAlign:s,color:r,useBorderRadius:o,borderRadius:l}}=t.legend.options;return t._getSortedDatasetMetas().map(a=>{const c=a.controller.getStyle(n?0:void 0),u=De(c.borderWidth);return{text:e[a.index].label,fillStyle:c.backgroundColor,fontColor:r,hidden:!a.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(u.width+u.height)/4,strokeStyle:c.borderColor,pointStyle:i||c.pointStyle,rotation:c.rotation,textAlign:s||c.textAlign,borderRadius:o&&(l||c.borderRadius),datasetIndex:a.index}},this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class ru extends _t{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n){const i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=e,this.height=this.bottom=n;const s=q(i.text)?i.text.length:1;this._padding=De(i.padding);const r=s*ge(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){const e=this.options.position;return e==="top"||e==="bottom"}_drawArgs(e){const{top:n,left:i,bottom:s,right:r,options:o}=this,l=o.align;let a=0,c,u,d;return this.isHorizontal()?(u=Ce(l,i,r),d=n+e,c=r-i):(o.position==="left"?(u=i+e,d=Ce(l,s,n),a=ne*-.5):(u=r-e,d=Ce(l,n,s),a=ne*.5),c=s-n),{titleX:u,titleY:d,maxWidth:c,rotation:a}}draw(){const e=this.ctx,n=this.options;if(!n.display)return;const i=ge(n.font),r=i.lineHeight/2+this._padding.top,{titleX:o,titleY:l,maxWidth:a,rotation:c}=this._drawArgs(r);ei(e,n.text,0,0,i,{color:n.color,maxWidth:a,rotation:c,textAlign:Gc(n.align),textBaseline:"middle",translation:[o,l]})}}function Wk(t,e){const n=new ru({ctx:t.ctx,options:e,chart:t});Pe.configure(t,n,e),Pe.addBox(t,n),t.titleBlock=n}var $k={id:"title",_element:ru,start(t,e,n){Wk(t,n)},stop(t){const e=t.titleBlock;Pe.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,n){const i=t.titleBlock;Pe.configure(t,i,n),i.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Lr=new WeakMap;var Uk={id:"subtitle",start(t,e,n){const i=new ru({ctx:t.ctx,options:n,chart:t});Pe.configure(t,i,n),Pe.addBox(t,i),Lr.set(t,i)},stop(t){Pe.removeBox(t,Lr.get(t)),Lr.delete(t)},beforeUpdate(t,e,n){const i=Lr.get(t);Pe.configure(t,i,n),i.options=n},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const ls={average(t){if(!t.length)return!1;let e,n,i=0,s=0,r=0;for(e=0,n=t.length;e<n;++e){const o=t[e].element;if(o&&o.hasValue()){const l=o.tooltipPosition();i+=l.x,s+=l.y,++r}}return{x:i/r,y:s/r}},nearest(t,e){if(!t.length)return!1;let n=e.x,i=e.y,s=Number.POSITIVE_INFINITY,r,o,l;for(r=0,o=t.length;r<o;++r){const a=t[r].element;if(a&&a.hasValue()){const c=a.getCenterPoint(),u=Aa(e,c);u<s&&(s=u,l=a)}}if(l){const a=l.tooltipPosition();n=a.x,i=a.y}return{x:n,y:i}}};function wt(t,e){return e&&(q(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function At(t) {
     return (typeof t == "string" || t instanceof String) &&
         t.indexOf(`
`) > -1
         ? t.split(`
`)
         : t;
 }
 function Yk(t, e) {
     const { element: n, datasetIndex: i, index: s } = e,
         r = t.getDatasetMeta(i).controller,
         { label: o, value: l } = r.getLabelAndValue(s);
     return {
         chart: t,
         label: o,
         parsed: r.getParsed(s),
         raw: t.data.datasets[i].data[s],
         formattedValue: l,
         dataset: r.getDataset(),
         dataIndex: s,
         datasetIndex: i,
         element: n,
     };
 }
 function bh(t, e) {
     const n = t.chart.ctx,
         { body: i, footer: s, title: r } = t,
         { boxWidth: o, boxHeight: l } = e,
         a = ge(e.bodyFont),
         c = ge(e.titleFont),
         u = ge(e.footerFont),
         d = r.length,
         h = s.length,
         f = i.length,
         m = De(e.padding);
     let y = m.height,
         x = 0,
         g = i.reduce(
             (k, w) => k + w.before.length + w.lines.length + w.after.length,
             0
         );
     if (
         ((g += t.beforeBody.length + t.afterBody.length),
         d &&
             (y +=
                 d * c.lineHeight +
                 (d - 1) * e.titleSpacing +
                 e.titleMarginBottom),
         g)
     ) {
         const k = e.displayColors ? Math.max(l, a.lineHeight) : a.lineHeight;
         y += f * k + (g - f) * a.lineHeight + (g - 1) * e.bodySpacing;
     }
     h &&
         (y +=
             e.footerMarginTop + h * u.lineHeight + (h - 1) * e.footerSpacing);
     let p = 0;
     const v = function (k) {
         x = Math.max(x, n.measureText(k).width + p);
     };
     return (
         n.save(),
         (n.font = c.string),
         W(t.title, v),
         (n.font = a.string),
         W(t.beforeBody.concat(t.afterBody), v),
         (p = e.displayColors ? o + 2 + e.boxPadding : 0),
         W(i, (k) => {
             W(k.before, v), W(k.lines, v), W(k.after, v);
         }),
         (p = 0),
         (n.font = u.string),
         W(t.footer, v),
         n.restore(),
         (x += m.width),
         { width: x, height: y }
     );
 }
 function Xk(t, e) {
     const { y: n, height: i } = e;
     return n < i / 2 ? "top" : n > t.height - i / 2 ? "bottom" : "center";
 }
 function Kk(t, e, n, i) {
     const { x: s, width: r } = i,
         o = n.caretSize + n.caretPadding;
     if (
         (t === "left" && s + r + o > e.width) ||
         (t === "right" && s - r - o < 0)
     )
         return !0;
 }
 function Qk(t, e, n, i) {
     const { x: s, width: r } = n,
         {
             width: o,
             chartArea: { left: l, right: a },
         } = t;
     let c = "center";
     return (
         i === "center"
             ? (c = s <= (l + a) / 2 ? "left" : "right")
             : s <= r / 2
             ? (c = "left")
             : s >= o - r / 2 && (c = "right"),
         Kk(c, t, e, n) && (c = "center"),
         c
     );
 }
 function Eh(t, e, n) {
     const i = n.yAlign || e.yAlign || Xk(t, n);
     return { xAlign: n.xAlign || e.xAlign || Qk(t, e, n, i), yAlign: i };
 }
 function Gk(t, e) {
     let { x: n, width: i } = t;
     return e === "right" ? (n -= i) : e === "center" && (n -= i / 2), n;
 }
 function Zk(t, e, n) {
     let { y: i, height: s } = t;
     return (
         e === "top" ? (i += n) : e === "bottom" ? (i -= s + n) : (i -= s / 2),
         i
     );
 }
 function Ch(t, e, n, i) {
     const { caretSize: s, caretPadding: r, cornerRadius: o } = t,
         { xAlign: l, yAlign: a } = n,
         c = s + r,
         { topLeft: u, topRight: d, bottomLeft: h, bottomRight: f } = Yn(o);
     let m = Gk(e, l);
     const y = Zk(e, a, c);
     return (
         a === "center"
             ? l === "left"
                 ? (m += c)
                 : l === "right" && (m -= c)
             : l === "left"
             ? (m -= Math.max(u, h) + s)
             : l === "right" && (m += Math.max(d, f) + s),
         { x: ve(m, 0, i.width - e.width), y: ve(y, 0, i.height - e.height) }
     );
 }
 function Rr(t, e, n) {
     const i = De(n.padding);
     return e === "center"
         ? t.x + t.width / 2
         : e === "right"
         ? t.x + t.width - i.right
         : t.x + i.left;
 }
 function Mh(t) {
     return wt([], At(t));
 }
 function qk(t, e, n) {
     return Dn(t, { tooltip: e, tooltipItems: n, type: "tooltip" });
 }
 function Ph(t, e) {
     const n =
         e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
     return n ? t.override(n) : t;
 }
 const Gg = {
     beforeTitle: Lt,
     title(t) {
         if (t.length > 0) {
             const e = t[0],
                 n = e.chart.data.labels,
                 i = n ? n.length : 0;
             if (this && this.options && this.options.mode === "dataset")
                 return e.dataset.label || "";
             if (e.label) return e.label;
             if (i > 0 && e.dataIndex < i) return n[e.dataIndex];
         }
         return "";
     },
     afterTitle: Lt,
     beforeBody: Lt,
     beforeLabel: Lt,
     label(t) {
         if (this && this.options && this.options.mode === "dataset")
             return t.label + ": " + t.formattedValue || t.formattedValue;
         let e = t.dataset.label || "";
         e && (e += ": ");
         const n = t.formattedValue;
         return V(n) || (e += n), e;
     },
     labelColor(t) {
         const n = t.chart
             .getDatasetMeta(t.datasetIndex)
             .controller.getStyle(t.dataIndex);
         return {
             borderColor: n.borderColor,
             backgroundColor: n.backgroundColor,
             borderWidth: n.borderWidth,
             borderDash: n.borderDash,
             borderDashOffset: n.borderDashOffset,
             borderRadius: 0,
         };
     },
     labelTextColor() {
         return this.options.bodyColor;
     },
     labelPointStyle(t) {
         const n = t.chart
             .getDatasetMeta(t.datasetIndex)
             .controller.getStyle(t.dataIndex);
         return { pointStyle: n.pointStyle, rotation: n.rotation };
     },
     afterLabel: Lt,
     afterBody: Lt,
     beforeFooter: Lt,
     footer: Lt,
     afterFooter: Lt,
 };
 function ze(t, e, n, i) {
     const s = t[e].call(n, i);
     return typeof s > "u" ? Gg[e].call(n, i) : s;
 }
 class $a extends _t {
     constructor(e) {
         super(),
             (this.opacity = 0),
             (this._active = []),
             (this._eventPosition = void 0),
             (this._size = void 0),
             (this._cachedAnimations = void 0),
             (this._tooltipItems = []),
             (this.$animations = void 0),
             (this.$context = void 0),
             (this.chart = e.chart),
             (this.options = e.options),
             (this.dataPoints = void 0),
             (this.title = void 0),
             (this.beforeBody = void 0),
             (this.body = void 0),
             (this.afterBody = void 0),
             (this.footer = void 0),
             (this.xAlign = void 0),
             (this.yAlign = void 0),
             (this.x = void 0),
             (this.y = void 0),
             (this.height = void 0),
             (this.width = void 0),
             (this.caretX = void 0),
             (this.caretY = void 0),
             (this.labelColors = void 0),
             (this.labelPointStyles = void 0),
             (this.labelTextColors = void 0);
     }
     initialize(e) {
         (this.options = e),
             (this._cachedAnimations = void 0),
             (this.$context = void 0);
     }
     _resolveAnimations() {
         const e = this._cachedAnimations;
         if (e) return e;
         const n = this.chart,
             i = this.options.setContext(this.getContext()),
             s = i.enabled && n.options.animation && i.animations,
             r = new Tg(this.chart, s);
         return s._cacheable && (this._cachedAnimations = Object.freeze(r)), r;
     }
     getContext() {
         return (
             this.$context ||
             (this.$context = qk(
                 this.chart.getContext(),
                 this,
                 this._tooltipItems
             ))
         );
     }
     getTitle(e, n) {
         const { callbacks: i } = n,
             s = ze(i, "beforeTitle", this, e),
             r = ze(i, "title", this, e),
             o = ze(i, "afterTitle", this, e);
         let l = [];
         return (l = wt(l, At(s))), (l = wt(l, At(r))), (l = wt(l, At(o))), l;
     }
     getBeforeBody(e, n) {
         return Mh(ze(n.callbacks, "beforeBody", this, e));
     }
     getBody(e, n) {
         const { callbacks: i } = n,
             s = [];
         return (
             W(e, (r) => {
                 const o = { before: [], lines: [], after: [] },
                     l = Ph(i, r);
                 wt(o.before, At(ze(l, "beforeLabel", this, r))),
                     wt(o.lines, ze(l, "label", this, r)),
                     wt(o.after, At(ze(l, "afterLabel", this, r))),
                     s.push(o);
             }),
             s
         );
     }
     getAfterBody(e, n) {
         return Mh(ze(n.callbacks, "afterBody", this, e));
     }
     getFooter(e, n) {
         const { callbacks: i } = n,
             s = ze(i, "beforeFooter", this, e),
             r = ze(i, "footer", this, e),
             o = ze(i, "afterFooter", this, e);
         let l = [];
         return (l = wt(l, At(s))), (l = wt(l, At(r))), (l = wt(l, At(o))), l;
     }
     _createItems(e) {
         const n = this._active,
             i = this.chart.data,
             s = [],
             r = [],
             o = [];
         let l = [],
             a,
             c;
         for (a = 0, c = n.length; a < c; ++a) l.push(Yk(this.chart, n[a]));
         return (
             e.filter && (l = l.filter((u, d, h) => e.filter(u, d, h, i))),
             e.itemSort && (l = l.sort((u, d) => e.itemSort(u, d, i))),
             W(l, (u) => {
                 const d = Ph(e.callbacks, u);
                 s.push(ze(d, "labelColor", this, u)),
                     r.push(ze(d, "labelPointStyle", this, u)),
                     o.push(ze(d, "labelTextColor", this, u));
             }),
             (this.labelColors = s),
             (this.labelPointStyles = r),
             (this.labelTextColors = o),
             (this.dataPoints = l),
             l
         );
     }
     update(e, n) {
         const i = this.options.setContext(this.getContext()),
             s = this._active;
         let r,
             o = [];
         if (!s.length) this.opacity !== 0 && (r = { opacity: 0 });
         else {
             const l = ls[i.position].call(this, s, this._eventPosition);
             (o = this._createItems(i)),
                 (this.title = this.getTitle(o, i)),
                 (this.beforeBody = this.getBeforeBody(o, i)),
                 (this.body = this.getBody(o, i)),
                 (this.afterBody = this.getAfterBody(o, i)),
                 (this.footer = this.getFooter(o, i));
             const a = (this._size = bh(this, i)),
                 c = Object.assign({}, l, a),
                 u = Eh(this.chart, i, c),
                 d = Ch(i, c, u, this.chart);
             (this.xAlign = u.xAlign),
                 (this.yAlign = u.yAlign),
                 (r = {
                     opacity: 1,
                     x: d.x,
                     y: d.y,
                     width: a.width,
                     height: a.height,
                     caretX: l.x,
                     caretY: l.y,
                 });
         }
         (this._tooltipItems = o),
             (this.$context = void 0),
             r && this._resolveAnimations().update(this, r),
             e &&
                 i.external &&
                 i.external.call(this, {
                     chart: this.chart,
                     tooltip: this,
                     replay: n,
                 });
     }
     drawCaret(e, n, i, s) {
         const r = this.getCaretPosition(e, i, s);
         n.lineTo(r.x1, r.y1), n.lineTo(r.x2, r.y2), n.lineTo(r.x3, r.y3);
     }
     getCaretPosition(e, n, i) {
         const { xAlign: s, yAlign: r } = this,
             { caretSize: o, cornerRadius: l } = i,
             { topLeft: a, topRight: c, bottomLeft: u, bottomRight: d } = Yn(l),
             { x: h, y: f } = e,
             { width: m, height: y } = n;
         let x, g, p, v, k, w;
         return (
             r === "center"
                 ? ((k = f + y / 2),
                   s === "left"
                       ? ((x = h), (g = x - o), (v = k + o), (w = k - o))
                       : ((x = h + m), (g = x + o), (v = k - o), (w = k + o)),
                   (p = x))
                 : (s === "left"
                       ? (g = h + Math.max(a, u) + o)
                       : s === "right"
                       ? (g = h + m - Math.max(c, d) - o)
                       : (g = this.caretX),
                   r === "top"
                       ? ((v = f), (k = v - o), (x = g - o), (p = g + o))
                       : ((v = f + y), (k = v + o), (x = g + o), (p = g - o)),
                   (w = v)),
             { x1: x, x2: g, x3: p, y1: v, y2: k, y3: w }
         );
     }
     drawTitle(e, n, i) {
         const s = this.title,
             r = s.length;
         let o, l, a;
         if (r) {
             const c = Ci(i.rtl, this.x, this.width);
             for (
                 e.x = Rr(this, i.titleAlign, i),
                     n.textAlign = c.textAlign(i.titleAlign),
                     n.textBaseline = "middle",
                     o = ge(i.titleFont),
                     l = i.titleSpacing,
                     n.fillStyle = i.titleColor,
                     n.font = o.string,
                     a = 0;
                 a < r;
                 ++a
             )
                 n.fillText(s[a], c.x(e.x), e.y + o.lineHeight / 2),
                     (e.y += o.lineHeight + l),
                     a + 1 === r && (e.y += i.titleMarginBottom - l);
         }
     }
     _drawColorBox(e, n, i, s, r) {
         const o = this.labelColors[i],
             l = this.labelPointStyles[i],
             { boxHeight: a, boxWidth: c } = r,
             u = ge(r.bodyFont),
             d = Rr(this, "left", r),
             h = s.x(d),
             f = a < u.lineHeight ? (u.lineHeight - a) / 2 : 0,
             m = n.y + f;
         if (r.usePointStyle) {
             const y = {
                     radius: Math.min(c, a) / 2,
                     pointStyle: l.pointStyle,
                     rotation: l.rotation,
                     borderWidth: 1,
                 },
                 x = s.leftForLtr(h, c) + c / 2,
                 g = m + a / 2;
             (e.strokeStyle = r.multiKeyBackground),
                 (e.fillStyle = r.multiKeyBackground),
                 Ia(e, y, x, g),
                 (e.strokeStyle = o.borderColor),
                 (e.fillStyle = o.backgroundColor),
                 Ia(e, y, x, g);
         } else {
             (e.lineWidth = F(o.borderWidth)
                 ? Math.max(...Object.values(o.borderWidth))
                 : o.borderWidth || 1),
                 (e.strokeStyle = o.borderColor),
                 e.setLineDash(o.borderDash || []),
                 (e.lineDashOffset = o.borderDashOffset || 0);
             const y = s.leftForLtr(h, c),
                 x = s.leftForLtr(s.xPlus(h, 1), c - 2),
                 g = Yn(o.borderRadius);
             Object.values(g).some((p) => p !== 0)
                 ? (e.beginPath(),
                   (e.fillStyle = r.multiKeyBackground),
                   Us(e, { x: y, y: m, w: c, h: a, radius: g }),
                   e.fill(),
                   e.stroke(),
                   (e.fillStyle = o.backgroundColor),
                   e.beginPath(),
                   Us(e, { x, y: m + 1, w: c - 2, h: a - 2, radius: g }),
                   e.fill())
                 : ((e.fillStyle = r.multiKeyBackground),
                   e.fillRect(y, m, c, a),
                   e.strokeRect(y, m, c, a),
                   (e.fillStyle = o.backgroundColor),
                   e.fillRect(x, m + 1, c - 2, a - 2));
         }
         e.fillStyle = this.labelTextColors[i];
     }
     drawBody(e, n, i) {
         const { body: s } = this,
             {
                 bodySpacing: r,
                 bodyAlign: o,
                 displayColors: l,
                 boxHeight: a,
                 boxWidth: c,
                 boxPadding: u,
             } = i,
             d = ge(i.bodyFont);
         let h = d.lineHeight,
             f = 0;
         const m = Ci(i.rtl, this.x, this.width),
             y = function (E) {
                 n.fillText(E, m.x(e.x + f), e.y + h / 2), (e.y += h + r);
             },
             x = m.textAlign(o);
         let g, p, v, k, w, S, b;
         for (
             n.textAlign = o,
                 n.textBaseline = "middle",
                 n.font = d.string,
                 e.x = Rr(this, x, i),
                 n.fillStyle = i.bodyColor,
                 W(this.beforeBody, y),
                 f =
                     l && x !== "right"
                         ? o === "center"
                             ? c / 2 + u
                             : c + 2 + u
                         : 0,
                 k = 0,
                 S = s.length;
             k < S;
             ++k
         ) {
             for (
                 g = s[k],
                     p = this.labelTextColors[k],
                     n.fillStyle = p,
                     W(g.before, y),
                     v = g.lines,
                     l &&
                         v.length &&
                         (this._drawColorBox(n, e, k, m, i),
                         (h = Math.max(d.lineHeight, a))),
                     w = 0,
                     b = v.length;
                 w < b;
                 ++w
             )
                 y(v[w]), (h = d.lineHeight);
             W(g.after, y);
         }
         (f = 0), (h = d.lineHeight), W(this.afterBody, y), (e.y -= r);
     }
     drawFooter(e, n, i) {
         const s = this.footer,
             r = s.length;
         let o, l;
         if (r) {
             const a = Ci(i.rtl, this.x, this.width);
             for (
                 e.x = Rr(this, i.footerAlign, i),
                     e.y += i.footerMarginTop,
                     n.textAlign = a.textAlign(i.footerAlign),
                     n.textBaseline = "middle",
                     o = ge(i.footerFont),
                     n.fillStyle = i.footerColor,
                     n.font = o.string,
                     l = 0;
                 l < r;
                 ++l
             )
                 n.fillText(s[l], a.x(e.x), e.y + o.lineHeight / 2),
                     (e.y += o.lineHeight + i.footerSpacing);
         }
     }
     drawBackground(e, n, i, s) {
         const { xAlign: r, yAlign: o } = this,
             { x: l, y: a } = e,
             { width: c, height: u } = i,
             {
                 topLeft: d,
                 topRight: h,
                 bottomLeft: f,
                 bottomRight: m,
             } = Yn(s.cornerRadius);
         (n.fillStyle = s.backgroundColor),
             (n.strokeStyle = s.borderColor),
             (n.lineWidth = s.borderWidth),
             n.beginPath(),
             n.moveTo(l + d, a),
             o === "top" && this.drawCaret(e, n, i, s),
             n.lineTo(l + c - h, a),
             n.quadraticCurveTo(l + c, a, l + c, a + h),
             o === "center" && r === "right" && this.drawCaret(e, n, i, s),
             n.lineTo(l + c, a + u - m),
             n.quadraticCurveTo(l + c, a + u, l + c - m, a + u),
             o === "bottom" && this.drawCaret(e, n, i, s),
             n.lineTo(l + f, a + u),
             n.quadraticCurveTo(l, a + u, l, a + u - f),
             o === "center" && r === "left" && this.drawCaret(e, n, i, s),
             n.lineTo(l, a + d),
             n.quadraticCurveTo(l, a, l + d, a),
             n.closePath(),
             n.fill(),
             s.borderWidth > 0 && n.stroke();
     }
     _updateAnimationTarget(e) {
         const n = this.chart,
             i = this.$animations,
             s = i && i.x,
             r = i && i.y;
         if (s || r) {
             const o = ls[e.position].call(
                 this,
                 this._active,
                 this._eventPosition
             );
             if (!o) return;
             const l = (this._size = bh(this, e)),
                 a = Object.assign({}, o, this._size),
                 c = Eh(n, e, a),
                 u = Ch(e, a, c, n);
             (s._to !== u.x || r._to !== u.y) &&
                 ((this.xAlign = c.xAlign),
                 (this.yAlign = c.yAlign),
                 (this.width = l.width),
                 (this.height = l.height),
                 (this.caretX = o.x),
                 (this.caretY = o.y),
                 this._resolveAnimations().update(this, u));
         }
     }
     _willRender() {
         return !!this.opacity;
     }
     draw(e) {
         const n = this.options.setContext(this.getContext());
         let i = this.opacity;
         if (!i) return;
         this._updateAnimationTarget(n);
         const s = { width: this.width, height: this.height },
             r = { x: this.x, y: this.y };
         i = Math.abs(i) < 0.001 ? 0 : i;
         const o = De(n.padding),
             l =
                 this.title.length ||
                 this.beforeBody.length ||
                 this.body.length ||
                 this.afterBody.length ||
                 this.footer.length;
         n.enabled &&
             l &&
             (e.save(),
             (e.globalAlpha = i),
             this.drawBackground(r, e, s, n),
             bg(e, n.textDirection),
             (r.y += o.top),
             this.drawTitle(r, e, n),
             this.drawBody(r, e, n),
             this.drawFooter(r, e, n),
             Eg(e, n.textDirection),
             e.restore());
     }
     getActiveElements() {
         return this._active || [];
     }
     setActiveElements(e, n) {
         const i = this._active,
             s = e.map(({ datasetIndex: l, index: a }) => {
                 const c = this.chart.getDatasetMeta(l);
                 if (!c) throw new Error("Cannot find a dataset at index " + l);
                 return { datasetIndex: l, element: c.data[a], index: a };
             }),
             r = !Po(i, s),
             o = this._positionChanged(s, n);
         (r || o) &&
             ((this._active = s),
             (this._eventPosition = n),
             (this._ignoreReplayEvents = !0),
             this.update(!0));
     }
     handleEvent(e, n, i = !0) {
         if (n && this._ignoreReplayEvents) return !1;
         this._ignoreReplayEvents = !1;
         const s = this.options,
             r = this._active || [],
             o = this._getActiveElements(e, r, n, i),
             l = this._positionChanged(o, e),
             a = n || !Po(o, r) || l;
         return (
             a &&
                 ((this._active = o),
                 (s.enabled || s.external) &&
                     ((this._eventPosition = { x: e.x, y: e.y }),
                     this.update(!0, n))),
             a
         );
     }
     _getActiveElements(e, n, i, s) {
         const r = this.options;
         if (e.type === "mouseout") return [];
         if (!s) return n;
         const o = this.chart.getElementsAtEventForMode(e, r.mode, r, i);
         return r.reverse && o.reverse(), o;
     }
     _positionChanged(e, n) {
         const { caretX: i, caretY: s, options: r } = this,
             o = ls[r.position].call(this, e, n);
         return o !== !1 && (i !== o.x || s !== o.y);
     }
 }
 M($a, "positioners", ls);
 var Jk = {
         id: "tooltip",
         _element: $a,
         positioners: ls,
         afterInit(t, e, n) {
             n && (t.tooltip = new $a({ chart: t, options: n }));
         },
         beforeUpdate(t, e, n) {
             t.tooltip && t.tooltip.initialize(n);
         },
         reset(t, e, n) {
             t.tooltip && t.tooltip.initialize(n);
         },
         afterDraw(t) {
             const e = t.tooltip;
             if (e && e._willRender()) {
                 const n = { tooltip: e };
                 if (
                     t.notifyPlugins("beforeTooltipDraw", {
                         ...n,
                         cancelable: !0,
                     }) === !1
                 )
                     return;
                 e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", n);
             }
         },
         afterEvent(t, e) {
             if (t.tooltip) {
                 const n = e.replay;
                 t.tooltip.handleEvent(e.event, n, e.inChartArea) &&
                     (e.changed = !0);
             }
         },
         defaults: {
             enabled: !0,
             external: null,
             position: "average",
             backgroundColor: "rgba(0,0,0,0.8)",
             titleColor: "#fff",
             titleFont: { weight: "bold" },
             titleSpacing: 2,
             titleMarginBottom: 6,
             titleAlign: "left",
             bodyColor: "#fff",
             bodySpacing: 2,
             bodyFont: {},
             bodyAlign: "left",
             footerColor: "#fff",
             footerSpacing: 2,
             footerMarginTop: 6,
             footerFont: { weight: "bold" },
             footerAlign: "left",
             padding: 6,
             caretPadding: 2,
             caretSize: 5,
             cornerRadius: 6,
             boxHeight: (t, e) => e.bodyFont.size,
             boxWidth: (t, e) => e.bodyFont.size,
             multiKeyBackground: "#fff",
             displayColors: !0,
             boxPadding: 0,
             borderColor: "rgba(0,0,0,0)",
             borderWidth: 0,
             animation: { duration: 400, easing: "easeOutQuart" },
             animations: {
                 numbers: {
                     type: "number",
                     properties: [
                         "x",
                         "y",
                         "width",
                         "height",
                         "caretX",
                         "caretY",
                     ],
                 },
                 opacity: { easing: "linear", duration: 200 },
             },
             callbacks: Gg,
         },
         defaultRoutes: {
             bodyFont: "font",
             footerFont: "font",
             titleFont: "font",
         },
         descriptors: {
             _scriptable: (t) =>
                 t !== "filter" && t !== "itemSort" && t !== "external",
             _indexable: !1,
             callbacks: { _scriptable: !1, _indexable: !1 },
             animation: { _fallback: !1 },
             animations: { _fallback: "animation" },
         },
         additionalOptionScopes: ["interaction"],
     },
     ew = Object.freeze({
         __proto__: null,
         Colors: hk,
         Decimation: mk,
         Filler: zk,
         Legend: Hk,
         SubTitle: Uk,
         Title: $k,
         Tooltip: Jk,
     });
 const tw = (t, e, n, i) => (
     typeof e == "string"
         ? ((n = t.push(e) - 1), i.unshift({ index: n, label: e }))
         : isNaN(e) && (n = null),
     n
 );
 function nw(t, e, n, i) {
     const s = t.indexOf(e);
     if (s === -1) return tw(t, e, n, i);
     const r = t.lastIndexOf(e);
     return s !== r ? n : s;
 }
 const iw = (t, e) => (t === null ? null : ve(Math.round(t), 0, e));
 function Th(t) {
     const e = this.getLabels();
     return t >= 0 && t < e.length ? e[t] : t;
 }
 class Ua extends ii {
     constructor(e) {
         super(e),
             (this._startValue = void 0),
             (this._valueRange = 0),
             (this._addedLabels = []);
     }
     init(e) {
         const n = this._addedLabels;
         if (n.length) {
             const i = this.getLabels();
             for (const { index: s, label: r } of n)
                 i[s] === r && i.splice(s, 1);
             this._addedLabels = [];
         }
         super.init(e);
     }
     parse(e, n) {
         if (V(e)) return null;
         const i = this.getLabels();
         return (
             (n =
                 isFinite(n) && i[n] === e
                     ? n
                     : nw(i, e, z(n, e), this._addedLabels)),
             iw(n, i.length - 1)
         );
     }
     determineDataLimits() {
         const { minDefined: e, maxDefined: n } = this.getUserBounds();
         let { min: i, max: s } = this.getMinMax(!0);
         this.options.bounds === "ticks" &&
             (e || (i = 0), n || (s = this.getLabels().length - 1)),
             (this.min = i),
             (this.max = s);
     }
     buildTicks() {
         const e = this.min,
             n = this.max,
             i = this.options.offset,
             s = [];
         let r = this.getLabels();
         (r = e === 0 && n === r.length - 1 ? r : r.slice(e, n + 1)),
             (this._valueRange = Math.max(r.length - (i ? 0 : 1), 1)),
             (this._startValue = this.min - (i ? 0.5 : 0));
         for (let o = e; o <= n; o++) s.push({ value: o });
         return s;
     }
     getLabelForValue(e) {
         return Th.call(this, e);
     }
     configure() {
         super.configure(),
             this.isHorizontal() ||
                 (this._reversePixels = !this._reversePixels);
     }
     getPixelForValue(e) {
         return (
             typeof e != "number" && (e = this.parse(e)),
             e === null
                 ? NaN
                 : this.getPixelForDecimal(
                       (e - this._startValue) / this._valueRange
                   )
         );
     }
     getPixelForTick(e) {
         const n = this.ticks;
         return e < 0 || e > n.length - 1
             ? null
             : this.getPixelForValue(n[e].value);
     }
     getValueForPixel(e) {
         return Math.round(
             this._startValue + this.getDecimalForPixel(e) * this._valueRange
         );
     }
     getBasePixel() {
         return this.bottom;
     }
 }
 M(Ua, "id", "category"), M(Ua, "defaults", { ticks: { callback: Th } });
 function sw(t, e) {
     const n = [],
         {
             bounds: s,
             step: r,
             min: o,
             max: l,
             precision: a,
             count: c,
             maxTicks: u,
             maxDigits: d,
             includeBounds: h,
         } = t,
         f = r || 1,
         m = u - 1,
         { min: y, max: x } = e,
         g = !V(o),
         p = !V(l),
         v = !V(c),
         k = (x - y) / (d + 1);
     let w = Sd((x - y) / m / f) * f,
         S,
         b,
         E,
         D;
     if (w < 1e-14 && !g && !p) return [{ value: y }, { value: x }];
     (D = Math.ceil(x / w) - Math.floor(y / w)),
         D > m && (w = Sd((D * w) / m / f) * f),
         V(a) || ((S = Math.pow(10, a)), (w = Math.ceil(w * S) / S)),
         s === "ticks"
             ? ((b = Math.floor(y / w) * w), (E = Math.ceil(x / w) * w))
             : ((b = y), (E = x)),
         g && p && r && qv((l - o) / r, w / 1e3)
             ? ((D = Math.round(Math.min((l - o) / w, u))),
               (w = (l - o) / D),
               (b = o),
               (E = l))
             : v
             ? ((b = g ? o : b),
               (E = p ? l : E),
               (D = c - 1),
               (w = (E - b) / D))
             : ((D = (E - b) / w),
               _s(D, Math.round(D), w / 1e3)
                   ? (D = Math.round(D))
                   : (D = Math.ceil(D)));
     const T = Math.max(bd(w), bd(b));
     (S = Math.pow(10, V(a) ? T : a)),
         (b = Math.round(b * S) / S),
         (E = Math.round(E * S) / S);
     let R = 0;
     for (
         g &&
         (h && b !== o
             ? (n.push({ value: o }),
               b < o && R++,
               _s(Math.round((b + R * w) * S) / S, o, Dh(o, k, t)) && R++)
             : b < o && R++);
         R < D;
         ++R
     ) {
         const I = Math.round((b + R * w) * S) / S;
         if (p && I > l) break;
         n.push({ value: I });
     }
     return (
         p && h && E !== l
             ? n.length && _s(n[n.length - 1].value, l, Dh(l, k, t))
                 ? (n[n.length - 1].value = l)
                 : n.push({ value: l })
             : (!p || E === l) && n.push({ value: E }),
         n
     );
 }
 function Dh(t, e, { horizontal: n, minRotation: i }) {
     const s = pt(i),
         r = (n ? Math.sin(s) : Math.cos(s)) || 0.001,
         o = 0.75 * e * ("" + t).length;
     return Math.min(e / r, o);
 }
 class Ao extends ii {
     constructor(e) {
         super(e),
             (this.start = void 0),
             (this.end = void 0),
             (this._startValue = void 0),
             (this._endValue = void 0),
             (this._valueRange = 0);
     }
     parse(e, n) {
         return V(e) ||
             ((typeof e == "number" || e instanceof Number) && !isFinite(+e))
             ? null
             : +e;
     }
     handleTickRangeOptions() {
         const { beginAtZero: e } = this.options,
             { minDefined: n, maxDefined: i } = this.getUserBounds();
         let { min: s, max: r } = this;
         const o = (a) => (s = n ? s : a),
             l = (a) => (r = i ? r : a);
         if (e) {
             const a = Pt(s),
                 c = Pt(r);
             a < 0 && c < 0 ? l(0) : a > 0 && c > 0 && o(0);
         }
         if (s === r) {
             let a = r === 0 ? 1 : Math.abs(r * 0.05);
             l(r + a), e || o(s - a);
         }
         (this.min = s), (this.max = r);
     }
     getTickLimit() {
         const e = this.options.ticks;
         let { maxTicksLimit: n, stepSize: i } = e,
             s;
         return (
             i
                 ? ((s =
                       Math.ceil(this.max / i) - Math.floor(this.min / i) + 1),
                   s > 1e3 &&
                       (console.warn(
                           `scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${s} ticks. Limiting to 1000.`
                       ),
                       (s = 1e3)))
                 : ((s = this.computeTickLimit()), (n = n || 11)),
             n && (s = Math.min(n, s)),
             s
         );
     }
     computeTickLimit() {
         return Number.POSITIVE_INFINITY;
     }
     buildTicks() {
         const e = this.options,
             n = e.ticks;
         let i = this.getTickLimit();
         i = Math.max(2, i);
         const s = {
                 maxTicks: i,
                 bounds: e.bounds,
                 min: e.min,
                 max: e.max,
                 precision: n.precision,
                 step: n.stepSize,
                 count: n.count,
                 maxDigits: this._maxDigits(),
                 horizontal: this.isHorizontal(),
                 minRotation: n.minRotation || 0,
                 includeBounds: n.includeBounds !== !1,
             },
             r = this._range || this,
             o = sw(s, r);
         return (
             e.bounds === "ticks" && og(o, this, "value"),
             e.reverse
                 ? (o.reverse(), (this.start = this.max), (this.end = this.min))
                 : ((this.start = this.min), (this.end = this.max)),
             o
         );
     }
     configure() {
         const e = this.ticks;
         let n = this.min,
             i = this.max;
         if ((super.configure(), this.options.offset && e.length)) {
             const s = (i - n) / Math.max(e.length - 1, 1) / 2;
             (n -= s), (i += s);
         }
         (this._startValue = n),
             (this._endValue = i),
             (this._valueRange = i - n);
     }
     getLabelForValue(e) {
         return nr(e, this.chart.options.locale, this.options.ticks.format);
     }
 }
 class Ya extends Ao {
     determineDataLimits() {
         const { min: e, max: n } = this.getMinMax(!0);
         (this.min = ae(e) ? e : 0),
             (this.max = ae(n) ? n : 1),
             this.handleTickRangeOptions();
     }
     computeTickLimit() {
         const e = this.isHorizontal(),
             n = e ? this.width : this.height,
             i = pt(this.options.ticks.minRotation),
             s = (e ? Math.sin(i) : Math.cos(i)) || 0.001,
             r = this._resolveTickFontOptions(0);
         return Math.ceil(n / Math.min(40, r.lineHeight / s));
     }
     getPixelForValue(e) {
         return e === null
             ? NaN
             : this.getPixelForDecimal(
                   (e - this._startValue) / this._valueRange
               );
     }
     getValueForPixel(e) {
         return (
             this._startValue + this.getDecimalForPixel(e) * this._valueRange
         );
     }
 }
 M(Ya, "id", "linear"),
     M(Ya, "defaults", { ticks: { callback: Zo.formatters.numeric } });
 const Xs = (t) => Math.floor(un(t)),
     Rn = (t, e) => Math.pow(10, Xs(t) + e);
 function Oh(t) {
     return t / Math.pow(10, Xs(t)) === 1;
 }
 function Nh(t, e, n) {
     const i = Math.pow(10, n),
         s = Math.floor(t / i);
     return Math.ceil(e / i) - s;
 }
 function rw(t, e) {
     const n = e - t;
     let i = Xs(n);
     for (; Nh(t, e, i) > 10; ) i++;
     for (; Nh(t, e, i) < 10; ) i--;
     return Math.min(i, Xs(t));
 }
 function ow(t, { min: e, max: n }) {
     e = Ye(t.min, e);
     const i = [],
         s = Xs(e);
     let r = rw(e, n),
         o = r < 0 ? Math.pow(10, Math.abs(r)) : 1;
     const l = Math.pow(10, r),
         a = s > r ? Math.pow(10, s) : 0,
         c = Math.round((e - a) * o) / o,
         u = Math.floor((e - a) / l / 10) * l * 10;
     let d = Math.floor((c - u) / Math.pow(10, r)),
         h = Ye(t.min, Math.round((a + u + d * Math.pow(10, r)) * o) / o);
     for (; h < n; )
         i.push({ value: h, major: Oh(h), significand: d }),
             d >= 10 ? (d = d < 15 ? 15 : 20) : d++,
             d >= 20 && (r++, (d = 2), (o = r >= 0 ? 1 : o)),
             (h = Math.round((a + u + d * Math.pow(10, r)) * o) / o);
     const f = Ye(t.max, h);
     return i.push({ value: f, major: Oh(f), significand: d }), i;
 }
 class Xa extends ii {
     constructor(e) {
         super(e),
             (this.start = void 0),
             (this.end = void 0),
             (this._startValue = void 0),
             (this._valueRange = 0);
     }
     parse(e, n) {
         const i = Ao.prototype.parse.apply(this, [e, n]);
         if (i === 0) {
             this._zero = !0;
             return;
         }
         return ae(i) && i > 0 ? i : null;
     }
     determineDataLimits() {
         const { min: e, max: n } = this.getMinMax(!0);
         (this.min = ae(e) ? Math.max(0, e) : null),
             (this.max = ae(n) ? Math.max(0, n) : null),
             this.options.beginAtZero && (this._zero = !0),
             this._zero &&
                 this.min !== this._suggestedMin &&
                 !ae(this._userMin) &&
                 (this.min =
                     e === Rn(this.min, 0)
                         ? Rn(this.min, -1)
                         : Rn(this.min, 0)),
             this.handleTickRangeOptions();
     }
     handleTickRangeOptions() {
         const { minDefined: e, maxDefined: n } = this.getUserBounds();
         let i = this.min,
             s = this.max;
         const r = (l) => (i = e ? i : l),
             o = (l) => (s = n ? s : l);
         i === s && (i <= 0 ? (r(1), o(10)) : (r(Rn(i, -1)), o(Rn(s, 1)))),
             i <= 0 && r(Rn(s, -1)),
             s <= 0 && o(Rn(i, 1)),
             (this.min = i),
             (this.max = s);
     }
     buildTicks() {
         const e = this.options,
             n = { min: this._userMin, max: this._userMax },
             i = ow(n, this);
         return (
             e.bounds === "ticks" && og(i, this, "value"),
             e.reverse
                 ? (i.reverse(), (this.start = this.max), (this.end = this.min))
                 : ((this.start = this.min), (this.end = this.max)),
             i
         );
     }
     getLabelForValue(e) {
         return e === void 0
             ? "0"
             : nr(e, this.chart.options.locale, this.options.ticks.format);
     }
     configure() {
         const e = this.min;
         super.configure(),
             (this._startValue = un(e)),
             (this._valueRange = un(this.max) - un(e));
     }
     getPixelForValue(e) {
         return (
             (e === void 0 || e === 0) && (e = this.min),
             e === null || isNaN(e)
                 ? NaN
                 : this.getPixelForDecimal(
                       e === this.min
                           ? 0
                           : (un(e) - this._startValue) / this._valueRange
                   )
         );
     }
     getValueForPixel(e) {
         const n = this.getDecimalForPixel(e);
         return Math.pow(10, this._startValue + n * this._valueRange);
     }
 }
 M(Xa, "id", "logarithmic"),
     M(Xa, "defaults", {
         ticks: { callback: Zo.formatters.logarithmic, major: { enabled: !0 } },
     });
 function Ka(t) {
     const e = t.ticks;
     if (e.display && t.display) {
         const n = De(e.backdropPadding);
         return z(e.font && e.font.size, ue.font.size) + n.height;
     }
     return 0;
 }
 function lw(t, e, n) {
     return (
         (n = q(n) ? n : [n]),
         { w: g_(t, e.string, n), h: n.length * e.lineHeight }
     );
 }
 function Lh(t, e, n, i, s) {
     return t === i || t === s
         ? { start: e - n / 2, end: e + n / 2 }
         : t < i || t > s
         ? { start: e - n, end: e }
         : { start: e, end: e + n };
 }
 function aw(t) {
     const e = {
             l: t.left + t._padding.left,
             r: t.right - t._padding.right,
             t: t.top + t._padding.top,
             b: t.bottom - t._padding.bottom,
         },
         n = Object.assign({}, e),
         i = [],
         s = [],
         r = t._pointLabels.length,
         o = t.options.pointLabels,
         l = o.centerPointLabels ? ne / r : 0;
     for (let a = 0; a < r; a++) {
         const c = o.setContext(t.getPointLabelContext(a));
         s[a] = c.padding;
         const u = t.getPointPosition(a, t.drawingArea + s[a], l),
             d = ge(c.font),
             h = lw(t.ctx, d, t._pointLabels[a]);
         i[a] = h;
         const f = Ke(t.getIndexAngle(a) + l),
             m = Math.round(Kc(f)),
             y = Lh(m, u.x, h.w, 0, 180),
             x = Lh(m, u.y, h.h, 90, 270);
         cw(n, e, f, y, x);
     }
     t.setCenterPoint(e.l - n.l, n.r - e.r, e.t - n.t, n.b - e.b),
         (t._pointLabelItems = hw(t, i, s));
 }
 function cw(t, e, n, i, s) {
     const r = Math.abs(Math.sin(n)),
         o = Math.abs(Math.cos(n));
     let l = 0,
         a = 0;
     i.start < e.l
         ? ((l = (e.l - i.start) / r), (t.l = Math.min(t.l, e.l - l)))
         : i.end > e.r &&
           ((l = (i.end - e.r) / r), (t.r = Math.max(t.r, e.r + l))),
         s.start < e.t
             ? ((a = (e.t - s.start) / o), (t.t = Math.min(t.t, e.t - a)))
             : s.end > e.b &&
               ((a = (s.end - e.b) / o), (t.b = Math.max(t.b, e.b + a)));
 }
 function uw(t, e, n) {
     const i = t.drawingArea,
         { extra: s, additionalAngle: r, padding: o, size: l } = n,
         a = t.getPointPosition(e, i + s + o, r),
         c = Math.round(Kc(Ke(a.angle + ce))),
         u = gw(a.y, l.h, c),
         d = fw(c),
         h = pw(a.x, l.w, d);
     return {
         visible: !0,
         x: a.x,
         y: u,
         textAlign: d,
         left: h,
         top: u,
         right: h + l.w,
         bottom: u + l.h,
     };
 }
 function dw(t, e) {
     if (!e) return !0;
     const { left: n, top: i, right: s, bottom: r } = t;
     return !(
         $t({ x: n, y: i }, e) ||
         $t({ x: n, y: r }, e) ||
         $t({ x: s, y: i }, e) ||
         $t({ x: s, y: r }, e)
     );
 }
 function hw(t, e, n) {
     const i = [],
         s = t._pointLabels.length,
         r = t.options,
         { centerPointLabels: o, display: l } = r.pointLabels,
         a = { extra: Ka(r) / 2, additionalAngle: o ? ne / s : 0 };
     let c;
     for (let u = 0; u < s; u++) {
         (a.padding = n[u]), (a.size = e[u]);
         const d = uw(t, u, a);
         i.push(d),
             l === "auto" && ((d.visible = dw(d, c)), d.visible && (c = d));
     }
     return i;
 }
 function fw(t) {
     return t === 0 || t === 180 ? "center" : t < 180 ? "left" : "right";
 }
 function pw(t, e, n) {
     return n === "right" ? (t -= e) : n === "center" && (t -= e / 2), t;
 }
 function gw(t, e, n) {
     return (
         n === 90 || n === 270 ? (t -= e / 2) : (n > 270 || n < 90) && (t -= e),
         t
     );
 }
 function mw(t, e, n) {
     const { left: i, top: s, right: r, bottom: o } = n,
         { backdropColor: l } = e;
     if (!V(l)) {
         const a = Yn(e.borderRadius),
             c = De(e.backdropPadding);
         t.fillStyle = l;
         const u = i - c.left,
             d = s - c.top,
             h = r - i + c.width,
             f = o - s + c.height;
         Object.values(a).some((m) => m !== 0)
             ? (t.beginPath(),
               Us(t, { x: u, y: d, w: h, h: f, radius: a }),
               t.fill())
             : t.fillRect(u, d, h, f);
     }
 }
 function yw(t, e) {
     const {
         ctx: n,
         options: { pointLabels: i },
     } = t;
     for (let s = e - 1; s >= 0; s--) {
         const r = t._pointLabelItems[s];
         if (!r.visible) continue;
         const o = i.setContext(t.getPointLabelContext(s));
         mw(n, o, r);
         const l = ge(o.font),
             { x: a, y: c, textAlign: u } = r;
         ei(n, t._pointLabels[s], a, c + l.lineHeight / 2, l, {
             color: o.color,
             textAlign: u,
             textBaseline: "middle",
         });
     }
 }
 function Zg(t, e, n, i) {
     const { ctx: s } = t;
     if (n) s.arc(t.xCenter, t.yCenter, e, 0, ee);
     else {
         let r = t.getPointPosition(0, e);
         s.moveTo(r.x, r.y);
         for (let o = 1; o < i; o++)
             (r = t.getPointPosition(o, e)), s.lineTo(r.x, r.y);
     }
 }
 function vw(t, e, n, i, s) {
     const r = t.ctx,
         o = e.circular,
         { color: l, lineWidth: a } = e;
     (!o && !i) ||
         !l ||
         !a ||
         n < 0 ||
         (r.save(),
         (r.strokeStyle = l),
         (r.lineWidth = a),
         r.setLineDash(s.dash),
         (r.lineDashOffset = s.dashOffset),
         r.beginPath(),
         Zg(t, n, o, i),
         r.closePath(),
         r.stroke(),
         r.restore());
 }
 function _w(t, e, n) {
     return Dn(t, { label: n, index: e, type: "pointLabel" });
 }
 class as extends Ao {
     constructor(e) {
         super(e),
             (this.xCenter = void 0),
             (this.yCenter = void 0),
             (this.drawingArea = void 0),
             (this._pointLabels = []),
             (this._pointLabelItems = []);
     }
     setDimensions() {
         const e = (this._padding = De(Ka(this.options) / 2)),
             n = (this.width = this.maxWidth - e.width),
             i = (this.height = this.maxHeight - e.height);
         (this.xCenter = Math.floor(this.left + n / 2 + e.left)),
             (this.yCenter = Math.floor(this.top + i / 2 + e.top)),
             (this.drawingArea = Math.floor(Math.min(n, i) / 2));
     }
     determineDataLimits() {
         const { min: e, max: n } = this.getMinMax(!1);
         (this.min = ae(e) && !isNaN(e) ? e : 0),
             (this.max = ae(n) && !isNaN(n) ? n : 0),
             this.handleTickRangeOptions();
     }
     computeTickLimit() {
         return Math.ceil(this.drawingArea / Ka(this.options));
     }
     generateTickLabels(e) {
         Ao.prototype.generateTickLabels.call(this, e),
             (this._pointLabels = this.getLabels()
                 .map((n, i) => {
                     const s = X(
                         this.options.pointLabels.callback,
                         [n, i],
                         this
                     );
                     return s || s === 0 ? s : "";
                 })
                 .filter((n, i) => this.chart.getDataVisibility(i)));
     }
     fit() {
         const e = this.options;
         e.display && e.pointLabels.display
             ? aw(this)
             : this.setCenterPoint(0, 0, 0, 0);
     }
     setCenterPoint(e, n, i, s) {
         (this.xCenter += Math.floor((e - n) / 2)),
             (this.yCenter += Math.floor((i - s) / 2)),
             (this.drawingArea -= Math.min(
                 this.drawingArea / 2,
                 Math.max(e, n, i, s)
             ));
     }
     getIndexAngle(e) {
         const n = ee / (this._pointLabels.length || 1),
             i = this.options.startAngle || 0;
         return Ke(e * n + pt(i));
     }
     getDistanceFromCenterForValue(e) {
         if (V(e)) return NaN;
         const n = this.drawingArea / (this.max - this.min);
         return this.options.reverse ? (this.max - e) * n : (e - this.min) * n;
     }
     getValueForDistanceFromCenter(e) {
         if (V(e)) return NaN;
         const n = e / (this.drawingArea / (this.max - this.min));
         return this.options.reverse ? this.max - n : this.min + n;
     }
     getPointLabelContext(e) {
         const n = this._pointLabels || [];
         if (e >= 0 && e < n.length) {
             const i = n[e];
             return _w(this.getContext(), e, i);
         }
     }
     getPointPosition(e, n, i = 0) {
         const s = this.getIndexAngle(e) - ce + i;
         return {
             x: Math.cos(s) * n + this.xCenter,
             y: Math.sin(s) * n + this.yCenter,
             angle: s,
         };
     }
     getPointPositionForValue(e, n) {
         return this.getPointPosition(e, this.getDistanceFromCenterForValue(n));
     }
     getBasePosition(e) {
         return this.getPointPositionForValue(e || 0, this.getBaseValue());
     }
     getPointLabelPosition(e) {
         const {
             left: n,
             top: i,
             right: s,
             bottom: r,
         } = this._pointLabelItems[e];
         return { left: n, top: i, right: s, bottom: r };
     }
     drawBackground() {
         const {
             backgroundColor: e,
             grid: { circular: n },
         } = this.options;
         if (e) {
             const i = this.ctx;
             i.save(),
                 i.beginPath(),
                 Zg(
                     this,
                     this.getDistanceFromCenterForValue(this._endValue),
                     n,
                     this._pointLabels.length
                 ),
                 i.closePath(),
                 (i.fillStyle = e),
                 i.fill(),
                 i.restore();
         }
     }
     drawGrid() {
         const e = this.ctx,
             n = this.options,
             { angleLines: i, grid: s, border: r } = n,
             o = this._pointLabels.length;
         let l, a, c;
         if (
             (n.pointLabels.display && yw(this, o),
             s.display &&
                 this.ticks.forEach((u, d) => {
                     if (d !== 0) {
                         a = this.getDistanceFromCenterForValue(u.value);
                         const h = this.getContext(d),
                             f = s.setContext(h),
                             m = r.setContext(h);
                         vw(this, f, a, o, m);
                     }
                 }),
             i.display)
         ) {
             for (e.save(), l = o - 1; l >= 0; l--) {
                 const u = i.setContext(this.getPointLabelContext(l)),
                     { color: d, lineWidth: h } = u;
                 !h ||
                     !d ||
                     ((e.lineWidth = h),
                     (e.strokeStyle = d),
                     e.setLineDash(u.borderDash),
                     (e.lineDashOffset = u.borderDashOffset),
                     (a = this.getDistanceFromCenterForValue(
                         n.ticks.reverse ? this.min : this.max
                     )),
                     (c = this.getPointPosition(l, a)),
                     e.beginPath(),
                     e.moveTo(this.xCenter, this.yCenter),
                     e.lineTo(c.x, c.y),
                     e.stroke());
             }
             e.restore();
         }
     }
     drawBorder() {}
     drawLabels() {
         const e = this.ctx,
             n = this.options,
             i = n.ticks;
         if (!i.display) return;
         const s = this.getIndexAngle(0);
         let r, o;
         e.save(),
             e.translate(this.xCenter, this.yCenter),
             e.rotate(s),
             (e.textAlign = "center"),
             (e.textBaseline = "middle"),
             this.ticks.forEach((l, a) => {
                 if (a === 0 && !n.reverse) return;
                 const c = i.setContext(this.getContext(a)),
                     u = ge(c.font);
                 if (
                     ((r = this.getDistanceFromCenterForValue(
                         this.ticks[a].value
                     )),
                     c.showLabelBackdrop)
                 ) {
                     (e.font = u.string),
                         (o = e.measureText(l.label).width),
                         (e.fillStyle = c.backdropColor);
                     const d = De(c.backdropPadding);
                     e.fillRect(
                         -o / 2 - d.left,
                         -r - u.size / 2 - d.top,
                         o + d.width,
                         u.size + d.height
                     );
                 }
                 ei(e, l.label, 0, -r, u, { color: c.color });
             }),
             e.restore();
     }
     drawTitle() {}
 }
 M(as, "id", "radialLinear"),
     M(as, "defaults", {
         display: !0,
         animate: !0,
         position: "chartArea",
         angleLines: {
             display: !0,
             lineWidth: 1,
             borderDash: [],
             borderDashOffset: 0,
         },
         grid: { circular: !1 },
         startAngle: 0,
         ticks: { showLabelBackdrop: !0, callback: Zo.formatters.numeric },
         pointLabels: {
             backdropColor: void 0,
             backdropPadding: 2,
             display: !0,
             font: { size: 10 },
             callback(e) {
                 return e;
             },
             padding: 5,
             centerPointLabels: !1,
         },
     }),
     M(as, "defaultRoutes", {
         "angleLines.color": "borderColor",
         "pointLabels.color": "color",
         "ticks.color": "color",
     }),
     M(as, "descriptors", { angleLines: { _fallback: "grid" } });
 const tl = {
         millisecond: { common: !0, size: 1, steps: 1e3 },
         second: { common: !0, size: 1e3, steps: 60 },
         minute: { common: !0, size: 6e4, steps: 60 },
         hour: { common: !0, size: 36e5, steps: 24 },
         day: { common: !0, size: 864e5, steps: 30 },
         week: { common: !1, size: 6048e5, steps: 4 },
         month: { common: !0, size: 2628e6, steps: 12 },
         quarter: { common: !1, size: 7884e6, steps: 4 },
         year: { common: !0, size: 3154e7 },
     },
     Fe = Object.keys(tl);
 function xw(t, e) {
     return t - e;
 }
 function Rh(t, e) {
     if (V(e)) return null;
     const n = t._adapter,
         { parser: i, round: s, isoWeekday: r } = t._parseOpts;
     let o = e;
     return (
         typeof i == "function" && (o = i(o)),
         ae(o) || (o = typeof i == "string" ? n.parse(o, i) : n.parse(o)),
         o === null
             ? null
             : (s &&
                   (o =
                       s === "week" && (Ri(r) || r === !0)
                           ? n.startOf(o, "isoWeek", r)
                           : n.startOf(o, s)),
               +o)
     );
 }
 function Ah(t, e, n, i) {
     const s = Fe.length;
     for (let r = Fe.indexOf(t); r < s - 1; ++r) {
         const o = tl[Fe[r]],
             l = o.steps ? o.steps : Number.MAX_SAFE_INTEGER;
         if (o.common && Math.ceil((n - e) / (l * o.size)) <= i) return Fe[r];
     }
     return Fe[s - 1];
 }
 function kw(t, e, n, i, s) {
     for (let r = Fe.length - 1; r >= Fe.indexOf(n); r--) {
         const o = Fe[r];
         if (tl[o].common && t._adapter.diff(s, i, o) >= e - 1) return o;
     }
     return Fe[n ? Fe.indexOf(n) : 0];
 }
 function ww(t) {
     for (let e = Fe.indexOf(t) + 1, n = Fe.length; e < n; ++e)
         if (tl[Fe[e]].common) return Fe[e];
 }
 function zh(t, e, n) {
     if (!n) t[e] = !0;
     else if (n.length) {
         const { lo: i, hi: s } = Qc(n, e),
             r = n[i] >= e ? n[i] : n[s];
         t[r] = !0;
     }
 }
 function Sw(t, e, n, i) {
     const s = t._adapter,
         r = +s.startOf(e[0].value, i),
         o = e[e.length - 1].value;
     let l, a;
     for (l = r; l <= o; l = +s.add(l, 1, i))
         (a = n[l]), a >= 0 && (e[a].major = !0);
     return e;
 }
 function Ih(t, e, n) {
     const i = [],
         s = {},
         r = e.length;
     let o, l;
     for (o = 0; o < r; ++o)
         (l = e[o]), (s[l] = o), i.push({ value: l, major: !1 });
     return r === 0 || !n ? i : Sw(t, i, s, n);
 }
 class Ks extends ii {
     constructor(e) {
         super(e),
             (this._cache = { data: [], labels: [], all: [] }),
             (this._unit = "day"),
             (this._majorUnit = void 0),
             (this._offsets = {}),
             (this._normalized = !1),
             (this._parseOpts = void 0);
     }
     init(e, n = {}) {
         const i = e.time || (e.time = {}),
             s = (this._adapter = new Ox._date(e.adapters.date));
         s.init(n),
             vs(i.displayFormats, s.formats()),
             (this._parseOpts = {
                 parser: i.parser,
                 round: i.round,
                 isoWeekday: i.isoWeekday,
             }),
             super.init(e),
             (this._normalized = n.normalized);
     }
     parse(e, n) {
         return e === void 0 ? null : Rh(this, e);
     }
     beforeLayout() {
         super.beforeLayout(),
             (this._cache = { data: [], labels: [], all: [] });
     }
     determineDataLimits() {
         const e = this.options,
             n = this._adapter,
             i = e.time.unit || "day";
         let {
             min: s,
             max: r,
             minDefined: o,
             maxDefined: l,
         } = this.getUserBounds();
         function a(c) {
             !o && !isNaN(c.min) && (s = Math.min(s, c.min)),
                 !l && !isNaN(c.max) && (r = Math.max(r, c.max));
         }
         (!o || !l) &&
             (a(this._getLabelBounds()),
             (e.bounds !== "ticks" || e.ticks.source !== "labels") &&
                 a(this.getMinMax(!1))),
             (s = ae(s) && !isNaN(s) ? s : +n.startOf(Date.now(), i)),
             (r = ae(r) && !isNaN(r) ? r : +n.endOf(Date.now(), i) + 1),
             (this.min = Math.min(s, r - 1)),
             (this.max = Math.max(s + 1, r));
     }
     _getLabelBounds() {
         const e = this.getLabelTimestamps();
         let n = Number.POSITIVE_INFINITY,
             i = Number.NEGATIVE_INFINITY;
         return (
             e.length && ((n = e[0]), (i = e[e.length - 1])), { min: n, max: i }
         );
     }
     buildTicks() {
         const e = this.options,
             n = e.time,
             i = e.ticks,
             s =
                 i.source === "labels"
                     ? this.getLabelTimestamps()
                     : this._generate();
         e.bounds === "ticks" &&
             s.length &&
             ((this.min = this._userMin || s[0]),
             (this.max = this._userMax || s[s.length - 1]));
         const r = this.min,
             o = this.max,
             l = n_(s, r, o);
         return (
             (this._unit =
                 n.unit ||
                 (i.autoSkip
                     ? Ah(
                           n.minUnit,
                           this.min,
                           this.max,
                           this._getLabelCapacity(r)
                       )
                     : kw(this, l.length, n.minUnit, this.min, this.max))),
             (this._majorUnit =
                 !i.major.enabled || this._unit === "year"
                     ? void 0
                     : ww(this._unit)),
             this.initOffsets(s),
             e.reverse && l.reverse(),
             Ih(this, l, this._majorUnit)
         );
     }
     afterAutoSkip() {
         this.options.offsetAfterAutoskip &&
             this.initOffsets(this.ticks.map((e) => +e.value));
     }
     initOffsets(e = []) {
         let n = 0,
             i = 0,
             s,
             r;
         this.options.offset &&
             e.length &&
             ((s = this.getDecimalForValue(e[0])),
             e.length === 1
                 ? (n = 1 - s)
                 : (n = (this.getDecimalForValue(e[1]) - s) / 2),
             (r = this.getDecimalForValue(e[e.length - 1])),
             e.length === 1
                 ? (i = r)
                 : (i = (r - this.getDecimalForValue(e[e.length - 2])) / 2));
         const o = e.length < 3 ? 0.5 : 0.25;
         (n = ve(n, 0, o)),
             (i = ve(i, 0, o)),
             (this._offsets = { start: n, end: i, factor: 1 / (n + 1 + i) });
     }
     _generate() {
         const e = this._adapter,
             n = this.min,
             i = this.max,
             s = this.options,
             r = s.time,
             o = r.unit || Ah(r.minUnit, n, i, this._getLabelCapacity(n)),
             l = z(s.ticks.stepSize, 1),
             a = o === "week" ? r.isoWeekday : !1,
             c = Ri(a) || a === !0,
             u = {};
         let d = n,
             h,
             f;
         if (
             (c && (d = +e.startOf(d, "isoWeek", a)),
             (d = +e.startOf(d, c ? "day" : o)),
             e.diff(i, n, o) > 1e5 * l)
         )
             throw new Error(
                 n +
                     " and " +
                     i +
                     " are too far apart with stepSize of " +
                     l +
                     " " +
                     o
             );
         const m = s.ticks.source === "data" && this.getDataTimestamps();
         for (h = d, f = 0; h < i; h = +e.add(h, l, o), f++) zh(u, h, m);
         return (
             (h === i || s.bounds === "ticks" || f === 1) && zh(u, h, m),
             Object.keys(u)
                 .sort((y, x) => y - x)
                 .map((y) => +y)
         );
     }
     getLabelForValue(e) {
         const n = this._adapter,
             i = this.options.time;
         return i.tooltipFormat
             ? n.format(e, i.tooltipFormat)
             : n.format(e, i.displayFormats.datetime);
     }
     format(e, n) {
         const s = this.options.time.displayFormats,
             r = this._unit,
             o = n || s[r];
         return this._adapter.format(e, o);
     }
     _tickFormatFunction(e, n, i, s) {
         const r = this.options,
             o = r.ticks.callback;
         if (o) return X(o, [e, n, i], this);
         const l = r.time.displayFormats,
             a = this._unit,
             c = this._majorUnit,
             u = a && l[a],
             d = c && l[c],
             h = i[n],
             f = c && d && h && h.major;
         return this._adapter.format(e, s || (f ? d : u));
     }
     generateTickLabels(e) {
         let n, i, s;
         for (n = 0, i = e.length; n < i; ++n)
             (s = e[n]), (s.label = this._tickFormatFunction(s.value, n, e));
     }
     getDecimalForValue(e) {
         return e === null ? NaN : (e - this.min) / (this.max - this.min);
     }
     getPixelForValue(e) {
         const n = this._offsets,
             i = this.getDecimalForValue(e);
         return this.getPixelForDecimal((n.start + i) * n.factor);
     }
     getValueForPixel(e) {
         const n = this._offsets,
             i = this.getDecimalForPixel(e) / n.factor - n.end;
         return this.min + i * (this.max - this.min);
     }
     _getLabelSize(e) {
         const n = this.options.ticks,
             i = this.ctx.measureText(e).width,
             s = pt(this.isHorizontal() ? n.maxRotation : n.minRotation),
             r = Math.cos(s),
             o = Math.sin(s),
             l = this._resolveTickFontOptions(0).size;
         return { w: i * r + l * o, h: i * o + l * r };
     }
     _getLabelCapacity(e) {
         const n = this.options.time,
             i = n.displayFormats,
             s = i[n.unit] || i.millisecond,
             r = this._tickFormatFunction(
                 e,
                 0,
                 Ih(this, [e], this._majorUnit),
                 s
             ),
             o = this._getLabelSize(r),
             l =
                 Math.floor(
                     this.isHorizontal() ? this.width / o.w : this.height / o.h
                 ) - 1;
         return l > 0 ? l : 1;
     }
     getDataTimestamps() {
         let e = this._cache.data || [],
             n,
             i;
         if (e.length) return e;
         const s = this.getMatchingVisibleMetas();
         if (this._normalized && s.length)
             return (this._cache.data =
                 s[0].controller.getAllParsedValues(this));
         for (n = 0, i = s.length; n < i; ++n)
             e = e.concat(s[n].controller.getAllParsedValues(this));
         return (this._cache.data = this.normalize(e));
     }
     getLabelTimestamps() {
         const e = this._cache.labels || [];
         let n, i;
         if (e.length) return e;
         const s = this.getLabels();
         for (n = 0, i = s.length; n < i; ++n) e.push(Rh(this, s[n]));
         return (this._cache.labels = this._normalized ? e : this.normalize(e));
     }
     normalize(e) {
         return cg(e.sort(xw));
     }
 }
 M(Ks, "id", "time"),
     M(Ks, "defaults", {
         bounds: "data",
         adapters: {},
         time: {
             parser: !1,
             unit: !1,
             round: !1,
             isoWeekday: !1,
             minUnit: "millisecond",
             displayFormats: {},
         },
         ticks: { source: "auto", callback: !1, major: { enabled: !1 } },
     });
 function Ar(t, e, n) {
     let i = 0,
         s = t.length - 1,
         r,
         o,
         l,
         a;
     n
         ? (e >= t[i].pos &&
               e <= t[s].pos &&
               ({ lo: i, hi: s } = Wt(t, "pos", e)),
           ({ pos: r, time: l } = t[i]),
           ({ pos: o, time: a } = t[s]))
         : (e >= t[i].time &&
               e <= t[s].time &&
               ({ lo: i, hi: s } = Wt(t, "time", e)),
           ({ time: r, pos: l } = t[i]),
           ({ time: o, pos: a } = t[s]));
     const c = o - r;
     return c ? l + ((a - l) * (e - r)) / c : l;
 }
 class Qa extends Ks {
     constructor(e) {
         super(e),
             (this._table = []),
             (this._minPos = void 0),
             (this._tableRange = void 0);
     }
     initOffsets() {
         const e = this._getTimestampsForTable(),
             n = (this._table = this.buildLookupTable(e));
         (this._minPos = Ar(n, this.min)),
             (this._tableRange = Ar(n, this.max) - this._minPos),
             super.initOffsets(e);
     }
     buildLookupTable(e) {
         const { min: n, max: i } = this,
             s = [],
             r = [];
         let o, l, a, c, u;
         for (o = 0, l = e.length; o < l; ++o)
             (c = e[o]), c >= n && c <= i && s.push(c);
         if (s.length < 2)
             return [
                 { time: n, pos: 0 },
                 { time: i, pos: 1 },
             ];
         for (o = 0, l = s.length; o < l; ++o)
             (u = s[o + 1]),
                 (a = s[o - 1]),
                 (c = s[o]),
                 Math.round((u + a) / 2) !== c &&
                     r.push({ time: c, pos: o / (l - 1) });
         return r;
     }
     _getTimestampsForTable() {
         let e = this._cache.all || [];
         if (e.length) return e;
         const n = this.getDataTimestamps(),
             i = this.getLabelTimestamps();
         return (
             n.length && i.length
                 ? (e = this.normalize(n.concat(i)))
                 : (e = n.length ? n : i),
             (e = this._cache.all = e),
             e
         );
     }
     getDecimalForValue(e) {
         return (Ar(this._table, e) - this._minPos) / this._tableRange;
     }
     getValueForPixel(e) {
         const n = this._offsets,
             i = this.getDecimalForPixel(e) / n.factor - n.end;
         return Ar(this._table, i * this._tableRange + this._minPos, !0);
     }
 }
 M(Qa, "id", "timeseries"), M(Qa, "defaults", Ks.defaults);
 var bw = Object.freeze({
     __proto__: null,
     CategoryScale: Ua,
     LinearScale: Ya,
     LogarithmicScale: Xa,
     RadialLinearScale: as,
     TimeScale: Ks,
     TimeSeriesScale: Qa,
 });
 const Ew = [Dx, ok, ew, bw];
 jt.register(...Ew);
 const Cw = () => {
         const [t, e] = N.exports.useState([]),
             { cohort: n } = N.exports.useContext(ct);
         N.exports.useEffect(
             () => (
                 (async () => {
                     const l = await (
                         await fetch(
                             `blueoceanapi-ucyq.onrender.comstudents_assessment_scores/${n}`
                         )
                     ).json();
                     e(l);
                 })(),
                 () => {}
             ),
             [n]
         );
         const i = N.exports.createRef(),
             s = N.exports.useRef(null);
         t.map((o) => o.cohort_number), t.map((o) => o.grade);
         const r = () => {
             const o = i.current.getContext("2d");
             s.current && s.current.destroy();
             const l = t.reduce((d, h) => {
                     const { grade: f } = h;
                     return d[f] ? (d[f] += 1) : (d[f] = 1), d;
                 }, {}),
                 a = Object.keys(l),
                 c = Object.values(l),
                 u = [
                     "rgba(255, 71, 71, 1)",
                     "rgba(108, 71, 255, 1)",
                     "rgba(71, 178, 255, 1)",
                     "rgba(75, 255, 71, 1)",
                     "rgba(240, 255, 71, 1)",
                     "rgba(255, 137, 71, 1)",
                     "rgba(255, 117, 117, 1)",
                     "rgba(255, 117, 208, 1)",
                     "rgba(117, 156, 255, 1)",
                     "rgba(117, 255, 247, 1)",
                 ];
             s.current = new jt(o, {
                 type: "doughnut",
                 data: {
                     labels: a,
                     datasets: [{ data: c, backgroundColor: u }],
                 },
                 options: { responsive: !0 },
             });
         };
         return (
             N.exports.useEffect(() => {
                 r();
             }, [t]),
             _.createElement(
                 "div",
                 { className: ri["student-container"] },
                 _.createElement(
                     "div",
                     { className: ri["student-title"] },
                     _.createElement(
                         "span",
                         { className: ri.title },
                         "Average Grades"
                     )
                 ),
                 _.createElement(
                     "div",
                     { className: ri["table-container"] },
                     _.createElement(
                         "div",
                         { className: ri["table-cont"] },
                         _.createElement(
                             "div",
                             { className: ri["chart-container"] },
                             _.createElement("canvas", { ref: i })
                         )
                     )
                 )
             )
         );
     },
     Fh = {
         "dashboard-container": "_dashboard-container_1967f_1",
         "dashboard-menu": "_dashboard-menu_1967f_8",
     },
     Mw = () => {
         const { bodyDisplay: t, setBodyDisplay: e } = N.exports.useContext(ct);
         return (
             N.exports.useEffect(() => {
                 t || e("main");
             }, []),
             _.createElement(
                 "div",
                 { className: Fh["dashboard-container"] },
                 _.createElement(
                     "div",
                     { className: Fh["dashboard-menu"] },
                     t === "main" ? _.createElement(Cw, null) : null,
                     t === "project" ? _.createElement(rv, null) : null,
                     t === "student" ? _.createElement(Gy, null) : null,
                     t === "assessment" ? _.createElement(_v, null) : null,
                     t === "assessmentTable" ? _.createElement(eg, null) : null,
                     t === "assessmentCard" ? _.createElement(Jp, null) : null
                 )
             )
         );
     },
     Pw = "_body_1nvly_1",
     Tw = "_content_1nvly_7",
     jh = { body: Pw, content: Tw },
     Dw = ({ logout: t }) =>
         _.createElement(
             "div",
             { className: jh.body },
             _.createElement(
                 "div",
                 { className: jh.content },
                 _.createElement(jy, { logout: t }),
                 _.createElement(zy, null),
                 _.createElement(Mw, null)
             )
         ),
     Ow = { "footer-container": "_footer-container_n11c6_1" },
     Nw = () =>
         _.createElement(
             "div",
             { className: Ow["footer-container"] },
             _.createElement(
                 "footer",
                 null,
                 _.createElement(
                     "p",
                     { id: "footer-text" },
                     "Proprietary Content, \xA9 2013 - 2023 Galvanize, Inc."
                 )
             )
         ),
     qg = ({ logout: t }) =>
         _.createElement(
             _.Fragment,
             null,
             _.createElement(Dw, { logout: t }),
             _.createElement(Nw, null)
         ),
     Lw = "_overlay_17k1x_1",
     Rw = "_open_17k1x_17",
     An = {
         overlay: Lw,
         open: Rw,
         "modal-cont": "_modal-cont_17k1x_23",
         "current-view-cont": "_current-view-cont_17k1x_43",
         "dropdown-cont": "_dropdown-cont_17k1x_67",
         "warning-cont": "_warning-cont_17k1x_110",
     },
     Aw = ({ logout: t }) => {
         const {
                 cohort: e,
                 setCohort: n,
                 setBodyDisplay: i,
             } = N.exports.useContext(ct),
             [s, r] = N.exports.useState([]),
             [o, l] = N.exports.useState(!0),
             [a, c] = N.exports.useState(3);
         N.exports.useEffect(() => {
             fetch("blueoceanapi-ucyq.onrender.comcohorts")
                 .then((m) => m.json())
                 .then((m) => r(m))
                 .catch((m) => console.log(m));
             const d = localStorage.getItem("hasSeenSplash");
             l(!d);
             const h = setTimeout(() => {
                     l(!1), localStorage.setItem("hasSeenSplash", !0);
                 }, 3e3),
                 f = setInterval(() => {
                     c((m) => m - 1);
                 }, 1e3);
             return () => {
                 clearTimeout(h), clearInterval(f);
             };
         }, []);
         const u = (d) => {
             n(d.cohort_number),
                 i("main"),
                 l(!1),
                 localStorage.setItem("hasSeenSplash", !0);
         };
         return _.createElement(
             _.Fragment,
             null,
             o &&
                 _.createElement(
                     "div",
                     { className: `${An.overlay} ${An.open}` },
                     _.createElement(
                         "div",
                         {
                             className: `${An["modal-cont"]} ${An.active}`,
                             onClick: (d) => d.stopPropagation(),
                         },
                         _.createElement(
                             "div",
                             { className: An["current-view-cont"] },
                             _.createElement(
                                 "span",
                                 null,
                                 "You are currently viewing ",
                                 _.createElement("b", null, `MCSP-${e}`)
                             )
                         ),
                         _.createElement(
                             "div",
                             { className: An["dropdown-cont"] },
                             _.createElement(
                                 "h5",
                                 null,
                                 "Change to a different cohort"
                             ),
                             _.createElement(
                                 "ul",
                                 null,
                                 s.map((d) =>
                                     _.createElement(
                                         "li",
                                         {
                                             key: d.cohort_number,
                                             onClick: () => u(d),
                                         },
                                         `MCSP - ${d.cohort_number}`
                                     )
                                 )
                             ),
                             _.createElement(
                                 "div",
                                 { className: An["warning-cont"] },
                                 _.createElement(
                                     "span",
                                     null,
                                     "You will be redirected to the Home Page in ",
                                     a,
                                     " seconds"
                                 )
                             )
                         )
                     )
                 ),
             !o && _.createElement(qg, { logout: t })
         );
     },
     zw = () => {
         const [t, e] = N.exports.useState(!1);
         return _.createElement(
             "div",
             { id: "App" },
             _.createElement(
                 Zp,
                 {
                     authType: "cookie",
                     authName: "_auth",
                     cookieDomain: window.location.hostname,
                     cookieSecure: !1,
                 },
                 t
                     ? _.createElement(
                           qp,
                           null,
                           t
                               ? _.createElement(Aw, { logout: () => e(!1) })
                               : _.createElement(qg, { logout: () => e(!1) })
                       )
                     : _.createElement(Ny, { userAuth: () => e(!0) })
             )
         );
     };
 Gp(document.getElementById("root")).render(_.createElement(zw, null));
