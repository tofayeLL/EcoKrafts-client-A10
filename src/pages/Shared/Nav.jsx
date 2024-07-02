
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AUthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';


const Nav = () => {
    const { user, logOutUser } = useContext(AUthContext);
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : 'light');

    const links = <>
        <li className="font-medium text-base"><NavLink to={'/'}>Home</NavLink></li>
        <li className="font-medium text-base"><NavLink to={'/allCrafts'}>All Crafts</NavLink></li>
        <li className="font-medium text-base"><NavLink to={'/addCraft'}>Add Crafts</NavLink></li>
        <li className="font-medium text-base"><NavLink to={'/myCraft'}>My Added Crafts</NavLink></li>

    </>




    const handleLogout = () => {
        //logout user
        logOutUser()
            .then(() => {
                console.log('logout successfully');
                toast.success("Logout Successfully");
            }).catch((error) => {
                console.log(error.message);
                toast.error(error.message);

            });
    }

    // theme useEffects for store theme in local storage

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme);
    }, [theme])


    //   theme handler
    const handleTheme = (e) => {
        if (e.target.checked) {
            setTheme('synthwave');
        }
        else {
            setTheme('light')
        }
    }








    return (
        <div >



            <div className="navbar bg-base-100 shadow-lg py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-48">
                            {
                                links
                            }

                        </ul>
                    </div>
                    <a className="btn btn-ghost lg:text-4xl  text-lg font-bold gap-0 ">Eco<span className="text-purple-600 0">Krafts</span> </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-2 ">
                        {
                            links
                        }

                    </ul>
                </div>

                <div className="navbar-end space-x-3">



                    {/* <label className="cursor-pointer grid place-items-center ">
                        <input type="checkbox" onChange={handleTheme} value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
 */}


                    <label className="flex cursor-pointer gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <input type="checkbox" onChange={handleTheme} value="synthwave" className="toggle theme-controller" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>





                    {
                        user ?
                            <div className="flex  justify-center items-center gap-2 ">
                                {/* <h1>{user.email}</h1> */}

                                <div className="tooltip tooltip-bottom lg:w-14 w-12 rounded-full border-[2px] border-green-400 z-10 " /* data-tip={user?.displayName || 'Tofayel'} */  >



                                    <Tooltip id="my-tooltip" className="z-10">
                                        <span>{user?.displayName || 'Tofayel'}</span>
                                    </Tooltip>


                                    <img className="w-full rounded-full p-1" alt="user img" src={user?.photoURL || 'https://ibb.co/18JhpwY'} data-tooltip-id="my-tooltip" />

                                </div>

                                <button onClick={handleLogout} className="btn text-white hover:text-violet-500 font-semibold lg:text-base text-xs bg-violet-400 0">Logout</button>




                            </div>

                            :

                            <div className="lg:space-x-3 space-x-2">
                                <Link to={'/login'}><button className="btn text-white hover:text-violet-500 font-semibold lg:text-base text-xs bg-violet-400 0">Login</button></Link>
                               {/*  <Link to={'/register'} className="lg:inline md:inline hidden"><button className="btn  text-white hover:text-violet-500 font-semibold lg:text-base text-xs  bg-violet-400 0">Register</button></Link> */}
                            </div>

                    }






                </div>


            </div>

        </div>
    );
};

export default Nav;