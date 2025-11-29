
function LogoutButton({setAuth, setAdminAuth}){

     const logout = () => {
        localStorage.clear();
        setAuth(false);
        setAdminAuth(false);
    }


    return <div class="menu__item ">
<button onClick={logout} class="dashboard-menu-grid"><span class="material-symbols-outlined">
logout
</span>
<div>
    Log out
</div>
</button>

    </div>

}

export default LogoutButton