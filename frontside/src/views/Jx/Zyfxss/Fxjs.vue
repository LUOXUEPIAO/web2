<template>
  <div class="box">
    <div class="content">
      <div v-for="(item,i,index) in article" :key="index">
        <p>{{item.atitle}}</p>
        <p class="atext">{{item.atext}}</p>
        <div align="center">
          <img v-if="item.url" :src="item.url" alt />
        </div>
      </div>
      <div v-for="(item,d) in article" :key="d">
        <p>{{item.title}}</p>
        <ul>
          <li v-for="(i,s,dindex) in item.text" :key="dindex">{{i}}</li>
        </ul>
      </div>
    </div>

    <el-collapse>
      <el-collapse-item class="title" title="部分方向介绍">
        <el-collapse-item title="本科" name="1">
          <li class="data" v-for="(item,index) in bkList" :key="index">
            <router-link
              class="page"
              :to="'/sxjy_article/'+item._id"
              :title="item.title"
            >{{item.title}}</router-link>
          </li>
        </el-collapse-item>
        <el-collapse-item title="专科" name="2">
          <li class="data" v-for="(item,index) in zkList" :key="index">
            <router-link
              class="page"
              :to="'/sxjy_article/'+item._id"
              :title="item.title"
            >{{item.title}}</router-link>
          </li>
        </el-collapse-item>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<style  scoped>
.box {
  background-color: white;
}
.content p {
  line-height: 28px;
  font-size: 16px;
  text-indent: 2em;
  color: #1a85fd;
}
ul li:nth-of-type(even) {
  text-indent: 2em;
  list-style-type: none;
}
ul li:nth-of-type(odd) {
  font-weight: bold;
  list-style-type: none;
}
p.atext {
  color: rgb(83, 80, 80);
  margin-left: 30px;
  margin-top: 0px;
  text-indent: 2em;
}
li {
  line-height: 28px;
  font-size: 16px;
  margin-top: 10px;
}
img {
  width: 200px;
  height: 200px;
}
.el-collapse-item >>>.el-collapse-item__header{
  font-size: 16px;
  padding-left: 10px;
  font-weight: bold;
}
a{
  color: black;
  text-decoration: none;
}
li.data{
  margin-top: 0px;
  list-style-type: decimal;
  margin-left: 20px;

}
</style>
<script>
export default {
  data() {
    return {
      article: [],
      bkList: [],
      zkList:[]
    };
  },
  mounted() {
    this.getList();
  },
  created() {
    this.getBkdata();
    this.getZkdata();
  },
  methods: {
    getList() {
      this.axios
        .get(this.Apiurl.jsondata + "fxjs.json")
        .then(res => {
          this.article = res.data.data;
        })
        .catch(err => {
          console.error(err);
        });
    },
    getBkdata() {
      this.axios
        .get(this.Apiurl.bkfx)
        .then(res => {
          this.bkList = res.data.data;
        })
        .catch(err => {
          console.error(err);
        });
    },
    getZkdata() {
      this.axios
      
        .get(this.Apiurl.zkfx)
        .then(res => {
          this.zkList = res.data.data;
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  computed: {}
};
</script>

