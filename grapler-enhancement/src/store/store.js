
import { configureStore } from '@reduxjs/toolkit';
import companySlice from '../slices/companySlice';
import workspacesSlice from '../slices/workspaceSlice';


const store = configureStore({
    reducer : {
        companylist : companySlice, 
        workspaceList :  workspacesSlice,
    }
    
})
export  default store ; 