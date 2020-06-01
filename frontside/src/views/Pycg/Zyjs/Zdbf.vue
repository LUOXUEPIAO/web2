<template>

  

   <div class="main">
     <h4>指导办法</h4>
      <ul>
       
          <p class="content" v-html="lists.content"></p>
     
      </ul>

  </div>

 


    
</template>

<style lang="scss" scoped>
h4{
 
    color: #1a85fd;
    margin: 0px;
    padding-top: 10px;
}
ul{
  padding-inline-start:0px;
  margin-top: 25px;
}
li{
  margin:25px 0px;
  list-style-type: none;
}
.main{
   padding-left: 10px;
  .title{
    color: #1a85fd;

  }
  .content{
     text-indent:2em;
  }
}

</style>
<script>
  export default {
    data() {
      return {
       
       
        lists:{},
        
      };
    },
    created() {
     
      this.getArticle()
      
  },
  methods: {
    getArticle(){
      this.axios.get(this.Apiurl.zdbf)
      .then(res=>{
       
        let id=res.data.data[0]._id
        console.log(id)
      this.axios.get(this.Apiurl.articleInfo+id)
      .then(res=>{
        this.lists=res.data.data
      
        console.log(res)

      })
      .catch(err=>{
         console.error(err); 
      })
    }).catch(err=>{
       console.error(err); 
    })

    },
  }
  
  }
</script>