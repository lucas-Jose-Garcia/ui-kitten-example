import * as React from "react";
import { Button, View, Text } from "react-native";

import { Props } from "../../routes/type";

export function Home({ navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Ir para Detalhes"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}
