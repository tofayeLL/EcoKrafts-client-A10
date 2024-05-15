import { Link, useLoaderData } from "react-router-dom";


const AllCrafts = () => {

    const crafts = useLoaderData();





    return (
        <div className="">
            


            <div className="overflow-x-auto  border-[1px] border-[#e0e0e2] rounded-md">
                <table className="table ">

                    <thead>
                        <tr className="bg-base-200 text-lg font-semibold ">
                            <th>Craft Name</th>
                            <th>Price</th>
                            <th>Customization</th>
                            <th>Stock Status</th>
                            <th>Processing Time</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            crafts.map(craft =>
                                <tr key={craft._id} className="hover">
                                    <td>{craft.name}</td>
                                    <td>{craft.price}</td>
                                    <td>{craft.customization}</td>
                                    <td>{craft.stockStatus}</td>
                                    <td>{craft.processing}</td>
                                 

                                    <Link to={`/craft/${craft._id}`}>
                                        <td className="">
                                            <span className="lg:px-4 lg:py-2 font-semibold rounded-md bg-violet-400 text-gray-900 flex">
                                                <span>View Details</span>
                                            </span>
                                        </td>

                                    </Link>



                                </tr>

                            )
                        }

                    </tbody>
                </table>


            </div>


        </div>
    );
};

export default AllCrafts;