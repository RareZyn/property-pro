import styles from "./FileCard.module.css"

function FileCard({filename, filetype}){
    let fileIcon = ""
    switch(filetype){
        case "pdf":
            fileIcon = require("../../Res/image/pdf-file-icon.png");
            break;
        case "png" || "jpg":
            fileIcon = require("../../Res/image/jpg-file-icon.png")
        default:
            fileIcon = require("../../Res/image/zip-file-icon.png");
            break;
    }

    return(
        <div className={styles["file-container"]}>
            <div className={styles["files-icon"]}>
              <img src={fileIcon} />
            </div>
            <button class={styles["view-btn"]}>View</button>

            <div className={styles["bottom-container"]}>
              <span className={styles["filename"]}>{filename}.{filetype}</span>
              <div className={styles["bottom-btn"]}>
                <img src={require("../../Res/image/delete-icon.png")} />
                <img src={require("../../Res/image/edit-icon.png")} />
              </div>
            </div>
          </div>
    )
}

export default FileCard