import "./YourChatBubble.css";



export const YourChatBubble = ({ content, time, isImage }) => {
    return (

<div class="YourChatBubble">
 
{isImage ? <img src={content} alt="Uploaded content" className="chat-image" /> : <p>{content}</p>}
  <span class="your-time">{time}</span>
</div>

);
};
