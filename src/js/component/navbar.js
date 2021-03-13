import React from "react";
import { Link } from "react-router-dom";
import swlogo from "../../img/star-wars.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 px-5">
					<img src={swlogo} />
				</span>
			</Link>
			<div className="btn-group ml-auto px-5">
				<button
					type="button"
					className="btn btn-primary dropdown-toggle"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites <span className="badge badge-light">4</span>
				</button>
				<div className="dropdown-menu">
					<a className="dropdown-item" href="#">
						Action
					</a>
				</div>
			</div>
		</nav>
	);
};
