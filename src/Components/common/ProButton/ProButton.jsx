import React from "react";
import "./styles.css"

const ProButton = ({ text, title, customStyleClass = "", clicked, disabled = false }) => {
    return (
        <button
            title={title}
            className={"page-btn " + customStyleClass}
            onClick={clicked}
            disabled={disabled} //pages before 1 are disabled
        >
            {text}
        </button>
    )
}
export default ProButton;