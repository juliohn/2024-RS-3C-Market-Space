import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import { useNavigation } from "@react-navigation/native";

import { House, Tag, LogOut, Plus } from "lucide-react-native";

import { Icon, HStack } from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native";

import { ListMyAds } from "@screens/ListMyAds";
import { Logout } from "@screens/Logout";

import { gluestackUIConfig } from "../../config/gluestack-ui.config";
import { Home } from "@screens/Home";
// import { AdsStackRoutes } from "./app.routes";

import { useAppDispatch } from "@hooks/index";
import { signOut } from "@slices/authSlice";

type TabRoutes = {
  hometab: undefined;
  listMyAds: undefined;
  logout: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<TabRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<TabRoutes>();

import { HomeStackNavigatorProps } from "@routes/app.routes";

export function TabRoutes() {
  const { tokens } = gluestackUIConfig;
  const { colors } = tokens;
  const dispatch = useAppDispatch();
  const navigation = useNavigation<HomeStackNavigatorProps>();

  return (
    <Navigator
      screenOptions={{
        // headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Screen
        name="hometab"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <House color={colors.gray100} />,
          headerShown: false,
        }}
      />
      <Screen
        name="listMyAds"
        component={ListMyAds}
        options={{
          tabBarIcon: ({ color }) => <Tag color={colors.gray400} />,
          title: "Meus anúncios",
          headerShown: true,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colors.gray700,
          },
          headerRight: () => {
            return (
              <HStack mr={"$6"}>
                <TouchableOpacity onPress={() => navigation.navigate("adsNew")}>
                  <Icon as={Plus} size="xl" color="$gray100" />
                </TouchableOpacity>
              </HStack>
            );
          },
        }}
      />
      <Screen
        name="logout"
        component={Logout}
        options={{
          tabBarIcon: () => <LogOut color={colors.redlight} />,
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                dispatch(signOut());
              }}
            />
          ),
        }}
      />
    </Navigator>
  );
}
