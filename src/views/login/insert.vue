<template>
  <div>
    <h3>录入骨签信息</h3>

    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      size=""
      enctype="multipart/form-data"
    >
      <el-form-item label="骨签编号" prop="name">
        <el-input
        
          type="int"
          class="name"
          v-model="ruleForm.name"
          placeholder="请输入编号"
        ></el-input>
      </el-form-item>
      <div>
        <el-form-item label="出土时间" class="name2">
        <el-form-item prop="date1">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            :default-value="timeDefaultShow"
            value-format="yyyy-MM-dd"
            v-model="ruleForm.date1"
            style="width: 100%"
            :picker-options="pickerOptions"
          ></el-date-picker>
        </el-form-item>
      </el-form-item>
        <el-form-item label="所属房间" prop="home" class="name2">
          <el-input v-model="ruleForm.home" placeholder=""></el-input>
        </el-form-item>
      </div>

      

      <el-form-item label="收藏机构" prop="jgname">
                <el-select
                  v-model="ruleForm.jgname"
                  placeholder=""
                  class="name"
                >
                  <el-option label="中国社会科学院考古研究所" ></el-option>
                  <el-option label="中国历史研究院考古博物馆"></el-option>
                  <el-option label="北京古陶文明博物馆"></el-option>
                </el-select>
        </el-form-item>

        <!-- <el-form-item label="出土地点" prop="place">
                <el-select
                  v-model="ruleForm.place"
                  placeholder=""
                  class="name"
                >
                  <el-option label="汉长安城未央宫三号建筑遗址" ></el-option>
                  <el-option label="不明" ></el-option>
                  <el-option label="其它" ></el-option>
                </el-select>
        </el-form-item> -->

        <el-form-item label="出土地点" prop="place" class="name">
          <el-input v-model="ruleForm.place" placeholder=""></el-input>
        </el-form-item>
     

      <el-form-item label="一级类别" prop="category">
        <el-select
          v-model="ruleForm.category"
          placeholder="请选择骨签类别"
          class="name"
        >
          <el-option v-for="(item,index) in categoryValue"
                    :key="index"
                    :value="item.id"
                    :label="item.title"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="骨签保存" prop="gqbaocun">
        <el-select v-model="ruleForm.gqbaocun" 
          @change="judge(ruleForm.gqbaocun)" placeholder="" class="name">
          <el-option v-for="(item,index) in gqbaocunValue"
                    :key="index"
                    :value="item.id"
                    :label="item.title"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="凹口位置" prop="aokou">
        <el-select
          v-model="ruleForm.aokou"
          placeholder="请先选择骨签保存类型"
          class="name"
        >
          <el-option v-for="(item,index) in aokouValue"
                    :key="index"
                    :value="item.id"
                    :label="item.title"></el-option>
        </el-select>
      </el-form-item>

      <div>
        <el-form-item label="骨签规格" prop="sizec" class="name3">
          <el-input
            type="int"
            v-model="ruleForm.sizec"
            placeholder="长"
          ></el-input>
        </el-form-item>
        <el-form-item label="骨签规格" prop="sizek" class="name3">
          <el-input
            type="int"
            v-model="ruleForm.sizek"
            placeholder="宽"
          ></el-input>
        </el-form-item>
        <el-form-item label="骨签规格" prop="sizeh" class="name3">
          <el-input
            type="int"
            v-model="ruleForm.sizeh"
            placeholder="厚"
          ></el-input>
        </el-form-item>
      </div>

      <div>
        <el-form-item label="骨签登记人" prop="djr" class="name2">
          <el-input
            v-model="ruleForm.djr"
            placeholder="登记人姓名（可多人）"
          ></el-input>
        </el-form-item>
        <el-form-item label="登记时间" class="name2">
          <el-form-item prop="date2">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
              v-model="ruleForm.date2"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-form-item>
      </div>

      <div>
        <el-form-item label="骨签释文人" prop="swr" class="name2">
          <el-input
            v-model="ruleForm.swr"
            placeholder="释文人姓名（可多人）"
          ></el-input>
        </el-form-item>
        <el-form-item label="释文时间" class="name2">
          <el-form-item prop="date3">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
              v-model="ruleForm.date3"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-form-item>
      </div>

      <div>
        <el-form-item label="骨签整理人" prop="zlr" class="name2">
          <el-input
            v-model="ruleForm.zlr"
            placeholder="整理人姓名（可多人）"
          ></el-input>
        </el-form-item>
        <el-form-item label="整理时间" class="name2">
          <el-form-item prop="date4">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
              v-model="ruleForm.date4"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-form-item>
      </div>

      <div>
        <el-form-item label="骨签拍照人" prop="pzr" class="name2">
          <el-input
            v-model="ruleForm.pzr"
            placeholder="拍照人姓名（可多人）"
          ></el-input>
        </el-form-item>
        <el-form-item label="拍照时间" class="name2">
          <el-form-item prop="date5">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
              v-model="ruleForm.date5"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-form-item>
      </div>

      <div>
        <el-form-item label="骨签除锈人" prop="cxr" class="name2">
          <el-input v-model="ruleForm.cxr" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="除锈时间" class="name2">
          <el-form-item prop="date6">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
              v-model="ruleForm.date6"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-form-item>
      </div>

      <div>
        <el-form-item label="骨签摹本人" prop="mbr" class="name2">
          <el-input v-model="ruleForm.mbr" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="摹本时间" class="name2">
          <el-form-item prop="date7">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
              v-model="ruleForm.date7"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-form-item>
      </div>

      <div>
        <el-form-item label="骨签拓片人" prop="tpr" class="name2">
          <el-input v-model="ruleForm.tpr" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="拓片时间" class="name2">
          <el-form-item prop="date8">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
              v-model="ruleForm.date8"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-form-item>
      </div>

      <div>
        <el-form-item label="骨签缀合人" prop="zhr" class="name2">
          <el-input v-model="ruleForm.zhr" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="缀合时间" class="name2">
          <el-form-item prop="date9">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
              v-model="ruleForm.date9"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-form-item>
      </div>

      

      <el-form-item label="文字保存" prop="wzbaocun">
        <el-select v-model="ruleForm.wzbaocun" placeholder="" class="name">
          <el-option v-for="(item,index) in wzbaocunValue"
                    :key="index"
                    :value="item.id"
                    :label="item.title"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="骨签发表" prop="fabiao" class="name">
        <el-input v-model="ruleForm.fabiao" placeholder=""></el-input>
      </el-form-item>

      <div>
        <el-form-item label="骨签研究" prop="yanjiu" class="name2">
          <el-input v-model="ruleForm.yanjiu" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="骨签时代" prop="shidai" class="name2">
          <el-input v-model="ruleForm.shidai" placeholder=""></el-input>
        </el-form-item>
      </div>

      <div>
        <el-form-item label="骨签展览" prop="zhanlan" class="name2">
          <el-input v-model="ruleForm.zhanlan" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="骨签组合" prop="zuhe" class="name2">
          <el-input v-model="ruleForm.zuhe" placeholder=""></el-input>
        </el-form-item>
      </div>

      <div>
        <el-form-item label="骨签颜色" prop="color" class="name2">
          <el-input v-model="ruleForm.color" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="释文字数" prop="wordNumber" class="name2">
          <el-input v-model="ruleForm.wordnumber" placeholder=""></el-input>
        </el-form-item>
      </div>

      

      <div>
        <div class="name2">
          <el-form-item label="骨签正面图" prop="front" class="name2">
            <el-upload
              action="#"
              ref="uploadfront"
              list-type="picture-card"
              :on-preview="handlePictureCardPreviewfront"
              :before-upload="beforeUploadfront"
              :on-remove="handleRemovefront"
              :auto-upload="false"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisiblefront">
              <img width="100%" :src="front" alt="" />
            </el-dialog>
          </el-form-item>
        </div>

        <div class="name2">
          <el-form-item label="骨签背面图" prop="behind" class="name2">
            <el-upload
              action="#"
              ref="uploadbehind"
              list-type="picture-card"
              :on-preview="handlePictureCardPreviewbehind"
              :before-upload="beforeUploadbehind"
              :on-remove="handleRemovebehind"
              :auto-upload="false"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisiblebehind">
              <img width="100%" :src="behind" alt="" />
            </el-dialog>
          </el-form-item>
        </div>
      </div>

      <!--      //注释掉的是form表单黑白图片组件，摹本拓片可复制套用 注意：要与调用函数名、参数等对应
      <div class="name2">
          <el-form-item label="黑白图片" prop="Black" class="name2">
            <el-upload
              action="#"
              ref="uploadblack"
              list-type="picture-card"
              :on-preview="handlePictureCardPreviewblack"
              :before-upload="beforeUploadblack"
              :on-remove="handleRemoveblack"
              :auto-upload="false"
              :multiple="true"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisibleblack">
              <img width="100%" :src="black" alt="" />
            </el-dialog>
          </el-form-item>
        </div>
      </div> 
