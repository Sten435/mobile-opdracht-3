import { useDispatch } from 'react-redux';
import { setNavigate, setSelectedRoute } from './redux/events/meetup_events';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from './components/widgets/Footer';
import HomeScreen from './components/screens/HomeScreen';
import MeetupDetailScreen, { MeetupDetailRoute } from './components/screens/MeetupDetailScreen';
import AboutScreen from './components/screens/AboutScreen';
import styles from './style/styles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View } from 'react-native';
import { AboutRoute, HomeRoute } from './routes/Routes';

const AppNavigator = () => {
	const navigator = createNativeStackNavigator();
	const tabNavigator = createBottomTabNavigator();
	const dispatcher = useDispatch();

	const handleSetSelectedRoute = (name) => {
		dispatcher(setSelectedRoute(name));
	};

	return (
		<NavigationContainer>
			<tabNavigator.Navigator
				initialRouteName={HomeRoute}
				screenListeners={(navigation) => {
					handleSetSelectedRoute(navigation.route.name);
				}}
				screenOptions={() => ({
					headerShown: false,
					tabBarStyle: { display: 'none', height: 0 },
					tabBarActiveTintColor: styles.primaryColor,
					tabBarInactiveTintColor: 'gray',
				})}>
				<tabNavigator.Screen
					name={HomeRoute}
					component={HomeScreen}
				/>
				<tabNavigator.Screen
					name={AboutRoute}
					component={AboutScreen}
				/>
				<tabNavigator.Screen
					name={MeetupDetailRoute}
					component={MeetupDetailScreen}
				/>
			</tabNavigator.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;
