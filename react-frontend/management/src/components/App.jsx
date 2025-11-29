import React, {useEffect, useState} from "react";
import {Route, Routes, Navigate} from "react-router-dom"
import axios from 'axios';

//general route
import Login from './login/Login.jsx'
import Dashboard from "./dashboard/Dashboard.jsx";
import { useLocation } from 'react-router-dom';
import Loader from "./Loader.jsx";
import NotFound from "./NotFound.jsx";


const PrivateRoute = ({ element, isAuthenticated, ...props }) => {
  // If the user is not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Otherwise, render the requested element (component)
  return element;
};

function App() {

  const location = useLocation();

  const checkAuthenticated = async () => {
    try{
      const res = await fetch("/api/verify", {
        method: "GET",
        headers: { Authorization: `Bearer ${localStorage.token}` }
      });
      const parseRes = await res.json();
      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
      if(parseRes === true){
       
        if(localStorage.role == 'admin'){
          setIsAdmin(true);
        }
        else{
          setIsAdmin(false);
        }        
      }
    }
    catch (err){
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  }

  const setAdminAuth = boolean => {
    setIsAdmin(boolean);
  }

  console.log(isAuthenticated)
  

  return (
    <div>
      <Routes>
        <Route path="/" element= {
          !isAuthenticated ? (

           <Navigate to="/login"/>

          ) : (
<Navigate to="/dashboard"/>
                   
          )
        } >
        </Route>
        <Route path="/login" element={
          !isAuthenticated ? (
            <Login setAuth={setAuth} isAuthenticated={isAuthenticated} setAdminAuth={setAdminAuth}/>
          ) : (
        <Navigate to="/dashboard"/>    
          )
          } ></Route>

        <Route path="/dashboard" element={
          isAuthenticated ? (
          <Dashboard orderType={"catering"} title={"Catering Manager"} setAuth={setAuth} isAuthenticated={isAuthenticated} isAdmin={isAdmin} setAdminAuth={setAdminAuth}/>
          ) : (
          <Navigate to="/"/>
          )
          } ></Route>

<Route path="*" element={
            <Navigate to="/404"/>
          }
          >
          </Route>

          <Route path="/404" element={
            <NotFound isAuthenticated={isAuthenticated}/>
          }
          >
          </Route>

      </Routes>
      
    </div>
  )

}

export default App;