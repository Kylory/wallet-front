import styled from 'styled-components';
import { breakpoint, breakpointMax } from '../styles/breakpoint';
const BackImgUrl = require('../icons/backgroundDesktop.jpg').default;

export const MainWrapperStyles = styled.div`
  min-height: 100vh;
  background: #e7eaf2;
  ${breakpoint.m`
    background-image: url(${BackImgUrl});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    background-position-x: 39%;
  `};
`;
export const PageWrapper = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 20px;
  ${breakpoint.m`
    // max-width: 688px;
    max-width: 768px;
    padding: 20px 40px;
  `};
  ${breakpoint.l`
    position: relative;
    max-width: 1440px;
    // padding: 40px 85px;
    padding: 45px 85px;

        // padding: 0 85px 40px;
  `};
`;
export const ContentWrapper = styled.section`
  display: flex;
  align-items: center;
  ${breakpoint.m`
    align-items: normal;
  `};
  ${breakpointMax.l`
    flex-direction: column;
  `};
`;
export const AlignWrapper = styled.div`
  ${breakpointMax.m`
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

export const LineWrapper = styled.div`
  ${breakpoint.l`
    position: absolute;
    width: 0px;
    height: 100%;
    left: 465px;
    top: 0;
    border: 1px solid #E7E5F2;
    box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05), 1px 0px 0px rgba(255, 255, 255, 0.6);
  `};
`;
