import styled from 'styled-components';
import {breakpoint} from '../styles/breakpoint'
export const MainWrapperStyles = styled.div`
  background: rgb(255, 255, 255, 0.4);
  backdrop-filter: blur(50px); 
`
export const PageWrapper = styled.div`
 max-width: 480px;
   margin: 0 auto;
  padding: 20px;
  ${breakpoint.m`
    max-width: 667px;
  `};
  ${breakpoint.l`
    max-width: 1440px; 
  `};
`
export const ContentWrapper = styled.section`
  display:flex;
  justify-content: space-between;
 
`
