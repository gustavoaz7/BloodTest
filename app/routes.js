import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { SCREENS } from './constants';
import DNAScreen from './screens/DNAScreen';
import BloodListScreen from './screens/BloodListScreen';
import ProfileScreen from './screens/ProfileScreen';
import BloodResultScreen from './screens/BloodResultScreen';

const BloodStackNavigation = createStackNavigator({
  [SCREENS.BLOOD_LIST]: {
    screen: BloodListScreen,
  },
  [SCREENS.BLOOD_RESULT]: {
    screen: BloodResultScreen,
  },
});

const MainBottomNavigation = createBottomTabNavigator(
  {
    [SCREENS.DNA]: {
      screen: DNAScreen,
    },
    Blood: {
      screen: BloodStackNavigation,
    },
    [SCREENS.PROFILE]: {
      screen: ProfileScreen,
    },
  },
  {
    initialRouteName: 'Blood',
  },
);

const Routes = createAppContainer(MainBottomNavigation);

export default Routes;
