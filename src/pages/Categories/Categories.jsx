import { useEffect, useState } from "react";
import CategoriesCard from "./CategoriesCard";
import { Typewriter } from 'react-simple-typewriter';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://eco-krafts-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            })
    }, [])


    return (
        <div>

            <div className="space-y-4 my-6 flex flex-col justify-center items-center">
               
                <h1 className="lg:text-5xl  text-2xl font-bold " >


                    <Typewriter
                        words={['Our Categories']}
                        loop={5}
                        cursor
                        cursorStyle=''
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}

                    />

                </h1>


                <p className="lg:w-[60%] lg:text-lg md:text-lg text-sm text-center">Discover our carefully curated categories, where eco-conscious crafting meets boundless imagination. Unleash your creativity sustainably with our diverse selection of handmade wonders</p>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-6 rounded-lg shadow-sm">
                {
                    categories.map(category => <CategoriesCard
                        category={category}
                        key={category._id}>

                    </CategoriesCard>)
                }
            </div>



        </div>
    );
};

export default Categories;