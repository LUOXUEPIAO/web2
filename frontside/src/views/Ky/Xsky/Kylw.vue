<template>
  <div>
    <el-row>
        <span>部分学生发表期刊封面展示:</span>
      <el-col :md="{span:7,offset:1}" :sm="{span:10,offset:2}" v-for="(item,index) in listData" :key="index">
        <div class="teacher">
            <img :src="item.url" alt />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    data(){
        return {
            listData:[]
        }
    },

    created(){
        this.getListData();
    },

    methods:{
        getListData(){
        this.axios
        .get(this.Apiurl.jsondata + "kylwPic.json")
        .then(res => {
          this.listData = res.data.data;
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
.teacher {
  margin: 20px 0px;
}
span{
    display: block;
    margin-left: 30px;
    margin-top: 40px;
    text-align: left;
    font-size: 18px;
    color:rgb(45,127,211);
    /* font-weight: bold; */

}
img {
  height: 250px;
   box-shadow: darkgrey 0px 0px 10px 2px
  /* max-width: 300px; */
}
</style>
