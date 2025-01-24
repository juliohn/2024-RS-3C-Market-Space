import { useNavigation } from "@react-navigation/native";
import {
  VStack,
  Text,
  Switch,
  HStack,
  RadioGroup,
  FormControl,
  ScrollView,
  Image,
} from "@gluestack-ui/themed";
import { Button } from "@components/Button";
import { CheckBox } from "@components/CheckBox";
import { Input } from "@components/Input";
import { Radio } from "@components/Radio";
import { TextArea } from "@components/TextArea";
import { HomeStackNavigatorProps } from "@routes/app.routes";
import * as ImagePicker from "expo-image-picker";
import { Box } from "lucide-react-native";
import { usePaymentMethods } from "@hooks/usePaymentMethods";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const adSchema = yup.object({
  title: yup.string().required("Informe o título do anúncio"),
  description: yup.string().required("Informe a descrição do produto"),
  price: yup.string().required("Informe o preço do produto"),
  is_new: yup.string().required().oneOf(["new", "used"]),
  accept_trade: yup.boolean(),
  payment_methods: yup
    .object()
    .test(
      "at-least-one",
      "Selecione pelo menos um método de pagamento",
      (value) => {
        return Object.values(value || {}).some((method) => method === true);
      }
    ),
  images: yup
    .array()
    .min(1, "Adicione pelo menos uma imagem")
    .max(3, "Máximo de 3 imagens permitidas"),
});

type AdFormData = yup.InferType<typeof adSchema>;

