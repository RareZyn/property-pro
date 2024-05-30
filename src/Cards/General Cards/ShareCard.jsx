// Mka esure sizing width = 35%

import styles from "./ShareCard.module.css";
import Rate1GreySvg from '../../Res/image/feedback/rate-1-grey.svg';
import Rate2GreySvg from '../../Res/image/feedback/rate-2-grey.svg';
import Rate3GreySvg from '../../Res/image/feedback/rate-3-grey.svg';
import Rate4GreySvg from '../../Res/image/feedback/rate-4-grey.svg';
import Rate5GreySvg from '../../Res/image/feedback/rate-5-grey.svg';
import { useState } from "react";

function ShareCard(){
    const [category, setCategory] = useState(0);

    return(
        <div id={styles["share-card"]}>
            <h1>Your Feedback</h1>
            <hr />

            <div className={styles['row-container']}>
                <span>Thanks for purchasing using our apps. Feel free to give feedback to your seller.</span>
                <span className={styles['span-center']}>Rate the property that you have bought</span>
                <div id={styles["fb-button-container"]}>
                    <object type="image/svg+xml" data={Rate1GreySvg} className={styles["fb-button"]}></object>
                    <img className={styles["fb-button"]} src={Rate2GreySvg} alt="" />
                    <img className={styles["fb-button"]} src={Rate3GreySvg} alt="" />
                    <img className={styles["fb-button"]} src={Rate4GreySvg} alt="" />
                    <img className={styles["fb-button"]} src={Rate5GreySvg} alt="" />
                </div>
            </div>
            <hr />

            <div className={styles['row-container']}>
                <span>Please select your feedback category below.</span>
                <div id={styles["category-button-container"]}>
                    <button 
                        className={`${category === 1 ? styles["selected-category"] : styles["category-button"]}`} 
                        onClick={() => setCategory(category === 1 ? 0 : 1)}>Suggestion</button>
                    <button 
                        className={`${category === 2 ? styles["selected-category"] : styles["category-button"]}`} 
                        onClick={() => setCategory(category === 2 ? 0 : 2)}>Something is not quite right</button>
                    <button 
                        className={`${category === 3 ? styles["selected-category"] : styles["category-button"]}`} 
                        onClick={() => setCategory(category === 3 ? 0 : 3)}>Compliment</button>
                    {/* <button className={styles["category-button"]}>Something is not quite right</button>
                    <button className={styles["category-button"]}>Compliment</button> */}
                </div>
            </div>
            <hr />

            <div className={styles['row-container']}>
                <span>Please select your feedback below.</span>
                <input id={styles['comment-box']} type="text" placeholder="Type your feedback here..."/>
            </div>
            
        </div>
    )
}

export default ShareCard    