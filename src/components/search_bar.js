import React, {Component} from 'react';  // <- always needed for JSX as JSX gets expanded!

class SearchBar extends Component {

	constructor (props) {
	  super(props);

	  this.state = {term: ''};
	}

	onInputChange (term) {
		this.setState({term});   // ES6 for this.setState({term: term});
		this.props.onSearchTermChange(term); // this requires "debouncing" from lodash - install with $ npm install --save lodash - see index.js
	}

	render() {


	   return (
       <div className="search-bar">
          <input
					   value={this.state.term}
					   onChange={event => this.onInputChange(event.target.value)}
          />
       </div>
	   );
	}

}

export default SearchBar
