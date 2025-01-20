import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDTO } from "@dtos/User";

interface AuthState {
  user: UserDTO | null;
  token: string | null;
  refresh_token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  refresh_token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (
      state,
      action: PayloadAction<{
        user: UserDTO;
        token: string;
        refresh_token: string;
      }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.refresh_token = action.payload.refresh_token;
    },
    signOut: (state) => {
      state.user = null;
      state.token = null;
      state.refresh_token = null;
    },
  },
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
