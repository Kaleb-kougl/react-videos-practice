import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    termToQuery: ""
  }

  handleTextInput = e => {
    this.setState({ termToQuery: e.target.value });
  }

  onFormSubmit = e => {
    e.preventDefault();
    console.log(this.state.termToQuery);
    this.props.onTermSubmit(this.state.termToQuery);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label className="">Video Search</label>
            <input input="text" placeholder="Type name of video here" value={this.state.termToQuery} onChange={this.handleTextInput}>
            </input>
          </div>
        </form>
      </div >
    )
  }
}

export default SearchBar;
