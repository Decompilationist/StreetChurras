import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import HomeScreen from '../screens/Home';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#5e260f' },
        title: 'StreeT Churras'
      }}
    />
  </Stack.Navigator>
);
