import React, { useState, useEffect } from "react";
import { toFav, getAllFavorites } from "../utils/api";

const SavedButton = ({ propertyID, userId }) => {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const favorites = await getAllFavorites(userId);
        setIsSaved(favorites.includes(propertyID));
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    fetchFavorites();
  }, [propertyID, userId]);

  const handleSave = async () => {
    try {
      await toFav(propertyID, userId);
      setIsSaved(!isSaved);
    } catch (error) {
      console.error("Error saving property:", error);
    }
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
        cursor: "pointer",
        transition: "background-color 0.3s ease",
      }}
      onClick={handleSave}
    >
      <img src={require("../Res/image/save.png")} alt="Save" />
      {isSaved ? "SAVED" : "SAVE"}
    </button>
  );
};

export default SavedButton;
