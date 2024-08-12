import React, { useState } from 'react'
import Rodape from '../../Footer/Rodape'
import './ExibeTurmas.css'
import Login from '../../Home/Login'
import { useNavigate, useSearchParams } from 'react-router-dom'
import EscolhaTurno from '../../../../Componentes-soltos/EscolhaTurno'
import HeaderMatutino from './GrupoTurmas/HeaderMatutino'

const ExibeTurmas = () => {
  

  const [turnoSelecionado, setTurnoSelecionado] = useState();
  const navigate = useNavigate();

  const exibeTurmasDoTurno = (e) => {
    setTurnoSelecionado(e.target.value);


  };
  return (
    
    <div className="geral">

    <div className='containerTurmas'>
        <HeaderMatutino />
        <EscolhaTurno />
        <div className='turmas'>
          <select name="" id="escolhasDoTurno" onChange={exibeTurmasDoTurno}>
            <option value="selectBox">Selecione o Turno</option>
            <option value="fundamental-matutino">Ensino Fundamental - Matutino</option>
            <option value="fundamental-vespertino">Ensino Fundamental - Vespertino</option>
            <option value="medio-matutino">Ensino Médio - Matutino</option>
            <option value="medio-vespertino">Ensino Médio - Vespertino</option>
          </select>
          {turnoSelecionado === 'fundamental-matutino' && (
            <div className='turmasDoTurno'>
              <button id='turmaMat' onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>6º A </button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>6º B</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>6º C</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>7º A</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>7º B</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>7º C</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>7º D</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>8º A</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>8º B</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>8º C</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>8º D</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>8º E</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>9º A</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>9º B</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>9º C</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>9º D</button>
              </div>
              
              
            )}

          {turnoSelecionado === 'fundamental-vespertino' && (
            <div className='turmasDoTurno'>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>6º D</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>6º E</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>7º E</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>7º F</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>7º G</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>8º G</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>8º F</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>9º F</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>9º G</button>
              </div>
            )}

          {turnoSelecionado === 'medio-matutino' && (
            <div className='turmasDoTurno'>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>1º A</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>1º B</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>1º C</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>1º D</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>1º E</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>2º A</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>2º B</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>2º C</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>2º D</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>2º E</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>2º F</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>3º A</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>3º B</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>3º C</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>3º D</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>3º E</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>3º F</button>
              </div>
            )}

          {turnoSelecionado === 'medio-vespertino' && (
            <div className='turmasDoTurno'>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>1º F</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>1º G</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>1º H</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>2º G</button>
              <button id='turmaMat'onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/alunos-na-turma')}>3º F</button>
              </div>
            )}

        </div>
        <Rodape />
    </div>
    </div>
  )
}

export default ExibeTurmas;

/* <button id='fundMed' className='fundamental-vespertino'>Ensino Fundamental - Vespertino</button>
<button id='fundMed' className='fundamental-matutino' onClick={()=> navigate('/turmas-fundamental-matutino')}>Ensino Fundamental - Matutino</button>
<button id='fundMed' className='medio-matutino'>Ensino Médio - Matutino</button>
<button id='fundMed' className='medio-verpertino'>Ensino Médio - Vespertino</button> */