<template>
  <div class="box">
    
    <div class="content"  >
      <p v-for="(item,index) in article" :key="index" >{{item}}</p>
    </div>
  </div>
</template>
<style  scoped>
  h4{
    padding-left: 10px;
    color: #1a85fd;
        margin: 0px;
    padding-top: 10px;
  }
  .box{
    background-color: white;
    font-size: 16px;
    line-height: 28px;
  }
  .content{
    line-height: 25px;
    text-indent:2em;
  }
</style>
<script>
export default {
  data(){
    return {
      article:[],
    };
  },
  mounted(){
    this.getList();
    // console.log(this.articles)
  },
  methods: {
    getList() {
      this.axios
        .get(this.Apiurl.jsondata + "jx_dskt_gk.json")
        .then(res => {
          this.article = res.data.data;
          // console.log(res);
          // console.log(this.article)
        })
        .catch(err => {
          console.error(err);
        });
    },
    
  },
}
</script>

