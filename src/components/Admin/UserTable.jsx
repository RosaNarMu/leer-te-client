import { useEffect, useState } from "react";
import { ADMIN_READ_USER, ADMIN_DELETE_USER } from "../../etc/config";

export default function AdminTable() {
    const [userAdmin, setUserAdmin] = useState([]);

    const token = localStorage.getItem('UserToken');

    useEffect(() => {
        async function fetchData() {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            };
            const response = await fetch(ADMIN_READ_USER, {
                method: 'GET',
                headers: headers
            })
            const data = await response.json();
            setUserAdmin(data);
        }

        fetchData();
    }, [token]);


    function deleteUser(e, idUser) {

        async function fetchData() {
            const commentResponse = await fetch(ADMIN_DELETE_USER + idUser, {
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
                    <th>Nombre de usuario</th>
                    <th>Email</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {userAdmin && userAdmin.map(({ id, nickName, email }) => (
                    <tr>
                        <td>{id}</td>
                        <td>{nickName}</td>
                        <td>{email}</td>
                        <td> <button onClick={(e) => deleteUser(e, id)} className='btn delete-btn-table' title="Elimina la publicación">
                            <i className="fas fa-trash-alt"></i>
                        </button></td>
                    </tr>
                ))}
                <tr>

                </tr>
            </tbody>
        </table >
    )
}