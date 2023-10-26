
import { configureStore } from '@reduxjs/toolkit';
import companySlice from '../slices/companySlice';


const store = configureStore({
    reducer : {
        companylist : companySlice, 
    }
    
})
export  default store ; 