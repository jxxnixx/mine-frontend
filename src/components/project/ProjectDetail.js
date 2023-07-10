import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "../../utils/api/axios";

const ProjectDetail = () => {
  const { itemId } = useParams();
  const [itemLists, setItemLists] = useState([]);
  const [item, setItem] = useState([]);

  // const getItems = async () => {
  //   const response = await axios.get(`/api/recruit/`,
  //       {
  //           withCredentials: false
  //       }
  //   );

  //   console.log(JSON.stringify(response?.data.recruitList));

  //   setItemLists(response?.data.recruitList);

  // }

  // const filterItems = () => {
  //   return itemLists.filter((item) => {
  //     if(item.projectId == itemId)
  //     setItem(item);
  //   })
  // }

  // getItems();
  // filterItems();

  return (
    <>
      <div className="mb-10" />
      <div className="sm:text-center lg:text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline mb-3">프로젝트명</span>
        </h1>
      </div>
      <div className="block text-grey-darker text-lg font-bold text-center mb-2">
        등록한 사람 : 롸
      </div>
      <p class="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">
        올린 날짜 : 롸
      </p>

      <div class="lg:w bg-white flex flex-wrap content-center items-center justify-center rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">
        <p class="flex items-left justify-center">
          <img
            class="rounded-t-lg"
            src="https://avatars.githubusercontent.com/u/103104002?s=400&u=fe6790e6a567f81123b15f0effc05364cc4b19e8&v=4"
            alt=""
          />
        </p>
        <div class="p-5">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            프로젝트 ID : {itemId}
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            지역 :
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            현재 상황 :
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            프로젝트 기간 :
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            구인 수 :
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            구인 기간 :
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            구인 포지션 :
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            설명 :
          </p>
          <Link
            to={{ pathname: `/project/apply/${itemId}` }}
            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            지원하기
            <svg
              class="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
