import React from "react";
import univerList from "../UniversityList.json"
import UniversityBlock from "./universityBlock";

const list = univerList.map((item, index) => {
  return (
      <UniversityBlock key={index} univer={item} />
  )
});
  
function University() {
    return (
      <div className="flex flex-col items-center px-4">
         {list}        
      </div>
     )
}

export default University;