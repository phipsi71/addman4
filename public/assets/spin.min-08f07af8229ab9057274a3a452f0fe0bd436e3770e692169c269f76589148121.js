!function(t,e){"object"==typeof module&&module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Spinner=e()}(this,function(){"use strict";function t(t,e){var i,n=document.createElement(t||"div");for(i in e)n[i]=e[i];return n}function e(t){for(var e=1,i=arguments.length;i>e;e++)t.appendChild(arguments[e]);return t}function i(t,e,i,n){var s=["opacity",e,~~(100*t),i,n].join("-"),o=.01+i/n*100,r=Math.max(1-(1-t)/e*(100-o),t),a=h.substring(0,h.indexOf("Animation")).toLowerCase(),l=a&&"-"+a+"-"||"";return d[s]||(c.insertRule("@"+l+"keyframes "+s+"{0%{opacity:"+r+"}"+o+"%{opacity:"+t+"}"+(o+.01)+"%{opacity:1}"+(o+e)%100+"%{opacity:"+t+"}100%{opacity:"+r+"}}",c.cssRules.length),d[s]=1),s}function n(t,e){var i,n,s=t.style;if(e=e.charAt(0).toUpperCase()+e.slice(1),void 0!==s[e])return e;for(n=0;n<u.length;n++)if(i=u[n]+e,void 0!==s[i])return i}function s(t,e){for(var i in e)t.style[n(t,i)||i]=e[i];return t}function o(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)void 0===t[n]&&(t[n]=i[n])}return t}function r(t,e){return"string"==typeof t?t:t[e%t.length]}function a(t){this.opts=o(t||{},a.defaults,p)}function l(){function i(e,i){return t("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',i)}c.addRule(".spin-vml","behavior:url(#default#VML)"),a.prototype.lines=function(t,n){function o(){return s(i("group",{coordsize:c+" "+c,coordorigin:-h+" "+-h}),{width:c,height:c})}function a(t,a,l){e(d,e(s(o(),{rotation:360/n.lines*t+"deg",left:~~a}),e(s(i("roundrect",{arcsize:n.corners}),{width:h,height:n.scale*n.width,left:n.scale*n.radius,top:-n.scale*n.width>>1,filter:l}),i("fill",{color:r(n.color,t),opacity:n.opacity}),i("stroke",{opacity:0}))))}var l,h=n.scale*(n.length+n.width),c=2*n.scale*h,u=-(n.width+n.length)*n.scale*2+"px",d=s(o(),{position:"absolute",top:u,left:u});if(n.shadow)for(l=1;l<=n.lines;l++)a(l,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(l=1;l<=n.lines;l++)a(l);return e(t,d)},a.prototype.opacity=function(t,e,i,n){var s=t.firstChild;n=n.shadow&&n.lines||0,s&&e+n<s.childNodes.length&&(s=s.childNodes[e+n],s=s&&s.firstChild,s=s&&s.firstChild,s&&(s.opacity=i))}}var h,c,u=["webkit","Moz","ms","O"],d={},p={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",opacity:.25,rotate:0,direction:1,speed:1,trail:100,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:!1,hwaccel:!1,position:"absolute"};if(a.defaults={},o(a.prototype,{spin:function(e){this.stop();var i=this,n=i.opts,o=i.el=t(null,{className:n.className});if(s(o,{position:n.position,width:0,zIndex:n.zIndex,left:n.left,top:n.top}),e&&e.insertBefore(o,e.firstChild||null),o.setAttribute("role","progressbar"),i.lines(o,i.opts),!h){var r,a=0,l=(n.lines-1)*(1-n.direction)/2,c=n.fps,u=c/n.speed,d=(1-n.opacity)/(u*n.trail/100),p=u/n.lines;!function t(){a++;for(var e=0;e<n.lines;e++)r=Math.max(1-(a+(n.lines-e)*p)%u*d,n.opacity),i.opacity(o,e*n.direction+l,r,n);i.timeout=i.el&&setTimeout(t,~~(1e3/c))}()}return i},stop:function(){var t=this.el;return t&&(clearTimeout(this.timeout),t.parentNode&&t.parentNode.removeChild(t),this.el=void 0),this},lines:function(n,o){function a(e,i){return s(t(),{position:"absolute",width:o.scale*(o.length+o.width)+"px",height:o.scale*o.width+"px",background:e,boxShadow:i,transformOrigin:"left",transform:"rotate("+~~(360/o.lines*c+o.rotate)+"deg) translate("+o.scale*o.radius+"px,0)",borderRadius:(o.corners*o.scale*o.width>>1)+"px"})}for(var l,c=0,u=(o.lines-1)*(1-o.direction)/2;c<o.lines;c++)l=s(t(),{position:"absolute",top:1+~(o.scale*o.width/2)+"px",transform:o.hwaccel?"translate3d(0,0,0)":"",opacity:o.opacity,animation:h&&i(o.opacity,o.trail,u+c*o.direction,o.lines)+" "+1/o.speed+"s linear infinite"}),o.shadow&&e(l,s(a("#000","0 0 4px #000"),{top:"2px"})),e(n,e(l,a(r(o.color,c),"0 0 1px rgba(0,0,0,.1)")));return n},opacity:function(t,e,i){e<t.childNodes.length&&(t.childNodes[e].style.opacity=i)}}),"undefined"!=typeof document){c=function(){var i=t("style",{type:"text/css"});return e(document.getElementsByTagName("head")[0],i),i.sheet||i.styleSheet}();var f=s(t("group"),{behavior:"url(#default#VML)"});!n(f,"transform")&&f.adj?l():h=n(f,"animation")}return a});