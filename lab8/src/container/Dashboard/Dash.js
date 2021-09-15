import React,{useState} from 'react';
import Student from '../../component/Student/Student';
import './dash.css';



const Dash = () => {
    const students = [
        { id: 101, name: "Aman", major: "CS" },
        { id: 102, name: "Alazar", major: "SA" },
        { id: 103, name: "Samuel", major: "MBA" }
    ]

    const[name,setFirstName]=useState(null);

    const changeFirstName = (evnt)=>{
        setFirstName(evnt.target.name);
        students[0].name=name;
    
    }

    const studentList = students.map(student => <Student id={student.id} name={student.name} major={student.major} />)
    return (
        <React.Fragment>
            <div>
                {studentList}
            </div>

            <input type="text" id="text" name="name"/><br/>

            <button className="button" onClick={changeFirstName}>Change Name</button>
        </React.Fragment>
    );

}
export default Dash;