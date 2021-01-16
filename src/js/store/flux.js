const BASE_URL = "https://www.swapi.tech/api";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			favorite: []
		},
		actions: {
			setPeople: async () => {
				let url = `${BASE_URL}/people`;
				try {
					const response = await fetch(url);
					const apiPeople = await response.json();
					setStore({
						people: apiPeople.results
					});
				} catch (error) {
					console.log(error);
				}
			},

			setPlanets: async () => {
				let url = `${BASE_URL}/planets`;
				try {
					const response = await fetch(url);
					const apiPlanets = await response.json();
					setStore({
						planets: apiPlanets.results
					});
				} catch (error) {
					console.log(error);
				}
			},
			setFavorite: fav => {
				setStore({
					favorite: fav
				});
			}
		}
	};
};

export default getState;
