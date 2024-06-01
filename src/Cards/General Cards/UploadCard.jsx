// UploadCard.js
import React, { useState } from "react";
import styles from "./UploadCard.module.css";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPEG", "PNG", "GIF"];

const UploadCard = ({ onFileUpload }) => {
  const [file, setFile] = useState(null);
  
  const handleChange = (file) => {
    setFile(file);
    onFileUpload(file);
  };

  return (
    <div className={styles["UploadCard"]}>
  <h3>Drag & Drop Your Files Here</h3>
  
  <FileUploader
    id={styles["customFileUploader"]}
    multiple={true}
    handleChange={handleChange}
    name="file"
    types={fileTypes}
  />
  <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
</div>


  );
};

export default UploadCard;
