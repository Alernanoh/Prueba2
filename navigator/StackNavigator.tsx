
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainPage from '../screens/MainPage';
import Operation from '../screens/Operation';
import History from '../screens/History';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Tab" component={MyTabs} options={{headerShown:false}} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MainPage" component={MainPage} />
      <Tab.Screen name="Operation" component={Operation} />
      <Tab.Screen name="History" component={History} />
    </Tab.Navigator>
  );
}


export default function Navigator() {
  return (
    <NavigationContainer>
        <MyStack/>
    </NavigationContainer>
  );
}