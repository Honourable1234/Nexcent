import styles from "./../styles/design.module.css";
import AppBtn from "./AppBtn";
import Pana from "./../assets/Images/pana.png";
function Design() {
    return(
        <div className={styles.unseen}>
        <div>
          <img src={Pana} alt="Pana" />
        </div>
        <div>
          <h2>How to design your site footer like we did</h2>
          <p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
          <div className={styles.appbtns}><AppBtn text={"Learn More"} bgColor={"#4CAF4F"} textColor={"#FFFF"} /></div>
        </div>
 </div>
    );
};
export default Design