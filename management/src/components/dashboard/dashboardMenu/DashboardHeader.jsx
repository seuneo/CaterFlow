import DashboardMenuBox from "./DashboardMenuBox";

function DashboardHeader({title, addButton, setAddButton, setAuth, setAdminAuth}){

function toggleButton(){
  setAddButton(!addButton)
}
return     <div class="dashboard-nav-header">

<div class="dashboard-nav-title">
        <div class="dashboard-logo">
        <img id="trutella-logo" src="/trutella-logo.jpg" alt="trutella logo"/> 
        </div>
        <div>
          {title}
        </div>

</div>

            <div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" onClick={toggleButton}/>
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>
  <DashboardMenuBox setAdminAuth={setAdminAuth} setAuth={setAuth} title={title}/>
  </div>


  
          
        </div>

    
}

export default DashboardHeader;

