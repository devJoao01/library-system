(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{470:function(t,e,o){var content=o(481);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(54).default)("dd2bce3c",content,!0,{sourceMap:!1})},480:function(t,e,o){"use strict";o(470)},481:function(t,e,o){var r=o(53)((function(i){return i[1]}));r.push([t.i,".title[data-v-19ca356a]{display:inline-block;font-size:20px;text-align:center}form[data-v-19ca356a]{display:flex;flex-direction:column;gap:15px}.form-layout[data-v-19ca356a]{background:#fff;border-radius:10px;box-shadow:0 3px 6px rgba(0,0,0,.2);padding:120px 0}.form-group button[data-v-19ca356a]{background-color:#000;border-radius:3px;color:#fff;font-weight:700;padding:7px 17px;transition:all .3s ease}.form-group button[data-v-19ca356a]:hover{background-color:#dcdcdd;color:#000}@media (min-width:320px) and (max-width:767px){.title[data-v-19ca356a]{border-bottom:2px solid #000;font-size:16px}.form-group button[data-v-19ca356a]{width:100%}}",""]),r.locals={},t.exports=r},484:function(t,e,o){"use strict";o.r(e);o(24),o(61),o(29),o(5);var r={data:function(){return{name:"",email:"",userType:"",funcionarioId:"",tel:"",message:""}},methods:{toggleFuncionarioField:function(){this.userType}}},n=(o(480),o(55)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"container"},[e("div",{staticClass:"form-layout"},[e("form",{staticClass:"col-lg-6 mx-auto",attrs:{action:"",method:"POST"}},[t._m(0),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"name"}},[t._v("Nome")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nome",minLength:"3",autocomplete:"name",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"email"}},[t._v("E-mail")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"E-mail",autocomplete:"email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"user-type"}},[t._v("Tipo de Cadastro")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.userType,expression:"userType"}],staticClass:"form-control",attrs:{required:""},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.userType=e.target.multiple?o:o[0]}}},[e("option",{attrs:{value:""}},[t._v("Selecione o tipo de usuário")]),t._v(" "),e("option",{attrs:{value:"cliente"}},[t._v("Cliente")]),t._v(" "),e("option",{attrs:{value:"funcionario"}},[t._v("Funcionário")])])]),t._v(" "),"funcionario"===t.userType?e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"funcionario-id"}},[t._v("ID do Funcionário")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.funcionarioId,expression:"funcionarioId"}],staticClass:"form-control",attrs:{type:"text",required:"",placeholder:"ID do Funcionário"},domProps:{value:t.funcionarioId},on:{input:function(e){e.target.composing||(t.funcionarioId=e.target.value)}}})]):t._e(),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"tel"}},[t._v("Telefone")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tel,expression:"tel"}],staticClass:"form-control",attrs:{type:"tel",placeholder:"Telefone",minLength:"14",autocomplete:"tel",required:""},domProps:{value:t.tel},on:{input:function(e){e.target.composing||(t.tel=e.target.value)}}})]),t._v(" "),t._m(2)])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"title"},[t("h2",[this._v("Registre-se")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"form-group"},[e("div",{staticClass:"password"},[e("label",{attrs:{for:"password"}},[t._v("Senha")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{id:"password",type:"password",autocomplete:"new-password","aria-describedby":"smallPassword",placeholder:"Senha"}})]),t._v(" "),e("div",{attrs:{id:"pass-error"}})])},function(){var t=this._self._c;return t("div",{staticClass:"form-group submit"},[t("button",{attrs:{type:"submit"}},[this._v("Registre-se")])])}],!1,null,"19ca356a",null);e.default=component.exports}}]);