<template>
  <div>
    <div class="box">
      <el-row>
        <el-col :span="24" v-html="dataList.content"  class="datalist">
         
        </el-col>
      </el-row>
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
  mounted() {
   
    /* for (let i = 0; i < img.length; i++) {
      const element = img[i];
      element.style.width = "100%";
    } */
  },
  methods: {
    getListData() {
      this.axios
        .get(
          this.Apiurl.kylw + "&limit=" + this.p.limit + "&page=" + this.p.page
        )
        .then(res => {
          // console.log(res);
          let id = res.data.data[0]._id;
          this.axios.get(this.Apiurl.articleInfo + id).then(res => {
            this.dataList = res.data.data;
          });
        })
        .catch(err => {
          console.error(err);
        });
    }
   
  }
};
</script>

<style lang="scss" >
.datalist {
  margin: 30px 0;

  /* padding: 0 40px; */
  table{
    //background: black;
    width: 100% !important;
     border: 1px solid black;
    //border-collapse:separate !important;
   td{
      border:1px solid #000;
   }
  }
}
</style>