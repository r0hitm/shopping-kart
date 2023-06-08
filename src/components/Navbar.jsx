import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState("");

    useEffect(() => {
        // Get the current path from the location object
        const currentPath = location.pathname;

        // Update the activeLink state based on the current path
        setActiveLink(currentPath);
    }, [location]);

    return (
        <nav>
            <ul>
                <li className={activeLink === "/" ? "active" : ""}>
                    <Link to="/">Home</Link>
                </li>
                <li className={activeLink === "/shop" ? "active" : ""}>
                    <Link to="/shop">Shop</Link>
                </li>
                <li className={activeLink === "/about" ? "active" : ""}>
                    <Link to="/about">About Us</Link>
                </li>
                <li className={activeLink === "/cart" ? "active" : ""} id="cart">
                    <Link to="/cart">Your Cart</Link>
                </li>
            </ul>
        </nav>
    );
}
