import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ToDoListScreen from "../views/ToDoListScreen";
import LoginScreen from "../views/LoginScreen";
import HomeScreen from "../views/HomeScreen";

const Routes = () => {
    const Stack = createNativeStackNavigator();


    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="ToDoList" component={ToDoListScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default Routes;
