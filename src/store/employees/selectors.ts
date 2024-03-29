import { RootState } from 'src/store';

export const selectEmployees = (state: RootState) => state.employees.employees;
export const selectNewEmployee = (state: RootState) =>
  state.employees.newEmployee;
export const selectIsLoadingEmployees = (state: RootState) =>
  state.employees.isLoadingEmployees;
export const selectReqErr = (state: RootState) => state.employees.errors;
export const selectIsRemovingEmployee = (state: RootState) =>
  state.employees.isRemovingEmployee;
