import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserState {
  gender: boolean;
  age: number;
  bmi: number;
  height: number;
}

const initialState: UserState = {
  gender: false, // Assuming false for female, true for male
  age: 0,
  bmi: 0,
  height: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setGender(state, action: PayloadAction<boolean>) {
      state.gender = action.payload;
    },
    setAge(state, action: PayloadAction<number>) {
      state.age = action.payload;
    },
    setBMI(state, action: PayloadAction<number>) {
      state.bmi = action.payload;
    },
    setHeight(state, action: PayloadAction<number>) {
      state.height = action.payload;
    },
  },
});

export const {setGender, setAge, setBMI, setHeight} = userSlice.actions;
export default userSlice.reducer;
