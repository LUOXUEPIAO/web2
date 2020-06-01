<template>
  <div class="box">
    <h4>特色实验室</h4>
    <el-row>
      <el-col :span="8" :offset="1">
        <img class="img1" :src="article.imgurl" alt />
      </el-col>
      <el-col :span="15">
        <p class="content">{{article.content1}}</p>
      </el-col>
      <el-col :offset="1" :span="23">
        <p class="content">{{article.content2}}</p>
      </el-col>
      <el-col :offset="1" :span="23">
        <p class="content">{{article.content3}}</p>
      </el-col>
      <photoText :article="article"></photoText>
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
.img1 {
  width: 225px;
  height: 140px;
}
</style>
<script>
import photoText from "../../../components/common/photoText";
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
        .get(this.Apiurl.jsondata + "jx_tssys.json")
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
                this.article[i].aid = this.datalist[j]._id;
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

