// import { slot } from "vue";
import useReset from "hooks/useReset";
export default {
  props: [],
  components: {},
  setup() {
    useReset();
  },
  render() {
    return (
      <>
        <strong>rem:</strong>
        <div style={{ backgroundColor: "red", width: "1rem" }}>1rem</div>
        <div style={{ backgroundColor: "red", width: "5rem" }}>5rem</div>
        <div style={{ backgroundColor: "red", width: "10rem" }}>10rem</div>
        <div style={{ backgroundColor: "red", width: "15rem" }}>15rem</div>
        <div style={{ backgroundColor: "red", width: "20rem" }}>20rem</div>
        <div style={{ backgroundColor: "red", width: "32rem" }}>32rem</div>
        <string>vmin:</string>
        <div style={{ backgroundColor: "green", width: "1vmin" }}>1vmin</div>
        <div style={{ backgroundColor: "green", width: "10vmin" }}>10vmin</div>
        <div style={{ backgroundColor: "green", width: "30vmin" }}>30vmin</div>
        <div style={{ backgroundColor: "green", width: "55vmin" }}>55vmin</div>
        <div style={{ backgroundColor: "green", width: "80vmin" }}>80vmin</div>
        <div style={{ backgroundColor: "green", width: "100vmin" }}>
          100vmin
        </div>
      </>
    );
  },
};
