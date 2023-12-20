import dispatch from "./dispatch";
import listen from "./listen";

export const useBrowserEvent = () => {
  return {
    listen,
    dispatch,
  };
};
