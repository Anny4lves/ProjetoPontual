import React, { useState, useContext }from 'react'
import './RegistroDisc.css'
import { useNavigate } from 'react-router-dom'


const RegistroDisc = () => {

    /* UTILIZAÇÃO DE ROTAS COM USENAVIGATE */
    const navigate = useNavigate()

  
   /* ESCOLHA DO NOME */
   const [nomeDiscente, setNomeDiscente] = useState('');
   
   /* ESCOLHA DA SÉRIE */
   const [anoSerie, setAnoSerie] = useState('');
   
   /* ESCOLHA DA TURMA */
   const [turmaDiscente, setTurmaDiscente] = useState('');
   
   /* ESCOLHA DO TURNO */
   const [turnoDiscente, setTurnoDiscente] = useState('');
  
  const armazenar = () => {
    // Objeto com o novo cadastro
    const novoCadastro = {
      nomeDiscente: nomeDiscente,
      anoSerie: anoSerie,
      turmaDiscente: turmaDiscente,
      turnoDiscente: turnoDiscente
    };

    // Pega os dados que já estavam cadastrados
    let dados = localStorage.getItem(anoSerie);
    
    if(dados == null){
      // Se não tinha nenhum dado, começa uma lista vazia
      dados = [];
    }
    else{
      // Se tinha algum dado, converte de JSON para um objeto javascript
      dados = JSON.parse(dados);
    }

    // Adiciona o novo dado à lista
    dados.push(novoCadastro);

    // Guarda no localstorage para poder acessar na outra página
    localStorage.setItem(anoSerie, JSON.stringify(dados));
  }



  return (
    <div className='cadDisc1'>
      <div className="lateralCadDisc">
        <div className='btnInicio' onClick={()=> navigate('/turmas')}>Voltar</div>
        <div className='areaLogo'>
          <img id='areaLogoImg' src="/public/img/WhatsApp_Image_2024-08-03_at_22.37.48-copia-removebg-preview.png" alt="" />
        </div>
        <div className='areaRegistro'>REGISTRE AQUI!
          <p>Cadastre os dados</p>
        </div>
        <div className='tdsDireitos'>Todos os direitos reservados.</div>
      </div>

      {/* inicio do formulario */}
      <form>
      <div className="camposDadosDisc">
          <div className='fotoPerfil'>
            <img id='imgRegistroDisc' src="public/img/icon-aluno.png" alt="" />
          </div>
          <div className='inputNome'>Nome Completo:</div>
            <input className='inputInsert' type="text" placeholder='Insira seu nome completo' value={nomeDiscente} onChange={(e) => setNomeDiscente(e.target.value)} required />
            <div className="selectSerie">
            <div className='inputSerie' >Série:</div>
            <div className='inputTurma' >Turma:</div>
              <select id="serie" value={anoSerie} onChange={(e) => setAnoSerie(e.target.value)} required>
                  <option value="">Selecione o Ano da Série:</option>
                  <option value="ano6">6º Ano</option>
                  <option value="ano7">7º Ano</option>
                  <option value="ano8">8º Ano</option>
                  <option value="ano9">9º Ano</option>
                  <option value="ano1">1º Ano</option>
                  <option value="ano2">2º Ano</option>
                  <option value="ano3">3º Ano</option>
              </select>

            <select id="turma" value={turmaDiscente} onChange={(e) => setTurmaDiscente(e.target.value)} required >
              <option value="">Selecione a Turma:</option>
              <option value="turmaA">TURMA A</option>
              <option value="turmaB">TURMA B</option>
              <option value="turmaC">TURMA C</option>
              <option value="turmaD">TURMA D</option>
              <option value="turmaE">TURMA E</option>
              <option value="turmaF">TURMA F</option>
            </select>
          </div>
            
          <div className="selectTurno">
          <div className='inputTurno'>Turno:</div>
            <select id='turno' value={turnoDiscente} onChange={(e) => setTurnoDiscente(e.target.value)} required >
              <option value="">Selecione o Turno</option>
              <option value="matutino">MATUTINO</option>
              <option value="vespertino">VESPERTINO</option>
            </select>
            </div>  

          <button className="btnCadastrar" type="submit" onClick={()=> armazenar()}>Cadastrar</button>
          
              
      </div>
      </form>
    </div>
  )
}

export default RegistroDisc;
