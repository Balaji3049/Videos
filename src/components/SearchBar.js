import React from "react";

class SearchBar extends React.Component {
    state = { term: "" };

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    };

    onInputOnChange = event => {
        this.setState({
            term: event.target.value
        });
    };
    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label htmlFor="videos">Video Search</label>
                        <input
                            id="videos"
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputOnChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
