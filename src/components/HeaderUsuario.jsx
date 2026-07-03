import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { Feather } from "@expo/vector-icons";

function HeaderUsuario(){

    return(

        <View>
            <TouchableOpacity>
                <Feather name="plus" size={16} color="white" />
            </TouchableOpacity>

            <TouchableOpacity>
                <Feather name="lock" size={16} color="white" />
                <Text>{usuario.usuario}</Text>
                <Feather name="arrow-down" size={16} color="white" />
            </TouchableOpacity>

            <TouchableOpacity>
                <Feather name="menu" size={16} color="white" />
            </TouchableOpacity>
        </View>
    );
}

export default HeaderUsuario;