<template>
  <div>
    <Banner></Banner>
    <el-row>
      <el-col :span="4" :offset="3">
        <h1>{{title}}</h1>
      </el-col>
      <el-col :span="13" :offset="1">
        <div class="title">
          <!--  <p>{{title}}</p> -->
          <div class="right">
            <span>
              <i class="el-icon-s-home"></i> 当前位置：
            </span>
            <span>{{title}}</span>
            <span>></span>
          </div>
        </div>
        <div class="rights">
          <div class="pagination-container">
            <ul class="datalist">
              <li v-for="(item, index) in dataList" :key="index">
                <router-link :to="'/article/'+item._id" :title="item.title">{{item.title}}</router-link>
              </li>
            </ul>
            <div class="page-box">
              <el-pagination
                background
                layout="total, prev, pager, next, sizes, jumper"
                :current-page.sync="p.page"
                :page-size.sync="p.limit"
                :total="dataCount"
                prev-text="上一页"
                next-text="下一页"
                :page-sizes="[5,10]"
                @current-change="getlist()"
                @size-change="getlist()"
              ></el-pagination>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
        <Footer></Footer>
  </div>
</template>

<style lang="scss" scoped>
.el-col {
  margin-top: 20px;
}
.el-col:first-child {
  text-align: center;
  padding-top: 0;
  border-top: 5px solid #1a85fd;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.el-col:last-child {
  //background: #eee;
  min-height: 680px;
  position: relative;
  .title {
    border-bottom: 1px solid #ccc;
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    justify-content: space-between;
    .right {
      span {
        margin: 0 5px;
      }
      span:nth-child(1) {
        margin: 0;
      }
    }
  }
  .rights {
    ul.datalist {
      min-height: 480px;
      li {
        height: 34px;
        a {
          text-decoration: none;
          color: #2c2c2c;
        }
        a:hover {
          color: #1a85fd;
        }
      }
    }
    .el-pagination {
      text-align: right;
    }
  }
}
</style>
<script>
import Banner from "../../components/common/Banner";
import Footer from "../../components/common/Footer";
export default {
  data() {
    return {
      title: "学院新闻",
      p: {
        // 查询参数
        page: 1, //默认显示第1页
        limit: 10 //默认一次显示10条数据
      },
      dataCount: 0, // 数据总条数
      dataList: [] // 数据集合
    };
  },
  components: {
    Banner: Banner,
    Footer: Footer
  },
  mounted() {
    this.getlist();
  },
  methods: {
    //  分页
    getlist() {
      this.axios
        .get(
          this.Apiurl.news + "&limit=" + this.p.limit + "&page=" + this.p.page
        )
        .then(res => {
          this.dataCount = res.data.dataCount;
          this.dataList = res.data.data;
          console.log("page=>", this.p.page);
          console.log("limit=>", this.p.limit);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>