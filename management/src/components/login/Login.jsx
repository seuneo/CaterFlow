import LoginForm from "./LoginForm";
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from "react";
import Loader from "../Loader.jsx";

function Login({setAuth, isAuthenticated, setAdminAuth}){

  if(isAuthenticated == true){
    return  <Loader/>
  }
    
    return <>
      <div className="login flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Trutella Foods"
            src="/trutella-logo.jpg"            
            className="login-logo mx-auto h-10 w-auto"
          />

          <div className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-800">
            Hello
          </div>
        </div>

        <LoginForm setAuth={setAuth} setAdminAuth={setAdminAuth}/>
      </div>
    </>
}

export default Login;