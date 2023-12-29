import { onMounted } from "vue";

export const useScale = () => {
  onMounted(() => {
    const targetWidth = 1920;
    const clientWidth = document.documentElement.clientWidth;
    if (clientWidth > targetWidth) {
      const scale = clientWidth / targetWidth;
      // document.body.style.cssText = `zoom: ${scale}`;
      document.body.style.cssText = `transform: scale(${scale}); transform-origin: 0 0;`;
    }
  });
};
