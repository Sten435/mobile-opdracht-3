import { ProgressViewIOSComponent } from 'react-native';
import { StyleSheet, StatusBar } from 'react-native';

const primaryColor = '#115e60';
const primaryColorDark = '#116F80';
const onPrimaryColor = 'white';
const iconSize = 32;

const styles = StyleSheet.create({
	primaryColor: primaryColor,
	onPrimaryColor: onPrimaryColor,
	primaryColorDark: primaryColorDark,
	iconSize: iconSize,
	scaffold: {
		height: '100%',
		width: '100%',
		position: 'relative',
	},
	container: {
		height: '100%',
		width: '100%',
		position: 'relative',
	},
	error: {
		color: primaryColor,
		height: 20,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	card: {
		margin: 10,
		padding: 10,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
		borderRadius: 10,
		borderColor: primaryColor,
		borderWidth: 1,
		width: 200,
	},
	addButton: {
		position: 'absolute',
		bottom: 100,
		width: '100%',
		textAlign: 'center',
	},
	overzichtList: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	},
	cardActionsContainer: {
		display: 'flex',
		flexDirection: 'row',
	},
	cardTitle: {
		marginBottom: 20,
	},
	headerContainer: {
		marginTop: StatusBar.currentHeight,
		display: 'flex',
		alignContent: 'center',
		justifyContent: 'center',
	},
	buttonText: {
		fontSize: 20,
		padding: 6,
		textAlign: 'center',
		color: 'white',
		fontWeight: 'bold',
	},
	isPressedIn: {
		backgroundColor: primaryColorDark,
	},
	footerContainer: {
		left: 0,
		bottom: 0,
		position: 'absolute',
		width: '100%',
		height: 50,
		backgroundColor: primaryColor,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		flexDirection: 'row',
	},
	addNewMeetupTitle: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	addNewMeetupTitleText: {
		fontSize: 20,
		textAlign: 'center',
		fontWeight: 'bold',
		color: primaryColor,
		borderBottomColor: primaryColor,
		borderBottomWidth: 2,
		marginLeft: 15,
	},
	addNewContainer: {
		width: '90%',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	closeModalButton: {
		textAlign: 'right',
		paddingRight: 20,
		paddingVertical: 20,
		color: primaryColorDark,
	},
	textInput: {
		fontSize: 16,
		fontWeight: 'bold',
		paddingLeft: 14,
		marginBottom: 10,
		marginHorizontal: 10,
		height: 40,
		borderColor: primaryColor,
		borderBottomColor: primaryColor,
		borderWidth: 4,
		color: primaryColor,
		borderWidth: 2,
		borderRadius: 10,
	},
	activeIcon: {
		color: onPrimaryColor,
		borderBottomColor: primaryColor,
		borderBottomWidth: 2,
	},
	icon: {
		color: 'ghostwhite',
	},
	backgroundImage: {
		width: '100%',
		height: 50,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	buttonContainer: {
		backgroundColor: primaryColor,
		width: '80%',
		marginRight: 'auto',
		marginLeft: 'auto',
		marginBottom: 20,
		borderRadius: 10,
	},
	textSmall: {
		fontSize: 12,
		textAlign: 'center',
		padding: 10,
		paddingTop: 0,
	},
	textStyle: {
		fontSize: 24,
		textAlign: 'center',
		color: onPrimaryColor,
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowRadius: 10,
		fontWeight: 'bold',
		padding: 10,
	},
	textStyleDark: {
		fontSize: 24,
		textAlign: 'center',
		color: primaryColor,
		fontWeight: 'bold',
		padding: 10,
	},
});

export default styles;
