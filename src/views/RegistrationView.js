import Media from 'react-media';
import {
  Container,
  Logo,
  IconContainer,
  ImageContainer,
  ImageText,
  Icon,
  Form,
  Input,
  ButtonSubmit,
  ButtonLink,
  LogoText,
} from './styles';

import { ReactComponent as LogoTextIcon } from '../icons/logo-text.svg';
import { ReactComponent as LogoIcon } from '../icons/logo.svg';
import { ReactComponent as EmailIcon } from '../icons/email.svg';
import { ReactComponent as PasswordIcon } from '../icons/password.svg';
import { ReactComponent as NameIcon } from '../icons/name.svg';

export default function LoginView() {
  const hadleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Media
      queries={{
        mobile: '(max-width: 767px)',
        tablet: '(min-width: 768px) and (max-width: 1199px)',
        desktop: '(min-width: 1200px)',
      }}
    >
      {matches => (
        <>
          {matches.mobile && (
            <Container>
              <Logo>
                <LogoTextIcon />
              </Logo>
              <Form onSubmit={hadleSubmit}>
                <IconContainer>
                  <Input type="email" placeholder="E-mail" />
                  <Icon>
                    <EmailIcon />
                  </Icon>
                </IconContainer>

                <IconContainer>
                  <Input type="password" placeholder="Пароль" />
                  <Icon>
                    <PasswordIcon />
                  </Icon>
                </IconContainer>

                <IconContainer>
                  <Input type="password" placeholder="Подтвердите пароль" />
                  <Icon>
                    <PasswordIcon />
                  </Icon>
                </IconContainer>

                <IconContainer>
                  <Input type="name" placeholder="Ваше имя" />
                  <Icon>
                    <NameIcon />
                  </Icon>
                </IconContainer>

                <ButtonSubmit type="submit">Регистрация</ButtonSubmit>
                <ButtonLink type="button">Вход</ButtonLink>
              </Form>
            </Container>
          )}
          {matches.tablet && (
            <Container>
              <ImageContainer>
                <img src="/images/registrationTablet.png" alt="Logo" />
                <ImageText>Finance App</ImageText>
              </ImageContainer>
              <Form onSubmit={hadleSubmit}>
                <Logo>
                  <LogoIcon />
                  <LogoText>Wallet</LogoText>
                </Logo>
                <IconContainer>
                  <Input type="email" placeholder="E-mail" />
                  <Icon>
                    <EmailIcon />
                  </Icon>
                </IconContainer>

                <IconContainer>
                  <Input type="password" placeholder="Пароль" />
                  <Icon>
                    <PasswordIcon />
                  </Icon>
                </IconContainer>

                <IconContainer>
                  <Input type="password" placeholder="Подтвердите пароль" />
                  <Icon>
                    <PasswordIcon />
                  </Icon>
                </IconContainer>

                <IconContainer margin="50px">
                  <Input type="name" placeholder="Ваше имя" />
                  <Icon>
                    <NameIcon />
                  </Icon>
                </IconContainer>

                <ButtonSubmit type="submit">Вход</ButtonSubmit>
                <ButtonLink type="button">Регистрация</ButtonLink>
              </Form>
            </Container>
          )}
          {matches.desktop && (
            <Container>
              <ImageContainer>
                <img src="/images/registrationDesktop.png" alt="Logo" />
                <ImageText>Finance App</ImageText>
              </ImageContainer>
              <Form onSubmit={hadleSubmit}>
                <Logo>
                  <LogoIcon />
                  <LogoText>Wallet</LogoText>
                </Logo>
                <IconContainer>
                  <Input type="email" placeholder="E-mail" />
                  <Icon>
                    <EmailIcon />
                  </Icon>
                </IconContainer>

                <IconContainer>
                  <Input type="password" placeholder="Пароль" />
                  <Icon>
                    <PasswordIcon />
                  </Icon>
                </IconContainer>

                <IconContainer>
                  <Input type="password" placeholder="Подтвердите пароль" />
                  <Icon>
                    <PasswordIcon />
                  </Icon>
                </IconContainer>

                <IconContainer margin="50px">
                  <Input type="name" placeholder="Ваше имя" />
                  <Icon>
                    <NameIcon />
                  </Icon>
                </IconContainer>

                <ButtonSubmit type="submit">Вход</ButtonSubmit>
                <ButtonLink type="button">Регистрация</ButtonLink>
              </Form>
            </Container>
          )}
        </>
      )}
    </Media>
  );
}
