import { defaults, error, success } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

defaults.delay = 3000;
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
  });
}

export { successRequest, invalidRequest };
