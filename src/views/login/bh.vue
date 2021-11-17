<template>
  <div class="">
    <div class="sousuo">
      <el-select v-model="value" filterable placeholder="请选择" size="small">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-input
        v-model="query.name"
        size="small"
        placeholder="骨签编号"
        class="handle-input mr10"
      ></el-input>
      <el-button
        type="primary"
        icon="el-icon-search"
        @click="handleSearch"
        size="small"
        >搜索
      </el-button>
    </div>
    <div class="main">
      <div>
        <span style="font-size: 18px">骨签编号</span>
      </div>
      <!-- <div class="image">
        <div class="demo-image__preview">
          <el-image
            style="width: 300px; height: 300px"
            :src="tp1"
            :preview-src-list="srcList"
          >
          </el-image>
        </div>
      </div>-->
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
                  :preview-src-list="srcList"
                  :text-align="center"
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
                  :preview-src-list="srcList"
                  :text-align="center"
                >
                </el-image>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-empty :image-size="1" description="文字描述">
          <h1>008479号骨签</h1>
          <p></p>
        </el-empty>
      </div>
    </div>
  </div>
</template>

<script>
import tp1 from "../../assets/bh008479A.jpg";
import tp2 from "../../assets/bh008479B.jpg";
export default {
  name: "first",
  data() {
    return {
      tp1,
      tp2,
      //url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      srcList: [
        tp1,
        tp2,
        //"https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
        //"https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
      ],

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
  created() {
    this.getData();
  },
  methods: {
    // 触发搜索按钮
    handleSearch() {
      this.$set(this.query, "pageIndex", 1);
      this.getData();
    },
  },
};
</script>
<style lang="scss" scoped>
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
