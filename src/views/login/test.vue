<template>
  <div>
    <h1>测试页面</h1>

    <!--<input
      type="file"
      class="fonts"
      name=""
      @change="afterRead"
      ref="updata"
      accept="image/*"
      id="upload"
    />

    <label for="upload">
      <div v-show="src"><img :src="src" alt="" srcset="" /></div>
      <div v-show="!src">
        <van-icon name="plus" />
      </div>
    </label>-->
    <el-upload
      action="#"
      list-type="picture-card"
      :auto-upload="false"
      v-model="src"
    >
      <i slot="default" class="el-icon-plus"></i>

      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="src" alt="" />
      </el-dialog>
      <el-button
        style="margin-left: 10px"
        size="small"
        type="success"
        @click="submitUpload"
        >上传到服务器</el-button
      >
    </el-upload>

    <input v-model="city" placeholder="城市" />
    <input type="button" value="get请求" class="get" @click="get(city)" />
    <input type="button" value="post请求" class="post" @click="post(src)" />

    <p>{{ city }}</p>
    <p>{{ weatherList }}</p>
  </div>
</template>

<script>
//api.get("https://autumnfish.cn/api/joke/list?num=3");
//import qs from "qs";
import axios from "axios";

export default {
  data() {
    return {
      src: "",
      dialogVisible: false,
      joke: "这是一个笑话",
      city: "",
      weatherList: [],
    };
  },
  methods: {
    afterRead() {
      let that = this;

      let file = this.$refs.updata.files[0];
      //   console.log(file);
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        //   console.log(e);
        that.src = this.result; //显示缩略图
        // console.log(this.result);
      };
    },
    post(src) {
      this.src = src;
      console.log(this.src);
      axios
        .post("https://autumnfish.cn/api/user/reg", { username: "153572" })
        .then(function (res) {
          console.log(res);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    get(city) {
      //this.api
      // .get("api/common/adver-getadverlistbymarking?marking=global_newcomer")
      // .then((res) => {
      //    console.log(res);
      //  });
      //console.log(this.joke);
      this.city = city;
      var that = this;
      axios
        //.get("https://autumnfish.cn/api/joke") //笑话
        .get("http://gq.gz2vip.91tunnel.com/earth/" + this.city) //天气    基础表
        //.get("http://gq.gz2vip.91tunnel.com/explanation?bid=" + this.city) //天气   查释文表
        .then(function (response) {
          //console.log(response.data); //笑话
          //that.joke = response.data; //笑话.data是对应的值
          console.log(response.data);
          that.weatherList = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style>
/* 图片上传 */
</style>
