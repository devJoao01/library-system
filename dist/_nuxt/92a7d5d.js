(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{465:function(t,e,n){t.exports=n.p+"img/book.3c60f8a.jpeg"},468:function(t,e,n){var content=n(477);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("1b0a3364",content,!0,{sourceMap:!1})},475:function(t,e,n){t.exports=n.p+"img/user.2e5b578.jpg"},476:function(t,e,n){"use strict";n(468)},477:function(t,e,n){var o=n(53)((function(i){return i[1]}));o.push([t.i,'.box-content[data-v-5e8f1a92]{position:relative;z-index:1}.box-content[data-v-5e8f1a92]:before{background-color:#efefef;content:"";height:150px;position:absolute;right:0;width:100%;z-index:-1}.box-content .content .box-image[data-v-5e8f1a92]{align-items:center;display:flex;justify-content:center}.box-content .content .box-image img[data-v-5e8f1a92]{border-radius:50%;box-shadow:0 0 6px rgba(0,0,0,.3);display:block;height:auto;width:200px}.box-content .card[data-v-5e8f1a92]{border:none}.box-content .card .card-thumb[data-v-5e8f1a92]{display:flex;justify-content:center;margin-bottom:20px}.box-content .card .card-body .status span[data-v-5e8f1a92]{background-color:green;border-radius:30px;color:#fff;display:block;padding:3px;text-align:center}',""]),o.locals={},t.exports=o},483:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this._self._c;return t("div",{staticClass:"box-image"},[t("img",{attrs:{src:n(475),alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"title"},[t("h2",[this._v("SEUS LIVROS")])])},function(){var t=this._self._c;return t("div",{staticClass:"card-thumb"},[t("img",{attrs:{src:n(465),alt:"book"}})])},function(){var t=this._self._c;return t("div",{staticClass:"status"},[t("span",[this._v("voce esta com este livro")])])}],r=n(17),c=(n(94),n(42),{data:function(){return{cards:[]}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$get("https://jsonplaceholder.typicode.com/posts");case 3:n=e.sent,t.cards=n.slice(0,2),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching data:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}),d=(n(476),n(55)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container-fluid box-content"},[e("div",{staticClass:"container"},[e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("div",{staticClass:"page-apresentation"},[t._m(1),t._v(" "),e("div",{staticClass:"row"},t._l(t.cards,(function(n,o){return e("div",{key:o,staticClass:"col-lg-4"},[e("div",{staticClass:"card"},[t._m(2,!0),t._v(" "),e("div",{staticClass:"card-body"},[e("p",{domProps:{innerHTML:t._s(n.body)}}),t._v(" "),e("span",{staticClass:"mb-3 d-block",staticStyle:{"font-weight":"700"}},[t._v("DATA DE ENTREGA: 12/04/2025")]),t._v(" "),t._m(3,!0),t._v(" "),e("button",{staticClass:"btn btn-danger mt-2 w-100"},[t._v("DEVOLVER")])])])])})),0)])])])])}),o,!1,null,"5e8f1a92",null);e.default=component.exports}}]);