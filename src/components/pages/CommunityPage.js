import React, { useEffect } from "react";
import Footer from "../fixed/Footer";
import Header from "../fixed/Header";
import Community from "../community/Community";

function CommunityPage() {
  useEffect(() => {}, []);

  return (
    <div className="flex flex-col h-screen justify-between">
      <Header className="h-10" />
      <div class="flex">
        <div className="flex-inital w-1/2 sm:text-center lg:text-center mt-10 mb-10">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-3xl">
            <span className="text-center block xl:inline mb-5">
              최신 업로드 커뮤니티
            </span>
          </h1>
          <Community />
        </div>
        <div className="flex-inital w-1/2 sm:text-center lg:text-center mt-10 mb-10">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-3xl">
            <span className="text-center block xl:inline mb-5">
              추천 커뮤니티
            </span>
          </h1>
          <Community />
        </div>
      </div>
      <Footer className="h-10" />
    </div>
  );
}

export default CommunityPage;
