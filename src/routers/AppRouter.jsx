import { useState, useEffect, useContext } from "react";
import { BrowserRouter, Route, Routes, useNavigate, Link, Navigate } from "react-router-dom";
import Footer from "../components/Ui/Footer";
import { Navbar } from "../components/Ui/Navbar";

import ContactForm from "../pages/ContactForm";
import FAQ from "../pages/FAQ";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import ReadsCreate from "../pages/ReadsCreate";
import ReadsDetailFav from "../pages/ReadsDetailFav";
import ReadsDetail from "../pages/ReadsDetailFav";
import ReadsDetailUnlocked from "../pages/ReadsDetailUnlocked";
import ReadsDisplay from "../pages/ReadsDisplay";
import ReadsUpdate from "../pages/ReadsUpdate";
import SocialPayment from "../pages/SocialPayment";
import UserInfoUpdate from "../pages/UserInfoUpdate";
import UserProfile from "../pages/UserProfile";
import UseContextGeneral from "../UseContext";


export default function AppRouter() {

    const { user, setUser, logout } = useContext(UseContextGeneral);




    useEffect(() => {
        const u = localStorage.getItem('user');
        u && JSON.parse(u) ? setUser(true) : setUser(false);
    }, [])

    useEffect(() => {
        localStorage.setItem("user", user);
    }, [user]);

    return (
        <BrowserRouter>
            <Navbar logout={logout} />
            <Routes>
                <Route path="/" element={<Home />} />


                <Route path="contact" element={<ContactForm />} />
                <Route path="faq" element={<FAQ />} />

                <Route path="display" element={<ReadsDisplay />} />

                <Route path="display/detailFav/:detailId" element={<ReadsDetailFav />} />
                <Route path="display/detailUnlocked/:detailId" element={<ReadsDetailUnlocked />} />

                {!user && (

                    <Route path="login" element={<Login /* authenticate={authenticate} */ />} />
                )}


                {user && (
                    <>
                        <Route path="userprofile" element={<UserProfile logout={logout} />} />
                        <Route path="userprofile/informationupdate" element={<UserInfoUpdate />} />
                        <Route path="create" element={<ReadsCreate />} />
                        <Route path="update/:detailId" element={<ReadsUpdate />} />
                        <Route path="socialpayment" element={<SocialPayment />} />
                    </>
                )}







                <Route path='*' element={<NotFound />} />

            </Routes>
            <Footer></Footer>
        </BrowserRouter >
    )
}