import { useState } from 'react'

import Navbar from "./components/Navbar.jsx";

import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
    const [userCart, setUserCart] = useState([]);   // userCart is an array of objects

    return (
        <>
            <h1 className="title">Cart-UP!</h1>
            <Navbar />
            <Outlet context={[userCart, setUserCart]} />
        </>
    );
}

export default App;
