import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { Feather } from "@expo/vector-icons";

function Header(){

    return(

        <View>
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

export default Header;