import {
  Banknote,
  Barcode,
  CreditCard,
  LandPlot,
  QrCode,
  LucideIcon,
} from "lucide-react-native";

type PaymentMethod = {
  id: string;
  label: string;
  value: string;
  icon: LucideIcon;
};

export function usePaymentMethods() {
  const paymentMethods: PaymentMethod[] = [
    { id: "boleto", label: "Boleto", value: "boleto", icon: Barcode },
    { id: "pix", label: "Pix", value: "pix", icon: QrCode },
    { id: "cash", label: "Dinheiro", value: "cash", icon: Banknote },
    { id: "card", label: "Cartão de Crédito", value: "card", icon: CreditCard },
    {
      id: "deposit",
      label: "Depósito Bancário",
      value: "deposit",
      icon: LandPlot,
    },
  ];

  return { paymentMethods };
}
