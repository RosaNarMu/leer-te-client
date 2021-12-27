import { useNavigate } from "react-router";

export default function Login({ authenticate }) {
    const navigate = useNavigate();
    function login() {

        authenticate();
        navigate('/userprofile');

    }

    return (
        <div>
            <h2>Login</h2>
            <button onClick={login}>Login</button>
            <h2>Register</h2>
        </div>
    )
}