export function AdsNew() {
  const navigation = useNavigation<HomeStackNavigatorProps>();
  const { paymentMethods } = usePaymentMethods();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<AdFormData>({
    resolver: yupResolver(adSchema),
    defaultValues: {
      title: "",
      description: "",
      price: "",
      is_new: "new",
      accept_trade: false,
      payment_methods: paymentMethods.reduce(
        (acc, method) => ({
          ...acc,
          [method.id]: false,
        }),
        {}
      ),
      images: [],
    },
  });

  const images = watch("images");

  const handlePickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      });

      if (!result.canceled) {
        const imageUri = result.assets[0].uri;
        const currentImages = watch("images") ?? [];
        if (currentImages.length < 3) {
          setValue("images", [...currentImages, imageUri]);
        }
      }
    } catch (error) {
      console.log("Error picking image:", error);
    }
  };
  const onSubmit = (data: AdFormData) => {
    const formattedData = {
      name: data.title,
      description: data.description,
      is_new: data.is_new === "new",
      price: Number(data.price.replace(/[^0-9]/g, "")),
      accept_trade: data.accept_trade ?? false,
      payment_methods: Object.entries(data.payment_methods)
        .filter(([_, isSelected]) => isSelected)
        .map(([method]) => method),
      images: data.images,
    };

    navigation.navigate("adsPreview", {
      item: formattedData,
    });
  };

  return (
    <VStack flex={1} bg="$gray700" mt={"$4"} p="$2">
      <ScrollView
        flex={1}
        px="$4"
        contentContainerStyle={{ paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Images Section */}
        <FormControl gap="$4" mb="$4" isInvalid={!!errors.images}>
          <Text fontSize="$md" fontFamily="$heading" color="$gray100">
            Imagens
          </Text>
          <Text fontSize="$sm" color="$gray300" fontFamily="$body">
            Escolha até 3 imagens para mostrar o quanto o seu produto é
            incrível!
          </Text>
          {errors.images && (
            <Text color="$error500" fontSize="$xs">
              {errors.images.message}
            </Text>
          )}
          <HStack mt="$2" mb="$2" space="md">
            {images?.map((uri, index) => (
              <Box key={index} width="$24" height="$24">
                <Image
                  source={{ uri }}
                  alt="Selected image"
                  w="$24"
                  h="$24"
                  resizeMode="cover"
                />
              </Box>
            ))}
            {images?.length < 3 && (
              <Button
                w="$24"
                h="$24"
                variantButton="SECONDARY"
                title="+"
                onPress={handlePickImage}
              />
            )}
          </HStack>
        </FormControl>

        {/* Product Details Section */}
        <FormControl gap="$4" mb="$4">
          <Text fontSize="$md" fontFamily="$heading" color="$gray100">
            Sobre o produto
          </Text>

          <Controller
            control={control}
            name="title"
            render={({ field: { onChange, value } }) => (
              <>
                <Input
                  placeholder="Título do anúncio"
                  onChangeText={onChange}
                  value={value}
                  isInvalid={!!errors.title}
                  bg="$white"
                />
                {errors.title && (
                  <Text color="$red500" fontSize="$xs">
                    {errors.title.message}
                  </Text>
                )}
              </>
            )}
          />

          <Controller
            control={control}
            name="description"
            render={({ field: { onChange, value } }) => (
              <>
                <TextArea
                  placeholder="Descrição do produto"
                  onChangeText={onChange}
                  value={value}
                  h="$32"
                />
                {errors.description && (
                  <Text color="$red500" fontSize="$xs">
                    {errors.description.message}
                  </Text>
                )}
              </>
            )}
          />

          <Controller
            control={control}
            name="is_new"
            render={({ field: { onChange, value } }) => (
              <RadioGroup value={value} onChange={onChange}>
                <HStack space="md">
                  <Radio
                    label="Produto usado"
                    value="used"
                    isSelected={value === "used"}
                  />
                  <Radio
                    label="Produto novo"
                    value="new"
                    isSelected={value === "new"}
                  />
                </HStack>
              </RadioGroup>
            )}
          />
        </FormControl>

        {/* Price Section */}
        <FormControl gap="$4" mb="$4">
          <Text fontSize="$md" fontFamily="$heading" color="$gray100">
            Venda
          </Text>
          <Controller
            control={control}
            name="price"
            render={({ field: { onChange, value } }) => (
              <>
                <Input
                  bg="$white"
                  mask="R$ [999999],[99]"
                  maskType="money"
                  maskOptions={{
                    precision: 2,
                    separator: ",",
                    delimiter: ".",
                    unit: "R$ ",
                  }}
                  placeholder="R$ 0,00"
                  value={value}
                  isInvalid={!!errors.price}
                  onChangeText={onChange}
                />
                {errors.price && (
                  <Text color="$red500" fontSize="$xs">
                    {errors.price.message}
                  </Text>
                )}
              </>
            )}
          />
        </FormControl>

        {/* Trade Option */}
        <FormControl gap="$4">
          <HStack alignItems="center" space="md" mb="$4">
            <Text fontSize="$md" fontFamily="$heading" color="$gray100">
              Aceita troca?
            </Text>
            <Controller
              control={control}
              name="accept_trade"
              render={({ field: { onChange, value } }) => (
                <Switch value={value} onValueChange={onChange} />
              )}
            />
          </HStack>
        </FormControl>

        {/* Payment Methods */}
        <FormControl gap="$4" isInvalid={!!errors.payment_methods}>
          <Text fontSize="$md" fontFamily="$heading" color="$gray100" mb="$2">
            Meios de pagamento aceitos
          </Text>
          {errors.payment_methods && (
            <Text color="$error500" fontSize="$xs">
              {errors.payment_methods.message}
            </Text>
          )}
          <VStack space="sm">
            {paymentMethods.map((method) => (
              <Controller
                key={method.id}
                control={control}
                name={`payment_methods.${method.id}`}
                render={({ field: { onChange, value } }) => (
                  <CheckBox
                    label={method.label}
                    value={method.value}
                    isChecked={value}
                    onPress={() => onChange(!value)}
                  />
                )}
              />
            ))}
          </VStack>
        </FormControl>
      </ScrollView>

      {/* Action Buttons */}
      <HStack bottom={0} left={0} right={0} p="$6" space="md" bg="$white">
        <Button
          onPress={() => navigation.goBack()}
          flex={1}
          variantButton="SECONDARY"
          title="Cancelar"
        />
        <Button
          onPress={handleSubmit(onSubmit)}
          flex={1}
          variantButton="PRIMARY"
          title="Avançar"
        />
      </HStack>
    </VStack>
  );
}
