import {
  Logo,
  IconContainer,
  Icon,
  Form,
  Input,
  ButtonSubmit,
  ButtonLink,
  LogoText,
  LastIconContainer,
} from './styles';

import { ReactComponent as LogoIcon } from '../../icons/logo.svg';
import { ReactComponent as EmailIcon } from '../../icons/email.svg';
import { ReactComponent as PasswordIcon } from '../../icons/password.svg';
import { ReactComponent as NameIcon } from '../../icons/name.svg';

const FormRegistration = () => {
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

      <LastIconContainer>
        <Input type="name" placeholder="Ваше имя" />
        <Icon>
          <NameIcon />
        </Icon>
      </LastIconContainer>

      <ButtonSubmit type="submit">Вход</ButtonSubmit>
      <ButtonLink type="button">Регистрация</ButtonLink>
    </Form>
  );
};

export default FormRegistration;
