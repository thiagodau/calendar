import { StatusBar } from 'react-native';
import Routes from '@/app/routes';

import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Loading } from '@/app/components/loading';

import {
  useFonts,
  Ubuntu_700Bold,
  Ubuntu_500Medium,
  Ubuntu_400Regular,
} from '@expo-google-fonts/ubuntu'

export default function App() {
  const [fontsLoaded] = useFonts({ Ubuntu_700Bold, Ubuntu_500Medium, Ubuntu_400Regular })

  if (!fontsLoaded) { return <Loading /> }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor='transparent' translucent />
      <Routes />
    </GestureHandlerRootView>
  );
}
