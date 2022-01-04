import React from 'react'

export default function UserInfoUpdate() {
    return (
        <section className='userInfoUpdate-div-wrapper'>
            <h2>¿Ha cambiado algo en tu perfil? ¡Actualiza la información aquí!</h2>

            <form /* onSubmit={} */ >
                <section className='userInfoUpdate-div-form'>

                    <section className='userInfoUpdate-div-left-form'>
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
                    </section>
                    <section className='userInfoUpdate-div-right-form'>
                        <div>
                            <label >Twitter</label>
                            <input /* ref={ref} */ type='text' className='input' />
                        </div>
                        <div>
                            <label >Facebook</label>
                            <input /* ref={ref} */ type='text' className='input' />
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
