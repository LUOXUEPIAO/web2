<template>
  <div>
    <div class="box">
      <photolist :listData="list"></photolist>
    </div>
  </div>
</template>

<script>
import photolist from "@/components/collegebrief/Photolist.vue";
export default {
  data() {
    return {
      p: {
        page: 1, //显示第几页
        limit: 30
      },
      list: [],
      article: []
    };
  },

  components: {
    photolist
  },

  created() {
    this.getlist();
  },
  methods: {
    getlist() {
      // this.axios.get(this.Apiurl.xzglry+ "&limit=" + this.p.limit + "&page=" + this.p.page)
      // .then(res=>{
      //   console.log(res);
      // })
      this.axios
        .get(this.Apiurl.jsondata + "teachersXzgl.json")
        .then(res => {
          this.list = res.data.data;
          // console.log(res);
        })
        .catch(err => {
          console.error(err);
        });
    },
    // getData() {
    //   this.axios
    //     .get(
    //       this.Apiurl.xzglry + "&limit=" + this.p.limit + "&page=" + this.p.page
    //     )
    //     .then(res => {
    //       this.article = res.data.data;
    //       for (let i in this.list) {
    //         for (let j = 0; j < this.article.length; j++) {
    //           if (
    //             this.list[i].url &&
    //             this.list[i].title == this.article[j].title
    //           ) {
    //             this.list[i].id = this.article[j]._id;
    //             console.log(this.article[i]._id);
    //           }
    //         }
    //       }
    //     })
    //     .catch(err => {
    //       console.error(err);
    //     });
    // }
  }
};
</script>

<style scoped>
.box {
  margin: 30px 0px;
}
</style>