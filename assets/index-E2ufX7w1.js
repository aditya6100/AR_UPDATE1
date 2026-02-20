(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var i_={exports:{}},rc={},r_={exports:{}},Je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fa=Symbol.for("react.element"),hv=Symbol.for("react.portal"),dv=Symbol.for("react.fragment"),pv=Symbol.for("react.strict_mode"),mv=Symbol.for("react.profiler"),_v=Symbol.for("react.provider"),gv=Symbol.for("react.context"),vv=Symbol.for("react.forward_ref"),xv=Symbol.for("react.suspense"),yv=Symbol.for("react.memo"),Sv=Symbol.for("react.lazy"),Nd=Symbol.iterator;function Mv(t){return t===null||typeof t!="object"?null:(t=Nd&&t[Nd]||t["@@iterator"],typeof t=="function"?t:null)}var s_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},o_=Object.assign,a_={};function js(t,e,n){this.props=t,this.context=e,this.refs=a_,this.updater=n||s_}js.prototype.isReactComponent={};js.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};js.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function l_(){}l_.prototype=js.prototype;function gh(t,e,n){this.props=t,this.context=e,this.refs=a_,this.updater=n||s_}var vh=gh.prototype=new l_;vh.constructor=gh;o_(vh,js.prototype);vh.isPureReactComponent=!0;var Id=Array.isArray,c_=Object.prototype.hasOwnProperty,xh={current:null},u_={key:!0,ref:!0,__self:!0,__source:!0};function f_(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)c_.call(e,i)&&!u_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:fa,type:t,key:s,ref:o,props:r,_owner:xh.current}}function Ev(t,e){return{$$typeof:fa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function yh(t){return typeof t=="object"&&t!==null&&t.$$typeof===fa}function wv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ud=/\/+/g;function wc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?wv(""+t.key):e.toString(36)}function ll(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case fa:case hv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+wc(o,0):i,Id(r)?(n="",t!=null&&(n=t.replace(Ud,"$&/")+"/"),ll(r,e,n,"",function(c){return c})):r!=null&&(yh(r)&&(r=Ev(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Ud,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Id(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+wc(s,a);o+=ll(s,e,n,l,r)}else if(l=Mv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+wc(s,a++),o+=ll(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ga(t,e,n){if(t==null)return t;var i=[],r=0;return ll(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Tv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nn={current:null},cl={transition:null},Av={ReactCurrentDispatcher:nn,ReactCurrentBatchConfig:cl,ReactCurrentOwner:xh};function h_(){throw Error("act(...) is not supported in production builds of React.")}Je.Children={map:ga,forEach:function(t,e,n){ga(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ga(t,function(){e++}),e},toArray:function(t){return ga(t,function(e){return e})||[]},only:function(t){if(!yh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Je.Component=js;Je.Fragment=dv;Je.Profiler=mv;Je.PureComponent=gh;Je.StrictMode=pv;Je.Suspense=xv;Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Av;Je.act=h_;Je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=o_({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=xh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)c_.call(e,l)&&!u_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:fa,type:t.type,key:r,ref:s,props:i,_owner:o}};Je.createContext=function(t){return t={$$typeof:gv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:_v,_context:t},t.Consumer=t};Je.createElement=f_;Je.createFactory=function(t){var e=f_.bind(null,t);return e.type=t,e};Je.createRef=function(){return{current:null}};Je.forwardRef=function(t){return{$$typeof:vv,render:t}};Je.isValidElement=yh;Je.lazy=function(t){return{$$typeof:Sv,_payload:{_status:-1,_result:t},_init:Tv}};Je.memo=function(t,e){return{$$typeof:yv,type:t,compare:e===void 0?null:e}};Je.startTransition=function(t){var e=cl.transition;cl.transition={};try{t()}finally{cl.transition=e}};Je.unstable_act=h_;Je.useCallback=function(t,e){return nn.current.useCallback(t,e)};Je.useContext=function(t){return nn.current.useContext(t)};Je.useDebugValue=function(){};Je.useDeferredValue=function(t){return nn.current.useDeferredValue(t)};Je.useEffect=function(t,e){return nn.current.useEffect(t,e)};Je.useId=function(){return nn.current.useId()};Je.useImperativeHandle=function(t,e,n){return nn.current.useImperativeHandle(t,e,n)};Je.useInsertionEffect=function(t,e){return nn.current.useInsertionEffect(t,e)};Je.useLayoutEffect=function(t,e){return nn.current.useLayoutEffect(t,e)};Je.useMemo=function(t,e){return nn.current.useMemo(t,e)};Je.useReducer=function(t,e,n){return nn.current.useReducer(t,e,n)};Je.useRef=function(t){return nn.current.useRef(t)};Je.useState=function(t){return nn.current.useState(t)};Je.useSyncExternalStore=function(t,e,n){return nn.current.useSyncExternalStore(t,e,n)};Je.useTransition=function(){return nn.current.useTransition()};Je.version="18.3.1";r_.exports=Je;var Ve=r_.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rv=Ve,Cv=Symbol.for("react.element"),bv=Symbol.for("react.fragment"),Pv=Object.prototype.hasOwnProperty,Lv=Rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dv={key:!0,ref:!0,__self:!0,__source:!0};function d_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Pv.call(e,i)&&!Dv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Cv,type:t,key:s,ref:o,props:r,_owner:Lv.current}}rc.Fragment=bv;rc.jsx=d_;rc.jsxs=d_;i_.exports=rc;var ce=i_.exports,p_={exports:{}},wn={},m_={exports:{}},__={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,ee){var oe=N.length;N.push(ee);e:for(;0<oe;){var ve=oe-1>>>1,Ne=N[ve];if(0<r(Ne,ee))N[ve]=ee,N[oe]=Ne,oe=ve;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var ee=N[0],oe=N.pop();if(oe!==ee){N[0]=oe;e:for(var ve=0,Ne=N.length,je=Ne>>>1;ve<je;){var Ze=2*(ve+1)-1,Ye=N[Ze],te=Ze+1,ae=N[te];if(0>r(Ye,oe))te<Ne&&0>r(ae,Ye)?(N[ve]=ae,N[te]=oe,ve=te):(N[ve]=Ye,N[Ze]=oe,ve=Ze);else if(te<Ne&&0>r(ae,oe))N[ve]=ae,N[te]=oe,ve=te;else break e}}return ee}function r(N,ee){var oe=N.sortIndex-ee.sortIndex;return oe!==0?oe:N.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,f=null,d=3,p=!1,_=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(N){for(var ee=n(c);ee!==null;){if(ee.callback===null)i(c);else if(ee.startTime<=N)i(c),ee.sortIndex=ee.expirationTime,e(l,ee);else break;ee=n(c)}}function y(N){if(v=!1,x(N),!_)if(n(l)!==null)_=!0,j(A);else{var ee=n(c);ee!==null&&ie(y,ee.startTime-N)}}function A(N,ee){_=!1,v&&(v=!1,u(b),b=-1),p=!0;var oe=d;try{for(x(ee),f=n(l);f!==null&&(!(f.expirationTime>ee)||N&&!L());){var ve=f.callback;if(typeof ve=="function"){f.callback=null,d=f.priorityLevel;var Ne=ve(f.expirationTime<=ee);ee=t.unstable_now(),typeof Ne=="function"?f.callback=Ne:f===n(l)&&i(l),x(ee)}else i(l);f=n(l)}if(f!==null)var je=!0;else{var Ze=n(c);Ze!==null&&ie(y,Ze.startTime-ee),je=!1}return je}finally{f=null,d=oe,p=!1}}var C=!1,T=null,b=-1,E=5,M=-1;function L(){return!(t.unstable_now()-M<E)}function F(){if(T!==null){var N=t.unstable_now();M=N;var ee=!0;try{ee=T(!0,N)}finally{ee?W():(C=!1,T=null)}}else C=!1}var W;if(typeof g=="function")W=function(){g(F)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,z=J.port2;J.port1.onmessage=F,W=function(){z.postMessage(null)}}else W=function(){m(F,0)};function j(N){T=N,C||(C=!0,W())}function ie(N,ee){b=m(function(){N(t.unstable_now())},ee)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,j(A))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(d){case 1:case 2:case 3:var ee=3;break;default:ee=d}var oe=d;d=ee;try{return N()}finally{d=oe}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,ee){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var oe=d;d=N;try{return ee()}finally{d=oe}},t.unstable_scheduleCallback=function(N,ee,oe){var ve=t.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?ve+oe:ve):oe=ve,N){case 1:var Ne=-1;break;case 2:Ne=250;break;case 5:Ne=1073741823;break;case 4:Ne=1e4;break;default:Ne=5e3}return Ne=oe+Ne,N={id:h++,callback:ee,priorityLevel:N,startTime:oe,expirationTime:Ne,sortIndex:-1},oe>ve?(N.sortIndex=oe,e(c,N),n(l)===null&&N===n(c)&&(v?(u(b),b=-1):v=!0,ie(y,oe-ve))):(N.sortIndex=Ne,e(l,N),_||p||(_=!0,j(A))),N},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(N){var ee=d;return function(){var oe=d;d=ee;try{return N.apply(this,arguments)}finally{d=oe}}}})(__);m_.exports=__;var Nv=m_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iv=Ve,En=Nv;function he(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g_=new Set,zo={};function Br(t,e){Ns(t,e),Ns(t+"Capture",e)}function Ns(t,e){for(zo[t]=e,t=0;t<e.length;t++)g_.add(e[t])}var Ri=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nu=Object.prototype.hasOwnProperty,Uv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fd={},Od={};function Fv(t){return Nu.call(Od,t)?!0:Nu.call(Fd,t)?!1:Uv.test(t)?Od[t]=!0:(Fd[t]=!0,!1)}function Ov(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function kv(t,e,n,i){if(e===null||typeof e>"u"||Ov(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Vt[t]=new rn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Vt[e]=new rn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Vt[t]=new rn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Vt[t]=new rn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Vt[t]=new rn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Vt[t]=new rn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Vt[t]=new rn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Vt[t]=new rn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Vt[t]=new rn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Sh=/[\-:]([a-z])/g;function Mh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Sh,Mh);Vt[e]=new rn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Sh,Mh);Vt[e]=new rn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Sh,Mh);Vt[e]=new rn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Vt[t]=new rn(t,1,!1,t.toLowerCase(),null,!1,!1)});Vt.xlinkHref=new rn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Vt[t]=new rn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Eh(t,e,n,i){var r=Vt.hasOwnProperty(e)?Vt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(kv(e,n,r,i)&&(n=null),i||r===null?Fv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Li=Iv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),cs=Symbol.for("react.portal"),us=Symbol.for("react.fragment"),wh=Symbol.for("react.strict_mode"),Iu=Symbol.for("react.profiler"),v_=Symbol.for("react.provider"),x_=Symbol.for("react.context"),Th=Symbol.for("react.forward_ref"),Uu=Symbol.for("react.suspense"),Fu=Symbol.for("react.suspense_list"),Ah=Symbol.for("react.memo"),zi=Symbol.for("react.lazy"),y_=Symbol.for("react.offscreen"),kd=Symbol.iterator;function ro(t){return t===null||typeof t!="object"?null:(t=kd&&t[kd]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Object.assign,Tc;function xo(t){if(Tc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Tc=e&&e[1]||""}return`
`+Tc+t}var Ac=!1;function Rc(t,e){if(!t||Ac)return"";Ac=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ac=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?xo(t):""}function zv(t){switch(t.tag){case 5:return xo(t.type);case 16:return xo("Lazy");case 13:return xo("Suspense");case 19:return xo("SuspenseList");case 0:case 2:case 15:return t=Rc(t.type,!1),t;case 11:return t=Rc(t.type.render,!1),t;case 1:return t=Rc(t.type,!0),t;default:return""}}function Ou(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case us:return"Fragment";case cs:return"Portal";case Iu:return"Profiler";case wh:return"StrictMode";case Uu:return"Suspense";case Fu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case x_:return(t.displayName||"Context")+".Consumer";case v_:return(t._context.displayName||"Context")+".Provider";case Th:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ah:return e=t.displayName||null,e!==null?e:Ou(t.type)||"Memo";case zi:e=t._payload,t=t._init;try{return Ou(t(e))}catch{}}return null}function Bv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ou(e);case 8:return e===wh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function S_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Hv(t){var e=S_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function xa(t){t._valueTracker||(t._valueTracker=Hv(t))}function M_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=S_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Al(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ku(t,e){var n=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function zd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function E_(t,e){e=e.checked,e!=null&&Eh(t,"checked",e,!1)}function zu(t,e){E_(t,e);var n=ir(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Bu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Bu(t,e.type,ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Bd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Bu(t,e,n){(e!=="number"||Al(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var yo=Array.isArray;function ws(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ir(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Hu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(he(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(he(92));if(yo(n)){if(1<n.length)throw Error(he(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ir(n)}}function w_(t,e){var n=ir(e.value),i=ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Vd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function T_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?T_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ya,A_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ya=ya||document.createElement("div"),ya.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ya.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Bo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var To={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vv=["Webkit","ms","Moz","O"];Object.keys(To).forEach(function(t){Vv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),To[e]=To[t]})});function R_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||To.hasOwnProperty(t)&&To[t]?(""+e).trim():e+"px"}function C_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=R_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Gv=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gu(t,e){if(e){if(Gv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(he(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(he(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(he(61))}if(e.style!=null&&typeof e.style!="object")throw Error(he(62))}}function Wu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xu=null;function Rh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ju=null,Ts=null,As=null;function Gd(t){if(t=pa(t)){if(typeof ju!="function")throw Error(he(280));var e=t.stateNode;e&&(e=cc(e),ju(t.stateNode,t.type,e))}}function b_(t){Ts?As?As.push(t):As=[t]:Ts=t}function P_(){if(Ts){var t=Ts,e=As;if(As=Ts=null,Gd(t),e)for(t=0;t<e.length;t++)Gd(e[t])}}function L_(t,e){return t(e)}function D_(){}var Cc=!1;function N_(t,e,n){if(Cc)return t(e,n);Cc=!0;try{return L_(t,e,n)}finally{Cc=!1,(Ts!==null||As!==null)&&(D_(),P_())}}function Ho(t,e){var n=t.stateNode;if(n===null)return null;var i=cc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(he(231,e,typeof n));return n}var Yu=!1;if(Ri)try{var so={};Object.defineProperty(so,"passive",{get:function(){Yu=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{Yu=!1}function Wv(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Ao=!1,Rl=null,Cl=!1,qu=null,Xv={onError:function(t){Ao=!0,Rl=t}};function jv(t,e,n,i,r,s,o,a,l){Ao=!1,Rl=null,Wv.apply(Xv,arguments)}function Yv(t,e,n,i,r,s,o,a,l){if(jv.apply(this,arguments),Ao){if(Ao){var c=Rl;Ao=!1,Rl=null}else throw Error(he(198));Cl||(Cl=!0,qu=c)}}function Hr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function I_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wd(t){if(Hr(t)!==t)throw Error(he(188))}function qv(t){var e=t.alternate;if(!e){if(e=Hr(t),e===null)throw Error(he(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Wd(r),t;if(s===i)return Wd(r),e;s=s.sibling}throw Error(he(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(he(189))}}if(n.alternate!==i)throw Error(he(190))}if(n.tag!==3)throw Error(he(188));return n.stateNode.current===n?t:e}function U_(t){return t=qv(t),t!==null?F_(t):null}function F_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=F_(t);if(e!==null)return e;t=t.sibling}return null}var O_=En.unstable_scheduleCallback,Xd=En.unstable_cancelCallback,$v=En.unstable_shouldYield,Kv=En.unstable_requestPaint,Ct=En.unstable_now,Zv=En.unstable_getCurrentPriorityLevel,Ch=En.unstable_ImmediatePriority,k_=En.unstable_UserBlockingPriority,bl=En.unstable_NormalPriority,Jv=En.unstable_LowPriority,z_=En.unstable_IdlePriority,sc=null,ai=null;function Qv(t){if(ai&&typeof ai.onCommitFiberRoot=="function")try{ai.onCommitFiberRoot(sc,t,void 0,(t.current.flags&128)===128)}catch{}}var $n=Math.clz32?Math.clz32:nx,ex=Math.log,tx=Math.LN2;function nx(t){return t>>>=0,t===0?32:31-(ex(t)/tx|0)|0}var Sa=64,Ma=4194304;function So(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Pl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=So(a):(s&=o,s!==0&&(i=So(s)))}else o=n&~r,o!==0?i=So(o):s!==0&&(i=So(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-$n(e),r=1<<n,i|=t[n],e&=~r;return i}function ix(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-$n(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=ix(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function $u(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function B_(){var t=Sa;return Sa<<=1,!(Sa&4194240)&&(Sa=64),t}function bc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ha(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$n(e),t[e]=n}function sx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-$n(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function bh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-$n(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ot=0;function H_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var V_,Ph,G_,W_,X_,Ku=!1,Ea=[],Yi=null,qi=null,$i=null,Vo=new Map,Go=new Map,Vi=[],ox="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jd(t,e){switch(t){case"focusin":case"focusout":Yi=null;break;case"dragenter":case"dragleave":qi=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":Vo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(e.pointerId)}}function oo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=pa(e),e!==null&&Ph(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function ax(t,e,n,i,r){switch(e){case"focusin":return Yi=oo(Yi,t,e,n,i,r),!0;case"dragenter":return qi=oo(qi,t,e,n,i,r),!0;case"mouseover":return $i=oo($i,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Vo.set(s,oo(Vo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Go.set(s,oo(Go.get(s)||null,t,e,n,i,r)),!0}return!1}function j_(t){var e=Er(t.target);if(e!==null){var n=Hr(e);if(n!==null){if(e=n.tag,e===13){if(e=I_(n),e!==null){t.blockedOn=e,X_(t.priority,function(){G_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ul(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Zu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Xu=i,n.target.dispatchEvent(i),Xu=null}else return e=pa(n),e!==null&&Ph(e),t.blockedOn=n,!1;e.shift()}return!0}function Yd(t,e,n){ul(t)&&n.delete(e)}function lx(){Ku=!1,Yi!==null&&ul(Yi)&&(Yi=null),qi!==null&&ul(qi)&&(qi=null),$i!==null&&ul($i)&&($i=null),Vo.forEach(Yd),Go.forEach(Yd)}function ao(t,e){t.blockedOn===e&&(t.blockedOn=null,Ku||(Ku=!0,En.unstable_scheduleCallback(En.unstable_NormalPriority,lx)))}function Wo(t){function e(r){return ao(r,t)}if(0<Ea.length){ao(Ea[0],t);for(var n=1;n<Ea.length;n++){var i=Ea[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Yi!==null&&ao(Yi,t),qi!==null&&ao(qi,t),$i!==null&&ao($i,t),Vo.forEach(e),Go.forEach(e),n=0;n<Vi.length;n++)i=Vi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Vi.length&&(n=Vi[0],n.blockedOn===null);)j_(n),n.blockedOn===null&&Vi.shift()}var Rs=Li.ReactCurrentBatchConfig,Ll=!0;function cx(t,e,n,i){var r=ot,s=Rs.transition;Rs.transition=null;try{ot=1,Lh(t,e,n,i)}finally{ot=r,Rs.transition=s}}function ux(t,e,n,i){var r=ot,s=Rs.transition;Rs.transition=null;try{ot=4,Lh(t,e,n,i)}finally{ot=r,Rs.transition=s}}function Lh(t,e,n,i){if(Ll){var r=Zu(t,e,n,i);if(r===null)zc(t,e,i,Dl,n),jd(t,i);else if(ax(r,t,e,n,i))i.stopPropagation();else if(jd(t,i),e&4&&-1<ox.indexOf(t)){for(;r!==null;){var s=pa(r);if(s!==null&&V_(s),s=Zu(t,e,n,i),s===null&&zc(t,e,i,Dl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else zc(t,e,i,null,n)}}var Dl=null;function Zu(t,e,n,i){if(Dl=null,t=Rh(i),t=Er(t),t!==null)if(e=Hr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=I_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Dl=t,null}function Y_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zv()){case Ch:return 1;case k_:return 4;case bl:case Jv:return 16;case z_:return 536870912;default:return 16}default:return 16}}var Xi=null,Dh=null,fl=null;function q_(){if(fl)return fl;var t,e=Dh,n=e.length,i,r="value"in Xi?Xi.value:Xi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return fl=r.slice(t,1<i?1-i:void 0)}function hl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function wa(){return!0}function qd(){return!1}function Tn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?wa:qd,this.isPropagationStopped=qd,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wa)},persist:function(){},isPersistent:wa}),e}var Ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nh=Tn(Ys),da=Et({},Ys,{view:0,detail:0}),fx=Tn(da),Pc,Lc,lo,oc=Et({},da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ih,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==lo&&(lo&&t.type==="mousemove"?(Pc=t.screenX-lo.screenX,Lc=t.screenY-lo.screenY):Lc=Pc=0,lo=t),Pc)},movementY:function(t){return"movementY"in t?t.movementY:Lc}}),$d=Tn(oc),hx=Et({},oc,{dataTransfer:0}),dx=Tn(hx),px=Et({},da,{relatedTarget:0}),Dc=Tn(px),mx=Et({},Ys,{animationName:0,elapsedTime:0,pseudoElement:0}),_x=Tn(mx),gx=Et({},Ys,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vx=Tn(gx),xx=Et({},Ys,{data:0}),Kd=Tn(xx),yx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ex(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Mx[t])?!!e[t]:!1}function Ih(){return Ex}var wx=Et({},da,{key:function(t){if(t.key){var e=yx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Sx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ih,charCode:function(t){return t.type==="keypress"?hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Tx=Tn(wx),Ax=Et({},oc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zd=Tn(Ax),Rx=Et({},da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ih}),Cx=Tn(Rx),bx=Et({},Ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),Px=Tn(bx),Lx=Et({},oc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Dx=Tn(Lx),Nx=[9,13,27,32],Uh=Ri&&"CompositionEvent"in window,Ro=null;Ri&&"documentMode"in document&&(Ro=document.documentMode);var Ix=Ri&&"TextEvent"in window&&!Ro,$_=Ri&&(!Uh||Ro&&8<Ro&&11>=Ro),Jd=" ",Qd=!1;function K_(t,e){switch(t){case"keyup":return Nx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Z_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fs=!1;function Ux(t,e){switch(t){case"compositionend":return Z_(e);case"keypress":return e.which!==32?null:(Qd=!0,Jd);case"textInput":return t=e.data,t===Jd&&Qd?null:t;default:return null}}function Fx(t,e){if(fs)return t==="compositionend"||!Uh&&K_(t,e)?(t=q_(),fl=Dh=Xi=null,fs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return $_&&e.locale!=="ko"?null:e.data;default:return null}}var Ox={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ep(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ox[t.type]:e==="textarea"}function J_(t,e,n,i){b_(i),e=Nl(e,"onChange"),0<e.length&&(n=new Nh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Co=null,Xo=null;function kx(t){cg(t,0)}function ac(t){var e=ps(t);if(M_(e))return t}function zx(t,e){if(t==="change")return e}var Q_=!1;if(Ri){var Nc;if(Ri){var Ic="oninput"in document;if(!Ic){var tp=document.createElement("div");tp.setAttribute("oninput","return;"),Ic=typeof tp.oninput=="function"}Nc=Ic}else Nc=!1;Q_=Nc&&(!document.documentMode||9<document.documentMode)}function np(){Co&&(Co.detachEvent("onpropertychange",eg),Xo=Co=null)}function eg(t){if(t.propertyName==="value"&&ac(Xo)){var e=[];J_(e,Xo,t,Rh(t)),N_(kx,e)}}function Bx(t,e,n){t==="focusin"?(np(),Co=e,Xo=n,Co.attachEvent("onpropertychange",eg)):t==="focusout"&&np()}function Hx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ac(Xo)}function Vx(t,e){if(t==="click")return ac(e)}function Gx(t,e){if(t==="input"||t==="change")return ac(e)}function Wx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jn=typeof Object.is=="function"?Object.is:Wx;function jo(t,e){if(Jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Nu.call(e,r)||!Jn(t[r],e[r]))return!1}return!0}function ip(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rp(t,e){var n=ip(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ip(n)}}function tg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?tg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ng(){for(var t=window,e=Al();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Al(t.document)}return e}function Fh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Xx(t){var e=ng(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&tg(n.ownerDocument.documentElement,n)){if(i!==null&&Fh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=rp(n,s);var o=rp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jx=Ri&&"documentMode"in document&&11>=document.documentMode,hs=null,Ju=null,bo=null,Qu=!1;function sp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qu||hs==null||hs!==Al(i)||(i=hs,"selectionStart"in i&&Fh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),bo&&jo(bo,i)||(bo=i,i=Nl(Ju,"onSelect"),0<i.length&&(e=new Nh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=hs)))}function Ta(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ds={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionend:Ta("Transition","TransitionEnd")},Uc={},ig={};Ri&&(ig=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function lc(t){if(Uc[t])return Uc[t];if(!ds[t])return t;var e=ds[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ig)return Uc[t]=e[n];return t}var rg=lc("animationend"),sg=lc("animationiteration"),og=lc("animationstart"),ag=lc("transitionend"),lg=new Map,op="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ar(t,e){lg.set(t,e),Br(e,[t])}for(var Fc=0;Fc<op.length;Fc++){var Oc=op[Fc],Yx=Oc.toLowerCase(),qx=Oc[0].toUpperCase()+Oc.slice(1);ar(Yx,"on"+qx)}ar(rg,"onAnimationEnd");ar(sg,"onAnimationIteration");ar(og,"onAnimationStart");ar("dblclick","onDoubleClick");ar("focusin","onFocus");ar("focusout","onBlur");ar(ag,"onTransitionEnd");Ns("onMouseEnter",["mouseout","mouseover"]);Ns("onMouseLeave",["mouseout","mouseover"]);Ns("onPointerEnter",["pointerout","pointerover"]);Ns("onPointerLeave",["pointerout","pointerover"]);Br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Br("onBeforeInput",["compositionend","keypress","textInput","paste"]);Br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$x=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mo));function ap(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Yv(i,e,void 0,t),t.currentTarget=null}function cg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;ap(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;ap(r,a,c),s=l}}}if(Cl)throw t=qu,Cl=!1,qu=null,t}function pt(t,e){var n=e[sf];n===void 0&&(n=e[sf]=new Set);var i=t+"__bubble";n.has(i)||(ug(e,t,2,!1),n.add(i))}function kc(t,e,n){var i=0;e&&(i|=4),ug(n,t,i,e)}var Aa="_reactListening"+Math.random().toString(36).slice(2);function Yo(t){if(!t[Aa]){t[Aa]=!0,g_.forEach(function(n){n!=="selectionchange"&&($x.has(n)||kc(n,!1,t),kc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Aa]||(e[Aa]=!0,kc("selectionchange",!1,e))}}function ug(t,e,n,i){switch(Y_(e)){case 1:var r=cx;break;case 4:r=ux;break;default:r=Lh}n=r.bind(null,e,n,t),r=void 0,!Yu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function zc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Er(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}N_(function(){var c=s,h=Rh(n),f=[];e:{var d=lg.get(t);if(d!==void 0){var p=Nh,_=t;switch(t){case"keypress":if(hl(n)===0)break e;case"keydown":case"keyup":p=Tx;break;case"focusin":_="focus",p=Dc;break;case"focusout":_="blur",p=Dc;break;case"beforeblur":case"afterblur":p=Dc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=$d;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=dx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Cx;break;case rg:case sg:case og:p=_x;break;case ag:p=Px;break;case"scroll":p=fx;break;case"wheel":p=Dx;break;case"copy":case"cut":case"paste":p=vx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Zd}var v=(e&4)!==0,m=!v&&t==="scroll",u=v?d!==null?d+"Capture":null:d;v=[];for(var g=c,x;g!==null;){x=g;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,u!==null&&(y=Ho(g,u),y!=null&&v.push(qo(g,y,x)))),m)break;g=g.return}0<v.length&&(d=new p(d,_,null,n,h),f.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Xu&&(_=n.relatedTarget||n.fromElement)&&(Er(_)||_[Ci]))break e;if((p||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?Er(_):null,_!==null&&(m=Hr(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(v=$d,y="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(v=Zd,y="onPointerLeave",u="onPointerEnter",g="pointer"),m=p==null?d:ps(p),x=_==null?d:ps(_),d=new v(y,g+"leave",p,n,h),d.target=m,d.relatedTarget=x,y=null,Er(h)===c&&(v=new v(u,g+"enter",_,n,h),v.target=x,v.relatedTarget=m,y=v),m=y,p&&_)t:{for(v=p,u=_,g=0,x=v;x;x=Yr(x))g++;for(x=0,y=u;y;y=Yr(y))x++;for(;0<g-x;)v=Yr(v),g--;for(;0<x-g;)u=Yr(u),x--;for(;g--;){if(v===u||u!==null&&v===u.alternate)break t;v=Yr(v),u=Yr(u)}v=null}else v=null;p!==null&&lp(f,d,p,v,!1),_!==null&&m!==null&&lp(f,m,_,v,!0)}}e:{if(d=c?ps(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var A=zx;else if(ep(d))if(Q_)A=Gx;else{A=Hx;var C=Bx}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=Vx);if(A&&(A=A(t,c))){J_(f,A,n,h);break e}C&&C(t,d,c),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&Bu(d,"number",d.value)}switch(C=c?ps(c):window,t){case"focusin":(ep(C)||C.contentEditable==="true")&&(hs=C,Ju=c,bo=null);break;case"focusout":bo=Ju=hs=null;break;case"mousedown":Qu=!0;break;case"contextmenu":case"mouseup":case"dragend":Qu=!1,sp(f,n,h);break;case"selectionchange":if(jx)break;case"keydown":case"keyup":sp(f,n,h)}var T;if(Uh)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else fs?K_(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&($_&&n.locale!=="ko"&&(fs||b!=="onCompositionStart"?b==="onCompositionEnd"&&fs&&(T=q_()):(Xi=h,Dh="value"in Xi?Xi.value:Xi.textContent,fs=!0)),C=Nl(c,b),0<C.length&&(b=new Kd(b,t,null,n,h),f.push({event:b,listeners:C}),T?b.data=T:(T=Z_(n),T!==null&&(b.data=T)))),(T=Ix?Ux(t,n):Fx(t,n))&&(c=Nl(c,"onBeforeInput"),0<c.length&&(h=new Kd("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=T))}cg(f,e)})}function qo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Nl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ho(t,n),s!=null&&i.unshift(qo(t,s,r)),s=Ho(t,e),s!=null&&i.push(qo(t,s,r))),t=t.return}return i}function Yr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ho(n,s),l!=null&&o.unshift(qo(n,l,a))):r||(l=Ho(n,s),l!=null&&o.push(qo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Kx=/\r\n?/g,Zx=/\u0000|\uFFFD/g;function cp(t){return(typeof t=="string"?t:""+t).replace(Kx,`
`).replace(Zx,"")}function Ra(t,e,n){if(e=cp(e),cp(t)!==e&&n)throw Error(he(425))}function Il(){}var ef=null,tf=null;function nf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var rf=typeof setTimeout=="function"?setTimeout:void 0,Jx=typeof clearTimeout=="function"?clearTimeout:void 0,up=typeof Promise=="function"?Promise:void 0,Qx=typeof queueMicrotask=="function"?queueMicrotask:typeof up<"u"?function(t){return up.resolve(null).then(t).catch(ey)}:rf;function ey(t){setTimeout(function(){throw t})}function Bc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Wo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Wo(e)}function Ki(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function fp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qs=Math.random().toString(36).slice(2),ii="__reactFiber$"+qs,$o="__reactProps$"+qs,Ci="__reactContainer$"+qs,sf="__reactEvents$"+qs,ty="__reactListeners$"+qs,ny="__reactHandles$"+qs;function Er(t){var e=t[ii];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ci]||n[ii]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fp(t);t!==null;){if(n=t[ii])return n;t=fp(t)}return e}t=n,n=t.parentNode}return null}function pa(t){return t=t[ii]||t[Ci],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ps(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(he(33))}function cc(t){return t[$o]||null}var of=[],ms=-1;function lr(t){return{current:t}}function mt(t){0>ms||(t.current=of[ms],of[ms]=null,ms--)}function ht(t,e){ms++,of[ms]=t.current,t.current=e}var rr={},$t=lr(rr),cn=lr(!1),Lr=rr;function Is(t,e){var n=t.type.contextTypes;if(!n)return rr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function un(t){return t=t.childContextTypes,t!=null}function Ul(){mt(cn),mt($t)}function hp(t,e,n){if($t.current!==rr)throw Error(he(168));ht($t,e),ht(cn,n)}function fg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(he(108,Bv(t)||"Unknown",r));return Et({},n,i)}function Fl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||rr,Lr=$t.current,ht($t,t),ht(cn,cn.current),!0}function dp(t,e,n){var i=t.stateNode;if(!i)throw Error(he(169));n?(t=fg(t,e,Lr),i.__reactInternalMemoizedMergedChildContext=t,mt(cn),mt($t),ht($t,t)):mt(cn),ht(cn,n)}var Si=null,uc=!1,Hc=!1;function hg(t){Si===null?Si=[t]:Si.push(t)}function iy(t){uc=!0,hg(t)}function cr(){if(!Hc&&Si!==null){Hc=!0;var t=0,e=ot;try{var n=Si;for(ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Si=null,uc=!1}catch(r){throw Si!==null&&(Si=Si.slice(t+1)),O_(Ch,cr),r}finally{ot=e,Hc=!1}}return null}var _s=[],gs=0,Ol=null,kl=0,Ln=[],Dn=0,Dr=null,Mi=1,Ei="";function vr(t,e){_s[gs++]=kl,_s[gs++]=Ol,Ol=t,kl=e}function dg(t,e,n){Ln[Dn++]=Mi,Ln[Dn++]=Ei,Ln[Dn++]=Dr,Dr=t;var i=Mi;t=Ei;var r=32-$n(i)-1;i&=~(1<<r),n+=1;var s=32-$n(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Mi=1<<32-$n(e)+r|n<<r|i,Ei=s+t}else Mi=1<<s|n<<r|i,Ei=t}function Oh(t){t.return!==null&&(vr(t,1),dg(t,1,0))}function kh(t){for(;t===Ol;)Ol=_s[--gs],_s[gs]=null,kl=_s[--gs],_s[gs]=null;for(;t===Dr;)Dr=Ln[--Dn],Ln[Dn]=null,Ei=Ln[--Dn],Ln[Dn]=null,Mi=Ln[--Dn],Ln[Dn]=null}var Mn=null,Sn=null,_t=!1,jn=null;function pg(t,e){var n=In(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function pp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Mn=t,Sn=Ki(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Mn=t,Sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Dr!==null?{id:Mi,overflow:Ei}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=In(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Mn=t,Sn=null,!0):!1;default:return!1}}function af(t){return(t.mode&1)!==0&&(t.flags&128)===0}function lf(t){if(_t){var e=Sn;if(e){var n=e;if(!pp(t,e)){if(af(t))throw Error(he(418));e=Ki(n.nextSibling);var i=Mn;e&&pp(t,e)?pg(i,n):(t.flags=t.flags&-4097|2,_t=!1,Mn=t)}}else{if(af(t))throw Error(he(418));t.flags=t.flags&-4097|2,_t=!1,Mn=t}}}function mp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Mn=t}function Ca(t){if(t!==Mn)return!1;if(!_t)return mp(t),_t=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!nf(t.type,t.memoizedProps)),e&&(e=Sn)){if(af(t))throw mg(),Error(he(418));for(;e;)pg(t,e),e=Ki(e.nextSibling)}if(mp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(he(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Sn=Ki(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Sn=null}}else Sn=Mn?Ki(t.stateNode.nextSibling):null;return!0}function mg(){for(var t=Sn;t;)t=Ki(t.nextSibling)}function Us(){Sn=Mn=null,_t=!1}function zh(t){jn===null?jn=[t]:jn.push(t)}var ry=Li.ReactCurrentBatchConfig;function co(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(he(309));var i=n.stateNode}if(!i)throw Error(he(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(he(284));if(!n._owner)throw Error(he(290,t))}return t}function ba(t,e){throw t=Object.prototype.toString.call(e),Error(he(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function _p(t){var e=t._init;return e(t._payload)}function _g(t){function e(u,g){if(t){var x=u.deletions;x===null?(u.deletions=[g],u.flags|=16):x.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=er(u,g),u.index=0,u.sibling=null,u}function s(u,g,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<g?(u.flags|=2,g):x):(u.flags|=2,g)):(u.flags|=1048576,g)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,g,x,y){return g===null||g.tag!==6?(g=qc(x,u.mode,y),g.return=u,g):(g=r(g,x),g.return=u,g)}function l(u,g,x,y){var A=x.type;return A===us?h(u,g,x.props.children,y,x.key):g!==null&&(g.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===zi&&_p(A)===g.type)?(y=r(g,x.props),y.ref=co(u,g,x),y.return=u,y):(y=xl(x.type,x.key,x.props,null,u.mode,y),y.ref=co(u,g,x),y.return=u,y)}function c(u,g,x,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=$c(x,u.mode,y),g.return=u,g):(g=r(g,x.children||[]),g.return=u,g)}function h(u,g,x,y,A){return g===null||g.tag!==7?(g=br(x,u.mode,y,A),g.return=u,g):(g=r(g,x),g.return=u,g)}function f(u,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=qc(""+g,u.mode,x),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case va:return x=xl(g.type,g.key,g.props,null,u.mode,x),x.ref=co(u,null,g),x.return=u,x;case cs:return g=$c(g,u.mode,x),g.return=u,g;case zi:var y=g._init;return f(u,y(g._payload),x)}if(yo(g)||ro(g))return g=br(g,u.mode,x,null),g.return=u,g;ba(u,g)}return null}function d(u,g,x,y){var A=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return A!==null?null:a(u,g,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case va:return x.key===A?l(u,g,x,y):null;case cs:return x.key===A?c(u,g,x,y):null;case zi:return A=x._init,d(u,g,A(x._payload),y)}if(yo(x)||ro(x))return A!==null?null:h(u,g,x,y,null);ba(u,x)}return null}function p(u,g,x,y,A){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(x)||null,a(g,u,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case va:return u=u.get(y.key===null?x:y.key)||null,l(g,u,y,A);case cs:return u=u.get(y.key===null?x:y.key)||null,c(g,u,y,A);case zi:var C=y._init;return p(u,g,x,C(y._payload),A)}if(yo(y)||ro(y))return u=u.get(x)||null,h(g,u,y,A,null);ba(g,y)}return null}function _(u,g,x,y){for(var A=null,C=null,T=g,b=g=0,E=null;T!==null&&b<x.length;b++){T.index>b?(E=T,T=null):E=T.sibling;var M=d(u,T,x[b],y);if(M===null){T===null&&(T=E);break}t&&T&&M.alternate===null&&e(u,T),g=s(M,g,b),C===null?A=M:C.sibling=M,C=M,T=E}if(b===x.length)return n(u,T),_t&&vr(u,b),A;if(T===null){for(;b<x.length;b++)T=f(u,x[b],y),T!==null&&(g=s(T,g,b),C===null?A=T:C.sibling=T,C=T);return _t&&vr(u,b),A}for(T=i(u,T);b<x.length;b++)E=p(T,u,b,x[b],y),E!==null&&(t&&E.alternate!==null&&T.delete(E.key===null?b:E.key),g=s(E,g,b),C===null?A=E:C.sibling=E,C=E);return t&&T.forEach(function(L){return e(u,L)}),_t&&vr(u,b),A}function v(u,g,x,y){var A=ro(x);if(typeof A!="function")throw Error(he(150));if(x=A.call(x),x==null)throw Error(he(151));for(var C=A=null,T=g,b=g=0,E=null,M=x.next();T!==null&&!M.done;b++,M=x.next()){T.index>b?(E=T,T=null):E=T.sibling;var L=d(u,T,M.value,y);if(L===null){T===null&&(T=E);break}t&&T&&L.alternate===null&&e(u,T),g=s(L,g,b),C===null?A=L:C.sibling=L,C=L,T=E}if(M.done)return n(u,T),_t&&vr(u,b),A;if(T===null){for(;!M.done;b++,M=x.next())M=f(u,M.value,y),M!==null&&(g=s(M,g,b),C===null?A=M:C.sibling=M,C=M);return _t&&vr(u,b),A}for(T=i(u,T);!M.done;b++,M=x.next())M=p(T,u,b,M.value,y),M!==null&&(t&&M.alternate!==null&&T.delete(M.key===null?b:M.key),g=s(M,g,b),C===null?A=M:C.sibling=M,C=M);return t&&T.forEach(function(F){return e(u,F)}),_t&&vr(u,b),A}function m(u,g,x,y){if(typeof x=="object"&&x!==null&&x.type===us&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case va:e:{for(var A=x.key,C=g;C!==null;){if(C.key===A){if(A=x.type,A===us){if(C.tag===7){n(u,C.sibling),g=r(C,x.props.children),g.return=u,u=g;break e}}else if(C.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===zi&&_p(A)===C.type){n(u,C.sibling),g=r(C,x.props),g.ref=co(u,C,x),g.return=u,u=g;break e}n(u,C);break}else e(u,C);C=C.sibling}x.type===us?(g=br(x.props.children,u.mode,y,x.key),g.return=u,u=g):(y=xl(x.type,x.key,x.props,null,u.mode,y),y.ref=co(u,g,x),y.return=u,u=y)}return o(u);case cs:e:{for(C=x.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(u,g.sibling),g=r(g,x.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=$c(x,u.mode,y),g.return=u,u=g}return o(u);case zi:return C=x._init,m(u,g,C(x._payload),y)}if(yo(x))return _(u,g,x,y);if(ro(x))return v(u,g,x,y);ba(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,x),g.return=u,u=g):(n(u,g),g=qc(x,u.mode,y),g.return=u,u=g),o(u)):n(u,g)}return m}var Fs=_g(!0),gg=_g(!1),zl=lr(null),Bl=null,vs=null,Bh=null;function Hh(){Bh=vs=Bl=null}function Vh(t){var e=zl.current;mt(zl),t._currentValue=e}function cf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Cs(t,e){Bl=t,Bh=vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ln=!0),t.firstContext=null)}function Fn(t){var e=t._currentValue;if(Bh!==t)if(t={context:t,memoizedValue:e,next:null},vs===null){if(Bl===null)throw Error(he(308));vs=t,Bl.dependencies={lanes:0,firstContext:t}}else vs=vs.next=t;return e}var wr=null;function Gh(t){wr===null?wr=[t]:wr.push(t)}function vg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Gh(e)):(n.next=r.next,r.next=n),e.interleaved=n,bi(t,i)}function bi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Bi=!1;function Wh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ti(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,bi(t,n)}return r=i.interleaved,r===null?(e.next=e,Gh(i)):(e.next=r.next,r.next=e),i.interleaved=e,bi(t,n)}function dl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,bh(t,n)}}function gp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Hl(t,e,n,i){var r=t.updateQueue;Bi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,h=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,v=a;switch(d=e,p=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){f=_.call(p,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,d=typeof _=="function"?_.call(p,f,d):_,d==null)break e;f=Et({},f,d);break e;case 2:Bi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=p,l=f):h=h.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ir|=o,t.lanes=o,t.memoizedState=f}}function vp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(he(191,r));r.call(i)}}}var ma={},li=lr(ma),Ko=lr(ma),Zo=lr(ma);function Tr(t){if(t===ma)throw Error(he(174));return t}function Xh(t,e){switch(ht(Zo,e),ht(Ko,t),ht(li,ma),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Vu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Vu(e,t)}mt(li),ht(li,e)}function Os(){mt(li),mt(Ko),mt(Zo)}function yg(t){Tr(Zo.current);var e=Tr(li.current),n=Vu(e,t.type);e!==n&&(ht(Ko,t),ht(li,n))}function jh(t){Ko.current===t&&(mt(li),mt(Ko))}var yt=lr(0);function Vl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Vc=[];function Yh(){for(var t=0;t<Vc.length;t++)Vc[t]._workInProgressVersionPrimary=null;Vc.length=0}var pl=Li.ReactCurrentDispatcher,Gc=Li.ReactCurrentBatchConfig,Nr=0,Mt=null,Dt=null,Ot=null,Gl=!1,Po=!1,Jo=0,sy=0;function Wt(){throw Error(he(321))}function qh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jn(t[n],e[n]))return!1;return!0}function $h(t,e,n,i,r,s){if(Nr=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pl.current=t===null||t.memoizedState===null?cy:uy,t=n(i,r),Po){s=0;do{if(Po=!1,Jo=0,25<=s)throw Error(he(301));s+=1,Ot=Dt=null,e.updateQueue=null,pl.current=fy,t=n(i,r)}while(Po)}if(pl.current=Wl,e=Dt!==null&&Dt.next!==null,Nr=0,Ot=Dt=Mt=null,Gl=!1,e)throw Error(he(300));return t}function Kh(){var t=Jo!==0;return Jo=0,t}function ti(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?Mt.memoizedState=Ot=t:Ot=Ot.next=t,Ot}function On(){if(Dt===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=Dt.next;var e=Ot===null?Mt.memoizedState:Ot.next;if(e!==null)Ot=e,Dt=t;else{if(t===null)throw Error(he(310));Dt=t,t={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},Ot===null?Mt.memoizedState=Ot=t:Ot=Ot.next=t}return Ot}function Qo(t,e){return typeof e=="function"?e(t):e}function Wc(t){var e=On(),n=e.queue;if(n===null)throw Error(he(311));n.lastRenderedReducer=t;var i=Dt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((Nr&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Mt.lanes|=h,Ir|=h}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Jn(i,e.memoizedState)||(ln=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Mt.lanes|=s,Ir|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Xc(t){var e=On(),n=e.queue;if(n===null)throw Error(he(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Jn(s,e.memoizedState)||(ln=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Sg(){}function Mg(t,e){var n=Mt,i=On(),r=e(),s=!Jn(i.memoizedState,r);if(s&&(i.memoizedState=r,ln=!0),i=i.queue,Zh(Tg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ot!==null&&Ot.memoizedState.tag&1){if(n.flags|=2048,ea(9,wg.bind(null,n,i,r,e),void 0,null),kt===null)throw Error(he(349));Nr&30||Eg(n,e,r)}return r}function Eg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function wg(t,e,n,i){e.value=n,e.getSnapshot=i,Ag(e)&&Rg(t)}function Tg(t,e,n){return n(function(){Ag(e)&&Rg(t)})}function Ag(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jn(t,n)}catch{return!0}}function Rg(t){var e=bi(t,1);e!==null&&Kn(e,t,1,-1)}function xp(t){var e=ti();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qo,lastRenderedState:t},e.queue=t,t=t.dispatch=ly.bind(null,Mt,t),[e.memoizedState,t]}function ea(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Cg(){return On().memoizedState}function ml(t,e,n,i){var r=ti();Mt.flags|=t,r.memoizedState=ea(1|e,n,void 0,i===void 0?null:i)}function fc(t,e,n,i){var r=On();i=i===void 0?null:i;var s=void 0;if(Dt!==null){var o=Dt.memoizedState;if(s=o.destroy,i!==null&&qh(i,o.deps)){r.memoizedState=ea(e,n,s,i);return}}Mt.flags|=t,r.memoizedState=ea(1|e,n,s,i)}function yp(t,e){return ml(8390656,8,t,e)}function Zh(t,e){return fc(2048,8,t,e)}function bg(t,e){return fc(4,2,t,e)}function Pg(t,e){return fc(4,4,t,e)}function Lg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Dg(t,e,n){return n=n!=null?n.concat([t]):null,fc(4,4,Lg.bind(null,e,t),n)}function Jh(){}function Ng(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&qh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Ig(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&qh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Ug(t,e,n){return Nr&21?(Jn(n,e)||(n=B_(),Mt.lanes|=n,Ir|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ln=!0),t.memoizedState=n)}function oy(t,e){var n=ot;ot=n!==0&&4>n?n:4,t(!0);var i=Gc.transition;Gc.transition={};try{t(!1),e()}finally{ot=n,Gc.transition=i}}function Fg(){return On().memoizedState}function ay(t,e,n){var i=Qi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Og(t))kg(e,n);else if(n=vg(t,e,n,i),n!==null){var r=en();Kn(n,t,i,r),zg(n,e,i)}}function ly(t,e,n){var i=Qi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Og(t))kg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Jn(a,o)){var l=e.interleaved;l===null?(r.next=r,Gh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=vg(t,e,r,i),n!==null&&(r=en(),Kn(n,t,i,r),zg(n,e,i))}}function Og(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function kg(t,e){Po=Gl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function zg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,bh(t,n)}}var Wl={readContext:Fn,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},cy={readContext:Fn,useCallback:function(t,e){return ti().memoizedState=[t,e===void 0?null:e],t},useContext:Fn,useEffect:yp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ml(4194308,4,Lg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ml(4194308,4,t,e)},useInsertionEffect:function(t,e){return ml(4,2,t,e)},useMemo:function(t,e){var n=ti();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ti();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ay.bind(null,Mt,t),[i.memoizedState,t]},useRef:function(t){var e=ti();return t={current:t},e.memoizedState=t},useState:xp,useDebugValue:Jh,useDeferredValue:function(t){return ti().memoizedState=t},useTransition:function(){var t=xp(!1),e=t[0];return t=oy.bind(null,t[1]),ti().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Mt,r=ti();if(_t){if(n===void 0)throw Error(he(407));n=n()}else{if(n=e(),kt===null)throw Error(he(349));Nr&30||Eg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,yp(Tg.bind(null,i,s,t),[t]),i.flags|=2048,ea(9,wg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ti(),e=kt.identifierPrefix;if(_t){var n=Ei,i=Mi;n=(i&~(1<<32-$n(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Jo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=sy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},uy={readContext:Fn,useCallback:Ng,useContext:Fn,useEffect:Zh,useImperativeHandle:Dg,useInsertionEffect:bg,useLayoutEffect:Pg,useMemo:Ig,useReducer:Wc,useRef:Cg,useState:function(){return Wc(Qo)},useDebugValue:Jh,useDeferredValue:function(t){var e=On();return Ug(e,Dt.memoizedState,t)},useTransition:function(){var t=Wc(Qo)[0],e=On().memoizedState;return[t,e]},useMutableSource:Sg,useSyncExternalStore:Mg,useId:Fg,unstable_isNewReconciler:!1},fy={readContext:Fn,useCallback:Ng,useContext:Fn,useEffect:Zh,useImperativeHandle:Dg,useInsertionEffect:bg,useLayoutEffect:Pg,useMemo:Ig,useReducer:Xc,useRef:Cg,useState:function(){return Xc(Qo)},useDebugValue:Jh,useDeferredValue:function(t){var e=On();return Dt===null?e.memoizedState=t:Ug(e,Dt.memoizedState,t)},useTransition:function(){var t=Xc(Qo)[0],e=On().memoizedState;return[t,e]},useMutableSource:Sg,useSyncExternalStore:Mg,useId:Fg,unstable_isNewReconciler:!1};function Gn(t,e){if(t&&t.defaultProps){e=Et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function uf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hc={isMounted:function(t){return(t=t._reactInternals)?Hr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=en(),r=Qi(t),s=Ti(i,r);s.payload=e,n!=null&&(s.callback=n),e=Zi(t,s,r),e!==null&&(Kn(e,t,r,i),dl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=en(),r=Qi(t),s=Ti(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Zi(t,s,r),e!==null&&(Kn(e,t,r,i),dl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=en(),i=Qi(t),r=Ti(n,i);r.tag=2,e!=null&&(r.callback=e),e=Zi(t,r,i),e!==null&&(Kn(e,t,i,n),dl(e,t,i))}};function Sp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!jo(n,i)||!jo(r,s):!0}function Bg(t,e,n){var i=!1,r=rr,s=e.contextType;return typeof s=="object"&&s!==null?s=Fn(s):(r=un(e)?Lr:$t.current,i=e.contextTypes,s=(i=i!=null)?Is(t,r):rr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Mp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&hc.enqueueReplaceState(e,e.state,null)}function ff(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Wh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Fn(s):(s=un(e)?Lr:$t.current,r.context=Is(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(uf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&hc.enqueueReplaceState(r,r.state,null),Hl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ks(t,e){try{var n="",i=e;do n+=zv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function jc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function hf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var hy=typeof WeakMap=="function"?WeakMap:Map;function Hg(t,e,n){n=Ti(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){jl||(jl=!0,Mf=i),hf(t,e)},n}function Vg(t,e,n){n=Ti(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){hf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){hf(t,e),typeof i!="function"&&(Ji===null?Ji=new Set([this]):Ji.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ep(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new hy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Ay.bind(null,t,e,n),e.then(t,t))}function wp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Tp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ti(-1,1),e.tag=2,Zi(n,e,1))),n.lanes|=1),t)}var dy=Li.ReactCurrentOwner,ln=!1;function Qt(t,e,n,i){e.child=t===null?gg(e,null,n,i):Fs(e,t.child,n,i)}function Ap(t,e,n,i,r){n=n.render;var s=e.ref;return Cs(e,r),i=$h(t,e,n,i,s,r),n=Kh(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(_t&&n&&Oh(e),e.flags|=1,Qt(t,e,i,r),e.child)}function Rp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!od(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Gg(t,e,s,i,r)):(t=xl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:jo,n(o,i)&&t.ref===e.ref)return Pi(t,e,r)}return e.flags|=1,t=er(s,i),t.ref=e.ref,t.return=e,e.child=t}function Gg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(jo(s,i)&&t.ref===e.ref)if(ln=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(ln=!0);else return e.lanes=t.lanes,Pi(t,e,r)}return df(t,e,n,i,r)}function Wg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(ys,xn),xn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ht(ys,xn),xn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ht(ys,xn),xn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ht(ys,xn),xn|=i;return Qt(t,e,r,n),e.child}function Xg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function df(t,e,n,i,r){var s=un(n)?Lr:$t.current;return s=Is(e,s),Cs(e,r),n=$h(t,e,n,i,s,r),i=Kh(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(_t&&i&&Oh(e),e.flags|=1,Qt(t,e,n,r),e.child)}function Cp(t,e,n,i,r){if(un(n)){var s=!0;Fl(e)}else s=!1;if(Cs(e,r),e.stateNode===null)_l(t,e),Bg(e,n,i),ff(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Fn(c):(c=un(n)?Lr:$t.current,c=Is(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Mp(e,o,i,c),Bi=!1;var d=e.memoizedState;o.state=d,Hl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||cn.current||Bi?(typeof h=="function"&&(uf(e,n,h,i),l=e.memoizedState),(a=Bi||Sp(e,n,a,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,xg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Gn(e.type,a),o.props=c,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Fn(l):(l=un(n)?Lr:$t.current,l=Is(e,l));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Mp(e,o,i,l),Bi=!1,d=e.memoizedState,o.state=d,Hl(e,i,o,r);var _=e.memoizedState;a!==f||d!==_||cn.current||Bi?(typeof p=="function"&&(uf(e,n,p,i),_=e.memoizedState),(c=Bi||Sp(e,n,c,i,d,_,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return pf(t,e,n,i,s,r)}function pf(t,e,n,i,r,s){Xg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&dp(e,n,!1),Pi(t,e,s);i=e.stateNode,dy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Fs(e,t.child,null,s),e.child=Fs(e,null,a,s)):Qt(t,e,a,s),e.memoizedState=i.state,r&&dp(e,n,!0),e.child}function jg(t){var e=t.stateNode;e.pendingContext?hp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&hp(t,e.context,!1),Xh(t,e.containerInfo)}function bp(t,e,n,i,r){return Us(),zh(r),e.flags|=256,Qt(t,e,n,i),e.child}var mf={dehydrated:null,treeContext:null,retryLane:0};function _f(t){return{baseLanes:t,cachePool:null,transitions:null}}function Yg(t,e,n){var i=e.pendingProps,r=yt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ht(yt,r&1),t===null)return lf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=mc(o,i,0,null),t=br(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=_f(n),e.memoizedState=mf,t):Qh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return py(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=er(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=er(a,s):(s=br(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?_f(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=mf,i}return s=t.child,t=s.sibling,i=er(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Qh(t,e){return e=mc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Pa(t,e,n,i){return i!==null&&zh(i),Fs(e,t.child,null,n),t=Qh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function py(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=jc(Error(he(422))),Pa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=mc({mode:"visible",children:i.children},r,0,null),s=br(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Fs(e,t.child,null,o),e.child.memoizedState=_f(o),e.memoizedState=mf,s);if(!(e.mode&1))return Pa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(he(419)),i=jc(s,i,void 0),Pa(t,e,o,i)}if(a=(o&t.childLanes)!==0,ln||a){if(i=kt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,bi(t,r),Kn(i,t,r,-1))}return sd(),i=jc(Error(he(421))),Pa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ry.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Sn=Ki(r.nextSibling),Mn=e,_t=!0,jn=null,t!==null&&(Ln[Dn++]=Mi,Ln[Dn++]=Ei,Ln[Dn++]=Dr,Mi=t.id,Ei=t.overflow,Dr=e),e=Qh(e,i.children),e.flags|=4096,e)}function Pp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),cf(t.return,e,n)}function Yc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function qg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Qt(t,e,i.children,n),i=yt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pp(t,n,e);else if(t.tag===19)Pp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ht(yt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Vl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Yc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Vl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Yc(e,!0,n,null,s);break;case"together":Yc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function _l(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ir|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(he(153));if(e.child!==null){for(t=e.child,n=er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function my(t,e,n){switch(e.tag){case 3:jg(e),Us();break;case 5:yg(e);break;case 1:un(e.type)&&Fl(e);break;case 4:Xh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(zl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(yt,yt.current&1),e.flags|=128,null):n&e.child.childLanes?Yg(t,e,n):(ht(yt,yt.current&1),t=Pi(t,e,n),t!==null?t.sibling:null);ht(yt,yt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return qg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(yt,yt.current),i)break;return null;case 22:case 23:return e.lanes=0,Wg(t,e,n)}return Pi(t,e,n)}var $g,gf,Kg,Zg;$g=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gf=function(){};Kg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Tr(li.current);var s=null;switch(n){case"input":r=ku(t,r),i=ku(t,i),s=[];break;case"select":r=Et({},r,{value:void 0}),i=Et({},i,{value:void 0}),s=[];break;case"textarea":r=Hu(t,r),i=Hu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Il)}Gu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(zo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(zo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&pt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Zg=function(t,e,n,i){n!==i&&(e.flags|=4)};function uo(t,e){if(!_t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function _y(t,e,n){var i=e.pendingProps;switch(kh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return un(e.type)&&Ul(),Xt(e),null;case 3:return i=e.stateNode,Os(),mt(cn),mt($t),Yh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ca(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jn!==null&&(Tf(jn),jn=null))),gf(t,e),Xt(e),null;case 5:jh(e);var r=Tr(Zo.current);if(n=e.type,t!==null&&e.stateNode!=null)Kg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(he(166));return Xt(e),null}if(t=Tr(li.current),Ca(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ii]=e,i[$o]=s,t=(e.mode&1)!==0,n){case"dialog":pt("cancel",i),pt("close",i);break;case"iframe":case"object":case"embed":pt("load",i);break;case"video":case"audio":for(r=0;r<Mo.length;r++)pt(Mo[r],i);break;case"source":pt("error",i);break;case"img":case"image":case"link":pt("error",i),pt("load",i);break;case"details":pt("toggle",i);break;case"input":zd(i,s),pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},pt("invalid",i);break;case"textarea":Hd(i,s),pt("invalid",i)}Gu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ra(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ra(i.textContent,a,t),r=["children",""+a]):zo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&pt("scroll",i)}switch(n){case"input":xa(i),Bd(i,s,!0);break;case"textarea":xa(i),Vd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Il)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=T_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ii]=e,t[$o]=i,$g(t,e,!1,!1),e.stateNode=t;e:{switch(o=Wu(n,i),n){case"dialog":pt("cancel",t),pt("close",t),r=i;break;case"iframe":case"object":case"embed":pt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Mo.length;r++)pt(Mo[r],t);r=i;break;case"source":pt("error",t),r=i;break;case"img":case"image":case"link":pt("error",t),pt("load",t),r=i;break;case"details":pt("toggle",t),r=i;break;case"input":zd(t,i),r=ku(t,i),pt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Et({},i,{value:void 0}),pt("invalid",t);break;case"textarea":Hd(t,i),r=Hu(t,i),pt("invalid",t);break;default:r=i}Gu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?C_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&A_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Bo(t,l):typeof l=="number"&&Bo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(zo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pt("scroll",t):l!=null&&Eh(t,s,l,o))}switch(n){case"input":xa(t),Bd(t,i,!1);break;case"textarea":xa(t),Vd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ir(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ws(t,!!i.multiple,s,!1):i.defaultValue!=null&&ws(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Il)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xt(e),null;case 6:if(t&&e.stateNode!=null)Zg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(he(166));if(n=Tr(Zo.current),Tr(li.current),Ca(e)){if(i=e.stateNode,n=e.memoizedProps,i[ii]=e,(s=i.nodeValue!==n)&&(t=Mn,t!==null))switch(t.tag){case 3:Ra(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ra(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ii]=e,e.stateNode=i}return Xt(e),null;case 13:if(mt(yt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_t&&Sn!==null&&e.mode&1&&!(e.flags&128))mg(),Us(),e.flags|=98560,s=!1;else if(s=Ca(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(he(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(he(317));s[ii]=e}else Us(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xt(e),s=!1}else jn!==null&&(Tf(jn),jn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||yt.current&1?Nt===0&&(Nt=3):sd())),e.updateQueue!==null&&(e.flags|=4),Xt(e),null);case 4:return Os(),gf(t,e),t===null&&Yo(e.stateNode.containerInfo),Xt(e),null;case 10:return Vh(e.type._context),Xt(e),null;case 17:return un(e.type)&&Ul(),Xt(e),null;case 19:if(mt(yt),s=e.memoizedState,s===null)return Xt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)uo(s,!1);else{if(Nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Vl(t),o!==null){for(e.flags|=128,uo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ht(yt,yt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ct()>zs&&(e.flags|=128,i=!0,uo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Vl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),uo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_t)return Xt(e),null}else 2*Ct()-s.renderingStartTime>zs&&n!==1073741824&&(e.flags|=128,i=!0,uo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ct(),e.sibling=null,n=yt.current,ht(yt,i?n&1|2:n&1),e):(Xt(e),null);case 22:case 23:return rd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?xn&1073741824&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),null;case 24:return null;case 25:return null}throw Error(he(156,e.tag))}function gy(t,e){switch(kh(e),e.tag){case 1:return un(e.type)&&Ul(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Os(),mt(cn),mt($t),Yh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return jh(e),null;case 13:if(mt(yt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(he(340));Us()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return mt(yt),null;case 4:return Os(),null;case 10:return Vh(e.type._context),null;case 22:case 23:return rd(),null;case 24:return null;default:return null}}var La=!1,qt=!1,vy=typeof WeakSet=="function"?WeakSet:Set,Re=null;function xs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){At(t,e,i)}else n.current=null}function vf(t,e,n){try{n()}catch(i){At(t,e,i)}}var Lp=!1;function xy(t,e){if(ef=Ll,t=ng(),Fh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++h===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(tf={focusedElem:t,selectionRange:n},Ll=!1,Re=e;Re!==null;)if(e=Re,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Re=t;else for(;Re!==null;){e=Re;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,m=_.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?v:Gn(e.type,v),m);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(he(163))}}catch(y){At(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Re=t;break}Re=e.return}return _=Lp,Lp=!1,_}function Lo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&vf(e,n,s)}r=r.next}while(r!==i)}}function dc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function xf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Jg(t){var e=t.alternate;e!==null&&(t.alternate=null,Jg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ii],delete e[$o],delete e[sf],delete e[ty],delete e[ny])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Qg(t){return t.tag===5||t.tag===3||t.tag===4}function Dp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Qg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Il));else if(i!==4&&(t=t.child,t!==null))for(yf(t,e,n),t=t.sibling;t!==null;)yf(t,e,n),t=t.sibling}function Sf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Sf(t,e,n),t=t.sibling;t!==null;)Sf(t,e,n),t=t.sibling}var zt=null,Xn=!1;function Di(t,e,n){for(n=n.child;n!==null;)e0(t,e,n),n=n.sibling}function e0(t,e,n){if(ai&&typeof ai.onCommitFiberUnmount=="function")try{ai.onCommitFiberUnmount(sc,n)}catch{}switch(n.tag){case 5:qt||xs(n,e);case 6:var i=zt,r=Xn;zt=null,Di(t,e,n),zt=i,Xn=r,zt!==null&&(Xn?(t=zt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):zt.removeChild(n.stateNode));break;case 18:zt!==null&&(Xn?(t=zt,n=n.stateNode,t.nodeType===8?Bc(t.parentNode,n):t.nodeType===1&&Bc(t,n),Wo(t)):Bc(zt,n.stateNode));break;case 4:i=zt,r=Xn,zt=n.stateNode.containerInfo,Xn=!0,Di(t,e,n),zt=i,Xn=r;break;case 0:case 11:case 14:case 15:if(!qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&vf(n,e,o),r=r.next}while(r!==i)}Di(t,e,n);break;case 1:if(!qt&&(xs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){At(n,e,a)}Di(t,e,n);break;case 21:Di(t,e,n);break;case 22:n.mode&1?(qt=(i=qt)||n.memoizedState!==null,Di(t,e,n),qt=i):Di(t,e,n);break;default:Di(t,e,n)}}function Np(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new vy),e.forEach(function(i){var r=Cy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:zt=a.stateNode,Xn=!1;break e;case 3:zt=a.stateNode.containerInfo,Xn=!0;break e;case 4:zt=a.stateNode.containerInfo,Xn=!0;break e}a=a.return}if(zt===null)throw Error(he(160));e0(s,o,r),zt=null,Xn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){At(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)t0(e,t),e=e.sibling}function t0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zn(e,t),Qn(t),i&4){try{Lo(3,t,t.return),dc(3,t)}catch(v){At(t,t.return,v)}try{Lo(5,t,t.return)}catch(v){At(t,t.return,v)}}break;case 1:zn(e,t),Qn(t),i&512&&n!==null&&xs(n,n.return);break;case 5:if(zn(e,t),Qn(t),i&512&&n!==null&&xs(n,n.return),t.flags&32){var r=t.stateNode;try{Bo(r,"")}catch(v){At(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&E_(r,s),Wu(a,o);var c=Wu(a,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?C_(r,f):h==="dangerouslySetInnerHTML"?A_(r,f):h==="children"?Bo(r,f):Eh(r,h,f,c)}switch(a){case"input":zu(r,s);break;case"textarea":w_(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ws(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?ws(r,!!s.multiple,s.defaultValue,!0):ws(r,!!s.multiple,s.multiple?[]:"",!1))}r[$o]=s}catch(v){At(t,t.return,v)}}break;case 6:if(zn(e,t),Qn(t),i&4){if(t.stateNode===null)throw Error(he(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){At(t,t.return,v)}}break;case 3:if(zn(e,t),Qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Wo(e.containerInfo)}catch(v){At(t,t.return,v)}break;case 4:zn(e,t),Qn(t);break;case 13:zn(e,t),Qn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(nd=Ct())),i&4&&Np(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(qt=(c=qt)||h,zn(e,t),qt=c):zn(e,t),Qn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Re=t,h=t.child;h!==null;){for(f=Re=h;Re!==null;){switch(d=Re,p=d.child,d.tag){case 0:case 11:case 14:case 15:Lo(4,d,d.return);break;case 1:xs(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){At(i,n,v)}}break;case 5:xs(d,d.return);break;case 22:if(d.memoizedState!==null){Up(f);continue}}p!==null?(p.return=d,Re=p):Up(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=R_("display",o))}catch(v){At(t,t.return,v)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){At(t,t.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:zn(e,t),Qn(t),i&4&&Np(t);break;case 21:break;default:zn(e,t),Qn(t)}}function Qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Qg(n)){var i=n;break e}n=n.return}throw Error(he(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Bo(r,""),i.flags&=-33);var s=Dp(t);Sf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Dp(t);yf(t,a,o);break;default:throw Error(he(161))}}catch(l){At(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function yy(t,e,n){Re=t,n0(t)}function n0(t,e,n){for(var i=(t.mode&1)!==0;Re!==null;){var r=Re,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||La;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||qt;a=La;var c=qt;if(La=o,(qt=l)&&!c)for(Re=r;Re!==null;)o=Re,l=o.child,o.tag===22&&o.memoizedState!==null?Fp(r):l!==null?(l.return=o,Re=l):Fp(r);for(;s!==null;)Re=s,n0(s),s=s.sibling;Re=r,La=a,qt=c}Ip(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Re=s):Ip(t)}}function Ip(t){for(;Re!==null;){var e=Re;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qt||dc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Gn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&vp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}vp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Wo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(he(163))}qt||e.flags&512&&xf(e)}catch(d){At(e,e.return,d)}}if(e===t){Re=null;break}if(n=e.sibling,n!==null){n.return=e.return,Re=n;break}Re=e.return}}function Up(t){for(;Re!==null;){var e=Re;if(e===t){Re=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Re=n;break}Re=e.return}}function Fp(t){for(;Re!==null;){var e=Re;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{dc(4,e)}catch(l){At(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){At(e,r,l)}}var s=e.return;try{xf(e)}catch(l){At(e,s,l)}break;case 5:var o=e.return;try{xf(e)}catch(l){At(e,o,l)}}}catch(l){At(e,e.return,l)}if(e===t){Re=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Re=a;break}Re=e.return}}var Sy=Math.ceil,Xl=Li.ReactCurrentDispatcher,ed=Li.ReactCurrentOwner,Un=Li.ReactCurrentBatchConfig,tt=0,kt=null,Pt=null,Bt=0,xn=0,ys=lr(0),Nt=0,ta=null,Ir=0,pc=0,td=0,Do=null,an=null,nd=0,zs=1/0,yi=null,jl=!1,Mf=null,Ji=null,Da=!1,ji=null,Yl=0,No=0,Ef=null,gl=-1,vl=0;function en(){return tt&6?Ct():gl!==-1?gl:gl=Ct()}function Qi(t){return t.mode&1?tt&2&&Bt!==0?Bt&-Bt:ry.transition!==null?(vl===0&&(vl=B_()),vl):(t=ot,t!==0||(t=window.event,t=t===void 0?16:Y_(t.type)),t):1}function Kn(t,e,n,i){if(50<No)throw No=0,Ef=null,Error(he(185));ha(t,n,i),(!(tt&2)||t!==kt)&&(t===kt&&(!(tt&2)&&(pc|=n),Nt===4&&Gi(t,Bt)),fn(t,i),n===1&&tt===0&&!(e.mode&1)&&(zs=Ct()+500,uc&&cr()))}function fn(t,e){var n=t.callbackNode;rx(t,e);var i=Pl(t,t===kt?Bt:0);if(i===0)n!==null&&Xd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Xd(n),e===1)t.tag===0?iy(Op.bind(null,t)):hg(Op.bind(null,t)),Qx(function(){!(tt&6)&&cr()}),n=null;else{switch(H_(i)){case 1:n=Ch;break;case 4:n=k_;break;case 16:n=bl;break;case 536870912:n=z_;break;default:n=bl}n=u0(n,i0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function i0(t,e){if(gl=-1,vl=0,tt&6)throw Error(he(327));var n=t.callbackNode;if(bs()&&t.callbackNode!==n)return null;var i=Pl(t,t===kt?Bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ql(t,i);else{e=i;var r=tt;tt|=2;var s=s0();(kt!==t||Bt!==e)&&(yi=null,zs=Ct()+500,Cr(t,e));do try{wy();break}catch(a){r0(t,a)}while(!0);Hh(),Xl.current=s,tt=r,Pt!==null?e=0:(kt=null,Bt=0,e=Nt)}if(e!==0){if(e===2&&(r=$u(t),r!==0&&(i=r,e=wf(t,r))),e===1)throw n=ta,Cr(t,0),Gi(t,i),fn(t,Ct()),n;if(e===6)Gi(t,i);else{if(r=t.current.alternate,!(i&30)&&!My(r)&&(e=ql(t,i),e===2&&(s=$u(t),s!==0&&(i=s,e=wf(t,s))),e===1))throw n=ta,Cr(t,0),Gi(t,i),fn(t,Ct()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(he(345));case 2:xr(t,an,yi);break;case 3:if(Gi(t,i),(i&130023424)===i&&(e=nd+500-Ct(),10<e)){if(Pl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){en(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=rf(xr.bind(null,t,an,yi),e);break}xr(t,an,yi);break;case 4:if(Gi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-$n(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ct()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Sy(i/1960))-i,10<i){t.timeoutHandle=rf(xr.bind(null,t,an,yi),i);break}xr(t,an,yi);break;case 5:xr(t,an,yi);break;default:throw Error(he(329))}}}return fn(t,Ct()),t.callbackNode===n?i0.bind(null,t):null}function wf(t,e){var n=Do;return t.current.memoizedState.isDehydrated&&(Cr(t,e).flags|=256),t=ql(t,e),t!==2&&(e=an,an=n,e!==null&&Tf(e)),t}function Tf(t){an===null?an=t:an.push.apply(an,t)}function My(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Jn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gi(t,e){for(e&=~td,e&=~pc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$n(e),i=1<<n;t[n]=-1,e&=~i}}function Op(t){if(tt&6)throw Error(he(327));bs();var e=Pl(t,0);if(!(e&1))return fn(t,Ct()),null;var n=ql(t,e);if(t.tag!==0&&n===2){var i=$u(t);i!==0&&(e=i,n=wf(t,i))}if(n===1)throw n=ta,Cr(t,0),Gi(t,e),fn(t,Ct()),n;if(n===6)throw Error(he(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,xr(t,an,yi),fn(t,Ct()),null}function id(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(zs=Ct()+500,uc&&cr())}}function Ur(t){ji!==null&&ji.tag===0&&!(tt&6)&&bs();var e=tt;tt|=1;var n=Un.transition,i=ot;try{if(Un.transition=null,ot=1,t)return t()}finally{ot=i,Un.transition=n,tt=e,!(tt&6)&&cr()}}function rd(){xn=ys.current,mt(ys)}function Cr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Jx(n)),Pt!==null)for(n=Pt.return;n!==null;){var i=n;switch(kh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ul();break;case 3:Os(),mt(cn),mt($t),Yh();break;case 5:jh(i);break;case 4:Os();break;case 13:mt(yt);break;case 19:mt(yt);break;case 10:Vh(i.type._context);break;case 22:case 23:rd()}n=n.return}if(kt=t,Pt=t=er(t.current,null),Bt=xn=e,Nt=0,ta=null,td=pc=Ir=0,an=Do=null,wr!==null){for(e=0;e<wr.length;e++)if(n=wr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}wr=null}return t}function r0(t,e){do{var n=Pt;try{if(Hh(),pl.current=Wl,Gl){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Gl=!1}if(Nr=0,Ot=Dt=Mt=null,Po=!1,Jo=0,ed.current=null,n===null||n.return===null){Nt=1,ta=e,Pt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=wp(o);if(p!==null){p.flags&=-257,Tp(p,o,a,s,e),p.mode&1&&Ep(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var v=new Set;v.add(l),e.updateQueue=v}else _.add(l);break e}else{if(!(e&1)){Ep(s,c,e),sd();break e}l=Error(he(426))}}else if(_t&&a.mode&1){var m=wp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Tp(m,o,a,s,e),zh(ks(l,a));break e}}s=l=ks(l,a),Nt!==4&&(Nt=2),Do===null?Do=[s]:Do.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Hg(s,l,e);gp(s,u);break e;case 1:a=l;var g=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Ji===null||!Ji.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Vg(s,a,e);gp(s,y);break e}}s=s.return}while(s!==null)}a0(n)}catch(A){e=A,Pt===n&&n!==null&&(Pt=n=n.return);continue}break}while(!0)}function s0(){var t=Xl.current;return Xl.current=Wl,t===null?Wl:t}function sd(){(Nt===0||Nt===3||Nt===2)&&(Nt=4),kt===null||!(Ir&268435455)&&!(pc&268435455)||Gi(kt,Bt)}function ql(t,e){var n=tt;tt|=2;var i=s0();(kt!==t||Bt!==e)&&(yi=null,Cr(t,e));do try{Ey();break}catch(r){r0(t,r)}while(!0);if(Hh(),tt=n,Xl.current=i,Pt!==null)throw Error(he(261));return kt=null,Bt=0,Nt}function Ey(){for(;Pt!==null;)o0(Pt)}function wy(){for(;Pt!==null&&!$v();)o0(Pt)}function o0(t){var e=c0(t.alternate,t,xn);t.memoizedProps=t.pendingProps,e===null?a0(t):Pt=e,ed.current=null}function a0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=gy(n,e),n!==null){n.flags&=32767,Pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Nt=6,Pt=null;return}}else if(n=_y(n,e,xn),n!==null){Pt=n;return}if(e=e.sibling,e!==null){Pt=e;return}Pt=e=t}while(e!==null);Nt===0&&(Nt=5)}function xr(t,e,n){var i=ot,r=Un.transition;try{Un.transition=null,ot=1,Ty(t,e,n,i)}finally{Un.transition=r,ot=i}return null}function Ty(t,e,n,i){do bs();while(ji!==null);if(tt&6)throw Error(he(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(he(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(sx(t,s),t===kt&&(Pt=kt=null,Bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Da||(Da=!0,u0(bl,function(){return bs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Un.transition,Un.transition=null;var o=ot;ot=1;var a=tt;tt|=4,ed.current=null,xy(t,n),t0(n,t),Xx(tf),Ll=!!ef,tf=ef=null,t.current=n,yy(n),Kv(),tt=a,ot=o,Un.transition=s}else t.current=n;if(Da&&(Da=!1,ji=t,Yl=r),s=t.pendingLanes,s===0&&(Ji=null),Qv(n.stateNode),fn(t,Ct()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(jl)throw jl=!1,t=Mf,Mf=null,t;return Yl&1&&t.tag!==0&&bs(),s=t.pendingLanes,s&1?t===Ef?No++:(No=0,Ef=t):No=0,cr(),null}function bs(){if(ji!==null){var t=H_(Yl),e=Un.transition,n=ot;try{if(Un.transition=null,ot=16>t?16:t,ji===null)var i=!1;else{if(t=ji,ji=null,Yl=0,tt&6)throw Error(he(331));var r=tt;for(tt|=4,Re=t.current;Re!==null;){var s=Re,o=s.child;if(Re.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Re=c;Re!==null;){var h=Re;switch(h.tag){case 0:case 11:case 15:Lo(8,h,s)}var f=h.child;if(f!==null)f.return=h,Re=f;else for(;Re!==null;){h=Re;var d=h.sibling,p=h.return;if(Jg(h),h===c){Re=null;break}if(d!==null){d.return=p,Re=d;break}Re=p}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}Re=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Re=o;else e:for(;Re!==null;){if(s=Re,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Lo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Re=u;break e}Re=s.return}}var g=t.current;for(Re=g;Re!==null;){o=Re;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Re=x;else e:for(o=g;Re!==null;){if(a=Re,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:dc(9,a)}}catch(A){At(a,a.return,A)}if(a===o){Re=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Re=y;break e}Re=a.return}}if(tt=r,cr(),ai&&typeof ai.onPostCommitFiberRoot=="function")try{ai.onPostCommitFiberRoot(sc,t)}catch{}i=!0}return i}finally{ot=n,Un.transition=e}}return!1}function kp(t,e,n){e=ks(n,e),e=Hg(t,e,1),t=Zi(t,e,1),e=en(),t!==null&&(ha(t,1,e),fn(t,e))}function At(t,e,n){if(t.tag===3)kp(t,t,n);else for(;e!==null;){if(e.tag===3){kp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ji===null||!Ji.has(i))){t=ks(n,t),t=Vg(e,t,1),e=Zi(e,t,1),t=en(),e!==null&&(ha(e,1,t),fn(e,t));break}}e=e.return}}function Ay(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=en(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(Bt&n)===n&&(Nt===4||Nt===3&&(Bt&130023424)===Bt&&500>Ct()-nd?Cr(t,0):td|=n),fn(t,e)}function l0(t,e){e===0&&(t.mode&1?(e=Ma,Ma<<=1,!(Ma&130023424)&&(Ma=4194304)):e=1);var n=en();t=bi(t,e),t!==null&&(ha(t,e,n),fn(t,n))}function Ry(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),l0(t,n)}function Cy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(he(314))}i!==null&&i.delete(e),l0(t,n)}var c0;c0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||cn.current)ln=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ln=!1,my(t,e,n);ln=!!(t.flags&131072)}else ln=!1,_t&&e.flags&1048576&&dg(e,kl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;_l(t,e),t=e.pendingProps;var r=Is(e,$t.current);Cs(e,n),r=$h(null,e,i,t,r,n);var s=Kh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,un(i)?(s=!0,Fl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Wh(e),r.updater=hc,e.stateNode=r,r._reactInternals=e,ff(e,i,t,n),e=pf(null,e,i,!0,s,n)):(e.tag=0,_t&&s&&Oh(e),Qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(_l(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Py(i),t=Gn(i,t),r){case 0:e=df(null,e,i,t,n);break e;case 1:e=Cp(null,e,i,t,n);break e;case 11:e=Ap(null,e,i,t,n);break e;case 14:e=Rp(null,e,i,Gn(i.type,t),n);break e}throw Error(he(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),df(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Cp(t,e,i,r,n);case 3:e:{if(jg(e),t===null)throw Error(he(387));i=e.pendingProps,s=e.memoizedState,r=s.element,xg(t,e),Hl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ks(Error(he(423)),e),e=bp(t,e,i,n,r);break e}else if(i!==r){r=ks(Error(he(424)),e),e=bp(t,e,i,n,r);break e}else for(Sn=Ki(e.stateNode.containerInfo.firstChild),Mn=e,_t=!0,jn=null,n=gg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Us(),i===r){e=Pi(t,e,n);break e}Qt(t,e,i,n)}e=e.child}return e;case 5:return yg(e),t===null&&lf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,nf(i,r)?o=null:s!==null&&nf(i,s)&&(e.flags|=32),Xg(t,e),Qt(t,e,o,n),e.child;case 6:return t===null&&lf(e),null;case 13:return Yg(t,e,n);case 4:return Xh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Fs(e,null,i,n):Qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Ap(t,e,i,r,n);case 7:return Qt(t,e,e.pendingProps,n),e.child;case 8:return Qt(t,e,e.pendingProps.children,n),e.child;case 12:return Qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ht(zl,i._currentValue),i._currentValue=o,s!==null)if(Jn(s.value,o)){if(s.children===r.children&&!cn.current){e=Pi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ti(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),cf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(he(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),cf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Cs(e,n),r=Fn(r),i=i(r),e.flags|=1,Qt(t,e,i,n),e.child;case 14:return i=e.type,r=Gn(i,e.pendingProps),r=Gn(i.type,r),Rp(t,e,i,r,n);case 15:return Gg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),_l(t,e),e.tag=1,un(i)?(t=!0,Fl(e)):t=!1,Cs(e,n),Bg(e,i,r),ff(e,i,r,n),pf(null,e,i,!0,t,n);case 19:return qg(t,e,n);case 22:return Wg(t,e,n)}throw Error(he(156,e.tag))};function u0(t,e){return O_(t,e)}function by(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(t,e,n,i){return new by(t,e,n,i)}function od(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Py(t){if(typeof t=="function")return od(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Th)return 11;if(t===Ah)return 14}return 2}function er(t,e){var n=t.alternate;return n===null?(n=In(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")od(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case us:return br(n.children,r,s,e);case wh:o=8,r|=8;break;case Iu:return t=In(12,n,e,r|2),t.elementType=Iu,t.lanes=s,t;case Uu:return t=In(13,n,e,r),t.elementType=Uu,t.lanes=s,t;case Fu:return t=In(19,n,e,r),t.elementType=Fu,t.lanes=s,t;case y_:return mc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case v_:o=10;break e;case x_:o=9;break e;case Th:o=11;break e;case Ah:o=14;break e;case zi:o=16,i=null;break e}throw Error(he(130,t==null?t:typeof t,""))}return e=In(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function br(t,e,n,i){return t=In(7,t,i,e),t.lanes=n,t}function mc(t,e,n,i){return t=In(22,t,i,e),t.elementType=y_,t.lanes=n,t.stateNode={isHidden:!1},t}function qc(t,e,n){return t=In(6,t,null,e),t.lanes=n,t}function $c(t,e,n){return e=In(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ly(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bc(0),this.expirationTimes=bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ad(t,e,n,i,r,s,o,a,l){return t=new Ly(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=In(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wh(s),t}function Dy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function f0(t){if(!t)return rr;t=t._reactInternals;e:{if(Hr(t)!==t||t.tag!==1)throw Error(he(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(he(171))}if(t.tag===1){var n=t.type;if(un(n))return fg(t,n,e)}return e}function h0(t,e,n,i,r,s,o,a,l){return t=ad(n,i,!0,t,r,s,o,a,l),t.context=f0(null),n=t.current,i=en(),r=Qi(n),s=Ti(i,r),s.callback=e??null,Zi(n,s,r),t.current.lanes=r,ha(t,r,i),fn(t,i),t}function _c(t,e,n,i){var r=e.current,s=en(),o=Qi(r);return n=f0(n),e.context===null?e.context=n:e.pendingContext=n,e=Ti(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Zi(r,e,o),t!==null&&(Kn(t,r,o,s),dl(t,r,o)),o}function $l(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ld(t,e){zp(t,e),(t=t.alternate)&&zp(t,e)}function Ny(){return null}var d0=typeof reportError=="function"?reportError:function(t){console.error(t)};function cd(t){this._internalRoot=t}gc.prototype.render=cd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(he(409));_c(t,e,null,null)};gc.prototype.unmount=cd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ur(function(){_c(null,t,null,null)}),e[Ci]=null}};function gc(t){this._internalRoot=t}gc.prototype.unstable_scheduleHydration=function(t){if(t){var e=W_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Vi.length&&e!==0&&e<Vi[n].priority;n++);Vi.splice(n,0,t),n===0&&j_(t)}};function ud(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bp(){}function Iy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=$l(o);s.call(c)}}var o=h0(e,i,t,0,null,!1,!1,"",Bp);return t._reactRootContainer=o,t[Ci]=o.current,Yo(t.nodeType===8?t.parentNode:t),Ur(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=$l(l);a.call(c)}}var l=ad(t,0,!1,null,null,!1,!1,"",Bp);return t._reactRootContainer=l,t[Ci]=l.current,Yo(t.nodeType===8?t.parentNode:t),Ur(function(){_c(e,l,n,i)}),l}function xc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=$l(o);a.call(l)}}_c(e,o,t,r)}else o=Iy(n,e,t,r,i);return $l(o)}V_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=So(e.pendingLanes);n!==0&&(bh(e,n|1),fn(e,Ct()),!(tt&6)&&(zs=Ct()+500,cr()))}break;case 13:Ur(function(){var i=bi(t,1);if(i!==null){var r=en();Kn(i,t,1,r)}}),ld(t,1)}};Ph=function(t){if(t.tag===13){var e=bi(t,134217728);if(e!==null){var n=en();Kn(e,t,134217728,n)}ld(t,134217728)}};G_=function(t){if(t.tag===13){var e=Qi(t),n=bi(t,e);if(n!==null){var i=en();Kn(n,t,e,i)}ld(t,e)}};W_=function(){return ot};X_=function(t,e){var n=ot;try{return ot=t,e()}finally{ot=n}};ju=function(t,e,n){switch(e){case"input":if(zu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=cc(i);if(!r)throw Error(he(90));M_(i),zu(i,r)}}}break;case"textarea":w_(t,n);break;case"select":e=n.value,e!=null&&ws(t,!!n.multiple,e,!1)}};L_=id;D_=Ur;var Uy={usingClientEntryPoint:!1,Events:[pa,ps,cc,b_,P_,id]},fo={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fy={bundleType:fo.bundleType,version:fo.version,rendererPackageName:fo.rendererPackageName,rendererConfig:fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Li.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=U_(t),t===null?null:t.stateNode},findFiberByHostInstance:fo.findFiberByHostInstance||Ny,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Na=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Na.isDisabled&&Na.supportsFiber)try{sc=Na.inject(Fy),ai=Na}catch{}}wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uy;wn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ud(e))throw Error(he(200));return Dy(t,e,null,n)};wn.createRoot=function(t,e){if(!ud(t))throw Error(he(299));var n=!1,i="",r=d0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ad(t,1,!1,null,null,n,!1,i,r),t[Ci]=e.current,Yo(t.nodeType===8?t.parentNode:t),new cd(e)};wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(he(188)):(t=Object.keys(t).join(","),Error(he(268,t)));return t=U_(e),t=t===null?null:t.stateNode,t};wn.flushSync=function(t){return Ur(t)};wn.hydrate=function(t,e,n){if(!vc(e))throw Error(he(200));return xc(null,t,e,!0,n)};wn.hydrateRoot=function(t,e,n){if(!ud(t))throw Error(he(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=d0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=h0(e,null,t,1,n??null,r,!1,s,o),t[Ci]=e.current,Yo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new gc(e)};wn.render=function(t,e,n){if(!vc(e))throw Error(he(200));return xc(null,t,e,!1,n)};wn.unmountComponentAtNode=function(t){if(!vc(t))throw Error(he(40));return t._reactRootContainer?(Ur(function(){xc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ci]=null})}),!0):!1};wn.unstable_batchedUpdates=id;wn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!vc(n))throw Error(he(200));if(t==null||t._reactInternals===void 0)throw Error(he(38));return xc(t,e,n,!1,i)};wn.version="18.3.1-next-f1338f8080-20240426";function p0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p0)}catch(t){console.error(t)}}p0(),p_.exports=wn;var Oy=p_.exports,m0,Hp=Oy;m0=Hp.createRoot,Hp.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ky={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Vr=(t,e)=>{const n=Ve.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...c},h)=>Ve.createElement("svg",{ref:h,...ky,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${zy(t)}`,a].join(" "),...c},[...e.map(([f,d])=>Ve.createElement(f,d)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=Vr("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=Vr("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=Vr("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=Vr("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=Vr("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=Vr("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=Vr("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fd="180",Ps={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ss={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wy=0,Xp=1,Xy=2,_0=1,g0=2,xi=3,sr=0,hn=1,Nn=2,tr=0,Ls=1,jp=2,Yp=3,qp=4,jy=5,Sr=100,Yy=101,qy=102,$y=103,Ky=104,Zy=200,Jy=201,Qy=202,eS=203,Af=204,Rf=205,tS=206,nS=207,iS=208,rS=209,sS=210,oS=211,aS=212,lS=213,cS=214,Cf=0,bf=1,Pf=2,Bs=3,Lf=4,Df=5,Nf=6,If=7,v0=0,uS=1,fS=2,nr=0,hS=1,dS=2,pS=3,mS=4,_S=5,gS=6,vS=7,x0=300,Hs=301,Vs=302,Uf=303,Ff=304,yc=306,Of=1e3,Ar=1001,kf=1002,Zn=1003,xS=1004,Ia=1005,si=1006,Kc=1007,Rr=1008,ui=1009,y0=1010,S0=1011,na=1012,hd=1013,Fr=1014,wi=1015,_a=1016,dd=1017,pd=1018,ia=1020,M0=35902,E0=35899,w0=1021,T0=1022,qn=1023,ra=1026,sa=1027,A0=1028,md=1029,R0=1030,_d=1031,gd=1033,yl=33776,Sl=33777,Ml=33778,El=33779,zf=35840,Bf=35841,Hf=35842,Vf=35843,Gf=36196,Wf=37492,Xf=37496,jf=37808,Yf=37809,qf=37810,$f=37811,Kf=37812,Zf=37813,Jf=37814,Qf=37815,eh=37816,th=37817,nh=37818,ih=37819,rh=37820,sh=37821,oh=36492,ah=36494,lh=36495,ch=36283,uh=36284,fh=36285,hh=36286,yS=3200,SS=3201,C0=0,MS=1,Wi="",Pn="srgb",Gs="srgb-linear",Kl="linear",lt="srgb",qr=7680,$p=519,ES=512,wS=513,TS=514,b0=515,AS=516,RS=517,CS=518,bS=519,Kp=35044,Zp="300 es",oi=2e3,Zl=2001;class Gr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jp=1234567;const Io=Math.PI/180,oa=180/Math.PI;function Wr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[t&255]+jt[t>>8&255]+jt[t>>16&255]+jt[t>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[n&63|128]+jt[n>>8&255]+"-"+jt[n>>16&255]+jt[n>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function Ke(t,e,n){return Math.max(e,Math.min(n,t))}function vd(t,e){return(t%e+e)%e}function PS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function LS(t,e,n){return t!==e?(n-t)/(e-t):0}function Uo(t,e,n){return(1-n)*t+n*e}function DS(t,e,n,i){return Uo(t,e,1-Math.exp(-n*i))}function NS(t,e=1){return e-Math.abs(vd(t,e*2)-e)}function IS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function US(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function FS(t,e){return t+Math.floor(Math.random()*(e-t+1))}function OS(t,e){return t+Math.random()*(e-t)}function kS(t){return t*(.5-Math.random())}function zS(t){t!==void 0&&(Jp=t);let e=Jp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function BS(t){return t*Io}function HS(t){return t*oa}function VS(t){return(t&t-1)===0&&t!==0}function GS(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function WS(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function XS(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),h=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":t.set(a*h,l*f,l*d,a*c);break;case"YZY":t.set(l*d,a*h,l*f,a*c);break;case"ZXZ":t.set(l*f,l*d,a*h,a*c);break;case"XZX":t.set(a*h,l*_,l*p,a*c);break;case"YXY":t.set(l*p,a*h,l*_,a*c);break;case"ZYZ":t.set(l*_,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ls(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Zt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const wl={DEG2RAD:Io,RAD2DEG:oa,generateUUID:Wr,clamp:Ke,euclideanModulo:vd,mapLinear:PS,inverseLerp:LS,lerp:Uo,damp:DS,pingpong:NS,smoothstep:IS,smootherstep:US,randInt:FS,randFloat:OS,randFloatSpread:kS,seededRandom:zS,degToRad:BS,radToDeg:HS,isPowerOfTwo:VS,ceilPowerOfTwo:GS,floorPowerOfTwo:WS,setQuaternionFromProperEuler:XS,normalize:Zt,denormalize:ls};class ge{constructor(e=0,n=0){ge.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Or{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],_=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=_,e[n+3]=v;return}if(f!==v||l!==d||c!==p||h!==_){let m=1-a;const u=l*d+c*p+h*_+f*v,g=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const A=Math.sqrt(x),C=Math.atan2(A,u*g);m=Math.sin(m*C)/A,a=Math.sin(a*C)/A}const y=a*g;if(l=l*m+d*y,c=c*m+p*y,h=h*m+_*y,f=f*m+v*y,m===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=A,c*=A,h*=A,f*=A}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],f=s[o],d=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+h*f+l*p-c*d,e[n+1]=l*_+h*d+c*f-a*p,e[n+2]=c*_+h*p+a*d-l*f,e[n+3]=h*_-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*h*f+c*p*_,this._y=c*p*f-d*h*_,this._z=c*h*_+d*p*f,this._w=c*h*f-d*p*_;break;case"YXZ":this._x=d*h*f+c*p*_,this._y=c*p*f-d*h*_,this._z=c*h*_-d*p*f,this._w=c*h*f+d*p*_;break;case"ZXY":this._x=d*h*f-c*p*_,this._y=c*p*f+d*h*_,this._z=c*h*_+d*p*f,this._w=c*h*f-d*p*_;break;case"ZYX":this._x=d*h*f-c*p*_,this._y=c*p*f+d*h*_,this._z=c*h*_-d*p*f,this._w=c*h*f+d*p*_;break;case"YZX":this._x=d*h*f+c*p*_,this._y=c*p*f+d*h*_,this._z=c*h*_-d*p*f,this._w=c*h*f-d*p*_;break;case"XZY":this._x=d*h*f-c*p*_,this._y=c*p*f-d*h*_,this._z=c*h*_+d*p*f,this._w=c*h*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-n)*h)/c,d=Math.sin(n*h)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,n=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Qp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Qp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*h,this.y=i+l*h+a*c-s*f,this.z=r+l*f+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zc.copy(this).projectOnVector(e),this.sub(Zc)}reflect(e){return this.sub(Zc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zc=new D,Qp=new Or;class qe{constructor(e,n,i,r,s,o,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],p=i[5],_=i[8],v=r[0],m=r[3],u=r[6],g=r[1],x=r[4],y=r[7],A=r[2],C=r[5],T=r[8];return s[0]=o*v+a*g+l*A,s[3]=o*m+a*x+l*C,s[6]=o*u+a*y+l*T,s[1]=c*v+h*g+f*A,s[4]=c*m+h*x+f*C,s[7]=c*u+h*y+f*T,s[2]=d*v+p*g+_*A,s[5]=d*m+p*x+_*C,s[8]=d*u+p*y+_*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return n*o*h-n*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*s,p=c*s-o*l,_=n*f+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(r*c-h*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(h*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Jc.makeScale(e,n)),this}rotate(e){return this.premultiply(Jc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Jc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jc=new qe;function P0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Jl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function jS(){const t=Jl("canvas");return t.style.display="block",t}const em={};function aa(t){t in em||(em[t]=!0,console.warn(t))}function YS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const tm=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nm=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qS(){const t={enabled:!0,workingColorSpace:Gs,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===lt&&(r.r=Ai(r.r),r.g=Ai(r.g),r.b=Ai(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(r.r=Ds(r.r),r.g=Ds(r.g),r.b=Ds(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Wi?Kl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return aa("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return aa("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Gs]:{primaries:e,whitePoint:i,transfer:Kl,toXYZ:tm,fromXYZ:nm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Pn},outputColorSpaceConfig:{drawingBufferColorSpace:Pn}},[Pn]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:tm,fromXYZ:nm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Pn}}}),t}const st=qS();function Ai(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ds(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let $r;class $S{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{$r===void 0&&($r=Jl("canvas")),$r.width=e.width,$r.height=e.height;const r=$r.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=$r}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Jl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ai(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ai(n[i]/255)*255):n[i]=Ai(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let KS=0;class xd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=Wr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Qc(r[o].image)):s.push(Qc(r[o]))}else s=Qc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Qc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?$S.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ZS=0;const eu=new D;class tn extends Gr{constructor(e=tn.DEFAULT_IMAGE,n=tn.DEFAULT_MAPPING,i=Ar,r=Ar,s=si,o=Rr,a=qn,l=ui,c=tn.DEFAULT_ANISOTROPY,h=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=Wr(),this.name="",this.source=new xd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(eu).x}get height(){return this.source.getSize(eu).y}get depth(){return this.source.getSize(eu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==x0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Of:e.x=e.x-Math.floor(e.x);break;case Ar:e.x=e.x<0?0:1;break;case kf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Of:e.y=e.y-Math.floor(e.y);break;case Ar:e.y=e.y<0?0:1;break;case kf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=x0;tn.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,n=0,i=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],p=l[5],_=l[9],v=l[2],m=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,y=(p+1)/2,A=(u+1)/2,C=(h+d)/4,T=(f+v)/4,b=(_+m)/4;return x>y&&x>A?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=T/i):y>A?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=C/r,s=b/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=T/s,r=b/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(d-h)*(d-h));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(f-v)/g,this.z=(d-h)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this.w=Ke(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this.w=Ke(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class JS extends Gr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new ut(0,0,e,n),this.scissorTest=!1,this.viewport=new ut(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new tn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:si,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new xd(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kr extends JS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class L0 extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class QS extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $s{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bn):Bn.fromBufferAttribute(s,o),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ua.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ua.copy(i.boundingBox)),Ua.applyMatrix4(e.matrixWorld),this.union(Ua)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ho),Fa.subVectors(this.max,ho),Kr.subVectors(e.a,ho),Zr.subVectors(e.b,ho),Jr.subVectors(e.c,ho),Ni.subVectors(Zr,Kr),Ii.subVectors(Jr,Zr),hr.subVectors(Kr,Jr);let n=[0,-Ni.z,Ni.y,0,-Ii.z,Ii.y,0,-hr.z,hr.y,Ni.z,0,-Ni.x,Ii.z,0,-Ii.x,hr.z,0,-hr.x,-Ni.y,Ni.x,0,-Ii.y,Ii.x,0,-hr.y,hr.x,0];return!tu(n,Kr,Zr,Jr,Fa)||(n=[1,0,0,0,1,0,0,0,1],!tu(n,Kr,Zr,Jr,Fa))?!1:(Oa.crossVectors(Ni,Ii),n=[Oa.x,Oa.y,Oa.z],tu(n,Kr,Zr,Jr,Fa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pi=[new D,new D,new D,new D,new D,new D,new D,new D],Bn=new D,Ua=new $s,Kr=new D,Zr=new D,Jr=new D,Ni=new D,Ii=new D,hr=new D,ho=new D,Fa=new D,Oa=new D,dr=new D;function tu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){dr.fromArray(t,s);const a=r.x*Math.abs(dr.x)+r.y*Math.abs(dr.y)+r.z*Math.abs(dr.z),l=e.dot(dr),c=n.dot(dr),h=i.dot(dr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const e1=new $s,po=new D,nu=new D;class Sc{constructor(e=new D,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):e1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;po.subVectors(e,this.center);const n=po.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(po,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(po.copy(e.center).add(nu)),this.expandByPoint(po.copy(e.center).sub(nu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const mi=new D,iu=new D,ka=new D,Ui=new D,ru=new D,za=new D,su=new D;class yd{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,n),mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){iu.copy(e).add(n).multiplyScalar(.5),ka.copy(n).sub(e).normalize(),Ui.copy(this.origin).sub(iu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ka),a=Ui.dot(this.direction),l=-Ui.dot(ka),c=Ui.lengthSq(),h=Math.abs(1-o*o);let f,d,p,_;if(h>0)if(f=o*l-a,d=o*a-l,_=s*h,f>=0)if(d>=-_)if(d<=_){const v=1/h;f*=v,d*=v,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(iu).addScaledVector(ka,d),p}intersectSphere(e,n){mi.subVectors(e.center,this.origin);const i=mi.dot(this.direction),r=mi.dot(mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,n,i,r,s){ru.subVectors(n,e),za.subVectors(i,e),su.crossVectors(ru,za);let o=this.direction.dot(su),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ui.subVectors(this.origin,e);const l=a*this.direction.dot(za.crossVectors(Ui,za));if(l<0)return null;const c=a*this.direction.dot(ru.cross(Ui));if(c<0||l+c>o)return null;const h=-a*Ui.dot(su);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,n,i,r,s,o,a,l,c,h,f,d,p,_,v,m){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,h,f,d,p,_,v,m)}set(e,n,i,r,s,o,a,l,c,h,f,d,p,_,v,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=p,u[7]=_,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Qr.setFromMatrixColumn(e,0).length(),s=1/Qr.setFromMatrixColumn(e,1).length(),o=1/Qr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*h,p=o*f,_=a*h,v=a*f;n[0]=l*h,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=d-v*c,n[9]=-a*l,n[2]=v-d*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*h,p=l*f,_=c*h,v=c*f;n[0]=d+v*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*h,n[9]=-a,n[2]=p*a-_,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*h,p=l*f,_=c*h,v=c*f;n[0]=d-v*a,n[4]=-o*f,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*h,n[9]=v-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*h,p=o*f,_=a*h,v=a*f;n[0]=l*h,n[4]=_*c-p,n[8]=d*c+v,n[1]=l*f,n[5]=v*c+d,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,_=a*l,v=a*c;n[0]=l*h,n[4]=v-d*f,n[8]=_*f+p,n[1]=f,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=p*f+_,n[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,p=o*c,_=a*l,v=a*c;n[0]=l*h,n[4]=-f,n[8]=c*h,n[1]=d*f+v,n[5]=o*h,n[9]=p*f-_,n[2]=_*f-p,n[6]=a*h,n[10]=v*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(t1,e,n1)}lookAt(e,n,i){const r=this.elements;return gn.subVectors(e,n),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Fi.crossVectors(i,gn),Fi.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Fi.crossVectors(i,gn)),Fi.normalize(),Ba.crossVectors(gn,Fi),r[0]=Fi.x,r[4]=Ba.x,r[8]=gn.x,r[1]=Fi.y,r[5]=Ba.y,r[9]=gn.y,r[2]=Fi.z,r[6]=Ba.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],p=i[13],_=i[2],v=i[6],m=i[10],u=i[14],g=i[3],x=i[7],y=i[11],A=i[15],C=r[0],T=r[4],b=r[8],E=r[12],M=r[1],L=r[5],F=r[9],W=r[13],J=r[2],z=r[6],j=r[10],ie=r[14],N=r[3],ee=r[7],oe=r[11],ve=r[15];return s[0]=o*C+a*M+l*J+c*N,s[4]=o*T+a*L+l*z+c*ee,s[8]=o*b+a*F+l*j+c*oe,s[12]=o*E+a*W+l*ie+c*ve,s[1]=h*C+f*M+d*J+p*N,s[5]=h*T+f*L+d*z+p*ee,s[9]=h*b+f*F+d*j+p*oe,s[13]=h*E+f*W+d*ie+p*ve,s[2]=_*C+v*M+m*J+u*N,s[6]=_*T+v*L+m*z+u*ee,s[10]=_*b+v*F+m*j+u*oe,s[14]=_*E+v*W+m*ie+u*ve,s[3]=g*C+x*M+y*J+A*N,s[7]=g*T+x*L+y*z+A*ee,s[11]=g*b+x*F+y*j+A*oe,s[15]=g*E+x*W+y*ie+A*ve,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],p=e[14],_=e[3],v=e[7],m=e[11],u=e[15];return _*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+v*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*h-s*l*h)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*h-i*c*h)+u*(-r*a*h-n*l*f+n*a*d+r*o*f-i*o*d+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],p=e[11],_=e[12],v=e[13],m=e[14],u=e[15],g=f*m*c-v*d*c+v*l*p-a*m*p-f*l*u+a*d*u,x=_*d*c-h*m*c-_*l*p+o*m*p+h*l*u-o*d*u,y=h*v*c-_*f*c+_*a*p-o*v*p-h*a*u+o*f*u,A=_*f*l-h*v*l-_*a*d+o*v*d+h*a*m-o*f*m,C=n*g+i*x+r*y+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=g*T,e[1]=(v*d*s-f*m*s-v*r*p+i*m*p+f*r*u-i*d*u)*T,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*u+i*l*u)*T,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*T,e[4]=x*T,e[5]=(h*m*s-_*d*s+_*r*p-n*m*p-h*r*u+n*d*u)*T,e[6]=(_*l*s-o*m*s-_*r*c+n*m*c+o*r*u-n*l*u)*T,e[7]=(o*d*s-h*l*s+h*r*c-n*d*c-o*r*p+n*l*p)*T,e[8]=y*T,e[9]=(_*f*s-h*v*s-_*i*p+n*v*p+h*i*u-n*f*u)*T,e[10]=(o*v*s-_*a*s+_*i*c-n*v*c-o*i*u+n*a*u)*T,e[11]=(h*a*s-o*f*s-h*i*c+n*f*c+o*i*p-n*a*p)*T,e[12]=A*T,e[13]=(h*v*r-_*f*r+_*i*d-n*v*d-h*i*m+n*f*m)*T,e[14]=(_*a*r-o*v*r-_*i*l+n*v*l+o*i*m-n*a*m)*T,e[15]=(o*f*r-h*a*r+h*i*l-n*f*l-o*i*d+n*a*d)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,h=o+o,f=a+a,d=s*c,p=s*h,_=s*f,v=o*h,m=o*f,u=a*f,g=l*c,x=l*h,y=l*f,A=i.x,C=i.y,T=i.z;return r[0]=(1-(v+u))*A,r[1]=(p+y)*A,r[2]=(_-x)*A,r[3]=0,r[4]=(p-y)*C,r[5]=(1-(d+u))*C,r[6]=(m+g)*C,r[7]=0,r[8]=(_+x)*T,r[9]=(m-g)*T,r[10]=(1-(d+v))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Qr.set(r[0],r[1],r[2]).length();const o=Qr.set(r[4],r[5],r[6]).length(),a=Qr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Hn.copy(this);const c=1/s,h=1/o,f=1/a;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=f,Hn.elements[9]*=f,Hn.elements[10]*=f,n.setFromRotationMatrix(Hn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=oi,l=!1){const c=this.elements,h=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),p=(i+r)/(i-r);let _,v;if(l)_=s/(o-s),v=o*s/(o-s);else if(a===oi)_=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Zl)_=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=oi,l=!1){const c=this.elements,h=2/(n-e),f=2/(i-r),d=-(n+e)/(n-e),p=-(i+r)/(i-r);let _,v;if(l)_=1/(o-s),v=o/(o-s);else if(a===oi)_=-2/(o-s),v=-(o+s)/(o-s);else if(a===Zl)_=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Qr=new D,Hn=new gt,t1=new D(0,0,0),n1=new D(1,1,1),Fi=new D,Ba=new D,gn=new D,im=new gt,rm=new Or;class fi{constructor(e=0,n=0,i=0,r=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return im.makeRotationFromQuaternion(e),this.setFromRotationMatrix(im,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return rm.setFromEuler(this),this.setFromQuaternion(rm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class D0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let i1=0;const sm=new D,es=new Or,_i=new gt,Ha=new D,mo=new D,r1=new D,s1=new Or,om=new D(1,0,0),am=new D(0,1,0),lm=new D(0,0,1),cm={type:"added"},o1={type:"removed"},ts={type:"childadded",child:null},ou={type:"childremoved",child:null};class Ht extends Gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:i1++}),this.uuid=Wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new D,n=new fi,i=new Or,r=new D(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new qe}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new D0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return es.setFromAxisAngle(e,n),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,n){return es.setFromAxisAngle(e,n),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(om,e)}rotateY(e){return this.rotateOnAxis(am,e)}rotateZ(e){return this.rotateOnAxis(lm,e)}translateOnAxis(e,n){return sm.copy(e).applyQuaternion(this.quaternion),this.position.add(sm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(om,e)}translateY(e){return this.translateOnAxis(am,e)}translateZ(e){return this.translateOnAxis(lm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ha.copy(e):Ha.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(mo,Ha,this.up):_i.lookAt(Ha,mo,this.up),this.quaternion.setFromRotationMatrix(_i),r&&(_i.extractRotation(r.matrixWorld),es.setFromRotationMatrix(_i),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cm),ts.child=e,this.dispatchEvent(ts),ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(o1),ou.child=e,this.dispatchEvent(ou),ou.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cm),ts.child=e,this.dispatchEvent(ts),ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,e,r1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,s1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ht.DEFAULT_UP=new D(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new D,gi=new D,au=new D,vi=new D,ns=new D,is=new D,um=new D,lu=new D,cu=new D,uu=new D,fu=new ut,hu=new ut,du=new ut;class Yn{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Vn.subVectors(e,n),r.cross(Vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Vn.subVectors(r,n),gi.subVectors(i,n),au.subVectors(e,n);const o=Vn.dot(Vn),a=Vn.dot(gi),l=Vn.dot(au),c=gi.dot(gi),h=gi.dot(au),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*h)*d,_=(o*h-a*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(a,vi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return fu.setScalar(0),hu.setScalar(0),du.setScalar(0),fu.fromBufferAttribute(e,n),hu.fromBufferAttribute(e,i),du.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(fu,s.x),o.addScaledVector(hu,s.y),o.addScaledVector(du,s.z),o}static isFrontFacing(e,n,i,r){return Vn.subVectors(i,n),gi.subVectors(e,n),Vn.cross(gi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Vn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Yn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Yn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ns.subVectors(r,i),is.subVectors(s,i),lu.subVectors(e,i);const l=ns.dot(lu),c=is.dot(lu);if(l<=0&&c<=0)return n.copy(i);cu.subVectors(e,r);const h=ns.dot(cu),f=is.dot(cu);if(h>=0&&f<=h)return n.copy(r);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(ns,o);uu.subVectors(e,s);const p=ns.dot(uu),_=is.dot(uu);if(_>=0&&p<=_)return n.copy(s);const v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(is,a);const m=h*_-p*f;if(m<=0&&f-h>=0&&p-_>=0)return um.subVectors(s,r),a=(f-h)/(f-h+(p-_)),n.copy(r).addScaledVector(um,a);const u=1/(m+v+d);return o=v*u,a=d*u,n.copy(i).addScaledVector(ns,o).addScaledVector(is,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const N0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},Va={h:0,s:0,l:0};function pu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=st.workingColorSpace){if(e=vd(e,1),n=Ke(n,0,1),i=Ke(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=pu(o,s,e+1/3),this.g=pu(o,s,e),this.b=pu(o,s,e-1/3)}return st.colorSpaceToWorking(this,r),this}setStyle(e,n=Pn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Pn){const i=N0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pn){return st.workingToColorSpace(Yt.copy(this),e),Math.round(Ke(Yt.r*255,0,255))*65536+Math.round(Ke(Yt.g*255,0,255))*256+Math.round(Ke(Yt.b*255,0,255))}getHexString(e=Pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.workingToColorSpace(Yt.copy(this),n);const i=Yt.r,r=Yt.g,s=Yt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=st.workingColorSpace){return st.workingToColorSpace(Yt.copy(this),n),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Pn){st.workingToColorSpace(Yt.copy(this),e);const n=Yt.r,i=Yt.g,r=Yt.b;return e!==Pn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+n,Oi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Oi),e.getHSL(Va);const i=Uo(Oi.h,Va.h,n),r=Uo(Oi.s,Va.s,n),s=Uo(Oi.l,Va.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new et;et.NAMES=N0;let a1=0;class Ks extends Gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a1++}),this.uuid=Wr(),this.name="",this.type="Material",this.blending=Ls,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Af,this.blendDst=Rf,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$p,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qr,this.stencilZFail=qr,this.stencilZPass=qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(i.blending=this.blending),this.side!==sr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Af&&(i.blendSrc=this.blendSrc),this.blendDst!==Rf&&(i.blendDst=this.blendDst),this.blendEquation!==Sr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$p&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ql extends Ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=v0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new D,Ga=new ge;let l1=0;class ci{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:l1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Kp,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ga.fromBufferAttribute(this,n),Ga.applyMatrix3(e),this.setXY(n,Ga.x,Ga.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix3(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix4(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyNormalMatrix(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.transformDirection(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ls(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ls(n,this.array)),n}setX(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ls(n,this.array)),n}setY(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ls(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ls(n,this.array)),n}setW(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kp&&(e.usage=this.usage),e}}class I0 extends ci{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class U0 extends ci{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Rt extends ci{constructor(e,n,i){super(new Float32Array(e),n,i)}}let c1=0;const bn=new gt,mu=new Ht,rs=new D,vn=new $s,_o=new $s,Ft=new D;class dn extends Gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=Wr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(P0(e)?U0:I0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,n,i){return bn.makeTranslation(e,n,i),this.applyMatrix4(bn),this}scale(e,n,i){return bn.makeScale(e,n,i),this.applyMatrix4(bn),this}lookAt(e){return mu.lookAt(e),mu.updateMatrix(),this.applyMatrix4(mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Rt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $s);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];_o.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(vn.min,_o.min),vn.expandByPoint(Ft),Ft.addVectors(vn.max,_o.max),vn.expandByPoint(Ft)):(vn.expandByPoint(_o.min),vn.expandByPoint(_o.max))}vn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ft));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ft.fromBufferAttribute(a,c),l&&(rs.fromBufferAttribute(e,c),Ft.add(rs)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new D,l[b]=new D;const c=new D,h=new D,f=new D,d=new ge,p=new ge,_=new ge,v=new D,m=new D;function u(b,E,M){c.fromBufferAttribute(i,b),h.fromBufferAttribute(i,E),f.fromBufferAttribute(i,M),d.fromBufferAttribute(s,b),p.fromBufferAttribute(s,E),_.fromBufferAttribute(s,M),h.sub(c),f.sub(c),p.sub(d),_.sub(d);const L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(L),a[b].add(v),a[E].add(v),a[M].add(v),l[b].add(m),l[E].add(m),l[M].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let b=0,E=g.length;b<E;++b){const M=g[b],L=M.start,F=M.count;for(let W=L,J=L+F;W<J;W+=3)u(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const x=new D,y=new D,A=new D,C=new D;function T(b){A.fromBufferAttribute(r,b),C.copy(A);const E=a[b];x.copy(E),x.sub(A.multiplyScalar(A.dot(E))).normalize(),y.crossVectors(C,E);const L=y.dot(l[b])<0?-1:1;o.setXYZW(b,x.x,x.y,x.z,L)}for(let b=0,E=g.length;b<E;++b){const M=g[b],L=M.start,F=M.count;for(let W=L,J=L+F;W<J;W+=3)T(e.getX(W+0)),T(e.getX(W+1)),T(e.getX(W+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ci(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,h=new D,f=new D;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ft.fromBufferAttribute(e,n),Ft.normalize(),e.setXYZ(n,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h);let p=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let u=0;u<h;u++)d[_++]=c[p++]}return new ci(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new dn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){const d=c[h],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fm=new gt,pr=new yd,Wa=new Sc,hm=new D,Xa=new D,ja=new D,Ya=new D,_u=new D,qa=new D,dm=new D,$a=new D;class Tt extends Ht{constructor(e=new dn,n=new Ql){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){qa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],f=s[l];h!==0&&(_u.fromBufferAttribute(f,e),o?qa.addScaledVector(_u,h):qa.addScaledVector(_u.sub(n),h))}n.add(qa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wa.copy(i.boundingSphere),Wa.applyMatrix4(s),pr.copy(e.ray).recast(e.near),!(Wa.containsPoint(pr.origin)===!1&&(pr.intersectSphere(Wa,hm)===null||pr.origin.distanceToSquared(hm)>(e.far-e.near)**2))&&(fm.copy(s).invert(),pr.copy(e.ray).applyMatrix4(fm),!(i.boundingBox!==null&&pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,pr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const m=d[_],u=o[m.materialIndex],g=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,A=x;y<A;y+=3){const C=a.getX(y),T=a.getX(y+1),b=a.getX(y+2);r=Ka(this,u,e,i,c,h,f,C,T,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=_,u=v;m<u;m+=3){const g=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);r=Ka(this,o,e,i,c,h,f,g,x,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const m=d[_],u=o[m.materialIndex],g=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,A=x;y<A;y+=3){const C=y,T=y+1,b=y+2;r=Ka(this,u,e,i,c,h,f,C,T,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,u=v;m<u;m+=3){const g=m,x=m+1,y=m+2;r=Ka(this,o,e,i,c,h,f,g,x,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function u1(t,e,n,i,r,s,o,a){let l;if(e.side===hn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===sr,a),l===null)return null;$a.copy(a),$a.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo($a);return c<n.near||c>n.far?null:{distance:c,point:$a.clone(),object:t}}function Ka(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Xa),t.getVertexPosition(l,ja),t.getVertexPosition(c,Ya);const h=u1(t,e,n,i,Xa,ja,Ya,dm);if(h){const f=new D;Yn.getBarycoord(dm,Xa,ja,Ya,f),r&&(h.uv=Yn.getInterpolatedAttribute(r,a,l,c,f,new ge)),s&&(h.uv1=Yn.getInterpolatedAttribute(s,a,l,c,f,new ge)),o&&(h.normal=Yn.getInterpolatedAttribute(o,a,l,c,f,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new D,materialIndex:0};Yn.getNormal(Xa,ja,Ya,d.normal),h.face=d,h.barycoord=f}return h}class Zs extends dn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(f,2));function _(v,m,u,g,x,y,A,C,T,b,E){const M=y/T,L=A/b,F=y/2,W=A/2,J=C/2,z=T+1,j=b+1;let ie=0,N=0;const ee=new D;for(let oe=0;oe<j;oe++){const ve=oe*L-W;for(let Ne=0;Ne<z;Ne++){const je=Ne*M-F;ee[v]=je*g,ee[m]=ve*x,ee[u]=J,c.push(ee.x,ee.y,ee.z),ee[v]=0,ee[m]=0,ee[u]=C>0?1:-1,h.push(ee.x,ee.y,ee.z),f.push(Ne/T),f.push(1-oe/b),ie+=1}}for(let oe=0;oe<b;oe++)for(let ve=0;ve<T;ve++){const Ne=d+ve+z*oe,je=d+ve+z*(oe+1),Ze=d+(ve+1)+z*(oe+1),Ye=d+(ve+1)+z*oe;l.push(Ne,je,Ye),l.push(je,Ze,Ye),N+=6}a.addGroup(p,N,E),p+=N,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ws(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Jt(t){const e={};for(let n=0;n<t.length;n++){const i=Ws(t[n]);for(const r in i)e[r]=i[r]}return e}function f1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function F0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const h1={clone:Ws,merge:Jt};var d1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class or extends Ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=d1,this.fragmentShader=p1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=f1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class O0 extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ki=new D,pm=new ge,mm=new ge;class yn extends O0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=oa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oa*2*Math.atan(Math.tan(Io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,n){return this.getViewBounds(e,pm,mm),n.subVectors(mm,pm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Io*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ss=-90,os=1;class m1 extends Ht{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yn(ss,os,e,n);r.layers=this.layers,this.add(r);const s=new yn(ss,os,e,n);s.layers=this.layers,this.add(s);const o=new yn(ss,os,e,n);o.layers=this.layers,this.add(o);const a=new yn(ss,os,e,n);a.layers=this.layers,this.add(a);const l=new yn(ss,os,e,n);l.layers=this.layers,this.add(l);const c=new yn(ss,os,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(f,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class k0 extends tn{constructor(e=[],n=Hs,i,r,s,o,a,l,c,h){super(e,n,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _1 extends kr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new k0(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Zs(5,5,5),s=new or({name:"CubemapFromEquirect",uniforms:Ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:tr});s.uniforms.tEquirect.value=n;const o=new Tt(r,s),a=n.minFilter;return n.minFilter===Rr&&(n.minFilter=si),new m1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class ri extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const g1={type:"move"};class gu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(g1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ri;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Sd{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new et(e),this.near=n,this.far=i}clone(){return new Sd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class v1 extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const vu=new D,x1=new D,y1=new qe;class Hi{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=vu.subVectors(i,n).cross(x1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(vu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||y1.getNormalMatrix(e),r=this.coplanarPoint(vu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new Sc,S1=new ge(.5,.5),Za=new D;class Md{constructor(e=new Hi,n=new Hi,i=new Hi,r=new Hi,s=new Hi,o=new Hi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=oi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],f=s[5],d=s[6],p=s[7],_=s[8],v=s[9],m=s[10],u=s[11],g=s[12],x=s[13],y=s[14],A=s[15];if(r[0].setComponents(c-o,p-h,u-_,A-g).normalize(),r[1].setComponents(c+o,p+h,u+_,A+g).normalize(),r[2].setComponents(c+a,p+f,u+v,A+x).normalize(),r[3].setComponents(c-a,p-f,u-v,A-x).normalize(),i)r[4].setComponents(l,d,m,y).normalize(),r[5].setComponents(c-l,p-d,u-m,A-y).normalize();else if(r[4].setComponents(c-l,p-d,u-m,A-y).normalize(),n===oi)r[5].setComponents(c+l,p+d,u+m,A+y).normalize();else if(n===Zl)r[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){mr.center.set(0,0,0);const n=S1.distanceTo(e.center);return mr.radius=.7071067811865476+n,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Za.x=r.normal.x>0?e.max.x:e.min.x,Za.y=r.normal.y>0?e.max.y:e.min.y,Za.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Za)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class z0 extends Ks{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ec=new D,tc=new D,_m=new gt,go=new yd,Ja=new Sc,xu=new D,gm=new D;class M1 extends Ht{constructor(e=new dn,n=new z0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)ec.fromBufferAttribute(n,r-1),tc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=ec.distanceTo(tc);e.setAttribute("lineDistance",new Rt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(r),Ja.radius+=s,e.ray.intersectsSphere(Ja)===!1)return;_m.copy(r).invert(),go.copy(e.ray).applyMatrix4(_m);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let v=p,m=_-1;v<m;v+=c){const u=h.getX(v),g=h.getX(v+1),x=Qa(this,e,go,l,u,g,v);x&&n.push(x)}if(this.isLineLoop){const v=h.getX(_-1),m=h.getX(p),u=Qa(this,e,go,l,v,m,_-1);u&&n.push(u)}}else{const p=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let v=p,m=_-1;v<m;v+=c){const u=Qa(this,e,go,l,v,v+1,v);u&&n.push(u)}if(this.isLineLoop){const v=Qa(this,e,go,l,_-1,p,_-1);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Qa(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(ec.fromBufferAttribute(a,r),tc.fromBufferAttribute(a,s),n.distanceSqToSegment(ec,tc,xu,gm)>i)return;xu.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(xu);if(!(c<e.near||c>e.far))return{distance:c,point:gm.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}class vm extends tn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class B0 extends tn{constructor(e,n,i=Fr,r,s,o,a=Zn,l=Zn,c,h=ra,f=1){if(h!==ra&&h!==sa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class H0 extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class nc extends dn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],d=[],p=[];let _=0;const v=[],m=i/2;let u=0;g(),o===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Rt(f,3)),this.setAttribute("normal",new Rt(d,3)),this.setAttribute("uv",new Rt(p,2));function g(){const y=new D,A=new D;let C=0;const T=(n-e)/i;for(let b=0;b<=s;b++){const E=[],M=b/s,L=M*(n-e)+e;for(let F=0;F<=r;F++){const W=F/r,J=W*l+a,z=Math.sin(J),j=Math.cos(J);A.x=L*z,A.y=-M*i+m,A.z=L*j,f.push(A.x,A.y,A.z),y.set(z,T,j).normalize(),d.push(y.x,y.y,y.z),p.push(W,1-M),E.push(_++)}v.push(E)}for(let b=0;b<r;b++)for(let E=0;E<s;E++){const M=v[E][b],L=v[E+1][b],F=v[E+1][b+1],W=v[E][b+1];(e>0||E!==0)&&(h.push(M,L,W),C+=3),(n>0||E!==s-1)&&(h.push(L,F,W),C+=3)}c.addGroup(u,C,0),u+=C}function x(y){const A=_,C=new ge,T=new D;let b=0;const E=y===!0?e:n,M=y===!0?1:-1;for(let F=1;F<=r;F++)f.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),_++;const L=_;for(let F=0;F<=r;F++){const J=F/r*l+a,z=Math.cos(J),j=Math.sin(J);T.x=E*j,T.y=m*M,T.z=E*z,f.push(T.x,T.y,T.z),d.push(0,M,0),C.x=z*.5+.5,C.y=j*.5*M+.5,p.push(C.x,C.y),_++}for(let F=0;F<r;F++){const W=A+F,J=L+F;y===!0?h.push(J,J+1,W):h.push(J+1,J,W),b+=3}c.addGroup(u,b,y===!0?1:2),u+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ed extends dn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),h(),this.setAttribute("position",new Rt(s,3)),this.setAttribute("normal",new Rt(s.slice(),3)),this.setAttribute("uv",new Rt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const x=new D,y=new D,A=new D;for(let C=0;C<n.length;C+=3)p(n[C+0],x),p(n[C+1],y),p(n[C+2],A),l(x,y,A,g)}function l(g,x,y,A){const C=A+1,T=[];for(let b=0;b<=C;b++){T[b]=[];const E=g.clone().lerp(y,b/C),M=x.clone().lerp(y,b/C),L=C-b;for(let F=0;F<=L;F++)F===0&&b===C?T[b][F]=E:T[b][F]=E.clone().lerp(M,F/L)}for(let b=0;b<C;b++)for(let E=0;E<2*(C-b)-1;E++){const M=Math.floor(E/2);E%2===0?(d(T[b][M+1]),d(T[b+1][M]),d(T[b][M])):(d(T[b][M+1]),d(T[b+1][M+1]),d(T[b+1][M]))}}function c(g){const x=new D;for(let y=0;y<s.length;y+=3)x.x=s[y+0],x.y=s[y+1],x.z=s[y+2],x.normalize().multiplyScalar(g),s[y+0]=x.x,s[y+1]=x.y,s[y+2]=x.z}function h(){const g=new D;for(let x=0;x<s.length;x+=3){g.x=s[x+0],g.y=s[x+1],g.z=s[x+2];const y=m(g)/2/Math.PI+.5,A=u(g)/Math.PI+.5;o.push(y,1-A)}_(),f()}function f(){for(let g=0;g<o.length;g+=6){const x=o[g+0],y=o[g+2],A=o[g+4],C=Math.max(x,y,A),T=Math.min(x,y,A);C>.9&&T<.1&&(x<.2&&(o[g+0]+=1),y<.2&&(o[g+2]+=1),A<.2&&(o[g+4]+=1))}}function d(g){s.push(g.x,g.y,g.z)}function p(g,x){const y=g*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function _(){const g=new D,x=new D,y=new D,A=new D,C=new ge,T=new ge,b=new ge;for(let E=0,M=0;E<s.length;E+=9,M+=6){g.set(s[E+0],s[E+1],s[E+2]),x.set(s[E+3],s[E+4],s[E+5]),y.set(s[E+6],s[E+7],s[E+8]),C.set(o[M+0],o[M+1]),T.set(o[M+2],o[M+3]),b.set(o[M+4],o[M+5]),A.copy(g).add(x).add(y).divideScalar(3);const L=m(A);v(C,M+0,g,L),v(T,M+2,x,L),v(b,M+4,y,L)}}function v(g,x,y,A){A<0&&g.x===1&&(o[x]=g.x-1),y.x===0&&y.z===0&&(o[x]=A/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function u(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ed(e.vertices,e.indices,e.radius,e.details)}}class hi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const h=i[r],d=i[r+1]-h,p=(o-h)/d;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new ge:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new D,r=[],s=[],o=[],a=new D,l=new gt;for(let p=0;p<=e;p++){const _=p/e;r[p]=this.getTangentAt(_,new D)}s[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Ke(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Ke(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],p*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class wd extends hi{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new ge){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*f+this.aX,c=d*f+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class E1 extends wd{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Td(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,f){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,p*=h,r(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const el=new D,yu=new Td,Su=new Td,Mu=new Td;class V0 extends hi{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new D){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(el.subVectors(r[0],r[1]).add(r[0]),c=el);const f=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(el.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=el),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);v<1e-4&&(v=1),_<1e-4&&(_=v),m<1e-4&&(m=v),yu.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,_,v,m),Su.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,_,v,m),Mu.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,_,v,m)}else this.curveType==="catmullrom"&&(yu.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),Su.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),Mu.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return i.set(yu.calc(l),Su.calc(l),Mu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function xm(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function w1(t,e){const n=1-t;return n*n*e}function T1(t,e){return 2*(1-t)*t*e}function A1(t,e){return t*t*e}function Fo(t,e,n,i){return w1(t,e)+T1(t,n)+A1(t,i)}function R1(t,e){const n=1-t;return n*n*n*e}function C1(t,e){const n=1-t;return 3*n*n*t*e}function b1(t,e){return 3*(1-t)*t*t*e}function P1(t,e){return t*t*t*e}function Oo(t,e,n,i,r){return R1(t,e)+C1(t,n)+b1(t,i)+P1(t,r)}class G0 extends hi{constructor(e=new ge,n=new ge,i=new ge,r=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new ge){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Oo(e,r.x,s.x,o.x,a.x),Oo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class L1 extends hi{constructor(e=new D,n=new D,i=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new D){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Oo(e,r.x,s.x,o.x,a.x),Oo(e,r.y,s.y,o.y,a.y),Oo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class W0 extends hi{constructor(e=new ge,n=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new ge){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new ge){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class D1 extends hi{constructor(e=new D,n=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new D){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new D){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class X0 extends hi{constructor(e=new ge,n=new ge,i=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new ge){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Fo(e,r.x,s.x,o.x),Fo(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class N1 extends hi{constructor(e=new D,n=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new D){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Fo(e,r.x,s.x,o.x),Fo(e,r.y,s.y,o.y),Fo(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class j0 extends hi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new ge){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(xm(a,l.x,c.x,h.x,f.x),xm(a,l.y,c.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new ge().fromArray(r))}return this}}var dh=Object.freeze({__proto__:null,ArcCurve:E1,CatmullRomCurve3:V0,CubicBezierCurve:G0,CubicBezierCurve3:L1,EllipseCurve:wd,LineCurve:W0,LineCurve3:D1,QuadraticBezierCurve:X0,QuadraticBezierCurve3:N1,SplineCurve:j0});class I1 extends hi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new dh[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(n.push(h),i=h)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new dh[r.type]().fromJSON(r))}return this}}class ym extends I1{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new W0(this.currentPoint.clone(),new ge(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new X0(this.currentPoint.clone(),new ge(e,n),new ge(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new G0(this.currentPoint.clone(),new ge(e,n),new ge(i,r),new ge(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new j0(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,n+h,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new wd(e,n,i,r,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Y0 extends ym{constructor(e){super(e),this.uuid=Wr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new ym().fromJSON(r))}return this}}function U1(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=q0(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=B1(t,e,s,n)),t.length>80*n){a=1/0,l=1/0;let h=-1/0,f=-1/0;for(let d=n;d<r;d+=n){const p=t[d],_=t[d+1];p<a&&(a=p),_<l&&(l=_),p>h&&(h=p),_>f&&(f=_)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return la(s,o,n,a,l,c,0),o}function q0(t,e,n,i,r){let s;if(r===Z1(t,e,n,i)>0)for(let o=e;o<n;o+=i)s=Sm(o/i|0,t[o],t[o+1],s);else for(let o=n-i;o>=e;o-=i)s=Sm(o/i|0,t[o],t[o+1],s);return s&&Xs(s,s.next)&&(ua(s),s=s.next),s}function zr(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Xs(n,n.next)||St(n.prev,n,n.next)===0)){if(ua(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function la(t,e,n,i,r,s,o){if(!t)return;!o&&s&&X1(t,i,r,s);let a=t;for(;t.prev!==t.next;){const l=t.prev,c=t.next;if(s?O1(t,i,r,s):F1(t)){e.push(l.i,t.i,c.i),ua(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=k1(zr(t),e),la(t,e,n,i,r,s,2)):o===2&&z1(t,e,n,i,r,s):la(zr(t),e,n,i,r,s,1);break}}}function F1(t){const e=t.prev,n=t,i=t.next;if(St(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,h=Math.min(r,s,o),f=Math.min(a,l,c),d=Math.max(r,s,o),p=Math.max(a,l,c);let _=i.next;for(;_!==e;){if(_.x>=h&&_.x<=d&&_.y>=f&&_.y<=p&&Eo(r,a,s,l,o,c,_.x,_.y)&&St(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function O1(t,e,n,i){const r=t.prev,s=t,o=t.next;if(St(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,h=r.y,f=s.y,d=o.y,p=Math.min(a,l,c),_=Math.min(h,f,d),v=Math.max(a,l,c),m=Math.max(h,f,d),u=ph(p,_,e,n,i),g=ph(v,m,e,n,i);let x=t.prevZ,y=t.nextZ;for(;x&&x.z>=u&&y&&y.z<=g;){if(x.x>=p&&x.x<=v&&x.y>=_&&x.y<=m&&x!==r&&x!==o&&Eo(a,h,l,f,c,d,x.x,x.y)&&St(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=p&&y.x<=v&&y.y>=_&&y.y<=m&&y!==r&&y!==o&&Eo(a,h,l,f,c,d,y.x,y.y)&&St(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=u;){if(x.x>=p&&x.x<=v&&x.y>=_&&x.y<=m&&x!==r&&x!==o&&Eo(a,h,l,f,c,d,x.x,x.y)&&St(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=g;){if(y.x>=p&&y.x<=v&&y.y>=_&&y.y<=m&&y!==r&&y!==o&&Eo(a,h,l,f,c,d,y.x,y.y)&&St(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function k1(t,e){let n=t;do{const i=n.prev,r=n.next.next;!Xs(i,r)&&K0(i,n,n.next,r)&&ca(i,r)&&ca(r,i)&&(e.push(i.i,n.i,r.i),ua(n),ua(n.next),n=t=r),n=n.next}while(n!==t);return zr(n)}function z1(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&q1(o,a)){let l=Z0(o,a);o=zr(o,o.next),l=zr(l,l.next),la(o,e,n,i,r,s,0),la(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function B1(t,e,n,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=q0(t,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(Y1(c))}r.sort(H1);for(let s=0;s<r.length;s++)n=V1(r[s],n);return n}function H1(t,e){let n=t.x-e.x;if(n===0&&(n=t.y-e.y,n===0)){const i=(t.next.y-t.y)/(t.next.x-t.x),r=(e.next.y-e.y)/(e.next.x-e.x);n=i-r}return n}function V1(t,e){const n=G1(t,e);if(!n)return e;const i=Z0(n,t);return zr(i,i.next),zr(n,n.next)}function G1(t,e){let n=e;const i=t.x,r=t.y;let s=-1/0,o;if(Xs(t,n))return n;do{if(Xs(t,n.next))return n.next;if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){const f=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=i&&f>s&&(s=f,o=n.x<n.next.x?n:n.next,f===i))return o}n=n.next}while(n!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;n=o;do{if(i>=n.x&&n.x>=l&&i!==n.x&&$0(r<c?i:s,r,l,c,r<c?s:i,r,n.x,n.y)){const f=Math.abs(r-n.y)/(i-n.x);ca(n,t)&&(f<h||f===h&&(n.x>o.x||n.x===o.x&&W1(o,n)))&&(o=n,h=f)}n=n.next}while(n!==a);return o}function W1(t,e){return St(t.prev,t,e.prev)<0&&St(e.next,t,t.next)<0}function X1(t,e,n,i){let r=t;do r.z===0&&(r.z=ph(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,j1(r)}function j1(t){let e,n=1;do{let i=t,r;t=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<n&&(a++,o=o.nextZ,!!o);c++);let l=n;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;i=o}s.nextZ=null,n*=2}while(e>1);return t}function ph(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function Y1(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function $0(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function Eo(t,e,n,i,r,s,o,a){return!(t===o&&e===a)&&$0(t,e,n,i,r,s,o,a)}function q1(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!$1(t,e)&&(ca(t,e)&&ca(e,t)&&K1(t,e)&&(St(t.prev,t,e.prev)||St(t,e.prev,e))||Xs(t,e)&&St(t.prev,t,t.next)>0&&St(e.prev,e,e.next)>0)}function St(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Xs(t,e){return t.x===e.x&&t.y===e.y}function K0(t,e,n,i){const r=nl(St(t,e,n)),s=nl(St(t,e,i)),o=nl(St(n,i,t)),a=nl(St(n,i,e));return!!(r!==s&&o!==a||r===0&&tl(t,n,e)||s===0&&tl(t,i,e)||o===0&&tl(n,t,i)||a===0&&tl(n,e,i))}function tl(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function nl(t){return t>0?1:t<0?-1:0}function $1(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&K0(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function ca(t,e){return St(t.prev,t,t.next)<0?St(t,e,t.next)>=0&&St(t,t.prev,e)>=0:St(t,e,t.prev)<0||St(t,t.next,e)<0}function K1(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function Z0(t,e){const n=mh(t.i,t.x,t.y),i=mh(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function Sm(t,e,n,i){const r=mh(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ua(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function mh(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Z1(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class J1{static triangulate(e,n,i=2){return U1(e,n,i)}}class Ms{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Ms.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];Mm(e),Em(i,e);let o=e.length;n.forEach(Mm);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,Em(i,n[l]);const a=J1.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Mm(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function Em(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Ad extends dn{constructor(e=new Y0([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Rt(r,3)),this.setAttribute("uv",new Rt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,h=n.steps!==void 0?n.steps:1,f=n.depth!==void 0?n.depth:1;let d=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,_=n.bevelSize!==void 0?n.bevelSize:p-.1,v=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3;const u=n.extrudePath,g=n.UVGenerator!==void 0?n.UVGenerator:Q1;let x,y=!1,A,C,T,b;u&&(x=u.getSpacedPoints(h),y=!0,d=!1,A=u.computeFrenetFrames(h,!1),C=new D,T=new D,b=new D),d||(m=0,p=0,_=0,v=0);const E=a.extractPoints(c);let M=E.shape;const L=E.holes;if(!Ms.isClockWise(M)){M=M.reverse();for(let B=0,G=L.length;B<G;B++){const K=L[B];Ms.isClockWise(K)&&(L[B]=K.reverse())}}function W(B){const K=10000000000000001e-36;let Q=B[0];for(let Z=1;Z<=B.length;Z++){const X=Z%B.length,ue=B[X],ze=ue.x-Q.x,Ie=ue.y-Q.y,R=ze*ze+Ie*Ie,S=Math.max(Math.abs(ue.x),Math.abs(ue.y),Math.abs(Q.x),Math.abs(Q.y)),I=K*S*S;if(R<=I){B.splice(X,1),Z--;continue}Q=ue}}W(M),L.forEach(W);const J=L.length,z=M;for(let B=0;B<J;B++){const G=L[B];M=M.concat(G)}function j(B,G,K){return G||console.error("THREE.ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(G,K)}const ie=M.length;function N(B,G,K){let Q,Z,X;const ue=B.x-G.x,ze=B.y-G.y,Ie=K.x-B.x,R=K.y-B.y,S=ue*ue+ze*ze,I=ue*R-ze*Ie;if(Math.abs(I)>Number.EPSILON){const H=Math.sqrt(S),$=Math.sqrt(Ie*Ie+R*R),V=G.x-ze/H,le=G.y+ue/H,ne=K.x-R/$,ye=K.y+Ie/$,de=((ne-V)*R-(ye-le)*Ie)/(ue*R-ze*Ie);Q=V+ue*de-B.x,Z=le+ze*de-B.y;const se=Q*Q+Z*Z;if(se<=2)return new ge(Q,Z);X=Math.sqrt(se/2)}else{let H=!1;ue>Number.EPSILON?Ie>Number.EPSILON&&(H=!0):ue<-Number.EPSILON?Ie<-Number.EPSILON&&(H=!0):Math.sign(ze)===Math.sign(R)&&(H=!0),H?(Q=-ze,Z=ue,X=Math.sqrt(S)):(Q=ue,Z=ze,X=Math.sqrt(S/2))}return new ge(Q/X,Z/X)}const ee=[];for(let B=0,G=z.length,K=G-1,Q=B+1;B<G;B++,K++,Q++)K===G&&(K=0),Q===G&&(Q=0),ee[B]=N(z[B],z[K],z[Q]);const oe=[];let ve,Ne=ee.concat();for(let B=0,G=J;B<G;B++){const K=L[B];ve=[];for(let Q=0,Z=K.length,X=Z-1,ue=Q+1;Q<Z;Q++,X++,ue++)X===Z&&(X=0),ue===Z&&(ue=0),ve[Q]=N(K[Q],K[X],K[ue]);oe.push(ve),Ne=Ne.concat(ve)}let je;if(m===0)je=Ms.triangulateShape(z,L);else{const B=[],G=[];for(let K=0;K<m;K++){const Q=K/m,Z=p*Math.cos(Q*Math.PI/2),X=_*Math.sin(Q*Math.PI/2)+v;for(let ue=0,ze=z.length;ue<ze;ue++){const Ie=j(z[ue],ee[ue],X);ke(Ie.x,Ie.y,-Z),Q===0&&B.push(Ie)}for(let ue=0,ze=J;ue<ze;ue++){const Ie=L[ue];ve=oe[ue];const R=[];for(let S=0,I=Ie.length;S<I;S++){const H=j(Ie[S],ve[S],X);ke(H.x,H.y,-Z),Q===0&&R.push(H)}Q===0&&G.push(R)}}je=Ms.triangulateShape(B,G)}const Ze=je.length,Ye=_+v;for(let B=0;B<ie;B++){const G=d?j(M[B],Ne[B],Ye):M[B];y?(T.copy(A.normals[0]).multiplyScalar(G.x),C.copy(A.binormals[0]).multiplyScalar(G.y),b.copy(x[0]).add(T).add(C),ke(b.x,b.y,b.z)):ke(G.x,G.y,0)}for(let B=1;B<=h;B++)for(let G=0;G<ie;G++){const K=d?j(M[G],Ne[G],Ye):M[G];y?(T.copy(A.normals[B]).multiplyScalar(K.x),C.copy(A.binormals[B]).multiplyScalar(K.y),b.copy(x[B]).add(T).add(C),ke(b.x,b.y,b.z)):ke(K.x,K.y,f/h*B)}for(let B=m-1;B>=0;B--){const G=B/m,K=p*Math.cos(G*Math.PI/2),Q=_*Math.sin(G*Math.PI/2)+v;for(let Z=0,X=z.length;Z<X;Z++){const ue=j(z[Z],ee[Z],Q);ke(ue.x,ue.y,f+K)}for(let Z=0,X=L.length;Z<X;Z++){const ue=L[Z];ve=oe[Z];for(let ze=0,Ie=ue.length;ze<Ie;ze++){const R=j(ue[ze],ve[ze],Q);y?ke(R.x,R.y+x[h-1].y,x[h-1].x+K):ke(R.x,R.y,f+K)}}}te(),ae();function te(){const B=r.length/3;if(d){let G=0,K=ie*G;for(let Q=0;Q<Ze;Q++){const Z=je[Q];Ce(Z[2]+K,Z[1]+K,Z[0]+K)}G=h+m*2,K=ie*G;for(let Q=0;Q<Ze;Q++){const Z=je[Q];Ce(Z[0]+K,Z[1]+K,Z[2]+K)}}else{for(let G=0;G<Ze;G++){const K=je[G];Ce(K[2],K[1],K[0])}for(let G=0;G<Ze;G++){const K=je[G];Ce(K[0]+ie*h,K[1]+ie*h,K[2]+ie*h)}}i.addGroup(B,r.length/3-B,0)}function ae(){const B=r.length/3;let G=0;Ae(z,G),G+=z.length;for(let K=0,Q=L.length;K<Q;K++){const Z=L[K];Ae(Z,G),G+=Z.length}i.addGroup(B,r.length/3-B,1)}function Ae(B,G){let K=B.length;for(;--K>=0;){const Q=K;let Z=K-1;Z<0&&(Z=B.length-1);for(let X=0,ue=h+m*2;X<ue;X++){const ze=ie*X,Ie=ie*(X+1),R=G+Q+ze,S=G+Z+ze,I=G+Z+Ie,H=G+Q+Ie;Te(R,S,I,H)}}}function ke(B,G,K){l.push(B),l.push(G),l.push(K)}function Ce(B,G,K){Oe(B),Oe(G),Oe(K);const Q=r.length/3,Z=g.generateTopUV(i,r,Q-3,Q-2,Q-1);P(Z[0]),P(Z[1]),P(Z[2])}function Te(B,G,K,Q){Oe(B),Oe(G),Oe(Q),Oe(G),Oe(K),Oe(Q);const Z=r.length/3,X=g.generateSideWallUV(i,r,Z-6,Z-3,Z-2,Z-1);P(X[0]),P(X[1]),P(X[3]),P(X[1]),P(X[2]),P(X[3])}function Oe(B){r.push(l[B*3+0]),r.push(l[B*3+1]),r.push(l[B*3+2])}function P(B){s.push(B.x),s.push(B.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return eM(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new dh[r.type]().fromJSON(r)),new Ad(i,e.options)}}const Q1={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],h=e[r*3+1];return[new ge(s,o),new ge(a,l),new ge(c,h)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],h=e[i*3+1],f=e[i*3+2],d=e[r*3],p=e[r*3+1],_=e[r*3+2],v=e[s*3],m=e[s*3+1],u=e[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ge(o,1-l),new ge(c,1-f),new ge(d,1-_),new ge(v,1-u)]:[new ge(a,1-l),new ge(h,1-f),new ge(p,1-_),new ge(m,1-u)]}};function eM(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class ic extends Ed{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new ic(e.radius,e.detail)}}class Pr extends dn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,f=e/a,d=n/l,p=[],_=[],v=[],m=[];for(let u=0;u<h;u++){const g=u*d-o;for(let x=0;x<c;x++){const y=x*f-s;_.push(y,-g,0),v.push(0,0,1),m.push(x/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<a;g++){const x=g+c*u,y=g+c*(u+1),A=g+1+c*(u+1),C=g+1+c*u;p.push(x,y,C),p.push(y,A,C)}this.setIndex(p),this.setAttribute("position",new Rt(_,3)),this.setAttribute("normal",new Rt(v,3)),this.setAttribute("uv",new Rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Rd extends dn{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],h=[];let f=e;const d=(n-e)/r,p=new D,_=new ge;for(let v=0;v<=r;v++){for(let m=0;m<=i;m++){const u=s+m/i*o;p.x=f*Math.cos(u),p.y=f*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/n+1)/2,_.y=(p.y/n+1)/2,h.push(_.x,_.y)}f+=d}for(let v=0;v<r;v++){const m=v*(i+1);for(let u=0;u<i;u++){const g=u+m,x=g,y=g+i+1,A=g+i+2,C=g+1;a.push(x,y,C),a.push(y,A,C)}}this.setIndex(a),this.setAttribute("position",new Rt(l,3)),this.setAttribute("normal",new Rt(c,3)),this.setAttribute("uv",new Rt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rd(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ko extends dn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],h=new D,f=new D,d=new D;for(let p=0;p<=i;p++)for(let _=0;_<=r;_++){const v=_/r*s,m=p/i*Math.PI*2;f.x=(e+n*Math.cos(m))*Math.cos(v),f.y=(e+n*Math.cos(m))*Math.sin(v),f.z=n*Math.sin(m),a.push(f.x,f.y,f.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(f,h).normalize(),l.push(d.x,d.y,d.z),c.push(_/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=r;_++){const v=(r+1)*p+_-1,m=(r+1)*(p-1)+_-1,u=(r+1)*(p-1)+_,g=(r+1)*p+_;o.push(v,m,g),o.push(m,u,g)}this.setIndex(o),this.setAttribute("position",new Rt(a,3)),this.setAttribute("normal",new Rt(l,3)),this.setAttribute("uv",new Rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ei extends Ks{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=C0,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tM extends Ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nM extends Ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Cd extends Ht{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Eu=new gt,wm=new D,Tm=new D;class J0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.mapType=ui,this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Md,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;wm.setFromMatrixPosition(e.matrixWorld),n.position.copy(wm),Tm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Tm),n.updateMatrixWorld(),Eu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eu,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Eu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Am=new gt,vo=new D,wu=new D;class iM extends J0{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ge(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),vo.setFromMatrixPosition(e.matrixWorld),i.position.copy(vo),wu.copy(i.position),wu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(wu),i.updateMatrixWorld(),r.makeTranslation(-vo.x,-vo.y,-vo.z),Am.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Am,i.coordinateSystem,i.reversedDepth)}}class Rm extends Cd{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new iM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Q0 extends O0{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class rM extends J0{constructor(){super(new Q0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sM extends Cd{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new rM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class oM extends Cd{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class aM extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Cm{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ke(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class lM extends Gr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function bm(t,e,n,i){const r=cM(i);switch(n){case w0:return t*e;case A0:return t*e/r.components*r.byteLength;case md:return t*e/r.components*r.byteLength;case R0:return t*e*2/r.components*r.byteLength;case _d:return t*e*2/r.components*r.byteLength;case T0:return t*e*3/r.components*r.byteLength;case qn:return t*e*4/r.components*r.byteLength;case gd:return t*e*4/r.components*r.byteLength;case yl:case Sl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ml:case El:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Bf:case Vf:return Math.max(t,16)*Math.max(e,8)/4;case zf:case Hf:return Math.max(t,8)*Math.max(e,8)/2;case Gf:case Wf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Xf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Yf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case qf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case $f:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Kf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Zf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Jf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Qf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case eh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case th:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case nh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ih:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case rh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case sh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case oh:case ah:case lh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case ch:case uh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case fh:case hh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function cM(t){switch(t){case ui:case y0:return{byteLength:1,components:1};case na:case S0:case _a:return{byteLength:2,components:1};case dd:case pd:return{byteLength:2,components:4};case Fr:case hd:case wi:return{byteLength:4,components:1};case M0:case E0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ev(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function uM(t){const e=new WeakMap;function n(a,l){const c=a.array,h=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const h=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,h);else{f.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<f.length;p++){const _=f[d],v=f[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++d,f[d]=v)}f.length=d+1;for(let p=0,_=f.length;p<_;p++){const v=f[p];t.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var fM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_M=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,MM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,EM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,TM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,LM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,DM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,NM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,IM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,UM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,FM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,OM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HM="gl_FragColor = linearToOutputTexel( gl_FragColor );",VM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,WM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,XM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$M=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ZM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,QM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,iE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_E=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ME=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,EE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,RE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,PE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,IE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,UE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,BE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,WE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,YE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$E=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,KE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ZE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,JE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,QE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ew=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ow=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_w=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ew=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ww=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Aw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Uw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ow=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:fM,alphahash_pars_fragment:hM,alphamap_fragment:dM,alphamap_pars_fragment:pM,alphatest_fragment:mM,alphatest_pars_fragment:_M,aomap_fragment:gM,aomap_pars_fragment:vM,batching_pars_vertex:xM,batching_vertex:yM,begin_vertex:SM,beginnormal_vertex:MM,bsdfs:EM,iridescence_fragment:wM,bumpmap_pars_fragment:TM,clipping_planes_fragment:AM,clipping_planes_pars_fragment:RM,clipping_planes_pars_vertex:CM,clipping_planes_vertex:bM,color_fragment:PM,color_pars_fragment:LM,color_pars_vertex:DM,color_vertex:NM,common:IM,cube_uv_reflection_fragment:UM,defaultnormal_vertex:FM,displacementmap_pars_vertex:OM,displacementmap_vertex:kM,emissivemap_fragment:zM,emissivemap_pars_fragment:BM,colorspace_fragment:HM,colorspace_pars_fragment:VM,envmap_fragment:GM,envmap_common_pars_fragment:WM,envmap_pars_fragment:XM,envmap_pars_vertex:jM,envmap_physical_pars_fragment:iE,envmap_vertex:YM,fog_vertex:qM,fog_pars_vertex:$M,fog_fragment:KM,fog_pars_fragment:ZM,gradientmap_pars_fragment:JM,lightmap_pars_fragment:QM,lights_lambert_fragment:eE,lights_lambert_pars_fragment:tE,lights_pars_begin:nE,lights_toon_fragment:rE,lights_toon_pars_fragment:sE,lights_phong_fragment:oE,lights_phong_pars_fragment:aE,lights_physical_fragment:lE,lights_physical_pars_fragment:cE,lights_fragment_begin:uE,lights_fragment_maps:fE,lights_fragment_end:hE,logdepthbuf_fragment:dE,logdepthbuf_pars_fragment:pE,logdepthbuf_pars_vertex:mE,logdepthbuf_vertex:_E,map_fragment:gE,map_pars_fragment:vE,map_particle_fragment:xE,map_particle_pars_fragment:yE,metalnessmap_fragment:SE,metalnessmap_pars_fragment:ME,morphinstance_vertex:EE,morphcolor_vertex:wE,morphnormal_vertex:TE,morphtarget_pars_vertex:AE,morphtarget_vertex:RE,normal_fragment_begin:CE,normal_fragment_maps:bE,normal_pars_fragment:PE,normal_pars_vertex:LE,normal_vertex:DE,normalmap_pars_fragment:NE,clearcoat_normal_fragment_begin:IE,clearcoat_normal_fragment_maps:UE,clearcoat_pars_fragment:FE,iridescence_pars_fragment:OE,opaque_fragment:kE,packing:zE,premultiplied_alpha_fragment:BE,project_vertex:HE,dithering_fragment:VE,dithering_pars_fragment:GE,roughnessmap_fragment:WE,roughnessmap_pars_fragment:XE,shadowmap_pars_fragment:jE,shadowmap_pars_vertex:YE,shadowmap_vertex:qE,shadowmask_pars_fragment:$E,skinbase_vertex:KE,skinning_pars_vertex:ZE,skinning_vertex:JE,skinnormal_vertex:QE,specularmap_fragment:ew,specularmap_pars_fragment:tw,tonemapping_fragment:nw,tonemapping_pars_fragment:iw,transmission_fragment:rw,transmission_pars_fragment:sw,uv_pars_fragment:ow,uv_pars_vertex:aw,uv_vertex:lw,worldpos_vertex:cw,background_vert:uw,background_frag:fw,backgroundCube_vert:hw,backgroundCube_frag:dw,cube_vert:pw,cube_frag:mw,depth_vert:_w,depth_frag:gw,distanceRGBA_vert:vw,distanceRGBA_frag:xw,equirect_vert:yw,equirect_frag:Sw,linedashed_vert:Mw,linedashed_frag:Ew,meshbasic_vert:ww,meshbasic_frag:Tw,meshlambert_vert:Aw,meshlambert_frag:Rw,meshmatcap_vert:Cw,meshmatcap_frag:bw,meshnormal_vert:Pw,meshnormal_frag:Lw,meshphong_vert:Dw,meshphong_frag:Nw,meshphysical_vert:Iw,meshphysical_frag:Uw,meshtoon_vert:Fw,meshtoon_frag:Ow,points_vert:kw,points_frag:zw,shadow_vert:Bw,shadow_frag:Hw,sprite_vert:Vw,sprite_frag:Gw},Me={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},ni={basic:{uniforms:Jt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Jt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new et(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Jt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Jt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Jt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new et(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Jt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Jt([Me.points,Me.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Jt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Jt([Me.common,Me.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Jt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Jt([Me.sprite,Me.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Jt([Me.common,Me.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Jt([Me.lights,Me.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};ni.physical={uniforms:Jt([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const il={r:0,b:0,g:0},_r=new fi,Ww=new gt;function Xw(t,e,n,i,r,s,o){const a=new et(0);let l=s===!0?0:1,c,h,f=null,d=0,p=null;function _(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?n:e).get(y)),y}function v(x){let y=!1;const A=_(x);A===null?u(a,l):A&&A.isColor&&(u(A,1),y=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(x,y){const A=_(y);A&&(A.isCubeTexture||A.mapping===yc)?(h===void 0&&(h=new Tt(new Zs(1,1,1),new or({name:"BackgroundCubeMaterial",uniforms:Ws(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),_r.copy(y.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ww.makeRotationFromEuler(_r)),h.material.toneMapped=st.getTransfer(A.colorSpace)!==lt,(f!==A||d!==A.version||p!==t.toneMapping)&&(h.material.needsUpdate=!0,f=A,d=A.version,p=t.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Tt(new Pr(2,2),new or({name:"BackgroundMaterial",uniforms:Ws(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=st.getTransfer(A.colorSpace)!==lt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||d!==A.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=A,d=A.version,p=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function u(x,y){x.getRGB(il,F0(t)),i.buffers.color.setClear(il.r,il.g,il.b,y,o)}function g(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),l=y,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,u(a,l)},render:v,addToRenderList:m,dispose:g}}function jw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(M,L,F,W,J){let z=!1;const j=f(W,F,L);s!==j&&(s=j,c(s.object)),z=p(M,W,F,J),z&&_(M,W,F,J),J!==null&&e.update(J,t.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,y(M,L,F,W),J!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function h(M){return t.deleteVertexArray(M)}function f(M,L,F){const W=F.wireframe===!0;let J=i[M.id];J===void 0&&(J={},i[M.id]=J);let z=J[L.id];z===void 0&&(z={},J[L.id]=z);let j=z[W];return j===void 0&&(j=d(l()),z[W]=j),j}function d(M){const L=[],F=[],W=[];for(let J=0;J<n;J++)L[J]=0,F[J]=0,W[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:W,object:M,attributes:{},index:null}}function p(M,L,F,W){const J=s.attributes,z=L.attributes;let j=0;const ie=F.getAttributes();for(const N in ie)if(ie[N].location>=0){const oe=J[N];let ve=z[N];if(ve===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor)),oe===void 0||oe.attribute!==ve||ve&&oe.data!==ve.data)return!0;j++}return s.attributesNum!==j||s.index!==W}function _(M,L,F,W){const J={},z=L.attributes;let j=0;const ie=F.getAttributes();for(const N in ie)if(ie[N].location>=0){let oe=z[N];oe===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor));const ve={};ve.attribute=oe,oe&&oe.data&&(ve.data=oe.data),J[N]=ve,j++}s.attributes=J,s.attributesNum=j,s.index=W}function v(){const M=s.newAttributes;for(let L=0,F=M.length;L<F;L++)M[L]=0}function m(M){u(M,0)}function u(M,L){const F=s.newAttributes,W=s.enabledAttributes,J=s.attributeDivisors;F[M]=1,W[M]===0&&(t.enableVertexAttribArray(M),W[M]=1),J[M]!==L&&(t.vertexAttribDivisor(M,L),J[M]=L)}function g(){const M=s.newAttributes,L=s.enabledAttributes;for(let F=0,W=L.length;F<W;F++)L[F]!==M[F]&&(t.disableVertexAttribArray(F),L[F]=0)}function x(M,L,F,W,J,z,j){j===!0?t.vertexAttribIPointer(M,L,F,J,z):t.vertexAttribPointer(M,L,F,W,J,z)}function y(M,L,F,W){v();const J=W.attributes,z=F.getAttributes(),j=L.defaultAttributeValues;for(const ie in z){const N=z[ie];if(N.location>=0){let ee=J[ie];if(ee===void 0&&(ie==="instanceMatrix"&&M.instanceMatrix&&(ee=M.instanceMatrix),ie==="instanceColor"&&M.instanceColor&&(ee=M.instanceColor)),ee!==void 0){const oe=ee.normalized,ve=ee.itemSize,Ne=e.get(ee);if(Ne===void 0)continue;const je=Ne.buffer,Ze=Ne.type,Ye=Ne.bytesPerElement,te=Ze===t.INT||Ze===t.UNSIGNED_INT||ee.gpuType===hd;if(ee.isInterleavedBufferAttribute){const ae=ee.data,Ae=ae.stride,ke=ee.offset;if(ae.isInstancedInterleavedBuffer){for(let Ce=0;Ce<N.locationSize;Ce++)u(N.location+Ce,ae.meshPerAttribute);M.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ce=0;Ce<N.locationSize;Ce++)m(N.location+Ce);t.bindBuffer(t.ARRAY_BUFFER,je);for(let Ce=0;Ce<N.locationSize;Ce++)x(N.location+Ce,ve/N.locationSize,Ze,oe,Ae*Ye,(ke+ve/N.locationSize*Ce)*Ye,te)}else{if(ee.isInstancedBufferAttribute){for(let ae=0;ae<N.locationSize;ae++)u(N.location+ae,ee.meshPerAttribute);M.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ae=0;ae<N.locationSize;ae++)m(N.location+ae);t.bindBuffer(t.ARRAY_BUFFER,je);for(let ae=0;ae<N.locationSize;ae++)x(N.location+ae,ve/N.locationSize,Ze,oe,ve*Ye,ve/N.locationSize*ae*Ye,te)}}else if(j!==void 0){const oe=j[ie];if(oe!==void 0)switch(oe.length){case 2:t.vertexAttrib2fv(N.location,oe);break;case 3:t.vertexAttrib3fv(N.location,oe);break;case 4:t.vertexAttrib4fv(N.location,oe);break;default:t.vertexAttrib1fv(N.location,oe)}}}}g()}function A(){b();for(const M in i){const L=i[M];for(const F in L){const W=L[F];for(const J in W)h(W[J].object),delete W[J];delete L[F]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const F in L){const W=L[F];for(const J in W)h(W[J].object),delete W[J];delete L[F]}delete i[M.id]}function T(M){for(const L in i){const F=i[L];if(F[M.id]===void 0)continue;const W=F[M.id];for(const J in W)h(W[J].object),delete W[J];delete F[M.id]}}function b(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:g}}function Yw(t,e,n){let i;function r(c){i=c}function s(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function o(c,h,f){f!==0&&(t.drawArraysInstanced(i,c,h,f),n.update(h,i,f))}function a(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let p=0;for(let _=0;_<f;_++)p+=h[_];n.update(p,i,1)}function l(c,h,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],h[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,f);let _=0;for(let v=0;v<f;v++)_+=h[v]*d[v];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function qw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==qn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const b=T===_a&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==ui&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==wi&&!b)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:g,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:A,maxSamples:C}}function $w(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Hi,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=h(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,u=t.get(f);if(!r||_===null||_.length===0||s&&!m)s?h(null):c();else{const g=s?0:i,x=g*4;let y=u.clippingState||null;l.value=y,y=h(_,d,x,p);for(let A=0;A!==x;++A)y[A]=n[A];u.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,p,_){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const u=p+v*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let x=0,y=p;x!==v;++x,y+=4)o.copy(f[x]).applyMatrix4(g,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Kw(t){let e=new WeakMap;function n(o,a){return a===Uf?o.mapping=Hs:a===Ff&&(o.mapping=Vs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Uf||a===Ff)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new _1(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Es=4,Pm=[.125,.215,.35,.446,.526,.582],Mr=20,Tu=new Q0,Lm=new et;let Au=null,Ru=0,Cu=0,bu=!1;const yr=(1+Math.sqrt(5))/2,as=1/yr,Dm=[new D(-yr,as,0),new D(yr,as,0),new D(-as,0,yr),new D(as,0,yr),new D(0,yr,-as),new D(0,yr,as),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Zw=new D;class Nm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=Zw}=s;Au=this._renderer.getRenderTarget(),Ru=this._renderer.getActiveCubeFace(),Cu=this._renderer.getActiveMipmapLevel(),bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Um(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Au,Ru,Cu),this._renderer.xr.enabled=bu,e.scissorTest=!1,rl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Hs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Au=this._renderer.getRenderTarget(),Ru=this._renderer.getActiveCubeFace(),Cu=this._renderer.getActiveMipmapLevel(),bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:si,minFilter:si,generateMipmaps:!1,type:_a,format:qn,colorSpace:Gs,depthBuffer:!1},r=Im(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Im(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jw(s)),this._blurMaterial=Qw(s,e,n)}return r}_compileMaterial(e){const n=new Tt(this._lodPlanes[0],e);this._renderer.compile(n,Tu)}_sceneToCubeUV(e,n,i,r,s){const l=new yn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(Lm),f.toneMapping=nr,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const v=new Ql({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),m=new Tt(new Zs,v);let u=!1;const g=e.background;g?g.isColor&&(v.color.copy(g),e.background=null,u=!0):(v.color.copy(Lm),u=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[x],s.y,s.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[x]));const A=this._cubeSize;rl(r,y*A,x>2?A:0,A,A),f.setRenderTarget(r),u&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=p,f.autoClear=d,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Hs||e.mapping===Vs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Um());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Tt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;rl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Tu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Dm[(r-s-1)%Dm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Tt(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Mr-1),v=s/_,m=isFinite(s)?1+Math.floor(h*v):Mr;m>Mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mr}`);const u=[];let g=0;for(let T=0;T<Mr;++T){const b=T/v,E=Math.exp(-b*b/2);u.push(E),T===0?g+=E:T<m&&(g+=2*E)}for(let T=0;T<u.length;T++)u[T]=u[T]/g;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-i;const y=this._sizeLods[r],A=3*y*(r>x-Es?r-x+Es:0),C=4*(this._cubeSize-y);rl(n,A,C,3*y,2*y),l.setRenderTarget(n),l.render(f,Tu)}}function Jw(t){const e=[],n=[],i=[];let r=t;const s=t-Es+1+Pm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Es?l=Pm[o-t+Es-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,_=6,v=3,m=2,u=1,g=new Float32Array(v*_*p),x=new Float32Array(m*_*p),y=new Float32Array(u*_*p);for(let C=0;C<p;C++){const T=C%3*2/3-1,b=C>2?0:-1,E=[T,b,0,T+2/3,b,0,T+2/3,b+1,0,T,b,0,T+2/3,b+1,0,T,b+1,0];g.set(E,v*_*C),x.set(d,m*_*C);const M=[C,C,C,C,C,C];y.set(M,u*_*C)}const A=new dn;A.setAttribute("position",new ci(g,v)),A.setAttribute("uv",new ci(x,m)),A.setAttribute("faceIndex",new ci(y,u)),e.push(A),r>Es&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Im(t,e,n){const i=new kr(t,e,n);return i.texture.mapping=yc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Qw(t,e,n){const i=new Float32Array(Mr),r=new D(0,1,0);return new or({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Um(){return new or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Fm(){return new or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function bd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function eT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Uf||l===Ff,h=l===Hs||l===Vs;if(c||h){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new Nm(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&r(p)?(n===null&&(n=new Nm(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function tT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&aa("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function nT(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,_=f.attributes.position;let v=0;if(p!==null){const g=p.array;v=p.version;for(let x=0,y=g.length;x<y;x+=3){const A=g[x+0],C=g[x+1],T=g[x+2];d.push(A,C,C,T,T,A)}}else if(_!==void 0){const g=_.array;v=_.version;for(let x=0,y=g.length/3-1;x<y;x+=3){const A=x+0,C=x+1,T=x+2;d.push(A,C,C,T,T,A)}}else return;const m=new(P0(d)?U0:I0)(d,1);m.version=v;const u=s.get(f);u&&e.remove(u),s.set(f,m)}function h(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function iT(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,d*o,_),n.update(p,i,_))}function h(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,_);let m=0;for(let u=0;u<_;u++)m+=p[u];n.update(m,i,1)}function f(d,p,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)c(d[u]/o,p[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,v,0,_);let u=0;for(let g=0;g<_;g++)u+=p[g]*v[g];n.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function rT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function sT(t,e,n){const i=new WeakMap,r=new ut;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let M=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let A=a.attributes.position.count*y,C=1;A>e.maxTextureSize&&(C=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const T=new Float32Array(A*C*4*f),b=new L0(T,A,C,f);b.type=wi,b.needsUpdate=!0;const E=y*4;for(let L=0;L<f;L++){const F=u[L],W=g[L],J=x[L],z=A*C*4*L;for(let j=0;j<F.count;j++){const ie=j*E;_===!0&&(r.fromBufferAttribute(F,j),T[z+ie+0]=r.x,T[z+ie+1]=r.y,T[z+ie+2]=r.z,T[z+ie+3]=0),v===!0&&(r.fromBufferAttribute(W,j),T[z+ie+4]=r.x,T[z+ie+5]=r.y,T[z+ie+6]=r.z,T[z+ie+7]=0),m===!0&&(r.fromBufferAttribute(J,j),T[z+ie+8]=r.x,T[z+ie+9]=r.y,T[z+ie+10]=r.z,T[z+ie+11]=J.itemSize===4?r.w:1)}}d={count:f,texture:b,size:new ge(A,C)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function oT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const tv=new tn,Om=new B0(1,1),nv=new L0,iv=new QS,rv=new k0,km=[],zm=[],Bm=new Float32Array(16),Hm=new Float32Array(9),Vm=new Float32Array(4);function Js(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=km[r];if(s===void 0&&(s=new Float32Array(r),km[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function It(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ut(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Mc(t,e){let n=zm[e];n===void 0&&(n=new Int32Array(e),zm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function aT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function lT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2fv(this.addr,e),Ut(n,e)}}function cT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(It(n,e))return;t.uniform3fv(this.addr,e),Ut(n,e)}}function uT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4fv(this.addr,e),Ut(n,e)}}function fT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;Vm.set(i),t.uniformMatrix2fv(this.addr,!1,Vm),Ut(n,i)}}function hT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;Hm.set(i),t.uniformMatrix3fv(this.addr,!1,Hm),Ut(n,i)}}function dT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;Bm.set(i),t.uniformMatrix4fv(this.addr,!1,Bm),Ut(n,i)}}function pT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function mT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2iv(this.addr,e),Ut(n,e)}}function _T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3iv(this.addr,e),Ut(n,e)}}function gT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4iv(this.addr,e),Ut(n,e)}}function vT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function xT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2uiv(this.addr,e),Ut(n,e)}}function yT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3uiv(this.addr,e),Ut(n,e)}}function ST(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4uiv(this.addr,e),Ut(n,e)}}function MT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Om.compareFunction=b0,s=Om):s=tv,n.setTexture2D(e||s,r)}function ET(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||iv,r)}function wT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||rv,r)}function TT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||nv,r)}function AT(t){switch(t){case 5126:return aT;case 35664:return lT;case 35665:return cT;case 35666:return uT;case 35674:return fT;case 35675:return hT;case 35676:return dT;case 5124:case 35670:return pT;case 35667:case 35671:return mT;case 35668:case 35672:return _T;case 35669:case 35673:return gT;case 5125:return vT;case 36294:return xT;case 36295:return yT;case 36296:return ST;case 35678:case 36198:case 36298:case 36306:case 35682:return MT;case 35679:case 36299:case 36307:return ET;case 35680:case 36300:case 36308:case 36293:return wT;case 36289:case 36303:case 36311:case 36292:return TT}}function RT(t,e){t.uniform1fv(this.addr,e)}function CT(t,e){const n=Js(e,this.size,2);t.uniform2fv(this.addr,n)}function bT(t,e){const n=Js(e,this.size,3);t.uniform3fv(this.addr,n)}function PT(t,e){const n=Js(e,this.size,4);t.uniform4fv(this.addr,n)}function LT(t,e){const n=Js(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function DT(t,e){const n=Js(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function NT(t,e){const n=Js(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function IT(t,e){t.uniform1iv(this.addr,e)}function UT(t,e){t.uniform2iv(this.addr,e)}function FT(t,e){t.uniform3iv(this.addr,e)}function OT(t,e){t.uniform4iv(this.addr,e)}function kT(t,e){t.uniform1uiv(this.addr,e)}function zT(t,e){t.uniform2uiv(this.addr,e)}function BT(t,e){t.uniform3uiv(this.addr,e)}function HT(t,e){t.uniform4uiv(this.addr,e)}function VT(t,e,n){const i=this.cache,r=e.length,s=Mc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||tv,s[o])}function GT(t,e,n){const i=this.cache,r=e.length,s=Mc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||iv,s[o])}function WT(t,e,n){const i=this.cache,r=e.length,s=Mc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||rv,s[o])}function XT(t,e,n){const i=this.cache,r=e.length,s=Mc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||nv,s[o])}function jT(t){switch(t){case 5126:return RT;case 35664:return CT;case 35665:return bT;case 35666:return PT;case 35674:return LT;case 35675:return DT;case 35676:return NT;case 5124:case 35670:return IT;case 35667:case 35671:return UT;case 35668:case 35672:return FT;case 35669:case 35673:return OT;case 5125:return kT;case 36294:return zT;case 36295:return BT;case 36296:return HT;case 35678:case 36198:case 36298:case 36306:case 35682:return VT;case 35679:case 36299:case 36307:return GT;case 35680:case 36300:case 36308:case 36293:return WT;case 36289:case 36303:case 36311:case 36292:return XT}}class YT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=AT(n.type)}}class qT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=jT(n.type)}}class $T{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Pu=/(\w+)(\])?(\[|\.)?/g;function Gm(t,e){t.seq.push(e),t.map[e.id]=e}function KT(t,e,n){const i=t.name,r=i.length;for(Pu.lastIndex=0;;){const s=Pu.exec(i),o=Pu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Gm(n,c===void 0?new YT(a,t,e):new qT(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new $T(a),Gm(n,f)),n=f}}}class Tl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);KT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Wm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const ZT=37297;let JT=0;function QT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Xm=new qe;function e2(t){st._getMatrix(Xm,st.workingColorSpace,t);const e=`mat3( ${Xm.elements.map(n=>n.toFixed(4))} )`;switch(st.getTransfer(t)){case Kl:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function jm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+QT(t.getShaderSource(e),a)}else return s}function t2(t,e){const n=e2(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function n2(t,e){let n;switch(e){case hS:n="Linear";break;case dS:n="Reinhard";break;case pS:n="Cineon";break;case mS:n="ACESFilmic";break;case gS:n="AgX";break;case vS:n="Neutral";break;case _S:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const sl=new D;function i2(){st.getLuminanceCoefficients(sl);const t=sl.x.toFixed(4),e=sl.y.toFixed(4),n=sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wo).join(`
`)}function s2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function o2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function wo(t){return t!==""}function Ym(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const a2=/^[ \t]*#include +<([\w\d./]+)>/gm;function _h(t){return t.replace(a2,c2)}const l2=new Map;function c2(t,e){let n=$e[e];if(n===void 0){const i=l2.get(e);if(i!==void 0)n=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return _h(n)}const u2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $m(t){return t.replace(u2,f2)}function f2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Km(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function h2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===_0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===g0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===xi&&(e="SHADOWMAP_TYPE_VSM"),e}function d2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Hs:case Vs:e="ENVMAP_TYPE_CUBE";break;case yc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function p2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function m2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case v0:e="ENVMAP_BLENDING_MULTIPLY";break;case uS:e="ENVMAP_BLENDING_MIX";break;case fS:e="ENVMAP_BLENDING_ADD";break}return e}function _2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function g2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=h2(n),c=d2(n),h=p2(n),f=m2(n),d=_2(n),p=r2(n),_=s2(s),v=r.createProgram();let m,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(wo).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(wo).join(`
`),u.length>0&&(u+=`
`)):(m=[Km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wo).join(`
`),u=[Km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==nr?"#define TONE_MAPPING":"",n.toneMapping!==nr?$e.tonemapping_pars_fragment:"",n.toneMapping!==nr?n2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,t2("linearToOutputTexel",n.outputColorSpace),i2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(wo).join(`
`)),o=_h(o),o=Ym(o,n),o=qm(o,n),a=_h(a),a=Ym(a,n),a=qm(a,n),o=$m(o),a=$m(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Zp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Zp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=g+m+o,y=g+u+a,A=Wm(r,r.VERTEX_SHADER,x),C=Wm(r,r.FRAGMENT_SHADER,y);r.attachShader(v,A),r.attachShader(v,C),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function T(L){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(v)||"",W=r.getShaderInfoLog(A)||"",J=r.getShaderInfoLog(C)||"",z=F.trim(),j=W.trim(),ie=J.trim();let N=!0,ee=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(N=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,A,C);else{const oe=jm(r,A,"vertex"),ve=jm(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+oe+`
`+ve)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(j===""||ie==="")&&(ee=!1);ee&&(L.diagnostics={runnable:N,programLog:z,vertexShader:{log:j,prefix:m},fragmentShader:{log:ie,prefix:u}})}r.deleteShader(A),r.deleteShader(C),b=new Tl(r,v),E=o2(r,v)}let b;this.getUniforms=function(){return b===void 0&&T(this),b};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,ZT)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=JT++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=C,this}let v2=0;class x2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new y2(e),n.set(e,i)),i}}class y2{constructor(e){this.id=v2++,this.code=e,this.usedTimes=0}}function S2(t,e,n,i,r,s,o){const a=new D0,l=new x2,c=new Set,h=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,L,F,W){const J=F.fog,z=W.geometry,j=E.isMeshStandardMaterial?F.environment:null,ie=(E.isMeshStandardMaterial?n:e).get(E.envMap||j),N=ie&&ie.mapping===yc?ie.image.height:null,ee=_[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const oe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ve=oe!==void 0?oe.length:0;let Ne=0;z.morphAttributes.position!==void 0&&(Ne=1),z.morphAttributes.normal!==void 0&&(Ne=2),z.morphAttributes.color!==void 0&&(Ne=3);let je,Ze,Ye,te;if(ee){const it=ni[ee];je=it.vertexShader,Ze=it.fragmentShader}else je=E.vertexShader,Ze=E.fragmentShader,l.update(E),Ye=l.getVertexShaderID(E),te=l.getFragmentShaderID(E);const ae=t.getRenderTarget(),Ae=t.state.buffers.depth.getReversed(),ke=W.isInstancedMesh===!0,Ce=W.isBatchedMesh===!0,Te=!!E.map,Oe=!!E.matcap,P=!!ie,B=!!E.aoMap,G=!!E.lightMap,K=!!E.bumpMap,Q=!!E.normalMap,Z=!!E.displacementMap,X=!!E.emissiveMap,ue=!!E.metalnessMap,ze=!!E.roughnessMap,Ie=E.anisotropy>0,R=E.clearcoat>0,S=E.dispersion>0,I=E.iridescence>0,H=E.sheen>0,$=E.transmission>0,V=Ie&&!!E.anisotropyMap,le=R&&!!E.clearcoatMap,ne=R&&!!E.clearcoatNormalMap,ye=R&&!!E.clearcoatRoughnessMap,de=I&&!!E.iridescenceMap,se=I&&!!E.iridescenceThicknessMap,xe=H&&!!E.sheenColorMap,be=H&&!!E.sheenRoughnessMap,Ee=!!E.specularMap,_e=!!E.specularColorMap,Ge=!!E.specularIntensityMap,U=$&&!!E.transmissionMap,pe=$&&!!E.thicknessMap,Se=!!E.gradientMap,Pe=!!E.alphaMap,fe=E.alphaTest>0,re=!!E.alphaHash,Ue=!!E.extensions;let Le=nr;E.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Le=t.toneMapping);const nt={shaderID:ee,shaderType:E.type,shaderName:E.name,vertexShader:je,fragmentShader:Ze,defines:E.defines,customVertexShaderID:Ye,customFragmentShaderID:te,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ce,batchingColor:Ce&&W._colorsTexture!==null,instancing:ke,instancingColor:ke&&W.instanceColor!==null,instancingMorph:ke&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ae===null?t.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Gs,alphaToCoverage:!!E.alphaToCoverage,map:Te,matcap:Oe,envMap:P,envMapMode:P&&ie.mapping,envMapCubeUVHeight:N,aoMap:B,lightMap:G,bumpMap:K,normalMap:Q,displacementMap:d&&Z,emissiveMap:X,normalMapObjectSpace:Q&&E.normalMapType===MS,normalMapTangentSpace:Q&&E.normalMapType===C0,metalnessMap:ue,roughnessMap:ze,anisotropy:Ie,anisotropyMap:V,clearcoat:R,clearcoatMap:le,clearcoatNormalMap:ne,clearcoatRoughnessMap:ye,dispersion:S,iridescence:I,iridescenceMap:de,iridescenceThicknessMap:se,sheen:H,sheenColorMap:xe,sheenRoughnessMap:be,specularMap:Ee,specularColorMap:_e,specularIntensityMap:Ge,transmission:$,transmissionMap:U,thicknessMap:pe,gradientMap:Se,opaque:E.transparent===!1&&E.blending===Ls&&E.alphaToCoverage===!1,alphaMap:Pe,alphaTest:fe,alphaHash:re,combine:E.combine,mapUv:Te&&v(E.map.channel),aoMapUv:B&&v(E.aoMap.channel),lightMapUv:G&&v(E.lightMap.channel),bumpMapUv:K&&v(E.bumpMap.channel),normalMapUv:Q&&v(E.normalMap.channel),displacementMapUv:Z&&v(E.displacementMap.channel),emissiveMapUv:X&&v(E.emissiveMap.channel),metalnessMapUv:ue&&v(E.metalnessMap.channel),roughnessMapUv:ze&&v(E.roughnessMap.channel),anisotropyMapUv:V&&v(E.anisotropyMap.channel),clearcoatMapUv:le&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:ne&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:se&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:be&&v(E.sheenRoughnessMap.channel),specularMapUv:Ee&&v(E.specularMap.channel),specularColorMapUv:_e&&v(E.specularColorMap.channel),specularIntensityMapUv:Ge&&v(E.specularIntensityMap.channel),transmissionMapUv:U&&v(E.transmissionMap.channel),thicknessMapUv:pe&&v(E.thicknessMap.channel),alphaMapUv:Pe&&v(E.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Q||Ie),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!z.attributes.uv&&(Te||Pe),fog:!!J,useFog:E.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ae,skinning:W.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Ne,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:Le,decodeVideoTexture:Te&&E.map.isVideoTexture===!0&&st.getTransfer(E.map.colorSpace)===lt,decodeVideoTextureEmissive:X&&E.emissiveMap.isVideoTexture===!0&&st.getTransfer(E.emissiveMap.colorSpace)===lt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Nn,flipSided:E.side===hn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ue&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&E.extensions.multiDraw===!0||Ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function u(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)M.push(L),M.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(g(M,E),x(M,E),M.push(t.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function g(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function x(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function y(E){const M=_[E.type];let L;if(M){const F=ni[M];L=h1.clone(F.uniforms)}else L=E.uniforms;return L}function A(E,M){let L;for(let F=0,W=h.length;F<W;F++){const J=h[F];if(J.cacheKey===M){L=J,++L.usedTimes;break}}return L===void 0&&(L=new g2(t,M,E,s),h.push(L)),L}function C(E){if(--E.usedTimes===0){const M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function T(E){l.remove(E)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:A,releaseProgram:C,releaseShaderCache:T,programs:h,dispose:b}}function M2(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function E2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Zm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Jm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,_,v,m){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:v,group:m},t[e]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=p,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=v,u.group=m),e++,u}function a(f,d,p,_,v,m){const u=o(f,d,p,_,v,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(f,d,p,_,v,m){const u=o(f,d,p,_,v,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,d){n.length>1&&n.sort(f||E2),i.length>1&&i.sort(d||Zm),r.length>1&&r.sort(d||Zm)}function h(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function w2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Jm,t.set(i,[o])):r>=s.length?(o=new Jm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function T2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new D,color:new et};break;case"SpotLight":n={position:new D,direction:new D,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function A2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let R2=0;function C2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function b2(t){const e=new T2,n=A2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const r=new D,s=new gt,o=new gt;function a(c){let h=0,f=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,v=0,m=0,u=0,g=0,x=0,y=0,A=0,C=0,T=0;c.sort(C2);for(let E=0,M=c.length;E<M;E++){const L=c[E],F=L.color,W=L.intensity,J=L.distance,z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=F.r*W,f+=F.g*W,d+=F.b*W;else if(L.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(L.sh.coefficients[j],W);T++}else if(L.isDirectionalLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ie=L.shadow,N=n.get(L);N.shadowIntensity=ie.intensity,N.shadowBias=ie.bias,N.shadowNormalBias=ie.normalBias,N.shadowRadius=ie.radius,N.shadowMapSize=ie.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=z,i.directionalShadowMatrix[p]=L.shadow.matrix,g++}i.directional[p]=j,p++}else if(L.isSpotLight){const j=e.get(L);j.position.setFromMatrixPosition(L.matrixWorld),j.color.copy(F).multiplyScalar(W),j.distance=J,j.coneCos=Math.cos(L.angle),j.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),j.decay=L.decay,i.spot[v]=j;const ie=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,ie.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[v]=ie.matrix,L.castShadow){const N=n.get(L);N.shadowIntensity=ie.intensity,N.shadowBias=ie.bias,N.shadowNormalBias=ie.normalBias,N.shadowRadius=ie.radius,N.shadowMapSize=ie.mapSize,i.spotShadow[v]=N,i.spotShadowMap[v]=z,y++}v++}else if(L.isRectAreaLight){const j=e.get(L);j.color.copy(F).multiplyScalar(W),j.halfWidth.set(L.width*.5,0,0),j.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=j,m++}else if(L.isPointLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),j.distance=L.distance,j.decay=L.decay,L.castShadow){const ie=L.shadow,N=n.get(L);N.shadowIntensity=ie.intensity,N.shadowBias=ie.bias,N.shadowNormalBias=ie.normalBias,N.shadowRadius=ie.radius,N.shadowMapSize=ie.mapSize,N.shadowCameraNear=ie.camera.near,N.shadowCameraFar=ie.camera.far,i.pointShadow[_]=N,i.pointShadowMap[_]=z,i.pointShadowMatrix[_]=L.shadow.matrix,x++}i.point[_]=j,_++}else if(L.isHemisphereLight){const j=e.get(L);j.skyColor.copy(L.color).multiplyScalar(W),j.groundColor.copy(L.groundColor).multiplyScalar(W),i.hemi[u]=j,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;const b=i.hash;(b.directionalLength!==p||b.pointLength!==_||b.spotLength!==v||b.rectAreaLength!==m||b.hemiLength!==u||b.numDirectionalShadows!==g||b.numPointShadows!==x||b.numSpotShadows!==y||b.numSpotMaps!==A||b.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=T,b.directionalLength=p,b.pointLength=_,b.spotLength=v,b.rectAreaLength=m,b.hemiLength=u,b.numDirectionalShadows=g,b.numPointShadows=x,b.numSpotShadows=y,b.numSpotMaps=A,b.numLightProbes=T,i.version=R2++)}function l(c,h){let f=0,d=0,p=0,_=0,v=0;const m=h.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const x=c[u];if(x.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(x.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Qm(t){const e=new b2(t),n=[],i=[];function r(h){c.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function o(h){i.push(h)}function a(){e.setup(n)}function l(h){e.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function P2(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Qm(t),e.set(r,[a])):s>=o.length?(a=new Qm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const L2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function N2(t,e,n){let i=new Md;const r=new ge,s=new ge,o=new ut,a=new tM({depthPacking:SS}),l=new nM,c={},h=n.maxTextureSize,f={[sr]:hn,[hn]:sr,[Nn]:Nn},d=new or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:L2,fragmentShader:D2}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new dn;_.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Tt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_0;let u=this.type;this.render=function(C,T,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const E=t.getRenderTarget(),M=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),F=t.state;F.setBlending(tr),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const W=u!==xi&&this.type===xi,J=u===xi&&this.type!==xi;for(let z=0,j=C.length;z<j;z++){const ie=C[z],N=ie.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const ee=N.getFrameExtents();if(r.multiply(ee),s.copy(N.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ee.x),r.x=s.x*ee.x,N.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ee.y),r.y=s.y*ee.y,N.mapSize.y=s.y)),N.map===null||W===!0||J===!0){const ve=this.type!==xi?{minFilter:Zn,magFilter:Zn}:{};N.map!==null&&N.map.dispose(),N.map=new kr(r.x,r.y,ve),N.map.texture.name=ie.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const oe=N.getViewportCount();for(let ve=0;ve<oe;ve++){const Ne=N.getViewport(ve);o.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),F.viewport(o),N.updateMatrices(ie,ve),i=N.getFrustum(),y(T,b,N.camera,ie,this.type)}N.isPointLightShadow!==!0&&this.type===xi&&g(N,b),N.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(E,M,L)};function g(C,T){const b=e.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new kr(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(T,null,b,d,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(T,null,b,p,v,null)}function x(C,T,b,E){let M=null;const L=b.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)M=L;else if(M=b.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const F=M.uuid,W=T.uuid;let J=c[F];J===void 0&&(J={},c[F]=J);let z=J[W];z===void 0&&(z=M.clone(),J[W]=z,T.addEventListener("dispose",A)),M=z}if(M.visible=T.visible,M.wireframe=T.wireframe,E===xi?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:f[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,b.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=t.properties.get(M);F.light=b}return M}function y(C,T,b,E,M){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===xi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,C.matrixWorld);const W=e.update(C),J=C.material;if(Array.isArray(J)){const z=W.groups;for(let j=0,ie=z.length;j<ie;j++){const N=z[j],ee=J[N.materialIndex];if(ee&&ee.visible){const oe=x(C,ee,E,M);C.onBeforeShadow(t,C,T,b,W,oe,N),t.renderBufferDirect(b,null,W,oe,C,N),C.onAfterShadow(t,C,T,b,W,oe,N)}}}else if(J.visible){const z=x(C,J,E,M);C.onBeforeShadow(t,C,T,b,W,z,null),t.renderBufferDirect(b,null,W,z,C,null),C.onAfterShadow(t,C,T,b,W,z,null)}}const F=C.children;for(let W=0,J=F.length;W<J;W++)y(F[W],T,b,E,M)}function A(C){C.target.removeEventListener("dispose",A);for(const b in c){const E=c[b],M=C.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const I2={[Cf]:bf,[Pf]:Nf,[Lf]:If,[Bs]:Df,[bf]:Cf,[Nf]:Pf,[If]:Lf,[Df]:Bs};function U2(t,e){function n(){let U=!1;const pe=new ut;let Se=null;const Pe=new ut(0,0,0,0);return{setMask:function(fe){Se!==fe&&!U&&(t.colorMask(fe,fe,fe,fe),Se=fe)},setLocked:function(fe){U=fe},setClear:function(fe,re,Ue,Le,nt){nt===!0&&(fe*=Le,re*=Le,Ue*=Le),pe.set(fe,re,Ue,Le),Pe.equals(pe)===!1&&(t.clearColor(fe,re,Ue,Le),Pe.copy(pe))},reset:function(){U=!1,Se=null,Pe.set(-1,0,0,0)}}}function i(){let U=!1,pe=!1,Se=null,Pe=null,fe=null;return{setReversed:function(re){if(pe!==re){const Ue=e.get("EXT_clip_control");re?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),pe=re;const Le=fe;fe=null,this.setClear(Le)}},getReversed:function(){return pe},setTest:function(re){re?ae(t.DEPTH_TEST):Ae(t.DEPTH_TEST)},setMask:function(re){Se!==re&&!U&&(t.depthMask(re),Se=re)},setFunc:function(re){if(pe&&(re=I2[re]),Pe!==re){switch(re){case Cf:t.depthFunc(t.NEVER);break;case bf:t.depthFunc(t.ALWAYS);break;case Pf:t.depthFunc(t.LESS);break;case Bs:t.depthFunc(t.LEQUAL);break;case Lf:t.depthFunc(t.EQUAL);break;case Df:t.depthFunc(t.GEQUAL);break;case Nf:t.depthFunc(t.GREATER);break;case If:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Pe=re}},setLocked:function(re){U=re},setClear:function(re){fe!==re&&(pe&&(re=1-re),t.clearDepth(re),fe=re)},reset:function(){U=!1,Se=null,Pe=null,fe=null,pe=!1}}}function r(){let U=!1,pe=null,Se=null,Pe=null,fe=null,re=null,Ue=null,Le=null,nt=null;return{setTest:function(it){U||(it?ae(t.STENCIL_TEST):Ae(t.STENCIL_TEST))},setMask:function(it){pe!==it&&!U&&(t.stencilMask(it),pe=it)},setFunc:function(it,kn,pn){(Se!==it||Pe!==kn||fe!==pn)&&(t.stencilFunc(it,kn,pn),Se=it,Pe=kn,fe=pn)},setOp:function(it,kn,pn){(re!==it||Ue!==kn||Le!==pn)&&(t.stencilOp(it,kn,pn),re=it,Ue=kn,Le=pn)},setLocked:function(it){U=it},setClear:function(it){nt!==it&&(t.clearStencil(it),nt=it)},reset:function(){U=!1,pe=null,Se=null,Pe=null,fe=null,re=null,Ue=null,Le=null,nt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let h={},f={},d=new WeakMap,p=[],_=null,v=!1,m=null,u=null,g=null,x=null,y=null,A=null,C=null,T=new et(0,0,0),b=0,E=!1,M=null,L=null,F=null,W=null,J=null;const z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,ie=0;const N=t.getParameter(t.VERSION);N.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(N)[1]),j=ie>=1):N.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),j=ie>=2);let ee=null,oe={};const ve=t.getParameter(t.SCISSOR_BOX),Ne=t.getParameter(t.VIEWPORT),je=new ut().fromArray(ve),Ze=new ut().fromArray(Ne);function Ye(U,pe,Se,Pe){const fe=new Uint8Array(4),re=t.createTexture();t.bindTexture(U,re),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ue=0;Ue<Se;Ue++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(pe,0,t.RGBA,1,1,Pe,0,t.RGBA,t.UNSIGNED_BYTE,fe):t.texImage2D(pe+Ue,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,fe);return re}const te={};te[t.TEXTURE_2D]=Ye(t.TEXTURE_2D,t.TEXTURE_2D,1),te[t.TEXTURE_CUBE_MAP]=Ye(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[t.TEXTURE_2D_ARRAY]=Ye(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),te[t.TEXTURE_3D]=Ye(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(t.DEPTH_TEST),o.setFunc(Bs),K(!1),Q(Xp),ae(t.CULL_FACE),B(tr);function ae(U){h[U]!==!0&&(t.enable(U),h[U]=!0)}function Ae(U){h[U]!==!1&&(t.disable(U),h[U]=!1)}function ke(U,pe){return f[U]!==pe?(t.bindFramebuffer(U,pe),f[U]=pe,U===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=pe),U===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=pe),!0):!1}function Ce(U,pe){let Se=p,Pe=!1;if(U){Se=d.get(pe),Se===void 0&&(Se=[],d.set(pe,Se));const fe=U.textures;if(Se.length!==fe.length||Se[0]!==t.COLOR_ATTACHMENT0){for(let re=0,Ue=fe.length;re<Ue;re++)Se[re]=t.COLOR_ATTACHMENT0+re;Se.length=fe.length,Pe=!0}}else Se[0]!==t.BACK&&(Se[0]=t.BACK,Pe=!0);Pe&&t.drawBuffers(Se)}function Te(U){return _!==U?(t.useProgram(U),_=U,!0):!1}const Oe={[Sr]:t.FUNC_ADD,[Yy]:t.FUNC_SUBTRACT,[qy]:t.FUNC_REVERSE_SUBTRACT};Oe[$y]=t.MIN,Oe[Ky]=t.MAX;const P={[Zy]:t.ZERO,[Jy]:t.ONE,[Qy]:t.SRC_COLOR,[Af]:t.SRC_ALPHA,[sS]:t.SRC_ALPHA_SATURATE,[iS]:t.DST_COLOR,[tS]:t.DST_ALPHA,[eS]:t.ONE_MINUS_SRC_COLOR,[Rf]:t.ONE_MINUS_SRC_ALPHA,[rS]:t.ONE_MINUS_DST_COLOR,[nS]:t.ONE_MINUS_DST_ALPHA,[oS]:t.CONSTANT_COLOR,[aS]:t.ONE_MINUS_CONSTANT_COLOR,[lS]:t.CONSTANT_ALPHA,[cS]:t.ONE_MINUS_CONSTANT_ALPHA};function B(U,pe,Se,Pe,fe,re,Ue,Le,nt,it){if(U===tr){v===!0&&(Ae(t.BLEND),v=!1);return}if(v===!1&&(ae(t.BLEND),v=!0),U!==jy){if(U!==m||it!==E){if((u!==Sr||y!==Sr)&&(t.blendEquation(t.FUNC_ADD),u=Sr,y=Sr),it)switch(U){case Ls:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case jp:t.blendFunc(t.ONE,t.ONE);break;case Yp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case qp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ls:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case jp:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Yp:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qp:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}g=null,x=null,A=null,C=null,T.set(0,0,0),b=0,m=U,E=it}return}fe=fe||pe,re=re||Se,Ue=Ue||Pe,(pe!==u||fe!==y)&&(t.blendEquationSeparate(Oe[pe],Oe[fe]),u=pe,y=fe),(Se!==g||Pe!==x||re!==A||Ue!==C)&&(t.blendFuncSeparate(P[Se],P[Pe],P[re],P[Ue]),g=Se,x=Pe,A=re,C=Ue),(Le.equals(T)===!1||nt!==b)&&(t.blendColor(Le.r,Le.g,Le.b,nt),T.copy(Le),b=nt),m=U,E=!1}function G(U,pe){U.side===Nn?Ae(t.CULL_FACE):ae(t.CULL_FACE);let Se=U.side===hn;pe&&(Se=!Se),K(Se),U.blending===Ls&&U.transparent===!1?B(tr):B(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const Pe=U.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),X(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ae(t.SAMPLE_ALPHA_TO_COVERAGE):Ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function K(U){M!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),M=U)}function Q(U){U!==Wy?(ae(t.CULL_FACE),U!==L&&(U===Xp?t.cullFace(t.BACK):U===Xy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ae(t.CULL_FACE),L=U}function Z(U){U!==F&&(j&&t.lineWidth(U),F=U)}function X(U,pe,Se){U?(ae(t.POLYGON_OFFSET_FILL),(W!==pe||J!==Se)&&(t.polygonOffset(pe,Se),W=pe,J=Se)):Ae(t.POLYGON_OFFSET_FILL)}function ue(U){U?ae(t.SCISSOR_TEST):Ae(t.SCISSOR_TEST)}function ze(U){U===void 0&&(U=t.TEXTURE0+z-1),ee!==U&&(t.activeTexture(U),ee=U)}function Ie(U,pe,Se){Se===void 0&&(ee===null?Se=t.TEXTURE0+z-1:Se=ee);let Pe=oe[Se];Pe===void 0&&(Pe={type:void 0,texture:void 0},oe[Se]=Pe),(Pe.type!==U||Pe.texture!==pe)&&(ee!==Se&&(t.activeTexture(Se),ee=Se),t.bindTexture(U,pe||te[U]),Pe.type=U,Pe.texture=pe)}function R(){const U=oe[ee];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function S(){try{t.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function I(){try{t.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function H(){try{t.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{t.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function V(){try{t.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{t.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{t.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{t.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{t.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{t.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(U){je.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),je.copy(U))}function be(U){Ze.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Ze.copy(U))}function Ee(U,pe){let Se=c.get(pe);Se===void 0&&(Se=new WeakMap,c.set(pe,Se));let Pe=Se.get(U);Pe===void 0&&(Pe=t.getUniformBlockIndex(pe,U.name),Se.set(U,Pe))}function _e(U,pe){const Pe=c.get(pe).get(U);l.get(pe)!==Pe&&(t.uniformBlockBinding(pe,Pe,U.__bindingPointIndex),l.set(pe,Pe))}function Ge(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},ee=null,oe={},f={},d=new WeakMap,p=[],_=null,v=!1,m=null,u=null,g=null,x=null,y=null,A=null,C=null,T=new et(0,0,0),b=0,E=!1,M=null,L=null,F=null,W=null,J=null,je.set(0,0,t.canvas.width,t.canvas.height),Ze.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ae,disable:Ae,bindFramebuffer:ke,drawBuffers:Ce,useProgram:Te,setBlending:B,setMaterial:G,setFlipSided:K,setCullFace:Q,setLineWidth:Z,setPolygonOffset:X,setScissorTest:ue,activeTexture:ze,bindTexture:Ie,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:I,texImage2D:de,texImage3D:se,updateUBOMapping:Ee,uniformBlockBinding:_e,texStorage2D:ne,texStorage3D:ye,texSubImage2D:H,texSubImage3D:$,compressedTexSubImage2D:V,compressedTexSubImage3D:le,scissor:xe,viewport:be,reset:Ge}}function F2(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ge,h=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,S){return p?new OffscreenCanvas(R,S):Jl("canvas")}function v(R,S,I){let H=1;const $=Ie(R);if(($.width>I||$.height>I)&&(H=I/Math.max($.width,$.height)),H<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const V=Math.floor(H*$.width),le=Math.floor(H*$.height);f===void 0&&(f=_(V,le));const ne=S?_(V,le):f;return ne.width=V,ne.height=le,ne.getContext("2d").drawImage(R,0,0,V,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+V+"x"+le+")."),ne}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function m(R){return R.generateMipmaps}function u(R){t.generateMipmap(R)}function g(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(R,S,I,H,$=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let V=S;if(S===t.RED&&(I===t.FLOAT&&(V=t.R32F),I===t.HALF_FLOAT&&(V=t.R16F),I===t.UNSIGNED_BYTE&&(V=t.R8)),S===t.RED_INTEGER&&(I===t.UNSIGNED_BYTE&&(V=t.R8UI),I===t.UNSIGNED_SHORT&&(V=t.R16UI),I===t.UNSIGNED_INT&&(V=t.R32UI),I===t.BYTE&&(V=t.R8I),I===t.SHORT&&(V=t.R16I),I===t.INT&&(V=t.R32I)),S===t.RG&&(I===t.FLOAT&&(V=t.RG32F),I===t.HALF_FLOAT&&(V=t.RG16F),I===t.UNSIGNED_BYTE&&(V=t.RG8)),S===t.RG_INTEGER&&(I===t.UNSIGNED_BYTE&&(V=t.RG8UI),I===t.UNSIGNED_SHORT&&(V=t.RG16UI),I===t.UNSIGNED_INT&&(V=t.RG32UI),I===t.BYTE&&(V=t.RG8I),I===t.SHORT&&(V=t.RG16I),I===t.INT&&(V=t.RG32I)),S===t.RGB_INTEGER&&(I===t.UNSIGNED_BYTE&&(V=t.RGB8UI),I===t.UNSIGNED_SHORT&&(V=t.RGB16UI),I===t.UNSIGNED_INT&&(V=t.RGB32UI),I===t.BYTE&&(V=t.RGB8I),I===t.SHORT&&(V=t.RGB16I),I===t.INT&&(V=t.RGB32I)),S===t.RGBA_INTEGER&&(I===t.UNSIGNED_BYTE&&(V=t.RGBA8UI),I===t.UNSIGNED_SHORT&&(V=t.RGBA16UI),I===t.UNSIGNED_INT&&(V=t.RGBA32UI),I===t.BYTE&&(V=t.RGBA8I),I===t.SHORT&&(V=t.RGBA16I),I===t.INT&&(V=t.RGBA32I)),S===t.RGB&&(I===t.UNSIGNED_INT_5_9_9_9_REV&&(V=t.RGB9_E5),I===t.UNSIGNED_INT_10F_11F_11F_REV&&(V=t.R11F_G11F_B10F)),S===t.RGBA){const le=$?Kl:st.getTransfer(H);I===t.FLOAT&&(V=t.RGBA32F),I===t.HALF_FLOAT&&(V=t.RGBA16F),I===t.UNSIGNED_BYTE&&(V=le===lt?t.SRGB8_ALPHA8:t.RGBA8),I===t.UNSIGNED_SHORT_4_4_4_4&&(V=t.RGBA4),I===t.UNSIGNED_SHORT_5_5_5_1&&(V=t.RGB5_A1)}return(V===t.R16F||V===t.R32F||V===t.RG16F||V===t.RG32F||V===t.RGBA16F||V===t.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function y(R,S){let I;return R?S===null||S===Fr||S===ia?I=t.DEPTH24_STENCIL8:S===wi?I=t.DEPTH32F_STENCIL8:S===na&&(I=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Fr||S===ia?I=t.DEPTH_COMPONENT24:S===wi?I=t.DEPTH_COMPONENT32F:S===na&&(I=t.DEPTH_COMPONENT16),I}function A(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Zn&&R.minFilter!==si?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function C(R){const S=R.target;S.removeEventListener("dispose",C),b(S),S.isVideoTexture&&h.delete(S)}function T(R){const S=R.target;S.removeEventListener("dispose",T),M(S)}function b(R){const S=i.get(R);if(S.__webglInit===void 0)return;const I=R.source,H=d.get(I);if(H){const $=H[S.__cacheKey];$.usedTimes--,$.usedTimes===0&&E(R),Object.keys(H).length===0&&d.delete(I)}i.remove(R)}function E(R){const S=i.get(R);t.deleteTexture(S.__webglTexture);const I=R.source,H=d.get(I);delete H[S.__cacheKey],o.memory.textures--}function M(R){const S=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(S.__webglFramebuffer[H]))for(let $=0;$<S.__webglFramebuffer[H].length;$++)t.deleteFramebuffer(S.__webglFramebuffer[H][$]);else t.deleteFramebuffer(S.__webglFramebuffer[H]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[H])}else{if(Array.isArray(S.__webglFramebuffer))for(let H=0;H<S.__webglFramebuffer.length;H++)t.deleteFramebuffer(S.__webglFramebuffer[H]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let H=0;H<S.__webglColorRenderbuffer.length;H++)S.__webglColorRenderbuffer[H]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[H]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const I=R.textures;for(let H=0,$=I.length;H<$;H++){const V=i.get(I[H]);V.__webglTexture&&(t.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(I[H])}i.remove(R)}let L=0;function F(){L=0}function W(){const R=L;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),L+=1,R}function J(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function z(R,S){const I=i.get(R);if(R.isVideoTexture&&ue(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&I.__version!==R.version){const H=R.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(I,R,S);return}}else R.isExternalTexture&&(I.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,I.__webglTexture,t.TEXTURE0+S)}function j(R,S){const I=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&I.__version!==R.version){te(I,R,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,I.__webglTexture,t.TEXTURE0+S)}function ie(R,S){const I=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&I.__version!==R.version){te(I,R,S);return}n.bindTexture(t.TEXTURE_3D,I.__webglTexture,t.TEXTURE0+S)}function N(R,S){const I=i.get(R);if(R.version>0&&I.__version!==R.version){ae(I,R,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+S)}const ee={[Of]:t.REPEAT,[Ar]:t.CLAMP_TO_EDGE,[kf]:t.MIRRORED_REPEAT},oe={[Zn]:t.NEAREST,[xS]:t.NEAREST_MIPMAP_NEAREST,[Ia]:t.NEAREST_MIPMAP_LINEAR,[si]:t.LINEAR,[Kc]:t.LINEAR_MIPMAP_NEAREST,[Rr]:t.LINEAR_MIPMAP_LINEAR},ve={[ES]:t.NEVER,[bS]:t.ALWAYS,[wS]:t.LESS,[b0]:t.LEQUAL,[TS]:t.EQUAL,[CS]:t.GEQUAL,[AS]:t.GREATER,[RS]:t.NOTEQUAL};function Ne(R,S){if(S.type===wi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===si||S.magFilter===Kc||S.magFilter===Ia||S.magFilter===Rr||S.minFilter===si||S.minFilter===Kc||S.minFilter===Ia||S.minFilter===Rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,ee[S.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,ee[S.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,ee[S.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,oe[S.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,oe[S.minFilter]),S.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,ve[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Zn||S.minFilter!==Ia&&S.minFilter!==Rr||S.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function je(R,S){let I=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",C));const H=S.source;let $=d.get(H);$===void 0&&($={},d.set(H,$));const V=J(S);if(V!==R.__cacheKey){$[V]===void 0&&($[V]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,I=!0),$[V].usedTimes++;const le=$[R.__cacheKey];le!==void 0&&($[R.__cacheKey].usedTimes--,le.usedTimes===0&&E(S)),R.__cacheKey=V,R.__webglTexture=$[V].texture}return I}function Ze(R,S,I){return Math.floor(Math.floor(R/I)/S)}function Ye(R,S,I,H){const V=R.updateRanges;if(V.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,I,H,S.data);else{V.sort((se,xe)=>se.start-xe.start);let le=0;for(let se=1;se<V.length;se++){const xe=V[le],be=V[se],Ee=xe.start+xe.count,_e=Ze(be.start,S.width,4),Ge=Ze(xe.start,S.width,4);be.start<=Ee+1&&_e===Ge&&Ze(be.start+be.count-1,S.width,4)===_e?xe.count=Math.max(xe.count,be.start+be.count-xe.start):(++le,V[le]=be)}V.length=le+1;const ne=t.getParameter(t.UNPACK_ROW_LENGTH),ye=t.getParameter(t.UNPACK_SKIP_PIXELS),de=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let se=0,xe=V.length;se<xe;se++){const be=V[se],Ee=Math.floor(be.start/4),_e=Math.ceil(be.count/4),Ge=Ee%S.width,U=Math.floor(Ee/S.width),pe=_e,Se=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ge),t.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,Ge,U,pe,Se,I,H,S.data)}R.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ne),t.pixelStorei(t.UNPACK_SKIP_PIXELS,ye),t.pixelStorei(t.UNPACK_SKIP_ROWS,de)}}function te(R,S,I){let H=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(H=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(H=t.TEXTURE_3D);const $=je(R,S),V=S.source;n.bindTexture(H,R.__webglTexture,t.TEXTURE0+I);const le=i.get(V);if(V.version!==le.__version||$===!0){n.activeTexture(t.TEXTURE0+I);const ne=st.getPrimaries(st.workingColorSpace),ye=S.colorSpace===Wi?null:st.getPrimaries(S.colorSpace),de=S.colorSpace===Wi||ne===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let se=v(S.image,!1,r.maxTextureSize);se=ze(S,se);const xe=s.convert(S.format,S.colorSpace),be=s.convert(S.type);let Ee=x(S.internalFormat,xe,be,S.colorSpace,S.isVideoTexture);Ne(H,S);let _e;const Ge=S.mipmaps,U=S.isVideoTexture!==!0,pe=le.__version===void 0||$===!0,Se=V.dataReady,Pe=A(S,se);if(S.isDepthTexture)Ee=y(S.format===sa,S.type),pe&&(U?n.texStorage2D(t.TEXTURE_2D,1,Ee,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Ee,se.width,se.height,0,xe,be,null));else if(S.isDataTexture)if(Ge.length>0){U&&pe&&n.texStorage2D(t.TEXTURE_2D,Pe,Ee,Ge[0].width,Ge[0].height);for(let fe=0,re=Ge.length;fe<re;fe++)_e=Ge[fe],U?Se&&n.texSubImage2D(t.TEXTURE_2D,fe,0,0,_e.width,_e.height,xe,be,_e.data):n.texImage2D(t.TEXTURE_2D,fe,Ee,_e.width,_e.height,0,xe,be,_e.data);S.generateMipmaps=!1}else U?(pe&&n.texStorage2D(t.TEXTURE_2D,Pe,Ee,se.width,se.height),Se&&Ye(S,se,xe,be)):n.texImage2D(t.TEXTURE_2D,0,Ee,se.width,se.height,0,xe,be,se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){U&&pe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Pe,Ee,Ge[0].width,Ge[0].height,se.depth);for(let fe=0,re=Ge.length;fe<re;fe++)if(_e=Ge[fe],S.format!==qn)if(xe!==null)if(U){if(Se)if(S.layerUpdates.size>0){const Ue=bm(_e.width,_e.height,S.format,S.type);for(const Le of S.layerUpdates){const nt=_e.data.subarray(Le*Ue/_e.data.BYTES_PER_ELEMENT,(Le+1)*Ue/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,fe,0,0,Le,_e.width,_e.height,1,xe,nt)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,fe,0,0,0,_e.width,_e.height,se.depth,xe,_e.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,fe,Ee,_e.width,_e.height,se.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?Se&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,fe,0,0,0,_e.width,_e.height,se.depth,xe,be,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,fe,Ee,_e.width,_e.height,se.depth,0,xe,be,_e.data)}else{U&&pe&&n.texStorage2D(t.TEXTURE_2D,Pe,Ee,Ge[0].width,Ge[0].height);for(let fe=0,re=Ge.length;fe<re;fe++)_e=Ge[fe],S.format!==qn?xe!==null?U?Se&&n.compressedTexSubImage2D(t.TEXTURE_2D,fe,0,0,_e.width,_e.height,xe,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,fe,Ee,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?Se&&n.texSubImage2D(t.TEXTURE_2D,fe,0,0,_e.width,_e.height,xe,be,_e.data):n.texImage2D(t.TEXTURE_2D,fe,Ee,_e.width,_e.height,0,xe,be,_e.data)}else if(S.isDataArrayTexture)if(U){if(pe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Pe,Ee,se.width,se.height,se.depth),Se)if(S.layerUpdates.size>0){const fe=bm(se.width,se.height,S.format,S.type);for(const re of S.layerUpdates){const Ue=se.data.subarray(re*fe/se.data.BYTES_PER_ELEMENT,(re+1)*fe/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,re,se.width,se.height,1,xe,be,Ue)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,xe,be,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ee,se.width,se.height,se.depth,0,xe,be,se.data);else if(S.isData3DTexture)U?(pe&&n.texStorage3D(t.TEXTURE_3D,Pe,Ee,se.width,se.height,se.depth),Se&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,xe,be,se.data)):n.texImage3D(t.TEXTURE_3D,0,Ee,se.width,se.height,se.depth,0,xe,be,se.data);else if(S.isFramebufferTexture){if(pe)if(U)n.texStorage2D(t.TEXTURE_2D,Pe,Ee,se.width,se.height);else{let fe=se.width,re=se.height;for(let Ue=0;Ue<Pe;Ue++)n.texImage2D(t.TEXTURE_2D,Ue,Ee,fe,re,0,xe,be,null),fe>>=1,re>>=1}}else if(Ge.length>0){if(U&&pe){const fe=Ie(Ge[0]);n.texStorage2D(t.TEXTURE_2D,Pe,Ee,fe.width,fe.height)}for(let fe=0,re=Ge.length;fe<re;fe++)_e=Ge[fe],U?Se&&n.texSubImage2D(t.TEXTURE_2D,fe,0,0,xe,be,_e):n.texImage2D(t.TEXTURE_2D,fe,Ee,xe,be,_e);S.generateMipmaps=!1}else if(U){if(pe){const fe=Ie(se);n.texStorage2D(t.TEXTURE_2D,Pe,Ee,fe.width,fe.height)}Se&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,be,se)}else n.texImage2D(t.TEXTURE_2D,0,Ee,xe,be,se);m(S)&&u(H),le.__version=V.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ae(R,S,I){if(S.image.length!==6)return;const H=je(R,S),$=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+I);const V=i.get($);if($.version!==V.__version||H===!0){n.activeTexture(t.TEXTURE0+I);const le=st.getPrimaries(st.workingColorSpace),ne=S.colorSpace===Wi?null:st.getPrimaries(S.colorSpace),ye=S.colorSpace===Wi||le===ne?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const de=S.isCompressedTexture||S.image[0].isCompressedTexture,se=S.image[0]&&S.image[0].isDataTexture,xe=[];for(let re=0;re<6;re++)!de&&!se?xe[re]=v(S.image[re],!0,r.maxCubemapSize):xe[re]=se?S.image[re].image:S.image[re],xe[re]=ze(S,xe[re]);const be=xe[0],Ee=s.convert(S.format,S.colorSpace),_e=s.convert(S.type),Ge=x(S.internalFormat,Ee,_e,S.colorSpace),U=S.isVideoTexture!==!0,pe=V.__version===void 0||H===!0,Se=$.dataReady;let Pe=A(S,be);Ne(t.TEXTURE_CUBE_MAP,S);let fe;if(de){U&&pe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Pe,Ge,be.width,be.height);for(let re=0;re<6;re++){fe=xe[re].mipmaps;for(let Ue=0;Ue<fe.length;Ue++){const Le=fe[Ue];S.format!==qn?Ee!==null?U?Se&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue,0,0,Le.width,Le.height,Ee,Le.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue,Ge,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?Se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue,0,0,Le.width,Le.height,Ee,_e,Le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue,Ge,Le.width,Le.height,0,Ee,_e,Le.data)}}}else{if(fe=S.mipmaps,U&&pe){fe.length>0&&Pe++;const re=Ie(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Pe,Ge,re.width,re.height)}for(let re=0;re<6;re++)if(se){U?Se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,xe[re].width,xe[re].height,Ee,_e,xe[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ge,xe[re].width,xe[re].height,0,Ee,_e,xe[re].data);for(let Ue=0;Ue<fe.length;Ue++){const nt=fe[Ue].image[re].image;U?Se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue+1,0,0,nt.width,nt.height,Ee,_e,nt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue+1,Ge,nt.width,nt.height,0,Ee,_e,nt.data)}}else{U?Se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ee,_e,xe[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ge,Ee,_e,xe[re]);for(let Ue=0;Ue<fe.length;Ue++){const Le=fe[Ue];U?Se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue+1,0,0,Ee,_e,Le.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue+1,Ge,Ee,_e,Le.image[re])}}}m(S)&&u(t.TEXTURE_CUBE_MAP),V.__version=$.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Ae(R,S,I,H,$,V){const le=s.convert(I.format,I.colorSpace),ne=s.convert(I.type),ye=x(I.internalFormat,le,ne,I.colorSpace),de=i.get(S),se=i.get(I);if(se.__renderTarget=S,!de.__hasExternalTextures){const xe=Math.max(1,S.width>>V),be=Math.max(1,S.height>>V);$===t.TEXTURE_3D||$===t.TEXTURE_2D_ARRAY?n.texImage3D($,V,ye,xe,be,S.depth,0,le,ne,null):n.texImage2D($,V,ye,xe,be,0,le,ne,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),X(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,H,$,se.__webglTexture,0,Z(S)):($===t.TEXTURE_2D||$>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,H,$,se.__webglTexture,V),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ke(R,S,I){if(t.bindRenderbuffer(t.RENDERBUFFER,R),S.depthBuffer){const H=S.depthTexture,$=H&&H.isDepthTexture?H.type:null,V=y(S.stencilBuffer,$),le=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=Z(S);X(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,V,S.width,S.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,V,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,V,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,R)}else{const H=S.textures;for(let $=0;$<H.length;$++){const V=H[$],le=s.convert(V.format,V.colorSpace),ne=s.convert(V.type),ye=x(V.internalFormat,le,ne,V.colorSpace),de=Z(S);I&&X(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,ye,S.width,S.height):X(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,ye,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ye,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ce(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const H=i.get(S.depthTexture);H.__renderTarget=S,(!H.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),z(S.depthTexture,0);const $=H.__webglTexture,V=Z(S);if(S.depthTexture.format===ra)X(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0,V):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0);else if(S.depthTexture.format===sa)X(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0,V):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Te(R){const S=i.get(R),I=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const H=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),H){const $=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,H.removeEventListener("dispose",$)};H.addEventListener("dispose",$),S.__depthDisposeCallback=$}S.__boundDepthTexture=H}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const H=R.texture.mipmaps;H&&H.length>0?Ce(S.__webglFramebuffer[0],R):Ce(S.__webglFramebuffer,R)}else if(I){S.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[H]),S.__webglDepthbuffer[H]===void 0)S.__webglDepthbuffer[H]=t.createRenderbuffer(),ke(S.__webglDepthbuffer[H],R,!1);else{const $=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,V=S.__webglDepthbuffer[H];t.bindRenderbuffer(t.RENDERBUFFER,V),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,V)}}else{const H=R.texture.mipmaps;if(H&&H.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),ke(S.__webglDepthbuffer,R,!1);else{const $=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,V=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,V),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,V)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Oe(R,S,I){const H=i.get(R);S!==void 0&&Ae(H.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),I!==void 0&&Te(R)}function P(R){const S=R.texture,I=i.get(R),H=i.get(S);R.addEventListener("dispose",T);const $=R.textures,V=R.isWebGLCubeRenderTarget===!0,le=$.length>1;if(le||(H.__webglTexture===void 0&&(H.__webglTexture=t.createTexture()),H.__version=S.version,o.memory.textures++),V){I.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer[ne]=[];for(let ye=0;ye<S.mipmaps.length;ye++)I.__webglFramebuffer[ne][ye]=t.createFramebuffer()}else I.__webglFramebuffer[ne]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer=[];for(let ne=0;ne<S.mipmaps.length;ne++)I.__webglFramebuffer[ne]=t.createFramebuffer()}else I.__webglFramebuffer=t.createFramebuffer();if(le)for(let ne=0,ye=$.length;ne<ye;ne++){const de=i.get($[ne]);de.__webglTexture===void 0&&(de.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&X(R)===!1){I.__webglMultisampledFramebuffer=t.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ne=0;ne<$.length;ne++){const ye=$[ne];I.__webglColorRenderbuffer[ne]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,I.__webglColorRenderbuffer[ne]);const de=s.convert(ye.format,ye.colorSpace),se=s.convert(ye.type),xe=x(ye.internalFormat,de,se,ye.colorSpace,R.isXRRenderTarget===!0),be=Z(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,be,xe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ne,t.RENDERBUFFER,I.__webglColorRenderbuffer[ne])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(I.__webglDepthRenderbuffer=t.createRenderbuffer(),ke(I.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(V){n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture),Ne(t.TEXTURE_CUBE_MAP,S);for(let ne=0;ne<6;ne++)if(S.mipmaps&&S.mipmaps.length>0)for(let ye=0;ye<S.mipmaps.length;ye++)Ae(I.__webglFramebuffer[ne][ye],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye);else Ae(I.__webglFramebuffer[ne],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);m(S)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(le){for(let ne=0,ye=$.length;ne<ye;ne++){const de=$[ne],se=i.get(de);let xe=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(xe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(xe,se.__webglTexture),Ne(xe,de),Ae(I.__webglFramebuffer,R,de,t.COLOR_ATTACHMENT0+ne,xe,0),m(de)&&u(xe)}n.unbindTexture()}else{let ne=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ne=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ne,H.__webglTexture),Ne(ne,S),S.mipmaps&&S.mipmaps.length>0)for(let ye=0;ye<S.mipmaps.length;ye++)Ae(I.__webglFramebuffer[ye],R,S,t.COLOR_ATTACHMENT0,ne,ye);else Ae(I.__webglFramebuffer,R,S,t.COLOR_ATTACHMENT0,ne,0);m(S)&&u(ne),n.unbindTexture()}R.depthBuffer&&Te(R)}function B(R){const S=R.textures;for(let I=0,H=S.length;I<H;I++){const $=S[I];if(m($)){const V=g(R),le=i.get($).__webglTexture;n.bindTexture(V,le),u(V),n.unbindTexture()}}}const G=[],K=[];function Q(R){if(R.samples>0){if(X(R)===!1){const S=R.textures,I=R.width,H=R.height;let $=t.COLOR_BUFFER_BIT;const V=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(R),ne=S.length>1;if(ne)for(let de=0;de<S.length;de++)n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);const ye=R.texture.mipmaps;ye&&ye.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let de=0;de<S.length;de++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=t.STENCIL_BUFFER_BIT)),ne){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[de]);const se=i.get(S[de]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,se,0)}t.blitFramebuffer(0,0,I,H,0,0,I,H,$,t.NEAREST),l===!0&&(G.length=0,K.length=0,G.push(t.COLOR_ATTACHMENT0+de),R.depthBuffer&&R.resolveDepthBuffer===!1&&(G.push(V),K.push(V),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,K)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,G))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ne)for(let de=0;de<S.length;de++){n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,le.__webglColorRenderbuffer[de]);const se=i.get(S[de]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function Z(R){return Math.min(r.maxSamples,R.samples)}function X(R){const S=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ue(R){const S=o.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function ze(R,S){const I=R.colorSpace,H=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||I!==Gs&&I!==Wi&&(st.getTransfer(I)===lt?(H!==qn||$!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),S}function Ie(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=F,this.setTexture2D=z,this.setTexture2DArray=j,this.setTexture3D=ie,this.setTextureCube=N,this.rebindTextures=Oe,this.setupRenderTarget=P,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=X}function O2(t,e){function n(i,r=Wi){let s;const o=st.getTransfer(r);if(i===ui)return t.UNSIGNED_BYTE;if(i===dd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===pd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===M0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===E0)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===y0)return t.BYTE;if(i===S0)return t.SHORT;if(i===na)return t.UNSIGNED_SHORT;if(i===hd)return t.INT;if(i===Fr)return t.UNSIGNED_INT;if(i===wi)return t.FLOAT;if(i===_a)return t.HALF_FLOAT;if(i===w0)return t.ALPHA;if(i===T0)return t.RGB;if(i===qn)return t.RGBA;if(i===ra)return t.DEPTH_COMPONENT;if(i===sa)return t.DEPTH_STENCIL;if(i===A0)return t.RED;if(i===md)return t.RED_INTEGER;if(i===R0)return t.RG;if(i===_d)return t.RG_INTEGER;if(i===gd)return t.RGBA_INTEGER;if(i===yl||i===Sl||i===Ml||i===El)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===yl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===El)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===yl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Sl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ml)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===El)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===zf||i===Bf||i===Hf||i===Vf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===zf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gf||i===Wf||i===Xf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Gf||i===Wf)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Xf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===jf||i===Yf||i===qf||i===$f||i===Kf||i===Zf||i===Jf||i===Qf||i===eh||i===th||i===nh||i===ih||i===rh||i===sh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===jf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===qf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$f)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Kf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===eh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===th)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ih)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===oh||i===ah||i===lh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===oh)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ah)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ch||i===uh||i===fh||i===hh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ch)return s.COMPRESSED_RED_RGTC1_EXT;if(i===uh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ia?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const k2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class B2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new H0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new or({vertexShader:k2,fragmentShader:z2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Tt(new Pr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class H2 extends Gr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,p=null,_=null;const v=typeof XRWebGLBinding<"u",m=new B2,u={},g=n.getContextAttributes();let x=null,y=null;const A=[],C=[],T=new ge;let b=null;const E=new yn;E.viewport=new ut;const M=new yn;M.viewport=new ut;const L=[E,M],F=new aM;let W=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ae=A[te];return ae===void 0&&(ae=new gu,A[te]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(te){let ae=A[te];return ae===void 0&&(ae=new gu,A[te]=ae),ae.getGripSpace()},this.getHand=function(te){let ae=A[te];return ae===void 0&&(ae=new gu,A[te]=ae),ae.getHandSpace()};function z(te){const ae=C.indexOf(te.inputSource);if(ae===-1)return;const Ae=A[ae];Ae!==void 0&&(Ae.update(te.inputSource,te.frame,c||o),Ae.dispatchEvent({type:te.type,data:te.inputSource}))}function j(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",ie);for(let te=0;te<A.length;te++){const ae=C[te];ae!==null&&(C[te]=null,A[te].disconnect(ae))}W=null,J=null,m.reset();for(const te in u)delete u[te];e.setRenderTarget(x),p=null,d=null,f=null,r=null,y=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",j),r.addEventListener("inputsourceschange",ie),g.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(T),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,ke=null,Ce=null;g.depth&&(Ce=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ae=g.stencil?sa:ra,ke=g.stencil?ia:Fr);const Te={colorFormat:n.RGBA8,depthFormat:Ce,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Te),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new kr(d.textureWidth,d.textureHeight,{format:qn,type:ui,depthTexture:new B0(d.textureWidth,d.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Ae={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Ae),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new kr(p.framebufferWidth,p.framebufferHeight,{format:qn,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ye.setContext(r),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(te){for(let ae=0;ae<te.removed.length;ae++){const Ae=te.removed[ae],ke=C.indexOf(Ae);ke>=0&&(C[ke]=null,A[ke].disconnect(Ae))}for(let ae=0;ae<te.added.length;ae++){const Ae=te.added[ae];let ke=C.indexOf(Ae);if(ke===-1){for(let Te=0;Te<A.length;Te++)if(Te>=C.length){C.push(Ae),ke=Te;break}else if(C[Te]===null){C[Te]=Ae,ke=Te;break}if(ke===-1)break}const Ce=A[ke];Ce&&Ce.connect(Ae)}}const N=new D,ee=new D;function oe(te,ae,Ae){N.setFromMatrixPosition(ae.matrixWorld),ee.setFromMatrixPosition(Ae.matrixWorld);const ke=N.distanceTo(ee),Ce=ae.projectionMatrix.elements,Te=Ae.projectionMatrix.elements,Oe=Ce[14]/(Ce[10]-1),P=Ce[14]/(Ce[10]+1),B=(Ce[9]+1)/Ce[5],G=(Ce[9]-1)/Ce[5],K=(Ce[8]-1)/Ce[0],Q=(Te[8]+1)/Te[0],Z=Oe*K,X=Oe*Q,ue=ke/(-K+Q),ze=ue*-K;if(ae.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ze),te.translateZ(ue),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ce[10]===-1)te.projectionMatrix.copy(ae.projectionMatrix),te.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Ie=Oe+ue,R=P+ue,S=Z-ze,I=X+(ke-ze),H=B*P/R*Ie,$=G*P/R*Ie;te.projectionMatrix.makePerspective(S,I,H,$,Ie,R),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function ve(te,ae){ae===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ae.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let ae=te.near,Ae=te.far;m.texture!==null&&(m.depthNear>0&&(ae=m.depthNear),m.depthFar>0&&(Ae=m.depthFar)),F.near=M.near=E.near=ae,F.far=M.far=E.far=Ae,(W!==F.near||J!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),W=F.near,J=F.far),F.layers.mask=te.layers.mask|6,E.layers.mask=F.layers.mask&3,M.layers.mask=F.layers.mask&5;const ke=te.parent,Ce=F.cameras;ve(F,ke);for(let Te=0;Te<Ce.length;Te++)ve(Ce[Te],ke);Ce.length===2?oe(F,E,M):F.projectionMatrix.copy(E.projectionMatrix),Ne(te,F,ke)};function Ne(te,ae,Ae){Ae===null?te.matrix.copy(ae.matrixWorld):(te.matrix.copy(Ae.matrixWorld),te.matrix.invert(),te.matrix.multiply(ae.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ae.projectionMatrix),te.projectionMatrixInverse.copy(ae.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=oa*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(te){return u[te]};let je=null;function Ze(te,ae){if(h=ae.getViewerPose(c||o),_=ae,h!==null){const Ae=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let ke=!1;Ae.length!==F.cameras.length&&(F.cameras.length=0,ke=!0);for(let P=0;P<Ae.length;P++){const B=Ae[P];let G=null;if(p!==null)G=p.getViewport(B);else{const Q=f.getViewSubImage(d,B);G=Q.viewport,P===0&&(e.setRenderTargetTextures(y,Q.colorTexture,Q.depthStencilTexture),e.setRenderTarget(y))}let K=L[P];K===void 0&&(K=new yn,K.layers.enable(P),K.viewport=new ut,L[P]=K),K.matrix.fromArray(B.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(B.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(G.x,G.y,G.width,G.height),P===0&&(F.matrix.copy(K.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ke===!0&&F.cameras.push(K)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const P=f.getDepthInformation(Ae[0]);P&&P.isValid&&P.texture&&m.init(P,r.renderState)}if(Ce&&Ce.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let P=0;P<Ae.length;P++){const B=Ae[P].camera;if(B){let G=u[B];G||(G=new H0,u[B]=G);const K=f.getCameraImage(B);G.sourceTexture=K}}}}for(let Ae=0;Ae<A.length;Ae++){const ke=C[Ae],Ce=A[Ae];ke!==null&&Ce!==void 0&&Ce.update(ke,ae,c||o)}je&&je(te,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),_=null}const Ye=new ev;Ye.setAnimationLoop(Ze),this.setAnimationLoop=function(te){je=te},this.dispose=function(){}}}const gr=new fi,V2=new gt;function G2(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,F0(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,g,x,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),f(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,y)):u.isMeshMatcapMaterial?(s(m,u),_(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),v(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,g,x):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===hn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===hn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const g=e.get(u),x=g.envMap,y=g.envMapRotation;x&&(m.envMap.value=x,gr.copy(y),gr.x*=-1,gr.y*=-1,gr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),m.envMapRotation.value.setFromMatrix4(V2.makeRotationFromEuler(gr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,x){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=x*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===hn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){const g=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function W2(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,x){const y=x.program;i.uniformBlockBinding(g,y)}function c(g,x){let y=r[g.id];y===void 0&&(_(g),y=h(g),r[g.id]=y,g.addEventListener("dispose",m));const A=x.program;i.updateUBOMapping(g,A);const C=e.render.frame;s[g.id]!==C&&(d(g),s[g.id]=C)}function h(g){const x=f();g.__bindingPointIndex=x;const y=t.createBuffer(),A=g.__size,C=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,A,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,y),y}function f(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const x=r[g.id],y=g.uniforms,A=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let C=0,T=y.length;C<T;C++){const b=Array.isArray(y[C])?y[C]:[y[C]];for(let E=0,M=b.length;E<M;E++){const L=b[E];if(p(L,C,E,A)===!0){const F=L.__offset,W=Array.isArray(L.value)?L.value:[L.value];let J=0;for(let z=0;z<W.length;z++){const j=W[z],ie=v(j);typeof j=="number"||typeof j=="boolean"?(L.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,F+J,L.__data)):j.isMatrix3?(L.__data[0]=j.elements[0],L.__data[1]=j.elements[1],L.__data[2]=j.elements[2],L.__data[3]=0,L.__data[4]=j.elements[3],L.__data[5]=j.elements[4],L.__data[6]=j.elements[5],L.__data[7]=0,L.__data[8]=j.elements[6],L.__data[9]=j.elements[7],L.__data[10]=j.elements[8],L.__data[11]=0):(j.toArray(L.__data,J),J+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,x,y,A){const C=g.value,T=x+"_"+y;if(A[T]===void 0)return typeof C=="number"||typeof C=="boolean"?A[T]=C:A[T]=C.clone(),!0;{const b=A[T];if(typeof C=="number"||typeof C=="boolean"){if(b!==C)return A[T]=C,!0}else if(b.equals(C)===!1)return b.copy(C),!0}return!1}function _(g){const x=g.uniforms;let y=0;const A=16;for(let T=0,b=x.length;T<b;T++){const E=Array.isArray(x[T])?x[T]:[x[T]];for(let M=0,L=E.length;M<L;M++){const F=E[M],W=Array.isArray(F.value)?F.value:[F.value];for(let J=0,z=W.length;J<z;J++){const j=W[J],ie=v(j),N=y%A,ee=N%ie.boundary,oe=N+ee;y+=ee,oe!==0&&A-oe<ie.storage&&(y+=A-oe),F.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=ie.storage}}}const C=y%A;return C>0&&(y+=A-C),g.__size=y,g.__cache={},this}function v(g){const x={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(x.boundary=4,x.storage=4):g.isVector2?(x.boundary=8,x.storage=8):g.isVector3||g.isColor?(x.boundary=16,x.storage=12):g.isVector4?(x.boundary=16,x.storage=16):g.isMatrix3?(x.boundary=48,x.storage=48):g.isMatrix4?(x.boundary=64,x.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),x}function m(g){const x=g.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class X2{constructor(e={}){const{canvas:n=jS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,u=null;const g=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=nr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let A=!1;this._outputColorSpace=Pn;let C=0,T=0,b=null,E=-1,M=null;const L=new ut,F=new ut;let W=null;const J=new et(0);let z=0,j=n.width,ie=n.height,N=1,ee=null,oe=null;const ve=new ut(0,0,j,ie),Ne=new ut(0,0,j,ie);let je=!1;const Ze=new Md;let Ye=!1,te=!1;const ae=new gt,Ae=new D,ke=new ut,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Te=!1;function Oe(){return b===null?N:1}let P=i;function B(w,O){return n.getContext(w,O)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${fd}`),n.addEventListener("webglcontextlost",Se,!1),n.addEventListener("webglcontextrestored",Pe,!1),n.addEventListener("webglcontextcreationerror",fe,!1),P===null){const O="webgl2";if(P=B(O,w),P===null)throw B(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let G,K,Q,Z,X,ue,ze,Ie,R,S,I,H,$,V,le,ne,ye,de,se,xe,be,Ee,_e,Ge;function U(){G=new tT(P),G.init(),Ee=new O2(P,G),K=new qw(P,G,e,Ee),Q=new U2(P,G),K.reversedDepthBuffer&&d&&Q.buffers.depth.setReversed(!0),Z=new rT(P),X=new M2,ue=new F2(P,G,Q,X,K,Ee,Z),ze=new Kw(y),Ie=new eT(y),R=new uM(P),_e=new jw(P,R),S=new nT(P,R,Z,_e),I=new oT(P,S,R,Z),se=new sT(P,K,ue),ne=new $w(X),H=new S2(y,ze,Ie,G,K,_e,ne),$=new G2(y,X),V=new w2,le=new P2(G),de=new Xw(y,ze,Ie,Q,I,p,l),ye=new N2(y,I,K),Ge=new W2(P,Z,K,Q),xe=new Yw(P,G,Z),be=new iT(P,G,Z),Z.programs=H.programs,y.capabilities=K,y.extensions=G,y.properties=X,y.renderLists=V,y.shadowMap=ye,y.state=Q,y.info=Z}U();const pe=new H2(y,P);this.xr=pe,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const w=G.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=G.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(w){w!==void 0&&(N=w,this.setSize(j,ie,!1))},this.getSize=function(w){return w.set(j,ie)},this.setSize=function(w,O,Y=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=w,ie=O,n.width=Math.floor(w*N),n.height=Math.floor(O*N),Y===!0&&(n.style.width=w+"px",n.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(j*N,ie*N).floor()},this.setDrawingBufferSize=function(w,O,Y){j=w,ie=O,N=Y,n.width=Math.floor(w*Y),n.height=Math.floor(O*Y),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(ve)},this.setViewport=function(w,O,Y,q){w.isVector4?ve.set(w.x,w.y,w.z,w.w):ve.set(w,O,Y,q),Q.viewport(L.copy(ve).multiplyScalar(N).round())},this.getScissor=function(w){return w.copy(Ne)},this.setScissor=function(w,O,Y,q){w.isVector4?Ne.set(w.x,w.y,w.z,w.w):Ne.set(w,O,Y,q),Q.scissor(F.copy(Ne).multiplyScalar(N).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(w){Q.setScissorTest(je=w)},this.setOpaqueSort=function(w){ee=w},this.setTransparentSort=function(w){oe=w},this.getClearColor=function(w){return w.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor(...arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,Y=!0){let q=0;if(w){let k=!1;if(b!==null){const me=b.texture.format;k=me===gd||me===_d||me===md}if(k){const me=b.texture.type,we=me===ui||me===Fr||me===na||me===ia||me===dd||me===pd,Fe=de.getClearColor(),De=de.getClearAlpha(),We=Fe.r,Xe=Fe.g,Be=Fe.b;we?(_[0]=We,_[1]=Xe,_[2]=Be,_[3]=De,P.clearBufferuiv(P.COLOR,0,_)):(v[0]=We,v[1]=Xe,v[2]=Be,v[3]=De,P.clearBufferiv(P.COLOR,0,v))}else q|=P.COLOR_BUFFER_BIT}O&&(q|=P.DEPTH_BUFFER_BIT),Y&&(q|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Se,!1),n.removeEventListener("webglcontextrestored",Pe,!1),n.removeEventListener("webglcontextcreationerror",fe,!1),de.dispose(),V.dispose(),le.dispose(),X.dispose(),ze.dispose(),Ie.dispose(),I.dispose(),_e.dispose(),Ge.dispose(),H.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",pn),pe.removeEventListener("sessionend",Qs),Gt.stop()};function Se(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const w=Z.autoReset,O=ye.enabled,Y=ye.autoUpdate,q=ye.needsUpdate,k=ye.type;U(),Z.autoReset=w,ye.enabled=O,ye.autoUpdate=Y,ye.needsUpdate=q,ye.type=k}function fe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function re(w){const O=w.target;O.removeEventListener("dispose",re),Ue(O)}function Ue(w){Le(w),X.remove(w)}function Le(w){const O=X.get(w).programs;O!==void 0&&(O.forEach(function(Y){H.releaseProgram(Y)}),w.isShaderMaterial&&H.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,Y,q,k,me){O===null&&(O=Ce);const we=k.isMesh&&k.matrixWorld.determinant()<0,Fe=ov(w,O,Y,q,k);Q.setMaterial(q,we);let De=Y.index,We=1;if(q.wireframe===!0){if(De=S.getWireframeAttribute(Y),De===void 0)return;We=2}const Xe=Y.drawRange,Be=Y.attributes.position;let Qe=Xe.start*We,at=(Xe.start+Xe.count)*We;me!==null&&(Qe=Math.max(Qe,me.start*We),at=Math.min(at,(me.start+me.count)*We)),De!==null?(Qe=Math.max(Qe,0),at=Math.min(at,De.count)):Be!=null&&(Qe=Math.max(Qe,0),at=Math.min(at,Be.count));const wt=at-Qe;if(wt<0||wt===1/0)return;_e.setup(k,q,Fe,Y,De);let dt,ft=xe;if(De!==null&&(dt=R.get(De),ft=be,ft.setIndex(dt)),k.isMesh)q.wireframe===!0?(Q.setLineWidth(q.wireframeLinewidth*Oe()),ft.setMode(P.LINES)):ft.setMode(P.TRIANGLES);else if(k.isLine){let He=q.linewidth;He===void 0&&(He=1),Q.setLineWidth(He*Oe()),k.isLineSegments?ft.setMode(P.LINES):k.isLineLoop?ft.setMode(P.LINE_LOOP):ft.setMode(P.LINE_STRIP)}else k.isPoints?ft.setMode(P.POINTS):k.isSprite&&ft.setMode(P.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)aa("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(G.get("WEBGL_multi_draw"))ft.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const He=k._multiDrawStarts,vt=k._multiDrawCounts,rt=k._multiDrawCount,mn=De?R.get(De).bytesPerElement:1,jr=X.get(q).currentProgram.getUniforms();for(let _n=0;_n<rt;_n++)jr.setValue(P,"_gl_DrawID",_n),ft.render(He[_n]/mn,vt[_n])}else if(k.isInstancedMesh)ft.renderInstances(Qe,wt,k.count);else if(Y.isInstancedBufferGeometry){const He=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,vt=Math.min(Y.instanceCount,He);ft.renderInstances(Qe,wt,vt)}else ft.render(Qe,wt)};function nt(w,O,Y){w.transparent===!0&&w.side===Nn&&w.forceSinglePass===!1?(w.side=hn,w.needsUpdate=!0,ur(w,O,Y),w.side=sr,w.needsUpdate=!0,ur(w,O,Y),w.side=Nn):ur(w,O,Y)}this.compile=function(w,O,Y=null){Y===null&&(Y=w),u=le.get(Y),u.init(O),x.push(u),Y.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(u.pushLight(k),k.castShadow&&u.pushShadow(k))}),w!==Y&&w.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(u.pushLight(k),k.castShadow&&u.pushShadow(k))}),u.setupLights();const q=new Set;return w.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const me=k.material;if(me)if(Array.isArray(me))for(let we=0;we<me.length;we++){const Fe=me[we];nt(Fe,Y,k),q.add(Fe)}else nt(me,Y,k),q.add(me)}),u=x.pop(),q},this.compileAsync=function(w,O,Y=null){const q=this.compile(w,O,Y);return new Promise(k=>{function me(){if(q.forEach(function(we){X.get(we).currentProgram.isReady()&&q.delete(we)}),q.size===0){k(w);return}setTimeout(me,10)}G.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let it=null;function kn(w){it&&it(w)}function pn(){Gt.stop()}function Qs(){Gt.start()}const Gt=new ev;Gt.setAnimationLoop(kn),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(w){it=w,pe.setAnimationLoop(w),w===null?Gt.stop():Gt.start()},pe.addEventListener("sessionstart",pn),pe.addEventListener("sessionend",Qs),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(O),O=pe.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,O,b),u=le.get(w,x.length),u.init(O),x.push(u),ae.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ze.setFromProjectionMatrix(ae,oi,O.reversedDepth),te=this.localClippingEnabled,Ye=ne.init(this.clippingPlanes,te),m=V.get(w,g.length),m.init(),g.push(m),pe.enabled===!0&&pe.isPresenting===!0){const me=y.xr.getDepthSensingMesh();me!==null&&Xr(me,O,-1/0,y.sortObjects)}Xr(w,O,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ee,oe),Te=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,Te&&de.addToRenderList(m,w),this.info.render.frame++,Ye===!0&&ne.beginShadows();const Y=u.state.shadowsArray;ye.render(Y,w,O),Ye===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,k=m.transmissive;if(u.setupLights(),O.isArrayCamera){const me=O.cameras;if(k.length>0)for(let we=0,Fe=me.length;we<Fe;we++){const De=me[we];to(q,k,w,De)}Te&&de.render(w);for(let we=0,Fe=me.length;we<Fe;we++){const De=me[we];eo(m,w,De,De.viewport)}}else k.length>0&&to(q,k,w,O),Te&&de.render(w),eo(m,w,O);b!==null&&T===0&&(ue.updateMultisampleRenderTarget(b),ue.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(y,w,O),_e.resetDefaultState(),E=-1,M=null,x.pop(),x.length>0?(u=x[x.length-1],Ye===!0&&ne.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function Xr(w,O,Y,q){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)u.pushLight(w),w.castShadow&&u.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ze.intersectsSprite(w)){q&&ke.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ae);const we=I.update(w),Fe=w.material;Fe.visible&&m.push(w,we,Fe,Y,ke.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ze.intersectsObject(w))){const we=I.update(w),Fe=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ke.copy(w.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),ke.copy(we.boundingSphere.center)),ke.applyMatrix4(w.matrixWorld).applyMatrix4(ae)),Array.isArray(Fe)){const De=we.groups;for(let We=0,Xe=De.length;We<Xe;We++){const Be=De[We],Qe=Fe[Be.materialIndex];Qe&&Qe.visible&&m.push(w,we,Qe,Y,ke.z,Be)}}else Fe.visible&&m.push(w,we,Fe,Y,ke.z,null)}}const me=w.children;for(let we=0,Fe=me.length;we<Fe;we++)Xr(me[we],O,Y,q)}function eo(w,O,Y,q){const k=w.opaque,me=w.transmissive,we=w.transparent;u.setupLightsView(Y),Ye===!0&&ne.setGlobalState(y.clippingPlanes,Y),q&&Q.viewport(L.copy(q)),k.length>0&&An(k,O,Y),me.length>0&&An(me,O,Y),we.length>0&&An(we,O,Y),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function to(w,O,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[q.id]===void 0&&(u.state.transmissionRenderTarget[q.id]=new kr(1,1,{generateMipmaps:!0,type:G.has("EXT_color_buffer_half_float")||G.has("EXT_color_buffer_float")?_a:ui,minFilter:Rr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const me=u.state.transmissionRenderTarget[q.id],we=q.viewport||L;me.setSize(we.z*y.transmissionResolutionScale,we.w*y.transmissionResolutionScale);const Fe=y.getRenderTarget(),De=y.getActiveCubeFace(),We=y.getActiveMipmapLevel();y.setRenderTarget(me),y.getClearColor(J),z=y.getClearAlpha(),z<1&&y.setClearColor(16777215,.5),y.clear(),Te&&de.render(Y);const Xe=y.toneMapping;y.toneMapping=nr;const Be=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),u.setupLightsView(q),Ye===!0&&ne.setGlobalState(y.clippingPlanes,q),An(w,Y,q),ue.updateMultisampleRenderTarget(me),ue.updateRenderTargetMipmap(me),G.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let at=0,wt=O.length;at<wt;at++){const dt=O[at],ft=dt.object,He=dt.geometry,vt=dt.material,rt=dt.group;if(vt.side===Nn&&ft.layers.test(q.layers)){const mn=vt.side;vt.side=hn,vt.needsUpdate=!0,no(ft,Y,q,He,vt,rt),vt.side=mn,vt.needsUpdate=!0,Qe=!0}}Qe===!0&&(ue.updateMultisampleRenderTarget(me),ue.updateRenderTargetMipmap(me))}y.setRenderTarget(Fe,De,We),y.setClearColor(J,z),Be!==void 0&&(q.viewport=Be),y.toneMapping=Xe}function An(w,O,Y){const q=O.isScene===!0?O.overrideMaterial:null;for(let k=0,me=w.length;k<me;k++){const we=w[k],Fe=we.object,De=we.geometry,We=we.group;let Xe=we.material;Xe.allowOverride===!0&&q!==null&&(Xe=q),Fe.layers.test(Y.layers)&&no(Fe,O,Y,De,Xe,We)}}function no(w,O,Y,q,k,me){w.onBeforeRender(y,O,Y,q,k,me),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(y,O,Y,q,w,me),k.transparent===!0&&k.side===Nn&&k.forceSinglePass===!1?(k.side=hn,k.needsUpdate=!0,y.renderBufferDirect(Y,O,q,k,w,me),k.side=sr,k.needsUpdate=!0,y.renderBufferDirect(Y,O,q,k,w,me),k.side=Nn):y.renderBufferDirect(Y,O,q,k,w,me),w.onAfterRender(y,O,Y,q,k,me)}function ur(w,O,Y){O.isScene!==!0&&(O=Ce);const q=X.get(w),k=u.state.lights,me=u.state.shadowsArray,we=k.state.version,Fe=H.getParameters(w,k.state,me,O,Y),De=H.getProgramCacheKey(Fe);let We=q.programs;q.environment=w.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(w.isMeshStandardMaterial?Ie:ze).get(w.envMap||q.environment),q.envMapRotation=q.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,We===void 0&&(w.addEventListener("dispose",re),We=new Map,q.programs=We);let Xe=We.get(De);if(Xe!==void 0){if(q.currentProgram===Xe&&q.lightsStateVersion===we)return Dd(w,Fe),Xe}else Fe.uniforms=H.getUniforms(w),w.onBeforeCompile(Fe,y),Xe=H.acquireProgram(Fe,De),We.set(De,Xe),q.uniforms=Fe.uniforms;const Be=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Be.clippingPlanes=ne.uniform),Dd(w,Fe),q.needsLights=lv(w),q.lightsStateVersion=we,q.needsLights&&(Be.ambientLightColor.value=k.state.ambient,Be.lightProbe.value=k.state.probe,Be.directionalLights.value=k.state.directional,Be.directionalLightShadows.value=k.state.directionalShadow,Be.spotLights.value=k.state.spot,Be.spotLightShadows.value=k.state.spotShadow,Be.rectAreaLights.value=k.state.rectArea,Be.ltc_1.value=k.state.rectAreaLTC1,Be.ltc_2.value=k.state.rectAreaLTC2,Be.pointLights.value=k.state.point,Be.pointLightShadows.value=k.state.pointShadow,Be.hemisphereLights.value=k.state.hemi,Be.directionalShadowMap.value=k.state.directionalShadowMap,Be.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Be.spotShadowMap.value=k.state.spotShadowMap,Be.spotLightMatrix.value=k.state.spotLightMatrix,Be.spotLightMap.value=k.state.spotLightMap,Be.pointShadowMap.value=k.state.pointShadowMap,Be.pointShadowMatrix.value=k.state.pointShadowMatrix),q.currentProgram=Xe,q.uniformsList=null,Xe}function di(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=Tl.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Dd(w,O){const Y=X.get(w);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function ov(w,O,Y,q,k){O.isScene!==!0&&(O=Ce),ue.resetTextureUnits();const me=O.fog,we=q.isMeshStandardMaterial?O.environment:null,Fe=b===null?y.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Gs,De=(q.isMeshStandardMaterial?Ie:ze).get(q.envMap||we),We=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Xe=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Be=!!Y.morphAttributes.position,Qe=!!Y.morphAttributes.normal,at=!!Y.morphAttributes.color;let wt=nr;q.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(wt=y.toneMapping);const dt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ft=dt!==void 0?dt.length:0,He=X.get(q),vt=u.state.lights;if(Ye===!0&&(te===!0||w!==M)){const Kt=w===M&&q.id===E;ne.setState(q,w,Kt)}let rt=!1;q.version===He.__version?(He.needsLights&&He.lightsStateVersion!==vt.state.version||He.outputColorSpace!==Fe||k.isBatchedMesh&&He.batching===!1||!k.isBatchedMesh&&He.batching===!0||k.isBatchedMesh&&He.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&He.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&He.instancing===!1||!k.isInstancedMesh&&He.instancing===!0||k.isSkinnedMesh&&He.skinning===!1||!k.isSkinnedMesh&&He.skinning===!0||k.isInstancedMesh&&He.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&He.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&He.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&He.instancingMorph===!1&&k.morphTexture!==null||He.envMap!==De||q.fog===!0&&He.fog!==me||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ne.numPlanes||He.numIntersection!==ne.numIntersection)||He.vertexAlphas!==We||He.vertexTangents!==Xe||He.morphTargets!==Be||He.morphNormals!==Qe||He.morphColors!==at||He.toneMapping!==wt||He.morphTargetsCount!==ft)&&(rt=!0):(rt=!0,He.__version=q.version);let mn=He.currentProgram;rt===!0&&(mn=ur(q,O,k));let jr=!1,_n=!1,io=!1;const xt=mn.getUniforms(),Rn=He.uniforms;if(Q.useProgram(mn.program)&&(jr=!0,_n=!0,io=!0),q.id!==E&&(E=q.id,_n=!0),jr||M!==w){Q.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),xt.setValue(P,"projectionMatrix",w.projectionMatrix),xt.setValue(P,"viewMatrix",w.matrixWorldInverse);const sn=xt.map.cameraPosition;sn!==void 0&&sn.setValue(P,Ae.setFromMatrixPosition(w.matrixWorld)),K.logarithmicDepthBuffer&&xt.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&xt.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,_n=!0,io=!0)}if(k.isSkinnedMesh){xt.setOptional(P,k,"bindMatrix"),xt.setOptional(P,k,"bindMatrixInverse");const Kt=k.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),xt.setValue(P,"boneTexture",Kt.boneTexture,ue))}k.isBatchedMesh&&(xt.setOptional(P,k,"batchingTexture"),xt.setValue(P,"batchingTexture",k._matricesTexture,ue),xt.setOptional(P,k,"batchingIdTexture"),xt.setValue(P,"batchingIdTexture",k._indirectTexture,ue),xt.setOptional(P,k,"batchingColorTexture"),k._colorsTexture!==null&&xt.setValue(P,"batchingColorTexture",k._colorsTexture,ue));const Cn=Y.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&se.update(k,Y,mn),(_n||He.receiveShadow!==k.receiveShadow)&&(He.receiveShadow=k.receiveShadow,xt.setValue(P,"receiveShadow",k.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Rn.envMap.value=De,Rn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(Rn.envMapIntensity.value=O.environmentIntensity),_n&&(xt.setValue(P,"toneMappingExposure",y.toneMappingExposure),He.needsLights&&av(Rn,io),me&&q.fog===!0&&$.refreshFogUniforms(Rn,me),$.refreshMaterialUniforms(Rn,q,N,ie,u.state.transmissionRenderTarget[w.id]),Tl.upload(P,di(He),Rn,ue)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Tl.upload(P,di(He),Rn,ue),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&xt.setValue(P,"center",k.center),xt.setValue(P,"modelViewMatrix",k.modelViewMatrix),xt.setValue(P,"normalMatrix",k.normalMatrix),xt.setValue(P,"modelMatrix",k.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Kt=q.uniformsGroups;for(let sn=0,Ec=Kt.length;sn<Ec;sn++){const fr=Kt[sn];Ge.update(fr,mn),Ge.bind(fr,mn)}}return mn}function av(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function lv(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,O,Y){const q=X.get(w);q.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),X.get(w.texture).__webglTexture=O,X.get(w.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Y,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){const Y=X.get(w);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0};const cv=P.createFramebuffer();this.setRenderTarget=function(w,O=0,Y=0){b=w,C=O,T=Y;let q=!0,k=null,me=!1,we=!1;if(w){const De=X.get(w);if(De.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(P.FRAMEBUFFER,null),q=!1;else if(De.__webglFramebuffer===void 0)ue.setupRenderTarget(w);else if(De.__hasExternalTextures)ue.rebindTextures(w,X.get(w.texture).__webglTexture,X.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Be=w.depthTexture;if(De.__boundDepthTexture!==Be){if(Be!==null&&X.has(Be)&&(w.width!==Be.image.width||w.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(w)}}const We=w.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(we=!0);const Xe=X.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Xe[O])?k=Xe[O][Y]:k=Xe[O],me=!0):w.samples>0&&ue.useMultisampledRTT(w)===!1?k=X.get(w).__webglMultisampledFramebuffer:Array.isArray(Xe)?k=Xe[Y]:k=Xe,L.copy(w.viewport),F.copy(w.scissor),W=w.scissorTest}else L.copy(ve).multiplyScalar(N).floor(),F.copy(Ne).multiplyScalar(N).floor(),W=je;if(Y!==0&&(k=cv),Q.bindFramebuffer(P.FRAMEBUFFER,k)&&q&&Q.drawBuffers(w,k),Q.viewport(L),Q.scissor(F),Q.setScissorTest(W),me){const De=X.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,De.__webglTexture,Y)}else if(we){const De=O;for(let We=0;We<w.textures.length;We++){const Xe=X.get(w.textures[We]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+We,Xe.__webglTexture,Y,De)}}else if(w!==null&&Y!==0){const De=X.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,De.__webglTexture,Y)}E=-1},this.readRenderTargetPixels=function(w,O,Y,q,k,me,we,Fe=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=X.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&we!==void 0&&(De=De[we]),De){Q.bindFramebuffer(P.FRAMEBUFFER,De);try{const We=w.textures[Fe],Xe=We.format,Be=We.type;if(!K.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-q&&Y>=0&&Y<=w.height-k&&(w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Fe),P.readPixels(O,Y,q,k,Ee.convert(Xe),Ee.convert(Be),me))}finally{const We=b!==null?X.get(b).__webglFramebuffer:null;Q.bindFramebuffer(P.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(w,O,Y,q,k,me,we,Fe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=X.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&we!==void 0&&(De=De[we]),De)if(O>=0&&O<=w.width-q&&Y>=0&&Y<=w.height-k){Q.bindFramebuffer(P.FRAMEBUFFER,De);const We=w.textures[Fe],Xe=We.format,Be=We.type;if(!K.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Qe),P.bufferData(P.PIXEL_PACK_BUFFER,me.byteLength,P.STREAM_READ),w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Fe),P.readPixels(O,Y,q,k,Ee.convert(Xe),Ee.convert(Be),0);const at=b!==null?X.get(b).__webglFramebuffer:null;Q.bindFramebuffer(P.FRAMEBUFFER,at);const wt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await YS(P,wt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Qe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,me),P.deleteBuffer(Qe),P.deleteSync(wt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,Y=0){const q=Math.pow(2,-Y),k=Math.floor(w.image.width*q),me=Math.floor(w.image.height*q),we=O!==null?O.x:0,Fe=O!==null?O.y:0;ue.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,Y,0,0,we,Fe,k,me),Q.unbindTexture()};const uv=P.createFramebuffer(),fv=P.createFramebuffer();this.copyTextureToTexture=function(w,O,Y=null,q=null,k=0,me=null){me===null&&(k!==0?(aa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=k,k=0):me=0);let we,Fe,De,We,Xe,Be,Qe,at,wt;const dt=w.isCompressedTexture?w.mipmaps[me]:w.image;if(Y!==null)we=Y.max.x-Y.min.x,Fe=Y.max.y-Y.min.y,De=Y.isBox3?Y.max.z-Y.min.z:1,We=Y.min.x,Xe=Y.min.y,Be=Y.isBox3?Y.min.z:0;else{const Cn=Math.pow(2,-k);we=Math.floor(dt.width*Cn),Fe=Math.floor(dt.height*Cn),w.isDataArrayTexture?De=dt.depth:w.isData3DTexture?De=Math.floor(dt.depth*Cn):De=1,We=0,Xe=0,Be=0}q!==null?(Qe=q.x,at=q.y,wt=q.z):(Qe=0,at=0,wt=0);const ft=Ee.convert(O.format),He=Ee.convert(O.type);let vt;O.isData3DTexture?(ue.setTexture3D(O,0),vt=P.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(ue.setTexture2DArray(O,0),vt=P.TEXTURE_2D_ARRAY):(ue.setTexture2D(O,0),vt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);const rt=P.getParameter(P.UNPACK_ROW_LENGTH),mn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),jr=P.getParameter(P.UNPACK_SKIP_PIXELS),_n=P.getParameter(P.UNPACK_SKIP_ROWS),io=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,dt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,dt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,We),P.pixelStorei(P.UNPACK_SKIP_ROWS,Xe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Be);const xt=w.isDataArrayTexture||w.isData3DTexture,Rn=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){const Cn=X.get(w),Kt=X.get(O),sn=X.get(Cn.__renderTarget),Ec=X.get(Kt.__renderTarget);Q.bindFramebuffer(P.READ_FRAMEBUFFER,sn.__webglFramebuffer),Q.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ec.__webglFramebuffer);for(let fr=0;fr<De;fr++)xt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,X.get(w).__webglTexture,k,Be+fr),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,X.get(O).__webglTexture,me,wt+fr)),P.blitFramebuffer(We,Xe,we,Fe,Qe,at,we,Fe,P.DEPTH_BUFFER_BIT,P.NEAREST);Q.bindFramebuffer(P.READ_FRAMEBUFFER,null),Q.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(k!==0||w.isRenderTargetTexture||X.has(w)){const Cn=X.get(w),Kt=X.get(O);Q.bindFramebuffer(P.READ_FRAMEBUFFER,uv),Q.bindFramebuffer(P.DRAW_FRAMEBUFFER,fv);for(let sn=0;sn<De;sn++)xt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Cn.__webglTexture,k,Be+sn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Cn.__webglTexture,k),Rn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Kt.__webglTexture,me,wt+sn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Kt.__webglTexture,me),k!==0?P.blitFramebuffer(We,Xe,we,Fe,Qe,at,we,Fe,P.COLOR_BUFFER_BIT,P.NEAREST):Rn?P.copyTexSubImage3D(vt,me,Qe,at,wt+sn,We,Xe,we,Fe):P.copyTexSubImage2D(vt,me,Qe,at,We,Xe,we,Fe);Q.bindFramebuffer(P.READ_FRAMEBUFFER,null),Q.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Rn?w.isDataTexture||w.isData3DTexture?P.texSubImage3D(vt,me,Qe,at,wt,we,Fe,De,ft,He,dt.data):O.isCompressedArrayTexture?P.compressedTexSubImage3D(vt,me,Qe,at,wt,we,Fe,De,ft,dt.data):P.texSubImage3D(vt,me,Qe,at,wt,we,Fe,De,ft,He,dt):w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,me,Qe,at,we,Fe,ft,He,dt.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,me,Qe,at,dt.width,dt.height,ft,dt.data):P.texSubImage2D(P.TEXTURE_2D,me,Qe,at,we,Fe,ft,He,dt);P.pixelStorei(P.UNPACK_ROW_LENGTH,rt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,mn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,jr),P.pixelStorei(P.UNPACK_SKIP_ROWS,_n),P.pixelStorei(P.UNPACK_SKIP_IMAGES,io),me===0&&O.generateMipmaps&&P.generateMipmap(vt),Q.unbindTexture()},this.initRenderTarget=function(w){X.get(w).__webglFramebuffer===void 0&&ue.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ue.setTextureCube(w,0):w.isData3DTexture?ue.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ue.setTexture2DArray(w,0):ue.setTexture2D(w,0),Q.unbindTexture()},this.resetState=function(){C=0,T=0,b=null,Q.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),n.unpackColorSpace=st._getUnpackColorSpace()}}class j2{static createButton(e,n={}){const i=document.createElement("button");function r(){if(n.domOverlay===void 0){const d=document.createElement("div");d.style.display="none",document.body.appendChild(d);const p=document.createElementNS("http://www.w3.org/2000/svg","svg");p.setAttribute("width",38),p.setAttribute("height",38),p.style.position="absolute",p.style.right="20px",p.style.top="20px",p.addEventListener("click",function(){c.end()}),d.appendChild(p);const _=document.createElementNS("http://www.w3.org/2000/svg","path");_.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),_.setAttribute("stroke","#fff"),_.setAttribute("stroke-width",2),p.appendChild(_),n.optionalFeatures===void 0&&(n.optionalFeatures=[]),n.optionalFeatures.push("dom-overlay"),n.domOverlay={root:d}}let c=null;async function h(d){d.addEventListener("end",f),e.xr.setReferenceSpaceType("local"),await e.xr.setSession(d),i.textContent="STOP AR",n.domOverlay.root.style.display="",c=d}function f(){c.removeEventListener("end",f),i.textContent="START AR",n.domOverlay.root.style.display="none",c=null}i.style.display="",i.style.cursor="pointer",i.style.left="calc(50% - 50px)",i.style.width="100px",i.textContent="START AR",i.onmouseenter=function(){i.style.opacity="1.0"},i.onmouseleave=function(){i.style.opacity="0.5"},i.onclick=function(){c===null?navigator.xr.requestSession("immersive-ar",n).then(h):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",n).then(h).catch(d=>{console.warn(d)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",n).then(h).catch(d=>{console.warn(d)})}function s(){i.style.display="",i.style.cursor="auto",i.style.left="calc(50% - 75px)",i.style.width="150px",i.onmouseenter=null,i.onmouseleave=null,i.onclick=null}function o(){s(),i.textContent="AR NOT SUPPORTED"}function a(c){s(),console.warn("Exception when trying to call xr.isSessionSupported",c),i.textContent="AR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return i.id="ARButton",i.style.display="none",l(i),navigator.xr.isSessionSupported("immersive-ar").then(function(c){c?r():o()}).catch(a),i;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}}const e_={type:"change"},Pd={type:"start"},sv={type:"end"},ol=new yd,t_=new Hi,Y2=Math.cos(70*wl.DEG2RAD),Lt=new D,on=2*Math.PI,ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Lu=1e-6;class q2 extends lM{constructor(e,n=null){super(e,n),this.state=ct.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ps.ROTATE,MIDDLE:Ps.DOLLY,RIGHT:Ps.PAN},this.touches={ONE:Ss.ROTATE,TWO:Ss.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Or,this._lastTargetPosition=new D,this._quat=new Or().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Cm,this._sphericalDelta=new Cm,this._scale=1,this._panOffset=new D,this._rotateStart=new ge,this._rotateEnd=new ge,this._rotateDelta=new ge,this._panStart=new ge,this._panEnd=new ge,this._panDelta=new ge,this._dollyStart=new ge,this._dollyEnd=new ge,this._dollyDelta=new ge,this._dollyDirection=new D,this._mouse=new ge,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=K2.bind(this),this._onPointerDown=$2.bind(this),this._onPointerUp=Z2.bind(this),this._onContextMenu=rA.bind(this),this._onMouseWheel=eA.bind(this),this._onKeyDown=tA.bind(this),this._onTouchStart=nA.bind(this),this._onTouchMove=iA.bind(this),this._onMouseDown=J2.bind(this),this._onMouseMove=Q2.bind(this),this._interceptControlDown=sA.bind(this),this._interceptControlUp=oA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(e_),this.update(),this.state=ct.NONE}update(e=null){const n=this.object.position;Lt.copy(n).sub(this.target),Lt.applyQuaternion(this._quat),this._spherical.setFromVector3(Lt),this.autoRotate&&this.state===ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=on:i>Math.PI&&(i-=on),r<-Math.PI?r+=on:r>Math.PI&&(r-=on),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Lt.setFromSpherical(this._spherical),Lt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Lt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Lt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Lt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ol.origin.copy(this.object.position),ol.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ol.direction))<Y2?this.object.lookAt(this.target):(t_.setFromNormalAndCoplanarPoint(this.object.up,this.target),ol.intersectPlane(t_,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Lu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Lu||this._lastTargetPosition.distanceToSquared(this.target)>Lu?(this.dispatchEvent(e_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?on/60*this.autoRotateSpeed*e:on/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Lt.setFromMatrixColumn(n,0),Lt.multiplyScalar(-e),this._panOffset.add(Lt)}_panUp(e,n){this.screenSpacePanning===!0?Lt.setFromMatrixColumn(n,1):(Lt.setFromMatrixColumn(n,0),Lt.crossVectors(this.object.up,Lt)),Lt.multiplyScalar(e),this._panOffset.add(Lt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Lt.copy(r).sub(this.target);let s=Lt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(on*this._rotateDelta.x/n.clientHeight),this._rotateUp(on*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(on*this._rotateDelta.x/n.clientHeight),this._rotateUp(on*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new ge,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function $2(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function K2(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function Z2(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sv),this.state=ct.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function J2(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ps.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=ct.DOLLY;break;case Ps.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ct.ROTATE}break;case Ps.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ct.PAN}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(Pd)}function Q2(t){switch(this.state){case ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function eA(t){this.enabled===!1||this.enableZoom===!1||this.state!==ct.NONE||(t.preventDefault(),this.dispatchEvent(Pd),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(sv))}function tA(t){this.enabled!==!1&&this._handleKeyDown(t)}function nA(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Ss.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=ct.TOUCH_ROTATE;break;case Ss.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=ct.TOUCH_PAN;break;default:this.state=ct.NONE}break;case 2:switch(this.touches.TWO){case Ss.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=ct.TOUCH_DOLLY_PAN;break;case Ss.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=ct.TOUCH_DOLLY_ROTATE;break;default:this.state=ct.NONE}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(Pd)}function iA(t){switch(this._trackPointer(t),this.state){case ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=ct.NONE}}function rA(t){this.enabled!==!1&&t.preventDefault()}function sA(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function oA(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function n_(t){const e=new ri,n=new ei({color:3816026,roughness:.8,metalness:.8}),i=t.wallThickness||.2,r=t.wallHeight||3;return t.walls.forEach(s=>{const o=new D(s.p1[0],0,s.p1[1]),a=new D(s.p2[0],0,s.p2[1]),l=new D().subVectors(a,o),c=l.length();if(c<.01)return;const h=new Zs(c,r,i),f=new Tt(h,n.clone()),d=new D().addVectors(o,a).multiplyScalar(.5);f.position.set(d.x,r/2,d.z),f.rotation.y=Math.atan2(l.z,l.x),f.castShadow=!0,f.receiveShadow=!0,e.add(f)}),{wallGroup:e,wallMaterial:n}}function aA({floorData:t,activeSegment:e,startRoomId:n,endRoomId:i,onSessionStateChange:r,showARButton:s,showUIView:o}){const a=Ve.useRef(null),l=Ve.useRef(null),c=Ve.useRef(null),h=Ve.useRef(null),f=Ve.useRef(null),d=Ve.useRef(null),p=Ve.useRef([]),_=Ve.useRef(null),v=Ve.useRef(null),m=Ve.useRef(null),u=Ve.useRef(0),g=Ve.useRef([]),x=Ve.useRef(null),y=Ve.useRef(null),A=Ve.useRef(null),C=Ve.useRef(null),T=Ve.useRef(null),b=Ve.useRef(null),E=Ve.useRef(null),M=Ve.useRef(n),L=Ve.useRef(i),[F,W]=Ve.useState(!1),[J,z]=Ve.useState(!1),[j,ie]=Ve.useState(!1),[N,ee]=Ve.useState(null),[oe,ve]=Ve.useState(""),[Ne,je]=Ve.useState(!1),Ze=Ve.useRef(0),Ye={x:2,z:1.6},te=()=>{if(f.current&&c.current){const Te=f.current,Oe=c.current;Te.position.set(Oe.position.x,0,Oe.position.z),Te.rotation.set(0,Oe.rotation.y,0),Te.translateX(-Ye.x),Te.translateZ(-Ye.z),ie(!0),z(!1),navigator.vibrate&&navigator.vibrate(200)}};Ve.useEffect(()=>{if(console.log("isFarView changed:",F),c.current&&d.current){const Te=F?70:38;c.current.position.y=Te,d.current.update()}},[F]),Ve.useEffect(()=>{M.current=n??"",L.current=i??""},[n,i]),Ve.useEffect(()=>{if(!f.current)return;A.current&&(f.current.remove(A.current),A.current.traverse(B=>{B.isMesh&&(B.geometry.dispose(),B.material.dispose())})),T.current&&(f.current.remove(T.current),T.current.traverse(B=>{B.isMesh&&(B.geometry.dispose(),B.material.dispose())})),b.current&&(f.current.remove(b.current),b.current.traverse(B=>{B.isMesh&&(B.geometry.dispose(),B.material.dispose())})),p.current.forEach(B=>{f.current.remove(B.cone,B.shaft),B.cone.geometry.dispose(),B.shaft.geometry.dispose()}),p.current=[],u.current=0,g.current=[],x.current=null;const{wallGroup:Te}=n_(t);f.current.add(Te),A.current=Te;const Oe=new ri;T.current=Oe,f.current.add(Oe),Ae(Oe);const P=new ri;b.current=P,f.current.add(P),ke(P),E.current&&f.current.remove(E.current),ae(f.current,Te),f.current&&Ce(e,f.current)},[t,e]),Ve.useEffect(()=>{if(!a.current)return;const Te=new v1;Te.background=new et(657935),Te.fog=new Sd(986910,10,60),l.current=Te;const Oe=new ri;f.current=Oe,Te.add(Oe);const P=new ri;T.current=P,Oe.add(P);const B=new yn(75,window.innerWidth/window.innerHeight,.1,1e3);B.position.set(0,10,50),c.current=B;const G=new X2({antialias:!0,alpha:!0});G.setSize(window.innerWidth,window.innerHeight),G.setPixelRatio(window.devicePixelRatio),G.shadowMap.enabled=!0,G.shadowMap.type=g0,G.setClearColor(0,0),a.current.appendChild(G.domElement),G.xr.enabled=!0,h.current=G,(async()=>{var $;const I={requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay","dom-overlay-for-handheld-ar","image-tracking"],domOverlay:{root:document.body}};try{const V=new Image,le=window.location.href.split("?")[0].split("#")[0];V.src=le.endsWith("/")?le+"marker.png":le.substring(0,le.lastIndexOf("/")+1)+"marker.png",await V.decode();const ne=await createImageBitmap(V);I.trackedImages=[{image:ne,widthInMeters:.2}],console.log("AR: Image tracking configured with absolute path:",V.src)}catch(V){console.warn("AR: Image tracking setup failed, continuing without it.",V)}const H=j2.createButton(G,I);y.current=H,($=a.current)==null||$.appendChild(H)})();const Q=new oM(16777215,.4);Te.add(Q);const Z=new sM(16777215,2);Z.position.set(10,20,10),Z.castShadow=!0,Z.shadow.mapSize.width=2048,Z.shadow.mapSize.height=2048,Z.shadow.camera.left=-50,Z.shadow.camera.right=50,Z.shadow.camera.top=50,Z.shadow.camera.bottom=-20,Te.add(Z);const X=new Rm(10980346,.5);X.position.set(-10,10,-10),X.castShadow=!0,Te.add(X);const ue=new Rm(13079274,.5);ue.position.set(10,10,10),ue.castShadow=!0,Te.add(ue);const ze=new q2(B,G.domElement);d.current=ze;const{wallGroup:Ie}=n_(t);Oe.add(Ie),A.current=Ie,G.xr.addEventListener("sessionstart",()=>{var $;r&&r(!0),z(!0),ie(!1);const I=f.current;if(!I)return;const H=1;if(I.scale.set(H,H,H),e&&e.positions.length>=2){const V=e.positions[0],le=e.positions[1],ne=le[0]-V[0],ye=le[1]-V[1],de=Math.atan2(ne,ye);I.rotation.set(0,-de,0);const se=new D(V[0],0,V[1]).multiplyScalar(H);se.applyAxisAngle(new D(0,1,0),I.rotation.y),I.position.set(-se.x,0,-se.z)}else{const V=t.rooms.find(le=>le.id===M.current);if(($=V==null?void 0:V.connectedTo)!=null&&$[0]){const le=t.waypoints.find(ne=>ne.id===V.connectedTo[0]);le&&I.position.set(-le.position[0]*H,0,-le.position[1]*H)}}T.current&&(T.current.visible=!1),b.current&&(b.current.visible=!1),E.current&&(E.current.visible=!1),A.current&&(A.current.visible=!1),e&&f.current&&Ce(e,f.current),p.current.forEach(V=>{V.cone.visible=!0,V.shaft.visible=!0,V.ring.visible=!0}),m.current&&(m.current.visible=!1)}),G.xr.addEventListener("sessionend",()=>{r&&r(!1);const I=f.current;I&&(I.scale.set(1,1,1),I.position.set(0,0,0),I.rotation.set(0,0,0),T.current&&(T.current.visible=!0),E.current&&(E.current.visible=!0),A.current&&(A.current.visible=!0),m.current&&(m.current.visible=!1),e&&I&&Ce(e,I))}),ae(Oe,Ie),Ae(P);const R=()=>{B.aspect=window.innerWidth/window.innerHeight,B.updateProjectionMatrix(),G.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",R);const S=()=>{var V;ze.update();const I=G.xr.getSession(),H=G.xr.getFrame();if(I&&H&&J&&!j&&f.current){const le=((V=H.getImageTrackingResults)==null?void 0:V.call(H))||[];for(const ne of le)if(ne.trackingState==="tracked"||ne.trackingState==="emulated"){const ye=G.xr.getReferenceSpace(),de=H.getPose(ne.imageSpace,ye);if(de){const{position:se,orientation:xe}=de.transform,be=f.current;be.position.set(se.x,se.y,se.z),be.quaternion.set(xe.x,xe.y,xe.z,xe.w),be.translateX(-Ye.x),be.translateZ(-Ye.z),ie(!0),z(!1),navigator.vibrate&&navigator.vibrate(200)}}}if(I&&j&&e&&e.positions.length>0){const le=new D;B.getWorldPosition(le);const ne=e.positions[e.positions.length-1],ye=new D(ne[0],0,ne[1]);f.current&&ye.applyMatrix4(f.current.matrixWorld);const de=le.distanceTo(ye);ee(de),de<1.5&&!Ne?(navigator.vibrate&&navigator.vibrate([500,100,500]),je(!0),ve("You have arrived!")):de>=1.5&&(je(!1),ve(e.transition?`Head to ${e.transition.name}`:"Follow the arrows"),performance.now()-Ze.current>15e3)}if(T.current&&I&&j){const le=new D;B.getWorldPosition(le),T.current.children.forEach(ne=>{const ye=new D;ne.getWorldPosition(ye);const de=le.distanceTo(ye);if(ne.visible=de<5,ne.visible){const se=ne.material;se.opacity=wl.lerp(1,0,(de-2)/3),ne.scale.setScalar(wl.lerp(1,.5,(de-2)/3))}})}if(b.current&&I&&j){const le=new D;B.getWorldPosition(le),b.current.children.forEach(ne=>{const ye=new D;ne.getWorldPosition(ye);const de=le.distanceTo(ye);if(ne.visible=de<4,ne.visible){const se=ne.material,xe=wl.clamp(1-de/4,0,1);se.opacity=xe;const be=1+Math.sin($*3)*.05;ne.scale.setScalar(be)}})}const $=performance.now()*.001;if(p.current.forEach((le,ne)=>{const{cone:ye,shaft:de,ring:se}=le,xe=Math.sin($*2+ne*.4)*.04;ye.userData.baseY!==void 0&&(ye.position.y=ye.userData.baseY+xe),de.userData.baseY!==void 0&&(de.position.y=de.userData.baseY+xe),se.userData.baseY!==void 0&&(se.position.y=se.userData.baseY);const be=1.8+Math.sin($*3+ne)*.7;[ye,de].forEach(_e=>{const Ge=_e.material;Ge.emissive!==void 0&&(Ge.emissiveIntensity=be)});const Ee=1+Math.sin($*2+ne)*.04;ye.scale.set(Ee,Ee,Ee),de.scale.set(Ee,Ee,Ee)}),_.current){const le=1+Math.sin($*4)*.2;_.current.scale.set(le,le,le),_.current.material.opacity=.5+Math.sin($*4)*.5}if(v.current){const le=v.current.children[3];le&&(le.rotation.y+=.03,le.rotation.x+=.01,le.position.y=7+Math.sin($*2.5)*.5);const ne=v.current.children[1];ne&&(ne.rotation.z+=.02,ne.scale.setScalar(1.2+Math.sin($*2)*.1))}G.render(Te,B)};return G.setAnimationLoop(S),()=>{window.removeEventListener("resize",R),G.setAnimationLoop(null),G.dispose(),ze.dispose(),a.current&&G.domElement&&a.current.removeChild(G.domElement),a.current&&arButton.parentNode&&a.current.removeChild(arButton)}},[]),Ve.useEffect(()=>{f.current&&Ce(e,f.current)},[e]),Ve.useEffect(()=>{y.current&&(y.current.style.display=s?"block":"none")},[s]);const ae=(Te,Oe)=>{const P=new $s().setFromObject(Oe),B=new D;P.getSize(B);const G=new D;P.getCenter(G);const K=4,Q=new Pr(B.x+K,B.z+K),Z=new ei({color:526346,roughness:.8,metalness:.2}),X=new Tt(Q,Z);if(X.rotation.x=-Math.PI/2,X.position.copy(G),X.position.y=0,X.receiveShadow=!0,C.current=Z,E.current=X,Te.add(X),t.corridorPolygon&&t.corridorPolygon.length>0){const ue=new Y0,[ze,Ie]=t.corridorPolygon[0];ue.moveTo(ze,Ie),t.corridorPolygon.slice(1).forEach(([$,V])=>{ue.lineTo($,V)}),ue.closePath();const R={depth:.02,bevelEnabled:!1},S=new Ad(ue,R),I=new ei({color:t.corridorColor||3066944,roughness:.6,metalness:.1,transparent:!0,opacity:.8}),H=new Tt(S,I);H.rotation.x=-Math.PI/2,H.position.y=.01,Te.add(H)}c.current&&d.current&&(c.current.position.set(G.x,38,G.z+.001),d.current.target.copy(G),d.current.update())},Ae=Te=>{if(!t)return;const Oe={gymkhana:12,gents:6,women:6,g1:8,g2:8,g3:8,g4:8,g5:8,lab1:8,lab2:8,lab3:8,lab4:8,lab5:8,lab6:8,lab7:10,lab8:10,lab9:14,lab10:8,lab11:8,lab12:8,lab13:8,lab14:8,hod:6,entc_hod:6,dept_lib:4,server:6,tutorial:3.5,corridor:20,lift:3,stairs_bot:3,faculty:6,seminar:10,301:8,302:8,303:8,304:8,306:8,501:8,502:8,503:8,504:8,505:8},P={gymkhana:6,principal:6,admin:6,conf:6,lab1:6,canteen:6,library:6,ramp:6,hod:6,entc_hod:6,dept_lib:6,server:6,tutorial:6,lab10:6,stairs_top:6,lab9:6,corridor:2,lift:6,stairs_bot:6,lab7:6,lab8:6,women:6,gents:6};t.rooms.forEach(B=>{if(!B.center)return;const G=B.id.split("_").slice(1).join("_"),K=Oe[G]??6,Q=P[G]??7.5,Z=document.createElement("canvas"),X=Z.getContext("2d");if(!X)return;Z.width=512,Z.height=512;const ue=96,ze=28;let Ie=ue;for(X.font=`bold ${Ie}px Arial`;X.measureText(B.name).width>Z.width*.88&&Ie>ze;)Ie-=4,X.font=`bold ${Ie}px Arial`;const R=B.name.split(" "),S=[];if(R.length>1&&X.measureText(B.name).width>Z.width*.85){const Ee=Math.ceil(R.length/2);S.push(R.slice(0,Ee).join(" ")),S.push(R.slice(Ee).join(" "));for(const _e of S)for(;X.measureText(_e).width>Z.width*.88&&Ie>ze;)Ie-=4,X.font=`bold ${Ie}px Arial`}else S.push(B.name);const I=Ie*1.25,H=S.length*I;X.clearRect(0,0,Z.width,Z.height),X.fillStyle="rgba(8, 8, 18, 0.82)";const $=32;X.beginPath(),X.moveTo($,0),X.lineTo(Z.width-$,0),X.quadraticCurveTo(Z.width,0,Z.width,$),X.lineTo(Z.width,Z.height-$),X.quadraticCurveTo(Z.width,Z.height,Z.width-$,Z.height),X.lineTo($,Z.height),X.quadraticCurveTo(0,Z.height,0,Z.height-$),X.lineTo(0,$),X.quadraticCurveTo(0,0,$,0),X.closePath(),X.fill(),X.strokeStyle="rgba(199, 146, 234, 0.85)",X.lineWidth=8,X.stroke(),X.font=`bold ${Ie}px Arial`,X.textAlign="center",X.textBaseline="middle",X.shadowColor="rgba(199, 146, 234, 1)",X.shadowBlur=24,X.fillStyle="#ffffff";const V=Z.height/2-H/2+I/2;S.forEach((Ee,_e)=>{X.fillText(Ee,Z.width/2,V+_e*I)}),X.shadowBlur=10,X.fillStyle="#eedeff",S.forEach((Ee,_e)=>{X.fillText(Ee,Z.width/2,V+_e*I)});const le=new vm(Z);le.needsUpdate=!0;const ne=new Ql({map:le,transparent:!0,depthWrite:!1,side:Nn}),ye=.7,de=Math.min(K-ye,K*.85),se=Math.min(Q-ye,Q*.75),xe=new Pr(de,se),be=new Tt(xe,ne);be.position.set(B.center[0],.06,B.center[1]),be.rotation.x=-Math.PI/2,Te.add(be)})},ke=Te=>{t.floorMessages&&t.floorMessages.forEach(Oe=>{const P=document.createElement("canvas"),B=P.getContext("2d");if(!B)return;P.width=1024,P.height=256;const G=Oe.type==="welcome",K=G?"#8b5cf6":Oe.type==="quote"?"#10b981":"#f59e0b";B.fillStyle="rgba(15, 15, 25, 0.7)",B.roundRect(0,0,P.width,P.height,40),B.fill(),B.strokeStyle=K,B.lineWidth=10,B.stroke(),B.font="bold 80px Arial",B.textAlign="center",B.textBaseline="middle",B.shadowColor=K,B.shadowBlur=30,B.fillStyle="#ffffff",B.fillText(Oe.text,P.width/2,P.height/2);const Q=new vm(P),Z=new ei({map:Q,transparent:!0,opacity:0,depthWrite:!1,emissive:new et(K),emissiveIntensity:2}),X=new Pr(G?4:2.5,G?1:.6),ue=new Tt(X,Z);ue.rotation.x=-Math.PI/2,ue.position.set(Oe.position[0],.02,Oe.position[1]),Te.add(ue)})},Ce=(Te,Oe)=>{var Ue;if(p.current.forEach(Le=>{Oe.remove(Le.cone,Le.shaft,Le.ring),Le.coneGeo.dispose(),Le.shaftGeo.dispose(),Le.ringGeo.dispose(),Le.coneMat.dispose(),Le.shaftMat.dispose(),Le.ringMat.dispose()}),p.current=[],_.current&&(Oe.remove(_.current),_.current.geometry.dispose(),_.current.material.dispose(),_.current=null),v.current&&(Oe.remove(v.current),v.current.traverse(Le=>{Le.isMesh&&(Le.geometry.dispose(),Le.material.dispose())}),v.current=null),u.current=0,g.current=[],x.current=null,m.current&&(Oe.remove(m.current),m.current.geometry.dispose(),m.current.material.dispose(),m.current=null),!Te||Te.positions.length<2)return;const P=Te.positions.map(Le=>new D(Le[0],.12,Le[1]));if(P.length<2)return;const B=new ko(.8,.05,12,32),G=new ei({color:1096065,emissive:1096065,emissiveIntensity:5}),K=new Tt(B,G);K.rotation.x=-Math.PI/2,K.position.copy(P[0]).setY(.01),Oe.add(K),_.current=K;const Q=P[P.length-1],Z=new ri,X=new ko(1,.1,16,48),ue=new ei({color:9133302,emissive:9133302,emissiveIntensity:8}),ze=new Tt(X,ue);ze.rotation.x=-Math.PI/2,Z.add(ze);const Ie=new ko(1.5,.05,8,32),R=new Tt(Ie,ue);R.rotation.x=-Math.PI/2,Z.add(R);const S=new nc(.05,1,6,24,1,!0),I=new ei({color:10980346,emissive:10980346,emissiveIntensity:4,transparent:!0,opacity:.3,side:Nn}),H=new Tt(S,I);H.position.y=3,Z.add(H);const $=new ic(.5),V=new ei({color:16777215,emissive:10980346,emissiveIntensity:12}),le=new Tt($,V);le.position.y=7,Z.add(le),Z.position.copy(Q).setY(.01),Oe.add(Z),v.current=Z;const ne=new V0(P);x.current=ne;const de=ne.getPoints(300);g.current=de;const se=new dn().setFromPoints(de),xe=new z0({color:13079274,linewidth:2}),be=new M1(se,xe);be.userData.isPathLine=!0,Oe.add(be),m.current=be;const Ee=4,_e=((Ue=h.current)==null?void 0:Ue.xr.isPresenting)??!1,Ge=_e?.08:.4,U=_e?.08:.12,pe=_e?.05:.28,Se=_e?.015:.04,Pe=_e?.05:.14,fe=_e?.02:.09,re=_e?.001:.12;for(let Le=0;Le<de.length;Le+=Ee){const nt=de[Le].clone();nt.y=re;const it=Le/(de.length-1),kn=ne.getTangent(it).normalize(),pn=new ic(U,0),Qs=new ei({color:9133302,emissive:9133302,emissiveIntensity:4,transparent:!0,opacity:.9}),Gt=new Tt(pn,Qs);Gt.position.copy(nt).setY(re+Ge/2),Gt.scale.set(1,.4,1.2);const Xr=nt.clone().add(kn);Gt.lookAt(Xr.x,re+Ge/2,Xr.z),Gt.userData.baseY=Gt.position.y;const eo=new nc(Se,Se,pe,12),to=new ei({color:9133302,emissive:9133302,emissiveIntensity:2.5}),An=new Tt(eo,to);An.position.copy(nt).setY(re+Ge/4),An.quaternion.copy(Gt.quaternion),An.translateY(-(Ge/2)),An.userData.baseY=An.position.y;const no=new Rd(fe,Pe,24),ur=new Ql({color:9133302,side:Nn,transparent:!0,opacity:.3}),di=new Tt(no,ur);di.rotation.x=-Math.PI/2,di.position.copy(nt).setY(.001),di.userData.baseY=di.position.y,Oe.add(Gt,An,di),p.current.push({cone:Gt,shaft:An,ring:di,coneGeo:pn,coneMat:Qs,shaftGeo:eo,shaftMat:to,ringGeo:no,ringMat:ur})}};return ce.jsxs(ce.Fragment,{children:[ce.jsx("div",{ref:a,className:"fixed inset-0 z-0"}),J&&ce.jsx("div",{className:"fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900/60 backdrop-blur-sm",children:ce.jsxs("div",{className:"bg-slate-900 border border-purple-500/50 p-8 rounded-3xl shadow-2xl flex flex-col items-center max-w-xs text-center",children:[ce.jsxs("div",{className:"relative w-24 h-24 mb-6",children:[ce.jsx("div",{className:"absolute inset-0 border-4 border-purple-500 rounded-2xl animate-pulse"}),ce.jsx("div",{className:"absolute inset-4 border-2 border-purple-400/50 rounded-lg animate-ping"}),ce.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:ce.jsx("span",{className:"text-4xl text-purple-400",children:"📷"})})]}),ce.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"Aligning World"}),ce.jsxs("p",{className:"text-sm text-purple-200 mb-6 leading-relaxed",children:["Point your camera at the ",ce.jsx("span",{className:"font-bold text-white underline",children:"HOD Door Marker"})," to calibrate your position."]}),ce.jsxs("div",{className:"flex flex-col gap-2 w-full",children:[ce.jsx("button",{onClick:()=>te(),className:"px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-purple-500/20",children:"Found Marker (Align Now)"}),ce.jsx("button",{onClick:()=>z(!1),className:"px-6 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium rounded-xl transition-colors border border-slate-700",children:"Skip Calibration"})]})]})}),j&&N!==null&&ce.jsx("div",{className:"fixed bottom-10 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm",children:ce.jsxs("div",{className:"bg-slate-900/80 backdrop-blur-xl border border-white/10 p-4 rounded-3xl shadow-2xl flex items-center gap-4",children:[ce.jsx("div",{className:"bg-purple-600/30 p-3 rounded-2xl",children:ce.jsx("div",{className:"w-6 h-6 border-2 border-purple-400 rounded-full animate-pulse flex items-center justify-center",children:ce.jsx("div",{className:"w-2 h-2 bg-purple-400 rounded-full"})})}),ce.jsxs("div",{className:"flex-1",children:[ce.jsxs("div",{className:"flex items-baseline gap-1.5",children:[ce.jsx("span",{className:"text-2xl font-black text-white",children:N<1?"Arriving":`${Math.round(N)}m`}),ce.jsxs("span",{className:"text-xs font-medium text-slate-400 uppercase tracking-tight",children:["to ",(e==null?void 0:e.floorId)===t.floorId?"Destination":"Next Floor"]})]}),ce.jsxs("p",{className:"text-sm font-medium text-purple-300",children:[oe," • ",Math.ceil(N/1.2/60)," min walk"]})]})]})}),o&&ce.jsx("button",{onClick:()=>{console.log("Button clicked!"),W(!F)},className:"fixed top-20 left-6 z-20 bg-white/95 p-3 rounded-full shadow-lg text-slate-800 hover:bg-slate-100 transition-colors","aria-label":"Toggle Far View",children:F?"Default View":"Far View"})]})}const lA={floorId:"f1",floorNumber:1,floorName:"Ground Floor",rooms:[{id:"f1_gymkhana",name:"GYMKHANA",center:[-22.5,-5.25],connectedTo:["f1_wp_hall_gymkhana"]},{id:"f1_g1",name:"G1",center:[-16.5,-5.25],connectedTo:["f1_wp_hall_g1"]},{id:"f1_g2",name:"G2",center:[-10,-5.25],connectedTo:["f1_wp_hall_g2"]},{id:"f1_g3",name:"G3",center:[-4,-5.25],connectedTo:["f1_wp_hall_g2"]},{id:"f1_g4",name:"G4",center:[1.5,-5.25],connectedTo:["f1_wp_hall_g4"]},{id:"f1_g5",name:"G5",center:[7,-5.25],connectedTo:["f1_wp_hall_gents"]},{id:"f1_gents",name:"Gents Toilet",center:[14.5,5.25],connectedTo:["f1_wp_hall_gents"]},{id:"f1_lift",name:"Lift",center:[-24,5.25],connectedTo:["f1_wp_hall_lift"]},{id:"f1_stairs_bot",name:"Stairs (Bot)",center:[-20,5.25],connectedTo:["f1_wp_hall_stairs_bot"]}],waypoints:[{id:"f1_wp_hall_lift",position:[-24,0],connectedTo:["f1_wp_hall_stairs_bot"]},{id:"f1_wp_hall_stairs_bot",position:[-20,0],connectedTo:["f1_wp_hall_lift","f1_wp_hall_gymkhana"]},{id:"f1_wp_hall_gymkhana",position:[-22.5,0],connectedTo:["f1_wp_hall_stairs_bot","f1_wp_hall_g1"]},{id:"f1_wp_hall_g1",position:[-16.5,0],connectedTo:["f1_wp_hall_gymkhana","f1_wp_hall_g2"]},{id:"f1_wp_hall_g2",position:[-10,0],connectedTo:["f1_wp_hall_g1","f1_wp_hall_g4"]},{id:"f1_wp_hall_g4",position:[1,0],connectedTo:["f1_wp_hall_g2","f1_wp_hall_gents"]},{id:"f1_wp_hall_gents",position:[14.5,0],connectedTo:["f1_wp_hall_g4"]}],walls:[{p1:[-26,-9],p2:[26,-9]},{p1:[26,-9],p2:[26,1.5]},{p1:[26,1.5],p2:[18,1.5]},{p1:[18,1.5],p2:[18,9]},{p1:[18,9],p2:[-26,9]},{p1:[-26,9],p2:[-26,-9]},{p1:[-26,-1.5],p2:[26,-1.5]},{p1:[-26,1.5],p2:[26,1.5]},{p1:[-19,-9],p2:[-19,-1.5]},{p1:[-14,-9],p2:[-14,-1.5]},{p1:[-6,-9],p2:[-6,-1.5]},{p1:[-2,-9],p2:[-2,-1.5]},{p1:[5,-9],p2:[5,-1.5]},{p1:[9,-9],p2:[9,-1.5]},{p1:[-22,1.5],p2:[-22,9]},{p1:[-18,1.5],p2:[-18,9]},{p1:[-20,1.5],p2:[-20,9]},{p1:[4,1.5],p2:[4,9]},{p1:[11,1.5],p2:[11,9]}],wallHeight:3,wallThickness:.2,floorMessages:[{id:"m1",type:"welcome",text:"WELCOME TO THE COLLEGE",position:[-24,2]},{id:"m2",type:"quote",text:"Keep Moving Forward 🚀",position:[0,0]},{id:"m3",type:"utility",text:"LIFT ACCESS 🛗",position:[-24,-2]},{id:"m4",type:"utility",text:"GYMKHANA ENTRANCE",position:[-22,2]}]},cA={floorId:"f2",floorNumber:2,floorName:"1st Floor",corridorPolygon:[[0,3.2],[24.54,3.2],[24.54,2.35],[27.54,2.35],[27.54,3.2],[27.54,3.2],[38.98,3.2],[38.98,4.1],[27.17,4.1],[5.36,4.1],[5.36,7.3],[0,7.3],[0,4.1]],corridorColor:"#2ecc40",rooms:[{id:"f2_lab1",name:"Lab 1",center:[3.35,1.6],connectedTo:["f2_wp_hall_lab1"]},{id:"f2_lab2",name:"Lab 2",center:[8.62,1.6],connectedTo:["f2_wp_hall_lab2"]},{id:"f2_lab3",name:"Lab 3",center:[17.54,1.6],connectedTo:["f2_wp_hall_lab3"]},{id:"f2_stairs_top",name:"Stairs (Top)",center:[26.04,1.1],connectedTo:["f2_wp_hall_stairs_top"]},{id:"f2_lab6",name:"Lab 6",center:[33.15,3.65],connectedTo:["f2_wp_hall_lab6"]},{id:"f2_lift",name:"Lift",center:[.89,5.7],connectedTo:["f2_wp_hall_lift"]},{id:"f2_stairs_bot",name:"Stairs (Bot)",center:[3.57,5.7],connectedTo:["f2_wp_hall_stairs_bot"]},{id:"f2_lab4",name:"Lab 4",center:[10.95,5.7],connectedTo:["f2_wp_hall_lab4"]},{id:"f2_lab5",name:"Lab 5",center:[20.54,5.7],connectedTo:["f2_wp_hall_lab5"]},{id:"f2_women",name:"Women Washroom",center:[25.86,5.7],connectedTo:["f2_wp_hall_women"]},{id:"f2_gents",name:"Men Washroom",center:[38.11,5.7],connectedTo:["f2_wp_hall_gents"]}],waypoints:[{id:"f2_wp_hall_lift",position:[.89,3.65],connectedTo:["f2_wp_hall_stairs_bot"]},{id:"f2_wp_hall_stairs_bot",position:[3.57,3.65],connectedTo:["f2_wp_hall_lift","f2_wp_hall_lab1"]},{id:"f2_wp_hall_lab1",position:[3.35,3.65],connectedTo:["f2_wp_hall_stairs_bot","f2_wp_hall_lab2"]},{id:"f2_wp_hall_lab2",position:[8.62,3.65],connectedTo:["f2_wp_hall_lab1","f2_wp_hall_lab4"]},{id:"f2_wp_hall_lab4",position:[10.95,3.65],connectedTo:["f2_wp_hall_lab2","f2_wp_hall_lab3"]},{id:"f2_wp_hall_lab3",position:[17.54,3.65],connectedTo:["f2_wp_hall_lab4","f2_wp_hall_lab5"]},{id:"f2_wp_hall_lab5",position:[20.54,3.65],connectedTo:["f2_wp_hall_lab3","f2_wp_hall_stairs_top"]},{id:"f2_wp_hall_stairs_top",position:[26.04,3.65],connectedTo:["f2_wp_hall_lab5","f2_wp_hall_women"]},{id:"f2_wp_hall_women",position:[25.86,3.65],connectedTo:["f2_wp_hall_stairs_top","f2_wp_hall_lab6"]},{id:"f2_wp_hall_lab6",position:[33.15,3.65],connectedTo:["f2_wp_hall_women","f2_wp_hall_gents"]},{id:"f2_wp_hall_gents",position:[38.11,3.65],connectedTo:["f2_wp_hall_lab6"]}],walls:[{p1:[0,0],p2:[24.54,0]},{p1:[27.54,0],p2:[38.98,0]},{p1:[38.98,0],p2:[38.98,7.3]},{p1:[38.98,7.3],p2:[5.36,7.3]},{p1:[1.78,7.3],p2:[0,7.3]},{p1:[0,7.3],p2:[0,0]},{p1:[0,3.2],p2:[24.54,3.2]},{p1:[27.54,3.2],p2:[38.98,3.2]},{p1:[0,4.1],p2:[38.98,4.1]},{p1:[6.7,0],p2:[6.7,3.2]},{p1:[13.54,0],p2:[13.54,3.2]},{p1:[24.54,0],p2:[24.54,3.2]},{p1:[27.54,0],p2:[27.54,3.2]},{p1:[1.78,4.1],p2:[1.78,7.3]},{p1:[5.36,4.1],p2:[5.36,7.3]},{p1:[16.54,4.1],p2:[16.54,7.3]},{p1:[24.54,4.1],p2:[24.54,7.3]},{p1:[32.38,4.1],p2:[32.38,7.3]}],wallHeight:3,wallThickness:.15,floorMessages:[{id:"m1",type:"welcome",text:"1ST FLOOR - LAB BLOCK",position:[2,3.65]},{id:"m2",type:"quote",text:"Code is Poetry 💻",position:[15,3.65]}]},uA={floorId:"f3",floorNumber:3,floorName:"2nd Floor (CSE)",corridorPolygon:[[0,3.2],[24.54,3.2],[24.54,2.35],[27.54,2.35],[27.54,3.2],[27.17,3.2],[38.98,3.2],[38.98,4.1],[27.17,4.1],[5.36,4.1],[5.36,7.3],[0,7.3],[0,4.1]],corridorColor:"#2ecc40",rooms:[{id:"f3_hod",name:"HOD Cabin",center:[2,1.6],connectedTo:["f3_wp_hod"]},{id:"f3_dept_lib",name:"Dept Library",center:[5.35,1.6],connectedTo:["f3_wp_lib"]},{id:"f3_server",name:"Server Room",center:[8.62,1.6],connectedTo:["f3_wp_server"]},{id:"f3_tutorial",name:"Tutorial Room",center:[13.54,1.6],connectedTo:["f3_wp_tutorial"]},{id:"f3_lab10",name:"Lab 10",center:[20.54,1.6],connectedTo:["f3_wp_lab10"]},{id:"f3_stairs_top",name:"Stairs",center:[26.04,1.1],connectedTo:["f3_wp_stairs_top"]},{id:"f3_lab9",name:"Lab 9",center:[33.15,3.65],connectedTo:["f3_wp_lab9"]},{id:"f3_corridor",name:"Middle Portion",center:[13.5,3.65],connectedTo:["f3_wp_lab7"]},{id:"f3_lift",name:"Lift",center:[.89,5.7],connectedTo:["f3_wp_lift"]},{id:"f3_stairs_bot",name:"Stairs",center:[3.57,5.7],connectedTo:["f3_wp_stairs_bot"]},{id:"f3_lab7",name:"Lab 7",center:[10.95,5.7],connectedTo:["f3_wp_lab7"]},{id:"f3_lab8",name:"Lab 8",center:[20.54,5.7],connectedTo:["f3_wp_lab8"]},{id:"f3_women",name:"Ladies Toilet",center:[25.86,5.7],connectedTo:["f3_wp_women"]},{id:"f3_gents",name:"Men Washroom",center:[38.11,5.7],connectedTo:["f3_wp_gents"]}],waypoints:[{id:"f3_wp_lift",position:[.89,3.65],connectedTo:["f3_wp_stairs_bot"]},{id:"f3_wp_stairs_bot",position:[3.57,3.65],connectedTo:["f3_wp_lift","f3_wp_hod","f3_wp_lab7"]},{id:"f3_wp_hod",position:[2,3.65],connectedTo:["f3_wp_stairs_bot","f3_wp_lib"]},{id:"f3_wp_lib",position:[5.35,3.65],connectedTo:["f3_wp_hod","f3_wp_server"]},{id:"f3_wp_server",position:[8.62,3.65],connectedTo:["f3_wp_lib","f3_wp_tutorial"]},{id:"f3_wp_tutorial",position:[13.54,3.65],connectedTo:["f3_wp_server","f3_wp_lab10"]},{id:"f3_wp_lab10",position:[20.54,3.65],connectedTo:["f3_wp_tutorial","f3_wp_stairs_top"]},{id:"f3_wp_stairs_top",position:[26.04,3.65],connectedTo:["f3_wp_lab10","f3_wp_lab9"]},{id:"f3_wp_lab7",position:[10.95,3.65],connectedTo:["f3_wp_stairs_bot","f3_wp_lab8"]},{id:"f3_wp_lab8",position:[20.54,3.65],connectedTo:["f3_wp_lab7","f3_wp_women"]},{id:"f3_wp_women",position:[25.86,3.65],connectedTo:["f3_wp_lab8","f3_wp_lab9"]},{id:"f3_wp_lab9",position:[32.21,3.65],connectedTo:["f3_wp_stairs_top","f3_wp_women","f3_wp_gents"]},{id:"f3_wp_gents",position:[38.11,3.65],connectedTo:["f3_wp_lab9"]}],walls:[{p1:[0,0],p2:[26.47,0]},{p1:[27.17,0],p2:[38.98,0]},{p1:[38.98,0],p2:[38.98,7.3]},{p1:[38.98,7.3],p2:[37.24,7.3]},{p1:[27.17,7.3],p2:[5.36,7.3]},{p1:[1.78,7.3],p2:[0,7.3]},{p1:[0,0],p2:[0,7.3]},{p1:[0,7.3],p2:[0,10.18]},{p1:[0,10.18],p2:[1.78,10.18]},{p1:[1.78,10.18],p2:[1.78,7.3]},{p1:[1.78,7.3],p2:[1.78,10.88]},{p1:[1.78,10.88],p2:[5.36,10.88]},{p1:[5.36,10.88],p2:[5.36,7.3]},{p1:[3.58,7.3],p2:[3.58,10.88]},{p1:[27.17,0],p2:[27.17,7.3]},{p1:[27.17,2.33],p2:[38.98,2.33]},{p1:[0,3.2],p2:[24.54,3.2]},{p1:[26.47,3.2],p2:[27.17,3.2]},{p1:[0,4.1],p2:[27.17,4.1]},{p1:[4,0],p2:[4,3.2]},{p1:[6.7,0],p2:[6.7,3.2]},{p1:[10.54,0],p2:[10.54,3.2]},{p1:[16.54,0],p2:[16.54,3.2]},{p1:[24.54,0],p2:[24.54,3.2]},{p1:[24.54,0],p2:[24.54,1.5]},{p1:[27.54,0],p2:[27.54,1.5]},{p1:[24.54,1.5],p2:[27.54,1.5]},{p1:[24.54,2.35],p2:[27.54,2.35]},{p1:[1.78,4.1],p2:[1.78,7.3]},{p1:[3.58,4.1],p2:[3.58,7.3]},{p1:[5.36,4.1],p2:[5.36,7.3]},{p1:[16.54,4.1],p2:[16.54,7.3]},{p1:[24.54,4.1],p2:[24.54,7.3]},{p1:[27.17,4.1],p2:[27.17,7.3]},{p1:[37.24,4.1],p2:[37.24,7.3]},{p1:[0,3.2],p2:[2.55,3.2]},{p1:[3.45,3.2],p2:[4,3.2]},{p1:[4,3.2],p2:[5.4,3.2]},{p1:[6.3,3.2],p2:[7.7,3.2]},{p1:[7.7,3.2],p2:[9.2,3.2]},{p1:[10.1,3.2],p2:[11.54,3.2]},{p1:[11.54,3.2],p2:[13.84,3.2]},{p1:[14.74,3.2],p2:[17.54,3.2]},{p1:[17.54,3.2],p2:[20.84,3.2]},{p1:[21.74,3.2],p2:[25.54,3.2]},{p1:[4.1,4.1],p2:[10.62,4.1]},{p1:[11.53,4.1],p2:[16.58,4.1]},{p1:[16.58,4.1],p2:[20.6,4.1]},{p1:[21.51,4.1],p2:[25.54,4.1]},{p1:[25.54,4.1],p2:[27.84,4.1]},{p1:[28.74,4.1],p2:[32.38,4.1]},{p1:[32.38,4.1],p2:[34.68,4.1]},{p1:[35.58,4.1],p2:[39.04,4.1]}],doors:[{room:"f3_hod",wallSide:"bottom",posX:2,width:1},{room:"f3_dept_lib",wallSide:"bottom",posX:5.35,width:1.4},{room:"f3_server",wallSide:"bottom",posX:8.12,width:.51},{room:"f3_server",wallSide:"bottom",posX:9.12,width:1.4},{room:"f3_tutorial",wallSide:"bottom",posX:13.54,width:1.4},{room:"f3_lab10",wallSide:"bottom",posX:20.54,width:1.4},{room:"f3_lab10",wallSide:"bottom",posX:23.68,width:.43},{room:"f3_lab7",wallSide:"top",posX:10.95,width:.91},{room:"f3_lab8",wallSide:"top",posX:20.54,width:.91},{room:"f3_women",wallSide:"top",posX:25.86,width:.9},{room:"f3_gents",wallSide:"top",posX:38.11,width:.9}],features:[{id:"f3_water_filter",name:"Water Filter",type:"utility",center:[24.8,3.65],size:{width:.6,depth:.6}}],wallHeight:3,wallThickness:.15,planSize:{width:38.98,height:10.88},floorMessages:[{id:"m1",type:"welcome",text:"WELCOME TO CSE DEPARTMENT",position:[2,3.65]},{id:"m2",type:"quote",text:"Code is Poetry 💻",position:[15,3.65]},{id:"m3",type:"utility",text:"LIFT ACCESS 🛗",position:[.89,4.1]}]},fA={floorId:"f4",floorNumber:4,floorName:"3rd Floor",corridorPolygon:[[0,3.2],[24.54,3.2],[24.54,2.35],[27.54,2.35],[27.54,3.2],[27.54,3.2],[38.98,3.2],[38.98,4.1],[27.17,4.1],[5.36,4.1],[5.36,7.3],[0,7.3],[0,4.1]],corridorColor:"#2ecc40",rooms:[{id:"f4_301",name:"Classroom 301",center:[3.35,1.6],connectedTo:["f4_wp_hall_301"]},{id:"f4_302",name:"Classroom 302",center:[8.62,1.6],connectedTo:["f4_wp_hall_302"]},{id:"f4_303",name:"Classroom 303",center:[17.54,1.6],connectedTo:["f4_wp_hall_303"]},{id:"f4_stairs_top",name:"Stairs (Top)",center:[26.04,1.1],connectedTo:["f4_wp_hall_stairs_top"]},{id:"f4_306",name:"Classroom 306",center:[33.15,3.65],connectedTo:["f4_wp_hall_306"]},{id:"f4_lift",name:"Lift",center:[.89,5.7],connectedTo:["f4_wp_hall_lift"]},{id:"f4_stairs_bot",name:"Stairs (Bot)",center:[3.57,5.7],connectedTo:["f4_wp_hall_stairs_bot"]},{id:"f4_304",name:"Classroom 304",center:[10.95,5.7],connectedTo:["f4_wp_hall_304"]},{id:"f4_305",name:"Classroom 305",center:[20.54,5.7],connectedTo:["f4_wp_hall_305"]},{id:"f4_women",name:"Ladies Toilet",center:[25.86,5.7],connectedTo:["f4_wp_hall_women"]},{id:"f4_gents",name:"Men Washroom",center:[38.11,5.7],connectedTo:["f4_wp_hall_gents"]}],waypoints:[{id:"f4_wp_hall_lift",position:[.89,3.65],connectedTo:["f4_wp_hall_stairs_bot"]},{id:"f4_wp_hall_stairs_bot",position:[3.57,3.65],connectedTo:["f4_wp_hall_lift","f4_wp_hall_301"]},{id:"f4_wp_hall_301",position:[3.35,3.65],connectedTo:["f4_wp_hall_stairs_bot","f4_wp_hall_302"]},{id:"f4_wp_hall_302",position:[8.62,3.65],connectedTo:["f4_wp_hall_301","f4_wp_hall_304"]},{id:"f4_wp_hall_304",position:[10.95,3.65],connectedTo:["f4_wp_hall_302","f4_wp_hall_303"]},{id:"f4_wp_hall_303",position:[17.54,3.65],connectedTo:["f4_wp_hall_304","f4_wp_hall_305"]},{id:"f4_wp_hall_305",position:[20.54,3.65],connectedTo:["f4_wp_hall_303","f4_wp_hall_stairs_top"]},{id:"f4_wp_hall_stairs_top",position:[26.04,3.65],connectedTo:["f4_wp_hall_305","f4_wp_hall_women"]},{id:"f4_wp_hall_women",position:[25.86,3.65],connectedTo:["f4_wp_hall_stairs_top","f4_wp_hall_306"]},{id:"f4_wp_hall_306",position:[33.15,3.65],connectedTo:["f4_wp_hall_women","f4_wp_hall_gents"]},{id:"f4_wp_hall_gents",position:[38.11,3.65],connectedTo:["f4_wp_hall_306"]}],walls:[{p1:[0,0],p2:[24.54,0]},{p1:[27.54,0],p2:[38.98,0]},{p1:[38.98,0],p2:[38.98,7.3]},{p1:[38.98,7.3],p2:[5.36,7.3]},{p1:[1.78,7.3],p2:[0,7.3]},{p1:[0,7.3],p2:[0,0]},{p1:[0,3.2],p2:[24.54,3.2]},{p1:[27.54,3.2],p2:[38.98,3.2]},{p1:[0,4.1],p2:[38.98,4.1]},{p1:[6.7,0],p2:[6.7,3.2]},{p1:[13.54,0],p2:[13.54,3.2]},{p1:[24.54,0],p2:[24.54,3.2]},{p1:[27.54,0],p2:[27.54,3.2]},{p1:[1.78,4.1],p2:[1.78,7.3]},{p1:[5.36,4.1],p2:[5.36,7.3]},{p1:[16.54,4.1],p2:[16.54,7.3]},{p1:[24.54,4.1],p2:[24.54,7.3]},{p1:[32.38,4.1],p2:[32.38,7.3]}],wallHeight:3,wallThickness:.15,floorMessages:[{id:"m1",type:"welcome",text:"3RD FLOOR CLASSROOMS",position:[2,3.65]},{id:"m2",type:"quote",text:"Knowledge is Power 📚",position:[15,3.65]}]},hA={floorId:"f5",floorNumber:5,floorName:"4th Floor (ENTC)",rooms:[{id:"f5_entc_hod",name:"ENTC HOD Cabin",center:[-22.5,-5.25],connectedTo:["f5_wp_hall_hod"]},{id:"f5_dept_lib",name:"Dept Library",center:[-16.5,-5.25],connectedTo:["f5_wp_hall_dlib"]},{id:"f5_tutorial",name:"Tutorial Room",center:[-10,-5.25],connectedTo:["f5_wp_hall_lab11"]},{id:"f5_lab11",name:"Lab 11",center:[-4,-5.25],connectedTo:["f5_wp_hall_lab11"]},{id:"f5_lab12",name:"Lab 12",center:[1.5,-5.25],connectedTo:["f5_wp_hall_lab12"]},{id:"f5_lab13",name:"Lab 13",center:[7,-5.25],connectedTo:["f5_wp_hall_lab14"]},{id:"f5_lab14",name:"Lab 14",center:[14.5,-5.25],connectedTo:["f5_wp_hall_lab14"]},{id:"f5_lift",name:"Lift",center:[-24,5.25],connectedTo:["f5_wp_hall_lift"]},{id:"f5_stairs_bot",name:"Stairs (Bot)",center:[-20,5.25],connectedTo:["f5_wp_hall_stairs_bot"]}],waypoints:[{id:"f5_wp_hall_lift",position:[-24,0],connectedTo:["f5_wp_hall_stairs_bot"]},{id:"f5_wp_hall_stairs_bot",position:[-20,0],connectedTo:["f5_wp_hall_lift","f5_wp_hall_hod"]},{id:"f5_wp_hall_hod",position:[-22.5,0],connectedTo:["f5_wp_hall_stairs_bot","f5_wp_hall_dlib"]},{id:"f5_wp_hall_dlib",position:[-16.5,0],connectedTo:["f5_wp_hall_hod","f5_wp_hall_lab11"]},{id:"f5_wp_hall_lab11",position:[-10,0],connectedTo:["f5_wp_hall_dlib","f5_wp_hall_lab12"]},{id:"f5_wp_hall_lab12",position:[1,0],connectedTo:["f5_wp_hall_lab11","f5_wp_hall_lab14"]},{id:"f5_wp_hall_lab14",position:[14.5,0],connectedTo:["f5_wp_hall_lab12"]}],walls:[{p1:[-26,-9],p2:[26,-9]},{p1:[26,-9],p2:[26,1.5]},{p1:[26,1.5],p2:[18,1.5]},{p1:[18,1.5],p2:[18,9]},{p1:[18,9],p2:[-26,9]},{p1:[-26,9],p2:[-26,-9]},{p1:[-26,-1.5],p2:[26,-1.5]},{p1:[-26,1.5],p2:[26,1.5]},{p1:[-19,-9],p2:[-19,-1.5]},{p1:[-14,-9],p2:[-14,-1.5]},{p1:[-6,-9],p2:[-6,-1.5]},{p1:[-2,-9],p2:[-2,-1.5]},{p1:[5,-9],p2:[5,-1.5]},{p1:[9,-9],p2:[9,-1.5]},{p1:[-22,1.5],p2:[-22,9]},{p1:[-18,1.5],p2:[-18,9]},{p1:[-20,1.5],p2:[-20,9]},{p1:[4,1.5],p2:[4,9]},{p1:[11,1.5],p2:[11,9]}],wallHeight:3,wallThickness:.2,floorMessages:[{id:"m1",type:"welcome",text:"WELCOME TO ENTC DEPT",position:[-24,2]},{id:"m2",type:"quote",text:"Connecting the World 📡",position:[0,0]}]},dA={floorId:"f6",floorNumber:6,floorName:"5th Floor",rooms:[{id:"f6_501",name:"Classroom 501",center:[-22.5,-5.25],connectedTo:["f6_wp_hall_501"]},{id:"f6_502",name:"Classroom 502",center:[-16.5,-5.25],connectedTo:["f6_wp_hall_502"]},{id:"f6_503",name:"Classroom 503",center:[-10,-5.25],connectedTo:["f6_wp_hall_503"]},{id:"f6_504",name:"Classroom 504",center:[-4,-5.25],connectedTo:["f6_wp_hall_503"]},{id:"f6_505",name:"Classroom 505",center:[1.5,-5.25],connectedTo:["f6_wp_hall_505"]},{id:"f6_lift",name:"Lift",center:[-24,5.25],connectedTo:["f6_wp_hall_lift"]},{id:"f6_stairs_bot",name:"Stairs (Bot)",center:[-20,5.25],connectedTo:["f6_wp_hall_stairs_bot"]}],waypoints:[{id:"f6_wp_hall_lift",position:[-24,0],connectedTo:["f6_wp_hall_stairs_bot"]},{id:"f6_wp_hall_stairs_bot",position:[-20,0],connectedTo:["f6_wp_hall_lift","f6_wp_hall_501"]},{id:"f6_wp_hall_501",position:[-22.5,0],connectedTo:["f6_wp_hall_stairs_bot","f6_wp_hall_502"]},{id:"f6_wp_hall_502",position:[-16.5,0],connectedTo:["f6_wp_hall_501","f6_wp_hall_503"]},{id:"f6_wp_hall_503",position:[-10,0],connectedTo:["f6_wp_hall_502","f6_wp_hall_505"]},{id:"f6_wp_hall_505",position:[1,0],connectedTo:["f6_wp_hall_503"]}],walls:[{p1:[-26,-9],p2:[26,-9]},{p1:[26,-9],p2:[26,1.5]},{p1:[26,1.5],p2:[18,1.5]},{p1:[18,1.5],p2:[18,9]},{p1:[18,9],p2:[-26,9]},{p1:[-26,9],p2:[-26,-9]},{p1:[-26,-1.5],p2:[26,-1.5]},{p1:[-26,1.5],p2:[26,1.5]},{p1:[-19,-9],p2:[-19,-1.5]},{p1:[-14,-9],p2:[-14,-1.5]},{p1:[-6,-9],p2:[-6,-1.5]},{p1:[-2,-9],p2:[-2,-1.5]},{p1:[5,-9],p2:[5,-1.5]},{p1:[9,-9],p2:[9,-1.5]},{p1:[-22,1.5],p2:[-22,9]},{p1:[-18,1.5],p2:[-18,9]},{p1:[-20,1.5],p2:[-20,9]},{p1:[4,1.5],p2:[4,9]},{p1:[11,1.5],p2:[11,9]}],wallHeight:3,wallThickness:.2,floorMessages:[{id:"m1",type:"welcome",text:"5TH FLOOR CLASSROOMS",position:[-24,2]},{id:"m2",type:"quote",text:"Reach for the Stars ✨",position:[0,0]}]},al=[{id:"f1",number:1,label:"Ground Floor"},{id:"f2",number:2,label:"1st Floor"},{id:"f3",number:3,label:"2nd Floor (CSE)"},{id:"f4",number:4,label:"3rd Floor"},{id:"f5",number:5,label:"4th Floor (ENTC)"},{id:"f6",number:6,label:"5th Floor"}],Wn=[lA,cA,uA,fA,hA,dA],Ld=[{name:"Main Lift",type:"lift",costPerFloor:5,floorWaypoints:{f1:"f1_wp_hall_lift",f2:"f2_wp_hall_lift",f3:"f3_wp_lift",f4:"f4_wp_hall_lift",f5:"f5_wp_hall_lift",f6:"f6_wp_hall_lift"}},{name:"Main Stairs (Bottom)",type:"stairs",costPerFloor:10,floorWaypoints:{f1:"f1_wp_hall_stairs_bot",f2:"f2_wp_hall_stairs_bot",f3:"f3_wp_stairs_bot",f4:"f4_wp_hall_stairs_bot",f5:"f5_wp_hall_stairs_bot",f6:"f6_wp_hall_stairs_bot"}},{name:"Side Stairs (Top)",type:"stairs",costPerFloor:10,floorWaypoints:{f1:"f1_wp_hall_gents",f2:"f2_wp_hall_stairs_top",f3:"f3_wp_stairs_top",f4:"f4_wp_hall_stairs_top",f5:"f5_wp_hall_lab14",f6:"f6_wp_hall_505"}}],pA={lift:"🛗",stairs:"🪜",ramp:"♿"};function mA({startRoomId:t,startFloorId:e,endRoomId:n,endFloorId:i,activeFloorId:r,pathSegments:s,onStartChange:o,onEndChange:a,onFloorChange:l,onFindPath:c,onClose:h}){var p,_;const f=Ve.useMemo(()=>Wn.map(v=>{var m;return{floorId:v.floorId,label:((m=al.find(u=>u.id===v.floorId))==null?void 0:m.label)??v.floorId,rooms:v.rooms.filter(u=>{var g;return((g=u.connectedTo)==null?void 0:g.length)>0&&!u.id.endsWith("_corridor")})}}),[]),d=e===i;return ce.jsxs("div",{className:"fixed top-4 left-1/2 -translate-x-1/2 z-20 bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl p-5 w-full max-w-sm border border-purple-500/30",children:[ce.jsx("button",{onClick:h,className:"absolute top-3 right-3 text-slate-400 hover:text-white transition-colors",children:ce.jsx(Gy,{className:"w-5 h-5"})}),ce.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[ce.jsx("div",{className:"bg-gradient-to-br from-purple-600 to-indigo-600 p-2 rounded-xl",children:ce.jsx(Wp,{className:"w-5 h-5 text-white"})}),ce.jsxs("div",{children:[ce.jsx("h1",{className:"text-lg font-bold text-white",children:"AR Navigation"}),ce.jsx("p",{className:"text-xs text-purple-300",children:"Multi-Floor System"})]})]}),ce.jsxs("div",{className:"mb-4",children:[ce.jsxs("label",{className:"flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1.5",children:[ce.jsx(Vp,{className:"w-3.5 h-3.5"})," Viewing Floor"]}),ce.jsx("div",{className:"grid grid-cols-3 gap-1",children:al.map(v=>ce.jsxs("button",{onClick:()=>l(v.id),className:`text-xs py-1.5 px-2 rounded-lg font-medium transition-all truncate ${r===v.id?"bg-purple-600 text-white shadow-lg shadow-purple-500/30":"bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"}`,children:["F",v.number]},v.id))})]}),ce.jsxs("div",{className:"space-y-3",children:[ce.jsxs("div",{children:[ce.jsxs("label",{className:"flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1.5",children:[ce.jsx(Gp,{className:"w-3.5 h-3.5 text-green-400"})," From"]}),ce.jsx("select",{value:e,onChange:v=>{const m=Wn.find(g=>g.floorId===v.target.value),u=m==null?void 0:m.rooms.find(g=>!g.id.endsWith("_corridor"));o(v.target.value,(u==null?void 0:u.id)??"")},className:"w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-xl text-white text-xs mb-1 focus:outline-none focus:ring-2 focus:ring-purple-500",children:f.map(v=>ce.jsx("option",{value:v.floorId,children:v.label},v.floorId))}),ce.jsx("select",{value:t,onChange:v=>o(e,v.target.value),className:"w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-xl text-white text-xs focus:outline-none focus:ring-2 focus:ring-purple-500",children:(p=f.find(v=>v.floorId===e))==null?void 0:p.rooms.map(v=>ce.jsx("option",{value:v.id,children:v.name},v.id))})]}),ce.jsxs("div",{className:"flex items-center gap-2",children:[ce.jsx("div",{className:"flex-1 h-px bg-slate-700"}),ce.jsx("div",{className:"flex items-center gap-1 text-xs text-purple-400",children:d?ce.jsx("span",{className:"text-slate-500",children:"same floor"}):ce.jsxs(ce.Fragment,{children:[ce.jsx(By,{className:"w-3 h-3"}),ce.jsx("span",{children:"cross-floor"}),ce.jsx(Hy,{className:"w-3 h-3"})]})}),ce.jsx("div",{className:"flex-1 h-px bg-slate-700"})]}),ce.jsxs("div",{children:[ce.jsxs("label",{className:"flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1.5",children:[ce.jsx(Gp,{className:"w-3.5 h-3.5 text-red-400"})," To"]}),ce.jsx("select",{value:i,onChange:v=>{const m=Wn.find(g=>g.floorId===v.target.value),u=m==null?void 0:m.rooms.find(g=>!g.id.endsWith("_corridor"));a(v.target.value,(u==null?void 0:u.id)??"")},className:"w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-xl text-white text-xs mb-1 focus:outline-none focus:ring-2 focus:ring-purple-500",children:f.map(v=>ce.jsx("option",{value:v.floorId,children:v.label},v.floorId))}),ce.jsx("select",{value:n,onChange:v=>a(i,v.target.value),className:"w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-xl text-white text-xs focus:outline-none focus:ring-2 focus:ring-purple-500",children:(_=f.find(v=>v.floorId===i))==null?void 0:_.rooms.map(v=>ce.jsx("option",{value:v.id,children:v.name},v.id))})]}),ce.jsxs("button",{onClick:c,className:"w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2",children:[ce.jsx(Wp,{className:"w-4 h-4"})," Find Path"]})]}),s.length>0&&ce.jsxs("div",{className:"mt-4 pt-4 border-t border-slate-700",children:[ce.jsxs("p",{className:"text-xs font-semibold text-slate-400 mb-2 flex items-center gap-1",children:[ce.jsx(Vp,{className:"w-3 h-3"})," Route (",s.length," floor",s.length>1?"s":"",")"]}),ce.jsx("div",{className:"space-y-1.5",children:s.map((v,m)=>{var g;const u=al.find(x=>x.id===v.floorId);return ce.jsxs("div",{children:[ce.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[ce.jsx("div",{className:`w-2 h-2 rounded-full flex-shrink-0 ${v.floorId===r?"bg-purple-400":"bg-slate-600"}`}),ce.jsx("span",{className:`font-medium ${v.floorId===r?"text-white":"text-slate-400"}`,children:(u==null?void 0:u.label)??v.floorId}),ce.jsxs("span",{className:"text-slate-600 ml-auto",children:[v.waypointIds.length," wp"]}),v.floorId===r&&ce.jsx("span",{className:"text-purple-400 text-[10px]",children:"●"})]}),v.transition&&ce.jsxs("div",{className:"ml-4 text-[11px] text-amber-300 mt-0.5",children:[pA[v.transition.type]," ",v.transition.name,ce.jsxs("span",{className:"text-slate-500",children:[" → ",(g=al.find(x=>x.id===v.transition.toFloor))==null?void 0:g.label]})]})]},m)})})]})]})}function _A(t){const e=[];for(const n of t){const i=parseInt(n.floorId.replace("f",""),10);for(const r of n.waypoints)e.push({id:r.id,position:[r.position[0],r.position[1],i],connectedTo:[...r.connectedTo],floorId:n.floorId})}for(const n of Ld){const i=Object.keys(n.floorWaypoints);for(let r=0;r<i.length;r++){const s=i[r],o=n.floorWaypoints[s],a=e.find(l=>l.id===o);if(a)for(let l=0;l<i.length;l++){if(r===l)continue;const c=i[l],h=n.floorWaypoints[c];e.find(f=>f.id===h)&&(a.connectedTo.includes(h)||a.connectedTo.push(h))}}}return e}function Du(t,e){const n=t.position[0]-e.position[0],i=t.position[1]-e.position[1],r=(t.position[2]-e.position[2])*15;return Math.sqrt(n*n+i*i+r*r)}function gA(t,e,n){const i=[t],r={},s={},o={},a=n.find(c=>c.id===e);if(!a)return[];for(const c of n)s[c.id]=1/0,o[c.id]=1/0;s[t]=0;const l=n.find(c=>c.id===t);for(o[t]=l?Du(l,a):1/0;i.length>0;){i.sort((p,_)=>o[p]-o[_]);const c=i.shift();if(c===e){const p=[c];let _=c;for(;r[_];)_=r[_],p.unshift(_);return p}const h=n.find(p=>p.id===c),f=r[c],d=f?n.find(p=>p.id===f):null;for(const p of h.connectedTo){const _=n.find(u=>u.id===p);if(!_)continue;let v=Du(h,_);if(h.floorId!==_.floorId){const u=Ld.find(g=>Object.values(g.floorWaypoints).includes(c)&&Object.values(g.floorWaypoints).includes(p));v+=(u==null?void 0:u.costPerFloor)??20}if(d){const u=h.position[0]-d.position[0],g=h.position[1]-d.position[1],x=_.position[0]-h.position[0],y=_.position[1]-h.position[1],A=Math.sqrt(u*u+g*g)||1,C=Math.sqrt(x*x+y*y)||1;(u*x+g*y)/(A*C)<.9&&(v+=15)}const m=s[c]+v;m<(s[p]??1/0)&&(r[p]=c,s[p]=m,o[p]=m+Du(_,a),i.includes(p)||i.push(p))}}return[]}function vA(t,e,n){let i="",r="",s="",o="";for(const p of n){const _=p.rooms.find(m=>m.id===t);_!=null&&_.connectedTo[0]&&(i=_.connectedTo[0],s=p.floorId);const v=p.rooms.find(m=>m.id===e);v!=null&&v.connectedTo[0]&&(r=v.connectedTo[0],o=p.floorId)}if(!i||!r)return[];const a=_A(n),l=gA(i,r,a);if(l.length===0)return[];let c=null,h=null;for(const p of n){const _=p.rooms.find(m=>m.id===t);_&&(c=_.center);const v=p.rooms.find(m=>m.id===e);v&&(h=v.center)}const f=[];let d=null;for(let p=0;p<l.length;p++){const _=l[p],v=a.find(m=>m.id===_);if(!d||d.floorId!==v.floorId){let m;if(d&&p>0){const u=l[p-1],g=Ld.find(x=>Object.values(x.floorWaypoints).includes(u)&&Object.values(x.floorWaypoints).includes(_));g&&(m={type:g.type,name:g.name,fromFloor:d.floorId,toFloor:v.floorId}),d&&(d.transition=m)}if(d={floorId:v.floorId,waypointIds:[_],positions:[[v.position[0],v.position[1]]]},f.length===0&&c){const u=c[0]-v.position[0],g=c[1]-v.position[1],x=Math.sqrt(u*u+g*g)||1,y=[c[0]+u/x*1.5,c[1]+g/x*1.5];d.positions.unshift(c),d.positions.unshift(y),d.positions=[y,c,[c[0],v.position[1]],[v.position[0],v.position[1]]]}f.push(d)}else d.waypointIds.push(_),d.positions.push([v.position[0],v.position[1]])}if(f.length>0&&h){const p=f[f.length-1],_=p.positions[p.positions.length-1];p.positions.push([h[0],_[1]]),p.positions.push(h)}return f.length>0&&(f[0]._startFloor=s,f[f.length-1]._endFloor=o),f}function xA(){var b,E,M,L,F,W,J;const t="f3",e=((E=(b=Wn.find(z=>z.floorId===t))==null?void 0:b.rooms.find(z=>!z.id.endsWith("_corridor")))==null?void 0:E.id)??"",n=((L=(M=Wn.find(z=>z.floorId===t))==null?void 0:M.rooms.filter(z=>!z.id.endsWith("_corridor"))[1])==null?void 0:L.id)??"",[i,r]=Ve.useState(t),[s,o]=Ve.useState(e),[a,l]=Ve.useState(t),[c,h]=Ve.useState(n),[f,d]=Ve.useState(t),[p,_]=Ve.useState([]),[v,m]=Ve.useState(!1),[u,g]=Ve.useState(!1),x=Ve.useCallback(()=>{const z=vA(s,c,Wn);_(z),z.length>0&&d(z[0].floorId),g(!1)},[s,c]),y=(z,j)=>{r(z),o(j)},A=(z,j)=>{l(z),h(j)},C=Wn.find(z=>z.floorId===f),T=p.find(z=>z.floorId===f)??null;return ce.jsxs("main",{children:[!v&&!u&&ce.jsx("button",{onClick:()=>g(!0),className:"fixed top-6 left-6 z-20 bg-slate-900/90 border border-purple-500/30 p-3 rounded-full shadow-lg text-white hover:bg-slate-800 transition-colors","aria-label":"Open navigation menu",children:ce.jsx(Vy,{className:"w-6 h-6"})}),!v&&!u&&ce.jsx("div",{className:"fixed top-6 left-20 z-20 bg-slate-900/90 border border-purple-500/30 px-3 py-2 rounded-full text-xs text-purple-300 font-medium",children:Wn.find(z=>z.floorId===f)&&ce.jsxs(ce.Fragment,{children:["Viewing: ",ce.jsx("span",{className:"text-white font-bold",children:((F=Wn.find(z=>z.floorId===f))==null?void 0:F.floorName)||f})]})}),!v&&u&&ce.jsx(mA,{startRoomId:s,startFloorId:i,endRoomId:c,endFloorId:a,activeFloorId:f,pathSegments:p,onStartChange:y,onEndChange:A,onFloorChange:d,onFindPath:x,onClose:()=>g(!1)}),(T==null?void 0:T.transition)&&!u&&ce.jsxs("div",{className:"fixed bottom-24 left-1/2 -translate-x-1/2 z-20 w-[90%] max-w-xs bg-slate-900/95 border border-amber-500/50 p-4 rounded-2xl shadow-2xl backdrop-blur-md",children:[ce.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[ce.jsx("div",{className:"bg-amber-500/20 p-2 rounded-lg",children:ce.jsx("span",{className:"text-xl",children:T.transition.type==="lift"?"🛗":T.transition.type==="stairs"?"🪜":"♿"})}),ce.jsxs("div",{children:[ce.jsx("p",{className:"text-xs font-bold text-amber-400 uppercase tracking-wider",children:"Next Step"}),ce.jsxs("p",{className:"text-sm text-white font-medium",children:["Take the ",T.transition.name," to ",((W=Wn.find(z=>{var j;return z.floorId===((j=T.transition)==null?void 0:j.toFloor)}))==null?void 0:W.floorName)||T.transition.toFloor]})]})]}),ce.jsxs("button",{onClick:()=>d(T.transition.toFloor),className:"w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-2 rounded-xl transition-colors text-sm shadow-lg shadow-amber-500/20",children:["Switch to ",((J=Wn.find(z=>{var j;return z.floorId===((j=T.transition)==null?void 0:j.toFloor)}))==null?void 0:J.floorName.split(" ")[0])||"Next"," Floor"]})]}),C&&ce.jsx(aA,{floorData:C,activeSegment:T,startRoomId:i===f?s:null,endRoomId:a===f?c:null,onSessionStateChange:m,showARButton:!u,showUIView:!u})]})}m0(document.getElementById("root")).render(ce.jsx(Ve.StrictMode,{children:ce.jsx(xA,{})}));
