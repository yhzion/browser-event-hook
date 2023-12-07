const dispatch = (
  element,
  eventType,
  data = null,
) => {
  if (
    !(
      element instanceof Element ||
      element === window
    )
  ) {
    throw new Error("element must be Element");
  }
  const event = new CustomEvent(eventType, {
    detail: data,
  });
  element.dispatchEvent(event);
};
export default dispatch;
