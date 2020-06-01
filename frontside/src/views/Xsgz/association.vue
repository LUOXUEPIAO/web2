.<template>
  <div class="main">

    <Banner></Banner>
   
    <h2>{{associationList.title}}</h2>
    <el-row :gutter="20">
        <el-col :span="12" :offset="6">
            <div class="grid-content text" v-html="associationList.content"></div>
        </el-col>
    </el-row>

  </div>
</template>

.<style lang="scss" scoped>
.main{
  position: relative;
  
}
h2{
      text-align: center;
    font-size: 24px;
  
}
.text {
  text-indent: 2em;
 
}
 img{
      width: 700px ;
      height: 400px;
  }
</style>


<script>
import Banner from "@/components/common/Banner";

export default {
  data() {
    return {
      associationList: {}
    };
  },
  components: {
    Banner: Banner
  },
  created() {
    let id = this.$route.params.aid;
  
    this.getAssociationData(id);
  },
  methods: {
    getAssociationData(id) {
      this.axios.get(this.Apiurl.articleInfo + id).then(res => {
        this.associationList = res.data.data;
    
      });
    }
  }
};
</script>
