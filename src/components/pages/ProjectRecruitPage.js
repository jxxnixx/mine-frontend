import React, { useEffect } from "react";
import Footer from "../fixed/Footer";
import Header from "../fixed/Header";
import ProjectFetch from "../project/ProjectFetch";

function ProjectRecruitPage() {
  useEffect(() => {}, []);

  return (
    <div className="flex flex-col h-screen justify-between">
      <Header className="h-10" />
      <div class="p-10 bg-indigo-500 sm:text-center lg:text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
          <span className="text-center block xl:inline m-3 text-white">
            프로젝트를 찾고,
          </span>
          <span className="text-center block xl:inline m-3 text-white">
            지원해보세요
          </span>
        </h1>
      </div>
      <div class="flex">
        <div className="flex-inital w-1/2 sm:text-center lg:text-center mt-10 mb-10">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-3xl">
            <span className="text-center block xl:inline mb-5">
              현재 모집중인 프로젝트
            </span>
          </h1>
          <ProjectFetch />
        </div>
        <div className="flex-inital w-1/2 sm:text-center lg:text-center mt-10 mb-10">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-3xl">
            <span className="text-center block xl:inline mb-5">
              본인과 어울리는 프로젝트
            </span>
          </h1>
          <ProjectFetch />
        </div>
      </div>
      <Footer className="h-10" />
    </div>
  );
}

export default ProjectRecruitPage;
