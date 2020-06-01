<template>
  <div>
    <div class="box">
      <ul>
        <li v-for="(item,index) in majorList" :key="index">
          <router-link :to="'/major/'+item._id" :title="item.title">{{item.title}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box{
  margin: 40px 0px;
}
ul {
  li {
    list-style-type: none;
    line-height: 28px;
    a {
      text-decoration: none;
      color: #000;
    }
    a:hover {
      color: #1a85fd;
    }
  }
}
</style>



<script>
export default {
  data() {
    return {
      p: {
        page: 1, //显示第几页
        limit: 10
      },
      dataCount: 0,
      majorList: []
    };
  },
  created() {
    this.getMajor();
  },
  methods: {
    getMajor() {
      this.axios
        .get(
          this.Apiurl.bkzy + "&limit=" + this.p.limit + "&page=" + this.p.page
        )
        .then(res => {
          this.majorList = res.data.data;
          //   console.log(res);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>

