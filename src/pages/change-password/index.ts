import { Button } from '../../components/Button';
import { InputLabel } from '../../components/InputLabel';
import { Link } from '../../components/Link';
import { changePasswordInputs } from '../../data/change-password';
import { IInputLabel } from '../../typings/data';
import Block from '../../utils/Block';
import { checkValidation } from '../../utils/validation';
import template from './change-password.hbs';

interface ChangePasswordPageProps {
  title: string;
}

export class ChangePasswordPage extends Block {
  constructor(props: ChangePasswordPageProps) {
    super(props);
  }

  init() {
    this.props.changePasswordInputs = changePasswordInputs;
    this.children.changePasswordInputs = this.props.changePasswordInputs.map(
      (input: IInputLabel) => new InputLabel({ ...input }),
    );
    this.children.Link = new Link({
      class: 'homeLink',
      text: '\u2190 Назад',
      url: 'profile',
    });
    this.children.Save = new Button({
      type: 'submit',
      text: 'Сохранить',
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
