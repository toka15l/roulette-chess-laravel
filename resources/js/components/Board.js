import React from 'react';
import Number from "./Number";

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			rows: [
				[{number: 1, color: 'red'}, {number: 2, color: 'black'}, {number: 3, color: 'red'}],
				[{number: 4, color: 'black'}, {number: 5, color: 'red'}, {number: 6, color: 'red'}],
				[{number: 7, color: 'red'}, {number: 8, color: 'black'}, {number: 9, color: 'red'}],
				[{number: 10, color: 'black'}, {number: 11, color: 'black'}, {number: 12, color: 'red'}],
				[{number: 13, color: 'black'}, {number: 14, color: 'red'}, {number: 15, color: 'black'}],
				[{number: 16, color: 'red'}, {number: 17, color: 'black'}, {number: 18, color: 'red'}],
				[{number: 19, color: 'black'}, {number: 20, color: 'black'}, {number: 21, color: 'red'}],
				[{number: 22, color: 'black'}, {number: 23, color: 'red'}, {number: 24, color: 'black'}],
				[{number: 25, color: 'red'}, {number: 26, color: 'black'}, {number: 27, color: 'red'}],
				[{number: 28, color: 'red'}, {number: 29, color: 'black'}, {number: 30, color: 'red'}],
				[{number: 31, color: 'black'}, {number: 32, color: 'red'}, {number: 33, color: 'black'}],
				[{number: 34, color: 'red'}, {number: 35, color: 'black'}, {number: 36, color: 'red'}]
			],
            pieces: [
                {id: 'K', type: 'K', color: 'B', number: 1},
                {id: 'Q1', type: 'Q', color: 'W', number: 2},
                {id: 'B1', type: 'B', color: 'B', number: 3},
                {id: 'N1', type: 'N', color: 'B', number: 4},
                {id: 'R1', type: 'R', color: 'B', number: 5},
                {id: 'P1', type: 'P', color: 'W', number: 6},
            ]
		};
	}

	render() {
		const rows = this.state.rows.map((row, i) => {
			const currentRow = row.map((number) => {
			    let piece = this.state.pieces.filter((e) => e.number === number.number);
				return <Number number={number.number} color={number.color} key={number.number} piece={piece[0] ?? null}/>;
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
