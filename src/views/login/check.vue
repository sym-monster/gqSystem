<template>
  <el-card class="box-card">
    <el-table :data="tableData" border stripe style="width: 100%">
      <el-table-column type="selection" align="center"></el-table-column>
      <el-table-column
        prop="bid"
        label="骨签编号"
        align="center"
        width="100"
      ></el-table-column>
      <el-table-column
        prop="unearthedTime"
        label="出土时间"
        align="center"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="length"
        label="长"
        align="center"
        width="75"
      ></el-table-column>
      <el-table-column
        prop="width"
        label="宽"
        align="center"
        width="75"
      ></el-table-column>
      <el-table-column
        prop="thickness"
        label="厚"
        align="center"
        width="75"
      ></el-table-column>
      <el-table-column
        prop="unearthedLocation"
        label="出土地点"
        align="center"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="atPosition"
        label="弯部"
        align="center"
        width="100"
      ></el-table-column>
      <el-table-column
        prop="gpPreserveStatus"
        label="骨签保存"
        align="center"
        width="100"
      ></el-table-column>
      <el-table-column
        prop="charPreserveStatus"
        label="文字保存"
        align="center"
        width="100"
      ></el-table-column>
      <el-table-column
        prop="color"
        label="颜色"
        align="center"
        width="100"
      ></el-table-column>

      <el-table-column label="操作" align="center">
        <template slot-scope="scope" class="active">
          <el-button
            @click="update(scope.row)"
            type="primary"
            icon="el-icon-edit"
            circle
          ></el-button>
          <el-button
            @click="removeData(scope.row.id)"
            type="danger"
            icon="el-icon-delete"
            circle
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row :gutter="20">
      <el-col :span="6" :offset="12">
        <div class="block">
          <el-pagination
            background
            @current-change="handleCurrentChange(currentPage)"
            :current-page.sync="currentPage"
            :page-size="pageSize"
            layout="total, prev, pager, next, jumper"
            :total="totalNumber"
          ></el-pagination>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      currentPage: 1, //当前页数
      pageSize: 20, //每页获取条数（页面大小）
      tableData: [], //存放从后端传来的数据
      totalNumber:''
    };
  },
  methods: {
    check(currentPage) {
      axios
        .get(
          "http://127.0.0.1:8082/gq_message_sys/basic-info/checkBatch?pageNum=" +
            currentPage
        )
        .then((res) => {
          console.log(res);
          this.tableData = [...res.data.data];
          console.log(this.tableData);
          /* 获取总条数 */
          this.totalNumber = res.data.total;
          /* 截取出土地点 */
          for(var i = 0; i < this.tableData.length; i++){
            this.tableData[i].unearthedTime = this.tableData[i].unearthedTime.slice(0,9);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // 跳转到修改页面
    update(row) {
      console.log(row);
      this.$router.push({ path: "/edit", query: { row } });
    },

    // 改变当前页数
    handleCurrentChange(currentPage) {
      this.check(currentPage-1);
      console.log(`当前页: ${currentPage}`);
    },
  },

  created() {
    this.check(0);
  },
};
</script>