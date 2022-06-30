import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
const initialBills = {
  bills: [
    { id: uuidv4(), name: 'sayem', email: 'sayem@email.com', phone: '01612178331', amount: 230 },
    { id: uuidv4(), name: 'sayem', email: 'sayem@email.com', phone: '01612178331', amount: 230 },
  ]
}
export const billSlice = createSlice({
  name: 'bills',
  initialState: initialBills,
  reducers: {
    viewBills: state => state,

  }
});
export const { viewBills } = billSlice.actions;
export default billSlice.reducer;