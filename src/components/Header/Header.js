import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import {ReactComponent as TabSimbol} from '../../Assets/dogs.svg'
import { UserContext } from '../../UserContext';
import { CondominioContext } from '../../CondominioContext';

const Header = () => {
    const { getCondominio, data } = React.useContext(CondominioContext)
    getCondominio();
    console.log(data);


    return(
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
               <Link className={styles.logo} to="/">
                  <TabSimbol />
               </Link>
               {data && data['0'].nome }
               <Link className={styles.login} to="/login">
                   Login
               </Link>  
            </nav>
        </header>
    )
}

export default Header