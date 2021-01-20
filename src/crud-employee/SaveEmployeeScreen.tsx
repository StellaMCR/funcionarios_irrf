import React from 'react'
import { useParams } from 'react-router-dom';

/**
 * Tela para criar ou editar um funcionário
 * Desenvolvida assim para atender ao requesito de uso do Router
 * Para uma melhor usabilidade essas ações poderiam estar 
 * em um modal ou drawer
 */
 export default function SaveEmployeeScreen() {

    const employeeId = useParams<{id?: string}>()


    return (
      <div>
          {employeeId.id}
      </div>
    );
}