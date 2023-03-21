import React, { useEffect, useRef, useState } from "react";

const Login = (props) => {

    const [userName, setUserName] = useState('');
    const [pass, setPass] = useState('');
    const passRef = useRef();

    useEffect(() => {
        console.log('EFFECT 1');
    }, [])

    useEffect(() => {
        console.log('EFFECT 2');
        const timeoutId = setTimeout(() => {
           console.log('timeout'); 
        }, 500);

        return () => {
            clearTimeout(timeoutId);
        }
    }, [userName]);

    console.log(userName);

    const usernameOnChangeHandler = (event) => {
        //console.log(event.target.value);
        // setUserName((prevState) => {
        //     console.log(prevState);
        //     return console.log(event.target.value);
        // });
        setUserName(event.target.value);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log('passRef.current.value');
        setPass(passRef.current.value);
    }

    return <form onSubmit={formSubmitHandler}>
        <div>
            <label>Username</label>
            <input type="text" onChange={usernameOnChangeHandler}></input>
        </div>
        <div>
            <label>Pass</label>
            <input type="password" ref={passRef}></input>
        </div>
        <button type="submit">Login</button>
    </form>
}

export default Login;