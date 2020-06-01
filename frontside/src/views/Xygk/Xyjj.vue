<template>
  <div>
    <div class="box">
          <div v-html="brief.content" class="brief"></div>
    </div>
  </div>
</template>

<style scoped>
.box {
  margin: 40px 0px;
}
.brief{
  font-size: 16px;
  line-height: 28px;
}

/* .briefTitle {
  position: relative;
  display: block;
  font-size: 18px;
  color: #2d7fd3;
  width: 100%;
  height: 25px;
  padding-bottom: 15px;
} */

/* .briefTitle:after{
  content:"";
  position: absolute;
  left: 0px;
  top: 100%;
  width: 20px;
  height: 2px;
  background-color: #2c2c2c;
} */


</style>


<script>
export default {
  data() {
    return {
      brief: {},
    };
  },

  mounted() {
    this.getBrief();
  },
  methods: {
    //获取学院简介
    getBrief() {
      this.axios
        .get(this.Apiurl.collegeBrief)
        .then(res => {
          // console.log(res);
          let id = res.data.data[0]._id;
          // console.log( res.data.data[0]._id);
          
          this.axios
            .get(this.Apiurl.articleInfo + id)
            .then(res => {
              this.brief = res.data.data;
              // console.log(res);
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