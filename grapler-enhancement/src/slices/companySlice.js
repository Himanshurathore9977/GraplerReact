import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

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
        },

        updateCompany : (state , action ) => {
            console.log('gii') ; 
            console.log("inside slice " , action.payload)  ; 
            state.companies = state.companies.map(obj => obj.id === data.id  ? data : obj);
            
        }


    //      updateOwner : (state , action ) => {
    //   console.log('insice update owner slice  ' , action.payload )
    //   const data = action.payload;
    //   console.log('inside update owner slide ' , data.ownerNo);
    //   state.data = state.data.map(obj => obj.ownerNo === data.ownerNo ? data : obj);
    //   console.log(current(state));
    },
     
    }













  }); 
  export const {fetchCompany , updateCompany } = companySlice.actions ; 
  export default companySlice.reducer ; 
