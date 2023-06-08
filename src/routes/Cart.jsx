import { useOutletContext } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
    const [userCart, setUserCart] = useOutletContext();

    function removeFromCart(productId) {
        const newCart = userCart.filter(item => item.product.id !== productId);
        setUserCart(newCart);
    }

    function updateQuantity(productId, newQuantity) {
        if (newQuantity === 0) return removeFromCart(productId);
        const newCart = userCart.map(item => {
            if (item.product.id === productId) {
                return {
                    ...item,
                    quantity: newQuantity,
                };
            }
            return item;
        });
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
                        {/* <p>Quantity: {item.quantity}</p> */}
                        <div className="quantity">
                            <button
                                onClick={() =>
                                    updateQuantity(
                                        item.product.id,
                                        item.quantity - 1
                                    )
                                }
                            >
                                -
                            </button>
                            <input
                                type="number"
                                value={item.quantity}
                                onChange={event =>
                                    updateQuantity(
                                        item.product.id,
                                        parseInt(event.target.value)
                                    )
                                }
                            />
                            <button
                                onClick={() =>
                                    updateQuantity(
                                        item.product.id,
                                        item.quantity + 1
                                    )
                                }
                            >
                                +
                            </button>
                        </div>
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
