import { Link } from "react-router-dom";
import logo from "../../../assets/docHouseIcons.jpeg"
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import { FaHouseMedicalFlag } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";
const NavBar = () => {

    const { user, logOut } = useContext(AuthContext)
     const [cart] =useCart();
    const hanldeLogOut = () => {
        logOut()
            .then(() => { })
            .then(error => console.log(error))
    }
    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about/Dr. John Smith">About</Link></li>
        <li><Link to="/appoinment">Appoinment</Link></li>
        <li><Link to="/secret">Secret</Link></li>
        <li><Link to='/dashboard/cart'>
            <button className="btn">
               <FaHouseMedicalFlag className="text-2xl"></FaHouseMedicalFlag>
                <div className="badge badge-secondary">+{cart.length}</div>
            </button>
        </Link></li>
        {
            user ?
                <>
                    <p>{user?.displayName}</p>
                    <button onClick={hanldeLogOut} className="btn btn-accent">Logout</button>
                </> :
                <>
                    <li><Link to="/login">Login</Link></li>
                </>
        }
    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 bg-orange-950 text-white max-w-screen-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-orange-600 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                            {navOptions}

                        </ul>
                    </div>
                    <div className="flex">
                        <div>
                            <img className="w-20 rounded-3xl h-20 mr-4" src={logo} alt="" />
                        </div>
                        <div>
                            <h1 className="font-bold text-2xl"><span className="text-orange-300">Doc</span> House</h1>
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;