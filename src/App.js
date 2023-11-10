import { useState } from "react";
import Server from "./server";




const ProductCard = (product, add) => {
    function addchart() {
        add(product)
    }
    return (
        <div>
            <div>{product.name}</div>
            <img src={product.image} style={{ height: 200, width: 200 }}></img>
            <div> price  {product.price}</div>
            <button onClick={addchart}>add to card</button>


        </div>
    )
}

const ProductCard2 = (product) => {
    return (
        <div>
            <div>{product.name}</div>
            <img src={product.image} style={{ height: 200, width: 200 }}></img>
            <div> quantity:  {product.quantity}</div>
            <div> price:  {product.price * product.quantity}</div>


        </div>
    )
}
function Viewcart({ cart }) {
    var totalprice=0
    for (let index = 0; index < cart.length; index++) {
        const product = cart[index];
        totalprice = totalprice + (product.price * product.quantity)
        
    }

    return (
        <div>
            <div>{cart.map((p) => ProductCard2(p))}</div>
            <div> Total price:{totalprice}</div>
        </div>

    );
}



function App() {
    const [cart, setCart] = useState([]);
    const [viewcart, setviewCart] = useState(false);
    function addToCart(product) {
        var productList = [...cart];
        var found = false;
        for (let index = 0; index < productList.length; index++) {
            const product2 = productList[index];
            if (product2.id == product.id) {
                product2.quantity = product2.quantity + 1;
                found = true;
                break;
            }
        }
        if (!found) {
            product.quantity = 1;
            productList = [...productList, product];
        }
        setCart(productList)
    }

    var productList = Server.getproductlist()
    function dhukeja() {
        setviewCart(true);
    }

    if (viewcart) {
        return (
            <Viewcart cart={cart} />
        )

    }

    else {

        return (
            <div>
                <div>{cart.length}</div>
                <button onClick={dhukeja}>view cart</button>
                {productList.map((p) => ProductCard(p, addToCart))}
            </div>
        )
    }
}
export default App;





