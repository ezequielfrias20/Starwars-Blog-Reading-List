import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/people.scss";
import { CardProfile } from "../component/CardProfile";

export const Single = ({ item }) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="profile">
			<CardProfile item={item} numItem={params.theid} />
		</div>
	);
};
Single.propTypes = {
	item: PropTypes.string
};
