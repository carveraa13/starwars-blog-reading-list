import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Characters } from "../component/card";
import { Planets } from "../component/planets";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container text-font-base">
			<h2 className="text-danger">Characters</h2>
			<div className="testimonial-group">
				<div className="row">
					{store.peopleList.map((people, i) => (
						<div className="cardhorizontal" key={i}>
							<Characters PeopleID={people.uid} />
						</div>
					))}
				</div>
			</div>
			<h2 className="text-danger mt-3">Planets</h2>
			<div className="testimonial-group">
				<div className="row">
					{store.planetList.map((planet, i) => (
						<div className="cardhorizontal" key={i}>
							<Planets PlanetID={planet.uid} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
