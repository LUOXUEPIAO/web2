



<template>
  <div class="example">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(slide, index) in peiyang_pics" :key="index" class="them">
        <el-card :body-style="{ padding: '0px' }">
          <el-row>
            <el-col :span="16">
              <img :src="config+slide.img_src" />
            </el-col>
            <el-col :span="6">
              <p class="titles">{{slide.title}}</p>
              <p class="contents">{{slide.content}}</p>
            </el-col>
          </el-row>
        </el-card>
      </swiper-slide>

      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import axios from "axios";
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        //autoplay: true,
        loop: true,
        //centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      config: this.Apiurl.baseUrl,
      peiyang_pics: []
    };
  },
  mounted() {
    this.getStuTrainData();
  },
  methods: {
    // 获取学生培养数据
    getStuTrainData() {
      this.axios
        .get(this.Apiurl.stuTrain)
        .then(res => {
           this.peiyang_pics = res.data.data;
        })
        .catch(err => {
          console.error(err);
        });
    
    }
  }
};
</script>

<style lang="scss" scoped>
.example {
  //height: auto;

  .swiper-slide {
    width: 550px !important;
    height: 260px !important;
    background: #fff;
    .el-card {
      .titles {
        padding-top: 66px;
        font-size: 20px;
        font-weight: bold;
        color: #2c2c2c;
      }
      .contents {
        font-size: 14px;
        line-height: 20px;
        color: #2c2c2c;
      }
    }
  }
}
</style>








