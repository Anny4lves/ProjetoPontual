import React from 'react';
import Login from './Componets/pages/Home/Login';
import './App.css'
import Rodape from './Componets/pages/Footer/Rodape';
import Cadastro from './Componets/pages/AcessLogin/Cadastro';
import RegistroDisc from './Componets/pages/RegistrosDisc/RegistroDisc';
import RegistroInps from './Componets/pages/RegistroInsp/RegistroInps';
import TelaLogin from './Componets/pages/Login/TelaLogin';
import AppRoutes from './Routes/Routes';
import { ProvisaoDiscentes } from './ContextosEstudantes/ContextoDiscentes';



const App = () => {
  return (
    <ProvisaoDiscentes>
    <div className='App'>
      <AppRoutes />
    </div>
    </ProvisaoDiscentes>
  );
}


/* <RegistroDisc /> 
<RegistroInps /> 
*/
export default App

