(function(e){function t(t){for(var r,o,s=t[0],c=t[1],l=t[2],d=0,m=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(m.length)m.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={app:0},i=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/cat-finder/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"090f":function(e,t,a){"use strict";a("a4f7")},"1a86":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e623"),a("e379"),a("5dc8"),a("37e1");var r=a("2b0e"),n=a("8c4f"),i=a("2f62"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{app:""}},[a("v-main",{staticClass:"custom-bg"},[a("router-view")],1)],1)},s=[],c={name:"App"},l=c,u=(a("034f"),a("2877")),d=a("6544"),m=a.n(d),f=a("7496"),v=a("f6c4"),h=Object(u["a"])(l,o,s,!1,null,null,null),p=h.exports;m()(h,{VApp:f["a"],VMain:v["a"]});var g=a("f309");r["a"].use(g["a"]);var b=new g["a"]({}),C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{staticClass:"row",attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"6"}},[a("LoginForm")],1)],1)},_=[],y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"ma-8 w-50",attrs:{elevation:"2"}},[r("h1",{staticClass:"text-center pt-2"},[e._v("Cat Finder")]),r("div",{staticClass:"icon__container"},[r("inline-svg",{staticClass:"icon",attrs:{width:"150",height:"150",src:a("9b19")}})],1),r("v-form",{on:{submit:function(t){return t.preventDefault(),e.logIn(t)}}},[r("v-container",[r("v-row",[r("v-col",[r("v-text-field",{staticClass:"justify-center",attrs:{value:e.username,rules:e.usernameRules,counter:14,label:"Username",required:""},on:{input:e.onUsernameChange}})],1)],1),r("v-row",[r("v-col",[r("v-text-field",{attrs:{value:e.password,rules:e.passwordRules,label:"Password",type:"password",required:""},on:{input:e.onPasswordChange}})],1)],1)],1),r("v-card-actions",{staticClass:"justify-center"},[r("v-btn",{attrs:{type:"submit",color:"primary",elevation:"2",disabled:e.isButtonDisabled,block:""}},[e.isLoading?r("v-progress-circular",{attrs:{indeterminate:"",color:"gray"}}):r("span",[e._v("Sign In")])],1)],1)],1)],1)},S=[],w=a("1da1"),A=a("5530"),O=(a("96cf"),a("6d5e")),x=a.n(O),N={name:"LoginForm",data:function(){return{usernameRules:[function(e){return!!e||"Username required"},function(e){return e.length<=14||"Username must be less than 14 characters"},function(e){return e.length>=3||"Username must contains at least 3 characters"}],passwordRules:[function(e){return!!e||"Password required"}]}},components:{InlineSvg:x.a},computed:Object(A["a"])({isButtonDisabled:function(){var e=this.$store.state.auth,t=e.username,a=e.password,r=e.isLoading;return 0===t.length||0===a.length||r||t.length>14}},Object(i["c"])("auth",["username","password","isLoading","error"])),methods:Object(A["a"])(Object(A["a"])({},Object(i["b"])("auth",["onUsernameChange","onPasswordChange"])),{},{logIn:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("auth/logIn");case 2:return t.next=4,e.$router.push("/");case 4:case"end":return t.stop()}}),t)})))()}})},E=N,k=(a("090f"),a("8336")),R=a("b0af"),V=a("99d9"),F=a("62ad"),L=a("a523"),j=a("4bd4"),G=a("490a"),T=a("0fd9b"),$=a("8654"),P=Object(u["a"])(E,y,S,!1,null,"37f5b602",null),I=P.exports;m()(P,{VBtn:k["a"],VCard:R["a"],VCardActions:V["a"],VCol:F["a"],VContainer:L["a"],VForm:j["a"],VProgressCircular:G["a"],VRow:T["a"],VTextField:$["a"]});var H={name:"LoginPage",components:{LoginForm:I}},M=H,z=(a("8598"),Object(u["a"])(M,C,_,!1,null,"1c45e462",null)),B=z.exports;m()(z,{VCol:F["a"],VRow:T["a"]});var D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("page-layout",[a("card-layout",[a("v-card",{staticClass:"pa-4",attrs:{elevation:"2"}},[a("h1",{staticClass:"pb-6 text-center display-1"},[e._v("Hey, lets find a cat for you!")]),a("p",[e._v("Before we can start searching a perfect cat for you, we need some information.")]),a("p",[e._v("Please, answer some questions and our magic deep-learning algorithm find the best match for you!")]),a("v-btn",{staticClass:"ml-auto mr-auto d-block",attrs:{color:"primary"},on:{click:e.moveToQuestions}},[e._v(" Let's go! ")])],1)],1)],1)},q=[],U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"col-6"},[e._t("default")],2)],1)],1)},W=[],Y={name:"CardLayout"},Z=Y,J=Object(u["a"])(Z,U,W,!1,null,null,null),Q=J.exports;m()(J,{VCol:F["a"],VContainer:L["a"],VRow:T["a"]});var K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"pa-0 align-start",attrs:{fluid:"","fill-height":""}},[a("the-header"),e._t("default"),a("the-footer")],2)},X=[],ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app-bar",[a("v-container",{staticClass:"d-flex justify-space-between",attrs:{fluid:""}},[a("router-link",{attrs:{to:"/"}},[a("v-icon",{staticClass:"pr-2",attrs:{color:"primary"}},[e._v("mdi-magnify")]),a("h3",{staticClass:"d-flex align-center"},[e._v("Cat Finder")])],1),a("v-btn",{attrs:{elevation:"2",color:"error"},on:{click:e.logOut}},[e._v(" Log Out ")])],1)],1)},te=[],ae={name:"TheHeader",methods:{logOut:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("logOut");case 2:return t.next=4,e.$router.push("/login");case 4:case"end":return t.stop()}}),t)})))()}}},re=ae,ne=(a("5f43"),a("40dc")),ie=a("132d"),oe=Object(u["a"])(re,ee,te,!1,null,"0893ae64",null),se=oe.exports;m()(oe,{VAppBar:ne["a"],VBtn:k["a"],VContainer:L["a"],VIcon:ie["a"]});var ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-footer",{staticClass:"justify-space-between",attrs:{app:""}},[a("span",[e._v("Made by "),a("b",[e._v("Omnicake")]),e._v(" "),a("v-icon",{attrs:{color:"error"}},[e._v("mdi-cards-heart")])],1),a("span",[e._v("Powered by "),a("v-icon",{attrs:{color:"primary"}},[e._v("mdi-vuejs")]),e._v(" & "),a("v-icon",{attrs:{color:"primary"}},[e._v("mdi-vuetify")])],1)])},le=[],ue={name:"TheFooter"},de=ue,me=a("553a"),fe=Object(u["a"])(de,ce,le,!1,null,null,null),ve=fe.exports;m()(fe,{VFooter:me["a"],VIcon:ie["a"]});var he={name:"PageLayout",components:{TheFooter:ve,TheHeader:se}},pe=he,ge=Object(u["a"])(pe,K,X,!1,null,null,null),be=ge.exports;m()(ge,{VContainer:L["a"]});var Ce={name:"MainPage",components:{PageLayout:be,CardLayout:Q},methods:{moveToQuestions:function(){this.$router.push("/finder")}}},_e=Ce,ye=Object(u["a"])(_e,D,q,!1,null,null,null),Se=ye.exports;m()(ye,{VBtn:k["a"],VCard:R["a"]});var we=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("page-layout",[a("card-layout",[e.isResultsShow?a("result-window",{on:{form:function(t){return e.setResult(!1)}}}):a("questions-form",{attrs:{"set-result":"setResult"},on:{results:function(t){return e.setResult(!0)}}})],1)],1)},Ae=[],Oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"pa-4",attrs:{elevation:"2"}},[a("v-card-title",{staticClass:"pa-0 pb-2"},[e._v("Questions - Step "+e._s(e.step)+" of 5")]),a("v-form",[1===e.step?a("step-one"):e._e(),2===e.step?a("step-two"):e._e(),3===e.step?a("step-three"):e._e(),4===e.step?a("step-four"):e._e(),5===e.step?a("step-five"):e._e()],1),a("v-card-actions",{staticClass:"justify-space-between"},[a("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.step>1,expression:"step > 1"}],staticClass:"primary mr-auto",on:{click:e.previousStep}},[e._v("Previous")]),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.step<5,expression:"step < 5"}],staticClass:"primary ml-auto",on:{click:e.nextStep}},[e._v("Next")]),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:5===e.step,expression:"step === 5"}],staticClass:"success ml-auto",attrs:{disabled:e.isFindButtonDisabled},on:{click:e.onFindClick}},[e._v(" Find! ")])],1)],1)},xe=[],Ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"pb-2"},[e._v("First of all, let's figure out some basic information:")]),a("v-text-field",{attrs:{label:"First name",rules:[e.rules.required],autofocus:"",required:""},model:{value:e.firstName,callback:function(t){e.firstName=t},expression:"firstName"}}),a("v-text-field",{attrs:{label:"Last name",rules:[e.rules.required],required:""},model:{value:e.lastName,callback:function(t){e.lastName=t},expression:"lastName"}}),a("v-dialog",{ref:"dialog",attrs:{"return-value":e.birthday,persistent:"",width:"290px"},on:{"update:returnValue":function(t){e.birthday=t},"update:return-value":function(t){e.birthday=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,n=t.attrs;return[a("v-text-field",e._g(e._b({attrs:{rules:[e.rules.required],label:"Birthday date","prepend-icon":"mdi-calendar",readonly:""},model:{value:e.birthday,callback:function(t){e.birthday=t},expression:"birthday"}},"v-text-field",n,!1),r))]}}]),model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},[a("v-date-picker",{attrs:{scrollable:""},model:{value:e.birthday,callback:function(t){e.birthday=t},expression:"birthday"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.modal=!1}}},[e._v(" Cancel ")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.dialog.save(e.birthday)}}},[e._v(" OK ")])],1)],1)],1)},Ee=[],ke={name:"StepOne",data:function(){return{modal:!1,rules:{required:function(e){return!!e||"Value is required"}}}},computed:{firstName:{get:function(){return this.$store.state.form.firstName},set:function(e){this.$store.dispatch("form/onFirstNameChange",e)}},lastName:{get:function(){return this.$store.state.form.lastName},set:function(e){this.$store.dispatch("form/onLastNameChange",e)}},birthday:{get:function(){return this.$store.state.form.birthday},set:function(e){this.$store.dispatch("form/onBirthdayChange",e)}}}},Re=ke,Ve=a("2e4b"),Fe=a("169a"),Le=a("2fa4"),je=Object(u["a"])(Re,Ne,Ee,!1,null,null,null),Ge=je.exports;m()(je,{VBtn:k["a"],VDatePicker:Ve["a"],VDialog:Fe["a"],VSpacer:Le["a"],VTextField:$["a"]});var Te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-subheader",[e._v("Your gender:")]),a("v-radio-group",{attrs:{row:""},model:{value:e.gender,callback:function(t){e.gender=t},expression:"gender"}},[a("v-radio",{attrs:{label:"Male",value:"male"}}),a("v-radio",{attrs:{label:"Female",value:"female"}}),a("v-radio",{attrs:{label:"I don't know",value:"idk"}})],1),a("v-subheader",{staticClass:"pb-6"},[e._v(" Your height: ")]),a("v-slider",{attrs:{min:"0",max:"300","thumb-size":24,"thumb-label":"always"},model:{value:e.height,callback:function(t){e.height=t},expression:"height"}})],1)},$e=[],Pe={name:"StepTwo",computed:{gender:{get:function(){return this.$store.state.form.gender},set:function(e){this.$store.dispatch("form/onGenderChange",e)}},height:{get:function(){return this.$store.state.form.height},set:function(e){this.$store.dispatch("form/onHeightChange",e)}}}},Ie=Pe,He=a("67b6"),Me=a("43a6"),ze=a("ba0d"),Be=a("e0c7"),De=Object(u["a"])(Ie,Te,$e,!1,null,null,null),qe=De.exports;m()(De,{VRadio:He["a"],VRadioGroup:Me["a"],VSlider:ze["a"],VSubheader:Be["a"]});var Ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-select",{attrs:{items:e.animals,label:"Your favorite type of animal",rules:[e.rules.required]},model:{value:e.favoriteAnimal,callback:function(t){e.favoriteAnimal=t},expression:"favoriteAnimal"}}),a("v-checkbox",{attrs:{label:"I have animal allergies"},model:{value:e.isAllergic,callback:function(t){e.isAllergic=t},expression:"isAllergic"}})],1)},We=[],Ye=["Cat","Dog","Horse","Pig","Bird","Hamster","Don't like animals"],Ze=Ye,Je={name:"StepThree",data:function(){return{animals:Ze,rules:{required:function(e){return!!e||"Value is required"}}}},computed:{favoriteAnimal:{get:function(){return this.$store.state.form.favoriteAnimal},set:function(e){this.$store.dispatch("form/onFavoriteAnimalChange",e)}},isAllergic:{get:function(){return this.$store.state.form.isAllergic},set:function(e){this.$store.dispatch("form/onAllergicChange",e)}}}},Qe=Je,Ke=a("ac7c"),Xe=a("b974"),et=Object(u["a"])(Qe,Ue,We,!1,null,null,null),tt=et.exports;m()(et,{VCheckbox:Ke["a"],VSelect:Xe["a"]});var at=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"pb-2"},[e._v("Ok, now we ask something unusual...")]),a("v-subheader",{staticClass:"pb-1"},[e._v("Pick your favorite color:")]),a("v-color-picker",{staticClass:"ml-auto mr-auto elevation-2",attrs:{value:e.favoriteColor,"dot-size":"25","swatches-max-height":"200","hide-mode-switch":"",mode:"hexa"},on:{input:e.onFavoriteColorChange}})],1)},rt=[],nt={name:"StepFour",computed:Object(A["a"])({},Object(i["c"])("form",["favoriteColor"])),methods:Object(A["a"])({},Object(i["b"])("form",["onFavoriteColorChange"]))},it=nt,ot=a("03a4"),st=Object(u["a"])(it,at,rt,!1,null,null,null),ct=st.exports;m()(st,{VColorPicker:ot["a"],VSubheader:Be["a"]});var lt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex align-center flex-column"},[a("v-subheader",{staticClass:"pb-1"},[e._v("Pick your zodiac sign:")]),a("v-radio-group",{attrs:{column:""},model:{value:e.zodiacSign,callback:function(t){e.zodiacSign=t},expression:"zodiacSign"}},e._l(e.zodiacSigns,(function(e,t){return a("v-radio",{key:t,attrs:{value:e.value,label:e.label,"on-icon":e.icon,"off-icon":e.icon}})})),1)],1)},ut=[],dt=[{label:"Aquarius",icon:"mdi-zodiac-aquarius",value:"aquarius"},{label:"Aries",icon:"mdi-zodiac-aries",value:"aries"},{label:"Cancer",icon:"mdi-zodiac-cancer",value:"cancer"},{label:"Capricorn",icon:"mdi-zodiac-capricorn",value:"capricorn"},{label:"Gemini",icon:"mdi-zodiac-gemini",value:"gemini"},{label:"Leo",icon:"mdi-zodiac-leo",value:"leo"},{label:"Libra",icon:"mdi-zodiac-libra",value:"libra"},{label:"Pisces",icon:"mdi-zodiac-pisces",value:"pisces"},{label:"Sagittarius",icon:"mdi-zodiac-sagittarius",value:"sagittarius"},{label:"Scorpio",icon:"mdi-zodiac-scorpio",value:"scorpio"},{label:"Taurus",icon:"mdi-zodiac-taurus",value:"taurus"},{label:"Virgo",icon:"mdi-zodiac-virgo",value:"virgo"}],mt=dt,ft={name:"StepFive",data:function(){return{zodiacSigns:mt}},computed:{zodiacSign:{get:function(){return this.$store.state.form.zodiacSign},set:function(e){this.$store.dispatch("form/onZodiacChange",e)}}}},vt=ft,ht=Object(u["a"])(vt,lt,ut,!1,null,null,null),pt=ht.exports;m()(ht,{VRadio:He["a"],VRadioGroup:Me["a"],VSubheader:Be["a"]});var gt={name:"QuestionsForm",emits:["results"],components:{StepFive:pt,StepFour:ct,StepThree:tt,StepTwo:qe,StepOne:Ge},data:function(){return{step:1}},computed:{isFindButtonDisabled:function(){var e=this.$store.state.form,t=e.firstName,a=e.lastName,r=e.birthday,n=e.favoriteAnimal,i=e.zodiacSign;return 0===t.length||0===a.length||0===r.length||0===n.length||0===i.length}},methods:{nextStep:function(){this.step++},previousStep:function(){this.step--},onFindClick:function(){this.$emit("results")}}},bt=gt,Ct=Object(u["a"])(bt,Oe,xe,!1,null,null,null),_t=Ct.exports;m()(Ct,{VBtn:k["a"],VCard:R["a"],VCardActions:V["a"],VCardTitle:V["b"],VForm:j["a"]});var yt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("card-layout",[a("v-card",{staticClass:"pa-4",attrs:{elevation:"2"}},[e.isLoading?a("div",[a("v-card-title",[e._v("Searching for the best match...")]),a("v-progress-linear",{attrs:{color:"light-blue",height:"10",indeterminate:"",striped:""}})],1):a("div",[a("v-card-title",{staticClass:"text-center"},[e._v("And the best cat for you is...")]),e.imageUrl?a("v-img",{attrs:{src:e.imageUrl,"lazy-src":e.imageUrl}}):e._e(),a("div",[a("h3",{staticClass:"display-1 text-center pt-2 pb-2"},[e._v(e._s(e.randomCatName)+"!")])]),a("v-card-actions",[a("v-btn",{staticClass:"primary",attrs:{block:""},on:{click:e.onClick}},[e._v("Try again")])],1)],1)])],1)},St=[],wt=["Abby","Angel","Annie","Baby","Bailey","Bandit","Bear","Bella","Bob","Boo","Boots","Bubba","Buddy","Buster","Cali","Callie","Casper","Charlie","Chester","Chloe","Cleo","Coco","Cookie","Cuddles","Daisy","Dusty","Felix","Fluffy","Garfield","George","Ginger","Gizmo","Gracie","Harley","Jack","Jasmine","Jasper","Kiki","Kitty","Leo","Lilly","Lily","Loki","Lola","Lucky","Lucy","Luna","Maggie","Max","Mia","Midnight","Milo","Mimi","Miss kitty","Missy","Misty","Mittens","Molly","Muffin","Nala","Oliver","Oreo","Oscar","Patches","Peanut","Pepper","Precious","Princess","Pumpkin","Rascal","Rocky","Sadie","Salem","Sam","Samantha","Sammy","Sasha","Sassy","Scooter","Shadow","Sheba","Simba","Simon","Smokey","Snickers","Snowball","Snuggles","Socks","Sophie","Spooky","Sugar","Tiger","Tigger","Tinkerbell","Toby","Trouble","Whiskers","Willow","Zoe","Zoey"],At=wt,Ot=a("bc3a"),xt=a.n(Ot),Nt={getRandomCatPhoto:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return xt.a.defaults.headers.common["x-api-key"]=Object({NODE_ENV:"production",BASE_URL:"/cat-finder/"}).API_KEY,e.next=3,xt.a.get("https://api.thecatapi.com/v1/images/search",{params:{limit:1,size:"full"}});case 3:return t=e.sent,a=t.data[0].url,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},Et=Nt,kt={name:"ResultWindow",data:function(){return{catNames:At,isLoading:!0,error:void 0,imageUrl:void 0}},emits:["form"],components:{CardLayout:Q},computed:{randomCatName:function(){var e=function(e,t){return Math.floor(Math.random()*(t-e)+e)};return this.catNames[e(0,At.length-1)]}},created:function(){this.loadCatPhoto()},methods:{onClick:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("form/onFormReset");case 2:e.$emit("form");case 3:case"end":return t.stop()}}),t)})))()},loadCatPhoto:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.error=void 0,e.isLoading=!0,t.prev=2,t.next=5,Et.getRandomCatPhoto();case 5:e.imageUrl=t.sent,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](2),e.error=t.t0.message;case 11:return t.prev=11,e.isLoading=!1,t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[2,8,11,14]])})))()}}},Rt=kt,Vt=a("adda"),Ft=a("8e36"),Lt=Object(u["a"])(Rt,yt,St,!1,null,null,null),jt=Lt.exports;m()(Lt,{VBtn:k["a"],VCard:R["a"],VCardActions:V["a"],VCardTitle:V["b"],VImg:Vt["a"],VProgressLinear:Ft["a"]});var Gt={components:{ResultWindow:jt,PageLayout:be,QuestionsForm:_t,CardLayout:Q},data:function(){return{isResultsShow:!1}},methods:{setResult:function(e){this.isResultsShow=e}}},Tt=Gt,$t=Object(u["a"])(Tt,we,Ae,!1,null,null,null),Pt=$t.exports,It=[{path:"/",component:Se},{path:"/login",component:B},{path:"/finder",component:Pt},{path:"*",redirect:"/"}],Ht=new n["a"]({routes:It});Ht.beforeEach((function(e,t,a){"/login"!==e.path?localStorage.getItem("auth")?a():a("/login"):a()}));var Mt=Ht,zt=(a("d3b7"),function(){return{username:"",password:"",isAuth:!1,isLoading:!1,error:void 0}}),Bt={USERNAME_CHANGE:function(e,t){e.username=t},PASSWORD_CHANGE:function(e,t){e.password=t},LOG_IN:function(e){e.isAuth=!0},LOG_OUT:function(e){e.isAuth=!1},SET_LOADING:function(e,t){e.isLoading=t},SET_ERROR:function(e,t){e.error=t}},Dt={onUsernameChange:function(e,t){var a=e.commit;a("USERNAME_CHANGE",t)},onPasswordChange:function(e,t){var a=e.commit;a("PASSWORD_CHANGE",t)},logIn:function(e){var t=e.commit;return new Promise((function(e){t("SET_ERROR",void 0),t("SET_LOADING",!0),setTimeout((function(){localStorage.setItem("auth","true"),t("LOG_IN"),t("SET_LOADING",!1),e()}),3e3)}))},logOut:function(e){var t=e.commit;localStorage.removeItem("auth"),t("LOG_OUT")}},qt={username:function(e){return e.username},password:function(e){return e.password},isAuth:function(e){return e.isAuth},isLoading:function(e){return e.isLoading},error:function(e){return e.error}},Ut={namespaced:!0,state:zt,mutations:Bt,actions:Dt,getters:qt},Wt=Ut,Yt={firstName:"",lastName:"",birthday:"",gender:"male",height:150,isAllergic:!1,favoriteAnimal:"",favoriteColor:"#FFFFFF",zodiacSign:""},Zt={FIRST_NAME_CHANGE:function(e,t){e.firstName=t},LAST_NAME_CHANGE:function(e,t){e.lastName=t},BIRTHDAY_CHANGE:function(e,t){e.birthday=t},GENDER_CHANGE:function(e,t){e.gender=t},HEIGHT_CHANGE:function(e,t){e.height=t},IS_ALLERGIC_CHANGE:function(e,t){e.isAllergic=t},FAVORITE_ANIMAL_CHANGE:function(e,t){e.favoriteAnimal=t},FAVORITE_COLOR_CHANGE:function(e,t){e.favoriteColor=t},ZODIAC_SIGN_CHANGE:function(e,t){e.zodiacSign=t},FORM_RESET:function(e){e.firstName="",e.lastName="",e.birthday="",e.gender="male",e.height=150,e.isAllergic=!1,e.favoriteAnimal="",e.favoriteColor="#FFFFFF",e.zodiacSign=""}},Jt={onFirstNameChange:function(e,t){var a=e.commit;a("FIRST_NAME_CHANGE",t)},onLastNameChange:function(e,t){var a=e.commit;a("LAST_NAME_CHANGE",t)},onBirthdayChange:function(e,t){var a=e.commit;a("BIRTHDAY_CHANGE",t)},onGenderChange:function(e,t){var a=e.commit;a("GENDER_CHANGE",t)},onHeightChange:function(e,t){var a=e.commit;a("HEIGHT_CHANGE",t)},onAllergicChange:function(e,t){var a=e.commit;a("IS_ALLERGIC_CHANGE",t)},onFavoriteAnimalChange:function(e,t){var a=e.commit;a("FAVORITE_ANIMAL_CHANGE",t)},onFavoriteColorChange:function(e,t){var a=e.commit;a("FAVORITE_COLOR_CHANGE",t)},onZodiacChange:function(e,t){var a=e.commit;a("ZODIAC_SIGN_CHANGE",t)},onFormReset:function(e){var t=e.commit;t("FORM_RESET")}},Qt={firstName:function(e){return e.firstName},lastName:function(e){return e.lastName},birthday:function(e){return e.birthday},gender:function(e){return e.gender},height:function(e){return e.height},favoriteAnimal:function(e){return e.favoriteAnimal},favoriteColor:function(e){return e.favoriteColor},zodiacSign:function(e){return e.zodiacSign}},Kt={namespaced:!0,state:Yt,mutations:Zt,actions:Jt,getters:Qt},Xt=Kt;r["a"].use(i["a"]);var ea=new i["a"].Store({modules:{auth:Wt,form:Xt}}),ta=ea;r["a"].config.productionTip=!1,r["a"].use(n["a"]),r["a"].use(i["a"]),new r["a"]({vuetify:b,router:Mt,store:ta,render:function(e){return e(p)}}).$mount("#app")},"5f43":function(e,t,a){"use strict";a("1a86")},8598:function(e,t,a){"use strict";a("b5f5")},"85ec":function(e,t,a){},"9b19":function(e,t,a){e.exports=a.p+"img/logo.f7364eb2.svg"},a4f7:function(e,t,a){},b5f5:function(e,t,a){}});
//# sourceMappingURL=app.e8c33cf3.js.map