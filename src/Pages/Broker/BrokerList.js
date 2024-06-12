import styles from './BrokerList.module.css';
import BrokerCard from '../../Cards/User Cards/BrokerCard'
import SearchBar from '../../Cards/General Cards/SearchBar';
import { useEffect, useState,useContext } from 'react';
import { getAllBrokers } from '../../utils/api';
import { Link,useNavigate } from 'react-router-dom';
import ChatContext from '../../context/ChatContext';
import { UserContext } from '../../context/UserContext';
import { getUser } from '../../utils/userAPI';

function BrokerList(){
    const [brokers, setBrokers] = useState([]);
    
    useEffect(() => {
      const fetchBrokers = async () => {
        try {
          const data = await getAllBrokers();
          setBrokers(data);
        } catch (error) {
          console.error('Error fetching brokers:', error);
        }
      };
  
      fetchBrokers();
    }, []);
    console.log(brokers)
    
    // To handle fetch user
    const { userToken } = useContext(UserContext);
    const [user, setUser] = useState(null);

    useEffect(() => {
      const fetchUser = async () => {
        try {
          const userData = await getUser(userToken);
          setUser(userData);
        } catch (error) {
          console.error("Failed to fetch user data:", error);
        }
      };
  
      if (userToken) {
        fetchUser();
      } else {
        console.log("No user token");
      }
    }, [userToken]);
  
    const userID = user?._id;
    // End fetch user

    // To handle chat vv
    const { createRoom } = useContext(ChatContext);
    const navigate = useNavigate()

    const createChatRoom = async (currentBrokerID) => {
      console.log("Broker ID:",currentBrokerID);
      try{
        await createRoom(userID,currentBrokerID);
        navigate("/chat");
      } catch(error){
        console.error("Error Create Chat Room {PropertyVehicleDetails}: ",error);
      }
    };
    // End handle chat ^^
    console.log(brokers);
    return(
        <div className={`header-footer-wrap ${styles['broker-list-container']}`}>
            <div className={`${styles['broker-list-header']}`}>
                <h1>Broker Lists</h1>
                <SearchBar id hint={"Search for topics discussion"}/>
            </div>
            <div className={`${styles['broker-list']}`}>
                {brokers?.map((broker) => (
                  <Link to={"/chat"}>
                    <div onClick={() => createChatRoom(broker.user.id)}>
                        <BrokerCard name={broker.fullName} location={broker.user.location} image={broker.user.profilePicture}/>
                    </div>
                  </Link>
                ))}
            </div>
        </div>
    );
}

export default BrokerList;