import styles from "./ProfilePictureContainer.module.css";

function ProfilePicture({imgSrc, size}){
    const imgContainerStyle = {
        '--size': `${size}`
      };

    return(
        <div className={styles["pp-container"]} style={imgContainerStyle}>
            <img id="pp-img" src={imgSrc} alt="" srcset="" />
        </div>
    )
}

export {ProfilePicture}