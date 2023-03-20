/*! For license information please see chunk.956.dc48b0c024303a8620c5.js.LICENSE.txt */
(self.webpackChunk_ember_auto_import_=self.webpackChunk_ember_auto_import_||[]).push([[956],{3069:(e,t,n)=>{"use strict";(t=e.exports=n(5152).default).default=t},5152:(e,t)=>{"use strict"
t.default=function(){function e(t,n,r,o){this.message=t,this.expected=n,this.found=r,this.location=o,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,e)}return function(e,t){function n(){this.constructor=e}n.prototype=t.prototype,e.prototype=new n}(e,Error),{SyntaxError:e,parse:function(t){var n,r=arguments.length>1?arguments[1]:{},o={},i={start:De},s=De,a=function(e){return{type:"messageFormatPattern",elements:e,location:Te()}},c=function(e){var t,n,r,o,i,s=""
for(t=0,r=e.length;t<r;t+=1)for(n=0,i=(o=e[t]).length;n<i;n+=1)s+=o[n]
return s},u=function(e){return{type:"messageTextElement",value:e,location:Te()}},l=/^[^ \t\n\r,.+={}#]/,p={type:"class",value:"[^ \\t\\n\\r,.+={}#]",description:"[^ \\t\\n\\r,.+={}#]"},f="{",d={type:"literal",value:"{",description:'"{"'},h=",",v={type:"literal",value:",",description:'","'},m="}",g={type:"literal",value:"}",description:'"}"'},_=function(e,t){return{type:"argumentElement",id:e,format:t&&t[2],location:Te()}},y="number",b={type:"literal",value:"number",description:'"number"'},w="date",E={type:"literal",value:"date",description:'"date"'},S="time",x={type:"literal",value:"time",description:'"time"'},O="shortNumber",k={type:"literal",value:"shortNumber",description:'"shortNumber"'},T=function(e,t){return{type:e+"Format",style:t&&t[2],location:Te()}},C="plural",j={type:"literal",value:"plural",description:'"plural"'},R=function(e){return{type:e.type,ordinal:!1,offset:e.offset||0,options:e.options,location:Te()}},P="selectordinal",D={type:"literal",value:"selectordinal",description:'"selectordinal"'},A=function(e){return{type:e.type,ordinal:!0,offset:e.offset||0,options:e.options,location:Te()}},L="select",M={type:"literal",value:"select",description:'"select"'},I=function(e){return{type:"selectFormat",options:e,location:Te()}},N="=",F={type:"literal",value:"=",description:'"="'},U=function(e,t){return{type:"optionalFormatPattern",selector:e,value:t,location:Te()}},W="offset:",H={type:"literal",value:"offset:",description:'"offset:"'},B=function(e){return e},q=function(e,t){return{type:"pluralFormat",offset:e,options:t,location:Te()}},z={type:"other",description:"whitespace"},G=/^[ \t\n\r]/,V={type:"class",value:"[ \\t\\n\\r]",description:"[ \\t\\n\\r]"},Z={type:"other",description:"optionalWhitespace"},J=/^[0-9]/,Y={type:"class",value:"[0-9]",description:"[0-9]"},$=/^[0-9a-f]/i,K={type:"class",value:"[0-9a-f]i",description:"[0-9a-f]i"},X="0",Q={type:"literal",value:"0",description:'"0"'},ee=/^[1-9]/,te={type:"class",value:"[1-9]",description:"[1-9]"},ne=function(e){return parseInt(e,10)},re=/^[^{}\\\0-\x1F \t\n\r]/,oe={type:"class",value:"[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]",description:"[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]"},ie="\\\\",se={type:"literal",value:"\\\\",description:'"\\\\\\\\"'},ae=function(){return"\\"},ce="\\#",ue={type:"literal",value:"\\#",description:'"\\\\#"'},le=function(){return"\\#"},pe="\\{",fe={type:"literal",value:"\\{",description:'"\\\\{"'},de=function(){return"{"},he="\\}",ve={type:"literal",value:"\\}",description:'"\\\\}"'},me=function(){return"}"},ge="\\u",_e={type:"literal",value:"\\u",description:'"\\\\u"'},ye=function(e){return String.fromCharCode(parseInt(e,16))},be=function(e){return e.join("")},we=0,Ee=0,Se=[{line:1,column:1,seenCR:!1}],xe=0,Oe=[],ke=0
if("startRule"in r){if(!(r.startRule in i))throw new Error("Can't start parsing from rule \""+r.startRule+'".')
s=i[r.startRule]}function Te(){return je(Ee,we)}function Ce(e){var n,r,o=Se[e]
if(o)return o
for(n=e-1;!Se[n];)n--
for(o={line:(o=Se[n]).line,column:o.column,seenCR:o.seenCR};n<e;)"\n"===(r=t.charAt(n))?(o.seenCR||o.line++,o.column=1,o.seenCR=!1):"\r"===r||"\u2028"===r||"\u2029"===r?(o.line++,o.column=1,o.seenCR=!0):(o.column++,o.seenCR=!1),n++
return Se[e]=o,o}function je(e,t){var n=Ce(e),r=Ce(t)
return{start:{offset:e,line:n.line,column:n.column},end:{offset:t,line:r.line,column:r.column}}}function Re(e){we<xe||(we>xe&&(xe=we,Oe=[]),Oe.push(e))}function Pe(t,n,r,o){return null!==n&&function(e){var t=1
for(e.sort((function(e,t){return e.description<t.description?-1:e.description>t.description?1:0}));t<e.length;)e[t-1]===e[t]?e.splice(t,1):t++}(n),new e(null!==t?t:function(e,t){var n,r=new Array(e.length)
for(n=0;n<e.length;n++)r[n]=e[n].description
return"Expected "+(e.length>1?r.slice(0,-1).join(", ")+" or "+r[e.length-1]:r[0])+" but "+(t?'"'+function(e){function t(e){return e.charCodeAt(0).toString(16).toUpperCase()}return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g,(function(e){return"\\x0"+t(e)})).replace(/[\x10-\x1F\x80-\xFF]/g,(function(e){return"\\x"+t(e)})).replace(/[\u0100-\u0FFF]/g,(function(e){return"\\u0"+t(e)})).replace(/[\u1000-\uFFFF]/g,(function(e){return"\\u"+t(e)}))}(t)+'"':"end of input")+" found."}(n,r),n,r,o)}function De(){return Ae()}function Ae(){var e,t,n
for(e=we,t=[],n=Le();n!==o;)t.push(n),n=Le()
return t!==o&&(Ee=e,t=a(t)),t}function Le(){var e
return(e=Ie())===o&&(e=Fe()),e}function Me(){var e,n,r,i,s,a
if(e=we,n=[],r=we,(i=Ye())!==o&&(s=et())!==o&&(a=Ye())!==o?r=i=[i,s,a]:(we=r,r=o),r!==o)for(;r!==o;)n.push(r),r=we,(i=Ye())!==o&&(s=et())!==o&&(a=Ye())!==o?r=i=[i,s,a]:(we=r,r=o)
else n=o
return n!==o&&(Ee=e,n=c(n)),(e=n)===o&&(e=we,e=(n=Je())!==o?t.substring(e,we):n),e}function Ie(){var e,t
return e=we,(t=Me())!==o&&(Ee=e,t=u(t)),t}function Ne(){var e,n,r
if((e=Xe())===o){if(e=we,n=[],l.test(t.charAt(we))?(r=t.charAt(we),we++):(r=o,0===ke&&Re(p)),r!==o)for(;r!==o;)n.push(r),l.test(t.charAt(we))?(r=t.charAt(we),we++):(r=o,0===ke&&Re(p))
else n=o
e=n!==o?t.substring(e,we):n}return e}function Fe(){var e,n,r,i,s,a,c
return e=we,123===t.charCodeAt(we)?(n=f,we++):(n=o,0===ke&&Re(d)),n!==o&&Ye()!==o&&(r=Ne())!==o&&Ye()!==o?(i=we,44===t.charCodeAt(we)?(s=h,we++):(s=o,0===ke&&Re(v)),s!==o&&(a=Ye())!==o&&(c=Ue())!==o?i=s=[s,a,c]:(we=i,i=o),i===o&&(i=null),i!==o&&(s=Ye())!==o?(125===t.charCodeAt(we)?(a=m,we++):(a=o,0===ke&&Re(g)),a!==o?(Ee=e,e=n=_(r,i)):(we=e,e=o)):(we=e,e=o)):(we=e,e=o),e}function Ue(){var e
return(e=We())===o&&(e=He())===o&&(e=Be())===o&&(e=qe()),e}function We(){var e,n,r,i,s,a
return e=we,t.substr(we,6)===y?(n=y,we+=6):(n=o,0===ke&&Re(b)),n===o&&(t.substr(we,4)===w?(n=w,we+=4):(n=o,0===ke&&Re(E)),n===o&&(t.substr(we,4)===S?(n=S,we+=4):(n=o,0===ke&&Re(x)),n===o&&(t.substr(we,11)===O?(n=O,we+=11):(n=o,0===ke&&Re(k))))),n!==o&&Ye()!==o?(r=we,44===t.charCodeAt(we)?(i=h,we++):(i=o,0===ke&&Re(v)),i!==o&&(s=Ye())!==o&&(a=et())!==o?r=i=[i,s,a]:(we=r,r=o),r===o&&(r=null),r!==o?(Ee=e,e=n=T(n,r)):(we=e,e=o)):(we=e,e=o),e}function He(){var e,n,r,i
return e=we,t.substr(we,6)===C?(n=C,we+=6):(n=o,0===ke&&Re(j)),n!==o&&Ye()!==o?(44===t.charCodeAt(we)?(r=h,we++):(r=o,0===ke&&Re(v)),r!==o&&Ye()!==o&&(i=Ze())!==o?(Ee=e,e=n=R(i)):(we=e,e=o)):(we=e,e=o),e}function Be(){var e,n,r,i
return e=we,t.substr(we,13)===P?(n=P,we+=13):(n=o,0===ke&&Re(D)),n!==o&&Ye()!==o?(44===t.charCodeAt(we)?(r=h,we++):(r=o,0===ke&&Re(v)),r!==o&&Ye()!==o&&(i=Ze())!==o?(Ee=e,e=n=A(i)):(we=e,e=o)):(we=e,e=o),e}function qe(){var e,n,r,i,s
if(e=we,t.substr(we,6)===L?(n=L,we+=6):(n=o,0===ke&&Re(M)),n!==o)if(Ye()!==o)if(44===t.charCodeAt(we)?(r=h,we++):(r=o,0===ke&&Re(v)),r!==o)if(Ye()!==o){if(i=[],(s=Ge())!==o)for(;s!==o;)i.push(s),s=Ge()
else i=o
i!==o?(Ee=e,e=n=I(i)):(we=e,e=o)}else we=e,e=o
else we=e,e=o
else we=e,e=o
else we=e,e=o
return e}function ze(){var e,n,r,i
return e=we,n=we,61===t.charCodeAt(we)?(r=N,we++):(r=o,0===ke&&Re(F)),r!==o&&(i=Xe())!==o?n=r=[r,i]:(we=n,n=o),(e=n!==o?t.substring(e,we):n)===o&&(e=et()),e}function Ge(){var e,n,r,i,s
return e=we,Ye()!==o&&(n=ze())!==o&&Ye()!==o?(123===t.charCodeAt(we)?(r=f,we++):(r=o,0===ke&&Re(d)),r!==o&&Ye()!==o&&(i=Ae())!==o&&Ye()!==o?(125===t.charCodeAt(we)?(s=m,we++):(s=o,0===ke&&Re(g)),s!==o?(Ee=e,e=U(n,i)):(we=e,e=o)):(we=e,e=o)):(we=e,e=o),e}function Ve(){var e,n,r
return e=we,t.substr(we,7)===W?(n=W,we+=7):(n=o,0===ke&&Re(H)),n!==o&&Ye()!==o&&(r=Xe())!==o?(Ee=e,e=n=B(r)):(we=e,e=o),e}function Ze(){var e,t,n,r
if(e=we,(t=Ve())===o&&(t=null),t!==o)if(Ye()!==o){if(n=[],(r=Ge())!==o)for(;r!==o;)n.push(r),r=Ge()
else n=o
n!==o?(Ee=e,e=t=q(t,n)):(we=e,e=o)}else we=e,e=o
else we=e,e=o
return e}function Je(){var e,n
if(ke++,e=[],G.test(t.charAt(we))?(n=t.charAt(we),we++):(n=o,0===ke&&Re(V)),n!==o)for(;n!==o;)e.push(n),G.test(t.charAt(we))?(n=t.charAt(we),we++):(n=o,0===ke&&Re(V))
else e=o
return ke--,e===o&&(n=o,0===ke&&Re(z)),e}function Ye(){var e,n,r
for(ke++,e=we,n=[],r=Je();r!==o;)n.push(r),r=Je()
return e=n!==o?t.substring(e,we):n,ke--,e===o&&(n=o,0===ke&&Re(Z)),e}function $e(){var e
return J.test(t.charAt(we))?(e=t.charAt(we),we++):(e=o,0===ke&&Re(Y)),e}function Ke(){var e
return $.test(t.charAt(we))?(e=t.charAt(we),we++):(e=o,0===ke&&Re(K)),e}function Xe(){var e,n,r,i,s,a
if(e=we,48===t.charCodeAt(we)?(n=X,we++):(n=o,0===ke&&Re(Q)),n===o){if(n=we,r=we,ee.test(t.charAt(we))?(i=t.charAt(we),we++):(i=o,0===ke&&Re(te)),i!==o){for(s=[],a=$e();a!==o;)s.push(a),a=$e()
s!==o?r=i=[i,s]:(we=r,r=o)}else we=r,r=o
n=r!==o?t.substring(n,we):r}return n!==o&&(Ee=e,n=ne(n)),n}function Qe(){var e,n,r,i,s,a,c,u
return re.test(t.charAt(we))?(e=t.charAt(we),we++):(e=o,0===ke&&Re(oe)),e===o&&(e=we,t.substr(we,2)===ie?(n=ie,we+=2):(n=o,0===ke&&Re(se)),n!==o&&(Ee=e,n=ae()),(e=n)===o&&(e=we,t.substr(we,2)===ce?(n=ce,we+=2):(n=o,0===ke&&Re(ue)),n!==o&&(Ee=e,n=le()),(e=n)===o&&(e=we,t.substr(we,2)===pe?(n=pe,we+=2):(n=o,0===ke&&Re(fe)),n!==o&&(Ee=e,n=de()),(e=n)===o&&(e=we,t.substr(we,2)===he?(n=he,we+=2):(n=o,0===ke&&Re(ve)),n!==o&&(Ee=e,n=me()),(e=n)===o&&(e=we,t.substr(we,2)===ge?(n=ge,we+=2):(n=o,0===ke&&Re(_e)),n!==o?(r=we,i=we,(s=Ke())!==o&&(a=Ke())!==o&&(c=Ke())!==o&&(u=Ke())!==o?i=s=[s,a,c,u]:(we=i,i=o),(r=i!==o?t.substring(r,we):i)!==o?(Ee=e,e=n=ye(r)):(we=e,e=o)):(we=e,e=o)))))),e}function et(){var e,t,n
if(e=we,t=[],(n=Qe())!==o)for(;n!==o;)t.push(n),n=Qe()
else t=o
return t!==o&&(Ee=e,t=be(t)),t}if((n=s())!==o&&we===t.length)return n
throw n!==o&&we<t.length&&Re({type:"end",description:"end of input"}),Pe(null,Oe,xe<t.length?t.charAt(xe):null,xe<t.length?je(xe,xe+1):je(xe,xe))}}}()},6236:(e,t,n)=>{"use strict"
var r=n(1561).Z
n(5559),(t=e.exports=r).default=t},3691:(e,t,n)=>{"use strict"
var r=n(297),o=n(2059)
function i(e,t,n){this.locales=e,this.formats=t,this.pluralFn=n}function s(e){this.id=e}function a(e,t,n,r,o){this.id=e,this.useOrdinal=t,this.offset=n,this.options=r,this.pluralFn=o}function c(e,t,n,r){this.id=e,this.offset=t,this.numberFormat=n,this.string=r}function u(e,t){this.id=e,this.options=t}function l(e,t){this.__locales__=e,this.__options__=t,this.__localeData__=r.default.__localeData__}t.default=i,i.prototype.compile=function(e){return this.pluralStack=[],this.currentPlural=null,this.pluralNumberFormat=null,this.compileMessage(e)},i.prototype.compileMessage=function(e){if(!e||"messageFormatPattern"!==e.type)throw new Error('Message AST is not of type: "messageFormatPattern"')
var t,n,r,o=e.elements,i=[]
for(t=0,n=o.length;t<n;t+=1)switch((r=o[t]).type){case"messageTextElement":i.push(this.compileMessageText(r))
break
case"argumentElement":i.push(this.compileArgument(r))
break
default:throw new Error("Message element does not have a valid type")}return i},i.prototype.compileMessageText=function(e){return this.currentPlural&&/(^|[^\\])#/g.test(e.value)?(this.pluralNumberFormat||(this.pluralNumberFormat=new Intl.NumberFormat(this.locales)),new c(this.currentPlural.id,this.currentPlural.format.offset,this.pluralNumberFormat,e.value)):e.value.replace(/\\#/g,"#")},i.prototype.compileArgument=function(e){var t=e.format
if(!t)return new s(e.id)
var n,r=this.formats,o=this.locales,i=this.pluralFn
switch(t.type){case"numberFormat":return n=r.number[t.style],{id:e.id,format:new Intl.NumberFormat(o,n).format}
case"shortNumberFormat":var c=new l(o,n=r.shortNumber[t.style])
return{id:e.id,format:c.format.bind(c)}
case"dateFormat":return n=r.date[t.style],{id:e.id,format:new Intl.DateTimeFormat(o,n).format}
case"timeFormat":return n=r.time[t.style],{id:e.id,format:new Intl.DateTimeFormat(o,n).format}
case"pluralFormat":return n=this.compileOptions(e),new a(e.id,t.ordinal,t.offset,n,i)
case"selectFormat":return n=this.compileOptions(e),new u(e.id,n)
default:throw new Error("Message element does not have a valid format type")}},i.prototype.compileOptions=function(e){var t,n,r,o=e.format,i=o.options,s={}
for(this.pluralStack.push(this.currentPlural),this.currentPlural="pluralFormat"===o.type?e:null,t=0,n=i.length;t<n;t+=1)s[(r=i[t]).selector]=this.compileMessage(r.value)
return this.currentPlural=this.pluralStack.pop(),s},s.prototype.format=function(e){return e||"number"==typeof e?"string"==typeof e?e:String(e):""},a.prototype.getOption=function(e){var t=this.options
return t["="+e]||t[this.pluralFn(e-this.offset,this.useOrdinal)]||t.other},c.prototype.format=function(e){var t=this.numberFormat.format(e-this.offset)
return this.string.replace(/(^|[^\\])#/g,"$1"+t).replace(/\\#/g,"#")},u.prototype.getOption=function(e){var t=this.options
return t[e]||t.other},l.prototype.format=function(e,t){return o.compactFormat(e,this.__locales__,this.__localeData__,this.__options__)}},297:(e,t,n)=>{"use strict"
var r=n(8224),o=n(6187),i=n(3691),s=n(3069)
function a(e,t,n){var r="string"==typeof e?a.__parse(e):e
if(!r||"messageFormatPattern"!==r.type)throw new TypeError("A message must be provided as a String or AST.")
n=this._mergeFormats(a.formats,n),o.defineProperty(this,"_locale",{value:this._resolveLocale(t)})
var i=this._findPluralRuleFunction(this._locale),s=this._compilePattern(r,t,n,i),c=this
this.format=function(t){try{return c._format(s,t)}catch(t){throw t.variableId?new Error("The intl string context variable '"+t.variableId+"' was not provided to the string '"+e+"'"):t}}}t.default=a,o.defineProperty(a,"formats",{enumerable:!0,value:{number:{currency:{style:"currency"},percent:{style:"percent"}},shortNumber:{},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}}}),o.defineProperty(a,"__localeData__",{value:o.objCreate(null)}),o.defineProperty(a,"__addLocaleData",{value:function(e){if(!e||!e.locale)throw new Error("Locale data provided to IntlMessageFormat is missing a `locale` property")
a.__localeData__[e.locale.toLowerCase()]=e}}),o.defineProperty(a,"__parse",{value:s.default.parse}),o.defineProperty(a,"defaultLocale",{enumerable:!0,writable:!0,value:void 0}),a.prototype.resolvedOptions=function(){return{locale:this._locale}},a.prototype._compilePattern=function(e,t,n,r){return new i.default(t,n,r).compile(e)},a.prototype._findPluralRuleFunction=function(e){for(var t=a.__localeData__,n=t[e.toLowerCase()];n;){if(n.pluralRuleFunction)return n.pluralRuleFunction
n=n.parentLocale&&t[n.parentLocale.toLowerCase()]}throw new Error("Locale data added to IntlMessageFormat is missing a `pluralRuleFunction` for :"+e)},a.prototype._format=function(e,t){var n,o,i,s,a,c,u=""
for(n=0,o=e.length;n<o;n+=1)if("string"!=typeof(i=e[n])){if(s=i.id,!t||!r.hop.call(t,s))throw(c=new Error("A value must be provided for: "+s)).variableId=s,c
a=t[s],i.options?u+=this._format(i.getOption(a),t):u+=i.format(a)}else u+=i
return u},a.prototype._mergeFormats=function(e,t){var n,i,s={}
for(n in e)r.hop.call(e,n)&&(s[n]=i=o.objCreate(e[n]),t&&r.hop.call(t,n)&&r.extend(i,t[n]))
return s},a.prototype._resolveLocale=function(e){"string"==typeof e&&(e=[e]),e=(e||[]).concat(a.defaultLocale)
var t,n,r,o,i=a.__localeData__
for(t=0,n=e.length;t<n;t+=1)for(r=e[t].toLowerCase().split("-");r.length;){if(o=i[r.join("-")])return o.locale
r.pop()}var s=e.pop()
throw new Error("No locale data has been added to IntlMessageFormat for: "+e.join(", ")+", or the default locale: "+s)}},3885:(e,t)=>{"use strict"
t.default={locale:"en",pluralRuleFunction:function(e,t){var n=String(e).split("."),r=!n[1],o=Number(n[0])==e,i=o&&n[0].slice(-1),s=o&&n[0].slice(-2)
return t?1==i&&11!=s?"one":2==i&&12!=s?"two":3==i&&13!=s?"few":"other":1==e&&r?"one":"other"},numbers:{decimal:{long:[[1e3,{one:["0 thousand",1],other:["0 thousand",1]}],[1e4,{one:["00 thousand",2],other:["00 thousand",2]}],[1e5,{one:["000 thousand",3],other:["000 thousand",3]}],[1e6,{one:["0 million",1],other:["0 million",1]}],[1e7,{one:["00 million",2],other:["00 million",2]}],[1e8,{one:["000 million",3],other:["000 million",3]}],[1e9,{one:["0 billion",1],other:["0 billion",1]}],[1e10,{one:["00 billion",2],other:["00 billion",2]}],[1e11,{one:["000 billion",3],other:["000 billion",3]}],[1e12,{one:["0 trillion",1],other:["0 trillion",1]}],[1e13,{one:["00 trillion",2],other:["00 trillion",2]}],[1e14,{one:["000 trillion",3],other:["000 trillion",3]}]],short:[[1e3,{one:["0K",1],other:["0K",1]}],[1e4,{one:["00K",2],other:["00K",2]}],[1e5,{one:["000K",3],other:["000K",3]}],[1e6,{one:["0M",1],other:["0M",1]}],[1e7,{one:["00M",2],other:["00M",2]}],[1e8,{one:["000M",3],other:["000M",3]}],[1e9,{one:["0B",1],other:["0B",1]}],[1e10,{one:["00B",2],other:["00B",2]}],[1e11,{one:["000B",3],other:["000B",3]}],[1e12,{one:["0T",1],other:["0T",1]}],[1e13,{one:["00T",2],other:["00T",2]}],[1e14,{one:["000T",3],other:["000T",3]}]]}}}},6187:(e,t,n)=>{"use strict"
var r=n(8224),o=function(){try{return!!Object.defineProperty({},"a",{})}catch(e){return!1}}(),i=(!o&&Object.prototype.__defineGetter__,o?Object.defineProperty:function(e,t,n){"get"in n&&e.__defineGetter__?e.__defineGetter__(t,n.get):r.hop.call(e,t)&&!("value"in n)||(e[t]=n.value)}),s=Object.create||function(e,t){var n,o
function s(){}for(o in s.prototype=e,n=new s,t)r.hop.call(t,o)&&i(n,o,t[o])
return n}
t.defineProperty=i,t.objCreate=s},1561:(e,t,n)=>{"use strict"
var r=n(297),o=n(3885)
r.default.__addLocaleData(o.default),r.default.defaultLocale="en",t.Z=r.default},8224:(e,t)=>{"use strict"
t.extend=function(e){var t,r,o,i,s=Array.prototype.slice.call(arguments,1)
for(t=0,r=s.length;t<r;t+=1)if(o=s[t])for(i in o)n.call(o,i)&&(e[i]=o[i])
return e}
var n=Object.prototype.hasOwnProperty
t.hop=n},871:(e,t,n)=>{"use strict"
var r=n(8488).Z
n(5918),(t=e.exports=r).default=t},520:(e,t,n)=>{"use strict"
var r=n(6236),o=n(3395),i=n(2367)
t.default=c
var s=["second","second-short","minute","minute-short","hour","hour-short","day","day-short","month","month-short","year","year-short"],a=["best fit","numeric"]
function c(e,t){t=t||{},i.isArray(e)&&(e=e.concat()),i.defineProperty(this,"_locale",{value:this._resolveLocale(e)}),i.defineProperty(this,"_options",{value:{style:this._resolveStyle(t.style),units:this._isValidUnits(t.units)&&t.units}}),i.defineProperty(this,"_locales",{value:e}),i.defineProperty(this,"_fields",{value:this._findFields(this._locale)}),i.defineProperty(this,"_messages",{value:i.objCreate(null)})
var n=this
this.format=function(e,t){return n._format(e,t)}}i.defineProperty(c,"__localeData__",{value:i.objCreate(null)}),i.defineProperty(c,"__addLocaleData",{value:function(e){if(!e||!e.locale)throw new Error("Locale data provided to IntlRelativeFormat is missing a `locale` property value")
c.__localeData__[e.locale.toLowerCase()]=e,r.default.__addLocaleData(e)}}),i.defineProperty(c,"defaultLocale",{enumerable:!0,writable:!0,value:void 0}),i.defineProperty(c,"thresholds",{enumerable:!0,value:{second:45,"second-short":45,minute:45,"minute-short":45,hour:22,"hour-short":22,day:26,"day-short":26,month:11,"month-short":11}}),c.prototype.resolvedOptions=function(){return{locale:this._locale,style:this._options.style,units:this._options.units}},c.prototype._compileMessage=function(e){var t,n=this._locales,o=(this._locale,this._fields[e].relativeTime),i="",s=""
for(t in o.future)o.future.hasOwnProperty(t)&&(i+=" "+t+" {"+o.future[t].replace("{0}","#")+"}")
for(t in o.past)o.past.hasOwnProperty(t)&&(s+=" "+t+" {"+o.past[t].replace("{0}","#")+"}")
var a="{when, select, future {{0, plural, "+i+"}}past {{0, plural, "+s+"}}}"
return new r.default(a,n)},c.prototype._getMessage=function(e){var t=this._messages
return t[e]||(t[e]=this._compileMessage(e)),t[e]},c.prototype._getRelativeUnits=function(e,t){var n=this._fields[t]
if(n.relative)return n.relative[e]},c.prototype._findFields=function(e){for(var t=c.__localeData__,n=t[e.toLowerCase()];n;){if(n.fields)return n.fields
n=n.parentLocale&&t[n.parentLocale.toLowerCase()]}throw new Error("Locale data added to IntlRelativeFormat is missing `fields` for :"+e)},c.prototype._format=function(e,t){var n=t&&void 0!==t.now?t.now:i.dateNow()
if(void 0===e&&(e=n),!isFinite(n))throw new RangeError("The `now` option provided to IntlRelativeFormat#format() is not in valid range.")
if(!isFinite(e))throw new RangeError("The date value provided to IntlRelativeFormat#format() is not in valid range.")
var r=o.default(n,e),s=this._options.units||this._selectUnits(r),a=r[s]
if("numeric"!==this._options.style){var c=this._getRelativeUnits(a,s)
if(c)return c}return this._getMessage(s).format({0:Math.abs(a),when:a<0?"past":"future"})},c.prototype._isValidUnits=function(e){if(!e||i.arrIndexOf.call(s,e)>=0)return!0
if("string"==typeof e){var t=/s$/.test(e)&&e.substr(0,e.length-1)
if(t&&i.arrIndexOf.call(s,t)>=0)throw new Error('"'+e+'" is not a valid IntlRelativeFormat `units` value, did you mean: '+t)}throw new Error('"'+e+'" is not a valid IntlRelativeFormat `units` value, it must be one of: "'+s.join('", "')+'"')},c.prototype._resolveLocale=function(e){"string"==typeof e&&(e=[e]),e=(e||[]).concat(c.defaultLocale)
var t,n,r,o,i=c.__localeData__
for(t=0,n=e.length;t<n;t+=1)for(r=e[t].toLowerCase().split("-");r.length;){if(o=i[r.join("-")])return o.locale
r.pop()}var s=e.pop()
throw new Error("No locale data has been added to IntlRelativeFormat for: "+e.join(", ")+", or the default locale: "+s)},c.prototype._resolveStyle=function(e){if(!e)return a[0]
if(i.arrIndexOf.call(a,e)>=0)return e
throw new Error('"'+e+'" is not a valid IntlRelativeFormat `style` value, it must be one of: "'+a.join('", "')+'"')},c.prototype._selectUnits=function(e){var t,n,r,o=s.filter((function(e){return e.indexOf("-short")<1}))
for(t=0,n=o.length;t<n&&(r=o[t],!(Math.abs(e[r])<c.thresholds[r]));t+=1);return r}},3395:(e,t)=>{"use strict"
var n=Math.round
t.default=function(e,t){var r=n((t=+t)-(e=+e)),o=n(r/1e3),i=n(o/60),s=n(i/60),a=n(s/24),c=n(a/7),u=400*a/146097,l=n(12*u),p=n(u)
return{millisecond:r,second:o,"second-short":o,minute:i,"minute-short":i,hour:s,"hour-short":s,day:a,"day-short":a,week:c,"week-short":c,month:l,"month-short":l,year:p,"year-short":p}}},4046:(e,t)=>{"use strict"
t.default={locale:"en",pluralRuleFunction:function(e,t){var n=String(e).split("."),r=!n[1],o=Number(n[0])==e,i=o&&n[0].slice(-1),s=o&&n[0].slice(-2)
return t?1==i&&11!=s?"one":2==i&&12!=s?"two":3==i&&13!=s?"few":"other":1==e&&r?"one":"other"},fields:{year:{displayName:"year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{one:"in {0} year",other:"in {0} years"},past:{one:"{0} year ago",other:"{0} years ago"}}},"year-short":{displayName:"yr.",relative:{0:"this yr.",1:"next yr.","-1":"last yr."},relativeTime:{future:{one:"in {0} yr.",other:"in {0} yr."},past:{one:"{0} yr. ago",other:"{0} yr. ago"}}},month:{displayName:"month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{one:"in {0} month",other:"in {0} months"},past:{one:"{0} month ago",other:"{0} months ago"}}},"month-short":{displayName:"mo.",relative:{0:"this mo.",1:"next mo.","-1":"last mo."},relativeTime:{future:{one:"in {0} mo.",other:"in {0} mo."},past:{one:"{0} mo. ago",other:"{0} mo. ago"}}},day:{displayName:"day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{one:"in {0} day",other:"in {0} days"},past:{one:"{0} day ago",other:"{0} days ago"}}},"day-short":{displayName:"day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{one:"in {0} day",other:"in {0} days"},past:{one:"{0} day ago",other:"{0} days ago"}}},hour:{displayName:"hour",relative:{0:"this hour"},relativeTime:{future:{one:"in {0} hour",other:"in {0} hours"},past:{one:"{0} hour ago",other:"{0} hours ago"}}},"hour-short":{displayName:"hr.",relative:{0:"this hour"},relativeTime:{future:{one:"in {0} hr.",other:"in {0} hr."},past:{one:"{0} hr. ago",other:"{0} hr. ago"}}},minute:{displayName:"minute",relative:{0:"this minute"},relativeTime:{future:{one:"in {0} minute",other:"in {0} minutes"},past:{one:"{0} minute ago",other:"{0} minutes ago"}}},"minute-short":{displayName:"min.",relative:{0:"this minute"},relativeTime:{future:{one:"in {0} min.",other:"in {0} min."},past:{one:"{0} min. ago",other:"{0} min. ago"}}},second:{displayName:"second",relative:{0:"now"},relativeTime:{future:{one:"in {0} second",other:"in {0} seconds"},past:{one:"{0} second ago",other:"{0} seconds ago"}}},"second-short":{displayName:"sec.",relative:{0:"now"},relativeTime:{future:{one:"in {0} sec.",other:"in {0} sec."},past:{one:"{0} sec. ago",other:"{0} sec. ago"}}}}}},2367:(e,t)=>{"use strict"
var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString,o=function(){try{return!!Object.defineProperty({},"a",{})}catch(e){return!1}}(),i=(!o&&Object.prototype.__defineGetter__,o?Object.defineProperty:function(e,t,r){"get"in r&&e.__defineGetter__?e.__defineGetter__(t,r.get):n.call(e,t)&&!("value"in r)||(e[t]=r.value)}),s=Object.create||function(e,t){var r,o
function s(){}for(o in s.prototype=e,r=new s,t)n.call(t,o)&&i(r,o,t[o])
return r},a=Array.prototype.indexOf||function(e,t){var n=this
if(!n.length)return-1
for(var r=t||0,o=n.length;r<o;r++)if(n[r]===e)return r
return-1},c=Array.isArray||function(e){return"[object Array]"===r.call(e)},u=Date.now||function(){return(new Date).getTime()}
t.defineProperty=i,t.objCreate=s,t.arrIndexOf=a,t.isArray=c,t.dateNow=u},8488:(e,t,n)=>{"use strict"
var r=n(520),o=n(4046)
r.default.__addLocaleData(o.default),r.default.defaultLocale="en",t.Z=r.default},7155:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{BrowserClient:()=>Me,Hub:()=>l.Xb,Integrations:()=>it,SDK_NAME:()=>nt,SDK_VERSION:()=>O,Scope:()=>u.s,Severity:()=>s,Status:()=>a,Transports:()=>i,addBreadcrumb:()=>m,addGlobalEventProcessor:()=>u.c,captureEvent:()=>h,captureException:()=>f,captureMessage:()=>d,close:()=>et,configureScope:()=>v,defaultIntegrations:()=>Ze,eventFromException:()=>ie,eventFromMessage:()=>se,flush:()=>Qe,forceLoad:()=>Ke,getCurrentHub:()=>l.Gd,getHubFromCarrier:()=>l.vi,init:()=>Je,injectReportDialog:()=>Re,lastEventId:()=>$e,makeMain:()=>l.pj,onLoad:()=>Xe,setContext:()=>g,setExtra:()=>b,setExtras:()=>_,setTag:()=>w,setTags:()=>y,setUser:()=>E,showReportDialog:()=>Ye,startTransaction:()=>x,withScope:()=>S,wrap:()=>tt})
var r={}
n.r(r),n.d(r,{FunctionToString:()=>Fe,InboundFilters:()=>Ne})
var o={}
n.r(o),n.d(o,{Breadcrumbs:()=>Le,Dedupe:()=>ze,GlobalHandlers:()=>Be,LinkedErrors:()=>qe,TryCatch:()=>He,UserAgent:()=>Ve})
var i={}
n.r(i),n.d(i,{BaseTransport:()=>we,FetchTransport:()=>Ee,XHRTransport:()=>Se})
var s,a,c=n(7480)
!function(e){e.Fatal="fatal",e.Error="error",e.Warning="warning",e.Log="log",e.Info="info",e.Debug="debug",e.Critical="critical"}(s||(s={})),function(e){e.fromString=function(t){switch(t){case"debug":return e.Debug
case"info":return e.Info
case"warn":case"warning":return e.Warning
case"error":return e.Error
case"fatal":return e.Fatal
case"critical":return e.Critical
default:return e.Log}}}(s||(s={})),function(e){e.Unknown="unknown",e.Skipped="skipped",e.Success="success",e.RateLimit="rate_limit",e.Invalid="invalid",e.Failed="failed"}(a||(a={})),function(e){e.fromHttpCode=function(t){return t>=200&&t<300?e.Success:429===t?e.RateLimit:t>=400&&t<500?e.Invalid:t>=500?e.Failed:e.Unknown}}(a||(a={}))
var u=n(1911),l=n(6599)
function p(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
var r=(0,l.Gd)()
if(r&&r[e])return r[e].apply(r,(0,c.fl)(t))
throw new Error("No hub defined or "+e+" was not found on the hub, please open a bug report.")}function f(e,t){var n
try{throw new Error("Sentry syntheticException")}catch(e){n=e}return p("captureException",e,{captureContext:t,originalException:e,syntheticException:n})}function d(e,t){var n
try{throw new Error(e)}catch(e){n=e}var r="string"!=typeof t?{captureContext:t}:void 0
return p("captureMessage",e,"string"==typeof t?t:void 0,(0,c.pi)({originalException:e,syntheticException:n},r))}function h(e){return p("captureEvent",e)}function v(e){p("configureScope",e)}function m(e){p("addBreadcrumb",e)}function g(e,t){p("setContext",e,t)}function _(e){p("setExtras",e)}function y(e){p("setTags",e)}function b(e,t){p("setExtra",e,t)}function w(e,t){p("setTag",e,t)}function E(e){p("setUser",e)}function S(e){p("withScope",e)}function x(e,t){return p("startTransaction",(0,c.pi)({},e),t)}var O="6.16.1",k=n(9531),T=n(2967),C=n(84),j=n(6438),R=n(190),P=n(8146),D=n(6612),A=n(8505),L=n(7927),M=n(9399),I=n(6589),N=[]
function F(e){return e.reduce((function(e,t){return e.every((function(e){return t.name!==e.name}))&&e.push(t),e}),[])}var U="Not capturing exception because it's already been captured.",W=function(){function e(e,t){this._integrations={},this._numProcessing=0,this._backend=new e(t),this._options=t,t.dsn&&(this._dsn=new C.l(t.dsn))}return e.prototype.captureException=function(e,t,n){var r=this
if(!(0,j.YO)(e)){var o=t&&t.event_id
return this._process(this._getBackend().eventFromException(e,t).then((function(e){return r._captureEvent(e,t,n)})).then((function(e){o=e}))),o}R.k.log(U)},e.prototype.captureMessage=function(e,t,n,r){var o=this,i=n&&n.event_id,s=(0,P.pt)(e)?this._getBackend().eventFromMessage(String(e),t,n):this._getBackend().eventFromException(e,n)
return this._process(s.then((function(e){return o._captureEvent(e,n,r)})).then((function(e){i=e}))),i},e.prototype.captureEvent=function(e,t,n){var r
if(!(null===(r=t)||void 0===r?void 0:r.originalException)||!(0,j.YO)(t.originalException)){var o=t&&t.event_id
return this._process(this._captureEvent(e,t,n).then((function(e){o=e}))),o}R.k.log(U)},e.prototype.captureSession=function(e){this._isEnabled()?"string"!=typeof e.release?R.k.warn("Discarded session because of missing or non-string release"):(this._sendSession(e),e.update({init:!1})):R.k.warn("SDK not enabled, will not capture session.")},e.prototype.getDsn=function(){return this._dsn},e.prototype.getOptions=function(){return this._options},e.prototype.getTransport=function(){return this._getBackend().getTransport()},e.prototype.flush=function(e){var t=this
return this._isClientDoneProcessing(e).then((function(n){return t.getTransport().close(e).then((function(e){return n&&e}))}))},e.prototype.close=function(e){var t=this
return this.flush(e).then((function(e){return t.getOptions().enabled=!1,e}))},e.prototype.setupIntegrations=function(){var e,t
this._isEnabled()&&!this._integrations.initialized&&(this._integrations=(e=this._options,t={},function(e){var t=e.defaultIntegrations&&(0,c.fl)(e.defaultIntegrations)||[],n=e.integrations,r=(0,c.fl)(F(t))
Array.isArray(n)?r=(0,c.fl)(r.filter((function(e){return n.every((function(t){return t.name!==e.name}))})),F(n)):"function"==typeof n&&(r=n(r),r=Array.isArray(r)?r:[r])
var o=r.map((function(e){return e.name})),i="Debug"
return-1!==o.indexOf(i)&&r.push.apply(r,(0,c.fl)(r.splice(o.indexOf(i),1))),r}(e).forEach((function(e){t[e.name]=e,function(e){-1===N.indexOf(e.name)&&(e.setupOnce(u.c,l.Gd),N.push(e.name),R.k.log("Integration installed: "+e.name))}(e)})),Object.defineProperty(t,"initialized",{value:!0}),t))},e.prototype.getIntegration=function(e){try{return this._integrations[e.id]||null}catch(t){return R.k.warn("Cannot retrieve integration "+e.id+" from the current Client"),null}},e.prototype._updateSessionFromEvent=function(e,t){var n,r,o=!1,i=!1,s=t.exception&&t.exception.values
if(s){i=!0
try{for(var a=(0,c.XA)(s),u=a.next();!u.done;u=a.next()){var l=u.value.mechanism
if(l&&!1===l.handled){o=!0
break}}}catch(e){n={error:e}}finally{try{u&&!u.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}}var p=e.status===k.$.Ok;(p&&0===e.errors||p&&o)&&(e.update((0,c.pi)((0,c.pi)({},o&&{status:k.$.Crashed}),{errors:e.errors||Number(i||o)})),this.captureSession(e))},e.prototype._sendSession=function(e){this._getBackend().sendSession(e)},e.prototype._isClientDoneProcessing=function(e){var t=this
return new D.c((function(n){var r=0,o=setInterval((function(){0==t._numProcessing?(clearInterval(o),n(!0)):(r+=1,e&&r>=e&&(clearInterval(o),n(!1)))}),1)}))},e.prototype._getBackend=function(){return this._backend},e.prototype._isEnabled=function(){return!1!==this.getOptions().enabled&&void 0!==this._dsn},e.prototype._prepareEvent=function(e,t,n){var r=this,o=this.getOptions().normalizeDepth,i=void 0===o?3:o,s=(0,c.pi)((0,c.pi)({},e),{event_id:e.event_id||(n&&n.event_id?n.event_id:(0,j.DM)()),timestamp:e.timestamp||(0,A.yW)()})
this._applyClientOptions(s),this._applyIntegrationsMetadata(s)
var a=t
n&&n.captureContext&&(a=u.s.clone(a).update(n.captureContext))
var l=D.c.resolve(s)
return a&&(l=a.applyToEvent(s,n)),l.then((function(e){return"number"==typeof i&&i>0?r._normalizeEvent(e,i):e}))},e.prototype._normalizeEvent=function(e,t){if(!e)return null
var n=(0,c.pi)((0,c.pi)((0,c.pi)((0,c.pi)((0,c.pi)({},e),e.breadcrumbs&&{breadcrumbs:e.breadcrumbs.map((function(e){return(0,c.pi)((0,c.pi)({},e),e.data&&{data:(0,L.Fv)(e.data,t)})}))}),e.user&&{user:(0,L.Fv)(e.user,t)}),e.contexts&&{contexts:(0,L.Fv)(e.contexts,t)}),e.extra&&{extra:(0,L.Fv)(e.extra,t)})
e.contexts&&e.contexts.trace&&(n.contexts.trace=e.contexts.trace)
var r=this.getOptions()._experiments
return(void 0===r?{}:r).ensureNoCircularStructures?(0,L.Fv)(n):n},e.prototype._applyClientOptions=function(e){var t=this.getOptions(),n=t.environment,r=t.release,o=t.dist,i=t.maxValueLength,s=void 0===i?250:i
"environment"in e||(e.environment="environment"in t?n:"production"),void 0===e.release&&void 0!==r&&(e.release=r),void 0===e.dist&&void 0!==o&&(e.dist=o),e.message&&(e.message=(0,M.$G)(e.message,s))
var a=e.exception&&e.exception.values&&e.exception.values[0]
a&&a.value&&(a.value=(0,M.$G)(a.value,s))
var c=e.request
c&&c.url&&(c.url=(0,M.$G)(c.url,s))},e.prototype._applyIntegrationsMetadata=function(e){var t=Object.keys(this._integrations)
t.length>0&&(e.sdk=e.sdk||{},e.sdk.integrations=(0,c.fl)(e.sdk.integrations||[],t))},e.prototype._sendEvent=function(e){this._getBackend().sendEvent(e)},e.prototype._captureEvent=function(e,t,n){return this._processEvent(e,t,n).then((function(e){return e.event_id}),(function(e){R.k.error(e)}))},e.prototype._processEvent=function(e,t,n){var r,o,i=this,s=this.getOptions(),a=s.beforeSend,c=s.sampleRate,u=this.getTransport()
if(!this._isEnabled())return D.c.reject(new I.b("SDK not enabled, will not capture event."))
var l="transaction"===e.type
return!l&&"number"==typeof c&&Math.random()>c?(null===(o=(r=u).recordLostEvent)||void 0===o||o.call(r,T.k.SampleRate,"event"),D.c.reject(new I.b("Discarding event because it's not included in the random sample (sampling rate = "+c+")"))):this._prepareEvent(e,n,t).then((function(n){var r,o
if(null===n)throw null===(o=(r=u).recordLostEvent)||void 0===o||o.call(r,T.k.EventProcessor,e.type||"event"),new I.b("An event processor returned null, will not send event.")
if(t&&t.data&&!0===t.data.__sentry__||l||!a)return n
var s=a(n,t)
return i._ensureBeforeSendRv(s)})).then((function(t){var r,o
if(null===t)throw null===(o=(r=u).recordLostEvent)||void 0===o||o.call(r,T.k.BeforeSend,e.type||"event"),new I.b("`beforeSend` returned `null`, will not send event.")
var s=n&&n.getSession&&n.getSession()
return!l&&s&&i._updateSessionFromEvent(s,t),i._sendEvent(t),t})).then(null,(function(e){if(e instanceof I.b)throw e
throw i.captureException(e,{data:{__sentry__:!0},originalException:e}),new I.b("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: "+e)}))},e.prototype._process=function(e){var t=this
this._numProcessing+=1,e.then((function(e){return t._numProcessing-=1,e}),(function(e){return t._numProcessing-=1,e}))},e.prototype._ensureBeforeSendRv=function(e){var t="`beforeSend` method has to return `null` or a valid event."
if((0,P.J8)(e))return e.then((function(e){if(!(0,P.PO)(e)&&null!==e)throw new I.b(t)
return e}),(function(e){throw new I.b("beforeSend rejected with "+e)}))
if(!(0,P.PO)(e)&&null!==e)throw new I.b(t)
return e},e}(),H=n(4387),B=function(){function e(){}return e.prototype.sendEvent=function(e){return D.c.resolve({reason:"NoopTransport: Event has been skipped because no Dsn is configured.",status:a.Skipped})},e.prototype.close=function(e){return D.c.resolve(!0)},e}(),q=function(){function e(e){this._options=e,this._options.dsn||R.k.warn("No DSN provided, backend will not do anything."),this._transport=this._setupTransport()}return e.prototype.eventFromException=function(e,t){throw new I.b("Backend has to implement `eventFromException` method")},e.prototype.eventFromMessage=function(e,t,n){throw new I.b("Backend has to implement `eventFromMessage` method")},e.prototype.sendEvent=function(e){this._transport.sendEvent(e).then(null,(function(e){R.k.error("Error while sending event: "+e)}))},e.prototype.sendSession=function(e){this._transport.sendSession?this._transport.sendSession(e).then(null,(function(e){R.k.error("Error while sending session: "+e)})):R.k.warn("Dropping session because custom transport doesn't implement sendSession")},e.prototype.getTransport=function(){return this._transport},e.prototype._setupTransport=function(){return new B},e}(),z=n(2651),G="?",V=/^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,Z=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,J=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,Y=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,$=/\((\S*)(?::(\d+))(?::(\d+))\)/,K=/Minified React error #\d+;/i
function X(e){var t=null,n=0
e&&("number"==typeof e.framesToPop?n=e.framesToPop:K.test(e.message)&&(n=1))
try{if(t=function(e){if(!e||!e.stacktrace)return null
for(var t,n=/ line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,r=/ line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i,o=e.stacktrace.split("\n"),i=[],s=0;s<o.length;s+=2){var a=null;(t=n.exec(o[s]))?a={url:t[2],func:t[3],args:[],line:+t[1],column:null}:(t=r.exec(o[s]))&&(a={url:t[6],func:t[3]||t[4],args:t[5]?t[5].split(","):[],line:+t[1],column:+t[2]}),a&&(!a.func&&a.line&&(a.func=G),i.push(a))}return i.length?{message:te(e),name:e.name,stack:i}:null}(e))return ee(t,n)}catch(e){}try{if(t=function(e){var t,n
if(!e||!e.stack)return null
for(var r,o,i,s=[],a=e.stack.split("\n"),u=0;u<a.length;++u){if(o=V.exec(a[u])){var l=o[2]&&0===o[2].indexOf("native")
o[2]&&0===o[2].indexOf("eval")&&(r=$.exec(o[2]))&&(o[2]=r[1],o[3]=r[2],o[4]=r[3])
var p=o[2]&&0===o[2].indexOf("address at ")?o[2].substr("address at ".length):o[2],f=o[1]||G
f=(t=(0,c.CR)(Q(f,p),2))[0],i={url:p=t[1],func:f,args:l?[o[2]]:[],line:o[3]?+o[3]:null,column:o[4]?+o[4]:null}}else if(o=J.exec(a[u]))i={url:o[2],func:o[1]||G,args:[],line:+o[3],column:o[4]?+o[4]:null}
else{if(!(o=Z.exec(a[u])))continue
o[3]&&o[3].indexOf(" > eval")>-1&&(r=Y.exec(o[3]))?(o[1]=o[1]||"eval",o[3]=r[1],o[4]=r[2],o[5]=""):0!==u||o[5]||void 0===e.columnNumber||(s[0].column=e.columnNumber+1),p=o[3],f=o[1]||G,f=(n=(0,c.CR)(Q(f,p),2))[0],i={url:p=n[1],func:f,args:o[2]?o[2].split(","):[],line:o[4]?+o[4]:null,column:o[5]?+o[5]:null}}!i.func&&i.line&&(i.func=G),s.push(i)}return s.length?{message:te(e),name:e.name,stack:s}:null}(e))return ee(t,n)}catch(e){}return{message:te(e),name:e&&e.name,stack:[],failed:!0}}var Q=function(e,t){var n=-1!==e.indexOf("safari-extension"),r=-1!==e.indexOf("safari-web-extension")
return n||r?[-1!==e.indexOf("@")?e.split("@")[0]:G,n?"safari-extension:"+t:"safari-web-extension:"+t]:[e,t]}
function ee(e,t){try{return(0,c.pi)((0,c.pi)({},e),{stack:e.stack.slice(t)})}catch(t){return e}}function te(e){var t=e&&e.message
return t?t.error&&"string"==typeof t.error.message?t.error.message:t:"No error message"}function ne(e){var t=oe(e.stack),n={type:e.name,value:e.message}
return t&&t.length&&(n.stacktrace={frames:t}),void 0===n.type&&""===n.value&&(n.value="Unrecoverable error caught"),n}function re(e){return{exception:{values:[ne(e)]}}}function oe(e){if(!e||!e.length)return[]
var t=e,n=t[0].func||"",r=t[t.length-1].func||""
return-1===n.indexOf("captureMessage")&&-1===n.indexOf("captureException")||(t=t.slice(1)),-1!==r.indexOf("sentryWrapped")&&(t=t.slice(0,-1)),t.slice(0,50).map((function(e){return{colno:null===e.column?void 0:e.column,filename:e.url||t[0].url,function:e.func||"?",in_app:!0,lineno:null===e.line?void 0:e.line}})).reverse()}function ie(e,t,n){var r=ae(t,n&&n.syntheticException||void 0,{attachStacktrace:e.attachStacktrace})
return(0,j.EG)(r),r.level=s.Error,n&&n.event_id&&(r.event_id=n.event_id),D.c.resolve(r)}function se(e,t,n,r){void 0===n&&(n=s.Info)
var o=ce(t,r&&r.syntheticException||void 0,{attachStacktrace:e.attachStacktrace})
return o.level=n,r&&r.event_id&&(o.event_id=r.event_id),D.c.resolve(o)}function ae(e,t,n){var r
if(void 0===n&&(n={}),(0,P.VW)(e)&&e.error)return re(X(e=e.error))
if((0,P.TX)(e)||(0,P.fm)(e)){var o=e
if("stack"in e)r=re(X(e))
else{var i=o.name||((0,P.TX)(o)?"DOMError":"DOMException"),s=o.message?i+": "+o.message:i
r=ce(s,t,n),(0,j.Db)(r,s)}return"code"in o&&(r.tags=(0,c.pi)((0,c.pi)({},r.tags),{"DOMException.code":""+o.code})),r}return(0,P.VZ)(e)?r=re(X(e)):(0,P.PO)(e)||(0,P.cO)(e)?(r=function(e,t,n){var r={exception:{values:[{type:(0,P.cO)(e)?e.constructor.name:n?"UnhandledRejection":"Error",value:"Non-Error "+(n?"promise rejection":"exception")+" captured with keys: "+(0,L.zf)(e)}]},extra:{__serialized__:(0,L.Qy)(e)}}
if(t){var o=oe(X(t).stack)
r.stacktrace={frames:o}}return r}(e,t,n.rejection),(0,j.EG)(r,{synthetic:!0}),r):(r=ce(e,t,n),(0,j.Db)(r,""+e,void 0),(0,j.EG)(r,{synthetic:!0}),r)}function ce(e,t,n){void 0===n&&(n={})
var r={message:e}
if(n.attachStacktrace&&t){var o=oe(X(t).stack)
r.stacktrace={frames:o}}return r}function ue(e){if(e.metadata&&e.metadata.sdk){var t=e.metadata.sdk
return{name:t.name,version:t.version}}}function le(e,t){return t?(e.sdk=e.sdk||{},e.sdk.name=e.sdk.name||t.name,e.sdk.version=e.sdk.version||t.version,e.sdk.integrations=(0,c.fl)(e.sdk.integrations||[],t.integrations||[]),e.sdk.packages=(0,c.fl)(e.sdk.packages||[],t.packages||[]),e):e}function pe(e,t){var n=ue(t),r="aggregates"in e?"sessions":"session"
return{body:JSON.stringify((0,c.pi)((0,c.pi)({sent_at:(new Date).toISOString()},n&&{sdk:n}),t.forceEnvelope()&&{dsn:t.getDsn().toString()}))+"\n"+JSON.stringify({type:r})+"\n"+JSON.stringify(e),type:r,url:t.getEnvelopeEndpointWithUrlEncodedAuth()}}function fe(e,t){var n=ue(t),r=e.type||"event",o="transaction"===r||t.forceEnvelope(),i=e.debug_meta||{},s=i.transactionSampling,a=(0,c._T)(i,["transactionSampling"]),u=s||{},l=u.method,p=u.rate
0===Object.keys(a).length?delete e.debug_meta:e.debug_meta=a
var f={body:JSON.stringify(n?le(e,t.metadata.sdk):e),type:r,url:o?t.getEnvelopeEndpointWithUrlEncodedAuth():t.getStoreEndpointWithUrlEncodedAuth()}
if(o){var d=JSON.stringify((0,c.pi)((0,c.pi)({event_id:e.event_id,sent_at:(new Date).toISOString()},n&&{sdk:n}),t.forceEnvelope()&&{dsn:t.getDsn().toString()}))+"\n"+JSON.stringify({type:r,sample_rates:[{id:l,rate:p}]})+"\n"+f.body
f.body=d}return f}var de,he=function(){function e(e,t,n){void 0===t&&(t={}),this.dsn=e,this._dsnObject=new C.l(e),this.metadata=t,this._tunnel=n}return e.prototype.getDsn=function(){return this._dsnObject},e.prototype.forceEnvelope=function(){return!!this._tunnel},e.prototype.getBaseApiEndpoint=function(){var e=this.getDsn(),t=e.protocol?e.protocol+":":"",n=e.port?":"+e.port:""
return t+"//"+e.host+n+(e.path?"/"+e.path:"")+"/api/"},e.prototype.getStoreEndpoint=function(){return this._getIngestEndpoint("store")},e.prototype.getStoreEndpointWithUrlEncodedAuth=function(){return this.getStoreEndpoint()+"?"+this._encodedAuth()},e.prototype.getEnvelopeEndpointWithUrlEncodedAuth=function(){return this.forceEnvelope()?this._tunnel:this._getEnvelopeEndpoint()+"?"+this._encodedAuth()},e.prototype.getStoreEndpointPath=function(){var e=this.getDsn()
return(e.path?"/"+e.path:"")+"/api/"+e.projectId+"/store/"},e.prototype.getRequestHeaders=function(e,t){var n=this.getDsn(),r=["Sentry sentry_version=7"]
return r.push("sentry_client="+e+"/"+t),r.push("sentry_key="+n.publicKey),n.pass&&r.push("sentry_secret="+n.pass),{"Content-Type":"application/json","X-Sentry-Auth":r.join(", ")}},e.prototype.getReportDialogEndpoint=function(e){void 0===e&&(e={})
var t=this.getDsn(),n=this.getBaseApiEndpoint()+"embed/error-page/",r=[]
for(var o in r.push("dsn="+t.toString()),e)if("dsn"!==o)if("user"===o){if(!e.user)continue
e.user.name&&r.push("name="+encodeURIComponent(e.user.name)),e.user.email&&r.push("email="+encodeURIComponent(e.user.email))}else r.push(encodeURIComponent(o)+"="+encodeURIComponent(e[o]))
return r.length?n+"?"+r.join("&"):n},e.prototype._getEnvelopeEndpoint=function(){return this._getIngestEndpoint("envelope")},e.prototype._getIngestEndpoint=function(e){return this._tunnel?this._tunnel:""+this.getBaseApiEndpoint()+this.getDsn().projectId+"/"+e+"/"},e.prototype._encodedAuth=function(){var e={sentry_key:this.getDsn().publicKey,sentry_version:"7"}
return(0,L._j)(e)},e}(),ve=n(5473),me=n(6995),ge=(0,H.R)()
function _e(){var e,t
if(de)return de
if((0,z.Du)(ge.fetch))return de=ge.fetch.bind(ge)
var n=ge.document,r=ge.fetch
if("function"==typeof(null===(e=n)||void 0===e?void 0:e.createElement))try{var o=n.createElement("iframe")
o.hidden=!0,n.head.appendChild(o),(null===(t=o.contentWindow)||void 0===t?void 0:t.fetch)&&(r=o.contentWindow.fetch),n.head.removeChild(o)}catch(e){R.k.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",e)}return de=r.bind(ge)}var ye={event:"error",transaction:"transaction",session:"session",attachment:"attachment"},be=(0,H.R)(),we=function(){function e(e){var t=this
this.options=e,this._buffer=new ve.D(30),this._rateLimits={},this._outcomes={},this._api=new he(e.dsn,e._metadata,e.tunnel),this.url=this._api.getStoreEndpointWithUrlEncodedAuth(),this.options.sendClientReports&&be.document&&be.document.addEventListener("visibilitychange",(function(){"hidden"===be.document.visibilityState&&t._flushOutcomes()}))}return e.prototype.sendEvent=function(e){throw new I.b("Transport Class has to implement `sendEvent` method")},e.prototype.close=function(e){return this._buffer.drain(e)},e.prototype.recordLostEvent=function(e,t){var n
if(this.options.sendClientReports){var r=ye[t]+":"+e
R.k.log("Adding outcome: "+r),this._outcomes[r]=(null!=(n=this._outcomes[r])?n:0)+1}},e.prototype._flushOutcomes=function(){if(this.options.sendClientReports){var e=this._outcomes
if(this._outcomes={},Object.keys(e).length){R.k.log("Flushing outcomes:\n"+JSON.stringify(e,null,2))
var t=this._api.getEnvelopeEndpointWithUrlEncodedAuth(),n=JSON.stringify((0,c.pi)({},this.options.tunnel&&{dsn:this._api.getDsn().toString()}))+"\n"+JSON.stringify({type:"client_report"})+"\n"+JSON.stringify({timestamp:(0,A.yW)(),discarded_events:Object.keys(e).map((function(t){var n=(0,c.CR)(t.split(":"),2),r=n[0]
return{reason:n[1],category:r,quantity:e[t]}}))})
try{!function(e,t){if("[object Navigator]"===Object.prototype.toString.call(ge&&ge.navigator)&&"function"==typeof ge.navigator.sendBeacon)return ge.navigator.sendBeacon.bind(ge.navigator)(e,t)
if((0,z.Ak)()){var n=_e();(0,me.I)(n(e,{body:t,method:"POST",credentials:"omit",keepalive:!0}))}}(t,n)}catch(e){R.k.error(e)}}else R.k.log("No outcomes to flush")}},e.prototype._handleResponse=function(e){var t=e.requestType,n=e.response,r=e.headers,o=e.resolve,i=e.reject,s=a.fromHttpCode(n.status)
this._handleRateLimit(r)&&R.k.warn("Too many "+t+" requests, backing off until: "+this._disabledUntil(t)),s!==a.Success?i(n):o({status:s})},e.prototype._disabledUntil=function(e){var t=ye[e]
return this._rateLimits[t]||this._rateLimits.all},e.prototype._isRateLimited=function(e){return this._disabledUntil(e)>new Date(Date.now())},e.prototype._handleRateLimit=function(e){var t,n,r,o,i=Date.now(),s=e["x-sentry-rate-limits"],a=e["retry-after"]
if(s){try{for(var u=(0,c.XA)(s.trim().split(",")),l=u.next();!l.done;l=u.next()){var p=l.value.split(":",2),f=parseInt(p[0],10),d=1e3*(isNaN(f)?60:f)
try{for(var h=(r=void 0,(0,c.XA)(p[1].split(";"))),v=h.next();!v.done;v=h.next()){var m=v.value
this._rateLimits[m||"all"]=new Date(i+d)}}catch(e){r={error:e}}finally{try{v&&!v.done&&(o=h.return)&&o.call(h)}finally{if(r)throw r.error}}}}catch(e){t={error:e}}finally{try{l&&!l.done&&(n=u.return)&&n.call(u)}finally{if(t)throw t.error}}return!0}return!!a&&(this._rateLimits.all=new Date(i+(0,j.JY)(i,a)),!0)},e}(),Ee=function(e){function t(t,n){void 0===n&&(n=_e())
var r=e.call(this,t)||this
return r._fetch=n,r}return(0,c.ZT)(t,e),t.prototype.sendEvent=function(e){return this._sendRequest(fe(e,this._api),e)},t.prototype.sendSession=function(e){return this._sendRequest(pe(e,this._api),e)},t.prototype._sendRequest=function(e,t){var n=this
if(this._isRateLimited(e.type))return this.recordLostEvent(T.k.RateLimitBackoff,e.type),Promise.reject({event:t,type:e.type,reason:"Transport for "+e.type+" requests locked till "+this._disabledUntil(e.type)+" due to too many requests.",status:429})
var r={body:e.body,method:"POST",referrerPolicy:(0,z.hv)()?"origin":""}
return void 0!==this.options.fetchParameters&&Object.assign(r,this.options.fetchParameters),void 0!==this.options.headers&&(r.headers=this.options.headers),this._buffer.add((function(){return new D.c((function(t,o){n._fetch(e.url,r).then((function(r){var i={"x-sentry-rate-limits":r.headers.get("X-Sentry-Rate-Limits"),"retry-after":r.headers.get("Retry-After")}
n._handleResponse({requestType:e.type,response:r,headers:i,resolve:t,reject:o})})).catch(o)}))})).then(void 0,(function(t){throw t instanceof I.b?n.recordLostEvent(T.k.QueueOverflow,e.type):n.recordLostEvent(T.k.NetworkError,e.type),t}))},t}(we),Se=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,c.ZT)(t,e),t.prototype.sendEvent=function(e){return this._sendRequest(fe(e,this._api),e)},t.prototype.sendSession=function(e){return this._sendRequest(pe(e,this._api),e)},t.prototype._sendRequest=function(e,t){var n=this
return this._isRateLimited(e.type)?(this.recordLostEvent(T.k.RateLimitBackoff,e.type),Promise.reject({event:t,type:e.type,reason:"Transport for "+e.type+" requests locked till "+this._disabledUntil(e.type)+" due to too many requests.",status:429})):this._buffer.add((function(){return new D.c((function(t,r){var o=new XMLHttpRequest
for(var i in o.onreadystatechange=function(){if(4===o.readyState){var i={"x-sentry-rate-limits":o.getResponseHeader("X-Sentry-Rate-Limits"),"retry-after":o.getResponseHeader("Retry-After")}
n._handleResponse({requestType:e.type,response:o,headers:i,resolve:t,reject:r})}},o.open("POST",e.url),n.options.headers)Object.prototype.hasOwnProperty.call(n.options.headers,i)&&o.setRequestHeader(i,n.options.headers[i])
o.send(e.body)}))})).then(void 0,(function(t){throw t instanceof I.b?n.recordLostEvent(T.k.QueueOverflow,e.type):n.recordLostEvent(T.k.NetworkError,e.type),t}))},t}(we),xe=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,c.ZT)(t,e),t.prototype.eventFromException=function(e,t){return ie(this._options,e,t)},t.prototype.eventFromMessage=function(e,t,n){return void 0===t&&(t=s.Info),se(this._options,e,t,n)},t.prototype._setupTransport=function(){if(!this._options.dsn)return e.prototype._setupTransport.call(this)
var t=(0,c.pi)((0,c.pi)({},this._options.transportOptions),{dsn:this._options.dsn,tunnel:this._options.tunnel,sendClientReports:this._options.sendClientReports,_metadata:this._options._metadata})
return this._options.transport?new this._options.transport(t):(0,z.Ak)()?new Ee(t):new Se(t)},t}(q),Oe=(0,H.R)(),ke=0
function Te(){return ke>0}function Ce(){ke+=1,setTimeout((function(){ke-=1}))}function je(e,t,n){if(void 0===t&&(t={}),"function"!=typeof e)return e
try{if(e.__sentry__)return e
if(e.__sentry_wrapped__)return e.__sentry_wrapped__}catch(t){return e}var r=function(){var r=Array.prototype.slice.call(arguments)
try{n&&"function"==typeof n&&n.apply(this,arguments)
var o=r.map((function(e){return je(e,t)}))
return e.handleEvent?e.handleEvent.apply(this,o):e.apply(this,o)}catch(e){throw Ce(),S((function(o){o.addEventProcessor((function(e){var n=(0,c.pi)({},e)
return t.mechanism&&((0,j.Db)(n,void 0,void 0),(0,j.EG)(n,t.mechanism)),n.extra=(0,c.pi)((0,c.pi)({},n.extra),{arguments:r}),n})),f(e)})),e}}
try{for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o])}catch(e){}e.prototype=e.prototype||{},r.prototype=e.prototype,Object.defineProperty(e,"__sentry_wrapped__",{enumerable:!1,value:r}),Object.defineProperties(r,{__sentry__:{enumerable:!1,value:!0},__sentry_original__:{enumerable:!1,value:e}})
try{Object.getOwnPropertyDescriptor(r,"name").configurable&&Object.defineProperty(r,"name",{get:function(){return e.name}})}catch(e){}return r}function Re(e){if(void 0===e&&(e={}),Oe.document)if(e.eventId)if(e.dsn){var t=Oe.document.createElement("script")
t.async=!0,t.src=new he(e.dsn).getReportDialogEndpoint(e),e.onLoad&&(t.onload=e.onLoad)
var n=Oe.document.head||Oe.document.body
n&&n.appendChild(t)}else R.k.error("Missing dsn option in showReportDialog call")
else R.k.error("Missing eventId option in showReportDialog call")}var Pe,De=n(5670),Ae=n(7809),Le=function(){function e(t){this.name=e.id,this._options=(0,c.pi)({console:!0,dom:!0,fetch:!0,history:!0,sentry:!0,xhr:!0},t)}return e.prototype.addSentryBreadcrumb=function(e){this._options.sentry&&(0,l.Gd)().addBreadcrumb({category:"sentry."+("transaction"===e.type?"transaction":"event"),event_id:e.event_id,level:e.level,message:(0,j.jH)(e)},{event:e})},e.prototype.setupOnce=function(){var e=this
this._options.console&&(0,De.o)({callback:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
e._consoleBreadcrumb.apply(e,(0,c.fl)(t))},type:"console"}),this._options.dom&&(0,De.o)({callback:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
e._domBreadcrumb.apply(e,(0,c.fl)(t))},type:"dom"}),this._options.xhr&&(0,De.o)({callback:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
e._xhrBreadcrumb.apply(e,(0,c.fl)(t))},type:"xhr"}),this._options.fetch&&(0,De.o)({callback:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
e._fetchBreadcrumb.apply(e,(0,c.fl)(t))},type:"fetch"}),this._options.history&&(0,De.o)({callback:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
e._historyBreadcrumb.apply(e,(0,c.fl)(t))},type:"history"})},e.prototype._consoleBreadcrumb=function(e){var t={category:"console",data:{arguments:e.args,logger:"console"},level:s.fromString(e.level),message:(0,M.nK)(e.args," ")}
if("assert"===e.level){if(!1!==e.args[0])return
t.message="Assertion failed: "+((0,M.nK)(e.args.slice(1)," ")||"console.assert"),t.data.arguments=e.args.slice(1)}(0,l.Gd)().addBreadcrumb(t,{input:e.args,level:e.level})},e.prototype._domBreadcrumb=function(e){var t,n="object"==typeof this._options.dom?this._options.dom.serializeAttribute:void 0
"string"==typeof n&&(n=[n])
try{t=e.event.target?(0,Ae.R)(e.event.target,n):(0,Ae.R)(e.event,n)}catch(e){t="<unknown>"}0!==t.length&&(0,l.Gd)().addBreadcrumb({category:"ui."+e.name,message:t},{event:e.event,name:e.name,global:e.global})},e.prototype._xhrBreadcrumb=function(e){if(e.endTimestamp){if(e.xhr.__sentry_own_request__)return
var t=e.xhr.__sentry_xhr__||{},n=t.method,r=t.url,o=t.status_code,i=t.body;(0,l.Gd)().addBreadcrumb({category:"xhr",data:{method:n,url:r,status_code:o},type:"http"},{xhr:e.xhr,input:i})}},e.prototype._fetchBreadcrumb=function(e){e.endTimestamp&&(e.fetchData.url.match(/sentry_key/)&&"POST"===e.fetchData.method||(e.error?(0,l.Gd)().addBreadcrumb({category:"fetch",data:e.fetchData,level:s.Error,type:"http"},{data:e.error,input:e.args}):(0,l.Gd)().addBreadcrumb({category:"fetch",data:(0,c.pi)((0,c.pi)({},e.fetchData),{status_code:e.response.status}),type:"http"},{input:e.args,response:e.response})))},e.prototype._historyBreadcrumb=function(e){var t=(0,H.R)(),n=e.from,r=e.to,o=(0,j.en)(t.location.href),i=(0,j.en)(n),s=(0,j.en)(r)
i.path||(i=o),o.protocol===s.protocol&&o.host===s.host&&(r=s.relative),o.protocol===i.protocol&&o.host===i.host&&(n=i.relative),(0,l.Gd)().addBreadcrumb({category:"navigation",data:{from:n,to:r}})},e.id="Breadcrumbs",e}(),Me=function(e){function t(t){return void 0===t&&(t={}),t._metadata=t._metadata||{},t._metadata.sdk=t._metadata.sdk||{name:"sentry.javascript.browser",packages:[{name:"npm:@sentry/browser",version:O}],version:O},e.call(this,xe,t)||this}return(0,c.ZT)(t,e),t.prototype.showReportDialog=function(e){void 0===e&&(e={}),(0,H.R)().document&&(this._isEnabled()?Re((0,c.pi)((0,c.pi)({},e),{dsn:e.dsn||this.getDsn()})):R.k.error("Trying to call showReportDialog with Sentry Client disabled"))},t.prototype._prepareEvent=function(t,n,r){return t.platform=t.platform||"javascript",e.prototype._prepareEvent.call(this,t,n,r)},t.prototype._sendEvent=function(t){var n=this.getIntegration(Le)
n&&n.addSentryBreadcrumb(t),e.prototype._sendEvent.call(this,t)},t}(W),Ie=[/^Script error\.?$/,/^Javascript error: Script error\.? on line 0$/],Ne=function(){function e(t){void 0===t&&(t={}),this._options=t,this.name=e.id}return e.prototype.setupOnce=function(){(0,u.c)((function(t){var n=(0,l.Gd)()
if(!n)return t
var r=n.getIntegration(e)
if(r){var o=n.getClient(),i=o?o.getOptions():{},s="function"==typeof r._mergeOptions?r._mergeOptions(i):{}
return"function"!=typeof r._shouldDropEvent?t:r._shouldDropEvent(t,s)?null:t}return t}))},e.prototype._shouldDropEvent=function(e,t){return this._isSentryError(e,t)?(R.k.warn("Event dropped due to being internal Sentry Error.\nEvent: "+(0,j.jH)(e)),!0):this._isIgnoredError(e,t)?(R.k.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: "+(0,j.jH)(e)),!0):this._isDeniedUrl(e,t)?(R.k.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: "+(0,j.jH)(e)+".\nUrl: "+this._getEventFilterUrl(e)),!0):!this._isAllowedUrl(e,t)&&(R.k.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: "+(0,j.jH)(e)+".\nUrl: "+this._getEventFilterUrl(e)),!0)},e.prototype._isSentryError=function(e,t){if(!t.ignoreInternal)return!1
try{return e&&e.exception&&e.exception.values&&e.exception.values[0]&&"SentryError"===e.exception.values[0].type||!1}catch(e){return!1}},e.prototype._isIgnoredError=function(e,t){return!(!t.ignoreErrors||!t.ignoreErrors.length)&&this._getPossibleEventMessages(e).some((function(e){return t.ignoreErrors.some((function(t){return(0,M.zC)(e,t)}))}))},e.prototype._isDeniedUrl=function(e,t){if(!t.denyUrls||!t.denyUrls.length)return!1
var n=this._getEventFilterUrl(e)
return!!n&&t.denyUrls.some((function(e){return(0,M.zC)(n,e)}))},e.prototype._isAllowedUrl=function(e,t){if(!t.allowUrls||!t.allowUrls.length)return!0
var n=this._getEventFilterUrl(e)
return!n||t.allowUrls.some((function(e){return(0,M.zC)(n,e)}))},e.prototype._mergeOptions=function(e){return void 0===e&&(e={}),{allowUrls:(0,c.fl)(this._options.whitelistUrls||[],this._options.allowUrls||[],e.whitelistUrls||[],e.allowUrls||[]),denyUrls:(0,c.fl)(this._options.blacklistUrls||[],this._options.denyUrls||[],e.blacklistUrls||[],e.denyUrls||[]),ignoreErrors:(0,c.fl)(this._options.ignoreErrors||[],e.ignoreErrors||[],Ie),ignoreInternal:void 0===this._options.ignoreInternal||this._options.ignoreInternal}},e.prototype._getPossibleEventMessages=function(e){if(e.message)return[e.message]
if(e.exception)try{var t=e.exception.values&&e.exception.values[0]||{},n=t.type,r=void 0===n?"":n,o=t.value,i=void 0===o?"":o
return[""+i,r+": "+i]}catch(t){return R.k.error("Cannot extract message for event "+(0,j.jH)(e)),[]}return[]},e.prototype._getLastValidUrl=function(e){var t,n
void 0===e&&(e=[])
for(var r=e.length-1;r>=0;r--){var o=e[r]
if("<anonymous>"!==(null===(t=o)||void 0===t?void 0:t.filename)&&"[native code]"!==(null===(n=o)||void 0===n?void 0:n.filename))return o.filename||null}return null},e.prototype._getEventFilterUrl=function(e){try{if(e.stacktrace){var t=e.stacktrace.frames
return this._getLastValidUrl(t)}if(e.exception){var n=e.exception.values&&e.exception.values[0].stacktrace&&e.exception.values[0].stacktrace.frames
return this._getLastValidUrl(n)}return null}catch(t){return R.k.error("Cannot extract url for event "+(0,j.jH)(e)),null}},e.id="InboundFilters",e}(),Fe=function(){function e(){this.name=e.id}return e.prototype.setupOnce=function(){Pe=Function.prototype.toString,Function.prototype.toString=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
var n=this.__sentry_original__||this
return Pe.apply(n,e)}},e.id="FunctionToString",e}(),Ue=n(7879),We=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],He=function(){function e(t){this.name=e.id,this._options=(0,c.pi)({XMLHttpRequest:!0,eventTarget:!0,requestAnimationFrame:!0,setInterval:!0,setTimeout:!0},t)}return e.prototype.setupOnce=function(){var e=(0,H.R)()
this._options.setTimeout&&(0,L.hl)(e,"setTimeout",this._wrapTimeFunction.bind(this)),this._options.setInterval&&(0,L.hl)(e,"setInterval",this._wrapTimeFunction.bind(this)),this._options.requestAnimationFrame&&(0,L.hl)(e,"requestAnimationFrame",this._wrapRAF.bind(this)),this._options.XMLHttpRequest&&"XMLHttpRequest"in e&&(0,L.hl)(XMLHttpRequest.prototype,"send",this._wrapXHR.bind(this)),this._options.eventTarget&&(Array.isArray(this._options.eventTarget)?this._options.eventTarget:We).forEach(this._wrapEventTarget.bind(this))},e.prototype._wrapTimeFunction=function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
var r=t[0]
return t[0]=je(r,{mechanism:{data:{function:(0,Ue.$)(e)},handled:!0,type:"instrument"}}),e.apply(this,t)}},e.prototype._wrapRAF=function(e){return function(t){return e.call(this,je(t,{mechanism:{data:{function:"requestAnimationFrame",handler:(0,Ue.$)(e)},handled:!0,type:"instrument"}}))}},e.prototype._wrapEventTarget=function(e){var t=(0,H.R)(),n=t[e]&&t[e].prototype
n&&n.hasOwnProperty&&n.hasOwnProperty("addEventListener")&&((0,L.hl)(n,"addEventListener",(function(t){return function(n,r,o){try{"function"==typeof r.handleEvent&&(r.handleEvent=je(r.handleEvent.bind(r),{mechanism:{data:{function:"handleEvent",handler:(0,Ue.$)(r),target:e},handled:!0,type:"instrument"}}))}catch(e){}return t.call(this,n,je(r,{mechanism:{data:{function:"addEventListener",handler:(0,Ue.$)(r),target:e},handled:!0,type:"instrument"}}),o)}})),(0,L.hl)(n,"removeEventListener",(function(e){return function(t,n,r){var o,i=n
try{var s=null===(o=i)||void 0===o?void 0:o.__sentry_wrapped__
s&&e.call(this,t,s,r)}catch(e){}return e.call(this,t,i,r)}})))},e.prototype._wrapXHR=function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
var r=this,o=["onload","onerror","onprogress","onreadystatechange"]
return o.forEach((function(e){e in r&&"function"==typeof r[e]&&(0,L.hl)(r,e,(function(t){var n={mechanism:{data:{function:e,handler:(0,Ue.$)(t)},handled:!0,type:"instrument"}}
return t.__sentry_original__&&(n.mechanism.data.handler=(0,Ue.$)(t.__sentry_original__)),je(t,n)}))})),e.apply(this,t)}},e.id="TryCatch",e}(),Be=function(){function e(t){this.name=e.id,this._onErrorHandlerInstalled=!1,this._onUnhandledRejectionHandlerInstalled=!1,this._options=(0,c.pi)({onerror:!0,onunhandledrejection:!0},t)}return e.prototype.setupOnce=function(){Error.stackTraceLimit=50,this._options.onerror&&(R.k.log("Global Handler attached: onerror"),this._installGlobalOnErrorHandler()),this._options.onunhandledrejection&&(R.k.log("Global Handler attached: onunhandledrejection"),this._installGlobalOnUnhandledRejectionHandler())},e.prototype._installGlobalOnErrorHandler=function(){var t=this
this._onErrorHandlerInstalled||((0,De.o)({callback:function(n){var r=n.error,o=(0,l.Gd)(),i=o.getIntegration(e),s=r&&!0===r.__sentry_own_request__
if(i&&!Te()&&!s){var a=o.getClient(),c=void 0===r&&(0,P.HD)(n.msg)?t._eventFromIncompleteOnError(n.msg,n.url,n.line,n.column):t._enhanceEventWithInitialFrame(ae(r||n.msg,void 0,{attachStacktrace:a&&a.getOptions().attachStacktrace,rejection:!1}),n.url,n.line,n.column);(0,j.EG)(c,{handled:!1,type:"onerror"}),o.captureEvent(c,{originalException:r})}},type:"error"}),this._onErrorHandlerInstalled=!0)},e.prototype._installGlobalOnUnhandledRejectionHandler=function(){var t=this
this._onUnhandledRejectionHandlerInstalled||((0,De.o)({callback:function(n){var r=n
try{"reason"in n?r=n.reason:"detail"in n&&"reason"in n.detail&&(r=n.detail.reason)}catch(e){}var o=(0,l.Gd)(),i=o.getIntegration(e),a=r&&!0===r.__sentry_own_request__
if(!i||Te()||a)return!0
var c=o.getClient(),u=(0,P.pt)(r)?t._eventFromRejectionWithPrimitive(r):ae(r,void 0,{attachStacktrace:c&&c.getOptions().attachStacktrace,rejection:!0})
u.level=s.Error,(0,j.EG)(u,{handled:!1,type:"onunhandledrejection"}),o.captureEvent(u,{originalException:r})},type:"unhandledrejection"}),this._onUnhandledRejectionHandlerInstalled=!0)},e.prototype._eventFromIncompleteOnError=function(e,t,n,r){var o,i=(0,P.VW)(e)?e.message:e,s=i.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i)
s&&(o=s[1],i=s[2])
var a={exception:{values:[{type:o||"Error",value:i}]}}
return this._enhanceEventWithInitialFrame(a,t,n,r)},e.prototype._eventFromRejectionWithPrimitive=function(e){return{exception:{values:[{type:"UnhandledRejection",value:"Non-Error promise rejection captured with value: "+String(e)}]}}},e.prototype._enhanceEventWithInitialFrame=function(e,t,n,r){e.exception=e.exception||{},e.exception.values=e.exception.values||[],e.exception.values[0]=e.exception.values[0]||{},e.exception.values[0].stacktrace=e.exception.values[0].stacktrace||{},e.exception.values[0].stacktrace.frames=e.exception.values[0].stacktrace.frames||[]
var o=isNaN(parseInt(r,10))?void 0:r,i=isNaN(parseInt(n,10))?void 0:n,s=(0,P.HD)(t)&&t.length>0?t:(0,Ae.l)()
return 0===e.exception.values[0].stacktrace.frames.length&&e.exception.values[0].stacktrace.frames.push({colno:o,filename:s,function:"?",in_app:!0,lineno:i}),e},e.id="GlobalHandlers",e}(),qe=function(){function e(t){void 0===t&&(t={}),this.name=e.id,this._key=t.key||"cause",this._limit=t.limit||5}return e.prototype.setupOnce=function(){(0,u.c)((function(t,n){var r=(0,l.Gd)().getIntegration(e)
if(r){var o=r._handler&&r._handler.bind(r)
return"function"==typeof o?o(t,n):t}return t}))},e.prototype._handler=function(e,t){if(!(e.exception&&e.exception.values&&t&&(0,P.V9)(t.originalException,Error)))return e
var n=this._walkErrorTree(t.originalException,this._key)
return e.exception.values=(0,c.fl)(n,e.exception.values),e},e.prototype._walkErrorTree=function(e,t,n){if(void 0===n&&(n=[]),!(0,P.V9)(e[t],Error)||n.length+1>=this._limit)return n
var r=ne(X(e[t]))
return this._walkErrorTree(e[t],t,(0,c.fl)([r],n))},e.id="LinkedErrors",e}(),ze=function(){function e(){this.name=e.id}return e.prototype.setupOnce=function(t,n){t((function(t){var r=n().getIntegration(e)
if(r){try{if(r._shouldDropEvent(t,r._previousEvent))return R.k.warn("Event dropped due to being a duplicate of previously captured event."),null}catch(e){return r._previousEvent=t}return r._previousEvent=t}return t}))},e.prototype._shouldDropEvent=function(e,t){return!(!t||!this._isSameMessageEvent(e,t)&&!this._isSameExceptionEvent(e,t))},e.prototype._isSameMessageEvent=function(e,t){var n=e.message,r=t.message
return!(!n&&!r||n&&!r||!n&&r||n!==r||!this._isSameFingerprint(e,t)||!this._isSameStacktrace(e,t))},e.prototype._getFramesFromEvent=function(e){var t=e.exception
if(t)try{return t.values[0].stacktrace.frames}catch(e){return}else if(e.stacktrace)return e.stacktrace.frames},e.prototype._isSameStacktrace=function(e,t){var n=this._getFramesFromEvent(e),r=this._getFramesFromEvent(t)
if(!n&&!r)return!0
if(n&&!r||!n&&r)return!1
if(n=n,(r=r).length!==n.length)return!1
for(var o=0;o<r.length;o++){var i=r[o],s=n[o]
if(i.filename!==s.filename||i.lineno!==s.lineno||i.colno!==s.colno||i.function!==s.function)return!1}return!0},e.prototype._getExceptionFromEvent=function(e){return e.exception&&e.exception.values&&e.exception.values[0]},e.prototype._isSameExceptionEvent=function(e,t){var n=this._getExceptionFromEvent(t),r=this._getExceptionFromEvent(e)
return!!(n&&r&&n.type===r.type&&n.value===r.value&&this._isSameFingerprint(e,t)&&this._isSameStacktrace(e,t))},e.prototype._isSameFingerprint=function(e,t){var n=e.fingerprint,r=t.fingerprint
if(!n&&!r)return!0
if(n&&!r||!n&&r)return!1
n=n,r=r
try{return!(n.join("")!==r.join(""))}catch(e){return!1}},e.id="Dedupe",e}(),Ge=(0,H.R)(),Ve=function(){function e(){this.name=e.id}return e.prototype.setupOnce=function(){(0,u.c)((function(t){var n,r,o
if((0,l.Gd)().getIntegration(e)){if(!Ge.navigator&&!Ge.location&&!Ge.document)return t
var i=(null===(n=t.request)||void 0===n?void 0:n.url)||(null===(r=Ge.location)||void 0===r?void 0:r.href),s=(Ge.document||{}).referrer,a=(Ge.navigator||{}).userAgent,u=(0,c.pi)((0,c.pi)((0,c.pi)({},null===(o=t.request)||void 0===o?void 0:o.headers),s&&{Referer:s}),a&&{"User-Agent":a}),p=(0,c.pi)((0,c.pi)({},i&&{url:i}),{headers:u})
return(0,c.pi)((0,c.pi)({},t),{request:p})}return t}))},e.id="UserAgent",e}(),Ze=[new Ne,new Fe,new He,new Le,new Be,new qe,new ze,new Ve]
function Je(e){if(void 0===e&&(e={}),void 0===e.defaultIntegrations&&(e.defaultIntegrations=Ze),void 0===e.release){var t=(0,H.R)()
t.SENTRY_RELEASE&&t.SENTRY_RELEASE.id&&(e.release=t.SENTRY_RELEASE.id)}void 0===e.autoSessionTracking&&(e.autoSessionTracking=!0),void 0===e.sendClientReports&&(e.sendClientReports=!0),function(e,t){var n
!0===t.debug&&R.k.enable()
var r=(0,l.Gd)()
null===(n=r.getScope())||void 0===n||n.update(t.initialScope)
var o=new e(t)
r.bindClient(o)}(Me,e),e.autoSessionTracking&&function(){if(void 0!==(0,H.R)().document){var e=(0,l.Gd)()
"function"==typeof e.startSession&&"function"==typeof e.captureSession&&(e.startSession({ignoreDuration:!0}),e.captureSession(),(0,De.o)({callback:function(t){var n=t.from,r=t.to
void 0!==n&&n!==r&&(e.startSession({ignoreDuration:!0}),e.captureSession())},type:"history"}))}else R.k.warn("Session tracking in non-browser environment with @sentry/browser is not supported.")}()}function Ye(e){void 0===e&&(e={})
var t=(0,l.Gd)(),n=t.getScope()
n&&(e.user=(0,c.pi)((0,c.pi)({},n.getUser()),e.user)),e.eventId||(e.eventId=t.lastEventId())
var r=t.getClient()
r&&r.showReportDialog(e)}function $e(){return(0,l.Gd)().lastEventId()}function Ke(){}function Xe(e){e()}function Qe(e){var t=(0,l.Gd)().getClient()
return t?t.flush(e):(R.k.warn("Cannot flush events. No client defined."),D.c.resolve(!1))}function et(e){var t=(0,l.Gd)().getClient()
return t?t.close(e):(R.k.warn("Cannot flush events and disable SDK. No client defined."),D.c.resolve(!1))}function tt(e){return je(e)()}var nt="sentry.javascript.browser",rt={},ot=(0,H.R)()
ot.Sentry&&ot.Sentry.Integrations&&(rt=ot.Sentry.Integrations)
var it=(0,c.pi)((0,c.pi)((0,c.pi)({},rt),r),o)},6599:(e,t,n)=>{"use strict"
n.d(t,{Xb:()=>d,Gd:()=>m,vi:()=>_,cu:()=>h,pj:()=>v})
var r=n(7480),o=n(9531),i=n(6438),s=n(8505),a=n(190),c=n(4387),u=n(8029),l=n(1911),p=n(7927),f=function(){function e(e){this.errors=0,this.sid=(0,i.DM)(),this.duration=0,this.status=o.$.Ok,this.init=!0,this.ignoreDuration=!1
var t=(0,s.ph)()
this.timestamp=t,this.started=t,e&&this.update(e)}return e.prototype.update=function(e){if(void 0===e&&(e={}),e.user&&(!this.ipAddress&&e.user.ip_address&&(this.ipAddress=e.user.ip_address),this.did||e.did||(this.did=e.user.id||e.user.email||e.user.username)),this.timestamp=e.timestamp||(0,s.ph)(),e.ignoreDuration&&(this.ignoreDuration=e.ignoreDuration),e.sid&&(this.sid=32===e.sid.length?e.sid:(0,i.DM)()),void 0!==e.init&&(this.init=e.init),!this.did&&e.did&&(this.did=""+e.did),"number"==typeof e.started&&(this.started=e.started),this.ignoreDuration)this.duration=void 0
else if("number"==typeof e.duration)this.duration=e.duration
else{var t=this.timestamp-this.started
this.duration=t>=0?t:0}e.release&&(this.release=e.release),e.environment&&(this.environment=e.environment),!this.ipAddress&&e.ipAddress&&(this.ipAddress=e.ipAddress),!this.userAgent&&e.userAgent&&(this.userAgent=e.userAgent),"number"==typeof e.errors&&(this.errors=e.errors),e.status&&(this.status=e.status)},e.prototype.close=function(e){e?this.update({status:e}):this.status===o.$.Ok?this.update({status:o.$.Exited}):this.update()},e.prototype.toJSON=function(){return(0,p.Jr)({sid:""+this.sid,init:this.init,started:new Date(1e3*this.started).toISOString(),timestamp:new Date(1e3*this.timestamp).toISOString(),status:this.status,errors:this.errors,did:"number"==typeof this.did||"string"==typeof this.did?""+this.did:void 0,duration:this.duration,attrs:(0,p.Jr)({release:this.release,environment:this.environment,ip_address:this.ipAddress,user_agent:this.userAgent})})},e}(),d=function(){function e(e,t,n){void 0===t&&(t=new l.s),void 0===n&&(n=4),this._version=n,this._stack=[{}],this.getStackTop().scope=t,e&&this.bindClient(e)}return e.prototype.isOlderThan=function(e){return this._version<e},e.prototype.bindClient=function(e){this.getStackTop().client=e,e&&e.setupIntegrations&&e.setupIntegrations()},e.prototype.pushScope=function(){var e=l.s.clone(this.getScope())
return this.getStack().push({client:this.getClient(),scope:e}),e},e.prototype.popScope=function(){return!(this.getStack().length<=1||!this.getStack().pop())},e.prototype.withScope=function(e){var t=this.pushScope()
try{e(t)}finally{this.popScope()}},e.prototype.getClient=function(){return this.getStackTop().client},e.prototype.getScope=function(){return this.getStackTop().scope},e.prototype.getStack=function(){return this._stack},e.prototype.getStackTop=function(){return this._stack[this._stack.length-1]},e.prototype.captureException=function(e,t){var n=this._lastEventId=(0,i.DM)(),o=t
if(!t){var s=void 0
try{throw new Error("Sentry syntheticException")}catch(e){s=e}o={originalException:e,syntheticException:s}}return this._invokeClient("captureException",e,(0,r.pi)((0,r.pi)({},o),{event_id:n})),n},e.prototype.captureMessage=function(e,t,n){var o=this._lastEventId=(0,i.DM)(),s=n
if(!n){var a=void 0
try{throw new Error(e)}catch(e){a=e}s={originalException:e,syntheticException:a}}return this._invokeClient("captureMessage",e,t,(0,r.pi)((0,r.pi)({},s),{event_id:o})),o},e.prototype.captureEvent=function(e,t){var n=(0,i.DM)()
return"transaction"!==e.type&&(this._lastEventId=n),this._invokeClient("captureEvent",e,(0,r.pi)((0,r.pi)({},t),{event_id:n})),n},e.prototype.lastEventId=function(){return this._lastEventId},e.prototype.addBreadcrumb=function(e,t){var n=this.getStackTop(),o=n.scope,i=n.client
if(o&&i){var c=i.getOptions&&i.getOptions()||{},u=c.beforeBreadcrumb,l=void 0===u?null:u,p=c.maxBreadcrumbs,f=void 0===p?100:p
if(!(f<=0)){var d=(0,s.yW)(),h=(0,r.pi)({timestamp:d},e),v=l?(0,a.C)((function(){return l(h,t)})):h
null!==v&&o.addBreadcrumb(v,f)}}},e.prototype.setUser=function(e){var t=this.getScope()
t&&t.setUser(e)},e.prototype.setTags=function(e){var t=this.getScope()
t&&t.setTags(e)},e.prototype.setExtras=function(e){var t=this.getScope()
t&&t.setExtras(e)},e.prototype.setTag=function(e,t){var n=this.getScope()
n&&n.setTag(e,t)},e.prototype.setExtra=function(e,t){var n=this.getScope()
n&&n.setExtra(e,t)},e.prototype.setContext=function(e,t){var n=this.getScope()
n&&n.setContext(e,t)},e.prototype.configureScope=function(e){var t=this.getStackTop(),n=t.scope,r=t.client
n&&r&&e(n)},e.prototype.run=function(e){var t=v(this)
try{e(this)}finally{v(t)}},e.prototype.getIntegration=function(e){var t=this.getClient()
if(!t)return null
try{return t.getIntegration(e)}catch(t){return a.k.warn("Cannot retrieve integration "+e.id+" from the current Hub"),null}},e.prototype.startSpan=function(e){return this._callExtensionMethod("startSpan",e)},e.prototype.startTransaction=function(e,t){return this._callExtensionMethod("startTransaction",e,t)},e.prototype.traceHeaders=function(){return this._callExtensionMethod("traceHeaders")},e.prototype.captureSession=function(e){if(void 0===e&&(e=!1),e)return this.endSession()
this._sendSessionUpdate()},e.prototype.endSession=function(){var e,t,n,r,o
null===(n=null===(t=null===(e=this.getStackTop())||void 0===e?void 0:e.scope)||void 0===t?void 0:t.getSession())||void 0===n||n.close(),this._sendSessionUpdate(),null===(o=null===(r=this.getStackTop())||void 0===r?void 0:r.scope)||void 0===o||o.setSession()},e.prototype.startSession=function(e){var t=this.getStackTop(),n=t.scope,i=t.client,s=i&&i.getOptions()||{},a=s.release,u=s.environment,l=((0,c.R)().navigator||{}).userAgent,p=new f((0,r.pi)((0,r.pi)((0,r.pi)({release:a,environment:u},n&&{user:n.getUser()}),l&&{userAgent:l}),e))
if(n){var d=n.getSession&&n.getSession()
d&&d.status===o.$.Ok&&d.update({status:o.$.Exited}),this.endSession(),n.setSession(p)}return p},e.prototype._sendSessionUpdate=function(){var e=this.getStackTop(),t=e.scope,n=e.client
if(t){var r=t.getSession&&t.getSession()
r&&n&&n.captureSession&&n.captureSession(r)}},e.prototype._invokeClient=function(e){for(var t,n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o]
var i=this.getStackTop(),s=i.scope,a=i.client
a&&a[e]&&(t=a)[e].apply(t,(0,r.fl)(n,[s]))},e.prototype._callExtensionMethod=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
var r=h(),o=r.__SENTRY__
if(o&&o.extensions&&"function"==typeof o.extensions[e])return o.extensions[e].apply(this,t)
a.k.warn("Extension method "+e+" couldn't be found, doing nothing.")},e}()
function h(){var e=(0,c.R)()
return e.__SENTRY__=e.__SENTRY__||{extensions:{},hub:void 0},e}function v(e){var t=h(),n=_(t)
return y(t,e),n}function m(){var e=h()
return g(e)&&!_(e).isOlderThan(4)||y(e,new d),(0,u.KV)()?function(e){var t,n,r
try{var o=null===(r=null===(n=null===(t=h().__SENTRY__)||void 0===t?void 0:t.extensions)||void 0===n?void 0:n.domain)||void 0===r?void 0:r.active
if(!o)return _(e)
if(!g(o)||_(o).isOlderThan(4)){var i=_(e).getStackTop()
y(o,new d(i.client,l.s.clone(i.scope)))}return _(o)}catch(t){return _(e)}}(e):_(e)}function g(e){return!!(e&&e.__SENTRY__&&e.__SENTRY__.hub)}function _(e){return e&&e.__SENTRY__&&e.__SENTRY__.hub||(e.__SENTRY__=e.__SENTRY__||{},e.__SENTRY__.hub=new d),e.__SENTRY__.hub}function y(e,t){return!!e&&(e.__SENTRY__=e.__SENTRY__||{},e.__SENTRY__.hub=t,!0)}},1911:(e,t,n)=>{"use strict"
n.d(t,{s:()=>c,c:()=>l})
var r=n(7480),o=n(8146),i=n(8505),s=n(6612),a=n(4387),c=function(){function e(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._user={},this._tags={},this._extra={},this._contexts={}}return e.clone=function(t){var n=new e
return t&&(n._breadcrumbs=(0,r.fl)(t._breadcrumbs),n._tags=(0,r.pi)({},t._tags),n._extra=(0,r.pi)({},t._extra),n._contexts=(0,r.pi)({},t._contexts),n._user=t._user,n._level=t._level,n._span=t._span,n._session=t._session,n._transactionName=t._transactionName,n._fingerprint=t._fingerprint,n._eventProcessors=(0,r.fl)(t._eventProcessors),n._requestSession=t._requestSession),n},e.prototype.addScopeListener=function(e){this._scopeListeners.push(e)},e.prototype.addEventProcessor=function(e){return this._eventProcessors.push(e),this},e.prototype.setUser=function(e){return this._user=e||{},this._session&&this._session.update({user:e}),this._notifyScopeListeners(),this},e.prototype.getUser=function(){return this._user},e.prototype.getRequestSession=function(){return this._requestSession},e.prototype.setRequestSession=function(e){return this._requestSession=e,this},e.prototype.setTags=function(e){return this._tags=(0,r.pi)((0,r.pi)({},this._tags),e),this._notifyScopeListeners(),this},e.prototype.setTag=function(e,t){var n
return this._tags=(0,r.pi)((0,r.pi)({},this._tags),((n={})[e]=t,n)),this._notifyScopeListeners(),this},e.prototype.setExtras=function(e){return this._extra=(0,r.pi)((0,r.pi)({},this._extra),e),this._notifyScopeListeners(),this},e.prototype.setExtra=function(e,t){var n
return this._extra=(0,r.pi)((0,r.pi)({},this._extra),((n={})[e]=t,n)),this._notifyScopeListeners(),this},e.prototype.setFingerprint=function(e){return this._fingerprint=e,this._notifyScopeListeners(),this},e.prototype.setLevel=function(e){return this._level=e,this._notifyScopeListeners(),this},e.prototype.setTransactionName=function(e){return this._transactionName=e,this._notifyScopeListeners(),this},e.prototype.setTransaction=function(e){return this.setTransactionName(e)},e.prototype.setContext=function(e,t){var n
return null===t?delete this._contexts[e]:this._contexts=(0,r.pi)((0,r.pi)({},this._contexts),((n={})[e]=t,n)),this._notifyScopeListeners(),this},e.prototype.setSpan=function(e){return this._span=e,this._notifyScopeListeners(),this},e.prototype.getSpan=function(){return this._span},e.prototype.getTransaction=function(){var e,t,n,r,o=this.getSpan()
return(null===(e=o)||void 0===e?void 0:e.transaction)?null===(t=o)||void 0===t?void 0:t.transaction:(null===(r=null===(n=o)||void 0===n?void 0:n.spanRecorder)||void 0===r?void 0:r.spans[0])?o.spanRecorder.spans[0]:void 0},e.prototype.setSession=function(e){return e?this._session=e:delete this._session,this._notifyScopeListeners(),this},e.prototype.getSession=function(){return this._session},e.prototype.update=function(t){if(!t)return this
if("function"==typeof t){var n=t(this)
return n instanceof e?n:this}return t instanceof e?(this._tags=(0,r.pi)((0,r.pi)({},this._tags),t._tags),this._extra=(0,r.pi)((0,r.pi)({},this._extra),t._extra),this._contexts=(0,r.pi)((0,r.pi)({},this._contexts),t._contexts),t._user&&Object.keys(t._user).length&&(this._user=t._user),t._level&&(this._level=t._level),t._fingerprint&&(this._fingerprint=t._fingerprint),t._requestSession&&(this._requestSession=t._requestSession)):(0,o.PO)(t)&&(t=t,this._tags=(0,r.pi)((0,r.pi)({},this._tags),t.tags),this._extra=(0,r.pi)((0,r.pi)({},this._extra),t.extra),this._contexts=(0,r.pi)((0,r.pi)({},this._contexts),t.contexts),t.user&&(this._user=t.user),t.level&&(this._level=t.level),t.fingerprint&&(this._fingerprint=t.fingerprint),t.requestSession&&(this._requestSession=t.requestSession)),this},e.prototype.clear=function(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._requestSession=void 0,this._span=void 0,this._session=void 0,this._notifyScopeListeners(),this},e.prototype.addBreadcrumb=function(e,t){var n="number"==typeof t?Math.min(t,100):100
if(n<=0)return this
var o=(0,r.pi)({timestamp:(0,i.yW)()},e)
return this._breadcrumbs=(0,r.fl)(this._breadcrumbs,[o]).slice(-n),this._notifyScopeListeners(),this},e.prototype.clearBreadcrumbs=function(){return this._breadcrumbs=[],this._notifyScopeListeners(),this},e.prototype.applyToEvent=function(e,t){var n
if(this._extra&&Object.keys(this._extra).length&&(e.extra=(0,r.pi)((0,r.pi)({},this._extra),e.extra)),this._tags&&Object.keys(this._tags).length&&(e.tags=(0,r.pi)((0,r.pi)({},this._tags),e.tags)),this._user&&Object.keys(this._user).length&&(e.user=(0,r.pi)((0,r.pi)({},this._user),e.user)),this._contexts&&Object.keys(this._contexts).length&&(e.contexts=(0,r.pi)((0,r.pi)({},this._contexts),e.contexts)),this._level&&(e.level=this._level),this._transactionName&&(e.transaction=this._transactionName),this._span){e.contexts=(0,r.pi)({trace:this._span.getTraceContext()},e.contexts)
var o=null===(n=this._span.transaction)||void 0===n?void 0:n.name
o&&(e.tags=(0,r.pi)({transaction:o},e.tags))}return this._applyFingerprint(e),e.breadcrumbs=(0,r.fl)(e.breadcrumbs||[],this._breadcrumbs),e.breadcrumbs=e.breadcrumbs.length>0?e.breadcrumbs:void 0,this._notifyEventProcessors((0,r.fl)(u(),this._eventProcessors),e,t)},e.prototype._notifyEventProcessors=function(e,t,n,i){var a=this
return void 0===i&&(i=0),new s.c((function(s,c){var u=e[i]
if(null===t||"function"!=typeof u)s(t)
else{var l=u((0,r.pi)({},t),n);(0,o.J8)(l)?l.then((function(t){return a._notifyEventProcessors(e,t,n,i+1).then(s)})).then(null,c):a._notifyEventProcessors(e,l,n,i+1).then(s).then(null,c)}}))},e.prototype._notifyScopeListeners=function(){var e=this
this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach((function(t){t(e)})),this._notifyingListeners=!1)},e.prototype._applyFingerprint=function(e){e.fingerprint=e.fingerprint?Array.isArray(e.fingerprint)?e.fingerprint:[e.fingerprint]:[],this._fingerprint&&(e.fingerprint=e.fingerprint.concat(this._fingerprint)),e.fingerprint&&!e.fingerprint.length&&delete e.fingerprint},e}()
function u(){var e=(0,a.R)()
return e.__SENTRY__=e.__SENTRY__||{},e.__SENTRY__.globalEventProcessors=e.__SENTRY__.globalEventProcessors||[],e.__SENTRY__.globalEventProcessors}function l(e){u().push(e)}},9531:(e,t,n)=>{"use strict"
var r,o
n.d(t,{$:()=>r}),function(e){e.Ok="ok",e.Exited="exited",e.Crashed="crashed",e.Abnormal="abnormal"}(r||(r={})),function(e){e.Ok="ok",e.Errored="errored",e.Crashed="crashed"}(o||(o={}))},2967:(e,t,n)=>{"use strict"
var r
n.d(t,{k:()=>r}),function(e){e.BeforeSend="before_send",e.EventProcessor="event_processor",e.NetworkError="network_error",e.QueueOverflow="queue_overflow",e.RateLimitBackoff="ratelimit_backoff",e.SampleRate="sample_rate"}(r||(r={}))},6995:(e,t,n)=>{"use strict"
function r(e){e.then(null,(function(e){console.error(e)}))}n.d(t,{I:()=>r})},7809:(e,t,n)=>{"use strict"
n.d(t,{R:()=>i,l:()=>a})
var r=n(4387),o=n(8146)
function i(e,t){try{for(var n=e,r=[],o=0,i=0,a=" > ".length,c=void 0;n&&o++<5&&!("html"===(c=s(n,t))||o>1&&i+r.length*a+c.length>=80);)r.push(c),i+=c.length,n=n.parentNode
return r.reverse().join(" > ")}catch(e){return"<unknown>"}}function s(e,t){var n,r,i,s,a,c,u,l=e,p=[]
if(!l||!l.tagName)return""
p.push(l.tagName.toLowerCase())
var f=(null===(n=t)||void 0===n?void 0:n.length)?t.filter((function(e){return l.getAttribute(e)})).map((function(e){return[e,l.getAttribute(e)]})):null
if(null===(r=f)||void 0===r?void 0:r.length)f.forEach((function(e){p.push("["+e[0]+'="'+e[1]+'"]')}))
else if(l.id&&p.push("#"+l.id),(i=l.className)&&(0,o.HD)(i))for(s=i.split(/\s+/),u=0;u<s.length;u++)p.push("."+s[u])
var d=["type","name","title","alt"]
for(u=0;u<d.length;u++)a=d[u],(c=l.getAttribute(a))&&p.push("["+a+'="'+c+'"]')
return p.join("")}function a(){var e=(0,r.R)()
try{return e.document.location.href}catch(e){return""}}},84:(e,t,n)=>{"use strict"
n.d(t,{l:()=>s})
var r=n(7480),o=n(6589),i=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/,s=function(){function e(e){"string"==typeof e?this._fromString(e):this._fromComponents(e),this._validate()}return e.prototype.toString=function(e){void 0===e&&(e=!1)
var t=this,n=t.host,r=t.path,o=t.pass,i=t.port,s=t.projectId
return t.protocol+"://"+t.publicKey+(e&&o?":"+o:"")+"@"+n+(i?":"+i:"")+"/"+(r?r+"/":r)+s},e.prototype._fromString=function(e){var t=i.exec(e)
if(!t)throw new o.b("Invalid Dsn")
var n=(0,r.CR)(t.slice(1),6),s=n[0],a=n[1],c=n[2],u=void 0===c?"":c,l=n[3],p=n[4],f=void 0===p?"":p,d="",h=n[5],v=h.split("/")
if(v.length>1&&(d=v.slice(0,-1).join("/"),h=v.pop()),h){var m=h.match(/^\d+/)
m&&(h=m[0])}this._fromComponents({host:l,pass:u,path:d,projectId:h,port:f,protocol:s,publicKey:a})},e.prototype._fromComponents=function(e){"user"in e&&!("publicKey"in e)&&(e.publicKey=e.user),this.user=e.publicKey||"",this.protocol=e.protocol,this.publicKey=e.publicKey||"",this.pass=e.pass||"",this.host=e.host,this.port=e.port||"",this.path=e.path||"",this.projectId=e.projectId},e.prototype._validate=function(){var e=this
if(["protocol","publicKey","host","projectId"].forEach((function(t){if(!e[t])throw new o.b("Invalid Dsn: "+t+" missing")})),!this.projectId.match(/^\d+$/))throw new o.b("Invalid Dsn: Invalid projectId "+this.projectId)
if("http"!==this.protocol&&"https"!==this.protocol)throw new o.b("Invalid Dsn: Invalid protocol "+this.protocol)
if(this.port&&isNaN(parseInt(this.port,10)))throw new o.b("Invalid Dsn: Invalid port "+this.port)},e}()},6589:(e,t,n)=>{"use strict"
n.d(t,{b:()=>i})
var r=n(7480),o=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){return e.__proto__=t,e}:function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(e,n)||(e[n]=t[n])
return e}),i=function(e){function t(t){var n=this.constructor,r=e.call(this,t)||this
return r.message=t,r.name=n.prototype.constructor.name,o(r,n.prototype),r}return(0,r.ZT)(t,e),t}(Error)},4387:(e,t,n)=>{"use strict"
n.d(t,{R:()=>i})
var r=n(8029),o={}
function i(){return(0,r.KV)()?n.g:"undefined"!=typeof window?window:"undefined"!=typeof self?self:o}},4245:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{Dsn:()=>i.l,Memo:()=>p._,PromiseBuffer:()=>k.D,SentryError:()=>s.b,SyncPromise:()=>R.c,_browserPerformanceTimeOriginMode:()=>P.mL,addContextToFrame:()=>f.go,addExceptionMechanism:()=>f.EG,addExceptionTypeValue:()=>f.Db,addInstrumentationHandler:()=>c.o,basename:()=>O,browserPerformanceTimeOrigin:()=>P.Z1,checkOrSetAlreadyCaught:()=>f.YO,consoleSandbox:()=>l.C,dateTimestampInSeconds:()=>P.yW,dirname:()=>x,dropUndefinedKeys:()=>h.Jr,dynamicRequire:()=>d.l$,escapeStringForRegex:()=>C.GE,extractExceptionKeysForMessage:()=>h.zf,fill:()=>h.hl,forget:()=>r.I,getEventDescription:()=>f.jH,getFunctionName:()=>T.$,getGlobalObject:()=>a.R,getLocationHref:()=>o.l,htmlTreeAsString:()=>o.R,isAbsolute:()=>E,isDOMError:()=>u.TX,isDOMException:()=>u.fm,isElement:()=>u.kK,isError:()=>u.VZ,isErrorEvent:()=>u.VW,isEvent:()=>u.cO,isInstanceOf:()=>u.V9,isMatchingPattern:()=>C.zC,isNativeFetch:()=>j.Du,isNodeEnv:()=>d.KV,isPlainObject:()=>u.PO,isPrimitive:()=>u.pt,isRegExp:()=>u.Kj,isString:()=>u.HD,isSyntheticEvent:()=>u.Cy,isThenable:()=>u.J8,join:()=>S,loadModule:()=>d.$y,logger:()=>l.k,normalize:()=>h.Fv,normalizePath:()=>w,normalizeToSize:()=>h.Qy,objectify:()=>h.mz,parseRetryAfterHeader:()=>f.JY,parseSemver:()=>f.J4,parseUrl:()=>f.en,relative:()=>b,resolve:()=>_,safeJoin:()=>C.nK,snipLine:()=>C.JM,stripUrlQueryAndFragment:()=>f.rt,supportsDOMError:()=>j.zO,supportsDOMException:()=>j.fL,supportsErrorEvent:()=>j.S$,supportsFetch:()=>j.Ak,supportsHistory:()=>j.Bf,supportsNativeFetch:()=>j.t$,supportsReferrerPolicy:()=>j.hv,supportsReportingObserver:()=>j.zb,timestampInSeconds:()=>P.ph,timestampWithMs:()=>P._I,truncate:()=>C.$G,urlEncode:()=>h._j,usingPerformanceAPI:()=>P.sV,uuid4:()=>f.DM,walk:()=>h._p})
var r=n(6995),o=n(7809),i=n(84),s=n(6589),a=n(4387),c=n(5670),u=n(8146),l=n(190),p=n(6082),f=n(6438),d=n(8029),h=n(7927)
function v(e,t){for(var n=0,r=e.length-1;r>=0;r--){var o=e[r]
"."===o?e.splice(r,1):".."===o?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..")
return e}var m=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^/]+?|)(\.[^./]*|))(?:[/]*)$/
function g(e){var t=m.exec(e)
return t?t.slice(1):[]}function _(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var n="",r=!1,o=e.length-1;o>=-1&&!r;o--){var i=o>=0?e[o]:"/"
i&&(n=i+"/"+n,r="/"===i.charAt(0))}return(r?"/":"")+(n=v(n.split("/").filter((function(e){return!!e})),!r).join("/"))||"."}function y(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}function b(e,t){e=_(e).substr(1),t=_(t).substr(1)
for(var n=y(e.split("/")),r=y(t.split("/")),o=Math.min(n.length,r.length),i=o,s=0;s<o;s++)if(n[s]!==r[s]){i=s
break}var a=[]
for(s=i;s<n.length;s++)a.push("..")
return(a=a.concat(r.slice(i))).join("/")}function w(e){var t=E(e),n="/"===e.substr(-1),r=v(e.split("/").filter((function(e){return!!e})),!t).join("/")
return r||t||(r="."),r&&n&&(r+="/"),(t?"/":"")+r}function E(e){return"/"===e.charAt(0)}function S(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
return w(e.join("/"))}function x(e){var t=g(e),n=t[0],r=t[1]
return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."}function O(e,t){var n=g(e)[2]
return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n}var k=n(5473),T=n(7879),C=n(9399),j=n(2651),R=n(6612),P=n(8505)},5670:(e,t,n)=>{"use strict"
n.d(t,{o:()=>m})
var r,o,i,s=n(7480),a=n(4387),c=n(8146),u=n(190),l=n(7927),p=n(7879),f=n(2651),d=(0,a.R)(),h={},v={}
function m(e){e&&"string"==typeof e.type&&"function"==typeof e.callback&&(h[e.type]=h[e.type]||[],h[e.type].push(e.callback),function(e){if(!v[e])switch(v[e]=!0,e){case"console":"console"in d&&["debug","info","warn","error","log","assert"].forEach((function(e){e in d.console&&(0,l.hl)(d.console,e,(function(t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]
g("console",{args:n,level:e}),t&&Function.prototype.apply.call(t,d.console,n)}}))}))
break
case"dom":!function(){if("document"in d){var e=g.bind(null,"dom"),t=b(e,!0)
d.document.addEventListener("click",t,!1),d.document.addEventListener("keypress",t,!1),["EventTarget","Node"].forEach((function(t){var n=d[t]&&d[t].prototype
n&&n.hasOwnProperty&&n.hasOwnProperty("addEventListener")&&((0,l.hl)(n,"addEventListener",(function(t){return function(n,r,o){if("click"===n||"keypress"==n)try{var i=this.__sentry_instrumentation_handlers__=this.__sentry_instrumentation_handlers__||{},s=i[n]=i[n]||{refCount:0}
if(!s.handler){var a=b(e)
s.handler=a,t.call(this,n,a,o)}s.refCount+=1}catch(e){}return t.call(this,n,r,o)}})),(0,l.hl)(n,"removeEventListener",(function(e){return function(t,n,r){if("click"===t||"keypress"==t)try{var o=this.__sentry_instrumentation_handlers__||{},i=o[t]
i&&(i.refCount-=1,i.refCount<=0&&(e.call(this,t,i.handler,r),i.handler=void 0,delete o[t]),0===Object.keys(o).length&&delete this.__sentry_instrumentation_handlers__)}catch(e){}return e.call(this,t,n,r)}})))}))}}()
break
case"xhr":!function(){if("XMLHttpRequest"in d){var e=[],t=[],n=XMLHttpRequest.prototype;(0,l.hl)(n,"open",(function(n){return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
var i=this,s=r[1]
i.__sentry_xhr__={method:(0,c.HD)(r[0])?r[0].toUpperCase():r[0],url:r[1]},(0,c.HD)(s)&&"POST"===i.__sentry_xhr__.method&&s.match(/sentry_key/)&&(i.__sentry_own_request__=!0)
var a=function(){if(4===i.readyState){try{i.__sentry_xhr__&&(i.__sentry_xhr__.status_code=i.status)}catch(e){}try{var n=e.indexOf(i)
if(-1!==n){e.splice(n)
var o=t.splice(n)[0]
i.__sentry_xhr__&&void 0!==o[0]&&(i.__sentry_xhr__.body=o[0])}}catch(e){}g("xhr",{args:r,endTimestamp:Date.now(),startTimestamp:Date.now(),xhr:i})}}
return"onreadystatechange"in i&&"function"==typeof i.onreadystatechange?(0,l.hl)(i,"onreadystatechange",(function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
return a(),e.apply(i,t)}})):i.addEventListener("readystatechange",a),n.apply(i,r)}})),(0,l.hl)(n,"send",(function(n){return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
return e.push(this),t.push(r),g("xhr",{args:r,startTimestamp:Date.now(),xhr:this}),n.apply(this,r)}}))}}()
break
case"fetch":(0,f.t$)()&&(0,l.hl)(d,"fetch",(function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
var r={args:t,fetchData:{method:_(t),url:y(t)},startTimestamp:Date.now()}
return g("fetch",(0,s.pi)({},r)),e.apply(d,t).then((function(e){return g("fetch",(0,s.pi)((0,s.pi)({},r),{endTimestamp:Date.now(),response:e})),e}),(function(e){throw g("fetch",(0,s.pi)((0,s.pi)({},r),{endTimestamp:Date.now(),error:e})),e}))}}))
break
case"history":!function(){if((0,f.Bf)()){var e=d.onpopstate
d.onpopstate=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
var o=d.location.href,i=r
if(r=o,g("history",{from:i,to:o}),e)try{return e.apply(this,t)}catch(e){}},(0,l.hl)(d.history,"pushState",t),(0,l.hl)(d.history,"replaceState",t)}function t(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
var o=t.length>2?t[2]:void 0
if(o){var i=r,s=String(o)
r=s,g("history",{from:i,to:s})}return e.apply(this,t)}}}()
break
case"error":w=d.onerror,d.onerror=function(e,t,n,r,o){return g("error",{column:r,error:o,line:n,msg:e,url:t}),!!w&&w.apply(this,arguments)}
break
case"unhandledrejection":E=d.onunhandledrejection,d.onunhandledrejection=function(e){return g("unhandledrejection",e),!E||E.apply(this,arguments)}
break
default:u.k.warn("unknown instrumentation type:",e)}}(e.type))}function g(e,t){var n,r
if(e&&h[e])try{for(var o=(0,s.XA)(h[e]||[]),i=o.next();!i.done;i=o.next()){var a=i.value
try{a(t)}catch(t){u.k.error("Error while triggering instrumentation handler.\nType: "+e+"\nName: "+(0,p.$)(a)+"\nError: "+t)}}}catch(e){n={error:e}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}}function _(e){return void 0===e&&(e=[]),"Request"in d&&(0,c.V9)(e[0],Request)&&e[0].method?String(e[0].method).toUpperCase():e[1]&&e[1].method?String(e[1].method).toUpperCase():"GET"}function y(e){return void 0===e&&(e=[]),"string"==typeof e[0]?e[0]:"Request"in d&&(0,c.V9)(e[0],Request)?e[0].url:String(e[0])}function b(e,t){return void 0===t&&(t=!1),function(n){if(n&&i!==n&&!function(e){if("keypress"!==e.type)return!1
try{var t=e.target
if(!t||!t.tagName)return!0
if("INPUT"===t.tagName||"TEXTAREA"===t.tagName||t.isContentEditable)return!1}catch(e){}return!0}(n)){var r="keypress"===n.type?"input":n.type;(void 0===o||function(e,t){if(!e)return!0
if(e.type!==t.type)return!0
try{if(e.target!==t.target)return!0}catch(e){}return!1}(i,n))&&(e({event:n,name:r,global:t}),i=n),clearTimeout(o),o=d.setTimeout((function(){o=void 0}),1e3)}}}var w=null,E=null},8146:(e,t,n)=>{"use strict"
function r(e){switch(Object.prototype.toString.call(e)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0
default:return v(e,Error)}}function o(e){return"[object ErrorEvent]"===Object.prototype.toString.call(e)}function i(e){return"[object DOMError]"===Object.prototype.toString.call(e)}function s(e){return"[object DOMException]"===Object.prototype.toString.call(e)}function a(e){return"[object String]"===Object.prototype.toString.call(e)}function c(e){return null===e||"object"!=typeof e&&"function"!=typeof e}function u(e){return"[object Object]"===Object.prototype.toString.call(e)}function l(e){return"undefined"!=typeof Event&&v(e,Event)}function p(e){return"undefined"!=typeof Element&&v(e,Element)}function f(e){return"[object RegExp]"===Object.prototype.toString.call(e)}function d(e){return Boolean(e&&e.then&&"function"==typeof e.then)}function h(e){return u(e)&&"nativeEvent"in e&&"preventDefault"in e&&"stopPropagation"in e}function v(e,t){try{return e instanceof t}catch(e){return!1}}n.d(t,{VZ:()=>r,VW:()=>o,TX:()=>i,fm:()=>s,HD:()=>a,pt:()=>c,PO:()=>u,cO:()=>l,kK:()=>p,Kj:()=>f,J8:()=>d,Cy:()=>h,V9:()=>v})},190:(e,t,n)=>{"use strict"
n.d(t,{C:()=>s,k:()=>c})
var r=n(4387),o=(0,r.R)(),i="Sentry Logger "
function s(e){var t=(0,r.R)()
if(!("console"in t))return e()
var n=t.console,o={};["debug","info","warn","error","log","assert"].forEach((function(e){e in t.console&&n[e].__sentry_original__&&(o[e]=n[e],n[e]=n[e].__sentry_original__)}))
var i=e()
return Object.keys(o).forEach((function(e){n[e]=o[e]})),i}var a=function(){function e(){this._enabled=!1}return e.prototype.disable=function(){this._enabled=!1},e.prototype.enable=function(){this._enabled=!0},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
this._enabled&&s((function(){o.console.log(i+"[Log]: "+e.join(" "))}))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
this._enabled&&s((function(){o.console.warn(i+"[Warn]: "+e.join(" "))}))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
this._enabled&&s((function(){o.console.error(i+"[Error]: "+e.join(" "))}))},e}()
o.__SENTRY__=o.__SENTRY__||{}
var c=o.__SENTRY__.logger||(o.__SENTRY__.logger=new a)},6082:(e,t,n)=>{"use strict"
n.d(t,{_:()=>r})
var r=function(){function e(){this._hasWeakSet="function"==typeof WeakSet,this._inner=this._hasWeakSet?new WeakSet:[]}return e.prototype.memoize=function(e){if(this._hasWeakSet)return!!this._inner.has(e)||(this._inner.add(e),!1)
for(var t=0;t<this._inner.length;t++)if(this._inner[t]===e)return!0
return this._inner.push(e),!1},e.prototype.unmemoize=function(e){if(this._hasWeakSet)this._inner.delete(e)
else for(var t=0;t<this._inner.length;t++)if(this._inner[t]===e){this._inner.splice(t,1)
break}},e}()},6438:(e,t,n)=>{"use strict"
n.d(t,{DM:()=>s,en:()=>a,jH:()=>c,Db:()=>u,EG:()=>l,J4:()=>f,JY:()=>d,go:()=>h,rt:()=>v,YO:()=>m})
var r=n(7480),o=n(4387),i=n(9399)
function s(){var e=(0,o.R)(),t=e.crypto||e.msCrypto
if(void 0!==t&&t.getRandomValues){var n=new Uint16Array(8)
t.getRandomValues(n),n[3]=4095&n[3]|16384,n[4]=16383&n[4]|32768
var r=function(e){for(var t=e.toString(16);t.length<4;)t="0"+t
return t}
return r(n[0])+r(n[1])+r(n[2])+r(n[3])+r(n[4])+r(n[5])+r(n[6])+r(n[7])}return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0
return("x"===e?t:3&t|8).toString(16)}))}function a(e){if(!e)return{}
var t=e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/)
if(!t)return{}
var n=t[6]||"",r=t[8]||""
return{host:t[4],path:t[5],protocol:t[2],relative:t[5]+n+r}}function c(e){if(e.message)return e.message
if(e.exception&&e.exception.values&&e.exception.values[0]){var t=e.exception.values[0]
return t.type&&t.value?t.type+": "+t.value:t.type||t.value||e.event_id||"<unknown>"}return e.event_id||"<unknown>"}function u(e,t,n){e.exception=e.exception||{},e.exception.values=e.exception.values||[],e.exception.values[0]=e.exception.values[0]||{},e.exception.values[0].value=e.exception.values[0].value||t||"",e.exception.values[0].type=e.exception.values[0].type||n||"Error"}function l(e,t){var n
if(e.exception&&e.exception.values){var o=e.exception.values[0],i=o.mechanism
if(o.mechanism=(0,r.pi)((0,r.pi)((0,r.pi)({},{type:"generic",handled:!0}),i),t),t&&"data"in t){var s=(0,r.pi)((0,r.pi)({},null===(n=i)||void 0===n?void 0:n.data),t.data)
o.mechanism.data=s}}}var p=/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/
function f(e){var t=e.match(p)||[],n=parseInt(t[1],10),r=parseInt(t[2],10),o=parseInt(t[3],10)
return{buildmetadata:t[5],major:isNaN(n)?void 0:n,minor:isNaN(r)?void 0:r,patch:isNaN(o)?void 0:o,prerelease:t[4]}}function d(e,t){if(!t)return 6e4
var n=parseInt(""+t,10)
if(!isNaN(n))return 1e3*n
var r=Date.parse(""+t)
return isNaN(r)?6e4:r-e}function h(e,t,n){void 0===n&&(n=5)
var r=t.lineno||0,o=e.length,s=Math.max(Math.min(o,r-1),0)
t.pre_context=e.slice(Math.max(0,s-n),s).map((function(e){return(0,i.JM)(e,0)})),t.context_line=(0,i.JM)(e[Math.min(o-1,s)],t.colno||0),t.post_context=e.slice(Math.min(s+1,o),s+1+n).map((function(e){return(0,i.JM)(e,0)}))}function v(e){return e.split(/[\?#]/,1)[0]}function m(e){var t
if(null===(t=e)||void 0===t?void 0:t.__sentry_captured__)return!0
try{Object.defineProperty(e,"__sentry_captured__",{value:!0})}catch(e){}return!1}},8029:(e,t,n)=>{"use strict"
function r(){return"[object process]"===Object.prototype.toString.call("undefined"!=typeof process?process:0)}function o(e,t){return e.require(t)}function i(t){var n
try{n=o(e,t)}catch(e){}try{var r=o(e,"process").cwd
n=o(e,r()+"/node_modules/"+t)}catch(e){}return n}n.d(t,{KV:()=>r,l$:()=>o,$y:()=>i}),e=n.hmd(e)},7927:(e,t,n)=>{"use strict"
n.d(t,{hl:()=>u,_j:()=>l,Qy:()=>f,_p:()=>h,Fv:()=>v,zf:()=>m,Jr:()=>g,mz:()=>_})
var r=n(7480),o=n(7809),i=n(8146),s=n(6082),a=n(7879),c=n(9399)
function u(e,t,n){if(t in e){var r=e[t],o=n(r)
if("function"==typeof o)try{o.prototype=o.prototype||{},Object.defineProperties(o,{__sentry_original__:{enumerable:!1,value:r}})}catch(e){}e[t]=o}}function l(e){return Object.keys(e).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&")}function p(e){if((0,i.VZ)(e)){var t=e,n={message:t.message,name:t.name,stack:t.stack}
for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])
return n}if((0,i.cO)(e)){var s=e,a={}
a.type=s.type
try{a.target=(0,i.kK)(s.target)?(0,o.R)(s.target):Object.prototype.toString.call(s.target)}catch(e){a.target="<unknown>"}try{a.currentTarget=(0,i.kK)(s.currentTarget)?(0,o.R)(s.currentTarget):Object.prototype.toString.call(s.currentTarget)}catch(e){a.currentTarget="<unknown>"}for(var c in"undefined"!=typeof CustomEvent&&(0,i.V9)(e,CustomEvent)&&(a.detail=s.detail),s)Object.prototype.hasOwnProperty.call(s,c)&&(a[c]=s[c])
return a}return e}function f(e,t,n){void 0===t&&(t=3),void 0===n&&(n=102400)
var r,o=v(e,t)
return r=o,function(e){return~-encodeURI(e).split(/%..|./).length}(JSON.stringify(r))>n?f(e,t-1,n):o}function d(e,t){return"domain"===t&&e&&"object"==typeof e&&e._events?"[Domain]":"domainEmitter"===t?"[DomainEmitter]":void 0!==n.g&&e===n.g?"[Global]":"undefined"!=typeof window&&e===window?"[Window]":"undefined"!=typeof document&&e===document?"[Document]":(0,i.Cy)(e)?"[SyntheticEvent]":"number"==typeof e&&e!=e?"[NaN]":void 0===e?"[undefined]":"function"==typeof e?"[Function: "+(0,a.$)(e)+"]":"symbol"==typeof e?"["+String(e)+"]":"bigint"==typeof e?"[BigInt: "+String(e)+"]":e}function h(e,t,n,r){if(void 0===n&&(n=1/0),void 0===r&&(r=new s._),0===n)return function(e){var t=Object.prototype.toString.call(e)
if("string"==typeof e)return e
if("[object Object]"===t)return"[Object]"
if("[object Array]"===t)return"[Array]"
var n=d(e)
return(0,i.pt)(n)?n:t}(t)
if(null!=t&&"function"==typeof t.toJSON)return t.toJSON()
var o=d(t,e)
if((0,i.pt)(o))return o
var a=p(t),c=Array.isArray(t)?[]:{}
if(r.memoize(t))return"[Circular ~]"
for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&(c[u]=h(u,a[u],n-1,r))
return r.unmemoize(t),c}function v(e,t){try{return JSON.parse(JSON.stringify(e,(function(e,n){return h(e,n,t)})))}catch(e){return"**non-serializable**"}}function m(e,t){void 0===t&&(t=40)
var n=Object.keys(p(e))
if(n.sort(),!n.length)return"[object has no keys]"
if(n[0].length>=t)return(0,c.$G)(n[0],t)
for(var r=n.length;r>0;r--){var o=n.slice(0,r).join(", ")
if(!(o.length>t))return r===n.length?o:(0,c.$G)(o,t)}return""}function g(e){var t,n
if((0,i.PO)(e)){var o=e,s={}
try{for(var a=(0,r.XA)(Object.keys(o)),c=a.next();!c.done;c=a.next()){var u=c.value
void 0!==o[u]&&(s[u]=g(o[u]))}}catch(e){t={error:e}}finally{try{c&&!c.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}return s}return Array.isArray(e)?e.map(g):e}function _(e){var t
switch(!0){case null==e:t=new String(e)
break
case"symbol"==typeof e||"bigint"==typeof e:t=Object(e)
break
case(0,i.pt)(e):t=new e.constructor(e)
break
default:t=e}return t}},5473:(e,t,n)=>{"use strict"
n.d(t,{D:()=>i})
var r=n(6589),o=n(6612),i=function(){function e(e){this._limit=e,this._buffer=[]}return e.prototype.isReady=function(){return void 0===this._limit||this.length()<this._limit},e.prototype.add=function(e){var t=this
if(!this.isReady())return o.c.reject(new r.b("Not adding Promise due to buffer limit reached."))
var n=e()
return-1===this._buffer.indexOf(n)&&this._buffer.push(n),n.then((function(){return t.remove(n)})).then(null,(function(){return t.remove(n).then(null,(function(){}))})),n},e.prototype.remove=function(e){return this._buffer.splice(this._buffer.indexOf(e),1)[0]},e.prototype.length=function(){return this._buffer.length},e.prototype.drain=function(e){var t=this
return new o.c((function(n){var r=setTimeout((function(){e&&e>0&&n(!1)}),e)
o.c.all(t._buffer).then((function(){clearTimeout(r),n(!0)})).then(null,(function(){n(!0)}))}))},e}()},7879:(e,t,n)=>{"use strict"
n.d(t,{$:()=>o})
var r="<anonymous>"
function o(e){try{return e&&"function"==typeof e&&e.name||r}catch(e){return r}}},9399:(e,t,n)=>{"use strict"
n.d(t,{$G:()=>o,JM:()=>i,nK:()=>s,zC:()=>a,GE:()=>c})
var r=n(8146)
function o(e,t){return void 0===t&&(t=0),"string"!=typeof e||0===t||e.length<=t?e:e.substr(0,t)+"..."}function i(e,t){var n=e,r=n.length
if(r<=150)return n
t>r&&(t=r)
var o=Math.max(t-60,0)
o<5&&(o=0)
var i=Math.min(o+140,r)
return i>r-5&&(i=r),i===r&&(o=Math.max(i-140,0)),n=n.slice(o,i),o>0&&(n="'{snip} "+n),i<r&&(n+=" {snip}"),n}function s(e,t){if(!Array.isArray(e))return""
for(var n=[],r=0;r<e.length;r++){var o=e[r]
try{n.push(String(o))}catch(e){n.push("[value cannot be serialized]")}}return n.join(t)}function a(e,t){return!!(0,r.HD)(e)&&((0,r.Kj)(t)?t.test(e):"string"==typeof t&&-1!==e.indexOf(t))}function c(e){return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}},2651:(e,t,n)=>{"use strict"
n.d(t,{S$:()=>i,zO:()=>s,fL:()=>a,Ak:()=>c,Du:()=>u,t$:()=>l,zb:()=>p,hv:()=>f,Bf:()=>d})
var r=n(4387),o=n(190)
function i(){try{return new ErrorEvent(""),!0}catch(e){return!1}}function s(){try{return new DOMError(""),!0}catch(e){return!1}}function a(){try{return new DOMException(""),!0}catch(e){return!1}}function c(){if(!("fetch"in(0,r.R)()))return!1
try{return new Headers,new Request(""),new Response,!0}catch(e){return!1}}function u(e){return e&&/^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())}function l(){if(!c())return!1
var e=(0,r.R)()
if(u(e.fetch))return!0
var t=!1,n=e.document
if(n&&"function"==typeof n.createElement)try{var i=n.createElement("iframe")
i.hidden=!0,n.head.appendChild(i),i.contentWindow&&i.contentWindow.fetch&&(t=u(i.contentWindow.fetch)),n.head.removeChild(i)}catch(e){o.k.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",e)}return t}function p(){return"ReportingObserver"in(0,r.R)()}function f(){if(!c())return!1
try{return new Request("_",{referrerPolicy:"origin"}),!0}catch(e){return!1}}function d(){var e=(0,r.R)(),t=e.chrome,n=t&&t.app&&t.app.runtime,o="history"in e&&!!e.history.pushState&&!!e.history.replaceState
return!n&&o}},6612:(e,t,n)=>{"use strict"
n.d(t,{c:()=>o})
var r=n(8146),o=function(){function e(e){var t=this
this._state="PENDING",this._handlers=[],this._resolve=function(e){t._setResult("RESOLVED",e)},this._reject=function(e){t._setResult("REJECTED",e)},this._setResult=function(e,n){"PENDING"===t._state&&((0,r.J8)(n)?n.then(t._resolve,t._reject):(t._state=e,t._value=n,t._executeHandlers()))},this._attachHandler=function(e){t._handlers=t._handlers.concat(e),t._executeHandlers()},this._executeHandlers=function(){if("PENDING"!==t._state){var e=t._handlers.slice()
t._handlers=[],e.forEach((function(e){e.done||("RESOLVED"===t._state&&e.onfulfilled&&e.onfulfilled(t._value),"REJECTED"===t._state&&e.onrejected&&e.onrejected(t._value),e.done=!0)}))}}
try{e(this._resolve,this._reject)}catch(e){this._reject(e)}}return e.resolve=function(t){return new e((function(e){e(t)}))},e.reject=function(t){return new e((function(e,n){n(t)}))},e.all=function(t){return new e((function(n,r){if(Array.isArray(t))if(0!==t.length){var o=t.length,i=[]
t.forEach((function(t,s){e.resolve(t).then((function(e){i[s]=e,0==(o-=1)&&n(i)})).then(null,r)}))}else n([])
else r(new TypeError("Promise.all requires an array as input."))}))},e.prototype.then=function(t,n){var r=this
return new e((function(e,o){r._attachHandler({done:!1,onfulfilled:function(n){if(t)try{return void e(t(n))}catch(e){return void o(e)}else e(n)},onrejected:function(t){if(n)try{return void e(n(t))}catch(e){return void o(e)}else o(t)}})}))},e.prototype.catch=function(e){return this.then((function(e){return e}),e)},e.prototype.finally=function(t){var n=this
return new e((function(e,r){var o,i
return n.then((function(e){i=!1,o=e,t&&t()}),(function(e){i=!0,o=e,t&&t()})).then((function(){i?r(o):e(o)}))}))},e.prototype.toString=function(){return"[object SyncPromise]"},e}()},8505:(e,t,n)=>{"use strict"
n.d(t,{yW:()=>u,ph:()=>l,_I:()=>p,sV:()=>f,mL:()=>i,Z1:()=>d})
var r=n(4387),o=n(8029)
e=n.hmd(e)
var i,s={nowSeconds:function(){return Date.now()/1e3}},a=(0,o.KV)()?function(){try{return(0,o.l$)(e,"perf_hooks").performance}catch(e){return}}():function(){var e=(0,r.R)().performance
if(e&&e.now)return{now:function(){return e.now()},timeOrigin:Date.now()-e.now()}}(),c=void 0===a?s:{nowSeconds:function(){return(a.timeOrigin+a.now())/1e3}},u=s.nowSeconds.bind(s),l=c.nowSeconds.bind(c),p=l,f=void 0!==a,d=function(){var e=(0,r.R)().performance
if(e&&e.now){var t=36e5,n=e.now(),o=Date.now(),s=e.timeOrigin?Math.abs(e.timeOrigin+n-o):t,a=s<t,c=e.timing&&e.timing.navigationStart,u="number"==typeof c?Math.abs(c+n-o):t
return a||u<t?s<=u?(i="timeOrigin",e.timeOrigin):(i="navigationStart",c):(i="dateNow",o)}i="none"}()},1442:function(e,t,n){"use strict"
var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.Centrifuge=void 0
const o=n(3979),i=n(7939),s=n(3556),a=n(9291),c=n(7280),u=n(5223),l=n(9428),p=n(680),f=n(1077),d=n(9241),h=r(n(8291)),v={protocol:"json",token:null,getToken:null,data:null,debug:!1,name:"js",version:"",fetch:null,readableStream:null,websocket:null,eventsource:null,sockjs:null,sockjsOptions:{},emulationEndpoint:"/emulation",minReconnectDelay:500,maxReconnectDelay:2e4,timeout:5e3,maxServerPingDelay:1e4}
class m extends h.default{constructor(e,t){super(),this._reconnectTimeout=null,this._refreshTimeout=null,this._serverPingTimeout=null,this.state=d.State.Disconnected,this._endpoint=e,this._emulation=!1,this._transports=[],this._currentTransportIndex=0,this._triedAllTransports=!1,this._transportWasOpen=!1,this._transport=null,this._transportClosed=!0,this._encoder=null,this._decoder=null,this._reconnectTimeout=null,this._reconnectAttempts=0,this._client=null,this._session="",this._node="",this._subs={},this._serverSubs={},this._commandId=0,this._commands=[],this._batching=!1,this._refreshRequired=!1,this._refreshTimeout=null,this._callbacks={},this._token=void 0,this._dispatchPromise=Promise.resolve(),this._serverPing=0,this._serverPingTimeout=null,this._sendPong=!1,this._promises={},this._promiseId=0,this._debugEnabled=!1,this._config=Object.assign(Object.assign({},v),t),this._configure(),this._debugEnabled?(this.on("state",(e=>{this._debug("client state",e.oldState,"->",e.newState)})),this.on("error",(e=>{this._debug("client error",e)}))):this.on("error",(function(){Function.prototype()}))}newSubscription(e,t){if(null!==this.getSubscription(e))throw new Error("Subscription to the channel "+e+" already exists")
const n=new o.Subscription(this,e,t)
return this._subs[e]=n,n}getSubscription(e){return this._getSub(e)}removeSubscription(e){e&&(e.state!==d.SubscriptionState.Unsubscribed&&e.unsubscribe(),this._removeSubscription(e))}subscriptions(){return this._subs}ready(e){return this.state===d.State.Disconnected?Promise.reject({code:i.errorCodes.clientDisconnected,message:"client disconnected"}):this.state===d.State.Connected?Promise.resolve():new Promise(((t,n)=>{const r={resolve:t,reject:n}
e&&(r.timeout=setTimeout((function(){n({code:i.errorCodes.timeout,message:"timeout"})}),e)),this._promises[this._nextPromiseId()]=r}))}connect(){this._isConnected()?this._debug("connect called when already connected"):this._isConnecting()?this._debug("connect called when already connecting"):(this._reconnectAttempts=0,this._startConnecting())}disconnect(){this._disconnect(i.disconnectedCodes.disconnectCalled,"disconnect called",!1)}send(e){const t={send:{data:e}},n=this
return this._methodCall().then((function(){return n._transportSendCommands([t])?Promise.resolve():Promise.reject(n._createErrorObject(i.errorCodes.transportWriteError,"transport write error"))}))}rpc(e,t){const n={rpc:{method:e,data:t}},r=this
return this._methodCall().then((function(){return r._callPromise(n,(function(e){return{data:e.rpc.data}}))}))}publish(e,t){const n={publish:{channel:e,data:t}},r=this
return this._methodCall().then((function(){return r._callPromise(n,(function(){return{}}))}))}history(e,t){const n={history:this._getHistoryRequest(e,t)},r=this
return this._methodCall().then((function(){return r._callPromise(n,(function(t){const n=t.history,o=[]
if(n.publications)for(let i=0;i<n.publications.length;i++)o.push(r._getPublicationContext(e,n.publications[i]))
return{publications:o,epoch:n.epoch||"",offset:n.offset||0}}))}))}presence(e){const t={presence:{channel:e}},n=this
return this._methodCall().then((function(){return n._callPromise(t,(function(e){return{clients:e.presence.presence}}))}))}presenceStats(e){const t={presence_stats:{channel:e}},n=this
return this._methodCall().then((function(){return n._callPromise(t,(function(e){const t=e.presence_stats
return{numUsers:t.num_users,numClients:t.num_clients}}))}))}startBatching(){this._batching=!0}stopBatching(){const e=this
Promise.resolve().then((function(){Promise.resolve().then((function(){e._batching=!1,e._flush()}))}))}_debug(){if(this._debugEnabled){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];(0,f.log)("debug",t)}}_setFormat(e){if(!this._formatOverride(e)){if("protobuf"===e)throw new Error("not implemented by JSON-only Centrifuge client, use client with Protobuf support")
this._encoder=new p.JsonEncoder,this._decoder=new p.JsonDecoder}}_formatOverride(e){return!1}_configure(){if(!("Promise"in globalThis))throw new Error("Promise polyfill required")
if(!this._endpoint)throw new Error("endpoint configuration required")
if("json"!==this._config.protocol&&"protobuf"!==this._config.protocol)throw new Error("unsupported protocol "+this._config.protocol)
if(null!==this._config.token&&(this._token=this._config.token),this._setFormat("json"),"protobuf"===this._config.protocol&&this._setFormat("protobuf"),(!0===this._config.debug||"undefined"!=typeof localStorage&&localStorage.getItem("centrifuge.debug"))&&(this._debugEnabled=!0),this._debug("config",this._config),"string"==typeof this._endpoint);else{if(!("object"==typeof this._endpoint&&this._endpoint instanceof Array))throw new Error("unsupported url configuration type: only string or array of objects are supported")
this._transports=this._endpoint,this._emulation=!0
for(const e in this._transports){const t=this._transports[e]
if(!t.endpoint||!t.transport)throw new Error("malformed transport configuration")
const n=t.transport
if(["websocket","http_stream","sse","sockjs","webtransport"].indexOf(n)<0)throw new Error("unsupported transport name: "+n)}}}_setState(e){if(this.state!==e){const t=this.state
return this.state=e,this.emit("state",{newState:e,oldState:t}),!0}return!1}_isDisconnected(){return this.state===d.State.Disconnected}_isConnecting(){return this.state===d.State.Connecting}_isConnected(){return this.state===d.State.Connected}_nextCommandId(){return++this._commandId}_getReconnectDelay(){const e=(0,f.backoff)(this._reconnectAttempts,this._config.minReconnectDelay,this._config.maxReconnectDelay)
return this._reconnectAttempts+=1,e}_clearOutgoingRequests(){for(const e in this._callbacks)if(this._callbacks.hasOwnProperty(e)){const t=this._callbacks[e]
clearTimeout(t.timeout)
const n=t.errback
if(!n)continue
n({error:this._createErrorObject(i.errorCodes.connectionClosed,"connection closed")})}this._callbacks={}}_clearConnectedState(){this._client=null,this._clearServerPingTimeout(),this._clearRefreshTimeout()
for(const e in this._subs){if(!this._subs.hasOwnProperty(e))continue
const t=this._subs[e]
t.state===d.SubscriptionState.Subscribed&&t._setSubscribing(i.subscribingCodes.transportClosed,"transport closed")}for(const e in this._serverSubs)this._serverSubs.hasOwnProperty(e)&&this.emit("subscribing",{channel:e})}_handleWriteError(e){for(const t of e){const e=t.id
if(!(e in this._callbacks))continue
const n=this._callbacks[e]
clearTimeout(this._callbacks[e].timeout),delete this._callbacks[e],(0,n.errback)({error:this._createErrorObject(i.errorCodes.transportWriteError,"transport write error")})}}_transportSendCommands(e){if(!e.length)return!0
if(!this._transport)return!1
try{this._transport.send(this._encoder.encodeCommands(e),this._session,this._node)}catch(t){return this._debug("error writing commands",t),this._handleWriteError(e),!1}return!0}_initializeTransport(){let e
null!==this._config.websocket?e=this._config.websocket:"function"!=typeof globalThis.WebSocket&&"object"!=typeof globalThis.WebSocket||(e=globalThis.WebSocket)
let t=null
null!==this._config.sockjs?t=this._config.sockjs:void 0!==globalThis.SockJS&&(t=globalThis.SockJS)
let n=null
null!==this._config.eventsource?n=this._config.eventsource:void 0!==globalThis.EventSource&&(n=globalThis.EventSource)
let r=null
null!==this._config.fetch?r=this._config.fetch:void 0!==globalThis.fetch&&(r=globalThis.fetch)
let o=null
if(null!==this._config.readableStream?o=this._config.readableStream:void 0!==globalThis.ReadableStream&&(o=globalThis.ReadableStream),this._emulation){this._currentTransportIndex>=this._transports.length&&(this._triedAllTransports=!0,this._currentTransportIndex=0)
let i=0
for(;;){if(i>=this._transports.length)throw new Error("no supported transport found")
const p=this._transports[this._currentTransportIndex],f=p.transport,d=p.endpoint
if("websocket"===f){if(this._debug("trying websocket transport"),this._transport=new a.WebsocketTransport(d,{websocket:e}),!this._transport.supported()){this._debug("websocket transport not available"),this._currentTransportIndex++,i++
continue}}else if("webtransport"===f){if(this._debug("trying webtransport transport"),this._transport=new l.WebtransportTransport(d,{webtransport:globalThis.WebTransport,decoder:this._decoder,encoder:this._encoder}),!this._transport.supported()){this._debug("webtransport transport not available"),this._currentTransportIndex++,i++
continue}}else if("http_stream"===f){if(this._debug("trying http_stream transport"),this._transport=new c.HttpStreamTransport(d,{fetch:r,readableStream:o,emulationEndpoint:this._config.emulationEndpoint,decoder:this._decoder,encoder:this._encoder}),!this._transport.supported()){this._debug("http_stream transport not available"),this._currentTransportIndex++,i++
continue}}else if("sse"===f){if(this._debug("trying sse transport"),this._transport=new u.SseTransport(d,{eventsource:n,fetch:r,emulationEndpoint:this._config.emulationEndpoint}),!this._transport.supported()){this._debug("sse transport not available"),this._currentTransportIndex++,i++
continue}}else{if("sockjs"!==f)throw new Error("unknown transport "+f)
if(this._debug("trying sockjs"),this._transport=new s.SockjsTransport(d,{sockjs:t,sockjsOptions:this._config.sockjsOptions}),!this._transport.supported()){this._debug("sockjs transport not available"),this._currentTransportIndex++,i++
continue}}break}}else{if((0,f.startsWith)(this._endpoint,"http"))throw new Error("Provide explicit transport endpoints configuration in case of using HTTP (i.e. using array of TransportEndpoint instead of a single string), or use ws(s):// scheme in an endpoint if you aimed using WebSocket transport")
if(this._debug("client will use websocket"),this._transport=new a.WebsocketTransport(this._endpoint,{websocket:e}),!this._transport.supported())throw new Error("WebSocket not available")}const p=this
let d,h=!1,v=!0
"sse"===this._transport.name()&&(v=!1)
const m=[]
if(this._transport.emulation()){const e=p._sendConnect(!0)
if(m.push(e),v){const e=p._sendSubscribeCommands(!0,!0)
for(const t in e)m.push(e[t])}}const g=this._encoder.encodeCommands(m)
this._transport.initialize(this._config.protocol,{onOpen:function(){h=!0,d=p._transport.subName(),p._debug(d,"transport open"),p._transportWasOpen=!0,p._transportClosed=!1,p._transport.emulation()||(p.startBatching(),p._sendConnect(!1),v&&p._sendSubscribeCommands(!0,!1),p.stopBatching())},onError:function(e){p._debug("transport level error",e)},onClose:function(e){p._debug(p._transport.name(),"transport closed"),p._transportClosed=!0
let t="connection closed",n=!0,r=0
if(e&&"code"in e&&e.code&&(r=e.code),e&&e.reason)try{const r=JSON.parse(e.reason)
t=r.reason,n=r.reconnect}catch(o){t=e.reason,(r>=3500&&r<4e3||r>=4500&&r<5e3)&&(n=!1)}r<3e3?(1009===r?(r=i.disconnectedCodes.messageSizeLimit,t="message size limit exceeded",n=!1):(r=i.connectingCodes.transportClosed,t="transport closed"),p._emulation&&!p._transportWasOpen&&(p._currentTransportIndex++,p._currentTransportIndex>=p._transports.length&&(p._triedAllTransports=!0,p._currentTransportIndex=0))):p._transportWasOpen=!0
let o=!1
if(!p._emulation||p._transportWasOpen||p._triedAllTransports||(o=!0),p._isConnecting()&&!h&&p.emit("error",{type:"transport",error:{code:i.errorCodes.transportClosed,message:"transport closed"},transport:p._transport.name()}),p._disconnect(r,t,n),p._isConnecting()){let e=p._getReconnectDelay()
o&&(e=0),p._debug("reconnect after "+e+" milliseconds"),p._reconnectTimeout=setTimeout((()=>{p._startReconnecting()}),e)}},onMessage:function(e){p._dataReceived(e)}},g)}_sendConnect(e){const t=this._constructConnectCommand(),n=this
return this._call(t,e).then((e=>{const t=e.reply.connect
n._connectResponse(t),e.next&&e.next()}),(e=>{n._connectError(e.error),e.next&&e.next()})),t}_startReconnecting(){if(!this._isConnecting())return
if(!this._refreshRequired&&(this._token||null===this._config.getToken))return void this._initializeTransport()
const e=this
this._getToken().then((function(t){e._isConnecting()&&(t?(e._token=t,e._debug("connection token refreshed"),e._initializeTransport()):e._failUnauthorized())})).catch((function(t){if(!e._isConnecting())return
e.emit("error",{type:"connectToken",error:{code:i.errorCodes.clientConnectToken,message:void 0!==t?t.toString():""}})
const n=e._getReconnectDelay()
e._debug("error on connection token refresh, reconnect after "+n+" milliseconds",t),e._reconnectTimeout=setTimeout((()=>{e._startReconnecting()}),n)}))}_connectError(e){this.state===d.State.Connecting&&(109===e.code&&(this._refreshRequired=!0),e.code<100||!0===e.temporary||109===e.code?(this.emit("error",{type:"connect",error:e}),this._transport&&!this._transportClosed&&(this._transportClosed=!0,this._transport.close())):this._disconnect(e.code,e.message,!1))}_constructConnectCommand(){const e={}
this._token&&(e.token=this._token),this._config.data&&(e.data=this._config.data),this._config.name&&(e.name=this._config.name),this._config.version&&(e.version=this._config.version)
const t={}
let n=!1
for(const r in this._serverSubs)if(this._serverSubs.hasOwnProperty(r)&&this._serverSubs[r].recoverable){n=!0
const e={recover:!0}
this._serverSubs[r].offset&&(e.offset=this._serverSubs[r].offset),this._serverSubs[r].epoch&&(e.epoch=this._serverSubs[r].epoch),t[r]=e}return n&&(e.subs=t),{connect:e}}_getHistoryRequest(e,t){const n={channel:e}
return void 0!==t&&(t.since&&(n.since={offset:t.since.offset},t.since.epoch&&(n.since.epoch=t.since.epoch)),void 0!==t.limit&&(n.limit=t.limit),!0===t.reverse&&(n.reverse=!0)),n}_methodCall(){return this._isConnected()?Promise.resolve():new Promise(((e,t)=>{const n=setTimeout((function(){t({code:i.errorCodes.timeout,message:"timeout"})}),this._config.timeout)
this._promises[this._nextPromiseId()]={timeout:n,resolve:e,reject:t}}))}_callPromise(e,t){return new Promise(((n,r)=>{this._call(e,!1).then((e=>{n(t(e.reply)),e.next&&e.next()}),(e=>{r(e.error),e.next&&e.next()}))}))}_dataReceived(e){this._serverPing>0&&this._waitServerPing()
const t=this._decoder.decodeReplies(e)
this._dispatchPromise=this._dispatchPromise.then((()=>{let e
this._dispatchPromise=new Promise((t=>{e=t})),this._dispatchSynchronized(t,e)}))}_dispatchSynchronized(e,t){let n=Promise.resolve()
for(const r in e)e.hasOwnProperty(r)&&(n=n.then((()=>this._dispatchReply(e[r]))))
n=n.then((()=>{t()}))}_dispatchReply(e){let t
const n=new Promise((e=>{t=e}))
if(null==e)return this._debug("dispatch: got undefined or null reply"),t(),n
const r=e.id
return r&&r>0?this._handleReply(e,t):e.push?this._handlePush(e.push,t):this._handleServerPing(t),n}_call(e,t){return new Promise(((n,r)=>{e.id=this._nextCommandId(),this._registerCall(e.id,n,r),t||this._addCommand(e)}))}_startConnecting(){this._debug("start connecting"),this._setState(d.State.Connecting)&&this.emit("connecting",{code:i.connectingCodes.connectCalled,reason:"connect called"}),this._client=null,this._startReconnecting()}_disconnect(e,t,n){if(this._isDisconnected())return
const r=this.state,o={code:e,reason:t}
let s=!1
n?s=this._setState(d.State.Connecting):(s=this._setState(d.State.Disconnected),this._rejectPromises({code:i.errorCodes.clientDisconnected,message:"disconnected"})),this._clearOutgoingRequests(),r===d.State.Connecting&&this._clearReconnectTimeout(),r===d.State.Connected&&this._clearConnectedState(),s&&(this._isConnecting()?this.emit("connecting",o):this.emit("disconnected",o)),this._transport&&!this._transportClosed&&(this._transportClosed=!0,this._transport.close())}_failUnauthorized(){this._disconnect(i.disconnectedCodes.unauthorized,"unauthorized",!1)}_getToken(){if(this._debug("get connection token"),!this._config.getToken)throw new Error("provide a function to get connection token")
return this._config.getToken({})}_refresh(){const e=this._client,t=this
this._getToken().then((function(n){if(e!==t._client)return
if(!n)return void t._failUnauthorized()
if(t._token=n,t._debug("connection token refreshed"),!t._isConnected())return
const r={refresh:{token:t._token}}
t._call(r,!1).then((e=>{const n=e.reply.refresh
t._refreshResponse(n),e.next&&e.next()}),(e=>{t._refreshError(e.error),e.next&&e.next()}))})).catch((function(e){t.emit("error",{type:"refreshToken",error:{code:i.errorCodes.clientRefreshToken,message:void 0!==e?e.toString():""}}),t._refreshTimeout=setTimeout((()=>t._refresh()),t._getRefreshRetryDelay())}))}_refreshError(e){e.code<100||!0===e.temporary?(this.emit("error",{type:"refresh",error:e}),this._refreshTimeout=setTimeout((()=>this._refresh()),this._getRefreshRetryDelay())):this._disconnect(e.code,e.message,!1)}_getRefreshRetryDelay(){return(0,f.backoff)(0,5e3,1e4)}_refreshResponse(e){this._refreshTimeout&&(clearTimeout(this._refreshTimeout),this._refreshTimeout=null),e.expires&&(this._client=e.client,this._refreshTimeout=setTimeout((()=>this._refresh()),(0,f.ttlMilliseconds)(e.ttl)))}_removeSubscription(e){null!==e&&delete this._subs[e.channel]}_unsubscribe(e){if(!this._isConnected())return
const t={unsubscribe:{channel:e.channel}},n=this
this._call(t,!1).then((e=>{e.next&&e.next()}),(e=>{e.next&&e.next(),n._disconnect(i.connectingCodes.unsubscribeError,"unsubscribe error",!0)}))}_getSub(e){return this._subs[e]||null}_isServerSub(e){return void 0!==this._serverSubs[e]}_sendSubscribeCommands(e,t){const n=[]
for(const r in this._subs){if(!this._subs.hasOwnProperty(r))continue
const o=this._subs[r]
if(!0!==o._inflight&&o.state===d.SubscriptionState.Subscribing){const r=o._subscribe(e,t)
r&&n.push(r)}}return n}_connectResponse(e){if(this._transportWasOpen=!0,this._reconnectAttempts=0,this._refreshRequired=!1,this._isConnected())return
this._client=e.client,this._setState(d.State.Connected),this._refreshTimeout&&clearTimeout(this._refreshTimeout),e.expires&&(this._refreshTimeout=setTimeout((()=>this._refresh()),(0,f.ttlMilliseconds)(e.ttl))),this._session=e.session,this._node=e.node,this.startBatching(),this._sendSubscribeCommands(!1,!1),this.stopBatching()
const t={client:e.client,transport:this._transport.subName()}
e.data&&(t.data=e.data),this.emit("connected",t),this._resolvePromises(),this._processServerSubs(e.subs||{}),e.ping&&e.ping>0?(this._serverPing=1e3*e.ping,this._sendPong=!0===e.pong,this._waitServerPing()):this._serverPing=0}_processServerSubs(e){for(const t in e){if(!e.hasOwnProperty(t))continue
const n=e[t]
this._serverSubs[t]={offset:n.offset,epoch:n.epoch,recoverable:n.recoverable||!1}
const r=this._getSubscribeContext(t,n)
this.emit("subscribed",r)}for(const t in e){if(!e.hasOwnProperty(t))continue
const n=e[t]
if(n.recovered){const e=n.publications
if(e&&e.length>0)for(const n in e)e.hasOwnProperty(n)&&this._handlePublication(t,e[n])}}for(const t in this._serverSubs)this._serverSubs.hasOwnProperty(t)&&(e[t]||(this.emit("unsubscribed",{channel:t}),delete this._serverSubs[t]))}_clearRefreshTimeout(){null!==this._refreshTimeout&&(clearTimeout(this._refreshTimeout),this._refreshTimeout=null)}_clearReconnectTimeout(){null!==this._reconnectTimeout&&(clearTimeout(this._reconnectTimeout),this._reconnectTimeout=null)}_clearServerPingTimeout(){null!==this._serverPingTimeout&&(clearTimeout(this._serverPingTimeout),this._serverPingTimeout=null)}_waitServerPing(){0!==this._config.maxServerPingDelay&&this._isConnected()&&(this._clearServerPingTimeout(),this._serverPingTimeout=setTimeout((()=>{this._isConnected()&&this._disconnect(i.connectingCodes.noPing,"no ping",!0)}),this._serverPing+this._config.maxServerPingDelay))}_getSubscribeContext(e,t){const n={channel:e,positioned:!1,recoverable:!1,wasRecovering:!1,recovered:!1}
t.recovered&&(n.recovered=!0),t.positioned&&(n.positioned=!0),t.recoverable&&(n.recoverable=!0),t.was_recovering&&(n.wasRecovering=!0)
let r=""
"epoch"in t&&(r=t.epoch)
let o=0
return"offset"in t&&(o=t.offset),(n.positioned||n.recoverable)&&(n.streamPosition={offset:o,epoch:r}),t.data&&(n.data=t.data),n}_handleReply(e,t){const n=e.id
if(!(n in this._callbacks))return void t()
const r=this._callbacks[n]
if(clearTimeout(this._callbacks[n].timeout),delete this._callbacks[n],(0,f.errorExists)(e)){const n=r.errback
if(!n)return void t()
n({error:e.error,next:t})}else{const n=r.callback
if(!n)return
n({reply:e,next:t})}}_handleJoin(e,t){const n=this._getSub(e)
if(n)n._handleJoin(t)
else if(this._isServerSub(e)){const n={channel:e,info:this._getJoinLeaveContext(t.info)}
this.emit("join",n)}}_handleLeave(e,t){const n=this._getSub(e)
if(n)n._handleLeave(t)
else if(this._isServerSub(e)){const n={channel:e,info:this._getJoinLeaveContext(t.info)}
this.emit("leave",n)}}_handleUnsubscribe(e,t){const n=this._getSub(e)
n?t.code<2500?n._setUnsubscribed(t.code,t.reason,!1):n._setSubscribing(t.code,t.reason):this._isServerSub(e)&&(delete this._serverSubs[e],this.emit("unsubscribed",{channel:e}))}_handleSubscribe(e,t){this._serverSubs[e]={offset:t.offset,epoch:t.epoch,recoverable:t.recoverable||!1},this.emit("subscribed",this._getSubscribeContext(e,t))}_handleDisconnect(e){const t=e.code
let n=!0;(t>=3500&&t<4e3||t>=4500&&t<5e3)&&(n=!1),this._disconnect(t,e.reason,n)}_getPublicationContext(e,t){const n={channel:e,data:t.data}
return t.offset&&(n.offset=t.offset),t.info&&(n.info=this._getJoinLeaveContext(t.info)),t.tags&&(n.tags=t.tags),n}_getJoinLeaveContext(e){const t={client:e.client,user:e.user}
return e.conn_info&&(t.connInfo=e.conn_info),e.chan_info&&(t.chanInfo=e.chan_info),t}_handlePublication(e,t){const n=this._getSub(e)
if(n)n._handlePublication(t)
else if(this._isServerSub(e)){const n=this._getPublicationContext(e,t)
this.emit("publication",n),void 0!==t.offset&&(this._serverSubs[e].offset=t.offset)}}_handleMessage(e){this.emit("message",{data:e.data})}_handleServerPing(e){if(this._sendPong){const e={}
this._transportSendCommands([e])}e()}_handlePush(e,t){const n=e.channel
e.pub?this._handlePublication(n,e.pub):e.message?this._handleMessage(e.message):e.join?this._handleJoin(n,e.join):e.leave?this._handleLeave(n,e.leave):e.unsubscribe?this._handleUnsubscribe(n,e.unsubscribe):e.subscribe?this._handleSubscribe(n,e.subscribe):e.disconnect&&this._handleDisconnect(e.disconnect),t()}_flush(){const e=this._commands.slice(0)
this._commands=[],this._transportSendCommands(e)}_createErrorObject(e,t,n){const r={code:e,message:t}
return n&&(r.temporary=!0),r}_registerCall(e,t,n){this._callbacks[e]={callback:t,errback:n,timeout:null},this._callbacks[e].timeout=setTimeout((()=>{delete this._callbacks[e],(0,f.isFunction)(n)&&n({error:this._createErrorObject(i.errorCodes.timeout,"timeout")})}),this._config.timeout)}_addCommand(e){this._batching?this._commands.push(e):this._transportSendCommands([e])}_nextPromiseId(){return++this._promiseId}_resolvePromises(){for(const e in this._promises)this._promises[e].timeout&&clearTimeout(this._promises[e].timeout),this._promises[e].resolve(),delete this._promises[e]}_rejectPromises(e){for(const t in this._promises)this._promises[t].timeout&&clearTimeout(this._promises[t].timeout),this._promises[t].reject(e),delete this._promises[t]}}t.Centrifuge=m,m.SubscriptionState=d.SubscriptionState,m.State=d.State},7939:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.unsubscribedCodes=t.subscribingCodes=t.disconnectedCodes=t.connectingCodes=t.errorCodes=void 0,t.errorCodes={timeout:1,transportClosed:2,clientDisconnected:3,clientClosed:4,clientConnectToken:5,clientRefreshToken:6,subscriptionUnsubscribed:7,subscriptionSubscribeToken:8,subscriptionRefreshToken:9,transportWriteError:10,connectionClosed:11},t.connectingCodes={connectCalled:0,transportClosed:1,noPing:2,subscribeTimeout:3,unsubscribeError:4},t.disconnectedCodes={disconnectCalled:0,unauthorized:1,badProtocol:2,messageSizeLimit:3},t.subscribingCodes={subscribeCalled:0,transportClosed:1},t.unsubscribedCodes={unsubscribeCalled:0,unauthorized:1,clientClosed:2}},6468:function(e,t,n){"use strict"
var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var o=Object.getOwnPropertyDescriptor(t,n)
o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),t.Subscription=t.Centrifuge=void 0
const i=n(1442)
Object.defineProperty(t,"Centrifuge",{enumerable:!0,get:function(){return i.Centrifuge}})
const s=n(3979)
Object.defineProperty(t,"Subscription",{enumerable:!0,get:function(){return s.Subscription}}),o(n(9241),t)},680:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.JsonDecoder=t.JsonEncoder=void 0,t.JsonEncoder=class{encodeCommands(e){return e.map((e=>JSON.stringify(e))).join("\n")}},t.JsonDecoder=class{decodeReplies(e){return e.trim().split("\n").map((e=>JSON.parse(e)))}}},3979:function(e,t,n){"use strict"
var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.Subscription=void 0
const o=r(n(8291)),i=n(7939),s=n(9241),a=n(1077)
class c extends o.default{constructor(e,t,n){super(),this._resubscribeTimeout=null,this._refreshTimeout=null,this.channel=t,this.state=s.SubscriptionState.Unsubscribed,this._centrifuge=e,this._token=null,this._getToken=null,this._data=null,this._recover=!1,this._offset=null,this._epoch=null,this._recoverable=!1,this._positioned=!1,this._joinLeave=!1,this._minResubscribeDelay=500,this._maxResubscribeDelay=2e4,this._resubscribeTimeout=null,this._resubscribeAttempts=0,this._promises={},this._promiseId=0,this._inflight=!1,this._refreshTimeout=null,this._setOptions(n),this._centrifuge._debugEnabled?(this.on("state",(e=>{this._centrifuge._debug("subscription state",t,e.oldState,"->",e.newState)})),this.on("error",(e=>{this._centrifuge._debug("subscription error",t,e)}))):this.on("error",(function(){Function.prototype()}))}ready(e){return this.state===s.SubscriptionState.Unsubscribed?Promise.reject({code:i.errorCodes.subscriptionUnsubscribed,message:this.state}):this.state===s.SubscriptionState.Subscribed?Promise.resolve():new Promise(((t,n)=>{const r={resolve:t,reject:n}
e&&(r.timeout=setTimeout((function(){n({code:i.errorCodes.timeout,message:"timeout"})}),e)),this._promises[this._nextPromiseId()]=r}))}subscribe(){this._isSubscribed()||(this._resubscribeAttempts=0,this._setSubscribing(i.subscribingCodes.subscribeCalled,"subscribe called"))}unsubscribe(){this._setUnsubscribed(i.unsubscribedCodes.unsubscribeCalled,"unsubscribe called",!0)}publish(e){const t=this
return this._methodCall().then((function(){return t._centrifuge.publish(t.channel,e)}))}presence(){const e=this
return this._methodCall().then((function(){return e._centrifuge.presence(e.channel)}))}presenceStats(){const e=this
return this._methodCall().then((function(){return e._centrifuge.presenceStats(e.channel)}))}history(e){const t=this
return this._methodCall().then((function(){return t._centrifuge.history(t.channel,e)}))}_methodCall(){return this._isSubscribed()?Promise.resolve():this._isUnsubscribed()?Promise.reject({code:i.errorCodes.subscriptionUnsubscribed,message:this.state}):new Promise(((e,t)=>{const n=setTimeout((function(){t({code:i.errorCodes.timeout,message:"timeout"})}),this._centrifuge._config.timeout)
this._promises[this._nextPromiseId()]={timeout:n,resolve:e,reject:t}}))}_nextPromiseId(){return++this._promiseId}_needRecover(){return!0===this._recover}_isUnsubscribed(){return this.state===s.SubscriptionState.Unsubscribed}_isSubscribing(){return this.state===s.SubscriptionState.Subscribing}_isSubscribed(){return this.state===s.SubscriptionState.Subscribed}_setState(e){if(this.state!==e){const t=this.state
return this.state=e,this.emit("state",{newState:e,oldState:t,channel:this.channel}),!0}return!1}_usesToken(){return null!==this._token||null!==this._getToken}_clearSubscribingState(){this._resubscribeAttempts=0,this._clearResubscribeTimeout()}_clearSubscribedState(){this._clearRefreshTimeout()}_setSubscribed(e){if(!this._isSubscribing())return
this._clearSubscribingState(),e.recoverable&&(this._recover=!0,this._offset=e.offset||0,this._epoch=e.epoch||""),this._setState(s.SubscriptionState.Subscribed)
const t=this._centrifuge._getSubscribeContext(this.channel,e)
this.emit("subscribed",t),this._resolvePromises()
const n=e.publications
if(n&&n.length>0)for(const r in n)n.hasOwnProperty(r)&&this._handlePublication(n[r])
!0===e.expires&&(this._refreshTimeout=setTimeout((()=>this._refresh()),(0,a.ttlMilliseconds)(e.ttl)))}_setSubscribing(e,t){this._isSubscribing()||(this._isSubscribed()&&this._clearSubscribedState(),this._setState(s.SubscriptionState.Subscribing)&&this.emit("subscribing",{channel:this.channel,code:e,reason:t}),this._subscribe(!1,!1))}_subscribe(e,t){if(this._centrifuge._debug("subscribing on",this.channel),this._centrifuge.state!==s.State.Connected&&!e)return this._centrifuge._debug("delay subscribe on",this.channel,"till connected"),null
if(this._usesToken()){if(this._token)return this._sendSubscribe(this._token,t)
{if(e)return null
const t=this
return this._getSubscriptionToken().then((function(e){t._isSubscribing()&&(e?(t._token=e,t._sendSubscribe(e,!1)):t._failUnauthorized())})).catch((function(e){t._isSubscribing()&&(t.emit("error",{type:"subscribeToken",channel:t.channel,error:{code:i.errorCodes.subscriptionSubscribeToken,message:void 0!==e?e.toString():""}}),t._scheduleResubscribe())})),null}}return this._sendSubscribe("",t)}_sendSubscribe(e,t){const n={channel:this.channel}
if(e&&(n.token=e),this._data&&(n.data=this._data),this._positioned&&(n.positioned=!0),this._recoverable&&(n.recoverable=!0),this._joinLeave&&(n.join_leave=!0),this._needRecover()){n.recover=!0
const e=this._getOffset()
e&&(n.offset=e)
const t=this._getEpoch()
t&&(n.epoch=t)}const r={subscribe:n}
return this._inflight=!0,this._centrifuge._call(r,t).then((e=>{this._inflight=!1
const t=e.reply.subscribe
this._handleSubscribeResponse(t),e.next&&e.next()}),(e=>{this._inflight=!1,this._handleSubscribeError(e.error),e.next&&e.next()})),r}_handleSubscribeError(e){this._isSubscribing()&&(e.code!==i.errorCodes.timeout?this._subscribeError(e):this._centrifuge._disconnect(i.connectingCodes.subscribeTimeout,"subscribe timeout",!0))}_handleSubscribeResponse(e){this._isSubscribing()&&this._setSubscribed(e)}_setUnsubscribed(e,t,n){this._isUnsubscribed()||(this._isSubscribed()&&(n&&this._centrifuge._unsubscribe(this),this._clearSubscribedState()),this._isSubscribing()&&this._clearSubscribingState(),this._setState(s.SubscriptionState.Unsubscribed)&&this.emit("unsubscribed",{channel:this.channel,code:e,reason:t}),this._rejectPromises({code:i.errorCodes.subscriptionUnsubscribed,message:this.state}))}_handlePublication(e){const t=this._centrifuge._getPublicationContext(this.channel,e)
this.emit("publication",t),e.offset&&(this._offset=e.offset)}_handleJoin(e){const t=this._centrifuge._getJoinLeaveContext(e.info)
this.emit("join",{channel:this.channel,info:t})}_handleLeave(e){const t=this._centrifuge._getJoinLeaveContext(e.info)
this.emit("leave",{channel:this.channel,info:t})}_resolvePromises(){for(const e in this._promises)this._promises[e].timeout&&clearTimeout(this._promises[e].timeout),this._promises[e].resolve(),delete this._promises[e]}_rejectPromises(e){for(const t in this._promises)this._promises[t].timeout&&clearTimeout(this._promises[t].timeout),this._promises[t].reject(e),delete this._promises[t]}_scheduleResubscribe(){const e=this,t=this._getResubscribeDelay()
this._resubscribeTimeout=setTimeout((function(){e._isSubscribing()&&e._subscribe(!1,!1)}),t)}_subscribeError(e){if(this._isSubscribing())if(e.code<100||109===e.code||!0===e.temporary){109===e.code&&(this._token=null)
const t={channel:this.channel,type:"subscribe",error:e}
this._centrifuge.state===s.State.Connected&&this.emit("error",t),this._scheduleResubscribe()}else this._setUnsubscribed(e.code,e.message,!1)}_getResubscribeDelay(){const e=(0,a.backoff)(this._resubscribeAttempts,this._minResubscribeDelay,this._maxResubscribeDelay)
return this._resubscribeAttempts++,e}_setOptions(e){e&&(e.since&&(this._offset=e.since.offset,this._epoch=e.since.epoch,this._recover=!0),e.data&&(this._data=e.data),void 0!==e.minResubscribeDelay&&(this._minResubscribeDelay=e.minResubscribeDelay),void 0!==e.maxResubscribeDelay&&(this._maxResubscribeDelay=e.maxResubscribeDelay),e.token&&(this._token=e.token),e.getToken&&(this._getToken=e.getToken),!0===e.positioned&&(this._positioned=!0),!0===e.recoverable&&(this._recoverable=!0),!0===e.joinLeave&&(this._joinLeave=!0))}_getOffset(){const e=this._offset
return null!==e?e:0}_getEpoch(){const e=this._epoch
return null!==e?e:""}_clearRefreshTimeout(){null!==this._refreshTimeout&&(clearTimeout(this._refreshTimeout),this._refreshTimeout=null)}_clearResubscribeTimeout(){null!==this._resubscribeTimeout&&(clearTimeout(this._resubscribeTimeout),this._resubscribeTimeout=null)}_getSubscriptionToken(){this._centrifuge._debug("get subscription token for channel",this.channel)
const e={channel:this.channel},t=this._getToken
if(null===t)throw new Error("provide a function to get channel subscription token")
return t(e)}_refresh(){this._clearRefreshTimeout()
const e=this
this._getSubscriptionToken().then((function(t){if(!e._isSubscribed())return
if(!t)return void e._failUnauthorized()
e._token=t
const n={sub_refresh:{channel:e.channel,token:t}}
e._centrifuge._call(n).then((t=>{const n=t.reply.sub_refresh
e._refreshResponse(n),t.next&&t.next()}),(t=>{e._refreshError(t.error),t.next&&t.next()}))})).catch((function(t){e.emit("error",{type:"refreshToken",channel:e.channel,error:{code:i.errorCodes.subscriptionRefreshToken,message:void 0!==t?t.toString():""}}),e._refreshTimeout=setTimeout((()=>e._refresh()),e._getRefreshRetryDelay())}))}_refreshResponse(e){this._isSubscribed()&&(this._centrifuge._debug("subscription token refreshed, channel",this.channel),this._clearRefreshTimeout(),!0===e.expires&&(this._refreshTimeout=setTimeout((()=>this._refresh()),(0,a.ttlMilliseconds)(e.ttl))))}_refreshError(e){this._isSubscribed()&&(e.code<100||!0===e.temporary?(this.emit("error",{type:"refresh",channel:this.channel,error:e}),this._refreshTimeout=setTimeout((()=>this._refresh()),this._getRefreshRetryDelay())):this._setUnsubscribed(e.code,e.message,!0))}_getRefreshRetryDelay(){return(0,a.backoff)(0,1e4,2e4)}_failUnauthorized(){this._setUnsubscribed(i.unsubscribedCodes.unauthorized,"unauthorized",!0)}}t.Subscription=c},7280:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.HttpStreamTransport=void 0,t.HttpStreamTransport=class{constructor(e,t){this.endpoint=e,this.options=t,this._abortController=null,this._utf8decoder=new TextDecoder,this._protocol="json"}name(){return"http_stream"}subName(){return"http_stream"}emulation(){return!0}_handleErrors(e){if(!e.ok)throw new Error(e.status)
return e}_fetchEventTarget(e,t,n){const r=new EventTarget
return(0,e.options.fetch)(t,n).then(e._handleErrors).then((t=>{r.dispatchEvent(new Event("open"))
let n="",o=0,i=new Uint8Array
const s=t.body.getReader()
return new e.options.readableStream({start:t=>function a(){return s.read().then((s=>{let{done:c,value:u}=s
if(c)return r.dispatchEvent(new Event("close")),void t.close()
try{if("json"===e._protocol)for(n+=e._utf8decoder.decode(u);o<n.length;)if("\n"===n[o]){const e=n.substring(0,o)
r.dispatchEvent(new MessageEvent("message",{data:e})),n=n.substring(o+1),o=0}else++o
else{const t=new Uint8Array(i.length+u.length)
for(t.set(i),t.set(u,i.length),i=t;;){const t=e.options.decoder.decodeReply(i)
if(!t.ok)break
{const e=i.slice(0,t.pos)
r.dispatchEvent(new MessageEvent("message",{data:e})),i=i.slice(t.pos)}}}}catch(e){return r.dispatchEvent(new Event("error",{detail:e})),r.dispatchEvent(new Event("close")),void t.close()}a()})).catch((function(e){r.dispatchEvent(new Event("error",{detail:e})),r.dispatchEvent(new Event("close")),t.close()}))}()})})).catch((e=>{r.dispatchEvent(new Event("error",{detail:e})),r.dispatchEvent(new Event("close"))})),r}supported(){return null!==this.options.fetch&&null!==this.options.readableStream&&"undefined"!=typeof TextDecoder&&"undefined"!=typeof AbortController&&"undefined"!=typeof EventTarget&&"undefined"!=typeof Event&&"undefined"!=typeof MessageEvent&&"undefined"!=typeof Error}initialize(e,t,n){let r,o
this._protocol=e,this._abortController=new AbortController,"json"===e?(r={Accept:"application/json","Content-Type":"application/json"},o=n):(r={Accept:"application/octet-stream","Content-Type":"application/octet-stream"},o=n)
const i={method:"POST",headers:r,body:o,mode:"cors",credentials:"same-origin",cache:"no-cache",signal:this._abortController.signal},s=this._fetchEventTarget(this,this.endpoint,i)
s.addEventListener("open",(()=>{t.onOpen()})),s.addEventListener("error",(e=>{this._abortController.abort(),t.onError(e)})),s.addEventListener("close",(()=>{this._abortController.abort(),t.onClose({code:4,reason:"connection closed"})})),s.addEventListener("message",(e=>{t.onMessage(e.data)}))}close(){this._abortController.abort()}send(e,t,n){let r,o
const i={session:t,node:n,data:e}
"json"===this._protocol?(r={"Content-Type":"application/json"},o=JSON.stringify(i)):(r={"Content-Type":"application/octet-stream"},o=this.options.encoder.encodeEmulationRequest(i))
const s={method:"POST",headers:r,body:o,mode:"cors",credentials:"same-origin",cache:"no-cache"};(0,this.options.fetch)(this.options.emulationEndpoint,s)}}},3556:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.SockjsTransport=void 0,t.SockjsTransport=class{constructor(e,t){this.endpoint=e,this.options=t,this._transport=null}name(){return"sockjs"}subName(){return"sockjs-"+this._transport.transport}emulation(){return!1}supported(){return null!==this.options.sockjs}initialize(e,t){this._transport=new this.options.sockjs(this.endpoint,null,this.options.sockjsOptions),this._transport.onopen=()=>{t.onOpen()},this._transport.onerror=e=>{t.onError(e)},this._transport.onclose=e=>{t.onClose(e)},this._transport.onmessage=e=>{t.onMessage(e.data)}}close(){this._transport.close()}send(e){this._transport.send(e)}}},5223:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.SseTransport=void 0,t.SseTransport=class{constructor(e,t){this.endpoint=e,this.options=t,this._protocol="json",this._transport=null,this._onClose=null}name(){return"sse"}subName(){return"sse"}emulation(){return!0}supported(){return null!==this.options.eventsource&&null!==this.options.fetch}initialize(e,t,n){let r
r=globalThis&&globalThis.document&&globalThis.document.baseURI?new URL(this.endpoint,globalThis.document.baseURI):new URL(this.endpoint),r.searchParams.append("cf_connect",n)
const o=new this.options.eventsource(r.toString(),{})
this._transport=o,o.onopen=function(){t.onOpen()},o.onerror=function(e){o.close(),t.onError(e),t.onClose({code:4,reason:"connection closed"})},o.onmessage=function(e){t.onMessage(e.data)},this._onClose=function(){t.onClose({code:4,reason:"connection closed"})}}close(){this._transport.close(),null!==this._onClose&&this._onClose()}send(e,t,n){const r={session:t,node:n,data:e},o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r),mode:"cors",credentials:"same-origin",cache:"no-cache"};(0,this.options.fetch)(this.options.emulationEndpoint,o)}}},9291:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.WebsocketTransport=void 0,t.WebsocketTransport=class{constructor(e,t){this.endpoint=e,this.options=t,this._transport=null}name(){return"websocket"}subName(){return"websocket"}emulation(){return!1}supported(){return void 0!==this.options.websocket&&null!==this.options.websocket}initialize(e,t){let n=""
"protobuf"===e&&(n="centrifuge-protobuf"),this._transport=""!==n?new this.options.websocket(this.endpoint,n):new this.options.websocket(this.endpoint),"protobuf"===e&&(this._transport.binaryType="arraybuffer"),this._transport.onopen=()=>{t.onOpen()},this._transport.onerror=e=>{t.onError(e)},this._transport.onclose=e=>{t.onClose(e)},this._transport.onmessage=e=>{t.onMessage(e.data)}}close(){this._transport.close()}send(e){this._transport.send(e)}}},9428:function(e,t){"use strict"
var n=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t
e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))}
Object.defineProperty(t,"__esModule",{value:!0}),t.WebtransportTransport=void 0,t.WebtransportTransport=class{constructor(e,t){this.endpoint=e,this.options=t,this._transport=null,this._stream=null,this._writer=null,this._utf8decoder=new TextDecoder,this._protocol="json"}name(){return"webtransport"}subName(){return"webtransport"}emulation(){return!1}supported(){return void 0!==this.options.webtransport&&null!==this.options.webtransport}initialize(e,t){return n(this,void 0,void 0,(function*(){let n
n=globalThis&&globalThis.document&&globalThis.document.baseURI?new URL(this.endpoint,globalThis.document.baseURI):new URL(this.endpoint),"protobuf"===e&&n.searchParams.append("cf_protocol","protobuf"),this._protocol=e
const r=new EventTarget
this._transport=new this.options.webtransport(n.toString()),this._transport.closed.then((()=>{t.onClose({code:4,reason:"connection closed"})})).catch((()=>{t.onClose({code:4,reason:"connection closed"})}))
try{yield this._transport.ready}catch(e){return void this.close()}let o
try{o=yield this._transport.createBidirectionalStream()}catch(e){return void this.close()}this._stream=o,this._writer=this._stream.writable.getWriter(),r.addEventListener("close",(()=>{t.onClose({code:4,reason:"connection closed"})})),r.addEventListener("message",(e=>{t.onMessage(e.data)})),this._startReading(r),t.onOpen()}))}_startReading(e){return n(this,void 0,void 0,(function*(){const t=this._stream.readable.getReader()
let n="",r=0,o=new Uint8Array
try{for(;;){const{done:i,value:s}=yield t.read()
if(s.length>0)if("json"===this._protocol)for(n+=this._utf8decoder.decode(s);r<n.length;)if("\n"===n[r]){const t=n.substring(0,r)
e.dispatchEvent(new MessageEvent("message",{data:t})),n=n.substring(r+1),r=0}else++r
else{const t=new Uint8Array(o.length+s.length)
for(t.set(o),t.set(s,o.length),o=t;;){const t=this.options.decoder.decodeReply(o)
if(!t.ok)break
{const n=o.slice(0,t.pos)
e.dispatchEvent(new MessageEvent("message",{data:n})),o=o.slice(t.pos)}}}if(i)break}}catch(t){e.dispatchEvent(new Event("close"))}}))}close(){return n(this,void 0,void 0,(function*(){try{this._writer&&(yield this._writer.close()),this._transport.close()}catch(e){}}))}send(e){return n(this,void 0,void 0,(function*(){let t
t="json"===this._protocol?(new TextEncoder).encode(e+"\n"):e
try{yield this._writer.write(t)}catch(e){this.close()}}))}}},9241:(e,t)=>{"use strict"
var n,r
Object.defineProperty(t,"__esModule",{value:!0}),t.SubscriptionState=t.State=void 0,(r=t.State||(t.State={})).Disconnected="disconnected",r.Connecting="connecting",r.Connected="connected",(n=t.SubscriptionState||(t.SubscriptionState={})).Unsubscribed="unsubscribed",n.Subscribing="subscribing",n.Subscribed="subscribed"},1077:(e,t)=>{"use strict"
function n(e){return null!=e&&"function"==typeof e}Object.defineProperty(t,"__esModule",{value:!0}),t.ttlMilliseconds=t.errorExists=t.backoff=t.log=t.isFunction=t.startsWith=void 0,t.startsWith=function(e,t){return 0===e.lastIndexOf(t,0)},t.isFunction=n,t.log=function(e,t){if(globalThis.console){const r=globalThis.console[e]
n(r)&&r.apply(globalThis.console,t)}},t.backoff=function(e,t,n){e>31&&(e=31)
const r=function(e,t){return Math.floor(Math.random()*(t-0+1)+0)}(0,Math.min(n,t*Math.pow(2,e)))
return Math.min(n,t+r)},t.errorExists=function(e){return"error"in e&&null!==e.error},t.ttlMilliseconds=function(e){return Math.min(1e3*e,2147483647)}},2059:(e,t,n)=>{"use strict"
function r(e,t){var n=e[t]
if(n){var o=n.numbers,i=n.parentLocale
return!o&&i&&(o=r(e,i)),o}}function o(e,t,n,o){void 0===o&&(o={})
var i=Number(e)
if(!e||"number"!=typeof i)return e
var s=r(n,t=function(e){return e instanceof Array?e[0].replace(/_/,"-").toLowerCase():e.replace(/_/,"-").toLowerCase()}(t))
if(!s)return e
var a=1
i<0&&(a=-1,i=Math.abs(i))
var c,u=o.financialFormat,l=void 0!==u&&u,p=o.long,f=void 0!==p&&p,d=o.significantDigits,h=void 0===d?0:d,v=o.threshold,m=void 0===v?.05:v,g=f?s.decimal.long:s.decimal.short
if(!g||i<1e3)return e
for(var _=0,y=0;y<=g.length;y++)if(i<=g[y][0]){var b=g[y][0]
!l&&1-i/b>m?c=g[y-1]:(c=g[y],h&&l||(_=1))
break}var w=c[0],E=c[1],S=E.one||E.other,x=S[0],O=S[1]
return x.match(/[^0]/)?function(e,t){return t.replace(/0*/,e)}(function(e,t,n,r,o){var i=o.significantDigits,s=void 0===i?0:i,a=o.minimumFractionDigits,c=void 0===a?0:a,u=o.maximumFractionDigits,l=void 0===u?2:u
return s?function(e,t,n){if(e&&"number"==typeof e)return e.toLocaleString(t,n)}(function(e,t){var n=Math.pow(10,t)
return Math.round(e*n)/n}(e,s),r,{maximumFractionDigits:l,minimumFractionDigits:c}):function(e,t){if(e<=1)return Math.round(e)
var n=Math.pow(10,t)
return Math.round(e/n)*n}(e,t)*n}(function(e,t,n){return e/t*Math.pow(10,n-1)}(i,w,O),_,a,t,o),x):e}n.r(t),n.d(t,{default:()=>i,compactFormat:()=>o})
const i=o},3682:(e,t,n)=>{"use strict"
function r(e,t){if(t.length<e)throw new TypeError(e+" argument"+e>1?"s":" required, but only "+t.length+" present")}n.d(t,{Z:()=>r})},394:(e,t,n)=>{"use strict"
function r(e){if(null===e||!0===e||!1===e)return NaN
var t=Number(e)
return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}n.d(t,{Z:()=>r})},9021:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>s})
var r=n(394),o=n(4327),i=n(3682)
function s(e,t){(0,i.Z)(2,arguments)
var n=(0,o.Z)(e),s=(0,r.Z)(t)
return n.setDate(n.getDate()+s),n}},3776:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>a})
var r=n(394),o=n(4327),i=n(3682)
function s(e){(0,i.Z)(1,arguments)
var t=(0,o.Z)(e),n=t.getFullYear(),r=t.getMonth(),s=new Date(0)
return s.setFullYear(n,r+1,0),s.setHours(0,0,0,0),s.getDate()}function a(e,t){(0,i.Z)(2,arguments)
var n=(0,o.Z)(e),a=(0,r.Z)(t),c=n.getMonth()+a,u=new Date(0)
u.setFullYear(n.getFullYear(),c,1),u.setHours(0,0,0,0)
var l=s(u)
return n.setMonth(c,Math.min(l,n.getDate())),n}},3651:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>s})
var r=n(394),o=n(9021),i=n(3682)
function s(e,t){(0,i.Z)(2,arguments)
var n=(0,r.Z)(t),s=7*n
return(0,o.default)(e,s)}},5705:(e,t,n)=>{"use strict"
n.d(t,{Z:()=>i})
var r=n(4327),o=n(3682)
function i(e,t){(0,o.Z)(2,arguments)
var n=(0,r.Z)(e),i=(0,r.Z)(t),s=n.getTime()-i.getTime()
return s<0?-1:s>0?1:s}},4535:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>l})
var r=n(4327)
function o(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset())
return t.setSeconds(0,0),6e4*n+t.getTime()%6e4}var i=n(9429),s=n(3682),a=864e5
function c(e,t){(0,s.Z)(2,arguments)
var n=(0,i.default)(e),r=(0,i.default)(t),c=n.getTime()-o(n),u=r.getTime()-o(r)
return Math.round((c-u)/a)}var u=n(5705)
function l(e,t){(0,s.Z)(2,arguments)
var n=(0,r.Z)(e),o=(0,r.Z)(t),i=(0,u.Z)(n,o),a=Math.abs(c(n,o))
n.setDate(n.getDate()-i*a)
var l=(0,u.Z)(n,o)===-i,p=i*(a-l)
return 0===p?0:p}},1662:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>s})
var r=n(4327),o=n(3682)
function i(e,t){(0,o.Z)(2,arguments)
var n=(0,r.Z)(e),i=(0,r.Z)(t)
return n.getTime()-i.getTime()}function s(e,t){(0,o.Z)(2,arguments)
var n=i(e,t)/6e4
return n>0?Math.floor(n):Math.ceil(n)}},834:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>a})
var r=n(4327),o=n(3682)
function i(e,t){(0,o.Z)(2,arguments)
var n=(0,r.Z)(e),i=(0,r.Z)(t),s=n.getFullYear()-i.getFullYear(),a=n.getMonth()-i.getMonth()
return 12*s+a}var s=n(5705)
function a(e,t){(0,o.Z)(2,arguments)
var n=(0,r.Z)(e),a=(0,r.Z)(t),c=(0,s.Z)(n,a),u=Math.abs(i(n,a))
n.setMonth(n.getMonth()-c*u)
var l=(0,s.Z)(n,a)===-c,p=c*(u-l)
return 0===p?0:p}},5040:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>i})
var r=n(4535),o=n(3682)
function i(e,t){(0,o.Z)(2,arguments)
var n=(0,r.default)(e,t)/7
return n>0?Math.floor(n):Math.ceil(n)}},3752:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>i})
var r=n(4327),o=n(3682)
function i(e){(0,o.Z)(1,arguments)
var t=(0,r.Z)(e)
return t.setHours(23,59,59,999),t}},9214:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>a})
var r=n(4327),o=n(394),i=n(3682)
function s(e,t){(0,i.Z)(1,arguments)
var n=t||{},s=n.locale,a=s&&s.options&&s.options.weekStartsOn,c=null==a?0:(0,o.Z)(a),u=null==n.weekStartsOn?c:(0,o.Z)(n.weekStartsOn)
if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively")
var l=(0,r.Z)(e),p=l.getDay(),f=6+(p<u?-7:0)-(p-u)
return l.setDate(l.getDate()+f),l.setHours(23,59,59,999),l}function a(e){return(0,i.Z)(1,arguments),s(e,{weekStartsOn:1})}},1905:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>i})
var r=n(4327),o=n(3682)
function i(e){(0,o.Z)(1,arguments)
var t=(0,r.Z)(e),n=t.getMonth()
return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}},7096:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>i})
var r=n(4327),o=n(3682)
function i(e){return(0,o.Z)(1,arguments),(0,r.Z)(e).getTime()<Date.now()}},443:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>i})
var r=n(9429),o=n(3682)
function i(e,t){(0,o.Z)(2,arguments)
var n=(0,r.default)(e),i=(0,r.default)(t)
return n.getTime()===i.getTime()}},5612:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>s})
var r=n(4327),o=n(3682)
function i(e){(0,o.Z)(1,arguments)
var t=(0,r.Z)(e)
return t.setSeconds(0,0),t}function s(e,t){(0,o.Z)(2,arguments)
var n=i(e),r=i(t)
return n.getTime()===r.getTime()}},9429:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>i})
var r=n(4327),o=n(3682)
function i(e){(0,o.Z)(1,arguments)
var t=(0,r.Z)(e)
return t.setHours(0,0,0,0),t}},3340:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>s})
var r=n(394),o=n(9021),i=n(3682)
function s(e,t){(0,i.Z)(2,arguments)
var n=(0,r.Z)(t)
return(0,o.default)(e,-n)}},4327:(e,t,n)=>{"use strict"
n.d(t,{Z:()=>o})
var r=n(3682)
function o(e){(0,r.Z)(1,arguments)
var t=Object.prototype.toString.call(e)
return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}},8291:e=>{"use strict"
var t,n="object"==typeof Reflect?Reflect:null,r=n&&"function"==typeof n.apply?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)}
t=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)}
var o=Number.isNaN||function(e){return e!=e}
function i(){i.init.call(this)}e.exports=i,e.exports.once=function(e,t){return new Promise((function(n,r){function o(n){e.removeListener(t,i),r(n)}function i(){"function"==typeof e.removeListener&&e.removeListener("error",o),n([].slice.call(arguments))}v(e,t,i,{once:!0}),"error"!==t&&function(e,t,n){"function"==typeof e.on&&v(e,"error",t,{once:!0})}(e,o)}))},i.EventEmitter=i,i.prototype._events=void 0,i.prototype._eventsCount=0,i.prototype._maxListeners=void 0
var s=10
function a(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function c(e){return void 0===e._maxListeners?i.defaultMaxListeners:e._maxListeners}function u(e,t,n,r){var o,i,s,u
if(a(n),void 0===(i=e._events)?(i=e._events=Object.create(null),e._eventsCount=0):(void 0!==i.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),i=e._events),s=i[t]),void 0===s)s=i[t]=n,++e._eventsCount
else if("function"==typeof s?s=i[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),(o=c(e))>0&&s.length>o&&!s.warned){s.warned=!0
var l=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit")
l.name="MaxListenersExceededWarning",l.emitter=e,l.type=t,l.count=s.length,u=l,console&&console.warn&&console.warn(u)}return e}function l(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function p(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},o=l.bind(r)
return o.listener=n,r.wrapFn=o,o}function f(e,t,n){var r=e._events
if(void 0===r)return[]
var o=r[t]
return void 0===o?[]:"function"==typeof o?n?[o.listener||o]:[o]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n]
return t}(o):h(o,o.length)}function d(e){var t=this._events
if(void 0!==t){var n=t[e]
if("function"==typeof n)return 1
if(void 0!==n)return n.length}return 0}function h(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r]
return n}function v(e,t,n,r){if("function"==typeof e.on)r.once?e.once(t,n):e.on(t,n)
else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e)
e.addEventListener(t,(function o(i){r.once&&e.removeEventListener(t,o),n(i)}))}}Object.defineProperty(i,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".")
s=e}}),i.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},i.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".")
return this._maxListeners=e,this},i.prototype.getMaxListeners=function(){return c(this)},i.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n])
var o="error"===e,i=this._events
if(void 0!==i)o=o&&void 0===i.error
else if(!o)return!1
if(o){var s
if(t.length>0&&(s=t[0]),s instanceof Error)throw s
var a=new Error("Unhandled error."+(s?" ("+s.message+")":""))
throw a.context=s,a}var c=i[e]
if(void 0===c)return!1
if("function"==typeof c)r(c,this,t)
else{var u=c.length,l=h(c,u)
for(n=0;n<u;++n)r(l[n],this,t)}return!0},i.prototype.addListener=function(e,t){return u(this,e,t,!1)},i.prototype.on=i.prototype.addListener,i.prototype.prependListener=function(e,t){return u(this,e,t,!0)},i.prototype.once=function(e,t){return a(t),this.on(e,p(this,e,t)),this},i.prototype.prependOnceListener=function(e,t){return a(t),this.prependListener(e,p(this,e,t)),this},i.prototype.removeListener=function(e,t){var n,r,o,i,s
if(a(t),void 0===(r=this._events))return this
if(void 0===(n=r[e]))return this
if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t))
else if("function"!=typeof n){for(o=-1,i=n.length-1;i>=0;i--)if(n[i]===t||n[i].listener===t){s=n[i].listener,o=i
break}if(o<0)return this
0===o?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1]
e.pop()}(n,o),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,s||t)}return this},i.prototype.off=i.prototype.removeListener,i.prototype.removeAllListeners=function(e){var t,n,r
if(void 0===(n=this._events))return this
if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this
if(0===arguments.length){var o,i=Object.keys(n)
for(r=0;r<i.length;++r)"removeListener"!==(o=i[r])&&this.removeAllListeners(o)
return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t)
else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r])
return this},i.prototype.listeners=function(e){return f(this,e,!0)},i.prototype.rawListeners=function(e){return f(this,e,!1)},i.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):d.call(e,t)},i.prototype.listenerCount=d,i.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}},3094:e=>{"use strict"
var t=Array.isArray,n=Object.keys,r=Object.prototype.hasOwnProperty
e.exports=function e(o,i){if(o===i)return!0
if(o&&i&&"object"==typeof o&&"object"==typeof i){var s,a,c,u=t(o),l=t(i)
if(u&&l){if((a=o.length)!=i.length)return!1
for(s=a;0!=s--;)if(!e(o[s],i[s]))return!1
return!0}if(u!=l)return!1
var p=o instanceof Date,f=i instanceof Date
if(p!=f)return!1
if(p&&f)return o.getTime()==i.getTime()
var d=o instanceof RegExp,h=i instanceof RegExp
if(d!=h)return!1
if(d&&h)return o.toString()==i.toString()
var v=n(o)
if((a=v.length)!==n(i).length)return!1
for(s=a;0!=s--;)if(!r.call(i,v[s]))return!1
for(s=a;0!=s--;)if(!e(o[c=v[s]],i[c]))return!1
return!0}return o!=o&&i!=i}},5721:e=>{function t(e,t,n,r){var o,i=null==(o=r)||"number"==typeof o||"boolean"==typeof o?r:n(r),s=t.get(i)
return void 0===s&&(s=e.call(this,r),t.set(i,s)),s}function n(e,t,n){var r=Array.prototype.slice.call(arguments,3),o=n(r),i=t.get(o)
return void 0===i&&(i=e.apply(this,r),t.set(o,i)),i}function r(e,t,n,r,o){return n.bind(t,e,r,o)}function o(e,o){return r(e,this,1===e.length?t:n,o.cache.create(),o.serializer)}function i(){return JSON.stringify(arguments)}function s(){this.cache=Object.create(null)}s.prototype.has=function(e){return e in this.cache},s.prototype.get=function(e){return this.cache[e]},s.prototype.set=function(e,t){this.cache[e]=t}
var a={create:function(){return new s}}
e.exports=function(e,t){var n=t&&t.cache?t.cache:a,r=t&&t.serializer?t.serializer:i
return(t&&t.strategy?t.strategy:o)(e,{cache:n,serializer:r})},e.exports.strategies={variadic:function(e,t){return r(e,this,n,t.cache.create(),t.serializer)},monadic:function(e,n){return r(e,this,t,n.cache.create(),n.serializer)}}},9564:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{createFocusTrap:()=>w})
var r=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],o=r.join(","),i="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,s=function(e){var t=parseInt(e.getAttribute("tabindex"),10)
return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:"AUDIO"!==e.nodeName&&"VIDEO"!==e.nodeName&&"DETAILS"!==e.nodeName||null!==e.getAttribute("tabindex")?e.tabIndex:0:t},a=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},c=function(e){return"INPUT"===e.tagName},u=function(e,t){return!(t.disabled||function(e){return c(e)&&"hidden"===e.type}(t)||function(e,t){if("hidden"===getComputedStyle(e).visibility)return!0
var n=i.call(e,"details>summary:first-of-type")?e.parentElement:e
if(i.call(n,"details:not([open]) *"))return!0
if(t&&"full"!==t){if("non-zero-area"===t){var r=e.getBoundingClientRect(),o=r.width,s=r.height
return 0===o&&0===s}}else for(;e;){if("none"===getComputedStyle(e).display)return!0
e=e.parentElement}return!1}(t,e.displayCheck)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(c(e)||"SELECT"===e.tagName||"TEXTAREA"===e.tagName||"BUTTON"===e.tagName)for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n)
if("LEGEND"===r.tagName)return!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},l=function(e,t){return!(!u(e,t)||function(e){return function(e){return c(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0
var t,n=e.form||e.ownerDocument,r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')}
if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name))
else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form)
return!o||o===e}(e)}(t)||s(t)<0)},p=r.concat("iframe").join(","),f=function(e,t){if(t=t||{},!e)throw new Error("No node provided")
return!1!==i.call(e,p)&&u(t,e)}
function d(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v,m=(v=[],{activateTrap:function(e){if(v.length>0){var t=v[v.length-1]
t!==e&&t.pause()}var n=v.indexOf(e);-1===n||v.splice(n,1),v.push(e)},deactivateTrap:function(e){var t=v.indexOf(e);-1!==t&&v.splice(t,1),v.length>0&&v[v.length-1].unpause()}}),g=function(e){return setTimeout(e,0)},_=function(e,t){var n=-1
return e.every((function(e,r){return!t(e)||(n=r,!1)})),n},y=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return"function"==typeof e?e.apply(void 0,n):e},b=function(e){return e.target.shadowRoot&&"function"==typeof e.composedPath?e.composedPath()[0]:e.target},w=function(e,t){var n,r=(null==t?void 0:t.document)||document,c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?d(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),u={containers:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},p=function(e,t,n){return e&&void 0!==e[t]?e[t]:c[n||t]},v=function(e){return!(!e||!u.containers.some((function(t){return t.contains(e)})))},w=function(e){var t=c[e]
if("function"==typeof t){for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i]
t=t.apply(void 0,o)}if(!t){if(void 0===t||!1===t)return t
throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var s=t
if("string"==typeof t&&!(s=r.querySelector(t)))throw new Error("`".concat(e,"` as selector refers to no known node"))
return s},E=function(){var e=w("initialFocus")
if(!1===e)return!1
if(void 0===e)if(v(r.activeElement))e=r.activeElement
else{var t=u.tabbableGroups[0]
e=t&&t.firstTabbableNode||w("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element")
return e},S=function(){if(u.tabbableGroups=u.containers.map((function(e){var t,n,r,c,u,p,f,d=(n=[],r=[],(c=e,u=(t=t||{}).includeContainer,p=l.bind(null,t),f=Array.prototype.slice.apply(c.querySelectorAll(o)),u&&i.call(c,o)&&f.unshift(c),f.filter(p)).forEach((function(e,t){var o=s(e)
0===o?n.push(e):r.push({documentOrder:t,tabIndex:o,node:e})})),r.sort(a).map((function(e){return e.node})).concat(n))
if(d.length>0)return{container:e,firstTabbableNode:d[0],lastTabbableNode:d[d.length-1]}})).filter((function(e){return!!e})),u.tabbableGroups.length<=0&&!w("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},x=function e(t){!1!==t&&t!==r.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!c.preventScroll}),u.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(E()))},O=function(e){var t=w("setReturnFocus",e)
return t||!1!==t&&e},k=function(e){var t=b(e)
v(t)||(y(c.clickOutsideDeactivates,e)?n.deactivate({returnFocus:c.returnFocusOnDeactivate&&!f(t)}):y(c.allowOutsideClick,e)||e.preventDefault())},T=function(e){var t=b(e),n=v(t)
n||t instanceof Document?n&&(u.mostRecentlyFocusedNode=t):(e.stopImmediatePropagation(),x(u.mostRecentlyFocusedNode||E()))},C=function(e){if(function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e)&&!1!==y(c.escapeDeactivates,e))return e.preventDefault(),void n.deactivate();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){var t=b(e)
S()
var n=null
if(u.tabbableGroups.length>0){var r=_(u.tabbableGroups,(function(e){return e.container.contains(t)}))
if(r<0)n=e.shiftKey?u.tabbableGroups[u.tabbableGroups.length-1].lastTabbableNode:u.tabbableGroups[0].firstTabbableNode
else if(e.shiftKey){var o=_(u.tabbableGroups,(function(e){var n=e.firstTabbableNode
return t===n}))
if(o<0&&u.tabbableGroups[r].container===t&&(o=r),o>=0){var i=0===o?u.tabbableGroups.length-1:o-1
n=u.tabbableGroups[i].lastTabbableNode}}else{var s=_(u.tabbableGroups,(function(e){var n=e.lastTabbableNode
return t===n}))
if(s<0&&u.tabbableGroups[r].container===t&&(s=r),s>=0){var a=s===u.tabbableGroups.length-1?0:s+1
n=u.tabbableGroups[a].firstTabbableNode}}}else n=w("fallbackFocus")
n&&(e.preventDefault(),x(n))}(e)},j=function(e){if(!y(c.clickOutsideDeactivates,e)){var t=b(e)
v(t)||y(c.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())}},R=function(){if(u.active)return m.activateTrap(n),u.delayInitialFocusTimer=c.delayInitialFocus?g((function(){x(E())})):x(E()),r.addEventListener("focusin",T,!0),r.addEventListener("mousedown",k,{capture:!0,passive:!1}),r.addEventListener("touchstart",k,{capture:!0,passive:!1}),r.addEventListener("click",j,{capture:!0,passive:!1}),r.addEventListener("keydown",C,{capture:!0,passive:!1}),n},P=function(){if(u.active)return r.removeEventListener("focusin",T,!0),r.removeEventListener("mousedown",k,!0),r.removeEventListener("touchstart",k,!0),r.removeEventListener("click",j,!0),r.removeEventListener("keydown",C,!0),n}
return(n={activate:function(e){if(u.active)return this
var t=p(e,"onActivate"),n=p(e,"onPostActivate"),o=p(e,"checkCanFocusTrap")
o||S(),u.active=!0,u.paused=!1,u.nodeFocusedBeforeActivation=r.activeElement,t&&t()
var i=function(){o&&S(),R(),n&&n()}
return o?(o(u.containers.concat()).then(i,i),this):(i(),this)},deactivate:function(e){if(!u.active)return this
clearTimeout(u.delayInitialFocusTimer),u.delayInitialFocusTimer=void 0,P(),u.active=!1,u.paused=!1,m.deactivateTrap(n)
var t=p(e,"onDeactivate"),r=p(e,"onPostDeactivate"),o=p(e,"checkCanReturnFocus")
t&&t()
var i=p(e,"returnFocus","returnFocusOnDeactivate"),s=function(){g((function(){i&&x(O(u.nodeFocusedBeforeActivation)),r&&r()}))}
return i&&o?(o(O(u.nodeFocusedBeforeActivation)).then(s,s),this):(s(),this)},pause:function(){return u.paused||!u.active||(u.paused=!0,P()),this},unpause:function(){return u.paused&&u.active?(u.paused=!1,S(),R(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean)
return u.containers=t.map((function(e){return"string"==typeof e?r.querySelector(e):e})),u.active&&S(),this}}).updateContainerElements(e),n}},6990:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>u})
var r,o=function(){function e(){this.registry=new WeakMap}return e.prototype.elementExists=function(e){return this.registry.has(e)},e.prototype.getElement=function(e){return this.registry.get(e)},e.prototype.addElement=function(e,t){e&&this.registry.set(e,t||{})},e.prototype.removeElement=function(e){this.registry.delete(e)},e.prototype.destroyRegistry=function(){this.registry=new WeakMap},e}(),i=function(){}
!function(e){e.enter="enter",e.exit="exit"}(r||(r={}))
var s,a=function(){function e(){this.registry=new o}return e.prototype.addCallback=function(e,t,n){var o,i,s
e===r.enter?((o={})[r.enter]=n,s=o):((i={})[r.exit]=n,s=i),this.registry.addElement(t,Object.assign({},this.registry.getElement(t),s))},e.prototype.dispatchCallback=function(e,t,n){if(e===r.enter){var o=this.registry.getElement(t).enter;(void 0===o?i:o)(n)}else{var s=this.registry.getElement(t).exit;(void 0===s?i:s)(n)}},e}(),c=(s=function(e,t){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})
const u=function(e){function t(){var t=e.call(this)||this
return t.elementRegistry=new o,t}return c(t,e),t.prototype.observe=function(e,t){void 0===t&&(t={}),e&&(this.elementRegistry.addElement(e,t),this.setupObserver(e,t))},t.prototype.unobserve=function(e,t){var n=this.findMatchingRootEntry(t)
n&&n.intersectionObserver.unobserve(e)},t.prototype.addEnterCallback=function(e,t){this.addCallback(r.enter,e,t)},t.prototype.addExitCallback=function(e,t){this.addCallback(r.exit,e,t)},t.prototype.dispatchEnterCallback=function(e,t){this.dispatchCallback(r.enter,e,t)},t.prototype.dispatchExitCallback=function(e,t){this.dispatchCallback(r.exit,e,t)},t.prototype.destroy=function(){this.elementRegistry.destroyRegistry()},t.prototype.setupOnIntersection=function(e){var t=this
return function(n){return t.onIntersection(e,n)}},t.prototype.setupObserver=function(e,t){var n,r,o=t.root,i=void 0===o?window:o,s=this.findRootFromRegistry(i)
if(s&&(r=this.determineMatchingElements(t,s)),r){var a=r.elements,c=r.intersectionObserver
a.push(e),c&&c.observe(e)}else{var u={elements:[e],intersectionObserver:c=this.newObserver(e,t),options:t},l=this.stringifyOptions(t)
s?s[l]=u:this.elementRegistry.addElement(i,((n={})[l]=u,n))}},t.prototype.newObserver=function(e,t){var n=t.root,r=t.rootMargin,o=t.threshold,i=new IntersectionObserver(this.setupOnIntersection(t).bind(this),{root:n,rootMargin:r,threshold:o})
return i.observe(e),i},t.prototype.onIntersection=function(e,t){var n=this
t.forEach((function(t){var r=t.isIntersecting,o=t.intersectionRatio,i=e.threshold||0
Array.isArray(i)&&(i=i[i.length-1])
var s=n.findMatchingRootEntry(e)
r||o>i?s&&s.elements.some((function(e){return!(!e||e!==t.target||(n.dispatchEnterCallback(e,t),0))})):s&&s.elements.some((function(e){return!(!e||e!==t.target||(n.dispatchExitCallback(e,t),0))}))}))},t.prototype.findRootFromRegistry=function(e){if(this.elementRegistry)return this.elementRegistry.getElement(e)},t.prototype.findMatchingRootEntry=function(e){var t=e.root,n=void 0===t?window:t,r=this.findRootFromRegistry(n)
if(r)return r[this.stringifyOptions(e)]},t.prototype.determineMatchingElements=function(e,t){var n=this,r=Object.keys(t).filter((function(r){var o=t[r].options
return n.areOptionsSame(e,o)}))[0]
return t[r]},t.prototype.areOptionsSame=function(e,t){if(e===t)return!0
var n=Object.prototype.toString.call(e),r=Object.prototype.toString.call(t)
if(n!==r)return!1
if("[object Object]"!==n&&"[object Object]"!==r)return e===t
if(e&&t&&"object"==typeof e&&"object"==typeof t)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)&&!1===this.areOptionsSame(e[o],t[o]))return!1
return!0},t.prototype.stringifyOptions=function(e){var t=e.root
return JSON.stringify(e,(function(e,n){if("root"===e&&t){var r=Array.prototype.slice.call(t.classList).reduce((function(e,t){return e+t}),"")
return t.id+"-"+r}return n}))},t}(a)},3211:function(e,t,n){"use strict"
var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n((function(t){t(e.value)})).then(s,a)}c((r=r.apply(e,t||[])).next())}))},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0})
const i=o(n(9952))
function s(e){let t,n,o,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"maxAge"
const a=()=>r(this,void 0,void 0,(function*(){if(void 0!==t)return
const a=a=>r(this,void 0,void 0,(function*(){o=i.default()
const r=a[1][s]-Date.now()
return r<=0?(e.delete(a[0]),void o.resolve()):(t=a[0],n=setTimeout((()=>{e.delete(a[0]),o&&o.resolve()}),r),"function"==typeof n.unref&&n.unref(),o.promise)}))
try{for(const t of e)yield a(t)}catch(e){}t=void 0})),c=()=>{t=void 0,void 0!==n&&(clearTimeout(n),n=void 0),void 0!==o&&(o.reject(void 0),o=void 0)},u=e.set.bind(e)
return e.set=(n,r)=>{e.has(n)&&e.delete(n)
const o=u(n,r)
return t&&t===n&&c(),a(),o},a(),e}t.default=s,e.exports=s,e.exports.default=s},9952:e=>{"use strict"
e.exports=()=>{const e={}
return e.promise=new Promise(((t,n)=>{e.resolve=t,e.reject=n})),e}},1494:(e,t,n)=>{"use strict"
var r
n.r(t),n.d(t,{default:()=>o})
const o=function(){function e(){this.pool=[],this.flush()}return e.prototype.flush=function(){var e=this
r=window.requestAnimationFrame((function(){var t=e.pool
e.reset(),t.forEach((function(e){e[Object.keys(e)[0]]()})),e.flush()}))},e.prototype.add=function(e,t){var n
return this.pool.push(((n={})[e]=t,n)),t},e.prototype.remove=function(e){this.pool=this.pool.filter((function(t){return!t[e]}))},e.prototype.reset=function(){this.pool=[]},e.prototype.stop=function(){window.cancelAnimationFrame(r)},e}()},8800:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>E})
var r=function(){if("undefined"!=typeof Map)return Map
function e(e,t){var n=-1
return e.some((function(e,r){return e[0]===t&&(n=r,!0)})),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n]
return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t)
~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t)
~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null)
for(var n=0,r=this.__entries__;n<r.length;n++){var o=r[n]
e.call(t,o[1],o[0])}},t}()}(),o="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,i=void 0!==n.g&&n.g.Math===Math?n.g:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),s="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(i):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)},a=["top","right","bottom","left","width","height","size","weight"],c="undefined"!=typeof MutationObserver,u=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,r=!1,o=0
function i(){n&&(n=!1,e()),r&&c()}function a(){s(i)}function c(){var e=Date.now()
if(n){if(e-o<2)return
r=!0}else n=!0,r=!1,setTimeout(a,20)
o=e}return c}(this.refresh.bind(this))}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e)
~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}))
return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){o&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),c?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){o&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t
a.some((function(e){return!!~n.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),l=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var o=r[n]
Object.defineProperty(e,o,{value:t[o],enumerable:!1,writable:!1,configurable:!0})}return e},p=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||i},f=m(0,0,0,0)
function d(e){return parseFloat(e)||0}function h(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
return t.reduce((function(t,n){return t+d(e["border-"+n+"-width"])}),0)}var v="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof p(e).SVGGraphicsElement}:function(e){return e instanceof p(e).SVGElement&&"function"==typeof e.getBBox}
function m(e,t,n,r){return{x:e,y:t,width:n,height:r}}var g=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=m(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=function(e){return o?v(e)?function(e){var t=e.getBBox()
return m(0,0,t.width,t.height)}(e):function(e){var t=e.clientWidth,n=e.clientHeight
if(!t&&!n)return f
var r=p(e).getComputedStyle(e),o=function(e){for(var t={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var o=r[n],i=e["padding-"+o]
t[o]=d(i)}return t}(r),i=o.left+o.right,s=o.top+o.bottom,a=d(r.width),c=d(r.height)
if("border-box"===r.boxSizing&&(Math.round(a+i)!==t&&(a-=h(r,"left","right")+i),Math.round(c+s)!==n&&(c-=h(r,"top","bottom")+s)),!function(e){return e===p(e).document.documentElement}(e)){var u=Math.round(a+i)-t,l=Math.round(c+s)-n
1!==Math.abs(u)&&(a-=u),1!==Math.abs(l)&&(c-=l)}return m(o.left,o.top,a,c)}(e):f}(this.target)
return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_
return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),_=function(e,t){var n,r,o,i,s,a,c,u=(r=(n=t).x,o=n.y,i=n.width,s=n.height,a="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,c=Object.create(a.prototype),l(c,{x:r,y:o,width:i,height:s,top:o,right:r+i,bottom:s+o,left:r}),c)
l(this,{target:e,contentRect:u})},y=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new r,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.")
this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.")
if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof p(e).Element))throw new TypeError('parameter 1 is not of type "Element".')
var t=this.observations_
t.has(e)||(t.set(e,new g(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.")
if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof p(e).Element))throw new TypeError('parameter 1 is not of type "Element".')
var t=this.observations_
t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this
this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new _(e.target,e.broadcastRect())}))
this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),b="undefined"!=typeof WeakMap?new WeakMap:new r,w=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.")
if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.")
var n=u.getInstance(),r=new y(t,n,this)
b.set(this,r)};["observe","unobserve","disconnect"].forEach((function(e){w.prototype[e]=function(){var t
return(t=b.get(this))[e].apply(t,arguments)}}))
const E=void 0!==i.ResizeObserver?i.ResizeObserver:w},6504:(e,t,n)=>{"use strict"
function r(e){return"object"==typeof e&&null!=e&&1===e.nodeType}function o(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function i(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var n=getComputedStyle(e,null)
return o(n.overflowY,t)||o(n.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null
try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e)
return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function s(e,t,n,r,o,i,s,a){return i<e&&s>t||i>e&&s<t?0:i<=e&&a<=n||s>=t&&a>=n?i-e-r:s>t&&a<n||i<e&&a>n?s-t+o:0}function a(e,t){var n=window,o=t.scrollMode,a=t.block,c=t.inline,u=t.boundary,l=t.skipOverflowHiddenElements,p="function"==typeof u?u:function(e){return e!==u}
if(!r(e))throw new TypeError("Invalid target")
for(var f=document.scrollingElement||document.documentElement,d=[],h=e;r(h)&&p(h);){if((h=h.parentElement)===f){d.push(h)
break}null!=h&&h===document.body&&i(h)&&!i(document.documentElement)||null!=h&&i(h,l)&&d.push(h)}for(var v=n.visualViewport?n.visualViewport.width:innerWidth,m=n.visualViewport?n.visualViewport.height:innerHeight,g=window.scrollX||pageXOffset,_=window.scrollY||pageYOffset,y=e.getBoundingClientRect(),b=y.height,w=y.width,E=y.top,S=y.right,x=y.bottom,O=y.left,k="start"===a||"nearest"===a?E:"end"===a?x:E+b/2,T="center"===c?O+w/2:"end"===c?S:O,C=[],j=0;j<d.length;j++){var R=d[j],P=R.getBoundingClientRect(),D=P.height,A=P.width,L=P.top,M=P.right,I=P.bottom,N=P.left
if("if-needed"===o&&E>=0&&O>=0&&x<=m&&S<=v&&E>=L&&x<=I&&O>=N&&S<=M)return C
var F=getComputedStyle(R),U=parseInt(F.borderLeftWidth,10),W=parseInt(F.borderTopWidth,10),H=parseInt(F.borderRightWidth,10),B=parseInt(F.borderBottomWidth,10),q=0,z=0,G="offsetWidth"in R?R.offsetWidth-R.clientWidth-U-H:0,V="offsetHeight"in R?R.offsetHeight-R.clientHeight-W-B:0
if(f===R)q="start"===a?k:"end"===a?k-m:"nearest"===a?s(_,_+m,m,W,B,_+k,_+k+b,b):k-m/2,z="start"===c?T:"center"===c?T-v/2:"end"===c?T-v:s(g,g+v,v,U,H,g+T,g+T+w,w),q=Math.max(0,q+_),z=Math.max(0,z+g)
else{q="start"===a?k-L-W:"end"===a?k-I+B+V:"nearest"===a?s(L,I,D,W,B+V,k,k+b,b):k-(L+D/2)+V/2,z="start"===c?T-N-U:"center"===c?T-(N+A/2)+G/2:"end"===c?T-M+H+G:s(N,M,A,U,H+G,T,T+w,w)
var Z=R.scrollLeft,J=R.scrollTop
k+=J-(q=Math.max(0,Math.min(J+q,R.scrollHeight-D+V))),T+=Z-(z=Math.max(0,Math.min(Z+z,R.scrollWidth-A+G)))}C.push({el:R,top:q,left:z})}return C}function c(e){return e===Object(e)&&0!==Object.keys(e).length}n.r(t),n.d(t,{default:()=>u})
const u=function(e,t){var n=!e.ownerDocument.documentElement.contains(e)
if(c(t)&&"function"==typeof t.behavior)return t.behavior(n?[]:a(e,t))
if(!n){var r=function(e){return!1===e?{block:"end",inline:"nearest"}:c(e)?e:{block:"start",inline:"nearest"}}(t)
return function(e,t){void 0===t&&(t="auto")
var n="scrollBehavior"in document.body.style
e.forEach((function(e){var r=e.el,o=e.top,i=e.left
r.scroll&&n?r.scroll({top:o,left:i,behavior:t}):(r.scrollTop=o,r.scrollLeft=i)}))}(a(e,r),r.behavior)}}},9628:e=>{var t=["Shift","Meta","Alt","Control"],n="object"==typeof navigator&&/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"Meta":"Control"
e.exports=function(e,r,o){var i,s
void 0===o&&(o={})
var a=null!=(i=o.timeout)?i:1e3,c=null!=(s=o.event)?s:"keydown",u=Object.keys(r).map((function(e){return[(t=e,t.trim().split(" ").map((function(e){var t=e.split(/\b\+/),r=t.pop()
return[t=t.map((function(e){return"$mod"===e?n:e})),r]}))),r[e]]
var t})),l=new Map,p=null,f=function(e){e instanceof KeyboardEvent&&(u.forEach((function(n){var r=n[0],o=n[1],i=l.get(r)||r
!function(e,n){return!(n[1].toUpperCase()!==e.key.toUpperCase()&&n[1]!==e.code||n[0].find((function(t){return!e.getModifierState(t)}))||t.find((function(t){return!n[0].includes(t)&&n[1]!==t&&e.getModifierState(t)})))}(e,i[0])?e.getModifierState(e.key)||l.delete(r):i.length>1?l.set(r,i.slice(1)):(l.delete(r),o(e))})),p&&clearTimeout(p),p=setTimeout(l.clear.bind(l),a))}
return e.addEventListener(c,f),function(){e.removeEventListener(c,f)}}},1873:(e,t,n)=>{"use strict"
function r(e){if(null==e)return window
if("[object Window]"!==e.toString()){var t=e.ownerDocument
return t&&t.defaultView||window}return e}function o(e){return e instanceof r(e).Element||e instanceof Element}function i(e){return e instanceof r(e).HTMLElement||e instanceof HTMLElement}function s(e){return"undefined"!=typeof ShadowRoot&&(e instanceof r(e).ShadowRoot||e instanceof ShadowRoot)}n.r(t),n.d(t,{animateFill:()=>it,createSingleton:()=>nt,default:()=>dt,delegate:()=>ot,followCursor:()=>ut,hideAll:()=>et,inlinePositioning:()=>lt,roundArrow:()=>ue,sticky:()=>pt})
var a=Math.max,c=Math.min,u=Math.round
function l(e,t){void 0===t&&(t=!1)
var n=e.getBoundingClientRect(),r=1,o=1
if(i(e)&&t){var s=e.offsetHeight,a=e.offsetWidth
a>0&&(r=u(n.width)/a||1),s>0&&(o=u(n.height)/s||1)}return{width:n.width/r,height:n.height/o,top:n.top/o,right:n.right/r,bottom:n.bottom/o,left:n.left/r,x:n.left/r,y:n.top/o}}function p(e){var t=r(e)
return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function f(e){return e?(e.nodeName||"").toLowerCase():null}function d(e){return((o(e)?e.ownerDocument:e.document)||window.document).documentElement}function h(e){return l(d(e)).left+p(e).scrollLeft}function v(e){return r(e).getComputedStyle(e)}function m(e){var t=v(e),n=t.overflow,r=t.overflowX,o=t.overflowY
return/auto|scroll|overlay|hidden/.test(n+o+r)}function g(e,t,n){void 0===n&&(n=!1)
var o,s,a=i(t),c=i(t)&&function(e){var t=e.getBoundingClientRect(),n=u(t.width)/e.offsetWidth||1,r=u(t.height)/e.offsetHeight||1
return 1!==n||1!==r}(t),v=d(t),g=l(e,c),_={scrollLeft:0,scrollTop:0},y={x:0,y:0}
return(a||!a&&!n)&&(("body"!==f(t)||m(v))&&(_=(o=t)!==r(o)&&i(o)?{scrollLeft:(s=o).scrollLeft,scrollTop:s.scrollTop}:p(o)),i(t)?((y=l(t,!0)).x+=t.clientLeft,y.y+=t.clientTop):v&&(y.x=h(v))),{x:g.left+_.scrollLeft-y.x,y:g.top+_.scrollTop-y.y,width:g.width,height:g.height}}function _(e){var t=l(e),n=e.offsetWidth,r=e.offsetHeight
return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function y(e){return"html"===f(e)?e:e.assignedSlot||e.parentNode||(s(e)?e.host:null)||d(e)}function b(e){return["html","body","#document"].indexOf(f(e))>=0?e.ownerDocument.body:i(e)&&m(e)?e:b(y(e))}function w(e,t){var n
void 0===t&&(t=[])
var o=b(e),i=o===(null==(n=e.ownerDocument)?void 0:n.body),s=r(o),a=i?[s].concat(s.visualViewport||[],m(o)?o:[]):o,c=t.concat(a)
return i?c:c.concat(w(y(a)))}function E(e){return["table","td","th"].indexOf(f(e))>=0}function S(e){return i(e)&&"fixed"!==v(e).position?e.offsetParent:null}function x(e){for(var t=r(e),n=S(e);n&&E(n)&&"static"===v(n).position;)n=S(n)
return n&&("html"===f(n)||"body"===f(n)&&"static"===v(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox")
if(-1!==navigator.userAgent.indexOf("Trident")&&i(e)&&"fixed"===v(e).position)return null
for(var n=y(e);i(n)&&["html","body"].indexOf(f(n))<0;){var r=v(n)
if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n
n=n.parentNode}return null}(e)||t}var O="top",k="bottom",T="right",C="left",j="auto",R=[O,k,T,C],P="start",D="end",A="viewport",L="popper",M=R.reduce((function(e,t){return e.concat([t+"-"+P,t+"-"+D])}),[]),I=[].concat(R,[j]).reduce((function(e,t){return e.concat([t,t+"-"+P,t+"-"+D])}),[]),N=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"]
function F(e){var t=new Map,n=new Set,r=[]
function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e)
r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var U={placement:"bottom",modifiers:[],strategy:"absolute"}
function W(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}var H={passive:!0}
function B(e){return e.split("-")[0]}function q(e){return e.split("-")[1]}function z(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function G(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?B(o):null,s=o?q(o):null,a=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2
switch(i){case O:t={x:a,y:n.y-r.height}
break
case k:t={x:a,y:n.y+n.height}
break
case T:t={x:n.x+n.width,y:c}
break
case C:t={x:n.x-r.width,y:c}
break
default:t={x:n.x,y:n.y}}var u=i?z(i):null
if(null!=u){var l="y"===u?"height":"width"
switch(s){case P:t[u]=t[u]-(n[l]/2-r[l]/2)
break
case D:t[u]=t[u]+(n[l]/2-r[l]/2)}}return t}var V={top:"auto",right:"auto",bottom:"auto",left:"auto"}
function Z(e){var t,n=e.popper,o=e.popperRect,i=e.placement,s=e.variation,a=e.offsets,c=e.position,l=e.gpuAcceleration,p=e.adaptive,f=e.roundOffsets,h=e.isFixed,m=a.x,g=void 0===m?0:m,_=a.y,y=void 0===_?0:_,b="function"==typeof f?f({x:g,y:y}):{x:g,y:y}
g=b.x,y=b.y
var w=a.hasOwnProperty("x"),E=a.hasOwnProperty("y"),S=C,j=O,R=window
if(p){var P=x(n),A="clientHeight",L="clientWidth"
P===r(n)&&"static"!==v(P=d(n)).position&&"absolute"===c&&(A="scrollHeight",L="scrollWidth"),P=P,(i===O||(i===C||i===T)&&s===D)&&(j=k,y-=(h&&R.visualViewport?R.visualViewport.height:P[A])-o.height,y*=l?1:-1),i!==C&&(i!==O&&i!==k||s!==D)||(S=T,g-=(h&&R.visualViewport?R.visualViewport.width:P[L])-o.width,g*=l?1:-1)}var M,I=Object.assign({position:c},p&&V),N=!0===f?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1
return{x:u(t*r)/r||0,y:u(n*r)/r||0}}({x:g,y:y}):{x:g,y:y}
return g=N.x,y=N.y,l?Object.assign({},I,((M={})[j]=E?"0":"",M[S]=w?"0":"",M.transform=(R.devicePixelRatio||1)<=1?"translate("+g+"px, "+y+"px)":"translate3d("+g+"px, "+y+"px, 0)",M)):Object.assign({},I,((t={})[j]=E?y+"px":"",t[S]=w?g+"px":"",t.transform="",t))}const J={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state
Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e]
i(o)&&f(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e]
!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}}
return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},s=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{})
i(r)&&f(r)&&(Object.assign(r.style,s),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]}
var Y={left:"right",right:"left",bottom:"top",top:"bottom"}
function $(e){return e.replace(/left|right|bottom|top/g,(function(e){return Y[e]}))}var K={start:"end",end:"start"}
function X(e){return e.replace(/start|end/g,(function(e){return K[e]}))}function Q(e,t){var n=t.getRootNode&&t.getRootNode()
if(e.contains(t))return!0
if(n&&s(n)){var r=t
do{if(r&&e.isSameNode(r))return!0
r=r.parentNode||r.host}while(r)}return!1}function ee(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function te(e,t){return t===A?ee(function(e){var t=r(e),n=d(e),o=t.visualViewport,i=n.clientWidth,s=n.clientHeight,a=0,c=0
return o&&(i=o.width,s=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=o.offsetLeft,c=o.offsetTop)),{width:i,height:s,x:a+h(e),y:c}}(e)):o(t)?function(e){var t=l(e)
return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ee(function(e){var t,n=d(e),r=p(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=a(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=a(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),c=-r.scrollLeft+h(e),u=-r.scrollTop
return"rtl"===v(o||n).direction&&(c+=a(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:s,x:c,y:u}}(d(e)))}function ne(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function re(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function oe(e,t){void 0===t&&(t={})
var n=t,r=n.placement,s=void 0===r?e.placement:r,u=n.boundary,p=void 0===u?"clippingParents":u,h=n.rootBoundary,m=void 0===h?A:h,g=n.elementContext,_=void 0===g?L:g,b=n.altBoundary,E=void 0!==b&&b,S=n.padding,C=void 0===S?0:S,j=ne("number"!=typeof C?C:re(C,R)),P=_===L?"reference":L,D=e.rects.popper,M=e.elements[E?P:_],I=function(e,t,n){var r="clippingParents"===t?function(e){var t=w(y(e)),n=["absolute","fixed"].indexOf(v(e).position)>=0&&i(e)?x(e):e
return o(n)?t.filter((function(e){return o(e)&&Q(e,n)&&"body"!==f(e)})):[]}(e):[].concat(t),s=[].concat(r,[n]),u=s[0],l=s.reduce((function(t,n){var r=te(e,n)
return t.top=a(r.top,t.top),t.right=c(r.right,t.right),t.bottom=c(r.bottom,t.bottom),t.left=a(r.left,t.left),t}),te(e,u))
return l.width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l}(o(M)?M:M.contextElement||d(e.elements.popper),p,m),N=l(e.elements.reference),F=G({reference:N,element:D,strategy:"absolute",placement:s}),U=ee(Object.assign({},D,F)),W=_===L?U:N,H={top:I.top-W.top+j.top,bottom:W.bottom-I.bottom+j.bottom,left:I.left-W.left+j.left,right:W.right-I.right+j.right},B=e.modifiersData.offset
if(_===L&&B){var q=B[s]
Object.keys(H).forEach((function(e){var t=[T,k].indexOf(e)>=0?1:-1,n=[O,k].indexOf(e)>=0?"y":"x"
H[e]+=q[n]*t}))}return H}function ie(e,t,n){return a(e,c(t,n))}function se(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ae(e){return[O,T,k,C].some((function(t){return e[t]>=0}))}var ce=function(e){void 0===e&&(e={})
var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,i=t.defaultOptions,s=void 0===i?U:i
return function(e,t,n){void 0===n&&(n=s)
var i,a,c={placement:"bottom",orderedModifiers:[],options:Object.assign({},U,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},u=[],l=!1,p={state:c,setOptions:function(n){var i="function"==typeof n?n(c.options):n
f(),c.options=Object.assign({},s,c.options,i),c.scrollParents={reference:o(e)?w(e):e.contextElement?w(e.contextElement):[],popper:w(t)}
var a,l,d=function(e){var t=F(e)
return N.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((a=[].concat(r,c.options.modifiers),l=a.reduce((function(e,t){var n=e[t.name]
return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(l).map((function(e){return l[e]}))))
return c.orderedModifiers=d.filter((function(e){return e.enabled})),c.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect
if("function"==typeof o){var i=o({state:c,name:t,instance:p,options:r})
u.push(i||function(){})}})),p.update()},forceUpdate:function(){if(!l){var e=c.elements,t=e.reference,n=e.popper
if(W(t,n)){c.rects={reference:g(t,x(n),"fixed"===c.options.strategy),popper:_(n)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach((function(e){return c.modifiersData[e.name]=Object.assign({},e.data)}))
for(var r=0;r<c.orderedModifiers.length;r++)if(!0!==c.reset){var o=c.orderedModifiers[r],i=o.fn,s=o.options,a=void 0===s?{}:s,u=o.name
"function"==typeof i&&(c=i({state:c,options:a,name:u,instance:p})||c)}else c.reset=!1,r=-1}}},update:(i=function(){return new Promise((function(e){p.forceUpdate(),e(c)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(i())}))}))),a}),destroy:function(){f(),l=!0}}
if(!W(e,t))return p
function f(){u.forEach((function(e){return e()})),u=[]}return p.setOptions(n).then((function(e){!l&&n.onFirstUpdate&&n.onFirstUpdate(e)})),p}}({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,o=e.options,i=o.scroll,s=void 0===i||i,a=o.resize,c=void 0===a||a,u=r(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper)
return s&&l.forEach((function(e){e.addEventListener("scroll",n.update,H)})),c&&u.addEventListener("resize",n.update,H),function(){s&&l.forEach((function(e){e.removeEventListener("scroll",n.update,H)})),c&&u.removeEventListener("resize",n.update,H)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name
t.modifiersData[n]=G({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,s=void 0===i||i,a=n.roundOffsets,c=void 0===a||a,u={placement:B(t.placement),variation:q(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy}
null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Z(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Z(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},J,{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,s=I.reduce((function(e,n){return e[n]=function(e,t,n){var r=B(e),o=[C,O].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,s=i[0],a=i[1]
return s=s||0,a=(a||0)*o,[C,T].indexOf(r)>=0?{x:a,y:s}:{x:s,y:a}}(n,t.rects,i),e}),{}),a=s[t.placement],c=a.x,u=a.y
null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=s}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name
if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,s=n.altAxis,a=void 0===s||s,c=n.fallbackPlacements,u=n.padding,l=n.boundary,p=n.rootBoundary,f=n.altBoundary,d=n.flipVariations,h=void 0===d||d,v=n.allowedAutoPlacements,m=t.options.placement,g=B(m),_=c||(g!==m&&h?function(e){if(B(e)===j)return[]
var t=$(e)
return[X(e),t,X(t)]}(m):[$(m)]),y=[m].concat(_).reduce((function(e,n){return e.concat(B(n)===j?function(e,t){void 0===t&&(t={})
var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,s=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,u=void 0===c?I:c,l=q(r),p=l?a?M:M.filter((function(e){return q(e)===l})):R,f=p.filter((function(e){return u.indexOf(e)>=0}))
0===f.length&&(f=p)
var d=f.reduce((function(t,n){return t[n]=oe(e,{placement:n,boundary:o,rootBoundary:i,padding:s})[B(n)],t}),{})
return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:l,rootBoundary:p,padding:u,flipVariations:h,allowedAutoPlacements:v}):n)}),[]),b=t.rects.reference,w=t.rects.popper,E=new Map,S=!0,x=y[0],D=0;D<y.length;D++){var A=y[D],L=B(A),N=q(A)===P,F=[O,k].indexOf(L)>=0,U=F?"width":"height",W=oe(t,{placement:A,boundary:l,rootBoundary:p,altBoundary:f,padding:u}),H=F?N?T:C:N?k:O
b[U]>w[U]&&(H=$(H))
var z=$(H),G=[]
if(i&&G.push(W[L]<=0),a&&G.push(W[H]<=0,W[z]<=0),G.every((function(e){return e}))){x=A,S=!1
break}E.set(A,G)}if(S)for(var V=function(e){var t=y.find((function(t){var n=E.get(t)
if(n)return n.slice(0,e).every((function(e){return e}))}))
if(t)return x=t,"break"},Z=h?3:1;Z>0&&"break"!==V(Z);Z--);t.placement!==x&&(t.modifiersData[r]._skip=!0,t.placement=x,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,s=n.altAxis,u=void 0!==s&&s,l=n.boundary,p=n.rootBoundary,f=n.altBoundary,d=n.padding,h=n.tether,v=void 0===h||h,m=n.tetherOffset,g=void 0===m?0:m,y=oe(t,{boundary:l,rootBoundary:p,padding:d,altBoundary:f}),b=B(t.placement),w=q(t.placement),E=!w,S=z(b),j="x"===S?"y":"x",R=t.modifiersData.popperOffsets,D=t.rects.reference,A=t.rects.popper,L="function"==typeof g?g(Object.assign({},t.rects,{placement:t.placement})):g,M="number"==typeof L?{mainAxis:L,altAxis:L}:Object.assign({mainAxis:0,altAxis:0},L),I=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,N={x:0,y:0}
if(R){if(i){var F,U="y"===S?O:C,W="y"===S?k:T,H="y"===S?"height":"width",G=R[S],V=G+y[U],Z=G-y[W],J=v?-A[H]/2:0,Y=w===P?D[H]:A[H],$=w===P?-A[H]:-D[H],K=t.elements.arrow,X=v&&K?_(K):{width:0,height:0},Q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ee=Q[U],te=Q[W],ne=ie(0,D[H],X[H]),re=E?D[H]/2-J-ne-ee-M.mainAxis:Y-ne-ee-M.mainAxis,se=E?-D[H]/2+J+ne+te+M.mainAxis:$+ne+te+M.mainAxis,ae=t.elements.arrow&&x(t.elements.arrow),ce=ae?"y"===S?ae.clientTop||0:ae.clientLeft||0:0,ue=null!=(F=null==I?void 0:I[S])?F:0,le=G+se-ue,pe=ie(v?c(V,G+re-ue-ce):V,G,v?a(Z,le):Z)
R[S]=pe,N[S]=pe-G}if(u){var fe,de="x"===S?O:C,he="x"===S?k:T,ve=R[j],me="y"===j?"height":"width",ge=ve+y[de],_e=ve-y[he],ye=-1!==[O,C].indexOf(b),be=null!=(fe=null==I?void 0:I[j])?fe:0,we=ye?ge:ve-D[me]-A[me]-be+M.altAxis,Ee=ye?ve+D[me]+A[me]-be-M.altAxis:_e,Se=v&&ye?function(e,t,n){var r=ie(e,t,n)
return r>n?n:r}(we,ve,Ee):ie(v?we:ge,ve,v?Ee:_e)
R[j]=Se,N[j]=Se-ve}t.modifiersData[r]=N}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,s=n.modifiersData.popperOffsets,a=B(n.placement),c=z(a),u=[C,T].indexOf(a)>=0?"height":"width"
if(i&&s){var l=function(e,t){return ne("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:re(e,R))}(o.padding,n),p=_(i),f="y"===c?O:C,d="y"===c?k:T,h=n.rects.reference[u]+n.rects.reference[c]-s[c]-n.rects.popper[u],v=s[c]-n.rects.reference[c],m=x(i),g=m?"y"===c?m.clientHeight||0:m.clientWidth||0:0,y=h/2-v/2,b=l[f],w=g-p[u]-l[d],E=g/2-p[u]/2+y,S=ie(b,E,w),j=c
n.modifiersData[r]=((t={})[j]=S,t.centerOffset=S-E,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n
null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&Q(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,s=oe(t,{elementContext:"reference"}),a=oe(t,{altBoundary:!0}),c=se(s,r),u=se(a,o,i),l=ae(c),p=ae(u)
t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":p})}}]}),ue='<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>',le="tippy-content",pe="tippy-backdrop",fe="tippy-arrow",de="tippy-svg-arrow",he={passive:!0,capture:!0},ve=function(){return document.body}
function me(e,t,n){if(Array.isArray(e)){var r=e[t]
return null==r?Array.isArray(n)?n[t]:n:r}return e}function ge(e,t){var n={}.toString.call(e)
return 0===n.indexOf("[object")&&n.indexOf(t+"]")>-1}function _e(e,t){return"function"==typeof e?e.apply(void 0,t):e}function ye(e,t){return 0===t?e:function(r){clearTimeout(n),n=setTimeout((function(){e(r)}),t)}
var n}function be(e,t){var n=Object.assign({},e)
return t.forEach((function(e){delete n[e]})),n}function we(e){return[].concat(e)}function Ee(e,t){-1===e.indexOf(t)&&e.push(t)}function Se(e){return e.split("-")[0]}function xe(e){return[].slice.call(e)}function Oe(e){return Object.keys(e).reduce((function(t,n){return void 0!==e[n]&&(t[n]=e[n]),t}),{})}function ke(){return document.createElement("div")}function Te(e){return["Element","Fragment"].some((function(t){return ge(e,t)}))}function Ce(e){return ge(e,"MouseEvent")}function je(e){return!(!e||!e._tippy||e._tippy.reference!==e)}function Re(e,t){e.forEach((function(e){e&&(e.style.transitionDuration=t+"ms")}))}function Pe(e,t){e.forEach((function(e){e&&e.setAttribute("data-state",t)}))}function De(e){var t,n=we(e)[0]
return null!=n&&null!=(t=n.ownerDocument)&&t.body?n.ownerDocument:document}function Ae(e,t,n){var r=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach((function(t){e[r](t,n)}))}function Le(e,t){for(var n=t;n;){var r
if(e.contains(n))return!0
n=null==n.getRootNode||null==(r=n.getRootNode())?void 0:r.host}return!1}var Me={isTouch:!1},Ie=0
function Ne(){Me.isTouch||(Me.isTouch=!0,window.performance&&document.addEventListener("mousemove",Fe))}function Fe(){var e=performance.now()
e-Ie<20&&(Me.isTouch=!1,document.removeEventListener("mousemove",Fe)),Ie=e}function Ue(){var e=document.activeElement
if(je(e)){var t=e._tippy
e.blur&&!t.state.isVisible&&e.blur()}}var We=!("undefined"==typeof window||"undefined"==typeof document||!window.msCrypto),He=Object.assign({appendTo:ve,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},{animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},{allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999}),Be=Object.keys(He)
function qe(e){var t=(e.plugins||[]).reduce((function(t,n){var r,o=n.name,i=n.defaultValue
return o&&(t[o]=void 0!==e[o]?e[o]:null!=(r=He[o])?r:i),t}),{})
return Object.assign({},e,t)}function ze(e,t){var n=Object.assign({},t,{content:_e(t.content,[e])},t.ignoreAttributes?{}:function(e,t){return(t?Object.keys(qe(Object.assign({},He,{plugins:t}))):Be).reduce((function(t,n){var r=(e.getAttribute("data-tippy-"+n)||"").trim()
if(!r)return t
if("content"===n)t[n]=r
else try{t[n]=JSON.parse(r)}catch(e){t[n]=r}return t}),{})}(e,t.plugins))
return n.aria=Object.assign({},He.aria,n.aria),n.aria={expanded:"auto"===n.aria.expanded?t.interactive:n.aria.expanded,content:"auto"===n.aria.content?t.interactive?null:"describedby":n.aria.content},n}function Ge(e,t){e.innerHTML=t}function Ve(e){var t=ke()
return!0===e?t.className=fe:(t.className=de,Te(e)?t.appendChild(e):Ge(t,e)),t}function Ze(e,t){Te(t.content)?(Ge(e,""),e.appendChild(t.content)):"function"!=typeof t.content&&(t.allowHTML?Ge(e,t.content):e.textContent=t.content)}function Je(e){var t=e.firstElementChild,n=xe(t.children)
return{box:t,content:n.find((function(e){return e.classList.contains(le)})),arrow:n.find((function(e){return e.classList.contains(fe)||e.classList.contains(de)})),backdrop:n.find((function(e){return e.classList.contains(pe)}))}}function Ye(e){var t=ke(),n=ke()
n.className="tippy-box",n.setAttribute("data-state","hidden"),n.setAttribute("tabindex","-1")
var r=ke()
function o(n,r){var o=Je(t),i=o.box,s=o.content,a=o.arrow
r.theme?i.setAttribute("data-theme",r.theme):i.removeAttribute("data-theme"),"string"==typeof r.animation?i.setAttribute("data-animation",r.animation):i.removeAttribute("data-animation"),r.inertia?i.setAttribute("data-inertia",""):i.removeAttribute("data-inertia"),i.style.maxWidth="number"==typeof r.maxWidth?r.maxWidth+"px":r.maxWidth,r.role?i.setAttribute("role",r.role):i.removeAttribute("role"),n.content===r.content&&n.allowHTML===r.allowHTML||Ze(s,e.props),r.arrow?a?n.arrow!==r.arrow&&(i.removeChild(a),i.appendChild(Ve(r.arrow))):i.appendChild(Ve(r.arrow)):a&&i.removeChild(a)}return r.className=le,r.setAttribute("data-state","hidden"),Ze(r,e.props),t.appendChild(n),n.appendChild(r),o(e.props,e.props),{popper:t,onUpdate:o}}Ye.$$tippy=!0
var $e=1,Ke=[],Xe=[]
function Qe(e,t){void 0===t&&(t={})
var n=He.plugins.concat(t.plugins||[])
document.addEventListener("touchstart",Ne,he),window.addEventListener("blur",Ue)
var r,o=Object.assign({},t,{plugins:n}),i=(r=e,Te(r)?[r]:function(e){return ge(e,"NodeList")}(r)?xe(r):Array.isArray(r)?r:xe(document.querySelectorAll(r))).reduce((function(e,t){var n=t&&function(e,t){var n,r,o,i,s,a,c,u,l=ze(e,Object.assign({},He,qe(Oe(t)))),p=!1,f=!1,d=!1,h=!1,v=[],m=ye(Z,l.interactiveDebounce),g=$e++,_=(u=l.plugins).filter((function(e,t){return u.indexOf(e)===t})),y={id:g,reference:e,popper:ke(),popperInstance:null,props:l,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:_,clearDelayTimeouts:function(){clearTimeout(n),clearTimeout(r),cancelAnimationFrame(o)},setProps:function(t){if(!y.state.isDestroyed){A("onBeforeUpdate",[y,t]),G()
var n=y.props,r=ze(e,Object.assign({},n,Oe(t),{ignoreAttributes:!0}))
y.props=r,z(),n.interactiveDebounce!==r.interactiveDebounce&&(I(),m=ye(Z,r.interactiveDebounce)),n.triggerTarget&&!r.triggerTarget?we(n.triggerTarget).forEach((function(e){e.removeAttribute("aria-expanded")})):r.triggerTarget&&e.removeAttribute("aria-expanded"),M(),D(),E&&E(n,r),y.popperInstance&&(K(),Q().forEach((function(e){requestAnimationFrame(e._tippy.popperInstance.forceUpdate)}))),A("onAfterUpdate",[y,t])}},setContent:function(e){y.setProps({content:e})},show:function(){var e=y.state.isVisible,t=y.state.isDestroyed,n=!y.state.isEnabled,r=Me.isTouch&&!y.props.touch,o=me(y.props.duration,0,He.duration)
if(!(e||t||n||r||C().hasAttribute("disabled")||(A("onShow",[y],!1),!1===y.props.onShow(y)))){if(y.state.isVisible=!0,T()&&(w.style.visibility="visible"),D(),W(),y.state.isMounted||(w.style.transition="none"),T()){var i=R()
Re([i.box,i.content],0)}var s,c,u
a=function(){var e
if(y.state.isVisible&&!h){if(h=!0,w.offsetHeight,w.style.transition=y.props.moveTransition,T()&&y.props.animation){var t=R(),n=t.box,r=t.content
Re([n,r],o),Pe([n,r],"visible")}L(),M(),Ee(Xe,y),null==(e=y.popperInstance)||e.forceUpdate(),A("onMount",[y]),y.props.animation&&T()&&function(e,t){B(e,(function(){y.state.isShown=!0,A("onShown",[y])}))}(o)}},c=y.props.appendTo,u=C(),(s=y.props.interactive&&c===ve||"parent"===c?u.parentNode:_e(c,[u])).contains(w)||s.appendChild(w),y.state.isMounted=!0,K()}},hide:function(){var e=!y.state.isVisible,t=y.state.isDestroyed,n=!y.state.isEnabled,r=me(y.props.duration,1,He.duration)
if(!(e||t||n)&&(A("onHide",[y],!1),!1!==y.props.onHide(y))){if(y.state.isVisible=!1,y.state.isShown=!1,h=!1,p=!1,T()&&(w.style.visibility="hidden"),I(),H(),D(!0),T()){var o=R(),i=o.box,s=o.content
y.props.animation&&(Re([i,s],r),Pe([i,s],"hidden"))}L(),M(),y.props.animation?T()&&function(e,t){B(e,(function(){!y.state.isVisible&&w.parentNode&&w.parentNode.contains(w)&&t()}))}(r,y.unmount):y.unmount()}},hideWithInteractivity:function(e){j().addEventListener("mousemove",m),Ee(Ke,m),m(e)},enable:function(){y.state.isEnabled=!0},disable:function(){y.hide(),y.state.isEnabled=!1},unmount:function(){y.state.isVisible&&y.hide(),y.state.isMounted&&(X(),Q().forEach((function(e){e._tippy.unmount()})),w.parentNode&&w.parentNode.removeChild(w),Xe=Xe.filter((function(e){return e!==y})),y.state.isMounted=!1,A("onHidden",[y]))},destroy:function(){y.state.isDestroyed||(y.clearDelayTimeouts(),y.unmount(),G(),delete e._tippy,y.state.isDestroyed=!0,A("onDestroy",[y]))}}
if(!l.render)return y
var b=l.render(y),w=b.popper,E=b.onUpdate
w.setAttribute("data-tippy-root",""),w.id="tippy-"+y.id,y.popper=w,e._tippy=y,w._tippy=y
var S=_.map((function(e){return e.fn(y)})),x=e.hasAttribute("aria-expanded")
return z(),M(),D(),A("onCreate",[y]),l.showOnCreate&&ee(),w.addEventListener("mouseenter",(function(){y.props.interactive&&y.state.isVisible&&y.clearDelayTimeouts()})),w.addEventListener("mouseleave",(function(){y.props.interactive&&y.props.trigger.indexOf("mouseenter")>=0&&j().addEventListener("mousemove",m)})),y
function O(){var e=y.props.touch
return Array.isArray(e)?e:[e,0]}function k(){return"hold"===O()[0]}function T(){var e
return!(null==(e=y.props.render)||!e.$$tippy)}function C(){return c||e}function j(){var e=C().parentNode
return e?De(e):document}function R(){return Je(w)}function P(e){return y.state.isMounted&&!y.state.isVisible||Me.isTouch||i&&"focus"===i.type?0:me(y.props.delay,e?0:1,He.delay)}function D(e){void 0===e&&(e=!1),w.style.pointerEvents=y.props.interactive&&!e?"":"none",w.style.zIndex=""+y.props.zIndex}function A(e,t,n){var r
void 0===n&&(n=!0),S.forEach((function(n){n[e]&&n[e].apply(n,t)})),n&&(r=y.props)[e].apply(r,t)}function L(){var t=y.props.aria
if(t.content){var n="aria-"+t.content,r=w.id
we(y.props.triggerTarget||e).forEach((function(e){var t=e.getAttribute(n)
if(y.state.isVisible)e.setAttribute(n,t?t+" "+r:r)
else{var o=t&&t.replace(r,"").trim()
o?e.setAttribute(n,o):e.removeAttribute(n)}}))}}function M(){!x&&y.props.aria.expanded&&we(y.props.triggerTarget||e).forEach((function(e){y.props.interactive?e.setAttribute("aria-expanded",y.state.isVisible&&e===C()?"true":"false"):e.removeAttribute("aria-expanded")}))}function I(){j().removeEventListener("mousemove",m),Ke=Ke.filter((function(e){return e!==m}))}function N(t){if(!Me.isTouch||!d&&"mousedown"!==t.type){var n=t.composedPath&&t.composedPath()[0]||t.target
if(!y.props.interactive||!Le(w,n)){if(we(y.props.triggerTarget||e).some((function(e){return Le(e,n)}))){if(Me.isTouch)return
if(y.state.isVisible&&y.props.trigger.indexOf("click")>=0)return}else A("onClickOutside",[y,t])
!0===y.props.hideOnClick&&(y.clearDelayTimeouts(),y.hide(),f=!0,setTimeout((function(){f=!1})),y.state.isMounted||H())}}}function F(){d=!0}function U(){d=!1}function W(){var e=j()
e.addEventListener("mousedown",N,!0),e.addEventListener("touchend",N,he),e.addEventListener("touchstart",U,he),e.addEventListener("touchmove",F,he)}function H(){var e=j()
e.removeEventListener("mousedown",N,!0),e.removeEventListener("touchend",N,he),e.removeEventListener("touchstart",U,he),e.removeEventListener("touchmove",F,he)}function B(e,t){var n=R().box
function r(e){e.target===n&&(Ae(n,"remove",r),t())}if(0===e)return t()
Ae(n,"remove",s),Ae(n,"add",r),s=r}function q(t,n,r){void 0===r&&(r=!1),we(y.props.triggerTarget||e).forEach((function(e){e.addEventListener(t,n,r),v.push({node:e,eventType:t,handler:n,options:r})}))}function z(){var e
k()&&(q("touchstart",V,{passive:!0}),q("touchend",J,{passive:!0})),(e=y.props.trigger,e.split(/\s+/).filter(Boolean)).forEach((function(e){if("manual"!==e)switch(q(e,V),e){case"mouseenter":q("mouseleave",J)
break
case"focus":q(We?"focusout":"blur",Y)
break
case"focusin":q("focusout",Y)}}))}function G(){v.forEach((function(e){var t=e.node,n=e.eventType,r=e.handler,o=e.options
t.removeEventListener(n,r,o)})),v=[]}function V(e){var t,n=!1
if(y.state.isEnabled&&!$(e)&&!f){var r="focus"===(null==(t=i)?void 0:t.type)
i=e,c=e.currentTarget,M(),!y.state.isVisible&&Ce(e)&&Ke.forEach((function(t){return t(e)})),"click"===e.type&&(y.props.trigger.indexOf("mouseenter")<0||p)&&!1!==y.props.hideOnClick&&y.state.isVisible?n=!0:ee(e),"click"===e.type&&(p=!n),n&&!r&&te(e)}}function Z(e){var t=e.target,n=C().contains(t)||w.contains(t)
"mousemove"===e.type&&n||function(e,t){var n=t.clientX,r=t.clientY
return e.every((function(e){var t=e.popperRect,o=e.popperState,i=e.props.interactiveBorder,s=Se(o.placement),a=o.modifiersData.offset
if(!a)return!0
var c="bottom"===s?a.top.y:0,u="top"===s?a.bottom.y:0,l="right"===s?a.left.x:0,p="left"===s?a.right.x:0,f=t.top-r+c>i,d=r-t.bottom-u>i,h=t.left-n+l>i,v=n-t.right-p>i
return f||d||h||v}))}(Q().concat(w).map((function(e){var t,n=null==(t=e._tippy.popperInstance)?void 0:t.state
return n?{popperRect:e.getBoundingClientRect(),popperState:n,props:l}:null})).filter(Boolean),e)&&(I(),te(e))}function J(e){$(e)||y.props.trigger.indexOf("click")>=0&&p||(y.props.interactive?y.hideWithInteractivity(e):te(e))}function Y(e){y.props.trigger.indexOf("focusin")<0&&e.target!==C()||y.props.interactive&&e.relatedTarget&&w.contains(e.relatedTarget)||te(e)}function $(e){return!!Me.isTouch&&k()!==e.type.indexOf("touch")>=0}function K(){X()
var t=y.props,n=t.popperOptions,r=t.placement,o=t.offset,i=t.getReferenceClientRect,s=t.moveTransition,c=T()?Je(w).arrow:null,u=i?{getBoundingClientRect:i,contextElement:i.contextElement||C()}:e,l=[{name:"offset",options:{offset:o}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!s}},{name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t=e.state
if(T()){var n=R().box;["placement","reference-hidden","escaped"].forEach((function(e){"placement"===e?n.setAttribute("data-placement",t.placement):t.attributes.popper["data-popper-"+e]?n.setAttribute("data-"+e,""):n.removeAttribute("data-"+e)})),t.attributes.popper={}}}}]
T()&&c&&l.push({name:"arrow",options:{element:c,padding:3}}),l.push.apply(l,(null==n?void 0:n.modifiers)||[]),y.popperInstance=ce(u,w,Object.assign({},n,{placement:r,onFirstUpdate:a,modifiers:l}))}function X(){y.popperInstance&&(y.popperInstance.destroy(),y.popperInstance=null)}function Q(){return xe(w.querySelectorAll("[data-tippy-root]"))}function ee(e){y.clearDelayTimeouts(),e&&A("onTrigger",[y,e]),W()
var t=P(!0),r=O(),o=r[0],i=r[1]
Me.isTouch&&"hold"===o&&i&&(t=i),t?n=setTimeout((function(){y.show()}),t):y.show()}function te(e){if(y.clearDelayTimeouts(),A("onUntrigger",[y,e]),y.state.isVisible){if(!(y.props.trigger.indexOf("mouseenter")>=0&&y.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(e.type)>=0&&p)){var t=P(!1)
t?r=setTimeout((function(){y.state.isVisible&&y.hide()}),t):o=requestAnimationFrame((function(){y.hide()}))}}else H()}}(t,o)
return n&&e.push(n),e}),[])
return Te(e)?i[0]:i}Qe.defaultProps=He,Qe.setDefaultProps=function(e){Object.keys(e).forEach((function(t){He[t]=e[t]}))},Qe.currentInput=Me
var et=function(e){var t=void 0===e?{}:e,n=t.exclude,r=t.duration
Xe.forEach((function(e){var t=!1
if(n&&(t=je(n)?e.reference===n:e.popper===n.popper),!t){var o=e.props.duration
e.setProps({duration:r}),e.hide(),e.state.isDestroyed||e.setProps({duration:o})}}))},tt=Object.assign({},J,{effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}}
Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow)}}),nt=function(e,t){var n
void 0===t&&(t={})
var r,o=e,i=[],s=[],a=t.overrides,c=[],u=!1
function l(){s=o.map((function(e){return we(e.props.triggerTarget||e.reference)})).reduce((function(e,t){return e.concat(t)}),[])}function p(){i=o.map((function(e){return e.reference}))}function f(e){o.forEach((function(t){e?t.enable():t.disable()}))}function d(e){return o.map((function(t){var n=t.setProps
return t.setProps=function(o){n(o),t.reference===r&&e.setProps(o)},function(){t.setProps=n}}))}function h(e,t){var n=s.indexOf(t)
if(t!==r){r=t
var c=(a||[]).concat("content").reduce((function(e,t){return e[t]=o[n].props[t],e}),{})
e.setProps(Object.assign({},c,{getReferenceClientRect:"function"==typeof c.getReferenceClientRect?c.getReferenceClientRect:function(){var e
return null==(e=i[n])?void 0:e.getBoundingClientRect()}}))}}f(!1),p(),l()
var v={fn:function(){return{onDestroy:function(){f(!0)},onHidden:function(){r=null},onClickOutside:function(e){e.props.showOnCreate&&!u&&(u=!0,r=null)},onShow:function(e){e.props.showOnCreate&&!u&&(u=!0,h(e,i[0]))},onTrigger:function(e,t){h(e,t.currentTarget)}}}},m=Qe(ke(),Object.assign({},be(t,["overrides"]),{plugins:[v].concat(t.plugins||[]),triggerTarget:s,popperOptions:Object.assign({},t.popperOptions,{modifiers:[].concat((null==(n=t.popperOptions)?void 0:n.modifiers)||[],[tt])})})),g=m.show
m.show=function(e){if(g(),!r&&null==e)return h(m,i[0])
if(!r||null!=e){if("number"==typeof e)return i[e]&&h(m,i[e])
if(o.indexOf(e)>=0){var t=e.reference
return h(m,t)}return i.indexOf(e)>=0?h(m,e):void 0}},m.showNext=function(){var e=i[0]
if(!r)return m.show(0)
var t=i.indexOf(r)
m.show(i[t+1]||e)},m.showPrevious=function(){var e=i[i.length-1]
if(!r)return m.show(e)
var t=i.indexOf(r),n=i[t-1]||e
m.show(n)}
var _=m.setProps
return m.setProps=function(e){a=e.overrides||a,_(e)},m.setInstances=function(e){f(!0),c.forEach((function(e){return e()})),o=e,f(!1),p(),l(),c=d(m),m.setProps({triggerTarget:s})},c=d(m),m},rt={mouseover:"mouseenter",focusin:"focus",click:"click"}
function ot(e,t){var n=[],r=[],o=!1,i=t.target,s=be(t,["target"]),a=Object.assign({},s,{trigger:"manual",touch:!1}),c=Object.assign({touch:He.touch},s,{showOnCreate:!0}),u=Qe(e,a)
function l(e){if(e.target&&!o){var n=e.target.closest(i)
if(n){var s=n.getAttribute("data-tippy-trigger")||t.trigger||He.trigger
if(!n._tippy&&!("touchstart"===e.type&&"boolean"==typeof c.touch||"touchstart"!==e.type&&s.indexOf(rt[e.type])<0)){var a=Qe(n,c)
a&&(r=r.concat(a))}}}}function p(e,t,r,o){void 0===o&&(o=!1),e.addEventListener(t,r,o),n.push({node:e,eventType:t,handler:r,options:o})}return we(u).forEach((function(e){var t=e.destroy,i=e.enable,s=e.disable
e.destroy=function(e){void 0===e&&(e=!0),e&&r.forEach((function(e){e.destroy()})),r=[],n.forEach((function(e){var t=e.node,n=e.eventType,r=e.handler,o=e.options
t.removeEventListener(n,r,o)})),n=[],t()},e.enable=function(){i(),r.forEach((function(e){return e.enable()})),o=!1},e.disable=function(){s(),r.forEach((function(e){return e.disable()})),o=!0},function(e){var t=e.reference
p(t,"touchstart",l,he),p(t,"mouseover",l),p(t,"focusin",l),p(t,"click",l)}(e)})),u}var it={name:"animateFill",defaultValue:!1,fn:function(e){var t
if(null==(t=e.props.render)||!t.$$tippy)return{}
var n=Je(e.popper),r=n.box,o=n.content,i=e.props.animateFill?function(){var e=ke()
return e.className=pe,Pe([e],"hidden"),e}():null
return{onCreate:function(){i&&(r.insertBefore(i,r.firstElementChild),r.setAttribute("data-animatefill",""),r.style.overflow="hidden",e.setProps({arrow:!1,animation:"shift-away"}))},onMount:function(){if(i){var e=r.style.transitionDuration,t=Number(e.replace("ms",""))
o.style.transitionDelay=Math.round(t/10)+"ms",i.style.transitionDuration=e,Pe([i],"visible")}},onShow:function(){i&&(i.style.transitionDuration="0ms")},onHide:function(){i&&Pe([i],"hidden")}}}},st={clientX:0,clientY:0},at=[]
function ct(e){var t=e.clientX,n=e.clientY
st={clientX:t,clientY:n}}var ut={name:"followCursor",defaultValue:!1,fn:function(e){var t=e.reference,n=De(e.props.triggerTarget||t),r=!1,o=!1,i=!0,s=e.props
function a(){return"initial"===e.props.followCursor&&e.state.isVisible}function c(){n.addEventListener("mousemove",p)}function u(){n.removeEventListener("mousemove",p)}function l(){r=!0,e.setProps({getReferenceClientRect:null}),r=!1}function p(n){var r=!n.target||t.contains(n.target),o=e.props.followCursor,i=n.clientX,s=n.clientY,a=t.getBoundingClientRect(),c=i-a.left,u=s-a.top
!r&&e.props.interactive||e.setProps({getReferenceClientRect:function(){var e=t.getBoundingClientRect(),n=i,r=s
"initial"===o&&(n=e.left+c,r=e.top+u)
var a="horizontal"===o?e.top:r,l="vertical"===o?e.right:n,p="horizontal"===o?e.bottom:r,f="vertical"===o?e.left:n
return{width:l-f,height:p-a,top:a,right:l,bottom:p,left:f}}})}function f(){e.props.followCursor&&(at.push({instance:e,doc:n}),function(e){e.addEventListener("mousemove",ct)}(n))}function d(){0===(at=at.filter((function(t){return t.instance!==e}))).filter((function(e){return e.doc===n})).length&&function(e){e.removeEventListener("mousemove",ct)}(n)}return{onCreate:f,onDestroy:d,onBeforeUpdate:function(){s=e.props},onAfterUpdate:function(t,n){var i=n.followCursor
r||void 0!==i&&s.followCursor!==i&&(d(),i?(f(),!e.state.isMounted||o||a()||c()):(u(),l()))},onMount:function(){e.props.followCursor&&!o&&(i&&(p(st),i=!1),a()||c())},onTrigger:function(e,t){Ce(t)&&(st={clientX:t.clientX,clientY:t.clientY}),o="focus"===t.type},onHidden:function(){e.props.followCursor&&(l(),u(),i=!0)}}}},lt={name:"inlinePositioning",defaultValue:!1,fn:function(e){var t,n=e.reference,r=-1,o=!1,i=[],s={name:"tippyInlinePositioning",enabled:!0,phase:"afterWrite",fn:function(o){var s=o.state
e.props.inlinePositioning&&(-1!==i.indexOf(s.placement)&&(i=[]),t!==s.placement&&-1===i.indexOf(s.placement)&&(i.push(s.placement),e.setProps({getReferenceClientRect:function(){return function(e){return function(e,t,n,r){if(n.length<2||null===e)return t
if(2===n.length&&r>=0&&n[0].left>n[1].right)return n[r]||t
switch(e){case"top":case"bottom":var o=n[0],i=n[n.length-1],s="top"===e,a=o.top,c=i.bottom,u=s?o.left:i.left,l=s?o.right:i.right
return{top:a,bottom:c,left:u,right:l,width:l-u,height:c-a}
case"left":case"right":var p=Math.min.apply(Math,n.map((function(e){return e.left}))),f=Math.max.apply(Math,n.map((function(e){return e.right}))),d=n.filter((function(t){return"left"===e?t.left===p:t.right===f})),h=d[0].top,v=d[d.length-1].bottom
return{top:h,bottom:v,left:p,right:f,width:f-p,height:v-h}
default:return t}}(Se(e),n.getBoundingClientRect(),xe(n.getClientRects()),r)}(s.placement)}})),t=s.placement)}}
function a(){var t
o||(t=function(e,t){var n
return{popperOptions:Object.assign({},e.popperOptions,{modifiers:[].concat(((null==(n=e.popperOptions)?void 0:n.modifiers)||[]).filter((function(e){return e.name!==t.name})),[t])})}}(e.props,s),o=!0,e.setProps(t),o=!1)}return{onCreate:a,onAfterUpdate:a,onTrigger:function(t,n){if(Ce(n)){var o=xe(e.reference.getClientRects()),i=o.find((function(e){return e.left-2<=n.clientX&&e.right+2>=n.clientX&&e.top-2<=n.clientY&&e.bottom+2>=n.clientY})),s=o.indexOf(i)
r=s>-1?s:r}},onHidden:function(){r=-1}}}},pt={name:"sticky",defaultValue:!1,fn:function(e){var t=e.reference,n=e.popper
function r(t){return!0===e.props.sticky||e.props.sticky===t}var o=null,i=null
function s(){var a=r("reference")?(e.popperInstance?e.popperInstance.state.elements.reference:t).getBoundingClientRect():null,c=r("popper")?n.getBoundingClientRect():null;(a&&ft(o,a)||c&&ft(i,c))&&e.popperInstance&&e.popperInstance.update(),o=a,i=c,e.state.isMounted&&requestAnimationFrame(s)}return{onMount:function(){e.props.sticky&&s()}}}}
function ft(e,t){return!e||!t||e.top!==t.top||e.right!==t.right||e.bottom!==t.bottom||e.left!==t.left}Qe.setDefaultProps({render:Ye})
const dt=Qe},7480:(e,t,n)=>{"use strict"
n.d(t,{ZT:()=>o,pi:()=>i,_T:()=>s,XA:()=>a,CR:()=>c,fl:()=>u})
var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)}
function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])
return e}).apply(this,arguments)}
function s(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0
for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function a(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0
if(n)return n.call(e)
if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}
throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function c(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator]
if(!n)return e
var r,o,i=n.call(e),s=[]
try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s}function u(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(c(arguments[t]))
return e}},8367:function(e){var t
t=function(){return function(e){var t={}
function n(r){if(t[r])return t[r].exports
var o=t[r]={exports:{},id:r,loaded:!1}
return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t){"use strict"
e.exports=function(){if("undefined"==typeof document||"undefined"==typeof window)return{ask:function(){return"initial"},element:function(){return null},ignoreKeys:function(){},specificKeys:function(){},registerOnChange:function(){},unRegisterOnChange:function(){}}
var e=document.documentElement,t=null,n="initial",r=n,o=Date.now(),i="false",s=["button","input","select","textarea"],a=[],c=[16,17,18,91,93],u=[],l={keydown:"keyboard",keyup:"keyboard",mousedown:"mouse",mousemove:"mouse",MSPointerDown:"pointer",MSPointerMove:"pointer",pointerdown:"pointer",pointermove:"pointer",touchstart:"touch",touchend:"touch"},p=!1,f={x:null,y:null},d={2:"touch",3:"touch",4:"mouse"},h=!1
try{var v=Object.defineProperty({},"passive",{get:function(){h=!0}})
window.addEventListener("test",null,v)}catch(e){}var m,g=function(e){var t=e.which,o=l[e.type]
"pointer"===o&&(o=E(e))
var i=!u.length&&-1===c.indexOf(t),a=u.length&&-1!==u.indexOf(t),p="keyboard"===o&&t&&(i||a)||"mouse"===o||"touch"===o
if(S(o)&&(p=!1),p&&n!==o&&(w("input",n=o),_("input")),p&&r!==o){var f=document.activeElement
f&&f.nodeName&&(-1===s.indexOf(f.nodeName.toLowerCase())||"button"===f.nodeName.toLowerCase()&&!T(f,"form"))&&(w("intent",r=o),_("intent"))}},_=function(t){e.setAttribute("data-what"+t,"input"===t?n:r),O(t)},y=function(e){var t=l[e.type]
"pointer"===t&&(t=E(e)),k(e),(!p&&!S(t)||p&&"wheel"===e.type||"mousewheel"===e.type||"DOMMouseScroll"===e.type)&&r!==t&&(w("intent",r=t),_("intent"))},b=function(){t=null,e.removeAttribute("data-whatelement"),e.removeAttribute("data-whatclasses")},w=function(e,t){if(i)try{window.sessionStorage.setItem("what-"+e,t)}catch(e){}},E=function(e){return"number"==typeof e.pointerType?d[e.pointerType]:"pen"===e.pointerType?"touch":e.pointerType},S=function(e){var t=Date.now(),r="mouse"===e&&"touch"===n&&t-o<200
return o=t,r},x=function(){return"onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll"},O=function(e){for(var t=0,o=a.length;t<o;t++)a[t].type===e&&a[t].fn.call(void 0,"input"===e?n:r)},k=function(e){f.x!==e.screenX||f.y!==e.screenY?(p=!1,f.x=e.screenX,f.y=e.screenY):p=!0},T=function(e,t){var n=window.Element.prototype
if(n.matches||(n.matches=n.msMatchesSelector||n.webkitMatchesSelector),n.closest)return e.closest(t)
do{if(e.matches(t))return e
e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType)
return null}
return"addEventListener"in window&&Array.prototype.indexOf&&(l[x()]="mouse",m=!!h&&{passive:!0},document.addEventListener("DOMContentLoaded",(function(){if(i=!(e.getAttribute("data-whatpersist")||"false"===document.body.getAttribute("data-whatpersist")))try{window.sessionStorage.getItem("what-input")&&(n=window.sessionStorage.getItem("what-input")),window.sessionStorage.getItem("what-intent")&&(r=window.sessionStorage.getItem("what-intent"))}catch(e){}_("input"),_("intent")})),window.PointerEvent?(window.addEventListener("pointerdown",g),window.addEventListener("pointermove",y)):window.MSPointerEvent?(window.addEventListener("MSPointerDown",g),window.addEventListener("MSPointerMove",y)):(window.addEventListener("mousedown",g),window.addEventListener("mousemove",y),"ontouchstart"in window&&(window.addEventListener("touchstart",g,m),window.addEventListener("touchend",g))),window.addEventListener(x(),y,m),window.addEventListener("keydown",g),window.addEventListener("keyup",g),window.addEventListener("focusin",(function(n){n.target.nodeName?(t=n.target.nodeName.toLowerCase(),e.setAttribute("data-whatelement",t),n.target.classList&&n.target.classList.length&&e.setAttribute("data-whatclasses",n.target.classList.toString().replace(" ",","))):b()})),window.addEventListener("focusout",b)),{ask:function(e){return"intent"===e?r:n},element:function(){return t},ignoreKeys:function(e){c=e},specificKeys:function(e){u=e},registerOnChange:function(e,t){a.push({fn:e,type:t||"input"})},unRegisterOnChange:function(e){var t=function(e){for(var t=0,n=a.length;t<n;t++)if(a[t].fn===e)return t}(e);(t||0===t)&&a.splice(t,1)},clearStorage:function(){window.sessionStorage.clear()}}}()}])},e.exports=t()},3751:(e,t,n)=>{"use strict"
n.r(t)},6509:(e,t,n)=>{"use strict"
function r(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?r(n,!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,{default:()=>m,memClear:()=>_,memDecorator:()=>g})
const s=(e,t,n,r)=>{if("length"===n||"prototype"===n)return
if("arguments"===n||"caller"===n)return
const o=Object.getOwnPropertyDescriptor(e,n),i=Object.getOwnPropertyDescriptor(t,n)
!a(o,i)&&r||Object.defineProperty(e,n,i)},a=function(e,t){return void 0===e||e.configurable||e.writable===t.writable&&e.enumerable===t.enumerable&&e.configurable===t.configurable&&(e.writable||e.value===t.value)},c=(e,t)=>{const n=Object.getPrototypeOf(t)
n!==Object.getPrototypeOf(e)&&Object.setPrototypeOf(e,n)},u=(e,t)=>"/* Wrapped ".concat(e,"*/\n").concat(t),l=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),p=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),f=(e,t,n)=>{const r=""===n?"":"with ".concat(n.trim(),"() "),i=u.bind(null,r,t.toString())
Object.defineProperty(i,"name",p),Object.defineProperty(e,"toString",o(o({},l),{},{value:i}))}
function d(e,t){let{ignoreNonConfigurable:n=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
const{name:r}=e
for(const o of Reflect.ownKeys(t))s(e,t,o,n)
return c(e,t),f(e,t,r),e}var h=n(3211)
const v=new WeakMap
function m(e){let{cacheKey:t,cache:n=new Map,maxAge:r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
"number"==typeof r&&h(n)
const o=function(){for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s]
const a=t?t(i):i[0],c=n.get(a)
if(c)return c.data
const u=e.apply(this,i)
return n.set(a,{data:u,maxAge:r?Date.now()+r:Number.POSITIVE_INFINITY}),u}
return d(o,e,{ignoreNonConfigurable:!0}),v.set(o,n),o}function g(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const t=new WeakMap
return(n,r,o)=>{const i=n[r]
if("function"!=typeof i)throw new TypeError("The decorated value must be a function")
delete o.value,delete o.writable,o.get=function(){if(!t.has(this)){const n=m(i,e)
return t.set(this,n),n}return t.get(this)}}}function _(e){const t=v.get(e)
if(!t)throw new TypeError("Can't clear a function that was not memoized!")
if("function"!=typeof t.clear)throw new TypeError("The cache Map can't be cleared!")
t.clear()}}}])
