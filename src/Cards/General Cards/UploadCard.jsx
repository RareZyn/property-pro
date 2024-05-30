import React, { useState } from "react";
import FileCard from "../../Cards/General Cards/FileCard";
import "./UploadCard.css";

export const UploadCard = () => {
  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState({});
  


  const handleFileChange = (event) => {
    const fileList = event.target.files;
    const newFiles = Array.from(fileList).map((file) => ({
      filename: file.name.split(".")[0],
      filetype: file.name.split(".")[1],
    }));
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

return(
<div className="UploadCard">
<div className="add-img-files-div">
<input
  type="file"
  id="myFile"
  name="filename"
  className="input-file"
  onChange={handleFileChange}
  multiple // Allow multiple file selection
/>
<label htmlFor="myFile" className="custom-file-upload" id="addFile">
 <div id="upload-container"> <img id="upload-img"
    src={require("../../Res/image/upload.png")}
    alt="Upload"
  /><div id="upload-text">
  <h4>Add images from files</h4>
  <h5>or drag and drop</h5></div></div>
</label>

</div>

<div className="files-grid">
            {files.map((file, index) => (
              <FileCard
                key={index}
                className="file-card"
                filename={file.filename}
                filetype={file.filetype}
              />
            ))}</div>

            </div>     
);
};

export default UploadCard;