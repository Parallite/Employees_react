import { RootState } from 'src/store';

export const selectUsers = (state: RootState) => state.users.users;
export const selectIsLoadingUsers = (state: RootState) =>
  state.users.isLoadingUsers;
