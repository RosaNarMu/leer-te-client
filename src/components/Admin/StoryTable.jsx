import { useEffect, useState, useContext } from "react";

export default function AdminTable() {
    const [storyAdmin, setStoryAdmin] = useState([]);

    const token = localStorage.getItem('UserToken');

    useEffect(() => {
        async function fetchData() {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            };
            const response = await fetch("http://localhost/leer-te-server/public/index.php/admin/dataStory", {
                method: 'GET',
                headers: headers
            })

            const data = await response.json();
            setStoryAdmin(data);
            console.log(data);
        }

        fetchData();
    }, []);

    function deleteStory(e, idStory) {

        async function fetchData() {
            const commentResponse = await fetch(`http://localhost/leer-te-server/public/index.php/admin/deleteStory/${idStory}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            })
            const data = await commentResponse.json();
            console.log(data);
            /*console.log("lgooin"); */

            if (commentResponse.ok) {

                /* navigate('/userprofile', {
    
                }); */
            }
        }
        fetchData();
        e.preventDefault();
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Título</th>
                    <th>Usuario</th>
                    <th>Género</th>
                    <th>Contenido</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {storyAdmin && storyAdmin.map(({ id, title, User, genre, content }) => (
                    <tr>
                        <td>{id}</td>
                        <td>{title}</td>
                        <td>{User}</td>
                        <td>{genre}</td>
                        <td>{content}</td>
                        <td> <button onClick={(e) => deleteStory(e, id)} className='btn delete-btn' title="Elimina la publicación">
                            <i className="fas fa-trash-alt"></i>
                        </button></td>
                    </tr>
                ))}

                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>4</td>
                </tr>
            </tbody>
        </table >
    )
}
