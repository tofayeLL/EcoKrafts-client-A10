import PropTypes from 'prop-types';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCraftCard = ({ craft, filterCrafts, setFilterCrafts }) => {
    const { _id, photo, name, price, rating, customization, stockStatus } = craft;


    const handleDelete = (_id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })


            .then((result) => {
                if (result.isConfirmed) {

                    fetch(`https://eco-krafts-server.vercel.app/myCrafts/${_id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your craft has been deleted.",
                                    icon: "success"
                                });

                                // delete from layout
                                const remainingCraft = filterCrafts.filter(kraft => kraft._id !== _id);
                                setFilterCrafts(remainingCraft);

                            }
                        })



                }
            });




    }




    return (
        <div>

            {/* card 1 */}
            <div className="rounded-md shadow-sm my-6 border-[1px] border-[#e0e0e2] " data-aos="fade-down">

                <div className="" >
                    <img src={photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                </div>

                <div className="flex flex-col justify-between p-6 space-y-8  " >
                    <div className="space-y-3 " >

                        <h2 className="text-xl font-semibold tracking-wide text-violet-800 ">{name}</h2>

                        <p className=" "><span className='font-semibold'>Customization:</span>  {customization}</p>
                        <p className=" "><span className='font-semibold'>Stock:</span>  {stockStatus}</p>

                        <div className='flex justify-between items-center'>
                            <p className="text-xl text-red-400 font-semibold">{price}</p>
                            <p className="text-lg font-semibold flex justify-center items-center gap-3">{rating} <span><FaRegStar></FaRegStar></span></p>
                        </div>




                    </div>
                    <div className='flex  gap-4 items-center'>
                        <div className='flex-1'>
                            <Link to={`/myCraft/${_id}`}> <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400  text-white">Update</button></Link>
                        </div>
                        <div className='flex-1'>
                            <button onClick={() => handleDelete(_id)} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400  text-white">Delete</button>
                        </div>

                    </div>
                </div>

            </div>






        </div>
    );
};

export default MyCraftCard;
MyCraftCard.propTypes = {
    craft: PropTypes.object
}