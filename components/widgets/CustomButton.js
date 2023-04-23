import { useState } from 'react';
import { Pressable, Text } from 'react-native';
import style from '../../style/styles.js';

const CustomButton = ({ text, onPress }) => {
	const [isPressedIn, setIsPressedIn] = useState(false);
	const pressedStyle = isPressedIn ? style.isPressedIn : {};
	return (
		<Pressable style={[style.buttonContainer, pressedStyle]} onPress={onPress} onPressIn={() => setIsPressedIn(true)} onPressOut={() => setIsPressedIn(false)}>
			<Text style={style.buttonText}>{text}</Text>
		</Pressable>
	);
};

export default CustomButton;
