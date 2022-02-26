import { useNavigate } from "react-router"
import { useState } from "react";

export default function ReadsCreate() {

    const navigateFaq = useNavigate();
    const navigate = useNavigate();

    function goToFaq() {
        navigateFaq('/faq', {

        });
    }

    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [content, setContent] = useState("");
    const [published, setPublished] = useState(Boolean);

    const token = localStorage.getItem('UserToken');


    function validateFormLog() {
        return title.length > 0 && genre.length > 0 && content.length > 0 && published != null;
    }

    /*  function handlePublished(e) {
         if (e === "true") {
             console.log(published);
             return setPublished(true)
         } if (e === "false") {
             console.log(published);
             return setPublished(false)
         }
 
     } */

    function submitStory(event) {

        async function fetchData() {
            const storyResponse = await fetch("http://localhost/leer-te-server/public/index.php/story/add", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify({ title: title, content: content, genre: genre, published: published })
                /* '{"title":"' + title + '","content":"' + content + '","genre":"' + genre + '" ,"published":"' + published + '"}' */
            })
            const data = await storyResponse.json();
            console.log(data);
            console.log("lgooin");

            if (storyResponse.ok) {

                navigate('/userprofile', {

                });
            }
        }
        fetchData();
        event.preventDefault();
    }





    return (
        <section className='readsCreate-div-wrapper'>

            <button className='btn' onClick={goToFaq}>
                ¿No sabes por dónde empezar a escribir?
                ¡Dale un vistazo a nuestro FAQ!
            </button>
            <form onSubmit={submitStory} className='readsCreate-div-form'>
                <section className='readsCreate-div-inputs'>
                    <div>
                        <label >Título</label>
                        <input required type='text' className='input' value={title} onChange={(e) => setTitle(e.target.value)} />

                    </div>

                    <select required className="readsCreate-div-form-selector" onChange={(e) => setPublished(e.target.value)}>
                        <option value="">¿Cuándo quieres publicarlo?</option>
                        <option value={1}>Publicar</option>
                        <option value={0}>Guardar como borrador</option>
                    </select>

                    <select required className="readsCreate-div-form-selector" onChange={(e) => setGenre(e.target.value)}>
                        <option value="">Elige un género</option>
                        <option value="fantasy">Fantasía</option>
                        <option value="horror">Terror</option>
                        <option value="romance">Romance</option>
                        <option value="sciFy">Ciencia Ficción</option>
                        <option value="mistery">Misterio</option>
                        <option value="noFiction">No ficción</option>
                    </select>
                </section>

                <textarea maxLength="300" type='text' className='input' placeholder='Recuerda que la longitud máxima es de 300 palabras'
                    value={content} onChange={(e) => setContent(e.target.value)} />
                <button className='btn' type="submit" disabled={!validateFormLog()} >Enviar</button>

            </form>
        </section>
    )
}
