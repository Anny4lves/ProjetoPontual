import React, { useEffect, useState } from 'react';
import './AlunosTurma.css';
import Rodape from '../../../Footer/Rodape';
import { useNavigate } from 'react-router-dom';
import HeaderMatutino from './HeaderMatutino';


const transformarDados = (dados) => {
  return dados.map(discente => ({
    nomeDiscente: discente.nomeDiscente,
    anoSerie: discente.anoSerie.toUpperCase().replace("ANO", "SÉRIE "), // 
    turmaDiscente: discente.turmaDiscente.toUpperCase().replace("TURMAA", "TURMA A"), // 
    turnoDiscente: discente.turnoDiscente.charAt().toUpperCase() + discente.turnoDiscente.slice(1) //
  }));
};


const AlunosTurma = () => {

  const navigate = useNavigate();
  
  const [discentes, setDiscentes] = useState([]);
  
  const keys = ['ano6', 'ano7', 'ano8', 'ano9', 'ano1', 'ano2', 'ano3'];
  
  useEffect(() => {
    // Consulta o localStorage
    const todosDados = keys.reduce((acc, key) => {
      const resultado = localStorage.getItem(key);
      if (resultado !== null) {
        try {
          const dados = JSON.parse(resultado);
          const dadosTransformados = transformarDados(dados);
          return acc.concat(dadosTransformados);
        } catch (error) {
          console.error(`Erro ao transformar dados para a chave ${key}:`, error);
        }
      } else {
        console.warn(`Nenhum dado encontrado no localStorage para a chave "${key}".`);
      }
      return acc;
    }, []);

    setDiscentes(todosDados);
    console.log(todosDados);
  }, []);

  return (
    <div className='container-turmas-matutino'>
      <HeaderMatutino />
      <div className="optionsTurmas">
        <div className='containerOptionsTurmas'>
            <h1 className='titleLista'>Lista de Alunos</h1>
            <div className='blocosOpcoes'>
                <Table data={discentes} />
            </div> 
        </div>
      </div>

      <Rodape />
    </div>
  )
}

/**
 * Componente Table
 */
const Table = ({ data }) => {
  
  const navigate = useNavigate();

  return (
    <table className="tabelaAlunos">
      <thead>
        <tr>
          <th>Nome do Aluno</th>
          <th>Série do Aluno</th>
          <th>Turma do Aluno</th>
          <th>Turno do Aluno</th>
        </tr>
      </thead>
      <tbody>
        {data.map((aluno, index) => (
          <tr key={index}>
            <td id='linkPerfilAluno' onClick={()=> navigate('/turmas-fundamental-matutino/lista-alunos/perfil-aluno')}>{aluno.nomeDiscente}</td>
            <td>{aluno.anoSerie}</td>
            <td>{aluno.turmaDiscente}</td>
            <td>{aluno.turnoDiscente}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AlunosTurma;
