type Options = {
  capture?: boolean;
  once?: boolean;
  passive?: boolean;
  lazyDelay: number;
};

const defaultOptions = {
  capture: false,
  once: false,
  passive: false,
  lazyDelay: 0,
} as Options;

const getEventHandler = (
  callback: any,
  lazyDelay: number,
) => {
  let timer: number | null = null;
  return (_event: Event) => {
    if (lazyDelay > 0) {
      if (timer !== null) {
        clearTimeout(timer);
      }
      timer = setTimeout(
        () => callback(_event),
        lazyDelay,
      ) as unknown as number;
    } else {
      callback(_event);
    }
  };
};
const listen = (
  element: Element | Window,
  eventType: string,
  callback: any,
  options = defaultOptions,
) => {
  const eventHandler = getEventHandler(
    callback,
    options.lazyDelay,
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
        console.warn(
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
        console.warn(
          "Event listener already added",
        );
      }
    },
  };
};

export default listen;
