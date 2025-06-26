import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RegisterScreen } from "./Register";
import { ProfileScreen } from "./Profile";
import { StatusBar } from "react-native";
import { RoutesEnum } from "./types";

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#fff"} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={RoutesEnum.Register} component={RegisterScreen} />
        <Stack.Screen name={RoutesEnum.Profile} component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
