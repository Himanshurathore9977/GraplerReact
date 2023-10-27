import React from 'react'
import { addImage } from '../api/api';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function CompanyLogo() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);

      };
      
    const queryParams = new URLSearchParams(window.location.search) ; 
    const companyId= queryParams.get("id") ; 
    const { compId } = useParams();
    console.log(compId) ; 
      const handleUpload = () => {
        if (selectedFile) {
            // Check the size here (for example, limit to 1MB)
            if (selectedFile.size <= 1048576) {
              console.log(selectedFile);
              const response = addImage(compId , selectedFile);
              if(response){

              }
            } else {
              alert("File size exceeds the allowed limit (1MB).");
            }
          } else {
            alert("No file selected.");
          }
        };

  return (
    <div>  
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  )
}

export default CompanyLogo
