import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

import { Home } from '../screens/home'
import { Profile } from '../screens/profile'

const Tab = createBottomTabNavigator()

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Calendar',
          tabBarIcon: ({ color, size }) => <Feather name='calendar' color={color} size={size} />
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name='user' color={color} size={size} />,
          tabBarBadge: 3,
        }}
      />
    </Tab.Navigator>
  )
}