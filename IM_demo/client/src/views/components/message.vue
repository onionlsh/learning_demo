<template>
  <ul class="message-ul">
    <li v-for="(item,index) in msgList" :key="index" 
      :class="item.user_code === userCode ? 'li-right': 'li-left'">
      <div class="image">
        <avatar :imageUrl="item.avatar"></avatar>
      </div>
      <div class="body">
        <div :class="item.user_code === userCode ? 'body-top-right': 'body-top-left'">
          <span class="username">{{ item.user_name }}</span>
          <span class="create-time"> {{ (item.createDate+(index * 2000)) | utcLocalTime }} </span>
        </div>
        <div class="content">
          <p v-html="xss(item.content)"></p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import Avatar from './avatar';
import { mapGetters } from 'vuex';


export default {
  components: {
    Avatar
  },
  props: {
    msgList: {
      type: Array,
      required: true,
      default() {
        return []
      }
    }
  },
  computed: {
    ...mapGetters(['userCode'])
  },
  data(){
    return {
      userId: 5
    }
  },
}
</script>

<style lang="scss" scoped>
.message-ul{
  li {
    padding:16px;
    .body {
      margin: 0 10px;

      .body-top-right,
      .body-top-left {
        display: flex;
        line-height: 20px;

        .username {
          color: #666666;
        }

        .create-time {
          padding: 0 6px;
          font-size: 12px;
          color: #999999;
        }
      }
      
      .content {
        position: relative;
        display: inline-block;
        margin-top: 8px;
        padding: 12px;
        border-radius: 10px;
        background-color: #FAFAFA;
        text-align: left;

        &::after {
          position: absolute;
          top: 10px;
          content: '';
          width: 0;
          height: 0;
        }

      }
    }
  }

  .li-left {
    display: flex;
    flex-direction: row;
    text-align: left;

    .body>.content {
      background-color: #FFFFFF;
      &::after {
        left: -10px;
        border-top: 10px solid #FFFFFF;
        border-left: 10px solid transparent;
      }
    }
  }

  .li-right {
    display: flex;
    flex-direction: row-reverse;
    text-align: right;
    
    .body>.content {
      color: #FFFFFF;
      background-color: #2196f3;
      &::after {
        right: -10px;
        border-top: 10px solid #2196f3;
        border-right: 10px solid transparent;
      }
    }

    .body>.body-top-right {
      flex-flow: row-reverse;
    }
  }
  
}
</style>