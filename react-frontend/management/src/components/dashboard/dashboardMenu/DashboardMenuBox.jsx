import LogoutButton from "./LogoutButton"

function DashboardMenuBox({title, setAuth, setAdminAuth}){

    return <div class="menu__box">
    <div class="dashboard-menu-box-header">
        <div class="dashboard-menu-box-logo">
        <img id="trutella-logo" src="/trutella-logo.jpg" alt="trutella logo"/> 
        </div>
        <div>
            TRUTELLA FOODS
        </div>
    </div>

    <div class="dashboard-menu-box-user dashboard-menu-grid">
    
<span class="material-symbols-outlined">
person
</span>
        <div class="dashboard-name">
        Hello, {localStorage.username}
        </div>
    </div>
    
        
    
    <div>
        <LogoutButton setAuth={setAuth} setAdminAuth={setAdminAuth} />
        

    </div>
        
    

    </div>

}

export default DashboardMenuBox