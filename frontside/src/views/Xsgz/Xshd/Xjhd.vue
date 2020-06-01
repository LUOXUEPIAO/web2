<template>

  

   <div class="main">
     <!-- <h4>活动概览</h4> -->
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <span class="title">{{item.activeLevel}}</span>
          <div class="content"  v-for="(i,cindex) in list[index].contain" :key="cindex">
              <p>{{i.title}}</p>
              
            
          <el-row>
             <el-col :span="8" :offset="1">
        <img class="img1" :src=i.pic alt />
      </el-col>
        <el-col :span="8" :offset="5">
       <p> {{i.content}}</p>
      </el-col>
             
     
       </el-row>
             <!-- <div class="img"> <img :src=i.pic></div> -->
              </div>
        
        </li>
     
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
img{
    width: 300px;
}
.main{
   padding-left: 10px;
  .title{
    color: #1a85fd;

  }
  .content{
     text-indent:2em;
     .img{

     }
  }
}

</style>
<script>

  export default {
    data() {
      return {
       
        list:[],
        activelist:[]
        
      };
    },
    created() {
      this.getList()
      
  },
  methods: {
      getList(){
          this.axios.get(this.Apiurl.jsondata+"active.json")
          .then(res => {
              this.list=res.data.data
           
          })
          .catch(err => {
              console.error(err); 
          })
      }
  }
  }
</script>