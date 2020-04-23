import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChessKing} from "@fortawesome/free-solid-svg-icons";
import {faChessQueen} from "@fortawesome/free-solid-svg-icons";
import {faChessBishop} from "@fortawesome/free-solid-svg-icons";
import {faChessKnight} from "@fortawesome/free-solid-svg-icons";
import {faChessRook} from "@fortawesome/free-solid-svg-icons";
import {faChessPawn} from "@fortawesome/free-solid-svg-icons";

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			rows: [
				[
				    {number: 1, color: 'red', piece: {type: faChessKing, color: 'black'}, moving: false},
                    {number: 2, color: 'black', piece: {type: faChessQueen, color: 'white'}, moving: false},
                    {number: 3, color: 'red', piece: {type: faChessBishop, color: 'black'}, moving: false}
                ],
				[
				    {number: 4, color: 'black', piece: {type: faChessKnight, color: 'white'}, moving: false},
                    {number: 5, color: 'red', piece: {type: faChessRook, color: 'black'}, moving: false},
                    {number: 6, color: 'red', piece: {type: faChessPawn, color: 'white'}, moving: false}
                ],
				[
				    {number: 7, color: 'red', piece: null, moving: false},
                    {number: 8, color: 'black', piece: null, moving: false},
                    {number: 9, color: 'red', piece: null, moving: false}
                ],
				[
				    {number: 10, color: 'black', piece: null, moving: false},
                    {number: 11, color: 'black', piece: null, moving: false},
                    {number: 12, color: 'red', piece: null, moving: false}
                ],
				[
				    {number: 13, color: 'black', piece: null, moving: false},
                    {number: 14, color: 'red', piece: null, moving: false},
                    {number: 15, color: 'black', piece: null, moving: false}
                ],
				[
				    {number: 16, color: 'red', piece: null, moving: false},
                    {number: 17, color: 'black', piece: null, moving: false},
                    {number: 18, color: 'red', piece: null, moving: false}
                ],
				[
				    {number: 19, color: 'black', piece: null, moving: false},
                    {number: 20, color: 'black', piece: null, moving: false},
                    {number: 21, color: 'red', piece: null, moving: false}
                ],
				[
				    {number: 22, color: 'black', piece: null, moving: false},
                    {number: 23, color: 'red', piece: null, moving: false},
                    {number: 24, color: 'black', piece: null, moving: false}
                ],
				[
				    {number: 25, color: 'red', piece: null, moving: false},
                    {number: 26, color: 'black', piece: null, moving: false},
                    {number: 27, color: 'red', piece: null, moving: false}
				],
				[
				    {number: 28, color: 'red', piece: null, moving: false},
                    {number: 29, color: 'black', piece: null, moving: false},
                    {number: 30, color: 'red', piece: null, moving: false}
				],
				[
				    {number: 31, color: 'black', piece: null, moving: false},
                    {number: 32, color: 'red', piece: null, moving: false},
                    {number: 33, color: 'black', piece: null, moving: false}
				],
				[
				    {number: 34, color: 'red', piece: null, moving: false},
                    {number: 35, color: 'black', piece: null, moving: false},
                    {number: 36, color: 'red', piece: null, moving: false}
				]
			]
		};
	}

	clickPiece(number) {
        let rowIndex = 0;
        let columnIndex = 0;
        let newRows = this.state.rows;
        for (let i = 0; i < newRows.length; i++) {
            for (let j = 0; j < newRows[i].length; j++) {
                if (newRows[i][j].number === number.number) {
                    rowIndex = i;
                    columnIndex = j;
                    newRows[i][j].moving = true;
                } else {
                    newRows[i][j].moving = false;
                }
            }
        }
        this.setState({rows: newRows});
    }

	render() {
		const rows = this.state.rows.map((row, i) => {
			const currentRow = row.map((number) => {
                return (
                    <div className={`square ${number.piece ? 'cursor-pointer' : ''}`} onClick={() => this.clickPiece(number)}>
                        <span className={`number ${number.color}`}>{number.number}</span>
                        {number.piece ? <FontAwesomeIcon className={`piece piece-${number.piece.color} ${number.moving ? 'moving' : ''}`} icon={number.piece.type}/> : ''}
                    </div>
                );
			});
			return (
				<div className="row" key={i}>
					{currentRow}
				</div>
			);
		});

		return (
			<div className="d-flex justify-content-center">
				<div className="board">
					{rows}
				</div>
			</div>
		);
	}
}

export default Board;
