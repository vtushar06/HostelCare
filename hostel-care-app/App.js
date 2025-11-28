import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import ComplaintsListScreen from './screens/ComplaintsListScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';  // ⭐ REQUIRED

const Tab = createBottomTabNavigator();   // ⭐ CREATE TAB

export default function App() {
  return (
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="Complaints" component={ComplaintsListScreen} />
    //   </Tab.Navigator>
    // </NavigationContainer>
    <View>
      <Text>My app</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
