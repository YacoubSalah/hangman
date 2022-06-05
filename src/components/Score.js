import { Component } from "react";

class Score extends Component {

    render() {
        let score = this.props.score

        return (
            <div>
                <br></br>
                <div>--Score--</div>
                <div>{score}</div>
            </div>
        )

    }

}

export default Score