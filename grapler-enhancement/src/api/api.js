import axios from 'axios';


const API_BASE_URL = 'http://localhost:8082/companies';

export const getAllCompanies = async () => {
    try {    
      const response = await axios.get(API_BASE_URL );
      console.log('asaaaaaa',response.data) ; 
      return response.data ; 
    } catch (error) {
      throw error;           
    }
  };
  
  export const addImage = async (companyID , selectedFile) => {
    console.log(companyID) ; 
    console.log(selectedFile) ; 
      if (selectedFile) {
        
        const formData = new FormData();
        formData.append('file', selectedFile);
  
        try {
          const response = await axios.put(`http://localhost:8082/companies/addImage/${companyID}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          return response.data;

        } catch (error) {
          console.error('Error:', error);
        }
      }
  };

  export const addCompanyApi = async(company ) => {
    try{
      console.log("adding here..",company);
      const response= await axios.post(`${API_BASE_URL}` , company);
      console.log(response);
      return response.data;
    }catch(error){
      throw error;
    }
  }

  export const updateCompanyApi = async (companyId, updatedCompanyData) => {
    try {
      console.log("here " , updatedCompanyData) ; 
      const response = await axios.put(`${API_BASE_URL}/${companyId}`, updatedCompanyData);
      console.log(response) ; 
        return response.data;
    } catch (error) {
      throw error;
    }
  };
  