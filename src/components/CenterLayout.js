import React from "react";

const centerLayoutStyle = {
    display: "block",
    maxWidth: 1170,
    margin: "0 auto",
    padding: "0 30px",
}

const CenterLayout = ({children}) => {
    return <div style={centerLayoutStyle}>{children}</div>;
}

export default CenterLayout;