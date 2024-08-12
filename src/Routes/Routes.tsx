import RegistroDisc from "../Componets/pages/RegistrosDisc/RegistroDisc";
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TelaLogin from '../Componets/pages/Login/TelaLogin'
import PaginaHome from "../Componets/pages/PaginaInicial/PaginaHome";
import RegistroInsp from "../Componets/pages/RegistroInsp/RegistroInps";
import ExibeTurmas from "../Componets/pages/RegistrosDisc/ExibeTurmas/ExibeTurmas";
import ListaAlunos from "../Componets/pages/RegistrosDisc/ExibeTurmas/GrupoTurmas/PerfilAluno";
import PerfilAluno from "../Componets/pages/RegistrosDisc/ExibeTurmas/GrupoTurmas/PerfilAluno";
import AlunosTurma from "../Componets/pages/RegistrosDisc/ExibeTurmas/GrupoTurmas/AlunosTurma";


const AppRoutes = () => {
  return (
    
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<TelaLogin />} />
            <Route path="/turmas" element={<PaginaHome />} />
            <Route path="/exibe-turmas" element={<ExibeTurmas />} />
            <Route path="/cadastro0discente" element={<RegistroDisc />} />
            <Route path="/cadastro0inspetor" element={<RegistroInsp />} />
            <Route path="/turmas-fundamental-matutino/lista-alunos" element={<ListaAlunos />} />
            <Route path="/turmas-fundamental-matutino/lista-alunos/alunos-na-turma" element={<AlunosTurma />} />
            <Route path="/turmas-fundamental-matutino/lista-alunos/perfil-aluno" element={<PerfilAluno />} />
        </Routes>
      </Router>
    </div>
  )
}

export default AppRoutes;
