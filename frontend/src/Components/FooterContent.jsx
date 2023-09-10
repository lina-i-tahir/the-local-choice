import Logo from "./Logo";

const FooterContent = () => {
    return (
        <div style={{
            borderTop: "0.5px solid #99958C",
            display: "flex",
            position: "absolute",
            bottom: "10px",
            width: "100vw",
            color: "#99958C",
            fontSize: "11px",
            justifyContent: "center",
        }}>
           <p>
           © 2023 by The Local Choice
           </p>
        </div>
    );
}

export default FooterContent;
