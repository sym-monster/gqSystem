<template>
  <div class="">
    <div class="sousuo">
     
      <el-input
        v-model="bid"
        size="small"
        taht
        placeholder="骨签编号"
        class="handle-input mr10"
      ></el-input>
      <el-button
        type="primary"
        icon="el-icon-search"
        @click="getto(bid)"
        size="small"
        >搜索
      </el-button>
    </div>
    <div class="main">
      <div>
        <span style="font-size: 18px">骨签信息</span>
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
                  :text-align="center"
                  :preview-src-list="srcList"
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
                  :text-align="center"
                  :preview-src-list="srcList"
                >
                </el-image>
              </div>
            </div>
          </el-col>
        </el-row>


        
        <el-empty :image-size="1" description="文字描述">
          <h1>{{ bid }}号骨签</h1>
          <div class="text">
            <el-descriptions :colon="false">
              <el-descriptions-item>{{ place }}</el-descriptions-item>
              <el-descriptions-item>{{ date1 }}</el-descriptions-item>
              <el-descriptions-item>{{ home }}</el-descriptions-item>

              <el-descriptions-item>{{ aokou }}</el-descriptions-item>
              <el-descriptions-item>{{ jgname }}</el-descriptions-item>
              <el-descriptions-item>{{ color }}</el-descriptions-item>

              <el-descriptions-item>{{ sizec }}</el-descriptions-item>
              <el-descriptions-item>{{ sizek }}</el-descriptions-item>
              <el-descriptions-item>{{ sizeh }}</el-descriptions-item>
            </el-descriptions>
            <el-descriptions :colon="false" :column="4">
              <el-descriptions-item>{{ djr }}</el-descriptions-item>
              <el-descriptions-item>{{ date2 }}</el-descriptions-item>
              <el-descriptions-item>{{ swr }}</el-descriptions-item>
              <el-descriptions-item>{{ date3 }}</el-descriptions-item>

              <el-descriptions-item>{{ zlr }}</el-descriptions-item>
              <el-descriptions-item>{{ date4 }}</el-descriptions-item>
              <el-descriptions-item>{{ pzr }}</el-descriptions-item>
              <el-descriptions-item>{{ date5 }}</el-descriptions-item>

              <el-descriptions-item>{{ cxr }}</el-descriptions-item>
              <el-descriptions-item>{{ date6 }}</el-descriptions-item>
              <el-descriptions-item>{{ mbr }}</el-descriptions-item>
              <el-descriptions-item>{{ date7 }}</el-descriptions-item>

              <el-descriptions-item>{{ tpr }}</el-descriptions-item>
              <el-descriptions-item>{{ date8 }}</el-descriptions-item>
              <el-descriptions-item>{{ zhr }}</el-descriptions-item>
              <el-descriptions-item>{{ date9 }}</el-descriptions-item>

              <el-descriptions-item>{{ yanjiu }}</el-descriptions-item>
              <el-descriptions-item>{{ zhanlan }}</el-descriptions-item>
              <el-descriptions-item>{{ zuhe }}</el-descriptions-item>
              <el-descriptions-item>{{ wordNumber }}</el-descriptions-item>
            </el-descriptions>
            <el-descriptions :colon="false">
              <el-descriptions-item>{{ gqbaocun }}</el-descriptions-item>
              <el-descriptions-item>{{ wzbaocun }}</el-descriptions-item>
              <el-descriptions-item>{{ fabiao }}</el-descriptions-item>


              <el-descriptions-item>{{ shidai }}</el-descriptions-item>
              <el-descriptions-item>{{ genre }}</el-descriptions-item>
              <el-descriptions-item>{{ genre2 }}</el-descriptions-item>
            </el-descriptions>
            <el-descriptions :colon="false" :column="1">
              <el-descriptions-item>{{ texts }}</el-descriptions-item>
            </el-descriptions>
          </div>
          <!-- <p>{{List }}</p>-->
        </el-empty>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import tp1 from "../../assets/bh008479A.jpg";
import tp2 from "../../assets/bh008479B.jpg"; //示例图

