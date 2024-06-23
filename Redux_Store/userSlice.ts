import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserState {
  gender: boolean;
  months: number;
  bmi: number;
  height: number;
  weight: number;
}

const initialState: UserState = {
  gender: false, // Assuming false for female, true for male
  months: 0,
  bmi: 0,
  height: 0,
  weight: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setGender(state, action: PayloadAction<boolean>) {
      state.gender = action.payload;
    },
    setMonths(state, action: PayloadAction<number>) {
      state.months = action.payload;
    },
    setBMI(state, action: PayloadAction<number>) {
      state.bmi = action.payload;
    },
    setHeight(state, action: PayloadAction<number>) {
      state.height = action.payload;
    },
    setWeight(state, action: PayloadAction<number>) {
      state.weight = action.payload;
    },
  },
});

export const {setGender, setMonths, setBMI, setHeight, setWeight} =
  userSlice.actions;
export default userSlice.reducer;
