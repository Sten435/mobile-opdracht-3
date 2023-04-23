import { Image, ImageBackground, SafeAreaView, Text, View } from 'react-native';
import style from '../../style/styles.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { AboutRoute, HomeRoute } from '../../routes/Routes.js';

const Footer = ({ navigation }) => {
	const { selectedRoute } = useSelector((state) => state.meetups);

	return (
		<View style={style.footerContainer}>
			<Icon
				style={[style.activeIcon, selectedRoute == HomeRoute ? style.underline : null]}
				name='home'
				onPress={() => {
					navigation.navigate(HomeRoute);
				}}
				size={style.iconSize}
				color={style.onPrimaryColor}
			/>
			<Icon
				style={[style.activeIcon, selectedRoute == AboutRoute ? style.underline : null]}
				name='user'
				onPress={() => {
					navigation.navigate(AboutRoute);
				}}
				size={style.iconSize}
				color={style.onPrimaryColor}
			/>
		</View>
	);
};

export default Footer;
