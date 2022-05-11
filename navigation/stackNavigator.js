import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CommandeScreen from "../screens/commandScreen";
import DetailCommandeScreen from "../screens/detailCommandScreen";



// Créer le navigator
const Stack = createNativeStackNavigator();

// Paramétrer le stack
const StackNavigator = () => {
    return(
        <Stack.Navigator
            initialRouteName="Commandes"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#225e4b"
                },
                headerTitleAlign: "center",
                headerTitleStyle: {
                    fontSize: 24,
                    color:"#FFF",
                    fontWeight:'bold'
                },
                headerTintColor : "#FFF"
            }}
        >
            <Stack.Screen
                name="Commandes"
                component={CommandeScreen}
                options={{
                    title: "Liste des commandes"
                }}
            />
            <Stack.Screen
                name="DetailCommandes"
                component={DetailCommandeScreen}
                options={{
                    title: "Détail de la commande"
                }}
            />

        </Stack.Navigator>
    )
}

export default StackNavigator;