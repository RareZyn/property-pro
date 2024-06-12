
import "./MyChatBubble.css";

export const MyChatBubble = ({ content, time, isImage }) => {
    return (
      <div
        className="MyChatBubble"
        style={{
          width: "fit-content",
          alignSelf: "end",
        }}
      >
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
        <span className="my-time">{time}</span>
      </div>
    );
};
