import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className='footer-main'>
            <div className='footer-left'>
                <Link to="/faq" className='footer-span'> <span>FAQ</span></Link>
                <Link to="/contact" className='footer-span'> <span>Contacta con nosotros</span></Link>
            </div>

            <div className='footer-right'>
                <Link to="" className='footer-span'><span><i class="fa-solid fa-envelope"></i> leer.te.answer@gmail.com</span></Link>
                <Link to="" className='footer-span'><span><i class="fa-brands fa-twitter"></i> @leer.te</span></Link>
                <Link to="" className='footer-span'><span><i class="fa-brands fa-facebook"></i> LeerTe</span></Link>
            </div>
        </footer >

    )
}
