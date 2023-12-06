<template>
  <div class="login_container">
    <div class="login_box">
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        label-position="left"
        label-width="0px"
        class="login-form"
      >
        <h1 class="title">欢迎使用骨签信息系统</h1>
        <p></p>
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            type="text"
            auto-complete="off"
            placeholder="请输入账户名"
          >
            <svg-icon
              slot="prefix"
              icon-class="user"
              class="el-icon-user-solid"
            />
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            auto-complete="off"
            placeholder="请输入密码"
            show-password
          >
            <svg-icon
              slot="prefix"
              icon-class="password"
              class="el-icon-lock"
            />
          </el-input>
        </el-form-item>

        <el-form-item style="width: 100%">
          <el-button
            size="medium"
            type="primary"
            style="width: 100%"
            @click="goto(loginForm.username, loginForm.password, 'loginForm')"
          >
            <span>登 录</span>
          </el-button>
        </el-form-item>
        <el-form-item style="width: 100%">
          <el-button
            size="medium"
            type=""
            style="width: 100%"
            @click="resetForm('loginForm')"
          >
            <span>重 置</span>
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// 加密

export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    goto: function (a, b) {
      this.a = a;
      this.b = b;

      if (a == "admin" && b == "123000") {
        this.$router.push({
          path: "/gqid",
        });
      } else {
        this.$message.error("请填写正确的用户名及密码!");
        return false;
      } //带参跳转函数
    }, //带参跳转函数
    resetForm(formName3) {
      this.$refs[formName3].resetFields();
    },
  },
};
</script>

<style scoped>
.login_container {
  background-image: linear-gradient(-180deg, #1a1454 0%, #0e81a5 100%);
  /*background-image: url("../images/bg_login.png");*/
  width: 100%;
  position: absolute;
  height: 100%;
}

.login_box {
  /* background-color: #fff; */
  border-radius: 10px;
  background-color: #2e527bb3;
  height: 500px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.title {
  margin: 40px auto 70px auto;
  text-align: center;
  color: #ffffff;
}

.login-form {
  border-radius: 6px;

  width: 385px;
  padding: 25px 25px 5px 25px;
}
</style>
