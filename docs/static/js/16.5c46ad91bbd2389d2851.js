webpackJsonp([16],{Pran:function(t,e){},n3SW:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"todo"}},[i("el-card",[i("div",{staticClass:"todo-card-header",attrs:{slot:"header"},slot:"header"},[i("i",{staticClass:"el-icon-arrow-down allCheckedIcon",class:{active:t.allChecked},on:{click:function(e){t.allChecked=!t.allChecked}}}),t._v(" "),i("el-input",{staticClass:"titleInput",attrs:{placeholder:"Todo List",size:"small",maxlength:20,clearable:""},model:{value:t.titileInput,callback:function(e){t.titileInput=e},expression:"titileInput"}}),t._v(" "),i("div",{staticClass:"newTag"},[t.inputVisible?i("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{maxlength:15,size:"small"},on:{blur:t.addItem},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addItem(e):null}},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}}):i("i",{staticClass:"el-icon-plus button-new-tag",on:{click:t.showInput}})],1)],1),t._v(" "),i("div",{staticClass:"todo-card-body"},[i("el-checkbox-group",{model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[i("transition-group",{staticClass:"list",attrs:{name:"el-zoom-in-top",tag:"div"}},t._l(t.list,function(e,s){return i("div",{key:s,staticClass:"list-item"},[i("el-checkbox",{staticClass:"list-item-checkbox",attrs:{label:e,title:e}}),t._v(" "),i("i",{staticClass:"el-icon-close",on:{click:function(e){e.stopPropagation(),t.deleteItem(s)}}})],1)}))],1),t._v(" "),t.list.length>0?t._e():i("p",{staticClass:"completed"},[t._v("没有要做的事情^_^")])],1),t._v(" "),i("div",{staticClass:"todo-card-footer"},[i("span",{class:{selected:t.allChecked}},[t._v("统计结果")]),t._v(" "),i("span",{class:{selected:!t.allChecked}},[t._v(t._s(t.list.length-t.checked.length)+"项未完成")])])])],1)},staticRenderFns:[]};var l=i("vSla")({name:"todo",data:function(){return{list:["1","2","3","4","5","6","7"],checked:["4","5","6"],titileInput:"任务组",inputVisible:!1,inputValue:""}},computed:{allChecked:{get:function(){return this.checked.length===this.list.length},set:function(t){this.checked=t?this.list.slice():[]}}},watch:{list:function(){var t=this,e=[];this.checked.forEach(function(i){t.list.forEach(function(t){i===t&&e.push(t)})}),this.checked=e},checked:function(t,e){var i=this;if(t.length-e.length==1){var s=t[t.length-1];this.list.includes(s)&&this.$notify.success("您勾选了"+s)}else if(t.length-e.length>1){var l=0;t.forEach(function(t){i.list.includes(t)&&(i.$notify({type:"success",message:"您勾选了"+t,offset:60*l}),l++)})}}},methods:{deleteItem:function(t){this.list.splice(t,1)},addItem:function(){var t=this.inputValue;t&&this.list.push(t),this.inputVisible=!1,this.inputValue=""},showInput:function(){var t=this;this.inputVisible=!0,this.$nextTick(function(){t.$refs.saveTagInput.$refs.input.focus()})}}},s,!1,function(t){i("Pran")},null,null);e.default=l.exports}});