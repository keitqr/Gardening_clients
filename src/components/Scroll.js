import React from "react";

const Scroll = (props) => {
    return  ( // in css in html we put style in {}, in jsx we do it with {{}}
        <div style={{ width: "1900px", height: "800px"}}> 
            {props.children}
        </div>
    )

}

export default Scroll;