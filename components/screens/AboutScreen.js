import { Button, StyleSheet, View, Text, TextInput, Alert, FlatList } from 'react-native';
import style from '../../style/styles.js';
import Header from '../widgets/Header.js';
import Footer from '../widgets/Footer.js';
import styles from '../../style/styles.js';

const AboutScreen = (route) => {
	const { navigation } = route;
	return (
		<>
			<Header
				title={'About'}
				navigation={navigation}
				withBackButton={false}
			/>
			<View style={style.overzichtList}>
				<Text style={[styles.textStyleDark, { margin: 10 }]}>About Screen: Stan Persoons</Text>
			</View>
			<Footer navigation={navigation} />
		</>
	);
};

export default AboutScreen;
