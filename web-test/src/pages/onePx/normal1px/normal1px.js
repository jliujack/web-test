// import { slot } from "vue";
import styles from "./normal1px.module.less";

export default {
  props: [],
  components: {},
  setup(props, context) {
    return {
      children: context.slots.default(),
    };
  },
  render() {
    return (
      <div class={styles["flex-wrapper"]}>
        {this.children}
        <div class={`${styles["normal-1px"]} ${styles["flex-item"]}`}>
          直接设置为1px solid #999
        </div>
      </div>
    );
  },
};
