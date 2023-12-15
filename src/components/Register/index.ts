import { IInputLabel } from '../../typings/data';
import Block from '../../utils/Block';
import { checkValidation } from '../../utils/validation';
import { Button } from '../Button';
import { InputLabel } from '../InputLabel';
import { Link } from '../Link';
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
      url: 'login',
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
            const data = checkValidation(form);
            if (data && data.password === data.second_password) {
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
