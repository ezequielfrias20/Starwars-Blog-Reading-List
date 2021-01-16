import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<div className="btn-group" role="group">
					<div className="dropdown">
						<Link
							to="/"
							className="btn btn-secondary dropdown-toggle"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Dropdown button
						</Link>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<li className="dropdown-item">hola</li>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
