import styled from 'styled-components';
import { breakpoint, breakpointMax } from '../styles/breakpoint';
export const MainWrapperStyles = styled.div`
  background: rgb(255, 255, 255, 0.4);
  backdrop-filter: blur(50px);
`;
export const PageWrapper = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 20px;
  ${breakpoint.m`
    max-width: 688px;
  `};
  ${breakpoint.l`
    max-width: 1440px;
  `};
`;
export const ContentWrapper = styled.section`
  display: flex;
  ${breakpointMax.l`
    flex-direction: column;
  `};
  /* justify-content: space-between; */
`;
export const AlignWrapper = styled.div`
  ${breakpoint.s`
    // margin-right: 0;
    margin-left: auto;
    margin-right: auto;
  `};
  ${breakpoint.m`
    margin-right: 20px;
  `};
  ${breakpoint.l`
    margin-right: 0;
  `};
`;
