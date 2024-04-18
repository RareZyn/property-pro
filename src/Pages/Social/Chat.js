import "./Chat.css";

export const Chat = () => {
  return (
    <div className="Chat">
      <ul className="ChatList">
        <li>
          <img src={require("../../Res/image/user profile.png")}/>
          <h1>Nama 1</h1>
        </li>
        <CustomChatUserList userName={"Nama 2"}></CustomChatUserList>
        <CustomChatUserList userName={"Nama 3"}></CustomChatUserList>
      </ul>
      <div className="ChatScreen">
        <div className="ChatUser">
          <img src={require("../../Res/image/user profile.png")}/>
          <h1>Nama 1</h1>
        </div>

        <div className="ChatContainer"></div>

        <div className="SendChat">Send Chat</div>
      </div>
    </div>
  );
};

function CustomChatUserList({src,userName}){
  return(
    <li>
      <img src={require("../../Res/image/user profile.png")}/>
      <h1>{userName}</h1>
    </li>
  )
}
