/*
reframe.js - Reframe.js: responsive iframes for embedded content
@version v2.2.5
@link https://github.com/dollarshaveclub/reframe.js#readme
@author Jeff Wainwright <jjwainwright2@gmail.com> (http://jeffry.in)
@license MIT
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.reframe=t()}(this,function(){"use strict";function e(e,t){var i="string"==typeof e?document.querySelectorAll(e):e,n=t||"js-reframe";"length"in i||(i=[i]);for(var o=0;o<i.length;o+=1){var r=i[o];if(!(-1!==r.className.split(" ").indexOf(n))){var d=r.getAttribute("height"),f=r.getAttribute("width");if(!(f.indexOf("%")>-1||r.style.width.indexOf("%")>-1)){var a=(d||r.offsetHeight)/(f||r.offsetWidth)*100,s=document.createElement("div");s.className=n;var l=s.style;l.position="relative",l.width="100%",l.paddingTop=a+"%";var p=r.style;p.position="absolute",p.width="100%",p.height="100%",p.left="0",p.top="0",r.parentNode.insertBefore(s,r),r.parentNode.removeChild(r),s.appendChild(r)}}}}return e});

/*
 * Badger Accordion: an accessible vanilla JS accordion with extensible API
 * v1.2.2
 * https://github.com/stuartjnelson/badger-accordion
 * License: MIT
 */
