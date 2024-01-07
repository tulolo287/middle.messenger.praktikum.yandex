import AuthController from '../../controllers/AuthController';
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
      url: '/sign-up',
    });
    this.children.Inputs = this.props.loginInputs.map(
      (input: IInputLabel) => new InputLabel({ ...input }),
    );
    this.children.Button = new Button({
      type: 'submit',
      text: 'Авторизоваться',
      events: {
        click: (e: Event) => {
          e.preventDefault();
          const form = document.querySelector('form');
          if (form) {
            const formData = checkValidation(form);
            if (formData) {
              AuthController.signin(formData);
            } else {
              alert('Неверно заполненная форма');
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
