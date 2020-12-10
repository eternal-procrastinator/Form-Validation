(function(e){function t(t){for(var s,i,n=t[0],l=t[1],c=t[2],d=0,m=[];d<n.length;d++)i=n[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],s=!0,n=1;n<r.length;n++){var l=r[n];0!==a[l]&&(s=!1)}s&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var s={},a={app:0},o=[];function i(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=s,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(r,s,function(t){return e[t]}.bind(null,s));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/Form-Validation/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=t,n=n.slice();for(var c=0;c<n.length;c++)t(n[c]);var u=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},4500:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);var s=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit()}}},[r("div",{staticClass:"form__group"},[r("h2",[e._v("Основные данные")]),r("div",{staticClass:"form__element"},[r("div",{staticClass:"form__content"},[r("label",{staticClass:"form__text required",attrs:{for:"lastName"}},[e._v("Фамилия")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.lastName,expression:"user.lastName"}],staticClass:"control__text",attrs:{type:"text",id:"lastName",name:"lastName"},domProps:{value:e.user.lastName},on:{blur:function(t){return e.$v.user.lastName.$touch()},input:function(t){t.target.composing||e.$set(e.user,"lastName",t.target.value)}}})]),e.$v.user.lastName.$error?r("div",{staticClass:"form__error"},[e.$v.user.town.alpha?e.$v.user.lastName.required?e._e():r("div",{staticClass:"invalid-feedback"},[e._v('Поле "Фамилия" обязательно для заполнения')]):r("div",{staticClass:"invalid-feedback"},[e._v('Поле "Фамилия" должно содержать только буквы')])]):e._e()]),r("div",{staticClass:"form__element"},[r("div",{staticClass:"form__content"},[r("label",{staticClass:"form__text required",attrs:{for:"firstName"}},[e._v("Имя")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.firstName,expression:"user.firstName"}],staticClass:"control__text",attrs:{type:"text",id:"firstName",name:"firstName"},domProps:{value:e.user.firstName},on:{blur:function(t){return e.$v.user.firstName.$touch()},input:function(t){t.target.composing||e.$set(e.user,"firstName",t.target.value)}}})]),e.$v.user.firstName.$error?r("div",{staticClass:"form__error"},[e.$v.user.town.alpha?e.$v.user.firstName.required?e._e():r("div",{staticClass:"invalid-feedback"},[e._v('Поле "Имя" обязательно для заполнения')]):r("div",{staticClass:"invalid-feedback"},[e._v('Поле "Имя" должно содержать только буквы')])]):e._e()]),r("div",{staticClass:"form__element"},[r("div",{staticClass:"form__content"},[r("label",{staticClass:"form__text",attrs:{for:"secondName"}},[e._v("Отчество")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.secondName,expression:"user.secondName"}],staticClass:"control__text",attrs:{type:"text",id:"secondName",name:"secondName"},domProps:{value:e.user.secondName},on:{input:function(t){t.target.composing||e.$set(e.user,"secondName",t.target.value)}}})])]),r("div",{staticClass:"form__element"},[r("div",{staticClass:"form__content"},[r("label",{staticClass:"form__text required",attrs:{for:"birthDate"}},[e._v("Дата рождения")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.birthDate,expression:"user.birthDate"}],staticClass:"control__date",attrs:{type:"date",id:"birthDate",name:"birthDate"},domProps:{value:e.user.birthDate},on:{blur:function(t){return e.$v.user.birthDate.$touch()},input:function(t){t.target.composing||e.$set(e.user,"birthDate",t.target.value)}}})]),e.$v.user.birthDate.$error?r("div",{staticClass:"form__error"},[e.$v.user.birthDate.required?e._e():r("div",{staticClass:"invalid-feedback"},[e._v('Поле "Дата рождения" обязательно для заполнения')])]):e._e()]),r("div",{staticClass:"form__element"},[r("div",{staticClass:"form__content"},[r("label",{staticClass:"form__text required",attrs:{for:"phoneNumber"}},[e._v("Номер телефона")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.phoneNumber,expression:"user.phoneNumber"}],staticClass:"control__text phone",attrs:{type:"text",placeholder:"7##########",id:"phoneNumber",name:"phoneNumber"},domProps:{value:e.user.phoneNumber},on:{blur:function(t){return e.$v.user.phoneNumber.$touch()},input:function(t){t.target.composing||e.$set(e.user,"phoneNumber",t.target.value)}}})]),e.$v.user.phoneNumber.$error?r("div",{staticClass:"form__error"},[e.$v.user.phoneNumber.$invalid?r("div",{staticClass:"invalid-feedback"},[e._v("Неверный формат номера телефона")]):r("div",{staticClass:"invalid-feedback"},[e._v('Поле "Номер телефона" обязательно для заполнения')])]):e._e()]),r("div",{staticClass:"form__element"},[r("div",{staticClass:"form__content"},[r("label",{staticClass:"form__text",attrs:{for:"sex"}},[e._v("Пол")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.user.sex,expression:"user.sex"}],staticClass:"control__select",attrs:{id:"sex"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.user,"sex",t.target.multiple?r:r[0])}}},[r("option",{attrs:{disabled:"",value:""}},[e._v("Выберите один из вариантов")]),r("option",[e._v("М")]),r("option",[e._v("Ж")])])])]),r("div",{staticClass:"form__element"},[r("div",{staticClass:"form__content"},[r("span",{staticClass:"form__text required"},[e._v("Тип клиента")]),r("div",{staticClass:"control__checkbox"},[r("div",[r("label",{attrs:{for:"vip"}},[e._v("VIP")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.clientType,expression:"user.clientType"}],attrs:{type:"checkbox",value:"vip",id:"vip"},domProps:{checked:Array.isArray(e.user.clientType)?e._i(e.user.clientType,"vip")>-1:e.user.clientType},on:{change:[function(t){var r=e.user.clientType,s=t.target,a=!!s.checked;if(Array.isArray(r)){var o="vip",i=e._i(r,o);s.checked?i<0&&e.$set(e.user,"clientType",r.concat([o])):i>-1&&e.$set(e.user,"clientType",r.slice(0,i).concat(r.slice(i+1)))}else e.$set(e.user,"clientType",a)},function(t){return e.$v.user.clientType.$touch()}]}})]),r("div",[r("label",{attrs:{for:"problem"}},[e._v("Проблемные")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.clientType,expression:"user.clientType"}],attrs:{type:"checkbox",value:"problem",id:"problem"},domProps:{checked:Array.isArray(e.user.clientType)?e._i(e.user.clientType,"problem")>-1:e.user.clientType},on:{change:[function(t){var r=e.user.clientType,s=t.target,a=!!s.checked;if(Array.isArray(r)){var o="problem",i=e._i(r,o);s.checked?i<0&&e.$set(e.user,"clientType",r.concat([o])):i>-1&&e.$set(e.user,"clientType",r.slice(0,i).concat(r.slice(i+1)))}else e.$set(e.user,"clientType",a)},function(t){return e.$v.user.clientType.$touch()}]}})]),r("div",[r("label",{attrs:{for:"omc"}},[e._v("ОМС")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.clientType,expression:"user.clientType"}],attrs:{type:"checkbox",value:"omc",id:"omc"},domProps:{checked:Array.isArray(e.user.clientType)?e._i(e.user.clientType,"omc")>-1:e.user.clientType},on:{change:[function(t){var r=e.user.clientType,s=t.target,a=!!s.checked;if(Array.isArray(r)){var o="omc",i=e._i(r,o);s.checked?i<0&&e.$set(e.user,"clientType",r.concat([o])):i>-1&&e.$set(e.user,"clientType",r.slice(0,i).concat(r.slice(i+1)))}else e.$set(e.user,"clientType",a)},function(t){return e.$v.user.clientType.$touch()}]}})])])]),e.$v.user.clientType.$error?r("div",[e.$v.user.clientType.required?e._e():r("div",{staticClass:"invalid-feedback"},[e._v('Поле "Тип клиента" обязательно для заполнения')])]):e._e()]),r("div",{staticClass:"form__element"},[r("div",{staticClass:"form__content"},[r("span",{staticClass:"form__text"},[e._v("Лечащий доктор")]),r("div",{staticClass:"control__checkbox"},[r("div",[r("label",{attrs:{for:"ivanov"}},[e._v("Иванов")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.doctor,expression:"user.doctor"}],attrs:{type:"radio",name:"doctor",value:"ivanov",id:"ivanov"},domProps:{checked:e._q(e.user.doctor,"ivanov")},on:{change:function(t){return e.$set(e.user,"doctor","ivanov")}}})]),r("div",[r("label",{attrs:{for:"zaharov"}},[e._v("Захаров")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.doctor,expression:"user.doctor"}],attrs:{type:"radio",name:"doctor",value:"zaharov",id:"zaharov"},domProps:{checked:e._q(e.user.doctor,"zaharov")},on:{change:function(t){return e.$set(e.user,"doctor","zaharov")}}})]),r("div",[r("label",{attrs:{for:"chernyshova"}},[e._v("Чернышева")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.doctor,expression:"user.doctor"}],attrs:{type:"radio",name:"doctor",value:"chernyshova",id:"chernyshova"},domProps:{checked:e._q(e.user.doctor,"chernyshova")},on:{change:function(t){return e.$set(e.user,"doctor","chernyshova")}}})])])])]),r("div",{staticClass:"form__element"},[r("div",{staticClass:"form__content"},[r("label",{staticClass:"form__text required",attrs:{for:"email"}},[e._v("E-mail")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"control__text",attrs:{type:"email",id:"email",name:"email"},domProps:{value:e.user.email},on:{blur:function(t){return e.$v.user.email.$touch()},input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),e.$v.user.email.$error?r("div",{staticClass:"form__error"},[e.$v.user.email.email?e.$v.user.email.required?e._e():r("div",{staticClass:"invalid-feedback"},[e._v('Поле "E-mail" обязательно для заполнения')]):r("div",{staticClass:"invalid-feedback"},[e._v("Неверный формат e-mail")])]):e._e()]),r("div",{staticClass:"form__element"},[r("div",{staticClass:"form__content form__content--checkbox"},[r("label",{staticClass:"form__text",attrs:{for:"smsCheck"}},[e._v("Не отправлять СМС")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.smsCheck,expression:"user.smsCheck"}],staticClass:"checkbox",attrs:{type:"checkbox",name:"smsCheck",id:"smsCheck"},domProps:{checked:Array.isArray(e.user.smsCheck)?e._i(e.user.smsCheck,null)>-1:e.user.smsCheck},on:{change:function(t){var r=e.user.smsCheck,s=t.target,a=!!s.checked;if(Array.isArray(r)){var o=null,i=e._i(r,o);s.checked?i<0&&e.$set(e.user,"smsCheck",r.concat([o])):i>-1&&e.$set(e.user,"smsCheck",r.slice(0,i).concat(r.slice(i+1)))}else e.$set(e.user,"smsCheck",a)}}})])])]),r("div",{staticClass:"form__group"},[r("h2",[e._v("Адрес")]),r("div",{staticClass:"form__element"},[r("div",{staticClass:"form__content"},[r("label",{staticClass:"form__text",attrs:{for:"index"}},[e._v("Индекс")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.index,expression:"user.index"}],staticClass:"control__text",attrs:{type:"text",id:"index"},domProps:{value:e.user.index},on:{input:function(t){t.target.composing||e.$set(e.user,"index",t.target.value)}}})])]),r("div",{staticClass:"form__element"},[r("div",{staticClass:"form__content"},[r("label",{staticClass:"form__text",attrs:{for:"country"}},[e._v("Страна")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.country,expression:"user.country"}],staticClass:"control__text",attrs:{type:"text",id:"country"},domProps:{value:e.user.country},on:{input:function(t){t.target.composing||e.$set(e.user,"country",t.target.value)}}})])]),r("div",{staticClass:"form__element"},[r("div",{staticClass:"form__content"},[r("label",{staticClass:"form__text",attrs:{for:"region"}},[e._v("Область")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.region,expression:"user.region"}],staticClass:"control__text",attrs:{type:"text",id:"region"},domProps:{value:e.user.region},on:{input:function(t){t.target.composing||e.$set(e.user,"region",t.target.value)}}})])]),r("div",{staticClass:"form__element"},[r("div",{staticClass:"form__content"},[r("label",{staticClass:"form__text required",attrs:{for:"town"}},[e._v("Город")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.town,expression:"user.town"}],staticClass:"control__text",attrs:{type:"text",id:"town"},domProps:{value:e.user.town},on:{blur:function(t){return e.$v.user.town.$touch()},input:function(t){t.target.composing||e.$set(e.user,"town",t.target.value)}}})]),e.$v.user.town.$error?r("div",{staticClass:"form__error"},[e.$v.user.town.alpha?e.$v.user.town.required?e._e():r("div",{staticClass:"invalid-feedback"},[e._v('Поле "Город" обязательно для заполнения')]):r("div",{staticClass:"invalid-feedback"},[e._v('Поле "Город" должно содержать только буквы')])]):e._e()]),r("div",{staticClass:"form__element"},[r("div",{staticClass:"form__content"},[r("label",{staticClass:"form__text",attrs:{for:"street"}},[e._v("Улица")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.street,expression:"user.street"}],staticClass:"control__text",attrs:{type:"text",id:"street"},domProps:{value:e.user.street},on:{input:function(t){t.target.composing||e.$set(e.user,"street",t.target.value)}}})])]),r("div",{staticClass:"form__element"},[r("div",{staticClass:"form__content"},[r("label",{staticClass:"form__text",attrs:{for:"house"}},[e._v("Дом")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.house,expression:"user.house"}],staticClass:"control__text",attrs:{type:"text",id:"house"},domProps:{value:e.user.house},on:{input:function(t){t.target.composing||e.$set(e.user,"house",t.target.value)}}})])])]),r("div",{staticClass:"form__group"},[r("h2",[e._v("Документ")]),r("div",{staticClass:"form__element"},[r("div",{staticClass:"form__content"},[r("label",{staticClass:"form__text required",attrs:{for:"documentType"}},[e._v("Тип документа")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.user.documentType,expression:"user.documentType"}],staticClass:"control__select",attrs:{id:"documentType"},on:{blur:function(t){return e.$v.user.documentType.$touch()},change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.user,"documentType",t.target.multiple?r:r[0])}}},[r("option",{attrs:{disabled:"",value:""}},[e._v("Выберите один из вариантов")]),r("option",[e._v("Паспорт")]),r("option",[e._v("Свидетельство о рождении")]),r("option",[e._v("Вод. удостворение")])])]),e.$v.user.documentType.$error?r("div",{staticClass:"form__error"},[e.$v.user.documentType.required?e._e():r("div",{staticClass:"invalid-feedback"},[e._v('Поле "Тип документа" обязательно для заполнения')])]):e._e()]),r("div",{staticClass:"form__element"},[r("div",{staticClass:"form__content"},[r("label",{staticClass:"form__text",attrs:{for:"docSeries"}},[e._v("Серия")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.docSeries,expression:"user.docSeries"}],staticClass:"control__text",attrs:{type:"text",id:"docSeries"},domProps:{value:e.user.docSeries},on:{input:function(t){t.target.composing||e.$set(e.user,"docSeries",t.target.value)}}})])]),r("div",{staticClass:"form__element"},[r("div",{staticClass:"form__content"},[r("label",{staticClass:"form__text",attrs:{for:"docNumber"}},[e._v("Номер")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.docNumber,expression:"user.docNumber"}],staticClass:"control__text",attrs:{type:"text",id:"docNumber"},domProps:{value:e.user.docNumber},on:{input:function(t){t.target.composing||e.$set(e.user,"docNumber",t.target.value)}}})])]),r("div",{staticClass:"form__element"},[r("div",{staticClass:"form__content"},[r("label",{staticClass:"form__text",attrs:{for:"docOrg"}},[e._v("Кем выдан")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.docOrg,expression:"user.docOrg"}],staticClass:"control__text",attrs:{type:"text",id:"docOrg"},domProps:{value:e.user.docOrg},on:{input:function(t){t.target.composing||e.$set(e.user,"docOrg",t.target.value)}}})])]),r("div",{staticClass:"form__element"},[r("div",{staticClass:"form__content"},[r("label",{staticClass:"form__text required",attrs:{for:"docDate"}},[e._v("Дата выдачи")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.docDate,expression:"user.docDate"}],staticClass:"control__date",attrs:{type:"date",id:"docDate",name:"docDate"},domProps:{value:e.user.docDate},on:{blur:function(t){return e.$v.user.docDate.$touch()},input:function(t){t.target.composing||e.$set(e.user,"docDate",t.target.value)}}})]),e.$v.user.docDate.$error?r("div",{staticClass:"form__error"},[e.$v.user.docDate.required?e._e():r("div",{staticClass:"invalid-feedback"},[e._v('Поле "Дата выдачи" обязательно для заполнения')])]):e._e()])]),r("h5",[e._v(" Поле обязательное для заполнения")]),r("div",{staticClass:"form__group"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{submit:function(t){return e.handleSubmit()}}},[e._v("Регистрация")])])])])},o=[],i=r("b5ae"),n={name:"App",data(){return{user:{firstName:null,secondName:null,lastName:null,birthDate:null,phoneNumber:null,sex:null,clientType:[],doctor:null,email:null,smsCheck:!1,index:null,country:null,region:null,town:null,street:null,house:null,documentType:null,docSeries:null,docNumber:null,docOrg:null,docDate:null}}},created(){},mounted(){},validations:{user:{firstName:{required:i["required"],alpha:e=>/^[а-яё]*$/i.test(e)},lastName:{required:i["required"],alpha:e=>/^[а-яё]*$/i.test(e)},birthDate:{required:i["required"]},phoneNumber:{validFormat:e=>/^7\d{10}$/.test(e)},clientType:{required:i["required"]},email:{required:i["required"],email:i["email"]},town:{required:i["required"],alpha:e=>/^[а-яё]*$/i.test(e)},documentType:{required:i["required"]},docDate:{required:i["required"]}}},methods:{handleSubmit(){if(this.$v.$invalid)alert("\n\nОбязательные поля не заполнены. Клиент не создан.");else{alert(`\n\nСоздан клиент:\n\n${this.user.firstName} ${this.user.lastName}`);for(let e in this.user)this.user[e]=null;this.user["clientType"]=[],this.user["smsCheck"]=!1}}}},l=n,c=(r("cf25"),r("2877")),u=Object(c["a"])(l,a,o,!1,null,null,null),d=u.exports,m=r("f3e7");s["a"].config.devtools=!0,s["a"].config.productionTip=!1,s["a"].use(m["a"]),new s["a"]({render:e=>e(d)}).$mount("#app")},cf25:function(e,t,r){"use strict";r("4500")}});
//# sourceMappingURL=app.208fd0d2.js.map