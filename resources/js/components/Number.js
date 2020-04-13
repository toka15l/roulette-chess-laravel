import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChessKnight} from "@fortawesome/free-solid-svg-icons";

const Number = ({number, color}) => {
	return (
		<div className="square">
			<span className={`number ${color}`}>{number}</span>
			<FontAwesomeIcon class="piece piece-black" icon={faChessKnight}/>
		</div>
	);
};

export default Number;
