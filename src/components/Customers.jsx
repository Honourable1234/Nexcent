import ImageNine from "./../assets/Images/image 9.png"
import styles from "./../styles/Customers.module.css"
import ClientImage1 from "./../assets/Images/logo (1).png";
import ClientImage2 from "./../assets/Images/logo (2).png";
import ClientImage3 from "./../assets/Images/logo (3).png";
import ClientImage4 from "./../assets/Images/logo (4).png";
import ClientImage5 from "./../assets/Images/logo (5).png";
import ClientImage6 from "./../assets/Images/logo (6).png";
function Customers() {
    return(
        <div className={styles.customers}>
            <div className={styles.image}>
                <img src={ImageNine} alt="" />
            </div>
            <div className={styles.texts}>
                <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                <h4>Tim Smith</h4>
                <p>British Dragon Boat Racing Association</p>
                <div className={styles.Logos}>
                    <div>
                        <img src={ClientImage1} alt="" /> 
                    </div>
                    <div>
                        <img src={ClientImage2} alt="" />
                    </div>
                    <div>
                        <img src={ClientImage3} alt="" />
                    </div>
                    <div>
                        <img src={ClientImage4} alt="" />
                    </div>
                    <div>
                        <img src={ClientImage5} alt="" />
                    </div>
                    <div>
                        <img src={ClientImage6} alt="" />
                    </div>
                    <h4>Meet all customers</h4>
                </div>
            </div>
        </div>
    );
};
export default Customers