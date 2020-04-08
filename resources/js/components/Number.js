import React from 'react';
import './Number.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChessKnight} from "@fortawesome/free-solid-svg-icons";

const Number = ({number, color}) => {
	return (
		<div className="square">
			<p className={`number ${color}`}>{number}</p>
			<FontAwesomeIcon icon={faChessKnight}/>
		</div>
	);
};

export default Number;
