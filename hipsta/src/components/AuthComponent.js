import React, { useState} from "react";
import { connect } from "react-redux";
import {actionLogin, actionRegister} from "../actions/ActionAuth";



export const RegisterForm = ({ onLogin }) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    return (
        <>
            <input value={login} onChange={(e) => setLogin(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={() => onLogin(login, password)}>Register</button>
        </>
    );
};
const LoginForm = ({ onLogin }) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    return (
        <>
            <input value={login} onChange={(e) => setLogin(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={() => onLogin(login, password)}>Login</button>
        </>
    );
};

const CRegisterForm = connect(null, { onLogin: actionRegister })(RegisterForm);
// export const CLoginForm = connect(null, { onLogin: actionLogin })(LoginForm);

export const PageRegistration = () => (
    <div>
        <h1>Registration</h1>
        <CRegisterForm />
    </div>
);


// export const PageLogin = () => (
//     <div>
//         <h1>Login</h1>
//         <CLoginForm />
//     </div>
// );

