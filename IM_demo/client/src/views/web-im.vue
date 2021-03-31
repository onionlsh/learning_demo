<template>
  <div class="chat">
    
    <!-- 头部：显示订单号 -->
    <div class="header">
      <span>订单：</span>
      <span>20200812001</span>
    </div>

    <!-- 中间：聊天内容展示列表 -->
    <div class="content" ref="content">
      <message :msgList="message"></message>
    </div>

    <!-- 底部：输入框 -->
    <input-box class="bottom-input" @updateMessage="updateMessage"></input-box>
    
  </div>
</template>

<script>
import Message from './components/message';
import InputBox from './components/input-box';
import { SOCKET_URL } from '@/public/constant'
import { parseJson } from '@/public/utils/common';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: { Message, InputBox },
  data(){
    return {
      message:[],
      socket: null,
      orderCode: '123456',
      userCode: 100010,
    }
  },

  computed: {
    ...mapGetters(['chats','sockets'])
  },

  mounted() {
    this.initSocket();
    this.$refs.content.scrollTop = this.$refs.content.scrollHeight;
  },
  updated(){
    this.$refs.content.scrollTop = this.$refs.content.scrollHeight;
  },

  methods: {
    ...mapActions(['addSocket','addChats']),
    updateMessage(msg) {
      this.message.push(msg)
      console.log('updateMessage方法',msg)
      this.socket.send(JSON.stringify(msg))
    },

    // 初始化socket
    initSocket(){

      this.onConnect();

      // 连接成功
      this.socket.onopen = (evt) => { console.log('连接成功',evt) };

      // 连接失败
      this.socket.onerror = (evt) => { console.log('连接失败',evt) };

      // 接收消息
      this.socket.onmessage = (evt) => { this.onMessage(evt) };

      // 关闭连接
      this.socket.onclose = (evt) => { console.log('关闭连接',evt)  };
    },

    onMessage(event){
      //console.log('这里是接收消息的方法体',event)
      const recevieData = event.data;
      if(recevieData instanceof Blob) {
        //console.log('接收到的是流', recevieData.text())
        const promise = recevieData.text();
        promise.then(res => {
          const data = parseJson(res);
          console.log('拿到的是promise对象', data);
        })
      }else {
        const data = parseJson(recevieData)
        console.log('接收到的是非流', data)
       if(data.user_code !== this.userCode){
          this.message.push(data)
       }
      }
    },

    onConnect(){
      let socket = this.sockets && this.sockets[this.orderCode];

      if(!socket){
        const url = SOCKET_URL + this.orderCode;
        socket = new WebSocket(url);
        this.addSocket({orderCode:this.orderCode, socket})
      }

      this.socket = socket
    }
    
  }
}
</script>

<style lang="scss" scoped>
.chat {
  display: flex;
  flex-direction: column;
  height: 100%;

  .header {
    padding: 18px;
    background-color: #ace0ff;
    text-align: left;
  }

  .content {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: #FAFAFA;
  }

  .bottom-input {
    justify-self: end;
    height: 150px;
    background-color: #FAFAFA;
    border-top: 1px solid #CCCCCC;
  }


}
</style>