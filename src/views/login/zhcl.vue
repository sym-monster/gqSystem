<template>
  <div>
    <div class="tabs">
      <span style="font-size: 18px">组合处理</span>
    </div>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <div class="block">
            <span class="demonstration" style="font-size: 18px">骨签正面</span>
            <el-image :src="src"></el-image>
          </div>
        </div>
      </el-col>
      <el-col :span="12"
        ><div class="grid-content bg-purple-light">
          <div class="block">
            <span class="demonstration" style="font-size: 18px">骨签背面</span>
            <el-image :src="src">
              <div slot="placeholder" class="image-slot">
                加载中<span class="dot">...</span>
              </div>
            </el-image>
          </div>
        </div></el-col
      >
    </el-row>
    <div class="aa">
      <el-empty image-size="0" description="描述文字" class="ss"
        >asdasdsa安达市大叔大婶多按时大声道按时阿萨德
        <p>sadadsa</p>
      </el-empty>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      src: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
    };
  },
};
</script>
<style lang="scss" scoped>
.ss {
  width: 100%;
}
.block {
  text-align: center;
  margin: auto;
  width: 580px;
  height: 450px;
  padding: 30px 0 0 0;
}
.tabs {
  width: 100%;
  height: 35px;
}
//布局css
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
