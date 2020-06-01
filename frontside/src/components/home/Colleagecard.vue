<template>
  <div class="colleagecard">
    <el-card :body-style="{ padding: '0px' }">
      <el-row>
        <el-col :span="16">
          <img :src="feature_pics[0].imgPath" />
        </el-col>
        <el-col :span="8" class="right">
          <h2 class="title">
            <span>|</span>
            {{feature_pics[0].title}}
          </h2>
          <p>{{feature_pics[0].content}}</p>
        </el-col>
      </el-row>
    </el-card>
    <el-card :body-style="{ padding: '0px' }">
      <el-row>
        <el-col :span="8" class="right">
          <h2 class="title">
            <span>|</span>
            {{feature_pics[1].title}}
          </h2>

          <p>{{feature_pics[1].content}}</p>
        </el-col>
        <el-col :span="16">
          <img :src="feature_pics[1].imgPath" />
        </el-col>
      </el-row>
    </el-card>
    <el-card :body-style="{ padding: '0px' }">
      <el-row>
        <el-col :span="16">
          <img :src="feature_pics[2].imgPath" />
        </el-col>
        <el-col :span="8" class="right">
          <h2 class="title">
            <span>|</span>

            {{feature_pics[2].title}}
          </h2>
          <p>{{feature_pics[2].content}}</p>
        </el-col>
      </el-row>
    </el-card>
    <el-card :body-style="{ padding: '0px' }">
      <el-row>
        <el-col :span="8" class="right">
          <h2 class="title">
            <span>|</span>
            {{feature_pics[3].title}}
          </h2>

          <p>{{feature_pics[3].content}}</p>
        </el-col>
        <el-col :span="16">
          <img :src="feature_pics[3].imgPath" />
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.colleagecard {
  width: 100%;
  .el-card {
    margin: 0 auto;
    width: 80%;
    height: 400px;
    img {
      width: 100%;
    }
    .right {
      padding-left: 84px;
      padding-top: 106px;

      .title {
        span {
          color: #1a85fd;
        }
        height: 5px;
        font-size: 20px;
        font-weight: bold;
        color: #2c2c2c;
        padding-bottom: 64px;
        position: relative;
        left: -10px;
      }
      p {
        font-size: 16px;
        color: #2c2c2c;
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      // 学院特色内容
      feature_pics: [
        {
          title: "师生团队",
          imgPath: require("../../assets/images/feature1.jpg"),
          content:
            "来自全省各地的33支队伍按小学组中学组和大学组的分类参加了本次我校军乐团作为大学组第二支队伍"
        },
        {
          title: "专业方向双师型",
          imgPath: require("../../assets/images/feature2.jpg"),
          content:
            "来自全省各地的33支队伍按小学组中学组和大学组的分类参加了本次我校军乐团作为大学组第二支队伍"
        },
        {
          title: "第四课堂",
          imgPath: require("../../assets/images/feature3.jpg"),
          content:
            "来自全省各地的33支队伍按小学组中学组和大学组的分类参加了本次我校军乐团作为大学组第二支队伍"
        },
        {
          title: "特色实验室",
          imgPath: require("../../assets/images/feature4.jpg"),
          content:
            "来自全省各地的33支队伍按小学组中学组和大学组的分类参加了本次我校军乐团作为大学组第二支队伍"
        }
      ]
    };
  }
};
</script>