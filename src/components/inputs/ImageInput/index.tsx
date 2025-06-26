import { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { launchImageLibraryAsync } from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "../../Text";

interface ImageInputProps {
  onChange: (uri: string) => void;
  value?: string;
  error?: string;
}

export function ImageInput({ onChange, value, error }: ImageInputProps) {
  const [imageUri, setImageUri] = useState(value);

  const onPress = async () => {
    const result = await launchImageLibraryAsync({
      mediaTypes: "images",
      quality: 0.2,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImageUri(uri);
      onChange(uri);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <View style={[styles.input, { borderColor: error ? "red" : "#eee" }]}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.image} />
          ) : (
            <Ionicons name="camera" size={24} color="#888" />
          )}
        </View>
        <Text fontSize={18} fontWeight={600}>
          Foto de perfil
        </Text>
      </TouchableOpacity>
      {error && (
        <Text fontSize={14} color="red" paddingLeft={6}>
          {error}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  input: {
    width: 80,
    height: 80,
    borderRadius: "100%",
    borderWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
