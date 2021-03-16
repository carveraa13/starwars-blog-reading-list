import React from "react";
import { Link } from "react-router-dom";
import swlogo from "../../img/star-wars.png";
import { DropDown } from "./dropdown";

export const Navbar = () => {
	const styleimg = {
		maxHeight: "3rem"
	};
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 px-5">
					<img
						style={styleimg}
						src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"
					/>
				</span>
			</Link>
			<DropDown />
		</nav>
	);
};
