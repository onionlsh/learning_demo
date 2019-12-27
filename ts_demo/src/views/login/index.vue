
<script lang="tsx">
import { Vue, Component} from "vue-property-decorator"

@Component({})
export default class Login extends Vue {
  login(): void {
    console.log('你点击了登录,登录名:')
  }

  render (h){
    return (
      <div>
        <p>登录页面</p>登录帐号：<input type="text"  />
        <br />
        登录密码： <input type="password" name="password" />
        <button onClick={this.login}>登录</button>
      </div>
    )
  }
}
</script>