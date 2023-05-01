import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RouteParamsType } from "./route-params.type";
import HomeScreen from "../screens/Home/home.screen";

export default function Router() {
    const Stack = createNativeStackNavigator<RouteParamsType>();
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ animation: "none" }}
            />
        </Stack.Navigator>
    );
}