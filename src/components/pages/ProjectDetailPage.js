import React, { useEffect } from "react";
import Footer from "../fixed/Footer";
import Header from "../fixed/Header";
import ProjectDetail from "../project/ProjectDetail";

function ProjectDetailPage() {
  useEffect(() => {}, []);

  return (
    <div className="flex flex-col h-screen justify-between">
      <Header className="h-10" />
      <ProjectDetail className="mb-auto h-10" />
      <Footer className="h-10" />
    </div>
  );
}

export default ProjectDetailPage;
