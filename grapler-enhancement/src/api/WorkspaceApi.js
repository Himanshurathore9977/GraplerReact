import axios from 'axios';
const API_BASE_URL = 'http://localhost:8082/companies/';
export const getAllWorkspaces = async (companyId) => {
    try {
        console.log("At APi");
      const response = await axios.get(`${API_BASE_URL}${companyId}/workspaces`);
      console.log('asaaaaaa',response.data) ;
      return response.data ;
    } catch (error) {
      console.log(error) ;
    }
  };