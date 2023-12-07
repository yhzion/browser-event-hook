describe("useBrowserEvent", () => {
  test("is defined", () => {
    expect(useBrowserEvent).toBeDefined();
  });

  test("is a function", () => {
    expect(typeof useBrowserEvent).toBe(
      "function",
    );
  });

  describe("add event listener and remove", () => {
    let mockElement;
    let listen;
    let dispatch;
    let callback;
    let off;
    beforeEach(() => {
      mockElement = document.createElement("div");
      const obj = useBrowserEvent();
      listen = obj.listen;
      dispatch = obj.dispatch;
      callback = jest.fn();
      const _listen = listen(
        mockElement,
        "customEvent",
        (event) => {
          callback(event.detail);
        },
      );
      off = _listen.off;
    });

    test("Check EventHandler added", () => {
      dispatch(mockElement, "customEvent", {
        message: "Hello World",
      });
      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith({
        message: "Hello World",
      });
    });

    test("After event removed, no callback call", () => {
      off();
      dispatch(mockElement, "customEvent", {
        message: "Hello World",
      });
      expect(callback).toHaveBeenCalledTimes(0);
    });
  });
});
import { useBrowserEvent } from "../browser-event-hook.js";
