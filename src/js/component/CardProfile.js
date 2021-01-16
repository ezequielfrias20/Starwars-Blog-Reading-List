import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/people.scss";

export const CardProfile = ({ item }) => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card">
			<div className="im" />
			<div className="description">
				<div className="desc2">
					<h2>{""}</h2>
					<p>Aui va la descripcion</p>
				</div>
				<div className="desc">
					<div className="caja" />
					<div className="caja" />
					<div className="caja" />
					<div className="caja" />
					<div className="caja" />
				</div>
			</div>
		</div>
	);
};

CardProfile.propTypes = {
	item: PropTypes.object
};
