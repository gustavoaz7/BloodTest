export const flushPromises = () => new Promise(setImmediate);

export const stackNavigationProps = {
  state: {},
  dispatch() {},
  goBack() {},
  dismiss() {},
  navigate() {},
  getParam() {},
  setParams() {},
  emit() {},
  addListener() {},
  isFocused() {},
  isFirstRouteInParent() {},
  dangerouslyGetParent() {},
  router() {},
};
