import React, { useEffect } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCompany, fetchCompany } from '../slices/companySlice';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { CenterFocusStrong } from '@mui/icons-material';



function Companies() {
  console.log('inside companies');
  const { companies } = useSelector((state) => state.companylist);
  
  console.log("insidecompanies" ,  companies) ; 

  const navigate = useNavigate() ; 
  const dispatch=useDispatch();
  
  function showUsers(id ) {
    console.log("from userList  ", id);
    //navigate(`/user`);
    navigate(`/user?id=${id}`);
  }

  function handleUpdate(id){
    console.log(id) ; 
    navigate(`/updateCompany?id=${id}`) ; 
  } 
  function showWorkspaces(id) {
    console.log("from company ID  ", id);
    navigate(`/workspace?id=${id}`);
  }

  
  
  function handleDelete(id) {
    const shouldDelete = window.confirm("Are you sure you want to delete this item?");
    if (shouldDelete) {
        // Perform the deletion
        axios.delete('http://localhost:8082/companies/' + id)
            .then((response) => {
                alert('Item deleted successfully');
                dispatch(deleteCompany(id));
                navigate('/company');
            })
            .catch((error) => {
                console.error('Error while deleting the Company:', error);
                alert('Error while deleting the item');
            });
    }
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
                
                <Link to={`/addLogo/${comp.id}`}>
  
                  <img
                    src={`data:image/jpeg;base64,${comp.logo}`}
                    alt="Company Logo"
                    style={{ width: '60px', height: '40px' }}
                  />
                </Link>
                </td>
                <td> {comp.name }</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={ () => showWorkspaces(comp.id)} 
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
        

                <td>
                  <button onClick={() => handleDelete(comp.id)} className="btn btn-danger" >
                    Delete{" "}
                  </button>
                </td>

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
