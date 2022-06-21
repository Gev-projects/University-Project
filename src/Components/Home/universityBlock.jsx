import React, {useEffect, useState} from "react";
import { Link, link } from "react-router-dom";

function UniversityBlock({ univer }) {

  const [isOpen, setOpen] = useState(false);
  
  const faculties = univer.faculties.map((item, index) => {
    return (
      <Link to={`/faculties/${item.key}`}>
        <div key={index} className="text-zinc-300 pt-4 hover:text-white">
          {item.name}
        </div>
      </Link>
      
     )
  })

  return (
    <div className="border border-gray-200 cursor-pointer select-none shadow-xl rounded-lg min-h-10 w-max p-2 pt-1 m-5">
      <p className="text-white text-2xl hover:text-blue-300" onClick={() => { setOpen(item => !item) }}>{univer.name}</p>    
      <div className={isOpen? "block": "hidden"}>
         {faculties}
      </div>
    </div>
    )
}

export default UniversityBlock;