import React, { useContext } from "react";
import "../../styles/home.scss";
import { CardPeople } from "../component/CardPeople";
import { CardPlanets } from "../component/CardPlanets";
import { Context } from "../store/appContext";
export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="fondo">
			<div>
				<h2 className="tittle-holder">{"Characters"}</h2>
			</div>
			<div className="card-holder">
				{store.people.map(people => {
					return <CardPeople key={people.uid} item={people} />;
				})}
			</div>
			<div>
				<h2 className="tittle-holder">{"Planets"}</h2>
			</div>
			<div className="card-holder">
				{store.planets.map(planets => {
					return <CardPlanets key={planets.uid} item={planets} />;
				})}
			</div>
		</div>
	);
};
