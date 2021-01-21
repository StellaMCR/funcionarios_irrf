import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../redux/reducers/rootReducer'
import { EmployeesListItem } from './EmployeesListItem'



/**
 * Tabela que mostra os dados dos funcionários
 */
export function EmployeesList () {
  const emplsState = useSelector((state: RootState) => state.employees)

  return (
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Cpf</TableCell>
              <TableCell>Salário</TableCell>
              <TableCell>Dependentes</TableCell>
              <TableCell>Desconto&nbsp;IRRF</TableCell>
              <TableCell/>
            </TableRow>
          </TableHead>
          <TableBody>
            {emplsState.ids.map((id: string) => <EmployeesListItem key={id} employee={emplsState.empls[id]}/>)}
          </TableBody>
        </Table>
  )
}
