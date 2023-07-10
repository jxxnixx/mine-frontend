import { useContext, useDebugValue } from "react";
import AuthContext from "../context/AuthProvider";

const useAuth = () => {
  const { auth } = useContext(AuthContext);
  // 전역 context인 useContext를 사용하기 위해, authContext를 래핑해 리턴

  useDebugValue(auth, (auth) => (auth?.user ? "Logged In" : "Logged Out"));
  // useDebugValue : 반드시 hooks 내에서 사용해야 동작
  // 자주 사용하는 hook에 붙여 두면, 디버깅할 때 좋음.

  return useContext(AuthContext);
  // 요기 리턴
};

export default useAuth;
