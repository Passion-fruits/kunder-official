import GoolgleIcon from "../../assets/google";
import GoogleLogin from "react-google-login";
import { toast } from "react-toastify";

export default function GoogleBtn({ googleAuthEvent }) {
  return (
    <GoogleLogin
      clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
      cookiePolicy="single_host_origin"
      render={(e) => (
        <button className="login-button" id="focus" onClick={e.onClick}>
          <GoolgleIcon /> 구글로 로그인
        </button>
      )}
      onSuccess={googleAuthEvent}
      onFailure={() => toast.info("정보를 불러오는데 실패했습니다.")}
    />
  );
}
