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
				    {number: 1, color: 'red', piece: {type: faChessKing, color: 'black'}},
                    {number: 2, color: 'black', piece: {type: faChessQueen, color: 'white'}},
                    {number: 3, color: 'red', piece: {type: faChessBishop, color: 'black'}}
                ],
				[
				    {number: 4, color: 'black', piece: {type: faChessKnight, color: 'white'}},
                    {number: 5, color: 'red', piece: {type: faChessRook, color: 'black'}},
                    {number: 6, color: 'red', piece: {type: faChessPawn, color: 'white'}}
                ],
				[
				    {number: 7, color: 'red', piece: null},
                    {number: 8, color: 'black', piece: null},
                    {number: 9, color: 'red', piece: null}
                ],
				[
				    {number: 10, color: 'black', piece: null},
                    {number: 11, color: 'black', piece: null},
                    {number: 12, color: 'red', piece: null}],
				[
				    {number: 13, color: 'black', piece: null},
                    {number: 14, color: 'red', piece: null},
                    {number: 15, color: 'black', piece: null}
                ],
				[
				    {number: 16, color: 'red', piece: null},
                    {number: 17, color: 'black', piece: null},
                    {number: 18, color: 'red', piece: null}
                ],
				[
				    {number: 19, color: 'black', piece: null},
                    {number: 20, color: 'black', piece: null},
                    {number: 21, color: 'red', piece: null}
                ],
				[
				    {number: 22, color: 'black', piece: null},
                    {number: 23, color: 'red', piece: null},
                    {number: 24, color: 'black', piece: null}
                ],
				[
				    {number: 25, color: 'red', piece: null},
                    {number: 26, color: 'black', piece: null},
                    {number: 27, color: 'red', piece: null}
				],
				[
				    {number: 28, color: 'red', piece: null},
                    {number: 29, color: 'black', piece: null},
                    {number: 30, color: 'red', piece: null}
				],
				[
				    {number: 31, color: 'black', piece: null},
                    {number: 32, color: 'red', piece: null},
                    {number: 33, color: 'black', piece: null}
				],
				[
				    {number: 34, color: 'red', piece: null},
                    {number: 35, color: 'black', piece: null},
                    {number: 36, color: 'red', piece: null}
				]
			]
		};
	}

	clickPiece(number) {
        alert(number.piece.color);
    }

	render() {
		const rows = this.state.rows.map((row, i) => {
			const currentRow = row.map((number) => {
                return (
                    <div className={`square ${number.piece ? 'cursor-pointer' : ''}`} onClick={() => this.clickPiece(number)}>
                        <span className={`number ${number.color}`}>{number.number}</span>
                        {number.piece ? <FontAwesomeIcon className={`piece piece-${number.piece.color}`} icon={number.piece.type}/> : ''}
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
