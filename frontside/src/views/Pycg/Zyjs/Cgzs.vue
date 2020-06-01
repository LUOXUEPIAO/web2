<template>
  <div>
    <h2>本科专业</h2>
    <ul>
      <li v-for="(item,index) in competitionList" :key="index">
          <router-link 
          :to="'/article/'+item._id" 
          :title="item.title">
          {{item.title}}
          </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
    ul{
        li{
            list-style-type: none;
            line-height: 28px;
            a{
                text-decoration: none;
                color: #000;
            }
            a:hover{
                color: #1a85fd;
            }
        }
    }
</style>



<script>
export default {
    data(){
        return {
            competitionList:[]
        }
    },
    created(){
        this.getCompetition();
    },
    methods:{
        getCompetition(){
            this.axios.get(
                this.Apiurl.cgzs)
                .then(res=>{
                    this.competitionList=res.data.data;
                   
                })
                .catch(err=>{
                    console.error(err);
                });
        }
    }
}
</script>

