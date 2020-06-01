<template>
  <div>
    <div class="datalist">
      
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
  methods: {
    getListData() {
      this.axios
        .get(
          this.Apiurl.jgxm + "&limit=" + this.p.limit + "&page=" + this.p.page
        )
        .then(res => {
          this.dataList = res.data.data;
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
};
</script>

<style scoped>
/* .datalist{
  margin: 40px 0px;
} */


</style>