import { useEffect, useState } from "react";
import CraftItemCard from "../CraftItemCard/CraftItemCard";
import { Typewriter } from 'react-simple-typewriter';


const CraftItem = () => {

    const [crafts, setCrafts] = useState([]);


    useEffect(() => {
        fetch('https://eco-krafts-server.vercel.app/crafts')
            .then(res => res.json())
            .then(data => {

                setCrafts(data.slice(0, 6));
            })
    }, [])

    // console.log(crafts);


    return (
        <div>

            <div className="space-y-4 lg:my-2 flex flex-col justify-center items-center">
                

                <h1 className="lg:text-5xl text-2xl font-bold " >


                    <Typewriter
                        words={['Featured Craft Collections']}
                        loop={5}
                        cursor
                        cursorStyle=''
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}

                    />

                </h1>
                <p className="lg:w-[54%] lg:text-lg md:text-lg text-sm text-center ">Explore our curated craft collections, showcasing innovative designs crafted with eco-conscious materials, perfect for those seeking both style and sustainability</p>
            </div>







            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-7 gap-6">
                {
                    crafts.map(craft => <CraftItemCard
                        craft={craft}
                        key={craft._id}></CraftItemCard>)
                }
            </div>


        </div>
    );
};

export default CraftItem;