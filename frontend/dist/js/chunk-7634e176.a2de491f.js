(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7634e176"],{"50eb":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("el-row",{staticStyle:{"background-color":"#FFFFFF",padding:"5px 0","border-radius":"5px"}},[e("el-row",{staticStyle:{padding:"10px","margin-left":"10px"}},[e("el-row",[e("el-date-picker",{staticStyle:{width:"220px"},attrs:{size:"small",type:"daterange","range-separator":"to","start-placeholder":"Registration Start","end-placeholder":"Registration End"},model:{value:t.searchTime,callback:function(e){t.searchTime=e},expression:"searchTime"}}),e("el-input",{staticStyle:{width:"188px","margin-left":"5px","margin-right":"6px"},attrs:{size:"small",placeholder:"Username",clearable:""},on:{clear:t.handleFilterClear},model:{value:t.userQueryDto.userName,callback:function(e){t.$set(t.userQueryDto,"userName",e)},expression:"userQueryDto.userName"}},[e("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.handleFilter},slot:"append"})],1),e("span",{staticStyle:{float:"right"}},[e("el-button",{staticClass:"customer",staticStyle:{"background-color":"rgb(96, 98, 102)",color:"rgb(247,248,249)",border:"none"},attrs:{size:"small",type:"info"},on:{click:function(e){return t.add()}}},[e("i",{staticClass:"el-icon-plus"}),t._v("Add User")])],1)],1)],1),e("el-row",{staticStyle:{margin:"0 20px","border-top":"1px solid rgb(245,245,245)"}},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData},on:{"selection-change":t.handleSelectionChange}},[e("el-table-column",{attrs:{prop:"userAvatar",width:"68",label:"Avatar"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("el-avatar",{staticStyle:{"margin-top":"10px"},attrs:{size:25,src:t.row.userAvatar}})]}}])}),e("el-table-column",{attrs:{prop:"userName",label:"Name"}}),e("el-table-column",{attrs:{prop:"userAccount",width:"128",label:"Account"}}),e("el-table-column",{attrs:{prop:"userEmail",width:"168",label:"Email"}}),e("el-table-column",{attrs:{prop:"userRole",width:"68",label:"Role"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(1===a.row.userRole?"Admin":"User"))])]}}])}),e("el-table-column",{attrs:{prop:"isLogin",width:"108",label:"Suspension"},scopedSlots:t._u([{key:"default",fn:function(a){return[a.row.isLogin?e("i",{staticClass:"el-icon-warning",staticStyle:{"margin-right":"5px"}}):e("i",{staticClass:"el-icon-success",staticStyle:{"margin-right":"5px",color:"rgb(253, 199, 50)"}}),a.row.isLogin?e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Once suspended, the user cannot log in. Only an admin can restore access.",placement:"bottom-end"}},[e("span",{staticStyle:{"text-decoration":"underline","text-decoration-style":"dashed"}},[t._v("Suspended")])]):e("span",[t._v("Active")])]}}])}),e("el-table-column",{attrs:{prop:"isWord",width:"108",label:"Mute"},scopedSlots:t._u([{key:"default",fn:function(a){return[a.row.isWord?e("i",{staticClass:"el-icon-warning",staticStyle:{"margin-right":"5px"}}):e("i",{staticClass:"el-icon-success",staticStyle:{"margin-right":"5px",color:"rgb(253, 199, 50)"}}),a.row.isWord?e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Once muted, the user cannot comment. Only an admin can unmute them.",placement:"bottom-end"}},[e("span",{staticStyle:{"text-decoration":"underline","text-decoration-style":"dashed"}},[t._v("Muted")])]):e("span",[t._v("Active")])]}}])}),e("el-table-column",{attrs:{sortable:!0,prop:"createTime",width:"168",label:"Registered On"}}),e("el-table-column",{attrs:{label:"Actions",width:"170"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticClass:"text-button",on:{click:function(e){return t.handleStatus(a.row)}}},[t._v("Account Status")]),e("span",{staticClass:"text-button",on:{click:function(e){return t.handleEdit(a.row)}}},[t._v("Edit")]),e("span",{staticClass:"text-button",on:{click:function(e){return t.handleDelete(a.row)}}},[t._v("Delete")])]}}])})],1),e("el-pagination",{staticStyle:{margin:"10px 0"},attrs:{"current-page":t.currentPage,"page-sizes":[10,20],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.totalItems},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),e("el-dialog",{attrs:{"show-close":!1,visible:t.dialogUserOperation,width:"25%"},on:{"update:visible":function(e){t.dialogUserOperation=e}}},[e("div",{attrs:{slot:"title"},slot:"title"},[e("p",{staticClass:"dialog-title"},[t._v(t._s(t.isOperation?"Edit User Information":"Add User"))])]),e("div",{staticStyle:{padding:"0 20px"}},[e("el-row",[e("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/api/personal-health/v1.0/file/upload","show-file-list":!1,"on-success":t.handleAvatarSuccess}},[t.userAvatar?e("img",{staticClass:"dialog-avatar",attrs:{src:t.userAvatar}}):e("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e("el-row",[e("span",{staticClass:"dialog-hover"},[t._v("Username")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.userName,expression:"data.userName"}],staticClass:"dialog-input",attrs:{placeholder:"Username"},domProps:{value:t.data.userName},on:{input:function(e){e.target.composing||t.$set(t.data,"userName",e.target.value)}}}),e("span",{staticClass:"dialog-hover"},[t._v("Account")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.userAccount,expression:"data.userAccount"}],staticClass:"dialog-input",attrs:{placeholder:"Account"},domProps:{value:t.data.userAccount},on:{input:function(e){e.target.composing||t.$set(t.data,"userAccount",e.target.value)}}}),e("span",{staticClass:"dialog-hover"},[t._v("Email")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.userEmail,expression:"data.userEmail"}],staticClass:"dialog-input",attrs:{placeholder:"Email"},domProps:{value:t.data.userEmail},on:{input:function(e){e.target.composing||t.$set(t.data,"userEmail",e.target.value)}}}),e("span",{staticClass:"dialog-hover"},[t._v("Password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.userPwd,expression:"userPwd"}],staticClass:"dialog-input",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.userPwd},on:{input:function(e){e.target.composing||(t.userPwd=e.target.value)}}})])],1),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t.isOperation?e("el-button",{staticClass:"customer",staticStyle:{"background-color":"rgb(96, 98, 102)",color:"rgb(247,248,249)",border:"none"},attrs:{size:"small",type:"info"},on:{click:function(e){return t.updateOperation()}}},[t._v("Update")]):e("el-button",{staticClass:"customer",staticStyle:{"background-color":"rgb(96, 98, 102)",color:"rgb(247,248,249)",border:"none"},attrs:{size:"small",type:"info"},on:{click:function(e){return t.addOperation()}}},[t._v("Add")]),e("el-button",{staticClass:"customer",staticStyle:{"background-color":"rgb(211, 241, 241)",border:"none"},attrs:{size:"small"},on:{click:t.cancel}},[t._v("Cancel")])],1)]),e("el-dialog",{attrs:{"show-close":!1,visible:t.dialogStatusOperation,width:"25%"},on:{"update:visible":function(e){t.dialogStatusOperation=e}}},[e("div",{attrs:{slot:"title"},slot:"title"},[e("p",{staticClass:"dialog-title"},[t._v("Account Status")])]),e("div",{staticStyle:{padding:"0 20px"}},[e("el-row",[e("el-switch",{attrs:{"active-color":"rgb(230, 62, 49)","inactive-color":"rgb(246,246,246)","active-text":"Suspend","inactive-text":"Active"},model:{value:t.data.isLogin,callback:function(e){t.$set(t.data,"isLogin",e)},expression:"data.isLogin"}})],1),e("el-row",{staticStyle:{margin:"20px 0"}},[e("el-switch",{attrs:{"active-color":"rgb(230, 62, 49)","inactive-color":"rgb(246,246,246)","active-text":"Mute","inactive-text":"Active"},model:{value:t.data.isWord,callback:function(e){t.$set(t.data,"isWord",e)},expression:"data.isWord"}})],1),e("span",{staticClass:"dialog-hover"},[t._v("Set as Admin")]),e("el-switch",{attrs:{"active-color":"rgb(230, 62, 49)","inactive-color":"rgb(246,246,246)"},model:{value:t.roleStatus,callback:function(e){t.roleStatus=e},expression:"roleStatus"}})],1),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{staticClass:"customer",staticStyle:{"background-color":"rgb(96, 98, 102)",color:"rgb(247,248,249)",border:"none"},attrs:{size:"small",type:"info"},on:{click:t.confirmStatus}},[t._v("Confirm")]),e("el-button",{staticClass:"customer",staticStyle:{"background-color":"rgb(241, 241, 241)",border:"none"},attrs:{size:"small"},on:{click:t.cancel}},[t._v("Cancel")])],1)])],1)},i=[],r={data(){return{roleStatus:!1,userPwd:"",userAvatar:"",data:{},filterText:"",currentPage:1,pageSize:10,totalItems:0,dialogStatusOperation:!1,dialogUserOperation:!1,isOperation:!1,tableData:[],searchTime:[],selectedRows:[],status:null,userQueryDto:{},messageContent:""}},created(){this.fetchFreshData()},methods:{confirmStatus(){const t={id:this.data.id,isLogin:this.data.isLogin,isWord:this.data.isWord,userRole:this.roleStatus?1:2};this.$axios.put("/user/backUpdate",t).then(t=>{200===t.data.code&&(this.$notify({duration:2e3,title:"Operation Feedback",message:"Operation Successful",type:"success"}),this.dialogStatusOperation=!1,this.fetchFreshData())}).catch(t=>{console.log("Error updating status: "+t)})},handleStatus(t){this.dialogStatusOperation=!0,this.roleStatus=1===t.userRole,this.data=t},handleAvatarSuccess(t,e){200===t.code?(this.$notify({duration:2e3,title:"Avatar Upload",message:"Successful",type:"success"}),this.userAvatar=t.data):this.$notify({duration:2e3,title:"Avatar Upload",message:"Failed",type:"error"})},switchChange(){this.fetchFreshData()},async handleSwitchChange(t,e,a){try{let s={id:t};a?s.isLogin=e:s.isWord=e;const i=await this.$axios.put("/user/backUpdate",s);200===i.data.code&&(this.$notify({duration:2e3,title:"Operation Notice",message:"Successful",type:"success"}),this.cancel())}catch(s){console.error("Error updating user status: "+s)}},handleSelectionChange(t){this.selectedRows=t},async batchDelete(){if(!this.selectedRows.length)return void this.$message("No data selected");const t=await this.$swalConfirm({title:"Delete User Data",text:"This action cannot be undone. Continue?",icon:"warning"});if(t)try{let t=this.selectedRows.map(t=>t.id);const e=await this.$axios.post("/user/batchDelete",t);if(200===e.data.code)return this.$notify({duration:2e3,title:"Delete Operation",message:"Successful",type:"success"}),this.cancel(),void this.fetchFreshData()}catch(e){console.error("Error deleting user data: ",e)}},resetQueryCondition(){this.userQueryDto={},this.searchTime=[],this.fetchFreshData()},async updateOperation(){if(""!==this.userPwd){const t=this.$md5(this.$md5(this.userPwd));this.data.userPwd=t}else this.data.userPwd=null;this.data.userAvatar=this.userAvatar;try{const t=await this.$axios.put("/user/backUpdate",this.data);200===t.data.code&&(this.fetchFreshData(),this.cancel(),this.$notify({duration:2e3,title:"Update Operation",message:"Successful",type:"success"}))}catch(t){console.error("Error submitting form:",t),this.$message.error("Submission failed. Please try again later.")}},async addOperation(){""!==this.userPwd?this.data.userPwd=this.$md5(this.$md5(this.userPwd)):this.data.userPwd=null,this.data.userAvatar=this.userAvatar;try{const t=await this.$axios.post("/user/insert",this.data);this.$message[200===t.data.code?"success":"error"](t.data.msg),200===t.data.code&&(this.fetchFreshData(),this.cancel(),this.$notify({duration:2e3,title:"Add Operation",message:"Successful",type:"success"}))}catch(t){console.error("Error submitting form:",t),this.$message.error("Submission failed. Please try again later.")}},cancel(){this.userAvatar="",this.userPwd="",this.data={},this.isOperation=!1,this.dialogStatusOperation=!1,this.dialogUserOperation=!1},async fetchFreshData(){try{this.tableData=[];let t=null,e=null;if(null!=this.searchTime&&2===this.searchTime.length){const[a,s]=await Promise.all(this.searchTime.map(t=>t.toISOString()));t=a.split("T")[0]+"T00:00:00",e=s.split("T")[0]+"T23:59:59"}const a={current:this.currentPage,size:this.pageSize,key:this.filterText,startTime:t,endTime:e,...this.userQueryDto},s=await this.$axios.post("/user/query",a),{data:i}=s;this.tableData=i.data,this.totalItems=i.total}catch(t){console.error("Error fetching user data:",t)}},add(){this.dialogUserOperation=!0},handleFilter(){this.currentPage=1,this.fetchFreshData()},handleFilterClear(){this.filterText="",this.handleFilter()},handleSizeChange(t){this.pageSize=t,this.currentPage=1,this.fetchFreshData()},handleCurrentChange(t){this.currentPage=t,this.fetchFreshData()},handleEdit(t){this.dialogUserOperation=!0,this.isOperation=!0,t.userPwd=null,this.userAvatar=t.userAvatar,this.data={...t}},handleDelete(t){this.selectedRows.push(t),this.batchDelete()}}},o=r,l=(a("b3e6"),a("2877")),n=Object(l["a"])(o,s,i,!1,null,"03b737f8",null);e["default"]=n.exports},b3e6:function(t,e,a){"use strict";a("d6b7")},d6b7:function(t,e,a){}}]);
//# sourceMappingURL=chunk-7634e176.a2de491f.js.map