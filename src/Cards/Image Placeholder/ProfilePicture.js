import styles from './ProfilePicture.module.css'

const ProfilePicture = ({ imgLink, size }) => {
  const imageSizeStyle = size ? { height: size, width: size } : { width: '120px', height: '120px' };

  return (
    <img
      id={styles['user-image']}
      src={imgLink || require('../../Res/image/user profile.png')}
      alt="User Profile"
      style={imageSizeStyle}
    />
  );
};

export default ProfilePicture