import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ScreenWrapper } from "../../components/ScreenWrapper";
import { Text } from "../../components/Text";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Profile } from "../../components/Profile";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { RoutesEnum } from "../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { User } from "../../types/user.type";

export function ProfileScreen() {
  const { goBack, navigate } =
    useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [currentUser, setCurrentUser] = useState<User>();

  const updateUser = async () => {
    const user = await AsyncStorage.getItem("@user");
    if (!user) {
      navigate(RoutesEnum.Register);
      setCurrentUser(undefined);
      return;
    }

    setCurrentUser(JSON.parse(user));
  };

  useEffect(() => {
    updateUser();
  }, []);

  const onLogout = async () => {
    await AsyncStorage.removeItem("@user");
    updateUser();
  };

  return (
    <ScreenWrapper>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={goBack}>
          <Ionicons name="arrow-back" size={24} color="#888" />
        </TouchableOpacity>
        <Text fontWeight="600" fontSize={24}>
          Meu perfil
        </Text>
      </View>
      {currentUser && <Profile user={currentUser} onLogout={onLogout} />}
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    gap: 8,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    borderBottomWidth: 1,
    borderBottomColor: "#d0d0d0",
  },
});
