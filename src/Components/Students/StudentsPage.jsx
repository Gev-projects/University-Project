import React from "react";
import Background from "../Home/background";
import { useParams } from "react-router-dom";
import TableTemplate from "./TableTemplate";
import StudentsList from "../StudentsList.json" 

function StudentsPage() {
  let params = useParams()
  const key = params.key.replace(":", "");
  const faculty = StudentsList.filter(univer => univer.key === key);
  const students = faculty[0].students;
  
  return (
    <>
      <Background />
      <div className="pt-32">
        <TableTemplate list={students} />
      </div>
      
    </>
  )
}

export default StudentsPage;