import { CREATE_EMPLOYEE, DELETE_EMPLOYEE, EDIT_EMPLOYEE } from "../actionTypes";
import { EmployeeState } from "../EmployeeState";

const initialState: EmployeeState = {
    ids: [],
    empls: {}
}

export function employeeReducer(state = initialState, action: any): any {
    switch (action.type) {
        case EDIT_EMPLOYEE: {
          const { cpf } = action.payload;
          return {
            ...state,
            empls: {
              ...state.empls,
              [cpf]: {
                ...action.payload
              }
            }
          };
        }
        case CREATE_EMPLOYEE: {
        const { cpf  } = action.payload;
        return {
            ...state,
            ids: [...state.ids, cpf],
            empls: {
                ...state.empls,
                [cpf]: {
                    ...action.payload
                }
            }
        };
        }
        case DELETE_EMPLOYEE: {
            const { cpf  } = action.payload;
            const newIds = state.ids.filter((id) =>  id !== cpf)
           // const newEmpls = state.empls
          //  delete newEmpls[cpf]
            return {
                ...state,
                ids: newIds,
                empls: {
                    ...state.empls,
                    [cpf]: undefined
                }
            };
            }
    }

}