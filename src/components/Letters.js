import { Component } from "react";
import Letter from "./Letter";

class Letters extends Component {

    displayLetters(letterList, lettersStatus) {
        return letterList.map(l => {
            if (lettersStatus[l]) {
                return <Letter letter={l} letterClass="letterClicked" />
            } else {
                return <Letter letter={l} letterClass="letterNotClicked" />
            }
        })
    }

    render() {
        let lettersStatus = this.props.lettersStatus
        let letterList = Object.keys(lettersStatus)

        return (
            <div>
                <br></br>
                <div>--Available Letters--</div>
                {this.displayLetters(letterList, lettersStatus)}
            </div>
        )

    }

}

export default Letters