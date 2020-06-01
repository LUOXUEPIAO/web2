<template>
  <div>
    <div class="box">
      <el-row :gutter="150">
        <el-col
          :lg="{span:10,offset:0}"
          :md="{span:18,offset:4}"
          :sm="{span:18,offset:4}"
          v-for="(item,index) in listData"
          :key="index"
        >
          <!-- <el-col
        :lg="11"
        :md="18"
        :sm="18"
        v-for="(item,index) in listData"
        :key="index"
          >-->

          <div class="teacher">
            <router-link :to="'/major/'+item.id">
              <img :src="item.url" alt />
            </router-link>
            <div class="teacherName">
              <router-link :to="'/major/'+item.id">
                <span class="name">{{item.title}}</span>
              </router-link>
              <span class="degree">{{item.degree}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  props: ["listData"]
};
</script>
    
<style scoped>
/* .box{
  margin-left: 3%;
  margin: 0 auto;

} */
.teacher {
  margin-top: 40px;
}
img {
  height: 200px;
  /* max-width: 300px; */
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

.teacherName {
  margin: 10px 0px;
}
.name {
  font-size: 18px;
  line-height: 20px;
  color: #1a85fd;
}
.degree {
  font-size: 12px;
  padding-left: 7px;
}
a {
  text-decoration: none;
}
</style>
