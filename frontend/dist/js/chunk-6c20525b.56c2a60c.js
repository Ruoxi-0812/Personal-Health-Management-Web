(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c20525b"],{8199:function(t,e,a){"use strict";a("88ef")},"88ef":function(t,e,a){},"9a7e":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("el-row",{staticStyle:{"background-color":"#FFFFFF",padding:"5px 0","border-radius":"5px"}},[e("el-row",{staticStyle:{padding:"10px","margin-left":"10px"}},[e("el-row",[e("el-date-picker",{staticStyle:{width:"220px"},attrs:{size:"small",type:"daterange","range-separator":"to","start-placeholder":"Record Start","end-placeholder":"Record End"},model:{value:t.searchTime,callback:function(e){t.searchTime=e},expression:"searchTime"}}),e("el-input",{staticStyle:{width:"188px","margin-left":"5px","margin-right":"6px"},attrs:{size:"small",placeholder:"User ID",clearable:""},on:{clear:t.handleFilterClear},model:{value:t.userHealthQueryDto.userId,callback:function(e){t.$set(t.userHealthQueryDto,"userId",e)},expression:"userHealthQueryDto.userId"}},[e("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.handleFilter},slot:"append"})],1)],1)],1),e("el-row",{staticStyle:{margin:"0 20px","border-top":"1px solid rgb(245,245,245)"}},[e("el-table",{attrs:{"row-key":"id",data:t.tableData},on:{"selection-change":t.handleSelectionChange}},[e("el-table-column",{attrs:{prop:"name",width:"88",label:"Status"},scopedSlots:t._u([{key:"default",fn:function(a){return[t.statusCheck(a.row)?e("i",{staticClass:"el-icon-success",staticStyle:{"margin-right":"5px",color:"rgb(253, 199, 50)"}}):e("i",{staticClass:"el-icon-warning",staticStyle:{"margin-right":"5px"}}),t.statusCheck(a.row)?e("span",[t._v("Normal")]):e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Abnormal indicators, remind user to handle them promptly",placement:"bottom-end"}},[e("span",{staticStyle:{"text-decoration":"underline","text-decoration-style":"dashed"}},[t._v("Abnormal")])])]}}])}),e("el-table-column",{attrs:{prop:"value",width:"148",label:"Record Value",sortable:""},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.value)+"("+t._s(a.row.unit)+")")])]}}])}),e("el-table-column",{attrs:{prop:"userName",label:"Recorded By"}}),e("el-table-column",{attrs:{prop:"valueRange",width:"88",label:"Threshold"}}),e("el-table-column",{attrs:{prop:"name",width:"140",label:"Model Name"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[e("i",{staticClass:"el-icon-receiving",staticStyle:{"margin-right":"3px"}}),t._v(t._s(a.row.name))])]}}])}),e("el-table-column",{attrs:{prop:"unit",width:"88",label:"Unit"}}),e("el-table-column",{attrs:{prop:"symbol",width:"88",label:"Symbol"}}),e("el-table-column",{attrs:{prop:"userId",width:"108",label:"User ID",sortable:""}}),e("el-table-column",{attrs:{prop:"createTime",width:"178",label:"Record Time",sortable:""}}),e("el-table-column",{attrs:{label:"Actions",width:"80"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticClass:"text-button",on:{click:function(e){return t.handleDelete(a.row)}}},[t._v("Delete")])]}}])})],1),e("el-pagination",{staticStyle:{margin:"20px 0"},attrs:{"current-page":t.currentPage,"page-sizes":[10,20],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.totalItems},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),e("el-dialog",{attrs:{"show-close":!1,visible:t.dialogUserOperaion,width:"26%"},on:{"update:visible":function(e){t.dialogUserOperaion=e}}},[e("div",{attrs:{slot:"title"},slot:"title"},[e("p",{staticClass:"dialog-title"},[t._v(t._s(t.isOperation?"Edit User Health Record":"Add User Health Record"))])]),e("div",{staticStyle:{padding:"0 20px"}},[e("el-row",{staticStyle:{"margin-top":"20px"}},[e("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/api/personal-heath/v1.0/file/upload","show-file-list":!1,"on-success":t.handleAvatarSuccess}},[t.data.cover?e("img",{staticStyle:{height:"44px",width:"44px"},attrs:{src:t.data.cover}}):e("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e("el-row",{staticStyle:{padding:"0 20px 0 0"}},[e("p",[e("span",{staticClass:"modelName"},[t._v("*Configuration Name")])]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.name,expression:"data.name"}],staticClass:"input-title",staticStyle:{"border-radius":"5px","background-color":"#f1f1f1"},domProps:{value:t.data.name},on:{input:function(e){e.target.composing||t.$set(t.data,"name",e.target.value)}}})]),e("el-row",{staticStyle:{padding:"0 20px 0 0"}},[e("p",{staticStyle:{"font-size":"12px",padding:"3px 0"}},[e("span",{staticClass:"modelName"},[t._v("*Unit")])]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.unit,expression:"data.unit"}],staticClass:"input-title",staticStyle:{"border-radius":"5px","background-color":"#f1f1f1"},domProps:{value:t.data.unit},on:{input:function(e){e.target.composing||t.$set(t.data,"unit",e.target.value)}}})]),e("el-row",{staticStyle:{padding:"0 20px 0 0"}},[e("p",{staticStyle:{"font-size":"12px",padding:"3px 0"}},[e("span",{staticClass:"modelName"},[t._v("*Symbol")])]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.symbol,expression:"data.symbol"}],staticClass:"input-title",staticStyle:{"border-radius":"5px","background-color":"#f1f1f1"},domProps:{value:t.data.symbol},on:{input:function(e){e.target.composing||t.$set(t.data,"symbol",e.target.value)}}})]),e("el-row",{staticStyle:{padding:"0 20px 0 0"}},[e("p",{staticStyle:{"font-size":"12px",padding:"3px 0"}},[e("span",{staticClass:"modelName"},[t._v("*Description")])]),e("el-input",{staticStyle:{"border-radius":"5px","background-color":"#f1f1f1"},attrs:{type:"textarea",autosize:{minRows:2,maxRows:3},placeholder:"Description"},model:{value:t.data.detail,callback:function(e){t.$set(t.data,"detail",e)},expression:"data.detail"}})],1),e("el-row",{staticStyle:{padding:"0 20px 0 0"}},[e("p",{staticStyle:{"font-size":"12px",padding:"3px 0"}},[e("span",{staticClass:"modelName"},[t._v("*Normal Value Range")])]),e("el-slider",{attrs:{range:"","show-stops":"",max:1e3},model:{value:t.valuesRange,callback:function(e){t.valuesRange=e},expression:"valuesRange"}})],1)],1),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t.isOperation?e("el-button",{staticClass:"customer",staticStyle:{"background-color":"rgb(43, 121, 203)",border:"none"},attrs:{size:"small",type:"info"},on:{click:t.updateOperation}},[t._v("Update")]):e("el-button",{staticClass:"customer",staticStyle:{"background-color":"rgb(43, 121, 203)",border:"none"},attrs:{size:"small",type:"info"},on:{click:t.addOperation}},[t._v("Add")]),e("el-button",{staticClass:"customer",staticStyle:{"background-color":"rgb(241, 241, 241)",border:"none"},attrs:{size:"small"},on:{click:function(e){t.dialogUserOperaion=!1}}},[t._v("Cancel")])],1)])],1)},i=[],r={data(){return{data:{},filterText:"",currentPage:1,pageSize:10,totalItems:0,dialogUserOperaion:!1,isOperation:!1,tableData:[],searchTime:[],selectedRows:[],status:null,userHealthQueryDto:{},messsageContent:"",tagsList:[],valuesRange:[10,50]}},watch:{dialogUserOperaion(t,e){t||(this.isOperation=!this.isOperation),!t&&e&&(this.data={})}},created(){this.fetchFreshData()},methods:{statusCheck(t){const e=t.value,a=t.valueRange;if(null!==a&&null!==e){const t=a.split(","),s=t[0],i=t[1];return Number(e)>Number(s)&&Number(e)<Number(i)}},handleAvatarSuccess(t,e){200===t.code?(this.$message.success("Health record cover uploaded successfully"),this.data.cover=t.data):this.$message.error("Error uploading health record cover")},handleSelectionChange(t){this.selectedRows=t},async batchDelete(){if(!this.selectedRows.length)return void this.$message("No data selected");const t=await this.$swalConfirm({title:"Delete user health records",text:"This action cannot be undone, do you want to continue?",icon:"warning"});if(t)try{let t=this.selectedRows.map(t=>t.id);const e=await this.$axios.post("/user-health/batchDelete",t);if(200===e.data.code)return this.$swal.fire({title:"Delete notification",text:e.data.msg,icon:"success",showConfirmButton:!1,timer:2e3}),void this.fetchFreshData()}catch(e){this.$swal.fire({title:"Error notification",text:e,icon:"error",showConfirmButton:!1,timer:2e3}),console.error("Error deleting user health records:",e)}},resetQueryCondition(){this.userHealthQueryDto={},this.searchTime=[],this.fetchFreshData()},async updateOperation(){try{this.data.valueRange=this.valuesRange.join(",");const t=await this.$axios.put("/user-health/update",this.data);this.$swal.fire({title:"User health record updated",text:t.data.msg,icon:200===t.data.code?"success":"error",showConfirmButton:!1,timer:1e3}),200===t.data.code&&(this.closeDialog(),this.fetchFreshData(),this.clearFormData())}catch(t){console.error("Error submitting form:",t),this.$message.error("Submission failed, please try again later!")}},async addOperation(){try{this.data.valueRange=this.valuesRange.join(",");const t=await this.$axios.post("/user-health/save",this.data);this.$message[200===t.data.code?"success":"error"](t.data.msg),200===t.data.code&&(this.closeDialog(),this.fetchFreshData(),this.clearFormData())}catch(t){console.error("Error submitting form:",t),this.$message.error("Submission failed, please try again later!")}},closeDialog(){this.dialogUserOperaion=!1},clearFormData(){this.data={}},async fetchFreshData(){try{let t=null,e=null;if(null!=this.searchTime&&2===this.searchTime.length){const[a,s]=await Promise.all(this.searchTime.map(t=>t.toISOString()));t=a.split("T")[0]+"T00:00:00",e=s.split("T")[0]+"T23:59:59"}const a={current:this.currentPage,size:this.pageSize,startTime:t,endTime:e,...this.userHealthQueryDto},s=await this.$axios.post("/user-health/query",a),{data:i}=s;this.tableData=i.data,this.totalItems=i.total}catch(t){console.error("Error fetching user health records:",t)}},add(){this.dialogUserOperaion=!0},handleFilter(){this.currentPage=1,this.fetchFreshData()},handleFilterClear(){this.filterText="",this.handleFilter()},handleSizeChange(t){this.pageSize=t,this.currentPage=1,this.fetchFreshData()},handleCurrentChange(t){this.currentPage=t,this.fetchFreshData()},handleEdit(t){this.dialogUserOperaion=!0,this.isOperation=!0,null!==t.valueRange&&(this.valuesRange=t.valueRange.split(",")),this.data={...t}},handleDelete(t){this.selectedRows.push(t),this.batchDelete()}}},l=r,o=(a("8199"),a("2877")),n=Object(o["a"])(l,s,i,!1,null,"4ead418c",null);e["default"]=n.exports}}]);
//# sourceMappingURL=chunk-6c20525b.56c2a60c.js.map