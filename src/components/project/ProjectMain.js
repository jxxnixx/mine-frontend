import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const projectList = [
  {
    name: "프로젝트 찾기",
    icon: GlobeAltIcon,
  },
  {
    name: "프로젝트 등록하기",
    icon: ScaleIcon,
  },
];

export default function ProjectMain() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            M i n e
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            프로젝트를 해볼 수 있는 최적의 환경
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            이곳에서 프로젝트를 등록하고, 찾아보고, 지원하고, 시작하세요!
          </p>
          <div class="p-3" />
        </div>

        <div className="flex flex-wrap content-center items-center justify-evenly">
          <div class="lg:w-1/5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <p class="flex items-left justify-center">
              <img
                class="rounded-t-lg"
                src="https://avatars.githubusercontent.com/u/103104002?s=400&u=fe6790e6a567f81123b15f0effc05364cc4b19e8&v=4"
                alt=""
              />
            </p>
            <div class="p-5">
              <Link
                to="/project/recruit"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                프로젝트 찾기
              </Link>
            </div>
          </div>

          <div class="lg:w-1/5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">
            <p class="flex items-left justify-center">
              <img
                class="rounded-t-lg"
                src="https://avatars.githubusercontent.com/u/103104002?s=400&u=fe6790e6a567f81123b15f0effc05364cc4b19e8&v=4"
                alt=""
              />
            </p>
            <div class="p-5">
              <Link
                to="/project/create"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                프로젝트 생성
              </Link>
            </div>
          </div>

          <div class="lg:w-1/5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">
            <p class="flex items-left justify-center">
              <img
                class="rounded-t-lg"
                src="https://avatars.githubusercontent.com/u/103104002?s=400&u=fe6790e6a567f81123b15f0effc05364cc4b19e8&v=4"
                alt=""
              />
            </p>
            <div class="p-5">
              <Link
                to="/dashboard"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                대시보드
              </Link>
            </div>
          </div>

          <div class="lg:w-1/5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">
            <p class="flex items-left justify-center">
              <img
                class="rounded-t-lg"
                src="https://avatars.githubusercontent.com/u/103104002?s=400&u=fe6790e6a567f81123b15f0effc05364cc4b19e8&v=4"
                alt=""
              />
            </p>
            <div class="p-5">
              <Link
                to="/community"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                커뮤니티
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
