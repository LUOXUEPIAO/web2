.<template>
  <div class="main">

    <Banner></Banner>
   
    <h2>{{competitionList.title}}</h2>
   
        <el-row :gutter="20">
        <el-col :span="13" :offset="5">
            <div class="grid-content text" v-html="competitionList.content"></div>
        </el-col>
    </el-row>
  
  </div>
</template>

.<style lang="scss" >
.main{
  position: relative;
  min-height: 800px;
  overflow: hidden;
  .text div{
   margin-left: auto;
  }
    table{
    //background: black;
    width: 100% !important;
     border: 1px solid black;
    //border-collapse:separate !important;
   td{
      border:1px solid #000;
       text-align: center !important;
      width: 110px !important;
      padding: 0px  !important;
   }
  }
}
h2{
      text-align: center;
    font-size: 24px;
  
}
.text {
  text-indent: 2em;
  font-family: 微软雅黑;
  font-size: medium;
  
}
</style>


<script>
import Banner from "@/components/common/Banner";

export default {
  data() {
    return {
      competitionList: {}
    };
  },
  components: {
    Banner: Banner
  },
  created() {
    let id = this.$route.params.aid;
  
    this.getcompetition(id);
  },
  methods: {
    getcompetition(id) {
      this.axios.get(this.Apiurl.articleInfo + id).then(res => {
        this.competitionList = res.data.data;
    
      });
    }
  }
};
</script>
