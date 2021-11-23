import styled from 'styled-components';
const BackImgUrlDesktop = require('icons/backgroundLoginDesktop.jpg').default;
const BackImgUrlTablet = require('icons/backgroundLoginTablet.jpg').default;

export const Background = styled.div`
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    background-image: url(${BackImgUrlTablet});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    background-position-y: 50%;
  }

  @media (min-width: 1280px) {
    position: fixed;
    top: 0;
    left: 0;

    background-image: url(${BackImgUrlDesktop});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
  }
`;

export const Container = styled.section`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    position: relative;
    height: auto;
  }

  @media (min-width: 1280px) {
    position: fixed;
    flex-direction: row;
    height: 100%;
  }
`;

export const ImageContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    align-items: center;
    margin: 50px 0;
    width: 540px;
  }

  @media (min-width: 1280px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-right: 143px;

    width: 436px;
    height: auto;
  }
`;

export const ImageText = styled.p`
  font-family: Poppins;
  font-size: 30px;
  line-height: 45px;
  margin-left: 40px;

  @media (min-width: 1280px) {
    margin-left: 0;
    margin-top: 28px;
  }
`;

//! Logo
export const Logo = styled.div`
  width: 120px;
  height: 30px;
  margin-bottom: 50px;
`;
