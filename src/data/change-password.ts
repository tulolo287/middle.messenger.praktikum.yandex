export const changePasswordInputs = [
  {
    label: { for: 'oldPassword', text: 'Старый пароль' },
    type: 'password',
    name: 'oldPassword',
    required: true,
    placeholder: 'old password',
    errorText: 'Введите корректный пароль',
  },
  {
    label: { for: 'newPassword', text: 'Новый пароль' },
    type: 'password',
    name: 'newPassword',
    required: true,
    placeholder: 'new password',
    errorText: 'Введите корректный пароль',
  },
  {
    label: { for: 'newPassword', text: 'Повторите новый пароль' },
    type: 'password',
    name: 'repeat_newPassword',
    required: true,
    placeholder: 'new password',
    errorText: 'Пароли не совпадают',
  },
];
