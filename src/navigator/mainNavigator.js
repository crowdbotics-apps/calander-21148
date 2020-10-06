import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen12129271Navigator from '../features/BlankScreen12129271/navigator';
import Settings129258Navigator from '../features/Settings129258/navigator';
import UserProfile129251Navigator from '../features/UserProfile129251/navigator';
import Settings129250Navigator from '../features/Settings129250/navigator';
import Settings129248Navigator from '../features/Settings129248/navigator';
import SignIn2129246Navigator from '../features/SignIn2129246/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen12129271: { screen: BlankScreen12129271Navigator },
Settings129258: { screen: Settings129258Navigator },
UserProfile129251: { screen: UserProfile129251Navigator },
Settings129250: { screen: Settings129250Navigator },
Settings129248: { screen: Settings129248Navigator },
SignIn2129246: { screen: SignIn2129246Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
