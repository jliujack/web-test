import { createApp } from "vue";
import router from "./routes";
import App from "./App.vue";
import {
  ElButton,
  ElButtonGroup,
  ElInput,
  ElInputNumber,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElRate,
  ElRow,
  ElSelect,
  ElSubmenu,
  ElTabPane,
  ElTable,
  ElTableColumn,
  ElTabs,
  ElTag,
} from "element-plus";

const components = [
  ElButton,
  ElButtonGroup,

  ElInput,
  ElInputNumber,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,

  ElRate,
  ElRow,
  ElSelect,
  ElSubmenu,
  ElTabPane,
  ElTable,
  ElTableColumn,
  ElTabs,
  ElTag,
];

const plugins = [];

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

plugins.forEach((plugin) => {
  app.use(plugin);
});

app.use(router);

app.mount("#app");
