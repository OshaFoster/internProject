import React from "react";
import butterflyImg from "../image/butterflyImg.png"

function Header(){

    const headerStyle = {

        backgroundColor: "#cd5360",
        height: '70px',
        width: '100%',
        padding: '20px',
        fontSize: '24px',
        position:'fixed',
        top:'0',
        zIndex:'100',
        borderBottom: "1px solid #43849",
    };

    const ausavaStyle = {
        fontSize: '32px',
        color: 'white',
        marginLeft: "20px",

    };

    const imgStyle = {
        marginLeft:'100px',
    }

    return(
        <div style={headerStyle}>
            <img style={imgStyle} src={butterflyImg} alt="butterfly" />
            <span style={ausavaStyle}>Ausava</span>
        </div>

    )
}

export default Header