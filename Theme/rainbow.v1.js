import { darkTheme } from "@rainbow-me/rainbowkit";
import merge from "lodash.merge";
const theme = merge(darkTheme(), {
  colors: {
    accentColor:
      "linear-gradient(230.29deg, rgba(255, 152, 32, 0.8) 36.06%, rgba(255, 208, 117, 0.8) 72.69%)",
    connectButtonBackground:
      "linear-gradient(230.29deg, rgba(255, 152, 32, 0.8) 36.06%, rgba(255, 208, 117, 0.8) 72.69%)",
  },
  shadows: {
    connectButton: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  },
});

export default theme;
