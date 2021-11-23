import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { registration } from 'redux/auth/authOperations';
import { invalidRequest } from 'services/pnotify/notifications';

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

let schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(12).required(),
  repeated_password: yup.string().min(6).max(12).required(),
  name: yup.string().required(),
});

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

    if (password !== confirmPassword) {
      return invalidRequest('Пароли не совпадают!');
    }

    schema
      .validate({
        email,
        password,
        repeated_password: confirmPassword,
        name,
      })
      .then(valid => {
        if (valid) {
          dispatch(
            registration({
              email,
              password,
              repeated_password: confirmPassword,
              name,
            }),
          );

          reset();
        }
      })
      .catch(_ =>
        invalidRequest(
          'Введены неверные данные! Проверьте правильно ли вы ввели мейл и пароль',
        ),
      );
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
          title="Email должен иметь примерный вид example@mail.com"
          required
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
          title="Пароль должен состоять минимум от 6 символов, максимум 12 включительно"
          required
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
          required
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
          title="Имя долно состоять минимум от 1 символа, максимум 12 включительно"
          required
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
