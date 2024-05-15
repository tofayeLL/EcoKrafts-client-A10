import { FaRegStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const CraftItemDetails = () => {
    const craft = useLoaderData();
    const { name, price, description, customization, processing, subCategory, rating, stockStatus, photo } = craft;

    return (
        <div>
            <section className=" text-gray-100">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">

                    <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-violet-400 rounded-md">


                        <div className="w-full  rounded h-full lg:col-span-7 bg-gray-500" >
                            <img src={photo} alt="" className="h-full object-cover object-center rounded-sm" />
                        </div>


                        <div className="p-6 space-y-2 lg:col-span-5">

                        
                            <div className="space-y-4 divide-y divide-black">

                                <div>
                                    <span className="font-semibold">CraftName</span>
                                    <h3 className="text-2xl font-semibold sm:text-4xl">{name}</h3>
                                </div>

                                <div className="pt-2">
                                    <span className="font-semibold">Category Name</span>
                                    <h3 className="text-xl font-semibold">{subCategory}</h3>
                                </div>

                                <div className="space-y-2 pt-3">


                                    <p className="text-lg  font-semibold">Price: {price}</p>
                                    <p className="text-lg font-semibold ">Customization: {customization} </p>



                                    <p className="text-lg font-semibold">Stock: {stockStatus}</p>
                                    <p className="text-lg font-semibold ">Processing: {processing} </p>


                                </div>





                                <p className="text-lg pt-3 font-semibold flex justify-start items-center gap-3">Rating: {rating} <span><FaRegStar></FaRegStar></span></p>

                                <div className="py-4">
                                    <p className="font-semibold">OverView</p>
                                    <p>{description}</p>

                                </div>


                            </div>


                        </div>

                    </div>


                </div>
            </section>

        </div>
    );
};

export default CraftItemDetails;