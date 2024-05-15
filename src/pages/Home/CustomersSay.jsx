import client1 from "../../assets/images/team2.jpg";
import client2 from "../../assets/images/team4.jpg";
import client3 from "../../assets/images/team5.jpg";
import client4 from "../../assets/images/team6.jpg";


const CustomersSay = () => {
    return (
        <div>

            <section className="my-8 border-[1px] border-[#e0e0e2] rounded-md bg-violet-200 ">

                <div className="container lg:ml-20  flex flex-col lg:justify-center md:justify-center lg:items-center md:items-center mx-auto mb-8 mt-6 md:p-6 md:px-12">
                    <h1 className="p-4 lg:text-5xl md:text-2xl text-xl font-bold leading-none text-black text-center">What Our Customers Say About us</h1>
                </div>



                <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10 ">
                    {/* client 1 */}
                    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">

                        <div className="px-4 py-20 rounded-t-lg sm:px-8 md:px-12 bg-base-200">
                            <p className="relative px-7 py-1 text-lg italic text-center ">
                               
                            EcoKrafts website made finding sustainable products a  breeze! Love  the user-friendly interface
                            </p>
                        </div>


                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-violet-400 text-gray-900">
                            <img src={client3} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  bg-gray-700  object-cover object-center " />
                            <p className="text-xl font-semibold leading-tight">Environmental Activist</p>
                            <p className="text-sm uppercase">Sarah Green</p>
                        </div>

                    </div>

                    {/* client 2*/}
                    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">

                        <div className="px-4 py-20 rounded-t-lg sm:px-8 md:px-12 bg-base-200">
                            <p className="relative px-7 py-1 text-lg italic text-center ">
                               
                            Impressed with EcoKrafts website design; it reflects their commitment to eco-friendly living seamlessly
                               
                            </p>
                        </div>


                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-violet-400 text-gray-900">
                            <img src={client2} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  bg-gray-700  object-cover object-center " />
                            <p className="text-xl font-semibold leading-tight">Graphic Designer</p>
                            <p className="text-sm uppercase">Alex Chen</p>
                        </div>

                    </div>
                    {/* client 3 */}
                    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">

                        <div className="px-4 py-20 rounded-t-lg sm:px-8 md:px-12 bg-base-200">
                            <p className="relative px-7 py-1 text-lg italic text-center ">
                               
                            EcoKrafts website is not just a marketplace but a platform for eco-conscious living. A great experience overall!
                               
                            </p>
                        </div>


                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-violet-400 text-gray-900">
                            <img src={client1} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  bg-gray-700   object-cover object-center " />
                            <p className="text-xl font-semibold leading-tight">Sustainability Consultant</p>
                            <p className="text-sm uppercase">David Johnson</p>
                        </div>

                    </div>
                    {/* client 4 */}
                    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">

                        <div className="px-4 py-20 rounded-t-lg sm:px-8 md:px-12 bg-base-200">
                            <p className="relative px-7 py-1 text-lg italic text-center ">
                               
                            Navigating EcoKrafts website was intuitive, and their range of sustainable products is impressive
                            </p>
                        </div>


                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-violet-400 text-gray-900">
                            <img src={client4} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full object-cover object-center  bg-gray-700" />
                            <p className="text-xl font-semibold leading-tight">Nature Photographer</p>
                            <p className="text-sm uppercase">Emily Patel</p>
                        </div>

                    </div>






                    

                </div>
            </section>

        </div>
    );
};

export default CustomersSay;