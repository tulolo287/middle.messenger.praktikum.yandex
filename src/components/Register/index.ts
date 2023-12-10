import Block from '../../utils/Block';
import { Button } from '../Button';
import { Input } from '../Input';
import template from './register.hbs';

export class Register extends Block {
  constructor(props) {
    super('div', props);
  }
 
  init() {
    this.props.inputs = [
      {
        label: { for: 'email', text: 'Почта' },
        type: 'text',
        name: 'email',
        required: true,
        placeholder: 'email',
      },
      {
        label: { for: 'login', text: 'Логин' },
        type: 'text',
        name: 'login',
        required: true,
        placeholder: 'login',
      },
      {
        label: { for: 'first_name', text: 'Имя' },
        type: 'text',
        name: 'first_name',
        required: true,
        placeholder: 'name',
      },
      {
        label: { for: 'second_name', text: 'Фамилия' },
        type: 'text',
        name: 'second_name',
        required: true,
        placeholder: 'surname',
      },
      {
        label: { for: 'phone', text: 'Телефон' },
        type: 'tel',
        name: 'phone',
        required: true,
        placeholder: 'phone',
      },
      {
        label: { for: 'password', text: 'Пароль' },
        type: 'password',
        name: 'password',
        required: true,
        placeholder: 'password',
      },
      {
        label: { for: 'password', text: 'Пароль (ещё раз)' },
        type: 'password',
        name: 'password',
        required: true,
        placeholder: 'password',
      },
    ];
    this.children.Inputs = this.props.inputs.map(
      (input) => new Input({ ...input })
    );
    this.children.Button = new Button({
      type: 'submit',
      text: 'Зарегистрироваться',
      events: {
        click: (e) => {
          e.preventDefault();
          console.log(e);
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
