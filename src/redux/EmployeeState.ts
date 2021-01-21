import { Employee } from '../interfaces/Employee'

export interface EmployeeState {
    ids: string[],
    empls: {[key: string]: Employee}
}
