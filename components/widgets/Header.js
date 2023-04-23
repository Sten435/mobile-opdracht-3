import { Image, ImageBackground, Pressable, SafeAreaView, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import style from '../../style/styles.js';

const Header = ({ title, navigation }) => {
	return (
		<View style={style.headerContainer}>
			<ImageBackground blurRadius={4} style={style.backgroundImage} source={{ uri: 'https://images.pexels.com/photos/2300395/pexels-photo-2300395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}>
				{navigation.canGoBack() ? (
					<Ionicons
						name="arrow-back-circle"
						size={32}
						color={style.cardTitle}
						style={{ marginLeft: 10 }}
						onPress={() => {
							return navigation.goBack();
						}}
					/>
				) : null}
				<Text style={style.textStyle}>{title}</Text>
				<Ionicons style={{ opacity: 0 }} name="arrow-back-circle" size={32} />
			</ImageBackground>
		</View>
	);
};

export default Header;
