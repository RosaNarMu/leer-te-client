import { useNavigate } from "react-router";
import { useState, useContext } from "react";
import UseContextGeneral from "../UseContext";

export default function Login({ authenticate }) {
    const navigate = useNavigate();
    function login() {

        /* authenticate();
        navigate('/userprofile', {
            replace: true
        }); */


    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { token, setToken } = useContext(UseContextGeneral);

    /* const [token, setToken] = useState({}); */

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleLogin(event) {

        async function fetchData() {
            const loginResponse = await fetch('http://localhost/leer-te-server/public/index.php/api/login_check', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: '{"username":"' + email + '","password":"' + password + '"}'
            })
            const token = await loginResponse.json();
            setToken(token.token);

            console.log(token);
            if (loginResponse.ok) {
                /* authenticate(); */
                navigate('/userprofile', {
                    replace: true
                });

                localStorage.setItem('UserToken', token.token);
                localStorage.setItem('Authenticated', true)
            }
        }
        fetchData();
        event.preventDefault();

        console.log(token.length > 1);

        /*  if (token.length > 1) {
             authenticate();
             navigate('/userprofile', {
                 replace: true
             });
         } */
    }


    return (
        <div className='login-div-wrapper'>
            <main className='login-div-main'>
                <div className='login-div-left-login'>
                    <form onSubmit={handleLogin} className='login-div-left-login-form'>
                        <h2>Inicia sesión</h2>
                        <div>
                            <label >Email</label>
                            <input /* ref={ref} */ type='email' className='input' value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label >Contraseña</label>
                            <input /* ref={ref} */ type='password' className='input' value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className='btn' type="submit" disabled={!validateForm()}>¡A leer!</button>
                    </form>
                </div>
                <div className='login-div-right-register'>
                    <form onSubmit={login} className='login-div-right-register-form'>
                        <h2>Regístrate</h2>
                        <div>
                            <label >Email</label>
                            <input /* ref={ref} */ type='text' className='input' />
                        </div>
                        <div>
                            <label >Nombre de usuario</label>
                            <input /* ref={ref} */ type='text' className='input' />
                        </div>
                        <div>
                            <label >Contraseña</label>
                            <input /* ref={ref} */ type='password' className='input' />
                        </div>
                        <button className='btn' type="submit" >¡Comienza tu aventura!</button>
                    </form>
                </div>



            </main>

            <div className='login-div-bottom'>
                <span>¡Encuentra tu próxima lectura o escribie tu primer micro-relato en
                    menos de lo que tardas en tomarte un té! </span>
            </div>
        </div>
    )
}

{/* <form style={formStyle} onSubmit={handleSubmit} >
    <div>
        <label style={labelStyle} >{label}</label>
        <input ref={ref} type={type} style={inputStyle} />
      </div>
    <Field ref={passwordRef} label="Password:" type="password" />
    <div>
        <button style={submitStyle} type="submit">Submit</button>
    </div>
</form> */}
