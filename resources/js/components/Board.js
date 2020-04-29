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
				    {number: 1, color: 'red', piece: {type: faChessKing, color: 'black'}, moving: false, possible: false},
                    {number: 2, color: 'black', piece: {type: faChessQueen, color: 'white'}, moving: false, possible: false},
                    {number: 3, color: 'red', piece: {type: faChessBishop, color: 'black'}, moving: false, possible: false}
                ],
				[
				    {number: 4, color: 'black', piece: {type: faChessKnight, color: 'black'}, moving: false, possible: false},
                    {number: 5, color: 'red', piece: {type: faChessRook, color: 'black'}, moving: false, possible: false},
                    {number: 6, color: 'red', piece: {type: faChessPawn, color: 'black'}, moving: false, possible: false}
                ],
				[
				    {number: 7, color: 'red', piece: null, moving: false, possible: false},
                    {number: 8, color: 'black', piece: null, moving: false, possible: false},
                    {number: 9, color: 'red', piece: null, moving: false, possible: false}
                ],
				[
				    {number: 10, color: 'black', piece: null, moving: false, possible: false},
                    {number: 11, color: 'black', piece: {type: faChessPawn, color: 'white'}, moving: false, possible: false},
                    {number: 12, color: 'red', piece: null, moving: false, possible: false}
                ],
				[
				    {number: 13, color: 'black', piece: null, moving: false, possible: false},
                    {number: 14, color: 'red', piece: {type: faChessBishop, color: 'black'}, moving: false, possible: false},
                    {number: 15, color: 'black', piece: null, moving: false, possible: false}
                ],
				[
				    {number: 16, color: 'red', piece: null, moving: false, possible: false},
                    {number: 17, color: 'black', piece: null, moving: false, possible: false},
                    {number: 18, color: 'red', piece: null, moving: false, possible: false}
                ],
				[
				    {number: 19, color: 'black', piece: null, moving: false, possible: false},
                    {number: 20, color: 'black', piece: null, moving: false, possible: false},
                    {number: 21, color: 'red', piece: null, moving: false, possible: false}
                ],
				[
				    {number: 22, color: 'black', piece: null, moving: false, possible: false},
                    {number: 23, color: 'red', piece: null, moving: false, possible: false},
                    {number: 24, color: 'black', piece: null, moving: false, possible: false}
                ],
				[
				    {number: 25, color: 'red', piece: null, moving: false, possible: false},
                    {number: 26, color: 'black', piece: null, moving: false, possible: false},
                    {number: 27, color: 'red', piece: null, moving: false, possible: false}
				],
				[
				    {number: 28, color: 'red', piece: null, moving: false, possible: false},
                    {number: 29, color: 'black', piece: null, moving: false, possible: false},
                    {number: 30, color: 'red', piece: null, moving: false, possible: false}
				],
				[
				    {number: 31, color: 'black', piece: null, moving: false, possible: false},
                    {number: 32, color: 'red', piece: null, moving: false, possible: false},
                    {number: 33, color: 'black', piece: null, moving: false, possible: false}
				],
				[
				    {number: 34, color: 'red', piece: null, moving: false, possible: false},
                    {number: 35, color: 'black', piece: null, moving: false, possible: false},
                    {number: 36, color: 'red', piece: null, moving: false, possible: false}
				]
			]
		};
	}

	clickPiece(number) {
        const totalRows = 12;
        const totalColumns = 3;
	    // get number row/column and set number piece as being moved
        let rowIndex = 0;
        let columnIndex = 0;
        let newRows = this.state.rows;
        for (let i = 0; i < newRows.length; i++) {
            for (let j = 0; j < newRows[i].length; j++) {
                newRows[i][j].possible = false;
                if (newRows[i][j].number === number.number) {
                    rowIndex = i;
                    columnIndex = j;
                    newRows[i][j].moving = !newRows[i][j].moving;
                } else {
                    newRows[i][j].moving = false;
                }
            }
        }
        // set possible moves
        if (newRows[rowIndex][columnIndex].moving) {
            switch (number.piece.type) {
                case faChessQueen:
                    this.checkDirections(number.piece.color, columnIndex, rowIndex, [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]]);
                    break;
                case faChessRook:
                    this.checkDirections(number.piece.color, columnIndex, rowIndex, [[-1, 0], [1, 0], [0, -1], [0, 1]]);
                    break;
                case faChessBishop:
                    this.checkDirections(number.piece.color, columnIndex, rowIndex, [[-1, -1], [-1, 1], [1, -1], [1, 1]]);
                    break;
                case faChessKnight:
                    this.checkKnight(number.piece.color, columnIndex, rowIndex);
            }
        }
        this.setState({rows: newRows});
    }

    checkKnight(color, xStart, yStart) {
        const totalRows = 12;
        const totalColumns = 3;
        let newRows = this.state.rows;
	    let check = [[-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1]];
	    for (let i = 0; i < check.length; i++) {
	        let xCheck = xStart + check[i][0];
	        let yCheck = yStart + check[i][1];
	        if (xCheck > -1 && xCheck < totalColumns && yCheck > -1 && yCheck < totalRows) {
                if (newRows[yCheck][xCheck].piece && newRows[yCheck][xCheck].piece.color === color) {
                    newRows[yCheck][xCheck].possible = false;
                } else {
                    newRows[yCheck][xCheck].possible = true;
                }
            }
        }
        this.setState({rows: newRows});
    }

    checkDirections(color, xStart, yStart, directions) {
        const totalRows = 12;
        const totalColumns = 3;
        let newRows = this.state.rows;
        for (let i = 0; i < directions.length; i++) {
            let xDirection = directions[i][0];
            let yDirection = directions[i][1];
            let xCheck = xStart + xDirection;
            let yCheck = yStart + yDirection;
            while ((xDirection === 0 || (xDirection < 0 && xCheck > -1) || (xDirection > 0 && xCheck < totalColumns)) && (yDirection === 0 || (yDirection < 0 && yCheck > -1) || (yDirection > 0 && yCheck < totalRows))) {
                if (newRows[yCheck][xCheck].piece) {
                    if (newRows[yCheck][xCheck].piece.color !== color) {
                        newRows[yCheck][xCheck].possible = true;
                        xCheck = xCheck + xDirection;
                        yCheck = yCheck + yDirection;
                    }
                    break;
                }
                newRows[yCheck][xCheck].possible = true;
                xCheck = xCheck + xDirection;
                yCheck = yCheck + yDirection;
            }
        }
        this.setState({rows: newRows});
    }

	render() {
		const rows = this.state.rows.map((row, i) => {
			const currentRow = row.map((number) => {
                return (
                    <div className={`square ${number.piece ? 'cursor-pointer' : ''}`} onClick={() => this.clickPiece(number)} key={number.number}>
                        <span className={`number ${number.possible ? 'possible' : number.color}`}>{number.number}</span>
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
