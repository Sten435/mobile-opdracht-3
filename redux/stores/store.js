import { legacy_createStore, combineReducers } from 'redux';
import meetupReducer from '../reducers/meetupReducer';
const rootReducer = combineReducers({
	meetups: meetupReducer,
});
const configureStore = () => {
	return legacy_createStore(rootReducer);
};
export default configureStore;
