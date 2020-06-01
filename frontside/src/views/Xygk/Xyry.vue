<template>
  <div>
    <div>
      <div class="datalist">
        <ul>
          <li v-for="(item,index) in honorary" :key="index">
            <router-link
              class="page-honorary"
              :to="'/article/'+item._id"
              :title="item.title"
            >{{item.title}}</router-link>
            <span>{{item.create_time|createTime}}</span>
          </li>
        </ul>
        <div class="page-box">
          <el-pagination
            @size-change="getHonorary()"
            @current-change="getHonorary()"
            :current-page.sync="p.page"
            :page-sizes="[5, 10]"
            :page-size.sync="p.limit"
            layout="total, sizes, prev, pager, next, jumper"
            :total="dataCount"
            prev-text="上一页"
            next-text="下一页"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      dataCount: 0, //数据总条数
      p: {
        page: 1,
        limit: 10
      },
      honorary: []
    };
  },
  mounted() {
    this.getHonorary();
  },
  methods: {
    getHonorary() {
      this.axios
        .get(
          this.Apiurl.honorary +
            "&limit=" +
            this.p.limit +
            "&page=" +
            this.p.page
        )
        .then(res => {
          this.dataCount = res.data.dataCount;
          this.honorary = res.data.data;
          // console.log(res);
          
          // console.log("page=>", this.p.page);
          // console.log("limit=>", this.p.limit);
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
      return year + "-" + month + "-" + date;
    }
  }
};
</script>

<style scoped>
.datalist{
    margin: 40px 25px;
}

ul{
    padding-inline-start:15px;
}
li {
  line-height: 28px;
  font-size: 16px;
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
  color: rgb(162,162,183);
}
.page-box{
  margin-top: 30px;
  float: right;
}
</style>