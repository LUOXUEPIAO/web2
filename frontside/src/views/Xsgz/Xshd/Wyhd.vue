<template>
  <div>
    <h4>学生活动照片墙</h4>
     <div class="content-photo" v-for="(item,index) in list" :key="index">
      <p>{{item.activeName}}</p>
      <div v-for="(i,cindex) in list[index].pic" :key="cindex" class="grid" id="grid">
        <photowall :img="i.url" link="#"></photowall>
      </div>
    </div> 
  <!-- <el-row type="flex" class="row-bg" justify="space-around" >
  <el-col :span="6" v-for="(item,index) in list" :key="index">
     <p>{{item.activeName}}</p>
    <div class="grid-content bg-purple grid " v-for="(i,cindex) in list[index].pic" :key="cindex" id="grid">
       <photowall :img="i.url" link="#"></photowall>
    </div>
    </el-col>
  
</el-row> -->
  </div>
</template>


<script>
import photowall from "@/components/photowall/picture.vue";
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

  components: {
    photowall
  },

  created() {
    this.getlist();
  },
  methods: {
    getlist() {
      this.axios
        .get(this.Apiurl.jsondata + "picturelist2.json")
        .then(res => {
          this.list = res.data.data;
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
h4 {
  color: #1a85fd;
  margin: 0px;
  padding-top: 10px;
  margin-bottom: 10px;
}
.content-photo {
  width: 100%;

  display: flex;
  // overflow: hidden;
  .grid {
    float: left;
    width: 220px;
    // height: 300px;
    margin-top: 10px;
    margin-bottom: 20px;
  }
}
  // .el-row {
  //   margin-bottom: 20px;
  //   &:last-child {
  //     margin-bottom: 0;
  //   }
  // }
  // .el-col {
  //   border-radius: 4px;
  // }
  // .bg-purple-dark {
  //   background: #99a9bf;
  // }
  // .bg-purple {
  //   background: #d3dce6;
  // }
  // .bg-purple-light {
  //   background: #e5e9f2;
  // }
  // .grid-content {
  //   border-radius: 4px;
  //   min-height: 36px;
  // }
  // .row-bg {
  //   padding: 10px 0;
  //   background-color: #f9fafc;
  // }
</style>