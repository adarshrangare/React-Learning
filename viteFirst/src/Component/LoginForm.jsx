import { useState } from "react";

function LoginForm(){
    
    let [Email, setEmail] = useState("");
    let [Password, setPassword] = useState("");

    function setDetails(e){
        e.preventDefault();
        console.log("submit");
        setEmail(email.value);
        setPassword(password.value)    
    }

    return (
        <>
        <form>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email"/> <br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password"/> <br />
            <button type="submit" onClick={setDetails}>Login</button>
        </form>
        
        <div>
            <label> Email: {Email} </label> <br />
            <label > Password: {Password}</label>
        </div>

        </>
    )
}

export default LoginForm;