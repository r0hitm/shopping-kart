import { useOutletContext } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
    const [userCart, setUserCart] = useOutletContext();

    function removeFromCart(productId) {
        const newCart = [...userCart];
        const itemInCart = newCart.find(item => item.product.id === productId);
        if (itemInCart) {
            itemInCart.quantity--;
        }
        if (itemInCart.quantity === 0) {
            const index = newCart.indexOf(itemInCart);
            newCart.splice(index, 1);
        }
        setUserCart(newCart);
    }

    return (
        <>
            <h2>Items in Your Cart</h2>
            <div className="products">
                {userCart.map((item, index) => (
                    <div className="product" key={index}>
                        <img src={item.product.image} alt={item.product.name} />
                        <h3>{item.product.name}</h3>
                        <p>Price: ${item.product.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <button onClick={() => removeFromCart(item.product.id)}>
                            Remove from Cart
                        </button>
                    </div>
                ))}
            </div>
            <div className="total">
                <h3>
                    Total Cost: $
                    {userCart.reduce((total, item) => {
                        return total + item.product.price * item.quantity;
                    }, 0)}
                </h3>
            </div>
            <div className="checkout">
                <button
                    onClick={() => {
                        if (userCart.length === 0) {
                            alert("Your cart is empty!");
                            return;
                        }
                        alert("Thank you for shopping with us!");
                        setUserCart([]);
                    }}
                >
                    Checkout
                </button>
            </div>
        </>
    );
}
