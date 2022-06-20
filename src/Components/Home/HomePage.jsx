import React from "react";
import Header from "./Header";
import University from "./university.jsx";
import Background from "./background";

function HomePage() {
  return (
    <div className="h-full w-full max-h-full">
      <Background />
     
      <Header />
      <University />
  </div>
    
    
  )
}

export default HomePage;