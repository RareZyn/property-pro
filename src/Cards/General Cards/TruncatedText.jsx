import { useState } from "react";
import styles from "./TruncatedText.module.css";

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
            <span id={styles["see-more"]} onClick={toggleExpanded}> See more</span>
        </div>)
        }
        </>
    )
}

export default TruncatedText