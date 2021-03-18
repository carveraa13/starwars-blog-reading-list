import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { DetailPeople } from "../component/detailPeople";
import { DetailPlanet } from "../component/detailPlanet";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	if (params.type === "people") {
		return <DetailPeople PeopleID={params.theid} />;
	} else {
		return <DetailPlanet PlanetID={params.theid} />;
	}
};

Single.propTypes = {
	match: PropTypes.object
};
