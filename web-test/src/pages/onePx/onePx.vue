<template>
  <el-tabs
    tab-position="top"
    style="height: 200px"
    @tab-click="handleClick"
    :before-leave="handleLeave"
    v-model="activeName"
  >
    <el-tab-pane name="1" label="伪元素scale缩放">
      <normal1px>
        <div class="flex-item border-pseudo-scale-1px">伪元素scale缩放</div>
      </normal1px>
      <strong>重点推荐，相对灵活</strong>
    </el-tab-pane>
    <el-tab-pane name="2" lazy label="viewport的scale值">
      <configMeta></configMeta>
      <strong>可以直接设置1px，支持圆角 缺点是全局配置</strong>
    </el-tab-pane>
    <el-tab-pane name="3" label="border-image">
      <border-image></border-image>
    </el-tab-pane>
    <el-tab-pane name="4" label="box-shadow">
      <normal1px>
        <div class="flex-item box-shadow-1px">阴影实现1px</div>
      </normal1px>
      <strong>代码量少，使用方便，而且可以设置圆角矩形,缺点是不清晰</strong>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import borderImage from "./borderImage";
import normal1px from "./normal1px/normal1px";
import configMeta from "./configMeta";
import useReset from "hooks/useReset";

export default {
  setup() {
    useReset();
  },
  data() {
    return { activeName: "1" };
  },
  name: "onePx",
  components: { borderImage, normal1px, configMeta },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleLeave(activeName, oldActiveName) {
      if (activeName === "2") {
        const viewport = document.querySelector("meta[name=viewport]");
        //下面是根据设备像素设置viewport
        if (window.devicePixelRatio == 1) {
          viewport.setAttribute(
            "content",
            "width=device-width,initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
          );
        }
        if (window.devicePixelRatio == 2) {
          viewport.setAttribute(
            "content",
            "width=device-width,initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no"
          );
        }
        if (window.devicePixelRatio == 3) {
          viewport.setAttribute(
            "content",
            "width=device-width,initial-scale=0.3333333333333333, maximum-scale=0.3333333333333333, minimum-scale=0.3333333333333333, user-scalable=no"
          );
        }
        const docEl = document.documentElement;
        const fontsize = 10 * (docEl.clientWidth / 320) + "px";
        docEl.style.fontSize = fontsize;
      }
      if (oldActiveName === "2") {
        const viewport = document.querySelector("meta[name=viewport]");
        viewport.setAttribute(
          "content",
          "width=device-width,initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
        );
        const docEl = document.documentElement;
        const fontsize = 10 * (docEl.clientWidth / 320) + "px";
        docEl.style.fontSize = fontsize;
      }
    },
  },
};
</script>

<style scope lang="less">
.flex-item {
  flex: 1;
}

.border-pseudo-scale-1px {
  position: relative;
  &:after {
    position: absolute;
    content: "";
    top: -50%;
    bottom: -50%;
    left: -50%;
    right: -50%;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    border-top: 1px solid #666;
    border-bottom: 1px solid #666;
  }
}

.box-shadow-1px {
  box-shadow: inset 0px 1px 1px -1px #999;
}
</style>
