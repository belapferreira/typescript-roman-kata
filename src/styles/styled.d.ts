import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      secondary: string;

      background: string;
      li: string;
      text: string;
      inputColor: string;
      inputBackground: string;
      title: string;
      inputBorder: string;
      backgroundButton: string;
      backgroundBox: string;
      buttonText: string;
    };
  }
}
