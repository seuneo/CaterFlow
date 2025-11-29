import LoginForm from "./LoginForm";
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from "react";
import Loader from "../Loader.jsx";

function Login({setAuth, isAuthenticated, setAdminAuth}){

  if(isAuthenticated == true){
    return  <Loader/>
  }
    
    return <div class="login">
        <div class="logo">
        <img id="trutella-logo" src="/trutella-logo.jpg" alt="trutella logo"/> 
        </div>
        <LoginForm setAuth={setAuth} setAdminAuth={setAdminAuth}/>     
      </div>      
}

export default Login;