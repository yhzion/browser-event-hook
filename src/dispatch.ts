const dispatch = (
  element: Element | Window,
  eventType: string,
  data = null,
) => {
  const event = new CustomEvent(eventType, {
    detail: data,
  });
  element.dispatchEvent(event);
};
export default dispatch;
