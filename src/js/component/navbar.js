import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	var history = useHistory();
	function handleClick() {
		history.push(`/people`);
	}
	return (
		<nav className="navbar navbar-light bg-light">
			<a className="navbar-brand" onClick={handleClick}>
				<img
					src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo.png"
					width="50"
					height="50"
					alt=""
				/>
			</a>
			<div className="dropdown">
				<button
					className="btn btn-secondary dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton" id="dropdown">
					{/* {store.favorites.map((favorite, index) => {
						<li key={index}>{favorite}</li>;
					},)} */}
				</div>
			</div>
		</nav>
	);
};
