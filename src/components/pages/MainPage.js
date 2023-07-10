import React, { useEffect } from "react";
import Footer from "../fixed/Footer";
import Header from "../fixed/Header";
import Hero from "../main/Hero";
import Features from "../main/Features";

function MainPage() {
  useEffect(() => {}, []);

  return (
    <div className="flex flex-col h-screen justify-between">
      <Header className="h-10" />
      <div className="mb-auto h-auto">
        <Hero />
        <Features />
      </div>
      <Footer className="h-10" />
    </div>
  );
}

export default MainPage;
