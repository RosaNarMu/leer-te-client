import { useNavigate } from 'react-router';
import { useState, useContext } from "react";
import UseContextGeneral from "../UseContext";
import { USER_DELETE, USER_EDIT } from '../etc/config';

export default function UserInfoUpdate() {

    const { logout } = useContext(UseContextGeneral);

    const navigate = useNavigate();

    const token = localStorage.getItem('UserToken');

    const [newEmail, setNewEmail] = useState("");
    const [newNickName, setNewNickName] = useState("");
    const [newPassword, setNewPassword] = useState("");

    function deleteUser(e) {

        async function fetchData() {
            const response = await fetch(USER_DELETE, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            })
            const data = await response.json();

            if (response.ok) {
                logout();
                window.localStorage.removeItem('UserToken');
                navigate('/', {
                    replace: true
                });

            }
        }
        fetchData();
        e.preventDefault();
    }

    function editStory(event) {

        async function fetchData() {
            const response = await fetch(USER_EDIT, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify({ email: newEmail, nickName: newNickName, password: newPassword })

            })
            const data = await response.json();

            if (response.ok) {

                navigate('/userprofile', {

                });
            }
        }
        fetchData();
        event.preventDefault();
    }


    return (
        <section className='userInfoUpdate-div-wrapper'>
            <h2>¿Ha cambiado algo en tu perfil? ¡Actualiza la información aquí!</h2>
            <button className='btn' onClick={deleteUser}>Eliminar usuario</button>
            <form onSubmit={editStory}  >
                <section className='userInfoUpdate-div-form'>

                    <section className='userInfoUpdate-div-left-form'>
                        <div>
                            <label>Email</label>
                            <input value={newEmail} onChange={(e) => setNewEmail(e.target.value)} type='text' className='input' />
                        </div>
                        <div>
                            <label>Nombre de usuario</label>
                            <input value={newNickName} onChange={(e) => setNewNickName(e.target.value)} type='text' className='input' />
                        </div>
                        <div>
                            <label>Contraseña</label>
                            <input value={newPassword} onChange={(e) => setNewPassword(e.target.value)} type='password' className='input' />
                        </div>
                    </section>
                    <section className='userInfoUpdate-div-right-form'>
                        <button className='btn' onClick={deleteUser}>Eliminar usuario</button>
                    </section>
                </section>

                <section className='userInfoUpdate-bottom-form'>
                    <button className='btn' type="submit" >Enviar</button>
                </section>

            </form>

            <div className='userInfoUpdate-div-bottom'>
                <span>"La mayor aventura es la que nos espera. Hoy y mañana aún no se han dicho. Las posibilidades, los cambios son todos vuestros por hacer. El molde de su vida en sus manos está para romper." (El Hobbit, J.R.R. Tolkien)</span>
            </div>
        </section >
    )
}
