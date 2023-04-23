import { meetupInitState } from '../init_state/meetup_init_state.js';

const meetupBloc = (state = meetupInitState, action) => {
	const copyWith = ({ meetups, selectedRoute }) => {
		return {
			meetups: meetups !== undefined ? [...meetups] : state.meetups,
			selectedRoute: selectedRoute !== undefined ? selectedRoute : state.selectedRoute,
		};
	};

	switch (action.type) {
		case 'ADD_MEETUP':
			return copyWith({ meetups: [...state.meetups, action.payload] });

		case 'CHANGE_FAVORITE':
			return copyWith({
				meetups: [
					...state.meetups.map((meetUp) => {
						if (meetUp.title.toLowerCase() == action.payload.title.toLowerCase()) {
							meetUp.favorite = !meetUp.favorite;
						}
						return meetUp;
					}),
				],
			});

		case 'SET_SELECTED_ROUTE':
			return copyWith({
				selectedRoute: action.payload,
			});
		default:
			return state;
	}
};
export default meetupBloc;
