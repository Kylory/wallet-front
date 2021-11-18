import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn, registration } from 'redux/auth/authOperations';

import { ReactComponent as LogoIcon } from 'icons/logo.svg';
import { ReactComponent as EmailIcon } from 'icons/email.svg';
import { ReactComponent as PasswordIcon } from 'icons/password.svg';
import { ReactComponent as NameIcon } from 'icons/name.svg';
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

const FormRegistration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const hadleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'email':
        return setEmail(value);

      case 'password':
        return setPassword(value);

      case 'сonfirm-password':
        return setConfirmPassword(value);

      case 'name':
        return setName(value);

      default:
        break;
    }
  };

  const hadleSubmit = e => {
    e.preventDefault();

    dispatch(
      registration({
        email,
        password,
        repeated_password: confirmPassword,
        name,
      }),
    );
    dispatch(logIn({ email, password }));

    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setName('');
  };

  return (
    <Form onSubmit={hadleSubmit}>
      <Logo>
        <LogoIcon />
        <LogoText>Wallet</LogoText>
      </Logo>
      <IconContainer>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={hadleChange}
          placeholder="E-mail"
        />
        <Icon>
          <EmailIcon />
        </Icon>
      </IconContainer>

      <IconContainer>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={hadleChange}
          placeholder="Пароль"
          title="Пароль должен состоять из 8 символов"
        />
        <Icon>
          <PasswordIcon />
        </Icon>
      </IconContainer>

      <IconContainer>
        <Input
          type="password"
          name="сonfirm-password"
          value={confirmPassword}
          onChange={hadleChange}
          placeholder="Подтвердите пароль"
          title="Пароли должны совпадать"
        />
        <Icon>
          <PasswordIcon />
        </Icon>
      </IconContainer>

      <LastIconContainer>
        <Input
          type="name"
          name="name"
          value={name}
          onChange={hadleChange}
          placeholder="Ваше имя"
        />
        <Icon>
          <NameIcon />
        </Icon>
      </LastIconContainer>

      <ButtonSubmit type="submit">Регистрация</ButtonSubmit>
      <Link to="/login">
        <ButtonLink type="button">Вход</ButtonLink>
      </Link>
    </Form>
  );
};

export default FormRegistration;
