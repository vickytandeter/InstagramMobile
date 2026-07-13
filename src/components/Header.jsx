import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

function Header(){

    return(

        <View style = {styles.header}>
            <TouchableOpacity accessibilityLabel="Volver">
                <Feather name="plus" size={16} color="white" />
            </TouchableOpacity>

            <Text>Instagram</Text>

            <TouchableOpacity accessibilityLabel="Volver">
                <Feather name="heart" size={16} color="white" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    header: {
        backgroundColor: "#000000",
    },
});

export default Header;