import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../featuers/books/BookSlice";

const store = configureStore({
    reducer: {
        booksReducer: booksReducer
    }
})

export default store