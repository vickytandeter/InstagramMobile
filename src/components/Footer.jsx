import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Feather } from "@expo/vector-icons";

function Footer(){

    const navigation = useNavigation();

    return(
        <View style = {styles.footer}>
            <TouchableOpacity
                onPress={() => navigation.navigate('')}
                accessibilityLabel="Continuar"
            >
                <Feather name="home" size={16} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('')}
                accessibilityLabel="Continuar"
            >
                <Feather name="video" size={16} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('')}
                accessibilityLabel="Continuar"
            >
                <Feather name="message" size={16} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('')}
                accessibilityLabel="Continuar"
            >
                <Feather name="search" size={16} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('')}
                accessibilityLabel="Continuar"
            >
                <Text>Img</Text>
                {/* <Image
                    source={require('../../../img/fotoPerfil.png')}
                    style={{ width: 80, height: 80 }}
                    accessibilityLabel="fotoPerfil"
                /> */}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    footer: {
        backgroundColor: "#000000",
    },
});

export default Footer;