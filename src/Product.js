import React from "react";
import "./Product.css";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useStateValue } from "./StateProvider";



function Product({ id, title, image, price, rating }) {
    const [{}, dispatch] = useStateValue();

    const addToBasket = () => {
     // Add item to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                item: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    };

    return (
        <div className="product">
            <div className="product_info">
                
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {
                        Array(rating)
                            .fill()
                            .map(() => (
                                <p><StarRateIcon className="product_starRateIcon" /></p>
                            ))}
                </div>
             </div>           
            <img src={image} />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
       );

}

export default Product; 