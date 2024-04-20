import { useState } from "react";
import "./TruncatedText.css";

function TruncatedText({text, maxlength}){
    const [expanded, setExpanded] = useState(text.length <= maxlength);

    const toggleExpanded = () => {
        setExpanded(!expanded)
    }

    return(
        <>
        {expanded ? 
        (<span>{text}</span>):
        (<div>
            {text.slice(0, maxlength)}...
            <span id="see-more" onClick={toggleExpanded}> See more</span>
        </div>)
        }
        </>
    )
}

export default TruncatedText