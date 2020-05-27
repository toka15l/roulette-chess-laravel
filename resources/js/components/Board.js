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
		    playerColor: 'white',
		    b1: {type: faChessPawn, color: 'black', hasMoved: false},
            b2: {type: faChessPawn, color: 'black', hasMoved: false},
            b3: {type: faChessPawn, color: 'black', hasMoved: false},
            b4: {type: faChessPawn, color: 'black', hasMoved: false},
            b5: {type: faChessPawn, color: 'black', hasMoved: false},
            b6: {type: faChessBishop, color: 'black', hasMoved: false},
            b7: {type: faChessBishop, color: 'black', hasMoved: false},
            b8: {type: faChessKnight, color: 'black', hasMoved: false},
            b9: {type: faChessKnight, color: 'black', hasMoved: false},
            b10: {type: faChessRook, color: 'black', hasMoved: false},
            b11: {type: faChessRook, color: 'black', hasMoved: false},
            b12: {type: faChessKing, color: 'black', hasMoved: false},
            w1: {type: faChessPawn, color: 'white', hasMoved: false},
            w2: {type: faChessPawn, color: 'white', hasMoved: false},
            w3: {type: faChessPawn, color: 'white', hasMoved: false},
            w4: {type: faChessPawn, color: 'white', hasMoved: false},
            w5: {type: faChessPawn, color: 'white', hasMoved: false},
            w6: {type: faChessBishop, color: 'white', hasMoved: false},
            w7: {type: faChessBishop, color: 'white', hasMoved: false},
            w8: {type: faChessKnight, color: 'white', hasMoved: false},
            w9: {type: faChessKnight, color: 'white', hasMoved: false},
            w10: {type: faChessRook, color: 'white', hasMoved: false},
            w11: {type: faChessRook, color: 'white', hasMoved: false},
            w12: {type: faChessKing, color: 'white', hasMoved: false},
			rows: [
				[
				    {number: 1, color: 'red', piece: null, moving: false, possible: false},
                    {number: 2, color: 'black', piece: null, moving: false, possible: false},
                    {number: 3, color: 'red', piece: null, moving: false, possible: false}
                ],
				[
				    {number: 4, color: 'black', piece: null, moving: false, possible: false},
                    {number: 5, color: 'red', piece: null, moving: false, possible: false},
                    {number: 6, color: 'red', piece: null, moving: false, possible: false}
                ],
				[
				    {number: 7, color: 'red', piece: null, moving: false, possible: false},
                    {number: 8, color: 'black', piece: null, moving: false, possible: false},
                    {number: 9, color: 'red', piece: null, moving: false, possible: false}
                ],
				[
				    {number: 10, color: 'black', piece: null, moving: false, possible: false},
                    {number: 11, color: 'black', piece: null, moving: false, possible: false},
                    {number: 12, color: 'red', piece: null, moving: false, possible: false}
                ],
				[
				    {number: 13, color: 'black', piece: null, moving: false, possible: false},
                    {number: 14, color: 'red', piece: null, moving: false, possible: false},
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

    componentDidMount() {
	    let startingPieces = [
	        [1, this.state.b10], [2, this.state.b12], [3, this.state.b11],
            [4, this.state.b1], [5, this.state.b6], [6, this.state.b7],
            [7, this.state.b8], [8, this.state.b9], [9, this.state.b2],
            [10, this.state.b3], [11, this.state.b4], [12, this.state.b5],
            [25, this.state.w1], [26, this.state.w2], [27, this.state.w3],
            [28, this.state.w4], [29, this.state.w8], [30, this.state.w9],
            [31, this.state.w6], [32, this.state.w7], [33, this.state.w5],
            [34, this.state.w10], [35, this.state.w12], [36, this.state.w11]
        ];
        let newRows = this.state.rows;
        for (let i = 0; i < newRows.length; i++) {
            for (let j = 0; j < newRows[i].length; j++) {
                for (let k=0; k < startingPieces.length; k++) {
                    if (startingPieces[k][0] === newRows[i][j].number) {
                        newRows[i][j].piece = startingPieces[k][1];
                        break;
                    }
                }
            }
        }
        this.setState({rows: newRows});
    }

	clickPiece(number) {
        if (number.piece) {
            let position = this.pickupPieceAtNumber(number);
            // set possible moves
            if (this.state.rows[position[1]][position[0]].moving) {
                switch (number.piece.type) {
                    case faChessQueen:
                        this.checkDirections(number.piece.color, position[0], position[1], [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]]);
                        break;
                    case faChessRook:
                        this.checkDirections(number.piece.color, position[0], position[1], [[-1, 0], [1, 0], [0, -1], [0, 1]]);
                        break;
                    case faChessBishop:
                        this.checkDirections(number.piece.color, position[0], position[1], [[-1, -1], [-1, 1], [1, -1], [1, 1]]);
                        break;
                    case faChessKnight:
                        this.checkKnight(number.piece.color, position[0], position[1]);
                        break;
                    case faChessPawn:
                        this.checkPawn(number.piece.color, position[0], position[1]);
                }
            }
        }
    }

    pickupPieceAtNumber(number) {
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
        this.setState({rows: newRows});
        return [columnIndex, rowIndex];
    }

    checkPawn(color, xStart, yStart) {
        const totalColumns = 3;
	    let direction = -1;
        if (color === 'black') {
            direction = 1;
        }
        let newRows = this.state.rows;
        // immediate forward position
        if (!newRows[yStart + 1 * direction][xStart].piece) {
            newRows[yStart + 1 * direction][xStart].possible = true;
        }
        // far forward position
        if (!newRows[yStart + 1 * direction][xStart].piece && !newRows[yStart + 2 * direction][xStart].piece && !newRows[yStart][xStart].piece.hasMoved) {
            newRows[yStart + 2 * direction][xStart].possible = true;
        }
        // left take position
        if (xStart - 1 >= 0 && newRows[yStart + 1 * direction][xStart - 1].piece && newRows[yStart + 1 * direction][xStart - 1].piece.color !== color) {
            newRows[yStart + 1 * direction][xStart - 1].possible = true;
        }
        // right take position
        if (xStart + 1 < totalColumns && newRows[yStart + 1 * direction][xStart + 1].piece && newRows[yStart + 1 * direction][xStart + 1].piece.color !== color) {
            newRows[yStart + 1 * direction][xStart + 1].possible = true;
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
