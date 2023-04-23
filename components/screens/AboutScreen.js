import { Button, StyleSheet, View, Text, TextInput, Alert, FlatList } from 'react-native';
import style from '../../style/styles.js';
import Header from '../widgets/Header.js';

const AboutScreen = (route) => {
	const { navigation } = route;
	return (
		<>
			<Header title={'About'} navigation={navigation} />
			<View style={style.overzichtList}>
				<Text>Overzicht</Text>
			</View>
		</>
	);
};

export default AboutScreen;
