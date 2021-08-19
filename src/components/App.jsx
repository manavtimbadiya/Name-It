import React, {useState} from "react";
import "./App.css";
import Header from "./Header/Header"
import ResultsContainer from "./ResultsContainer/ResultsContainer";
import SearchBox from "./SearchBox/SearchBox";

const name = require('@rstacruz/startup-name-generator');

function App () {
    const [headerText, setHeaderText] = useState('Name It!');
    const [headerExpanded, setHeaderExpanded] = useState(true);
    const [suggestedNames, setSuggestedNames] = useState([]);


    const handleInputChange = (inputtext) => {
        setHeaderExpanded(!inputtext);
        setSuggestedNames(inputtext ? name(inputtext) : []);
    };

    return (
        <div>
            <Header headerExpanded={headerExpanded} 
                    headTitle={headerText}/>
            <SearchBox onInputChange={handleInputChange}/>
            <ResultsContainer suggestedNames={suggestedNames}/>
        </div>
        );
}

export default App;