import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Navbar } from "../components/Ui/Navbar";
import ContactForm from "../routes/ContactForm";
import FAQ from "../routes/FAQ";

import Home from "../routes/Home";
import Login from "../routes/Login";
import NotFound from "../routes/NotFound";
import ReadsDisplay from "../routes/ReadsDisplay";


export default function AppRouter() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="display" element={<ReadsDisplay />} />
                <Route path="contact" element={<ContactForm />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="login" element={<Login />} />


                <Route path='*' element={<NotFound />} />


            </Routes>
        </BrowserRouter >
    )
}