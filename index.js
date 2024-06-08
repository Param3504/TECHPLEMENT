
import {configureStore, createSlice} from "@reduxjs/toolkit"
import QuoteSlice from "./QuoteSlice"


const QuoteStore = configureStore({
    reducer: {
        Quote: QuoteSlice.reducer,   
    }
})

export default QuoteStore