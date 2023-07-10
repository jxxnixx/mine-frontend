import React, { useEffect } from "react";
import Footer from "../fixed/Footer";
import Header from "../fixed/Header";
import ProjectApply from "../project/ProjectApply";

function ProjectApplyPage() {
  useEffect(() => {}, []);

  return (
    <div className="flex flex-col h-screen justify-between">
      <Header className="h-10" />
      <ProjectApply className="mb-auto h-10" />
      <Footer className="h-10" />
    </div>
  );
}

export default ProjectApplyPage;
