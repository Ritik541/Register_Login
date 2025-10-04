import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();


    const loginUser = async () => {
        if (email !== "" && email.trim() !== "" && password !== "" && password.trim() !== "") {
            const data = { email, password };
            const api_url = "";
            const res = await axios.post(api_url, data)
            if (res.data.success) {
                navigate("/profile");
            }
            setError("Invalid email or password");
        }
        else {
            setError("Please enter all fields");
        }
    }
    return <>
        <div>
            Email <input type="email" placeholder="enter email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br /><br />
            Password <input type="text" placeholder="enter password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
            <br />
            <button onClick={loginUser}>Login</button><br /><br />

            <span>If not registered yet then
                <Link to="/register">Register</Link>
            </span>
        </div>
    </>
}

export default Login;