import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyStack from './MyStack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import Ticket from './screens/Ticket';
import Category from './screens/Category';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import CalendarScreen from './screens/CalendarScreen';
import Profile from './screens/Profile';

const Tab = createBottomTabNavigator()

export default function TabBar() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: 'blue', tabBarInactiveTintColor: 'grey' }} >

        <Tab.Screen name="Discover" component={MyStack} options={{ tabBarLabel: 'Discover', tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="newspaper-variant-multiple" size={24} color={color} />) }} />

        <Tab.Screen name="CalendarScreen" component={CalendarScreen} options={{ tabBarLabel: 'CalendarScreen', tabBarIcon: ({ color }) => (<Ionicons name="calendar" size={24} color={color} />) }} />

        <Tab.Screen name="Ticket" component={Ticket} options={{ tabBarLabel: 'Ticket', tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="ticket-confirmation" size={24} color={color} />) }} />

        <Tab.Screen name="Profile" component={Profile} options={{ tabBarLabel: 'Profile', tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="face-profile" size={24} color={color} />) }} />

    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({

})
