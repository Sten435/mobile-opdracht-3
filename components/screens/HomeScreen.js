import { useRef, useState } from 'react';
import { Button, StyleSheet, View, Text, Alert, FlatList, Modal } from 'react-native';
import MeetupCard from '../widgets/MeetupCard.js';
import style from '../../style/styles.js';
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomButton from '../widgets/CustomButton.js';
import { Formik } from 'formik';
import Header from '../widgets/Header.js';
import { SizedBox } from 'sizedbox';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addMeetupEvent } from '../../redux/events/meetupEvents.js';
import { TextInput } from '@react-native-material/core';

const HomeScreen = (router) => {
	const { navigation } = router;
	const [showModal, setShowModal] = useState(false);

	const meetups = useSelector((state) => state.meetups);
	const dispatch = useDispatch();

	const handleAddMeetup = (team) => {
		setShowModal(false);
		dispatch(addMeetupEvent(team));
	};

	const validateData = Yup.object().shape({
		title: Yup.string().trim().min(4, 'Te kort minimum 4 characters !').required('Deze velden zijn verplicht'),
		address: Yup.string().trim().min(4, 'Te kort minimum 4 characters !').required('Deze velden zijn verplicht'),
		description: Yup.string().trim().min(8, 'Te kort minimum 8 characters !').required('Deze velden zijn verplicht'),
	});

	const textFields = ({ handleChange, handleBlur, handleSubmit, errors, isValid, values }) => {
		const handleSumbitForm = () => {
			const doesAddressExist = meetups.some((meetup) => meetup.address === values.address);

			if (isValid && !doesAddressExist) {
				handleSubmit();
			} else {
				if (doesAddressExist) return alert('Adres bestaat al, mag niet');
				else alert('Vult eerst alle velden in');
			}
		};

		return (
			<View style={style.addNewContainer}>
				<View style={style.addNewMeetupTitle}>
					<Text style={style.addNewMeetupTitleText}>ADD MEETUP</Text>
					<Ionicons name="close-circle-sharp" size={40} style={style.closeModalButton} color={style.cardTitle} onPress={() => setShowModal(false)} />
				</View>

				<TextInput onChangeText={handleChange('title')} label="Title" variant="standard" color={style.primaryColor} onBlur={handleBlur('title')} value={values.title} />

				{errors.title === undefined ? <SizedBox vertical={20} /> : null}
				{errors.title !== undefined ? <Text style={style.error}>{errors.title}</Text> : null}

				<TextInput onChangeText={handleChange('address')} label="Address" variant="standard" color={style.primaryColor} onBlur={handleBlur('address')} value={values.address} />

				{errors.address === undefined ? <SizedBox vertical={20} /> : null}
				{errors.address !== undefined ? <Text style={style.error}>{errors.address}</Text> : null}

				<TextInput onChangeText={handleChange('description')} label="Description" variant="standard" color={style.primaryColor} onBlur={handleBlur('description')} value={values.description} />

				{errors.description === undefined ? <SizedBox vertical={20} /> : null}
				{errors.description !== undefined ? <Text style={style.error}>{errors.description}</Text> : null}

				<SizedBox vertical={20} />
				<CustomButton onPress={handleSumbitForm} text="Create Meetup" />
			</View>
		);
	};

	const initialValueFormik = { title: '', address: '', description: '' };

	return (
		<>
			<Modal animationType="slide" visible={showModal} onRequestClose={() => setShowModal(!showModal)}>
				<View style={style.container}>
					<Formik initialValues={initialValueFormik} validateOnMount={false} validationSchema={validateData} onSubmit={handleAddMeetup} children={textFields} />
				</View>
			</Modal>
			<Header title={'All meetups'} navigation={navigation} />
			<View style={style.container}>
				<View style={style.overzichtList}>
					<FlatList data={meetups} numColumns={2} renderItem={({ index, item }) => <MeetupCard key={index} meetup={item} navigation={navigation} />} />
				</View>
			</View>
			<Ionicons name="add-circle-outline" size={60} color={style.cardTitle} style={style.addButton} onPress={() => setShowModal(true)} />
		</>
	);
};

export default HomeScreen;