!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.BadgerAccordion = e() }(this, function () { "use strict"; function t(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } function e(t, e) { for (var n = 0; n < e.length; n++) { var i = e[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i) } } function n(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } function i() { return (i = Object.assign || function (t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]) } return t }).apply(this, arguments) } function s(t) { return a(t) || r(t) || o() } function a(t) { if (Array.isArray(t)) { for (var e = 0, n = new Array(t.length); e < t.length; e++)n[e] = t[e]; return n } } function r(t) { if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t) } function o() { throw new TypeError("Invalid attempt to spread non-iterable instance") } return Array.from || (Array.from = function () { var t = Object.prototype.toString, e = function (e) { return "function" == typeof e || "[object Function]" === t.call(e) }, n = function (t) { var e = Number(t); return isNaN(e) ? 0 : 0 !== e && isFinite(e) ? (e > 0 ? 1 : -1) * Math.floor(Math.abs(e)) : e }, i = Math.pow(2, 53) - 1, s = function (t) { var e = n(t); return Math.min(Math.max(e, 0), i) }; return function (t) { var n = this, i = Object(t); if (null == t) throw new TypeError("Array.from requires an array-like object - not null or undefined"); var a, r = arguments.length > 1 ? arguments[1] : void 0; if (void 0 !== r) { if (!e(r)) throw new TypeError("Array.from: when provided, the second argument must be a function"); arguments.length > 2 && (a = arguments[2]) } for (var o, l = s(i.length), c = e(n) ? Object(new n(l)) : new Array(l), u = 0; u < l;)o = i[u], c[u] = r ? void 0 === a ? r(o, u) : r.call(a, o, u) : o, u += 1; return c.length = l, c } }()), function (t, e) { var n = (t.body || t.documentElement).style, i = "", s = ""; "" == n.WebkitAnimation && (i = "-webkit-"), "" == n.MozAnimation && (i = "-moz-"), "" == n.OAnimation && (i = "-o-"), "" == n.WebkitTransition && (s = "-webkit-"), "" == n.MozTransition && (s = "-moz-"), "" == n.OTransition && (s = "-o-"), Object.defineProperty(Object.prototype, "onCSSAnimationEnd", { value: function (t) { var e = function e(n) { t(), n.target.removeEventListener(n.type, e) }; return this.addEventListener("webkitAnimationEnd", e), this.addEventListener("mozAnimationEnd", e), this.addEventListener("oAnimationEnd", e), this.addEventListener("oanimationend", e), this.addEventListener("animationend", e), ("" != i || "animation" in n) && "0s" != getComputedStyle(this)[i + "animation-duration"] || t(), this }, enumerable: !1, writable: !0 }), Object.defineProperty(Object.prototype, "onCSSTransitionEnd", { value: function (t) { var e = function e(n) { t(), n.target.removeEventListener(n.type, e) }; return this.addEventListener("webkitTransitionEnd", e), this.addEventListener("mozTransitionEnd", e), this.addEventListener("oTransitionEnd", e), this.addEventListener("transitionend", e), this.addEventListener("transitionend", e), ("" != s || "transition" in n) && "0s" != getComputedStyle(this)[s + "transition-duration"] || t(), this }, enumerable: !1, writable: !0 }) }(document, window), function () { function e(n, a) { var r = this; t(this, e); var o = "string" == typeof n ? document.querySelector(n) : n; if (null != o) { var l = { headerClass: ".js-badger-accordion-header", panelClass: ".js-badger-accordion-panel", panelInnerClass: ".js-badger-accordion-panel-inner", hiddenClass: "-ba-is-hidden", activeClass: "-ba-is-active", get hidenClass() { return this.hiddenClass }, initializedClass: "badger-accordion--initialized", get initalisedClass() { return this.initializedClass }, headerDataAttr: "data-badger-accordion-header-id", openMultiplePanels: !1, openHeadersOnLoad: [], headerOpenLabel: "", headerCloseLabel: "", roles: !0 }; this.settings = i({}, l, a), this.container = o; var c = Array.from(this.container.children), u = c.filter(function (t) { return !t.classList.contains(r.settings.panelClass.substr(1)) }); this.headers = u.reduce(function (t, e) { var n, i = Array.from(e.children).filter(function (t) { return t.classList.contains(r.settings.headerClass.substr(1)) }); return t = (n = []).concat.apply(n, s(t).concat([i])) }, []), this.panels = c.filter(function (t) { return t.classList.contains(r.settings.panelClass.substr(1)) }), this.toggleEl = void 0 !== this.settings.toggleEl ? Array.from(this.container.querySelectorAll(this.settings.toggleEl)) : this.headers, this.states = [].map.call(this.headers, function () { return { state: "closed" } }), this.ids = [].map.call(this.headers, function () { return { id: Math.floor(1e6 * Math.random() + 1) } }), this.toggling = !1, this.container ? this.init() : console.log("Something is wrong with you markup...") } } return n(e, [{ key: "init", value: function () { this._setupAttributes(), this._initalState(), this.calculateAllPanelsHeight(), this._insertDataAttrs(), this._addListeners(), this._finishInitialization() } }, { key: "_setRole", value: function (t, e) { ("boolean" == typeof this.settings.roles && this.settings.roles || void 0 !== this.settings.roles[t] && !1 !== this.settings.roles[t]) && e.setAttribute("role", t) } }, { key: "_initalState", value: function () { var t = this.settings.openHeadersOnLoad; t.length && this._openHeadersOnLoad(t), this._renderDom() } }, { key: "_insertDataAttrs", value: function () { var t = this; this.headers.forEach(function (e, n) { e.setAttribute(t.settings.headerDataAttr, n) }) } }, { key: "_finishInitialization", value: function () { this.container.classList.add(this.settings.initializedClass), this._setRole("presentation", this.container) } }, { key: "_addListeners", value: function () { var t = this; this.headers.forEach(function (e, n) { e.addEventListener("click", function () { t.handleClick(e, n) }) }) } }, { key: "handleClick", value: function (t, e) { var n = this.settings.headerClass.substr(1); t.classList.contains(n) && !1 === this.toggling && (this.toggling = !0, this.setState(e), this._renderDom()) } }, { key: "setState", value: function (t) { var e = this, n = this.getState(); this.settings.openMultiplePanels || n.filter(function (e, n) { n != t && (e.state = "closed") }), n.filter(function (n, i) { if (i == t) { var s = e.toggleState(n.state); return n.state = s } }) } }, { key: "_renderDom", value: function () { var t = this; this.states.filter(function (e, n) { "open" === e.state && t.open(n, !1) }), this.states.filter(function (e, n) { "closed" === e.state && t.close(n, !1) }) } }, { key: "open", value: function (t) { (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this.setState(t), this.togglePanel("open", t) } }, { key: "close", value: function (t) { (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this.setState(t), this.togglePanel("closed", t) } }, { key: "openAll", value: function () { var t = this; this.headers.forEach(function (e, n) { t.togglePanel("open", n) }) } }, { key: "closeAll", value: function () { var t = this; this.headers.forEach(function (e, n) { t.togglePanel("closed", n) }) } }, { key: "togglePanel", value: function (t, e) { var n = this; if (void 0 !== t && void 0 !== e) if ("closed" === t) { var i = this.headers[e], s = this.panels[e]; s.classList.add(this.settings.hiddenClass), s.classList.remove(this.settings.activeClass), i.classList.remove(this.settings.activeClass), i.setAttribute("aria-expanded", !1), s.onCSSTransitionEnd(function () { return n.toggling = !1 }) } else if ("open" === t) { var a = this.headers[e], r = this.panels[e]; r.classList.remove(this.settings.hiddenClass), r.classList.add(this.settings.activeClass), a.classList.add(this.settings.activeClass), a.setAttribute("aria-expanded", !0), r.onCSSTransitionEnd(function () { return n.toggling = !1 }) } } }, { key: "getState", value: function () { var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []; return e.length && Array.isArray(e) ? e.map(function (e) { return t.states[e] }) : this.states } }, { key: "toggleState", value: function (t) { if (void 0 !== t) return "closed" === t ? "open" : "closed" } }, { key: "_openHeadersOnLoad", value: function () { var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []; e.length && Array.isArray(e) && e.filter(function (t) { return void 0 != t }).forEach(function (e) { t.setState(e) }) } }, { key: "_setupAttributes", value: function () { this._setupHeaders(), this._setupPanels(), this._insertDataAttrs() } }, { key: "_setPanelHeight", value: function () { this.calculateAllPanelsHeight() } }, { key: "calculatePanelHeight", value: function (t) { var e = t.querySelector(this.settings.panelInnerClass).offsetHeight; return t.style.maxHeight = "".concat(e, "px") } }, { key: "calculateAllPanelsHeight", value: function () { var t = this; this.panels.forEach(function (e) { t.calculatePanelHeight(e) }) } }, { key: "_setupHeaders", value: function () { var t = this; this.headers.forEach(function (e, n) { e.setAttribute("id", "badger-accordion-header-".concat(t.ids[n].id)), e.setAttribute("aria-controls", "badger-accordion-panel-".concat(t.ids[n].id)) }) } }, { key: "_setupPanels", value: function () { var t = this; this.panels.forEach(function (e, n) { e.setAttribute("id", "badger-accordion-panel-".concat(t.ids[n].id)), e.setAttribute("aria-labelledby", "badger-accordion-header-".concat(t.ids[n].id)), !0 !== t.settings.roles && !1 === t.settings.roles.region || t._setRole("region", e) }) } }]), e }() });

/* Quantcast Tag */
var _qevents = _qevents || [];

(function() {
var elem = document.createElement('script');
elem.src = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
elem.async = true;
elem.type = "text/javascript";
var scpt = document.getElementsByTagName('script')[0];
scpt.parentNode.insertBefore(elem, scpt);
})();

_qevents.push({
qacct:"p-k1ZtuzCKD0GWA",
uid:"lubefar@menarini.pt"
});
