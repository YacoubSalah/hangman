import { Component } from "react"

class Letter extends Component {

    render() {
        let letter = this.props.letter
        let letterClass = this.props.letterClass

        return (
            <span className={letterClass}>    {letter}    </span>
        )

    }
}

export default Letter