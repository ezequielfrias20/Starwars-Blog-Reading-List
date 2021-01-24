import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/home.scss";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const CardPeople = ({ item }) => {
	const { store, actions } = useContext(Context);
	const [description, setDescription] = useState([]);
	var history = useHistory();

	const description2 = () => {
		fetch(item.url)
			.then(resp => resp.json())
			.then(descriptionApi => {
				setDescription([
					descriptionApi.result.properties.gender,
					descriptionApi.result.properties.hair_color,
					descriptionApi.result.properties.eye_color
				]);
			})
			.catch(error => console.log(`Hay un error ${error}`));
	};
	description2();

	function handleClick() {
		history.push(`/people/${item.uid}`);
	}

	return (
		<div className="card" style={{ minWidth: "18rem" }}>
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{item.name}</h5>
				<ul>
					<li>{`Gender: ${description[0]}`}</li>
					<li>{`Hair Color: ${description[1]}`}</li>
					<li>{`Eye Color: ${description[2]}`}</li>
				</ul>
				<div className="d-flex justify-content-between">
					<a className="btn btn-primary" onClick={handleClick}>
						Learn more!
					</a>
					<button
						type="button"
						className="btn btn-outline-warning"
						onClick={() => {
							let newFav = [...store.favorite, item.name];
							actions.setFavorite(newFav);
							console.log(store.favorite);
						}}>
						<i className="far fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
};

CardPeople.propTypes = {
	item: PropTypes.object
};
