(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/extend-view/friendsList/friendsList"],{"2eb16":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.lists,function(e,n){var i=t.__map(e.data,function(n,i){var o=t.last(e.data,i);return{$orig:t.__get_orig(n),m0:o}});return{$orig:t.__get_orig(e),l0:i}}));t.$mp.data=Object.assign({},{$root:{l1:n}})},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},"6eeb":function(t,e,n){"use strict";n.r(e);var i=n("96ae"),o=n.n(i);for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);e["default"]=o.a},"7fa3":function(t,e,n){"use strict";var i=n("ce06"),o=n.n(i);o.a},"96ae":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("4edd"),o=function(){return n.e("components/list-cell/list-cell").then(n.bind(null,"9238"))},c=function(){return n.e("components/icon/icon").then(n.bind(null,"7c3f"))},u=function(){return n.e("components/sticky/sticky").then(n.bind(null,"e582"))},r={components:{tuiCell:o,tuiIcon:c,tuiSticky:u},computed:{last:function(){return function(t,e){return t.length-1==e}}},data:function(){return{lists:[],touchmove:!1,touchmoveIndex:-1,titleHeight:0,indexBarHeight:0,indexBarItemHeight:0,scrollViewId:"",winHeight:0,scrollTop:0}},onLoad:function(e){var n=this;setTimeout(function(){t.getSystemInfo({success:function(e){var o=e.windowHeight,c=o-t.upx2px(232);n.winHeight=o,n.indexBarHeight=c,n.indexBarItemHeight=c/25,n.titleHeight=t.upx2px(132),n.lists=i.list}})},10)},methods:{touchStart:function(t){this.touchmove=!0;var e=t.touches[0].pageY,n=Math.floor((e-this.titleHeight)/this.indexBarItemHeight),i=this.lists[n];i&&(this.scrollViewId=i.letter,this.touchmoveIndex=n)},touchMove:function(t){var e=t.touches[0].pageY,n=Math.floor((e-this.titleHeight)/this.indexBarItemHeight),i=this.lists[n];i&&(this.scrollViewId=i.letter,this.touchmoveIndex=n)},touchEnd:function(){this.touchmove=!1,this.touchmoveIndex=-1},touchCancel:function(){this.touchmove=!1,this.touchmoveIndex=-1},search:function(){t.navigateTo({url:"../news-search/news-search"})},detail:function(){t.navigateTo({url:"../chat/chat"})},onScroll:function(t){this.scrollTop=t.detail.scrollTop}}};e.default=r}).call(this,n("6e42")["default"])},ce06:function(t,e,n){},e345:function(t,e,n){"use strict";n.r(e);var i=n("2eb16"),o=n("6eeb");for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);n("7fa3");var u=n("2877"),r=Object(u["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports}},[["f72d","common/runtime","common/vendor"]]]);