<template>
  <el-table :data="tableData" style="width: 100%" size="mini" fit="{{false}}">
    <el-table-column label="width" width="100">
      <template #default="scope">
        <span style="margin-left: 10px">{{ scope.row.width }}</span>
      </template>
    </el-table-column>
    <el-table-column label="initial-scale" width="100">
      <template #default="scope">
        <span style="margin-left: 10px">{{ scope.row.initial }}</span>
      </template>
    </el-table-column>
    <el-table-column label="layoutviewport" width="80">
      <template #default="scope">
        <span style="margin-left: 10px">{{ scope.row.layout }}</span>
      </template>
    </el-table-column>
    <el-table-column label="visualviewport" width="80">
      <template #default="scope">
        <span style="margin-left: 10px">{{ scope.row.visual }}</span>
      </template>
    </el-table-column>
    <el-table-column label="idealviewport" width="80">
      <template #default="scope">
        <span style="margin-left: 10px">{{ scope.row.ideal }}</span>
      </template>
    </el-table-column>
    <el-table-column label="是否滚动" width="80">
      <template #default="scope">
        <span style="margin-left: 10px">{{ scope.row.isScroll }}</span>
      </template>
    </el-table-column>
    <el-table-column label="查看">
      <template #default="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >测试</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <el-button size="mini" @click="initMeta">重置</el-button>
</template>

<script>
import useReset from "hooks/useReset";

export default {
  setup() {
    useReset();
  },
  data() {
    return {
      tableData: [
        {
          width: "-",
          initial: "-",
          layout: "980px",
          visual: "980px",
          ideal: "375px",
          isScroll: "否",
        },
        {
          width: "device-width",
          initial: "1",
          layout: "375px",
          visual: "375px",
          ideal: "375px",
          isScroll: "否",
        },
        {
          width: "device-width",
          initial: "2",
          layout: "375px",
          visual: "188px",
          ideal: "375px",
          isScroll: "是",
        },
        {
          width: "device-width",
          initial: "0.5",
          layout: "750px",
          visual: "750px",
          ideal: "375px",
          isScroll: "否",
        },
        {
          width: "480px",
          initial: "1",
          layout: "480px",
          visual: "375px",
          ideal: "375px",
          isScroll: "是",
        },
        {
          width: "480px",
          initial: "2",
          layout: "480px",
          visual: "188px",
          ideal: "375px",
          isScroll: "是",
        },
        {
          width: "480px",
          initial: "0.5",
          layout: "750px",
          visual: "750px",
          ideal: "375px",
          isScroll: "否",
        },
      ],
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      const viewport = document.querySelector("meta[name=viewport]");
      viewport.setAttribute(
        "content",
        `${row.width === "-" ? "" : `width=${row.width},`}initial-scale=${
          row.initial
        },user-scalable=no`
      );
    },
    initMeta() {
      const viewport = document.querySelector("meta[name=viewport]");
      viewport.setAttribute(
        "content",
        "width=device-width,initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
      );
    },
  },
};
</script>