import { useEffect, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Ui/Footer";
import { Navbar } from "../components/Ui/Navbar";
import Admin from "../pages/Admin";
import ContactForm from "../pages/ContactForm";
import FAQ from "../pages/FAQ";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import ReadsCreate from "../pages/ReadsCreate";
import ReadsDetailFav from "../pages/ReadsDetailFav";
import ReadsDisplay from "../pages/ReadsDisplay";
import ReadsUpdate from "../pages/ReadsUpdate";
import UserInfoUpdate from "../pages/UserInfoUpdate";
import UserProfile from "../pages/UserProfile";
import UseContextGeneral from "../UseContext";


export default function AppRouter() {

    const { user, setUser, logout } = useContext(UseContextGeneral);

    const admin = localStorage.getItem('admin');


    useEffect(() => {
        const u = localStorage.getItem('user');
        u && JSON.parse(u) ? setUser(true) : setUser(false);
    }, [setUser])

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

                {!user && (

                    <Route path="login" element={<Login /* authenticate={authenticate} */ />} />
                )}


                {user && (
                    <>
                        <Route path="userprofile" element={<UserProfile />} />
                        <Route path="userprofile/informationupdate" element={<UserInfoUpdate />} />
                        <Route path="create" element={<ReadsCreate />} />
                        <Route path="update/:detailId" element={<ReadsUpdate />} />
                    </>
                )}

                {admin && (
                    <Route path="admin" element={<Admin />} />
                )}

                <Route path='*' element={<NotFound />} />

            </Routes>
            <Footer></Footer>
        </BrowserRouter >
    )
}