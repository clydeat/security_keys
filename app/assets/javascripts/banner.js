/*Bootstrap Carousel Touch Slider.
http://bootstrapthemes.co
Credits: Bootstrap, jQuery, TouchSwipe, Animate.css, FontAwesome
 */
!function(a){"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],a):a("undefined"!=typeof module&&module.exports?require("jquery"):jQuery)}(function(a){function D(b){return!b||void 0!==b.allowPageScroll||void 0===b.swipe&&void 0===b.swipeStatus||(b.allowPageScroll=i),void 0!==b.click&&void 0===b.tap&&(b.tap=b.click),b||(b={}),b=a.extend({},a.fn.swipe.defaults,b),this.each(function(){var c=a(this),d=c.data(B);d||(d=new E(this,b),c.data(B,d))})}function E(b,p){function ba(b){if(!(Ka()||a(b.target).closest(p.excludedElements,S).length>0)){var d,c=b.originalEvent?b.originalEvent:b,e=c.touches,f=e?e[0]:c;return T=u,(e?U=e.length:!1!==p.preventDefaultEvents&&b.preventDefault(),I=0,J=null,K=null,Q=null,L=0,M=0,N=0,O=1,P=0,R=Ra(),Ia(),Ma(0,f),!e||U===p.fingers||p.fingers===s||qa()?(W=$a(),2==U&&(Ma(1,e[1]),M=N=Ua(V[0].start,V[1].start)),(p.swipeStatus||p.pinchStatus)&&(d=ia(c,T))):d=!1,!1===d)?(T=x,ia(c,T),d):(p.hold&&(aa=setTimeout(a.proxy(function(){S.trigger("hold",[c.target]),p.hold&&(d=p.hold.call(S,c,c.target))},this),p.longTapThreshold)),La(!0),null)}}function ca(a){var b=a.originalEvent?a.originalEvent:a;if(T!==w&&T!==x&&!Ja()){var c,d=b.touches,e=d?d[0]:b,f=Na(e);if(X=$a(),d&&(U=d.length),p.hold&&clearTimeout(aa),T=v,2==U&&(0==M?(Ma(1,d[1]),M=N=Ua(V[0].start,V[1].start)):(Na(d[1]),N=Ua(V[0].end,V[1].end),Q=Wa(V[0].end,V[1].end)),O=Va(M,N),P=Math.abs(M-N)),U===p.fingers||p.fingers===s||!d||qa()){if(J=Za(f.start,f.end),K=Za(f.last,f.end),oa(a,K),I=Xa(f.start,f.end),L=Ta(),Pa(J,I),c=ia(b,T),!p.triggerOnTouchEnd||p.triggerOnTouchLeave){var g=!0;if(p.triggerOnTouchLeave){var h=_a(this);g=ab(f.end,h)}!p.triggerOnTouchEnd&&g?T=ha(v):p.triggerOnTouchLeave&&!g&&(T=ha(w)),T!=x&&T!=w||ia(b,T)}}else T=x,ia(b,T);!1===c&&(T=x,ia(b,T))}}function da(a){var b=a.originalEvent?a.originalEvent:a,c=b.touches;if(c){if(c.length&&!Ja())return Ha(b),!0;if(c.length&&Ja())return!0}return Ja()&&(U=Z),X=$a(),L=Ta(),la()||!ka()?(T=x,ia(b,T)):p.triggerOnTouchEnd||0==p.triggerOnTouchEnd&&T===v?(!1!==p.preventDefaultEvents&&a.preventDefault(),T=w,ia(b,T)):!p.triggerOnTouchEnd&&xa()?(T=w,ja(b,T,m)):T===v&&(T=x,ia(b,T)),La(!1),null}function ea(){U=0,X=0,W=0,M=0,N=0,O=1,Ia(),La(!1)}function fa(a){var b=a.originalEvent?a.originalEvent:a;p.triggerOnTouchLeave&&(T=ha(w),ia(b,T))}function ga(){S.unbind(D,ba),S.unbind(H,ea),S.unbind(E,ca),S.unbind(F,da),G&&S.unbind(G,fa),La(!1)}function ha(a){var b=a,c=na(),d=ka(),e=la();return!c||e?b=x:!d||a!=v||p.triggerOnTouchEnd&&!p.triggerOnTouchLeave?!d&&a==w&&p.triggerOnTouchLeave&&(b=x):b=w,b}function ia(a,b){var c,d=a.touches;return(ua()||ta())&&(c=ja(a,b,k)),(ra()||qa())&&!1!==c&&(c=ja(a,b,l)),Fa()&&!1!==c?c=ja(a,b,n):Ga()&&!1!==c?c=ja(a,b,o):Ea()&&!1!==c&&(c=ja(a,b,m)),b===x&&(ta()&&(c=ja(a,b,k)),qa()&&(c=ja(a,b,l)),ea(a)),b===w&&(d?d.length||ea(a):ea(a)),c}function ja(b,i,j){var q;if(j==k){if(S.trigger("swipeStatus",[i,J||null,I||0,L||0,U,V,K]),p.swipeStatus&&!1===(q=p.swipeStatus.call(S,b,i,J||null,I||0,L||0,U,V,K)))return!1;if(i==w&&sa()){if(clearTimeout(_),clearTimeout(aa),S.trigger("swipe",[J,I,L,U,V,K]),p.swipe&&!1===(q=p.swipe.call(S,b,J,I,L,U,V,K)))return!1;switch(J){case c:S.trigger("swipeLeft",[J,I,L,U,V,K]),p.swipeLeft&&(q=p.swipeLeft.call(S,b,J,I,L,U,V,K));break;case d:S.trigger("swipeRight",[J,I,L,U,V,K]),p.swipeRight&&(q=p.swipeRight.call(S,b,J,I,L,U,V,K));break;case e:S.trigger("swipeUp",[J,I,L,U,V,K]),p.swipeUp&&(q=p.swipeUp.call(S,b,J,I,L,U,V,K));break;case f:S.trigger("swipeDown",[J,I,L,U,V,K]),p.swipeDown&&(q=p.swipeDown.call(S,b,J,I,L,U,V,K))}}}if(j==l){if(S.trigger("pinchStatus",[i,Q||null,P||0,L||0,U,O,V]),p.pinchStatus&&!1===(q=p.pinchStatus.call(S,b,i,Q||null,P||0,L||0,U,O,V)))return!1;if(i==w&&pa())switch(Q){case g:S.trigger("pinchIn",[Q||null,P||0,L||0,U,O,V]),p.pinchIn&&(q=p.pinchIn.call(S,b,Q||null,P||0,L||0,U,O,V));break;case h:S.trigger("pinchOut",[Q||null,P||0,L||0,U,O,V]),p.pinchOut&&(q=p.pinchOut.call(S,b,Q||null,P||0,L||0,U,O,V))}}return j==m?i!==x&&i!==w||(clearTimeout(_),clearTimeout(aa),ya()&&!Ba()?($=$a(),_=setTimeout(a.proxy(function(){$=null,S.trigger("tap",[b.target]),p.tap&&(q=p.tap.call(S,b,b.target))},this),p.doubleTapThreshold)):($=null,S.trigger("tap",[b.target]),p.tap&&(q=p.tap.call(S,b,b.target)))):j==n?i!==x&&i!==w||(clearTimeout(_),clearTimeout(aa),$=null,S.trigger("doubletap",[b.target]),p.doubleTap&&(q=p.doubleTap.call(S,b,b.target))):j==o&&(i!==x&&i!==w||(clearTimeout(_),$=null,S.trigger("longtap",[b.target]),p.longTap&&(q=p.longTap.call(S,b,b.target)))),q}function ka(){var a=!0;return null!==p.threshold&&(a=I>=p.threshold),a}function la(){var a=!1;return null!==p.cancelThreshold&&null!==J&&(a=Qa(J)-I>=p.cancelThreshold),a}function ma(){return null===p.pinchThreshold||P>=p.pinchThreshold}function na(){return!p.maxTimeThreshold||!(L>=p.maxTimeThreshold)}function oa(a,b){if(!1!==p.preventDefaultEvents)if(p.allowPageScroll===i)a.preventDefault();else{var g=p.allowPageScroll===j;switch(b){case c:(p.swipeLeft&&g||!g&&p.allowPageScroll!=q)&&a.preventDefault();break;case d:(p.swipeRight&&g||!g&&p.allowPageScroll!=q)&&a.preventDefault();break;case e:(p.swipeUp&&g||!g&&p.allowPageScroll!=r)&&a.preventDefault();break;case f:(p.swipeDown&&g||!g&&p.allowPageScroll!=r)&&a.preventDefault()}}}function pa(){var a=va(),b=wa(),c=ma();return a&&b&&c}function qa(){return!!(p.pinchStatus||p.pinchIn||p.pinchOut)}function ra(){return!(!pa()||!qa())}function sa(){var a=na(),b=ka(),c=va(),d=wa();return!la()&&d&&c&&b&&a}function ta(){return!!(p.swipe||p.swipeStatus||p.swipeLeft||p.swipeRight||p.swipeUp||p.swipeDown)}function ua(){return!(!sa()||!ta())}function va(){return U===p.fingers||p.fingers===s||!y}function wa(){return 0!==V[0].end.x}function xa(){return!!p.tap}function ya(){return!!p.doubleTap}function za(){return!!p.longTap}function Aa(){if(null==$)return!1;var a=$a();return ya()&&a-$<=p.doubleTapThreshold}function Ba(){return Aa()}function Ca(){return(1===U||!y)&&(isNaN(I)||I<p.threshold)}function Da(){return L>p.longTapThreshold&&I<t}function Ea(){return!(!Ca()||!xa())}function Fa(){return!(!Aa()||!ya())}function Ga(){return!(!Da()||!za())}function Ha(a){Y=$a(),Z=a.touches.length+1}function Ia(){Y=0,Z=0}function Ja(){var a=!1;if(Y){$a()-Y<=p.fingerReleaseThreshold&&(a=!0)}return a}function Ka(){return!(!0!==S.data(B+"_intouch"))}function La(a){S&&(!0===a?(S.bind(E,ca),S.bind(F,da),G&&S.bind(G,fa)):(S.unbind(E,ca,!1),S.unbind(F,da,!1),G&&S.unbind(G,fa,!1)),S.data(B+"_intouch",!0===a))}function Ma(a,b){var c={start:{x:0,y:0},last:{x:0,y:0},end:{x:0,y:0}};return c.start.x=c.last.x=c.end.x=b.pageX||b.clientX,c.start.y=c.last.y=c.end.y=b.pageY||b.clientY,V[a]=c,c}function Na(a){var b=void 0!==a.identifier?a.identifier:0,c=Oa(b);return null===c&&(c=Ma(b,a)),c.last.x=c.end.x,c.last.y=c.end.y,c.end.x=a.pageX||a.clientX,c.end.y=a.pageY||a.clientY,c}function Oa(a){return V[a]||null}function Pa(a,b){b=Math.max(b,Qa(a)),R[a].distance=b}function Qa(a){if(R[a])return R[a].distance}function Ra(){var a={};return a[c]=Sa(c),a[d]=Sa(d),a[e]=Sa(e),a[f]=Sa(f),a}function Sa(a){return{direction:a,distance:0}}function Ta(){return X-W}function Ua(a,b){var c=Math.abs(a.x-b.x),d=Math.abs(a.y-b.y);return Math.round(Math.sqrt(c*c+d*d))}function Va(a,b){return(b/a*1).toFixed(2)}function Wa(){return O<1?h:g}function Xa(a,b){return Math.round(Math.sqrt(Math.pow(b.x-a.x,2)+Math.pow(b.y-a.y,2)))}function Ya(a,b){var c=a.x-b.x,d=b.y-a.y,e=Math.atan2(d,c),f=Math.round(180*e/Math.PI);return f<0&&(f=360-Math.abs(f)),f}function Za(a,b){var g=Ya(a,b);return g<=45&&g>=0?c:g<=360&&g>=315?c:g>=135&&g<=225?d:g>45&&g<135?f:e}function $a(){return(new Date).getTime()}function _a(b){b=a(b);var c=b.offset();return{left:c.left,right:c.left+b.outerWidth(),top:c.top,bottom:c.top+b.outerHeight()}}function ab(a,b){return a.x>b.left&&a.x<b.right&&a.y>b.top&&a.y<b.bottom}var p=a.extend({},p),C=y||A||!p.fallbackToMouseEvents,D=C?A?z?"MSPointerDown":"pointerdown":"touchstart":"mousedown",E=C?A?z?"MSPointerMove":"pointermove":"touchmove":"mousemove",F=C?A?z?"MSPointerUp":"pointerup":"touchend":"mouseup",G=C?A?"mouseleave":null:"mouseleave",H=A?z?"MSPointerCancel":"pointercancel":"touchcancel",I=0,J=null,K=null,L=0,M=0,N=0,O=1,P=0,Q=0,R=null,S=a(b),T="start",U=0,V={},W=0,X=0,Y=0,Z=0,$=0,_=null,aa=null;try{S.bind(D,ba),S.bind(H,ea)}catch(b){a.error("events not supported "+D+","+H+" on jQuery.swipe")}this.enable=function(){return S.bind(D,ba),S.bind(H,ea),S},this.disable=function(){return ga(),S},this.destroy=function(){ga(),S.data(B,null),S=null},this.option=function(b,c){if("object"==typeof b)p=a.extend(p,b);else if(void 0!==p[b]){if(void 0===c)return p[b];p[b]=c}else{if(!b)return p;a.error("Option "+b+" does not exist on jQuery.swipe.options")}return null}}var c="left",d="right",e="up",f="down",g="in",h="out",i="none",j="auto",k="swipe",l="pinch",m="tap",n="doubletap",o="longtap",q="horizontal",r="vertical",s="all",t=10,u="start",v="move",w="end",x="cancel",y="ontouchstart"in window,z=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled&&!y,A=(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&!y,B="TouchSwipe",C={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:!0,triggerOnTouchLeave:!1,allowPageScroll:"auto",fallbackToMouseEvents:!0,excludedElements:"label, button, input, select, textarea, a, .noSwipe",preventDefaultEvents:!0};a.fn.swipe=function(b){var c=a(this),d=c.data(B);if(d&&"string"==typeof b){if(d[b])return d[b].apply(this,Array.prototype.slice.call(arguments,1));a.error("Method "+b+" does not exist on jQuery.swipe")}else if(d&&"object"==typeof b)d.option.apply(this,arguments);else if(!(d||"object"!=typeof b&&b))return D.apply(this,arguments);return c},a.fn.swipe.version="1.6.15",a.fn.swipe.defaults=C,a.fn.swipe.phases={PHASE_START:u,PHASE_MOVE:v,PHASE_END:w,PHASE_CANCEL:x},a.fn.swipe.directions={LEFT:c,RIGHT:d,UP:e,DOWN:f,IN:g,OUT:h},a.fn.swipe.pageScroll={NONE:i,HORIZONTAL:q,VERTICAL:r,AUTO:j},a.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:s}}),function(a){"use strict";a.fn.bsTouchSlider=function(b){var c=a(".carousel");return this.each(function(){function b(b){b.each(function(){var b=a(this),d=b.data("animation");b.addClass(d).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){b.removeClass(d)})})}var d=c.find(".item:first").find("[data-animation ^= 'animated']");c.carousel(),b(d),c.on("slide.bs.carousel",function(c){b(a(c.relatedTarget).find("[data-animation ^= 'animated']"))}),a(".carousel .carousel-inner").swipe({swipeLeft:function(a,b,c,d,e){this.parent().carousel("next")},swipeRight:function(){this.parent().carousel("prev")},threshold:0})})}}(jQuery);
//Initialise Bootstrap Carousel Touch Slider
// Curently there are no option available.
$('#bootstrap-touch-slider').bsTouchSlider();