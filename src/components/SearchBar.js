import React from 'react';

class SearchBar extends React.Component{

    state = { myInput : '' }

    onInputChange = (event) => {
        this.setState({ myInput : event.target.value });
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.myInput)
        //Make sure we call
        //From parent component
    }

    render(){
        return(
            <div className="searchbar-style ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>What are you looking for?</label>
                        <div className="ui icon input">
                        <input 
                            type="text" 
                            value={this.state.myInput}
                            onChange={this.onInputChange} />
                            <i class="search icon"></i>
                        </div>
                    </div>
                </form>
            </div>
        )
    } 
}

export default SearchBar;