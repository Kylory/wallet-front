import {
  Logo,
  LogoText,
  IconContainer,
  Icon,
  Form,
  Input,
  ButtonSubmit,
  ButtonLink,
  LastIconContainer,
} from './styles';

import { ReactComponent as LogoIcon } from '../../icons/logo.svg';
import { ReactComponent as EmailIcon } from '../../icons/email.svg';
import { ReactComponent as PasswordIcon } from '../../icons/password.svg';

const FormLogin = () => {
  const hadleSubmit = e => {
    e.preventDefault();
  };

  return (
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

      <LastIconContainer>
        <Input type="password" placeholder="Пароль" />
        <Icon>
          <PasswordIcon />
        </Icon>
      </LastIconContainer>

      <ButtonSubmit type="submit">Вход</ButtonSubmit>
      <ButtonLink type="button">Регистрация</ButtonLink>
    </Form>
  );
};

export default FormLogin;
