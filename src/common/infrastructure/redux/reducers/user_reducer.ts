import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface USerState {
  user: {
    name: string;
    lastName: string;
  };
  loading?: boolean;
}

const initialState = {
  user: {
    name: '',
    lastName: '',
  },
  loading: false,
} satisfies USerState as USerState;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userDataloading: state => {
      state.loading = true;
    },
    userDataReceived: (state, action: PayloadAction<USerState>) => {
      state.user = action.payload.user;
      state.loading = false;
    },
    userDataError: state => {
      state.loading = false;
    },
  },
});

export const {userDataReceived, userDataError, userDataloading} =
  userSlice.actions;

export default userSlice.reducer;
