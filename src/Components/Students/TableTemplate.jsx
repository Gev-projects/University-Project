import React from "react";

function TableTemplate({list}) {
  
  const body = list.map((person, index) => {
    return (
        <tr>
          <td className="tabdata">{person.name}</td>
          <td className="tabdata">{person.surname}</td>
          <td className="tabdata">{person.grade}</td>
        </tr>
     )
  }) 
  
  return (
    <table className="tab">
      <thead className="tabhead">
        <tr>
          <th className="tabhead">Namesssssssssssssssssssssssssssss</th>
          <th className="tabhead">Surname</th>
          <th className="tabhead">Grade</th>
        </tr>
      </thead>
      <tbody>
         {body}
      </tbody>
    </table>
  )
}

export default TableTemplate;