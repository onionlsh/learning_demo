<template>
  <div class="head_nav">
    <el-col :span="6" class="left_logo">
      <img src="../../assets/headNav/head_log.png" alt="">
    </el-col>
    <div class="right_menu">

      <div class="help right_menu_item">
        <el-tooltip class="item" effect="dark" :content="lang.head_nav_help_tips" placement="bottom">
          <img src="../../assets/headNav/help_nor.png" alt="">
        </el-tooltip>
      </div>

      <div class="customer right_menu_item">
        <el-tooltip class="item" effect="dark" :content="lang.head_nav_customer_tips" placement="bottom">
          <img src="../../assets/headNav/customer_nor.png" alt="">
        </el-tooltip>
      </div>

      <div class="notice right_menu_item">
        <el-tooltip class="item" effect="dark" :content="lang.head_nav_notice_tips" placement="bottom">
          <img src="../../assets/headNav/notice_nor.png" alt="" >
        </el-tooltip>
      </div>

      <div class="language right_menu_item" @click="changeLang">
        <el-tooltip class="item" effect="dark" :content="lang.head_nav_language_tips" placement="bottom">
          <img v-if="isChinese" src="../../assets/headNav/language_EN_nor.png" alt="">
          <img v-else src="../../assets/headNav/language_CN_nor.png" alt="">
        </el-tooltip>
      </div>

      <div class="select_org right_menu_item">
        <el-select v-model="orgSelected" @change="handleChangeOrg">
          <template>
            <el-option
              v-for="(org, index) in orgList"
              :key="index"
              :value="org.id"
              :label="language == 'cn' ? org.cnName: org.zhName"
              :selected="org.isSelected"
            ></el-option>
          </template>
        </el-select>
      </div>

      <div class="user_info right_menu_item">
        <el-dropdown>
          <div class="avatar">
            <img src="../../assets/headNav/default_avatar.png" alt="">
            <i class="el-icon-caret-bottom"/>
          </div>
          <el-dropdown-menu slot="dropdown">
            <router-link to="/org/add">
              <el-dropdown-item>{{lang.head_nav_add_org}}</el-dropdown-item>
            </router-link>
            <router-link to="/account/center">
              <el-dropdown-item>{{lang.head_nav_account_center}}</el-dropdown-item>
            </router-link>
            <a @click="logout">
              <el-dropdown-item>{{lang.head_nav_logout}}</el-dropdown-item>
            </a>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { clear,getCookie } from '@/utils/cookie.js';
import { removeStore, setStore } from '@/utils/storage.js';
import { handleMenuData, filterAsyncRouter } from '@/utils/common';
 
export default {
  name: 'HeadNav',
  data(){
    return {
      orgSelected:'',
      isChinese: true, //默认为中文
    }
  },
  computed:{
    ...mapGetters(['orgList','lang','language','userInfo','currentOrg','userId'])
  },
  created(){
    //刷新页面，加载org/orgList/
    const userId = getCookie('userCode');
    if(userId){
      this.$axios.post('/org',{userId}).then(resp => {
        const respData = resp.data;
        if(respData.code === 200){
          const currentOrg = respData.currentOrg;
          const orgList = respData.orgList;
          this.setCurrentOrg(currentOrg);
          this.setOrgList(orgList);
          this.orgSelected = currentOrg.id;
        }
      });

      this.$axios.post('/user',{userId}).then(resp => {
        if(resp.data.code === 200){
          this.initUserInfo(resp.data.data);
        }
      });
    }
    
  },
  mounted(){
    this.isChinese = this.language == 'cn';
  },
  
  methods:{
    ...mapActions(['changeLanguage','setOrgList','setCurrentOrg','initUserInfo','initMenu']),

    /**
     * 更换语言
     */
    changeLang(){
      if(this.language == 'cn'){
        this.changeLanguage('en');
      }else{
        this.changeLanguage('cn');
      }
      this.isChinese = !this.isChinese;
    },

    /**
     * 注销登录：清空cookie数据
     */
    logout(){
      clear('userName');
      clear('userCode');
      removeStore('menuData');
      this.$axios.post('/logout',{
        'userId': this.userInfo.userId
      }).then(resp => {
        this.$router.push({path: '/login'});
      });
    },

    /**
     * 切换组织
     */
    handleChangeOrg(orgId){
      const param = {
        userId: this.userId,
        orgId
      }

      this.$axios.post('/org/change',param).then(resp => {
        if(resp.data.code === 200){
          const orgId = resp.data.orgId;
          const param = {
            userId: this.userId,
            orgId
          }
          this.$axios.post('/menu',param).then(resp => {
            if(resp.data.code === 200){
              const menuList = resp.data.data;
              const menuData = handleMenuData(menuList);
              setStore('menuData',menuData);
              const routes = filterAsyncRouter(menuData);
              this.$router.addRoutes(routes);
              this.initMenu(menuData);
              this.$router.push('/dashboard');
            }
          });
        }
      });
    }

  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.head_nav{
  height: $headNavHeight;
  background-color: #21272c;
  padding: 5px 10px;
  line-height: 40px;
  text-align: left;
  img{
    vertical-align: middle;
  }
  .left_logo{
    margin-left: 20px;
  }
  .right_menu{
    float: right;
    .right_menu_item{
      padding: 0 3px;
      display: inline-block;
      cursor: pointer;
    }

    .avatar{
      cursor: pointer;
      >i{
        vertical-align: bottom;
      }
    }
  }
}
</style>