import React, { useState } from "react";

const SavedButton = () => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveClick = () => {
    setIsSaved(!isSaved);
    // Here you should add logic to save the property details
  };

  return (
    <button
      id="saved-button"
      style={{
        backgroundColor: isSaved ? "orange" : "#fffdef",
        color: isSaved ? "white" : "black",
        display: "flex",
        alignItems: "center",
        columnGap: "10px",
        border: "none",
        fontWeight: 600,
        fontFamily: "Roboto",
        height: "40px",
        padding: "0px 15px",
        borderRadius: "15px",
        fontSize: "12px",
        justifyContent: "center",
        marginRight: "60px",
        marginLeft: "20px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
      }}
      onClick={handleSaveClick}
    >
      <img src={require("../Res/image/save.png")} alt="Save" />
      {isSaved ? "SAVED" : "SAVE"}
    </button>
  );
};

export default SavedButton;
