<template>
      <el-container class="container">
  <el-aside :width="isOpen ? '200px':'64px'">
      <div class="logo" :class="{smalllogo:!isOpen}"></div>
        <el-menu
       default-active="/"
        background-color="#002033"
        text-color="#fff"
        active-text-color="#ffd04b"
        style="border-right:none"
        :collapse="!isOpen"
        :collapse-transition="false"
        router
        >
        <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/article">
     <i class="el-icon-document"></i>
        <span slot="title">内容管理</span>
      </el-menu-item>
      <el-menu-item index="/image">
      <i class="el-icon-picture"></i>
        <span slot="title">素材管理</span>
      </el-menu-item>
        <el-menu-item index="/publish">
        <i class="el-icon-s-promotion"></i>
        <span slot="title">发布文章</span>
      </el-menu-item>
      <el-menu-item index="/comment">
        <i class="el-icon-delete-solid"></i>
        <span slot="title">评论管理</span>
      </el-menu-item>
      <el-menu-item index="/fans">
        <i class="el-icon-present"></i>
        <span slot="title">粉丝管理</span>
      </el-menu-item>
       <el-menu-item index="/setting">
        <i class="el-icon-setting"></i>
        <span slot="title">个人设置</span>
      </el-menu-item>
          </el-menu>
  </el-aside>

  <el-container>
    <el-header>
        <span class="el-icon-s-fold icon" @click="toggleMeau"></span>
        <span class="text">江苏传智播客科技教育有限公司</span>
       <el-dropdown class="dropdown">
  <span class="el-dropdown-link">
      <img class="headIcon" src="../../assets/avatar.jpg" alt="">
      <span class="userName">用户名称</span>
    <i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>个人设置</el-dropdown-item>
    <el-dropdown-item>退出登陆</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>

</template>

<script>
export default {
  data () {
    return {
      isOpen: true
    }
  },
  methods: {
    toggleMeau () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped lang='less'>
.container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  .el-aside{
    background: #002033;
  }
  .el-header{
    border-bottom:1px solid #ddd;
  }
}
.el-header{
    line-height: 60px;
    border-bottom: 1px solid #ddd;
    .icon{
        font-size: 30px;
        vertical-align: middle;
    }
    .text{
        margin-left: 10px;
        vertical-align: middle;
    }
    .dropdown{
        float: right;
    }
    .headIcon{
        width: 30px;
        height: 30px;
        vertical-align: middle;
    }
    .userName{
        margin-left: 5px;
        vertical-align: middle;
        font-weight: bold;
    }
}
.el-aside{
        background: #002033;
        .logo{
            width: 100%;
            height: 60px;
            background: #002244 url('../../assets/logo_admin.png') no-repeat center / 140px auto;
        }
        .smalllogo{
          background:url(../../assets/logo_admin_01.png) no-repeat center;
          background-size: 36px auto;
        }

}

</style>
