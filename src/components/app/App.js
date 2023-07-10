import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "../loading/loading";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import ProjectCreatePage from "../pages/ProjectCreatePage";
import ProjectApplyPage from "../pages/ProjectApplyPage";
import ProjectDetailPage from "../pages/ProjectDetailPage";
import ProjectRecruitPage from "../pages/ProjectRecruitPage";
import SignUpPage from "../pages/SignUpPage";
import CommunityPage from "../pages/CommunityPage";
import ProjectMainPage from "../pages/ProjectMainPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/project" element={<ProjectMainPage />} />
          <Route path="/project/create" element={<ProjectCreatePage />} />
          <Route path="/project/recruit" element={<ProjectRecruitPage />} />
          <Route
            path="/project/detail/:itemId"
            element={<ProjectDetailPage />}
          />
          <Route path="/project/apply/:itemId" element={<ProjectApplyPage />} />
          <Route path="/community" element={<CommunityPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
