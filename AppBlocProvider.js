import { Provider } from 'react-redux';
import blocProvider from './redux/providers/bloc_provider';

const AppBlocProvider = (props) => {
	const provider = blocProvider();
	return (
		<Provider
			children={props.children}
			store={provider}
		/>
	);
};

export default AppBlocProvider;
