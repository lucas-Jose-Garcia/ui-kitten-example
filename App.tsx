import { NavigationContainer } from '@react-navigation/native';

import { CustomStatusBar } from './src/components/CustomStatusBar';
import { MyStack } from './src/routes/Stack';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <MyStack />
        <CustomStatusBar />
      </NavigationContainer>
    </>
  );
}
