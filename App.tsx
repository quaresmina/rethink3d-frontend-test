import { GestureHandlerRootView } from "react-native-gesture-handler";

import "@expo/metro-runtime";
import { Routes } from "./src/screens";

export default function App() {
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}
    >
      <Routes />
    </GestureHandlerRootView>
  );
}
