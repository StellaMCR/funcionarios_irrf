import { Box, Container, Grid, Paper, TextField } from '@material-ui/core';
import React from 'react'
import { useParams } from 'react-router-dom';
import { SaveEmployeeForm } from './SaveEmployeeForm';

/**
 * Tela para criar ou editar um funcionário
 * Desenvolvida assim para atender ao requesito de uso do Router
 * Para uma melhor usabilidade essas ações poderiam estar 
 * em um modal ou drawer
 */
 export default function SaveEmployeeScreen() {

    const employeeId = useParams<{id?: string}>()


    return (
      <Container style={{marginTop: '20px', padding: '10px'}}>
        <Paper>
          <SaveEmployeeForm/>
          {employeeId.id}
        </Paper>
      </Container>

    );
  }
