import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Discover from './screens/Discover';
import Register from './screens/Register';


const Stack = createNativeStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export default function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Root" component={Discover} />
        <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};