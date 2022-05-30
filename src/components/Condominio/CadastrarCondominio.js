import React from 'react';
import { Navigate } from 'react-router-dom';
import { CONDOMINIO_POST } from '../../Api';
import CondominioForm from '../../Hooks/CondominioForms';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import style from './CadastrarCondominio.module.css'

const CadastrarCondominio = () => {

    const condominio = CondominioForm();
    const logotipo = CondominioForm('url');

    async function handleSubmit(event) {
        event.preventDefault();
        console.log('Condominio');
        console.log(condominio.value);
        console.log('url');
        console.log(logotipo.value);
        const {url, options} = CONDOMINIO_POST({
            nome: condominio.value,
            url: logotipo.value

        })
        const response = await fetch(url, options);
        console.log(url);
        console.log(response);
        console.log(options);
    }



    return (
        <section className={style.cadastrar}>
            <div className={style.forms}>
                <h1 className="title">Cadastrar Condominio</h1>
                <form onSubmit={handleSubmit}>
                    <Input label="Nome do Condominio" type="text" name="condominio" {...condominio}/>
                    <Input label="Logotipo" type="text" name="logotipo" {...logotipo}/>
                    <Button> Cadastrar </Button>
                </form>
            </div>
        </section>
    )
}

export default CadastrarCondominio;