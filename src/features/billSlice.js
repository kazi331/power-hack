import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
const initialBills = {
  bills: [
    { id: uuidv4(), name: 'sayem', email: 'sayem@email.com', phone: '01612178331', amount: 230 },
    { id: uuidv4(), name: 'sayem', email: 'sayem@email.com', phone: '01612178331', amount: 230 },
  ]
}
// export const fetchBills = createAsyncThunk("bills/fetchBills", async () => {
//   const res = await axios.get("http://localhost:5000/api/billing-list");
//   return res.data;
// })


export const billSlice = createSlice({
  name: 'bills',
  initialState: {
    isLoading: false,
    bills: [],
    error: null
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchBills.pending, state => {
  //     state.isLoading = true;
  //   });
  //   builder.addCase(fetchBills.fullfilled, (state, action) => {
  //     state.isLoading = false;
  //     state.bills = action.payload;
  //     state.error = null;
  //   });
  //   builder.addCase(fetchBills.failed, (state, action) => {
  //     state.isLoading = false;
  //     state.bills = [];
  //     state.error = action.error.message;
  //   })
  // }


  reducers: {
    viewBills: state => state,

  }
});
// export const { viewBills } = billSlice.actions;
export default billSlice.reducer;