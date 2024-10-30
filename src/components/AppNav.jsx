import logo from "./../assets/Images/Logo.png";
import AppBtn from "./AppBtn";
import styles from "./../styles/AppNav.module.css"
const AppNav = ()=>{
    return (
        <nav className={styles.nav} >
            <img src={logo} alt="logo" className={styles.logo} />
            <div className={styles.menus}>
                <div className={styles.menu}>
                    <p>Home</p>
                </div>
                <div className={styles.menu}>
                    <p>Features</p>
                </div>
                <div className={styles.menu}>
                    <p>Community</p>
                </div>
                <div className={styles.menu}>
                    <p>Blog</p>
                </div>
                <div className={styles.menu}>
                    <p>Pricing</p>
                </div>
            </div>
            <div className={styles.btns} >
                <div >
                   <AppBtn text={"Login"} bgColor={"#F5F7FA"} textColor={"#4CAF4F"} />
                </div>
                <div >
                    <AppBtn text={"SignUp"} bgColor={"#4CAF4F"} textColor={"#FFFF"} />
                </div>
            </div>
        </nav>
    );
};

export default AppNav;