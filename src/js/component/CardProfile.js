import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/people.scss";

export const CardProfile = ({ item, numItem }) => {
	const [description, setDescription] = useState([]);

	const description2 = () => {
		fetch(`https://www.swapi.tech/api/${item}/${numItem}`)
			.then(resp => resp.json())
			.then(Api => {
				setDescription([
					Api.result.properties.name,
					Api.result.properties.birth_year,
					Api.result.properties.gender,
					Api.result.properties.height,
					Api.result.properties.skin_color,
					Api.result.properties.hair_color
				]);
			})
			.catch(error => console.log("ha ocurrido un error"));
	};
	description2();

	return (
		<div className="card1">
			<div className="im" />
			<div className="description">
				<div className="desc2">
					<h2>{description[0]}</h2>
					<p>
						Según el propio George Lucas, su primera intención fue la de hacer una película de Flash Gordon,
						como homenaje a los viejos seriales de ciencia ficción de los años 1930, pero Dino De Laurentiis
						ya había adquirido los derechos para hacerla, por lo que tuvo que crear sus propios personajes,
						e incorporar otras influencias (Kurosawa, Campbell).
					</p>
				</div>
				<div className="desc">
					<div className="caja">{`Birth year: ${description[1]}`}</div>
					<div className="caja">{`Gender: ${description[2]}`}</div>
					<div className="caja">{`Height: ${description[3]}`}</div>
					<div className="caja">{`Skin Color: ${description[4]}`}</div>
					<div className="caja">{`Hair Color: ${description[5]}`}</div>
				</div>
			</div>
		</div>
	);
};

CardProfile.propTypes = {
	item: PropTypes.string,
	numItem: PropTypes.number
};
