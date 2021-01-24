<template>
  <h1>移动端示例!</h1>
  <el-menu router class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1" route="/view-port">视口</el-menu-item>
    <el-menu-item index="2" route="/1px">1像素</el-menu-item>
    <el-menu-item index="3" route="/layout">布局</el-menu-item>
  </el-menu>

  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  height: 100%;
}
body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
}
</style>
