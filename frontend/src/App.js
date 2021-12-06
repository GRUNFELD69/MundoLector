import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Button } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from "./screens/Landing";
import BookSelect from "./screens/BookSelect";
import OrderBook from "./screens/OrderBook";
import HomeAdmin from "./screens/HomeAdmin";
import Login from "./screens/Login";
import CustomerProfile from "./screens/CustomerProfile";
import UserView from "./screens/UserView";
import BookFunctions from "./screens/BookFunctions";
import ShoppingCart from "./screens/ShoppingCart";
import SearchView from "./screens/SearchView";
import NotFound from "./screens/NotFound";


import NavBar from "./components/NavBar";
import CategoryNavBar from "./components/CategoryNavBar";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <CategoryNavBar />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/select" element={<BookSelect />} />
                    <Route path="/order" element={<OrderBook />} />
                    <Route path="/adminprofile" element={<HomeAdmin />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/customerprofile" element={<CustomerProfile />} />
                    <Route path="/userhome" element={<UserView />} />
                    <Route path="/bookfunctions" element={<BookFunctions />} />
                    <Route path="/shoppingcart" element={<ShoppingCart />} />
                    <Route path="/searchview" element={<SearchView />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
