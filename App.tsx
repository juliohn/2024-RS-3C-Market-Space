import { StatusBar } from "react-native";

import { GluestackUIProvider } from "@gluestack-ui/themed";

import { config } from "./config/gluestack-ui.config";

import {
  useFonts,
  Karla_400Regular,
  Karla_700Bold,
} from "@expo-google-fonts/karla";
import { Loading } from "@components/Loading";

import { Routes } from "@routes/index";
import { Provider } from "react-redux";
import { store } from "@store/index";

export default function App() {
  const [foantsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold });
  return (
    <Provider store={store}>
      <GluestackUIProvider config={config}>
        <StatusBar
          barStyle={"light-content"}
          backgroundColor={"transparent"}
          translucent
        />
        {foantsLoaded ? <Routes /> : <Loading />}
      </GluestackUIProvider>
    </Provider>
  );
}
