.<template>
  <div>
    <Banner></Banner>
    <h2>{{majorList.title}}</h2>
    <el-col :span="14" :offset="5">
      <div class="major-text">
        
        <div v-html="majorList.content" class="content"></div>
      </div>
    </el-col>
    <!-- <Footer></Footer> -->
  </div>
</template>

.<style lang="scss" scoped>
.major-text {
  margin: 30px 0px;
  // min-width: 480px;
}

// .content{
//   font-family: Arial, Helvetica, sans-serif;
//   font-size: 16px;
//   line-height: 28px;
// }
</style>


<script>
import Banner from "@/components/common/Banner";
import Footer from "@/components/common/Footer";
export default {
  data() {
    return {
      majorList: {}
    };
  },
  components: {
    Banner: Banner,
    Footer:Footer
  },
  created() {
    let id = this.$route.params.aid;
    // console.log(this.$route);
    this.getMarjorData(id);
  },
  methods: {
    getMarjorData(id) {
      this.axios.get(this.Apiurl.articleInfo + id).then(res => {
        this.majorList = res.data.data;
        // console.log(res);
      });
    }
  }
};
</script>
