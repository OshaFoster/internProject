import React from "react";

function Header(){

    const headerStyle = {

        backgroundColor: "#cd5360",
        height: '60px',
        width: '100%',
        color: 'white',
        padding: '15px',
        fontSize: '24px',
        position:'fixed',
        top:'0',
        zIndex:'100',
        borderBottom: "1px solid #43849",

    }
    return(
        <div style={headerStyle}>
            Ausava
        </div>
    )
}

export default Header