(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{451:function(t,r,e){"use strict";e.r(r);var o=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"works-block"},[e("div",{staticClass:"works-block__img-wrapper"},[e("img",{staticClass:"works-block__img",attrs:{src:t.remotePhotoPath,alt:"Превью работы"}}),e("div",{staticClass:"works-block__tags"},[e("tags",{attrs:{tags:t.tagsArray,interactive:!1}})],1)]),e("div",{staticClass:"works-block__info"},[e("h5",{staticClass:"works-block__title"},[t._v(t._s(t.work.title)),e("div",{staticClass:"works-block__desc"},[e("p",[t._v(t._s(t.work.description))])])]),e("a",{staticClass:"works-block__link",attrs:{href:t.work.link}},[t._v(t._s(t.work.link))]),e("div",{staticClass:"works-block__btns"},[e("button",{staticClass:"btn btn--works-block-edit",attrs:{type:"button"},on:{click:t.showFormAndTurnEditModeOn}},[t._v("Править")]),e("button",{staticClass:"btn btn--works-block-remove",attrs:{type:"button"},on:{click:t.removeExistedWork}},[t._v("Удалить")])])])])};o._withStripped=!0;var n=e(97);function s(t,r,e,o,n,s,i){try{var c=t[s](i),a=c.value}catch(t){return void e(t)}c.done?r(a):Promise.resolve(a).then(o,n)}function i(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}var c={components:{tags:function(){return e.e(1).then(e.bind(null,454))}},props:{work:Object},data:function(){return{}},computed:{remotePhotoPath:function(){return"https://webdev-api.loftschool.com//".concat(this.work.photo)},tagsArray:function(){return this.work.techs.split(",")}},methods:function(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{},o=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(r){i(t,r,e[r])})}return t}({},Object(n.b)("works",["removeWork"]),Object(n.d)("works",["SHOW_FORM","TURN_EDIT_MODE_ON","SET_EDITED_WORK"]),{removeExistedWork:function(){var t,r=(t=regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.removeWork(this.work.id);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.error(t.t0.message);case 8:case"end":return t.stop()}},t,this,[[0,5]])}),function(){var r=this,e=arguments;return new Promise(function(o,n){var i=t.apply(r,e);function c(t){s(i,o,n,c,a,"next",t)}function a(t){s(i,o,n,c,a,"throw",t)}c(void 0)})});return function(){return r.apply(this,arguments)}}(),showFormAndTurnEditModeOn:function(){this.TURN_EDIT_MODE_ON(this.work),this.SHOW_FORM()}})},a=e(96),l=Object(a.a)(c,o,[],!1,null,null,null);l.options.__file="src/admin/components/work-block.vue";r.default=l.exports}}]);