<template>
  <div id="app">
    <el-container>
      <el-header height="80px">
        <el-row>
          <el-col :xs="6" :sm="6" :md="6" :lg="5" class="logo">
            <img src="./assets/images/logo.png" alt />
          </el-col>
          <div class="menuview">
            <el-col :md="12" :lg="15">
              <el-menu
                :default-active="$route.path"
                class="el-menu-demo"
                mode="horizontal"
                text-color="#2c3e50"
                :router = "true"
              >
                <template v-for="navMenu in navLists" >
                  <!-- 最后一级菜单 -->
                  <el-menu-item
                    v-if="navMenu.showMenu != false"
                    :key="navMenu.id"
                    :index="navMenu.path"
                    :select="handleSelect"
                  >
                    <span slot="title">{{navMenu.disp}}</span>
                  </el-menu-item>

                  <!-- 此菜单下还有子菜单 -->
                  <!-- <el-menu-item
                    v-if="navMenu.childs&&navMenu"
                    :key="navMenu.entity.id"
                    :index="navMenu.entity.path"
                  >
                    <el-dropdown>
                      <span class="el-dropdown-link">{{navMenu.entity.disp}}</span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item v-for="(item, index) in navMenu.childs" :key="index">
                          <router-link :to="item.entity.path">{{item.entity.disp}}</router-link>
                        </el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </el-menu-item> -->
                </template>
              </el-menu>
            </el-col>
            <!-- <el-col :lg="3" :md="3">
              <el-input class="myinput" prefix-icon="el-icon-search"></el-input>
            </el-col> -->
          </div>
        </el-row>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

</style>
<script>

export default {
  data() {
    return {
      router: true,
      defaultActive: "/",
      navLists: []
    };
  },
  
  created() {
    this.getNavData();
  },
  methods: {
    handleSelect(key, keyPath) {
      // let menus = this.navLists.find(item=>{
      //   if(item.id == key){
      //     return true;
      //   }
      // })
      let path = keyPath + "/" + key;
      this.$router.push(path);

    },
    getNavData() {
      this.navLists = this.routeMenuConfig;
      // let router = this.$router;
      // this.axios
      //   .get(this.Apiurl.jsondata + "navmenus.json")
      //   .then(res => {
      //     console.log(this);
      //     this.navLists = res.data.data;
          // this.$store.dispatch('setMenus',res.data.data);
           
      //     this.$router.addRoutes([{
      //   path:"/xyjj/",
      //   component:{}
      // }]);
        // })
        // .catch(err => {
        //   console.error(err);
        // });
    }
  }
};
</script>










<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antidisped;
  -moz-osx-font-smoothing: grayscale;
  /*  text-align: center; */
  color: #2c3e50;
}
.el-container {
  .el-header {
    margin-top: 20px;
    width: 100%;
    overflow: hidden;
    .logo {
      padding-right: 20px;
      img {
        width: 100%;
      }
    }
  }

  .el-input__inner {
    border-radius: 18px;
    background: #eee;
  }
  .myinput {
    width: 232px;
    //height: 50px;
    margin-left: -10px;
    position: relative;
    top: 6px;
  }
  .el-menu.el-menu--horizontal {
    border-bottom: none !important;
  }
  .el-menu-demo .el-menu-item {
    font-size: 16px;
    font-weight: bold;
    color: #2c3e50;
    background: none;
    margin: 0 10px;
  }
  .el-dropdown {
    .el-dropdown-link {
      font-size: 16px;
      font-weight: bold;
      color: #2c3e50;
    }
  }
}
.el-dropdown-menu {
  // width: 124px !important;
  text-align: center;
}

.el-main {
  padding: 0 !important;
}
</style>

