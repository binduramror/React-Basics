import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
	return (
		<div className="UserOutput">
		  <p> some random text </p>
		  <p> hope replace </p>
		  <p> user name {props.userName} </p>
		</div>
	);
};

export default userOutput;