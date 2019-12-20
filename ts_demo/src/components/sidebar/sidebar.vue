<template>
  <div class="sidebar">
    <el-menu 
      :default-active="$route.path" 
      :collapse="isCollapse"
      class="sidebar_vertical"
      background-color="#545c64"
      :unique-opened="true"
      @select="handleSelect"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-button 
        :icon="isCollapse?'el-icon-d-arrow-left':'el-icon-d-arrow-right'" 
        class="collapse_icon" 
        @click="toggleSidebar"
      ></el-button>
      <template class="menu_list">
        <router-link to="/">
          <el-menu-item index="/dashboard" class="first_menu">
            <img src="../../assets/menu/home.png" />
            <span slot="title" :class="{title_active: currentIndex == '/dashboard'}">首页</span>
          </el-menu-item>
        </router-link>

        <el-submenu index="2" >
          <template slot="title">
            <img src="../../assets/menu/cas.png" />
            <span slot="title">UTLAR-CAS</span>
          </template>
          <el-menu-item-group>
            <div v-for="(item, index) in menus" :key="'parent_url_'+index">
              <!-- 有子菜单 -->
              <el-submenu v-if="item.dropdown" :index="item.path">
                <template slot="title">
                  <span slot="title" :class="{'title_active': currentIndex == item.path}">{{language == 'cn' ? item.zhName: item.cnName}}</span>
                </template>
                <router-link v-for="(cItem, cIndex) in item.children" 
                  :key="'child_url_'+cIndex" 
                  :to="cItem.path+'?t='+Date.now()">
                  <el-menu-item :index="cItem.path">{{language == 'cn' ? cItem.zhName: cItem.cnName}}</el-menu-item>
                </router-link>
              </el-submenu>

              <!-- 无子菜单 -->
              <router-link v-else :to="item.path+'?t='+Date.now()">
                <el-menu-item :index="item.path">{{language == 'cn' ? item.zhName: item.cnName}}</el-menu-item>
              </router-link>
            </div>
          </el-menu-item-group>
        </el-submenu>

        <a v-for="(item,index) in $defaultUrl" :key="'default_url_'+index" :href="item.url" target="_blank" >
          <el-menu-item :index="index">
            <img :src="item.icon" />
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
        </a>
      </template>
    </el-menu>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
import {getCookie} from '@/utils/cookie.js';

export default {
  name: 'Sidebar',
  data(){
    return{
      currentIndex:'',//当前选中的index
    }
  },

  mounted(){
  },
  methods: {
    ...mapActions(['toggleSidebar']),
    handleSelect(index, indexPath){
      this.currentIndex = indexPath.length > 2 ? indexPath[1]: indexPath[0];
    }
  },
  computed:{
    ...mapGetters(['sidebar','userId','language','menus']),
    isCollapse(){
      return !this.sidebar.opened;
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.sidebar{
  height: calc(100% - #{$headNavHeight});
  position: fixed;
  top: $headNavHeight;
  left: 0;
  bottom: 0;
  font-size: 0px;
  z-index: 1001;
  text-align: left;
  overflow: auto;
  overflow-x: hidden;
  background-color: rgb(84, 92, 100);
  border: none;
  .sidebar_vertical:not(.el-menu--collapse){
    width: $sidebarOpenWidth;
    height: 100%;
  }
  .sidebar_vertical{
    width: $sidebarCloseWidth;
    height: 100%;
  }
  .collapse_icon {
    width: 24px;
    height: 24px;
    position: absolute;
    right: 0px;
    z-index: 1;
    background: #545C64;
    border-radius: 8px 0 0 8px;
    border: none;
    padding: 0;
    color: #B1B1B1;
    &:hover {
        background: rgb(220, 220, 220);
        color: #ffffff;
    }
  }
  .menu_list{
    margin-top: 24px;
  }
  .title_active{
    color: #ffd04b;
  }
  .el-menu{
    border-right: none;
  }
  .first_menu{
    margin-top: 25px;
  }

  /* 拥有子菜单的列表左对齐 */
  .el-menu-item-group{
    ul>li{
      text-align: left;
    }
  }

  img{
    width: 24px;
    height: 24px;
  }

}

/* 菜单收起后弹出层li居中 */
.el-menu--vertical{
  .el-menu{
    .el-menu-item-group{
      text-align: center;
    }
  }
}

</style>