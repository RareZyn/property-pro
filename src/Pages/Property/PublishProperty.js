import "./PublishProperty.css";
import { Link } from "react-router-dom";
// import { useState } from "react";
import FileCard from "../../Cards/General Cards/FileCard";
import { useState } from "react";

export const PublishProperty = () => {
  const [files, setFiles] = useState([]);

  // Function to handle file selection
  const handleFileChange = (event) => {
    const fileList = event.target.files;
    const newFiles = Array.from(fileList).map((file) => ({
      filename: file.name.split(".")[0],
      filetype: file.name.split(".")[1],
    }));
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  return (
    <div className="PublishProperty">
      <div className="publish-section">
        <div className="cart-box">
          <img src={require("../../Res/image/cart-icon.png")} />
        </div>

        <div className="input-div">
          <div className="section-input">
            <span>Name</span>
            <input type="text" placeholder="Name" className="name-input" />
          </div>
          <div className="section-input">
            <span>Description</span>
            <input
              type="text"
              placeholder="Description"
              className="desc-input"
            />
          </div>
          <div className="section-input">
            <span>Price</span>
            <input type="text" placeholder="RMXX.XX" className="price-input" />
          </div>
        </div>

        <div className="add-img-files-div">
          <input
            type="file"
            id="myFile"
            name="filename"
            className="input-file"
            onChange={handleFileChange}
          />
          <label for="myFile" className="custom-file-upload" id="addFile">
            <img src={require("../../Res/image/upload.png")} alt="Upload" />
            <h2>Add images from files</h2>
            <h4>or drag and drop</h4>
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
          ))}
        </div>

        <div class="publish-div">
          <Link to="/manage-property">
            <button class="publish-btn">Publish</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
