import React, { useState, useEffect } from "react";
import "../../styles/home.scss";
import { Characters } from "../component/card";
import { Planets } from "../component/planets";

// const CardCharactersList = () => {
// 	return (
// 		<div className="col-4">
// 			<Cards />
// 		</div>
// 	);
// };

// const CardPlanetsList = () => {
// 	return (
// 		<div className="col-4">
// 			<Cards />
// 		</div>
// 	);
// };

export const Home = () => {
	const [Peoplelist, setPeopleList] = useState([]);
	const [Planetslist, setPlanetsList] = useState([]);

	let URL = "https://www.swapi.tech/api/";

	async function fnPeopleList() {
		// const result = await fetch(URL + "people/")
		const result = await fetch("https://raw.githubusercontent.com/johmstone/files/main/peopleresponse.json")
			.then(res => {
				if (res.status == 200) {
					return res.json();
				}
			})
			.catch(err => console.error(err));
		setPeopleList(result.results);
	}

	async function fnPLanetsList() {
		// const result = await fetch(URL + "people/")
		const result = await fetch("https://raw.githubusercontent.com/johmstone/files/main/JSONResultPlanets.json")
			.then(res => {
				if (res.status == 200) {
					return res.json();
				}
			})
			.catch(err => console.error(err));
		setPlanetsList(result.results);
	}

	useEffect(() => {
		fnPeopleList();
		fnPLanetsList();
	}, []);

	return (
		<div className="container text-font-base">
			<h2 className="text-danger">Characters</h2>
			<div className="testimonial-group">
				<div className="row">
					{Peoplelist.map((people, i) => (
						<div className="cardhorizontal" key={i}>
							<Characters PeopleID={people.uid} />
						</div>
					))}
				</div>
			</div>
			<h2 className="text-danger mt-3">Planets</h2>
			<div className="testimonial-group">
				<div className="row">
					{Planetslist.map((planet, i) => (
						<div className="cardhorizontal" key={i}>
							<Planets PlanetID={planet.uid} />
						</div>
					))}
				</div>
			</div>
		</div>
	);

	// <div className="text-center mt-5">
	// 	<div className="container testimonial-group">
	// 		<div className="row text-center">
	// 			<CardCharactersList />
	// 			<CardCharactersList />
	// 			<CardCharactersList />
	// 			<CardCharactersList />
	// 		</div>
	// 	</div>
	// 	<div className="container testimonial-group">
	// 		<div className="row text-center">
	// 			<CardPlanetsList />
	// 			<CardPlanetsList />
	// 			<CardPlanetsList />
	// 			<CardPlanetsList />
	// 		</div>
	// 	</div>
	// </div>
};
