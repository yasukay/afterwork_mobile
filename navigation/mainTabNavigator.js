import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import LogOutScreen from "../screens/logOutScreen";
import { MaterialIcons } from '@expo/vector-icons';
import StackNavigator from "./stackNavigator";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const MainTabNavigator = ()=> {
    return(
        <Tab.Navigator
            initialRouteName="Commands"
            screenOptions={{
                headerStyle : {
                    backgroundColor:"#2E4857"
                },
                headerTitleStyle: {
                    color:"#FFF",
                    fontWeight:'bold'
                },
                headerTitleAlign :"center",
                tabBarStyle : {
                    backgroundColor: "#2E4857",
                    borderRadius:25,
                    fontWeight: 'bold',
                    marginBottom: 10,
                    marginHorizontal: 10
                },
                tabBarActiveTintColor: "#F18F01",
                tabBarInactiveTintColor: "#FFF"
            }}
        >
            <Tab.Screen
                name='Commands'
                component={StackNavigator}
                options={ {
                    headerShown: false,
                    headerTitle: "Commandes",
                    tabBarLabel: "Commandes",
                    tabBarIcon: ({focused,color}) =>
                        <MaterialCommunityIcons name="post" size={focused ? 28 : 20} color={color} />
                }}
            />
        </Tab.Navigator>
    )

}

export default MainTabNavigator;