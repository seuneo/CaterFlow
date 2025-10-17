import { useNavigate } from "react-router-dom";
//fix 404 to go back to dashboard if user not logged in
function NotFound({isAuthenticated}){

    const navigate = useNavigate();

    function backToLogin(){
        
        navigate("/login");
    }

    function backToLaunchPad(){
        navigate("/launchpad");
    }



    if(isAuthenticated == true){
        return <div class="page404">
        <div id="error404">404</div>
        <div id="page-not-found">PAGE NOT FOUND</div>
        <div><button onClick={backToLaunchPad}>Back to home</button></div>
    </div>

    }



    return <div class="page404">
        <div id="error404">404</div>
        <div id="page-not-found">PAGE NOT FOUND</div>
        <div><button onClick={backToLogin}>Back to home</button></div>
    </div>

}

export default NotFound;