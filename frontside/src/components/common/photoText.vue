<template  >
  <el-row>
    <el-col v-for="(item,index) in article" :key="index" class="box">
      <el-col v-if="item.img_url" :span="8" :offset="1">
        <!-- <el-col > -->
          <a :href="'/article/'+item.aid" >
            <img :src="item.img_url" alt :title="item.title" />
          </a>
        <!-- </el-col> -->
      </el-col>
      <el-col v-if="item.img_url" :span="15">
        <el-col class="list">
          <a :href="'/article/'+item.aid">
          <p class="title">{{item.title}}</p>
          </a>
        </el-col>
        <el-col>
          <p class="content">{{item.text}}</p>
        </el-col>
      </el-col>
    </el-col>
  </el-row>
</template>
<style  scoped>
.box {
  margin-top: 10px;
}
p {
  padding-left: 10px;
}
img {
  width: 225px;
  height: 140px;
  -webkit-transition: -webkit-transform 0.3s ease;
  -moz-transition: -moz-transform 0.3s ease;
  -ms-transition: -ms-transform 0.3s ease;
  transition: transform 0.3s ease;
}
img:hover {
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform: scale(1.1);
  cursor: pointer;
}
.title {
  font-weight: bold;
  color: #1a85fd;
}
.title:hover {
  cursor: pointer;
  color: #3b0db8;
}
.content {
  font-size: 16px;
  line-height: 28px;
  margin-bottom: 0px;
}
.list {
  margin-top: 30px;
}
.list a{
  text-decoration: none;
}
</style>
<script>
export default {
  props: ["article"],
};
</script>