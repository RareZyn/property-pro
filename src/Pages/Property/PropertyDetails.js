import "./PropertyDetails.css";

export const PropertyDetails = () => {
  return (
    <div className="PropertyDetails">
      <span class="back-icon">
      </span>

      <div class="main-img-div">
          <div class="main-img">
              <img/>
          </div>
      </div>

      <div class="property-details">
          <div class="other-imgs">
              <div class="other-imgs-box">
                  <img/>
              </div>
          </div>

          <div class="item-div">
              <div class="first-line-div">
                  <span class="item-title">Item Title</span>
                  <div class="share-icon">
                    <div>
                        <img src={require("../../Res/image/share-icon-black.png")}/>
                    </div>
                    <span class="shares-text">Shares</span>
                  </div>
              </div>
              
              <div class="seller-name">Seller</div>
  
              <div class="item-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui incidunt quaerat totam eos alias rerum odio enim deleniti porro, culpa explicabo reprehenderit exercitationem aliquam molestias doloremque, error hic dolorum facilis.
              </div>
              
              <div class="price-saved-div">
                  <div class="invisible-element"></div>
                  <button class="price-btn">Price RMXX.XX</button>
                  <div class="bookmark-icon">
                    <img src={require("../../Res/image/bookmark-icon.png")}/>
                  </div>                
              </div>
          </div>

          <div class="comments-section">
              <div class="comments">Comments</div>

              <div class="comments-container">
                  <div class="commenter-details">
                    <div class="icon-name-div">
                            <img src={require("../../Res/image/user profile.png")}/>                           
                        </div>
                      <div>
                          <div class="name">Wany Haritah</div>
                          <div class="time-public-div">10 mins ago . Public</div>
                      </div>
                  </div>

                  <div class="comment-text">
                      Comment bla bla bla bla bla
                  </div>
              </div>

              <div class="comments-container">
                  <div class="commenter-details">
                    <div class="icon-name-div">
                          <img src={require("../../Res/image/user profile.png")}/>                           
                        </div>
                      <div>
                          <div class="name">Wany Haritah</div>
                          <div class="time-public-div">10 mins ago . Public</div>
                      </div>
                  </div>

                  <div class="comment-text">
                      Comment bla bla bla bla bla
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};
