import styled from 'styled-components';
import { breakpoint } from '../../styles/breakpoint';

//! Logo
export const Logo = styled.div`
  display: none;

  ${breakpoint.m`
    display: flex;
    justify-content: center;
    margin-bottom: 50px;

    width: 180px;
    height: 40px;
  `}/* @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;

    width: 180px;
    height: 40px;
  } */
`;

export const LogoText = styled.p`
  margin-left: 20px;

  font-family: Poppins;
  font-weight: bold;
  font-size: 30px;
  line-height: 45px;
`;

//! Icons
export const IconContainer = styled.div`
  position: relative;
  margin-bottom: 40px;
`;

export const LastIconContainer = styled(IconContainer)`
  ${breakpoint.m`
    margin-bottom: 50px;
  `}/* @media (min-width: 768px) {
  } */
`;

export const Icon = styled.div`
  position: absolute;
  top: 0;
  left: 15px;

  display: flex;
  justify-content: center;
  align-content: center;

  width: 24px;
  height: 24px;
`;

//! Form
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${breakpoint.m`
    padding: 45px 65px 60px;
    width: 540px;
    border: 1px solid #e0e0e0;
    border-radius: 20px;
  `} /* @media (min-width: 768px) {
    padding: 45px 65px 60px;
    width: 540px;
    border: 1px solid #e0e0e0;
    border-radius: 20px;
  } */

  ${breakpoint.l`
    margin-bottom: 50px;
  `} /* @media (min-width: 1200px) {
    margin-bottom: 50px;
  } */
`;

export const Input = styled.input`
  padding: 0 55px 10px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  width: 280px;
  outline: none;

  &::placeholder {
    // font-size: 18px;
    // line-height: 27px;

    color: #bdbdbd;
  }

  ${breakpoint.m`
    width: 410px;
  `}/* @media (min-width: 768px) {
    width: 410px;
  } */
`;

export const ButtonSubmit = styled.button`
  padding: 13px;
  margin-bottom: 20px;

  width: 280px;
  height: 50px;

  font-size: 18px;
  text-align: center;
  line-height: normal;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: #ffffff;
  background: #24cca7;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #4a56e2;
    background: #fff;
    border: 1px solid #4a56e2;
  }

  ${breakpoint.m`
    width: 300px;
  `}/* @media (min-width: 768px) {
    width: 300px;
  } */
`;

export const ButtonLink = styled.button`
  padding: 13px;

  width: 280px;
  height: 50px;

  font-size: 18px;
  text-align: center;
  line-height: normal;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: #4a56e2;
  background: #fff;
  border: 1px solid #4a56e2;
  border-radius: 20px;
  cursor: pointer;

  ${breakpoint.m`
    width: 300px;
  `}/* @media (min-width: 768px) {
    width: 300px;
  } */
`;
