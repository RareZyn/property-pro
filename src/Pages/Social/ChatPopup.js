import "./ChatPopup.css";

export const ChatPopup = ({className}) => {
  return (
    <div className={className}>
      
      <ul>
        <li>
          <div className="ChatTitle">
            <h1>Chats</h1>
            <a href="/chat">
              <img src={require("../../Res/image/fullscreen-icon.png")}/>
            </a>
          </div>
        </li>
        <li>
          <div className="ProfilePicture"></div>
          <div className="ChatInfo">
            <h1>Chat 1</h1>
            <p>Assalamualaikum</p>
          </div>
        </li>
        <CustomChatUserListPopup username={"Chat 2"} chat={"Bang, barang sampai dah ke?"}></CustomChatUserListPopup>
        <CustomChatUserListPopup username={"Chat 3"} chat={"Berapa?"}></CustomChatUserListPopup>

      </ul>
    </div>
  );
};

function CustomChatUserListPopup({username,chat}){
  return(
    <li>
      <div className="ProfilePicture"></div>
      <div className="ChatInfo">
        <h1>{username}</h1>
        <p>{chat}</p>
      </div>
      
    </li>
  )
}
