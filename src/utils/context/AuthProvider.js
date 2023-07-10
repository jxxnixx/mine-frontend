import { createContext, useState } from "react";

const AuthContext = createContext({});
// 전역 context 객체 생성

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
  // context를 구독하는 컴포넌트들에게 context의 변화를 알리는 용도로 사용
  // Provider는, value props를 받아 하위 컴포넌트들(children)에게 전달.
  // context 컴포넌트를 구독하는 하위 컴포넌트들(children)은
  // value 값이 변할 때마다 렌더링됨.
};

export default AuthContext;

// https://jhkang-tech.tistory.com/277
