import React, { useEffect } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompany } from '../slices/companySlice';
import { Navigate, useNavigate } from 'react-router-dom';
import { CenterFocusStrong } from '@mui/icons-material';


function Companies() {
  console.log('inside companies');
  const { companies } = useSelector((state) => state.companylist);
  console.log("insidecompanies" ,  companies.data) ; 

  const navigate = useNavigate() ; 
  
  function showUsers(id ) {
    console.log("from userList  ", id);
    //navigate(`/user`);
    navigate(`/user?id=${id}`);
  }

  function handleUpdate(id){
    console.log(id) ; 
    navigate(`/updateCompany?id=${id}`) ; 

  }
  


  return (
    <div>
        <div className="container">
        <div className="badge bg-info text-wrap mt-2">
          <h2>Company </h2>
        </div>
        <table className="table table-striped table-hover mt-3">
          <thead className="table-dark">
            <tr>
              <th>Company Logo </th>
              <th>Company Name</th>
              <th>Explore</th>
              <th>Users</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((comp) => (
              <tr key={comp.id}>
                <td>
                <img
                  src={`data:image/jpeg;base64,${comp.logo}`}
                  alt="Company Logo"
                  style={{ width: '40px', height: '40px' , alignItems : CenterFocusStrong }} // Adjust the width and height as needed
  />
                </td>
                <td> {comp.name }</td>
                <td>
                  <button
                    className="btn btn-primary"
                  >
                    View Workspaces 
                  </button>
                </td>  
                  <td>
                  <button
                    onClick={ () => showUsers(comp.id , comp.companyName)}
                    className="btn btn-primary"
                  >
                    View Users 
                  </button>
                </td>
        

                {/* <td>
                  <button onClick={() => handleDelete(owner.ownerNo)} className="btn btn-danger" >
                    Delete{" "}
                  </button>
                </td> */}

                <td>
                  <button onClick={() => handleUpdate(comp.id)} className="btn btn-secondary" > Update  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
   
  
}

export default Companies ; 
