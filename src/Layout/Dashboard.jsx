import { NavLink, Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";


const Dashboard = () => {
    return (
        <div className="flex ">
              <NavBar></NavBar>
        <div className="w-64 min-h-screen bg-slate-400 mt-36 ">
            <ul className="menu p-4">
              <li><NavLink to ='/dashboard/user'>All User</NavLink></li>
              <li><NavLink to ='/dashboard/addadoctor'>Add a Doctor</NavLink></li>
              <li><NavLink to ='/dashboard/cart'>My cart</NavLink></li>
              <li><NavLink to ='/dashboard/managedoctors'>Manage Doctors</NavLink></li>
            </ul>

        </div>
        <div className="flex-1 mt-36 p-5">
          
           <Outlet></Outlet>
        </div>
            
        </div>
    );
};

export default Dashboard;