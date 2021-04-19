import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";




function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
            <img className="checkout_ad" src="https://ss-times.com/wp-content/uploads/2019/05/banner-ad-fail-11.jpg"/>  
            {basket?.length === 0 ? (
                <div>
                    <h2>Your shopping basket is empty</h2>
                    <p>You have no items in your shopping basket. To buy, click 'Add to backet' button below the desired item.</p>
                </div>
            ):(
            <div>
                <h2 className="checkout_title">Your shopping basket</h2>
                        {/*List checkout products */}
                        {basket?.map((item) => (

                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            )
                        )}
                        
             </div>
            
                    )} 
            </div>
                {basket.length > 0 && (
                <div className="checkout_right">   
                    <Subtotal/>
                </div>

                )
            }
        </div>
    );


}

export default Checkout; 