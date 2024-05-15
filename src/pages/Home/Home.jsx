import Categories from "../Categories/Categories";
import Banner from "./Banner";
import CraftItem from "./CraftItem";
import CustomersSay from "./CustomersSay";
import OurGallery from "./OurGallery";


const Home = () => {
    return (
        <div >
            <div className="">
                <Banner></Banner>
            </div>

            <div className="lg:my-20 my-10 lg:px-4">
                <CraftItem></CraftItem>
            </div>

            <div className="lg:my-20 my-12 lg:px-4">
                <Categories></Categories>
            </div>
            <div className="lg:my-20 my-12 lg:px-4">
                <OurGallery></OurGallery>

            </div>
            <div className="lg:my-20 my-12 lg:px-4">
                <CustomersSay></CustomersSay>

            </div>
        
            
        </div>
    );
};

export default Home;