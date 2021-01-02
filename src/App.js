import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {MainPage, ListPage, DetailPage} from './pages';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainPage}  />
      <Stack.Screen name="List" component={ListPage} />
      <Stack.Screen name="Detail" component={DetailPage} />
      

    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

