import AuthController from '../../controllers/AuthController.ts';
import { IInputLabel } from '../../typings/data.ts';
import Block from '../../utils/Block.ts';
import { checkValidation } from '../../utils/validation.ts';
import { Button } from '../Button/index.ts';
import { InputLabel } from '../InputLabel/index.ts';
import { Link } from '../Link/index.ts';
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
