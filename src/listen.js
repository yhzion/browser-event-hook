const defaultOptions = {
  capture: false,
  once: false,
  passive: false,
  lazyDelay: 0,
};

const getEventHandler = (
  callback,
  { lazyDelay },
) => {
  let timer = null;
  return (_event) => {
    if (lazyDelay > 0) {
      if (timer !== null) {
        clearTimeout(timer);
      }
      timer = setTimeout(
        () => callback(_event),
        lazyDelay,
      );
    } else {
      callback(_event);
    }
  };
};
const listen = (
  element,
  eventType,
  callback,
  options = defaultOptions,
) => {
  if (
    !(
      element instanceof Element ||
      element === window
    )
  ) {
    throw new Error(
      "element must be Element or window",
    );
  }
  if (typeof callback !== "function") {
    throw new Error("callback must be function");
  }
  const eventHandler = getEventHandler(
    callback,
    options,
  );
  element.addEventListener(
    eventType,
    eventHandler,
    options,
  );

  const SWITCH = {
    ON: 0,
    OFF: 1,
  };

  let currentState = SWITCH.ON;

  return {
    off: () => {
      if (currentState === SWITCH.ON) {
        element.removeEventListener(
          eventType,
          eventHandler,
          options,
        );
        currentState = SWITCH.OFF;
      } else {
        throw new Error(
          "Event listener already removed",
        );
      }
    },
    on: () => {
      if (currentState === SWITCH.OFF) {
        element.addEventListener(
          eventType,
          eventHandler,
          options,
        );
        currentState = SWITCH.ON;
      } else {
        throw new Error(
          "Event listener already added",
        );
      }
    },
  };
};

export default listen;
