import React, {useState} from "react";

function LoginForm({setAuth, setAdminAuth}){

    const [user, setUser] = useState({
            username: "",
            password: ""
        });

    const [warningMessage, setWarningMessage] = useState('');
    
        const logIn = async(e) => {
          e.preventDefault();
          try{
              const response = await fetch("/api/auth/login/", {
                  method:"POST",
                  headers: {"Content-Type": "application/json"},
                  body: JSON.stringify(user)
                });
                const result = await response.json();
                 
                if(result.token){
                  localStorage.setItem('token', result.token);
                  localStorage.setItem('role', result.role);
                  localStorage.setItem('username', user.username);
                 
                  setAuth(true);
    
                  if(result.role == 'admin'){
                    setAdminAuth(true);
                  }
                  setUser({
                    username: "",
                    password: ""
                  })

                }
                else{
                  setAuth(false);
                }
                
                if(result.message){
                  setWarningMessage("Username and/or password incorrect");  
                }
          } catch (error){
              console.error(error.message);        
          }       
        }
    
        function handleChange (event){
            setWarningMessage("");
          const {value, name} = event.target;
          setUser(prevValue => {
            if(name === "username"){
              return {
                username: value,
                password: prevValue.password
              }             
            }
            else if(name === "password"){
              return {
                username: prevValue.username,
                password: value
              }             
            }  
          });
        }

    return  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form  className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input 
                type="text"                               
                  required
                  
                  value={user.username ?? ""} onChange={handleChange} name="username"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-lime-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-800">
                  Password
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={user.password ?? ""}  onChange={handleChange}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-lime-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button onClick={logIn}
                
                className="flex w-full justify-center rounded-md bg-lime-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-lime-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className=" login-error mt-10 text-center text-sm/6 text-red-700">
            {warningMessage && <span className="material-symbols-outlined">
                cancel
            </span>    
        }
        {warningMessage}
          </p>

         
        </div>


}

export default LoginForm;