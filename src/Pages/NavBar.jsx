import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../ContexApi/AuthProvider";


const NavBar = () => {
  const {user, LogOut} = useContext(AuthContext)

    const linkNav = <>
    <li><NavLink className="mr-4" to='/' >Home</NavLink></li>
    <li><NavLink className="mr-4" to='/Service' >Event List</NavLink></li>
    {
      user && <li><NavLink className="mr-4" to='/uoComingEvent' >Up coming event</NavLink></li>
    }
    <li><NavLink className="mr-4" to='/about' >About Us</NavLink></li>
    <li><NavLink className="mr-4" to='/blog' >Blog</NavLink></li>
    {
      user &&  <li><NavLink className="mr-4" to='/contact' >Contact us</NavLink></li>
    }
    
   
   
    
    
    </>


    return (
        <div className="navbar bg-blue-100 px-8 py-4">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
            linkNav
        }
      </ul>
    </div>
    <Link to='/'><a className="font-extrabold text-4xl text-blue-700">EvenTo</a></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        linkNav
      }
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <div className="flex gap-4 items-center">
        <p>{user?.displayName}</p> <img className="rounded-full w-10" src={user?.photoURL} alt="img" />
        <button onClick={() => LogOut()} className="btn bg-blue-600 hover:bg-blue-700 text-white" >LogOut</button>
      </div> : <Link to='/login' ><a className="btn bg-blue-600 hover:bg-blue-700 text-white">Login</a></Link>
    }
    
  </div>
</div>
    );
};

export default NavBar;