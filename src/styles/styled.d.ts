import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      white: string;
      background: string;
      counterBackground: string;
      grayLine: string;
      navBar: string;
      text: string;
      textHighlight: string;
      title: string;
      red: string;
      green: string;
      blue: string;
      blueDark: string;
      blueTwitter: string;
    };
  }
}
