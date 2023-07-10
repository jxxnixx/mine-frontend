import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 mb-40">
      <div className="sm:text-center lg:text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block text-indigo-600 mb-5">Mine </span>
          <span className="block xl:inline mb-2">프로젝트를</span>
          <span className="block xl:inline"> 함께 진행해보세요</span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:text-center">
          프로젝트를 해보고 싶은 학생 개발자들이 손쉽게 동료들을 모아
          <br /> 프로젝트를 진행할 수 있도록 도와주는 플랫폼
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
          <div className="rounded-md shadow">
            <Link
              to="/project/recruit"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              시작하기
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
