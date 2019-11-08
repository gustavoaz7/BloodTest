import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import DNAScreen from './screens/DNAScreen';
import BloodListScreen from './screens/BloodListScreen';
import ProfileScreen from './screens/ProfileScreen';
import BloodResultScreen from './screens/BloodResultScreen';

const BloodStackNavigation = createStackNavigator({
  BloodList: {
    screen: BloodListScreen,
  },
  BloodResult: {
    screen: BloodResultScreen,
  },
});

const MainBottomNavigation = createBottomTabNavigator(
  {
    DNA: {
      screen: DNAScreen,
    },
    Blood: {
      screen: BloodStackNavigation,
    },
    ProfileScreen: {
      screen: ProfileScreen,
    },
  },
  {
    initialRouteName: 'Blood',
  },
);

const Routes = createAppContainer(MainBottomNavigation);

export default Routes;
