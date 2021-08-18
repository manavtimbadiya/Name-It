import React from "react";
import "./ResultsContainer.css";
import NameCard from "../NameCard/NameCard";

function ResultsContainer ({suggestedNames}) {
    const suggestedNameJsx = suggestedNames.map(suggestedName =>{
        return <NameCard key={suggestedName} suggestedName={suggestedName} />
    });
   return (
       <div className="results-container">
           {suggestedNameJsx}
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