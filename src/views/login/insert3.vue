<template>
  <div>
    <h3>录入释文信息</h3>
    <!--name={{ this.$route.query.a }} category={{ this.$route.query.b }}-->
    <!-- {{ JSON.stringify(this.ruleForm2.dynamicItem) }}-->
    <el-form
      :model="ruleForm2"
      :rules="rules"
      ref="ruleForm2"
      label-width="100px"
      class="demo-ruleForm2"
      size=""
      enctype="multipart/form-data"
    >
      <el-form-item label="骨签编号" prop="name" >
        <el-input
          class="name"
          v-model="ruleForm2.name"
          placeholder="填写编号"
        ></el-input
        ><el-button
          type="primary"
          icon="el-icon-search"
          @click="jiance(ruleForm2.name)"
          size="small"
          >检测编号
        </el-button>
      </el-form-item>

      <el-form-item label="一级类别" prop="category1">
        <el-input
          class="name"
          v-model="ruleForm2.category1"
          placeholder=""
          :readonly="true"
        ></el-input>
      </el-form-item>

      <el-form-item label="二级类别" prop="category2" >
        <el-select
          v-model="ruleForm2.category2"
          placeholder="请选择二级类别"
          class="name"
        >
          <el-option
            v-for="(item2,i) in opt2"
            :key="i"
            :label="item2.name"
            :value="item2.id"
          >
          </el-option>
        

        </el-select>
      </el-form-item>

      <!-- 动态增减-->
      <div  v-for="(item, index) in ruleForm2.dynamicItem" 
            :key="index">
        <el-form-item
          label="文字类别"
          :prop="'dynamicItem.' + index + '.id'"
          class="name"
        >
          <el-select
            v-model="item.id"
            placeholder="请选择文字类别"
            class="name"
          >
            <el-option v-for="(item,index) in contentValue"
                      :key="index"
                      :label="item.title"
                      :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="文字内容"
          :prop="'dynamicItem.' + index + '.content'"
          :rules="[
            { required: true, message: '文字内容不能为空', trigger: 'blur' },
          ]"
          class="name"
        >
          <el-input
            type="textarea"
            v-model="item.content"
            palceholder="请输入文字内容"
            class="name"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <i class="el-icon-delete" @click="deleteItem(item, index)"></i>
        </el-form-item>
      </div>

      <!-- 按钮-->
      <el-form-item>
        <el-button
          type="primary"
          :disabled="!load"
          @click="submitForm2('ruleForm2')"
          >立即创建</el-button
        >
        <el-button @click="addItem" type="primary">增加类别</el-button>
        <el-button @click="resetForm2('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      load: false,
      ruleForm2: {
        name: "",
        //category1: "",
        category2: "",
        // category3: "",
        //text: "",
        dynamicItem: [{ id: "", content: "" }],
        opt2:[{value:"", label:""}],
      },
      opt2: [] ,
      param: "",
      rules: {
        category2: [
          { required: true, message: "请选择二级类别", trigger: "change" },
        ],
        name: [{ required: true, message: "请选择文字类别", trigger: "change" }],
        content: [
          { required: true, message: "请输入文字内容", trigger: "blur" },
        ],
      },
       contentValue:[
          {id:1,title:"时间"},
          {id:2,title:"公元年"},
          {id:3,title:"工官"},
          {id:4,title:"令"},
          {id:5,title:"守令"},
          {id:6,title:"丞"},
          {id:7,title:"守丞"},
          {id:8,title:"右丞"},
          {id:9,title:"左丞"},
          {id:10,title:"护工卒史"},
          {id:11,title:"令史"},
          {id:12,title:"守护工卒史"},
          {id:13,title:"掾"},
          {id:14,title:"佐"},
          {id:15,title:"作府啬夫"},
          {id:16,title:"冗工"},
          {id:17,title:"亭长"},
          {id:18,title:"工"},
          {id:19,title:"缮"},
          {id:20,title:"造"},
          {id:21,title:"省"},
          {id:22,title:"编号"},
          {id:23,title:"力"},
          {id:24,title:"乘舆"},
          {id:25,title:"射"},
          {id:26,title:"燥"},
          {id:27,title:"御"},
          {id:28,title:"服"},
          {id:29,title:"石"},
          {id:30,title:"大黄"},
          {id:31,title:"甲"},
          {id:32,title:"乙"},
          {id:33,title:"丙"},
          {id:34,title:"丁"},
          {id:35,title:"第"},
          {id:36,title:"其他"}
        ],
    };
  },

  methods: {
    getParams() {
      const a = this.$route.query.a;
      //const b = this.$route.query.b;
      this.ruleForm2.name = a;
     // this.ruleForm2.category1 = b;
    }, //获取ID、类别

    // 判断骨签编号的格式
  /*   update(number){
      this.ruleForm2.name 
      var l = number.length; 
      var blen = 0; 
      for(var i=0; i<l; i++) { 
          if ((number.charCodeAt(i) & 0xff00) != 0) { 
               blen ++; 
          } 
      blen ++; 
      }
      if(blen == 1){this.ruleForm2.name  = "00000"+number; }
      if(blen == 2){this.ruleForm2.name  = "0000"+number;}
      if(blen == 3){this.ruleForm2.name  = "000"+number;}
      if(blen == 4){this.ruleForm2.name  = "00"+number;}
      if(blen == 5){this.ruleForm2.name  = "0"+number;}
    }, */

    // 检测编号是否存在
    jiance(bid) {
      this.bid = bid;
      var that = this;
      axios
        .get(
          "http://127.0.0.1:8082/gq_message_sys/explanation/exist?Bid=" +
            this.bid,
          {}
        )
        .then(function (res) {
          console.log(res);
          if (res.data.code == 200) {
            that.ruleForm2.category1 = res.data.data.firstGenreName;
            alert("编号存在，可以插入!");
            that.ruleForm2.category2 = "";
            that.opt2 = res.data.data.secondGenreList;
            that.load = true;
          } else {
            alert("编号不存在，请先插入骨签基础信息!");
            that.load = false;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },


    submitForm2(formName2) {
      this.$refs[formName2].validate((valid) => {
        if (valid) {
          console.log("submit");
          let that = this;
          that.formData = new FormData();
          that.formData.append("bid", that.ruleForm2.name);
          that.formData.append("secondGenreId", that.ruleForm2.category2);
          that.formData.append(
            "explanationList",
            JSON.stringify(that.ruleForm2.dynamicItem)
          );
          console.log(JSON.stringify(that.ruleForm2.dynamicItem));

          axios
            .post(
              "http://127.0.0.1:8082/gq_message_sys/explanation/insert",
              that.formData
            )
            .then(function (res) {
              console.log(res);
              if(res.data.code === 200){
                alert("插入成功!")
              }else{
                alert("插入失败!");
              }
            })
            .catch(function (error) {
              console.log(error);
            });

        } else {
          alert("当前编号信息不存在，不可插入");
          console.log("error submit!!");
          return false;
        }
      });
    }, //提交

    


    resetForm2(formName2) {
      this.$refs[formName2].resetFields();
    },
    addItem() {
      this.ruleForm2.dynamicItem.push({
        name: this.name,
        content: this.content,
        // key: Date.now(),
      });
    },
    deleteItem(item, index) {
      this.ruleForm2.dynamicItem.splice(index, 1);
    }, //动态表单
  },
};
</script>
<style scoped>
.name {
  width: 700px;
}
.name2 {
  width: 400px;
  display: inline-block;
}
</style>
