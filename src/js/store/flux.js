const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peopleList: [],
			planetList: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			changeFavoritePeople: PersonID => {
				// 	//get the store
				const store = getStore();
				//console.log(PersonID);
				const newData = store.peopleList.map(item => {
					if (item.uid === PersonID) {
						if (item.favorite) {
							item.favorite = false;
						} else {
							item.favorite = true;
						}
						return item;
					} else {
						return item;
					}
				});

				setStore({ peopleList: newData });
			},
			loadSomeData: () => {
				let URL = "https://www.swapi.tech/api/";

				async function fnPeopleList() {
					// const result = await fetch(URL + "people/")
					const result = await fetch(
						"https://raw.githubusercontent.com/johmstone/files/main/peopleresponse.json"
					)
						.then(res => {
							if (res.status == 200) {
								return res.json();
							}
						})
						.then(response => {
							const newResponse = response.results.map(item => ({ ...item, favorite: false }));
							setStore({ peopleList: newResponse });
						})
						.catch(err => console.error(err));
				}

				async function fnPLanetsList() {
					// const result = await fetch(URL + "people/")
					const result = await fetch(
						"https://raw.githubusercontent.com/johmstone/files/main/JSONResultPlanets.json"
					)
						.then(res => {
							if (res.status == 200) {
								return res.json();
							}
						})
						.then(response => {
							const newResponse = response.results.map(item => ({ ...item, favorite: false }));
							setStore({ planetList: newResponse });
						})
						.catch(err => console.error(err));
				}
				fnPeopleList();
				fnPLanetsList();
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
