import styles from "./../styles/HeroSection.module.css"
import AppBtn from "./AppBtn";
import Image from "./../assets/Images/Illustration.png"
const HeroSection = ()=> {
     return(
        <div className={styles.hero}>
            <div className={styles.lessons}>
                <h1>Lessons and insights <br/><span>from 8 years</span></h1>
                <p>Where to grow your business as a photographer: site or social media?</p>
                <div className={styles.btn}>
                <AppBtn text={"SignUp"} bgColor={"#4CAF4F"} textColor={"#FFFF"} />
                </div>
            </div>
            <div className={styles.imageDiv}>
                <img src={Image} alt="Illustration" />
            </div>
        </div>
     );
};
export default HeroSection;