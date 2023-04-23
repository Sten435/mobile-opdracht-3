import React from 'react';
import AppBlocProvider from './AppBlocProvider.js';
import AppNavigator from './AppNavigator.js';
import { useFonts } from 'expo-font';
import { View } from 'react-native';

const App = () => {
	const [loaded] = useFonts({
		font: require('./assets/fonts/Bruno Ace SC.ttf'),
	});

	if (!loaded) {
		return (
			<View>
				<Text>Loading...</Text>
			</View>
		);
	}

	return <AppBlocProvider children={<AppNavigator />} />;
};

export default App;
