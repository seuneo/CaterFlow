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
                 console.log(user.username);
                  setAuth(true);
    
                  console.log("role" ,result.role);
    
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

    return <div class="formbg"> 
            
          <div class="form-header">
        Hello
        </div>   

        <form>
        
        <div>
            <label class="form-label">Username</label>
            <input value={user.username ?? ""} type="text" class="form-control" onChange={handleChange} name="username"/>
        </div>
        <div class="mb-3">
            <label class="form-label">Password</label>
            <input class="form-control" value={user.password ?? ""}  onChange={handleChange} name="password" type="password"/>
        </div>
                
        </form> 
        <div class="loginButton">
            <button class="btn" type="button" onClick={logIn} >Log in</button>
            <div class="login-error">{warningMessage && <span class="material-symbols-outlined">
                cancel
            </span>    
        }
        {warningMessage}
        </div>

        
        </div>

    </div>


}

export default LoginForm;