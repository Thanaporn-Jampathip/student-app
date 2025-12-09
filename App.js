import { View, Text, ScrollView } from "react-native";
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen'
import MenuScreen from './screens/MenuScreen'
import SettingScreen from './screens/SettingScreen'
import AllStudentScreen from "./screens/AllStudentScreen";

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        tabBarActiveTintColor: '#fa0000ff',
        tabBarInactiveTintColor: '#999',
        tabBarStyle:{
          backgroundColor: '#fff',
          paddingBottom: 8,
          paddingTop: 8,
          height: 65,
          borderTopWidth: 1,
          borderTopColor: '#ff30b2',
        },
        tabBarLabelStyle:{
          fontSize: 13,
          fontWeight: '600',
          marginTop: 2,
        },
        headerStyle:{
          backgroundColor: '#ff20adff',
          elevation: 5,
          shadowOpacity: 0.3,
          shadowRadius: 5,
          textAlign: 'center',
        },
        headerTintColor: '#ffffffff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
          textAlign: 'center',
        },
      }}
      >
        <Tab.Screen
        name='หน้าหลัก'
        component={HomeScreen}
        options={{
          tabBarLabel: 'หน้าหลัก',
          tabBarIcon: ({color, size}) => (
            <Text style={{ fontSize: size}}>🏠</Text>
          ),
          headerTitle: 'หน้าหลัก',
        }}
        />

        <Tab.Screen
        name='นักเรียนทั้งหมด'
        component={AllStudentScreen}
        options={{
          tabBarLabel: 'นักเรียนทั้งหมด',
          tabBarIcon: ({color, size}) => (
            <Text style={{ fontSize: size}}>🧑‍🤝‍🧑</Text>
          ),
          headerTitle: 'นักเรียนทั้งหมด',
        }}
        />

        <Tab.Screen
        name='Menu'
        component={MenuScreen}
        options={{
          tabBarLabel: 'เมนู',
          tabBarIcon: ({color, size}) => (
            <Text style={{ fontSize: size}}>📋</Text>
          ),
          headerTitle: 'เมนู',
        }}
        />

        <Tab.Screen
        name='Setting'
        component={SettingScreen}
        options={{
          tabBarLabel: 'ตั้งค่า',
          tabBarIcon: ({color, size}) => (
            <Text style={{ fontSize: size}}>⚙️</Text>
          ),
          headerTitle: 'ตั้งค่า',
        }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}