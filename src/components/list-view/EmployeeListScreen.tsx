import { Container, Paper, Typography } from '@material-ui/core'
import React from 'react'

import { EmployeesList } from './EmployeesList'


interface IEmployeeListProps {}

/**
 * Lista para exibir dados dos funcionários
 */
export function EmployeeListScreen (props: IEmployeeListProps) {
  return (
    <Container style={{ marginTop: '20px', padding: '10px' }}>
        <Paper>
        <Container style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h4" gutterBottom>
               Seus funcionários
            </Typography>
        </Container>
        <EmployeesList/>
        </Paper>
    </Container>)
}
