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
      <div className="flex flex-col items-center">
         {list}        
      </div>
     )
}

export default University;