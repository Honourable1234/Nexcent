import styles from "./../styles/Clients.module.css";
import ClientImage1 from "./../assets/Images/logo (1).png";
import ClientImage2 from "./../assets/Images/logo (2).png";
import ClientImage3 from "./../assets/Images/logo (3).png";
import ClientImage4 from "./../assets/Images/logo (4).png";
import ClientImage5 from "./../assets/Images/logo (5).png";
import ClientImage6 from "./../assets/Images/logo (6).png";
import ClientCard from "./ClientsCards";
import ClientIconOne from "./../assets/Images/Icon.png";
import ClientIconTwo from "./../assets/Images/Icon (1).png";
import ClientIconThree from "./../assets/Images/Icon (2).png";
import Frame35 from "./../assets/Images/Frame 35.png";
import AppBtn from "./AppBtn";
function Clients() {
  return (
    <div className={styles.clients}>
      <div className={styles.header}>
        <h2>Our Clients</h2>
        <p>We have been working with some Fortune 500+ clients</p>
        <div className={styles.logos}>
          <div className={styles.logo}>
            <img src={ClientImage1} alt="ClientImage1" />
          </div>
          <div className={styles.logo}>
            <img src={ClientImage2} alt="ClientImage2" />
          </div>
          <div className={styles.logo}>
            <img src={ClientImage3} alt="ClientImage3" />
          </div>
          <div className={styles.logo}>
            <img src={ClientImage4} alt="ClientImage4" />
          </div>
          <div className={styles.logo}>
            <img src={ClientImage5} alt="ClientImage5" />
          </div>
          <div className={styles.logo}>
            <img src={ClientImage6} alt="ClientImage6" />
          </div>
          <div className={styles.logo}>
            <img src={ClientImage3} alt="ClientImage3" />
          </div>
        </div>
        <h2>
          Manage your entire community <br />
          in a single system
        </h2>
        <p>Who is Nextcent suitable for?</p>
      </div>
      <div className={styles.clientCards}>
        <div className={styles.clientCard1}>
          <ClientCard
            image={ClientIconOne}
            heading={'Membership Organisations'}
            content={'Our membership management software provides full automation of membership renewals and payments'}
          />
        </div>
        <div className={styles.clientCard2}>
          <ClientCard 
            image={ClientIconTwo}
            heading={'National Associations'}
            content={'Our membership management software provides full automation of membership renewals and payments'}
          />
        </div>
        <div className={styles.clientCard3}>
          <ClientCard 
            image={ClientIconThree}
            heading={'Clubs And Groups'}
            content={'Our membership management software provides full automation of membership renewals and payments'}
          />
        </div>
      </div>
      <div className={styles.unseen}>
        <div>
          <img src={Frame35} alt="" />
        </div>
        <div>
          <h2>The unseen of spending three years at Pixelgrade</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
          <div className={styles.appbtns}><AppBtn text={"Learn More"} bgColor={"#4CAF4F"} textColor={"#FFFF"} /></div>
        </div>
      </div>
    </div>
  );
}
export default Clients;
