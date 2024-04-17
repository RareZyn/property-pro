import "./ChatPopup.css";

export const ChatPopup = () => {
  return (
    <div className="ChatPopup">
      
      <ul>
        <li>
          <div className="ChatTitle">
            <h1>Chats</h1>
            <img src={require("../../Res/image/fullscreen-icon.png")}/>
          </div>
        </li>
        <li>
          <div className="ProfilePicture"></div>
          <div className="ChatInfo">
            <h1>Chat 1</h1>
            <p>Assalamualaikum</p>
          </div>
          
        </li>
        <li>
          <div className="ProfilePicture"></div>
          <div className="ChatInfo">
            <h1>Chat 2</h1>
            <p>Bang, barang sampai dah ke?</p>
          </div>
        </li>
      </ul>
    </div>
  );
};
