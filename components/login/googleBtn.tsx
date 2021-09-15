import GoolgleIcon from "../../assets/google";
import GoogleLogin from "react-google-login";
import { toast } from "react-toastify";

export default function GoogleBtn({googleAuth}) {
  return (
    <GoogleLogin
      clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
      cookiePolicy="single_host_origin"
      render={(e) => (
        <div onClick={e.onClick}>
          <GoolgleIcon /> 구글로 로그인
        </div>
      )}
      onSuccess={googleAuth}
      onFailure={() => toast.info("정보를 불러오는데 실패했습니다.")}
    />
  );
}
