import { useNavigate } from "react-router";
import { useState, useContext } from "react";
import UseContextGeneral from "../UseContext";
import { LOGIN, REGISTER } from "../etc/config";
import jwt_decode from "jwt-decode";


export default function Login() {

    const { authenticate, setAdmin } = useContext(UseContextGeneral);

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailReg, setEmailReg] = useState("");
    const [nickNameReg, setNickNameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("")

    const { setToken } = useContext(UseContextGeneral);

    const [checkLogin, setCheckLogin] = useState(false);

    function validateFormLog() {
        return email.length > 0 && password.length > 0;
    }

    function validateFormReg() {
        return emailReg.length > 0 && passwordReg.length > 0 && nickNameReg.length > 0;
    }

    function submitLogin(event) {


        async function fetchData() {
            const loginResponse = await fetch(LOGIN, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: email, password: password })
            })
            const token = await loginResponse.json();
            setToken(token.token);

            if (!loginResponse.ok) {
                setCheckLogin(true);
            }

            let decoded = jwt_decode(token.token);

            const isAdmin = decoded.roles.includes('ROLE_ADMIN');

            if (loginResponse.ok) {
                authenticate();

                navigate('/', {
                    replace: true
                });

                localStorage.setItem('UserToken', token.token);

                if (isAdmin) {
                    localStorage.setItem('admin', true);
                    setAdmin(true);
                }
            }
        }
        fetchData();
        event.preventDefault();
    }

    function submitRegister(event) {

        async function fetchData() {
            const registerResponse = await fetch(REGISTER, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nickName: nickNameReg, email: emailReg, password: passwordReg })
            })
            const data = await registerResponse.json();
            console.log(data);

            if (registerResponse.ok) {
                setEmailReg('');
                setNickNameReg('');
                setPasswordReg('');
                navigate('/login', {
                    replace: true
                });
            }
        }
        fetchData();
        event.preventDefault();
    }


    return (
        <div className='login-div-wrapper'>
            <main className='login-div-main'>
                <div className='login-div-left-login'>
                    <form onSubmit={submitLogin} className='login-div-left-login-form'>
                        <h2>Inicia sesión</h2>
                        <div>
                            <label >Email</label>
                            <input type='email' className='input' value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label >Contraseña</label>
                            <input type='password' className='input' value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className='btn' type="submit" disabled={!validateFormLog()}>¡A leer!</button>
                    </form>

                    {checkLogin && (<span className="invalid-form-message">Parece que tu correo o contraseña no son válidos</span>)}
                </div>
                <div className='login-div-right-register'>
                    <form onSubmit={submitRegister} className='login-div-right-register-form'>
                        <h2>Regístrate</h2>
                        <div>
                            <label >Email</label>
                            <input type='email' className='input' value={emailReg}
                                onChange={(e) => setEmailReg(e.target.value)} />
                        </div>
                        <div>
                            <label >Nombre de usuario</label>
                            <input type='text' className='input' value={nickNameReg}
                                onChange={(e) => setNickNameReg(e.target.value)} />
                        </div>
                        <div>
                            <label >Contraseña</label>
                            <input type='password' className='input' value={passwordReg}
                                onChange={(e) => setPasswordReg(e.target.value)} />
                        </div>

                        <button className='btn' type="submit" disabled={!validateFormReg()}>¡Comienza tu aventura!</button>
                    </form>

                    {!validateFormReg() && (<span className="reminder-form-message">Recuerda rellenar todos los campos para completar el registro</span>)}
                </div>



            </main>

            <div className='login-div-bottom'>
                <span>¡Encuentra tu próxima lectura o escribie tu primer micro-relato en
                    menos de lo que tardas en tomarte un té! </span>
            </div>
        </div>
    )
}

