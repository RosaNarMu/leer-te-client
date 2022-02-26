import { useNavigate } from "react-router";
import { useState, useContext } from "react";
import UseContextGeneral from "../UseContext";

export default function Login() {

    const { authenticate } = useContext(UseContextGeneral);

    const navigate = useNavigate();
    function login() {

        /* authenticate();
        navigate('/userprofile', {
            replace: true
        }); */


    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailReg, setEmailReg] = useState("");
    const [nickNameReg, setNickNameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("")

    const { token, setToken } = useContext(UseContextGeneral);

    /* const [token, setToken] = useState({}); */

    function validateFormLog() {
        return email.length > 0 && password.length > 0;
    }

    function validateFormReg() {

        return emailReg.length > 0 && passwordReg.length > 0 && nickNameReg.length > 0;

    }

    function submitLogin(event) {

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
                authenticate();
                navigate('/', {
                    replace: true
                });

                localStorage.setItem('UserToken', token.token);

            }
        }
        fetchData();
        event.preventDefault();

        /*  if (token.length > 1) {
             authenticate();
             navigate('/userprofile', {
                 replace: true
             });
         } */
    }

    function submitRegister(event) {

        async function fetchData() {
            const registerResponse = await fetch('http://localhost/leer-te-server/public/index.php/user/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: '{"nickName":"' + nickNameReg + '","email":"' + emailReg + '","password":"' + passwordReg + '"}'
            })
            const data = await registerResponse.json();
            console.log(data);
            console.log("lgooin");

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
                            <input /* ref={ref} */ type='email' className='input' value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label >Contraseña</label>
                            <input /* ref={ref} */ type='password' className='input' value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className='btn' type="submit" disabled={!validateFormLog()}>¡A leer!</button>
                    </form>
                </div>
                <div className='login-div-right-register'>
                    <form onSubmit={submitRegister} className='login-div-right-register-form'>
                        <h2>Regístrate</h2>
                        <div>
                            <label >Email</label>
                            <input /* ref={ref} */ type='email' className='input' value={emailReg}
                                onChange={(e) => setEmailReg(e.target.value)} />
                        </div>
                        <div>
                            <label >Nombre de usuario</label>
                            <input /* ref={ref} */ type='text' className='input' value={nickNameReg}
                                onChange={(e) => setNickNameReg(e.target.value)} />
                        </div>
                        <div>
                            <label >Contraseña</label>
                            <input /* ref={ref} */ type='password' className='input' value={passwordReg}
                                onChange={(e) => setPasswordReg(e.target.value)} />
                        </div>
                        <button className='btn' type="submit" disabled={!validateFormReg()}>¡Comienza tu aventura!</button>
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
