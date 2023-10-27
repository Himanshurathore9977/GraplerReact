
import { BrowserRouter as Router,  Switch , Route , Routes  } from 'react-router-dom'; // Change Router to BrowserRouter
import Navbar from './components/Navbar';
import './app.css' ; 
import Companies from './pages/Companies';
import User from './pages/User';
import Home from './pages/Home';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { fetchCompany } from './slices/companySlice';
import { getAllCompanies } from './api/api';
import CompanyUser from './pages/CompanyUser';
import AddCompany from './components/AddCompany';
import CompanyUpdate from './pages/CompanyUpdate';


function App() {
  const API_BASE_URL = 'http://localhost:8080/comapnies';
const dispatch = useDispatch() ; 
  useEffect(() => {
      const fetchData  = async() =>{
        try{
          const response = await  getAllCompanies() ; 
          //const response = await axios.get('http://localhost:8080/companies') ;
          console.log('sssssssss',response.data);
          dispatch(fetchCompany(response.data)) ; 
        }
        catch(error){
          console.error("Error Message " ,error);
        }  
      };
      fetchData();
    }, [dispatch]);
  return (
    <>
      <Router>
        <Navbar />
        <Routes> 
         <Route path='/' exact component={Home} />
          <Route path='/company' element = {<Companies/>} />
          <Route path='/user' element = {<CompanyUser/>} />
          <Route path='/addCompany' element = {<AddCompany/>} />  
          <Route path='/updateCompany' element = {<CompanyUpdate/>} />
         
           {/* <Route path='/user' component={User} /> */}
        </Routes>
            
       
      </Router>
    </>
  );
}

export default App;
