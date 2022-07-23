import FoodCard from "../components/foodcard"
import { useContext, useEffect } from "react";
import menuContext from "../context/menuContext";

const HomePage = () => {
    const items = useContext(menuContext);
    useEffect(() => {
        console.log(items);
    }, []);
    return(
        <div className="container-fluid">
            <div className="rajat-menu-wrapper">
                {items.map(item => 
                    <>
                        <h1 className="rajat-menu-category-heading"><span>{item.title}</span></h1>
                        {item.items.map(foodItem => <FoodCard key={foodItem.name} data={foodItem}/>)}
                    </>)}
            </div>
        </div>
    )
}

export default HomePage;