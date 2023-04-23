import { useRef, useState } from 'react';
import { Button, StyleSheet, View, Text, TextInput, Alert, FlatList } from 'react-native';
import style from '../../style/styles.js';
import Header from '../widgets/Header.js';
import { useSelector } from 'react-redux';

export const MeetupDetailRoute = 'MeetupDetail';

const MeetupDetailScreen = (route) => {
	const { navigation } = route;
	const { meetup } = route.route.params;

	return (
		<>
			<Header
				title={'Metup detail'}
				navigation={navigation}
			/>
			<View style={style.container}>
				<Text style={style.textStyleDark}>Title</Text>
				<Text style={style.textSmall}>{meetup.title}</Text>
				<Text style={style.textStyleDark}>Address</Text>
				<Text style={style.textSmall}>{meetup.address}</Text>
				<Text style={style.textStyleDark}>Description</Text>
				<Text style={style.textSmall}>{meetup.description}</Text>
			</View>
		</>
	);
};

export default MeetupDetailScreen;
