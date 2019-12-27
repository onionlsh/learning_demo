<template>
  <div>
    <p>登录页面</p>登录帐号：<input type="text" v-model="userName" />
    <br />
    登录密码：<input type="password" v-model="password" />
    <button @click="login">登录</button>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'

@Component
export default class Login extends Vue {

  private password: string = ''
  private userName: string = ''

  private login():void {
    console.log('你点击登录,用户名：',this.userName, '密码：', this.password)
  }
}

</script>