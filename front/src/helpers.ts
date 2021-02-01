import { VariantType, OptionsObject } from "notistack";

export const getSnackBarConfig = (variant: VariantType): OptionsObject => ({
  variant,
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "right",
  },
});
