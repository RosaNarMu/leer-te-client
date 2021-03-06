import { useState } from 'react';

const ScrollUp = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <button className='pos-fixed btn' onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }}>
            ¡Haz clic aquí para subir!
        </button>
    );
}

export default ScrollUp;