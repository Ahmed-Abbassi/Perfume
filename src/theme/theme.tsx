import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark", // Set the initial color mode to light
  useSystemColorMode: false, // Disable using system color mode
};

const theme = extendTheme({ 
  config, 
  colors : {
    blackO : "#2C2C2C",
    goldO  : "#D4AF37" ,
    whiteO : "#FFFCF5"

  }
 });

export default theme;
