import React from 'react';
import { Link } from 'react-router-dom'
import UseForm from '../../Hooks/UseForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import Error from '../Elementos-interface/Error';
import styles from './LoginForm.module.css';
import { UserContext } from '../../UserContext';

const LoginForm = () => {
    const username = UseForm();
    const password = UseForm();
    const {userLogin, error, loading} = React.useContext(UserContext);


    /*

    async function handleSubmit(event) {
        event.preventDefault();


        if(username.validate() && password.validate() ) {
            userLogin(username.value, password.value)
        }
    }    

   */
    

    return(
        <section className="animeLeft">
            <h1 className="title">Login</h1>
            <form className='styles.form'>
                <Input label="Usuario" type="text" name="username" {...username}/>
                <Input label="Senha" type="password" name="password" {...password}/>
                {loading ? <Button disabled>Carregando...</Button>: <Button>Entrar</Button>}
                <Error error={error} />
            </form>
            <Link className={styles.perdeu} to="/login/LoginPasswordLost">Perdeu a Senha</Link>
        </section>

    )
    
};


export default LoginForm;