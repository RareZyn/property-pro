import styles from "./ForumPage.module.css";
import { ForumHeader } from "./ForumHeader";

const ForumPage = () => {
  return (
    <>
    <ForumHeader/>
    <div className={styles.ForumPage}>
      <button className={styles['create-post']}>
        <div className={styles['create-firstRow-container']}>
          <img
            id={styles['user-image']}
            src={require("../../Res/image/user profile.png")}
          />
          <p id={styles['user-text-button']}>What's on your mind Azim?</p>
        </div>
        <div className={styles['create-secondRow-container']}>
          <div className={`${styles.box} ${styles.one}`}>
            <img
              id={styles['button-image']}
              src={require("../../Res/image/image icon.png")}
            />
            <p id={styles['button-text']}>Likes</p>
          </div>
          <div className={`${styles.box} ${styles.two}`}>
            <img id={styles['button-image']} src={require("../../Res/image/video.png")} />
            <p id={styles['button-text']}>Video</p>
          </div>
        </div>
      </button>
      <div className={styles['topic-discuss']}>
        <div className={styles['user-profile']}>
          <img
            id={styles['user-image']}
            src={require("../../Res/image/user profile.png")}
          />
          <section id={styles['user-text']}>
            <p id={styles['user-name']}>Wan Harith</p>
            <p id={styles['user-time']}>10 min ago</p>
          </section>
        </div>
        <div className={styles['user-text']}>
          <p id={styles['user-text-post']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi. Proin
            porttitor, orci nec nonummy molestie, enim est eleifend mi, non
            fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa,
            scelerisque vitae, consequat in, pretium a, enim.
          </p>
        </div>
        <div className={styles['user-button']}>
          <button className={styles.button}>
            <img id={styles['img-button']} src={require("../../Res/image/heart.png")} />
            <p id={styles['img-description']}>Likes</p>
          </button>
          <button className={styles.button}>
            <img
              id={styles['img-button']}
              src={require("../../Res/image/message-square.png")}
            />
            <p id={styles['img-description']}>Likes</p>
          </button>
          <button className={styles.button}>
            <img id={styles['img-button']} src={require("../../Res/image/share-2.png")} />
            <p id={styles['img-description']}>Likes</p>
          </button>
        </div>
      </div>

      <div className={styles['topic-discuss']}>
        <div className={styles['user-profile']}>
          <img
            id={styles['user-image']}
            src={require("../../Res/image/user profile.png")}
          />
          <section id={styles['user-text']}>
            <p id={styles['user-name']}>Wan Harith</p>
            <p id={styles['user-time']}>10 min ago</p>
          </section>
        </div>
        <div className={styles['user-text']}>
          <p id={styles['user-text-post']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi. Proin
            porttitor, orci nec nonummy molestie, enim est eleifend mi, non
            fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa,
            scelerisque vitae, consequat in, pretium a, enim.
          </p>
        </div>
        <div className={styles['user-button']}>
          <button className={styles.button}>
            <img id={styles['img-button']} src={require("../../Res/image/heart.png")} />
            <p id={styles['img-description']}>Likes</p>
          </button>
          <button className={styles.button}>
            <img
              id={styles['img-button']}
              src={require("../../Res/image/message-square.png")}
            />
            <p id={styles['img-description']}>Likes</p>
          </button>
          <button className={styles.button}>
            <img id={styles['img-button']} src={require("../../Res/image/share-2.png")} />
            <p id={styles['img-description']}>Likes</p>
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export {ForumPage}