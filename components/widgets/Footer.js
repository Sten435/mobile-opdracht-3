import { Image, ImageBackground, SafeAreaView, Text, View } from 'react-native';
import style from '../../style/styles.js';
import Icon from 'react-native-vector-icons/FontAwesome';

const Footer = () => {
	return (
		<View style={style.footerContainer}>
			<Icon style={[style.activeIcon]} name="home" size={style.iconSize} color={style.onPrimaryColor} />
			<Icon style={[style.activeIcon]} name="user" size={style.iconSize} color={style.onPrimaryColor} />
		</View>
	);
};

export default Footer;
