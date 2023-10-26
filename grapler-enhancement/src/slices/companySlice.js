import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    companies : [
        // { id :  "1" ,companyName: "Sourabh Traders Daudwa ", email : "a@g.vom", description: "Grapler Enhancement ",structureType : "HIERARCHICAL", contactNumber : "9944", address : "Indore" , },
        // { id :  "2" ,companyName: "Innogent Technologies  ", email : "a@g.vom", description: "Grapler Enhancement ",structureType : "HIERARCHICAL", contactNumber : "9944", address : "Indore" , },
        // { id :  "3" ,companyName: "Innogent Technologies Europe ", email : "a@g.vom", description: "Grapler Enhancement ",structureType : "HIERARCHICAL", contactNumber : "9944", address : "Indore" , },
       
    ],
  };
  const companySlice = createSlice({
    name : "company",
    initialState  ,
 
    reducers : {
        fetchCompany : (state , action ) => {
            console.log("insidegetcompanyslice" , action.payload) ; 
            state.companies =  action.payload ; 
        }


     
    }













  }); 
  export const {fetchCompany } = companySlice.actions ; 
  export default companySlice.reducer ; 
