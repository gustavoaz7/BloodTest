import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { SCREENS } from './constants';
import BloodListScreen from './screens/BloodListScreen';
import BloodResultScreen from './screens/BloodResultScreen';
import NavigationHeaderImage from './components/navigation/NavigationHeaderImage';
import NavigationBottomListIcon from './components/navigation/NavigationBottomListIcon';
import NavigationBottomResultIcon from './components/navigation/NavigationBottomResultIcon';
import { theme } from './theme';

const MainBottomNavigation = createBottomTabNavigator(
  {
    [SCREENS.BLOOD_LIST]: {
      screen: BloodListScreen,
      navigationOptions: {
        tabBarLabel: 'List',
        tabBarIcon: NavigationBottomListIcon,
      },
    },
    [SCREENS.BLOOD_RESULT]: {
      screen: BloodResultScreen,
      navigationOptions: {
        tabBarLabel: 'Results',
        tabBarIcon: NavigationBottomResultIcon,
      },
    },
  },
  {
    initialRouteName: SCREENS.BLOOD_LIST,
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
