import React, { useContext, useState } from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";

export const CardPlanets = ({ item }) => {
	const [description, setDescription] = useState([]);

	const description2 = () => {
		fetch(item.url)
			.then(resp => resp.json())
			.then(descriptionApi => {
				setDescription([descriptionApi.result.properties.population, descriptionApi.result.properties.terrain]);
			})
			.catch(error => console.log(`Hay un error ${error}`));
	};
	description2();
	return (
		<div className="card mx-2" style={{ minWidth: "18rem" }}>
			<img
				src="https://starwarsblog.starwars.com/wp-content/uploads/2018/10/mustafar-tall.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{item.name}</h5>
				<p className="card-text">
					<ul>
						<li>{`Population: ${description[0]}`}</li>
						<li>{`Terrain: ${description[1]}`}</li>
					</ul>
				</p>
				<div className="d-flex justify-content-between">
					<a href="#" className="btn btn-primary">
						Go somewhere
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

CardPlanets.propTypes = {
	item: PropTypes.object
};
