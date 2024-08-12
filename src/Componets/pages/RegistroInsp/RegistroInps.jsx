import React, { useState }from 'react'
import './RegistroInsp.css'
import { useNavigate } from 'react-router-dom'


const RegistroInps = () => {

  /* UTILIZAÇÃO DE ROTAS COM USENAVIGATE */
    const navigate = useNavigate()


  return (
    <div className='cadInsp1'>
      <div className="lateralCadInsp">
        <div className='btnInicio'onClick={()=> navigate('/turmas')}>HOME</div>
        <div className='areaLogo'>
          <img src="/public/img/WhatsApp_Image_2024-08-03_at_22.37.48-copia-removebg-preview.png" alt="" />
        </div>
        <div className='areaRegistro'>REGISTRE AQUI!
          <p>Cadastre os dados</p>
        </div>
        <div className='tdsDireitos'>Todos os direitos reservados.</div>
      </div>

        
      <div className="camposDadosInsp">
          <div className='fotoPerfil'>
            <img id='imgInsp' src="public/img/icon-inspetor.png" alt="" />
          </div>
          <div className='inputNome'>Nome Completo:</div>
            <input type="text" placeholder='Insira seu nome completo'/>

          
          <div className='inputEmail'>E-mail:</div>
          <input type="text" placeholder='Insira seu e-mail'/>
          
          <div className='inputSenha'>Senha:</div>
          <input type="password" placeholder='Insira sua senha'/>
             
          <button className="btnCadastrar" type="submit">Cadastrar</button> 
      </div>
    </div>
  )
}

export default RegistroInps;
