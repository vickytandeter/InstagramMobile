import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Header() {

    return(
        <View style={styles.header}>
            <Text style={styles.logo}>Instagram</Text>
        </View>
    );
}

export default Header;