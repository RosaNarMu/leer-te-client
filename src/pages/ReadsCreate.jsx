import { useNavigate } from "react-router"

export default function ReadsCreate() {

    const navigateFaq = useNavigate();

    function goToFaq() {


        navigateFaq('/faq', {

        });


    }

    return (
        <wrapper className='readsCreate-div-wrapper'>



            <button className='btn' onClick={goToFaq}>
                ¿No sabes por dónde empezar a escribir?
                ¡Dale un vistazo a nuestro FAQ!
            </button>
            <form /* onSubmit={ } */ className='readsCreate-div-form'>
                <section className='readsCreate-div-inputs'>
                    <div>
                        <label >Título</label>
                        <input /* ref={ref} */ required type='text' className='input' />
                    </div>

                    <select required className="readsCreate-div-form-selector">
                        <option value="">Elige un género</option>
                        <option value="fantasy">Fantasía</option>
                        <option value="horror">Terror</option>
                        <option value="romance">Romance</option>
                        <option value="sciFy">Ciencia Ficción</option>
                        <option value="mistery">Misterio</option>
                        <option value="noFiction">No ficción</option>
                    </select>
                </section>

                <textarea /* ref={ref} */ maxlength="300" type='text' className='input' placeholder='Recuerda que la longitud máxima es de 300 palabras' />
                <button className='btn' type="submit" >Enviar</button>

            </form>
        </wrapper>
    )
}
