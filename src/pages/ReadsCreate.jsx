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
    const [coverImage, setCoverImage] = useState([]);

    const token = localStorage.getItem('UserToken');

    const handleFiles = (e) => {
        const fileObj = e.target.files;

        setCoverImage(fileObj
        )

        e.target.value = "";
    }


    function validateFormLog() {
        return title.length > 0 && genre.length > 0 && content.length > 0 && published != null;
    }


    function submitStory(event) {

        async function fetchData() {

            const formData = new FormData();
            formData.append('title', title);
            formData.append('content', content);
            formData.append('genre', genre);
            formData.append('published', published);
            formData.append('coverImage', coverImage);
            const storyResponse = await fetch("http://localhost/leer-te-server/public/index.php/story/add", {
                method: 'POST',
                headers: {

                    'Authorization': 'Bearer ' + token
                },
                body: formData
                /* JSON.stringify({ title: title, content: content, genre: genre, published: published, coverImage: coverImage }) */

            })
            const data = await storyResponse.json();
            console.log(data);

            if (storyResponse.ok) {

                navigate('/userprofile', {

                });
            }
        }
        fetchData();
        event.preventDefault();
    }



    console.log(coverImage);
    console.log(typeof (title));

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
                        <option value="fantasia">Fantasía</option>
                        <option value="horror">Terror</option>
                        <option value="romance">Romance</option>
                        <option value="ciencia ficción">Ciencia Ficción</option>
                        <option value="misterio">Misterio</option>
                        <option value="no ficción">No ficción</option>
                    </select>

                    <input type="file" onChange={handleFiles} />
                </section>

                <textarea maxLength="300" type='text' className='input' placeholder='Recuerda que la longitud máxima es de 300 palabras'
                    value={content} onChange={(e) => setContent(e.target.value)} />
                <button className='btn' type="submit" disabled={!validateFormLog()} >Enviar</button>

            </form>
        </section>
    )
}
