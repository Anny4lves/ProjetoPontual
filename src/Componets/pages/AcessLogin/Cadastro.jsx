import React from 'react'
import './Cadastro.css'
import { useNavigate } from 'react-router-dom'

const Cadastro = () => {

  const navigate = useNavigate();
  
  


  return (
    <div className='containerCadastro'>
        <div className='cadDisc'>
            <div className='iconDisc'>
              <img src="public/img/icon-aluno.png" alt="" />
            </div>
            <button className='buttonDisc' onClick={() => navigate('/cadastro0discente')}>Cadastrar Discente</button>
        </div>
        <div className='cadInsp'>
            <div className='iconInsp'>
              <img id='imgInsp' src="public/img/icon-inspetor.png" alt="" />
            </div>
            <button className='buttonInsp' type='button' onClick={()=> navigate('/cadastro0inspetor')}>Cadastrar Inspetor</button>
              
        </div>
        <div className='cadInsp'>
            <div className='iconInsp'>
              <img id='imgInsp' src="public/img/icon-turmas-removebg-preview.png" alt="" />
            </div>
            <button className='buttonInsp' type='button' onClick={()=> navigate('/exibe-turmas')}>Exibir Turmas</button>
              
        </div>
      
    </div>
  )
}

export default Cadastro
