import styles from "./../styles/Helping.module.css";
import IconOneImg from "./../assets/Images/IconOne.png"
import IconTwoImg from "./../assets/Images/IconTwo.png"
import IconThreeImg from "./../assets/Images/IconThree.png"
import IconFourImg from "./../assets/Images/IconFour.png"
function Helping() {
  return (
    <div className={styles.Helping}>
      <div className={styles.HelpingSide1}>
        <h2>
          Helping a local <br /><span>business reinvent itself</span>
        </h2>
        <p>We reached here with our hard work and dedication</p>
      </div>
      <div className={styles.HelpingSide2}>
        <div>
            <div className={styles.IconOne}>
                <img src={IconOneImg} alt="IconOne" />
                <h2>2,245,341</h2>
                <p>Members</p>
            </div>
            <div className={styles.IconThree}>
                <img src={IconThreeImg} alt="IconThree" />
                <h2>46,328</h2>
                <p>Clubs</p>
            </div>
        </div>
        <div>
            <div className={styles.IconTwo}>
                <img src={IconTwoImg} alt="IconOne" />
                <h2>828,867</h2>
                <p>Event Bookings</p>
            </div>
            <div className={styles.IconFour}>
                <img src={IconFourImg} alt="IconThree" />
                <h2>1,926,436</h2>
                <p>Payments</p>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Helping;
