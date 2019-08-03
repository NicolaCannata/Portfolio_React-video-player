import React from 'react';

class SearchBar extends React.Component{

    state = { myInput : '' }

    onInputChange = (event) => {
        this.setState({ myInput : event.target.value });
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        //Make sure we call
        //From parent component
    }

    render(){
        return(
            <div className="searchbar-style ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <laber>What are you looking for?</laber>
                        <input 
                            type="text" 
                            value={this.state.myInput}
                            onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        )
    } 
}

export default SearchBar;