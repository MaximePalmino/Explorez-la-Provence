
//Styles
import { createGlobalStyle } from "styled-components";

//Font
import FairLove from "./fonts/fair-love.ttf";

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Fair Love';
  src: local('Fair Love'), url(${FairLove}) format('truetype');
}
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }  
  body{
    font-family: 'Montserrat', sans-serif;
    background: #E5E5E5;
  }
path{    transition: all 0.4s ease-in-out;
  &:hover{
    fill:#C02425;

  }
}

.each-slide{
box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
}


`;

export default GlobalStyle;
