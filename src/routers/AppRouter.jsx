import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate, Link, Navigate } from "react-router-dom";
import Footer from "../components/Ui/Footer";
import { Navbar } from "../components/Ui/Navbar";

import ContactForm from "../pages/ContactForm";
import FAQ from "../pages/FAQ";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import ReadsCreate from "../pages/ReadsCreate";
import ReadsDetail from "../pages/ReadsDetail";
import ReadsDisplay from "../pages/ReadsDisplay";
import SocialPayment from "../pages/SocialPayment";
import UserInfoUpdate from "../pages/UserInfoUpdate";
import UserProfile from "../pages/UserProfile";


export default function AppRouter() {
    const [user, setUser] = useState(null);



    function authenticate() {
        setUser(true);
        console.log(user);
    }

    function logout() {
        setUser(false);
        console.log(user);

    }

    useEffect(() => {
        const u = localStorage.getItem('user');
        u && JSON.parse(u) ? setUser(true) : setUser(false);
    }, [])

    useEffect(() => {
        localStorage.setItem("user", user);
    }, [user]);

    return (
        <BrowserRouter>
            <Navbar user={user} logout={logout} />
            <Routes>
                <Route path="/" element={<Home user={user} />} />


                <Route path="contact" element={<ContactForm />} />
                <Route path="faq" element={<FAQ />} />

                <Route path="display" element={<ReadsDisplay user={user} />} />

                <Route path="display/detail/:detailId" element={<ReadsDetail />} />

                {!user && (

                    <Route path="login" element={<Login authenticate={authenticate} />} />
                )}


                {user && (
                    <>
                        <Route path="userprofile" element={<UserProfile logout={logout} />} />
                        <Route path="userprofile/informationupdate" element={<UserInfoUpdate />} />
                        <Route path="create" element={<ReadsCreate />} />
                        <Route path="socialpayment" element={<SocialPayment user={user} />} />
                    </>
                )}







                <Route path='*' element={<NotFound />} />

            </Routes>
            <Footer></Footer>
        </BrowserRouter >
    )
}