import React from "react";
import "./App.css";
import Header from "./Header/Header"
import ResultsContainer from "./ResultsContainer/ResultsContainer";
import SearchBox from "./SearchBox/SearchBox";

const name = require("@rstacruz/startup-name-generator");

class App extends React.Component {
    state = {
        headerText: 'Name It!',
        headerExpanded: true,
    };
    handleInputChange = (inputtext) => {
        this.setState({ headerExpanded: inputtext.length > 0 ? false : true});
       };
    render () {
        console.log(name('cloud'));
        return (
            <div>
                <Header headerExpanded={this.state.headerExpanded} 
                        headTitle={this.state.headerText}/>
                <SearchBox onInputChange={this.handleInputChange}/>
                <ResultsContainer />
            </div>
        )
    }
}

export default App;