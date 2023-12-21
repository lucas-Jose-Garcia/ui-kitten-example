import { createStackNavigator } from '@react-navigation/stack';

import { RootStackParamList } from './type';
import { Details } from '../screens/Details';
import { Home } from '../screens/Home';

const Stack = createStackNavigator<RootStackParamList>();

export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}