-->

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
        <el-button
          type="primary"
          @click="goto(ruleForm.name, ruleForm.category, load, 'ruleForm')"
          >插入释文
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    var num = (rule, value, callback) => {
      const reg = /^\d+.?\d{0,2}$/;
      if (!value) {
        callback(new Error("请输入骨签规格"));
      } else if (!Number(value)) {
        callback(new Error("请输入数字值"));
      } else {
        if (reg.test(value)) {
          callback();
        } else {
          callback(new Error("小数点后最多只能输入两位"));
        }
      }
    };
    var bid = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入骨签编号"));
      } else if (!Number(value)) {
        callback(new Error("请输入数字值"));
      } else {
        if (value.lenth != 6) {
          callback();
        }
      }
    };

    return {
      flag:false,
      src: "",
      load: "false",
      front: "",
      behind: "",

      //imageBlack:"",
      //imageRubbing:"",
      //imageCopy:"",
      dialogVisiblefront: false,
      dialogVisiblebehind: false,
      formData: new FormData(),
      fileListfront: [],
      fileListbehind: [],
      //图片路径

      //设置当前时间默认值
      timeDefaultShow:new Date('1986-10-23'),

      //定义可选时间范围
      pickerOptions: {
        disabledDate(time) {
            let maxDate = new Date("1987-12-31");
            let minDate = new Date("1985-01-01");
            return time.getTime() > maxDate.getTime() || time.getTime() < minDate.getTime();
          }
      },


      ruleForm: {
        name: "",
        jgname: "中国社会科学院考古研究所",
        date1: "",
        place: "",
        home: "",
        category: "",
        aokou: "",
        sizec: "",
        sizek: "",
        sizeh: "",
        djr: "刘庆柱、李毓芳",
        date2: "",
        swr: "刘庆柱、李毓芳",
        date3: "",
        zlr: "刘庆柱、李毓芳",
        date4: "",
        pzr: "钟凯、吕兵兵",
        date5: "",
        cxr: "",
        date6: "",
        mbr: "刘贤鹏",
        date7: "",
        tpr: "",
        date8: "",
        zhr: "",
        date9: "",
        gqbaocun: "",
        wzbaocun: "",
        fabiao: "《汉长安城未央宫骨签》(90册)<中华书局2018年>",
        yanjiu: "",
        zhanlan: "",
        zuhe: "",
        shidai: "",
        color: "",
        wordnumber: "",

        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules: {
        name: [
          { required: true, validator: bid, trigger: "blur" },
          {
            // min: 6,
            // max: 6,
            required: true, 
            message: "请输入6位正确编号",
            trigger: "blur",
          },
        ],
        jgname: [
          { required: true, message: "请输入机构名称", trigger: "blur" },
        ],
       
        sizec: [{ required: true, validator: num, trigger: "blur" }],
        sizek: [{ required: true, validator: num, trigger: "blur" }],
        sizeh: [{ required: true, validator: num, trigger: "blur" }],

        djr: [{ required: true, message: "该项不可为空!", trigger: "blur" }],
        swr: [{ required: true, message: "该项不可为空!", trigger: "blur" }],
        zlr: [{ required: true, message: "该项不可为空!", trigger: "blur" }],
        //pzr: [{ required: true, message: "该项不可为空!", trigger: "blur" }],
        //front:[{ required: true, message: "请插入骨签正面图片!", trigger: "change" }],
        //behind:[{ required: true, message: "请插入骨签背面图片!", trigger: "change" }],

        date1: [
          {
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
      },
      categoryValue:[
        {id:1,title:'工官'},
        {id:2,title:'中央官署'},
        {id:3,title:'列候及其他'},
        {id:4,title:'兵器'},
        {id:5,title:'代号及数量'},
        {id:6,title:'其他类'},
      ],
      gqbaocunValue:[
          {id:1,title:'完整'},
          {id:2,title:'残缺'},
          {id:3,title:'首部'},
          {id:4,title:'中部'},
          {id:5,title:'尾部'},
          {id:6,title:'其它'}
        ],
        aokouValue:[
          {id:1,title:'无'},
          {id:2,title:'左'},
          {id:3,title:'右'}
        ],
        wzbaocunValue:[
          {id:1,title:'无字'},
          {id:2,title:'完整'},
          {id:3,title:'残缺'},
          {id:4,title:'模糊'},
          {id:5,title:'清晰'},
          {id:6,title:'残缺可疑'},
          {id:7,title:'残缺模糊'},
          {id:8,title:'残缺去向'},
          {id:9,title:'完整模糊'},
          {id:10,title:'完整清晰'},
          {id:11,title:'残缺清晰'}
        ],
    };
  },
  methods: {
    handleRemovefront(file, fileListfront) {
      console.log(file, fileListfront);
    },
    handleRemovebehind(file, fileListbehind) {
      console.log(file, fileListbehind);
    },
    handlePictureCardPreviewfront(file) {
      this.front = file.url;
      this.dialogVisiblefront = false;
    },
    handlePictureCardPreviewbehind(file) {
      this.behind = file.url;
      this.dialogVisiblebehind = false;
    },
    beforeUploadfront(file) {
      this.fileListfront.push(file);
      let imagesfront = [...this.fileListfront];
      console.log("imagesfront", imagesfront);

      this.formData.append("imageA", file);
      return false;
    },

    // 判断是否需要添加凹凸位置
    judge(num){
        if(num == 1 ||  num == 2|| num == 4){ 
          this.flag = true;
        }else{
          this.flag = false;
          this.ruleForm.aokou = "无";
          }
       
    },

   

    // 判断骨签编号的格式
    /* update(number){
      this.ruleForm.name 
      var l = number.length; 
      var blen = 0; 
      for(var i=0; i<l; i++) { 
          if ((number.charCodeAt(i) & 0xff00) != 0) { 
               blen ++; 
          } 
      blen ++; 
      }
      if(blen == 1){this.ruleForm.name  = "00000"+number; }
      if(blen == 2){this.ruleForm.name  = "0000"+number;}
      if(blen == 3){this.ruleForm.name  = "000"+number;}
      if(blen == 4){this.ruleForm.name  = "00"+number;}
      if(blen == 5){this.ruleForm.name  = "0"+number;}
    }, */

    beforeUploadbehind(file) {
      this.fileListbehind.push(file);
      let imagesbehind = [...this.fileListbehind];
      console.log("imagesbehind", imagesbehind);

      this.formData.append("imageB", file);
      return false;
    },
    //图片 逻辑是上传前进行图片处理，将其放到formData表单中，伴随提交一起传递至后台，将其与表单组件函数对应即可

  //带参跳转函数
    goto(a, b, load) {
      this.a = a;
      this.b = b;
      if (load == "false") {
        alert("请先提交基础信息");
      } else if (a && b) {
        this.$router.push({
          path: "/gqinsert2",
          query: { a, b },
        });
      } else {
        this.$message.error("请填写正确的骨签编号及类型!");
        return false;
      }
    }, 

    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("submit");

          let that = this;

          that.formData = new FormData();

          that.formData.append("bid", that.ruleForm.name);
          that.formData.append("unearthedLocation", that.ruleForm.place);
          that.formData.append("unearthedTime", that.ruleForm.date1);
          that.formData.append("unearthedHouse", that.ruleForm.home);
          that.formData.append("primaryGenreId", that.ruleForm.category);
          if(that.ruleForm.aokou == "无"){
            that.ruleForm.aokou = 1;
          }
          that.formData.append("atPositionId", that.ruleForm.aokou);
          that.formData.append("collectionOrganization", that.ruleForm.jgname);
          that.formData.append("length", that.ruleForm.sizec);
          that.formData.append("width", that.ruleForm.sizek);
          that.formData.append("thickness", that.ruleForm.sizeh);
          that.formData.append("registerPeople", that.ruleForm.djr);
          that.formData.append("registerTime", that.ruleForm.date2);
          that.formData.append("interpretPeople", that.ruleForm.swr);
          that.formData.append("interpretTime", that.ruleForm.date3);

          that.formData.append("arrangePeople", that.ruleForm.zlr);
          that.formData.append("arrangeTime", that.ruleForm.date4);
          that.formData.append("picturePeople", that.ruleForm.pzr);
          that.formData.append("pictureTime", that.ruleForm.date5);
          that.formData.append("rustPeople", that.ruleForm.cxr);
          that.formData.append("rustTime", that.ruleForm.date6);
          that.formData.append("copyPeople", that.ruleForm.mbr);
          that.formData.append("copyTime:", that.ruleForm.date7);
          that.formData.append("rubbingPeople", that.ruleForm.tpr);
          that.formData.append("rubbingTime", that.ruleForm.date8);
          that.formData.append("composePeople", that.ruleForm.zhr);

          that.formData.append("composeTime", that.ruleForm.date9);
          that.formData.append("gpPreserveId", that.ruleForm.gqbaocun);
          that.formData.append("charPreserveId", that.ruleForm.wzbaocun);
          that.formData.append("publish", that.ruleForm.fabiao);
          that.formData.append("research", that.ruleForm.yanjiu);
          that.formData.append("exhibition", that.ruleForm.zhanlan);
          that.formData.append("combination", that.ruleForm.zuhe);
          that.formData.append("era", that.ruleForm.shidai);
          that.formData.append("color", that.ruleForm.color);
          that.formData.append("wordNumber", that.ruleForm.wordNumber);
          that.$refs.uploadfront.submit();
          that.$refs.uploadbehind.submit(); //图片
          //that.$refs.uploadblack.submit();
          //that.$refs.uploadrub.submit();
          ///that.$refs.uploadcopy.submit();


          axios
            .post(
              "http://127.0.0.1:8082/gq_message_sys/basic-info/insert", //插入基础信息端口
              //"http://www.dunkcode.cn:8082/gq_message_sys/basic-info/batch/saveXi", //插入基础信息端口
              that.formData
            )
            .then(function (result) {
              console.log(result);
                if(result.data.code == 200){
                  alert("录入成功!");
                }else{
                  alert("录入失败！")
                }
           /*    that.$refs.uploadfront.handleRemovefront();
              that.$refs.uploadbehind.handleRemovebehind(); //提交后清除图片 */
            });
          that.load = "true";
        } else {
          console.log("error submit!!");
          alert("插入失败！")
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style lang="scss" scoped>
.name {
  width: 700px;
}
.name2 {
  width: 400px;
  display: inline-block;
}
.name3 {
  width: 266px;
  display: inline-block;
}

/* 图片上传 */
.uploader {
  display: none;
}
.laber-up {
  width: 100%;
  height: 3.5rem;
  /* background: skyblue; */
  margin-bottom: 0.4rem;
}
.laber-up > div {
  width: 100%;
  height: 200px;
  border: 1px solid #00f;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ccc;
  position: relative;
}
.laber-up > div > p {
  font-size: 0.4rem;
  position: absolute;
  top: 2.6rem;
  color: #333;
}
.laber-up > div > img {
  height: 100%;
}
.delog {
  text-align: right;
}
</style>
