import styled from 'styled-components';

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
    height: auto;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    height: 100%;
  }
`;

export const ImageContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1199px) {
    display: flex;
    align-items: center;
    margin: 50px 0;
    width: 540px;
  }

  @media (min-width: 1200px) {
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

  @media (min-width: 1200px) {
    margin-left: 0;
    margin-top: 28px;
  }
`;

//! Logo
export const Logo = styled.div`
  width: 120px;
  height: 30px;
  margin-bottom: 50px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;

    width: 180px;
    height: 40px;
  }
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
  margin-bottom: ${props => (props.margin ? props.margin : '40px')};
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

  @media (min-width: 768px) {
    padding: 45px 65px 60px;
    width: 540px;
    border: 1px solid #e0e0e0;
    border-radius: 20px;
  }

  @media (min-width: 1200px) {
    margin-bottom: 50px;
  }
`;

export const Input = styled.input`
  padding: 0 55px 10px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  width: 280px;

  &::placeholder {
    // font-size: 18px;
    // line-height: 27px;

    color: #bdbdbd;
  }

  @media (min-width: 768px) {
    width: 410px;
  }
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
  border-radius: 20px;

  @media (min-width: 768px) {
    width: 300px;
  }
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

  @media (min-width: 768px) {
    width: 300px;
  }
`;
