import { createGlobalStyle } from 'styled-components';
/*import Poppins from '../Poppins/Poppins-Black.ttf'*/

const GlobalStyle = createGlobalStyle`
*, *:before, *:after {
  box-sizing: border-box;
}
  body {
    margin: 0 auto;
    width: 595px;
    height: 842px;
    padding: 0%;
  }
`;

export default GlobalStyle;
