(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-355e4dc5"],{"1a6d":function(e,t,a){"use strict";a("5795")},"1a74":function(e,t,a){"use strict";a("36a5")},2241:function(e,t,a){"use strict";var s=function(){var e=this,t=e._self._c;return t("span",{staticClass:"logo"},[t("el-image",{staticStyle:{width:"25px",height:"25px"},attrs:{src:"/logo.png",fit:"fill"}}),e.flag?e._e():t("div",[t("span",{style:{color:e.bag,display:"block"}},[e._v(e._s(e.sysName))])])],1)},i=[],o={name:"Logo",data(){return{}},props:{flag:{type:Boolean,required:!1},sysName:{type:String,required:!1},bag:{type:String,default:"#1c1c1c"}},created(){},methods:{}},l=o,n=(a("1a6d"),a("2877")),r=Object(n["a"])(l,s,i,!1,null,"1dc3616d",null);t["a"]=r.exports},"36a5":function(e,t,a){},5795:function(e,t,a){},db1d:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticStyle:{padding:"0 50px"}},[t("div",[t("p",{staticStyle:{"font-size":"24px",padding:"10px 0","font-weight":"bolder"}},[t("span",{staticStyle:{cursor:"pointer",display:"inline-block",padding:"0 20px 0 0"},on:{click:e.goBack}},[t("i",{staticClass:"el-icon-arrow-left"}),e._v(" Back to Homepage ")]),e._v(" Health Records ")])])]),t("div",{staticStyle:{height:"6px","background-color":"rgb(248, 248, 248)"}}),t("div",{staticStyle:{padding:"10px 50px"}},[t("el-row",[t("el-col",{staticStyle:{"border-right":"1px solid #f1f1f1","min-height":"calc(100vh - 250px)"},attrs:{span:6}},[t("el-tabs",{staticStyle:{"margin-right":"40px"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:"Global Models",name:"first"}}),t("el-tab-pane",{attrs:{label:"My Models",name:"second"}})],1),t("div",{staticStyle:{padding:"20px 0 30px 0"}},[t("span",{staticStyle:{cursor:"pointer",padding:"10px 20px","background-color":"#000","border-radius":"5px",color:"#fff"},on:{click:e.addModel}},[e._v(" Add Model "),t("i",{staticClass:"el-icon-right"})])]),t("div",[t("span",{staticStyle:{"margin-right":"20px"}},[e._v("Configuration Name")]),t("el-input",{staticStyle:{width:"148px"},attrs:{placeholder:"Enter",clearable:""},on:{clear:e.handleFilterClear},model:{value:e.userHealthModel.name,callback:function(t){e.$set(e.userHealthModel,"name",t)},expression:"userHealthModel.name"}}),t("el-button",{staticClass:"customer",staticStyle:{"margin-left":"20px","background-color":"rgb(43, 121, 203)",border:"none"},attrs:{type:"primary"},on:{click:e.searModel}},[e._v("Search")])],1),t("div",{staticStyle:{padding:"10px 6px","margin-right":"40px",height:"500px","overflow-y":"scroll","overflow-x":"hidden"}},e._l(e.modelList,(function(a,s){return t("div",{key:s,staticClass:"item-model",on:{click:function(t){return e.modelSelected(a)}}},[t("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"This configuration ["+a.name+"], click to select",placement:"bottom"}},[t("el-row",{staticStyle:{padding:"20px 0"}},[t("el-col",{attrs:{span:4}},[t("img",{staticStyle:{width:"50px",height:"50px","margin-top":"5px"},attrs:{src:a.cover}})]),t("el-col",{attrs:{span:20}},[t("div",{staticStyle:{padding:"0 10px"}},[t("div",{staticStyle:{"font-size":"24px","font-weight":"bolder"}},[e._v(e._s(a.name))]),t("div",{staticStyle:{"font-size":"14px","margin-top":"5px"}},[t("span",[e._v(e._s(a.unit))]),t("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(a.symbol))]),a.isGlobal?e._e():t("span",{staticStyle:{"margin-left":"10px",color:"#333"},on:{click:function(t){return e.updateModel(a)}}},[e._v("Edit")]),a.isGlobal?e._e():t("span",{staticStyle:{"margin-left":"10px",color:"red"},on:{click:function(t){return e.deleteModel(a)}}},[e._v("Delete")])])])])],1)],1)],1)})),0)],1),t("el-col",{attrs:{span:18}},[t("div",{staticStyle:{padding:"0 150px","box-sizing":"border-box"}},[t("div",{staticStyle:{padding:"15px 0","font-size":"24px"}},[e._v(" Data Entry Panel "),t("span",{staticStyle:{"font-size":"14px","margin-left":"20px"},on:{click:e.clearData}},[e._v("Reset")])]),t("el-row",[0===e.selectedModel.length?t("el-row",[t("el-empty",{attrs:{description:"Please select a model record"}})],1):e._e(),t("el-row",e._l(e.selectedModel,(function(a,s){return t("el-col",{key:s,attrs:{span:12}},[t("h3",[e._v(e._s(a.name)+"("+e._s(a.unit)+")")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.value,expression:"model.value"}],staticClass:"input-model",attrs:{type:"text",placeholder:"Normal range: "+a.valueRange},domProps:{value:a.value},on:{input:function(t){t.target.composing||e.$set(a,"value",t.target.value)}}})])})),1)],1)],1),t("div",{staticStyle:{padding:"50px 150px"}},[t("span",{staticStyle:{cursor:"pointer",padding:"10px 20px","background-color":"#000","border-radius":"5px",color:"#fff"},on:{click:e.toRecord}},[e._v(" Record Now "),t("i",{staticClass:"el-icon-right"})])])])],1)],1),t("el-dialog",{attrs:{"show-close":!1,visible:e.dialogUserOperaion,width:"26%"},on:{"update:visible":function(t){e.dialogUserOperaion=t}}},[t("div",{attrs:{slot:"title"},slot:"title"},[t("p",{staticClass:"dialog-title"},[e._v(e._s(e.isOperation?"Edit Health Model":"Add Health Model"))])]),t("div",{staticStyle:{padding:"0 20px"}},[t("p",[e._v("*Icon")]),t("el-row",{staticStyle:{"margin-top":"10px"}},[t("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/api/personal-heath/v1.0/file/upload","show-file-list":!1,"on-success":e.handleAvatarSuccess}},[e.data.cover?t("img",{staticStyle:{height:"64px",width:"64px"},attrs:{src:e.data.cover}}):t("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),t("el-row",{staticStyle:{padding:"0 10px 0 0"}},[t("p",[t("span",{staticClass:"modelName"},[e._v("*Configuration Name")])]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.data.name,expression:"data.name"}],staticClass:"input-title",attrs:{placeholder:"Enter"},domProps:{value:e.data.name},on:{input:function(t){t.target.composing||e.$set(e.data,"name",t.target.value)}}})]),t("el-row",{staticStyle:{padding:"0 10px 0 0"}},[t("p",[e._v("*Unit")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.data.unit,expression:"data.unit"}],staticClass:"input-title",attrs:{placeholder:"Enter"},domProps:{value:e.data.unit},on:{input:function(t){t.target.composing||e.$set(e.data,"unit",t.target.value)}}})]),t("el-row",{staticStyle:{padding:"0 10px 0 0"}},[t("p",[e._v("*Symbol")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.data.symbol,expression:"data.symbol"}],staticClass:"input-title",attrs:{placeholder:"Enter"},domProps:{value:e.data.symbol},on:{input:function(t){t.target.composing||e.$set(e.data,"symbol",t.target.value)}}})]),t("el-row",{staticStyle:{padding:"0 20px 0 0"}},[t("p",[e._v("*Threshold (Format: Min, Max)")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.data.valueRange,expression:"data.valueRange"}],staticClass:"input-title",attrs:{placeholder:"Enter"},domProps:{value:e.data.valueRange},on:{input:function(t){t.target.composing||e.$set(e.data,"valueRange",t.target.value)}}})]),t("el-row",{staticStyle:{padding:"0 10px 0 0"}},[t("p",[e._v("*Description")]),t("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:3},placeholder:"Enter description"},model:{value:e.data.detail,callback:function(t){e.$set(e.data,"detail",t)},expression:"data.detail"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e.isOperation?t("el-button",{staticClass:"customer",staticStyle:{"background-color":"rgb(43, 121, 203)",border:"none"},attrs:{size:"small",type:"info"},on:{click:e.updateOperation}},[e._v("Edit")]):t("el-button",{staticClass:"customer",staticStyle:{"background-color":"rgb(43, 121, 203)",border:"none"},attrs:{size:"small",type:"info"},on:{click:e.addOperation}},[e._v("Add")]),t("el-button",{staticClass:"customer",staticStyle:{"background-color":"rgb(241, 241, 241)",border:"none"},attrs:{size:"small"},on:{click:function(t){return e.cannel()}}},[e._v("Cancel")])],1)])],1)},i=[],o=a("2241"),l={components:{Logo:o["a"]},data(){return{data:{cover:""},userInfo:{},modelList:[],activeName:"first",userHealthModel:{isGlobal:!0},dialogUserOperaion:!1,isOperation:!1,userId:null,selectedModel:[]}},created(){this.getUserInfo(),this.getAllModelConfig(),this.getUser()},methods:{async clearData(){const e=await this.$swalConfirm({title:"Reset Data?",text:"Once reset, you will need to re-enter the data. Continue?",icon:"warning"});e&&(this.selectedModel=[])},cannel(){this.data={},this.dialogUserOperaion=!1,this.isOperation=!1,this.cover=""},updateOperation(){this.$axios.put("/health-model-config/update",this.data).then(e=>{const{data:t}=e;200===t.code&&(this.dialogUserOperaion=!1,this.isOperation=!1,this.data={},this.$swal.fire({title:"Model Update",text:"Model updated successfully",icon:"success",showConfirmButton:!1,timer:1e3}),this.getAllModelConfig())})},updateModel(e){this.data=e,this.dialogUserOperaion=!0,this.isOperation=!0},async deleteModel(e){const t=await this.$swalConfirm({title:"Delete Model ["+e.name+"]",text:"This action cannot be undone. Continue?",icon:"warning"});if(t){const t=[];t.push(e.id),this.$axios.post("/health-model-config/batchDelete",t).then(t=>{const{data:a}=t;200===a.code&&(this.$swal.fire({title:"Model Deletion",text:"Model deleted successfully",icon:"success",showConfirmButton:!1,timer:1e3}),this.getAllModelConfig(),this.selectedModel=this.selectedModel.filter(t=>t.id!==e.id))})}},goBack(){this.$router.push("/user")},toRecord(){const e=this.selectedModel.map(e=>({healthModelConfigId:e.id,value:e.value}));this.$axios.post("/user-health/save",e).then(e=>{const{data:t}=e;200===t.code&&(this.$notify({title:"Record Operation",message:"Record saved successfully",type:"success"}),setTimeout(()=>{this.$router.push("/user")},2e3))})},modelSelected(e){const t=this.selectedModel.find(t=>t.id===e.id);t||this.selectedModel.push(e)},searModel(){this.getAllModelConfig()},handleFilterClear(){this.userHealthModel.name="",this.getAllModelConfig()},handleAvatarSuccess(e,t){200===e.code?(this.$message.success("Health model cover uploaded successfully"),this.data.cover=e.data):this.$message.error("Health model cover upload failed")},getUser(){const e=sessionStorage.getItem("userInfo"),t=JSON.parse(e);this.userId=t.id},async addOperation(){try{this.data.userId=this.userId;const e=await this.$axios.post("/health-model-config/save",this.data);this.$message[200===e.data.code?"success":"error"](e.data.msg),200===e.data.code&&(this.dialogUserOperaion=!1,this.getAllModelConfig(),this.data={})}catch(e){console.error("Error submitting form:",e),this.$message.error("Submission failed. Please try again later.")}},addModel(){this.dialogUserOperaion=!0},handleClick(e,t){if(this.userHealthModel={},"first"===this.activeName)this.userHealthModel.isGlobal=!0;else{const e=sessionStorage.getItem("userInfo"),t=JSON.parse(e);this.userHealthModel.userId=t.id}this.getAllModelConfig()},getAllModelConfig(){this.$axios.post("/health-model-config/query",this.userHealthModel).then(e=>{const{data:t}=e;200===t.code&&(this.modelList=t.data)})},getUserInfo(){const e=sessionStorage.getItem("userInfo");this.userInfo=JSON.parse(e)}}},n=l,r=(a("1a74"),a("2877")),d=Object(r["a"])(n,s,i,!1,null,"7f2a6300",null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-355e4dc5.54ac9f44.js.map