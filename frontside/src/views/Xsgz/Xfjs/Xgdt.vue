<template>
    <div>
        <h4>查课报告</h4>
            <div class="datalist">
      <ul>
        <li v-for="(item,index) in dataList" :key="index">
          <a class="page" :href="item.url" :download="item.name">{{item.name}}</a>
        </li>
      </ul>
      <div class="page-box">
        <el-pagination
          @size-change="getListData()"
          @current-change="getListData()"
          :current-page.sync="p.page"
          :page-size.sync="p.limit"
          :page-sizes="[5,10,15]"
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
        limit: 10
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
          this.Apiurl.ensDatalist+"?tag=查课报告" +"&limit="+this.p.limit+"&page="+this.p.page
        )
        .then(res => {
          this.dataList = res.data.data.reverse();
          this.dataCount = res.data.dataCount;
        })
        .catch(err => {
          console.error(err);
        });
    },
    

  },
};
</script>

<style scoped>
h4 {
  color: #1a85fd;
  margin: 0px;
  padding-top: 10px;
  margin-bottom: 10px;
}

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

.page-box {
  margin-top: 30px;
  float: right;
}
img{
    width:200px;
    height: 200px;
}
</style>