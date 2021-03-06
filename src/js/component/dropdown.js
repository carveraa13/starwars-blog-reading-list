import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const DropDown = props => {
	const { store, actions } = useContext(Context);
	let x = 0;
	const Counter = () => {
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

	const Drop = () => {
		if (x == 0) {
			return (
				<div className="row my-0 ml-0 mr-2 text-center">
					<span className="dropdown-item">(Empty)</span>
				</div>
			);
		} else {
			return (
				<div>
					{store.peopleList.map((item, i) => {
						if (item.favorite) {
							return (
								<div className="row my-0 ml-0 mr-2" key={"people" + i}>
									<Link to={"/people/details/" + item.uid} replace>
										<a className="dropdown-item pl-2">{item.name}</a>
									</Link>
									<i
										className="far fa-trash-alt mt-2 ml-auto mr-0"
										onClick={() => actions.changeFavoritePeople(item.uid)}
										style={{ cursor: "pointer" }}
									/>
								</div>
							);
						}
					})}
					{store.planetList.map((item, i) => {
						if (item.favorite) {
							return (
								<div className="row my-0 ml-0 mr-2" key={"planet" + i}>
									<Link to={"/planets/details/" + item.uid} replace>
										<a className="dropdown-item pl-2">{item.name}</a>
									</Link>
									<i
										className="far fa-trash-alt mt-2  ml-auto mr-0"
										onClick={() => actions.changeFavoritePlanet(item.uid)}
										style={{ cursor: "pointer" }}
									/>
								</div>
							);
						}
					})}
				</div>
			);
		}
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
				<div
					className="dropdown-menu dropdown-menu-right"
					aria-labelledby="dropdownMenuButton"
					style={{ width: "max-content" }}>
					<Drop />
				</div>
			</div>
		</div>
	);
};
