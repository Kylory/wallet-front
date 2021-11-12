import { createGlobalStyle } from 'styled-components';

import Circe_Woff from './fonts/Circe/Circe-Regular.woff';
import Circe_Woff2 from './fonts/Circe/Circe-Regular.woff2';

import Circe_Light_Woff from './fonts/Circe/Circe-Light.woff';
import Circe_Light_Woff2 from './fonts/Circe/Circe-Light.woff2';


import Circe_Bold_Woff from './fonts/Circe/Circe-Bold.woff';
import Circe_Bold_Woff2 from './fonts/Circe/Circe-Bold.woff2';

import Circe_Extra_Bold_Woff from './fonts/Circe/Circe-Bold.woff';
import Circe_Extra_Bold_Woff2 from './fonts/Circe/Circe-ExtraBold.woff2';

import Poppins_Woff from './fonts/Poppins/Poppins-Regular.woff';
import Poppins_Woff2 from './fonts/Poppins/Poppins-Regular.woff2';

import Poppins_Bold_Woff from './fonts/Poppins/Poppins-Bold.woff';
import Poppins_Bold_Woff2 from './fonts/Poppins/Poppins-Bold.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Circe';
        src: local('Circe Bold'), local('CirceBold'),
        url(${Circe_Bold_Woff}) format('woff'),
        url(${Circe_Bold_Woff2}) format('woff2');
        font-weight: bold;
        font-style: normal;
    };
    @font-face {
        font-family: 'Circe';
        src: local('Circe'), local('Circe'),
        url(${Circe_Woff}) format('woff'),
        url(${Circe_Woff2}) format('woff2');
        font-weight: normal;
        font-style: normal;
    };
    @font-face {
        font-family: 'Circe';
        src: local('Circe Extra Bold'), local('CirceExtraBold'),
        url(${Circe_Extra_Bold_Woff}) format('woff'),
        url(${Circe_Extra_Bold_Woff2}) format('woff2');
        font-weight: 800;
        font-style: normal;
    };
    
    @font-face {
        font-family: 'Circe';
        src: local('Circe Light'), local('CirceLight'),
        url(${Circe_Light_Woff}) format('woff'),
        url(${Circe_Light_Woff2}) format('woff2');
        font-weight: 300;
        font-style: normal;
    };
     @font-face {
        font-family: 'Poppins';
        src: local('Poppins'), local('Poppins'),
        url(${Poppins_Woff}) format('woff'),
        url(${Poppins_Woff2}) format('woff2');
        font-weight: normal;
        font-style: normal;
    };
     @font-face {
        font-family: 'Poppins';
        src: local('Poppins Bold'), local('PoppinsBold'),
        url(${Poppins_Bold_Woff}) format('woff'),
        url(${Circe_Bold_Woff2}) format('woff2');
        font-weight: bold;
        font-style: normal;
    };
    
    
    
    
    
`;
