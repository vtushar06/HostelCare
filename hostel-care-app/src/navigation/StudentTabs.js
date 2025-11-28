import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
import colors from '../utils/colors';

// Screens
import StudentHomeScreen from '../screens/student/HomeScreen';
import AddComplaintScreen from '../screens/student/AddComplaint';
import MyComplaintsScreen from '../screens/student/MyComplaints';
import BrowseComplaintsScreen from '../screens/student/BrowseComplaints';
import ComplaintDetailScreen from '../screens/student/ComplaintDetail';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="StudentHome" component={StudentHomeScreen} />
    <Stack.Screen name="AddComplaint" component={AddComplaintScreen} />
    <Stack.Screen name="ComplaintDetail" component={ComplaintDetailScreen} />
  </Stack.Navigator>
);

const MyComplaintsStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MyComplaintsTab" component={MyComplaintsScreen} />
    <Stack.Screen name="ComplaintDetail" component={ComplaintDetailScreen} />
  </Stack.Navigator>
);

const BrowseComplaintsStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="BrowseComplaintsTab" component={BrowseComplaintsScreen} />
    <Stack.Screen name="ComplaintDetail" component={ComplaintDetailScreen} />
  </Stack.Navigator>
);

const StudentTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textLight,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopWidth: 1,
          borderTopColor: colors.border,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 24 }}>🏠</Text>,
          tabBarLabel: 'Home',
        }}
      />

      <Tab.Screen
        name="MyComplaintsNav"
        component={MyComplaintsStack}
        options={{
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 24 }}>📝</Text>,
          tabBarLabel: 'My Complaints',
        }}
      />

      <Tab.Screen
        name="BrowseComplaintsNav"
        component={BrowseComplaintsStack}
        options={{
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 24 }}>🔍</Text>,
          tabBarLabel: 'Browse',
        }}
      />

      
    </Tab.Navigator>
  );
};

export default StudentTabs;