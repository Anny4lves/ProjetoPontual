import React from 'react'
import Login from '../Home/Login'
import TelaLogin from '../Login/TelaLogin'
import Cadastro from '../AcessLogin/Cadastro'
import Rodape from '../Footer/Rodape'

const PaginaHome = () => {
  return (
    <div>
        <Login />
        <Cadastro />
        <Rodape />
    </div>
  )
}

export default PaginaHome
