import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { logIn } from 'redux/auth/authOperations';
import { invalidRequest } from 'services/pnotify/notifications';

import { ReactComponent as LogoIcon } from 'icons/logo.svg';
import { ReactComponent as EmailIcon } from 'icons/email.svg';
import { ReactComponent as PasswordIcon } from 'icons/password.svg';
// import s from './FormLogin.module.css';

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
  // Underline,
} from './styles';

let schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(12).required(),
});

const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const hadleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'email':
        return setEmail(value);

      case 'password':
        return setPassword(value);

      default:
        break;
    }
  };

  const hadleSubmit = e => {
    e.preventDefault();

    schema
      .validate({
        email,
        password,
      })
      .then(valid => {
        if (valid) {
          dispatch(logIn({ email, password }));

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
  };

  return (
    <Form onSubmit={hadleSubmit}>
      <Logo>
        <LogoIcon />
        <LogoText>Wallet</LogoText>
      </Logo>
      {/* <div className={s.wrapper}>
        <div className={s.inputData}>
        <input type="text" required />
        <Underline />
        <div className={s.underline}></div>
        <label>Name</label>
        </div>
      </div> */}
      <IconContainer>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={hadleChange}
          placeholder="E-mail"
        />
        {/* <Underline /> */}
        <Icon>
          <EmailIcon />
        </Icon>
      </IconContainer>

      <LastIconContainer>
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
      </LastIconContainer>

      <ButtonSubmit type="submit">Вход</ButtonSubmit>
      <Link to="/registration">
        <ButtonLink type="button">Регистрация</ButtonLink>
      </Link>
    </Form>
  );
};

export default FormLogin;
