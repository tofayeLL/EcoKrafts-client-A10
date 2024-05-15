import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const CategoryDetailCard = ({ craft }) => {
    const { _id, photo, name, subCategory, description, price, rating, processing } = craft;
    return (
        <div>
            {/* card 1 */}
            <div className="rounded-md text-gray-100 shadow-sm my-6 bg-violet-400 border-[1px] border-[#e0e0e2]">

                <div className="" >
                    <img src={photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                </div>

                <div className="flex flex-col justify-between p-6 space-y-8" >
                    <div className="space-y-3 text-base-200" >

                        <div className="border-b-[1px] pb-3 space-y-1">
                        <h2 className="lg:text-2xl  text-xl font-semibold tracking-wide ">{name}</h2>
                        <p>{description}</p>
                        </div>

                        <div className="my-2">
                            <p>Category Name</p>
                            <h2 className="text-lg font-semibold tracking-wide">{subCategory}</h2>
                        </div>

                        <div className="space-y-2">
                           
                            <p className="text-lg  font-semibold">Price: {price}</p>
                            <div className='flex justify-between items-center'>
                                <p className="text-lg font-semibold">Processing: {processing}</p>
                                <p className="text-lg font-semibold flex items-center gap-2">{rating} <span><FaRegStar></FaRegStar></span></p>
                            </div>
                        </div>

                    </div>
                    <Link to={`/crafts/${_id}`} className=""> <button type="button" className="flex items-center justify-center w-full p-3 bg-base-200 font-semibold tracking-wide  rounded-md text-violet-500  ">View Details</button></Link>
                </div>

            </div>

        </div>
    );
};

export default CategoryDetailCard;