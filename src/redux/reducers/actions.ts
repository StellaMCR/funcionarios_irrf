import { EDIT_EMPLOYEE } from "../actionTypes";
import { Employee } from "../../interfaces/Employee";

export const editEmployee = (empl: Employee) => ({
    type: EDIT_EMPLOYEE,
    payload: { empl }
  });