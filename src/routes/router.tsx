import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RouteParamsType } from "./route-params.type";
import HomeScreen from "../screens/Home/home.screen";
import FolderScreen from "../screens/Folder/folder.screen";
import { CreateFolderScreen } from "../screens/CreateFolder/create-folder.screen";

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
            <Stack.Screen
                name="Folder"
                component={FolderScreen}
                options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
                name="CreateFolder"
                component={CreateFolderScreen}
                options={{ animation: "slide_from_right" }}
            />
        </Stack.Navigator>
    );
}