export default {
  name: "first",
  data() {
    return {
      bid: "",
      row:"",
      tp1,
      tp2,
      //tp3,
      //tp4
      //tp5, 黑白图片等
      List: [],
      List2: [],
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
      center: "",
      genre: "",
      genre2: "",
      text: "",
      color:"",

      srcList: [{}, {}],

      query: {
        address: "",
        name: "",
        pageIndex: 1,
        pageSize: 10,
      },

      options: [
        {
          value: "选项1",
          label: "骨签类型1",
        },
        {
          value: "选项2",
          label: "骨签类型2",
        },
        {
          value: "选项3",
          label: "骨签类型3",
        },
        {
          value: "选项4",
          label: "骨签类型4",
        },
      ],
      value: "",
    };
  },

  methods: {

    // 触发搜索按钮
    /* getto(bid) {
      this.bid = bid;
      var that = this;
      axios
        .get(
          "http://sym.free.idcfengye.com/gq_message_sys/basic-info/queryByBid?Bid=" + this.bid
        ) // 查询端口，通过bid查询 也可用"http://gq.gz2vip.91tunnel.com/query?bid=参数"
        .then(function (response) {
          console.log(response.data);
          //that.List = response.data;
          that.bid = response.data.data.bid;
          that.place = "出土地点: " + response.data.data.unearthedLocation;
          that.date1 = "出土时间: " + response.data.data.unearthedTime;
          that.home = "所属房间: " + response.data.data.unearthedHouse;
          that.color = "骨签颜色: " + response.data.data.color;
          that.aokou = "凹口位置: " + response.data.data.atPosition;
          that.jgname =
            "收藏机构: " + response.data.data.collectionOrganization;
          that.sizec = "骨签长度: " + response.data.data.length + "cm";
          that.sizek = "骨签宽度: " + response.data.data.width + "cm";
          that.sizeh = "骨签厚度: " + response.data.data.thickness + "cm";
          that.djr = "登记人员: " + response.data.data.registerPeople;
          that.date2 = "登记时间: " + response.data.data.registerTime;
          that.swr = "释文人员: " + response.data.data.interpretPeople;
          that.date3 = "释文时间: " + response.data.data.interpretTime;
          that.zlr = "整理人员: " + response.data.data.arrangePeople;
          that.date4 = "整理时间: " + response.data.data.arrangeTime;
          that.pzr = "拍照人员: " + response.data.data.picturePeople;
          that.date5 = "拍照时间: " + response.data.data.pictureTime;
          that.cxr = "除锈人员: " + response.data.data.rustPeople;
          that.date6 = "除锈时间: " + response.data.data.rustTime;
          that.mbr = "摹本人员: " + response.data.data.copyPeople;
          that.date7 = "摹本时间: " + response.data.data.copyTime;
          that.tpr = "拓片人员: " + response.data.data.rubbingPeople;
          that.date8 = "拓片时间: " + response.data.data.rubbingTime;
          that.zhr = "缀合人员: " + response.data.data.composePeople;
          that.date9 = "缀合时间: " + response.data.data.composeTime;
          that.gqbaocun = "骨签保存: " + response.data.data.gpPreserveStatus;
          that.wzbaocun = "文字保存: " + response.data.data.charPreserveStatus;
          that.fabiao = "骨签发表: " + response.data.data.publish;
          that.yanjiu = "骨签研究: " + response.data.data.research;
          that.zhanlan = "骨签展览: " + response.data.data.exhibition;
          that.zuhe = "骨签组合: " + response.data.data.combination;
          that.shidai = "骨签时代: " + response.data.data.era;
          that.color = "骨签颜色: " + response.data.data.color;
          that.wordNumber = "骨签颜色: " + response.data.data.wordNumber;
          that.genre = "一级类别: " + response.data.data.primaryGenre;
          that.genre2 = "二级类别: " + response.data.data.secondaryGenre;
          that.texts =
            "文字类别及内容: " +
            JSON.stringify(response.data.data.explanationList); 
          that.text = response.data.data.explanationList;
          // 计算释文字数 
          var len = 0;
          for(var i = 0; i < that.text.length; i++){
            for(var j = 0; j < that.text[i].content.length; j++){
               var s = that.text[i].content.charAt(j);
                if (s.match(/[^\x00-\xff]/ig) != null) {
                  len += 1;
                }
            }
          }
          that.wordNumber = "释文字数："+len;

          let url = response.data.data.imageA;
          that.tp1 = "http://" + url;
          url = response.data.data.imageB;
          that.tp2 = "http://" + url;

          that.srcList.push(response.data.imageA);
          that.srcList.push(response.data.imageB);
          
        })
        .catch(function (error) {
          console.log(error);
        });
    }, */
    
    getto(bid){
      this.bid = bid;
      axios
        .get(
          "http://127.0.0.1:8082/gq_message_sys/basic-info/queryByBid?Bid=" + this.bid
        ) // 查询端口，通过bid查询 也可用"http://gq.gz2vip.91tunnel.com/query?bid=参数"
        .then( (response) => {
          console.log(response.data);
          if(response.data.code == 101){
            alert("查询的骨签不存在，请重新输入编号！")
          }else{
            var row = response.data.data;
            this.$router.push({ path: "/bhedit", query: { row}, });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
};
</script>
<style lang="scss" scoped>
.text {
  text-align: center;
  width: 1100px;
  font-size: 30px;
}
.sousuo {
  position: relative;
  top: 10px;
  width: 100%;
  //float: right;
  background-color: #fff;
  text-align: right;
  margin-right: 10px;
}
.handle-input {
  width: 300px;
  display: inline-block;
}
.main {
  margin: auto;
  position: relative;
  top: 50px;
  height: 600px;
  width: 100%;
}
.block {
  text-align: center;
  margin: auto;
  width: 580px;
  height: 450px;
  padding: 30px 0 0 0;
}

//布局组件css
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>

