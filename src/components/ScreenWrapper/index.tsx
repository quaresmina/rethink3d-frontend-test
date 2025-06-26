import { PropsWithChildren } from "react";
import { StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function ScreenWrapper({ children }: PropsWithChildren) {
  return (
    <>
      <View style={{ backgroundColor: "#FFF", maxHeight: 30 }}>
        <SafeAreaView>
          <StatusBar backgroundColor="#FFF" />
        </SafeAreaView>
      </View>
      {children}
    </>
  );
}
