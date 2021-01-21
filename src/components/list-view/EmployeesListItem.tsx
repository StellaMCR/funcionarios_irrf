import { IconButton, TableCell, TableRow } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/DeleteOutlineRounded'
import EditIcon from '@material-ui/icons/EditRounded'
import React from 'react'
import { useHistory } from 'react-router-dom'

import { Employee } from '../../interfaces/Employee'
import { calculateBaseSalary, calculateIRRFDiscount } from '../../TaxesHelper'



interface IListItemProps {
    employee: Employee
}

/**
 * Componente responsável por renderizar uma linha da tabela
 */
export function EmployeesListItem (props: IListItemProps) {
  const history = useHistory()

  const baseSalary = calculateBaseSalary(props.employee.salary!, props.employee.discount!, props.employee.dependents!)

  return (
        <TableRow key={props.employee.cpf}>
            <TableCell component="th" scope="row">
                {props.employee.name}
            </TableCell>
            <TableCell component="th" scope="row">
                {props.employee.cpf}
            </TableCell>
            <TableCell component="th" scope="row">
                {baseSalary}
            </TableCell>
            <TableCell component="th" scope="row">
                {props.employee.dependents}
            </TableCell>
            <TableCell component="th" scope="row">
                {calculateIRRFDiscount(baseSalary)}
            </TableCell>
            <TableCell component="th" scope="row">
                <IconButton aria-label="edit" onClick={() => history.push(`/edit/${props.employee.cpf}`)}>
                    <EditIcon />
                </IconButton>
                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </TableRow>
  )
}
