import { useNavigate } from "react-router"
import { useState } from "react";
import { STORY_ADD } from "../etc/config";

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
    const [selectedFile, setSelectedFile] = useState({});
    const [isFilePicked, setIsFilePicked] = useState(false);
    const isActive = true;

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };

    const token = localStorage.getItem('UserToken');

    function validateFormCreate() {
        return title.length > 0 && genre.length > 0 && content.length > 0 && published != null;
    }

    function submitStory(event) {

        async function fetchData() {

            const formData = new FormData();
            formData.append('title', title);
            formData.append('content', content);
            formData.append('genre', genre);
            formData.append('published', published);
            formData.append('coverImage', selectedFile);
            formData.append('isActive', isActive);


            const storyResponse = await fetch(STORY_ADD, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                body: formData
            })
            const data = await storyResponse.json();

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
                        <input required type='text' maxLength="50" className='input' value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>

                    <select required className="readsCreate-div-form-selector" onChange={(e) => setPublished(e.target.value)}>
                        <option value="">¿Cuándo quieres publicarlo?</option>
                        <option value={1}>Publicar</option>
                        <option value={0}>Guardar como borrador</option>
                    </select>

                    <select required className="readsCreate-div-form-selector" onChange={(e) => setGenre(e.target.value)}>
                        <option value="">Elige un género</option>
                        <option value="fantasia">Fantasía</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="ciencia ficción">Ciencia Ficción</option>
                        <option value="misterio">Misterio</option>
                        <option value="no ficción">No ficción</option>
                    </select>

                    <input type="file" name="file" onChange={changeHandler} accept=".png" />
                    {isFilePicked ? (
                        <div>
                            <p>Filename: {selectedFile.name}</p>
                            <p>Filetype: {selectedFile.type}</p>
                            <p>Size in bytes: {selectedFile.size}</p>
                            {selectedFile.size > "7000000" && (
                                <p>Tu imagen debe de pesar 7mb o menos</p>
                            )}
                        </div>
                    ) : (
                        <p>Select a file to show details</p>
                    )}

                </section>

                <textarea maxLength="2060" type='text' className='input' placeholder='Recuerda que la longitud máxima es de 300 palabras'
                    value={content} onChange={(e) => setContent(e.target.value)} />
                {!validateFormCreate() && (<span className="reminder-form-message">Recuerda rellenar todos los campos para enviar tu historia</span>)}
                <button className='btn' type="submit" disabled={!validateFormCreate()} >Enviar</button>

            </form>
        </section>
    )
}
