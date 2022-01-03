import { useNavigate } from "react-router";

export default function Login({ authenticate }) {
    const navigate = useNavigate();
    function login() {

        authenticate();
        navigate('/userprofile', {
            replace: true
        });


    }

    return (
        <div className='login-div-wrapper'>
            <main className='login-div-main'>
                <div className='login-div-left-login'>
                    <form onSubmit={login} className='login-div-left-login-form'>
                        <h2>Inicia sesión</h2>
                        <div>
                            <label >Email</label>
                            <input /* ref={ref} */ type='text' className='input' />
                        </div>
                        <div>
                            <label >Contraseña</label>
                            <input /* ref={ref} */ type='password' className='input' />
                        </div>
                        <button className='btn' type="submit" >¡A leer!</button>
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
