import React, { useState } from "react";
import Student from "../../component/Student/Student";
import "./dash.css";

export default function Dash(){

    const [name, setName] = useState('');
    const [students, setStudents] = useState([
      { id: 101, name: "Aman", major: "CS" },
      { id: 102, name: "Alazar", major: "SA" },
      { id: 103, name: "Samuel", major: "MBA" },
    ]);
  

//   const changeFirstName = (event) => {
//     students[0].name = event.target.name;
//    setStudents([students])
//   };
const changeNameHandler = (name) =>{
    students[1].name = name;
    setStudents([students]);
}

  const studentList = students.map((student) => (
    <Student id={student.id} name={student.name} major={student.major} />
  ));

  
    return (
      <React.Fragment>
        <div>{studentList}</div>

        {/* <input type="text" id="text" name="name" />
        <br />

        <button className="button" onClick={changeFirstName}>
          Change Name
        </button> */}
        <input type="text" id="name1" value={name} onChange={(field) => setName(field.target.value)}></input>
        
        <button onClick={() => changeNameHandler(name)}>Change Name</button>
        
      </React.Fragment>
    );
  
}
