
import React, { useState} from "react";
import "../styles/signup.css";
import axios from "axios";
let login=false;
let username="";
export default function Login() {
    const [userData, setUserData] = useState({
      email: "",
      PassWord: "",
    });
    let handleInput = (val) => {
      const key = val.target.name;
      const value = val.target.value;
      setUserData({ ...userData, [key]: value });
    };
    let handleClick = () => {
      let email=userData.email;
      let pass=userData.PassWord;
      axios.get(`http://localhost:3006/users?email=${email}&PassWord=${pass}`)
      .then(function (response){
          let para=response.data;
          if(para.length===1){
            login=true;
            username=para[0].name;
            alert("Login Successful");
            
             window.location.href="/";
          }
          else if(para.length===0){
            alert("Register User First");
            window.location.href="/signup";
          }
          else if(para.length>1){
            alert("Worng Email or Password");
          }
      })
      .catch(function(error){
          console.log(error);
      });
  }
    return (
      <div className="signupform">
        <input
          name="email"
          onChange={handleInput}
          value={userData.email}
          type="text"
          placeholder="Enter Email"
        ></input>
        <input
          name="PassWord"
          onChange={handleInput}
          value={userData.PassWord}
          type="password"
          placeholder="Enter Password"
        ></input>
        <button onClick={handleClick}>Login</button>
      </div>
  )
}
