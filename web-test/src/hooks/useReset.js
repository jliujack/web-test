import { onMounted } from "vue";

export default function useReset() {
  onMounted(() => {
    const viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute(
      "content",
      "width=device-width,initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
    );
    const docEl = document.documentElement;
    const fontsize = 10 * (docEl.clientWidth / 320) + "px";
    docEl.style.fontSize = fontsize;
  });
}
