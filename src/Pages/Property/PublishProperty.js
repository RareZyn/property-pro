import "./PublishProperty.css";

export const PublishProperty = () => {
  return (
    <div className="PublishProperty">
      <div class="for-top-margin"></div>

      <span class="back-icon"></span>

      <div class="publish-section">
          <div class="cart-box">
              <img src={require("../../Res/image/cart-icon.png")}/>
          </div>

          <div class="input-div">
              <div>Name</div>
              <input type="text" placeholder="Name" class="name-input"/>
              <div>Description</div>
              <input type="text" placeholder="Description" class="desc-input"/>
              <div>Price</div>
              <input type="text" placeholder="RMXX.XX" class="price-input"/>
          </div>

          <div class="add-img-files-div">
              <button class="add-img-files-btn">+</button>
              <div class="add-img-files-text">Add images / files</div>
          </div>

          <div class="files-grid">
              <div class="zip-box">
                  <div class="files-icon">
                      <img src={require("../../Res/image/zip-file-icon.png")}/>
                  </div>
                  <button class="view-btn">View</button>

                  <div class="file-edit-delete-div">
                      <span class="filename-zip">filename.zip</span>
                      <div class="delete-edit-icon-div">
                        <div class="delete-pic">
                          <img src={require("../../Res/image/delete-icon.png")}/>
                        </div>
                        <div class="edit-pic">
                          <img src={require("../../Res/image/edit-icon.png")}/>
                        </div>
                      </div>
                  </div>
              </div>

              <div class="pdf-box">
                  <div class="files-icon">
                      <img src={require("../../Res/image/pdf-file-icon.png")}/>
                  </div>
                  <button class="view-btn">View</button>

                  <div class="file-edit-delete-div">
                      <span class="filename-pdf">filename.pdf</span>
                      <div class="delete-edit-icon-div">
                        <div class="delete-pic">
                          <img src={require("../../Res/image/delete-icon.png")}/>
                        </div>
                        <div class="edit-pic">
                          <img src={require("../../Res/image/edit-icon.png")}/>
                        </div>
                      </div>
                  </div>
              </div>

              <div class="jpg-box">
                  <div class="files-icon">
                      <img src={require("../../Res/image/jpg-file-icon.png")}/>
                  </div>
                  <button class="view-btn">View</button>

                  <div class="file-edit-delete-div">
                      <span class="filename-jpg">filename.jpg</span>
                      <div class="delete-edit-icon-div">
                        <div class="delete-pic">
                          <img src={require("../../Res/image/delete-icon.png")}/>
                        </div>
                        <div class="edit-pic">
                          <img src={require("../../Res/image/edit-icon.png")}/>
                        </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="publish-div">
              <button class="publish-btn">Publish</button>
          </div>
      </div>
    </div>
  );
};
