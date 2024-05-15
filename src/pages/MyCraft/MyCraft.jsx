import { useContext, useEffect, useState } from "react";
import { AUthContext } from "../../providers/AuthProvider";
import MyCraftCard from "./MyCraftCard";


const MyCraft = () => {
    const [myCrafts, setMyCrafts] = useState([]);
    const [filterCrafts, setFilterCrafts] = useState([]);

    const { user } = useContext(AUthContext);

    useEffect(() => {
        fetch(`https://eco-krafts-server.vercel.app/myCrafts/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyCrafts(data);
                setFilterCrafts(data);

            })
    }, [user])


    // filter craft data depends on customization
    const handleFilter = (filter) => {
        if(filter === 'yes'){
            const customizationYes = myCrafts.filter( craft => craft.customization === 'yes');
            setFilterCrafts(customizationYes);
        }
        else if(filter === 'no'){
            const customizationNo = myCrafts.filter(craft => craft.customization === 'no');
            setFilterCrafts(customizationNo);
        }
    }








    return (
        <div>


            <div className="mt-10">
                <details className="dropdown">
                    <summary className="m-1 btn bg-violet-300 text-lg text-gray-800">Customization</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-40">
                        <li onClick={() => handleFilter('yes')}><a>Yes</a></li>
                        <li onClick={() => handleFilter('no')}><a>No</a></li>
                        
                    </ul>
                </details>

            </div>






            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    filterCrafts.map(craft => <MyCraftCard
                        craft={craft}
                        setFilterCrafts={setFilterCrafts}
                        filterCrafts={filterCrafts}
                        key={craft._id}></MyCraftCard>)
                }
            </div>


        </div>
    );
};

export default MyCraft;