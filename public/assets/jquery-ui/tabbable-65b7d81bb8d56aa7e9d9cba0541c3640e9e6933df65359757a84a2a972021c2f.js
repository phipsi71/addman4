!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){return t.ui=t.ui||{},t.ui.version="1.12.1"}),function(t){"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}(function(t){function e(t){for(var e=t.css("visibility");"inherit"===e;)t=t.parent(),e=t.css("visibility");return"hidden"!==e}return t.ui.focusable=function(i,n){var o,r,s,a,l,c=i.nodeName.toLowerCase();return"area"===c?(o=i.parentNode,r=o.name,!(!i.href||!r||"map"!==o.nodeName.toLowerCase())&&(s=t("img[usemap='#"+r+"']"),s.length>0&&s.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(c)?(a=!i.disabled,a&&(l=t(i).closest("fieldset")[0],l&&(a=!l.disabled))):a="a"===c?i.href||n:n,a&&t(i).is(":visible")&&e(t(i)))},t.extend(t.expr[":"],{focusable:function(e){return t.ui.focusable(e,null!=t.attr(e,"tabindex"))}}),t.ui.focusable}),function(t){"function"==typeof define&&define.amd?define(["jquery","./version","./focusable"],t):t(jQuery)}(function(t){return t.extend(t.expr[":"],{tabbable:function(e){var i=t.attr(e,"tabindex"),n=null!=i;return(!n||i>=0)&&t.ui.focusable(e,n)}})});