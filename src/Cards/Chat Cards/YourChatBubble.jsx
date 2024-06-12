import "./YourChatBubble.css";



export const YourChatBubble = ({ content, time, isImage }) => {
    return (
      <div class="YourChatBubble" style={{ width: "fit-content" }}>
        {isImage ? (
          <img
            src={content}
            alt="Uploaded content"
            className="chat-image"
            style={{ width: "300px", height: "300px" }}
          />
        ) : (
          <p>{content}</p>
        )}
        <span class="your-time">{time}</span>
      </div>
    );
};
