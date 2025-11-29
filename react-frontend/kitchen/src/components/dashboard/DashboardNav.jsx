import { useState } from "react";
function DashboardNav({setAuth, setAdminAuth}){

    const logout = () => {
        localStorage.clear();
        setAuth(false);
        setAdminAuth(false);
    }

    const [showLogout, setLogout] = useState(false);
    const toggleLogout = () => {
        setLogout(!showLogout);

    }

   return <div class="dashboardNav">
   <button onClick={toggleLogout}><span class="material-symbols-outlined">
        more_horiz
        </span></button>
        { showLogout && <div><button onClick={logout}><span class="material-symbols-outlined">
logout
</span></button></div>}
    </div>


}

export default DashboardNav;