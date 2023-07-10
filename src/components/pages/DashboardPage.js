import React, { useEffect } from "react";
import Footer from "../fixed/Footer";
import Header from "../fixed/Header";
import AccountFetch from "../account/AccountFetch";
import ProjectFetch from "../project/ProjectFetch";

function DashboardPage() {
  useEffect(() => {}, []);

  return (
    <div className="flex flex-col h-screen justify-between">
      <Header className="h-10" />
      <AccountFetch />
      <div className="sm:text-center lg:text-center mt-10 mb-10">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-3xl mb-10">
          <span className="text-center block xl:inline mb-5">
            현재 참여하고 있는 프로젝트
          </span>
        </h1>
        <ProjectFetch />
      </div>
      <Footer className="h-10" />
    </div>
  );
}

export default DashboardPage;
