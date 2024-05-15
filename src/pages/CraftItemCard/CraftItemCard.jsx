import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa";

const CraftItemCard = ({ craft }) => {
    const { _id, name, photo, price, rating, description } = craft;

    return (
        <div id='craftItem'>


            {/* card 1 */}
            <div className="rounded-md shadow-sm my-6 border-[1px] border-[#e0e0e2]">

                <div className="" >
                    <img src={photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                </div>

                <div className="flex flex-col justify-between p-6 space-y-8" >
                    <div className="space-y-4" >

                        <h2 className="text-xl font-semibold tracking-wide text-violet-800 ">{name}</h2>
                        <p>{description}</p>
                       <div className='flex justify-between items-center'>
                       <p className="text-xl text-red-400 font-semibold">{price}</p>
                       <p className="text-lg font-semibold flex justify-center items-center gap-3">{rating} <span><FaRegStar></FaRegStar></span></p>
                       </div>
                        
                    </div>
                    <Link to={`/crafts/${_id}`}> <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400  text-white">View Details</button></Link>
                </div>

            </div>

        </div>
    );
};

export default CraftItemCard;
CraftItemCard.propTypes = {
    craft: PropTypes.object
}