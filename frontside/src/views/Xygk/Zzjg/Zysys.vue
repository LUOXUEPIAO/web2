<template>
  <div>
    <div class="content">
      <img :src="pircture.url" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pircture: []
    };
  },
  created() {
    this.getPic();
  },
  methods: {
    getPic() {
      this.axios
        .get(this.Apiurl.jsondata + "laboraPic.json")
        .then(res => {
          this.pircture = res.data.data;
          // console.log(res);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>

<style scoped>
.content{
  margin: 40px 0px;
}
    img{
        width:100%;
        height:100%;
        min-width: 480px;
    }
</style>