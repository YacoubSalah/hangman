import { Component } from 'react';
import Letter from './Letter';

class Solution extends Component {

    displaySolution(charOfSolutionWord, lettersStatus) {
        return charOfSolutionWord.map(c => {
            if (lettersStatus[c]) {
                return <Letter letter={c} />
            } else {
                return <Letter letter="_" />
            }
        })
    }

    render() {
        let solution = this.props.solution
        let charOfSolutionWord = solution.word.split("")
        let hint = this.props.solution.hint
        let lettersStatus = this.props.lettersStatus

        return (
            <div>
                <br></br>
                <div>--Solution--</div>
                <div>
                    {this.displaySolution(charOfSolutionWord, lettersStatus)}
                </div>
                <br></br>
                <div>--Hint--</div>
                <div>{hint}</div>
            </div>
        )

    }

}

export default Solution