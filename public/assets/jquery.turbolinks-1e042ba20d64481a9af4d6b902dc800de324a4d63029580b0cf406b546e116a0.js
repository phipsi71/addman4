(function(){var t,e;t=window.jQuery||("function"==typeof require?require("jquery"):void 0),e=t(document),t.turbo={version:"2.1.0",isReady:!1,use:function(t,i){return e.off(".turbo").on(""+t+".turbo",this.onLoad).on(""+i+".turbo",this.onFetch)},addCallback:function(i){return t.turbo.isReady&&i(t),e.on("turbo:ready",function(){return i(t)})},onLoad:function(){return t.turbo.isReady=!0,e.trigger("turbo:ready")},onFetch:function(){return t.turbo.isReady=!1},register:function(){return t(this.onLoad),t.fn.ready=this.addCallback}},t.turbo.register(),t.turbo.use("page:load","page:fetch")}).call(this);