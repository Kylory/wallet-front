import Media from 'react-media';
import {
  Container,
  Logo,
  ImageContainer,
  ImageText,
  Background,
} from './styles';

import { ReactComponent as LogoTextIcon } from 'icons/logo-text.svg';
import FormLogin from 'components/FormLogin';

export default function LoginView() {
  return (
    <Media
      queries={{
        mobile: '(max-width: 767px)',
        tablet: '(min-width: 768px) and (max-width: 1279px)',
        desktop: '(min-width: 1280px)',
      }}
    >
      {matches => (
        <>
          {matches.mobile && (
            <Container>
              <Logo>
                <LogoTextIcon />
              </Logo>
              <FormLogin />
            </Container>
          )}
          {matches.tablet && (
            <Background>
              <Container>
                <ImageContainer>
                  <img src="/images/loginTablet.png" alt="Logo" />
                  <ImageText>Finance App</ImageText>
                </ImageContainer>
                <FormLogin />
              </Container>
            </Background>
          )}
          {matches.desktop && (
            <Background>
              <Container>
                <ImageContainer>
                  <img src="/images/loginDesktop.png" alt="Logo" />
                  <ImageText>Finance App</ImageText>
                </ImageContainer>
                <FormLogin />
              </Container>
            </Background>
          )}
        </>
      )}
    </Media>
  );
}
