
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWorkspaces } from '../slices/workspaceSlice'; // Update the import for your workspace
import { useNavigate } from 'react-router-dom';
import { getAllWorkspaces } from '../api/WorkspaceApi'; // Update the import for your workspace API
function Workspaces() {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(window.location.search);
  const companyId = queryParams.get("id");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllWorkspaces(companyId);
        console.log('Response from getAllWorkspaces:', response.data);
        dispatch(fetchWorkspaces(response.data)) ; 
       
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };
    fetchData();
  }, [dispatch]);
  const {workspaces} = useSelector((state) => state.workspaceList);
  console.log("On component : "+workspaces);
  function handleUpdate(id) {
    console.log(id);
    navigate(`/updateWorkspace?id=${id}`);
  }
  function handleDelete(id) {
    console.log(id);
  }
  return (
    <div>
      <div className="container">
        <div className="badge bg-info text-wrap mt-2">
          <h2>Workspaces</h2>
        </div>
        <table className="table table-striped table-hover mt-3">
          <thead className="table-dark">
            <tr>
              <th>Workspace Name</th>
              <th>Explore</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {workspaces? (
              workspaces.map((workspace) => (
                <tr key={workspace.id}>
                  <td>{workspace.name}</td>
                  <td>
                    <button className="btn btn-primary">
                      Open Workspace
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleUpdate(workspace.id)} className="btn btn-secondary">
                      Update
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(workspace.id)} className="btn btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div><center>
      <button   onClick={() => navigate(-1) }className="btn btn-primary">Go Back </button>
      </center>
    </div>
  );
}
export default Workspaces;