import axios from 'axios';
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/login.css'
const Login = () => {
    const navigate = useNavigate();
    const [Email, setEmail] = useState("");
    const [password, setpassword] = useState("");

    const handleOnClickLogin = () => {
        axios.post('https://reqres.in/api/login', {
            email: Email,
            password: password
        })
            .then((response) => {


                localStorage.setItem('token', response.data.token);
                navigate('/')
            })
            .catch((error) => {
                alert("Incorrect email or password");
                console.log(error)
            })
    }
    const emailInput = useRef<HTMLInputElement | null>(null)
    const passwordInput = useRef<HTMLInputElement | null>(null)
    const handleOnChangeEmail = () => {
        setEmail(emailInput.current?.value)
    }
    const handleOnchangePassword = () => {
        setpassword(passwordInput.current?.value)
    }
    return (



        <div className="mainLogin">
            <div className="login">
                <div className="email">
                    <input ref={emailInput} type="email" onChange={handleOnChangeEmail} />
                </div>
                <div className="password">
                    <input type="password" ref={passwordInput} onChange={handleOnchangePassword} />
                </div>
                <div className="submit" >
                    <button onClick={handleOnClickLogin}> Login</button>
                </div>
            </div>
        </div>




    )
}

export default Login