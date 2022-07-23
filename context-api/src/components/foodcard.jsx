const FoodCard = ({data}) => {
    return(
        <div className="card">
            <img src="assets/images/food/pizza.jpg" className="card-img-top" alt="Food Menu Item" />
            <div className="card-body">
                <div className="rajat-food-card-text">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text text-muted">{data.desc.substring(0,84)}...</p>
                </div>
                <a href="#" className="btn rajat-food-order-btn">Add to Cart <i
                        className="fa-solid fa-cart-shopping"></i></a>
            </div>
        </div>
    )
}

export default FoodCard