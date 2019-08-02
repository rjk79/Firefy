import React from 'react'

class PlaylistForm extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.playlist
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClickforCancel = this.handleClickforCancel.bind(this)
    }
    handleSubmit(e){
        e.preventDefault()
        this.props.processForm(this.state)
        this.props.closeModal()
    }
    handleChange(field){
        return e => this.setState({
            [field]: e.target.value
        })
    }
    handleClickforCancel(){
        this.props.closeModal()
    }
    render(){
        return(
            <div className="playlist-form-div">
                <form onSubmit={this.handleSubmit}>
                    <div className="playlist-form">
                    <label htmlFor="name" className="small playlist-name-input-label">Playlist Name</label>
                    <input id="name" 
                            className="playlist-name-input" 
                            type="text" value={this.state.name} 
                            onChange={this.handleChange("name")}
                            placeholder="New Playlist"/>
                    <br/>
                    </div>
                    <input className="session-button playlist-form-button long-padding" 
                            type="submit" 
                            value="Submit"
                            placeholder="Playlist Name"/>
                </form>
                <button className="cancel-button long-padding" onClick={this.handleClickforCancel}>Cancel</button>
            </div>
        )
    }
}

export default PlaylistForm