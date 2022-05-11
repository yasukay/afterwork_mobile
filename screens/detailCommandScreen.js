import React, {useState, useEffect} from "react";
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from "react-native";
import axiosInstance from "../config/axios";


const DetailCommandeScreen =({navigation,route}) => {


    const command = route.params


    return(
        <View style={styles.container}>
            <Text> Commande n° :
                {command.commande.idCommande}
            </Text>
            <Text>
                Numéro de table :
                {command.commande.noTable}
            </Text>
            <Text>
                Date de la commande :
                {command.commande.dateCommande}
            </Text>




        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    list : {
        margin: 10,
        paddingHorizontal: 80,
        borderRadius: 20,
        borderWidth: 1
    },
    textcommande: {
        fontSize: 20
    },
    textstatut: {
        fontSize: 15,
        fontStyle: "italic",
        color: "coral"
    }
})

export default DetailCommandeScreen;