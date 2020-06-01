

<template>
  <div>
    <Banner></Banner>
    <h2>{{articles.title}}</h2>
    <div class="info">
      <span>发布日期:{{articles.create_time|formatdate}}</span>
    </div>
    <h3>{{articles.description}}</h3>

    <p></p>
    <div class="contents" v-html="articles.content"></div>
  </div>
</template>
<style lang="scss" >
h2 {
  text-align: center;
  font-size: 24px;
}
h3 {
  text-align: left;
  padding-left: 38px;
}
.info {
  text-align: right;
  padding-right: 50px;
 
}
.contents {
  margin: 0 auto;
  padding: 0 40px;
  font-size: 16px;
  line-height: 28px;
}
table{
 border: 1px solid black;
 td{
    border: 1px solid black;
 }
}
</style>
<script>
import Banner from "../components/common/Banner";
export default {
  data() {
    return {
      config: this.Apiurl.baseUrl,
      articles: {}
    };
  },
  components: {
    Banner: Banner
  },
  mounted() {
    let id = this.$route.params.aid;
    this.getArticlesData(id);
  },
  methods: {
    getArticlesData(id) {
      this.axios
        .get(this.Apiurl.articleInfo + id)
        .then(res => {
          this.articles = res.data.data;
          // console.log(this.articles)
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