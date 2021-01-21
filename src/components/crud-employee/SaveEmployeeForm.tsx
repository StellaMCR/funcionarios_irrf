import { Box, Grid, TextField } from '@material-ui/core'
import React from 'react'

interface ISaveEmployeeFormProps {}

/**
 * Formulário para edição e criação de um funcionário
 */
export function SaveEmployeeForm(props: ISaveEmployeeFormProps): JSX.Element {
    return (
        <Box margin={10} justifyContent={'center'}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
                required
                id="outlined-required"
                label="Nome"
                variant="outlined"
              />
          </Grid>
          <Grid item xs={6}>
            <TextField
                required
                id="outlined-required"
                label="Cpf"
                variant="outlined"
              />
          </Grid>
          <Grid item xs={6}>
            <TextField
                required
                id="outlined-required"
                label="Salário bruto"
                variant="outlined"
              />
          </Grid>

          <Grid item xs={6}>
              <TextField
                required
                id="outlined-required"
                label="Desconto da previdência"
                type="number"
                variant="outlined"
              />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="outlined-required"
              label="Número de dependentes"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid>
        </Grid>

      </Box>
        )
}