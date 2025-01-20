import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Box } from "@gluestack-ui/themed";

import { AppRoutes } from "./app.routes";

import { AuthRoutes } from "./auth.routes";

import { LogBox } from "react-native";

import { gluestackUIConfig } from "../../config/gluestack-ui.config";
import { useAppSelector } from "@hooks/index";

LogBox.ignoreAllLogs();

export function Routes() {
  const theme = DefaultTheme;
  theme.colors.background = gluestackUIConfig.tokens.colors.gray700;

  const user = useAppSelector((state) => state.auth.user);

  return (
    <Box flex={1} bg="$gray700">
      <NavigationContainer>
        {user ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </Box>
  );
}
