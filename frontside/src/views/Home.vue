
<template>
  <div id="home">
    <!-- 头部 -->
    <header>
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(item, index) in loopLists" :key="index">
          <img :src="config+item.img_src" alt />
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </header>

    <el-container>
      <div class="content">
        <!-- 通知公告、学院新闻、学生活动 -->
        <div class="card">
          <el-row>
            <el-col
              :lg="{span:5,offset:2}"
              :md="{span:8,offset:2}"
              :sm="{span:8,offset:2}"
              :xs="{span:24,offset:5}"
            >
              <el-card class="box-card">
                <div slot="header" class="clearfix header-card">
                  <span>
                    <router-link to="/tzgg">通知公告</router-link>
                  </span>

                  <img src="../assets/images/notice.png" alt />
                </div>
                <ul>
                  <li v-for="(item, index) in sortLists.notices" :key="index">
                    <router-link :to="'/article/'+item._id" :title="item.title">{{item.title}}</router-link>
                  </li>
                </ul>
              </el-card>
            </el-col>
            <el-col
              :lg="{span:5,offset:2}"
              :md="{span:8,offset:1}"
              :sm="{span:8,offset:2}"
              :xs="{span:24,offset:5}"
            >
              <el-card class="box-card">
                <div slot="header" class="clearfix header-card">
                  <span>
                    <router-link to="/xyxw">学院新闻</router-link>
                  </span>

                  <img src="../assets/images/news.png" alt />
                </div>
                <ul>
                  <li v-for="(item, index) in sortLists.news" :key="index">
                    <router-link :to="'/article/'+item._id" :title="item.title">{{item.title}}</router-link>
                  </li>
                </ul>
              </el-card>
            </el-col>
            <el-col
              :lg="{span:5,offset:2}"
              :md="{span:8,offset:2}"
              :sm="{span:8,offset:2}"
              :xs="{span:24,offset:5}"
            >
              <el-card class="box-card">
                <div slot="header" class="clearfix header-card">
                  <span>
                    <router-link to="/xshd">学生活动</router-link>
                  </span>

                  <img src="../assets/images/active.png" alt />
                </div>
                <ul>
                  <li v-for="(item, index) in sortLists.students" :key="index">
                    <router-link :to="'/article/'+item._id" :title="item.title">{{item.title}}</router-link>
                  </li>
                </ul>
              </el-card>
            </el-col>
          </el-row>
        </div>
        <!-- 学院特色标题 -->
        <div class="college-title">
          <el-row>
            <el-col :lg="24" :md="24" :sm="24">
              <div class="header">
                <span class="line"></span>
                <span class="title">学院特色</span>
                <span class="line"></span>
                <h2>Colleage Features</h2>
              </div>
            </el-col>
          </el-row>
        </div>

        <!-- 学院特色内容 -->
        <div class="college-info">
          <Colleagecard></Colleagecard>
        </div>
        <!-- 学生培养成果 -->
        <div class="student-title">
          <el-row>
            <el-col :lg="24" :md="24" :sm="24">
              <div class="header">
                <span class="line"></span>
                <span class="title">学生培养成果</span>
                <span class="line"></span>
                <h2>Student Training Results</h2>
              </div>
            </el-col>
          </el-row>
        </div>
        <!-- 学生培养内容 -->
        <div class="student-info">
          <Peiyangcard></Peiyangcard>
        </div>
        <!-- 毕业学生培养成果 -->
        <div class="graduation-title">
          <el-row>
            <el-col :lg="24" :md="24" :sm="24">
              <div class="header">
                <span class="line"></span>
                <span class="title">毕业学生培养成果</span>
                <span class="line"></span>
                <h2>Graduation Student Training Results</h2>
              </div>
            </el-col>
          </el-row>
        </div>
        <!-- 毕业学生培养成果内容 -->
        <div class="graduation-info">
           <Graduationcard></Graduationcard>
        </div>
      </div>

      <el-footer height="auto">
        <el-row>
          <el-col :span="8">
            <h2>友情链接</h2>
            <p>
              <el-link href="https://element.eleme.io" target="_blank">学校官网</el-link>
            </p>
            <p>
              <el-link href="https://element.eleme.io" target="_blank">协同办公系统</el-link>
            </p>
            <p>
              <el-link href="https://element.eleme.io" target="_blank">学工管理系统</el-link>
            </p>
            <p>
              <el-link href="https://element.eleme.io" target="_blank">人事管理系统</el-link>
            </p>
          </el-col>
          <el-col :span="8">
            <h2>联系我们</h2>
            <p>地址:123113113</p>
            <p>电话:123113113</p>
            <p>邮编:123113113</p>
          </el-col>
          <el-col :span="8">
            <h2>官方二维码</h2>
            <p>地址:123113113</p>
            <p>电话:123113113</p>
            <p>邮编:123113113</p>
          </el-col>
        </el-row>
      </el-footer>
    </el-container>
  </div>
