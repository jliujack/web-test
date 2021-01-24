// import { slot } from "vue";
import normal1px from "./normal1px/normal1px";

export default {
  props: [],
  components: {},
  render() {
    return (
      <>
        <normal1px>
          <div
            style={{
              border: "1px solid #999",
              flex: 1,
            }}
          >
            设置meta后正常使用
          </div>
        </normal1px>
      </>
    );
  },
};
