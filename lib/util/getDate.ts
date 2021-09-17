export function getDate(params: Date | string) {
  let date = new Date(params);
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  let diff = (new Date().getTime() - date.getTime() + KR_TIME_DIFF) / 1000,
    day_diff = Math.floor(diff / 86400);
  if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31)
    return `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`;
  return (
    (day_diff == 0 &&
      ((diff < 60 && "방금") ||
        (diff < 120 && "1분 전") ||
        (diff < 3600 && Math.floor(diff / 60) + "분 전") ||
        (diff < 7200 && "1시간 전") ||
        (diff < 86400 && Math.floor(diff / 3600) + "시간 전"))) ||
    (day_diff == 1 && "어제") ||
    (day_diff < 7 && day_diff + "일 전") ||
    (day_diff < 31 && Math.ceil(day_diff / 7) + "주 전")
  );
}