</template>


<style lang="scss" >
#home {
  background: url("../assets/images/background.jpg") no-repeat;
  background-size: 100% auto;
  background-position-y:-80px ;
  header {
    padding: 0;
    .swiper-slide {
      width: 100%;
      padding: 0;
      img {
        width: 100%;
      }
    }
    .swiper-container {
      --swiper-pagination-color: #fff;
    }
    .swiper-pagination {
      text-align: right;
      font-size: 16px;
    }
    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
    }
  }
  .content {
    margin-top: 54px;
    width: auto;
    padding: 0;
    .card {
      .el-card {
        width: 360px;
        height: 360px;
        margin-bottom: 20px;
        border-top: 10px solid #1a85fd;
        .el-card__header {
        
          height: 55px;
          border-bottom: none;
        }
        .header-card {
          display: flex;
          padding: 0 20px 20px;
          border-bottom: 1px solid #eee;
          span {
            flex: 1;
            font-size: 20px;
            font-weight: bold;
            a {
              color: #1a85fd;
              text-decoration: none;
            }
          }
          img {
            width: 32px;
          }
        }

        .el-card__body {
          padding-top: 20px !important;
          ul {
            color: #1a85fd;

            padding: 0 0px 22px 18px;

            li {
              line-height: 28px;

              a {
                font-size: 14px;
                color: #2c2c2c;
                text-decoration: none;
                width: 320px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
              }
            }
          }
        }
      }
    }
    .college-title,
    .student-title,
    .graduation-title {
      text-align: center;
      height: 200px;
      .header {
        margin-top: 60px;
        .line {
          display: inline-block;
          border-top: 2px solid #1a85fd;
          width: 66px;
          position: relative;
          top: -5px;
        }
        .title {
          margin: 0 20px;
          font-size: 36px;
          color: #2c2c2c;
          font-weight: lighter;
        }
        h2 {
          font-size: 18px;
          color: #2c2c2c;
          font-weight: lighter;
        }
      }
    }
  }
  .el-footer {
    width: 100%;
    margin-top: 50px;
    background: url("../assets/images/footter.jpg") no-repeat;
    background-size: 100% 100%;
    .el-col {
      padding-top: 62px;
      text-align: center;
      h2 {
        color: #fff;
        font-weight: bold;
        font-size: 20px;
        padding-bottom: 70px;
      }
      p {
        padding-bottom: 30px;
        font-size: 18px;
        color: #fff;
      }
      .el-link {
        font-size: 18px;
        color: #fff;
      }
    }
  }
}
</style>


<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import Colleagecard from "../components/home/Colleagecard";
import Peiyangcard from "../components/home/Peiyangcard";
import Graduationcard from "../components/home/Graduationcard";
export default {
  components: {
    Swiper,
    SwiperSlide,
    Colleagecard: Colleagecard,
    Peiyangcard: Peiyangcard,
    Graduationcard: Graduationcard
  },
  data() {
    return {
      swiperOptions: {
        autoplay: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      aricleList: [],
      newsLists: [],
      loopLists: [],
      sortLists: {
        notices: [],
        news: [],
        students: []
      },
      config: this.Apiurl.baseUrl
    };
  },
 
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  created() {
    // 轮播图的控制
   /*  this.swiper.el.onmouseover = function() {
      this.swiper.autoplay.stop();
    };
    //鼠标离开开始自动切换
    this.swiper.el.onmouseout = function() {
      this.swiper.autoplay.start();
    }; */

    this.getloopData();
    this.getNoticeData();
    this.getNewsData();
    this.getStuData();
  },
  methods: {
    // 获取轮播图数据
    getloopData() {
      this.axios
        .get(this.Apiurl.loops)
        .then(res => {
          
          this.loopLists = res.data.data;
        })
        .catch(err => {
          console.error(err);
        });
    },
    // 获取通知公告数据
    getNoticeData() {
      this.axios
        .get(this.Apiurl.noticesPage1)
        .then(res => {
          this.sortLists.notices = res.data.data;
        })
        .catch(err => {
          console.error(err);
        });
    },
    // 获取学院新闻数据
    getNewsData() {
      this.axios
        .get(this.Apiurl.news)
        .then(res => {
          this.sortLists.news = res.data.data;
        })
        .catch(err => {
          console.error(err);
        });
    },
    // 获取学生活动数据
    getStuData() {
      this.axios
        .get(this.Apiurl.stuActive)
        .then(res => {
          this.sortLists.students = res.data.data;
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>
