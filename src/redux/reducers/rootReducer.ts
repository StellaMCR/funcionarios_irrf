import { combineReducers } from 'redux'

import { employeeReducer } from '../reducers/employeeReducer'

export const rootReducer = combineReducers({ employees: employeeReducer })

export type RootState = ReturnType<typeof rootReducer>
