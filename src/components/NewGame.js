import { Component } from "react";

class NewGame extends Component {

    render() {
        return <button onClick={this.props.startNewGame}>New Word</button>
    }
    
}

export default NewGame