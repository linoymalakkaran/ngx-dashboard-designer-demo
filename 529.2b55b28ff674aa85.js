(self.webpackChunkdashboardApp=self.webpackChunkdashboardApp||[]).push([[529],{9646:(K,O,d)=>{d.d(O,{of:()=>M});var g=d(3269),i=d(2076);function M(...T){const b=(0,g.yG)(T);return(0,i.D)(T,b)}},4351:(K,O,d)=>{d.d(O,{b:()=>M});var g=d(5577),i=d(576);function M(T,b){return(0,i.m)(b)?(0,g.z)(T,b,1):(0,g.z)(T,1)}},9300:(K,O,d)=>{d.d(O,{h:()=>M});var g=d(4482),i=d(5403);function M(T,b){return(0,g.e)((B,x)=>{let N=0;B.subscribe((0,i.x)(x,w=>T.call(b,w,N++)&&x.next(w)))})}},5577:(K,O,d)=>{d.d(O,{z:()=>N});var g=d(4004),i=d(8421),M=d(4482),T=d(9672),b=d(5403),x=d(576);function N(w,c,k=1/0){return(0,x.m)(c)?N((P,H)=>(0,g.U)((j,S)=>c(P,j,H,S))((0,i.Xf)(w(P,H))),k):("number"==typeof c&&(k=c),(0,M.e)((P,H)=>function B(w,c,k,P,H,j,S,_){const R=[];let m=0,Q=0,J=!1;const W=()=>{J&&!R.length&&!m&&c.complete()},X=D=>m<P?A(D):R.push(D),A=D=>{j&&c.next(D),m++;let $=!1;(0,i.Xf)(k(D,Q++)).subscribe((0,b.x)(c,E=>{H?.(E),j?X(E):c.next(E)},()=>{$=!0},void 0,()=>{if($)try{for(m--;R.length&&m<P;){const E=R.shift();S?(0,T.f)(c,S,()=>A(E)):A(E)}W()}catch(E){c.error(E)}}))};return w.subscribe((0,b.x)(c,X,()=>{J=!0,W()})),()=>{_?.()}}(P,H,w,k)))}},529:(K,O,d)=>{d.r(O),d.d(O,{HTTP_INTERCEPTORS:()=>Y,HttpBackend:()=>w,HttpClient:()=>ae,HttpClientJsonpModule:()=>Pe,HttpClientModule:()=>Oe,HttpClientXsrfModule:()=>ue,HttpContext:()=>J,HttpContextToken:()=>Q,HttpErrorResponse:()=>z,HttpEventType:()=>h,HttpHandler:()=>N,HttpHeaderResponse:()=>G,HttpHeaders:()=>c,HttpParams:()=>m,HttpRequest:()=>E,HttpResponse:()=>L,HttpResponseBase:()=>V,HttpUrlEncodingCodec:()=>P,HttpXhrBackend:()=>te,HttpXsrfTokenExtractor:()=>re,JsonpClientBackend:()=>ee,JsonpInterceptor:()=>ce,XhrFactory:()=>He,\u0275HttpInterceptingHandler:()=>he});var g=d(1327),i=d(1423),M=d(9646),T=d(9751),b=d(4351),B=d(9300),x=d(4004);class N{}class w{}class c{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof t?()=>{this.headers=new Map,t.split("\n").forEach(e=>{const r=e.indexOf(":");if(r>0){const n=e.slice(0,r),o=n.toLowerCase(),l=e.slice(r+1).trim();this.maybeSetNormalizedName(n,o),this.headers.has(o)?this.headers.get(o).push(l):this.headers.set(o,[l])}})}:()=>{this.headers=new Map,Object.keys(t).forEach(e=>{let r=t[e];const n=e.toLowerCase();"string"==typeof r&&(r=[r]),r.length>0&&(this.headers.set(n,r),this.maybeSetNormalizedName(e,n))})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();const e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof c?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){const e=new c;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof c?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){const e=t.name.toLowerCase();switch(t.op){case"a":case"s":let r=t.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(t.name,e);const n=("a"===t.op?this.headers.get(e):void 0)||[];n.push(...r),this.headers.set(e,n);break;case"d":const o=t.value;if(o){let l=this.headers.get(e);if(!l)return;l=l.filter(p=>-1===o.indexOf(p)),0===l.length?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,l)}else this.headers.delete(e),this.normalizedNames.delete(e)}}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}}class P{encodeKey(t){return _(t)}encodeValue(t){return _(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}}const j=/%(\d[a-f0-9])/gi,S={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function _(s){return encodeURIComponent(s).replace(j,(t,e)=>S[e]??t)}function R(s){return`${s}`}class m{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new P,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function H(s,t){const e=new Map;return s.length>0&&s.replace(/^\?/,"").split("&").forEach(n=>{const o=n.indexOf("="),[l,p]=-1==o?[t.decodeKey(n),""]:[t.decodeKey(n.slice(0,o)),t.decodeValue(n.slice(o+1))],a=e.get(l)||[];a.push(p),e.set(l,a)}),e}(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{const r=t.fromObject[e],n=Array.isArray(r)?r.map(R):[R(r)];this.map.set(e,n)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();const e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){const e=[];return Object.keys(t).forEach(r=>{const n=t[r];Array.isArray(n)?n.forEach(o=>{e.push({param:r,value:o,op:"a"})}):e.push({param:r,value:n,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{const e=this.encoder.encodeKey(t);return this.map.get(t).map(r=>e+"="+this.encoder.encodeValue(r)).join("&")}).filter(t=>""!==t).join("&")}clone(t){const e=new m({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":const e=("a"===t.op?this.map.get(t.param):void 0)||[];e.push(R(t.value)),this.map.set(t.param,e);break;case"d":if(void 0===t.value){this.map.delete(t.param);break}{let r=this.map.get(t.param)||[];const n=r.indexOf(R(t.value));-1!==n&&r.splice(n,1),r.length>0?this.map.set(t.param,r):this.map.delete(t.param)}}}),this.cloneFrom=this.updates=null)}}class Q{constructor(t){this.defaultValue=t}}class J{constructor(){this.map=new Map}set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}}function X(s){return typeof ArrayBuffer<"u"&&s instanceof ArrayBuffer}function A(s){return typeof Blob<"u"&&s instanceof Blob}function D(s){return typeof FormData<"u"&&s instanceof FormData}class E{constructor(t,e,r,n){let o;if(this.url=e,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function W(s){switch(s){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||n?(this.body=void 0!==r?r:null,o=n):o=r,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params)),this.headers||(this.headers=new c),this.context||(this.context=new J),this.params){const l=this.params.toString();if(0===l.length)this.urlWithParams=e;else{const p=e.indexOf("?");this.urlWithParams=e+(-1===p?"?":p<e.length-1?"&":"")+l}}else this.params=new m,this.urlWithParams=e}serializeBody(){return null===this.body?null:X(this.body)||A(this.body)||D(this.body)||function $(s){return typeof URLSearchParams<"u"&&s instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof m?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||D(this.body)?null:A(this.body)?this.body.type||null:X(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof m?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(t={}){const e=t.method||this.method,r=t.url||this.url,n=t.responseType||this.responseType,o=void 0!==t.body?t.body:this.body,l=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,p=void 0!==t.reportProgress?t.reportProgress:this.reportProgress;let a=t.headers||this.headers,y=t.params||this.params;const U=t.context??this.context;return void 0!==t.setHeaders&&(a=Object.keys(t.setHeaders).reduce((I,C)=>I.set(C,t.setHeaders[C]),a)),t.setParams&&(y=Object.keys(t.setParams).reduce((I,C)=>I.set(C,t.setParams[C]),y)),new E(e,r,o,{params:y,headers:a,context:U,reportProgress:p,responseType:n,withCredentials:l})}}var h=(()=>((h=h||{})[h.Sent=0]="Sent",h[h.UploadProgress=1]="UploadProgress",h[h.ResponseHeader=2]="ResponseHeader",h[h.DownloadProgress=3]="DownloadProgress",h[h.Response=4]="Response",h[h.User=5]="User",h))();class V{constructor(t,e=200,r="OK"){this.headers=t.headers||new c,this.status=void 0!==t.status?t.status:e,this.statusText=t.statusText||r,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}}class G extends V{constructor(t={}){super(t),this.type=h.ResponseHeader}clone(t={}){return new G({headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class L extends V{constructor(t={}){super(t),this.type=h.Response,this.body=void 0!==t.body?t.body:null}clone(t={}){return new L({body:void 0!==t.body?t.body:this.body,headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class z extends V{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${t.url||"(unknown url)"}`:`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}}function Z(s,t){return{body:t,headers:s.headers,context:s.context,observe:s.observe,params:s.params,reportProgress:s.reportProgress,responseType:s.responseType,withCredentials:s.withCredentials}}let ae=(()=>{class s{constructor(e){this.handler=e}request(e,r,n={}){let o;if(e instanceof E)o=e;else{let a,y;a=n.headers instanceof c?n.headers:new c(n.headers),n.params&&(y=n.params instanceof m?n.params:new m({fromObject:n.params})),o=new E(e,r,void 0!==n.body?n.body:null,{headers:a,context:n.context,params:y,reportProgress:n.reportProgress,responseType:n.responseType||"json",withCredentials:n.withCredentials})}const l=(0,M.of)(o).pipe((0,b.b)(a=>this.handler.handle(a)));if(e instanceof E||"events"===n.observe)return l;const p=l.pipe((0,B.h)(a=>a instanceof L));switch(n.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return p.pipe((0,x.U)(a=>{if(null!==a.body&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return p.pipe((0,x.U)(a=>{if(null!==a.body&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return p.pipe((0,x.U)(a=>{if(null!==a.body&&"string"!=typeof a.body)throw new Error("Response is not a string.");return a.body}));default:return p.pipe((0,x.U)(a=>a.body))}case"response":return p;default:throw new Error(`Unreachable: unhandled observe type ${n.observe}}`)}}delete(e,r={}){return this.request("DELETE",e,r)}get(e,r={}){return this.request("GET",e,r)}head(e,r={}){return this.request("HEAD",e,r)}jsonp(e,r){return this.request("JSONP",e,{params:(new m).append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,r={}){return this.request("OPTIONS",e,r)}patch(e,r,n={}){return this.request("PATCH",e,Z(n,r))}post(e,r,n={}){return this.request("POST",e,Z(n,r))}put(e,r,n={}){return this.request("PUT",e,Z(n,r))}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(N))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})();class le{constructor(t,e){this.next=t,this.interceptor=e}handle(t){return this.interceptor.intercept(t,this.next)}}const Y=new i.InjectionToken("HTTP_INTERCEPTORS");let q,fe=(()=>{class s{intercept(e,r){return r.handle(e)}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})(),ye=0;class de{}let ee=(()=>{class s{constructor(e,r){this.callbackMap=e,this.document=r,this.resolvedPromise=Promise.resolve()}nextCallback(){return"ng_jsonp_callback_"+ye++}handle(e){if("JSONP"!==e.method)throw new Error("JSONP requests must use JSONP request method.");if("json"!==e.responseType)throw new Error("JSONP requests must use Json response type.");if(e.headers.keys().length>0)throw new Error("JSONP requests do not support headers.");return new T.y(r=>{const n=this.nextCallback(),o=e.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/,`=${n}$1`),l=this.document.createElement("script");l.src=o;let p=null,a=!1;this.callbackMap[n]=C=>{delete this.callbackMap[n],p=C,a=!0};const y=()=>{l.parentNode&&l.parentNode.removeChild(l),delete this.callbackMap[n]};return l.addEventListener("load",C=>{this.resolvedPromise.then(()=>{y(),a?(r.next(new L({body:p,status:200,statusText:"OK",url:o})),r.complete()):r.error(new z({url:o,status:0,statusText:"JSONP Error",error:new Error("JSONP injected script did not invoke callback.")}))})}),l.addEventListener("error",C=>{y(),r.error(new z({error:C,status:0,statusText:"JSONP Error",url:o}))}),this.document.body.appendChild(l),r.next({type:h.Sent}),()=>{a||this.removeListeners(l),y()}})}removeListeners(e){q||(q=this.document.implementation.createHTMLDocument()),q.adoptNode(e)}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(de),i.\u0275\u0275inject(g.DOCUMENT))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})(),ce=(()=>{class s{constructor(e){this.jsonp=e}intercept(e,r){return"JSONP"===e.method?this.jsonp.handle(e):r.handle(e)}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(ee))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})();const Ce=/^\)\]\}',?\n/;let te=(()=>{class s{constructor(e){this.xhrFactory=e}handle(e){if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new T.y(r=>{const n=this.xhrFactory.build();if(n.open(e.method,e.urlWithParams),e.withCredentials&&(n.withCredentials=!0),e.headers.forEach((u,f)=>n.setRequestHeader(u,f.join(","))),e.headers.has("Accept")||n.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){const u=e.detectContentTypeHeader();null!==u&&n.setRequestHeader("Content-Type",u)}if(e.responseType){const u=e.responseType.toLowerCase();n.responseType="json"!==u?u:"text"}const o=e.serializeBody();let l=null;const p=()=>{if(null!==l)return l;const u=n.statusText||"OK",f=new c(n.getAllResponseHeaders()),F=function Te(s){return"responseURL"in s&&s.responseURL?s.responseURL:/^X-Request-URL:/m.test(s.getAllResponseHeaders())?s.getResponseHeader("X-Request-URL"):null}(n)||e.url;return l=new G({headers:f,status:n.status,statusText:u,url:F}),l},a=()=>{let{headers:u,status:f,statusText:F,url:pe}=p(),v=null;204!==f&&(v=typeof n.response>"u"?n.responseText:n.response),0===f&&(f=v?200:0);let ie=f>=200&&f<300;if("json"===e.responseType&&"string"==typeof v){const Me=v;v=v.replace(Ce,"");try{v=""!==v?JSON.parse(v):null}catch(xe){v=Me,ie&&(ie=!1,v={error:xe,text:v})}}ie?(r.next(new L({body:v,headers:u,status:f,statusText:F,url:pe||void 0})),r.complete()):r.error(new z({error:v,headers:u,status:f,statusText:F,url:pe||void 0}))},y=u=>{const{url:f}=p(),F=new z({error:u,status:n.status||0,statusText:n.statusText||"Unknown Error",url:f||void 0});r.error(F)};let U=!1;const I=u=>{U||(r.next(p()),U=!0);let f={type:h.DownloadProgress,loaded:u.loaded};u.lengthComputable&&(f.total=u.total),"text"===e.responseType&&!!n.responseText&&(f.partialText=n.responseText),r.next(f)},C=u=>{let f={type:h.UploadProgress,loaded:u.loaded};u.lengthComputable&&(f.total=u.total),r.next(f)};return n.addEventListener("load",a),n.addEventListener("error",y),n.addEventListener("timeout",y),n.addEventListener("abort",y),e.reportProgress&&(n.addEventListener("progress",I),null!==o&&n.upload&&n.upload.addEventListener("progress",C)),n.send(o),r.next({type:h.Sent}),()=>{n.removeEventListener("error",y),n.removeEventListener("abort",y),n.removeEventListener("load",a),n.removeEventListener("timeout",y),e.reportProgress&&(n.removeEventListener("progress",I),null!==o&&n.upload&&n.upload.removeEventListener("progress",C)),n.readyState!==n.DONE&&n.abort()}})}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(g.XhrFactory))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})();const se=new i.InjectionToken("XSRF_COOKIE_NAME"),ne=new i.InjectionToken("XSRF_HEADER_NAME");class re{}let be=(()=>{class s{constructor(e,r,n){this.doc=e,this.platform=r,this.cookieName=n,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,g.\u0275parseCookieValue)(e,this.cookieName),this.lastCookieString=e),this.lastToken}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(g.DOCUMENT),i.\u0275\u0275inject(i.PLATFORM_ID),i.\u0275\u0275inject(se))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})(),oe=(()=>{class s{constructor(e,r){this.tokenService=e,this.headerName=r}intercept(e,r){const n=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||n.startsWith("http://")||n.startsWith("https://"))return r.handle(e);const o=this.tokenService.getToken();return null!==o&&!e.headers.has(this.headerName)&&(e=e.clone({headers:e.headers.set(this.headerName,o)})),r.handle(e)}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(re),i.\u0275\u0275inject(ne))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})(),he=(()=>{class s{constructor(e,r){this.backend=e,this.injector=r,this.chain=null}handle(e){if(null===this.chain){const r=this.injector.get(Y,[]);this.chain=r.reduceRight((n,o)=>new le(n,o),this.backend)}return this.chain.handle(e)}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(w),i.\u0275\u0275inject(i.Injector))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})();function we(){return"object"==typeof window?window:{}}let ue=(()=>{class s{static disable(){return{ngModule:s,providers:[{provide:oe,useClass:fe}]}}static withOptions(e={}){return{ngModule:s,providers:[e.cookieName?{provide:se,useValue:e.cookieName}:[],e.headerName?{provide:ne,useValue:e.headerName}:[]]}}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=i.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=i.\u0275\u0275defineInjector({providers:[oe,{provide:Y,useExisting:oe,multi:!0},{provide:re,useClass:be},{provide:se,useValue:"XSRF-TOKEN"},{provide:ne,useValue:"X-XSRF-TOKEN"}]}),s})(),Oe=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=i.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=i.\u0275\u0275defineInjector({providers:[ae,{provide:N,useClass:he},te,{provide:w,useExisting:te}],imports:[ue.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]}),s})(),Pe=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=i.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=i.\u0275\u0275defineInjector({providers:[ee,{provide:de,useFactory:we},{provide:Y,useClass:ce,multi:!0}]}),s})();const He=g.XhrFactory}}]);