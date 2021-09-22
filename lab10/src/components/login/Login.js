import React, {useState} from 'react'
import { Route } from 'react-router-dom';
import './Login.css'

function Login(props) {

    const [user, setUser] = useState({username:"test",password:"test"});

    const [confirmation, setConfirmation] = useState("");

    function authenticateUser(event){
        //assume the following object is fetched from DB.
        const credential = {
            username:"test",
            password:"test"
        }

        console.log("Username="+user.username+" | Password ="+user.password);

        event.preventDefault();

        if(user.username === credential.username && user.password === credential.password){
            
            const nav = document.getElementById("navContainer");
            nav.removeChild(nav.lastChild);

            var section1 = document.createElement("section");
            var section2 = document.createElement("section");          
           
            section1.innerHTML = `<Link to = "/profile" style = {navStyle}> Profile </Link>`;
            section2.innerHTML = `<Link to = "/welcome" style = {navStyle}> Welcome ${user.username}! </Link>`;

            nav.appendChild(section1);
            nav.appendChild(section2);

            props.history.push('/posts'); 
        }
        else{
            setConfirmation("Invalid username and password");
        }
    }

    return (
        <div className="login">
        <h3>Login User</h3>  
        <label className="confirmation">{confirmation}</label>      
        <form onSubmit = {authenticateUser} id = "loginForm">
            <div className = "loginInput">
                <label id = "usernameLabel" htmlFor = "username">User Name</label>
                <input type="text" id= "username" name = "username" 
                    onChange = {e => setUser({...user, username : e.target.value})} 
                    value = {user.username}/>
           
                <label id = "passwordLabel"htmlFor = "password">Password</label>
                <input type="password" id = "password" name = "password" 
                    onChange = {e => setUser({...user, password : e.target.value})}
                    value = {user.password}/>
               
                <input id = "submitBtn" type = "submit" value = "Login"/>   
                             
           </div> 
           
        </form>
    </div>
    )
}

export default Login
