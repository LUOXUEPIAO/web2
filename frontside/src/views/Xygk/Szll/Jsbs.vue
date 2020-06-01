<template>
  <div>
        <div class="box">
            <photolist :listData="list"></photolist>
        </div>
  </div>
</template>

<script>
import photolist from '@/components/collegebrief/Photolist.vue'
export default {
  data() {
    return {
       p: {
        page: 1, //显示第几页
        limit: 30
      },
      list: []
    };
  },

  components:{
    photolist
  },

  created() {
    this.getlist();
  },
  methods: {
    getlist() {
      // this.axios.get(this.Apiurl.jsbs+ "&limit=" + this.p.limit + "&page=" + this.p.page)
      // .then(res=>{
      //   console.log(res);
      //   let id={}
      //   id=res.data.data
      // });
      this.axios
        .get(this.Apiurl.jsondata + "teachersJsbs.json")
        .then(res => {
          this.list = res.data.data;
          // console.log(res);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>

<style scoped>
  .box{
    margin: 30px 0px;
  }
</style>