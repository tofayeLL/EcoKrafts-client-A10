import { Outlet, useNavigation } from "react-router-dom";
import Nav from "../pages/Shared/Nav";
import { RotatingLines } from "react-loader-spinner";
import Footer from "../pages/Shared/Footer";


const Root = () => {
    const navigation = useNavigation();
    return (
        <div>



            <div className=" lg:px-0 md:px-2 px-2">
                {/* this is nav */}
                <div className="sticky top-0 z-50 ">
                    <Nav></Nav>
                </div>

                {/* this is outlet */}

                <div className="">
                    {
                        navigation.state === "loading" ?

                            <div className="flex flex-col justify-center items-center">
                                <RotatingLines
                                    visible={true}
                                    height="100"
                                    width="200"
                                    color="grey"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    ariaLabel="rotating-lines-loading"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                />

                            </div>

                            :
                            <Outlet></Outlet>
                    }
                </div>

            </div>

            {/* this is footer */}

            <div className="mt-20">
                <Footer></Footer>
            </div>


        </div>
    );
};

export default Root;