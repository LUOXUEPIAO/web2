<template>
  <div class="footer">
    <el-row>
      <el-col :span="8">
        <h2>友情链接</h2>
        <p>
          <el-link href="https://element.eleme.io" target="_blank">学校官网</el-link>
        </p>
        <p>
          <el-link href="https://element.eleme.io" target="_blank">协同办公系统</el-link>
        </p>
        <p>
          <el-link href="https://element.eleme.io" target="_blank">学工管理系统</el-link>
        </p>
        <p>
          <el-link href="https://element.eleme.io" target="_blank">人事管理系统</el-link>
        </p>
      </el-col>
      <el-col :span="8">
        <h2>联系我们</h2>
        <p>地址:123113113</p>
        <p>电话:123113113</p>
        <p>邮编:123113113</p>
      </el-col>
      <el-col :span="8">
        <h2>官方二维码</h2>
        <p>地址:123113113</p>
        <p>电话:123113113</p>
        <p>邮编:123113113</p>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss">
.footer {
  width: 100%;
  margin-top: 18px;
  background: url("../../assets/images/footter.jpg") no-repeat;
  background-size: 100% 100%;

  .el-col {
    padding-top: 62px;
    text-align: center;
    h2 {
      color: #fff;
      font-weight: bold;
      font-size: 20px;
      padding-bottom: 70px;
    }
    p {
      padding-bottom: 30px;
      font-size: 18px;
      color: #fff;
    }
    .el-link {
      font-size: 18px;
      color: #fff;
    }
  }
}
</style>