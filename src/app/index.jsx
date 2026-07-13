import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PagPrincipal from "../components/Feed/PagPrincipal";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="inicio"
          component={PagPrincipal}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;