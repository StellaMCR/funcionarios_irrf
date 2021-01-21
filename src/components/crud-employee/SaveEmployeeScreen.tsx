import { Container, Paper, Typography } from '@material-ui/core'
import React from 'react'

import { SaveEmployeeForm } from './SaveEmployeeForm'


/**
 * Tela para criar ou editar um funcionário
 * Desenvolvida assim para atender ao requesito de uso do Router
 * Para uma melhor usabilidade essas ações poderiam estar
 * em um modal ou drawer
 */
export default function SaveEmployeeScreen () {
  return (
      <Container style={{ marginTop: '20px', padding: '10px' }}>
        <Paper>
        <Container style={{ width: '100%', paddingTop: '10px', display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h4" gutterBottom>
               Dados do funcionário
            </Typography>
        </Container>
          <SaveEmployeeForm/>
        </Paper>
      </Container>
  )
}
