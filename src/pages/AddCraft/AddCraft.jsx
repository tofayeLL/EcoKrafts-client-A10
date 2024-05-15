import { useContext, useState } from "react";
import { AUthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const AddCraft = () => {
    const [category, setCategory] = useState("");

    const { user } = useContext(AUthContext);



    const handleCategory = (e) => {
        setCategory(e.target.value);
    }

    const handleAddCraft = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const description = form.description.value;
        const customization = form.customization.value;
        const rating = form.rating.value;
        const processing = form.processing.value;
        const stockStatus = form.stockStatus.value;
        const subCategory = category;
        const photo = form.photo.value;
        const username = user.displayName;
        const email = user.email
        const craft = { name, price, description, customization, processing, subCategory, rating, stockStatus, photo, username, email }
        console.log(craft);

        // post
        fetch('https://eco-krafts-server.vercel.app/crafts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(craft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'added craft successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();

                }
            })



    }
    return (
        <div className="bg-violet-300 lg:p-14 md:p-14 p-6">


            <div className="max-w-3xl mx-auto  bg-white">


                <form onSubmit={handleAddCraft} className="card-body" >
                    <h1 className="text-4xl font-bold text-violet-500">Add New Craft</h1>

                    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 ">



                        {/* left side form */}
                        <div>
                            {/* 1 */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Craft Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter craft name" className="input input-bordered" required />
                            </div>
                            {/* 2 */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Short Description</span>
                                </label>
                                <input type="text" name="description" placeholder="Enter short description" className="input input-bordered" required />
                            </div>
                            {/* 3 */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Craft Rating</span>
                                </label>
                                <input type="text" name="rating" placeholder="Enter craft rating" className="input input-bordered" required />
                            </div>
                            {/* 4*/}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Stock Status</span>
                                </label>
                                <input type="text" name="stockStatus" placeholder="Enter craft stockStatus" className="input input-bordered" required />
                            </div>



                        </div>




                        {/* right side  */}
                        <div>


                            {/* 1 */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Craft Price</span>
                                </label>
                                <input type="text" name="price" placeholder="Enter craft price" className="input input-bordered" required />
                            </div>
                            {/* 2*/}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Customization</span>
                                </label>
                                <input type="text" name="customization" placeholder="Choose Customization" className="input input-bordered" required />
                            </div>
                            {/* 3*/}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Processing Time</span>
                                </label>
                                <input type="text" name="processing" placeholder="Enter craft processing" className="input input-bordered" required />
                            </div>



                            {/* 4 */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Sub Category</span>
                                </label>

                                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  input-bordered"
                                    onChange={handleCategory} value={category}>
                                    <option >Choose a category</option>
                                    <option value="Wooden Furniture & Sculptures">Wooden Furniture & Sculptures</option>
                                    <option value="Wooden Home Decor">Wooden Home Decor</option>
                                    <option value="Wooden Utensils & Kitchenware">Wooden Utensils & Kitchenware</option>
                                    <option value="Jute Home Decor">Jute Home Decor</option>
                                    <option value="Jute Kitchenware & Utensils">Jute Kitchenware & Utensils</option>
                                    <option value="Jute & Wooden Jewellery">Jute & Wooden Jewellery</option>

                                </select>



                            </div>


                        </div>


                    </div>



                    {/* photo url */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Craft Photo</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter craft photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">User Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName || 'Tofayel'} placeholder="Enter user name " className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">User Email</span>
                        </label>
                        <input type="text" defaultValue={user?.email || 'toafyel@gmail.com'} placeholder="Enter user email " className="input input-bordered" required />
                    </div>


                    <div className="form-control mt-6">
                        <input type="submit" value="Add Craft" className="btn hover:text-violet-500 bg-violet-400 outline-none text-lg text-white font-semibold" />


                    </div>







                </form>



            </div >





        </div >
    );
};

export default AddCraft;