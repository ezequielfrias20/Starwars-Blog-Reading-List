import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<a className="navbar-brand" href="#">
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
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<li className="dropdown-item" href="#">
						Action
					</li>
					<li className="dropdown-item" href="#">
						Another action
					</li>
					<li className="dropdown-item" href="#">
						Something else here
					</li>
				</div>
			</div>
		</nav>
	);
};
