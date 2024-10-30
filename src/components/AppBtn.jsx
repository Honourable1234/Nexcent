function AppBtn({textColor, text, bgColor}) {
    return(
        <button style={{...styles.btn, color: textColor, backgroundColor: bgColor}}>
            {text}
        </button>
    );
};
const styles = {
    btn: {
        padding: "15px 20px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        width: "100%",
        fontSize: "16px",
        fontWeight: "500",
      },

};
export default AppBtn