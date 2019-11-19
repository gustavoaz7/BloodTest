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
import NavigationTemplateScreen from './screens/NavigationTemplateScreen';

const hideHeader = { header: null };

const BloodListWithTemplate = createStackNavigator({
  [SCREENS.BLOOD_LIST]: {
    screen: ConnectedBloodListScreen,
    navigationOptions: hideHeader,
  },
  [SCREENS.TEMPLATE]: {
    screen: NavigationTemplateScreen,
    navigationOptions: hideHeader,
  },
});

const BloodResultsWithTemplate = createStackNavigator({
  [SCREENS.BLOOD_RESULTS]: {
    screen: ConnectedBloodResultsScreen,
    navigationOptions: hideHeader,
  },
  [SCREENS.TEMPLATE]: {
    screen: NavigationTemplateScreen,
    navigationOptions: hideHeader,
  },
});

const MainBottomNavigation = createBottomTabNavigator(
  {
    bloodListWithTemplate: {
      screen: BloodListWithTemplate,
      navigationOptions: {
        tabBarLabel: 'List',
        tabBarIcon: NavigationBottomListIcon,
      },
    },
    bloodResultsWithTemplate: {
      screen: BloodResultsWithTemplate,
      navigationOptions: {
        tabBarLabel: 'Results',
        tabBarIcon: NavigationBottomResultIcon,
      },
    },
  },
  {
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
