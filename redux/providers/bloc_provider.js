import { legacy_createStore, combineReducers } from 'redux';
import meetupBloc from '../bloc/meetup_bloc';
const rootBloc = combineReducers({
	meetups: meetupBloc,
});
const provider = () => {
	return legacy_createStore(rootBloc);
};
export default provider;
