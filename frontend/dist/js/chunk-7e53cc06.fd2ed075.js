(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e53cc06"],{"1a6d":function(t,e,a){"use strict";a("5795")},2241:function(t,e,a){"use strict";var o=function(){var t=this,e=t._self._c;return e("span",{staticClass:"logo"},[e("el-image",{staticStyle:{width:"25px",height:"25px"},attrs:{src:"/logo.png",fit:"fill"}}),t.flag?t._e():e("div",[e("span",{style:{color:t.bag,display:"block"}},[t._v(t._s(t.sysName))])])],1)},s=[],i={name:"Logo",data(){return{}},props:{flag:{type:Boolean,required:!1},sysName:{type:String,required:!1},bag:{type:String,default:"#1c1c1c"}},created(){},methods:{}},n=i,r=(a("1a6d"),a("2877")),c=Object(r["a"])(n,o,s,!1,null,"1dc3616d",null);e["a"]=c.exports},5795:function(t,e,a){},a20f:function(t,e,a){"use strict";a("d99e")},d99e:function(t,e,a){},ede4:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"login-container"},[e("div",{staticClass:"login-panel"},[e("div",{staticClass:"logo"},[e("Logo",{attrs:{bag:t.colorLogo,sysName:"Healthy Living"}})],1),e("div",{staticClass:"text"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.act,expression:"act"}],staticClass:"act",attrs:{placeholder:"Account"},domProps:{value:t.act},on:{input:function(e){e.target.composing||(t.act=e.target.value)}}})]),e("div",{staticClass:"text"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],staticClass:"pwd",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.pwd},on:{input:function(e){e.target.composing||(t.pwd=e.target.value)}}})]),e("div",[e("span",{staticClass:"login-btn",on:{click:t.login}},[t._v("Login Now")])]),e("div",{staticClass:"tip"},[e("p",[t._v("Don't have an account? "),e("span",{staticClass:"no-act",on:{click:t.toDoRegister}},[t._v("Click here to register")])])])])])},s=[],i=a("b775"),n=a("5d2d"),r=a("8237"),c=a.n(r),l=a("2241");const d=1,u=2,p=1300;var g={name:"Login",components:{Logo:l["a"]},data(){return{act:"",pwd:"",colorLogo:"rgb(38,38,38)"}},methods:{toDoRegister(){this.$router.push("/register")},async login(){if(!this.act||!this.pwd)return void this.$swal.fire({title:"Input Validation",text:"Account or password cannot be empty",icon:"error",showConfirmButton:!1,timer:p});const t=c()(c()(this.pwd)),e={userAccount:this.act,userPwd:t};try{const{data:t}=await i["a"].post("user/login",e);if(200!==t.code)return void this.$swal.fire({title:"Login Failed",text:t.msg,icon:"error",showConfirmButton:!1,timer:p});Object(n["c"])(t.data.token),setTimeout(()=>{const{role:e}=t.data;this.navigateToRole(e)},p)}catch(a){console.error("Login request error:",a),this.$message.error("Login request failed, please try again!")}},navigateToRole(t){switch(t){case d:this.$router.push("/admin");break;case u:this.$router.push("/user");break;default:console.warn("Unknown role type:",t);break}}}},v=g,h=(a("a20f"),a("2877")),m=Object(h["a"])(v,o,s,!1,null,"b8509666",null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-7e53cc06.fd2ed075.js.map