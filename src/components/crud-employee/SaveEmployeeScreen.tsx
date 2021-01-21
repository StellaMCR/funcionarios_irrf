import { Container, Paper } from '@material-ui/core'
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
          <SaveEmployeeForm/>
        </Paper>
      </Container>
  )
}
