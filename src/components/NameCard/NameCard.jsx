import React from "react";
import "./NameCard.css";

const nameCheapUrl =
    'https://www.namecheap.com/domains/registration/results/?domain=';
function NameCard ({ suggestedName }) {
    return (
        <a
            target="_blank"
            href={`${nameCheapUrl}${suggestedName}`}
            rel="noreferrer"
            className="result-name-link" >
        <div className="result-card">
            <p className="result-name">
                {suggestedName}
            </p>
        </div>
        </a>
    );
}
export default NameCard;