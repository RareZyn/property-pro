import styles from './BrokerList.module.css';
import BrokerCard from '../../Cards/User Cards/BrokerCard'
import SearchBar from '../../Cards/General Cards/SearchBar';
import { useEffect, useState } from 'react';
import { getAllBrokers } from '../../utils/api';
import { Link } from 'react-router-dom';

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
    return(
        <div className={`header-footer-wrap ${styles['broker-list-container']}`}>
            <div className={`${styles['broker-list-header']}`}>
                <h1>Broker Lists</h1>
                <SearchBar id hint={"Search for topics discussion"}/>
            </div>
            <div className={`${styles['broker-list']}`}>
                {brokers?.map((broker) => (
                    <Link>
                        <BrokerCard name={broker.fullName} location={broker.user.location}/>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default BrokerList;