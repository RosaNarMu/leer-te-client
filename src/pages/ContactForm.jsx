

export default function ContactForm() {



    return (
        <div className='contactForm-div-wrapper'>
            <h2>Contact Form</h2>

            <form action="https://formsubmit.co/1903e10e80b624cbf7da9e8b91aec8cd" method="POST" className='contactForm-div-form'>
                <input type="hidden" name="_subject" value="Mensaje desde Leer-té" />
                <input type="hidden" name="_autoresponse" value="¡Gracias por contactar con nosotros! Recibirás una respuesta en cuanto sea posible." />
                <input type="hidden" name="_template" value="box" />
                <input type="hidden" name="_next" value="http://localhost:3000/" />

                <div>
                    <label >Nombre</label>
                    <input name="name" type='text' className='input' required />
                </div>
                <div>
                    <label >Email</label>
                    <input name="email" type='email' className='input' required />
                </div>
                <div className='contactForm-div-textarea'>
                    <span >Mensaje</span>
                    <input name='message' type='text' className='input' required />

                </div>
                <button className='btn' type="submit" >¡Habla con nosotros!</button>
            </form>
            <div className='contactForm-div-bottom'>
                <span>"La libertad, Sancho, es uno de los más preciosos dones que a los hombres dieron los cielos; con ella no pueden igualarse los tesoros que encierra la tierra ni el mar encubre; por la libertad, así como por la honra se puede y debe aventurar la vida, y, por el contrario, el cautiverio es el mayor mal que puede venir a los hombres." (El Quijote, Miguel de Cervantes Saavaedra)</span>
            </div>
        </div>
    )
}
