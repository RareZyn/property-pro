import React, { createContext, useState } from 'react';
import axios from 'axios';

export const ForumContext = createContext();

export const ForumProvider = ({ children }) => {
    const [forums, setForums] = useState([]);
    const [currentForum, setCurrentForum] = useState(null);
    const [ loading, setLoading ] = useState(true);

    const fetchForums = async () => {
        try {
            const response = await axios.get('http://localhost:5000/forum/');
            setForums(response.data);
        } catch (error) {
            console.error('Error fetching forums:', error);
        }
    };

    const fetchForumById = async (forumId) => {
      setLoading(true);
      console.log(forumId);
      try {
        const response = await axios.get(`http://localhost:5000/forum/${forumId}`);
        setCurrentForum(response.data);
        console.log(currentForum);
      } catch (error) {
          console.error('Error fetching forum by ID:', error);
      } finally {
          setLoading(false);
      }
    };

    const createForum = async (forumData) => {
      setLoading(true);
        try {
          const response = await axios.post('http://localhost:5000/forum/create', forumData);
          const newForum = response.data;
          setLoading(false);
          //setForums((prevForums) => [...prevForums, newForum]);
          if(!loading){
            fetchForums();
          }
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

    const fetchComments = async (forumId) => {
      if(currentForum){
        try{
          const response = await axios.get(`http://localhost:5000/forum/get-comment/${forumId}`)
          setCurrentForum((prev) => ({
            ...prev,
            comments: [...prev.comments, ...response.data]
          }));
        } catch (error){
          console.error('Error showing comments {Context}: ',error);
        }
      }
    }

    const toggleLike = async (forumId, userID) => {
        try {
          await axios.post(`http://localhost:5000/forum/like/${forumId}`, { userID });
          setForums((prevForums) => prevForums.map(forum => 
            forum._id === forumId ? 
            { ...forum, likeCount: forum.likeCount + (forum.likes.includes(userID) ? -1 : 1), likes: forum.likes.includes(userID) ? forum.likes.filter(id => id !== userID) : [...forum.likes, userID] } : forum
          ));
        } catch (error) {
          console.error('Error toggling like:', error);
        }
    };

    return (
        <ForumContext.Provider value={{ 
          forums, 
          currentForum, 
          fetchForums, 
          setCurrentForum, 
          createForum, 
          addComment, 
          toggleLike,
          loading,
          setLoading,
          fetchComments,
          fetchForumById
        }}>
            {children}
        </ForumContext.Provider>
    );
};