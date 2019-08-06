import React from 'react'
import { connect } from 'react-redux';

const msp = state => {
    return {

    }
}
const mdp = dispatch => {
    return {

    }
}

class SearchComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = { query: "" }
    }
    handleChange(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }
    render(){
        // let search = this.state.query === "" ? 
        return (
            
            <div className="search-area">
                <input 
                    type="text" 
                    value={this.state.query} 
                    onChange={this.handleChange("query")} 
                    placeholder="Start Typing..." 
                    className="search-input"
                />
            </div>
            
        )
    }

}

export default connect(msp, mdp)(SearchComponent)