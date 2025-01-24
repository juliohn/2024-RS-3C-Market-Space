// External libraries
import { TouchableOpacity } from "react-native";
import { ArrowLeft, Pencil } from "lucide-react-native";

// Navigation
import { useNavigation } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { TabRoutes } from "./tab.routes";

// Screens
import { ProductDetails } from "@screens/ProductDetails";
import { AdsDetails } from "@screens/AdsDetails";
import { AdsNew } from "@screens/AdsNew";
import { AdsPreview } from "@screens/AdsPreview";

// Types
import { CardProductsProps } from "@components/CardProduct";

// Config
import { gluestackUIConfig } from "../../config/gluestack-ui.config";
import { AdDTO } from "@dtos/Ad";

export type HomeStackParamList = {
  home: undefined;
  productDetails: {
    params: {
      item: CardProductsProps;
    };
  };
  adsNew: undefined;
  adsPreview: {
    item: AdDTO;
  };
};

export type HomeStackNavigatorProps =
  NativeStackNavigationProp<HomeStackParamList>;

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  const navigation = useNavigation();
  const { tokens } = gluestackUIConfig;
  const { colors } = tokens;

  return (
    <Navigator>
      <Screen
        name="home"
        component={TabRoutes}
        options={{
          headerShown: false,
        }}
      />
      <Screen name="productDetails" component={ProductDetails} />
      <Screen
        name="adsDetails"
        component={AdsDetails}
        options={() => {
          return {
            headerShown: true,
            title: "",
            headerTitleStyle: {
              fontWeight: "bold",
            },

            headerLeft: () => {
              return (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <ArrowLeft size={24} color={colors.gray100} />
                </TouchableOpacity>
              );
            },
            headerRight: () => {
              return (
                <TouchableOpacity onPress={() => console.log("Editar")}>
                  <Pencil size={24} color={colors.gray100} />
                </TouchableOpacity>
              );
            },
            headerBackVisible: false,
            headerShadowVisible: false,
          };
        }}
      />
      <Screen
        name="adsNew"
        component={AdsNew}
        options={{
          headerShown: true,
          title: "Criar anúncio",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerStyle: {
            backgroundColor: colors.gray700,
          },
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeft size={24} color={colors.gray100} />
              </TouchableOpacity>
            );
          },
          headerBackVisible: false,
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: colors.gray700,
          },
        }}
      />

      <Screen
        name="adsPreview"
        component={AdsPreview}
        options={{
          headerShown: true,
          headerTitle: "",
          headerTransparent: true,
          headerBackVisible: false,
          headerLeft: () => null,
          headerStyle: {
            backgroundColor: colors.blue,
          },
          headerShadowVisible: false,
        }}
      />
    </Navigator>
  );
}

type StackAdsProps = {
  myListAds: undefined;
  adsDetails: {
    params: {
      item: CardProductsProps;
    };
  };
};

// export type AdsStackNavigatorProps = NativeStackNavigationProp<StackAdsProps>;
// export function AdsStackRoutes() {
//   return (
//     <Navigator>
//       <Screen
//         name="listMyAds"
//         component={ListMyAds}
//         options={{
//           headerShown: true,
//           title: "Meus anúncios",
//           headerTitleStyle: {
//             fontWeight: "bold",
//           },
//           headerStyle: {
//             backgroundColor: "#F7F7F8",
//           },
//           headerShadowVisible: false,
//           contentStyle: {
//             backgroundColor: "#F7F7F8",
//           },
//         }}
//       />
//     </Navigator>
//   );
// }
