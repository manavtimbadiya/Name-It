import React from "react";
import "./ResultsContainer.css"

function ResultsContainer ({suggestedNames}) {
    const suggestNameJsx = suggestedNames ? suggestedNames.map((suggestedName) => {
        return <p>{suggestedNames}</p> 
            }) : null ;
    return (
        <div className="results-container">
            <p>{suggestNameJsx}</p>
        </div>
    );
}

export default ResultsContainer;

/*import React from 'react';
import './ResultsContainer.css';

const ResultsContainer = ({ suggestedNames }) => {
    const suggestedNameCards = suggestedNames.map((suggestedName) => {
        return <p>{suggestedName}</p>
    });

    return <div className="results-container">{suggestedNameCards}</div>;
};

export default ResultsContainer;*/