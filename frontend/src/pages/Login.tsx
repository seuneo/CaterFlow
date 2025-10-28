import { LoginForm } from "@/components/login-form";
import { useNavigate } from 'react-router-dom';

export function Login(){

    const navigate = useNavigate();

    function handleLogin(){
        navigate("/dashboard");
    }
  
    return <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
    <div className="w-full max-w-sm">
      <LoginForm onSubmit={handleLogin}/>
    </div>
  </div>
}