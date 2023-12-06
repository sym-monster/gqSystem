<template>
  <div>
    <h1>测试2</h1>
    <div style="width: 50%; margin-top: 50px">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="图片上传">
          //action 如果是手动上传 action随便填一下就好了，自动上传填接口地址就行
          <el-upload
            action="#"
            ref="upload"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :before-upload="beforeUpload"
            :on-remove="handleRemove"
            :auto-upload="false"
            :multiple="true"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      param: "",
      fileList: [],
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      let _this = this;
      this.$refs.upload.submit();

      this.param.append("bid", _this.form.name);

      this.param.append("aimage", _this.img);

      console.log(this.form.name);
      console.log(this.file.name);
      axios
        .post("http://gq.gz2vip.91tunnel.com/earth/addearth", this.param) // .post("https://autumnfish.cn/api/user/reg", this.param)
        .then(function (result) {
          console.log(result);
        });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    beforeUpload(file) {
      this.param = new FormData();
      this.fileList.push(file);
      let images = [...this.fileList];
      console.log("images", images);

      images.forEach((img, index) => {
        this.param.append(`img_${index}`, img); // 把单个图片重命名，存储起来（给后台）
      });

      return false;
    },
  },
};
</script>
<style scoped></style>
