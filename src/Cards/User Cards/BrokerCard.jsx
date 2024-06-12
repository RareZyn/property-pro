import ProfilePicture from '../Image Placeholder/ProfilePicture';
import styles from './BrokerCards.module.css';

function BrokerCard({name, location,image, onCLick}){
    return (
      <div className={`${styles["broker-card-container"]}`} onClick={onCLick}>
        <ProfilePicture size={"5rem"} imgLink={image} />
        <div className={`${styles["broker-details"]}`}>
          <h1>{name ? name : "Name"}</h1>
          <p>{location ? location : "Location"}</p>
        </div>
      </div>
    );
}

export default BrokerCard;