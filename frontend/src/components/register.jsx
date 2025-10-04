import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";


const Register = () => {
   const [name,setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const [error, setError] = useState("");

   const navigate = useNavigate();

   const registerUser = async() => {
       if (email !== "" && email.trim() !== "" && password !== "" && password.trim() !== "" 
           && name !== "" && name.trim() !== "" && confirmPassword !== "" && confirmPassword.trim() !== "") 
       {
           if(password === confirmPassword) {
               const data = {name,email,password};
               const api_url = "";
               const res = await axios.post(api_url,data);
               if(res.data.success) {
                   navigate("/");
               }
           }
           else {
               setError("Password and Confirm password should be same");
           }
       }   
       else {
          setError("Please enter all fields");
       }
   } 
   return <>
        <div>
           Name <input type="text" placeholder="enter name" value={name} onChange={(e) => setName(e.target.value)} /> <br /><br />
           Email <input type="email" placeholder="enter email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br /><br />
           Password <input type="text" placeholder="enter password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
           Confirm Password <input type="text" placeholder="enter password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /><br /><br />
           <br/>
           <button onClick={registerUser}>Register</button> <br/><br/>
           <span>
              If already registered then 
              <Link to="/">Login</Link>
           </span>
        </div>
   </>
}

export default Register;