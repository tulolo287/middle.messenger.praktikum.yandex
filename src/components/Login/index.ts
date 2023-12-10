import Block from '../../utils/Block';
import { Button } from '../Button';
import { Input } from '../Input';
import template from './login.hbs';

export class Login extends Block {
  constructor(props) {
    super('div', props);
  }

  init() {
    this.props.inputs = [
      {
        label: { for: 'login', text: 'Логин' },
        type: 'text',
        name: 'login',
        required: true,
        placeholder: 'login',
      },
      {
        label: { for: 'password', text: 'Пароль' },
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
      text: 'Авторизоваться',
 
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
