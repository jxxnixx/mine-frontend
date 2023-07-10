import React, { useEffect } from "react";
import Footer from "../fixed/Footer";
import Header from "../fixed/Header";
import ProjectMain from "../project/ProjectMain";

function ProjectMainPage() {
  useEffect(() => {}, []);

  return (
    <div className="flex flex-col h-screen justify-between">
      <Header className="h-10" />
      <ProjectMain className="mb-auto h-10" />
      <Footer className="h-10" />
    </div>
  );
}

export default ProjectMainPage;
