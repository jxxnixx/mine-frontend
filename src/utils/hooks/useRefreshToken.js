import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get("/refresh", {
      withCredentials: true,
    });
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(response.data.accessToken);
      return { ...prev, accessToken: response.data.accessToken };
    });
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;

// accessToken은, 만약 탈취당할 경우 보안에 취약
// refreshToken의 유효기간 전까지는 accessToken을 새롭게 발급받을 수 있음.
// ex) refreshToken 2주, accessToken 1시간.
// accessToken이 만료됐더라도 2주 안에는 또 새롭게 발급받을 수 있음.
// 자동 로그인.
// 2주가 지나면 로그인을 다시 해야 함.
// https://tansfil.tistory.com/59
