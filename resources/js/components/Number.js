import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChessKing} from "@fortawesome/free-solid-svg-icons";
import {faChessQueen} from "@fortawesome/free-solid-svg-icons";
import {faChessBishop} from "@fortawesome/free-solid-svg-icons";
import {faChessKnight} from "@fortawesome/free-solid-svg-icons";
import {faChessRook} from "@fortawesome/free-solid-svg-icons";
import {faChessPawn} from "@fortawesome/free-solid-svg-icons";

class Number extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        let piece = '';
        if (this.props.piece) {
            let type;
            switch (this.props.piece.type) {
                case 'K':
                    type = faChessKing;
                    break;
                case 'Q':
                    type = faChessQueen;
                    break;
                case 'B':
                    type = faChessBishop;
                    break;
                case 'N':
                    type = faChessKnight;
                    break;
                case 'R':
                    type = faChessRook;
                    break;
                case 'P':
                    type = faChessPawn;
                    break;
                default:
                    break;
            }
            piece = <FontAwesomeIcon className={`piece ${this.props.piece.color === 'W' ? 'piece-white' : 'piece-black'}`} icon={type}/>;
        }
        return (
            <div className="square">
                <span className={`number ${this.props.color}`}>{this.props.number}</span>
                {piece}
            </div>
        );
    }
}

export default Number;
