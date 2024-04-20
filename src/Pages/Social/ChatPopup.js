import styles from "./ChatPopup.module.css";


export const ChatPopup = ({className}) => {
  return (
    <div className={className}>
      
      <ul>
        <li>
          <div className={styles.ChatTitle}>
            <h1>Chats</h1>
            <a href="/chat">
              <img src={require("../../Res/image/fullscreen-icon.png")}/>
            </a>
          </div>
        </li>

        <li>
          <a href="./chat">
            <div id={styles.ProfilePicture} className="ProfilePicture"></div>
            <div className="ChatInfo">
              <h1>Chat 1</h1>
              <p>Assalamualaikum</p>
            </div>
          </a>
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
      <a href="./chat">
        <div id={styles.ProfilePicture} className="ProfilePicture"></div>
        <div className={styles.ChatInfo}>
          <h1>{username}</h1>
          <p>{chat}</p>
        </div>
      </a>
      
    </li>
  )
}
