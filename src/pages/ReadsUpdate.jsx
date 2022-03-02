import { useNavigate, useParams } from "react-router"
import { useState, useEffect } from "react";

export default function ReadsUpdate() {

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

    const [newTitle, setNewTitle] = useState("");

    const [newContent, setNewContent] = useState("");

    const [newGenre, setNewGenre] = useState("");
    const [newPublished, setNewPublished] = useState("");

    const { detailId } = useParams();

    const numberDetailId = parseInt(detailId);




    function validateFormLog() {
        return newTitle.length > 0 && newGenre.length > 0 && newContent.length > 0 && newPublished != null;
    }


    useEffect(() => {
        async function fetchData() {
            const headers = {
                'Content-Type': 'application/json'
            };

            const response = await fetch(`http://localhost/leer-te-server/public/index.php/story/detail/${numberDetailId}`, {
                method: 'GET',
                headers: headers
            })
            const data = await response.json();

            console.log(data);

            setNewTitle(data.title);
            setNewGenre(data.genre);
            setNewContent(data.content);
            setNewPublished(data.published);


        }

        fetchData();
    }, []);

    function editStory(event) {

        async function fetchData() {
            const storyResponse = await fetch(`http://localhost/leer-te-server/public/index.php/story/edit/${numberDetailId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify({ title: newTitle, content: newContent, genre: newGenre, published: newPublished })

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


    console.log(newTitle);
    console.log(newGenre);
    console.log(newContent);
    console.log(newPublished);



    return (
        <section className='readsCreate-div-wrapper'>

            <h2>Actualiza tu relato</h2>

            <button className='btn' onClick={goToFaq}>
                ¿No sabes por dónde empezar a escribir?
                ¡Dale un vistazo a nuestro FAQ!
            </button>
            <form onSubmit={(e) => editStory(e)}
                /* onClick={(e) => deleteComment(e, id)} */
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
                        <option value="fantasy">Fantasía</option>
                        <option value="horror">Terror</option>
                        <option value="romance">Romance</option>
                        <option value="sciFy">Ciencia Ficción</option>
                        <option value="mistery">Misterio</option>
                        <option value="noFiction">No ficción</option>
                    </select>
                </section>

                <textarea maxLength="300" type='text' className='input' placeholder='Recuerda que la longitud máxima es de 300 palabras'
                    value={newContent} onChange={(e) => setNewContent(e.target.value)} />
                <button className='btn' type="submit" disabled={!validateFormLog()} >Enviar</button>

            </form>
        </section>
    )
}
