(function(){jQuery(function(){$("#autousers").autocomplete({minLength:3,source:function(t,e){return $.ajax({url:"../users",dataType:"json",data:{term:t.term},success:function(t){return e($.map(t,function(t){var e,i,n;return n=t.lastname?t.lastname:"",i=t.firstname?t.firstname:"",e=t.company?", "+t.company:"",{label:n+" "+i+e,id:t.id}}))}})},select:function(t,e){return $("#user_id").val(e.item.id)}})})}).call(this);