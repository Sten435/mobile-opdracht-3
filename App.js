import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import AboutScreen from './components/screens/AboutScreen.js';
import HomeScreen from './components/screens/HomeScreen.js';
import MeetupDetailScreen from './components/screens/MeetupDetailScreen.js';
import Footer from './components/widgets/Footer.js';
import style from './style/styles.js';
import configureStore from './redux/stores/store.js';
import { Provider, useSelector } from 'react-redux';

const App = () => {
	const store = configureStore();
	const savigator = createNativeStackNavigator();

	return (
		<Provider store={store}>
			<NavigationContainer>
				<SafeAreaView style={style.scaffold}>
					<savigator.Navigator
						initialRouteName="Home"
						screenOptions={{
							headerShown: false,
						}}
					>
						<savigator.Screen name="Home" component={HomeScreen} />
						<savigator.Screen name="MeetupDetail" component={MeetupDetailScreen} />
						<savigator.Screen name="About" component={AboutScreen} />
					</savigator.Navigator>
					<Footer />
				</SafeAreaView>
			</NavigationContainer>
		</Provider>
	);
};

export default App;
