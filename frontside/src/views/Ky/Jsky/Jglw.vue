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
  mounted() {
    this.getListData();
  },
  methods: {
    getListData() {
      this.axios
        .get(
          this.Apiurl.jglw + "&limit=" + this.p.limit + "&page=" + this.p.page
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
   
  //  border-collapse:separate !important;
   
  }
}
</style>