var bn,I,V=9e15,H=1e9,an="0123456789abcdef",Y="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",nn="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",ln={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-V,maxE:V,crypto:!1},v=!0,rn="[DecimalError] ",B=rn+"Invalid argument: ",xn=rn+"Precision limit exceeded",En=rn+"crypto unavailable",yn="[object Decimal]",D=Math.floor,M=Math.pow,Tn=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,Fn=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,An=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,Mn=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,R=1e7,w=7,Zn=9007199254740991,Rn=Y.length-1,dn=nn.length-1,l={toStringTag:yn};function O(n){var t,i,e,s=n.length-1,r="",o=n[0];if(s>0){for(r+=o,t=1;t<s;t++)e=n[t]+"",(i=w-e.length)&&(r+=C(i)),r+=e;o=n[t],(i=w-(e=o+"").length)&&(r+=C(i))}else if(o===0)return"0";for(;o%10==0;)o/=10;return r+o}function A(n,t,i){if(n!==~~n||n<t||n>i)throw Error(B+n)}function W(n,t,i,e){var s,r,o,u;for(r=n[0];r>=10;r/=10)--t;return--t<0?(t+=w,s=0):(s=Math.ceil((t+1)/w),t%=w),r=M(10,w-t),u=n[s]%r|0,e==null?t<3?(t==0?u=u/100|0:t==1&&(u=u/10|0),o=i<4&&u==99999||i>3&&u==49999||u==5e4||u==0):o=(i<4&&u+1==r||i>3&&u+1==r/2)&&(n[s+1]/r/100|0)==M(10,t-2)-1||(u==r/2||u==0)&&(n[s+1]/r/100|0)==0:t<4?(t==0?u=u/1e3|0:t==1?u=u/100|0:t==2&&(u=u/10|0),o=(e||i<4)&&u==9999||!e&&i>3&&u==4999):o=((e||i<4)&&u+1==r||!e&&i>3&&u+1==r/2)&&(n[s+1]/r/1e3|0)==M(10,t-3)-1,o}function Q(n,t,i){for(var e,s,r=[0],o=0,u=n.length;o<u;){for(s=r.length;s--;)r[s]*=t;for(r[0]+=an.indexOf(n.charAt(o++)),e=0;e<r.length;e++)r[e]>i-1&&(r[e+1]===void 0&&(r[e+1]=0),r[e+1]+=r[e]/i|0,r[e]%=i)}return r.reverse()}function Pn(n,t){var i,e,s;if(t.isZero())return t;(e=t.d.length)<32?s=(1/en(4,i=Math.ceil(e/3))).toString():(i=16,s="2.3283064365386962890625e-10"),n.precision+=i,t=$(n,1,t.times(s),new n(1));for(var r=i;r--;){var o=t.times(t);t=o.times(o).minus(o).times(8).plus(1)}return n.precision-=i,t}l.absoluteValue=l.abs=function(){var n=new this.constructor(this);return n.s<0&&(n.s=1),g(n)},l.ceil=function(){return g(new this.constructor(this),this.e+1,2)},l.clampedTo=l.clamp=function(n,t){var i=this,e=i.constructor;if(n=new e(n),t=new e(t),!n.s||!t.s)return new e(NaN);if(n.gt(t))throw Error(B+t);return i.cmp(n)<0?n:i.cmp(t)>0?t:new e(i)},l.comparedTo=l.cmp=function(n){var t,i,e,s,r=this,o=r.d,u=(n=new r.constructor(n)).d,f=r.s,c=n.s;if(!o||!u)return f&&c?f!==c?f:o===u?0:!o^f<0?1:-1:NaN;if(!o[0]||!u[0])return o[0]?f:u[0]?-c:0;if(f!==c)return f;if(r.e!==n.e)return r.e>n.e^f<0?1:-1;for(t=0,i=(e=o.length)<(s=u.length)?e:s;t<i;++t)if(o[t]!==u[t])return o[t]>u[t]^f<0?1:-1;return e===s?0:e>s^f<0?1:-1},l.cosine=l.cos=function(){var n,t,i=this,e=i.constructor;return i.d?i.d[0]?(n=e.precision,t=e.rounding,e.precision=n+Math.max(i.e,i.sd())+w,e.rounding=1,i=Pn(e,wn(e,i)),e.precision=n,e.rounding=t,g(I==2||I==3?i.neg():i,n,t,!0)):new e(1):new e(NaN)},l.cubeRoot=l.cbrt=function(){var n,t,i,e,s,r,o,u,f,c,h=this,a=h.constructor;if(!h.isFinite()||h.isZero())return new a(h);for(v=!1,(r=h.s*M(h.s*h,1/3))&&Math.abs(r)!=1/0?e=new a(r.toString()):(i=O(h.d),(r=((n=h.e)-i.length+1)%3)&&(i+=r==1||r==-2?"0":"00"),r=M(i,1/3),n=D((n+1)/3)-(n%3==(n<0?-1:2)),(e=new a(i=r==1/0?"5e"+n:(i=r.toExponential()).slice(0,i.indexOf("e")+1)+n)).s=h.s),o=(n=a.precision)+3;;)if(c=(f=(u=e).times(u).times(u)).plus(h),e=b(c.plus(h).times(u),c.plus(f),o+2,1),O(u.d).slice(0,o)===(i=O(e.d)).slice(0,o)){if((i=i.slice(o-3,o+1))!="9999"&&(s||i!="4999")){+i&&(+i.slice(1)||i.charAt(0)!="5")||(g(e,n+1,1),t=!e.times(e).times(e).eq(h));break}if(!s&&(g(u,n+1,0),u.times(u).times(u).eq(h))){e=u;break}o+=4,s=1}return v=!0,g(e,n,a.rounding,t)},l.decimalPlaces=l.dp=function(){var n,t=this.d,i=NaN;if(t){if(i=((n=t.length-1)-D(this.e/w))*w,n=t[n])for(;n%10==0;n/=10)i--;i<0&&(i=0)}return i},l.dividedBy=l.div=function(n){return b(this,new this.constructor(n))},l.dividedToIntegerBy=l.divToInt=function(n){var t=this.constructor;return g(b(this,new t(n),0,1,1),t.precision,t.rounding)},l.equals=l.eq=function(n){return this.cmp(n)===0},l.floor=function(){return g(new this.constructor(this),this.e+1,3)},l.greaterThan=l.gt=function(n){return this.cmp(n)>0},l.greaterThanOrEqualTo=l.gte=function(n){var t=this.cmp(n);return t==1||t===0},l.hyperbolicCosine=l.cosh=function(){var n,t,i,e,s,r=this,o=r.constructor,u=new o(1);if(!r.isFinite())return new o(r.s?1/0:NaN);if(r.isZero())return u;i=o.precision,e=o.rounding,o.precision=i+Math.max(r.e,r.sd())+4,o.rounding=1,(s=r.d.length)<32?t=(1/en(4,n=Math.ceil(s/3))).toString():(n=16,t="2.3283064365386962890625e-10"),r=$(o,1,r.times(t),new o(1),!0);for(var f,c=n,h=new o(8);c--;)f=r.times(r),r=u.minus(f.times(h.minus(f.times(h))));return g(r,o.precision=i,o.rounding=e,!0)},l.hyperbolicSine=l.sinh=function(){var n,t,i,e,s=this,r=s.constructor;if(!s.isFinite()||s.isZero())return new r(s);if(t=r.precision,i=r.rounding,r.precision=t+Math.max(s.e,s.sd())+4,r.rounding=1,(e=s.d.length)<3)s=$(r,2,s,s,!0);else{n=(n=1.4*Math.sqrt(e))>16?16:0|n,s=$(r,2,s=s.times(1/en(5,n)),s,!0);for(var o,u=new r(5),f=new r(16),c=new r(20);n--;)o=s.times(s),s=s.times(u.plus(o.times(f.times(o).plus(c))))}return r.precision=t,r.rounding=i,g(s,t,i,!0)},l.hyperbolicTangent=l.tanh=function(){var n,t,i=this,e=i.constructor;return i.isFinite()?i.isZero()?new e(i):(n=e.precision,t=e.rounding,e.precision=n+7,e.rounding=1,b(i.sinh(),i.cosh(),e.precision=n,e.rounding=t)):new e(i.s)},l.inverseCosine=l.acos=function(){var n,t=this,i=t.constructor,e=t.abs().cmp(1),s=i.precision,r=i.rounding;return e!==-1?e===0?t.isNeg()?P(i,s,r):new i(0):new i(NaN):t.isZero()?P(i,s+4,r).times(.5):(i.precision=s+6,i.rounding=1,t=t.asin(),n=P(i,s+4,r).times(.5),i.precision=s,i.rounding=r,n.minus(t))},l.inverseHyperbolicCosine=l.acosh=function(){var n,t,i=this,e=i.constructor;return i.lte(1)?new e(i.eq(1)?0:NaN):i.isFinite()?(n=e.precision,t=e.rounding,e.precision=n+Math.max(Math.abs(i.e),i.sd())+4,e.rounding=1,v=!1,i=i.times(i).minus(1).sqrt().plus(i),v=!0,e.precision=n,e.rounding=t,i.ln()):new e(i)},l.inverseHyperbolicSine=l.asinh=function(){var n,t,i=this,e=i.constructor;return!i.isFinite()||i.isZero()?new e(i):(n=e.precision,t=e.rounding,e.precision=n+2*Math.max(Math.abs(i.e),i.sd())+6,e.rounding=1,v=!1,i=i.times(i).plus(1).sqrt().plus(i),v=!0,e.precision=n,e.rounding=t,i.ln())},l.inverseHyperbolicTangent=l.atanh=function(){var n,t,i,e,s=this,r=s.constructor;return s.isFinite()?s.e>=0?new r(s.abs().eq(1)?s.s/0:s.isZero()?s:NaN):(n=r.precision,t=r.rounding,e=s.sd(),Math.max(e,n)<2*-s.e-1?g(new r(s),n,t,!0):(r.precision=i=e-s.e,s=b(s.plus(1),new r(1).minus(s),i+n,1),r.precision=n+4,r.rounding=1,s=s.ln(),r.precision=n,r.rounding=t,s.times(.5))):new r(NaN)},l.inverseSine=l.asin=function(){var n,t,i,e,s=this,r=s.constructor;return s.isZero()?new r(s):(t=s.abs().cmp(1),i=r.precision,e=r.rounding,t!==-1?t===0?((n=P(r,i+4,e).times(.5)).s=s.s,n):new r(NaN):(r.precision=i+6,r.rounding=1,s=s.div(new r(1).minus(s.times(s)).sqrt().plus(1)).atan(),r.precision=i,r.rounding=e,s.times(2)))},l.inverseTangent=l.atan=function(){var n,t,i,e,s,r,o,u,f,c=this,h=c.constructor,a=h.precision,d=h.rounding;if(c.isFinite()){if(c.isZero())return new h(c);if(c.abs().eq(1)&&a+4<=dn)return(o=P(h,a+4,d).times(.25)).s=c.s,o}else{if(!c.s)return new h(NaN);if(a+4<=dn)return(o=P(h,a+4,d).times(.5)).s=c.s,o}for(h.precision=u=a+10,h.rounding=1,n=i=Math.min(28,u/w+2|0);n;--n)c=c.div(c.times(c).plus(1).sqrt().plus(1));for(v=!1,t=Math.ceil(u/w),e=1,f=c.times(c),o=new h(c),s=c;n!==-1;)if(s=s.times(f),r=o.minus(s.div(e+=2)),s=s.times(f),(o=r.plus(s.div(e+=2))).d[t]!==void 0)for(n=t;o.d[n]===r.d[n]&&n--;);return i&&(o=o.times(2<<i-1)),v=!0,g(o,h.precision=a,h.rounding=d,!0)},l.isFinite=function(){return!!this.d},l.isInteger=l.isInt=function(){return!!this.d&&D(this.e/w)>this.d.length-2},l.isNaN=function(){return!this.s},l.isNegative=l.isNeg=function(){return this.s<0},l.isPositive=l.isPos=function(){return this.s>0},l.isZero=function(){return!!this.d&&this.d[0]===0},l.lessThan=l.lt=function(n){return this.cmp(n)<0},l.lessThanOrEqualTo=l.lte=function(n){return this.cmp(n)<1},l.logarithm=l.log=function(n){var t,i,e,s,r,o,u,f,c=this.constructor,h=c.precision,a=c.rounding;if(n==null)n=new c(10),t=!0;else{if(i=(n=new c(n)).d,n.s<0||!i||!i[0]||n.eq(1))return new c(NaN);t=n.eq(10)}if(i=this.d,this.s<0||!i||!i[0]||this.eq(1))return new c(i&&!i[0]?-1/0:this.s!=1?NaN:i?0:1/0);if(t)if(i.length>1)r=!0;else{for(s=i[0];s%10==0;)s/=10;r=s!==1}if(v=!1,o=k(this,u=h+5),e=t?tn(c,u+10):k(n,u),W((f=b(o,e,u,1)).d,s=h,a))do if(o=k(this,u+=10),e=t?tn(c,u+10):k(n,u),f=b(o,e,u,1),!r){+O(f.d).slice(s+1,s+15)+1==1e14&&(f=g(f,h+1,0));break}while(W(f.d,s+=10,a));return v=!0,g(f,h,a)},l.minus=l.sub=function(n){var t,i,e,s,r,o,u,f,c,h,a,d,p=this,m=p.constructor;if(n=new m(n),!p.d||!n.d)return p.s&&n.s?p.d?n.s=-n.s:n=new m(n.d||p.s!==n.s?p:NaN):n=new m(NaN),n;if(p.s!=n.s)return n.s=-n.s,p.plus(n);if(c=p.d,d=n.d,u=m.precision,f=m.rounding,!c[0]||!d[0]){if(d[0])n.s=-n.s;else{if(!c[0])return new m(f===3?-0:0);n=new m(p)}return v?g(n,u,f):n}if(i=D(n.e/w),h=D(p.e/w),c=c.slice(),r=h-i){for((a=r<0)?(t=c,r=-r,o=d.length):(t=d,i=h,o=c.length),r>(e=Math.max(Math.ceil(u/w),o)+2)&&(r=e,t.length=1),t.reverse(),e=r;e--;)t.push(0);t.reverse()}else{for((a=(e=c.length)<(o=d.length))&&(o=e),e=0;e<o;e++)if(c[e]!=d[e]){a=c[e]<d[e];break}r=0}for(a&&(t=c,c=d,d=t,n.s=-n.s),o=c.length,e=d.length-o;e>0;--e)c[o++]=0;for(e=d.length;e>r;){if(c[--e]<d[e]){for(s=e;s&&c[--s]===0;)c[s]=R-1;--c[s],c[e]+=R}c[e]-=d[e]}for(;c[--o]===0;)c.pop();for(;c[0]===0;c.shift())--i;return c[0]?(n.d=c,n.e=X(c,i),v?g(n,u,f):n):new m(f===3?-0:0)},l.modulo=l.mod=function(n){var t,i=this,e=i.constructor;return n=new e(n),!i.d||!n.s||n.d&&!n.d[0]?new e(NaN):!n.d||i.d&&!i.d[0]?g(new e(i),e.precision,e.rounding):(v=!1,e.modulo==9?(t=b(i,n.abs(),0,3,1)).s*=n.s:t=b(i,n,0,e.modulo,1),t=t.times(n),v=!0,i.minus(t))},l.naturalExponential=l.exp=function(){return fn(this)},l.naturalLogarithm=l.ln=function(){return k(this)},l.negated=l.neg=function(){var n=new this.constructor(this);return n.s=-n.s,g(n)},l.plus=l.add=function(n){var t,i,e,s,r,o,u,f,c,h,a=this,d=a.constructor;if(n=new d(n),!a.d||!n.d)return a.s&&n.s?a.d||(n=new d(n.d||a.s===n.s?a:NaN)):n=new d(NaN),n;if(a.s!=n.s)return n.s=-n.s,a.minus(n);if(c=a.d,h=n.d,u=d.precision,f=d.rounding,!c[0]||!h[0])return h[0]||(n=new d(a)),v?g(n,u,f):n;if(r=D(a.e/w),e=D(n.e/w),c=c.slice(),s=r-e){for(s<0?(i=c,s=-s,o=h.length):(i=h,e=r,o=c.length),s>(o=(r=Math.ceil(u/w))>o?r+1:o+1)&&(s=o,i.length=1),i.reverse();s--;)i.push(0);i.reverse()}for((o=c.length)-(s=h.length)<0&&(s=o,i=h,h=c,c=i),t=0;s;)t=(c[--s]=c[s]+h[s]+t)/R|0,c[s]%=R;for(t&&(c.unshift(t),++e),o=c.length;c[--o]==0;)c.pop();return n.d=c,n.e=X(c,e),v?g(n,u,f):n},l.precision=l.sd=function(n){var t,i=this;if(n!==void 0&&n!==!!n&&n!==1&&n!==0)throw Error(B+n);return i.d?(t=pn(i.d),n&&i.e+1>t&&(t=i.e+1)):t=NaN,t},l.round=function(){var n=this,t=n.constructor;return g(new t(n),n.e+1,t.rounding)},l.sine=l.sin=function(){var n,t,i=this,e=i.constructor;return i.isFinite()?i.isZero()?new e(i):(n=e.precision,t=e.rounding,e.precision=n+Math.max(i.e,i.sd())+w,e.rounding=1,i=Ln(e,wn(e,i)),e.precision=n,e.rounding=t,g(I>2?i.neg():i,n,t,!0)):new e(NaN)},l.squareRoot=l.sqrt=function(){var n,t,i,e,s,r,o=this,u=o.d,f=o.e,c=o.s,h=o.constructor;if(c!==1||!u||!u[0])return new h(!c||c<0&&(!u||u[0])?NaN:u?o:1/0);for(v=!1,(c=Math.sqrt(+o))==0||c==1/0?(((t=O(u)).length+f)%2==0&&(t+="0"),c=Math.sqrt(t),f=D((f+1)/2)-(f<0||f%2),e=new h(t=c==1/0?"5e"+f:(t=c.toExponential()).slice(0,t.indexOf("e")+1)+f)):e=new h(c.toString()),i=(f=h.precision)+3;;)if(e=(r=e).plus(b(o,r,i+2,1)).times(.5),O(r.d).slice(0,i)===(t=O(e.d)).slice(0,i)){if((t=t.slice(i-3,i+1))!="9999"&&(s||t!="4999")){+t&&(+t.slice(1)||t.charAt(0)!="5")||(g(e,f+1,1),n=!e.times(e).eq(o));break}if(!s&&(g(r,f+1,0),r.times(r).eq(o))){e=r;break}i+=4,s=1}return v=!0,g(e,f,h.rounding,n)},l.tangent=l.tan=function(){var n,t,i=this,e=i.constructor;return i.isFinite()?i.isZero()?new e(i):(n=e.precision,t=e.rounding,e.precision=n+10,e.rounding=1,(i=i.sin()).s=1,i=b(i,new e(1).minus(i.times(i)).sqrt(),n+10,0),e.precision=n,e.rounding=t,g(I==2||I==4?i.neg():i,n,t,!0)):new e(NaN)},l.times=l.mul=function(n){var t,i,e,s,r,o,u,f,c,h=this,a=h.constructor,d=h.d,p=(n=new a(n)).d;if(n.s*=h.s,!(d&&d[0]&&p&&p[0]))return new a(!n.s||d&&!d[0]&&!p||p&&!p[0]&&!d?NaN:d&&p?0*n.s:n.s/0);for(i=D(h.e/w)+D(n.e/w),(f=d.length)<(c=p.length)&&(r=d,d=p,p=r,o=f,f=c,c=o),r=[],e=o=f+c;e--;)r.push(0);for(e=c;--e>=0;){for(t=0,s=f+e;s>e;)u=r[s]+p[e]*d[s-e-1]+t,r[s--]=u%R|0,t=u/R|0;r[s]=(r[s]+t)%R|0}for(;!r[--o];)r.pop();return t?++i:r.shift(),n.d=r,n.e=X(r,i),v?g(n,a.precision,a.rounding):n},l.toBinary=function(n,t){return hn(this,2,n,t)},l.toDecimalPlaces=l.toDP=function(n,t){var i=this,e=i.constructor;return i=new e(i),n===void 0?i:(A(n,0,H),t===void 0?t=e.rounding:A(t,0,8),g(i,n+i.e+1,t))},l.toExponential=function(n,t){var i,e=this,s=e.constructor;return n===void 0?i=L(e,!0):(A(n,0,H),t===void 0?t=s.rounding:A(t,0,8),i=L(e=g(new s(e),n+1,t),!0,n+1)),e.isNeg()&&!e.isZero()?"-"+i:i},l.toFixed=function(n,t){var i,e,s=this,r=s.constructor;return n===void 0?i=L(s):(A(n,0,H),t===void 0?t=r.rounding:A(t,0,8),i=L(e=g(new r(s),n+s.e+1,t),!1,n+e.e+1)),s.isNeg()&&!s.isZero()?"-"+i:i},l.toFraction=function(n){var t,i,e,s,r,o,u,f,c,h,a,d,p=this,m=p.d,x=p.constructor;if(!m)return new x(p);if(c=i=new x(1),e=f=new x(0),o=(r=(t=new x(e)).e=pn(m)-p.e-1)%w,t.d[0]=M(10,o<0?w+o:o),n==null)n=r>0?t:c;else{if(!(u=new x(n)).isInt()||u.lt(c))throw Error(B+u);n=u.gt(t)?r>0?t:c:u}for(v=!1,u=new x(O(m)),h=x.precision,x.precision=r=m.length*w*2;a=b(u,t,0,1,1),(s=i.plus(a.times(e))).cmp(n)!=1;)i=e,e=s,s=c,c=f.plus(a.times(s)),f=s,s=t,t=u.minus(a.times(s)),u=s;return s=b(n.minus(i),e,0,1,1),f=f.plus(s.times(c)),i=i.plus(s.times(e)),f.s=c.s=p.s,d=b(c,e,r,1).minus(p).abs().cmp(b(f,i,r,1).minus(p).abs())<1?[c,e]:[f,i],x.precision=h,v=!0,d},l.toHexadecimal=l.toHex=function(n,t){return hn(this,16,n,t)},l.toNearest=function(n,t){var i=this,e=i.constructor;if(i=new e(i),n==null){if(!i.d)return i;n=new e(1),t=e.rounding}else{if(n=new e(n),t===void 0?t=e.rounding:A(t,0,8),!i.d)return n.s?i:n;if(!n.d)return n.s&&(n.s=i.s),n}return n.d[0]?(v=!1,i=b(i,n,0,t,1).times(n),v=!0,g(i)):(n.s=i.s,i=n),i},l.toNumber=function(){return+this},l.toOctal=function(n,t){return hn(this,8,n,t)},l.toPower=l.pow=function(n){var t,i,e,s,r,o,u=this,f=u.constructor,c=+(n=new f(n));if(!(u.d&&n.d&&u.d[0]&&n.d[0]))return new f(M(+u,c));if((u=new f(u)).eq(1))return u;if(e=f.precision,r=f.rounding,n.eq(1))return g(u,e,r);if((t=D(n.e/w))>=n.d.length-1&&(i=c<0?-c:c)<=Zn)return s=qn(f,u,i,e),n.s<0?new f(1).div(s):g(s,e,r);if((o=u.s)<0){if(t<n.d.length-1)return new f(NaN);if((1&n.d[t])==0&&(o=1),u.e==0&&u.d[0]==1&&u.d.length==1)return u.s=o,u}return(t=(i=M(+u,c))!=0&&isFinite(i)?new f(i+"").e:D(c*(Math.log("0."+O(u.d))/Math.LN10+u.e+1)))>f.maxE+1||t<f.minE-1?new f(t>0?o/0:0):(v=!1,f.rounding=u.s=1,i=Math.min(12,(t+"").length),(s=fn(n.times(k(u,e+i)),e)).d&&W((s=g(s,e+5,1)).d,e,r)&&(t=e+10,+O((s=g(fn(n.times(k(u,t+i)),t),t+5,1)).d).slice(e+1,e+15)+1==1e14&&(s=g(s,e+1,0))),s.s=o,v=!0,f.rounding=r,g(s,e,r))},l.toPrecision=function(n,t){var i,e=this,s=e.constructor;return n===void 0?i=L(e,e.e<=s.toExpNeg||e.e>=s.toExpPos):(A(n,1,H),t===void 0?t=s.rounding:A(t,0,8),i=L(e=g(new s(e),n,t),n<=e.e||e.e<=s.toExpNeg,n)),e.isNeg()&&!e.isZero()?"-"+i:i},l.toSignificantDigits=l.toSD=function(n,t){var i=this.constructor;return n===void 0?(n=i.precision,t=i.rounding):(A(n,1,H),t===void 0?t=i.rounding:A(t,0,8)),g(new i(this),n,t)},l.toString=function(){var n=this,t=n.constructor,i=L(n,n.e<=t.toExpNeg||n.e>=t.toExpPos);return n.isNeg()&&!n.isZero()?"-"+i:i},l.truncated=l.trunc=function(){return g(new this.constructor(this),this.e+1,1)},l.valueOf=l.toJSON=function(){var n=this,t=n.constructor,i=L(n,n.e<=t.toExpNeg||n.e>=t.toExpPos);return n.isNeg()?"-"+i:i};var b=function(){function n(e,s,r){var o,u=0,f=e.length;for(e=e.slice();f--;)o=e[f]*s+u,e[f]=o%r|0,u=o/r|0;return u&&e.unshift(u),e}function t(e,s,r,o){var u,f;if(r!=o)f=r>o?1:-1;else for(u=f=0;u<r;u++)if(e[u]!=s[u]){f=e[u]>s[u]?1:-1;break}return f}function i(e,s,r,o){for(var u=0;r--;)e[r]-=u,u=e[r]<s[r]?1:0,e[r]=u*o+e[r]-s[r];for(;!e[0]&&e.length>1;)e.shift()}return function(e,s,r,o,u,f){var c,h,a,d,p,m,x,y,_,T,q,F,z,U,sn,G,j,on,Z,un,K=e.constructor,cn=e.s==s.s?1:-1,S=e.d,E=s.d;if(!(S&&S[0]&&E&&E[0]))return new K(e.s&&s.s&&(S?!E||S[0]!=E[0]:E)?S&&S[0]==0||!E?0*cn:cn/0:NaN);for(f?(p=1,h=e.e-s.e):(f=R,p=w,h=D(e.e/p)-D(s.e/p)),Z=E.length,j=S.length,T=(_=new K(cn)).d=[],a=0;E[a]==(S[a]||0);a++);if(E[a]>(S[a]||0)&&h--,r==null?(U=r=K.precision,o=K.rounding):U=u?r+(e.e-s.e)+1:r,U<0)T.push(1),m=!0;else{if(U=U/p+2|0,a=0,Z==1){for(d=0,E=E[0],U++;(a<j||d)&&U--;a++)sn=d*f+(S[a]||0),T[a]=sn/E|0,d=sn%E|0;m=d||a<j}else{for((d=f/(E[0]+1)|0)>1&&(E=n(E,d,f),S=n(S,d,f),Z=E.length,j=S.length),G=Z,F=(q=S.slice(0,Z)).length;F<Z;)q[F++]=0;(un=E.slice()).unshift(0),on=E[0],E[1]>=f/2&&++on;do d=0,(c=t(E,q,Z,F))<0?(z=q[0],Z!=F&&(z=z*f+(q[1]||0)),(d=z/on|0)>1?(d>=f&&(d=f-1),(c=t(x=n(E,d,f),q,y=x.length,F=q.length))==1&&(d--,i(x,Z<y?un:E,y,f))):(d==0&&(c=d=1),x=E.slice()),(y=x.length)<F&&x.unshift(0),i(q,x,F,f),c==-1&&(c=t(E,q,Z,F=q.length))<1&&(d++,i(q,Z<F?un:E,F,f)),F=q.length):c===0&&(d++,q=[0]),T[a++]=d,c&&q[0]?q[F++]=S[G]||0:(q=[S[G]],F=1);while((G++<j||q[0]!==void 0)&&U--);m=q[0]!==void 0}T[0]||T.shift()}if(p==1)_.e=h,bn=m;else{for(a=1,d=T[0];d>=10;d/=10)a++;_.e=a+h*p-1,g(_,u?r+_.e+1:r,o,m)}return _}}();function g(n,t,i,e){var s,r,o,u,f,c,h,a,d,p=n.constructor;n:if(t!=null){if(!(a=n.d))return n;for(s=1,u=a[0];u>=10;u/=10)s++;if((r=t-s)<0)r+=w,o=t,f=(h=a[d=0])/M(10,s-o-1)%10|0;else if((d=Math.ceil((r+1)/w))>=(u=a.length)){if(!e)break n;for(;u++<=d;)a.push(0);h=f=0,s=1,o=(r%=w)-w+1}else{for(h=u=a[d],s=1;u>=10;u/=10)s++;f=(o=(r%=w)-w+s)<0?0:h/M(10,s-o-1)%10|0}if(e=e||t<0||a[d+1]!==void 0||(o<0?h:h%M(10,s-o-1)),c=i<4?(f||e)&&(i==0||i==(n.s<0?3:2)):f>5||f==5&&(i==4||e||i==6&&(r>0?o>0?h/M(10,s-o):0:a[d-1])%10&1||i==(n.s<0?8:7)),t<1||!a[0])return a.length=0,c?(t-=n.e+1,a[0]=M(10,(w-t%w)%w),n.e=-t||0):a[0]=n.e=0,n;if(r==0?(a.length=d,u=1,d--):(a.length=d+1,u=M(10,w-r),a[d]=o>0?(h/M(10,s-o)%M(10,o)|0)*u:0),c)for(;;){if(d==0){for(r=1,o=a[0];o>=10;o/=10)r++;for(o=a[0]+=u,u=1;o>=10;o/=10)u++;r!=u&&(n.e++,a[0]==R&&(a[0]=1));break}if(a[d]+=u,a[d]!=R)break;a[d--]=0,u=1}for(r=a.length;a[--r]===0;)a.pop()}return v&&(n.e>p.maxE?(n.d=null,n.e=NaN):n.e<p.minE&&(n.e=0,n.d=[0])),n}function L(n,t,i){if(!n.isFinite())return Sn(n);var e,s=n.e,r=O(n.d),o=r.length;return t?(i&&(e=i-o)>0?r=r.charAt(0)+"."+r.slice(1)+C(e):o>1&&(r=r.charAt(0)+"."+r.slice(1)),r=r+(n.e<0?"e":"e+")+n.e):s<0?(r="0."+C(-s-1)+r,i&&(e=i-o)>0&&(r+=C(e))):s>=o?(r+=C(s+1-o),i&&(e=i-s-1)>0&&(r=r+"."+C(e))):((e=s+1)<o&&(r=r.slice(0,e)+"."+r.slice(e)),i&&(e=i-o)>0&&(s+1===o&&(r+="."),r+=C(e))),r}function X(n,t){var i=n[0];for(t*=w;i>=10;i/=10)t++;return t}function tn(n,t,i){if(t>Rn)throw v=!0,i&&(n.precision=i),Error(xn);return g(new n(Y),t,1,!0)}function P(n,t,i){if(t>dn)throw Error(xn);return g(new n(nn),t,i,!0)}function pn(n){var t=n.length-1,i=t*w+1;if(t=n[t]){for(;t%10==0;t/=10)i--;for(t=n[0];t>=10;t/=10)i++}return i}function C(n){for(var t="";n--;)t+="0";return t}function qn(n,t,i,e){var s,r=new n(1),o=Math.ceil(e/w+4);for(v=!1;;){if(i%2&&vn((r=r.times(t)).d,o)&&(s=!0),(i=D(i/2))===0){i=r.d.length-1,s&&r.d[i]===0&&++r.d[i];break}vn((t=t.times(t)).d,o)}return v=!0,r}function mn(n){return 1&n.d[n.d.length-1]}function On(n,t,i){for(var e,s=new n(t[0]),r=0;++r<t.length;){if(!(e=new n(t[r])).s){s=e;break}s[i](e)&&(s=e)}return s}function fn(n,t){var i,e,s,r,o,u,f,c=0,h=0,a=0,d=n.constructor,p=d.rounding,m=d.precision;if(!n.d||!n.d[0]||n.e>17)return new d(n.d?n.d[0]?n.s<0?0:1/0:1:n.s?n.s<0?0:n:NaN);for(t==null?(v=!1,f=m):f=t,u=new d(.03125);n.e>-2;)n=n.times(u),a+=5;for(f+=e=Math.log(M(2,a))/Math.LN10*2+5|0,i=r=o=new d(1),d.precision=f;;){if(r=g(r.times(n),f,1),i=i.times(++h),O((u=o.plus(b(r,i,f,1))).d).slice(0,f)===O(o.d).slice(0,f)){for(s=a;s--;)o=g(o.times(o),f,1);if(t!=null)return d.precision=m,o;if(!(c<3&&W(o.d,f-e,p,c)))return g(o,d.precision=m,p,v=!0);d.precision=f+=10,i=r=u=new d(1),h=0,c++}o=u}}function k(n,t){var i,e,s,r,o,u,f,c,h,a,d,p=1,m=n,x=m.d,y=m.constructor,_=y.rounding,T=y.precision;if(m.s<0||!x||!x[0]||!m.e&&x[0]==1&&x.length==1)return new y(x&&!x[0]?-1/0:m.s!=1?NaN:x?0:m);if(t==null?(v=!1,h=T):h=t,y.precision=h+=10,e=(i=O(x)).charAt(0),!(Math.abs(r=m.e)<15e14))return c=tn(y,h+2,T).times(r+""),m=k(new y(e+"."+i.slice(1)),h-10).plus(c),y.precision=T,t==null?g(m,T,_,v=!0):m;for(;e<7&&e!=1||e==1&&i.charAt(1)>3;)e=(i=O((m=m.times(n)).d)).charAt(0),p++;for(r=m.e,e>1?(m=new y("0."+i),r++):m=new y(e+"."+i.slice(1)),a=m,f=o=m=b(m.minus(1),m.plus(1),h,1),d=g(m.times(m),h,1),s=3;;){if(o=g(o.times(d),h,1),O((c=f.plus(b(o,new y(s),h,1))).d).slice(0,h)===O(f.d).slice(0,h)){if(f=f.times(2),r!==0&&(f=f.plus(tn(y,h+2,T).times(r+""))),f=b(f,new y(p),h,1),t!=null)return y.precision=T,f;if(!W(f.d,h-10,_,u))return g(f,y.precision=T,_,v=!0);y.precision=h+=10,c=o=m=b(a.minus(1),a.plus(1),h,1),d=g(m.times(m),h,1),s=u=1}f=c,s+=2}}function Sn(n){return String(n.s*n.s/0)}function gn(n,t){var i,e,s;for((i=t.indexOf("."))>-1&&(t=t.replace(".","")),(e=t.search(/e/i))>0?(i<0&&(i=e),i+=+t.slice(e+1),t=t.substring(0,e)):i<0&&(i=t.length),e=0;t.charCodeAt(e)===48;e++);for(s=t.length;t.charCodeAt(s-1)===48;--s);if(t=t.slice(e,s)){if(s-=e,n.e=i=i-e-1,n.d=[],e=(i+1)%w,i<0&&(e+=w),e<s){for(e&&n.d.push(+t.slice(0,e)),s-=w;e<s;)n.d.push(+t.slice(e,e+=w));t=t.slice(e),e=w-t.length}else e-=s;for(;e--;)t+="0";n.d.push(+t),v&&(n.e>n.constructor.maxE?(n.d=null,n.e=NaN):n.e<n.constructor.minE&&(n.e=0,n.d=[0]))}else n.e=0,n.d=[0];return n}function _n(n,t){var i,e,s,r,o,u,f,c,h;if(t.indexOf("_")>-1){if(t=t.replace(/(\d)_(?=\d)/g,"$1"),Mn.test(t))return gn(n,t)}else if(t==="Infinity"||t==="NaN")return+t||(n.s=NaN),n.e=NaN,n.d=null,n;if(Fn.test(t))i=16,t=t.toLowerCase();else if(Tn.test(t))i=2;else{if(!An.test(t))throw Error(B+t);i=8}for((r=t.search(/p/i))>0?(f=+t.slice(r+1),t=t.substring(2,r)):t=t.slice(2),o=(r=t.indexOf("."))>=0,e=n.constructor,o&&(r=(u=(t=t.replace(".","")).length)-r,s=qn(e,new e(i),r,2*r)),r=h=(c=Q(t,i,R)).length-1;c[r]===0;--r)c.pop();return r<0?new e(0*n.s):(n.e=X(c,h),n.d=c,v=!1,o&&(n=b(n,s,4*u)),f&&(n=n.times(Math.abs(f)<54?M(2,f):J.pow(2,f))),v=!0,n)}function Ln(n,t){var i,e=t.d.length;if(e<3)return t.isZero()?t:$(n,2,t,t);i=(i=1.4*Math.sqrt(e))>16?16:0|i,t=$(n,2,t=t.times(1/en(5,i)),t);for(var s,r=new n(5),o=new n(16),u=new n(20);i--;)s=t.times(t),t=t.times(r.plus(s.times(o.times(s).minus(u))));return t}function $(n,t,i,e,s){var r,o,u,f,c=n.precision,h=Math.ceil(c/w);for(v=!1,f=i.times(i),u=new n(e);;){if(o=b(u.times(f),new n(t++*t++),c,1),u=s?e.plus(o):e.minus(o),e=b(o.times(f),new n(t++*t++),c,1),(o=u.plus(e)).d[h]!==void 0){for(r=h;o.d[r]===u.d[r]&&r--;);if(r==-1)break}r=u,u=e,e=o,o=r}return v=!0,o.d.length=h+1,o}function en(n,t){for(var i=n;--t;)i*=n;return i}function wn(n,t){var i,e=t.s<0,s=P(n,n.precision,1),r=s.times(.5);if((t=t.abs()).lte(r))return I=e?4:1,t;if((i=t.divToInt(s)).isZero())I=e?3:2;else{if((t=t.minus(i.times(s))).lte(r))return I=mn(i)?e?2:3:e?4:1,t;I=mn(i)?e?1:4:e?3:2}return t.minus(s).abs()}function hn(n,t,i,e){var s,r,o,u,f,c,h,a,d,p=n.constructor,m=i!==void 0;if(m?(A(i,1,H),e===void 0?e=p.rounding:A(e,0,8)):(i=p.precision,e=p.rounding),n.isFinite()){for(m?(s=2,t==16?i=4*i-3:t==8&&(i=3*i-2)):s=t,(o=(h=L(n)).indexOf("."))>=0&&(h=h.replace(".",""),(d=new p(1)).e=h.length-o,d.d=Q(L(d),10,s),d.e=d.d.length),r=f=(a=Q(h,10,s)).length;a[--f]==0;)a.pop();if(a[0]){if(o<0?r--:((n=new p(n)).d=a,n.e=r,a=(n=b(n,d,i,e,0,s)).d,r=n.e,c=bn),o=a[i],u=s/2,c=c||a[i+1]!==void 0,c=e<4?(o!==void 0||c)&&(e===0||e===(n.s<0?3:2)):o>u||o===u&&(e===4||c||e===6&&1&a[i-1]||e===(n.s<0?8:7)),a.length=i,c)for(;++a[--i]>s-1;)a[i]=0,i||(++r,a.unshift(1));for(f=a.length;!a[f-1];--f);for(o=0,h="";o<f;o++)h+=an.charAt(a[o]);if(m){if(f>1)if(t==16||t==8){for(o=t==16?4:3,--f;f%o;f++)h+="0";for(f=(a=Q(h,s,t)).length;!a[f-1];--f);for(o=1,h="1.";o<f;o++)h+=an.charAt(a[o])}else h=h.charAt(0)+"."+h.slice(1);h=h+(r<0?"p":"p+")+r}else if(r<0){for(;++r;)h="0"+h;h="0."+h}else if(++r>f)for(r-=f;r--;)h+="0";else r<f&&(h=h.slice(0,r)+"."+h.slice(r))}else h=m?"0p+0":"0";h=(t==16?"0x":t==2?"0b":t==8?"0o":"")+h}else h=Sn(n);return n.s<0?"-"+h:h}function vn(n,t){if(n.length>t)return n.length=t,!0}function In(n){return new this(n).abs()}function Un(n){return new this(n).acos()}function kn(n){return new this(n).acosh()}function Cn(n,t){return new this(n).plus(t)}function Hn(n){return new this(n).asin()}function Bn(n){return new this(n).asinh()}function Vn(n){return new this(n).atan()}function $n(n){return new this(n).atanh()}function jn(n,t){n=new this(n),t=new this(t);var i,e=this.precision,s=this.rounding,r=e+4;return n.s&&t.s?n.d||t.d?!t.d||n.isZero()?(i=t.s<0?P(this,e,s):new this(0)).s=n.s:!n.d||t.isZero()?(i=P(this,r,1).times(.5)).s=n.s:t.s<0?(this.precision=r,this.rounding=1,i=this.atan(b(n,t,r,1)),t=P(this,r,1),this.precision=e,this.rounding=s,i=n.s<0?i.minus(t):i.plus(t)):i=this.atan(b(n,t,r,1)):(i=P(this,r,1).times(t.s>0?.25:.75)).s=n.s:i=new this(NaN),i}function Wn(n){return new this(n).cbrt()}function Jn(n){return g(n=new this(n),n.e+1,2)}function zn(n,t,i){return new this(n).clamp(t,i)}function Gn(n){if(!n||typeof n!="object")throw Error(rn+"Object expected");var t,i,e,s=n.defaults===!0,r=["precision",1,H,"rounding",0,8,"toExpNeg",-V,0,"toExpPos",0,V,"maxE",0,V,"minE",-V,0,"modulo",0,9];for(t=0;t<r.length;t+=3)if(i=r[t],s&&(this[i]=ln[i]),(e=n[i])!==void 0){if(!(D(e)===e&&e>=r[t+1]&&e<=r[t+2]))throw Error(B+i+": "+e);this[i]=e}if(i="crypto",s&&(this[i]=ln[i]),(e=n[i])!==void 0){if(e!==!0&&e!==!1&&e!==0&&e!==1)throw Error(B+i+": "+e);if(e){if(typeof crypto>"u"||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw Error(En);this[i]=!0}else this[i]=!1}return this}function Kn(n){return new this(n).cos()}function Qn(n){return new this(n).cosh()}function Dn(n){var t,i,e;function s(r){var o,u,f,c=this;if(!(c instanceof s))return new s(r);if(c.constructor=s,Nn(r))return c.s=r.s,void(v?!r.d||r.e>s.maxE?(c.e=NaN,c.d=null):r.e<s.minE?(c.e=0,c.d=[0]):(c.e=r.e,c.d=r.d.slice()):(c.e=r.e,c.d=r.d?r.d.slice():r.d));if((f=typeof r)=="number"){if(r===0)return c.s=1/r<0?-1:1,c.e=0,void(c.d=[0]);if(r<0?(r=-r,c.s=-1):c.s=1,r===~~r&&r<1e7){for(o=0,u=r;u>=10;u/=10)o++;return void(v?o>s.maxE?(c.e=NaN,c.d=null):o<s.minE?(c.e=0,c.d=[0]):(c.e=o,c.d=[r]):(c.e=o,c.d=[r]))}return 0*r!=0?(r||(c.s=NaN),c.e=NaN,void(c.d=null)):gn(c,r.toString())}if(f!=="string")throw Error(B+r);return(u=r.charCodeAt(0))===45?(r=r.slice(1),c.s=-1):(u===43&&(r=r.slice(1)),c.s=1),Mn.test(r)?gn(c,r):_n(c,r)}if(s.prototype=l,s.ROUND_UP=0,s.ROUND_DOWN=1,s.ROUND_CEIL=2,s.ROUND_FLOOR=3,s.ROUND_HALF_UP=4,s.ROUND_HALF_DOWN=5,s.ROUND_HALF_EVEN=6,s.ROUND_HALF_CEIL=7,s.ROUND_HALF_FLOOR=8,s.EUCLID=9,s.config=s.set=Gn,s.clone=Dn,s.isDecimal=Nn,s.abs=In,s.acos=Un,s.acosh=kn,s.add=Cn,s.asin=Hn,s.asinh=Bn,s.atan=Vn,s.atanh=$n,s.atan2=jn,s.cbrt=Wn,s.ceil=Jn,s.clamp=zn,s.cos=Kn,s.cosh=Qn,s.div=Xn,s.exp=Yn,s.floor=nt,s.hypot=tt,s.ln=it,s.log=et,s.log10=st,s.log2=rt,s.max=ot,s.min=ut,s.mod=ct,s.mul=ft,s.pow=ht,s.random=at,s.round=lt,s.sign=dt,s.sin=gt,s.sinh=pt,s.sqrt=mt,s.sub=wt,s.sum=vt,s.tan=Nt,s.tanh=bt,s.trunc=xt,n===void 0&&(n={}),n&&n.defaults!==!0)for(e=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],t=0;t<e.length;)n.hasOwnProperty(i=e[t++])||(n[i]=this[i]);return s.config(n),s}function Xn(n,t){return new this(n).div(t)}function Yn(n){return new this(n).exp()}function nt(n){return g(n=new this(n),n.e+1,3)}function tt(){var n,t,i=new this(0);for(v=!1,n=0;n<arguments.length;)if((t=new this(arguments[n++])).d)i.d&&(i=i.plus(t.times(t)));else{if(t.s)return v=!0,new this(1/0);i=t}return v=!0,i.sqrt()}function Nn(n){return n instanceof J||n&&n.toStringTag===yn||!1}function it(n){return new this(n).ln()}function et(n,t){return new this(n).log(t)}function rt(n){return new this(n).log(2)}function st(n){return new this(n).log(10)}function ot(){return On(this,arguments,"lt")}function ut(){return On(this,arguments,"gt")}function ct(n,t){return new this(n).mod(t)}function ft(n,t){return new this(n).mul(t)}function ht(n,t){return new this(n).pow(t)}function at(n){var t,i,e,s,r=0,o=new this(1),u=[];if(n===void 0?n=this.precision:A(n,1,H),e=Math.ceil(n/w),this.crypto)if(crypto.getRandomValues)for(t=crypto.getRandomValues(new Uint32Array(e));r<e;)(s=t[r])>=429e7?t[r]=crypto.getRandomValues(new Uint32Array(1))[0]:u[r++]=s%1e7;else{if(!crypto.randomBytes)throw Error(En);for(t=crypto.randomBytes(e*=4);r<e;)(s=t[r]+(t[r+1]<<8)+(t[r+2]<<16)+((127&t[r+3])<<24))>=214e7?crypto.randomBytes(4).copy(t,r):(u.push(s%1e7),r+=4);r=e/4}else for(;r<e;)u[r++]=1e7*Math.random()|0;for(e=u[--r],n%=w,e&&n&&(s=M(10,w-n),u[r]=(e/s|0)*s);u[r]===0;r--)u.pop();if(r<0)i=0,u=[0];else{for(i=-1;u[0]===0;i-=w)u.shift();for(e=1,s=u[0];s>=10;s/=10)e++;e<w&&(i-=w-e)}return o.e=i,o.d=u,o}function lt(n){return g(n=new this(n),n.e+1,this.rounding)}function dt(n){return(n=new this(n)).d?n.d[0]?n.s:0*n.s:n.s||NaN}function gt(n){return new this(n).sin()}function pt(n){return new this(n).sinh()}function mt(n){return new this(n).sqrt()}function wt(n,t){return new this(n).sub(t)}function vt(){var n=0,t=arguments,i=new this(t[n]);for(v=!1;i.s&&++n<t.length;)i=i.plus(t[n]);return v=!0,g(i,this.precision,this.rounding)}function Nt(n){return new this(n).tan()}function bt(n){return new this(n).tanh()}function xt(n){return g(n=new this(n),n.e+1,1)}l[Symbol.for("nodejs.util.inspect.custom")]=l.toString,l[Symbol.toStringTag]="Decimal";var J=l.constructor=Dn(ln);Y=new J(Y),nn=new J(nn);var N=J;N.set({rounding:5});N.set({modulo:N.ROUND_FLOOR});N.set({crypto:!0});N.set({precision:1e4});N.set({toExpPos:1e3});function Et(n,t,i){let e=N.isDecimal(n)?n:N(n),s=N.isDecimal(t)?t:N(t),r=N.isDecimal(i)?i:N(i),o=N("0"),u=N("1"),f=r,c=s.mod(i),h;for(;!c.isZero();){let a=N.floor(f.div(c));h=u,u=o.sub(a.times(u)),o=h,h=c,c=f.sub(a.times(c)),f=h}return f.greaterThan(1)?N(0):(o.isNegative()&&(o=o.add(i)),e.times(o).mod(i))}function yt(n,t){if(n>t){let i=n;n=t,t=i}return n.add(N.random().times(t.sub(n+1)).floor())}function Mt(n,{a:t}){let i=t[0];for(let e=1;e<t.length;e++)i=i.add(n.pow(e).times(t[e]));return i}function Tt(n,t,i,e){if(Number.isInteger(n)||Number.isInteger(e))throw new TypeError("The shamir.split() function must be called with a String<secret>but got Number<secret>.");if(Number.isInteger(e))throw new TypeError("The shamir.split() function must be called with a String<prime>but got Number<prime>.");if(n.substring(0,2)!=="0x")throw new TypeError("The shamir.split() function must be called with aString<secret> in hexadecimals that begins with 0x.");if(!N.isDecimal(e)&&e.substring(0,2)!=="0x")throw new TypeError("The shamir.split() function must be called with aString<prime> in hexadecimals that begins with 0x.");let s=N(n),r=N(e);if(s.greaterThan(e))throw new RangeError("The String<secret> must be less than the String<prime>.");let o=[s],u=[];for(let f=1;f<i;f++){let c=yt(N(0),r.sub(1));o.push(c)}for(let f=0;f<t;f++){let c=N(f+1);u.push({x:c,y:Mt(c,{a:o}).mod(r)})}return u.map(f=>({x:f.x.toString(),y:f.y.toHex()}))}function qt(n,t){let i=N(1),e=N(1);for(let s=0;s<n.length;s++)n[t].x.equals(n[s].x)||(i=i.times(n[s].x.minus(n[t].x)));for(let s=0;s<n.length;s++)n[t].x.equals(n[s].x)||(e=e.times(n[s].x));return{numerator:e,denominator:i}}function Ot(n,t){let i=N(0);for(let s=0;s<n.length;s++){let r=qt(n,s);i=i.add(n[s].y.times(Et(r.numerator,r.denominator,t)))}return i.mod(t)}function Ft(n,t){let i=N(t),e=n.map(s=>({x:N(s.x),y:N(s.y)}));return Ot(e,i)}export{Ft as combine,Et as divideModular,Tt as split};