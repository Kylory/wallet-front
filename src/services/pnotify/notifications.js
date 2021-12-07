import { defaults, error, success } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

defaults.delay = 1000;
defaults.maxTextHeight = null;

function successRequest(text) {
  success({
    title: 'Успешно',
    text,
  });
}

function invalidRequest(text) {
  error({
    title: 'Ошибка',
    text,
    delay: 2000,
  });
}

export { successRequest, invalidRequest };
