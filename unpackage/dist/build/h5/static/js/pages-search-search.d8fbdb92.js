(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-search-search"],{"0618":function(t,a,c){"use strict";var e=c("cd9c"),o=c.n(e);o.a},"0b258":function(t,a,c){"use strict";c.r(a);var e=c("7841"),o=c.n(e);for(var r in e)"default"!==r&&function(t){c.d(a,t,(function(){return e[t]}))}(r);a["default"]=o.a},"2cf2":function(t,a,c){var e=c("24fb");a=e(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */.columns[data-v-f801ccee]{flex-flow:column nowrap}.row[data-v-f801ccee]{flex-flow:row wrap}.border[data-v-f801ccee]{border:%?1?% solid #ccc!important}.border-bottom[data-v-f801ccee]{border-bottom:%?1?% solid #ffcd20!important}.borderr-16[data-v-f801ccee]{border-radius:%?16?%!important}.padding-tb-mi[data-v-f801ccee]{padding-top:%?5?%;padding-bottom:%?8?%}.cl-00[data-v-f801ccee]{color:#000!important}.cl-11[data-v-f801ccee]{color:#111!important}.cl-22[data-v-f801ccee]{color:#222!important}.cl-33[data-v-f801ccee]{color:#333!important}.cl-44[data-v-f801ccee]{color:#444!important}.cl-55[data-v-f801ccee]{color:#555!important}.cl-66[data-v-f801ccee]{color:#666!important}.cl-77[data-v-f801ccee]{color:#777!important}.cl-88[data-v-f801ccee]{color:#888!important}.cl-92[data-v-f801ccee]{color:#929292!important}.cl-98[data-v-f801ccee]{color:#989898!important}.cl-aa[data-v-f801ccee]{color:#aaa!important}.cl-bb[data-v-f801ccee]{color:#bbb!important}.cl-cc[data-v-f801ccee]{color:#ccc!important}.cl-dd[data-v-f801ccee]{color:#ddd!important}.cl-ee[data-v-f801ccee]{color:#eee!important}.cl-ff[data-v-f801ccee]{color:#fff!important}.cl-yl[data-v-f801ccee]{color:#ffa231!important}.cl-yellow[data-v-f801ccee]{color:#ffde4f!important}.bg-ff[data-v-f801ccee]{background-color:#fff!important}.bg-f6[data-v-f801ccee]{background-color:#f6f6f6!important}.bg-aa[data-v-f801ccee]{background-color:#aaa!important}.bg-bb[data-v-f801ccee]{background-color:#bbb!important}.bg-cc[data-v-f801ccee]{background-color:#ccc!important}.bg-dd[data-v-f801ccee]{background-color:#ddd!important}.bg-ee[data-v-f801ccee]{background-color:#eee!important}.bg-f9[data-v-f801ccee]{background-color:#f9f9f9!important}.bg-yl[data-v-f801ccee]{background-color:#ffcd20!important}.fw-7[data-v-f801ccee]{font-weight:700}.fw-6[data-v-f801ccee]{font-weight:600}.fw-5[data-v-f801ccee]{font-weight:500}.fw-4[data-v-f801ccee]{font-weight:400}.fw-3[data-v-f801ccee]{font-weight:300}.fs-14[data-v-f801ccee]{font-size:%?14?%!important}.fs-16[data-v-f801ccee]{font-size:%?16?%!important}.fs-18[data-v-f801ccee]{font-size:%?18?%!important}.fs-20[data-v-f801ccee]{font-size:%?20?%!important}.fs-22[data-v-f801ccee]{font-size:%?22?%!important}.fs-24[data-v-f801ccee]{font-size:%?24?%!important}.fs-26[data-v-f801ccee]{font-size:%?26?%!important}.fs-28[data-v-f801ccee]{font-size:%?28?%!important}.fs-30[data-v-f801ccee]{font-size:%?30?%!important}.fs-32[data-v-f801ccee]{font-size:%?32?%!important}.fs-34[data-v-f801ccee]{font-size:%?34?%!important}.fs-36[data-v-f801ccee]{font-size:%?36?%!important}.fs-38[data-v-f801ccee]{font-size:%?38?%!important}.fs-40[data-v-f801ccee]{font-size:%?40?%!important}.fs-50[data-v-f801ccee]{font-size:%?50?%!important}.fs-60[data-v-f801ccee]{font-size:%?60?%!important}.fs-70[data-v-f801ccee]{font-size:%?70?%!important}.fs-80[data-v-f801ccee]{font-size:%?80?%!important}\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.search[data-v-f801ccee]{background-color:#fff}',""]),t.exports=a},"5ece":function(t,a,c){"use strict";var e;c.d(a,"b",(function(){return o})),c.d(a,"c",(function(){return r})),c.d(a,"a",(function(){return e}));var o=function(){var t=this,a=t.$createElement,c=t._self._c||a;return c("v-uni-view",{staticClass:"search padding-bottom"},[c("TopNav",{attrs:{isShowReturn:!1}}),c("v-uni-input",{staticClass:"text-center margin-top-xl",attrs:{type:"text","confirm-type":"search",placeholder:"请输入关键字"},model:{value:t.query,callback:function(a){t.query=a},expression:"query"}}),c("v-uni-view",{staticClass:"text-center text-gray margin-top margin-bottom-sm"},[c("v-uni-text",[t._v("拿破仑")]),t._v("、"),c("v-uni-text",[t._v("巧克力")]),t._v("、"),c("v-uni-text",[t._v("芝士")]),t._v("、"),c("v-uni-text",[t._v("鲜奶")]),t._v("、"),c("v-uni-text",[t._v("坚果")]),t._v("、"),c("v-uni-text",[t._v("小食")])],1),c("v-uni-button",{staticClass:"margin-bottom margin-lr-sm",staticStyle:{"background-color":"#ffe32a",border:"none"}},[t._v("搜索")])],1)},r=[]},7841:function(t,a,c){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{query:""}}};a.default=e},a16d:function(t,a,c){"use strict";c.r(a);var e=c("5ece"),o=c("0b258");for(var r in o)"default"!==r&&function(t){c.d(a,t,(function(){return o[t]}))}(r);c("0618");var n,f=c("f0c5"),i=Object(f["a"])(o["default"],e["b"],e["c"],!1,null,"f801ccee",null,!1,e["a"],n);a["default"]=i.exports},cd9c:function(t,a,c){var e=c("2cf2");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=c("4f06").default;o("727cb649",e,!0,{sourceMap:!1,shadowMode:!1})}}]);