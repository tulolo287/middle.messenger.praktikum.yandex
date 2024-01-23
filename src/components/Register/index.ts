import AuthController from '../../controllers/AuthController.ts';
import { IInputLabel } from '../../typings/data.ts';
import Block from '../../utils/Block.ts';
import { checkValidation } from '../../utils/validation.ts';
import { Button } from '../Button/index.ts';
import { InputLabel } from '../InputLabel/index.ts';
import { Link } from '../Link/index.ts';
import template from './register.hbs';

interface IRegister {
  registerInputs: IInputLabel[];
}
export class Register extends Block {
  constructor(props: IRegister) {
    super(props);
  }

  init() {
    this.children.Link = new Link({
      class: 'homeLink',
      text: 'Войти',
      url: '/',
    });
    this.children.Inputs = this.props.registerInputs.map(
      (input: IInputLabel) => new InputLabel({ ...input }),
    );
    this.children.Button = new Button({
      type: 'submit',
      text: 'Зарегистрироваться',
      events: {
        click: (e) => {
          e.preventDefault();
          const form = document.querySelector('form');
          if (form) {
            const formData = checkValidation(form);
            if (formData && formData.password === formData.repeat_password) {
              console.log(formData);
              AuthController.signup(formData);
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
