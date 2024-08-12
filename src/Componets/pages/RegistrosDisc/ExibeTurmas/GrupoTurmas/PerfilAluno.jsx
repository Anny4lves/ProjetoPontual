import React, { useState, useEffect } from 'react'
import './PerfilAluno.css';
import HeaderMatutino from './HeaderMatutino';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const createData = (mesAluno, dias) => {
    return { mesAluno, dias: Array(dias).fill(false) };
  }

  const rows = [
    createData('AGOSTO', 31),
    createData('SETEMBRO', 30),
    createData('OUTUBRO', 31),
    createData('NOVEMBRO', 30),
    createData('DEZEMBRO', 31),
  ];



  const transformarDados = (dados) => {
    return dados.map(discente => ({
      nome: discente.nomeDiscente,
      serie: discente.anoSerie.toUpperCase().replace("ANO", "SÉRIE "),
      turma: discente.turmaDiscente.toUpperCase().replace("TURMAB", "TURMA B"), 
      turno: discente.turnoDiscente.charAt(0).toUpperCase() + discente.turnoDiscente.slice(1) // Primeira letra maiúscula
    }));
  };

const ListaAlunos = () => {

    const [discentes, setDiscentes] = useState([]);
    /**
     * Executado ao abrir a página
     */
    useEffect(() => {
      // Consulta o localStorage
      let resultado = localStorage.getItem('ano6');
  
      if(resultado != null){
        // Converte de JSON para objeto
        const dadosTransformados = transformarDados(JSON.parse(resultado));
        setDiscentes(dadosTransformados[0]);
        console.log(dadosTransformados)
      }
    }, []);

        const [attendance, setAttendance] = useState(rows);
      
        const handleCheckboxChange = (mesAlunoIndex, diaIndex) => {
          const updatedAttendance = [...attendance];
          updatedAttendance[mesAlunoIndex].dias[diaIndex] = !updatedAttendance[mesAlunoIndex].dias[diaIndex];
          setAttendance(updatedAttendance);
          
          
          const totalFaltas = updatedAttendance[mesAlunoIndex].dias.filter(diaMes => diaMes).length;
          if (totalFaltas === 3) {
              alert(`O aluno obteve 3 faltas no mês de ${updatedAttendance[mesAlunoIndex].mesAluno}. Por favor, encaminhe o aluno para a Coordenação.`);
            }
          if (totalFaltas === 4) {
              alert(`O aluno obteve 4 faltas no mês de ${updatedAttendance[mesAlunoIndex].mesAluno}. Por favor, encaminhe o aluno para a Coordenação.`);
            }
            
        }
    
 
  return (

    <div className='containerAlunos'>
      <HeaderMatutino />
      <div className="bloco1">
        <div className="bloco2">
          <div className="fotoAluno">
            <div className="nomeFotoAlunoPerfil">FOTO DO ALUNO</div>
            <div className="fotoAlunoPerfil">
              <img id='ftPerfilAluno' src="/public/img/icon-aluno.png" alt="Foto do aluno" />
            </div>
          </div>
        <div className="containerDadosAluno">
              <div className='dadosAluno'> 
                <div className='nomeSerieTurmaTurno'>Nome: {discentes.nome}</div>
                <div className='nomeSerieTurmaTurno'>Série: {discentes.serie}</div>
                <div className="nomeSerieTurmaTurno">Turma: {discentes.turma}</div>
                <div className='nomeSerieTurmaTurno'>Turno: {discentes.turno}</div>
              </div>
                </div>  
        </div>

        <div className="aviso">
          <div className="nomeMeses">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="tabela simples">
                <TableHead>
                  <TableRow>
                    <TableCell>MÊS</TableCell>
                    {[...Array(31)].map((_, index) => (
                      <TableCell align="center" key={index}>{index + 1}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {attendance.map((row, mesAlunoIndex) => (
                    <TableRow key={row.mesAluno}>
                      <TableCell component="th" scope="row">{row.mesAluno}</TableCell>
                      {row.dias.map((diaMes, diaIndex) => (
                        <TableCell align="center" key={diaIndex}>
                          <input
                          id='inputCheckBox'
                            type="checkbox"
                            checked={diaMes}
                            onChange={() => handleCheckboxChange(mesAlunoIndex, diaIndex)}
                          />
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListaAlunos
