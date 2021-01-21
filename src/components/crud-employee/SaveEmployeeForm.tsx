import { Box, Button, Grid, TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation, useParams } from 'react-router-dom'

import { Employee } from '../../interfaces/Employee'
import { createEmployee, editEmployee } from '../../redux/actions'
import { RootState } from '../../redux/reducers/rootReducer'


interface ISaveEmployeeFormProps {
  initialValues?: Employee
}

const EMPTY_FORM = {
  name: undefined,
  cpf: undefined,
  salary: undefined,
  discount: undefined,
  dependents: undefined
}

/**
 * Formulário para edição e criação de um funcionário
 */
export function SaveEmployeeForm (props: ISaveEmployeeFormProps) {
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const history = useHistory()
  const { id } = useParams<{id:string}>()
  const empl = useSelector((state: RootState) => id ? state.employees.empls[id] : undefined)
  const [formState, setFormState] = useState<Employee>(EMPTY_FORM)

  function onFormSubmit () {
    if (pathname === '/create') { dispatch(createEmployee(formState)) } else {
      console.log('edit esle', formState)
      dispatch(editEmployee(formState))
    }
    history.push('/list')
  }

  useEffect(() => {
    if (empl) { setFormState(empl) }
  }, [empl])


  return (
        <Box margin={10} justifyContent={'center'}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
            fullWidth
                value={formState.name}
                required
                id="outlined-required"
                label="Nome"
                variant="outlined"
                onChange={(event) => setFormState({ ...formState, name: event.target.value })}
              />
          </Grid>
          <Grid item xs={6}>
            <TextField
            fullWidth
                value={formState.cpf}
                required
                id="outlined-required"
                label="Cpf"
                variant="outlined"
                onChange={(event) => setFormState({ ...formState, cpf: event.target.value })}
              />
          </Grid>
          <Grid item xs={6}>
            <TextField
            fullWidth
                value={formState.salary}
                required
                id="outlined-required"
                label="Salário bruto"
                variant="outlined"
                onChange={(event) => setFormState({ ...formState, salary: +event.target.value })}
              />
          </Grid>

          <Grid item xs={6}>
              <TextField
              fullWidth
                value={formState.discount}
                required
                id="outlined-required"
                label="Desconto da previdência"
                type="number"
                variant="outlined"
                onChange={(event) => setFormState({ ...formState, discount: +event.target.value })}
              />
          </Grid>
          <Grid item xs={6}>
            <TextField
            fullWidth
              value={formState.dependents}
              required
              id="outlined-required"
              label="Número de dependentes"
              type="number"
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
              onChange={(event) => setFormState({ ...formState, dependents: +event.target.value })}
            />
          </Grid>
        </Grid>
        <Box marginTop={5} paddingBottom={5}>
            <Button
            variant="contained"
            color="primary"
            onClick={onFormSubmit}
            >
              Salvar
            </Button>
          </Box>
      </Box>
  )
}
