import { CREATE_EMPLOYEE, DELETE_EMPLOYEE, EDIT_EMPLOYEE } from '../actionTypes'
import { EmployeeState } from '../EmployeeState'

const initialState: EmployeeState = {
  ids: ['936.938.039-60', '748.517.476-24'],
  empls:
  {
    '936.938.039-60': {
      name: 'Letícia Aurora Farias',
      cpf: '936.938.039-60',
      salary: 998,
      discount: 74.85,
      dependents: 2
    },
    '748.517.476-24': {
      name: 'Edson Thiago Drumond',
      cpf: '748.517.476-24',
      salary: 3000,
      discount: 78.38,
      dependents: 1
    }
  }
}

export function employeeReducer (state = initialState, action: any): EmployeeState {
  switch (action.type) {
    case EDIT_EMPLOYEE: {
      const { cpf } = action.payload
      return {
        ...state,
        empls: {
          ...state.empls,
          [cpf]: {
            ...action.payload
          }
        }
      }
    }
    case CREATE_EMPLOYEE: {
      const { cpf } = action.payload
      return {
        ...state,
        ids: [...state.ids, cpf],
        empls: {
          ...state.empls,
          [cpf]: {
            ...action.payload
          }
        }
      }
    }
    case DELETE_EMPLOYEE: {
      const { cpf } = action.payload
      const newIds = state.ids.filter((id) => id !== cpf)
      return {
        ...state,
        ids: newIds,
        empls: {
          ...state.empls,
          [cpf]: undefined
        }
      }
    }
    default: return state
  }
}
