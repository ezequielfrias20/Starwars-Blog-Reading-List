import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/people.scss";
import { CardProfile } from "../component/CardProfile";

export const People = ({ item }) => {
	const { store, actions } = useContext(Context);

	return (
		<div className="profile">
			<CardProfile item={item} />
		</div>
	);
};

People.propTypes = {
	item: PropTypes.object
};
