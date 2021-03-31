<template>
  <div class="input-box">
    <div class="operate-btn">
      <i class="el-icon-picture"></i>
      <i class="el-icon-upload"></i>
    </div>
    <div class="text-input">
      <textarea
        v-model="inputMsg"
        draggable="false"
        @keyup.13.ctrl.exact="onEnterAndCtrl"
        @keyup.13.exact="onEnter"
        @keydown.13.prevent=""
      />
    </div>
    <div class="bottom-tips">
      <span>按下Enter发送内容/ Ctrl+Enter换行</span>
    </div>
  </div>
</template>

<script>
import img1 from '@/assets/images/1.jpg';
import { mapGetters } from 'vuex';
/* import axios from 'axios'; */

export default {
  data() {
    return {
      inputMsg: '',
      img1
    };
  },

  computed: {
    ...mapGetters(['chats','sockets','userCode']),
  },

  methods: {
    onEnterAndCtrl() {
      this.inputMsg += '\n';
    },

    onEnter() {
      if (!this.inputMsg) return;
      this.sendMsg();
    },

    /**
     * 发送消息
     */
    sendMsg(){
      const msgItem = {
        user_code: this.userCode,
        user_name: '当前发言人',
        isClient: false,
        type: '',
        avatar: this.img1,
        createDate: new Date().getTime(),
        content: this.inputMsg.replace(/\n/g, '<br />')
      };
      

      /* const baseUrl = 'http://test.service.heygears.com:23456/design/api/v1/chat/sendmsg';
      const params = {
        "content": this.inputMsg.replace(/\n/g, '<br />'),
        "desc": "测试发送消息",
        "media": 1, // 文本
        "order_code": "123456",
        "pic": "",
        "uid": "88abfb6af8164963b9eb78038d5d62ba",
        "user_type": 2  //客户端
      };
      axios.post(baseUrl, params).then(() => {}); */


      this.$emit('updateMessage', msgItem);
      this.inputMsg = '';
      

    }
  }
};
</script>

<style lang="scss" scoped>
.input-box {
  display: flex;
  flex-flow: column;

  .operate-btn {
    padding: 3px 12px;
    height: 30px;
    line-height: 30px;
    text-align: left;
    i {
      cursor: pointer;
      margin-right: 18px;
      font-size: 24px;
    }
  }

  .text-input {
    flex: 1;
    padding: 0 16px;

    textarea {
      resize: none;
      width: 100%;
      height: 100%;
      color: #333333;
      font-size: 16px;
      border: none;
      border-radius: 4px;
      -webkit-appearance: none;
      outline: none;
      background-color: #fafafa;
    }
  }

  .bottom-tips {
    justify-self: end;
    padding: 6px 16px;
    font-size: 12px;
    color: #cccccc;
    text-align: right;
  }
}
</style>
