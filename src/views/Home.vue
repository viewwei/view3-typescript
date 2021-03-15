<template>
  <div class="home">
      <button @click="login_in">登陆按钮</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import {namespace} from "vuex-class"
import {userLogin} from "../store/store"
const loginModule = namespace("login")
@Options({
  components: {
  },
})
export default class Home extends Vue {
    msg:string="home"
    index:number =1
    @loginModule.Action("loginIn") loginInFunc!:(userInfo:userLogin)=>void
    @loginModule.State("loginSuccess") loginSuccess!:boolean
    login_in(){
      this.loginInFunc({
        username:"admin",
        password:"123"
      })
    }
    
}
</script>
