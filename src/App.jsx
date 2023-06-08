// import { useState } from 'react'
// import cartLogo from '/cart.svg'

import Navbar from "./components/Navbar.jsx";

import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <h1 className="title">Cart-UP!</h1>
            <Navbar />
            <Outlet />
        </>
    );
}

export default App;
