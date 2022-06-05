import { Component } from "react"

class Letter extends Component {

    render() {
        let letter = this.props.letter

        return (
            <span> {letter} </span>
        )

    }
}

export default Letter