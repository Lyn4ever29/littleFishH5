(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extend-view-news-search-news-search"],{"070a":function(t,a,e){"use strict";e.r(a);var i=e("c7cc"),n=e("25a1");for(var o in n)"default"!==o&&function(t){e.d(a,t,function(){return n[t]})}(o);e("9dc1");var r=e("2877"),c=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"a0932cba",null);a["default"]=c.exports},1272:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"tuiTag",props:{type:{type:String,default:"primary"},size:{type:String,default:""},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},visible:{type:Boolean,default:!0}},methods:{handleClick:function(){this.$emit("click")},getTypeClass:function(t,a){return a?"tui-"+t+"-outline":"tui-"+t},getClassName:function(t,a){var e=a?"tui-tag-outline ":"";return"square"!=t&&("circle"==t?e+=a?"tui-tag-outline-fillet":"tui-tag-fillet":"circleLeft"==t?e+="tui-tag-fillet-left":"circleRight"==t&&(e+="tui-tag-fillet-right")),e}}};a.default=i},"25a1":function(t,a,e){"use strict";e.r(a);var i=e("84aa"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,function(){return i[t]})}(o);a["default"]=n.a},"6ad8":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"tuiActionsheet",props:{maskClosable:{type:Boolean,default:!0},show:{type:Boolean,default:!1},itemList:{type:Array,default:function(){return[{text:"确定",color:"#1a1a1a"}]}},tips:{type:String,default:""},color:{type:String,default:"#9a9a9a"},size:{type:Number,default:26},isCancel:{type:Boolean,default:!0}},methods:{px:function(t){return uni.upx2px(t)+"px"},handleClickMask:function(){this.maskClosable&&this.handleClickCancel()},handleClickItem:function(t){if(this.show){var a=t.currentTarget.dataset;this.$emit("click",{index:a.index})}},handleClickCancel:function(){this.$emit("cancel")}}};a.default=i},"84aa":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=r(e("7c3f")),n=r(e("f7fa")),o=r(e("e9b9"));function r(t){return t&&t.__esModule?t:{default:t}}var c={components:{tuiIcon:i.default,tuiTag:n.default,tuiActionsheet:o.default},data:function(){return{history:["美洲杯","D站观点","C罗","早安D站","2019退役球星","女神大会","德利赫特","托雷斯","自热火锅","华为手机","有机酸奶"],hot:["德利赫特","托雷斯","早安D站","D站观点","德利赫特","美洲杯","华为手机","C罗","自热火锅","2019退役球星","女神大会"],key:"",showActionSheet:!1,tips:"确认清空搜索历史吗？"}},methods:{back:function(){uni.navigateBack()},cleanKey:function(){this.key=""},closeActionSheet:function(){this.showActionSheet=!1},openActionSheet:function(){this.showActionSheet=!0},itemClick:function(t){var a=t.index;0==a&&(this.showActionSheet=!1,this.history=[])}}};a.default=c},"8b6f":function(t,a,e){a=t.exports=e("2350")(!1),a.push([t.i,"uni-page-body[data-v-a0932cba]{color:#333;background:#fff}.container[data-v-a0932cba]{padding:0 %?30?% %?30?% %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box}.tui-searchbox[data-v-a0932cba]{padding:%?30?% 0;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.tui-search-input[data-v-a0932cba]{width:100%;height:%?66?%;border-radius:%?35?%;padding:0 %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;background:#f2f2f2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.tui-input[data-v-a0932cba]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;color:#333;padding:0 %?16?%;font-size:%?28?%}.tui-input-plholder[data-v-a0932cba]{font-size:%?28?%;color:#b2b2b2}.tui-cancle[data-v-a0932cba]{color:#888;font-size:%?28?%;padding-left:%?30?%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.tui-history-header[data-v-a0932cba]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:%?30?% 0}.tui-icon-delete[data-v-a0932cba]{padding:%?10?%}.tui-search-title[data-v-a0932cba]{font-size:%?28?%;font-weight:700}.tui-hot-header[data-v-a0932cba]{padding:%?30?% 0}.tui-tag-class[data-v-a0932cba]{display:inline-block;margin-bottom:%?20?%;margin-right:%?20?%;font-size:%?26?%!important}body.?%PAGE?%[data-v-a0932cba]{background:#fff}",""])},"9ae0":function(t,a,e){var i=e("abfa");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("1e7fcb9c",i,!0,{sourceMap:!1,shadowMode:!1})},"9dc1":function(t,a,e){"use strict";var i=e("be97"),n=e.n(i);n.a},a4f5:function(t,a,e){"use strict";e.r(a);var i=e("1272"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,function(){return i[t]})}(o);a["default"]=n.a},a5c8:function(t,a,e){"use strict";var i=e("ef78"),n=e.n(i);n.a},abfa:function(t,a,e){a=t.exports=e("2350")(!1),a.push([t.i,'.tui-actionsheet[data-v-a9fac8a8]{width:100%;position:fixed;left:0;right:0;bottom:0;z-index:9999;visibility:hidden;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;transition:all .3s ease-in-out;background:#eaeaec;min-height:%?100?%}.tui-actionsheet-show[data-v-a9fac8a8]{-webkit-transform:translateZ(0);transform:translateZ(0);visibility:visible}.tui-tips[data-v-a9fac8a8]{width:100%;\n\t/* font-size: 26upx; */padding:%?30?% %?60?%;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;background:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.tui-operate-box[data-v-a9fac8a8]{padding-bottom:%?12?%}.tui-actionsheet-btn[data-v-a9fac8a8]{width:100%;height:%?100?%;background:#fff;\n\t/* box-sizing: border-box;\n\tpadding: 0 30upx; */display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;font-size:%?36?%;position:relative}.tui-btn-last[data-v-a9fac8a8]{padding-bottom:env(safe-area-inset-bottom)}.tui-actionsheet-divider[data-v-a9fac8a8]:before{content:"";width:100%;border-top:%?1?% solid #d9d9d9;position:absolute;top:0;left:0;-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5)}.tui-actionsheet-cancel[data-v-a9fac8a8]{color:#1a1a1a;padding-bottom:env(safe-area-inset-bottom)}.tui-actionsheet-hover[data-v-a9fac8a8]{background:#f7f7f9}.tui-actionsheet-mask[data-v-a9fac8a8]{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.6);z-index:9996;-webkit-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;transition:all .3s ease-in-out;opacity:0;visibility:hidden}.tui-mask-show[data-v-a9fac8a8]{opacity:1;visibility:visible}',""])},b06b:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("v-uni-view",{staticClass:"tui-actionsheet-class tui-actionsheet",class:[t.show?"tui-actionsheet-show":""]},[t.tips?e("v-uni-view",{staticClass:"tui-tips",style:{fontSize:t.px(t.size),color:t.color}},[t._v(t._s(t.tips))]):t._e(),e("v-uni-view",{class:[t.isCancel?"tui-operate-box":""]},[t._l(t.itemList,function(a,i){return[e("v-uni-view",{key:i+"_0",staticClass:"tui-actionsheet-btn tui-actionsheet-divider",class:[t.isCancel||i!=t.itemList.length-1?"":"tui-btn-last"],style:{color:a.color||"#1a1a1a"},attrs:{"hover-class":"tui-actionsheet-hover","hover-stay-time":150,"data-index":i},on:{click:function(a){a=t.$handleEvent(a),t.handleClickItem(a)}}},[t._v(t._s(a.text))])]})],2),t.isCancel?e("v-uni-view",{staticClass:"tui-actionsheet-btn tui-actionsheet-cancel",attrs:{"hover-class":"tui-actionsheet-hover","hover-stay-time":150},on:{click:function(a){a=t.$handleEvent(a),t.handleClickCancel(a)}}},[t._v("取消")]):t._e()],1),e("v-uni-view",{staticClass:"tui-actionsheet-mask",class:[t.show?"tui-mask-show":""],on:{click:function(a){a=t.$handleEvent(a),t.handleClickMask(a)}}})],1)},n=[];e.d(a,"a",function(){return i}),e.d(a,"b",function(){return n})},be97:function(t,a,e){var i=e("8b6f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("4f696392",i,!0,{sourceMap:!1,shadowMode:!1})},c159:function(t,a,e){"use strict";var i=e("9ae0"),n=e.n(i);n.a},c7cc:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"tui-searchbox"},[e("v-uni-view",{staticClass:"tui-search-input"},[e("v-uni-view",[e("tui-icon",{attrs:{name:"search",size:16,color:"#333"}})],1),e("v-uni-input",{staticClass:"tui-input",attrs:{"confirm-type":"search",placeholder:"大家都在搜：2019退役球星",focus:!0,"auto-focus":"","placeholder-class":"tui-input-plholder"},model:{value:t.key,callback:function(a){t.key="string"===typeof a?a.trim():a},expression:"key"}}),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.key,expression:"key"}],on:{click:function(a){a=t.$handleEvent(a),t.cleanKey(a)}}},[e("tui-icon",{attrs:{name:"close-fill",size:16,color:"#bcbcbc"}})],1)],1),e("v-uni-view",{staticClass:"tui-cancle",on:{click:function(a){a=t.$handleEvent(a),t.back(a)}}},[t._v("取消")])],1),t.history.length>0?e("v-uni-view",{staticClass:"tui-search-history"},[e("v-uni-view",{staticClass:"tui-history-header"},[e("v-uni-view",{staticClass:"tui-search-title"},[t._v("搜索历史")]),e("tui-icon",{staticClass:"tui-icon-delete",attrs:{name:"delete",size:14,color:"#333"},on:{click:function(a){a=t.$handleEvent(a),t.openActionSheet(a)}}})],1),e("v-uni-view",{staticClass:"tui-history-content"},[t._l(t.history,function(a,i){return[e("tui-tag",{key:i+"_0",attrs:{type:"gray",shape:"circle"}},[t._v(t._s(a))])]})],2)],1):t._e(),e("v-uni-view",{staticClass:"tui-search-hot"},[e("v-uni-view",{staticClass:"tui-hot-header"},[e("v-uni-view",{staticClass:"tui-search-title"},[t._v("大家正在搜")])],1),e("v-uni-view",{staticClass:"tui-hot-content"},[t._l(t.hot,function(a,i){return[e("tui-tag",{key:i+"_0",attrs:{type:"gray",shape:"circle"}},[t._v(t._s(a))])]})],2)],1),e("tui-actionsheet",{attrs:{show:t.showActionSheet,tips:t.tips},on:{click:function(a){a=t.$handleEvent(a),t.itemClick(a)},cancel:function(a){a=t.$handleEvent(a),t.closeActionSheet(a)}}})],1)},n=[];e.d(a,"a",function(){return i}),e.d(a,"b",function(){return n})},c921:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.visible?e("v-uni-view",{staticClass:"tui-tag-class",class:[t.size?"tui-tag-"+t.size:"tui-tag",t.getClassName(t.shape,t.plain),t.getTypeClass(t.type,t.plain)],on:{click:function(a){a=t.$handleEvent(a),t.handleClick(a)}}},[t._t("default")],2):t._e()},n=[];e.d(a,"a",function(){return i}),e.d(a,"b",function(){return n})},dfe5:function(t,a,e){"use strict";e.r(a);var i=e("6ad8"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,function(){return i[t]})}(o);a["default"]=n.a},e09f:function(t,a,e){a=t.exports=e("2350")(!1),a.push([t.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* color start*/.tui-primary[data-v-a5bc2e14]{background:#5677fc!important;color:#fff}.tui-light-primary[data-v-a5bc2e14]{background:#5c8dff!important;color:#fff}.tui-dark-primary[data-v-a5bc2e14]{background:#4a67d6!important;color:#fff}.tui-dLight-primary[data-v-a5bc2e14]{background:#4e77d9!important;color:#fff}.tui-danger[data-v-a5bc2e14]{background:#ed3f14!important;color:#fff}.tui-red[data-v-a5bc2e14]{background:#ff201f!important;color:#fff}.tui-warning[data-v-a5bc2e14]{background:#ff7900!important;color:#fff}.tui-green[data-v-a5bc2e14]{background:#19be6b!important;color:#fff}.tui-high-green[data-v-a5bc2e14]{background:#52dcae!important;color:#52dcae}.tui-black[data-v-a5bc2e14]{background:#000!important;color:#fff}.tui-white[data-v-a5bc2e14]{background:#fff!important;color:#333!important}.tui-translucent[data-v-a5bc2e14]{background:rgba(0,0,0,.7)}.tui-light-black[data-v-a5bc2e14]{background:#333!important}.tui-gray[data-v-a5bc2e14]{background:#ededed!important}.tui-phcolor-gray[data-v-a5bc2e14]{background:#ccc!important}.tui-divider-gray[data-v-a5bc2e14]{background:#eaeef1!important}.tui-btn-gray[data-v-a5bc2e14]{background:#ededed!important;color:#999!important}.tui-hover-gray[data-v-a5bc2e14]{background:#f7f7f9!important}.tui-bg-gray[data-v-a5bc2e14]{background:#fafafa!important}.tui-light-blue[data-v-a5bc2e14]{background:#ecf6fd;color:#4dabeb!important}.tui-light-brownish[data-v-a5bc2e14]{background:#fcebef;color:#8a5966!important}.tui-light-orange[data-v-a5bc2e14]{background:#fef5eb;color:#faa851!important}.tui-light-green[data-v-a5bc2e14]{background:#e8f6e8;color:#44cf85!important}.tui-primary-outline[data-v-a5bc2e14]:after{border:1px solid #5677fc!important}.tui-primary-outline[data-v-a5bc2e14]{color:#5677fc!important;background:none}.tui-danger-outline[data-v-a5bc2e14]{color:#ed3f14!important;background:none}.tui-danger-outline[data-v-a5bc2e14]:after{border:1px solid #ed3f14!important}.tui-red-outline[data-v-a5bc2e14]{color:#ff201f!important;background:none}.tui-red-outline[data-v-a5bc2e14]:after{border:1px solid #ff201f!important}.tui-warning-outline[data-v-a5bc2e14]{color:#ff7900!important;background:none}.tui-warning-outline[data-v-a5bc2e14]:after{border:1px solid #ff7900!important}.tui-green-outline[data-v-a5bc2e14]{color:#44cf85!important;background:none}.tui-green-outline[data-v-a5bc2e14]:after{border:1px solid #44cf85!important}.tui-high-green-outline[data-v-a5bc2e14]{color:#52dcae!important;background:none}.tui-high-green-outline[data-v-a5bc2e14]:after{border:1px solid #52dcae!important}.tui-gray-outline[data-v-a5bc2e14]{color:#999!important;background:none}.tui-gray-outline[data-v-a5bc2e14]:after{border:1px solid #ccc!important}.tui-black-outline[data-v-a5bc2e14]{color:#333!important;background:none}.tui-black-outline[data-v-a5bc2e14]:after{border:1px solid #333!important}.tui-white-outline[data-v-a5bc2e14]{color:#fff!important;background:none}.tui-white-outline[data-v-a5bc2e14]:after{border:1px solid #fff!important}\n\n/* color end*/\n\n/* tag start*/.tui-tag[data-v-a5bc2e14]{padding:%?16?% %?26?%;font-size:%?28?%;border-radius:%?6?%;\n  /* display: inline-block;\n  vertical-align: middle; */line-height:%?28?%}.tui-tag-small[data-v-a5bc2e14]{padding:%?10?% %?16?%;font-size:%?24?%;border-radius:%?6?%;\n  /* display: inline-block;\n  vertical-align: middle; */line-height:%?24?%}.tui-tag-outline[data-v-a5bc2e14]{position:relative;background:none;color:#5677fc}.tui-tag-outline[data-v-a5bc2e14]:after{content:"";position:absolute;width:200%;height:200%;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5);-webkit-box-sizing:border-box;box-sizing:border-box;left:0;top:0;border-radius:%?80?%;border:1px solid #5677fc}.tui-tag-fillet[data-v-a5bc2e14]{border-radius:%?50?%}.tui-white.tui-tag-fillet[data-v-a5bc2e14]:after{border-radius:%?80?%}.tui-tag-outline-fillet[data-v-a5bc2e14]:after{border-radius:%?80?%}.tui-tag-fillet-left[data-v-a5bc2e14]{border-radius:%?50?% 0 0 %?50?%}.tui-tag-fillet-right[data-v-a5bc2e14]{border-radius:0 %?50?% %?50?% 0}.tui-tag-fillet-left.tui-tag-outline[data-v-a5bc2e14]:after{border-radius:%?100?% 0 0 %?100?%}.tui-tag-fillet-right.tui-tag-outline[data-v-a5bc2e14]:after{border-radius:0 %?100?% %?100?% 0}\n\n/* tag end*/',""])},e9b9:function(t,a,e){"use strict";e.r(a);var i=e("b06b"),n=e("dfe5");for(var o in n)"default"!==o&&function(t){e.d(a,t,function(){return n[t]})}(o);e("c159");var r=e("2877"),c=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"a9fac8a8",null);a["default"]=c.exports},ef78:function(t,a,e){var i=e("e09f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("5d14e3d9",i,!0,{sourceMap:!1,shadowMode:!1})},f7fa:function(t,a,e){"use strict";e.r(a);var i=e("c921"),n=e("a4f5");for(var o in n)"default"!==o&&function(t){e.d(a,t,function(){return n[t]})}(o);e("a5c8");var r=e("2877"),c=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"a5bc2e14",null);a["default"]=c.exports}}]);