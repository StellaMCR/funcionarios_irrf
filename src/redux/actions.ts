import { Employee } from '../interfaces/Employee'
import { CREATE_EMPLOYEE, DELETE_EMPLOYEE, EDIT_EMPLOYEE } from './actionTypes'

export const editEmployee = (empl: Employee) => ({
  type: EDIT_EMPLOYEE,
  payload: { ...empl }
})

export const createEmployee = (empl: Employee) => ({
  type: CREATE_EMPLOYEE,
  payload: { ...empl }
})

export const deleteEmployee = (cpf: string) => ({
  type: DELETE_EMPLOYEE,
  payload: { cpf }
})
