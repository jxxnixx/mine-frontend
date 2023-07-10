import React, { useRef, useState, useEffect } from "react";
import useAuth from "../../utils/hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";

import axios from "../../utils/api/axios";
import { setCookie, getCookie } from "../../utils/api/cookie";

const LOGIN_URL = "/api/auth/login";

const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  // useNavegate : 양식 제출, 특정 이벤트 발생 시 url 조작 가능한 인터페이스 제공
  // 첫 인자 : 주소, 둘째 인자 : {replace, state}
  // replace : true or false. true - 뒤로가기 불가, false - 뒤로가기 가능
  // state는 많이 사용하지 않음.
  // https://basemenks.tistory.com/278

  const location = useLocation();
  // 사용자가 현재 머물러 있는 페이지에 대한 정보를 알려줌
  //location은
  // {
  //   pathname: '/';
  //   search: '';
  //   hash: '';
  //   state: undefined;
  // }
  // 이렇게 생겨먹은 아이라서 아래처럼 사용

  const from = location.state?.from?.pathname || "/";
  // 여기 사용된 ?. 는 'Optional Chaining'
  // ?. 앞의 평가 대상이 undefined 나 null이면 undefined 반환
  // https://ko.javascript.info/optional-chaining

  const userRef = useRef();
  const errRef = useRef();
  // 직접 DOM 건드리기!

  // const [user, setUser] = useState('');
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      );

      if (response) {
        setCookie("token", response.data.token, {
          path: "/",
          secure: true,
          sameSite: "none",
        });
        getCookie("token");
      }

      console.log(JSON.stringify(response.data.token));

      // refreshToken 사용할 경우
      //const accessToken = response?.data?.accessToken;
      ///const roles = response?.data?.roles;

      //setSuccess(true);

      // setAuth({ email, pwd });
      setEmail("");
      setPwd("");

      //navigate( from, { replace: true });
      // 로그인 성공하면 대시보드 페이지로 이동
      navigate("/dashboard");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <section>
      <div className="sm:text-center lg:text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline mb-10">로그인</span>
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col lg"
      >
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="username"
          >
            E-mail
          </label>
          <input
            type="email"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            placeholder="abc@google.com"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          ></input>
        </div>
        <div className="mb-6">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
            placeholder="******************"
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
          ></input>
          <p className="text-red text-xs italic">Find Password</p>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-indigo-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">
            로그인
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
            href="../"
          >
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </form>
    </section>
  );
};

export default Login;
