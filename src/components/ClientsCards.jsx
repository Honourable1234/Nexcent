function ClientCard({ image, heading, content }) {
  return (
    <div style={{ ...styles.ClientCard }}>
      <img src={image} alt="ClientCard"  style={styles.imgSize}/>
      <h2 style={styles.h2}>{heading}</h2>
      <p style={styles.p}>{content}</p>
    </div>
  );
}
const styles = {
  ClientCard: {
    width: "350px",
    minHeight: "60vh",
    alignItems: "center",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "7px",
    textAlign: "center",
    fontFamily: "inter",
    padding:"20px",
    backgroundColor: "white"
  },
  imgSize: {
    height:"60px",
    marginTop:"30px",
  },
  h2: {
     marginTop:"30px",
     fontSize: "23px",
     color:"#4d4d4d"
  },
  p:{
    marginTop:"20px",
     fontSize: "20px",
     color:"#4d4d4d"
  }
};
export default ClientCard;
