import { useEffect, useState } from "react";
import { ADMIN_DELETE_STORY, ADMIN_READ_STORY } from "../../etc/config";

export default function AdminTable() {
    const [storyAdmin, setStoryAdmin] = useState([]);

    const token = localStorage.getItem('UserToken');

    useEffect(() => {
        async function fetchData() {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            };
            const response = await fetch(ADMIN_READ_STORY, {
                method: 'GET',
                headers: headers
            })

            const data = await response.json();
            setStoryAdmin(data);
        }

        fetchData();
    }, [token]);

    function deleteStory(e, idStory) {

        async function fetchData() {
            const commentResponse = await fetch(ADMIN_DELETE_STORY + idStory, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            })
            const data = await commentResponse.json();
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
                        <td> <button onClick={(e) => deleteStory(e, id)} className='btn delete-btn-table' title="Elimina la publicación">
                            <i className="fas fa-trash-alt"></i>
                        </button></td>
                    </tr>
                ))}
            </tbody>
        </table >
    )
}
