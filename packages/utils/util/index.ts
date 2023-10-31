const Utils = {
  sleep: (ms: number) => new Promise((resolve) => setTimeout(resolve, ms)),
};
export default Utils;
