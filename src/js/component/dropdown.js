import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";

export const DropDown = props => {
	const { store, actions } = useContext(Context);
	const Counter = () => {
		let x = 0;
		store.peopleList.forEach(element => {
			if (element.favorite) {
				x++;
			}
		});
		store.planetList.forEach(element => {
			if (element.favorite) {
				x++;
			}
		});
		return <span className="badge badge-light">{x}</span>;
	};
	return (
		<div className="ml-auto">
			<div className="dropdown">
				<button
					className="btn btn-secondary dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites <Counter />
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<a className="dropdown-item" href="#">
						Action
					</a>
					<a className="dropdown-item" href="#">
						Another action
					</a>
					<a className="dropdown-item" href="#">
						Something else here
					</a>
				</div>
			</div>
		</div>
	);
};
