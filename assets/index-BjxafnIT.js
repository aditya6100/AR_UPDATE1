(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var c_={exports:{}},fc={},u_={exports:{}},Ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pa=Symbol.for("react.element"),hv=Symbol.for("react.portal"),dv=Symbol.for("react.fragment"),pv=Symbol.for("react.strict_mode"),mv=Symbol.for("react.profiler"),_v=Symbol.for("react.provider"),gv=Symbol.for("react.context"),vv=Symbol.for("react.forward_ref"),xv=Symbol.for("react.suspense"),yv=Symbol.for("react.memo"),Sv=Symbol.for("react.lazy"),zd=Symbol.iterator;function Mv(t){return t===null||typeof t!="object"?null:(t=zd&&t[zd]||t["@@iterator"],typeof t=="function"?t:null)}var f_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h_=Object.assign,d_={};function Zs(t,e,n){this.props=t,this.context=e,this.refs=d_,this.updater=n||f_}Zs.prototype.isReactComponent={};Zs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function p_(){}p_.prototype=Zs.prototype;function wh(t,e,n){this.props=t,this.context=e,this.refs=d_,this.updater=n||f_}var Th=wh.prototype=new p_;Th.constructor=wh;h_(Th,Zs.prototype);Th.isPureReactComponent=!0;var Bd=Array.isArray,m_=Object.prototype.hasOwnProperty,Ah={current:null},__={key:!0,ref:!0,__self:!0,__source:!0};function g_(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)m_.call(e,i)&&!__.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:pa,type:t,key:s,ref:o,props:r,_owner:Ah.current}}function Ev(t,e){return{$$typeof:pa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rh(t){return typeof t=="object"&&t!==null&&t.$$typeof===pa}function wv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Hd=/\/+/g;function Lc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?wv(""+t.key):e.toString(36)}function ml(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case pa:case hv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Lc(o,0):i,Bd(r)?(n="",t!=null&&(n=t.replace(Hd,"$&/")+"/"),ml(r,e,n,"",function(c){return c})):r!=null&&(Rh(r)&&(r=Ev(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Hd,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Bd(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Lc(s,a);o+=ml(s,e,n,l,r)}else if(l=Mv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Lc(s,a++),o+=ml(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ta(t,e,n){if(t==null)return t;var i=[],r=0;return ml(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Tv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nn={current:null},_l={transition:null},Av={ReactCurrentDispatcher:nn,ReactCurrentBatchConfig:_l,ReactCurrentOwner:Ah};function v_(){throw Error("act(...) is not supported in production builds of React.")}Ze.Children={map:Ta,forEach:function(t,e,n){Ta(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ta(t,function(){e++}),e},toArray:function(t){return Ta(t,function(e){return e})||[]},only:function(t){if(!Rh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ze.Component=Zs;Ze.Fragment=dv;Ze.Profiler=mv;Ze.PureComponent=wh;Ze.StrictMode=pv;Ze.Suspense=xv;Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Av;Ze.act=v_;Ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=h_({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ah.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)m_.call(e,l)&&!__.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:pa,type:t.type,key:r,ref:s,props:i,_owner:o}};Ze.createContext=function(t){return t={$$typeof:gv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:_v,_context:t},t.Consumer=t};Ze.createElement=g_;Ze.createFactory=function(t){var e=g_.bind(null,t);return e.type=t,e};Ze.createRef=function(){return{current:null}};Ze.forwardRef=function(t){return{$$typeof:vv,render:t}};Ze.isValidElement=Rh;Ze.lazy=function(t){return{$$typeof:Sv,_payload:{_status:-1,_result:t},_init:Tv}};Ze.memo=function(t,e){return{$$typeof:yv,type:t,compare:e===void 0?null:e}};Ze.startTransition=function(t){var e=_l.transition;_l.transition={};try{t()}finally{_l.transition=e}};Ze.unstable_act=v_;Ze.useCallback=function(t,e){return nn.current.useCallback(t,e)};Ze.useContext=function(t){return nn.current.useContext(t)};Ze.useDebugValue=function(){};Ze.useDeferredValue=function(t){return nn.current.useDeferredValue(t)};Ze.useEffect=function(t,e){return nn.current.useEffect(t,e)};Ze.useId=function(){return nn.current.useId()};Ze.useImperativeHandle=function(t,e,n){return nn.current.useImperativeHandle(t,e,n)};Ze.useInsertionEffect=function(t,e){return nn.current.useInsertionEffect(t,e)};Ze.useLayoutEffect=function(t,e){return nn.current.useLayoutEffect(t,e)};Ze.useMemo=function(t,e){return nn.current.useMemo(t,e)};Ze.useReducer=function(t,e,n){return nn.current.useReducer(t,e,n)};Ze.useRef=function(t){return nn.current.useRef(t)};Ze.useState=function(t){return nn.current.useState(t)};Ze.useSyncExternalStore=function(t,e,n){return nn.current.useSyncExternalStore(t,e,n)};Ze.useTransition=function(){return nn.current.useTransition()};Ze.version="18.3.1";u_.exports=Ze;var ke=u_.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rv=ke,Cv=Symbol.for("react.element"),bv=Symbol.for("react.fragment"),Pv=Object.prototype.hasOwnProperty,Lv=Rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dv={key:!0,ref:!0,__self:!0,__source:!0};function x_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Pv.call(e,i)&&!Dv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Cv,type:t,key:s,ref:o,props:r,_owner:Lv.current}}fc.Fragment=bv;fc.jsx=x_;fc.jsxs=x_;c_.exports=fc;var fe=c_.exports,y_={exports:{}},En={},S_={exports:{}},M_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,K){var ie=U.length;U.push(K);e:for(;0<ie;){var ye=ie-1>>>1,Ne=U[ye];if(0<r(Ne,K))U[ye]=K,U[ie]=Ne,ie=ye;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var K=U[0],ie=U.pop();if(ie!==K){U[0]=ie;e:for(var ye=0,Ne=U.length,We=Ne>>>1;ye<We;){var $e=2*(ye+1)-1,Xe=U[$e],Z=$e+1,le=U[Z];if(0>r(Xe,ie))Z<Ne&&0>r(le,Xe)?(U[ye]=le,U[Z]=ie,ye=Z):(U[ye]=Xe,U[$e]=ie,ye=$e);else if(Z<Ne&&0>r(le,ie))U[ye]=le,U[Z]=ie,ye=Z;else break e}}return K}function r(U,K){var ie=U.sortIndex-K.sortIndex;return ie!==0?ie:U.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,d=null,h=3,p=!1,_=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(U){for(var K=n(c);K!==null;){if(K.callback===null)i(c);else if(K.startTime<=U)i(c),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(c)}}function y(U){if(g=!1,x(U),!_)if(n(l)!==null)_=!0,Y(C);else{var K=n(c);K!==null&&te(y,K.startTime-U)}}function C(U,K){_=!1,g&&(g=!1,u(b),b=-1),p=!0;var ie=h;try{for(x(K),d=n(l);d!==null&&(!(d.expirationTime>K)||U&&!P());){var ye=d.callback;if(typeof ye=="function"){d.callback=null,h=d.priorityLevel;var Ne=ye(d.expirationTime<=K);K=t.unstable_now(),typeof Ne=="function"?d.callback=Ne:d===n(l)&&i(l),x(K)}else i(l);d=n(l)}if(d!==null)var We=!0;else{var $e=n(c);$e!==null&&te(y,$e.startTime-K),We=!1}return We}finally{d=null,h=ie,p=!1}}var T=!1,R=null,b=-1,E=5,M=-1;function P(){return!(t.unstable_now()-M<E)}function O(){if(R!==null){var U=t.unstable_now();M=U;var K=!0;try{K=R(!0,U)}finally{K?W():(T=!1,R=null)}}else T=!1}var W;if(typeof v=="function")W=function(){v(O)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,z=q.port2;q.port1.onmessage=O,W=function(){z.postMessage(null)}}else W=function(){m(O,0)};function Y(U){R=U,T||(T=!0,W())}function te(U,K){b=m(function(){U(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,Y(C))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(h){case 1:case 2:case 3:var K=3;break;default:K=h}var ie=h;h=K;try{return U()}finally{h=ie}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,K){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ie=h;h=U;try{return K()}finally{h=ie}},t.unstable_scheduleCallback=function(U,K,ie){var ye=t.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?ye+ie:ye):ie=ye,U){case 1:var Ne=-1;break;case 2:Ne=250;break;case 5:Ne=1073741823;break;case 4:Ne=1e4;break;default:Ne=5e3}return Ne=ie+Ne,U={id:f++,callback:K,priorityLevel:U,startTime:ie,expirationTime:Ne,sortIndex:-1},ie>ye?(U.sortIndex=ie,e(c,U),n(l)===null&&U===n(c)&&(g?(u(b),b=-1):g=!0,te(y,ie-ye))):(U.sortIndex=Ne,e(l,U),_||p||(_=!0,Y(C))),U},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(U){var K=h;return function(){var ie=h;h=K;try{return U.apply(this,arguments)}finally{h=ie}}}})(M_);S_.exports=M_;var Nv=S_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iv=ke,Mn=Nv;function _e(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var E_=new Set,Vo={};function Xr(t,e){ks(t,e),ks(t+"Capture",e)}function ks(t,e){for(Vo[t]=e,t=0;t<e.length;t++)E_.add(e[t])}var Ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bu=Object.prototype.hasOwnProperty,Uv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vd={},Gd={};function Fv(t){return Bu.call(Gd,t)?!0:Bu.call(Vd,t)?!1:Uv.test(t)?Gd[t]=!0:(Vd[t]=!0,!1)}function Ov(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function kv(t,e,n,i){if(e===null||typeof e>"u"||Ov(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Gt[t]=new rn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Gt[e]=new rn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Gt[t]=new rn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Gt[t]=new rn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Gt[t]=new rn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Gt[t]=new rn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Gt[t]=new rn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Gt[t]=new rn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Gt[t]=new rn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ch=/[\-:]([a-z])/g;function bh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ch,bh);Gt[e]=new rn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ch,bh);Gt[e]=new rn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ch,bh);Gt[e]=new rn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Gt[t]=new rn(t,1,!1,t.toLowerCase(),null,!1,!1)});Gt.xlinkHref=new rn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Gt[t]=new rn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ph(t,e,n,i){var r=Gt.hasOwnProperty(e)?Gt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(kv(e,n,r,i)&&(n=null),i||r===null?Fv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Di=Iv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Aa=Symbol.for("react.element"),ps=Symbol.for("react.portal"),ms=Symbol.for("react.fragment"),Lh=Symbol.for("react.strict_mode"),Hu=Symbol.for("react.profiler"),w_=Symbol.for("react.provider"),T_=Symbol.for("react.context"),Dh=Symbol.for("react.forward_ref"),Vu=Symbol.for("react.suspense"),Gu=Symbol.for("react.suspense_list"),Nh=Symbol.for("react.memo"),Vi=Symbol.for("react.lazy"),A_=Symbol.for("react.offscreen"),Wd=Symbol.iterator;function ao(t){return t===null||typeof t!="object"?null:(t=Wd&&t[Wd]||t["@@iterator"],typeof t=="function"?t:null)}var wt=Object.assign,Dc;function Mo(t){if(Dc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Dc=e&&e[1]||""}return`
`+Dc+t}var Nc=!1;function Ic(t,e){if(!t||Nc)return"";Nc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Nc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Mo(t):""}function zv(t){switch(t.tag){case 5:return Mo(t.type);case 16:return Mo("Lazy");case 13:return Mo("Suspense");case 19:return Mo("SuspenseList");case 0:case 2:case 15:return t=Ic(t.type,!1),t;case 11:return t=Ic(t.type.render,!1),t;case 1:return t=Ic(t.type,!0),t;default:return""}}function Wu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ms:return"Fragment";case ps:return"Portal";case Hu:return"Profiler";case Lh:return"StrictMode";case Vu:return"Suspense";case Gu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case T_:return(t.displayName||"Context")+".Consumer";case w_:return(t._context.displayName||"Context")+".Provider";case Dh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Nh:return e=t.displayName||null,e!==null?e:Wu(t.type)||"Memo";case Vi:e=t._payload,t=t._init;try{return Wu(t(e))}catch{}}return null}function Bv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wu(e);case 8:return e===Lh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function R_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Hv(t){var e=R_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ra(t){t._valueTracker||(t._valueTracker=Hv(t))}function C_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=R_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Nl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xu(t,e){var n=e.checked;return wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Xd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function b_(t,e){e=e.checked,e!=null&&Ph(t,"checked",e,!1)}function ju(t,e){b_(t,e);var n=ar(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Yu(t,e.type,ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function jd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yu(t,e,n){(e!=="number"||Nl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Eo=Array.isArray;function bs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ar(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function qu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(_e(91));return wt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Yd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(_e(92));if(Eo(n)){if(1<n.length)throw Error(_e(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ar(n)}}function P_(t,e){var n=ar(e.value),i=ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function qd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function L_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $u(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?L_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ca,D_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ca=Ca||document.createElement("div"),Ca.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ca.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Go(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vv=["Webkit","ms","Moz","O"];Object.keys(Co).forEach(function(t){Vv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Co[e]=Co[t]})});function N_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Co.hasOwnProperty(t)&&Co[t]?(""+e).trim():e+"px"}function I_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=N_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Gv=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ku(t,e){if(e){if(Gv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(_e(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(_e(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(_e(61))}if(e.style!=null&&typeof e.style!="object")throw Error(_e(62))}}function Zu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ju=null;function Ih(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qu=null,Ps=null,Ls=null;function $d(t){if(t=ga(t)){if(typeof Qu!="function")throw Error(_e(280));var e=t.stateNode;e&&(e=_c(e),Qu(t.stateNode,t.type,e))}}function U_(t){Ps?Ls?Ls.push(t):Ls=[t]:Ps=t}function F_(){if(Ps){var t=Ps,e=Ls;if(Ls=Ps=null,$d(t),e)for(t=0;t<e.length;t++)$d(e[t])}}function O_(t,e){return t(e)}function k_(){}var Uc=!1;function z_(t,e,n){if(Uc)return t(e,n);Uc=!0;try{return O_(t,e,n)}finally{Uc=!1,(Ps!==null||Ls!==null)&&(k_(),F_())}}function Wo(t,e){var n=t.stateNode;if(n===null)return null;var i=_c(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(_e(231,e,typeof n));return n}var ef=!1;if(Ci)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){ef=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{ef=!1}function Wv(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var bo=!1,Il=null,Ul=!1,tf=null,Xv={onError:function(t){bo=!0,Il=t}};function jv(t,e,n,i,r,s,o,a,l){bo=!1,Il=null,Wv.apply(Xv,arguments)}function Yv(t,e,n,i,r,s,o,a,l){if(jv.apply(this,arguments),bo){if(bo){var c=Il;bo=!1,Il=null}else throw Error(_e(198));Ul||(Ul=!0,tf=c)}}function jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function B_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Kd(t){if(jr(t)!==t)throw Error(_e(188))}function qv(t){var e=t.alternate;if(!e){if(e=jr(t),e===null)throw Error(_e(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Kd(r),t;if(s===i)return Kd(r),e;s=s.sibling}throw Error(_e(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(_e(189))}}if(n.alternate!==i)throw Error(_e(190))}if(n.tag!==3)throw Error(_e(188));return n.stateNode.current===n?t:e}function H_(t){return t=qv(t),t!==null?V_(t):null}function V_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=V_(t);if(e!==null)return e;t=t.sibling}return null}var G_=Mn.unstable_scheduleCallback,Zd=Mn.unstable_cancelCallback,$v=Mn.unstable_shouldYield,Kv=Mn.unstable_requestPaint,bt=Mn.unstable_now,Zv=Mn.unstable_getCurrentPriorityLevel,Uh=Mn.unstable_ImmediatePriority,W_=Mn.unstable_UserBlockingPriority,Fl=Mn.unstable_NormalPriority,Jv=Mn.unstable_LowPriority,X_=Mn.unstable_IdlePriority,hc=null,li=null;function Qv(t){if(li&&typeof li.onCommitFiberRoot=="function")try{li.onCommitFiberRoot(hc,t,void 0,(t.current.flags&128)===128)}catch{}}var $n=Math.clz32?Math.clz32:nx,ex=Math.log,tx=Math.LN2;function nx(t){return t>>>=0,t===0?32:31-(ex(t)/tx|0)|0}var ba=64,Pa=4194304;function wo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ol(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=wo(a):(s&=o,s!==0&&(i=wo(s)))}else o=n&~r,o!==0?i=wo(o):s!==0&&(i=wo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-$n(e),r=1<<n,i|=t[n],e&=~r;return i}function ix(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-$n(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=ix(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function nf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function j_(){var t=ba;return ba<<=1,!(ba&4194240)&&(ba=64),t}function Fc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ma(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$n(e),t[e]=n}function sx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-$n(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Fh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-$n(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ot=0;function Y_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var q_,Oh,$_,K_,Z_,rf=!1,La=[],Zi=null,Ji=null,Qi=null,Xo=new Map,jo=new Map,Xi=[],ox="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jd(t,e){switch(t){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":Qi=null;break;case"pointerover":case"pointerout":Xo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(e.pointerId)}}function co(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ga(e),e!==null&&Oh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function ax(t,e,n,i,r){switch(e){case"focusin":return Zi=co(Zi,t,e,n,i,r),!0;case"dragenter":return Ji=co(Ji,t,e,n,i,r),!0;case"mouseover":return Qi=co(Qi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Xo.set(s,co(Xo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,jo.set(s,co(jo.get(s)||null,t,e,n,i,r)),!0}return!1}function J_(t){var e=Cr(t.target);if(e!==null){var n=jr(e);if(n!==null){if(e=n.tag,e===13){if(e=B_(n),e!==null){t.blockedOn=e,Z_(t.priority,function(){$_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=sf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ju=i,n.target.dispatchEvent(i),Ju=null}else return e=ga(n),e!==null&&Oh(e),t.blockedOn=n,!1;e.shift()}return!0}function Qd(t,e,n){gl(t)&&n.delete(e)}function lx(){rf=!1,Zi!==null&&gl(Zi)&&(Zi=null),Ji!==null&&gl(Ji)&&(Ji=null),Qi!==null&&gl(Qi)&&(Qi=null),Xo.forEach(Qd),jo.forEach(Qd)}function uo(t,e){t.blockedOn===e&&(t.blockedOn=null,rf||(rf=!0,Mn.unstable_scheduleCallback(Mn.unstable_NormalPriority,lx)))}function Yo(t){function e(r){return uo(r,t)}if(0<La.length){uo(La[0],t);for(var n=1;n<La.length;n++){var i=La[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Zi!==null&&uo(Zi,t),Ji!==null&&uo(Ji,t),Qi!==null&&uo(Qi,t),Xo.forEach(e),jo.forEach(e),n=0;n<Xi.length;n++)i=Xi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Xi.length&&(n=Xi[0],n.blockedOn===null);)J_(n),n.blockedOn===null&&Xi.shift()}var Ds=Di.ReactCurrentBatchConfig,kl=!0;function cx(t,e,n,i){var r=ot,s=Ds.transition;Ds.transition=null;try{ot=1,kh(t,e,n,i)}finally{ot=r,Ds.transition=s}}function ux(t,e,n,i){var r=ot,s=Ds.transition;Ds.transition=null;try{ot=4,kh(t,e,n,i)}finally{ot=r,Ds.transition=s}}function kh(t,e,n,i){if(kl){var r=sf(t,e,n,i);if(r===null)jc(t,e,i,zl,n),Jd(t,i);else if(ax(r,t,e,n,i))i.stopPropagation();else if(Jd(t,i),e&4&&-1<ox.indexOf(t)){for(;r!==null;){var s=ga(r);if(s!==null&&q_(s),s=sf(t,e,n,i),s===null&&jc(t,e,i,zl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else jc(t,e,i,null,n)}}var zl=null;function sf(t,e,n,i){if(zl=null,t=Ih(i),t=Cr(t),t!==null)if(e=jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=B_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return zl=t,null}function Q_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zv()){case Uh:return 1;case W_:return 4;case Fl:case Jv:return 16;case X_:return 536870912;default:return 16}default:return 16}}var qi=null,zh=null,vl=null;function eg(){if(vl)return vl;var t,e=zh,n=e.length,i,r="value"in qi?qi.value:qi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return vl=r.slice(t,1<i?1-i:void 0)}function xl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Da(){return!0}function ep(){return!1}function wn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Da:ep,this.isPropagationStopped=ep,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Da)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Da)},persist:function(){},isPersistent:Da}),e}var Js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bh=wn(Js),_a=wt({},Js,{view:0,detail:0}),fx=wn(_a),Oc,kc,fo,dc=wt({},_a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fo&&(fo&&t.type==="mousemove"?(Oc=t.screenX-fo.screenX,kc=t.screenY-fo.screenY):kc=Oc=0,fo=t),Oc)},movementY:function(t){return"movementY"in t?t.movementY:kc}}),tp=wn(dc),hx=wt({},dc,{dataTransfer:0}),dx=wn(hx),px=wt({},_a,{relatedTarget:0}),zc=wn(px),mx=wt({},Js,{animationName:0,elapsedTime:0,pseudoElement:0}),_x=wn(mx),gx=wt({},Js,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vx=wn(gx),xx=wt({},Js,{data:0}),np=wn(xx),yx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ex(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Mx[t])?!!e[t]:!1}function Hh(){return Ex}var wx=wt({},_a,{key:function(t){if(t.key){var e=yx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Sx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hh,charCode:function(t){return t.type==="keypress"?xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Tx=wn(wx),Ax=wt({},dc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ip=wn(Ax),Rx=wt({},_a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hh}),Cx=wn(Rx),bx=wt({},Js,{propertyName:0,elapsedTime:0,pseudoElement:0}),Px=wn(bx),Lx=wt({},dc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Dx=wn(Lx),Nx=[9,13,27,32],Vh=Ci&&"CompositionEvent"in window,Po=null;Ci&&"documentMode"in document&&(Po=document.documentMode);var Ix=Ci&&"TextEvent"in window&&!Po,tg=Ci&&(!Vh||Po&&8<Po&&11>=Po),rp=" ",sp=!1;function ng(t,e){switch(t){case"keyup":return Nx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ig(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _s=!1;function Ux(t,e){switch(t){case"compositionend":return ig(e);case"keypress":return e.which!==32?null:(sp=!0,rp);case"textInput":return t=e.data,t===rp&&sp?null:t;default:return null}}function Fx(t,e){if(_s)return t==="compositionend"||!Vh&&ng(t,e)?(t=eg(),vl=zh=qi=null,_s=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return tg&&e.locale!=="ko"?null:e.data;default:return null}}var Ox={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function op(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ox[t.type]:e==="textarea"}function rg(t,e,n,i){U_(i),e=Bl(e,"onChange"),0<e.length&&(n=new Bh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Lo=null,qo=null;function kx(t){mg(t,0)}function pc(t){var e=xs(t);if(C_(e))return t}function zx(t,e){if(t==="change")return e}var sg=!1;if(Ci){var Bc;if(Ci){var Hc="oninput"in document;if(!Hc){var ap=document.createElement("div");ap.setAttribute("oninput","return;"),Hc=typeof ap.oninput=="function"}Bc=Hc}else Bc=!1;sg=Bc&&(!document.documentMode||9<document.documentMode)}function lp(){Lo&&(Lo.detachEvent("onpropertychange",og),qo=Lo=null)}function og(t){if(t.propertyName==="value"&&pc(qo)){var e=[];rg(e,qo,t,Ih(t)),z_(kx,e)}}function Bx(t,e,n){t==="focusin"?(lp(),Lo=e,qo=n,Lo.attachEvent("onpropertychange",og)):t==="focusout"&&lp()}function Hx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pc(qo)}function Vx(t,e){if(t==="click")return pc(e)}function Gx(t,e){if(t==="input"||t==="change")return pc(e)}function Wx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jn=typeof Object.is=="function"?Object.is:Wx;function $o(t,e){if(Jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Bu.call(e,r)||!Jn(t[r],e[r]))return!1}return!0}function cp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function up(t,e){var n=cp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cp(n)}}function ag(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ag(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function lg(){for(var t=window,e=Nl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Nl(t.document)}return e}function Gh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Xx(t){var e=lg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ag(n.ownerDocument.documentElement,n)){if(i!==null&&Gh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=up(n,s);var o=up(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jx=Ci&&"documentMode"in document&&11>=document.documentMode,gs=null,of=null,Do=null,af=!1;function fp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;af||gs==null||gs!==Nl(i)||(i=gs,"selectionStart"in i&&Gh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Do&&$o(Do,i)||(Do=i,i=Bl(of,"onSelect"),0<i.length&&(e=new Bh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=gs)))}function Na(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vs={animationend:Na("Animation","AnimationEnd"),animationiteration:Na("Animation","AnimationIteration"),animationstart:Na("Animation","AnimationStart"),transitionend:Na("Transition","TransitionEnd")},Vc={},cg={};Ci&&(cg=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function mc(t){if(Vc[t])return Vc[t];if(!vs[t])return t;var e=vs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in cg)return Vc[t]=e[n];return t}var ug=mc("animationend"),fg=mc("animationiteration"),hg=mc("animationstart"),dg=mc("transitionend"),pg=new Map,hp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(t,e){pg.set(t,e),Xr(e,[t])}for(var Gc=0;Gc<hp.length;Gc++){var Wc=hp[Gc],Yx=Wc.toLowerCase(),qx=Wc[0].toUpperCase()+Wc.slice(1);fr(Yx,"on"+qx)}fr(ug,"onAnimationEnd");fr(fg,"onAnimationIteration");fr(hg,"onAnimationStart");fr("dblclick","onDoubleClick");fr("focusin","onFocus");fr("focusout","onBlur");fr(dg,"onTransitionEnd");ks("onMouseEnter",["mouseout","mouseover"]);ks("onMouseLeave",["mouseout","mouseover"]);ks("onPointerEnter",["pointerout","pointerover"]);ks("onPointerLeave",["pointerout","pointerover"]);Xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$x=new Set("cancel close invalid load scroll toggle".split(" ").concat(To));function dp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Yv(i,e,void 0,t),t.currentTarget=null}function mg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;dp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;dp(r,a,c),s=l}}}if(Ul)throw t=tf,Ul=!1,tf=null,t}function mt(t,e){var n=e[hf];n===void 0&&(n=e[hf]=new Set);var i=t+"__bubble";n.has(i)||(_g(e,t,2,!1),n.add(i))}function Xc(t,e,n){var i=0;e&&(i|=4),_g(n,t,i,e)}var Ia="_reactListening"+Math.random().toString(36).slice(2);function Ko(t){if(!t[Ia]){t[Ia]=!0,E_.forEach(function(n){n!=="selectionchange"&&($x.has(n)||Xc(n,!1,t),Xc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ia]||(e[Ia]=!0,Xc("selectionchange",!1,e))}}function _g(t,e,n,i){switch(Q_(e)){case 1:var r=cx;break;case 4:r=ux;break;default:r=kh}n=r.bind(null,e,n,t),r=void 0,!ef||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function jc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Cr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}z_(function(){var c=s,f=Ih(n),d=[];e:{var h=pg.get(t);if(h!==void 0){var p=Bh,_=t;switch(t){case"keypress":if(xl(n)===0)break e;case"keydown":case"keyup":p=Tx;break;case"focusin":_="focus",p=zc;break;case"focusout":_="blur",p=zc;break;case"beforeblur":case"afterblur":p=zc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=dx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Cx;break;case ug:case fg:case hg:p=_x;break;case dg:p=Px;break;case"scroll":p=fx;break;case"wheel":p=Dx;break;case"copy":case"cut":case"paste":p=vx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=ip}var g=(e&4)!==0,m=!g&&t==="scroll",u=g?h!==null?h+"Capture":null:h;g=[];for(var v=c,x;v!==null;){x=v;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,u!==null&&(y=Wo(v,u),y!=null&&g.push(Zo(v,y,x)))),m)break;v=v.return}0<g.length&&(h=new p(h,_,null,n,f),d.push({event:h,listeners:g}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Ju&&(_=n.relatedTarget||n.fromElement)&&(Cr(_)||_[bi]))break e;if((p||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?Cr(_):null,_!==null&&(m=jr(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(g=tp,y="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(g=ip,y="onPointerLeave",u="onPointerEnter",v="pointer"),m=p==null?h:xs(p),x=_==null?h:xs(_),h=new g(y,v+"leave",p,n,f),h.target=m,h.relatedTarget=x,y=null,Cr(f)===c&&(g=new g(u,v+"enter",_,n,f),g.target=x,g.relatedTarget=m,y=g),m=y,p&&_)t:{for(g=p,u=_,v=0,x=g;x;x=Jr(x))v++;for(x=0,y=u;y;y=Jr(y))x++;for(;0<v-x;)g=Jr(g),v--;for(;0<x-v;)u=Jr(u),x--;for(;v--;){if(g===u||u!==null&&g===u.alternate)break t;g=Jr(g),u=Jr(u)}g=null}else g=null;p!==null&&pp(d,h,p,g,!1),_!==null&&m!==null&&pp(d,m,_,g,!0)}}e:{if(h=c?xs(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=zx;else if(op(h))if(sg)C=Gx;else{C=Hx;var T=Bx}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=Vx);if(C&&(C=C(t,c))){rg(d,C,n,f);break e}T&&T(t,h,c),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&Yu(h,"number",h.value)}switch(T=c?xs(c):window,t){case"focusin":(op(T)||T.contentEditable==="true")&&(gs=T,of=c,Do=null);break;case"focusout":Do=of=gs=null;break;case"mousedown":af=!0;break;case"contextmenu":case"mouseup":case"dragend":af=!1,fp(d,n,f);break;case"selectionchange":if(jx)break;case"keydown":case"keyup":fp(d,n,f)}var R;if(Vh)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else _s?ng(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(tg&&n.locale!=="ko"&&(_s||b!=="onCompositionStart"?b==="onCompositionEnd"&&_s&&(R=eg()):(qi=f,zh="value"in qi?qi.value:qi.textContent,_s=!0)),T=Bl(c,b),0<T.length&&(b=new np(b,t,null,n,f),d.push({event:b,listeners:T}),R?b.data=R:(R=ig(n),R!==null&&(b.data=R)))),(R=Ix?Ux(t,n):Fx(t,n))&&(c=Bl(c,"onBeforeInput"),0<c.length&&(f=new np("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=R))}mg(d,e)})}function Zo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Wo(t,n),s!=null&&i.unshift(Zo(t,s,r)),s=Wo(t,e),s!=null&&i.push(Zo(t,s,r))),t=t.return}return i}function Jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function pp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Wo(n,s),l!=null&&o.unshift(Zo(n,l,a))):r||(l=Wo(n,s),l!=null&&o.push(Zo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Kx=/\r\n?/g,Zx=/\u0000|\uFFFD/g;function mp(t){return(typeof t=="string"?t:""+t).replace(Kx,`
`).replace(Zx,"")}function Ua(t,e,n){if(e=mp(e),mp(t)!==e&&n)throw Error(_e(425))}function Hl(){}var lf=null,cf=null;function uf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ff=typeof setTimeout=="function"?setTimeout:void 0,Jx=typeof clearTimeout=="function"?clearTimeout:void 0,_p=typeof Promise=="function"?Promise:void 0,Qx=typeof queueMicrotask=="function"?queueMicrotask:typeof _p<"u"?function(t){return _p.resolve(null).then(t).catch(ey)}:ff;function ey(t){setTimeout(function(){throw t})}function Yc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Yo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Yo(e)}function er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function gp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),ri="__reactFiber$"+Qs,Jo="__reactProps$"+Qs,bi="__reactContainer$"+Qs,hf="__reactEvents$"+Qs,ty="__reactListeners$"+Qs,ny="__reactHandles$"+Qs;function Cr(t){var e=t[ri];if(e)return e;for(var n=t.parentNode;n;){if(e=n[bi]||n[ri]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=gp(t);t!==null;){if(n=t[ri])return n;t=gp(t)}return e}t=n,n=t.parentNode}return null}function ga(t){return t=t[ri]||t[bi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(_e(33))}function _c(t){return t[Jo]||null}var df=[],ys=-1;function hr(t){return{current:t}}function _t(t){0>ys||(t.current=df[ys],df[ys]=null,ys--)}function ht(t,e){ys++,df[ys]=t.current,t.current=e}var lr={},$t=hr(lr),cn=hr(!1),Fr=lr;function zs(t,e){var n=t.type.contextTypes;if(!n)return lr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function un(t){return t=t.childContextTypes,t!=null}function Vl(){_t(cn),_t($t)}function vp(t,e,n){if($t.current!==lr)throw Error(_e(168));ht($t,e),ht(cn,n)}function gg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(_e(108,Bv(t)||"Unknown",r));return wt({},n,i)}function Gl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,Fr=$t.current,ht($t,t),ht(cn,cn.current),!0}function xp(t,e,n){var i=t.stateNode;if(!i)throw Error(_e(169));n?(t=gg(t,e,Fr),i.__reactInternalMemoizedMergedChildContext=t,_t(cn),_t($t),ht($t,t)):_t(cn),ht(cn,n)}var Mi=null,gc=!1,qc=!1;function vg(t){Mi===null?Mi=[t]:Mi.push(t)}function iy(t){gc=!0,vg(t)}function dr(){if(!qc&&Mi!==null){qc=!0;var t=0,e=ot;try{var n=Mi;for(ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Mi=null,gc=!1}catch(r){throw Mi!==null&&(Mi=Mi.slice(t+1)),G_(Uh,dr),r}finally{ot=e,qc=!1}}return null}var Ss=[],Ms=0,Wl=null,Xl=0,Pn=[],Ln=0,Or=null,Ei=1,wi="";function Er(t,e){Ss[Ms++]=Xl,Ss[Ms++]=Wl,Wl=t,Xl=e}function xg(t,e,n){Pn[Ln++]=Ei,Pn[Ln++]=wi,Pn[Ln++]=Or,Or=t;var i=Ei;t=wi;var r=32-$n(i)-1;i&=~(1<<r),n+=1;var s=32-$n(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ei=1<<32-$n(e)+r|n<<r|i,wi=s+t}else Ei=1<<s|n<<r|i,wi=t}function Wh(t){t.return!==null&&(Er(t,1),xg(t,1,0))}function Xh(t){for(;t===Wl;)Wl=Ss[--Ms],Ss[Ms]=null,Xl=Ss[--Ms],Ss[Ms]=null;for(;t===Or;)Or=Pn[--Ln],Pn[Ln]=null,wi=Pn[--Ln],Pn[Ln]=null,Ei=Pn[--Ln],Pn[Ln]=null}var Sn=null,yn=null,gt=!1,jn=null;function yg(t,e){var n=Nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function yp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Sn=t,yn=er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Sn=t,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Or!==null?{id:Ei,overflow:wi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Sn=t,yn=null,!0):!1;default:return!1}}function pf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function mf(t){if(gt){var e=yn;if(e){var n=e;if(!yp(t,e)){if(pf(t))throw Error(_e(418));e=er(n.nextSibling);var i=Sn;e&&yp(t,e)?yg(i,n):(t.flags=t.flags&-4097|2,gt=!1,Sn=t)}}else{if(pf(t))throw Error(_e(418));t.flags=t.flags&-4097|2,gt=!1,Sn=t}}}function Sp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Sn=t}function Fa(t){if(t!==Sn)return!1;if(!gt)return Sp(t),gt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!uf(t.type,t.memoizedProps)),e&&(e=yn)){if(pf(t))throw Sg(),Error(_e(418));for(;e;)yg(t,e),e=er(e.nextSibling)}if(Sp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(_e(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yn=er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yn=null}}else yn=Sn?er(t.stateNode.nextSibling):null;return!0}function Sg(){for(var t=yn;t;)t=er(t.nextSibling)}function Bs(){yn=Sn=null,gt=!1}function jh(t){jn===null?jn=[t]:jn.push(t)}var ry=Di.ReactCurrentBatchConfig;function ho(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_e(309));var i=n.stateNode}if(!i)throw Error(_e(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(_e(284));if(!n._owner)throw Error(_e(290,t))}return t}function Oa(t,e){throw t=Object.prototype.toString.call(e),Error(_e(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Mp(t){var e=t._init;return e(t._payload)}function Mg(t){function e(u,v){if(t){var x=u.deletions;x===null?(u.deletions=[v],u.flags|=16):x.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=rr(u,v),u.index=0,u.sibling=null,u}function s(u,v,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<v?(u.flags|=2,v):x):(u.flags|=2,v)):(u.flags|=1048576,v)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,v,x,y){return v===null||v.tag!==6?(v=tu(x,u.mode,y),v.return=u,v):(v=r(v,x),v.return=u,v)}function l(u,v,x,y){var C=x.type;return C===ms?f(u,v,x.props.children,y,x.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Vi&&Mp(C)===v.type)?(y=r(v,x.props),y.ref=ho(u,v,x),y.return=u,y):(y=Al(x.type,x.key,x.props,null,u.mode,y),y.ref=ho(u,v,x),y.return=u,y)}function c(u,v,x,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=nu(x,u.mode,y),v.return=u,v):(v=r(v,x.children||[]),v.return=u,v)}function f(u,v,x,y,C){return v===null||v.tag!==7?(v=Ir(x,u.mode,y,C),v.return=u,v):(v=r(v,x),v.return=u,v)}function d(u,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=tu(""+v,u.mode,x),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Aa:return x=Al(v.type,v.key,v.props,null,u.mode,x),x.ref=ho(u,null,v),x.return=u,x;case ps:return v=nu(v,u.mode,x),v.return=u,v;case Vi:var y=v._init;return d(u,y(v._payload),x)}if(Eo(v)||ao(v))return v=Ir(v,u.mode,x,null),v.return=u,v;Oa(u,v)}return null}function h(u,v,x,y){var C=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:a(u,v,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Aa:return x.key===C?l(u,v,x,y):null;case ps:return x.key===C?c(u,v,x,y):null;case Vi:return C=x._init,h(u,v,C(x._payload),y)}if(Eo(x)||ao(x))return C!==null?null:f(u,v,x,y,null);Oa(u,x)}return null}function p(u,v,x,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(x)||null,a(v,u,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Aa:return u=u.get(y.key===null?x:y.key)||null,l(v,u,y,C);case ps:return u=u.get(y.key===null?x:y.key)||null,c(v,u,y,C);case Vi:var T=y._init;return p(u,v,x,T(y._payload),C)}if(Eo(y)||ao(y))return u=u.get(x)||null,f(v,u,y,C,null);Oa(v,y)}return null}function _(u,v,x,y){for(var C=null,T=null,R=v,b=v=0,E=null;R!==null&&b<x.length;b++){R.index>b?(E=R,R=null):E=R.sibling;var M=h(u,R,x[b],y);if(M===null){R===null&&(R=E);break}t&&R&&M.alternate===null&&e(u,R),v=s(M,v,b),T===null?C=M:T.sibling=M,T=M,R=E}if(b===x.length)return n(u,R),gt&&Er(u,b),C;if(R===null){for(;b<x.length;b++)R=d(u,x[b],y),R!==null&&(v=s(R,v,b),T===null?C=R:T.sibling=R,T=R);return gt&&Er(u,b),C}for(R=i(u,R);b<x.length;b++)E=p(R,u,b,x[b],y),E!==null&&(t&&E.alternate!==null&&R.delete(E.key===null?b:E.key),v=s(E,v,b),T===null?C=E:T.sibling=E,T=E);return t&&R.forEach(function(P){return e(u,P)}),gt&&Er(u,b),C}function g(u,v,x,y){var C=ao(x);if(typeof C!="function")throw Error(_e(150));if(x=C.call(x),x==null)throw Error(_e(151));for(var T=C=null,R=v,b=v=0,E=null,M=x.next();R!==null&&!M.done;b++,M=x.next()){R.index>b?(E=R,R=null):E=R.sibling;var P=h(u,R,M.value,y);if(P===null){R===null&&(R=E);break}t&&R&&P.alternate===null&&e(u,R),v=s(P,v,b),T===null?C=P:T.sibling=P,T=P,R=E}if(M.done)return n(u,R),gt&&Er(u,b),C;if(R===null){for(;!M.done;b++,M=x.next())M=d(u,M.value,y),M!==null&&(v=s(M,v,b),T===null?C=M:T.sibling=M,T=M);return gt&&Er(u,b),C}for(R=i(u,R);!M.done;b++,M=x.next())M=p(R,u,b,M.value,y),M!==null&&(t&&M.alternate!==null&&R.delete(M.key===null?b:M.key),v=s(M,v,b),T===null?C=M:T.sibling=M,T=M);return t&&R.forEach(function(O){return e(u,O)}),gt&&Er(u,b),C}function m(u,v,x,y){if(typeof x=="object"&&x!==null&&x.type===ms&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Aa:e:{for(var C=x.key,T=v;T!==null;){if(T.key===C){if(C=x.type,C===ms){if(T.tag===7){n(u,T.sibling),v=r(T,x.props.children),v.return=u,u=v;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Vi&&Mp(C)===T.type){n(u,T.sibling),v=r(T,x.props),v.ref=ho(u,T,x),v.return=u,u=v;break e}n(u,T);break}else e(u,T);T=T.sibling}x.type===ms?(v=Ir(x.props.children,u.mode,y,x.key),v.return=u,u=v):(y=Al(x.type,x.key,x.props,null,u.mode,y),y.ref=ho(u,v,x),y.return=u,u=y)}return o(u);case ps:e:{for(T=x.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(u,v.sibling),v=r(v,x.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=nu(x,u.mode,y),v.return=u,u=v}return o(u);case Vi:return T=x._init,m(u,v,T(x._payload),y)}if(Eo(x))return _(u,v,x,y);if(ao(x))return g(u,v,x,y);Oa(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,x),v.return=u,u=v):(n(u,v),v=tu(x,u.mode,y),v.return=u,u=v),o(u)):n(u,v)}return m}var Hs=Mg(!0),Eg=Mg(!1),jl=hr(null),Yl=null,Es=null,Yh=null;function qh(){Yh=Es=Yl=null}function $h(t){var e=jl.current;_t(jl),t._currentValue=e}function _f(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ns(t,e){Yl=t,Yh=Es=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ln=!0),t.firstContext=null)}function Un(t){var e=t._currentValue;if(Yh!==t)if(t={context:t,memoizedValue:e,next:null},Es===null){if(Yl===null)throw Error(_e(308));Es=t,Yl.dependencies={lanes:0,firstContext:t}}else Es=Es.next=t;return e}var br=null;function Kh(t){br===null?br=[t]:br.push(t)}function wg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Kh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Pi(t,i)}function Pi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gi=!1;function Zh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ai(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function tr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Pi(t,n)}return r=i.interleaved,r===null?(e.next=e,Kh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Pi(t,n)}function yl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Fh(t,n)}}function Ep(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ql(t,e,n,i){var r=t.updateQueue;Gi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,g=a;switch(h=e,p=n,g.tag){case 1:if(_=g.payload,typeof _=="function"){d=_.call(p,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=g.payload,h=typeof _=="function"?_.call(p,d,h):_,h==null)break e;d=wt({},d,h);break e;case 2:Gi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=p,l=d):f=f.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);zr|=o,t.lanes=o,t.memoizedState=d}}function wp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(_e(191,r));r.call(i)}}}var va={},ci=hr(va),Qo=hr(va),ea=hr(va);function Pr(t){if(t===va)throw Error(_e(174));return t}function Jh(t,e){switch(ht(ea,e),ht(Qo,t),ht(ci,va),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:$u(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=$u(e,t)}_t(ci),ht(ci,e)}function Vs(){_t(ci),_t(Qo),_t(ea)}function Ag(t){Pr(ea.current);var e=Pr(ci.current),n=$u(e,t.type);e!==n&&(ht(Qo,t),ht(ci,n))}function Qh(t){Qo.current===t&&(_t(ci),_t(Qo))}var St=hr(0);function $l(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $c=[];function ed(){for(var t=0;t<$c.length;t++)$c[t]._workInProgressVersionPrimary=null;$c.length=0}var Sl=Di.ReactCurrentDispatcher,Kc=Di.ReactCurrentBatchConfig,kr=0,Et=null,Nt=null,kt=null,Kl=!1,No=!1,ta=0,sy=0;function Wt(){throw Error(_e(321))}function td(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jn(t[n],e[n]))return!1;return!0}function nd(t,e,n,i,r,s){if(kr=s,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Sl.current=t===null||t.memoizedState===null?cy:uy,t=n(i,r),No){s=0;do{if(No=!1,ta=0,25<=s)throw Error(_e(301));s+=1,kt=Nt=null,e.updateQueue=null,Sl.current=fy,t=n(i,r)}while(No)}if(Sl.current=Zl,e=Nt!==null&&Nt.next!==null,kr=0,kt=Nt=Et=null,Kl=!1,e)throw Error(_e(300));return t}function id(){var t=ta!==0;return ta=0,t}function ni(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?Et.memoizedState=kt=t:kt=kt.next=t,kt}function Fn(){if(Nt===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=Nt.next;var e=kt===null?Et.memoizedState:kt.next;if(e!==null)kt=e,Nt=t;else{if(t===null)throw Error(_e(310));Nt=t,t={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},kt===null?Et.memoizedState=kt=t:kt=kt.next=t}return kt}function na(t,e){return typeof e=="function"?e(t):e}function Zc(t){var e=Fn(),n=e.queue;if(n===null)throw Error(_e(311));n.lastRenderedReducer=t;var i=Nt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((kr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Et.lanes|=f,zr|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Jn(i,e.memoizedState)||(ln=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Et.lanes|=s,zr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Jc(t){var e=Fn(),n=e.queue;if(n===null)throw Error(_e(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Jn(s,e.memoizedState)||(ln=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Rg(){}function Cg(t,e){var n=Et,i=Fn(),r=e(),s=!Jn(i.memoizedState,r);if(s&&(i.memoizedState=r,ln=!0),i=i.queue,rd(Lg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||kt!==null&&kt.memoizedState.tag&1){if(n.flags|=2048,ia(9,Pg.bind(null,n,i,r,e),void 0,null),zt===null)throw Error(_e(349));kr&30||bg(n,e,r)}return r}function bg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Pg(t,e,n,i){e.value=n,e.getSnapshot=i,Dg(e)&&Ng(t)}function Lg(t,e,n){return n(function(){Dg(e)&&Ng(t)})}function Dg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jn(t,n)}catch{return!0}}function Ng(t){var e=Pi(t,1);e!==null&&Kn(e,t,1,-1)}function Tp(t){var e=ni();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:t},e.queue=t,t=t.dispatch=ly.bind(null,Et,t),[e.memoizedState,t]}function ia(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Ig(){return Fn().memoizedState}function Ml(t,e,n,i){var r=ni();Et.flags|=t,r.memoizedState=ia(1|e,n,void 0,i===void 0?null:i)}function vc(t,e,n,i){var r=Fn();i=i===void 0?null:i;var s=void 0;if(Nt!==null){var o=Nt.memoizedState;if(s=o.destroy,i!==null&&td(i,o.deps)){r.memoizedState=ia(e,n,s,i);return}}Et.flags|=t,r.memoizedState=ia(1|e,n,s,i)}function Ap(t,e){return Ml(8390656,8,t,e)}function rd(t,e){return vc(2048,8,t,e)}function Ug(t,e){return vc(4,2,t,e)}function Fg(t,e){return vc(4,4,t,e)}function Og(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function kg(t,e,n){return n=n!=null?n.concat([t]):null,vc(4,4,Og.bind(null,e,t),n)}function sd(){}function zg(t,e){var n=Fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&td(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Bg(t,e){var n=Fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&td(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Hg(t,e,n){return kr&21?(Jn(n,e)||(n=j_(),Et.lanes|=n,zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ln=!0),t.memoizedState=n)}function oy(t,e){var n=ot;ot=n!==0&&4>n?n:4,t(!0);var i=Kc.transition;Kc.transition={};try{t(!1),e()}finally{ot=n,Kc.transition=i}}function Vg(){return Fn().memoizedState}function ay(t,e,n){var i=ir(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Gg(t))Wg(e,n);else if(n=wg(t,e,n,i),n!==null){var r=en();Kn(n,t,i,r),Xg(n,e,i)}}function ly(t,e,n){var i=ir(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gg(t))Wg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Jn(a,o)){var l=e.interleaved;l===null?(r.next=r,Kh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=wg(t,e,r,i),n!==null&&(r=en(),Kn(n,t,i,r),Xg(n,e,i))}}function Gg(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function Wg(t,e){No=Kl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Xg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Fh(t,n)}}var Zl={readContext:Un,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},cy={readContext:Un,useCallback:function(t,e){return ni().memoizedState=[t,e===void 0?null:e],t},useContext:Un,useEffect:Ap,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ml(4194308,4,Og.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ml(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ml(4,2,t,e)},useMemo:function(t,e){var n=ni();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ni();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ay.bind(null,Et,t),[i.memoizedState,t]},useRef:function(t){var e=ni();return t={current:t},e.memoizedState=t},useState:Tp,useDebugValue:sd,useDeferredValue:function(t){return ni().memoizedState=t},useTransition:function(){var t=Tp(!1),e=t[0];return t=oy.bind(null,t[1]),ni().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Et,r=ni();if(gt){if(n===void 0)throw Error(_e(407));n=n()}else{if(n=e(),zt===null)throw Error(_e(349));kr&30||bg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Ap(Lg.bind(null,i,s,t),[t]),i.flags|=2048,ia(9,Pg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ni(),e=zt.identifierPrefix;if(gt){var n=wi,i=Ei;n=(i&~(1<<32-$n(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ta++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=sy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},uy={readContext:Un,useCallback:zg,useContext:Un,useEffect:rd,useImperativeHandle:kg,useInsertionEffect:Ug,useLayoutEffect:Fg,useMemo:Bg,useReducer:Zc,useRef:Ig,useState:function(){return Zc(na)},useDebugValue:sd,useDeferredValue:function(t){var e=Fn();return Hg(e,Nt.memoizedState,t)},useTransition:function(){var t=Zc(na)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:Rg,useSyncExternalStore:Cg,useId:Vg,unstable_isNewReconciler:!1},fy={readContext:Un,useCallback:zg,useContext:Un,useEffect:rd,useImperativeHandle:kg,useInsertionEffect:Ug,useLayoutEffect:Fg,useMemo:Bg,useReducer:Jc,useRef:Ig,useState:function(){return Jc(na)},useDebugValue:sd,useDeferredValue:function(t){var e=Fn();return Nt===null?e.memoizedState=t:Hg(e,Nt.memoizedState,t)},useTransition:function(){var t=Jc(na)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:Rg,useSyncExternalStore:Cg,useId:Vg,unstable_isNewReconciler:!1};function Gn(t,e){if(t&&t.defaultProps){e=wt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:wt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var xc={isMounted:function(t){return(t=t._reactInternals)?jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=en(),r=ir(t),s=Ai(i,r);s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,r),e!==null&&(Kn(e,t,r,i),yl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=en(),r=ir(t),s=Ai(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,r),e!==null&&(Kn(e,t,r,i),yl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=en(),i=ir(t),r=Ai(n,i);r.tag=2,e!=null&&(r.callback=e),e=tr(t,r,i),e!==null&&(Kn(e,t,i,n),yl(e,t,i))}};function Rp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!$o(n,i)||!$o(r,s):!0}function jg(t,e,n){var i=!1,r=lr,s=e.contextType;return typeof s=="object"&&s!==null?s=Un(s):(r=un(e)?Fr:$t.current,i=e.contextTypes,s=(i=i!=null)?zs(t,r):lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=xc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Cp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&xc.enqueueReplaceState(e,e.state,null)}function vf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Zh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Un(s):(s=un(e)?Fr:$t.current,r.context=zs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(gf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&xc.enqueueReplaceState(r,r.state,null),ql(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Gs(t,e){try{var n="",i=e;do n+=zv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Qc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var hy=typeof WeakMap=="function"?WeakMap:Map;function Yg(t,e,n){n=Ai(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ql||(Ql=!0,bf=i),xf(t,e)},n}function qg(t,e,n){n=Ai(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){xf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xf(t,e),typeof i!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function bp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new hy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Ay.bind(null,t,e,n),e.then(t,t))}function Pp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Lp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ai(-1,1),e.tag=2,tr(n,e,1))),n.lanes|=1),t)}var dy=Di.ReactCurrentOwner,ln=!1;function Qt(t,e,n,i){e.child=t===null?Eg(e,null,n,i):Hs(e,t.child,n,i)}function Dp(t,e,n,i,r){n=n.render;var s=e.ref;return Ns(e,r),i=nd(t,e,n,i,s,r),n=id(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(gt&&n&&Wh(e),e.flags|=1,Qt(t,e,i,r),e.child)}function Np(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!dd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,$g(t,e,s,i,r)):(t=Al(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:$o,n(o,i)&&t.ref===e.ref)return Li(t,e,r)}return e.flags|=1,t=rr(s,i),t.ref=e.ref,t.return=e,e.child=t}function $g(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if($o(s,i)&&t.ref===e.ref)if(ln=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(ln=!0);else return e.lanes=t.lanes,Li(t,e,r)}return yf(t,e,n,i,r)}function Kg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(Ts,vn),vn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ht(Ts,vn),vn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ht(Ts,vn),vn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ht(Ts,vn),vn|=i;return Qt(t,e,r,n),e.child}function Zg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function yf(t,e,n,i,r){var s=un(n)?Fr:$t.current;return s=zs(e,s),Ns(e,r),n=nd(t,e,n,i,s,r),i=id(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(gt&&i&&Wh(e),e.flags|=1,Qt(t,e,n,r),e.child)}function Ip(t,e,n,i,r){if(un(n)){var s=!0;Gl(e)}else s=!1;if(Ns(e,r),e.stateNode===null)El(t,e),jg(e,n,i),vf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Un(c):(c=un(n)?Fr:$t.current,c=zs(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Cp(e,o,i,c),Gi=!1;var h=e.memoizedState;o.state=h,ql(e,i,o,r),l=e.memoizedState,a!==i||h!==l||cn.current||Gi?(typeof f=="function"&&(gf(e,n,f,i),l=e.memoizedState),(a=Gi||Rp(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Tg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Gn(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Un(l):(l=un(n)?Fr:$t.current,l=zs(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Cp(e,o,i,l),Gi=!1,h=e.memoizedState,o.state=h,ql(e,i,o,r);var _=e.memoizedState;a!==d||h!==_||cn.current||Gi?(typeof p=="function"&&(gf(e,n,p,i),_=e.memoizedState),(c=Gi||Rp(e,n,c,i,h,_,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Sf(t,e,n,i,s,r)}function Sf(t,e,n,i,r,s){Zg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&xp(e,n,!1),Li(t,e,s);i=e.stateNode,dy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Hs(e,t.child,null,s),e.child=Hs(e,null,a,s)):Qt(t,e,a,s),e.memoizedState=i.state,r&&xp(e,n,!0),e.child}function Jg(t){var e=t.stateNode;e.pendingContext?vp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&vp(t,e.context,!1),Jh(t,e.containerInfo)}function Up(t,e,n,i,r){return Bs(),jh(r),e.flags|=256,Qt(t,e,n,i),e.child}var Mf={dehydrated:null,treeContext:null,retryLane:0};function Ef(t){return{baseLanes:t,cachePool:null,transitions:null}}function Qg(t,e,n){var i=e.pendingProps,r=St.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ht(St,r&1),t===null)return mf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Mc(o,i,0,null),t=Ir(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ef(n),e.memoizedState=Mf,t):od(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return py(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=rr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=rr(a,s):(s=Ir(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Ef(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Mf,i}return s=t.child,t=s.sibling,i=rr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function od(t,e){return e=Mc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ka(t,e,n,i){return i!==null&&jh(i),Hs(e,t.child,null,n),t=od(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function py(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Qc(Error(_e(422))),ka(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Mc({mode:"visible",children:i.children},r,0,null),s=Ir(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Hs(e,t.child,null,o),e.child.memoizedState=Ef(o),e.memoizedState=Mf,s);if(!(e.mode&1))return ka(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(_e(419)),i=Qc(s,i,void 0),ka(t,e,o,i)}if(a=(o&t.childLanes)!==0,ln||a){if(i=zt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Pi(t,r),Kn(i,t,r,-1))}return hd(),i=Qc(Error(_e(421))),ka(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ry.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,yn=er(r.nextSibling),Sn=e,gt=!0,jn=null,t!==null&&(Pn[Ln++]=Ei,Pn[Ln++]=wi,Pn[Ln++]=Or,Ei=t.id,wi=t.overflow,Or=e),e=od(e,i.children),e.flags|=4096,e)}function Fp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),_f(t.return,e,n)}function eu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function e0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Qt(t,e,i.children,n),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fp(t,n,e);else if(t.tag===19)Fp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ht(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&$l(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),eu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&$l(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}eu(e,!0,n,null,s);break;case"together":eu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function El(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Li(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(_e(153));if(e.child!==null){for(t=e.child,n=rr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=rr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function my(t,e,n){switch(e.tag){case 3:Jg(e),Bs();break;case 5:Ag(e);break;case 1:un(e.type)&&Gl(e);break;case 4:Jh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(jl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(St,St.current&1),e.flags|=128,null):n&e.child.childLanes?Qg(t,e,n):(ht(St,St.current&1),t=Li(t,e,n),t!==null?t.sibling:null);ht(St,St.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return e0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,Kg(t,e,n)}return Li(t,e,n)}var t0,wf,n0,i0;t0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wf=function(){};n0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Pr(ci.current);var s=null;switch(n){case"input":r=Xu(t,r),i=Xu(t,i),s=[];break;case"select":r=wt({},r,{value:void 0}),i=wt({},i,{value:void 0}),s=[];break;case"textarea":r=qu(t,r),i=qu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Hl)}Ku(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Vo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Vo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&mt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};i0=function(t,e,n,i){n!==i&&(e.flags|=4)};function po(t,e){if(!gt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function _y(t,e,n){var i=e.pendingProps;switch(Xh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return un(e.type)&&Vl(),Xt(e),null;case 3:return i=e.stateNode,Vs(),_t(cn),_t($t),ed(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Fa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jn!==null&&(Df(jn),jn=null))),wf(t,e),Xt(e),null;case 5:Qh(e);var r=Pr(ea.current);if(n=e.type,t!==null&&e.stateNode!=null)n0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(_e(166));return Xt(e),null}if(t=Pr(ci.current),Fa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ri]=e,i[Jo]=s,t=(e.mode&1)!==0,n){case"dialog":mt("cancel",i),mt("close",i);break;case"iframe":case"object":case"embed":mt("load",i);break;case"video":case"audio":for(r=0;r<To.length;r++)mt(To[r],i);break;case"source":mt("error",i);break;case"img":case"image":case"link":mt("error",i),mt("load",i);break;case"details":mt("toggle",i);break;case"input":Xd(i,s),mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},mt("invalid",i);break;case"textarea":Yd(i,s),mt("invalid",i)}Ku(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ua(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ua(i.textContent,a,t),r=["children",""+a]):Vo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&mt("scroll",i)}switch(n){case"input":Ra(i),jd(i,s,!0);break;case"textarea":Ra(i),qd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Hl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=L_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ri]=e,t[Jo]=i,t0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Zu(n,i),n){case"dialog":mt("cancel",t),mt("close",t),r=i;break;case"iframe":case"object":case"embed":mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<To.length;r++)mt(To[r],t);r=i;break;case"source":mt("error",t),r=i;break;case"img":case"image":case"link":mt("error",t),mt("load",t),r=i;break;case"details":mt("toggle",t),r=i;break;case"input":Xd(t,i),r=Xu(t,i),mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=wt({},i,{value:void 0}),mt("invalid",t);break;case"textarea":Yd(t,i),r=qu(t,i),mt("invalid",t);break;default:r=i}Ku(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?I_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&D_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Go(t,l):typeof l=="number"&&Go(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Vo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&mt("scroll",t):l!=null&&Ph(t,s,l,o))}switch(n){case"input":Ra(t),jd(t,i,!1);break;case"textarea":Ra(t),qd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ar(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?bs(t,!!i.multiple,s,!1):i.defaultValue!=null&&bs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Hl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xt(e),null;case 6:if(t&&e.stateNode!=null)i0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(_e(166));if(n=Pr(ea.current),Pr(ci.current),Fa(e)){if(i=e.stateNode,n=e.memoizedProps,i[ri]=e,(s=i.nodeValue!==n)&&(t=Sn,t!==null))switch(t.tag){case 3:Ua(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ua(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ri]=e,e.stateNode=i}return Xt(e),null;case 13:if(_t(St),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(gt&&yn!==null&&e.mode&1&&!(e.flags&128))Sg(),Bs(),e.flags|=98560,s=!1;else if(s=Fa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(_e(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(_e(317));s[ri]=e}else Bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xt(e),s=!1}else jn!==null&&(Df(jn),jn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||St.current&1?It===0&&(It=3):hd())),e.updateQueue!==null&&(e.flags|=4),Xt(e),null);case 4:return Vs(),wf(t,e),t===null&&Ko(e.stateNode.containerInfo),Xt(e),null;case 10:return $h(e.type._context),Xt(e),null;case 17:return un(e.type)&&Vl(),Xt(e),null;case 19:if(_t(St),s=e.memoizedState,s===null)return Xt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)po(s,!1);else{if(It!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=$l(t),o!==null){for(e.flags|=128,po(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ht(St,St.current&1|2),e.child}t=t.sibling}s.tail!==null&&bt()>Ws&&(e.flags|=128,i=!0,po(s,!1),e.lanes=4194304)}else{if(!i)if(t=$l(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),po(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!gt)return Xt(e),null}else 2*bt()-s.renderingStartTime>Ws&&n!==1073741824&&(e.flags|=128,i=!0,po(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=bt(),e.sibling=null,n=St.current,ht(St,i?n&1|2:n&1),e):(Xt(e),null);case 22:case 23:return fd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?vn&1073741824&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),null;case 24:return null;case 25:return null}throw Error(_e(156,e.tag))}function gy(t,e){switch(Xh(e),e.tag){case 1:return un(e.type)&&Vl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Vs(),_t(cn),_t($t),ed(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Qh(e),null;case 13:if(_t(St),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(_e(340));Bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _t(St),null;case 4:return Vs(),null;case 10:return $h(e.type._context),null;case 22:case 23:return fd(),null;case 24:return null;default:return null}}var za=!1,qt=!1,vy=typeof WeakSet=="function"?WeakSet:Set,Le=null;function ws(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Rt(t,e,i)}else n.current=null}function Tf(t,e,n){try{n()}catch(i){Rt(t,e,i)}}var Op=!1;function xy(t,e){if(lf=kl,t=lg(),Gh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++f===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(cf={focusedElem:t,selectionRange:n},kl=!1,Le=e;Le!==null;)if(e=Le,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Le=t;else for(;Le!==null;){e=Le;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var g=_.memoizedProps,m=_.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?g:Gn(e.type,g),m);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_e(163))}}catch(y){Rt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Le=t;break}Le=e.return}return _=Op,Op=!1,_}function Io(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Tf(e,n,s)}r=r.next}while(r!==i)}}function yc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Af(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function r0(t){var e=t.alternate;e!==null&&(t.alternate=null,r0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ri],delete e[Jo],delete e[hf],delete e[ty],delete e[ny])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function s0(t){return t.tag===5||t.tag===3||t.tag===4}function kp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||s0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Hl));else if(i!==4&&(t=t.child,t!==null))for(Rf(t,e,n),t=t.sibling;t!==null;)Rf(t,e,n),t=t.sibling}function Cf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Cf(t,e,n),t=t.sibling;t!==null;)Cf(t,e,n),t=t.sibling}var Bt=null,Xn=!1;function Ui(t,e,n){for(n=n.child;n!==null;)o0(t,e,n),n=n.sibling}function o0(t,e,n){if(li&&typeof li.onCommitFiberUnmount=="function")try{li.onCommitFiberUnmount(hc,n)}catch{}switch(n.tag){case 5:qt||ws(n,e);case 6:var i=Bt,r=Xn;Bt=null,Ui(t,e,n),Bt=i,Xn=r,Bt!==null&&(Xn?(t=Bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Bt.removeChild(n.stateNode));break;case 18:Bt!==null&&(Xn?(t=Bt,n=n.stateNode,t.nodeType===8?Yc(t.parentNode,n):t.nodeType===1&&Yc(t,n),Yo(t)):Yc(Bt,n.stateNode));break;case 4:i=Bt,r=Xn,Bt=n.stateNode.containerInfo,Xn=!0,Ui(t,e,n),Bt=i,Xn=r;break;case 0:case 11:case 14:case 15:if(!qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Tf(n,e,o),r=r.next}while(r!==i)}Ui(t,e,n);break;case 1:if(!qt&&(ws(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Rt(n,e,a)}Ui(t,e,n);break;case 21:Ui(t,e,n);break;case 22:n.mode&1?(qt=(i=qt)||n.memoizedState!==null,Ui(t,e,n),qt=i):Ui(t,e,n);break;default:Ui(t,e,n)}}function zp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new vy),e.forEach(function(i){var r=Cy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Bt=a.stateNode,Xn=!1;break e;case 3:Bt=a.stateNode.containerInfo,Xn=!0;break e;case 4:Bt=a.stateNode.containerInfo,Xn=!0;break e}a=a.return}if(Bt===null)throw Error(_e(160));o0(s,o,r),Bt=null,Xn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Rt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)a0(e,t),e=e.sibling}function a0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zn(e,t),ei(t),i&4){try{Io(3,t,t.return),yc(3,t)}catch(g){Rt(t,t.return,g)}try{Io(5,t,t.return)}catch(g){Rt(t,t.return,g)}}break;case 1:zn(e,t),ei(t),i&512&&n!==null&&ws(n,n.return);break;case 5:if(zn(e,t),ei(t),i&512&&n!==null&&ws(n,n.return),t.flags&32){var r=t.stateNode;try{Go(r,"")}catch(g){Rt(t,t.return,g)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&b_(r,s),Zu(a,o);var c=Zu(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?I_(r,d):f==="dangerouslySetInnerHTML"?D_(r,d):f==="children"?Go(r,d):Ph(r,f,d,c)}switch(a){case"input":ju(r,s);break;case"textarea":P_(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?bs(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?bs(r,!!s.multiple,s.defaultValue,!0):bs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Jo]=s}catch(g){Rt(t,t.return,g)}}break;case 6:if(zn(e,t),ei(t),i&4){if(t.stateNode===null)throw Error(_e(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(g){Rt(t,t.return,g)}}break;case 3:if(zn(e,t),ei(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Yo(e.containerInfo)}catch(g){Rt(t,t.return,g)}break;case 4:zn(e,t),ei(t);break;case 13:zn(e,t),ei(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(cd=bt())),i&4&&zp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(qt=(c=qt)||f,zn(e,t),qt=c):zn(e,t),ei(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Le=t,f=t.child;f!==null;){for(d=Le=f;Le!==null;){switch(h=Le,p=h.child,h.tag){case 0:case 11:case 14:case 15:Io(4,h,h.return);break;case 1:ws(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(g){Rt(i,n,g)}}break;case 5:ws(h,h.return);break;case 22:if(h.memoizedState!==null){Hp(d);continue}}p!==null?(p.return=h,Le=p):Hp(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=N_("display",o))}catch(g){Rt(t,t.return,g)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(g){Rt(t,t.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:zn(e,t),ei(t),i&4&&zp(t);break;case 21:break;default:zn(e,t),ei(t)}}function ei(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(s0(n)){var i=n;break e}n=n.return}throw Error(_e(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Go(r,""),i.flags&=-33);var s=kp(t);Cf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=kp(t);Rf(t,a,o);break;default:throw Error(_e(161))}}catch(l){Rt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function yy(t,e,n){Le=t,l0(t)}function l0(t,e,n){for(var i=(t.mode&1)!==0;Le!==null;){var r=Le,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||za;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||qt;a=za;var c=qt;if(za=o,(qt=l)&&!c)for(Le=r;Le!==null;)o=Le,l=o.child,o.tag===22&&o.memoizedState!==null?Vp(r):l!==null?(l.return=o,Le=l):Vp(r);for(;s!==null;)Le=s,l0(s),s=s.sibling;Le=r,za=a,qt=c}Bp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Le=s):Bp(t)}}function Bp(t){for(;Le!==null;){var e=Le;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qt||yc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Gn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&wp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}wp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Yo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_e(163))}qt||e.flags&512&&Af(e)}catch(h){Rt(e,e.return,h)}}if(e===t){Le=null;break}if(n=e.sibling,n!==null){n.return=e.return,Le=n;break}Le=e.return}}function Hp(t){for(;Le!==null;){var e=Le;if(e===t){Le=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Le=n;break}Le=e.return}}function Vp(t){for(;Le!==null;){var e=Le;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{yc(4,e)}catch(l){Rt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Rt(e,r,l)}}var s=e.return;try{Af(e)}catch(l){Rt(e,s,l)}break;case 5:var o=e.return;try{Af(e)}catch(l){Rt(e,o,l)}}}catch(l){Rt(e,e.return,l)}if(e===t){Le=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Le=a;break}Le=e.return}}var Sy=Math.ceil,Jl=Di.ReactCurrentDispatcher,ad=Di.ReactCurrentOwner,In=Di.ReactCurrentBatchConfig,tt=0,zt=null,Lt=null,Ht=0,vn=0,Ts=hr(0),It=0,ra=null,zr=0,Sc=0,ld=0,Uo=null,an=null,cd=0,Ws=1/0,Si=null,Ql=!1,bf=null,nr=null,Ba=!1,$i=null,ec=0,Fo=0,Pf=null,wl=-1,Tl=0;function en(){return tt&6?bt():wl!==-1?wl:wl=bt()}function ir(t){return t.mode&1?tt&2&&Ht!==0?Ht&-Ht:ry.transition!==null?(Tl===0&&(Tl=j_()),Tl):(t=ot,t!==0||(t=window.event,t=t===void 0?16:Q_(t.type)),t):1}function Kn(t,e,n,i){if(50<Fo)throw Fo=0,Pf=null,Error(_e(185));ma(t,n,i),(!(tt&2)||t!==zt)&&(t===zt&&(!(tt&2)&&(Sc|=n),It===4&&ji(t,Ht)),fn(t,i),n===1&&tt===0&&!(e.mode&1)&&(Ws=bt()+500,gc&&dr()))}function fn(t,e){var n=t.callbackNode;rx(t,e);var i=Ol(t,t===zt?Ht:0);if(i===0)n!==null&&Zd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Zd(n),e===1)t.tag===0?iy(Gp.bind(null,t)):vg(Gp.bind(null,t)),Qx(function(){!(tt&6)&&dr()}),n=null;else{switch(Y_(i)){case 1:n=Uh;break;case 4:n=W_;break;case 16:n=Fl;break;case 536870912:n=X_;break;default:n=Fl}n=_0(n,c0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function c0(t,e){if(wl=-1,Tl=0,tt&6)throw Error(_e(327));var n=t.callbackNode;if(Is()&&t.callbackNode!==n)return null;var i=Ol(t,t===zt?Ht:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=tc(t,i);else{e=i;var r=tt;tt|=2;var s=f0();(zt!==t||Ht!==e)&&(Si=null,Ws=bt()+500,Nr(t,e));do try{wy();break}catch(a){u0(t,a)}while(!0);qh(),Jl.current=s,tt=r,Lt!==null?e=0:(zt=null,Ht=0,e=It)}if(e!==0){if(e===2&&(r=nf(t),r!==0&&(i=r,e=Lf(t,r))),e===1)throw n=ra,Nr(t,0),ji(t,i),fn(t,bt()),n;if(e===6)ji(t,i);else{if(r=t.current.alternate,!(i&30)&&!My(r)&&(e=tc(t,i),e===2&&(s=nf(t),s!==0&&(i=s,e=Lf(t,s))),e===1))throw n=ra,Nr(t,0),ji(t,i),fn(t,bt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(_e(345));case 2:wr(t,an,Si);break;case 3:if(ji(t,i),(i&130023424)===i&&(e=cd+500-bt(),10<e)){if(Ol(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){en(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ff(wr.bind(null,t,an,Si),e);break}wr(t,an,Si);break;case 4:if(ji(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-$n(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=bt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Sy(i/1960))-i,10<i){t.timeoutHandle=ff(wr.bind(null,t,an,Si),i);break}wr(t,an,Si);break;case 5:wr(t,an,Si);break;default:throw Error(_e(329))}}}return fn(t,bt()),t.callbackNode===n?c0.bind(null,t):null}function Lf(t,e){var n=Uo;return t.current.memoizedState.isDehydrated&&(Nr(t,e).flags|=256),t=tc(t,e),t!==2&&(e=an,an=n,e!==null&&Df(e)),t}function Df(t){an===null?an=t:an.push.apply(an,t)}function My(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Jn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ji(t,e){for(e&=~ld,e&=~Sc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$n(e),i=1<<n;t[n]=-1,e&=~i}}function Gp(t){if(tt&6)throw Error(_e(327));Is();var e=Ol(t,0);if(!(e&1))return fn(t,bt()),null;var n=tc(t,e);if(t.tag!==0&&n===2){var i=nf(t);i!==0&&(e=i,n=Lf(t,i))}if(n===1)throw n=ra,Nr(t,0),ji(t,e),fn(t,bt()),n;if(n===6)throw Error(_e(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wr(t,an,Si),fn(t,bt()),null}function ud(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(Ws=bt()+500,gc&&dr())}}function Br(t){$i!==null&&$i.tag===0&&!(tt&6)&&Is();var e=tt;tt|=1;var n=In.transition,i=ot;try{if(In.transition=null,ot=1,t)return t()}finally{ot=i,In.transition=n,tt=e,!(tt&6)&&dr()}}function fd(){vn=Ts.current,_t(Ts)}function Nr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Jx(n)),Lt!==null)for(n=Lt.return;n!==null;){var i=n;switch(Xh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Vl();break;case 3:Vs(),_t(cn),_t($t),ed();break;case 5:Qh(i);break;case 4:Vs();break;case 13:_t(St);break;case 19:_t(St);break;case 10:$h(i.type._context);break;case 22:case 23:fd()}n=n.return}if(zt=t,Lt=t=rr(t.current,null),Ht=vn=e,It=0,ra=null,ld=Sc=zr=0,an=Uo=null,br!==null){for(e=0;e<br.length;e++)if(n=br[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}br=null}return t}function u0(t,e){do{var n=Lt;try{if(qh(),Sl.current=Zl,Kl){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Kl=!1}if(kr=0,kt=Nt=Et=null,No=!1,ta=0,ad.current=null,n===null||n.return===null){It=1,ra=e,Lt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=Pp(o);if(p!==null){p.flags&=-257,Lp(p,o,a,s,e),p.mode&1&&bp(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var g=new Set;g.add(l),e.updateQueue=g}else _.add(l);break e}else{if(!(e&1)){bp(s,c,e),hd();break e}l=Error(_e(426))}}else if(gt&&a.mode&1){var m=Pp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Lp(m,o,a,s,e),jh(Gs(l,a));break e}}s=l=Gs(l,a),It!==4&&(It=2),Uo===null?Uo=[s]:Uo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Yg(s,l,e);Ep(s,u);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(nr===null||!nr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=qg(s,a,e);Ep(s,y);break e}}s=s.return}while(s!==null)}d0(n)}catch(C){e=C,Lt===n&&n!==null&&(Lt=n=n.return);continue}break}while(!0)}function f0(){var t=Jl.current;return Jl.current=Zl,t===null?Zl:t}function hd(){(It===0||It===3||It===2)&&(It=4),zt===null||!(zr&268435455)&&!(Sc&268435455)||ji(zt,Ht)}function tc(t,e){var n=tt;tt|=2;var i=f0();(zt!==t||Ht!==e)&&(Si=null,Nr(t,e));do try{Ey();break}catch(r){u0(t,r)}while(!0);if(qh(),tt=n,Jl.current=i,Lt!==null)throw Error(_e(261));return zt=null,Ht=0,It}function Ey(){for(;Lt!==null;)h0(Lt)}function wy(){for(;Lt!==null&&!$v();)h0(Lt)}function h0(t){var e=m0(t.alternate,t,vn);t.memoizedProps=t.pendingProps,e===null?d0(t):Lt=e,ad.current=null}function d0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=gy(n,e),n!==null){n.flags&=32767,Lt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{It=6,Lt=null;return}}else if(n=_y(n,e,vn),n!==null){Lt=n;return}if(e=e.sibling,e!==null){Lt=e;return}Lt=e=t}while(e!==null);It===0&&(It=5)}function wr(t,e,n){var i=ot,r=In.transition;try{In.transition=null,ot=1,Ty(t,e,n,i)}finally{In.transition=r,ot=i}return null}function Ty(t,e,n,i){do Is();while($i!==null);if(tt&6)throw Error(_e(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(_e(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(sx(t,s),t===zt&&(Lt=zt=null,Ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ba||(Ba=!0,_0(Fl,function(){return Is(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=In.transition,In.transition=null;var o=ot;ot=1;var a=tt;tt|=4,ad.current=null,xy(t,n),a0(n,t),Xx(cf),kl=!!lf,cf=lf=null,t.current=n,yy(n),Kv(),tt=a,ot=o,In.transition=s}else t.current=n;if(Ba&&(Ba=!1,$i=t,ec=r),s=t.pendingLanes,s===0&&(nr=null),Qv(n.stateNode),fn(t,bt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ql)throw Ql=!1,t=bf,bf=null,t;return ec&1&&t.tag!==0&&Is(),s=t.pendingLanes,s&1?t===Pf?Fo++:(Fo=0,Pf=t):Fo=0,dr(),null}function Is(){if($i!==null){var t=Y_(ec),e=In.transition,n=ot;try{if(In.transition=null,ot=16>t?16:t,$i===null)var i=!1;else{if(t=$i,$i=null,ec=0,tt&6)throw Error(_e(331));var r=tt;for(tt|=4,Le=t.current;Le!==null;){var s=Le,o=s.child;if(Le.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Le=c;Le!==null;){var f=Le;switch(f.tag){case 0:case 11:case 15:Io(8,f,s)}var d=f.child;if(d!==null)d.return=f,Le=d;else for(;Le!==null;){f=Le;var h=f.sibling,p=f.return;if(r0(f),f===c){Le=null;break}if(h!==null){h.return=p,Le=h;break}Le=p}}}var _=s.alternate;if(_!==null){var g=_.child;if(g!==null){_.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}Le=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Le=o;else e:for(;Le!==null;){if(s=Le,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Io(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Le=u;break e}Le=s.return}}var v=t.current;for(Le=v;Le!==null;){o=Le;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Le=x;else e:for(o=v;Le!==null;){if(a=Le,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:yc(9,a)}}catch(C){Rt(a,a.return,C)}if(a===o){Le=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Le=y;break e}Le=a.return}}if(tt=r,dr(),li&&typeof li.onPostCommitFiberRoot=="function")try{li.onPostCommitFiberRoot(hc,t)}catch{}i=!0}return i}finally{ot=n,In.transition=e}}return!1}function Wp(t,e,n){e=Gs(n,e),e=Yg(t,e,1),t=tr(t,e,1),e=en(),t!==null&&(ma(t,1,e),fn(t,e))}function Rt(t,e,n){if(t.tag===3)Wp(t,t,n);else for(;e!==null;){if(e.tag===3){Wp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(nr===null||!nr.has(i))){t=Gs(n,t),t=qg(e,t,1),e=tr(e,t,1),t=en(),e!==null&&(ma(e,1,t),fn(e,t));break}}e=e.return}}function Ay(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=en(),t.pingedLanes|=t.suspendedLanes&n,zt===t&&(Ht&n)===n&&(It===4||It===3&&(Ht&130023424)===Ht&&500>bt()-cd?Nr(t,0):ld|=n),fn(t,e)}function p0(t,e){e===0&&(t.mode&1?(e=Pa,Pa<<=1,!(Pa&130023424)&&(Pa=4194304)):e=1);var n=en();t=Pi(t,e),t!==null&&(ma(t,e,n),fn(t,n))}function Ry(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),p0(t,n)}function Cy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(_e(314))}i!==null&&i.delete(e),p0(t,n)}var m0;m0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||cn.current)ln=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ln=!1,my(t,e,n);ln=!!(t.flags&131072)}else ln=!1,gt&&e.flags&1048576&&xg(e,Xl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;El(t,e),t=e.pendingProps;var r=zs(e,$t.current);Ns(e,n),r=nd(null,e,i,t,r,n);var s=id();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,un(i)?(s=!0,Gl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Zh(e),r.updater=xc,e.stateNode=r,r._reactInternals=e,vf(e,i,t,n),e=Sf(null,e,i,!0,s,n)):(e.tag=0,gt&&s&&Wh(e),Qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(El(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Py(i),t=Gn(i,t),r){case 0:e=yf(null,e,i,t,n);break e;case 1:e=Ip(null,e,i,t,n);break e;case 11:e=Dp(null,e,i,t,n);break e;case 14:e=Np(null,e,i,Gn(i.type,t),n);break e}throw Error(_e(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),yf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Ip(t,e,i,r,n);case 3:e:{if(Jg(e),t===null)throw Error(_e(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Tg(t,e),ql(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Gs(Error(_e(423)),e),e=Up(t,e,i,n,r);break e}else if(i!==r){r=Gs(Error(_e(424)),e),e=Up(t,e,i,n,r);break e}else for(yn=er(e.stateNode.containerInfo.firstChild),Sn=e,gt=!0,jn=null,n=Eg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bs(),i===r){e=Li(t,e,n);break e}Qt(t,e,i,n)}e=e.child}return e;case 5:return Ag(e),t===null&&mf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,uf(i,r)?o=null:s!==null&&uf(i,s)&&(e.flags|=32),Zg(t,e),Qt(t,e,o,n),e.child;case 6:return t===null&&mf(e),null;case 13:return Qg(t,e,n);case 4:return Jh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Hs(e,null,i,n):Qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Dp(t,e,i,r,n);case 7:return Qt(t,e,e.pendingProps,n),e.child;case 8:return Qt(t,e,e.pendingProps.children,n),e.child;case 12:return Qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ht(jl,i._currentValue),i._currentValue=o,s!==null)if(Jn(s.value,o)){if(s.children===r.children&&!cn.current){e=Li(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ai(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),_f(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(_e(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),_f(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ns(e,n),r=Un(r),i=i(r),e.flags|=1,Qt(t,e,i,n),e.child;case 14:return i=e.type,r=Gn(i,e.pendingProps),r=Gn(i.type,r),Np(t,e,i,r,n);case 15:return $g(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),El(t,e),e.tag=1,un(i)?(t=!0,Gl(e)):t=!1,Ns(e,n),jg(e,i,r),vf(e,i,r,n),Sf(null,e,i,!0,t,n);case 19:return e0(t,e,n);case 22:return Kg(t,e,n)}throw Error(_e(156,e.tag))};function _0(t,e){return G_(t,e)}function by(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(t,e,n,i){return new by(t,e,n,i)}function dd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Py(t){if(typeof t=="function")return dd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Dh)return 11;if(t===Nh)return 14}return 2}function rr(t,e){var n=t.alternate;return n===null?(n=Nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Al(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")dd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ms:return Ir(n.children,r,s,e);case Lh:o=8,r|=8;break;case Hu:return t=Nn(12,n,e,r|2),t.elementType=Hu,t.lanes=s,t;case Vu:return t=Nn(13,n,e,r),t.elementType=Vu,t.lanes=s,t;case Gu:return t=Nn(19,n,e,r),t.elementType=Gu,t.lanes=s,t;case A_:return Mc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w_:o=10;break e;case T_:o=9;break e;case Dh:o=11;break e;case Nh:o=14;break e;case Vi:o=16,i=null;break e}throw Error(_e(130,t==null?t:typeof t,""))}return e=Nn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ir(t,e,n,i){return t=Nn(7,t,i,e),t.lanes=n,t}function Mc(t,e,n,i){return t=Nn(22,t,i,e),t.elementType=A_,t.lanes=n,t.stateNode={isHidden:!1},t}function tu(t,e,n){return t=Nn(6,t,null,e),t.lanes=n,t}function nu(t,e,n){return e=Nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ly(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fc(0),this.expirationTimes=Fc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function pd(t,e,n,i,r,s,o,a,l){return t=new Ly(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zh(s),t}function Dy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ps,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function g0(t){if(!t)return lr;t=t._reactInternals;e:{if(jr(t)!==t||t.tag!==1)throw Error(_e(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(_e(171))}if(t.tag===1){var n=t.type;if(un(n))return gg(t,n,e)}return e}function v0(t,e,n,i,r,s,o,a,l){return t=pd(n,i,!0,t,r,s,o,a,l),t.context=g0(null),n=t.current,i=en(),r=ir(n),s=Ai(i,r),s.callback=e??null,tr(n,s,r),t.current.lanes=r,ma(t,r,i),fn(t,i),t}function Ec(t,e,n,i){var r=e.current,s=en(),o=ir(r);return n=g0(n),e.context===null?e.context=n:e.pendingContext=n,e=Ai(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=tr(r,e,o),t!==null&&(Kn(t,r,o,s),yl(t,r,o)),o}function nc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Xp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function md(t,e){Xp(t,e),(t=t.alternate)&&Xp(t,e)}function Ny(){return null}var x0=typeof reportError=="function"?reportError:function(t){console.error(t)};function _d(t){this._internalRoot=t}wc.prototype.render=_d.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(_e(409));Ec(t,e,null,null)};wc.prototype.unmount=_d.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Br(function(){Ec(null,t,null,null)}),e[bi]=null}};function wc(t){this._internalRoot=t}wc.prototype.unstable_scheduleHydration=function(t){if(t){var e=K_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Xi.length&&e!==0&&e<Xi[n].priority;n++);Xi.splice(n,0,t),n===0&&J_(t)}};function gd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function jp(){}function Iy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=nc(o);s.call(c)}}var o=v0(e,i,t,0,null,!1,!1,"",jp);return t._reactRootContainer=o,t[bi]=o.current,Ko(t.nodeType===8?t.parentNode:t),Br(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=nc(l);a.call(c)}}var l=pd(t,0,!1,null,null,!1,!1,"",jp);return t._reactRootContainer=l,t[bi]=l.current,Ko(t.nodeType===8?t.parentNode:t),Br(function(){Ec(e,l,n,i)}),l}function Ac(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=nc(o);a.call(l)}}Ec(e,o,t,r)}else o=Iy(n,e,t,r,i);return nc(o)}q_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=wo(e.pendingLanes);n!==0&&(Fh(e,n|1),fn(e,bt()),!(tt&6)&&(Ws=bt()+500,dr()))}break;case 13:Br(function(){var i=Pi(t,1);if(i!==null){var r=en();Kn(i,t,1,r)}}),md(t,1)}};Oh=function(t){if(t.tag===13){var e=Pi(t,134217728);if(e!==null){var n=en();Kn(e,t,134217728,n)}md(t,134217728)}};$_=function(t){if(t.tag===13){var e=ir(t),n=Pi(t,e);if(n!==null){var i=en();Kn(n,t,e,i)}md(t,e)}};K_=function(){return ot};Z_=function(t,e){var n=ot;try{return ot=t,e()}finally{ot=n}};Qu=function(t,e,n){switch(e){case"input":if(ju(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=_c(i);if(!r)throw Error(_e(90));C_(i),ju(i,r)}}}break;case"textarea":P_(t,n);break;case"select":e=n.value,e!=null&&bs(t,!!n.multiple,e,!1)}};O_=ud;k_=Br;var Uy={usingClientEntryPoint:!1,Events:[ga,xs,_c,U_,F_,ud]},mo={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fy={bundleType:mo.bundleType,version:mo.version,rendererPackageName:mo.rendererPackageName,rendererConfig:mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Di.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=H_(t),t===null?null:t.stateNode},findFiberByHostInstance:mo.findFiberByHostInstance||Ny,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ha=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ha.isDisabled&&Ha.supportsFiber)try{hc=Ha.inject(Fy),li=Ha}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uy;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gd(e))throw Error(_e(200));return Dy(t,e,null,n)};En.createRoot=function(t,e){if(!gd(t))throw Error(_e(299));var n=!1,i="",r=x0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=pd(t,1,!1,null,null,n,!1,i,r),t[bi]=e.current,Ko(t.nodeType===8?t.parentNode:t),new _d(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(_e(188)):(t=Object.keys(t).join(","),Error(_e(268,t)));return t=H_(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return Br(t)};En.hydrate=function(t,e,n){if(!Tc(e))throw Error(_e(200));return Ac(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!gd(t))throw Error(_e(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=x0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=v0(e,null,t,1,n??null,r,!1,s,o),t[bi]=e.current,Ko(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new wc(e)};En.render=function(t,e,n){if(!Tc(e))throw Error(_e(200));return Ac(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!Tc(t))throw Error(_e(40));return t._reactRootContainer?(Br(function(){Ac(null,null,t,!1,function(){t._reactRootContainer=null,t[bi]=null})}),!0):!1};En.unstable_batchedUpdates=ud;En.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Tc(n))throw Error(_e(200));if(t==null||t._reactInternals===void 0)throw Error(_e(38));return Ac(t,e,n,!1,i)};En.version="18.3.1-next-f1338f8080-20240426";function y0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y0)}catch(t){console.error(t)}}y0(),y_.exports=En;var Oy=y_.exports,S0,Yp=Oy;S0=Yp.createRoot,Yp.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ky={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Yr=(t,e)=>{const n=ke.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...c},f)=>ke.createElement("svg",{ref:f,...ky,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${zy(t)}`,a].join(" "),...c},[...e.map(([d,h])=>ke.createElement(d,h)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=Yr("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=Yr("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=Yr("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=Yr("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=Yr("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=Yr("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=Yr("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vd="180",Us={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},As={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wy=0,Zp=1,Xy=2,M0=1,E0=2,yi=3,cr=0,hn=1,Dn=2,sr=0,Fs=1,Jp=2,Qp=3,em=4,jy=5,Ar=100,Yy=101,qy=102,$y=103,Ky=104,Zy=200,Jy=201,Qy=202,eS=203,Nf=204,If=205,tS=206,nS=207,iS=208,rS=209,sS=210,oS=211,aS=212,lS=213,cS=214,Uf=0,Ff=1,Of=2,Xs=3,kf=4,zf=5,Bf=6,Hf=7,w0=0,uS=1,fS=2,or=0,hS=1,dS=2,pS=3,mS=4,_S=5,gS=6,vS=7,T0=300,js=301,Ys=302,Vf=303,Gf=304,Rc=306,Wf=1e3,Lr=1001,Xf=1002,Zn=1003,xS=1004,Va=1005,oi=1006,iu=1007,Dr=1008,fi=1009,A0=1010,R0=1011,sa=1012,xd=1013,Hr=1014,Ti=1015,xa=1016,yd=1017,Sd=1018,oa=1020,C0=35902,b0=35899,P0=1021,L0=1022,qn=1023,aa=1026,la=1027,D0=1028,Md=1029,N0=1030,Ed=1031,wd=1033,Rl=33776,Cl=33777,bl=33778,Pl=33779,jf=35840,Yf=35841,qf=35842,$f=35843,Kf=36196,Zf=37492,Jf=37496,Qf=37808,eh=37809,th=37810,nh=37811,ih=37812,rh=37813,sh=37814,oh=37815,ah=37816,lh=37817,ch=37818,uh=37819,fh=37820,hh=37821,dh=36492,ph=36494,mh=36495,_h=36283,gh=36284,vh=36285,xh=36286,yS=3200,SS=3201,I0=0,MS=1,Yi="",bn="srgb",qs="srgb-linear",ic="linear",lt="srgb",Qr=7680,tm=519,ES=512,wS=513,TS=514,U0=515,AS=516,RS=517,CS=518,bS=519,nm=35044,im="300 es",ai=2e3,rc=2001;class qr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rm=1234567;const Oo=Math.PI/180,ca=180/Math.PI;function $r(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[t&255]+jt[t>>8&255]+jt[t>>16&255]+jt[t>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[n&63|128]+jt[n>>8&255]+"-"+jt[n>>16&255]+jt[n>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function qe(t,e,n){return Math.max(e,Math.min(n,t))}function Td(t,e){return(t%e+e)%e}function PS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function LS(t,e,n){return t!==e?(n-t)/(e-t):0}function ko(t,e,n){return(1-n)*t+n*e}function DS(t,e,n,i){return ko(t,e,1-Math.exp(-n*i))}function NS(t,e=1){return e-Math.abs(Td(t,e*2)-e)}function IS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function US(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function FS(t,e){return t+Math.floor(Math.random()*(e-t+1))}function OS(t,e){return t+Math.random()*(e-t)}function kS(t){return t*(.5-Math.random())}function zS(t){t!==void 0&&(rm=t);let e=rm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function BS(t){return t*Oo}function HS(t){return t*ca}function VS(t){return(t&t-1)===0&&t!==0}function GS(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function WS(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function XS(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),f=o((e+i)/2),d=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":t.set(a*f,l*d,l*h,a*c);break;case"YZY":t.set(l*h,a*f,l*d,a*c);break;case"ZXZ":t.set(l*d,l*h,a*f,a*c);break;case"XZX":t.set(a*f,l*_,l*p,a*c);break;case"YXY":t.set(l*p,a*f,l*_,a*c);break;case"ZYZ":t.set(l*_,l*p,a*f,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ds(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Zt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Ll={DEG2RAD:Oo,RAD2DEG:ca,generateUUID:$r,clamp:qe,euclideanModulo:Td,mapLinear:PS,inverseLerp:LS,lerp:ko,damp:DS,pingpong:NS,smoothstep:IS,smootherstep:US,randInt:FS,randFloat:OS,randFloatSpread:kS,seededRandom:zS,degToRad:BS,radToDeg:HS,isPowerOfTwo:VS,ceilPowerOfTwo:GS,floorPowerOfTwo:WS,setQuaternionFromProperEuler:XS,normalize:Zt,denormalize:ds};class xe{constructor(e=0,n=0){xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=_,e[n+3]=g;return}if(d!==g||l!==h||c!==p||f!==_){let m=1-a;const u=l*h+c*p+f*_+d*g,v=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const C=Math.sqrt(x),T=Math.atan2(C,u*v);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}const y=a*v;if(l=l*m+h*y,c=c*m+p*y,f=f*m+_*y,d=d*m+g*y,m===1-a){const C=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=C,c*=C,f*=C,d*=C}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+f*d+l*p-c*h,e[n+1]=l*_+f*h+c*d-a*p,e[n+2]=c*_+f*p+a*h-l*d,e[n+3]=f*_-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*f*d+c*p*_,this._y=c*p*d-h*f*_,this._z=c*f*_+h*p*d,this._w=c*f*d-h*p*_;break;case"YXZ":this._x=h*f*d+c*p*_,this._y=c*p*d-h*f*_,this._z=c*f*_-h*p*d,this._w=c*f*d+h*p*_;break;case"ZXY":this._x=h*f*d-c*p*_,this._y=c*p*d+h*f*_,this._z=c*f*_+h*p*d,this._w=c*f*d-h*p*_;break;case"ZYX":this._x=h*f*d-c*p*_,this._y=c*p*d+h*f*_,this._z=c*f*_-h*p*d,this._w=c*f*d+h*p*_;break;case"YZX":this._x=h*f*d+c*p*_,this._y=c*p*d+h*f*_,this._z=c*f*_-h*p*d,this._w=c*f*d-h*p*_;break;case"XZY":this._x=h*f*d-c*p*_,this._y=c*p*d-h*f*_,this._z=c*f*_+h*p*d,this._w=c*f*d+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,n=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(sm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(sm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*f,this.y=i+l*f+a*c-s*d,this.z=r+l*d+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ru.copy(this).projectOnVector(e),this.sub(ru)}reflect(e){return this.sub(ru.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ru=new N,sm=new Vr;class je{constructor(e,n,i,r,s,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],p=i[5],_=i[8],g=r[0],m=r[3],u=r[6],v=r[1],x=r[4],y=r[7],C=r[2],T=r[5],R=r[8];return s[0]=o*g+a*v+l*C,s[3]=o*m+a*x+l*T,s[6]=o*u+a*y+l*R,s[1]=c*g+f*v+d*C,s[4]=c*m+f*x+d*T,s[7]=c*u+f*y+d*R,s[2]=h*g+p*v+_*C,s[5]=h*m+p*x+_*T,s[8]=h*u+p*y+_*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=f*o-a*c,h=a*l-f*s,p=c*s-o*l,_=n*d+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(r*c-f*i)*g,e[2]=(a*i-r*o)*g,e[3]=h*g,e[4]=(f*n-r*l)*g,e[5]=(r*s-a*n)*g,e[6]=p*g,e[7]=(i*l-c*n)*g,e[8]=(o*n-i*s)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(su.makeScale(e,n)),this}rotate(e){return this.premultiply(su.makeRotation(-e)),this}translate(e,n){return this.premultiply(su.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const su=new je;function F0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function sc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function jS(){const t=sc("canvas");return t.style.display="block",t}const om={};function ua(t){t in om||(om[t]=!0,console.warn(t))}function YS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const am=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lm=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qS(){const t={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===lt&&(r.r=Ri(r.r),r.g=Ri(r.g),r.b=Ri(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(r.r=Os(r.r),r.g=Os(r.g),r.b=Os(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Yi?ic:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ua("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ua("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[qs]:{primaries:e,whitePoint:i,transfer:ic,toXYZ:am,fromXYZ:lm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:am,fromXYZ:lm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}}),t}const it=qS();function Ri(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Os(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let es;class $S{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{es===void 0&&(es=sc("canvas")),es.width=e.width,es.height=e.height;const r=es.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=es}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=sc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ri(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ri(n[i]/255)*255):n[i]=Ri(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let KS=0;class Ad{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=$r(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ou(r[o].image)):s.push(ou(r[o]))}else s=ou(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function ou(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?$S.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ZS=0;const au=new N;class tn extends qr{constructor(e=tn.DEFAULT_IMAGE,n=tn.DEFAULT_MAPPING,i=Lr,r=Lr,s=oi,o=Dr,a=qn,l=fi,c=tn.DEFAULT_ANISOTROPY,f=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=$r(),this.name="",this.source=new Ad(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(au).x}get height(){return this.source.getSize(au).y}get depth(){return this.source.getSize(au).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==T0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wf:e.x=e.x-Math.floor(e.x);break;case Lr:e.x=e.x<0?0:1;break;case Xf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wf:e.y=e.y-Math.floor(e.y);break;case Lr:e.y=e.y<0?0:1;break;case Xf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=T0;tn.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,n=0,i=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],h=l[1],p=l[5],_=l[9],g=l[2],m=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,y=(p+1)/2,C=(u+1)/2,T=(f+h)/4,R=(d+g)/4,b=(_+m)/4;return x>y&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=T/i,s=R/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=b/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=R/s,r=b/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(h-f)*(h-f));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(d-g)/v,this.z=(h-f)/v,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this.w=qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this.w=qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class JS extends qr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new ut(0,0,e,n),this.scissorTest=!1,this.viewport=new ut(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new tn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:oi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Ad(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gr extends JS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class O0 extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=Lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class QS extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=Lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eo{constructor(e=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bn):Bn.fromBufferAttribute(s,o),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ga.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ga.copy(i.boundingBox)),Ga.applyMatrix4(e.matrixWorld),this.union(Ga)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_o),Wa.subVectors(this.max,_o),ts.subVectors(e.a,_o),ns.subVectors(e.b,_o),is.subVectors(e.c,_o),Fi.subVectors(ns,ts),Oi.subVectors(is,ns),gr.subVectors(ts,is);let n=[0,-Fi.z,Fi.y,0,-Oi.z,Oi.y,0,-gr.z,gr.y,Fi.z,0,-Fi.x,Oi.z,0,-Oi.x,gr.z,0,-gr.x,-Fi.y,Fi.x,0,-Oi.y,Oi.x,0,-gr.y,gr.x,0];return!lu(n,ts,ns,is,Wa)||(n=[1,0,0,0,1,0,0,0,1],!lu(n,ts,ns,is,Wa))?!1:(Xa.crossVectors(Fi,Oi),n=[Xa.x,Xa.y,Xa.z],lu(n,ts,ns,is,Wa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mi=[new N,new N,new N,new N,new N,new N,new N,new N],Bn=new N,Ga=new eo,ts=new N,ns=new N,is=new N,Fi=new N,Oi=new N,gr=new N,_o=new N,Wa=new N,Xa=new N,vr=new N;function lu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){vr.fromArray(t,s);const a=r.x*Math.abs(vr.x)+r.y*Math.abs(vr.y)+r.z*Math.abs(vr.z),l=e.dot(vr),c=n.dot(vr),f=i.dot(vr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const e1=new eo,go=new N,cu=new N;class Cc{constructor(e=new N,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):e1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;go.subVectors(e,this.center);const n=go.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(go,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(go.copy(e.center).add(cu)),this.expandByPoint(go.copy(e.center).sub(cu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const _i=new N,uu=new N,ja=new N,ki=new N,fu=new N,Ya=new N,hu=new N;class Rd{constructor(e=new N,n=new N(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=_i.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,n),_i.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){uu.copy(e).add(n).multiplyScalar(.5),ja.copy(n).sub(e).normalize(),ki.copy(this.origin).sub(uu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ja),a=ki.dot(this.direction),l=-ki.dot(ja),c=ki.lengthSq(),f=Math.abs(1-o*o);let d,h,p,_;if(f>0)if(d=o*l-a,h=o*a-l,_=s*f,d>=0)if(h>=-_)if(h<=_){const g=1/f;d*=g,h*=g,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(uu).addScaledVector(ja,h),p}intersectSphere(e,n){_i.subVectors(e.center,this.origin);const i=_i.dot(this.direction),r=_i.dot(_i)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,n,i,r,s){fu.subVectors(n,e),Ya.subVectors(i,e),hu.crossVectors(fu,Ya);let o=this.direction.dot(hu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,e);const l=a*this.direction.dot(Ya.crossVectors(ki,Ya));if(l<0)return null;const c=a*this.direction.dot(fu.cross(ki));if(c<0||l+c>o)return null;const f=-a*ki.dot(hu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,n,i,r,s,o,a,l,c,f,d,h,p,_,g,m){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,d,h,p,_,g,m)}set(e,n,i,r,s,o,a,l,c,f,d,h,p,_,g,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=p,u[7]=_,u[11]=g,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/rs.setFromMatrixColumn(e,0).length(),s=1/rs.setFromMatrixColumn(e,1).length(),o=1/rs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,p=o*d,_=a*f,g=a*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=p+_*c,n[5]=h-g*c,n[9]=-a*l,n[2]=g-h*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,p=l*d,_=c*f,g=c*d;n[0]=h+g*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=p*a-_,n[6]=g+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,p=l*d,_=c*f,g=c*d;n[0]=h-g*a,n[4]=-o*d,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*f,n[9]=g-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,p=o*d,_=a*f,g=a*d;n[0]=l*f,n[4]=_*c-p,n[8]=h*c+g,n[1]=l*d,n[5]=g*c+h,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,_=a*l,g=a*c;n[0]=l*f,n[4]=g-h*d,n[8]=_*d+p,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=p*d+_,n[10]=h-g*d}else if(e.order==="XZY"){const h=o*l,p=o*c,_=a*l,g=a*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+g,n[5]=o*f,n[9]=p*d-_,n[2]=_*d-p,n[6]=a*f,n[10]=g*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(t1,e,n1)}lookAt(e,n,i){const r=this.elements;return _n.subVectors(e,n),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),zi.crossVectors(i,_n),zi.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),zi.crossVectors(i,_n)),zi.normalize(),qa.crossVectors(_n,zi),r[0]=zi.x,r[4]=qa.x,r[8]=_n.x,r[1]=zi.y,r[5]=qa.y,r[9]=_n.y,r[2]=zi.z,r[6]=qa.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],p=i[13],_=i[2],g=i[6],m=i[10],u=i[14],v=i[3],x=i[7],y=i[11],C=i[15],T=r[0],R=r[4],b=r[8],E=r[12],M=r[1],P=r[5],O=r[9],W=r[13],q=r[2],z=r[6],Y=r[10],te=r[14],U=r[3],K=r[7],ie=r[11],ye=r[15];return s[0]=o*T+a*M+l*q+c*U,s[4]=o*R+a*P+l*z+c*K,s[8]=o*b+a*O+l*Y+c*ie,s[12]=o*E+a*W+l*te+c*ye,s[1]=f*T+d*M+h*q+p*U,s[5]=f*R+d*P+h*z+p*K,s[9]=f*b+d*O+h*Y+p*ie,s[13]=f*E+d*W+h*te+p*ye,s[2]=_*T+g*M+m*q+u*U,s[6]=_*R+g*P+m*z+u*K,s[10]=_*b+g*O+m*Y+u*ie,s[14]=_*E+g*W+m*te+u*ye,s[3]=v*T+x*M+y*q+C*U,s[7]=v*R+x*P+y*z+C*K,s[11]=v*b+x*O+y*Y+C*ie,s[15]=v*E+x*W+y*te+C*ye,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],d=e[6],h=e[10],p=e[14],_=e[3],g=e[7],m=e[11],u=e[15];return _*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*p-i*l*p)+g*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*f-s*l*f)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*f-i*c*f)+u*(-r*a*f-n*l*d+n*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=e[9],h=e[10],p=e[11],_=e[12],g=e[13],m=e[14],u=e[15],v=d*m*c-g*h*c+g*l*p-a*m*p-d*l*u+a*h*u,x=_*h*c-f*m*c-_*l*p+o*m*p+f*l*u-o*h*u,y=f*g*c-_*d*c+_*a*p-o*g*p-f*a*u+o*d*u,C=_*d*l-f*g*l-_*a*h+o*g*h+f*a*m-o*d*m,T=n*v+i*x+r*y+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=v*R,e[1]=(g*h*s-d*m*s-g*r*p+i*m*p+d*r*u-i*h*u)*R,e[2]=(a*m*s-g*l*s+g*r*c-i*m*c-a*r*u+i*l*u)*R,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*p-i*l*p)*R,e[4]=x*R,e[5]=(f*m*s-_*h*s+_*r*p-n*m*p-f*r*u+n*h*u)*R,e[6]=(_*l*s-o*m*s-_*r*c+n*m*c+o*r*u-n*l*u)*R,e[7]=(o*h*s-f*l*s+f*r*c-n*h*c-o*r*p+n*l*p)*R,e[8]=y*R,e[9]=(_*d*s-f*g*s-_*i*p+n*g*p+f*i*u-n*d*u)*R,e[10]=(o*g*s-_*a*s+_*i*c-n*g*c-o*i*u+n*a*u)*R,e[11]=(f*a*s-o*d*s-f*i*c+n*d*c+o*i*p-n*a*p)*R,e[12]=C*R,e[13]=(f*g*r-_*d*r+_*i*h-n*g*h-f*i*m+n*d*m)*R,e[14]=(_*a*r-o*g*r-_*i*l+n*g*l+o*i*m-n*a*m)*R,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*h+n*a*h)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,d=a+a,h=s*c,p=s*f,_=s*d,g=o*f,m=o*d,u=a*d,v=l*c,x=l*f,y=l*d,C=i.x,T=i.y,R=i.z;return r[0]=(1-(g+u))*C,r[1]=(p+y)*C,r[2]=(_-x)*C,r[3]=0,r[4]=(p-y)*T,r[5]=(1-(h+u))*T,r[6]=(m+v)*T,r[7]=0,r[8]=(_+x)*R,r[9]=(m-v)*R,r[10]=(1-(h+g))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=rs.set(r[0],r[1],r[2]).length();const o=rs.set(r[4],r[5],r[6]).length(),a=rs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Hn.copy(this);const c=1/s,f=1/o,d=1/a;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=f,Hn.elements[5]*=f,Hn.elements[6]*=f,Hn.elements[8]*=d,Hn.elements[9]*=d,Hn.elements[10]*=d,n.setFromRotationMatrix(Hn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ai,l=!1){const c=this.elements,f=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let _,g;if(l)_=s/(o-s),g=o*s/(o-s);else if(a===ai)_=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===rc)_=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ai,l=!1){const c=this.elements,f=2/(n-e),d=2/(i-r),h=-(n+e)/(n-e),p=-(i+r)/(i-r);let _,g;if(l)_=1/(o-s),g=o/(o-s);else if(a===ai)_=-2/(o-s),g=-(o+s)/(o-s);else if(a===rc)_=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const rs=new N,Hn=new vt,t1=new N(0,0,0),n1=new N(1,1,1),zi=new N,qa=new N,_n=new N,cm=new vt,um=new Vr;class hi{constructor(e=0,n=0,i=0,r=hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return cm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return um.setFromEuler(this),this.setFromQuaternion(um,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hi.DEFAULT_ORDER="XYZ";class k0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let i1=0;const fm=new N,ss=new Vr,gi=new vt,$a=new N,vo=new N,r1=new N,s1=new Vr,hm=new N(1,0,0),dm=new N(0,1,0),pm=new N(0,0,1),mm={type:"added"},o1={type:"removed"},os={type:"childadded",child:null},du={type:"childremoved",child:null};class Vt extends qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:i1++}),this.uuid=$r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new N,n=new hi,i=new Vr,r=new N(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new je}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new k0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ss.setFromAxisAngle(e,n),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,n){return ss.setFromAxisAngle(e,n),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(hm,e)}rotateY(e){return this.rotateOnAxis(dm,e)}rotateZ(e){return this.rotateOnAxis(pm,e)}translateOnAxis(e,n){return fm.copy(e).applyQuaternion(this.quaternion),this.position.add(fm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(hm,e)}translateY(e){return this.translateOnAxis(dm,e)}translateZ(e){return this.translateOnAxis(pm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?$a.copy(e):$a.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(vo,$a,this.up):gi.lookAt($a,vo,this.up),this.quaternion.setFromRotationMatrix(gi),r&&(gi.extractRotation(r.matrixWorld),ss.setFromRotationMatrix(gi),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mm),os.child=e,this.dispatchEvent(os),os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(o1),du.child=e,this.dispatchEvent(du),du.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mm),os.child=e,this.dispatchEvent(os),os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,e,r1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,s1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Vt.DEFAULT_UP=new N(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new N,vi=new N,pu=new N,xi=new N,as=new N,ls=new N,_m=new N,mu=new N,_u=new N,gu=new N,vu=new ut,xu=new ut,yu=new ut;class Yn{constructor(e=new N,n=new N,i=new N){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Vn.subVectors(e,n),r.cross(Vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Vn.subVectors(r,n),vi.subVectors(i,n),pu.subVectors(e,n);const o=Vn.dot(Vn),a=Vn.dot(vi),l=Vn.dot(pu),c=vi.dot(vi),f=vi.dot(pu),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-a*f)*h,_=(o*f-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,xi.x),l.addScaledVector(o,xi.y),l.addScaledVector(a,xi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return vu.setScalar(0),xu.setScalar(0),yu.setScalar(0),vu.fromBufferAttribute(e,n),xu.fromBufferAttribute(e,i),yu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(vu,s.x),o.addScaledVector(xu,s.y),o.addScaledVector(yu,s.z),o}static isFrontFacing(e,n,i,r){return Vn.subVectors(i,n),vi.subVectors(e,n),Vn.cross(vi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Vn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Yn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Yn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;as.subVectors(r,i),ls.subVectors(s,i),mu.subVectors(e,i);const l=as.dot(mu),c=ls.dot(mu);if(l<=0&&c<=0)return n.copy(i);_u.subVectors(e,r);const f=as.dot(_u),d=ls.dot(_u);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(as,o);gu.subVectors(e,s);const p=as.dot(gu),_=ls.dot(gu);if(_>=0&&p<=_)return n.copy(s);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(ls,a);const m=f*_-p*d;if(m<=0&&d-f>=0&&p-_>=0)return _m.subVectors(s,r),a=(d-f)/(d-f+(p-_)),n.copy(r).addScaledVector(_m,a);const u=1/(m+g+h);return o=g*u,a=h*u,n.copy(i).addScaledVector(as,o).addScaledVector(ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const z0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},Ka={h:0,s:0,l:0};function Su(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=Td(e,1),n=qe(n,0,1),i=qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Su(o,s,e+1/3),this.g=Su(o,s,e),this.b=Su(o,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,n=bn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=bn){const i=z0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return it.workingToColorSpace(Yt.copy(this),e),Math.round(qe(Yt.r*255,0,255))*65536+Math.round(qe(Yt.g*255,0,255))*256+Math.round(qe(Yt.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.workingToColorSpace(Yt.copy(this),n);const i=Yt.r,r=Yt.g,s=Yt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=it.workingColorSpace){return it.workingToColorSpace(Yt.copy(this),n),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=bn){it.workingToColorSpace(Yt.copy(this),e);const n=Yt.r,i=Yt.g,r=Yt.b;return e!==bn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+n,Bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Bi),e.getHSL(Ka);const i=ko(Bi.h,Ka.h,n),r=ko(Bi.s,Ka.s,n),s=ko(Bi.l,Ka.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new Qe;Qe.NAMES=z0;let a1=0;class to extends qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a1++}),this.uuid=$r(),this.name="",this.type="Material",this.blending=Fs,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nf,this.blendDst=If,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(i.blending=this.blending),this.side!==cr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Nf&&(i.blendSrc=this.blendSrc),this.blendDst!==If&&(i.blendDst=this.blendDst),this.blendEquation!==Ar&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class oc extends to{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=w0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new N,Za=new xe;let l1=0;class ui{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:l1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=nm,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Za.fromBufferAttribute(this,n),Za.applyMatrix3(e),this.setXY(n,Za.x,Za.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ds(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ds(n,this.array)),n}setX(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ds(n,this.array)),n}setY(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ds(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ds(n,this.array)),n}setW(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nm&&(e.usage=this.usage),e}}class B0 extends ui{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class H0 extends ui{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ct extends ui{constructor(e,n,i){super(new Float32Array(e),n,i)}}let c1=0;const Cn=new vt,Mu=new Vt,cs=new N,gn=new eo,xo=new eo,Ot=new N;class dn extends qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=$r(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(F0(e)?H0:B0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,n,i){return Cn.makeTranslation(e,n,i),this.applyMatrix4(Cn),this}scale(e,n,i){return Cn.makeScale(e,n,i),this.applyMatrix4(Cn),this}lookAt(e){return Mu.lookAt(e),Mu.updateMatrix(),this.applyMatrix4(Mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ct(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new eo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];xo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(gn.min,xo.min),gn.expandByPoint(Ot),Ot.addVectors(gn.max,xo.max),gn.expandByPoint(Ot)):(gn.expandByPoint(xo.min),gn.expandByPoint(xo.max))}gn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ot));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Ot.fromBufferAttribute(a,c),l&&(cs.fromBufferAttribute(e,c),Ot.add(cs)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new N,l[b]=new N;const c=new N,f=new N,d=new N,h=new xe,p=new xe,_=new xe,g=new N,m=new N;function u(b,E,M){c.fromBufferAttribute(i,b),f.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),h.fromBufferAttribute(s,b),p.fromBufferAttribute(s,E),_.fromBufferAttribute(s,M),f.sub(c),d.sub(c),p.sub(h),_.sub(h);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(g.copy(f).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(f,-_.x).multiplyScalar(P),a[b].add(g),a[E].add(g),a[M].add(g),l[b].add(m),l[E].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let b=0,E=v.length;b<E;++b){const M=v[b],P=M.start,O=M.count;for(let W=P,q=P+O;W<q;W+=3)u(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const x=new N,y=new N,C=new N,T=new N;function R(b){C.fromBufferAttribute(r,b),T.copy(C);const E=a[b];x.copy(E),x.sub(C.multiplyScalar(C.dot(E))).normalize(),y.crossVectors(T,E);const P=y.dot(l[b])<0?-1:1;o.setXYZW(b,x.x,x.y,x.z,P)}for(let b=0,E=v.length;b<E;++b){const M=v[b],P=M.start,O=M.count;for(let W=P,q=P+O;W<q;W+=3)R(e.getX(W+0)),R(e.getX(W+1)),R(e.getX(W+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ui(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,f=new N,d=new N;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,g),o.fromBufferAttribute(n,m),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(f),l.add(f),c.add(f),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,d=a.normalized,h=new c.constructor(l.length*f);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*f;for(let u=0;u<f;u++)h[_++]=c[p++]}return new ui(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new dn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const h=c[f],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let h=0,p=d.length;h<p;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gm=new vt,xr=new Rd,Ja=new Cc,vm=new N,Qa=new N,el=new N,tl=new N,Eu=new N,nl=new N,xm=new N,il=new N;class At extends Vt{constructor(e=new dn,n=new oc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){nl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&(Eu.fromBufferAttribute(d,e),o?nl.addScaledVector(Eu,f):nl.addScaledVector(Eu.sub(n),f))}n.add(nl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(s),xr.copy(e.ray).recast(e.near),!(Ja.containsPoint(xr.origin)===!1&&(xr.intersectSphere(Ja,vm)===null||xr.origin.distanceToSquared(vm)>(e.far-e.near)**2))&&(gm.copy(s).invert(),xr.copy(e.ray).applyMatrix4(gm),!(i.boundingBox!==null&&xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,xr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const m=h[_],u=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,C=x;y<C;y+=3){const T=a.getX(y),R=a.getX(y+1),b=a.getX(y+2);r=rl(this,u,e,i,c,f,d,T,R,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,u=g;m<u;m+=3){const v=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);r=rl(this,o,e,i,c,f,d,v,x,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const m=h[_],u=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,C=x;y<C;y+=3){const T=y,R=y+1,b=y+2;r=rl(this,u,e,i,c,f,d,T,R,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,u=g;m<u;m+=3){const v=m,x=m+1,y=m+2;r=rl(this,o,e,i,c,f,d,v,x,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function u1(t,e,n,i,r,s,o,a){let l;if(e.side===hn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===cr,a),l===null)return null;il.copy(a),il.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(il);return c<n.near||c>n.far?null:{distance:c,point:il.clone(),object:t}}function rl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Qa),t.getVertexPosition(l,el),t.getVertexPosition(c,tl);const f=u1(t,e,n,i,Qa,el,tl,xm);if(f){const d=new N;Yn.getBarycoord(xm,Qa,el,tl,d),r&&(f.uv=Yn.getInterpolatedAttribute(r,a,l,c,d,new xe)),s&&(f.uv1=Yn.getInterpolatedAttribute(s,a,l,c,d,new xe)),o&&(f.normal=Yn.getInterpolatedAttribute(o,a,l,c,d,new N),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new N,materialIndex:0};Yn.getNormal(Qa,el,tl,h.normal),f.face=h,f.barycoord=d}return f}class no extends dn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],d=[];let h=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(f,3)),this.setAttribute("uv",new Ct(d,2));function _(g,m,u,v,x,y,C,T,R,b,E){const M=y/R,P=C/b,O=y/2,W=C/2,q=T/2,z=R+1,Y=b+1;let te=0,U=0;const K=new N;for(let ie=0;ie<Y;ie++){const ye=ie*P-W;for(let Ne=0;Ne<z;Ne++){const We=Ne*M-O;K[g]=We*v,K[m]=ye*x,K[u]=q,c.push(K.x,K.y,K.z),K[g]=0,K[m]=0,K[u]=T>0?1:-1,f.push(K.x,K.y,K.z),d.push(Ne/R),d.push(1-ie/b),te+=1}}for(let ie=0;ie<b;ie++)for(let ye=0;ye<R;ye++){const Ne=h+ye+z*ie,We=h+ye+z*(ie+1),$e=h+(ye+1)+z*(ie+1),Xe=h+(ye+1)+z*ie;l.push(Ne,We,Xe),l.push(We,$e,Xe),U+=6}a.addGroup(p,U,E),p+=U,h+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $s(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Jt(t){const e={};for(let n=0;n<t.length;n++){const i=$s(t[n]);for(const r in i)e[r]=i[r]}return e}function f1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function V0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const h1={clone:$s,merge:Jt};var d1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ur extends to{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=d1,this.fragmentShader=p1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=f1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class G0 extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new N,ym=new xe,Sm=new xe;class xn extends G0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ca*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ca*2*Math.atan(Math.tan(Oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,n){return this.getViewBounds(e,ym,Sm),n.subVectors(Sm,ym)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Oo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const us=-90,fs=1;class m1 extends Vt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new xn(us,fs,e,n);r.layers=this.layers,this.add(r);const s=new xn(us,fs,e,n);s.layers=this.layers,this.add(s);const o=new xn(us,fs,e,n);o.layers=this.layers,this.add(o);const a=new xn(us,fs,e,n);a.layers=this.layers,this.add(a);const l=new xn(us,fs,e,n);l.layers=this.layers,this.add(l);const c=new xn(us,fs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===rc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class W0 extends tn{constructor(e=[],n=js,i,r,s,o,a,l,c,f){super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _1 extends Gr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new W0(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new no(5,5,5),s=new ur({name:"CubemapFromEquirect",uniforms:$s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:sr});s.uniforms.tEquirect.value=n;const o=new At(r,s),a=n.minFilter;return n.minFilter===Dr&&(n.minFilter=oi),new m1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class si extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const g1={type:"move"};class wu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=n.getJointPose(g,i),u=this._getHandJoint(c,g);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(g1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new si;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Cd{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Qe(e),this.near=n,this.far=i}clone(){return new Cd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class v1 extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Tu=new N,x1=new N,y1=new je;class Wi{constructor(e=new N(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Tu.subVectors(i,n).cross(x1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Tu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||y1.getNormalMatrix(e),r=this.coplanarPoint(Tu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new Cc,S1=new xe(.5,.5),sl=new N;class bd{constructor(e=new Wi,n=new Wi,i=new Wi,r=new Wi,s=new Wi,o=new Wi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ai,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],d=s[5],h=s[6],p=s[7],_=s[8],g=s[9],m=s[10],u=s[11],v=s[12],x=s[13],y=s[14],C=s[15];if(r[0].setComponents(c-o,p-f,u-_,C-v).normalize(),r[1].setComponents(c+o,p+f,u+_,C+v).normalize(),r[2].setComponents(c+a,p+d,u+g,C+x).normalize(),r[3].setComponents(c-a,p-d,u-g,C-x).normalize(),i)r[4].setComponents(l,h,m,y).normalize(),r[5].setComponents(c-l,p-h,u-m,C-y).normalize();else if(r[4].setComponents(c-l,p-h,u-m,C-y).normalize(),n===ai)r[5].setComponents(c+l,p+h,u+m,C+y).normalize();else if(n===rc)r[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){yr.center.set(0,0,0);const n=S1.distanceTo(e.center);return yr.radius=.7071067811865476+n,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(sl.x=r.normal.x>0?e.max.x:e.min.x,sl.y=r.normal.y>0?e.max.y:e.min.y,sl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(sl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class X0 extends to{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ac=new N,lc=new N,Mm=new vt,yo=new Rd,ol=new Cc,Au=new N,Em=new N;class M1 extends Vt{constructor(e=new dn,n=new X0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)ac.fromBufferAttribute(n,r-1),lc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=ac.distanceTo(lc);e.setAttribute("lineDistance",new Ct(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ol.copy(i.boundingSphere),ol.applyMatrix4(r),ol.radius+=s,e.ray.intersectsSphere(ol)===!1)return;Mm.copy(r).invert(),yo.copy(e.ray).applyMatrix4(Mm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=i.index,h=i.attributes.position;if(f!==null){const p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let g=p,m=_-1;g<m;g+=c){const u=f.getX(g),v=f.getX(g+1),x=al(this,e,yo,l,u,v,g);x&&n.push(x)}if(this.isLineLoop){const g=f.getX(_-1),m=f.getX(p),u=al(this,e,yo,l,g,m,_-1);u&&n.push(u)}}else{const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let g=p,m=_-1;g<m;g+=c){const u=al(this,e,yo,l,g,g+1,g);u&&n.push(u)}if(this.isLineLoop){const g=al(this,e,yo,l,_-1,p,_-1);g&&n.push(g)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function al(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(ac.fromBufferAttribute(a,r),lc.fromBufferAttribute(a,s),n.distanceSqToSegment(ac,lc,Au,Em)>i)return;Au.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Au);if(!(c<e.near||c>e.far))return{distance:c,point:Em.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}class wm extends tn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class j0 extends tn{constructor(e,n,i=Hr,r,s,o,a=Zn,l=Zn,c,f=aa,d=1){if(f!==aa&&f!==la)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:d};super(h,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ad(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Y0 extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class cc extends dn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],d=[],h=[],p=[];let _=0;const g=[],m=i/2;let u=0;v(),o===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(f),this.setAttribute("position",new Ct(d,3)),this.setAttribute("normal",new Ct(h,3)),this.setAttribute("uv",new Ct(p,2));function v(){const y=new N,C=new N;let T=0;const R=(n-e)/i;for(let b=0;b<=s;b++){const E=[],M=b/s,P=M*(n-e)+e;for(let O=0;O<=r;O++){const W=O/r,q=W*l+a,z=Math.sin(q),Y=Math.cos(q);C.x=P*z,C.y=-M*i+m,C.z=P*Y,d.push(C.x,C.y,C.z),y.set(z,R,Y).normalize(),h.push(y.x,y.y,y.z),p.push(W,1-M),E.push(_++)}g.push(E)}for(let b=0;b<r;b++)for(let E=0;E<s;E++){const M=g[E][b],P=g[E+1][b],O=g[E+1][b+1],W=g[E][b+1];(e>0||E!==0)&&(f.push(M,P,W),T+=3),(n>0||E!==s-1)&&(f.push(P,O,W),T+=3)}c.addGroup(u,T,0),u+=T}function x(y){const C=_,T=new xe,R=new N;let b=0;const E=y===!0?e:n,M=y===!0?1:-1;for(let O=1;O<=r;O++)d.push(0,m*M,0),h.push(0,M,0),p.push(.5,.5),_++;const P=_;for(let O=0;O<=r;O++){const q=O/r*l+a,z=Math.cos(q),Y=Math.sin(q);R.x=E*Y,R.y=m*M,R.z=E*z,d.push(R.x,R.y,R.z),h.push(0,M,0),T.x=z*.5+.5,T.y=Y*.5*M+.5,p.push(T.x,T.y),_++}for(let O=0;O<r;O++){const W=C+O,q=P+O;y===!0?f.push(q,q+1,W):f.push(q+1,q,W),b+=3}c.addGroup(u,b,y===!0?1:2),u+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pd extends dn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),f(),this.setAttribute("position",new Ct(s,3)),this.setAttribute("normal",new Ct(s.slice(),3)),this.setAttribute("uv",new Ct(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const x=new N,y=new N,C=new N;for(let T=0;T<n.length;T+=3)p(n[T+0],x),p(n[T+1],y),p(n[T+2],C),l(x,y,C,v)}function l(v,x,y,C){const T=C+1,R=[];for(let b=0;b<=T;b++){R[b]=[];const E=v.clone().lerp(y,b/T),M=x.clone().lerp(y,b/T),P=T-b;for(let O=0;O<=P;O++)O===0&&b===T?R[b][O]=E:R[b][O]=E.clone().lerp(M,O/P)}for(let b=0;b<T;b++)for(let E=0;E<2*(T-b)-1;E++){const M=Math.floor(E/2);E%2===0?(h(R[b][M+1]),h(R[b+1][M]),h(R[b][M])):(h(R[b][M+1]),h(R[b+1][M+1]),h(R[b+1][M]))}}function c(v){const x=new N;for(let y=0;y<s.length;y+=3)x.x=s[y+0],x.y=s[y+1],x.z=s[y+2],x.normalize().multiplyScalar(v),s[y+0]=x.x,s[y+1]=x.y,s[y+2]=x.z}function f(){const v=new N;for(let x=0;x<s.length;x+=3){v.x=s[x+0],v.y=s[x+1],v.z=s[x+2];const y=m(v)/2/Math.PI+.5,C=u(v)/Math.PI+.5;o.push(y,1-C)}_(),d()}function d(){for(let v=0;v<o.length;v+=6){const x=o[v+0],y=o[v+2],C=o[v+4],T=Math.max(x,y,C),R=Math.min(x,y,C);T>.9&&R<.1&&(x<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),C<.2&&(o[v+4]+=1))}}function h(v){s.push(v.x,v.y,v.z)}function p(v,x){const y=v*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function _(){const v=new N,x=new N,y=new N,C=new N,T=new xe,R=new xe,b=new xe;for(let E=0,M=0;E<s.length;E+=9,M+=6){v.set(s[E+0],s[E+1],s[E+2]),x.set(s[E+3],s[E+4],s[E+5]),y.set(s[E+6],s[E+7],s[E+8]),T.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),b.set(o[M+4],o[M+5]),C.copy(v).add(x).add(y).divideScalar(3);const P=m(C);g(T,M+0,v,P),g(R,M+2,x,P),g(b,M+4,y,P)}}function g(v,x,y,C){C<0&&v.x===1&&(o[x]=v.x-1),y.x===0&&y.z===0&&(o[x]=C/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function u(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pd(e.vertices,e.indices,e.radius,e.details)}}class di{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const f=i[r],h=i[r+1]-f,p=(o-f)/h;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new xe:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new N,r=[],s=[],o=[],a=new N,l=new vt;for(let p=0;p<=e;p++){const _=p/e;r[p]=this.getTangentAt(_,new N)}s[0]=new N,o[0]=new N;let c=Number.MAX_VALUE;const f=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);f<=c&&(c=f,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(qe(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(qe(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],p*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ld extends di{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new xe){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const f=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*f-p*d+this.aX,c=h*d+p*f+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class E1 extends Ld{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Dd(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,f,d){let h=(o-s)/c-(a-s)/(c+f)+(a-o)/f,p=(a-o)/f-(l-o)/(f+d)+(l-a)/d;h*=f,p*=f,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const ll=new N,Ru=new Dd,Cu=new Dd,bu=new Dd;class q0 extends di{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new N){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,f;this.closed||a>0?c=r[(a-1)%s]:(ll.subVectors(r[0],r[1]).add(r[0]),c=ll);const d=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?f=r[(a+2)%s]:(ll.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=ll),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(f),p);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),Ru.initNonuniformCatmullRom(c.x,d.x,h.x,f.x,_,g,m),Cu.initNonuniformCatmullRom(c.y,d.y,h.y,f.y,_,g,m),bu.initNonuniformCatmullRom(c.z,d.z,h.z,f.z,_,g,m)}else this.curveType==="catmullrom"&&(Ru.initCatmullRom(c.x,d.x,h.x,f.x,this.tension),Cu.initCatmullRom(c.y,d.y,h.y,f.y,this.tension),bu.initCatmullRom(c.z,d.z,h.z,f.z,this.tension));return i.set(Ru.calc(l),Cu.calc(l),bu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new N().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Tm(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function w1(t,e){const n=1-t;return n*n*e}function T1(t,e){return 2*(1-t)*t*e}function A1(t,e){return t*t*e}function zo(t,e,n,i){return w1(t,e)+T1(t,n)+A1(t,i)}function R1(t,e){const n=1-t;return n*n*n*e}function C1(t,e){const n=1-t;return 3*n*n*t*e}function b1(t,e){return 3*(1-t)*t*t*e}function P1(t,e){return t*t*t*e}function Bo(t,e,n,i,r){return R1(t,e)+C1(t,n)+b1(t,i)+P1(t,r)}class $0 extends di{constructor(e=new xe,n=new xe,i=new xe,r=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new xe){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Bo(e,r.x,s.x,o.x,a.x),Bo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class L1 extends di{constructor(e=new N,n=new N,i=new N,r=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new N){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Bo(e,r.x,s.x,o.x,a.x),Bo(e,r.y,s.y,o.y,a.y),Bo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class K0 extends di{constructor(e=new xe,n=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new xe){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new xe){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class D1 extends di{constructor(e=new N,n=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new N){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new N){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Z0 extends di{constructor(e=new xe,n=new xe,i=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new xe){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(zo(e,r.x,s.x,o.x),zo(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class N1 extends di{constructor(e=new N,n=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new N){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(zo(e,r.x,s.x,o.x),zo(e,r.y,s.y,o.y),zo(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class J0 extends di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new xe){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],f=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(Tm(a,l.x,c.x,f.x,d.x),Tm(a,l.y,c.y,f.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new xe().fromArray(r))}return this}}var yh=Object.freeze({__proto__:null,ArcCurve:E1,CatmullRomCurve3:q0,CubicBezierCurve:$0,CubicBezierCurve3:L1,EllipseCurve:Ld,LineCurve:K0,LineCurve3:D1,QuadraticBezierCurve:Z0,QuadraticBezierCurve3:N1,SplineCurve:J0});class I1 extends di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yh[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const f=l[c];i&&i.equals(f)||(n.push(f),i=f)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new yh[r.type]().fromJSON(r))}return this}}class Am extends I1{constructor(e){super(),this.type="Path",this.currentPoint=new xe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new K0(this.currentPoint.clone(),new xe(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new Z0(this.currentPoint.clone(),new xe(e,n),new xe(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new $0(this.currentPoint.clone(),new xe(e,n),new xe(i,r),new xe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new J0(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+c,n+f,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new Ld(e,n,i,r,s,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const f=c.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Q0 extends Am{constructor(e){super(e),this.uuid=$r(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new Am().fromJSON(r))}return this}}function U1(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=ev(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=B1(t,e,s,n)),t.length>80*n){a=1/0,l=1/0;let f=-1/0,d=-1/0;for(let h=n;h<r;h+=n){const p=t[h],_=t[h+1];p<a&&(a=p),_<l&&(l=_),p>f&&(f=p),_>d&&(d=_)}c=Math.max(f-a,d-l),c=c!==0?32767/c:0}return fa(s,o,n,a,l,c,0),o}function ev(t,e,n,i,r){let s;if(r===Z1(t,e,n,i)>0)for(let o=e;o<n;o+=i)s=Rm(o/i|0,t[o],t[o+1],s);else for(let o=n-i;o>=e;o-=i)s=Rm(o/i|0,t[o],t[o+1],s);return s&&Ks(s,s.next)&&(da(s),s=s.next),s}function Wr(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Ks(n,n.next)||Mt(n.prev,n,n.next)===0)){if(da(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function fa(t,e,n,i,r,s,o){if(!t)return;!o&&s&&X1(t,i,r,s);let a=t;for(;t.prev!==t.next;){const l=t.prev,c=t.next;if(s?O1(t,i,r,s):F1(t)){e.push(l.i,t.i,c.i),da(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=k1(Wr(t),e),fa(t,e,n,i,r,s,2)):o===2&&z1(t,e,n,i,r,s):fa(Wr(t),e,n,i,r,s,1);break}}}function F1(t){const e=t.prev,n=t,i=t.next;if(Mt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,f=Math.min(r,s,o),d=Math.min(a,l,c),h=Math.max(r,s,o),p=Math.max(a,l,c);let _=i.next;for(;_!==e;){if(_.x>=f&&_.x<=h&&_.y>=d&&_.y<=p&&Ao(r,a,s,l,o,c,_.x,_.y)&&Mt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function O1(t,e,n,i){const r=t.prev,s=t,o=t.next;if(Mt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,f=r.y,d=s.y,h=o.y,p=Math.min(a,l,c),_=Math.min(f,d,h),g=Math.max(a,l,c),m=Math.max(f,d,h),u=Sh(p,_,e,n,i),v=Sh(g,m,e,n,i);let x=t.prevZ,y=t.nextZ;for(;x&&x.z>=u&&y&&y.z<=v;){if(x.x>=p&&x.x<=g&&x.y>=_&&x.y<=m&&x!==r&&x!==o&&Ao(a,f,l,d,c,h,x.x,x.y)&&Mt(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=p&&y.x<=g&&y.y>=_&&y.y<=m&&y!==r&&y!==o&&Ao(a,f,l,d,c,h,y.x,y.y)&&Mt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=u;){if(x.x>=p&&x.x<=g&&x.y>=_&&x.y<=m&&x!==r&&x!==o&&Ao(a,f,l,d,c,h,x.x,x.y)&&Mt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=v;){if(y.x>=p&&y.x<=g&&y.y>=_&&y.y<=m&&y!==r&&y!==o&&Ao(a,f,l,d,c,h,y.x,y.y)&&Mt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function k1(t,e){let n=t;do{const i=n.prev,r=n.next.next;!Ks(i,r)&&nv(i,n,n.next,r)&&ha(i,r)&&ha(r,i)&&(e.push(i.i,n.i,r.i),da(n),da(n.next),n=t=r),n=n.next}while(n!==t);return Wr(n)}function z1(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&q1(o,a)){let l=iv(o,a);o=Wr(o,o.next),l=Wr(l,l.next),fa(o,e,n,i,r,s,0),fa(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function B1(t,e,n,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=ev(t,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(Y1(c))}r.sort(H1);for(let s=0;s<r.length;s++)n=V1(r[s],n);return n}function H1(t,e){let n=t.x-e.x;if(n===0&&(n=t.y-e.y,n===0)){const i=(t.next.y-t.y)/(t.next.x-t.x),r=(e.next.y-e.y)/(e.next.x-e.x);n=i-r}return n}function V1(t,e){const n=G1(t,e);if(!n)return e;const i=iv(n,t);return Wr(i,i.next),Wr(n,n.next)}function G1(t,e){let n=e;const i=t.x,r=t.y;let s=-1/0,o;if(Ks(t,n))return n;do{if(Ks(t,n.next))return n.next;if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){const d=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=i&&d>s&&(s=d,o=n.x<n.next.x?n:n.next,d===i))return o}n=n.next}while(n!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let f=1/0;n=o;do{if(i>=n.x&&n.x>=l&&i!==n.x&&tv(r<c?i:s,r,l,c,r<c?s:i,r,n.x,n.y)){const d=Math.abs(r-n.y)/(i-n.x);ha(n,t)&&(d<f||d===f&&(n.x>o.x||n.x===o.x&&W1(o,n)))&&(o=n,f=d)}n=n.next}while(n!==a);return o}function W1(t,e){return Mt(t.prev,t,e.prev)<0&&Mt(e.next,t,t.next)<0}function X1(t,e,n,i){let r=t;do r.z===0&&(r.z=Sh(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,j1(r)}function j1(t){let e,n=1;do{let i=t,r;t=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<n&&(a++,o=o.nextZ,!!o);c++);let l=n;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;i=o}s.nextZ=null,n*=2}while(e>1);return t}function Sh(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function Y1(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function tv(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function Ao(t,e,n,i,r,s,o,a){return!(t===o&&e===a)&&tv(t,e,n,i,r,s,o,a)}function q1(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!$1(t,e)&&(ha(t,e)&&ha(e,t)&&K1(t,e)&&(Mt(t.prev,t,e.prev)||Mt(t,e.prev,e))||Ks(t,e)&&Mt(t.prev,t,t.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Ks(t,e){return t.x===e.x&&t.y===e.y}function nv(t,e,n,i){const r=ul(Mt(t,e,n)),s=ul(Mt(t,e,i)),o=ul(Mt(n,i,t)),a=ul(Mt(n,i,e));return!!(r!==s&&o!==a||r===0&&cl(t,n,e)||s===0&&cl(t,i,e)||o===0&&cl(n,t,i)||a===0&&cl(n,e,i))}function cl(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function ul(t){return t>0?1:t<0?-1:0}function $1(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&nv(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function ha(t,e){return Mt(t.prev,t,t.next)<0?Mt(t,e,t.next)>=0&&Mt(t,t.prev,e)>=0:Mt(t,e,t.prev)<0||Mt(t,t.next,e)<0}function K1(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function iv(t,e){const n=Mh(t.i,t.x,t.y),i=Mh(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function Rm(t,e,n,i){const r=Mh(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function da(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Mh(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Z1(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class J1{static triangulate(e,n,i=2){return U1(e,n,i)}}class Rs{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Rs.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];Cm(e),bm(i,e);let o=e.length;n.forEach(Cm);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,bm(i,n[l]);const a=J1.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Cm(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function bm(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Nd extends dn{constructor(e=new Q0([new xe(.5,.5),new xe(-.5,.5),new xe(-.5,-.5),new xe(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Ct(r,3)),this.setAttribute("uv",new Ct(s,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,f=n.steps!==void 0?n.steps:1,d=n.depth!==void 0?n.depth:1;let h=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,_=n.bevelSize!==void 0?n.bevelSize:p-.1,g=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3;const u=n.extrudePath,v=n.UVGenerator!==void 0?n.UVGenerator:Q1;let x,y=!1,C,T,R,b;u&&(x=u.getSpacedPoints(f),y=!0,h=!1,C=u.computeFrenetFrames(f,!1),T=new N,R=new N,b=new N),h||(m=0,p=0,_=0,g=0);const E=a.extractPoints(c);let M=E.shape;const P=E.holes;if(!Rs.isClockWise(M)){M=M.reverse();for(let ue=0,re=P.length;ue<re;ue++){const ee=P[ue];Rs.isClockWise(ee)&&(P[ue]=ee.reverse())}}function W(ue){const ee=10000000000000001e-36;let H=ue[0];for(let ne=1;ne<=ue.length;ne++){const Q=ne%ue.length,V=ue[Q],we=V.x-H.x,Fe=V.y-H.y,A=we*we+Fe*Fe,S=Math.max(Math.abs(V.x),Math.abs(V.y),Math.abs(H.x),Math.abs(H.y)),I=ee*S*S;if(A<=I){ue.splice(Q,1),ne--;continue}H=V}}W(M),P.forEach(W);const q=P.length,z=M;for(let ue=0;ue<q;ue++){const re=P[ue];M=M.concat(re)}function Y(ue,re,ee){return re||console.error("THREE.ExtrudeGeometry: vec does not exist"),ue.clone().addScaledVector(re,ee)}const te=M.length;function U(ue,re,ee){let H,ne,Q;const V=ue.x-re.x,we=ue.y-re.y,Fe=ee.x-ue.x,A=ee.y-ue.y,S=V*V+we*we,I=V*A-we*Fe;if(Math.abs(I)>Number.EPSILON){const B=Math.sqrt(S),se=Math.sqrt(Fe*Fe+A*A),G=re.x-we/B,Re=re.y+V/B,he=ee.x-A/se,ge=ee.y+Fe/se,Ee=((he-G)*A-(ge-Re)*Fe)/(V*A-we*Fe);H=G+V*Ee-ue.x,ne=Re+we*Ee-ue.y;const J=H*H+ne*ne;if(J<=2)return new xe(H,ne);Q=Math.sqrt(J/2)}else{let B=!1;V>Number.EPSILON?Fe>Number.EPSILON&&(B=!0):V<-Number.EPSILON?Fe<-Number.EPSILON&&(B=!0):Math.sign(we)===Math.sign(A)&&(B=!0),B?(H=-we,ne=V,Q=Math.sqrt(S)):(H=V,ne=we,Q=Math.sqrt(S/2))}return new xe(H/Q,ne/Q)}const K=[];for(let ue=0,re=z.length,ee=re-1,H=ue+1;ue<re;ue++,ee++,H++)ee===re&&(ee=0),H===re&&(H=0),K[ue]=U(z[ue],z[ee],z[H]);const ie=[];let ye,Ne=K.concat();for(let ue=0,re=q;ue<re;ue++){const ee=P[ue];ye=[];for(let H=0,ne=ee.length,Q=ne-1,V=H+1;H<ne;H++,Q++,V++)Q===ne&&(Q=0),V===ne&&(V=0),ye[H]=U(ee[H],ee[Q],ee[V]);ie.push(ye),Ne=Ne.concat(ye)}let We;if(m===0)We=Rs.triangulateShape(z,P);else{const ue=[],re=[];for(let ee=0;ee<m;ee++){const H=ee/m,ne=p*Math.cos(H*Math.PI/2),Q=_*Math.sin(H*Math.PI/2)+g;for(let V=0,we=z.length;V<we;V++){const Fe=Y(z[V],K[V],Q);Oe(Fe.x,Fe.y,-ne),H===0&&ue.push(Fe)}for(let V=0,we=q;V<we;V++){const Fe=P[V];ye=ie[V];const A=[];for(let S=0,I=Fe.length;S<I;S++){const B=Y(Fe[S],ye[S],Q);Oe(B.x,B.y,-ne),H===0&&A.push(B)}H===0&&re.push(A)}}We=Rs.triangulateShape(ue,re)}const $e=We.length,Xe=_+g;for(let ue=0;ue<te;ue++){const re=h?Y(M[ue],Ne[ue],Xe):M[ue];y?(R.copy(C.normals[0]).multiplyScalar(re.x),T.copy(C.binormals[0]).multiplyScalar(re.y),b.copy(x[0]).add(R).add(T),Oe(b.x,b.y,b.z)):Oe(re.x,re.y,0)}for(let ue=1;ue<=f;ue++)for(let re=0;re<te;re++){const ee=h?Y(M[re],Ne[re],Xe):M[re];y?(R.copy(C.normals[ue]).multiplyScalar(ee.x),T.copy(C.binormals[ue]).multiplyScalar(ee.y),b.copy(x[ue]).add(R).add(T),Oe(b.x,b.y,b.z)):Oe(ee.x,ee.y,d/f*ue)}for(let ue=m-1;ue>=0;ue--){const re=ue/m,ee=p*Math.cos(re*Math.PI/2),H=_*Math.sin(re*Math.PI/2)+g;for(let ne=0,Q=z.length;ne<Q;ne++){const V=Y(z[ne],K[ne],H);Oe(V.x,V.y,d+ee)}for(let ne=0,Q=P.length;ne<Q;ne++){const V=P[ne];ye=ie[ne];for(let we=0,Fe=V.length;we<Fe;we++){const A=Y(V[we],ye[we],H);y?Oe(A.x,A.y+x[f-1].y,x[f-1].x+ee):Oe(A.x,A.y,d+ee)}}}Z(),le();function Z(){const ue=r.length/3;if(h){let re=0,ee=te*re;for(let H=0;H<$e;H++){const ne=We[H];Ie(ne[2]+ee,ne[1]+ee,ne[0]+ee)}re=f+m*2,ee=te*re;for(let H=0;H<$e;H++){const ne=We[H];Ie(ne[0]+ee,ne[1]+ee,ne[2]+ee)}}else{for(let re=0;re<$e;re++){const ee=We[re];Ie(ee[2],ee[1],ee[0])}for(let re=0;re<$e;re++){const ee=We[re];Ie(ee[0]+te*f,ee[1]+te*f,ee[2]+te*f)}}i.addGroup(ue,r.length/3-ue,0)}function le(){const ue=r.length/3;let re=0;Pe(z,re),re+=z.length;for(let ee=0,H=P.length;ee<H;ee++){const ne=P[ee];Pe(ne,re),re+=ne.length}i.addGroup(ue,r.length/3-ue,1)}function Pe(ue,re){let ee=ue.length;for(;--ee>=0;){const H=ee;let ne=ee-1;ne<0&&(ne=ue.length-1);for(let Q=0,V=f+m*2;Q<V;Q++){const we=te*Q,Fe=te*(Q+1),A=re+H+we,S=re+ne+we,I=re+ne+Fe,B=re+H+Fe;Ke(A,S,I,B)}}}function Oe(ue,re,ee){l.push(ue),l.push(re),l.push(ee)}function Ie(ue,re,ee){st(ue),st(re),st(ee);const H=r.length/3,ne=v.generateTopUV(i,r,H-3,H-2,H-1);L(ne[0]),L(ne[1]),L(ne[2])}function Ke(ue,re,ee,H){st(ue),st(re),st(H),st(re),st(ee),st(H);const ne=r.length/3,Q=v.generateSideWallUV(i,r,ne-6,ne-3,ne-2,ne-1);L(Q[0]),L(Q[1]),L(Q[3]),L(Q[1]),L(Q[2]),L(Q[3])}function st(ue){r.push(l[ue*3+0]),r.push(l[ue*3+1]),r.push(l[ue*3+2])}function L(ue){s.push(ue.x),s.push(ue.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return eM(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new yh[r.type]().fromJSON(r)),new Nd(i,e.options)}}const Q1={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],f=e[r*3+1];return[new xe(s,o),new xe(a,l),new xe(c,f)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],f=e[i*3+1],d=e[i*3+2],h=e[r*3],p=e[r*3+1],_=e[r*3+2],g=e[s*3],m=e[s*3+1],u=e[s*3+2];return Math.abs(a-f)<Math.abs(o-c)?[new xe(o,1-l),new xe(c,1-d),new xe(h,1-_),new xe(g,1-u)]:[new xe(a,1-l),new xe(f,1-d),new xe(p,1-_),new xe(m,1-u)]}};function eM(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class uc extends Pd{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new uc(e.radius,e.detail)}}class Ur extends dn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,d=e/a,h=n/l,p=[],_=[],g=[],m=[];for(let u=0;u<f;u++){const v=u*h-o;for(let x=0;x<c;x++){const y=x*d-s;_.push(y,-v,0),g.push(0,0,1),m.push(x/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){const x=v+c*u,y=v+c*(u+1),C=v+1+c*(u+1),T=v+1+c*u;p.push(x,y,T),p.push(y,C,T)}this.setIndex(p),this.setAttribute("position",new Ct(_,3)),this.setAttribute("normal",new Ct(g,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.width,e.height,e.widthSegments,e.heightSegments)}}class Id extends dn{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],f=[];let d=e;const h=(n-e)/r,p=new N,_=new xe;for(let g=0;g<=r;g++){for(let m=0;m<=i;m++){const u=s+m/i*o;p.x=d*Math.cos(u),p.y=d*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/n+1)/2,_.y=(p.y/n+1)/2,f.push(_.x,_.y)}d+=h}for(let g=0;g<r;g++){const m=g*(i+1);for(let u=0;u<i;u++){const v=u+m,x=v,y=v+i+1,C=v+i+2,T=v+1;a.push(x,y,T),a.push(y,C,T)}}this.setIndex(a),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(c,3)),this.setAttribute("uv",new Ct(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Id(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ho extends dn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],f=new N,d=new N,h=new N;for(let p=0;p<=i;p++)for(let _=0;_<=r;_++){const g=_/r*s,m=p/i*Math.PI*2;d.x=(e+n*Math.cos(m))*Math.cos(g),d.y=(e+n*Math.cos(m))*Math.sin(g),d.z=n*Math.sin(m),a.push(d.x,d.y,d.z),f.x=e*Math.cos(g),f.y=e*Math.sin(g),h.subVectors(d,f).normalize(),l.push(h.x,h.y,h.z),c.push(_/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=r;_++){const g=(r+1)*p+_-1,m=(r+1)*(p-1)+_-1,u=(r+1)*(p-1)+_,v=(r+1)*p+_;o.push(g,m,v),o.push(m,u,v)}this.setIndex(o),this.setAttribute("position",new Ct(a,3)),this.setAttribute("normal",new Ct(l,3)),this.setAttribute("uv",new Ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ti extends to{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=I0,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tM extends to{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nM extends to{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ud extends Vt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Pu=new vt,Pm=new N,Lm=new N;class rv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.mapType=fi,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bd,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Pm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Pm),Lm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Lm),n.updateMatrixWorld(),Pu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pu,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Pu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Dm=new vt,So=new N,Lu=new N;class iM extends rv{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xe(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),So.setFromMatrixPosition(e.matrixWorld),i.position.copy(So),Lu.copy(i.position),Lu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Lu),i.updateMatrixWorld(),r.makeTranslation(-So.x,-So.y,-So.z),Dm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dm,i.coordinateSystem,i.reversedDepth)}}class Nm extends Ud{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new iM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class sv extends G0{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class rM extends rv{constructor(){super(new sv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sM extends Ud{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new rM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class oM extends Ud{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class aM extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Im{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(qe(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class lM extends qr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Um(t,e,n,i){const r=cM(i);switch(n){case P0:return t*e;case D0:return t*e/r.components*r.byteLength;case Md:return t*e/r.components*r.byteLength;case N0:return t*e*2/r.components*r.byteLength;case Ed:return t*e*2/r.components*r.byteLength;case L0:return t*e*3/r.components*r.byteLength;case qn:return t*e*4/r.components*r.byteLength;case wd:return t*e*4/r.components*r.byteLength;case Rl:case Cl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case bl:case Pl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Yf:case $f:return Math.max(t,16)*Math.max(e,8)/4;case jf:case qf:return Math.max(t,8)*Math.max(e,8)/2;case Kf:case Zf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Jf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Qf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case eh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case th:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case nh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ih:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case rh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case sh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case oh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ah:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case lh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case ch:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case uh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case fh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case hh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case dh:case ph:case mh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case _h:case gh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case vh:case xh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function cM(t){switch(t){case fi:case A0:return{byteLength:1,components:1};case sa:case R0:case xa:return{byteLength:2,components:1};case yd:case Sd:return{byteLength:2,components:4};case Hr:case xd:case Ti:return{byteLength:4,components:1};case C0:case b0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ov(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function uM(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const f=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,f);else{d.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<d.length;p++){const _=d[h],g=d[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++h,d[h]=g)}d.length=h+1;for(let p=0,_=d.length;p<_;p++){const g=d[p];t.bufferSubData(c,g.start*f.BYTES_PER_ELEMENT,f,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var fM=`#ifdef USE_ALPHAHASH
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
}`,Ye={alphahash_fragment:fM,alphahash_pars_fragment:hM,alphamap_fragment:dM,alphamap_pars_fragment:pM,alphatest_fragment:mM,alphatest_pars_fragment:_M,aomap_fragment:gM,aomap_pars_fragment:vM,batching_pars_vertex:xM,batching_vertex:yM,begin_vertex:SM,beginnormal_vertex:MM,bsdfs:EM,iridescence_fragment:wM,bumpmap_pars_fragment:TM,clipping_planes_fragment:AM,clipping_planes_pars_fragment:RM,clipping_planes_pars_vertex:CM,clipping_planes_vertex:bM,color_fragment:PM,color_pars_fragment:LM,color_pars_vertex:DM,color_vertex:NM,common:IM,cube_uv_reflection_fragment:UM,defaultnormal_vertex:FM,displacementmap_pars_vertex:OM,displacementmap_vertex:kM,emissivemap_fragment:zM,emissivemap_pars_fragment:BM,colorspace_fragment:HM,colorspace_pars_fragment:VM,envmap_fragment:GM,envmap_common_pars_fragment:WM,envmap_pars_fragment:XM,envmap_pars_vertex:jM,envmap_physical_pars_fragment:iE,envmap_vertex:YM,fog_vertex:qM,fog_pars_vertex:$M,fog_fragment:KM,fog_pars_fragment:ZM,gradientmap_pars_fragment:JM,lightmap_pars_fragment:QM,lights_lambert_fragment:eE,lights_lambert_pars_fragment:tE,lights_pars_begin:nE,lights_toon_fragment:rE,lights_toon_pars_fragment:sE,lights_phong_fragment:oE,lights_phong_pars_fragment:aE,lights_physical_fragment:lE,lights_physical_pars_fragment:cE,lights_fragment_begin:uE,lights_fragment_maps:fE,lights_fragment_end:hE,logdepthbuf_fragment:dE,logdepthbuf_pars_fragment:pE,logdepthbuf_pars_vertex:mE,logdepthbuf_vertex:_E,map_fragment:gE,map_pars_fragment:vE,map_particle_fragment:xE,map_particle_pars_fragment:yE,metalnessmap_fragment:SE,metalnessmap_pars_fragment:ME,morphinstance_vertex:EE,morphcolor_vertex:wE,morphnormal_vertex:TE,morphtarget_pars_vertex:AE,morphtarget_vertex:RE,normal_fragment_begin:CE,normal_fragment_maps:bE,normal_pars_fragment:PE,normal_pars_vertex:LE,normal_vertex:DE,normalmap_pars_fragment:NE,clearcoat_normal_fragment_begin:IE,clearcoat_normal_fragment_maps:UE,clearcoat_pars_fragment:FE,iridescence_pars_fragment:OE,opaque_fragment:kE,packing:zE,premultiplied_alpha_fragment:BE,project_vertex:HE,dithering_fragment:VE,dithering_pars_fragment:GE,roughnessmap_fragment:WE,roughnessmap_pars_fragment:XE,shadowmap_pars_fragment:jE,shadowmap_pars_vertex:YE,shadowmap_vertex:qE,shadowmask_pars_fragment:$E,skinbase_vertex:KE,skinning_pars_vertex:ZE,skinning_vertex:JE,skinnormal_vertex:QE,specularmap_fragment:ew,specularmap_pars_fragment:tw,tonemapping_fragment:nw,tonemapping_pars_fragment:iw,transmission_fragment:rw,transmission_pars_fragment:sw,uv_pars_fragment:ow,uv_pars_vertex:aw,uv_vertex:lw,worldpos_vertex:cw,background_vert:uw,background_frag:fw,backgroundCube_vert:hw,backgroundCube_frag:dw,cube_vert:pw,cube_frag:mw,depth_vert:_w,depth_frag:gw,distanceRGBA_vert:vw,distanceRGBA_frag:xw,equirect_vert:yw,equirect_frag:Sw,linedashed_vert:Mw,linedashed_frag:Ew,meshbasic_vert:ww,meshbasic_frag:Tw,meshlambert_vert:Aw,meshlambert_frag:Rw,meshmatcap_vert:Cw,meshmatcap_frag:bw,meshnormal_vert:Pw,meshnormal_frag:Lw,meshphong_vert:Dw,meshphong_frag:Nw,meshphysical_vert:Iw,meshphysical_frag:Uw,meshtoon_vert:Fw,meshtoon_frag:Ow,points_vert:kw,points_frag:zw,shadow_vert:Bw,shadow_frag:Hw,sprite_vert:Vw,sprite_frag:Gw},Te={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},ii={basic:{uniforms:Jt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Jt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Jt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Jt([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Jt([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Jt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Jt([Te.points,Te.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Jt([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Jt([Te.common,Te.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Jt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Jt([Te.sprite,Te.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Jt([Te.common,Te.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Jt([Te.lights,Te.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};ii.physical={uniforms:Jt([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const fl={r:0,b:0,g:0},Sr=new hi,Ww=new vt;function Xw(t,e,n,i,r,s,o){const a=new Qe(0);let l=s===!0?0:1,c,f,d=null,h=0,p=null;function _(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?n:e).get(y)),y}function g(x){let y=!1;const C=_(x);C===null?u(a,l):C&&C.isColor&&(u(C,1),y=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(x,y){const C=_(y);C&&(C.isCubeTexture||C.mapping===Rc)?(f===void 0&&(f=new At(new no(1,1,1),new ur({name:"BackgroundCubeMaterial",uniforms:$s(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(T,R,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Sr.copy(y.backgroundRotation),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),f.material.uniforms.envMap.value=C,f.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Ww.makeRotationFromEuler(Sr)),f.material.toneMapped=it.getTransfer(C.colorSpace)!==lt,(d!==C||h!==C.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,d=C,h=C.version,p=t.toneMapping),f.layers.enableAll(),x.unshift(f,f.geometry,f.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new At(new Ur(2,2),new ur({name:"BackgroundMaterial",uniforms:$s(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=it.getTransfer(C.colorSpace)!==lt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||h!==C.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=C,h=C.version,p=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function u(x,y){x.getRGB(fl,V0(t)),i.buffers.color.setClear(fl.r,fl.g,fl.b,y,o)}function v(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),l=y,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,u(a,l)},render:g,addToRenderList:m,dispose:v}}function jw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(M,P,O,W,q){let z=!1;const Y=d(W,O,P);s!==Y&&(s=Y,c(s.object)),z=p(M,W,O,q),z&&_(M,W,O,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,y(M,P,O,W),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function f(M){return t.deleteVertexArray(M)}function d(M,P,O){const W=O.wireframe===!0;let q=i[M.id];q===void 0&&(q={},i[M.id]=q);let z=q[P.id];z===void 0&&(z={},q[P.id]=z);let Y=z[W];return Y===void 0&&(Y=h(l()),z[W]=Y),Y}function h(M){const P=[],O=[],W=[];for(let q=0;q<n;q++)P[q]=0,O[q]=0,W[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:W,object:M,attributes:{},index:null}}function p(M,P,O,W){const q=s.attributes,z=P.attributes;let Y=0;const te=O.getAttributes();for(const U in te)if(te[U].location>=0){const ie=q[U];let ye=z[U];if(ye===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(ye=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(ye=M.instanceColor)),ie===void 0||ie.attribute!==ye||ye&&ie.data!==ye.data)return!0;Y++}return s.attributesNum!==Y||s.index!==W}function _(M,P,O,W){const q={},z=P.attributes;let Y=0;const te=O.getAttributes();for(const U in te)if(te[U].location>=0){let ie=z[U];ie===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor));const ye={};ye.attribute=ie,ie&&ie.data&&(ye.data=ie.data),q[U]=ye,Y++}s.attributes=q,s.attributesNum=Y,s.index=W}function g(){const M=s.newAttributes;for(let P=0,O=M.length;P<O;P++)M[P]=0}function m(M){u(M,0)}function u(M,P){const O=s.newAttributes,W=s.enabledAttributes,q=s.attributeDivisors;O[M]=1,W[M]===0&&(t.enableVertexAttribArray(M),W[M]=1),q[M]!==P&&(t.vertexAttribDivisor(M,P),q[M]=P)}function v(){const M=s.newAttributes,P=s.enabledAttributes;for(let O=0,W=P.length;O<W;O++)P[O]!==M[O]&&(t.disableVertexAttribArray(O),P[O]=0)}function x(M,P,O,W,q,z,Y){Y===!0?t.vertexAttribIPointer(M,P,O,q,z):t.vertexAttribPointer(M,P,O,W,q,z)}function y(M,P,O,W){g();const q=W.attributes,z=O.getAttributes(),Y=P.defaultAttributeValues;for(const te in z){const U=z[te];if(U.location>=0){let K=q[te];if(K===void 0&&(te==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),te==="instanceColor"&&M.instanceColor&&(K=M.instanceColor)),K!==void 0){const ie=K.normalized,ye=K.itemSize,Ne=e.get(K);if(Ne===void 0)continue;const We=Ne.buffer,$e=Ne.type,Xe=Ne.bytesPerElement,Z=$e===t.INT||$e===t.UNSIGNED_INT||K.gpuType===xd;if(K.isInterleavedBufferAttribute){const le=K.data,Pe=le.stride,Oe=K.offset;if(le.isInstancedInterleavedBuffer){for(let Ie=0;Ie<U.locationSize;Ie++)u(U.location+Ie,le.meshPerAttribute);M.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ie=0;Ie<U.locationSize;Ie++)m(U.location+Ie);t.bindBuffer(t.ARRAY_BUFFER,We);for(let Ie=0;Ie<U.locationSize;Ie++)x(U.location+Ie,ye/U.locationSize,$e,ie,Pe*Xe,(Oe+ye/U.locationSize*Ie)*Xe,Z)}else{if(K.isInstancedBufferAttribute){for(let le=0;le<U.locationSize;le++)u(U.location+le,K.meshPerAttribute);M.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let le=0;le<U.locationSize;le++)m(U.location+le);t.bindBuffer(t.ARRAY_BUFFER,We);for(let le=0;le<U.locationSize;le++)x(U.location+le,ye/U.locationSize,$e,ie,ye*Xe,ye/U.locationSize*le*Xe,Z)}}else if(Y!==void 0){const ie=Y[te];if(ie!==void 0)switch(ie.length){case 2:t.vertexAttrib2fv(U.location,ie);break;case 3:t.vertexAttrib3fv(U.location,ie);break;case 4:t.vertexAttrib4fv(U.location,ie);break;default:t.vertexAttrib1fv(U.location,ie)}}}}v()}function C(){b();for(const M in i){const P=i[M];for(const O in P){const W=P[O];for(const q in W)f(W[q].object),delete W[q];delete P[O]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;const P=i[M.id];for(const O in P){const W=P[O];for(const q in W)f(W[q].object),delete W[q];delete P[O]}delete i[M.id]}function R(M){for(const P in i){const O=i[P];if(O[M.id]===void 0)continue;const W=O[M.id];for(const q in W)f(W[q].object),delete W[q];delete O[M.id]}}function b(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function Yw(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function o(c,f,d){d!==0&&(t.drawArraysInstanced(i,c,f,d),n.update(f,i,d))}function a(c,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,d);let p=0;for(let _=0;_<d;_++)p+=f[_];n.update(p,i,1)}function l(c,f,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],f[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,h,0,d);let _=0;for(let g=0;g<d;g++)_+=f[g]*h[g];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function qw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==qn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const b=R===xa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==fi&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Ti&&!b)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,T=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:C,maxSamples:T}}function $w(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Wi,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,p){const _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,u=t.get(d);if(!r||_===null||_.length===0||s&&!m)s?f(null):c();else{const v=s?0:i,x=v*4;let y=u.clippingState||null;l.value=y,y=f(_,h,x,p);for(let C=0;C!==x;++C)y[C]=n[C];u.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,p,_){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const u=p+g*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<u)&&(m=new Float32Array(u));for(let x=0,y=p;x!==g;++x,y+=4)o.copy(d[x]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Kw(t){let e=new WeakMap;function n(o,a){return a===Vf?o.mapping=js:a===Gf&&(o.mapping=Ys),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Vf||a===Gf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new _1(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Cs=4,Fm=[.125,.215,.35,.446,.526,.582],Rr=20,Du=new sv,Om=new Qe;let Nu=null,Iu=0,Uu=0,Fu=!1;const Tr=(1+Math.sqrt(5))/2,hs=1/Tr,km=[new N(-Tr,hs,0),new N(Tr,hs,0),new N(-hs,0,Tr),new N(hs,0,Tr),new N(0,Tr,-hs),new N(0,Tr,hs),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Zw=new N;class zm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=Zw}=s;Nu=this._renderer.getRenderTarget(),Iu=this._renderer.getActiveCubeFace(),Uu=this._renderer.getActiveMipmapLevel(),Fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nu,Iu,Uu),this._renderer.xr.enabled=Fu,e.scissorTest=!1,hl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===js||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nu=this._renderer.getRenderTarget(),Iu=this._renderer.getActiveCubeFace(),Uu=this._renderer.getActiveMipmapLevel(),Fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:oi,minFilter:oi,generateMipmaps:!1,type:xa,format:qn,colorSpace:qs,depthBuffer:!1},r=Bm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jw(s)),this._blurMaterial=Qw(s,e,n)}return r}_compileMaterial(e){const n=new At(this._lodPlanes[0],e);this._renderer.compile(n,Du)}_sceneToCubeUV(e,n,i,r,s){const l=new xn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(Om),d.toneMapping=or,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const g=new oc({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),m=new At(new no,g);let u=!1;const v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,u=!0):(g.color.copy(Om),u=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[x],s.y,s.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[x]));const C=this._cubeSize;hl(r,y*C,x>2?C:0,C,C),d.setRenderTarget(r),u&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=h,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===js||e.mapping===Ys;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new At(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;hl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Du)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=km[(r-s-1)%km.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new At(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Rr-1),g=s/_,m=isFinite(s)?1+Math.floor(f*g):Rr;m>Rr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Rr}`);const u=[];let v=0;for(let R=0;R<Rr;++R){const b=R/g,E=Math.exp(-b*b/2);u.push(E),R===0?v+=E:R<m&&(v+=2*E)}for(let R=0;R<u.length;R++)u[R]=u[R]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=_,h.mipInt.value=x-i;const y=this._sizeLods[r],C=3*y*(r>x-Cs?r-x+Cs:0),T=4*(this._cubeSize-y);hl(n,C,T,3*y,2*y),l.setRenderTarget(n),l.render(d,Du)}}function Jw(t){const e=[],n=[],i=[];let r=t;const s=t-Cs+1+Fm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Cs?l=Fm[o-t+Cs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,_=6,g=3,m=2,u=1,v=new Float32Array(g*_*p),x=new Float32Array(m*_*p),y=new Float32Array(u*_*p);for(let T=0;T<p;T++){const R=T%3*2/3-1,b=T>2?0:-1,E=[R,b,0,R+2/3,b,0,R+2/3,b+1,0,R,b,0,R+2/3,b+1,0,R,b+1,0];v.set(E,g*_*T),x.set(h,m*_*T);const M=[T,T,T,T,T,T];y.set(M,u*_*T)}const C=new dn;C.setAttribute("position",new ui(v,g)),C.setAttribute("uv",new ui(x,m)),C.setAttribute("faceIndex",new ui(y,u)),e.push(C),r>Cs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Bm(t,e,n){const i=new Gr(t,e,n);return i.texture.mapping=Rc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Qw(t,e,n){const i=new Float32Array(Rr),r=new N(0,1,0);return new ur({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fd(),fragmentShader:`

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
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Hm(){return new ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fd(),fragmentShader:`

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
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Vm(){return new ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Fd(){return`

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
	`}function eT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Vf||l===Gf,f=l===js||l===Ys;if(c||f){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new zm(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||f&&p&&r(p)?(n===null&&(n=new zm(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function tT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ua("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function nT(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(d){const h=[],p=d.index,_=d.attributes.position;let g=0;if(p!==null){const v=p.array;g=p.version;for(let x=0,y=v.length;x<y;x+=3){const C=v[x+0],T=v[x+1],R=v[x+2];h.push(C,T,T,R,R,C)}}else if(_!==void 0){const v=_.array;g=_.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const C=x+0,T=x+1,R=x+2;h.push(C,T,T,R,R,C)}}else return;const m=new(F0(h)?H0:B0)(h,1);m.version=g;const u=s.get(d);u&&e.remove(u),s.set(d,m)}function f(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function iT(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,h*o,_),n.update(p,i,_))}function f(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,_);let m=0;for(let u=0;u<_;u++)m+=p[u];n.update(m,i,1)}function d(h,p,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<h.length;u++)c(h[u]/o,p[u],g[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,g,0,_);let u=0;for(let v=0;v<_;v++)u+=p[v]*g[v];n.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function rT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function sT(t,e,n){const i=new WeakMap,r=new ut;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let M=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),g===!0&&(y=2),m===!0&&(y=3);let C=a.attributes.position.count*y,T=1;C>e.maxTextureSize&&(T=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const R=new Float32Array(C*T*4*d),b=new O0(R,C,T,d);b.type=Ti,b.needsUpdate=!0;const E=y*4;for(let P=0;P<d;P++){const O=u[P],W=v[P],q=x[P],z=C*T*4*P;for(let Y=0;Y<O.count;Y++){const te=Y*E;_===!0&&(r.fromBufferAttribute(O,Y),R[z+te+0]=r.x,R[z+te+1]=r.y,R[z+te+2]=r.z,R[z+te+3]=0),g===!0&&(r.fromBufferAttribute(W,Y),R[z+te+4]=r.x,R[z+te+5]=r.y,R[z+te+6]=r.z,R[z+te+7]=0),m===!0&&(r.fromBufferAttribute(q,Y),R[z+te+8]=r.x,R[z+te+9]=r.y,R[z+te+10]=r.z,R[z+te+11]=q.itemSize===4?r.w:1)}}h={count:d,texture:b,size:new xe(C,T)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function oT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const av=new tn,Gm=new j0(1,1),lv=new O0,cv=new QS,uv=new W0,Wm=[],Xm=[],jm=new Float32Array(16),Ym=new Float32Array(9),qm=new Float32Array(4);function io(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Wm[r];if(s===void 0&&(s=new Float32Array(r),Wm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ut(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ft(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function bc(t,e){let n=Xm[e];n===void 0&&(n=new Int32Array(e),Xm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function aT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function lT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2fv(this.addr,e),Ft(n,e)}}function cT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ut(n,e))return;t.uniform3fv(this.addr,e),Ft(n,e)}}function uT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4fv(this.addr,e),Ft(n,e)}}function fT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;qm.set(i),t.uniformMatrix2fv(this.addr,!1,qm),Ft(n,i)}}function hT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;Ym.set(i),t.uniformMatrix3fv(this.addr,!1,Ym),Ft(n,i)}}function dT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;jm.set(i),t.uniformMatrix4fv(this.addr,!1,jm),Ft(n,i)}}function pT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function mT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2iv(this.addr,e),Ft(n,e)}}function _T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3iv(this.addr,e),Ft(n,e)}}function gT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4iv(this.addr,e),Ft(n,e)}}function vT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function xT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2uiv(this.addr,e),Ft(n,e)}}function yT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3uiv(this.addr,e),Ft(n,e)}}function ST(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4uiv(this.addr,e),Ft(n,e)}}function MT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Gm.compareFunction=U0,s=Gm):s=av,n.setTexture2D(e||s,r)}function ET(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||cv,r)}function wT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||uv,r)}function TT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||lv,r)}function AT(t){switch(t){case 5126:return aT;case 35664:return lT;case 35665:return cT;case 35666:return uT;case 35674:return fT;case 35675:return hT;case 35676:return dT;case 5124:case 35670:return pT;case 35667:case 35671:return mT;case 35668:case 35672:return _T;case 35669:case 35673:return gT;case 5125:return vT;case 36294:return xT;case 36295:return yT;case 36296:return ST;case 35678:case 36198:case 36298:case 36306:case 35682:return MT;case 35679:case 36299:case 36307:return ET;case 35680:case 36300:case 36308:case 36293:return wT;case 36289:case 36303:case 36311:case 36292:return TT}}function RT(t,e){t.uniform1fv(this.addr,e)}function CT(t,e){const n=io(e,this.size,2);t.uniform2fv(this.addr,n)}function bT(t,e){const n=io(e,this.size,3);t.uniform3fv(this.addr,n)}function PT(t,e){const n=io(e,this.size,4);t.uniform4fv(this.addr,n)}function LT(t,e){const n=io(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function DT(t,e){const n=io(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function NT(t,e){const n=io(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function IT(t,e){t.uniform1iv(this.addr,e)}function UT(t,e){t.uniform2iv(this.addr,e)}function FT(t,e){t.uniform3iv(this.addr,e)}function OT(t,e){t.uniform4iv(this.addr,e)}function kT(t,e){t.uniform1uiv(this.addr,e)}function zT(t,e){t.uniform2uiv(this.addr,e)}function BT(t,e){t.uniform3uiv(this.addr,e)}function HT(t,e){t.uniform4uiv(this.addr,e)}function VT(t,e,n){const i=this.cache,r=e.length,s=bc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||av,s[o])}function GT(t,e,n){const i=this.cache,r=e.length,s=bc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||cv,s[o])}function WT(t,e,n){const i=this.cache,r=e.length,s=bc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||uv,s[o])}function XT(t,e,n){const i=this.cache,r=e.length,s=bc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||lv,s[o])}function jT(t){switch(t){case 5126:return RT;case 35664:return CT;case 35665:return bT;case 35666:return PT;case 35674:return LT;case 35675:return DT;case 35676:return NT;case 5124:case 35670:return IT;case 35667:case 35671:return UT;case 35668:case 35672:return FT;case 35669:case 35673:return OT;case 5125:return kT;case 36294:return zT;case 36295:return BT;case 36296:return HT;case 35678:case 36198:case 36298:case 36306:case 35682:return VT;case 35679:case 36299:case 36307:return GT;case 35680:case 36300:case 36308:case 36293:return WT;case 36289:case 36303:case 36311:case 36292:return XT}}class YT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=AT(n.type)}}class qT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=jT(n.type)}}class $T{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ou=/(\w+)(\])?(\[|\.)?/g;function $m(t,e){t.seq.push(e),t.map[e.id]=e}function KT(t,e,n){const i=t.name,r=i.length;for(Ou.lastIndex=0;;){const s=Ou.exec(i),o=Ou.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){$m(n,c===void 0?new YT(a,t,e):new qT(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new $T(a),$m(n,d)),n=d}}}class Dl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);KT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Km(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const ZT=37297;let JT=0;function QT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Zm=new je;function eA(t){it._getMatrix(Zm,it.workingColorSpace,t);const e=`mat3( ${Zm.elements.map(n=>n.toFixed(4))} )`;switch(it.getTransfer(t)){case ic:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Jm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+QT(t.getShaderSource(e),a)}else return s}function tA(t,e){const n=eA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function nA(t,e){let n;switch(e){case hS:n="Linear";break;case dS:n="Reinhard";break;case pS:n="Cineon";break;case mS:n="ACESFilmic";break;case gS:n="AgX";break;case vS:n="Neutral";break;case _S:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const dl=new N;function iA(){it.getLuminanceCoefficients(dl);const t=dl.x.toFixed(4),e=dl.y.toFixed(4),n=dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function sA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function oA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ro(t){return t!==""}function Qm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function e_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eh(t){return t.replace(aA,cA)}const lA=new Map;function cA(t,e){let n=Ye[e];if(n===void 0){const i=lA.get(e);if(i!==void 0)n=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Eh(n)}const uA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function t_(t){return t.replace(uA,fA)}function fA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function n_(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function hA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===M0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===E0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function dA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case js:case Ys:e="ENVMAP_TYPE_CUBE";break;case Rc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function mA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case w0:e="ENVMAP_BLENDING_MULTIPLY";break;case uS:e="ENVMAP_BLENDING_MIX";break;case fS:e="ENVMAP_BLENDING_ADD";break}return e}function _A(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function gA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=hA(n),c=dA(n),f=pA(n),d=mA(n),h=_A(n),p=rA(n),_=sA(s),g=r.createProgram();let m,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ro).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ro).join(`
`),u.length>0&&(u+=`
`)):(m=[n_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),u=[n_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==or?"#define TONE_MAPPING":"",n.toneMapping!==or?Ye.tonemapping_pars_fragment:"",n.toneMapping!==or?nA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,tA("linearToOutputTexel",n.outputColorSpace),iA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ro).join(`
`)),o=Eh(o),o=Qm(o,n),o=e_(o,n),a=Eh(a),a=Qm(a,n),a=e_(a,n),o=t_(o),a=t_(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===im?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===im?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=v+m+o,y=v+u+a,C=Km(r,r.VERTEX_SHADER,x),T=Km(r,r.FRAGMENT_SHADER,y);r.attachShader(g,C),r.attachShader(g,T),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function R(P){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(g)||"",W=r.getShaderInfoLog(C)||"",q=r.getShaderInfoLog(T)||"",z=O.trim(),Y=W.trim(),te=q.trim();let U=!0,K=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(U=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,C,T);else{const ie=Jm(r,C,"vertex"),ye=Jm(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+ie+`
`+ye)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(Y===""||te==="")&&(K=!1);K&&(P.diagnostics={runnable:U,programLog:z,vertexShader:{log:Y,prefix:m},fragmentShader:{log:te,prefix:u}})}r.deleteShader(C),r.deleteShader(T),b=new Dl(r,g),E=oA(r,g)}let b;this.getUniforms=function(){return b===void 0&&R(this),b};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(g,ZT)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=JT++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=T,this}let vA=0;class xA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new yA(e),n.set(e,i)),i}}class yA{constructor(e){this.id=vA++,this.code=e,this.usedTimes=0}}function SA(t,e,n,i,r,s,o){const a=new k0,l=new xA,c=new Set,f=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,P,O,W){const q=O.fog,z=W.geometry,Y=E.isMeshStandardMaterial?O.environment:null,te=(E.isMeshStandardMaterial?n:e).get(E.envMap||Y),U=te&&te.mapping===Rc?te.image.height:null,K=_[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const ie=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ye=ie!==void 0?ie.length:0;let Ne=0;z.morphAttributes.position!==void 0&&(Ne=1),z.morphAttributes.normal!==void 0&&(Ne=2),z.morphAttributes.color!==void 0&&(Ne=3);let We,$e,Xe,Z;if(K){const et=ii[K];We=et.vertexShader,$e=et.fragmentShader}else We=E.vertexShader,$e=E.fragmentShader,l.update(E),Xe=l.getVertexShaderID(E),Z=l.getFragmentShaderID(E);const le=t.getRenderTarget(),Pe=t.state.buffers.depth.getReversed(),Oe=W.isInstancedMesh===!0,Ie=W.isBatchedMesh===!0,Ke=!!E.map,st=!!E.matcap,L=!!te,ue=!!E.aoMap,re=!!E.lightMap,ee=!!E.bumpMap,H=!!E.normalMap,ne=!!E.displacementMap,Q=!!E.emissiveMap,V=!!E.metalnessMap,we=!!E.roughnessMap,Fe=E.anisotropy>0,A=E.clearcoat>0,S=E.dispersion>0,I=E.iridescence>0,B=E.sheen>0,se=E.transmission>0,G=Fe&&!!E.anisotropyMap,Re=A&&!!E.clearcoatMap,he=A&&!!E.clearcoatNormalMap,ge=A&&!!E.clearcoatRoughnessMap,Ee=I&&!!E.iridescenceMap,J=I&&!!E.iridescenceThicknessMap,de=B&&!!E.sheenColorMap,Me=B&&!!E.sheenRoughnessMap,pe=!!E.specularMap,ae=!!E.specularColorMap,be=!!E.specularIntensityMap,D=se&&!!E.transmissionMap,ce=se&&!!E.thicknessMap,me=!!E.gradientMap,Se=!!E.alphaMap,oe=E.alphaTest>0,$=!!E.alphaHash,Ce=!!E.extensions;let Ve=or;E.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Ve=t.toneMapping);const rt={shaderID:K,shaderType:E.type,shaderName:E.name,vertexShader:We,fragmentShader:$e,defines:E.defines,customVertexShaderID:Xe,customFragmentShaderID:Z,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ie,batchingColor:Ie&&W._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&W.instanceColor!==null,instancingMorph:Oe&&W.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:qs,alphaToCoverage:!!E.alphaToCoverage,map:Ke,matcap:st,envMap:L,envMapMode:L&&te.mapping,envMapCubeUVHeight:U,aoMap:ue,lightMap:re,bumpMap:ee,normalMap:H,displacementMap:h&&ne,emissiveMap:Q,normalMapObjectSpace:H&&E.normalMapType===MS,normalMapTangentSpace:H&&E.normalMapType===I0,metalnessMap:V,roughnessMap:we,anisotropy:Fe,anisotropyMap:G,clearcoat:A,clearcoatMap:Re,clearcoatNormalMap:he,clearcoatRoughnessMap:ge,dispersion:S,iridescence:I,iridescenceMap:Ee,iridescenceThicknessMap:J,sheen:B,sheenColorMap:de,sheenRoughnessMap:Me,specularMap:pe,specularColorMap:ae,specularIntensityMap:be,transmission:se,transmissionMap:D,thicknessMap:ce,gradientMap:me,opaque:E.transparent===!1&&E.blending===Fs&&E.alphaToCoverage===!1,alphaMap:Se,alphaTest:oe,alphaHash:$,combine:E.combine,mapUv:Ke&&g(E.map.channel),aoMapUv:ue&&g(E.aoMap.channel),lightMapUv:re&&g(E.lightMap.channel),bumpMapUv:ee&&g(E.bumpMap.channel),normalMapUv:H&&g(E.normalMap.channel),displacementMapUv:ne&&g(E.displacementMap.channel),emissiveMapUv:Q&&g(E.emissiveMap.channel),metalnessMapUv:V&&g(E.metalnessMap.channel),roughnessMapUv:we&&g(E.roughnessMap.channel),anisotropyMapUv:G&&g(E.anisotropyMap.channel),clearcoatMapUv:Re&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:he&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:J&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:de&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(E.sheenRoughnessMap.channel),specularMapUv:pe&&g(E.specularMap.channel),specularColorMapUv:ae&&g(E.specularColorMap.channel),specularIntensityMapUv:be&&g(E.specularIntensityMap.channel),transmissionMapUv:D&&g(E.transmissionMap.channel),thicknessMapUv:ce&&g(E.thicknessMap.channel),alphaMapUv:Se&&g(E.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(H||Fe),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!z.attributes.uv&&(Ke||Se),fog:!!q,useFog:E.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Pe,skinning:W.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Ne,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Ke&&E.map.isVideoTexture===!0&&it.getTransfer(E.map.colorSpace)===lt,decodeVideoTextureEmissive:Q&&E.emissiveMap.isVideoTexture===!0&&it.getTransfer(E.emissiveMap.colorSpace)===lt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Dn,flipSided:E.side===hn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ce&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&E.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return rt.vertexUv1s=c.has(1),rt.vertexUv2s=c.has(2),rt.vertexUv3s=c.has(3),c.clear(),rt}function u(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)M.push(P),M.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(v(M,E),x(M,E),M.push(t.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function v(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function x(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function y(E){const M=_[E.type];let P;if(M){const O=ii[M];P=h1.clone(O.uniforms)}else P=E.uniforms;return P}function C(E,M){let P;for(let O=0,W=f.length;O<W;O++){const q=f[O];if(q.cacheKey===M){P=q,++P.usedTimes;break}}return P===void 0&&(P=new gA(t,M,E,s),f.push(P)),P}function T(E){if(--E.usedTimes===0){const M=f.indexOf(E);f[M]=f[f.length-1],f.pop(),E.destroy()}}function R(E){l.remove(E)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:C,releaseProgram:T,releaseShaderCache:R,programs:f,dispose:b}}function MA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function EA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function i_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function r_(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,p,_,g,m){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:h,material:p,groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},t[e]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=p,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=g,u.group=m),e++,u}function a(d,h,p,_,g,m){const u=o(d,h,p,_,g,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(d,h,p,_,g,m){const u=o(d,h,p,_,g,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||EA),i.length>1&&i.sort(h||i_),r.length>1&&r.sort(h||i_)}function f(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function wA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new r_,t.set(i,[o])):r>=s.length?(o=new r_,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function TA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new N,color:new Qe};break;case"SpotLight":n={position:new N,direction:new N,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function AA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let RA=0;function CA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function bA(t){const e=new TA,n=AA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new vt,o=new vt;function a(c){let f=0,d=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,g=0,m=0,u=0,v=0,x=0,y=0,C=0,T=0,R=0;c.sort(CA);for(let E=0,M=c.length;E<M;E++){const P=c[E],O=P.color,W=P.intensity,q=P.distance,z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=O.r*W,d+=O.g*W,h+=O.b*W;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(P.sh.coefficients[Y],W);R++}else if(P.isDirectionalLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const te=P.shadow,U=n.get(P);U.shadowIntensity=te.intensity,U.shadowBias=te.bias,U.shadowNormalBias=te.normalBias,U.shadowRadius=te.radius,U.shadowMapSize=te.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=z,i.directionalShadowMatrix[p]=P.shadow.matrix,v++}i.directional[p]=Y,p++}else if(P.isSpotLight){const Y=e.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(O).multiplyScalar(W),Y.distance=q,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,i.spot[g]=Y;const te=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,te.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[g]=te.matrix,P.castShadow){const U=n.get(P);U.shadowIntensity=te.intensity,U.shadowBias=te.bias,U.shadowNormalBias=te.normalBias,U.shadowRadius=te.radius,U.shadowMapSize=te.mapSize,i.spotShadow[g]=U,i.spotShadowMap[g]=z,y++}g++}else if(P.isRectAreaLight){const Y=e.get(P);Y.color.copy(O).multiplyScalar(W),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=Y,m++}else if(P.isPointLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const te=P.shadow,U=n.get(P);U.shadowIntensity=te.intensity,U.shadowBias=te.bias,U.shadowNormalBias=te.normalBias,U.shadowRadius=te.radius,U.shadowMapSize=te.mapSize,U.shadowCameraNear=te.camera.near,U.shadowCameraFar=te.camera.far,i.pointShadow[_]=U,i.pointShadowMap[_]=z,i.pointShadowMatrix[_]=P.shadow.matrix,x++}i.point[_]=Y,_++}else if(P.isHemisphereLight){const Y=e.get(P);Y.skyColor.copy(P.color).multiplyScalar(W),Y.groundColor.copy(P.groundColor).multiplyScalar(W),i.hemi[u]=Y,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;const b=i.hash;(b.directionalLength!==p||b.pointLength!==_||b.spotLength!==g||b.rectAreaLength!==m||b.hemiLength!==u||b.numDirectionalShadows!==v||b.numPointShadows!==x||b.numSpotShadows!==y||b.numSpotMaps!==C||b.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,b.directionalLength=p,b.pointLength=_,b.spotLength=g,b.rectAreaLength=m,b.hemiLength=u,b.numDirectionalShadows=v,b.numPointShadows=x,b.numSpotShadows=y,b.numSpotMaps=C,b.numLightProbes=R,i.version=RA++)}function l(c,f){let d=0,h=0,p=0,_=0,g=0;const m=f.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){const x=c[u];if(x.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(x.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const y=i.hemi[g];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function s_(t){const e=new bA(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function PA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new s_(t),e.set(r,[a])):s>=o.length?(a=new s_(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const LA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DA=`uniform sampler2D shadow_pass;
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
}`;function NA(t,e,n){let i=new bd;const r=new xe,s=new xe,o=new ut,a=new tM({depthPacking:SS}),l=new nM,c={},f=n.maxTextureSize,d={[cr]:hn,[hn]:cr,[Dn]:Dn},h=new ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:LA,fragmentShader:DA}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new dn;_.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new At(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=M0;let u=this.type;this.render=function(T,R,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const E=t.getRenderTarget(),M=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),O=t.state;O.setBlending(sr),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const W=u!==yi&&this.type===yi,q=u===yi&&this.type!==yi;for(let z=0,Y=T.length;z<Y;z++){const te=T[z],U=te.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const K=U.getFrameExtents();if(r.multiply(K),s.copy(U.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/K.x),r.x=s.x*K.x,U.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/K.y),r.y=s.y*K.y,U.mapSize.y=s.y)),U.map===null||W===!0||q===!0){const ye=this.type!==yi?{minFilter:Zn,magFilter:Zn}:{};U.map!==null&&U.map.dispose(),U.map=new Gr(r.x,r.y,ye),U.map.texture.name=te.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const ie=U.getViewportCount();for(let ye=0;ye<ie;ye++){const Ne=U.getViewport(ye);o.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),O.viewport(o),U.updateMatrices(te,ye),i=U.getFrustum(),y(R,b,U.camera,te,this.type)}U.isPointLightShadow!==!0&&this.type===yi&&v(U,b),U.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(E,M,P)};function v(T,R){const b=e.update(g);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Gr(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(R,null,b,h,g,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(R,null,b,p,g,null)}function x(T,R,b,E){let M=null;const P=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)M=P;else if(M=b.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const O=M.uuid,W=R.uuid;let q=c[O];q===void 0&&(q={},c[O]=q);let z=q[W];z===void 0&&(z=M.clone(),q[W]=z,R.addEventListener("dispose",C)),M=z}if(M.visible=R.visible,M.wireframe=R.wireframe,E===yi?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:d[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,b.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=t.properties.get(M);O.light=b}return M}function y(T,R,b,E,M){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===yi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);const W=e.update(T),q=T.material;if(Array.isArray(q)){const z=W.groups;for(let Y=0,te=z.length;Y<te;Y++){const U=z[Y],K=q[U.materialIndex];if(K&&K.visible){const ie=x(T,K,E,M);T.onBeforeShadow(t,T,R,b,W,ie,U),t.renderBufferDirect(b,null,W,ie,T,U),T.onAfterShadow(t,T,R,b,W,ie,U)}}}else if(q.visible){const z=x(T,q,E,M);T.onBeforeShadow(t,T,R,b,W,z,null),t.renderBufferDirect(b,null,W,z,T,null),T.onAfterShadow(t,T,R,b,W,z,null)}}const O=T.children;for(let W=0,q=O.length;W<q;W++)y(O[W],R,b,E,M)}function C(T){T.target.removeEventListener("dispose",C);for(const b in c){const E=c[b],M=T.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const IA={[Uf]:Ff,[Of]:Bf,[kf]:Hf,[Xs]:zf,[Ff]:Uf,[Bf]:Of,[Hf]:kf,[zf]:Xs};function UA(t,e){function n(){let D=!1;const ce=new ut;let me=null;const Se=new ut(0,0,0,0);return{setMask:function(oe){me!==oe&&!D&&(t.colorMask(oe,oe,oe,oe),me=oe)},setLocked:function(oe){D=oe},setClear:function(oe,$,Ce,Ve,rt){rt===!0&&(oe*=Ve,$*=Ve,Ce*=Ve),ce.set(oe,$,Ce,Ve),Se.equals(ce)===!1&&(t.clearColor(oe,$,Ce,Ve),Se.copy(ce))},reset:function(){D=!1,me=null,Se.set(-1,0,0,0)}}}function i(){let D=!1,ce=!1,me=null,Se=null,oe=null;return{setReversed:function($){if(ce!==$){const Ce=e.get("EXT_clip_control");$?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),ce=$;const Ve=oe;oe=null,this.setClear(Ve)}},getReversed:function(){return ce},setTest:function($){$?le(t.DEPTH_TEST):Pe(t.DEPTH_TEST)},setMask:function($){me!==$&&!D&&(t.depthMask($),me=$)},setFunc:function($){if(ce&&($=IA[$]),Se!==$){switch($){case Uf:t.depthFunc(t.NEVER);break;case Ff:t.depthFunc(t.ALWAYS);break;case Of:t.depthFunc(t.LESS);break;case Xs:t.depthFunc(t.LEQUAL);break;case kf:t.depthFunc(t.EQUAL);break;case zf:t.depthFunc(t.GEQUAL);break;case Bf:t.depthFunc(t.GREATER);break;case Hf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Se=$}},setLocked:function($){D=$},setClear:function($){oe!==$&&(ce&&($=1-$),t.clearDepth($),oe=$)},reset:function(){D=!1,me=null,Se=null,oe=null,ce=!1}}}function r(){let D=!1,ce=null,me=null,Se=null,oe=null,$=null,Ce=null,Ve=null,rt=null;return{setTest:function(et){D||(et?le(t.STENCIL_TEST):Pe(t.STENCIL_TEST))},setMask:function(et){ce!==et&&!D&&(t.stencilMask(et),ce=et)},setFunc:function(et,On,Tn){(me!==et||Se!==On||oe!==Tn)&&(t.stencilFunc(et,On,Tn),me=et,Se=On,oe=Tn)},setOp:function(et,On,Tn){($!==et||Ce!==On||Ve!==Tn)&&(t.stencilOp(et,On,Tn),$=et,Ce=On,Ve=Tn)},setLocked:function(et){D=et},setClear:function(et){rt!==et&&(t.clearStencil(et),rt=et)},reset:function(){D=!1,ce=null,me=null,Se=null,oe=null,$=null,Ce=null,Ve=null,rt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let f={},d={},h=new WeakMap,p=[],_=null,g=!1,m=null,u=null,v=null,x=null,y=null,C=null,T=null,R=new Qe(0,0,0),b=0,E=!1,M=null,P=null,O=null,W=null,q=null;const z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,te=0;const U=t.getParameter(t.VERSION);U.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(U)[1]),Y=te>=1):U.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),Y=te>=2);let K=null,ie={};const ye=t.getParameter(t.SCISSOR_BOX),Ne=t.getParameter(t.VIEWPORT),We=new ut().fromArray(ye),$e=new ut().fromArray(Ne);function Xe(D,ce,me,Se){const oe=new Uint8Array(4),$=t.createTexture();t.bindTexture(D,$),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ce=0;Ce<me;Ce++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,Se,0,t.RGBA,t.UNSIGNED_BYTE,oe):t.texImage2D(ce+Ce,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,oe);return $}const Z={};Z[t.TEXTURE_2D]=Xe(t.TEXTURE_2D,t.TEXTURE_2D,1),Z[t.TEXTURE_CUBE_MAP]=Xe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[t.TEXTURE_2D_ARRAY]=Xe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Z[t.TEXTURE_3D]=Xe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(t.DEPTH_TEST),o.setFunc(Xs),ee(!1),H(Zp),le(t.CULL_FACE),ue(sr);function le(D){f[D]!==!0&&(t.enable(D),f[D]=!0)}function Pe(D){f[D]!==!1&&(t.disable(D),f[D]=!1)}function Oe(D,ce){return d[D]!==ce?(t.bindFramebuffer(D,ce),d[D]=ce,D===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ce),D===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ie(D,ce){let me=p,Se=!1;if(D){me=h.get(ce),me===void 0&&(me=[],h.set(ce,me));const oe=D.textures;if(me.length!==oe.length||me[0]!==t.COLOR_ATTACHMENT0){for(let $=0,Ce=oe.length;$<Ce;$++)me[$]=t.COLOR_ATTACHMENT0+$;me.length=oe.length,Se=!0}}else me[0]!==t.BACK&&(me[0]=t.BACK,Se=!0);Se&&t.drawBuffers(me)}function Ke(D){return _!==D?(t.useProgram(D),_=D,!0):!1}const st={[Ar]:t.FUNC_ADD,[Yy]:t.FUNC_SUBTRACT,[qy]:t.FUNC_REVERSE_SUBTRACT};st[$y]=t.MIN,st[Ky]=t.MAX;const L={[Zy]:t.ZERO,[Jy]:t.ONE,[Qy]:t.SRC_COLOR,[Nf]:t.SRC_ALPHA,[sS]:t.SRC_ALPHA_SATURATE,[iS]:t.DST_COLOR,[tS]:t.DST_ALPHA,[eS]:t.ONE_MINUS_SRC_COLOR,[If]:t.ONE_MINUS_SRC_ALPHA,[rS]:t.ONE_MINUS_DST_COLOR,[nS]:t.ONE_MINUS_DST_ALPHA,[oS]:t.CONSTANT_COLOR,[aS]:t.ONE_MINUS_CONSTANT_COLOR,[lS]:t.CONSTANT_ALPHA,[cS]:t.ONE_MINUS_CONSTANT_ALPHA};function ue(D,ce,me,Se,oe,$,Ce,Ve,rt,et){if(D===sr){g===!0&&(Pe(t.BLEND),g=!1);return}if(g===!1&&(le(t.BLEND),g=!0),D!==jy){if(D!==m||et!==E){if((u!==Ar||y!==Ar)&&(t.blendEquation(t.FUNC_ADD),u=Ar,y=Ar),et)switch(D){case Fs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Jp:t.blendFunc(t.ONE,t.ONE);break;case Qp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case em:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Fs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Jp:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Qp:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case em:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}v=null,x=null,C=null,T=null,R.set(0,0,0),b=0,m=D,E=et}return}oe=oe||ce,$=$||me,Ce=Ce||Se,(ce!==u||oe!==y)&&(t.blendEquationSeparate(st[ce],st[oe]),u=ce,y=oe),(me!==v||Se!==x||$!==C||Ce!==T)&&(t.blendFuncSeparate(L[me],L[Se],L[$],L[Ce]),v=me,x=Se,C=$,T=Ce),(Ve.equals(R)===!1||rt!==b)&&(t.blendColor(Ve.r,Ve.g,Ve.b,rt),R.copy(Ve),b=rt),m=D,E=!1}function re(D,ce){D.side===Dn?Pe(t.CULL_FACE):le(t.CULL_FACE);let me=D.side===hn;ce&&(me=!me),ee(me),D.blending===Fs&&D.transparent===!1?ue(sr):ue(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const Se=D.stencilWrite;a.setTest(Se),Se&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Q(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):Pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function ee(D){M!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),M=D)}function H(D){D!==Wy?(le(t.CULL_FACE),D!==P&&(D===Zp?t.cullFace(t.BACK):D===Xy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Pe(t.CULL_FACE),P=D}function ne(D){D!==O&&(Y&&t.lineWidth(D),O=D)}function Q(D,ce,me){D?(le(t.POLYGON_OFFSET_FILL),(W!==ce||q!==me)&&(t.polygonOffset(ce,me),W=ce,q=me)):Pe(t.POLYGON_OFFSET_FILL)}function V(D){D?le(t.SCISSOR_TEST):Pe(t.SCISSOR_TEST)}function we(D){D===void 0&&(D=t.TEXTURE0+z-1),K!==D&&(t.activeTexture(D),K=D)}function Fe(D,ce,me){me===void 0&&(K===null?me=t.TEXTURE0+z-1:me=K);let Se=ie[me];Se===void 0&&(Se={type:void 0,texture:void 0},ie[me]=Se),(Se.type!==D||Se.texture!==ce)&&(K!==me&&(t.activeTexture(me),K=me),t.bindTexture(D,ce||Z[D]),Se.type=D,Se.texture=ce)}function A(){const D=ie[K];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function S(){try{t.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function I(){try{t.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function B(){try{t.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{t.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function G(){try{t.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{t.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{t.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{t.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{t.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{t.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(D){We.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),We.copy(D))}function Me(D){$e.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),$e.copy(D))}function pe(D,ce){let me=c.get(ce);me===void 0&&(me=new WeakMap,c.set(ce,me));let Se=me.get(D);Se===void 0&&(Se=t.getUniformBlockIndex(ce,D.name),me.set(D,Se))}function ae(D,ce){const Se=c.get(ce).get(D);l.get(ce)!==Se&&(t.uniformBlockBinding(ce,Se,D.__bindingPointIndex),l.set(ce,Se))}function be(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},K=null,ie={},d={},h=new WeakMap,p=[],_=null,g=!1,m=null,u=null,v=null,x=null,y=null,C=null,T=null,R=new Qe(0,0,0),b=0,E=!1,M=null,P=null,O=null,W=null,q=null,We.set(0,0,t.canvas.width,t.canvas.height),$e.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:Pe,bindFramebuffer:Oe,drawBuffers:Ie,useProgram:Ke,setBlending:ue,setMaterial:re,setFlipSided:ee,setCullFace:H,setLineWidth:ne,setPolygonOffset:Q,setScissorTest:V,activeTexture:we,bindTexture:Fe,unbindTexture:A,compressedTexImage2D:S,compressedTexImage3D:I,texImage2D:Ee,texImage3D:J,updateUBOMapping:pe,uniformBlockBinding:ae,texStorage2D:he,texStorage3D:ge,texSubImage2D:B,texSubImage3D:se,compressedTexSubImage2D:G,compressedTexSubImage3D:Re,scissor:de,viewport:Me,reset:be}}function FA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xe,f=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,S){return p?new OffscreenCanvas(A,S):sc("canvas")}function g(A,S,I){let B=1;const se=Fe(A);if((se.width>I||se.height>I)&&(B=I/Math.max(se.width,se.height)),B<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const G=Math.floor(B*se.width),Re=Math.floor(B*se.height);d===void 0&&(d=_(G,Re));const he=S?_(G,Re):d;return he.width=G,he.height=Re,he.getContext("2d").drawImage(A,0,0,G,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+G+"x"+Re+")."),he}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),A;return A}function m(A){return A.generateMipmaps}function u(A){t.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(A,S,I,B,se=!1){if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let G=S;if(S===t.RED&&(I===t.FLOAT&&(G=t.R32F),I===t.HALF_FLOAT&&(G=t.R16F),I===t.UNSIGNED_BYTE&&(G=t.R8)),S===t.RED_INTEGER&&(I===t.UNSIGNED_BYTE&&(G=t.R8UI),I===t.UNSIGNED_SHORT&&(G=t.R16UI),I===t.UNSIGNED_INT&&(G=t.R32UI),I===t.BYTE&&(G=t.R8I),I===t.SHORT&&(G=t.R16I),I===t.INT&&(G=t.R32I)),S===t.RG&&(I===t.FLOAT&&(G=t.RG32F),I===t.HALF_FLOAT&&(G=t.RG16F),I===t.UNSIGNED_BYTE&&(G=t.RG8)),S===t.RG_INTEGER&&(I===t.UNSIGNED_BYTE&&(G=t.RG8UI),I===t.UNSIGNED_SHORT&&(G=t.RG16UI),I===t.UNSIGNED_INT&&(G=t.RG32UI),I===t.BYTE&&(G=t.RG8I),I===t.SHORT&&(G=t.RG16I),I===t.INT&&(G=t.RG32I)),S===t.RGB_INTEGER&&(I===t.UNSIGNED_BYTE&&(G=t.RGB8UI),I===t.UNSIGNED_SHORT&&(G=t.RGB16UI),I===t.UNSIGNED_INT&&(G=t.RGB32UI),I===t.BYTE&&(G=t.RGB8I),I===t.SHORT&&(G=t.RGB16I),I===t.INT&&(G=t.RGB32I)),S===t.RGBA_INTEGER&&(I===t.UNSIGNED_BYTE&&(G=t.RGBA8UI),I===t.UNSIGNED_SHORT&&(G=t.RGBA16UI),I===t.UNSIGNED_INT&&(G=t.RGBA32UI),I===t.BYTE&&(G=t.RGBA8I),I===t.SHORT&&(G=t.RGBA16I),I===t.INT&&(G=t.RGBA32I)),S===t.RGB&&(I===t.UNSIGNED_INT_5_9_9_9_REV&&(G=t.RGB9_E5),I===t.UNSIGNED_INT_10F_11F_11F_REV&&(G=t.R11F_G11F_B10F)),S===t.RGBA){const Re=se?ic:it.getTransfer(B);I===t.FLOAT&&(G=t.RGBA32F),I===t.HALF_FLOAT&&(G=t.RGBA16F),I===t.UNSIGNED_BYTE&&(G=Re===lt?t.SRGB8_ALPHA8:t.RGBA8),I===t.UNSIGNED_SHORT_4_4_4_4&&(G=t.RGBA4),I===t.UNSIGNED_SHORT_5_5_5_1&&(G=t.RGB5_A1)}return(G===t.R16F||G===t.R32F||G===t.RG16F||G===t.RG32F||G===t.RGBA16F||G===t.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function y(A,S){let I;return A?S===null||S===Hr||S===oa?I=t.DEPTH24_STENCIL8:S===Ti?I=t.DEPTH32F_STENCIL8:S===sa&&(I=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Hr||S===oa?I=t.DEPTH_COMPONENT24:S===Ti?I=t.DEPTH_COMPONENT32F:S===sa&&(I=t.DEPTH_COMPONENT16),I}function C(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Zn&&A.minFilter!==oi?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function T(A){const S=A.target;S.removeEventListener("dispose",T),b(S),S.isVideoTexture&&f.delete(S)}function R(A){const S=A.target;S.removeEventListener("dispose",R),M(S)}function b(A){const S=i.get(A);if(S.__webglInit===void 0)return;const I=A.source,B=h.get(I);if(B){const se=B[S.__cacheKey];se.usedTimes--,se.usedTimes===0&&E(A),Object.keys(B).length===0&&h.delete(I)}i.remove(A)}function E(A){const S=i.get(A);t.deleteTexture(S.__webglTexture);const I=A.source,B=h.get(I);delete B[S.__cacheKey],o.memory.textures--}function M(A){const S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(S.__webglFramebuffer[B]))for(let se=0;se<S.__webglFramebuffer[B].length;se++)t.deleteFramebuffer(S.__webglFramebuffer[B][se]);else t.deleteFramebuffer(S.__webglFramebuffer[B]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[B])}else{if(Array.isArray(S.__webglFramebuffer))for(let B=0;B<S.__webglFramebuffer.length;B++)t.deleteFramebuffer(S.__webglFramebuffer[B]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let B=0;B<S.__webglColorRenderbuffer.length;B++)S.__webglColorRenderbuffer[B]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[B]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const I=A.textures;for(let B=0,se=I.length;B<se;B++){const G=i.get(I[B]);G.__webglTexture&&(t.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(I[B])}i.remove(A)}let P=0;function O(){P=0}function W(){const A=P;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),P+=1,A}function q(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function z(A,S){const I=i.get(A);if(A.isVideoTexture&&V(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&I.__version!==A.version){const B=A.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(I,A,S);return}}else A.isExternalTexture&&(I.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,I.__webglTexture,t.TEXTURE0+S)}function Y(A,S){const I=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&I.__version!==A.version){Z(I,A,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,I.__webglTexture,t.TEXTURE0+S)}function te(A,S){const I=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&I.__version!==A.version){Z(I,A,S);return}n.bindTexture(t.TEXTURE_3D,I.__webglTexture,t.TEXTURE0+S)}function U(A,S){const I=i.get(A);if(A.version>0&&I.__version!==A.version){le(I,A,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+S)}const K={[Wf]:t.REPEAT,[Lr]:t.CLAMP_TO_EDGE,[Xf]:t.MIRRORED_REPEAT},ie={[Zn]:t.NEAREST,[xS]:t.NEAREST_MIPMAP_NEAREST,[Va]:t.NEAREST_MIPMAP_LINEAR,[oi]:t.LINEAR,[iu]:t.LINEAR_MIPMAP_NEAREST,[Dr]:t.LINEAR_MIPMAP_LINEAR},ye={[ES]:t.NEVER,[bS]:t.ALWAYS,[wS]:t.LESS,[U0]:t.LEQUAL,[TS]:t.EQUAL,[CS]:t.GEQUAL,[AS]:t.GREATER,[RS]:t.NOTEQUAL};function Ne(A,S){if(S.type===Ti&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===oi||S.magFilter===iu||S.magFilter===Va||S.magFilter===Dr||S.minFilter===oi||S.minFilter===iu||S.minFilter===Va||S.minFilter===Dr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,K[S.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,K[S.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,K[S.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,ie[S.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,ie[S.minFilter]),S.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,ye[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Zn||S.minFilter!==Va&&S.minFilter!==Dr||S.type===Ti&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function We(A,S){let I=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",T));const B=S.source;let se=h.get(B);se===void 0&&(se={},h.set(B,se));const G=q(S);if(G!==A.__cacheKey){se[G]===void 0&&(se[G]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,I=!0),se[G].usedTimes++;const Re=se[A.__cacheKey];Re!==void 0&&(se[A.__cacheKey].usedTimes--,Re.usedTimes===0&&E(S)),A.__cacheKey=G,A.__webglTexture=se[G].texture}return I}function $e(A,S,I){return Math.floor(Math.floor(A/I)/S)}function Xe(A,S,I,B){const G=A.updateRanges;if(G.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,I,B,S.data);else{G.sort((J,de)=>J.start-de.start);let Re=0;for(let J=1;J<G.length;J++){const de=G[Re],Me=G[J],pe=de.start+de.count,ae=$e(Me.start,S.width,4),be=$e(de.start,S.width,4);Me.start<=pe+1&&ae===be&&$e(Me.start+Me.count-1,S.width,4)===ae?de.count=Math.max(de.count,Me.start+Me.count-de.start):(++Re,G[Re]=Me)}G.length=Re+1;const he=t.getParameter(t.UNPACK_ROW_LENGTH),ge=t.getParameter(t.UNPACK_SKIP_PIXELS),Ee=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let J=0,de=G.length;J<de;J++){const Me=G[J],pe=Math.floor(Me.start/4),ae=Math.ceil(Me.count/4),be=pe%S.width,D=Math.floor(pe/S.width),ce=ae,me=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,be),t.pixelStorei(t.UNPACK_SKIP_ROWS,D),n.texSubImage2D(t.TEXTURE_2D,0,be,D,ce,me,I,B,S.data)}A.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,he),t.pixelStorei(t.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ee)}}function Z(A,S,I){let B=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(B=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(B=t.TEXTURE_3D);const se=We(A,S),G=S.source;n.bindTexture(B,A.__webglTexture,t.TEXTURE0+I);const Re=i.get(G);if(G.version!==Re.__version||se===!0){n.activeTexture(t.TEXTURE0+I);const he=it.getPrimaries(it.workingColorSpace),ge=S.colorSpace===Yi?null:it.getPrimaries(S.colorSpace),Ee=S.colorSpace===Yi||he===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let J=g(S.image,!1,r.maxTextureSize);J=we(S,J);const de=s.convert(S.format,S.colorSpace),Me=s.convert(S.type);let pe=x(S.internalFormat,de,Me,S.colorSpace,S.isVideoTexture);Ne(B,S);let ae;const be=S.mipmaps,D=S.isVideoTexture!==!0,ce=Re.__version===void 0||se===!0,me=G.dataReady,Se=C(S,J);if(S.isDepthTexture)pe=y(S.format===la,S.type),ce&&(D?n.texStorage2D(t.TEXTURE_2D,1,pe,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,pe,J.width,J.height,0,de,Me,null));else if(S.isDataTexture)if(be.length>0){D&&ce&&n.texStorage2D(t.TEXTURE_2D,Se,pe,be[0].width,be[0].height);for(let oe=0,$=be.length;oe<$;oe++)ae=be[oe],D?me&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,ae.width,ae.height,de,Me,ae.data):n.texImage2D(t.TEXTURE_2D,oe,pe,ae.width,ae.height,0,de,Me,ae.data);S.generateMipmaps=!1}else D?(ce&&n.texStorage2D(t.TEXTURE_2D,Se,pe,J.width,J.height),me&&Xe(S,J,de,Me)):n.texImage2D(t.TEXTURE_2D,0,pe,J.width,J.height,0,de,Me,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){D&&ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Se,pe,be[0].width,be[0].height,J.depth);for(let oe=0,$=be.length;oe<$;oe++)if(ae=be[oe],S.format!==qn)if(de!==null)if(D){if(me)if(S.layerUpdates.size>0){const Ce=Um(ae.width,ae.height,S.format,S.type);for(const Ve of S.layerUpdates){const rt=ae.data.subarray(Ve*Ce/ae.data.BYTES_PER_ELEMENT,(Ve+1)*Ce/ae.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,Ve,ae.width,ae.height,1,de,rt)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,ae.width,ae.height,J.depth,de,ae.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,oe,pe,ae.width,ae.height,J.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?me&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,ae.width,ae.height,J.depth,de,Me,ae.data):n.texImage3D(t.TEXTURE_2D_ARRAY,oe,pe,ae.width,ae.height,J.depth,0,de,Me,ae.data)}else{D&&ce&&n.texStorage2D(t.TEXTURE_2D,Se,pe,be[0].width,be[0].height);for(let oe=0,$=be.length;oe<$;oe++)ae=be[oe],S.format!==qn?de!==null?D?me&&n.compressedTexSubImage2D(t.TEXTURE_2D,oe,0,0,ae.width,ae.height,de,ae.data):n.compressedTexImage2D(t.TEXTURE_2D,oe,pe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?me&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,ae.width,ae.height,de,Me,ae.data):n.texImage2D(t.TEXTURE_2D,oe,pe,ae.width,ae.height,0,de,Me,ae.data)}else if(S.isDataArrayTexture)if(D){if(ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Se,pe,J.width,J.height,J.depth),me)if(S.layerUpdates.size>0){const oe=Um(J.width,J.height,S.format,S.type);for(const $ of S.layerUpdates){const Ce=J.data.subarray($*oe/J.data.BYTES_PER_ELEMENT,($+1)*oe/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,$,J.width,J.height,1,de,Me,Ce)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,de,Me,J.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,pe,J.width,J.height,J.depth,0,de,Me,J.data);else if(S.isData3DTexture)D?(ce&&n.texStorage3D(t.TEXTURE_3D,Se,pe,J.width,J.height,J.depth),me&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,de,Me,J.data)):n.texImage3D(t.TEXTURE_3D,0,pe,J.width,J.height,J.depth,0,de,Me,J.data);else if(S.isFramebufferTexture){if(ce)if(D)n.texStorage2D(t.TEXTURE_2D,Se,pe,J.width,J.height);else{let oe=J.width,$=J.height;for(let Ce=0;Ce<Se;Ce++)n.texImage2D(t.TEXTURE_2D,Ce,pe,oe,$,0,de,Me,null),oe>>=1,$>>=1}}else if(be.length>0){if(D&&ce){const oe=Fe(be[0]);n.texStorage2D(t.TEXTURE_2D,Se,pe,oe.width,oe.height)}for(let oe=0,$=be.length;oe<$;oe++)ae=be[oe],D?me&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,de,Me,ae):n.texImage2D(t.TEXTURE_2D,oe,pe,de,Me,ae);S.generateMipmaps=!1}else if(D){if(ce){const oe=Fe(J);n.texStorage2D(t.TEXTURE_2D,Se,pe,oe.width,oe.height)}me&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de,Me,J)}else n.texImage2D(t.TEXTURE_2D,0,pe,de,Me,J);m(S)&&u(B),Re.__version=G.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function le(A,S,I){if(S.image.length!==6)return;const B=We(A,S),se=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+I);const G=i.get(se);if(se.version!==G.__version||B===!0){n.activeTexture(t.TEXTURE0+I);const Re=it.getPrimaries(it.workingColorSpace),he=S.colorSpace===Yi?null:it.getPrimaries(S.colorSpace),ge=S.colorSpace===Yi||Re===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ee=S.isCompressedTexture||S.image[0].isCompressedTexture,J=S.image[0]&&S.image[0].isDataTexture,de=[];for(let $=0;$<6;$++)!Ee&&!J?de[$]=g(S.image[$],!0,r.maxCubemapSize):de[$]=J?S.image[$].image:S.image[$],de[$]=we(S,de[$]);const Me=de[0],pe=s.convert(S.format,S.colorSpace),ae=s.convert(S.type),be=x(S.internalFormat,pe,ae,S.colorSpace),D=S.isVideoTexture!==!0,ce=G.__version===void 0||B===!0,me=se.dataReady;let Se=C(S,Me);Ne(t.TEXTURE_CUBE_MAP,S);let oe;if(Ee){D&&ce&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Se,be,Me.width,Me.height);for(let $=0;$<6;$++){oe=de[$].mipmaps;for(let Ce=0;Ce<oe.length;Ce++){const Ve=oe[Ce];S.format!==qn?pe!==null?D?me&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce,0,0,Ve.width,Ve.height,pe,Ve.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce,be,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce,0,0,Ve.width,Ve.height,pe,ae,Ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce,be,Ve.width,Ve.height,0,pe,ae,Ve.data)}}}else{if(oe=S.mipmaps,D&&ce){oe.length>0&&Se++;const $=Fe(de[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Se,be,$.width,$.height)}for(let $=0;$<6;$++)if(J){D?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,de[$].width,de[$].height,pe,ae,de[$].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,be,de[$].width,de[$].height,0,pe,ae,de[$].data);for(let Ce=0;Ce<oe.length;Ce++){const rt=oe[Ce].image[$].image;D?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce+1,0,0,rt.width,rt.height,pe,ae,rt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce+1,be,rt.width,rt.height,0,pe,ae,rt.data)}}else{D?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,pe,ae,de[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,be,pe,ae,de[$]);for(let Ce=0;Ce<oe.length;Ce++){const Ve=oe[Ce];D?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce+1,0,0,pe,ae,Ve.image[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce+1,be,pe,ae,Ve.image[$])}}}m(S)&&u(t.TEXTURE_CUBE_MAP),G.__version=se.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Pe(A,S,I,B,se,G){const Re=s.convert(I.format,I.colorSpace),he=s.convert(I.type),ge=x(I.internalFormat,Re,he,I.colorSpace),Ee=i.get(S),J=i.get(I);if(J.__renderTarget=S,!Ee.__hasExternalTextures){const de=Math.max(1,S.width>>G),Me=Math.max(1,S.height>>G);se===t.TEXTURE_3D||se===t.TEXTURE_2D_ARRAY?n.texImage3D(se,G,ge,de,Me,S.depth,0,Re,he,null):n.texImage2D(se,G,ge,de,Me,0,Re,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Q(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,B,se,J.__webglTexture,0,ne(S)):(se===t.TEXTURE_2D||se>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,B,se,J.__webglTexture,G),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Oe(A,S,I){if(t.bindRenderbuffer(t.RENDERBUFFER,A),S.depthBuffer){const B=S.depthTexture,se=B&&B.isDepthTexture?B.type:null,G=y(S.stencilBuffer,se),Re=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=ne(S);Q(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,G,S.width,S.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,he,G,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,G,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Re,t.RENDERBUFFER,A)}else{const B=S.textures;for(let se=0;se<B.length;se++){const G=B[se],Re=s.convert(G.format,G.colorSpace),he=s.convert(G.type),ge=x(G.internalFormat,Re,he,G.colorSpace),Ee=ne(S);I&&Q(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ee,ge,S.width,S.height):Q(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ee,ge,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ge,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ie(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const B=i.get(S.depthTexture);B.__renderTarget=S,(!B.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),z(S.depthTexture,0);const se=B.__webglTexture,G=ne(S);if(S.depthTexture.format===aa)Q(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0,G):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0);else if(S.depthTexture.format===la)Q(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0,G):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Ke(A){const S=i.get(A),I=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const B=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),B){const se=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,B.removeEventListener("dispose",se)};B.addEventListener("dispose",se),S.__depthDisposeCallback=se}S.__boundDepthTexture=B}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const B=A.texture.mipmaps;B&&B.length>0?Ie(S.__webglFramebuffer[0],A):Ie(S.__webglFramebuffer,A)}else if(I){S.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[B]),S.__webglDepthbuffer[B]===void 0)S.__webglDepthbuffer[B]=t.createRenderbuffer(),Oe(S.__webglDepthbuffer[B],A,!1);else{const se=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,G=S.__webglDepthbuffer[B];t.bindRenderbuffer(t.RENDERBUFFER,G),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,G)}}else{const B=A.texture.mipmaps;if(B&&B.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),Oe(S.__webglDepthbuffer,A,!1);else{const se=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,G=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,G),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,G)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function st(A,S,I){const B=i.get(A);S!==void 0&&Pe(B.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),I!==void 0&&Ke(A)}function L(A){const S=A.texture,I=i.get(A),B=i.get(S);A.addEventListener("dispose",R);const se=A.textures,G=A.isWebGLCubeRenderTarget===!0,Re=se.length>1;if(Re||(B.__webglTexture===void 0&&(B.__webglTexture=t.createTexture()),B.__version=S.version,o.memory.textures++),G){I.__webglFramebuffer=[];for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer[he]=[];for(let ge=0;ge<S.mipmaps.length;ge++)I.__webglFramebuffer[he][ge]=t.createFramebuffer()}else I.__webglFramebuffer[he]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer=[];for(let he=0;he<S.mipmaps.length;he++)I.__webglFramebuffer[he]=t.createFramebuffer()}else I.__webglFramebuffer=t.createFramebuffer();if(Re)for(let he=0,ge=se.length;he<ge;he++){const Ee=i.get(se[he]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=t.createTexture(),o.memory.textures++)}if(A.samples>0&&Q(A)===!1){I.__webglMultisampledFramebuffer=t.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let he=0;he<se.length;he++){const ge=se[he];I.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,I.__webglColorRenderbuffer[he]);const Ee=s.convert(ge.format,ge.colorSpace),J=s.convert(ge.type),de=x(ge.internalFormat,Ee,J,ge.colorSpace,A.isXRRenderTarget===!0),Me=ne(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,de,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,I.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(I.__webglDepthRenderbuffer=t.createRenderbuffer(),Oe(I.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(G){n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture),Ne(t.TEXTURE_CUBE_MAP,S);for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)Pe(I.__webglFramebuffer[he][ge],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,ge);else Pe(I.__webglFramebuffer[he],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(S)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Re){for(let he=0,ge=se.length;he<ge;he++){const Ee=se[he],J=i.get(Ee);let de=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(de=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,J.__webglTexture),Ne(de,Ee),Pe(I.__webglFramebuffer,A,Ee,t.COLOR_ATTACHMENT0+he,de,0),m(Ee)&&u(de)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(he=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,B.__webglTexture),Ne(he,S),S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)Pe(I.__webglFramebuffer[ge],A,S,t.COLOR_ATTACHMENT0,he,ge);else Pe(I.__webglFramebuffer,A,S,t.COLOR_ATTACHMENT0,he,0);m(S)&&u(he),n.unbindTexture()}A.depthBuffer&&Ke(A)}function ue(A){const S=A.textures;for(let I=0,B=S.length;I<B;I++){const se=S[I];if(m(se)){const G=v(A),Re=i.get(se).__webglTexture;n.bindTexture(G,Re),u(G),n.unbindTexture()}}}const re=[],ee=[];function H(A){if(A.samples>0){if(Q(A)===!1){const S=A.textures,I=A.width,B=A.height;let se=t.COLOR_BUFFER_BIT;const G=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Re=i.get(A),he=S.length>1;if(he)for(let Ee=0;Ee<S.length;Ee++)n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const ge=A.texture.mipmaps;ge&&ge.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ee=0;Ee<S.length;Ee++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(se|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(se|=t.STENCIL_BUFFER_BIT)),he){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Re.__webglColorRenderbuffer[Ee]);const J=i.get(S[Ee]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,J,0)}t.blitFramebuffer(0,0,I,B,0,0,I,B,se,t.NEAREST),l===!0&&(re.length=0,ee.length=0,re.push(t.COLOR_ATTACHMENT0+Ee),A.depthBuffer&&A.resolveDepthBuffer===!1&&(re.push(G),ee.push(G),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ee)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,re))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let Ee=0;Ee<S.length;Ee++){n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,Re.__webglColorRenderbuffer[Ee]);const J=i.get(S[Ee]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,J,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function ne(A){return Math.min(r.maxSamples,A.samples)}function Q(A){const S=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function V(A){const S=o.render.frame;f.get(A)!==S&&(f.set(A,S),A.update())}function we(A,S){const I=A.colorSpace,B=A.format,se=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||I!==qs&&I!==Yi&&(it.getTransfer(I)===lt?(B!==qn||se!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),S}function Fe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=O,this.setTexture2D=z,this.setTexture2DArray=Y,this.setTexture3D=te,this.setTextureCube=U,this.rebindTextures=st,this.setupRenderTarget=L,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=Q}function OA(t,e){function n(i,r=Yi){let s;const o=it.getTransfer(r);if(i===fi)return t.UNSIGNED_BYTE;if(i===yd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Sd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===C0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===b0)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===A0)return t.BYTE;if(i===R0)return t.SHORT;if(i===sa)return t.UNSIGNED_SHORT;if(i===xd)return t.INT;if(i===Hr)return t.UNSIGNED_INT;if(i===Ti)return t.FLOAT;if(i===xa)return t.HALF_FLOAT;if(i===P0)return t.ALPHA;if(i===L0)return t.RGB;if(i===qn)return t.RGBA;if(i===aa)return t.DEPTH_COMPONENT;if(i===la)return t.DEPTH_STENCIL;if(i===D0)return t.RED;if(i===Md)return t.RED_INTEGER;if(i===N0)return t.RG;if(i===Ed)return t.RG_INTEGER;if(i===wd)return t.RGBA_INTEGER;if(i===Rl||i===Cl||i===bl||i===Pl)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Rl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Rl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jf||i===Yf||i===qf||i===$f)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===jf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Yf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$f)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kf||i===Zf||i===Jf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Kf||i===Zf)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Jf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Qf||i===eh||i===th||i===nh||i===ih||i===rh||i===sh||i===oh||i===ah||i===lh||i===ch||i===uh||i===fh||i===hh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Qf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===eh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===th)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ih)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===sh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===oh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ah)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===lh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ch)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===uh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===dh||i===ph||i===mh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===dh)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ph)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===mh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_h||i===gh||i===vh||i===xh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===_h)return s.COMPRESSED_RED_RGTC1_EXT;if(i===gh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===oa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const kA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zA=`
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

}`;class BA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Y0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ur({vertexShader:kA,fragmentShader:zA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new At(new Ur(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HA extends qr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,d=null,h=null,p=null,_=null;const g=typeof XRWebGLBinding<"u",m=new BA,u={},v=n.getContextAttributes();let x=null,y=null;const C=[],T=[],R=new xe;let b=null;const E=new xn;E.viewport=new ut;const M=new xn;M.viewport=new ut;const P=[E,M],O=new aM;let W=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let le=C[Z];return le===void 0&&(le=new wu,C[Z]=le),le.getTargetRaySpace()},this.getControllerGrip=function(Z){let le=C[Z];return le===void 0&&(le=new wu,C[Z]=le),le.getGripSpace()},this.getHand=function(Z){let le=C[Z];return le===void 0&&(le=new wu,C[Z]=le),le.getHandSpace()};function z(Z){const le=T.indexOf(Z.inputSource);if(le===-1)return;const Pe=C[le];Pe!==void 0&&(Pe.update(Z.inputSource,Z.frame,c||o),Pe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Y(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",te);for(let Z=0;Z<C.length;Z++){const le=T[Z];le!==null&&(T[Z]=null,C[Z].disconnect(le))}W=null,q=null,m.reset();for(const Z in u)delete u[Z];e.setRenderTarget(x),p=null,h=null,d=null,r=null,y=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",te),v.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(R),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pe=null,Oe=null,Ie=null;v.depth&&(Ie=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Pe=v.stencil?la:aa,Oe=v.stencil?oa:Hr);const Ke={colorFormat:n.RGBA8,depthFormat:Ie,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Ke),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Gr(h.textureWidth,h.textureHeight,{format:qn,type:fi,depthTexture:new j0(h.textureWidth,h.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,Pe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Pe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Pe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Gr(p.framebufferWidth,p.framebufferHeight,{format:qn,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Xe.setContext(r),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(Z){for(let le=0;le<Z.removed.length;le++){const Pe=Z.removed[le],Oe=T.indexOf(Pe);Oe>=0&&(T[Oe]=null,C[Oe].disconnect(Pe))}for(let le=0;le<Z.added.length;le++){const Pe=Z.added[le];let Oe=T.indexOf(Pe);if(Oe===-1){for(let Ke=0;Ke<C.length;Ke++)if(Ke>=T.length){T.push(Pe),Oe=Ke;break}else if(T[Ke]===null){T[Ke]=Pe,Oe=Ke;break}if(Oe===-1)break}const Ie=C[Oe];Ie&&Ie.connect(Pe)}}const U=new N,K=new N;function ie(Z,le,Pe){U.setFromMatrixPosition(le.matrixWorld),K.setFromMatrixPosition(Pe.matrixWorld);const Oe=U.distanceTo(K),Ie=le.projectionMatrix.elements,Ke=Pe.projectionMatrix.elements,st=Ie[14]/(Ie[10]-1),L=Ie[14]/(Ie[10]+1),ue=(Ie[9]+1)/Ie[5],re=(Ie[9]-1)/Ie[5],ee=(Ie[8]-1)/Ie[0],H=(Ke[8]+1)/Ke[0],ne=st*ee,Q=st*H,V=Oe/(-ee+H),we=V*-ee;if(le.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(we),Z.translateZ(V),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ie[10]===-1)Z.projectionMatrix.copy(le.projectionMatrix),Z.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const Fe=st+V,A=L+V,S=ne-we,I=Q+(Oe-we),B=ue*L/A*Fe,se=re*L/A*Fe;Z.projectionMatrix.makePerspective(S,I,B,se,Fe,A),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ye(Z,le){le===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(le.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let le=Z.near,Pe=Z.far;m.texture!==null&&(m.depthNear>0&&(le=m.depthNear),m.depthFar>0&&(Pe=m.depthFar)),O.near=M.near=E.near=le,O.far=M.far=E.far=Pe,(W!==O.near||q!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),W=O.near,q=O.far),O.layers.mask=Z.layers.mask|6,E.layers.mask=O.layers.mask&3,M.layers.mask=O.layers.mask&5;const Oe=Z.parent,Ie=O.cameras;ye(O,Oe);for(let Ke=0;Ke<Ie.length;Ke++)ye(Ie[Ke],Oe);Ie.length===2?ie(O,E,M):O.projectionMatrix.copy(E.projectionMatrix),Ne(Z,O,Oe)};function Ne(Z,le,Pe){Pe===null?Z.matrix.copy(le.matrixWorld):(Z.matrix.copy(Pe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(le.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(le.projectionMatrix),Z.projectionMatrixInverse.copy(le.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ca*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Z){return u[Z]};let We=null;function $e(Z,le){if(f=le.getViewerPose(c||o),_=le,f!==null){const Pe=f.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Oe=!1;Pe.length!==O.cameras.length&&(O.cameras.length=0,Oe=!0);for(let L=0;L<Pe.length;L++){const ue=Pe[L];let re=null;if(p!==null)re=p.getViewport(ue);else{const H=d.getViewSubImage(h,ue);re=H.viewport,L===0&&(e.setRenderTargetTextures(y,H.colorTexture,H.depthStencilTexture),e.setRenderTarget(y))}let ee=P[L];ee===void 0&&(ee=new xn,ee.layers.enable(L),ee.viewport=new ut,P[L]=ee),ee.matrix.fromArray(ue.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(re.x,re.y,re.width,re.height),L===0&&(O.matrix.copy(ee.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Oe===!0&&O.cameras.push(ee)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){d=i.getBinding();const L=d.getDepthInformation(Pe[0]);L&&L.isValid&&L.texture&&m.init(L,r.renderState)}if(Ie&&Ie.includes("camera-access")&&g){e.state.unbindTexture(),d=i.getBinding();for(let L=0;L<Pe.length;L++){const ue=Pe[L].camera;if(ue){let re=u[ue];re||(re=new Y0,u[ue]=re);const ee=d.getCameraImage(ue);re.sourceTexture=ee}}}}for(let Pe=0;Pe<C.length;Pe++){const Oe=T[Pe],Ie=C[Pe];Oe!==null&&Ie!==void 0&&Ie.update(Oe,le,c||o)}We&&We(Z,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),_=null}const Xe=new ov;Xe.setAnimationLoop($e),this.setAnimationLoop=function(Z){We=Z},this.dispose=function(){}}}const Mr=new hi,VA=new vt;function GA(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,V0(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,v,x,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),f(m,u)):u.isMeshStandardMaterial?(s(m,u),h(m,u),u.isMeshPhysicalMaterial&&p(m,u,y)):u.isMeshMatcapMaterial?(s(m,u),_(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),g(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,v,x):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===hn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===hn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const v=e.get(u),x=v.envMap,y=v.envMapRotation;x&&(m.envMap.value=x,Mr.copy(y),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),m.envMapRotation.value.setFromMatrix4(VA.makeRotationFromEuler(Mr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,v,x){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*v,m.scale.value=x*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,v){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===hn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function g(m,u){const v=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function WA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function c(v,x){let y=r[v.id];y===void 0&&(_(v),y=f(v),r[v.id]=y,v.addEventListener("dispose",m));const C=x.program;i.updateUBOMapping(v,C);const T=e.render.frame;s[v.id]!==T&&(h(v),s[v.id]=T)}function f(v){const x=d();v.__bindingPointIndex=x;const y=t.createBuffer(),C=v.__size,T=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,C,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const x=r[v.id],y=v.uniforms,C=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let T=0,R=y.length;T<R;T++){const b=Array.isArray(y[T])?y[T]:[y[T]];for(let E=0,M=b.length;E<M;E++){const P=b[E];if(p(P,T,E,C)===!0){const O=P.__offset,W=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let z=0;z<W.length;z++){const Y=W[z],te=g(Y);typeof Y=="number"||typeof Y=="boolean"?(P.__data[0]=Y,t.bufferSubData(t.UNIFORM_BUFFER,O+q,P.__data)):Y.isMatrix3?(P.__data[0]=Y.elements[0],P.__data[1]=Y.elements[1],P.__data[2]=Y.elements[2],P.__data[3]=0,P.__data[4]=Y.elements[3],P.__data[5]=Y.elements[4],P.__data[6]=Y.elements[5],P.__data[7]=0,P.__data[8]=Y.elements[6],P.__data[9]=Y.elements[7],P.__data[10]=Y.elements[8],P.__data[11]=0):(Y.toArray(P.__data,q),q+=te.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,x,y,C){const T=v.value,R=x+"_"+y;if(C[R]===void 0)return typeof T=="number"||typeof T=="boolean"?C[R]=T:C[R]=T.clone(),!0;{const b=C[R];if(typeof T=="number"||typeof T=="boolean"){if(b!==T)return C[R]=T,!0}else if(b.equals(T)===!1)return b.copy(T),!0}return!1}function _(v){const x=v.uniforms;let y=0;const C=16;for(let R=0,b=x.length;R<b;R++){const E=Array.isArray(x[R])?x[R]:[x[R]];for(let M=0,P=E.length;M<P;M++){const O=E[M],W=Array.isArray(O.value)?O.value:[O.value];for(let q=0,z=W.length;q<z;q++){const Y=W[q],te=g(Y),U=y%C,K=U%te.boundary,ie=U+K;y+=K,ie!==0&&C-ie<te.storage&&(y+=C-ie),O.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=te.storage}}}const T=y%C;return T>0&&(y+=C-T),v.__size=y,v.__cache={},this}function g(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class XA{constructor(e={}){const{canvas:n=jS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,u=null;const v=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=or,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let C=!1;this._outputColorSpace=bn;let T=0,R=0,b=null,E=-1,M=null;const P=new ut,O=new ut;let W=null;const q=new Qe(0);let z=0,Y=n.width,te=n.height,U=1,K=null,ie=null;const ye=new ut(0,0,Y,te),Ne=new ut(0,0,Y,te);let We=!1;const $e=new bd;let Xe=!1,Z=!1;const le=new vt,Pe=new N,Oe=new ut,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function st(){return b===null?U:1}let L=i;function ue(w,F){return n.getContext(w,F)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${vd}`),n.addEventListener("webglcontextlost",me,!1),n.addEventListener("webglcontextrestored",Se,!1),n.addEventListener("webglcontextcreationerror",oe,!1),L===null){const F="webgl2";if(L=ue(F,w),L===null)throw ue(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let re,ee,H,ne,Q,V,we,Fe,A,S,I,B,se,G,Re,he,ge,Ee,J,de,Me,pe,ae,be;function D(){re=new tT(L),re.init(),pe=new OA(L,re),ee=new qw(L,re,e,pe),H=new UA(L,re),ee.reversedDepthBuffer&&h&&H.buffers.depth.setReversed(!0),ne=new rT(L),Q=new MA,V=new FA(L,re,H,Q,ee,pe,ne),we=new Kw(y),Fe=new eT(y),A=new uM(L),ae=new jw(L,A),S=new nT(L,A,ne,ae),I=new oT(L,S,A,ne),J=new sT(L,ee,V),he=new $w(Q),B=new SA(y,we,Fe,re,ee,ae,he),se=new GA(y,Q),G=new wA,Re=new PA(re),Ee=new Xw(y,we,Fe,H,I,p,l),ge=new NA(y,I,ee),be=new WA(L,ne,ee,H),de=new Yw(L,re,ne),Me=new iT(L,re,ne),ne.programs=B.programs,y.capabilities=ee,y.extensions=re,y.properties=Q,y.renderLists=G,y.shadowMap=ge,y.state=H,y.info=ne}D();const ce=new HA(y,L);this.xr=ce,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=re.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=re.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(w){w!==void 0&&(U=w,this.setSize(Y,te,!1))},this.getSize=function(w){return w.set(Y,te)},this.setSize=function(w,F,X=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=w,te=F,n.width=Math.floor(w*U),n.height=Math.floor(F*U),X===!0&&(n.style.width=w+"px",n.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(Y*U,te*U).floor()},this.setDrawingBufferSize=function(w,F,X){Y=w,te=F,U=X,n.width=Math.floor(w*X),n.height=Math.floor(F*X),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(ye)},this.setViewport=function(w,F,X,j){w.isVector4?ye.set(w.x,w.y,w.z,w.w):ye.set(w,F,X,j),H.viewport(P.copy(ye).multiplyScalar(U).round())},this.getScissor=function(w){return w.copy(Ne)},this.setScissor=function(w,F,X,j){w.isVector4?Ne.set(w.x,w.y,w.z,w.w):Ne.set(w,F,X,j),H.scissor(O.copy(Ne).multiplyScalar(U).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(w){H.setScissorTest(We=w)},this.setOpaqueSort=function(w){K=w},this.setTransparentSort=function(w){ie=w},this.getClearColor=function(w){return w.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,X=!0){let j=0;if(w){let k=!1;if(b!==null){const ve=b.texture.format;k=ve===wd||ve===Ed||ve===Md}if(k){const ve=b.texture.type,Ae=ve===fi||ve===Hr||ve===sa||ve===oa||ve===yd||ve===Sd,Ue=Ee.getClearColor(),De=Ee.getClearAlpha(),He=Ue.r,Ge=Ue.g,ze=Ue.b;Ae?(_[0]=He,_[1]=Ge,_[2]=ze,_[3]=De,L.clearBufferuiv(L.COLOR,0,_)):(g[0]=He,g[1]=Ge,g[2]=ze,g[3]=De,L.clearBufferiv(L.COLOR,0,g))}else j|=L.COLOR_BUFFER_BIT}F&&(j|=L.DEPTH_BUFFER_BIT),X&&(j|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",me,!1),n.removeEventListener("webglcontextrestored",Se,!1),n.removeEventListener("webglcontextcreationerror",oe,!1),Ee.dispose(),G.dispose(),Re.dispose(),Q.dispose(),we.dispose(),Fe.dispose(),I.dispose(),ae.dispose(),be.dispose(),B.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Tn),ce.removeEventListener("sessionend",pr),Qn.stop()};function me(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const w=ne.autoReset,F=ge.enabled,X=ge.autoUpdate,j=ge.needsUpdate,k=ge.type;D(),ne.autoReset=w,ge.enabled=F,ge.autoUpdate=X,ge.needsUpdate=j,ge.type=k}function oe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function $(w){const F=w.target;F.removeEventListener("dispose",$),Ce(F)}function Ce(w){Ve(w),Q.remove(w)}function Ve(w){const F=Q.get(w).programs;F!==void 0&&(F.forEach(function(X){B.releaseProgram(X)}),w.isShaderMaterial&&B.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,X,j,k,ve){F===null&&(F=Ie);const Ae=k.isMesh&&k.matrixWorld.determinant()<0,Ue=Sa(w,F,X,j,k);H.setMaterial(j,Ae);let De=X.index,He=1;if(j.wireframe===!0){if(De=S.getWireframeAttribute(X),De===void 0)return;He=2}const Ge=X.drawRange,ze=X.attributes.position;let Je=Ge.start*He,at=(Ge.start+Ge.count)*He;ve!==null&&(Je=Math.max(Je,ve.start*He),at=Math.min(at,(ve.start+ve.count)*He)),De!==null?(Je=Math.max(Je,0),at=Math.min(at,De.count)):ze!=null&&(Je=Math.max(Je,0),at=Math.min(at,ze.count));const Tt=at-Je;if(Tt<0||Tt===1/0)return;ae.setup(k,j,Ue,X,De);let pt,ft=de;if(De!==null&&(pt=A.get(De),ft=Me,ft.setIndex(pt)),k.isMesh)j.wireframe===!0?(H.setLineWidth(j.wireframeLinewidth*st()),ft.setMode(L.LINES)):ft.setMode(L.TRIANGLES);else if(k.isLine){let Be=j.linewidth;Be===void 0&&(Be=1),H.setLineWidth(Be*st()),k.isLineSegments?ft.setMode(L.LINES):k.isLineLoop?ft.setMode(L.LINE_LOOP):ft.setMode(L.LINE_STRIP)}else k.isPoints?ft.setMode(L.POINTS):k.isSprite&&ft.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ua("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))ft.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Be=k._multiDrawStarts,xt=k._multiDrawCounts,nt=k._multiDrawCount,pn=De?A.get(De).bytesPerElement:1,Zr=Q.get(j).currentProgram.getUniforms();for(let mn=0;mn<nt;mn++)Zr.setValue(L,"_gl_DrawID",mn),ft.render(Be[mn]/pn,xt[mn])}else if(k.isInstancedMesh)ft.renderInstances(Je,Tt,k.count);else if(X.isInstancedBufferGeometry){const Be=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,xt=Math.min(X.instanceCount,Be);ft.renderInstances(Je,Tt,xt)}else ft.render(Je,Tt)};function rt(w,F,X){w.transparent===!0&&w.side===Dn&&w.forceSinglePass===!1?(w.side=hn,w.needsUpdate=!0,mr(w,F,X),w.side=cr,w.needsUpdate=!0,mr(w,F,X),w.side=Dn):mr(w,F,X)}this.compile=function(w,F,X=null){X===null&&(X=w),u=Re.get(X),u.init(F),x.push(u),X.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(u.pushLight(k),k.castShadow&&u.pushShadow(k))}),w!==X&&w.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(u.pushLight(k),k.castShadow&&u.pushShadow(k))}),u.setupLights();const j=new Set;return w.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ve=k.material;if(ve)if(Array.isArray(ve))for(let Ae=0;Ae<ve.length;Ae++){const Ue=ve[Ae];rt(Ue,X,k),j.add(Ue)}else rt(ve,X,k),j.add(ve)}),u=x.pop(),j},this.compileAsync=function(w,F,X=null){const j=this.compile(w,F,X);return new Promise(k=>{function ve(){if(j.forEach(function(Ae){Q.get(Ae).currentProgram.isReady()&&j.delete(Ae)}),j.size===0){k(w);return}setTimeout(ve,10)}re.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let et=null;function On(w){et&&et(w)}function Tn(){Qn.stop()}function pr(){Qn.start()}const Qn=new ov;Qn.setAnimationLoop(On),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(w){et=w,ce.setAnimationLoop(w),w===null?Qn.stop():Qn.start()},ce.addEventListener("sessionstart",Tn),ce.addEventListener("sessionend",pr),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(F),F=ce.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,F,b),u=Re.get(w,x.length),u.init(F),x.push(u),le.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),$e.setFromProjectionMatrix(le,ai,F.reversedDepth),Z=this.localClippingEnabled,Xe=he.init(this.clippingPlanes,Z),m=G.get(w,v.length),m.init(),v.push(m),ce.enabled===!0&&ce.isPresenting===!0){const ve=y.xr.getDepthSensingMesh();ve!==null&&dt(ve,F,-1/0,y.sortObjects)}dt(w,F,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(K,ie),Ke=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Ke&&Ee.addToRenderList(m,w),this.info.render.frame++,Xe===!0&&he.beginShadows();const X=u.state.shadowsArray;ge.render(X,w,F),Xe===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,k=m.transmissive;if(u.setupLights(),F.isArrayCamera){const ve=F.cameras;if(k.length>0)for(let Ae=0,Ue=ve.length;Ae<Ue;Ae++){const De=ve[Ae];ya(j,k,w,De)}Ke&&Ee.render(w);for(let Ae=0,Ue=ve.length;Ae<Ue;Ae++){const De=ve[Ae];Ni(m,w,De,De.viewport)}}else k.length>0&&ya(j,k,w,F),Ke&&Ee.render(w),Ni(m,w,F);b!==null&&R===0&&(V.updateMultisampleRenderTarget(b),V.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(y,w,F),ae.resetDefaultState(),E=-1,M=null,x.pop(),x.length>0?(u=x[x.length-1],Xe===!0&&he.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function dt(w,F,X,j){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)u.pushLight(w),w.castShadow&&u.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||$e.intersectsSprite(w)){j&&Oe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(le);const Ae=I.update(w),Ue=w.material;Ue.visible&&m.push(w,Ae,Ue,X,Oe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||$e.intersectsObject(w))){const Ae=I.update(w),Ue=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Oe.copy(w.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Oe.copy(Ae.boundingSphere.center)),Oe.applyMatrix4(w.matrixWorld).applyMatrix4(le)),Array.isArray(Ue)){const De=Ae.groups;for(let He=0,Ge=De.length;He<Ge;He++){const ze=De[He],Je=Ue[ze.materialIndex];Je&&Je.visible&&m.push(w,Ae,Je,X,Oe.z,ze)}}else Ue.visible&&m.push(w,Ae,Ue,X,Oe.z,null)}}const ve=w.children;for(let Ae=0,Ue=ve.length;Ae<Ue;Ae++)dt(ve[Ae],F,X,j)}function Ni(w,F,X,j){const k=w.opaque,ve=w.transmissive,Ae=w.transparent;u.setupLightsView(X),Xe===!0&&he.setGlobalState(y.clippingPlanes,X),j&&H.viewport(P.copy(j)),k.length>0&&Kr(k,F,X),ve.length>0&&Kr(ve,F,X),Ae.length>0&&Kr(Ae,F,X),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function ya(w,F,X,j){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[j.id]===void 0&&(u.state.transmissionRenderTarget[j.id]=new Gr(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?xa:fi,minFilter:Dr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const ve=u.state.transmissionRenderTarget[j.id],Ae=j.viewport||P;ve.setSize(Ae.z*y.transmissionResolutionScale,Ae.w*y.transmissionResolutionScale);const Ue=y.getRenderTarget(),De=y.getActiveCubeFace(),He=y.getActiveMipmapLevel();y.setRenderTarget(ve),y.getClearColor(q),z=y.getClearAlpha(),z<1&&y.setClearColor(16777215,.5),y.clear(),Ke&&Ee.render(X);const Ge=y.toneMapping;y.toneMapping=or;const ze=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),u.setupLightsView(j),Xe===!0&&he.setGlobalState(y.clippingPlanes,j),Kr(w,X,j),V.updateMultisampleRenderTarget(ve),V.updateRenderTargetMipmap(ve),re.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let at=0,Tt=F.length;at<Tt;at++){const pt=F[at],ft=pt.object,Be=pt.geometry,xt=pt.material,nt=pt.group;if(xt.side===Dn&&ft.layers.test(j.layers)){const pn=xt.side;xt.side=hn,xt.needsUpdate=!0,ro(ft,X,j,Be,xt,nt),xt.side=pn,xt.needsUpdate=!0,Je=!0}}Je===!0&&(V.updateMultisampleRenderTarget(ve),V.updateRenderTargetMipmap(ve))}y.setRenderTarget(Ue,De,He),y.setClearColor(q,z),ze!==void 0&&(j.viewport=ze),y.toneMapping=Ge}function Kr(w,F,X){const j=F.isScene===!0?F.overrideMaterial:null;for(let k=0,ve=w.length;k<ve;k++){const Ae=w[k],Ue=Ae.object,De=Ae.geometry,He=Ae.group;let Ge=Ae.material;Ge.allowOverride===!0&&j!==null&&(Ge=j),Ue.layers.test(X.layers)&&ro(Ue,F,X,De,Ge,He)}}function ro(w,F,X,j,k,ve){w.onBeforeRender(y,F,X,j,k,ve),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(y,F,X,j,w,ve),k.transparent===!0&&k.side===Dn&&k.forceSinglePass===!1?(k.side=hn,k.needsUpdate=!0,y.renderBufferDirect(X,F,j,k,w,ve),k.side=cr,k.needsUpdate=!0,y.renderBufferDirect(X,F,j,k,w,ve),k.side=Dn):y.renderBufferDirect(X,F,j,k,w,ve),w.onAfterRender(y,F,X,j,k,ve)}function mr(w,F,X){F.isScene!==!0&&(F=Ie);const j=Q.get(w),k=u.state.lights,ve=u.state.shadowsArray,Ae=k.state.version,Ue=B.getParameters(w,k.state,ve,F,X),De=B.getProgramCacheKey(Ue);let He=j.programs;j.environment=w.isMeshStandardMaterial?F.environment:null,j.fog=F.fog,j.envMap=(w.isMeshStandardMaterial?Fe:we).get(w.envMap||j.environment),j.envMapRotation=j.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,He===void 0&&(w.addEventListener("dispose",$),He=new Map,j.programs=He);let Ge=He.get(De);if(Ge!==void 0){if(j.currentProgram===Ge&&j.lightsStateVersion===Ae)return so(w,Ue),Ge}else Ue.uniforms=B.getUniforms(w),w.onBeforeCompile(Ue,y),Ge=B.acquireProgram(Ue,De),He.set(De,Ge),j.uniforms=Ue.uniforms;const ze=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ze.clippingPlanes=he.uniform),so(w,Ue),j.needsLights=pi(w),j.lightsStateVersion=Ae,j.needsLights&&(ze.ambientLightColor.value=k.state.ambient,ze.lightProbe.value=k.state.probe,ze.directionalLights.value=k.state.directional,ze.directionalLightShadows.value=k.state.directionalShadow,ze.spotLights.value=k.state.spot,ze.spotLightShadows.value=k.state.spotShadow,ze.rectAreaLights.value=k.state.rectArea,ze.ltc_1.value=k.state.rectAreaLTC1,ze.ltc_2.value=k.state.rectAreaLTC2,ze.pointLights.value=k.state.point,ze.pointLightShadows.value=k.state.pointShadow,ze.hemisphereLights.value=k.state.hemi,ze.directionalShadowMap.value=k.state.directionalShadowMap,ze.directionalShadowMatrix.value=k.state.directionalShadowMatrix,ze.spotShadowMap.value=k.state.spotShadowMap,ze.spotLightMatrix.value=k.state.spotLightMatrix,ze.spotLightMap.value=k.state.spotLightMap,ze.pointShadowMap.value=k.state.pointShadowMap,ze.pointShadowMatrix.value=k.state.pointShadowMatrix),j.currentProgram=Ge,j.uniformsList=null,Ge}function kn(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=Dl.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function so(w,F){const X=Q.get(w);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function Sa(w,F,X,j,k){F.isScene!==!0&&(F=Ie),V.resetTextureUnits();const ve=F.fog,Ae=j.isMeshStandardMaterial?F.environment:null,Ue=b===null?y.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:qs,De=(j.isMeshStandardMaterial?Fe:we).get(j.envMap||Ae),He=j.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ge=!!X.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),ze=!!X.morphAttributes.position,Je=!!X.morphAttributes.normal,at=!!X.morphAttributes.color;let Tt=or;j.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Tt=y.toneMapping);const pt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ft=pt!==void 0?pt.length:0,Be=Q.get(j),xt=u.state.lights;if(Xe===!0&&(Z===!0||w!==M)){const Kt=w===M&&j.id===E;he.setState(j,w,Kt)}let nt=!1;j.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==xt.state.version||Be.outputColorSpace!==Ue||k.isBatchedMesh&&Be.batching===!1||!k.isBatchedMesh&&Be.batching===!0||k.isBatchedMesh&&Be.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Be.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Be.instancing===!1||!k.isInstancedMesh&&Be.instancing===!0||k.isSkinnedMesh&&Be.skinning===!1||!k.isSkinnedMesh&&Be.skinning===!0||k.isInstancedMesh&&Be.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Be.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Be.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Be.instancingMorph===!1&&k.morphTexture!==null||Be.envMap!==De||j.fog===!0&&Be.fog!==ve||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==he.numPlanes||Be.numIntersection!==he.numIntersection)||Be.vertexAlphas!==He||Be.vertexTangents!==Ge||Be.morphTargets!==ze||Be.morphNormals!==Je||Be.morphColors!==at||Be.toneMapping!==Tt||Be.morphTargetsCount!==ft)&&(nt=!0):(nt=!0,Be.__version=j.version);let pn=Be.currentProgram;nt===!0&&(pn=mr(j,F,k));let Zr=!1,mn=!1,oo=!1;const yt=pn.getUniforms(),An=Be.uniforms;if(H.useProgram(pn.program)&&(Zr=!0,mn=!0,oo=!0),j.id!==E&&(E=j.id,mn=!0),Zr||M!==w){H.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),yt.setValue(L,"projectionMatrix",w.projectionMatrix),yt.setValue(L,"viewMatrix",w.matrixWorldInverse);const sn=yt.map.cameraPosition;sn!==void 0&&sn.setValue(L,Pe.setFromMatrixPosition(w.matrixWorld)),ee.logarithmicDepthBuffer&&yt.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&yt.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,mn=!0,oo=!0)}if(k.isSkinnedMesh){yt.setOptional(L,k,"bindMatrix"),yt.setOptional(L,k,"bindMatrixInverse");const Kt=k.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),yt.setValue(L,"boneTexture",Kt.boneTexture,V))}k.isBatchedMesh&&(yt.setOptional(L,k,"batchingTexture"),yt.setValue(L,"batchingTexture",k._matricesTexture,V),yt.setOptional(L,k,"batchingIdTexture"),yt.setValue(L,"batchingIdTexture",k._indirectTexture,V),yt.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&yt.setValue(L,"batchingColorTexture",k._colorsTexture,V));const Rn=X.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&J.update(k,X,pn),(mn||Be.receiveShadow!==k.receiveShadow)&&(Be.receiveShadow=k.receiveShadow,yt.setValue(L,"receiveShadow",k.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(An.envMap.value=De,An.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&F.environment!==null&&(An.envMapIntensity.value=F.environmentIntensity),mn&&(yt.setValue(L,"toneMappingExposure",y.toneMappingExposure),Be.needsLights&&Ma(An,oo),ve&&j.fog===!0&&se.refreshFogUniforms(An,ve),se.refreshMaterialUniforms(An,j,U,te,u.state.transmissionRenderTarget[w.id]),Dl.upload(L,kn(Be),An,V)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Dl.upload(L,kn(Be),An,V),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&yt.setValue(L,"center",k.center),yt.setValue(L,"modelViewMatrix",k.modelViewMatrix),yt.setValue(L,"normalMatrix",k.normalMatrix),yt.setValue(L,"modelMatrix",k.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Kt=j.uniformsGroups;for(let sn=0,Pc=Kt.length;sn<Pc;sn++){const _r=Kt[sn];be.update(_r,pn),be.bind(_r,pn)}}return pn}function Ma(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function pi(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,F,X){const j=Q.get(w);j.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),Q.get(w.texture).__webglTexture=F,Q.get(w.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:X,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){const X=Q.get(w);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0};const Ea=L.createFramebuffer();this.setRenderTarget=function(w,F=0,X=0){b=w,T=F,R=X;let j=!0,k=null,ve=!1,Ae=!1;if(w){const De=Q.get(w);if(De.__useDefaultFramebuffer!==void 0)H.bindFramebuffer(L.FRAMEBUFFER,null),j=!1;else if(De.__webglFramebuffer===void 0)V.setupRenderTarget(w);else if(De.__hasExternalTextures)V.rebindTextures(w,Q.get(w.texture).__webglTexture,Q.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ze=w.depthTexture;if(De.__boundDepthTexture!==ze){if(ze!==null&&Q.has(ze)&&(w.width!==ze.image.width||w.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(w)}}const He=w.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ae=!0);const Ge=Q.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ge[F])?k=Ge[F][X]:k=Ge[F],ve=!0):w.samples>0&&V.useMultisampledRTT(w)===!1?k=Q.get(w).__webglMultisampledFramebuffer:Array.isArray(Ge)?k=Ge[X]:k=Ge,P.copy(w.viewport),O.copy(w.scissor),W=w.scissorTest}else P.copy(ye).multiplyScalar(U).floor(),O.copy(Ne).multiplyScalar(U).floor(),W=We;if(X!==0&&(k=Ea),H.bindFramebuffer(L.FRAMEBUFFER,k)&&j&&H.drawBuffers(w,k),H.viewport(P),H.scissor(O),H.setScissorTest(W),ve){const De=Q.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,De.__webglTexture,X)}else if(Ae){const De=F;for(let He=0;He<w.textures.length;He++){const Ge=Q.get(w.textures[He]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+He,Ge.__webglTexture,X,De)}}else if(w!==null&&X!==0){const De=Q.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,De.__webglTexture,X)}E=-1},this.readRenderTargetPixels=function(w,F,X,j,k,ve,Ae,Ue=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ae!==void 0&&(De=De[Ae]),De){H.bindFramebuffer(L.FRAMEBUFFER,De);try{const He=w.textures[Ue],Ge=He.format,ze=He.type;if(!ee.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-j&&X>=0&&X<=w.height-k&&(w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ue),L.readPixels(F,X,j,k,pe.convert(Ge),pe.convert(ze),ve))}finally{const He=b!==null?Q.get(b).__webglFramebuffer:null;H.bindFramebuffer(L.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(w,F,X,j,k,ve,Ae,Ue=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ae!==void 0&&(De=De[Ae]),De)if(F>=0&&F<=w.width-j&&X>=0&&X<=w.height-k){H.bindFramebuffer(L.FRAMEBUFFER,De);const He=w.textures[Ue],Ge=He.format,ze=He.type;if(!ee.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Je),L.bufferData(L.PIXEL_PACK_BUFFER,ve.byteLength,L.STREAM_READ),w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ue),L.readPixels(F,X,j,k,pe.convert(Ge),pe.convert(ze),0);const at=b!==null?Q.get(b).__webglFramebuffer:null;H.bindFramebuffer(L.FRAMEBUFFER,at);const Tt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await YS(L,Tt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Je),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ve),L.deleteBuffer(Je),L.deleteSync(Tt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,X=0){const j=Math.pow(2,-X),k=Math.floor(w.image.width*j),ve=Math.floor(w.image.height*j),Ae=F!==null?F.x:0,Ue=F!==null?F.y:0;V.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,Ae,Ue,k,ve),H.unbindTexture()};const wa=L.createFramebuffer(),Ii=L.createFramebuffer();this.copyTextureToTexture=function(w,F,X=null,j=null,k=0,ve=null){ve===null&&(k!==0?(ua("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ve=k,k=0):ve=0);let Ae,Ue,De,He,Ge,ze,Je,at,Tt;const pt=w.isCompressedTexture?w.mipmaps[ve]:w.image;if(X!==null)Ae=X.max.x-X.min.x,Ue=X.max.y-X.min.y,De=X.isBox3?X.max.z-X.min.z:1,He=X.min.x,Ge=X.min.y,ze=X.isBox3?X.min.z:0;else{const Rn=Math.pow(2,-k);Ae=Math.floor(pt.width*Rn),Ue=Math.floor(pt.height*Rn),w.isDataArrayTexture?De=pt.depth:w.isData3DTexture?De=Math.floor(pt.depth*Rn):De=1,He=0,Ge=0,ze=0}j!==null?(Je=j.x,at=j.y,Tt=j.z):(Je=0,at=0,Tt=0);const ft=pe.convert(F.format),Be=pe.convert(F.type);let xt;F.isData3DTexture?(V.setTexture3D(F,0),xt=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(V.setTexture2DArray(F,0),xt=L.TEXTURE_2D_ARRAY):(V.setTexture2D(F,0),xt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const nt=L.getParameter(L.UNPACK_ROW_LENGTH),pn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Zr=L.getParameter(L.UNPACK_SKIP_PIXELS),mn=L.getParameter(L.UNPACK_SKIP_ROWS),oo=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,pt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,He),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ge),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ze);const yt=w.isDataArrayTexture||w.isData3DTexture,An=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){const Rn=Q.get(w),Kt=Q.get(F),sn=Q.get(Rn.__renderTarget),Pc=Q.get(Kt.__renderTarget);H.bindFramebuffer(L.READ_FRAMEBUFFER,sn.__webglFramebuffer),H.bindFramebuffer(L.DRAW_FRAMEBUFFER,Pc.__webglFramebuffer);for(let _r=0;_r<De;_r++)yt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Q.get(w).__webglTexture,k,ze+_r),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Q.get(F).__webglTexture,ve,Tt+_r)),L.blitFramebuffer(He,Ge,Ae,Ue,Je,at,Ae,Ue,L.DEPTH_BUFFER_BIT,L.NEAREST);H.bindFramebuffer(L.READ_FRAMEBUFFER,null),H.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(k!==0||w.isRenderTargetTexture||Q.has(w)){const Rn=Q.get(w),Kt=Q.get(F);H.bindFramebuffer(L.READ_FRAMEBUFFER,wa),H.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ii);for(let sn=0;sn<De;sn++)yt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Rn.__webglTexture,k,ze+sn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Rn.__webglTexture,k),An?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Kt.__webglTexture,ve,Tt+sn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Kt.__webglTexture,ve),k!==0?L.blitFramebuffer(He,Ge,Ae,Ue,Je,at,Ae,Ue,L.COLOR_BUFFER_BIT,L.NEAREST):An?L.copyTexSubImage3D(xt,ve,Je,at,Tt+sn,He,Ge,Ae,Ue):L.copyTexSubImage2D(xt,ve,Je,at,He,Ge,Ae,Ue);H.bindFramebuffer(L.READ_FRAMEBUFFER,null),H.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else An?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(xt,ve,Je,at,Tt,Ae,Ue,De,ft,Be,pt.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(xt,ve,Je,at,Tt,Ae,Ue,De,ft,pt.data):L.texSubImage3D(xt,ve,Je,at,Tt,Ae,Ue,De,ft,Be,pt):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ve,Je,at,Ae,Ue,ft,Be,pt.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ve,Je,at,pt.width,pt.height,ft,pt.data):L.texSubImage2D(L.TEXTURE_2D,ve,Je,at,Ae,Ue,ft,Be,pt);L.pixelStorei(L.UNPACK_ROW_LENGTH,nt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Zr),L.pixelStorei(L.UNPACK_SKIP_ROWS,mn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,oo),ve===0&&F.generateMipmaps&&L.generateMipmap(xt),H.unbindTexture()},this.initRenderTarget=function(w){Q.get(w).__webglFramebuffer===void 0&&V.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?V.setTextureCube(w,0):w.isData3DTexture?V.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?V.setTexture2DArray(w,0):V.setTexture2D(w,0),H.unbindTexture()},this.resetState=function(){T=0,R=0,b=null,H.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),n.unpackColorSpace=it._getUnpackColorSpace()}}class jA{static createButton(e,n={}){const i=document.createElement("button");function r(){if(n.domOverlay===void 0){const h=document.createElement("div");h.style.display="none",document.body.appendChild(h);const p=document.createElementNS("http://www.w3.org/2000/svg","svg");p.setAttribute("width",38),p.setAttribute("height",38),p.style.position="absolute",p.style.right="20px",p.style.top="20px",p.addEventListener("click",function(){c.end()}),h.appendChild(p);const _=document.createElementNS("http://www.w3.org/2000/svg","path");_.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),_.setAttribute("stroke","#fff"),_.setAttribute("stroke-width",2),p.appendChild(_),n.optionalFeatures===void 0&&(n.optionalFeatures=[]),n.optionalFeatures.push("dom-overlay"),n.domOverlay={root:h}}let c=null;async function f(h){h.addEventListener("end",d),e.xr.setReferenceSpaceType("local"),await e.xr.setSession(h),i.textContent="STOP AR",n.domOverlay.root.style.display="",c=h}function d(){c.removeEventListener("end",d),i.textContent="START AR",n.domOverlay.root.style.display="none",c=null}i.style.display="",i.style.cursor="pointer",i.style.left="calc(50% - 50px)",i.style.width="100px",i.textContent="START AR",i.onmouseenter=function(){i.style.opacity="1.0"},i.onmouseleave=function(){i.style.opacity="0.5"},i.onclick=function(){c===null?navigator.xr.requestSession("immersive-ar",n).then(f):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",n).then(f).catch(h=>{console.warn(h)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",n).then(f).catch(h=>{console.warn(h)})}function s(){i.style.display="",i.style.cursor="auto",i.style.left="calc(50% - 75px)",i.style.width="150px",i.onmouseenter=null,i.onmouseleave=null,i.onclick=null}function o(){s(),i.textContent="AR NOT SUPPORTED"}function a(c){s(),console.warn("Exception when trying to call xr.isSessionSupported",c),i.textContent="AR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return i.id="ARButton",i.style.display="none",l(i),navigator.xr.isSessionSupported("immersive-ar").then(function(c){c?r():o()}).catch(a),i;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}}const o_={type:"change"},Od={type:"start"},fv={type:"end"},pl=new Rd,a_=new Wi,YA=Math.cos(70*Ll.DEG2RAD),Dt=new N,on=2*Math.PI,ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ku=1e-6;class qA extends lM{constructor(e,n=null){super(e,n),this.state=ct.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Us.ROTATE,MIDDLE:Us.DOLLY,RIGHT:Us.PAN},this.touches={ONE:As.ROTATE,TWO:As.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Vr,this._lastTargetPosition=new N,this._quat=new Vr().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Im,this._sphericalDelta=new Im,this._scale=1,this._panOffset=new N,this._rotateStart=new xe,this._rotateEnd=new xe,this._rotateDelta=new xe,this._panStart=new xe,this._panEnd=new xe,this._panDelta=new xe,this._dollyStart=new xe,this._dollyEnd=new xe,this._dollyDelta=new xe,this._dollyDirection=new N,this._mouse=new xe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=KA.bind(this),this._onPointerDown=$A.bind(this),this._onPointerUp=ZA.bind(this),this._onContextMenu=r2.bind(this),this._onMouseWheel=e2.bind(this),this._onKeyDown=t2.bind(this),this._onTouchStart=n2.bind(this),this._onTouchMove=i2.bind(this),this._onMouseDown=JA.bind(this),this._onMouseMove=QA.bind(this),this._interceptControlDown=s2.bind(this),this._interceptControlUp=o2.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(o_),this.update(),this.state=ct.NONE}update(e=null){const n=this.object.position;Dt.copy(n).sub(this.target),Dt.applyQuaternion(this._quat),this._spherical.setFromVector3(Dt),this.autoRotate&&this.state===ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=on:i>Math.PI&&(i-=on),r<-Math.PI?r+=on:r>Math.PI&&(r-=on),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Dt.setFromSpherical(this._spherical),Dt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Dt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Dt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Dt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(pl.origin.copy(this.object.position),pl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(pl.direction))<YA?this.object.lookAt(this.target):(a_.setFromNormalAndCoplanarPoint(this.object.up,this.target),pl.intersectPlane(a_,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ku||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ku||this._lastTargetPosition.distanceToSquared(this.target)>ku?(this.dispatchEvent(o_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?on/60*this.autoRotateSpeed*e:on/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Dt.setFromMatrixColumn(n,0),Dt.multiplyScalar(-e),this._panOffset.add(Dt)}_panUp(e,n){this.screenSpacePanning===!0?Dt.setFromMatrixColumn(n,1):(Dt.setFromMatrixColumn(n,0),Dt.crossVectors(this.object.up,Dt)),Dt.multiplyScalar(e),this._panOffset.add(Dt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Dt.copy(r).sub(this.target);let s=Dt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(on*this._rotateDelta.x/n.clientHeight),this._rotateUp(on*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(on*this._rotateDelta.x/n.clientHeight),this._rotateUp(on*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new xe,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function $A(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function KA(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function ZA(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(fv),this.state=ct.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function JA(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Us.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=ct.DOLLY;break;case Us.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ct.ROTATE}break;case Us.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ct.PAN}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(Od)}function QA(t){switch(this.state){case ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function e2(t){this.enabled===!1||this.enableZoom===!1||this.state!==ct.NONE||(t.preventDefault(),this.dispatchEvent(Od),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(fv))}function t2(t){this.enabled!==!1&&this._handleKeyDown(t)}function n2(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case As.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=ct.TOUCH_ROTATE;break;case As.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=ct.TOUCH_PAN;break;default:this.state=ct.NONE}break;case 2:switch(this.touches.TWO){case As.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=ct.TOUCH_DOLLY_PAN;break;case As.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=ct.TOUCH_DOLLY_ROTATE;break;default:this.state=ct.NONE}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(Od)}function i2(t){switch(this._trackPointer(t),this.state){case ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=ct.NONE}}function r2(t){this.enabled!==!1&&t.preventDefault()}function s2(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function o2(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function l_(t){const e=new si,n=new ti({color:3816026,roughness:.8,metalness:.8}),i=t.wallThickness||.2,r=t.wallHeight||3;return t.walls.forEach(s=>{const o=new N(s.p1[0],0,s.p1[1]),a=new N(s.p2[0],0,s.p2[1]),l=new N().subVectors(a,o),c=l.length();if(c<.01)return;const f=new no(c,r,i),d=new At(f,n.clone()),h=new N().addVectors(o,a).multiplyScalar(.5);d.position.set(h.x,r/2,h.z),d.rotation.y=Math.atan2(l.z,l.x),d.castShadow=!0,d.receiveShadow=!0,e.add(d)}),{wallGroup:e,wallMaterial:n}}const a2={floorId:"f1",floorNumber:1,floorName:"Ground Floor",corridorPolygon:[[0,3.2],[24.54,3.2],[24.54,2.35],[27.54,2.35],[27.54,3.2],[27.54,3.2],[38.98,3.2],[38.98,4.1],[27.17,4.1],[5.36,4.1],[5.36,7.3],[0,7.3],[0,4.1]],corridorColor:"#2ecc40",rooms:[{id:"f1_gymkhana",name:"GYMKHANA",center:[3.35,1.6],connectedTo:["f1_wp_hall_gymkhana"]},{id:"f1_g1",name:"Classroom G1",center:[8.62,1.6],connectedTo:["f1_wp_hall_g1"]},{id:"f1_g2",name:"Classroom G2",center:[17.54,1.6],connectedTo:["f1_wp_hall_g2"]},{id:"f1_stairs_top",name:"Stairs (Top)",center:[26.04,1.1],connectedTo:["f1_wp_hall_stairs_top"]},{id:"f1_g6",name:"Classroom G6",center:[33.15,3.65],connectedTo:["f1_wp_hall_g6"]},{id:"f1_lift",name:"Lift",center:[.89,5.7],connectedTo:[]},{id:"f1_stairs_bot",name:"Stairs (Bot)",center:[3.57,5.7],connectedTo:["f1_wp_hall_stairs_bot"]},{id:"f1_g4",name:"Classroom G4",center:[10.95,5.7],connectedTo:["f1_wp_hall_g4"]},{id:"f1_g5",name:"Classroom G5",center:[20.54,5.7],connectedTo:["f1_wp_hall_g5"]},{id:"f1_women",name:"Women Washroom",center:[25.86,5.7],connectedTo:["f1_wp_hall_women"]},{id:"f1_gents",name:"Men Washroom",center:[38.11,5.7],connectedTo:["f1_wp_hall_gents"]}],waypoints:[{id:"f1_wp_hall_stairs_bot",position:[3.57,3.65],connectedTo:["f1_wp_hall_gymkhana"]},{id:"f1_wp_hall_gymkhana",position:[3.35,3.65],connectedTo:["f1_wp_hall_stairs_bot","f1_wp_hall_g1"]},{id:"f1_wp_hall_g1",position:[8.62,3.65],connectedTo:["f1_wp_hall_gymkhana","f1_wp_hall_g4"]},{id:"f1_wp_hall_g4",position:[10.95,3.65],connectedTo:["f1_wp_hall_g1","f1_wp_hall_g2"]},{id:"f1_wp_hall_g2",position:[17.54,3.65],connectedTo:["f1_wp_hall_g4","f1_wp_hall_g5"]},{id:"f1_wp_hall_g5",position:[20.54,3.65],connectedTo:["f1_wp_hall_g2","f1_wp_hall_stairs_top"]},{id:"f1_wp_hall_stairs_top",position:[26.04,3.65],connectedTo:["f1_wp_hall_g5","f1_wp_hall_women"]},{id:"f1_wp_hall_women",position:[25.86,3.65],connectedTo:["f1_wp_hall_stairs_top","f1_wp_hall_g6"]},{id:"f1_wp_hall_g6",position:[33.15,3.65],connectedTo:["f1_wp_hall_women","f1_wp_hall_gents"]},{id:"f1_wp_hall_gents",position:[38.11,3.65],connectedTo:["f1_wp_hall_g6"]}],walls:[{p1:[0,0],p2:[24.54,0]},{p1:[27.54,0],p2:[38.98,0]},{p1:[38.98,0],p2:[38.98,7.3]},{p1:[38.98,7.3],p2:[5.36,7.3]},{p1:[1.78,7.3],p2:[0,7.3]},{p1:[0,7.3],p2:[0,0]},{p1:[0,3.2],p2:[24.54,3.2]},{p1:[27.54,3.2],p2:[38.98,3.2]},{p1:[0,4.1],p2:[38.98,4.1]},{p1:[6.7,0],p2:[6.7,3.2]},{p1:[13.54,0],p2:[13.54,3.2]},{p1:[24.54,0],p2:[24.54,3.2]},{p1:[27.54,0],p2:[27.54,3.2]},{p1:[1.78,4.1],p2:[1.78,7.3]},{p1:[5.36,4.1],p2:[5.36,7.3]},{p1:[16.54,4.1],p2:[16.54,7.3]},{p1:[24.54,4.1],p2:[24.54,7.3]},{p1:[32.38,4.1],p2:[32.38,7.3]}],wallHeight:3,wallThickness:.15,floorMessages:[{id:"m1",type:"welcome",text:"GROUND FLOOR - ENTRANCE",position:[2,3.65]},{id:"m2",type:"quote",text:"Keep Moving Forward 🚀",position:[15,3.65]}]},l2={floorId:"f2",floorNumber:2,floorName:"1st Floor",corridorPolygon:[[0,3.2],[24.54,3.2],[24.54,2.35],[27.54,2.35],[27.54,3.2],[27.54,3.2],[38.98,3.2],[38.98,4.1],[27.17,4.1],[5.36,4.1],[5.36,7.3],[0,7.3],[0,4.1]],corridorColor:"#2ecc40",rooms:[{id:"f2_lab1",name:"Lab 1",center:[3.35,1.6],connectedTo:["f2_wp_hall_lab1"]},{id:"f2_lab2",name:"Lab 2",center:[8.62,1.6],connectedTo:["f2_wp_hall_lab2"]},{id:"f2_lab3",name:"Lab 3",center:[17.54,1.6],connectedTo:["f2_wp_hall_lab3"]},{id:"f2_stairs_top",name:"Stairs (Top)",center:[26.04,1.1],connectedTo:["f2_wp_hall_stairs_top"]},{id:"f2_lab6",name:"Lab 6",center:[33.15,3.65],connectedTo:["f2_wp_hall_lab6"]},{id:"f2_lift",name:"Lift",center:[.89,5.7],connectedTo:[]},{id:"f2_stairs_bot",name:"Stairs (Bot)",center:[3.57,5.7],connectedTo:["f2_wp_hall_stairs_bot"]},{id:"f2_lab4",name:"Lab 4",center:[10.95,5.7],connectedTo:["f2_wp_hall_lab4"]},{id:"f2_lab5",name:"Lab 5",center:[20.54,5.7],connectedTo:["f2_wp_hall_lab5"]},{id:"f2_women",name:"Ladies Toilet",center:[25.86,5.7],connectedTo:["f2_wp_hall_women"]},{id:"f2_gents",name:"Men Washroom",center:[38.11,5.7],connectedTo:["f2_wp_hall_gents"]}],waypoints:[{id:"f2_wp_hall_stairs_bot",position:[3.57,3.65],connectedTo:["f2_wp_hall_lab1"]},{id:"f2_wp_hall_lab1",position:[3.35,3.65],connectedTo:["f2_wp_hall_stairs_bot","f2_wp_hall_lab2"]},{id:"f2_wp_hall_lab2",position:[8.62,3.65],connectedTo:["f2_wp_hall_lab1","f2_wp_hall_lab4"]},{id:"f2_wp_hall_lab4",position:[10.95,3.65],connectedTo:["f2_wp_hall_lab2","f2_wp_hall_lab3"]},{id:"f2_wp_hall_lab3",position:[17.54,3.65],connectedTo:["f2_wp_hall_lab4","f2_wp_hall_lab5"]},{id:"f2_wp_hall_lab5",position:[20.54,3.65],connectedTo:["f2_wp_hall_lab3","f2_wp_hall_stairs_top"]},{id:"f2_wp_hall_stairs_top",position:[26.04,3.65],connectedTo:["f2_wp_hall_lab5","f2_wp_hall_women"]},{id:"f2_wp_hall_women",position:[25.86,3.65],connectedTo:["f2_wp_hall_stairs_top","f2_wp_hall_lab6"]},{id:"f2_wp_hall_lab6",position:[33.15,3.65],connectedTo:["f2_wp_hall_women","f2_wp_hall_gents"]},{id:"f2_wp_hall_gents",position:[38.11,3.65],connectedTo:["f2_wp_hall_lab6"]}],walls:[{p1:[0,0],p2:[24.54,0]},{p1:[27.54,0],p2:[38.98,0]},{p1:[38.98,0],p2:[38.98,7.3]},{p1:[38.98,7.3],p2:[5.36,7.3]},{p1:[1.78,7.3],p2:[0,7.3]},{p1:[0,7.3],p2:[0,0]},{p1:[0,3.2],p2:[24.54,3.2]},{p1:[27.54,3.2],p2:[38.98,3.2]},{p1:[0,4.1],p2:[38.98,4.1]},{p1:[6.7,0],p2:[6.7,3.2]},{p1:[13.54,0],p2:[13.54,3.2]},{p1:[24.54,0],p2:[24.54,3.2]},{p1:[27.54,0],p2:[27.54,3.2]},{p1:[1.78,4.1],p2:[1.78,7.3]},{p1:[5.36,4.1],p2:[5.36,7.3]},{p1:[16.54,4.1],p2:[16.54,7.3]},{p1:[24.54,4.1],p2:[24.54,7.3]},{p1:[32.38,4.1],p2:[32.38,7.3]}],wallHeight:3,wallThickness:.15,floorMessages:[{id:"m1",type:"welcome",text:"1ST FLOOR - LAB BLOCK",position:[2,3.65]},{id:"m2",type:"quote",text:"Code is Poetry 💻",position:[15,3.65]}]},c2={floorId:"f3",floorNumber:3,floorName:"2nd Floor (CSE)",corridorPolygon:[[0,3.2],[24.54,3.2],[24.54,2.35],[27.54,2.35],[27.54,3.2],[27.17,3.2],[38.98,3.2],[38.98,4.1],[27.17,4.1],[5.36,4.1],[5.36,7.3],[0,7.3],[0,4.1]],corridorColor:"#2ecc40",rooms:[{id:"f3_hod",name:"HOD Cabin",center:[2,1.6],connectedTo:["f3_wp_hod"]},{id:"f3_dept_lib",name:"Dept Library",center:[5.35,1.6],connectedTo:["f3_wp_lib"]},{id:"f3_server",name:"Server Room",center:[8.62,1.6],connectedTo:["f3_wp_server"]},{id:"f3_tutorial",name:"Tutorial Room",center:[13.54,1.6],connectedTo:["f3_wp_tutorial"]},{id:"f3_lab10",name:"Lab 10",center:[20.54,1.6],connectedTo:["f3_wp_lab10"]},{id:"f3_stairs_top",name:"Stairs (Top)",center:[26.04,1.1],connectedTo:["f3_wp_stairs_top"]},{id:"f3_lab9",name:"Lab 9",center:[33.15,3.65],connectedTo:["f3_wp_lab9"]},{id:"f3_corridor",name:"Middle Portion",center:[13.5,3.65],connectedTo:["f3_wp_lab7"]},{id:"f3_lift",name:"Lift",center:[.89,5.7],connectedTo:[]},{id:"f3_stairs_bot",name:"Stairs (Bot)",center:[3.57,5.7],connectedTo:["f3_wp_stairs_bot"]},{id:"f3_lab7",name:"Lab 7",center:[10.95,5.7],connectedTo:["f3_wp_lab7"]},{id:"f3_lab8",name:"Lab 8",center:[20.54,5.7],connectedTo:["f3_wp_lab8"]},{id:"f3_women",name:"Ladies Toilet",center:[25.86,5.7],connectedTo:["f3_wp_women"]},{id:"f3_gents",name:"Men Washroom",center:[38.11,5.7],connectedTo:["f3_wp_gents"]}],waypoints:[{id:"f3_wp_stairs_bot",position:[3.57,3.65],connectedTo:["f3_wp_hod","f3_wp_lab7"]},{id:"f3_wp_hod",position:[2,3.65],connectedTo:["f3_wp_stairs_bot","f3_wp_lib"]},{id:"f3_wp_lib",position:[5.35,3.65],connectedTo:["f3_wp_hod","f3_wp_server"]},{id:"f3_wp_server",position:[8.62,3.65],connectedTo:["f3_wp_lib","f3_wp_tutorial"]},{id:"f3_wp_tutorial",position:[13.54,3.65],connectedTo:["f3_wp_server","f3_wp_lab10"]},{id:"f3_wp_lab10",position:[20.54,3.65],connectedTo:["f3_wp_tutorial","f3_wp_stairs_top"]},{id:"f3_wp_stairs_top",position:[26.04,3.65],connectedTo:["f3_wp_lab10","f3_wp_lab9"]},{id:"f3_wp_lab7",position:[10.95,3.65],connectedTo:["f3_wp_stairs_bot","f3_wp_lab8"]},{id:"f3_wp_lab8",position:[20.54,3.65],connectedTo:["f3_wp_lab7","f3_wp_women"]},{id:"f3_wp_women",position:[25.86,3.65],connectedTo:["f3_wp_lab8","f3_wp_lab9"]},{id:"f3_wp_lab9",position:[32.21,3.65],connectedTo:["f3_wp_stairs_top","f3_wp_women","f3_wp_gents"]},{id:"f3_wp_gents",position:[38.11,3.65],connectedTo:["f3_wp_lab9"]}],walls:[{p1:[0,0],p2:[26.47,0]},{p1:[27.17,0],p2:[38.98,0]},{p1:[38.98,0],p2:[38.98,7.3]},{p1:[38.98,7.3],p2:[37.24,7.3]},{p1:[27.17,7.3],p2:[5.36,7.3]},{p1:[1.78,7.3],p2:[0,7.3]},{p1:[0,0],p2:[0,7.3]},{p1:[0,7.3],p2:[0,10.18]},{p1:[0,10.18],p2:[1.78,10.18]},{p1:[1.78,10.18],p2:[1.78,7.3]},{p1:[1.78,7.3],p2:[1.78,10.88]},{p1:[1.78,10.88],p2:[5.36,10.88]},{p1:[5.36,10.88],p2:[5.36,7.3]},{p1:[3.58,7.3],p2:[3.58,10.88]},{p1:[27.17,0],p2:[27.17,7.3]},{p1:[27.17,2.33],p2:[38.98,2.33]},{p1:[0,3.2],p2:[24.54,3.2]},{p1:[26.47,3.2],p2:[27.17,3.2]},{p1:[0,4.1],p2:[27.17,4.1]},{p1:[4,0],p2:[4,3.2]},{p1:[6.7,0],p2:[6.7,3.2]},{p1:[10.54,0],p2:[10.54,3.2]},{p1:[16.54,0],p2:[16.54,3.2]},{p1:[24.54,0],p2:[24.54,3.2]},{p1:[24.54,0],p2:[24.54,1.5]},{p1:[27.54,0],p2:[27.54,1.5]},{p1:[24.54,1.5],p2:[27.54,1.5]},{p1:[24.54,2.35],p2:[27.54,2.35]},{p1:[1.78,4.1],p2:[1.78,7.3]},{p1:[3.58,4.1],p2:[3.58,7.3]},{p1:[5.36,4.1],p2:[5.36,7.3]},{p1:[16.54,4.1],p2:[16.54,7.3]},{p1:[24.54,4.1],p2:[24.54,7.3]},{p1:[27.17,4.1],p2:[27.17,7.3]},{p1:[37.24,4.1],p2:[37.24,7.3]}],wallHeight:3,wallThickness:.15,floorMessages:[{id:"m1",type:"welcome",text:"WELCOME TO CSE DEPARTMENT",position:[2,3.65]},{id:"m2",type:"quote",text:"Precision is Key 🎯",position:[15,3.65]}]},u2={floorId:"f4",floorNumber:4,floorName:"3rd Floor",corridorPolygon:[[0,3.2],[24.54,3.2],[24.54,2.35],[27.54,2.35],[27.54,3.2],[27.54,3.2],[38.98,3.2],[38.98,4.1],[27.17,4.1],[5.36,4.1],[5.36,7.3],[0,7.3],[0,4.1]],corridorColor:"#2ecc40",rooms:[{id:"f4_301",name:"Classroom 301",center:[3.35,1.6],connectedTo:["f4_wp_hall_301"]},{id:"f4_302",name:"Classroom 302",center:[8.62,1.6],connectedTo:["f4_wp_hall_302"]},{id:"f4_303",name:"Classroom 303",center:[17.54,1.6],connectedTo:["f4_wp_hall_303"]},{id:"f4_stairs_top",name:"Stairs (Top)",center:[26.04,1.1],connectedTo:["f4_wp_hall_stairs_top"]},{id:"f4_306",name:"Classroom 306",center:[33.15,3.65],connectedTo:["f4_wp_hall_306"]},{id:"f4_lift",name:"Lift",center:[.89,5.7],connectedTo:[]},{id:"f4_stairs_bot",name:"Stairs (Bot)",center:[3.57,5.7],connectedTo:["f4_wp_hall_stairs_bot"]},{id:"f4_304",name:"Classroom 304",center:[10.95,5.7],connectedTo:["f4_wp_hall_304"]},{id:"f4_305",name:"Classroom 305",center:[20.54,5.7],connectedTo:["f4_wp_hall_305"]},{id:"f4_women",name:"Women Washroom",center:[25.86,5.7],connectedTo:["f4_wp_hall_women"]},{id:"f4_gents",name:"Men Washroom",center:[38.11,5.7],connectedTo:["f4_wp_hall_gents"]}],waypoints:[{id:"f4_wp_hall_stairs_bot",position:[3.57,3.65],connectedTo:["f4_wp_hall_301"]},{id:"f4_wp_hall_301",position:[3.35,3.65],connectedTo:["f4_wp_hall_stairs_bot","f4_wp_hall_302"]},{id:"f4_wp_hall_302",position:[8.62,3.65],connectedTo:["f4_wp_hall_301","f4_wp_hall_304"]},{id:"f4_wp_hall_304",position:[10.95,3.65],connectedTo:["f4_wp_hall_302","f4_wp_hall_303"]},{id:"f4_wp_hall_303",position:[17.54,3.65],connectedTo:["f4_wp_hall_304","f4_wp_hall_305"]},{id:"f4_wp_hall_305",position:[20.54,3.65],connectedTo:["f4_wp_hall_303","f4_wp_hall_stairs_top"]},{id:"f4_wp_hall_stairs_top",position:[26.04,3.65],connectedTo:["f4_wp_hall_305","f4_wp_hall_women"]},{id:"f4_wp_hall_women",position:[25.86,3.65],connectedTo:["f4_wp_hall_stairs_top","f4_wp_hall_306"]},{id:"f4_wp_hall_306",position:[33.15,3.65],connectedTo:["f4_wp_hall_women","f4_wp_hall_gents"]},{id:"f4_wp_hall_gents",position:[38.11,3.65],connectedTo:["f4_wp_hall_306"]}],walls:[{p1:[0,0],p2:[24.54,0]},{p1:[27.54,0],p2:[38.98,0]},{p1:[38.98,0],p2:[38.98,7.3]},{p1:[38.98,7.3],p2:[5.36,7.3]},{p1:[1.78,7.3],p2:[0,7.3]},{p1:[0,7.3],p2:[0,0]},{p1:[0,3.2],p2:[24.54,3.2]},{p1:[27.54,3.2],p2:[38.98,3.2]},{p1:[0,4.1],p2:[38.98,4.1]},{p1:[6.7,0],p2:[6.7,3.2]},{p1:[13.54,0],p2:[13.54,3.2]},{p1:[24.54,0],p2:[24.54,3.2]},{p1:[27.54,0],p2:[27.54,3.2]},{p1:[1.78,4.1],p2:[1.78,7.3]},{p1:[5.36,4.1],p2:[5.36,7.3]},{p1:[16.54,4.1],p2:[16.54,7.3]},{p1:[24.54,4.1],p2:[24.54,7.3]},{p1:[32.38,4.1],p2:[32.38,7.3]}],wallHeight:3,wallThickness:.15,floorMessages:[{id:"m1",type:"welcome",text:"3RD FLOOR CLASSROOMS",position:[2,3.65]},{id:"m2",type:"quote",text:"Knowledge is Power 📚",position:[15,3.65]}]},f2={floorId:"f5",floorNumber:5,floorName:"4th Floor (ENTC)",corridorPolygon:[[0,3.2],[24.54,3.2],[24.54,2.35],[27.54,2.35],[27.54,3.2],[27.54,3.2],[38.98,3.2],[38.98,4.1],[27.17,4.1],[5.36,4.1],[5.36,7.3],[0,7.3],[0,4.1]],corridorColor:"#2ecc40",rooms:[{id:"f5_entc_hod",name:"ENTC HOD Cabin",center:[3.35,1.6],connectedTo:["f5_wp_hall_hod"]},{id:"f5_dept_lib",name:"Dept Library",center:[8.62,1.6],connectedTo:["f5_wp_hall_dlib"]},{id:"f5_tutorial",name:"Tutorial Room",center:[17.54,1.6],connectedTo:["f5_wp_hall_lab11"]},{id:"f5_lab11",name:"Lab 11",center:[26.04,1.1],connectedTo:["f5_wp_hall_lab11"]},{id:"f5_lab12",name:"Lab 12",center:[33.15,3.65],connectedTo:["f5_wp_hall_lab12"]},{id:"f5_lift",name:"Lift",center:[.89,5.7],connectedTo:[]},{id:"f5_stairs_bot",name:"Stairs (Bot)",center:[3.57,5.7],connectedTo:["f5_wp_hall_stairs_bot"]},{id:"f5_lab13",name:"Lab 13",center:[10.95,5.7],connectedTo:["f5_wp_hall_lab14"]},{id:"f5_lab14",name:"Lab 14",center:[20.54,5.7],connectedTo:["f5_wp_hall_lab14"]}],waypoints:[{id:"f5_wp_hall_stairs_bot",position:[3.57,3.65],connectedTo:["f5_wp_hall_hod"]},{id:"f5_wp_hall_hod",position:[3.35,3.65],connectedTo:["f5_wp_hall_stairs_bot","f5_wp_hall_dlib"]},{id:"f5_wp_hall_dlib",position:[8.62,3.65],connectedTo:["f5_wp_hall_hod","f5_wp_hall_lab11"]},{id:"f5_wp_hall_lab11",position:[17.54,3.65],connectedTo:["f5_wp_hall_dlib","f5_wp_hall_lab12"]},{id:"f5_wp_hall_lab12",position:[33.15,3.65],connectedTo:["f5_wp_hall_lab11","f5_wp_hall_lab14"]},{id:"f5_wp_hall_lab14",position:[20.54,3.65],connectedTo:["f5_wp_hall_lab12"]}],walls:[{p1:[0,0],p2:[38.98,0]},{p1:[38.98,0],p2:[38.98,7.3]},{p1:[38.98,7.3],p2:[0,7.3]},{p1:[0,7.3],p2:[0,0]},{p1:[0,3.2],p2:[38.98,3.2]},{p1:[0,4.1],p2:[38.98,4.1]}],wallHeight:3,wallThickness:.15,floorMessages:[{id:"m1",type:"welcome",text:"WELCOME TO ENTC DEPT",position:[2,3.65]},{id:"m2",type:"quote",text:"Connecting the World 📡",position:[15,3.65]}]},h2={floorId:"f6",floorNumber:6,floorName:"5th Floor",corridorPolygon:[[0,3.2],[24.54,3.2],[24.54,2.35],[27.54,2.35],[27.54,3.2],[27.54,3.2],[38.98,3.2],[38.98,4.1],[27.17,4.1],[5.36,4.1],[5.36,7.3],[0,7.3],[0,4.1]],corridorColor:"#2ecc40",rooms:[{id:"f6_501",name:"Classroom 501",center:[3.35,1.6],connectedTo:["f6_wp_hall_501"]},{id:"f6_502",name:"Classroom 502",center:[8.62,1.6],connectedTo:["f6_wp_hall_502"]},{id:"f6_503",name:"Classroom 503",center:[17.54,1.6],connectedTo:["f6_wp_hall_503"]},{id:"f6_504",name:"Classroom 504",center:[26.04,1.1],connectedTo:["f6_wp_hall_503"]},{id:"f6_505",name:"Classroom 505",center:[33.15,3.65],connectedTo:["f6_wp_hall_505"]},{id:"f6_lift",name:"Lift",center:[.89,5.7],connectedTo:[]},{id:"f6_stairs_bot",name:"Stairs (Bot)",center:[3.57,5.7],connectedTo:["f6_wp_hall_stairs_bot"]}],waypoints:[{id:"f6_wp_hall_stairs_bot",position:[3.57,3.65],connectedTo:["f6_wp_hall_501"]},{id:"f6_wp_hall_501",position:[3.35,3.65],connectedTo:["f6_wp_hall_stairs_bot","f6_wp_hall_502"]},{id:"f6_wp_hall_502",position:[8.62,3.65],connectedTo:["f6_wp_hall_501","f6_wp_hall_503"]},{id:"f6_wp_hall_503",position:[17.54,3.65],connectedTo:["f6_wp_hall_502","f6_wp_hall_505"]},{id:"f6_wp_hall_505",position:[33.15,3.65],connectedTo:["f6_wp_hall_503"]}],walls:[{p1:[0,0],p2:[38.98,0]},{p1:[38.98,0],p2:[38.98,7.3]},{p1:[38.98,7.3],p2:[0,7.3]},{p1:[0,7.3],p2:[0,0]},{p1:[0,3.2],p2:[38.98,3.2]},{p1:[0,4.1],p2:[38.98,4.1]}],wallHeight:3,wallThickness:.15,floorMessages:[{id:"m1",type:"welcome",text:"5TH FLOOR CLASSROOMS",position:[2,3.65]},{id:"m2",type:"quote",text:"Reach for the Stars ✨",position:[15,3.65]}]},Ki=[{id:"f1",number:1,label:"Ground Floor",marker:{image:"marker_f1.png",position:{x:.89,z:3.65}}},{id:"f2",number:2,label:"1st Floor",marker:{image:"marker_f2.png",position:{x:.89,z:3.65}}},{id:"f3",number:3,label:"2nd Floor (CSE)",marker:{image:"marker.png",position:{x:2,z:1.6}}},{id:"f4",number:4,label:"3rd Floor",marker:{image:"marker_f4.png",position:{x:.89,z:3.65}}},{id:"f5",number:5,label:"4th Floor (ENTC)",marker:{image:"marker_f5.png",position:{x:.89,z:3.65}}},{id:"f6",number:6,label:"5th Floor",marker:{image:"marker_f6.png",position:{x:.89,z:3.65}}}],Wn=[a2,l2,c2,u2,f2,h2],kd=[{name:"Main Stairs (Bottom)",type:"stairs",costPerFloor:10,floorWaypoints:{f1:"f1_wp_hall_stairs_bot",f2:"f2_wp_hall_stairs_bot",f3:"f3_wp_stairs_bot",f4:"f4_wp_hall_stairs_bot",f5:"f5_wp_hall_stairs_bot",f6:"f6_wp_hall_stairs_bot"}},{name:"Side Stairs (Top)",type:"stairs",costPerFloor:10,floorWaypoints:{f1:"f1_wp_hall_stairs_top",f2:"f2_wp_hall_stairs_top",f3:"f3_wp_stairs_top",f4:"f4_wp_hall_stairs_top",f5:"f5_wp_hall_lab12",f6:"f6_wp_hall_505"}}];function d2({floorData:t,activeSegment:e,pathSegments:n,startRoomId:i,endRoomId:r,onSessionStateChange:s,showARButton:o,showUIView:a}){var ee;const l=ke.useRef(null),c=ke.useRef(null),f=ke.useRef(null),d=ke.useRef(null),h=ke.useRef(null),p=ke.useRef(null),_=ke.useRef([]),g=ke.useRef(null),m=ke.useRef(null),u=ke.useRef(null),v=ke.useRef(0),x=ke.useRef([]),y=ke.useRef(null),C=ke.useRef(null),T=ke.useRef(null),R=ke.useRef(null),b=ke.useRef(null),E=ke.useRef(null),M=ke.useRef(null),P=ke.useRef(i),O=ke.useRef(r),W=ke.useRef(0),q=ke.useRef(!1),[z,Y]=ke.useState(!1),[te,U]=ke.useState(!1),[K,ie]=ke.useState(!1),[ye,Ne]=ke.useState(null),[We,$e]=ke.useState(null),[Xe,Z]=ke.useState(null),[le,Pe]=ke.useState(""),[Oe,Ie]=ke.useState(!1);ke.useRef(0);const Ke=()=>{var H;if(h.current&&f.current){const ne=h.current,Q=f.current,V=(H=Ki.find(we=>we.id===t.floorId))==null?void 0:H.marker;if(!V)return;ne.position.set(Q.position.x,0,Q.position.z),ne.rotation.set(0,Q.rotation.y,0),ne.translateX(-V.position.x),ne.translateZ(-V.position.z),Ne({label:t.floorName,floorId:t.floorId}),ie(!0),U(!1),navigator.vibrate&&navigator.vibrate(200)}};ke.useEffect(()=>{if(console.log("isFarView changed:",z),f.current&&p.current){const H=z?70:38;f.current.position.y=H,p.current.update()}},[z]),ke.useEffect(()=>{P.current=i??"",O.current=r??""},[i,r]),ke.useEffect(()=>{if(!h.current)return;T.current&&(h.current.remove(T.current),T.current.traverse(V=>{V.isMesh&&(V.geometry.dispose(),V.material.dispose())})),b.current&&(h.current.remove(b.current),b.current.traverse(V=>{V.isMesh&&(V.geometry.dispose(),V.material.dispose())})),E.current&&(h.current.remove(E.current),E.current.traverse(V=>{V.isMesh&&(V.geometry.dispose(),V.material.dispose())})),_.current.forEach(V=>{h.current.remove(V.cone,V.shaft),V.cone.geometry.dispose(),V.shaft.geometry.dispose()}),_.current=[],v.current=0,x.current=[],y.current=null;const{wallGroup:H}=l_(t);h.current.add(H),T.current=H;const ne=new si;b.current=ne,h.current.add(ne),L(ne);const Q=new si;E.current=Q,h.current.add(Q),ue(Q),M.current&&h.current.remove(M.current),st(h.current,H),h.current&&re(e,h.current)},[t,e]),ke.useEffect(()=>{if(!l.current)return;const H=new v1;H.background=new Qe(657935),H.fog=new Cd(986910,10,60),c.current=H;const ne=new si;h.current=ne,H.add(ne);const Q=new si;b.current=Q,ne.add(Q);const V=new xn(75,window.innerWidth/window.innerHeight,.1,1e3);V.position.set(0,10,50),f.current=V;const we=new XA({antialias:!0,alpha:!0});we.setSize(window.innerWidth,window.innerHeight),we.setPixelRatio(window.devicePixelRatio),we.shadowMap.enabled=!0,we.shadowMap.type=E0,we.setClearColor(0,0),l.current.appendChild(we.domElement),we.xr.enabled=!0,d.current=we,(async()=>{var pe;const ge={requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay","dom-overlay-for-handheld-ar","image-tracking"],domOverlay:{root:document.body}},Ee=[],J=window.location.href.split("?")[0].split("#")[0],de=ae=>J.endsWith("/")?J+ae:J.substring(0,J.lastIndexOf("/")+1)+ae;for(const ae of Ki)if(ae.marker)try{const be=new Image;be.src=de(ae.marker.image),await be.decode();const D=await createImageBitmap(be);Ee.push({image:D,widthInMeters:.2}),console.log(`AR: Loaded marker for ${ae.label}`)}catch(be){console.warn(`AR: Failed to load marker for ${ae.label}`,be)}Ee.length>0&&(ge.trackedImages=Ee);const Me=jA.createButton(we,ge);C.current=Me,(pe=l.current)==null||pe.appendChild(Me)})();const A=new oM(16777215,.4);H.add(A);const S=new sM(16777215,2);S.position.set(10,20,10),S.castShadow=!0,S.shadow.mapSize.width=2048,S.shadow.mapSize.height=2048,S.shadow.camera.left=-50,S.shadow.camera.right=50,S.shadow.camera.top=50,S.shadow.camera.bottom=-20,H.add(S);const I=new Nm(10980346,.5);I.position.set(-10,10,-10),I.castShadow=!0,H.add(I);const B=new Nm(13079274,.5);B.position.set(10,10,10),B.castShadow=!0,H.add(B);const se=new qA(V,we.domElement);p.current=se;const{wallGroup:G}=l_(t);ne.add(G),T.current=G,we.xr.addEventListener("sessionstart",()=>{var J;s&&s(!0),U(!0),ie(!1);const ge=h.current;if(!ge)return;const Ee=1;if(ge.scale.set(Ee,Ee,Ee),e&&e.positions.length>=2){const de=e.positions[0],Me=e.positions[1],pe=Me[0]-de[0],ae=Me[1]-de[1],be=Math.atan2(pe,ae);ge.rotation.set(0,-be,0);const D=new N(de[0],0,de[1]).multiplyScalar(Ee);D.applyAxisAngle(new N(0,1,0),ge.rotation.y),ge.position.set(-D.x,0,-D.z)}else{const de=t.rooms.find(Me=>Me.id===P.current);if((J=de==null?void 0:de.connectedTo)!=null&&J[0]){const Me=t.waypoints.find(pe=>pe.id===de.connectedTo[0]);Me&&ge.position.set(-Me.position[0]*Ee,0,-Me.position[1]*Ee)}}b.current&&(b.current.visible=!1),E.current&&(E.current.visible=!1),M.current&&(M.current.visible=!1),T.current&&(T.current.visible=!1),e&&h.current&&re(e,h.current),_.current.forEach(de=>{de.cone.visible=!0,de.shaft.visible=!0,de.ring.visible=!0}),u.current&&(u.current.visible=!1)}),we.xr.addEventListener("sessionend",()=>{s&&s(!1);const ge=h.current;ge&&(ge.scale.set(1,1,1),ge.position.set(0,0,0),ge.rotation.set(0,0,0),b.current&&(b.current.visible=!0),M.current&&(M.current.visible=!0),T.current&&(T.current.visible=!0),u.current&&(u.current.visible=!1),e&&ge&&re(e,ge))}),st(ne,G),L(Q);const Re=()=>{V.aspect=window.innerWidth/window.innerHeight,V.updateProjectionMatrix(),we.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",Re);const he=()=>{var de;se.update();const ge=we.xr.getSession(),Ee=we.xr.getFrame();if(ge&&Ee&&te&&!K&&h.current){const Me=((de=Ee.getImageTrackingResults)==null?void 0:de.call(Ee))||[];for(const pe of Me)if(pe.trackingState==="tracked"||pe.trackingState==="emulated"){const ae=pe.index,D=Ki.filter(ce=>ce.marker)[ae];if(D&&D.marker){const ce=we.xr.getReferenceSpace(),me=Ee.getPose(pe.imageSpace,ce);if(me){const{position:Se,orientation:oe}=me.transform,$=h.current;$.position.set(Se.x,Se.y,Se.z),$.quaternion.set(oe.x,oe.y,oe.z,oe.w),$.translateX(-D.marker.position.x),$.translateZ(-D.marker.position.z),Ne({label:D.label,floorId:D.id}),ie(!0),U(!1),navigator.vibrate&&navigator.vibrate(200)}}}}if(ge&&K&&e&&e.positions.length>0){const Me=new N;V.getWorldPosition(Me);const pe=e.positions[e.positions.length-1],ae=new N(pe[0],0,pe[1]);h.current&&ae.applyMatrix4(h.current.matrixWorld);const be=Me.distanceTo(ae);let D=0;const ce=n.findIndex(oe=>oe.floorId===t.floorId);if(ce!==-1)for(let oe=ce+1;oe<n.length;oe++){const $=n[oe];for(let Ce=1;Ce<$.positions.length;Ce++){const Ve=$.positions[Ce-1],rt=$.positions[Ce];D+=Math.sqrt(Math.pow(rt[0]-Ve[0],2)+Math.pow(rt[1]-Ve[1],2))}D+=5}const me=be+D;$e(be),Z(me),ce===n.length-1&&me<1.5&&!Oe?(navigator.vibrate&&navigator.vibrate([500,100,500]),Ie(!0),Pe("You have arrived!")):me>=1.5&&(Ie(!1),Pe(e.transition?`Take ${e.transition.name} to ${e.transition.toFloor.replace("f","Floor ")}`:"Follow arrows to Destination"))}if(b.current&&ge&&K){const Me=new N;V.getWorldPosition(Me),b.current.children.forEach(pe=>{const ae=new N;pe.getWorldPosition(ae);const be=Me.distanceTo(ae);if(pe.visible=be<5,pe.visible){const D=pe.material;D.opacity=Ll.lerp(1,0,(be-2)/3),pe.scale.setScalar(Ll.lerp(1,.5,(be-2)/3))}})}if(E.current){const Me=new N;V.getWorldPosition(Me),E.current.children.forEach(pe=>{const ae=new N;pe.getWorldPosition(ae);const be=Me.distanceTo(ae),D=ge&&K;if(pe.visible=D?be<4:!0,pe.visible){const ce=pe.material,me=D?Ll.clamp(1-be/4,0,1):.9;ce.opacity=me,ce.transparent=!0;const Se=1+Math.sin(J*3)*.05;pe.scale.setScalar(Se)}})}const J=performance.now()*.001;if(_.current.forEach((Me,pe)=>{const{cone:ae,shaft:be,ring:D}=Me,ce=Math.sin(J*2+pe*.4)*.04;ae.userData.baseY!==void 0&&(ae.position.y=ae.userData.baseY+ce),be.userData.baseY!==void 0&&(be.position.y=be.userData.baseY+ce),D.userData.baseY!==void 0&&(D.position.y=D.userData.baseY);const me=1.8+Math.sin(J*3+pe)*.7;[ae,be].forEach(oe=>{const $=oe.material;$.emissive!==void 0&&($.emissiveIntensity=me)});const Se=1+Math.sin(J*2+pe)*.04;ae.scale.set(Se,Se,Se),be.scale.set(Se,Se,Se)}),g.current){const Me=1+Math.sin(J*4)*.2;g.current.scale.set(Me,Me,Me),g.current.material.opacity=.5+Math.sin(J*4)*.5}if(m.current){const Me=m.current.children[3];Me&&(Me.rotation.y+=.03,Me.rotation.x+=.01,Me.position.y=7+Math.sin(J*2.5)*.5);const pe=m.current.children[1];pe&&(pe.rotation.z+=.02,pe.scale.setScalar(1.2+Math.sin(J*2)*.1))}we.render(H,V)};return we.setAnimationLoop(he),()=>{window.removeEventListener("resize",Re),we.setAnimationLoop(null),we.dispose(),se.dispose(),l.current&&we.domElement&&l.current.removeChild(we.domElement),l.current&&arButton.parentNode&&l.current.removeChild(arButton)}},[]),ke.useEffect(()=>{h.current&&re(e,h.current)},[e]),ke.useEffect(()=>{C.current&&(C.current.style.display=o?"block":"none")},[o]);const st=(H,ne)=>{const Q=new eo().setFromObject(ne),V=new N;Q.getSize(V);const we=new N;Q.getCenter(we);const Fe=4,A=new Ur(V.x+Fe,V.z+Fe),S=new ti({color:526346,roughness:.8,metalness:.2}),I=new At(A,S);if(I.rotation.x=-Math.PI/2,I.position.copy(we),I.position.y=0,I.receiveShadow=!0,R.current=S,M.current=I,H.add(I),t.corridorPolygon&&t.corridorPolygon.length>0){const B=new Q0,[se,G]=t.corridorPolygon[0];B.moveTo(se,G),t.corridorPolygon.slice(1).forEach(([J,de])=>{B.lineTo(J,de)}),B.closePath();const Re={depth:.02,bevelEnabled:!1},he=new Nd(B,Re),ge=new ti({color:t.corridorColor||3066944,roughness:.6,metalness:.1,transparent:!0,opacity:.8}),Ee=new At(he,ge);Ee.rotation.x=-Math.PI/2,Ee.position.y=.01,H.add(Ee)}f.current&&p.current&&(f.current.position.set(we.x,38,we.z+.001),p.current.target.copy(we),p.current.update())},L=H=>{if(!t)return;const ne={gymkhana:12,gents:6,women:6,g1:8,g2:8,g3:8,g4:8,g5:8,lab1:8,lab2:8,lab3:8,lab4:8,lab5:8,lab6:8,lab7:10,lab8:10,lab9:14,lab10:8,lab11:8,lab12:8,lab13:8,lab14:8,hod:6,entc_hod:6,dept_lib:4,server:6,tutorial:3.5,corridor:20,lift:3,stairs_bot:3,faculty:6,seminar:10,301:8,302:8,303:8,304:8,306:8,501:8,502:8,503:8,504:8,505:8},Q={gymkhana:6,principal:6,admin:6,conf:6,lab1:6,canteen:6,library:6,ramp:6,hod:6,entc_hod:6,dept_lib:6,server:6,tutorial:6,lab10:6,stairs_top:6,lab9:6,corridor:2,lift:6,stairs_bot:6,lab7:6,lab8:6,women:6,gents:6};t.rooms.forEach(V=>{if(!V.center)return;const we=V.id.split("_").slice(1).join("_"),Fe=ne[we]??6,A=Q[we]??7.5,S=document.createElement("canvas"),I=S.getContext("2d");if(!I)return;S.width=512,S.height=512;const B=96,se=28;let G=B;for(I.font=`bold ${G}px Arial`;I.measureText(V.name).width>S.width*.88&&G>se;)G-=4,I.font=`bold ${G}px Arial`;const Re=V.name.split(" "),he=[];if(Re.length>1&&I.measureText(V.name).width>S.width*.85){const Se=Math.ceil(Re.length/2);he.push(Re.slice(0,Se).join(" ")),he.push(Re.slice(Se).join(" "));for(const oe of he)for(;I.measureText(oe).width>S.width*.88&&G>se;)G-=4,I.font=`bold ${G}px Arial`}else he.push(V.name);const ge=G*1.25,Ee=he.length*ge;I.clearRect(0,0,S.width,S.height),I.fillStyle="rgba(8, 8, 18, 0.82)";const J=32;I.beginPath(),I.moveTo(J,0),I.lineTo(S.width-J,0),I.quadraticCurveTo(S.width,0,S.width,J),I.lineTo(S.width,S.height-J),I.quadraticCurveTo(S.width,S.height,S.width-J,S.height),I.lineTo(J,S.height),I.quadraticCurveTo(0,S.height,0,S.height-J),I.lineTo(0,J),I.quadraticCurveTo(0,0,J,0),I.closePath(),I.fill(),I.strokeStyle="rgba(199, 146, 234, 0.85)",I.lineWidth=8,I.stroke(),I.font=`bold ${G}px Arial`,I.textAlign="center",I.textBaseline="middle",I.shadowColor="rgba(199, 146, 234, 1)",I.shadowBlur=24,I.fillStyle="#ffffff";const de=S.height/2-Ee/2+ge/2;he.forEach((Se,oe)=>{I.fillText(Se,S.width/2,de+oe*ge)}),I.shadowBlur=10,I.fillStyle="#eedeff",he.forEach((Se,oe)=>{I.fillText(Se,S.width/2,de+oe*ge)});const Me=new wm(S);Me.needsUpdate=!0;const pe=new oc({map:Me,transparent:!0,depthWrite:!1,side:Dn}),ae=.7,be=Math.min(Fe-ae,Fe*.85),D=Math.min(A-ae,A*.75),ce=new Ur(be,D),me=new At(ce,pe);me.position.set(V.center[0],.06,V.center[1]),me.rotation.x=-Math.PI/2,H.add(me)})},ue=H=>{t.floorMessages&&t.floorMessages.forEach(ne=>{const Q=document.createElement("canvas"),V=Q.getContext("2d");if(!V)return;Q.width=1024,Q.height=256;const we=ne.type==="welcome",Fe=we?"#8b5cf6":ne.type==="quote"?"#10b981":"#f59e0b";V.fillStyle="rgba(15, 15, 25, 0.7)",V.roundRect(0,0,Q.width,Q.height,40),V.fill(),V.strokeStyle=Fe,V.lineWidth=10,V.stroke(),V.font="bold 80px Arial",V.textAlign="center",V.textBaseline="middle",V.shadowColor=Fe,V.shadowBlur=30,V.fillStyle="#ffffff",V.fillText(ne.text,Q.width/2,Q.height/2);const A=new wm(Q),S=new ti({map:A,transparent:!0,opacity:0,depthWrite:!1,emissive:new Qe(Fe),emissiveIntensity:2}),I=new Ur(we?4:2.5,we?1:.6),B=new At(I,S);B.rotation.x=-Math.PI/2,B.position.set(ne.position[0],.02,ne.position[1]),H.add(B)})},re=(H,ne)=>{var Qn;const Q=performance.now();if(Q-W.current<500||q.current)return;if(q.current=!0,W.current=Q,_.current.forEach(dt=>{ne.remove(dt.cone,dt.shaft,dt.ring),dt.coneGeo.dispose(),dt.shaftGeo.dispose(),dt.ringGeo.dispose(),dt.coneMat.dispose(),dt.shaftMat.dispose(),dt.ringMat.dispose()}),_.current=[],g.current&&(ne.remove(g.current),g.current.geometry.dispose(),g.current.material.dispose(),g.current=null),m.current&&(ne.remove(m.current),m.current.traverse(dt=>{dt.isMesh&&(dt.geometry.dispose(),dt.material.dispose())}),m.current=null),v.current=0,x.current=[],y.current=null,u.current&&(ne.remove(u.current),u.current.geometry.dispose(),u.current.material.dispose(),u.current=null),!H||H.positions.length<2){q.current=!1;return}const V=H.positions.map(dt=>new N(dt[0],.12,dt[1]));if(V.length<2){q.current=!1;return}const we=new Ho(.8,.05,12,32),Fe=new ti({color:1096065,emissive:1096065,emissiveIntensity:5}),A=new At(we,Fe);A.rotation.x=-Math.PI/2,A.position.copy(V[0]).setY(.01),ne.add(A),g.current=A;const S=V[V.length-1],I=new si,B=new Ho(1,.1,16,48),se=new ti({color:9133302,emissive:9133302,emissiveIntensity:8}),G=new At(B,se);G.rotation.x=-Math.PI/2,I.add(G);const Re=new Ho(1.5,.05,8,32),he=new At(Re,se);he.rotation.x=-Math.PI/2,I.add(he);const ge=new cc(.05,1,6,24,1,!0),Ee=new ti({color:10980346,emissive:10980346,emissiveIntensity:4,transparent:!0,opacity:.3,side:Dn}),J=new At(ge,Ee);J.position.y=3,I.add(J);const de=new uc(.5),Me=new ti({color:16777215,emissive:10980346,emissiveIntensity:12}),pe=new At(de,Me);pe.position.y=7,I.add(pe),I.position.copy(S).setY(.01),ne.add(I),m.current=I;const ae=new q0(V);y.current=ae;const D=ae.getPoints(200);x.current=D;const ce=new dn().setFromPoints(D),me=new X0({color:13079274,linewidth:2}),Se=new M1(ce,me);Se.userData.isPathLine=!0,ne.add(Se),u.current=Se;const oe=8,$=((Qn=d.current)==null?void 0:Qn.xr.isPresenting)??!1,Ce=$?.08:.4,Ve=$?.08:.12,rt=$?.05:.28,et=$?.015:.04,On=$?.05:.14,Tn=$?.02:.09,pr=$?.001:.12;for(let dt=0;dt<D.length;dt+=oe){const Ni=D[dt].clone();Ni.y=pr;const ya=dt/(D.length-1),Kr=ae.getTangent(ya).normalize(),ro=new uc(Ve,0),mr=new ti({color:9133302,emissive:9133302,emissiveIntensity:4,transparent:!0,opacity:.9}),kn=new At(ro,mr);kn.position.copy(Ni).setY(pr+Ce/2),kn.scale.set(1,.4,1.2);const so=Ni.clone().add(Kr);kn.lookAt(so.x,pr+Ce/2,so.z),kn.userData.baseY=kn.position.y;const Sa=new cc(et,et,rt,12),Ma=new ti({color:9133302,emissive:9133302,emissiveIntensity:2.5}),pi=new At(Sa,Ma);pi.position.copy(Ni).setY(pr+Ce/4),pi.quaternion.copy(kn.quaternion),pi.translateY(-(Ce/2)),pi.userData.baseY=pi.position.y;const Ea=new Id(Tn,On,24),wa=new oc({color:9133302,side:Dn,transparent:!0,opacity:.3}),Ii=new At(Ea,wa);Ii.rotation.x=-Math.PI/2,Ii.position.copy(Ni).setY(.001),Ii.userData.baseY=Ii.position.y,ne.add(kn,pi,Ii),_.current.push({cone:kn,shaft:pi,ring:Ii,coneGeo:ro,coneMat:mr,shaftGeo:Sa,shaftMat:Ma,ringGeo:Ea,ringMat:wa})}q.current=!1};return fe.jsxs(fe.Fragment,{children:[fe.jsx("div",{ref:l,className:"fixed inset-0 z-0"}),te&&fe.jsx("div",{className:"fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900/60 backdrop-blur-sm",children:fe.jsxs("div",{className:"bg-slate-900 border border-purple-500/50 p-8 rounded-3xl shadow-2xl flex flex-col items-center max-w-xs text-center",children:[fe.jsxs("div",{className:"relative w-24 h-24 mb-6",children:[fe.jsx("div",{className:"absolute inset-0 border-4 border-purple-500 rounded-2xl animate-pulse"}),fe.jsx("div",{className:"absolute inset-4 border-2 border-purple-400/50 rounded-lg animate-ping"}),fe.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:fe.jsx("span",{className:"text-4xl text-purple-400",children:"📷"})})]}),fe.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"Aligning World"}),fe.jsxs("p",{className:"text-sm text-purple-200 mb-6 leading-relaxed",children:["Point your camera at the ",fe.jsxs("span",{className:"font-bold text-white underline",children:[((ee=Ki.find(H=>H.id===t.floorId))==null?void 0:ee.label)||"Floor"," Marker"]})," to calibrate."]}),fe.jsxs("div",{className:"flex flex-col gap-2 w-full",children:[fe.jsx("button",{onClick:()=>Ke(),className:"px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-purple-500/20",children:"Found Marker (Align Now)"}),fe.jsx("button",{onClick:()=>U(!1),className:"px-6 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium rounded-xl transition-colors border border-slate-700",children:"Skip Calibration"})]})]})}),K&&Xe!==null&&fe.jsx("div",{className:"fixed bottom-10 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm",children:fe.jsxs("div",{className:"bg-slate-900/80 backdrop-blur-xl border border-white/10 p-4 rounded-3xl shadow-2xl flex items-center gap-4",children:[fe.jsx("div",{className:"bg-purple-600/30 p-3 rounded-2xl",children:fe.jsx("div",{className:"w-6 h-6 border-2 border-purple-400 rounded-full animate-pulse flex items-center justify-center",children:fe.jsx("div",{className:"w-2 h-2 bg-purple-400 rounded-full"})})}),fe.jsxs("div",{className:"flex-1",children:[fe.jsxs("div",{className:"flex items-baseline gap-2",children:[fe.jsx("span",{className:"text-2xl font-black text-white",children:Xe<1.5?"Arrived":`${Math.round(Xe)}m`}),fe.jsx("span",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-widest",children:"Total"}),We!==null&&Math.round(We)!==Math.round(Xe)&&fe.jsxs("span",{className:"text-xs font-medium text-purple-400/80 ml-auto",children:[Math.round(We),"m this floor"]})]}),fe.jsxs("p",{className:"text-sm font-medium text-purple-300",children:[le," • ",Math.ceil(Xe/1.2/60)," min walk"]}),ye&&fe.jsxs("p",{className:"text-[10px] text-green-400 font-bold uppercase mt-1",children:["✓ Synced to ",ye.label]})]})]})}),a&&fe.jsx("button",{onClick:()=>{console.log("Button clicked!"),Y(!z)},className:"fixed top-20 left-6 z-20 bg-white/95 p-3 rounded-full shadow-lg text-slate-800 hover:bg-slate-100 transition-colors","aria-label":"Toggle Far View",children:z?"Default View":"Far View"})]})}const p2={lift:"🛗",stairs:"🪜",ramp:"♿"};function m2({startRoomId:t,startFloorId:e,endRoomId:n,endFloorId:i,activeFloorId:r,pathSegments:s,onStartChange:o,onEndChange:a,onFloorChange:l,onFindPath:c,onClose:f}){var p,_;const d=ke.useMemo(()=>Wn.map(g=>{var m;return{floorId:g.floorId,label:((m=Ki.find(u=>u.id===g.floorId))==null?void 0:m.label)??g.floorId,rooms:g.rooms.filter(u=>{var v;return((v=u.connectedTo)==null?void 0:v.length)>0&&!u.id.endsWith("_corridor")})}}),[]),h=e===i;return fe.jsxs("div",{className:"fixed top-4 left-1/2 -translate-x-1/2 z-20 bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl p-5 w-full max-w-sm border border-purple-500/30",children:[fe.jsx("button",{onClick:f,className:"absolute top-3 right-3 text-slate-400 hover:text-white transition-colors",children:fe.jsx(Gy,{className:"w-5 h-5"})}),fe.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[fe.jsx("div",{className:"bg-gradient-to-br from-purple-600 to-indigo-600 p-2 rounded-xl",children:fe.jsx(Kp,{className:"w-5 h-5 text-white"})}),fe.jsxs("div",{children:[fe.jsx("h1",{className:"text-lg font-bold text-white",children:"AR Navigation"}),fe.jsx("p",{className:"text-xs text-purple-300",children:"Multi-Floor System"})]})]}),fe.jsxs("div",{className:"mb-4",children:[fe.jsxs("label",{className:"flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1.5",children:[fe.jsx(qp,{className:"w-3.5 h-3.5"})," Viewing Floor"]}),fe.jsx("div",{className:"grid grid-cols-3 gap-1",children:Ki.map(g=>fe.jsxs("button",{onClick:()=>l(g.id),className:`text-xs py-1.5 px-2 rounded-lg font-medium transition-all truncate ${r===g.id?"bg-purple-600 text-white shadow-lg shadow-purple-500/30":"bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"}`,children:["F",g.number]},g.id))})]}),fe.jsxs("div",{className:"space-y-3",children:[fe.jsxs("div",{children:[fe.jsxs("label",{className:"flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1.5",children:[fe.jsx($p,{className:"w-3.5 h-3.5 text-green-400"})," From"]}),fe.jsx("select",{value:e,onChange:g=>{const m=Wn.find(v=>v.floorId===g.target.value),u=m==null?void 0:m.rooms.find(v=>!v.id.endsWith("_corridor"));o(g.target.value,(u==null?void 0:u.id)??"")},className:"w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-xl text-white text-xs mb-1 focus:outline-none focus:ring-2 focus:ring-purple-500",children:d.map(g=>fe.jsx("option",{value:g.floorId,children:g.label},g.floorId))}),fe.jsx("select",{value:t,onChange:g=>o(e,g.target.value),className:"w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-xl text-white text-xs focus:outline-none focus:ring-2 focus:ring-purple-500",children:(p=d.find(g=>g.floorId===e))==null?void 0:p.rooms.map(g=>fe.jsx("option",{value:g.id,children:g.name},g.id))})]}),fe.jsxs("div",{className:"flex items-center gap-2",children:[fe.jsx("div",{className:"flex-1 h-px bg-slate-700"}),fe.jsx("div",{className:"flex items-center gap-1 text-xs text-purple-400",children:h?fe.jsx("span",{className:"text-slate-500",children:"same floor"}):fe.jsxs(fe.Fragment,{children:[fe.jsx(By,{className:"w-3 h-3"}),fe.jsx("span",{children:"cross-floor"}),fe.jsx(Hy,{className:"w-3 h-3"})]})}),fe.jsx("div",{className:"flex-1 h-px bg-slate-700"})]}),fe.jsxs("div",{children:[fe.jsxs("label",{className:"flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1.5",children:[fe.jsx($p,{className:"w-3.5 h-3.5 text-red-400"})," To"]}),fe.jsx("select",{value:i,onChange:g=>{const m=Wn.find(v=>v.floorId===g.target.value),u=m==null?void 0:m.rooms.find(v=>!v.id.endsWith("_corridor"));a(g.target.value,(u==null?void 0:u.id)??"")},className:"w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-xl text-white text-xs mb-1 focus:outline-none focus:ring-2 focus:ring-purple-500",children:d.map(g=>fe.jsx("option",{value:g.floorId,children:g.label},g.floorId))}),fe.jsx("select",{value:n,onChange:g=>a(i,g.target.value),className:"w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-xl text-white text-xs focus:outline-none focus:ring-2 focus:ring-purple-500",children:(_=d.find(g=>g.floorId===i))==null?void 0:_.rooms.map(g=>fe.jsx("option",{value:g.id,children:g.name},g.id))})]}),fe.jsxs("button",{onClick:c,className:"w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2",children:[fe.jsx(Kp,{className:"w-4 h-4"})," Find Path"]})]}),s.length>0&&fe.jsxs("div",{className:"mt-4 pt-4 border-t border-slate-700",children:[fe.jsxs("p",{className:"text-xs font-semibold text-slate-400 mb-2 flex items-center gap-1",children:[fe.jsx(qp,{className:"w-3 h-3"})," Route (",s.length," floor",s.length>1?"s":"",")"]}),fe.jsx("div",{className:"space-y-1.5",children:s.map((g,m)=>{var v;const u=Ki.find(x=>x.id===g.floorId);return fe.jsxs("div",{children:[fe.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[fe.jsx("div",{className:`w-2 h-2 rounded-full flex-shrink-0 ${g.floorId===r?"bg-purple-400":"bg-slate-600"}`}),fe.jsx("span",{className:`font-medium ${g.floorId===r?"text-white":"text-slate-400"}`,children:(u==null?void 0:u.label)??g.floorId}),fe.jsxs("span",{className:"text-slate-600 ml-auto",children:[g.waypointIds.length," wp"]}),g.floorId===r&&fe.jsx("span",{className:"text-purple-400 text-[10px]",children:"●"})]}),g.transition&&fe.jsxs("div",{className:"ml-4 text-[11px] text-amber-300 mt-0.5",children:[p2[g.transition.type]," ",g.transition.name,fe.jsxs("span",{className:"text-slate-500",children:[" → ",(v=Ki.find(x=>x.id===g.transition.toFloor))==null?void 0:v.label]})]})]},m)})})]})]})}function _2(t){const e=[];for(const n of t){const i=parseInt(n.floorId.replace("f",""),10);for(const r of n.waypoints)e.push({id:r.id,position:[r.position[0],r.position[1],i],connectedTo:[...r.connectedTo],floorId:n.floorId})}for(const n of kd){const i=Object.keys(n.floorWaypoints);for(let r=0;r<i.length;r++){const s=i[r],o=n.floorWaypoints[s],a=e.find(l=>l.id===o);if(a)for(let l=0;l<i.length;l++){if(r===l)continue;const c=i[l],f=n.floorWaypoints[c];e.find(d=>d.id===f)&&(a.connectedTo.includes(f)||a.connectedTo.push(f))}}}return e}function zu(t,e){const n=t.position[0]-e.position[0],i=t.position[1]-e.position[1],r=(t.position[2]-e.position[2])*15;return Math.sqrt(n*n+i*i+r*r)}function g2(t,e,n){const i=[t],r={},s={},o={},a=n.find(c=>c.id===e);if(!a)return[];for(const c of n)s[c.id]=1/0,o[c.id]=1/0;s[t]=0;const l=n.find(c=>c.id===t);for(o[t]=l?zu(l,a):1/0;i.length>0;){i.sort((p,_)=>o[p]-o[_]);const c=i.shift();if(c===e){const p=[c];let _=c;for(;r[_];)_=r[_],p.unshift(_);return p}const f=n.find(p=>p.id===c),d=r[c],h=d?n.find(p=>p.id===d):null;for(const p of f.connectedTo){const _=n.find(u=>u.id===p);if(!_)continue;let g=zu(f,_);if(f.floorId!==_.floorId){const u=kd.find(v=>Object.values(v.floorWaypoints).includes(c)&&Object.values(v.floorWaypoints).includes(p));g+=(u==null?void 0:u.costPerFloor)??20}if(h){const u=f.position[0]-h.position[0],v=f.position[1]-h.position[1],x=_.position[0]-f.position[0],y=_.position[1]-f.position[1],C=Math.sqrt(u*u+v*v)||1,T=Math.sqrt(x*x+y*y)||1;(u*x+v*y)/(C*T)<.9&&(g+=15)}const m=s[c]+g;m<(s[p]??1/0)&&(r[p]=c,s[p]=m,o[p]=m+zu(_,a),i.includes(p)||i.push(p))}}return[]}function v2(t,e,n){let i="",r="",s="",o="";for(const p of n){const _=p.rooms.find(m=>m.id===t);_!=null&&_.connectedTo[0]&&(i=_.connectedTo[0],s=p.floorId);const g=p.rooms.find(m=>m.id===e);g!=null&&g.connectedTo[0]&&(r=g.connectedTo[0],o=p.floorId)}if(!i||!r)return[];const a=_2(n),l=g2(i,r,a);if(l.length===0)return[];let c=null,f=null;for(const p of n){const _=p.rooms.find(m=>m.id===t);_&&(c=_.center);const g=p.rooms.find(m=>m.id===e);g&&(f=g.center)}const d=[];let h=null;for(let p=0;p<l.length;p++){const _=l[p],g=a.find(m=>m.id===_);if(!h||h.floorId!==g.floorId){let m;if(h&&p>0){const u=l[p-1],v=kd.find(x=>Object.values(x.floorWaypoints).includes(u)&&Object.values(x.floorWaypoints).includes(_));v&&(m={type:v.type,name:v.name,fromFloor:h.floorId,toFloor:g.floorId}),h&&(h.transition=m)}if(h={floorId:g.floorId,waypointIds:[_],positions:[[g.position[0],g.position[1]]]},d.length===0&&c){const u=c[0]-g.position[0],v=c[1]-g.position[1],x=Math.sqrt(u*u+v*v)||1,y=[c[0]+u/x*1.5,c[1]+v/x*1.5];h.positions.unshift(c),h.positions.unshift(y),h.positions=[y,c,[c[0],g.position[1]],[g.position[0],g.position[1]]]}d.push(h)}else h.waypointIds.push(_),h.positions.push([g.position[0],g.position[1]])}if(d.length>0&&f){const p=d[d.length-1],_=p.positions[p.positions.length-1];p.positions.push([f[0],_[1]]),p.positions.push(f)}return d.length>0&&(d[0]._startFloor=s,d[d.length-1]._endFloor=o),d}function x2(){var b,E,M,P,O,W,q;const t="f3",e=((E=(b=Wn.find(z=>z.floorId===t))==null?void 0:b.rooms.find(z=>!z.id.endsWith("_corridor")))==null?void 0:E.id)??"",n=((P=(M=Wn.find(z=>z.floorId===t))==null?void 0:M.rooms.filter(z=>!z.id.endsWith("_corridor"))[1])==null?void 0:P.id)??"",[i,r]=ke.useState(t),[s,o]=ke.useState(e),[a,l]=ke.useState(t),[c,f]=ke.useState(n),[d,h]=ke.useState(t),[p,_]=ke.useState([]),[g,m]=ke.useState(!1),[u,v]=ke.useState(!1),x=ke.useCallback(()=>{const z=v2(s,c,Wn);_(z),z.length>0&&h(z[0].floorId),v(!1)},[s,c]),y=(z,Y)=>{r(z),o(Y)},C=(z,Y)=>{l(z),f(Y)},T=Wn.find(z=>z.floorId===d),R=p.find(z=>z.floorId===d)??null;return fe.jsxs("main",{children:[!g&&!u&&fe.jsx("button",{onClick:()=>v(!0),className:"fixed top-6 left-6 z-20 bg-slate-900/90 border border-purple-500/30 p-3 rounded-full shadow-lg text-white hover:bg-slate-800 transition-colors","aria-label":"Open navigation menu",children:fe.jsx(Vy,{className:"w-6 h-6"})}),!g&&!u&&fe.jsx("div",{className:"fixed top-6 left-20 z-20 bg-slate-900/90 border border-purple-500/30 px-3 py-2 rounded-full text-xs text-purple-300 font-medium",children:Wn.find(z=>z.floorId===d)&&fe.jsxs(fe.Fragment,{children:["Viewing: ",fe.jsx("span",{className:"text-white font-bold",children:((O=Wn.find(z=>z.floorId===d))==null?void 0:O.floorName)||d})]})}),!g&&u&&fe.jsx(m2,{startRoomId:s,startFloorId:i,endRoomId:c,endFloorId:a,activeFloorId:d,pathSegments:p,onStartChange:y,onEndChange:C,onFloorChange:h,onFindPath:x,onClose:()=>v(!1)}),(R==null?void 0:R.transition)&&!u&&fe.jsxs("div",{className:"fixed bottom-24 left-1/2 -translate-x-1/2 z-20 w-[90%] max-w-xs bg-slate-900/95 border border-amber-500/50 p-4 rounded-2xl shadow-2xl backdrop-blur-md",children:[fe.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[fe.jsx("div",{className:"bg-amber-500/20 p-2 rounded-lg",children:fe.jsx("span",{className:"text-xl",children:R.transition.type==="lift"?"🛗":R.transition.type==="stairs"?"🪜":"♿"})}),fe.jsxs("div",{children:[fe.jsx("p",{className:"text-xs font-bold text-amber-400 uppercase tracking-wider",children:"Next Step"}),fe.jsxs("p",{className:"text-sm text-white font-medium",children:["Take the ",R.transition.name," to ",((W=Wn.find(z=>{var Y;return z.floorId===((Y=R.transition)==null?void 0:Y.toFloor)}))==null?void 0:W.floorName)||R.transition.toFloor]})]})]}),fe.jsxs("button",{onClick:()=>h(R.transition.toFloor),className:"w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-2 rounded-xl transition-colors text-sm shadow-lg shadow-amber-500/20",children:["Switch to ",((q=Wn.find(z=>{var Y;return z.floorId===((Y=R.transition)==null?void 0:Y.toFloor)}))==null?void 0:q.floorName.split(" ")[0])||"Next"," Floor"]})]}),T&&fe.jsx(d2,{floorData:T,activeSegment:R,pathSegments:p,startRoomId:i===d?s:null,endRoomId:a===d?c:null,onSessionStateChange:m,showARButton:!u,showUIView:!u})]})}S0(document.getElementById("root")).render(fe.jsx(ke.StrictMode,{children:fe.jsx(x2,{})}));
