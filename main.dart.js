(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q)){b[q]=a[q]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++){inherit(b[s],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s){A.hU(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.dy(b)
return new s(c,this)}:function(){if(s===null)s=A.dy(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.dy(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
dE(a,b,c,d){return{i:a,p:b,e:c,x:d}},
d2(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.dC==null){A.hI()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.e(A.e4("Return interceptor for "+A.q(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.cJ
if(o==null)o=$.cJ=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.hP(a)
if(p!=null)return p
if(typeof a=="function")return B.x
s=Object.getPrototypeOf(a)
if(s==null)return B.l
if(s===Object.prototype)return B.l
if(typeof q=="function"){o=$.cJ
if(o==null)o=$.cJ=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.d,enumerable:false,writable:true,configurable:true})
return B.d}return B.d},
fg(a,b){a.fixed$length=Array
return a},
X(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aN.prototype
return J.bB.prototype}if(typeof a=="string")return J.an.prototype
if(a==null)return J.aO.prototype
if(typeof a=="boolean")return J.bz.prototype
if(Array.isArray(a))return J.y.prototype
if(typeof a!="object"){if(typeof a=="function")return J.M.prototype
if(typeof a=="symbol")return J.ap.prototype
if(typeof a=="bigint")return J.ao.prototype
return a}if(a instanceof A.j)return a
return J.d2(a)},
cd(a){if(typeof a=="string")return J.an.prototype
if(a==null)return a
if(Array.isArray(a))return J.y.prototype
if(typeof a!="object"){if(typeof a=="function")return J.M.prototype
if(typeof a=="symbol")return J.ap.prototype
if(typeof a=="bigint")return J.ao.prototype
return a}if(a instanceof A.j)return a
return J.d2(a)},
dB(a){if(a==null)return a
if(Array.isArray(a))return J.y.prototype
if(typeof a!="object"){if(typeof a=="function")return J.M.prototype
if(typeof a=="symbol")return J.ap.prototype
if(typeof a=="bigint")return J.ao.prototype
return a}if(a instanceof A.j)return a
return J.d2(a)},
ez(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.M.prototype
if(typeof a=="symbol")return J.ap.prototype
if(typeof a=="bigint")return J.ao.prototype
return a}if(a instanceof A.j)return a
return J.d2(a)},
eT(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.X(a).v(a,b)},
eU(a,b,c,d){return J.ez(a).a9(a,b,c,d)},
eV(a,b){return J.dB(a).C(a,b)},
dh(a){return J.X(a).gk(a)},
dJ(a){return J.dB(a).gB(a)},
ce(a){return J.cd(a).gj(a)},
dK(a){return J.ez(a).ga_(a)},
eW(a){return J.X(a).gm(a)},
eX(a,b,c){return J.dB(a).Y(a,b,c)},
eY(a,b){return J.X(a).Z(a,b)},
bm(a){return J.X(a).h(a)},
aM:function aM(){},
bz:function bz(){},
aO:function aO(){},
D:function D(){},
aa:function aa(){},
bP:function bP(){},
b1:function b1(){},
M:function M(){},
ao:function ao(){},
ap:function ap(){},
y:function y(a){this.$ti=a},
cj:function cj(a){this.$ti=a},
bp:function bp(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bC:function bC(){},
aN:function aN(){},
bB:function bB(){},
an:function an(){}},A={dk:function dk(){},
e2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
fy(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
d0(a,b,c){return a},
dD(a){var s,r
for(s=$.C.length,r=0;r<s;++r)if(a===$.C[r])return!0
return!1},
bE:function bE(a){this.a=a},
cr:function cr(){},
aI:function aI(){},
O:function O(){},
a_:function a_(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
Q:function Q(a,b,c){this.a=a
this.b=b
this.$ti=c},
v:function v(){},
a1:function a1(a){this.a=a},
eH(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
iF(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.J.b(a)},
q(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bm(a)
return s},
bQ(a){var s,r=$.dY
if(r==null)r=$.dY=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
cq(a){return A.fk(a)},
fk(a){var s,r,q,p
if(a instanceof A.j)return A.A(A.ag(a),null)
s=J.X(a)
if(s===B.w||s===B.y||t.cr.b(a)){r=B.e(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.A(A.ag(a),null)},
fu(a){if(typeof a=="number"||A.cU(a))return J.bm(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.Z)return a.h(0)
return"Instance of '"+A.cq(a)+"'"},
ab(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ft(a){var s=A.ab(a).getFullYear()+0
return s},
fr(a){var s=A.ab(a).getMonth()+1
return s},
fn(a){var s=A.ab(a).getDate()+0
return s},
fo(a){var s=A.ab(a).getHours()+0
return s},
fq(a){var s=A.ab(a).getMinutes()+0
return s},
fs(a){var s=A.ab(a).getSeconds()+0
return s},
fp(a){var s=A.ab(a).getMilliseconds()+0
return s},
a0(a,b,c){var s,r,q={}
q.a=0
s=[]
r=[]
q.a=b.length
B.a.L(s,b)
q.b=""
if(c!=null&&c.a!==0)c.A(0,new A.cp(q,r,s))
return J.eY(a,new A.bA(B.A,0,s,r,0))},
fl(a,b,c){var s,r,q=c==null||c.a===0
if(q){s=b.length
if(s===0){if(!!a.$0)return a.$0()}else if(s===1){if(!!a.$1)return a.$1(b[0])}else if(s===2){if(!!a.$2)return a.$2(b[0],b[1])}else if(s===3){if(!!a.$3)return a.$3(b[0],b[1],b[2])}else if(s===4){if(!!a.$4)return a.$4(b[0],b[1],b[2],b[3])}else if(s===5)if(!!a.$5)return a.$5(b[0],b[1],b[2],b[3],b[4])
r=a[""+"$"+s]
if(r!=null)return r.apply(a,b)}return A.fj(a,b,c)},
fj(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=b.length,e=a.$R
if(f<e)return A.a0(a,b,c)
s=a.$D
r=s==null
q=!r?s():null
p=J.X(a)
o=p.$C
if(typeof o=="string")o=p[o]
if(r){if(c!=null&&c.a!==0)return A.a0(a,b,c)
if(f===e)return o.apply(a,b)
return A.a0(a,b,c)}if(Array.isArray(q)){if(c!=null&&c.a!==0)return A.a0(a,b,c)
n=e+q.length
if(f>n)return A.a0(a,b,null)
if(f<n){m=q.slice(f-e)
l=A.dW(b,t.z)
B.a.L(l,m)}else l=b
return o.apply(a,l)}else{if(f>e)return A.a0(a,b,c)
l=A.dW(b,t.z)
k=Object.keys(q)
if(c==null)for(r=k.length,j=0;j<k.length;k.length===r||(0,A.dF)(k),++j){i=q[A.V(k[j])]
if(B.h===i)return A.a0(a,l,c)
B.a.n(l,i)}else{for(r=k.length,h=0,j=0;j<k.length;k.length===r||(0,A.dF)(k),++j){g=A.V(k[j])
if(c.ak(g)){++h
B.a.n(l,c.l(0,g))}else{i=q[g]
if(B.h===i)return A.a0(a,l,c)
B.a.n(l,i)}}if(h!==c.a)return A.a0(a,l,c)}return o.apply(a,l)}},
fm(a){var s=a.$thrownJsError
if(s==null)return null
return A.aA(s)},
F(a,b){if(a==null)J.ce(a)
throw A.e(A.dz(a,b))},
dz(a,b){var s,r="index"
if(!A.ep(b))return new A.L(!0,b,r,null)
s=A.ca(J.ce(a))
if(b<0||b>=s)return A.dS(b,s,a,r)
return new A.aY(null,null,!0,b,r,"Value not in range")},
e(a){return A.eC(new Error(),a)},
eC(a,b){var s
if(b==null)b=new A.S()
a.dartException=b
s=A.hV
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:s})
a.name=""}else a.toString=s
return a},
hV(){return J.bm(this.dartException)},
de(a){throw A.e(a)},
hT(a,b){throw A.eC(b,a)},
dF(a){throw A.e(A.cg(a))},
T(a){var s,r,q,p,o,n
a=A.hS(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.ax([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cu(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
cv(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
e3(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
dl(a,b){var s=b==null,r=s?null:b.method
return new A.bD(a,r,s?null:b.receiver)},
bl(a){if(a==null)return new A.co(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.ah(a,a.dartException)
return A.hy(a)},
ah(a,b){if(t.R.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
hy(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.ag(r,16)&8191)===10)switch(q){case 438:return A.ah(a,A.dl(A.q(s)+" (Error "+q+")",null))
case 445:case 5007:A.q(s)
return A.ah(a,new A.aX())}}if(a instanceof TypeError){p=$.eI()
o=$.eJ()
n=$.eK()
m=$.eL()
l=$.eO()
k=$.eP()
j=$.eN()
$.eM()
i=$.eR()
h=$.eQ()
g=p.u(s)
if(g!=null)return A.ah(a,A.dl(A.V(s),g))
else{g=o.u(s)
if(g!=null){g.method="call"
return A.ah(a,A.dl(A.V(s),g))}else if(n.u(s)!=null||m.u(s)!=null||l.u(s)!=null||k.u(s)!=null||j.u(s)!=null||m.u(s)!=null||i.u(s)!=null||h.u(s)!=null){A.V(s)
return A.ah(a,new A.aX())}}return A.ah(a,new A.bY(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.aZ()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.ah(a,new A.L(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.aZ()
return a},
aA(a){var s
if(a==null)return new A.bb(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.bb(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
eE(a){if(a==null)return J.dh(a)
if(typeof a=="object")return A.bQ(a)
return J.dh(a)},
hd(a,b,c,d,e,f){t.Z.a(a)
switch(A.ca(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.e(new A.cB("Unsupported number of arguments for wrapped closure"))},
cc(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.hD(a,b)
a.$identity=s
return s},
hD(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.hd)},
f6(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.bV().constructor.prototype):Object.create(new A.ai(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.dQ(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.f2(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.dQ(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
f2(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.e("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.f_)}throw A.e("Error in functionType of tearoff")},
f3(a,b,c,d){var s=A.dP
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
dQ(a,b,c,d){if(c)return A.f5(a,b,d)
return A.f3(b.length,d,a,b)},
f4(a,b,c,d){var s=A.dP,r=A.f0
switch(b?-1:a){case 0:throw A.e(new A.bR("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
f5(a,b,c){var s,r
if($.dN==null)$.dN=A.dM("interceptor")
if($.dO==null)$.dO=A.dM("receiver")
s=b.length
r=A.f4(s,c,a,b)
return r},
dy(a){return A.f6(a)},
f_(a,b){return A.cQ(v.typeUniverse,A.ag(a.a),b)},
dP(a){return a.a},
f0(a){return a.b},
dM(a){var s,r,q,p=new A.ai("receiver","interceptor"),o=J.fg(Object.getOwnPropertyNames(p),t.X)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.e(A.di("Field name "+a+" not found.",null))},
iG(a){throw A.e(new A.c1(a))},
eA(a){return v.getIsolateTag(a)},
iE(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
hP(a){var s,r,q,p,o,n=A.V($.eB.$1(a)),m=$.d1[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.d6[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.h3($.ew.$2(a,n))
if(q!=null){m=$.d1[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.d6[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.dd(s)
$.d1[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.d6[n]=s
return s}if(p==="-"){o=A.dd(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.eF(a,s)
if(p==="*")throw A.e(A.e4(n))
if(v.leafTags[n]===true){o=A.dd(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.eF(a,s)},
eF(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.dE(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
dd(a){return J.dE(a,!1,null,!!a.$iw)},
hR(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.dd(s)
else return J.dE(s,c,null,null)},
hI(){if(!0===$.dC)return
$.dC=!0
A.hJ()},
hJ(){var s,r,q,p,o,n,m,l
$.d1=Object.create(null)
$.d6=Object.create(null)
A.hH()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.eG.$1(o)
if(n!=null){m=A.hR(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
hH(){var s,r,q,p,o,n,m=B.m()
m=A.az(B.n,A.az(B.o,A.az(B.f,A.az(B.f,A.az(B.p,A.az(B.q,A.az(B.r(B.e),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.eB=new A.d3(p)
$.ew=new A.d4(o)
$.eG=new A.d5(n)},
az(a,b){return a(b)||b},
hE(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
hS(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
aE:function aE(a,b){this.a=a
this.$ti=b},
aD:function aD(){},
aF:function aF(a,b,c){this.a=a
this.b=b
this.$ti=c},
bA:function bA(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
cp:function cp(a,b,c){this.a=a
this.b=b
this.c=c},
cu:function cu(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aX:function aX(){},
bD:function bD(a,b,c){this.a=a
this.b=b
this.c=c},
bY:function bY(a){this.a=a},
co:function co(a){this.a=a},
bb:function bb(a){this.a=a
this.b=null},
Z:function Z(){},
bs:function bs(){},
bt:function bt(){},
bW:function bW(){},
bV:function bV(){},
ai:function ai(a,b){this.a=a
this.b=b},
c1:function c1(a){this.a=a},
bR:function bR(a){this.a=a},
cK:function cK(){},
aQ:function aQ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ck:function ck(a,b){this.a=a
this.b=b
this.c=null},
d3:function d3(a){this.a=a},
d4:function d4(a){this.a=a},
d5:function d5(a){this.a=a},
ae(a,b,c){if(a>>>0!==a||a>=c)throw A.e(A.dz(b,a))},
aV:function aV(){},
bF:function bF(){},
ar:function ar(){},
aT:function aT(){},
aU:function aU(){},
bG:function bG(){},
bH:function bH(){},
bI:function bI(){},
bJ:function bJ(){},
bK:function bK(){},
bL:function bL(){},
bM:function bM(){},
aW:function aW(){},
bN:function bN(){},
b7:function b7(){},
b8:function b8(){},
b9:function b9(){},
ba:function ba(){},
e_(a,b){var s=b.c
return s==null?b.c=A.dr(a,b.x,!0):s},
dm(a,b){var s=b.c
return s==null?b.c=A.be(a,"aJ",[b.x]):s},
e0(a){var s=a.w
if(s===6||s===7||s===8)return A.e0(a.x)
return s===12||s===13},
fv(a){return a.as},
dA(a){return A.c9(v.typeUniverse,a,!1)},
a4(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.a4(a1,s,a3,a4)
if(r===s)return a2
return A.ef(a1,r,!0)
case 7:s=a2.x
r=A.a4(a1,s,a3,a4)
if(r===s)return a2
return A.dr(a1,r,!0)
case 8:s=a2.x
r=A.a4(a1,s,a3,a4)
if(r===s)return a2
return A.ed(a1,r,!0)
case 9:q=a2.y
p=A.ay(a1,q,a3,a4)
if(p===q)return a2
return A.be(a1,a2.x,p)
case 10:o=a2.x
n=A.a4(a1,o,a3,a4)
m=a2.y
l=A.ay(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.dp(a1,n,l)
case 11:k=a2.x
j=a2.y
i=A.ay(a1,j,a3,a4)
if(i===j)return a2
return A.ee(a1,k,i)
case 12:h=a2.x
g=A.a4(a1,h,a3,a4)
f=a2.y
e=A.hv(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.ec(a1,g,e)
case 13:d=a2.y
a4+=d.length
c=A.ay(a1,d,a3,a4)
o=a2.x
n=A.a4(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.dq(a1,n,c,!0)
case 14:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.e(A.br("Attempted to substitute unexpected RTI kind "+a0))}},
ay(a,b,c,d){var s,r,q,p,o=b.length,n=A.cR(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.a4(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
hw(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.cR(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.a4(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
hv(a,b,c,d){var s,r=b.a,q=A.ay(a,r,c,d),p=b.b,o=A.ay(a,p,c,d),n=b.c,m=A.hw(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.c4()
s.a=q
s.b=o
s.c=m
return s},
ax(a,b){a[v.arrayRti]=b
return a},
ey(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.hG(s)
return a.$S()}return null},
hK(a,b){var s
if(A.e0(b))if(a instanceof A.Z){s=A.ey(a)
if(s!=null)return s}return A.ag(a)},
ag(a){if(a instanceof A.j)return A.a3(a)
if(Array.isArray(a))return A.av(a)
return A.dv(J.X(a))},
av(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
a3(a){var s=a.$ti
return s!=null?s:A.dv(a)},
dv(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.hc(a,s)},
hc(a,b){var s=a instanceof A.Z?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.fZ(v.typeUniverse,s.name)
b.$ccache=r
return r},
hG(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.c9(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
hF(a){return A.af(A.a3(a))},
hu(a){var s=a instanceof A.Z?A.ey(a):null
if(s!=null)return s
if(t.t.b(a))return J.eW(a).a
if(Array.isArray(a))return A.av(a)
return A.ag(a)},
af(a){var s=a.r
return s==null?a.r=A.ej(a):s},
ej(a){var s,r,q=a.as,p=q.replace(/\*/g,"")
if(p===q)return a.r=new A.cP(a)
s=A.c9(v.typeUniverse,p,!0)
r=s.r
return r==null?s.r=A.ej(s):r},
K(a){return A.af(A.c9(v.typeUniverse,a,!1))},
hb(a){var s,r,q,p,o,n,m=this
if(m===t.K)return A.W(m,a,A.hi)
if(!A.Y(m))s=m===t._
else s=!0
if(s)return A.W(m,a,A.hm)
s=m.w
if(s===7)return A.W(m,a,A.h9)
if(s===1)return A.W(m,a,A.eq)
r=s===6?m.x:m
q=r.w
if(q===8)return A.W(m,a,A.he)
if(r===t.S)p=A.ep
else if(r===t.i||r===t.H)p=A.hh
else if(r===t.N)p=A.hk
else p=r===t.y?A.cU:null
if(p!=null)return A.W(m,a,p)
if(q===9){o=r.x
if(r.y.every(A.hL)){m.f="$i"+o
if(o==="k")return A.W(m,a,A.hg)
return A.W(m,a,A.hl)}}else if(q===11){n=A.hE(r.x,r.y)
return A.W(m,a,n==null?A.eq:n)}return A.W(m,a,A.h7)},
W(a,b,c){a.b=c
return a.b(b)},
ha(a){var s,r=this,q=A.h6
if(!A.Y(r))s=r===t._
else s=!0
if(s)q=A.h4
else if(r===t.K)q=A.h2
else{s=A.bk(r)
if(s)q=A.h8}r.a=q
return r.a(a)},
cb(a){var s=a.w,r=!0
if(!A.Y(a))if(!(a===t._))if(!(a===t.G))if(s!==7)if(!(s===6&&A.cb(a.x)))r=s===8&&A.cb(a.x)||a===t.P||a===t.T
return r},
h7(a){var s=this
if(a==null)return A.cb(s)
return A.hM(v.typeUniverse,A.hK(a,s),s)},
h9(a){if(a==null)return!0
return this.x.b(a)},
hl(a){var s,r=this
if(a==null)return A.cb(r)
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.X(a)[s]},
hg(a){var s,r=this
if(a==null)return A.cb(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.X(a)[s]},
h6(a){var s=this
if(a==null){if(A.bk(s))return a}else if(s.b(a))return a
A.ek(a,s)},
h8(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.ek(a,s)},
ek(a,b){throw A.e(A.fP(A.e6(a,A.A(b,null))))},
e6(a,b){return A.ak(a)+": type '"+A.A(A.hu(a),null)+"' is not a subtype of type '"+b+"'"},
fP(a){return new A.bc("TypeError: "+a)},
x(a,b){return new A.bc("TypeError: "+A.e6(a,b))},
he(a){var s=this,r=s.w===6?s.x:s
return r.x.b(a)||A.dm(v.typeUniverse,r).b(a)},
hi(a){return a!=null},
h2(a){if(a!=null)return a
throw A.e(A.x(a,"Object"))},
hm(a){return!0},
h4(a){return a},
eq(a){return!1},
cU(a){return!0===a||!1===a},
h0(a){if(!0===a)return!0
if(!1===a)return!1
throw A.e(A.x(a,"bool"))},
is(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.e(A.x(a,"bool"))},
ir(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.e(A.x(a,"bool?"))},
it(a){if(typeof a=="number")return a
throw A.e(A.x(a,"double"))},
iv(a){if(typeof a=="number")return a
if(a==null)return a
throw A.e(A.x(a,"double"))},
iu(a){if(typeof a=="number")return a
if(a==null)return a
throw A.e(A.x(a,"double?"))},
ep(a){return typeof a=="number"&&Math.floor(a)===a},
ca(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.e(A.x(a,"int"))},
ix(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.e(A.x(a,"int"))},
iw(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.e(A.x(a,"int?"))},
hh(a){return typeof a=="number"},
iy(a){if(typeof a=="number")return a
throw A.e(A.x(a,"num"))},
iz(a){if(typeof a=="number")return a
if(a==null)return a
throw A.e(A.x(a,"num"))},
h1(a){if(typeof a=="number")return a
if(a==null)return a
throw A.e(A.x(a,"num?"))},
hk(a){return typeof a=="string"},
V(a){if(typeof a=="string")return a
throw A.e(A.x(a,"String"))},
iA(a){if(typeof a=="string")return a
if(a==null)return a
throw A.e(A.x(a,"String"))},
h3(a){if(typeof a=="string")return a
if(a==null)return a
throw A.e(A.x(a,"String?"))},
et(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.A(a[q],b)
return s},
hp(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.et(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.A(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
el(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", ",a3=null
if(a6!=null){s=a6.length
if(a5==null)a5=A.ax([],t.s)
else a3=a5.length
r=a5.length
for(q=s;q>0;--q)B.a.n(a5,"T"+(r+q))
for(p=t.X,o=t._,n="<",m="",q=0;q<s;++q,m=a2){l=a5.length
k=l-1-q
if(!(k>=0))return A.F(a5,k)
n=B.i.a0(n+m,a5[k])
j=a6[q]
i=j.w
if(!(i===2||i===3||i===4||i===5||j===p))l=j===o
else l=!0
if(!l)n+=" extends "+A.A(j,a5)}n+=">"}else n=""
p=a4.x
h=a4.y
g=h.a
f=g.length
e=h.b
d=e.length
c=h.c
b=c.length
a=A.A(p,a5)
for(a0="",a1="",q=0;q<f;++q,a1=a2)a0+=a1+A.A(g[q],a5)
if(d>0){a0+=a1+"["
for(a1="",q=0;q<d;++q,a1=a2)a0+=a1+A.A(e[q],a5)
a0+="]"}if(b>0){a0+=a1+"{"
for(a1="",q=0;q<b;q+=3,a1=a2){a0+=a1
if(c[q+1])a0+="required "
a0+=A.A(c[q+2],a5)+" "+c[q]}a0+="}"}if(a3!=null){a5.toString
a5.length=a3}return n+"("+a0+") => "+a},
A(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6)return A.A(a.x,b)
if(l===7){s=a.x
r=A.A(s,b)
q=s.w
return(q===12||q===13?"("+r+")":r)+"?"}if(l===8)return"FutureOr<"+A.A(a.x,b)+">"
if(l===9){p=A.hx(a.x)
o=a.y
return o.length>0?p+("<"+A.et(o,b)+">"):p}if(l===11)return A.hp(a,b)
if(l===12)return A.el(a,b,null)
if(l===13)return A.el(a.x,b,a.y)
if(l===14){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.F(b,n)
return b[n]}return"?"},
hx(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
h_(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
fZ(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.c9(a,b,!1)
else if(typeof m=="number"){s=m
r=A.bf(a,5,"#")
q=A.cR(s)
for(p=0;p<s;++p)q[p]=r
o=A.be(a,b,q)
n[b]=o
return o}else return m},
fX(a,b){return A.eg(a.tR,b)},
fW(a,b){return A.eg(a.eT,b)},
c9(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.ea(A.e8(a,null,b,c))
r.set(b,s)
return s},
cQ(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.ea(A.e8(a,b,c,!0))
q.set(c,r)
return r},
fY(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.dp(a,b,c.w===10?c.y:[c])
p.set(s,q)
return q},
U(a,b){b.a=A.ha
b.b=A.hb
return b},
bf(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.E(null,null)
s.w=b
s.as=c
r=A.U(a,s)
a.eC.set(c,r)
return r},
ef(a,b,c){var s,r=b.as+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.fU(a,b,r,c)
a.eC.set(r,s)
return s},
fU(a,b,c,d){var s,r,q
if(d){s=b.w
if(!A.Y(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.E(null,null)
q.w=6
q.x=b
q.as=c
return A.U(a,q)},
dr(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.fT(a,b,r,c)
a.eC.set(r,s)
return s},
fT(a,b,c,d){var s,r,q,p
if(d){s=b.w
r=!0
if(!A.Y(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.bk(b.x)
if(r)return b
else if(s===1||b===t.G)return t.P
else if(s===6){q=b.x
if(q.w===8&&A.bk(q.x))return q
else return A.e_(a,b)}}p=new A.E(null,null)
p.w=7
p.x=b
p.as=c
return A.U(a,p)},
ed(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.fR(a,b,r,c)
a.eC.set(r,s)
return s},
fR(a,b,c,d){var s,r
if(d){s=b.w
if(A.Y(b)||b===t.K||b===t._)return b
else if(s===1)return A.be(a,"aJ",[b])
else if(b===t.P||b===t.T)return t.bc}r=new A.E(null,null)
r.w=8
r.x=b
r.as=c
return A.U(a,r)},
fV(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.E(null,null)
s.w=14
s.x=b
s.as=q
r=A.U(a,s)
a.eC.set(q,r)
return r},
bd(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
fQ(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
be(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.bd(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.E(null,null)
r.w=9
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.U(a,r)
a.eC.set(p,q)
return q},
dp(a,b,c){var s,r,q,p,o,n
if(b.w===10){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.bd(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.E(null,null)
o.w=10
o.x=s
o.y=r
o.as=q
n=A.U(a,o)
a.eC.set(q,n)
return n},
ee(a,b,c){var s,r,q="+"+(b+"("+A.bd(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.E(null,null)
s.w=11
s.x=b
s.y=c
s.as=q
r=A.U(a,s)
a.eC.set(q,r)
return r},
ec(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.bd(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.bd(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.fQ(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.E(null,null)
p.w=12
p.x=b
p.y=c
p.as=r
o=A.U(a,p)
a.eC.set(r,o)
return o},
dq(a,b,c,d){var s,r=b.as+("<"+A.bd(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.fS(a,b,c,r,d)
a.eC.set(r,s)
return s},
fS(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.cR(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.a4(a,b,r,0)
m=A.ay(a,c,r,0)
return A.dq(a,n,m,c!==m)}}l=new A.E(null,null)
l.w=13
l.x=b
l.y=c
l.as=d
return A.U(a,l)},
e8(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
ea(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.fJ(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.e9(a,r,l,k,!1)
else if(q===46)r=A.e9(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.a2(a.u,a.e,k.pop()))
break
case 94:k.push(A.fV(a.u,k.pop()))
break
case 35:k.push(A.bf(a.u,5,"#"))
break
case 64:k.push(A.bf(a.u,2,"@"))
break
case 126:k.push(A.bf(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.fL(a,k)
break
case 38:A.fK(a,k)
break
case 42:p=a.u
k.push(A.ef(p,A.a2(p,a.e,k.pop()),a.n))
break
case 63:p=a.u
k.push(A.dr(p,A.a2(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.ed(p,A.a2(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.fI(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.eb(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.fN(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.a2(a.u,a.e,m)},
fJ(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
e9(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===10)o=o.x
n=A.h_(s,o.x)[p]
if(n==null)A.de('No "'+p+'" in "'+A.fv(o)+'"')
d.push(A.cQ(s,o,n))}else d.push(p)
return m},
fL(a,b){var s,r=a.u,q=A.e7(a,b),p=b.pop()
if(typeof p=="string")b.push(A.be(r,p,q))
else{s=A.a2(r,a.e,p)
switch(s.w){case 12:b.push(A.dq(r,s,q,a.n))
break
default:b.push(A.dp(r,s,q))
break}}},
fI(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.e7(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.a2(p,a.e,o)
q=new A.c4()
q.a=s
q.b=n
q.c=m
b.push(A.ec(p,r,q))
return
case-4:b.push(A.ee(p,b.pop(),s))
return
default:throw A.e(A.br("Unexpected state under `()`: "+A.q(o)))}},
fK(a,b){var s=b.pop()
if(0===s){b.push(A.bf(a.u,1,"0&"))
return}if(1===s){b.push(A.bf(a.u,4,"1&"))
return}throw A.e(A.br("Unexpected extended operation "+A.q(s)))},
e7(a,b){var s=b.splice(a.p)
A.eb(a.u,a.e,s)
a.p=b.pop()
return s},
a2(a,b,c){if(typeof c=="string")return A.be(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.fM(a,b,c)}else return c},
eb(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.a2(a,b,c[s])},
fN(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.a2(a,b,c[s])},
fM(a,b,c){var s,r,q=b.w
if(q===10){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==9)throw A.e(A.br("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.e(A.br("Bad index "+c+" for "+b.h(0)))},
hM(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.p(a,b,null,c,null,!1)?1:0
r.set(c,s)}if(0===s)return!1
if(1===s)return!0
return!0},
p(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(!A.Y(d))s=d===t._
else s=!0
if(s)return!0
r=b.w
if(r===4)return!0
if(A.Y(b))return!1
s=b.w
if(s===1)return!0
q=r===14
if(q)if(A.p(a,c[b.x],c,d,e,!1))return!0
p=d.w
s=b===t.P||b===t.T
if(s){if(p===8)return A.p(a,b,c,d.x,e,!1)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.p(a,b.x,c,d,e,!1)
if(r===6)return A.p(a,b.x,c,d,e,!1)
return r!==7}if(r===6)return A.p(a,b.x,c,d,e,!1)
if(p===6){s=A.e_(a,d)
return A.p(a,b,c,s,e,!1)}if(r===8){if(!A.p(a,b.x,c,d,e,!1))return!1
return A.p(a,A.dm(a,b),c,d,e,!1)}if(r===7){s=A.p(a,t.P,c,d,e,!1)
return s&&A.p(a,b.x,c,d,e,!1)}if(p===8){if(A.p(a,b,c,d.x,e,!1))return!0
return A.p(a,b,c,A.dm(a,d),e,!1)}if(p===7){s=A.p(a,b,c,t.P,e,!1)
return s||A.p(a,b,c,d.x,e,!1)}if(q)return!1
s=r!==12
if((!s||r===13)&&d===t.Z)return!0
o=r===11
if(o&&d===t.L)return!0
if(p===13){if(b===t.g)return!0
if(r!==13)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.p(a,j,c,i,e,!1)||!A.p(a,i,e,j,c,!1))return!1}return A.eo(a,b.x,c,d.x,e,!1)}if(p===12){if(b===t.g)return!0
if(s)return!1
return A.eo(a,b,c,d,e,!1)}if(r===9){if(p!==9)return!1
return A.hf(a,b,c,d,e,!1)}if(o&&p===11)return A.hj(a,b,c,d,e,!1)
return!1},
eo(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.p(a3,a4.x,a5,a6.x,a7,!1))return!1
s=a4.y
r=a6.y
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.p(a3,p[h],a7,g,a5,!1))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.p(a3,p[o+h],a7,g,a5,!1))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.p(a3,k[h],a7,g,a5,!1))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;!0;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.p(a3,e[a+2],a7,g,a5,!1))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
hf(a,b,c,d,e,f){var s,r,q,p,o,n=b.x,m=d.x
for(;n!==m;){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.cQ(a,b,r[o])
return A.eh(a,p,null,c,d.y,e,!1)}return A.eh(a,b.y,null,c,d.y,e,!1)},
eh(a,b,c,d,e,f,g){var s,r=b.length
for(s=0;s<r;++s)if(!A.p(a,b[s],d,e[s],f,!1))return!1
return!0},
hj(a,b,c,d,e,f){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.p(a,r[s],c,q[s],e,!1))return!1
return!0},
bk(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.Y(a))if(s!==7)if(!(s===6&&A.bk(a.x)))r=s===8&&A.bk(a.x)
return r},
hL(a){var s
if(!A.Y(a))s=a===t._
else s=!0
return s},
Y(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
eg(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
cR(a){return a>0?new Array(a):v.typeUniverse.sEA},
E:function E(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
c4:function c4(){this.c=this.b=this.a=null},
cP:function cP(a){this.a=a},
c2:function c2(){},
bc:function bc(a){this.a=a},
fD(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.hA()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.cc(new A.cx(q),1)).observe(s,{childList:true})
return new A.cw(q,s,r)}else if(self.setImmediate!=null)return A.hB()
return A.hC()},
fE(a){self.scheduleImmediate(A.cc(new A.cy(t.M.a(a)),0))},
fF(a){self.setImmediate(A.cc(new A.cz(t.M.a(a)),0))},
fG(a){t.M.a(a)
A.fO(0,a)},
fO(a,b){var s=new A.cN()
s.a7(a,b)
return s},
cf(a,b){var s=A.d0(a,"error",t.K)
return new A.aC(s,b==null?A.eZ(a):b)},
eZ(a){var s
if(t.R.b(a)){s=a.gE()
if(s!=null)return s}return B.t},
fH(a,b){var s,r,q
for(s=t.c;r=a.a,(r&4)!==0;)a=s.a(a.c)
if(a===b){b.aa(new A.L(!0,a,null,"Cannot complete a future with itself"),A.fw())
return}s=r|b.a&1
a.a=s
if((s&24)!==0){q=b.K()
b.F(a)
A.b5(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.V(q)}},
b5(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.n,r=t.F,q=t.e;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.cV(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.b5(c.a,b)
p.a=k
j=k.a}o=c.a
i=o.c
p.b=m
p.c=i
if(n){h=b.c
h=(h&1)!==0||(h&15)===8}else h=!0
if(h){g=b.b.b
if(m){o=o.b===g
o=!(o||o)}else o=!1
if(o){s.a(i)
A.cV(i.a,i.b)
return}f=$.t
if(f!==g)$.t=g
else f=null
b=b.c
if((b&15)===8)new A.cH(p,c,m).$0()
else if(n){if((b&1)!==0)new A.cG(p,i).$0()}else if((b&2)!==0)new A.cF(c,p).$0()
if(f!=null)$.t=f
b=p.c
if(b instanceof A.B){o=p.a.$ti
o=o.i("aJ<2>").b(b)||!o.y[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.D(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.fH(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.D(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
hq(a,b){var s=t.Q
if(s.b(a))return s.a(a)
s=t.v
if(s.b(a))return s.a(a)
throw A.e(A.dL(a,"onError",u.c))},
ho(){var s,r
for(s=$.aw;s!=null;s=$.aw){$.bj=null
r=s.b
$.aw=r
if(r==null)$.bi=null
s.a.$0()}},
ht(){$.dw=!0
try{A.ho()}finally{$.bj=null
$.dw=!1
if($.aw!=null)$.dG().$1(A.ex())}},
eu(a){var s=new A.c_(a),r=$.bi
if(r==null){$.aw=$.bi=s
if(!$.dw)$.dG().$1(A.ex())}else $.bi=r.b=s},
hs(a){var s,r,q,p=$.aw
if(p==null){A.eu(a)
$.bj=$.bi
return}s=new A.c_(a)
r=$.bj
if(r==null){s.b=p
$.aw=$.bj=s}else{q=r.b
s.b=q
$.bj=r.b=s
if(q==null)$.bi=s}},
cV(a,b){A.hs(new A.cW(a,b))},
er(a,b,c,d,e){var s,r=$.t
if(r===c)return d.$0()
$.t=c
s=r
try{r=d.$0()
return r}finally{$.t=s}},
es(a,b,c,d,e,f,g){var s,r=$.t
if(r===c)return d.$1(e)
$.t=c
s=r
try{r=d.$1(e)
return r}finally{$.t=s}},
hr(a,b,c,d,e,f,g,h,i){var s,r=$.t
if(r===c)return d.$2(e,f)
$.t=c
s=r
try{r=d.$2(e,f)
return r}finally{$.t=s}},
dx(a,b,c,d){t.M.a(d)
if(B.b!==c)d=c.ah(d)
A.eu(d)},
cx:function cx(a){this.a=a},
cw:function cw(a,b,c){this.a=a
this.b=b
this.c=c},
cy:function cy(a){this.a=a},
cz:function cz(a){this.a=a},
cN:function cN(){},
cO:function cO(a,b){this.a=a
this.b=b},
aC:function aC(a,b){this.a=a
this.b=b},
b4:function b4(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
B:function B(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
cC:function cC(a,b){this.a=a
this.b=b},
cE:function cE(a,b){this.a=a
this.b=b},
cD:function cD(a,b,c){this.a=a
this.b=b
this.c=c},
cH:function cH(a,b,c){this.a=a
this.b=b
this.c=c},
cI:function cI(a){this.a=a},
cG:function cG(a,b){this.a=a
this.b=b},
cF:function cF(a,b){this.a=a
this.b=b},
c_:function c_(a){this.a=a
this.b=null},
b_:function b_(){},
cs:function cs(a,b){this.a=a
this.b=b},
ct:function ct(a,b){this.a=a
this.b=b},
bh:function bh(){},
cW:function cW(a,b){this.a=a
this.b=b},
c7:function c7(){},
cL:function cL(a,b){this.a=a
this.b=b},
cM:function cM(a,b,c){this.a=a
this.b=b
this.c=c},
cl(a){var s,r={}
if(A.dD(a))return"{...}"
s=new A.b0("")
try{B.a.n($.C,a)
s.a+="{"
r.a=!0
a.A(0,new A.cm(r,s))
s.a+="}"}finally{if(0>=$.C.length)return A.F($.C,-1)
$.C.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
i:function i(){},
aS:function aS(){},
cm:function cm(a,b){this.a=a
this.b=b},
bg:function bg(){},
aq:function aq(){},
b2:function b2(){},
au:function au(){},
f8(a,b){a=A.e(a)
if(a==null)a=t.K.a(a)
a.stack=b.h(0)
throw a
throw A.e("unreachable")},
dV(a,b){var s,r,q,p=A.ax([],b.i("y<0>"))
for(s=a.$ti,r=new A.a_(a,a.gj(0),s.i("a_<O.E>")),s=s.i("O.E");r.p();){q=r.d
B.a.n(p,b.a(q==null?s.a(q):q))}return p},
dW(a,b){var s=A.fh(a,b)
return s},
fh(a,b){var s=A.ax(a.slice(0),b.i("y<0>"))
return s},
e1(a,b,c){var s=J.dJ(b)
if(!s.p())return a
if(c.length===0){do a+=A.q(s.gt())
while(s.p())}else{a+=A.q(s.gt())
for(;s.p();)a=a+c+A.q(s.gt())}return a},
dX(a,b){return new A.bO(a,b.gao(),b.gaq(),b.gap())},
fw(){return A.aA(new Error())},
f7(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
dR(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bv(a){if(a>=10)return""+a
return"0"+a},
ak(a){if(typeof a=="number"||A.cU(a)||a==null)return J.bm(a)
if(typeof a=="string")return JSON.stringify(a)
return A.fu(a)},
f9(a,b){A.d0(a,"error",t.K)
A.d0(b,"stackTrace",t.l)
A.f8(a,b)},
br(a){return new A.bq(a)},
di(a,b){return new A.L(!1,null,b,a)},
dL(a,b,c){return new A.L(!0,a,b,c)},
dZ(a,b,c,d,e){return new A.aY(b,c,!0,a,d,"Invalid value")},
dS(a,b,c,d){return new A.by(b,!0,a,d,"Index out of range")},
dn(a){return new A.bZ(a)},
e4(a){return new A.bX(a)},
fx(a){return new A.bU(a)},
cg(a){return new A.bu(a)},
ff(a,b,c){var s,r
if(A.dD(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.ax([],t.s)
B.a.n($.C,a)
try{A.hn(a,s)}finally{if(0>=$.C.length)return A.F($.C,-1)
$.C.pop()}r=A.e1(b,t.U.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
dU(a,b,c){var s,r
if(A.dD(a))return b+"..."+c
s=new A.b0(b)
B.a.n($.C,a)
try{r=s
r.a=A.e1(r.a,a,", ")}finally{if(0>=$.C.length)return A.F($.C,-1)
$.C.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
hn(a,b){var s,r,q,p,o,n,m,l=a.gB(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.p())return
s=A.q(l.gt())
B.a.n(b,s)
k+=s.length+2;++j}if(!l.p()){if(j<=5)return
if(0>=b.length)return A.F(b,-1)
r=b.pop()
if(0>=b.length)return A.F(b,-1)
q=b.pop()}else{p=l.gt();++j
if(!l.p()){if(j<=4){B.a.n(b,A.q(p))
return}r=A.q(p)
if(0>=b.length)return A.F(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gt();++j
for(;l.p();p=o,o=n){n=l.gt();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.F(b,-1)
k-=b.pop().length+2;--j}B.a.n(b,"...")
return}}q=A.q(p)
r=A.q(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.F(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.n(b,m)
B.a.n(b,q)
B.a.n(b,r)},
fi(a,b){var s=B.c.gk(a)
b=B.c.gk(b)
b=A.fy(A.e2(A.e2($.eS(),s),b))
return b},
cn:function cn(a,b){this.a=a
this.b=b},
aH:function aH(a,b,c){this.a=a
this.b=b
this.c=c},
m:function m(){},
bq:function bq(a){this.a=a},
S:function S(){},
L:function L(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aY:function aY(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
by:function by(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bO:function bO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bZ:function bZ(a){this.a=a},
bX:function bX(a){this.a=a},
bU:function bU(a){this.a=a},
bu:function bu(a){this.a=a},
aZ:function aZ(){},
cB:function cB(a){this.a=a},
f:function f(){},
G:function G(){},
j:function j(){},
c8:function c8(){},
b0:function b0(a){this.a=a},
at(a,b,c,d,e){var s=A.hz(new A.cA(c),t.A)
if(s!=null)J.eU(a,b,t.B.a(s),!1)
return new A.c3(a,b,s,!1,e.i("c3<0>"))},
hz(a,b){var s=$.t
if(s===B.b)return a
return s.ai(a,b)},
c:function c(){},
bn:function bn(){},
bo:function bo(){},
a5:function a5(){},
aj:function aj(){},
I:function I(){},
aG:function aG(){},
ch:function ch(){},
a6:function a6(){},
ci:function ci(){},
u:function u(){},
a:function a(){},
r:function r(){},
bx:function bx(){},
a8:function a8(){},
aK:function aK(){},
aL:function aL(){},
am:function am(){},
z:function z(){},
h:function h(){},
bS:function bS(){},
H:function H(){},
ac:function ac(){},
J:function J(){},
dj:function dj(a,b){this.a=a
this.$ti=b},
b3:function b3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ad:function ad(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
c3:function c3(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
cA:function cA(a){this.a=a},
al:function al(){},
bw:function bw(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
c0:function c0(){},
c5:function c5(){},
c6:function c6(){},
aR:function aR(){},
h5(a,b,c,d){var s,r,q
A.h0(b)
t.j.a(d)
if(b){s=[c]
B.a.L(s,d)
d=s}r=t.z
q=A.dV(J.eX(d,A.hN(),r),r)
t.Z.a(a)
return A.ei(A.fl(a,q,null))},
dt(a,b,c){var s
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(s){}return!1},
en(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return null},
ei(a){if(a==null||typeof a=="string"||typeof a=="number"||A.cU(a))return a
if(a instanceof A.N)return a.a
if(A.eD(a))return a
if(t.f.b(a))return a
if(a instanceof A.aH)return A.ab(a)
if(t.Z.b(a))return A.em(a,"$dart_jsFunction",new A.cS())
return A.em(a,"_$dart_jsObject",new A.cT($.dI()))},
em(a,b,c){var s=A.en(a,b)
if(s==null){s=c.$1(a)
A.dt(a,b,s)}return s},
ds(a){var s
if(a==null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")return a
else if(a instanceof Object&&A.eD(a))return a
else if(a instanceof Object&&t.f.b(a))return a
else if(a instanceof Date){s=A.ca(a.getTime())
if(s<-864e13||s>864e13)A.de(A.dZ(s,-864e13,864e13,"millisecondsSinceEpoch",null))
A.d0(!1,"isUtc",t.y)
return new A.aH(s,0,!1)}else if(a.constructor===$.dI())return a.o
else return A.ev(a)},
ev(a){if(typeof a=="function")return A.du(a,$.df(),new A.cX())
if(a instanceof Array)return A.du(a,$.dH(),new A.cY())
return A.du(a,$.dH(),new A.cZ())},
du(a,b,c){var s=A.en(a,b)
if(s==null||!(a instanceof Object)){s=c.$1(a)
A.dt(a,b,s)}return s},
cS:function cS(){},
cT:function cT(a){this.a=a},
cX:function cX(){},
cY:function cY(){},
cZ:function cZ(){},
N:function N(a){this.a=a},
aP:function aP(a){this.a=a},
a9:function a9(a,b){this.a=a
this.$ti=b},
b6:function b6(){},
b:function b(){},
hQ(){var s,r,q="click",p=document,o=t.q.a(p.querySelector("#urlInput")),n=t.D,m=t.x,l=t.C,k=l.i("~(1)?")
l=l.c
A.at(n.a(p.querySelector("#loadImageBtn")),q,k.a(new A.d8(o,m.a(p.querySelector("#image-container")))),!1,l)
s=n.a(p.querySelector("#plusButton"))
r=m.a(p.querySelector("#context-menu"))
A.at(s,q,k.a(new A.d9(r)),!1,l)
A.at(p,q,t.aC.a(new A.da(r)),!1,t.V)
l=p.querySelector("#enterFullscreenBtn")
l.toString
l=J.dK(l)
k=l.$ti
A.at(l.a,l.b,k.i("~(1)?").a(new A.db(r)),!1,k.c)
p=p.querySelector("#exitFullscreenBtn")
p.toString
p=J.dK(p)
k=p.$ti
A.at(p.a,p.b,k.i("~(1)?").a(new A.dc(r)),!1,k.c)},
d8:function d8(a,b){this.a=a
this.b=b},
d7:function d7(){},
d9:function d9(a){this.a=a},
da:function da(a){this.a=a},
db:function db(a){this.a=a},
dc:function dc(a){this.a=a},
eD(a){return t.d.b(a)||t.A.b(a)||t.w.b(a)||t.I.b(a)||t.k.b(a)||t.cg.b(a)||t.bj.b(a)},
hU(a){A.hT(new A.bE("Field '"+a+"' has been assigned during initialization."),new Error())}},B={}
var w=[A,J,B]
var $={}
A.dk.prototype={}
J.aM.prototype={
v(a,b){return a===b},
gk(a){return A.bQ(a)},
h(a){return"Instance of '"+A.cq(a)+"'"},
Z(a,b){throw A.e(A.dX(a,t.o.a(b)))},
gm(a){return A.af(A.dv(this))}}
J.bz.prototype={
h(a){return String(a)},
gk(a){return a?519018:218159},
gm(a){return A.af(t.y)},
$il:1,
$id_:1}
J.aO.prototype={
v(a,b){return null==b},
h(a){return"null"},
gk(a){return 0},
$il:1}
J.D.prototype={}
J.aa.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.bP.prototype={}
J.b1.prototype={}
J.M.prototype={
h(a){var s=a[$.df()]
if(s==null)return this.a5(a)
return"JavaScript function for "+J.bm(s)},
$ia7:1}
J.ao.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.ap.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.y.prototype={
n(a,b){A.av(a).c.a(b)
if(!!a.fixed$length)A.de(A.dn("add"))
a.push(b)},
L(a,b){var s
A.av(a).i("f<1>").a(b)
if(!!a.fixed$length)A.de(A.dn("addAll"))
if(Array.isArray(b)){this.a8(a,b)
return}for(s=J.dJ(b);s.p();)a.push(s.gt())},
a8(a,b){var s,r
t.b.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.e(A.cg(a))
for(r=0;r<s;++r)a.push(b[r])},
Y(a,b,c){var s=A.av(a)
return new A.Q(a,s.q(c).i("1(2)").a(b),s.i("@<1>").q(c).i("Q<1,2>"))},
C(a,b){if(!(b<a.length))return A.F(a,b)
return a[b]},
h(a){return A.dU(a,"[","]")},
gB(a){return new J.bp(a,a.length,A.av(a).i("bp<1>"))},
gk(a){return A.bQ(a)},
gj(a){return a.length},
l(a,b){if(!(b>=0&&b<a.length))throw A.e(A.dz(a,b))
return a[b]},
$if:1,
$ik:1}
J.cj.prototype={}
J.bp.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
p(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.dF(q)
throw A.e(q)}s=r.c
if(s>=p){r.sP(null)
return!1}r.sP(q[s]);++r.c
return!0},
sP(a){this.d=this.$ti.i("1?").a(a)}}
J.bC.prototype={
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gk(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
ag(a,b){var s
if(a>0)s=this.af(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
af(a,b){return b>31?0:a>>>b},
gm(a){return A.af(t.H)},
$in:1,
$iaB:1}
J.aN.prototype={
gm(a){return A.af(t.S)},
$il:1,
$id:1}
J.bB.prototype={
gm(a){return A.af(t.i)},
$il:1}
J.an.prototype={
a0(a,b){return a+b},
h(a){return a},
gk(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gm(a){return A.af(t.N)},
gj(a){return a.length},
$il:1,
$iR:1}
A.bE.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.cr.prototype={}
A.aI.prototype={}
A.O.prototype={
gB(a){return new A.a_(this,this.gj(0),this.$ti.i("a_<O.E>"))}}
A.a_.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
p(){var s,r=this,q=r.a,p=J.cd(q),o=p.gj(q)
if(r.b!==o)throw A.e(A.cg(q))
s=r.c
if(s>=o){r.sR(null)
return!1}r.sR(p.C(q,s));++r.c
return!0},
sR(a){this.d=this.$ti.i("1?").a(a)}}
A.Q.prototype={
gj(a){return J.ce(this.a)},
C(a,b){return this.b.$1(J.eV(this.a,b))}}
A.v.prototype={}
A.a1.prototype={
gk(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.i.gk(this.a)&536870911
this._hashCode=s
return s},
h(a){return'Symbol("'+this.a+'")'},
v(a,b){if(b==null)return!1
return b instanceof A.a1&&this.a===b.a},
$ias:1}
A.aE.prototype={}
A.aD.prototype={
h(a){return A.cl(this)},
$iP:1}
A.aF.prototype={
gj(a){return this.b.length},
A(a,b){var s,r,q,p,o=this
o.$ti.i("~(1,2)").a(b)
s=o.$keys
if(s==null){s=Object.keys(o.a)
o.$keys=s}s=s
r=o.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])}}
A.bA.prototype={
gao(){var s=this.a
if(s instanceof A.a1)return s
return this.a=new A.a1(A.V(s))},
gaq(){var s,r,q,p,o,n=this
if(n.c===1)return B.j
s=n.d
r=J.cd(s)
q=r.gj(s)-J.ce(n.e)-n.f
if(q===0)return B.j
p=[]
for(o=0;o<q;++o)p.push(r.l(s,o))
p.fixed$length=Array
p.immutable$list=Array
return p},
gap(){var s,r,q,p,o,n,m,l,k=this
if(k.c!==0)return B.k
s=k.e
r=J.cd(s)
q=r.gj(s)
p=k.d
o=J.cd(p)
n=o.gj(p)-q-k.f
if(q===0)return B.k
m=new A.aQ(t.h)
for(l=0;l<q;++l)m.a1(0,new A.a1(A.V(r.l(s,l))),o.l(p,n+l))
return new A.aE(m,t.Y)},
$idT:1}
A.cp.prototype={
$2(a,b){var s
A.V(a)
s=this.a
s.b=s.b+"$"+a
B.a.n(this.b,a)
B.a.n(this.c,b);++s.a},
$S:6}
A.cu.prototype={
u(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.aX.prototype={
h(a){return"Null check operator used on a null value"}}
A.bD.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.bY.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.co.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.bb.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ibT:1}
A.Z.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.eH(r==null?"unknown":r)+"'"},
$ia7:1,
gaB(){return this},
$C:"$1",
$R:1,
$D:null}
A.bs.prototype={$C:"$0",$R:0}
A.bt.prototype={$C:"$2",$R:2}
A.bW.prototype={}
A.bV.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.eH(s)+"'"}}
A.ai.prototype={
v(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.ai))return!1
return this.$_target===b.$_target&&this.a===b.a},
gk(a){return(A.eE(this.a)^A.bQ(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.cq(this.a)+"'")}}
A.c1.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bR.prototype={
h(a){return"RuntimeError: "+this.a}}
A.cK.prototype={}
A.aQ.prototype={
gj(a){return this.a},
ak(a){var s=this.b
if(s==null)return!1
return s[a]!=null},
l(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.am(b)},
am(a){var s,r,q=this.d
if(q==null)return null
s=q[this.W(a)]
r=this.X(s,a)
if(r<0)return null
return s[r].b},
a1(a,b,c){var s,r,q,p,o,n,m=this,l=A.a3(m)
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"){s=m.b
m.S(s==null?m.b=m.I():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.S(r==null?m.c=m.I():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.I()
p=m.W(b)
o=q[p]
if(o==null)q[p]=[m.J(b,c)]
else{n=m.X(o,b)
if(n>=0)o[n].b=c
else o.push(m.J(b,c))}}},
A(a,b){var s,r,q=this
A.a3(q).i("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.e(A.cg(q))
s=s.c}},
S(a,b,c){var s,r=A.a3(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.J(b,c)
else s.b=c},
J(a,b){var s=this,r=A.a3(s),q=new A.ck(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&1073741823
return q},
W(a){return J.dh(a)&1073741823},
X(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.eT(a[r].a,b))return r
return-1},
h(a){return A.cl(this)},
I(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.ck.prototype={}
A.d3.prototype={
$1(a){return this.a(a)},
$S:2}
A.d4.prototype={
$2(a,b){return this.a(a,b)},
$S:7}
A.d5.prototype={
$1(a){return this.a(A.V(a))},
$S:8}
A.aV.prototype={$io:1}
A.bF.prototype={
gm(a){return B.B},
$il:1}
A.ar.prototype={
gj(a){return a.length},
$iw:1}
A.aT.prototype={
l(a,b){A.ae(b,a,a.length)
return a[b]},
$if:1,
$ik:1}
A.aU.prototype={$if:1,$ik:1}
A.bG.prototype={
gm(a){return B.C},
$il:1}
A.bH.prototype={
gm(a){return B.D},
$il:1}
A.bI.prototype={
gm(a){return B.E},
l(a,b){A.ae(b,a,a.length)
return a[b]},
$il:1}
A.bJ.prototype={
gm(a){return B.F},
l(a,b){A.ae(b,a,a.length)
return a[b]},
$il:1}
A.bK.prototype={
gm(a){return B.G},
l(a,b){A.ae(b,a,a.length)
return a[b]},
$il:1}
A.bL.prototype={
gm(a){return B.I},
l(a,b){A.ae(b,a,a.length)
return a[b]},
$il:1}
A.bM.prototype={
gm(a){return B.J},
l(a,b){A.ae(b,a,a.length)
return a[b]},
$il:1}
A.aW.prototype={
gm(a){return B.K},
gj(a){return a.length},
l(a,b){A.ae(b,a,a.length)
return a[b]},
$il:1}
A.bN.prototype={
gm(a){return B.L},
gj(a){return a.length},
l(a,b){A.ae(b,a,a.length)
return a[b]},
$il:1}
A.b7.prototype={}
A.b8.prototype={}
A.b9.prototype={}
A.ba.prototype={}
A.E.prototype={
i(a){return A.cQ(v.typeUniverse,this,a)},
q(a){return A.fY(v.typeUniverse,this,a)}}
A.c4.prototype={}
A.cP.prototype={
h(a){return A.A(this.a,null)}}
A.c2.prototype={
h(a){return this.a}}
A.bc.prototype={$iS:1}
A.cx.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:9}
A.cw.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:10}
A.cy.prototype={
$0(){this.a.$0()},
$S:4}
A.cz.prototype={
$0(){this.a.$0()},
$S:4}
A.cN.prototype={
a7(a,b){if(self.setTimeout!=null)self.setTimeout(A.cc(new A.cO(this,b),0),a)
else throw A.e(A.dn("`setTimeout()` not found."))}}
A.cO.prototype={
$0(){this.b.$0()},
$S:0}
A.aC.prototype={
h(a){return A.q(this.a)},
$im:1,
gE(){return this.b}}
A.b4.prototype={
an(a){if((this.c&15)!==6)return!0
return this.b.b.O(t.m.a(this.d),a.a,t.y,t.K)},
al(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.Q.b(q))p=l.au(q,m,a.b,o,n,t.l)
else p=l.O(t.v.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.u.b(A.bl(s))){if((r.c&1)!==0)throw A.e(A.di("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.e(A.di("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.B.prototype={
aA(a,b,c){var s,r,q,p=this.$ti
p.q(c).i("1/(2)").a(a)
s=$.t
if(s===B.b){if(b!=null&&!t.Q.b(b)&&!t.v.b(b))throw A.e(A.dL(b,"onError",u.c))}else{c.i("@<0/>").q(p.c).i("1(2)").a(a)
if(b!=null)b=A.hq(b,s)}r=new A.B(s,c.i("B<0>"))
q=b==null?1:3
this.T(new A.b4(r,q,a,b,p.i("@<1>").q(c).i("b4<1,2>")))
return r},
az(a,b){return this.aA(a,null,b)},
ae(a){this.a=this.a&1|16
this.c=a},
F(a){this.a=a.a&30|this.a&1
this.c=a.c},
T(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.T(a)
return}r.F(s)}A.dx(null,null,r.b,t.M.a(new A.cC(r,a)))}},
V(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.c.a(m.c)
if((n.a&24)===0){n.V(a)
return}m.F(n)}l.a=m.D(a)
A.dx(null,null,m.b,t.M.a(new A.cE(l,m)))}},
K(){var s=t.F.a(this.c)
this.c=null
return this.D(s)},
D(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
ad(a,b){var s
t.l.a(b)
s=this.K()
this.ae(A.cf(a,b))
A.b5(this,s)},
aa(a,b){this.a^=2
A.dx(null,null,this.b,t.M.a(new A.cD(this,a,b)))},
$iaJ:1}
A.cC.prototype={
$0(){A.b5(this.a,this.b)},
$S:0}
A.cE.prototype={
$0(){A.b5(this.b,this.a.a)},
$S:0}
A.cD.prototype={
$0(){this.a.ad(this.b,this.c)},
$S:0}
A.cH.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.ar(t.O.a(q.d),t.z)}catch(p){s=A.bl(p)
r=A.aA(p)
q=m.c&&t.n.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.n.a(m.b.a.c)
else o.c=A.cf(s,r)
o.b=!0
return}if(l instanceof A.B&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.n.a(l.c)
q.b=!0}return}if(l instanceof A.B){n=m.b.a
q=m.a
q.c=l.az(new A.cI(n),t.z)
q.b=!1}},
$S:0}
A.cI.prototype={
$1(a){return this.a},
$S:11}
A.cG.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.O(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.bl(l)
r=A.aA(l)
q=this.a
q.c=A.cf(s,r)
q.b=!0}},
$S:0}
A.cF.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.n.a(m.a.a.c)
p=m.b
if(p.a.an(s)&&p.a.e!=null){p.c=p.a.al(s)
p.b=!1}}catch(o){r=A.bl(o)
q=A.aA(o)
p=t.n.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.cf(r,q)
n.b=!0}},
$S:0}
A.c_.prototype={}
A.b_.prototype={
gj(a){var s,r,q=this,p={},o=new A.B($.t,t.a)
p.a=0
s=A.a3(q)
r=s.i("~(1)?").a(new A.cs(p,q))
t.bp.a(new A.ct(p,o))
A.at(q.a,q.b,r,!1,s.c)
return o}}
A.cs.prototype={
$1(a){A.a3(this.b).c.a(a);++this.a.a},
$S(){return A.a3(this.b).i("~(1)")}}
A.ct.prototype={
$0(){var s=this.b,r=s.$ti,q=r.i("1/").a(this.a.a),p=s.K()
r.c.a(q)
s.a=8
s.c=q
A.b5(s,p)},
$S:0}
A.bh.prototype={$ie5:1}
A.cW.prototype={
$0(){A.f9(this.a,this.b)},
$S:0}
A.c7.prototype={
av(a){var s,r,q
t.M.a(a)
try{if(B.b===$.t){a.$0()
return}A.er(null,null,this,a,t.p)}catch(q){s=A.bl(q)
r=A.aA(q)
A.cV(t.K.a(s),t.l.a(r))}},
aw(a,b,c){var s,r,q
c.i("~(0)").a(a)
c.a(b)
try{if(B.b===$.t){a.$1(b)
return}A.es(null,null,this,a,b,t.p,c)}catch(q){s=A.bl(q)
r=A.aA(q)
A.cV(t.K.a(s),t.l.a(r))}},
ah(a){return new A.cL(this,t.M.a(a))},
ai(a,b){return new A.cM(this,b.i("~(0)").a(a),b)},
ar(a,b){b.i("0()").a(a)
if($.t===B.b)return a.$0()
return A.er(null,null,this,a,b)},
O(a,b,c,d){c.i("@<0>").q(d).i("1(2)").a(a)
d.a(b)
if($.t===B.b)return a.$1(b)
return A.es(null,null,this,a,b,c,d)},
au(a,b,c,d,e,f){d.i("@<0>").q(e).q(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.t===B.b)return a.$2(b,c)
return A.hr(null,null,this,a,b,c,d,e,f)}}
A.cL.prototype={
$0(){return this.a.av(this.b)},
$S:0}
A.cM.prototype={
$1(a){var s=this.c
return this.a.aw(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.i.prototype={
gB(a){return new A.a_(a,this.gj(a),A.ag(a).i("a_<i.E>"))},
C(a,b){return this.l(a,b)},
Y(a,b,c){var s=A.ag(a)
return new A.Q(a,s.q(c).i("1(i.E)").a(b),s.i("@<i.E>").q(c).i("Q<1,2>"))},
h(a){return A.dU(a,"[","]")}}
A.aS.prototype={
gj(a){return this.a},
h(a){return A.cl(this)},
$iP:1}
A.cm.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.q(a)
s=r.a+=s
r.a=s+": "
s=A.q(b)
r.a+=s},
$S:12}
A.bg.prototype={}
A.aq.prototype={
A(a,b){this.a.A(0,this.$ti.i("~(1,2)").a(b))},
gj(a){return this.a.a},
h(a){return A.cl(this.a)},
$iP:1}
A.b2.prototype={}
A.au.prototype={}
A.cn.prototype={
$2(a,b){var s,r,q
t.r.a(a)
s=this.b
r=this.a
q=s.a+=r.a
q+=a.a
s.a=q
s.a=q+": "
q=A.ak(b)
s.a+=q
r.a=", "},
$S:13}
A.aH.prototype={
v(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.aH)if(this.a===b.a)s=this.b===b.b
return s},
gk(a){return A.fi(this.a,this.b)},
h(a){var s=this,r=A.f7(A.ft(s)),q=A.bv(A.fr(s)),p=A.bv(A.fn(s)),o=A.bv(A.fo(s)),n=A.bv(A.fq(s)),m=A.bv(A.fs(s)),l=A.dR(A.fp(s)),k=s.b,j=k===0?"":A.dR(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j}}
A.m.prototype={
gE(){return A.fm(this)}}
A.bq.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.ak(s)
return"Assertion failed"}}
A.S.prototype={}
A.L.prototype={
gH(){return"Invalid argument"+(!this.a?"(s)":"")},
gG(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.q(p),n=s.gH()+q+o
if(!s.a)return n
return n+s.gG()+": "+A.ak(s.gN())},
gN(){return this.b}}
A.aY.prototype={
gN(){return A.h1(this.b)},
gH(){return"RangeError"},
gG(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.q(q):""
else if(q==null)s=": Not greater than or equal to "+A.q(r)
else if(q>r)s=": Not in inclusive range "+A.q(r)+".."+A.q(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.q(r)
return s}}
A.by.prototype={
gN(){return A.ca(this.b)},
gH(){return"RangeError"},
gG(){if(A.ca(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gj(a){return this.f}}
A.bO.prototype={
h(a){var s,r,q,p,o,n,m,l,k=this,j={},i=new A.b0("")
j.a=""
s=k.c
for(r=s.length,q=0,p="",o="";q<r;++q,o=", "){n=s[q]
i.a=p+o
p=A.ak(n)
p=i.a+=p
j.a=", "}k.d.A(0,new A.cn(j,i))
m=A.ak(k.a)
l=i.h(0)
return"NoSuchMethodError: method not found: '"+k.b.a+"'\nReceiver: "+m+"\nArguments: ["+l+"]"}}
A.bZ.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bX.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.bU.prototype={
h(a){return"Bad state: "+this.a}}
A.bu.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.ak(s)+"."}}
A.aZ.prototype={
h(a){return"Stack Overflow"},
gE(){return null},
$im:1}
A.cB.prototype={
h(a){return"Exception: "+this.a}}
A.f.prototype={
gj(a){var s,r=this.gB(this)
for(s=0;r.p();)++s
return s},
h(a){return A.ff(this,"(",")")}}
A.G.prototype={
gk(a){return A.j.prototype.gk.call(this,0)},
h(a){return"null"}}
A.j.prototype={$ij:1,
v(a,b){return this===b},
gk(a){return A.bQ(this)},
h(a){return"Instance of '"+A.cq(this)+"'"},
Z(a,b){throw A.e(A.dX(this,t.o.a(b)))},
gm(a){return A.hF(this)},
toString(){return this.h(this)}}
A.c8.prototype={
h(a){return""},
$ibT:1}
A.b0.prototype={
gj(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.c.prototype={}
A.bn.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.bo.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.a5.prototype={$ia5:1}
A.aj.prototype={$iaj:1}
A.I.prototype={
gj(a){return a.length}}
A.aG.prototype={
gj(a){var s=a.length
s.toString
return s}}
A.ch.prototype={}
A.a6.prototype={$ia6:1}
A.ci.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.u.prototype={
h(a){var s=a.localName
s.toString
return s},
ga_(a){return new A.ad(a,"click",!1,t.C)},
$iu:1}
A.a.prototype={$ia:1}
A.r.prototype={
a9(a,b,c,d){return a.addEventListener(b,A.cc(t.B.a(c),1),!1)},
$ir:1}
A.bx.prototype={
gj(a){return a.length}}
A.a8.prototype={
gj(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.e(A.dS(b,s,a,null))
s=a[b]
s.toString
return s},
C(a,b){if(!(b<a.length))return A.F(a,b)
return a[b]},
$iw:1,
$if:1,
$ik:1}
A.aK.prototype={$iaK:1}
A.aL.prototype={
sa2(a,b){a.src=b}}
A.am.prototype={$iam:1}
A.z.prototype={$iz:1}
A.h.prototype={
ac(a){var s
for(;s=a.firstChild,s!=null;)a.removeChild(s).toString},
h(a){var s=a.nodeValue
return s==null?this.a3(a):s},
$ih:1}
A.bS.prototype={
gj(a){return a.length}}
A.H.prototype={}
A.ac.prototype={$iac:1}
A.J.prototype={$iJ:1}
A.dj.prototype={}
A.b3.prototype={}
A.ad.prototype={}
A.c3.prototype={}
A.cA.prototype={
$1(a){return this.a.$1(t.A.a(a))},
$S:5}
A.al.prototype={
gB(a){return new A.bw(a,a.length,A.ag(a).i("bw<al.E>"))}}
A.bw.prototype={
p(){var s=this,r=s.c+1,q=s.b
if(r<q){q=s.a
if(!(r>=0&&r<q.length))return A.F(q,r)
s.sU(q[r])
s.c=r
return!0}s.sU(null)
s.c=q
return!1},
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
sU(a){this.d=this.$ti.i("1?").a(a)}}
A.c0.prototype={}
A.c5.prototype={}
A.c6.prototype={}
A.aR.prototype={$iaR:1}
A.cS.prototype={
$1(a){var s
t.Z.a(a)
s=function(b,c,d){return function(){return b(c,d,this,Array.prototype.slice.apply(arguments))}}(A.h5,a,!1)
A.dt(s,$.df(),a)
return s},
$S:2}
A.cT.prototype={
$1(a){return new this.a(a)},
$S:2}
A.cX.prototype={
$1(a){return new A.aP(a==null?t.K.a(a):a)},
$S:14}
A.cY.prototype={
$1(a){var s=a==null?t.K.a(a):a
return new A.a9(s,t.W)},
$S:15}
A.cZ.prototype={
$1(a){return new A.N(a==null?t.K.a(a):a)},
$S:16}
A.N.prototype={
l(a,b){return A.ds(this.a[b])},
v(a,b){if(b==null)return!1
return b instanceof A.N&&this.a===b.a},
h(a){var s,r
try{s=String(this.a)
return s}catch(r){s=this.a6(0)
return s}},
aj(a,b){var s,r=this.a
if(b==null)s=null
else{s=A.av(b)
s=A.dV(new A.Q(b,s.i("@(1)").a(A.hO()),s.i("Q<1,@>")),t.z)}return A.ds(r[a].apply(r,s))},
M(a){return this.aj(a,null)},
gk(a){return 0}}
A.aP.prototype={}
A.a9.prototype={
ab(a){var s=a<0||a>=this.gj(0)
if(s)throw A.e(A.dZ(a,0,this.gj(0),null,null))},
l(a,b){this.ab(b)
return this.$ti.c.a(this.a4(0,b))},
gj(a){var s=this.a.length
if(typeof s==="number"&&s>>>0===s)return s
throw A.e(A.fx("Bad JsArray length"))},
$if:1,
$ik:1}
A.b6.prototype={}
A.b.prototype={
ga_(a){return new A.ad(a,"click",!1,t.C)}}
A.d8.prototype={
$1(a){var s,r,q,p
t.V.a(a)
s=this.a.value
r=s!=null
if(r&&s.length!==0){q=this.b
q.children.toString
B.u.ac(q)
p=document.createElement("img")
p.toString
if(r)B.v.sa2(p,s)
r=p.style
r.maxWidth="100%"
r=p.style
r.height="auto"
q.appendChild(p).toString
r=q.style
r.display="block"
r=t.E
A.at(p,"dblclick",r.i("~(1)?").a(new A.d7()),!1,r.c)}},
$S:1}
A.d7.prototype={
$1(a){$.dg().M("toggleFullscreen")},
$S:5}
A.d9.prototype={
$1(a){var s,r,q
t.V.a(a).stopPropagation()
s=this.a
r=s.style
q=r.display
q.toString
q=q==="block"?"none":"block"
r.display=q
r=document.body.style
r.toString
s=s.style.display
s.toString
s=s==="block"?"rgba(0, 0, 0, 0.5)":"#f0f0f0"
r.backgroundColor=s},
$S:1}
A.da.prototype={
$1(a){var s,r
t.V.a(a)
s=this.a.style
r=s.display
r.toString
if(r==="block"){s.display="none"
s=document.body.style
s.backgroundColor="#f0f0f0"}},
$S:1}
A.db.prototype={
$1(a){var s
t.V.a(a)
$.dg().M("toggleFullscreen")
s=this.a.style
s.display="none"
s=document.body.style
s.backgroundColor="#f0f0f0"},
$S:1}
A.dc.prototype={
$1(a){var s
t.V.a(a)
$.dg().M("toggleFullscreen")
s=this.a.style
s.display="none"
s=document.body.style
s.backgroundColor="#f0f0f0"},
$S:1};(function aliases(){var s=J.aM.prototype
s.a3=s.h
s=J.aa.prototype
s.a5=s.h
s=A.j.prototype
s.a6=s.h
s=A.N.prototype
s.a4=s.l})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0
s(A,"hA","fE",3)
s(A,"hB","fF",3)
s(A,"hC","fG",3)
r(A,"ex","ht",0)
s(A,"hO","ei",17)
s(A,"hN","ds",18)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.j,null)
q(A.j,[A.dk,J.aM,J.bp,A.m,A.cr,A.f,A.a_,A.v,A.a1,A.aq,A.aD,A.bA,A.Z,A.cu,A.co,A.bb,A.cK,A.aS,A.ck,A.E,A.c4,A.cP,A.cN,A.aC,A.b4,A.B,A.c_,A.b_,A.bh,A.i,A.bg,A.aH,A.aZ,A.cB,A.G,A.c8,A.b0,A.ch,A.dj,A.c3,A.al,A.bw,A.N])
q(J.aM,[J.bz,J.aO,J.D,J.ao,J.ap,J.bC,J.an])
q(J.D,[J.aa,J.y,A.aV,A.r,A.a5,A.c0,A.ci,A.a,A.c5,A.aK,A.aR])
q(J.aa,[J.bP,J.b1,J.M])
r(J.cj,J.y)
q(J.bC,[J.aN,J.bB])
q(A.m,[A.bE,A.S,A.bD,A.bY,A.c1,A.bR,A.c2,A.bq,A.L,A.bO,A.bZ,A.bX,A.bU,A.bu])
r(A.aI,A.f)
r(A.O,A.aI)
r(A.Q,A.O)
r(A.au,A.aq)
r(A.b2,A.au)
r(A.aE,A.b2)
r(A.aF,A.aD)
q(A.Z,[A.bt,A.bs,A.bW,A.d3,A.d5,A.cx,A.cw,A.cI,A.cs,A.cM,A.cA,A.cS,A.cT,A.cX,A.cY,A.cZ,A.d8,A.d7,A.d9,A.da,A.db,A.dc])
q(A.bt,[A.cp,A.d4,A.cm,A.cn])
r(A.aX,A.S)
q(A.bW,[A.bV,A.ai])
r(A.aQ,A.aS)
q(A.aV,[A.bF,A.ar])
q(A.ar,[A.b7,A.b9])
r(A.b8,A.b7)
r(A.aT,A.b8)
r(A.ba,A.b9)
r(A.aU,A.ba)
q(A.aT,[A.bG,A.bH])
q(A.aU,[A.bI,A.bJ,A.bK,A.bL,A.bM,A.aW,A.bN])
r(A.bc,A.c2)
q(A.bs,[A.cy,A.cz,A.cO,A.cC,A.cE,A.cD,A.cH,A.cG,A.cF,A.ct,A.cW,A.cL])
r(A.c7,A.bh)
q(A.L,[A.aY,A.by])
q(A.r,[A.h,A.ac,A.J])
q(A.h,[A.u,A.I])
q(A.u,[A.c,A.b])
q(A.c,[A.bn,A.bo,A.aj,A.a6,A.bx,A.aL,A.am,A.bS])
r(A.aG,A.c0)
r(A.c6,A.c5)
r(A.a8,A.c6)
r(A.H,A.a)
r(A.z,A.H)
r(A.b3,A.b_)
r(A.ad,A.b3)
q(A.N,[A.aP,A.b6])
r(A.a9,A.b6)
s(A.b7,A.i)
s(A.b8,A.v)
s(A.b9,A.i)
s(A.ba,A.v)
s(A.au,A.bg)
s(A.c0,A.ch)
s(A.c5,A.i)
s(A.c6,A.al)
s(A.b6,A.i)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{d:"int",n:"double",aB:"num",R:"String",d_:"bool",G:"Null",k:"List",j:"Object",P:"Map"},mangledNames:{},types:["~()","~(z)","@(@)","~(~())","G()","~(a)","~(R,@)","@(@,R)","@(R)","G(@)","G(~())","B<@>(@)","~(j?,j?)","~(as,@)","aP(@)","a9<@>(@)","N(@)","j?(j?)","j?(@)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.fX(v.typeUniverse,JSON.parse('{"bP":"aa","b1":"aa","M":"aa","hX":"a","i3":"a","hW":"b","i5":"b","hY":"c","i9":"c","i6":"h","i2":"h","ia":"z","i_":"H","i1":"J","hZ":"I","ic":"I","i8":"u","i7":"a8","i4":"a5","bz":{"d_":[],"l":[]},"aO":{"l":[]},"y":{"k":["1"],"f":["1"]},"cj":{"y":["1"],"k":["1"],"f":["1"]},"bC":{"n":[],"aB":[]},"aN":{"n":[],"d":[],"aB":[],"l":[]},"bB":{"n":[],"aB":[],"l":[]},"an":{"R":[],"l":[]},"bE":{"m":[]},"aI":{"f":["1"]},"O":{"f":["1"]},"Q":{"O":["2"],"f":["2"],"O.E":"2"},"a1":{"as":[]},"aE":{"b2":["1","2"],"au":["1","2"],"aq":["1","2"],"bg":["1","2"],"P":["1","2"]},"aD":{"P":["1","2"]},"aF":{"aD":["1","2"],"P":["1","2"]},"bA":{"dT":[]},"aX":{"S":[],"m":[]},"bD":{"m":[]},"bY":{"m":[]},"bb":{"bT":[]},"Z":{"a7":[]},"bs":{"a7":[]},"bt":{"a7":[]},"bW":{"a7":[]},"bV":{"a7":[]},"ai":{"a7":[]},"c1":{"m":[]},"bR":{"m":[]},"aQ":{"aS":["1","2"],"P":["1","2"]},"aV":{"o":[]},"bF":{"o":[],"l":[]},"ar":{"w":["1"],"o":[]},"aT":{"i":["n"],"k":["n"],"w":["n"],"o":[],"f":["n"],"v":["n"]},"aU":{"i":["d"],"k":["d"],"w":["d"],"o":[],"f":["d"],"v":["d"]},"bG":{"i":["n"],"k":["n"],"w":["n"],"o":[],"f":["n"],"v":["n"],"l":[],"i.E":"n"},"bH":{"i":["n"],"k":["n"],"w":["n"],"o":[],"f":["n"],"v":["n"],"l":[],"i.E":"n"},"bI":{"i":["d"],"k":["d"],"w":["d"],"o":[],"f":["d"],"v":["d"],"l":[],"i.E":"d"},"bJ":{"i":["d"],"k":["d"],"w":["d"],"o":[],"f":["d"],"v":["d"],"l":[],"i.E":"d"},"bK":{"i":["d"],"k":["d"],"w":["d"],"o":[],"f":["d"],"v":["d"],"l":[],"i.E":"d"},"bL":{"i":["d"],"k":["d"],"w":["d"],"o":[],"f":["d"],"v":["d"],"l":[],"i.E":"d"},"bM":{"i":["d"],"k":["d"],"w":["d"],"o":[],"f":["d"],"v":["d"],"l":[],"i.E":"d"},"aW":{"i":["d"],"k":["d"],"w":["d"],"o":[],"f":["d"],"v":["d"],"l":[],"i.E":"d"},"bN":{"i":["d"],"k":["d"],"w":["d"],"o":[],"f":["d"],"v":["d"],"l":[],"i.E":"d"},"c2":{"m":[]},"bc":{"S":[],"m":[]},"B":{"aJ":["1"]},"aC":{"m":[]},"bh":{"e5":[]},"c7":{"bh":[],"e5":[]},"aS":{"P":["1","2"]},"aq":{"P":["1","2"]},"b2":{"au":["1","2"],"aq":["1","2"],"bg":["1","2"],"P":["1","2"]},"n":{"aB":[]},"d":{"aB":[]},"bq":{"m":[]},"S":{"m":[]},"L":{"m":[]},"aY":{"m":[]},"by":{"m":[]},"bO":{"m":[]},"bZ":{"m":[]},"bX":{"m":[]},"bU":{"m":[]},"bu":{"m":[]},"aZ":{"m":[]},"c8":{"bT":[]},"z":{"a":[]},"h":{"r":[]},"c":{"u":[],"h":[],"r":[]},"bn":{"u":[],"h":[],"r":[]},"bo":{"u":[],"h":[],"r":[]},"aj":{"u":[],"h":[],"r":[]},"I":{"h":[],"r":[]},"a6":{"u":[],"h":[],"r":[]},"u":{"h":[],"r":[]},"bx":{"u":[],"h":[],"r":[]},"a8":{"i":["h"],"al":["h"],"k":["h"],"w":["h"],"f":["h"],"al.E":"h","i.E":"h"},"aL":{"u":[],"h":[],"r":[]},"am":{"u":[],"h":[],"r":[]},"bS":{"u":[],"h":[],"r":[]},"H":{"a":[]},"ac":{"r":[]},"J":{"r":[]},"b3":{"b_":["1"]},"ad":{"b3":["1"],"b_":["1"]},"a9":{"i":["1"],"k":["1"],"f":["1"],"i.E":"1"},"b":{"u":[],"h":[],"r":[]},"f1":{"o":[]},"fe":{"k":["d"],"o":[],"f":["d"]},"fC":{"k":["d"],"o":[],"f":["d"]},"fB":{"k":["d"],"o":[],"f":["d"]},"fc":{"k":["d"],"o":[],"f":["d"]},"fz":{"k":["d"],"o":[],"f":["d"]},"fd":{"k":["d"],"o":[],"f":["d"]},"fA":{"k":["d"],"o":[],"f":["d"]},"fa":{"k":["n"],"o":[],"f":["n"]},"fb":{"k":["n"],"o":[],"f":["n"]}}'))
A.fW(v.typeUniverse,JSON.parse('{"aI":1,"ar":1,"b6":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.dA
return{n:s("aC"),d:s("a5"),D:s("aj"),Y:s("aE<as,@>"),x:s("a6"),R:s("m"),A:s("a"),Z:s("a7"),e:s("aJ<@>"),I:s("aK"),q:s("am"),o:s("dT"),U:s("f<@>"),s:s("y<R>"),b:s("y<@>"),T:s("aO"),g:s("M"),J:s("w<@>"),W:s("a9<@>"),h:s("aQ<as,@>"),w:s("aR"),j:s("k<@>"),V:s("z"),k:s("h"),P:s("G"),K:s("j"),L:s("ib"),l:s("bT"),N:s("R"),r:s("as"),t:s("l"),u:s("S"),f:s("o"),cr:s("b1"),cg:s("ac"),bj:s("J"),E:s("ad<a>"),C:s("ad<z>"),c:s("B<@>"),a:s("B<d>"),y:s("d_"),m:s("d_(j)"),i:s("n"),z:s("@"),O:s("@()"),v:s("@(j)"),Q:s("@(j,bT)"),S:s("d"),G:s("0&*"),_:s("j*"),bc:s("aJ<G>?"),X:s("j?"),F:s("b4<@,@>?"),B:s("@(a)?"),bp:s("~()?"),aC:s("~(z)?"),H:s("aB"),p:s("~"),M:s("~()")}})();(function constants(){var s=hunkHelpers.makeConstList
B.u=A.a6.prototype
B.v=A.aL.prototype
B.w=J.aM.prototype
B.a=J.y.prototype
B.c=J.aN.prototype
B.i=J.an.prototype
B.x=J.M.prototype
B.y=J.D.prototype
B.l=J.bP.prototype
B.d=J.b1.prototype
B.e=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.m=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.r=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.n=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.q=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.p=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.o=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.f=function(hooks) { return hooks; }

B.M=new A.cr()
B.h=new A.cK()
B.b=new A.c7()
B.t=new A.c8()
B.j=A.ax(s([]),t.b)
B.z={}
B.k=new A.aF(B.z,[],A.dA("aF<as,@>"))
B.A=new A.a1("call")
B.B=A.K("f1")
B.C=A.K("fa")
B.D=A.K("fb")
B.E=A.K("fc")
B.F=A.K("fd")
B.G=A.K("fe")
B.H=A.K("j")
B.I=A.K("fz")
B.J=A.K("fA")
B.K=A.K("fB")
B.L=A.K("fC")})();(function staticFields(){$.cJ=null
$.C=A.ax([],A.dA("y<j>"))
$.dY=null
$.dO=null
$.dN=null
$.eB=null
$.ew=null
$.eG=null
$.d1=null
$.d6=null
$.dC=null
$.aw=null
$.bi=null
$.bj=null
$.dw=!1
$.t=B.b})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"i0","df",()=>A.eA("_$dart_dartClosure"))
s($,"id","eI",()=>A.T(A.cv({
toString:function(){return"$receiver$"}})))
s($,"ie","eJ",()=>A.T(A.cv({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"ig","eK",()=>A.T(A.cv(null)))
s($,"ih","eL",()=>A.T(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"ik","eO",()=>A.T(A.cv(void 0)))
s($,"il","eP",()=>A.T(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"ij","eN",()=>A.T(A.e3(null)))
s($,"ii","eM",()=>A.T(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"io","eR",()=>A.T(A.e3(void 0)))
s($,"im","eQ",()=>A.T(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"ip","dG",()=>A.fD())
s($,"iD","eS",()=>A.eE(B.H))
s($,"iB","dg",()=>A.ev(self))
s($,"iq","dH",()=>A.eA("_$dart_dartObject"))
s($,"iC","dI",()=>function DartObject(a){this.o=a})})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.D,MediaError:J.D,Navigator:J.D,NavigatorConcurrentHardware:J.D,NavigatorUserMediaError:J.D,OverconstrainedError:J.D,PositionError:J.D,GeolocationPositionError:J.D,ArrayBufferView:A.aV,DataView:A.bF,Float32Array:A.bG,Float64Array:A.bH,Int16Array:A.bI,Int32Array:A.bJ,Int8Array:A.bK,Uint16Array:A.bL,Uint32Array:A.bM,Uint8ClampedArray:A.aW,CanvasPixelArray:A.aW,Uint8Array:A.bN,HTMLAudioElement:A.c,HTMLBRElement:A.c,HTMLBaseElement:A.c,HTMLBodyElement:A.c,HTMLCanvasElement:A.c,HTMLContentElement:A.c,HTMLDListElement:A.c,HTMLDataElement:A.c,HTMLDataListElement:A.c,HTMLDetailsElement:A.c,HTMLDialogElement:A.c,HTMLEmbedElement:A.c,HTMLFieldSetElement:A.c,HTMLHRElement:A.c,HTMLHeadElement:A.c,HTMLHeadingElement:A.c,HTMLHtmlElement:A.c,HTMLIFrameElement:A.c,HTMLLIElement:A.c,HTMLLabelElement:A.c,HTMLLegendElement:A.c,HTMLLinkElement:A.c,HTMLMapElement:A.c,HTMLMediaElement:A.c,HTMLMenuElement:A.c,HTMLMetaElement:A.c,HTMLMeterElement:A.c,HTMLModElement:A.c,HTMLOListElement:A.c,HTMLObjectElement:A.c,HTMLOptGroupElement:A.c,HTMLOptionElement:A.c,HTMLOutputElement:A.c,HTMLParagraphElement:A.c,HTMLParamElement:A.c,HTMLPictureElement:A.c,HTMLPreElement:A.c,HTMLProgressElement:A.c,HTMLQuoteElement:A.c,HTMLScriptElement:A.c,HTMLShadowElement:A.c,HTMLSlotElement:A.c,HTMLSourceElement:A.c,HTMLSpanElement:A.c,HTMLStyleElement:A.c,HTMLTableCaptionElement:A.c,HTMLTableCellElement:A.c,HTMLTableDataCellElement:A.c,HTMLTableHeaderCellElement:A.c,HTMLTableColElement:A.c,HTMLTableElement:A.c,HTMLTableRowElement:A.c,HTMLTableSectionElement:A.c,HTMLTemplateElement:A.c,HTMLTextAreaElement:A.c,HTMLTimeElement:A.c,HTMLTitleElement:A.c,HTMLTrackElement:A.c,HTMLUListElement:A.c,HTMLUnknownElement:A.c,HTMLVideoElement:A.c,HTMLDirectoryElement:A.c,HTMLFontElement:A.c,HTMLFrameElement:A.c,HTMLFrameSetElement:A.c,HTMLMarqueeElement:A.c,HTMLElement:A.c,HTMLAnchorElement:A.bn,HTMLAreaElement:A.bo,Blob:A.a5,File:A.a5,HTMLButtonElement:A.aj,CDATASection:A.I,CharacterData:A.I,Comment:A.I,ProcessingInstruction:A.I,Text:A.I,CSSStyleDeclaration:A.aG,MSStyleCSSProperties:A.aG,CSS2Properties:A.aG,HTMLDivElement:A.a6,DOMException:A.ci,MathMLElement:A.u,Element:A.u,AbortPaymentEvent:A.a,AnimationEvent:A.a,AnimationPlaybackEvent:A.a,ApplicationCacheErrorEvent:A.a,BackgroundFetchClickEvent:A.a,BackgroundFetchEvent:A.a,BackgroundFetchFailEvent:A.a,BackgroundFetchedEvent:A.a,BeforeInstallPromptEvent:A.a,BeforeUnloadEvent:A.a,BlobEvent:A.a,CanMakePaymentEvent:A.a,ClipboardEvent:A.a,CloseEvent:A.a,CustomEvent:A.a,DeviceMotionEvent:A.a,DeviceOrientationEvent:A.a,ErrorEvent:A.a,ExtendableEvent:A.a,ExtendableMessageEvent:A.a,FetchEvent:A.a,FontFaceSetLoadEvent:A.a,ForeignFetchEvent:A.a,GamepadEvent:A.a,HashChangeEvent:A.a,InstallEvent:A.a,MediaEncryptedEvent:A.a,MediaKeyMessageEvent:A.a,MediaQueryListEvent:A.a,MediaStreamEvent:A.a,MediaStreamTrackEvent:A.a,MessageEvent:A.a,MIDIConnectionEvent:A.a,MIDIMessageEvent:A.a,MutationEvent:A.a,NotificationEvent:A.a,PageTransitionEvent:A.a,PaymentRequestEvent:A.a,PaymentRequestUpdateEvent:A.a,PopStateEvent:A.a,PresentationConnectionAvailableEvent:A.a,PresentationConnectionCloseEvent:A.a,ProgressEvent:A.a,PromiseRejectionEvent:A.a,PushEvent:A.a,RTCDataChannelEvent:A.a,RTCDTMFToneChangeEvent:A.a,RTCPeerConnectionIceEvent:A.a,RTCTrackEvent:A.a,SecurityPolicyViolationEvent:A.a,SensorErrorEvent:A.a,SpeechRecognitionError:A.a,SpeechRecognitionEvent:A.a,SpeechSynthesisEvent:A.a,StorageEvent:A.a,SyncEvent:A.a,TrackEvent:A.a,TransitionEvent:A.a,WebKitTransitionEvent:A.a,VRDeviceEvent:A.a,VRDisplayEvent:A.a,VRSessionEvent:A.a,MojoInterfaceRequestEvent:A.a,ResourceProgressEvent:A.a,USBConnectionEvent:A.a,IDBVersionChangeEvent:A.a,AudioProcessingEvent:A.a,OfflineAudioCompletionEvent:A.a,WebGLContextEvent:A.a,Event:A.a,InputEvent:A.a,SubmitEvent:A.a,EventTarget:A.r,HTMLFormElement:A.bx,HTMLCollection:A.a8,HTMLFormControlsCollection:A.a8,HTMLOptionsCollection:A.a8,ImageData:A.aK,HTMLImageElement:A.aL,HTMLInputElement:A.am,MouseEvent:A.z,DragEvent:A.z,PointerEvent:A.z,WheelEvent:A.z,Document:A.h,DocumentFragment:A.h,HTMLDocument:A.h,ShadowRoot:A.h,XMLDocument:A.h,Attr:A.h,DocumentType:A.h,Node:A.h,HTMLSelectElement:A.bS,CompositionEvent:A.H,FocusEvent:A.H,KeyboardEvent:A.H,TextEvent:A.H,TouchEvent:A.H,UIEvent:A.H,Window:A.ac,DOMWindow:A.ac,DedicatedWorkerGlobalScope:A.J,ServiceWorkerGlobalScope:A.J,SharedWorkerGlobalScope:A.J,WorkerGlobalScope:A.J,IDBKeyRange:A.aR,SVGAElement:A.b,SVGAnimateElement:A.b,SVGAnimateMotionElement:A.b,SVGAnimateTransformElement:A.b,SVGAnimationElement:A.b,SVGCircleElement:A.b,SVGClipPathElement:A.b,SVGDefsElement:A.b,SVGDescElement:A.b,SVGDiscardElement:A.b,SVGEllipseElement:A.b,SVGFEBlendElement:A.b,SVGFEColorMatrixElement:A.b,SVGFEComponentTransferElement:A.b,SVGFECompositeElement:A.b,SVGFEConvolveMatrixElement:A.b,SVGFEDiffuseLightingElement:A.b,SVGFEDisplacementMapElement:A.b,SVGFEDistantLightElement:A.b,SVGFEFloodElement:A.b,SVGFEFuncAElement:A.b,SVGFEFuncBElement:A.b,SVGFEFuncGElement:A.b,SVGFEFuncRElement:A.b,SVGFEGaussianBlurElement:A.b,SVGFEImageElement:A.b,SVGFEMergeElement:A.b,SVGFEMergeNodeElement:A.b,SVGFEMorphologyElement:A.b,SVGFEOffsetElement:A.b,SVGFEPointLightElement:A.b,SVGFESpecularLightingElement:A.b,SVGFESpotLightElement:A.b,SVGFETileElement:A.b,SVGFETurbulenceElement:A.b,SVGFilterElement:A.b,SVGForeignObjectElement:A.b,SVGGElement:A.b,SVGGeometryElement:A.b,SVGGraphicsElement:A.b,SVGImageElement:A.b,SVGLineElement:A.b,SVGLinearGradientElement:A.b,SVGMarkerElement:A.b,SVGMaskElement:A.b,SVGMetadataElement:A.b,SVGPathElement:A.b,SVGPatternElement:A.b,SVGPolygonElement:A.b,SVGPolylineElement:A.b,SVGRadialGradientElement:A.b,SVGRectElement:A.b,SVGScriptElement:A.b,SVGSetElement:A.b,SVGStopElement:A.b,SVGStyleElement:A.b,SVGElement:A.b,SVGSVGElement:A.b,SVGSwitchElement:A.b,SVGSymbolElement:A.b,SVGTSpanElement:A.b,SVGTextContentElement:A.b,SVGTextElement:A.b,SVGTextPathElement:A.b,SVGTextPositioningElement:A.b,SVGTitleElement:A.b,SVGUseElement:A.b,SVGViewElement:A.b,SVGGradientElement:A.b,SVGComponentTransferFunctionElement:A.b,SVGFEDropShadowElement:A.b,SVGMPathElement:A.b})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:true,File:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,DOMException:true,MathMLElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Window:true,DOMWindow:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,IDBKeyRange:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true})
A.ar.$nativeSuperclassTag="ArrayBufferView"
A.b7.$nativeSuperclassTag="ArrayBufferView"
A.b8.$nativeSuperclassTag="ArrayBufferView"
A.aT.$nativeSuperclassTag="ArrayBufferView"
A.b9.$nativeSuperclassTag="ArrayBufferView"
A.ba.$nativeSuperclassTag="ArrayBufferView"
A.aU.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$1$1=function(a){return this(a)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.hQ
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.dart.js.map
