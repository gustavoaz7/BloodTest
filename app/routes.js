import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { SCREENS } from './constants';
import ConnectedBloodListScreen from './containers/ConnectedBloodListScreen';
import ConnectedBloodResultsScreen from './containers/ConnectedBloodResultsScreen';
import NavigationHeaderImage from './components/navigation/NavigationHeaderImage';
import NavigationBottomListIcon from './components/navigation/NavigationBottomListIcon';
import NavigationBottomResultIcon from './components/navigation/NavigationBottomResultIcon';
import { theme } from './theme';

const MainBottomNavigation = createBottomTabNavigator(
  {
    [SCREENS.BLOOD_LIST]: {
      screen: ConnectedBloodListScreen,
      navigationOptions: {
        tabBarLabel: 'List',
        tabBarIcon: NavigationBottomListIcon,
      },
    },
    [SCREENS.BLOOD_RESULTS]: {
      screen: ConnectedBloodResultsScreen,
      navigationOptions: {
        tabBarLabel: 'Results',
        tabBarIcon: NavigationBottomResultIcon,
      },
    },
  },
  {
    initialRouteName: SCREENS.BLOOD_RESULTS,
    tabBarOptions: {
      activeTintColor: theme.primary,
    },
  },
);

const AppStackNavigation = createStackNavigator(
  {
    bottomTabNavigator: {
      screen: MainBottomNavigation,
      navigationOptions: {
        headerTitle: NavigationHeaderImage,
      },
    },
  },
  {
    headerLayoutPreset: 'center',
  },
);

const Routes = createAppContainer(AppStackNavigation);

export default Routes;
