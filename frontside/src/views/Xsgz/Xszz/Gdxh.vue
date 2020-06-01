<template>
  <div>
    <!-- <h4>学生竞赛简介</h4> -->
    <div class="datalist">
      <ul>
        <li v-for="(item,index) in dataList" :key="index">
          <router-link class="page" :to="'/association/'+item._id" :title="item.title">{{item.title}}</router-link>
          <!-- <span>{{item.create_time|createTime}}</span> -->
        </li>
      </ul>
      <div class="page-box">
        <el-pagination
          @size-change="getListData()"
          @current-change="getListData()"
          :current-page.sync="p.page"
          :page-size.sync="p.limit"
          :page-sizes="[5,10]"
          :total="dataCount"
          layout="total, sizes, prev, pager, next, jumper"
          prev-text="上一页"
          next-text="下一页"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataCount: 0,
      p: {
        page: 1, //显示第几页
        limit: 15
      },
      dataList: []
    };
  },
  created() {
    this.getListData();
  },
  methods: {
    getListData() {
      this.axios
        .get(
          this.Apiurl.gdxh + "&limit=" + this.p.limit + "&page=" + this.p.page
        )
        .then(res => {
          this.dataList = res.data.data;
          this.dataCount = res.data.dataCount;
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  filters: {
    createTime(val) {
      val = new Date(Number(val));
      let year = val.getFullYear();
      let month = val.getMonth() + 1;
      let date = val.getDate();
      return `${year}-${month}-${date}`;
    }
  }
};
</script>

<style scoped>
/* h4{
 
    color: #1a85fd;
    margin: 0px;
    padding-top: 10px;
} */
ul{
  padding-inline-start:15px;
}
li {
  height: 34px;
  line-height: 28px;
}
a {
  text-decoration: none;
  color: #000;
}

a:hover {
  color: #1a85fd;
}
span {
  float: right;
  color: rgb(162, 162, 183);
}
.page-box {
  margin-top: 30px;
  float: right;
}
</style>