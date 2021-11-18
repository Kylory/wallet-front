import Media from 'react-media';
import { Container, Logo, ImageContainer, ImageText } from './styles';

import { ReactComponent as LogoTextIcon } from 'icons/logo-text.svg';
import FormRegistration from 'components/FormRegistration';

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
              <FormRegistration />
            </Container>
          )}
          {matches.tablet && (
            <Container>
              <ImageContainer>
                <img src="/images/registrationTablet.png" alt="Logo" />
                <ImageText>Finance App</ImageText>
              </ImageContainer>
              <FormRegistration />
            </Container>
          )}
          {matches.desktop && (
            <Container>
              <ImageContainer>
                <img src="/images/registrationDesktop.png" alt="Logo" />
                <ImageText>Finance App</ImageText>
              </ImageContainer>
              <FormRegistration />
            </Container>
          )}
        </>
      )}
    </Media>
  );
}
