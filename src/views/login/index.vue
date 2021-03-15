<template>
  <div
    class="v-login-main"
    v-loading.fullscreen.lock="fullscreenLoading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <div class="v-main">
      <p class="v-login-title">Login Form</p>
      <el-form ref="form" :model="loginForm" label-position="left">
        <el-form-item>
          <el-input v-model="loginForm.username">
            <template v-slot:prefix>
               <span  class="svg-container">
              <svg-icon icon-class="user" />
            </span>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="loginForm.password" type="password">
            <template v-slot:prefix>
              <span  class="svg-container">
              <svg-icon icon-class="password" />
            </span>
            </template>
          </el-input>
        </el-form-item>
      </el-form>
      <el-button
        type="primary"
        size="medium "
        class="v-login-btn"
        @click="loginClick"
        >Login</el-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { getCurrentInstance } from "vue";
import { namespace } from "vuex-class";
import { Options, Vue, } from "vue-class-component";
const loginModule = namespace("login");
import { ILogin } from "./loginService";
import { ElMessage } from "element-plus";
import { useRouter, useRoute } from "vue-router";
@Options({
  components: {
  },
})
export default class Home extends Vue {
  fullscreenLoading = false;
  cccc(){
    console.log("ddddd")
  }
  loginForm: {
    username: string;
    password: string;
  } = {
    username: "",
    password: "",
  };
  router = useRouter();
  route = useRoute();
  t: (t: string) => string = getCurrentInstance()?.appContext.config
    .globalProperties!.$t;
  @loginModule.Action("loginIn") loginIn!: (
    userInfo: ILogin
  ) => Promise<boolean>;
  @loginModule.State("name") name!: string;
  loginClick() {
    this.loginIn(this.loginForm).then((result) => {
      this.fullscreenLoading = true;
      if (result) {
        ElMessage.success({
          message: this.t("loginSuccess"),
          type: "success",
        });
        let path = this.route.query.redirect;
        if (path != null) {
          this.router.replace(path as string);
        } else {
          this.router.replace("/");
        }
      } else {
        ElMessage.error("登录失败");
      }
    });
  }
}
</script>
<style  scoped>
.v-main >>> .el-input__inner {
  padding-left: 40px !important;
  padding: 25px 0px;
}
</style>
<style   lang="scss" scoped>
.el-input__inner {
  background-color: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  outline: none;
}
.el-input__inner:focus {
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.el-input__inner:hover {
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.v-login-main {
  width: 100%;
  height: 100%;
  background-color: #304156;
  display: flex;
  align-items: center;
  justify-content: center;
  .v-main {
    width: 520px;
    padding: 50px;
    .v-login-title {
      text-align: center;
      padding: 20px 0px;
      font-size: 26px;
      font-weight: bold;
      color: #eee;
    }
    .svg-container {
      padding-top: 8px;
      padding-right: 10px;
      color: #889aa4;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
    }
    .v-login-btn {
      width: 100%;
    }
  }
}
span,
p {
  user-select: none;
}
</style>

