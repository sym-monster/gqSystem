<template>
  <div>
    <h3>录入释文信息</h3>
    <el-form
      :model="ruleForm2"
      :rules="rules"
      ref="ruleForm2"
      label-width="100px"
      class="demo-ruleForm2"
      size=""
      
      enctype="multipart/form-data"
    >
      <el-form-item label="骨签编号" prop="name">
        <el-input
          class="name"
          v-model="ruleForm2.name"
          placeholder=""
          :readonly="true"
        ></el-input>
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
          :change="getCategory(ruleForm2.name)"
          class="name"
        >
          <!-- <el-option label="光禄" value="11"></el-option>
          <el-option label="卫尉" value="12"></el-option>
          <el-option label="少府署官" value="13"></el-option>
          <el-option label="太仆" value="14"></el-option> -->
          <el-option
            v-for="(item2,i) in opt2"
            :key="i"
            :label="item2.name"
            :value="item2.id"
          >
          </el-option>
        </el-select>
      </el-form-item>

     
       <div v-for="(item, index) in ruleForm2.dynamicItem" :key="index">
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
      load: true,
      ruleForm2: {
        name: "",
        category2: "",
        dynamicItem: [{ id: "", content: "" }],
        
        opt2:[{value:"", label:""}]
      },
      opt2: [] ,
      param: "",
      rules: {
        category2: [
          { required: true, message: "请选择二级类别", trigger: "change" },
        ],
        id: [{ required: true, message: "请选择文字类别", trigger: "change" }],
        content: [
          { required: true, message: "请填写文字内容", trigger: "blur" },
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
  created() {
    this.getParams();
  },
  methods: {
    getParams() {
      const a = this.$route.query.a;
      const b = this.$route.query.b;
      this.ruleForm2.name = a;
      switch (b) {
        case "1":
          this.ruleForm2.category1 = "工官";
          break;
        case "2":
          this.ruleForm2.category1 = "中央官署";
          break;
        case "3":
          this.ruleForm2.category1 = "列候及其他";
          break;
        case "4":
          this.ruleForm2.category1 = "兵器";
          break;
        case "5":
          this.ruleForm2.category1 = "代号及数量";
          break;
        case "6":
          this.ruleForm2.category1 = "其他类";
          break;
      }
      //this.ruleForm2.category1 = b;
    }, //获取ID、类别

    getCategory(bid){
      this.bid = bid;
      var that = this;
      if(that.load){
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
            that.ruleForm2.category2 = "";
            that.opt2 = res.data.data.secondGenreList;
            console.log(that.opt2);
          } else {
            console.log("error");
          }
        });
      }
      that.load = false;
      
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
        category: this.category,
        text: this.text,
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
