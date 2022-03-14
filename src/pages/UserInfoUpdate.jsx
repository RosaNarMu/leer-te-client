import { NavLink, Outlet, useNavigate, Navigate } from 'react-router';
import { useState, useEffect, useContext } from "react";
import UseContextGeneral from "../UseContext";



export default function UserInfoUpdate() {

    const { logout } = useContext(UseContextGeneral);


    const navigate = useNavigate();

    const token = localStorage.getItem('UserToken');


    const [newEmail, setNewEmail] = useState("");
    const [newNickName, setNewNickName] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newGoodReads, setNewGoodReads] = useState("");



    function deleteUser(e) {

        async function fetchData() {
            const response = await fetch(`http://localhost/leer-te-server/public/index.php/user/delete`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            })
            const data = await response.json();

            if (response.ok) {
                console.log("USERELIMINADO");
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
            const response = await fetch(`http://localhost/leer-te-server/public/index.php/user/edit`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify({ email: newEmail, nickName: newNickName, password: newPassword, GoodReads: newGoodReads })

            })
            const data = await response.json();

            console.log(data);


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
                        <div>
                            <label>GoodReads</label>
                            <input value={newGoodReads} onChange={(e) => setNewGoodReads(e.target.value)} type='text' className='input' />
                        </div>
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
