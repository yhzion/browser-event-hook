import {
  describe,
  expect,
  test,
} from "@jest/globals";
import { useBrowserEvent } from "../browser-event-hook";

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
    let mockElement: any = null;
    let listen: any = null;
    let dispatch: any = null;
    let callback: any = null;
    let off: any;
    beforeEach(() => {
      mockElement = document.createElement("div");
      const obj = useBrowserEvent();
      listen = obj.listen;
      dispatch = obj.dispatch;
      callback = jest.fn();
      const _listen = listen(
        mockElement,
        "customEvent",
        (event: any) => {
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
