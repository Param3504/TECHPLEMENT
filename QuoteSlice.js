import { createSlice } from "@reduxjs/toolkit";
const QuoteSlice = createSlice({
  name: "Quotes",
  initialState: [],
  reducers: {
      addQuote: (state , action) => {
          console.log("Action payload " , action.payload)
          return action.payload
          
    },
  },
});


export const QuoteAction = QuoteSlice.actions;

export default QuoteSlice;
