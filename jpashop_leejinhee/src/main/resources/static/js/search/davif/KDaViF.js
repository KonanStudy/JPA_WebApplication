/**
 * KDaViF Library v4.3 2020-07-20
 * Copyright Konan Technology Inc., All rights reserved.
 * https://www.pulsek.com/
 **/

/**
 * https://d3js.org v5.16.0 Copyright 2020 Mike Bostock
 **/
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t=t||self).d3=t.d3||{})}(this,function(t){"use strict";function n(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function e(t){var e;return 1===t.length&&(e=t,t=function(t,r){return n(e(t),r)}),{left:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)<0?r=o+1:i=o}return r},right:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)>0?i=o:r=o+1}return r}}}var r=e(n),i=r.right,o=r.left;function a(t,n){return[t,n]}function u(t){return null===t?NaN:+t}function c(t,n){var e,r,i=t.length,o=0,a=-1,c=0,f=0;if(null==n)for(;++a<i;)isNaN(e=u(t[a]))||(f+=(r=e-c)*(e-(c+=r/++o)));else for(;++a<i;)isNaN(e=u(n(t[a],a,t)))||(f+=(r=e-c)*(e-(c+=r/++o)));if(o>1)return f/(o-1)}function f(t,n){var e=c(t,n);return e?Math.sqrt(e):e}function s(t,n){var e,r,i,o=t.length,a=-1;if(null==n){for(;++a<o;)if(null!=(e=t[a])&&e>=e)for(r=i=e;++a<o;)null!=(e=t[a])&&(r>e&&(r=e),i<e&&(i=e))}else for(;++a<o;)if(null!=(e=n(t[a],a,t))&&e>=e)for(r=i=e;++a<o;)null!=(e=n(t[a],a,t))&&(r>e&&(r=e),i<e&&(i=e));return[r,i]}var l=Array.prototype,h=l.slice,d=l.map;function p(t){return function(){return t}}function v(t){return t}function g(t,n,e){t=+t,n=+n,e=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+e;for(var r=-1,i=0|Math.max(0,Math.ceil((n-t)/e)),o=new Array(i);++r<i;)o[r]=t+r*e;return o}var y=Math.sqrt(50),_=Math.sqrt(10),b=Math.sqrt(2);function m(t,n,e){var r,i,o,a,u=-1;if(e=+e,(t=+t)===(n=+n)&&e>0)return[t];if((r=n<t)&&(i=t,t=n,n=i),0===(a=x(t,n,e))||!isFinite(a))return[];if(a>0)for(t=Math.ceil(t/a),n=Math.floor(n/a),o=new Array(i=Math.ceil(n-t+1));++u<i;)o[u]=(t+u)*a;else for(t=Math.floor(t*a),n=Math.ceil(n*a),o=new Array(i=Math.ceil(t-n+1));++u<i;)o[u]=(t-u)/a;return r&&o.reverse(),o}function x(t,n,e){var r=(n-t)/Math.max(0,e),i=Math.floor(Math.log(r)/Math.LN10),o=r/Math.pow(10,i);return i>=0?(o>=y?10:o>=_?5:o>=b?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(o>=y?10:o>=_?5:o>=b?2:1)}function w(t,n,e){var r=Math.abs(n-t)/Math.max(0,e),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),o=r/i;return o>=y?i*=10:o>=_?i*=5:o>=b&&(i*=2),n<t?-i:i}function M(t){return Math.ceil(Math.log(t.length)/Math.LN2)+1}function N(t,n,e){if(null==e&&(e=u),r=t.length){if((n=+n)<=0||r<2)return+e(t[0],0,t);if(n>=1)return+e(t[r-1],r-1,t);var r,i=(r-1)*n,o=Math.floor(i),a=+e(t[o],o,t);return a+(+e(t[o+1],o+1,t)-a)*(i-o)}}function T(t,n){var e,r,i=t.length,o=-1;if(null==n){for(;++o<i;)if(null!=(e=t[o])&&e>=e)for(r=e;++o<i;)null!=(e=t[o])&&e>r&&(r=e)}else for(;++o<i;)if(null!=(e=n(t[o],o,t))&&e>=e)for(r=e;++o<i;)null!=(e=n(t[o],o,t))&&e>r&&(r=e);return r}function A(t){for(var n,e,r,i=t.length,o=-1,a=0;++o<i;)a+=t[o].length;for(e=new Array(a);--i>=0;)for(n=(r=t[i]).length;--n>=0;)e[--a]=r[n];return e}function S(t,n){var e,r,i=t.length,o=-1;if(null==n){for(;++o<i;)if(null!=(e=t[o])&&e>=e)for(r=e;++o<i;)null!=(e=t[o])&&r>e&&(r=e)}else for(;++o<i;)if(null!=(e=n(t[o],o,t))&&e>=e)for(r=e;++o<i;)null!=(e=n(t[o],o,t))&&r>e&&(r=e);return r}function k(t){if(!(i=t.length))return[];for(var n=-1,e=S(t,E),r=new Array(e);++n<e;)for(var i,o=-1,a=r[n]=new Array(i);++o<i;)a[o]=t[o][n];return r}function E(t){return t.length}var C=Array.prototype.slice;function P(t){return t}var z=1,R=2,D=3,q=4,L=1e-6;function U(t){return"translate("+(t+.5)+",0)"}function O(t){return"translate(0,"+(t+.5)+")"}function B(){return!this.__axis}function F(t,n){var e=[],r=null,i=null,o=6,a=6,u=3,c=t===z||t===q?-1:1,f=t===q||t===R?"x":"y",s=t===z||t===D?U:O;function l(l){var h=null==r?n.ticks?n.ticks.apply(n,e):n.domain():r,d=null==i?n.tickFormat?n.tickFormat.apply(n,e):P:i,p=Math.max(o,0)+u,v=n.range(),g=+v[0]+.5,y=+v[v.length-1]+.5,_=(n.bandwidth?function(t){var n=Math.max(0,t.bandwidth()-1)/2;return t.round()&&(n=Math.round(n)),function(e){return+t(e)+n}}:function(t){return function(n){return+t(n)}})(n.copy()),b=l.selection?l.selection():l,m=b.selectAll(".domain").data([null]),x=b.selectAll(".tick").data(h,n).order(),w=x.exit(),M=x.enter().append("g").attr("class","tick"),N=x.select("line"),T=x.select("text");m=m.merge(m.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),x=x.merge(M),N=N.merge(M.append("line").attr("stroke","currentColor").attr(f+"2",c*o)),T=T.merge(M.append("text").attr("fill","currentColor").attr(f,c*p).attr("dy",t===z?"0em":t===D?"0.71em":"0.32em")),l!==b&&(m=m.transition(l),x=x.transition(l),N=N.transition(l),T=T.transition(l),w=w.transition(l).attr("opacity",L).attr("transform",function(t){return isFinite(t=_(t))?s(t):this.getAttribute("transform")}),M.attr("opacity",L).attr("transform",function(t){var n=this.parentNode.__axis;return s(n&&isFinite(n=n(t))?n:_(t))})),w.remove(),m.attr("d",t===q||t==R?a?"M"+c*a+","+g+"H0.5V"+y+"H"+c*a:"M0.5,"+g+"V"+y:a?"M"+g+","+c*a+"V0.5H"+y+"V"+c*a:"M"+g+",0.5H"+y),x.attr("opacity",1).attr("transform",function(t){return s(_(t))}),N.attr(f+"2",c*o),T.attr(f,c*p).text(d),b.filter(B).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===R?"start":t===q?"end":"middle"),b.each(function(){this.__axis=_})}return l.scale=function(t){return arguments.length?(n=t,l):n},l.ticks=function(){return e=C.call(arguments),l},l.tickArguments=function(t){return arguments.length?(e=null==t?[]:C.call(t),l):e.slice()},l.tickValues=function(t){return arguments.length?(r=null==t?null:C.call(t),l):r&&r.slice()},l.tickFormat=function(t){return arguments.length?(i=t,l):i},l.tickSize=function(t){return arguments.length?(o=a=+t,l):o},l.tickSizeInner=function(t){return arguments.length?(o=+t,l):o},l.tickSizeOuter=function(t){return arguments.length?(a=+t,l):a},l.tickPadding=function(t){return arguments.length?(u=+t,l):u},l}var Y={value:function(){}};function I(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r||/[\s.]/.test(t))throw new Error("illegal type: "+t);r[t]=[]}return new H(r)}function H(t){this._=t}function j(t,n){return t.trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}})}function X(t,n){for(var e,r=0,i=t.length;r<i;++r)if((e=t[r]).name===n)return e.value}function V(t,n,e){for(var r=0,i=t.length;r<i;++r)if(t[r].name===n){t[r]=Y,t=t.slice(0,r).concat(t.slice(r+1));break}return null!=e&&t.push({name:n,value:e}),t}H.prototype=I.prototype={constructor:H,on:function(t,n){var e,r=this._,i=j(t+"",r),o=-1,a=i.length;if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++o<a;)if(e=(t=i[o]).type)r[e]=V(r[e],t.name,n);else if(null==n)for(e in r)r[e]=V(r[e],t.name,null);return this}for(;++o<a;)if((e=(t=i[o]).type)&&(e=X(r[e],t.name)))return e},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new H(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,i=new Array(e),o=0;o<e;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=0,e=(r=this._[t]).length;o<e;++o)r[o].value.apply(n,i)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e)}};var G="http://www.w3.org/1999/xhtml",$={svg:"http://www.w3.org/2000/svg",xhtml:G,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function W(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),$.hasOwnProperty(n)?{space:$[n],local:t}:t}function Z(t){var n=W(t);return(n.local?function(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}:function(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===G&&n.documentElement.namespaceURI===G?n.createElement(t):n.createElementNS(e,t)}})(n)}function Q(){}function K(t){return null==t?Q:function(){return this.querySelector(t)}}function J(){return[]}function tt(t){return null==t?J:function(){return this.querySelectorAll(t)}}function nt(t){return function(){return this.matches(t)}}function et(t){return new Array(t.length)}function rt(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}rt.prototype={constructor:rt,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var it="$";function ot(t,n,e,r,i,o){for(var a,u=0,c=n.length,f=o.length;u<f;++u)(a=n[u])?(a.__data__=o[u],r[u]=a):e[u]=new rt(t,o[u]);for(;u<c;++u)(a=n[u])&&(i[u]=a)}function at(t,n,e,r,i,o,a){var u,c,f,s={},l=n.length,h=o.length,d=new Array(l);for(u=0;u<l;++u)(c=n[u])&&(d[u]=f=it+a.call(c,c.__data__,u,n),f in s?i[u]=c:s[f]=c);for(u=0;u<h;++u)(c=s[f=it+a.call(t,o[u],u,o)])?(r[u]=c,c.__data__=o[u],s[f]=null):e[u]=new rt(t,o[u]);for(u=0;u<l;++u)(c=n[u])&&s[d[u]]===c&&(i[u]=c)}function ut(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function ct(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function ft(t,n){return t.style.getPropertyValue(n)||ct(t).getComputedStyle(t,null).getPropertyValue(n)}function st(t){return t.trim().split(/^|\s+/)}function lt(t){return t.classList||new ht(t)}function ht(t){this._node=t,this._names=st(t.getAttribute("class")||"")}function dt(t,n){for(var e=lt(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function pt(t,n){for(var e=lt(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function vt(){this.textContent=""}function gt(){this.innerHTML=""}function yt(){this.nextSibling&&this.parentNode.appendChild(this)}function _t(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function bt(){return null}function mt(){var t=this.parentNode;t&&t.removeChild(this)}function xt(){var t=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function wt(){var t=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}ht.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var Mt={};(t.event=null,"undefined"!=typeof document)&&("onmouseenter"in document.documentElement||(Mt={mouseenter:"mouseover",mouseleave:"mouseout"}));function Nt(t,n,e){return t=Tt(t,n,e),function(n){var e=n.relatedTarget;e&&(e===this||8&e.compareDocumentPosition(this))||t.call(this,n)}}function Tt(n,e,r){return function(i){var o=t.event;t.event=i;try{n.call(this,this.__data__,e,r)}finally{t.event=o}}}function At(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.capture);++i?n.length=i:delete this.__on}}}function St(t,n,e){var r=Mt.hasOwnProperty(t.type)?Nt:Tt;return function(i,o,a){var u,c=this.__on,f=r(n,o,a);if(c)for(var s=0,l=c.length;s<l;++s)if((u=c[s]).type===t.type&&u.name===t.name)return this.removeEventListener(u.type,u.listener,u.capture),this.addEventListener(u.type,u.listener=f,u.capture=e),void(u.value=n);this.addEventListener(t.type,f,e),u={type:t.type,name:t.name,value:n,listener:f,capture:e},c?c.push(u):this.__on=[u]}}function kt(n,e,r,i){var o=t.event;n.sourceEvent=t.event,t.event=n;try{return e.apply(r,i)}finally{t.event=o}}function Et(t,n,e){var r=ct(t),i=r.CustomEvent;"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}var Ct=[null];function Pt(t,n){this._groups=t,this._parents=n}function zt(){return new Pt([[document.documentElement]],Ct)}function Rt(t){return"string"==typeof t?new Pt([[document.querySelector(t)]],[document.documentElement]):new Pt([[t]],Ct)}Pt.prototype=zt.prototype={constructor:Pt,select:function(t){"function"!=typeof t&&(t=K(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a,u=n[i],c=u.length,f=r[i]=new Array(c),s=0;s<c;++s)(o=u[s])&&(a=t.call(o,o.__data__,s,u))&&("__data__"in o&&(a.__data__=o.__data__),f[s]=a);return new Pt(r,this._parents)},selectAll:function(t){"function"!=typeof t&&(t=tt(t));for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var a,u=n[o],c=u.length,f=0;f<c;++f)(a=u[f])&&(r.push(t.call(a,a.__data__,f,u)),i.push(a));return new Pt(r,i)},filter:function(t){"function"!=typeof t&&(t=nt(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a=n[i],u=a.length,c=r[i]=[],f=0;f<u;++f)(o=a[f])&&t.call(o,o.__data__,f,a)&&c.push(o);return new Pt(r,this._parents)},data:function(t,n){if(!t)return d=new Array(this.size()),f=-1,this.each(function(t){d[++f]=t}),d;var e=n?at:ot,r=this._parents,i=this._groups;"function"!=typeof t&&(t=function(t){return function(){return t}}(t));for(var o=i.length,a=new Array(o),u=new Array(o),c=new Array(o),f=0;f<o;++f){var s=r[f],l=i[f],h=l.length,d=t.call(s,s&&s.__data__,f,r),p=d.length,v=u[f]=new Array(p),g=a[f]=new Array(p);e(s,l,v,g,c[f]=new Array(h),d,n);for(var y,_,b=0,m=0;b<p;++b)if(y=v[b]){for(b>=m&&(m=b+1);!(_=g[m])&&++m<p;);y._next=_||null}}return(a=new Pt(a,r))._enter=u,a._exit=c,a},enter:function(){return new Pt(this._enter||this._groups.map(et),this._parents)},exit:function(){return new Pt(this._exit||this._groups.map(et),this._parents)},join:function(t,n,e){var r=this.enter(),i=this,o=this.exit();return r="function"==typeof t?t(r):r.append(t+""),null!=n&&(i=n(i)),null==e?o.remove():e(o),r&&i?r.merge(i).order():i},merge:function(t){for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u)for(var c,f=n[u],s=e[u],l=f.length,h=a[u]=new Array(l),d=0;d<l;++d)(c=f[d]||s[d])&&(h[d]=c);for(;u<r;++u)a[u]=n[u];return new Pt(a,this._parents)},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,a=i[o];--o>=0;)(r=i[o])&&(a&&4^r.compareDocumentPosition(a)&&a.parentNode.insertBefore(r,a),a=r);return this},sort:function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=ut);for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var a,u=e[o],c=u.length,f=i[o]=new Array(c),s=0;s<c;++s)(a=u[s])&&(f[s]=a);f.sort(n)}return new Pt(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){var t=new Array(this.size()),n=-1;return this.each(function(){t[++n]=this}),t},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var a=r[i];if(a)return a}return null},size:function(){var t=0;return this.each(function(){++t}),t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],a=0,u=o.length;a<u;++a)(i=o[a])&&t.call(i,i.__data__,a,o);return this},attr:function(t,n){var e=W(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?function(t){return function(){this.removeAttributeNS(t.space,t.local)}}:function(t){return function(){this.removeAttribute(t)}}:"function"==typeof n?e.local?function(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}:function(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}:e.local?function(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}:function(t,n){return function(){this.setAttribute(t,n)}})(e,n))},style:function(t,n,e){return arguments.length>1?this.each((null==n?function(t){return function(){this.style.removeProperty(t)}}:"function"==typeof n?function(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}:function(t,n,e){return function(){this.style.setProperty(t,n,e)}})(t,n,null==e?"":e)):ft(this.node(),t)},property:function(t,n){return arguments.length>1?this.each((null==n?function(t){return function(){delete this[t]}}:"function"==typeof n?function(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}:function(t,n){return function(){this[t]=n}})(t,n)):this.node()[t]},classed:function(t,n){var e=st(t+"");if(arguments.length<2){for(var r=lt(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"==typeof n?function(t,n){return function(){(n.apply(this,arguments)?dt:pt)(this,t)}}:n?function(t){return function(){dt(this,t)}}:function(t){return function(){pt(this,t)}})(e,n))},text:function(t){return arguments.length?this.each(null==t?vt:("function"==typeof t?function(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}:function(t){return function(){this.textContent=t}})(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?gt:("function"==typeof t?function(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}:function(t){return function(){this.innerHTML=t}})(t)):this.node().innerHTML},raise:function(){return this.each(yt)},lower:function(){return this.each(_t)},append:function(t){var n="function"==typeof t?t:Z(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})},insert:function(t,n){var e="function"==typeof t?t:Z(t),r=null==n?bt:"function"==typeof n?n:K(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})},remove:function(){return this.each(mt)},clone:function(t){return this.select(t?wt:xt)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var r,i,o=function(t){return t.trim().split(/^|\s+/).map(function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}})}(t+""),a=o.length;if(!(arguments.length<2)){for(u=n?St:At,null==e&&(e=!1),r=0;r<a;++r)this.each(u(o[r],n,e));return this}var u=this.node().__on;if(u)for(var c,f=0,s=u.length;f<s;++f)for(r=0,c=u[f];r<a;++r)if((i=o[r]).type===c.type&&i.name===c.name)return c.value},dispatch:function(t,n){return this.each(("function"==typeof n?function(t,n){return function(){return Et(this,t,n.apply(this,arguments))}}:function(t,n){return function(){return Et(this,t,n)}})(t,n))}};var Dt=0;function qt(){return new Lt}function Lt(){this._="@"+(++Dt).toString(36)}function Ut(){for(var n,e=t.event;n=e.sourceEvent;)e=n;return e}function Ot(t,n){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var r=e.createSVGPoint();return r.x=n.clientX,r.y=n.clientY,[(r=r.matrixTransform(t.getScreenCTM().inverse())).x,r.y]}var i=t.getBoundingClientRect();return[n.clientX-i.left-t.clientLeft,n.clientY-i.top-t.clientTop]}function Bt(t){var n=Ut();return n.changedTouches&&(n=n.changedTouches[0]),Ot(t,n)}function Ft(t,n,e){arguments.length<3&&(e=n,n=Ut().changedTouches);for(var r,i=0,o=n?n.length:0;i<o;++i)if((r=n[i]).identifier===e)return Ot(t,r);return null}function Yt(){t.event.stopImmediatePropagation()}function It(){t.event.preventDefault(),t.event.stopImmediatePropagation()}function Ht(t){var n=t.document.documentElement,e=Rt(t).on("dragstart.drag",It,!0);"onselectstart"in n?e.on("selectstart.drag",It,!0):(n.__noselect=n.style.MozUserSelect,n.style.MozUserSelect="none")}function jt(t,n){var e=t.document.documentElement,r=Rt(t).on("dragstart.drag",null);n&&(r.on("click.drag",It,!0),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in e?r.on("selectstart.drag",null):(e.style.MozUserSelect=e.__noselect,delete e.__noselect)}function Xt(t){return function(){return t}}function Vt(t,n,e,r,i,o,a,u,c,f){this.target=t,this.type=n,this.subject=e,this.identifier=r,this.active=i,this.x=o,this.y=a,this.dx=u,this.dy=c,this._=f}function Gt(){return!t.event.ctrlKey&&!t.event.button}function $t(){return this.parentNode}function Wt(n){return null==n?{x:t.event.x,y:t.event.y}:n}function Zt(){return navigator.maxTouchPoints||"ontouchstart"in this}function Qt(t,n,e){t.prototype=n.prototype=e,e.constructor=t}function Kt(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}function Jt(){}Lt.prototype=qt.prototype={constructor:Lt,get:function(t){for(var n=this._;!(n in t);)if(!(t=t.parentNode))return;return t[n]},set:function(t,n){return t[this._]=n},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}},Vt.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};var tn="\\s*([+-]?\\d+)\\s*",nn="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",en="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",rn=/^#([0-9a-f]{3,8})$/,on=new RegExp("^rgb\\("+[tn,tn,tn]+"\\)$"),an=new RegExp("^rgb\\("+[en,en,en]+"\\)$"),un=new RegExp("^rgba\\("+[tn,tn,tn,nn]+"\\)$"),cn=new RegExp("^rgba\\("+[en,en,en,nn]+"\\)$"),fn=new RegExp("^hsl\\("+[nn,en,en]+"\\)$"),sn=new RegExp("^hsla\\("+[nn,en,en,nn]+"\\)$"),ln={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function hn(){return this.rgb().formatHex()}function dn(){return this.rgb().formatRgb()}function pn(t){var n,e;return t=(t+"").trim().toLowerCase(),(n=rn.exec(t))?(e=n[1].length,n=parseInt(n[1],16),6===e?vn(n):3===e?new bn(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1):8===e?gn(n>>24&255,n>>16&255,n>>8&255,(255&n)/255):4===e?gn(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|240&n,((15&n)<<4|15&n)/255):null):(n=on.exec(t))?new bn(n[1],n[2],n[3],1):(n=an.exec(t))?new bn(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=un.exec(t))?gn(n[1],n[2],n[3],n[4]):(n=cn.exec(t))?gn(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=fn.exec(t))?Mn(n[1],n[2]/100,n[3]/100,1):(n=sn.exec(t))?Mn(n[1],n[2]/100,n[3]/100,n[4]):ln.hasOwnProperty(t)?vn(ln[t]):"transparent"===t?new bn(NaN,NaN,NaN,0):null}function vn(t){return new bn(t>>16&255,t>>8&255,255&t,1)}function gn(t,n,e,r){return r<=0&&(t=n=e=NaN),new bn(t,n,e,r)}function yn(t){return t instanceof Jt||(t=pn(t)),t?new bn((t=t.rgb()).r,t.g,t.b,t.opacity):new bn}function _n(t,n,e,r){return 1===arguments.length?yn(t):new bn(t,n,e,null==r?1:r)}function bn(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function mn(){return"#"+wn(this.r)+wn(this.g)+wn(this.b)}function xn(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}function wn(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function Mn(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new An(t,n,e,r)}function Nn(t){if(t instanceof An)return new An(t.h,t.s,t.l,t.opacity);if(t instanceof Jt||(t=pn(t)),!t)return new An;if(t instanceof An)return t;var n=(t=t.rgb()).r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),o=Math.max(n,e,r),a=NaN,u=o-i,c=(o+i)/2;return u?(a=n===o?(e-r)/u+6*(e<r):e===o?(r-n)/u+2:(n-e)/u+4,u/=c<.5?o+i:2-o-i,a*=60):u=c>0&&c<1?0:a,new An(a,u,c,t.opacity)}function Tn(t,n,e,r){return 1===arguments.length?Nn(t):new An(t,n,e,null==r?1:r)}function An(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function Sn(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}Qt(Jt,pn,{copy:function(t){return Object.assign(new this.constructor,this,t)},displayable:function(){return this.rgb().displayable()},hex:hn,formatHex:hn,formatHsl:function(){return Nn(this).formatHsl()},formatRgb:dn,toString:dn}),Qt(bn,_n,Kt(Jt,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new bn(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new bn(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:mn,formatHex:mn,formatRgb:xn,toString:xn})),Qt(An,Tn,Kt(Jt,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new An(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new An(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r;return new bn(Sn(t>=240?t-240:t+120,i,r),Sn(t,i,r),Sn(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===t?")":", "+t+")")}}));var kn=Math.PI/180,En=180/Math.PI,Cn=.96422,Pn=1,zn=.82521,Rn=4/29,Dn=6/29,qn=3*Dn*Dn,Ln=Dn*Dn*Dn;function Un(t){if(t instanceof Bn)return new Bn(t.l,t.a,t.b,t.opacity);if(t instanceof Vn)return Gn(t);t instanceof bn||(t=yn(t));var n,e,r=Hn(t.r),i=Hn(t.g),o=Hn(t.b),a=Fn((.2225045*r+.7168786*i+.0606169*o)/Pn);return r===i&&i===o?n=e=a:(n=Fn((.4360747*r+.3850649*i+.1430804*o)/Cn),e=Fn((.0139322*r+.0971045*i+.7141733*o)/zn)),new Bn(116*a-16,500*(n-a),200*(a-e),t.opacity)}function On(t,n,e,r){return 1===arguments.length?Un(t):new Bn(t,n,e,null==r?1:r)}function Bn(t,n,e,r){this.l=+t,this.a=+n,this.b=+e,this.opacity=+r}function Fn(t){return t>Ln?Math.pow(t,1/3):t/qn+Rn}function Yn(t){return t>Dn?t*t*t:qn*(t-Rn)}function In(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function Hn(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function jn(t){if(t instanceof Vn)return new Vn(t.h,t.c,t.l,t.opacity);if(t instanceof Bn||(t=Un(t)),0===t.a&&0===t.b)return new Vn(NaN,0<t.l&&t.l<100?0:NaN,t.l,t.opacity);var n=Math.atan2(t.b,t.a)*En;return new Vn(n<0?n+360:n,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function Xn(t,n,e,r){return 1===arguments.length?jn(t):new Vn(t,n,e,null==r?1:r)}function Vn(t,n,e,r){this.h=+t,this.c=+n,this.l=+e,this.opacity=+r}function Gn(t){if(isNaN(t.h))return new Bn(t.l,0,0,t.opacity);var n=t.h*kn;return new Bn(t.l,Math.cos(n)*t.c,Math.sin(n)*t.c,t.opacity)}Qt(Bn,On,Kt(Jt,{brighter:function(t){return new Bn(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new Bn(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,n=isNaN(this.a)?t:t+this.a/500,e=isNaN(this.b)?t:t-this.b/200;return new bn(In(3.1338561*(n=Cn*Yn(n))-1.6168667*(t=Pn*Yn(t))-.4906146*(e=zn*Yn(e))),In(-.9787684*n+1.9161415*t+.033454*e),In(.0719453*n-.2289914*t+1.4052427*e),this.opacity)}})),Qt(Vn,Xn,Kt(Jt,{brighter:function(t){return new Vn(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker:function(t){return new Vn(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb:function(){return Gn(this).rgb()}}));var $n=-.14861,Wn=1.78277,Zn=-.29227,Qn=-.90649,Kn=1.97294,Jn=Kn*Qn,te=Kn*Wn,ne=Wn*Zn-Qn*$n;function ee(t,n,e,r){return 1===arguments.length?function(t){if(t instanceof re)return new re(t.h,t.s,t.l,t.opacity);t instanceof bn||(t=yn(t));var n=t.r/255,e=t.g/255,r=t.b/255,i=(ne*r+Jn*n-te*e)/(ne+Jn-te),o=r-i,a=(Kn*(e-i)-Zn*o)/Qn,u=Math.sqrt(a*a+o*o)/(Kn*i*(1-i)),c=u?Math.atan2(a,o)*En-120:NaN;return new re(c<0?c+360:c,u,i,t.opacity)}(t):new re(t,n,e,null==r?1:r)}function re(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function ie(t,n,e,r,i){var o=t*t,a=o*t;return((1-3*t+3*o-a)*n+(4-6*o+3*a)*e+(1+3*t+3*o-3*a)*r+a*i)/6}function oe(t){var n=t.length-1;return function(e){var r=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),i=t[r],o=t[r+1],a=r>0?t[r-1]:2*i-o,u=r<n-1?t[r+2]:2*o-i;return ie((e-r/n)*n,a,i,o,u)}}function ae(t){var n=t.length;return function(e){var r=Math.floor(((e%=1)<0?++e:e)*n),i=t[(r+n-1)%n],o=t[r%n],a=t[(r+1)%n],u=t[(r+2)%n];return ie((e-r/n)*n,i,o,a,u)}}function ue(t){return function(){return t}}function ce(t,n){return function(e){return t+e*n}}function fe(t,n){var e=n-t;return e?ce(t,e>180||e<-180?e-360*Math.round(e/360):e):ue(isNaN(t)?n:t)}function se(t){return 1==(t=+t)?le:function(n,e){return e-n?function(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}(n,e,t):ue(isNaN(n)?e:n)}}function le(t,n){var e=n-t;return e?ce(t,e):ue(isNaN(t)?n:t)}Qt(re,ee,Kt(Jt,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new re(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new re(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*kn,n=+this.l,e=isNaN(this.s)?0:this.s*n*(1-n),r=Math.cos(t),i=Math.sin(t);return new bn(255*(n+e*($n*r+Wn*i)),255*(n+e*(Zn*r+Qn*i)),255*(n+e*(Kn*r)),this.opacity)}}));var he=function t(n){var e=se(n);function r(t,n){var r=e((t=_n(t)).r,(n=_n(n)).r),i=e(t.g,n.g),o=e(t.b,n.b),a=le(t.opacity,n.opacity);return function(n){return t.r=r(n),t.g=i(n),t.b=o(n),t.opacity=a(n),t+""}}return r.gamma=t,r}(1);function de(t){return function(n){var e,r,i=n.length,o=new Array(i),a=new Array(i),u=new Array(i);for(e=0;e<i;++e)r=_n(n[e]),o[e]=r.r||0,a[e]=r.g||0,u[e]=r.b||0;return o=t(o),a=t(a),u=t(u),r.opacity=1,function(t){return r.r=o(t),r.g=a(t),r.b=u(t),r+""}}}var pe=de(oe),ve=de(ae);function ge(t,n){n||(n=[]);var e,r=t?Math.min(n.length,t.length):0,i=n.slice();return function(o){for(e=0;e<r;++e)i[e]=t[e]*(1-o)+n[e]*o;return i}}function ye(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function _e(t,n){var e,r=n?n.length:0,i=t?Math.min(r,t.length):0,o=new Array(i),a=new Array(r);for(e=0;e<i;++e)o[e]=Te(t[e],n[e]);for(;e<r;++e)a[e]=n[e];return function(t){for(e=0;e<i;++e)a[e]=o[e](t);return a}}function be(t,n){var e=new Date;return t=+t,n=+n,function(r){return e.setTime(t*(1-r)+n*r),e}}function me(t,n){return t=+t,n=+n,function(e){return t*(1-e)+n*e}}function xe(t,n){var e,r={},i={};for(e in null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={}),n)e in t?r[e]=Te(t[e],n[e]):i[e]=n[e];return function(t){for(e in r)i[e]=r[e](t);return i}}var we=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Me=new RegExp(we.source,"g");function Ne(t,n){var e,r,i,o=we.lastIndex=Me.lastIndex=0,a=-1,u=[],c=[];for(t+="",n+="";(e=we.exec(t))&&(r=Me.exec(n));)(i=r.index)>o&&(i=n.slice(o,i),u[a]?u[a]+=i:u[++a]=i),(e=e[0])===(r=r[0])?u[a]?u[a]+=r:u[++a]=r:(u[++a]=null,c.push({i:a,x:me(e,r)})),o=Me.lastIndex;return o<n.length&&(i=n.slice(o),u[a]?u[a]+=i:u[++a]=i),u.length<2?c[0]?function(t){return function(n){return t(n)+""}}(c[0].x):function(t){return function(){return t}}(n):(n=c.length,function(t){for(var e,r=0;r<n;++r)u[(e=c[r]).i]=e.x(t);return u.join("")})}function Te(t,n){var e,r=typeof n;return null==n||"boolean"===r?ue(n):("number"===r?me:"string"===r?(e=pn(n))?(n=e,he):Ne:n instanceof pn?he:n instanceof Date?be:ye(n)?ge:Array.isArray(n)?_e:"function"!=typeof n.valueOf&&"function"!=typeof n.toString||isNaN(n)?xe:me)(t,n)}function Ae(t,n){return t=+t,n=+n,function(e){return Math.round(t*(1-e)+n*e)}}var Se,ke,Ee,Ce,Pe=180/Math.PI,ze={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Re(t,n,e,r,i,o){var a,u,c;return(a=Math.sqrt(t*t+n*n))&&(t/=a,n/=a),(c=t*e+n*r)&&(e-=t*c,r-=n*c),(u=Math.sqrt(e*e+r*r))&&(e/=u,r/=u,c/=u),t*r<n*e&&(t=-t,n=-n,c=-c,a=-a),{translateX:i,translateY:o,rotate:Math.atan2(n,t)*Pe,skewX:Math.atan(c)*Pe,scaleX:a,scaleY:u}}function De(t,n,e,r){function i(t){return t.length?t.pop()+" ":""}return function(o,a){var u=[],c=[];return o=t(o),a=t(a),function(t,r,i,o,a,u){if(t!==i||r!==o){var c=a.push("translate(",null,n,null,e);u.push({i:c-4,x:me(t,i)},{i:c-2,x:me(r,o)})}else(i||o)&&a.push("translate("+i+n+o+e)}(o.translateX,o.translateY,a.translateX,a.translateY,u,c),function(t,n,e,o){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),o.push({i:e.push(i(e)+"rotate(",null,r)-2,x:me(t,n)})):n&&e.push(i(e)+"rotate("+n+r)}(o.rotate,a.rotate,u,c),function(t,n,e,o){t!==n?o.push({i:e.push(i(e)+"skewX(",null,r)-2,x:me(t,n)}):n&&e.push(i(e)+"skewX("+n+r)}(o.skewX,a.skewX,u,c),function(t,n,e,r,o,a){if(t!==e||n!==r){var u=o.push(i(o)+"scale(",null,",",null,")");a.push({i:u-4,x:me(t,e)},{i:u-2,x:me(n,r)})}else 1===e&&1===r||o.push(i(o)+"scale("+e+","+r+")")}(o.scaleX,o.scaleY,a.scaleX,a.scaleY,u,c),o=a=null,function(t){for(var n,e=-1,r=c.length;++e<r;)u[(n=c[e]).i]=n.x(t);return u.join("")}}}var qe=De(function(t){return"none"===t?ze:(Se||(Se=document.createElement("DIV"),ke=document.documentElement,Ee=document.defaultView),Se.style.transform=t,t=Ee.getComputedStyle(ke.appendChild(Se),null).getPropertyValue("transform"),ke.removeChild(Se),Re(+(t=t.slice(7,-1).split(","))[0],+t[1],+t[2],+t[3],+t[4],+t[5]))},"px, ","px)","deg)"),Le=De(function(t){return null==t?ze:(Ce||(Ce=document.createElementNS("http://www.w3.org/2000/svg","g")),Ce.setAttribute("transform",t),(t=Ce.transform.baseVal.consolidate())?Re((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):ze)},", ",")",")"),Ue=Math.SQRT2,Oe=2,Be=4,Fe=1e-12;function Ye(t){return((t=Math.exp(t))+1/t)/2}function Ie(t,n){var e,r,i=t[0],o=t[1],a=t[2],u=n[0],c=n[1],f=n[2],s=u-i,l=c-o,h=s*s+l*l;if(h<Fe)r=Math.log(f/a)/Ue,e=function(t){return[i+t*s,o+t*l,a*Math.exp(Ue*t*r)]};else{var d=Math.sqrt(h),p=(f*f-a*a+Be*h)/(2*a*Oe*d),v=(f*f-a*a-Be*h)/(2*f*Oe*d),g=Math.log(Math.sqrt(p*p+1)-p),y=Math.log(Math.sqrt(v*v+1)-v);r=(y-g)/Ue,e=function(t){var n=t*r,e=Ye(g),u=a/(Oe*d)*(e*function(t){return((t=Math.exp(2*t))-1)/(t+1)}(Ue*n+g)-function(t){return((t=Math.exp(t))-1/t)/2}(g));return[i+u*s,o+u*l,a*e/Ye(Ue*n+g)]}}return e.duration=1e3*r,e}function He(t){return function(n,e){var r=t((n=Tn(n)).h,(e=Tn(e)).h),i=le(n.s,e.s),o=le(n.l,e.l),a=le(n.opacity,e.opacity);return function(t){return n.h=r(t),n.s=i(t),n.l=o(t),n.opacity=a(t),n+""}}}var je=He(fe),Xe=He(le);function Ve(t){return function(n,e){var r=t((n=Xn(n)).h,(e=Xn(e)).h),i=le(n.c,e.c),o=le(n.l,e.l),a=le(n.opacity,e.opacity);return function(t){return n.h=r(t),n.c=i(t),n.l=o(t),n.opacity=a(t),n+""}}}var Ge=Ve(fe),$e=Ve(le);function We(t){return function n(e){function r(n,r){var i=t((n=ee(n)).h,(r=ee(r)).h),o=le(n.s,r.s),a=le(n.l,r.l),u=le(n.opacity,r.opacity);return function(t){return n.h=i(t),n.s=o(t),n.l=a(Math.pow(t,e)),n.opacity=u(t),n+""}}return e=+e,r.gamma=n,r}(1)}var Ze=We(fe),Qe=We(le);var Ke,Je,tr=0,nr=0,er=0,rr=1e3,ir=0,or=0,ar=0,ur="object"==typeof performance&&performance.now?performance:Date,cr="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function fr(){return or||(cr(sr),or=ur.now()+ar)}function sr(){or=0}function lr(){this._call=this._time=this._next=null}function hr(t,n,e){var r=new lr;return r.restart(t,n,e),r}function dr(){fr(),++tr;for(var t,n=Ke;n;)(t=or-n._time)>=0&&n._call.call(null,t),n=n._next;--tr}function pr(){or=(ir=ur.now())+ar,tr=nr=0;try{dr()}finally{tr=0,function(){var t,n,e=Ke,r=1/0;for(;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:Ke=n);Je=t,gr(r)}(),or=0}}function vr(){var t=ur.now(),n=t-ir;n>rr&&(ar-=n,ir=t)}function gr(t){tr||(nr&&(nr=clearTimeout(nr)),t-or>24?(t<1/0&&(nr=setTimeout(pr,t-ur.now()-ar)),er&&(er=clearInterval(er))):(er||(ir=ur.now(),er=setInterval(vr,rr)),tr=1,cr(pr)))}function yr(t,n,e){var r=new lr;return n=null==n?0:+n,r.restart(function(e){r.stop(),t(e+n)},n,e),r}lr.prototype=hr.prototype={constructor:lr,restart:function(t,n,e){if("function"!=typeof t)throw new TypeError("callback is not a function");e=(null==e?fr():+e)+(null==n?0:+n),this._next||Je===this||(Je?Je._next=this:Ke=this,Je=this),this._call=t,this._time=e,gr()},stop:function(){this._call&&(this._call=null,this._time=1/0,gr())}};var _r=I("start","end","cancel","interrupt"),br=[],mr=0,xr=1,wr=2,Mr=3,Nr=4,Tr=5,Ar=6;function Sr(t,n,e,r,i,o){var a=t.__transition;if(a){if(e in a)return}else t.__transition={};!function(t,n,e){var r,i=t.__transition;function o(c){var f,s,l,h;if(e.state!==xr)return u();for(f in i)if((h=i[f]).name===e.name){if(h.state===Mr)return yr(o);h.state===Nr?(h.state=Ar,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete i[f]):+f<n&&(h.state=Ar,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete i[f])}if(yr(function(){e.state===Mr&&(e.state=Nr,e.timer.restart(a,e.delay,e.time),a(c))}),e.state=wr,e.on.call("start",t,t.__data__,e.index,e.group),e.state===wr){for(e.state=Mr,r=new Array(l=e.tween.length),f=0,s=-1;f<l;++f)(h=e.tween[f].value.call(t,t.__data__,e.index,e.group))&&(r[++s]=h);r.length=s+1}}function a(n){for(var i=n<e.duration?e.ease.call(null,n/e.duration):(e.timer.restart(u),e.state=Tr,1),o=-1,a=r.length;++o<a;)r[o].call(t,i);e.state===Tr&&(e.on.call("end",t,t.__data__,e.index,e.group),u())}function u(){for(var r in e.state=Ar,e.timer.stop(),delete i[n],i)return;delete t.__transition}i[n]=e,e.timer=hr(function(t){e.state=xr,e.timer.restart(o,e.delay,e.time),e.delay<=t&&o(t-e.delay)},0,e.time)}(t,e,{name:n,index:r,group:i,on:_r,tween:br,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:mr})}function kr(t,n){var e=Cr(t,n);if(e.state>mr)throw new Error("too late; already scheduled");return e}function Er(t,n){var e=Cr(t,n);if(e.state>Mr)throw new Error("too late; already running");return e}function Cr(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("transition not found");return e}function Pr(t,n){var e,r,i,o=t.__transition,a=!0;if(o){for(i in n=null==n?null:n+"",o)(e=o[i]).name===n?(r=e.state>wr&&e.state<Tr,e.state=Ar,e.timer.stop(),e.on.call(r?"interrupt":"cancel",t,t.__data__,e.index,e.group),delete o[i]):a=!1;a&&delete t.__transition}}function zr(t,n,e){var r=t._id;return t.each(function(){var t=Er(this,r);(t.value||(t.value={}))[n]=e.apply(this,arguments)}),function(t){return Cr(t,r).value[n]}}function Rr(t,n){var e;return("number"==typeof n?me:n instanceof pn?he:(e=pn(n))?(n=e,he):Ne)(t,n)}var Dr=zt.prototype.constructor;function qr(t){return function(){this.style.removeProperty(t)}}var Lr=0;function Ur(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function Or(t){return zt().transition(t)}function Br(){return++Lr}var Fr=zt.prototype;function Yr(t){return((t*=2)<=1?t*t:--t*(2-t)+1)/2}function Ir(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}Ur.prototype=Or.prototype={constructor:Ur,select:function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=K(t));for(var r=this._groups,i=r.length,o=new Array(i),a=0;a<i;++a)for(var u,c,f=r[a],s=f.length,l=o[a]=new Array(s),h=0;h<s;++h)(u=f[h])&&(c=t.call(u,u.__data__,h,f))&&("__data__"in u&&(c.__data__=u.__data__),l[h]=c,Sr(l[h],n,e,h,l,Cr(u,e)));return new Ur(o,this._parents,n,e)},selectAll:function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=tt(t));for(var r=this._groups,i=r.length,o=[],a=[],u=0;u<i;++u)for(var c,f=r[u],s=f.length,l=0;l<s;++l)if(c=f[l]){for(var h,d=t.call(c,c.__data__,l,f),p=Cr(c,e),v=0,g=d.length;v<g;++v)(h=d[v])&&Sr(h,n,e,v,d,p);o.push(d),a.push(c)}return new Ur(o,a,n,e)},filter:function(t){"function"!=typeof t&&(t=nt(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a=n[i],u=a.length,c=r[i]=[],f=0;f<u;++f)(o=a[f])&&t.call(o,o.__data__,f,a)&&c.push(o);return new Ur(r,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u)for(var c,f=n[u],s=e[u],l=f.length,h=a[u]=new Array(l),d=0;d<l;++d)(c=f[d]||s[d])&&(h[d]=c);for(;u<r;++u)a[u]=n[u];return new Ur(a,this._parents,this._name,this._id)},selection:function(){return new Dr(this._groups,this._parents)},transition:function(){for(var t=this._name,n=this._id,e=Br(),r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],c=u.length,f=0;f<c;++f)if(a=u[f]){var s=Cr(a,n);Sr(a,t,e,f,u,{time:s.time+s.delay+s.duration,delay:0,duration:s.duration,ease:s.ease})}return new Ur(r,this._parents,t,e)},call:Fr.call,nodes:Fr.nodes,node:Fr.node,size:Fr.size,empty:Fr.empty,each:Fr.each,on:function(t,n){var e=this._id;return arguments.length<2?Cr(this.node(),e).on.on(t):this.each(function(t,n,e){var r,i,o=function(t){return(t+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||"start"===t})}(n)?kr:Er;return function(){var a=o(this,t),u=a.on;u!==r&&(i=(r=u).copy()).on(n,e),a.on=i}}(e,t,n))},attr:function(t,n){var e=W(t),r="transform"===e?Le:Rr;return this.attrTween(t,"function"==typeof n?(e.local?function(t,n,e){var r,i,o;return function(){var a,u,c=e(this);if(null!=c)return(a=this.getAttributeNS(t.space,t.local))===(u=c+"")?null:a===r&&u===i?o:(i=u,o=n(r=a,c));this.removeAttributeNS(t.space,t.local)}}:function(t,n,e){var r,i,o;return function(){var a,u,c=e(this);if(null!=c)return(a=this.getAttribute(t))===(u=c+"")?null:a===r&&u===i?o:(i=u,o=n(r=a,c));this.removeAttribute(t)}})(e,r,zr(this,"attr."+t,n)):null==n?(e.local?function(t){return function(){this.removeAttributeNS(t.space,t.local)}}:function(t){return function(){this.removeAttribute(t)}})(e):(e.local?function(t,n,e){var r,i,o=e+"";return function(){var a=this.getAttributeNS(t.space,t.local);return a===o?null:a===r?i:i=n(r=a,e)}}:function(t,n,e){var r,i,o=e+"";return function(){var a=this.getAttribute(t);return a===o?null:a===r?i:i=n(r=a,e)}})(e,r,n))},attrTween:function(t,n){var e="attr."+t;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(null==n)return this.tween(e,null);if("function"!=typeof n)throw new Error;var r=W(t);return this.tween(e,(r.local?function(t,n){var e,r;function i(){var i=n.apply(this,arguments);return i!==r&&(e=(r=i)&&function(t,n){return function(e){this.setAttributeNS(t.space,t.local,n.call(this,e))}}(t,i)),e}return i._value=n,i}:function(t,n){var e,r;function i(){var i=n.apply(this,arguments);return i!==r&&(e=(r=i)&&function(t,n){return function(e){this.setAttribute(t,n.call(this,e))}}(t,i)),e}return i._value=n,i})(r,n))},style:function(t,n,e){var r="transform"==(t+="")?qe:Rr;return null==n?this.styleTween(t,function(t,n){var e,r,i;return function(){var o=ft(this,t),a=(this.style.removeProperty(t),ft(this,t));return o===a?null:o===e&&a===r?i:i=n(e=o,r=a)}}(t,r)).on("end.style."+t,qr(t)):"function"==typeof n?this.styleTween(t,function(t,n,e){var r,i,o;return function(){var a=ft(this,t),u=e(this),c=u+"";return null==u&&(this.style.removeProperty(t),c=u=ft(this,t)),a===c?null:a===r&&c===i?o:(i=c,o=n(r=a,u))}}(t,r,zr(this,"style."+t,n))).each(function(t,n){var e,r,i,o,a="style."+n,u="end."+a;return function(){var c=Er(this,t),f=c.on,s=null==c.value[a]?o||(o=qr(n)):void 0;f===e&&i===s||(r=(e=f).copy()).on(u,i=s),c.on=r}}(this._id,t)):this.styleTween(t,function(t,n,e){var r,i,o=e+"";return function(){var a=ft(this,t);return a===o?null:a===r?i:i=n(r=a,e)}}(t,r,n),e).on("end.style."+t,null)},styleTween:function(t,n,e){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==n)return this.tween(r,null);if("function"!=typeof n)throw new Error;return this.tween(r,function(t,n,e){var r,i;function o(){var o=n.apply(this,arguments);return o!==i&&(r=(i=o)&&function(t,n,e){return function(r){this.style.setProperty(t,n.call(this,r),e)}}(t,o,e)),r}return o._value=n,o}(t,n,null==e?"":e))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var n=t(this);this.textContent=null==n?"":n}}(zr(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},textTween:function(t){var n="text";if(arguments.length<1)return(n=this.tween(n))&&n._value;if(null==t)return this.tween(n,null);if("function"!=typeof t)throw new Error;return this.tween(n,function(t){var n,e;function r(){var r=t.apply(this,arguments);return r!==e&&(n=(e=r)&&function(t){return function(n){this.textContent=t.call(this,n)}}(r)),n}return r._value=t,r}(t))},remove:function(){return this.on("end.remove",function(t){return function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}}(this._id))},tween:function(t,n){var e=this._id;if(t+="",arguments.length<2){for(var r,i=Cr(this.node(),e).tween,o=0,a=i.length;o<a;++o)if((r=i[o]).name===t)return r.value;return null}return this.each((null==n?function(t,n){var e,r;return function(){var i=Er(this,t),o=i.tween;if(o!==e)for(var a=0,u=(r=e=o).length;a<u;++a)if(r[a].name===n){(r=r.slice()).splice(a,1);break}i.tween=r}}:function(t,n,e){var r,i;if("function"!=typeof e)throw new Error;return function(){var o=Er(this,t),a=o.tween;if(a!==r){i=(r=a).slice();for(var u={name:n,value:e},c=0,f=i.length;c<f;++c)if(i[c].name===n){i[c]=u;break}c===f&&i.push(u)}o.tween=i}})(e,t,n))},delay:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?function(t,n){return function(){kr(this,t).delay=+n.apply(this,arguments)}}:function(t,n){return n=+n,function(){kr(this,t).delay=n}})(n,t)):Cr(this.node(),n).delay},duration:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?function(t,n){return function(){Er(this,t).duration=+n.apply(this,arguments)}}:function(t,n){return n=+n,function(){Er(this,t).duration=n}})(n,t)):Cr(this.node(),n).duration},ease:function(t){var n=this._id;return arguments.length?this.each(function(t,n){if("function"!=typeof n)throw new Error;return function(){Er(this,t).ease=n}}(n,t)):Cr(this.node(),n).ease},end:function(){var t,n,e=this,r=e._id,i=e.size();return new Promise(function(o,a){var u={value:a},c={value:function(){0==--i&&o()}};e.each(function(){var e=Er(this,r),i=e.on;i!==t&&((n=(t=i).copy())._.cancel.push(u),n._.interrupt.push(u),n._.end.push(c)),e.on=n})})}};var Hr=function t(n){function e(t){return Math.pow(t,n)}return n=+n,e.exponent=t,e}(3),jr=function t(n){function e(t){return 1-Math.pow(1-t,n)}return n=+n,e.exponent=t,e}(3),Xr=function t(n){function e(t){return((t*=2)<=1?Math.pow(t,n):2-Math.pow(2-t,n))/2}return n=+n,e.exponent=t,e}(3),Vr=Math.PI,Gr=Vr/2;function $r(t){return(1-Math.cos(Vr*t))/2}function Wr(t){return((t*=2)<=1?Math.pow(2,10*t-10):2-Math.pow(2,10-10*t))/2}function Zr(t){return((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2}var Qr=4/11,Kr=6/11,Jr=8/11,ti=.75,ni=9/11,ei=10/11,ri=.9375,ii=21/22,oi=63/64,ai=1/Qr/Qr;function ui(t){return(t=+t)<Qr?ai*t*t:t<Jr?ai*(t-=Kr)*t+ti:t<ei?ai*(t-=ni)*t+ri:ai*(t-=ii)*t+oi}var ci=function t(n){function e(t){return t*t*((n+1)*t-n)}return n=+n,e.overshoot=t,e}(1.70158),fi=function t(n){function e(t){return--t*t*((n+1)*t+n)+1}return n=+n,e.overshoot=t,e}(1.70158),si=function t(n){function e(t){return((t*=2)<1?t*t*((n+1)*t-n):(t-=2)*t*((n+1)*t+n)+2)/2}return n=+n,e.overshoot=t,e}(1.70158),li=2*Math.PI,hi=function t(n,e){var r=Math.asin(1/(n=Math.max(1,n)))*(e/=li);function i(t){return n*Math.pow(2,10*--t)*Math.sin((r-t)/e)}return i.amplitude=function(n){return t(n,e*li)},i.period=function(e){return t(n,e)},i}(1,.3),di=function t(n,e){var r=Math.asin(1/(n=Math.max(1,n)))*(e/=li);function i(t){return 1-n*Math.pow(2,-10*(t=+t))*Math.sin((t+r)/e)}return i.amplitude=function(n){return t(n,e*li)},i.period=function(e){return t(n,e)},i}(1,.3),pi=function t(n,e){var r=Math.asin(1/(n=Math.max(1,n)))*(e/=li);function i(t){return((t=2*t-1)<0?n*Math.pow(2,10*t)*Math.sin((r-t)/e):2-n*Math.pow(2,-10*t)*Math.sin((r+t)/e))/2}return i.amplitude=function(n){return t(n,e*li)},i.period=function(e){return t(n,e)},i}(1,.3),vi={time:null,delay:0,duration:250,ease:Ir};function gi(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))return vi.time=fr(),vi;return e}zt.prototype.interrupt=function(t){return this.each(function(){Pr(this,t)})},zt.prototype.transition=function(t){var n,e;t instanceof Ur?(n=t._id,t=t._name):(n=Br(),(e=vi).time=fr(),t=null==t?null:t+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],c=u.length,f=0;f<c;++f)(a=u[f])&&Sr(a,t,n,f,u,e||gi(a,n));return new Ur(r,this._parents,t,n)};var yi=[null];function _i(t){return function(){return t}}function bi(t,n,e){this.target=t,this.type=n,this.selection=e}function mi(){t.event.stopImmediatePropagation()}function xi(){t.event.preventDefault(),t.event.stopImmediatePropagation()}var wi={name:"drag"},Mi={name:"space"},Ni={name:"handle"},Ti={name:"center"};function Ai(t){return[+t[0],+t[1]]}function Si(t){return[Ai(t[0]),Ai(t[1])]}var ki={name:"x",handles:["w","e"].map(Li),input:function(t,n){return null==t?null:[[+t[0],n[0][1]],[+t[1],n[1][1]]]},output:function(t){return t&&[t[0][0],t[1][0]]}},Ei={name:"y",handles:["n","s"].map(Li),input:function(t,n){return null==t?null:[[n[0][0],+t[0]],[n[1][0],+t[1]]]},output:function(t){return t&&[t[0][1],t[1][1]]}},Ci={name:"xy",handles:["n","w","e","s","nw","ne","sw","se"].map(Li),input:function(t){return null==t?null:Si(t)},output:function(t){return t}},Pi={overlay:"crosshair",selection:"move",n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},zi={e:"w",w:"e",nw:"ne",ne:"nw",se:"sw",sw:"se"},Ri={n:"s",s:"n",nw:"sw",ne:"se",se:"ne",sw:"nw"},Di={overlay:1,selection:1,n:null,e:1,s:null,w:-1,nw:-1,ne:1,se:1,sw:-1},qi={overlay:1,selection:1,n:-1,e:null,s:1,w:null,nw:-1,ne:-1,se:1,sw:1};function Li(t){return{type:t}}function Ui(){return!t.event.ctrlKey&&!t.event.button}function Oi(){var t=this.ownerSVGElement||this;return t.hasAttribute("viewBox")?[[(t=t.viewBox.baseVal).x,t.y],[t.x+t.width,t.y+t.height]]:[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]}function Bi(){return navigator.maxTouchPoints||"ontouchstart"in this}function Fi(t){for(;!t.__brush;)if(!(t=t.parentNode))return;return t.__brush}function Yi(n){var e,r=Oi,i=Ui,o=Bi,a=!0,u=I("start","brush","end"),c=6;function f(t){var e=t.property("__brush",g).selectAll(".overlay").data([Li("overlay")]);e.enter().append("rect").attr("class","overlay").attr("pointer-events","all").attr("cursor",Pi.overlay).merge(e).each(function(){var t=Fi(this).extent;Rt(this).attr("x",t[0][0]).attr("y",t[0][1]).attr("width",t[1][0]-t[0][0]).attr("height",t[1][1]-t[0][1])}),t.selectAll(".selection").data([Li("selection")]).enter().append("rect").attr("class","selection").attr("cursor",Pi.selection).attr("fill","#777").attr("fill-opacity",.3).attr("stroke","#fff").attr("shape-rendering","crispEdges");var r=t.selectAll(".handle").data(n.handles,function(t){return t.type});r.exit().remove(),r.enter().append("rect").attr("class",function(t){return"handle handle--"+t.type}).attr("cursor",function(t){return Pi[t.type]}),t.each(s).attr("fill","none").attr("pointer-events","all").on("mousedown.brush",d).filter(o).on("touchstart.brush",d).on("touchmove.brush",p).on("touchend.brush touchcancel.brush",v).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function s(){var t=Rt(this),n=Fi(this).selection;n?(t.selectAll(".selection").style("display",null).attr("x",n[0][0]).attr("y",n[0][1]).attr("width",n[1][0]-n[0][0]).attr("height",n[1][1]-n[0][1]),t.selectAll(".handle").style("display",null).attr("x",function(t){return"e"===t.type[t.type.length-1]?n[1][0]-c/2:n[0][0]-c/2}).attr("y",function(t){return"s"===t.type[0]?n[1][1]-c/2:n[0][1]-c/2}).attr("width",function(t){return"n"===t.type||"s"===t.type?n[1][0]-n[0][0]+c:c}).attr("height",function(t){return"e"===t.type||"w"===t.type?n[1][1]-n[0][1]+c:c})):t.selectAll(".selection,.handle").style("display","none").attr("x",null).attr("y",null).attr("width",null).attr("height",null)}function l(t,n,e){return!e&&t.__brush.emitter||new h(t,n)}function h(t,n){this.that=t,this.args=n,this.state=t.__brush,this.active=0}function d(){if((!e||t.event.touches)&&i.apply(this,arguments)){var r,o,u,c,f,h,d,p,v,g,y,_,b=this,m=t.event.target.__data__.type,x="selection"===(a&&t.event.metaKey?m="overlay":m)?wi:a&&t.event.altKey?Ti:Ni,w=n===Ei?null:Di[m],M=n===ki?null:qi[m],N=Fi(b),T=N.extent,A=N.selection,S=T[0][0],k=T[0][1],E=T[1][0],C=T[1][1],P=0,z=0,R=w&&M&&a&&t.event.shiftKey,D=t.event.touches?(_=t.event.changedTouches[0].identifier,function(n){return Ft(n,t.event.touches,_)}):Bt,q=D(b),L=q,U=l(b,arguments,!0).beforestart();"overlay"===m?(A&&(v=!0),N.selection=A=[[r=n===Ei?S:q[0],u=n===ki?k:q[1]],[f=n===Ei?E:r,d=n===ki?C:u]]):(r=A[0][0],u=A[0][1],f=A[1][0],d=A[1][1]),o=r,c=u,h=f,p=d;var O=Rt(b).attr("pointer-events","none"),B=O.selectAll(".overlay").attr("cursor",Pi[m]);if(t.event.touches)U.moved=Y,U.ended=H;else{var F=Rt(t.event.view).on("mousemove.brush",Y,!0).on("mouseup.brush",H,!0);a&&F.on("keydown.brush",function(){switch(t.event.keyCode){case 16:R=w&&M;break;case 18:x===Ni&&(w&&(f=h-P*w,r=o+P*w),M&&(d=p-z*M,u=c+z*M),x=Ti,I());break;case 32:x!==Ni&&x!==Ti||(w<0?f=h-P:w>0&&(r=o-P),M<0?d=p-z:M>0&&(u=c-z),x=Mi,B.attr("cursor",Pi.selection),I());break;default:return}xi()},!0).on("keyup.brush",function(){switch(t.event.keyCode){case 16:R&&(g=y=R=!1,I());break;case 18:x===Ti&&(w<0?f=h:w>0&&(r=o),M<0?d=p:M>0&&(u=c),x=Ni,I());break;case 32:x===Mi&&(t.event.altKey?(w&&(f=h-P*w,r=o+P*w),M&&(d=p-z*M,u=c+z*M),x=Ti):(w<0?f=h:w>0&&(r=o),M<0?d=p:M>0&&(u=c),x=Ni),B.attr("cursor",Pi[m]),I());break;default:return}xi()},!0),Ht(t.event.view)}mi(),Pr(b),s.call(b),U.start()}function Y(){var t=D(b);!R||g||y||(Math.abs(t[0]-L[0])>Math.abs(t[1]-L[1])?y=!0:g=!0),L=t,v=!0,xi(),I()}function I(){var t;switch(P=L[0]-q[0],z=L[1]-q[1],x){case Mi:case wi:w&&(P=Math.max(S-r,Math.min(E-f,P)),o=r+P,h=f+P),M&&(z=Math.max(k-u,Math.min(C-d,z)),c=u+z,p=d+z);break;case Ni:w<0?(P=Math.max(S-r,Math.min(E-r,P)),o=r+P,h=f):w>0&&(P=Math.max(S-f,Math.min(E-f,P)),o=r,h=f+P),M<0?(z=Math.max(k-u,Math.min(C-u,z)),c=u+z,p=d):M>0&&(z=Math.max(k-d,Math.min(C-d,z)),c=u,p=d+z);break;case Ti:w&&(o=Math.max(S,Math.min(E,r-P*w)),h=Math.max(S,Math.min(E,f+P*w))),M&&(c=Math.max(k,Math.min(C,u-z*M)),p=Math.max(k,Math.min(C,d+z*M)))}h<o&&(w*=-1,t=r,r=f,f=t,t=o,o=h,h=t,m in zi&&B.attr("cursor",Pi[m=zi[m]])),p<c&&(M*=-1,t=u,u=d,d=t,t=c,c=p,p=t,m in Ri&&B.attr("cursor",Pi[m=Ri[m]])),N.selection&&(A=N.selection),g&&(o=A[0][0],h=A[1][0]),y&&(c=A[0][1],p=A[1][1]),A[0][0]===o&&A[0][1]===c&&A[1][0]===h&&A[1][1]===p||(N.selection=[[o,c],[h,p]],s.call(b),U.brush())}function H(){if(mi(),t.event.touches){if(t.event.touches.length)return;e&&clearTimeout(e),e=setTimeout(function(){e=null},500)}else jt(t.event.view,v),F.on("keydown.brush keyup.brush mousemove.brush mouseup.brush",null);O.attr("pointer-events","all"),B.attr("cursor",Pi.overlay),N.selection&&(A=N.selection),function(t){return t[0][0]===t[1][0]||t[0][1]===t[1][1]}(A)&&(N.selection=null,s.call(b)),U.end()}}function p(){l(this,arguments).moved()}function v(){l(this,arguments).ended()}function g(){var t=this.__brush||{selection:null};return t.extent=Si(r.apply(this,arguments)),t.dim=n,t}return f.move=function(t,e){t.selection?t.on("start.brush",function(){l(this,arguments).beforestart().start()}).on("interrupt.brush end.brush",function(){l(this,arguments).end()}).tween("brush",function(){var t=this,r=t.__brush,i=l(t,arguments),o=r.selection,a=n.input("function"==typeof e?e.apply(this,arguments):e,r.extent),u=Te(o,a);function c(n){r.selection=1===n&&null===a?null:u(n),s.call(t),i.brush()}return null!==o&&null!==a?c:c(1)}):t.each(function(){var t=this,r=arguments,i=t.__brush,o=n.input("function"==typeof e?e.apply(t,r):e,i.extent),a=l(t,r).beforestart();Pr(t),i.selection=null===o?null:o,s.call(t),a.start().brush().end()})},f.clear=function(t){f.move(t,null)},h.prototype={beforestart:function(){return 1==++this.active&&(this.state.emitter=this,this.starting=!0),this},start:function(){return this.starting?(this.starting=!1,this.emit("start")):this.emit("brush"),this},brush:function(){return this.emit("brush"),this},end:function(){return 0==--this.active&&(delete this.state.emitter,this.emit("end")),this},emit:function(t){kt(new bi(f,t,n.output(this.state.selection)),u.apply,u,[t,this.that,this.args])}},f.extent=function(t){return arguments.length?(r="function"==typeof t?t:_i(Si(t)),f):r},f.filter=function(t){return arguments.length?(i="function"==typeof t?t:_i(!!t),f):i},f.touchable=function(t){return arguments.length?(o="function"==typeof t?t:_i(!!t),f):o},f.handleSize=function(t){return arguments.length?(c=+t,f):c},f.keyModifiers=function(t){return arguments.length?(a=!!t,f):a},f.on=function(){var t=u.on.apply(u,arguments);return t===u?f:t},f}var Ii=Math.cos,Hi=Math.sin,ji=Math.PI,Xi=ji/2,Vi=2*ji,Gi=Math.max;function $i(t){return function(n,e){return t(n.source.value+n.target.value,e.source.value+e.target.value)}}var Wi=Array.prototype.slice;function Zi(t){return function(){return t}}var Qi=Math.PI,Ki=2*Qi,Ji=Ki-1e-6;function to(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function no(){return new to}function eo(t){return t.source}function ro(t){return t.target}function io(t){return t.radius}function oo(t){return t.startAngle}function ao(t){return t.endAngle}to.prototype=no.prototype={constructor:to,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,r){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+r)},bezierCurveTo:function(t,n,e,r,i,o){this._+="C"+ +t+","+ +n+","+ +e+","+ +r+","+(this._x1=+i)+","+(this._y1=+o)},arcTo:function(t,n,e,r,i){t=+t,n=+n,e=+e,r=+r,i=+i;var o=this._x1,a=this._y1,u=e-t,c=r-n,f=o-t,s=a-n,l=f*f+s*s;if(i<0)throw new Error("negative radius: "+i);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(l>1e-6)if(Math.abs(s*u-c*f)>1e-6&&i){var h=e-o,d=r-a,p=u*u+c*c,v=h*h+d*d,g=Math.sqrt(p),y=Math.sqrt(l),_=i*Math.tan((Qi-Math.acos((p+l-v)/(2*g*y)))/2),b=_/y,m=_/g;Math.abs(b-1)>1e-6&&(this._+="L"+(t+b*f)+","+(n+b*s)),this._+="A"+i+","+i+",0,0,"+ +(s*h>f*d)+","+(this._x1=t+m*u)+","+(this._y1=n+m*c)}else this._+="L"+(this._x1=t)+","+(this._y1=n);else;},arc:function(t,n,e,r,i,o){t=+t,n=+n,o=!!o;var a=(e=+e)*Math.cos(r),u=e*Math.sin(r),c=t+a,f=n+u,s=1^o,l=o?r-i:i-r;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._+="M"+c+","+f:(Math.abs(this._x1-c)>1e-6||Math.abs(this._y1-f)>1e-6)&&(this._+="L"+c+","+f),e&&(l<0&&(l=l%Ki+Ki),l>Ji?this._+="A"+e+","+e+",0,1,"+s+","+(t-a)+","+(n-u)+"A"+e+","+e+",0,1,"+s+","+(this._x1=c)+","+(this._y1=f):l>1e-6&&(this._+="A"+e+","+e+",0,"+ +(l>=Qi)+","+s+","+(this._x1=t+e*Math.cos(i))+","+(this._y1=n+e*Math.sin(i))))},rect:function(t,n,e,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +r+"h"+-e+"Z"},toString:function(){return this._}};function uo(){}function co(t,n){var e=new uo;if(t instanceof uo)t.each(function(t,n){e.set(n,t)});else if(Array.isArray(t)){var r,i=-1,o=t.length;if(null==n)for(;++i<o;)e.set(i,t[i]);else for(;++i<o;)e.set(n(r=t[i],i,t),r)}else if(t)for(var a in t)e.set(a,t[a]);return e}function fo(){return{}}function so(t,n,e){t[n]=e}function lo(){return co()}function ho(t,n,e){t.set(n,e)}function po(){}uo.prototype=co.prototype={constructor:uo,has:function(t){return"$"+t in this},get:function(t){return this["$"+t]},set:function(t,n){return this["$"+t]=n,this},remove:function(t){var n="$"+t;return n in this&&delete this[n]},clear:function(){for(var t in this)"$"===t[0]&&delete this[t]},keys:function(){var t=[];for(var n in this)"$"===n[0]&&t.push(n.slice(1));return t},values:function(){var t=[];for(var n in this)"$"===n[0]&&t.push(this[n]);return t},entries:function(){var t=[];for(var n in this)"$"===n[0]&&t.push({key:n.slice(1),value:this[n]});return t},size:function(){var t=0;for(var n in this)"$"===n[0]&&++t;return t},empty:function(){for(var t in this)if("$"===t[0])return!1;return!0},each:function(t){for(var n in this)"$"===n[0]&&t(this[n],n.slice(1),this)}};var vo=co.prototype;function go(t,n){var e=new po;if(t instanceof po)t.each(function(t){e.add(t)});else if(t){var r=-1,i=t.length;if(null==n)for(;++r<i;)e.add(t[r]);else for(;++r<i;)e.add(n(t[r],r,t))}return e}po.prototype=go.prototype={constructor:po,has:vo.has,add:function(t){return this["$"+(t+="")]=t,this},remove:vo.remove,clear:vo.clear,values:vo.keys,size:vo.size,empty:vo.empty,each:vo.each};var yo=Array.prototype.slice;function _o(t,n){return t-n}function bo(t){return function(){return t}}function mo(t,n){for(var e,r=-1,i=n.length;++r<i;)if(e=xo(t,n[r]))return e;return 0}function xo(t,n){for(var e=n[0],r=n[1],i=-1,o=0,a=t.length,u=a-1;o<a;u=o++){var c=t[o],f=c[0],s=c[1],l=t[u],h=l[0],d=l[1];if(wo(c,l,n))return 0;s>r!=d>r&&e<(h-f)*(r-s)/(d-s)+f&&(i=-i)}return i}function wo(t,n,e){var r,i,o,a;return function(t,n,e){return(n[0]-t[0])*(e[1]-t[1])==(e[0]-t[0])*(n[1]-t[1])}(t,n,e)&&(i=t[r=+(t[0]===n[0])],o=e[r],a=n[r],i<=o&&o<=a||a<=o&&o<=i)}function Mo(){}var No=[[],[[[1,1.5],[.5,1]]],[[[1.5,1],[1,1.5]]],[[[1.5,1],[.5,1]]],[[[1,.5],[1.5,1]]],[[[1,1.5],[.5,1]],[[1,.5],[1.5,1]]],[[[1,.5],[1,1.5]]],[[[1,.5],[.5,1]]],[[[.5,1],[1,.5]]],[[[1,1.5],[1,.5]]],[[[.5,1],[1,.5]],[[1.5,1],[1,1.5]]],[[[1.5,1],[1,.5]]],[[[.5,1],[1.5,1]]],[[[1,1.5],[1.5,1]]],[[[.5,1],[1,1.5]]],[]];function To(){var t=1,n=1,e=M,r=u;function i(t){var n=e(t);if(Array.isArray(n))n=n.slice().sort(_o);else{var r=s(t),i=r[0],a=r[1];n=w(i,a,n),n=g(Math.floor(i/n)*n,Math.floor(a/n)*n,n)}return n.map(function(n){return o(t,n)})}function o(e,i){var o=[],u=[];return function(e,r,i){var o,u,c,f,s,l,h=new Array,d=new Array;o=u=-1,f=e[0]>=r,No[f<<1].forEach(p);for(;++o<t-1;)c=f,f=e[o+1]>=r,No[c|f<<1].forEach(p);No[f<<0].forEach(p);for(;++u<n-1;){for(o=-1,f=e[u*t+t]>=r,s=e[u*t]>=r,No[f<<1|s<<2].forEach(p);++o<t-1;)c=f,f=e[u*t+t+o+1]>=r,l=s,s=e[u*t+o+1]>=r,No[c|f<<1|s<<2|l<<3].forEach(p);No[f|s<<3].forEach(p)}o=-1,s=e[u*t]>=r,No[s<<2].forEach(p);for(;++o<t-1;)l=s,s=e[u*t+o+1]>=r,No[s<<2|l<<3].forEach(p);function p(t){var n,e,r=[t[0][0]+o,t[0][1]+u],c=[t[1][0]+o,t[1][1]+u],f=a(r),s=a(c);(n=d[f])?(e=h[s])?(delete d[n.end],delete h[e.start],n===e?(n.ring.push(c),i(n.ring)):h[n.start]=d[e.end]={start:n.start,end:e.end,ring:n.ring.concat(e.ring)}):(delete d[n.end],n.ring.push(c),d[n.end=s]=n):(n=h[s])?(e=d[f])?(delete h[n.start],delete d[e.end],n===e?(n.ring.push(c),i(n.ring)):h[e.start]=d[n.end]={start:e.start,end:n.end,ring:e.ring.concat(n.ring)}):(delete h[n.start],n.ring.unshift(r),h[n.start=f]=n):h[f]=d[s]={start:f,end:s,ring:[r,c]}}No[s<<3].forEach(p)}(e,i,function(t){r(t,e,i),function(t){for(var n=0,e=t.length,r=t[e-1][1]*t[0][0]-t[e-1][0]*t[0][1];++n<e;)r+=t[n-1][1]*t[n][0]-t[n-1][0]*t[n][1];return r}(t)>0?o.push([t]):u.push(t)}),u.forEach(function(t){for(var n,e=0,r=o.length;e<r;++e)if(-1!==mo((n=o[e])[0],t))return void n.push(t)}),{type:"MultiPolygon",value:i,coordinates:o}}function a(n){return 2*n[0]+n[1]*(t+1)*4}function u(e,r,i){e.forEach(function(e){var o,a=e[0],u=e[1],c=0|a,f=0|u,s=r[f*t+c];a>0&&a<t&&c===a&&(o=r[f*t+c-1],e[0]=a+(i-o)/(s-o)-.5),u>0&&u<n&&f===u&&(o=r[(f-1)*t+c],e[1]=u+(i-o)/(s-o)-.5)})}return i.contour=o,i.size=function(e){if(!arguments.length)return[t,n];var r=Math.ceil(e[0]),o=Math.ceil(e[1]);if(!(r>0&&o>0))throw new Error("invalid size");return t=r,n=o,i},i.thresholds=function(t){return arguments.length?(e="function"==typeof t?t:Array.isArray(t)?bo(yo.call(t)):bo(t),i):e},i.smooth=function(t){return arguments.length?(r=t?u:Mo,i):r===u},i}function Ao(t,n,e){for(var r=t.width,i=t.height,o=1+(e<<1),a=0;a<i;++a)for(var u=0,c=0;u<r+e;++u)u<r&&(c+=t.data[u+a*r]),u>=e&&(u>=o&&(c-=t.data[u-o+a*r]),n.data[u-e+a*r]=c/Math.min(u+1,r-1+o-u,o))}function So(t,n,e){for(var r=t.width,i=t.height,o=1+(e<<1),a=0;a<r;++a)for(var u=0,c=0;u<i+e;++u)u<i&&(c+=t.data[a+u*r]),u>=e&&(u>=o&&(c-=t.data[a+(u-o)*r]),n.data[a+(u-e)*r]=c/Math.min(u+1,i-1+o-u,o))}function ko(t){return t[0]}function Eo(t){return t[1]}function Co(){return 1}var Po={},zo={},Ro=34,Do=10,qo=13;function Lo(t){return new Function("d","return {"+t.map(function(t,n){return JSON.stringify(t)+": d["+n+'] || ""'}).join(",")+"}")}function Uo(t){var n=Object.create(null),e=[];return t.forEach(function(t){for(var r in t)r in n||e.push(n[r]=r)}),e}function Oo(t,n){var e=t+"",r=e.length;return r<n?new Array(n-r+1).join(0)+e:e}function Bo(t){var n=t.getUTCHours(),e=t.getUTCMinutes(),r=t.getUTCSeconds(),i=t.getUTCMilliseconds();return isNaN(t)?"Invalid Date":function(t){return t<0?"-"+Oo(-t,6):t>9999?"+"+Oo(t,6):Oo(t,4)}(t.getUTCFullYear())+"-"+Oo(t.getUTCMonth()+1,2)+"-"+Oo(t.getUTCDate(),2)+(i?"T"+Oo(n,2)+":"+Oo(e,2)+":"+Oo(r,2)+"."+Oo(i,3)+"Z":r?"T"+Oo(n,2)+":"+Oo(e,2)+":"+Oo(r,2)+"Z":e||n?"T"+Oo(n,2)+":"+Oo(e,2)+"Z":"")}function Fo(t){var n=new RegExp('["'+t+"\n\r]"),e=t.charCodeAt(0);function r(t,n){var r,i=[],o=t.length,a=0,u=0,c=o<=0,f=!1;function s(){if(c)return zo;if(f)return f=!1,Po;var n,r,i=a;if(t.charCodeAt(i)===Ro){for(;a++<o&&t.charCodeAt(a)!==Ro||t.charCodeAt(++a)===Ro;);return(n=a)>=o?c=!0:(r=t.charCodeAt(a++))===Do?f=!0:r===qo&&(f=!0,t.charCodeAt(a)===Do&&++a),t.slice(i+1,n-1).replace(/""/g,'"')}for(;a<o;){if((r=t.charCodeAt(n=a++))===Do)f=!0;else if(r===qo)f=!0,t.charCodeAt(a)===Do&&++a;else if(r!==e)continue;return t.slice(i,n)}return c=!0,t.slice(i,o)}for(t.charCodeAt(o-1)===Do&&--o,t.charCodeAt(o-1)===qo&&--o;(r=s())!==zo;){for(var l=[];r!==Po&&r!==zo;)l.push(r),r=s();n&&null==(l=n(l,u++))||i.push(l)}return i}function i(n,e){return n.map(function(n){return e.map(function(t){return a(n[t])}).join(t)})}function o(n){return n.map(a).join(t)}function a(t){return null==t?"":t instanceof Date?Bo(t):n.test(t+="")?'"'+t.replace(/"/g,'""')+'"':t}return{parse:function(t,n){var e,i,o=r(t,function(t,r){if(e)return e(t,r-1);i=t,e=n?function(t,n){var e=Lo(t);return function(r,i){return n(e(r),i,t)}}(t,n):Lo(t)});return o.columns=i||[],o},parseRows:r,format:function(n,e){return null==e&&(e=Uo(n)),[e.map(a).join(t)].concat(i(n,e)).join("\n")},formatBody:function(t,n){return null==n&&(n=Uo(t)),i(t,n).join("\n")},formatRows:function(t){return t.map(o).join("\n")},formatRow:o,formatValue:a}}var Yo=Fo(","),Io=Yo.parse,Ho=Yo.parseRows,jo=Yo.format,Xo=Yo.formatBody,Vo=Yo.formatRows,Go=Yo.formatRow,$o=Yo.formatValue,Wo=Fo("\t"),Zo=Wo.parse,Qo=Wo.parseRows,Ko=Wo.format,Jo=Wo.formatBody,ta=Wo.formatRows,na=Wo.formatRow,ea=Wo.formatValue;var ra=new Date("2019-01-01T00:00").getHours()||new Date("2019-07-01T00:00").getHours();function ia(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.blob()}function oa(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.arrayBuffer()}function aa(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.text()}function ua(t,n){return fetch(t,n).then(aa)}function ca(t){return function(n,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=void 0),ua(n,e).then(function(n){return t(n,r)})}}var fa=ca(Io),sa=ca(Zo);function la(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.json()}function ha(t){return function(n,e){return ua(n,e).then(function(n){return(new DOMParser).parseFromString(n,t)})}}var da=ha("application/xml"),pa=ha("text/html"),va=ha("image/svg+xml");function ga(t){return function(){return t}}function ya(){return 1e-6*(Math.random()-.5)}function _a(t,n,e,r){if(isNaN(n)||isNaN(e))return t;var i,o,a,u,c,f,s,l,h,d=t._root,p={data:r},v=t._x0,g=t._y0,y=t._x1,_=t._y1;if(!d)return t._root=p,t;for(;d.length;)if((f=n>=(o=(v+y)/2))?v=o:y=o,(s=e>=(a=(g+_)/2))?g=a:_=a,i=d,!(d=d[l=s<<1|f]))return i[l]=p,t;if(u=+t._x.call(null,d.data),c=+t._y.call(null,d.data),n===u&&e===c)return p.next=d,i?i[l]=p:t._root=p,t;do{i=i?i[l]=new Array(4):t._root=new Array(4),(f=n>=(o=(v+y)/2))?v=o:y=o,(s=e>=(a=(g+_)/2))?g=a:_=a}while((l=s<<1|f)==(h=(c>=a)<<1|u>=o));return i[h]=d,i[l]=p,t}function ba(t,n,e,r,i){this.node=t,this.x0=n,this.y0=e,this.x1=r,this.y1=i}function ma(t){return t[0]}function xa(t){return t[1]}function wa(t,n,e){var r=new Ma(null==n?ma:n,null==e?xa:e,NaN,NaN,NaN,NaN);return null==t?r:r.addAll(t)}function Ma(t,n,e,r,i,o){this._x=t,this._y=n,this._x0=e,this._y0=r,this._x1=i,this._y1=o,this._root=void 0}function Na(t){for(var n={data:t.data},e=n;t=t.next;)e=e.next={data:t.data};return n}var Ta=wa.prototype=Ma.prototype;function Aa(t){return t.x+t.vx}function Sa(t){return t.y+t.vy}function ka(t){return t.index}function Ea(t,n){var e=t.get(n);if(!e)throw new Error("missing: "+n);return e}function Ca(t){return t.x}function Pa(t){return t.y}Ta.copy=function(){var t,n,e=new Ma(this._x,this._y,this._x0,this._y0,this._x1,this._y1),r=this._root;if(!r)return e;if(!r.length)return e._root=Na(r),e;for(t=[{source:r,target:e._root=new Array(4)}];r=t.pop();)for(var i=0;i<4;++i)(n=r.source[i])&&(n.length?t.push({source:n,target:r.target[i]=new Array(4)}):r.target[i]=Na(n));return e},Ta.add=function(t){var n=+this._x.call(null,t),e=+this._y.call(null,t);return _a(this.cover(n,e),n,e,t)},Ta.addAll=function(t){var n,e,r,i,o=t.length,a=new Array(o),u=new Array(o),c=1/0,f=1/0,s=-1/0,l=-1/0;for(e=0;e<o;++e)isNaN(r=+this._x.call(null,n=t[e]))||isNaN(i=+this._y.call(null,n))||(a[e]=r,u[e]=i,r<c&&(c=r),r>s&&(s=r),i<f&&(f=i),i>l&&(l=i));if(c>s||f>l)return this;for(this.cover(c,f).cover(s,l),e=0;e<o;++e)_a(this,a[e],u[e],t[e]);return this},Ta.cover=function(t,n){if(isNaN(t=+t)||isNaN(n=+n))return this;var e=this._x0,r=this._y0,i=this._x1,o=this._y1;if(isNaN(e))i=(e=Math.floor(t))+1,o=(r=Math.floor(n))+1;else{for(var a,u,c=i-e,f=this._root;e>t||t>=i||r>n||n>=o;)switch(u=(n<r)<<1|t<e,(a=new Array(4))[u]=f,f=a,c*=2,u){case 0:i=e+c,o=r+c;break;case 1:e=i-c,o=r+c;break;case 2:i=e+c,r=o-c;break;case 3:e=i-c,r=o-c}this._root&&this._root.length&&(this._root=f)}return this._x0=e,this._y0=r,this._x1=i,this._y1=o,this},Ta.data=function(){var t=[];return this.visit(function(n){if(!n.length)do{t.push(n.data)}while(n=n.next)}),t},Ta.extent=function(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]},Ta.find=function(t,n,e){var r,i,o,a,u,c,f,s=this._x0,l=this._y0,h=this._x1,d=this._y1,p=[],v=this._root;for(v&&p.push(new ba(v,s,l,h,d)),null==e?e=1/0:(s=t-e,l=n-e,h=t+e,d=n+e,e*=e);c=p.pop();)if(!(!(v=c.node)||(i=c.x0)>h||(o=c.y0)>d||(a=c.x1)<s||(u=c.y1)<l))if(v.length){var g=(i+a)/2,y=(o+u)/2;p.push(new ba(v[3],g,y,a,u),new ba(v[2],i,y,g,u),new ba(v[1],g,o,a,y),new ba(v[0],i,o,g,y)),(f=(n>=y)<<1|t>=g)&&(c=p[p.length-1],p[p.length-1]=p[p.length-1-f],p[p.length-1-f]=c)}else{var _=t-+this._x.call(null,v.data),b=n-+this._y.call(null,v.data),m=_*_+b*b;if(m<e){var x=Math.sqrt(e=m);s=t-x,l=n-x,h=t+x,d=n+x,r=v.data}}return r},Ta.remove=function(t){if(isNaN(o=+this._x.call(null,t))||isNaN(a=+this._y.call(null,t)))return this;var n,e,r,i,o,a,u,c,f,s,l,h,d=this._root,p=this._x0,v=this._y0,g=this._x1,y=this._y1;if(!d)return this;if(d.length)for(;;){if((f=o>=(u=(p+g)/2))?p=u:g=u,(s=a>=(c=(v+y)/2))?v=c:y=c,n=d,!(d=d[l=s<<1|f]))return this;if(!d.length)break;(n[l+1&3]||n[l+2&3]||n[l+3&3])&&(e=n,h=l)}for(;d.data!==t;)if(r=d,!(d=d.next))return this;return(i=d.next)&&delete d.next,r?(i?r.next=i:delete r.next,this):n?(i?n[l]=i:delete n[l],(d=n[0]||n[1]||n[2]||n[3])&&d===(n[3]||n[2]||n[1]||n[0])&&!d.length&&(e?e[h]=d:this._root=d),this):(this._root=i,this)},Ta.removeAll=function(t){for(var n=0,e=t.length;n<e;++n)this.remove(t[n]);return this},Ta.root=function(){return this._root},Ta.size=function(){var t=0;return this.visit(function(n){if(!n.length)do{++t}while(n=n.next)}),t},Ta.visit=function(t){var n,e,r,i,o,a,u=[],c=this._root;for(c&&u.push(new ba(c,this._x0,this._y0,this._x1,this._y1));n=u.pop();)if(!t(c=n.node,r=n.x0,i=n.y0,o=n.x1,a=n.y1)&&c.length){var f=(r+o)/2,s=(i+a)/2;(e=c[3])&&u.push(new ba(e,f,s,o,a)),(e=c[2])&&u.push(new ba(e,r,s,f,a)),(e=c[1])&&u.push(new ba(e,f,i,o,s)),(e=c[0])&&u.push(new ba(e,r,i,f,s))}return this},Ta.visitAfter=function(t){var n,e=[],r=[];for(this._root&&e.push(new ba(this._root,this._x0,this._y0,this._x1,this._y1));n=e.pop();){var i=n.node;if(i.length){var o,a=n.x0,u=n.y0,c=n.x1,f=n.y1,s=(a+c)/2,l=(u+f)/2;(o=i[0])&&e.push(new ba(o,a,u,s,l)),(o=i[1])&&e.push(new ba(o,s,u,c,l)),(o=i[2])&&e.push(new ba(o,a,l,s,f)),(o=i[3])&&e.push(new ba(o,s,l,c,f))}r.push(n)}for(;n=r.pop();)t(n.node,n.x0,n.y0,n.x1,n.y1);return this},Ta.x=function(t){return arguments.length?(this._x=t,this):this._x},Ta.y=function(t){return arguments.length?(this._y=t,this):this._y};var za=10,Ra=Math.PI*(3-Math.sqrt(5));function Da(t,n){if((e=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var e,r=t.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+t.slice(e+1)]}function qa(t){return(t=Da(Math.abs(t)))?t[1]:NaN}var La,Ua=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Oa(t){if(!(n=Ua.exec(t)))throw new Error("invalid format: "+t);var n;return new Ba({fill:n[1],align:n[2],sign:n[3],symbol:n[4],zero:n[5],width:n[6],comma:n[7],precision:n[8]&&n[8].slice(1),trim:n[9],type:n[10]})}function Ba(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function Fa(t,n){var e=Da(t,n);if(!e)return t+"";var r=e[0],i=e[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}Oa.prototype=Ba.prototype,Ba.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var Ya={"%":function(t,n){return(100*t).toFixed(n)},b:function(t){return Math.round(t).toString(2)},c:function(t){return t+""},d:function(t){return Math.round(t).toString(10)},e:function(t,n){return t.toExponential(n)},f:function(t,n){return t.toFixed(n)},g:function(t,n){return t.toPrecision(n)},o:function(t){return Math.round(t).toString(8)},p:function(t,n){return Fa(100*t,n)},r:Fa,s:function(t,n){var e=Da(t,n);if(!e)return t+"";var r=e[0],i=e[1],o=i-(La=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,a=r.length;return o===a?r:o>a?r+new Array(o-a+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+Da(t,Math.max(0,n+o-1))[0]},X:function(t){return Math.round(t).toString(16).toUpperCase()},x:function(t){return Math.round(t).toString(16)}};function Ia(t){return t}var Ha,ja=Array.prototype.map,Xa=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Va(t){var n,e,r=void 0===t.grouping||void 0===t.thousands?Ia:(n=ja.call(t.grouping,Number),e=t.thousands+"",function(t,r){for(var i=t.length,o=[],a=0,u=n[0],c=0;i>0&&u>0&&(c+u+1>r&&(u=Math.max(1,r-c)),o.push(t.substring(i-=u,i+u)),!((c+=u+1)>r));)u=n[a=(a+1)%n.length];return o.reverse().join(e)}),i=void 0===t.currency?"":t.currency[0]+"",o=void 0===t.currency?"":t.currency[1]+"",a=void 0===t.decimal?".":t.decimal+"",u=void 0===t.numerals?Ia:function(t){return function(n){return n.replace(/[0-9]/g,function(n){return t[+n]})}}(ja.call(t.numerals,String)),c=void 0===t.percent?"%":t.percent+"",f=void 0===t.minus?"-":t.minus+"",s=void 0===t.nan?"NaN":t.nan+"";function l(t){var n=(t=Oa(t)).fill,e=t.align,l=t.sign,h=t.symbol,d=t.zero,p=t.width,v=t.comma,g=t.precision,y=t.trim,_=t.type;"n"===_?(v=!0,_="g"):Ya[_]||(void 0===g&&(g=12),y=!0,_="g"),(d||"0"===n&&"="===e)&&(d=!0,n="0",e="=");var b="$"===h?i:"#"===h&&/[boxX]/.test(_)?"0"+_.toLowerCase():"",m="$"===h?o:/[%p]/.test(_)?c:"",x=Ya[_],w=/[defgprs%]/.test(_);function M(t){var i,o,c,h=b,M=m;if("c"===_)M=x(t)+M,t="";else{var N=(t=+t)<0||1/t<0;if(t=isNaN(t)?s:x(Math.abs(t),g),y&&(t=function(t){t:for(var n,e=t.length,r=1,i=-1;r<e;++r)switch(t[r]){case".":i=n=r;break;case"0":0===i&&(i=r),n=r;break;default:if(!+t[r])break t;i>0&&(i=0)}return i>0?t.slice(0,i)+t.slice(n+1):t}(t)),N&&0==+t&&"+"!==l&&(N=!1),h=(N?"("===l?l:f:"-"===l||"("===l?"":l)+h,M=("s"===_?Xa[8+La/3]:"")+M+(N&&"("===l?")":""),w)for(i=-1,o=t.length;++i<o;)if(48>(c=t.charCodeAt(i))||c>57){M=(46===c?a+t.slice(i+1):t.slice(i))+M,t=t.slice(0,i);break}}v&&!d&&(t=r(t,1/0));var T=h.length+t.length+M.length,A=T<p?new Array(p-T+1).join(n):"";switch(v&&d&&(t=r(A+t,A.length?p-M.length:1/0),A=""),e){case"<":t=h+t+M+A;break;case"=":t=h+A+t+M;break;case"^":t=A.slice(0,T=A.length>>1)+h+t+M+A.slice(T);break;default:t=A+h+t+M}return u(t)}return g=void 0===g?6:/[gprs]/.test(_)?Math.max(1,Math.min(21,g)):Math.max(0,Math.min(20,g)),M.toString=function(){return t+""},M}return{format:l,formatPrefix:function(t,n){var e=l(((t=Oa(t)).type="f",t)),r=3*Math.max(-8,Math.min(8,Math.floor(qa(n)/3))),i=Math.pow(10,-r),o=Xa[8+r/3];return function(t){return e(i*t)+o}}}}function Ga(n){return Ha=Va(n),t.format=Ha.format,t.formatPrefix=Ha.formatPrefix,Ha}function $a(t){return Math.max(0,-qa(Math.abs(t)))}function Wa(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(qa(n)/3)))-qa(Math.abs(t)))}function Za(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,qa(n)-qa(t))+1}function Qa(){return new Ka}function Ka(){this.reset()}Ga({decimal:".",thousands:",",grouping:[3],currency:["$",""],minus:"-"}),Ka.prototype={constructor:Ka,reset:function(){this.s=this.t=0},add:function(t){tu(Ja,t,this.t),tu(this,Ja.s,this.s),this.s?this.t+=Ja.t:this.s=Ja.t},valueOf:function(){return this.s}};var Ja=new Ka;function tu(t,n,e){var r=t.s=n+e,i=r-n,o=r-i;t.t=n-o+(e-i)}var nu=1e-6,eu=1e-12,ru=Math.PI,iu=ru/2,ou=ru/4,au=2*ru,uu=180/ru,cu=ru/180,fu=Math.abs,su=Math.atan,lu=Math.atan2,hu=Math.cos,du=Math.ceil,pu=Math.exp,vu=Math.log,gu=Math.pow,yu=Math.sin,_u=Math.sign||function(t){return t>0?1:t<0?-1:0},bu=Math.sqrt,mu=Math.tan;function xu(t){return t>1?0:t<-1?ru:Math.acos(t)}function wu(t){return t>1?iu:t<-1?-iu:Math.asin(t)}function Mu(t){return(t=yu(t/2))*t}function Nu(){}function Tu(t,n){t&&Su.hasOwnProperty(t.type)&&Su[t.type](t,n)}var Au={Feature:function(t,n){Tu(t.geometry,n)},FeatureCollection:function(t,n){for(var e=t.features,r=-1,i=e.length;++r<i;)Tu(e[r].geometry,n)}},Su={Sphere:function(t,n){n.sphere()},Point:function(t,n){t=t.coordinates,n.point(t[0],t[1],t[2])},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)t=e[r],n.point(t[0],t[1],t[2])},LineString:function(t,n){ku(t.coordinates,n,0)},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)ku(e[r],n,0)},Polygon:function(t,n){Eu(t.coordinates,n)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)Eu(e[r],n)},GeometryCollection:function(t,n){for(var e=t.geometries,r=-1,i=e.length;++r<i;)Tu(e[r],n)}};function ku(t,n,e){var r,i=-1,o=t.length-e;for(n.lineStart();++i<o;)r=t[i],n.point(r[0],r[1],r[2]);n.lineEnd()}function Eu(t,n){var e=-1,r=t.length;for(n.polygonStart();++e<r;)ku(t[e],n,1);n.polygonEnd()}function Cu(t,n){t&&Au.hasOwnProperty(t.type)?Au[t.type](t,n):Tu(t,n)}var Pu,zu,Ru,Du,qu,Lu=Qa(),Uu=Qa(),Ou={point:Nu,lineStart:Nu,lineEnd:Nu,polygonStart:function(){Lu.reset(),Ou.lineStart=Bu,Ou.lineEnd=Fu},polygonEnd:function(){var t=+Lu;Uu.add(t<0?au+t:t),this.lineStart=this.lineEnd=this.point=Nu},sphere:function(){Uu.add(au)}};function Bu(){Ou.point=Yu}function Fu(){Iu(Pu,zu)}function Yu(t,n){Ou.point=Iu,Pu=t,zu=n,Ru=t*=cu,Du=hu(n=(n*=cu)/2+ou),qu=yu(n)}function Iu(t,n){var e=(t*=cu)-Ru,r=e>=0?1:-1,i=r*e,o=hu(n=(n*=cu)/2+ou),a=yu(n),u=qu*a,c=Du*o+u*hu(i),f=u*r*yu(i);Lu.add(lu(f,c)),Ru=t,Du=o,qu=a}function Hu(t){return[lu(t[1],t[0]),wu(t[2])]}function ju(t){var n=t[0],e=t[1],r=hu(e);return[r*hu(n),r*yu(n),yu(e)]}function Xu(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function Vu(t,n){return[t[1]*n[2]-t[2]*n[1],t[2]*n[0]-t[0]*n[2],t[0]*n[1]-t[1]*n[0]]}function Gu(t,n){t[0]+=n[0],t[1]+=n[1],t[2]+=n[2]}function $u(t,n){return[t[0]*n,t[1]*n,t[2]*n]}function Wu(t){var n=bu(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]/=n,t[1]/=n,t[2]/=n}var Zu,Qu,Ku,Ju,tc,nc,ec,rc,ic,oc,ac,uc,cc,fc,sc,lc,hc,dc,pc,vc,gc,yc,_c,bc,mc,xc,wc=Qa(),Mc={point:Nc,lineStart:Ac,lineEnd:Sc,polygonStart:function(){Mc.point=kc,Mc.lineStart=Ec,Mc.lineEnd=Cc,wc.reset(),Ou.polygonStart()},polygonEnd:function(){Ou.polygonEnd(),Mc.point=Nc,Mc.lineStart=Ac,Mc.lineEnd=Sc,Lu<0?(Zu=-(Ku=180),Qu=-(Ju=90)):wc>nu?Ju=90:wc<-nu&&(Qu=-90),oc[0]=Zu,oc[1]=Ku},sphere:function(){Zu=-(Ku=180),Qu=-(Ju=90)}};function Nc(t,n){ic.push(oc=[Zu=t,Ku=t]),n<Qu&&(Qu=n),n>Ju&&(Ju=n)}function Tc(t,n){var e=ju([t*cu,n*cu]);if(rc){var r=Vu(rc,e),i=Vu([r[1],-r[0],0],r);Wu(i),i=Hu(i);var o,a=t-tc,u=a>0?1:-1,c=i[0]*uu*u,f=fu(a)>180;f^(u*tc<c&&c<u*t)?(o=i[1]*uu)>Ju&&(Ju=o):f^(u*tc<(c=(c+360)%360-180)&&c<u*t)?(o=-i[1]*uu)<Qu&&(Qu=o):(n<Qu&&(Qu=n),n>Ju&&(Ju=n)),f?t<tc?Pc(Zu,t)>Pc(Zu,Ku)&&(Ku=t):Pc(t,Ku)>Pc(Zu,Ku)&&(Zu=t):Ku>=Zu?(t<Zu&&(Zu=t),t>Ku&&(Ku=t)):t>tc?Pc(Zu,t)>Pc(Zu,Ku)&&(Ku=t):Pc(t,Ku)>Pc(Zu,Ku)&&(Zu=t)}else ic.push(oc=[Zu=t,Ku=t]);n<Qu&&(Qu=n),n>Ju&&(Ju=n),rc=e,tc=t}function Ac(){Mc.point=Tc}function Sc(){oc[0]=Zu,oc[1]=Ku,Mc.point=Nc,rc=null}function kc(t,n){if(rc){var e=t-tc;wc.add(fu(e)>180?e+(e>0?360:-360):e)}else nc=t,ec=n;Ou.point(t,n),Tc(t,n)}function Ec(){Ou.lineStart()}function Cc(){kc(nc,ec),Ou.lineEnd(),fu(wc)>nu&&(Zu=-(Ku=180)),oc[0]=Zu,oc[1]=Ku,rc=null}function Pc(t,n){return(n-=t)<0?n+360:n}function zc(t,n){return t[0]-n[0]}function Rc(t,n){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var Dc={sphere:Nu,point:qc,lineStart:Uc,lineEnd:Fc,polygonStart:function(){Dc.lineStart=Yc,Dc.lineEnd=Ic},polygonEnd:function(){Dc.lineStart=Uc,Dc.lineEnd=Fc}};function qc(t,n){t*=cu;var e=hu(n*=cu);Lc(e*hu(t),e*yu(t),yu(n))}function Lc(t,n,e){cc+=(t-cc)/++ac,fc+=(n-fc)/ac,sc+=(e-sc)/ac}function Uc(){Dc.point=Oc}function Oc(t,n){t*=cu;var e=hu(n*=cu);bc=e*hu(t),mc=e*yu(t),xc=yu(n),Dc.point=Bc,Lc(bc,mc,xc)}function Bc(t,n){t*=cu;var e=hu(n*=cu),r=e*hu(t),i=e*yu(t),o=yu(n),a=lu(bu((a=mc*o-xc*i)*a+(a=xc*r-bc*o)*a+(a=bc*i-mc*r)*a),bc*r+mc*i+xc*o);uc+=a,lc+=a*(bc+(bc=r)),hc+=a*(mc+(mc=i)),dc+=a*(xc+(xc=o)),Lc(bc,mc,xc)}function Fc(){Dc.point=qc}function Yc(){Dc.point=Hc}function Ic(){jc(yc,_c),Dc.point=qc}function Hc(t,n){yc=t,_c=n,t*=cu,n*=cu,Dc.point=jc;var e=hu(n);bc=e*hu(t),mc=e*yu(t),xc=yu(n),Lc(bc,mc,xc)}function jc(t,n){t*=cu;var e=hu(n*=cu),r=e*hu(t),i=e*yu(t),o=yu(n),a=mc*o-xc*i,u=xc*r-bc*o,c=bc*i-mc*r,f=bu(a*a+u*u+c*c),s=wu(f),l=f&&-s/f;pc+=l*a,vc+=l*u,gc+=l*c,uc+=s,lc+=s*(bc+(bc=r)),hc+=s*(mc+(mc=i)),dc+=s*(xc+(xc=o)),Lc(bc,mc,xc)}function Xc(t){return function(){return t}}function Vc(t,n){function e(e,r){return e=t(e,r),n(e[0],e[1])}return t.invert&&n.invert&&(e.invert=function(e,r){return(e=n.invert(e,r))&&t.invert(e[0],e[1])}),e}function Gc(t,n){return[fu(t)>ru?t+Math.round(-t/au)*au:t,n]}function $c(t,n,e){return(t%=au)?n||e?Vc(Zc(t),Qc(n,e)):Zc(t):n||e?Qc(n,e):Gc}function Wc(t){return function(n,e){return[(n+=t)>ru?n-au:n<-ru?n+au:n,e]}}function Zc(t){var n=Wc(t);return n.invert=Wc(-t),n}function Qc(t,n){var e=hu(t),r=yu(t),i=hu(n),o=yu(n);function a(t,n){var a=hu(n),u=hu(t)*a,c=yu(t)*a,f=yu(n),s=f*e+u*r;return[lu(c*i-s*o,u*e-f*r),wu(s*i+c*o)]}return a.invert=function(t,n){var a=hu(n),u=hu(t)*a,c=yu(t)*a,f=yu(n),s=f*i-c*o;return[lu(c*i+f*o,u*e+s*r),wu(s*e-u*r)]},a}function Kc(t){function n(n){return(n=t(n[0]*cu,n[1]*cu))[0]*=uu,n[1]*=uu,n}return t=$c(t[0]*cu,t[1]*cu,t.length>2?t[2]*cu:0),n.invert=function(n){return(n=t.invert(n[0]*cu,n[1]*cu))[0]*=uu,n[1]*=uu,n},n}function Jc(t,n,e,r,i,o){if(e){var a=hu(n),u=yu(n),c=r*e;null==i?(i=n+r*au,o=n-c/2):(i=tf(a,i),o=tf(a,o),(r>0?i<o:i>o)&&(i+=r*au));for(var f,s=i;r>0?s>o:s<o;s-=c)f=Hu([a,-u*hu(s),-u*yu(s)]),t.point(f[0],f[1])}}function tf(t,n){(n=ju(n))[0]-=t,Wu(n);var e=xu(-n[1]);return((-n[2]<0?-e:e)+au-nu)%au}function nf(){var t,n=[];return{point:function(n,e){t.push([n,e])},lineStart:function(){n.push(t=[])},lineEnd:Nu,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()))},result:function(){var e=n;return n=[],t=null,e}}}function ef(t,n){return fu(t[0]-n[0])<nu&&fu(t[1]-n[1])<nu}function rf(t,n,e,r){this.x=t,this.z=n,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function of(t,n,e,r,i){var o,a,u=[],c=[];if(t.forEach(function(t){if(!((n=t.length-1)<=0)){var n,e,r=t[0],a=t[n];if(ef(r,a)){for(i.lineStart(),o=0;o<n;++o)i.point((r=t[o])[0],r[1]);i.lineEnd()}else u.push(e=new rf(r,t,null,!0)),c.push(e.o=new rf(r,null,e,!1)),u.push(e=new rf(a,t,null,!1)),c.push(e.o=new rf(a,null,e,!0))}}),u.length){for(c.sort(n),af(u),af(c),o=0,a=c.length;o<a;++o)c[o].e=e=!e;for(var f,s,l=u[0];;){for(var h=l,d=!0;h.v;)if((h=h.n)===l)return;f=h.z,i.lineStart();do{if(h.v=h.o.v=!0,h.e){if(d)for(o=0,a=f.length;o<a;++o)i.point((s=f[o])[0],s[1]);else r(h.x,h.n.x,1,i);h=h.n}else{if(d)for(f=h.p.z,o=f.length-1;o>=0;--o)i.point((s=f[o])[0],s[1]);else r(h.x,h.p.x,-1,i);h=h.p}f=(h=h.o).z,d=!d}while(!h.v);i.lineEnd()}}}function af(t){if(n=t.length){for(var n,e,r=0,i=t[0];++r<n;)i.n=e=t[r],e.p=i,i=e;i.n=e=t[0],e.p=i}}Gc.invert=Gc;var uf=Qa();function cf(t){return fu(t[0])<=ru?t[0]:_u(t[0])*((fu(t[0])+ru)%au-ru)}function ff(t,n){var e=cf(n),r=n[1],i=yu(r),o=[yu(e),-hu(e),0],a=0,u=0;uf.reset(),1===i?r=iu+nu:-1===i&&(r=-iu-nu);for(var c=0,f=t.length;c<f;++c)if(l=(s=t[c]).length)for(var s,l,h=s[l-1],d=cf(h),p=h[1]/2+ou,v=yu(p),g=hu(p),y=0;y<l;++y,d=b,v=x,g=w,h=_){var _=s[y],b=cf(_),m=_[1]/2+ou,x=yu(m),w=hu(m),M=b-d,N=M>=0?1:-1,T=N*M,A=T>ru,S=v*x;if(uf.add(lu(S*N*yu(T),g*w+S*hu(T))),a+=A?M+N*au:M,A^d>=e^b>=e){var k=Vu(ju(h),ju(_));Wu(k);var E=Vu(o,k);Wu(E);var C=(A^M>=0?-1:1)*wu(E[2]);(r>C||r===C&&(k[0]||k[1]))&&(u+=A^M>=0?1:-1)}}return(a<-nu||a<nu&&uf<-nu)^1&u}function sf(t,n,e,r){return function(i){var o,a,u,c=n(i),f=nf(),s=n(f),l=!1,h={point:d,lineStart:v,lineEnd:g,polygonStart:function(){h.point=y,h.lineStart=_,h.lineEnd=b,a=[],o=[]},polygonEnd:function(){h.point=d,h.lineStart=v,h.lineEnd=g,a=A(a);var t=ff(o,r);a.length?(l||(i.polygonStart(),l=!0),of(a,hf,t,e,i)):t&&(l||(i.polygonStart(),l=!0),i.lineStart(),e(null,null,1,i),i.lineEnd()),l&&(i.polygonEnd(),l=!1),a=o=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}};function d(n,e){t(n,e)&&i.point(n,e)}function p(t,n){c.point(t,n)}function v(){h.point=p,c.lineStart()}function g(){h.point=d,c.lineEnd()}function y(t,n){u.push([t,n]),s.point(t,n)}function _(){s.lineStart(),u=[]}function b(){y(u[0][0],u[0][1]),s.lineEnd();var t,n,e,r,c=s.clean(),h=f.result(),d=h.length;if(u.pop(),o.push(u),u=null,d)if(1&c){if((n=(e=h[0]).length-1)>0){for(l||(i.polygonStart(),l=!0),i.lineStart(),t=0;t<n;++t)i.point((r=e[t])[0],r[1]);i.lineEnd()}}else d>1&&2&c&&h.push(h.pop().concat(h.shift())),a.push(h.filter(lf))}return h}}function lf(t){return t.length>1}function hf(t,n){return((t=t.x)[0]<0?t[1]-iu-nu:iu-t[1])-((n=n.x)[0]<0?n[1]-iu-nu:iu-n[1])}var df=sf(function(){return!0},function(t){var n,e=NaN,r=NaN,i=NaN;return{lineStart:function(){t.lineStart(),n=1},point:function(o,a){var u=o>0?ru:-ru,c=fu(o-e);fu(c-ru)<nu?(t.point(e,r=(r+a)/2>0?iu:-iu),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(u,r),t.point(o,r),n=0):i!==u&&c>=ru&&(fu(e-i)<nu&&(e-=i*nu),fu(o-u)<nu&&(o-=u*nu),r=function(t,n,e,r){var i,o,a=yu(t-e);return fu(a)>nu?su((yu(n)*(o=hu(r))*yu(e)-yu(r)*(i=hu(n))*yu(t))/(i*o*a)):(n+r)/2}(e,r,o,a),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(u,r),n=0),t.point(e=o,r=a),i=u},lineEnd:function(){t.lineEnd(),e=r=NaN},clean:function(){return 2-n}}},function(t,n,e,r){var i;if(null==t)i=e*iu,r.point(-ru,i),r.point(0,i),r.point(ru,i),r.point(ru,0),r.point(ru,-i),r.point(0,-i),r.point(-ru,-i),r.point(-ru,0),r.point(-ru,i);else if(fu(t[0]-n[0])>nu){var o=t[0]<n[0]?ru:-ru;i=e*o/2,r.point(-o,i),r.point(0,i),r.point(o,i)}else r.point(n[0],n[1])},[-ru,-iu]);function pf(t){var n=hu(t),e=6*cu,r=n>0,i=fu(n)>nu;function o(t,e){return hu(t)*hu(e)>n}function a(t,e,r){var i=[1,0,0],o=Vu(ju(t),ju(e)),a=Xu(o,o),u=o[0],c=a-u*u;if(!c)return!r&&t;var f=n*a/c,s=-n*u/c,l=Vu(i,o),h=$u(i,f);Gu(h,$u(o,s));var d=l,p=Xu(h,d),v=Xu(d,d),g=p*p-v*(Xu(h,h)-1);if(!(g<0)){var y=bu(g),_=$u(d,(-p-y)/v);if(Gu(_,h),_=Hu(_),!r)return _;var b,m=t[0],x=e[0],w=t[1],M=e[1];x<m&&(b=m,m=x,x=b);var N=x-m,T=fu(N-ru)<nu;if(!T&&M<w&&(b=w,w=M,M=b),T||N<nu?T?w+M>0^_[1]<(fu(_[0]-m)<nu?w:M):w<=_[1]&&_[1]<=M:N>ru^(m<=_[0]&&_[0]<=x)){var A=$u(d,(-p+y)/v);return Gu(A,h),[_,Hu(A)]}}}function u(n,e){var i=r?t:ru-t,o=0;return n<-i?o|=1:n>i&&(o|=2),e<-i?o|=4:e>i&&(o|=8),o}return sf(o,function(t){var n,e,c,f,s;return{lineStart:function(){f=c=!1,s=1},point:function(l,h){var d,p=[l,h],v=o(l,h),g=r?v?0:u(l,h):v?u(l+(l<0?ru:-ru),h):0;if(!n&&(f=c=v)&&t.lineStart(),v!==c&&(!(d=a(n,p))||ef(n,d)||ef(p,d))&&(p[0]+=nu,p[1]+=nu,v=o(p[0],p[1])),v!==c)s=0,v?(t.lineStart(),d=a(p,n),t.point(d[0],d[1])):(d=a(n,p),t.point(d[0],d[1]),t.lineEnd()),n=d;else if(i&&n&&r^v){var y;g&e||!(y=a(p,n,!0))||(s=0,r?(t.lineStart(),t.point(y[0][0],y[0][1]),t.point(y[1][0],y[1][1]),t.lineEnd()):(t.point(y[1][0],y[1][1]),t.lineEnd(),t.lineStart(),t.point(y[0][0],y[0][1])))}!v||n&&ef(n,p)||t.point(p[0],p[1]),n=p,c=v,e=g},lineEnd:function(){c&&t.lineEnd(),n=null},clean:function(){return s|(f&&c)<<1}}},function(n,r,i,o){Jc(o,t,e,i,n,r)},r?[0,-t]:[-ru,t-ru])}var vf=1e9,gf=-vf;function yf(t,n,e,r){function i(i,o){return t<=i&&i<=e&&n<=o&&o<=r}function o(i,o,u,f){var s=0,l=0;if(null==i||(s=a(i,u))!==(l=a(o,u))||c(i,o)<0^u>0)do{f.point(0===s||3===s?t:e,s>1?r:n)}while((s=(s+u+4)%4)!==l);else f.point(o[0],o[1])}function a(r,i){return fu(r[0]-t)<nu?i>0?0:3:fu(r[0]-e)<nu?i>0?2:1:fu(r[1]-n)<nu?i>0?1:0:i>0?3:2}function u(t,n){return c(t.x,n.x)}function c(t,n){var e=a(t,1),r=a(n,1);return e!==r?e-r:0===e?n[1]-t[1]:1===e?t[0]-n[0]:2===e?t[1]-n[1]:n[0]-t[0]}return function(a){var c,f,s,l,h,d,p,v,g,y,_,b=a,m=nf(),x={point:w,lineStart:function(){x.point=M,f&&f.push(s=[]);y=!0,g=!1,p=v=NaN},lineEnd:function(){c&&(M(l,h),d&&g&&m.rejoin(),c.push(m.result()));x.point=w,g&&b.lineEnd()},polygonStart:function(){b=m,c=[],f=[],_=!0},polygonEnd:function(){var n=function(){for(var n=0,e=0,i=f.length;e<i;++e)for(var o,a,u=f[e],c=1,s=u.length,l=u[0],h=l[0],d=l[1];c<s;++c)o=h,a=d,l=u[c],h=l[0],d=l[1],a<=r?d>r&&(h-o)*(r-a)>(d-a)*(t-o)&&++n:d<=r&&(h-o)*(r-a)<(d-a)*(t-o)&&--n;return n}(),e=_&&n,i=(c=A(c)).length;(e||i)&&(a.polygonStart(),e&&(a.lineStart(),o(null,null,1,a),a.lineEnd()),i&&of(c,u,n,o,a),a.polygonEnd());b=a,c=f=s=null}};function w(t,n){i(t,n)&&b.point(t,n)}function M(o,a){var u=i(o,a);if(f&&s.push([o,a]),y)l=o,h=a,d=u,y=!1,u&&(b.lineStart(),b.point(o,a));else if(u&&g)b.point(o,a);else{var c=[p=Math.max(gf,Math.min(vf,p)),v=Math.max(gf,Math.min(vf,v))],m=[o=Math.max(gf,Math.min(vf,o)),a=Math.max(gf,Math.min(vf,a))];!function(t,n,e,r,i,o){var a,u=t[0],c=t[1],f=0,s=1,l=n[0]-u,h=n[1]-c;if(a=e-u,l||!(a>0)){if(a/=l,l<0){if(a<f)return;a<s&&(s=a)}else if(l>0){if(a>s)return;a>f&&(f=a)}if(a=i-u,l||!(a<0)){if(a/=l,l<0){if(a>s)return;a>f&&(f=a)}else if(l>0){if(a<f)return;a<s&&(s=a)}if(a=r-c,h||!(a>0)){if(a/=h,h<0){if(a<f)return;a<s&&(s=a)}else if(h>0){if(a>s)return;a>f&&(f=a)}if(a=o-c,h||!(a<0)){if(a/=h,h<0){if(a>s)return;a>f&&(f=a)}else if(h>0){if(a<f)return;a<s&&(s=a)}return f>0&&(t[0]=u+f*l,t[1]=c+f*h),s<1&&(n[0]=u+s*l,n[1]=c+s*h),!0}}}}}(c,m,t,n,e,r)?u&&(b.lineStart(),b.point(o,a),_=!1):(g||(b.lineStart(),b.point(c[0],c[1])),b.point(m[0],m[1]),u||b.lineEnd(),_=!1)}p=o,v=a,g=u}return x}}var _f,bf,mf,xf=Qa(),wf={sphere:Nu,point:Nu,lineStart:function(){wf.point=Nf,wf.lineEnd=Mf},lineEnd:Nu,polygonStart:Nu,polygonEnd:Nu};function Mf(){wf.point=wf.lineEnd=Nu}function Nf(t,n){_f=t*=cu,bf=yu(n*=cu),mf=hu(n),wf.point=Tf}function Tf(t,n){t*=cu;var e=yu(n*=cu),r=hu(n),i=fu(t-_f),o=hu(i),a=r*yu(i),u=mf*e-bf*r*o,c=bf*e+mf*r*o;xf.add(lu(bu(a*a+u*u),c)),_f=t,bf=e,mf=r}function Af(t){return xf.reset(),Cu(t,wf),+xf}var Sf=[null,null],kf={type:"LineString",coordinates:Sf};function Ef(t,n){return Sf[0]=t,Sf[1]=n,Af(kf)}var Cf={Feature:function(t,n){return zf(t.geometry,n)},FeatureCollection:function(t,n){for(var e=t.features,r=-1,i=e.length;++r<i;)if(zf(e[r].geometry,n))return!0;return!1}},Pf={Sphere:function(){return!0},Point:function(t,n){return Rf(t.coordinates,n)},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(Rf(e[r],n))return!0;return!1},LineString:function(t,n){return Df(t.coordinates,n)},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(Df(e[r],n))return!0;return!1},Polygon:function(t,n){return qf(t.coordinates,n)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(qf(e[r],n))return!0;return!1},GeometryCollection:function(t,n){for(var e=t.geometries,r=-1,i=e.length;++r<i;)if(zf(e[r],n))return!0;return!1}};function zf(t,n){return!(!t||!Pf.hasOwnProperty(t.type))&&Pf[t.type](t,n)}function Rf(t,n){return 0===Ef(t,n)}function Df(t,n){for(var e,r,i,o=0,a=t.length;o<a;o++){if(0===(r=Ef(t[o],n)))return!0;if(o>0&&(i=Ef(t[o],t[o-1]))>0&&e<=i&&r<=i&&(e+r-i)*(1-Math.pow((e-r)/i,2))<eu*i)return!0;e=r}return!1}function qf(t,n){return!!ff(t.map(Lf),Uf(n))}function Lf(t){return(t=t.map(Uf)).pop(),t}function Uf(t){return[t[0]*cu,t[1]*cu]}function Of(t,n,e){var r=g(t,n-nu,e).concat(n);return function(t){return r.map(function(n){return[t,n]})}}function Bf(t,n,e){var r=g(t,n-nu,e).concat(n);return function(t){return r.map(function(n){return[n,t]})}}function Ff(){var t,n,e,r,i,o,a,u,c,f,s,l,h=10,d=h,p=90,v=360,y=2.5;function _(){return{type:"MultiLineString",coordinates:b()}}function b(){return g(du(r/p)*p,e,p).map(s).concat(g(du(u/v)*v,a,v).map(l)).concat(g(du(n/h)*h,t,h).filter(function(t){return fu(t%p)>nu}).map(c)).concat(g(du(o/d)*d,i,d).filter(function(t){return fu(t%v)>nu}).map(f))}return _.lines=function(){return b().map(function(t){return{type:"LineString",coordinates:t}})},_.outline=function(){return{type:"Polygon",coordinates:[s(r).concat(l(a).slice(1),s(e).reverse().slice(1),l(u).reverse().slice(1))]}},_.extent=function(t){return arguments.length?_.extentMajor(t).extentMinor(t):_.extentMinor()},_.extentMajor=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],u=+t[0][1],a=+t[1][1],r>e&&(t=r,r=e,e=t),u>a&&(t=u,u=a,a=t),_.precision(y)):[[r,u],[e,a]]},_.extentMinor=function(e){return arguments.length?(n=+e[0][0],t=+e[1][0],o=+e[0][1],i=+e[1][1],n>t&&(e=n,n=t,t=e),o>i&&(e=o,o=i,i=e),_.precision(y)):[[n,o],[t,i]]},_.step=function(t){return arguments.length?_.stepMajor(t).stepMinor(t):_.stepMinor()},_.stepMajor=function(t){return arguments.length?(p=+t[0],v=+t[1],_):[p,v]},_.stepMinor=function(t){return arguments.length?(h=+t[0],d=+t[1],_):[h,d]},_.precision=function(h){return arguments.length?(y=+h,c=Of(o,i,90),f=Bf(n,t,y),s=Of(u,a,90),l=Bf(r,e,y),_):y},_.extentMajor([[-180,-90+nu],[180,90-nu]]).extentMinor([[-180,-80-nu],[180,80+nu]])}function Yf(t){return t}var If,Hf,jf,Xf,Vf=Qa(),Gf=Qa(),$f={point:Nu,lineStart:Nu,lineEnd:Nu,polygonStart:function(){$f.lineStart=Wf,$f.lineEnd=Kf},polygonEnd:function(){$f.lineStart=$f.lineEnd=$f.point=Nu,Vf.add(fu(Gf)),Gf.reset()},result:function(){var t=Vf/2;return Vf.reset(),t}};function Wf(){$f.point=Zf}function Zf(t,n){$f.point=Qf,If=jf=t,Hf=Xf=n}function Qf(t,n){Gf.add(Xf*t-jf*n),jf=t,Xf=n}function Kf(){Qf(If,Hf)}var Jf=1/0,ts=Jf,ns=-Jf,es=ns,rs={point:function(t,n){t<Jf&&(Jf=t);t>ns&&(ns=t);n<ts&&(ts=n);n>es&&(es=n)},lineStart:Nu,lineEnd:Nu,polygonStart:Nu,polygonEnd:Nu,result:function(){var t=[[Jf,ts],[ns,es]];return ns=es=-(ts=Jf=1/0),t}};var is,os,as,us,cs=0,fs=0,ss=0,ls=0,hs=0,ds=0,ps=0,vs=0,gs=0,ys={point:_s,lineStart:bs,lineEnd:ws,polygonStart:function(){ys.lineStart=Ms,ys.lineEnd=Ns},polygonEnd:function(){ys.point=_s,ys.lineStart=bs,ys.lineEnd=ws},result:function(){var t=gs?[ps/gs,vs/gs]:ds?[ls/ds,hs/ds]:ss?[cs/ss,fs/ss]:[NaN,NaN];return cs=fs=ss=ls=hs=ds=ps=vs=gs=0,t}};function _s(t,n){cs+=t,fs+=n,++ss}function bs(){ys.point=ms}function ms(t,n){ys.point=xs,_s(as=t,us=n)}function xs(t,n){var e=t-as,r=n-us,i=bu(e*e+r*r);ls+=i*(as+t)/2,hs+=i*(us+n)/2,ds+=i,_s(as=t,us=n)}function ws(){ys.point=_s}function Ms(){ys.point=Ts}function Ns(){As(is,os)}function Ts(t,n){ys.point=As,_s(is=as=t,os=us=n)}function As(t,n){var e=t-as,r=n-us,i=bu(e*e+r*r);ls+=i*(as+t)/2,hs+=i*(us+n)/2,ds+=i,ps+=(i=us*t-as*n)*(as+t),vs+=i*(us+n),gs+=3*i,_s(as=t,us=n)}function Ss(t){this._context=t}Ss.prototype={_radius:4.5,pointRadius:function(t){return this._radius=t,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._context.moveTo(t,n),this._point=1;break;case 1:this._context.lineTo(t,n);break;default:this._context.moveTo(t+this._radius,n),this._context.arc(t,n,this._radius,0,au)}},result:Nu};var ks,Es,Cs,Ps,zs,Rs=Qa(),Ds={point:Nu,lineStart:function(){Ds.point=qs},lineEnd:function(){ks&&Ls(Es,Cs),Ds.point=Nu},polygonStart:function(){ks=!0},polygonEnd:function(){ks=null},result:function(){var t=+Rs;return Rs.reset(),t}};function qs(t,n){Ds.point=Ls,Es=Ps=t,Cs=zs=n}function Ls(t,n){Ps-=t,zs-=n,Rs.add(bu(Ps*Ps+zs*zs)),Ps=t,zs=n}function Us(){this._string=[]}function Os(t){return"m0,"+t+"a"+t+","+t+" 0 1,1 0,"+-2*t+"a"+t+","+t+" 0 1,1 0,"+2*t+"z"}function Bs(t){return function(n){var e=new Fs;for(var r in t)e[r]=t[r];return e.stream=n,e}}function Fs(){}function Ys(t,n,e){var r=t.clipExtent&&t.clipExtent();return t.scale(150).translate([0,0]),null!=r&&t.clipExtent(null),Cu(e,t.stream(rs)),n(rs.result()),null!=r&&t.clipExtent(r),t}function Is(t,n,e){return Ys(t,function(e){var r=n[1][0]-n[0][0],i=n[1][1]-n[0][1],o=Math.min(r/(e[1][0]-e[0][0]),i/(e[1][1]-e[0][1])),a=+n[0][0]+(r-o*(e[1][0]+e[0][0]))/2,u=+n[0][1]+(i-o*(e[1][1]+e[0][1]))/2;t.scale(150*o).translate([a,u])},e)}function Hs(t,n,e){return Is(t,[[0,0],n],e)}function js(t,n,e){return Ys(t,function(e){var r=+n,i=r/(e[1][0]-e[0][0]),o=(r-i*(e[1][0]+e[0][0]))/2,a=-i*e[0][1];t.scale(150*i).translate([o,a])},e)}function Xs(t,n,e){return Ys(t,function(e){var r=+n,i=r/(e[1][1]-e[0][1]),o=-i*e[0][0],a=(r-i*(e[1][1]+e[0][1]))/2;t.scale(150*i).translate([o,a])},e)}Us.prototype={_radius:4.5,_circle:Os(4.5),pointRadius:function(t){return(t=+t)!==this._radius&&(this._radius=t,this._circle=null),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._string.push("Z"),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._string.push("M",t,",",n),this._point=1;break;case 1:this._string.push("L",t,",",n);break;default:null==this._circle&&(this._circle=Os(this._radius)),this._string.push("M",t,",",n,this._circle)}},result:function(){if(this._string.length){var t=this._string.join("");return this._string=[],t}return null}},Fs.prototype={constructor:Fs,point:function(t,n){this.stream.point(t,n)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var Vs=16,Gs=hu(30*cu);function $s(t,n){return+n?function(t,n){function e(r,i,o,a,u,c,f,s,l,h,d,p,v,g){var y=f-r,_=s-i,b=y*y+_*_;if(b>4*n&&v--){var m=a+h,x=u+d,w=c+p,M=bu(m*m+x*x+w*w),N=wu(w/=M),T=fu(fu(w)-1)<nu||fu(o-l)<nu?(o+l)/2:lu(x,m),A=t(T,N),S=A[0],k=A[1],E=S-r,C=k-i,P=_*E-y*C;(P*P/b>n||fu((y*E+_*C)/b-.5)>.3||a*h+u*d+c*p<Gs)&&(e(r,i,o,a,u,c,S,k,T,m/=M,x/=M,w,v,g),g.point(S,k),e(S,k,T,m,x,w,f,s,l,h,d,p,v,g))}}return function(n){var r,i,o,a,u,c,f,s,l,h,d,p,v={point:g,lineStart:y,lineEnd:b,polygonStart:function(){n.polygonStart(),v.lineStart=m},polygonEnd:function(){n.polygonEnd(),v.lineStart=y}};function g(e,r){e=t(e,r),n.point(e[0],e[1])}function y(){s=NaN,v.point=_,n.lineStart()}function _(r,i){var o=ju([r,i]),a=t(r,i);e(s,l,f,h,d,p,s=a[0],l=a[1],f=r,h=o[0],d=o[1],p=o[2],Vs,n),n.point(s,l)}function b(){v.point=g,n.lineEnd()}function m(){y(),v.point=x,v.lineEnd=w}function x(t,n){_(r=t,n),i=s,o=l,a=h,u=d,c=p,v.point=_}function w(){e(s,l,f,h,d,p,i,o,r,a,u,c,Vs,n),v.lineEnd=b,b()}return v}}(t,n):function(t){return Bs({point:function(n,e){n=t(n,e),this.stream.point(n[0],n[1])}})}(t)}var Ws=Bs({point:function(t,n){this.stream.point(t*cu,n*cu)}});function Zs(t,n,e,r,i,o){var a=hu(o),u=yu(o),c=a*t,f=u*t,s=a/t,l=u/t,h=(u*e-a*n)/t,d=(u*n+a*e)/t;function p(t,o){return[c*(t*=r)-f*(o*=i)+n,e-f*t-c*o]}return p.invert=function(t,n){return[r*(s*t-l*n+h),i*(d-l*t-s*n)]},p}function Qs(t){return Ks(function(){return t})()}function Ks(t){var n,e,r,i,o,a,u,c,f,s,l=150,h=480,d=250,p=0,v=0,g=0,y=0,_=0,b=0,m=1,x=1,w=null,M=df,N=null,T=Yf,A=.5;function S(t){return c(t[0]*cu,t[1]*cu)}function k(t){return(t=c.invert(t[0],t[1]))&&[t[0]*uu,t[1]*uu]}function E(){var t=Zs(l,0,0,m,x,b).apply(null,n(p,v)),r=(b?Zs:function(t,n,e,r,i){function o(o,a){return[n+t*(o*=r),e-t*(a*=i)]}return o.invert=function(o,a){return[(o-n)/t*r,(e-a)/t*i]},o})(l,h-t[0],d-t[1],m,x,b);return e=$c(g,y,_),u=Vc(n,r),c=Vc(e,u),a=$s(u,A),C()}function C(){return f=s=null,S}return S.stream=function(t){return f&&s===t?f:f=Ws(function(t){return Bs({point:function(n,e){var r=t(n,e);return this.stream.point(r[0],r[1])}})}(e)(M(a(T(s=t)))))},S.preclip=function(t){return arguments.length?(M=t,w=void 0,C()):M},S.postclip=function(t){return arguments.length?(T=t,N=r=i=o=null,C()):T},S.clipAngle=function(t){return arguments.length?(M=+t?pf(w=t*cu):(w=null,df),C()):w*uu},S.clipExtent=function(t){return arguments.length?(T=null==t?(N=r=i=o=null,Yf):yf(N=+t[0][0],r=+t[0][1],i=+t[1][0],o=+t[1][1]),C()):null==N?null:[[N,r],[i,o]]},S.scale=function(t){return arguments.length?(l=+t,E()):l},S.translate=function(t){return arguments.length?(h=+t[0],d=+t[1],E()):[h,d]},S.center=function(t){return arguments.length?(p=t[0]%360*cu,v=t[1]%360*cu,E()):[p*uu,v*uu]},S.rotate=function(t){return arguments.length?(g=t[0]%360*cu,y=t[1]%360*cu,_=t.length>2?t[2]%360*cu:0,E()):[g*uu,y*uu,_*uu]},S.angle=function(t){return arguments.length?(b=t%360*cu,E()):b*uu},S.reflectX=function(t){return arguments.length?(m=t?-1:1,E()):m<0},S.reflectY=function(t){return arguments.length?(x=t?-1:1,E()):x<0},S.precision=function(t){return arguments.length?(a=$s(u,A=t*t),C()):bu(A)},S.fitExtent=function(t,n){return Is(S,t,n)},S.fitSize=function(t,n){return Hs(S,t,n)},S.fitWidth=function(t,n){return js(S,t,n)},S.fitHeight=function(t,n){return Xs(S,t,n)},function(){return n=t.apply(this,arguments),S.invert=n.invert&&k,E()}}function Js(t){var n=0,e=ru/3,r=Ks(t),i=r(n,e);return i.parallels=function(t){return arguments.length?r(n=t[0]*cu,e=t[1]*cu):[n*uu,e*uu]},i}function tl(t,n){var e=yu(t),r=(e+yu(n))/2;if(fu(r)<nu)return function(t){var n=hu(t);function e(t,e){return[t*n,yu(e)/n]}return e.invert=function(t,e){return[t/n,wu(e*n)]},e}(t);var i=1+e*(2*r-e),o=bu(i)/r;function a(t,n){var e=bu(i-2*r*yu(n))/r;return[e*yu(t*=r),o-e*hu(t)]}return a.invert=function(t,n){var e=o-n,a=lu(t,fu(e))*_u(e);return e*r<0&&(a-=ru*_u(t)*_u(e)),[a/r,wu((i-(t*t+e*e)*r*r)/(2*r))]},a}function nl(){return Js(tl).scale(155.424).center([0,33.6442])}function el(){return nl().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])}function rl(t){return function(n,e){var r=hu(n),i=hu(e),o=t(r*i);return[o*i*yu(n),o*yu(e)]}}function il(t){return function(n,e){var r=bu(n*n+e*e),i=t(r),o=yu(i),a=hu(i);return[lu(n*o,r*a),wu(r&&e*o/r)]}}var ol=rl(function(t){return bu(2/(1+t))});ol.invert=il(function(t){return 2*wu(t/2)});var al=rl(function(t){return(t=xu(t))&&t/yu(t)});function ul(t,n){return[t,vu(mu((iu+n)/2))]}function cl(t){var n,e,r,i=Qs(t),o=i.center,a=i.scale,u=i.translate,c=i.clipExtent,f=null;function s(){var o=ru*a(),u=i(Kc(i.rotate()).invert([0,0]));return c(null==f?[[u[0]-o,u[1]-o],[u[0]+o,u[1]+o]]:t===ul?[[Math.max(u[0]-o,f),n],[Math.min(u[0]+o,e),r]]:[[f,Math.max(u[1]-o,n)],[e,Math.min(u[1]+o,r)]])}return i.scale=function(t){return arguments.length?(a(t),s()):a()},i.translate=function(t){return arguments.length?(u(t),s()):u()},i.center=function(t){return arguments.length?(o(t),s()):o()},i.clipExtent=function(t){return arguments.length?(null==t?f=n=e=r=null:(f=+t[0][0],n=+t[0][1],e=+t[1][0],r=+t[1][1]),s()):null==f?null:[[f,n],[e,r]]},s()}function fl(t){return mu((iu+t)/2)}function sl(t,n){var e=hu(t),r=t===n?yu(t):vu(e/hu(n))/vu(fl(n)/fl(t)),i=e*gu(fl(t),r)/r;if(!r)return ul;function o(t,n){i>0?n<-iu+nu&&(n=-iu+nu):n>iu-nu&&(n=iu-nu);var e=i/gu(fl(n),r);return[e*yu(r*t),i-e*hu(r*t)]}return o.invert=function(t,n){var e=i-n,o=_u(r)*bu(t*t+e*e),a=lu(t,fu(e))*_u(e);return e*r<0&&(a-=ru*_u(t)*_u(e)),[a/r,2*su(gu(i/o,1/r))-iu]},o}function ll(t,n){return[t,n]}function hl(t,n){var e=hu(t),r=t===n?yu(t):(e-hu(n))/(n-t),i=e/r+t;if(fu(r)<nu)return ll;function o(t,n){var e=i-n,o=r*t;return[e*yu(o),i-e*hu(o)]}return o.invert=function(t,n){var e=i-n,o=lu(t,fu(e))*_u(e);return e*r<0&&(o-=ru*_u(t)*_u(e)),[o/r,i-_u(r)*bu(t*t+e*e)]},o}al.invert=il(function(t){return t}),ul.invert=function(t,n){return[t,2*su(pu(n))-iu]},ll.invert=ll;var dl=1.340264,pl=-.081106,vl=893e-6,gl=.003796,yl=bu(3)/2;function _l(t,n){var e=wu(yl*yu(n)),r=e*e,i=r*r*r;return[t*hu(e)/(yl*(dl+3*pl*r+i*(7*vl+9*gl*r))),e*(dl+pl*r+i*(vl+gl*r))]}function bl(t,n){var e=hu(n),r=hu(t)*e;return[e*yu(t)/r,yu(n)/r]}function ml(t,n){var e=n*n,r=e*e;return[t*(.8707-.131979*e+r*(r*(.003971*e-.001529*r)-.013791)),n*(1.007226+e*(.015085+r*(.028874*e-.044475-.005916*r)))]}function xl(t,n){return[hu(n)*yu(t),yu(n)]}function wl(t,n){var e=hu(n),r=1+hu(t)*e;return[e*yu(t)/r,yu(n)/r]}function Ml(t,n){return[vu(mu((iu+n)/2)),-t]}function Nl(t,n){return t.parent===n.parent?1:2}function Tl(t,n){return t+n.x}function Al(t,n){return Math.max(t,n.y)}function Sl(t){var n=0,e=t.children,r=e&&e.length;if(r)for(;--r>=0;)n+=e[r].value;else n=1;t.value=n}function kl(t,n){var e,r,i,o,a,u=new zl(t),c=+t.value&&(u.value=t.value),f=[u];for(null==n&&(n=El);e=f.pop();)if(c&&(e.value=+e.data.value),(i=n(e.data))&&(a=i.length))for(e.children=new Array(a),o=a-1;o>=0;--o)f.push(r=e.children[o]=new zl(i[o])),r.parent=e,r.depth=e.depth+1;return u.eachBefore(Pl)}function El(t){return t.children}function Cl(t){t.data=t.data.data}function Pl(t){var n=0;do{t.height=n}while((t=t.parent)&&t.height<++n)}function zl(t){this.data=t,this.depth=this.height=0,this.parent=null}_l.invert=function(t,n){for(var e,r=n,i=r*r,o=i*i*i,a=0;a<12&&(o=(i=(r-=e=(r*(dl+pl*i+o*(vl+gl*i))-n)/(dl+3*pl*i+o*(7*vl+9*gl*i)))*r)*i*i,!(fu(e)<eu));++a);return[yl*t*(dl+3*pl*i+o*(7*vl+9*gl*i))/hu(r),wu(yu(r)/yl)]},bl.invert=il(su),ml.invert=function(t,n){var e,r=n,i=25;do{var o=r*r,a=o*o;r-=e=(r*(1.007226+o*(.015085+a*(.028874*o-.044475-.005916*a)))-n)/(1.007226+o*(.045255+a*(.259866*o-.311325-.005916*11*a)))}while(fu(e)>nu&&--i>0);return[t/(.8707+(o=r*r)*(o*(o*o*o*(.003971-.001529*o)-.013791)-.131979)),r]},xl.invert=il(wu),wl.invert=il(function(t){return 2*su(t)}),Ml.invert=function(t,n){return[-n,2*su(pu(t))-iu]},zl.prototype=kl.prototype={constructor:zl,count:function(){return this.eachAfter(Sl)},each:function(t){var n,e,r,i,o=this,a=[o];do{for(n=a.reverse(),a=[];o=n.pop();)if(t(o),e=o.children)for(r=0,i=e.length;r<i;++r)a.push(e[r])}while(a.length);return this},eachAfter:function(t){for(var n,e,r,i=this,o=[i],a=[];i=o.pop();)if(a.push(i),n=i.children)for(e=0,r=n.length;e<r;++e)o.push(n[e]);for(;i=a.pop();)t(i);return this},eachBefore:function(t){for(var n,e,r=this,i=[r];r=i.pop();)if(t(r),n=r.children)for(e=n.length-1;e>=0;--e)i.push(n[e]);return this},sum:function(t){return this.eachAfter(function(n){for(var e=+t(n.data)||0,r=n.children,i=r&&r.length;--i>=0;)e+=r[i].value;n.value=e})},sort:function(t){return this.eachBefore(function(n){n.children&&n.children.sort(t)})},path:function(t){for(var n=this,e=function(t,n){if(t===n)return t;var e=t.ancestors(),r=n.ancestors(),i=null;for(t=e.pop(),n=r.pop();t===n;)i=t,t=e.pop(),n=r.pop();return i}(n,t),r=[n];n!==e;)n=n.parent,r.push(n);for(var i=r.length;t!==e;)r.splice(i,0,t),t=t.parent;return r},ancestors:function(){for(var t=this,n=[t];t=t.parent;)n.push(t);return n},descendants:function(){var t=[];return this.each(function(n){t.push(n)}),t},leaves:function(){var t=[];return this.eachBefore(function(n){n.children||t.push(n)}),t},links:function(){var t=this,n=[];return t.each(function(e){e!==t&&n.push({source:e.parent,target:e})}),n},copy:function(){return kl(this).eachBefore(Cl)}};var Rl=Array.prototype.slice;function Dl(t){for(var n,e,r=0,i=(t=function(t){for(var n,e,r=t.length;r;)e=Math.random()*r--|0,n=t[r],t[r]=t[e],t[e]=n;return t}(Rl.call(t))).length,o=[];r<i;)n=t[r],e&&Ul(e,n)?++r:(e=Bl(o=ql(o,n)),r=0);return e}function ql(t,n){var e,r;if(Ol(n,t))return[n];for(e=0;e<t.length;++e)if(Ll(n,t[e])&&Ol(Fl(t[e],n),t))return[t[e],n];for(e=0;e<t.length-1;++e)for(r=e+1;r<t.length;++r)if(Ll(Fl(t[e],t[r]),n)&&Ll(Fl(t[e],n),t[r])&&Ll(Fl(t[r],n),t[e])&&Ol(Yl(t[e],t[r],n),t))return[t[e],t[r],n];throw new Error}function Ll(t,n){var e=t.r-n.r,r=n.x-t.x,i=n.y-t.y;return e<0||e*e<r*r+i*i}function Ul(t,n){var e=t.r-n.r+1e-6,r=n.x-t.x,i=n.y-t.y;return e>0&&e*e>r*r+i*i}function Ol(t,n){for(var e=0;e<n.length;++e)if(!Ul(t,n[e]))return!1;return!0}function Bl(t){switch(t.length){case 1:return function(t){return{x:t.x,y:t.y,r:t.r}}(t[0]);case 2:return Fl(t[0],t[1]);case 3:return Yl(t[0],t[1],t[2])}}function Fl(t,n){var e=t.x,r=t.y,i=t.r,o=n.x,a=n.y,u=n.r,c=o-e,f=a-r,s=u-i,l=Math.sqrt(c*c+f*f);return{x:(e+o+c/l*s)/2,y:(r+a+f/l*s)/2,r:(l+i+u)/2}}function Yl(t,n,e){var r=t.x,i=t.y,o=t.r,a=n.x,u=n.y,c=n.r,f=e.x,s=e.y,l=e.r,h=r-a,d=r-f,p=i-u,v=i-s,g=c-o,y=l-o,_=r*r+i*i-o*o,b=_-a*a-u*u+c*c,m=_-f*f-s*s+l*l,x=d*p-h*v,w=(p*m-v*b)/(2*x)-r,M=(v*g-p*y)/x,N=(d*b-h*m)/(2*x)-i,T=(h*y-d*g)/x,A=M*M+T*T-1,S=2*(o+w*M+N*T),k=w*w+N*N-o*o,E=-(A?(S+Math.sqrt(S*S-4*A*k))/(2*A):k/S);return{x:r+w+M*E,y:i+N+T*E,r:E}}function Il(t,n,e){var r,i,o,a,u=t.x-n.x,c=t.y-n.y,f=u*u+c*c;f?(i=n.r+e.r,i*=i,a=t.r+e.r,i>(a*=a)?(r=(f+a-i)/(2*f),o=Math.sqrt(Math.max(0,a/f-r*r)),e.x=t.x-r*u-o*c,e.y=t.y-r*c+o*u):(r=(f+i-a)/(2*f),o=Math.sqrt(Math.max(0,i/f-r*r)),e.x=n.x+r*u-o*c,e.y=n.y+r*c+o*u)):(e.x=n.x+e.r,e.y=n.y)}function Hl(t,n){var e=t.r+n.r-1e-6,r=n.x-t.x,i=n.y-t.y;return e>0&&e*e>r*r+i*i}function jl(t){var n=t._,e=t.next._,r=n.r+e.r,i=(n.x*e.r+e.x*n.r)/r,o=(n.y*e.r+e.y*n.r)/r;return i*i+o*o}function Xl(t){this._=t,this.next=null,this.previous=null}function Vl(t){if(!(i=t.length))return 0;var n,e,r,i,o,a,u,c,f,s,l;if((n=t[0]).x=0,n.y=0,!(i>1))return n.r;if(e=t[1],n.x=-e.r,e.x=n.r,e.y=0,!(i>2))return n.r+e.r;Il(e,n,r=t[2]),n=new Xl(n),e=new Xl(e),r=new Xl(r),n.next=r.previous=e,e.next=n.previous=r,r.next=e.previous=n;t:for(u=3;u<i;++u){Il(n._,e._,r=t[u]),r=new Xl(r),c=e.next,f=n.previous,s=e._.r,l=n._.r;do{if(s<=l){if(Hl(c._,r._)){e=c,n.next=e,e.previous=n,--u;continue t}s+=c._.r,c=c.next}else{if(Hl(f._,r._)){(n=f).next=e,e.previous=n,--u;continue t}l+=f._.r,f=f.previous}}while(c!==f.next);for(r.previous=n,r.next=e,n.next=e.previous=e=r,o=jl(n);(r=r.next)!==e;)(a=jl(r))<o&&(n=r,o=a);e=n.next}for(n=[e._],r=e;(r=r.next)!==e;)n.push(r._);for(r=Dl(n),u=0;u<i;++u)(n=t[u]).x-=r.x,n.y-=r.y;return r.r}function Gl(t){return null==t?null:$l(t)}function $l(t){if("function"!=typeof t)throw new Error;return t}function Wl(){return 0}function Zl(t){return function(){return t}}function Ql(t){return Math.sqrt(t.value)}function Kl(t){return function(n){n.children||(n.r=Math.max(0,+t(n)||0))}}function Jl(t,n){return function(e){if(r=e.children){var r,i,o,a=r.length,u=t(e)*n||0;if(u)for(i=0;i<a;++i)r[i].r+=u;if(o=Vl(r),u)for(i=0;i<a;++i)r[i].r-=u;e.r=o+u}}}function th(t){return function(n){var e=n.parent;n.r*=t,e&&(n.x=e.x+t*n.x,n.y=e.y+t*n.y)}}function nh(t){t.x0=Math.round(t.x0),t.y0=Math.round(t.y0),t.x1=Math.round(t.x1),t.y1=Math.round(t.y1)}function eh(t,n,e,r,i){for(var o,a=t.children,u=-1,c=a.length,f=t.value&&(r-n)/t.value;++u<c;)(o=a[u]).y0=e,o.y1=i,o.x0=n,o.x1=n+=o.value*f}var rh="$",ih={depth:-1},oh={};function ah(t){return t.id}function uh(t){return t.parentId}function ch(t,n){return t.parent===n.parent?1:2}function fh(t){var n=t.children;return n?n[0]:t.t}function sh(t){var n=t.children;return n?n[n.length-1]:t.t}function lh(t,n,e){var r=e/(n.i-t.i);n.c-=r,n.s+=e,t.c+=r,n.z+=e,n.m+=e}function hh(t,n,e){return t.a.parent===n.parent?t.a:e}function dh(t,n){this._=t,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=n}function ph(t,n,e,r,i){for(var o,a=t.children,u=-1,c=a.length,f=t.value&&(i-e)/t.value;++u<c;)(o=a[u]).x0=n,o.x1=r,o.y0=e,o.y1=e+=o.value*f}dh.prototype=Object.create(zl.prototype);var vh=(1+Math.sqrt(5))/2;function gh(t,n,e,r,i,o){for(var a,u,c,f,s,l,h,d,p,v,g,y=[],_=n.children,b=0,m=0,x=_.length,w=n.value;b<x;){c=i-e,f=o-r;do{s=_[m++].value}while(!s&&m<x);for(l=h=s,g=s*s*(v=Math.max(f/c,c/f)/(w*t)),p=Math.max(h/g,g/l);m<x;++m){if(s+=u=_[m].value,u<l&&(l=u),u>h&&(h=u),g=s*s*v,(d=Math.max(h/g,g/l))>p){s-=u;break}p=d}y.push(a={value:s,dice:c<f,children:_.slice(b,m)}),a.dice?eh(a,e,r,i,w?r+=f*s/w:o):ph(a,e,r,w?e+=c*s/w:i,o),w-=s,b=m}return y}var yh=function t(n){function e(t,e,r,i,o){gh(n,t,e,r,i,o)}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}(vh);var _h=function t(n){function e(t,e,r,i,o){if((a=t._squarify)&&a.ratio===n)for(var a,u,c,f,s,l=-1,h=a.length,d=t.value;++l<h;){for(c=(u=a[l]).children,f=u.value=0,s=c.length;f<s;++f)u.value+=c[f].value;u.dice?eh(u,e,r,i,r+=(o-r)*u.value/d):ph(u,e,r,e+=(i-e)*u.value/d,o),d-=u.value}else t._squarify=a=gh(n,t,e,r,i,o),a.ratio=n}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}(vh);function bh(t,n,e){return(n[0]-t[0])*(e[1]-t[1])-(n[1]-t[1])*(e[0]-t[0])}function mh(t,n){return t[0]-n[0]||t[1]-n[1]}function xh(t){for(var n=t.length,e=[0,1],r=2,i=2;i<n;++i){for(;r>1&&bh(t[e[r-2]],t[e[r-1]],t[i])<=0;)--r;e[r++]=i}return e.slice(0,r)}function wh(){return Math.random()}var Mh=function t(n){function e(t,e){return t=null==t?0:+t,e=null==e?1:+e,1===arguments.length?(e=t,t=0):e-=t,function(){return n()*e+t}}return e.source=t,e}(wh),Nh=function t(n){function e(t,e){var r,i;return t=null==t?0:+t,e=null==e?1:+e,function(){var o;if(null!=r)o=r,r=null;else do{r=2*n()-1,o=2*n()-1,i=r*r+o*o}while(!i||i>1);return t+e*o*Math.sqrt(-2*Math.log(i)/i)}}return e.source=t,e}(wh),Th=function t(n){function e(){var t=Nh.source(n).apply(this,arguments);return function(){return Math.exp(t())}}return e.source=t,e}(wh),Ah=function t(n){function e(t){return function(){for(var e=0,r=0;r<t;++r)e+=n();return e}}return e.source=t,e}(wh),Sh=function t(n){function e(t){var e=Ah.source(n)(t);return function(){return e()/t}}return e.source=t,e}(wh),kh=function t(n){function e(t){return function(){return-Math.log(1-n())/t}}return e.source=t,e}(wh);function Eh(t,n){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(n).domain(t)}return this}function Ch(t,n){switch(arguments.length){case 0:break;case 1:this.interpolator(t);break;default:this.interpolator(n).domain(t)}return this}var Ph=Array.prototype,zh=Ph.map,Rh=Ph.slice,Dh={name:"implicit"};function qh(){var t=co(),n=[],e=[],r=Dh;function i(i){var o=i+"",a=t.get(o);if(!a){if(r!==Dh)return r;t.set(o,a=n.push(i))}return e[(a-1)%e.length]}return i.domain=function(e){if(!arguments.length)return n.slice();n=[],t=co();for(var r,o,a=-1,u=e.length;++a<u;)t.has(o=(r=e[a])+"")||t.set(o,n.push(r));return i},i.range=function(t){return arguments.length?(e=Rh.call(t),i):e.slice()},i.unknown=function(t){return arguments.length?(r=t,i):r},i.copy=function(){return qh(n,e).unknown(r)},Eh.apply(i,arguments),i}function Lh(){var t,n,e=qh().unknown(void 0),r=e.domain,i=e.range,o=[0,1],a=!1,u=0,c=0,f=.5;function s(){var e=r().length,s=o[1]<o[0],l=o[s-0],h=o[1-s];t=(h-l)/Math.max(1,e-u+2*c),a&&(t=Math.floor(t)),l+=(h-l-t*(e-u))*f,n=t*(1-u),a&&(l=Math.round(l),n=Math.round(n));var d=g(e).map(function(n){return l+t*n});return i(s?d.reverse():d)}return delete e.unknown,e.domain=function(t){return arguments.length?(r(t),s()):r()},e.range=function(t){return arguments.length?(o=[+t[0],+t[1]],s()):o.slice()},e.rangeRound=function(t){return o=[+t[0],+t[1]],a=!0,s()},e.bandwidth=function(){return n},e.step=function(){return t},e.round=function(t){return arguments.length?(a=!!t,s()):a},e.padding=function(t){return arguments.length?(u=Math.min(1,c=+t),s()):u},e.paddingInner=function(t){return arguments.length?(u=Math.min(1,t),s()):u},e.paddingOuter=function(t){return arguments.length?(c=+t,s()):c},e.align=function(t){return arguments.length?(f=Math.max(0,Math.min(1,t)),s()):f},e.copy=function(){return Lh(r(),o).round(a).paddingInner(u).paddingOuter(c).align(f)},Eh.apply(s(),arguments)}function Uh(t){return+t}var Oh=[0,1];function Bh(t){return t}function Fh(t,n){return(n-=t=+t)?function(e){return(e-t)/n}:function(t){return function(){return t}}(isNaN(n)?NaN:.5)}function Yh(t){var n,e=t[0],r=t[t.length-1];return e>r&&(n=e,e=r,r=n),function(t){return Math.max(e,Math.min(r,t))}}function Ih(t,n,e){var r=t[0],i=t[1],o=n[0],a=n[1];return i<r?(r=Fh(i,r),o=e(a,o)):(r=Fh(r,i),o=e(o,a)),function(t){return o(r(t))}}function Hh(t,n,e){var r=Math.min(t.length,n.length)-1,o=new Array(r),a=new Array(r),u=-1;for(t[r]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++u<r;)o[u]=Fh(t[u],t[u+1]),a[u]=e(n[u],n[u+1]);return function(n){var e=i(t,n,1,r)-1;return a[e](o[e](n))}}function jh(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function Xh(){var t,n,e,r,i,o,a=Oh,u=Oh,c=Te,f=Bh;function s(){return r=Math.min(a.length,u.length)>2?Hh:Ih,i=o=null,l}function l(n){return isNaN(n=+n)?e:(i||(i=r(a.map(t),u,c)))(t(f(n)))}return l.invert=function(e){return f(n((o||(o=r(u,a.map(t),me)))(e)))},l.domain=function(t){return arguments.length?(a=zh.call(t,Uh),f===Bh||(f=Yh(a)),s()):a.slice()},l.range=function(t){return arguments.length?(u=Rh.call(t),s()):u.slice()},l.rangeRound=function(t){return u=Rh.call(t),c=Ae,s()},l.clamp=function(t){return arguments.length?(f=t?Yh(a):Bh,l):f!==Bh},l.interpolate=function(t){return arguments.length?(c=t,s()):c},l.unknown=function(t){return arguments.length?(e=t,l):e},function(e,r){return t=e,n=r,s()}}function Vh(t,n){return Xh()(t,n)}function Gh(n,e,r,i){var o,a=w(n,e,r);switch((i=Oa(null==i?",f":i)).type){case"s":var u=Math.max(Math.abs(n),Math.abs(e));return null!=i.precision||isNaN(o=Wa(a,u))||(i.precision=o),t.formatPrefix(i,u);case"":case"e":case"g":case"p":case"r":null!=i.precision||isNaN(o=Za(a,Math.max(Math.abs(n),Math.abs(e))))||(i.precision=o-("e"===i.type));break;case"f":case"%":null!=i.precision||isNaN(o=$a(a))||(i.precision=o-2*("%"===i.type))}return t.format(i)}function $h(t){var n=t.domain;return t.ticks=function(t){var e=n();return m(e[0],e[e.length-1],null==t?10:t)},t.tickFormat=function(t,e){var r=n();return Gh(r[0],r[r.length-1],null==t?10:t,e)},t.nice=function(e){null==e&&(e=10);var r,i=n(),o=0,a=i.length-1,u=i[o],c=i[a];return c<u&&(r=u,u=c,c=r,r=o,o=a,a=r),(r=x(u,c,e))>0?r=x(u=Math.floor(u/r)*r,c=Math.ceil(c/r)*r,e):r<0&&(r=x(u=Math.ceil(u*r)/r,c=Math.floor(c*r)/r,e)),r>0?(i[o]=Math.floor(u/r)*r,i[a]=Math.ceil(c/r)*r,n(i)):r<0&&(i[o]=Math.ceil(u*r)/r,i[a]=Math.floor(c*r)/r,n(i)),t},t}function Wh(t,n){var e,r=0,i=(t=t.slice()).length-1,o=t[r],a=t[i];return a<o&&(e=r,r=i,i=e,e=o,o=a,a=e),t[r]=n.floor(o),t[i]=n.ceil(a),t}function Zh(t){return Math.log(t)}function Qh(t){return Math.exp(t)}function Kh(t){return-Math.log(-t)}function Jh(t){return-Math.exp(-t)}function td(t){return isFinite(t)?+("1e"+t):t<0?0:t}function nd(t){return function(n){return-t(-n)}}function ed(n){var e,r,i=n(Zh,Qh),o=i.domain,a=10;function u(){return e=function(t){return t===Math.E?Math.log:10===t&&Math.log10||2===t&&Math.log2||(t=Math.log(t),function(n){return Math.log(n)/t})}(a),r=function(t){return 10===t?td:t===Math.E?Math.exp:function(n){return Math.pow(t,n)}}(a),o()[0]<0?(e=nd(e),r=nd(r),n(Kh,Jh)):n(Zh,Qh),i}return i.base=function(t){return arguments.length?(a=+t,u()):a},i.domain=function(t){return arguments.length?(o(t),u()):o()},i.ticks=function(t){var n,i=o(),u=i[0],c=i[i.length-1];(n=c<u)&&(h=u,u=c,c=h);var f,s,l,h=e(u),d=e(c),p=null==t?10:+t,v=[];if(!(a%1)&&d-h<p){if(h=Math.round(h)-1,d=Math.round(d)+1,u>0){for(;h<d;++h)for(s=1,f=r(h);s<a;++s)if(!((l=f*s)<u)){if(l>c)break;v.push(l)}}else for(;h<d;++h)for(s=a-1,f=r(h);s>=1;--s)if(!((l=f*s)<u)){if(l>c)break;v.push(l)}}else v=m(h,d,Math.min(d-h,p)).map(r);return n?v.reverse():v},i.tickFormat=function(n,o){if(null==o&&(o=10===a?".0e":","),"function"!=typeof o&&(o=t.format(o)),n===1/0)return o;null==n&&(n=10);var u=Math.max(1,a*n/i.ticks().length);return function(t){var n=t/r(Math.round(e(t)));return n*a<a-.5&&(n*=a),n<=u?o(t):""}},i.nice=function(){return o(Wh(o(),{floor:function(t){return r(Math.floor(e(t)))},ceil:function(t){return r(Math.ceil(e(t)))}}))},i}function rd(t){return function(n){return Math.sign(n)*Math.log1p(Math.abs(n/t))}}function id(t){return function(n){return Math.sign(n)*Math.expm1(Math.abs(n))*t}}function od(t){var n=1,e=t(rd(n),id(n));return e.constant=function(e){return arguments.length?t(rd(n=+e),id(n)):n},$h(e)}function ad(t){return function(n){return n<0?-Math.pow(-n,t):Math.pow(n,t)}}function ud(t){return t<0?-Math.sqrt(-t):Math.sqrt(t)}function cd(t){return t<0?-t*t:t*t}function fd(t){var n=t(Bh,Bh),e=1;function r(){return 1===e?t(Bh,Bh):.5===e?t(ud,cd):t(ad(e),ad(1/e))}return n.exponent=function(t){return arguments.length?(e=+t,r()):e},$h(n)}function sd(){var t=fd(Xh());return t.copy=function(){return jh(t,sd()).exponent(t.exponent())},Eh.apply(t,arguments),t}var ld=new Date,hd=new Date;function dd(t,n,e,r){function i(n){return t(n=0===arguments.length?new Date:new Date(+n)),n}return i.floor=function(n){return t(n=new Date(+n)),n},i.ceil=function(e){return t(e=new Date(e-1)),n(e,1),t(e),e},i.round=function(t){var n=i(t),e=i.ceil(t);return t-n<e-t?n:e},i.offset=function(t,e){return n(t=new Date(+t),null==e?1:Math.floor(e)),t},i.range=function(e,r,o){var a,u=[];if(e=i.ceil(e),o=null==o?1:Math.floor(o),!(e<r&&o>0))return u;do{u.push(a=new Date(+e)),n(e,o),t(e)}while(a<e&&e<r);return u},i.filter=function(e){return dd(function(n){if(n>=n)for(;t(n),!e(n);)n.setTime(n-1)},function(t,r){if(t>=t)if(r<0)for(;++r<=0;)for(;n(t,-1),!e(t););else for(;--r>=0;)for(;n(t,1),!e(t););})},e&&(i.count=function(n,r){return ld.setTime(+n),hd.setTime(+r),t(ld),t(hd),Math.floor(e(ld,hd))},i.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?i.filter(r?function(n){return r(n)%t==0}:function(n){return i.count(0,n)%t==0}):i:null}),i}var pd=dd(function(){},function(t,n){t.setTime(+t+n)},function(t,n){return n-t});pd.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?dd(function(n){n.setTime(Math.floor(n/t)*t)},function(n,e){n.setTime(+n+e*t)},function(n,e){return(e-n)/t}):pd:null};var vd=pd.range,gd=6e4,yd=6048e5,_d=dd(function(t){t.setTime(t-t.getMilliseconds())},function(t,n){t.setTime(+t+1e3*n)},function(t,n){return(n-t)/1e3},function(t){return t.getUTCSeconds()}),bd=_d.range,md=dd(function(t){t.setTime(t-t.getMilliseconds()-1e3*t.getSeconds())},function(t,n){t.setTime(+t+n*gd)},function(t,n){return(n-t)/gd},function(t){return t.getMinutes()}),xd=md.range,wd=dd(function(t){t.setTime(t-t.getMilliseconds()-1e3*t.getSeconds()-t.getMinutes()*gd)},function(t,n){t.setTime(+t+36e5*n)},function(t,n){return(n-t)/36e5},function(t){return t.getHours()}),Md=wd.range,Nd=dd(function(t){t.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+n)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*gd)/864e5},function(t){return t.getDate()-1}),Td=Nd.range;function Ad(t){return dd(function(n){n.setDate(n.getDate()-(n.getDay()+7-t)%7),n.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+7*n)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*gd)/yd})}var Sd=Ad(0),kd=Ad(1),Ed=Ad(2),Cd=Ad(3),Pd=Ad(4),zd=Ad(5),Rd=Ad(6),Dd=Sd.range,qd=kd.range,Ld=Ed.range,Ud=Cd.range,Od=Pd.range,Bd=zd.range,Fd=Rd.range,Yd=dd(function(t){t.setDate(1),t.setHours(0,0,0,0)},function(t,n){t.setMonth(t.getMonth()+n)},function(t,n){return n.getMonth()-t.getMonth()+12*(n.getFullYear()-t.getFullYear())},function(t){return t.getMonth()}),Id=Yd.range,Hd=dd(function(t){t.setMonth(0,1),t.setHours(0,0,0,0)},function(t,n){t.setFullYear(t.getFullYear()+n)},function(t,n){return n.getFullYear()-t.getFullYear()},function(t){return t.getFullYear()});Hd.every=function(t){return isFinite(t=Math.floor(t))&&t>0?dd(function(n){n.setFullYear(Math.floor(n.getFullYear()/t)*t),n.setMonth(0,1),n.setHours(0,0,0,0)},function(n,e){n.setFullYear(n.getFullYear()+e*t)}):null};var jd=Hd.range,Xd=dd(function(t){t.setUTCSeconds(0,0)},function(t,n){t.setTime(+t+n*gd)},function(t,n){return(n-t)/gd},function(t){return t.getUTCMinutes()}),Vd=Xd.range,Gd=dd(function(t){t.setUTCMinutes(0,0,0)},function(t,n){t.setTime(+t+36e5*n)},function(t,n){return(n-t)/36e5},function(t){return t.getUTCHours()}),$d=Gd.range,Wd=dd(function(t){t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+n)},function(t,n){return(n-t)/864e5},function(t){return t.getUTCDate()-1}),Zd=Wd.range;function Qd(t){return dd(function(n){n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-t)%7),n.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+7*n)},function(t,n){return(n-t)/yd})}var Kd=Qd(0),Jd=Qd(1),tp=Qd(2),np=Qd(3),ep=Qd(4),rp=Qd(5),ip=Qd(6),op=Kd.range,ap=Jd.range,up=tp.range,cp=np.range,fp=ep.range,sp=rp.range,lp=ip.range,hp=dd(function(t){t.setUTCDate(1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCMonth(t.getUTCMonth()+n)},function(t,n){return n.getUTCMonth()-t.getUTCMonth()+12*(n.getUTCFullYear()-t.getUTCFullYear())},function(t){return t.getUTCMonth()}),dp=hp.range,pp=dd(function(t){t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n)},function(t,n){return n.getUTCFullYear()-t.getUTCFullYear()},function(t){return t.getUTCFullYear()});pp.every=function(t){return isFinite(t=Math.floor(t))&&t>0?dd(function(n){n.setUTCFullYear(Math.floor(n.getUTCFullYear()/t)*t),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)},function(n,e){n.setUTCFullYear(n.getUTCFullYear()+e*t)}):null};var vp=pp.range;function gp(t){if(0<=t.y&&t.y<100){var n=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);return n.setFullYear(t.y),n}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function yp(t){if(0<=t.y&&t.y<100){var n=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L));return n.setUTCFullYear(t.y),n}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function _p(t,n,e){return{y:t,m:n,d:e,H:0,M:0,S:0,L:0}}function bp(t){var n=t.dateTime,e=t.date,r=t.time,i=t.periods,o=t.days,a=t.shortDays,u=t.months,c=t.shortMonths,f=Sp(i),s=kp(i),l=Sp(o),h=kp(o),d=Sp(a),p=kp(a),v=Sp(u),g=kp(u),y=Sp(c),_=kp(c),b={a:function(t){return a[t.getDay()]},A:function(t){return o[t.getDay()]},b:function(t){return c[t.getMonth()]},B:function(t){return u[t.getMonth()]},c:null,d:Wp,e:Wp,f:tv,H:Zp,I:Qp,j:Kp,L:Jp,m:nv,M:ev,p:function(t){return i[+(t.getHours()>=12)]},q:function(t){return 1+~~(t.getMonth()/3)},Q:Cv,s:Pv,S:rv,u:iv,U:ov,V:av,w:uv,W:cv,x:null,X:null,y:fv,Y:sv,Z:lv,"%":Ev},m={a:function(t){return a[t.getUTCDay()]},A:function(t){return o[t.getUTCDay()]},b:function(t){return c[t.getUTCMonth()]},B:function(t){return u[t.getUTCMonth()]},c:null,d:hv,e:hv,f:yv,H:dv,I:pv,j:vv,L:gv,m:_v,M:bv,p:function(t){return i[+(t.getUTCHours()>=12)]},q:function(t){return 1+~~(t.getUTCMonth()/3)},Q:Cv,s:Pv,S:mv,u:xv,U:wv,V:Mv,w:Nv,W:Tv,x:null,X:null,y:Av,Y:Sv,Z:kv,"%":Ev},x={a:function(t,n,e){var r=d.exec(n.slice(e));return r?(t.w=p[r[0].toLowerCase()],e+r[0].length):-1},A:function(t,n,e){var r=l.exec(n.slice(e));return r?(t.w=h[r[0].toLowerCase()],e+r[0].length):-1},b:function(t,n,e){var r=y.exec(n.slice(e));return r?(t.m=_[r[0].toLowerCase()],e+r[0].length):-1},B:function(t,n,e){var r=v.exec(n.slice(e));return r?(t.m=g[r[0].toLowerCase()],e+r[0].length):-1},c:function(t,e,r){return N(t,n,e,r)},d:Bp,e:Bp,f:Xp,H:Yp,I:Yp,j:Fp,L:jp,m:Op,M:Ip,p:function(t,n,e){var r=f.exec(n.slice(e));return r?(t.p=s[r[0].toLowerCase()],e+r[0].length):-1},q:Up,Q:Gp,s:$p,S:Hp,u:Cp,U:Pp,V:zp,w:Ep,W:Rp,x:function(t,n,r){return N(t,e,n,r)},X:function(t,n,e){return N(t,r,n,e)},y:qp,Y:Dp,Z:Lp,"%":Vp};function w(t,n){return function(e){var r,i,o,a=[],u=-1,c=0,f=t.length;for(e instanceof Date||(e=new Date(+e));++u<f;)37===t.charCodeAt(u)&&(a.push(t.slice(c,u)),null!=(i=xp[r=t.charAt(++u)])?r=t.charAt(++u):i="e"===r?" ":"0",(o=n[r])&&(r=o(e,i)),a.push(r),c=u+1);return a.push(t.slice(c,u)),a.join("")}}function M(t,n){return function(e){var r,i,o=_p(1900,void 0,1);if(N(o,t,e+="",0)!=e.length)return null;if("Q"in o)return new Date(o.Q);if("s"in o)return new Date(1e3*o.s+("L"in o?o.L:0));if(!n||"Z"in o||(o.Z=0),"p"in o&&(o.H=o.H%12+12*o.p),void 0===o.m&&(o.m="q"in o?o.q:0),"V"in o){if(o.V<1||o.V>53)return null;"w"in o||(o.w=1),"Z"in o?(i=(r=yp(_p(o.y,0,1))).getUTCDay(),r=i>4||0===i?Jd.ceil(r):Jd(r),r=Wd.offset(r,7*(o.V-1)),o.y=r.getUTCFullYear(),o.m=r.getUTCMonth(),o.d=r.getUTCDate()+(o.w+6)%7):(i=(r=gp(_p(o.y,0,1))).getDay(),r=i>4||0===i?kd.ceil(r):kd(r),r=Nd.offset(r,7*(o.V-1)),o.y=r.getFullYear(),o.m=r.getMonth(),o.d=r.getDate()+(o.w+6)%7)}else("W"in o||"U"in o)&&("w"in o||(o.w="u"in o?o.u%7:"W"in o?1:0),i="Z"in o?yp(_p(o.y,0,1)).getUTCDay():gp(_p(o.y,0,1)).getDay(),o.m=0,o.d="W"in o?(o.w+6)%7+7*o.W-(i+5)%7:o.w+7*o.U-(i+6)%7);return"Z"in o?(o.H+=o.Z/100|0,o.M+=o.Z%100,yp(o)):gp(o)}}function N(t,n,e,r){for(var i,o,a=0,u=n.length,c=e.length;a<u;){if(r>=c)return-1;if(37===(i=n.charCodeAt(a++))){if(i=n.charAt(a++),!(o=x[i in xp?n.charAt(a++):i])||(r=o(t,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}return b.x=w(e,b),b.X=w(r,b),b.c=w(n,b),m.x=w(e,m),m.X=w(r,m),m.c=w(n,m),{format:function(t){var n=w(t+="",b);return n.toString=function(){return t},n},parse:function(t){var n=M(t+="",!1);return n.toString=function(){return t},n},utcFormat:function(t){var n=w(t+="",m);return n.toString=function(){return t},n},utcParse:function(t){var n=M(t+="",!0);return n.toString=function(){return t},n}}}var mp,xp={"-":"",_:" ",0:"0"},wp=/^\s*\d+/,Mp=/^%/,Np=/[\\^$*+?|[\]().{}]/g;function Tp(t,n,e){var r=t<0?"-":"",i=(r?-t:t)+"",o=i.length;return r+(o<e?new Array(e-o+1).join(n)+i:i)}function Ap(t){return t.replace(Np,"\\$&")}function Sp(t){return new RegExp("^(?:"+t.map(Ap).join("|")+")","i")}function kp(t){for(var n={},e=-1,r=t.length;++e<r;)n[t[e].toLowerCase()]=e;return n}function Ep(t,n,e){var r=wp.exec(n.slice(e,e+1));return r?(t.w=+r[0],e+r[0].length):-1}function Cp(t,n,e){var r=wp.exec(n.slice(e,e+1));return r?(t.u=+r[0],e+r[0].length):-1}function Pp(t,n,e){var r=wp.exec(n.slice(e,e+2));return r?(t.U=+r[0],e+r[0].length):-1}function zp(t,n,e){var r=wp.exec(n.slice(e,e+2));return r?(t.V=+r[0],e+r[0].length):-1}function Rp(t,n,e){var r=wp.exec(n.slice(e,e+2));return r?(t.W=+r[0],e+r[0].length):-1}function Dp(t,n,e){var r=wp.exec(n.slice(e,e+4));return r?(t.y=+r[0],e+r[0].length):-1}function qp(t,n,e){var r=wp.exec(n.slice(e,e+2));return r?(t.y=+r[0]+(+r[0]>68?1900:2e3),e+r[0].length):-1}function Lp(t,n,e){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e,e+6));return r?(t.Z=r[1]?0:-(r[2]+(r[3]||"00")),e+r[0].length):-1}function Up(t,n,e){var r=wp.exec(n.slice(e,e+1));return r?(t.q=3*r[0]-3,e+r[0].length):-1}function Op(t,n,e){var r=wp.exec(n.slice(e,e+2));return r?(t.m=r[0]-1,e+r[0].length):-1}function Bp(t,n,e){var r=wp.exec(n.slice(e,e+2));return r?(t.d=+r[0],e+r[0].length):-1}function Fp(t,n,e){var r=wp.exec(n.slice(e,e+3));return r?(t.m=0,t.d=+r[0],e+r[0].length):-1}function Yp(t,n,e){var r=wp.exec(n.slice(e,e+2));return r?(t.H=+r[0],e+r[0].length):-1}function Ip(t,n,e){var r=wp.exec(n.slice(e,e+2));return r?(t.M=+r[0],e+r[0].length):-1}function Hp(t,n,e){var r=wp.exec(n.slice(e,e+2));return r?(t.S=+r[0],e+r[0].length):-1}function jp(t,n,e){var r=wp.exec(n.slice(e,e+3));return r?(t.L=+r[0],e+r[0].length):-1}function Xp(t,n,e){var r=wp.exec(n.slice(e,e+6));return r?(t.L=Math.floor(r[0]/1e3),e+r[0].length):-1}function Vp(t,n,e){var r=Mp.exec(n.slice(e,e+1));return r?e+r[0].length:-1}function Gp(t,n,e){var r=wp.exec(n.slice(e));return r?(t.Q=+r[0],e+r[0].length):-1}function $p(t,n,e){var r=wp.exec(n.slice(e));return r?(t.s=+r[0],e+r[0].length):-1}function Wp(t,n){return Tp(t.getDate(),n,2)}function Zp(t,n){return Tp(t.getHours(),n,2)}function Qp(t,n){return Tp(t.getHours()%12||12,n,2)}function Kp(t,n){return Tp(1+Nd.count(Hd(t),t),n,3)}function Jp(t,n){return Tp(t.getMilliseconds(),n,3)}function tv(t,n){return Jp(t,n)+"000"}function nv(t,n){return Tp(t.getMonth()+1,n,2)}function ev(t,n){return Tp(t.getMinutes(),n,2)}function rv(t,n){return Tp(t.getSeconds(),n,2)}function iv(t){var n=t.getDay();return 0===n?7:n}function ov(t,n){return Tp(Sd.count(Hd(t)-1,t),n,2)}function av(t,n){var e=t.getDay();return t=e>=4||0===e?Pd(t):Pd.ceil(t),Tp(Pd.count(Hd(t),t)+(4===Hd(t).getDay()),n,2)}function uv(t){return t.getDay()}function cv(t,n){return Tp(kd.count(Hd(t)-1,t),n,2)}function fv(t,n){return Tp(t.getFullYear()%100,n,2)}function sv(t,n){return Tp(t.getFullYear()%1e4,n,4)}function lv(t){var n=t.getTimezoneOffset();return(n>0?"-":(n*=-1,"+"))+Tp(n/60|0,"0",2)+Tp(n%60,"0",2)}function hv(t,n){return Tp(t.getUTCDate(),n,2)}function dv(t,n){return Tp(t.getUTCHours(),n,2)}function pv(t,n){return Tp(t.getUTCHours()%12||12,n,2)}function vv(t,n){return Tp(1+Wd.count(pp(t),t),n,3)}function gv(t,n){return Tp(t.getUTCMilliseconds(),n,3)}function yv(t,n){return gv(t,n)+"000"}function _v(t,n){return Tp(t.getUTCMonth()+1,n,2)}function bv(t,n){return Tp(t.getUTCMinutes(),n,2)}function mv(t,n){return Tp(t.getUTCSeconds(),n,2)}function xv(t){var n=t.getUTCDay();return 0===n?7:n}function wv(t,n){return Tp(Kd.count(pp(t)-1,t),n,2)}function Mv(t,n){var e=t.getUTCDay();return t=e>=4||0===e?ep(t):ep.ceil(t),Tp(ep.count(pp(t),t)+(4===pp(t).getUTCDay()),n,2)}function Nv(t){return t.getUTCDay()}function Tv(t,n){return Tp(Jd.count(pp(t)-1,t),n,2)}function Av(t,n){return Tp(t.getUTCFullYear()%100,n,2)}function Sv(t,n){return Tp(t.getUTCFullYear()%1e4,n,4)}function kv(){return"+0000"}function Ev(){return"%"}function Cv(t){return+t}function Pv(t){return Math.floor(+t/1e3)}function zv(n){return mp=bp(n),t.timeFormat=mp.format,t.timeParse=mp.parse,t.utcFormat=mp.utcFormat,t.utcParse=mp.utcParse,mp}zv({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});var Rv=Date.prototype.toISOString?function(t){return t.toISOString()}:t.utcFormat("%Y-%m-%dT%H:%M:%S.%LZ");var Dv=+new Date("2000-01-01T00:00:00.000Z")?function(t){var n=new Date(t);return isNaN(n)?null:n}:t.utcParse("%Y-%m-%dT%H:%M:%S.%LZ"),qv=1e3,Lv=60*qv,Uv=60*Lv,Ov=24*Uv,Bv=7*Ov,Fv=30*Ov,Yv=365*Ov;function Iv(t){return new Date(t)}function Hv(t){return t instanceof Date?+t:+new Date(+t)}function jv(t,n,r,i,o,a,u,c,f){var s=Vh(Bh,Bh),l=s.invert,h=s.domain,d=f(".%L"),p=f(":%S"),v=f("%I:%M"),g=f("%I %p"),y=f("%a %d"),_=f("%b %d"),b=f("%B"),m=f("%Y"),x=[[u,1,qv],[u,5,5*qv],[u,15,15*qv],[u,30,30*qv],[a,1,Lv],[a,5,5*Lv],[a,15,15*Lv],[a,30,30*Lv],[o,1,Uv],[o,3,3*Uv],[o,6,6*Uv],[o,12,12*Uv],[i,1,Ov],[i,2,2*Ov],[r,1,Bv],[n,1,Fv],[n,3,3*Fv],[t,1,Yv]];function M(e){return(u(e)<e?d:a(e)<e?p:o(e)<e?v:i(e)<e?g:n(e)<e?r(e)<e?y:_:t(e)<e?b:m)(e)}function N(n,r,i,o){if(null==n&&(n=10),"number"==typeof n){var a=Math.abs(i-r)/n,u=e(function(t){return t[2]}).right(x,a);u===x.length?(o=w(r/Yv,i/Yv,n),n=t):u?(o=(u=x[a/x[u-1][2]<x[u][2]/a?u-1:u])[1],n=u[0]):(o=Math.max(w(r,i,n),1),n=c)}return null==o?n:n.every(o)}return s.invert=function(t){return new Date(l(t))},s.domain=function(t){return arguments.length?h(zh.call(t,Hv)):h().map(Iv)},s.ticks=function(t,n){var e,r=h(),i=r[0],o=r[r.length-1],a=o<i;return a&&(e=i,i=o,o=e),e=(e=N(t,i,o,n))?e.range(i,o+1):[],a?e.reverse():e},s.tickFormat=function(t,n){return null==n?M:f(n)},s.nice=function(t,n){var e=h();return(t=N(t,e[0],e[e.length-1],n))?h(Wh(e,t)):s},s.copy=function(){return jh(s,jv(t,n,r,i,o,a,u,c,f))},s}function Xv(){var t,n,e,r,i,o=0,a=1,u=Bh,c=!1;function f(n){return isNaN(n=+n)?i:u(0===e?.5:(n=(r(n)-t)*e,c?Math.max(0,Math.min(1,n)):n))}return f.domain=function(i){return arguments.length?(t=r(o=+i[0]),n=r(a=+i[1]),e=t===n?0:1/(n-t),f):[o,a]},f.clamp=function(t){return arguments.length?(c=!!t,f):c},f.interpolator=function(t){return arguments.length?(u=t,f):u},f.unknown=function(t){return arguments.length?(i=t,f):i},function(i){return r=i,t=i(o),n=i(a),e=t===n?0:1/(n-t),f}}function Vv(t,n){return n.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown())}function Gv(){var t=fd(Xv());return t.copy=function(){return Vv(t,Gv()).exponent(t.exponent())},Ch.apply(t,arguments)}function $v(){var t,n,e,r,i,o,a,u=0,c=.5,f=1,s=Bh,l=!1;function h(t){return isNaN(t=+t)?a:(t=.5+((t=+o(t))-n)*(t<n?r:i),s(l?Math.max(0,Math.min(1,t)):t))}return h.domain=function(a){return arguments.length?(t=o(u=+a[0]),n=o(c=+a[1]),e=o(f=+a[2]),r=t===n?0:.5/(n-t),i=n===e?0:.5/(e-n),h):[u,c,f]},h.clamp=function(t){return arguments.length?(l=!!t,h):l},h.interpolator=function(t){return arguments.length?(s=t,h):s},h.unknown=function(t){return arguments.length?(a=t,h):a},function(a){return o=a,t=a(u),n=a(c),e=a(f),r=t===n?0:.5/(n-t),i=n===e?0:.5/(e-n),h}}function Wv(){var t=fd($v());return t.copy=function(){return Vv(t,Wv()).exponent(t.exponent())},Ch.apply(t,arguments)}function Zv(t){for(var n=t.length/6|0,e=new Array(n),r=0;r<n;)e[r]="#"+t.slice(6*r,6*++r);return e}var Qv=Zv("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),Kv=Zv("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"),Jv=Zv("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"),tg=Zv("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"),ng=Zv("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"),eg=Zv("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"),rg=Zv("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"),ig=Zv("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),og=Zv("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"),ag=Zv("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");function ug(t){return pe(t[t.length-1])}var cg=new Array(3).concat("d8b365f5f5f55ab4ac","a6611adfc27d80cdc1018571","a6611adfc27df5f5f580cdc1018571","8c510ad8b365f6e8c3c7eae55ab4ac01665e","8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e","8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e","8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e","5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30","5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(Zv),fg=ug(cg),sg=new Array(3).concat("af8dc3f7f7f77fbf7b","7b3294c2a5cfa6dba0008837","7b3294c2a5cff7f7f7a6dba0008837","762a83af8dc3e7d4e8d9f0d37fbf7b1b7837","762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837","762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837","762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837","40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b","40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(Zv),lg=ug(sg),hg=new Array(3).concat("e9a3c9f7f7f7a1d76a","d01c8bf1b6dab8e1864dac26","d01c8bf1b6daf7f7f7b8e1864dac26","c51b7de9a3c9fde0efe6f5d0a1d76a4d9221","c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221","c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221","c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221","8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419","8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(Zv),dg=ug(hg),pg=new Array(3).concat("998ec3f7f7f7f1a340","5e3c99b2abd2fdb863e66101","5e3c99b2abd2f7f7f7fdb863e66101","542788998ec3d8daebfee0b6f1a340b35806","542788998ec3d8daebf7f7f7fee0b6f1a340b35806","5427888073acb2abd2d8daebfee0b6fdb863e08214b35806","5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806","2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08","2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(Zv),vg=ug(pg),gg=new Array(3).concat("ef8a62f7f7f767a9cf","ca0020f4a58292c5de0571b0","ca0020f4a582f7f7f792c5de0571b0","b2182bef8a62fddbc7d1e5f067a9cf2166ac","b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac","b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac","b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac","67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061","67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(Zv),yg=ug(gg),_g=new Array(3).concat("ef8a62ffffff999999","ca0020f4a582bababa404040","ca0020f4a582ffffffbababa404040","b2182bef8a62fddbc7e0e0e09999994d4d4d","b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d","b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d","b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d","67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a","67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(Zv),bg=ug(_g),mg=new Array(3).concat("fc8d59ffffbf91bfdb","d7191cfdae61abd9e92c7bb6","d7191cfdae61ffffbfabd9e92c7bb6","d73027fc8d59fee090e0f3f891bfdb4575b4","d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4","d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4","d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4","a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695","a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(Zv),xg=ug(mg),wg=new Array(3).concat("fc8d59ffffbf91cf60","d7191cfdae61a6d96a1a9641","d7191cfdae61ffffbfa6d96a1a9641","d73027fc8d59fee08bd9ef8b91cf601a9850","d73027fc8d59fee08bffffbfd9ef8b91cf601a9850","d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850","d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850","a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837","a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(Zv),Mg=ug(wg),Ng=new Array(3).concat("fc8d59ffffbf99d594","d7191cfdae61abdda42b83ba","d7191cfdae61ffffbfabdda42b83ba","d53e4ffc8d59fee08be6f59899d5943288bd","d53e4ffc8d59fee08bffffbfe6f59899d5943288bd","d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd","d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd","9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2","9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(Zv),Tg=ug(Ng),Ag=new Array(3).concat("e5f5f999d8c92ca25f","edf8fbb2e2e266c2a4238b45","edf8fbb2e2e266c2a42ca25f006d2c","edf8fbccece699d8c966c2a42ca25f006d2c","edf8fbccece699d8c966c2a441ae76238b45005824","f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824","f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(Zv),Sg=ug(Ag),kg=new Array(3).concat("e0ecf49ebcda8856a7","edf8fbb3cde38c96c688419d","edf8fbb3cde38c96c68856a7810f7c","edf8fbbfd3e69ebcda8c96c68856a7810f7c","edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b","f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b","f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(Zv),Eg=ug(kg),Cg=new Array(3).concat("e0f3dba8ddb543a2ca","f0f9e8bae4bc7bccc42b8cbe","f0f9e8bae4bc7bccc443a2ca0868ac","f0f9e8ccebc5a8ddb57bccc443a2ca0868ac","f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e","f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e","f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(Zv),Pg=ug(Cg),zg=new Array(3).concat("fee8c8fdbb84e34a33","fef0d9fdcc8afc8d59d7301f","fef0d9fdcc8afc8d59e34a33b30000","fef0d9fdd49efdbb84fc8d59e34a33b30000","fef0d9fdd49efdbb84fc8d59ef6548d7301f990000","fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000","fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(Zv),Rg=ug(zg),Dg=new Array(3).concat("ece2f0a6bddb1c9099","f6eff7bdc9e167a9cf02818a","f6eff7bdc9e167a9cf1c9099016c59","f6eff7d0d1e6a6bddb67a9cf1c9099016c59","f6eff7d0d1e6a6bddb67a9cf3690c002818a016450","fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450","fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(Zv),qg=ug(Dg),Lg=new Array(3).concat("ece7f2a6bddb2b8cbe","f1eef6bdc9e174a9cf0570b0","f1eef6bdc9e174a9cf2b8cbe045a8d","f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d","f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b","fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b","fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(Zv),Ug=ug(Lg),Og=new Array(3).concat("e7e1efc994c7dd1c77","f1eef6d7b5d8df65b0ce1256","f1eef6d7b5d8df65b0dd1c77980043","f1eef6d4b9dac994c7df65b0dd1c77980043","f1eef6d4b9dac994c7df65b0e7298ace125691003f","f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f","f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(Zv),Bg=ug(Og),Fg=new Array(3).concat("fde0ddfa9fb5c51b8a","feebe2fbb4b9f768a1ae017e","feebe2fbb4b9f768a1c51b8a7a0177","feebe2fcc5c0fa9fb5f768a1c51b8a7a0177","feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177","fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177","fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(Zv),Yg=ug(Fg),Ig=new Array(3).concat("edf8b17fcdbb2c7fb8","ffffcca1dab441b6c4225ea8","ffffcca1dab441b6c42c7fb8253494","ffffccc7e9b47fcdbb41b6c42c7fb8253494","ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84","ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84","ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(Zv),Hg=ug(Ig),jg=new Array(3).concat("f7fcb9addd8e31a354","ffffccc2e69978c679238443","ffffccc2e69978c67931a354006837","ffffccd9f0a3addd8e78c67931a354006837","ffffccd9f0a3addd8e78c67941ab5d238443005a32","ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32","ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(Zv),Xg=ug(jg),Vg=new Array(3).concat("fff7bcfec44fd95f0e","ffffd4fed98efe9929cc4c02","ffffd4fed98efe9929d95f0e993404","ffffd4fee391fec44ffe9929d95f0e993404","ffffd4fee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(Zv),Gg=ug(Vg),$g=new Array(3).concat("ffeda0feb24cf03b20","ffffb2fecc5cfd8d3ce31a1c","ffffb2fecc5cfd8d3cf03b20bd0026","ffffb2fed976feb24cfd8d3cf03b20bd0026","ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026","ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026","ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(Zv),Wg=ug($g),Zg=new Array(3).concat("deebf79ecae13182bd","eff3ffbdd7e76baed62171b5","eff3ffbdd7e76baed63182bd08519c","eff3ffc6dbef9ecae16baed63182bd08519c","eff3ffc6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(Zv),Qg=ug(Zg),Kg=new Array(3).concat("e5f5e0a1d99b31a354","edf8e9bae4b374c476238b45","edf8e9bae4b374c47631a354006d2c","edf8e9c7e9c0a1d99b74c47631a354006d2c","edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32","f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32","f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(Zv),Jg=ug(Kg),ty=new Array(3).concat("f0f0f0bdbdbd636363","f7f7f7cccccc969696525252","f7f7f7cccccc969696636363252525","f7f7f7d9d9d9bdbdbd969696636363252525","f7f7f7d9d9d9bdbdbd969696737373525252252525","fffffff0f0f0d9d9d9bdbdbd969696737373525252252525","fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(Zv),ny=ug(ty),ey=new Array(3).concat("efedf5bcbddc756bb1","f2f0f7cbc9e29e9ac86a51a3","f2f0f7cbc9e29e9ac8756bb154278f","f2f0f7dadaebbcbddc9e9ac8756bb154278f","f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486","fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486","fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(Zv),ry=ug(ey),iy=new Array(3).concat("fee0d2fc9272de2d26","fee5d9fcae91fb6a4acb181d","fee5d9fcae91fb6a4ade2d26a50f15","fee5d9fcbba1fc9272fb6a4ade2d26a50f15","fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d","fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d","fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(Zv),oy=ug(iy),ay=new Array(3).concat("fee6cefdae6be6550d","feeddefdbe85fd8d3cd94701","feeddefdbe85fd8d3ce6550da63603","feeddefdd0a2fdae6bfd8d3ce6550da63603","feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04","fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04","fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(Zv),uy=ug(ay);var cy=Qe(ee(300,.5,0),ee(-240,.5,1)),fy=Qe(ee(-100,.75,.35),ee(80,1.5,.8)),sy=Qe(ee(260,.75,.35),ee(80,1.5,.8)),ly=ee();var hy=_n(),dy=Math.PI/3,py=2*Math.PI/3;function vy(t){var n=t.length;return function(e){return t[Math.max(0,Math.min(n-1,Math.floor(e*n)))]}}var gy=vy(Zv("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),yy=vy(Zv("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),_y=vy(Zv("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),by=vy(Zv("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));function my(t){return function(){return t}}var xy=Math.abs,wy=Math.atan2,My=Math.cos,Ny=Math.max,Ty=Math.min,Ay=Math.sin,Sy=Math.sqrt,ky=1e-12,Ey=Math.PI,Cy=Ey/2,Py=2*Ey;function zy(t){return t>=1?Cy:t<=-1?-Cy:Math.asin(t)}function Ry(t){return t.innerRadius}function Dy(t){return t.outerRadius}function qy(t){return t.startAngle}function Ly(t){return t.endAngle}function Uy(t){return t&&t.padAngle}function Oy(t,n,e,r,i,o,a){var u=t-e,c=n-r,f=(a?o:-o)/Sy(u*u+c*c),s=f*c,l=-f*u,h=t+s,d=n+l,p=e+s,v=r+l,g=(h+p)/2,y=(d+v)/2,_=p-h,b=v-d,m=_*_+b*b,x=i-o,w=h*v-p*d,M=(b<0?-1:1)*Sy(Ny(0,x*x*m-w*w)),N=(w*b-_*M)/m,T=(-w*_-b*M)/m,A=(w*b+_*M)/m,S=(-w*_+b*M)/m,k=N-g,E=T-y,C=A-g,P=S-y;return k*k+E*E>C*C+P*P&&(N=A,T=S),{cx:N,cy:T,x01:-s,y01:-l,x11:N*(i/x-1),y11:T*(i/x-1)}}function By(t){this._context=t}function Fy(t){return new By(t)}function Yy(t){return t[0]}function Iy(t){return t[1]}function Hy(){var t=Yy,n=Iy,e=my(!0),r=null,i=Fy,o=null;function a(a){var u,c,f,s=a.length,l=!1;for(null==r&&(o=i(f=no())),u=0;u<=s;++u)!(u<s&&e(c=a[u],u,a))===l&&((l=!l)?o.lineStart():o.lineEnd()),l&&o.point(+t(c,u,a),+n(c,u,a));if(f)return o=null,f+""||null}return a.x=function(n){return arguments.length?(t="function"==typeof n?n:my(+n),a):t},a.y=function(t){return arguments.length?(n="function"==typeof t?t:my(+t),a):n},a.defined=function(t){return arguments.length?(e="function"==typeof t?t:my(!!t),a):e},a.curve=function(t){return arguments.length?(i=t,null!=r&&(o=i(r)),a):i},a.context=function(t){return arguments.length?(null==t?r=o=null:o=i(r=t),a):r},a}function jy(){var t=Yy,n=null,e=my(0),r=Iy,i=my(!0),o=null,a=Fy,u=null;function c(c){var f,s,l,h,d,p=c.length,v=!1,g=new Array(p),y=new Array(p);for(null==o&&(u=a(d=no())),f=0;f<=p;++f){if(!(f<p&&i(h=c[f],f,c))===v)if(v=!v)s=f,u.areaStart(),u.lineStart();else{for(u.lineEnd(),u.lineStart(),l=f-1;l>=s;--l)u.point(g[l],y[l]);u.lineEnd(),u.areaEnd()}v&&(g[f]=+t(h,f,c),y[f]=+e(h,f,c),u.point(n?+n(h,f,c):g[f],r?+r(h,f,c):y[f]))}if(d)return u=null,d+""||null}function f(){return Hy().defined(i).curve(a).context(o)}return c.x=function(e){return arguments.length?(t="function"==typeof e?e:my(+e),n=null,c):t},c.x0=function(n){return arguments.length?(t="function"==typeof n?n:my(+n),c):t},c.x1=function(t){return arguments.length?(n=null==t?null:"function"==typeof t?t:my(+t),c):n},c.y=function(t){return arguments.length?(e="function"==typeof t?t:my(+t),r=null,c):e},c.y0=function(t){return arguments.length?(e="function"==typeof t?t:my(+t),c):e},c.y1=function(t){return arguments.length?(r=null==t?null:"function"==typeof t?t:my(+t),c):r},c.lineX0=c.lineY0=function(){return f().x(t).y(e)},c.lineY1=function(){return f().x(t).y(r)},c.lineX1=function(){return f().x(n).y(e)},c.defined=function(t){return arguments.length?(i="function"==typeof t?t:my(!!t),c):i},c.curve=function(t){return arguments.length?(a=t,null!=o&&(u=a(o)),c):a},c.context=function(t){return arguments.length?(null==t?o=u=null:u=a(o=t),c):o},c}function Xy(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}function Vy(t){return t}By.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n)}}};var Gy=Wy(Fy);function $y(t){this._curve=t}function Wy(t){function n(n){return new $y(t(n))}return n._curve=t,n}function Zy(t){var n=t.curve;return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t.curve=function(t){return arguments.length?n(Wy(t)):n()._curve},t}function Qy(){return Zy(Hy().curve(Gy))}function Ky(){var t=jy().curve(Gy),n=t.curve,e=t.lineX0,r=t.lineX1,i=t.lineY0,o=t.lineY1;return t.angle=t.x,delete t.x,t.startAngle=t.x0,delete t.x0,t.endAngle=t.x1,delete t.x1,t.radius=t.y,delete t.y,t.innerRadius=t.y0,delete t.y0,t.outerRadius=t.y1,delete t.y1,t.lineStartAngle=function(){return Zy(e())},delete t.lineX0,t.lineEndAngle=function(){return Zy(r())},delete t.lineX1,t.lineInnerRadius=function(){return Zy(i())},delete t.lineY0,t.lineOuterRadius=function(){return Zy(o())},delete t.lineY1,t.curve=function(t){return arguments.length?n(Wy(t)):n()._curve},t}function Jy(t,n){return[(n=+n)*Math.cos(t-=Math.PI/2),n*Math.sin(t)]}$y.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(t,n){this._curve.point(n*Math.sin(t),n*-Math.cos(t))}};var t_=Array.prototype.slice;function n_(t){return t.source}function e_(t){return t.target}function r_(t){var n=n_,e=e_,r=Yy,i=Iy,o=null;function a(){var a,u=t_.call(arguments),c=n.apply(this,u),f=e.apply(this,u);if(o||(o=a=no()),t(o,+r.apply(this,(u[0]=c,u)),+i.apply(this,u),+r.apply(this,(u[0]=f,u)),+i.apply(this,u)),a)return o=null,a+""||null}return a.source=function(t){return arguments.length?(n=t,a):n},a.target=function(t){return arguments.length?(e=t,a):e},a.x=function(t){return arguments.length?(r="function"==typeof t?t:my(+t),a):r},a.y=function(t){return arguments.length?(i="function"==typeof t?t:my(+t),a):i},a.context=function(t){return arguments.length?(o=null==t?null:t,a):o},a}function i_(t,n,e,r,i){t.moveTo(n,e),t.bezierCurveTo(n=(n+r)/2,e,n,i,r,i)}function o_(t,n,e,r,i){t.moveTo(n,e),t.bezierCurveTo(n,e=(e+i)/2,r,e,r,i)}function a_(t,n,e,r,i){var o=Jy(n,e),a=Jy(n,e=(e+i)/2),u=Jy(r,e),c=Jy(r,i);t.moveTo(o[0],o[1]),t.bezierCurveTo(a[0],a[1],u[0],u[1],c[0],c[1])}var u_={draw:function(t,n){var e=Math.sqrt(n/Ey);t.moveTo(e,0),t.arc(0,0,e,0,Py)}},c_={draw:function(t,n){var e=Math.sqrt(n/5)/2;t.moveTo(-3*e,-e),t.lineTo(-e,-e),t.lineTo(-e,-3*e),t.lineTo(e,-3*e),t.lineTo(e,-e),t.lineTo(3*e,-e),t.lineTo(3*e,e),t.lineTo(e,e),t.lineTo(e,3*e),t.lineTo(-e,3*e),t.lineTo(-e,e),t.lineTo(-3*e,e),t.closePath()}},f_=Math.sqrt(1/3),s_=2*f_,l_={draw:function(t,n){var e=Math.sqrt(n/s_),r=e*f_;t.moveTo(0,-e),t.lineTo(r,0),t.lineTo(0,e),t.lineTo(-r,0),t.closePath()}},h_=Math.sin(Ey/10)/Math.sin(7*Ey/10),d_=Math.sin(Py/10)*h_,p_=-Math.cos(Py/10)*h_,v_={draw:function(t,n){var e=Math.sqrt(.8908130915292852*n),r=d_*e,i=p_*e;t.moveTo(0,-e),t.lineTo(r,i);for(var o=1;o<5;++o){var a=Py*o/5,u=Math.cos(a),c=Math.sin(a);t.lineTo(c*e,-u*e),t.lineTo(u*r-c*i,c*r+u*i)}t.closePath()}},g_={draw:function(t,n){var e=Math.sqrt(n),r=-e/2;t.rect(r,r,e,e)}},y_=Math.sqrt(3),__={draw:function(t,n){var e=-Math.sqrt(n/(3*y_));t.moveTo(0,2*e),t.lineTo(-y_*e,-e),t.lineTo(y_*e,-e),t.closePath()}},b_=Math.sqrt(3)/2,m_=1/Math.sqrt(12),x_=3*(m_/2+1),w_={draw:function(t,n){var e=Math.sqrt(n/x_),r=e/2,i=e*m_,o=r,a=e*m_+e,u=-o,c=a;t.moveTo(r,i),t.lineTo(o,a),t.lineTo(u,c),t.lineTo(-.5*r-b_*i,b_*r+-.5*i),t.lineTo(-.5*o-b_*a,b_*o+-.5*a),t.lineTo(-.5*u-b_*c,b_*u+-.5*c),t.lineTo(-.5*r+b_*i,-.5*i-b_*r),t.lineTo(-.5*o+b_*a,-.5*a-b_*o),t.lineTo(-.5*u+b_*c,-.5*c-b_*u),t.closePath()}},M_=[u_,c_,l_,g_,v_,__,w_];function N_(){}function T_(t,n,e){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+n)/6,(t._y0+4*t._y1+e)/6)}function A_(t){this._context=t}function S_(t){this._context=t}function k_(t){this._context=t}function E_(t,n){this._basis=new A_(t),this._beta=n}A_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:T_(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:T_(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},S_.prototype={areaStart:N_,areaEnd:N_,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x2,this._y2),this._context.closePath();break;case 2:this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break;case 3:this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x2=t,this._y2=n;break;case 1:this._point=2,this._x3=t,this._y3=n;break;case 2:this._point=3,this._x4=t,this._y4=n,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+n)/6);break;default:T_(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},k_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var e=(this._x0+4*this._x1+t)/6,r=(this._y0+4*this._y1+n)/6;this._line?this._context.lineTo(e,r):this._context.moveTo(e,r);break;case 3:this._point=4;default:T_(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},E_.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var t=this._x,n=this._y,e=t.length-1;if(e>0)for(var r,i=t[0],o=n[0],a=t[e]-i,u=n[e]-o,c=-1;++c<=e;)r=c/e,this._basis.point(this._beta*t[c]+(1-this._beta)*(i+r*a),this._beta*n[c]+(1-this._beta)*(o+r*u));this._x=this._y=null,this._basis.lineEnd()},point:function(t,n){this._x.push(+t),this._y.push(+n)}};var C_=function t(n){function e(t){return 1===n?new A_(t):new E_(t,n)}return e.beta=function(n){return t(+n)},e}(.85);function P_(t,n,e){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-n),t._y2+t._k*(t._y1-e),t._x2,t._y2)}function z_(t,n){this._context=t,this._k=(1-n)/6}z_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:P_(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2,this._x1=t,this._y1=n;break;case 2:this._point=3;default:P_(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var R_=function t(n){function e(t){return new z_(t,n)}return e.tension=function(n){return t(+n)},e}(0);function D_(t,n){this._context=t,this._k=(1-n)/6}D_.prototype={areaStart:N_,areaEnd:N_,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:P_(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var q_=function t(n){function e(t){return new D_(t,n)}return e.tension=function(n){return t(+n)},e}(0);function L_(t,n){this._context=t,this._k=(1-n)/6}L_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:P_(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var U_=function t(n){function e(t){return new L_(t,n)}return e.tension=function(n){return t(+n)},e}(0);function O_(t,n,e){var r=t._x1,i=t._y1,o=t._x2,a=t._y2;if(t._l01_a>ky){var u=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,c=3*t._l01_a*(t._l01_a+t._l12_a);r=(r*u-t._x0*t._l12_2a+t._x2*t._l01_2a)/c,i=(i*u-t._y0*t._l12_2a+t._y2*t._l01_2a)/c}if(t._l23_a>ky){var f=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,s=3*t._l23_a*(t._l23_a+t._l12_a);o=(o*f+t._x1*t._l23_2a-n*t._l12_2a)/s,a=(a*f+t._y1*t._l23_2a-e*t._l12_2a)/s}t._context.bezierCurveTo(r,i,o,a,t._x2,t._y2)}function B_(t,n){this._context=t,this._alpha=n}B_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3;default:O_(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var F_=function t(n){function e(t){return n?new B_(t,n):new z_(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);function Y_(t,n){this._context=t,this._alpha=n}Y_.prototype={areaStart:N_,areaEnd:N_,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:O_(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var I_=function t(n){function e(t){return n?new Y_(t,n):new D_(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);function H_(t,n){this._context=t,this._alpha=n}H_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:O_(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var j_=function t(n){function e(t){return n?new H_(t,n):new L_(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);function X_(t){this._context=t}function V_(t){return t<0?-1:1}function G_(t,n,e){var r=t._x1-t._x0,i=n-t._x1,o=(t._y1-t._y0)/(r||i<0&&-0),a=(e-t._y1)/(i||r<0&&-0),u=(o*i+a*r)/(r+i);return(V_(o)+V_(a))*Math.min(Math.abs(o),Math.abs(a),.5*Math.abs(u))||0}function $_(t,n){var e=t._x1-t._x0;return e?(3*(t._y1-t._y0)/e-n)/2:n}function W_(t,n,e){var r=t._x0,i=t._y0,o=t._x1,a=t._y1,u=(o-r)/3;t._context.bezierCurveTo(r+u,i+u*n,o-u,a-u*e,o,a)}function Z_(t){this._context=t}function Q_(t){this._context=new K_(t)}function K_(t){this._context=t}function J_(t){this._context=t}function tb(t){var n,e,r=t.length-1,i=new Array(r),o=new Array(r),a=new Array(r);for(i[0]=0,o[0]=2,a[0]=t[0]+2*t[1],n=1;n<r-1;++n)i[n]=1,o[n]=4,a[n]=4*t[n]+2*t[n+1];for(i[r-1]=2,o[r-1]=7,a[r-1]=8*t[r-1]+t[r],n=1;n<r;++n)e=i[n]/o[n-1],o[n]-=e,a[n]-=e*a[n-1];for(i[r-1]=a[r-1]/o[r-1],n=r-2;n>=0;--n)i[n]=(a[n]-i[n+1])/o[n];for(o[r-1]=(t[r]+i[r-1])/2,n=0;n<r-1;++n)o[n]=2*t[n+1]-i[n+1];return[i,o]}function nb(t,n){this._context=t,this._t=n}function eb(t,n){if((i=t.length)>1)for(var e,r,i,o=1,a=t[n[0]],u=a.length;o<i;++o)for(r=a,a=t[n[o]],e=0;e<u;++e)a[e][1]+=a[e][0]=isNaN(r[e][1])?r[e][0]:r[e][1]}function rb(t){for(var n=t.length,e=new Array(n);--n>=0;)e[n]=n;return e}function ib(t,n){return t[n]}function ob(t){var n=t.map(ab);return rb(t).sort(function(t,e){return n[t]-n[e]})}function ab(t){for(var n,e=-1,r=0,i=t.length,o=-1/0;++e<i;)(n=+t[e][1])>o&&(o=n,r=e);return r}function ub(t){var n=t.map(cb);return rb(t).sort(function(t,e){return n[t]-n[e]})}function cb(t){for(var n,e=0,r=-1,i=t.length;++r<i;)(n=+t[r][1])&&(e+=n);return e}function fb(t){return function(){return t}}function sb(t){return t[0]}function lb(t){return t[1]}function hb(){this._=null}function db(t){t.U=t.C=t.L=t.R=t.P=t.N=null}function pb(t,n){var e=n,r=n.R,i=e.U;i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function vb(t,n){var e=n,r=n.L,i=e.U;i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function gb(t){for(;t.L;)t=t.L;return t}function yb(t,n,e,r){var i=[null,null],o=Yb.push(i)-1;return i.left=t,i.right=n,e&&bb(i,t,n,e),r&&bb(i,n,t,r),Bb[t.index].halfedges.push(o),Bb[n.index].halfedges.push(o),i}function _b(t,n,e){var r=[n,e];return r.left=t,r}function bb(t,n,e,r){t[0]||t[1]?t.left===e?t[1]=r:t[0]=r:(t[0]=r,t.left=n,t.right=e)}function mb(t,n,e,r,i){var o,a=t[0],u=t[1],c=a[0],f=a[1],s=0,l=1,h=u[0]-c,d=u[1]-f;if(o=n-c,h||!(o>0)){if(o/=h,h<0){if(o<s)return;o<l&&(l=o)}else if(h>0){if(o>l)return;o>s&&(s=o)}if(o=r-c,h||!(o<0)){if(o/=h,h<0){if(o>l)return;o>s&&(s=o)}else if(h>0){if(o<s)return;o<l&&(l=o)}if(o=e-f,d||!(o>0)){if(o/=d,d<0){if(o<s)return;o<l&&(l=o)}else if(d>0){if(o>l)return;o>s&&(s=o)}if(o=i-f,d||!(o<0)){if(o/=d,d<0){if(o>l)return;o>s&&(s=o)}else if(d>0){if(o<s)return;o<l&&(l=o)}return!(s>0||l<1)||(s>0&&(t[0]=[c+s*h,f+s*d]),l<1&&(t[1]=[c+l*h,f+l*d]),!0)}}}}}function xb(t,n,e,r,i){var o=t[1];if(o)return!0;var a,u,c=t[0],f=t.left,s=t.right,l=f[0],h=f[1],d=s[0],p=s[1],v=(l+d)/2,g=(h+p)/2;if(p===h){if(v<n||v>=r)return;if(l>d){if(c){if(c[1]>=i)return}else c=[v,e];o=[v,i]}else{if(c){if(c[1]<e)return}else c=[v,i];o=[v,e]}}else if(u=g-(a=(l-d)/(p-h))*v,a<-1||a>1)if(l>d){if(c){if(c[1]>=i)return}else c=[(e-u)/a,e];o=[(i-u)/a,i]}else{if(c){if(c[1]<e)return}else c=[(i-u)/a,i];o=[(e-u)/a,e]}else if(h<p){if(c){if(c[0]>=r)return}else c=[n,a*n+u];o=[r,a*r+u]}else{if(c){if(c[0]<n)return}else c=[r,a*r+u];o=[n,a*n+u]}return t[0]=c,t[1]=o,!0}function wb(t,n){var e=t.site,r=n.left,i=n.right;return e===i&&(i=r,r=e),i?Math.atan2(i[1]-r[1],i[0]-r[0]):(e===r?(r=n[1],i=n[0]):(r=n[0],i=n[1]),Math.atan2(r[0]-i[0],i[1]-r[1]))}function Mb(t,n){return n[+(n.left!==t.site)]}function Nb(t,n){return n[+(n.left===t.site)]}X_.prototype={areaStart:N_,areaEnd:N_,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,n){t=+t,n=+n,this._point?this._context.lineTo(t,n):(this._point=1,this._context.moveTo(t,n))}},Z_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:W_(this,this._t0,$_(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){var e=NaN;if(n=+n,(t=+t)!==this._x1||n!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,W_(this,$_(this,e=G_(this,t,n)),e);break;default:W_(this,this._t0,e=G_(this,t,n))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n,this._t0=e}}},(Q_.prototype=Object.create(Z_.prototype)).point=function(t,n){Z_.prototype.point.call(this,n,t)},K_.prototype={moveTo:function(t,n){this._context.moveTo(n,t)},closePath:function(){this._context.closePath()},lineTo:function(t,n){this._context.lineTo(n,t)},bezierCurveTo:function(t,n,e,r,i,o){this._context.bezierCurveTo(n,t,r,e,o,i)}},J_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,n=this._y,e=t.length;if(e)if(this._line?this._context.lineTo(t[0],n[0]):this._context.moveTo(t[0],n[0]),2===e)this._context.lineTo(t[1],n[1]);else for(var r=tb(t),i=tb(n),o=0,a=1;a<e;++o,++a)this._context.bezierCurveTo(r[0][o],i[0][o],r[1][o],i[1][o],t[a],n[a]);(this._line||0!==this._line&&1===e)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,n){this._x.push(+t),this._y.push(+n)}},nb.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(t,n);else{var e=this._x*(1-this._t)+t*this._t;this._context.lineTo(e,this._y),this._context.lineTo(e,n)}}this._x=t,this._y=n}},hb.prototype={constructor:hb,insert:function(t,n){var e,r,i;if(t){if(n.P=t,n.N=t.N,t.N&&(t.N.P=n),t.N=n,t.R){for(t=t.R;t.L;)t=t.L;t.L=n}else t.R=n;e=t}else this._?(t=gb(this._),n.P=null,n.N=t,t.P=t.L=n,e=t):(n.P=n.N=null,this._=n,e=null);for(n.L=n.R=null,n.U=e,n.C=!0,t=n;e&&e.C;)e===(r=e.U).L?(i=r.R)&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.R&&(pb(this,e),e=(t=e).U),e.C=!1,r.C=!0,vb(this,r)):(i=r.L)&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.L&&(vb(this,e),e=(t=e).U),e.C=!1,r.C=!0,pb(this,r)),e=t.U;this._.C=!1},remove:function(t){t.N&&(t.N.P=t.P),t.P&&(t.P.N=t.N),t.N=t.P=null;var n,e,r,i=t.U,o=t.L,a=t.R;if(e=o?a?gb(a):o:a,i?i.L===t?i.L=e:i.R=e:this._=e,o&&a?(r=e.C,e.C=t.C,e.L=o,o.U=e,e!==a?(i=e.U,e.U=t.U,t=e.R,i.L=t,e.R=a,a.U=e):(e.U=i,i=e,t=e.R)):(r=t.C,t=e),t&&(t.U=i),!r)if(t&&t.C)t.C=!1;else{do{if(t===this._)break;if(t===i.L){if((n=i.R).C&&(n.C=!1,i.C=!0,pb(this,i),n=i.R),n.L&&n.L.C||n.R&&n.R.C){n.R&&n.R.C||(n.L.C=!1,n.C=!0,vb(this,n),n=i.R),n.C=i.C,i.C=n.R.C=!1,pb(this,i),t=this._;break}}else if((n=i.L).C&&(n.C=!1,i.C=!0,vb(this,i),n=i.L),n.L&&n.L.C||n.R&&n.R.C){n.L&&n.L.C||(n.R.C=!1,n.C=!0,pb(this,n),n=i.L),n.C=i.C,i.C=n.L.C=!1,vb(this,i),t=this._;break}n.C=!0,t=i,i=i.U}while(!t.C);t&&(t.C=!1)}}};var Tb,Ab=[];function Sb(){db(this),this.x=this.y=this.arc=this.site=this.cy=null}function kb(t){var n=t.P,e=t.N;if(n&&e){var r=n.site,i=t.site,o=e.site;if(r!==o){var a=i[0],u=i[1],c=r[0]-a,f=r[1]-u,s=o[0]-a,l=o[1]-u,h=2*(c*l-f*s);if(!(h>=-Hb)){var d=c*c+f*f,p=s*s+l*l,v=(l*d-f*p)/h,g=(c*p-s*d)/h,y=Ab.pop()||new Sb;y.arc=t,y.site=i,y.x=v+a,y.y=(y.cy=g+u)+Math.sqrt(v*v+g*g),t.circle=y;for(var _=null,b=Fb._;b;)if(y.y<b.y||y.y===b.y&&y.x<=b.x){if(!b.L){_=b.P;break}b=b.L}else{if(!b.R){_=b;break}b=b.R}Fb.insert(_,y),_||(Tb=y)}}}}function Eb(t){var n=t.circle;n&&(n.P||(Tb=n.N),Fb.remove(n),Ab.push(n),db(n),t.circle=null)}var Cb=[];function Pb(){db(this),this.edge=this.site=this.circle=null}function zb(t){var n=Cb.pop()||new Pb;return n.site=t,n}function Rb(t){Eb(t),Ob.remove(t),Cb.push(t),db(t)}function Db(t){var n=t.circle,e=n.x,r=n.cy,i=[e,r],o=t.P,a=t.N,u=[t];Rb(t);for(var c=o;c.circle&&Math.abs(e-c.circle.x)<Ib&&Math.abs(r-c.circle.cy)<Ib;)o=c.P,u.unshift(c),Rb(c),c=o;u.unshift(c),Eb(c);for(var f=a;f.circle&&Math.abs(e-f.circle.x)<Ib&&Math.abs(r-f.circle.cy)<Ib;)a=f.N,u.push(f),Rb(f),f=a;u.push(f),Eb(f);var s,l=u.length;for(s=1;s<l;++s)f=u[s],c=u[s-1],bb(f.edge,c.site,f.site,i);c=u[0],(f=u[l-1]).edge=yb(c.site,f.site,null,i),kb(c),kb(f)}function qb(t){for(var n,e,r,i,o=t[0],a=t[1],u=Ob._;u;)if((r=Lb(u,a)-o)>Ib)u=u.L;else{if(!((i=o-Ub(u,a))>Ib)){r>-Ib?(n=u.P,e=u):i>-Ib?(n=u,e=u.N):n=e=u;break}if(!u.R){n=u;break}u=u.R}!function(t){Bb[t.index]={site:t,halfedges:[]}}(t);var c=zb(t);if(Ob.insert(n,c),n||e){if(n===e)return Eb(n),e=zb(n.site),Ob.insert(c,e),c.edge=e.edge=yb(n.site,c.site),kb(n),void kb(e);if(e){Eb(n),Eb(e);var f=n.site,s=f[0],l=f[1],h=t[0]-s,d=t[1]-l,p=e.site,v=p[0]-s,g=p[1]-l,y=2*(h*g-d*v),_=h*h+d*d,b=v*v+g*g,m=[(g*_-d*b)/y+s,(h*b-v*_)/y+l];bb(e.edge,f,p,m),c.edge=yb(f,t,null,m),e.edge=yb(t,p,null,m),kb(n),kb(e)}else c.edge=yb(n.site,c.site)}}function Lb(t,n){var e=t.site,r=e[0],i=e[1],o=i-n;if(!o)return r;var a=t.P;if(!a)return-1/0;var u=(e=a.site)[0],c=e[1],f=c-n;if(!f)return u;var s=u-r,l=1/o-1/f,h=s/f;return l?(-h+Math.sqrt(h*h-2*l*(s*s/(-2*f)-c+f/2+i-o/2)))/l+r:(r+u)/2}function Ub(t,n){var e=t.N;if(e)return Lb(e,n);var r=t.site;return r[1]===n?r[0]:1/0}var Ob,Bb,Fb,Yb,Ib=1e-6,Hb=1e-12;function jb(t,n,e){return(t[0]-e[0])*(n[1]-t[1])-(t[0]-n[0])*(e[1]-t[1])}function Xb(t,n){return n[1]-t[1]||n[0]-t[0]}function Vb(t,n){var e,r,i,o=t.sort(Xb).pop();for(Yb=[],Bb=new Array(t.length),Ob=new hb,Fb=new hb;;)if(i=Tb,o&&(!i||o[1]<i.y||o[1]===i.y&&o[0]<i.x))o[0]===e&&o[1]===r||(qb(o),e=o[0],r=o[1]),o=t.pop();else{if(!i)break;Db(i.arc)}if(function(){for(var t,n,e,r,i=0,o=Bb.length;i<o;++i)if((t=Bb[i])&&(r=(n=t.halfedges).length)){var a=new Array(r),u=new Array(r);for(e=0;e<r;++e)a[e]=e,u[e]=wb(t,Yb[n[e]]);for(a.sort(function(t,n){return u[n]-u[t]}),e=0;e<r;++e)u[e]=n[a[e]];for(e=0;e<r;++e)n[e]=u[e]}}(),n){var a=+n[0][0],u=+n[0][1],c=+n[1][0],f=+n[1][1];!function(t,n,e,r){for(var i,o=Yb.length;o--;)xb(i=Yb[o],t,n,e,r)&&mb(i,t,n,e,r)&&(Math.abs(i[0][0]-i[1][0])>Ib||Math.abs(i[0][1]-i[1][1])>Ib)||delete Yb[o]}(a,u,c,f),function(t,n,e,r){var i,o,a,u,c,f,s,l,h,d,p,v,g=Bb.length,y=!0;for(i=0;i<g;++i)if(o=Bb[i]){for(a=o.site,u=(c=o.halfedges).length;u--;)Yb[c[u]]||c.splice(u,1);for(u=0,f=c.length;u<f;)p=(d=Nb(o,Yb[c[u]]))[0],v=d[1],l=(s=Mb(o,Yb[c[++u%f]]))[0],h=s[1],(Math.abs(p-l)>Ib||Math.abs(v-h)>Ib)&&(c.splice(u,0,Yb.push(_b(a,d,Math.abs(p-t)<Ib&&r-v>Ib?[t,Math.abs(l-t)<Ib?h:r]:Math.abs(v-r)<Ib&&e-p>Ib?[Math.abs(h-r)<Ib?l:e,r]:Math.abs(p-e)<Ib&&v-n>Ib?[e,Math.abs(l-e)<Ib?h:n]:Math.abs(v-n)<Ib&&p-t>Ib?[Math.abs(h-n)<Ib?l:t,n]:null))-1),++f);f&&(y=!1)}if(y){var _,b,m,x=1/0;for(i=0,y=null;i<g;++i)(o=Bb[i])&&(m=(_=(a=o.site)[0]-t)*_+(b=a[1]-n)*b)<x&&(x=m,y=o);if(y){var w=[t,n],M=[t,r],N=[e,r],T=[e,n];y.halfedges.push(Yb.push(_b(a=y.site,w,M))-1,Yb.push(_b(a,M,N))-1,Yb.push(_b(a,N,T))-1,Yb.push(_b(a,T,w))-1)}}for(i=0;i<g;++i)(o=Bb[i])&&(o.halfedges.length||delete Bb[i])}(a,u,c,f)}this.edges=Yb,this.cells=Bb,Ob=Fb=Yb=Bb=null}function Gb(t){return function(){return t}}function $b(t,n,e){this.target=t,this.type=n,this.transform=e}function Wb(t,n,e){this.k=t,this.x=n,this.y=e}Vb.prototype={constructor:Vb,polygons:function(){var t=this.edges;return this.cells.map(function(n){var e=n.halfedges.map(function(e){return Mb(n,t[e])});return e.data=n.site.data,e})},triangles:function(){var t=[],n=this.edges;return this.cells.forEach(function(e,r){if(o=(i=e.halfedges).length)for(var i,o,a,u=e.site,c=-1,f=n[i[o-1]],s=f.left===u?f.right:f.left;++c<o;)a=s,s=(f=n[i[c]]).left===u?f.right:f.left,a&&s&&r<a.index&&r<s.index&&jb(u,a,s)<0&&t.push([u.data,a.data,s.data])}),t},links:function(){return this.edges.filter(function(t){return t.right}).map(function(t){return{source:t.left.data,target:t.right.data}})},find:function(t,n,e){for(var r,i,o=this,a=o._found||0,u=o.cells.length;!(i=o.cells[a]);)if(++a>=u)return null;var c=t-i.site[0],f=n-i.site[1],s=c*c+f*f;do{i=o.cells[r=a],a=null,i.halfedges.forEach(function(e){var r=o.edges[e],u=r.left;if(u!==i.site&&u||(u=r.right)){var c=t-u[0],f=n-u[1],l=c*c+f*f;l<s&&(s=l,a=u.index)}})}while(null!==a);return o._found=r,null==e||s<=e*e?i.site:null}},Wb.prototype={constructor:Wb,scale:function(t){return 1===t?this:new Wb(this.k*t,this.x,this.y)},translate:function(t,n){return 0===t&0===n?this:new Wb(this.k,this.x+this.k*t,this.y+this.k*n)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Zb=new Wb(1,0,0);function Qb(t){for(;!t.__zoom;)if(!(t=t.parentNode))return Zb;return t.__zoom}function Kb(){t.event.stopImmediatePropagation()}function Jb(){t.event.preventDefault(),t.event.stopImmediatePropagation()}function tm(){return!t.event.ctrlKey&&!t.event.button}function nm(){var t=this;return t instanceof SVGElement?(t=t.ownerSVGElement||t).hasAttribute("viewBox")?[[(t=t.viewBox.baseVal).x,t.y],[t.x+t.width,t.y+t.height]]:[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]:[[0,0],[t.clientWidth,t.clientHeight]]}function em(){return this.__zoom||Zb}function rm(){return-t.event.deltaY*(1===t.event.deltaMode?.05:t.event.deltaMode?1:.002)}function im(){return navigator.maxTouchPoints||"ontouchstart"in this}function om(t,n,e){var r=t.invertX(n[0][0])-e[0][0],i=t.invertX(n[1][0])-e[1][0],o=t.invertY(n[0][1])-e[0][1],a=t.invertY(n[1][1])-e[1][1];return t.translate(i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i),a>o?(o+a)/2:Math.min(0,o)||Math.max(0,a))}Qb.prototype=Wb.prototype,t.FormatSpecifier=Ba,t.active=function(t,n){var e,r,i=t.__transition;if(i)for(r in n=null==n?null:n+"",i)if((e=i[r]).state>xr&&e.name===n)return new Ur([[t]],yi,n,+r);return null},t.arc=function(){var t=Ry,n=Dy,e=my(0),r=null,i=qy,o=Ly,a=Uy,u=null;function c(){var c,f,s=+t.apply(this,arguments),l=+n.apply(this,arguments),h=i.apply(this,arguments)-Cy,d=o.apply(this,arguments)-Cy,p=xy(d-h),v=d>h;if(u||(u=c=no()),l<s&&(f=l,l=s,s=f),l>ky)if(p>Py-ky)u.moveTo(l*My(h),l*Ay(h)),u.arc(0,0,l,h,d,!v),s>ky&&(u.moveTo(s*My(d),s*Ay(d)),u.arc(0,0,s,d,h,v));else{var g,y,_=h,b=d,m=h,x=d,w=p,M=p,N=a.apply(this,arguments)/2,T=N>ky&&(r?+r.apply(this,arguments):Sy(s*s+l*l)),A=Ty(xy(l-s)/2,+e.apply(this,arguments)),S=A,k=A;if(T>ky){var E=zy(T/s*Ay(N)),C=zy(T/l*Ay(N));(w-=2*E)>ky?(m+=E*=v?1:-1,x-=E):(w=0,m=x=(h+d)/2),(M-=2*C)>ky?(_+=C*=v?1:-1,b-=C):(M=0,_=b=(h+d)/2)}var P=l*My(_),z=l*Ay(_),R=s*My(x),D=s*Ay(x);if(A>ky){var q,L=l*My(b),U=l*Ay(b),O=s*My(m),B=s*Ay(m);if(p<Ey&&(q=function(t,n,e,r,i,o,a,u){var c=e-t,f=r-n,s=a-i,l=u-o,h=l*c-s*f;if(!(h*h<ky))return[t+(h=(s*(n-o)-l*(t-i))/h)*c,n+h*f]}(P,z,O,B,L,U,R,D))){var F=P-q[0],Y=z-q[1],I=L-q[0],H=U-q[1],j=1/Ay(function(t){return t>1?0:t<-1?Ey:Math.acos(t)}((F*I+Y*H)/(Sy(F*F+Y*Y)*Sy(I*I+H*H)))/2),X=Sy(q[0]*q[0]+q[1]*q[1]);S=Ty(A,(s-X)/(j-1)),k=Ty(A,(l-X)/(j+1))}}M>ky?k>ky?(g=Oy(O,B,P,z,l,k,v),y=Oy(L,U,R,D,l,k,v),u.moveTo(g.cx+g.x01,g.cy+g.y01),k<A?u.arc(g.cx,g.cy,k,wy(g.y01,g.x01),wy(y.y01,y.x01),!v):(u.arc(g.cx,g.cy,k,wy(g.y01,g.x01),wy(g.y11,g.x11),!v),u.arc(0,0,l,wy(g.cy+g.y11,g.cx+g.x11),wy(y.cy+y.y11,y.cx+y.x11),!v),u.arc(y.cx,y.cy,k,wy(y.y11,y.x11),wy(y.y01,y.x01),!v))):(u.moveTo(P,z),u.arc(0,0,l,_,b,!v)):u.moveTo(P,z),s>ky&&w>ky?S>ky?(g=Oy(R,D,L,U,s,-S,v),y=Oy(P,z,O,B,s,-S,v),u.lineTo(g.cx+g.x01,g.cy+g.y01),S<A?u.arc(g.cx,g.cy,S,wy(g.y01,g.x01),wy(y.y01,y.x01),!v):(u.arc(g.cx,g.cy,S,wy(g.y01,g.x01),wy(g.y11,g.x11),!v),u.arc(0,0,s,wy(g.cy+g.y11,g.cx+g.x11),wy(y.cy+y.y11,y.cx+y.x11),v),u.arc(y.cx,y.cy,S,wy(y.y11,y.x11),wy(y.y01,y.x01),!v))):u.arc(0,0,s,x,m,v):u.lineTo(R,D)}else u.moveTo(0,0);if(u.closePath(),c)return u=null,c+""||null}return c.centroid=function(){var e=(+t.apply(this,arguments)+ +n.apply(this,arguments))/2,r=(+i.apply(this,arguments)+ +o.apply(this,arguments))/2-Ey/2;return[My(r)*e,Ay(r)*e]},c.innerRadius=function(n){return arguments.length?(t="function"==typeof n?n:my(+n),c):t},c.outerRadius=function(t){return arguments.length?(n="function"==typeof t?t:my(+t),c):n},c.cornerRadius=function(t){return arguments.length?(e="function"==typeof t?t:my(+t),c):e},c.padRadius=function(t){return arguments.length?(r=null==t?null:"function"==typeof t?t:my(+t),c):r},c.startAngle=function(t){return arguments.length?(i="function"==typeof t?t:my(+t),c):i},c.endAngle=function(t){return arguments.length?(o="function"==typeof t?t:my(+t),c):o},c.padAngle=function(t){return arguments.length?(a="function"==typeof t?t:my(+t),c):a},c.context=function(t){return arguments.length?(u=null==t?null:t,c):u},c},t.area=jy,t.areaRadial=Ky,t.ascending=n,t.autoType=function(t){for(var n in t){var e,r,i=t[n].trim();if(i)if("true"===i)i=!0;else if("false"===i)i=!1;else if("NaN"===i)i=NaN;else if(isNaN(e=+i)){if(!(r=i.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/)))continue;ra&&r[4]&&!r[7]&&(i=i.replace(/-/g,"/").replace(/T/," ")),i=new Date(i)}else i=e;else i=null;t[n]=i}return t},t.axisBottom=function(t){return F(D,t)},t.axisLeft=function(t){return F(q,t)},t.axisRight=function(t){return F(R,t)},t.axisTop=function(t){return F(z,t)},t.bisect=i,t.bisectLeft=o,t.bisectRight=i,t.bisector=e,t.blob=function(t,n){return fetch(t,n).then(ia)},t.brush=function(){return Yi(Ci)},t.brushSelection=function(t){var n=t.__brush;return n?n.dim.output(n.selection):null},t.brushX=function(){return Yi(ki)},t.brushY=function(){return Yi(Ei)},t.buffer=function(t,n){return fetch(t,n).then(oa)},t.chord=function(){var t=0,n=null,e=null,r=null;function i(i){var o,a,u,c,f,s,l=i.length,h=[],d=g(l),p=[],v=[],y=v.groups=new Array(l),_=new Array(l*l);for(o=0,f=-1;++f<l;){for(a=0,s=-1;++s<l;)a+=i[f][s];h.push(a),p.push(g(l)),o+=a}for(n&&d.sort(function(t,e){return n(h[t],h[e])}),e&&p.forEach(function(t,n){t.sort(function(t,r){return e(i[n][t],i[n][r])})}),c=(o=Gi(0,Vi-t*l)/o)?t:Vi/l,a=0,f=-1;++f<l;){for(u=a,s=-1;++s<l;){var b=d[f],m=p[b][s],x=i[b][m],w=a,M=a+=x*o;_[m*l+b]={index:b,subindex:m,startAngle:w,endAngle:M,value:x}}y[b]={index:b,startAngle:u,endAngle:a,value:h[b]},a+=c}for(f=-1;++f<l;)for(s=f-1;++s<l;){var N=_[s*l+f],T=_[f*l+s];(N.value||T.value)&&v.push(N.value<T.value?{source:T,target:N}:{source:N,target:T})}return r?v.sort(r):v}return i.padAngle=function(n){return arguments.length?(t=Gi(0,n),i):t},i.sortGroups=function(t){return arguments.length?(n=t,i):n},i.sortSubgroups=function(t){return arguments.length?(e=t,i):e},i.sortChords=function(t){return arguments.length?(null==t?r=null:(r=$i(t))._=t,i):r&&r._},i},t.clientPoint=Ot,t.cluster=function(){var t=Nl,n=1,e=1,r=!1;function i(i){var o,a=0;i.eachAfter(function(n){var e=n.children;e?(n.x=function(t){return t.reduce(Tl,0)/t.length}(e),n.y=function(t){return 1+t.reduce(Al,0)}(e)):(n.x=o?a+=t(n,o):0,n.y=0,o=n)});var u=function(t){for(var n;n=t.children;)t=n[0];return t}(i),c=function(t){for(var n;n=t.children;)t=n[n.length-1];return t}(i),f=u.x-t(u,c)/2,s=c.x+t(c,u)/2;return i.eachAfter(r?function(t){t.x=(t.x-i.x)*n,t.y=(i.y-t.y)*e}:function(t){t.x=(t.x-f)/(s-f)*n,t.y=(1-(i.y?t.y/i.y:1))*e})}return i.separation=function(n){return arguments.length?(t=n,i):t},i.size=function(t){return arguments.length?(r=!1,n=+t[0],e=+t[1],i):r?null:[n,e]},i.nodeSize=function(t){return arguments.length?(r=!0,n=+t[0],e=+t[1],i):r?[n,e]:null},i},t.color=pn,t.contourDensity=function(){var t=ko,n=Eo,e=Co,r=960,i=500,o=20,a=2,u=3*o,c=r+2*u>>a,f=i+2*u>>a,s=bo(20);function l(r){var i=new Float32Array(c*f),l=new Float32Array(c*f);r.forEach(function(r,o,s){var l=+t(r,o,s)+u>>a,h=+n(r,o,s)+u>>a,d=+e(r,o,s);l>=0&&l<c&&h>=0&&h<f&&(i[l+h*c]+=d)}),Ao({width:c,height:f,data:i},{width:c,height:f,data:l},o>>a),So({width:c,height:f,data:l},{width:c,height:f,data:i},o>>a),Ao({width:c,height:f,data:i},{width:c,height:f,data:l},o>>a),So({width:c,height:f,data:l},{width:c,height:f,data:i},o>>a),Ao({width:c,height:f,data:i},{width:c,height:f,data:l},o>>a),So({width:c,height:f,data:l},{width:c,height:f,data:i},o>>a);var d=s(i);if(!Array.isArray(d)){var p=T(i);d=w(0,p,d),(d=g(0,Math.floor(p/d)*d,d)).shift()}return To().thresholds(d).size([c,f])(i).map(h)}function h(t){return t.value*=Math.pow(2,-2*a),t.coordinates.forEach(d),t}function d(t){t.forEach(p)}function p(t){t.forEach(v)}function v(t){t[0]=t[0]*Math.pow(2,a)-u,t[1]=t[1]*Math.pow(2,a)-u}function y(){return c=r+2*(u=3*o)>>a,f=i+2*u>>a,l}return l.x=function(n){return arguments.length?(t="function"==typeof n?n:bo(+n),l):t},l.y=function(t){return arguments.length?(n="function"==typeof t?t:bo(+t),l):n},l.weight=function(t){return arguments.length?(e="function"==typeof t?t:bo(+t),l):e},l.size=function(t){if(!arguments.length)return[r,i];var n=Math.ceil(t[0]),e=Math.ceil(t[1]);if(!(n>=0||n>=0))throw new Error("invalid size");return r=n,i=e,y()},l.cellSize=function(t){if(!arguments.length)return 1<<a;if(!((t=+t)>=1))throw new Error("invalid cell size");return a=Math.floor(Math.log(t)/Math.LN2),y()},l.thresholds=function(t){return arguments.length?(s="function"==typeof t?t:Array.isArray(t)?bo(yo.call(t)):bo(t),l):s},l.bandwidth=function(t){if(!arguments.length)return Math.sqrt(o*(o+1));if(!((t=+t)>=0))throw new Error("invalid bandwidth");return o=Math.round((Math.sqrt(4*t*t+1)-1)/2),y()},l},t.contours=To,t.create=function(t){return Rt(Z(t).call(document.documentElement))},t.creator=Z,t.cross=function(t,n,e){var r,i,o,u,c=t.length,f=n.length,s=new Array(c*f);for(null==e&&(e=a),r=o=0;r<c;++r)for(u=t[r],i=0;i<f;++i,++o)s[o]=e(u,n[i]);return s},t.csv=fa,t.csvFormat=jo,t.csvFormatBody=Xo,t.csvFormatRow=Go,t.csvFormatRows=Vo,t.csvFormatValue=$o,t.csvParse=Io,t.csvParseRows=Ho,t.cubehelix=ee,t.curveBasis=function(t){return new A_(t)},t.curveBasisClosed=function(t){return new S_(t)},t.curveBasisOpen=function(t){return new k_(t)},t.curveBundle=C_,t.curveCardinal=R_,t.curveCardinalClosed=q_,t.curveCardinalOpen=U_,t.curveCatmullRom=F_,t.curveCatmullRomClosed=I_,t.curveCatmullRomOpen=j_,t.curveLinear=Fy,t.curveLinearClosed=function(t){return new X_(t)},t.curveMonotoneX=function(t){return new Z_(t)},t.curveMonotoneY=function(t){return new Q_(t)},t.curveNatural=function(t){return new J_(t)},t.curveStep=function(t){return new nb(t,.5)},t.curveStepAfter=function(t){return new nb(t,1)},t.curveStepBefore=function(t){return new nb(t,0)},t.customEvent=kt,t.descending=function(t,n){return n<t?-1:n>t?1:n>=t?0:NaN},t.deviation=f,t.dispatch=I,t.drag=function(){var n,e,r,i,o=Gt,a=$t,u=Wt,c=Zt,f={},s=I("start","drag","end"),l=0,h=0;function d(t){t.on("mousedown.drag",p).filter(c).on("touchstart.drag",y).on("touchmove.drag",_).on("touchend.drag touchcancel.drag",b).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function p(){if(!i&&o.apply(this,arguments)){var u=m("mouse",a.apply(this,arguments),Bt,this,arguments);u&&(Rt(t.event.view).on("mousemove.drag",v,!0).on("mouseup.drag",g,!0),Ht(t.event.view),Yt(),r=!1,n=t.event.clientX,e=t.event.clientY,u("start"))}}function v(){if(It(),!r){var i=t.event.clientX-n,o=t.event.clientY-e;r=i*i+o*o>h}f.mouse("drag")}function g(){Rt(t.event.view).on("mousemove.drag mouseup.drag",null),jt(t.event.view,r),It(),f.mouse("end")}function y(){if(o.apply(this,arguments)){var n,e,r=t.event.changedTouches,i=a.apply(this,arguments),u=r.length;for(n=0;n<u;++n)(e=m(r[n].identifier,i,Ft,this,arguments))&&(Yt(),e("start"))}}function _(){var n,e,r=t.event.changedTouches,i=r.length;for(n=0;n<i;++n)(e=f[r[n].identifier])&&(It(),e("drag"))}function b(){var n,e,r=t.event.changedTouches,o=r.length;for(i&&clearTimeout(i),i=setTimeout(function(){i=null},500),n=0;n<o;++n)(e=f[r[n].identifier])&&(Yt(),e("end"))}function m(n,e,r,i,o){var a,c,h,p=r(e,n),v=s.copy();if(kt(new Vt(d,"beforestart",a,n,l,p[0],p[1],0,0,v),function(){return null!=(t.event.subject=a=u.apply(i,o))&&(c=a.x-p[0]||0,h=a.y-p[1]||0,!0)}))return function t(u){var s,g=p;switch(u){case"start":f[n]=t,s=l++;break;case"end":delete f[n],--l;case"drag":p=r(e,n),s=l}kt(new Vt(d,u,a,n,s,p[0]+c,p[1]+h,p[0]-g[0],p[1]-g[1],v),v.apply,v,[u,i,o])}}return d.filter=function(t){return arguments.length?(o="function"==typeof t?t:Xt(!!t),d):o},d.container=function(t){return arguments.length?(a="function"==typeof t?t:Xt(t),d):a},d.subject=function(t){return arguments.length?(u="function"==typeof t?t:Xt(t),d):u},d.touchable=function(t){return arguments.length?(c="function"==typeof t?t:Xt(!!t),d):c},d.on=function(){var t=s.on.apply(s,arguments);return t===s?d:t},d.clickDistance=function(t){return arguments.length?(h=(t=+t)*t,d):Math.sqrt(h)},d},t.dragDisable=Ht,t.dragEnable=jt,t.dsv=function(t,n,e,r){3===arguments.length&&"function"==typeof e&&(r=e,e=void 0);var i=Fo(t);return ua(n,e).then(function(t){return i.parse(t,r)})},t.dsvFormat=Fo,t.easeBack=si,t.easeBackIn=ci,t.easeBackInOut=si,t.easeBackOut=fi,t.easeBounce=ui,t.easeBounceIn=function(t){return 1-ui(1-t)},t.easeBounceInOut=function(t){return((t*=2)<=1?1-ui(1-t):ui(t-1)+1)/2},t.easeBounceOut=ui,t.easeCircle=Zr,t.easeCircleIn=function(t){return 1-Math.sqrt(1-t*t)},t.easeCircleInOut=Zr,t.easeCircleOut=function(t){return Math.sqrt(1- --t*t)},t.easeCubic=Ir,t.easeCubicIn=function(t){return t*t*t},t.easeCubicInOut=Ir,t.easeCubicOut=function(t){return--t*t*t+1},t.easeElastic=di,t.easeElasticIn=hi,t.easeElasticInOut=pi,t.easeElasticOut=di,t.easeExp=Wr,t.easeExpIn=function(t){return Math.pow(2,10*t-10)},t.easeExpInOut=Wr,t.easeExpOut=function(t){return 1-Math.pow(2,-10*t)},t.easeLinear=function(t){return+t},t.easePoly=Xr,t.easePolyIn=Hr,t.easePolyInOut=Xr,t.easePolyOut=jr,t.easeQuad=Yr,t.easeQuadIn=function(t){return t*t},t.easeQuadInOut=Yr,t.easeQuadOut=function(t){return t*(2-t)},t.easeSin=$r,t.easeSinIn=function(t){return 1-Math.cos(t*Gr)},t.easeSinInOut=$r,t.easeSinOut=function(t){return Math.sin(t*Gr)},t.entries=function(t){var n=[];for(var e in t)n.push({key:e,value:t[e]});return n},t.extent=s,t.forceCenter=function(t,n){var e;function r(){var r,i,o=e.length,a=0,u=0;for(r=0;r<o;++r)a+=(i=e[r]).x,u+=i.y;for(a=a/o-t,u=u/o-n,r=0;r<o;++r)(i=e[r]).x-=a,i.y-=u}return null==t&&(t=0),null==n&&(n=0),r.initialize=function(t){e=t},r.x=function(n){return arguments.length?(t=+n,r):t},r.y=function(t){return arguments.length?(n=+t,r):n},r},t.forceCollide=function(t){var n,e,r=1,i=1;function o(){for(var t,o,u,c,f,s,l,h=n.length,d=0;d<i;++d)for(o=wa(n,Aa,Sa).visitAfter(a),t=0;t<h;++t)u=n[t],s=e[u.index],l=s*s,c=u.x+u.vx,f=u.y+u.vy,o.visit(p);function p(t,n,e,i,o){var a=t.data,h=t.r,d=s+h;if(!a)return n>c+d||i<c-d||e>f+d||o<f-d;if(a.index>u.index){var p=c-a.x-a.vx,v=f-a.y-a.vy,g=p*p+v*v;g<d*d&&(0===p&&(g+=(p=ya())*p),0===v&&(g+=(v=ya())*v),g=(d-(g=Math.sqrt(g)))/g*r,u.vx+=(p*=g)*(d=(h*=h)/(l+h)),u.vy+=(v*=g)*d,a.vx-=p*(d=1-d),a.vy-=v*d)}}}function a(t){if(t.data)return t.r=e[t.data.index];for(var n=t.r=0;n<4;++n)t[n]&&t[n].r>t.r&&(t.r=t[n].r)}function u(){if(n){var r,i,o=n.length;for(e=new Array(o),r=0;r<o;++r)i=n[r],e[i.index]=+t(i,r,n)}}return"function"!=typeof t&&(t=ga(null==t?1:+t)),o.initialize=function(t){n=t,u()},o.iterations=function(t){return arguments.length?(i=+t,o):i},o.strength=function(t){return arguments.length?(r=+t,o):r},o.radius=function(n){return arguments.length?(t="function"==typeof n?n:ga(+n),u(),o):t},o},t.forceLink=function(t){var n,e,r,i,o,a=ka,u=function(t){return 1/Math.min(i[t.source.index],i[t.target.index])},c=ga(30),f=1;function s(r){for(var i=0,a=t.length;i<f;++i)for(var u,c,s,l,h,d,p,v=0;v<a;++v)c=(u=t[v]).source,l=(s=u.target).x+s.vx-c.x-c.vx||ya(),h=s.y+s.vy-c.y-c.vy||ya(),l*=d=((d=Math.sqrt(l*l+h*h))-e[v])/d*r*n[v],h*=d,s.vx-=l*(p=o[v]),s.vy-=h*p,c.vx+=l*(p=1-p),c.vy+=h*p}function l(){if(r){var u,c,f=r.length,s=t.length,l=co(r,a);for(u=0,i=new Array(f);u<s;++u)(c=t[u]).index=u,"object"!=typeof c.source&&(c.source=Ea(l,c.source)),"object"!=typeof c.target&&(c.target=Ea(l,c.target)),i[c.source.index]=(i[c.source.index]||0)+1,i[c.target.index]=(i[c.target.index]||0)+1;for(u=0,o=new Array(s);u<s;++u)c=t[u],o[u]=i[c.source.index]/(i[c.source.index]+i[c.target.index]);n=new Array(s),h(),e=new Array(s),d()}}function h(){if(r)for(var e=0,i=t.length;e<i;++e)n[e]=+u(t[e],e,t)}function d(){if(r)for(var n=0,i=t.length;n<i;++n)e[n]=+c(t[n],n,t)}return null==t&&(t=[]),s.initialize=function(t){r=t,l()},s.links=function(n){return arguments.length?(t=n,l(),s):t},s.id=function(t){return arguments.length?(a=t,s):a},s.iterations=function(t){return arguments.length?(f=+t,s):f},s.strength=function(t){return arguments.length?(u="function"==typeof t?t:ga(+t),h(),s):u},s.distance=function(t){return arguments.length?(c="function"==typeof t?t:ga(+t),d(),s):c},s},t.forceManyBody=function(){var t,n,e,r,i=ga(-30),o=1,a=1/0,u=.81;function c(r){var i,o=t.length,a=wa(t,Ca,Pa).visitAfter(s);for(e=r,i=0;i<o;++i)n=t[i],a.visit(l)}function f(){if(t){var n,e,o=t.length;for(r=new Array(o),n=0;n<o;++n)e=t[n],r[e.index]=+i(e,n,t)}}function s(t){var n,e,i,o,a,u=0,c=0;if(t.length){for(i=o=a=0;a<4;++a)(n=t[a])&&(e=Math.abs(n.value))&&(u+=n.value,c+=e,i+=e*n.x,o+=e*n.y);t.x=i/c,t.y=o/c}else{(n=t).x=n.data.x,n.y=n.data.y;do{u+=r[n.data.index]}while(n=n.next)}t.value=u}function l(t,i,c,f){if(!t.value)return!0;var s=t.x-n.x,l=t.y-n.y,h=f-i,d=s*s+l*l;if(h*h/u<d)return d<a&&(0===s&&(d+=(s=ya())*s),0===l&&(d+=(l=ya())*l),d<o&&(d=Math.sqrt(o*d)),n.vx+=s*t.value*e/d,n.vy+=l*t.value*e/d),!0;if(!(t.length||d>=a)){(t.data!==n||t.next)&&(0===s&&(d+=(s=ya())*s),0===l&&(d+=(l=ya())*l),d<o&&(d=Math.sqrt(o*d)));do{t.data!==n&&(h=r[t.data.index]*e/d,n.vx+=s*h,n.vy+=l*h)}while(t=t.next)}}return c.initialize=function(n){t=n,f()},c.strength=function(t){return arguments.length?(i="function"==typeof t?t:ga(+t),f(),c):i},c.distanceMin=function(t){return arguments.length?(o=t*t,c):Math.sqrt(o)},c.distanceMax=function(t){return arguments.length?(a=t*t,c):Math.sqrt(a)},c.theta=function(t){return arguments.length?(u=t*t,c):Math.sqrt(u)},c},t.forceRadial=function(t,n,e){var r,i,o,a=ga(.1);function u(t){for(var a=0,u=r.length;a<u;++a){var c=r[a],f=c.x-n||1e-6,s=c.y-e||1e-6,l=Math.sqrt(f*f+s*s),h=(o[a]-l)*i[a]*t/l;c.vx+=f*h,c.vy+=s*h}}function c(){if(r){var n,e=r.length;for(i=new Array(e),o=new Array(e),n=0;n<e;++n)o[n]=+t(r[n],n,r),i[n]=isNaN(o[n])?0:+a(r[n],n,r)}}return"function"!=typeof t&&(t=ga(+t)),null==n&&(n=0),null==e&&(e=0),u.initialize=function(t){r=t,c()},u.strength=function(t){return arguments.length?(a="function"==typeof t?t:ga(+t),c(),u):a},u.radius=function(n){return arguments.length?(t="function"==typeof n?n:ga(+n),c(),u):t},u.x=function(t){return arguments.length?(n=+t,u):n},u.y=function(t){return arguments.length?(e=+t,u):e},u},t.forceSimulation=function(t){var n,e=1,r=.001,i=1-Math.pow(r,1/300),o=0,a=.6,u=co(),c=hr(s),f=I("tick","end");function s(){l(),f.call("tick",n),e<r&&(c.stop(),f.call("end",n))}function l(r){var c,f,s=t.length;void 0===r&&(r=1);for(var l=0;l<r;++l)for(e+=(o-e)*i,u.each(function(t){t(e)}),c=0;c<s;++c)null==(f=t[c]).fx?f.x+=f.vx*=a:(f.x=f.fx,f.vx=0),null==f.fy?f.y+=f.vy*=a:(f.y=f.fy,f.vy=0);return n}function h(){for(var n,e=0,r=t.length;e<r;++e){if((n=t[e]).index=e,null!=n.fx&&(n.x=n.fx),null!=n.fy&&(n.y=n.fy),isNaN(n.x)||isNaN(n.y)){var i=za*Math.sqrt(e),o=e*Ra;n.x=i*Math.cos(o),n.y=i*Math.sin(o)}(isNaN(n.vx)||isNaN(n.vy))&&(n.vx=n.vy=0)}}function d(n){return n.initialize&&n.initialize(t),n}return null==t&&(t=[]),h(),n={tick:l,restart:function(){return c.restart(s),n},stop:function(){return c.stop(),n},nodes:function(e){return arguments.length?(t=e,h(),u.each(d),n):t},alpha:function(t){return arguments.length?(e=+t,n):e},alphaMin:function(t){return arguments.length?(r=+t,n):r},alphaDecay:function(t){return arguments.length?(i=+t,n):+i},alphaTarget:function(t){return arguments.length?(o=+t,n):o},velocityDecay:function(t){return arguments.length?(a=1-t,n):1-a},force:function(t,e){return arguments.length>1?(null==e?u.remove(t):u.set(t,d(e)),n):u.get(t)},find:function(n,e,r){var i,o,a,u,c,f=0,s=t.length;for(null==r?r=1/0:r*=r,f=0;f<s;++f)(a=(i=n-(u=t[f]).x)*i+(o=e-u.y)*o)<r&&(c=u,r=a);return c},on:function(t,e){return arguments.length>1?(f.on(t,e),n):f.on(t)}}},t.forceX=function(t){var n,e,r,i=ga(.1);function o(t){for(var i,o=0,a=n.length;o<a;++o)(i=n[o]).vx+=(r[o]-i.x)*e[o]*t}function a(){if(n){var o,a=n.length;for(e=new Array(a),r=new Array(a),o=0;o<a;++o)e[o]=isNaN(r[o]=+t(n[o],o,n))?0:+i(n[o],o,n)}}return"function"!=typeof t&&(t=ga(null==t?0:+t)),o.initialize=function(t){n=t,a()},o.strength=function(t){return arguments.length?(i="function"==typeof t?t:ga(+t),a(),o):i},o.x=function(n){return arguments.length?(t="function"==typeof n?n:ga(+n),a(),o):t},o},t.forceY=function(t){var n,e,r,i=ga(.1);function o(t){for(var i,o=0,a=n.length;o<a;++o)(i=n[o]).vy+=(r[o]-i.y)*e[o]*t}function a(){if(n){var o,a=n.length;for(e=new Array(a),r=new Array(a),o=0;o<a;++o)e[o]=isNaN(r[o]=+t(n[o],o,n))?0:+i(n[o],o,n)}}return"function"!=typeof t&&(t=ga(null==t?0:+t)),o.initialize=function(t){n=t,a()},o.strength=function(t){return arguments.length?(i="function"==typeof t?t:ga(+t),a(),o):i},o.y=function(n){return arguments.length?(t="function"==typeof n?n:ga(+n),a(),o):t},o},t.formatDefaultLocale=Ga,t.formatLocale=Va,t.formatSpecifier=Oa,t.geoAlbers=el,t.geoAlbersUsa=function(){var t,n,e,r,i,o,a=el(),u=nl().rotate([154,0]).center([-2,58.5]).parallels([55,65]),c=nl().rotate([157,0]).center([-3,19.9]).parallels([8,18]),f={point:function(t,n){o=[t,n]}};function s(t){var n=t[0],a=t[1];return o=null,e.point(n,a),o||(r.point(n,a),o)||(i.point(n,a),o)}function l(){return t=n=null,s}return s.invert=function(t){var n=a.scale(),e=a.translate(),r=(t[0]-e[0])/n,i=(t[1]-e[1])/n;return(i>=.12&&i<.234&&r>=-.425&&r<-.214?u:i>=.166&&i<.234&&r>=-.214&&r<-.115?c:a).invert(t)},s.stream=function(e){return t&&n===e?t:(r=[a.stream(n=e),u.stream(e),c.stream(e)],i=r.length,t={point:function(t,n){for(var e=-1;++e<i;)r[e].point(t,n)},sphere:function(){for(var t=-1;++t<i;)r[t].sphere()},lineStart:function(){for(var t=-1;++t<i;)r[t].lineStart()},lineEnd:function(){for(var t=-1;++t<i;)r[t].lineEnd()},polygonStart:function(){for(var t=-1;++t<i;)r[t].polygonStart()},polygonEnd:function(){for(var t=-1;++t<i;)r[t].polygonEnd()}});var r,i},s.precision=function(t){return arguments.length?(a.precision(t),u.precision(t),c.precision(t),l()):a.precision()},s.scale=function(t){return arguments.length?(a.scale(t),u.scale(.35*t),c.scale(t),s.translate(a.translate())):a.scale()},s.translate=function(t){if(!arguments.length)return a.translate();var n=a.scale(),o=+t[0],s=+t[1];return e=a.translate(t).clipExtent([[o-.455*n,s-.238*n],[o+.455*n,s+.238*n]]).stream(f),r=u.translate([o-.307*n,s+.201*n]).clipExtent([[o-.425*n+nu,s+.12*n+nu],[o-.214*n-nu,s+.234*n-nu]]).stream(f),i=c.translate([o-.205*n,s+.212*n]).clipExtent([[o-.214*n+nu,s+.166*n+nu],[o-.115*n-nu,s+.234*n-nu]]).stream(f),l()},s.fitExtent=function(t,n){return Is(s,t,n)},s.fitSize=function(t,n){return Hs(s,t,n)},s.fitWidth=function(t,n){return js(s,t,n)},s.fitHeight=function(t,n){return Xs(s,t,n)},s.scale(1070)},t.geoArea=function(t){return Uu.reset(),Cu(t,Ou),2*Uu},t.geoAzimuthalEqualArea=function(){return Qs(ol).scale(124.75).clipAngle(179.999)},t.geoAzimuthalEqualAreaRaw=ol,t.geoAzimuthalEquidistant=function(){return Qs(al).scale(79.4188).clipAngle(179.999)},t.geoAzimuthalEquidistantRaw=al,t.geoBounds=function(t){var n,e,r,i,o,a,u;if(Ju=Ku=-(Zu=Qu=1/0),ic=[],Cu(t,Mc),e=ic.length){for(ic.sort(zc),n=1,o=[r=ic[0]];n<e;++n)Rc(r,(i=ic[n])[0])||Rc(r,i[1])?(Pc(r[0],i[1])>Pc(r[0],r[1])&&(r[1]=i[1]),Pc(i[0],r[1])>Pc(r[0],r[1])&&(r[0]=i[0])):o.push(r=i);for(a=-1/0,n=0,r=o[e=o.length-1];n<=e;r=i,++n)i=o[n],(u=Pc(r[1],i[0]))>a&&(a=u,Zu=i[0],Ku=r[1])}return ic=oc=null,Zu===1/0||Qu===1/0?[[NaN,NaN],[NaN,NaN]]:[[Zu,Qu],[Ku,Ju]]},t.geoCentroid=function(t){ac=uc=cc=fc=sc=lc=hc=dc=pc=vc=gc=0,Cu(t,Dc);var n=pc,e=vc,r=gc,i=n*n+e*e+r*r;return i<eu&&(n=lc,e=hc,r=dc,uc<nu&&(n=cc,e=fc,r=sc),(i=n*n+e*e+r*r)<eu)?[NaN,NaN]:[lu(e,n)*uu,wu(r/bu(i))*uu]},t.geoCircle=function(){var t,n,e=Xc([0,0]),r=Xc(90),i=Xc(6),o={point:function(e,r){t.push(e=n(e,r)),e[0]*=uu,e[1]*=uu}};function a(){var a=e.apply(this,arguments),u=r.apply(this,arguments)*cu,c=i.apply(this,arguments)*cu;return t=[],n=$c(-a[0]*cu,-a[1]*cu,0).invert,Jc(o,u,c,1),a={type:"Polygon",coordinates:[t]},t=n=null,a}return a.center=function(t){return arguments.length?(e="function"==typeof t?t:Xc([+t[0],+t[1]]),a):e},a.radius=function(t){return arguments.length?(r="function"==typeof t?t:Xc(+t),a):r},a.precision=function(t){return arguments.length?(i="function"==typeof t?t:Xc(+t),a):i},a},t.geoClipAntimeridian=df,t.geoClipCircle=pf,t.geoClipExtent=function(){var t,n,e,r=0,i=0,o=960,a=500;return e={stream:function(e){return t&&n===e?t:t=yf(r,i,o,a)(n=e)},extent:function(u){return arguments.length?(r=+u[0][0],i=+u[0][1],o=+u[1][0],a=+u[1][1],t=n=null,e):[[r,i],[o,a]]}}},t.geoClipRectangle=yf,t.geoConicConformal=function(){return Js(sl).scale(109.5).parallels([30,30])},t.geoConicConformalRaw=sl,t.geoConicEqualArea=nl,t.geoConicEqualAreaRaw=tl,t.geoConicEquidistant=function(){return Js(hl).scale(131.154).center([0,13.9389])},t.geoConicEquidistantRaw=hl,t.geoContains=function(t,n){return(t&&Cf.hasOwnProperty(t.type)?Cf[t.type]:zf)(t,n)},t.geoDistance=Ef,t.geoEqualEarth=function(){return Qs(_l).scale(177.158)},t.geoEqualEarthRaw=_l,t.geoEquirectangular=function(){return Qs(ll).scale(152.63)},t.geoEquirectangularRaw=ll,t.geoGnomonic=function(){return Qs(bl).scale(144.049).clipAngle(60)},t.geoGnomonicRaw=bl,t.geoGraticule=Ff,t.geoGraticule10=function(){return Ff()()},t.geoIdentity=function(){var t,n,e,r,i,o,a,u=1,c=0,f=0,s=1,l=1,h=0,d=null,p=1,v=1,g=Bs({point:function(t,n){var e=b([t,n]);this.stream.point(e[0],e[1])}}),y=Yf;function _(){return p=u*s,v=u*l,o=a=null,b}function b(e){var r=e[0]*p,i=e[1]*v;if(h){var o=i*t-r*n;r=r*t+i*n,i=o}return[r+c,i+f]}return b.invert=function(e){var r=e[0]-c,i=e[1]-f;if(h){var o=i*t+r*n;r=r*t-i*n,i=o}return[r/p,i/v]},b.stream=function(t){return o&&a===t?o:o=g(y(a=t))},b.postclip=function(t){return arguments.length?(y=t,d=e=r=i=null,_()):y},b.clipExtent=function(t){return arguments.length?(y=null==t?(d=e=r=i=null,Yf):yf(d=+t[0][0],e=+t[0][1],r=+t[1][0],i=+t[1][1]),_()):null==d?null:[[d,e],[r,i]]},b.scale=function(t){return arguments.length?(u=+t,_()):u},b.translate=function(t){return arguments.length?(c=+t[0],f=+t[1],_()):[c,f]},b.angle=function(e){return arguments.length?(n=yu(h=e%360*cu),t=hu(h),_()):h*uu},b.reflectX=function(t){return arguments.length?(s=t?-1:1,_()):s<0},b.reflectY=function(t){return arguments.length?(l=t?-1:1,_()):l<0},b.fitExtent=function(t,n){return Is(b,t,n)},b.fitSize=function(t,n){return Hs(b,t,n)},b.fitWidth=function(t,n){return js(b,t,n)},b.fitHeight=function(t,n){return Xs(b,t,n)},b},t.geoInterpolate=function(t,n){var e=t[0]*cu,r=t[1]*cu,i=n[0]*cu,o=n[1]*cu,a=hu(r),u=yu(r),c=hu(o),f=yu(o),s=a*hu(e),l=a*yu(e),h=c*hu(i),d=c*yu(i),p=2*wu(bu(Mu(o-r)+a*c*Mu(i-e))),v=yu(p),g=p?function(t){var n=yu(t*=p)/v,e=yu(p-t)/v,r=e*s+n*h,i=e*l+n*d,o=e*u+n*f;return[lu(i,r)*uu,lu(o,bu(r*r+i*i))*uu]}:function(){return[e*uu,r*uu]};return g.distance=p,g},t.geoLength=Af,t.geoMercator=function(){return cl(ul).scale(961/au)},t.geoMercatorRaw=ul,t.geoNaturalEarth1=function(){return Qs(ml).scale(175.295)},t.geoNaturalEarth1Raw=ml,t.geoOrthographic=function(){return Qs(xl).scale(249.5).clipAngle(90+nu)},t.geoOrthographicRaw=xl,t.geoPath=function(t,n){var e,r,i=4.5;function o(t){return t&&("function"==typeof i&&r.pointRadius(+i.apply(this,arguments)),Cu(t,e(r))),r.result()}return o.area=function(t){return Cu(t,e($f)),$f.result()},o.measure=function(t){return Cu(t,e(Ds)),Ds.result()},o.bounds=function(t){return Cu(t,e(rs)),rs.result()},o.centroid=function(t){return Cu(t,e(ys)),ys.result()},o.projection=function(n){return arguments.length?(e=null==n?(t=null,Yf):(t=n).stream,o):t},o.context=function(t){return arguments.length?(r=null==t?(n=null,new Us):new Ss(n=t),"function"!=typeof i&&r.pointRadius(i),o):n},o.pointRadius=function(t){return arguments.length?(i="function"==typeof t?t:(r.pointRadius(+t),+t),o):i},o.projection(t).context(n)},t.geoProjection=Qs,t.geoProjectionMutator=Ks,t.geoRotation=Kc,t.geoStereographic=function(){return Qs(wl).scale(250).clipAngle(142)},t.geoStereographicRaw=wl,t.geoStream=Cu,t.geoTransform=function(t){return{stream:Bs(t)}},t.geoTransverseMercator=function(){var t=cl(Ml),n=t.center,e=t.rotate;return t.center=function(t){return arguments.length?n([-t[1],t[0]]):[(t=n())[1],-t[0]]},t.rotate=function(t){return arguments.length?e([t[0],t[1],t.length>2?t[2]+90:90]):[(t=e())[0],t[1],t[2]-90]},e([0,0,90]).scale(159.155)},t.geoTransverseMercatorRaw=Ml,t.gray=function(t,n){return new Bn(t,0,0,null==n?1:n)},t.hcl=Xn,t.hierarchy=kl,t.histogram=function(){var t=v,n=s,e=M;function r(r){var o,a,u=r.length,c=new Array(u);for(o=0;o<u;++o)c[o]=t(r[o],o,r);var f=n(c),s=f[0],l=f[1],h=e(c,s,l);Array.isArray(h)||(h=w(s,l,h),h=g(Math.ceil(s/h)*h,l,h));for(var d=h.length;h[0]<=s;)h.shift(),--d;for(;h[d-1]>l;)h.pop(),--d;var p,v=new Array(d+1);for(o=0;o<=d;++o)(p=v[o]=[]).x0=o>0?h[o-1]:s,p.x1=o<d?h[o]:l;for(o=0;o<u;++o)s<=(a=c[o])&&a<=l&&v[i(h,a,0,d)].push(r[o]);return v}return r.value=function(n){return arguments.length?(t="function"==typeof n?n:p(n),r):t},r.domain=function(t){return arguments.length?(n="function"==typeof t?t:p([t[0],t[1]]),r):n},r.thresholds=function(t){return arguments.length?(e="function"==typeof t?t:Array.isArray(t)?p(h.call(t)):p(t),r):e},r},t.hsl=Tn,t.html=pa,t.image=function(t,n){return new Promise(function(e,r){var i=new Image;for(var o in n)i[o]=n[o];i.onerror=r,i.onload=function(){e(i)},i.src=t})},t.interpolate=Te,t.interpolateArray=function(t,n){return(ye(n)?ge:_e)(t,n)},t.interpolateBasis=oe,t.interpolateBasisClosed=ae,t.interpolateBlues=Qg,t.interpolateBrBG=fg,t.interpolateBuGn=Sg,t.interpolateBuPu=Eg,t.interpolateCividis=function(t){return t=Math.max(0,Math.min(1,t)),"rgb("+Math.max(0,Math.min(255,Math.round(-4.54-t*(35.34-t*(2381.73-t*(6402.7-t*(7024.72-2710.57*t)))))))+", "+Math.max(0,Math.min(255,Math.round(32.49+t*(170.73+t*(52.82-t*(131.46-t*(176.58-67.37*t)))))))+", "+Math.max(0,Math.min(255,Math.round(81.24+t*(442.36-t*(2482.43-t*(6167.24-t*(6614.94-2475.67*t)))))))+")"},t.interpolateCool=sy,t.interpolateCubehelix=Ze,t.interpolateCubehelixDefault=cy,t.interpolateCubehelixLong=Qe,t.interpolateDate=be,t.interpolateDiscrete=function(t){var n=t.length;return function(e){return t[Math.max(0,Math.min(n-1,Math.floor(e*n)))]}},t.interpolateGnBu=Pg,t.interpolateGreens=Jg,t.interpolateGreys=ny,t.interpolateHcl=Ge,t.interpolateHclLong=$e,t.interpolateHsl=je,t.interpolateHslLong=Xe,t.interpolateHue=function(t,n){var e=fe(+t,+n);return function(t){var n=e(t);return n-360*Math.floor(n/360)}},t.interpolateInferno=_y,t.interpolateLab=function(t,n){var e=le((t=On(t)).l,(n=On(n)).l),r=le(t.a,n.a),i=le(t.b,n.b),o=le(t.opacity,n.opacity);return function(n){return t.l=e(n),t.a=r(n),t.b=i(n),t.opacity=o(n),t+""}},t.interpolateMagma=yy,t.interpolateNumber=me,t.interpolateNumberArray=ge,t.interpolateObject=xe,t.interpolateOrRd=Rg,t.interpolateOranges=uy,t.interpolatePRGn=lg,t.interpolatePiYG=dg,t.interpolatePlasma=by,t.interpolatePuBu=Ug,t.interpolatePuBuGn=qg,t.interpolatePuOr=vg,t.interpolatePuRd=Bg,t.interpolatePurples=ry,t.interpolateRainbow=function(t){(t<0||t>1)&&(t-=Math.floor(t));var n=Math.abs(t-.5);return ly.h=360*t-100,ly.s=1.5-1.5*n,ly.l=.8-.9*n,ly+""},t.interpolateRdBu=yg,t.interpolateRdGy=bg,t.interpolateRdPu=Yg,t.interpolateRdYlBu=xg,t.interpolateRdYlGn=Mg,t.interpolateReds=oy,t.interpolateRgb=he,t.interpolateRgbBasis=pe,t.interpolateRgbBasisClosed=ve,t.interpolateRound=Ae,t.interpolateSinebow=function(t){var n;return t=(.5-t)*Math.PI,hy.r=255*(n=Math.sin(t))*n,hy.g=255*(n=Math.sin(t+dy))*n,hy.b=255*(n=Math.sin(t+py))*n,hy+""},t.interpolateSpectral=Tg,t.interpolateString=Ne,t.interpolateTransformCss=qe,t.interpolateTransformSvg=Le,t.interpolateTurbo=function(t){return t=Math.max(0,Math.min(1,t)),"rgb("+Math.max(0,Math.min(255,Math.round(34.61+t*(1172.33-t*(10793.56-t*(33300.12-t*(38394.49-14825.05*t)))))))+", "+Math.max(0,Math.min(255,Math.round(23.31+t*(557.33+t*(1225.33-t*(3574.96-t*(1073.77+707.56*t)))))))+", "+Math.max(0,Math.min(255,Math.round(27.2+t*(3211.1-t*(15327.97-t*(27814-t*(22569.18-6838.66*t)))))))+")"},t.interpolateViridis=gy,t.interpolateWarm=fy,t.interpolateYlGn=Xg,t.interpolateYlGnBu=Hg,t.interpolateYlOrBr=Gg,t.interpolateYlOrRd=Wg,t.interpolateZoom=Ie,t.interrupt=Pr,t.interval=function(t,n,e){var r=new lr,i=n;return null==n?(r.restart(t,n,e),r):(n=+n,e=null==e?fr():+e,r.restart(function o(a){a+=i,r.restart(o,i+=n,e),t(a)},n,e),r)},t.isoFormat=Rv,t.isoParse=Dv,t.json=function(t,n){return fetch(t,n).then(la)},t.keys=function(t){var n=[];for(var e in t)n.push(e);return n},t.lab=On,t.lch=function(t,n,e,r){return 1===arguments.length?jn(t):new Vn(e,n,t,null==r?1:r)},t.line=Hy,t.lineRadial=Qy,t.linkHorizontal=function(){return r_(i_)},t.linkRadial=function(){var t=r_(a_);return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t},t.linkVertical=function(){return r_(o_)},t.local=qt,t.map=co,t.matcher=nt,t.max=T,t.mean=function(t,n){var e,r=t.length,i=r,o=-1,a=0;if(null==n)for(;++o<r;)isNaN(e=u(t[o]))?--i:a+=e;else for(;++o<r;)isNaN(e=u(n(t[o],o,t)))?--i:a+=e;if(i)return a/i},t.median=function(t,e){var r,i=t.length,o=-1,a=[];if(null==e)for(;++o<i;)isNaN(r=u(t[o]))||a.push(r);else for(;++o<i;)isNaN(r=u(e(t[o],o,t)))||a.push(r);return N(a.sort(n),.5)},t.merge=A,t.min=S,t.mouse=Bt,t.namespace=W,t.namespaces=$,t.nest=function(){var t,n,e,r=[],i=[];function o(e,i,a,u){if(i>=r.length)return null!=t&&e.sort(t),null!=n?n(e):e;for(var c,f,s,l=-1,h=e.length,d=r[i++],p=co(),v=a();++l<h;)(s=p.get(c=d(f=e[l])+""))?s.push(f):p.set(c,[f]);return p.each(function(t,n){u(v,n,o(t,i,a,u))}),v}return e={object:function(t){return o(t,0,fo,so)},map:function(t){return o(t,0,lo,ho)},entries:function(t){return function t(e,o){if(++o>r.length)return e;var a,u=i[o-1];return null!=n&&o>=r.length?a=e.entries():(a=[],e.each(function(n,e){a.push({key:e,values:t(n,o)})})),null!=u?a.sort(function(t,n){return u(t.key,n.key)}):a}(o(t,0,lo,ho),0)},key:function(t){return r.push(t),e},sortKeys:function(t){return i[r.length-1]=t,e},sortValues:function(n){return t=n,e},rollup:function(t){return n=t,e}}},t.now=fr,t.pack=function(){var t=null,n=1,e=1,r=Wl;function i(i){return i.x=n/2,i.y=e/2,t?i.eachBefore(Kl(t)).eachAfter(Jl(r,.5)).eachBefore(th(1)):i.eachBefore(Kl(Ql)).eachAfter(Jl(Wl,1)).eachAfter(Jl(r,i.r/Math.min(n,e))).eachBefore(th(Math.min(n,e)/(2*i.r))),i}return i.radius=function(n){return arguments.length?(t=Gl(n),i):t},i.size=function(t){return arguments.length?(n=+t[0],e=+t[1],i):[n,e]},i.padding=function(t){return arguments.length?(r="function"==typeof t?t:Zl(+t),i):r},i},t.packEnclose=Dl,t.packSiblings=function(t){return Vl(t),t},t.pairs=function(t,n){null==n&&(n=a);for(var e=0,r=t.length-1,i=t[0],o=new Array(r<0?0:r);e<r;)o[e]=n(i,i=t[++e]);return o},t.partition=function(){var t=1,n=1,e=0,r=!1;function i(i){var o=i.height+1;return i.x0=i.y0=e,i.x1=t,i.y1=n/o,i.eachBefore(function(t,n){return function(r){r.children&&eh(r,r.x0,t*(r.depth+1)/n,r.x1,t*(r.depth+2)/n);var i=r.x0,o=r.y0,a=r.x1-e,u=r.y1-e;a<i&&(i=a=(i+a)/2),u<o&&(o=u=(o+u)/2),r.x0=i,r.y0=o,r.x1=a,r.y1=u}}(n,o)),r&&i.eachBefore(nh),i}return i.round=function(t){return arguments.length?(r=!!t,i):r},i.size=function(e){return arguments.length?(t=+e[0],n=+e[1],i):[t,n]},i.padding=function(t){return arguments.length?(e=+t,i):e},i},t.path=no,t.permute=function(t,n){for(var e=n.length,r=new Array(e);e--;)r[e]=t[n[e]];return r},t.pie=function(){var t=Vy,n=Xy,e=null,r=my(0),i=my(Py),o=my(0);function a(a){var u,c,f,s,l,h=a.length,d=0,p=new Array(h),v=new Array(h),g=+r.apply(this,arguments),y=Math.min(Py,Math.max(-Py,i.apply(this,arguments)-g)),_=Math.min(Math.abs(y)/h,o.apply(this,arguments)),b=_*(y<0?-1:1);for(u=0;u<h;++u)(l=v[p[u]=u]=+t(a[u],u,a))>0&&(d+=l);for(null!=n?p.sort(function(t,e){return n(v[t],v[e])}):null!=e&&p.sort(function(t,n){return e(a[t],a[n])}),u=0,f=d?(y-h*b)/d:0;u<h;++u,g=s)c=p[u],s=g+((l=v[c])>0?l*f:0)+b,v[c]={data:a[c],index:u,value:l,startAngle:g,endAngle:s,padAngle:_};return v}return a.value=function(n){return arguments.length?(t="function"==typeof n?n:my(+n),a):t},a.sortValues=function(t){return arguments.length?(n=t,e=null,a):n},a.sort=function(t){return arguments.length?(e=t,n=null,a):e},a.startAngle=function(t){return arguments.length?(r="function"==typeof t?t:my(+t),a):r},a.endAngle=function(t){return arguments.length?(i="function"==typeof t?t:my(+t),a):i},a.padAngle=function(t){return arguments.length?(o="function"==typeof t?t:my(+t),a):o},a},t.piecewise=function(t,n){for(var e=0,r=n.length-1,i=n[0],o=new Array(r<0?0:r);e<r;)o[e]=t(i,i=n[++e]);return function(t){var n=Math.max(0,Math.min(r-1,Math.floor(t*=r)));return o[n](t-n)}},t.pointRadial=Jy,t.polygonArea=function(t){for(var n,e=-1,r=t.length,i=t[r-1],o=0;++e<r;)n=i,i=t[e],o+=n[1]*i[0]-n[0]*i[1];return o/2},t.polygonCentroid=function(t){for(var n,e,r=-1,i=t.length,o=0,a=0,u=t[i-1],c=0;++r<i;)n=u,u=t[r],c+=e=n[0]*u[1]-u[0]*n[1],o+=(n[0]+u[0])*e,a+=(n[1]+u[1])*e;return[o/(c*=3),a/c]},t.polygonContains=function(t,n){for(var e,r,i=t.length,o=t[i-1],a=n[0],u=n[1],c=o[0],f=o[1],s=!1,l=0;l<i;++l)e=(o=t[l])[0],(r=o[1])>u!=f>u&&a<(c-e)*(u-r)/(f-r)+e&&(s=!s),c=e,f=r;return s},t.polygonHull=function(t){if((e=t.length)<3)return null;var n,e,r=new Array(e),i=new Array(e);for(n=0;n<e;++n)r[n]=[+t[n][0],+t[n][1],n];for(r.sort(mh),n=0;n<e;++n)i[n]=[r[n][0],-r[n][1]];var o=xh(r),a=xh(i),u=a[0]===o[0],c=a[a.length-1]===o[o.length-1],f=[];for(n=o.length-1;n>=0;--n)f.push(t[r[o[n]][2]]);for(n=+u;n<a.length-c;++n)f.push(t[r[a[n]][2]]);return f},t.polygonLength=function(t){for(var n,e,r=-1,i=t.length,o=t[i-1],a=o[0],u=o[1],c=0;++r<i;)n=a,e=u,n-=a=(o=t[r])[0],e-=u=o[1],c+=Math.sqrt(n*n+e*e);return c},t.precisionFixed=$a,t.precisionPrefix=Wa,t.precisionRound=Za,t.quadtree=wa,t.quantile=N,t.quantize=function(t,n){for(var e=new Array(n),r=0;r<n;++r)e[r]=t(r/(n-1));return e},t.radialArea=Ky,t.radialLine=Qy,t.randomBates=Sh,t.randomExponential=kh,t.randomIrwinHall=Ah,t.randomLogNormal=Th,t.randomNormal=Nh,t.randomUniform=Mh,t.range=g,t.rgb=_n,t.ribbon=function(){var t=eo,n=ro,e=io,r=oo,i=ao,o=null;function a(){var a,u=Wi.call(arguments),c=t.apply(this,u),f=n.apply(this,u),s=+e.apply(this,(u[0]=c,u)),l=r.apply(this,u)-Xi,h=i.apply(this,u)-Xi,d=s*Ii(l),p=s*Hi(l),v=+e.apply(this,(u[0]=f,u)),g=r.apply(this,u)-Xi,y=i.apply(this,u)-Xi;if(o||(o=a=no()),o.moveTo(d,p),o.arc(0,0,s,l,h),l===g&&h===y||(o.quadraticCurveTo(0,0,v*Ii(g),v*Hi(g)),o.arc(0,0,v,g,y)),o.quadraticCurveTo(0,0,d,p),o.closePath(),a)return o=null,a+""||null}return a.radius=function(t){return arguments.length?(e="function"==typeof t?t:Zi(+t),a):e},a.startAngle=function(t){return arguments.length?(r="function"==typeof t?t:Zi(+t),a):r},a.endAngle=function(t){return arguments.length?(i="function"==typeof t?t:Zi(+t),a):i},a.source=function(n){return arguments.length?(t=n,a):t},a.target=function(t){return arguments.length?(n=t,a):n},a.context=function(t){return arguments.length?(o=null==t?null:t,a):o},a},t.scaleBand=Lh,t.scaleDiverging=function t(){var n=$h($v()(Bh));return n.copy=function(){return Vv(n,t())},Ch.apply(n,arguments)},t.scaleDivergingLog=function t(){var n=ed($v()).domain([.1,1,10]);return n.copy=function(){return Vv(n,t()).base(n.base())},Ch.apply(n,arguments)},t.scaleDivergingPow=Wv,t.scaleDivergingSqrt=function(){return Wv.apply(null,arguments).exponent(.5)},t.scaleDivergingSymlog=function t(){var n=od($v());return n.copy=function(){return Vv(n,t()).constant(n.constant())},Ch.apply(n,arguments)},t.scaleIdentity=function t(n){var e;function r(t){return isNaN(t=+t)?e:t}return r.invert=r,r.domain=r.range=function(t){return arguments.length?(n=zh.call(t,Uh),r):n.slice()},r.unknown=function(t){return arguments.length?(e=t,r):e},r.copy=function(){return t(n).unknown(e)},n=arguments.length?zh.call(n,Uh):[0,1],$h(r)},t.scaleImplicit=Dh,t.scaleLinear=function t(){var n=Vh(Bh,Bh);return n.copy=function(){return jh(n,t())},Eh.apply(n,arguments),$h(n)},t.scaleLog=function t(){var n=ed(Xh()).domain([1,10]);return n.copy=function(){return jh(n,t()).base(n.base())},Eh.apply(n,arguments),n},t.scaleOrdinal=qh,t.scalePoint=function(){return function t(n){var e=n.copy;return n.padding=n.paddingOuter,delete n.paddingInner,delete n.paddingOuter,n.copy=function(){return t(e())},n}(Lh.apply(null,arguments).paddingInner(1))},t.scalePow=sd,t.scaleQuantile=function t(){var e,r=[],o=[],a=[];function u(){var t=0,n=Math.max(1,o.length);for(a=new Array(n-1);++t<n;)a[t-1]=N(r,t/n);return c}function c(t){return isNaN(t=+t)?e:o[i(a,t)]}return c.invertExtent=function(t){var n=o.indexOf(t);return n<0?[NaN,NaN]:[n>0?a[n-1]:r[0],n<a.length?a[n]:r[r.length-1]]},c.domain=function(t){if(!arguments.length)return r.slice();r=[];for(var e,i=0,o=t.length;i<o;++i)null==(e=t[i])||isNaN(e=+e)||r.push(e);return r.sort(n),u()},c.range=function(t){return arguments.length?(o=Rh.call(t),u()):o.slice()},c.unknown=function(t){return arguments.length?(e=t,c):e},c.quantiles=function(){return a.slice()},c.copy=function(){return t().domain(r).range(o).unknown(e)},Eh.apply(c,arguments)},t.scaleQuantize=function t(){var n,e=0,r=1,o=1,a=[.5],u=[0,1];function c(t){return t<=t?u[i(a,t,0,o)]:n}function f(){var t=-1;for(a=new Array(o);++t<o;)a[t]=((t+1)*r-(t-o)*e)/(o+1);return c}return c.domain=function(t){return arguments.length?(e=+t[0],r=+t[1],f()):[e,r]},c.range=function(t){return arguments.length?(o=(u=Rh.call(t)).length-1,f()):u.slice()},c.invertExtent=function(t){var n=u.indexOf(t);return n<0?[NaN,NaN]:n<1?[e,a[0]]:n>=o?[a[o-1],r]:[a[n-1],a[n]]},c.unknown=function(t){return arguments.length?(n=t,c):c},c.thresholds=function(){return a.slice()},c.copy=function(){return t().domain([e,r]).range(u).unknown(n)},Eh.apply($h(c),arguments)},t.scaleSequential=function t(){var n=$h(Xv()(Bh));return n.copy=function(){return Vv(n,t())},Ch.apply(n,arguments)},t.scaleSequentialLog=function t(){var n=ed(Xv()).domain([1,10]);return n.copy=function(){return Vv(n,t()).base(n.base())},Ch.apply(n,arguments)},t.scaleSequentialPow=Gv,t.scaleSequentialQuantile=function t(){var e=[],r=Bh;function o(t){if(!isNaN(t=+t))return r((i(e,t)-1)/(e.length-1))}return o.domain=function(t){if(!arguments.length)return e.slice();e=[];for(var r,i=0,a=t.length;i<a;++i)null==(r=t[i])||isNaN(r=+r)||e.push(r);return e.sort(n),o},o.interpolator=function(t){return arguments.length?(r=t,o):r},o.copy=function(){return t(r).domain(e)},Ch.apply(o,arguments)},t.scaleSequentialSqrt=function(){return Gv.apply(null,arguments).exponent(.5)},t.scaleSequentialSymlog=function t(){var n=od(Xv());return n.copy=function(){return Vv(n,t()).constant(n.constant())},Ch.apply(n,arguments)},t.scaleSqrt=function(){return sd.apply(null,arguments).exponent(.5)},t.scaleSymlog=function t(){var n=od(Xh());return n.copy=function(){return jh(n,t()).constant(n.constant())},Eh.apply(n,arguments)},t.scaleThreshold=function t(){var n,e=[.5],r=[0,1],o=1;function a(t){return t<=t?r[i(e,t,0,o)]:n}return a.domain=function(t){return arguments.length?(e=Rh.call(t),o=Math.min(e.length,r.length-1),a):e.slice()},a.range=function(t){return arguments.length?(r=Rh.call(t),o=Math.min(e.length,r.length-1),a):r.slice()},a.invertExtent=function(t){var n=r.indexOf(t);return[e[n-1],e[n]]},a.unknown=function(t){return arguments.length?(n=t,a):n},a.copy=function(){return t().domain(e).range(r).unknown(n)},Eh.apply(a,arguments)},t.scaleTime=function(){return Eh.apply(jv(Hd,Yd,Sd,Nd,wd,md,_d,pd,t.timeFormat).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)},t.scaleUtc=function(){return Eh.apply(jv(pp,hp,Kd,Wd,Gd,Xd,_d,pd,t.utcFormat).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)},t.scan=function(t,e){if(r=t.length){var r,i,o=0,a=0,u=t[a];for(null==e&&(e=n);++o<r;)(e(i=t[o],u)<0||0!==e(u,u))&&(u=i,a=o);return 0===e(u,u)?a:void 0}},t.schemeAccent=Kv,t.schemeBlues=Zg,t.schemeBrBG=cg,t.schemeBuGn=Ag,t.schemeBuPu=kg,t.schemeCategory10=Qv,t.schemeDark2=Jv,t.schemeGnBu=Cg,t.schemeGreens=Kg,t.schemeGreys=ty,t.schemeOrRd=zg,t.schemeOranges=ay,t.schemePRGn=sg,t.schemePaired=tg,t.schemePastel1=ng,t.schemePastel2=eg,t.schemePiYG=hg,t.schemePuBu=Lg,t.schemePuBuGn=Dg,t.schemePuOr=pg,t.schemePuRd=Og,t.schemePurples=ey,t.schemeRdBu=gg,t.schemeRdGy=_g,t.schemeRdPu=Fg,t.schemeRdYlBu=mg,t.schemeRdYlGn=wg,t.schemeReds=iy,t.schemeSet1=rg,t.schemeSet2=ig,t.schemeSet3=og,t.schemeSpectral=Ng,t.schemeTableau10=ag,t.schemeYlGn=jg,t.schemeYlGnBu=Ig,t.schemeYlOrBr=Vg,t.schemeYlOrRd=$g,t.select=Rt,t.selectAll=function(t){return"string"==typeof t?new Pt([document.querySelectorAll(t)],[document.documentElement]):new Pt([null==t?[]:t],Ct)},t.selection=zt,t.selector=K,t.selectorAll=tt,t.set=go,t.shuffle=function(t,n,e){for(var r,i,o=(null==e?t.length:e)-(n=null==n?0:+n);o;)i=Math.random()*o--|0,r=t[o+n],t[o+n]=t[i+n],t[i+n]=r;return t},t.stack=function(){var t=my([]),n=rb,e=eb,r=ib;function i(i){var o,a,u=t.apply(this,arguments),c=i.length,f=u.length,s=new Array(f);for(o=0;o<f;++o){for(var l,h=u[o],d=s[o]=new Array(c),p=0;p<c;++p)d[p]=l=[0,+r(i[p],h,p,i)],l.data=i[p];d.key=h}for(o=0,a=n(s);o<f;++o)s[a[o]].index=o;return e(s,a),s}return i.keys=function(n){return arguments.length?(t="function"==typeof n?n:my(t_.call(n)),i):t},i.value=function(t){return arguments.length?(r="function"==typeof t?t:my(+t),i):r},i.order=function(t){return arguments.length?(n=null==t?rb:"function"==typeof t?t:my(t_.call(t)),i):n},i.offset=function(t){return arguments.length?(e=null==t?eb:t,i):e},i},t.stackOffsetDiverging=function(t,n){if((u=t.length)>0)for(var e,r,i,o,a,u,c=0,f=t[n[0]].length;c<f;++c)for(o=a=0,e=0;e<u;++e)(i=(r=t[n[e]][c])[1]-r[0])>0?(r[0]=o,r[1]=o+=i):i<0?(r[1]=a,r[0]=a+=i):(r[0]=0,r[1]=i)},t.stackOffsetExpand=function(t,n){if((r=t.length)>0){for(var e,r,i,o=0,a=t[0].length;o<a;++o){for(i=e=0;e<r;++e)i+=t[e][o][1]||0;if(i)for(e=0;e<r;++e)t[e][o][1]/=i}eb(t,n)}},t.stackOffsetNone=eb,t.stackOffsetSilhouette=function(t,n){if((e=t.length)>0){for(var e,r=0,i=t[n[0]],o=i.length;r<o;++r){for(var a=0,u=0;a<e;++a)u+=t[a][r][1]||0;i[r][1]+=i[r][0]=-u/2}eb(t,n)}},t.stackOffsetWiggle=function(t,n){if((i=t.length)>0&&(r=(e=t[n[0]]).length)>0){for(var e,r,i,o=0,a=1;a<r;++a){for(var u=0,c=0,f=0;u<i;++u){for(var s=t[n[u]],l=s[a][1]||0,h=(l-(s[a-1][1]||0))/2,d=0;d<u;++d){var p=t[n[d]];h+=(p[a][1]||0)-(p[a-1][1]||0)}c+=l,f+=h*l}e[a-1][1]+=e[a-1][0]=o,c&&(o-=f/c)}e[a-1][1]+=e[a-1][0]=o,eb(t,n)}},t.stackOrderAppearance=ob,t.stackOrderAscending=ub,t.stackOrderDescending=function(t){return ub(t).reverse()},t.stackOrderInsideOut=function(t){var n,e,r=t.length,i=t.map(cb),o=ob(t),a=0,u=0,c=[],f=[];for(n=0;n<r;++n)e=o[n],a<u?(a+=i[e],c.push(e)):(u+=i[e],f.push(e));return f.reverse().concat(c)},t.stackOrderNone=rb,t.stackOrderReverse=function(t){return rb(t).reverse()},t.stratify=function(){var t=ah,n=uh;function e(e){var r,i,o,a,u,c,f,s=e.length,l=new Array(s),h={};for(i=0;i<s;++i)r=e[i],u=l[i]=new zl(r),null!=(c=t(r,i,e))&&(c+="")&&(h[f=rh+(u.id=c)]=f in h?oh:u);for(i=0;i<s;++i)if(u=l[i],null!=(c=n(e[i],i,e))&&(c+="")){if(!(a=h[rh+c]))throw new Error("missing: "+c);if(a===oh)throw new Error("ambiguous: "+c);a.children?a.children.push(u):a.children=[u],u.parent=a}else{if(o)throw new Error("multiple roots");o=u}if(!o)throw new Error("no root");if(o.parent=ih,o.eachBefore(function(t){t.depth=t.parent.depth+1,--s}).eachBefore(Pl),o.parent=null,s>0)throw new Error("cycle");return o}return e.id=function(n){return arguments.length?(t=$l(n),e):t},e.parentId=function(t){return arguments.length?(n=$l(t),e):n},e},t.style=ft,t.sum=function(t,n){var e,r=t.length,i=-1,o=0;if(null==n)for(;++i<r;)(e=+t[i])&&(o+=e);else for(;++i<r;)(e=+n(t[i],i,t))&&(o+=e);return o},t.svg=va,t.symbol=function(){var t=my(u_),n=my(64),e=null;function r(){var r;if(e||(e=r=no()),t.apply(this,arguments).draw(e,+n.apply(this,arguments)),r)return e=null,r+""||null}return r.type=function(n){return arguments.length?(t="function"==typeof n?n:my(n),r):t},r.size=function(t){return arguments.length?(n="function"==typeof t?t:my(+t),r):n},r.context=function(t){return arguments.length?(e=null==t?null:t,r):e},r},t.symbolCircle=u_,t.symbolCross=c_,t.symbolDiamond=l_,t.symbolSquare=g_,t.symbolStar=v_,t.symbolTriangle=__,t.symbolWye=w_,t.symbols=M_,t.text=ua,t.thresholdFreedmanDiaconis=function(t,e,r){return t=d.call(t,u).sort(n),Math.ceil((r-e)/(2*(N(t,.75)-N(t,.25))*Math.pow(t.length,-1/3)))},t.thresholdScott=function(t,n,e){return Math.ceil((e-n)/(3.5*f(t)*Math.pow(t.length,-1/3)))},t.thresholdSturges=M,t.tickFormat=Gh,t.tickIncrement=x,t.tickStep=w,t.ticks=m,t.timeDay=Nd,t.timeDays=Td,t.timeFormatDefaultLocale=zv,t.timeFormatLocale=bp,t.timeFriday=zd,t.timeFridays=Bd,t.timeHour=wd,t.timeHours=Md,t.timeInterval=dd,t.timeMillisecond=pd,t.timeMilliseconds=vd,t.timeMinute=md,t.timeMinutes=xd,t.timeMonday=kd,t.timeMondays=qd,t.timeMonth=Yd,t.timeMonths=Id,t.timeSaturday=Rd,t.timeSaturdays=Fd,t.timeSecond=_d,t.timeSeconds=bd,t.timeSunday=Sd,t.timeSundays=Dd,t.timeThursday=Pd,t.timeThursdays=Od,t.timeTuesday=Ed,t.timeTuesdays=Ld,t.timeWednesday=Cd,t.timeWednesdays=Ud,t.timeWeek=Sd,t.timeWeeks=Dd,t.timeYear=Hd,t.timeYears=jd,t.timeout=yr,t.timer=hr,t.timerFlush=dr,t.touch=Ft,t.touches=function(t,n){null==n&&(n=Ut().touches);for(var e=0,r=n?n.length:0,i=new Array(r);e<r;++e)i[e]=Ot(t,n[e]);return i},t.transition=Or,t.transpose=k,t.tree=function(){var t=ch,n=1,e=1,r=null;function i(i){var c=function(t){for(var n,e,r,i,o,a=new dh(t,0),u=[a];n=u.pop();)if(r=n._.children)for(n.children=new Array(o=r.length),i=o-1;i>=0;--i)u.push(e=n.children[i]=new dh(r[i],i)),e.parent=n;return(a.parent=new dh(null,0)).children=[a],a}(i);if(c.eachAfter(o),c.parent.m=-c.z,c.eachBefore(a),r)i.eachBefore(u);else{var f=i,s=i,l=i;i.eachBefore(function(t){t.x<f.x&&(f=t),t.x>s.x&&(s=t),t.depth>l.depth&&(l=t)});var h=f===s?1:t(f,s)/2,d=h-f.x,p=n/(s.x+h+d),v=e/(l.depth||1);i.eachBefore(function(t){t.x=(t.x+d)*p,t.y=t.depth*v})}return i}function o(n){var e=n.children,r=n.parent.children,i=n.i?r[n.i-1]:null;if(e){!function(t){for(var n,e=0,r=0,i=t.children,o=i.length;--o>=0;)(n=i[o]).z+=e,n.m+=e,e+=n.s+(r+=n.c)}(n);var o=(e[0].z+e[e.length-1].z)/2;i?(n.z=i.z+t(n._,i._),n.m=n.z-o):n.z=o}else i&&(n.z=i.z+t(n._,i._));n.parent.A=function(n,e,r){if(e){for(var i,o=n,a=n,u=e,c=o.parent.children[0],f=o.m,s=a.m,l=u.m,h=c.m;u=sh(u),o=fh(o),u&&o;)c=fh(c),(a=sh(a)).a=n,(i=u.z+l-o.z-f+t(u._,o._))>0&&(lh(hh(u,n,r),n,i),f+=i,s+=i),l+=u.m,f+=o.m,h+=c.m,s+=a.m;u&&!sh(a)&&(a.t=u,a.m+=l-s),o&&!fh(c)&&(c.t=o,c.m+=f-h,r=n)}return r}(n,i,n.parent.A||r[0])}function a(t){t._.x=t.z+t.parent.m,t.m+=t.parent.m}function u(t){t.x*=n,t.y=t.depth*e}return i.separation=function(n){return arguments.length?(t=n,i):t},i.size=function(t){return arguments.length?(r=!1,n=+t[0],e=+t[1],i):r?null:[n,e]},i.nodeSize=function(t){return arguments.length?(r=!0,n=+t[0],e=+t[1],i):r?[n,e]:null},i},t.treemap=function(){var t=yh,n=!1,e=1,r=1,i=[0],o=Wl,a=Wl,u=Wl,c=Wl,f=Wl;function s(t){return t.x0=t.y0=0,t.x1=e,t.y1=r,t.eachBefore(l),i=[0],n&&t.eachBefore(nh),t}function l(n){var e=i[n.depth],r=n.x0+e,s=n.y0+e,l=n.x1-e,h=n.y1-e;l<r&&(r=l=(r+l)/2),h<s&&(s=h=(s+h)/2),n.x0=r,n.y0=s,n.x1=l,n.y1=h,n.children&&(e=i[n.depth+1]=o(n)/2,r+=f(n)-e,s+=a(n)-e,(l-=u(n)-e)<r&&(r=l=(r+l)/2),(h-=c(n)-e)<s&&(s=h=(s+h)/2),t(n,r,s,l,h))}return s.round=function(t){return arguments.length?(n=!!t,s):n},s.size=function(t){return arguments.length?(e=+t[0],r=+t[1],s):[e,r]},s.tile=function(n){return arguments.length?(t=$l(n),s):t},s.padding=function(t){return arguments.length?s.paddingInner(t).paddingOuter(t):s.paddingInner()},s.paddingInner=function(t){return arguments.length?(o="function"==typeof t?t:Zl(+t),s):o},s.paddingOuter=function(t){return arguments.length?s.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t):s.paddingTop()},s.paddingTop=function(t){return arguments.length?(a="function"==typeof t?t:Zl(+t),s):a},s.paddingRight=function(t){return arguments.length?(u="function"==typeof t?t:Zl(+t),s):u},s.paddingBottom=function(t){return arguments.length?(c="function"==typeof t?t:Zl(+t),s):c},s.paddingLeft=function(t){return arguments.length?(f="function"==typeof t?t:Zl(+t),s):f},s},t.treemapBinary=function(t,n,e,r,i){var o,a,u=t.children,c=u.length,f=new Array(c+1);for(f[0]=a=o=0;o<c;++o)f[o+1]=a+=u[o].value;!function t(n,e,r,i,o,a,c){if(n>=e-1){var s=u[n];return s.x0=i,s.y0=o,s.x1=a,void(s.y1=c)}for(var l=f[n],h=r/2+l,d=n+1,p=e-1;d<p;){var v=d+p>>>1;f[v]<h?d=v+1:p=v}h-f[d-1]<f[d]-h&&n+1<d&&--d;var g=f[d]-l,y=r-g;if(a-i>c-o){var _=(i*y+a*g)/r;t(n,d,g,i,o,_,c),t(d,e,y,_,o,a,c)}else{var b=(o*y+c*g)/r;t(n,d,g,i,o,a,b),t(d,e,y,i,b,a,c)}}(0,c,t.value,n,e,r,i)},t.treemapDice=eh,t.treemapResquarify=_h,t.treemapSlice=ph,t.treemapSliceDice=function(t,n,e,r,i){(1&t.depth?ph:eh)(t,n,e,r,i)},t.treemapSquarify=yh,t.tsv=sa,t.tsvFormat=Ko,t.tsvFormatBody=Jo,t.tsvFormatRow=na,t.tsvFormatRows=ta,t.tsvFormatValue=ea,t.tsvParse=Zo,t.tsvParseRows=Qo,t.utcDay=Wd,t.utcDays=Zd,t.utcFriday=rp,t.utcFridays=sp,t.utcHour=Gd,t.utcHours=$d,t.utcMillisecond=pd,t.utcMilliseconds=vd,t.utcMinute=Xd,t.utcMinutes=Vd,t.utcMonday=Jd,t.utcMondays=ap,t.utcMonth=hp,t.utcMonths=dp,t.utcSaturday=ip,t.utcSaturdays=lp,t.utcSecond=_d,t.utcSeconds=bd,t.utcSunday=Kd,t.utcSundays=op,t.utcThursday=ep,t.utcThursdays=fp,t.utcTuesday=tp,t.utcTuesdays=up,t.utcWednesday=np,t.utcWednesdays=cp,t.utcWeek=Kd,t.utcWeeks=op,t.utcYear=pp,t.utcYears=vp,t.values=function(t){var n=[];for(var e in t)n.push(t[e]);return n},t.variance=c,t.version="5.16.0",t.voronoi=function(){var t=sb,n=lb,e=null;function r(r){return new Vb(r.map(function(e,i){var o=[Math.round(t(e,i,r)/Ib)*Ib,Math.round(n(e,i,r)/Ib)*Ib];return o.index=i,o.data=e,o}),e)}return r.polygons=function(t){return r(t).polygons()},r.links=function(t){return r(t).links()},r.triangles=function(t){return r(t).triangles()},r.x=function(n){return arguments.length?(t="function"==typeof n?n:fb(+n),r):t},r.y=function(t){return arguments.length?(n="function"==typeof t?t:fb(+t),r):n},r.extent=function(t){return arguments.length?(e=null==t?null:[[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]],r):e&&[[e[0][0],e[0][1]],[e[1][0],e[1][1]]]},r.size=function(t){return arguments.length?(e=null==t?null:[[0,0],[+t[0],+t[1]]],r):e&&[e[1][0]-e[0][0],e[1][1]-e[0][1]]},r},t.window=ct,t.xml=da,t.zip=function(){return k(arguments)},t.zoom=function(){var n,e,r=tm,i=nm,o=om,a=rm,u=im,c=[0,1/0],f=[[-1/0,-1/0],[1/0,1/0]],s=250,l=Ie,h=I("start","zoom","end"),d=500,p=150,v=0;function g(t){t.property("__zoom",em).on("wheel.zoom",M).on("mousedown.zoom",N).on("dblclick.zoom",T).filter(u).on("touchstart.zoom",A).on("touchmove.zoom",S).on("touchend.zoom touchcancel.zoom",k).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function y(t,n){return(n=Math.max(c[0],Math.min(c[1],n)))===t.k?t:new Wb(n,t.x,t.y)}function _(t,n,e){var r=n[0]-e[0]*t.k,i=n[1]-e[1]*t.k;return r===t.x&&i===t.y?t:new Wb(t.k,r,i)}function b(t){return[(+t[0][0]+ +t[1][0])/2,(+t[0][1]+ +t[1][1])/2]}function m(t,n,e){t.on("start.zoom",function(){x(this,arguments).start()}).on("interrupt.zoom end.zoom",function(){x(this,arguments).end()}).tween("zoom",function(){var t=this,r=arguments,o=x(t,r),a=i.apply(t,r),u=null==e?b(a):"function"==typeof e?e.apply(t,r):e,c=Math.max(a[1][0]-a[0][0],a[1][1]-a[0][1]),f=t.__zoom,s="function"==typeof n?n.apply(t,r):n,h=l(f.invert(u).concat(c/f.k),s.invert(u).concat(c/s.k));return function(t){if(1===t)t=s;else{var n=h(t),e=c/n[2];t=new Wb(e,u[0]-n[0]*e,u[1]-n[1]*e)}o.zoom(null,t)}})}function x(t,n,e){return!e&&t.__zooming||new w(t,n)}function w(t,n){this.that=t,this.args=n,this.active=0,this.extent=i.apply(t,n),this.taps=0}function M(){if(r.apply(this,arguments)){var t=x(this,arguments),n=this.__zoom,e=Math.max(c[0],Math.min(c[1],n.k*Math.pow(2,a.apply(this,arguments)))),i=Bt(this);if(t.wheel)t.mouse[0][0]===i[0]&&t.mouse[0][1]===i[1]||(t.mouse[1]=n.invert(t.mouse[0]=i)),clearTimeout(t.wheel);else{if(n.k===e)return;t.mouse=[i,n.invert(i)],Pr(this),t.start()}Jb(),t.wheel=setTimeout(function(){t.wheel=null,t.end()},p),t.zoom("mouse",o(_(y(n,e),t.mouse[0],t.mouse[1]),t.extent,f))}}function N(){if(!e&&r.apply(this,arguments)){var n=x(this,arguments,!0),i=Rt(t.event.view).on("mousemove.zoom",function(){if(Jb(),!n.moved){var e=t.event.clientX-u,r=t.event.clientY-c;n.moved=e*e+r*r>v}n.zoom("mouse",o(_(n.that.__zoom,n.mouse[0]=Bt(n.that),n.mouse[1]),n.extent,f))},!0).on("mouseup.zoom",function(){i.on("mousemove.zoom mouseup.zoom",null),jt(t.event.view,n.moved),Jb(),n.end()},!0),a=Bt(this),u=t.event.clientX,c=t.event.clientY;Ht(t.event.view),Kb(),n.mouse=[a,this.__zoom.invert(a)],Pr(this),n.start()}}function T(){if(r.apply(this,arguments)){var n=this.__zoom,e=Bt(this),a=n.invert(e),u=n.k*(t.event.shiftKey?.5:2),c=o(_(y(n,u),e,a),i.apply(this,arguments),f);Jb(),s>0?Rt(this).transition().duration(s).call(m,c,e):Rt(this).call(g.transform,c)}}function A(){if(r.apply(this,arguments)){var e,i,o,a,u=t.event.touches,c=u.length,f=x(this,arguments,t.event.changedTouches.length===c);for(Kb(),i=0;i<c;++i)a=[a=Ft(this,u,(o=u[i]).identifier),this.__zoom.invert(a),o.identifier],f.touch0?f.touch1||f.touch0[2]===a[2]||(f.touch1=a,f.taps=0):(f.touch0=a,e=!0,f.taps=1+!!n);n&&(n=clearTimeout(n)),e&&(f.taps<2&&(n=setTimeout(function(){n=null},d)),Pr(this),f.start())}}function S(){if(this.__zooming){var e,r,i,a,u=x(this,arguments),c=t.event.changedTouches,s=c.length;for(Jb(),n&&(n=clearTimeout(n)),u.taps=0,e=0;e<s;++e)i=Ft(this,c,(r=c[e]).identifier),u.touch0&&u.touch0[2]===r.identifier?u.touch0[0]=i:u.touch1&&u.touch1[2]===r.identifier&&(u.touch1[0]=i);if(r=u.that.__zoom,u.touch1){var l=u.touch0[0],h=u.touch0[1],d=u.touch1[0],p=u.touch1[1],v=(v=d[0]-l[0])*v+(v=d[1]-l[1])*v,g=(g=p[0]-h[0])*g+(g=p[1]-h[1])*g;r=y(r,Math.sqrt(v/g)),i=[(l[0]+d[0])/2,(l[1]+d[1])/2],a=[(h[0]+p[0])/2,(h[1]+p[1])/2]}else{if(!u.touch0)return;i=u.touch0[0],a=u.touch0[1]}u.zoom("touch",o(_(r,i,a),u.extent,f))}}function k(){if(this.__zooming){var n,r,i=x(this,arguments),o=t.event.changedTouches,a=o.length;for(Kb(),e&&clearTimeout(e),e=setTimeout(function(){e=null},d),n=0;n<a;++n)r=o[n],i.touch0&&i.touch0[2]===r.identifier?delete i.touch0:i.touch1&&i.touch1[2]===r.identifier&&delete i.touch1;if(i.touch1&&!i.touch0&&(i.touch0=i.touch1,delete i.touch1),i.touch0)i.touch0[1]=this.__zoom.invert(i.touch0[0]);else if(i.end(),2===i.taps){var u=Rt(this).on("dblclick.zoom");u&&u.apply(this,arguments)}}}return g.transform=function(t,n,e){var r=t.selection?t.selection():t;r.property("__zoom",em),t!==r?m(t,n,e):r.interrupt().each(function(){x(this,arguments).start().zoom(null,"function"==typeof n?n.apply(this,arguments):n).end()})},g.scaleBy=function(t,n,e){g.scaleTo(t,function(){var t=this.__zoom.k,e="function"==typeof n?n.apply(this,arguments):n;return t*e},e)},g.scaleTo=function(t,n,e){g.transform(t,function(){var t=i.apply(this,arguments),r=this.__zoom,a=null==e?b(t):"function"==typeof e?e.apply(this,arguments):e,u=r.invert(a),c="function"==typeof n?n.apply(this,arguments):n;return o(_(y(r,c),a,u),t,f)},e)},g.translateBy=function(t,n,e){g.transform(t,function(){return o(this.__zoom.translate("function"==typeof n?n.apply(this,arguments):n,"function"==typeof e?e.apply(this,arguments):e),i.apply(this,arguments),f)})},g.translateTo=function(t,n,e,r){g.transform(t,function(){var t=i.apply(this,arguments),a=this.__zoom,u=null==r?b(t):"function"==typeof r?r.apply(this,arguments):r;return o(Zb.translate(u[0],u[1]).scale(a.k).translate("function"==typeof n?-n.apply(this,arguments):-n,"function"==typeof e?-e.apply(this,arguments):-e),t,f)},r)},w.prototype={start:function(){return 1==++this.active&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(t,n){return this.mouse&&"mouse"!==t&&(this.mouse[1]=n.invert(this.mouse[0])),this.touch0&&"touch"!==t&&(this.touch0[1]=n.invert(this.touch0[0])),this.touch1&&"touch"!==t&&(this.touch1[1]=n.invert(this.touch1[0])),this.that.__zoom=n,this.emit("zoom"),this},end:function(){return 0==--this.active&&(delete this.that.__zooming,this.emit("end")),this},emit:function(t){kt(new $b(g,t,this.that.__zoom),h.apply,h,[t,this.that,this.args])}},g.wheelDelta=function(t){return arguments.length?(a="function"==typeof t?t:Gb(+t),g):a},g.filter=function(t){return arguments.length?(r="function"==typeof t?t:Gb(!!t),g):r},g.touchable=function(t){return arguments.length?(u="function"==typeof t?t:Gb(!!t),g):u},g.extent=function(t){return arguments.length?(i="function"==typeof t?t:Gb([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),g):i},g.scaleExtent=function(t){return arguments.length?(c[0]=+t[0],c[1]=+t[1],g):[c[0],c[1]]},g.translateExtent=function(t){return arguments.length?(f[0][0]=+t[0][0],f[1][0]=+t[1][0],f[0][1]=+t[0][1],f[1][1]=+t[1][1],g):[[f[0][0],f[0][1]],[f[1][0],f[1][1]]]},g.constrain=function(t){return arguments.length?(o=t,g):o},g.duration=function(t){return arguments.length?(s=+t,g):s},g.interpolate=function(t){return arguments.length?(l=t,g):l},g.on=function(){var t=h.on.apply(h,arguments);return t===h?g:t},g.clickDistance=function(t){return arguments.length?(v=(t=+t)*t,g):Math.sqrt(v)},g},t.zoomIdentity=Zb,t.zoomTransform=Qb,Object.defineProperty(t,"__esModule",{value:!0})});

/**
 * Papa Parse
 * v4.2.0
 * https://github.com/mholt/PapaParse
 **/
!function(a,b){a.Papa=b()}(this,function(){"use strict";function a(a,b){if(b=b||{},b.dynamicTyping=b.dynamicTyping||!1,b.worker&&z.WORKERS_SUPPORTED){var c=k();return c.userStep=b.step,c.userChunk=b.chunk,c.userComplete=b.complete,c.userError=b.error,b.step=r(b.step),b.chunk=r(b.chunk),b.complete=r(b.complete),b.error=r(b.error),delete b.worker,void c.postMessage({input:a,config:b,workerId:c.id})}var h=null;return"string"==typeof a?h=b.download?new d(b):new f(b):a.readable===!0&&"function"==typeof a.read&&"function"==typeof a.on?h=new g(b):(t.File&&a instanceof File||a instanceof Object)&&(h=new e(b)),h.stream(a)}function b(a,b){function c(){"object"==typeof b&&("string"==typeof b.delimiter&&1===b.delimiter.length&&z.BAD_DELIMITERS.indexOf(b.delimiter)===-1&&(j=b.delimiter),("boolean"==typeof b.quotes||b.quotes instanceof Array)&&(h=b.quotes),"string"==typeof b.newline&&(k=b.newline),"string"==typeof b.quoteChar&&(l=b.quoteChar),"boolean"==typeof b.header&&(i=b.header))}function d(a){if("object"!=typeof a)return[];var b=[];for(var c in a)b.push(c);return b}function e(a,b){var c="";"string"==typeof a&&(a=JSON.parse(a)),"string"==typeof b&&(b=JSON.parse(b));var d=a instanceof Array&&a.length>0,e=!(b[0]instanceof Array);if(d&&i){for(var g=0;g<a.length;g++)g>0&&(c+=j),c+=f(a[g],g);b.length>0&&(c+=k)}for(var h=0;h<b.length;h++){for(var l=d?a.length:b[h].length,m=0;m<l;m++){m>0&&(c+=j);var n=d&&e?a[m]:m;c+=f(b[h][n],m)}h<b.length-1&&(c+=k)}return c}function f(a,b){if("undefined"==typeof a||null===a)return"";a=a.toString().replace(m,l+l);var c="boolean"==typeof h&&h||h instanceof Array&&h[b]||g(a,z.BAD_DELIMITERS)||a.indexOf(j)>-1||" "===a.charAt(0)||" "===a.charAt(a.length-1);return c?l+a+l:a}function g(a,b){for(var c=0;c<b.length;c++)if(a.indexOf(b[c])>-1)return!0;return!1}var h=!1,i=!0,j=",",k="\r\n",l='"';c();var m=new RegExp(l,"g");if("string"==typeof a&&(a=JSON.parse(a)),a instanceof Array){if(!a.length||a[0]instanceof Array)return e(null,a);if("object"==typeof a[0])return e(d(a[0]),a)}else if("object"==typeof a)return"string"==typeof a.data&&(a.data=JSON.parse(a.data)),a.data instanceof Array&&(a.fields||(a.fields=a.meta&&a.meta.fields),a.fields||(a.fields=a.data[0]instanceof Array?a.fields:d(a.data[0])),a.data[0]instanceof Array||"object"==typeof a.data[0]||(a.data=[a.data])),e(a.fields||[],a.data||[]);throw"exception: Unable to serialize unrecognized input"}function c(a){function b(a){var b=p(a);b.chunkSize=parseInt(b.chunkSize),a.step||a.chunk||(b.chunkSize=null),this._handle=new h(b),this._handle.streamer=this,this._config=b}this._handle=null,this._paused=!1,this._finished=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},b.call(this,a),this.parseChunk=function(a){if(this.isFirstChunk&&r(this._config.beforeFirstChunk)){var b=this._config.beforeFirstChunk(a);void 0!==b&&(a=b)}this.isFirstChunk=!1;var c=this._partialLine+a;this._partialLine="";var d=this._handle.parse(c,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var e=d.meta.cursor;this._finished||(this._partialLine=c.substring(e-this._baseIndex),this._baseIndex=e),d&&d.data&&(this._rowCount+=d.data.length);var f=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(v)t.postMessage({results:d,workerId:z.WORKER_ID,finished:f});else if(r(this._config.chunk)){if(this._config.chunk(d,this._handle),this._paused)return;d=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(d.data),this._completeResults.errors=this._completeResults.errors.concat(d.errors),this._completeResults.meta=d.meta),!f||!r(this._config.complete)||d&&d.meta.aborted||this._config.complete(this._completeResults,this._input),f||d&&d.meta.paused||this._nextChunk(),d}},this._sendError=function(a){r(this._config.error)?this._config.error(a):v&&this._config.error&&t.postMessage({workerId:z.WORKER_ID,error:a,finished:!1})}}function d(a){function b(a){var b=a.getResponseHeader("Content-Range");return null===b?-1:parseInt(b.substr(b.lastIndexOf("/")+1))}a=a||{},a.chunkSize||(a.chunkSize=z.RemoteChunkSize),c.call(this,a);var d;u?this._nextChunk=function(){this._readChunk(),this._chunkLoaded()}:this._nextChunk=function(){this._readChunk()},this.stream=function(a){this._input=a,this._nextChunk()},this._readChunk=function(){if(this._finished)return void this._chunkLoaded();if(d=new XMLHttpRequest,this._config.withCredentials&&(d.withCredentials=this._config.withCredentials),u||(d.onload=q(this._chunkLoaded,this),d.onerror=q(this._chunkError,this)),d.open("GET",this._input,!u),this._config.chunkSize){var a=this._start+this._config.chunkSize-1;d.setRequestHeader("Range","bytes="+this._start+"-"+a),d.setRequestHeader("If-None-Match","webkit-no-cache")}try{d.send()}catch(a){this._chunkError(a.message)}u&&0===d.status?this._chunkError():this._start+=this._config.chunkSize},this._chunkLoaded=function(){if(4==d.readyState){if(d.status<200||d.status>=400)return void this._chunkError();this._finished=!this._config.chunkSize||this._start>b(d),this.parseChunk(d.responseText)}},this._chunkError=function(a){var b=d.statusText||a;this._sendError(b)}}function e(a){a=a||{},a.chunkSize||(a.chunkSize=z.LocalChunkSize),c.call(this,a);var b,d,e="undefined"!=typeof FileReader;this.stream=function(a){this._input=a,d=a.slice||a.webkitSlice||a.mozSlice,e?(b=new FileReader,b.onload=q(this._chunkLoaded,this),b.onerror=q(this._chunkError,this)):b=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var a=this._input;if(this._config.chunkSize){var c=Math.min(this._start+this._config.chunkSize,this._input.size);a=d.call(a,this._start,c)}var f=b.readAsText(a,this._config.encoding);e||this._chunkLoaded({target:{result:f}})},this._chunkLoaded=function(a){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(a.target.result)},this._chunkError=function(){this._sendError(b.error)}}function f(a){a=a||{},c.call(this,a);var b,d;this.stream=function(a){return b=a,d=a,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var a=this._config.chunkSize,b=a?d.substr(0,a):d;return d=a?d.substr(a):"",this._finished=!d,this.parseChunk(b)}}}function g(a){a=a||{},c.call(this,a);var b=[],d=!0;this.stream=function(a){this._input=a,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._nextChunk=function(){b.length?this.parseChunk(b.shift()):d=!0},this._streamData=q(function(a){try{b.push("string"==typeof a?a:a.toString(this._config.encoding)),d&&(d=!1,this.parseChunk(b.shift()))}catch(a){this._streamError(a)}},this),this._streamError=q(function(a){this._streamCleanUp(),this._sendError(a.message)},this),this._streamEnd=q(function(){this._streamCleanUp(),this._finished=!0,this._streamData("")},this),this._streamCleanUp=q(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function h(a){function b(){if(w&&n&&(k("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+z.DefaultDelimiter+"'"),n=!1),a.skipEmptyLines)for(var b=0;b<w.data.length;b++)1===w.data[b].length&&""===w.data[b][0]&&w.data.splice(b--,1);return c()&&d(),f()}function c(){return a.header&&0===v.length}function d(){if(w){for(var a=0;c()&&a<w.data.length;a++)for(var b=0;b<w.data[a].length;b++)v.push(w.data[a][b]);w.data.splice(0,1)}}function e(b,c){return(a.dynamicTyping[b]||a.dynamicTyping)===!0?"true"===c||"TRUE"===c||"false"!==c&&"FALSE"!==c&&j(c):c}function f(){if(!w||!a.header&&!a.dynamicTyping)return w;for(var b=0;b<w.data.length;b++){for(var c=a.header?{}:[],d=0;d<w.data[b].length;d++){var f=d,g=w.data[b][d];a.header&&(f=d>=v.length?"__parsed_extra":v[d]),g=e(f,g),"__parsed_extra"===f?(c[f]=c[f]||[],c[f].push(g)):c[f]=g}w.data[b]=c,a.header&&(d>v.length?k("FieldMismatch","TooManyFields","Too many fields: expected "+v.length+" fields but parsed "+d,b):d<v.length&&k("FieldMismatch","TooFewFields","Too few fields: expected "+v.length+" fields but parsed "+d,b))}return a.header&&w.meta&&(w.meta.fields=v),w}function g(b,c){for(var d,e,f,g=[",","\t","|",";",z.RECORD_SEP,z.UNIT_SEP],h=0;h<g.length;h++){var j=g[h],k=0,l=0;f=void 0;for(var m=new i({delimiter:j,newline:c,preview:10}).parse(b),n=0;n<m.data.length;n++){var o=m.data[n].length;l+=o,"undefined"!=typeof f?o>1&&(k+=Math.abs(o-f),f=o):f=o}m.data.length>0&&(l/=m.data.length),("undefined"==typeof e||k<e)&&l>1.99&&(e=k,d=j)}return a.delimiter=d,{successful:!!d,bestDelimiter:d}}function h(a){a=a.substr(0,1048576);var b=a.split("\r"),c=a.split("\n"),d=c.length>1&&c[0].length<b[0].length;if(1===b.length||d)return"\n";for(var e=0,f=0;f<b.length;f++)"\n"===b[f][0]&&e++;return e>=b.length/2?"\r\n":"\r"}function j(a){var b=o.test(a);return b?parseFloat(a):a}function k(a,b,c,d){w.errors.push({type:a,code:b,message:c,row:d})}var l,m,n,o=/^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,q=this,s=0,t=!1,u=!1,v=[],w={data:[],errors:[],meta:{}};if(r(a.step)){var x=a.step;a.step=function(d){if(w=d,c())b();else{if(b(),0===w.data.length)return;s+=d.data.length,a.preview&&s>a.preview?m.abort():x(w,q)}}}this.parse=function(c,d,e){if(a.newline||(a.newline=h(c)),n=!1,a.delimiter)"function"==typeof a.delimiter&&(a.delimiter=a.delimiter(c),w.meta.delimiter=a.delimiter);else{var f=g(c,a.newline);f.successful?a.delimiter=f.bestDelimiter:(n=!0,a.delimiter=z.DefaultDelimiter),w.meta.delimiter=a.delimiter}var j=p(a);return a.preview&&a.header&&j.preview++,l=c,m=new i(j),w=m.parse(l,d,e),b(),t?{meta:{paused:!0}}:w||{meta:{paused:!1}}},this.paused=function(){return t},this.pause=function(){t=!0,m.abort(),l=l.substr(m.getCharIndex())},this.resume=function(){t=!1,q.streamer.parseChunk(l)},this.aborted=function(){return u},this.abort=function(){u=!0,m.abort(),w.meta.aborted=!0,r(a.complete)&&a.complete(w),l=""}}function i(a){a=a||{};var b=a.delimiter,c=a.newline,d=a.comments,e=a.step,f=a.preview,g=a.fastMode,h=a.quoteChar||'"';if(("string"!=typeof b||z.BAD_DELIMITERS.indexOf(b)>-1)&&(b=","),d===b)throw"Comment character same as delimiter";d===!0?d="#":("string"!=typeof d||z.BAD_DELIMITERS.indexOf(d)>-1)&&(d=!1),"\n"!=c&&"\r"!=c&&"\r\n"!=c&&(c="\n");var i=0,j=!1;this.parse=function(a,k,l){function m(a){w.push(a),z=i}function n(b){return l?p():("undefined"==typeof b&&(b=a.substr(i)),y.push(b),i=r,m(y),v&&q(),p())}function o(b){i=b,m(y),y=[],D=a.indexOf(c,i)}function p(a){return{data:w,errors:x,meta:{delimiter:b,linebreak:c,aborted:j,truncated:!!a,cursor:z+(k||0)}}}function q(){e(p()),w=[],x=[]}if("string"!=typeof a)throw"Input must be a string";var r=a.length,s=b.length,t=c.length,u=d.length,v="function"==typeof e;i=0;var w=[],x=[],y=[],z=0;if(!a)return p();if(g||g!==!1&&a.indexOf(h)===-1){for(var A=a.split(c),B=0;B<A.length;B++){var y=A[B];if(i+=y.length,B!==A.length-1)i+=c.length;else if(l)return p();if(!d||y.substr(0,u)!==d){if(v){if(w=[],m(y.split(b)),q(),j)return p()}else m(y.split(b));if(f&&B>=f)return w=w.slice(0,f),p(!0)}}return p()}for(var C=a.indexOf(b,i),D=a.indexOf(c,i),E=new RegExp(h+h,"g");;)if(a[i]!==h)if(d&&0===y.length&&a.substr(i,u)===d){if(D===-1)return p();i=D+t,D=a.indexOf(c,i),C=a.indexOf(b,i)}else if(C!==-1&&(C<D||D===-1))y.push(a.substring(i,C)),i=C+s,C=a.indexOf(b,i);else{if(D===-1)break;if(y.push(a.substring(i,D)),o(D+t),v&&(q(),j))return p();if(f&&w.length>=f)return p(!0)}else{var F=i;for(i++;;){var F=a.indexOf(h,F+1);if(F===-1)return l||x.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:w.length,index:i}),n();if(F===r-1){var G=a.substring(i,F).replace(E,h);return n(G)}if(a[F+1]!==h){if(a[F+1]===b){y.push(a.substring(i,F).replace(E,h)),i=F+1+s,C=a.indexOf(b,i),D=a.indexOf(c,i);break}if(a.substr(F+1,t)===c){if(y.push(a.substring(i,F).replace(E,h)),o(F+1+t),C=a.indexOf(b,i),v&&(q(),j))return p();if(f&&w.length>=f)return p(!0);break}}else F++}}return n()},this.abort=function(){j=!0},this.getCharIndex=function(){return i}}function j(){var a=document.getElementsByTagName("script");return a.length?a[a.length-1].src:""}function k(){if(!z.WORKERS_SUPPORTED)return!1;if(!w&&null===z.SCRIPT_PATH)throw new Error("Script path cannot be determined automatically when Papa Parse is loaded asynchronously. You need to set Papa.SCRIPT_PATH manually.");var a=z.SCRIPT_PATH||s;a+=(a.indexOf("?")!==-1?"&":"?")+"papaworker";var b=new t.Worker(a);return b.onmessage=l,b.id=y++,x[b.id]=b,b}function l(a){var b=a.data,c=x[b.workerId],d=!1;if(b.error)c.userError(b.error,b.file);else if(b.results&&b.results.data){var e=function(){d=!0,m(b.workerId,{data:[],errors:[],meta:{aborted:!0}})},f={abort:e,pause:n,resume:n};if(r(c.userStep)){for(var g=0;g<b.results.data.length&&(c.userStep({data:[b.results.data[g]],errors:b.results.errors,meta:b.results.meta},f),!d);g++);delete b.results}else r(c.userChunk)&&(c.userChunk(b.results,f,b.file),delete b.results)}b.finished&&!d&&m(b.workerId,b.results)}function m(a,b){var c=x[a];r(c.userComplete)&&c.userComplete(b),c.terminate(),delete x[a]}function n(){throw"Not implemented."}function o(a){var b=a.data;if("undefined"==typeof z.WORKER_ID&&b&&(z.WORKER_ID=b.workerId),"string"==typeof b.input)t.postMessage({workerId:z.WORKER_ID,results:z.parse(b.input,b.config),finished:!0});else if(t.File&&b.input instanceof File||b.input instanceof Object){var c=z.parse(b.input,b.config);c&&t.postMessage({workerId:z.WORKER_ID,results:c,finished:!0})}}function p(a){if("object"!=typeof a)return a;var b=a instanceof Array?[]:{};for(var c in a)b[c]=p(a[c]);return b}function q(a,b){return function(){a.apply(b,arguments)}}function r(a){return"function"==typeof a}var s,t=function(){return"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof t?t:{}}(),u=!t.document&&!!t.postMessage,v=u&&/(\?|&)papaworker(=|&|$)/.test(t.location.search),w=!1,x={},y=0,z={};if(z.parse=a,z.unparse=b,z.RECORD_SEP=String.fromCharCode(30),z.UNIT_SEP=String.fromCharCode(31),z.BYTE_ORDER_MARK="\ufeff",z.BAD_DELIMITERS=["\r","\n",'"',z.BYTE_ORDER_MARK],z.WORKERS_SUPPORTED=!u&&!!t.Worker,z.SCRIPT_PATH=null,z.LocalChunkSize=10485760,z.RemoteChunkSize=5242880,z.DefaultDelimiter=",",z.Parser=i,z.ParserHandle=h,z.NetworkStreamer=d,z.FileStreamer=e,z.StringStreamer=f,z.ReadableStreamStreamer=g,t.jQuery){var A=t.jQuery;A.fn.parse=function(a){function b(){if(0===f.length)return void(r(a.complete)&&a.complete());var b=f[0];if(r(a.before)){var e=a.before(b.file,b.inputElem);if("object"==typeof e){if("abort"===e.action)return void c("AbortError",b.file,b.inputElem,e.reason);if("skip"===e.action)return void d();"object"==typeof e.config&&(b.instanceConfig=A.extend(b.instanceConfig,e.config))}else if("skip"===e)return void d()}var g=b.instanceConfig.complete;b.instanceConfig.complete=function(a){r(g)&&g(a,b.file,b.inputElem),d()},z.parse(b.file,b.instanceConfig)}function c(b,c,d,e){r(a.error)&&a.error({name:b},c,d,e)}function d(){f.splice(0,1),b()}var e=a.config||{},f=[];return this.each(function(a){var b="INPUT"===A(this).prop("tagName").toUpperCase()&&"file"===A(this).attr("type").toLowerCase()&&t.FileReader;if(!b||!this.files||0===this.files.length)return!0;for(var c=0;c<this.files.length;c++)f.push({file:this.files[c],inputElem:this,instanceConfig:A.extend({},e)})}),b(),this}}return v?t.onmessage=o:z.WORKERS_SUPPORTED&&(s=j(),document.body?document.addEventListener("DOMContentLoaded",function(){w=!0},!0):w=!0),d.prototype=Object.create(c.prototype),d.prototype.constructor=d,e.prototype=Object.create(c.prototype),e.prototype.constructor=e,f.prototype=Object.create(f.prototype),f.prototype.constructor=f,g.prototype=Object.create(c.prototype),g.prototype.constructor=g,z});

/** 
 * Colors JS Library v1.2.4
 * Copyright 2012-2014 Matt Jordan
 * Licensed under Creative Commons Attribution-ShareAlike 3.0 Unported. (http://creativecommons.org/licenses/by-sa/3.0/)
 * https://github.com/mbjordan/Colors
 **/
(function(n){var l={},g={};l.render=function(a,b){var d={},c;if("object"==typeof a)return"rgb"===b&&(c=["R","G","B","RGB"]),"hsv"===b&&(c=["H","S","V","HSV"]),"hsl"===b&&(c=["H","S","L","HSL"]),d[c[0]]=a[0],d[c[1]]=a[1],d[c[2]]=a[2],d[c[3]]=a[0]+" "+a[1]+" "+a[2],d.a=a,d};l.paddedHex=function(a){a=(10>a?"0":"")+a.toString(16);return 1===a.length?"0"+a:a};Number.prototype.round=function(a){return parseFloat(this.toFixed(a||10))};g.rgb2hex=function(a,b,d){a=l.paddedHex(a);b=void 0!==b?l.paddedHex(b): a;d=void 0!==d?l.paddedHex(d):a;return"#"+a+b+d};g.hex2rgb=function(a){a=a.replace("#","");return 6===a.length?l.render([parseInt(a.substr(0,2),16),parseInt(a.substr(2,2),16),parseInt(a.substr(4,2),16)],"rgb"):parseInt(a,16)};g.hex2hsv=function(a){a="#"==a.charAt(0)?a.substring(1,7):a;var b=parseInt(a.substring(0,2),16)/255,d=parseInt(a.substring(2,4),16)/255;a=parseInt(a.substring(4,6),16)/255;var c=0,e=0,h=0,e=Math.min(b,d,a),k=Math.max(b,d,a),f=k-e,m,g,h=k;0===f?e=c=0:(e=f/k,m=((k-b)/6+f/2)/f,g=((k-d)/6+f/2)/f,f=((k-a)/6+f/2)/f,b==k?c=f-g:d==k?c=1/3+m-f:a==k&&(c=2/3+g-m),0>c&&(c+=1),1<c&&(c-=1));return l.render([Math.round(360*c),Math.round(100*e),Math.round(100*h)],"hsv")};g.hsv2rgb=function(a,b,d){var c=[],e,h,k;"object"==typeof a?(e=a[0],b=a[1],a=a[2]):(e=a,a=d);b/=100;a/=100;d=Math.floor(e/60%6);h=e/60-d;e=a*(1-b);k=a*(1-h*b);b=a*(1-(1-h)*b);switch(d){case 0:c=[a,b,e];break;case 1:c=[k,a,e];break;case 2:c=[e,a,b];break;case 3:c=[e,k,a];break;case 4:c=[b,e,a];break;case 5:c=[a,e,k]}return l.render([Math.min(255,Math.floor(256*c[0])),Math.min(255,Math.floor(256*c[1])),Math.min(255,Math.floor(256*c[2]))],"rgb")};g.rgb2hsl=function(a,b,d){var c,e,h,k,f;"object"===typeof a?(c=a[0],b=a[1],a=a[2]):(c=a,a=d);c/=255;b/=255;a/=255;d=Math.max(c,b,a);e=Math.min(c,b,a);k=(d+e)/2;if(d==e)h=e=0;else{f=d-e;e=0.5<k?f/(2-d-e):f/(d+e);switch(d){case c:h=(b-a)/f+(b<a?6:0);break;case b:h=(a-c)/f+2;break;case a:h=(c-b)/f+4}h/=6}return l.render([Math.floor(360*h),(100*e).round(1),(100*k).round(1)],"hsl")};g.hsv2hsl=function(a,b,d){var c,e,h,k,f,g;"object"==typeof a?(c=a[0],e=a[1],h=a[2]):(c=a,e=b,h=d);h=this.hsv2rgb(c,e,h);c=h.R/255;e=h.G/255;k=h.B/255;f=Math.max(c,e,k);g=Math.min(c,e,k);h=(f+g)/2;f!=g&&(b=0.5>h?(f-g)/(f+g):(f-g)/(2-f-g),a=c==f?(e-k)/(f-g):e==f?2+(k-c)/(f-g):4+(c-e)/(f-g));return l.render([Math.floor(a),Math.floor(b),Math.floor(d)],"hsl")};g.name2hex=function(a){a=a.toLowerCase();a={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgrey:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}[a];return void 0===a?"Invalid Color Name":a};g.name2rgb=function(a){a=this.name2hex(a);return/^[a-fA-F0-9#]{7}$/.test(a)?this.hex2rgb(a):l.render(["Invalid Color Name","Invalid Color Name","Invalid Color Name"],"rgb")};g.name2hsv=function(a){a=this.name2hex(a);return/^[a-fA-F0-9#]{7}$/.test(a)?this.hex2hsv(a):l.render(["Invalid Color Name","Invalid Color Name","Invalid Color Name"],"hsv")};g.complement=function(a,b,d){var c;if("string"==typeof a&&/(#([A-Fa-f0-9]){3}(([A-Fa-f0-9]){3})?)/.test(a))return a=a.replace("#",""),b="#",6===a.length&&(b+=l.paddedHex(255-this.hex2rgb(a.substr(0,2))),b+=l.paddedHex(255-this.hex2rgb(a.substr(2,2))),b+=l.paddedHex(255-this.hex2rgb(a.substr(4,2)))),3===a.length&&(b+=l.paddedHex(255-this.hex2rgb(a.substr(0,1)+a.substr(0,1))),b+=l.paddedHex(255-this.hex2rgb(a.substr(1,1)+a.substr(1,1))),b+=l.paddedHex(255-this.hex2rgb(a.substr(2,1)+a.substr(2,1)))),b;void 0!==a&&void 0!==b&&void 0!==d&&(c=[255-a,255-b,255-d]);"object"==typeof a&&(c=[255-a[0],255-a[1],255-a[2]]);return l.render(c,"rgb")};g.rand=function(a){var b,d;if("hex"===a||void 0===a){a="";for(d=0;6>d;d++)b=Math.floor(16*Math.random()),a+="0123456789abcdef".substring(b,b+1);return"#"+a}if("rgb"==a)return a=Math.floor(-254*Math.random()+255),b=Math.floor(-254*Math.random()+255),d=Math.floor(-254*Math.random()+255),l.render([a,b,d],"rgb")};n.Colors=n.$c=g})(window);

/**
 * d3text.textwrap : ex) https://jsfiddle.net/IPWright83/22ahj15o/
 **/
//var d3plus={};d3plus.textwrap=function(){var r,d,c,p,l,f=!1,a=!1,i="center",o=0,W=null,w=null;function n(t){for(var e=0;e<t.words.length-1;e++)t.words[e]=t.words[e]+" ";var r,a,i,n,s=Math.floor(t.size[1]),d="circle"===t.shape?.75*t.width:t.width,c=(r=t,a=s,i=[],(n=d3.select("body").append("svg")).append("text").selectAll("tspan").data(r.words).enter().append("tspan").attr("left","0px").attr("position","absolute").attr("top","0px").attr("x",0).attr("y",0).style("font-size",a+"px").text(function(e){return e}).each(function(e){var t=this.getComputedTextLength(),r=this.offsetHeight||this.getBoundingClientRect().height||this.parentNode.getBBox().height;return d3.select(this).selectAll("tspan").size()&&alert("didn't expect to get here"),i.push({height:r,width:t,text:e})}).remove(),n.remove(),i),p=d3.max(c,function(e){return e.width}),l=1.165+t.width/t.height*.11,o=d3.sum(c,function(e){return h=t.dy||1.2*s,e.width*h})*l;if("circle"===t.shape)var w=Math.PI*Math.pow(t.width/2,2);else w=d*t.height;if(d<p||w<o){var u=Math.sqrt(w/o),x=d/p,g=d3.min([u,x]);s=d3.max([t.size[0],Math.floor(s*g)])}var z=Math.floor(.8*t.height);z<s&&(s=z),p*(s/t.size[1])<=d&&(s!==t.size[1]&&(t.size=[t.size[0],s]),m(t))}function m(s){var e,d,t=W||"top",r=0,a=f?s.size[1]:s.fontSize||s.size[0],c=s.container.dy||1.1*a,i=s.container.x,n=s.container.dx||0,p=s.innerHeight,l=s.innerWidth,o=!1,w=function(e,t){return e||(e=""),s.element.append("tspan").attr("x",i+"px").attr("dx",n+"px").attr("dy",c+"px").style("baseline-shift","0%").attr("dominant-baseline","alphabetic").text(e)};switch("circle"===s.shape?(e="middle")===t?r=p/c%1*c/2:"end"===t&&(r=p/c%1*c):e=s.align||s.container.align||"start",s.element.attr("text-anchor",e).attr("font-size",a+"px").style("font-size",a+"px").attr("x",s.container.x).attr("y",s.container.y),e){case"middle":n=s.width/2;break;case"end":n=s.width;break;default:n=0}s.container.attr("text-anchor",e).attr("font-size",a+"px").attr("x",s.container.x).attr("y",s.container.y),truncate=function(){if(d.remove(),o?(x++,d=s.container.select("tspan")):(x--,d=d3.select(s.container.node().lastChild)),!d.empty())return words=d.text().match(/[^\s-]+-?/g),ellipsis()},lineWidth=function(){var e;return"circle"===s.shape?(p/2<(e=(x-1)*c+r)&&(e+=c),2*Math.sqrt(e*(l/2*2-e))):l},ellipsis=function(){var e,t;return words&&words.length?(e=(t=words.pop()).charAt(t.length-1),1===t.length&&0<=s.text.split.value.indexOf(t)?ellipsis():(0<=s.text.split.value.indexOf(e)&&(t=t.substr(0,t.length-1)),d.text(words.join(" ")+" "+t+"..."),d.node().getComputedTextLength()>lineWidth()?ellipsis():void 0)):truncate()},placeWord=function(e){var t,r;if(t=d.text(),o?(r=" "===s.text.charAt(s.text.length-progress.length-1)?" ":"",progress=e+r+progress,d.text(e+r+t)):(r=" "===s.text.charAt(progress.length)?" ":"",progress+=r+e,d.text(t+r+e)),d.node().getComputedTextLength()>lineWidth())return d.text(t),d=w(e),o?x--:x++};var u=1,x=null,g=null,z=function(){s.container.selectAll("tspan").remove(),s.container.html("");var e=null,t=s.words.slice(0);progress=t[0],d=w(t.shift()),x=u;for(var r=t.length,a=0;a<r;a++){if(e=t[a],p<x*c){truncate();break}placeWord(e);for(var i=!0;i;){var n=s.text.charAt(progress.length+1);(i=0<=["-","/",";",":","&"].indexOf(n))&&placeWord(n)}}return p<x*c&&truncate(),g=Math.abs(x-u)+1};return z(),g=x,"circle"===s.shape.value&&(space=p-g*c,space>c&&("middle"===valign?(u=1+(space/c/2>>0),z()):"bottom"===valign&&(o=!0,u=p/c>>0,z()))),"top"===t?y=0:(h=g*c,y="middle"===t?p/2-h/2:p-h),y-=.2*c,translate="translate(0,"+y+")",180===s.rotate||-180===s.rotate?(rx=s.container.x+l/2,ry=s.container.y+p/2):(rmod=s.rotate<0?l:p,rx=s.container.x+rmod/2,ry=s.container.y+rmod/2),rotate="rotate("+s.rotate+", "+rx+", "+ry+")",s.container.attr("transform",rotate+translate)}return this.draw=function(){return r&&r.each(function(e){var t={};t.element=d3.select(this);var r=t.element.node().previousElementSibling;t.shape=r?r.tagName.toLowerCase():"",t.container=d3.select(r),function(e){if(e.container.x=d||parseFloat(e.element.attr("x"),10)||0,e.container.y=c||parseFloat(e.element.attr("y"),10)||0,"rect"===e.shape)var t=parseFloat(e.container.attr("x"),10)||0,r=parseFloat(e.container.attr("y"),10)||0,a=parseFloat(e.container.attr("width")||e.container.style("width"),10),i=parseFloat(e.container.attr("height")||e.container.style("height"),10),n=Math.abs(t-e.container.x);else if("circle"===e.shape){t=parseFloat(e.container.attr("cx"),10)||0,r=parseFloat(e.container.attr("cy"),10)||0,n=Math.abs(t-e.container.x);var s=parseFloat(e.container.attr("r"),10)||0;i=a=2*s,t-=s,r-=s}e.x=d||t,e.y=c||r,e.padding=w||n,e.height=l||i,e.width=p||a,e.innerHeight=e.height-2*w,e.innerWidth=e.width-2*w,e.rotate=o,e.fontSize=parseFloat(e.element.attr("font-size")||e.element.style("font-size"),10),e.container.dy=parseFloat(e.element.attr("dy"),10),e.size=f?[4,80]:[e.fontSize/2,e.fontSize],w&&(e.container.x=t+w,e.container.y=r+w)}(t);t.text=t.element.text(),t.words=t.text.match(/[^\s\-\/\;\:\&]+\-?\/?\;?\:?\&?/g),t.element.html(""),f?n(t):m(t),t.size[0],t.innerHeight}),this},this.align=function(e){if(!arguments.length)return i;switch(e){case"center":e="middle";break;case"right":e="end";break;case"left":e="start"}return i=e,this},this.config=function(e){if(!arguments.length)return{alignment:i,container:r,resize:f,rotate:o,fontSizeRange:_fontSizeRange,valign:W,height:l,width:p,padding:w,x:d,y:c,wrap:a};for(var t in e)e.hasOwnProperty(t)&&this[t]&&this[t](e[t]);return this},this.container=function(e){return arguments.length?(r=e,this):r},this.height=function(e){return arguments.length?(l=e,this):l},this.padding=function(e){return arguments.length?(w=e,this):w},this.resize=function(e){return arguments.length?(f=e,this):f},this.wrap=function(e){return arguments.length?(a=e,this):a},this.rotate=function(e){return arguments.length?(o=e,this):o},this.fontSizeRange=function(e){return arguments.length?(_fontSizeRange=e,this):_fontSizeRange},this.valign=function(e){return arguments.length?(W=e,this):W},this.width=function(e){return arguments.length?(p=e,this):p},this.x=function(e){return arguments.length?(d=e,this):d},this.y=function(e){return arguments.length?(c=e,this):c},this},d3plus.textwrap().container(d3.select("#rectWrap")).draw(),d3plus.textwrap().container(d3.select("#rectResize")).resize(!0).draw(),d3plus.textwrap().container(d3.select("#rectResizeWrap")).resize(!0).wrap(!0).draw(),d3plus.textwrap().container(d3.select("#circleWrap")).draw(),d3plus.textwrap().container(d3.select("#circleResize")).resize(!0).draw(),d3plus.textwrap().container(d3.select("#circleResizeWrap")).resize(!0).wrap(!0).draw(),d3plus.textwrap().container(d3.select("#rectALeftWrap")).align("left").wrap(!0).draw(),d3plus.textwrap().container(d3.select("#rectAMiddleWrap")).align("middle").wrap(!0).draw(),d3plus.textwrap().container(d3.select("#rectARightWrap")).align("right").wrap(!0).draw(),d3plus.textwrap().container(d3.select("#circleALeftWrap")).align("left").wrap(!0).draw(),d3plus.textwrap().container(d3.select("#circleAMiddleWrap")).align("middle").wrap(!0).draw(),d3plus.textwrap().container(d3.select("#circleARightWrap")).align("right").wrap(!0).draw(),d3plus.textwrap().container(d3.select("#rectALeftResize")).align("left").resize(!0).wrap(!0).draw(),d3plus.textwrap().container(d3.select("#rectAMiddleResize")).valign("middle").resize(!0).wrap(!0).draw(),d3plus.textwrap().container(d3.select("#rectARightResize")).align("right").resize(!0).wrap(!0).draw(),d3plus.textwrap().container(d3.select("#circleALeftResize")).align("left").resize(!0).wrap(!0).draw(),d3plus.textwrap().container(d3.select("#circleAMiddleResize")).align("middle").resize(!0).wrap(!0).draw(),d3plus.textwrap().container(d3.select("#circleARightResize")).align("right").resize(!0).wrap(!0).draw(),d3plus.textwrap().container(d3.select("#rectVTopWrap")).valign("top").wrap(!0).draw(),d3plus.textwrap().container(d3.select("#rectVMiddleWrap")).valign("middle").wrap(!0).draw(),d3plus.textwrap().container(d3.select("#rectVBottomWrap")).valign("botom").wrap(!0).draw(),d3plus.textwrap().container(d3.select("#circleVTopWrap")).valign("top").wrap(!0).draw(),d3plus.textwrap().container(d3.select("#circleVMiddleWrap")).valign("middle").wrap(!0).draw(),d3plus.textwrap().container(d3.select("#circleVBottomWrap")).valign("botom").wrap(!0).draw(),d3plus.textwrap().container(d3.select("#rectVTopResize")).valign("top").resize(!0).wrap(!0).draw(),d3plus.textwrap().container(d3.select("#rectVMiddleResize")).valign("middle").resize(!0).wrap(!0).draw(),d3plus.textwrap().container(d3.select("#rectVBottomResize")).valign("botom").resize(!0).wrap(!0).draw(),d3plus.textwrap().container(d3.select("#circleVTopResize")).valign("top").resize(!0).wrap(!0).draw(),d3plus.textwrap().container(d3.select("#circleVMiddleResize")).valign("middle").resize(!0).wrap(!0).draw(),d3plus.textwrap().container(d3.select("#circleVBottomResize")).valign("botom").resize(!0).wrap(!0).draw(),d3plus.textwrap().container(d3.select("#rectP0Wrap")).padding(0).wrap(!0).draw(),d3plus.textwrap().container(d3.select("#rectP10Wrap")).padding(10).wrap(!0).draw(),d3plus.textwrap().container(d3.select("#rectP50Wrap")).padding(50).wrap(!0).draw(),d3plus.textwrap().container(d3.select("#circleP0Wrap")).padding(0).wrap(!0).draw(),d3plus.textwrap().container(d3.select("#circleP10Wrap")).padding(10).wrap(!0).draw(),d3plus.textwrap().container(d3.select("#circleP50Wrap")).padding(50).wrap(!0).draw(),d3plus.textwrap().container(d3.select("#rectP0Resize")).padding(0).resize(!0).wrap(!0).draw(),d3plus.textwrap().container(d3.select("#rectP10Resize")).padding(10).resize(!0).wrap(!0).draw(),d3plus.textwrap().container(d3.select("#rectP50Resize")).padding(50).resize(!0).wrap(!0).draw(),d3plus.textwrap().container(d3.select("#circleP0Resize")).padding(0).resize(!0).wrap(!0).draw(),d3plus.textwrap().container(d3.select("#circleP10Resize")).padding(10).resize(!0).wrap(!0).draw(),d3plus.textwrap().container(d3.select("#circleP50Resize")).padding(50).resize(!0).wrap(!0).draw(),d3plus.textwrap().container(d3.select("#rectXWrap")).wrap(!0).x(20).draw(),d3plus.textwrap().container(d3.select("#circleXWrap")).wrap(!0).x(20).draw(),d3plus.textwrap().container(d3.select("#rectYWrap")).wrap(!0).y(20).draw(),d3plus.textwrap().container(d3.select("#circleYWrap")).wrap(!0).y(20).draw(),d3plus.textwrap().container(d3.select("#rectXWrapResize")).wrap(!0).resize(!0).x(20).draw(),d3plus.textwrap().container(d3.select("#circleXWrapResize")).wrap(!0).resize(!0).x(20).draw(),d3plus.textwrap().container(d3.select("#rectYWrapResize")).wrap(!0).resize(!0).y(20).draw(),d3plus.textwrap().container(d3.select("#circleYWrapResize")).wrap(!0).resize(!0).y(20).draw(),d3plus.textwrap().container(d3.select("#rectWidthWrap")).wrap(!0).width(90).draw(),d3plus.textwrap().container(d3.select("#circleWidthWrap")).wrap(!0).width(90).draw(),d3plus.textwrap().container(d3.select("#rectHeightWrap")).wrap(!0).height(90).draw(),d3plus.textwrap().container(d3.select("#circleHeightWrap")).wrap(!0).height(90).draw(),d3plus.textwrap().container(d3.select("#rectWidthWrapResize")).wrap(!0).resize(!0).width(90).draw(),d3plus.textwrap().container(d3.select("#circleWidthWrapResize")).wrap(!0).resize(!0).width(90).draw(),d3plus.textwrap().container(d3.select("#rectHeightWrapResize")).wrap(!0).resize(!0).height(90).draw(),d3plus.textwrap().container(d3.select("#circleHeightWrapResize")).wrap(!0).resize(!0).height(90).draw(),d3plus.textwrap().container(d3.select("#rectFontSizeWrap")).wrap(!0).draw(),d3plus.textwrap().container(d3.select("#circleFontSizeWrap")).wrap(!0).draw(),d3plus.textwrap().container(d3.select("#rectFontsLargeWrapResize")).wrap(!0).resize(!0).fontSizeRange([18,28]).draw(),d3plus.textwrap().container(d3.select("#circleFontsLargeWrapResize")).wrap(!0).resize(!0).fontSizeRange([18,28]).draw(),d3plus.textwrap().container(d3.select("#rectFontsSmallWrapResize")).wrap(!0).resize(!0).fontSizeRange([4,9]).draw(),d3plus.textwrap().container(d3.select("#circleFontsSmallWrapResize")).wrap(!0).resize(!0).fontSizeRange([4,9]).draw(),d3plus.textwrap().container(d3.select("#rect90Wrap")).wrap(!0).rotate(90).draw(),d3plus.textwrap().container(d3.select("#circle90Wrap")).wrap(!0).rotate(90).draw(),d3plus.textwrap().container(d3.select("#rectN90Wrap")).wrap(!0).rotate(-90).draw(),d3plus.textwrap().container(d3.select("#circleN90Wrap")).wrap(!0).rotate(-90).draw(),d3plus.textwrap().container(d3.select("#rect180Wrap")).wrap(!0).rotate(180).draw(),d3plus.textwrap().container(d3.select("#circle180Wrap")).wrap(!0).rotate(180).draw(),d3plus.textwrap().container(d3.select("#rect90WrapResize")).wrap(!0).resize(!0).rotate(90).draw(),d3plus.textwrap().container(d3.select("#circle90WrapResize")).wrap(!0).resize(!0).rotate(90).draw(),d3plus.textwrap().container(d3.select("#rectN90WrapResize")).wrap(!0).resize(!0).rotate(-90).draw(),d3plus.textwrap().container(d3.select("#circleN90WrapResize")).wrap(!0).resize(!0).rotate(-90).draw(),d3plus.textwrap().container(d3.select("#rect180WrapResize")).wrap(!0).resize(!0).rotate(180).draw(),d3plus.textwrap().container(d3.select("#circle180WrapResize")).wrap(!0).resize(!0).rotate(180).draw();


/**
 * d3.layout.cloud.js : ref) https://bl.ocks.org/abrahamdu/e1481e86dd4e9d553cc2d7d359b91e68
 */
!function(t){if(define=void 0,module=void 0,exports=void 0,"object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n;(n=(n=(n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).d3||(n.d3={})).layout||(n.layout={})).cloud=t()}}(function(){return function t(n,e,r){function a(i,u){if(!e[i]){if(!n[i]){var f="function"==typeof require&&require;if(!u&&f)return f(i,!0);if(o)return o(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var c=e[i]={exports:{}};n[i][0].call(c.exports,function(t){var e=n[i][1][t];return a(e||t)},c,c.exports,t,n,e,r)}return e[i].exports}for(var o="function"==typeof require&&require,i=0;i<r.length;i++)a(r[i]);return a}({1:[function(t,n,e){var r=t("d3-dispatch").dispatch,a=Math.PI/180,o=64,i=2048;function u(t){return t.text}function f(){return"serif"}function l(){return"normal"}function c(t){return Math.sqrt(t.value)}function s(){return 30*(~~(6*Math.random())-3)}function h(){return 1}function y(t,n,e,r){if(!n.sprite){var u=t.context,f=t.ratio;u.clearRect(0,0,(o<<5)/f,i/f);var l=0,c=0,s=0,h=e.length;for(--r;++r<h;){n=e[r],u.save(),u.font=n.style+" "+n.weight+" "+~~((n.size+1)/f)+"px "+n.font;var y=u.measureText(n.text+"m").width*f,d=n.size<<1;if(n.rotate){var x=Math.sin(n.rotate*a),v=Math.cos(n.rotate*a),p=y*v,g=y*x,m=d*v,w=d*x;y=Math.max(Math.abs(p+w),Math.abs(p-w))+31>>5<<5,d=~~Math.max(Math.abs(g+m),Math.abs(g-m))}else y=y+31>>5<<5;if(d>s&&(s=d),l+y>=o<<5&&(l=0,c+=s,s=0),c+d>=i)break;u.translate((l+(y>>1))/f,(c+(d>>1))/f),n.rotate&&u.rotate(n.rotate*a),u.fillText(n.text,0,0),n.padding&&(u.lineWidth=2*n.padding,u.strokeText(n.text,0,0)),u.restore(),n.width=y,n.height=d,n.xoff=l,n.yoff=c,n.x1=y>>1,n.y1=d>>1,n.x0=-n.x1,n.y0=-n.y1,n.hasText=!0,l+=y}for(var M=u.getImageData(0,0,(o<<5)/f,i/f).data,b=[];--r>=0;)if((n=e[r]).hasText){for(var q=(y=n.width)>>5,k=(d=n.y1-n.y0,0);k<d*q;k++)b[k]=0;if(null==(l=n.xoff))return;c=n.yoff;for(var z=0,I=-1,O=0;O<d;O++){for(k=0;k<y;k++){var T=q*O+(k>>5),D=M[(c+O)*(o<<5)+(l+k)<<2]?1<<31-k%32:0;b[T]|=D,z|=D}z?I=O:(n.y0++,d--,O--,c++)}n.y1=n.y0+I,n.sprite=b.slice(0,(n.y1-n.y0)*q)}}}function d(t,n,e){e>>=5;for(var r,a=t.sprite,o=t.width>>5,i=t.x-(o<<4),u=127&i,f=32-u,l=t.y1-t.y0,c=(t.y+t.y0)*e+(i>>5),s=0;s<l;s++){r=0;for(var h=0;h<=o;h++)if((r<<f|(h<o?(r=a[s*o+h])>>>u:0))&n[c+h])return!0;c+=e}return!1}function x(t,n){var e=t[0],r=t[1];n.x+n.x0<e.x&&(e.x=n.x+n.x0),n.y+n.y0<e.y&&(e.y=n.y+n.y0),n.x+n.x1>r.x&&(r.x=n.x+n.x1),n.y+n.y1>r.y&&(r.y=n.y+n.y1)}function v(t){var n=t[0]/t[1];return function(t){return[n*(t*=.1)*Math.cos(t),t*Math.sin(t)]}}function p(){return document.createElement("canvas")}function g(t){return"function"==typeof t?t:function(){return t}}n.exports=function(){var t=[256,256],n=u,e=f,a=c,w=l,M=l,b=s,q=h,k=v,z=[],I=1/0,O=r("word","end"),T=null,D=Math.random,E={},S=p;function C(n,e,r){t[0],t[1];for(var a,o,i,u,f,l=e.x,c=e.y,s=Math.sqrt(t[0]*t[0]+t[1]*t[1]),h=k(t),y=D()<.5?1:-1,x=-y;(a=h(x+=y))&&(o=~~a[0],i=~~a[1],!(Math.min(Math.abs(o),Math.abs(i))>=s));)if(e.x=l+o,e.y=c+i,!(e.x+e.x0<0||e.y+e.y0<0||e.x+e.x1>t[0]||e.y+e.y1>t[1]||r&&d(e,n,t[0])||r&&(f=r,!((u=e).x+u.x1>f[0].x&&u.x+u.x0<f[1].x&&u.y+u.y1>f[0].y&&u.y+u.y0<f[1].y)))){for(var v,p=e.sprite,g=e.width>>5,m=t[0]>>5,w=e.x-(g<<4),M=127&w,b=32-M,q=e.y1-e.y0,z=(e.y+e.y0)*m+(w>>5),I=0;I<q;I++){v=0;for(var O=0;O<=g;O++)n[z+O]|=v<<b|(O<g?(v=p[I*g+O])>>>M:0);z+=m}return delete e.sprite,!0}return!1}return E.canvas=function(t){return arguments.length?(S=g(t),E):S},E.start=function(){var r=function(t){t.width=t.height=1;var n=Math.sqrt(t.getContext("2d").getImageData(0,0,1,1).data.length>>2);t.width=(o<<5)/n,t.height=i/n;var e=t.getContext("2d");return e.fillStyle=e.strokeStyle="red",e.textAlign="center",{context:e,ratio:n}}(S()),u=function(t){var n=[],e=-1;for(;++e<t;)n[e]=0;return n}((t[0]>>5)*t[1]),f=null,l=z.length,c=-1,s=[],h=z.map(function(t,r){return t.text=n.call(this,t,r),t.font=e.call(this,t,r),t.style=w.call(this,t,r),t.weight=M.call(this,t,r),t.rotate=b.call(this,t,r),t.size=~~a.call(this,t,r),t.padding=q.call(this,t,r),t}).sort(function(t,n){return n.size-t.size});return T&&clearInterval(T),T=setInterval(d,0),d(),E;function d(){for(var n=Date.now();Date.now()-n<I&&++c<l&&T;){var e=h[c];e.x=t[0]*(D()+.5)>>1,e.y=t[1]*(D()+.5)>>1,y(r,e,h,c),e.hasText&&C(u,e,f)&&(s.push(e),O.word(e),f?x(f,e):f=[{x:e.x+e.x0,y:e.y+e.y0},{x:e.x+e.x1,y:e.y+e.y1}],e.x-=t[0]>>1,e.y-=t[1]>>1)}c>=l&&(E.stop(),O.end(s,f))}},E.stop=function(){return T&&(clearInterval(T),T=null),E},E.timeInterval=function(t){return arguments.length?(I=null==t?1/0:t,E):I},E.words=function(t){return arguments.length?(z=t,E):z},E.size=function(n){return arguments.length?(t=[+n[0],+n[1]],E):t},E.font=function(t){return arguments.length?(e=g(t),E):e},E.fontStyle=function(t){return arguments.length?(w=g(t),E):w},E.fontWeight=function(t){return arguments.length?(M=g(t),E):M},E.rotate=function(t){return arguments.length?(b=g(t),E):b},E.text=function(t){return arguments.length?(n=g(t),E):n},E.spiral=function(t){return arguments.length?(k=m[t]||t,E):k},E.fontSize=function(t){return arguments.length?(a=g(t),E):a},E.padding=function(t){return arguments.length?(q=g(t),E):q},E.random=function(t){return arguments.length?(D=t,E):D},E.on=function(){var t=O.on.apply(O,arguments);return t===O?E:t},E};var m={archimedean:v,rectangular:function(t){var n=4*t[0]/t[1],e=0,r=0;return function(t){var a=t<0?-1:1;switch(Math.sqrt(1+4*a*t)-a&3){case 0:e+=n;break;case 1:r+=4;break;case 2:e-=n;break;default:r-=4}return[e,r]}}}},{"d3-dispatch":2}],2:[function(t,n,e){var r;r=this,function(t){"use strict";function n(t){var n,e=-1,r=t.length,a={},o={},i=this;for(i.on=function(t,n){if(t=function(t){var n=(t+="").indexOf("."),e=t;n>=0?t=t.slice(0,n):e+=".";if(t&&!a.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}}(t),arguments.length<2)return(n=o[t.name])&&n.value;if(t.type){var e=a[t.type],r=o[t.name];r&&(r.value=null,f=e.indexOf(r),a[t.type]=e=e.slice(0,f).concat(e.slice(f+1)),delete o[t.name]),n&&(n={value:n},o[t.name]=n,e.push(n))}else if(null==n)for(var u in a)if(n=o[u+t.name]){n.value=null;var f=(e=a[u]).indexOf(n);a[u]=e.slice(0,f).concat(e.slice(f+1)),delete o[n.name]}return i};++e<r;){if(!(n=t[e]+"")||n in i)throw new Error("illegal or duplicate type: "+n);a[n]=[],i[n]=u(n)}function u(t){return function(){for(var n,e=a[t],r=-1,o=e.length;++r<o;)(n=e[r].value)&&n.apply(this,arguments);return i}}}function e(){return new n(arguments)}e.prototype=n.prototype,t.dispatch=e}("object"==typeof e&&void 0!==n?e:r.dispatch={})},{}]},{},[1])(1)});
/**
 * d3.tip
 * Copyright (c) 2013 Justin Palmer
 * ES6 / D3 v4 Adaption Copyright (c) 2016 Constantin Gavrilete
 * Removal of ES6 for D3 v4 Adaption Copyright (c) 2016 David Gotz
 * Tooltips for d3.js SVG visualizations
 **/
d3.functor=function(t){return"function"==typeof t?t:function(){return t}},d3.tip=function(t){var e=function(){return"n"},n=function(){return[0,0]},r=function(){return" "},o=c(),l=null,i=null,s=null;function f(t){var e;l="svg"===(e=(e=t).node()).tagName.toLowerCase()?e:e.ownerSVGElement,i=l.createSVGPoint(),document.body.appendChild(o);var n="."+d3.select(o).attr("class"); $("body").append("<style> "+n+':after {box-sizing:border-box;display:inline;font-size:10px;width:100%;line-height:1;color:rgba(0,0,0,0.8);content: "▼";position:absolute;text-align:center;} </style>'),$("body").append("<style> "+n+".n:after {margin:-2px 0 0 0;top:100%;left:0;} </style>")}f.show=function(){var t=Array.prototype.slice.call(arguments);t[t.length-1]instanceof SVGElement&&(s=t.pop());var o,l=r.apply(this,t),i=n.apply(this,t),c=e.apply(this,t),y=p(),d=u.length,h=document.documentElement.scrollTop||document.body.scrollTop,m=document.documentElement.scrollLeft||document.body.scrollLeft;for(y.html(l).style("position","absolute").style("opacity",1).style("pointer-events","none").style("line-height","1").style("padding","6px").style("background","rgba(0, 0, 0, 0.8)").style("color","#fff").style("border-radius","4px").style("font-size","12px");d--;)y.classed(u[d],!1);return o=a[c].apply(this),y.classed(c,!0).style("top",o.top+i[0]+h+"px").style("left",o.left+i[1]+m+"px"),f},f.hide=function(){return p().style("opacity",0).style("pointer-events","none"),f},f.attr=function(t,e){if(arguments.length<2&&"string"==typeof t)return p().attr(t);var n=Array.prototype.slice.call(arguments);return d3.selection.prototype.attr.apply(p(),n),f},f.style=function(t,e){if(arguments.length<2&&"string"==typeof t)return p().style(t);var n=Array.prototype.slice.call(arguments);if(1===n.length){var r=n[0];Object.keys(r).forEach(function(t){return d3.selection.prototype.style.apply(p(),[t,r[t]])})}return f},f.direction=function(t){return arguments.length?(e=null==t?t:d3.functor(t),f):e},f.offset=function(t){return arguments.length?(n=null==t?t:d3.functor(t),f):n},f.html=function(t){return arguments.length?(r=null==t?t:d3.functor(t),f):r},f.destroy=function(){return o&&(p().remove(),o=null),f};var a={n:function(){var t=y();return{top:t.n.y-o.offsetHeight,left:t.n.x-o.offsetWidth/2}},s:function(){var t=y();return{top:t.s.y,left:t.s.x-o.offsetWidth/2}},e:function(){var t=y();return{top:t.e.y-o.offsetHeight/2,left:t.e.x}},w:function(){var t=y();return{top:t.w.y-o.offsetHeight/2,left:t.w.x-o.offsetWidth}},nw:function(){var t=y();return{top:t.nw.y-o.offsetHeight,left:t.nw.x-o.offsetWidth}},ne:function(){var t=y();return{top:t.ne.y-o.offsetHeight,left:t.ne.x}},sw:function(){var t=y();return{top:t.sw.y,left:t.sw.x-o.offsetWidth}},se:function(){var t=y();return{top:t.se.y,left:t.e.x}}},u=Object.keys(a);function c(){var t=d3.select(document.createElement("div"));return t.style("position","absolute").style("top","0px").style("opacity",0).style("pointer-events","none").style("box-sizing","border-box"),t.node()}function p(){return null===o&&(o=c(),document.body.appendChild(o)),d3.select(o)}function y(){for(var e=s||d3.event.target;void 0===e.getScreenCTM&&"undefined"===e.parentNode;)e=e.parentNode; if("map"==t){ var n=d3.select(e).attr("id").split("-"); e=d3.select("#" + n[0] + "-text-"+n[n.length-1]).node()} var r={},o=e.getScreenCTM(),l=e.getBBox(),f=l.width,a=l.height,u=l.x,c=l.y;return i.x=u,i.y=c,r.nw=i.matrixTransform(o),i.x+=f,r.ne=i.matrixTransform(o),i.y+=a,r.se=i.matrixTransform(o),i.x-=f,r.sw=i.matrixTransform(o),i.y-=a/2,r.w=i.matrixTransform(o),i.x+=f,r.e=i.matrixTransform(o),i.x-=f/2,i.y-=a/2,r.n=i.matrixTransform(o),i.y+=a,r.s=i.matrixTransform(o),r}return f};


/**
 * https://github.com/d3/d3-selection-multi Version 1.0.1. Copyright 2017 Mike Bostock.
 */
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("d3-selection"),require("d3-transition")):"function"==typeof define&&define.amd?define(["d3-selection","d3-transition"],n):n(t.d3,t.d3)}(this,function(t,n){"use strict";t.selection.prototype.attrs=function(n){return("function"==typeof n?function(n,r){return n.each(function(){var n=r.apply(this,arguments),e=t.select(this);for(var i in n)e.attr(i,n[i])})}:function(t,n){for(var r in n)t.attr(r,n[r]);return t})(this,n)},t.selection.prototype.styles=function(n,r){return("function"==typeof n?function(n,r,e){return n.each(function(){var n=r.apply(this,arguments),i=t.select(this);for(var o in n)i.style(o,n[o],e)})}:function(t,n,r){for(var e in n)t.style(e,n[e],r);return t})(this,n,null==r?"":r)},t.selection.prototype.properties=function(n){return("function"==typeof n?function(n,r){return n.each(function(){var n=r.apply(this,arguments),e=t.select(this);for(var i in n)e.property(i,n[i])})}:function(t,n){for(var r in n)t.property(r,n[r]);return t})(this,n)},n.transition.prototype.attrs=function(n){return("function"==typeof n?function(n,r){return n.each(function(){var e=r.apply(this,arguments),i=t.select(this).transition(n);for(var o in e)i.attr(o,e[o])})}:function(t,n){for(var r in n)t.attr(r,n[r]);return t})(this,n)},n.transition.prototype.styles=function(n,r){return("function"==typeof n?function(n,r,e){return n.each(function(){var i=r.apply(this,arguments),o=t.select(this).transition(n);for(var f in i)o.style(f,i[f],e)})}:function(t,n,r){for(var e in n)t.style(e,n[e],r);return t})(this,n,null==r?"":r)}});

/**
 * utils
 **/
Number.prototype.format=function(){if(0==this)return 0;for(var t=/(^[+-]?\d+)(\d{3})/,r=this+"";t.test(r);)r=r.replace(t,"$1,$2");return r},
String.prototype.format=function(){var t=parseFloat(this);return isNaN(t)?"0":t.format()};
Number.prototype.isInteger=function() { return (this ^ 0) === +this; };
/**
 * KDAVIF START
 **/
(function () {
	
	var Davif = function(){
		var self = this;
	    this.init = function(element, options, config){
	    	
	    	this.element = element;	self.element = element;
	    	this.options = options;	self.options = options;
	    	this.config = config;	self.config = config;
	    	
	    	//그래프 width, height 영역 사이즈 추출 및 설정  
	    	options.width_old = options.width == null ? "100%" : options.width;
	    	options.height_old = options.height == null ? "100%" : options.height;

	    	if(options.width && (options.width.toString()).indexOf("%") > 0) {
	    		var w = $(element.selector).width();
	    		w = w == 0 ? $(window).width() : w;
	    		w = w == 0 ? $(window).attr('screen').width : w;
	    		var num = Number(options.width.replace('%', ''));
	    		options.width = w * (num / 100);
	    	}
	    	if(options.height && (options.height.toString()).indexOf("%") > 0) {
	    		var h = $(element.selector).height();
	    		h = h == 0 ? $(window).height() : h;
	    		h = h == 0 ? $(window).attr('screen').height : h;
	    		var num = Number(options.height.replace('%', ''));
	    		options.height = h * (num / 100);
	    	}
	    	options.width = options.width ? Number(options.width) : $(element.selector).width();
	    	options.height = options.height ? Number(options.height) : $(element.selector).height();
	    	options.width = options.width == 0 ? $(window).width() : options.width;
	    	options.width = options.width == 0 ? $(window).attr('screen').width : options.width;
	    	options.height = options.height == 0 ? $(window).height() : options.height;
	    	options.height = options.height == 0 ? $(window).attr('screen').height : options.height;
	    	
	    	if(options.type != config.CHART_TYPE_CLOUD) {
	    		options.fontColor = options.fontColor ? options.fontColor : "#343434";
	    	}
	    	
	    	//데이터 타입(dataType) 설정 
	    	if(options.dataCsv || options.dataRand || options.dataUrl) {
	    		
	    	} else {
	    		if(options.data && options.dataType) {
    				switch (options.dataType) {
					case config.DATA_TYPE_JSON:
						options.data = options.data;
						options.dataCsv = null;
						options.dataRand = null;
						break;
					case config.DATA_TYPE_CSV:
						options.dataCsv = options.data;
						options.data = null;
						options.dataRand = null;
						break;
					case config.DATA_TYPE_RAND:
						options.dataRand = options.data;
						options.data = null;
						options.dataCsv = null;
						break;
					}
	    		}
	    	}
	    };
	    
	    //브라우저 사이즈 변경 또는 차트 영역이 변경되는 이벤트가 발생 시 자동으로 해당 영역에 맞춤
	    this.resize = function() {
	    	var options = this.options;
	    	var element = this.element;

	    	if(options.width_old && (options.width_old.toString()).indexOf("%") > 0) {
	    		var w = $(element.selector).width();
	    		w = w == 0 ? $(window).width() : w;
	    		w = w == 0 ? $(window).attr('screen').width : w;
	    		var num = Number(options.width_old.replace('%', ''));
	    		options.width = w * (num / 100);
	    	}
	    	if(options.height_old && (options.height_old.toString()).indexOf("%") > 0) {
	    		var h = $(element.selector).height();
	    		h = h == 0 ? $(window).height() : h;
	    		h = h == 0 ? $(window).attr('screen').height : h;
	    		var num = Number(options.height_old.replace('%', ''));
	    		options.height = h * (num / 100);
	    	}
	    }
	    
	    //차트 내 사용되는 기본 컬러 설정
	    this.setColors = function() {
	    	var options = this.options;
	    	if(!options.color) {
	    		options.color =  options.color ? options.color : d3.scaleOrdinal().range(
	    				["#aec7e8",'#b5cf6b', "#ff7f0e", "#ffbb78", "#2ca02c", 
	    				 "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5", 
	    				 "#8c564b", "#c49c94", "#e377c2", "#f7b6d2", "#7f7f7f", 
	    				 "#c7c7c7", "#bcbd22", "#dbdb8d", "#17becf", "#9edae5"]
	    				);
	    		
	    	} else {
		    	if($.isArray(this.options.color)) {
		    		options.color = d3.scaleOrdinal().range(options.color);
		    	} else {
		    		var keys = d3.keys(this.options.color);
		    		var values = d3.values(this.options.color);
		    		this.options.color = d3.scaleOrdinal().domain(keys).range(values);
		    	}
	    	}
	  
	    };
	    
	    //차트 별 기본 스타일 설정이 필요한 경우 사용되는 함수
	    this.defaultStyle = function() {
	    	
	    	var options = this.options;
	    	var element = this.element;
	    	var config = this.config;
	    	switch (options.type) {
			case config.CHART_TYPE_LINE:
				
				break;

			default:
				break;
			}
	    		
	    	
	    };
	    
	    //차트 draw 관련 함수
	    this.render = function() {
	    	var options = this.options;
	    	var element = this.element;
	    	var config = this.config;
	    	
	    	//차트를 그리기 위한 최상위 노드 svg 태그 설정 
	    	if(options.svg) {
	    		this.svg = options.svg;
	    	} else {
	    		d3.select(element.selector).select("svg").remove();
	    		if( options.type != config.CHART_TYPE_TABLE && 
	    				options.type != config.CHART_TYPE_RAPID_TABLE && 
	    				options.type != config.CHART_TYPE_GEO_MAP && 
	    				options.type != config.CHART_TYPE_MAP) {
	    			
	    			this.svg = d3.select(element.selector).append("svg:svg")
	    			.attr("width", options.width)
	    			.attr("height", options.height)
	    			.style("background-color", options.backgroundColor)
	    			.style("overflow", "hidden")
	    			//.style("position", "absolute")
	    			.append("g");
	    		}
	    	}

	    	//옵션 설정
	    	this.setOptions();

    		//데이터 url 옵션 사용 시 ajax로 데이터 가져옴 
	    	if(this.options.dataUrl) {
    			this.ajax(this.options.dataUrl, this.options.dataParams, this.setData);
    		}
	    	//데이터 입력하여 사용할 경우 데이터 호출 없이 바로 차트 draw 시킴
	    	else {
    			this.draw();
	    	}
	    	
	    	//범례 기능 사용 시 차트 그린 후 범례 출력 시킴 
	    	if(options.legend.type == "horizontal") this.horizontalLegend();
	    	else if(options.legend.type == "vertical") this.verticalLegend();
	    	
	    	//워터 마크 draw
    		this.setWatermark();
	    };
	    
	    //차트 별 기본으로 설정되어야 할 옵션 셋팅 
	    this.setOptions = function() {
	    	var options = this.options;
	    	var margin = options.margin;
	    	var width = options.width - margin.left - margin.right;
			var height = options.height - margin.top - margin.bottom;
			
			//2차원(x,y축) 차트 사용 시 y축 텍스트가 차트 영역 내에 출력 되길 원하는 경우 필요한 스타일 설정
			if(options.axis.inner) {
				var y = {
					//ticks : 5,					//y축 axis tick 출력 갯수
					x : options.y.x ? options.y.x : 5,
					y : options.y.y ? options.y.y : 0,
					align : options.y.align ? options.y.align : "start",
					//color : "#545454",
					usePath : options.y.usePath != null ? options.y.usePath : true
				}

				if(options.y.grid) {
					var grid = {
						dash : options.y.grid.dash != "undefined" && options.y.grid.dash != null? options.y.grid.dash : "0",
						height : options.y.grid.height != "undefined"  && options.y.grid.height != null? options.y.grid.height : height,
						width : options.y.grid.width != "undefined"  && options.y.grid.width != null? options.y.grid.width : width,
					}
				}
				$.extend(true, options.y, y);
			} 
			
			if(options.type == "quad_scatter") {
				if(!options.y.grid) {
					options.y.grid = {};
					options.y.grid.width = 0;
				}
			}
			if(options.type != "bubble") {
				options.axis.text.style.fill = options.axis.text.style.fill ? options.axis.text.style.fill : "#545454";  
				options.axis.text.style['font-size'] = options.axis.text.style['font-size'] ? options.axis.text.style['font-size'] : "12px";
			}
	    };
	    
	    //차트 그린 직후 호출되어야할 함수
	    this.afterCall = function() {
	    	this.options.afterCall();
	    };
	    
	    //dataUrl로 데이터 사용 시 호출, 데이터 타입 설정
	    this.setData = function(data) {
	    	if(typeof data == "string") {
	    		data = $.parseJSON(data);
	    	}
	    	
	    	if(this.options.dataType) {
				switch (this.options.dataType) {
				case config.DATA_TYPE_JSON:
					this.options.data = data;
					this.options.dataCsv = null;
					this.options.dataRand = null;
					break;
				case config.DATA_TYPE_CSV:
					this.options.dataCsv = data;
					this.options.data = null;
					this.options.dataRand = null;
					break;
				case config.DATA_TYPE_RAND:
					this.options.dataRand = data;
					this.options.data = null;
					this.options.dataCsv = null;
					break;
				}
    		} else {
    			this.options.data = data;
    		}
	    	this.draw();
	    };

	    //dataUrl 사용 시 ajax로 데이터 호출  
		this.ajax = function(dataUrl, serverData, successCall, failCall, callParams, httpType) {
			$.support.cors = true;
			if(dataUrl) {
				//if(dataUrl.match('^https://') || dataUrl.match('^http://')){
					var $this = this;
					$.ajax({
						url : dataUrl,
						crossDomain : true,
						global : false,
						type : httpType,
						data : serverData,
						dataType : "json",
						async : true,
						cache : false,
						success : function(data, a, b, c) {
							if(successCall) {
								successCall.call($this, data, callParams);
							}
						},
						error : function(xhr, status, error) {
							$.getJSON( dataUrl, serverData )
							.done(function( json ) {
								successCall(json);
							})
							.fail(function(xhr, status, error ) {
								if(failCall) {
									failCall(xhr, status, error);
								}
							});
						}
					});
				//}else{
					/*$.getJSON( dataUrl, serverData )
					.done(function( json ) {
						successCall(json);
					})
					.fail(function(xhr, status, error ) {
						failCall(json);
					});*/
				//}
			}
		};
		
		//클릭 이벤트
		this.click = function(d) {
			if(!this.options.click) {
				return;
			}
			/****
			 * 데이터 내보내기 전 정형화 시킬 코드 추가
			 */
			this.options.click(d);
		};
		
		//출력 텍스트가 숫자 포맷인 경우 사용
		this.digits = function(num){ 
			if((num.toString()).indexOf('.') != -1) {
				return Number(num);
			}
			return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		};
		
		//string CSV를 차트에서 사용할 수 있는 JSON 데이터로 파싱 시킴
		this.parseCSV = function(strDelimiter) {
			if(!this.options.dataCsv) {
				return;
			}
			
			var csv = $.trim(this.options.dataCsv);
			var data = Papa.parse(csv, {
				header : true,
				skipEmptyLines : true
			}).data;

			for(var i in data) {
				if(data[i].value) {
					data[i].value = Number(data[i].value);
				}
			}
			
			this.options.dataCsv = null;
			this.options.data = data;
		};
		
		//JSON 데이터 차트별로 필요한 포맷으로 전처리 
		this.parseJSON = function() {
			if(this.options.data) {
				var data = this.options.data;
				for(var i in data) {
					if(data[i].value) {
						data[i].value = Number(data[i].value);
					}
				}
			}
			
			if(!this.options.data || !this.options.dataKeys) {
				return;
			}
			
			var dataKeys = d3.keys(this.options.dataKeys);
			var dataValues = d3.values(this.options.dataKeys);
			if(!$.isArray(data)) {
				for(var key in data) {
					for(var j in dataKeys) {
						if(key == dataValues[j]) {
							data[dataKeys[j]] = data[dataValues[j]];
							break;
						}
					}
					var values = data[key];
					if($.isArray(values)) {
						inputObj(values);
					}
				}
			} else {
				input(data);
			}
			//dendrogram, explorer
			function inputObj(data) {
				for(var i in data) {
					var d = data[i];
					var dKeys = d3.keys(d);
					var dValues = d3.values(d);
					for(var j in dataKeys) {
						for(var k in dKeys) {
							if(dataValues[j] == dKeys[k]) {
								data[i][dataKeys[j]] = data[i][dKeys[k]];
								break;
							}
							if($.isArray(dValues[k])) {
								inputObj(dValues[k]);
							}
						}
					}
					if(data[i].value) data[i].value = Number(data[i].value);
				}
			}
			//etc.
			function input(data) {
				for(var i in data) {
					var d = data[i];
					var dKeys = d3.keys(d);
					var dValues = d3.values(d);
					for(var j in dataKeys) {
						for(var k in dKeys) {
							if(dataValues[j] == dKeys[k]) {
								data[i][dataKeys[j]] = data[i][dKeys[k]];
								if(data[i].value) data[i].value = Number(data[i].value);
								break;
							}
						}
						if($.isArray(dValues[j])) {
							input(dValues[j]);
						}
					}
					if(data[i].value) data[i].value = Number(data[i].value);
				}
			}
			
			this.options.data = data;
			
		};
		
		//dendrogram, hierarchy_tree 그래프 JSON 데이터 전처리
		this.parseHierarchyJson = function() {
			var json = this.options.data;
			/*var arr = d3.keys(json[0]).filter(function(d) {
				if(d == "parent") return true;
			})
			console.log(arr)
			if(arr.length == 0) return json;
			*/
			var map = d3.map();
			var result = json[0];
			result.children = [];
			for(var i in json) {
				var d = json[i];
				if(result.id == d.parent) {
					result.children.push(d)
				} else {
					addChildren(d, result.children);
				}
			}
			function addChildren(d, children) {
				for(var i in children) {
					var c = children[i];
					if(c.id == d.parent) {
						if(!c.children) {
							c.children = [d];
						} else {
							c.children.push(d);
						}
					} else {
						addChildren(d, c.children);
					}
				}
			}
			return result;
		}
		
		//숫자 여부 체크
		this.isInt = function(n){
		    return Number(n) === n && n % 1 === 0;
		};
		//null 체크
		this.isNull = function(value) {
			if( value == 'NaN' || value == "" || value == null || value == undefined || value == "undefined" || ( value != null && typeof value == "object" && !Object.keys(value).length ) ){ return true }
			else{ return false }
		};
		//value값 정렬
		this.sort = function (a,b) {
			if (a.value > b.value) {
				return -1;
			}
			if (a.value < b.value) {
				return 1;
			}
			return 0;
		};
		
		//라인 차트가 있는 그래프 내 차트 타입 설정
		this.lineType = function(type) {
			var lineType = d3.curveCardinal;
			switch (type) {
			case "basis":
				lineType = d3.curveBasis;
				break;
			case "basis-closed":
				lineType = d3.curveBasisClosed;
				break;
			case "basis-open":
				lineType = d3.curveBasisOpen;
				break;
			case "bundle":
				lineType = d3.curveBundle;
				break;
			case "cardinal-closed":
				lineType = d3.curveCardinalClosed;
				break;
			case "cardinal-open":
				lineType = d3.curveCardinalOpen;
				break;
			case "catmull-rom":
				lineType = d3.curveCatmullRom;
				break;
			case "catmull-rom-closed":
				lineType = d3.curveCatmullRomClosed;
				break;
			case "catmull-rom-open":
				lineType = d3.curveCatmullRomOpen;
				break;
			case "linear":
				lineType = d3.curveLinear;
				break;
			case "linear-closed":
				lineType = d3.curveLinearClosed;
				break;
			case "monotonex":
				lineType = d3.curveMonotoneX;
				break;
			case "monotoney":
				lineType = d3.curveMonotoneY;
				break;
			case "natural":
				lineType = d3.curveNatural;
				break;
			case "step":
				lineType = d3.curveStep;
				break;
			case "step-after":
				lineType = d3.curveStepAfter;
				break;
			case "step-before":
				lineType = d3.curveStepBefore;
				break;
			}
			return lineType;
		};
		
		//2차원 차트 x, y축 draw 및 객체 생성
		this.drawAxis = function(data, xDomain, yDomain, opt) {
			var self = this;
			var options = this.options;
			var margin = options.margin;
			var type = options.type,
			width = options.width - margin.left - margin.right,
			height = options.height - margin.top - margin.bottom;

			//x축 설정
			var xScale = d3.scaleBand();
			if(options.x.space) xScale.padding(options.x.space);
					
			//차트 별 설정되는 x축 scale이 다른 경우
			switch (options.type) {
			case 'scatter':
			case 'quad_scatter':
				xScale = d3.scaleLinear();
				break;
			}
			xScale.domain(xDomain).range([options.x.padding, width - options.x.padding]);
			
			//y축 설정
			var yScale = d3.scaleLinear()
			
			//차트 별 설정되는 y축 scale이 다른 경우
			switch (options.type) {
			case 'scatter_band':
				yScale = d3.scaleBand();
				break;
			}
			yScale.range([height, 0]);
			if(this.options.tickSuffix == "%") {
				y.domain([0, 100]);
			} else if(options.type == "scatter_band") {
				yScale.domain(yDomain);
			} else {
				yScale.domain(yDomain).nice();
			}
			//y축 높이 범위 설정 (scatter_band 사용)
			if(options.y.range) yScale.range(options.y.range);
			
		    var xAxis = d3.axisBottom(xScale);
		    var yAxis = d3.axisLeft(yScale)
		    
		    if(options.x.tickSkip) xAxis.tickValues(xScale.domain().filter(function(d, i) { return !(i % (options.x.tickSkip)); }));
		    if(options.y.ticks) yAxis.ticks(options.y.ticks);

		    //객체 생성
		    var x = this.svg.append("g")
		      .attr("class", "x axis")
		      .attr("transform", 'translate(0, '+height+')')
		      .attr("y", 10)
		      .call(xAxis);

		    var y = this.svg.append("g")
		      .attr("class", "y axis")
		      .attr("x", -10)
		      .call(yAxis);
		    
		    this.xScale = xScale;
		    this.yScale = yScale;
		    this.xAxis = xAxis;
		    this.yAxis = yAxis;
		    this.x = x;
		    this.y = y;

		    //y축이 오른쪽인 경우
		    if(options.axis && options.axis.right) {
		    	
		    	var top = options.y.right.padding.top ? options.y.right.padding.top : 0;
				//dual scale
				var yRightScale = d3.scaleLinear().range([height, top]);
				var yRightAxis = d3.axisRight(yRightScale);
				
				if(options.y.right.ticks) yRightAxis.ticks(options.y.right.ticks);
				
				yRightScale.domain([0, d3.max(options.line.data, function(d) {return d.value; })]).nice();
				
				var yRight = this.svg.append("g")
			      .attr("class", "y-right axis")
			      .attr("transform", "translate( " + width + ", 0 )")
			      .call(yRightAxis);
				
			    this.yRightScale = yRightScale;
			    this.yRightAxis = yRightAxis;
			    this.yRight = yRight;
		    }
		    
		    
		};
		
		//2차원 차트 x, y축 그린 후 스타일 설정
		this.styleAxis = function(xScale, yScale, xAxis, yAxis) {
			var self = this;
			var options = this.options;
			var margin = options.margin;
			var type = options.type,
			width = options.width - margin.left - margin.right,
			height = options.height - margin.top - margin.bottom;

		    var x = this.svg.select(".x");
		    var y = this.svg.select(".y");

		    //x축 point별 grid 선 스타일 및 높이 설정
		    if(options.x && options.x.grid) {
		    	var opt = options.x;
		    	var grid_dash = opt.grid.dash != null ? opt.grid.dash : "2,2";
		    	var grid_height = opt.grid.height != null ? opt.grid.height : height;
		    	x.selectAll(".tick line").attr("stroke-dasharray", grid_dash);
		    	options.x.line.y = -grid_height;
		    }
		    
		    //y축 point별 grid 선 스타일 및 길이 설정
		    if(options.y && options.y.grid) {
		    	var opt = options.y;
		    	var grid_dash = opt.grid.dash != null ? opt.grid.dash : "2,2";
		    	var grid_width = opt.grid.width != null ? opt.grid.width : width;
		    	y.selectAll(".tick line").attr("stroke-dasharray", grid_dash);
		    	options.y.line.x = grid_width;
		    }
		    axisStyle(x, options.x);
		    axisStyle(y, options.y);

		    //point별 path, text, line 객체 스타일 설정
	    	function axisStyle(obj, opt) {
	    		//path 스타일 설정
	    		obj.select("path")
	    		.style("stroke", opt.line.color ? opt.line.color : "#d8d8d8")
	    		.style("stroke-width", opt.usePath ? (opt.line.width ? opt.line.width : 1) : 0)
	    		if(opt) self.setObject(obj, opt);
	    		
	    		//text 스타일 설정
		    	var txtObj = obj.selectAll(".tick text")
		    	self.setObject(txtObj, options.text);
		    	self.setObject(txtObj, opt.text);
		    	if(opt.align) txtObj.style("text-anchor", opt.align)
		    	if(opt.color) txtObj.style("fill", opt.color); 
		    	if(opt.x != null) txtObj.attr("x", opt.x)
		    	if(opt.y != null) txtObj.attr("y", opt.y)
		    	if(opt.rotate != null) txtObj.attr("transform", "rotate("+opt.rotate+")");

		    	//line 스타일 설정
		    	var lineObj = obj.selectAll("line");
		    	if(opt.line.x != null) lineObj.attr("x2", opt.line.x)
		    	if(opt.line.y != null) lineObj.attr("y2", opt.line.y)
		    	lineObj.style("stroke", opt.line.color ? opt.line.color : "#d8d8d8")
		    	lineObj.style("stroke-width", opt.line.width ? opt.line.width : 1);
		    	if(opt.line) self.setObject(lineObj, opt.line);
		    }
	    	
	    	//bar차트 내 line차트 추가되는 경우 오른쪽에 y축 라인차트 데이터 출력 시 포맷 설정
	    	//현재 bh>모니터링>언급량 추이에서만 사용됨 
	    	if(options.line && options.line.data) {
	    		var yRight = this.svg.select(".y-right");
	    		axisStyle(yRight, options.y.right);
	    		yRight.selectAll(".tick text").text(function(d, i) {
	    			if(options.y.right.format) return options.y.right.format(d);
	    			else return d;
	    		})
	    	}

	    	//y축 텍스트 차트 영역 내에서 그려지는 경우 path 설정
	    	if(options.axis && options.axis.inner) {
	    		x.select("path").attr("d", "M0.5,0V0.5H"+width+".5V0")
	    		y.select("path").attr("d", "M0,"+height+".5H0.5V0.5H0")
	    	}
	    	//scatter_band x,y축 path 설정
	    	if(options.type == "scatter_band") {
	    		x.select("path").attr("d", "M0.5,0V0.5H"+width+".5V"+(-height))
	    		y.select("path").attr("d", "M0,"+height+".5H0.5V0.5H"+width)
	    	}
	    	
	    	//y축 텍스트 포맷 설정
    		y.selectAll(".tick text").text(function(d, i) {
    			if(options.y.format) return options.y.format(d);
    			else return d;
    		})
    		
    		//x축이 데이터 포맷 설정
    		var inputFormat = d3.timeParse(options.x.inputFormat);
			var outputFormat = d3.timeFormat(options.x.outputFormat);
			x.selectAll(".x .tick text").text(function(d, i) {
				if(options.x.format) return options.x.format(d, inputFormat(d), outputFormat(inputFormat(d)), i);
				else if(self.isNull(options.x.outputFormat) || self.isNull(options.x.inputFormat)) return d; 
				else return outputFormat(inputFormat(d));
			})
			
			//x축 텍스트 줄바꿈 설정
			if(options.x.wrap === true) this.svg.selectAll(".x .tick text").call(self.wrap, options.wrapWidth);
		 
		};
		
		//특정 객체(object)의 style과 attr를 설정 함
		//style은 css 형식
		//attr는 d3에서 사용하는 모든 attr 설정 사용 가능
    	this.setObject = function(object, options, d) {
    		if(options && options.attr) {
    			for(var key in options.attr) {
    				var option = options.attr[key];
    				object.attr(key, option);
    			}
    		}
    		if(options && options.style) {
    			for(var key in options.style) {
    				var option = options.style[key];
    				object.style(key, option);
    			}
    		}
		};
		
		//tooltip관련 객체 생성
		this.drawTooltip = function(svg, dataLength) {
			
			var id = this.element[0].id;
			var options = this.options;
			
			var defs = svg.append("defs");
			var filter = defs.append("filter").attr("id", id + "-drop-shadow").attr("height", "130%");
			filter.append("feGaussianBlur").attr("in", "SourceAlpha").attr("stdDeviation", 5).attr("result", "blur");
			filter.append("feOffset").attr("in", "blur").attr("dx", 1).attr("dy", 1).attr("result", "offsetBlur");
			var feMerge = filter.append("feMerge");
			feMerge.append("feMergeNode").attr("in", "offsetBlur")
			feMerge.append("feMergeNode").attr("in", "SourceGraphic");

			var tooltips = svg.append( 'g' )
			.attr("class", id+"-tooltip")
            .style('position', 'absolute')
            .style('top', '0px')
            .style('left', '0px')
            .attr( 'min-width', 200 )
            .style("display", "none")
			.style('pointer-events', 'visibleStroke');
			
			this.setObject(tooltips.selectAll("text"), options.text);
			
			var len = dataLength ? dataLength : 0;
			if(options.tooltip.nodeMax) {
				len = options.tooltip.nodeMax;
				if(options.tooltip.nodeMax > dataLength) {
					len = dataLength;
				}
			}
			if(options.line.data) {
				len += 1;
			}
			var rect = tooltips.append("rect")
			   	.attr("x", 13)
			   	.attr("y", 13)
			   	.attr("height", 55 + len * 20)
			   	.attr("width", 208)
			   	.style("filter", "url(#"+id+"-drop-shadow)")
			   	.style('pointer-events', 'visibleStroke')
			   	.attr("fill", "#ffffff")
			   	.style("opacity", 0.8)
			   	.attr("rx", 1)
			   	.attr("ry", 1);
			if(options.tooltip.rect) self.setObject(rect, options.tooltip.rect);
			
			var g = tooltips.append("g").attr("class", id+"-tip-g")
			
			if(dataLength && dataLength > 0) {
				this.drawTooltipLabel(dataLength);
			}
			return tooltips;
		};
		
		//tooltip에 선언된 데이터 출력 시 호출
		this.drawTooltipLabel = function(dataLength) {
			var id = this.element[0].id;
			var options = this.options;
			var g = d3.selectAll("."+id+"-tip-g");
			
			var title = g.append("text")
			.attr("class", id+"-tip-title")
			.attr("x", 33)
			.attr("y", 44)
			.attr("text-anchor", "left")
			.style("font-size", "13px")
			//.style("font-weight", "bold")
			.style("fill", "#6A7C87")

			if(options.tooltip.text) self.setObject(title, options.tooltip.text);
			if(options.tooltip.title) self.setObject(title, options.tooltip.title);
			
			
			for (var i = 0; i < dataLength; i++) {
				if(options.tooltip.nodeMax <= i) break;
				draw(id, i);
			}
			
			function draw(id, i) {
				
				if(options.type != "world_map") {
					var circle = g.append("circle")
						.attr("class", id+"-tip-circle-"+i)
						.attr("cx", 36)
						.attr("cy", 68)
						.attr("r", 4)
				}
				var name = g.append("text")
					.attr("class", id+"-tip-text-"+i)
				    .attr("x", 45)
				    .attr("y", 72)
				    .attr("text-anchor", "left")
				    .style("font-size", "12px")
				    .style("fill", "#6A7C87")
	
				var value = g.append("text")
				    .attr("class", id+"-tip-value-"+i)
				    .attr("x", 183)
				    .attr("y", 72)
				    .attr("text-anchor", "right")
				    .style("font-size", "12px")
				    .style("font-weight", "bold")
				    .style("fill", "#404247");
		
				//툴팁 객체 스타일, 속성 설정 방법 다시 체크하기 
				if(options.tooltip.text) {
					self.setObject(name, options.tooltip.text);
					self.setObject(value, options.tooltip.text);
				}
				if(options.tooltip.circle) self.setObject(circle, options.tooltip.circle);
				if(options.tooltip.name) self.setObject(name, options.tooltip.name);
				if(options.tooltip.value) self.setObject(value, options.tooltip.value);
			}
			if(options.line.data) draw(id, dataLength);
		};
		
		//tooltip mousemove 이벤트 발생 시 호출 
		this.moveTooltip = function(tooltips, data, d, x, y, type) {
			var options = this.options;
			if(options.tooltip.enabled === false) return;

			tooltips.style("display", "block");
				
			var id = this.element[0].id;
			var width = options.width - options.margin.left - options.margin.right;
			var height = options.height - options.margin.bottom - options.margin.top;
			var inputFormat = d3.timeParse(options.x.inputFormat);
			var outputFormat = d3.timeFormat(options.tooltip.dateFormat);
			var numberFormat = d3.format(",d");
			
			var index = 0;
			var added = [];
			
			//차트별 툴팁에 출력시킬 데이터 추출 
			if(type == "bar") {
				added.push({title: d.name, name : d.name, value : d.value, color : d.color ? d.color : self.getColor(d)});
			} else if(type == "stackedbar") {
				for(var key in d.data) {
					if(key == "name") continue;
					var value = d.data[key];
					var obj = {title: d.data.name, name : key, value : value};
					obj.color = d.colors ? d.colors[key] : self.getColor(key);
					added.push(obj);
				}
				if(options.line.data) {
					var lineData = options.line.data[d.idx];
					var obj = {title: lineData.x, name : lineData.name, value : lineData.value};
					obj.color = lineData.color ? lineData.color : self.getColor(lineData.name);
					added.push(obj);
				}
				if(options.bar.type != "grouped") added = added.reverse();
			} else if(type == "stackedbar_line") {
				for(var i in d.values) {
					var dd = d.values[i];
					var obj = {title: dd.name, name : dd.category, value : dd.value};
					obj.color = dd.color ? dd.color : self.getColor(dd.category);
					added.push(obj);
				}
				if(options.line.data) {
					var lineData = options.line.data[d.idx];
					var obj = {title: lineData.x, name : lineData.name, value : lineData.value};
					obj.color = lineData.color ? lineData.color : self.getColor(lineData.name);
					added.push(obj);
				}
				if(options.bar.type != "grouped") added = added.reverse();
			} else if(type == "world_map") {
				
				if(d.data) {
					for(var i in d.data) {
						var obj = {
								title: d.name ? d.name : d.properties.name,
								name : d.data[i].name,
								value : d.data[i].value,
						}
						added.push(obj);
					}
					this.drawTooltipLabel(d.data.length);
					tooltips.select("rect").attr("height", 55 + d.data.length * 20);
				}
				
			} else {
				for(var i in data) {
					var obj = data[i];
					var list = obj.data;
					for(var j in list) {
						var item = list[j];
						if(item.date == d) {
							if(options.tooltip.nodeMax <= index) break;
							var df = options.tooltip.dateFormat != '' ? outputFormat(inputFormat(item.date)) : item.date;
							added.push({title:df, name : item.name, value:item.value, color:item.color});
							index++;
							break;
						}
					}
				}
				added.sort(self.sort)
			}
			//평균선 마지막에 추가
			added.map(function(d, i) {
				if(d.name == "avg" || d.name == "평균선") {
					var splice = added.splice(i, 1);
					added.push(splice[0]);
				}
			});

			draw(added)
			function draw(list) {

				var title = list[0].title;
				if(type && type.indexOf("bar") >= 0 && options.tooltip.dateFormat != '') title = outputFormat(inputFormat(list[0].title));
				
				var title = tooltips.select("."+id+"-tip-title")
			    .attr("x", 33)
			    .attr("y", 44)
			    .text(title);

				var total = 0;
				d3.map(list, function(d) { total += Number(d.value);})
				var max = d3.max(list, function(d) { return Number(d.value);})
				var w = [title.node().getBBox().width];
				for(var i in list) {
					if(options.tooltip.nodeMax <= i) break;
					var item = list[i];
					item.total = total;
					item.max = max;
					
					var text_x = options.type == "world_map" ? 35 : 45;
					var text = tooltips.select("."+id+"-tip-text-"+i)
				    .attr("x", text_x)
				    .attr("y", 72 + i * 20)
				    .text(function() {
				    	return options.tooltip.name ? options.tooltip.name(item) : (item.name);
				    })
					w.push(text.node().getBBox().width);
				}
				var max_w = d3.max(w)
				var value_w = []; 
				for(var i in list) {
					if(options.tooltip.nodeMax <= i) break;
					var item = list[i];
					var value = tooltips.select("."+id+"-tip-value-"+i)
						.attr("x", max_w + 75)
					    .attr("y", 72 + (i * 20))
					    .text(function() {
					    	return options.tooltip.value ? options.tooltip.value(item) : numberFormat(item.value);
					    })
					var vw = value.node().getBBox().width;
					value_w.push(vw);
					if(item.color) {
						var circle = tooltips.select("."+id+"-tip-circle-"+i)
						  .attr("cx", 36)
						  .attr("cy", 68 + (i * 20))
						  .style("fill", function() {
							  //console.log(item)
							  if(item.color) return item.color;
							  else return options.color(item.name);
						  });
					} else {
						tooltips.select("."+id+"-tip-circle-"+i).at
					}
				}
				tooltips.select("rect").attr("width", max_w + d3.max(value_w) + 75);
				
				//툴팁 위치 설정
				x = x + options.tooltip.x;
			    y = y + options.tooltip.y;
			    var box = tooltips.node().getBBox();
			    if (x > width - (box.width / 2)) {
			        x = x - (box.width / 2) - (options.tooltip.x * 2);
			    }
			    if (y < box.height / 2) {
			        y = box.height / 2;
			    } else if (y > height - (box.height / 2) - 5) {
			        y = height - (box.height / 2) - 5;
			    }
			    tooltips.style('display', 'block').attr("transform", "translate(" + x + "," + (y - (box.height / 2)) + ")");
			    
			    if(options.tooltip.title && options.tooltip.title.align == "center") {
			    	tooltips.select("."+id+"-tip-title").attr("x", (max_w + d3.max(value_w) + 100) / 2 );
			    }
			
			}
		    return tooltips;
		};
		
		//라인관련 데이터 파싱 (line, radar, bar-line)
		this.parser = function(data) {
			var list = [];
			var map = d3.map();
			for(var i in data) {
				var d = data[i];
				if(map.has(d.name)) {
					var dmap = map.get(d.name);
					dmap.push(d);
					map.set(d.name, dmap);
				} else {
					map.set(d.name, [d]);
				}
			}
			
			for(var i in map) {
				if(typeof map[i] == "object")
					list.push(map[i])
			}
			
			var all;
			var result = [];
			for(var i in list) {
				var d = list[i];
				var obj = {};
				obj.name = d[0].name;
				obj.data = list[i];
				obj.total = total(list[i]);
				labels(list[i]);
				if(d[0] && d[0].color) obj.color = d[0].color;
				result.push(obj);
			};
			
			function total(list){
				var total = 0;
				for(var i in list) {
					var o = list[i];
					total += o.value; 
				};
				return total;
			}
			function labels(list){
				for(var i in list) {
					var labels = list[i].labels;
					if(labels) list[i].labels_array = labels.split("|");
				}
			}
			if(all) {
				result.unshift({
					name : list[all][0].name,
					data : list[all],
				});
			}
			/*result.sort(function(a, b) {
				return b.total - a.total;
			})*/
			
			return result;
		};
		
		//유일키 생성
		this.uniqueId = function() {
			var date = new Date();
			var components = [
			    date.getYear(),
			    date.getMonth(),
			    date.getDate(),
			    date.getHours(),
			    date.getMinutes(),
			    date.getSeconds(),
			    date.getMilliseconds()
			];
			var id = components.join("");
			return id;
		},
		
		//dendrogram, hierarchy_tree 자식 노드 ajax 호출
		this.collapse = function(d, callback) {
			var options = this.options;
			var collapse = options.collapse;
			var obj = collapse.data;
			/*
			if(!d.parent) {
	    		return;
	    	}
			*/
			var params = {};
			if(typeof obj.params == "function") {
				params = obj.params(d);
			} else {
				params = obj.params;
			}
			self.ajax(obj.url, params, this.addChildren, obj.fail, {d : d, callback : callback}, collapse.httpType);
		};
		
		//collapse 함수에서 ajax로 가져온 데이터 노드에 추가
		this.addChildren = function(data, args) {
			var d = args.d;
			var callback = args.callback;
			var options = self.options;
			var collapse = options.collapse;
			var obj = collapse.data;
			var _children = obj.parser(data, d);
			var children = [];
			for(var i in _children) {
				var child = _children[i];
				child = d3.hierarchy(child);
				child.depth = d.depth + 1;
				child.height = d.height - 1;
				child.parent = d;
				children.push(child);
			}
			if(options.collapse.loading.src) d3.select("#"+this.element[0].id+"-"+d.data.id+"-loading").remove();
			
			if(children.length > 0) {
				d.children = children;
				d._children = null;
				d.data.children = _children;
				d.data._children = null;
				
				if(callback) callback(d);
			}
	    	if(options.click) {
				self.click(d);
			}
		}
		
		//차트 내 클릭 이벤트 발생 시 ajax로 데이터를 가져와야 하는 경우 사용되는 함수			
		this.clicked = function(args, callback) {
			var options = this.options;
			var clicked = options.clicked;
			var obj = clicked.data;

			var params = {};
			if(typeof obj.params == "function") {
				params = obj.params(args.d);
			} else {
				params = obj.params;
			}
			args.callback = callback;
			self.ajax(obj.url, params, this.clickedCallback, obj.fail, args, clicked.httpType);
		};
		
		//clicked 함수에서 ajax로 가져온 데이터 처리			
		this.clickedCallback = function(data, args) {
			var d = args.d;
			var callback = args.callback;
			var options = self.options;
			var clicked = options.clicked;
			var obj = clicked.data;

			var parseData = (obj.parser) ? obj.parser(data, d) : data;
			if(callback) {
				if(args.type == self.config.CHART_TYPE_MAP) callback(args.key, parseData);
			}
	    	if(options.click) {
				options.click(d, data);
			}
		};
		
		//특정 노드에 대한 color값 추출			
		this.getColor = function(d) {
			if(typeof this.options.color == "function") {
				return this.options.color(d);
			} else if (d.color) {
				return d.color;
			} else {
				return this.options.color(d);
			}
		}
		
		//legend.type : "vertical"인 경우 세로형 범례 출력			
		this.verticalLegend = function(keys) {
			var id = this.element[0].id;
			var options = this.options;
			var margin = options.margin;
	    	var width = options.width - margin.left - margin.right;
			var height = options.height - margin.top - margin.bottom;
			var data = options.data;

			var avgItem = null;
			var entries = {};
			if(options.legend.data) {
				entries = options.legend.data(data); 
			} else {
				var map = d3.map();
				for(var i in data) {
					var d = data[i];
					if(map.has(d.name)) continue;
					else map.set(d.name, d);
				}
				entries = map.values();
			}
			
			var svgLegend = this.svg.append("g").attr("id", id+"-legend");
			
			this.setObject(svgLegend.selectAll("text"), options.text);
			
			var legendheight = options.legend.height ? options.legend.height : height;
		    var dataL = options.height - legendheight;
		    var offset = options.legend.offset ? options.legend.offset : 5;

		    var legend = svgLegend.selectAll(".legend")
	        .data(entries)
	        .enter().append('g');
		    
		    var rect = legend.append('rect')
		        .attr("x", 0)
		        .attr("y", 5)
		        .attr("width", 10)
		        .attr("height", 10)
		        .style("fill", function (d, i) {
		        	if(d.color) return d.color;
		        	return options.color(d.name);
		        })
		    this.setObject(rect, options.legend.rect);
		        
		    if(options.legend && options.legend.text && options.legend.text.ellipsis && options.legend.text.ellipsis.suffix == undefined) options.legend.text.ellipsis.suffix = '...'; 
		    
		    var text = legend.append('text')
	        .attr("x", 15)
	        .attr("y", 15)
	        .style("text-anchor", "start")
	        .style("font-size", "13px")
	        .text(function(d) {
	        	if(options.tooltip.name) return options.tooltip.name(d); 
	        	else if(options.legend && options.legend.text && options.legend.text.ellipsis && d.name.length > options.legend.text.ellipsis.limit) {
					return (d.name).substr(0, options.legend.text.ellipsis.limit) + options.legend.text.ellipsis.suffix;
				}
	            return d.name;
	        })
	        this.setObject(text, options.legend.text);
	        
	        text.append('title')
	        .text(function(d) {
	        	if(options.tooltip.name) return options.tooltip.name(d); 
	            return d.name;
	        })
	        
		    svgLegend.selectAll("g").attr("transform", function (d, i) {
	        	var textheight = d3.select(this).node().getBoundingClientRect().height;
		        var transform = "translate(0," + dataL + ")"
		        dataL += textheight + offset;
		        return transform;
	        })
	        var pieRect = svgLegend.node().getBoundingClientRect();
	        var legendRect = d3.select("#"+id+"-legend").node().getBoundingClientRect();
	        if(options.legend.align == "right") {
		    	var x = (pieRect.width / 2);
		    	var y = -(legendRect.height / 2) - ((height - legendRect.height) /4);
		    	svgLegend.attr("transform", "translate("+ (x) +", " + y +")");
		    }
	        
	        var x = ((width/2) + margin.left - (legendRect.width));
	        x = x < (height / 2) ? height / 2 : x;
	        x = x +  options.legend.x;
	        y = y +  options.legend.y;
	        svgLegend.attr('transform', 'translate('+x+', '+y+')');

		}
		
		//legend.type : "horizontal"인 경우 세로형 범례 출력			
		this.horizontalLegend = function(keys) {
			var id = this.element[0].id;
			var options = this.options;
			var margin = options.margin;
	    	var width = options.width - margin.left - margin.right;
			var height = options.height - margin.top - margin.bottom;
			var data = options.data;

			var avgItem = null;
			var entries = {};
			if(options.legend.data) {
				entries = options.legend.data;
			} else {
				var map = d3.map();
				for(var i in data) {
					var d = data[i];
					if(map.has(d.name)) continue;
					else map.set(d.name, d);
				}
				entries = map.values();
			}

			for(var i in entries) {
				if(entries[i].name == "avg" || entries[i].name == "평균선") {
					var item = entries.splice(i, 1);
					avgItem = item[0];
					break;
				}
			}
			
			var svgLegend = d3.select("#"+id).select("svg").append("g").attr("id", id+"-legend");

			this.setObject(svgLegend.selectAll("text"), options.text);
			
			//svgLegend.attr("height", '18px');
			//svgLegend.style("margin-top", '10px');
			
			var legendWidth = options.legend.width ? options.legend.width : width;
		    var dataL = options.width - legendWidth;
		    var offset = options.legend.offset ? options.legend.offset : 15;
		    
		    var legend = svgLegend.selectAll(".legend")
	        .data(entries)
	        .enter().append('g');
		    var rect = legend.append('rect')
		        .attr("x", 0)
		        .attr("y", 5)
		        .attr("width", 10)
		        .attr("height", 10)
		        .style("fill", function (d, i) {
		        	if(d.color) return d.color;
		        	return options.color(d.name);
		        })
		    this.setObject(rect, options.legend.rect);
		    
		    var text = legend.append('text')
	        .attr("x", 15)
	        .attr("y", 15)
	        .style("text-anchor", "start")
	        .style("font-size", "13px")
	        .text(function (d, i) {
	        	if(options.tooltip.name) return options.tooltip.name(d); 
	        	if(d.name) return d.name;
	        })
	        this.setObject(text, options.legend.text);

		    //평균선 데이터가 있는경우 범례 추가
	        if(avgItem) {
	        	var avg = svgLegend.append("g");
	        	var lineAvg = avg.append('line')
		        .attr("x1", 0)
		        .attr("x2", 10)
		        .attr("y1", 10)
		        .attr("y2", 10)
		        .style("stroke", "#676179")
		        .style("stroke-width", 3)
		        .style("stroke-linecap", "round")
		        .style("stroke-dasharray", ".5, 3.5");
	        	this.setObject(lineAvg, options.legend.avg);
	        	
	        	var text = avg.append('text')
	            .attr("x", 15)
	            .attr("y", 15)
	            .style("text-anchor", "start")
	            .style("font-size", "13px")
	            .text("평균선");
	        	
	        	this.setObject(text, options.legend.text);
	        }

	        //범례 위치 조정
	        svgLegend.selectAll("g").attr("transform", function (d, i) {
	        	var textWidth = d3.select(this).node().getBoundingClientRect().width;
		        var transform = "translate(" + (dataL) + ",0)"
		        dataL += textWidth + offset;
		        return transform;
	        })
	        
	        var legendRect = d3.select("#"+id+"-legend").node().getBoundingClientRect();
	        options.legend.margin.right = options.legend.margin.right ? options.legend.margin.right : 20;
		    var x = (options.legend.align).match("right") ? width - legendRect.width - options.legend.margin.right : 0;
		    var y = (options.legend.align).match("top") ? (legendRect.height / 2) : options.height - (legendRect.height * 2);
	        svgLegend.attr("transform", "translate("+ (x) +", "+ (y) +")");

		}
		
		//width 이상의 텍스트 입력 시 줄바꿈
		this.wrap = function(text, width) {
			text.each(function() {
			    var text = d3.select(this),
			        words = text.text().split(/\s+/).reverse(),
			        word,
			        line = [],
			        lineNumber = 0,
			        lineHeight = 1.1, // ems or 1.4
			        y = text.attr("y"),
			        x = text.attr("x"),
			        dy = parseFloat(text.attr("dy")),
			        tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");
			    while (word = words.pop()) {
			    	line.push(word);
			    	tspan.text(line.join(" "));
			    	
			    	if(width) {
			    		if (tspan.node().getComputedTextLength() > width) {
			    			lineNumber++;
			    			line.pop();
			    			tspan.text(line.join(" "));
			    			line = [word];
			    			tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", lineNumber * lineHeight + dy + "em").text(word);
			    		}
			    	} else {
		    			line.pop();
		    			tspan.text(line.join(" "));
		    			line = [word];
		    			tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", lineNumber * lineHeight + dy + "em").text(word);
		    			lineNumber++;
			    	}
			    }
			});
		}
		
		//그래프 내 워터마크 출력
		this.setWatermark = function() {
			var options = this.options;
	    	if(options.watermark && options.watermark.use) {
	    		var element = this.element;
	    		var config = this.config;
	    		
	    		var parent = d3.select(d3.select(element.selector).node().parentNode);
	    		parent.select(".davif-logo").remove();
	    		
	    		options.watermark.x = options.watermark.x ? options.watermark.x : 0;
	    		options.watermark.y = options.watermark.y ? options.watermark.y : 0;
	    		options.watermark.bottom = options.watermark.bottom != undefined ? options.watermark.bottom : 35;

	    		var logo = parent.append("div").attr("class", 'davif-logo');
				logo.append("img")
				.attr("src", options.watermark.src)
				.style("margin-left", ((options.width - 58)+ options.watermark.x) + "px")
	  		  	.style("margin-top", options.watermark.y+"px")
	  		  	.style("width", 58)
	  		  	.style("height", 25);
				
				parent.style("margin-bottom", options.watermark.bottom + "px");
	    	}
		}
		
	};
	
	var Line = function(){
		var self = this;
		this.type = "line";
		this.draw = function() {
			var id = this.element[0].id;
			var data = this.options.data;
			data = this.parser(data);
			
			var options = this.options;
			var type = options.type,
			    width = options.width,
			    height = options.height,
			    margin = options.margin;
			var config = this.config;
			var numberFormat = d3.format(",d");
			var svg = this.svg.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

			width = width - options.margin.left - options.margin.right;
			height = height - options.margin.bottom - options.margin.top;

			//차트 영역 background style, attr 관련 설정
			if(options.axis) {
				var background = svg.append("rect")
				.attr("width", width)
				.attr("height", height)
				.attr("fill", "none");
				
				this.setObject(background, options.axis);
			}

			//x축 날짜 출력 포맷이 시간형(%I) && x축 rect관련 옵션이 있는경우 오전~오후 구분되는 시점부터 음영 스타일 추가
			if(options.x.outputFormat == "%I" && options.x.rect) {
				var hourRect = svg.append('rect')
				.style('fill', '#f8f8f8')
				.style('stroke', 'none')
				
				this.setObject(hourRect, options.x.rect);
			}
			
			//x, y축 도메인 설정
			var categories = {};
			for(var i in data) {
				var d = data[i];
				d.data.reduce(function(accumulator, current, i) {
					if(!categories[current.date]) categories[current.date] = i;
					return accumulator;
				}, []);
			}
			var xDomain = d3.keys(categories);
			var yDomain = '';
			var minY = d3.min(data, function (kv) {
				return d3.min(kv.data, function (d) {
					return d.value;
				})
			});
			var maxY = d3.max(data, function (kv) {
				return d3.max(kv.data, function (d) {
					return d.value;
				})
			});
			maxY = maxY + (maxY / 10);
			if(options.tickNagative) {
				minY = -(d3.max([maxY, minY]));
				yDomain = ([minY, maxY]);
			} else {
				yDomain = ([0, maxY]);
			}
   
			//x,y축 draw 함수 호출
			this.drawAxis(data, xDomain, yDomain);

			var xScale = this.xScale;
			var yScale = this.yScale;
			var xAxis = this.xAxis;
			
			//x축 날짜 출력 포맷이 시간형(%I) && x축 rect관련 옵션이 있는경우 오전~오후 구분 영역
			//axis 영역 draw 후 구분영역의 width, height 측정하여 draw
			if(options.x.outputFormat == "%I" && options.x.rect) {
				hourRect.attr('x', (width / 2) - (options.x.padding))
				.attr('width', (width / 2) + (options.x.padding)) 
				.attr('height', height);
				this.setObject(hourRect, options.axis.rect);
			}
			
			//마우스 포커스 객체 생성
			var focus = svg.append('g').attr('class', id + '-focus').style('display', 'none');

			//데이터 라인 draw
			var lineType = this.lineType(options.line.type);
			var line = d3.line()
			    .curve(lineType)
			    .x(function(d, i) {
			        return (xScale(d.date) + xScale.bandwidth() / 2 );
			    })
			    .y(function(d) {
			    	return yScale(d.value);
			    });

			var lines = svg.append('g').attr('class', 'lines');

			var line_group = lines.selectAll('.'+ id + '-line-group')
			    .data(data).enter()
			    .append('g')
			    .attr('class', id + '-line-group');
			var path = line_group.append('path')
			    .attr('class', id + '-line')
			    .attr('id', function(d) {
			    	return id + '-' + d.name;
			    })
			    .attr('d', function(d) {
			    	return line(d.data);
			    })
			    .attr('fill', 'none')
			    .style('stroke', function(d, i) {
			        if (d.color) return d.color;
			        else d.color = options.color(d.name);
			        return d.color;
			    })
			    .style('stroke-width', options.line.width);

			//평균선 라인 draw
			var lineAvg = d3.select("#"+id + '-avg')
			.style("fill" , "none")
			.style("stroke-width", 5)
			.style("stroke-linecap", "round")
			.style("stroke-dasharray", "0, 10.5");
        	if(options.line.avg) self.setObject(lineAvg, options.line.avg);
			
			path.transition().duration(options.duration).ease(d3.easeCubicInOut)
			
			//데이터 라인 스타일(css) 및 속성(d3) 설정
			if(options.line) this.setObject(line_group, options.line);

			//최상위 노드 아이콘
			if (options.line.maxPoint || options.line.maxPointAll) {
				var max = d3.max(data, function(x) {
					if(x.name == "cnt" || x.name == "all" || x.name == "avg" || x.name == "평균선") return;
			        return d3.max(x.data, function(y) {
			        	return y.value;
			        });
				});
				
			    d3.entries(data).map(function(a) {
			        var tmp = JSON.parse(JSON.stringify(a.value.data));
			        var list = (tmp).sort(self.sort);
			        var d = list[0];

			        if(d.name == "avg" || d.name == "평균선") return;
			        if(options.line.maxPoint === true && d.value != max) return;
			        if(options.line.maxPoint === true && (d.name == "cnt" || d.name == "all")) return;

			        //triangle
			        var x1 = xScale(d.date) + xScale.bandwidth() / 2 + 9;
			        var y1 = yScale(d.value) + 17;
			        var pi = Math.PI * 2;
			        var polygon = svg.append("path")
			            .attr("d", "M0,5.059274L8.306048591020996,-8.059274 -8.306049,-8.059274Z")
			            .attr("fill", function() {
			            	if (d.color) return d.color;
					        d.color = options.color(d.name);
					        return d.color;
			            })
			            .attr("transform", "translate(" + (x1 - 9) + ", " + (y1 - 28) + ")")
			            
			        if(options.line.maxPointAll === false) return;
			    });
			}


			//마우스 오버 시 출력되는 포커스 관련 객체
			var focus_rect = focus.append("rect")
			    .attr('id', id + '-focus-rect')
			    .attr("height", height)
			    .attr("width", options.focusRectX && options.focusRectX.width != undefined ? options.focusRectX.width : 50)
			    .attr('x', 0).attr("y", 0);
			this.setObject(focus_rect, options.focusRectX);

			focus.append('line')
			    .attr('id', id + '-focus-line')
			    .attr('x1', 0)
			    .attr('y1', 0)
			    .attr('x2', 0)
			    .attr('y2', height)
			    .attr('stroke', '#dadee3')
			    .attr('stroke-width', 1);

			//라인 툴팁 객체 선언
			var tooltips = this.drawTooltip(svg, data.length);

			//데이터 라인 내 출력되는 아이콘 관련 객체
			//추후작업 icon : rect, circle, triangle, diamond
			var icon_display = options.icon.use ? "block" : "none";
			/* Add circles in the line */
			var iconData = data.filter(function(d){
				return d.name != 'avg' && d.name != "평균선";
			});
			var icon = lines.selectAll(id + "-icon-group")
			    .data(iconData).enter()
			    .append("g")
			    .attr("class", id + "-icon-group")
			    .style("fill", function(d, i) {
			        if (d.color) return d.color;
			        return options.color(i);
			    })
			    .style("stroke", function(d) {
			    	if(d.color) return d.color;
			    })
			    .style("stroke-width", 2)
			    .selectAll(id + "-icon")
			    .data(function(d) {
			    	return d.data;
			    }).enter()
			    .append("g")
			    .attr("class", function(d, i) {
			    	return id + "-icon-" + i;
			    })
			    .style("display", icon_display)
			    .append(options.icon.type)
			    .attr("cx", function(d) {
			    	return xScale(d.date) + xScale.bandwidth() / 2;
			    })
			    .attr("cy", function(d) {
			    	return yScale(d.value);
			    })
			    .attr("x", function(d) {
			    	return xScale(d.date) + xScale.bandwidth() / 2 - (options.icon.size / 2)
			    })
			    .attr("y", function(d) {
			    	return yScale(d.value) - (options.icon.size / 2);
			    })
			    .attr("r", options.icon.size)
			    .attr("width", options.icon.size)
			    .attr("height", options.icon.size);

			this.setObject(icon, options.icon);
			
			//마우스 오버 시 툴팁 출력되는 영역 설정
			var eventCapture = svg.append("rect")
			    .attr("class", "overlay")
			    .attr("width", width)
			    .attr("height", height)
			    .attr("fill", "none")
			    .on("click", clicked)
			    .style("pointer-events", "all")
			    .style('cursor', 'pointer');
			    //.attr('clip-path', 'url(#' + id + '-clip)');
			
			//설정된 영역에 마우스 이벤트 설정
			if(options.tooltip.enabled == true || options.tooltip.enabled == "true") {
				eventCapture.on("mouseout", function() {
					focus.transition().duration(options.duration).style('display', 'none');
					tooltips.transition().duration(options.duration).style('display', 'none');
					lines.selectAll("." + id + "-icon-group").selectAll("g").style("display", icon_display).selectAll("circle").transition().duration(options.tooltip.duration).attr("r", options.icon.size);
				})
				.on("mousemove", mousemove)
			}

			//차트 내 영역 style 설정 (drawAxis 후 styleAxis 스타일 설정)
			this.styleAxis(xScale, yScale);

												 
												 
										  
																				  
															
	   

   
			var bisectDate = d3.bisector(function(d) {
			    return d.date;
			}).left;
			xScale.invert = (function() {
			    var domain = xScale.domain();
			    var range = xScale.range();
			    var scale = d3.scaleQuantize().domain(range).range(domain)
			    return function(x) {
			        return scale(x)
			    }
			})();

			function indexOf(data, d) {
			    for (var i in data) {
			        if (data[i].date == d) {
			            return Number(i);
			        }
			    }
			}

			function clicked(d) {
				var x = d3.mouse(eventCapture.node())[0];
			    var d = xScale.invert(x);
			    var i = indexOf(data[0].data, d);
			    var obj = data[0].data[i];
			    self.click(obj)
			}
			function mousemove(d) {

			    var x = d3.mouse(eventCapture.node())[0];
			    var d = xScale.invert(x);
			    var nx = xScale(d) + (xScale.bandwidth() / 2);

			    var i = indexOf(data[0].data, d);
			    lines.selectAll("." + id + "-icon-group").selectAll("g").style("display", icon_display).selectAll("circle").transition().duration(100).attr("r", options.icon.size);
			    lines.selectAll("." + id + "-icon-" + i).style("display", "block").select("circle").transition().duration(100).attr("r", options.icon.hoverSize);

			    var y = d3.mouse(eventCapture.node())[1];

				//modify
			    focus.style('display', 'block').select("line").transition().duration(options.tooltip.duration).attr("x1", nx).attr("x2", nx)
			    focus.select("rect").transition().duration(options.tooltip.duration)
			    .attr("x", nx - focus.select("rect").node().getBBox().width / 2)
			    .style("width", function(d) {
			    	if(x <= (focus.select("rect").node().getBBox().width / 2)) return (focus.select("rect").node().getBBox().width) - x;
			    	else focus.select("rect").node().getBBox().width;
			    })

			    self.moveTooltip(tooltips, data, d, x, y);

			}

			var zoom = d3.zoom().scaleExtent([1, 10]).on('zoom', zoomed);
			var gX = svg.select(".x");
			svg.call(zoom);

			function zoomed() {

			}
			
			//라벨 출력 (issue_line.html 사용)
			if(options.labels.enabled) {
				
				if(!options.labels.style) {
					options.labels.style = {};
					options.labels.style['font-size'] = "12px";
				}
				var textSize = Number(options.labels.style['font-size'].toString().replace("px", ""));
				var labels_group = svg.append('g').classed(id + '-labels-group', true);
			
				for(var i in data) {
					for(var j in data[i].data) {
						var o = data[i].data[j];
						if(o.labels_array) {
							o.labels_attr = { rect_width : d3.map(), text_width : d3.map(), rect_x : d3.map(), text_x : d3.map(), rect_y : d3.map(), text_y : d3.map() };
							var max = d3.max(o.labels_array, function(d) { return d.length;});

							var labels_scroll = labels_group.append("g")
							.attr("id", id + "-labels-scroll-" + j)
							.attr("height", o.labels_array.length * textSize * 1.5)
							.attr("transform", function(e, k) {
						    	var add = 0;
						    	if(j == 0) add = 5;
						    	else if(j == data[i].data.length -1) add = -5;
						    	return "translate(" + (xScale(o.date) + add) + ", " + yScale(o.value) + ")";
						    })
							
							var labels = labels_scroll.selectAll(id + "-labels")
						    .data([o]).enter()
						    .append("g")
						    .attr("class", id + "-labels")
						    .attr("id", function(d, k) {
						    	return id + "-labels-" + j;
						    })
						    .style("cursor", "pointer")
						    .selectAll(id + "-labels")
							.data(o.labels_array)
							
							var labels_rect = labels.enter().append("rect")
							.attr("class", id + "-labels-rect")
						    .attr("id", function(d, k) {
						    	return id + "-labels-rect-" + j + "-"+ k;
						    })
						    .attr("width", function(d, k) {
						    	var w = d.length * textSize + 15;
						    	o.labels_attr.rect_width.set(k, w);
						    	return w; 
						    })
						    .attr("height", textSize * 1.5)
							.attr("x", function(d, k) {
								var box = d3.select(this).node().getBBox();
								var labels_x = xScale.bandwidth() / 2 - (box.width / 2);
								if(k == 0 && labels_x < 0) labels_x = options.x.padding;
								if((xScale(o.date) + box.width) >= width) labels_x = width - xScale(o.date) - box.width - options.x.padding;
								o.labels_attr.rect_x.set(k, labels_x);
						    	return labels_x;
						    })
						    .attr("y", function(d, k) {
						    	var box = d3.select(this).node().getBBox();
						    	var ry = ((box.height) * k);
						    	o.labels_attr.rect_y.set(k, ry);
						    	return ry;
						    })
						    .style("fill", "#fff")
						    .style("stroke", function(d, j) {
						    	if (o.color) return o.color;
						        return options.color(j);
						    })
						    .style("stroke-width", 2)
						    .attr("rx", 3).attr("ry", 3)
						    .on('mouseover', function(){
						    	labelsMouseover(this, j);
						    })
						    .on('mouseout', function(){
						    	labelsMouseout(this);
						    })
							
						    var labels_text = labels.enter().append("text")
						    .attr("class", id + "-labels-text")
						    .attr("id", function(d, k) {
						    	return id + "-labels-text-" + j + "-" + k;
						    })
						    .text(function(d) {return d;})
							.style("font-size", textSize+"px")
							.on('mouseover', function(){
						    	labelsMouseover(this, j);
						    })
						    .on('mouseout', function(){
						    	labelsMouseout(this);
						    })
						    
							labels_text.attr("x", function(d, k) {
						    	var $rect = d3.select("#" + id + "-labels-rect-" + j + "-" + k);
								var rbox = $rect.node().getBBox();
								var tbox = d3.select(this).node().getBBox();
								var tx = rbox.x + ((rbox.width - tbox.width) / 2);
								o.labels_attr.text_width.set(k, tbox.width);
								o.labels_attr.text_x.set(k, tx);
						    	return tx;
						    })
						    .attr("y", function(d, k) {
						    	var $rect = d3.select("#" + id + "-labels-rect-" + j + "-" + k);
								var box = $rect.node().getBBox();
						    	var ty = ((box.height) * k) + (box.height / 2) + (textSize / 3);
						    	o.labels_attr.text_y.set(k, ty);
						    	return ty;
						    })
						    
						    labels_rect.attr("y", function(d, k) {
						    	var box = d3.select(this.parentNode).node().getBBox();
						    	if(yScale(o.value) > (height/2) && yScale(o.value) + box.height >= height) return -o.labels_attr.rect_y.get(k);
						    	else return o.labels_attr.rect_y.get(k);
						    });
							labels_text.attr("y", function(d, k) {
								var box = d3.select(this.parentNode).node().getBBox();
								if(yScale(o.value) > (height / 2)  && yScale(o.value) + box.height >= height) {
									return o.labels_attr.text_y.get(0) - ((textSize * 1.5) * k) ;
								}
								else return o.labels_attr.text_y.get(k);
							});
						    
						    if(options.labels.over) {
						    	labels_rect.style("display", function(d, k) {
						    		return k == 0 ? "block" : "none";
						    	})
						    	labels_text.style("display", function(d, k) {
						    		return k == 0 ? "block" : "none";
						    	})
						    } else {
						    	//width 넓이 글자수 max인 데이터와 동일하게 수정
						    	var max_w = d3.max(o.labels_attr.rect_width.values());
					    		var max_index = 0;
					    		o.labels_attr.rect_width.each(function(e, k) {
					    			if(e == max_w) max_index = Number(k);
					    		});
						    	labels_rect.attr("width", max_w)
						    	.attr("x", o.labels_attr.rect_x.get(max_index));
						    }
						    
						    injectScroll(o, j);
						}
					}
				}
				
				function labelsMouseover($this, index) {
					if(options.labels.over) {
						var label_id = d3.select($this).attr("id").split("-");
						var i = label_id[label_id.length-2]; 
						var j = label_id[label_id.length-1]; 

				    	var d = data[0].data[i];
			    		var max_w = d3.max(d.labels_attr.rect_width.values());
			    		var max_index = 0;
			    		d.labels_attr.rect_width.each(function(e, k) {
			    			if(e == max_w) max_index = Number(k);
			    		});
			    		
						d3.select("#" + id + "-labels-" + i).selectAll("rect").transition().duration(options.duration)
						.attr("width", function(e, k) {
							return max_w;
						})
						.attr("x", d.labels_attr.rect_x.get(max_index))
						.style("display", "block");
			    		d3.select("#" + id + "-labels-" + i).selectAll("text").transition().duration(options.duration)
			    		.attr("x", function(e, k) {
							var rx = d.labels_attr.rect_x.get(max_index);
							var tw = d.labels_attr.text_width.get(k);
							var tx = rx + ((max_w - tw) / 2);
							return tx;
						})
			    		.style("display", "block");
					}
				}
				function labelsMouseout($this) {
					if(options.labels.over) {
						var label_id = d3.select($this).attr("id").split("-");
						var i = label_id[label_id.length-2]; 
						var j = label_id[label_id.length-1]; 
						var d = data[0].data[i];
						
						d3.select("#" + id + "-labels-" + i).selectAll("rect").transition().duration(options.duration)
						.attr("width", function(e, k) {
							return d.labels_attr.rect_width.get(k);
						})
						.attr("x", function(e, k) {
							return d.labels_attr.rect_x.get(k);
						})
						.style("display", function(d, k) {
					    	return k == 0 ? "block" : "none";
					    })
						
						d3.select("#" + id + "-labels-" + i).selectAll("text").transition().duration(options.duration)
			    		.attr("x", function(e, k) {
			    			return d.labels_attr.text_x.get(k);
						})
			    		.style("display", function(d, k) {
					    	return k == 0 ? "block" : "none";
					    })
					}
				}

				function injectScroll(d, index) {
				    //이슈어 라벨 크기 설정 - 이슈어 많은 경우 scrolling 추가
				    const root = d3.select("#"+ id + "-labels-scroll-" + index);
				    let rootBBox = root.node().getBBox();
				    let isAsc = yScale(o.value) > (height / 2);
				    
				    //마우스 오버 기능 사용 시 x,y,width,height 값 재 설정
				    if(options.labels.over) {
				    	var max_w = d3.max(d.labels_attr.rect_width.values());
						var max_index = 0;
			    		d.labels_attr.rect_width.each(function(e, k) {
			    			if(e == max_w) max_index = Number(k);
			    		});
				    	rootBBox = {
				    		x : d.labels_attr.rect_x.get(max_index),
				    		y : isAsc ? -Number(root.attr("height")) : 0,
				    		width : max_w,
				    		height : Number(root.attr("height")) + 18
				    	}
				    }

				    //이슈어 박스가 차트 영역을 벗어나는지 체크
				    if(root.attr("height") < height) {
				    	if(isAsc && yScale(o.value) - rootBBox.height > -20) return;
				    	else if(isAsc == false && yScale(o.value) + rootBBox.height < height) return;
				    }

				    //스크롤 영역 설정
				    let rect_y = isAsc ? -yScale(o.value) + 20 : rootBBox.y / 4 - 20;
				    let rect_h = isAsc ? height - (height - yScale(o.value)) : height - yScale(o.value);
				    
				    const clipRect = root.append('clipPath').attr('id', id + '-scrollbox-clip-path-' + index).append('rect');
					clipRect
				    .attr('x', rootBBox.x)
				    .attr('y', rect_y)
				    .attr('width', rootBBox.width)
				    .attr('height', rect_h);
					labels_scroll.attr("clip-path", "url(#"+ id +"-scrollbox-clip-path-"+ index +")");
						
				    root
				    .insert('rect', 'g')
				    .attr("id", id + "-box-" + index)
				    .attr('x', rootBBox.x)
				    .attr('y', rect_y)
				    .attr('width', rootBBox.width)
				    .attr('height', rect_h)
				    .attr('opacity', 0);
				    
				    //이슈어 박스 영역 벗어나는 경우 초기화 상태로
				    root.on("mousemove", function() {
				    	var coordinates= d3.mouse(this);
				    	var x = coordinates[0];
				    	var y = coordinates[1];
				    	if( x < 10 || 
			    			x > rootBBox.width || 
			    			(isAsc ? y < 0 : y > 0) || 
			    			y < rect_y) {
				    		d3.select("#" + id + "-labels-" + index).attr("transform", "translate(0, -10)");
				    	}
				    })
				    
				    //스크롤 관련 객체 설정
				    const scrollBox = {
				    	x : rootBBox.x,
				    	y : rect_y,
				    	width : rootBBox.width,
				    	height : rect_h - 10,
				    }
				    const scrollBarWidth = 0;
				    const scrollBar = root.append('rect')
				    .attr('width', scrollBarWidth)
				    .attr('rx', scrollBarWidth /2)
				    .attr('ry', scrollBarWidth / 2)
				    .attr('transform', 'translate('+scrollBox.x + scrollBox.width - scrollBarWidth+','+scrollBox.y+')');
				    
				    // Calculate maximum scrollable amount
				    const content = d3.select("#"+ id + "-labels-" + index)
				    .attr('transform', 'translate(0, -10)');
				    
				    const contentBBox = content.node().getBBox();
				    const absoluteContentHeight = rootBBox.height;
				    
				    const scrollbarHeight = rootBBox.height / 4; 
				    scrollBar.attr('height', scrollbarHeight);
				    
				    const maxScroll = rootBBox.height / 4; 
				    
				    //스크롤 이벤트 발생 시 처리
				    let scrollDistance = -10;
				    function updateScrollPosition(diff) {
				    	if(isAsc == false) {
				    		scrollDistance -= diff;
				    		scrollDistance = Math.min(-10, scrollDistance);
				    		scrollDistance = Math.max(-rootBBox.height + scrollBox.height - 20, scrollDistance);
				    	} else {
				    		scrollDistance -= diff;
				    		scrollDistance = Math.max(-10, scrollDistance);
				    		scrollDistance = Math.min(rootBBox.height - scrollBox.height, scrollDistance);
				    	}
					    content.attr('transform', 'translate(0, '+scrollDistance+')')
					    
					    const scrollBarPosition = scrollDistance / maxScroll * (scrollBox.height - scrollbarHeight);
					    scrollBar.attr('y', scrollBarPosition);
					}
				    
				    // Set up scroll events
				    root.on('wheel', function(e) {
				      updateScrollPosition(event.deltaY)
				    });
			    }
				
			}

		}
	};
	var Dendrogram = function(){
		var self = this;
		this.type = "dendrogram";
		
		this.draw = function() {

			var id = this.element[0].id;
			var options = this.options;
			var config = this.config;
			var data = options.data;

			var sline = d3.scaleLinear().domain(d3.extent(data, function(d) { return +d.value;} )).range([2, 30]);
			var snode = d3.scaleLinear().domain(d3.extent(data, function(d) { return +d.value;} )).range([2, 15]);
			
			data = this.parseHierarchyJson();
			
			width = options.width,
			height = options.height,
			margin = options.margin;
			
			width = width - options.margin.left - options.margin.right;
			height = height - options.margin.bottom - options.margin.top;
			

			var svg = this.svg.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

			var i = 0, root;

			// declares a tree layout and assigns the size
			var treemap = d3.tree().size([height, width]);

			// Assigns parent, children, height, depth
			root = d3.hierarchy(data, function(d) {
			    return d.children;
			});
			root.x0 = height / 2;
			root.y0 = 0;

			// Collapse after the second level
			if(root.children) {
				root.children.forEach(collapse);
				update(root);
			}

			// Collapse the node and all it's children
			function collapse(d) {
			    if (d.children) {
			        d._children = d.children
			        d._children.forEach(collapse)
			        d.children = null
			    }
			}

			function update(source) {

			    // Assigns the x and y position for the nodes
			    var treeData = treemap(root);

			    // Compute the new tree layout.
			    var nodes = treeData.descendants(),
			        links = treeData.descendants().slice(1);

			    // Normalize for fixed-depth.
			    nodes.forEach(function(d) {
			    	if(d.depth == 0) {
						return true;
					}
					
					var len = 0;
					if(self.options.depthLength) {
						for (var i = 1; i <= d.depth; i++) {
							if(i <= d.depth) {
								len += self.options.depthLength[i-1];
							}
						}
					}
					len = len ? len : (d.depth * ((self.options.width-75-self.options.margin.left-self.options.margin.right) / 3));
					d.y = len;
			    	
			        //d.y = d.depth * 180
			    });
			    
			    // ****************** Nodes section ***************************

			    // Update the nodes...
			    var node = svg.selectAll('g.'+id+'-node')
			        .data(nodes, function(d) {
			            return d.id || (d.id = ++i);
			        });

			    // Enter any new modes at the parent's previous position.
			    var nodeEnter = node.enter().append('g')
			        .attr('class', id+'-node')
			        .attr("transform", function(d) {
			            return "translate(" + source.y0 + "," + source.x0 + ")";
			        });

			    // Add Circle for the nodes
			    nodeEnter.append('circle').attr('class', id+'-node').on('click', click);

			    // Add labels for the nodes
			    nodeEnter.append('text')
			    	.attr('class', id+'-text')
			        .attr("dy", ".35em")
			        .attr("x", function(d) {
			        	if(!d.data.value) d.data.value = 0;  
			        	if(options.text.x) return snode(d.data.value) + options.text.x;
			            return d.children || d._children ? -13 : 13;
			        })
			        .attr("text-anchor", function(d) {
			        	if(options.text.align)
			        		return options.text.align;
			            return d.children || d._children ? "end" : "start";
			        })
			        .text(function(d) {
			        	if(options.text.length < d.data.name.length) {
							return (d.data.name).substr(0, options.text.length) + options.text.suffix;
						}
			            return d.data.name;
			        })
			        .on('click', click);
			   
			    //remove btn
			    var removeBtn = nodeEnter.append('g')
			    .attr("class", "btn_remove")
	            .attr("id", function(d, i) {
	            	return id + "-rmv-" + d.id;
	            });

			    var tmp = [];
		    	var size = 22;
		    	var r = size / 2;
	            var ofs = size / 3.5;
	            var x = 0, y = options.remove && options.remove.y ? options.remove.y : -1;
	            
		    	var circle = removeBtn.append("circle")
	                .attr("cx", x)
	                .attr("cy", y)
	                .attr("r", r)
	                .style("fill", "#fafafa")
	                .style("fill-opacity", .5)
	
	            var cross = removeBtn.append("g");
	            cross.append("line")
	                .attr("x1", x - r + ofs)
	                .attr("y1", y)
	                .attr("x2", x + r - ofs)
	                .attr("y2", y);
	
	            cross.append("line")
	                .attr("x1", x)
	                .attr("y1", y - r + ofs)
	                .attr("x2", x)
	                .attr("y2", y + r - ofs);
	
	            cross.style("stroke-width", 1.5).style("stroke", "#053759");
	            cross.attr("transform", "rotate (45,0,0)");
	            
	            if(!options.remove) {
	            	options.remove = {};
	            	options.remove.x = options.remove && options.remove.x ? options.remove.x : 17; 
	            }
	            nodeEnter.on("mouseover", function(d, i) {
	            	var $this = this;
			    	d3.select("#"+id+"-rmv-"+d.id).style("visibility", "visible")
			    	.attr("transform", function(d) {
			    		var w = d3.select($this).select("text").node().getComputedTextLength();
						return "translate(" + (w + options.remove.x) + ", 0)";
					});
			    })
			    .on("mouseout", function() {
			    	d3.selectAll(".btn_remove").style("visibility", "hidden")
			    })
			    
			    // UPDATE
			    var nodeUpdate = nodeEnter.merge(node);

			    // Transition to the proper position for the node
			    nodeUpdate.transition()
			        .duration(options.duration)
			        .attr("transform", function(d) {
			            return "translate(" + d.y + "," + d.x + ")";
			        });

			    // Update the node attributes and style
			    nodeUpdate.select('circle.'+id+'-node')
			        .attr('r', function(d) {
			        	if(!d.parent) {
							return 3;
						}
			        	return snode(d.data.value);
			        })
			        .style("fill", function(d) {
			        	if(d.data.category) return options.color(d.data.category);
			        	else if(d.data.color) return d.data.color;
			        	else return options.color(d.data.name);
			        })
			        .style("fill-opacity", 0.5)
			        .style("stroke", function (d) {
			        	if(d.data.category) return options.color(d.data.category);
			        	else if(d.data.color) return d.data.color;
			        	else if(options.color) return options.color(d.data.name);
			        })
			        .style("stroke-width", 1)
			        .attr('cursor', 'pointer');
			    
			    //remove btn click event
	            nodeUpdate.select(".btn_remove")
	            .on("click", function(t) {
	            	for (var i in root.children) {
						var parent = root.children[i];
						if (parent.data.id == t.data.id) {
							root.children.splice(i, 1);
							break;
						}
						for (var j in parent.children) {
							var child = parent.children[j];
							if (child.data.id == t.data.id) {
								parent.children.splice(j, 1);
								break;
							}
							for (var k in child.children) {
								var grandchild = child.children[k];
								if (grandchild.data.id == t.data.id) {
									child.children.splice(k, 1);
									break;
								}
							}
						}
					}
					update(t);
				})
				.on("mouseover", function(d, i) {
					d3.select("#"+id+"-rmv-"+d.id).style("visibility", "visible");
				})
	            .style("visibility", "hidden").style("cursor", "pointer")
	            
			    // Remove any exiting nodes
			    var nodeExit = node.exit().transition()
			        .duration(options.duration)
			        .attr("transform", function(d) {
			            return "translate(" + source.y + "," + source.x + ")";
			        })
			        .remove();

			    // On exit reduce the node circles size to 0
			    nodeExit.select('circle').attr('r', 1e-6);

			    // On exit reduce the opacity of text labels
			    nodeExit.select('text').style('fill-opacity', 1e-6);
			    
			    nodeExit.select('.btn_remove');

			    // ****************** links section ***************************

			    // Update the links...
			    var link = svg.selectAll('path.'+id+'-link')
			        .data(links, function(d) {
			            return d.id;
			        });

			    // Enter any new links at the parent's previous position.
			    var linkEnter = link.enter().insert('path', "g")
			        .attr("class", id+'-link')
			        .attr('d', function(d) {
			            var o = {
			                x: source.x0,
			                y: source.y0
			            }
			            return diagonal(o, o)
			        })
			        .style("stroke-width", function (d) {
						return sline(d.data.value);
					})

			    // UPDATE
			    var linkUpdate = linkEnter.merge(link);

			    // Transition back to the parent element position
			    linkUpdate.transition()
			        .duration(options.duration)
			        .attr('d', function(d) {
			            return diagonal(d, d.parent)
			        })
			        .style("fill", options.line.style["fill"] ? options.line.style["fill"] : "none")
			        .style("stroke-linecap", "round")
			        .style("stroke", function (d) {
			        	if(d.data.category) return options.color(d.data.category);
			        	else if(d.data.color) return d.data.color;
			        	return "lightsteelblue";
			        })
					.style("stroke-opacity", function (d) {
						if(options.line.style["stroke-opacity"])
							return options.line.style["stroke-opacity"]
						return 0.3;
					})
			    
				if(options.line) self.setObject(linkUpdate, options.line);
			    
			    // Remove any exiting links
			    var linkExit = link.exit().transition()
			        .duration(options.duration)
			        .attr('d', function(d) {
			            var o = {
			                x: source.x,
			                y: source.y
			            }
			            return diagonal(o, o)
			        })
			        .remove();

			    // Store the old positions for transition.
			    nodes.forEach(function(d) {
			        d.x0 = d.x;
			        d.y0 = d.y;
			    });

			    // Creates a curved (diagonal) path from parent to the child nodes
			    function diagonal(s, d) {

			        path = 'M '+s.y+' '+s.x+''+
			            'C '+(s.y + d.y) / 2+' '+s.x+','+
			              ''+(s.y + d.y) / 2+' '+d.x+','+
			              ''+d.y+' '+d.x;

			        return path
			    }

			    // Toggle children on click.
			    function click(d) {
			        if (d.children) {
			            d._children = d.children;
			            d.children = null;
			            update(d);
			        } else {
			        	if(options.collapse.data && options.collapse.data.conditions) {
			        		var textNode = d3.select(this.parentNode).select("text"); 
			        		var loadX = Number(textNode.attr("x")) + Number(textNode.node().getComputedTextLength());
			        		var loadY = textNode.attr("y");
			        		if(options.collapse.loading.src) {
			        			var loading = d3.select(this.parentNode).append("image")
			        			.attr("id", id + "-" + d.data.id + "-loading")
			        			.attr('width', 20)
			        			.attr("x", loadX).attr("y", -10)
			        			.attr("xlink:href", options.collapse.loading.src);

			        			self.setObject(loading, options.collapse.loading);
			        		}
				    		self.collapse(d, update);
		            	} else {
		            		d.children = d._children;
		            		d._children = null;
		            		update(d);
		            	}
			        }
			        if(options.click) {
			        	options.click(d);
					}
			    }
			    
			    self.setObject(d3.selectAll('.'+id+'-node'), options.node);
			    self.setObject(d3.selectAll('.'+id+'-text'), options.text);
			   
			}
		}
	};
	
	var Cloud = function(){
		var self = this;
		this.draw = function() {
			var id = this.element[0].id;
			var options = this.options;
			var config = this.config;
			var data = options.data;

			width = options.width,
			height = options.height,
			margin = options.margin;
			
			width = width - options.margin.left - options.margin.right;
			height = height - options.margin.bottom - options.margin.top;
			
			//데이터 key값이 text,size로 입력되는 경우 name, value로 변경하는 작업
			for(var i in data) {
				if(data[i].name) data[i].text = data[i].name;
				if(data[i].value) data[i].size = data[i].value;
			}
			
			var min = d3.min(data, function(d) { d.size = Number(d.size); return d.size; });
			var max = d3.max(data, function(d) { d.size = Number(d.size); return d.size; });
			
			//value값에 따라 투명도 기본값 설정  
			if(!options.opacityDomain) {
				options.opacityDomain = [0.6, 0.65, 0.75, 0.85, 0.95, 1];
			}
			//입력된 array 사이즈에 맞춰 비율에 따라 자동 설정
			var opacity = []; 
			for ( var i in options.opacityDomain) {
				var op = Number(options.opacityDomain[i]);
				if(i == 0) {
					opacity.push(min);
					continue;
				}
				if(i == this.options.opacityDomain.length-1) {
					opacity.push(max);
					continue;
				} 
				opacity.push(max * op);
			}
			
			var g = this.svg.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

			//text 사이즈, 투명도 설정
			var s = d3.scaleLinear().domain([min, max]).range(options.text.range ? options.text.range : [1, 30]);
			var o = d3.scaleLinear().domain(opacity).range(options.opacityDomain);
			
		    var textPadding = this.options.text.padding ? this.options.text.padding : 2;
		    options.text.rotate = options.text && options.text.rotate ? options.text.rotate : 0;
		    options.cloud.spiral = options.cloud && options.cloud.spiral ? "rectangular" : options.cloud.spiral;
		    //width, height 영역보다 text가 많은 경우 영역에 맞춰 일부 text 생략 시킴
		    var layout = d3.layout.cloud()
		        .size([width, height])
		        .padding(textPadding)
		        //.timeInterval(20)
		        .words(data)
		        .rotate(function(d) {
		        	return ~~(Math.random() * 2) * options.text.rotate; 
		        })
		        .fontSize(function(d, i) {
		        	d.opacity = o(d.size);
		            return s(d.size);
		        })
		        .fontWeight(["bold"])
		        .spiral(options.cloud.spiral) // "archimedean" or "rectangular"
		        /*.text(function(d) {
		            return d.text;
		        })
		        */
		        
		        layout.on("end", draw).start();
		    /*
		    layout.random(function() {
		    	return 0.5;
		    });
		     */		    

		    function draw(words) {
		    	//text 생성
		        var text = self.svg
		        	.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
		        	.selectAll("text")
		            .data(words)
		            .enter().append("text")
		            .style("cursor", "pointer")
		            .style("font-size", function(d) {
		                return d.size + "px";
		            })
		            .style("font-weight", 600)
		            .style("font-family", "sans-serif")
		            .style("fill-opacity", function(d) { return d.opacity; })
		            .style("fill", function(d, i) {
		            	if(d.color) return d.color;
		            	else if(d.category) return options.color(d.category);
		            	else return options.color(i);
		            })
		            .attr("id", function(d, i) {
						return d.id ? d.id : id +"-id-"+i;
					})
		            .attr("text-anchor", "middle")
		            .attr("transform", function(d) {
		            	var translate = "translate(" + [d.x, d.y] + ") ";
						if(d.rotate) translate += "rotate(" + d.rotate + ")";
		                return translate;
		            })
		            .text(function(d) {
		                return d.text;
		            })
		            .on("click", function(d) {
		            	self.click(d);
		            });

		        if(options.text) self.setObject(text, options.text);
		    };
		}
	};
	
	
	
	var Pie = function(){
		var self = this;
		this.draw = function() {
			var id = this.element[0].id;
			var data = this.options.data;
			var config = this.config;
			var svg = this.svg;

			var options = this.options;
			var type = options.type,
			width = options.width,
			height = options.height,
			margin = options.margin;
			
			width = width - options.margin.left - options.margin.right;
			height = height - options.margin.bottom - options.margin.top;
			
	        var text = "";

	        var format = d3.format(",d");
	        var opacity = .8;
	        var opacityHover = 1;
	        var otherOpacityOnHover = .8;
	        var tooltipMargin = 13;
	
			var radius = Math.min(width, height) / 2;
	
			var g = svg.attr('transform', 'translate(' + ((width/2) + margin.left) + ',' + ((height/2) + margin.top) + ')');

			//pie 전체 크기 설정
			var radiusOpt = options.pie && options.pie.radius ? options.pie.radius : 0.8;
			var arc = d3.arc().innerRadius(0).outerRadius(radius * radiusOpt);
			
			var pie = d3.pie()
			    .value(function(d) {
			        return d.value;
			    })
			    .sort(null);
	
			var group = g.append("g").attr("id", id+"-pie");

			//파이 영역 draw
			var path = group.selectAll('path')
			    .data(pie(data))
			    .enter()
			    .append("g")
			    .append('path')
			    .attr('d', arc)
			    .attr('fill', function(d, i) {
			    	if(d.data.color) {
			    		d.color = d.data.color;
			    	} else d.color = options.color(d.data.name);
			    	return d.color;
			    })
			    .style('opacity', opacity)
			    .style('stroke', 'white')
			    .on("click", function(d) {
			    	self.options.click(d);
			    })
			    .on("mouseover", function(d) {
			        d3.selectAll('path').style("opacity", otherOpacityOnHover);
			        d3.select(this).style("opacity", opacityHover);
			        //마우스 오버 시 툴팁 출력
			        if(options.tooltip.enabled) {
				        var tooltip_g = svg
				            .style("cursor", "pointer")
				            .append("g")
				            .attr("class", id+"-tooltip")
				            .style("opacity", 0);
		
				        //툴팁 텍스트 객체 생성
				        tooltip_g.append("text")
				            .text(function() {
				            	return d.data.name+ ' ('+format(d.data.value)+')';
				            })
				            .attr('text-anchor', 'middle');
				        var text = tooltip_g.select("text");
				        var bbox = text.node().getBBox();
				        var padding = 2;
				        //툴팁 박스 객체 생성
				        tooltip_g.insert("rect", "text")
				        .attr("x", bbox.x - padding)
				        .attr("y", bbox.y - padding)
				        .attr("width", bbox.width + (padding * 2))
				        .attr("height", bbox.height + (padding * 2))
				        .style("fill", "white")
				        .style("opacity", 0.75);
			        }
			    })
			    .on("mousemove", function(d) {
			    	//마우스 이동 시 박스 위치 이동
			    	if(options.tooltip.enabled) {
				        var mousePosition = d3.mouse(this);
				        var x = mousePosition[0] + width / 2;
				        var y = mousePosition[1] + height / 2 - tooltipMargin;
		
				        var text = d3.select('.'+id+'-tooltip text');
													  
				        var bbox = text.node().getBBox();
				        if (x - bbox.width / 2 < 0) {
				            x = bbox.width / 2;
				        } else if (width - x - bbox.width / 2 < 0) {
				            x = width - bbox.width / 2;
				        }
				        x = x - (width / 2);
				        if (y - bbox.height / 2 < 0) {
				            y = bbox.height + tooltipMargin * 2;
				        } else if (height - y - bbox.height / 2 < 0) {
				            y = height - bbox.height / 2;
				        }
				        y = y - (height / 2);
		
				        d3.select('.'+id+'-tooltip').style("opacity", 1).attr('transform', "translate("+x+", "+y+")");
			    	}
			    })
			    .on("mouseout", function(d) {
			        svg.select("."+id+"-tooltip").remove();
			        svg.selectAll('path').style("opacity", opacity);
			    })
			    .on("touchstart", function(d) {
			        svg.style("cursor", "none");
			    })
			    .each(function(d, i) {
			        this._current = i;
			    });
			
			
			//파이 항목 별 라벨링 기능
			if(options.text.enabled == true) {
				
				//text 연결 라인 길이 설정
				var distance = options.line && options.line.distance ? options.line.distance : 0;
				//파이 전체 크기(radiusOpt)에 따라 텍스트 위치 설정 (inner, outer값 조정)
				var lineArc = d3.arc()
			    .outerRadius(radius * (radiusOpt))
			    .innerRadius(radius * (radiusOpt));
				
				var outerArc = d3.arc()
			    .outerRadius(radius * (radiusOpt + 0.1))
			    .innerRadius(radius * (radiusOpt + 0.1));

				svg.append("g").attr("class", id+"-pie-labels");
				svg.append("g").attr("class", id+"-pie-lines");
	
				//text 연결 라인 객체 생성
				var polyline = svg.select('.' + id + '-pie-lines')
				    .selectAll('polyline')
				    .data(pie(data))
				    .enter().append('polyline')
				    .style('opacity', .3)
				    .style('stroke', 'black')
				    .style('stroke-width', '1px')
				    .style('fill', 'none')
				    .attr('points', function(d) {
				        var pos = outerArc.centroid(d);
				        pos[0] = radius * (radiusOpt + distance ) * (midAngle(d) < Math.PI ? 1 : -1);
				        return [lineArc.centroid(d), outerArc.centroid(d), pos]
				    });
	
				this.setObject(polyline, options.line);
				
				//라벨링 text 객체 생성
				var label = svg.select('.' + id + '-pie-labels').selectAll('text')
				    .data(pie(data))
				    .enter().append('text')
				    .attr('dy', '.3em')
				    .text(function(d) {
				    	//text 말줄임표 기능
				    	if(options.text.ellipsis && d.data.name.length > options.text.ellipsis.limit) {
							return (d.data.name).substr(0, options.text.ellipsis.limit) + options.text.ellipsis.suffix;
						}
				        return d.data.name;
				    })
				    .attr('transform', function(d) {
				    	//text 위치 설정
				        var pos = outerArc.centroid(d);
				        pos[0] = radius * (radiusOpt + distance + 0.05) * (midAngle(d) < Math.PI ? 1 : -1);
				        return 'translate(' + pos + ')';
				    })
				    .style('text-anchor', function(d) {
				        return (midAngle(d)) < Math.PI ? 'start' : 'end';
				    });
			    
				this.setObject(label, options.text);
				
			    function midAngle(d) { return d.startAngle + (d.endAngle - d.startAngle) / 2; } 
			}
		}
	};

	var ProgressDonut = function(){
		var self = this;
		this.draw = function() {
			var id = this.element[0].id;
			var data = this.options.data;
			var config = this.config;
			var svg = this.svg;

			var options = this.options;
			var type = options.type,
			width = options.width,
			height = options.height,
			margin = options.margin;
			
			width = width - options.margin.left - options.margin.right;
			height = height - options.margin.bottom - options.margin.top;
			
			var percent = data.percent;
			var value = data.value;
			var text = (percent) + "%";

			var thickness = 30;
			var duration = options.duration;
			var foregroundColor = options.donut.foreColor ? options.donut.foreColor : "#0a8";
			var backgroundColor = options.donut.backColor ? options.donut.backColor : "#ccc";

			var radius = Math.min(width, height) / 2;
			var color = d3.scaleOrdinal([foregroundColor, backgroundColor]);

			var g = svg.attr('transform', 'translate(' + ((width/2) + margin.left) + ',' + ((height/2) + margin.top) + ')');

			options.donut.innerRadius = options.donut.innerRadius ? options.donut.innerRadius : 5;
			options.donut.outerRadius = options.donut.outerRadius ? options.donut.outerRadius : 0;
			
			//donut 지름 설정
			var arc = d3.arc()
			.innerRadius(radius - thickness + options.donut.innerRadius)
			.outerRadius(radius + options.donut.outerRadius);

			var pie = d3.pie().sort(null);

			//donut path 객체 생성
			var path = g.selectAll('path')
			.data(pie([0, 1]))
			.enter()
			.append('path')
			.attr('d', arc)
			.attr('fill', function(d, i) {
			  return color(i);
			})
			.each(function(d) { this._current = d; });

			//path 애니메이션 설정
			path.data(pie([percent/100, 1-(percent/100)])).transition()
			  .duration(duration)
			  .attrTween('d', function(d) {
			  var interpolate = d3.interpolate(this._current, d);
			  this._current = interpolate(0);
			  return function(t) {
			    return arc(interpolate(t));
			  }
			});

			//center 퍼센트 텍스트 영역 
			if(options.percent.use && data.percent) {
				var percentTxt = g.append('text')
				.attr('text-anchor', 'middle')
				.attr('dy', options.percent.y)
				.text(data.percent + options.percent.unit);
				if(options.percent.size) percentTxt.style("font-size", options.percent.size + "px");
				this.setObject(percentTxt, options.percent);
			}
			//center value 텍스트 영역
			if(options.value.use && data.value) {
				var valueTxt = g.append('text')
				  .attr('text-anchor', 'middle')
				  .attr('dy', options.value.y)
				  .text(this.digits(data.value) + options.value.unit);
				if(options.value.size) valueTxt.style("font-size", options.value.size + "px");
				this.setObject(valueTxt, options.value);
			}
			//center name 텍스트 영역
			if(options.name.use && data.name) {
				var nameTxt = g.append('text')
				.attr('text-anchor', 'middle')
				.attr('dy', options.name.y)
				.text(data.name);
				if(options.name.size) valueTxt.style("font-size", options.name.size + "px")
				this.setObject(nameTxt, options.name);
			}
			
			
		}
	};
	var Donut = function(){
		var self = this;
		this.draw = function() {
			
			var id = this.element[0].id;
			var data = this.options.data;
			var config = this.config;
			var svg = this.svg;

			var options = this.options;
			var type = options.type,
			width = options.width,
			height = options.height,
			margin = options.margin;
			
			width = width - options.margin.left - options.margin.right;
			height = height - options.margin.bottom - options.margin.top;
			
			var total = 0;
			d3.map(data, function(d) {
				total += d.value;
			});
			
			var text = "";
	
			var thickness = 40;
			var duration = 750;
	
			var radius = Math.min(width, height) / 2;
	
			var g = svg.attr('transform', 'translate(' + ((width/2) + margin.left) + ',' + ((height/2) + margin.top) + ')');
	
			options.donut.cornerRadius = options.donut.cornerRadius ? options.donut.cornerRadius : 3; 
			options.donut.padAngle = options.donut.padAngle ? options.donut.padAngle : 0.015;
			options.donut.innerRadius = options.donut.innerRadius ? options.donut.innerRadius : 0;
			options.donut.outerRadius = options.donut.outerRadius ? options.donut.outerRadius : 0;
			
			var arc = d3.arc()
				.cornerRadius(options.donut.cornerRadius)
				.padAngle(options.donut.padAngle)
			    .innerRadius(radius - thickness + options.donut.innerRadius)
			    .outerRadius(radius + options.donut.outerRadius);
	
			var pie = d3.pie()
			    .value(function(d) {
			        return d.value;
			    })
			    .sort(null);
	
			//마우스 오버 시 donut 애니메이션
			var pathAnim = function(path, dir) {
	            switch(dir) {
                case 0:
                    path.transition().duration(500).ease(d3.easeBounce).attr('d', d3.arc()
    				.cornerRadius(options.donut.cornerRadius)
    				.padAngle(options.donut.padAngle)
            		.innerRadius(radius - thickness + options.donut.innerRadius)
    			    .outerRadius(radius + options.donut.outerRadius));
                    break;
                case 1:
                	options.donut.hoverRadius = options.donut.hoverRadius ? options.donut.hoverRadius : 10;
                    path.transition().duration(500).ease(d3.easeBounce)
                    .attr('d', d3.arc()
    				.cornerRadius(options.donut.cornerRadius)
    				.padAngle(options.donut.padAngle)
            		.innerRadius(radius - thickness + options.donut.innerRadius)
    			    .outerRadius(radius + options.donut.outerRadius + options.donut.hoverRadius));
                    //0.01당 5px 씩
                    break;
	            }
	        }
			
			//donut 영역 path 객체 생성
			var path = g.selectAll('path')
			    .data(pie(data))
			    .enter()
			    .append("g")
			    .on("click", function(d) {
			    	self.click(d);
			    })
			    .append('path')
			    .attr('d', arc)
			    .attr('fill', function(d, i) {
			    	if(d.data.color)
			    		return d.data.color;
			    	d.data.color = options.color(i);
			    	return d.data.color;
			    })
			    .each(function(d, i) {
			        this._current = i;
			    })
			    
			//마우스 애니메이션 기능 사용여부 체크
			if(options.tooltip.use == undefined || options.tooltip.use != false) {
				//툴팁 기능 사용 true, center 라벨 미변경 됨
				if(options.tooltip.enabled == true) {
					var format = d3.format(",d");
					var tooltipMargin = 13;
				    path.on("mouseover", function(d) {
				        if(options.tooltip.enabled) {
					        var tooltip_g = svg
					            .style("cursor", "pointer")
					            .append("g")
					            .attr("class", id+"-tooltip")
					            .style("opacity", 0);
			
					        //툴팁 text 객체 생성
					        var text = tooltip_g.append("text")
					            .text(function() {
					            	if(options.tooltip.text&&options.tooltip.text.html) return options.tooltip.text.html(d);
					            	return d.data.name+ ' ('+format(d.data.value)+')';
					            })
					            .attr('text-anchor', 'middle');
					        	
					        var bbox = text.node().getBBox();
					        var padding = 2;
					        tooltip_g.insert("rect", "text")
					        .attr("x", bbox.x - padding)
					        .attr("y", bbox.y - padding)
					        .attr("width", bbox.width + (padding * 2))
					        .attr("height", bbox.height + (padding * 2))
					        .style("fill", "white")
					        .style("opacity", 0.75);
	
					        var rect = tooltip_g.append("rect");
					        self.setObject(text, options.tooltip.text);
					        self.setObject(rect, options.tooltip.rect);
					        
				        }
				    })
				    .on("mousemove", function(d) {
				    	if(options.tooltip.enabled) {
					        var mousePosition = d3.mouse(this);
					        var x = mousePosition[0] + width / 2;
					        var y = mousePosition[1] + height / 2 - tooltipMargin;
			
					        var text = d3.select('.'+id+'-tooltip').select("text");
					        var bbox = text.node().getBBox();
					        if (x - bbox.width / 2 < 0) {
					            x = bbox.width / 2;
					        } else if (width - x - bbox.width / 2 < 0) {
					            x = width - bbox.width / 2;
					        }
					        x = x - (width / 2);
					        if (y - bbox.height / 2 < 0) {
					            y = bbox.height + tooltipMargin * 2;
					        } else if (height - y - bbox.height / 2 < 0) {
					            y = height - bbox.height / 2;
					        }
					        y = y - (height / 2);
			
					        d3.select('.'+id+'-tooltip').style("opacity", 1).attr('transform', "translate("+x+", "+y+")");
				    	}
				    })
				    .on("mouseout", function(d) {
				        svg.select("."+id+"-tooltip").remove();
				    })
				} else {
					//툴팁 기능 사용 false, center 라벨 변경
					path.on("mouseover", function(d) {
						text_group.transition().duration(200).style("display", "block");
						//center 영역 퍼센트 출력 텍스트 영역
						if(options.percent && options.percent.use) {
							var percent = (d.data.value / total) * 100;
							percent = Math.round(percent * Math.pow(10, options.percent.point)) / Math.pow(10, options.percent.point);
							percentTxt.text(percent + options.percent.unit)
							.style("fill", d.data.color)
						}
						//center 영역 값 출력 텍스트 영역
						if(options.value && options.value.use) {
							valueTxt.text(self.digits(d.data.value) + options.value.unit);
						}
						//center 영역 이름 출력 텍스트 영역
						if(options.name && options.name.use) {
							nameTxt.text(d.data.name);
						}
						pathAnim(d3.select(this).select("path"), 1)
					})
					.on("mouseout", function(d) {
						text_group
						.style("fill", options.color(this._current))
						.select("."+id+"-text-group")
						.transition().duration(options.duration)
						.style("display", "none");
						pathAnim(d3.select(this).select("path"), 0);
					});
				}
			}

	    	var text_group = g.style("cursor", "pointer").append("g").attr("class", id+"-text-group");
			if(options.percent && options.percent.use) {
				var percent = (data[0].value / total) * 100;
				percent = Math.round(percent * Math.pow(10, options.percent.point)) / Math.pow(10, options.percent.point);
						
				var percentTxt = text_group.append('text')
				.attr('text-anchor', 'middle')
				.attr('dy', options.percent.y)
				.style("fill", data[0].color)
				.text(percent + options.percent.unit);
				if(options.percent.size) percentTxt.style("font-size", options.percent.size + "px");
				this.setObject(percentTxt, options.percent);
			}
			
			if(options.value && options.value.use) {
				var valueTxt = text_group.append('text')
				.attr('text-anchor', 'middle')
				.attr('dy', options.value.y)
				.text(this.digits(data[0].value) + options.value.unit);
				if(options.value.size) valueTxt.style("font-size", options.value.size + "px");
				this.setObject(valueTxt, options.value);
			}
			
			if(options.name && options.name.use) {
				var nameTxt = text_group.append('text')
				.attr('text-anchor', 'middle')
				.attr('dy', options.name.y)
				.text(data[0].name);
				if(options.name.size) nameTxt.style("font-size", options.name.size + "px")
				this.setObject(nameTxt, options.name);
			}
			
		}
	};
	
	var Bar = function() {
		var self = this;
		this.type = 'bar';
		
		this.draw = function() {
			var id = this.element[0].id;
			var options = this.options;
			var config = this.config;
			var data = options.data;
			
			width = options.width,
			height = options.height,
			margin = options.margin;
			
			width = width - options.margin.left - options.margin.right;
			height = height - options.margin.bottom - options.margin.top;

			var g = this.svg.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	
			//차트 영역 background style, attr 관련 설정
			if(options.axis) {
				var background = g.append("rect")
				.attr("width", width)
				.attr("height", height)
				.attr("fill", "none");
				
				this.setObject(background, options.axis);
			}
			
			//x, y축 도메인 설정
			var max = d3.max(data, function(d) {
	            return d.value;
	        });
	        
	        var xDomain = data.map(function(d) {
	            return d.name;
	        });
	        var yDomain = [0, max + (max / 10)];
	        this.drawAxis(data, xDomain, yDomain);

		    var xScale = self.xScale;
		    var yScale = self.yScale;
		    var axis_x = self.xAxis;
		    var axis_y = self.yAxis;
		    
	        draw();
			function draw() {
	
			    var bounds = self.svg.node().getBoundingClientRect();
	
			    self.styleAxis(xScale, yScale, axis_x, axis_y);
			    var bars = g.selectAll(".bar").data(data);
	
			    //bar 차트 rect 객체 생성
			    // ENTER
			    var rect = bars.enter().append("rect")
			        .attr("class", "bar")
			        .attr("x", function(d) {
			        	if(options.bar && options.bar.width) return (xScale.bandwidth() / 2) - (options.bar.width / 2) + xScale(d.name); 
			            return xScale(d.name);
			        })
			        .attr("y", function(d) {
			            return yScale(d.value);
			        })
			        .attr("width", options.bar && options.bar.width ? options.bar.width : xScale.bandwidth())
			        .attr("height", function(d) {
			            return height - yScale(d.value);
			        })
			        .style("fill", function(d) {
			        	if(d.color) return d.color;
						else if(options.color) d.color = options.color(d.name);
						else d.color = "#3182bd"; 
						return d.color;
			        })
			        .on("mouseout", function() {
				    	tooltips.style('display', 'none');
				    })
			        .on("mousemove", mousemove)
			        .on("click", function(d) {
		            	self.click(d);
		            });
			    if(options.click) rect.style("cursor", "pointer");
	
			    if(options.rect) self.setObject(rect, options.rect);
				
			    // UPDATE
			    bars.attr("x", function(d) {
		            return xScale(d.name);
		        })
		        .attr("y", function(d) {
		            return yScale(d.value);
		        })
		        .attr("width", xScale.bandwidth())
		        .attr("height", function(d) {
		            return height - yScale(d.value);
		        });

			    
			    // EXIT
			    bars.exit().remove();
			}

			//툴팁 이벤트 설정
	        var tooltips = this.drawTooltip(this.svg, 1);
			function mousemove(d) {
				var x = d3.mouse(this)[0];
			    var y = d3.mouse(this)[1];
			    self.moveTooltip(tooltips, data, d, x, y, "bar");
			}
		}
	}
	
	var StackedBar = function() {
		var self = this;
		this.type = 'stackedbar';
		
		this.draw = function() {
			var id = this.element[0].id;
			var options = this.options;
			var config = this.config;
			var data = options.data;

			width = options.width,
			height = options.height,
			margin = options.margin;
			
			width = width - options.margin.left - options.margin.right;
			height = height - options.margin.bottom - options.margin.top;

			var formatPercent = d3.format(".0%");
			var formatNumber = d3.format("");
			
				   
														  
					
   
			data = d3.nest().key(function(d){ return d.name;}).entries(data);

			var n = data.length, // number of layers
		    	m = data[0].values.length; // number of samples per layer
			
			var list = [], colors = [];

			data.forEach(function(obj) {
  				var categories = d3.nest()
  				.key(function(d) {return d.category;})
  				.rollup(function(e) {return d3.mean(e,function(d) {return d.value;})})
  				.object(obj.values);

  				var c = d3.nest()
  				.key(function(d) {return d.category;})
  				.rollup(function(e) { 
  					var d = e[0];
  					if(d.color) return d.color; 
  					else return options.color(d.category);
  				})
  				.object(obj.values);
  				
  				//colors[obj.key] = c;
  				colors.push(c);
  				
  				list.push({
  					key: obj.key,
  					values: categories
  				});
  			});
			
			var stocks = list.map(function(d, i) {
  				var final= { name: d.key};
  				Object.keys(d.values).forEach(function(key) {
  					final[key] = d.values[key];
  				});
  				return final;
  			});
  			var keys = d3.keys(stocks[0]).slice(1);
  			var total =[];
  			stocks.forEach(function(d){
  				total.push(d3.sum(keys,function(name){return d[name];}))
  			})
			
			var duration = options.duration;
  			var t = d3.transition().duration(options.duration);
			var g = this.svg.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
			
			var n = keys.length, // number of layers
			    m = stocks.length; // number of samples per layer
			
			var layers = d3.stack().keys(keys)(stocks);
			var yStackMax = d3.max(layers, function(layer) {
			        return d3.max(layer, function(d) {
			            return d[1];
			        });
			    }),
			    yGroupMax = d3.max(layers, function(layer) {
			        return d3.max(layer, function(d) {
			            return d[1] - d[0];
			        });
			    });

			var xDomain = stocks.map(function(d) { return d.name; });
			var yDomain = [0, yStackMax];
			this.drawAxis(data, xDomain, yDomain);

		    var xScale = this.xScale;
		    var yScale = this.yScale;
		    var xAxis = this.xAxis;
		    var yAxis = this.yAxis;
		    this.styleAxis(xScale, yScale, xAxis, yAxis);
			
			var svg = this.svg.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

			var layer = svg.selectAll("." + id + "layer")
			    .data(layers)
			    .enter().append("g")
			    .attr("class", id + "layer")
			    .attr("id", function(d) {
			        return id + "-rect-"+ d.key;
			    })
				/*.style("fill", function(d, i) {
					return options.color(d.key);
				});*/

			var c_index = 0;
			var rect = layer.selectAll("rect")
			    .data(function(d) {
			        return d;
			    })
			    .enter().append("rect")
			    .attr("id", function(d, i) {
			    	return id + "-rect-" + i;
			    })
			    .attr("x", function(d, i) {
			    	var rectx = (xScale.bandwidth() / 2) + xScale(d.data.name);
			    	if(options.bar && options.bar.width) rectx = rectx - (options.bar.width / 2);
			    	return rectx; 
			    })
			    .attr("y", height)
			    .attr("width", options.bar.width ? options.bar.width : xScale.bandwidth())
			    .attr("height", 0)
			    .style("cursor", "pointer")
			    /*.style("fill", function(d, i) {
			    	d.color = colors[d.data.name][keys[c_index]];
			    	if(Number(i) == (stocks.length-1)) c_index++;
			    	return d.color;
			    })*/
			    .on("mousemove", mousemove)
			    .on("mouseout", function() {
			    	tooltips.style('display', 'none');
			    })
			    .on("click", function(d) {
			        self.click(d);
			    });
	
			rect.transition(t)
			    .delay(function(d, i) {
			        return i * 10;
			    })
			    .attr("y", function(d) {
			        return yScale(d[1]);
			    })
			    .attr("height", function(d) {
			        return yScale(d[0]) - yScale(d[1]);
			    });
	
			if(options.bar.type) {
				if (options.bar.type === "grouped") transitionGrouped();
				else if (options.bar.type === "stacked") transitionStacked();
				else if (options.bar.type === "percent") transitionPercent();
			}
			
			if(options.bar.change) {
				d3.selectAll("input[name="+options.bar.change.name+"]").on("change", change);
				function change() {
					if (this.value === "grouped") transitionGrouped();
					else if (this.value === "stacked") transitionStacked();
					else if (this.value === "percent") transitionPercent();
				}
			}

			rect.style("fill", function(d) {
				var parent_keys = d3.select(this.parentNode).attr("id").split("-");
				var parent_key = parent_keys[parent_keys.length - 1];
				var idxs = d3.select(this).attr("id").split("-");
				var idx = idxs[idxs.length - 1];
				d.colors = colors[idx];
				d.idx = Number(idx);
				return colors[idx][parent_key];
			})
			
			
			if(options.bar && options.line && options.line.data) {
				var lineY = yScale;
				if(options.axis && options.axis.right) {
					lineY = this.yRightScale;
				}
		        //line
				var lineType = this.lineType(options.line.type); 
		        var line = d3.line().curve(lineType)
		        .x(function (d) { return xScale(d.x) + xScale.bandwidth()/2; })
		        .y(function (d) { return lineY(d.value); });
	
		        var lineData = this.parser(options.line.data);
		        var lines = svg.append('g').attr('class', id+'-lines');
		        var line_group = lines.selectAll("."+ id + '-line-group')
			    .data(lineData).enter()
			    .append('g')
			    .attr('class', id + '-line-group')
			    .style("pointer-events", "all");
		        // Add the valueline path
		        var path = line_group.append('path').attr("d", line(options.line.data))
		     	.styles({
		     		"fill": "none",
		     	  	"stroke": "#676179",
		     	  	"stroke-width": 5,
		     	  	"stroke-linecap": "round",
		     	  	"stroke-dasharray" : "0, 10.5"
		     	});
		     	
		     	if(options.line) self.setObject(path, options.line);
		     	
		     	// custom invert function
		     	xScale.invert = (function(){
		     	    var domain = xScale.domain()
		     	    var range = xScale.range()
		     	    var scale = d3.scaleQuantize().domain(range).range(domain)
		     	    return function(x){
		     	        return scale(x)
		     	    }
		     	})();
		     	
				if(options.tooltip.enabled == true || options.tooltip.enabled == "true") {
					
					var eventCapture = svg.append("rect")
				    .attr("class", "overlay")
				    .attr("width", width)
				    .attr("height", height)
				    .attr("fill", "none")
				    .style("pointer-events", "all")
				    .style('cursor', 'pointer');
				
					eventCapture.on("mouseout", function() {
						tooltips.style('display', 'none');
					})
					.on("mousemove", function() {
						var x = d3.mouse(this)[0];
						var y = d3.mouse(this)[1];
					    var d = xScale.invert(x);
					    var idx = 0;
					    for(var i in options.line.data) {
					    	if(options.line.data[i].x == d) idx = i; 
					    }
					    data[idx].idx = Number(idx);
				    	self.moveTooltip(tooltips, data, data[idx], x, y, "stackedbar_line");
					})
					
				}
	        }
			var tooltips = this.drawTooltip(svg, data[0].values.length);
			
			
			function transitionGrouped() {
			    yScale.domain([0, yGroupMax]);
	
			    rect.transition(t)
			        .attr("x", function(d, i, j) {
			        	var ids = this.parentNode.id.split("-");
			        	var index = keys.indexOf(ids[ids.length-1]);
			        	if(options.bar.width) return xScale(d.data.name) + (xScale.bandwidth() /2) + (options.bar.width * index) - (options.bar.width * n / 2); 
			        	else return xScale(d.data.name) + xScale.bandwidth() / n * index;
			        })
			        .attr("width", options.bar.width ? options.bar.width : xScale.bandwidth() / n)
			        .transition()
			        .attr("y", function(d) {
			            return height - (yScale(d[0]) - yScale(d[1]));
			        })
			        .attr("height", function(d) {
			            return yScale(d[0]) - yScale(d[1]);
			        });
	
			    yAxis.tickFormat(formatNumber)
			    svg.selectAll(".y.axis").call(yAxis);
			    self.styleAxis(xScale, yScale, xAxis, yAxis);
			}
	
			function transitionStacked() {
			    yScale.domain([0, yStackMax]);
	
			    rect.transition(t)
			        .attr("y", function(d) {
			            return yScale(d[1]);
			        })
			        .attr("height", function(d) {
			            return yScale(d[0]) - yScale(d[1]);
			        })
			        .transition()
				    .attr("x", function(d, i) {
				    	return (xScale.bandwidth() / 2) - (options.bar.width / 2) + xScale(d.data.name); 
				    })
				    .attr("width", options.bar.width ? options.bar.width : xScale.bandwidth())
	
			    yAxis.tickFormat(formatNumber)
			    svg.selectAll(".y.axis").call(yAxis);
			    	self.styleAxis(xScale, yScale, xAxis, yAxis);
			}
	
			function transitionPercent() {
			    yScale.domain([0, 1]);
	
			    rect.transition(t)
			        .attr("y", function(d) {
			            var total = d3.sum(d3.values(d.data));
			            return yScale(d[1] / total);
			        })
			        .attr("height", function(d) {
			            var total = d3.sum(d3.values(d.data));
			            return yScale(d[0] / total) - yScale(d[1] / total);
			        })
			        .transition()
			        .attr("x", function(d, i) {
				    	return (xScale.bandwidth() / 2) - (options.bar.width / 2) + xScale(d.data.name); 
				    })
				    .attr("width", options.bar.width ? options.bar.width : xScale.bandwidth());
	
			    yAxis.tickFormat(formatPercent)
			    svg.selectAll(".y.axis").call(yAxis);
			    	self.styleAxis(xScale, yScale, xAxis, yAxis);
	
			}
			
			function mousemove(d) {
			    var x = d3.mouse(this)[0];
			    var y = d3.mouse(this)[1];
	   
			    self.moveTooltip(tooltips, data, d, x, y, "stackedbar");
			    
			}
		}
	}
	
	var NetworkMap = function(){
		var self = this;
		this.type = "networkmap";
		this.draw = function() {
			var id = this.element[0].id;
			var data = this.options.data;
			var options = this.options;
			var margin = options.margin;
			
			var width = options.width,
			height = options.height,
			margin = options.margin;
			
			width = width - margin.left - margin.right;
			height = height - margin.bottom - margin.top;

			var style = {
				distance : options.link.distance ? options.link.distance : 100,
				strength : options.link.strength ? options.link.strength : -30,
				nodeRange : options.node.range ? options.node.range : [5, 20],
				linkRange : options.link.range ? options.link.range : [1, 12],
				textSize : options.text.size ? options.text.size : 10, 
			}

			//데이터 처리
			var total = 0;
			var links = [];
			var nodes = [];
			var map = d3.map();
			for (var i = 0; i < data.length; i++) {
				var link = data[i];
				total += link.value;
				if(map.has(link.target)) {
					var obj = map.get(link.target);
					obj.value += link.value; 
					obj.siblings.push(link);
				} else {
					var obj = {id : link.target, value : link.value, siblings : [link]};
					$.extend(true, obj, link);
					map.set(link.target, obj);
				}
				if(map.has(link.source)) {
					var obj = map.get(link.source);
					obj.value += link.value; 
					obj.siblings.push(link);
				} else {
					var obj = {id : link.source, value : link.value, siblings : [link]};
					$.extend(true, obj, link);
					map.set(link.source, obj);
				}
				links.push($.extend(true, {}, link));
			}
			map.each(function(d) {
				nodes.push(d);
			});

			var svg = this.svg.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

			//link 화살표 객체 생성
			svg.append('defs').append('marker')
	        .attrs({'id':id+'-arrowhead',
	            'viewBox':'-0 -5 10 10',
	            'refX':13,
	            'refY':0,
	            'orient':'auto',
	            'markerWidth':13,
	            'markerHeight':13,
	            'xoverflow':'visible'})
	        .append('svg:path')
	        .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
	        .attr('fill', '#999')
	        .style('stroke','none');
			
			//노드, 링크 사이즈
			var r = d3.scaleLinear().domain(d3.extent(nodes, function(d) { return +d.value;})).range(style.nodeRange);
			var s = d3.scaleLinear().domain(d3.extent(links, function(d) { return +d.value;})).range(style.linkRange);
			var simulation = d3.forceSimulation()
			    .force("link", d3.forceLink().id(function(d) {
			        return d.id;
			    }).distance(style.distance))
			    .force("charge", d3.forceManyBody().strength(style.strength))
			    .force("center", d3.forceCenter(width / 2, height / 2))
	
			//링크 객체 생성
			var link = svg.append("g")
			    .attr("class", "links")
			    .selectAll("line")
			    .data(links)
			    .enter().append("line")
			    .styles({
			    	'stroke': '#999',
			    	'stroke-opacity': 0.6
			    });
			    
			//링크 화살표 추가
			if(options.link.arrow) link.attr('marker-end','url(#'+id+'-arrowhead)');
			else {
				link.attr("stroke-width", function(d) {
					d.s = s(d.value);
					return d.s;
				});
			}
			//link title 객체 추가
			link.append("title").text(function (d) {return d.value;});
			    
			//link 객체 생성
			var edgepaths = svg.selectAll("."+id+"-edgepath")
            .data(links)
            .enter()
            .append('path')
            .attrs({
                'class': id+'-edgepath',
                'fill-opacity': 0,
                'stroke-opacity': 0,
                'id': function (d, i) {return id+'-edgepath' + i}
            })
            .style("pointer-events", "none");
			
			//link 위 value 출력 시 text 객체 생성
			edgelabels = svg.selectAll("." + id + "-edgelabel")
	        .data(links)
	        .enter()
	        .append('text')
	        .style("pointer-events", "none")
	        .attrs({
	            'class': id + '-edgelabel',
	            'id': function (d, i) {return id + '-edgelabel' + i},
	            'fill': '#545454'
	        });
			if(options.text) self.setObject(edgelabels, options.text);
	
			//link 위 value 출력 시 text 하위의 textPath 생성 
			edgelabels.append('textPath')
	        .attr('xlink:href', function (d, i) {return '#' + id + '-edgepath' + i})
	        .style("text-anchor", "middle")
	        .style("pointer-events", "none")
	        .attr("startOffset", "50%")
	        .text(function (d) {return d.value});
			if(options.path) self.setObject(edgelabels, options.path);
			
			//노드 부모 객체 생성
			var node = svg.append("g")
			    .attr("class", "nodes")
			    .selectAll("g")
			    .data(nodes)
			    .enter().append("g");
			
			//노드 클릭 이벤트 설정
			if(options.click) {
				node
				.style("cursor", "pointer")
				.on("click", function(d) {
					options.click(d);
				});
			}
			
			//tooltip.enabled : true 인 경우 툴팁 출력
	        var tip = d3.tip()
		    .attr('class', id + '-d3-tip')
		    .offset([-10, 0])
		    .html(function(d) {
		        if (options.tooltip.html) return options.tooltip.html(d);
		        var html = '';
		        if(d.id) html += d.id + "<br>";
		        if(d.name) html += d.name + "<br>";
		        if(d.value) html += d.value + "<br>";
		        return html;
		    })
			if(options.tooltip.enabled) {
				svg.call(tip);
		    }
			
	        //노드 circle 객체 생성
			var circles = node.append("circle")
			    .attr("r", function(d) {
			    	d.r = r(d.value);
			    	return d.r;
			    })
			    .attr("fill", function(d) {
			    	if(d.color) return d.color;
			    	if(d.source_color && d.id == d.source) return d.source_color;
			    	if(d.target_color && d.id == d.target) return d.target_color;
			        return options.color(d.id);
			    })
			    .attr("visibility", function(d) {
			    	//데이터 source_type과 옵션 node 설정값이 있는경우 hidden 처리 > 대신 옵션에 설정된 image 출력
			    	if(d.source_type && options.node.type) {
		        		for(var key in options.node.type) {
		        			if(key == d.source_type) {
		        				return "hidden"
		        			}
		        		}
		        	} 
			    })
			    .styles({
			    	'stroke': '#fff',
			    	'stroke-width': '1.5px',
			    	cursor : "pointer"
			    })
			    .call(d3.drag()
			        .on("start", dragstarted)
			        .on("drag", dragged)
			        .on("end", dragended));
			if(options.node) self.setObject(circles, options.node);
			
			//데이터 source_type, target_type과 옵션 node.type에 설정값이 있는경우 해당 image 출력
			var images = node.append("svg:image")
	        .attr("xlink:href",  function(d) { 
        		if(options.node.type && (d.source_type || d.target_type)) {
        			for(var key in options.node.type) {
        				if(d.id == d.source && key == d.source_type) {
        					return options.node.type[key];
        				}
        				if(d.id == d.target && key == d.target_type) {
        					return options.node.type[key];
        				}
        			}
        		} 
	        	return d.img;
	        })
	        .attr("width", function(d) {
	        	var width = 0;
	        	if(options.node.width) width = options.node.width; 
	        	else if(d.r) width = r(d.value) * 2;
	        	d.width = width;
		    	return width;
		    })
		    .attr("height", function(d) {
		    	var height = 0;
		    	if(options.node.height) height = options.node.height;
		    	else if(d.r) height = r(d.value) * 2;
		    	d.height = height;
		    	return height;
		    })
		    .attr("transform", function(d) {
		    	var x = -(d.width / 2), y = -(d.height / 2);
		    	if(options.node.x) x = x + options.node.x; 
		    	if(options.node.y) y = y + options.node.y; 
		    	return 'translate('+ x +', '+ y +')';
		    })
			.call(d3.drag()
	        .on("start", dragstarted)
	        .on("drag", dragged)
	        .on("end", dragended));
	
			//노드 텍스트 출력
			var lables = node.append("text")
			    .text(function(d) {
			        return d.id + "(" + d.value + ")";
			    })
			    .attr("dy", 0)
			    .attr('x', function(d) {
			    	var x = 0;
			    	if(options.text.x) x = x + options.text.x; 
			    	return x;
			    })
			    .attr('y', function(d) {
			    	var y = 0;
			    	if(options.text.y) y = y + options.text.y;
			    	return y;
			    })
			    
			//텍스트 길이 길어지는 경우 줄바꿈 기능 추가
			if(options.text.wrap) node.selectAll("text").call(this.wrap, options.text.wrap.width ? options.text.wrap.width : null);
			if(options.text) self.setObject(lables, options.text);
			
			//노드 타이틀 객체 추가
			node.append("title").text(function(d) { return d.id; });
			
			//이미지, 텍스트 객에체 툴팁 이벤트 추가
	        if(options.tooltip.enabled) {
	        	images.on('mouseover', function(d) { tip.show(d); }).on('mouseout', function(d) { tip.hide(d); })
	        	lables.on('mouseover', function(d) { tip.show(d); }).on('mouseout', function(d) { tip.hide(d); })
	        }
			
	        //노드, link 객체에 style, attr 설정 
			this.setObject(lables, options.text);
			this.setObject(circles, options.node);
			this.setObject(images, options.images);
			this.setObject(edgelabels, options.edge);
			this.setObject(link, options.link);
			
			simulation.nodes(nodes).on("tick", ticked);
			simulation.force("link").links(links);
	
			//마우스 이벤트 설정
			var mouseover = function(arr) {
				link.style('opacity', function(link_d) {
	                return link_d.source.id === d.id || link_d.target.id === d.id ? 1 : 0;
	            })
			};
			
			//노드 mouseove 시 노드만 보이도록 설정
			node.on('mouseover', function(d) {
		        // Highlight the connections
				lables.style('opacity', function(text_d) {
					for(var i in text_d.siblings) {
						var sibling = text_d.siblings[i];
						if(sibling.source === d.id || sibling.target === d.id) return 1;
					}
	                return 0;
	            })
	            link.style('opacity', function(link_d) {
	            	return link_d.source.id === d.id || link_d.target.id === d.id ? 1 : 0;
	            })
	            edgelabels.style('opacity', function(edge_d) {
	            	return edge_d.source.id === d.id || edge_d.target.id === d.id ? 1 : 0;
	            })
		    })
		    .on('mouseout', function(d) {
		        link.style('opacity', 1);
		        edgelabels.style('opacity', 1);
		        lables.style('opacity', 1);
		    })
			
		    //네트워크 맵 위치 설정 (move 이벤트 발생 시 호출)
			function ticked() {
				circles.attr("cx", function(d) { return d.x = Math.max(d.r, Math.min(width - d.r, d.x)); })
				.attr("cy", function(d) { return d.y = Math.max(d.r, Math.min(height - d.r, d.y)); });

				images
				.attr("x", function(d) { return d.x = Math.max(d.r, Math.min(width - d.r, d.x)); })
				.attr("y", function(d) { return d.y = Math.max(d.r, Math.min(height - d.r, d.y)); });
				
				link.attr("x1", function (d) {return d.source.x;})
	            .attr("y1", function (d) {return d.source.y;})
	            .attr("x2", function (d) {return d.target.x;})
	            .attr("y2", function (d) {return d.target.y;});
			    
			    
								
			    lables
			    .attr("transform", function(d) {
					var x = r(d.value) + d.x + 3;
					var y = d.y + (style.textSize / 3);
					return 'translate('+ x +', '+ y +')';
				})
			    
			    edgepaths.attr('d', function (d) {
		            return 'M ' + d.source.x + ' ' + d.source.y + ' L ' + d.target.x + ' ' + d.target.y;
		        });
			    edgelabels.attr('transform', function (d) {
		            if (d.target.x < d.source.x) {
		                var bbox = this.getBBox();
		                rx = bbox.x + bbox.width / 2;
		                ry = bbox.y + bbox.height / 2;
		                return 'rotate(180 ' + rx + ' ' + ry + ')';
		            } else return 'rotate(0)';
		        });
			}	
	
			function dragstarted(d) {
			    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
			    d.fx = d.x;
			    d.fy = d.y;
			}
	
			function dragged(d) {
			    d.fx = d3.event.x;
			    d.fy = d3.event.y;
			}
	
			function dragended(d) {
			    if (!d3.event.active) simulation.alphaTarget(0);
			    d.fx = null;
			    d.fy = null;
			}
		}
	};
	var Scatter = function(){
		
		var self = this;
		this.type = "scatter";
		this.draw = function() {
			var id = this.element[0].id;
			var data = this.options.data;
			var options = this.options;
			var margin = options.margin;

			var width = options.width,
			height = options.height,
			margin = options.margin;
			
			width = width - margin.left - margin.right;
			height = height - margin.bottom - margin.top;

			var svg = this.svg.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

			//x, y축 도메인 설정
			var xDomain = d3.extent(data, function(d) { return +d.x;});
			var yDomain = d3.extent(data, function(d) { return +d.y;});
			self.drawAxis(data, xDomain, yDomain);
			
			update(data);
			
			function update(source) {

				var xscale = self.xScale;
				var yscale = self.yScale;
				var xaxis = self.xAxis;
				var yaxis = self.yAxis;
				
			    var t = d3.transition().duration(options.duration).ease(d3.easeQuadOut);

			    xscale.domain(d3.extent(data, function(d) { return +d.x;}))
			    yscale.domain(d3.extent(data, function(d) { return +d.y;}))

			    //x, y축 스타일 설정
			    self.styleAxis(xscale, yscale, xaxis, yaxis);
			    
			    //노드 사이즈 설정
			    var r = d3.scaleLinear()
			    .domain(d3.extent(data, function(d) { return +d.value;}))
			    .range(options.node.range ? options.node.range : [5, 20]);

			    //노드 객체 생성
			    var nodes = svg.selectAll("."+id+"-dot").data(data);
			    var circles = nodes.enter().append('circle')
			        .attr('r', function(d) {
			        	return r(d.value);
			        })
			        .attr("stroke", "white")
			        .attr("stroke-width", "2px")
			        .attr('fill', function(d) {
			        	//data.color > data.category color > data.name color 순으로 적용  
			        	if(d.color) return d.color;
			        	else if(d.category) d.color = options.color(d.category);
			        	else d.color = options.color(d.name);
			        	return d.color;
			        })
			        //.attr('stroke', 'black')
			        .attr('class', id+'-dot')
			        .attr('id', function(d, i) {
			        	return id + '-dot-' + i;
			        })
			        .attr('cy', height)
			        .attr('cx', 0)
			        .merge(nodes)
			        .transition(t)
			        .attr("cy", function(d, i) {
			            return yscale(d.y);
			        })
			        .attr("cx", function(d, i) {
			            return xscale(d.x);
			        });
			    
			    //mouseover 할때만 텍스트 출력 기능
			    if(options.text.over) {
			    	d3.selectAll('.'+id+'-dot').on('mouseover', function(d){
			    		var id = d3.select(this).attr("id");
			    		d3.select("#"+id.replace("dot", "label")).style("opacity", 1)
			    	}).on('mouseout', function(){
			    		texts.style("opacity", 0);
			    	});
			    }
			        
			    //노드 클릭 이벤트 설정
			    var dots = svg.selectAll("."+id+"-dot")
			    .on("click", function(d) {
		        	self.click(d);
		        })

			    if(options.node) self.setObject(dots, options.node);
			        
			    nodes.exit().remove();

			    //노드 텍스트 생성
			    options.text.x = self.isNull(options.text.x) ? 0 : options.text.x;
			    options.text.y = self.isNull(options.text.y) ? 0 : options.text.y;
			    var labels = svg.selectAll('.'+id+'-label').data(data);
			    labels.enter().append('text')
			        .attr('class', id+'-label')
			        .attr('id', function(d, i) {
			        	return id + '-label-' + i;
			        })
			        .attr('x', 0)
			        .attr('y', height)
			        .merge(labels)
			        .transition(t)
			        .attr('x', function(d) {
			            return xscale(d.x) + (r(d.value)) + options.text.x;
			        })
			        .attr('y', function(d) {
			            return yscale(d.y) + (r(d.value) / 2)  + options.text.y;
			        })
			        .text(function(d) {
			            return d.name;
			        })

		        d3.selectAll('.' + id+'-label')
		        .attr('x', function(d) {
		            return xscale(d.x) + options.text.x;
		        })
		        .attr('y', function(d) {
		            return yscale(d.y) + (r(d.value) / 2)  + options.text.y;
		        })
		        
			    var texts = svg.selectAll("."+id+"-label")
			    .on("click", function(d) {
			    	self.click(d);
		        })
		        
		        if(options.text.over) texts.style("opacity", 0);
			    if(options.text) self.setObject(texts, options.text);
			        
			    labels.exit().remove();

			    svg.select('.x.axis').transition(t).call(xaxis);
			    svg.select('.y.axis').transition(t).call(yaxis);

			}

		}
	};
	
	
	var ScatterBand = function(){
		
		var self = this;
		this.type = "scatter_band";
		this.draw = function() {
			var id = this.element[0].id;
			var data = this.options.data;
			var options = this.options;
			var margin = options.margin;

			var width = options.width,
			height = options.height,
			margin = options.margin;
			
			width = width - margin.left - margin.right;
			height = height - margin.bottom - margin.top;

			var svg = this.svg.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

			//x, y축 도메인 설정
			var xDomain = data.map(function(d) { return d.x;});
			var yDomain = data.map(function(d) { return d.y;});
			self.drawAxis(data, xDomain, yDomain);
			
	        //tooltips 설정
	        var tip = d3.tip()
		    .attr('class', id + '-d3-tip')
		    .offset([-10, 0])
		    .html(function(d) {
		        if (options.tooltip.html) return options.tooltip.html(d);
		        return d.x + "<br>" + d.y + "<br>" + self.digits(d.value);
		    })
			if(options.tooltip.enabled) {
		    	svg.call(tip);
		    }
		    
			update(data);
			
			function update(source) {

				var xscale = self.xScale;
				var yscale = self.yScale;
				var xaxis = self.xAxis;
				var yaxis = self.yAxis;
				
				//노드 애니메이션
			    var t = d3.transition().duration(options.duration).ease(d3.easeQuadOut);

			    //노드 사이즈 설정
			    var r = d3.scaleLinear()
			    .domain(d3.extent(data, function(d) { return +d.value;}))
			    .range(options.node.range ? options.node.range : [5, 20]);

			    //노드 객체 생성
			    var nodes = svg.selectAll("."+id+"-dot").data(data);
			    var circles = nodes.enter().append('circle')
			        .attr('r', function(d) {
			        	return r(d.value);
			        })
			        .attr("stroke", "white")
			        .attr("stroke-width", "2px")
			        .attr('fill', function(d) {
			        	//data.color > data.category color > data.name color 순으로 적용
			        	if(d.color) return d.color;
			        	else if(d.category) d.color = options.color(d.category);
			        	else d.color = options.color(d.name);
			        	return d.color;
			        })
			        //.attr('stroke', 'black')
			        .attr('class', id+'-dot')
			        .attr('id', function(d, i) {
			        	return id + '-dot-' + i;
			        })
			        .merge(nodes)
			        .transition(t)
			        .attr("cy", function(d, i) {
			            return yscale(d.y) + yscale.bandwidth() / 2;
			        })
			        .attr("cx", function(d, i) {
			            return xscale(d.x) + xscale.bandwidth() / 2;
			        });
			    
			    //툴팁, 클릭 이벤트 설정
			    var dots = svg.selectAll("."+id+"-dot")
			    .on("click", function(d) {
		        	self.click(d);
		        })
		        .on('mouseover', function(d) {
			        tip.show(d);
			    })
			    .on('mouseout', function(d) {
			        tip.hide(d);
			    })

			    if(options.node) self.setObject(dots, options.node);
			        
			    nodes.exit().remove();
		        
			    //x, y축 스타일 설정
			    self.styleAxis(xscale, yscale, xaxis, yaxis);
			}

		}
	};
	var Table = function(){
		var self = this;
		this.type = "table";
		this.parseJson = function() {
			var json = this.options.data;
			
			if(typeof json == "string") {
				json = $.parseJSON(json);
			}
			var arrays = [];
			var keys = [];
			for(var key in json[0]) {
				keys.push(key);
			}
			arrays.push(keys);
			for(var i in json) {
				var arr = [];
				var d = json[i];
				for(var j in d) {
					arr.push(d[j]);
				}
				arrays.push(arr);
			}
			this.options.data = arrays;
		}
		this.draw = function() {
			var element = this.element;
			var options = this.options;
	    	var data = options.data;
			
			var width = options.width - options.margin.left - options.margin.right;
			var height = options.height - options.margin.top - options.margin.bottom;
			
			//테이블 태그 별 클래스 속성 설정
			var opt = {};
			opt.headerUse = options.headerUse;
			opt.headerWidth = options.headerWidth ? options.headerWidth : [30, 40, 30];
			opt.defaultCss = options.defaultCss ? options.defaultCss : true;
			opt.tableClass = options.tableClass ? options.tableClass : {};
			opt.tableClass.table = options.tableClass.table ? options.tableClass.table : "davif-table";
			opt.tableClass.tr = options.tableClass.table ? options.tableClass.tr : "davif-tr";
			opt.tableClass.tr_header = options.tableClass.table ? options.tableClass.tr_header : "davif-header-row";
			opt.tableClass.tr_row = options.tableClass.tr_row ? options.tableClass.tr_row : "davif-row";
			opt.tableClass.td = options.tableClass.td ? options.tableClass.td : "davif-cell";
			opt.tableClass.th = options.tableClass.th ? options.tableClass.th : "davif-header";
			
			var columnNames = d3.keys(data[0]);

			d3.select(element.selector).select("table").remove();
			
			function tabulate(data, columns) {
				//table 생성
	            var table = d3.select(element.selector).append("table")
	            .attr('class', opt.tableClass.table)
	        	.attr("width", width)
	        	.attr("height", height)
	        	.style("background-color", options.backgroundColor)
	        	.style("border-collapse", "collapse")
	        	.style("margin-top", options.margin.top+"px")
	        	.style("margin-bottom", options.margin.bottom+"px")
	        	.style("margin-left", options.margin.left+"px")
	        	.style("margin-right", options.margin.right+"px")
                
	        	thead = table.append("thead"),
                tbody = table.append("tbody");

	            //헤더 사용 시 thead 생성
	            if(opt.headerUse == true) {
	            	// 헤더 row 생성
	            	var header_row = thead.append("tr").attr('class', opt.tableClass.tr + " " +opt.tableClass.tr_header)
	            	.selectAll("th")
	            	.data(columns)
	            	.enter()
	            	.append("th")
	            	.attr('class', function(d) {
		            	return opt.tableClass.th+' ' + d;
		            })
		            .style("color", options.fontColor)
					.style("font-family", options.font)
					.style("font-size", options.fontSize+"px")
					.style("text-align", "center")
					.style("padding", "5px")
	            	.text(function(column) { return column; })
	            
	            	//각 컬럼 별 헤더 넓이 설정
	            	if(opt.headerWidth) {
			    		header_row.style("width", function(d, i) {
			    			return opt.headerWidth[i]+'%';
			    		})
		    		}
	            }

	            // create a row for each object in the data
	            var rows = tbody.selectAll('tr.'+opt.tableClass.tr_row)
                .data(data).enter().append("tr")
                .attr('class', opt.tableClass.tr + " " +opt.tableClass.tr_row)

	            // create a cell in each row for each column
	            var cells = rows.selectAll('td.'+opt.tableClass.td)
	                .data(function(row) {
                    	return columns.map(function(column) {
                    		return {column: column, value: row[column]};
                    	});
	                })
	                .enter().append("td")
	                .attr("class", opt.tableClass.td)
	                .style("color", options.fontColor)
					.style("text-anchor", "middle")
					.style("text-align", "center")
					.style("padding", "5px")
					.style("font-family", options.font)
					.style("font-size", options.fontSize+"px")
	                .html(function(d) { return d.value; });
	            
	            //테이블 스타일 설정
            	if(options.fontAlign == "end") {
            		options.fontAlign = "center";
            	}
            	table.selectAll('th')
            	.style("border-top", "3px solid #4062f7")
            	.style("border-bottom", "1px solid #bbb")
            	.style("border-left", "1px solid #d5d5d5")
            	.style("background-color", "#e2e2e2")
            	.style("color" , options.fontColor)
				.style("font-size", options.fontSize+"px")
				.style("font-family", options.font)
				.style("font-color", options.fontColor)
				.style("font-weight", "bold")
            	;
            	table.select('th')
            	.style("border-left", null)
            	;
            	
            	table.selectAll('td')
            	.style("border-bottom", "1px solid #d5d5d5")
            	.style("font-size", options.fontSize+"px")
				.style("font-family", options.font)
				.style("font-color", options.fontColor)
				.style("border-left", "1px solid #d5d5d5")
            	;
            	table.selectAll('td:first-child')
            	.style("border-left", "none")
            	;
            	table.selectAll('tr:nth-child(odd)')
            	.style("background-color", "#f7f7f7");
            	
            	if(opt.headerUse == false) {
            		table.selectAll('tr:first-child').style("border-top", "1px solid #d5d5d5");
            	}
            	
            	
	            self.setObject(table, options.table);
	            self.setObject(rows, options.rows);
	            self.setObject(cells, options.cells);
	            
	            return table;
	        }
	        // render the table
	        var peopleTable = tabulate(data, columnNames);
	    }
	};
	var Radar = function(){
		
		var self = this;
		this.type = "radar";
		
		this.sorted = function(data) {
			var sortedData = [];
			for(var i =0; i < data.length; i++) {
				var obj = data[i].data;
				var sum = 0;
				for(var j in obj) {
					var d = obj[j];
					sum += Number(d.value);
				}
				sortedData.push({name:obj[0].name, value:sum});
			}
			sortedData.sort(self.sort);
			var ret = [];
			for(var i in sortedData) {
				var d = sortedData[i];
				for(var j in data) {
					var obj = data[j];
					if(d.name == obj.name) {
						ret.push(obj);
						break;
					}
				}
			}
			return ret;
		}
		this.draw = function() {
			var id = this.element[0].id;
			var data = this.options.data;
			var config = this.config;
			var svg = this.svg;

			var options = this.options;
			var type = options.type,
			width = options.width,
			height = options.height,
			margin = options.margin;
			
			width = width - options.margin.left - options.margin.right;
			height = height - options.margin.bottom - options.margin.top;
			
			data = this.parser(data);
			data = this.sorted(data);
			
			options.axis = options.axis ? options.axis : {};
			//config 설정
			var HALF_PI = Math.PI / 2;
			var config = {
			    w: width, //Width of the circle
			    h: height, //Height of the circle
			    margin: margin, //The margins of the SVG
			    labelFactor: options.axis.labelFactor ? options.axis.labelFactor : 1.25, //How much farther than the radius of the outer circle should the labels be placed
			    wrapWidth: options.axis.wrapWidth ? options.axis.wrapWidth : 60, //The number of pixels after which a label needs to be given a new line
			    opacityArea: options.axis.opacityArea ? options.axis.opacityArea : 0.35, //The opacity of the area of the blob
			    dotRadius: options.axis.dotRadius ? options.axis.dotRadius : 4, //The size of the colored circles of each blog
			    opacityCircles: options.axis.opacityCircles ? options.axis.opacityCircles : 0.1, //The opacity of the circles of each blob
			    strokeWidth: options.axis.strokeWidth ? options.axis.strokeWidth : 2, //The width of the stroke around each blob
			    unit: options.axis.unit ? options.axis.unit : '건',
			    format: options.axis.format ? options.axis.format : '.0f',
			    levels: options.axis.levels ? options.axis.levels : 5,
			};

			var maxValue = 0;
			for (var j = 0; j < data.length; j++) {
			    for (var i = 0; i < data[j].data.length; i++) {
			        data[j].data[i]['id'] = data[j].name;
			        if (data[j].data[i]['value'] > maxValue) {
			            maxValue = data[j].data[i]['value'];
			        }
			    }
			}

			var allAxis = 	data[0].data.map(function(i, j) {
								return i.date; //Names of each axis
							});
			var total = allAxis.length, //The number of different axes
			    radius = (options.height / 2) - margin.bottom - margin.top - 80,
			    Format = d3.format(config.format), //Formatting
			    angleSlice = Math.PI * 2 / total; //The width in radians of each "slice"

			//Scale for the radius
			var rScale = d3.scaleLinear()
			    .range([0, radius])
			    .domain([0, maxValue]);

			var parent = d3.select(this.element.selector);
			parent.select("svg").remove();

			//Initiate the radar chart SVG
			var svg = parent.append("svg")
			    .attr("width", config.w + config.margin.left + config.margin.right)
			    .attr("height", config.h + config.margin.top + config.margin.bottom)
			    .attr("class", id + "-radar");

			//Append a g element
			var g = svg.append("g").attr("transform", "translate(" + (config.w / 2 + config.margin.left) + "," + (config.h / 2 + config.margin.top) + ")");

			//Wrapper for the grid & axes
			var axisGrid = g.append("g").attr("class", id + "-axisWrapper");

			//Draw the background circles
			axisGrid.selectAll("." +id + "-levels")
			    .data(d3.range(1, (config.levels + 1)).reverse())
			    .enter()
			    .append("circle")
			    .attr("class", id + "-gridCircle")
			    .attr("r", function(d) {
			    	return radius / config.levels * d;
			    })
			    .style("fill", "#CDCDCD")
			    .style("stroke", "#CDCDCD")
			    .style("fill-opacity", config.opacityCircles)

			//y축 텍스트 출력
			if(options.axis.label === true) {
				
				//Text indicating at what % each level is
				axisGrid.selectAll("." + id + "-axisLabel")
				    .data(d3.range(1, (config.levels + 1)).reverse())
				    .enter().append("text")
				    .attr("class", id + "-axisLabel")
				    .attr("x", 4)
				    .attr("y", function(d) {
				    	return -d * radius / config.levels;
				    })
				    .attr("dy", "0.4em")
				    .style("font-size", options.font.size+"px")
				    .attr("fill", "#737373")
				    .text(function(d) {
				    	return Format(maxValue * d / config.levels) + config.unit;
				    });
			}
			
			//x축 grid line 출력
			//Create the straight lines radiating outward from the center
			var axis = axisGrid.selectAll("." + id + "-axis")
			    .data(allAxis)
			    .enter()
			    .append("g")
			    .attr("class", id + "-axis");
			//Append the lines
			axis.append("line")
			    .attr("x1", 0)
			    .attr("y1", 0)
			    .attr("x2", function(d, i) {
			    	return rScale(maxValue * 1.1) * Math.cos(angleSlice * i - HALF_PI);
			    })
			    .attr("y2", function(d, i) {
			    	return rScale(maxValue * 1.1) * Math.sin(angleSlice * i - HALF_PI);
			    })
			    .attr("class", id + "-line")
			    .style("stroke", "#828282")
			    .style("stroke-width", "0.25px");

			//x축 텍스트 출력
			//Append the labels at each axis
			axis.append("text")
			    .attr("class", id + "-legend")
			    .style("font-size", options.font.size+"px")
			    .attr("text-anchor", "middle")
			    .attr("dy", "0.35em")
			    .attr("x", function(d, i) {
			    	return rScale(maxValue * config.labelFactor) * Math.cos(angleSlice * i - HALF_PI);
			    })
			    .attr("y", function(d, i) {
			    	return rScale(maxValue * config.labelFactor) * Math.sin(angleSlice * i - HALF_PI);
			    })
			    .text(function(d) {
			    	return d;
			    })
			    .call(this.wrap, config.wrapWidth);

			//데이터 라인 설정 
			//The radial line function
			options.line.type = options.line.type ? options.line.type : "cardinal-closed";
			var lineType = this.lineType(options.line.type); 
			var radarLine = d3.radialLine()
			    .curve(lineType)
			    .radius(function(d) {
			    	return rScale(d.value);
			    })
			    .angle(function(d, i) {
			    	return i * angleSlice;
			    });

			//Create a wrapper for the blobs
			var blobWrapper = g.selectAll("." + id + "-radarWrapper")
			    .data(data)
			    .enter().append("g")
			    .attr("class", id + "-radarWrapper");

			//데이터 라인 path 객체 생성
			//Append the backgrounds
			blobWrapper.append("path")
			    .attr("class", id + "-radarArea")
			    .attr("d", function(d) {
			    	return radarLine(d.data);
			    })
			    .style("fill", function(d, i) {
			    	if(d.color) {
			    		return d.color;
			    	}
			    	return options.color(d.name);
			    })
			    .style("fill-opacity", config.opacityArea)
			    .on('mouseover', function(d, i) {
			        parent.selectAll("." + id + "-radarArea").transition().duration(options.duration).style("fill-opacity", 0.1);
			        d3.select(this).transition().duration(200).style("fill-opacity", 0.7);
			    })
			    .on('mouseout', function() {
			        parent.selectAll("." + id + "-radarArea").transition().duration(options.duration).style("fill-opacity", config.opacityArea);
			    });

			//Create the outlines
			blobWrapper.append("path")
			    .attr("class", id + "-radarStroke")
			    .attr("d", function(d, i) {
			        return radarLine(d.data);
			    })
			    .style("stroke-width", config.strokeWidth + "px")
			    .style("stroke", function(d, i) {
			    	if(d.color) {
			    		return d.color;
			    	}
			    	return options.color(d.name);
			    })
			    .style("fill", "none")

			//데이터 라인 아이콘
			//Append the circles
			blobWrapper.selectAll("." + id+ "-radarCircle")
			    .data(function(d) {
			    	return d.data;
			    })
			    .enter()
			    .append("circle")
			    .attr("class", id + "-radarCircle")
			    .attr("r", config.dotRadius)
			    .attr("cx", function(d, i) {
			    	return rScale(d.value) * Math.cos(angleSlice * i - HALF_PI);
			    })
			    .attr("cy", function(d, i) {
			    	return rScale(d.value) * Math.sin(angleSlice * i - HALF_PI);
			    })
			    .style("fill", function(d, i) {
			    	if(d.color) {
			    		return d.color;
			    	}
			    	return options.color(d.name);
			    })
			    .style("fill-opacity", 0.8)

			//마우스 오버 툴팁 이벤트 설정을 위한 아이콘 wrapper
			//Wrapper for the invisible circles on top
			var blobCircleWrapper = g.selectAll("." + id + "-radarCircleWrapper")
			    .data(data)
			    .enter().append("g")
			    .attr("class", id + "-radarCircleWrapper");

			//마우스 오버 툴팁 이벤트 설정을 위한 아이콘 객체 생성
			//Append a set of invisible circles on top for the mouseover pop-up
			blobCircleWrapper.selectAll("." + id + "-radarInvisibleCircle")
			    .data(function(d) {
			    	return d.data;
			    })
			    .enter().append("circle")
			    .attr("class", id + "-radarInvisibleCircle")
			    .attr("r", config.dotRadius * 1.5)
			    .attr("cx", function(d, i) {
			    	return rScale(d.value) * Math.cos(angleSlice * i - HALF_PI);
			    })
			    .attr("cy", function(d, i) {
			    	return rScale(d.value) * Math.sin(angleSlice * i - HALF_PI);
			    })
			    .style("fill", "none")
			    .style("pointer-events", "all")
			    .on("mouseover", function(d, i) {
			        tooltip
			            .attr('x', this.cx.baseVal.value - 10)
			            .attr('y', this.cy.baseVal.value - 10)
			            .transition()
			            .style('display', 'block')
			            .text(Format(d.value) + config.unit);
			    })
			    .on("mouseout", function() {
			        tooltip.transition().duration(options.duration).style('display', 'none').text('');
			    });

			//텍트스 툴팁 객체 생성
			var tooltip = g.append("text")
			    .attr("class", id + "-tooltip")
			    .attr('x', 0)
			    .attr('y', 0)
			    .style("opacity", 1)
			    .style("font-size", "12px")
			    .style('display', 'none')
			    .attr("text-anchor", "middle")
			    .attr("dy", "0.35em");
		}
	};
	
	var TreeMap = function(){
		var self = this;
		this.type = "treemap";
		this.draw = function() {
			
			var id = this.element[0].id;
			var data = this.options.data;
			var svg = this.svg;

			var options = this.options;
			var type = options.type,
			    width = options.width,
			    height = options.height,
			    margin = options.margin;
			var config = this.config;

			width = width - options.margin.left - options.margin.right;
			height = height - options.margin.bottom - options.margin.top;
			var max = d3.max(data, function(d) {
			    return d.value
			});

			//valueRange값에 따라 colorRange 대조하여 컬러값 설정
			function colorCall(max, d) {
			    var valueRange = options.valueRange;
			    var percent = (d.value / max) * 100;
			    var color = '';
			    for (var i in valueRange) {
			        if (percent > valueRange[i] && percent <= valueRange[i - 1]) {
			            color = options.colorRange[i - 1];
			        }
			    }
			    d.color = color;

			    return color;
			}

			var format = d3.format(",d");

			//트리맵 설정
			var treemap = d3.treemap()
			    .tile(d3.treemapResquarify)
			    .size([width, height])
			    .round(true)
			    .paddingInner(1);

			draw(data);
			function draw(data) {
				svg.html("");
				if(data.length <= 0) return;
				data = { name: "tree", children: data };
				var root = d3.hierarchy(data, function(d) {
				        return d.children;
				    })
				    .sum(function(d) {
				        return d.value;
				    })
				    .sort(function(a, b) {
				        return b.data.value - a.data.value
				    });
	
				treemap(root);
	
				var cell = svg.selectAll("g")
				    .data(root.leaves())
				    .enter().append("g")
				    .attr("transform", function(d) {
				        return "translate(" + d.x0 + "," + d.y0 + ")";
				    });
	
				//rect 객체 생성
				var rect = cell.append("rect")
				    .attr("id", function(d) {
				        return id + "-node"
				    })
				    .attr("width", function(d) {
				        return d.x1 - d.x0;
				    })
				    .attr("height", function(d) {
				        return d.y1 - d.y0;
				    })
				    .style("fill", function(d) {
				    	//컬러값 : valueRange > data.color > data.category > options.color 우선순위로 설정 
				    	if (options.valueRange)
				            return colorCall(max, d.data);
				        else if (d.data.color)
				            return d.data.color;
				        else if (d.data.category)
				            return options.color(d.data.category);
				        return options.color(d.data.name);
				    })
				    .style("stroke-width", "3px")
				    .style("stroke", "#fff")
				    .on("mouseover", function(d, i) {
				    	//마우스 오버 시 삭제 버튼 출력 
				    	d3.select("#"+id+"-rmv-"+i).style("visibility", "visible")
				    	.attr("transform", function(d) {
							return "translate(" + (d.x1 - d.x0 - 15) + "," + 15 + ")";
						});
				    })
				    .on("mouseout", function() {
				    	removeBtn.style("visibility", "hidden");
				    })
				    
				self.setObject(rect, options.rect);
	
				//text 객체 생성 
				var text = cell.append("text")
				    .style("font-size", options.font.size+"px")
				    .style("fill", function(d) {
			    		if(typeof options.font.color == "function") {
			    			return options.font.color(d.data);
			    		}
				    	return options.font.color;
				    })
				    .attr("text-anchor", options.font.align)
					.attr("x", function (d) {
						//text위치 센터로 설정
			        	var xw = Number(d3.select(this.parentNode).select("rect").attr("width"));
			            return (xw / 2);
			        })
		            .attr("y", function (d) {
						//text위치 센터로 설정
			        	var xh = Number(d3.select(this.parentNode).select("rect").attr("height"));
		                return (xh) / 2;
		            })
				    //.style("opacity", options.font.opacity)
				    .text(function(d) {
				        return d.data.name;
				    });
	
				self.setObject(text, options.text);
	
				//노드 클릭 이벤트 설정
				if(options.click) {
					rect.style("cursor", "pointer")
					.on("click", function(d) {
						self.click(d);
					})
					text.style("cursor", "pointer")
					.on("click", function(d) {
				        self.click(d);
				    })
				}
				
				//title 객체 생성
				var title = cell.append("title").text(function(d) {
				    return d.data.name + "\n" + format(d.value);
				});
				self.setObject(title, options.title);
	
				//remove Btn
				var tmp = [];
		    	var size = 22;
		    	var r = size / 2;
	            var ofs = size / 3.5;
	            var x = 0, y = 0;
	            
	            //삭제 버튼 이벤트 설정
	            var removeBtn = cell.append("g")
	            .on("click", function(d, e, f, g) {
	            	var item = [];
					for(var i in data.children) {
						if(d.data.name == data.children[i].name) {
							continue;
						}
						item.push(data.children[i]);
					}
					draw(item);
					if(options.remove && options.remove.click) options.remove.click(d, item);
						  
																				  
				})
				.on("mouseover", function(d, i) {
					d3.select("#"+id+"-rmv-"+i).style("visibility", "visible");
				})
	            .style("visibility", "hidden").style("cursor", "pointer").attr("class", "btn_remove")
	            .attr("id", function(d, i) {
	            	return id + "-rmv-" + i;
	            })
	            
	            //삭제 버튼 아이콘 생성
		    	var circle = removeBtn.append("circle")
	                .attr("cx", x)
	                .attr("cy", y)
	                .attr("r", r)
	                .style("fill", "#fafafa")
	                .style("fill-opacity", .5)
	
	            var cross = removeBtn.append("g");
	            cross.append("line")
	                .attr("x1", x - r + ofs)
	                .attr("y1", y)
	                .attr("x2", x + r - ofs)
	                .attr("y2", y);
	
	            cross.append("line")
	                .attr("x1", x)
	                .attr("y1", y - r + ofs)
	                .attr("x2", x)
	                .attr("y2", y + r - ofs);
	
	            cross.style("stroke-width", 1.5).style("stroke", "#053759");
	            cross.attr("transform", "rotate (45," + x + "," + y + ")");
			}
		}
	};
	
	
	var BubbleForce = function(){
		var local = this;
		this.self = this;
		this.draw = function() {

			var id = this.element[0].id;
			var data = this.options.data;
			var config = this.config;
			var svg = this.svg;

			var options = this.options;
			var type = options.type,
			width = options.width,
			height = options.height,
			margin = options.margin;
			
			width = width - options.margin.left - options.margin.right;
			height = height - options.margin.bottom - options.margin.top;
			
			var clusters = {};
			
			//bubble force 모듈 import
			!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(n.d3=n.d3||{})}(self,function(n){"use strict";n.forceAttract=function(n){var t=void 0,e=void 0,o=void 0,r=void 0;function i(n){for(var o=void 0,i=void 0,f=void 0,u=0;u<t.length;u++)o=t[u],i=e[u],f=r[u],o.vx+=(i[0]-o.x)*f*n,o.vy+=(i[1]-o.y)*f*n}function f(){if(t){r=new Array(t.length);for(var i=0;i<t.length;i++)r[i]=o(t[i],i,t);e=new Array(t.length);for(var f=0;f<t.length;f++)e[f]=n(t[f],f,t)}}return i.initialize=function(n){t=n,f()},i.strength=function(n){return null==n?o:(o="function"==typeof n?n:function(){return+n},f(),i)},i.target=function(t){return null==t?n:(n="function"==typeof t?t:function(){return t},f(),i)},o||i.strength(.1),n||i.target([0,0]),i},Object.defineProperty(n,"__esModule",{value:!0})});
			!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(n.d3=n.d3||{})}(self,function(n){"use strict";n.forceCluster=function(n){var t=void 0,e=[],i=.1,o=0;function r(n){n*=i*n;var r=void 0,u=void 0,f=void 0,c=void 0,d=void 0;t.forEach(function(t,i){(r=e[i])&&r!==t&&(u=t.x-r.x,f=t.y-r.y,c=Math.sqrt(u*u+f*f),d=t.radius+(r.radius||0),c&&c!=d&&(c=(c-d)/c*n,t.x-=u*=c,t.y-=f*=c,r.x+=(1-o)*u,r.y+=(1-o)*f))})}function u(){if(t){var i=void 0,o=t.length;for(e=new Array(o),i=0;i<o;i++)e[i]=n(t[i],i,t)}}return"function"!=typeof n&&(n=function(){return n}),r.initialize=function(n){t=n,u()},r.centers=function(t){return null==t?n:(n="function"==typeof t?t:function(n,e){return t[e]},u(),r)},r.strength=function(n){return null==n?i:(i=+n,r)},r.centerInertia=function(n){return null==n?o:(o=+n,r)},r},Object.defineProperty(n,"__esModule",{value:!0})});
			  
			var data = this.options.data;

			var padding = options.node.padding ? options.node.padding : 0; // separation between same-color nodes
			var add = options.node.add ? Number(options.node.add) : 0;
			
			//노드 사이즈 설정
			var nodeRange = d3.scaleLinear().domain(d3.extent(data, function(d) { return +d.value;} )).range(options.node.range);
			var nodes = [];
			
			var max = d3.max(data, function(d) {
		        return d.value
		    });
			
			//최상위 노드 있는 경우 데이터 생성 
			var parents = [];
		    for(var i in data) {
		    	var d = data[i];
		    	if(!d.category) {
		    		data[i].value = max / 1.5;
		    		data[i].category = "top";
		    		parents.push(d.name);
		    	}
		    }
		    
			var map = d3.map();
			var map_i = 0;
			d3.map(data, function(d) {
				if(!map.has(d.category))
					map.set(d.category, map_i++);
			});
			
			
			//입력된 option.color값에 따라 value값 범위 자동 설정
			var domain = [], range = [];
			var colorRange = options.colorRange ? options.colorRange : options.color.range();
			
			//valueRange가 있는 경우 설정된 데이터로 컬러값 지정
			if(options.valueRagne) {
				domain = options.valueRagne;
				for(var i in colorRange) {
					range.push(Number(i));
				}
				range.push(colorRange.length-1);
			} else {
				//valueRange가 없는 경우 min, max값 계산하여 컬러값 설정
				var min = d3.min(data, function(d) {return d.value; });
				var max = d3.max(data, function(d) {return d.value; });
				domain = [min];
				var maxLevel = options.node.maxLevel ? options.node.maxLevel : colorRange.length;
				for (var i = 0; i < maxLevel; i++) {
					domain.push(domain[i] + (max / maxLevel));
					range.push(Number(i));
				}
				range.push(maxLevel-1);
			}
			var colorScale = d3.scaleLinear().domain(domain).range(range);
			
			//노드 설정
			var n = data.length, // total number of nodes
			    m = map.size(); // number of distinct clusters
			var nodes = d3.range(n).map(function (j) {
				var d = data[j];
				var i = map.get(d.category);
				var pr = options.node.top && options.node.top.r ? options.node.top.r : 40; 
				var r = d.category == "top" ? pr : nodeRange(d.value);
			    d.x = Math.cos(i / m * 2 * Math.PI) * 200 + width / 2 + Math.random(),
			    d.y = Math.sin(i / m * 2 * Math.PI) * 200 + height / 2 + Math.random();
			    d.cluster = i;
			    d.radius = r + add;
				if (!clusters[d.category] || (d.r < clusters[d.category].r)) clusters[d.category] = d;
				return d;
			});
			
			//animation 효과 tjfwjd
			var simulation = d3.forceSimulation()
			    .force('center', d3.forceCenter(width / 2, height / 2))
			    .force('attract', d3.forceAttract().target([width / 2, height / 2]).strength(0.01))
			    .force('cluster', d3.forceCluster().centers(function(d) {return clusters[d.cluster];}).strength(0.5).centerInertia(0.1))
			    .force('collide', d3.forceCollide(function(d) {
			            return d.radius + padding;
			        }).strength(0))
			    .on('tick', layoutTick)
			    .nodes(nodes);
	
			var svg = this.svg.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
			var g = svg.selectAll("g")
	        .data(nodes)
	        .enter().append("g");
			
			//노드 객체 생성
			var node = g.append('circle')
			.attr("id", function(d) {
				if (d.category == "top") {
	                return id + "-bubble-top";
	            }
			})
		    .style('fill', function(d) {
		    	//최샹위 노드 
		    	if (d.category == "top") {
	                return "#fff";
	            }
		    	d.level = Math.floor(colorScale(d.value));
	            if(options.colorRange) {
	            	return colorRange[d.level];
	            }
	            if (d.color) {
	            	return d.color;
	            }
		        return options.color(d.name);
		    })
		    .style("stroke", function(d) {
	        	if (d.category == "top")
	                return "#44404b";
	        })
	        .style("stroke-width", function(d) {
	        	if (d.category == "top")
	                return "5px";
	        })
	        .on("click", function(d) {
	        	if(options.click) {
					local.click(d);
				}
	        })
	        .style("cursor", "pointer")
		    .call(d3.drag()
		        .on('start', dragstarted)
		        .on('drag', dragged)
		        .on('end', dragended)
		    );
			this.setObject(node, options.node);
			
			var topNode = d3.select("#" + id + "-bubble-top");
			if(options.node.top) this.setObject(topNode, options.node.top);
			
			
			/*
			node.transition()
	        .duration(750)
	        .attrTween("r", function(d) {
	            var i = d3.interpolate(0, d.radius);
	            return function(t) {
	                return d.radius = i(t);
	            };
	        });
			*/
			function dragstarted(d) {
			    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
			    d.fx = d.x;
			    d.fy = d.y;
			}
	
			function dragged(d) {
			    d.fx = d3.event.x;
			    d.fy = d3.event.y;
			}
	
			function dragended(d) {
			    if (!d3.event.active) simulation.alphaTarget(0);
			    d.fx = null;
			    d.fy = null;
			}
	
			//텍스트 객체 생성
			var textSize = options.text.size ? options.text.size : 1;
			var text = g.append("text")
			.attr("transform",  function(d) {
				var ty = ( d.radius) / 10 ;
		    	return "translate(0,"+ty+")"; 
		    })
	        .text(function(d) {
	        	if(options.text.ellipsis && d.radius < options.text.ellipsis.radius && d.name.length > options.text.ellipsis.limit) {
					return (d.name).substr(0, options.text.ellipsis.limit) + options.text.ellipsis.suffix;
				}
	            return d.name;
	        })
	        .style("text-anchor", "middle")
	        .style("fill", function(d) {
	        	if(d.category == 'top') {
	        		return "#000";
	        	}
	        	var fontColor = typeof options.font.color === "function" ? options.font.color(d) : options.font.color;
	        	return fontColor;
	        })
	        .style("font-family", options.font.name)
	        .style("font-size", function(d) { 
	        	if ((d.radius * 2) <= d3.select(this).node().getComputedTextLength()) {
	                d.fs = Math.min(2 * d.radius , (2 * d.radius) / this.getComputedTextLength() * 10); 
	            } else {
	            	d.fs = d.radius/4;
	        	}
	        	d.fs += + textSize;
	        	return d.fs + "px";
	        })
	        .style("fill-opacity", function(d, i) {
	        	if(d.category == 'top') {
	        		d3.select(this).style("opacity", 1);		        		
	        	} else if ((d.r * 2) <= d3.select(this).node().getComputedTextLength()) {
	                d3.select(this).style("opacity", 0);
	            } else {
	                d3.select(this).style("opacity", 1);
	            }
	        })
	        .style("cursor", "pointer")
	        .on("click", function(d) {
	        	if(options.click) 
					local.click(d);
	        });
	        
			this.setObject(text, options.text);
			
	        node.append("title").text(function(d) {
				if(d.category == "top") {
					return d.name;
				}
				return d.name + " : " + local.digits(d.value) + "건";
			})

			text.append("title").text(function(d) {
				if(d.category == "top") {
					return d.name;
				}
				return d.name + " : " + local.digits(d.value) + "건";
			})
			
			//노드 삭제 기능
			if(!options.node.remove || options.node.remove.use != false) {
				//remove Btn
				var tmp = [];
		    	var size = 22;
		    	var r = size / 2;
	            var ofs = size / 3.5;
	            var x = 0, y = 0;
	            
	            var removeBtn = g.append("g")
	            .on("click", function(d, e, f, g) {
	            	var tmp = [];
					for(var i in data) {
						if(d.name == data[i].name) {
							continue;
						}
						tmp.push(data[i]);
					}
					options.data = tmp;
					$("#"+id).visualization(options);
	            	
	            	if(options.remove && options.remove.click) options.remove.click(d);
				})
				.on("mouseover", function(d, i) {
					d3.select("#"+id+"-rmv-"+i).style("visibility", "visible");
				})
	            .style("visibility", "hidden")
	            .style("cursor", "pointer").attr("class", "btn_remove")
	            .attr("id", function(d, i) {
	            	return id + "-rmv-" + i;
	            })
	            
	            //삭제 아이콘
		    	var circle = removeBtn.append("circle")
	                .attr("cx", x)
	                .attr("cy", y)
	                .attr("r", r)
	                .style("fill", "#fafafa")
	                .style("fill-opacity", .5)
	
	            var cross = removeBtn.append("g");
	            cross.append("line")
	                .attr("x1", x - r + ofs)
	                .attr("y1", y)
	                .attr("x2", x + r - ofs)
	                .attr("y2", y);
	
	            cross.append("line")
	                .attr("x1", x)
	                .attr("y1", y - r + ofs)
	                .attr("x2", x)
	                .attr("y2", y + r - ofs);
	
	            cross.style("stroke-width", 1.5).style("stroke", "#053759");
	            cross.attr("transform", "rotate (45," + x + "," + y + ")");
	            
	            var mouseover = function(d) {
					if(d.category == "top") return;
					d3.select(this).select(".btn_remove").style("visibility", "visible")
					.attr("transform", function() {
						var c = d3.select(this.parentNode).select("circle");
						var tx = Number(c.attr("cx")) + (Number(c.attr("r") / 1.5));
						var ty = Number(c.attr("cy")) - Number(c.attr("r") / 1.1);
						return "translate(" + tx + "," + ty + ")";
					});
				};
				var mouseout = function() {
					removeBtn.style("visibility", "hidden");
				}
				g.on("mouseover", mouseover).on("mousemove", mouseover)
				.on("mouseout", mouseout).on("mouseleave", mouseout);
			}
	        
			// ramp up collision strength to provide smooth transition
			var transitionTime = 150;
			var t = d3.timer(function(elapsed) {
			    var dt = elapsed / transitionTime;
			    simulation.force('collide').strength(Math.pow(dt, 2) * 0.5);
			    if (dt >= 1.0) t.stop();
			});
	
			function layoutTick(e) {
			    node.attr('cx', function(d) {
			    	return d.x = Math.max(d.radius, Math.min(width - d.radius, d.x));
		        })
		        .attr('cy', function(d) {
		        	return d.y = Math.max(d.radius, Math.min(height - d.radius, d.y));
		        })
		        .attr('r', function(d) {
		            return d.radius;
		        });
			    text.attr('x', function(d) {
			    	return d.x = Math.max(d.radius, Math.min(width - d.radius, d.x));
			    })
			    .attr('y', function(d) {
			    	return d.y = Math.max(d.radius, Math.min(height - d.radius, d.y));
			    })
			}
		}
	};

	var Bubble = function(){
		var local = this;
		this.self = this;
		this.draw = function() {
			var id = this.element[0].id;
			var data = this.options.data;
			var config = this.config;
			var svg = this.svg;

			var options = this.options;
			var type = options.type,
			width = options.width,
			height = options.height,
			margin = options.margin;
			
			width = width - options.margin.left - options.margin.right;
			height = height - options.margin.bottom - options.margin.top;
			
			//노드 반지름 범위 설정
	        var r = d3.scaleLinear().domain(d3.extent(data, function(d) { return +d.value;} )).range(options.node.range ? options.node.range : [1, 20]);
	        //노드 추가 크기
	        options.node.add = options.node.add ? Number(options.node.add) : 0;
	        //노드 간 여백
	        options.node.padding = options.node.padding ? Number(options.node.padding) : 0;

			var dataset = {
	            "children": data
	        };

	        var bubble = d3.pack(dataset)
	            .size([width, height])
	            .padding(options.node.padding + options.node.add);

	        var svg = this.svg;

	        var nodes = d3.hierarchy(dataset)
	        .sum(function(d) { 
	        	return d.value; 
	        });

	        //노드 생성
	        var node = svg.selectAll(".node")
	            .data(bubble(nodes).descendants())
	            .enter()
	            .filter(function(d){
	                return  !d.children
	            })
	            .append("g")
	            .attr("class", "node")
	            .attr("transform", function(d) {
	                return "translate(" + d.x + "," + d.y + ")";
	            })
	            
	        if(options.click) {
	        	node.attr("cursor", "pointer")
	        	.on("click", function(d) {
	        		options.click(d);
	        	})
	        }

	        node.append("title")
            .text(function(d) {
                return d.data.name + " : " + d.data.value;
            });

	        node.append("circle")
	            .attr("r", function(d) {
	                return d.r + options.node.add;
	            })
	            .style("fill", function(d,i) {
	            	if(d.data.category)
	            		return options.color(d.data.category);
	                return options.color(d.data.name);
	            });
	        
	        //텍스트 생성
	        node.append("text")
	            .attr("dy", ".2em")
	            .style("text-anchor", "middle")
	            .text(function(d) {
	            	var name = d.data.name;
		        	if(options.text.ellipsis && name.length > options.text.ellipsis.limit) {
						return (name).substr(0, options.text.ellipsis.limit) + options.text.ellipsis.suffix;
					}
		            return name;
		        })
	            .attr("font-size", function(d){
	                return ((d.r+ options.node.add)/5 + options.text.size) + "px";
	            })
	            .attr("fill", options.font.color ? options.font.color : "white");
	        
	        //value값 text 생성
	        if(options.value && options.value.show) {
	        	var valueText = node.append("text")
	        	.attr("dy", "1.3em")
	        	.style("text-anchor", "middle")
	        	.text(function(d) {
	        		return d.data.value;
	        	})
	        	.attr("font-size", function(d){
	        		return ((d.r+ options.node.add)/5 + options.text.size) + "px";
	        	})
	        	.attr("fill", options.font.color ? options.font.color : "white");
	        	
	        	if(options.value) this.setObject(valueText, options.value);
	        }
			
		}
	}

	var Heatmap = function(){
		var self = this;
		this.type = "heatmap";
		
		this.draw = function() {
			var id = this.element[0].id;
		    var options = this.options;
		    var margin = options.margin;
		    var width = options.width - options.margin.left - options.margin.right;
		    var height = options.height - options.margin.bottom - options.margin.top;
		    
		    if(options.legend.use) height = height - 35;
		   

		    var data = options.data;

		    var days = options.axis && options.axis.name ? options.axis.name : ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
				times = d3.range(24);

		    //width, height에 맞춰서 x, y축에 출력할 rect 사이즈 설정  
		    var gridSize = Math.floor(width / times.length);
		    var daysSize = Math.floor(height / days.length);
			//SVG container
			var svg = this.svg.attr("transform", "translate(" + margin.left + "," + (Number(margin.top)) + ")");
			
			//입력된 option.color값에 따라 value값 범위 자동 설정
			var domain = [], range = [];
			var color = options.colorRange;
			
			//valueRange가 있는 경우 설정된 데이터로 컬러값 지정
			if(options.valueRagne) {
				domain = options.valueRagne;
				for(var i in color) {
					range.push(Number(i));
				}
				range.push(color.length-1);
			} else {
				//valueRange가 없는 경우 min, max값 계산하여 컬러값 설정
				var min = d3.min(data, function(d) {return d.value; });
				var max = d3.max(data, function(d) {return d.value; });
				domain = [min];
				for(var i in color) {
					domain.push(domain[i] + (max / color.length));
					range.push(Number(i));
				}
				range.push(color.length-1);
			}

			var colorScale = d3.scaleLinear().domain(domain).range(range);
			//y축 요일별 텍스트 객체 생성
			var dayLabels = svg.selectAll("." + id + "-dayLabel")
			    .data(days)
			    .enter().append("text")
			    .text(function (d) { return d; })
			    .attr("x", 0)
			    .attr("y", function (d, i) { return i * daysSize; })
			    .style("text-anchor", "end")
		    	.style("font-family", this.options.font)
			    .attr("transform", "translate(-6," + daysSize / 1.5 + ")")
			    .attr("class", function (d, i) { return ((i >= 0 && i <= 4) ? "dayLabel mono axis axis-workweek" : "dayLabel mono axis"); });
			if(options.text) self.setObject(dayLabels, options.text);
    		
			//24시간형식으로 입력된 데이터 12시간 형식으로 변환
			function convertTime24to12(time24) {
			    var time12;
			    if (time24 == 12) {
			        time12 = time24 + 'pm';
			    } else {
			        if (time24 == 00) {
			            time12 = '0am';
			        } else {
			            if (time24 > 12) {
			                time12 = (time24 - 12);
			            } else {
			                time12 = time24 ;
			            }
			        }
			    }
			    return time12;
			}
			
			//x축 시간별 텍스트 객체 생성
			var timeLabels = svg.selectAll(".timeLabel")
			    .data(times)
			    .enter().append("text")
			    .text(function(d) { d = convertTime24to12(d); return d; })
			    .attr("x", function(d, i) { return i * gridSize; })
			    .attr("y", 0)
		    	.style("font-family", this.options.font)
			    .style("text-anchor", "middle")
			    .attr("transform", "translate(" + gridSize / 2 + ", -6)")
			    .attr("class", function(d, i) { return ((i >= 8 && i <= 17) ? "timeLabel mono axis axis-worktime" : "timeLabel mono axis"); });
			if(options.text) self.setObject(timeLabels, options.text);
    		
			//heatmap rect 객체 생성
			var heatMap = svg.selectAll(".hour")
			    .data(data)
			    .enter().append("rect")
			    .attr("x", function(d) { return (d.hour - 1) * gridSize; })
			    .attr("y", function(d) { return (d.day - 1) * daysSize; })
			    .attr("class", id + "-hour")
			    .attr("width", gridSize)
			    .attr("height", daysSize)
			    .style("stroke", "white")
			    .style("stroke-opacity", 0.6)
			    .style("fill", function(d) {
			    	if(d.color) {}
			    	else d.color = color[Math.floor(colorScale(d.value))];
			    	return d.color;
			    })
			    .on("click", function(d) {
	            	self.click(d);
	            });
			if(options.rect) self.setObject(d3.selectAll("."+ id + "-hour"), options.rect);
			
			if(options.getRange) {
				options.getRange(domain, color);
			}
			
			//title 객체 생성
			options.text.suffix = options.text.suffix ? options.text.suffix : "";
			heatMap.append("title").text(function(d) { return d.value + options.text.suffix; })
			
		}
	}
	
	var HierarchyTree = function(){
		var self = this;
		this.type = "hierarchy_tree";
		
		this.draw = function() {
			var id = this.element[0].id;
		    var options = this.options;
		    var margin = options.margin;
		    var width = options.width - options.margin.left - options.margin.right;
		    var height = options.height - options.margin.bottom - options.margin.top;
		    var color = options.color;

		    var data = this.parseHierarchyJson();

		    var barHeight = options.node.interval ? options.node.interval : 20,
		        barWidth = (width - margin.left - margin.right) * 0.15;

		    var i = 0, root;

		    var diagonal = d3.linkHorizontal()
		        .x(function(d) {
		            return d.y;
		        })
		        .y(function(d, i) {
		            return d.x;
		        });

		    var svg = this.svg.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		    root = d3.hierarchy(data);
		    root.x0 = 0;
		    root.y0 = 0;
		    
		    if(options.collapse.open === false) {
		    	childrenOpen(root);
			    function childrenOpen(data) {
			    	for(var i in data.children) {
				    	var d = data.children[i];
				    	if(d.children) {
				    		childrenOpen(d);
			    			d._children = d.children;
			    			d.children = null;
				    	}
				    }
			    }
		    }

		    update(root);


		    function update(source) {
		    	
		    	// Compute the flattened node list.
		        var nodes = root.descendants();

		        var height = Math.max(options.height, nodes.length * barHeight + margin.top + margin.bottom);

		        d3.select("#"+id).transition().duration(options.duration).attr("height", height);
		        d3.select("#"+id).select("svg").transition().duration(options.duration).attr("height", height);

		        // Compute the "layout". TODO https://github.com/d3/d3-hierarchy/issues/67
		        var index = -1;
		        var array = [];
		        var before = null;
		        root.eachBefore(function(n) {
		            if (before) {
		                if (before.depth == n.depth) {
		                    index++;
		                } else if (before.depth > n.depth) {
		                    index = index + 2;
		                }
		            }
		            n.id = n.id || (n.id = ++i);
		            n.x = index * barHeight;
		            n.y = n.depth > 0 ? n.depth * options.depthLength[n.depth-1] : 0;
		            before = n;
		        });
		        
		        // Update the links…
		        var link = svg
		        	//.attr('transform', "translate("+barWidth+",0)")
		        	.selectAll(".link")
		            .data(root.links(), function(d) {
		                return d.target.id;
		            });

		        // Enter any new links at the parent's previous position.
		        var linkg = link.enter().insert("path", "g")
		            .attr("class", "link")
		            .style("fill", "none")
		            .style("stroke", "#9ecae1")
		            .style("stroke-width", 1.5)
		            .attr("d", function(d, i) {
		                var o = {
		                    x: source.x0,
		                    y: source.y0
		                };
		                return diagonal({
		                    source: o,
		                    target: o
		                });
		            })
		            .transition()
		            .duration(options.duration)
		            .attr("d", diagonal);

		        if(options.link) self.setObject(linkg, options.link);
		        
		        // Transition links to their new position.
		        link.transition()
		            .duration(options.duration)
		            .attr("d", diagonal);
		        
		        // Transition exiting nodes to the parent's new position.
		        link.exit().transition()
		            .duration(options.duration)
		            .attr("d", function(d, i) {
		                var o = {
		                    x: source.x,
		                    y: source.y
		                };
		                return diagonal({
		                    source: o,
		                    target: o
		                });
		            }).remove();

		        // Update the nodes…
		        var node = svg.selectAll(".node")
		            .data(nodes, function(d) {
							 
		                return d.id || (d.id = ++i);
		            });

		        var nodeEnter = node.enter().append("g")
		            .attr("class", "node")
		            .attr("transform", function(d) {
		            	return "translate(" + (source.y0) + "," + (source.x0) + ")";
		            })
		            .style("opacity", 0);

		        function parentSetObject(obj, type) {
		        	for(var key in options.parent[obj].style) {
		        		d3.selectAll("."+id + "-htree-parent-"+obj).style(key, function(d) {
		        			return options.parent[obj].style[key];
		        		})
		        	}
	        		for(var key in options.parent[obj].attr) {
	        			d3.selectAll("."+id + "-htree-parent-"+obj).attr(key, function(d) {
		        			return options.parent[obj].attr[key];
		        		})
		        	}
	        	}
		        
		        // Enter any new nodes at the parent's previous position.
		        var rect = nodeEnter.append("rect")
		        	.attr("class", function(d) {
		        		if(d.parent) return id + "-htree-rect";
		        		else return id + "-htree-parent-rect";
		        	})
		            .attr("y", -barHeight / 2)
		            .attr("height", barHeight)
		            .attr("width", barWidth)
		            .style("fill", function(d) {
		            	return d._children ? "#aec7e8" : "#fff" ;
		            })
		            .style("fill-opacity", 1)
		            .style("stroke", "#3182bd")
		            .style("stroke-width", 1.5)
		            .style("cursor", "pointer")
		            .on("click", click);
		       
		        if(options.rect) self.setObject(rect, options.rect);
		        if(options.parent.rect) parentSetObject("rect");

		        var text = nodeEnter.append("text")
		        	.attr("class", function(d) {
		        		if(d.parent) return id + "-htree-text";
		        		else return id + "-htree-parent-text";
		        	})
		            .attr("y", 0)
		            .attr("x", barWidth/2)
		            .attr("dy", ".35em")
		            .style("text-anchor", "middle")
		            .style("cursor", "pointer")
		            .attr("data-value", function(d) {
		                return d.data.name;
		            })
		            .text(function(d) {
		                return d.data.name;
		            })
		            .on("click", click);
		        
		        if(options.text) self.setObject(text, options.text);
		        
		        if(options.parent.text) {
		            d3.selectAll("."+id + "-htree-parent-text").attr("y", function(d) {
			        	if(d.parent) return;
		            	var h = d3.select(this.parentNode).select("rect").attr("height") - 20;
		            	var fs = Number(options.parent.text.style['font-size'].replace("px", ""));
		            	return h / 2 - fs;
		            })
		            parentSetObject("text");
		        }
		        
		        setTitle(rect);
		        setTitle(text);
		        function setTitle(obj) {
		        	obj.append("title").text(function(d) {
		        		return options.node.title ? options.node.title(d) : d.data.value ? d.data.name + " : " + self.digits(d.data.value) + "건" : d.data.name; 
		        	});
		        }
		        
		        // Transition nodes to their new position.
		        nodeEnter.transition()
		            .duration(options.duration)
		            .attr("transform", function(d, i) {
		            	if(d.y == 0) return "translate(" + d.y + "," + d.x + ")";
		                return "translate(" + d.y + "," + d.x + ")";
		            })
		            .style("opacity", 1);

		        node.transition()
		            .duration(options.duration)
		            .attr("transform", function(d, i) {
		                return "translate(" + d.y + "," + d.x + ")";
		            })
		            .style("opacity", 1)
		            .select("rect")
		            .style("fill", function(d) {
		            	if(d.parent && options.rect.style.fill) return options.rect.style.fill(d);
		            	else if(!d.parent && options.parent.rect.style.fill) return options.parent.rect.style.fill;
		            	else return d._children ? "#aec7e8" : "#fff" ;
		            })
		            .style("stroke", function(d) {
		            	if(!d.parent) return;
		            	if(options.rect.style.stroke) return options.rect.style.stroke(d);
		            	else return "#3182bd";
		            })

		        
		        // Transition exiting nodes to the parent's new position.
		        node.exit().transition()
		            .duration(options.duration)
		            .attr("transform", function(d) {
		                return "translate(" + source.y + "," + source.x + ")";
		            })
		            .style("opacity", 0)
		            .remove();
		        
		        // Stash the old positions for transition.
		        root.each(function(d, i) {
		            d.x0 = d.x;
		            d.y0 = d.y;
		        });
		    }

		    // Toggle children on click.
		    function click(d) {
		    	if(d.depth == 0 || (options.node.limitLevel && (d.depth >= options.node.limitLevel))) {
		    		if(options.click) {
    					self.click(d);
    				}
		    		return;
		    	}
		        if (d.children && d.children.length > 0) {
		            d._children = d.children;
		            d.children = null;
		            update(d);
			        if(options.click) {
						self.click(d);
					}
		        } else {
		        	if(options.collapse.data && options.collapse.data.conditions) {
		        		var textNode = d3.select(this.parentNode).select("text"); 
		        		var loadX = Number(textNode.attr("x")) + Number(textNode.node().getComputedTextLength());
		        		var loadY = textNode.attr("y");
		        		if(options.collapse.loading.src) {
		        			var loading = d3.select(this.parentNode).append("image")
		        			.attr("id", id + "-" + d.data.id + "-loading")
		        			.attr('width', 20)
		        			.attr("x", loadX).attr("y", -20)
		        			.attr("xlink:href", options.collapse.loading.src);

		        			self.setObject(loading, options.collapse.loading);
		        		}
		        		
			    		self.collapse(d, update);
	            	} else {
	            		d.children = d._children;
	            		d._children = null;
	            		update(d);
	    		        if(options.click) {
	    					self.click(d);
	    				}
	            	}
		        }
		    }
		}
		
	}

	var UpdateBar = function(){
		var self = this;
		this.type = "update_bar";
		
		this.draw = function() {
			var id = this.element[0].id;
			var options = this.options;
			var margin = options.margin;
			var type = options.type,
			data = options.data,
			width = options.width - margin.left - margin.right,
			height = options.height - margin.top - margin.bottom;

			//데이터 전처리
			var entries = {};
			data = data.reduce(function(accumulator, d, i) {
				if (!(d.value).isInteger()) {
					d.value = Number(d.value);
				}
				if(entries[d.date]) {
					entries[d.date].push(d);
				} else {
					entries[d.date] = [d];
				}
				return entries;
			});

			//x축 key list (date list)
			var xList = Object.keys(data).map(function(d) {
				return d;
			});
			var lastX = xList[xList.length - 1];
			var startX = xList[0];
			var sorted = options.rect && options.rect.sort === false ? data[startX] : sortData(data[startX]);
			var selectedData = sorted;
			var yDomain= selectedData.map(yAccessor);
			//var percentFormat = d3.format('.0%');
			var leftPadding = 5;
			
			var delay = function(d, i) {
				return i * 40;
			};
			
			function sortData(data) {
				return data.sort(function(a, b) {
					return b.value - a.value;
				});
			}
			
			function removeyDomainWithNoData(data) {
				return data.filter(function(d) {
					return d.value;
				});
			}
			
			function xAccessor(d) {
				return d.value;
			}
			
			function yAccessor(d) {
				return d.name;
			}
			
			//x, y축 설정
			var xScale = d3.scaleLinear()
				.range([0, width])
				.domain([0, d3.max(data[startX], function(d) {
					return d.value;
				})]);
			
			var yScale = d3.scaleBand()
				.rangeRound([0, height], 0.1)
				.padding(0.1);
			
			function drawXAxis(el, data, t) {
				var max = d3.max(data, function(d) {
					return d.value;
				});
				xScale.domain([0, max]);

				var axis = el.select('.axis--x');
				if (axis.empty()) {
					axis = el.append('g').attr('class', 'axis axis--x');
				}

				axis.transition(t)
					.attr('transform', 'translate('+leftPadding+','+height+')')
					.call(d3.axisBottom(xScale));
				
				axis.select("path").style("display", "none");
					//.call(d3.axisBottom(xScale).tickFormat(percentFormat));
			}
			
			function drawYAxis(el, data, t) {
				
				var axis = el.select('.axis--y');
				if (axis.empty()) {
					axis = el.append('g').attr('class', 'axis axis--y');
				}
				axis.transition(t)
					.call(d3.axisLeft(yScale))
					.selectAll('g')
					.delay(delay);
				
				axis.select("path").style("display", "none");
			}
			
			//horizontal bar 생성
			function drawBars(el, data, t) {
						
				var barsG = el.select('.bars-g');
				if (barsG.empty()) {
					barsG = el.append('g').attr('class', 'bars-g');
				}
			
				var bars = barsG.selectAll('.bar').data(data, yAccessor);
				var text = barsG.selectAll('text').data(data, yAccessor);

				
				bars.exit().remove();
				text.exit().remove();

				//rect bar 생성
				var rect = bars.enter()
					.append('rect')
					.attr('class', "bar")
					.attr('x', leftPadding)
					.style("fill-opacity", 0)
		  
					.merge(bars).transition(t)
					.style("fill-opacity", .9)
					.style("fill", function(d) {
						if(d.color) return d.color;
						else if(d.category) return options.color(d.category);
						else if(options.color) return options.color(d.name);
						return "#3182bd";
					})
					.attr('y', function(d) {
						return yScale(yAccessor(d));
					})
					.attr('width', function(d) {
						return xScale(xAccessor(d));
					})
					.attr('height', yScale.bandwidth())
					.delay(delay);

				if(options.rect) self.setObject(rect, options.rect);
				
				//bar 옆 텍스트 생성
				var rectText = text.enter()
					.append('text')
					.attr('class', "bar-text")
					.style("fill", "#777")
					.style("font-weight", "bold")
					.style("font-size", "12px")
					.merge(text).transition(t)
					.attr("text-anchor", "start")
					.attr('x', function(d) {
						return xScale(xAccessor(d)) + 10;
					})
					.attr('y', function(d) {
						return yScale(yAccessor(d)) + (yScale.bandwidth()/2);
					})
					.tween("text", function(d) {
						var that = d3.select(this)
				        var content = that.text();
				        var i = d3.interpolateRound(content, d.value);  
				        return function( t ) {
				        	that.text(i(t))
				        };
					})
					.delay(delay);
				
				if(options.text) self.setObject(rectText, options.text);
				
			}
			
			//axis 내 현재 출력되고 있는 데이터 텍스트 출력
			function drawTitle(el, data, t) {
				var title = el.append("text")
				.attr("transform", "translate("+width/1.4+"," + (height/1.05) + ")")
			    .attr("class", id+"-bar-date")
		        .attr("dy", ".1em")
		        .attr("dx", "-3em")
			    .style("opacity", 0.5)
			    .style("fill", "#b1b1b1")
			    .text(function(d) {
					return data[0].date;
				});
				
				if(options.date) self.setObject(title, options.date);
			}

			//날짜 데이터 변경 시 호출
			function updateTitle(el, data, t) {
				el.select("." + id + "-bar-date")
				.transition(t)
				.attr("opacity", 0.5)
				.text(function(d) {
					return data[0].date;
				});
			}
			
			var svg = this.svg.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
			
			yScale.domain(yDomain);
			drawXAxis(svg, selectedData);
			drawYAxis(svg, selectedData);
			drawBars(svg, selectedData);
			drawTitle(svg, selectedData);
			
			options.rotation = options.rotation == undefined ? false : options.rotation;
			options.interval = options.interval == undefined ? 1000 : options.interval;
			
			//interval 간격으로 데이터 업데이트하여 draw
			var index = 1;
			var interval = d3.interval(function() {
				var t = d3.transition().duration(options.duration);
			
				var indexX = xList[index++];
				var sorted = options.rect && options.rect.sort === false ? data[indexX] : sortData(data[indexX]);
				selectedData = sorted;
			
				yScale.domain(selectedData.map(yAccessor));
				drawXAxis(svg, selectedData, t);
				drawYAxis(svg, selectedData, t);
				drawBars(svg, selectedData, t);
				updateTitle(svg, selectedData, t);
			
				//마지막 데이터인 경우 멈춤
				if (indexX === lastX) {
					if(options.rotation) index = 1;
					else interval.stop();
				}
			}, options.interval); 

		}
	}
	
	
	var HorizontalBar = function(){
		var self = this;
		this.type = "horizontal_bar";
		
		this.draw = function() {
			
			var options = this.options;
			var margin = options.margin;
			var type = options.type,
			data = options.data,
			width = options.width - margin.left - margin.right,
			height = options.height - margin.top - margin.bottom;

			//x, y축 도메인 설정
			var yDomain= data.map(yAccessor);

			//var percentFormat = d3.format('.0%');
			var leftPadding = 5;
			
			var delay = function(d, i) {
				return i * 40;
			};
			
			function removeyDomainWithNoData(data) {
				return data.filter(function(d) {
					return d.value;
				});
			}
			
			function xAccessor(d) {
				return d.value;
			}
			
			function yAccessor(d) {
				return d.name;
			}
			
			var xScale = d3.scaleLinear()
				.range([0, width])
				.domain([0, d3.max(data, function(d) {
					return d.value;
				})]);
			
			var yScale = d3.scaleBand()
				.rangeRound([0, height], 0.1)
				.padding(0.1);
			
			//x축 axis draw (공통 drawAxis 사옹하지 않음)
			function drawXAxis(el, data, t) {
				var max = d3.max(data, function(d) {
					return d.value;
				});
				xScale.domain([0, max]);

				var axis = el.select('.axis--x');
				if (axis.empty()) {
					axis = el.append('g').attr('class', 'axis axis--x');
				}

				if(options.x && options.x.gridUse === false) {
					axis.style("display", "none");
				}
				
				axis.transition(t)
					.attr('transform', 'translate('+leftPadding+','+height+')')
					.call(d3.axisBottom(xScale));
					//.call(d3.axisBottom(xScale).tickFormat(percentFormat));
			}
			
			//y축 axis draw
			function drawYAxis(el, data, t) {
				
				var axis = el.select('.axis--y');
				if (axis.empty()) {
					axis = el.append('g').attr('class', 'axis axis--y');
				}
				axis.transition(t)
					.call(d3.axisLeft(yScale))
					.selectAll('g')
					.delay(delay);
				
				axis.select("path").style("display", "none");
			}
			
			//bar 막대 그래프 draw
			function drawBars(el, data, t) {
						
				var barsG = el.select('.bars-g');
				if (barsG.empty()) {
					barsG = el.append('g').attr('class', 'bars-g');
				}
			
				var bars = barsG.selectAll('.bar').data(data, yAccessor);
				var text = barsG.selectAll('text').data(data, yAccessor);

				
				bars.exit().remove();
				text.exit().remove();

				//rect 객체 생성
				var rect = bars.enter()
					.append('rect')
					.attr('class', "bar")
					.attr('x', leftPadding)
					.style("fill-opacity", 0)
					.on("mouseout", function() {
				    	tooltips.style('display', 'none');
				    })
			        .on("mousemove", mousemove);
				
				if(options.click) {
					rect.on("click", function(d) {
						self.click(d);
		            }).style('cursor', 'pointer');
				}
		        
				rect.merge(bars).transition(t)
				.style("fill-opacity", .9)
				.style("fill", function(d) {
					if(d.color) return d.color;
					else if(d.category) d.color = options.color(d.category);
					else if(options.color) d.color = options.color(d.name);
					else d.color = "#3182bd";
					return d.color;
				})
				.attr('y', function(d) {
					return yScale(yAccessor(d));
				})
				.attr('width', function(d) {
					return xScale(xAccessor(d));
				})
				.attr('height', yScale.bandwidth())
				.delay(delay);
				
				self.setObject(rect, options.rect);
				
				//rect 옆 text 객체 생성
				var rectText = text.enter()
					.append('text')
					.attr('class', "bar-text")
					.style("fill", "#777")
					.style("font-weight", "bold")
					.style("font-size", "12px")
					.merge(text).transition(t)
					.attr("text-anchor", "start")
					.attr('x', function(d) {
						return xScale(xAccessor(d)) + 10;
					})
					.attr('y', function(d) {
						return yScale(yAccessor(d)) + (yScale.bandwidth()/2);
					})
					.tween("text", function(d) {
						var that = d3.select(this)
				        var content = that.text();
				        var i = d3.interpolateRound(content, d.value);  
				        return function( t ) {
				        	that.text(i(t))
				        };
					})
					.delay(delay);
				
				self.setObject(rectText, options.text);
				
			}
			
			var svg = this.svg.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
			
			yScale.domain(yDomain);
			drawXAxis(svg, data);
			drawYAxis(svg, data);
			drawBars(svg, data);
			
			var tooltips = this.drawTooltip(this.svg, 1);
			function mousemove(d) {
				var x = d3.mouse(this)[0];
			    var y = d3.mouse(this)[1];
			    self.moveTooltip(tooltips, data, d, x, y, "bar");
			}
		}
	}
	
	var RadarTable = function(){
		
		var self = this;
		this.type = "radar_table";
		
		this.draw = function() {
			var id = this.element[0].id;
			var data = this.options.data;
			var config = this.config;
			var svg = this.svg;

			var options = this.options;
			var type = options.type,
			width = options.width,
			height = options.height,
			margin = options.margin;
			
			width = width - options.margin.left - options.margin.right;
			height = height - options.margin.bottom - options.margin.top;
			
			data = this.parser(data);
   
			//center 부분 비워두기 위해 blank 데이터 추가
			if(data.length > 1) {
				var addData = { name : "blank", data : JSON.parse(JSON.stringify(data[0].data)), total : 0 };
				for(var i in addData.data) {
					addData.data[i].value = 0;
				}
				data.push(addData);
			}
			
			//config 설정
			options.rotate = options.rotate ? options.rotate : 0;
			var HALF_PI = Math.PI / (2 + options.rotate);
			var config = {
			    w: width, //Width of the circle
			    h: height, //Height of the circle
			    margin: margin, //The margins of the SVG
			    labelFactor: options.axis.labelFactor ? options.axis.labelFactor : 1.25, //How much farther than the radius of the outer circle should the labels be placed
			    wrapWidth: options.axis.wrapWidth ? options.axis.wrapWidth : 60, //The number of pixels after which a label needs to be given a new line
			    opacityArea: options.axis.opacityArea ? options.axis.opacityArea : 0.35, //The opacity of the area of the blob
			    dotRadius: options.axis.dotRadius ? options.axis.dotRadius : 4, //The size of the colored circles of each blog
			    opacityCircles: options.axis.opacityCircles ? options.axis.opacityCircles : 0.1, //The opacity of the circles of each blob
			    strokeWidth: options.axis.strokeWidth ? options.axis.strokeWidth : 2, //The width of the stroke around each blob
			    unit: options.axis.unit ? options.axis.unit : '건',
			    format: options.axis.format ? options.axis.format : '.0f',
			    levels: options.axis.levels ? options.axis.levels : 5,
			};

			var max = d3.max(data, function(d) {
				return d3.max(d.data, function(x) {
					return x.value;
				})
			});
			var min = d3.min(data, function(d) {
				return d3.min(d.data, function(x) {
					return x.value;
				})
			});
			
			//카테고리 데이터 생성
			var sum = {};
			var categories = [];
			for(var i in data) {
				var d = data[i];
				for(var j in d.data) {
					var dd = d.data[j];
					if(!sum[dd.key]) sum[dd.key] = 0;
					sum[dd.key] += dd.value; 
					categories.push(dd.category);
				}
			}
			
			//중복 카테고리 필터링
			var allAxis = categories.reduce(function(accumulator, current) {
				if(accumulator.indexOf(current) === -1) {
					accumulator.push(current);
				}
				return accumulator;
			}, []);
			//name key list
			var allKey = data.map(function(i, j) {
				return i.name; //Names of each axis
			}).reverse();
			
			var length = allKey.length;
			
			var total = allAxis.length, //The number of different axes
			    radius = (options.height / 2) - margin.bottom - margin.top - 80,
			    Format = d3.format(config.format), //Formatting
			    angleSlice = Math.PI * 2 / total; //The width in radians of each "slice"

			if(options.radius) radius += options.radius;
			
			var diff = radius / length / 4;
			//노드 사이즈 설정
			var r = d3.scaleLinear().domain([min, max]).range(options.node.range ? options.node.range : [0, 15]);

			//x, y축 도메인 설정
			//Scale for the radius
			var rScale = d3.scaleLinear()
			    .range([0, radius])
			    .domain([0, max]);
			
			//Scale for the radius
			var xScale = d3.scaleBand()
			    .range([radius / (length == 1 ? 2 : length), radius + diff])
			    .domain(allKey);

			var parent = d3.select(this.element.selector);
			parent.select("svg").remove();

			//Initiate the radar chart SVG
			var svg = parent.append("svg")
			    .attr("width", config.w + config.margin.left + config.margin.right)
			    .attr("height", config.h + config.margin.top + config.margin.bottom)
			    .attr("class", "radar");

			//Append a g element
			var g = svg.append("g").attr("transform", "translate(" + (config.w / 2 + config.margin.left) + "," + (config.h / 2 + config.margin.top) + ")");

			//Wrapper for the grid & axes
			var axisGrid = g.append("g").attr("class", id+"axisWrapper");

			//background circle 가장자리 outline 설정
			if(options.outer) {
				var outerCircle = axisGrid.append("circle")
				.attr("r", function(d) {
					if(!options.outer.r) options.outer.r = 1.25; 
					return radius / (length + 1) * (length+ options.outer.r);
				})
				.style("fill", "#f3baac")
				.style("stroke", "#f3baac")
				.style("stroke-width", 30);

				//긍/부정 또는 대비되는 데이터 입력 시 outline 절반은 다른 스타일 적용  
				if(options.outer.half && options.outer.half.use == true) {
					var halfCircle = axisGrid
					.append("path")
					.attr("transform", "translate(0, 0)")
					.attr("d", d3.arc()
							.innerRadius( radius / (length + 1) * (length+ options.outer.r) + options.outer.half.r)
							.outerRadius( 0 )
							.startAngle( 3.14 )     // It's in radian, so Pi = 3.14 = bottom.
							.endAngle( 6.28 )       // 2*Pi = 6.28 = top
					)
					.attr('fill', '#5ed8ec');
					if(options.outer.half) this.setObject(halfCircle, options.outer.half);
				}
				if(options.outer) this.setObject(outerCircle, options.outer);
			}
			
			//Draw the background circles
			var grid = axisGrid.selectAll("."+id+"gridCircle")
			    .data(d3.range(1, (length + 2)).reverse())
			    .enter()
			    .append("circle")
			    .attr("class", id+"gridCircle")
			    .attr("r", function(d) {
			    	return radius / (length + 1) * d;
			    })
			    .style("fill", "#fff")
			    .style("stroke", "#CDCDCD")
			    .style("fill-opacity", config.opacityCircles)
			
			if(options.grid) this.setObject(grid, options.grid);

			//Text indicating at what % each level is
			/*axisGrid.selectAll(".axisLabel")
			    .data(d3.range(1, (length + 2)).reverse())
			    .enter().append("text")
			    .attr("class", "axisLabel")
			    .attr("x", 4)
			    .attr("y", function(d) {
			    	return radius / (length + 1) * -d;
			    })
			    .attr("dy", "0.4em")
			    .style("font-size", "10px")
			    .attr("fill", "#737373")
			    .text(function(d, i) {
			    	return allKey[i];
			    });
			*/
			//Create the straight lines radiating outward from the center
			var axis = axisGrid.selectAll("."+id+"axis")
			    .data(allAxis)
			    .enter()
			    .append("g")
			    .attr("class", id+"axis");
			
			//Append the lines
			var axisLine = axis.append("line")
			    .attr("x1", 0)
			    .attr("y1", 0)
			    .attr("x2", function(d, i) {
			    	return rScale(max* 1.1) * Math.cos(angleSlice * i - HALF_PI);
			    })
			    .attr("y2", function(d, i) {
			    	return rScale(max* 1.1) * Math.sin(angleSlice * i - HALF_PI);
			    })
			    .attr("class", id+"line")
			    .style("stroke", "#828282")
			    .style("stroke-width", "0.25px");

			if(options.axis && options.axis.line) this.setObject(axisLine, options.axis.line);
			
			//Append the labels at each axis
			var axisText = axis.append("text")
			    .attr("class", id+"legend")
			    .style("font-size", "11px")
			    .attr("text-anchor", "middle")
			    .attr("dy", "0.35em")
			    .attr("x", function(d, i) {
			    	return rScale(max* config.labelFactor) * Math.cos(angleSlice * i - HALF_PI);
			    })
			    .attr("y", function(d, i) {
			    	return rScale(max* config.labelFactor) * Math.sin(angleSlice * i - HALF_PI);
			    })
			    .text(function(d) {
			    	return d;
			    })
			    .call(this.wrap, config.wrapWidth);

			axisText.append("title").text(function(d) {
				return d;
			})
			if(options.axis && options.axis.text) this.setObject(axisText, options.axis.text);
			
			//center 키워드 설정
			if(options.center) {
				
				var centerNode = axisGrid.append("g");
				centerNode.append("circle")
			    .attr("r", function(d) {
			    	if(options.center.r) return options.center.r;
			    	return radius / (length + 1) * 1.1;
			    })
			    .style("fill", "#fff")
			    .style("stroke", "#fff")
			    .style("fill-opacity", 1);
				if(options.center.line) this.setObject(centerText, options.center.line);
				
				if(options.center.text.name) {
					var centerText = centerNode.append("text")
					.attr("y", 0)
					.attr("dy", "0.4em")
					.style("font-size", "10px")
					.attr("fill", "#737373")
					.text(options.center.text.name);
					centerText.attr("x", function(d) {
						return -this.getComputedTextLength();
					});
					if(options.center.text) this.setObject(centerText, options.center.text);
				}
			}
			
			//데이터 라인 스타일 설정
			//The radial line function
			var lineType = this.lineType(options.line.type); 
			var radarLine = d3.radialLine()
			    .curve(lineType)
			    .radius(function(d) {
			    	return rScale(d.value);
			    })
			    .angle(function(d, i) {
			    	return i * angleSlice;
			    });

			//데이터 value 노드 wrapper
			//Create a wrapper for the blobs
			var blobWrapper = g.selectAll("."+id+"-radarWrapper")
			    .data(data)
			    .enter().append("g")
			    .attr("class", id+"-radarWrapper");
			
			function getX(d) {
				if(options.node.pos) return (xScale(d.name) + (diff - options.node.pos));
				else if(options.node.range) return (xScale(d.name) + (diff - options.node.range[0]));
				return xScale(d.name) + (diff);
			}
			
			//Append the circles
			var radarCircle = blobWrapper.selectAll("."+id+"-radar-circle")
			    .data(function(d) {
			    	return d.data;
			    })
			    .enter()
			    .append("circle")
			    .attr("class", id+"-radar-circle")
			    .attr("id", function(d) {
			    	if(options.node.id) return options.node.id(d);
			    })
			    .attr("r", 0)
			    .attr("cx", function(d, i) {
			    	var cx = getX(d) * Math.cos(angleSlice * i - HALF_PI);
			    	return cx;
			    	
			    })
			    .attr("cy", function(d, i) {
			    	var cy = getX(d) * Math.sin(angleSlice * i - HALF_PI);
			    	return cy;
			    })
			    .style("fill", function(d, i) {
			    	if(d.color) {
			    		return d.color;	
			    	}
			    	return options.color(d.name);
			    })
			    .style("cursor", "pointer")
			    .style("fill-opacity", 0.8)

			if(options.node) this.setObject(radarCircle, options.node);
			
			//노드 title 
			radarCircle.append("title").text(function(d) {
				var title = d.name;
				var percent = d.value == 0 ? 0 : ((d.value / sum[d.key]) * 100);
				percent = Math.floor(percent);
				if(d.value) title += " : " + (percent) + "%(" + self.digits(d.value) + "건)";
				return title;
			})
			radarCircle.transition().duration(options.duration).attr("r", function(d, i) {
		    	return d.value == 0 ? 0 : r(d.value);
		    })
			
			    
			//Wrapper for the invisible circles on top
			var blobCircleWrapper = g.selectAll("."+id+"radarCircleWrapper")
			    .data(data)
			    .enter().append("g")
			    .attr("class", id+"radarCircleWrapper");

			//Append a set of invisible circles on top for the mouseover pop-up
			/*blobCircleWrapper.selectAll("."+id+"radarInvisibleCircle")
			    .data(function(d) {
			    	return d.data;
			    })
			    .enter().append("circle")
			    .attr("class", id+"radarInvisibleCircle")
			    .attr("r", function(d, i) {
			    	return d.value == 0 ? 0 : r(d.value);
			    })
			    .attr("cx", function(d, i) {
			    	return radius / (length + 1) * allKey.indexOf(d.name);
			    })
			    .attr("cy", function(d, i) {
			    	return rScale(d.value) * Math.sin(angleSlice * i - HALF_PI);
			    })
			    .style("fill", "none")
			    .style("pointer-events", "all")
			    .on("mouseover", function(d, i) {
			        tooltip
			            .attr('x', this.cx.baseVal.value - 10)
			            .attr('y', this.cy.baseVal.value - 10)
			            .transition()
			            .style('display', 'block')
			            .text(Format(d.value) + config.unit);
			    })
			    .on("mouseout", function() {
			        tooltip.transition()
			            .style('display', 'none').text('');
			    });
			 */
			var tooltip = g.append("text")
			    .attr("class", id+"tooltip")
			    .attr('x', 0)
			    .attr('y', 0)
			    .style("font-size", "12px")
			    .style('display', 'none')
			    .attr("text-anchor", "middle")
			    .attr("dy", "0.35em");
		}
	};
	
	var Map = function(){
		
		var self = this;
		this.type = "map";
		
		this.draw = function() {
			var id = this.element[0].id;
			var data = this.options.data;
			var config = this.config;
			var svg = this.svg;

			var options = this.options;
			var type = options.type,
			width = options.width,
			height = options.height,
			margin = options.margin;
			
			width = width - options.margin.left - options.margin.right;
			height = height - options.margin.bottom - options.margin.top;
			
			var color = options.color;
			
			//데이터 백분율 계산
			if(data[0] && data[0].value) {
				var total = 0;
				d3.map(data, function(d) {
					total += d.value;
				});
				d3.map(data, function(d) {
					d.percent = (d.value / total) * 100;
				});
			}
			
			//KDaViF.map.js > skorea_topo_simple_json 데이터 활용
			//지도 출력 시  키워드에 해당하는 지역의 위도,경도값/ 확대 값
			var mercator = {
				"전국" : { center : [126.8, 35.95], scale : 2800 },
				"seoul" : { center : [126.93, 37.5], scale : 59000 },
				"incheon" : { 	center : [126.35, 37.44], scale : 30000 },
				"gyeonggi-do" : {	center : [126.95, 37.55], scale : 17000 },
				"gangwon-do" : {	center : [127.9, 37.8], scale : 10000 },
				"gyeongsangbuk-do" : {center : [128.5, 36.3], scale : 12000 },
				"gyeongsangnam-do" : {center : [128.25, 35.5], scale : 15000 },
				"ulsan" : {center : [129.18, 35.5], scale : 55000 },
				"sejongsi" : {	center : [127.15, 36.5], scale : 60000 },
				"busan" : {	center : [129, 35.1], scale : 50000 },
				"chungcheongbuk-do" : {center : [127.65, 36.5], scale : 15000 },
				"chungcheongnam-do" : {center : [126.7, 36.6], scale : 15000 },
				"daejeon" : {	center : [127.4, 36.33], scale : 50000 },
				"jeollabuk-do" : {center : [127, 35.8], scale : 17000 },
				"jeollanam-do" : {center : [126.6, 34.8], scale : 12000 },
				"jeju-do" : {	center : [126.6, 33.35], scale : 30000 },
				"daegu" : {center : [128.5, 35.8], scale : 55000 },
				"gwangju" : {center : [126.85, 35.15], scale : 60000 },
			};

			var TOPO_JSON = skorea_topo_simple_json;

			//tooltip
			var numberFormat = d3.format(",");
		    var tip = d3.tip(this.type).attr("class", id+"-d3-tip");
		    var rScale = d3.scaleSqrt();

		    //입력된 지역 값으로 draw
		    var areaName = options.map.area ? options.map.area : "전국"; 
		    draw(areaName, data);
		    
			function draw(zone, layer) {

				//지도 위치 변경
				if(options.map.x) mercator[zone].center[0] = mercator[zone].center[0] + options.map.x;
				if(options.map.y) mercator[zone].center[1] = mercator[zone].center[1] + options.map.y ;
				
				zone = zone.toLowerCase();

				//설정된 값으로 지도의 출력 위치 설정 
				var projection = d3.geoMercator()
				    .center(mercator[zone].center)
				    .scale(mercator[zone].scale)
					.translate([width / 2, height / 2])
		
				var path = d3.geoPath().projection(projection);
		
				var graticule = d3.geoGraticule();
		
				d3.select("#"+id).select("svg").remove();
				var svg = d3.select("#"+id).append("svg")
				    .attr("width", width)
				    .attr("height", height);
		
				//격자선
				svg.append("path")
				    .datum(graticule)
				    .attr("class", id + "-graticule")
				    .attr("d", path);
		
				//입력된 지역에 해당하는 데이터 추출
				var key = zone == "전국" ? "provinces" : "municipalities";
				area = TOPO_JSON[key];
			    var features = topojson.feature(area, area.objects["skorea_" + key + "_geo"]).features;
				var areas = d3gis.getAreaList(zone);
				
				//지역 데이터 필터링
				var list = [];
		        if (zone != "전국") {
		            for (var i in features) {
		                var geometry = features[i];
		                var properties = geometry.properties;
		                for(var j in areas) {
		                	if(properties.name == areas[j] || properties.name.indexOf(areas[j]) >= 0) {
		                		if(zone == "incheon" && (properties.code == "11020" || properties.code == "11040" || properties.code == "11250" || properties.code == '11230' || properties.code == '23320' || properties.code == "31104" || properties.code == "31103")) {
                                    continue; //중복지역명 : 인천-중구&서울-중구 일 때 서울 중구 제거 작업 코드
                                } else if(zone == "seoul" && (properties.code == "26010" || properties.code == '25020' || properties.code == '23010')) {
                                    continue;
                                } else if(zone == "ulsan" && properties.code == "21080") {
                                    continue;
                                }
			                    list.push(geometry);
		                		break;
		                	}
		                }
		            }
		        } else {
		            list = features;
		        }
			    
		        //지역 영역 path 생성
			    var country = svg.selectAll("." + id + "-country")
			        .data(list)
			        .enter().insert("path", "." + id + "-graticule")
			        .attr("class", id + "-country")
			        .attr("d", path)
			        .attr("id", function(d) {
		            	return id + "-path-"+d.properties.code;
		            })
			        .style("fill", "#ddd")
			        .style("stroke", "#999")
			        .style("cursor", "pointer")
				    .on("click", click);

			    //지역 text 생성
			    var text = svg.selectAll("." + id + "-gis-text")
	            .data(list)
	            .enter().append("text")
	            .attr("class", id + "-gis-text")
	            .attr("id", function(d) {
	            	return id + "-text-"+d.properties.code;
	            })
	            .attr("transform", function(d) {
	            	//특정 지역인 경우 텍스트 출력 위치 수정 (겹치는 문제 해결)
	            	var transform = path.centroid(d);
	            	switch (d.properties.name) {
					case "경기도":
						transform[1] += 35;
						break;
					case "인천광역시":
						transform[1] += 15;
						break;
					case "충청남도":
						transform[1] += 12;
						break;
					}
	                return "translate(" + transform[0] + ","+transform[1]+")";
	            })
	            .attr("dy", ".35em")
	            .style("text-anchor", "middle")
	            .style("font-size", "7px")
	            .style("font-weight", "bold")
	            .style("fill", "#434656")
	            .style("cursor", "pointer")
			    .text(function(d) {
	            	return d3gis.textFilter(d.properties.name);
	            })
	            .on("click", click);
			    
			    text.style("opacity", options.text.mouseover ? 0 : 1)
			    
			    //텍스트 컬러 설정
			    if(options.text.color) { 
			    	text.style("fill", function(d) {
			    		return options.text.color(d);
			    	});
			    }
			    
			    //툴팁 설정
			    if(options.tooltip.enabled) {
			    	svg.call(tip);
			    }
			    
			    //지도 스타일 및 이벤트 설정 
			    function render(layer) {
			        if (!layer) return;

			        tip.offset([-10, 0])
		            .html(function(d) {
		                for (var i in layer) {
		                	/*var name = zone == '전국' ? d.properties.name_eng.toLowerCase() : d.properties.name;*/
							var name = zone == '전국' ? d.properties.name : d.properties.name;
		                    if (name == layer[i].name && layer[i].value) {
		                    	return d.properties.name + ": " + numberFormat(layer[i].value);
		                    }
		                }
		                return d.properties.name;
		            });

			        country.style("fill", function(d) {
		                for (var i in layer) {
		                	/*var key = zone == '전국' ? d.properties.name_eng.toLowerCase() : d.properties.name;*/
							var key = zone == '전국' ? d.properties.name : d.properties.name;
		                	if (key.indexOf(layer[i].name) >= 0) {
		                        if (layer[i].color) {
		                        	d.color = layer[i].color;
		                        	break;
		                        } else {
		                        	d.color = options.color(d3gis.getLevel(layer[i].percent));
		                        	break;
		                        }
		                    }
		                }
		                if(!d.color) d.color = options.map.defaultColor ? options.map.defaultColor : "#ddd";
		                return d.color;
		            })
		            .on("mouseover", mouseover).on("mouseout", mouseout);

			        text.on("mouseover", mouseover).on("mouseout", mouseout);
			        
			        if(options.map) self.setObject(country, options.map);
			        if(options.text) self.setObject(text, options.text);
			        
			    }
			    
			    //클릭 이벤트 설정
			    function click(d) {
			    	tip.hide();
			    	if(options.click) {
			    		options.click(d, zone);
			    	} 
		    		if(options.beforeClick) options.beforeClick(d);
		    		if(zone == "전국" && options.clicked) {
		    			var args = {};
		    			args.d = d;
		    			args.zone = zone;
		    			args.type = self.type;
		    			/*args.key = d.properties.name_eng.toLowerCase();*/
                        args.key = d.properties.name;
		    			self.clicked(args, draw);
		    		}
			    	
			    }

			    function mouseover(d) {
			    	if(options.text.mouseover) {
			    		var ids = d3.select(this).attr("id").split("-");
			    		d3.select("#" + id + "-text-" + ids[ids.length - 1]).style("opacity", 1);					    	
			    	}
			    	if(options.tooltip.enabled) tip.show(d);
			    }
			    function mouseout(d) {
			    	if(options.text.mouseover) {
			    		var ids = d3.select(this).attr("id").split("-");
			    		d3.select("#" + id + "-text-" + ids[ids.length - 1]).style("opacity", 0);
			    	}
			    	if(options.tooltip.enabled) tip.hide(d);
			    }
			    
			    render(layer);
			    
			    //세부 지역이 출력 되어있는 경우 전국 지도로 돌아가기 위한 버튼 이벤트 설정
			    if(options.map.back) {
			    	var back = d3.select(options.map.back)
			    	if(zone == "전국") {
			    		back.style("display", "none");			
			    	} else {
			    		back.style("display", "block")		
			    		.on("click", function() {
			    			draw("전국", data);
			    		});
			    	}
			    }
			    
			}
			
		}
	}
	
	
	var WorldMap = function() {
		var self = this;
		
		this.draw = function() {
			
			var id = this.element[0].id;
			var data = this.options.data;
			var config = this.config;
			var svg = this.svg;

			var options = this.options;
			var type = options.type,
			    width = options.width,
			    height = options.height,
			    margin = options.margin;

			width = width - options.margin.left - options.margin.right;
			height = height - options.margin.bottom - options.margin.top;

			var color = options.color;

			var format = d3.format(",");

			// Set tooltips
			var tip = d3.tip("map")
			    .attr('class', id + '-d3-tip')
			    .offset([-10, 0])
			    .html(function(d) {
			        if (options.tooltip.html) return options.tooltip.html(d);
			        return d.properties.name + ": " + format(d.value);
			    })


			//지도 설정
			var svg = this.svg;
			var path = d3.geoPath();
			var scale = width / 6.4;
			var projection = d3.geoMercator()
			    .scale(scale)
			    .translate([width / 2, height / 1.5])
			    .rotate([200, 0, 0]);

			var path = d3.geoPath().projection(projection);
			
			//데이터 전처리
			var valueByName = {};
			data.forEach(function(d) {
			    valueByName[d.id] = {};
			    for (var key in d) {
			        valueByName[d.id][key] = d[key];
			    }
			});
			var domain = [];
			world_features.features.forEach(function(d) {
			    var obj = valueByName[d.id];
			    if (self.isNull(obj) === false) {
			        for (var key in obj) {
			            d[key] = obj[key];
			            if (key == "value") domain.push(+obj[key])
			        }
			    } else {
			        d.value = 0;
			    }
			});

			//컬러 도메인 설정
			domain = d3.extent(domain);
			var diff = (domain[1] - domain[0]) / (options.color.range().length - 1);

			var arrDomain = []
			for (var i = 0; i < options.color.range().length; i++) {
			    arrDomain.push(domain[0] + (diff * i));
			}
			var color = d3.scaleThreshold().domain(arrDomain).range(options.color.range());

			//마우스 이벤트 영역 설정 
			var eventCapture = svg.append("rect")
		    .attr("class", "overlay")
		    .attr("width", width)
		    .attr("height", height)
		    .attr("fill", "none")
		    //.on("click", clicked)
		    .style("pointer-events", "all");
								  
			//지도영역 path 객체 생성
			var countries = svg.append("g")
			    .attr("class", id + "-countries")
			    .selectAll("path")
			    .data(world_features.features)
			    .enter().append("path")
			    .attr("id", function(d) {
			        return id + "-path-" + d.id;
			    })
			    .attr("d", path)
			    .style("fill", function(d) {
			        if (d.color) return d.color;
			        else if (color) return color(d.value);
			        else return options.color(d.id);
			    })
			    .style('stroke', 'white')
			    .style('stroke-width', 1.5)
			    .style("opacity", 0.8)
			    // tooltips
			    .style("stroke", "white")
			    .style('stroke-width', 0.3)
			    .on('mouseover', function(d) {
			        //tip.show(d);
			    	mouseover(d);
			    })
			    .on('mouseout', function(d) {
			        //tip.hide(d);
			    	mouseout(d);
			    });

		    if (options.map) self.setObject(countries, options.map);
/*
 			//지도위 text 객체 생성 (필요시 주석해제, 현재 기능 옵션 그대로 외부에서 사용 중, 추가 기능 개발 시 현 옵션 유지 후 추가 개발 권장)
			var text = svg.selectAll("." + id + "-gis-text")
			    .data(world_features.features)
			    .enter().append("text")
			    .attr("class", id + "-gis-text")
			    .attr("id", function(d) {
			        return id + "-text-" + d.id;
			    })
			    .attr("transform", function(d) {
			        var transform = path.centroid(d);
			        return "translate(" + transform[0] + "," + transform[1] + ")";
			    })
			    .attr("dy", ".35em")
			    .style("text-anchor", "middle")
			    .style("font-size", "12px")
			    .style("font-weight", "bold")
			    .style("fill", "#434656")
			    
			    .text(function(d) {
			        return d3gis.textFilter(d.properties.name);
			    })
			    .on('mouseover', function(d) {
			    	mouseover(d);
			        d3.select(this).style("opacity", 1);
			    })
			    .on('mouseout', function(d) {
			        //tip.hide(d);
			    	mouseout(d);
			        d3.select(this).style("opacity", 0);
			    })
			    .style("opacity", 0)
			    
			//text 이벤트 설정
		    if(options.click) {
		    	countries.style("cursor", "pointer")
		    	.on("click", function(d) {
		    		options.click(d);
		    	})
		    	
		    	text.style("cursor", "pointer").on("click", function(d) {
			    	options.click(d);
			    })
		    }
			    
			if (options.text) self.setObject(text, options.text);
*/
		    //툴팁 이벤트 설정
			if (options.tooltip.enabled) {
			    svg.call(tip);
			}
			//지역 클릭 이벤트 설정
			if(options.click) {
		    	countries.style("cursor", "pointer")
		    	.on("click", function(d) {
		    		options.click(d);
		    	})
		    }

			//툴팁 객체 생성
			var tooltips = this.drawTooltip(svg);
			var mouseover = function(d) {

				var x = d3.mouse(eventCapture.node())[0];
			    var y = d3.mouse(eventCapture.node())[1];
			    if(d.data) {
			    	tooltips.transition().duration(options.duration).style('display', 'block');
			    	self.moveTooltip(tooltips, data, d, x, y, "world_map");
			    }
			    //else tip.show(d);
	
			};
			
			var mouseout = function(d) {
				//tip.hide(d);
				if(d.data) {
					d3.select("."+id+"-tip-g").selectAll("text").remove();
					tooltips.transition().duration(options.duration).style('display', 'none');
				}
			};
			
		}
	}
	
	var QuadScatter = function() {

		var self = this;
		this.type = "quad_scatter";
		
		this.draw = function() {
			var id = this.element[0].id;
			var data = this.options.data;
			var config = this.config;
			var svg = this.svg;
			
			
			var options = this.options;
			var type = options.type,
			width = options.width,
			height = options.height,
			margin = options.margin;
			
			width = width - options.margin.left - options.margin.right;
			height = height - options.margin.bottom - options.margin.top;
			
			options.axis.inner = options.axis.inner == null ? true : options.axis.inner;
			var keys = ['trend', 'puberty', 'decline', 'emerging'];
			
			var svg = this.svg.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

			//이벤트 영역 설정
			svg.append("rect")
		    .attr("width", width)
		    .attr("height", height)
		    .style("fill", "#fff")
		    .style("pointer-events", "all");
			
			//y축 평균값 설정 (필수)
			var avg = Number(options.avg);

			//x, y domain 설정
			var xMax = d3.max(data, function(d) {
		        return Math.abs(d.x) + (Math.abs(d.x) / 10);
		    });
		    var extendY = d3.extent(data, function(d) {
		        return d.y;
		    });
		    var maxY = d3.max(extendY, function(d) {
		        return d - avg;
		    })
		    
		    var yMin = extendY[0] < avg - maxY ? extendY[0] : avg - maxY;
		    var yMax = extendY[1] > avg + maxY ? extendY[1] : avg + maxY;
		    var diffMax = d3.max([Math.abs(avg - yMin), Math.abs(avg - yMax)], function(d) {
		    	return d;
		    });
		    yMin = avg - diffMax;
		    yMax = avg + diffMax;
		    if(yMin == 0 && yMax == 0) {
 			    yMin = 0.1; yMax = -0.1;		    	
		    }

		    var xDomain = [-xMax, xMax];
			var yDomain = [yMin, yMax];
			
			//draw axis
			this.drawAxis(data, xDomain, yDomain);
			var xScale = this.xScale;
			var yScale = this.yScale;
			var xAxis = this.xAxis;
			var yAxis = this.yAxis;
			var x = this.x;
			var y = this.y;
			this.styleAxis(xScale, yScale, xAxis, yAxis);
			
			var styles = {
				text : {
					fill: "#545454",
					'font-size' : "12px"
				}
			}
			
			//평균증가율 텍스트 설정
			var avgIncrease = x.append("text")
		        .attr("x", width - 5)
		        .attr("y", -5)
		        .style("text-anchor", "end")
		        .styles(styles.text)
		        .text("평균증가율");
			if(options.text.increase) self.setObject(avgIncrease, options.text.increase);

			//평균언급량 텍스트 설정			
		    var avgBuzz = y.append("text")
		        .attr("x", 40)
		        .attr("y", 0)
		        .attr("dy", ".71em")
		        .style("text-anchor", "start")
		        .styles(styles.text)
		        .text("평균언급량")
		    if(options.text.buzz) self.setObject(avgBuzz, options.text.buzz);
		    
		    //평균선 라인
	      	var avgLine = svg.append("line")
		    	.attr("id", id+ "-avg-line")
		        .attr("x1", width)
		        .attr("y1", yScale(avg))
		        .attr("y2", yScale(avg))
	            .style("stroke-width", "2px")
	            .style("stroke-dasharray", "7,3")
		        .style("stroke", "#8ccdfb");
	      	if(options.line.avg) self.setObject(avgLine, options.line.avg);
	      	
	      	//평균값 텍스트 출력
		    var avgText = svg.append("text")
		        .attr("id", id + "-avg-title")
		        .attr("x", width - 8)
		        .attr("y", yScale(avg) - 17)
		        .attr("dy", ".71em")
		        .style("text-anchor", "end")
		        .styles(styles.text)
		        .text("평균값");
		    if(options.text.avg) self.setObject(avgText, options.text.avg);
			
		    //grid 라인 생성  
			function addLine(id, x1, x2, y1, y2, opacity) {
    			if(x1 == xScale(0)) return;
    			if(y1 == yScale(avg)) return;
		    	divideLine.append("line")
		    	.attr("id", id)
		        .attr("x1", x1)
		        .attr("x2", x2)
		        .attr("y1", y1)
		        .attr("y2", y2)
	            .style("stroke-width", "1px")
		        .style("stroke", "#E6E4E4")
		        .style("opacity", opacity)
		    }
			//마우스 이벤트 발생시 grid 라인 위치 이동
		    function moveLine(id, x1, x2, y1, y2, opacity) {
		    	divideLine.select(id)
		        .attr("x1", x1)
		        .attr("x2", x2)
		        .attr("y1", y1)
		        .attr("y2", y2)
		        .style("opacity", opacity)
		    }

		    //노드 생성
		    function addText(x, y, arr, id) {
		    	var cnt = 0;
		    	for(var i in arr) {
		    		var obj = arr[i];
		    		if(obj.status == 0) {
			    		cnt++;
		    		}
		    	}
		    	var divideRect = divideText.append("g").attr("id", id)
		    	.attr("transform", "translate("+x+", "+y+")")
		    	.style("cursor", "pointer");
		    	
		    	divideRect.on("mouseover", function() {
		    		evtOpt.mouseover(id, cnt);
		     	}).on("mouseout", function() {
		    		evtOpt.mouseout(id);
		     	}).on("mousemove", function() {
		    		evtOpt.mouseover(id, cnt);
		     	}).on("mouseleave", function() {
		    		evtOpt.mouseout(id);
		    	});

		    	//노드 텍스트
		    	divideRect.append("text")
		    	.text("┼")
		    	.attr("id", id+"-plus")
		    	.style("font-size", "12px")
		    	.style("fill", "#8ccdfb")
		    	.style("stroke", "#8ccdfb")
		    	.style("stroke-width", "1.5px")
		    	.attr("width", 12)
		    	.attr("height", 12)
		    	.style("visibility", cnt > 0 ? "visible" : "hidden")
		     	.attr("x", -5)
		     	.attr("y", 3)
		     	;
		    	
		    	//mouseover시 노출되는 잔여 이슈어 아이콘 bg
		    	divideRect.append("rect")
		    	.attr("class", id+"-bg")
		    	.style("fill", "#8ccdfb")
		    	.attr("rx", 10)
		    	.attr("ry", 10)
		    	.attr("width", 36)
		    	.attr("height", 16)
		    	.style("visibility", "hidden")
		     	.attr("x", -17)
		     	.attr("y", -8);
		    	//mouseover시 노출되는 잔여 이슈어 갯수
		    	divideRect .append("text")
		    	.attr("class", id+"-text")
		    	.style("text-anchor", "middle")
		     	.attr("x", 1)
		     	.attr("y", 5)
		     	.attr("fill", "#fff")
		     	.style("font-family", "'Malgun Gothic', Arial, sans-serif")
		     	.style("font-weight", "bold")
		     	.style("font-size", "13px")
		    	.style("visibility", "hidden")
		    	.text(cnt);
		    }
		    //마우스 이벤트 발생시 노드 위치 이동
		    function moveText(x, y, arr, id) {
		    	var cnt = 0;
		    	for(var i in arr) {
		    		var obj = arr[i];
		    		if(obj.status == 0) {
			    		cnt++;
		    		}
		    	}
		    	var divideRect = divideText.select("#"+id);
		    	divideRect.attr("transform", "translate("+x+", "+y+")")
		    	.on("mouseover", function(d) {
		    		evtOpt.mouseover(id, cnt);
		     	}).on("mouseout", function(d) {
		    		evtOpt.mouseout(id);
		     	});
		    	divideRect.select("#"+id+"-plus").style("visibility", cnt > 0 ? "visible" : "hidden");
		    	divideRect.select("."+id+"-bg").style("visibility", "hidden")
		    	divideRect.select("."+id+"-text").style("visibility", "hidden").text(cnt);
		    }
		    
		    
		    var evtOpt = {
		    	mouseover : function(key, cnt) {
		    		if(cnt == 0) return;
		    		d3.select("#"+key).transition().duration(150).selectAll("text").style("visibility", "visible");
		     		d3.select("#"+key).transition().duration(150).select("rect").style("visibility", "visible");
		    	},
		    	mouseout : function(key) {
		    		d3.selectAll("#"+key).selectAll("text").transition().duration(150).style("visibility", "hidden");
		    		d3.selectAll("."+key+"-bg").transition().duration(150).style("visibility", "hidden");
		    		d3.selectAll("#"+key+"-plus").transition().duration(150).style("visibility", "visible");
		    	}
		    }
	    
		    //grid 영역 분할 (4영역을 n분할로 나눔)
		    var division = options.division ? options.division : 8; //division : n분할
		    var divisionLevel = 10; //zoom level
		    var signalArr = {trend : [], puberty : [], emerging : [], decline : []};
		    arrSetting(signalArr.trend);
		    arrSetting(signalArr.puberty);
		    arrSetting(signalArr.emerging);
		    arrSetting(signalArr.decline);
		    function arrSetting(obj) {
			    for(var i =0; i < division; i++){
			    	obj[i] = []; 
		        	for(var j =0; j < division; j++){
		        		obj[i][j] = 0;
		        	}
			    }
		    }
		    
		    function beforeAddValue(index, value) {
		    	if(index == 0) value = value + (value / 10);
		    	return value;
		    }
		    function beforeMinusValue(index, value) {
		    	if(index == 0) value = value - (value / 10);
		    	return value;
		    }
		    function afterAddValue(index, value) {
		    	if(index == (division-1)) value = value + (value / 10);
		    	return value;
		    }
		    function afterMinusValue(index, value) {
		    	if(index == (division-1)) {
		    		if(value == 0) value = -1;
		    		value = value - (value / 10);
		    	}
		    	return value;
		    }
		    
		    for(var i in data) {
		    	var d = data[i]; 
		    	if(!d.x) d.x = 0;
		    	if(!d.y) d.y = 0;
		    	d.x = +d.x;
		        d.y = +d.y;
		        if(d.y >= avg && d.x >= 0) {
		        	d.signal = "trend";	//FC5357 성장
		        	for(var i =0; i < division; i++){
		        		var brk = false;
			        	for(var j =0; j < division; j++){
			        		var xb = 0 + ((xMax / (division)) * (j));
			        		var xa = 0 + ((xMax / (division)) * (j+1));
				        	var yb = avg + ((yMax - avg) / (division) * (i));
			        		var ya = avg + ((yMax - avg) / (division) * (i+1));
			        		if(xa >= 0) xa = afterAddValue(j, xa);
			        		if(ya >= 0) ya = afterAddValue(i, ya);
			        		if(xa < 0) xa = afterAddValue(j, xa);
			        		if(ya < 0) ya = afterAddValue(i, ya);
			        		
			        		var xif = d.x >= xb && d.x < xa;
			        		var yif = d.y >= yb && d.y < ya;
			        		if(xif && yif) {
			        			positionSetting(d, i, j);
			        			brk = true;
			        			break;
			        		}
			        	}
			        	if(brk) break;
			    	}
		        	
		        } else if(d.y >= avg && d.x < 0) {
		        	d.signal = "puberty";	//7247a3 성숙
		        	for(var i =0; i < division; i++){
		        		var brk = false;
			        	for(var j =0; j < division; j++){
			        		var xb = -xMax + ((xMax/(division)) * (j));
			        		var xa = -xMax + ((xMax/(division)) * (j+1));
			        		var yb = avg + (((yMax - avg) / (division)) * (i));
			        		var ya = avg + (((yMax - avg) / (division)) * (i+1));
			        		
			        		//음수일때 양수일때 구분해서 함수 호출되게 수정하기
			        		xb = beforeAddValue(j, xb);
			        		ya = afterAddValue(i, ya);
			        		
			        		var xif = d.x >= xb && d.x < xa;
			        		var yif = d.y >= yb && d.y < ya;
			        		if(xif && yif) {
			        			positionSetting(d, i, division-j-1);
			        			brk = true;
			        			break;
			        		}
			        	}
			        	if(brk) break;
		        	}
		        } else if(d.y < avg && d.x >= 0) {
		        	d.signal = "emerging";	//5EF388 신생
		        	for(var i =0; i < division; i++){
		        		var brk = false;
			        	for(var j =0; j < division; j++){
			        		var xb = 0 + ((xMax/(division)) * (j));
			        		var xa = 0 + ((xMax/(division)) * (j+1));
			        		var yb = avg - (((avg - yMin) / division) * i);
			        		var ya = avg - (((avg - yMin) / division) * (i+1));
			        		//console.log(d,i, j, xb, xa, yb, ya, ya- ya/10)
			        		if(xa >= 0) xa = afterAddValue(j, xa);
			        		if(ya >= 0) ya = afterMinusValue(i, ya);
			        		if(ya <= 0) ya = afterAddValue(i, ya);
			        		var xif = d.x >= xb && d.x < xa;
			        		var yif = d.y <= yb && d.y > ya;
			        		//console.log(d,i, j, xb, xa, yb, ya, xif, yif)
			        		if(xif && yif) {
			        			positionSetting(d, i, j);
			        			brk = true;
			        			break;
			        		}
			        	}
			        	if(brk) break;
		        	}
		        } else if(d.y < avg && d.x < 0) {
		        	d.signal = "decline";	//B19787 쇠퇴
		        	for(var i =0; i < division; i++){
		        		var brk = false;
			        	for(var j =0; j < division; j++){
			        		var xb = -xMax + ((xMax/(division)) * (j));
			        		var xa = -xMax + ((xMax/(division)) * (j+1));
			        		var yb = avg - (((avg - yMin) / division) * i);
			        		var ya = avg - (((avg - yMin) / division) * (i+1));
			        		//console.log(d,i, j, xb, xa, yb, ya)
			        		if(xa < 0) xb = beforeAddValue(j, xb);
			        		if(ya >= 0) ya = afterMinusValue(i, ya);
			        		var xif = d.x >= xb && d.x < xa;
			        		var yif = d.y <= yb && d.y > ya;
			        		//console.log(d,i, j, xb, xa, yb, ya, xif, yif)
			        		if(xif && yif) {
			        			positionSetting(d, i, division-j-1);
			        			brk = true;
			        			break;
			        		}
			        	}
			        	if(brk) break;
		        	}
		        }
		    }
		    
		    //영역 별 배열 객체에 값 입력
		    function positionSetting(d, i, j) {
    			if(!signalArr[d.signal][i]) {
    				signalArr[d.signal][i] = new Array(division);
    				signalArr[d.signal][i][j] = 0;
    			}
    			d.signalI = signalArr[d.signal][i][j] ? signalArr[d.signal][i][j] : 0;
    			d.posx = i;
    			d.posy = j;
    			signalArr[d.signal][i][j]++;
		    }
		    
		    var zoomX = Number(xScale(-xMax));
		    var zoomMax = d3.max(data, function(d) {return d.signalI});
		    zoomMax = zoomMax + (zoomMax/2);
		    // Pan and zoom
			var zoom = d3.zoom()
			    .scaleExtent([.5, zoomMax])
			    .extent([
			        [0, 0], [width, height]
			    ])
			    .on("zoom", zoomed);

			//mouse 이벤트 영역
			svg.append("rect")
			    .attr("width", width)
			    .attr("height", height)
			    .style("fill", "none")
			    .style("pointer-events", "all")
			    .call(zoom);
		    
			//영역 구분 라인
			var divideLine = svg.append("g").attr("class", "divideLine");
		    var divideText = svg.append("g").attr("clip-path", "url(#clip)").attr("class", "divideText");
		    
		    // create a clipping region 
			svg.append("defs").append("clipPath")
			    .attr("id", "clip")
			    .append("rect")
			    .attr("width", width)
			    .attr("height", height);
			
			//4영역 title 설정
			options.axis.path = options.axis && options.axis.path ? options.axis.path : "../images";
			var divide = svg.append("g").attr("clip-path", "url(#clip)").attr("class", "divideArea");
 			divide.append("text")
 			.text("성숙")
 			.style("font-size", "28px")
 			.style("fill", "#e2e2e2")
 			.attr("width", 50)
 			.attr("height", 28)
	     	.attr("id", id+"-left-top-text")
	     	.attr("x", (width/2)/2)
	     	.attr("y", (yScale(avg)/2) - 15);
 			divide.append("text")
 			.text("성장")
 			.style("font-size", "28px")
 			.style("fill", "#e2e2e2")
 			.attr("width", 50)
 			.attr("height", 28)
	     	.attr("id", id+"-right-top-text")
	     	.attr("x", (width/2) + ((width/2)/2))
	     	.attr("y", (yScale(avg)/2) - 15)
	     	divide.append("text")
	     	.text("신생")
 			.style("font-size", "28px")
 			.style("fill", "#e2e2e2")
 			.attr("width", 50)
 			.attr("height", 28)
	     	.attr("id", id+"-right-bottom-text")
	     	.attr("x", (width/2) + ((width/2)/2))
	     	.attr("y", height - (yScale(avg)/2) - 15)
	     	divide.append("text")
	     	.text("쇠퇴")
 			.style("font-size", "28px")
 			.style("fill", "#e2e2e2")
 			.attr("width", 50)
 			.attr("height", 28)
	     	.attr("id", id+"-left-bottom-text")
	     	.attr("x", (width/2)/2)
	     	.attr("y", height - (yScale(avg)/2) - 15)
			
			function moveDivideImg(id, x, y, opacity) {
	     		divide.select(id).attr("x", x).attr("y", y);
	     	}
			
 			//draw avg
			var divideImgW = 50, divideImgH = 28;
		    svg.select(".x").selectAll(".tick").select("line")
		    .style("stroke", "#8ccdfb")
		    .style("stroke-width", "2px")
		    .attr("y2", function(d, i) {
		        return Math.abs(Math.round(d * 1000000)/1000000) == 0 ? -height : 0;
		    });
		    
			// Draw Datapoints
			var points_g = svg.append("g")
			    //.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
			    .attr("clip-path", "url(#clip)")
			    .classed("points_g", true);

			//노드 아이콘 생성
			var r = d3.scaleLinear().domain(d3.extent(data, function(d) { return +d.value;})).range(options.node.range ? options.node.range : [2, 10]);
			var points = points_g.selectAll("circle").data(data);
			points = points.enter().append("circle")
				.attr("class", id+"-circle")
			    .attr('cx', function(d) {
			        return xScale(d.x);
			    })
			    .attr('cy', function(d) {
			        return yScale(d.y);
			    })
			    .attr('r', function(d) {
			    	if(d.value) d.r = r(d.value);
			    	else if(options.node.size) d.r = options.node.size;
			    	else d.r = 5;
			    	return d.r;
			    })
			    .style("visibility", function(d) {
		        	return d.signalI % divisionLevel == 0 ? "visible" : "hidden";
		        })
			    .style("fill", function(d) {
		        	var color;
		        	switch (d.signal) {
		        	case "puberty":
						color = options.node.color && options.node.color[d.signal] ? options.node.color[d.signal] : "#7247A3";
						break;
		        	case "trend":
						color = options.node.color && options.node.color[d.signal] ? options.node.color[d.signal] : "#E74549";
						break;
		        	case "decline":
						color = options.node.color && options.node.color[d.signal] ? options.node.color[d.signal] : "#B19787";
						break;
		        	case "emerging":
						color = options.node.color && options.node.color[d.signal] ? options.node.color[d.signal] : "#42866C";
						break;
					}
		        	return color;	
		        });
			
			this.setObject(points, options.node);
			
			//노드 텍스트 생성
			var texts = points_g.selectAll("text").data(data);
			texts = texts.enter().append("text")
				.attr("class", id+"-txt")
			    .attr('x', function(d) {
			    	var tx = xScale(d.x) + d.r + 1;
			        return tx; 
			    })
			    .attr('y', function(d) {
			        return yScale(d.y) + 3.5;
			    })
			    .style("visibility", function(d) {
			    	var status = "hidden";
				    if(d.signalI % divisionLevel == 0) {
				    	d.status = 1;
		        		status = "visible";
		        	} else {
		        		d.status = 0;
		        	}
				    
				    if(typeof signalArr[d.signal][d.posx][d.posy] == "number") {
				    	signalArr[d.signal][d.posx][d.posy] = [];				    	
				    }
				    signalArr[d.signal][d.posx][d.posy].push(d);
		        	return status;
		        })
			    .attr("font_family", "sans-serif") // Font type
		        .attr("font-size", "11px") // Font size
		        .style("cursor", "default")
		        .text(function(d) {
							  
			    	return d.name;
			    });
			this.setObject(texts, options.text);
			
			//+아이콘 draw
			var linePos = { x : [], y : []}; 
			var iconPos = {}; 
			for(var i =0; i < division + 30; i++){
	        	for(var j =0; j < division + 30; j++){
	        		var xa = (xMax/division) * j
	        		var xb = (-xMax/division) * j;
	        		var ya = avg + (((yMax - avg) / (division)) * i);
	        		var yb = avg - (((avg - yMin) / (division)) * i);
	        		if(i == 0) {
	        			var xbId = id+"-line-xb-"+i+"-"+j;
	        			var xaId = id+"-line-xa-"+i+"-"+j;
	        			linePos.x[xbId] = xb;
	        			linePos.x[xaId] = xa;
	        			addLine(xbId, xScale(xb), xScale(xb), height, 0, (xScale(xb) > width || xScale(xb) < 0) ? 0 : 1);
	        			addLine(xaId, xScale(xa), xScale(xa), height, 0, (xScale(xa) > width || xScale(xa) < 0) ? 0 : 1);
	        		}
	        		if(j == 0) {
	        			var ybId = id+"-line-yb-"+i+"-"+j;
	        			var yaId = id+"-line-ya-"+i+"-"+j;
        				linePos.y[ybId] = yb;
	        			linePos.y[yaId] = ya;
	        			addLine(ybId, width, 0, yScale(yb), yScale(yb), (yScale(yb) > height || yScale(yb) < 0) ? 0 : 1);
	        			addLine(yaId, width, 0, yScale(ya), yScale(ya), (yScale(ya) > height || yScale(ya) < 0) ? 0 : 1);
	        		}
	        		
	        		var xa2 = (xMax/division) * (j+1)
		    		var xb2 = (-xMax/division) * (j+1);
			    	var ya2 = avg + (((yMax - avg) / (division)) * (i+1));
	        		var yb2 = avg - (((avg - yMin) / (division)) * (i+1));
	        		var xac = xa + ((xa2 - xa) / 2);
	        		var xbc = xb + ((xb2 - xb) / 2);
	        		var yac = ya + ((ya2 - ya) / 2);
	        		var ybc = yb + ((yb2 - yb) / 2);
	        		settingIcon("trend", i, j, xac, xbc, yac, ybc);
	        		settingIcon("puberty", i, j, xac, xbc, yac, ybc);
	        		settingIcon("decline", i, j, xac, xbc, yac, ybc);
	        		settingIcon("emerging", i, j, xac, xbc, yac, ybc);
	        	}
		    }

		    function settingIcon(key, i, j, xac, xbc, yac, ybc) {
		    	var obj = signalArr[key];
		    	if(obj[i] && obj[i][j] && obj[i][j] != 0) {
		    		var iconId = id+"-"+key+"-"+i+"-"+(j);
		    		if(!iconPos[iconId]) iconPos[iconId] = {}; 
		    		iconPos[iconId] = {key : key, xa : xac, xb : xbc , ya : yac, yb : ybc, i : i, j : j};
        			if(key == "trend") addText(xScale(xac), yScale(yac), obj[i][j], iconId);
        			if(key == "puberty") addText(xScale(xbc), yScale(yac), obj[i][j], iconId);
        			if(key == "decline") addText(xScale(xbc), yScale(ybc), obj[i][j], iconId);
        			if(key == "emerging") addText(xScale(xac), yScale(ybc), obj[i][j], iconId);
        		}
		    }
		    
		    //zoom 이벤트
			var currentZoom = 0;
			function zoomed() {
				currentZoom = d3.event ? d3.event.transform.k : 1;
				if(currentZoom == undefined) return;
			    // create new scale ojects based on event
			    var nxScale = d3.event.transform.rescaleX(xScale);
			    var nyScale = d3.event.transform.rescaleY(yScale);
			    // update axes
			    x.call(xAxis.scale(nxScale));
			    y.call(yAxis.scale(nyScale));
			    
			    self.styleAxis(xScale, yScale, xAxis, yAxis);

			    //노드 icon, text 위치 조정
			    points.attr('cx', function(d) { return nxScale(d.x) })
			    .attr('cy', function(d) { return nyScale(d.y) })
			    .style("visibility", function(d) {
		        	return d.signalI % divisionLevel < parseInt(currentZoom) || (d.signalI == 0 && parseInt(currentZoom) == 0) ? "visible" : "hidden";
		        })
		        
		        texts.attr('x', function(d) { return nxScale(d.x) + 6 })
		        .attr('y', function(d) { return nyScale(d.y) + 3.5 })
		        .style("visibility", function(d) {
		        	var status = "hidden";
		        	if(d.signalI % divisionLevel < parseInt(currentZoom) || (d.signalI == 0 && parseInt(currentZoom) == 0)) {
		        		d.status = 1;
		        		status = "visible";
		        	} else {
		        		d.status = 0;
		        	}
		        	return status;
		        })

		        //평균선 위치 이동
		        avgText.attr("y", nyScale(avg) -17).style("opacity", (nyScale(avg) > height || nyScale(avg) - 17 < 0) ? 0 : 1);
				avgLine.attr("y1", nyScale(avg)).attr("y2", nyScale(avg)).style("opacity", (nyScale(avg) > height || nyScale(avg) < 0) ? 0 : 1);
				svg.select(".x").selectAll(".tick").select("line").style("stroke", "#8ccdfb").style("stroke-width", "2px")
			    .attr("y2", function(d, i) { return Math.abs(Math.round(d * 1000000)/1000000) == 0 ? -height : 0; });
				
				//영역 title 위치 이동
				var right = (width/2) + ((nxScale(0))/2);
				var top = (nyScale(avg)/2) - divideImgH;
				var left = (nxScale(0)/2)-divideImgW;
				var bottom = (height/2) + (nyScale(avg)/2);
				moveDivideImg("#"+id+"-right-top-text", right < width/2 ? width/2 : right, top > height / 2 ? height / 2 : top)
				moveDivideImg("#"+id+"-left-top-text", left > width/2 ? width/2 : left, top > height / 2 ? height / 2 : top)
				moveDivideImg("#"+id+"-left-bottom-text", left  > width/2 ? width/2 : left, bottom < height/2 ? height/2 : bottom)
				moveDivideImg("#"+id+"-right-bottom-text", right < width/2 ? width/2 : right, bottom < height/2 ? height/2 : bottom)
		        
				//grid 위치 이동
				for(var posId in linePos.x) {
					var val = linePos.x[posId];
					moveLine("#"+posId, nxScale(val), nxScale(val), height, 0, (nxScale(val) > width || nxScale(val) < 0) ? 0 : 1);
				}
				for(var posId in linePos.y) {
					var val = linePos.y[posId];
					moveLine("#"+posId, width, 0, nyScale(val), nyScale(val), (nyScale(val) > height || nyScale(val) < 0) ? 0 : 1);
				}
				
				//mouseover 아이콘 위치 이동
				for(var posId in iconPos) {
					var pos = iconPos[posId];
					var value = signalArr[pos.key][pos.i][pos.j];
					if(pos.key == "trend") moveText(nxScale(pos.xa), nyScale(pos.ya), value, posId);
        			if(pos.key == "puberty") moveText(nxScale(pos.xb), nyScale(pos.ya), value, posId);
        			if(pos.key == "decline") moveText(nxScale(pos.xb), nyScale(pos.yb), value, posId);
        			if(pos.key == "emerging") moveText(nxScale(pos.xa), nyScale(pos.yb), value, posId);
				}
			}
		}
	}
	
	var RapidTable = function(){
		var self = this;
		this.type = "rapid_table";
		this.draw = function() {
			var options = this.options;
	    	var data = this.options.data;
			var table = d3.select(this.element.selector).selectAll("div").data([0]);
			
			//div 생성
			var parent = table.enter().append("div");
            if(this.options.tableClass.table) {
            	parent.attr('class', this.options.tableClass.table);
            } else {
            	parent
            	.style("width", this.options.width+"px")
            	.style("height", this.options.height+"px")
            	.style("margin-top", this.options.margin.top+"px")
	        	.style("margin-bottom", this.options.margin.bottom+"px")
	        	.style("margin-left", this.options.margin.left+"px")
	        	.style("margin-right", this.options.margin.right+"px")
            	.style("font-family", "'맑은고딕', malgun gothic")
            	.style("font-size", this.options.fontSize+"px");
            }
            
            //하위 div 생성
            var div = parent.append("div");
            if(this.options.tableClass.div) {
            	div.attr("class", this.options.tableClass.div)
            } else {
            	div.style("position", "relative")
            	.style("overflow", "hidden")
            	.style("border", "1px solid #d3d3d3")
            	.style("margin", "0 0 19px 0")
            	.style("padding-top", "18px");
            }
        	
            //타이틀 객체
            var h2 = div.append("h2").text(this.options.title)
            if(this.options.tableClass.h2) {
            	h2.attr("class", this.options.tableClass.h2);
            } else {
            	h2.style("position", "relative")
                .style("color", "#555")
                .style("font-weight", "bold")
                .style("font-size", this.options.fontSize+"px")
                .style("margin", "0")
                .style("padding", "0 0 0 10px")
                .style("letter-spacing", "-1px");
            }
            
            //ol 테이블 생성
            var ol = div.append("ol");

            if(this.options.tableClass.ol || this.options.tableClass.ul) {
            	ol.attr("class", this.options.tableClass.h2);
            } else {
            	ol.style("position", "relative")
            	.style("overflow", "hidden")
            	.style("margin-left", "0")
            	.style("padding", "0px 0 18px 0");
            }
            
            //data row 생성
            for(var i in data) {
            	if(i == 10) break;
            	var d = data[i];
            	var li = ol.append("li");
            	li.attr("class", "li"+i);
            	if(this.options.click) {
            		li.on('click', function() {
            			var id = d3.select(this).attr("class").replace("li", "");
            			var cd = data[id];
            			self.options.click(cd);
            		});
            	}
            	if(this.options.tableClass.li) {
                	li.attr("class", this.options.tableClass.h2);
                } else {
                	li.style("line-height", "26px")
                	.style("position", "relative")
                	.style("margin", "0")
                	.style("padding", "0 0 0 35px");
                }
            	if(options.li) self.setObject(li, options.li);
            	
            	//rank 텍스트
            	var rank = li.append("span");
            	if(this.options.tableClass.rank) {
            		rank.attr("class", this.options.tableClass.rank);
            	} else {
	            	rank.style("display", "inline-block")
	            	.style("width", "14px")
	            	.style("height", "14px")
	            	//이미지 호출 시 해당 경로 또는 url 입력
	            	.style("background", "url(" + this.options.imgPath + "ico_rank.gif) no-repeat 0 0")
	            	.style("position", "absolute")
	            	.style("top", "7px")
	            	.style("left", "12px");

	            	var position = i * (-14);
	            	rank.style("background-position", "0 " + position + "px");
            	}
            	if(options.rank) self.setObject(rank, options.rank);
            	
            	//keywrod 텍스트
            	var keyword = li.append("span").text(d.keyword);
            	if(this.options.tableClass.keyword) {
            		keyword.attr("class", this.options.tableClass.keyword);
            	}
            	if(options.keyword) self.setObject(keyword, options.keyword);
            	
            	//gap 텍스트
            	var gapSpan = $.isNumeric(d.gap) ? Math.abs(Number(d.gap)) : ""; 
            	var gap = li.append("span").text(gapSpan);
            	
            	if(this.options.tableClass.gap) {
            		gap.attr("class", this.options.tableClass.gap);
            		if((d.gap < 0 || d.gap == "down") && this.options.tableClass.down) {
                		gap.attr("class", this.options.tableClass.down);
                	} else if(d.gap > 0 || d.gap == "up" /*|| d.gap == this.options.tableClass.up*/) {
                		gap.style("background", "url(" + this.options.imgPath + "ico_rank_up.gif) no-repeat 1px 2px");
                	} else if(d.gap === 0 || d.gap == "new" /*|| d.gap == this.options.tableClass['new']*/) {
                		gap.style("background", "url(" + this.options.imgPath + "ico_rank_new.gif) no-repeat 1px 2px");
                	} else if(d.gap === "" || d.gap == "keep" /*|| d.gap == this.options.tableClass.keep*/) {
                		gap.style("background", "url(" + this.options.imgPath + "ico_rank_keep.gif) no-repeat 1px 3px");
                	}
            	} else {
            		gap.style("display", "inline-block")
                    .style("width", "40px")
                    .style("text-align", "right")
                    .style("height", "14px")
                    .style("line-height", "14px")
                    .style("font-size", (this.options.fontSize-1)+"px")
                    .style("color", "#666")
                    .style("position", "absolute")
                    .style("top", "6px")
                    .style("right", "12px");
            		
            		if(d.gap < 0 || d.gap == "down") {
                		gap.style("background", "url(" + this.options.imgPath + "ico_rank_down.gif) no-repeat 1px 3px");
                	} else if(d.gap > 0 || d.gap == "up") {
                		gap.style("background", "url(" + this.options.imgPath + "ico_rank_up.gif) no-repeat 1px 2px");
                	} else if(d.gap === 0 || d.gap == "new") {
                		gap.style("background", "url(" + this.options.imgPath + "ico_rank_new.gif) no-repeat 1px 2px");
                	} else if(d.gap === "" || d.gap == "keep") {
                		gap.style("background", "url(" + this.options.imgPath + "ico_rank_keep.gif) no-repeat 1px 3px");
                	}
            	}
            	if(options.gap) self.setObject(gap, options.gap);
            	
            }
		
		}
	};
	
	var GeoMap = function(){
		var self = this;
		this.type = "geo_map";
		this.draw = function() {
			
			this.parseGroup();
			
			if(typeof google === 'undefined') {
				var param = {
					key : 'AIzaSyAZFGCckCO_YJsQCjzVA3Pk62-dP6rPH1c'
				}
				this._call(param);
			} else {
				self._draw();
			}
		}
		
		//구글 API
		this._call = function(param) {
			$.ajax({
		        url: 'https://maps.googleapis.com/maps/api/js',
		        data : param,
		        dataType: 'script',
		        timeout: 30000, 
		        success: function () {
		        	self._draw();
		        },
		        error: function (e) {
		        	//self._call(self.key[count]);
		        	//self.count++;
		        }
		    });
		}
		
		//데이터 전처리
		this.parseGroup = function() {
			var data = this.options.data;
			
			var result = [];
			var list = [];
			var group = d3.map();
			var groups = d3.map();
			for(var i in data) {
				var d = data[i];
				var key = d.x+'`'+d.y;
				var obj = {};
				//동일한 x,y 값이 있는 지 체크하여 group으로 묶음
				if(group.has(key)) {
					obj.id = i;
					for(var dkey in d) {
						var data_key = dkey;
						if(dkey == "x" || dkey == "y") {
							data_key = 'p'+dkey;
						}
						obj[data_key] = d[dkey];
					}
					result.push(obj);
					groups.set(key, obj);
				} else {
					list.push(d);
					group.set(key, d);
				}
			}
			
			for(var i in list) {
				var l = list[i];
				if(groups.has(l.x+'`'+l.y)) {
					var last = group.get(l.x+'`'+l.y);
					var obj = {};
					for(var dkey in last) {
						var data_key = dkey;
						if(dkey == "x" || dkey == "y") {
							data_key = 'p'+dkey;
						}
						obj[data_key] = last[dkey];
					}
					result.push(obj);
					list.splice(i, 1);
					break;
				}
			}
			this.options.data = {};
			this.options.data.list = list;
			this.options.data.group = result;
		};
		
		this._draw = function() {
			var id = this.element[0].id;
			var options = this.options;
			var type = options.type,
			width = options.width,
			height = options.height,
			margin = options.margin;
			
			width = width - options.margin.left - options.margin.right;
			height = height - options.margin.bottom - options.margin.top;
		
			var data = options.data.list;
			var group = options.data.group;

			options.padding = 80 + (this.isNull(options.padding) ? 0 : options.padding);
			var padding = options.padding;
			
			//지도 draw
			d3.select("#"+id)
			.style("width", this.options.width + "px")
        	.style("height", this.options.height + "px")
        	.style("background-color", this.options.backgroundColor)
        	//.style("overflow", "hidden")
        	.style("margin-top", this.options.margin.top+"px")
        	.style("margin-bottom", this.options.margin.bottom+"px")
        	.style("margin-left", this.options.margin.left+"px")
        	.style("margin-right", this.options.margin.right+"px");
			
			//구글맵 overlay 
			var CustomOverlay = function(options) {
				d3.select(d3.select(".cloud").parentNode).remove();
				this._element = $('<div style="position:absolute;left:0;top:0;text-align:center;"></div>')
				self.layer = d3.select(this._element[0]);
				
				this.setPosition(options.position);
			    this.setMap(options.map || null);
			};

			//CustomOverlay.prototype = new naver.maps.OverlayView();
			CustomOverlay.prototype = new google.maps.OverlayView();
			CustomOverlay.prototype.constructor = CustomOverlay;

			CustomOverlay.prototype.setPosition = function(position) {
			    this._position = position;
			    this.draw();
			};

			CustomOverlay.prototype.getPosition = function() {
			    return this._position;
			};

			CustomOverlay.prototype.onAdd = function() {
			    var overlayLayer = this.getPanes().overlayLayer;
			    this._element.appendTo(overlayLayer);
			};
			
			var zoom;
			CustomOverlay.prototype.draw = function() {
			    if (!this.getMap()) {
			        return;
			    }			 
			    if(map.getZoom() < 7) {
					$(".marker").hide();
					$(".cloud").hide();
					return;
				} else {
					$(".marker").show();
					$(".cloud").show();
				}
			    
			    //텍스트 클라우드 생성
			    self.drawText(data, position);
			    self.drawCloud(group, position);
			    
			    var projection = this.getProjection(),
			        position = this.getPosition(),
			        pixelPosition = projection.fromLatLngToDivPixel(position);
			   
			    self.projection = projection;
			    d3.selectAll(".marker")
			    .each(function(d) {
			    	var p = new google.maps.LatLng(d.x, d.y);
			    	p = projection.fromLatLngToDivPixel(p);
		            return d3.select(this)
		                .style("left", (p.x - padding) + "px")
		                .style("top", (p.y - padding) + "px");
			    });
			    
			};

			CustomOverlay.prototype.onRemove = function() {
			    var overlayLayer = this.getPanes().overlayLayer;
			    this._element.remove();
			    this._element.off();
			};
			
			var coordinates = [];
			d3.map(data, function(d) {
				coordinates.push(new google.maps.LatLng(d.x, d.y));
			});
			var bounds = new google.maps.LatLngBounds();
			for (var i=0; i < coordinates.length; i++) {
				bounds.extend(coordinates[i]);
			}
			
			var position = new google.maps.LatLng(bounds.getCenter().lat(), bounds.getCenter().lng());
			var map = new google.maps.Map(d3.select(this.element.selector).node(), {/*center: position,zoom: options.zoom*/	});
			var overlay = new CustomOverlay({
			    map: map,
			    position : position
			});
			
			if(options.zoom) {
				map.setZoom(options.zoom);
				map.setCenter(position);
			} else {
				map.fitBounds(bounds);
			}
			if(options.center) {
				position = new google.maps.LatLng(self.options.center[0], self.options.center[1]);
				map.setCenter(position);
				//overlay.setCenter(position);
			}
			
			var zoom;
			var fontZoomRange = options.fontRange;
		    var zoomWidth = options.width;
		    var zoomHeight = options.height;
			map.addListener('zoom_changed', function() {
				zoom_text();
				zoom_cloud();
				zoom = map.getZoom();
			});
			
			//지도 확대/축소 시 텍스트 위치 재설정
			function zoom_text() {
				d3.selectAll(".marker").each(function(d) {
			    	var text = d3.select(this).select("text");
			    	var size = Number(text.style("font-size").replace("px", ''));
			    	if(!zoom || zoom >= map.getZoom()) {
			    		if(size > 7) {
			    			size = size - 5;
			    		}
			    	} else {
			    		size = size + 5;
			    		if(d.fontsize < size) {
			    			size = d.fontsize;
			    		}
			    	}
			    	text.style("font-size", size + "px")
			    	.attr("x", function(d) {
		            	var pre = 0;
		            	if(d.name.length >= 4 && size > 40) {
		            		pre = (size - 19) * (d.name.length - 4);
		            	} else if(d.name.length < 4 && size > 55) {
		            		pre = (size - 50);
		            	}
		            	return padding + options.map.x + pre;
		            });
		            
			    });
			}
			//지도 확대/축소 시 cloud 텍스트 위치 재설정
			function zoom_cloud() {
			    if(group.length > 0) {
			    	if(zoom == map.getZoom()) {
			    		
			    	} else if(zoom > map.getZoom()) {
			    		if(options.width > 21) {
			    			zoomWidth = zoomWidth - (zoomWidth / 10);
			    			zoomHeight = zoomHeight - (zoomHeight / 10);
			    			fontZoomRange[0] = fontZoomRange[0] - 5;
						    fontZoomRange[1] = fontZoomRange[1] - 5;
			    		}
			    	} else {
					    zoomWidth = zoomWidth + (zoomWidth / 10);
		    			zoomHeight = zoomHeight + (zoomHeight / 10);
		    			if(zoomWidth > options.width) {
		    				zoomWidth = options.width;
		    			}
		    			if(zoomHeight > options.height) {
		    				zoomHeight = options.height;
		    			}
		    			for(var i = 0; i < options.fontRange.length; i++) {
		    				fontZoomRange[i] = fontZoomRange[i] + 5;
		    				if(fontZoomRange[i] >= options.fontRange[i]) {
		    					fontZoomRange[i] = options.fontRange[i];
		    				}
		    			}
			    	}
			    	options.fontZoomRange = fontZoomRange;
			    	options.zoomWidth = zoomWidth;
			    	options.zoomHeight = zoomHeight;
			    }
			}
		}
		
		//cloud 생성
		this.drawCloud = function(group, position) {
			if(group.length <= 0) {
				return;
			}
			var options = this.options;
			
			var width = options.zoomWidth ? options.zoomWidth : options.width;  
				width = width / 2;
			var height = options.zoomHeight ? options.zoomHeight : options.height;
        		height = height / 2;
            var padding = options.padding;
            var fontRange = options.fontRange;
            var fill = options.color;
            var max = d3.max(group, function(d) {
            	return Number(d.value);
            });
            var min = d3.min(group, function(d) {
            	return Number(d.value);
            });
            
            if(!this.options.opacityDomain) {
				this.options.opacityDomain = [0.6, 0.65, 0.75, 0.85, 0.95, 1];
			}
			var opacity = []; 
			for ( var i in this.options.opacityDomain) {
				var op = this.options.opacityDomain[i];
				if(i == 0) {
					opacity.push(min);
					continue;
				}
				if(i == this.options.opacityDomain.length-1) {
					opacity.push(max);
					continue;
				} 
				opacity.push(max * op);
			}
			if(options.fontZoomRange) {
				fontRange = options.fontZoomRange;
			}
			
            var s = d3.scaleLinear().domain([min, max]).range(fontRange);
			var o = d3.scaleLinear().domain(opacity).range(this.options.opacityDomain);
            
			var textPadding = this.options.textPadding ? this.options.textPadding : 2;
            d3.layout.cloud().size([width, height])
              .timeInterval(20)
              .words(group)
              .padding(textPadding)
              .fontSize(function(d) { d.fontsize = s(+d.value); return d.fontsize; })
              .text(function(d) { return d.name; })
              .rotate(function() { return ~~(Math.random() * 2) * self.options.rotate; })
              .font(self.options.font)
              .on("end", draw)
              .start();

            function draw(words) {
            	self.layer.select(".cloud").remove();
            	
            	var cloudWidth = ((fontRange[1] + fontRange[0]) / 2) * group.length;
            	cloudWidth = cloudWidth - 150;
            	//노드 갯수에 따라 클라우드 크기 자동 조절되도록 수정 
            	
          	  self.layer.append("svg")
          	  	  .style("position", "absolute")
          	  	  .attr("class", "cloud")
          	  	  .style("margin", "0 auto")
          	  	  .style("z-index", 4)
                  .attr("width", width)
                  .attr("height", height)
                  .style("text-align", "center")
                .append("g")
                  .attr("transform", "translate(" + [width >> 1, height >> 1] + ")")
                .selectAll("text")
                  .data(words)
                .enter().append("text")
                  .style("font-size", function(d) { d.fontsize = s(d.value); return d.fontsize + "px"; })
                  .style("font-family", self.options.font)
                  .style("font-weight", 600)
                  .style("fill", function(d, i) {
                	  if(!d.color) {
                		  d.color = options.color(d.name);
                	  }
                	  return d.color; 
                  })
                  .style("fill-opacity", function(d) { return o(d.value); })
                  .attr("text-anchor", "middle")
                  .attr("transform", function(d) {
                    return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                  })
                  .text(function(d) { return d.name; })
                  .on("click", function(d) {
						var params = {};
						params.category = d.category; 
						params.color = d.color; 
						params.id = d.id; 
						params.opacity = d.opacity; 
						params.rotate = d.rotate; 
						params.value = d.size; 
						params.name = d.name; 
						params.x = d.x; 
						params.y = d.y; 
						self.click(params);
				});
          	  if(self.projection) {
          		  var p = new google.maps.LatLng(group[0].px, group[0].py);
          		  p = self.projection.fromLatLngToDivPixel(p);
          		  self.layer.select(".cloud")
          		  .style('left', (p.x - (padding)) + "px")
          		  .style('top', (p.y - (padding)) + "px")
          	  }
            }
            d3.layout.cloud().stop();
		}

		this.pad = function(n, width) {
			n = n + '';
			return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
		}
		
		//text draw
		this.drawText = function(data, position) {
			var options = this.options;
			var width = options.width / 2;
            var height = options.height / 2;
            var fill = options.color;
            var max = d3.max(data, function(d) {
            	return Number(d.value);
            });
            var min = d3.min(data, function(d) {
            	return Number(d.value);
            });
            var s = d3.scaleLinear().domain([min, max]).range(this.options.fontRange);
            var padding = options.padding;
            var marker = self.layer.selectAll("svg")
            	.style("position", "absolute")
	            .data(data)
	            .enter().append("svg")
	            .attr("class", "marker");
	            //.style("z-index", 4);
	        
            marker.append("text")
            .attr("class", "text")
            .style("text-anchor", "middle")
            .style("stroke", function(d) {
            	if(!d.color) {
          		  d.color = options.color(d.name);
          	  }
          	  return d.color; 
            })
            .style("fill", function(d) {
            	if(!d.color) {
          		  d.color = options.color(d.name);
          	  }
          	  return d.color; 
            })
            .style("fill-opacity", function(d) { return d.opacity; })
            .style("stroke-width", 1.5)
            .style("font-size", function(d) {
            	d.fontsize = s(d.value);
                return d.fontsize + "px";
            })
            .text(function(d) {
                return d.name;
            })
            .attr("x", function(d) {
            	var pre = 0;
            	if(d.name.length >= 4 && d.fontsize > 40) {
            		pre = (d.fontsize - 19) * (d.name.length - 4);
            	} else if(d.name.length < 4 && d.fontsize > 55) {
            		pre = (d.fontsize - 50);
            	}
            	return padding + options.map.x + pre;
            })
            .attr("y", function(d) {
            	return padding + options.map.y;
            });
            
            marker.attr("width", function(d) {
            	return d.fontsize * d.name.length + padding;
            });
		}
		
	};
	   
	var Issue = function(){
		var self = this;
		this.type = "issue";
		this.draw = function() {
			var id = this.element[0].id;
			var options = this.options;
			var config = this.config;
			var data = options.data;

			width = options.width,
			height = options.height,
			margin = options.margin;
			
			width = width - options.margin.left - options.margin.right;
			height = height - options.margin.bottom - options.margin.top;

			var svg = this.svg.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
			
			//X,Y 축 DRAW
			var xDomain = data.map(function(d) { return d.date; });
			var yDomain = d3.extent(data, function(d) { return +d.value;});
			self.drawAxis(data, xDomain, yDomain);
			
			var xScale = this.xScale;
			var yScale = this.yScale;
			var xAxis = this.xAxis;
			var yAxis = this.yAxis;
			var x = this.x;
			var y = this.y;
			this.styleAxis(xScale, yScale, xAxis, yAxis);
			
			var g = svg.selectAll('.'+ id + '-layer')
			.data(data).enter()
			.append("g").attr("class", id + "-layer");
			
			//ISSUE RECT, TEXT DRAW
			var rect = g.append("rect")
			.attr("id", function(d, i) {
			   	return id + "-labels-rect-" + i;
			})
			.attr("x", function(d) {
	            return xScale(d.date) + 10;
	        })
	        .attr("y", function(d) {
	            return yScale(d.value);
	        })
			.attr("width", xScale.bandwidth() - 20)
	        .attr("height", function(d) {
	            return 20;
	        })
	        .style("fill", "#fff")
	        .style("stroke", function(d, j) {
		    	if (d.color) return d.color;
		        return options.color(j);
		    })
		    .style("stroke-width", 2)
		    .attr("rx", 3).attr("ry", 3)
		    .on('mouseover', function(){
		    	labelsMouseover(this);
		    })
		    .on('mouseout', function(){
		    	labelsMouseout(this);
		    });
			
			var textSize = 12;
			var text = g.append("text")
			.attr("class", id + "-labels-text")
			.attr("id", function(d, i) {
				return id + "-labels-text-" + i;
			})
			.style("font-size", textSize+"px")
			.text(function(d) {return d.name;})
			
			text.attr("x", function(d, i) {
				var $rect = d3.select("#" + id + "-labels-rect-" + i);
				var rbox = $rect.node().getBBox();
				var tbox = d3.select(this).node().getBBox();
				var tx = rbox.x + ((rbox.width - tbox.width) / 2);
	            return tx;
	        })
	        .attr("y", function(d, i) {
	        	var $rect = d3.select("#" + id + "-labels-rect-" + i);
	        	var rbox = $rect.node().getBBox();
	        	var tbox = d3.select(this).node().getBBox();
	            return yScale(d.value) + (rbox.height / 2) + (textSize / 3);
	        })
	        
		}
	};
	
	var LinearGradient = function(){
		var self = this;
		this.type = "linear_gradient";
		this.draw = function() {
			var id = this.element[0].id;
			var options = this.options;
			var config = this.config;
			var data = options.data;

			width = options.width,
			height = options.height,
			margin = options.margin;
			
			width = width - options.margin.left - options.margin.right;
			height = height - options.margin.bottom - options.margin.top;

			var names = [];
			var dates = [];
			var dataColors = [];
			for(var i in data) {
				names.push(data[i].name);
				dates.push(data[i].date);
				dataColors.push(data[i].color);
			}

			var svg = this.svg.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
			
			//date draw
	        var x = d3.scaleBand().domain(dates).range([0, width]);
	        var axis = svg.append("g")
	    	.attr("class", "axis")
	    	.attr("transform", "translate(0, "+height+")")
	    	.call(d3.axisBottom(x));
	        
	        axis.selectAll("path").style("stroke-width", 0)
	        axis.selectAll("line").attr("y2", 0);
	        if(options.axis.text) this.setObject(axis.selectAll("text"), options.axis.text);
	        
	        
	        //name draw
	        var textG = axis.selectAll("g").append("g")
	        .attr("id", function(d, i) {
	        	return id+"_rect_" + i;
	        })
	        .attr("class", id+"_rect")
	        .on("mouseover", mouseover)
	        .on("mouseout", mouseout)	        
	        
	        var rect = textG.append("rect")
	        .attr("y", 28)
	        .attr("height", "28px")
	        .style("fill", "#fff")
	        .style("stroke", "#9da4bc")
	        .style("stroke-width", 1)
	        .attr("rx", 4)
	        .attr("ry", 4)
	        ;
	        if(options.rect) this.setObject(rect, options.rect);
	        
	        //text draw
	        var text = textG.append("text")
	        .style("fill", "#545454")
	        .style("font-size", "12px")
	        .style("letter-spacing", 0)
	        .style("font-family", "'Malgun Gothic', Arial, sans-serif")
	        .text(function(d, i) {
	        	return names[i];
	        })
	        if(options.text) this.setObject(text, options.text);
	        
	        rect.attr("x",  function(d) {
	        	var node = d3.select(this.parentNode).select("text").node().getBBox();
	        	return -(node.width + 26) / 2;
	        })
	        .attr("width", function(d) {
	        	var node = d3.select(this.parentNode).select("text").node().getBBox();
	        	return node.width + 26;
	        });
	        
	        text.attr("x",  function(d) {
	        	var node = d3.select(this.parentNode).select("rect").node().getBBox();
	        	return node.x + (node.width / 2)
	        }).attr("y",  function(d) {
	        	var node = d3.select(this.parentNode).select("rect").node().getBBox();
	        	var node_text = d3.select(this.parentNode).select("text").node().getBBox();
	        	return node.y + node.height - (node_text.height / 2) - 2;
	        })
	        
	        function mouseover() {
	        	d3.select(this).select("text").style("fill", "#fff")
	        	d3.select(this).select("rect").style("fill", "#a0b7c8")
	        } 
	        
	        function mouseout() {
	        	if(d3.select(this).attr("data-state") != "on") {
	        		d3.select(this).select("text").style("fill", "#545454")
	        		d3.select(this).select("rect").style("fill", "#fff")
	        	}
	        }
	        
	        if(options.click) {
	        	d3.selectAll(".tick").style("cursor", "pointer").on("click", function(d, i) {
	        		d3.selectAll("."+id+"_rect").each(function(dd, j){
	        			d3.select(this).attr("data-state", "").select("text").style("fill", "#545454")
			        	d3.select(this).attr("data-state", "").select("rect").style("fill", "#fff")
	        		});
	        		d3.select("#"+id+"_rect_"+i).attr("data-state", "on").select("text").style("fill", "#fff")
		        	d3.select("#"+id+"_rect_"+i).attr("data-state", "on").select("rect").style("fill", "#a0b7c8")
		
	        		options.click(data[i]);
	        	});
	        }
	        
	        
	        //gradient draw
			var colorRange = dataColors.length > 0 ? dataColors : options.colorRange ? options.colorRange : options.color.range();
	        var color = d3.scaleLinear().range(colorRange).domain(d3.keys(colorRange));
	        
	        var linearGradient = svg.append("defs").append("linearGradient").attr("id", id+"-linear-gradient");
	        
	        var rectX = options.rect && options.rect.x ? options.rect.x : 50 / colorRange.length;
	        
	        var offset = 0;
	        var add_offset = 100 / (colorRange.length);
	        for(var i in colorRange) {
	        	linearGradient.append("stop")
	        	.attr("offset", (offset + rectX) + "%")
	        	.attr("stop-color", color(i));
	        	
	        	offset += add_offset;
	        }

	        svg.append("rect")
	            .attr("x", 0)
	            .attr("y", 0)
	            .attr("width", width)
	            .attr("height", height)
	            .style("fill", "url(#"+id+"-linear-gradient)");
		}
	};
	
	var DendrogramBar = function(){
		var self = this;
		this.type = "dendrogram_bar";
		this.draw = function() {
			var id = this.element[0].id;
			var options = this.options;
			var config = this.config;
			var data = options.data;

			width = options.width,
			height = options.height,
			margin = options.margin;
			
			width = width - options.margin.left - options.margin.right;
			height = height - options.margin.bottom - options.margin.top;

			// main svg
			var svg = d3.select("#"+id).select("svg");
		    var g = this.svg.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		    // x-scale and x-axis
		    /* var experienceName = ["", "Basic 1.0","Alright 2.0","Handy 3.0","Expert 4.0","Guru 5.0"];
		    var formatSkillPoints = function (d) {
		        return experienceName[d % 6];
		    }*/
		    var barMargin = options.bar && options.bar.margin && options.bar.margin.right ? options.bar.margin.right : 30; 
		    var xScale =  d3.scaleLinear().domain([0, d3.max(data, function(d) { return d.value; })]).range([0, (width/3) - barMargin]);

		    /*var xAxis = d3.axisTop()
		            .scale(xScale)
		            .ticks(5)
		            .tickFormat(formatSkillPoints);*/

		    // Setting up a way to handle the data
		    var tree = d3.cluster()                 // This D3 API method setup the Dendrogram datum position.
		            .size([height, width - (width/3) ])    // Total width - bar chart width = Dendrogram chart width
		            .separation(function separate(a, b) {
		                return a.parent == b.parent            // 2 levels tree grouping for category
		                || a.parent.parent == b.parent
		                || a.parent == b.parent.parent ? 0.4 : 0.8;
		            });

		    var stratify = d3.stratify().parentId(function(d) { return d.id.substring(0, d.id.lastIndexOf(".")); });

		    var root = stratify(data);
		    tree(root);
		    
	        // Draw every datum a line connecting to its parent.
	        var link = g.selectAll("." + id + "-link")
	                .data(root.descendants().slice(1))
	                .enter().append("path")
	                .attr("class", id + "-link")
	                .attr("d", function(d) {
	                    return "M" + d.y + "," + d.x
	                            + "C" + (d.parent.y + 100) + "," + d.x
	                            + " " + (d.parent.y + 100) + "," + d.parent.x
	                            + " " + d.parent.y + "," + d.parent.x;
	                })
	                .styles({
	                	fill: 'none',
				        stroke: '#555',
				        'stroke-opacity': 0.4,
				        'stroke-width': '1px'
	                })	
	        if(options.link) self.setObject(link, options.link);
	                
	        // Setup position for every datum; Applying different css classes to parents and leafs.
	        var node = g.selectAll(".node")
	                .data(root.descendants())
	                .enter().append("g")
	                .attr("class", function(d) { return "node" + (d.children ? " node--internal" : " node--leaf"); })
	                .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

	        // Draw every datum a small circle.
	        node.append("circle").attr("r", 4);

	        // Setup G for every leaf datum.
	        var leafNodeG = g.selectAll(".node--leaf")
	                .append("g")
	                .attr("class", "node--leaf-g")
	                .attr("transform", "translate(" + 8 + "," + -13 + ")");

	        //bar 객체
	        var rect = leafNodeG.append("rect")
	                .attr("class","shadow")
	                .style("fill", function(d) {
			        	if(d.data.category) return options.color(d.data.category);
			        	else if(d.data.color) return d.data.color;
			        	else return options.color(d.data.name);
			        })
	                .attr("width", 2)
	                .attr("height", 30)
	                .attr("rx", 2)
	                .attr("ry", 2)
	                .transition().duration(800).attr("width", function (d) {return xScale(d.data.value);});
	        if(options.bar) self.setObject(rect, options.bar);
	        
	        //bar text 객체
	        var text = leafNodeG.append("text")
	                .attr("dy", 19.5)
	                .attr("x", 8)
	                .style("text-anchor", "start")
	                .text(function (d) {
	                    return d.data.id.substring(d.data.id.lastIndexOf(".") + 1);
	                })
	                .styles({
	                	'font-family': '"Arial Black", Gadget, sans-serif',
				        'fill': 'black',
				        'font-weight': 'bold',
				        'font-size': '14px'
	                })	
	                
	        if(options.bar.text) self.setObject(text, options.bar.text);

	        // Write down text for every parent datum
	        var internalNode = g.selectAll(".node--internal");
	        var nodeText = internalNode.append("text")
	                .attr("y", -10)
	                .style("text-anchor", "middle")
	                .text(function (d) {
	                    return d.data.id.substring(d.data.id.lastIndexOf(".") + 1);
	                });
	        if(options.node) self.setObject(internalNode, options.node);
	        if(options.text) self.setObject(nodeText, options.text);

	        // Attach axis on top of the first leaf datum.
	        /*var firstEndNode = g.select(".node--leaf");
	            firstEndNode.insert("g")
	                    .attr("class","xAxis")
	                    .attr("transform", "translate(" + 7 + "," + -14 + ")")
	                    .call(xAxis);

	            // tick mark for x-axis
	            firstEndNode.insert("g")
	                    .attr("class", "grid")
	                    .attr("transform", "translate(7," + (height - 15) + ")")
	                    .call(d3.axisBottom()
	                            .scale(xScale)
	                            .ticks(5)
	                            .tickSize(-height, 0, 0)
	                            .tickFormat("")
	                    );
	        
	        // Emphasize the y-axis baseline.
	        g.selectAll(".grid").select("line")
	                .style("stroke-dasharray","20,1")
	                .style("stroke","black");
	        */
	        // The moving ball (mouseover)
	        var ballG = g.insert("g")
	                .attr("class","ballG")
	                .attr("transform", "translate(" + 1100 + "," + height/2 + ")");
	        ballG.insert("circle")
	                .attr("class","shadow")
	                .style("fill","steelblue")
	                .attr("r", 5);
	        ballG.insert("text")
	                .style("text-anchor", "middle")
	                .attr("dy",5)
	                .text("0.0");

	        // Animation functions for mouse on and off events.
	        d3.selectAll(".node--leaf-g")
	                .on("mouseover", handleMouseOver)
	                .on("mouseout", handleMouseOut);

	        function handleMouseOver(d) {
	            var leafG = d3.select(this);

	            leafG.select("rect")
                .attr("stroke","#4D4D4D")
                .attr("stroke-width","2");

	            var ballGMovement = ballG.transition()
	                    .duration(400)
	                    .attr("transform", "translate(" + (d.y
	                            + xScale(d.data.value) + 90) + ","
	                            + (d.x + 1.5) + ")");

	            ballGMovement.select("circle")
	                    .style("fill", function() {
	                    	if(d.data.category) return options.color(d.data.category);
	    		        	else if(d.data.color) return d.data.color;
	    		        	else return options.color(d.data.name);
	                    })
	                    .attr("r", 18);

	            ballGMovement.select("text").delay(300).text(Number(d.data.value));
	        }
	        function handleMouseOut() {
	            var leafG = d3.select(this);
	            leafG.select("rect").attr("stroke-width","0");
	        }
		    function row(d) {
		        return {
		            id: d.id,
		            value: +d.value,
		            color: d.color
		        };
		    }
			
		}
	}
		
	Line.prototype = new Davif();
	Dendrogram.prototype = new Davif();
	Cloud.prototype = new Davif();
	Pie.prototype = new Davif();
	Bar.prototype = new Davif();
	StackedBar.prototype = new Davif();
	HorizontalBar.prototype = new Davif();
	NetworkMap.prototype = new Davif();
	Scatter.prototype = new Davif();
	ScatterBand.prototype = new Davif();
	Table.prototype = new Davif();
	RapidTable.prototype = new Davif();
	Donut.prototype = new Davif();
	ProgressDonut.prototype = new Davif();
	Radar.prototype = new Davif();
	RadarTable.prototype = new Davif();
	Map.prototype = new Davif();
	WorldMap.prototype = new Davif();
	GeoMap.prototype = new Davif();
	TreeMap.prototype = new Davif();
	Bubble.prototype = new Davif();
	BubbleForce.prototype = new Davif();
	Heatmap.prototype = new Davif();
	HierarchyTree.prototype = new Davif();
	UpdateBar.prototype = new Davif();
	HorizontalBar.prototype = new Davif();
	QuadScatter.prototype = new Davif();
	Issue.prototype = new Davif();
	LinearGradient.prototype = new Davif();
	DendrogramBar.prototype = new Davif();
	
	$.fn.visualization = function (option) {
		
		//var nStart = new Date().getTime();      //시작시간 체크(단위 ms)

		 
		var defaults = $.fn.visualization.defaults();
		var options = $.extend(true, defaults, option);
		var config = $.fn.visualization.config;
		var self = this; 
		var $this = $(self);
		var chart;
		switch (options.type) {
		case config.CHART_TYPE_DENDROGRAM:
			chart = new Dendrogram();
			break;
		case config.CHART_TYPE_MULTI_LINE:
		case config.CHART_TYPE_LINE:
			chart = new Line();
			break;
		case config.CHART_TYPE_CLOUD:
			chart = new Cloud();
			break;
		case config.CHART_TYPE_PIE:
			chart = new Pie();
			break;
		case config.CHART_TYPE_PROGRESS_DONUT:
			chart = new ProgressDonut();
			break;
		case config.CHART_TYPE_DONUT:
			chart = new Donut();
			break;
		case config.CHART_TYPE_RADAR:
			chart = new Radar();
			break;
		case config.CHART_TYPE_RADAR_TABLE:
			chart = new RadarTable();
			break;
		case config.CHART_TYPE_TREEMAP:
			chart = new TreeMap();
			break;
		case config.CHART_TYPE_BUBBLE:
			if(options.group) chart = new BubbleForce();
			else chart = new Bubble();
			break;
		case config.CHART_TYPE_HEATMAP:
			chart = new Heatmap();
			break;
		case config.CHART_TYPE_HIERARCHY_TREE:
			chart = new HierarchyTree();
			break;
		case config.CHART_TYPE_UPDATE_BAR:
			chart = new UpdateBar();
			break;
		case config.CHART_TYPE_HORIZONTAL_BAR:
			chart = new HorizontalBar();
			break;
		case config.CHART_TYPE_BAR:
			chart = new Bar();
			break;
		case config.CHART_TYPE_STACKED_BAR:
			chart = new StackedBar();
			break;
		case config.CHART_TYPE_SCATTER:
			chart = new Scatter();
			break;
		case config.CHART_TYPE_SCATTER_BAND:
			chart = new ScatterBand();
			break;
		case config.CHART_TYPE_MAP:
			chart = new Map();
			break;
		case config.CHART_TYPE_WORLDMAP:
			chart = new WorldMap();
			break;
		case config.CHART_TYPE_QUAD_SCATTER:
			chart = new QuadScatter();
			break;
		case config.CHART_TYPE_RAPID_TABLE:
			chart = new RapidTable();
			break;
		case config.CHART_TYPE_TABLE:
			chart = new Table();
			break;
		case config.CHART_TYPE_NETWORKMAP:
			chart = new NetworkMap();
			break;
		case config.CHART_TYPE_GEO_MAP:
			chart = new GeoMap();
			break;
		case config.CHART_TYPE_ISSUE:
			chart = new Issue();
			break;
		case config.CHART_TYPE_LINEAR_GRADIENT:
			chart = new LinearGradient();
			break;
		case config.CHART_TYPE_DENDROGRAM_BAR:
			chart = new DendrogramBar();
			break;
		}
		this[0].innerHTML = "";
		chart.init(self, options, config);
		chart.parseCSV();
		chart.parseJSON();
		chart.setColors();
		chart.render();
		if(options.afterCall) {
			chart.afterCall();
		}
		
		if(options.resize) {
			$( window ).resize(function() {
				chart.resize();
				if(options.type != config.CHART_TYPE_GEO_MAP) chart.render();
			});
		}
    	/*
		var nEnd =  new Date().getTime();      //종료시간 체크(단위 ms)
		var nDiff = nEnd - nStart;      //두 시간차 계산(단위 ms)
		console.log(nDiff + "ms");
		*/
	};
	 
	
	$.fn.visualization.defaults = function() {

		var axis = {
			ticks : null,
			rotate : 0,
			fontSize : null,
			tickSkip : null,
			padding : 0,
			rotate : 0,
			align : null,
			usePath : true,
			grid : null,
			x : null,
			y : null,
			align : null,
			color : null,
			style : {},
			attr : {},
			line : {
				x : null,
				y : null,
				color : null,
				width: null,
				attr : null,
				style : null,
			},
			name : null,
			inner : null
		};
		
		var tooltip = {
			style : {},
			attr : {},
			enabled : false,
			useHtml : false,
			suffix : '',
			dateFormat : '',
			innerBox : false,
			css : {
				opacity : 0.8,
				width: "auto",
	        	height : "auto",
	        	overflow : "hidden",
	        	position : "absolute",
	        	color: "#fff",
	            margin: 0,
	        	"background-color" : "#0083DD",
	        	"font-family" : "Malgun Gothic",
	        	"font-size" : "12px",
	        	"vertical-align" : "top",
	        	"-webkit-border-radius" : "10px",
	        	"-moz-border-radius" : "10px",
	        	"border-radius" : "10px",
	        	'pointer-events' : 'none',
	        	p : 'font-size:14px; padding-left:10px;',
				ul : 'list-style:none;padding-left:2px;',
				li : 'padding:2px 10px;',
				'davif-icon' : 'padding-right:5px;font-size:10px;',
				'davif-title1' : 'margin-right:30px;',
				'davif-title2' : 'float:right;',
			},
			x : 0,
			y : 0,
			html : null,
			textFunc : null,
			isabsolute : null,
		}
		
		var line = {
			type : null,
		}
		var map = {
			back : null,
		}
		
		var legend = {
			type : null,	//horizontal, vertical
			x : 0,
			y : 0,
			margin : {}
		}
		
		var rapid_table = {
			table : "",
			tr : "",
			tr_header : "davif-header-row",
			tr_row : "davif-row",
			td : "davif-cell",
			th : "davif-header",
			
			//rapid table
			div : '',
			h2 : '',
			ol : '',
			ul : '',
			li : '',
			up : '',
			down : '',
			keep : '',
			'new' : '',
			rank : '',
			keyword : '',
			gap : ''
		}
		
		var defaults = {
			type : null,
			data : null,
			dataUrl : null,
			dataCsv : null,
			dataCsvUrl : null,
			dataRand : null,
			dataParams : null,
			dataType : null,
			click : null,
			color : null,
			
			/**explorer**/
			collapse : {
				httpType : "POST", 
				use : false,
				data: null,
				dataUrl : null,
				dataParams : {},
				parser : null
			},
			
			/** cloud **/
			x : 0,
			y : 0,
			opacityDomain : null,
			
			/** pie **/
			labels : {
				enabled : null,
				distance : 0,
				over : false,
				gap : 0,
				//line
				inner : true,
				//bubble_pie
				size:null,
				length : null,
				suffix : '',
			},
			
			node : {
				enabled : true,
				over : true,
				size : null,
				color : null,
			},
			
			/** tooltip **/
			tooltip : JSON.parse(JSON.stringify(tooltip)),
	
			/** stacekd bar **/
			tickSuffix : "",
			tickNagative : false,
			/** line **/
			dateFormat : '',
			inputFormat : null,
			
			/** dendrogram **/
			depthLength : null,
			
			/** style **/
			margin : {
				top : 0,
				right : 0,
				bottom : 0,
				left : 0
			},
			font : "Malgun Gothic",
			backgroundColor : null,
			fontColor : null,
			width : null,
			height : null,
			
			focusRectX : {
				fill : "#e4eaf3",
				"opacity" : 0.2,
			},
			tickSkip : 1,
			
			x : JSON.parse(JSON.stringify(axis)),
			y : JSON.parse(JSON.stringify(axis)),
			line : {
				style : {},
				width : 1,
				maxPoint : true,
				maxPointAll : true,
			},
			icon : {
				use : true,
				type : "circle",
				size : 3,
				hoverSize : 5,
			},
			font : {
				size : 10,
				color : "#6A7C87",
				opacity : 1,
				align : "center",
				style : {}
			},
			node : {
				style : {}
			},
			colorRange : null,
			valueRange : null,
			text : {
				style : {}
			},
			donut : {
				innerRadius : 0,
				outerRadius : 0,
			},
			legend : {
				use : null,
			},
			cloud : {
				spiral : "archimedean",
			},
			
			/** map **/
			map : JSON.parse(JSON.stringify(map)),
			
			axis : {
				inner : null,
				text : {
					style : {}
				}
			},
			
			legend : JSON.parse(JSON.stringify(legend)),
			tableClass : JSON.parse(JSON.stringify(rapid_table)),
			defaultCss : true,
			link : {},
			resize : false,
		};
		
		defaults.y.right = JSON.parse(JSON.stringify(axis));
		defaults.y.right.padding = {};
			
		return defaults;
	};
	
	$.fn.visualization.config = {
		MEDIA_TYPE_ALL_NAME : "전체",
		MEDIA_TYPE_TWITTER_NAME : "트위터",
		MEDIA_TYPE_FACEBOOK_NAME : "페이스북",
		MEDIA_TYPE_BLOG_NAME : "블로그",
		MEDIA_TYPE_NEWS_NAME : "뉴스",
		MEDIA_TYPE_COMMUNITY_NAME : "커뮤니티",
		
		MEDIA_TYPE_ALL : "all",
		MEDIA_TYPE_TWITTER : "twitter",
		MEDIA_TYPE_FACEBOOK : "facebook",
		MEDIA_TYPE_BLOG : "blog",
		MEDIA_TYPE_NEWS : "news",
		MEDIA_TYPE_COMMUNITY : "community",
		
		SENTIMENT_TYPE_ALL: "all",
		SENTIMENT_TYPE_POSITIVE: "positive",
		SENTIMENT_TYPE_NEUTRAL: "neutral",
		SENTIMENT_TYPE_NEUTRALITY: "neutrality",
		SENTIMENT_TYPE_NEGATIVE: "negative",
		SENTIMENT_TYPE_OBJECTIVE: "objective",
		SENTIMENT_TYPE_OBJECT: "object",
		
		SENTIMENT_TYPE_ALL_NAME : "전체",
		SENTIMENT_TYPE_POSITIVE_NAME : "긍정",
		SENTIMENT_TYPE_NEUTRAL_NAME : "중립",
		SENTIMENT_TYPE_NEGATIVE_NAME : "부정",
		SENTIMENT_TYPE_OBJECT_NAME : "객관",
		
		TYPE_ALL: "all",
		TYPE_ALL_NAME : "전체",
		
		CHART_TYPE_LINE : "line",
		CHART_TYPE_MULTI_LINE : "multiline",
		CHART_TYPE_PIE : "pie",
		
		CHART_TYPE_UPDATE_BAR : "update_bar",

		CHART_TYPE_BAR : "bar",
		CHART_TYPE_STACKED_BAR : "stackedbar",
		CHART_TYPE_GROUPED_BAR : "groupedbar",
		CHART_TYPE_HORIZONTAL_BAR : "horizontal_bar",
		CHART_TYPE_HORIZONTAL_STACKED_BAR : "horizontal_stackedbar",
		CHART_TYPE_HORIZONTAL_GROUPED_BAR : "horizontal_groupedbar",
		
		CHART_TYPE_CLOUD : "cloud",
		CHART_TYPE_EXPLORER : "explorer",
		CHART_TYPE_DENDROGRAM : "dendrogram",
		CHART_TYPE_NETWORKMAP : "networkmap",
		CHART_TYPE_NETWORKMAP_RANK : "networkmap_rank",
		CHART_TYPE_NETWORK_DIAGRAM : "network_diagram",
		CHART_TYPE_CHORD_DIAGRAM : "chord_diagram",
		CHART_TYPE_SCATTER : "scatter",
		CHART_TYPE_SCATTER_BAND : "scatter_band",
		CHART_TYPE_TABLE : "table",
		CHART_TYPE_RAPID_TABLE : "rapid_table",
		CHART_TYPE_PROGRESS_DONUT : "progress_donut",
		CHART_TYPE_DONUT : "donut",
		CHART_TYPE_RADAR : "radar",
		CHART_TYPE_RADAR_TABLE : "radar_table",
		CHART_TYPE_BUBBLE_PIE : "bubble_pie",
		CHART_TYPE_MAP : "map",
		CHART_TYPE_WORLDMAP : "world_map",
		CHART_TYPE_GEO_MAP : "geo_map",
		CHART_TYPE_TREEMAP : "treemap",
		CHART_TYPE_PARALLEL_COORDINATES : "parallel_coordinates",
		CHART_TYPE_BUBBLE : "bubble",
		CHART_TYPE_HEATMAP : "heatmap",
		CHART_TYPE_HIERARCHY_TREE : "hierarchy_tree",
		CHART_TYPE_QUAD_SCATTER : "quad_scatter",
		CHART_TYPE_ISSUE : "issue",
		CHART_TYPE_LINEAR_GRADIENT : "linear_gradient",
		CHART_TYPE_DENDROGRAM_BAR : "dendrogram_bar",
		
		DATA_TYPE_JSON : "json",
		DATA_TYPE_CSV : "csv",
		DATA_TYPE_RAND : "random"
	};

	$.fn.visualization.Constructor = Davif;

})();




