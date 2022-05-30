import React from 'react';
import { Navigate } from 'react-router-dom';
import { CONDOMINIO_POST } from '../../Api';
import CondominioForm from '../../Hooks/CondominioForms';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import style from './CadastrarAreaComum.module.css';

const CadastrarAreaComum = () => {

    const areacomum = CondominioForm();
    const reservamensalporpessoa = CondominioForm();
    const horariofuncionamento = CondominioForm();
    const fotoespaco = CondominioForm('url');

    async function handleSubmit(event) {
        event.preventDefault();
        console.log('Área Comum');
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
                <h1 className="title">Cadastrar Área Comum</h1>
                <form onSubmit={handleSubmit}>
                    <Input label="Nome do espaço" type="text" name="areacomum" {...areacomum}/>
                    <Input label="Limite mensal de reservas por pessoa" type="text" name="reservamensalporpessoa" {...reservamensalporpessoa}/>
                    <Input label="Horário de funcionamento" type="text" name="horariofuncionamento" {...horariofuncionamento}/>
                    <p className='txt-any'>Foto do espaço
                    <button className='btn-upload'> Upload </button></p>
                    <Button>Cadastrar</Button>
                </form>
            </div>
        </section>
    )
}

export default CadastrarAreaComum;