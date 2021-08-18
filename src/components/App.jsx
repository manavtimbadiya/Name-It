import React from "react";
import "./App.css";
import Header from "./Header/Header"
import ResultsContainer from "./ResultsContainer/ResultsContainer";
import SearchBox from "./SearchBox/SearchBox";

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    state = {
        headerText: 'Name It!',
        headerExpanded: true,
        suggestedNames: [],
    };
    handleInputChange = (inputtext) => {
        this.setState({ headerExpanded: inputtext.length > 0 ? false : true,
                         suggestedNames: inputtext ? name(inputtext) : [],
                        });
       };
       
    render () {
        return (
            <div>
                <Header headerExpanded={this.state.headerExpanded} 
                        headTitle={this.state.headerText}/>
                <SearchBox onInputChange={this.handleInputChange}/>
                <ResultsContainer suggestedNames={this.state.suggestedNames}/>
            </div>
        )
    }
}

export default App;