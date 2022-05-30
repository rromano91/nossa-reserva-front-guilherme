import React from 'react';
import { Navigate } from 'react-router-dom';
import { CONDOMINIO_POST } from '../../Api';
import CondominioForm from '../../Hooks/CondominioForms';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import style from './HomeUser.module.css';

const HomeUser = () => {

    const areacomum = CondominioForm();
    const reservamensalporpessoa = CondominioForm();
    const horariofuncionamento = CondominioForm();
    const fotoespaco = CondominioForm('url');

    async function handleSubmit(event) {
        event.preventDefault();
        console.log('Home User');
        console.log(areacomum.value);
        console.log('url');
        console.log(fotoespaco.value);
        const {url, options} = CONDOMINIO_POST({
            nome: areacomum.value,
            url: fotoespaco.value

        })
        const response = await fetch(url, options);
        console.log(url);
        console.log(response);
        console.log(options);
    }

    return (
        <section className={style.cadastrar}>
            <div className={style.forms}>
                <h1 className="title">Condomínio Santa IFigênia</h1>
                <form onSubmit={handleSubmit}>
                    <p className='txt-any'>
                    <Button>Listar minhas reservas</Button>
                    </p>
                    <Button>Realizar nova reserva</Button>
                </form> 
            </div>
        </section>
    )
}

export default HomeUser;