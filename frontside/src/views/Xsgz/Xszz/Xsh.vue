<template>
  <div class="box">
    <h4>一、计算机与软件学院学生组织架构</h4>
    <el-row>
     
      <el-col :span="23" :offset="1">
        <p class="content">{{article.content1}}</p>
      </el-col>
      <el-col :offset="1" :span="23">
        <p class="content">{{article.content2}}</p>
      </el-col>
      
      <el-col  :span="23" :offset="1">
        <p class="content text">{{article.content3}}</p>
      </el-col>
      <el-col :span="12" :offset="5">
        <img class="img1" src="http://test.wdf5.com/public/upload/1590068630936_mh_组织架构.jpg" alt />
      </el-col>
      
      
      <photoText :article="article" :datalist="datalist"></photoText>
    </el-row>
   
  </div>
</template>
<style  scoped>
h4 {
  padding-left: 10px;
  color: #1a85fd;
  margin: 0px;
  padding: 10px;
}
.box {
  background-color: white;
  font-size: 16px;
  line-height: 28px;
}
.content {
  margin: 0 auto;
  line-height: 25px;
  text-indent: 2em;
}
.text{
  margin-bottom: 10px;
}
.img1 {
  width: 400px;
  height: 350px;
}
</style>
<script>
import photoText from "../../../components/common/xszz.vue";
export default {
  data() {
    return {
      article: [],
      datalist: []
    };
  },
  components: {
    photoText
  },
  mounted() {
    this.getList();
    this.getData();
    // console.log(this.articles)
  },
  methods: {
    getList() {
      this.axios
        .get(this.Apiurl.jsondata + "xszz.json")
        .then(res => {
          this.article = res.data.data;
          // console.log(this.article);
        })
        .catch(err => {
          console.error(err);
        });
    },
    getData() {
      this.axios
        .get(this.Apiurl.Sysinfo)
        .then(res => {
          this.datalist = res.data.data;
          for (let i in this.article) {
            for (let j = 0; j < this.datalist.length; j++) {
              if (
                this.article[i].img_url &&
                this.article[i].title == this.datalist[j].title
              ) {
                this.article[i]._id = this.datalist[j]._id;
                // console.log(this.article[i]._id);
              }
            }
          }
            // console.log(this.article);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>

