import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet } from 'react-native'

import Header from 'components/home/Header'
import HomeScreen from 'screens/Home'
import QuestsScreen from 'screens/Quests'
import GalleryScreen from 'screens/Gallery'
import SettingsScreen from 'screens/Settings'

import { COLORS } from 'utils/constants'
import { Draw, Trophy, Gallery, Settings } from 'utils/svg-images'

export default function Navigator({ navigation }) {
  const Tab = createBottomTabNavigator()

  const tabList = [
    {
      name: 'Home',
      component: HomeScreen,
      icon: Draw,
      header: true,
    },
    {
      name: 'Quests',
      component: QuestsScreen,
      icon: Trophy,
      header: false,
    },
    {
      name: 'Gallery',
      component: GalleryScreen,
      icon: Gallery,
      header: false,
    },
    {
      name: 'Settings',
      component: SettingsScreen,
      icon: Settings,
      header: false,
    },
  ]

  return (
    <Tab.Navigator
      initialRouteName="Home"
      sceneContainerStyle={styles.scene}
      screenOptions={{
        tabBarActiveTintColor: COLORS.white,
        tabBarInactiveTintColor: COLORS.secondaryLighter,
        tabBarStyle: styles.tabBar,
      }}
    >
      {tabList.map((tab, tabIndex) => (
        <Tab.Screen
          key={`tab-${tabIndex}`}
          name={tab.name}
          component={tab.component}
          options={{
            headerShown: tab.header,
            headerTitleAlign: 'left',
            headerStyle: styles.header,
            headerTitle: () => <Header navigation={navigation} />,
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => <tab.icon color={color}></tab.icon>,
          }}
        />
      ))}
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.primaryDark,
    borderBottomWidth: 0,
  },

  scene: {
    backgroundColor: COLORS.secondary,
  },

  tabBar: {
    backgroundColor: COLORS.secondary,
    opacity: 80,
    height: 70,
    borderTopWidth: 0,
  },
})
