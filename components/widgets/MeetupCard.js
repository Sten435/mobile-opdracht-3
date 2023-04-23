import { Image, ImageBackground, LogBox, Modal, SafeAreaView, Text, View } from 'react-native';
import style from '../../style/styles.js';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeFavoriteEvent } from '../../redux/events/meetup_events.js';

const MeetupCard = ({ meetup, navigation }) => {
	const dispatch = useDispatch();
	return (
		<View style={style.card}>
			<Text style={style.cardTitle}>{meetup.title}</Text>
			<View style={style.cardActionsContainer}>
				<Ionicons
					name='information-circle'
					size={style.iconSize}
					color={style.cardTitle}
					style={{ marginRight: 10 }}
					onPress={() => navigation.navigate('MeetupDetail', { meetup })}
				/>
				<Ionicons
					name={meetup.favorite ? 'heart' : 'heart-dislike-outline'}
					size={style.iconSize}
					color={meetup.favorite ? style.primaryColor : style.primaryColorDark}
					style={{ marginLeft: 10 }}
					onPress={() => dispatch(changeFavoriteEvent(meetup))}
				/>
			</View>
		</View>
	);
};

export default MeetupCard;
