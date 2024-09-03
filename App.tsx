import { StatusBar } from "react-native";

import { GluestackUIProvider, Text, Center } from "@gluestack-ui/themed";

import { config } from "./config/gluestack-ui.config";

import {
  useFonts,
  Karla_400Regular,
  Karla_700Bold,
} from "@expo-google-fonts/karla";
import { Loading } from "@components/Loading";

import { Signin } from "@screens/Signin";

import { Signup } from "@screens/Signup";

export default function App() {
  const [foantsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold });
  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"transparent"}
        translucent
      />
      {foantsLoaded ? <Signup /> : <Loading />}
    </GluestackUIProvider>
  );
}
