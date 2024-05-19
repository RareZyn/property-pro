import { MyChatBubble } from "../../Cards/Chat Cards/MyChatBubble";
import { YourChatBubble } from "../../Cards/Chat Cards/YourChatBubble";
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
        <a className="ChatUser" href="/view-account-header">
          <img src={require("../../Res/image/user profile.png")}/>
          <h1>Nama 1</h1>
        </a>

        <div className="ChatContainer">
          <MyChatBubble></MyChatBubble>
          <YourChatBubble></YourChatBubble>
      
        </div>

        <div className="SendChat">
          <input type="file" id="SendChatSendImg"/>
          <input type="file" id="SendChatSendVid"/>
          <label for="SendChatSendImg">
            <img src={require("../../Res/image/image-chat.png")}/>
          </label>
          <label for="SendChatSendVid">
            <img src={require("../../Res/image/video.png")}/>
          </label>
          <input type="text" className="ChatInput" placeholder="type your message"/>
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
