import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Navbar } from "../components/Ui/Navbar";
import ContactForm from "../routes/ContactForm";
import FAQ from "../routes/FAQ";

import Home from "../routes/Home";
import Login from "../routes/Login";
import NotFound from "../routes/NotFound";
import ReadsCreate from "../routes/ReadsCreate";
import ReadsDetail from "../routes/ReadsDetail";
import ReadsDisplay from "../routes/ReadsDisplay";
import SocialPayment from "../routes/SocialPayment";
import UserInfoUpdate from "../routes/UserInfoUpdate";
import UserProfile from "../routes/UserProfile";


export default function AppRouter() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />


                <Route path="contact" element={<ContactForm />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="login" element={<Login />} />
                <Route path="display" element={<ReadsDisplay />} />

                <Route path="display/detail" element={<ReadsDetail />} />

                {/* sin acceso */}
                <Route path="create" element={<ReadsCreate />} />
                <Route path="socialpayment" element={<SocialPayment />} />
                <Route path="userprofile" element={<UserProfile />} />
                <Route path="userprofile/informationupdate" element={<UserInfoUpdate />} />



                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter >
    )
}