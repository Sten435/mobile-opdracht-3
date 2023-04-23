export const addMeetupEvent = (meetup) => {
	return {
		type: 'ADD_MEETUP',
		payload: meetup,
	};
};

export const changeFavoriteEvent = (meetup) => {
	return {
		type: 'CHANGE_FAVORITE',
		payload: meetup,
	};
};

export const setSelectedRoute = (meetup) => {
	return {
		type: 'SET_SELECTED_ROUTE',
		payload: meetup,
	};
};
