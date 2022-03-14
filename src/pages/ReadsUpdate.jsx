import { useNavigate, useParams } from "react-router"
import { useState, useEffect } from "react";
import { STORY_DETAIL, STORY_UPDATE } from "../etc/config";

export default function ReadsUpdate() {

    const navigateFaq = useNavigate();
    const navigate = useNavigate();

    function goToFaq() {
        navigateFaq('/faq', {

        });
    }

    const token = localStorage.getItem('UserToken');

    const [newTitle, setNewTitle] = useState("");

    const [newContent, setNewContent] = useState("");

    const [newGenre, setNewGenre] = useState("");
    const [newPublished, setNewPublished] = useState("");

    const [newFile, setNewFile] = useState({});
    const [isFilePicked, setIsFilePicked] = useState(false);

    const { detailId } = useParams();

    const numberDetailId = parseInt(detailId);

    const isActive = true;

    const changeHandler = (event) => {
        setNewFile(event.target.files[0]);
        setIsFilePicked(true);
    };

    function validateFormUpdate() {
        return newTitle.length > 0 && newGenre.length > 0 && newContent.length > 0 && newPublished != null;
    }

    useEffect(() => {
        async function fetchData() {
            const headers = {
                'Content-Type': 'application/json'
            };

            const response = await fetch(STORY_DETAIL + numberDetailId, {
                method: 'GET',
                headers: headers
            })
            const data = await response.json();

            setNewTitle(data.title);
            setNewGenre(data.genre);
            setNewContent(data.content);
            setNewPublished(data.published);
            setNewFile(data.coverImage);

        }

        fetchData();
    }, [numberDetailId]);


    function editStory(event) {

        async function fetchData() {

            const formData = new FormData();
            formData.append('title', newTitle);
            formData.append('content', newContent);
            formData.append('genre', newGenre);
            formData.append('published', newPublished);
            formData.append('coverImage', newFile);
            formData.append('isActive', isActive);

            const storyResponse = await fetch(STORY_UPDATE + numberDetailId, {
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

            <h2>Actualiza tu relato</h2>

            <button className='btn' onClick={goToFaq}>
                ¿No sabes por dónde empezar a escribir?
                ¡Dale un vistazo a nuestro FAQ!
            </button>
            <form onSubmit={(e) => editStory(e)}
                className='readsCreate-div-form'>
                <section className='readsCreate-div-inputs'>
                    <div>
                        <label >Título</label>
                        <input required type='text' className='input' value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                    </div>

                    <select required className="readsCreate-div-form-selector" onChange={(e) => setNewPublished(e.target.value)}>
                        <option value="">¿Cuándo quieres publicarlo?</option>
                        <option value={1}>Publicar</option>
                        <option value={0}>Guardar como borrador</option>
                    </select>

                    <select required className="readsCreate-div-form-selector" onChange={(e) => setNewGenre(e.target.value)}>
                        <option value={""}>Elige un género</option>
                        <option value="fantasia">Fantasía</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="ciencia ficcion">Ciencia Ficción</option>
                        <option value="misterio">Misterio</option>
                        <option value="no ficcion">No ficción</option>
                    </select>
                    {newFile && newFile.length && (

                        <div className='previous-image'>
                            <label >Imagen anterior: </label>
                            <img
                                src={'data:image/png;base64,' + newFile}
                                alt={'Imagen de portada'}
                                className='previous-image-pic'
                            />
                        </div>
                    )}
                    <input type="file" name="file" onChange={changeHandler} accept=".png" />
                    {isFilePicked ? (
                        <div className="input-info">
                            <p>Filename: {newFile.name}</p>
                            <p>Filetype: {newFile.type}</p>
                            <p>Size in bytes: {newFile.size}</p>
                            {newFile.size > "7000000" && (
                                <p>Tu imagen debe de pesar 7mb o menos</p>
                            )}
                        </div>
                    ) : (
                        <p className="input-info">Select a file to show details</p>
                    )}

                </section>

                <textarea maxLength="2060" type='text' className='input' placeholder='Recuerda que la longitud máxima es de 300 palabras'
                    value={newContent} onChange={(e) => setNewContent(e.target.value)} />
                {!validateFormUpdate() && (<span className="reminder-form-message">Recuerda rellenar todos los campos para enviar tu historia</span>)}
                <button className='btn' type="submit" disabled={!validateFormUpdate()} >Enviar</button>

            </form>
        </section>
    )
}
