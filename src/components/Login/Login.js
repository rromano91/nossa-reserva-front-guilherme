import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import LoginForm from './LoginForm';
import LoginPasswordLost from './LoginPasswordLost';
import CadastrarUsuario from './CadastrarUsuario';
import styles from './Login.module.css'

const Login = () => {

    const { login } = React.useContext(UserContext);
    if(login === true) {
        return <Navigate to="/conta" />
    }

    return  (
        <section className={styles.login}>
            <div className={styles.forms}>
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    <Route path="/perdeu" element={<LoginPasswordLost />} />
                    <Route path="/cadastrarusuario" element={<CadastrarUsuario />} />
                </Routes>
            </div>
        </section>
    )
    
};

export default Login;