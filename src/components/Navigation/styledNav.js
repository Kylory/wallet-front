import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding-top: 40px;
`;

const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-family: Poppins;
  font-style: normal;
  font-size: 18px;
  line-height: 1.5;
  color: #000000;

  &.active {
    font-weight: bold;
  }
`;
const LinkText = styled.p`
  padding-left: 20px;
`;
export { Wrapper, StyledLink, LinkText };
