import { useEffect, useState } from "react";
import { ADMIN_READ_COMMENT, ADMIN_DELETE_COMMENT } from "../../etc/config"

export default function AdminTable() {
    const [commentAdmin, setCommentAdmin] = useState([]);

    const token = localStorage.getItem('UserToken');

    useEffect(() => {
        async function fetchData() {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            };
            const response = await fetch(ADMIN_READ_COMMENT, {
                method: 'GET',
                headers: headers
            });

            const data = await response.json();
            setCommentAdmin(data);
        }

        fetchData();
    }, [token]);

    function deleteComment(e, idComment) {

        async function fetchData() {
            const commentResponse = await fetch(ADMIN_DELETE_COMMENT + idComment, {
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
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Usuario</th>
                    <th>Relato</th>
                    <th>Puntuación</th>
                    <th>Contenido</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {commentAdmin && commentAdmin.map(({ id, User, Story, score, content }) => (
                    <tr>
                        <td>{id}</td>
                        <td>{User}</td>
                        <td>{Story}</td>
                        <td>{score}</td>
                        <td>{content}</td>
                        <td> <button onClick={(e) => deleteComment(e, id)} className='btn delete-btn-table' title="Elimina la publicación">
                            <i className="fas fa-trash-alt"></i>
                        </button></td>
                    </tr>
                ))}
            </tbody>
        </table >
    )
}