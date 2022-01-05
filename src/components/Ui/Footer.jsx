import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className='footer-main'>
            <Link to="/faq" className='footer-span'> <span>FAQ</span></Link>
            <Link to="/contact" className='footer-span'> <span>Contacta con nosotros</span></Link>


        </footer >
    )
}
