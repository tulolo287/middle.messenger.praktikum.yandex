export const registerInputs = [
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
     label: { for: 'phone', text: 'Телефон' },
     type: 'tel',
     name: 'phone',
     required: true,
     placeholder: 'phone',
     errorText: 'Введите корректный телефон',
   },
   {
     label: { for: 'password', text: 'Пароль' },
     type: 'password',
     name: 'password',
     required: true,
     placeholder: 'password',
     errorText: 'Введите корректный пароль',
   },
   {
     label: { for: 'second_password', text: 'Пароль (ещё раз)' },
     type: 'password',
     name: 'second_password',
     required: true,
     placeholder: 'password',
     errorText: 'Введите корректный пароль',
   },
 ];