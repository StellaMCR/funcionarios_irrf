import { Box, Button, Grid, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Employee } from '../../interfaces/Employee'
import { CREATE_EMPLOYEE } from '../../redux/actionTypes'








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

  const [formState, setFormState] = useState<Employee>(EMPTY_FORM)

  function onFormSubmit () {
    console.log(formState)
    dispatch({ type: CREATE_EMPLOYEE, payload: formState })
    setFormState(EMPTY_FORM)
  }

  return (
        <Box margin={10} justifyContent={'center'}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
                required
                id="outlined-required"
                label="Nome"
                variant="outlined"
                onChange={(event) => setFormState({ ...formState, name: event.target.value })}
              />
          </Grid>
          <Grid item xs={6}>
            <TextField
                required
                id="outlined-required"
                label="Cpf"
                variant="outlined"
                onChange={(event) => setFormState({ ...formState, cpf: event.target.value })}
              />
          </Grid>
          <Grid item xs={6}>
            <TextField
                required
                id="outlined-required"
                label="Salário bruto"
                variant="outlined"
                onChange={(event) => setFormState({ ...formState, salary: +event.target.value })}
              />
          </Grid>

          <Grid item xs={6}>
              <TextField
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
        <Grid item xs={12} spacing={3}>
            <Button
            variant="contained"
            color="primary"
            onClick={onFormSubmit}
            >
              Criar
            </Button>
          </Grid>
      </Box>
  )
}
