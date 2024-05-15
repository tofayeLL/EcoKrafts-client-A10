
import { useLoaderData } from "react-router-dom";
import CategoryDetailCard from "./CategoryDetailCard";


const CategoriesDetails = () => {
    const crafts = useLoaderData();


    return (
        <div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    crafts.map(craft => <CategoryDetailCard
                        craft={craft}
                        key={craft._id}></CategoryDetailCard>)
                }
            </div>






        </div>
    );
};

export default CategoriesDetails;