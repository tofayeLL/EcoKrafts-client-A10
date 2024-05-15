import { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AUthContext } from "../../providers/AuthProvider";
import { FiEye, FiEyeOff } from "react-icons/fi";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const { signInUser, googleLogin, githubLogin } = useContext(AUthContext);
    const location = useLocation();
    const navigate = useNavigate();



    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        //sign in user
        signInUser(email, password)
            .then((result) => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/');
                e.target.reset();
                toast.success("Login Successfully");
            })
            .catch((error) => {
                console.log(error.message);
                toast.error(error.message.replace('auth/', 'userEmail or password-').replace('-credential', ''));
            })


    }


    // Google Login
    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/');
                toast.success("Login Successfully");
            })
            .catch((error) => {
                console.log(error.message);
            })
    }


    // Git hub Login
    const handleGitLogin = () => {
        githubLogin()
            .then((result) => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/');
                toast.success("Login Successfully");

            })
            .catch((error) => {
                console.log(error.message);
            })

    }




    return (
        <div>

            <div className="flex flex-col  justify-center items-center bg-violet-300 py-4">


                <div className="flex flex-col justify-center  lg:w-[100vh] w-[80%]  mx-auto space-y-4 my-6 bg-white shadow-xl lg:px-0 px-5  lg:py-12 py-6 rounded-md" >



                    <div className=" mx-auto text-purple-500">
                        <h1 className="lg:text-4xl text-xl font-bold mb-6 ">Login to your account</h1>
                    </div>


                    <form onSubmit={handleLogin} className="lg:w-[70%] w-full mx-auto space-y-5 rounded-lg " >

                        <div>
                            <p className="mb-1 font-medium">User Email</p>
                            <input type="email" name="email" placeholder="Email address" className="input input-bordered w-full" required />
                        </div>

                        <div >
                            <p className="mb-1 font-medium"> Password</p>

                            <div className="relative">
                                <input type={showPass ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered w-full" required />

                                <span onClick={() => setShowPass(!showPass)} className="absolute top-3 right-3">{showPass ? <FiEyeOff className="text-xl" ></FiEyeOff> : <FiEye className="text-xl"></FiEye>}</span>

                            </div>
                        </div>


                        <div>
                            <button className="btn text-white text-lg w-full bg-purple-500" type="submit">Login</button>
                        </div>

                        <div className="flex flex-col w-full border-opacity-50 ">

                            <div className="divider">Login with social accounts</div>

                        </div>


                    </form>



                    <div className="lg:w-[70%] w-full mx-auto" >
                        <Link><button onClick={handleGoogleLogin} className="btn w-full bg-purple-500 text-white"><FaGoogle className="text-2xl" ></FaGoogle> <span className="text-lg">Login with Google</span></button></Link>
                    </div>

                    <div className="lg:w-[70%] w-full mx-auto">
                        <Link><button onClick={handleGitLogin} className="btn w-full bg-purple-500 text-white"><FaGithub className="text-2xl"></FaGithub><span className="text-lg">Login with Github</span></button></Link>
                    </div>


                    <div className="text-center " >
                        <p className="font-medium mt-6 lg:text-base text-sm mr-2">Do not have an account ?  Please <Link to={'/register'} className="btn-active text-purple-600 btn-link">Register</Link></p>
                    </div>


                </div>
            </div>






        </div>
    );
};

export default Login;