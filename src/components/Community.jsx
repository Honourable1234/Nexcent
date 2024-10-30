import styles from "./../styles/Community.module.css"
import Image18 from "\./../assets/Images/image 18.png"
import Image19 from "\./../assets/Images/image 19.png"
import Image20 from "\./../assets/Images/image 20.png"
function Community() {
    return(
        <div className={styles.Community}>
            <div>
                <h2>Caring is the new marketing</h2>
                <p>The Nextcent blog is the best place to read about the latest membership insights, <br /> trends and more. See who's joining the community, read about how our community <br /> are increasing their membership income and lot's more. ​</p>
            </div>
            <div className={styles.images}>
                <div><img src={Image18} alt="Image18" />
                    <div className={styles.info}>
                        <h4>Creating Streamlined <br /> Safeguarding Processes with OneRen</h4>
                        <p>Read More</p>
                    </div>
                </div>
                <div><img src={Image19} alt="Image19" />
                    <div className={styles.info}>
                        <h4>What are your safeguarding responsibilities and how can you manage them?</h4>
                        <p>Read More</p>
                    </div>
                </div>
                <div><img src={Image20} alt="Image20" />
                    <div className={styles.info}>
                        <h4>Revamping the Membership <br /> Model with Triathlon <br /> Australia</h4>
                        <p>Read More</p>
                    </div>
                </div>
            </div>
            <div className={styles.extra}></div>
        </div>
    );
};
export default Community