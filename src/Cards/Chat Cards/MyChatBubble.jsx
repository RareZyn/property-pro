
import "./MyChatBubble.css";

export const MyChatBubble = ({ content, time, isImage }) => {
    return (
        <div className="MyChatBubble">
            {isImage ? <img src={content} alt="Uploaded content" className="chat-image" /> : <p>{content}</p>}
            <span className="my-time">{time}</span>
        </div>
    );
};
