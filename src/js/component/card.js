import React from "react";
// import { Link } from "react-router-dom";

export const Cards = props => {
	return (
		<div className="m-3">
			<div className="card">
				<img className="card-img-top" src="/images/pathToYourImage.png" alt="Card image cap" />
				<div className="card-body text-left">
					<h4 className="card-title">title</h4>
					<p className="card-text-wrap">
						<p>Gender: gender</p>
						<p>Hair color: hcolor</p>
						<p>Eye-Color: ecolor</p>
					</p>
					<a href="#!" className="btn btn-primary">
						Learn more!
					</a>
					<button type="button" className="btn btn-outline-primary">
						♡
					</button>
				</div>
			</div>
		</div>
	);
};
