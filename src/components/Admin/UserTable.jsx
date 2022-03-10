import { useEffect, useState, useContext } from "react";

export default function AdminTable() {
    const [userAdmin, setUserAdmin] = useState([]);

    const token = localStorage.getItem('UserToken');

    useEffect(() => {
        async function fetchData() {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            };
            const response = await fetch("http://localhost/leer-te-server/public/index.php/admin/dataUser", {
                method: 'GET',
                headers: headers
            })

            const data = await response.json();
            setUserAdmin(data);
            console.log(data);
        }

        fetchData();
    }, []);

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
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                </tr>
            </tbody>
        </table >
    )
}