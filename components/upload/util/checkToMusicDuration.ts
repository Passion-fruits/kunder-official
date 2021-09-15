import { toast } from "react-toastify";
export function CheckToMusicDuration(data, callback) {
  const reader = new FileReader();
  reader.readAsDataURL(data.musicSrc);
  reader.onload = (e) => {
    const result: any = e.target.result;
    const audio = new Audio(result);
    audio.oncanplaythrough = () => {
      callback({
        ...data,
        duration: audio.duration.toString(),
      });
      if (audio.duration < 60 || audio.duration > 300) {
        toast.info("1분 이상, 5분 이하의 곡을 업로드해주세요!");
        callback({
          ...data,
          musicSrc: "",
          duration: "",
        });
      }
    };
  };
}
