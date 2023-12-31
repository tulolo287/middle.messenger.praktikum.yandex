export const changeProfileInputs = [
  {
    label: { for: 'email', text: 'Почта' },
    type: 'text',
    name: 'email',
    required: true,
    placeholder: 'email',
    errorText: 'Введите корректный email',
  },
  {
    label: { for: 'login', text: 'Логин' },
    type: 'text',
    name: 'login',
    required: true,
    placeholder: 'login',
    errorText: 'Введите корректный логин',
  },
  {
    label: { for: 'first_name', text: 'Имя' },
    type: 'text',
    name: 'first_name',
    required: true,
    placeholder: 'name',
    errorText: 'Введите корректное имя',
  },
  {
    label: { for: 'second_name', text: 'Фамилия' },
    type: 'text',
    name: 'second_name',
    required: true,
    placeholder: 'surname',
    errorText: 'Введите корректную фамилию',
  },
  {
    label: { for: 'display_name', text: 'Имя в чате' },
    type: 'text',
    name: 'display_name',
    required: true,
    placeholder: 'name',
    errorText: 'Введите корректное имя',
  },
  {
    label: { for: 'phone', text: 'Телефон' },
    type: 'tel',
    name: 'phone',
    required: true,
    placeholder: 'phone',
    errorText: 'Введите корректный телефон',
  },
];
