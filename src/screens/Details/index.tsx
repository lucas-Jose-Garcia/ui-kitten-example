import * as React from 'react';
import { Button, View, Text } from 'react-native';

import { Props } from '../../routes/type';

export function Details({ navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Voltar para Home" onPress={() => navigation.goBack()} />
    </View>
  );
}
