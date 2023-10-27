import React from 'react'
import { addImage } from '../api/api';
import { useState } from 'react';

function AddCompany() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
      };

      const handleUpload = () => {
        if (selectedFile) {
            // Check the size here (for example, limit to 1MB)
            if (selectedFile.size <= 1048576) {
              console.log(selectedFile);
              addImage(selectedFile);
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

export default AddCompany
