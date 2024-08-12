import React, { useState } from 'react'
import './Login.css'


const Login = () => {

  // CONFIGURAÇÃO DO MODAL 'SOBRE NÓS'
  const [modalAberto, setModalAberto] = useState(false);

  const clicouAbrirModal = () => {
    setModalAberto(true);
  };

  const clicouFecharModal = () => {
    setModalAberto(false);
  };
  
  return (
    <div className='header'>
        <div className='logo'>
            <img src="/img/WhatsApp_Image_2024-08-03_at_22.37.48-copia-removebg-preview.png" alt="" />
        </div>
      <button className="login" type='button'></button>
      <button className="sobre-nos" onClick={clicouAbrirModal}>Sobre Nós</button>


{/* BLOCO DO MODAL "SOBRE NÓS" ABERTO */}
      {modalAberto && (
        <div className='bodyDoModal' onClick={clicouFecharModal}>
          <div className='modal-content' onClick={(e) => e.pararExibicao()}>
            <p>Bem-vindo à Pontual Sesi/Senai, sua plataforma de gerenciamento de atrasos. 
              Nossa plataforma foi desenvolvida para ajudar a empresa e indivíduos a monitorar, 
              analisar e reduzir atrasos de maneira eficiente.</p>
            <button className="fechar-modal" onClick={clicouFecharModal}>Fechar</button>
          </div>
        </div>
      )}


    </div>
  )
}

export default Login
