<template>
  <div class="mainInfo">
    <Banner></Banner>
    <el-row>
      <el-col :span="4" :offset="3">
        <div class="title">{{title}}</div>
        <el-menu default-active="2" class="el-menu-vertical-demo" :router="true">
          <div v-for="menu in menuRouteList" :key="menu.id">
            <el-menu-item
              class="itemdemo"
              v-if="menu.children == null || menu.children.length == 0"
              :index="menu.path"
            >{{menu.disp}}</el-menu-item>

            <el-submenu v-if="menu.children != null && menu.children.length > 0" :index="menu.path">
              <template slot="title">
                <span>{{menu.disp}}</span>
              </template>
              <el-menu-item
                v-for="child in menu.children"
                :key="child.id"
                :index="child.path"
              >{{child.disp}}</el-menu-item>
            </el-submenu>
          </div>
        </el-menu>
      </el-col>
      <el-col :span="13" :offset="1">
        <div class="title">
          <p>{{$route.name}}</p>
          <div class="right">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item
                :to="path(index)"
                v-for="(item, index) in $route.meta.name"
                :key="index"
              >{{item}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>
        <router-view></router-view>
      </el-col>
    </el-row>
    <Footer></Footer>
  </div>
</template>

<style lang="scss" scoped>
.mainInfo {
  background: url("../assets/images/background.jpg") no-repeat;
  background-size: 100% auto;
  background-position-y: -380px;
}
.el-col {
  margin-top: 20px;
}
.el-col:first-child {
  text-align: center;
  padding-top: 0;
  //border-top: 5px solid #1a85fd;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .title {
    width: 100%;
    height: 50px;
    line-height: 50px;
    margin: 0;
    font-size: 24px;
    background: #2d7fd3;
    color: aliceblue;
  }
  .el-menu {
    width: 100%;
    border: none;
    .el-menu-item {
      font-size: 16px;
    }
    .itemdemo {
      color: #1a85fd;
      font-weight: bold;
    }
    .el-submenu {
      font-size: 16px;
      .el-submenu__title {
        span {
          font-size: 16px !important;
          color: #1a85fd;
          font-weight: bold;
        }
      }
    }
  }
}
.el-col:last-child {
  //background: #eee;
  //background: #fff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  padding: 0 20px;
  min-height: 680px;
  position: relative;
  .title {
    border-bottom: 1px solid rgb(175, 175, 175);
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    justify-content: space-between;
    p {
      width: 260px;
      font-size: 24px;
      margin: 0;
      color: #2d7fd3;

      text-align: left;
    }
    .right {
      .el-breadcrumb {
        font-size: 16px;
        line-height: 3;
      }
    }
  }
}
</style>

<script>
import Banner from "../components/common/Banner";
import Footer from "../components/common/Footer";
export default {
  data() {
    return {
      title: "",
      menuRouteList: []
      // a: $route.meta.name[length-1]
    };
  },
  components: {
    Banner: Banner,
    Footer: Footer
  },
  methods: {
    initMenu() {
      let path = this.$route.path;
      let menuObj = this.routeMenuConfig.find(item => {
        if (item.path == path) {
          return true;
        }
        if (item.children) {
          // console.log(item)

          for (let i = 0; i < item.children.length; i++) {
            // console.log(item.children[i].path);
            if (item.children[i].path == path) {
              return true;
            }
            if (item.children[i].children != null) {
              for (let j = 0; j < item.children[i].children.length; j++) {
                if (item.children[i].children[j].path == path) {
                  menuObj = item;
                  return true;
                }
              }
            } else {
            }
          }
        }
      });

      if (menuObj != null) {
        this.title = menuObj.disp;
        this.menuRouteList = menuObj.children;
      }
    }
  },
  watch: {
    // 方法1
    $route(to, from) {
      //监听路由是否变化
      this.initMenu();
    }
  },
  computed: {
    path() {
      return function(index) {
        return this.$route.meta.path[index];
      };
    }
  },

  beforeMount() {
    this.initMenu();
  }
};
</script>
