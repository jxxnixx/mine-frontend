import React, { useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getCookie } from "../../utils/api/cookie";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="flex flex-wrap items-center justify-between bg-indigo-600 p-6 pb-0">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <Link to="/" className="font-semibold text-xl tracking-tight">
            Mine: Develop A Mine{" "}
          </Link>
        </div>

        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>메뉴</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link
              to="/dashboard"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
            >
              대시보드
            </Link>
            <Link
              to="/project/"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
            >
              프로젝트
            </Link>
            <Link
              to="/community"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white"
            >
              커뮤니티
            </Link>
          </div>
          <div>
            {getCookie("token") !== undefined ? (
              <Link
                to="/login"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              >
                Test 님
              </Link>
            ) : (
              <>
                <Link
                  to="/signUp"
                  className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                >
                  회원가입
                </Link>
                <Link
                  to="/login"
                  className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                >
                  로그인
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
      <div className="flex flex-wrap items-center justify-between bg-indigo-600 flex-shrink-0 text-white p-6 py-3">
        <button onClick={() => navigate(-1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>
        <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-gray hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
          💎
        </button>
      </div>
    </div>
  );
}

export default Header;
