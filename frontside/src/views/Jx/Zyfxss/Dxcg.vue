<template>
  <div class="box">
    <div class="content">
      <div v-html="articleinfo.content"></div>
    </div>
  </div>
</template>
<style  scoped>
h4 {
  padding-left: 10px;
  color: #1a85fd;
  margin: 0px;
  padding-top: 10px;
}
.box {
  background-color: white;
  font-size: 16px;
  line-height: 28px;
}
.content {
  line-height: 25px;
  text-indent: 2em;
}
</style>
<script>
export default {
  data() {
    return {
      article: [],
      articleinfo:[]
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      this.axios
        .get(this.Apiurl.dxcg)
        .then(res => {
          this.article = res.data.data;
        //   console.log(this.article)
          let id = this.article[0]._id;
          this.axios
            .get(this.Apiurl.articleInfo + id)
            .then(res => {
              this.articleinfo = res.data.data;
            //   console.log(this.articleinfo)
            })
            .catch(err => {
              console.error(err);
            });
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>

