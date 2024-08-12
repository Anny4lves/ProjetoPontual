import React, { createContext, useState } from 'react';
import AlunosTurma from '../Componets/pages/RegistrosDisc/ExibeTurmas/GrupoTurmas/AlunosTurma';

export const ContextoDiscentes = createContext();

export const ProvisaoDiscentes = ({ children }) => {
    const [discentes, setDiscentes] = useState([]);
    
    const addDiscente = (discente) => {
      setDiscentes([...discentes, discente]);
    };
    
    return (
        <ContextoDiscentes.Provider value={{ discentes, addDiscente }}>
      {children}
    </ContextoDiscentes.Provider>
  );
}

