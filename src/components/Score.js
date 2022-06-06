import { Component } from "react";

class Score extends Component {

    render() {
        let score = this.props.score
        let scoreStyle = this.props.scoreStyle
        
        return (
            <div>
                <br></br>
                <div>--Score--</div>
                <div className={scoreStyle}>{score}</div>
            </div>
        )

    }

}

export default Score