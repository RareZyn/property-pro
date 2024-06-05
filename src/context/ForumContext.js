import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ForumContext = createContext();

export const ForumProvider = ({ children }) => {
    const [forums, setForums] = useState([]);
    const [currentForum, setCurrentForum] = useState(null);

    const fetchForums = async () => {
        try {
            const response = await axios.get('http://localhost:5000/forum/');
            setForums(response.data);
        } catch (error) {
            console.error('Error fetching forums:', error);
        }
    };

    const createForum = async (forumData) => {
        try {
          const response = await axios.post('http://localhost:5000/forum/create', forumData);
          setForums((prevForums) => [...prevForums, response.data]);
          console.log(forumData);
        } catch (error) {
          console.error('Error creating forum:', error);
        }
    };

    const addComment = async (forumId, comment) => {
        try {
          const response = await axios.post(`http://localhost:5000/forum/add-comment/${forumId}`, comment);
          setCurrentForum((prev) => ({
            ...prev,
            comments: [...prev.comments, response.data]
          }));
        } catch (error) {
          console.error('Error adding comment:', error);
        }
    };

    const toggleLike = async (forumId, userID) => {
        try {
          await axios.post(`http://localhost:5000/forum/like/${forumId}`, { userID });
          setForums((prevForums) => prevForums.map(forum => 
            forum._id === forumId ? { ...forum, likeCount: forum.likeCount + (forum.likes.includes(userID) ? -1 : 1), likes: forum.likes.includes(userID) ? forum.likes.filter(id => id !== userID) : [...forum.likes, userID] } : forum
          ));
        } catch (error) {
          console.error('Error toggling like:', error);
        }
    };

    useEffect(() => {
        fetchForums();
    }, []);

    return (
        <ForumContext.Provider value={{ forums, currentForum, setCurrentForum, createForum, addComment, toggleLike }}>
            {children}
        </ForumContext.Provider>
    );
};