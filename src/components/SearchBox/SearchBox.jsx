import React from "react"
import "./SearchBox.css"

function SearchBox({onInputChange}) {
    return (
        <div className="SearchBox-container">
            <input onChange={function (event) {onInputChange(event.target.value)}}
                    type="text" placeholder="Type Keywords Here" 
                    className="SearchBox-input" />
        </div>
    );
}

export default SearchBox;