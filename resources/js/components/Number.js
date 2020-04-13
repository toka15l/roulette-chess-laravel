import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChessKnight} from "@fortawesome/free-solid-svg-icons";

class Number extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="square">
                <span className={`number ${this.props.color}`}>{this.props.number}</span>
                <FontAwesomeIcon className="piece piece-black" icon={faChessKnight}/>
            </div>
        );
    }
}

export default Number;
