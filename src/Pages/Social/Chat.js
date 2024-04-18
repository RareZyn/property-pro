import "./Chat.css";

export const Chat = () => {
  return (
    <div className="Chat">
      <ul className="ChatList">
        <li>
          <img src={require("../../Res/image/user profile.png")}/>
          <div>
            <h1>Nama 1</h1>
            <p1>Assalamualaikum</p1>
          </div>
        </li>
        <CustomChatUserList userName={"Nama 2"} chatContent={"Bang, barang saya sampai dah ke?"}></CustomChatUserList>
        <CustomChatUserList userName={"Nama 3"} chatContent={"Berapa?"}></CustomChatUserList>
      </ul>
      <div className="ChatScreen">
        <div className="ChatUser">
          <img src={require("../../Res/image/user profile.png")}/>
          <h1>Nama 1</h1>
        </div>

        <div className="ChatContainer"></div>

        <div className="SendChat">
          <img src={require("../../Res/image/image-chat.png")}/>
          <img src={require("../../Res/image/video.png")}/>
          <div className="ChatInput">Type your message</div>
          <img src={require("../../Res/image/send-orange.png")}/>
        </div>
      </div>
    </div>
  );
};

function CustomChatUserList({src,userName,chatContent}){
  return(
    <li>
      <img src={require("../../Res/image/user profile.png")}/>
      <div>
        <h1>{userName}</h1>
        <p1>{chatContent}</p1>
      </div>
    </li>
  )
}
