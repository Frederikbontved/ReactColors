export default {
    Palette: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
    },
    paletteColors: {
        height: "90vh"
    },
    goBack: {
        width: "20%",
        height: "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        opacity: "1",
        backgroundColor: "black",

        "& a": {
            width: "100px",
            height: "30px",
            position: "absolute",
            display: "inline-block",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            outline: "none",
            background: "rgba(255, 255, 255, .3)",
            fontSize: "1rem",
            lineHeight: "30px",
            color: "white",
            textTransform: "uppercase",
            border: "none",
            transition: ".5s",
            textDecoration: "none"
        }
    }
};