import { Component } from 'react';
import Letter from './Letter';

class Solution extends Component {

    constructor() {
        super()
        this.state = {
            sol: ['_', '_', '_', '_']
        }
    }

    render() {

        return (
            <div>
                {this.state.sol.map(s => <Letter letter={s} />)}
            </div>
        )

    }

}

export default Solution