import dispatch from "./dispatch.js";
import listen from "./listen.js";

export const useBrowserEvent = () => {
  return {
    listen,
    dispatch,
  };
};
