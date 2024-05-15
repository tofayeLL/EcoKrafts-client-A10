
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const UpdateCraft = () => {

    const craft = useLoaderData();
    const { _id, photo, name, price, rating, customization, stockStatus, description, subCategory, processing } = craft;


    const handleUpdateCraft = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const description = form.description.value;
        const customization = form.customization.value;
        const rating = form.rating.value;
        const processing = form.processing.value;
        const stockStatus = form.stockStatus.value;
        const subCategory = form.category.value;
        const photo = form.photo.value;
        const craft = { name, price, description, customization, processing, subCategory, rating, stockStatus, photo }
        console.log(craft);

        // update craft
        fetch(`https://eco-krafts-server.vercel.app/myCraft/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(craft)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Update Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }




    return (
        <div className="bg-violet-300 lg:p-14 md:p-14 p-6">


            <div className="max-w-3xl mx-auto  bg-white">


                <form onSubmit={handleUpdateCraft} className="card-body" >
                    <h1 className="text-4xl font-bold text-violet-500">Update Craft Info</h1>

                    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 ">



                        {/* left side form */}
                        <div>
                            {/* 1 */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Craft Name</span>
                                </label>
                                <input type="text" name="name" defaultValue={name} placeholder="Enter craft name" className="input input-bordered" required />
                            </div>
                            {/* 2 */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Short Description</span>
                                </label>
                                <input type="text" name="description" defaultValue={description} placeholder="Enter short description" className="input input-bordered" required />
                            </div>
                            {/* 3 */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Craft Rating</span>
                                </label>
                                <input type="text" defaultValue={rating} name="rating" placeholder="Enter craft rating" className="input input-bordered" required />
                            </div>
                            {/* 4*/}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Stock Status</span>
                                </label>
                                <input type="text" defaultValue={stockStatus} name="stockStatus" placeholder="Enter craft stockStatus" className="input input-bordered" required />
                            </div>



                        </div>




                        {/* right side  */}
                        <div>


                            {/* 1 */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Craft Price</span>
                                </label>
                                <input type="text" defaultValue={price} name="price" placeholder="Enter craft price" className="input input-bordered" required />
                            </div>
                            {/* 2*/}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Customization</span>
                                </label>
                                <input type="text" defaultValue={customization} name="customization" placeholder="Choose Customization" className="input input-bordered" required />
                            </div>
                            {/* 3*/}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Processing Time</span>
                                </label>
                                <input type="text" defaultValue={processing} name="processing" placeholder="Enter craft processing" className="input input-bordered" required />
                            </div>



                            {/* 4 */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Sub Category</span>
                                </label>
                                <input type="text" defaultValue={subCategory} name="category" placeholder="Enter subCategory name" className="input input-bordered" required />





                            </div>


                        </div>


                    </div>



                    {/* photo url */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Craft Photo</span>
                        </label>
                        <input type="text" defaultValue={photo} name="photo" placeholder="Enter craft photo URL" className="input input-bordered" required />
                    </div>



                    <div className="form-control mt-6">
                        <input type="submit" value="Update Craft" className="btn hover:text-violet-500 bg-violet-400 outline-none text-lg text-white font-semibold" />


                    </div>







                </form>



            </div >





        </div >
    );
};

export default UpdateCraft;