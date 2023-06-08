import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
    return (
        <div className="homepage">
            <h2>Welcome to Cart-UP! Store</h2>
            <p>Discover a world of amazing products at unbeatable prices.</p>
            <Link to="/shop" className="shop-button">
                Start Shopping
            </Link>
        </div>
    );
}
