import React, { useState, useEffect } from "react";
import { getCookie, removeCookie } from "../../utils/api/cookie";
import { useNavigate } from "react-router-dom";

function Loading() {
  let navigate = useNavigate();

  useEffect(() => {
    // 토큰이 존재한다면 자동 로그인
    const token = getCookie("token");

    if (token !== undefined) {
      tokenAutoLogin(token);
    }
    // 토큰이 존재하지 않는다면 로그인 화면으로 Re-route
    else {
      navigate("/login");
    }
  }, []);

  function tokenAutoLogin(token) {
    // POST 방식으로 서버 전송

    // 사용자 정보를 정상적으로 가져오면 (status: 200, ok)
    // 대시보드로 Re-route

    // 사용자 정보를 정상적으로 가져오지 못했으면 (status: 500)
    // userId 토큰 삭제 및 에러 메세지 출력
    // 로그인 화면으로 Re-route

    // 임시: main 페이지로 이동
    navigate("/main");
  }

  return (
    <div className="loading-wrapper component">
      <h1 id="loading_text">loading...</h1>
    </div>
  );
}

export default Loading;
