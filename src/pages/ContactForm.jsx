

export default function ContactForm() {



    return (
        <div className='contactForm-div-wrapper'>
            <h2>Contact Form</h2>

            <form /* onSubmit={sendEmail()} */ className='contactForm-div-form'>

                <div>
                    <label >Nombre</label>
                    <input /* ref={ref} */ type='file' className='input' />
                </div>
                <div>
                    <label >Email</label>
                    <input /* ref={ref} */ type='email' className='input' />
                </div>
                <div className='contactForm-div-textarea'>
                    <span >Mensaje</span>
                    <textarea /* ref={ref} */ type='text' className='input' />

                </div>
                <button className='btn' type="submit" >¡Habla con nosotros!</button>
            </form>
            <div className='contactForm-div-bottom'>
                <span>"La libertad, Sancho, es uno de los más preciosos dones que a los hombres dieron los cielos; con ella no pueden igualarse los tesoros que encierra la tierra ni el mar encubre; por la libertad, así como por la honra se puede y debe aventurar la vida, y, por el contrario, el cautiverio es el mayor mal que puede venir a los hombres." (El Quijote, Miguel de Cervantes Saavaedra)</span>
            </div>
        </div>
    )
}
