<template>
  <div class="box">
    <Banner></Banner>
    <!-- <h2>{{articles.title}}</h2> -->
    <div class="info">
      <span>发布日期:{{articles.create_time|formatdate}}</span>
    </div>
    <div class="contents" v-html="articles.content"></div>
    <img class="stuimg" :src="articles.description" alt />
    <Footer></Footer>
  </div>
</template>
<style lang="scss" >
.info {
  text-align: right;
  padding-right: 50px;
  margin-top: 20px;
}
.stuimg {
  position: absolute;
  top: 380px;
  right: 80px;
  width: 180px;
  height: 210px;
}
.contents {
  margin: 0 auto;
  padding: 0 40px;
  font-size: 18px;
}
</style>
<script>
import Banner from "../components/common/Banner";
import Footer from "../components/common/Footer";
export default {
  data() {
    return {
      config: this.Apiurl.baseUrl,
      articles: {}
    };
  },
  components: {
    Banner: Banner,
    Footer: Footer
  },
  mounted() {
    let id = this.$route.params.aid;
    // console.log(this.$route)
    this.getArticlesData(id);
  },
  methods: {
    getArticlesData(id) {
      this.axios
        .get(this.Apiurl.articleInfo + id)
        .then(res => {
          // console.log(res);

          this.articles = res.data.data;
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  filters: {
    formatdate: function(val) {
      val = new Date(Number(val));
      let year = val.getFullYear(); //取得4位数的年份
      let month = val.getMonth() + 1; //取得日期中的月份，其中0表示1月，11表示12月
      let date = val.getDate();
      /* let hour = val.getHours();
      let minu = val.getMinutes();
      let sec = val.getSeconds(); */

      return year + "-" + month + "-" + date;
    }
  }
};
</script>