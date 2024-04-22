import "./PublishProperty.css";
import { MyAccountHeader } from "../general/MyAccountHeader";
import { Link } from "react-router-dom";
import { NavHeader } from "../Navigation/NavHeader";

export const PublishProperty = () => {
  return (
    <div className="PublishProperty">
      <NavHeader/>
      <div className="publish-section">
        <div className="cart-box">
          <img src={require("../../Res/image/cart-icon.png")} />
        </div>

        <div className="input-div">
          <div className="section-input">
            Name
            <input type="text" placeholder="Name" className="name-input" />
          </div>
          <div className="section-input">
            Description
            <input
              type="text"
              placeholder="Description"
              className="desc-input"
            />
          </div>
          <div className="section-input">
            Price
            <input type="text" placeholder="RMXX.XX" className="price-input" />
          </div>
        </div>

        <div className="add-img-files-div">
          <input
            type="file"
            id="myFile"
            name="filename"
            className="input-file"
          />
          <label for="myFile" className="custom-file-upload" id="addFile">
            <img src={require("../../Res/image/upload.png")} alt="Upload" />
            <h2>Add images from files</h2>
            <h4>or drag and drop</h4>
          </label>
        </div>

        <div className="files-grid">
          <div className="zip-box">
            <div className="files-icon">
              <img src={require("../../Res/image/zip-file-icon.png")} />
            </div>
            <button class="view-btn">View</button>

            <div classNames="file-edit-delete-div">
              <span className="filename-zip">filename.zip</span>
              <div className="delete-edit-icon-div">
                <div className="delete-pic">
                  <img src={require("../../Res/image/delete-icon.png")} />
                </div>
                <div className="edit-pic">
                  <img src={require("../../Res/image/edit-icon.png")} />
                </div>
              </div>
            </div>
          </div>

          <div class="pdf-box">
            <div class="files-icon">
              <img src={require("../../Res/image/pdf-file-icon.png")} />
            </div>
            <button class="view-btn">View</button>

            <div class="file-edit-delete-div">
              <span class="filename-pdf">filename.pdf</span>
              <div class="delete-edit-icon-div">
                <div class="delete-pic">
                  <img src={require("../../Res/image/delete-icon.png")} />
                </div>
                <div class="edit-pic">
                  <img src={require("../../Res/image/edit-icon.png")} />
                </div>
              </div>
            </div>
          </div>

          <div class="jpg-box">
            <div class="files-icon">
              <img src={require("../../Res/image/jpg-file-icon.png")} />
            </div>
            <button class="view-btn">View</button>

            <div class="file-edit-delete-div">
              <span class="filename-jpg">filename.jpg</span>
              <div class="delete-edit-icon-div">
                <div class="delete-pic">
                  <img src={require("../../Res/image/delete-icon.png")} />
                </div>
                <div class="edit-pic">
                  <img src={require("../../Res/image/edit-icon.png")} />
                </div>
              </div>
            </div>
          </div>
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
