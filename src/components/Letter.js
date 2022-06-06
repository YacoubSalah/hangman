import { Component } from "react"

class Letter extends Component {

    checkLetter = () => {
        if (this.props.checkLetter) {
            this.props.checkLetter(this.props.letter)
        }
    }

    render() {
        let letter = this.props.letter
        let letterClass = this.props.letterClass

        return (
            <span onClick={this.checkLetter} className={letterClass}>    {letter}    </span>
        )

    }
}

export default Letter