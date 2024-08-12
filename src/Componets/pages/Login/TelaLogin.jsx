import React, { useState } from 'react'
import Rodape from '../Footer/Rodape'
import './TelaLogin.css'
import { useNavigate } from 'react-router-dom';

const TelaLogin = () => {
    const [userName, setUserName] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();


    const validUserName = 'eduarda.soares@inspecao.com.br'; 
    const validPassword = '123';

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(userName === validUserName && senha === validPassword){
          alert('Login realizado com sucesso!');
          navigate('/turmas');
            
        } else {
            alert('Login inválido')
        }
    }
  return (


    <div className='acessoLogin'>
        <form onSubmit={handleSubmit}>
            
      <div className="conteinerLogin">
        <div className="logoLogin">
            <img className='imgLogoLogin' src="public/img/WhatsApp_Image_2024-08-03_at_22.37.48-copia-removebg-preview.png" alt="" />
        </div>
        <div className="acessoEmailLogin">E-mail:
            <input type="email" className='inputLogin' name="" id=""  placeholder='Insira seu e-mail'
            onChange={(e) => setUserName(e.target.value)}/>
        </div>
        <div className="acessoSenhaLogin">Senha:
            <input className='inputLogin' type="password" placeholder='Insira sua senha'
            onChange={(e) => setSenha(e.target.value)}/>
        </div>
        <button className="btnAcessarLogin" type="submit">Acessar</button>
      <Rodape />
      </div>
        </form>
    </div>
  )
}

export default TelaLogin
