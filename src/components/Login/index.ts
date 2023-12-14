import { IInputLabel } from '../../typings/data';
import Block from '../../utils/Block';
import { checkValidation } from '../../utils/validation';
import { Button } from '../Button';
import { InputLabel } from '../InputLabel';
import { Link } from '../Link';
import template from './login.hbs';

interface ILoginProps {
  loginInputs: IInputLabel[];
}

export class Login extends Block {
  constructor(props: ILoginProps) {
    super(props);
  }

  init() {
    this.children.Link = new Link({
      class: 'homeLink',
      text: 'Нет аккаунта?',
      url: 'register',
    });
    this.children.Inputs = this.props.loginInputs.map(
      (input: IInputLabel) => new InputLabel({ ...input })
    );
    this.children.Button = new Button({
      type: 'submit',
      text: 'Авторизоваться',
      events: {
        click: (e: Event) => {
          e.preventDefault();
          const form = document.querySelector('form');
          if (form) {
            let data = checkValidation(form);
            if (data) {
              console.log(data);
            } else {
              alert('Invalid form');
            }
          }
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}