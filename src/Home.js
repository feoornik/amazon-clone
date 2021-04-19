import React from "react";
import Product from "./Product";
import "./Home.css";
import banner from "./image/banner.jpg";




function Home() {
    return (
        <div className="home">
            <img className="home_image" src={banner} />

            {/* Product id, title, price, rating, image */}
            <div className="home_row">
                <Product
                    id="12345678"
                    title="The Gift of Fire"
                    price={12.99}
                    rating={5}
                    image="https://www.pearsonhighered.com/assets/bigcovers/0/1/3/6/0136008488.jpg"
                />
                <Product
                    id="12345671"
                    title="Nike Running Shoes"
                    price={299.99}
                    rating={4}
                    image="data:image/jpeg;base64,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V+DKLEdxGokyouO3O9H+nmHxBFKsgpu/V161NydAtzuJPA6dsmsb0fRrmm2U/CblfA7x6zn9q/ZpSqMXSoUZtTxDE8WBkvgMBtSimRq1KuFFlZ1dHsN2ZgSG77X5kydz5Lj9IjGYSpS99CBz3r+oaTNgNv1KVhfOo+63D8p4Rt3D7UfKyE0nUEHI5ZHB+JGW1+25nNuu1F0fC06nNshQ/wDjKC/eDHhHba9LwG3qFWwzZG+FtPI7jJS88io/xB97Av4VQB5GmfnJrBYvFoAFouo5NUdh+nQekF3HoTOBqTYSLxPSPBU/fxdIdntFJ8gSZye0cVjcQjU6iqqOLMEUi45XJJnOHogL3u47Bb9rydErtsb9omAT3S9Q/gQgeb5ZCYr7Rq7aUcKqcmqMW/2rb5yMpdG8nuprzNyfMzZp7Db4ZG1pGIbVx+JYB8YyId60wE04gFbHzJnY9H9k4KmFKUVZwb+0ezvm+K53HutIbCbHYcJP4HClZW+Vo6NWBl81aF5sCELpSViSKSlpWJApErECkSsQKRKxApErECkStogWkS0oOUyRAw+xXlKGgvITPaIGu2FXlMZwa8puRA0f4FeUDBLN6I0lqLhBMq0QJmtEaRtQLLoiSERECkSsQKRKxApERARKxApErECkrEQKSsRAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP/9k="
                />
            </div>

            <div className="home_row">
                <Product
                    id="12345672"
                    title="Kelloggs Special"
                    price={2.99}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvze4RTnPqKMYy7P0MmaDAx_EtCq9cUJhsq-gn-hHFTURdGicElO69_8n2_vEgc2rvH7c&usqp=CAU"
                />
                <Product
                    id="12345673"
                    title="Winter Jacket"
                    price={69.99}
                    rating={5}
                    image="https://www.dmarge.com/wp-content/uploads/2020/11/orlebarbrown-winterjacket.jpg"
                />
                <Product
                    id="12345674"
                    title="iPhone SE"
                    price={149.99}
                    rating={4}
                    image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-white-select-2020?wid=834&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1586574259457"
                />
            </div>

            <div className="home_row">
                <Product
                    id="12345675"
                    title="Flat screen TV"
                    price={129.99}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwxCiDsqTGAFMgSJrKFOXUaBy1bU1yb3Crkg&usqp=CAU"
                />
            </div>
            
        </div>
    );
}

export default Home;