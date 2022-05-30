import React from 'react';
import { CONDOMINIO_GET } from './Api'; //puxar o get da API

export const CondominioContext = React.createContext();

export const CondominioStorage = ({children}) => {
    const [data, setData] = React.useState(null);
    //const [condominio, setCondominio] = React.useState(null);
    const [loading, setLoading]  = React.useState(true);
    const [error, seterror] = React.useState(null);

    
    async function getCondominio() {
        const {url} = CONDOMINIO_GET();
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        console.log("CATCHAU");
        console.log(json);
        console.log("CATCHAU");

    }


    return (
        <CondominioContext.Provider value={{ getCondominio, data}}>
            {children}
        </CondominioContext.Provider>
    )
}

export default CondominioStorage