<template>
  <div class="gradcard">
    <div class="pictext" v-for="(item, index) in list" :key="index">
      <img :src="config+item.img_src" alt />
      <p>{{item.title}}</p>
    </div>
  </div>
</template>

<style lang="scss">
.gradcard {
  width: auto;

  display: flex;

  .pictext {
    margin: 0 auto;
    //display: inline-block;
    width: 390px;
    // height: 390px;
    background: #eee;
    position: relative;
    img {
      width: 100%;
    }
    p {
      background: #2d7fd3;
      color: #fff;
      position: absolute;
      top: 0;
      right: 18px;
      height: 52px;
      width: 90px;
      font-size: 16px;
      font-weight: bold;
      line-height: 52px;
      text-align: center;
      border-radius: 10px;
    }
  }
}
</style>


<script>
import axios from "axios";
export default {
  data() {
    return {
      config: this.Apiurl.baseUrl,
      list: []
    };
  },
  mounted() {
    this.getGradData();
  },
  methods: {
    // 获取毕业学生培养成果数据
    getGradData() {
      this.axios
        .get(this.Apiurl.gradTrain)
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