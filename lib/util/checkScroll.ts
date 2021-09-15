export const CheckScroll = () => {
  var scrollHeight = Math.max(
    document.documentElement.scrollHeight,
    document.body.scrollHeight
  );
  var scrollTop = Math.max(
    document.documentElement.scrollTop,
    document.body.scrollTop
  );
  var clientHeight = document.documentElement.clientHeight;
  if (scrollTop + clientHeight == scrollHeight) {
    return true;
  } else {
    return false;
  }
};
