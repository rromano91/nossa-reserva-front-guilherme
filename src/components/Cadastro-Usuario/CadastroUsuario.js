import React from 'react';
import { Navigate } from 'react-router-dom';
import { CONDOMINIO_POST } from '../../Api';
import CondominioForm from '../../Hooks/CondominioForms';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import style from './CadastroUsuario.module.css';

const CadastroUsuario = () => {

    const nomeusuario = CondominioForm();
    const endereco = CondominioForm();
    const senha = CondominioForm();

    async function handleSubmit(event) {
        event.preventDefault();
        console.log('Usuário');
        console.log(nomeusuario.value);
        const {url, options} = CONDOMINIO_POST({
            nome: nomeusuario.value

        })
        const response = await fetch(url, options);
        console.log(url);
        console.log(response);
        console.log(options);
    }

    return (
        <section className={style.cadastrar}>
            <div className={style.forms}>
                <h1 className="title">Cadastrar Usuário</h1>
                <form onSubmit={handleSubmit}>
                    <Input label="Nome de usuário" type="text" name="nomeusuario" {...nomeusuario}/>
                    <Input label="Endereço" type="text" name="endereco" {...endereco}/>
                    <Input label="Senha" type="text" name="senha" {...senha}/>
                    <Button>Cadastrar</Button>
                </form>
            </div>
        </section>
    )
}

export default CadastroUsuario;