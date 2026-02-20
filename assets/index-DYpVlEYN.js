(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var r_={exports:{}},oc={},s_={exports:{}},Je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var da=Symbol.for("react.element"),hv=Symbol.for("react.portal"),dv=Symbol.for("react.fragment"),pv=Symbol.for("react.strict_mode"),mv=Symbol.for("react.profiler"),_v=Symbol.for("react.provider"),gv=Symbol.for("react.context"),vv=Symbol.for("react.forward_ref"),xv=Symbol.for("react.suspense"),yv=Symbol.for("react.memo"),Sv=Symbol.for("react.lazy"),Id=Symbol.iterator;function Mv(t){return t===null||typeof t!="object"?null:(t=Id&&t[Id]||t["@@iterator"],typeof t=="function"?t:null)}var o_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},a_=Object.assign,l_={};function qs(t,e,n){this.props=t,this.context=e,this.refs=l_,this.updater=n||o_}qs.prototype.isReactComponent={};qs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function c_(){}c_.prototype=qs.prototype;function xh(t,e,n){this.props=t,this.context=e,this.refs=l_,this.updater=n||o_}var yh=xh.prototype=new c_;yh.constructor=xh;a_(yh,qs.prototype);yh.isPureReactComponent=!0;var Ud=Array.isArray,u_=Object.prototype.hasOwnProperty,Sh={current:null},f_={key:!0,ref:!0,__self:!0,__source:!0};function h_(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)u_.call(e,i)&&!f_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:da,type:t,key:s,ref:o,props:r,_owner:Sh.current}}function Ev(t,e){return{$$typeof:da,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Mh(t){return typeof t=="object"&&t!==null&&t.$$typeof===da}function wv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Fd=/\/+/g;function Ac(t,e){return typeof t=="object"&&t!==null&&t.key!=null?wv(""+t.key):e.toString(36)}function ul(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case da:case hv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Ac(o,0):i,Ud(r)?(n="",t!=null&&(n=t.replace(Fd,"$&/")+"/"),ul(r,e,n,"",function(c){return c})):r!=null&&(Mh(r)&&(r=Ev(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Fd,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Ud(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Ac(s,a);o+=ul(s,e,n,l,r)}else if(l=Mv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Ac(s,a++),o+=ul(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ya(t,e,n){if(t==null)return t;var i=[],r=0;return ul(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Tv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nn={current:null},fl={transition:null},Av={ReactCurrentDispatcher:nn,ReactCurrentBatchConfig:fl,ReactCurrentOwner:Sh};function d_(){throw Error("act(...) is not supported in production builds of React.")}Je.Children={map:ya,forEach:function(t,e,n){ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ya(t,function(){e++}),e},toArray:function(t){return ya(t,function(e){return e})||[]},only:function(t){if(!Mh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Je.Component=qs;Je.Fragment=dv;Je.Profiler=mv;Je.PureComponent=xh;Je.StrictMode=pv;Je.Suspense=xv;Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Av;Je.act=d_;Je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=a_({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Sh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)u_.call(e,l)&&!f_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:da,type:t.type,key:r,ref:s,props:i,_owner:o}};Je.createContext=function(t){return t={$$typeof:gv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:_v,_context:t},t.Consumer=t};Je.createElement=h_;Je.createFactory=function(t){var e=h_.bind(null,t);return e.type=t,e};Je.createRef=function(){return{current:null}};Je.forwardRef=function(t){return{$$typeof:vv,render:t}};Je.isValidElement=Mh;Je.lazy=function(t){return{$$typeof:Sv,_payload:{_status:-1,_result:t},_init:Tv}};Je.memo=function(t,e){return{$$typeof:yv,type:t,compare:e===void 0?null:e}};Je.startTransition=function(t){var e=fl.transition;fl.transition={};try{t()}finally{fl.transition=e}};Je.unstable_act=d_;Je.useCallback=function(t,e){return nn.current.useCallback(t,e)};Je.useContext=function(t){return nn.current.useContext(t)};Je.useDebugValue=function(){};Je.useDeferredValue=function(t){return nn.current.useDeferredValue(t)};Je.useEffect=function(t,e){return nn.current.useEffect(t,e)};Je.useId=function(){return nn.current.useId()};Je.useImperativeHandle=function(t,e,n){return nn.current.useImperativeHandle(t,e,n)};Je.useInsertionEffect=function(t,e){return nn.current.useInsertionEffect(t,e)};Je.useLayoutEffect=function(t,e){return nn.current.useLayoutEffect(t,e)};Je.useMemo=function(t,e){return nn.current.useMemo(t,e)};Je.useReducer=function(t,e,n){return nn.current.useReducer(t,e,n)};Je.useRef=function(t){return nn.current.useRef(t)};Je.useState=function(t){return nn.current.useState(t)};Je.useSyncExternalStore=function(t,e,n){return nn.current.useSyncExternalStore(t,e,n)};Je.useTransition=function(){return nn.current.useTransition()};Je.version="18.3.1";s_.exports=Je;var He=s_.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rv=He,Cv=Symbol.for("react.element"),bv=Symbol.for("react.fragment"),Pv=Object.prototype.hasOwnProperty,Lv=Rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dv={key:!0,ref:!0,__self:!0,__source:!0};function p_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Pv.call(e,i)&&!Dv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Cv,type:t,key:s,ref:o,props:r,_owner:Lv.current}}oc.Fragment=bv;oc.jsx=p_;oc.jsxs=p_;r_.exports=oc;var he=r_.exports,m_={exports:{}},En={},__={exports:{}},g_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,Q){var ie=I.length;I.push(Q);e:for(;0<ie;){var Se=ie-1>>>1,Le=I[Se];if(0<r(Le,Q))I[Se]=Q,I[ie]=Le,ie=Se;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var Q=I[0],ie=I.pop();if(ie!==Q){I[0]=ie;e:for(var Se=0,Le=I.length,Xe=Le>>>1;Se<Xe;){var Ze=2*(Se+1)-1,qe=I[Ze],ee=Ze+1,oe=I[ee];if(0>r(qe,ie))ee<Le&&0>r(oe,qe)?(I[Se]=oe,I[ee]=ie,Se=ee):(I[Se]=qe,I[Ze]=ie,Se=Ze);else if(ee<Le&&0>r(oe,ie))I[Se]=oe,I[ee]=ie,Se=ee;else break e}}return Q}function r(I,Q){var ie=I.sortIndex-Q.sortIndex;return ie!==0?ie:I.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,f=null,d=3,p=!1,_=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(I){for(var Q=n(c);Q!==null;){if(Q.callback===null)i(c);else if(Q.startTime<=I)i(c),Q.sortIndex=Q.expirationTime,e(l,Q);else break;Q=n(c)}}function y(I){if(v=!1,x(I),!_)if(n(l)!==null)_=!0,X(A);else{var Q=n(c);Q!==null&&ne(y,Q.startTime-I)}}function A(I,Q){_=!1,v&&(v=!1,u(b),b=-1),p=!0;var ie=d;try{for(x(Q),f=n(l);f!==null&&(!(f.expirationTime>Q)||I&&!L());){var Se=f.callback;if(typeof Se=="function"){f.callback=null,d=f.priorityLevel;var Le=Se(f.expirationTime<=Q);Q=t.unstable_now(),typeof Le=="function"?f.callback=Le:f===n(l)&&i(l),x(Q)}else i(l);f=n(l)}if(f!==null)var Xe=!0;else{var Ze=n(c);Ze!==null&&ne(y,Ze.startTime-Q),Xe=!1}return Xe}finally{f=null,d=ie,p=!1}}var C=!1,T=null,b=-1,E=5,M=-1;function L(){return!(t.unstable_now()-M<E)}function F(){if(T!==null){var I=t.unstable_now();M=I;var Q=!0;try{Q=T(!0,I)}finally{Q?W():(C=!1,T=null)}}else C=!1}var W;if(typeof g=="function")W=function(){g(F)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,B=J.port2;J.port1.onmessage=F,W=function(){B.postMessage(null)}}else W=function(){m(F,0)};function X(I){T=I,C||(C=!0,W())}function ne(I,Q){b=m(function(){I(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,X(A))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(d){case 1:case 2:case 3:var Q=3;break;default:Q=d}var ie=d;d=Q;try{return I()}finally{d=ie}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,Q){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var ie=d;d=I;try{return Q()}finally{d=ie}},t.unstable_scheduleCallback=function(I,Q,ie){var Se=t.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?Se+ie:Se):ie=Se,I){case 1:var Le=-1;break;case 2:Le=250;break;case 5:Le=1073741823;break;case 4:Le=1e4;break;default:Le=5e3}return Le=ie+Le,I={id:h++,callback:Q,priorityLevel:I,startTime:ie,expirationTime:Le,sortIndex:-1},ie>Se?(I.sortIndex=ie,e(c,I),n(l)===null&&I===n(c)&&(v?(u(b),b=-1):v=!0,ne(y,ie-Se))):(I.sortIndex=Le,e(l,I),_||p||(_=!0,X(A))),I},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(I){var Q=d;return function(){var ie=d;d=Q;try{return I.apply(this,arguments)}finally{d=ie}}}})(g_);__.exports=g_;var Nv=__.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iv=He,Mn=Nv;function _e(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v_=new Set,Ho={};function Vr(t,e){Us(t,e),Us(t+"Capture",e)}function Us(t,e){for(Ho[t]=e,t=0;t<e.length;t++)v_.add(e[t])}var Ri=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uu=Object.prototype.hasOwnProperty,Uv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Od={},kd={};function Fv(t){return Uu.call(kd,t)?!0:Uu.call(Od,t)?!1:Uv.test(t)?kd[t]=!0:(Od[t]=!0,!1)}function Ov(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function kv(t,e,n,i){if(e===null||typeof e>"u"||Ov(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Vt[t]=new rn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Vt[e]=new rn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Vt[t]=new rn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Vt[t]=new rn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Vt[t]=new rn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Vt[t]=new rn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Vt[t]=new rn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Vt[t]=new rn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Vt[t]=new rn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Eh=/[\-:]([a-z])/g;function wh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Eh,wh);Vt[e]=new rn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Eh,wh);Vt[e]=new rn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Eh,wh);Vt[e]=new rn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Vt[t]=new rn(t,1,!1,t.toLowerCase(),null,!1,!1)});Vt.xlinkHref=new rn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Vt[t]=new rn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Th(t,e,n,i){var r=Vt.hasOwnProperty(e)?Vt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(kv(e,n,r,i)&&(n=null),i||r===null?Fv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Li=Iv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sa=Symbol.for("react.element"),fs=Symbol.for("react.portal"),hs=Symbol.for("react.fragment"),Ah=Symbol.for("react.strict_mode"),Fu=Symbol.for("react.profiler"),x_=Symbol.for("react.provider"),y_=Symbol.for("react.context"),Rh=Symbol.for("react.forward_ref"),Ou=Symbol.for("react.suspense"),ku=Symbol.for("react.suspense_list"),Ch=Symbol.for("react.memo"),Bi=Symbol.for("react.lazy"),S_=Symbol.for("react.offscreen"),zd=Symbol.iterator;function oo(t){return t===null||typeof t!="object"?null:(t=zd&&t[zd]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Object.assign,Rc;function So(t){if(Rc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Rc=e&&e[1]||""}return`
`+Rc+t}var Cc=!1;function bc(t,e){if(!t||Cc)return"";Cc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Cc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?So(t):""}function zv(t){switch(t.tag){case 5:return So(t.type);case 16:return So("Lazy");case 13:return So("Suspense");case 19:return So("SuspenseList");case 0:case 2:case 15:return t=bc(t.type,!1),t;case 11:return t=bc(t.type.render,!1),t;case 1:return t=bc(t.type,!0),t;default:return""}}function zu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hs:return"Fragment";case fs:return"Portal";case Fu:return"Profiler";case Ah:return"StrictMode";case Ou:return"Suspense";case ku:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case y_:return(t.displayName||"Context")+".Consumer";case x_:return(t._context.displayName||"Context")+".Provider";case Rh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ch:return e=t.displayName||null,e!==null?e:zu(t.type)||"Memo";case Bi:e=t._payload,t=t._init;try{return zu(t(e))}catch{}}return null}function Bv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zu(e);case 8:return e===Ah?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function sr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function M_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Hv(t){var e=M_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ma(t){t._valueTracker||(t._valueTracker=Hv(t))}function E_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=M_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Cl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bu(t,e){var n=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=sr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function w_(t,e){e=e.checked,e!=null&&Th(t,"checked",e,!1)}function Hu(t,e){w_(t,e);var n=sr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vu(t,e.type,sr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vu(t,e,n){(e!=="number"||Cl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Mo=Array.isArray;function As(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+sr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Gu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(_e(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(_e(92));if(Mo(n)){if(1<n.length)throw Error(_e(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:sr(n)}}function T_(t,e){var n=sr(e.value),i=sr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Gd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function A_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?A_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ea,R_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ea=Ea||document.createElement("div"),Ea.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ea.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Vo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vv=["Webkit","ms","Moz","O"];Object.keys(Ro).forEach(function(t){Vv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ro[e]=Ro[t]})});function C_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ro.hasOwnProperty(t)&&Ro[t]?(""+e).trim():e+"px"}function b_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=C_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Gv=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xu(t,e){if(e){if(Gv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(_e(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(_e(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(_e(61))}if(e.style!=null&&typeof e.style!="object")throw Error(_e(62))}}function ju(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yu=null;function bh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qu=null,Rs=null,Cs=null;function Wd(t){if(t=_a(t)){if(typeof qu!="function")throw Error(_e(280));var e=t.stateNode;e&&(e=fc(e),qu(t.stateNode,t.type,e))}}function P_(t){Rs?Cs?Cs.push(t):Cs=[t]:Rs=t}function L_(){if(Rs){var t=Rs,e=Cs;if(Cs=Rs=null,Wd(t),e)for(t=0;t<e.length;t++)Wd(e[t])}}function D_(t,e){return t(e)}function N_(){}var Pc=!1;function I_(t,e,n){if(Pc)return t(e,n);Pc=!0;try{return D_(t,e,n)}finally{Pc=!1,(Rs!==null||Cs!==null)&&(N_(),L_())}}function Go(t,e){var n=t.stateNode;if(n===null)return null;var i=fc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(_e(231,e,typeof n));return n}var $u=!1;if(Ri)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){$u=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{$u=!1}function Wv(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Co=!1,bl=null,Pl=!1,Ku=null,Xv={onError:function(t){Co=!0,bl=t}};function jv(t,e,n,i,r,s,o,a,l){Co=!1,bl=null,Wv.apply(Xv,arguments)}function Yv(t,e,n,i,r,s,o,a,l){if(jv.apply(this,arguments),Co){if(Co){var c=bl;Co=!1,bl=null}else throw Error(_e(198));Pl||(Pl=!0,Ku=c)}}function Gr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function U_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Xd(t){if(Gr(t)!==t)throw Error(_e(188))}function qv(t){var e=t.alternate;if(!e){if(e=Gr(t),e===null)throw Error(_e(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Xd(r),t;if(s===i)return Xd(r),e;s=s.sibling}throw Error(_e(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(_e(189))}}if(n.alternate!==i)throw Error(_e(190))}if(n.tag!==3)throw Error(_e(188));return n.stateNode.current===n?t:e}function F_(t){return t=qv(t),t!==null?O_(t):null}function O_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=O_(t);if(e!==null)return e;t=t.sibling}return null}var k_=Mn.unstable_scheduleCallback,jd=Mn.unstable_cancelCallback,$v=Mn.unstable_shouldYield,Kv=Mn.unstable_requestPaint,Ct=Mn.unstable_now,Zv=Mn.unstable_getCurrentPriorityLevel,Ph=Mn.unstable_ImmediatePriority,z_=Mn.unstable_UserBlockingPriority,Ll=Mn.unstable_NormalPriority,Jv=Mn.unstable_LowPriority,B_=Mn.unstable_IdlePriority,ac=null,li=null;function Qv(t){if(li&&typeof li.onCommitFiberRoot=="function")try{li.onCommitFiberRoot(ac,t,void 0,(t.current.flags&128)===128)}catch{}}var $n=Math.clz32?Math.clz32:nx,ex=Math.log,tx=Math.LN2;function nx(t){return t>>>=0,t===0?32:31-(ex(t)/tx|0)|0}var wa=64,Ta=4194304;function Eo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Dl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Eo(a):(s&=o,s!==0&&(i=Eo(s)))}else o=n&~r,o!==0?i=Eo(o):s!==0&&(i=Eo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-$n(e),r=1<<n,i|=t[n],e&=~r;return i}function ix(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-$n(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=ix(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Zu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function H_(){var t=wa;return wa<<=1,!(wa&4194240)&&(wa=64),t}function Lc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function pa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$n(e),t[e]=n}function sx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-$n(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Lh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-$n(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ot=0;function V_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var G_,Dh,W_,X_,j_,Ju=!1,Aa=[],$i=null,Ki=null,Zi=null,Wo=new Map,Xo=new Map,Gi=[],ox="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yd(t,e){switch(t){case"focusin":case"focusout":$i=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":Zi=null;break;case"pointerover":case"pointerout":Wo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xo.delete(e.pointerId)}}function lo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=_a(e),e!==null&&Dh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function ax(t,e,n,i,r){switch(e){case"focusin":return $i=lo($i,t,e,n,i,r),!0;case"dragenter":return Ki=lo(Ki,t,e,n,i,r),!0;case"mouseover":return Zi=lo(Zi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Wo.set(s,lo(Wo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Xo.set(s,lo(Xo.get(s)||null,t,e,n,i,r)),!0}return!1}function Y_(t){var e=Tr(t.target);if(e!==null){var n=Gr(e);if(n!==null){if(e=n.tag,e===13){if(e=U_(n),e!==null){t.blockedOn=e,j_(t.priority,function(){W_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Qu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Yu=i,n.target.dispatchEvent(i),Yu=null}else return e=_a(n),e!==null&&Dh(e),t.blockedOn=n,!1;e.shift()}return!0}function qd(t,e,n){hl(t)&&n.delete(e)}function lx(){Ju=!1,$i!==null&&hl($i)&&($i=null),Ki!==null&&hl(Ki)&&(Ki=null),Zi!==null&&hl(Zi)&&(Zi=null),Wo.forEach(qd),Xo.forEach(qd)}function co(t,e){t.blockedOn===e&&(t.blockedOn=null,Ju||(Ju=!0,Mn.unstable_scheduleCallback(Mn.unstable_NormalPriority,lx)))}function jo(t){function e(r){return co(r,t)}if(0<Aa.length){co(Aa[0],t);for(var n=1;n<Aa.length;n++){var i=Aa[n];i.blockedOn===t&&(i.blockedOn=null)}}for($i!==null&&co($i,t),Ki!==null&&co(Ki,t),Zi!==null&&co(Zi,t),Wo.forEach(e),Xo.forEach(e),n=0;n<Gi.length;n++)i=Gi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Gi.length&&(n=Gi[0],n.blockedOn===null);)Y_(n),n.blockedOn===null&&Gi.shift()}var bs=Li.ReactCurrentBatchConfig,Nl=!0;function cx(t,e,n,i){var r=ot,s=bs.transition;bs.transition=null;try{ot=1,Nh(t,e,n,i)}finally{ot=r,bs.transition=s}}function ux(t,e,n,i){var r=ot,s=bs.transition;bs.transition=null;try{ot=4,Nh(t,e,n,i)}finally{ot=r,bs.transition=s}}function Nh(t,e,n,i){if(Nl){var r=Qu(t,e,n,i);if(r===null)Hc(t,e,i,Il,n),Yd(t,i);else if(ax(r,t,e,n,i))i.stopPropagation();else if(Yd(t,i),e&4&&-1<ox.indexOf(t)){for(;r!==null;){var s=_a(r);if(s!==null&&G_(s),s=Qu(t,e,n,i),s===null&&Hc(t,e,i,Il,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Hc(t,e,i,null,n)}}var Il=null;function Qu(t,e,n,i){if(Il=null,t=bh(i),t=Tr(t),t!==null)if(e=Gr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=U_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Il=t,null}function q_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zv()){case Ph:return 1;case z_:return 4;case Ll:case Jv:return 16;case B_:return 536870912;default:return 16}default:return 16}}var ji=null,Ih=null,dl=null;function $_(){if(dl)return dl;var t,e=Ih,n=e.length,i,r="value"in ji?ji.value:ji.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return dl=r.slice(t,1<i?1-i:void 0)}function pl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ra(){return!0}function $d(){return!1}function wn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ra:$d,this.isPropagationStopped=$d,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ra)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ra)},persist:function(){},isPersistent:Ra}),e}var $s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uh=wn($s),ma=Et({},$s,{view:0,detail:0}),fx=wn(ma),Dc,Nc,uo,lc=Et({},ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==uo&&(uo&&t.type==="mousemove"?(Dc=t.screenX-uo.screenX,Nc=t.screenY-uo.screenY):Nc=Dc=0,uo=t),Dc)},movementY:function(t){return"movementY"in t?t.movementY:Nc}}),Kd=wn(lc),hx=Et({},lc,{dataTransfer:0}),dx=wn(hx),px=Et({},ma,{relatedTarget:0}),Ic=wn(px),mx=Et({},$s,{animationName:0,elapsedTime:0,pseudoElement:0}),_x=wn(mx),gx=Et({},$s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vx=wn(gx),xx=Et({},$s,{data:0}),Zd=wn(xx),yx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ex(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Mx[t])?!!e[t]:!1}function Fh(){return Ex}var wx=Et({},ma,{key:function(t){if(t.key){var e=yx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Sx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fh,charCode:function(t){return t.type==="keypress"?pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Tx=wn(wx),Ax=Et({},lc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jd=wn(Ax),Rx=Et({},ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fh}),Cx=wn(Rx),bx=Et({},$s,{propertyName:0,elapsedTime:0,pseudoElement:0}),Px=wn(bx),Lx=Et({},lc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Dx=wn(Lx),Nx=[9,13,27,32],Oh=Ri&&"CompositionEvent"in window,bo=null;Ri&&"documentMode"in document&&(bo=document.documentMode);var Ix=Ri&&"TextEvent"in window&&!bo,K_=Ri&&(!Oh||bo&&8<bo&&11>=bo),Qd=" ",ep=!1;function Z_(t,e){switch(t){case"keyup":return Nx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function J_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ds=!1;function Ux(t,e){switch(t){case"compositionend":return J_(e);case"keypress":return e.which!==32?null:(ep=!0,Qd);case"textInput":return t=e.data,t===Qd&&ep?null:t;default:return null}}function Fx(t,e){if(ds)return t==="compositionend"||!Oh&&Z_(t,e)?(t=$_(),dl=Ih=ji=null,ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return K_&&e.locale!=="ko"?null:e.data;default:return null}}var Ox={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ox[t.type]:e==="textarea"}function Q_(t,e,n,i){P_(i),e=Ul(e,"onChange"),0<e.length&&(n=new Uh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Po=null,Yo=null;function kx(t){ug(t,0)}function cc(t){var e=_s(t);if(E_(e))return t}function zx(t,e){if(t==="change")return e}var eg=!1;if(Ri){var Uc;if(Ri){var Fc="oninput"in document;if(!Fc){var np=document.createElement("div");np.setAttribute("oninput","return;"),Fc=typeof np.oninput=="function"}Uc=Fc}else Uc=!1;eg=Uc&&(!document.documentMode||9<document.documentMode)}function ip(){Po&&(Po.detachEvent("onpropertychange",tg),Yo=Po=null)}function tg(t){if(t.propertyName==="value"&&cc(Yo)){var e=[];Q_(e,Yo,t,bh(t)),I_(kx,e)}}function Bx(t,e,n){t==="focusin"?(ip(),Po=e,Yo=n,Po.attachEvent("onpropertychange",tg)):t==="focusout"&&ip()}function Hx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cc(Yo)}function Vx(t,e){if(t==="click")return cc(e)}function Gx(t,e){if(t==="input"||t==="change")return cc(e)}function Wx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jn=typeof Object.is=="function"?Object.is:Wx;function qo(t,e){if(Jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Uu.call(e,r)||!Jn(t[r],e[r]))return!1}return!0}function rp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sp(t,e){var n=rp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rp(n)}}function ng(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ng(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ig(){for(var t=window,e=Cl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Cl(t.document)}return e}function kh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Xx(t){var e=ig(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ng(n.ownerDocument.documentElement,n)){if(i!==null&&kh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=sp(n,s);var o=sp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jx=Ri&&"documentMode"in document&&11>=document.documentMode,ps=null,ef=null,Lo=null,tf=!1;function op(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;tf||ps==null||ps!==Cl(i)||(i=ps,"selectionStart"in i&&kh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Lo&&qo(Lo,i)||(Lo=i,i=Ul(ef,"onSelect"),0<i.length&&(e=new Uh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ps)))}function Ca(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ms={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionend:Ca("Transition","TransitionEnd")},Oc={},rg={};Ri&&(rg=document.createElement("div").style,"AnimationEvent"in window||(delete ms.animationend.animation,delete ms.animationiteration.animation,delete ms.animationstart.animation),"TransitionEvent"in window||delete ms.transitionend.transition);function uc(t){if(Oc[t])return Oc[t];if(!ms[t])return t;var e=ms[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in rg)return Oc[t]=e[n];return t}var sg=uc("animationend"),og=uc("animationiteration"),ag=uc("animationstart"),lg=uc("transitionend"),cg=new Map,ap="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cr(t,e){cg.set(t,e),Vr(e,[t])}for(var kc=0;kc<ap.length;kc++){var zc=ap[kc],Yx=zc.toLowerCase(),qx=zc[0].toUpperCase()+zc.slice(1);cr(Yx,"on"+qx)}cr(sg,"onAnimationEnd");cr(og,"onAnimationIteration");cr(ag,"onAnimationStart");cr("dblclick","onDoubleClick");cr("focusin","onFocus");cr("focusout","onBlur");cr(lg,"onTransitionEnd");Us("onMouseEnter",["mouseout","mouseover"]);Us("onMouseLeave",["mouseout","mouseover"]);Us("onPointerEnter",["pointerout","pointerover"]);Us("onPointerLeave",["pointerout","pointerover"]);Vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$x=new Set("cancel close invalid load scroll toggle".split(" ").concat(wo));function lp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Yv(i,e,void 0,t),t.currentTarget=null}function ug(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;lp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;lp(r,a,c),s=l}}}if(Pl)throw t=Ku,Pl=!1,Ku=null,t}function pt(t,e){var n=e[af];n===void 0&&(n=e[af]=new Set);var i=t+"__bubble";n.has(i)||(fg(e,t,2,!1),n.add(i))}function Bc(t,e,n){var i=0;e&&(i|=4),fg(n,t,i,e)}var ba="_reactListening"+Math.random().toString(36).slice(2);function $o(t){if(!t[ba]){t[ba]=!0,v_.forEach(function(n){n!=="selectionchange"&&($x.has(n)||Bc(n,!1,t),Bc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ba]||(e[ba]=!0,Bc("selectionchange",!1,e))}}function fg(t,e,n,i){switch(q_(e)){case 1:var r=cx;break;case 4:r=ux;break;default:r=Nh}n=r.bind(null,e,n,t),r=void 0,!$u||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Hc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Tr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}I_(function(){var c=s,h=bh(n),f=[];e:{var d=cg.get(t);if(d!==void 0){var p=Uh,_=t;switch(t){case"keypress":if(pl(n)===0)break e;case"keydown":case"keyup":p=Tx;break;case"focusin":_="focus",p=Ic;break;case"focusout":_="blur",p=Ic;break;case"beforeblur":case"afterblur":p=Ic;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=dx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Cx;break;case sg:case og:case ag:p=_x;break;case lg:p=Px;break;case"scroll":p=fx;break;case"wheel":p=Dx;break;case"copy":case"cut":case"paste":p=vx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Jd}var v=(e&4)!==0,m=!v&&t==="scroll",u=v?d!==null?d+"Capture":null:d;v=[];for(var g=c,x;g!==null;){x=g;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,u!==null&&(y=Go(g,u),y!=null&&v.push(Ko(g,y,x)))),m)break;g=g.return}0<v.length&&(d=new p(d,_,null,n,h),f.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Yu&&(_=n.relatedTarget||n.fromElement)&&(Tr(_)||_[Ci]))break e;if((p||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?Tr(_):null,_!==null&&(m=Gr(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(v=Kd,y="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(v=Jd,y="onPointerLeave",u="onPointerEnter",g="pointer"),m=p==null?d:_s(p),x=_==null?d:_s(_),d=new v(y,g+"leave",p,n,h),d.target=m,d.relatedTarget=x,y=null,Tr(h)===c&&(v=new v(u,g+"enter",_,n,h),v.target=x,v.relatedTarget=m,y=v),m=y,p&&_)t:{for(v=p,u=_,g=0,x=v;x;x=$r(x))g++;for(x=0,y=u;y;y=$r(y))x++;for(;0<g-x;)v=$r(v),g--;for(;0<x-g;)u=$r(u),x--;for(;g--;){if(v===u||u!==null&&v===u.alternate)break t;v=$r(v),u=$r(u)}v=null}else v=null;p!==null&&cp(f,d,p,v,!1),_!==null&&m!==null&&cp(f,m,_,v,!0)}}e:{if(d=c?_s(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var A=zx;else if(tp(d))if(eg)A=Gx;else{A=Hx;var C=Bx}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=Vx);if(A&&(A=A(t,c))){Q_(f,A,n,h);break e}C&&C(t,d,c),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&Vu(d,"number",d.value)}switch(C=c?_s(c):window,t){case"focusin":(tp(C)||C.contentEditable==="true")&&(ps=C,ef=c,Lo=null);break;case"focusout":Lo=ef=ps=null;break;case"mousedown":tf=!0;break;case"contextmenu":case"mouseup":case"dragend":tf=!1,op(f,n,h);break;case"selectionchange":if(jx)break;case"keydown":case"keyup":op(f,n,h)}var T;if(Oh)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else ds?Z_(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(K_&&n.locale!=="ko"&&(ds||b!=="onCompositionStart"?b==="onCompositionEnd"&&ds&&(T=$_()):(ji=h,Ih="value"in ji?ji.value:ji.textContent,ds=!0)),C=Ul(c,b),0<C.length&&(b=new Zd(b,t,null,n,h),f.push({event:b,listeners:C}),T?b.data=T:(T=J_(n),T!==null&&(b.data=T)))),(T=Ix?Ux(t,n):Fx(t,n))&&(c=Ul(c,"onBeforeInput"),0<c.length&&(h=new Zd("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=T))}ug(f,e)})}function Ko(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ul(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Go(t,n),s!=null&&i.unshift(Ko(t,s,r)),s=Go(t,e),s!=null&&i.push(Ko(t,s,r))),t=t.return}return i}function $r(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function cp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Go(n,s),l!=null&&o.unshift(Ko(n,l,a))):r||(l=Go(n,s),l!=null&&o.push(Ko(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Kx=/\r\n?/g,Zx=/\u0000|\uFFFD/g;function up(t){return(typeof t=="string"?t:""+t).replace(Kx,`
`).replace(Zx,"")}function Pa(t,e,n){if(e=up(e),up(t)!==e&&n)throw Error(_e(425))}function Fl(){}var nf=null,rf=null;function sf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var of=typeof setTimeout=="function"?setTimeout:void 0,Jx=typeof clearTimeout=="function"?clearTimeout:void 0,fp=typeof Promise=="function"?Promise:void 0,Qx=typeof queueMicrotask=="function"?queueMicrotask:typeof fp<"u"?function(t){return fp.resolve(null).then(t).catch(ey)}:of;function ey(t){setTimeout(function(){throw t})}function Vc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),jo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);jo(e)}function Ji(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function hp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ks=Math.random().toString(36).slice(2),ri="__reactFiber$"+Ks,Zo="__reactProps$"+Ks,Ci="__reactContainer$"+Ks,af="__reactEvents$"+Ks,ty="__reactListeners$"+Ks,ny="__reactHandles$"+Ks;function Tr(t){var e=t[ri];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ci]||n[ri]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=hp(t);t!==null;){if(n=t[ri])return n;t=hp(t)}return e}t=n,n=t.parentNode}return null}function _a(t){return t=t[ri]||t[Ci],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _s(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(_e(33))}function fc(t){return t[Zo]||null}var lf=[],gs=-1;function ur(t){return{current:t}}function mt(t){0>gs||(t.current=lf[gs],lf[gs]=null,gs--)}function ht(t,e){gs++,lf[gs]=t.current,t.current=e}var or={},qt=ur(or),cn=ur(!1),Nr=or;function Fs(t,e){var n=t.type.contextTypes;if(!n)return or;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function un(t){return t=t.childContextTypes,t!=null}function Ol(){mt(cn),mt(qt)}function dp(t,e,n){if(qt.current!==or)throw Error(_e(168));ht(qt,e),ht(cn,n)}function hg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(_e(108,Bv(t)||"Unknown",r));return Et({},n,i)}function kl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||or,Nr=qt.current,ht(qt,t),ht(cn,cn.current),!0}function pp(t,e,n){var i=t.stateNode;if(!i)throw Error(_e(169));n?(t=hg(t,e,Nr),i.__reactInternalMemoizedMergedChildContext=t,mt(cn),mt(qt),ht(qt,t)):mt(cn),ht(cn,n)}var Si=null,hc=!1,Gc=!1;function dg(t){Si===null?Si=[t]:Si.push(t)}function iy(t){hc=!0,dg(t)}function fr(){if(!Gc&&Si!==null){Gc=!0;var t=0,e=ot;try{var n=Si;for(ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Si=null,hc=!1}catch(r){throw Si!==null&&(Si=Si.slice(t+1)),k_(Ph,fr),r}finally{ot=e,Gc=!1}}return null}var vs=[],xs=0,zl=null,Bl=0,Ln=[],Dn=0,Ir=null,Mi=1,Ei="";function yr(t,e){vs[xs++]=Bl,vs[xs++]=zl,zl=t,Bl=e}function pg(t,e,n){Ln[Dn++]=Mi,Ln[Dn++]=Ei,Ln[Dn++]=Ir,Ir=t;var i=Mi;t=Ei;var r=32-$n(i)-1;i&=~(1<<r),n+=1;var s=32-$n(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Mi=1<<32-$n(e)+r|n<<r|i,Ei=s+t}else Mi=1<<s|n<<r|i,Ei=t}function zh(t){t.return!==null&&(yr(t,1),pg(t,1,0))}function Bh(t){for(;t===zl;)zl=vs[--xs],vs[xs]=null,Bl=vs[--xs],vs[xs]=null;for(;t===Ir;)Ir=Ln[--Dn],Ln[Dn]=null,Ei=Ln[--Dn],Ln[Dn]=null,Mi=Ln[--Dn],Ln[Dn]=null}var Sn=null,yn=null,_t=!1,jn=null;function mg(t,e){var n=In(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function mp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Sn=t,yn=Ji(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Sn=t,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ir!==null?{id:Mi,overflow:Ei}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=In(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Sn=t,yn=null,!0):!1;default:return!1}}function cf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function uf(t){if(_t){var e=yn;if(e){var n=e;if(!mp(t,e)){if(cf(t))throw Error(_e(418));e=Ji(n.nextSibling);var i=Sn;e&&mp(t,e)?mg(i,n):(t.flags=t.flags&-4097|2,_t=!1,Sn=t)}}else{if(cf(t))throw Error(_e(418));t.flags=t.flags&-4097|2,_t=!1,Sn=t}}}function _p(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Sn=t}function La(t){if(t!==Sn)return!1;if(!_t)return _p(t),_t=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!sf(t.type,t.memoizedProps)),e&&(e=yn)){if(cf(t))throw _g(),Error(_e(418));for(;e;)mg(t,e),e=Ji(e.nextSibling)}if(_p(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(_e(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yn=Ji(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yn=null}}else yn=Sn?Ji(t.stateNode.nextSibling):null;return!0}function _g(){for(var t=yn;t;)t=Ji(t.nextSibling)}function Os(){yn=Sn=null,_t=!1}function Hh(t){jn===null?jn=[t]:jn.push(t)}var ry=Li.ReactCurrentBatchConfig;function fo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_e(309));var i=n.stateNode}if(!i)throw Error(_e(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(_e(284));if(!n._owner)throw Error(_e(290,t))}return t}function Da(t,e){throw t=Object.prototype.toString.call(e),Error(_e(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gp(t){var e=t._init;return e(t._payload)}function gg(t){function e(u,g){if(t){var x=u.deletions;x===null?(u.deletions=[g],u.flags|=16):x.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=nr(u,g),u.index=0,u.sibling=null,u}function s(u,g,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<g?(u.flags|=2,g):x):(u.flags|=2,g)):(u.flags|=1048576,g)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,g,x,y){return g===null||g.tag!==6?(g=Kc(x,u.mode,y),g.return=u,g):(g=r(g,x),g.return=u,g)}function l(u,g,x,y){var A=x.type;return A===hs?h(u,g,x.props.children,y,x.key):g!==null&&(g.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Bi&&gp(A)===g.type)?(y=r(g,x.props),y.ref=fo(u,g,x),y.return=u,y):(y=Sl(x.type,x.key,x.props,null,u.mode,y),y.ref=fo(u,g,x),y.return=u,y)}function c(u,g,x,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=Zc(x,u.mode,y),g.return=u,g):(g=r(g,x.children||[]),g.return=u,g)}function h(u,g,x,y,A){return g===null||g.tag!==7?(g=Lr(x,u.mode,y,A),g.return=u,g):(g=r(g,x),g.return=u,g)}function f(u,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Kc(""+g,u.mode,x),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Sa:return x=Sl(g.type,g.key,g.props,null,u.mode,x),x.ref=fo(u,null,g),x.return=u,x;case fs:return g=Zc(g,u.mode,x),g.return=u,g;case Bi:var y=g._init;return f(u,y(g._payload),x)}if(Mo(g)||oo(g))return g=Lr(g,u.mode,x,null),g.return=u,g;Da(u,g)}return null}function d(u,g,x,y){var A=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return A!==null?null:a(u,g,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Sa:return x.key===A?l(u,g,x,y):null;case fs:return x.key===A?c(u,g,x,y):null;case Bi:return A=x._init,d(u,g,A(x._payload),y)}if(Mo(x)||oo(x))return A!==null?null:h(u,g,x,y,null);Da(u,x)}return null}function p(u,g,x,y,A){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(x)||null,a(g,u,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Sa:return u=u.get(y.key===null?x:y.key)||null,l(g,u,y,A);case fs:return u=u.get(y.key===null?x:y.key)||null,c(g,u,y,A);case Bi:var C=y._init;return p(u,g,x,C(y._payload),A)}if(Mo(y)||oo(y))return u=u.get(x)||null,h(g,u,y,A,null);Da(g,y)}return null}function _(u,g,x,y){for(var A=null,C=null,T=g,b=g=0,E=null;T!==null&&b<x.length;b++){T.index>b?(E=T,T=null):E=T.sibling;var M=d(u,T,x[b],y);if(M===null){T===null&&(T=E);break}t&&T&&M.alternate===null&&e(u,T),g=s(M,g,b),C===null?A=M:C.sibling=M,C=M,T=E}if(b===x.length)return n(u,T),_t&&yr(u,b),A;if(T===null){for(;b<x.length;b++)T=f(u,x[b],y),T!==null&&(g=s(T,g,b),C===null?A=T:C.sibling=T,C=T);return _t&&yr(u,b),A}for(T=i(u,T);b<x.length;b++)E=p(T,u,b,x[b],y),E!==null&&(t&&E.alternate!==null&&T.delete(E.key===null?b:E.key),g=s(E,g,b),C===null?A=E:C.sibling=E,C=E);return t&&T.forEach(function(L){return e(u,L)}),_t&&yr(u,b),A}function v(u,g,x,y){var A=oo(x);if(typeof A!="function")throw Error(_e(150));if(x=A.call(x),x==null)throw Error(_e(151));for(var C=A=null,T=g,b=g=0,E=null,M=x.next();T!==null&&!M.done;b++,M=x.next()){T.index>b?(E=T,T=null):E=T.sibling;var L=d(u,T,M.value,y);if(L===null){T===null&&(T=E);break}t&&T&&L.alternate===null&&e(u,T),g=s(L,g,b),C===null?A=L:C.sibling=L,C=L,T=E}if(M.done)return n(u,T),_t&&yr(u,b),A;if(T===null){for(;!M.done;b++,M=x.next())M=f(u,M.value,y),M!==null&&(g=s(M,g,b),C===null?A=M:C.sibling=M,C=M);return _t&&yr(u,b),A}for(T=i(u,T);!M.done;b++,M=x.next())M=p(T,u,b,M.value,y),M!==null&&(t&&M.alternate!==null&&T.delete(M.key===null?b:M.key),g=s(M,g,b),C===null?A=M:C.sibling=M,C=M);return t&&T.forEach(function(F){return e(u,F)}),_t&&yr(u,b),A}function m(u,g,x,y){if(typeof x=="object"&&x!==null&&x.type===hs&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Sa:e:{for(var A=x.key,C=g;C!==null;){if(C.key===A){if(A=x.type,A===hs){if(C.tag===7){n(u,C.sibling),g=r(C,x.props.children),g.return=u,u=g;break e}}else if(C.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Bi&&gp(A)===C.type){n(u,C.sibling),g=r(C,x.props),g.ref=fo(u,C,x),g.return=u,u=g;break e}n(u,C);break}else e(u,C);C=C.sibling}x.type===hs?(g=Lr(x.props.children,u.mode,y,x.key),g.return=u,u=g):(y=Sl(x.type,x.key,x.props,null,u.mode,y),y.ref=fo(u,g,x),y.return=u,u=y)}return o(u);case fs:e:{for(C=x.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(u,g.sibling),g=r(g,x.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=Zc(x,u.mode,y),g.return=u,u=g}return o(u);case Bi:return C=x._init,m(u,g,C(x._payload),y)}if(Mo(x))return _(u,g,x,y);if(oo(x))return v(u,g,x,y);Da(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,x),g.return=u,u=g):(n(u,g),g=Kc(x,u.mode,y),g.return=u,u=g),o(u)):n(u,g)}return m}var ks=gg(!0),vg=gg(!1),Hl=ur(null),Vl=null,ys=null,Vh=null;function Gh(){Vh=ys=Vl=null}function Wh(t){var e=Hl.current;mt(Hl),t._currentValue=e}function ff(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ps(t,e){Vl=t,Vh=ys=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ln=!0),t.firstContext=null)}function Fn(t){var e=t._currentValue;if(Vh!==t)if(t={context:t,memoizedValue:e,next:null},ys===null){if(Vl===null)throw Error(_e(308));ys=t,Vl.dependencies={lanes:0,firstContext:t}}else ys=ys.next=t;return e}var Ar=null;function Xh(t){Ar===null?Ar=[t]:Ar.push(t)}function xg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Xh(e)):(n.next=r.next,r.next=n),e.interleaved=n,bi(t,i)}function bi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hi=!1;function jh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ti(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Qi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,bi(t,n)}return r=i.interleaved,r===null?(e.next=e,Xh(i)):(e.next=r.next,r.next=e),i.interleaved=e,bi(t,n)}function ml(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Lh(t,n)}}function vp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Gl(t,e,n,i){var r=t.updateQueue;Hi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,h=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,v=a;switch(d=e,p=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){f=_.call(p,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,d=typeof _=="function"?_.call(p,f,d):_,d==null)break e;f=Et({},f,d);break e;case 2:Hi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=p,l=f):h=h.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Fr|=o,t.lanes=o,t.memoizedState=f}}function xp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(_e(191,r));r.call(i)}}}var ga={},ci=ur(ga),Jo=ur(ga),Qo=ur(ga);function Rr(t){if(t===ga)throw Error(_e(174));return t}function Yh(t,e){switch(ht(Qo,e),ht(Jo,t),ht(ci,ga),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Wu(e,t)}mt(ci),ht(ci,e)}function zs(){mt(ci),mt(Jo),mt(Qo)}function Sg(t){Rr(Qo.current);var e=Rr(ci.current),n=Wu(e,t.type);e!==n&&(ht(Jo,t),ht(ci,n))}function qh(t){Jo.current===t&&(mt(ci),mt(Jo))}var yt=ur(0);function Wl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wc=[];function $h(){for(var t=0;t<Wc.length;t++)Wc[t]._workInProgressVersionPrimary=null;Wc.length=0}var _l=Li.ReactCurrentDispatcher,Xc=Li.ReactCurrentBatchConfig,Ur=0,Mt=null,Dt=null,Ot=null,Xl=!1,Do=!1,ea=0,sy=0;function Gt(){throw Error(_e(321))}function Kh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jn(t[n],e[n]))return!1;return!0}function Zh(t,e,n,i,r,s){if(Ur=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_l.current=t===null||t.memoizedState===null?cy:uy,t=n(i,r),Do){s=0;do{if(Do=!1,ea=0,25<=s)throw Error(_e(301));s+=1,Ot=Dt=null,e.updateQueue=null,_l.current=fy,t=n(i,r)}while(Do)}if(_l.current=jl,e=Dt!==null&&Dt.next!==null,Ur=0,Ot=Dt=Mt=null,Xl=!1,e)throw Error(_e(300));return t}function Jh(){var t=ea!==0;return ea=0,t}function ni(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?Mt.memoizedState=Ot=t:Ot=Ot.next=t,Ot}function On(){if(Dt===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=Dt.next;var e=Ot===null?Mt.memoizedState:Ot.next;if(e!==null)Ot=e,Dt=t;else{if(t===null)throw Error(_e(310));Dt=t,t={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},Ot===null?Mt.memoizedState=Ot=t:Ot=Ot.next=t}return Ot}function ta(t,e){return typeof e=="function"?e(t):e}function jc(t){var e=On(),n=e.queue;if(n===null)throw Error(_e(311));n.lastRenderedReducer=t;var i=Dt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((Ur&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Mt.lanes|=h,Fr|=h}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Jn(i,e.memoizedState)||(ln=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Mt.lanes|=s,Fr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Yc(t){var e=On(),n=e.queue;if(n===null)throw Error(_e(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Jn(s,e.memoizedState)||(ln=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Mg(){}function Eg(t,e){var n=Mt,i=On(),r=e(),s=!Jn(i.memoizedState,r);if(s&&(i.memoizedState=r,ln=!0),i=i.queue,Qh(Ag.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ot!==null&&Ot.memoizedState.tag&1){if(n.flags|=2048,na(9,Tg.bind(null,n,i,r,e),void 0,null),kt===null)throw Error(_e(349));Ur&30||wg(n,e,r)}return r}function wg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Tg(t,e,n,i){e.value=n,e.getSnapshot=i,Rg(e)&&Cg(t)}function Ag(t,e,n){return n(function(){Rg(e)&&Cg(t)})}function Rg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jn(t,n)}catch{return!0}}function Cg(t){var e=bi(t,1);e!==null&&Kn(e,t,1,-1)}function yp(t){var e=ni();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:t},e.queue=t,t=t.dispatch=ly.bind(null,Mt,t),[e.memoizedState,t]}function na(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function bg(){return On().memoizedState}function gl(t,e,n,i){var r=ni();Mt.flags|=t,r.memoizedState=na(1|e,n,void 0,i===void 0?null:i)}function dc(t,e,n,i){var r=On();i=i===void 0?null:i;var s=void 0;if(Dt!==null){var o=Dt.memoizedState;if(s=o.destroy,i!==null&&Kh(i,o.deps)){r.memoizedState=na(e,n,s,i);return}}Mt.flags|=t,r.memoizedState=na(1|e,n,s,i)}function Sp(t,e){return gl(8390656,8,t,e)}function Qh(t,e){return dc(2048,8,t,e)}function Pg(t,e){return dc(4,2,t,e)}function Lg(t,e){return dc(4,4,t,e)}function Dg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ng(t,e,n){return n=n!=null?n.concat([t]):null,dc(4,4,Dg.bind(null,e,t),n)}function ed(){}function Ig(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Kh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Ug(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Kh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Fg(t,e,n){return Ur&21?(Jn(n,e)||(n=H_(),Mt.lanes|=n,Fr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ln=!0),t.memoizedState=n)}function oy(t,e){var n=ot;ot=n!==0&&4>n?n:4,t(!0);var i=Xc.transition;Xc.transition={};try{t(!1),e()}finally{ot=n,Xc.transition=i}}function Og(){return On().memoizedState}function ay(t,e,n){var i=tr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},kg(t))zg(e,n);else if(n=xg(t,e,n,i),n!==null){var r=en();Kn(n,t,i,r),Bg(n,e,i)}}function ly(t,e,n){var i=tr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(kg(t))zg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Jn(a,o)){var l=e.interleaved;l===null?(r.next=r,Xh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=xg(t,e,r,i),n!==null&&(r=en(),Kn(n,t,i,r),Bg(n,e,i))}}function kg(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function zg(t,e){Do=Xl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Bg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Lh(t,n)}}var jl={readContext:Fn,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},cy={readContext:Fn,useCallback:function(t,e){return ni().memoizedState=[t,e===void 0?null:e],t},useContext:Fn,useEffect:Sp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,gl(4194308,4,Dg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return gl(4194308,4,t,e)},useInsertionEffect:function(t,e){return gl(4,2,t,e)},useMemo:function(t,e){var n=ni();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ni();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ay.bind(null,Mt,t),[i.memoizedState,t]},useRef:function(t){var e=ni();return t={current:t},e.memoizedState=t},useState:yp,useDebugValue:ed,useDeferredValue:function(t){return ni().memoizedState=t},useTransition:function(){var t=yp(!1),e=t[0];return t=oy.bind(null,t[1]),ni().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Mt,r=ni();if(_t){if(n===void 0)throw Error(_e(407));n=n()}else{if(n=e(),kt===null)throw Error(_e(349));Ur&30||wg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Sp(Ag.bind(null,i,s,t),[t]),i.flags|=2048,na(9,Tg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ni(),e=kt.identifierPrefix;if(_t){var n=Ei,i=Mi;n=(i&~(1<<32-$n(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ea++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=sy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},uy={readContext:Fn,useCallback:Ig,useContext:Fn,useEffect:Qh,useImperativeHandle:Ng,useInsertionEffect:Pg,useLayoutEffect:Lg,useMemo:Ug,useReducer:jc,useRef:bg,useState:function(){return jc(ta)},useDebugValue:ed,useDeferredValue:function(t){var e=On();return Fg(e,Dt.memoizedState,t)},useTransition:function(){var t=jc(ta)[0],e=On().memoizedState;return[t,e]},useMutableSource:Mg,useSyncExternalStore:Eg,useId:Og,unstable_isNewReconciler:!1},fy={readContext:Fn,useCallback:Ig,useContext:Fn,useEffect:Qh,useImperativeHandle:Ng,useInsertionEffect:Pg,useLayoutEffect:Lg,useMemo:Ug,useReducer:Yc,useRef:bg,useState:function(){return Yc(ta)},useDebugValue:ed,useDeferredValue:function(t){var e=On();return Dt===null?e.memoizedState=t:Fg(e,Dt.memoizedState,t)},useTransition:function(){var t=Yc(ta)[0],e=On().memoizedState;return[t,e]},useMutableSource:Mg,useSyncExternalStore:Eg,useId:Og,unstable_isNewReconciler:!1};function Gn(t,e){if(t&&t.defaultProps){e=Et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function hf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var pc={isMounted:function(t){return(t=t._reactInternals)?Gr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=en(),r=tr(t),s=Ti(i,r);s.payload=e,n!=null&&(s.callback=n),e=Qi(t,s,r),e!==null&&(Kn(e,t,r,i),ml(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=en(),r=tr(t),s=Ti(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Qi(t,s,r),e!==null&&(Kn(e,t,r,i),ml(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=en(),i=tr(t),r=Ti(n,i);r.tag=2,e!=null&&(r.callback=e),e=Qi(t,r,i),e!==null&&(Kn(e,t,i,n),ml(e,t,i))}};function Mp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!qo(n,i)||!qo(r,s):!0}function Hg(t,e,n){var i=!1,r=or,s=e.contextType;return typeof s=="object"&&s!==null?s=Fn(s):(r=un(e)?Nr:qt.current,i=e.contextTypes,s=(i=i!=null)?Fs(t,r):or),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=pc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ep(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&pc.enqueueReplaceState(e,e.state,null)}function df(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},jh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Fn(s):(s=un(e)?Nr:qt.current,r.context=Fs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(hf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&pc.enqueueReplaceState(r,r.state,null),Gl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Bs(t,e){try{var n="",i=e;do n+=zv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function qc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function pf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var hy=typeof WeakMap=="function"?WeakMap:Map;function Vg(t,e,n){n=Ti(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ql||(ql=!0,wf=i),pf(t,e)},n}function Gg(t,e,n){n=Ti(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){pf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){pf(t,e),typeof i!="function"&&(er===null?er=new Set([this]):er.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function wp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new hy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Ay.bind(null,t,e,n),e.then(t,t))}function Tp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ap(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ti(-1,1),e.tag=2,Qi(n,e,1))),n.lanes|=1),t)}var dy=Li.ReactCurrentOwner,ln=!1;function Qt(t,e,n,i){e.child=t===null?vg(e,null,n,i):ks(e,t.child,n,i)}function Rp(t,e,n,i,r){n=n.render;var s=e.ref;return Ps(e,r),i=Zh(t,e,n,i,s,r),n=Jh(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(_t&&n&&zh(e),e.flags|=1,Qt(t,e,i,r),e.child)}function Cp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!ld(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Wg(t,e,s,i,r)):(t=Sl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:qo,n(o,i)&&t.ref===e.ref)return Pi(t,e,r)}return e.flags|=1,t=nr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Wg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(qo(s,i)&&t.ref===e.ref)if(ln=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(ln=!0);else return e.lanes=t.lanes,Pi(t,e,r)}return mf(t,e,n,i,r)}function Xg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(Ms,vn),vn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ht(Ms,vn),vn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ht(Ms,vn),vn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ht(Ms,vn),vn|=i;return Qt(t,e,r,n),e.child}function jg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function mf(t,e,n,i,r){var s=un(n)?Nr:qt.current;return s=Fs(e,s),Ps(e,r),n=Zh(t,e,n,i,s,r),i=Jh(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(_t&&i&&zh(e),e.flags|=1,Qt(t,e,n,r),e.child)}function bp(t,e,n,i,r){if(un(n)){var s=!0;kl(e)}else s=!1;if(Ps(e,r),e.stateNode===null)vl(t,e),Hg(e,n,i),df(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Fn(c):(c=un(n)?Nr:qt.current,c=Fs(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Ep(e,o,i,c),Hi=!1;var d=e.memoizedState;o.state=d,Gl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||cn.current||Hi?(typeof h=="function"&&(hf(e,n,h,i),l=e.memoizedState),(a=Hi||Mp(e,n,a,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,yg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Gn(e.type,a),o.props=c,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Fn(l):(l=un(n)?Nr:qt.current,l=Fs(e,l));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Ep(e,o,i,l),Hi=!1,d=e.memoizedState,o.state=d,Gl(e,i,o,r);var _=e.memoizedState;a!==f||d!==_||cn.current||Hi?(typeof p=="function"&&(hf(e,n,p,i),_=e.memoizedState),(c=Hi||Mp(e,n,c,i,d,_,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return _f(t,e,n,i,s,r)}function _f(t,e,n,i,r,s){jg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&pp(e,n,!1),Pi(t,e,s);i=e.stateNode,dy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ks(e,t.child,null,s),e.child=ks(e,null,a,s)):Qt(t,e,a,s),e.memoizedState=i.state,r&&pp(e,n,!0),e.child}function Yg(t){var e=t.stateNode;e.pendingContext?dp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&dp(t,e.context,!1),Yh(t,e.containerInfo)}function Pp(t,e,n,i,r){return Os(),Hh(r),e.flags|=256,Qt(t,e,n,i),e.child}var gf={dehydrated:null,treeContext:null,retryLane:0};function vf(t){return{baseLanes:t,cachePool:null,transitions:null}}function qg(t,e,n){var i=e.pendingProps,r=yt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ht(yt,r&1),t===null)return uf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=gc(o,i,0,null),t=Lr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=vf(n),e.memoizedState=gf,t):td(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return py(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=nr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=nr(a,s):(s=Lr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?vf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=gf,i}return s=t.child,t=s.sibling,i=nr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function td(t,e){return e=gc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Na(t,e,n,i){return i!==null&&Hh(i),ks(e,t.child,null,n),t=td(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function py(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=qc(Error(_e(422))),Na(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=gc({mode:"visible",children:i.children},r,0,null),s=Lr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ks(e,t.child,null,o),e.child.memoizedState=vf(o),e.memoizedState=gf,s);if(!(e.mode&1))return Na(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(_e(419)),i=qc(s,i,void 0),Na(t,e,o,i)}if(a=(o&t.childLanes)!==0,ln||a){if(i=kt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,bi(t,r),Kn(i,t,r,-1))}return ad(),i=qc(Error(_e(421))),Na(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ry.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,yn=Ji(r.nextSibling),Sn=e,_t=!0,jn=null,t!==null&&(Ln[Dn++]=Mi,Ln[Dn++]=Ei,Ln[Dn++]=Ir,Mi=t.id,Ei=t.overflow,Ir=e),e=td(e,i.children),e.flags|=4096,e)}function Lp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ff(t.return,e,n)}function $c(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function $g(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Qt(t,e,i.children,n),i=yt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lp(t,n,e);else if(t.tag===19)Lp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ht(yt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Wl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),$c(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Wl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}$c(e,!0,n,null,s);break;case"together":$c(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function vl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Fr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(_e(153));if(e.child!==null){for(t=e.child,n=nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function my(t,e,n){switch(e.tag){case 3:Yg(e),Os();break;case 5:Sg(e);break;case 1:un(e.type)&&kl(e);break;case 4:Yh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(Hl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(yt,yt.current&1),e.flags|=128,null):n&e.child.childLanes?qg(t,e,n):(ht(yt,yt.current&1),t=Pi(t,e,n),t!==null?t.sibling:null);ht(yt,yt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return $g(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(yt,yt.current),i)break;return null;case 22:case 23:return e.lanes=0,Xg(t,e,n)}return Pi(t,e,n)}var Kg,xf,Zg,Jg;Kg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xf=function(){};Zg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Rr(ci.current);var s=null;switch(n){case"input":r=Bu(t,r),i=Bu(t,i),s=[];break;case"select":r=Et({},r,{value:void 0}),i=Et({},i,{value:void 0}),s=[];break;case"textarea":r=Gu(t,r),i=Gu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Fl)}Xu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ho.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ho.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&pt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Jg=function(t,e,n,i){n!==i&&(e.flags|=4)};function ho(t,e){if(!_t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function _y(t,e,n){var i=e.pendingProps;switch(Bh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(e),null;case 1:return un(e.type)&&Ol(),Wt(e),null;case 3:return i=e.stateNode,zs(),mt(cn),mt(qt),$h(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(La(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jn!==null&&(Rf(jn),jn=null))),xf(t,e),Wt(e),null;case 5:qh(e);var r=Rr(Qo.current);if(n=e.type,t!==null&&e.stateNode!=null)Zg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(_e(166));return Wt(e),null}if(t=Rr(ci.current),La(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ri]=e,i[Zo]=s,t=(e.mode&1)!==0,n){case"dialog":pt("cancel",i),pt("close",i);break;case"iframe":case"object":case"embed":pt("load",i);break;case"video":case"audio":for(r=0;r<wo.length;r++)pt(wo[r],i);break;case"source":pt("error",i);break;case"img":case"image":case"link":pt("error",i),pt("load",i);break;case"details":pt("toggle",i);break;case"input":Bd(i,s),pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},pt("invalid",i);break;case"textarea":Vd(i,s),pt("invalid",i)}Xu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Pa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Pa(i.textContent,a,t),r=["children",""+a]):Ho.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&pt("scroll",i)}switch(n){case"input":Ma(i),Hd(i,s,!0);break;case"textarea":Ma(i),Gd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Fl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=A_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ri]=e,t[Zo]=i,Kg(t,e,!1,!1),e.stateNode=t;e:{switch(o=ju(n,i),n){case"dialog":pt("cancel",t),pt("close",t),r=i;break;case"iframe":case"object":case"embed":pt("load",t),r=i;break;case"video":case"audio":for(r=0;r<wo.length;r++)pt(wo[r],t);r=i;break;case"source":pt("error",t),r=i;break;case"img":case"image":case"link":pt("error",t),pt("load",t),r=i;break;case"details":pt("toggle",t),r=i;break;case"input":Bd(t,i),r=Bu(t,i),pt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Et({},i,{value:void 0}),pt("invalid",t);break;case"textarea":Vd(t,i),r=Gu(t,i),pt("invalid",t);break;default:r=i}Xu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?b_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&R_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Vo(t,l):typeof l=="number"&&Vo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ho.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pt("scroll",t):l!=null&&Th(t,s,l,o))}switch(n){case"input":Ma(t),Hd(t,i,!1);break;case"textarea":Ma(t),Gd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+sr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?As(t,!!i.multiple,s,!1):i.defaultValue!=null&&As(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Fl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Wt(e),null;case 6:if(t&&e.stateNode!=null)Jg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(_e(166));if(n=Rr(Qo.current),Rr(ci.current),La(e)){if(i=e.stateNode,n=e.memoizedProps,i[ri]=e,(s=i.nodeValue!==n)&&(t=Sn,t!==null))switch(t.tag){case 3:Pa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Pa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ri]=e,e.stateNode=i}return Wt(e),null;case 13:if(mt(yt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_t&&yn!==null&&e.mode&1&&!(e.flags&128))_g(),Os(),e.flags|=98560,s=!1;else if(s=La(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(_e(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(_e(317));s[ri]=e}else Os(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Wt(e),s=!1}else jn!==null&&(Rf(jn),jn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||yt.current&1?Nt===0&&(Nt=3):ad())),e.updateQueue!==null&&(e.flags|=4),Wt(e),null);case 4:return zs(),xf(t,e),t===null&&$o(e.stateNode.containerInfo),Wt(e),null;case 10:return Wh(e.type._context),Wt(e),null;case 17:return un(e.type)&&Ol(),Wt(e),null;case 19:if(mt(yt),s=e.memoizedState,s===null)return Wt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ho(s,!1);else{if(Nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Wl(t),o!==null){for(e.flags|=128,ho(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ht(yt,yt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ct()>Hs&&(e.flags|=128,i=!0,ho(s,!1),e.lanes=4194304)}else{if(!i)if(t=Wl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ho(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_t)return Wt(e),null}else 2*Ct()-s.renderingStartTime>Hs&&n!==1073741824&&(e.flags|=128,i=!0,ho(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ct(),e.sibling=null,n=yt.current,ht(yt,i?n&1|2:n&1),e):(Wt(e),null);case 22:case 23:return od(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?vn&1073741824&&(Wt(e),e.subtreeFlags&6&&(e.flags|=8192)):Wt(e),null;case 24:return null;case 25:return null}throw Error(_e(156,e.tag))}function gy(t,e){switch(Bh(e),e.tag){case 1:return un(e.type)&&Ol(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zs(),mt(cn),mt(qt),$h(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return qh(e),null;case 13:if(mt(yt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(_e(340));Os()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return mt(yt),null;case 4:return zs(),null;case 10:return Wh(e.type._context),null;case 22:case 23:return od(),null;case 24:return null;default:return null}}var Ia=!1,Yt=!1,vy=typeof WeakSet=="function"?WeakSet:Set,Ce=null;function Ss(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){At(t,e,i)}else n.current=null}function yf(t,e,n){try{n()}catch(i){At(t,e,i)}}var Dp=!1;function xy(t,e){if(nf=Nl,t=ig(),kh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++h===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(rf={focusedElem:t,selectionRange:n},Nl=!1,Ce=e;Ce!==null;)if(e=Ce,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ce=t;else for(;Ce!==null;){e=Ce;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,m=_.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?v:Gn(e.type,v),m);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_e(163))}}catch(y){At(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Ce=t;break}Ce=e.return}return _=Dp,Dp=!1,_}function No(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&yf(e,n,s)}r=r.next}while(r!==i)}}function mc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Sf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Qg(t){var e=t.alternate;e!==null&&(t.alternate=null,Qg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ri],delete e[Zo],delete e[af],delete e[ty],delete e[ny])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function e0(t){return t.tag===5||t.tag===3||t.tag===4}function Np(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||e0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Mf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Fl));else if(i!==4&&(t=t.child,t!==null))for(Mf(t,e,n),t=t.sibling;t!==null;)Mf(t,e,n),t=t.sibling}function Ef(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ef(t,e,n),t=t.sibling;t!==null;)Ef(t,e,n),t=t.sibling}var zt=null,Xn=!1;function Ni(t,e,n){for(n=n.child;n!==null;)t0(t,e,n),n=n.sibling}function t0(t,e,n){if(li&&typeof li.onCommitFiberUnmount=="function")try{li.onCommitFiberUnmount(ac,n)}catch{}switch(n.tag){case 5:Yt||Ss(n,e);case 6:var i=zt,r=Xn;zt=null,Ni(t,e,n),zt=i,Xn=r,zt!==null&&(Xn?(t=zt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):zt.removeChild(n.stateNode));break;case 18:zt!==null&&(Xn?(t=zt,n=n.stateNode,t.nodeType===8?Vc(t.parentNode,n):t.nodeType===1&&Vc(t,n),jo(t)):Vc(zt,n.stateNode));break;case 4:i=zt,r=Xn,zt=n.stateNode.containerInfo,Xn=!0,Ni(t,e,n),zt=i,Xn=r;break;case 0:case 11:case 14:case 15:if(!Yt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&yf(n,e,o),r=r.next}while(r!==i)}Ni(t,e,n);break;case 1:if(!Yt&&(Ss(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){At(n,e,a)}Ni(t,e,n);break;case 21:Ni(t,e,n);break;case 22:n.mode&1?(Yt=(i=Yt)||n.memoizedState!==null,Ni(t,e,n),Yt=i):Ni(t,e,n);break;default:Ni(t,e,n)}}function Ip(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new vy),e.forEach(function(i){var r=Cy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:zt=a.stateNode,Xn=!1;break e;case 3:zt=a.stateNode.containerInfo,Xn=!0;break e;case 4:zt=a.stateNode.containerInfo,Xn=!0;break e}a=a.return}if(zt===null)throw Error(_e(160));t0(s,o,r),zt=null,Xn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){At(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)n0(e,t),e=e.sibling}function n0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zn(e,t),ei(t),i&4){try{No(3,t,t.return),mc(3,t)}catch(v){At(t,t.return,v)}try{No(5,t,t.return)}catch(v){At(t,t.return,v)}}break;case 1:zn(e,t),ei(t),i&512&&n!==null&&Ss(n,n.return);break;case 5:if(zn(e,t),ei(t),i&512&&n!==null&&Ss(n,n.return),t.flags&32){var r=t.stateNode;try{Vo(r,"")}catch(v){At(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&w_(r,s),ju(a,o);var c=ju(a,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?b_(r,f):h==="dangerouslySetInnerHTML"?R_(r,f):h==="children"?Vo(r,f):Th(r,h,f,c)}switch(a){case"input":Hu(r,s);break;case"textarea":T_(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?As(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?As(r,!!s.multiple,s.defaultValue,!0):As(r,!!s.multiple,s.multiple?[]:"",!1))}r[Zo]=s}catch(v){At(t,t.return,v)}}break;case 6:if(zn(e,t),ei(t),i&4){if(t.stateNode===null)throw Error(_e(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){At(t,t.return,v)}}break;case 3:if(zn(e,t),ei(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{jo(e.containerInfo)}catch(v){At(t,t.return,v)}break;case 4:zn(e,t),ei(t);break;case 13:zn(e,t),ei(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(rd=Ct())),i&4&&Ip(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Yt=(c=Yt)||h,zn(e,t),Yt=c):zn(e,t),ei(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Ce=t,h=t.child;h!==null;){for(f=Ce=h;Ce!==null;){switch(d=Ce,p=d.child,d.tag){case 0:case 11:case 14:case 15:No(4,d,d.return);break;case 1:Ss(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){At(i,n,v)}}break;case 5:Ss(d,d.return);break;case 22:if(d.memoizedState!==null){Fp(f);continue}}p!==null?(p.return=d,Ce=p):Fp(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=C_("display",o))}catch(v){At(t,t.return,v)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){At(t,t.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:zn(e,t),ei(t),i&4&&Ip(t);break;case 21:break;default:zn(e,t),ei(t)}}function ei(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(e0(n)){var i=n;break e}n=n.return}throw Error(_e(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Vo(r,""),i.flags&=-33);var s=Np(t);Ef(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Np(t);Mf(t,a,o);break;default:throw Error(_e(161))}}catch(l){At(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function yy(t,e,n){Ce=t,i0(t)}function i0(t,e,n){for(var i=(t.mode&1)!==0;Ce!==null;){var r=Ce,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ia;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Yt;a=Ia;var c=Yt;if(Ia=o,(Yt=l)&&!c)for(Ce=r;Ce!==null;)o=Ce,l=o.child,o.tag===22&&o.memoizedState!==null?Op(r):l!==null?(l.return=o,Ce=l):Op(r);for(;s!==null;)Ce=s,i0(s),s=s.sibling;Ce=r,Ia=a,Yt=c}Up(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ce=s):Up(t)}}function Up(t){for(;Ce!==null;){var e=Ce;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Yt||mc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Yt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Gn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&xp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}xp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&jo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_e(163))}Yt||e.flags&512&&Sf(e)}catch(d){At(e,e.return,d)}}if(e===t){Ce=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ce=n;break}Ce=e.return}}function Fp(t){for(;Ce!==null;){var e=Ce;if(e===t){Ce=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ce=n;break}Ce=e.return}}function Op(t){for(;Ce!==null;){var e=Ce;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{mc(4,e)}catch(l){At(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){At(e,r,l)}}var s=e.return;try{Sf(e)}catch(l){At(e,s,l)}break;case 5:var o=e.return;try{Sf(e)}catch(l){At(e,o,l)}}}catch(l){At(e,e.return,l)}if(e===t){Ce=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ce=a;break}Ce=e.return}}var Sy=Math.ceil,Yl=Li.ReactCurrentDispatcher,nd=Li.ReactCurrentOwner,Un=Li.ReactCurrentBatchConfig,tt=0,kt=null,Pt=null,Bt=0,vn=0,Ms=ur(0),Nt=0,ia=null,Fr=0,_c=0,id=0,Io=null,an=null,rd=0,Hs=1/0,yi=null,ql=!1,wf=null,er=null,Ua=!1,Yi=null,$l=0,Uo=0,Tf=null,xl=-1,yl=0;function en(){return tt&6?Ct():xl!==-1?xl:xl=Ct()}function tr(t){return t.mode&1?tt&2&&Bt!==0?Bt&-Bt:ry.transition!==null?(yl===0&&(yl=H_()),yl):(t=ot,t!==0||(t=window.event,t=t===void 0?16:q_(t.type)),t):1}function Kn(t,e,n,i){if(50<Uo)throw Uo=0,Tf=null,Error(_e(185));pa(t,n,i),(!(tt&2)||t!==kt)&&(t===kt&&(!(tt&2)&&(_c|=n),Nt===4&&Wi(t,Bt)),fn(t,i),n===1&&tt===0&&!(e.mode&1)&&(Hs=Ct()+500,hc&&fr()))}function fn(t,e){var n=t.callbackNode;rx(t,e);var i=Dl(t,t===kt?Bt:0);if(i===0)n!==null&&jd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&jd(n),e===1)t.tag===0?iy(kp.bind(null,t)):dg(kp.bind(null,t)),Qx(function(){!(tt&6)&&fr()}),n=null;else{switch(V_(i)){case 1:n=Ph;break;case 4:n=z_;break;case 16:n=Ll;break;case 536870912:n=B_;break;default:n=Ll}n=f0(n,r0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function r0(t,e){if(xl=-1,yl=0,tt&6)throw Error(_e(327));var n=t.callbackNode;if(Ls()&&t.callbackNode!==n)return null;var i=Dl(t,t===kt?Bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Kl(t,i);else{e=i;var r=tt;tt|=2;var s=o0();(kt!==t||Bt!==e)&&(yi=null,Hs=Ct()+500,Pr(t,e));do try{wy();break}catch(a){s0(t,a)}while(!0);Gh(),Yl.current=s,tt=r,Pt!==null?e=0:(kt=null,Bt=0,e=Nt)}if(e!==0){if(e===2&&(r=Zu(t),r!==0&&(i=r,e=Af(t,r))),e===1)throw n=ia,Pr(t,0),Wi(t,i),fn(t,Ct()),n;if(e===6)Wi(t,i);else{if(r=t.current.alternate,!(i&30)&&!My(r)&&(e=Kl(t,i),e===2&&(s=Zu(t),s!==0&&(i=s,e=Af(t,s))),e===1))throw n=ia,Pr(t,0),Wi(t,i),fn(t,Ct()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(_e(345));case 2:Sr(t,an,yi);break;case 3:if(Wi(t,i),(i&130023424)===i&&(e=rd+500-Ct(),10<e)){if(Dl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){en(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=of(Sr.bind(null,t,an,yi),e);break}Sr(t,an,yi);break;case 4:if(Wi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-$n(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ct()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Sy(i/1960))-i,10<i){t.timeoutHandle=of(Sr.bind(null,t,an,yi),i);break}Sr(t,an,yi);break;case 5:Sr(t,an,yi);break;default:throw Error(_e(329))}}}return fn(t,Ct()),t.callbackNode===n?r0.bind(null,t):null}function Af(t,e){var n=Io;return t.current.memoizedState.isDehydrated&&(Pr(t,e).flags|=256),t=Kl(t,e),t!==2&&(e=an,an=n,e!==null&&Rf(e)),t}function Rf(t){an===null?an=t:an.push.apply(an,t)}function My(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Jn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wi(t,e){for(e&=~id,e&=~_c,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$n(e),i=1<<n;t[n]=-1,e&=~i}}function kp(t){if(tt&6)throw Error(_e(327));Ls();var e=Dl(t,0);if(!(e&1))return fn(t,Ct()),null;var n=Kl(t,e);if(t.tag!==0&&n===2){var i=Zu(t);i!==0&&(e=i,n=Af(t,i))}if(n===1)throw n=ia,Pr(t,0),Wi(t,e),fn(t,Ct()),n;if(n===6)throw Error(_e(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Sr(t,an,yi),fn(t,Ct()),null}function sd(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(Hs=Ct()+500,hc&&fr())}}function Or(t){Yi!==null&&Yi.tag===0&&!(tt&6)&&Ls();var e=tt;tt|=1;var n=Un.transition,i=ot;try{if(Un.transition=null,ot=1,t)return t()}finally{ot=i,Un.transition=n,tt=e,!(tt&6)&&fr()}}function od(){vn=Ms.current,mt(Ms)}function Pr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Jx(n)),Pt!==null)for(n=Pt.return;n!==null;){var i=n;switch(Bh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ol();break;case 3:zs(),mt(cn),mt(qt),$h();break;case 5:qh(i);break;case 4:zs();break;case 13:mt(yt);break;case 19:mt(yt);break;case 10:Wh(i.type._context);break;case 22:case 23:od()}n=n.return}if(kt=t,Pt=t=nr(t.current,null),Bt=vn=e,Nt=0,ia=null,id=_c=Fr=0,an=Io=null,Ar!==null){for(e=0;e<Ar.length;e++)if(n=Ar[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Ar=null}return t}function s0(t,e){do{var n=Pt;try{if(Gh(),_l.current=jl,Xl){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Xl=!1}if(Ur=0,Ot=Dt=Mt=null,Do=!1,ea=0,nd.current=null,n===null||n.return===null){Nt=1,ia=e,Pt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=Tp(o);if(p!==null){p.flags&=-257,Ap(p,o,a,s,e),p.mode&1&&wp(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var v=new Set;v.add(l),e.updateQueue=v}else _.add(l);break e}else{if(!(e&1)){wp(s,c,e),ad();break e}l=Error(_e(426))}}else if(_t&&a.mode&1){var m=Tp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Ap(m,o,a,s,e),Hh(Bs(l,a));break e}}s=l=Bs(l,a),Nt!==4&&(Nt=2),Io===null?Io=[s]:Io.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Vg(s,l,e);vp(s,u);break e;case 1:a=l;var g=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(er===null||!er.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Gg(s,a,e);vp(s,y);break e}}s=s.return}while(s!==null)}l0(n)}catch(A){e=A,Pt===n&&n!==null&&(Pt=n=n.return);continue}break}while(!0)}function o0(){var t=Yl.current;return Yl.current=jl,t===null?jl:t}function ad(){(Nt===0||Nt===3||Nt===2)&&(Nt=4),kt===null||!(Fr&268435455)&&!(_c&268435455)||Wi(kt,Bt)}function Kl(t,e){var n=tt;tt|=2;var i=o0();(kt!==t||Bt!==e)&&(yi=null,Pr(t,e));do try{Ey();break}catch(r){s0(t,r)}while(!0);if(Gh(),tt=n,Yl.current=i,Pt!==null)throw Error(_e(261));return kt=null,Bt=0,Nt}function Ey(){for(;Pt!==null;)a0(Pt)}function wy(){for(;Pt!==null&&!$v();)a0(Pt)}function a0(t){var e=u0(t.alternate,t,vn);t.memoizedProps=t.pendingProps,e===null?l0(t):Pt=e,nd.current=null}function l0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=gy(n,e),n!==null){n.flags&=32767,Pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Nt=6,Pt=null;return}}else if(n=_y(n,e,vn),n!==null){Pt=n;return}if(e=e.sibling,e!==null){Pt=e;return}Pt=e=t}while(e!==null);Nt===0&&(Nt=5)}function Sr(t,e,n){var i=ot,r=Un.transition;try{Un.transition=null,ot=1,Ty(t,e,n,i)}finally{Un.transition=r,ot=i}return null}function Ty(t,e,n,i){do Ls();while(Yi!==null);if(tt&6)throw Error(_e(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(_e(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(sx(t,s),t===kt&&(Pt=kt=null,Bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ua||(Ua=!0,f0(Ll,function(){return Ls(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Un.transition,Un.transition=null;var o=ot;ot=1;var a=tt;tt|=4,nd.current=null,xy(t,n),n0(n,t),Xx(rf),Nl=!!nf,rf=nf=null,t.current=n,yy(n),Kv(),tt=a,ot=o,Un.transition=s}else t.current=n;if(Ua&&(Ua=!1,Yi=t,$l=r),s=t.pendingLanes,s===0&&(er=null),Qv(n.stateNode),fn(t,Ct()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ql)throw ql=!1,t=wf,wf=null,t;return $l&1&&t.tag!==0&&Ls(),s=t.pendingLanes,s&1?t===Tf?Uo++:(Uo=0,Tf=t):Uo=0,fr(),null}function Ls(){if(Yi!==null){var t=V_($l),e=Un.transition,n=ot;try{if(Un.transition=null,ot=16>t?16:t,Yi===null)var i=!1;else{if(t=Yi,Yi=null,$l=0,tt&6)throw Error(_e(331));var r=tt;for(tt|=4,Ce=t.current;Ce!==null;){var s=Ce,o=s.child;if(Ce.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ce=c;Ce!==null;){var h=Ce;switch(h.tag){case 0:case 11:case 15:No(8,h,s)}var f=h.child;if(f!==null)f.return=h,Ce=f;else for(;Ce!==null;){h=Ce;var d=h.sibling,p=h.return;if(Qg(h),h===c){Ce=null;break}if(d!==null){d.return=p,Ce=d;break}Ce=p}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}Ce=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ce=o;else e:for(;Ce!==null;){if(s=Ce,s.flags&2048)switch(s.tag){case 0:case 11:case 15:No(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Ce=u;break e}Ce=s.return}}var g=t.current;for(Ce=g;Ce!==null;){o=Ce;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Ce=x;else e:for(o=g;Ce!==null;){if(a=Ce,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:mc(9,a)}}catch(A){At(a,a.return,A)}if(a===o){Ce=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Ce=y;break e}Ce=a.return}}if(tt=r,fr(),li&&typeof li.onPostCommitFiberRoot=="function")try{li.onPostCommitFiberRoot(ac,t)}catch{}i=!0}return i}finally{ot=n,Un.transition=e}}return!1}function zp(t,e,n){e=Bs(n,e),e=Vg(t,e,1),t=Qi(t,e,1),e=en(),t!==null&&(pa(t,1,e),fn(t,e))}function At(t,e,n){if(t.tag===3)zp(t,t,n);else for(;e!==null;){if(e.tag===3){zp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(er===null||!er.has(i))){t=Bs(n,t),t=Gg(e,t,1),e=Qi(e,t,1),t=en(),e!==null&&(pa(e,1,t),fn(e,t));break}}e=e.return}}function Ay(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=en(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(Bt&n)===n&&(Nt===4||Nt===3&&(Bt&130023424)===Bt&&500>Ct()-rd?Pr(t,0):id|=n),fn(t,e)}function c0(t,e){e===0&&(t.mode&1?(e=Ta,Ta<<=1,!(Ta&130023424)&&(Ta=4194304)):e=1);var n=en();t=bi(t,e),t!==null&&(pa(t,e,n),fn(t,n))}function Ry(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),c0(t,n)}function Cy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(_e(314))}i!==null&&i.delete(e),c0(t,n)}var u0;u0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||cn.current)ln=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ln=!1,my(t,e,n);ln=!!(t.flags&131072)}else ln=!1,_t&&e.flags&1048576&&pg(e,Bl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;vl(t,e),t=e.pendingProps;var r=Fs(e,qt.current);Ps(e,n),r=Zh(null,e,i,t,r,n);var s=Jh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,un(i)?(s=!0,kl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,jh(e),r.updater=pc,e.stateNode=r,r._reactInternals=e,df(e,i,t,n),e=_f(null,e,i,!0,s,n)):(e.tag=0,_t&&s&&zh(e),Qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(vl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Py(i),t=Gn(i,t),r){case 0:e=mf(null,e,i,t,n);break e;case 1:e=bp(null,e,i,t,n);break e;case 11:e=Rp(null,e,i,t,n);break e;case 14:e=Cp(null,e,i,Gn(i.type,t),n);break e}throw Error(_e(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),mf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),bp(t,e,i,r,n);case 3:e:{if(Yg(e),t===null)throw Error(_e(387));i=e.pendingProps,s=e.memoizedState,r=s.element,yg(t,e),Gl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Bs(Error(_e(423)),e),e=Pp(t,e,i,n,r);break e}else if(i!==r){r=Bs(Error(_e(424)),e),e=Pp(t,e,i,n,r);break e}else for(yn=Ji(e.stateNode.containerInfo.firstChild),Sn=e,_t=!0,jn=null,n=vg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Os(),i===r){e=Pi(t,e,n);break e}Qt(t,e,i,n)}e=e.child}return e;case 5:return Sg(e),t===null&&uf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,sf(i,r)?o=null:s!==null&&sf(i,s)&&(e.flags|=32),jg(t,e),Qt(t,e,o,n),e.child;case 6:return t===null&&uf(e),null;case 13:return qg(t,e,n);case 4:return Yh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ks(e,null,i,n):Qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Rp(t,e,i,r,n);case 7:return Qt(t,e,e.pendingProps,n),e.child;case 8:return Qt(t,e,e.pendingProps.children,n),e.child;case 12:return Qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ht(Hl,i._currentValue),i._currentValue=o,s!==null)if(Jn(s.value,o)){if(s.children===r.children&&!cn.current){e=Pi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ti(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ff(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(_e(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ff(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ps(e,n),r=Fn(r),i=i(r),e.flags|=1,Qt(t,e,i,n),e.child;case 14:return i=e.type,r=Gn(i,e.pendingProps),r=Gn(i.type,r),Cp(t,e,i,r,n);case 15:return Wg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),vl(t,e),e.tag=1,un(i)?(t=!0,kl(e)):t=!1,Ps(e,n),Hg(e,i,r),df(e,i,r,n),_f(null,e,i,!0,t,n);case 19:return $g(t,e,n);case 22:return Xg(t,e,n)}throw Error(_e(156,e.tag))};function f0(t,e){return k_(t,e)}function by(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(t,e,n,i){return new by(t,e,n,i)}function ld(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Py(t){if(typeof t=="function")return ld(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Rh)return 11;if(t===Ch)return 14}return 2}function nr(t,e){var n=t.alternate;return n===null?(n=In(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Sl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")ld(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case hs:return Lr(n.children,r,s,e);case Ah:o=8,r|=8;break;case Fu:return t=In(12,n,e,r|2),t.elementType=Fu,t.lanes=s,t;case Ou:return t=In(13,n,e,r),t.elementType=Ou,t.lanes=s,t;case ku:return t=In(19,n,e,r),t.elementType=ku,t.lanes=s,t;case S_:return gc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case x_:o=10;break e;case y_:o=9;break e;case Rh:o=11;break e;case Ch:o=14;break e;case Bi:o=16,i=null;break e}throw Error(_e(130,t==null?t:typeof t,""))}return e=In(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Lr(t,e,n,i){return t=In(7,t,i,e),t.lanes=n,t}function gc(t,e,n,i){return t=In(22,t,i,e),t.elementType=S_,t.lanes=n,t.stateNode={isHidden:!1},t}function Kc(t,e,n){return t=In(6,t,null,e),t.lanes=n,t}function Zc(t,e,n){return e=In(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ly(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lc(0),this.expirationTimes=Lc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function cd(t,e,n,i,r,s,o,a,l){return t=new Ly(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=In(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jh(s),t}function Dy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function h0(t){if(!t)return or;t=t._reactInternals;e:{if(Gr(t)!==t||t.tag!==1)throw Error(_e(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(_e(171))}if(t.tag===1){var n=t.type;if(un(n))return hg(t,n,e)}return e}function d0(t,e,n,i,r,s,o,a,l){return t=cd(n,i,!0,t,r,s,o,a,l),t.context=h0(null),n=t.current,i=en(),r=tr(n),s=Ti(i,r),s.callback=e??null,Qi(n,s,r),t.current.lanes=r,pa(t,r,i),fn(t,i),t}function vc(t,e,n,i){var r=e.current,s=en(),o=tr(r);return n=h0(n),e.context===null?e.context=n:e.pendingContext=n,e=Ti(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Qi(r,e,o),t!==null&&(Kn(t,r,o,s),ml(t,r,o)),o}function Zl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ud(t,e){Bp(t,e),(t=t.alternate)&&Bp(t,e)}function Ny(){return null}var p0=typeof reportError=="function"?reportError:function(t){console.error(t)};function fd(t){this._internalRoot=t}xc.prototype.render=fd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(_e(409));vc(t,e,null,null)};xc.prototype.unmount=fd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Or(function(){vc(null,t,null,null)}),e[Ci]=null}};function xc(t){this._internalRoot=t}xc.prototype.unstable_scheduleHydration=function(t){if(t){var e=X_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gi.length&&e!==0&&e<Gi[n].priority;n++);Gi.splice(n,0,t),n===0&&Y_(t)}};function hd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hp(){}function Iy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Zl(o);s.call(c)}}var o=d0(e,i,t,0,null,!1,!1,"",Hp);return t._reactRootContainer=o,t[Ci]=o.current,$o(t.nodeType===8?t.parentNode:t),Or(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Zl(l);a.call(c)}}var l=cd(t,0,!1,null,null,!1,!1,"",Hp);return t._reactRootContainer=l,t[Ci]=l.current,$o(t.nodeType===8?t.parentNode:t),Or(function(){vc(e,l,n,i)}),l}function Sc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Zl(o);a.call(l)}}vc(e,o,t,r)}else o=Iy(n,e,t,r,i);return Zl(o)}G_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Eo(e.pendingLanes);n!==0&&(Lh(e,n|1),fn(e,Ct()),!(tt&6)&&(Hs=Ct()+500,fr()))}break;case 13:Or(function(){var i=bi(t,1);if(i!==null){var r=en();Kn(i,t,1,r)}}),ud(t,1)}};Dh=function(t){if(t.tag===13){var e=bi(t,134217728);if(e!==null){var n=en();Kn(e,t,134217728,n)}ud(t,134217728)}};W_=function(t){if(t.tag===13){var e=tr(t),n=bi(t,e);if(n!==null){var i=en();Kn(n,t,e,i)}ud(t,e)}};X_=function(){return ot};j_=function(t,e){var n=ot;try{return ot=t,e()}finally{ot=n}};qu=function(t,e,n){switch(e){case"input":if(Hu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=fc(i);if(!r)throw Error(_e(90));E_(i),Hu(i,r)}}}break;case"textarea":T_(t,n);break;case"select":e=n.value,e!=null&&As(t,!!n.multiple,e,!1)}};D_=sd;N_=Or;var Uy={usingClientEntryPoint:!1,Events:[_a,_s,fc,P_,L_,sd]},po={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fy={bundleType:po.bundleType,version:po.version,rendererPackageName:po.rendererPackageName,rendererConfig:po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Li.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=F_(t),t===null?null:t.stateNode},findFiberByHostInstance:po.findFiberByHostInstance||Ny,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fa.isDisabled&&Fa.supportsFiber)try{ac=Fa.inject(Fy),li=Fa}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uy;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hd(e))throw Error(_e(200));return Dy(t,e,null,n)};En.createRoot=function(t,e){if(!hd(t))throw Error(_e(299));var n=!1,i="",r=p0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=cd(t,1,!1,null,null,n,!1,i,r),t[Ci]=e.current,$o(t.nodeType===8?t.parentNode:t),new fd(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(_e(188)):(t=Object.keys(t).join(","),Error(_e(268,t)));return t=F_(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return Or(t)};En.hydrate=function(t,e,n){if(!yc(e))throw Error(_e(200));return Sc(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!hd(t))throw Error(_e(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=p0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=d0(e,null,t,1,n??null,r,!1,s,o),t[Ci]=e.current,$o(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new xc(e)};En.render=function(t,e,n){if(!yc(e))throw Error(_e(200));return Sc(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!yc(t))throw Error(_e(40));return t._reactRootContainer?(Or(function(){Sc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ci]=null})}),!0):!1};En.unstable_batchedUpdates=sd;En.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!yc(n))throw Error(_e(200));if(t==null||t._reactInternals===void 0)throw Error(_e(38));return Sc(t,e,n,!1,i)};En.version="18.3.1-next-f1338f8080-20240426";function m0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m0)}catch(t){console.error(t)}}m0(),m_.exports=En;var Oy=m_.exports,_0,Vp=Oy;_0=Vp.createRoot,Vp.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ky={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Wr=(t,e)=>{const n=He.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...c},h)=>He.createElement("svg",{ref:h,...ky,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${zy(t)}`,a].join(" "),...c},[...e.map(([f,d])=>He.createElement(f,d)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=Wr("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=Wr("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=Wr("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=Wr("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=Wr("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=Wr("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=Wr("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dd="180",Ds={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wy=0,jp=1,Xy=2,g0=1,v0=2,xi=3,ar=0,hn=1,Nn=2,ir=0,Ns=1,Yp=2,qp=3,$p=4,jy=5,Er=100,Yy=101,qy=102,$y=103,Ky=104,Zy=200,Jy=201,Qy=202,e1=203,Cf=204,bf=205,t1=206,n1=207,i1=208,r1=209,s1=210,o1=211,a1=212,l1=213,c1=214,Pf=0,Lf=1,Df=2,Vs=3,Nf=4,If=5,Uf=6,Ff=7,x0=0,u1=1,f1=2,rr=0,h1=1,d1=2,p1=3,m1=4,_1=5,g1=6,v1=7,y0=300,Gs=301,Ws=302,Of=303,kf=304,Mc=306,zf=1e3,Cr=1001,Bf=1002,Zn=1003,x1=1004,Oa=1005,oi=1006,Jc=1007,br=1008,fi=1009,S0=1010,M0=1011,ra=1012,pd=1013,kr=1014,wi=1015,va=1016,md=1017,_d=1018,sa=1020,E0=35902,w0=35899,T0=1021,A0=1022,qn=1023,oa=1026,aa=1027,R0=1028,gd=1029,C0=1030,vd=1031,xd=1033,Ml=33776,El=33777,wl=33778,Tl=33779,Hf=35840,Vf=35841,Gf=35842,Wf=35843,Xf=36196,jf=37492,Yf=37496,qf=37808,$f=37809,Kf=37810,Zf=37811,Jf=37812,Qf=37813,eh=37814,th=37815,nh=37816,ih=37817,rh=37818,sh=37819,oh=37820,ah=37821,lh=36492,ch=36494,uh=36495,fh=36283,hh=36284,dh=36285,ph=36286,y1=3200,S1=3201,b0=0,M1=1,Xi="",Pn="srgb",Xs="srgb-linear",Jl="linear",lt="srgb",Kr=7680,Kp=519,E1=512,w1=513,T1=514,P0=515,A1=516,R1=517,C1=518,b1=519,Zp=35044,Jp="300 es",ai=2e3,Ql=2001;class Xr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qp=1234567;const Fo=Math.PI/180,la=180/Math.PI;function jr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[t&255]+Xt[t>>8&255]+Xt[t>>16&255]+Xt[t>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[n&63|128]+Xt[n>>8&255]+"-"+Xt[n>>16&255]+Xt[n>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function Ke(t,e,n){return Math.max(e,Math.min(n,t))}function yd(t,e){return(t%e+e)%e}function P1(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function L1(t,e,n){return t!==e?(n-t)/(e-t):0}function Oo(t,e,n){return(1-n)*t+n*e}function D1(t,e,n,i){return Oo(t,e,1-Math.exp(-n*i))}function N1(t,e=1){return e-Math.abs(yd(t,e*2)-e)}function I1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function U1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function F1(t,e){return t+Math.floor(Math.random()*(e-t+1))}function O1(t,e){return t+Math.random()*(e-t)}function k1(t){return t*(.5-Math.random())}function z1(t){t!==void 0&&(Qp=t);let e=Qp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function B1(t){return t*Fo}function H1(t){return t*la}function V1(t){return(t&t-1)===0&&t!==0}function G1(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function W1(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function X1(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),h=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":t.set(a*h,l*f,l*d,a*c);break;case"YZY":t.set(l*d,a*h,l*f,a*c);break;case"ZXZ":t.set(l*f,l*d,a*h,a*c);break;case"XZX":t.set(a*h,l*_,l*p,a*c);break;case"YXY":t.set(l*p,a*h,l*_,a*c);break;case"ZYZ":t.set(l*_,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function us(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Zt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Al={DEG2RAD:Fo,RAD2DEG:la,generateUUID:jr,clamp:Ke,euclideanModulo:yd,mapLinear:P1,inverseLerp:L1,lerp:Oo,damp:D1,pingpong:N1,smoothstep:I1,smootherstep:U1,randInt:F1,randFloat:O1,randFloatSpread:k1,seededRandom:z1,degToRad:B1,radToDeg:H1,isPowerOfTwo:V1,ceilPowerOfTwo:G1,floorPowerOfTwo:W1,setQuaternionFromProperEuler:X1,normalize:Zt,denormalize:us};class xe{constructor(e=0,n=0){xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],_=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=_,e[n+3]=v;return}if(f!==v||l!==d||c!==p||h!==_){let m=1-a;const u=l*d+c*p+h*_+f*v,g=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const A=Math.sqrt(x),C=Math.atan2(A,u*g);m=Math.sin(m*C)/A,a=Math.sin(a*C)/A}const y=a*g;if(l=l*m+d*y,c=c*m+p*y,h=h*m+_*y,f=f*m+v*y,m===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=A,c*=A,h*=A,f*=A}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],f=s[o],d=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+h*f+l*p-c*d,e[n+1]=l*_+h*d+c*f-a*p,e[n+2]=c*_+h*p+a*d-l*f,e[n+3]=h*_-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*h*f+c*p*_,this._y=c*p*f-d*h*_,this._z=c*h*_+d*p*f,this._w=c*h*f-d*p*_;break;case"YXZ":this._x=d*h*f+c*p*_,this._y=c*p*f-d*h*_,this._z=c*h*_-d*p*f,this._w=c*h*f+d*p*_;break;case"ZXY":this._x=d*h*f-c*p*_,this._y=c*p*f+d*h*_,this._z=c*h*_+d*p*f,this._w=c*h*f-d*p*_;break;case"ZYX":this._x=d*h*f-c*p*_,this._y=c*p*f+d*h*_,this._z=c*h*_-d*p*f,this._w=c*h*f+d*p*_;break;case"YZX":this._x=d*h*f+c*p*_,this._y=c*p*f+d*h*_,this._z=c*h*_-d*p*f,this._w=c*h*f-d*p*_;break;case"XZY":this._x=d*h*f-c*p*_,this._y=c*p*f-d*h*_,this._z=c*h*_+d*p*f,this._w=c*h*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-n)*h)/c,d=Math.sin(n*h)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,n=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(em.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(em.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*h,this.y=i+l*h+a*c-s*f,this.z=r+l*f+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qc.copy(this).projectOnVector(e),this.sub(Qc)}reflect(e){return this.sub(Qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qc=new D,em=new zr;class Ye{constructor(e,n,i,r,s,o,a,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],p=i[5],_=i[8],v=r[0],m=r[3],u=r[6],g=r[1],x=r[4],y=r[7],A=r[2],C=r[5],T=r[8];return s[0]=o*v+a*g+l*A,s[3]=o*m+a*x+l*C,s[6]=o*u+a*y+l*T,s[1]=c*v+h*g+f*A,s[4]=c*m+h*x+f*C,s[7]=c*u+h*y+f*T,s[2]=d*v+p*g+_*A,s[5]=d*m+p*x+_*C,s[8]=d*u+p*y+_*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return n*o*h-n*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*s,p=c*s-o*l,_=n*f+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(r*c-h*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(h*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(eu.makeScale(e,n)),this}rotate(e){return this.premultiply(eu.makeRotation(-e)),this}translate(e,n){return this.premultiply(eu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const eu=new Ye;function L0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ec(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function j1(){const t=ec("canvas");return t.style.display="block",t}const tm={};function ca(t){t in tm||(tm[t]=!0,console.warn(t))}function Y1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const nm=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),im=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function q1(){const t={enabled:!0,workingColorSpace:Xs,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===lt&&(r.r=Ai(r.r),r.g=Ai(r.g),r.b=Ai(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(r.r=Is(r.r),r.g=Is(r.g),r.b=Is(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Xi?Jl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ca("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ca("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Xs]:{primaries:e,whitePoint:i,transfer:Jl,toXYZ:nm,fromXYZ:im,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Pn},outputColorSpaceConfig:{drawingBufferColorSpace:Pn}},[Pn]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:nm,fromXYZ:im,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Pn}}}),t}const it=q1();function Ai(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Is(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Zr;class $1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Zr===void 0&&(Zr=ec("canvas")),Zr.width=e.width,Zr.height=e.height;const r=Zr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Zr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ec("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ai(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ai(n[i]/255)*255):n[i]=Ai(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let K1=0;class Sd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:K1++}),this.uuid=jr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(tu(r[o].image)):s.push(tu(r[o]))}else s=tu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function tu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?$1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Z1=0;const nu=new D;class tn extends Xr{constructor(e=tn.DEFAULT_IMAGE,n=tn.DEFAULT_MAPPING,i=Cr,r=Cr,s=oi,o=br,a=qn,l=fi,c=tn.DEFAULT_ANISOTROPY,h=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Z1++}),this.uuid=jr(),this.name="",this.source=new Sd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(nu).x}get height(){return this.source.getSize(nu).y}get depth(){return this.source.getSize(nu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==y0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zf:e.x=e.x-Math.floor(e.x);break;case Cr:e.x=e.x<0?0:1;break;case Bf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zf:e.y=e.y-Math.floor(e.y);break;case Cr:e.y=e.y<0?0:1;break;case Bf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=y0;tn.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,n=0,i=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],p=l[5],_=l[9],v=l[2],m=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,y=(p+1)/2,A=(u+1)/2,C=(h+d)/4,T=(f+v)/4,b=(_+m)/4;return x>y&&x>A?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=T/i):y>A?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=C/r,s=b/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=T/s,r=b/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(d-h)*(d-h));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(f-v)/g,this.z=(d-h)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this.w=Ke(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this.w=Ke(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class J1 extends Xr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new ut(0,0,e,n),this.scissorTest=!1,this.viewport=new ut(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new tn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:oi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Sd(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Br extends J1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class D0 extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Q1 extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zs{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bn):Bn.fromBufferAttribute(s,o),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ka.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ka.copy(i.boundingBox)),ka.applyMatrix4(e.matrixWorld),this.union(ka)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mo),za.subVectors(this.max,mo),Jr.subVectors(e.a,mo),Qr.subVectors(e.b,mo),es.subVectors(e.c,mo),Ii.subVectors(Qr,Jr),Ui.subVectors(es,Qr),pr.subVectors(Jr,es);let n=[0,-Ii.z,Ii.y,0,-Ui.z,Ui.y,0,-pr.z,pr.y,Ii.z,0,-Ii.x,Ui.z,0,-Ui.x,pr.z,0,-pr.x,-Ii.y,Ii.x,0,-Ui.y,Ui.x,0,-pr.y,pr.x,0];return!iu(n,Jr,Qr,es,za)||(n=[1,0,0,0,1,0,0,0,1],!iu(n,Jr,Qr,es,za))?!1:(Ba.crossVectors(Ii,Ui),n=[Ba.x,Ba.y,Ba.z],iu(n,Jr,Qr,es,za))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pi=[new D,new D,new D,new D,new D,new D,new D,new D],Bn=new D,ka=new Zs,Jr=new D,Qr=new D,es=new D,Ii=new D,Ui=new D,pr=new D,mo=new D,za=new D,Ba=new D,mr=new D;function iu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){mr.fromArray(t,s);const a=r.x*Math.abs(mr.x)+r.y*Math.abs(mr.y)+r.z*Math.abs(mr.z),l=e.dot(mr),c=n.dot(mr),h=i.dot(mr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const eS=new Zs,_o=new D,ru=new D;class Ec{constructor(e=new D,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):eS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_o.subVectors(e,this.center);const n=_o.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(_o,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ru.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_o.copy(e.center).add(ru)),this.expandByPoint(_o.copy(e.center).sub(ru))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const mi=new D,su=new D,Ha=new D,Fi=new D,ou=new D,Va=new D,au=new D;class Md{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,n),mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){su.copy(e).add(n).multiplyScalar(.5),Ha.copy(n).sub(e).normalize(),Fi.copy(this.origin).sub(su);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ha),a=Fi.dot(this.direction),l=-Fi.dot(Ha),c=Fi.lengthSq(),h=Math.abs(1-o*o);let f,d,p,_;if(h>0)if(f=o*l-a,d=o*a-l,_=s*h,f>=0)if(d>=-_)if(d<=_){const v=1/h;f*=v,d*=v,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(su).addScaledVector(Ha,d),p}intersectSphere(e,n){mi.subVectors(e.center,this.origin);const i=mi.dot(this.direction),r=mi.dot(mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,n,i,r,s){ou.subVectors(n,e),Va.subVectors(i,e),au.crossVectors(ou,Va);let o=this.direction.dot(au),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fi.subVectors(this.origin,e);const l=a*this.direction.dot(Va.crossVectors(Fi,Va));if(l<0)return null;const c=a*this.direction.dot(ou.cross(Fi));if(c<0||l+c>o)return null;const h=-a*Fi.dot(au);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,n,i,r,s,o,a,l,c,h,f,d,p,_,v,m){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,h,f,d,p,_,v,m)}set(e,n,i,r,s,o,a,l,c,h,f,d,p,_,v,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=p,u[7]=_,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ts.setFromMatrixColumn(e,0).length(),s=1/ts.setFromMatrixColumn(e,1).length(),o=1/ts.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*h,p=o*f,_=a*h,v=a*f;n[0]=l*h,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=d-v*c,n[9]=-a*l,n[2]=v-d*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*h,p=l*f,_=c*h,v=c*f;n[0]=d+v*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*h,n[9]=-a,n[2]=p*a-_,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*h,p=l*f,_=c*h,v=c*f;n[0]=d-v*a,n[4]=-o*f,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*h,n[9]=v-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*h,p=o*f,_=a*h,v=a*f;n[0]=l*h,n[4]=_*c-p,n[8]=d*c+v,n[1]=l*f,n[5]=v*c+d,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,_=a*l,v=a*c;n[0]=l*h,n[4]=v-d*f,n[8]=_*f+p,n[1]=f,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=p*f+_,n[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,p=o*c,_=a*l,v=a*c;n[0]=l*h,n[4]=-f,n[8]=c*h,n[1]=d*f+v,n[5]=o*h,n[9]=p*f-_,n[2]=_*f-p,n[6]=a*h,n[10]=v*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tS,e,nS)}lookAt(e,n,i){const r=this.elements;return _n.subVectors(e,n),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Oi.crossVectors(i,_n),Oi.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Oi.crossVectors(i,_n)),Oi.normalize(),Ga.crossVectors(_n,Oi),r[0]=Oi.x,r[4]=Ga.x,r[8]=_n.x,r[1]=Oi.y,r[5]=Ga.y,r[9]=_n.y,r[2]=Oi.z,r[6]=Ga.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],p=i[13],_=i[2],v=i[6],m=i[10],u=i[14],g=i[3],x=i[7],y=i[11],A=i[15],C=r[0],T=r[4],b=r[8],E=r[12],M=r[1],L=r[5],F=r[9],W=r[13],J=r[2],B=r[6],X=r[10],ne=r[14],I=r[3],Q=r[7],ie=r[11],Se=r[15];return s[0]=o*C+a*M+l*J+c*I,s[4]=o*T+a*L+l*B+c*Q,s[8]=o*b+a*F+l*X+c*ie,s[12]=o*E+a*W+l*ne+c*Se,s[1]=h*C+f*M+d*J+p*I,s[5]=h*T+f*L+d*B+p*Q,s[9]=h*b+f*F+d*X+p*ie,s[13]=h*E+f*W+d*ne+p*Se,s[2]=_*C+v*M+m*J+u*I,s[6]=_*T+v*L+m*B+u*Q,s[10]=_*b+v*F+m*X+u*ie,s[14]=_*E+v*W+m*ne+u*Se,s[3]=g*C+x*M+y*J+A*I,s[7]=g*T+x*L+y*B+A*Q,s[11]=g*b+x*F+y*X+A*ie,s[15]=g*E+x*W+y*ne+A*Se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],p=e[14],_=e[3],v=e[7],m=e[11],u=e[15];return _*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+v*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*h-s*l*h)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*h-i*c*h)+u*(-r*a*h-n*l*f+n*a*d+r*o*f-i*o*d+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],p=e[11],_=e[12],v=e[13],m=e[14],u=e[15],g=f*m*c-v*d*c+v*l*p-a*m*p-f*l*u+a*d*u,x=_*d*c-h*m*c-_*l*p+o*m*p+h*l*u-o*d*u,y=h*v*c-_*f*c+_*a*p-o*v*p-h*a*u+o*f*u,A=_*f*l-h*v*l-_*a*d+o*v*d+h*a*m-o*f*m,C=n*g+i*x+r*y+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=g*T,e[1]=(v*d*s-f*m*s-v*r*p+i*m*p+f*r*u-i*d*u)*T,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*u+i*l*u)*T,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*T,e[4]=x*T,e[5]=(h*m*s-_*d*s+_*r*p-n*m*p-h*r*u+n*d*u)*T,e[6]=(_*l*s-o*m*s-_*r*c+n*m*c+o*r*u-n*l*u)*T,e[7]=(o*d*s-h*l*s+h*r*c-n*d*c-o*r*p+n*l*p)*T,e[8]=y*T,e[9]=(_*f*s-h*v*s-_*i*p+n*v*p+h*i*u-n*f*u)*T,e[10]=(o*v*s-_*a*s+_*i*c-n*v*c-o*i*u+n*a*u)*T,e[11]=(h*a*s-o*f*s-h*i*c+n*f*c+o*i*p-n*a*p)*T,e[12]=A*T,e[13]=(h*v*r-_*f*r+_*i*d-n*v*d-h*i*m+n*f*m)*T,e[14]=(_*a*r-o*v*r-_*i*l+n*v*l+o*i*m-n*a*m)*T,e[15]=(o*f*r-h*a*r+h*i*l-n*f*l-o*i*d+n*a*d)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,h=o+o,f=a+a,d=s*c,p=s*h,_=s*f,v=o*h,m=o*f,u=a*f,g=l*c,x=l*h,y=l*f,A=i.x,C=i.y,T=i.z;return r[0]=(1-(v+u))*A,r[1]=(p+y)*A,r[2]=(_-x)*A,r[3]=0,r[4]=(p-y)*C,r[5]=(1-(d+u))*C,r[6]=(m+g)*C,r[7]=0,r[8]=(_+x)*T,r[9]=(m-g)*T,r[10]=(1-(d+v))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ts.set(r[0],r[1],r[2]).length();const o=ts.set(r[4],r[5],r[6]).length(),a=ts.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Hn.copy(this);const c=1/s,h=1/o,f=1/a;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=f,Hn.elements[9]*=f,Hn.elements[10]*=f,n.setFromRotationMatrix(Hn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ai,l=!1){const c=this.elements,h=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),p=(i+r)/(i-r);let _,v;if(l)_=s/(o-s),v=o*s/(o-s);else if(a===ai)_=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Ql)_=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ai,l=!1){const c=this.elements,h=2/(n-e),f=2/(i-r),d=-(n+e)/(n-e),p=-(i+r)/(i-r);let _,v;if(l)_=1/(o-s),v=o/(o-s);else if(a===ai)_=-2/(o-s),v=-(o+s)/(o-s);else if(a===Ql)_=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ts=new D,Hn=new gt,tS=new D(0,0,0),nS=new D(1,1,1),Oi=new D,Ga=new D,_n=new D,rm=new gt,sm=new zr;class hi{constructor(e=0,n=0,i=0,r=hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return rm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return sm.setFromEuler(this),this.setFromQuaternion(sm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hi.DEFAULT_ORDER="XYZ";class N0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iS=0;const om=new D,ns=new zr,_i=new gt,Wa=new D,go=new D,rS=new D,sS=new zr,am=new D(1,0,0),lm=new D(0,1,0),cm=new D(0,0,1),um={type:"added"},oS={type:"removed"},is={type:"childadded",child:null},lu={type:"childremoved",child:null};class Ht extends Xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iS++}),this.uuid=jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new D,n=new hi,i=new zr,r=new D(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new Ye}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new N0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ns.setFromAxisAngle(e,n),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,n){return ns.setFromAxisAngle(e,n),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(am,e)}rotateY(e){return this.rotateOnAxis(lm,e)}rotateZ(e){return this.rotateOnAxis(cm,e)}translateOnAxis(e,n){return om.copy(e).applyQuaternion(this.quaternion),this.position.add(om.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(am,e)}translateY(e){return this.translateOnAxis(lm,e)}translateZ(e){return this.translateOnAxis(cm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Wa.copy(e):Wa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(go,Wa,this.up):_i.lookAt(Wa,go,this.up),this.quaternion.setFromRotationMatrix(_i),r&&(_i.extractRotation(r.matrixWorld),ns.setFromRotationMatrix(_i),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(um),is.child=e,this.dispatchEvent(is),is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(oS),lu.child=e,this.dispatchEvent(lu),lu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(um),is.child=e,this.dispatchEvent(is),is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,e,rS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,sS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ht.DEFAULT_UP=new D(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new D,gi=new D,cu=new D,vi=new D,rs=new D,ss=new D,fm=new D,uu=new D,fu=new D,hu=new D,du=new ut,pu=new ut,mu=new ut;class Yn{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Vn.subVectors(e,n),r.cross(Vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Vn.subVectors(r,n),gi.subVectors(i,n),cu.subVectors(e,n);const o=Vn.dot(Vn),a=Vn.dot(gi),l=Vn.dot(cu),c=gi.dot(gi),h=gi.dot(cu),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*h)*d,_=(o*h-a*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(a,vi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return du.setScalar(0),pu.setScalar(0),mu.setScalar(0),du.fromBufferAttribute(e,n),pu.fromBufferAttribute(e,i),mu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(du,s.x),o.addScaledVector(pu,s.y),o.addScaledVector(mu,s.z),o}static isFrontFacing(e,n,i,r){return Vn.subVectors(i,n),gi.subVectors(e,n),Vn.cross(gi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Vn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Yn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Yn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;rs.subVectors(r,i),ss.subVectors(s,i),uu.subVectors(e,i);const l=rs.dot(uu),c=ss.dot(uu);if(l<=0&&c<=0)return n.copy(i);fu.subVectors(e,r);const h=rs.dot(fu),f=ss.dot(fu);if(h>=0&&f<=h)return n.copy(r);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(rs,o);hu.subVectors(e,s);const p=rs.dot(hu),_=ss.dot(hu);if(_>=0&&p<=_)return n.copy(s);const v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(ss,a);const m=h*_-p*f;if(m<=0&&f-h>=0&&p-_>=0)return fm.subVectors(s,r),a=(f-h)/(f-h+(p-_)),n.copy(r).addScaledVector(fm,a);const u=1/(m+v+d);return o=v*u,a=d*u,n.copy(i).addScaledVector(rs,o).addScaledVector(ss,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const I0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function _u(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=yd(e,1),n=Ke(n,0,1),i=Ke(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=_u(o,s,e+1/3),this.g=_u(o,s,e),this.b=_u(o,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,n=Pn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Pn){const i=I0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pn){return it.workingToColorSpace(jt.copy(this),e),Math.round(Ke(jt.r*255,0,255))*65536+Math.round(Ke(jt.g*255,0,255))*256+Math.round(Ke(jt.b*255,0,255))}getHexString(e=Pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.workingToColorSpace(jt.copy(this),n);const i=jt.r,r=jt.g,s=jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=it.workingColorSpace){return it.workingToColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Pn){it.workingToColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,r=jt.b;return e!==Pn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+n,ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ki),e.getHSL(Xa);const i=Oo(ki.h,Xa.h,n),r=Oo(ki.s,Xa.s,n),s=Oo(ki.l,Xa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new et;et.NAMES=I0;let aS=0;class Js extends Xr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aS++}),this.uuid=jr(),this.name="",this.type="Material",this.blending=Ns,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cf,this.blendDst=bf,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(i.blending=this.blending),this.side!==ar&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cf&&(i.blendSrc=this.blendSrc),this.blendDst!==bf&&(i.blendDst=this.blendDst),this.blendEquation!==Er&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Kr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Kr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class tc extends Js{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=x0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new D,ja=new xe;let lS=0;class ui{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Zp,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ja.fromBufferAttribute(this,n),ja.applyMatrix3(e),this.setXY(n,ja.x,ja.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix3(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix4(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyNormalMatrix(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.transformDirection(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=us(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=us(n,this.array)),n}setX(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=us(n,this.array)),n}setY(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=us(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=us(n,this.array)),n}setW(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zp&&(e.usage=this.usage),e}}class U0 extends ui{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class F0 extends ui{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Rt extends ui{constructor(e,n,i){super(new Float32Array(e),n,i)}}let cS=0;const bn=new gt,gu=new Ht,os=new D,gn=new Zs,vo=new Zs,Ft=new D;class dn extends Xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cS++}),this.uuid=jr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(L0(e)?F0:U0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,n,i){return bn.makeTranslation(e,n,i),this.applyMatrix4(bn),this}scale(e,n,i){return bn.makeScale(e,n,i),this.applyMatrix4(bn),this}lookAt(e){return gu.lookAt(e),gu.updateMatrix(),this.applyMatrix4(gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Rt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ec);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];vo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(gn.min,vo.min),gn.expandByPoint(Ft),Ft.addVectors(gn.max,vo.max),gn.expandByPoint(Ft)):(gn.expandByPoint(vo.min),gn.expandByPoint(vo.max))}gn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ft));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ft.fromBufferAttribute(a,c),l&&(os.fromBufferAttribute(e,c),Ft.add(os)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new D,l[b]=new D;const c=new D,h=new D,f=new D,d=new xe,p=new xe,_=new xe,v=new D,m=new D;function u(b,E,M){c.fromBufferAttribute(i,b),h.fromBufferAttribute(i,E),f.fromBufferAttribute(i,M),d.fromBufferAttribute(s,b),p.fromBufferAttribute(s,E),_.fromBufferAttribute(s,M),h.sub(c),f.sub(c),p.sub(d),_.sub(d);const L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(L),a[b].add(v),a[E].add(v),a[M].add(v),l[b].add(m),l[E].add(m),l[M].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let b=0,E=g.length;b<E;++b){const M=g[b],L=M.start,F=M.count;for(let W=L,J=L+F;W<J;W+=3)u(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const x=new D,y=new D,A=new D,C=new D;function T(b){A.fromBufferAttribute(r,b),C.copy(A);const E=a[b];x.copy(E),x.sub(A.multiplyScalar(A.dot(E))).normalize(),y.crossVectors(C,E);const L=y.dot(l[b])<0?-1:1;o.setXYZW(b,x.x,x.y,x.z,L)}for(let b=0,E=g.length;b<E;++b){const M=g[b],L=M.start,F=M.count;for(let W=L,J=L+F;W<J;W+=3)T(e.getX(W+0)),T(e.getX(W+1)),T(e.getX(W+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ui(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,h=new D,f=new D;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ft.fromBufferAttribute(e,n),Ft.normalize(),e.setXYZ(n,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h);let p=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let u=0;u<h;u++)d[_++]=c[p++]}return new ui(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new dn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){const d=c[h],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hm=new gt,_r=new Md,Ya=new Ec,dm=new D,qa=new D,$a=new D,Ka=new D,vu=new D,Za=new D,pm=new D,Ja=new D;class Tt extends Ht{constructor(e=new dn,n=new tc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Za.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],f=s[l];h!==0&&(vu.fromBufferAttribute(f,e),o?Za.addScaledVector(vu,h):Za.addScaledVector(vu.sub(n),h))}n.add(Za)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ya.copy(i.boundingSphere),Ya.applyMatrix4(s),_r.copy(e.ray).recast(e.near),!(Ya.containsPoint(_r.origin)===!1&&(_r.intersectSphere(Ya,dm)===null||_r.origin.distanceToSquared(dm)>(e.far-e.near)**2))&&(hm.copy(s).invert(),_r.copy(e.ray).applyMatrix4(hm),!(i.boundingBox!==null&&_r.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,_r)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const m=d[_],u=o[m.materialIndex],g=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,A=x;y<A;y+=3){const C=a.getX(y),T=a.getX(y+1),b=a.getX(y+2);r=Qa(this,u,e,i,c,h,f,C,T,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=_,u=v;m<u;m+=3){const g=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);r=Qa(this,o,e,i,c,h,f,g,x,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const m=d[_],u=o[m.materialIndex],g=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,A=x;y<A;y+=3){const C=y,T=y+1,b=y+2;r=Qa(this,u,e,i,c,h,f,C,T,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,u=v;m<u;m+=3){const g=m,x=m+1,y=m+2;r=Qa(this,o,e,i,c,h,f,g,x,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function uS(t,e,n,i,r,s,o,a){let l;if(e.side===hn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ar,a),l===null)return null;Ja.copy(a),Ja.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ja);return c<n.near||c>n.far?null:{distance:c,point:Ja.clone(),object:t}}function Qa(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,qa),t.getVertexPosition(l,$a),t.getVertexPosition(c,Ka);const h=uS(t,e,n,i,qa,$a,Ka,pm);if(h){const f=new D;Yn.getBarycoord(pm,qa,$a,Ka,f),r&&(h.uv=Yn.getInterpolatedAttribute(r,a,l,c,f,new xe)),s&&(h.uv1=Yn.getInterpolatedAttribute(s,a,l,c,f,new xe)),o&&(h.normal=Yn.getInterpolatedAttribute(o,a,l,c,f,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new D,materialIndex:0};Yn.getNormal(qa,$a,Ka,d.normal),h.face=d,h.barycoord=f}return h}class Qs extends dn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(f,2));function _(v,m,u,g,x,y,A,C,T,b,E){const M=y/T,L=A/b,F=y/2,W=A/2,J=C/2,B=T+1,X=b+1;let ne=0,I=0;const Q=new D;for(let ie=0;ie<X;ie++){const Se=ie*L-W;for(let Le=0;Le<B;Le++){const Xe=Le*M-F;Q[v]=Xe*g,Q[m]=Se*x,Q[u]=J,c.push(Q.x,Q.y,Q.z),Q[v]=0,Q[m]=0,Q[u]=C>0?1:-1,h.push(Q.x,Q.y,Q.z),f.push(Le/T),f.push(1-ie/b),ne+=1}}for(let ie=0;ie<b;ie++)for(let Se=0;Se<T;Se++){const Le=d+Se+B*ie,Xe=d+Se+B*(ie+1),Ze=d+(Se+1)+B*(ie+1),qe=d+(Se+1)+B*ie;l.push(Le,Xe,qe),l.push(Xe,Ze,qe),I+=6}a.addGroup(p,I,E),p+=I,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Jt(t){const e={};for(let n=0;n<t.length;n++){const i=js(t[n]);for(const r in i)e[r]=i[r]}return e}function fS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function O0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const hS={clone:js,merge:Jt};var dS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class lr extends Js{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dS,this.fragmentShader=pS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=fS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class k0 extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zi=new D,mm=new xe,_m=new xe;class xn extends k0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=la*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return la*2*Math.atan(Math.tan(Fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,n){return this.getViewBounds(e,mm,_m),n.subVectors(_m,mm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Fo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const as=-90,ls=1;class mS extends Ht{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new xn(as,ls,e,n);r.layers=this.layers,this.add(r);const s=new xn(as,ls,e,n);s.layers=this.layers,this.add(s);const o=new xn(as,ls,e,n);o.layers=this.layers,this.add(o);const a=new xn(as,ls,e,n);a.layers=this.layers,this.add(a);const l=new xn(as,ls,e,n);l.layers=this.layers,this.add(l);const c=new xn(as,ls,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ql)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(f,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class z0 extends tn{constructor(e=[],n=Gs,i,r,s,o,a,l,c,h){super(e,n,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _S extends Br{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new z0(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Qs(5,5,5),s=new lr({name:"CubemapFromEquirect",uniforms:js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:ir});s.uniforms.tEquirect.value=n;const o=new Tt(r,s),a=n.minFilter;return n.minFilter===br&&(n.minFilter=oi),new mS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class si extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gS={type:"move"};class xu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new si;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Ed{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new et(e),this.near=n,this.far=i}clone(){return new Ed(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class vS extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const yu=new D,xS=new D,yS=new Ye;class Vi{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=yu.subVectors(i,n).cross(xS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(yu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||yS.getNormalMatrix(e),r=this.coplanarPoint(yu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new Ec,SS=new xe(.5,.5),el=new D;class wd{constructor(e=new Vi,n=new Vi,i=new Vi,r=new Vi,s=new Vi,o=new Vi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ai,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],f=s[5],d=s[6],p=s[7],_=s[8],v=s[9],m=s[10],u=s[11],g=s[12],x=s[13],y=s[14],A=s[15];if(r[0].setComponents(c-o,p-h,u-_,A-g).normalize(),r[1].setComponents(c+o,p+h,u+_,A+g).normalize(),r[2].setComponents(c+a,p+f,u+v,A+x).normalize(),r[3].setComponents(c-a,p-f,u-v,A-x).normalize(),i)r[4].setComponents(l,d,m,y).normalize(),r[5].setComponents(c-l,p-d,u-m,A-y).normalize();else if(r[4].setComponents(c-l,p-d,u-m,A-y).normalize(),n===ai)r[5].setComponents(c+l,p+d,u+m,A+y).normalize();else if(n===Ql)r[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){gr.center.set(0,0,0);const n=SS.distanceTo(e.center);return gr.radius=.7071067811865476+n,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(el.x=r.normal.x>0?e.max.x:e.min.x,el.y=r.normal.y>0?e.max.y:e.min.y,el.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(el)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class B0 extends Js{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const nc=new D,ic=new D,gm=new gt,xo=new Md,tl=new Ec,Su=new D,vm=new D;class MS extends Ht{constructor(e=new dn,n=new B0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)nc.fromBufferAttribute(n,r-1),ic.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=nc.distanceTo(ic);e.setAttribute("lineDistance",new Rt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),tl.copy(i.boundingSphere),tl.applyMatrix4(r),tl.radius+=s,e.ray.intersectsSphere(tl)===!1)return;gm.copy(r).invert(),xo.copy(e.ray).applyMatrix4(gm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let v=p,m=_-1;v<m;v+=c){const u=h.getX(v),g=h.getX(v+1),x=nl(this,e,xo,l,u,g,v);x&&n.push(x)}if(this.isLineLoop){const v=h.getX(_-1),m=h.getX(p),u=nl(this,e,xo,l,v,m,_-1);u&&n.push(u)}}else{const p=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let v=p,m=_-1;v<m;v+=c){const u=nl(this,e,xo,l,v,v+1,v);u&&n.push(u)}if(this.isLineLoop){const v=nl(this,e,xo,l,_-1,p,_-1);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function nl(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(nc.fromBufferAttribute(a,r),ic.fromBufferAttribute(a,s),n.distanceSqToSegment(nc,ic,Su,vm)>i)return;Su.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Su);if(!(c<e.near||c>e.far))return{distance:c,point:vm.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}class xm extends tn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class H0 extends tn{constructor(e,n,i=kr,r,s,o,a=Zn,l=Zn,c,h=oa,f=1){if(h!==oa&&h!==aa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Sd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class V0 extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class rc extends dn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],d=[],p=[];let _=0;const v=[],m=i/2;let u=0;g(),o===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Rt(f,3)),this.setAttribute("normal",new Rt(d,3)),this.setAttribute("uv",new Rt(p,2));function g(){const y=new D,A=new D;let C=0;const T=(n-e)/i;for(let b=0;b<=s;b++){const E=[],M=b/s,L=M*(n-e)+e;for(let F=0;F<=r;F++){const W=F/r,J=W*l+a,B=Math.sin(J),X=Math.cos(J);A.x=L*B,A.y=-M*i+m,A.z=L*X,f.push(A.x,A.y,A.z),y.set(B,T,X).normalize(),d.push(y.x,y.y,y.z),p.push(W,1-M),E.push(_++)}v.push(E)}for(let b=0;b<r;b++)for(let E=0;E<s;E++){const M=v[E][b],L=v[E+1][b],F=v[E+1][b+1],W=v[E][b+1];(e>0||E!==0)&&(h.push(M,L,W),C+=3),(n>0||E!==s-1)&&(h.push(L,F,W),C+=3)}c.addGroup(u,C,0),u+=C}function x(y){const A=_,C=new xe,T=new D;let b=0;const E=y===!0?e:n,M=y===!0?1:-1;for(let F=1;F<=r;F++)f.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),_++;const L=_;for(let F=0;F<=r;F++){const J=F/r*l+a,B=Math.cos(J),X=Math.sin(J);T.x=E*X,T.y=m*M,T.z=E*B,f.push(T.x,T.y,T.z),d.push(0,M,0),C.x=B*.5+.5,C.y=X*.5*M+.5,p.push(C.x,C.y),_++}for(let F=0;F<r;F++){const W=A+F,J=L+F;y===!0?h.push(J,J+1,W):h.push(J+1,J,W),b+=3}c.addGroup(u,b,y===!0?1:2),u+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Td extends dn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),h(),this.setAttribute("position",new Rt(s,3)),this.setAttribute("normal",new Rt(s.slice(),3)),this.setAttribute("uv",new Rt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const x=new D,y=new D,A=new D;for(let C=0;C<n.length;C+=3)p(n[C+0],x),p(n[C+1],y),p(n[C+2],A),l(x,y,A,g)}function l(g,x,y,A){const C=A+1,T=[];for(let b=0;b<=C;b++){T[b]=[];const E=g.clone().lerp(y,b/C),M=x.clone().lerp(y,b/C),L=C-b;for(let F=0;F<=L;F++)F===0&&b===C?T[b][F]=E:T[b][F]=E.clone().lerp(M,F/L)}for(let b=0;b<C;b++)for(let E=0;E<2*(C-b)-1;E++){const M=Math.floor(E/2);E%2===0?(d(T[b][M+1]),d(T[b+1][M]),d(T[b][M])):(d(T[b][M+1]),d(T[b+1][M+1]),d(T[b+1][M]))}}function c(g){const x=new D;for(let y=0;y<s.length;y+=3)x.x=s[y+0],x.y=s[y+1],x.z=s[y+2],x.normalize().multiplyScalar(g),s[y+0]=x.x,s[y+1]=x.y,s[y+2]=x.z}function h(){const g=new D;for(let x=0;x<s.length;x+=3){g.x=s[x+0],g.y=s[x+1],g.z=s[x+2];const y=m(g)/2/Math.PI+.5,A=u(g)/Math.PI+.5;o.push(y,1-A)}_(),f()}function f(){for(let g=0;g<o.length;g+=6){const x=o[g+0],y=o[g+2],A=o[g+4],C=Math.max(x,y,A),T=Math.min(x,y,A);C>.9&&T<.1&&(x<.2&&(o[g+0]+=1),y<.2&&(o[g+2]+=1),A<.2&&(o[g+4]+=1))}}function d(g){s.push(g.x,g.y,g.z)}function p(g,x){const y=g*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function _(){const g=new D,x=new D,y=new D,A=new D,C=new xe,T=new xe,b=new xe;for(let E=0,M=0;E<s.length;E+=9,M+=6){g.set(s[E+0],s[E+1],s[E+2]),x.set(s[E+3],s[E+4],s[E+5]),y.set(s[E+6],s[E+7],s[E+8]),C.set(o[M+0],o[M+1]),T.set(o[M+2],o[M+3]),b.set(o[M+4],o[M+5]),A.copy(g).add(x).add(y).divideScalar(3);const L=m(A);v(C,M+0,g,L),v(T,M+2,x,L),v(b,M+4,y,L)}}function v(g,x,y,A){A<0&&g.x===1&&(o[x]=g.x-1),y.x===0&&y.z===0&&(o[x]=A/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function u(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Td(e.vertices,e.indices,e.radius,e.details)}}class di{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const h=i[r],d=i[r+1]-h,p=(o-h)/d;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new xe:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new D,r=[],s=[],o=[],a=new D,l=new gt;for(let p=0;p<=e;p++){const _=p/e;r[p]=this.getTangentAt(_,new D)}s[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Ke(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Ke(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],p*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ad extends di{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new xe){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*f+this.aX,c=d*f+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ES extends Ad{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Rd(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,f){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,p*=h,r(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const il=new D,Mu=new Rd,Eu=new Rd,wu=new Rd;class G0 extends di{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new D){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(il.subVectors(r[0],r[1]).add(r[0]),c=il);const f=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(il.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=il),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);v<1e-4&&(v=1),_<1e-4&&(_=v),m<1e-4&&(m=v),Mu.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,_,v,m),Eu.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,_,v,m),wu.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,_,v,m)}else this.curveType==="catmullrom"&&(Mu.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),Eu.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),wu.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return i.set(Mu.calc(l),Eu.calc(l),wu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ym(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function wS(t,e){const n=1-t;return n*n*e}function TS(t,e){return 2*(1-t)*t*e}function AS(t,e){return t*t*e}function ko(t,e,n,i){return wS(t,e)+TS(t,n)+AS(t,i)}function RS(t,e){const n=1-t;return n*n*n*e}function CS(t,e){const n=1-t;return 3*n*n*t*e}function bS(t,e){return 3*(1-t)*t*t*e}function PS(t,e){return t*t*t*e}function zo(t,e,n,i,r){return RS(t,e)+CS(t,n)+bS(t,i)+PS(t,r)}class W0 extends di{constructor(e=new xe,n=new xe,i=new xe,r=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new xe){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(zo(e,r.x,s.x,o.x,a.x),zo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class LS extends di{constructor(e=new D,n=new D,i=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new D){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(zo(e,r.x,s.x,o.x,a.x),zo(e,r.y,s.y,o.y,a.y),zo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class X0 extends di{constructor(e=new xe,n=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new xe){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new xe){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class DS extends di{constructor(e=new D,n=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new D){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new D){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class j0 extends di{constructor(e=new xe,n=new xe,i=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new xe){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ko(e,r.x,s.x,o.x),ko(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class NS extends di{constructor(e=new D,n=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new D){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ko(e,r.x,s.x,o.x),ko(e,r.y,s.y,o.y),ko(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Y0 extends di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new xe){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(ym(a,l.x,c.x,h.x,f.x),ym(a,l.y,c.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new xe().fromArray(r))}return this}}var mh=Object.freeze({__proto__:null,ArcCurve:ES,CatmullRomCurve3:G0,CubicBezierCurve:W0,CubicBezierCurve3:LS,EllipseCurve:Ad,LineCurve:X0,LineCurve3:DS,QuadraticBezierCurve:j0,QuadraticBezierCurve3:NS,SplineCurve:Y0});class IS extends di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new mh[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(n.push(h),i=h)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new mh[r.type]().fromJSON(r))}return this}}class Sm extends IS{constructor(e){super(),this.type="Path",this.currentPoint=new xe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new X0(this.currentPoint.clone(),new xe(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new j0(this.currentPoint.clone(),new xe(e,n),new xe(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new W0(this.currentPoint.clone(),new xe(e,n),new xe(i,r),new xe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new Y0(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,n+h,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new Ad(e,n,i,r,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class q0 extends Sm{constructor(e){super(e),this.uuid=jr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new Sm().fromJSON(r))}return this}}function US(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=$0(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=BS(t,e,s,n)),t.length>80*n){a=1/0,l=1/0;let h=-1/0,f=-1/0;for(let d=n;d<r;d+=n){const p=t[d],_=t[d+1];p<a&&(a=p),_<l&&(l=_),p>h&&(h=p),_>f&&(f=_)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return ua(s,o,n,a,l,c,0),o}function $0(t,e,n,i,r){let s;if(r===ZS(t,e,n,i)>0)for(let o=e;o<n;o+=i)s=Mm(o/i|0,t[o],t[o+1],s);else for(let o=n-i;o>=e;o-=i)s=Mm(o/i|0,t[o],t[o+1],s);return s&&Ys(s,s.next)&&(ha(s),s=s.next),s}function Hr(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Ys(n,n.next)||St(n.prev,n,n.next)===0)){if(ha(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function ua(t,e,n,i,r,s,o){if(!t)return;!o&&s&&XS(t,i,r,s);let a=t;for(;t.prev!==t.next;){const l=t.prev,c=t.next;if(s?OS(t,i,r,s):FS(t)){e.push(l.i,t.i,c.i),ha(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=kS(Hr(t),e),ua(t,e,n,i,r,s,2)):o===2&&zS(t,e,n,i,r,s):ua(Hr(t),e,n,i,r,s,1);break}}}function FS(t){const e=t.prev,n=t,i=t.next;if(St(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,h=Math.min(r,s,o),f=Math.min(a,l,c),d=Math.max(r,s,o),p=Math.max(a,l,c);let _=i.next;for(;_!==e;){if(_.x>=h&&_.x<=d&&_.y>=f&&_.y<=p&&To(r,a,s,l,o,c,_.x,_.y)&&St(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function OS(t,e,n,i){const r=t.prev,s=t,o=t.next;if(St(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,h=r.y,f=s.y,d=o.y,p=Math.min(a,l,c),_=Math.min(h,f,d),v=Math.max(a,l,c),m=Math.max(h,f,d),u=_h(p,_,e,n,i),g=_h(v,m,e,n,i);let x=t.prevZ,y=t.nextZ;for(;x&&x.z>=u&&y&&y.z<=g;){if(x.x>=p&&x.x<=v&&x.y>=_&&x.y<=m&&x!==r&&x!==o&&To(a,h,l,f,c,d,x.x,x.y)&&St(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=p&&y.x<=v&&y.y>=_&&y.y<=m&&y!==r&&y!==o&&To(a,h,l,f,c,d,y.x,y.y)&&St(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=u;){if(x.x>=p&&x.x<=v&&x.y>=_&&x.y<=m&&x!==r&&x!==o&&To(a,h,l,f,c,d,x.x,x.y)&&St(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=g;){if(y.x>=p&&y.x<=v&&y.y>=_&&y.y<=m&&y!==r&&y!==o&&To(a,h,l,f,c,d,y.x,y.y)&&St(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function kS(t,e){let n=t;do{const i=n.prev,r=n.next.next;!Ys(i,r)&&Z0(i,n,n.next,r)&&fa(i,r)&&fa(r,i)&&(e.push(i.i,n.i,r.i),ha(n),ha(n.next),n=t=r),n=n.next}while(n!==t);return Hr(n)}function zS(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&qS(o,a)){let l=J0(o,a);o=Hr(o,o.next),l=Hr(l,l.next),ua(o,e,n,i,r,s,0),ua(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function BS(t,e,n,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=$0(t,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(YS(c))}r.sort(HS);for(let s=0;s<r.length;s++)n=VS(r[s],n);return n}function HS(t,e){let n=t.x-e.x;if(n===0&&(n=t.y-e.y,n===0)){const i=(t.next.y-t.y)/(t.next.x-t.x),r=(e.next.y-e.y)/(e.next.x-e.x);n=i-r}return n}function VS(t,e){const n=GS(t,e);if(!n)return e;const i=J0(n,t);return Hr(i,i.next),Hr(n,n.next)}function GS(t,e){let n=e;const i=t.x,r=t.y;let s=-1/0,o;if(Ys(t,n))return n;do{if(Ys(t,n.next))return n.next;if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){const f=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=i&&f>s&&(s=f,o=n.x<n.next.x?n:n.next,f===i))return o}n=n.next}while(n!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;n=o;do{if(i>=n.x&&n.x>=l&&i!==n.x&&K0(r<c?i:s,r,l,c,r<c?s:i,r,n.x,n.y)){const f=Math.abs(r-n.y)/(i-n.x);fa(n,t)&&(f<h||f===h&&(n.x>o.x||n.x===o.x&&WS(o,n)))&&(o=n,h=f)}n=n.next}while(n!==a);return o}function WS(t,e){return St(t.prev,t,e.prev)<0&&St(e.next,t,t.next)<0}function XS(t,e,n,i){let r=t;do r.z===0&&(r.z=_h(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,jS(r)}function jS(t){let e,n=1;do{let i=t,r;t=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<n&&(a++,o=o.nextZ,!!o);c++);let l=n;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;i=o}s.nextZ=null,n*=2}while(e>1);return t}function _h(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function YS(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function K0(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function To(t,e,n,i,r,s,o,a){return!(t===o&&e===a)&&K0(t,e,n,i,r,s,o,a)}function qS(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!$S(t,e)&&(fa(t,e)&&fa(e,t)&&KS(t,e)&&(St(t.prev,t,e.prev)||St(t,e.prev,e))||Ys(t,e)&&St(t.prev,t,t.next)>0&&St(e.prev,e,e.next)>0)}function St(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Ys(t,e){return t.x===e.x&&t.y===e.y}function Z0(t,e,n,i){const r=sl(St(t,e,n)),s=sl(St(t,e,i)),o=sl(St(n,i,t)),a=sl(St(n,i,e));return!!(r!==s&&o!==a||r===0&&rl(t,n,e)||s===0&&rl(t,i,e)||o===0&&rl(n,t,i)||a===0&&rl(n,e,i))}function rl(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function sl(t){return t>0?1:t<0?-1:0}function $S(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Z0(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function fa(t,e){return St(t.prev,t,t.next)<0?St(t,e,t.next)>=0&&St(t,t.prev,e)>=0:St(t,e,t.prev)<0||St(t,t.next,e)<0}function KS(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function J0(t,e){const n=gh(t.i,t.x,t.y),i=gh(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function Mm(t,e,n,i){const r=gh(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ha(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function gh(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ZS(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class JS{static triangulate(e,n,i=2){return US(e,n,i)}}class ws{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return ws.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];Em(e),wm(i,e);let o=e.length;n.forEach(Em);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,wm(i,n[l]);const a=JS.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Em(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function wm(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Cd extends dn{constructor(e=new q0([new xe(.5,.5),new xe(-.5,.5),new xe(-.5,-.5),new xe(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Rt(r,3)),this.setAttribute("uv",new Rt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,h=n.steps!==void 0?n.steps:1,f=n.depth!==void 0?n.depth:1;let d=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,_=n.bevelSize!==void 0?n.bevelSize:p-.1,v=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3;const u=n.extrudePath,g=n.UVGenerator!==void 0?n.UVGenerator:QS;let x,y=!1,A,C,T,b;u&&(x=u.getSpacedPoints(h),y=!0,d=!1,A=u.computeFrenetFrames(h,!1),C=new D,T=new D,b=new D),d||(m=0,p=0,_=0,v=0);const E=a.extractPoints(c);let M=E.shape;const L=E.holes;if(!ws.isClockWise(M)){M=M.reverse();for(let $=0,j=L.length;$<j;$++){const O=L[$];ws.isClockWise(O)&&(L[$]=O.reverse())}}function W($){const O=10000000000000001e-36;let H=$[0];for(let de=1;de<=$.length;de++){const le=de%$.length,Z=$[le],me=Z.x-H.x,De=Z.y-H.y,R=me*me+De*De,S=Math.max(Math.abs(Z.x),Math.abs(Z.y),Math.abs(H.x),Math.abs(H.y)),U=O*S*S;if(R<=U){$.splice(le,1),de--;continue}H=Z}}W(M),L.forEach(W);const J=L.length,B=M;for(let $=0;$<J;$++){const j=L[$];M=M.concat(j)}function X($,j,O){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(j,O)}const ne=M.length;function I($,j,O){let H,de,le;const Z=$.x-j.x,me=$.y-j.y,De=O.x-$.x,R=O.y-$.y,S=Z*Z+me*me,U=Z*R-me*De;if(Math.abs(U)>Number.EPSILON){const G=Math.sqrt(S),K=Math.sqrt(De*De+R*R),V=j.x-me/G,ge=j.y+Z/G,re=O.x-R/K,fe=O.y+De/K,ce=((re-V)*R-(fe-ge)*De)/(Z*R-me*De);H=V+Z*ce-$.x,de=ge+me*ce-$.y;const te=H*H+de*de;if(te<=2)return new xe(H,de);le=Math.sqrt(te/2)}else{let G=!1;Z>Number.EPSILON?De>Number.EPSILON&&(G=!0):Z<-Number.EPSILON?De<-Number.EPSILON&&(G=!0):Math.sign(me)===Math.sign(R)&&(G=!0),G?(H=-me,de=Z,le=Math.sqrt(S)):(H=Z,de=me,le=Math.sqrt(S/2))}return new xe(H/le,de/le)}const Q=[];for(let $=0,j=B.length,O=j-1,H=$+1;$<j;$++,O++,H++)O===j&&(O=0),H===j&&(H=0),Q[$]=I(B[$],B[O],B[H]);const ie=[];let Se,Le=Q.concat();for(let $=0,j=J;$<j;$++){const O=L[$];Se=[];for(let H=0,de=O.length,le=de-1,Z=H+1;H<de;H++,le++,Z++)le===de&&(le=0),Z===de&&(Z=0),Se[H]=I(O[H],O[le],O[Z]);ie.push(Se),Le=Le.concat(Se)}let Xe;if(m===0)Xe=ws.triangulateShape(B,L);else{const $=[],j=[];for(let O=0;O<m;O++){const H=O/m,de=p*Math.cos(H*Math.PI/2),le=_*Math.sin(H*Math.PI/2)+v;for(let Z=0,me=B.length;Z<me;Z++){const De=X(B[Z],Q[Z],le);Oe(De.x,De.y,-de),H===0&&$.push(De)}for(let Z=0,me=J;Z<me;Z++){const De=L[Z];Se=ie[Z];const R=[];for(let S=0,U=De.length;S<U;S++){const G=X(De[S],Se[S],le);Oe(G.x,G.y,-de),H===0&&R.push(G)}H===0&&j.push(R)}}Xe=ws.triangulateShape($,j)}const Ze=Xe.length,qe=_+v;for(let $=0;$<ne;$++){const j=d?X(M[$],Le[$],qe):M[$];y?(T.copy(A.normals[0]).multiplyScalar(j.x),C.copy(A.binormals[0]).multiplyScalar(j.y),b.copy(x[0]).add(T).add(C),Oe(b.x,b.y,b.z)):Oe(j.x,j.y,0)}for(let $=1;$<=h;$++)for(let j=0;j<ne;j++){const O=d?X(M[j],Le[j],qe):M[j];y?(T.copy(A.normals[$]).multiplyScalar(O.x),C.copy(A.binormals[$]).multiplyScalar(O.y),b.copy(x[$]).add(T).add(C),Oe(b.x,b.y,b.z)):Oe(O.x,O.y,f/h*$)}for(let $=m-1;$>=0;$--){const j=$/m,O=p*Math.cos(j*Math.PI/2),H=_*Math.sin(j*Math.PI/2)+v;for(let de=0,le=B.length;de<le;de++){const Z=X(B[de],Q[de],H);Oe(Z.x,Z.y,f+O)}for(let de=0,le=L.length;de<le;de++){const Z=L[de];Se=ie[de];for(let me=0,De=Z.length;me<De;me++){const R=X(Z[me],Se[me],H);y?Oe(R.x,R.y+x[h-1].y,x[h-1].x+O):Oe(R.x,R.y,f+O)}}}ee(),oe();function ee(){const $=r.length/3;if(d){let j=0,O=ne*j;for(let H=0;H<Ze;H++){const de=Xe[H];Ne(de[2]+O,de[1]+O,de[0]+O)}j=h+m*2,O=ne*j;for(let H=0;H<Ze;H++){const de=Xe[H];Ne(de[0]+O,de[1]+O,de[2]+O)}}else{for(let j=0;j<Ze;j++){const O=Xe[j];Ne(O[2],O[1],O[0])}for(let j=0;j<Ze;j++){const O=Xe[j];Ne(O[0]+ne*h,O[1]+ne*h,O[2]+ne*h)}}i.addGroup($,r.length/3-$,0)}function oe(){const $=r.length/3;let j=0;Re(B,j),j+=B.length;for(let O=0,H=L.length;O<H;O++){const de=L[O];Re(de,j),j+=de.length}i.addGroup($,r.length/3-$,1)}function Re($,j){let O=$.length;for(;--O>=0;){const H=O;let de=O-1;de<0&&(de=$.length-1);for(let le=0,Z=h+m*2;le<Z;le++){const me=ne*le,De=ne*(le+1),R=j+H+me,S=j+de+me,U=j+de+De,G=j+H+De;je(R,S,U,G)}}}function Oe($,j,O){l.push($),l.push(j),l.push(O)}function Ne($,j,O){rt($),rt(j),rt(O);const H=r.length/3,de=g.generateTopUV(i,r,H-3,H-2,H-1);P(de[0]),P(de[1]),P(de[2])}function je($,j,O,H){rt($),rt(j),rt(H),rt(j),rt(O),rt(H);const de=r.length/3,le=g.generateSideWallUV(i,r,de-6,de-3,de-2,de-1);P(le[0]),P(le[1]),P(le[3]),P(le[1]),P(le[2]),P(le[3])}function rt($){r.push(l[$*3+0]),r.push(l[$*3+1]),r.push(l[$*3+2])}function P($){s.push($.x),s.push($.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return eM(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new mh[r.type]().fromJSON(r)),new Cd(i,e.options)}}const QS={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],h=e[r*3+1];return[new xe(s,o),new xe(a,l),new xe(c,h)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],h=e[i*3+1],f=e[i*3+2],d=e[r*3],p=e[r*3+1],_=e[r*3+2],v=e[s*3],m=e[s*3+1],u=e[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new xe(o,1-l),new xe(c,1-f),new xe(d,1-_),new xe(v,1-u)]:[new xe(a,1-l),new xe(h,1-f),new xe(p,1-_),new xe(m,1-u)]}};function eM(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class sc extends Td{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new sc(e.radius,e.detail)}}class Dr extends dn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,f=e/a,d=n/l,p=[],_=[],v=[],m=[];for(let u=0;u<h;u++){const g=u*d-o;for(let x=0;x<c;x++){const y=x*f-s;_.push(y,-g,0),v.push(0,0,1),m.push(x/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<a;g++){const x=g+c*u,y=g+c*(u+1),A=g+1+c*(u+1),C=g+1+c*u;p.push(x,y,C),p.push(y,A,C)}this.setIndex(p),this.setAttribute("position",new Rt(_,3)),this.setAttribute("normal",new Rt(v,3)),this.setAttribute("uv",new Rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.width,e.height,e.widthSegments,e.heightSegments)}}class bd extends dn{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],h=[];let f=e;const d=(n-e)/r,p=new D,_=new xe;for(let v=0;v<=r;v++){for(let m=0;m<=i;m++){const u=s+m/i*o;p.x=f*Math.cos(u),p.y=f*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/n+1)/2,_.y=(p.y/n+1)/2,h.push(_.x,_.y)}f+=d}for(let v=0;v<r;v++){const m=v*(i+1);for(let u=0;u<i;u++){const g=u+m,x=g,y=g+i+1,A=g+i+2,C=g+1;a.push(x,y,C),a.push(y,A,C)}}this.setIndex(a),this.setAttribute("position",new Rt(l,3)),this.setAttribute("normal",new Rt(c,3)),this.setAttribute("uv",new Rt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bd(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Bo extends dn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],h=new D,f=new D,d=new D;for(let p=0;p<=i;p++)for(let _=0;_<=r;_++){const v=_/r*s,m=p/i*Math.PI*2;f.x=(e+n*Math.cos(m))*Math.cos(v),f.y=(e+n*Math.cos(m))*Math.sin(v),f.z=n*Math.sin(m),a.push(f.x,f.y,f.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(f,h).normalize(),l.push(d.x,d.y,d.z),c.push(_/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=r;_++){const v=(r+1)*p+_-1,m=(r+1)*(p-1)+_-1,u=(r+1)*(p-1)+_,g=(r+1)*p+_;o.push(v,m,g),o.push(m,u,g)}this.setIndex(o),this.setAttribute("position",new Rt(a,3)),this.setAttribute("normal",new Rt(l,3)),this.setAttribute("uv",new Rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ti extends Js{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=b0,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tM extends Js{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=y1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nM extends Js{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Pd extends Ht{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Tu=new gt,Tm=new D,Am=new D;class Q0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.mapType=fi,this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wd,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Tm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Tm),Am.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Am),n.updateMatrixWorld(),Tu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tu,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Tu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Rm=new gt,yo=new D,Au=new D;class iM extends Q0{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xe(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),yo.setFromMatrixPosition(e.matrixWorld),i.position.copy(yo),Au.copy(i.position),Au.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Au),i.updateMatrixWorld(),r.makeTranslation(-yo.x,-yo.y,-yo.z),Rm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rm,i.coordinateSystem,i.reversedDepth)}}class Cm extends Pd{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new iM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ev extends k0{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class rM extends Q0{constructor(){super(new ev(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sM extends Pd{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new rM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class oM extends Pd{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class aM extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class bm{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ke(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class lM extends Xr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Pm(t,e,n,i){const r=cM(i);switch(n){case T0:return t*e;case R0:return t*e/r.components*r.byteLength;case gd:return t*e/r.components*r.byteLength;case C0:return t*e*2/r.components*r.byteLength;case vd:return t*e*2/r.components*r.byteLength;case A0:return t*e*3/r.components*r.byteLength;case qn:return t*e*4/r.components*r.byteLength;case xd:return t*e*4/r.components*r.byteLength;case Ml:case El:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case wl:case Tl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vf:case Wf:return Math.max(t,16)*Math.max(e,8)/4;case Hf:case Gf:return Math.max(t,8)*Math.max(e,8)/2;case Xf:case jf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Yf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case qf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $f:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Kf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Zf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Jf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Qf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case eh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case th:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case nh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ih:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case rh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case sh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case oh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ah:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case lh:case ch:case uh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case fh:case hh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case dh:case ph:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function cM(t){switch(t){case fi:case S0:return{byteLength:1,components:1};case ra:case M0:case va:return{byteLength:2,components:1};case md:case _d:return{byteLength:2,components:4};case kr:case pd:case wi:return{byteLength:4,components:1};case E0:case w0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function tv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function uM(t){const e=new WeakMap;function n(a,l){const c=a.array,h=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const h=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,h);else{f.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<f.length;p++){const _=f[d],v=f[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++d,f[d]=v)}f.length=d+1;for(let p=0,_=f.length;p<_;p++){const v=f[p];t.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var fM=`#ifdef USE_ALPHAHASH
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
}`,$e={alphahash_fragment:fM,alphahash_pars_fragment:hM,alphamap_fragment:dM,alphamap_pars_fragment:pM,alphatest_fragment:mM,alphatest_pars_fragment:_M,aomap_fragment:gM,aomap_pars_fragment:vM,batching_pars_vertex:xM,batching_vertex:yM,begin_vertex:SM,beginnormal_vertex:MM,bsdfs:EM,iridescence_fragment:wM,bumpmap_pars_fragment:TM,clipping_planes_fragment:AM,clipping_planes_pars_fragment:RM,clipping_planes_pars_vertex:CM,clipping_planes_vertex:bM,color_fragment:PM,color_pars_fragment:LM,color_pars_vertex:DM,color_vertex:NM,common:IM,cube_uv_reflection_fragment:UM,defaultnormal_vertex:FM,displacementmap_pars_vertex:OM,displacementmap_vertex:kM,emissivemap_fragment:zM,emissivemap_pars_fragment:BM,colorspace_fragment:HM,colorspace_pars_fragment:VM,envmap_fragment:GM,envmap_common_pars_fragment:WM,envmap_pars_fragment:XM,envmap_pars_vertex:jM,envmap_physical_pars_fragment:iE,envmap_vertex:YM,fog_vertex:qM,fog_pars_vertex:$M,fog_fragment:KM,fog_pars_fragment:ZM,gradientmap_pars_fragment:JM,lightmap_pars_fragment:QM,lights_lambert_fragment:eE,lights_lambert_pars_fragment:tE,lights_pars_begin:nE,lights_toon_fragment:rE,lights_toon_pars_fragment:sE,lights_phong_fragment:oE,lights_phong_pars_fragment:aE,lights_physical_fragment:lE,lights_physical_pars_fragment:cE,lights_fragment_begin:uE,lights_fragment_maps:fE,lights_fragment_end:hE,logdepthbuf_fragment:dE,logdepthbuf_pars_fragment:pE,logdepthbuf_pars_vertex:mE,logdepthbuf_vertex:_E,map_fragment:gE,map_pars_fragment:vE,map_particle_fragment:xE,map_particle_pars_fragment:yE,metalnessmap_fragment:SE,metalnessmap_pars_fragment:ME,morphinstance_vertex:EE,morphcolor_vertex:wE,morphnormal_vertex:TE,morphtarget_pars_vertex:AE,morphtarget_vertex:RE,normal_fragment_begin:CE,normal_fragment_maps:bE,normal_pars_fragment:PE,normal_pars_vertex:LE,normal_vertex:DE,normalmap_pars_fragment:NE,clearcoat_normal_fragment_begin:IE,clearcoat_normal_fragment_maps:UE,clearcoat_pars_fragment:FE,iridescence_pars_fragment:OE,opaque_fragment:kE,packing:zE,premultiplied_alpha_fragment:BE,project_vertex:HE,dithering_fragment:VE,dithering_pars_fragment:GE,roughnessmap_fragment:WE,roughnessmap_pars_fragment:XE,shadowmap_pars_fragment:jE,shadowmap_pars_vertex:YE,shadowmap_vertex:qE,shadowmask_pars_fragment:$E,skinbase_vertex:KE,skinning_pars_vertex:ZE,skinning_vertex:JE,skinnormal_vertex:QE,specularmap_fragment:ew,specularmap_pars_fragment:tw,tonemapping_fragment:nw,tonemapping_pars_fragment:iw,transmission_fragment:rw,transmission_pars_fragment:sw,uv_pars_fragment:ow,uv_pars_vertex:aw,uv_vertex:lw,worldpos_vertex:cw,background_vert:uw,background_frag:fw,backgroundCube_vert:hw,backgroundCube_frag:dw,cube_vert:pw,cube_frag:mw,depth_vert:_w,depth_frag:gw,distanceRGBA_vert:vw,distanceRGBA_frag:xw,equirect_vert:yw,equirect_frag:Sw,linedashed_vert:Mw,linedashed_frag:Ew,meshbasic_vert:ww,meshbasic_frag:Tw,meshlambert_vert:Aw,meshlambert_frag:Rw,meshmatcap_vert:Cw,meshmatcap_frag:bw,meshnormal_vert:Pw,meshnormal_frag:Lw,meshphong_vert:Dw,meshphong_frag:Nw,meshphysical_vert:Iw,meshphysical_frag:Uw,meshtoon_vert:Fw,meshtoon_frag:Ow,points_vert:kw,points_frag:zw,shadow_vert:Bw,shadow_frag:Hw,sprite_vert:Vw,sprite_frag:Gw},Ee={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},ii={basic:{uniforms:Jt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Jt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new et(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Jt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Jt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Jt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new et(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Jt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Jt([Ee.points,Ee.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Jt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Jt([Ee.common,Ee.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Jt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Jt([Ee.sprite,Ee.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Jt([Ee.common,Ee.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Jt([Ee.lights,Ee.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};ii.physical={uniforms:Jt([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const ol={r:0,b:0,g:0},vr=new hi,Ww=new gt;function Xw(t,e,n,i,r,s,o){const a=new et(0);let l=s===!0?0:1,c,h,f=null,d=0,p=null;function _(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?n:e).get(y)),y}function v(x){let y=!1;const A=_(x);A===null?u(a,l):A&&A.isColor&&(u(A,1),y=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(x,y){const A=_(y);A&&(A.isCubeTexture||A.mapping===Mc)?(h===void 0&&(h=new Tt(new Qs(1,1,1),new lr({name:"BackgroundCubeMaterial",uniforms:js(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),vr.copy(y.backgroundRotation),vr.x*=-1,vr.y*=-1,vr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ww.makeRotationFromEuler(vr)),h.material.toneMapped=it.getTransfer(A.colorSpace)!==lt,(f!==A||d!==A.version||p!==t.toneMapping)&&(h.material.needsUpdate=!0,f=A,d=A.version,p=t.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Tt(new Dr(2,2),new lr({name:"BackgroundMaterial",uniforms:js(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=it.getTransfer(A.colorSpace)!==lt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||d!==A.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=A,d=A.version,p=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function u(x,y){x.getRGB(ol,O0(t)),i.buffers.color.setClear(ol.r,ol.g,ol.b,y,o)}function g(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),l=y,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,u(a,l)},render:v,addToRenderList:m,dispose:g}}function jw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(M,L,F,W,J){let B=!1;const X=f(W,F,L);s!==X&&(s=X,c(s.object)),B=p(M,W,F,J),B&&_(M,W,F,J),J!==null&&e.update(J,t.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,y(M,L,F,W),J!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function h(M){return t.deleteVertexArray(M)}function f(M,L,F){const W=F.wireframe===!0;let J=i[M.id];J===void 0&&(J={},i[M.id]=J);let B=J[L.id];B===void 0&&(B={},J[L.id]=B);let X=B[W];return X===void 0&&(X=d(l()),B[W]=X),X}function d(M){const L=[],F=[],W=[];for(let J=0;J<n;J++)L[J]=0,F[J]=0,W[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:W,object:M,attributes:{},index:null}}function p(M,L,F,W){const J=s.attributes,B=L.attributes;let X=0;const ne=F.getAttributes();for(const I in ne)if(ne[I].location>=0){const ie=J[I];let Se=B[I];if(Se===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(Se=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(Se=M.instanceColor)),ie===void 0||ie.attribute!==Se||Se&&ie.data!==Se.data)return!0;X++}return s.attributesNum!==X||s.index!==W}function _(M,L,F,W){const J={},B=L.attributes;let X=0;const ne=F.getAttributes();for(const I in ne)if(ne[I].location>=0){let ie=B[I];ie===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor));const Se={};Se.attribute=ie,ie&&ie.data&&(Se.data=ie.data),J[I]=Se,X++}s.attributes=J,s.attributesNum=X,s.index=W}function v(){const M=s.newAttributes;for(let L=0,F=M.length;L<F;L++)M[L]=0}function m(M){u(M,0)}function u(M,L){const F=s.newAttributes,W=s.enabledAttributes,J=s.attributeDivisors;F[M]=1,W[M]===0&&(t.enableVertexAttribArray(M),W[M]=1),J[M]!==L&&(t.vertexAttribDivisor(M,L),J[M]=L)}function g(){const M=s.newAttributes,L=s.enabledAttributes;for(let F=0,W=L.length;F<W;F++)L[F]!==M[F]&&(t.disableVertexAttribArray(F),L[F]=0)}function x(M,L,F,W,J,B,X){X===!0?t.vertexAttribIPointer(M,L,F,J,B):t.vertexAttribPointer(M,L,F,W,J,B)}function y(M,L,F,W){v();const J=W.attributes,B=F.getAttributes(),X=L.defaultAttributeValues;for(const ne in B){const I=B[ne];if(I.location>=0){let Q=J[ne];if(Q===void 0&&(ne==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),ne==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),Q!==void 0){const ie=Q.normalized,Se=Q.itemSize,Le=e.get(Q);if(Le===void 0)continue;const Xe=Le.buffer,Ze=Le.type,qe=Le.bytesPerElement,ee=Ze===t.INT||Ze===t.UNSIGNED_INT||Q.gpuType===pd;if(Q.isInterleavedBufferAttribute){const oe=Q.data,Re=oe.stride,Oe=Q.offset;if(oe.isInstancedInterleavedBuffer){for(let Ne=0;Ne<I.locationSize;Ne++)u(I.location+Ne,oe.meshPerAttribute);M.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ne=0;Ne<I.locationSize;Ne++)m(I.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let Ne=0;Ne<I.locationSize;Ne++)x(I.location+Ne,Se/I.locationSize,Ze,ie,Re*qe,(Oe+Se/I.locationSize*Ne)*qe,ee)}else{if(Q.isInstancedBufferAttribute){for(let oe=0;oe<I.locationSize;oe++)u(I.location+oe,Q.meshPerAttribute);M.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let oe=0;oe<I.locationSize;oe++)m(I.location+oe);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let oe=0;oe<I.locationSize;oe++)x(I.location+oe,Se/I.locationSize,Ze,ie,Se*qe,Se/I.locationSize*oe*qe,ee)}}else if(X!==void 0){const ie=X[ne];if(ie!==void 0)switch(ie.length){case 2:t.vertexAttrib2fv(I.location,ie);break;case 3:t.vertexAttrib3fv(I.location,ie);break;case 4:t.vertexAttrib4fv(I.location,ie);break;default:t.vertexAttrib1fv(I.location,ie)}}}}g()}function A(){b();for(const M in i){const L=i[M];for(const F in L){const W=L[F];for(const J in W)h(W[J].object),delete W[J];delete L[F]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const F in L){const W=L[F];for(const J in W)h(W[J].object),delete W[J];delete L[F]}delete i[M.id]}function T(M){for(const L in i){const F=i[L];if(F[M.id]===void 0)continue;const W=F[M.id];for(const J in W)h(W[J].object),delete W[J];delete F[M.id]}}function b(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:g}}function Yw(t,e,n){let i;function r(c){i=c}function s(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function o(c,h,f){f!==0&&(t.drawArraysInstanced(i,c,h,f),n.update(h,i,f))}function a(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let p=0;for(let _=0;_<f;_++)p+=h[_];n.update(p,i,1)}function l(c,h,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],h[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,f);let _=0;for(let v=0;v<f;v++)_+=h[v]*d[v];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function qw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==qn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const b=T===va&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==fi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==wi&&!b)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:g,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:A,maxSamples:C}}function $w(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Vi,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=h(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,u=t.get(f);if(!r||_===null||_.length===0||s&&!m)s?h(null):c();else{const g=s?0:i,x=g*4;let y=u.clippingState||null;l.value=y,y=h(_,d,x,p);for(let A=0;A!==x;++A)y[A]=n[A];u.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,p,_){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const u=p+v*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let x=0,y=p;x!==v;++x,y+=4)o.copy(f[x]).applyMatrix4(g,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Kw(t){let e=new WeakMap;function n(o,a){return a===Of?o.mapping=Gs:a===kf&&(o.mapping=Ws),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Of||a===kf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new _S(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Ts=4,Lm=[.125,.215,.35,.446,.526,.582],wr=20,Ru=new ev,Dm=new et;let Cu=null,bu=0,Pu=0,Lu=!1;const Mr=(1+Math.sqrt(5))/2,cs=1/Mr,Nm=[new D(-Mr,cs,0),new D(Mr,cs,0),new D(-cs,0,Mr),new D(cs,0,Mr),new D(0,Mr,-cs),new D(0,Mr,cs),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Zw=new D;class Im{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=Zw}=s;Cu=this._renderer.getRenderTarget(),bu=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),Lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cu,bu,Pu),this._renderer.xr.enabled=Lu,e.scissorTest=!1,al(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Gs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cu=this._renderer.getRenderTarget(),bu=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),Lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:oi,minFilter:oi,generateMipmaps:!1,type:va,format:qn,colorSpace:Xs,depthBuffer:!1},r=Um(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Um(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jw(s)),this._blurMaterial=Qw(s,e,n)}return r}_compileMaterial(e){const n=new Tt(this._lodPlanes[0],e);this._renderer.compile(n,Ru)}_sceneToCubeUV(e,n,i,r,s){const l=new xn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(Dm),f.toneMapping=rr,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const v=new tc({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),m=new Tt(new Qs,v);let u=!1;const g=e.background;g?g.isColor&&(v.color.copy(g),e.background=null,u=!0):(v.color.copy(Dm),u=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[x],s.y,s.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[x]));const A=this._cubeSize;al(r,y*A,x>2?A:0,A,A),f.setRenderTarget(r),u&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=p,f.autoClear=d,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Gs||e.mapping===Ws;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Om()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Tt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;al(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Ru)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Nm[(r-s-1)%Nm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Tt(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*wr-1),v=s/_,m=isFinite(s)?1+Math.floor(h*v):wr;m>wr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wr}`);const u=[];let g=0;for(let T=0;T<wr;++T){const b=T/v,E=Math.exp(-b*b/2);u.push(E),T===0?g+=E:T<m&&(g+=2*E)}for(let T=0;T<u.length;T++)u[T]=u[T]/g;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-i;const y=this._sizeLods[r],A=3*y*(r>x-Ts?r-x+Ts:0),C=4*(this._cubeSize-y);al(n,A,C,3*y,2*y),l.setRenderTarget(n),l.render(f,Ru)}}function Jw(t){const e=[],n=[],i=[];let r=t;const s=t-Ts+1+Lm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ts?l=Lm[o-t+Ts-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,_=6,v=3,m=2,u=1,g=new Float32Array(v*_*p),x=new Float32Array(m*_*p),y=new Float32Array(u*_*p);for(let C=0;C<p;C++){const T=C%3*2/3-1,b=C>2?0:-1,E=[T,b,0,T+2/3,b,0,T+2/3,b+1,0,T,b,0,T+2/3,b+1,0,T,b+1,0];g.set(E,v*_*C),x.set(d,m*_*C);const M=[C,C,C,C,C,C];y.set(M,u*_*C)}const A=new dn;A.setAttribute("position",new ui(g,v)),A.setAttribute("uv",new ui(x,m)),A.setAttribute("faceIndex",new ui(y,u)),e.push(A),r>Ts&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Um(t,e,n){const i=new Br(t,e,n);return i.texture.mapping=Mc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function al(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Qw(t,e,n){const i=new Float32Array(wr),r=new D(0,1,0);return new lr({name:"SphericalGaussianBlur",defines:{n:wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ld(),fragmentShader:`

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
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Fm(){return new lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ld(),fragmentShader:`

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
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Om(){return new lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Ld(){return`

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
	`}function eT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Of||l===kf,h=l===Gs||l===Ws;if(c||h){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new Im(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&r(p)?(n===null&&(n=new Im(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function tT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ca("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function nT(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,_=f.attributes.position;let v=0;if(p!==null){const g=p.array;v=p.version;for(let x=0,y=g.length;x<y;x+=3){const A=g[x+0],C=g[x+1],T=g[x+2];d.push(A,C,C,T,T,A)}}else if(_!==void 0){const g=_.array;v=_.version;for(let x=0,y=g.length/3-1;x<y;x+=3){const A=x+0,C=x+1,T=x+2;d.push(A,C,C,T,T,A)}}else return;const m=new(L0(d)?F0:U0)(d,1);m.version=v;const u=s.get(f);u&&e.remove(u),s.set(f,m)}function h(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function iT(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,d*o,_),n.update(p,i,_))}function h(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,_);let m=0;for(let u=0;u<_;u++)m+=p[u];n.update(m,i,1)}function f(d,p,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)c(d[u]/o,p[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,v,0,_);let u=0;for(let g=0;g<_;g++)u+=p[g]*v[g];n.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function rT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function sT(t,e,n){const i=new WeakMap,r=new ut;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let M=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let A=a.attributes.position.count*y,C=1;A>e.maxTextureSize&&(C=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const T=new Float32Array(A*C*4*f),b=new D0(T,A,C,f);b.type=wi,b.needsUpdate=!0;const E=y*4;for(let L=0;L<f;L++){const F=u[L],W=g[L],J=x[L],B=A*C*4*L;for(let X=0;X<F.count;X++){const ne=X*E;_===!0&&(r.fromBufferAttribute(F,X),T[B+ne+0]=r.x,T[B+ne+1]=r.y,T[B+ne+2]=r.z,T[B+ne+3]=0),v===!0&&(r.fromBufferAttribute(W,X),T[B+ne+4]=r.x,T[B+ne+5]=r.y,T[B+ne+6]=r.z,T[B+ne+7]=0),m===!0&&(r.fromBufferAttribute(J,X),T[B+ne+8]=r.x,T[B+ne+9]=r.y,T[B+ne+10]=r.z,T[B+ne+11]=J.itemSize===4?r.w:1)}}d={count:f,texture:b,size:new xe(A,C)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function oT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const nv=new tn,km=new H0(1,1),iv=new D0,rv=new Q1,sv=new z0,zm=[],Bm=[],Hm=new Float32Array(16),Vm=new Float32Array(9),Gm=new Float32Array(4);function eo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=zm[r];if(s===void 0&&(s=new Float32Array(r),zm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function It(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ut(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function wc(t,e){let n=Bm[e];n===void 0&&(n=new Int32Array(e),Bm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function aT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function lT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2fv(this.addr,e),Ut(n,e)}}function cT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(It(n,e))return;t.uniform3fv(this.addr,e),Ut(n,e)}}function uT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4fv(this.addr,e),Ut(n,e)}}function fT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;Gm.set(i),t.uniformMatrix2fv(this.addr,!1,Gm),Ut(n,i)}}function hT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;Vm.set(i),t.uniformMatrix3fv(this.addr,!1,Vm),Ut(n,i)}}function dT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;Hm.set(i),t.uniformMatrix4fv(this.addr,!1,Hm),Ut(n,i)}}function pT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function mT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2iv(this.addr,e),Ut(n,e)}}function _T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3iv(this.addr,e),Ut(n,e)}}function gT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4iv(this.addr,e),Ut(n,e)}}function vT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function xT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2uiv(this.addr,e),Ut(n,e)}}function yT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3uiv(this.addr,e),Ut(n,e)}}function ST(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4uiv(this.addr,e),Ut(n,e)}}function MT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(km.compareFunction=P0,s=km):s=nv,n.setTexture2D(e||s,r)}function ET(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||rv,r)}function wT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||sv,r)}function TT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||iv,r)}function AT(t){switch(t){case 5126:return aT;case 35664:return lT;case 35665:return cT;case 35666:return uT;case 35674:return fT;case 35675:return hT;case 35676:return dT;case 5124:case 35670:return pT;case 35667:case 35671:return mT;case 35668:case 35672:return _T;case 35669:case 35673:return gT;case 5125:return vT;case 36294:return xT;case 36295:return yT;case 36296:return ST;case 35678:case 36198:case 36298:case 36306:case 35682:return MT;case 35679:case 36299:case 36307:return ET;case 35680:case 36300:case 36308:case 36293:return wT;case 36289:case 36303:case 36311:case 36292:return TT}}function RT(t,e){t.uniform1fv(this.addr,e)}function CT(t,e){const n=eo(e,this.size,2);t.uniform2fv(this.addr,n)}function bT(t,e){const n=eo(e,this.size,3);t.uniform3fv(this.addr,n)}function PT(t,e){const n=eo(e,this.size,4);t.uniform4fv(this.addr,n)}function LT(t,e){const n=eo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function DT(t,e){const n=eo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function NT(t,e){const n=eo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function IT(t,e){t.uniform1iv(this.addr,e)}function UT(t,e){t.uniform2iv(this.addr,e)}function FT(t,e){t.uniform3iv(this.addr,e)}function OT(t,e){t.uniform4iv(this.addr,e)}function kT(t,e){t.uniform1uiv(this.addr,e)}function zT(t,e){t.uniform2uiv(this.addr,e)}function BT(t,e){t.uniform3uiv(this.addr,e)}function HT(t,e){t.uniform4uiv(this.addr,e)}function VT(t,e,n){const i=this.cache,r=e.length,s=wc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||nv,s[o])}function GT(t,e,n){const i=this.cache,r=e.length,s=wc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||rv,s[o])}function WT(t,e,n){const i=this.cache,r=e.length,s=wc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||sv,s[o])}function XT(t,e,n){const i=this.cache,r=e.length,s=wc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||iv,s[o])}function jT(t){switch(t){case 5126:return RT;case 35664:return CT;case 35665:return bT;case 35666:return PT;case 35674:return LT;case 35675:return DT;case 35676:return NT;case 5124:case 35670:return IT;case 35667:case 35671:return UT;case 35668:case 35672:return FT;case 35669:case 35673:return OT;case 5125:return kT;case 36294:return zT;case 36295:return BT;case 36296:return HT;case 35678:case 36198:case 36298:case 36306:case 35682:return VT;case 35679:case 36299:case 36307:return GT;case 35680:case 36300:case 36308:case 36293:return WT;case 36289:case 36303:case 36311:case 36292:return XT}}class YT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=AT(n.type)}}class qT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=jT(n.type)}}class $T{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Du=/(\w+)(\])?(\[|\.)?/g;function Wm(t,e){t.seq.push(e),t.map[e.id]=e}function KT(t,e,n){const i=t.name,r=i.length;for(Du.lastIndex=0;;){const s=Du.exec(i),o=Du.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Wm(n,c===void 0?new YT(a,t,e):new qT(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new $T(a),Wm(n,f)),n=f}}}class Rl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);KT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Xm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const ZT=37297;let JT=0;function QT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const jm=new Ye;function e2(t){it._getMatrix(jm,it.workingColorSpace,t);const e=`mat3( ${jm.elements.map(n=>n.toFixed(4))} )`;switch(it.getTransfer(t)){case Jl:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Ym(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+QT(t.getShaderSource(e),a)}else return s}function t2(t,e){const n=e2(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function n2(t,e){let n;switch(e){case h1:n="Linear";break;case d1:n="Reinhard";break;case p1:n="Cineon";break;case m1:n="ACESFilmic";break;case g1:n="AgX";break;case v1:n="Neutral";break;case _1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ll=new D;function i2(){it.getLuminanceCoefficients(ll);const t=ll.x.toFixed(4),e=ll.y.toFixed(4),n=ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ao).join(`
`)}function s2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function o2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ao(t){return t!==""}function qm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $m(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const a2=/^[ \t]*#include +<([\w\d./]+)>/gm;function vh(t){return t.replace(a2,c2)}const l2=new Map;function c2(t,e){let n=$e[e];if(n===void 0){const i=l2.get(e);if(i!==void 0)n=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return vh(n)}const u2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Km(t){return t.replace(u2,f2)}function f2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function h2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===g0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===v0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===xi&&(e="SHADOWMAP_TYPE_VSM"),e}function d2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Gs:case Ws:e="ENVMAP_TYPE_CUBE";break;case Mc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function p2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function m2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case x0:e="ENVMAP_BLENDING_MULTIPLY";break;case u1:e="ENVMAP_BLENDING_MIX";break;case f1:e="ENVMAP_BLENDING_ADD";break}return e}function _2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function g2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=h2(n),c=d2(n),h=p2(n),f=m2(n),d=_2(n),p=r2(n),_=s2(s),v=r.createProgram();let m,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ao).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ao).join(`
`),u.length>0&&(u+=`
`)):(m=[Zm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ao).join(`
`),u=[Zm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==rr?"#define TONE_MAPPING":"",n.toneMapping!==rr?$e.tonemapping_pars_fragment:"",n.toneMapping!==rr?n2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,t2("linearToOutputTexel",n.outputColorSpace),i2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ao).join(`
`)),o=vh(o),o=qm(o,n),o=$m(o,n),a=vh(a),a=qm(a,n),a=$m(a,n),o=Km(o),a=Km(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Jp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Jp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=g+m+o,y=g+u+a,A=Xm(r,r.VERTEX_SHADER,x),C=Xm(r,r.FRAGMENT_SHADER,y);r.attachShader(v,A),r.attachShader(v,C),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function T(L){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(v)||"",W=r.getShaderInfoLog(A)||"",J=r.getShaderInfoLog(C)||"",B=F.trim(),X=W.trim(),ne=J.trim();let I=!0,Q=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(I=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,A,C);else{const ie=Ym(r,A,"vertex"),Se=Ym(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+ie+`
`+Se)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(X===""||ne==="")&&(Q=!1);Q&&(L.diagnostics={runnable:I,programLog:B,vertexShader:{log:X,prefix:m},fragmentShader:{log:ne,prefix:u}})}r.deleteShader(A),r.deleteShader(C),b=new Rl(r,v),E=o2(r,v)}let b;this.getUniforms=function(){return b===void 0&&T(this),b};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,ZT)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=JT++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=C,this}let v2=0;class x2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new y2(e),n.set(e,i)),i}}class y2{constructor(e){this.id=v2++,this.code=e,this.usedTimes=0}}function S2(t,e,n,i,r,s,o){const a=new N0,l=new x2,c=new Set,h=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,L,F,W){const J=F.fog,B=W.geometry,X=E.isMeshStandardMaterial?F.environment:null,ne=(E.isMeshStandardMaterial?n:e).get(E.envMap||X),I=ne&&ne.mapping===Mc?ne.image.height:null,Q=_[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const ie=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Se=ie!==void 0?ie.length:0;let Le=0;B.morphAttributes.position!==void 0&&(Le=1),B.morphAttributes.normal!==void 0&&(Le=2),B.morphAttributes.color!==void 0&&(Le=3);let Xe,Ze,qe,ee;if(Q){const ze=ii[Q];Xe=ze.vertexShader,Ze=ze.fragmentShader}else Xe=E.vertexShader,Ze=E.fragmentShader,l.update(E),qe=l.getVertexShaderID(E),ee=l.getFragmentShaderID(E);const oe=t.getRenderTarget(),Re=t.state.buffers.depth.getReversed(),Oe=W.isInstancedMesh===!0,Ne=W.isBatchedMesh===!0,je=!!E.map,rt=!!E.matcap,P=!!ne,$=!!E.aoMap,j=!!E.lightMap,O=!!E.bumpMap,H=!!E.normalMap,de=!!E.displacementMap,le=!!E.emissiveMap,Z=!!E.metalnessMap,me=!!E.roughnessMap,De=E.anisotropy>0,R=E.clearcoat>0,S=E.dispersion>0,U=E.iridescence>0,G=E.sheen>0,K=E.transmission>0,V=De&&!!E.anisotropyMap,ge=R&&!!E.clearcoatMap,re=R&&!!E.clearcoatNormalMap,fe=R&&!!E.clearcoatRoughnessMap,ce=U&&!!E.iridescenceMap,te=U&&!!E.iridescenceThicknessMap,ae=G&&!!E.sheenColorMap,we=G&&!!E.sheenRoughnessMap,Ae=!!E.specularMap,ye=!!E.specularColorMap,Ue=!!E.specularIntensityMap,N=K&&!!E.transmissionMap,ue=K&&!!E.thicknessMap,Me=!!E.gradientMap,be=!!E.alphaMap,pe=E.alphaTest>0,se=!!E.alphaHash,Ie=!!E.extensions;let Ge=rr;E.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ge=t.toneMapping);const st={shaderID:Q,shaderType:E.type,shaderName:E.name,vertexShader:Xe,fragmentShader:Ze,defines:E.defines,customVertexShaderID:qe,customFragmentShaderID:ee,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ne,batchingColor:Ne&&W._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&W.instanceColor!==null,instancingMorph:Oe&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Xs,alphaToCoverage:!!E.alphaToCoverage,map:je,matcap:rt,envMap:P,envMapMode:P&&ne.mapping,envMapCubeUVHeight:I,aoMap:$,lightMap:j,bumpMap:O,normalMap:H,displacementMap:d&&de,emissiveMap:le,normalMapObjectSpace:H&&E.normalMapType===M1,normalMapTangentSpace:H&&E.normalMapType===b0,metalnessMap:Z,roughnessMap:me,anisotropy:De,anisotropyMap:V,clearcoat:R,clearcoatMap:ge,clearcoatNormalMap:re,clearcoatRoughnessMap:fe,dispersion:S,iridescence:U,iridescenceMap:ce,iridescenceThicknessMap:te,sheen:G,sheenColorMap:ae,sheenRoughnessMap:we,specularMap:Ae,specularColorMap:ye,specularIntensityMap:Ue,transmission:K,transmissionMap:N,thicknessMap:ue,gradientMap:Me,opaque:E.transparent===!1&&E.blending===Ns&&E.alphaToCoverage===!1,alphaMap:be,alphaTest:pe,alphaHash:se,combine:E.combine,mapUv:je&&v(E.map.channel),aoMapUv:$&&v(E.aoMap.channel),lightMapUv:j&&v(E.lightMap.channel),bumpMapUv:O&&v(E.bumpMap.channel),normalMapUv:H&&v(E.normalMap.channel),displacementMapUv:de&&v(E.displacementMap.channel),emissiveMapUv:le&&v(E.emissiveMap.channel),metalnessMapUv:Z&&v(E.metalnessMap.channel),roughnessMapUv:me&&v(E.roughnessMap.channel),anisotropyMapUv:V&&v(E.anisotropyMap.channel),clearcoatMapUv:ge&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:re&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:te&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:we&&v(E.sheenRoughnessMap.channel),specularMapUv:Ae&&v(E.specularMap.channel),specularColorMapUv:ye&&v(E.specularColorMap.channel),specularIntensityMapUv:Ue&&v(E.specularIntensityMap.channel),transmissionMapUv:N&&v(E.transmissionMap.channel),thicknessMapUv:ue&&v(E.thicknessMap.channel),alphaMapUv:be&&v(E.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(H||De),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!B.attributes.uv&&(je||be),fog:!!J,useFog:E.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Re,skinning:W.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Le,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ge,decodeVideoTexture:je&&E.map.isVideoTexture===!0&&it.getTransfer(E.map.colorSpace)===lt,decodeVideoTextureEmissive:le&&E.emissiveMap.isVideoTexture===!0&&it.getTransfer(E.emissiveMap.colorSpace)===lt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Nn,flipSided:E.side===hn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ie&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&E.extensions.multiDraw===!0||Ne)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return st.vertexUv1s=c.has(1),st.vertexUv2s=c.has(2),st.vertexUv3s=c.has(3),c.clear(),st}function u(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)M.push(L),M.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(g(M,E),x(M,E),M.push(t.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function g(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function x(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function y(E){const M=_[E.type];let L;if(M){const F=ii[M];L=hS.clone(F.uniforms)}else L=E.uniforms;return L}function A(E,M){let L;for(let F=0,W=h.length;F<W;F++){const J=h[F];if(J.cacheKey===M){L=J,++L.usedTimes;break}}return L===void 0&&(L=new g2(t,M,E,s),h.push(L)),L}function C(E){if(--E.usedTimes===0){const M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function T(E){l.remove(E)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:A,releaseProgram:C,releaseShaderCache:T,programs:h,dispose:b}}function M2(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function E2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Jm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Qm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,_,v,m){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:v,group:m},t[e]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=p,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=v,u.group=m),e++,u}function a(f,d,p,_,v,m){const u=o(f,d,p,_,v,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(f,d,p,_,v,m){const u=o(f,d,p,_,v,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,d){n.length>1&&n.sort(f||E2),i.length>1&&i.sort(d||Jm),r.length>1&&r.sort(d||Jm)}function h(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function w2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Qm,t.set(i,[o])):r>=s.length?(o=new Qm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function T2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new D,color:new et};break;case"SpotLight":n={position:new D,direction:new D,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function A2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let R2=0;function C2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function b2(t){const e=new T2,n=A2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const r=new D,s=new gt,o=new gt;function a(c){let h=0,f=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,v=0,m=0,u=0,g=0,x=0,y=0,A=0,C=0,T=0;c.sort(C2);for(let E=0,M=c.length;E<M;E++){const L=c[E],F=L.color,W=L.intensity,J=L.distance,B=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=F.r*W,f+=F.g*W,d+=F.b*W;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],W);T++}else if(L.isDirectionalLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ne=L.shadow,I=n.get(L);I.shadowIntensity=ne.intensity,I.shadowBias=ne.bias,I.shadowNormalBias=ne.normalBias,I.shadowRadius=ne.radius,I.shadowMapSize=ne.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=B,i.directionalShadowMatrix[p]=L.shadow.matrix,g++}i.directional[p]=X,p++}else if(L.isSpotLight){const X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(F).multiplyScalar(W),X.distance=J,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[v]=X;const ne=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,ne.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[v]=ne.matrix,L.castShadow){const I=n.get(L);I.shadowIntensity=ne.intensity,I.shadowBias=ne.bias,I.shadowNormalBias=ne.normalBias,I.shadowRadius=ne.radius,I.shadowMapSize=ne.mapSize,i.spotShadow[v]=I,i.spotShadowMap[v]=B,y++}v++}else if(L.isRectAreaLight){const X=e.get(L);X.color.copy(F).multiplyScalar(W),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=X,m++}else if(L.isPointLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const ne=L.shadow,I=n.get(L);I.shadowIntensity=ne.intensity,I.shadowBias=ne.bias,I.shadowNormalBias=ne.normalBias,I.shadowRadius=ne.radius,I.shadowMapSize=ne.mapSize,I.shadowCameraNear=ne.camera.near,I.shadowCameraFar=ne.camera.far,i.pointShadow[_]=I,i.pointShadowMap[_]=B,i.pointShadowMatrix[_]=L.shadow.matrix,x++}i.point[_]=X,_++}else if(L.isHemisphereLight){const X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(W),X.groundColor.copy(L.groundColor).multiplyScalar(W),i.hemi[u]=X,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;const b=i.hash;(b.directionalLength!==p||b.pointLength!==_||b.spotLength!==v||b.rectAreaLength!==m||b.hemiLength!==u||b.numDirectionalShadows!==g||b.numPointShadows!==x||b.numSpotShadows!==y||b.numSpotMaps!==A||b.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=T,b.directionalLength=p,b.pointLength=_,b.spotLength=v,b.rectAreaLength=m,b.hemiLength=u,b.numDirectionalShadows=g,b.numPointShadows=x,b.numSpotShadows=y,b.numSpotMaps=A,b.numLightProbes=T,i.version=R2++)}function l(c,h){let f=0,d=0,p=0,_=0,v=0;const m=h.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const x=c[u];if(x.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(x.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function e_(t){const e=new b2(t),n=[],i=[];function r(h){c.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function o(h){i.push(h)}function a(){e.setup(n)}function l(h){e.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function P2(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new e_(t),e.set(r,[a])):s>=o.length?(a=new e_(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const L2=`void main() {
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
}`;function N2(t,e,n){let i=new wd;const r=new xe,s=new xe,o=new ut,a=new tM({depthPacking:S1}),l=new nM,c={},h=n.maxTextureSize,f={[ar]:hn,[hn]:ar,[Nn]:Nn},d=new lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:L2,fragmentShader:D2}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new dn;_.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Tt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=g0;let u=this.type;this.render=function(C,T,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const E=t.getRenderTarget(),M=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),F=t.state;F.setBlending(ir),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const W=u!==xi&&this.type===xi,J=u===xi&&this.type!==xi;for(let B=0,X=C.length;B<X;B++){const ne=C[B],I=ne.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const Q=I.getFrameExtents();if(r.multiply(Q),s.copy(I.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Q.x),r.x=s.x*Q.x,I.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Q.y),r.y=s.y*Q.y,I.mapSize.y=s.y)),I.map===null||W===!0||J===!0){const Se=this.type!==xi?{minFilter:Zn,magFilter:Zn}:{};I.map!==null&&I.map.dispose(),I.map=new Br(r.x,r.y,Se),I.map.texture.name=ne.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const ie=I.getViewportCount();for(let Se=0;Se<ie;Se++){const Le=I.getViewport(Se);o.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),F.viewport(o),I.updateMatrices(ne,Se),i=I.getFrustum(),y(T,b,I.camera,ne,this.type)}I.isPointLightShadow!==!0&&this.type===xi&&g(I,b),I.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(E,M,L)};function g(C,T){const b=e.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Br(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(T,null,b,d,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(T,null,b,p,v,null)}function x(C,T,b,E){let M=null;const L=b.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)M=L;else if(M=b.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const F=M.uuid,W=T.uuid;let J=c[F];J===void 0&&(J={},c[F]=J);let B=J[W];B===void 0&&(B=M.clone(),J[W]=B,T.addEventListener("dispose",A)),M=B}if(M.visible=T.visible,M.wireframe=T.wireframe,E===xi?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:f[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,b.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=t.properties.get(M);F.light=b}return M}function y(C,T,b,E,M){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===xi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,C.matrixWorld);const W=e.update(C),J=C.material;if(Array.isArray(J)){const B=W.groups;for(let X=0,ne=B.length;X<ne;X++){const I=B[X],Q=J[I.materialIndex];if(Q&&Q.visible){const ie=x(C,Q,E,M);C.onBeforeShadow(t,C,T,b,W,ie,I),t.renderBufferDirect(b,null,W,ie,C,I),C.onAfterShadow(t,C,T,b,W,ie,I)}}}else if(J.visible){const B=x(C,J,E,M);C.onBeforeShadow(t,C,T,b,W,B,null),t.renderBufferDirect(b,null,W,B,C,null),C.onAfterShadow(t,C,T,b,W,B,null)}}const F=C.children;for(let W=0,J=F.length;W<J;W++)y(F[W],T,b,E,M)}function A(C){C.target.removeEventListener("dispose",A);for(const b in c){const E=c[b],M=C.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const I2={[Pf]:Lf,[Df]:Uf,[Nf]:Ff,[Vs]:If,[Lf]:Pf,[Uf]:Df,[Ff]:Nf,[If]:Vs};function U2(t,e){function n(){let N=!1;const ue=new ut;let Me=null;const be=new ut(0,0,0,0);return{setMask:function(pe){Me!==pe&&!N&&(t.colorMask(pe,pe,pe,pe),Me=pe)},setLocked:function(pe){N=pe},setClear:function(pe,se,Ie,Ge,st){st===!0&&(pe*=Ge,se*=Ge,Ie*=Ge),ue.set(pe,se,Ie,Ge),be.equals(ue)===!1&&(t.clearColor(pe,se,Ie,Ge),be.copy(ue))},reset:function(){N=!1,Me=null,be.set(-1,0,0,0)}}}function i(){let N=!1,ue=!1,Me=null,be=null,pe=null;return{setReversed:function(se){if(ue!==se){const Ie=e.get("EXT_clip_control");se?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),ue=se;const Ge=pe;pe=null,this.setClear(Ge)}},getReversed:function(){return ue},setTest:function(se){se?oe(t.DEPTH_TEST):Re(t.DEPTH_TEST)},setMask:function(se){Me!==se&&!N&&(t.depthMask(se),Me=se)},setFunc:function(se){if(ue&&(se=I2[se]),be!==se){switch(se){case Pf:t.depthFunc(t.NEVER);break;case Lf:t.depthFunc(t.ALWAYS);break;case Df:t.depthFunc(t.LESS);break;case Vs:t.depthFunc(t.LEQUAL);break;case Nf:t.depthFunc(t.EQUAL);break;case If:t.depthFunc(t.GEQUAL);break;case Uf:t.depthFunc(t.GREATER);break;case Ff:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}be=se}},setLocked:function(se){N=se},setClear:function(se){pe!==se&&(ue&&(se=1-se),t.clearDepth(se),pe=se)},reset:function(){N=!1,Me=null,be=null,pe=null,ue=!1}}}function r(){let N=!1,ue=null,Me=null,be=null,pe=null,se=null,Ie=null,Ge=null,st=null;return{setTest:function(ze){N||(ze?oe(t.STENCIL_TEST):Re(t.STENCIL_TEST))},setMask:function(ze){ue!==ze&&!N&&(t.stencilMask(ze),ue=ze)},setFunc:function(ze,$t,Tn){(Me!==ze||be!==$t||pe!==Tn)&&(t.stencilFunc(ze,$t,Tn),Me=ze,be=$t,pe=Tn)},setOp:function(ze,$t,Tn){(se!==ze||Ie!==$t||Ge!==Tn)&&(t.stencilOp(ze,$t,Tn),se=ze,Ie=$t,Ge=Tn)},setLocked:function(ze){N=ze},setClear:function(ze){st!==ze&&(t.clearStencil(ze),st=ze)},reset:function(){N=!1,ue=null,Me=null,be=null,pe=null,se=null,Ie=null,Ge=null,st=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let h={},f={},d=new WeakMap,p=[],_=null,v=!1,m=null,u=null,g=null,x=null,y=null,A=null,C=null,T=new et(0,0,0),b=0,E=!1,M=null,L=null,F=null,W=null,J=null;const B=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ne=0;const I=t.getParameter(t.VERSION);I.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(I)[1]),X=ne>=1):I.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),X=ne>=2);let Q=null,ie={};const Se=t.getParameter(t.SCISSOR_BOX),Le=t.getParameter(t.VIEWPORT),Xe=new ut().fromArray(Se),Ze=new ut().fromArray(Le);function qe(N,ue,Me,be){const pe=new Uint8Array(4),se=t.createTexture();t.bindTexture(N,se),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ie=0;Ie<Me;Ie++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,be,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(ue+Ie,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return se}const ee={};ee[t.TEXTURE_2D]=qe(t.TEXTURE_2D,t.TEXTURE_2D,1),ee[t.TEXTURE_CUBE_MAP]=qe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[t.TEXTURE_2D_ARRAY]=qe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ee[t.TEXTURE_3D]=qe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(t.DEPTH_TEST),o.setFunc(Vs),O(!1),H(jp),oe(t.CULL_FACE),$(ir);function oe(N){h[N]!==!0&&(t.enable(N),h[N]=!0)}function Re(N){h[N]!==!1&&(t.disable(N),h[N]=!1)}function Oe(N,ue){return f[N]!==ue?(t.bindFramebuffer(N,ue),f[N]=ue,N===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ue),N===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function Ne(N,ue){let Me=p,be=!1;if(N){Me=d.get(ue),Me===void 0&&(Me=[],d.set(ue,Me));const pe=N.textures;if(Me.length!==pe.length||Me[0]!==t.COLOR_ATTACHMENT0){for(let se=0,Ie=pe.length;se<Ie;se++)Me[se]=t.COLOR_ATTACHMENT0+se;Me.length=pe.length,be=!0}}else Me[0]!==t.BACK&&(Me[0]=t.BACK,be=!0);be&&t.drawBuffers(Me)}function je(N){return _!==N?(t.useProgram(N),_=N,!0):!1}const rt={[Er]:t.FUNC_ADD,[Yy]:t.FUNC_SUBTRACT,[qy]:t.FUNC_REVERSE_SUBTRACT};rt[$y]=t.MIN,rt[Ky]=t.MAX;const P={[Zy]:t.ZERO,[Jy]:t.ONE,[Qy]:t.SRC_COLOR,[Cf]:t.SRC_ALPHA,[s1]:t.SRC_ALPHA_SATURATE,[i1]:t.DST_COLOR,[t1]:t.DST_ALPHA,[e1]:t.ONE_MINUS_SRC_COLOR,[bf]:t.ONE_MINUS_SRC_ALPHA,[r1]:t.ONE_MINUS_DST_COLOR,[n1]:t.ONE_MINUS_DST_ALPHA,[o1]:t.CONSTANT_COLOR,[a1]:t.ONE_MINUS_CONSTANT_COLOR,[l1]:t.CONSTANT_ALPHA,[c1]:t.ONE_MINUS_CONSTANT_ALPHA};function $(N,ue,Me,be,pe,se,Ie,Ge,st,ze){if(N===ir){v===!0&&(Re(t.BLEND),v=!1);return}if(v===!1&&(oe(t.BLEND),v=!0),N!==jy){if(N!==m||ze!==E){if((u!==Er||y!==Er)&&(t.blendEquation(t.FUNC_ADD),u=Er,y=Er),ze)switch(N){case Ns:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Yp:t.blendFunc(t.ONE,t.ONE);break;case qp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case $p:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ns:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Yp:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case qp:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $p:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}g=null,x=null,A=null,C=null,T.set(0,0,0),b=0,m=N,E=ze}return}pe=pe||ue,se=se||Me,Ie=Ie||be,(ue!==u||pe!==y)&&(t.blendEquationSeparate(rt[ue],rt[pe]),u=ue,y=pe),(Me!==g||be!==x||se!==A||Ie!==C)&&(t.blendFuncSeparate(P[Me],P[be],P[se],P[Ie]),g=Me,x=be,A=se,C=Ie),(Ge.equals(T)===!1||st!==b)&&(t.blendColor(Ge.r,Ge.g,Ge.b,st),T.copy(Ge),b=st),m=N,E=!1}function j(N,ue){N.side===Nn?Re(t.CULL_FACE):oe(t.CULL_FACE);let Me=N.side===hn;ue&&(Me=!Me),O(Me),N.blending===Ns&&N.transparent===!1?$(ir):$(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const be=N.stencilWrite;a.setTest(be),be&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),le(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?oe(t.SAMPLE_ALPHA_TO_COVERAGE):Re(t.SAMPLE_ALPHA_TO_COVERAGE)}function O(N){M!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),M=N)}function H(N){N!==Wy?(oe(t.CULL_FACE),N!==L&&(N===jp?t.cullFace(t.BACK):N===Xy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Re(t.CULL_FACE),L=N}function de(N){N!==F&&(X&&t.lineWidth(N),F=N)}function le(N,ue,Me){N?(oe(t.POLYGON_OFFSET_FILL),(W!==ue||J!==Me)&&(t.polygonOffset(ue,Me),W=ue,J=Me)):Re(t.POLYGON_OFFSET_FILL)}function Z(N){N?oe(t.SCISSOR_TEST):Re(t.SCISSOR_TEST)}function me(N){N===void 0&&(N=t.TEXTURE0+B-1),Q!==N&&(t.activeTexture(N),Q=N)}function De(N,ue,Me){Me===void 0&&(Q===null?Me=t.TEXTURE0+B-1:Me=Q);let be=ie[Me];be===void 0&&(be={type:void 0,texture:void 0},ie[Me]=be),(be.type!==N||be.texture!==ue)&&(Q!==Me&&(t.activeTexture(Me),Q=Me),t.bindTexture(N,ue||ee[N]),be.type=N,be.texture=ue)}function R(){const N=ie[Q];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function S(){try{t.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function U(){try{t.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function G(){try{t.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{t.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function V(){try{t.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{t.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{t.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{t.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{t.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{t.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(N){Xe.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),Xe.copy(N))}function we(N){Ze.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),Ze.copy(N))}function Ae(N,ue){let Me=c.get(ue);Me===void 0&&(Me=new WeakMap,c.set(ue,Me));let be=Me.get(N);be===void 0&&(be=t.getUniformBlockIndex(ue,N.name),Me.set(N,be))}function ye(N,ue){const be=c.get(ue).get(N);l.get(ue)!==be&&(t.uniformBlockBinding(ue,be,N.__bindingPointIndex),l.set(ue,be))}function Ue(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},Q=null,ie={},f={},d=new WeakMap,p=[],_=null,v=!1,m=null,u=null,g=null,x=null,y=null,A=null,C=null,T=new et(0,0,0),b=0,E=!1,M=null,L=null,F=null,W=null,J=null,Xe.set(0,0,t.canvas.width,t.canvas.height),Ze.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:Re,bindFramebuffer:Oe,drawBuffers:Ne,useProgram:je,setBlending:$,setMaterial:j,setFlipSided:O,setCullFace:H,setLineWidth:de,setPolygonOffset:le,setScissorTest:Z,activeTexture:me,bindTexture:De,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:U,texImage2D:ce,texImage3D:te,updateUBOMapping:Ae,uniformBlockBinding:ye,texStorage2D:re,texStorage3D:fe,texSubImage2D:G,texSubImage3D:K,compressedTexSubImage2D:V,compressedTexSubImage3D:ge,scissor:ae,viewport:we,reset:Ue}}function F2(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xe,h=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,S){return p?new OffscreenCanvas(R,S):ec("canvas")}function v(R,S,U){let G=1;const K=De(R);if((K.width>U||K.height>U)&&(G=U/Math.max(K.width,K.height)),G<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const V=Math.floor(G*K.width),ge=Math.floor(G*K.height);f===void 0&&(f=_(V,ge));const re=S?_(V,ge):f;return re.width=V,re.height=ge,re.getContext("2d").drawImage(R,0,0,V,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+V+"x"+ge+")."),re}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function m(R){return R.generateMipmaps}function u(R){t.generateMipmap(R)}function g(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(R,S,U,G,K=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let V=S;if(S===t.RED&&(U===t.FLOAT&&(V=t.R32F),U===t.HALF_FLOAT&&(V=t.R16F),U===t.UNSIGNED_BYTE&&(V=t.R8)),S===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(V=t.R8UI),U===t.UNSIGNED_SHORT&&(V=t.R16UI),U===t.UNSIGNED_INT&&(V=t.R32UI),U===t.BYTE&&(V=t.R8I),U===t.SHORT&&(V=t.R16I),U===t.INT&&(V=t.R32I)),S===t.RG&&(U===t.FLOAT&&(V=t.RG32F),U===t.HALF_FLOAT&&(V=t.RG16F),U===t.UNSIGNED_BYTE&&(V=t.RG8)),S===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&(V=t.RG8UI),U===t.UNSIGNED_SHORT&&(V=t.RG16UI),U===t.UNSIGNED_INT&&(V=t.RG32UI),U===t.BYTE&&(V=t.RG8I),U===t.SHORT&&(V=t.RG16I),U===t.INT&&(V=t.RG32I)),S===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&(V=t.RGB8UI),U===t.UNSIGNED_SHORT&&(V=t.RGB16UI),U===t.UNSIGNED_INT&&(V=t.RGB32UI),U===t.BYTE&&(V=t.RGB8I),U===t.SHORT&&(V=t.RGB16I),U===t.INT&&(V=t.RGB32I)),S===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&(V=t.RGBA8UI),U===t.UNSIGNED_SHORT&&(V=t.RGBA16UI),U===t.UNSIGNED_INT&&(V=t.RGBA32UI),U===t.BYTE&&(V=t.RGBA8I),U===t.SHORT&&(V=t.RGBA16I),U===t.INT&&(V=t.RGBA32I)),S===t.RGB&&(U===t.UNSIGNED_INT_5_9_9_9_REV&&(V=t.RGB9_E5),U===t.UNSIGNED_INT_10F_11F_11F_REV&&(V=t.R11F_G11F_B10F)),S===t.RGBA){const ge=K?Jl:it.getTransfer(G);U===t.FLOAT&&(V=t.RGBA32F),U===t.HALF_FLOAT&&(V=t.RGBA16F),U===t.UNSIGNED_BYTE&&(V=ge===lt?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT_4_4_4_4&&(V=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(V=t.RGB5_A1)}return(V===t.R16F||V===t.R32F||V===t.RG16F||V===t.RG32F||V===t.RGBA16F||V===t.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function y(R,S){let U;return R?S===null||S===kr||S===sa?U=t.DEPTH24_STENCIL8:S===wi?U=t.DEPTH32F_STENCIL8:S===ra&&(U=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===kr||S===sa?U=t.DEPTH_COMPONENT24:S===wi?U=t.DEPTH_COMPONENT32F:S===ra&&(U=t.DEPTH_COMPONENT16),U}function A(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Zn&&R.minFilter!==oi?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function C(R){const S=R.target;S.removeEventListener("dispose",C),b(S),S.isVideoTexture&&h.delete(S)}function T(R){const S=R.target;S.removeEventListener("dispose",T),M(S)}function b(R){const S=i.get(R);if(S.__webglInit===void 0)return;const U=R.source,G=d.get(U);if(G){const K=G[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&E(R),Object.keys(G).length===0&&d.delete(U)}i.remove(R)}function E(R){const S=i.get(R);t.deleteTexture(S.__webglTexture);const U=R.source,G=d.get(U);delete G[S.__cacheKey],o.memory.textures--}function M(R){const S=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(S.__webglFramebuffer[G]))for(let K=0;K<S.__webglFramebuffer[G].length;K++)t.deleteFramebuffer(S.__webglFramebuffer[G][K]);else t.deleteFramebuffer(S.__webglFramebuffer[G]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[G])}else{if(Array.isArray(S.__webglFramebuffer))for(let G=0;G<S.__webglFramebuffer.length;G++)t.deleteFramebuffer(S.__webglFramebuffer[G]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let G=0;G<S.__webglColorRenderbuffer.length;G++)S.__webglColorRenderbuffer[G]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[G]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const U=R.textures;for(let G=0,K=U.length;G<K;G++){const V=i.get(U[G]);V.__webglTexture&&(t.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(U[G])}i.remove(R)}let L=0;function F(){L=0}function W(){const R=L;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),L+=1,R}function J(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function B(R,S){const U=i.get(R);if(R.isVideoTexture&&Z(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&U.__version!==R.version){const G=R.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(U,R,S);return}}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+S)}function X(R,S){const U=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){ee(U,R,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+S)}function ne(R,S){const U=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){ee(U,R,S);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+S)}function I(R,S){const U=i.get(R);if(R.version>0&&U.__version!==R.version){oe(U,R,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+S)}const Q={[zf]:t.REPEAT,[Cr]:t.CLAMP_TO_EDGE,[Bf]:t.MIRRORED_REPEAT},ie={[Zn]:t.NEAREST,[x1]:t.NEAREST_MIPMAP_NEAREST,[Oa]:t.NEAREST_MIPMAP_LINEAR,[oi]:t.LINEAR,[Jc]:t.LINEAR_MIPMAP_NEAREST,[br]:t.LINEAR_MIPMAP_LINEAR},Se={[E1]:t.NEVER,[b1]:t.ALWAYS,[w1]:t.LESS,[P0]:t.LEQUAL,[T1]:t.EQUAL,[C1]:t.GEQUAL,[A1]:t.GREATER,[R1]:t.NOTEQUAL};function Le(R,S){if(S.type===wi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===oi||S.magFilter===Jc||S.magFilter===Oa||S.magFilter===br||S.minFilter===oi||S.minFilter===Jc||S.minFilter===Oa||S.minFilter===br)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,Q[S.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,Q[S.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,Q[S.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,ie[S.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,ie[S.minFilter]),S.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Se[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Zn||S.minFilter!==Oa&&S.minFilter!==br||S.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Xe(R,S){let U=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",C));const G=S.source;let K=d.get(G);K===void 0&&(K={},d.set(G,K));const V=J(S);if(V!==R.__cacheKey){K[V]===void 0&&(K[V]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,U=!0),K[V].usedTimes++;const ge=K[R.__cacheKey];ge!==void 0&&(K[R.__cacheKey].usedTimes--,ge.usedTimes===0&&E(S)),R.__cacheKey=V,R.__webglTexture=K[V].texture}return U}function Ze(R,S,U){return Math.floor(Math.floor(R/U)/S)}function qe(R,S,U,G){const V=R.updateRanges;if(V.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,U,G,S.data);else{V.sort((te,ae)=>te.start-ae.start);let ge=0;for(let te=1;te<V.length;te++){const ae=V[ge],we=V[te],Ae=ae.start+ae.count,ye=Ze(we.start,S.width,4),Ue=Ze(ae.start,S.width,4);we.start<=Ae+1&&ye===Ue&&Ze(we.start+we.count-1,S.width,4)===ye?ae.count=Math.max(ae.count,we.start+we.count-ae.start):(++ge,V[ge]=we)}V.length=ge+1;const re=t.getParameter(t.UNPACK_ROW_LENGTH),fe=t.getParameter(t.UNPACK_SKIP_PIXELS),ce=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let te=0,ae=V.length;te<ae;te++){const we=V[te],Ae=Math.floor(we.start/4),ye=Math.ceil(we.count/4),Ue=Ae%S.width,N=Math.floor(Ae/S.width),ue=ye,Me=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ue),t.pixelStorei(t.UNPACK_SKIP_ROWS,N),n.texSubImage2D(t.TEXTURE_2D,0,Ue,N,ue,Me,U,G,S.data)}R.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,re),t.pixelStorei(t.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(t.UNPACK_SKIP_ROWS,ce)}}function ee(R,S,U){let G=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(G=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(G=t.TEXTURE_3D);const K=Xe(R,S),V=S.source;n.bindTexture(G,R.__webglTexture,t.TEXTURE0+U);const ge=i.get(V);if(V.version!==ge.__version||K===!0){n.activeTexture(t.TEXTURE0+U);const re=it.getPrimaries(it.workingColorSpace),fe=S.colorSpace===Xi?null:it.getPrimaries(S.colorSpace),ce=S.colorSpace===Xi||re===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let te=v(S.image,!1,r.maxTextureSize);te=me(S,te);const ae=s.convert(S.format,S.colorSpace),we=s.convert(S.type);let Ae=x(S.internalFormat,ae,we,S.colorSpace,S.isVideoTexture);Le(G,S);let ye;const Ue=S.mipmaps,N=S.isVideoTexture!==!0,ue=ge.__version===void 0||K===!0,Me=V.dataReady,be=A(S,te);if(S.isDepthTexture)Ae=y(S.format===aa,S.type),ue&&(N?n.texStorage2D(t.TEXTURE_2D,1,Ae,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,Ae,te.width,te.height,0,ae,we,null));else if(S.isDataTexture)if(Ue.length>0){N&&ue&&n.texStorage2D(t.TEXTURE_2D,be,Ae,Ue[0].width,Ue[0].height);for(let pe=0,se=Ue.length;pe<se;pe++)ye=Ue[pe],N?Me&&n.texSubImage2D(t.TEXTURE_2D,pe,0,0,ye.width,ye.height,ae,we,ye.data):n.texImage2D(t.TEXTURE_2D,pe,Ae,ye.width,ye.height,0,ae,we,ye.data);S.generateMipmaps=!1}else N?(ue&&n.texStorage2D(t.TEXTURE_2D,be,Ae,te.width,te.height),Me&&qe(S,te,ae,we)):n.texImage2D(t.TEXTURE_2D,0,Ae,te.width,te.height,0,ae,we,te.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){N&&ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,be,Ae,Ue[0].width,Ue[0].height,te.depth);for(let pe=0,se=Ue.length;pe<se;pe++)if(ye=Ue[pe],S.format!==qn)if(ae!==null)if(N){if(Me)if(S.layerUpdates.size>0){const Ie=Pm(ye.width,ye.height,S.format,S.type);for(const Ge of S.layerUpdates){const st=ye.data.subarray(Ge*Ie/ye.data.BYTES_PER_ELEMENT,(Ge+1)*Ie/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,pe,0,0,Ge,ye.width,ye.height,1,ae,st)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,pe,0,0,0,ye.width,ye.height,te.depth,ae,ye.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,pe,Ae,ye.width,ye.height,te.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?Me&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,pe,0,0,0,ye.width,ye.height,te.depth,ae,we,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,pe,Ae,ye.width,ye.height,te.depth,0,ae,we,ye.data)}else{N&&ue&&n.texStorage2D(t.TEXTURE_2D,be,Ae,Ue[0].width,Ue[0].height);for(let pe=0,se=Ue.length;pe<se;pe++)ye=Ue[pe],S.format!==qn?ae!==null?N?Me&&n.compressedTexSubImage2D(t.TEXTURE_2D,pe,0,0,ye.width,ye.height,ae,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,pe,Ae,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?Me&&n.texSubImage2D(t.TEXTURE_2D,pe,0,0,ye.width,ye.height,ae,we,ye.data):n.texImage2D(t.TEXTURE_2D,pe,Ae,ye.width,ye.height,0,ae,we,ye.data)}else if(S.isDataArrayTexture)if(N){if(ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,be,Ae,te.width,te.height,te.depth),Me)if(S.layerUpdates.size>0){const pe=Pm(te.width,te.height,S.format,S.type);for(const se of S.layerUpdates){const Ie=te.data.subarray(se*pe/te.data.BYTES_PER_ELEMENT,(se+1)*pe/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,se,te.width,te.height,1,ae,we,Ie)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ae,we,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ae,te.width,te.height,te.depth,0,ae,we,te.data);else if(S.isData3DTexture)N?(ue&&n.texStorage3D(t.TEXTURE_3D,be,Ae,te.width,te.height,te.depth),Me&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ae,we,te.data)):n.texImage3D(t.TEXTURE_3D,0,Ae,te.width,te.height,te.depth,0,ae,we,te.data);else if(S.isFramebufferTexture){if(ue)if(N)n.texStorage2D(t.TEXTURE_2D,be,Ae,te.width,te.height);else{let pe=te.width,se=te.height;for(let Ie=0;Ie<be;Ie++)n.texImage2D(t.TEXTURE_2D,Ie,Ae,pe,se,0,ae,we,null),pe>>=1,se>>=1}}else if(Ue.length>0){if(N&&ue){const pe=De(Ue[0]);n.texStorage2D(t.TEXTURE_2D,be,Ae,pe.width,pe.height)}for(let pe=0,se=Ue.length;pe<se;pe++)ye=Ue[pe],N?Me&&n.texSubImage2D(t.TEXTURE_2D,pe,0,0,ae,we,ye):n.texImage2D(t.TEXTURE_2D,pe,Ae,ae,we,ye);S.generateMipmaps=!1}else if(N){if(ue){const pe=De(te);n.texStorage2D(t.TEXTURE_2D,be,Ae,pe.width,pe.height)}Me&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae,we,te)}else n.texImage2D(t.TEXTURE_2D,0,Ae,ae,we,te);m(S)&&u(G),ge.__version=V.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function oe(R,S,U){if(S.image.length!==6)return;const G=Xe(R,S),K=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+U);const V=i.get(K);if(K.version!==V.__version||G===!0){n.activeTexture(t.TEXTURE0+U);const ge=it.getPrimaries(it.workingColorSpace),re=S.colorSpace===Xi?null:it.getPrimaries(S.colorSpace),fe=S.colorSpace===Xi||ge===re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const ce=S.isCompressedTexture||S.image[0].isCompressedTexture,te=S.image[0]&&S.image[0].isDataTexture,ae=[];for(let se=0;se<6;se++)!ce&&!te?ae[se]=v(S.image[se],!0,r.maxCubemapSize):ae[se]=te?S.image[se].image:S.image[se],ae[se]=me(S,ae[se]);const we=ae[0],Ae=s.convert(S.format,S.colorSpace),ye=s.convert(S.type),Ue=x(S.internalFormat,Ae,ye,S.colorSpace),N=S.isVideoTexture!==!0,ue=V.__version===void 0||G===!0,Me=K.dataReady;let be=A(S,we);Le(t.TEXTURE_CUBE_MAP,S);let pe;if(ce){N&&ue&&n.texStorage2D(t.TEXTURE_CUBE_MAP,be,Ue,we.width,we.height);for(let se=0;se<6;se++){pe=ae[se].mipmaps;for(let Ie=0;Ie<pe.length;Ie++){const Ge=pe[Ie];S.format!==qn?Ae!==null?N?Me&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,0,0,Ge.width,Ge.height,Ae,Ge.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,Ue,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,0,0,Ge.width,Ge.height,Ae,ye,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,Ue,Ge.width,Ge.height,0,Ae,ye,Ge.data)}}}else{if(pe=S.mipmaps,N&&ue){pe.length>0&&be++;const se=De(ae[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,be,Ue,se.width,se.height)}for(let se=0;se<6;se++)if(te){N?Me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ae[se].width,ae[se].height,Ae,ye,ae[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ue,ae[se].width,ae[se].height,0,Ae,ye,ae[se].data);for(let Ie=0;Ie<pe.length;Ie++){const st=pe[Ie].image[se].image;N?Me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,0,0,st.width,st.height,Ae,ye,st.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,Ue,st.width,st.height,0,Ae,ye,st.data)}}else{N?Me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ae,ye,ae[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ue,Ae,ye,ae[se]);for(let Ie=0;Ie<pe.length;Ie++){const Ge=pe[Ie];N?Me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,0,0,Ae,ye,Ge.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,Ue,Ae,ye,Ge.image[se])}}}m(S)&&u(t.TEXTURE_CUBE_MAP),V.__version=K.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Re(R,S,U,G,K,V){const ge=s.convert(U.format,U.colorSpace),re=s.convert(U.type),fe=x(U.internalFormat,ge,re,U.colorSpace),ce=i.get(S),te=i.get(U);if(te.__renderTarget=S,!ce.__hasExternalTextures){const ae=Math.max(1,S.width>>V),we=Math.max(1,S.height>>V);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,V,fe,ae,we,S.depth,0,ge,re,null):n.texImage2D(K,V,fe,ae,we,0,ge,re,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),le(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,G,K,te.__webglTexture,0,de(S)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,G,K,te.__webglTexture,V),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Oe(R,S,U){if(t.bindRenderbuffer(t.RENDERBUFFER,R),S.depthBuffer){const G=S.depthTexture,K=G&&G.isDepthTexture?G.type:null,V=y(S.stencilBuffer,K),ge=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=de(S);le(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,V,S.width,S.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,re,V,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,V,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ge,t.RENDERBUFFER,R)}else{const G=S.textures;for(let K=0;K<G.length;K++){const V=G[K],ge=s.convert(V.format,V.colorSpace),re=s.convert(V.type),fe=x(V.internalFormat,ge,re,V.colorSpace),ce=de(S);U&&le(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,fe,S.width,S.height):le(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,fe,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,fe,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ne(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=i.get(S.depthTexture);G.__renderTarget=S,(!G.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),B(S.depthTexture,0);const K=G.__webglTexture,V=de(S);if(S.depthTexture.format===oa)le(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0,V):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0);else if(S.depthTexture.format===aa)le(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0,V):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function je(R){const S=i.get(R),U=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const G=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),G){const K=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,G.removeEventListener("dispose",K)};G.addEventListener("dispose",K),S.__depthDisposeCallback=K}S.__boundDepthTexture=G}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");const G=R.texture.mipmaps;G&&G.length>0?Ne(S.__webglFramebuffer[0],R):Ne(S.__webglFramebuffer,R)}else if(U){S.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[G]),S.__webglDepthbuffer[G]===void 0)S.__webglDepthbuffer[G]=t.createRenderbuffer(),Oe(S.__webglDepthbuffer[G],R,!1);else{const K=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,V=S.__webglDepthbuffer[G];t.bindRenderbuffer(t.RENDERBUFFER,V),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,V)}}else{const G=R.texture.mipmaps;if(G&&G.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),Oe(S.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,V=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,V),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,V)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function rt(R,S,U){const G=i.get(R);S!==void 0&&Re(G.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&je(R)}function P(R){const S=R.texture,U=i.get(R),G=i.get(S);R.addEventListener("dispose",T);const K=R.textures,V=R.isWebGLCubeRenderTarget===!0,ge=K.length>1;if(ge||(G.__webglTexture===void 0&&(G.__webglTexture=t.createTexture()),G.__version=S.version,o.memory.textures++),V){U.__webglFramebuffer=[];for(let re=0;re<6;re++)if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer[re]=[];for(let fe=0;fe<S.mipmaps.length;fe++)U.__webglFramebuffer[re][fe]=t.createFramebuffer()}else U.__webglFramebuffer[re]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer=[];for(let re=0;re<S.mipmaps.length;re++)U.__webglFramebuffer[re]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(ge)for(let re=0,fe=K.length;re<fe;re++){const ce=i.get(K[re]);ce.__webglTexture===void 0&&(ce.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&le(R)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let re=0;re<K.length;re++){const fe=K[re];U.__webglColorRenderbuffer[re]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[re]);const ce=s.convert(fe.format,fe.colorSpace),te=s.convert(fe.type),ae=x(fe.internalFormat,ce,te,fe.colorSpace,R.isXRRenderTarget===!0),we=de(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,we,ae,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+re,t.RENDERBUFFER,U.__webglColorRenderbuffer[re])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),Oe(U.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(V){n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture),Le(t.TEXTURE_CUBE_MAP,S);for(let re=0;re<6;re++)if(S.mipmaps&&S.mipmaps.length>0)for(let fe=0;fe<S.mipmaps.length;fe++)Re(U.__webglFramebuffer[re][fe],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+re,fe);else Re(U.__webglFramebuffer[re],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(S)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ge){for(let re=0,fe=K.length;re<fe;re++){const ce=K[re],te=i.get(ce);let ae=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ae,te.__webglTexture),Le(ae,ce),Re(U.__webglFramebuffer,R,ce,t.COLOR_ATTACHMENT0+re,ae,0),m(ce)&&u(ae)}n.unbindTexture()}else{let re=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(re=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(re,G.__webglTexture),Le(re,S),S.mipmaps&&S.mipmaps.length>0)for(let fe=0;fe<S.mipmaps.length;fe++)Re(U.__webglFramebuffer[fe],R,S,t.COLOR_ATTACHMENT0,re,fe);else Re(U.__webglFramebuffer,R,S,t.COLOR_ATTACHMENT0,re,0);m(S)&&u(re),n.unbindTexture()}R.depthBuffer&&je(R)}function $(R){const S=R.textures;for(let U=0,G=S.length;U<G;U++){const K=S[U];if(m(K)){const V=g(R),ge=i.get(K).__webglTexture;n.bindTexture(V,ge),u(V),n.unbindTexture()}}}const j=[],O=[];function H(R){if(R.samples>0){if(le(R)===!1){const S=R.textures,U=R.width,G=R.height;let K=t.COLOR_BUFFER_BIT;const V=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ge=i.get(R),re=S.length>1;if(re)for(let ce=0;ce<S.length;ce++)n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const fe=R.texture.mipmaps;fe&&fe.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let ce=0;ce<S.length;ce++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),re){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ge.__webglColorRenderbuffer[ce]);const te=i.get(S[ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,te,0)}t.blitFramebuffer(0,0,U,G,0,0,U,G,K,t.NEAREST),l===!0&&(j.length=0,O.length=0,j.push(t.COLOR_ATTACHMENT0+ce),R.depthBuffer&&R.resolveDepthBuffer===!1&&(j.push(V),O.push(V),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,O)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,j))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),re)for(let ce=0;ce<S.length;ce++){n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,ge.__webglColorRenderbuffer[ce]);const te=i.get(S[ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,te,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function de(R){return Math.min(r.maxSamples,R.samples)}function le(R){const S=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Z(R){const S=o.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function me(R,S){const U=R.colorSpace,G=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||U!==Xs&&U!==Xi&&(it.getTransfer(U)===lt?(G!==qn||K!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),S}function De(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=F,this.setTexture2D=B,this.setTexture2DArray=X,this.setTexture3D=ne,this.setTextureCube=I,this.rebindTextures=rt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=le}function O2(t,e){function n(i,r=Xi){let s;const o=it.getTransfer(r);if(i===fi)return t.UNSIGNED_BYTE;if(i===md)return t.UNSIGNED_SHORT_4_4_4_4;if(i===_d)return t.UNSIGNED_SHORT_5_5_5_1;if(i===E0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===w0)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===S0)return t.BYTE;if(i===M0)return t.SHORT;if(i===ra)return t.UNSIGNED_SHORT;if(i===pd)return t.INT;if(i===kr)return t.UNSIGNED_INT;if(i===wi)return t.FLOAT;if(i===va)return t.HALF_FLOAT;if(i===T0)return t.ALPHA;if(i===A0)return t.RGB;if(i===qn)return t.RGBA;if(i===oa)return t.DEPTH_COMPONENT;if(i===aa)return t.DEPTH_STENCIL;if(i===R0)return t.RED;if(i===gd)return t.RED_INTEGER;if(i===C0)return t.RG;if(i===vd)return t.RG_INTEGER;if(i===xd)return t.RGBA_INTEGER;if(i===Ml||i===El||i===wl||i===Tl)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ml)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===El)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ml)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===El)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Tl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Hf||i===Vf||i===Gf||i===Wf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Hf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xf||i===jf||i===Yf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Xf||i===jf)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Yf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===qf||i===$f||i===Kf||i===Zf||i===Jf||i===Qf||i===eh||i===th||i===nh||i===ih||i===rh||i===sh||i===oh||i===ah)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===qf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$f)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Kf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===eh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===th)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ih)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===oh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ah)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lh||i===ch||i===uh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===lh)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ch)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fh||i===hh||i===dh||i===ph)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===fh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===hh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===dh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ph)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===sa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const k2=`
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

}`;class B2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new V0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new lr({vertexShader:k2,fragmentShader:z2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Tt(new Dr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class H2 extends Xr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,p=null,_=null;const v=typeof XRWebGLBinding<"u",m=new B2,u={},g=n.getContextAttributes();let x=null,y=null;const A=[],C=[],T=new xe;let b=null;const E=new xn;E.viewport=new ut;const M=new xn;M.viewport=new ut;const L=[E,M],F=new aM;let W=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let oe=A[ee];return oe===void 0&&(oe=new xu,A[ee]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(ee){let oe=A[ee];return oe===void 0&&(oe=new xu,A[ee]=oe),oe.getGripSpace()},this.getHand=function(ee){let oe=A[ee];return oe===void 0&&(oe=new xu,A[ee]=oe),oe.getHandSpace()};function B(ee){const oe=C.indexOf(ee.inputSource);if(oe===-1)return;const Re=A[oe];Re!==void 0&&(Re.update(ee.inputSource,ee.frame,c||o),Re.dispatchEvent({type:ee.type,data:ee.inputSource}))}function X(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",ne);for(let ee=0;ee<A.length;ee++){const oe=C[ee];oe!==null&&(C[ee]=null,A[ee].disconnect(oe))}W=null,J=null,m.reset();for(const ee in u)delete u[ee];e.setRenderTarget(x),p=null,d=null,f=null,r=null,y=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",X),r.addEventListener("inputsourceschange",ne),g.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(T),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Oe=null,Ne=null;g.depth&&(Ne=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Re=g.stencil?aa:oa,Oe=g.stencil?sa:kr);const je={colorFormat:n.RGBA8,depthFormat:Ne,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(je),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Br(d.textureWidth,d.textureHeight,{format:qn,type:fi,depthTexture:new H0(d.textureWidth,d.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Re={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Re),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Br(p.framebufferWidth,p.framebufferHeight,{format:qn,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),qe.setContext(r),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(ee){for(let oe=0;oe<ee.removed.length;oe++){const Re=ee.removed[oe],Oe=C.indexOf(Re);Oe>=0&&(C[Oe]=null,A[Oe].disconnect(Re))}for(let oe=0;oe<ee.added.length;oe++){const Re=ee.added[oe];let Oe=C.indexOf(Re);if(Oe===-1){for(let je=0;je<A.length;je++)if(je>=C.length){C.push(Re),Oe=je;break}else if(C[je]===null){C[je]=Re,Oe=je;break}if(Oe===-1)break}const Ne=A[Oe];Ne&&Ne.connect(Re)}}const I=new D,Q=new D;function ie(ee,oe,Re){I.setFromMatrixPosition(oe.matrixWorld),Q.setFromMatrixPosition(Re.matrixWorld);const Oe=I.distanceTo(Q),Ne=oe.projectionMatrix.elements,je=Re.projectionMatrix.elements,rt=Ne[14]/(Ne[10]-1),P=Ne[14]/(Ne[10]+1),$=(Ne[9]+1)/Ne[5],j=(Ne[9]-1)/Ne[5],O=(Ne[8]-1)/Ne[0],H=(je[8]+1)/je[0],de=rt*O,le=rt*H,Z=Oe/(-O+H),me=Z*-O;if(oe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(me),ee.translateZ(Z),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ne[10]===-1)ee.projectionMatrix.copy(oe.projectionMatrix),ee.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const De=rt+Z,R=P+Z,S=de-me,U=le+(Oe-me),G=$*P/R*De,K=j*P/R*De;ee.projectionMatrix.makePerspective(S,U,G,K,De,R),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function Se(ee,oe){oe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(oe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let oe=ee.near,Re=ee.far;m.texture!==null&&(m.depthNear>0&&(oe=m.depthNear),m.depthFar>0&&(Re=m.depthFar)),F.near=M.near=E.near=oe,F.far=M.far=E.far=Re,(W!==F.near||J!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),W=F.near,J=F.far),F.layers.mask=ee.layers.mask|6,E.layers.mask=F.layers.mask&3,M.layers.mask=F.layers.mask&5;const Oe=ee.parent,Ne=F.cameras;Se(F,Oe);for(let je=0;je<Ne.length;je++)Se(Ne[je],Oe);Ne.length===2?ie(F,E,M):F.projectionMatrix.copy(E.projectionMatrix),Le(ee,F,Oe)};function Le(ee,oe,Re){Re===null?ee.matrix.copy(oe.matrixWorld):(ee.matrix.copy(Re.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(oe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(oe.projectionMatrix),ee.projectionMatrixInverse.copy(oe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=la*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(ee){l=ee,d!==null&&(d.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(ee){return u[ee]};let Xe=null;function Ze(ee,oe){if(h=oe.getViewerPose(c||o),_=oe,h!==null){const Re=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Oe=!1;Re.length!==F.cameras.length&&(F.cameras.length=0,Oe=!0);for(let P=0;P<Re.length;P++){const $=Re[P];let j=null;if(p!==null)j=p.getViewport($);else{const H=f.getViewSubImage(d,$);j=H.viewport,P===0&&(e.setRenderTargetTextures(y,H.colorTexture,H.depthStencilTexture),e.setRenderTarget(y))}let O=L[P];O===void 0&&(O=new xn,O.layers.enable(P),O.viewport=new ut,L[P]=O),O.matrix.fromArray($.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray($.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(j.x,j.y,j.width,j.height),P===0&&(F.matrix.copy(O.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Oe===!0&&F.cameras.push(O)}const Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const P=f.getDepthInformation(Re[0]);P&&P.isValid&&P.texture&&m.init(P,r.renderState)}if(Ne&&Ne.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let P=0;P<Re.length;P++){const $=Re[P].camera;if($){let j=u[$];j||(j=new V0,u[$]=j);const O=f.getCameraImage($);j.sourceTexture=O}}}}for(let Re=0;Re<A.length;Re++){const Oe=C[Re],Ne=A[Re];Oe!==null&&Ne!==void 0&&Ne.update(Oe,oe,c||o)}Xe&&Xe(ee,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),_=null}const qe=new tv;qe.setAnimationLoop(Ze),this.setAnimationLoop=function(ee){Xe=ee},this.dispose=function(){}}}const xr=new hi,V2=new gt;function G2(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,O0(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,g,x,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),f(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,y)):u.isMeshMatcapMaterial?(s(m,u),_(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),v(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,g,x):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===hn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===hn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const g=e.get(u),x=g.envMap,y=g.envMapRotation;x&&(m.envMap.value=x,xr.copy(y),xr.x*=-1,xr.y*=-1,xr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),m.envMapRotation.value.setFromMatrix4(V2.makeRotationFromEuler(xr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,x){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=x*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===hn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){const g=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function W2(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,x){const y=x.program;i.uniformBlockBinding(g,y)}function c(g,x){let y=r[g.id];y===void 0&&(_(g),y=h(g),r[g.id]=y,g.addEventListener("dispose",m));const A=x.program;i.updateUBOMapping(g,A);const C=e.render.frame;s[g.id]!==C&&(d(g),s[g.id]=C)}function h(g){const x=f();g.__bindingPointIndex=x;const y=t.createBuffer(),A=g.__size,C=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,A,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,y),y}function f(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const x=r[g.id],y=g.uniforms,A=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let C=0,T=y.length;C<T;C++){const b=Array.isArray(y[C])?y[C]:[y[C]];for(let E=0,M=b.length;E<M;E++){const L=b[E];if(p(L,C,E,A)===!0){const F=L.__offset,W=Array.isArray(L.value)?L.value:[L.value];let J=0;for(let B=0;B<W.length;B++){const X=W[B],ne=v(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,F+J,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,J),J+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,x,y,A){const C=g.value,T=x+"_"+y;if(A[T]===void 0)return typeof C=="number"||typeof C=="boolean"?A[T]=C:A[T]=C.clone(),!0;{const b=A[T];if(typeof C=="number"||typeof C=="boolean"){if(b!==C)return A[T]=C,!0}else if(b.equals(C)===!1)return b.copy(C),!0}return!1}function _(g){const x=g.uniforms;let y=0;const A=16;for(let T=0,b=x.length;T<b;T++){const E=Array.isArray(x[T])?x[T]:[x[T]];for(let M=0,L=E.length;M<L;M++){const F=E[M],W=Array.isArray(F.value)?F.value:[F.value];for(let J=0,B=W.length;J<B;J++){const X=W[J],ne=v(X),I=y%A,Q=I%ne.boundary,ie=I+Q;y+=Q,ie!==0&&A-ie<ne.storage&&(y+=A-ie),F.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=ne.storage}}}const C=y%A;return C>0&&(y+=A-C),g.__size=y,g.__cache={},this}function v(g){const x={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(x.boundary=4,x.storage=4):g.isVector2?(x.boundary=8,x.storage=8):g.isVector3||g.isColor?(x.boundary=16,x.storage=12):g.isVector4?(x.boundary=16,x.storage=16):g.isMatrix3?(x.boundary=48,x.storage=48):g.isMatrix4?(x.boundary=64,x.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),x}function m(g){const x=g.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class X2{constructor(e={}){const{canvas:n=j1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,u=null;const g=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let A=!1;this._outputColorSpace=Pn;let C=0,T=0,b=null,E=-1,M=null;const L=new ut,F=new ut;let W=null;const J=new et(0);let B=0,X=n.width,ne=n.height,I=1,Q=null,ie=null;const Se=new ut(0,0,X,ne),Le=new ut(0,0,X,ne);let Xe=!1;const Ze=new wd;let qe=!1,ee=!1;const oe=new gt,Re=new D,Oe=new ut,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function rt(){return b===null?I:1}let P=i;function $(w,k){return n.getContext(w,k)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${dd}`),n.addEventListener("webglcontextlost",Me,!1),n.addEventListener("webglcontextrestored",be,!1),n.addEventListener("webglcontextcreationerror",pe,!1),P===null){const k="webgl2";if(P=$(k,w),P===null)throw $(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let j,O,H,de,le,Z,me,De,R,S,U,G,K,V,ge,re,fe,ce,te,ae,we,Ae,ye,Ue;function N(){j=new tT(P),j.init(),Ae=new O2(P,j),O=new qw(P,j,e,Ae),H=new U2(P,j),O.reversedDepthBuffer&&d&&H.buffers.depth.setReversed(!0),de=new rT(P),le=new M2,Z=new F2(P,j,H,le,O,Ae,de),me=new Kw(y),De=new eT(y),R=new uM(P),ye=new jw(P,R),S=new nT(P,R,de,ye),U=new oT(P,S,R,de),te=new sT(P,O,Z),re=new $w(le),G=new S2(y,me,De,j,O,ye,re),K=new G2(y,le),V=new w2,ge=new P2(j),ce=new Xw(y,me,De,H,U,p,l),fe=new N2(y,U,O),Ue=new W2(P,de,O,H),ae=new Yw(P,j,de),we=new iT(P,j,de),de.programs=G.programs,y.capabilities=O,y.extensions=j,y.properties=le,y.renderLists=V,y.shadowMap=fe,y.state=H,y.info=de}N();const ue=new H2(y,P);this.xr=ue,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const w=j.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=j.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(w){w!==void 0&&(I=w,this.setSize(X,ne,!1))},this.getSize=function(w){return w.set(X,ne)},this.setSize=function(w,k,Y=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,ne=k,n.width=Math.floor(w*I),n.height=Math.floor(k*I),Y===!0&&(n.style.width=w+"px",n.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(X*I,ne*I).floor()},this.setDrawingBufferSize=function(w,k,Y){X=w,ne=k,I=Y,n.width=Math.floor(w*Y),n.height=Math.floor(k*Y),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(Se)},this.setViewport=function(w,k,Y,q){w.isVector4?Se.set(w.x,w.y,w.z,w.w):Se.set(w,k,Y,q),H.viewport(L.copy(Se).multiplyScalar(I).round())},this.getScissor=function(w){return w.copy(Le)},this.setScissor=function(w,k,Y,q){w.isVector4?Le.set(w.x,w.y,w.z,w.w):Le.set(w,k,Y,q),H.scissor(F.copy(Le).multiplyScalar(I).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(w){H.setScissorTest(Xe=w)},this.setOpaqueSort=function(w){Q=w},this.setTransparentSort=function(w){ie=w},this.getClearColor=function(w){return w.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(w=!0,k=!0,Y=!0){let q=0;if(w){let z=!1;if(b!==null){const ve=b.texture.format;z=ve===xd||ve===vd||ve===gd}if(z){const ve=b.texture.type,Te=ve===fi||ve===kr||ve===ra||ve===sa||ve===md||ve===_d,Fe=ce.getClearColor(),Pe=ce.getClearAlpha(),Ve=Fe.r,We=Fe.g,ke=Fe.b;Te?(_[0]=Ve,_[1]=We,_[2]=ke,_[3]=Pe,P.clearBufferuiv(P.COLOR,0,_)):(v[0]=Ve,v[1]=We,v[2]=ke,v[3]=Pe,P.clearBufferiv(P.COLOR,0,v))}else q|=P.COLOR_BUFFER_BIT}k&&(q|=P.DEPTH_BUFFER_BIT),Y&&(q|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Me,!1),n.removeEventListener("webglcontextrestored",be,!1),n.removeEventListener("webglcontextcreationerror",pe,!1),ce.dispose(),V.dispose(),ge.dispose(),le.dispose(),me.dispose(),De.dispose(),U.dispose(),ye.dispose(),Ue.dispose(),G.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Tn),ue.removeEventListener("sessionend",xa),Qn.stop()};function Me(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const w=de.autoReset,k=fe.enabled,Y=fe.autoUpdate,q=fe.needsUpdate,z=fe.type;N(),de.autoReset=w,fe.enabled=k,fe.autoUpdate=Y,fe.needsUpdate=q,fe.type=z}function pe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function se(w){const k=w.target;k.removeEventListener("dispose",se),Ie(k)}function Ie(w){Ge(w),le.remove(w)}function Ge(w){const k=le.get(w).programs;k!==void 0&&(k.forEach(function(Y){G.releaseProgram(Y)}),w.isShaderMaterial&&G.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,Y,q,z,ve){k===null&&(k=Ne);const Te=z.isMesh&&z.matrixWorld.determinant()<0,Fe=Di(w,k,Y,q,z);H.setMaterial(q,Te);let Pe=Y.index,Ve=1;if(q.wireframe===!0){if(Pe=S.getWireframeAttribute(Y),Pe===void 0)return;Ve=2}const We=Y.drawRange,ke=Y.attributes.position;let Qe=We.start*Ve,at=(We.start+We.count)*Ve;ve!==null&&(Qe=Math.max(Qe,ve.start*Ve),at=Math.min(at,(ve.start+ve.count)*Ve)),Pe!==null?(Qe=Math.max(Qe,0),at=Math.min(at,Pe.count)):ke!=null&&(Qe=Math.max(Qe,0),at=Math.min(at,ke.count));const wt=at-Qe;if(wt<0||wt===1/0)return;ye.setup(z,q,Fe,Y,Pe);let dt,ft=ae;if(Pe!==null&&(dt=R.get(Pe),ft=we,ft.setIndex(dt)),z.isMesh)q.wireframe===!0?(H.setLineWidth(q.wireframeLinewidth*rt()),ft.setMode(P.LINES)):ft.setMode(P.TRIANGLES);else if(z.isLine){let Be=q.linewidth;Be===void 0&&(Be=1),H.setLineWidth(Be*rt()),z.isLineSegments?ft.setMode(P.LINES):z.isLineLoop?ft.setMode(P.LINE_LOOP):ft.setMode(P.LINE_STRIP)}else z.isPoints?ft.setMode(P.POINTS):z.isSprite&&ft.setMode(P.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ca("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))ft.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Be=z._multiDrawStarts,vt=z._multiDrawCounts,nt=z._multiDrawCount,pn=Pe?R.get(Pe).bytesPerElement:1,qr=le.get(q).currentProgram.getUniforms();for(let mn=0;mn<nt;mn++)qr.setValue(P,"_gl_DrawID",mn),ft.render(Be[mn]/pn,vt[mn])}else if(z.isInstancedMesh)ft.renderInstances(Qe,wt,z.count);else if(Y.isInstancedBufferGeometry){const Be=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,vt=Math.min(Y.instanceCount,Be);ft.renderInstances(Qe,wt,vt)}else ft.render(Qe,wt)};function st(w,k,Y){w.transparent===!0&&w.side===Nn&&w.forceSinglePass===!1?(w.side=hn,w.needsUpdate=!0,An(w,k,Y),w.side=ar,w.needsUpdate=!0,An(w,k,Y),w.side=Nn):An(w,k,Y)}this.compile=function(w,k,Y=null){Y===null&&(Y=w),u=ge.get(Y),u.init(k),x.push(u),Y.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(u.pushLight(z),z.castShadow&&u.pushShadow(z))}),w!==Y&&w.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(u.pushLight(z),z.castShadow&&u.pushShadow(z))}),u.setupLights();const q=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ve=z.material;if(ve)if(Array.isArray(ve))for(let Te=0;Te<ve.length;Te++){const Fe=ve[Te];st(Fe,Y,z),q.add(Fe)}else st(ve,Y,z),q.add(ve)}),u=x.pop(),q},this.compileAsync=function(w,k,Y=null){const q=this.compile(w,k,Y);return new Promise(z=>{function ve(){if(q.forEach(function(Te){le.get(Te).currentProgram.isReady()&&q.delete(Te)}),q.size===0){z(w);return}setTimeout(ve,10)}j.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let ze=null;function $t(w){ze&&ze(w)}function Tn(){Qn.stop()}function xa(){Qn.start()}const Qn=new tv;Qn.setAnimationLoop($t),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(w){ze=w,ue.setAnimationLoop(w),w===null?Qn.stop():Qn.start()},ue.addEventListener("sessionstart",Tn),ue.addEventListener("sessionend",xa),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(k),k=ue.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,k,b),u=ge.get(w,x.length),u.init(k),x.push(u),oe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ze.setFromProjectionMatrix(oe,ai,k.reversedDepth),ee=this.localClippingEnabled,qe=re.init(this.clippingPlanes,ee),m=V.get(w,g.length),m.init(),g.push(m),ue.enabled===!0&&ue.isPresenting===!0){const ve=y.xr.getDepthSensingMesh();ve!==null&&Yr(ve,k,-1/0,y.sortObjects)}Yr(w,k,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(Q,ie),je=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,je&&ce.addToRenderList(m,w),this.info.render.frame++,qe===!0&&re.beginShadows();const Y=u.state.shadowsArray;fe.render(Y,w,k),qe===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,z=m.transmissive;if(u.setupLights(),k.isArrayCamera){const ve=k.cameras;if(z.length>0)for(let Te=0,Fe=ve.length;Te<Fe;Te++){const Pe=ve[Te];to(q,z,w,Pe)}je&&ce.render(w);for(let Te=0,Fe=ve.length;Te<Fe;Te++){const Pe=ve[Te];kn(m,w,Pe,Pe.viewport)}}else z.length>0&&to(q,z,w,k),je&&ce.render(w),kn(m,w,k);b!==null&&T===0&&(Z.updateMultisampleRenderTarget(b),Z.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(y,w,k),ye.resetDefaultState(),E=-1,M=null,x.pop(),x.length>0?(u=x[x.length-1],qe===!0&&re.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function Yr(w,k,Y,q){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)u.pushLight(w),w.castShadow&&u.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ze.intersectsSprite(w)){q&&Oe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(oe);const Te=U.update(w),Fe=w.material;Fe.visible&&m.push(w,Te,Fe,Y,Oe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ze.intersectsObject(w))){const Te=U.update(w),Fe=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Oe.copy(w.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Oe.copy(Te.boundingSphere.center)),Oe.applyMatrix4(w.matrixWorld).applyMatrix4(oe)),Array.isArray(Fe)){const Pe=Te.groups;for(let Ve=0,We=Pe.length;Ve<We;Ve++){const ke=Pe[Ve],Qe=Fe[ke.materialIndex];Qe&&Qe.visible&&m.push(w,Te,Qe,Y,Oe.z,ke)}}else Fe.visible&&m.push(w,Te,Fe,Y,Oe.z,null)}}const ve=w.children;for(let Te=0,Fe=ve.length;Te<Fe;Te++)Yr(ve[Te],k,Y,q)}function kn(w,k,Y,q){const z=w.opaque,ve=w.transmissive,Te=w.transparent;u.setupLightsView(Y),qe===!0&&re.setGlobalState(y.clippingPlanes,Y),q&&H.viewport(L.copy(q)),z.length>0&&hr(z,k,Y),ve.length>0&&hr(ve,k,Y),Te.length>0&&hr(Te,k,Y),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function to(w,k,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[q.id]===void 0&&(u.state.transmissionRenderTarget[q.id]=new Br(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?va:fi,minFilter:br,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const ve=u.state.transmissionRenderTarget[q.id],Te=q.viewport||L;ve.setSize(Te.z*y.transmissionResolutionScale,Te.w*y.transmissionResolutionScale);const Fe=y.getRenderTarget(),Pe=y.getActiveCubeFace(),Ve=y.getActiveMipmapLevel();y.setRenderTarget(ve),y.getClearColor(J),B=y.getClearAlpha(),B<1&&y.setClearColor(16777215,.5),y.clear(),je&&ce.render(Y);const We=y.toneMapping;y.toneMapping=rr;const ke=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),u.setupLightsView(q),qe===!0&&re.setGlobalState(y.clippingPlanes,q),hr(w,Y,q),Z.updateMultisampleRenderTarget(ve),Z.updateRenderTargetMipmap(ve),j.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let at=0,wt=k.length;at<wt;at++){const dt=k[at],ft=dt.object,Be=dt.geometry,vt=dt.material,nt=dt.group;if(vt.side===Nn&&ft.layers.test(q.layers)){const pn=vt.side;vt.side=hn,vt.needsUpdate=!0,no(ft,Y,q,Be,vt,nt),vt.side=pn,vt.needsUpdate=!0,Qe=!0}}Qe===!0&&(Z.updateMultisampleRenderTarget(ve),Z.updateRenderTargetMipmap(ve))}y.setRenderTarget(Fe,Pe,Ve),y.setClearColor(J,B),ke!==void 0&&(q.viewport=ke),y.toneMapping=We}function hr(w,k,Y){const q=k.isScene===!0?k.overrideMaterial:null;for(let z=0,ve=w.length;z<ve;z++){const Te=w[z],Fe=Te.object,Pe=Te.geometry,Ve=Te.group;let We=Te.material;We.allowOverride===!0&&q!==null&&(We=q),Fe.layers.test(Y.layers)&&no(Fe,k,Y,Pe,We,Ve)}}function no(w,k,Y,q,z,ve){w.onBeforeRender(y,k,Y,q,z,ve),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(y,k,Y,q,w,ve),z.transparent===!0&&z.side===Nn&&z.forceSinglePass===!1?(z.side=hn,z.needsUpdate=!0,y.renderBufferDirect(Y,k,q,z,w,ve),z.side=ar,z.needsUpdate=!0,y.renderBufferDirect(Y,k,q,z,w,ve),z.side=Nn):y.renderBufferDirect(Y,k,q,z,w,ve),w.onAfterRender(y,k,Y,q,z,ve)}function An(w,k,Y){k.isScene!==!0&&(k=Ne);const q=le.get(w),z=u.state.lights,ve=u.state.shadowsArray,Te=z.state.version,Fe=G.getParameters(w,z.state,ve,k,Y),Pe=G.getProgramCacheKey(Fe);let Ve=q.programs;q.environment=w.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(w.isMeshStandardMaterial?De:me).get(w.envMap||q.environment),q.envMapRotation=q.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Ve===void 0&&(w.addEventListener("dispose",se),Ve=new Map,q.programs=Ve);let We=Ve.get(Pe);if(We!==void 0){if(q.currentProgram===We&&q.lightsStateVersion===Te)return ro(w,Fe),We}else Fe.uniforms=G.getUniforms(w),w.onBeforeCompile(Fe,y),We=G.acquireProgram(Fe,Pe),Ve.set(Pe,We),q.uniforms=Fe.uniforms;const ke=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ke.clippingPlanes=re.uniform),ro(w,Fe),q.needsLights=lv(w),q.lightsStateVersion=Te,q.needsLights&&(ke.ambientLightColor.value=z.state.ambient,ke.lightProbe.value=z.state.probe,ke.directionalLights.value=z.state.directional,ke.directionalLightShadows.value=z.state.directionalShadow,ke.spotLights.value=z.state.spot,ke.spotLightShadows.value=z.state.spotShadow,ke.rectAreaLights.value=z.state.rectArea,ke.ltc_1.value=z.state.rectAreaLTC1,ke.ltc_2.value=z.state.rectAreaLTC2,ke.pointLights.value=z.state.point,ke.pointLightShadows.value=z.state.pointShadow,ke.hemisphereLights.value=z.state.hemi,ke.directionalShadowMap.value=z.state.directionalShadowMap,ke.directionalShadowMatrix.value=z.state.directionalShadowMatrix,ke.spotShadowMap.value=z.state.spotShadowMap,ke.spotLightMatrix.value=z.state.spotLightMatrix,ke.spotLightMap.value=z.state.spotLightMap,ke.pointShadowMap.value=z.state.pointShadowMap,ke.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=We,q.uniformsList=null,We}function io(w){if(w.uniformsList===null){const k=w.currentProgram.getUniforms();w.uniformsList=Rl.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function ro(w,k){const Y=le.get(w);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function Di(w,k,Y,q,z){k.isScene!==!0&&(k=Ne),Z.resetTextureUnits();const ve=k.fog,Te=q.isMeshStandardMaterial?k.environment:null,Fe=b===null?y.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Xs,Pe=(q.isMeshStandardMaterial?De:me).get(q.envMap||Te),Ve=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,We=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),ke=!!Y.morphAttributes.position,Qe=!!Y.morphAttributes.normal,at=!!Y.morphAttributes.color;let wt=rr;q.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(wt=y.toneMapping);const dt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ft=dt!==void 0?dt.length:0,Be=le.get(q),vt=u.state.lights;if(qe===!0&&(ee===!0||w!==M)){const Kt=w===M&&q.id===E;re.setState(q,w,Kt)}let nt=!1;q.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==vt.state.version||Be.outputColorSpace!==Fe||z.isBatchedMesh&&Be.batching===!1||!z.isBatchedMesh&&Be.batching===!0||z.isBatchedMesh&&Be.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Be.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Be.instancing===!1||!z.isInstancedMesh&&Be.instancing===!0||z.isSkinnedMesh&&Be.skinning===!1||!z.isSkinnedMesh&&Be.skinning===!0||z.isInstancedMesh&&Be.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Be.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Be.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Be.instancingMorph===!1&&z.morphTexture!==null||Be.envMap!==Pe||q.fog===!0&&Be.fog!==ve||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==re.numPlanes||Be.numIntersection!==re.numIntersection)||Be.vertexAlphas!==Ve||Be.vertexTangents!==We||Be.morphTargets!==ke||Be.morphNormals!==Qe||Be.morphColors!==at||Be.toneMapping!==wt||Be.morphTargetsCount!==ft)&&(nt=!0):(nt=!0,Be.__version=q.version);let pn=Be.currentProgram;nt===!0&&(pn=An(q,k,z));let qr=!1,mn=!1,so=!1;const xt=pn.getUniforms(),Rn=Be.uniforms;if(H.useProgram(pn.program)&&(qr=!0,mn=!0,so=!0),q.id!==E&&(E=q.id,mn=!0),qr||M!==w){H.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),xt.setValue(P,"projectionMatrix",w.projectionMatrix),xt.setValue(P,"viewMatrix",w.matrixWorldInverse);const sn=xt.map.cameraPosition;sn!==void 0&&sn.setValue(P,Re.setFromMatrixPosition(w.matrixWorld)),O.logarithmicDepthBuffer&&xt.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&xt.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,mn=!0,so=!0)}if(z.isSkinnedMesh){xt.setOptional(P,z,"bindMatrix"),xt.setOptional(P,z,"bindMatrixInverse");const Kt=z.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),xt.setValue(P,"boneTexture",Kt.boneTexture,Z))}z.isBatchedMesh&&(xt.setOptional(P,z,"batchingTexture"),xt.setValue(P,"batchingTexture",z._matricesTexture,Z),xt.setOptional(P,z,"batchingIdTexture"),xt.setValue(P,"batchingIdTexture",z._indirectTexture,Z),xt.setOptional(P,z,"batchingColorTexture"),z._colorsTexture!==null&&xt.setValue(P,"batchingColorTexture",z._colorsTexture,Z));const Cn=Y.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&te.update(z,Y,pn),(mn||Be.receiveShadow!==z.receiveShadow)&&(Be.receiveShadow=z.receiveShadow,xt.setValue(P,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Rn.envMap.value=Pe,Rn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(Rn.envMapIntensity.value=k.environmentIntensity),mn&&(xt.setValue(P,"toneMappingExposure",y.toneMappingExposure),Be.needsLights&&av(Rn,so),ve&&q.fog===!0&&K.refreshFogUniforms(Rn,ve),K.refreshMaterialUniforms(Rn,q,I,ne,u.state.transmissionRenderTarget[w.id]),Rl.upload(P,io(Be),Rn,Z)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Rl.upload(P,io(Be),Rn,Z),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&xt.setValue(P,"center",z.center),xt.setValue(P,"modelViewMatrix",z.modelViewMatrix),xt.setValue(P,"normalMatrix",z.normalMatrix),xt.setValue(P,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Kt=q.uniformsGroups;for(let sn=0,Tc=Kt.length;sn<Tc;sn++){const dr=Kt[sn];Ue.update(dr,pn),Ue.bind(dr,pn)}}return pn}function av(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function lv(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,k,Y){const q=le.get(w);q.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),le.get(w.texture).__webglTexture=k,le.get(w.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Y,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,k){const Y=le.get(w);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0};const cv=P.createFramebuffer();this.setRenderTarget=function(w,k=0,Y=0){b=w,C=k,T=Y;let q=!0,z=null,ve=!1,Te=!1;if(w){const Pe=le.get(w);if(Pe.__useDefaultFramebuffer!==void 0)H.bindFramebuffer(P.FRAMEBUFFER,null),q=!1;else if(Pe.__webglFramebuffer===void 0)Z.setupRenderTarget(w);else if(Pe.__hasExternalTextures)Z.rebindTextures(w,le.get(w.texture).__webglTexture,le.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ke=w.depthTexture;if(Pe.__boundDepthTexture!==ke){if(ke!==null&&le.has(ke)&&(w.width!==ke.image.width||w.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(w)}}const Ve=w.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Te=!0);const We=le.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(We[k])?z=We[k][Y]:z=We[k],ve=!0):w.samples>0&&Z.useMultisampledRTT(w)===!1?z=le.get(w).__webglMultisampledFramebuffer:Array.isArray(We)?z=We[Y]:z=We,L.copy(w.viewport),F.copy(w.scissor),W=w.scissorTest}else L.copy(Se).multiplyScalar(I).floor(),F.copy(Le).multiplyScalar(I).floor(),W=Xe;if(Y!==0&&(z=cv),H.bindFramebuffer(P.FRAMEBUFFER,z)&&q&&H.drawBuffers(w,z),H.viewport(L),H.scissor(F),H.setScissorTest(W),ve){const Pe=le.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+k,Pe.__webglTexture,Y)}else if(Te){const Pe=k;for(let Ve=0;Ve<w.textures.length;Ve++){const We=le.get(w.textures[Ve]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ve,We.__webglTexture,Y,Pe)}}else if(w!==null&&Y!==0){const Pe=le.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Pe.__webglTexture,Y)}E=-1},this.readRenderTargetPixels=function(w,k,Y,q,z,ve,Te,Fe=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=le.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Te!==void 0&&(Pe=Pe[Te]),Pe){H.bindFramebuffer(P.FRAMEBUFFER,Pe);try{const Ve=w.textures[Fe],We=Ve.format,ke=Ve.type;if(!O.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!O.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-q&&Y>=0&&Y<=w.height-z&&(w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Fe),P.readPixels(k,Y,q,z,Ae.convert(We),Ae.convert(ke),ve))}finally{const Ve=b!==null?le.get(b).__webglFramebuffer:null;H.bindFramebuffer(P.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(w,k,Y,q,z,ve,Te,Fe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=le.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Te!==void 0&&(Pe=Pe[Te]),Pe)if(k>=0&&k<=w.width-q&&Y>=0&&Y<=w.height-z){H.bindFramebuffer(P.FRAMEBUFFER,Pe);const Ve=w.textures[Fe],We=Ve.format,ke=Ve.type;if(!O.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!O.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Qe),P.bufferData(P.PIXEL_PACK_BUFFER,ve.byteLength,P.STREAM_READ),w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Fe),P.readPixels(k,Y,q,z,Ae.convert(We),Ae.convert(ke),0);const at=b!==null?le.get(b).__webglFramebuffer:null;H.bindFramebuffer(P.FRAMEBUFFER,at);const wt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Y1(P,wt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Qe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ve),P.deleteBuffer(Qe),P.deleteSync(wt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,k=null,Y=0){const q=Math.pow(2,-Y),z=Math.floor(w.image.width*q),ve=Math.floor(w.image.height*q),Te=k!==null?k.x:0,Fe=k!==null?k.y:0;Z.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,Y,0,0,Te,Fe,z,ve),H.unbindTexture()};const uv=P.createFramebuffer(),fv=P.createFramebuffer();this.copyTextureToTexture=function(w,k,Y=null,q=null,z=0,ve=null){ve===null&&(z!==0?(ca("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ve=z,z=0):ve=0);let Te,Fe,Pe,Ve,We,ke,Qe,at,wt;const dt=w.isCompressedTexture?w.mipmaps[ve]:w.image;if(Y!==null)Te=Y.max.x-Y.min.x,Fe=Y.max.y-Y.min.y,Pe=Y.isBox3?Y.max.z-Y.min.z:1,Ve=Y.min.x,We=Y.min.y,ke=Y.isBox3?Y.min.z:0;else{const Cn=Math.pow(2,-z);Te=Math.floor(dt.width*Cn),Fe=Math.floor(dt.height*Cn),w.isDataArrayTexture?Pe=dt.depth:w.isData3DTexture?Pe=Math.floor(dt.depth*Cn):Pe=1,Ve=0,We=0,ke=0}q!==null?(Qe=q.x,at=q.y,wt=q.z):(Qe=0,at=0,wt=0);const ft=Ae.convert(k.format),Be=Ae.convert(k.type);let vt;k.isData3DTexture?(Z.setTexture3D(k,0),vt=P.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Z.setTexture2DArray(k,0),vt=P.TEXTURE_2D_ARRAY):(Z.setTexture2D(k,0),vt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,k.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,k.unpackAlignment);const nt=P.getParameter(P.UNPACK_ROW_LENGTH),pn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),qr=P.getParameter(P.UNPACK_SKIP_PIXELS),mn=P.getParameter(P.UNPACK_SKIP_ROWS),so=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,dt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,dt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ve),P.pixelStorei(P.UNPACK_SKIP_ROWS,We),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ke);const xt=w.isDataArrayTexture||w.isData3DTexture,Rn=k.isDataArrayTexture||k.isData3DTexture;if(w.isDepthTexture){const Cn=le.get(w),Kt=le.get(k),sn=le.get(Cn.__renderTarget),Tc=le.get(Kt.__renderTarget);H.bindFramebuffer(P.READ_FRAMEBUFFER,sn.__webglFramebuffer),H.bindFramebuffer(P.DRAW_FRAMEBUFFER,Tc.__webglFramebuffer);for(let dr=0;dr<Pe;dr++)xt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,le.get(w).__webglTexture,z,ke+dr),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,le.get(k).__webglTexture,ve,wt+dr)),P.blitFramebuffer(Ve,We,Te,Fe,Qe,at,Te,Fe,P.DEPTH_BUFFER_BIT,P.NEAREST);H.bindFramebuffer(P.READ_FRAMEBUFFER,null),H.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(z!==0||w.isRenderTargetTexture||le.has(w)){const Cn=le.get(w),Kt=le.get(k);H.bindFramebuffer(P.READ_FRAMEBUFFER,uv),H.bindFramebuffer(P.DRAW_FRAMEBUFFER,fv);for(let sn=0;sn<Pe;sn++)xt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Cn.__webglTexture,z,ke+sn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Cn.__webglTexture,z),Rn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Kt.__webglTexture,ve,wt+sn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Kt.__webglTexture,ve),z!==0?P.blitFramebuffer(Ve,We,Te,Fe,Qe,at,Te,Fe,P.COLOR_BUFFER_BIT,P.NEAREST):Rn?P.copyTexSubImage3D(vt,ve,Qe,at,wt+sn,Ve,We,Te,Fe):P.copyTexSubImage2D(vt,ve,Qe,at,Ve,We,Te,Fe);H.bindFramebuffer(P.READ_FRAMEBUFFER,null),H.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Rn?w.isDataTexture||w.isData3DTexture?P.texSubImage3D(vt,ve,Qe,at,wt,Te,Fe,Pe,ft,Be,dt.data):k.isCompressedArrayTexture?P.compressedTexSubImage3D(vt,ve,Qe,at,wt,Te,Fe,Pe,ft,dt.data):P.texSubImage3D(vt,ve,Qe,at,wt,Te,Fe,Pe,ft,Be,dt):w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ve,Qe,at,Te,Fe,ft,Be,dt.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ve,Qe,at,dt.width,dt.height,ft,dt.data):P.texSubImage2D(P.TEXTURE_2D,ve,Qe,at,Te,Fe,ft,Be,dt);P.pixelStorei(P.UNPACK_ROW_LENGTH,nt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,pn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,qr),P.pixelStorei(P.UNPACK_SKIP_ROWS,mn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,so),ve===0&&k.generateMipmaps&&P.generateMipmap(vt),H.unbindTexture()},this.initRenderTarget=function(w){le.get(w).__webglFramebuffer===void 0&&Z.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Z.setTextureCube(w,0):w.isData3DTexture?Z.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Z.setTexture2DArray(w,0):Z.setTexture2D(w,0),H.unbindTexture()},this.resetState=function(){C=0,T=0,b=null,H.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),n.unpackColorSpace=it._getUnpackColorSpace()}}class j2{static createButton(e,n={}){const i=document.createElement("button");function r(){if(n.domOverlay===void 0){const d=document.createElement("div");d.style.display="none",document.body.appendChild(d);const p=document.createElementNS("http://www.w3.org/2000/svg","svg");p.setAttribute("width",38),p.setAttribute("height",38),p.style.position="absolute",p.style.right="20px",p.style.top="20px",p.addEventListener("click",function(){c.end()}),d.appendChild(p);const _=document.createElementNS("http://www.w3.org/2000/svg","path");_.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),_.setAttribute("stroke","#fff"),_.setAttribute("stroke-width",2),p.appendChild(_),n.optionalFeatures===void 0&&(n.optionalFeatures=[]),n.optionalFeatures.push("dom-overlay"),n.domOverlay={root:d}}let c=null;async function h(d){d.addEventListener("end",f),e.xr.setReferenceSpaceType("local"),await e.xr.setSession(d),i.textContent="STOP AR",n.domOverlay.root.style.display="",c=d}function f(){c.removeEventListener("end",f),i.textContent="START AR",n.domOverlay.root.style.display="none",c=null}i.style.display="",i.style.cursor="pointer",i.style.left="calc(50% - 50px)",i.style.width="100px",i.textContent="START AR",i.onmouseenter=function(){i.style.opacity="1.0"},i.onmouseleave=function(){i.style.opacity="0.5"},i.onclick=function(){c===null?navigator.xr.requestSession("immersive-ar",n).then(h):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",n).then(h).catch(d=>{console.warn(d)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",n).then(h).catch(d=>{console.warn(d)})}function s(){i.style.display="",i.style.cursor="auto",i.style.left="calc(50% - 75px)",i.style.width="150px",i.onmouseenter=null,i.onmouseleave=null,i.onclick=null}function o(){s(),i.textContent="AR NOT SUPPORTED"}function a(c){s(),console.warn("Exception when trying to call xr.isSessionSupported",c),i.textContent="AR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return i.id="ARButton",i.style.display="none",l(i),navigator.xr.isSessionSupported("immersive-ar").then(function(c){c?r():o()}).catch(a),i;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}}const t_={type:"change"},Dd={type:"start"},ov={type:"end"},cl=new Md,n_=new Vi,Y2=Math.cos(70*Al.DEG2RAD),Lt=new D,on=2*Math.PI,ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Nu=1e-6;class q2 extends lM{constructor(e,n=null){super(e,n),this.state=ct.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ds.ROTATE,MIDDLE:Ds.DOLLY,RIGHT:Ds.PAN},this.touches={ONE:Es.ROTATE,TWO:Es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new zr,this._lastTargetPosition=new D,this._quat=new zr().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new bm,this._sphericalDelta=new bm,this._scale=1,this._panOffset=new D,this._rotateStart=new xe,this._rotateEnd=new xe,this._rotateDelta=new xe,this._panStart=new xe,this._panEnd=new xe,this._panDelta=new xe,this._dollyStart=new xe,this._dollyEnd=new xe,this._dollyDelta=new xe,this._dollyDirection=new D,this._mouse=new xe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=K2.bind(this),this._onPointerDown=$2.bind(this),this._onPointerUp=Z2.bind(this),this._onContextMenu=rA.bind(this),this._onMouseWheel=eA.bind(this),this._onKeyDown=tA.bind(this),this._onTouchStart=nA.bind(this),this._onTouchMove=iA.bind(this),this._onMouseDown=J2.bind(this),this._onMouseMove=Q2.bind(this),this._interceptControlDown=sA.bind(this),this._interceptControlUp=oA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(t_),this.update(),this.state=ct.NONE}update(e=null){const n=this.object.position;Lt.copy(n).sub(this.target),Lt.applyQuaternion(this._quat),this._spherical.setFromVector3(Lt),this.autoRotate&&this.state===ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=on:i>Math.PI&&(i-=on),r<-Math.PI?r+=on:r>Math.PI&&(r-=on),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Lt.setFromSpherical(this._spherical),Lt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Lt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Lt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Lt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(cl.origin.copy(this.object.position),cl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(cl.direction))<Y2?this.object.lookAt(this.target):(n_.setFromNormalAndCoplanarPoint(this.object.up,this.target),cl.intersectPlane(n_,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Nu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Nu||this._lastTargetPosition.distanceToSquared(this.target)>Nu?(this.dispatchEvent(t_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?on/60*this.autoRotateSpeed*e:on/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Lt.setFromMatrixColumn(n,0),Lt.multiplyScalar(-e),this._panOffset.add(Lt)}_panUp(e,n){this.screenSpacePanning===!0?Lt.setFromMatrixColumn(n,1):(Lt.setFromMatrixColumn(n,0),Lt.crossVectors(this.object.up,Lt)),Lt.multiplyScalar(e),this._panOffset.add(Lt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Lt.copy(r).sub(this.target);let s=Lt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(on*this._rotateDelta.x/n.clientHeight),this._rotateUp(on*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(on*this._rotateDelta.x/n.clientHeight),this._rotateUp(on*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new xe,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function $2(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function K2(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function Z2(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ov),this.state=ct.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function J2(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ds.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=ct.DOLLY;break;case Ds.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ct.ROTATE}break;case Ds.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ct.PAN}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(Dd)}function Q2(t){switch(this.state){case ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function eA(t){this.enabled===!1||this.enableZoom===!1||this.state!==ct.NONE||(t.preventDefault(),this.dispatchEvent(Dd),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(ov))}function tA(t){this.enabled!==!1&&this._handleKeyDown(t)}function nA(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Es.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=ct.TOUCH_ROTATE;break;case Es.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=ct.TOUCH_PAN;break;default:this.state=ct.NONE}break;case 2:switch(this.touches.TWO){case Es.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=ct.TOUCH_DOLLY_PAN;break;case Es.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=ct.TOUCH_DOLLY_ROTATE;break;default:this.state=ct.NONE}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(Dd)}function iA(t){switch(this._trackPointer(t),this.state){case ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=ct.NONE}}function rA(t){this.enabled!==!1&&t.preventDefault()}function sA(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function oA(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function i_(t){const e=new si,n=new ti({color:3816026,roughness:.8,metalness:.8}),i=t.wallThickness||.2,r=t.wallHeight||3;return t.walls.forEach(s=>{const o=new D(s.p1[0],0,s.p1[1]),a=new D(s.p2[0],0,s.p2[1]),l=new D().subVectors(a,o),c=l.length();if(c<.01)return;const h=new Qs(c,r,i),f=new Tt(h,n.clone()),d=new D().addVectors(o,a).multiplyScalar(.5);f.position.set(d.x,r/2,d.z),f.rotation.y=Math.atan2(l.z,l.x),f.castShadow=!0,f.receiveShadow=!0,e.add(f)}),{wallGroup:e,wallMaterial:n}}const aA={floorId:"f1",floorNumber:1,floorName:"Ground Floor",corridorPolygon:[[0,3.2],[24.54,3.2],[24.54,2.35],[27.54,2.35],[27.54,3.2],[27.54,3.2],[38.98,3.2],[38.98,4.1],[27.17,4.1],[5.36,4.1],[5.36,7.3],[0,7.3],[0,4.1]],corridorColor:"#2ecc40",rooms:[{id:"f1_gymkhana",name:"GYMKHANA",center:[3.35,1.6],connectedTo:["f1_wp_hall_gymkhana"]},{id:"f1_g1",name:"Classroom G1",center:[8.62,1.6],connectedTo:["f1_wp_hall_g1"]},{id:"f1_g2",name:"Classroom G2",center:[17.54,1.6],connectedTo:["f1_wp_hall_g2"]},{id:"f1_stairs_top",name:"Stairs (Top)",center:[26.04,1.1],connectedTo:["f1_wp_hall_stairs_top"]},{id:"f1_g6",name:"Classroom G6",center:[33.15,3.65],connectedTo:["f1_wp_hall_g6"]},{id:"f1_lift",name:"Lift",center:[.89,5.7],connectedTo:["f1_wp_hall_lift"]},{id:"f1_stairs_bot",name:"Stairs (Bot)",center:[3.57,5.7],connectedTo:["f1_wp_hall_stairs_bot"]},{id:"f1_g4",name:"Classroom G4",center:[10.95,5.7],connectedTo:["f1_wp_hall_g4"]},{id:"f1_g5",name:"Classroom G5",center:[20.54,5.7],connectedTo:["f1_wp_hall_g5"]},{id:"f1_women",name:"Women Washroom",center:[25.86,5.7],connectedTo:["f1_wp_hall_women"]},{id:"f1_gents",name:"Men Washroom",center:[38.11,5.7],connectedTo:["f1_wp_hall_gents"]}],waypoints:[{id:"f1_wp_hall_lift",position:[.89,3.65],connectedTo:["f1_wp_hall_stairs_bot"]},{id:"f1_wp_hall_stairs_bot",position:[3.57,3.65],connectedTo:["f1_wp_hall_lift","f1_wp_hall_gymkhana"]},{id:"f1_wp_hall_gymkhana",position:[3.35,3.65],connectedTo:["f1_wp_hall_stairs_bot","f1_wp_hall_g1"]},{id:"f1_wp_hall_g1",position:[8.62,3.65],connectedTo:["f1_wp_hall_gymkhana","f1_wp_hall_g4"]},{id:"f1_wp_hall_g4",position:[10.95,3.65],connectedTo:["f1_wp_hall_g1","f1_wp_hall_g2"]},{id:"f1_wp_hall_g2",position:[17.54,3.65],connectedTo:["f1_wp_hall_g4","f1_wp_hall_g5"]},{id:"f1_wp_hall_g5",position:[20.54,3.65],connectedTo:["f1_wp_hall_g2","f1_wp_hall_stairs_top"]},{id:"f1_wp_hall_stairs_top",position:[26.04,3.65],connectedTo:["f1_wp_hall_g5","f1_wp_hall_women"]},{id:"f1_wp_hall_women",position:[25.86,3.65],connectedTo:["f1_wp_hall_stairs_top","f1_wp_hall_g6"]},{id:"f1_wp_hall_g6",position:[33.15,3.65],connectedTo:["f1_wp_hall_women","f1_wp_hall_gents"]},{id:"f1_wp_hall_gents",position:[38.11,3.65],connectedTo:["f1_wp_hall_g6"]}],walls:[{p1:[0,0],p2:[24.54,0]},{p1:[27.54,0],p2:[38.98,0]},{p1:[38.98,0],p2:[38.98,7.3]},{p1:[38.98,7.3],p2:[5.36,7.3]},{p1:[1.78,7.3],p2:[0,7.3]},{p1:[0,7.3],p2:[0,0]},{p1:[0,3.2],p2:[24.54,3.2]},{p1:[27.54,3.2],p2:[38.98,3.2]},{p1:[0,4.1],p2:[38.98,4.1]},{p1:[6.7,0],p2:[6.7,3.2]},{p1:[13.54,0],p2:[13.54,3.2]},{p1:[24.54,0],p2:[24.54,3.2]},{p1:[27.54,0],p2:[27.54,3.2]},{p1:[1.78,4.1],p2:[1.78,7.3]},{p1:[5.36,4.1],p2:[5.36,7.3]},{p1:[16.54,4.1],p2:[16.54,7.3]},{p1:[24.54,4.1],p2:[24.54,7.3]},{p1:[32.38,4.1],p2:[32.38,7.3]}],wallHeight:3,wallThickness:.15,floorMessages:[{id:"m1",type:"welcome",text:"GROUND FLOOR - ENTRANCE",position:[2,3.65]},{id:"m2",type:"quote",text:"Keep Moving Forward 🚀",position:[15,3.65]}]},lA={floorId:"f2",floorNumber:2,floorName:"1st Floor",corridorPolygon:[[0,3.2],[24.54,3.2],[24.54,2.35],[27.54,2.35],[27.54,3.2],[27.54,3.2],[38.98,3.2],[38.98,4.1],[27.17,4.1],[5.36,4.1],[5.36,7.3],[0,7.3],[0,4.1]],corridorColor:"#2ecc40",rooms:[{id:"f2_lab1",name:"Lab 1",center:[3.35,1.6],connectedTo:["f2_wp_hall_lab1"]},{id:"f2_lab2",name:"Lab 2",center:[8.62,1.6],connectedTo:["f2_wp_hall_lab2"]},{id:"f2_lab3",name:"Lab 3",center:[17.54,1.6],connectedTo:["f2_wp_hall_lab3"]},{id:"f2_stairs_top",name:"Stairs (Top)",center:[26.04,1.1],connectedTo:["f2_wp_hall_stairs_top"]},{id:"f2_lab6",name:"Lab 6",center:[33.15,3.65],connectedTo:["f2_wp_hall_lab6"]},{id:"f2_lift",name:"Lift",center:[.89,5.7],connectedTo:["f2_wp_hall_lift"]},{id:"f2_stairs_bot",name:"Stairs (Bot)",center:[3.57,5.7],connectedTo:["f2_wp_hall_stairs_bot"]},{id:"f2_lab4",name:"Lab 4",center:[10.95,5.7],connectedTo:["f2_wp_hall_lab4"]},{id:"f2_lab5",name:"Lab 5",center:[20.54,5.7],connectedTo:["f2_wp_hall_lab5"]},{id:"f2_women",name:"Women Washroom",center:[25.86,5.7],connectedTo:["f2_wp_hall_women"]},{id:"f2_gents",name:"Men Washroom",center:[38.11,5.7],connectedTo:["f2_wp_hall_gents"]}],waypoints:[{id:"f2_wp_hall_lift",position:[.89,3.65],connectedTo:["f2_wp_hall_stairs_bot"]},{id:"f2_wp_hall_stairs_bot",position:[3.57,3.65],connectedTo:["f2_wp_hall_lift","f2_wp_hall_lab1"]},{id:"f2_wp_hall_lab1",position:[3.35,3.65],connectedTo:["f2_wp_hall_stairs_bot","f2_wp_hall_lab2"]},{id:"f2_wp_hall_lab2",position:[8.62,3.65],connectedTo:["f2_wp_hall_lab1","f2_wp_hall_lab4"]},{id:"f2_wp_hall_lab4",position:[10.95,3.65],connectedTo:["f2_wp_hall_lab2","f2_wp_hall_lab3"]},{id:"f2_wp_hall_lab3",position:[17.54,3.65],connectedTo:["f2_wp_hall_lab4","f2_wp_hall_lab5"]},{id:"f2_wp_hall_lab5",position:[20.54,3.65],connectedTo:["f2_wp_hall_lab3","f2_wp_hall_stairs_top"]},{id:"f2_wp_hall_stairs_top",position:[26.04,3.65],connectedTo:["f2_wp_hall_lab5","f2_wp_hall_women"]},{id:"f2_wp_hall_women",position:[25.86,3.65],connectedTo:["f2_wp_hall_stairs_top","f2_wp_hall_lab6"]},{id:"f2_wp_hall_lab6",position:[33.15,3.65],connectedTo:["f2_wp_hall_women","f2_wp_hall_gents"]},{id:"f2_wp_hall_gents",position:[38.11,3.65],connectedTo:["f2_wp_hall_lab6"]}],walls:[{p1:[0,0],p2:[24.54,0]},{p1:[27.54,0],p2:[38.98,0]},{p1:[38.98,0],p2:[38.98,7.3]},{p1:[38.98,7.3],p2:[5.36,7.3]},{p1:[1.78,7.3],p2:[0,7.3]},{p1:[0,7.3],p2:[0,0]},{p1:[0,3.2],p2:[24.54,3.2]},{p1:[27.54,3.2],p2:[38.98,3.2]},{p1:[0,4.1],p2:[38.98,4.1]},{p1:[6.7,0],p2:[6.7,3.2]},{p1:[13.54,0],p2:[13.54,3.2]},{p1:[24.54,0],p2:[24.54,3.2]},{p1:[27.54,0],p2:[27.54,3.2]},{p1:[1.78,4.1],p2:[1.78,7.3]},{p1:[5.36,4.1],p2:[5.36,7.3]},{p1:[16.54,4.1],p2:[16.54,7.3]},{p1:[24.54,4.1],p2:[24.54,7.3]},{p1:[32.38,4.1],p2:[32.38,7.3]}],wallHeight:3,wallThickness:.15,floorMessages:[{id:"m1",type:"welcome",text:"1ST FLOOR - LAB BLOCK",position:[2,3.65]},{id:"m2",type:"quote",text:"Code is Poetry 💻",position:[15,3.65]}]},cA={floorId:"f3",floorNumber:3,floorName:"2nd Floor (CSE)",corridorPolygon:[[0,3.2],[24.54,3.2],[24.54,2.35],[27.54,2.35],[27.54,3.2],[27.17,3.2],[38.98,3.2],[38.98,4.1],[27.17,4.1],[5.36,4.1],[5.36,7.3],[0,7.3],[0,4.1]],corridorColor:"#2ecc40",rooms:[{id:"f3_hod",name:"HOD Cabin",center:[2,1.6],connectedTo:["f3_wp_hod"]},{id:"f3_dept_lib",name:"Dept Library",center:[5.35,1.6],connectedTo:["f3_wp_lib"]},{id:"f3_server",name:"Server Room",center:[8.62,1.6],connectedTo:["f3_wp_server"]},{id:"f3_tutorial",name:"Tutorial Room",center:[13.54,1.6],connectedTo:["f3_wp_tutorial"]},{id:"f3_lab10",name:"Lab 10",center:[20.54,1.6],connectedTo:["f3_wp_lab10"]},{id:"f3_stairs_top",name:"Stairs",center:[26.04,1.1],connectedTo:["f3_wp_stairs_top"]},{id:"f3_lab9",name:"Lab 9",center:[33.15,3.65],connectedTo:["f3_wp_lab9"]},{id:"f3_corridor",name:"Middle Portion",center:[13.5,3.65],connectedTo:["f3_wp_lab7"]},{id:"f3_lift",name:"Lift",center:[.89,5.7],connectedTo:["f3_wp_lift"]},{id:"f3_stairs_bot",name:"Stairs",center:[3.57,5.7],connectedTo:["f3_wp_stairs_bot"]},{id:"f3_lab7",name:"Lab 7",center:[10.95,5.7],connectedTo:["f3_wp_lab7"]},{id:"f3_lab8",name:"Lab 8",center:[20.54,5.7],connectedTo:["f3_wp_lab8"]},{id:"f3_women",name:"Ladies Toilet",center:[25.86,5.7],connectedTo:["f3_wp_women"]},{id:"f3_gents",name:"Men Washroom",center:[38.11,5.7],connectedTo:["f3_wp_gents"]}],waypoints:[{id:"f3_wp_lift",position:[.89,3.65],connectedTo:["f3_wp_stairs_bot"]},{id:"f3_wp_stairs_bot",position:[3.57,3.65],connectedTo:["f3_wp_lift","f3_wp_hod","f3_wp_lab7"]},{id:"f3_wp_hod",position:[2,3.65],connectedTo:["f3_wp_stairs_bot","f3_wp_lib"]},{id:"f3_wp_lib",position:[5.35,3.65],connectedTo:["f3_wp_hod","f3_wp_server"]},{id:"f3_wp_server",position:[8.62,3.65],connectedTo:["f3_wp_lib","f3_wp_tutorial"]},{id:"f3_wp_tutorial",position:[13.54,3.65],connectedTo:["f3_wp_server","f3_wp_lab10"]},{id:"f3_wp_lab10",position:[20.54,3.65],connectedTo:["f3_wp_tutorial","f3_wp_stairs_top"]},{id:"f3_wp_stairs_top",position:[26.04,3.65],connectedTo:["f3_wp_lab10","f3_wp_lab9"]},{id:"f3_wp_lab7",position:[10.95,3.65],connectedTo:["f3_wp_stairs_bot","f3_wp_lab8"]},{id:"f3_wp_lab8",position:[20.54,3.65],connectedTo:["f3_wp_lab7","f3_wp_women"]},{id:"f3_wp_women",position:[25.86,3.65],connectedTo:["f3_wp_lab8","f3_wp_lab9"]},{id:"f3_wp_lab9",position:[32.21,3.65],connectedTo:["f3_wp_stairs_top","f3_wp_women","f3_wp_gents"]},{id:"f3_wp_gents",position:[38.11,3.65],connectedTo:["f3_wp_lab9"]}],walls:[{p1:[0,0],p2:[26.47,0]},{p1:[27.17,0],p2:[38.98,0]},{p1:[38.98,0],p2:[38.98,7.3]},{p1:[38.98,7.3],p2:[37.24,7.3]},{p1:[27.17,7.3],p2:[5.36,7.3]},{p1:[1.78,7.3],p2:[0,7.3]},{p1:[0,0],p2:[0,7.3]},{p1:[0,7.3],p2:[0,10.18]},{p1:[0,10.18],p2:[1.78,10.18]},{p1:[1.78,10.18],p2:[1.78,7.3]},{p1:[1.78,7.3],p2:[1.78,10.88]},{p1:[1.78,10.88],p2:[5.36,10.88]},{p1:[5.36,10.88],p2:[5.36,7.3]},{p1:[3.58,7.3],p2:[3.58,10.88]},{p1:[27.17,0],p2:[27.17,7.3]},{p1:[27.17,2.33],p2:[38.98,2.33]},{p1:[0,3.2],p2:[24.54,3.2]},{p1:[26.47,3.2],p2:[27.17,3.2]},{p1:[0,4.1],p2:[27.17,4.1]},{p1:[4,0],p2:[4,3.2]},{p1:[6.7,0],p2:[6.7,3.2]},{p1:[10.54,0],p2:[10.54,3.2]},{p1:[16.54,0],p2:[16.54,3.2]},{p1:[24.54,0],p2:[24.54,3.2]},{p1:[24.54,0],p2:[24.54,1.5]},{p1:[27.54,0],p2:[27.54,1.5]},{p1:[24.54,1.5],p2:[27.54,1.5]},{p1:[24.54,2.35],p2:[27.54,2.35]},{p1:[1.78,4.1],p2:[1.78,7.3]},{p1:[3.58,4.1],p2:[3.58,7.3]},{p1:[5.36,4.1],p2:[5.36,7.3]},{p1:[16.54,4.1],p2:[16.54,7.3]},{p1:[24.54,4.1],p2:[24.54,7.3]},{p1:[27.17,4.1],p2:[27.17,7.3]},{p1:[37.24,4.1],p2:[37.24,7.3]},{p1:[0,3.2],p2:[2.55,3.2]},{p1:[3.45,3.2],p2:[4,3.2]},{p1:[4,3.2],p2:[5.4,3.2]},{p1:[6.3,3.2],p2:[7.7,3.2]},{p1:[7.7,3.2],p2:[9.2,3.2]},{p1:[10.1,3.2],p2:[11.54,3.2]},{p1:[11.54,3.2],p2:[13.84,3.2]},{p1:[14.74,3.2],p2:[17.54,3.2]},{p1:[17.54,3.2],p2:[20.84,3.2]},{p1:[21.74,3.2],p2:[25.54,3.2]},{p1:[4.1,4.1],p2:[10.62,4.1]},{p1:[11.53,4.1],p2:[16.58,4.1]},{p1:[16.58,4.1],p2:[20.6,4.1]},{p1:[21.51,4.1],p2:[25.54,4.1]},{p1:[25.54,4.1],p2:[27.84,4.1]},{p1:[28.74,4.1],p2:[32.38,4.1]},{p1:[32.38,4.1],p2:[34.68,4.1]},{p1:[35.58,4.1],p2:[39.04,4.1]}],doors:[{room:"f3_hod",wallSide:"bottom",posX:2,width:1},{room:"f3_dept_lib",wallSide:"bottom",posX:5.35,width:1.4},{room:"f3_server",wallSide:"bottom",posX:8.12,width:.51},{room:"f3_server",wallSide:"bottom",posX:9.12,width:1.4},{room:"f3_tutorial",wallSide:"bottom",posX:13.54,width:1.4},{room:"f3_lab10",wallSide:"bottom",posX:20.54,width:1.4},{room:"f3_lab10",wallSide:"bottom",posX:23.68,width:.43},{room:"f3_lab7",wallSide:"top",posX:10.95,width:.91},{room:"f3_lab8",wallSide:"top",posX:20.54,width:.91},{room:"f3_women",wallSide:"top",posX:25.86,width:.9},{room:"f3_gents",wallSide:"top",posX:38.11,width:.9}],features:[{id:"f3_water_filter",name:"Water Filter",type:"utility",center:[24.8,3.65],size:{width:.6,depth:.6}}],wallHeight:3,wallThickness:.15,planSize:{width:38.98,height:10.88},floorMessages:[{id:"m1",type:"welcome",text:"WELCOME TO CSE DEPARTMENT",position:[2,3.65]},{id:"m2",type:"quote",text:"Code is Poetry 💻",position:[15,3.65]},{id:"m3",type:"utility",text:"LIFT ACCESS 🛗",position:[.89,4.1]}]},uA={floorId:"f4",floorNumber:4,floorName:"3rd Floor",corridorPolygon:[[0,3.2],[24.54,3.2],[24.54,2.35],[27.54,2.35],[27.54,3.2],[27.54,3.2],[38.98,3.2],[38.98,4.1],[27.17,4.1],[5.36,4.1],[5.36,7.3],[0,7.3],[0,4.1]],corridorColor:"#2ecc40",rooms:[{id:"f4_301",name:"Classroom 301",center:[3.35,1.6],connectedTo:["f4_wp_hall_301"]},{id:"f4_302",name:"Classroom 302",center:[8.62,1.6],connectedTo:["f4_wp_hall_302"]},{id:"f4_303",name:"Classroom 303",center:[17.54,1.6],connectedTo:["f4_wp_hall_303"]},{id:"f4_stairs_top",name:"Stairs (Top)",center:[26.04,1.1],connectedTo:["f4_wp_hall_stairs_top"]},{id:"f4_306",name:"Classroom 306",center:[33.15,3.65],connectedTo:["f4_wp_hall_306"]},{id:"f4_lift",name:"Lift",center:[.89,5.7],connectedTo:["f4_wp_hall_lift"]},{id:"f4_stairs_bot",name:"Stairs (Bot)",center:[3.57,5.7],connectedTo:["f4_wp_hall_stairs_bot"]},{id:"f4_304",name:"Classroom 304",center:[10.95,5.7],connectedTo:["f4_wp_hall_304"]},{id:"f4_305",name:"Classroom 305",center:[20.54,5.7],connectedTo:["f4_wp_hall_305"]},{id:"f4_women",name:"Ladies Toilet",center:[25.86,5.7],connectedTo:["f4_wp_hall_women"]},{id:"f4_gents",name:"Men Washroom",center:[38.11,5.7],connectedTo:["f4_wp_hall_gents"]}],waypoints:[{id:"f4_wp_hall_lift",position:[.89,3.65],connectedTo:["f4_wp_hall_stairs_bot"]},{id:"f4_wp_hall_stairs_bot",position:[3.57,3.65],connectedTo:["f4_wp_hall_lift","f4_wp_hall_301"]},{id:"f4_wp_hall_301",position:[3.35,3.65],connectedTo:["f4_wp_hall_stairs_bot","f4_wp_hall_302"]},{id:"f4_wp_hall_302",position:[8.62,3.65],connectedTo:["f4_wp_hall_301","f4_wp_hall_304"]},{id:"f4_wp_hall_304",position:[10.95,3.65],connectedTo:["f4_wp_hall_302","f4_wp_hall_303"]},{id:"f4_wp_hall_303",position:[17.54,3.65],connectedTo:["f4_wp_hall_304","f4_wp_hall_305"]},{id:"f4_wp_hall_305",position:[20.54,3.65],connectedTo:["f4_wp_hall_303","f4_wp_hall_stairs_top"]},{id:"f4_wp_hall_stairs_top",position:[26.04,3.65],connectedTo:["f4_wp_hall_305","f4_wp_hall_women"]},{id:"f4_wp_hall_women",position:[25.86,3.65],connectedTo:["f4_wp_hall_stairs_top","f4_wp_hall_306"]},{id:"f4_wp_hall_306",position:[33.15,3.65],connectedTo:["f4_wp_hall_women","f4_wp_hall_gents"]},{id:"f4_wp_hall_gents",position:[38.11,3.65],connectedTo:["f4_wp_hall_306"]}],walls:[{p1:[0,0],p2:[24.54,0]},{p1:[27.54,0],p2:[38.98,0]},{p1:[38.98,0],p2:[38.98,7.3]},{p1:[38.98,7.3],p2:[5.36,7.3]},{p1:[1.78,7.3],p2:[0,7.3]},{p1:[0,7.3],p2:[0,0]},{p1:[0,3.2],p2:[24.54,3.2]},{p1:[27.54,3.2],p2:[38.98,3.2]},{p1:[0,4.1],p2:[38.98,4.1]},{p1:[6.7,0],p2:[6.7,3.2]},{p1:[13.54,0],p2:[13.54,3.2]},{p1:[24.54,0],p2:[24.54,3.2]},{p1:[27.54,0],p2:[27.54,3.2]},{p1:[1.78,4.1],p2:[1.78,7.3]},{p1:[5.36,4.1],p2:[5.36,7.3]},{p1:[16.54,4.1],p2:[16.54,7.3]},{p1:[24.54,4.1],p2:[24.54,7.3]},{p1:[32.38,4.1],p2:[32.38,7.3]}],wallHeight:3,wallThickness:.15,floorMessages:[{id:"m1",type:"welcome",text:"3RD FLOOR CLASSROOMS",position:[2,3.65]},{id:"m2",type:"quote",text:"Knowledge is Power 📚",position:[15,3.65]}]},fA={floorId:"f5",floorNumber:5,floorName:"4th Floor (ENTC)",rooms:[{id:"f5_entc_hod",name:"ENTC HOD Cabin",center:[-22.5,-5.25],connectedTo:["f5_wp_hall_hod"]},{id:"f5_dept_lib",name:"Dept Library",center:[-16.5,-5.25],connectedTo:["f5_wp_hall_dlib"]},{id:"f5_tutorial",name:"Tutorial Room",center:[-10,-5.25],connectedTo:["f5_wp_hall_lab11"]},{id:"f5_lab11",name:"Lab 11",center:[-4,-5.25],connectedTo:["f5_wp_hall_lab11"]},{id:"f5_lab12",name:"Lab 12",center:[1.5,-5.25],connectedTo:["f5_wp_hall_lab12"]},{id:"f5_lab13",name:"Lab 13",center:[7,-5.25],connectedTo:["f5_wp_hall_lab14"]},{id:"f5_lab14",name:"Lab 14",center:[14.5,-5.25],connectedTo:["f5_wp_hall_lab14"]},{id:"f5_lift",name:"Lift",center:[-24,5.25],connectedTo:["f5_wp_hall_lift"]},{id:"f5_stairs_bot",name:"Stairs (Bot)",center:[-20,5.25],connectedTo:["f5_wp_hall_stairs_bot"]}],waypoints:[{id:"f5_wp_hall_lift",position:[-24,0],connectedTo:["f5_wp_hall_stairs_bot"]},{id:"f5_wp_hall_stairs_bot",position:[-20,0],connectedTo:["f5_wp_hall_lift","f5_wp_hall_hod"]},{id:"f5_wp_hall_hod",position:[-22.5,0],connectedTo:["f5_wp_hall_stairs_bot","f5_wp_hall_dlib"]},{id:"f5_wp_hall_dlib",position:[-16.5,0],connectedTo:["f5_wp_hall_hod","f5_wp_hall_lab11"]},{id:"f5_wp_hall_lab11",position:[-10,0],connectedTo:["f5_wp_hall_dlib","f5_wp_hall_lab12"]},{id:"f5_wp_hall_lab12",position:[1,0],connectedTo:["f5_wp_hall_lab11","f5_wp_hall_lab14"]},{id:"f5_wp_hall_lab14",position:[14.5,0],connectedTo:["f5_wp_hall_lab12"]}],walls:[{p1:[-26,-9],p2:[26,-9]},{p1:[26,-9],p2:[26,1.5]},{p1:[26,1.5],p2:[18,1.5]},{p1:[18,1.5],p2:[18,9]},{p1:[18,9],p2:[-26,9]},{p1:[-26,9],p2:[-26,-9]},{p1:[-26,-1.5],p2:[26,-1.5]},{p1:[-26,1.5],p2:[26,1.5]},{p1:[-19,-9],p2:[-19,-1.5]},{p1:[-14,-9],p2:[-14,-1.5]},{p1:[-6,-9],p2:[-6,-1.5]},{p1:[-2,-9],p2:[-2,-1.5]},{p1:[5,-9],p2:[5,-1.5]},{p1:[9,-9],p2:[9,-1.5]},{p1:[-22,1.5],p2:[-22,9]},{p1:[-18,1.5],p2:[-18,9]},{p1:[-20,1.5],p2:[-20,9]},{p1:[4,1.5],p2:[4,9]},{p1:[11,1.5],p2:[11,9]}],wallHeight:3,wallThickness:.2,floorMessages:[{id:"m1",type:"welcome",text:"WELCOME TO ENTC DEPT",position:[-24,2]},{id:"m2",type:"quote",text:"Connecting the World 📡",position:[0,0]}]},hA={floorId:"f6",floorNumber:6,floorName:"5th Floor",rooms:[{id:"f6_501",name:"Classroom 501",center:[-22.5,-5.25],connectedTo:["f6_wp_hall_501"]},{id:"f6_502",name:"Classroom 502",center:[-16.5,-5.25],connectedTo:["f6_wp_hall_502"]},{id:"f6_503",name:"Classroom 503",center:[-10,-5.25],connectedTo:["f6_wp_hall_503"]},{id:"f6_504",name:"Classroom 504",center:[-4,-5.25],connectedTo:["f6_wp_hall_503"]},{id:"f6_505",name:"Classroom 505",center:[1.5,-5.25],connectedTo:["f6_wp_hall_505"]},{id:"f6_lift",name:"Lift",center:[-24,5.25],connectedTo:["f6_wp_hall_lift"]},{id:"f6_stairs_bot",name:"Stairs (Bot)",center:[-20,5.25],connectedTo:["f6_wp_hall_stairs_bot"]}],waypoints:[{id:"f6_wp_hall_lift",position:[-24,0],connectedTo:["f6_wp_hall_stairs_bot"]},{id:"f6_wp_hall_stairs_bot",position:[-20,0],connectedTo:["f6_wp_hall_lift","f6_wp_hall_501"]},{id:"f6_wp_hall_501",position:[-22.5,0],connectedTo:["f6_wp_hall_stairs_bot","f6_wp_hall_502"]},{id:"f6_wp_hall_502",position:[-16.5,0],connectedTo:["f6_wp_hall_501","f6_wp_hall_503"]},{id:"f6_wp_hall_503",position:[-10,0],connectedTo:["f6_wp_hall_502","f6_wp_hall_505"]},{id:"f6_wp_hall_505",position:[1,0],connectedTo:["f6_wp_hall_503"]}],walls:[{p1:[-26,-9],p2:[26,-9]},{p1:[26,-9],p2:[26,1.5]},{p1:[26,1.5],p2:[18,1.5]},{p1:[18,1.5],p2:[18,9]},{p1:[18,9],p2:[-26,9]},{p1:[-26,9],p2:[-26,-9]},{p1:[-26,-1.5],p2:[26,-1.5]},{p1:[-26,1.5],p2:[26,1.5]},{p1:[-19,-9],p2:[-19,-1.5]},{p1:[-14,-9],p2:[-14,-1.5]},{p1:[-6,-9],p2:[-6,-1.5]},{p1:[-2,-9],p2:[-2,-1.5]},{p1:[5,-9],p2:[5,-1.5]},{p1:[9,-9],p2:[9,-1.5]},{p1:[-22,1.5],p2:[-22,9]},{p1:[-18,1.5],p2:[-18,9]},{p1:[-20,1.5],p2:[-20,9]},{p1:[4,1.5],p2:[4,9]},{p1:[11,1.5],p2:[11,9]}],wallHeight:3,wallThickness:.2,floorMessages:[{id:"m1",type:"welcome",text:"5TH FLOOR CLASSROOMS",position:[-24,2]},{id:"m2",type:"quote",text:"Reach for the Stars ✨",position:[0,0]}]},qi=[{id:"f1",number:1,label:"Ground Floor",marker:{image:"marker_f1.png",position:{x:.89,z:3.65}}},{id:"f2",number:2,label:"1st Floor",marker:{image:"marker_f2.png",position:{x:.89,z:3.65}}},{id:"f3",number:3,label:"2nd Floor (CSE)",marker:{image:"marker.png",position:{x:2,z:1.6}}},{id:"f4",number:4,label:"3rd Floor",marker:{image:"marker_f4.png",position:{x:.89,z:3.65}}},{id:"f5",number:5,label:"4th Floor (ENTC)",marker:{image:"marker_f5.png",position:{x:.89,z:3.65}}},{id:"f6",number:6,label:"5th Floor",marker:{image:"marker_f6.png",position:{x:.89,z:3.65}}}],Wn=[aA,lA,cA,uA,fA,hA],Nd=[{name:"Main Lift",type:"lift",costPerFloor:5,floorWaypoints:{f1:"f1_wp_hall_lift",f2:"f2_wp_hall_lift",f3:"f3_wp_lift",f4:"f4_wp_hall_lift",f5:"f5_wp_hall_lift",f6:"f6_wp_hall_lift"}},{name:"Main Stairs (Bottom)",type:"stairs",costPerFloor:10,floorWaypoints:{f1:"f1_wp_hall_stairs_bot",f2:"f2_wp_hall_stairs_bot",f3:"f3_wp_stairs_bot",f4:"f4_wp_hall_stairs_bot",f5:"f5_wp_hall_stairs_bot",f6:"f6_wp_hall_stairs_bot"}},{name:"Side Stairs (Top)",type:"stairs",costPerFloor:10,floorWaypoints:{f1:"f1_wp_hall_gents",f2:"f2_wp_hall_stairs_top",f3:"f3_wp_stairs_top",f4:"f4_wp_hall_stairs_top",f5:"f5_wp_hall_lab14",f6:"f6_wp_hall_505"}}];function dA({floorData:t,activeSegment:e,startRoomId:n,endRoomId:i,onSessionStateChange:r,showARButton:s,showUIView:o}){var rt;const a=He.useRef(null),l=He.useRef(null),c=He.useRef(null),h=He.useRef(null),f=He.useRef(null),d=He.useRef(null),p=He.useRef([]),_=He.useRef(null),v=He.useRef(null),m=He.useRef(null),u=He.useRef(0),g=He.useRef([]),x=He.useRef(null),y=He.useRef(null),A=He.useRef(null),C=He.useRef(null),T=He.useRef(null),b=He.useRef(null),E=He.useRef(null),M=He.useRef(n),L=He.useRef(i),[F,W]=He.useState(!1),[J,B]=He.useState(!1),[X,ne]=He.useState(!1),[I,Q]=He.useState(null),[ie,Se]=He.useState(null),[Le,Xe]=He.useState(""),[Ze,qe]=He.useState(!1),ee=He.useRef(0),oe=()=>{var P;if(f.current&&c.current){const $=f.current,j=c.current,O=(P=qi.find(H=>H.id===t.floorId))==null?void 0:P.marker;if(!O)return;$.position.set(j.position.x,0,j.position.z),$.rotation.set(0,j.rotation.y,0),$.translateX(-O.position.x),$.translateZ(-O.position.z),Q({label:t.floorName,floorId:t.floorId}),ne(!0),B(!1),navigator.vibrate&&navigator.vibrate(200)}};He.useEffect(()=>{if(console.log("isFarView changed:",F),c.current&&d.current){const P=F?70:38;c.current.position.y=P,d.current.update()}},[F]),He.useEffect(()=>{M.current=n??"",L.current=i??""},[n,i]),He.useEffect(()=>{if(!f.current)return;A.current&&(f.current.remove(A.current),A.current.traverse(O=>{O.isMesh&&(O.geometry.dispose(),O.material.dispose())})),T.current&&(f.current.remove(T.current),T.current.traverse(O=>{O.isMesh&&(O.geometry.dispose(),O.material.dispose())})),b.current&&(f.current.remove(b.current),b.current.traverse(O=>{O.isMesh&&(O.geometry.dispose(),O.material.dispose())})),p.current.forEach(O=>{f.current.remove(O.cone,O.shaft),O.cone.geometry.dispose(),O.shaft.geometry.dispose()}),p.current=[],u.current=0,g.current=[],x.current=null;const{wallGroup:P}=i_(t);f.current.add(P),A.current=P;const $=new si;T.current=$,f.current.add($),Oe($);const j=new si;b.current=j,f.current.add(j),Ne(j),E.current&&f.current.remove(E.current),Re(f.current,P),f.current&&je(e,f.current)},[t,e]),He.useEffect(()=>{if(!a.current)return;const P=new vS;P.background=new et(657935),P.fog=new Ed(986910,10,60),l.current=P;const $=new si;f.current=$,P.add($);const j=new si;T.current=j,$.add(j);const O=new xn(75,window.innerWidth/window.innerHeight,.1,1e3);O.position.set(0,10,50),c.current=O;const H=new X2({antialias:!0,alpha:!0});H.setSize(window.innerWidth,window.innerHeight),H.setPixelRatio(window.devicePixelRatio),H.shadowMap.enabled=!0,H.shadowMap.type=v0,H.setClearColor(0,0),a.current.appendChild(H.domElement),H.xr.enabled=!0,h.current=H,(async()=>{var ce;const K={requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay","dom-overlay-for-handheld-ar","image-tracking"],domOverlay:{root:document.body}},V=[],ge=window.location.href.split("?")[0].split("#")[0],re=te=>ge.endsWith("/")?ge+te:ge.substring(0,ge.lastIndexOf("/")+1)+te;for(const te of qi)if(te.marker)try{const ae=new Image;ae.src=re(te.marker.image),await ae.decode();const we=await createImageBitmap(ae);V.push({image:we,widthInMeters:.2}),console.log(`AR: Loaded marker for ${te.label}`)}catch(ae){console.warn(`AR: Failed to load marker for ${te.label}`,ae)}V.length>0&&(K.trackedImages=V);const fe=j2.createButton(H,K);y.current=fe,(ce=a.current)==null||ce.appendChild(fe)})();const le=new oM(16777215,.4);P.add(le);const Z=new sM(16777215,2);Z.position.set(10,20,10),Z.castShadow=!0,Z.shadow.mapSize.width=2048,Z.shadow.mapSize.height=2048,Z.shadow.camera.left=-50,Z.shadow.camera.right=50,Z.shadow.camera.top=50,Z.shadow.camera.bottom=-20,P.add(Z);const me=new Cm(10980346,.5);me.position.set(-10,10,-10),me.castShadow=!0,P.add(me);const De=new Cm(13079274,.5);De.position.set(10,10,10),De.castShadow=!0,P.add(De);const R=new q2(O,H.domElement);d.current=R;const{wallGroup:S}=i_(t);$.add(S),A.current=S,H.xr.addEventListener("sessionstart",()=>{var ge;r&&r(!0),B(!0),ne(!1);const K=f.current;if(!K)return;const V=1;if(K.scale.set(V,V,V),e&&e.positions.length>=2){const re=e.positions[0],fe=e.positions[1],ce=fe[0]-re[0],te=fe[1]-re[1],ae=Math.atan2(ce,te);K.rotation.set(0,-ae,0);const we=new D(re[0],0,re[1]).multiplyScalar(V);we.applyAxisAngle(new D(0,1,0),K.rotation.y),K.position.set(-we.x,0,-we.z)}else{const re=t.rooms.find(fe=>fe.id===M.current);if((ge=re==null?void 0:re.connectedTo)!=null&&ge[0]){const fe=t.waypoints.find(ce=>ce.id===re.connectedTo[0]);fe&&K.position.set(-fe.position[0]*V,0,-fe.position[1]*V)}}T.current&&(T.current.visible=!1),b.current&&(b.current.visible=!1),E.current&&(E.current.visible=!1),A.current&&(A.current.visible=!1),e&&f.current&&je(e,f.current),p.current.forEach(re=>{re.cone.visible=!0,re.shaft.visible=!0,re.ring.visible=!0}),m.current&&(m.current.visible=!1)}),H.xr.addEventListener("sessionend",()=>{r&&r(!1);const K=f.current;K&&(K.scale.set(1,1,1),K.position.set(0,0,0),K.rotation.set(0,0,0),T.current&&(T.current.visible=!0),E.current&&(E.current.visible=!0),A.current&&(A.current.visible=!0),m.current&&(m.current.visible=!1),e&&K&&je(e,K))}),Re($,S),Oe(j);const U=()=>{O.aspect=window.innerWidth/window.innerHeight,O.updateProjectionMatrix(),H.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",U);const G=()=>{var re;R.update();const K=H.xr.getSession(),V=H.xr.getFrame();if(K&&V&&J&&!X&&f.current){const fe=((re=V.getImageTrackingResults)==null?void 0:re.call(V))||[];for(const ce of fe)if(ce.trackingState==="tracked"||ce.trackingState==="emulated"){const te=ce.index,we=qi.filter(Ae=>Ae.marker)[te];if(we&&we.marker){const Ae=H.xr.getReferenceSpace(),ye=V.getPose(ce.imageSpace,Ae);if(ye){const{position:Ue,orientation:N}=ye.transform,ue=f.current;ue.position.set(Ue.x,Ue.y,Ue.z),ue.quaternion.set(N.x,N.y,N.z,N.w),ue.translateX(-we.marker.position.x),ue.translateZ(-we.marker.position.z),Q({label:we.label,floorId:we.id}),ne(!0),B(!1),navigator.vibrate&&navigator.vibrate(200)}}}}if(K&&X&&e&&e.positions.length>0){const fe=new D;O.getWorldPosition(fe);const ce=e.positions[e.positions.length-1],te=new D(ce[0],0,ce[1]);f.current&&te.applyMatrix4(f.current.matrixWorld);const ae=fe.distanceTo(te);Se(ae),ae<1.5&&!Ze?(navigator.vibrate&&navigator.vibrate([500,100,500]),qe(!0),Xe("You have arrived!")):ae>=1.5&&(qe(!1),Xe(e.transition?`Head to ${e.transition.name}`:"Follow the arrows"),performance.now()-ee.current>15e3)}if(T.current&&K&&X){const fe=new D;O.getWorldPosition(fe),T.current.children.forEach(ce=>{const te=new D;ce.getWorldPosition(te);const ae=fe.distanceTo(te);if(ce.visible=ae<5,ce.visible){const we=ce.material;we.opacity=Al.lerp(1,0,(ae-2)/3),ce.scale.setScalar(Al.lerp(1,.5,(ae-2)/3))}})}if(b.current&&K&&X){const fe=new D;O.getWorldPosition(fe),b.current.children.forEach(ce=>{const te=new D;ce.getWorldPosition(te);const ae=fe.distanceTo(te);if(ce.visible=ae<4,ce.visible){const we=ce.material,Ae=Al.clamp(1-ae/4,0,1);we.opacity=Ae;const ye=1+Math.sin(ge*3)*.05;ce.scale.setScalar(ye)}})}const ge=performance.now()*.001;if(p.current.forEach((fe,ce)=>{const{cone:te,shaft:ae,ring:we}=fe,Ae=Math.sin(ge*2+ce*.4)*.04;te.userData.baseY!==void 0&&(te.position.y=te.userData.baseY+Ae),ae.userData.baseY!==void 0&&(ae.position.y=ae.userData.baseY+Ae),we.userData.baseY!==void 0&&(we.position.y=we.userData.baseY);const ye=1.8+Math.sin(ge*3+ce)*.7;[te,ae].forEach(N=>{const ue=N.material;ue.emissive!==void 0&&(ue.emissiveIntensity=ye)});const Ue=1+Math.sin(ge*2+ce)*.04;te.scale.set(Ue,Ue,Ue),ae.scale.set(Ue,Ue,Ue)}),_.current){const fe=1+Math.sin(ge*4)*.2;_.current.scale.set(fe,fe,fe),_.current.material.opacity=.5+Math.sin(ge*4)*.5}if(v.current){const fe=v.current.children[3];fe&&(fe.rotation.y+=.03,fe.rotation.x+=.01,fe.position.y=7+Math.sin(ge*2.5)*.5);const ce=v.current.children[1];ce&&(ce.rotation.z+=.02,ce.scale.setScalar(1.2+Math.sin(ge*2)*.1))}H.render(P,O)};return H.setAnimationLoop(G),()=>{window.removeEventListener("resize",U),H.setAnimationLoop(null),H.dispose(),R.dispose(),a.current&&H.domElement&&a.current.removeChild(H.domElement),a.current&&arButton.parentNode&&a.current.removeChild(arButton)}},[]),He.useEffect(()=>{f.current&&je(e,f.current)},[e]),He.useEffect(()=>{y.current&&(y.current.style.display=s?"block":"none")},[s]);const Re=(P,$)=>{const j=new Zs().setFromObject($),O=new D;j.getSize(O);const H=new D;j.getCenter(H);const de=4,le=new Dr(O.x+de,O.z+de),Z=new ti({color:526346,roughness:.8,metalness:.2}),me=new Tt(le,Z);if(me.rotation.x=-Math.PI/2,me.position.copy(H),me.position.y=0,me.receiveShadow=!0,C.current=Z,E.current=me,P.add(me),t.corridorPolygon&&t.corridorPolygon.length>0){const De=new q0,[R,S]=t.corridorPolygon[0];De.moveTo(R,S),t.corridorPolygon.slice(1).forEach(([ge,re])=>{De.lineTo(ge,re)}),De.closePath();const U={depth:.02,bevelEnabled:!1},G=new Cd(De,U),K=new ti({color:t.corridorColor||3066944,roughness:.6,metalness:.1,transparent:!0,opacity:.8}),V=new Tt(G,K);V.rotation.x=-Math.PI/2,V.position.y=.01,P.add(V)}c.current&&d.current&&(c.current.position.set(H.x,38,H.z+.001),d.current.target.copy(H),d.current.update())},Oe=P=>{if(!t)return;const $={gymkhana:12,gents:6,women:6,g1:8,g2:8,g3:8,g4:8,g5:8,lab1:8,lab2:8,lab3:8,lab4:8,lab5:8,lab6:8,lab7:10,lab8:10,lab9:14,lab10:8,lab11:8,lab12:8,lab13:8,lab14:8,hod:6,entc_hod:6,dept_lib:4,server:6,tutorial:3.5,corridor:20,lift:3,stairs_bot:3,faculty:6,seminar:10,301:8,302:8,303:8,304:8,306:8,501:8,502:8,503:8,504:8,505:8},j={gymkhana:6,principal:6,admin:6,conf:6,lab1:6,canteen:6,library:6,ramp:6,hod:6,entc_hod:6,dept_lib:6,server:6,tutorial:6,lab10:6,stairs_top:6,lab9:6,corridor:2,lift:6,stairs_bot:6,lab7:6,lab8:6,women:6,gents:6};t.rooms.forEach(O=>{if(!O.center)return;const H=O.id.split("_").slice(1).join("_"),de=$[H]??6,le=j[H]??7.5,Z=document.createElement("canvas"),me=Z.getContext("2d");if(!me)return;Z.width=512,Z.height=512;const De=96,R=28;let S=De;for(me.font=`bold ${S}px Arial`;me.measureText(O.name).width>Z.width*.88&&S>R;)S-=4,me.font=`bold ${S}px Arial`;const U=O.name.split(" "),G=[];if(U.length>1&&me.measureText(O.name).width>Z.width*.85){const Ue=Math.ceil(U.length/2);G.push(U.slice(0,Ue).join(" ")),G.push(U.slice(Ue).join(" "));for(const N of G)for(;me.measureText(N).width>Z.width*.88&&S>R;)S-=4,me.font=`bold ${S}px Arial`}else G.push(O.name);const K=S*1.25,V=G.length*K;me.clearRect(0,0,Z.width,Z.height),me.fillStyle="rgba(8, 8, 18, 0.82)";const ge=32;me.beginPath(),me.moveTo(ge,0),me.lineTo(Z.width-ge,0),me.quadraticCurveTo(Z.width,0,Z.width,ge),me.lineTo(Z.width,Z.height-ge),me.quadraticCurveTo(Z.width,Z.height,Z.width-ge,Z.height),me.lineTo(ge,Z.height),me.quadraticCurveTo(0,Z.height,0,Z.height-ge),me.lineTo(0,ge),me.quadraticCurveTo(0,0,ge,0),me.closePath(),me.fill(),me.strokeStyle="rgba(199, 146, 234, 0.85)",me.lineWidth=8,me.stroke(),me.font=`bold ${S}px Arial`,me.textAlign="center",me.textBaseline="middle",me.shadowColor="rgba(199, 146, 234, 1)",me.shadowBlur=24,me.fillStyle="#ffffff";const re=Z.height/2-V/2+K/2;G.forEach((Ue,N)=>{me.fillText(Ue,Z.width/2,re+N*K)}),me.shadowBlur=10,me.fillStyle="#eedeff",G.forEach((Ue,N)=>{me.fillText(Ue,Z.width/2,re+N*K)});const fe=new xm(Z);fe.needsUpdate=!0;const ce=new tc({map:fe,transparent:!0,depthWrite:!1,side:Nn}),te=.7,ae=Math.min(de-te,de*.85),we=Math.min(le-te,le*.75),Ae=new Dr(ae,we),ye=new Tt(Ae,ce);ye.position.set(O.center[0],.06,O.center[1]),ye.rotation.x=-Math.PI/2,P.add(ye)})},Ne=P=>{t.floorMessages&&t.floorMessages.forEach($=>{const j=document.createElement("canvas"),O=j.getContext("2d");if(!O)return;j.width=1024,j.height=256;const H=$.type==="welcome",de=H?"#8b5cf6":$.type==="quote"?"#10b981":"#f59e0b";O.fillStyle="rgba(15, 15, 25, 0.7)",O.roundRect(0,0,j.width,j.height,40),O.fill(),O.strokeStyle=de,O.lineWidth=10,O.stroke(),O.font="bold 80px Arial",O.textAlign="center",O.textBaseline="middle",O.shadowColor=de,O.shadowBlur=30,O.fillStyle="#ffffff",O.fillText($.text,j.width/2,j.height/2);const le=new xm(j),Z=new ti({map:le,transparent:!0,opacity:0,depthWrite:!1,emissive:new et(de),emissiveIntensity:2}),me=new Dr(H?4:2.5,H?1:.6),De=new Tt(me,Z);De.rotation.x=-Math.PI/2,De.position.set($.position[0],.02,$.position[1]),P.add(De)})},je=(P,$)=>{var st;if(p.current.forEach(ze=>{$.remove(ze.cone,ze.shaft,ze.ring),ze.coneGeo.dispose(),ze.shaftGeo.dispose(),ze.ringGeo.dispose(),ze.coneMat.dispose(),ze.shaftMat.dispose(),ze.ringMat.dispose()}),p.current=[],_.current&&($.remove(_.current),_.current.geometry.dispose(),_.current.material.dispose(),_.current=null),v.current&&($.remove(v.current),v.current.traverse(ze=>{ze.isMesh&&(ze.geometry.dispose(),ze.material.dispose())}),v.current=null),u.current=0,g.current=[],x.current=null,m.current&&($.remove(m.current),m.current.geometry.dispose(),m.current.material.dispose(),m.current=null),!P||P.positions.length<2)return;const j=P.positions.map(ze=>new D(ze[0],.12,ze[1]));if(j.length<2)return;const O=new Bo(.8,.05,12,32),H=new ti({color:1096065,emissive:1096065,emissiveIntensity:5}),de=new Tt(O,H);de.rotation.x=-Math.PI/2,de.position.copy(j[0]).setY(.01),$.add(de),_.current=de;const le=j[j.length-1],Z=new si,me=new Bo(1,.1,16,48),De=new ti({color:9133302,emissive:9133302,emissiveIntensity:8}),R=new Tt(me,De);R.rotation.x=-Math.PI/2,Z.add(R);const S=new Bo(1.5,.05,8,32),U=new Tt(S,De);U.rotation.x=-Math.PI/2,Z.add(U);const G=new rc(.05,1,6,24,1,!0),K=new ti({color:10980346,emissive:10980346,emissiveIntensity:4,transparent:!0,opacity:.3,side:Nn}),V=new Tt(G,K);V.position.y=3,Z.add(V);const ge=new sc(.5),re=new ti({color:16777215,emissive:10980346,emissiveIntensity:12}),fe=new Tt(ge,re);fe.position.y=7,Z.add(fe),Z.position.copy(le).setY(.01),$.add(Z),v.current=Z;const ce=new G0(j);x.current=ce;const ae=ce.getPoints(300);g.current=ae;const we=new dn().setFromPoints(ae),Ae=new B0({color:13079274,linewidth:2}),ye=new MS(we,Ae);ye.userData.isPathLine=!0,$.add(ye),m.current=ye;const Ue=4,N=((st=h.current)==null?void 0:st.xr.isPresenting)??!1,ue=N?.08:.4,Me=N?.08:.12,be=N?.05:.28,pe=N?.015:.04,se=N?.05:.14,Ie=N?.02:.09,Ge=N?.001:.12;for(let ze=0;ze<ae.length;ze+=Ue){const $t=ae[ze].clone();$t.y=Ge;const Tn=ze/(ae.length-1),xa=ce.getTangent(Tn).normalize(),Qn=new sc(Me,0),Yr=new ti({color:9133302,emissive:9133302,emissiveIntensity:4,transparent:!0,opacity:.9}),kn=new Tt(Qn,Yr);kn.position.copy($t).setY(Ge+ue/2),kn.scale.set(1,.4,1.2);const to=$t.clone().add(xa);kn.lookAt(to.x,Ge+ue/2,to.z),kn.userData.baseY=kn.position.y;const hr=new rc(pe,pe,be,12),no=new ti({color:9133302,emissive:9133302,emissiveIntensity:2.5}),An=new Tt(hr,no);An.position.copy($t).setY(Ge+ue/4),An.quaternion.copy(kn.quaternion),An.translateY(-(ue/2)),An.userData.baseY=An.position.y;const io=new bd(Ie,se,24),ro=new tc({color:9133302,side:Nn,transparent:!0,opacity:.3}),Di=new Tt(io,ro);Di.rotation.x=-Math.PI/2,Di.position.copy($t).setY(.001),Di.userData.baseY=Di.position.y,$.add(kn,An,Di),p.current.push({cone:kn,shaft:An,ring:Di,coneGeo:Qn,coneMat:Yr,shaftGeo:hr,shaftMat:no,ringGeo:io,ringMat:ro})}};return he.jsxs(he.Fragment,{children:[he.jsx("div",{ref:a,className:"fixed inset-0 z-0"}),J&&he.jsx("div",{className:"fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900/60 backdrop-blur-sm",children:he.jsxs("div",{className:"bg-slate-900 border border-purple-500/50 p-8 rounded-3xl shadow-2xl flex flex-col items-center max-w-xs text-center",children:[he.jsxs("div",{className:"relative w-24 h-24 mb-6",children:[he.jsx("div",{className:"absolute inset-0 border-4 border-purple-500 rounded-2xl animate-pulse"}),he.jsx("div",{className:"absolute inset-4 border-2 border-purple-400/50 rounded-lg animate-ping"}),he.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:he.jsx("span",{className:"text-4xl text-purple-400",children:"📷"})})]}),he.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"Aligning World"}),he.jsxs("p",{className:"text-sm text-purple-200 mb-6 leading-relaxed",children:["Point your camera at the ",he.jsxs("span",{className:"font-bold text-white underline",children:[((rt=qi.find(P=>P.id===t.floorId))==null?void 0:rt.label)||"Floor"," Marker"]})," to calibrate."]}),he.jsxs("div",{className:"flex flex-col gap-2 w-full",children:[he.jsx("button",{onClick:()=>oe(),className:"px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-purple-500/20",children:"Found Marker (Align Now)"}),he.jsx("button",{onClick:()=>B(!1),className:"px-6 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium rounded-xl transition-colors border border-slate-700",children:"Skip Calibration"})]})]})}),X&&ie!==null&&he.jsx("div",{className:"fixed bottom-10 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm",children:he.jsxs("div",{className:"bg-slate-900/80 backdrop-blur-xl border border-white/10 p-4 rounded-3xl shadow-2xl flex items-center gap-4",children:[he.jsx("div",{className:"bg-purple-600/30 p-3 rounded-2xl",children:he.jsx("div",{className:"w-6 h-6 border-2 border-purple-400 rounded-full animate-pulse flex items-center justify-center",children:he.jsx("div",{className:"w-2 h-2 bg-purple-400 rounded-full"})})}),he.jsxs("div",{className:"flex-1",children:[he.jsxs("div",{className:"flex items-baseline gap-1.5",children:[he.jsx("span",{className:"text-2xl font-black text-white",children:ie<1?"Arriving":`${Math.round(ie)}m`}),he.jsxs("span",{className:"text-xs font-medium text-slate-400 uppercase tracking-tight",children:["to ",(e==null?void 0:e.floorId)===t.floorId?"Destination":"Next Floor"]})]}),he.jsxs("p",{className:"text-sm font-medium text-purple-300",children:[Le," • ",Math.ceil(ie/1.2/60)," min walk"]}),I&&he.jsxs("p",{className:"text-[10px] text-green-400 font-bold uppercase mt-1",children:["✓ Synced to ",I.label]})]})]})}),o&&he.jsx("button",{onClick:()=>{console.log("Button clicked!"),W(!F)},className:"fixed top-20 left-6 z-20 bg-white/95 p-3 rounded-full shadow-lg text-slate-800 hover:bg-slate-100 transition-colors","aria-label":"Toggle Far View",children:F?"Default View":"Far View"})]})}const pA={lift:"🛗",stairs:"🪜",ramp:"♿"};function mA({startRoomId:t,startFloorId:e,endRoomId:n,endFloorId:i,activeFloorId:r,pathSegments:s,onStartChange:o,onEndChange:a,onFloorChange:l,onFindPath:c,onClose:h}){var p,_;const f=He.useMemo(()=>Wn.map(v=>{var m;return{floorId:v.floorId,label:((m=qi.find(u=>u.id===v.floorId))==null?void 0:m.label)??v.floorId,rooms:v.rooms.filter(u=>{var g;return((g=u.connectedTo)==null?void 0:g.length)>0&&!u.id.endsWith("_corridor")})}}),[]),d=e===i;return he.jsxs("div",{className:"fixed top-4 left-1/2 -translate-x-1/2 z-20 bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl p-5 w-full max-w-sm border border-purple-500/30",children:[he.jsx("button",{onClick:h,className:"absolute top-3 right-3 text-slate-400 hover:text-white transition-colors",children:he.jsx(Gy,{className:"w-5 h-5"})}),he.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[he.jsx("div",{className:"bg-gradient-to-br from-purple-600 to-indigo-600 p-2 rounded-xl",children:he.jsx(Xp,{className:"w-5 h-5 text-white"})}),he.jsxs("div",{children:[he.jsx("h1",{className:"text-lg font-bold text-white",children:"AR Navigation"}),he.jsx("p",{className:"text-xs text-purple-300",children:"Multi-Floor System"})]})]}),he.jsxs("div",{className:"mb-4",children:[he.jsxs("label",{className:"flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1.5",children:[he.jsx(Gp,{className:"w-3.5 h-3.5"})," Viewing Floor"]}),he.jsx("div",{className:"grid grid-cols-3 gap-1",children:qi.map(v=>he.jsxs("button",{onClick:()=>l(v.id),className:`text-xs py-1.5 px-2 rounded-lg font-medium transition-all truncate ${r===v.id?"bg-purple-600 text-white shadow-lg shadow-purple-500/30":"bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"}`,children:["F",v.number]},v.id))})]}),he.jsxs("div",{className:"space-y-3",children:[he.jsxs("div",{children:[he.jsxs("label",{className:"flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1.5",children:[he.jsx(Wp,{className:"w-3.5 h-3.5 text-green-400"})," From"]}),he.jsx("select",{value:e,onChange:v=>{const m=Wn.find(g=>g.floorId===v.target.value),u=m==null?void 0:m.rooms.find(g=>!g.id.endsWith("_corridor"));o(v.target.value,(u==null?void 0:u.id)??"")},className:"w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-xl text-white text-xs mb-1 focus:outline-none focus:ring-2 focus:ring-purple-500",children:f.map(v=>he.jsx("option",{value:v.floorId,children:v.label},v.floorId))}),he.jsx("select",{value:t,onChange:v=>o(e,v.target.value),className:"w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-xl text-white text-xs focus:outline-none focus:ring-2 focus:ring-purple-500",children:(p=f.find(v=>v.floorId===e))==null?void 0:p.rooms.map(v=>he.jsx("option",{value:v.id,children:v.name},v.id))})]}),he.jsxs("div",{className:"flex items-center gap-2",children:[he.jsx("div",{className:"flex-1 h-px bg-slate-700"}),he.jsx("div",{className:"flex items-center gap-1 text-xs text-purple-400",children:d?he.jsx("span",{className:"text-slate-500",children:"same floor"}):he.jsxs(he.Fragment,{children:[he.jsx(By,{className:"w-3 h-3"}),he.jsx("span",{children:"cross-floor"}),he.jsx(Hy,{className:"w-3 h-3"})]})}),he.jsx("div",{className:"flex-1 h-px bg-slate-700"})]}),he.jsxs("div",{children:[he.jsxs("label",{className:"flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1.5",children:[he.jsx(Wp,{className:"w-3.5 h-3.5 text-red-400"})," To"]}),he.jsx("select",{value:i,onChange:v=>{const m=Wn.find(g=>g.floorId===v.target.value),u=m==null?void 0:m.rooms.find(g=>!g.id.endsWith("_corridor"));a(v.target.value,(u==null?void 0:u.id)??"")},className:"w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-xl text-white text-xs mb-1 focus:outline-none focus:ring-2 focus:ring-purple-500",children:f.map(v=>he.jsx("option",{value:v.floorId,children:v.label},v.floorId))}),he.jsx("select",{value:n,onChange:v=>a(i,v.target.value),className:"w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-xl text-white text-xs focus:outline-none focus:ring-2 focus:ring-purple-500",children:(_=f.find(v=>v.floorId===i))==null?void 0:_.rooms.map(v=>he.jsx("option",{value:v.id,children:v.name},v.id))})]}),he.jsxs("button",{onClick:c,className:"w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2",children:[he.jsx(Xp,{className:"w-4 h-4"})," Find Path"]})]}),s.length>0&&he.jsxs("div",{className:"mt-4 pt-4 border-t border-slate-700",children:[he.jsxs("p",{className:"text-xs font-semibold text-slate-400 mb-2 flex items-center gap-1",children:[he.jsx(Gp,{className:"w-3 h-3"})," Route (",s.length," floor",s.length>1?"s":"",")"]}),he.jsx("div",{className:"space-y-1.5",children:s.map((v,m)=>{var g;const u=qi.find(x=>x.id===v.floorId);return he.jsxs("div",{children:[he.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[he.jsx("div",{className:`w-2 h-2 rounded-full flex-shrink-0 ${v.floorId===r?"bg-purple-400":"bg-slate-600"}`}),he.jsx("span",{className:`font-medium ${v.floorId===r?"text-white":"text-slate-400"}`,children:(u==null?void 0:u.label)??v.floorId}),he.jsxs("span",{className:"text-slate-600 ml-auto",children:[v.waypointIds.length," wp"]}),v.floorId===r&&he.jsx("span",{className:"text-purple-400 text-[10px]",children:"●"})]}),v.transition&&he.jsxs("div",{className:"ml-4 text-[11px] text-amber-300 mt-0.5",children:[pA[v.transition.type]," ",v.transition.name,he.jsxs("span",{className:"text-slate-500",children:[" → ",(g=qi.find(x=>x.id===v.transition.toFloor))==null?void 0:g.label]})]})]},m)})})]})]})}function _A(t){const e=[];for(const n of t){const i=parseInt(n.floorId.replace("f",""),10);for(const r of n.waypoints)e.push({id:r.id,position:[r.position[0],r.position[1],i],connectedTo:[...r.connectedTo],floorId:n.floorId})}for(const n of Nd){const i=Object.keys(n.floorWaypoints);for(let r=0;r<i.length;r++){const s=i[r],o=n.floorWaypoints[s],a=e.find(l=>l.id===o);if(a)for(let l=0;l<i.length;l++){if(r===l)continue;const c=i[l],h=n.floorWaypoints[c];e.find(f=>f.id===h)&&(a.connectedTo.includes(h)||a.connectedTo.push(h))}}}return e}function Iu(t,e){const n=t.position[0]-e.position[0],i=t.position[1]-e.position[1],r=(t.position[2]-e.position[2])*15;return Math.sqrt(n*n+i*i+r*r)}function gA(t,e,n){const i=[t],r={},s={},o={},a=n.find(c=>c.id===e);if(!a)return[];for(const c of n)s[c.id]=1/0,o[c.id]=1/0;s[t]=0;const l=n.find(c=>c.id===t);for(o[t]=l?Iu(l,a):1/0;i.length>0;){i.sort((p,_)=>o[p]-o[_]);const c=i.shift();if(c===e){const p=[c];let _=c;for(;r[_];)_=r[_],p.unshift(_);return p}const h=n.find(p=>p.id===c),f=r[c],d=f?n.find(p=>p.id===f):null;for(const p of h.connectedTo){const _=n.find(u=>u.id===p);if(!_)continue;let v=Iu(h,_);if(h.floorId!==_.floorId){const u=Nd.find(g=>Object.values(g.floorWaypoints).includes(c)&&Object.values(g.floorWaypoints).includes(p));v+=(u==null?void 0:u.costPerFloor)??20}if(d){const u=h.position[0]-d.position[0],g=h.position[1]-d.position[1],x=_.position[0]-h.position[0],y=_.position[1]-h.position[1],A=Math.sqrt(u*u+g*g)||1,C=Math.sqrt(x*x+y*y)||1;(u*x+g*y)/(A*C)<.9&&(v+=15)}const m=s[c]+v;m<(s[p]??1/0)&&(r[p]=c,s[p]=m,o[p]=m+Iu(_,a),i.includes(p)||i.push(p))}}return[]}function vA(t,e,n){let i="",r="",s="",o="";for(const p of n){const _=p.rooms.find(m=>m.id===t);_!=null&&_.connectedTo[0]&&(i=_.connectedTo[0],s=p.floorId);const v=p.rooms.find(m=>m.id===e);v!=null&&v.connectedTo[0]&&(r=v.connectedTo[0],o=p.floorId)}if(!i||!r)return[];const a=_A(n),l=gA(i,r,a);if(l.length===0)return[];let c=null,h=null;for(const p of n){const _=p.rooms.find(m=>m.id===t);_&&(c=_.center);const v=p.rooms.find(m=>m.id===e);v&&(h=v.center)}const f=[];let d=null;for(let p=0;p<l.length;p++){const _=l[p],v=a.find(m=>m.id===_);if(!d||d.floorId!==v.floorId){let m;if(d&&p>0){const u=l[p-1],g=Nd.find(x=>Object.values(x.floorWaypoints).includes(u)&&Object.values(x.floorWaypoints).includes(_));g&&(m={type:g.type,name:g.name,fromFloor:d.floorId,toFloor:v.floorId}),d&&(d.transition=m)}if(d={floorId:v.floorId,waypointIds:[_],positions:[[v.position[0],v.position[1]]]},f.length===0&&c){const u=c[0]-v.position[0],g=c[1]-v.position[1],x=Math.sqrt(u*u+g*g)||1,y=[c[0]+u/x*1.5,c[1]+g/x*1.5];d.positions.unshift(c),d.positions.unshift(y),d.positions=[y,c,[c[0],v.position[1]],[v.position[0],v.position[1]]]}f.push(d)}else d.waypointIds.push(_),d.positions.push([v.position[0],v.position[1]])}if(f.length>0&&h){const p=f[f.length-1],_=p.positions[p.positions.length-1];p.positions.push([h[0],_[1]]),p.positions.push(h)}return f.length>0&&(f[0]._startFloor=s,f[f.length-1]._endFloor=o),f}function xA(){var b,E,M,L,F,W,J;const t="f3",e=((E=(b=Wn.find(B=>B.floorId===t))==null?void 0:b.rooms.find(B=>!B.id.endsWith("_corridor")))==null?void 0:E.id)??"",n=((L=(M=Wn.find(B=>B.floorId===t))==null?void 0:M.rooms.filter(B=>!B.id.endsWith("_corridor"))[1])==null?void 0:L.id)??"",[i,r]=He.useState(t),[s,o]=He.useState(e),[a,l]=He.useState(t),[c,h]=He.useState(n),[f,d]=He.useState(t),[p,_]=He.useState([]),[v,m]=He.useState(!1),[u,g]=He.useState(!1),x=He.useCallback(()=>{const B=vA(s,c,Wn);_(B),B.length>0&&d(B[0].floorId),g(!1)},[s,c]),y=(B,X)=>{r(B),o(X)},A=(B,X)=>{l(B),h(X)},C=Wn.find(B=>B.floorId===f),T=p.find(B=>B.floorId===f)??null;return he.jsxs("main",{children:[!v&&!u&&he.jsx("button",{onClick:()=>g(!0),className:"fixed top-6 left-6 z-20 bg-slate-900/90 border border-purple-500/30 p-3 rounded-full shadow-lg text-white hover:bg-slate-800 transition-colors","aria-label":"Open navigation menu",children:he.jsx(Vy,{className:"w-6 h-6"})}),!v&&!u&&he.jsx("div",{className:"fixed top-6 left-20 z-20 bg-slate-900/90 border border-purple-500/30 px-3 py-2 rounded-full text-xs text-purple-300 font-medium",children:Wn.find(B=>B.floorId===f)&&he.jsxs(he.Fragment,{children:["Viewing: ",he.jsx("span",{className:"text-white font-bold",children:((F=Wn.find(B=>B.floorId===f))==null?void 0:F.floorName)||f})]})}),!v&&u&&he.jsx(mA,{startRoomId:s,startFloorId:i,endRoomId:c,endFloorId:a,activeFloorId:f,pathSegments:p,onStartChange:y,onEndChange:A,onFloorChange:d,onFindPath:x,onClose:()=>g(!1)}),(T==null?void 0:T.transition)&&!u&&he.jsxs("div",{className:"fixed bottom-24 left-1/2 -translate-x-1/2 z-20 w-[90%] max-w-xs bg-slate-900/95 border border-amber-500/50 p-4 rounded-2xl shadow-2xl backdrop-blur-md",children:[he.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[he.jsx("div",{className:"bg-amber-500/20 p-2 rounded-lg",children:he.jsx("span",{className:"text-xl",children:T.transition.type==="lift"?"🛗":T.transition.type==="stairs"?"🪜":"♿"})}),he.jsxs("div",{children:[he.jsx("p",{className:"text-xs font-bold text-amber-400 uppercase tracking-wider",children:"Next Step"}),he.jsxs("p",{className:"text-sm text-white font-medium",children:["Take the ",T.transition.name," to ",((W=Wn.find(B=>{var X;return B.floorId===((X=T.transition)==null?void 0:X.toFloor)}))==null?void 0:W.floorName)||T.transition.toFloor]})]})]}),he.jsxs("button",{onClick:()=>d(T.transition.toFloor),className:"w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-2 rounded-xl transition-colors text-sm shadow-lg shadow-amber-500/20",children:["Switch to ",((J=Wn.find(B=>{var X;return B.floorId===((X=T.transition)==null?void 0:X.toFloor)}))==null?void 0:J.floorName.split(" ")[0])||"Next"," Floor"]})]}),C&&he.jsx(dA,{floorData:C,activeSegment:T,startRoomId:i===f?s:null,endRoomId:a===f?c:null,onSessionStateChange:m,showARButton:!u,showUIView:!u})]})}_0(document.getElementById("root")).render(he.jsx(He.StrictMode,{children:he.jsx(xA,{})}));
