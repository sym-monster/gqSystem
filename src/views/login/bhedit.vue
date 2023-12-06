<template>
  <div>
    <h3>骨签信息修改</h3>

    <el-form
      :model="ruleForm4"
      :rules="rules"
      ref="ruleForm4"
      label-width="100px"
      class="demo-ruleForm4"
      size=""
      enctype="multipart/form-data"
    >
      <el-form-item label="骨签编号" prop="name">
        <el-input
          @blur="update(ruleForm4.name)"
          type="int"
          class="name"
          v-model="ruleForm4.name"
          placeholder="请输入编号"
          :disabled = 'true'
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
            v-model="ruleForm4.date1"
            style="width: 100%"
            :picker-options="pickerOptions"
          ></el-date-picker>
        </el-form-item>
      </el-form-item>
        <el-form-item label="所属房间" prop="home" class="name2">
          <el-input v-model="ruleForm4.home" placeholder=""></el-input>
        </el-form-item>
      </div>

      

      <el-form-item label="收藏机构" prop="jgname">
                <el-select
                  v-model="ruleForm4.jgname"
                  placeholder=""
                  class="name"
                >
                  <el-option label="中国社会科学院考古研究所" ></el-option>
                  <el-option label="中国历史研究院考古博物馆"></el-option>
                  <el-option label="北京古陶文明博物馆"></el-option>
                </el-select>
        </el-form-item>


        <el-form-item label="出土地点" prop="place" class="name">
          <el-input v-model="ruleForm4.place" placeholder=""></el-input>
        </el-form-item>
     

      <el-form-item label="一级类别" prop="category">
        <el-select
          v-model="ruleForm4.category"
          placeholder="请选择骨签类别"
          class="name"
          @change="category2Select(ruleForm4.category)"
        >
          <el-option v-for="(item,index) in categoryValue"
                    :key="index"
                    :label="item.title"
                    :value="item.id"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="骨签保存" prop="gqbaocun">
        <el-select v-model="ruleForm4.gqbaocun" 
          @change="judge(ruleForm4.gqbaocun)" placeholder="" class="name">
          <el-option v-for="(item,index) in gqbaocunValue"
                    :key="index"
                    :label="item.title"
                    :value="item.id"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="凹口位置" prop="aokou">
        <el-select
          v-model="ruleForm4.aokou"
          placeholder="请先选择骨签保存类型"
          class="name">
          <el-option v-for="(item,index) in aokouValue"
                    :key="index"
                    :label="item.title"
                    :value="item.id"></el-option>
        </el-select>
      </el-form-item>

      <div>
        <el-form-item label="骨签规格" prop="sizec" class="name3">
          <el-input
            type="int"
            v-model="ruleForm4.sizec"
            placeholder="长"
          ></el-input>
        </el-form-item>
        <el-form-item label="骨签规格" prop="sizek" class="name3">
          <el-input
            type="int"
            v-model="ruleForm4.sizek"
            placeholder="宽"
          ></el-input>
        </el-form-item>
        <el-form-item label="骨签规格" prop="sizeh" class="name3">
          <el-input
            type="int"
            v-model="ruleForm4.sizeh"
            placeholder="厚"
          ></el-input>
        </el-form-item>
      </div>

      <div>
        <el-form-item label="骨签登记人" prop="djr" class="name2">
          <el-input
            v-model="ruleForm4.djr"
            placeholder="登记人姓名（可多人）"
          ></el-input>
        </el-form-item>
        <el-form-item label="登记时间" class="name2">
          <el-form-item prop="date2">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
              v-model="ruleForm4.date2"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-form-item>
      </div>

      <div>
        <el-form-item label="骨签释文人" prop="swr" class="name2">
          <el-input
            v-model="ruleForm4.swr"
            placeholder="释文人姓名（可多人）"
          ></el-input>
        </el-form-item>
        <el-form-item label="释文时间" class="name2">
          <el-form-item prop="date3">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
              v-model="ruleForm4.date3"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-form-item>
      </div>

      <div>
        <el-form-item label="骨签整理人" prop="zlr" class="name2">
          <el-input
            v-model="ruleForm4.zlr"
            placeholder="整理人姓名（可多人）"
          ></el-input>
        </el-form-item>
        <el-form-item label="整理时间" class="name2">
          <el-form-item prop="date4">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
              v-model="ruleForm4.date4"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-form-item>
      </div>

      <div>
        <el-form-item label="骨签拍照人" prop="pzr" class="name2">
          <el-input
            v-model="ruleForm4.pzr"
            placeholder="拍照人姓名（可多人）"
          ></el-input>
        </el-form-item>
        <el-form-item label="拍照时间" class="name2">
          <el-form-item prop="date5">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
              v-model="ruleForm4.date5"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-form-item>
      </div>

      <div>
        <el-form-item label="骨签除锈人" prop="cxr" class="name2">
          <el-input v-model="ruleForm4.cxr" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="除锈时间" class="name2">
          <el-form-item prop="date6">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
              v-model="ruleForm4.date6"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-form-item>
      </div>

      <div>
        <el-form-item label="骨签摹本人" prop="mbr" class="name2">
          <el-input v-model="ruleForm4.mbr" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="摹本时间" class="name2">
          <el-form-item prop="date7">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
              v-model="ruleForm4.date7"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-form-item>
      </div>

      <div>
        <el-form-item label="骨签拓片人" prop="tpr" class="name2">
          <el-input v-model="ruleForm4.tpr" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="拓片时间" class="name2">
          <el-form-item prop="date8">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
              v-model="ruleForm4.date8"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-form-item>
      </div>

      <div>
        <el-form-item label="骨签缀合人" prop="zhr" class="name2">
          <el-input v-model="ruleForm4.zhr" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="缀合时间" class="name2">
          <el-form-item prop="date9">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
              v-model="ruleForm4.date9"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-form-item>
      </div>

      

      <el-form-item label="文字保存" prop="wzbaocun">
        <el-select v-model="ruleForm4.wzbaocun" placeholder="" class="name">
          <el-option v-for="(item,index) in wzbaocunValue"
                    :key="index"
                    :label="item.title"
                    :value="item.id"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="骨签发表" prop="fabiao" class="name">
        <el-input v-model="ruleForm4.fabiao" placeholder=""></el-input>
      </el-form-item>

      <div>
        <el-form-item label="骨签研究" prop="yanjiu" class="name2">
          <el-input v-model="ruleForm4.yanjiu" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="骨签时代" prop="shidai" class="name2">
          <el-input v-model="ruleForm4.shidai" placeholder=""></el-input>
        </el-form-item>
      </div>

      <div>
        <el-form-item label="骨签展览" prop="zhanlan" class="name2">
          <el-input v-model="ruleForm4.zhanlan" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="骨签组合" prop="zuhe" class="name2">
          <el-input v-model="ruleForm4.zuhe" placeholder=""></el-input>
        </el-form-item>
      </div>

      <div>
        <el-form-item label="骨签颜色" prop="color" class="name2">
          <el-input v-model="ruleForm4.color" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="释文字数" prop="wordNumber" class="name2">
          <el-input v-model="ruleForm4.wordnumber" placeholder="" 
          :disabled = 'true'></el-input>
        </el-form-item>
      </div>

      <el-form-item label="二级类别" prop="category2" class="name2">
           <el-select
              v-model="ruleForm4.category2"
              placeholder="请先选择一级类别"
              class="name"
              @change="$forceUpdate()">
                <el-option
                  v-for="(item,index) in category2Value"
                  :key="index"
                  :label="item.title"
                  :value="item.id"
                >
            </el-option>
        </el-select>
      </el-form-item>

    <!-- 动态增减-->
      <div  v-for="(item, index) in ruleForm4.dynamicItem" 
            :key="index">
        <el-form-item
          label="文字类别"
          :prop="'dynamicItem.' + index + '.id'"
          class="name"
        >
          <el-select v-model="item.name" placeholder="" class="name" @change="$forceUpdate()">
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
                @input="changeFn()"
            ></el-input>
        </el-form-item>
      </div>


        <div>
            <el-row :gutter="20">
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <div class="block">
                <span class="demonstration" style="font-size: 18px"
                  >骨签正面</span
                >
                <el-image
                  style="width: 580px; height: 400px"
                  :src="tp1"
                >
                </el-image>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light">
              <div class="block">
                <span class="demonstration" style="font-size: 18px"
                  >骨签背面</span
                >
                <el-image
                  style="width: 580px; height: 400px"
                  :src="tp2"
                >
                </el-image>
              </div>
            </div>
          </el-col>
        </el-row>
        </div>


      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm4')"
          >修改</el-button
        >
        
        
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
      dynamicItem: [{ id: "", content: "" }],

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


      ruleForm4: {
        name: "",
        jgname: "",
        date1: "",
        place: "",
        home: "",
        category: "",
        aokou: "",
        sizec: "",
        sizek: "",
        sizeh: "",
        djr: "",
        date2: "",
        swr: "",
        date3: "",
        zlr: "",
        date4: "",
        pzr: "",
        date5: "",
        cxr: "",
        date6: "",
        mbr: "",
        date7: "",
        tpr: "",
        date8: "",
        zhr: "",
        date9: "",
        gqbaocun: "",
        wzbaocun: "",
        fabiao: "",
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
        category: [
          { required: true, message: "请选择骨签类别", trigger: "change" },
        ],
        aokou: [
          { required: true, message: "请选择凹口位置", trigger: "change" },
        ],
        gqbaocun:[
          { required: true, message: "请选择骨签保存类型", trigger: "change" },
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
          {
            id:1,
            title:'工官',
            category2Value:[
              {id:8,title:"河南工官"},
              {id:9,title:"南阳工官"},
              {id:10,title:"颍川工官"}
            ]
          },
          {
            id:2,
            title:'中央官署',
            category2Value:[
              {id:11,title:"光禄"},
              {id:12,title:"卫尉"},
              {id:13,title:"少府属官"},
              {id:14,title:"太仆"}
            ]
          },
          {
            id:3,
            title:'列侯及其他',
            category2Value:[
              {id:15,title:"列侯"},
              {id:16,title:"其他"}
            ]
          },
          {
            id:4,
            title:'兵器',
            category2Value:[
              {id:17,title:"乘"},
              {id:18,title:"御"},
              {id:19,title:"燥"},
              {id:20,title:"射"},
              {id:21,title:"服"},
              {id:22,title:"力"},
              {id:23,title:"大黄"},
              {id:24,title:"石"}
            ]
          },
          {
            id:5,
            title:'代号及数量',
            category2Value:[
              {id:25,title:"甲"},
              {id:26,title:"乙"},
              {id:27,title:"丙"},
              {id:28,title:"丁"},
              {id:29,title:"第"},
            ]
          },
          {
            id:6,
            title:'其他类',
            category2Value:[
              {id:30,title:"其他"}
            ]
          },
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
        console.log(this.$route.query.row);
             
            var str = this.$route.query.row.explanationList;
            console.log(str)
            if(str.length != 0){
                //alert("111");
              /* 合并文字内容及文字类别（防止初次查询没有分割的可能） */
              var newStr = [];
              var a = [];
              for(var i=0;i<str.length;i++){
                  a.push(str[i].charGenreId)
                  newStr.id = a.join("／");
                  a = [];
                  a.push(str[i].content)
                  newStr.content = a.join("／");
                  a = [];
                  //console.log(newStr)
              }
  
              /* 用分隔符将文字内容及文字类别分开 */
                  // 分割文字内容
                  
                  var b = newStr.content.split("／");
                  /* 计算文字内容个数 */
                          var len = 0;
                          for (let i = 0; i < b.length; i++) {
                              for(var j =0;j<b[i].length;j++){    
                              var s = b[i].charAt(j);
                              if (s.match(/[^\x00-\xff]/ig) != null) {
                                  len += 1;
                              }
                              }
                          }
                          
                  // 定义空数组存放
                  var newStrs = [];
                  // 判断文字类别是否为空
                  if(newStr.id != null){
                      // 如果不为空
                      // 分割文字类别
                      var c = newStr.id.split("／");
                      for(let i=0;i<b.length;i++){
                          newStrs[i] = new Object();
                          newStrs[i].content = b[i];
                          newStrs[i].id = c[i];
                      }
                  }else{
                      for(let i=0;i<b.length;i++){
                      newStrs[i] = new Object();
                      newStrs[i].content = b[i];
                      newStrs[i].id = null;
                      }
                  }
            }
            this.ruleForm4.name = this.$route.query.row.bid;    
            this.ruleForm4.date1 = this.$route.query.row.unearthedTime;
            this.ruleForm4.home = this.$route.query.row.unearthedHouse;
            this.ruleForm4.jgname = this.$route.query.row.collectionOrganization;
            this.ruleForm4.place = this.$route.query.row.unearthedLocation;
            this.ruleForm4.category = this.$route.query.row.primaryGenreId;
            this.ruleForm4.category2 = this.$route.query.row.secondaryGenreId;
            this.ruleForm4.gqbaocun = this.$route.query.row.gpPreserveStatusId;
            this.ruleForm4.aokou = this.$route.query.row.atPositionId;
            this.ruleForm4.sizec = this.$route.query.row.length;
            this.ruleForm4.sizek = this.$route.query.row.width;
            this.ruleForm4.sizeh = this.$route.query.row.thickness;
            this.ruleForm4.djr = this.$route.query.row.registerPeople;
            this.ruleForm4.date2 = this.$route.query.row.registerTime;
            this.ruleForm4.swr = this.$route.query.row.interpretPeople;
            this.ruleForm4.date3 = this.$route.query.row.interpretTime;
            this.ruleForm4.zlr = this.$route.query.row.arrangePeople;
            this.ruleForm4.date4 = this.$route.query.row.arrangeTime;
            this.ruleForm4.pzr = this.$route.query.row.picturePeople;
            this.ruleForm4.date5 = this.$route.query.row.pictureTime;
            this.ruleForm4.cxr = this.$route.query.row.rustPeople;
            this.ruleForm4.date6 = this.$route.query.row.rustTime;
            this.ruleForm4.mbr = this.$route.query.row.copyPeople;
            this.ruleForm4.date7 = this.$route.query.row.copyTime;
            this.ruleForm4.tpr = this.$route.query.row.rubbingPeople;
            this.ruleForm4.date8 = this.$route.query.row.rubbingTime;
            this.ruleForm4.zhr = this.$route.query.row.composePeople;
            this.ruleForm4.date9 = this.$route.query.row.composeTime;
            this.ruleForm4.wzbaocun = this.$route.query.row.charPreserveStatusId;
            this.ruleForm4.fabiao = this.$route.query.row.publish;
            this.ruleForm4.yanjiu = this.$route.query.row.research;
            this.ruleForm4.shidai = this.$route.query.row.era;
            this.ruleForm4.zhanlan = this.$route.query.row.exhibition;
            this.ruleForm4.zuhe = this.$route.query.row.combination;
            this.ruleForm4.color = this.$route.query.row.color;
            this.tp1 = this.$route.query.row.imageA;
            this.tp2 = this.$route.query.row.imageB;
            // 替换url
            // 替换url
            /* if(url != null){
              url = url.substring(url.length-12,url.length);
              this.tp1 = "http://ste.frpgz1.idcfengye.com/gq_message_sys/basic-info/" + url;
              console.log(this.tp1)
            }else{
              this.tp1 = url;
            }
            
            url = this.$route.query.row.imageB;
            if(url != null){
              url = url.substring(url.length-12,url.length);
              this.tp2 = "http://ste.frpgz1.idcfengye.com/gq_message_sys/basic-info/" + url;
              console.log(this.tp2);
            }else{
              this.tp2 = url;
            } */
            
            //this.srcList.push(this.$route.query.row.imageA);
            //this.srcList.push(this.$route.query.row.imageB);
            this.ruleForm4.wordnumber = len;
            this.ruleForm4.dynamicItem = newStrs;
    }, 


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
          this.ruleForm4.aokou = "无";
          }
       
    },
    
    /* 根据所选的一级类别指定不同二级类别的种类 */
    category2Select(num){
      this.ruleForm4.category2 = '';
      this.category2Value = this.categoryValue[num-1].category2Value;
      console.log(this.category2Value)
    },

    handleChange(){
      this.$forceUpdate();
    },
    changeFn(){
      this.$forceUpdate();
    },

    beforeUploadbehind(file) {
      this.fileListbehind.push(file);
      let imagesbehind = [...this.fileListbehind];
      console.log("imagesbehind", imagesbehind);

      this.formData.append("imageB", file);
      return false;
    },
    //图片 逻辑是上传前进行图片处理，将其放到formData表单中，伴随提交一起传递至后台，将其与表单组件函数对应即可




    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("submit");

          let that = this;

          that.formData = new FormData();

          that.formData.append("bid", that.ruleForm4.name);
          that.formData.append("unearthedLocation", that.ruleForm4.place);
          that.ruleForm4.date1 = that.ruleForm4.date1 === null ?'' :that.ruleForm4.date1;
          that.formData.append("unearthedTime", that.ruleForm4.date1);
          that.formData.append("unearthedHouse", that.ruleForm4.home);
          that.formData.append("primaryGenreId", that.ruleForm4.category);
          if(that.ruleForm4.aokou == "无"){
            that.ruleForm4.aokou = 1;
          }
          that.formData.append("atPositionId", that.ruleForm4.aokou);
          that.formData.append("collectionOrganization", that.ruleForm4.jgname);
          that.formData.append("length", that.ruleForm4.sizec);
          that.formData.append("width", that.ruleForm4.sizek);
          that.formData.append("thickness", that.ruleForm4.sizeh);
          that.formData.append("registerPeople", that.ruleForm4.djr);
          that.ruleForm4.date2 = that.ruleForm4.date2 === null ?'' :that.ruleForm4.date2;
          that.formData.append("registerTime", that.ruleForm4.date2);
          that.formData.append("interpretPeople", that.ruleForm4.swr);
          that.ruleForm4.date3 = that.ruleForm4.date3 === null ?'' :that.ruleForm4.date3;
          that.formData.append("interpretTime", that.ruleForm4.date3);

          that.formData.append("arrangePeople", that.ruleForm4.zlr);
          that.ruleForm4.date4 = that.ruleForm4.date4 === null ?'' :that.ruleForm4.date4;
          that.formData.append("arrangeTime", that.ruleForm4.date4);
          that.formData.append("picturePeople", that.ruleForm4.pzr);
          that.ruleForm4.date5 = that.ruleForm4.date5 === null ?'' :that.ruleForm4.date5;
          that.formData.append("pictureTime", that.ruleForm4.date5);
          that.formData.append("rustPeople", that.ruleForm4.cxr);
          that.ruleForm4.date6 = that.ruleForm4.date6 === null ?'' :that.ruleForm4.date6;
          that.formData.append("rustTime", that.ruleForm4.date6);
          that.formData.append("copyPeople", that.ruleForm4.mbr);
          that.ruleForm4.date7 = that.ruleForm4.date7 === null ?'' :that.ruleForm4.date7;
          that.formData.append("copyTime:", that.ruleForm4.date7);
          that.formData.append("rubbingPeople", that.ruleForm4.tpr);
          that.ruleForm4.date8 = that.ruleForm4.date8 === null ?'' :that.ruleForm4.date8;
          that.formData.append("rubbingTime", that.ruleForm4.date8);
          that.formData.append("composePeople", that.ruleForm4.zhr);
          that.ruleForm4.date9 = that.ruleForm4.date9 === null ?'' :that.ruleForm4.date9;
          that.formData.append("composeTime", that.ruleForm4.date9);
          that.formData.append("gpPreserveId", that.ruleForm4.gqbaocun);
          that.formData.append("charPreserveId", that.ruleForm4.wzbaocun);
          that.formData.append("publish", that.ruleForm4.fabiao);
          that.formData.append("research", that.ruleForm4.yanjiu);
          that.formData.append("exhibition", that.ruleForm4.zhanlan);
          that.formData.append("combination", that.ruleForm4.zuhe);
          that.formData.append("era", that.ruleForm4.shidai);
          that.formData.append("color", that.ruleForm4.color);
          that.formData.append("secondaryGenreId", that.ruleForm4.category2);
          that.formData.append(
            "explanationList",
            JSON.stringify(that.ruleForm4.dynamicItem)
          );
          //that.$refs.uploadblack.submit();
          //that.$refs.uploadrub.submit();
          ///that.$refs.uploadcopy.submit();


          axios
            .post(
              "http://127.0.0.1:8082/gq_message_sys/basic-info/update", //插入基础信息端口
              that.formData
            )
            .then(function (result) {
              console.log(result);
              if(result.data.code === 200){
                alert("更新成功!");
              }else{
                alert("更新失败！")
              }
              that.$refs.uploadfront.handleRemovefront();
              that.$refs.uploadbehind.handleRemovebehind(); //提交后清除图片
            });
          that.load = "ture";
        } else {
          console.log("error submit!!");
          alert("更新失败！")
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

